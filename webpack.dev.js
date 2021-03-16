const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: './index.js',
        attractions: './attractions/attractions.js',
        gallery: './gallery/gallery.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: 'http://localhost:8080/assets/',
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/page-index/index.html',
            inject: true,
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/page-attractions/attractions.html',
            inject: true,
            chunks: ['attractions'],
            filename: 'attractions.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/page-gallery/gallery.html',
            inject: true,
            chunks: ['gallery'],
            filename: 'gallery.html'
        })
    ]
});
