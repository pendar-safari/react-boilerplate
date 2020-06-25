const _HtmlWebpackPlugin = require('html-webpack-plugin')
const _MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
  template: './src/index.html',
})

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].[hash].bundle.css',
  chunkFilename: '[id].css',
})

module.exports = [HtmlWebpackPlugin, MiniCssExtractPlugin]
