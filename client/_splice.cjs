const fs = require("fs");

function norm(s) {
  return s.replace(/\r\n/g, "\n");
}

// 1. Replace AbstractVisual in AboutSection.jsx
let about = norm(
  fs.readFileSync("src/components/home/AboutSection.jsx", "utf8"),
);
const lines = about.split("\n");

let startIdx = -1;
let endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("Abstract Geometric Visual (About)")) startIdx = i;
  if (lines[i].trimStart().startsWith("const AboutSection = () => {")) {
    endIdx = i;
    break;
  }
}
if (startIdx === -1 || endIdx === -1) {
  console.log("ABOUT LINE MARKERS NOT FOUND", startIdx, endIdx);
  process.exit(1);
}

const newVisual = norm(
  fs.readFileSync("src/components/home/_newPioneeringVisual.jsx", "utf8"),
);
const before = lines.slice(0, startIdx).join("\n");
const after = lines.slice(endIdx).join("\n");
about = before + "\n" + newVisual + "\n\n" + after;
fs.writeFileSync("src/components/home/AboutSection.jsx", about);
console.log(
  "AboutSection.jsx updated. Replaced lines " +
    startIdx +
    " to " +
    (endIdx - 1),
);

// 2. Replace visual in Home.jsx
let home = norm(fs.readFileSync("src/pages/Home.jsx", "utf8"));
const hLines = home.split("\n");

let vStart = -1;
let vEnd = -1;

for (let i = 0; i < hLines.length; i++) {
  if (
    hLines[i].includes("bg-gradient-to-tr") &&
    hLines[i].includes("brand-purple") &&
    vStart === -1
  ) {
    vStart = i;
  }
}

if (vStart !== -1) {
  for (let i = hLines.length - 1; i >= vStart; i--) {
    if (hLines[i].includes("</motion.div>")) {
      for (let j = i + 1; j < Math.min(i + 5, hLines.length); j++) {
        if (hLines[j].trim() === "</div>") {
          for (let k = j + 1; k < Math.min(j + 3, hLines.length); k++) {
            if (hLines[k].includes("</AnimatedSection>")) {
              vEnd = i;
              break;
            }
          }
          if (vEnd !== -1) break;
        }
      }
      if (vEnd !== -1) break;
    }
  }
}

if (vStart === -1 || vEnd === -1) {
  console.log("HOME LINE MARKERS NOT FOUND", vStart, vEnd);
  process.exit(1);
}

const newHomeVisual = norm(
  fs.readFileSync("src/pages/_newEmpoweringVisual.jsx", "utf8"),
);
const hBefore = hLines.slice(0, vStart).join("\n");
const hAfter = hLines.slice(vEnd + 1).join("\n");
home = hBefore + "\n" + newHomeVisual + "\n" + hAfter;
fs.writeFileSync("src/pages/Home.jsx", home);
console.log("Home.jsx updated. Replaced lines " + vStart + " to " + vEnd);
const fs = require("fs");

// 1. Replace AbstractVisual in AboutSection.jsx
let about = fs.readFileSync("src/components/home/AboutSection.jsx", "utf8");
const startMarker =
  "/* \u2500\u2500 Abstract Geometric Visual (About) \u2500\u2500 */\nconst AbstractVisual = () => {";
const endMarker = "\n\nconst AboutSection = () => {";
const si = about.indexOf(startMarker);
const ei = about.indexOf(endMarker);
if (si === -1 || ei === -1) {
  console.log("ABOUT MARKERS NOT FOUND", si, ei);
  process.exit(1);
}
const newVisual = fs.readFileSync(
  "src/components/home/_newPioneeringVisual.jsx",
  "utf8",
);
about = about.substring(0, si) + newVisual + about.substring(ei);
fs.writeFileSync("src/components/home/AboutSection.jsx", about);
console.log("AboutSection.jsx updated successfully");

// 2. Replace visual in Home.jsx
let home = fs.readFileSync("src/pages/Home.jsx", "utf8");

// Find start: the background glow comment or the div
const hStartComment = "{/* Background glow */}";
let hsi = home.indexOf(hStartComment);
if (hsi !== -1) {
  // go back to the start of the line
  while (hsi > 0 && home[hsi - 1] !== "\n") hsi--;
} else {
  // try direct div
  hsi = home.indexOf('<div className="absolute inset-0 bg-gradient-to-tr');
  if (hsi !== -1) {
    while (hsi > 0 && home[hsi - 1] !== "\n") hsi--;
  }
}

// Find end: last badge closing before </div>\n</AnimatedSection>
const hEnd =
  "</motion.div>\n                </div>\n              </AnimatedSection>";
const hei = home.indexOf(hEnd);

if (hsi === -1 || hei === -1) {
  console.log("HOME MARKERS NOT FOUND", hsi, hei);
  // Debug: show surrounding context
  if (hsi === -1) {
    const idx = home.indexOf("bg-gradient-to-tr");
    console.log("bg-gradient-to-tr at:", idx);
    if (idx !== -1)
      console.log(
        "Context:",
        JSON.stringify(home.substring(Math.max(0, idx - 100), idx + 100)),
      );
  }
  if (hei === -1) {
    const idx = home.lastIndexOf("</AnimatedSection>");
    console.log("Last </AnimatedSection> at:", idx);
    if (idx !== -1)
      console.log(
        "Context:",
        JSON.stringify(home.substring(Math.max(0, idx - 150), idx + 20)),
      );
  }
  process.exit(1);
}

const newHomeVisual = fs.readFileSync(
  "src/pages/_newEmpoweringVisual.jsx",
  "utf8",
);
home =
  home.substring(0, hsi) +
  newHomeVisual +
  "\n                </div>\n              </AnimatedSection>" +
  home.substring(hei + hEnd.length);
fs.writeFileSync("src/pages/Home.jsx", home);
console.log("Home.jsx updated successfully");
