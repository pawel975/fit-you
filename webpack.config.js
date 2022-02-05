const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // this loaders order must preserved. First css must be loaded and then style-loader injects <style> tag into html. So they're in reversed order.
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      }
    ]
  },
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './'),
  },
  // serves server for project in current directory
  devServer: {
    static: './',
    open:true
  },
  plugins: [
      new Dotenv({
        prefix: 'process.env.'
      }),
      new HtmlWebpackPlugin({
        template: './src/html/index.html',
        filename: 'index.html',
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: './src/html/settings.html',
        filename: 'settings.html',
        inject: 'body',
      }),
      new HtmlWebpackPlugin({
        template: './src/html/food.html',
        filename: 'food.html',
        inject: 'body',
      }),
    ]
  };
