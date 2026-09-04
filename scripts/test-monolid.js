const fs = require("fs");

console.log("SIRENA MONOLID TEST");
console.log(
  "Classifier file exists:",
  fs.existsSync("lib/monolid-analysis.ts")
);
console.log(
  "Next step: connect real eye measurements."
);
