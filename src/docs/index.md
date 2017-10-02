> Custom Form Components. Without Any Framework.

## Installation

Using npm:

```bash
$ npm install @julmot/form-components
```

Using a CDN:

- [jsDelivr](https://www.jsdelivr.com/package/npm/@julmot/form-components?path=dist)

You can embed individual form components from the `dist` folder. They are available as CommonJS (e.g. Webpack), AMD (e.g. RequireJS) and global (attached to the `window` object) packages with their corresponding CSS files.

## Getting Started

After you've installed the components, you need to load and initialize them. Create a new class instance of the exported class. In case you'd like to dynamically initialize instances, you can use the also exported `selector` string to determine if a component exists.

For example when using Webpack with ES6:

```js
import '@julmot/form-components/dist/radio-material-like/radio-material-like.css';
import {
  Radio as RadioComponent,
  selector as RadioComponentSelector
} from '@julmot/form-components/dist/radio-material-like/radio-material-like';

new RadioComponent(document.querySelector(RadioComponentSelector));
```

You can also pass in options for every form component instance (not the message component). For example:

```js
new RadioComponent(document.querySelector(RadioComponentSelector), {
  tabbed: false
});
```

### Options

**tabbed**

Type: boolean  
Default: true

If the form component should receive a focus outline when tabbing with the keyboard. 

## Currently Available Components

Please head over to the components list on the left side to see a full list of all available components.

There's also an example form that renders all of them in a single form for demonstration purposes.

## Browser Compatibility

Successfully tested in:

- IE11 (Windows)
- Latest Edge (Windows)
- Latest Chrome (macOS and Windows)
- Latest Firefox (macOS and Windows)
- Latest Chrome Mobile (Android)
- Latest Safari Mobile (iOS)

## Requirements

- Needs the [babel polyfill](https://babeljs.io/docs/usage/polyfill/) to work with old browsers
- Expects a `novalidate` attribute on the `<form>` tag
- Work best with embedded [normalize.css](https://github.com/necolas/normalize.css)
- Root _content_ element should be the `<main>` element (for detection of inline messages)
- Inherits your app-specific fonts
