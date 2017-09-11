# Requirements

- [Node.js](https://nodejs.org/en/) with [npm](https://www.npmjs.com/) (version 6.10.2+, npm is installed by default)
- [FontForge](http://fontforge.github.io/en-US/downloads/windows/) (version 20161004), added to the path variable
- [ttfautohint](https://www.freetype.org/ttfautohint/#download) (version 1.6), added to the path variable. Required especially for macOS to fix strange line heights

# Installation

Run `$ npm run build` to install dependencies and run your first build.

# Used Tools

- [Fractal](http://fractal.build/)
- [Webpack](https://webpack.js.org/)
- [PostCSS](http://postcss.org/) (webpack loader) with [CSSNext](http://cssnext.io/) plugin for autoprefixing
- [Grunt](https://gruntjs.com/) only for icon font generation

# Commands

- `$ npm run dev`: Runs Fractal with Browsersync as server and recompiles Webpack on file changes
- `$ npm run build`: Generates the icon font, compiles JS/SCSS into `./dist/` and generates the entire library as static folder into `./build/dist/`
- `$ npm run font`: Generates font icon (sub-task of `$ npm run build`)
