# Contributing

## Requirements

- [Node.js](https://nodejs.org/en/) with [npm](https://www.npmjs.com/) (version 6.10.2+, npm is installed by default)
- [FontForge](http://fontforge.github.io/en-US/downloads/windows/) (version 20161004+), added to the path variable
- [ttfautohint](https://www.freetype.org/ttfautohint/#download) (version 1.6+), added to the path variable. Required especially for macOS to fix strange line heights in generated fonts

## Installation

Run `$ npm run build` to install dependencies and run your first build.

## Used Tools

- [Fractal](http://fractal.build/)
- [Webpack](https://webpack.js.org/)
- [PostCSS](http://postcss.org/) (webpack loader) with [CSSNext](http://cssnext.io/) plugin for autoprefixing
- [Grunt](https://gruntjs.com/) only for icon font generation

## Commands

- `$ npm run dev`: Runs Fractal with Browsersync as server and recompiles Webpack on file changes
- `$ npm run build`: Generates the icon font, compiles JS/SCSS into `./dist/` and generates the entire library as static folder into `./build/dist/`
- `$ npm run font`: Generates font icon (sub-task of `$ npm run build`)

## Structure

### Components

Every component must be located within a dedicated component folder in `src/components`. It must have a `*-bundle.js` file that exports a class and a selector variable and must also import any CSS/SCSS files for that component (if there are any). It should also have a `*.js` file (not the `*-bundle.js` file) that exports a class and a selector, but does not import CSS files for that component. So, usually a component has at least these two files:

- the-component.js
  - Exports a class
  - Exports a component selector
- the-component-bundle.js
  - Imports any component CSS (if available)
  - Exports a class
  - Exports a component selector
  
The first JS file is used for development purposes. The second for the production build. It's not possible to use the bundle also for development as components may use the same HTML while having different styles – to offer the ability to switch to a different component style without adjusting the HTML. If we would use the bundle file for development too we would end up with one CSS file that holds the CSS of all components. But as mentioned, this doesn't work as components using the same HTML would override others. Therefore only the currently viewed component CSS is embedded in the preview template (see `src/components/*.hbs`).

#### Color Variants

Every component should have a "dark" and "light" variant, for different backgrounds. This isn't required for example form components.

### Icons

Icons (*.svg) will be generated into an icon font. This offers the ability to use icons without additional HTML elements and also makes it possible to cache all icons, which makes it reusable across web site pages.

Icons must be located within `src/icons`. They'll be automatically included in the generated icon font once you run `$ npm run font` or `$ npm run build` (as mentioned above).

You can then use an icon in your SCSS as follows:

```scss
@include form-components-icons-before("your-icon-filename");
// or
@include form-components-icons-after("your-icon-filename");
```

The mixin ending with "before" will generate the icon into the `:before` pseudo element, while the other generates it into `:after`.
