const { join, resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: join(process.cwd(), "src", "index.js"),
  },
  context: join(process.cwd(), "src"),
  output: {
    path: resolve(process.cwd(), "build"),
    clean: true,
    publicPath: "/",
    hashDigestLength: 10,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Authentication App",
      template: join(process.cwd(), "dist/index.html"),
      favicon: join(process.cwd(), "dist/favicon.ico"),
      inject: "body",
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
