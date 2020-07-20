const path = require('path');
const merge = require('webpack-merge');
const common = require('./common');
const mode = 'production';

module.exports = merge(common(mode), {
   mode: mode,
   output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
   }
});