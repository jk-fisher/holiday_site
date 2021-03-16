const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        chunkFilename: (pathData) => {
            return pathData.chunk.name === 'index' ? '[name].js' : '[name]/[name].js';
          },
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
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
              // Please note we are not running postcss here
            ]
          },
          {
            // Load all images as base64 encoding if they are smaller than 8192 bytes
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // On development we want to see where the file is coming from, hence we preserve the [path]
                  name: '[path][name].[ext]?hash=[hash:20]',
                  esModule: false,
                  limit: 8192
                }
              }
            ]}
        ]
    }
};