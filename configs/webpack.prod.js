const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "app-[contenthash].js",
  },
  devtool: "source-map",
});
