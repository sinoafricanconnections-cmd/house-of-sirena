const tf = require("@tensorflow/tfjs-core");
require("@tensorflow/tfjs-backend-cpu");

const detection = require("@tensorflow-models/face-landmarks-detection");

async function main() {
  await tf.setBackend("cpu");
  await tf.ready();

  const detector =
    await detection.createDetector(
      detection.SupportedModels.MediaPipeFaceMesh,
      {
        runtime: "tfjs",
        maxFaces: 1,
        refineLandmarks: true,
      }
    );

  console.log("SIRENA LANDMARK DETECTOR READY");
}

main().catch((error) => {
  console.error("SIRENA LANDMARK ERROR:", error);
  process.exit(1);
});
