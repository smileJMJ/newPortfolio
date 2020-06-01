const path = require('path');
const mode = process.env.WEBPACK_MODE;
const isDevMode = mode !== 'production';
console.log(mode, isDevMode);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js|ts(x?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            // CSS Module 사용위해 아래 설정 추가
                            modules: {
                                mode: 'local',
                                exportGlobals: true,
                                localIdentName: isDevMode ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]'
                            }
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
                test: /\.(ico|png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    fallback: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[contenthash].[ext]',
                            outputPath: './resource/img',
                            publicPath: '/resource/img'
                        }
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './resource/css/font',
                    publicPath: '/resource/css/font'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            outputPath: './resource/css',
            publicPath: '/resource/css/',
            filename: isDevMode ? 'bundle.css' : 'bundle.[hash].css',
            //filename: isDevMode ? '[name].css' : '[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.ts', '.tsx', '.css', '.scss', 'json']
    }
};