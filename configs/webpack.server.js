const { join, resolve } = require("path");
// const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  return {
    mode: env.production ? "production" : "development",
    devtool: env.production ? "source-map" : "inline-source-map",
    target: "node",
    externals: [nodeExternals()],
    entry: {
      server: join(process.cwd(), "src", "server", "index.js"),
    },
    output: {
      path: resolve(process.cwd(), "server-build"),
      clean: true,
      // publicPath: "/",
      filename: "js/[name].bundle.js",
      // assetModuleFilename: "images/[ext][query]",
    },
    resolve: {
      extensions: [".jsx", "..."],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/i,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
        // {
        //   test: /\.(jpg|jpeg|png)$/i,
        //   type: "asset/resource",
        // },
        // {
        //   test: /\.s[ac]ss$/i,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     "css-loader",
        //     "postcss-loader",
        //     "sass-loader",
        //   ],
        // },
      ],
    },
    // plugins: [
    //   new MiniCssExtractPlugin({
    //     filename: "css/styles.css",
    //   }),
    //   new webpack.ProvidePlugin({
    //     React: "react",
    //     ReactDOM: "react-dom",
    //   }),
    // ],
  };
};
