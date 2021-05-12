const fs = require("fs");
const path = require("path");
const micromatch = require("micromatch");
const tailwindConfig = require("tailwindcss/resolveConfig")(require(path.join(process.cwd(), "/tailwind.config.js")));

const TAILWIND_IMPORT_REGEX = /\@import\s+['"](tailwindcss\/.+)['"].*|\@tailwind\s+.*/g;

module.exports = (snowpackConfig, pluginOptions) => {
  let filesWithTailwindImports = [];
  return {
    name: "@jadex/snowpack-plugin-tailwindcss-jit",
    resolve: {
      input: [".pcss", ".css"],
      output: [".css"],
    },
    onChange({ filePath }) {
      let relativePath = path.relative(process.cwd(), filePath);
      let purge = tailwindConfig.purge.content !== null && tailwindConfig.purge.content !== void 0
        ? tailwindConfig.purge.content
        : tailwindConfig.purge;

      if (!micromatch.isMatch(relativePath, purge)) {
        return;
      }

      filesWithTailwindImports.forEach((filePath) => this.markChanged(filePath));
    },
    /** Load files that contain TailwindCSS imports*/
    async load({ filePath, isDev }) {
      if (!isDev || filesWithTailwindImports.includes(filePath)) {
        return;
      }

      const fileContents = fs.readFileSync(filePath, "utf8");
      const regex = new RegExp(TAILWIND_IMPORT_REGEX);

      if (regex.test(fileContents)) {
        filesWithTailwindImports.push(filePath);
      }
    },
  };
};
