const { join, resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: join(process.cwd(), "src", "index.js"),
  },
  output: {
    path: resolve(process.cwd(), "build"),
    clean: true,
    publicPath: "/",
    hashDigestLength: 10,
    assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Authentication App",
      template: join(process.cwd(), "dist/index.html"),
      favicon: join(process.cwd(), "dist/favicon.ico"),
      inject: "body",
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
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "commons",
          chunks: "all",
        },
      },
    },
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".jsx", "..."],
  },
};
