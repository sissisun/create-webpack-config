const path = require('path')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = webpackMerge(webpackBaseConfig, {

    mode: 'development',

    devtool: '#source-map',

    optimization: {
        namedModules: true, //取代插件中的 new webpack.NamedModulesPlugin()
        namedChunks: true
    },
    devServer: {
        compress: true,
        hot: true,
        port: 4000
    }
})
