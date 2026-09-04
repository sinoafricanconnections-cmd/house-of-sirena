import * as tf from "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-backend-cpu";
import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";

let detectorPromise:
  | Promise<faceLandmarksDetection.FaceLandmarksDetector>
  | null = null;

async function getDetector() {
  if (!detectorPromise) {
    detectorPromise = (async () => {
      await tf.setBackend("cpu");
      await tf.ready();

      return faceLandmarksDetection.createDetector(
        faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,
        {
          runtime: "tfjs",
          maxFaces: 1,
          refineLandmarks: true,
        }
      );
    })();
  }

  return detectorPromise;
}

export async function getEyeLandmarks(
  imageTensor: tf.Tensor3D
) {
  const detector = await getDetector();

  const faces =
    await detector.estimateFaces(
      imageTensor as any,
      {
        flipHorizontal: false,
      }
    );

  if (!faces.length) {
    return {
      facesFound: 0,
      landmarkCount: 0,
      keypoints: [],
    };
  }

  const keypoints =
    faces[0].keypoints ?? [];

  return {
    facesFound: faces.length,
    landmarkCount: keypoints.length,
    keypoints,
  };
}
export function measureEyeGeometry(
  keypoints: Array<{
    x: number;
    y: number;
    z?: number;
  }>
) {
  if (keypoints.length < 400) {
    return null;
  }

  const left = [33, 133, 159, 145];
  const right = [362, 263, 386, 374];

  function measure(indices: number[]) {
    const points = indices
      .map((i) => keypoints[i])
      .filter(Boolean);

    if (points.length < 4) {
      return null;
    }

    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);

    const width =
      Math.max(...xs) - Math.min(...xs);

    const height =
      Math.max(...ys) - Math.min(...ys);

    return {
      width,
      height,
      aspectRatio:
        height > 0
          ? width / height
          : 0,
    };
  }

  return {
    leftEye: measure(left),
    rightEye: measure(right),
  };
}