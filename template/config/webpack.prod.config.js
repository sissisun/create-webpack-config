const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

module.exports = webpackMerge(webpackBaseConfig, {
    mode: 'production',

    devtool: false,

    performance: {
        hints: 'warning',
        maxAssetSize: 300000, //单文件超过250k，命令行告警
        maxEntrypointSize: 300000 //首次加载文件总和超过250k，命令行告警
    },

    optimization: {
        minimizer: [
            new TerserPlugin()
        ],
        noEmitOnErrors: true
    },

    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../libs/react-manifest.json')
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../libs/common-manifest.json')
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: [{ path: 'libs', glob: '*.dll.js', globPath: 'libs/' }],
            append: false
        })
    ],
    devServer: {
        compress: true,
        hot: true,
        port: 4000
    }
})
