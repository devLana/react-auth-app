const { join } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
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
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
