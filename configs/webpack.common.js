const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    logger: "./src/logger.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development Management",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "../dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      }
    ]
  }
};
