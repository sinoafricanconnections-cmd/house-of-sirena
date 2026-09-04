export type LidClassification =
  | "Monolid"
  | "Visible Crease"
  | "Partial Crease"
  | "Hooded"
  | "Unclear";

export type LidEvidence = {
  upperCreaseVisible: boolean | null;
  upperLidVisibility: "Minimal" | "Moderate" | "Prominent" | "Unclear";
  confidence: number;
  reason: string;
};

/*
 * IMPORTANT:
 *
 * This is intentionally a separate module.
 *
 * Monolid = eyelid/crease classification.
 * It is NOT an eye-shape classification.
 *
 * We will connect the actual measurements to this
 * after we establish the measurement points.
 */

export function classifyLid(
  evidence: LidEvidence
): {
  lidType: LidClassification;
  confidence: number;
  reason: string;
} {
  if (
    evidence.upperCreaseVisible === false &&
    evidence.upperLidVisibility === "Minimal"
  ) {
    return {
      lidType: "Monolid",
      confidence: Math.max(
        evidence.confidence,
        85
      ),
      reason:
        "No distinct upper eyelid crease is visible and upper-lid space is minimal.",
    };
  }

  if (
    evidence.upperCreaseVisible === true &&
    evidence.upperLidVisibility === "Prominent"
  ) {
    return {
      lidType: "Visible Crease",
      confidence: Math.max(
        evidence.confidence,
        85
      ),
      reason:
        "A distinct upper eyelid crease is visible.",
    };
  }

  if (
    evidence.upperCreaseVisible === true &&
    evidence.upperLidVisibility === "Minimal"
  ) {
    return {
      lidType: "Hooded",
      confidence: Math.max(
        evidence.confidence,
        80
      ),
      reason:
        "A crease is present but much of the upper-lid area is obscured.",
    };
  }

  if (
    evidence.upperCreaseVisible === true
  ) {
    return {
      lidType: "Partial Crease",
      confidence: Math.max(
        evidence.confidence,
        75
      ),
      reason:
        "A crease is visible but the evidence does not support a full visible crease.",
    };
  }

  return {
    lidType: "Unclear",
    confidence: 50,
    reason:
      "There is not enough visual evidence to confidently classify the upper-lid crease.",
  };
}
