const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   mode: 'production',
   entry: {
     index: './src/index.js',
   },
   devServer: {
    static: './dist'
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
   optimization: {
    runtimeChunk: 'single',
   },
   module: {
     rules: [
       {
         test: /\.css$/i,
         use: ['style-loader', 'css-loader'],
       },
     ],
   },

 };