const { join } = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const ESLintPlugin = require("eslint-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "app.bundle.js",
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: join(__dirname, "../build"),
    port: 9090,
    hot: true,
    overlay: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
  target: "web",
});
