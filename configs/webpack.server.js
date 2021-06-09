const { join, resolve } = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: {
    server: join(process.cwd(), "src", "server", "index.js"),
  },
  context: join(process.cwd(), "src"),
  output: {
    path: resolve(process.cwd(), "server-build"),
    clean: true,
    publicPath: "/",
    filename: "js/[name].bundle.js",
    assetModuleFilename: "images/[ext][query]",
  },
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
  resolve: {
    extensions: [".jsx", "..."],
  },
};
