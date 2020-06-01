const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (mode) => {
    const isDevMode = mode !== 'production';

    return {
        entry: {
            app: './src/index.js',
            style: './src/resource/css/common.scss'
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
                                sourceMap: isDevMode,
                                // CSS Module 사용위해 아래 설정 추가
                                modules: {
                                    mode: 'local',
                                    exportGlobals: true,
                                    localIdentName: '[name]__[local]__[hash:base64:5]'
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevMode,
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
                //filename: isDevMode ? 'bundle.css' : 'bundle.[hash].css',
                filename: isDevMode ? '[name].css' : '[name].[hash].css'
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
};