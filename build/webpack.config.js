const path = require('path'),
  extractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack'),
  pkg = require(path.join(__dirname, '../package.json'));

module.exports = {
  entry: {
    message: path.join(__dirname, '../src/components/message/message.js')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }, {
        loader: 'eslint-loader'
      }]
    }, { // sass and postcss at the end
      test: /\.(scss|css)$/,
      use: extractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './build/postcss.config.js'
            }
          }
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [
              'node_modules',
              'src/components/_common'
            ]
          }
        }]
      })
    }, { // images (file references)
      test: /\.(jpg|jpeg|png|gif|svg)$/,
      loader: 'file-loader',
      exclude: [/icons(.*?)\.svg/]
    }, { // fonts (base64 embed)
      test: /\.(woff|woff2)$/,
      loader: 'url-loader'
    }, { // icons embedded as background images
      test: /\.svg$/,
      loader: 'url-loader'
    }]
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: `[name]/[name].${
      process.argv.indexOf('-p') !== -1 ? 'min.js' : 'js'
    }`,
    library: ['[name]'],
    libraryTarget: 'umd'
  },
  plugins: [
    new extractTextPlugin(`[name]/[name].${
      process.argv.indexOf('-p') !== -1 ? 'min.css' : 'css'
      }`),
    new webpack.BannerPlugin({
      banner: `(c) ${new Date().getFullYear()} ${pkg.author.name} (${pkg.author.url})`
    })
  ]
};
