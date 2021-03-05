const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:80/assets/'
    },
    module: {
        rules: [{
           test: /\.js$/ ,
           exclude: /node_modules/,
           use: {
               loader: 'babel-loader',
               options: {
                   presets: ['@babel/preset-env']
               }
           }
        }]
    }
};