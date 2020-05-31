const path = require('path');
const mode = process.env.NODE_ENV;
const isDevMode = mode !== 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: mode,
    entry: {
        app: './src/app.js',
        main: './src/main.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js|ts(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(ico|png|jpe?g|gif|svg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: '[contenthash].[ext]',
                            outputPath: '/static/img',
                            publicPath: '/static/img'
                        }
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/static/css/font',
                    publicPath: '/static/css/font'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            publicPath: '/static/css/',
            //filename: isDevMode ? 'bundle.css' : 'bundle.[hash].css',
            filename: isDevMode ? '[name].css' : '[name].[hash].css'
        })
    ],
    devServer: {
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'static')],
        compress: true, // gzip으로 최적화
        port: 8080
    }
};