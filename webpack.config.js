const path = require("path");

module.exports = {
  entry: "./src/report_table.js",
  devServer: {
    contentBase: "./dist",
    https: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  output: {
    filename: "report_table.js",
    path: path.resolve(__dirname),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { injectType: "lazyStyleTag" } },
          "css-loader",
        ],
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        loader: "url-loader",
      },
    ],
  },
};
