const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  cache: {
    type: 'filesystem',
    maxAge: 5184000000,
  },
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
  entry: {
    index: [
    'babel-polyfill',
    './src/js/base.js',
    './src/js/index.js',
    './src/js/measures.js',
    './src/js/state.js',
    './src/js/food.js',
    './src/js/date.js',
    './src/js/home.js',
    './src/js/motivation.js',
    './src/js/toggleTheme.js',
    './src/js/trapFocus.js',
    './src/js/sideMenu.js',
    './src/js/tabing.js',
    './src/js/historyChart.js',
    './src/js/foodOption.js',
    './src/js/diaryTable.js',
    ]
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  // serves server for project in specified directory
  devServer: {
    static: './dist',
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
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
  
