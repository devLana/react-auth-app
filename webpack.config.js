const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    logger: "./src/logger.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 9090,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development Management"
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
