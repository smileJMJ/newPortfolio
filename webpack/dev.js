const merge = require('webpack-merge');
const common = require('./common');
const mode = 'development';

module.exports = merge(common(mode), {
    mode: mode,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080
    }
});