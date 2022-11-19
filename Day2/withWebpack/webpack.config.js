const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // to join directory path to src/index.js and define entrypoint to webpack to bundle
  entry: path.join(__dirname, "src", "index.js"),
  // to define output folder name and path where bundled files will go
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  // our arc/index.html file will be injected with the script created inside dist folder
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project created with react and webpack bundler",
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  // to add rules while transpiling modules
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
console.log(path.resolve(__dirname, "dist"));
