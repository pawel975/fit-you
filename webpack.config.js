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
      }
    ]
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    // plugin to store API key in .env file
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
