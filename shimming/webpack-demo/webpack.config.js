const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: require.resolve('./src/index.js'),
                use: 'imports-loader?wrapper=window',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            join: ['lodash', 'join']
        }),
        new HtmlWebpackPlugin({
            title: '啦啦啦啦'
        })
    ]
}
