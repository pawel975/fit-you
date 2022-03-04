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
        test: /\.scss$/,
        use: [
          "style-loader", // 3. Injects styles into DOM
          "css-loader", // 2. Turns css into commonjs
          "sass-loader" // 1. Turns sass into css
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      }
    ]
  },
  entry: [
    'babel-polyfill',
    './src/js/base.js',
    './src/js/index.js',
    './src/js/measures.js',
    './src/js/state.js',
    './src/js/food.js',
    './src/js/date.js',
    './src/js/home.js',
    './src/js/motivation.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
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
    ]
  };
