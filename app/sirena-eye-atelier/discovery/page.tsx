"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Analysis = {
  eyeShape: string;
  lidType: string;
  eyeSize: string;
  eyeSpacing: string;
  visibleFeatures: string[];
  education?: string;

  horizontalElongation?: string;
  innerCornerTaper?: string;
  outerCornerTaper?: string;
  verticalOpenness?: string;
  irisExposure?: string;
  lidVisibility?: string;
  outerCornerDirection?: string;
  creaseVisibility?: string;
  creasePattern?: string;
};

type SocialFormat = "feed" | "story" | "tiktok";

const SOCIAL_SIZES: Record<
  SocialFormat,
  { width: number; height: number; label: string }
> = {
  feed: {
    width: 1080,
    height: 1350,
    label: "Instagram Feed",
  },
  story: {
    width: 1080,
    height: 1920,
    label: "Instagram Story",
  },
  tiktok: {
    width: 1080,
    height: 1920,
    label: "TikTok",
  },
};

export default function DiscoveryPage() {
  const [photoUrl, setPhotoUrl] = useState("");
  const [analysis, setAnalysis] =
    useState<Analysis | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [shareMessage, setShareMessage] =
    useState("");

  const canvasRef =
    useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const savedPhoto =
      sessionStorage.getItem("sirenaPhoto");

    if (!savedPhoto) {
      setError("No portrait was found.");
      setLoading(false);
      return;
    }

    const portrait =
      savedPhoto;

    setPhotoUrl(portrait);

    async function analysePhoto() {
      try {
        const response = await fetch(
          "/api/analyze-eyes",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              image: portrait,
            }),
          }
        );

        const data =
          await response.json();

        if (!response.ok) {
          console.error(
            "AI ERROR:",
            data
          );

          throw new Error(
            data.error ||
              `Analysis failed with status ${response.status}.`
          );
        }

        const parsed =
          typeof data.result === "string"
            ? JSON.parse(data.result)
            : data.result;

        setAnalysis(parsed);
      } catch (err) {
        console.error(
          "Analysis error:",
          err
        );

        setError(
          err instanceof Error
            ? err.message
            : "We could not complete the eye analysis."
        );
      } finally {
        setLoading(false);
      }
    }

    analysePhoto();
  }, []);

  function showMessage(
    message: string
  ) {
    setShareMessage(message);

    window.setTimeout(() => {
      setShareMessage("");
    }, 3000);
  }

  /*
   * Load the uploaded portrait into an Image object.
   */
  async function loadPhoto(): Promise<HTMLImageElement> {
    return new Promise(
      (resolve, reject) => {
        const img =
          new Image();

        img.onload = () =>
          resolve(img);

        img.onerror = () =>
          reject(
            new Error(
              "Unable to load the portrait."
            )
          );

        img.src = photoUrl;
      }
    );
  }

  /*
   * Draw a cover-cropped image.
   */
  function drawCoverImage(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    const imageRatio =
      img.width / img.height;

    const targetRatio =
      width / height;

    let sourceWidth =
      img.width;

    let sourceHeight =
      img.height;

    let sourceX = 0;
    let sourceY = 0;

    if (
      imageRatio > targetRatio
    ) {
      sourceWidth =
        img.height *
        targetRatio;

      sourceX =
        (img.width -
          sourceWidth) /
        2;
    } else {
      sourceHeight =
        img.width /
        targetRatio;

      sourceY =
        (img.height -
          sourceHeight) /
        2;
    }

    ctx.drawImage(
      img,
      sourceX,
      sourceY,
      sourceWidth,
      sourceHeight,
      x,
      y,
      width,
      height
    );
  }

  function wrapText(
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ) {
    const words =
      text.split(" ");

    const lines: string[] = [];

    let line = "";

    for (const word of words) {
      const test =
        line.length
          ? `${line} ${word}`
          : word;

      if (
        ctx.measureText(test)
          .width > maxWidth &&
        line
      ) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }

    if (line) {
      lines.push(line);
    }

    return lines;
  }

  /*
   * Generate the actual social PNG.
   */
  async function generateSocialCard(
    format: SocialFormat
  ): Promise<Blob> {
    if (
      !analysis ||
      !photoUrl
    ) {
      throw new Error(
        "Your result is not ready yet."
      );
    }

    const size =
      SOCIAL_SIZES[format];

    const canvas =
      canvasRef.current ||
      document.createElement(
        "canvas"
      );

    canvas.width =
      size.width;

    canvas.height =
      size.height;

    const ctx =
      canvas.getContext("2d");

    if (!ctx) {
      throw new Error(
        "Unable to create social card."
      );
    }

    const img =
      await loadPhoto();

    /*
     * Sirena editorial background.
     */
    ctx.fillStyle =
      "#F5F1EA";

    ctx.fillRect(
      0,
      0,
      size.width,
      size.height
    );

    const isFeed =
      format === "feed";

    const isVertical =
      format === "story" ||
      format === "tiktok";

    /*
     * Header.
     */
    ctx.fillStyle =
      "#1D3433";

    ctx.textAlign =
      "center";

    ctx.font =
      "500 24px Arial, sans-serif";

    ctx.letterSpacing =
      "6px";

    ctx.fillText(
      "HOUSE OF SIRENA",
      size.width / 2,
      isVertical
        ? 105
        : 90
    );

    ctx.letterSpacing =
      "0px";

    ctx.font =
      "300 48px Georgia, serif";

    ctx.fillText(
      "SIRENA EYE ATELIER",
      size.width / 2,
      isVertical
        ? 165
        : 150
    );

    /*
     * Portrait area.
     */
    const imageMargin =
      isFeed ? 90 : 85;

    const imageTop =
      isFeed ? 215 : 245;

    const imageWidth =
      size.width -
      imageMargin * 2;

    const imageHeight =
      isFeed
        ? 540
        : 830;

    drawCoverImage(
      ctx,
      img,
      imageMargin,
      imageTop,
      imageWidth,
      imageHeight
    );

    /*
     * Subtle portrait border.
     */
    ctx.strokeStyle =
      "#C9C0B4";

    ctx.lineWidth =
      2;

    ctx.strokeRect(
      imageMargin,
      imageTop,
      imageWidth,
      imageHeight
    );

    /*
     * Result label.
     */
    const resultTop =
      imageTop +
      imageHeight +
      (isFeed ? 75 : 95);

    ctx.fillStyle =
      "#65706C";

    ctx.font =
      "500 18px Arial, sans-serif";

    ctx.letterSpacing =
      "4px";

    ctx.fillText(
      "YOUR EYE PROFILE",
      size.width / 2,
      resultTop
    );

    ctx.letterSpacing =
      "0px";

    /*
     * Eye shape.
     */
    ctx.fillStyle =
      "#1D3433";

    ctx.font =
      isFeed
        ? "300 72px Georgia, serif"
        : "300 82px Georgia, serif";

    ctx.fillText(
      analysis.eyeShape,
      size.width / 2,
      resultTop + 82
    );

    /*
     * Size + spacing.
     */
    ctx.fillStyle =
      "#65706C";

    ctx.font =
      "400 24px Arial, sans-serif";

    ctx.fillText(
      `${analysis.eyeSize} · ${analysis.eyeSpacing}`,
      size.width / 2,
      resultTop + 125
    );

    /*
     * Divider.
     */
    const dividerY =
      resultTop + 175;

    ctx.strokeStyle =
      "#C9C0B4";

    ctx.lineWidth =
      1;

    ctx.beginPath();

    ctx.moveTo(
      size.width * 0.22,
      dividerY
    );

    ctx.lineTo(
      size.width * 0.78,
      dividerY
    );

    ctx.stroke();

    /*
     * What we notice.
     */
    ctx.fillStyle =
      "#65706C";

    ctx.font =
      "500 17px Arial, sans-serif";

    ctx.letterSpacing =
      "3px";

    ctx.fillText(
      "WHAT WE NOTICE",
      size.width / 2,
      dividerY + 55
    );

    ctx.letterSpacing =
      "0px";

    const features =
      analysis.visibleFeatures
        ?.slice(0, 3) || [];

    let featureY =
      dividerY + 105;

    ctx.fillStyle =
      "#1D3433";

    ctx.font =
      "400 22px Arial, sans-serif";

    for (
      const feature of features
    ) {
      ctx.fillText(
        feature,
        size.width / 2,
        featureY
      );

      featureY += 38;
    }

    /*
     * Footer.
     */
    const footerY =
      size.height -
      (isFeed ? 55 : 80);

    ctx.fillStyle =
      "#65706C";

    ctx.font =
      "400 18px Arial, sans-serif";

    ctx.fillText(
      "@house.of.sirena",
      size.width / 2,
      footerY
    );

    /*
     * Return PNG.
     */
    return new Promise(
      (resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(
                new Error(
                  "Unable to create image."
                )
              );
            }
          },
          "image/png",
          1
        );
      }
    );
  }

  /*
   * Save a social card.
   */
  async function saveSocialCard(
    format: SocialFormat
  ) {
    try {
      showMessage(
        `Creating ${SOCIAL_SIZES[format].label} card…`
      );

      const blob =
        await generateSocialCard(
          format
        );

      const url =
        URL.createObjectURL(
          blob
        );

      const link =
        document.createElement(
          "a"
        );

      link.href = url;

      link.download =
        `sirena-eye-atelier-${format}.png`;

      document.body.appendChild(
        link
      );

      link.click();

      link.remove();

      URL.revokeObjectURL(
        url
      );

      showMessage(
        `${SOCIAL_SIZES[format].label} card saved.`
      );
    } catch (err) {
      console.error(
        "SOCIAL CARD ERROR:",
        err
      );

      showMessage(
        "We couldn't create the social card."
      );
    }
  }

  /*
   * Native device sharing of the actual PNG.
   *
   * On supported phones this can open the native
   * share sheet and allow the user to choose Instagram,
   * TikTok, Messages, WhatsApp, etc.
   */
  async function shareSocialCard(
    format: SocialFormat
  ) {
    try {
      showMessage(
        "Preparing your Sirena card…"
      );

      const blob =
        await generateSocialCard(
          format
        );

      const file =
        new File(
          [
            blob,
          ],
          `sirena-eye-atelier-${format}.png`,
          {
            type: "image/png",
          }
        );

      const shareData =
        {
          title:
            "My Sirena Eye Atelier",
          text:
            `My eye profile is ${analysis?.eyeShape}. Discover yours with House of Sirena.`,
          files: [file],
        };

      if (
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({
          files: [file],
        })
      ) {
        await navigator.share(
          shareData
        );

        setShareMessage("");
        return;
      }

      /*
       * Browser doesn't support file sharing.
       * Save the actual image instead.
       */
      const url =
        URL.createObjectURL(
          blob
        );

      const link =
        document.createElement(
          "a"
        );

      link.href = url;

      link.download =
        `sirena-eye-atelier-${format}.png`;

      document.body.appendChild(
        link
      );

      link.click();

      link.remove();

      URL.revokeObjectURL(
        url
      );

      showMessage(
        "Your Sirena card was saved. You can now post it to the platform of your choice."
      );
    } catch (err) {
      /*
       * User cancelling native share isn't an error
       * that needs to be shown.
       */
      if (
        err instanceof Error &&
        err.name ===
          "AbortError"
      ) {
        return;
      }

      console.error(
        "SHARE ERROR:",
        err
      );

      showMessage(
        "Sharing wasn't available, so we'll save the card instead."
      );

      try {
        await saveSocialCard(
          format
        );
      } catch {
        // Nothing else to do.
      }
    }
  }

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(
        window.location.href
      );

      showMessage(
        "Result link copied."
      );
    } catch {
      showMessage(
        "Unable to copy the link."
      );
    }
  }

  function handlePrint() {
    window.print();
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* Hidden canvas used to generate social images */}

      <canvas
        ref={canvasRef}
        className="hidden"
      />


      {/* =====================================================
          SCREEN
      ====================================================== */}

      <div className="print:hidden">

        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">

          <header className="text-center mb-14">

            <p className="font-body uppercase tracking-[0.4em] text-[10px] md:text-xs text-[var(--text-secondary)] mb-5">
              House of Sirena
            </p>

            <h1 className="font-heading text-5xl md:text-7xl font-light tracking-tight mb-5">
              Sirena Eye Atelier
            </h1>

            <p className="font-body text-sm md:text-base text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              A closer look at the natural
              architecture of your eyes.
            </p>

          </header>


          {loading && (
            <div className="max-w-3xl mx-auto text-center py-20">

              <div className="w-10 h-10 border border-[var(--border-light)] border-t-[var(--deep-lagoon)] rounded-full animate-spin mx-auto mb-8" />

              <p className="font-heading text-3xl mb-3">
                Discovering your eyes
              </p>

              <p className="font-body text-sm text-[var(--text-secondary)]">
                Your private consultation
                is being prepared.
              </p>

            </div>
          )}


          {error && (
            <div className="max-w-xl mx-auto text-center py-20">

              <p className="font-heading text-3xl mb-4">
                Something went wrong
              </p>

              <p className="font-body text-sm text-[var(--text-secondary)] leading-relaxed">
                {error}
              </p>

            </div>
          )}


          {analysis &&
            !loading &&
            !error && (
              <section
                className="max-w-5xl mx-auto"
              >

                {/* ============================================
                    RESULT CARD
                ============================================= */}

                <div
                  id="sirena-result-card"
                  className="border border-[var(--border-light)] bg-white/40"
                >

                  <div className="grid md:grid-cols-[0.8fr_1.2fr]">

                    <div className="relative min-h-[420px] md:min-h-[620px] bg-black/5">

                      {photoUrl && (
                        <img
                          src={photoUrl}
                          alt="Your Sirena Eye Atelier portrait"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      )}

                      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/70 via-black/20 to-transparent">

                        <p className="font-body text-[10px] uppercase tracking-[0.35em] text-white/80">
                          Your Sirena Portrait
                        </p>

                      </div>

                    </div>


                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">

                      <p className="font-body uppercase tracking-[0.3em] text-[10px] text-[var(--text-secondary)] mb-5">
                        Your Eye Profile
                      </p>

                      <h2 className="font-heading text-5xl md:text-6xl font-light mb-10">
                        {analysis.eyeShape}
                      </h2>
                      <div className="mb-10">
  <p className="font-body uppercase tracking-[0.2em] text-[10px] text-[var(--text-secondary)] mb-2">
    Lid Type
  </p>

  <p className="font-heading text-2xl">
    {analysis.lidType}
  </p>
</div>

                      <div className="grid grid-cols-2 gap-y-8 border-y border-[var(--border-light)] py-8 mb-10">

                        <div>
                          <p className="font-body uppercase tracking-[0.2em] text-[10px] text-[var(--text-secondary)] mb-2">
                            Eye Size
                          </p>

                          <p className="font-heading text-2xl">
                            {analysis.eyeSize}
                          </p>
                        </div>

                        <div>
                          <p className="font-body uppercase tracking-[0.2em] text-[10px] text-[var(--text-secondary)] mb-2">
                            Eye Spacing
                          </p>

                          <p className="font-heading text-2xl">
                            {analysis.eyeSpacing}
                          </p>
                        </div>

                      </div>

                      {analysis.visibleFeatures?.length > 0 && (
                        <div>

                          <p className="font-body uppercase tracking-[0.2em] text-[10px] text-[var(--text-secondary)] mb-5">
                            What We Notice
                          </p>

                          <div className="space-y-3">

                            {analysis.visibleFeatures
                              .slice(0, 4)
                              .map(
                                (
                                  feature,
                                  index
                                ) => (
                                  <div
                                    key={`${feature}-${index}`}
                                    className="flex items-center gap-3"
                                  >

                                    <span className="w-1 h-1 rounded-full bg-[var(--deep-lagoon)] shrink-0" />

                                    <span className="font-body text-sm text-[var(--text-secondary)]">
                                      {feature}
                                    </span>

                                  </div>
                                )
                              )}

                          </div>

                        </div>
                      )}

                    </div>

                  </div>


                  <div className="border-t border-[var(--border-light)] px-8 md:px-12 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    <p className="font-heading text-xl italic">
                      Your natural architecture,
                      beautifully understood.
                    </p>

                    <p className="font-body text-[9px] uppercase tracking-[0.3em] text-[var(--text-secondary)]">
                      HOUSE OF SIRENA
                    </p>

                  </div>

                </div>


                {/* ============================================
                    SOCIAL SHARING
                ============================================= */}

                <section className="mt-12">

                  <div className="text-center mb-7">

                    <p className="font-body uppercase tracking-[0.3em] text-[10px] text-[var(--text-secondary)] mb-3">
                      Share Your Sirena Profile
                    </p>

                    <p className="font-body text-sm text-[var(--text-secondary)]">
                      Choose a format designed for each platform.
                    </p>

                  </div>


                  <div className="grid md:grid-cols-3 gap-4">

                    {/* Instagram Feed */}

                    <div className="border border-[var(--border-light)] p-6 bg-white/30">

                      <div className="text-center mb-5">

                        <p className="font-heading text-xl mb-1">
                          Instagram Feed
                        </p>

                        <p className="font-body text-xs text-[var(--text-secondary)]">
                          1080 × 1350 · 4:5
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          shareSocialCard(
                            "feed"
                          )
                        }
                        className="w-full px-5 py-3 bg-[var(--deep-lagoon)] text-white font-body text-sm hover:opacity-90 transition"
                      >
                        Share Feed Card
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          saveSocialCard(
                            "feed"
                          )
                        }
                        className="w-full mt-2 px-5 py-3 border border-[var(--border-light)] font-body text-xs hover:bg-black/5 transition"
                      >
                        Save Image
                      </button>

                    </div>


                    {/* Instagram Story */}

                    <div className="border border-[var(--border-light)] p-6 bg-white/30">

                      <div className="text-center mb-5">

                        <p className="font-heading text-xl mb-1">
                          Instagram Story
                        </p>

                        <p className="font-body text-xs text-[var(--text-secondary)]">
                          1080 × 1920 · 9:16
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          shareSocialCard(
                            "story"
                          )
                        }
                        className="w-full px-5 py-3 bg-[var(--deep-lagoon)] text-white font-body text-sm hover:opacity-90 transition"
                      >
                        Share Story Card
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          saveSocialCard(
                            "story"
                          )
                        }
                        className="w-full mt-2 px-5 py-3 border border-[var(--border-light)] font-body text-xs hover:bg-black/5 transition"
                      >
                        Save Image
                      </button>

                    </div>


                    {/* TikTok */}

                    <div className="border border-[var(--border-light)] p-6 bg-white/30">

                      <div className="text-center mb-5">

                        <p className="font-heading text-xl mb-1">
                          TikTok
                        </p>

                        <p className="font-body text-xs text-[var(--text-secondary)]">
                          1080 × 1920 · 9:16
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          shareSocialCard(
                            "tiktok"
                          )
                        }
                        className="w-full px-5 py-3 bg-[var(--deep-lagoon)] text-white font-body text-sm hover:opacity-90 transition"
                      >
                        Share TikTok Card
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          saveSocialCard(
                            "tiktok"
                          )
                        }
                        className="w-full mt-2 px-5 py-3 border border-[var(--border-light)] font-body text-xs hover:bg-black/5 transition"
                      >
                        Save Image
                      </button>

                    </div>

                  </div>


                  {shareMessage && (
                    <p className="text-center font-body text-xs text-[var(--text-secondary)] mt-5">
                      {shareMessage}
                    </p>
                  )}


                  {/* General actions */}

                  <div className="flex flex-col sm:flex-row justify-center gap-3 mt-7">

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="px-7 py-4 border border-[var(--border-light)] font-body text-sm hover:bg-black/5 transition"
                    >
                      Copy Result Link
                    </button>

                    <button
                      type="button"
                      onClick={handlePrint}
                      className="px-7 py-4 border border-[var(--border-light)] font-body text-sm hover:bg-black/5 transition"
                    >
                      Print / Save PDF
                    </button>

                  </div>

                </section>


                {/* Social accounts */}

                <div className="text-center mt-16">

                  <p className="font-body uppercase tracking-[0.35em] text-[10px] text-[var(--text-secondary)] mb-5">
                    Continue the Sirena journey
                  </p>

                  <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">

                    <a
                      href="https://www.instagram.com/house.of.sirena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm hover:opacity-60 transition"
                    >
                      Instagram · @house.of.sirena
                    </a>

                    <a
                      href="https://www.tiktok.com/@house.of.sirena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm hover:opacity-60 transition"
                    >
                      TikTok · @house.of.sirena
                    </a>

                  </div>

                </div>


                <div className="text-center mt-14">

                  <Link
                    href="/sirena-eye-atelier/education"
                    className="inline-flex items-center justify-center px-10 py-4 bg-[var(--deep-lagoon)] text-white font-body text-sm tracking-wide hover:opacity-90 transition"
                  >
                    Continue Your Atelier →
                  </Link>

                </div>

              </section>
            )}

        </div>

      </div>


      {/* =====================================================
          PRINT VERSION
      ====================================================== */}

      {analysis &&
        !loading &&
        !error && (
          <div className="hidden print:block bg-white text-black min-h-screen">

            <div className="max-w-[760px] mx-auto px-12 py-14">

              <div className="text-center mb-12">

                <p className="uppercase tracking-[0.4em] text-[9px] mb-4">
                  HOUSE OF SIRENA
                </p>

                <h1 className="text-5xl font-light mb-3">
                  Sirena Eye Atelier
                </h1>

                <p className="text-xs tracking-wide">
                  Your Eye Profile
                </p>

              </div>


              {photoUrl && (
                <div className="w-full h-[420px] overflow-hidden mb-10">

                  <img
                    src={photoUrl}
                    alt="Your Sirena portrait"
                    className="w-full h-full object-cover"
                  />

                </div>
              )}


              <div className="text-center border-y border-black/20 py-10 mb-10">

                <p className="uppercase tracking-[0.25em] text-[9px] mb-5">
                  Eye Shape
                </p>

                <h2 className="text-5xl font-light">
                  {analysis.eyeShape}
                </h2>

              </div>


              <div className="grid grid-cols-2 gap-8 text-center mb-12">

                <div>
                  <p className="uppercase tracking-[0.2em] text-[9px] mb-2">
                    Eye Size
                  </p>

                  <p className="text-2xl">
                    {analysis.eyeSize}
                  </p>
                </div>

                <div>
                  <p className="uppercase tracking-[0.2em] text-[9px] mb-2">
                    Eye Spacing
                  </p>

                  <p className="text-2xl">
                    {analysis.eyeSpacing}
                  </p>
                </div>

              </div>


              {analysis.visibleFeatures?.length > 0 && (
                <div className="text-center mb-14">

                  <p className="uppercase tracking-[0.25em] text-[9px] mb-6">
                    What We Notice
                  </p>

                  <div className="space-y-3">

                    {analysis.visibleFeatures
                      .slice(0, 4)
                      .map(
                        (
                          feature,
                          index
                        ) => (
                          <p
                            key={`${feature}-${index}`}
                            className="text-sm"
                          >
                            {feature}
                          </p>
                        )
                      )}

                  </div>

                </div>
              )}


              <div className="text-center border-t border-black/20 pt-8">

                <p className="text-lg italic mb-5">
                  Your natural architecture,
                  beautifully understood.
                </p>

                <p className="uppercase tracking-[0.25em] text-[8px]">
                  @house.of.sirena
                </p>

                <p className="text-[8px] mt-2">
                  Instagram · TikTok
                </p>

              </div>

            </div>

          </div>
        )}

    </main>
  );
}