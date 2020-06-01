const merge = require('webpack-merge');
const common = require('./common');
const mode = 'production';

module.exports = merge(common(mode), {
   mode: mode
});