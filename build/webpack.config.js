const path = require('path'),
  extractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack'),
  hbs = require('handlebars'),
  fs = require('fs'),
  pkg = require(path.join(__dirname, '../package.json'));

module.exports = {
  entry: {
    message: path.join(__dirname, '../src/components/message/message.js'),
    bundle: path.join(__dirname, '../src/components/_common/index.js'),
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
      banner: hbs.compile(fs.readFileSync(path.join(
        __dirname, 'templates/copyright.hbs'
      ), 'utf8'))({
        name: pkg.name.split('/').pop(),
        version: `v${pkg.version}`,
        homepage: pkg.homepage,
        author: pkg.author.name,
        license: pkg.license,
        year: new Date().getFullYear()
      }),
      raw: true
    })
  ]
};
