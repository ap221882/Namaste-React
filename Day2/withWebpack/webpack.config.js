const path = require("path");

module.exports = {
  // to join directory path to src/index.js and define entrypoint to webpack to bundle
  entry: path.join(__dirname, "src", "index.js"),
  // to define output folder name and path where bundled files will go
  output: {
    path: path.resolve(__dirname, "dist"),
  },
};
console.log(path.resolve(__dirname, "dist"));
