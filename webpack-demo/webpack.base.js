const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const prod = process.env.npm_lifecycle_event === 'build'

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash].[ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[hash].[ext][query]'
                }
            },
            {
                test: /\.css$/,
                oneOf: [
                    // 这里匹配 `<style module>`
                    {
                        resourceQuery: /module/,
                        use: [
                            prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    localIdentName: '[local]_[hash:base64:5]'
                                }
                            }
                        ]
                    },
                    {
                        use: [
                            prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1
                                }
                            },
                            'postcss-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.less$/i,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    localIdentName: '[local]_[hash:base64:5]'
                                }
                            },
                            'less-loader'
                        ]
                    },
                    {
                        use: [
                            prod ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                            'css-loader',
                            'less-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                ),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.vue', '.js', '.json', '.wasm']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        }),
        new HtmlWebpackPlugin({
            title: '第一个demo',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ]
}