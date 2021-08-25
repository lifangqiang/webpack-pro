const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    // optimization: {
    //     // 打包时清除未使用的引用
    //     usedExports: true
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'lalal'
        })
    ],
}