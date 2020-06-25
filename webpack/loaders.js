const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

const JSLoader = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
}

const CSSLoader = {
  test: /\.(sa|sc|c)ss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 1,
        modules: {
          localIdentName: devMode ? '[local]' : '[local]___[hash:base64:5]',
        },
      },
    },
    {
      loader: 'postcss-loader',
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        sassOptions: {
          includePaths: [path.resolve('./src/common/css/')],
        },
      },
    },
  ],
}

const IMGLoader = {
  test: /\.(png|jpg|gif)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'img',
      },
    },
  ],
}

const SVGLoader = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
}

const FONTLoader = {
  test: /\.(eot|ttf|woff|woff2)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts',
      },
    },
  ],
}

module.exports = [JSLoader, CSSLoader, IMGLoader, SVGLoader, FONTLoader]
