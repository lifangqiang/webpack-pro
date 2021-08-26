const { merge } = require('webpack-merge')
const common = require('./webpack.base')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        hot: true,
        host: 'localhost',
        port: 9000,
        client: {
            logging: 'info',
            overlay: {
                errors: true,
                warnings: false
            },
            // progress: true
        }
    }
})