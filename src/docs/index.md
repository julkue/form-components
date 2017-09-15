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

After you've embedded the components you want to use (including their CSS files), you need to initialize them. Create a new class instance of the exported `default` class. In case you'd like to dynamically initialize instances, you can use the also exported `selector` string to determine if a component exists.

For example when using Webpack with ES6:

```js
import '@julmot/form-components/dist/message/message.css';
import * as Message from '@julmot/form-components/dist/message/message';

new Message.default(document.querySelector(Message.selector));
```

## Currently Available Components

- Select
- Text Field (single and multi line)
- Checkbox
- Message (e.g. to output validation messages at the top of a document)

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

- Root _content_ element must be the `<main>` element (necessary for detection of inline messages)
- Needs the [babel polyfill](https://babeljs.io/docs/usage/polyfill/) to work with old browsers
- Expects a `novalidate` attribute on the `<form>` tag
- Work best with embedded [normalize.css](https://github.com/necolas/normalize.css)
- Inherits your app-specific fonts
