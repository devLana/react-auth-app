const { join } = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "app.bundle.js",
    path: join(__dirname, "../build"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: join(__dirname, "../build"),
    port: 9090,
    hot: true,
    overlay: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
  target: "web",
});
