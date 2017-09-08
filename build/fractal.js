const path = require('path'),
  fs = require('fs'),
  glob = require('glob'),
  slash = require('slash'),
  fractal = require('@frctl/fractal').create(),
  mandelbrot = require('@frctl/mandelbrot'),
  hbs = require('@frctl/handlebars'),
  pkg = require(path.join(__dirname, '../package.json'));

let projectName = pkg.name.split('/');
projectName = projectName[projectName.length - 1].replace('-', ' ').replace(
  /\b\w/g, l => l.toUpperCase()
);
fractal.set('project.title', `${projectName} v${pkg.version}`);
fractal.components.set('path', path.join(__dirname, '../src/components'));
fractal.docs.set('path', path.join(__dirname, '../src/docs'));
fractal.web.set('static.path', path.join(__dirname, '../dist'));
fractal.web.set('builder.dest', path.join(__dirname, '../build/library'));
fractal.components.set('default.preview', '@bright');
fractal.web.theme(mandelbrot({
  skin: 'navy'
}));
fractal.components.engine(hbs({
  helpers: {
    eachFile: function(extension, options) {
      const dir = path.join(__dirname, '../dist/'),
        files = glob.sync(`${dir}**/*.${extension}`);
      let buffer = '';
      files.map(file => {
        file = file.replace(slash(dir), '/');
        buffer += options.fn(file);
        return file;
      });
      return buffer;
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
    }
    /* eslint-enable */
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

module.exports = fractal;
