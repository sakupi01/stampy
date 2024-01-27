const path = require("path");

const buildEslintCommand = (filenames) =>
  `bun run check ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .map((f) => f.replace(/(\(|\))/g, "\\$1"))
    .join(" ")}`;

module.exports = {
  "*.{ts,tsx}": [buildEslintCommand],
};
