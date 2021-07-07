const path = require("path");

//This allows to work with html using webpack
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", //Entry point
  //Where to have the result of our js compiled to a simplier version of js
  output: {
    path: path.resolve(__dirname, "dist"), //__dirname means the main directory and there it will create dist directory
    filename: "main.js", //Within dist, it will create main.js
  },
  resolve: {
    extensions: [".js"], //manage just javascript files
  },
  module: {
    rules: [
      {
        test: /\.js?$/, //Rule to use babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin([
      {
        inject: true,
        template: "./public/index.html",
        filename: "./index.html",
      },
    ]),
  ],
};
