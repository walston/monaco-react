const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  return {
    entry: "./src/main.tsx",
    target: "web",
    mode: "development",
    watch: true,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    output: {
      filename: "main.bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        minify: false,
      }),
    ],
  };
};
