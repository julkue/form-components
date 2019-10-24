const path = require('path'),
  fractal = require('@frctl/fractal').create(),
  mandelbrot = require('@frctl/mandelbrot'),
  hbs = require('@frctl/handlebars'),
  pkg = require(path.join(__dirname, '../package.json')),
  slash = require('slash'),
  glob = require('glob'),
  fs = require('fs-extra');

const title = `${pkg.name.split('/').pop().replace('-', ' ').replace(
  /\b\w/g, l => l.toUpperCase())
}`;
fractal.set('project.title', `${title} v${pkg.version}`);
fractal.docs.set('indexLabel', title);
fractal.components.set('path', path.join(__dirname, '../src/components'));
fractal.docs.set('path', path.join(__dirname, '../src/docs'));
fractal.web.set('static.path', path.join(__dirname, '../dist'));
fractal.web.set('builder.dest', path.join(__dirname, '../build/library'));
fractal.components.set('default.preview', '@light');
fractal.web.theme(mandelbrot({
  skin: 'navy',
  scripts: [
    'default',
    'https://buttons.github.io/buttons.js'
  ]
}).addLoadPath(path.join(__dirname, '../ui-overrides')));
fractal.components.engine(hbs({
  helpers: {
    eachComponentFile: function(extension, target, options) {
      const fullPath = slash(target.component.viewPath),
        component = fullPath.split('/').reverse()[1],
        distDir = slash(path.join(__dirname, '../dist/')),
        dir = slash(path.join(distDir, component)),
        files = glob.sync(`${dir}/**/*.${extension}`);
      let buffer = '';
      files.map(file => {
        file = file.replace(distDir, '/');
        buffer += options.fn(file);
        return file;
      });
      return buffer;
    },
    splitDashLast: function(str) {
      const arr = str.split('-');
      return arr[arr.length - 1];
    },
    /* eslint-disable */
    ifCond: function(v1, operator, v2, options) {
      switch (operator) {
      case '==':
        return (v1 == v2) ? options.fn(this) : options.inverse(this);
      case '!=':
        return (v1 != v2) ? options.fn(this) : options.inverse(this);
      case '===':
        return (v1 === v2) ? options.fn(this) : options.inverse(this);
      case '!==':
        return (v1 !== v2) ? options.fn(this) : options.inverse(this);
      case '<':
        return (v1 < v2) ? options.fn(this) : options.inverse(this);
      case '<=':
        return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      case '>':
        return (v1 > v2) ? options.fn(this) : options.inverse(this);
      case '>=':
        return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      case '&&':
        return (v1 && v2) ? options.fn(this) : options.inverse(this);
      case '||':
        return (v1 || v2) ? options.fn(this) : options.inverse(this);
      default:
        return options.inverse(this);
      }
    },
    /* eslint-enable */
    ifStartsWith: function(str, pattern, options) {
      if (typeof str !== 'undefined' && str.trim().startsWith(pattern)) {
        return options.fn(this);
      }
      return options.inverse(this);
    },
    ifLastDash: function(str, needle, options) {
      const arr = str.split('-');
      if (arr[arr.length - 1] === needle) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    },
  }
}));
fractal.web.set('server.syncOptions', {
  files: ['static/**/*'],
  watchOptions: {
    ignored: function(path) {
      return path.includes('.scss') || /components[^]*\.js/gmi.test(path);
    }
  },
  injectChanges: false
});

fs.copySync(
  path.join(__dirname, '../public/favicon.ico'),
  path.join(__dirname, '../dist/favicon.ico')
);

module.exports = fractal;
