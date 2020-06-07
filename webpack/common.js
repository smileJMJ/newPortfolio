const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (mode) => {
    const isDevMode = mode !== 'production';

    return {
        entry: {
            style: './src/resource/css/common.scss',
            app: './src/index.tsx'
        },
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
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                publicPath: '/resource/css/',
                filename: isDevMode ? '[name].css' : '[name].[hash].css'
            }),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|ts(x?))$/, // json이 포함되지 않도록 정규식 변경
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(s[ac]ss)$/,
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
                },
                /*{
                    test: /\.(json)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './resource/json',
                        publicPath: '/resource/json'
                    }
                }*/
            ]
        },
        resolve: {
            modules: ['node_modules'],
            extensions: ['.js', '.ts', '.tsx', '.css', '.scss', 'json']
        }
    };
};