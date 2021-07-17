const path = require("path");

//This allows to work with html using webpack
const HtmlWebpackPlugin = require("html-webpack-plugin");

//This plugin is gonna copy our styles to the dist directory
//To use this you have to put the link tag on the index.html within the public directory
const CopyWebpackPlugin = require("copy-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", //Entry point

  output: {
    //Where to have the result of our js compiled to a simplier version of js
    path: path.resolve(__dirname, "dist"), //__dirname means the main directory and there it will create dist directory
    filename: "main.js", //Within dist, it will create main.js
  },
  resolve: {
    extensions: [".js"], //manage just javascript files
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //Rule to use babel
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //Rule to use css and sass, you dont need to compile sass anymore
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "static/images/[hash][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets/img"),
          to: "assets/img",
        },
      ],
    }),
  ],
};
