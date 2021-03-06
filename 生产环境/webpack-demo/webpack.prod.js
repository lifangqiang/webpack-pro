const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const ClosurePlugin = require('closure-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new ClosurePlugin({mode: 'STANDARD'}, {})
        ]
    }
})