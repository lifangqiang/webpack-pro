const { merge } = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.base')
const ClosurePlugin = require('closure-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new ClosurePlugin({mode: 'STANDARD'}, {}),
            new CssMinimizerPlugin()
        ]
    }
})