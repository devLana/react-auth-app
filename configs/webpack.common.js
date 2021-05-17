const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Authentication App",
      template: join(__dirname, "../dist/index.html"),
      favicon: join(__dirname, "../dist/favicon.ico"),
    }),
  ],
  output: {
    filename: "app-[contenthash].js",
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
    ],
  },
};
