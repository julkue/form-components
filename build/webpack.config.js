const path = require('path'),
  extractTextPlugin = require('extract-text-webpack-plugin'),
  cleanPlugin = require('clean-webpack-plugin'),
  webpack = require('webpack'),
  fs = require('fs'),
  glob = require('glob'),
  hbs = require('handlebars'),
  pkg = require(path.join(__dirname, '../package.json'));

let components = {
  development: path.join(__dirname, '../src/components/_common/development.js')
};
glob.sync(path.join(__dirname, '../src/components/*/**/*.js'), {
  ignore: path.join(__dirname, '../src/components/_common/**/*')
}).forEach(file => {
  let folder = file.split('/');
  folder = folder[folder.length - 2];
  components[folder] = file;
});

let config = module.exports = {
  entry: components,
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
          loader: 'resolve-url-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './build/postcss.config.js'
            },
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
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
    new cleanPlugin('dist/**/*', {
      root: path.join(__dirname, '../')
    }),
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

if (process.argv.indexOf('-p') !== -1) {
  // compress and remove console statements. Only add this plugin in production
  // as even if drop_console is set to false, other options may be set to true
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      'drop_console': true
    }
  }));
}

module.exports = config;
