const path = require('path')
const loaders = require('./webpack/loaders')
const plugins = require('./webpack/plugins')

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: loaders,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@common': path.resolve(__dirname, './src/common'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@constants': path.resolve(__dirname, './src/constants'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: plugins,
}
