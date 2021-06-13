const { join, resolve } = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "node",
  mode: "production",
  externals: [nodeExternals()],
  entry: {
    server: join(process.cwd(), "src", "server", "index.js"),
  },
  output: {
    path: resolve(process.cwd(), "server-build"),
    clean: true,
    publicPath: "/",
    filename: "js/[name].bundle.js",
    assetModuleFilename: "images/[ext][query]",
  },
  devServer: {
    contentBase: "../server-build",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|png)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "commons",
  //         chunks: "all",
  //       },
  //     },
  //   },
  //   runtimeChunk: "single",
  // },
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".jsx", "..."],
  },
};
