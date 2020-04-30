const path = require('path'),
  webpack = require('webpack'),
  uglifyJsPlugin = require('uglifyjs-webpack-plugin'),
  optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
  miniCssExtractPlugin = require('mini-css-extract-plugin'),
  fs = require('fs'),
  glob = require('glob'),
  hbs = require('handlebars'),
  pkg = require(path.join(__dirname, '../package.json'));

let components = {
  development: path.join(__dirname, '../src/components/_common/development.js')
};
glob.sync(path.join(__dirname, '../src/components/*/**/*-bundle.js'), {
  ignore: path.join(__dirname, '../src/components/_common/**/*')
}).forEach(file => {
  let folder = file.split('/');
  folder = folder[folder.length - 2];
  components[folder] = file;
});

let config = module.exports = {
  entry: components,
  resolve: {
    alias: {
      shared: path.join(__dirname, '../src/components/_common/'),
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: [
                  '> 0.25%',
                  'last 2 versions',
                  'ie 11'
                ]
              }
            ]
          ]
        }
      }, {
        loader: 'eslint-loader'
      }]
    }, { // sass and postcss at the end
      test: /\.(scss|css)$/,
      use: [{
        loader: miniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './build/postcss.config.js'
          },
          sourceMap: true
        }
      }, {
        // Place resolve-url-loader below postcss-loader due to:
        // https://github.com/postcss/postcss-loader/issues/340
        loader: 'resolve-url-loader'
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            includePaths: ['node_modules']
          }
        }
      }]
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
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  plugins: [
    new miniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `[name]/[name].${
        process.argv.indexOf('-p') !== -1 ? 'min.css' : 'css'
      }`,
      chunkFilename: `[id]/[id].${
        process.argv.indexOf('-p') !== -1 ? 'min.css' : 'css'
      }`
    }),
    new webpack.BannerPlugin({
      banner: hbs.compile(fs.readFileSync(path.join(
        __dirname, 'templates/copyright.hbs'
      ), 'utf8'))({
        name: pkg.name.split('/').pop(),
        version: `v${pkg.version}`,
        homepage: pkg.homepage,
        author: pkg.author.name,
        license: pkg.license,
        year: (() => {
          const startYear = 2017,
            year = new Date().getFullYear();
          return year > startYear ? `${startYear}–${year}`: year;
        })()
      }),
      raw: true
    })
  ],
  optimization: {
    minimizer: [
      new uglifyJsPlugin({
        cache: true,
        parallel: false,
        sourceMap: true
      }),
      new optimizeCSSAssetsPlugin({})
    ]
  },
};

module.exports = config;
