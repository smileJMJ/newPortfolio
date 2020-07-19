const merge = require('webpack-merge');
const common = require('./common');
const mode = 'production';

module.exports = merge(common(mode), {
   mode: mode,
   output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
   },
   optimization: {
      minimize: isDevMode ? false : true, // production mode일 땐 webpack에서 TerserPlugin 자동 실행함!
      minimizer: [
         new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
         })
      ],
      splitChunks: {
         cacheGroups: {
            style: {
               name: 'bundle',
               test: /\.s[ac]ss$/,
               chunks: 'all',
               enforce: true,
            }
         }
      }
   },
});