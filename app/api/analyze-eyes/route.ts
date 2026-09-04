import { NextResponse } from "next/server";
import sharp from "sharp";
import crypto from "crypto";

const OLLAMA_URL =
  "http://127.0.0.1:11434/api/chat";

const MODEL =
  "qwen2.5vl:3b-q8_0";

/* =========================================================
   TYPES
========================================================= */

type EyeShape =
  | "Almond"
  | "Round"
  | "Oval"
  | "Elongated"
  | "Narrow"
  | "Wide"
  | "Tapered"
  | "Mixed/Unclear";

type LidType =
  | "Monolid"
  | "Hooded"
  | "Partial Crease"
  | "Visible Crease"
  | "Unclear";

type EyeObservations = {
  eyeSize:
    | "Small"
    | "Medium"
    | "Large"
    | "Unclear";

  eyeSpacing:
    | "Close-set"
    | "Balanced"
    | "Wide-set"
    | "Unclear";

  horizontalElongation:
    | "Low"
    | "Moderate"
    | "High"
    | "Unclear";

  innerCornerTaper:
    | "Present"
    | "Not obvious"
    | "Unclear";

  outerCornerTaper:
    | "Present"
    | "Not obvious"
    | "Unclear";

  upperLowerContour:
    | "Tapered"
    | "Rounded"
    | "Mixed"
    | "Unclear";

  verticalOpenness:
    | "Narrow"
    | "Moderate"
    | "Open"
    | "Unclear";

  irisExposure:
    | "Limited"
    | "Moderate"
    | "High"
    | "Unclear";

  upperCreasePresent:
    | "Yes"
    | "No"
    | "Unclear";

  upperCreasePattern:
    | "None"
    | "Partial"
    | "Full"
    | "Unclear";

  lidVisibility:
    | "Minimal"
    | "Moderate"
    | "Prominent"
    | "Unclear";

  outerCornerDirection:
    | "Upturned"
    | "Neutral"
    | "Downturned"
    | "Unclear";

  confidence:
    | "Low"
    | "Medium"
    | "High";

  visibleFeatures: string[];
};


/* =========================================================
   CACHE
========================================================= */

const analysisCache =
  new Map<
    string,
    {
      result: unknown;
      timestamp: number;
    }
  >();

const CACHE_DURATION =
  10 * 60 * 1000;


/*
 * IMPORTANT:
 *
 * The old cache only protected completed analyses.
 *
 * If two requests arrived at the same time:
 *
 * request A -> cache miss
 * request B -> cache miss
 *
 * BOTH would call Qwen.
 *
 * This map stores the IN-PROGRESS analysis too.
 */

const inFlightAnalyses =
  new Map<
    string,
    Promise<unknown>
  >();


/* =========================================================
   JSON CLEANUP
========================================================= */

function cleanJson(
  value: string
) {
  return value
    .replace(
      /^```json\s*/i,
      ""
    )
    .replace(
      /^```\s*/i,
      ""
    )
    .replace(
      /\s*```$/i,
      ""
    )
    .trim();
}


/* =========================================================
   IMAGE HASH
========================================================= */

function getImageHash(
  buffer: Buffer
) {
  return crypto
    .createHash("sha256")
    .update(buffer)
    .digest("hex")
    .slice(0, 16);
}


/* =========================================================
   QWEN
========================================================= */

async function askQwen(
  images: string[],
  prompt: string
) {
  const response =
    await fetch(
      OLLAMA_URL,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          model: MODEL,

          messages: [
            {
              role: "user",
              content: prompt,
              images,
            },
          ],

          stream: false,

          options: {
            num_ctx: 8192,
            temperature: 0,
          },
        }),
      }
    );

  if (!response.ok) {
    const text =
      await response.text();

    throw new Error(
      `Ollama returned ${response.status}: ${text}`
    );
  }

  const data =
    await response.json();

  console.log(
    "SIRENA RAW QWEN RESPONSE:",
    data
  );

  const content =
    data.message?.content;

  if (
    !content ||
    typeof content !==
      "string"
  ) {
    throw new Error(
      "Qwen returned no usable response."
    );
  }

  return cleanJson(content);
}


/* =========================================================
   EYE SHAPE CLASSIFIER
   =========================================================

   VERY IMPORTANT:

   Eye shape = geometry of the visible eye opening.

   Lid type = eyelid / crease architecture.

   They are NEVER allowed to determine one another.
========================================================= */
function classifyEyeShape(
  observations: EyeObservations
): {
  eyeShape: EyeShape;
  eyeShapeConfidence: number;
} {
  const {
    horizontalElongation,
    innerCornerTaper,
    outerCornerTaper,
    upperLowerContour,
    verticalOpenness,
  } = observations;

  const scores: Record<
    Exclude<EyeShape, "Mixed/Unclear">,
    number
  > = {
    Almond: 0,
    Round: 0,
    Oval: 0,
    Elongated: 0,
    Narrow: 0,
    Wide: 0,
    Tapered: 0,
  };

  // ALMOND
  if (horizontalElongation === "High") {
    scores.Almond += 3;
  }

  if (horizontalElongation === "Moderate") {
    scores.Almond += 2;
  }

  if (upperLowerContour === "Tapered") {
    scores.Almond += 3;
  }

  if (innerCornerTaper === "Present") {
    scores.Almond += 2;
  }

  if (outerCornerTaper === "Present") {
    scores.Almond += 2;
  }

  if (verticalOpenness === "Moderate") {
    scores.Almond += 1;
  }

  // TAPERED
  if (upperLowerContour === "Tapered") {
    scores.Tapered += 3;
  }

  if (innerCornerTaper === "Present") {
    scores.Tapered += 2;
  }

  if (outerCornerTaper === "Present") {
    scores.Tapered += 2;
  }

  // ROUND
  if (upperLowerContour === "Rounded") {
    scores.Round += 4;
  }

  if (verticalOpenness === "Open") {
    scores.Round += 3;
  }

  // OVAL
  if (upperLowerContour === "Rounded") {
    scores.Oval += 2;
  }

  if (verticalOpenness === "Moderate") {
    scores.Oval += 2;
  }

  // ELONGATED
  if (horizontalElongation === "High") {
    scores.Elongated += 4;
  }

  if (upperLowerContour !== "Rounded") {
    scores.Elongated += 1;
  }

  // NARROW
  if (verticalOpenness === "Narrow") {
    scores.Narrow += 4;
  }

  if (
    horizontalElongation === "Moderate" ||
    horizontalElongation === "High"
  ) {
    scores.Narrow += 1;
  }

  // WIDE
  if (horizontalElongation === "Moderate") {
    scores.Wide += 2;
  }

  if (verticalOpenness === "Open") {
    scores.Wide += 3;
  }

  const entries = Object.entries(scores) as [
    Exclude<EyeShape, "Mixed/Unclear">,
    number
  ][];

  entries.sort((a, b) => b[1] - a[1]);

  const [bestShape, bestScore] = entries[0];
  const secondScore = entries[1][1];

  if (
    bestScore < 4 ||
    bestScore - secondScore < 2
  ) {
    return {
      eyeShape: "Mixed/Unclear",
      eyeShapeConfidence: 50,
    };
  }

  return {
    eyeShape: bestShape,
    eyeShapeConfidence: Math.min(
      95,
      60 + bestScore * 5
    ),
  };
}

/* =========================================================
   LID TYPE
========================================================= */

function classifyLidType(
  observations: EyeObservations
): {
  lidType: LidType;
  lidTypeConfidence: number;
} {
  const {
    upperCreasePresent,
    upperCreasePattern,
    lidVisibility,
  } = observations;


  /* -----------------------------------------------
     MONOLID
  ------------------------------------------------ */

if (
  upperCreasePresent ===
    "No" &&
  upperCreasePattern ===
    "None"
) {
  return {
    lidType:
      "Monolid",
    lidTypeConfidence: 90,
  };
}

  /* -----------------------------------------------
     HOODED
  ------------------------------------------------ */

  if (
    upperCreasePresent ===
      "Yes" &&
    upperCreasePattern ===
      "Partial" &&
    lidVisibility ===
      "Minimal"
  ) {
    return {
      lidType:
        "Hooded",
      lidTypeConfidence: 88,
    };
  }


  /* -----------------------------------------------
     PARTIAL CREASE
  ------------------------------------------------ */

  if (
    upperCreasePresent ===
      "Yes" &&
    upperCreasePattern ===
      "Partial"
  ) {
    return {
      lidType:
        "Partial Crease",
      lidTypeConfidence: 86,
    };
  }


  /* -----------------------------------------------
     VISIBLE CREASE
  ------------------------------------------------ */

  if (
    upperCreasePresent ===
      "Yes" &&
    upperCreasePattern ===
      "Full"
  ) {
    return {
      lidType:
        "Visible Crease",
      lidTypeConfidence: 92,
    };
  }


  /* -----------------------------------------------
     UNCLEAR
  ------------------------------------------------ */

  return {
    lidType:
      "Unclear",
    lidTypeConfidence: 50,
  };
}


/* =========================================================
   ANALYSIS
========================================================= */

async function performAnalysis(
  originalBuffer: Buffer,
  imageHash: string
) {
  /* -----------------------------------------------
     Dimensions
  ------------------------------------------------ */

  const metadata =
    await sharp(
      originalBuffer
    ).metadata();

  const width =
    metadata.width;

  const height =
    metadata.height;

  if (
    !width ||
    !height
  ) {
    throw new Error(
      "Unable to determine image dimensions."
    );
  }

  console.log(
    "Original:",
    width,
    "x",
    height
  );


  /* -----------------------------------------------
     Eye band
  ------------------------------------------------ */

  const bandTop =
    Math.round(
      height * 0.22
    );

  const bandHeight =
    Math.round(
      height * 0.48
    );

  const safeBandHeight =
    Math.min(
      bandHeight,
      height -
        bandTop
    );


  /* -----------------------------------------------
     Left / right eye regions
  ------------------------------------------------ */

  const eyeWidth =
    Math.round(
      width * 0.48
    );

  const leftEyeLeft =
    0;

  const rightEyeLeft =
    Math.round(
      width * 0.52
    );


  const leftEyeBuffer =
    await sharp(
      originalBuffer
    )
      .extract({
        left:
          leftEyeLeft,

        top:
          bandTop,

        width:
          Math.min(
            eyeWidth,
            width
          ),

        height:
          safeBandHeight,
      })
      .resize({
        width: 768,
        height: 512,
        fit: "cover",
      })
      .jpeg({
        quality: 92,
      })
      .toBuffer();


  const rightEyeBuffer =
    await sharp(
      originalBuffer
    )
      .extract({
        left:
          Math.min(
            rightEyeLeft,
            width -
              eyeWidth
          ),

        top:
          bandTop,

        width:
          Math.min(
            eyeWidth,
            width
          ),

        height:
          safeBandHeight,
      })
      .resize({
        width: 768,
        height: 512,
        fit: "cover",
      })
      .jpeg({
        quality: 92,
      })
      .toBuffer();


  const leftEyeBase64 =
    leftEyeBuffer.toString(
      "base64"
    );

  const rightEyeBase64 =
    rightEyeBuffer.toString(
      "base64"
    );


  console.log(
    "SIRENA LEFT EYE CROP:",
    leftEyeBuffer.length,
    "bytes"
  );

  console.log(
    "SIRENA RIGHT EYE CROP:",
    rightEyeBuffer.length,
    "bytes"
  );


  /* =================================================
     PROMPT
  ================================================= */

  const prompt = `
You are Sirena Eye Atelier's visual eye-analysis system.

You are given TWO eye-region images from the SAME PERSON.

IMAGE 1 = LEFT SIDE.
IMAGE 2 = RIGHT SIDE.

Your job is to analyze the visible eyes only.

IGNORE:
- hair
- jewelry
- clothing
- skin tone
- attractiveness
- identity
- facial attractiveness
- makeup as a reason for classification

========================================================
CRITICAL RULE: TWO SEPARATE CLASSIFICATIONS
========================================================

There are two completely independent concepts:

A. EYE SHAPE
B. LID TYPE

DO NOT combine them.

Eye shape describes the GEOMETRY OF THE EYE OPENING.

Lid type describes the UPPER EYELID / CREASE.

A person can absolutely have:

Almond + Monolid

Almond + Hooded

Round + Monolid

Round + Hooded

Upturned + Visible Crease

Downturned + Monolid

Therefore:

A MISSING CREASE MUST NEVER BE USED TO DECIDE THAT THE EYE IS NOT ALMOND.

========================================================
EYE SHAPE
========================================================

Determine the primary visible eye-opening geometry.

Possible shape families:

- Almond
- Round
- Oval
- Elongated
- Narrow
- Wide
- Tapered
- Mixed/Unclear

Use these definitions:

ALMOND:
The opening is longer horizontally than vertically, and the upper and lower contours taper toward the corners.

ROUND:
The opening has substantial vertical openness and visibly rounded upper/lower contours.

OVAL:
The opening is rounded but more vertically balanced than a strongly elongated eye.

ELONGATED:
The eye opening is strongly horizontally extended.

NARROW:
The visible vertical opening is particularly narrow.

WIDE:
The eye has relatively generous horizontal and vertical openness without the strong tapered geometry of almond.

TAPERED:
The contours visibly converge toward the corners but do not provide enough evidence for a stronger almond classification.

If evidence is insufficient, use Mixed/Unclear.

========================================================
LID TYPE
========================================================

Determine separately:

- Monolid
- Hooded
- Partial Crease
- Visible Crease
- Unclear

MONOLID:
No distinct upper eyelid crease is visibly present.

HOODED:
An upper crease exists, but upper-lid skin substantially overlaps or obscures the crease/lid area.

PARTIAL CREASE:
A crease is visible only along part of the upper lid.

VISIBLE CREASE:
A clearly visible upper eyelid crease is present across most of the eye.

If the crease cannot be confidently seen, return Unclear.

========================================================
CORNER DIRECTION
========================================================

Determine:

- Upturned
- Neutral
- Downturned
- Unclear

This is separate from eye shape.

========================================================
OTHER OBSERVATIONS
========================================================

Also evaluate:

eye size
eye spacing
horizontal elongation
inner-corner taper
outer-corner taper
upper/lower contour
vertical openness
iris exposure
upper crease presence
upper crease pattern
lid visibility

Do NOT infer lid type from eye shape.

Do NOT infer eye shape from crease visibility.

Use both eye images.

If the two eyes differ slightly, describe the overall dominant appearance.

Return ONLY valid JSON.

Use exactly:

{
  "eyeSize": "",
  "eyeSpacing": "",
  "horizontalElongation": "",
  "innerCornerTaper": "",
  "outerCornerTaper": "",
  "upperLowerContour": "",
  "verticalOpenness": "",
  "irisExposure": "",
  "upperCreasePresent": "",
  "upperCreasePattern": "",
  "lidVisibility": "",
  "outerCornerDirection": "",
  "confidence": "",
  "visibleFeatures": []
}

Allowed values:

eyeSize:
Small
Medium
Large
Unclear

eyeSpacing:
Close-set
Balanced
Wide-set
Unclear

horizontalElongation:
Low
Moderate
High
Unclear

innerCornerTaper:
Present
Not obvious
Unclear

outerCornerTaper:
Present
Not obvious
Unclear

upperLowerContour:
Tapered
Rounded
Mixed
Unclear

verticalOpenness:
Narrow
Moderate
Open
Unclear

irisExposure:
Limited
Moderate
High
Unclear

upperCreasePresent:
Yes
No
Unclear

upperCreasePattern:
None
Partial
Full
Unclear

lidVisibility:
Minimal
Moderate
Prominent
Unclear

outerCornerDirection:
Upturned
Neutral
Downturned
Unclear

confidence:
Low
Medium
High

visibleFeatures:
Return 2–4 concise observations about the eyes.

Return ONLY JSON.
`;


  console.log(
    "===================================="
  );

  console.log(
    "SIRENA: Sending LEFT + RIGHT eye crops to Qwen..."
  );


  /* -----------------------------------------------
     Qwen
  ------------------------------------------------ */

  const rawResult =
    await askQwen(
      [
        leftEyeBase64,
        rightEyeBase64,
      ],
      prompt
    );


  let observations:
    EyeObservations;

  try {
    observations =
      JSON.parse(
        rawResult
      );
  } catch (
    error
  ) {
    console.error(
      "SIRENA INVALID JSON:",
      rawResult
    );

    throw new Error(
      "Qwen returned invalid eye-analysis JSON."
    );
  }


  /* -----------------------------------------------
     Observations
  ------------------------------------------------ */

  console.log(
    "===================================="
  );

  console.log(
    "SIRENA VISUAL OBSERVATIONS:"
  );

  console.log(
    JSON.stringify(
      observations,
      null,
      2
    )
  );


  /* -----------------------------------------------
     Independent classification
  ------------------------------------------------ */

  const shape =
    classifyEyeShape(
      observations
    );

  const lid =
    classifyLidType(
      observations
    );


  /* -----------------------------------------------
     Final result
  ------------------------------------------------ */

  const finalResult = {
    eyeShape:
      shape.eyeShape,

    eyeShapeConfidence:
      shape.eyeShapeConfidence,

    lidType:
      lid.lidType,

    lidTypeConfidence:
      lid.lidTypeConfidence,

    eyeSize:
      observations.eyeSize,

    eyeSpacing:
      observations.eyeSpacing,

    horizontalElongation:
      observations.horizontalElongation,

    innerCornerTaper:
      observations.innerCornerTaper,

    outerCornerTaper:
      observations.outerCornerTaper,

    upperLowerContour:
      observations.upperLowerContour,

    verticalOpenness:
      observations.verticalOpenness,

    irisExposure:
      observations.irisExposure,

    lidVisibility:
      observations.lidVisibility,

    outerCornerDirection:
      observations.outerCornerDirection,

    creaseVisibility:
      observations.upperCreasePresent,

    creasePattern:
      observations.upperCreasePattern,

    eyeOpenness:
      observations.verticalOpenness,

    visibleFeatures:
      observations.visibleFeatures,
  };


  console.log(
    "===================================="
  );

  console.log(
    "SIRENA FINAL CLASSIFICATION:"
  );

  console.log(
    JSON.stringify(
      finalResult,
      null,
      2
    )
  );

  console.log(
    "===================================="
  );


  /* -----------------------------------------------
     Save completed result
  ------------------------------------------------ */

  analysisCache.set(
    imageHash,
    {
      result:
        finalResult,

      timestamp:
        Date.now(),
    }
  );


  return finalResult;
}


/* =========================================================
   MAIN ENDPOINT
========================================================= */

export async function POST(
  request: Request
) {
  try {
    const body =
      await request.json();

    const image =
      body.image;

    if (
      !image ||
      typeof image !==
        "string"
    ) {
      return NextResponse.json(
        {
          error:
            "No portrait was provided.",
        },
        {
          status: 400,
        }
      );
    }


    /* -----------------------------------------------
       Decode
    ------------------------------------------------ */

    const base64Image =
      image.replace(
        /^data:image\/[^;]+;base64,/,
        ""
      );

    const originalBuffer =
      Buffer.from(
        base64Image,
        "base64"
      );


    /* -----------------------------------------------
       HASH
    ------------------------------------------------ */

    const imageHash =
      getImageHash(
        originalBuffer
      );


    console.log(
      "===================================="
    );

    console.log(
      "SIRENA IMAGE DIAGNOSTIC"
    );

    console.log(
      "MODEL:",
      MODEL
    );

    console.log(
      "IMAGE HASH:",
      imageHash
    );

    console.log(
      "IMAGE BYTES:",
      originalBuffer.length
    );

    console.log(
      "===================================="
    );


    /* -----------------------------------------------
       COMPLETED CACHE
    ------------------------------------------------ */

    const cached =
      analysisCache.get(
        imageHash
      );

    if (
      cached &&
      Date.now() -
        cached.timestamp <
        CACHE_DURATION
    ) {
      console.log(
        "SIRENA CACHE HIT:",
        imageHash
      );

      return NextResponse.json({
        result:
          JSON.stringify(
            cached.result
          ),

        imageHash,

        model:
          MODEL,

        cached: true,
      });
    }


    /* -----------------------------------------------
       IN-FLIGHT PROTECTION
       -----------------------------------------------

       If the browser accidentally sends the same
       image twice before the first Qwen request
       finishes, the second request WAITS for the
       first one instead of launching another Qwen call.
    ------------------------------------------------ */

    const existingAnalysis =
      inFlightAnalyses.get(
        imageHash
      );

    if (
      existingAnalysis
    ) {
      console.log(
        "SIRENA IN-FLIGHT HIT:",
        imageHash
      );

      const result =
        await existingAnalysis;

      return NextResponse.json({
        result:
          JSON.stringify(
            result
          ),

        imageHash,

        model:
          MODEL,

        cached: true,
      });
    }


    /* -----------------------------------------------
       START ONE ANALYSIS
    ------------------------------------------------ */

    const analysisPromise =
      performAnalysis(
        originalBuffer,
        imageHash
      );


    inFlightAnalyses.set(
      imageHash,
      analysisPromise
    );


    try {
      const result =
        await analysisPromise;

      return NextResponse.json({
        result:
          JSON.stringify(
            result
          ),

        imageHash,

        model:
          MODEL,

        cached: false,
      });

    } finally {
      /*
       * Remove only after the analysis is finished.
       */
      inFlightAnalyses.delete(
        imageHash
      );
    }

  } catch (
    error
  ) {
    console.error(
      "===================================="
    );

    console.error(
      "SIRENA EYE ANALYSIS ERROR"
    );

    console.error(
      error
    );

    console.error(
      "===================================="
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to analyze eyes.",
      },
      {
        status: 500,
      }
    );
  }
}