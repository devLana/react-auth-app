const { join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: join(__dirname, "../src/index.js"),
  context: join(__dirname, "../src"),
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Authentication App",
      template: join(__dirname, "../dist/index.html"),
      favicon: join(__dirname, "../dist/favicon.ico"),
      inject: "body",
    }),
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
    }),
  ],
  output: {
    path: join(__dirname, "../build"),
    clean: true,
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", "..."],
  },
};
