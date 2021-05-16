const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Authentication App",
      template: join(__dirname, "../dist/index.html"),
    }),
  ],
  output: {
    filename: "app.bundle.js",
    path: join(__dirname, "../build"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
