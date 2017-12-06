> Custom Form Components. Without Any Framework. Accessible.

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

You can also pass in options for every form component instance (not the message and "form" component). For example:

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

Please head over to the components list on the left side to see a full list of all available components. If you open a component, head over to the "Notes" tab. Individual components may contain a separate documentation or notes.

There's also an example form that renders all of them in a single form for demonstration purposes.

## Form Validation

There's one component that isn't listed on the left side since it's only one JavaScript file: "form". This component can be used for client-side validation. Basically it validates like a browser does, respecting e.g. "required" or "pattern" attributes. It also shows the same error messages like your browser does – or if you've specified custom validation messages then it'll show them (using the HTML5 API). However, the messages are shown in a design-conform way that looks nice with our custom form components. If you'd like to try it out; it's integrated in the "Example Form" components. It's exported like a normal component, so you can directly start using it.

The initialization is similar to normal components, you can pass in the `<form>` DOM element and an optional options object.

```js
new Form(document.querySelector('form.my-form'), {
  message: false
});
```

### Options

**message**

Type: boolean  
Default: true

When there's a message in the corresponding `<form>` element (needs the `.is-hidden` class), then this message will be shown/hidden according to the form validation status. If you specify `false` then this message will be ignored even when the message is available in the DOM.

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
- Work best with embedded [normalize.css](https://github.com/necolas/normalize.css)
- Root _content_ element should be the `<main>` element (for detection of inline messages)
- Requires either the `novalidate` attribute on `<form>` tags (only backend-side validation) or an initialization of the "form" component on them (client-side validation)
- Inherits your app-specific fonts
