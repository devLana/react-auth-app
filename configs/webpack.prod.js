const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "js/[name]-[contenthash].js",
    assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/index.[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin(), "..."],
    moduleIds: "deterministic",
  },
});
