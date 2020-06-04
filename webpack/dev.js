const merge = require('webpack-merge');
const common = require('./common');
const mode = 'development';

module.exports = merge(common(mode), {
    mode: mode,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 7777,
        historyApiFallback: true // 요청 올 때 index.html로 보여주도록
    }
});