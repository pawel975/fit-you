const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  // source-map ussed for benchmark test in production, could be excluded 
  // devtool: 'source-map',
  performance: {
    // hints: false,
  }
});
  
