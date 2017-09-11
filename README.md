# Form Components

> Custom Form Components. Without Any Framework.

## Installation

Using npm:

```bash
$ npm install @julmot/form-components
```

You can now embed individual form components from the `dist` folder. They are available as CommonJS (e.g. Webpack), AMD (e.g. RequireJS) and global (attached to the `window` object) packages with their corresponding CSS files.

## Currently Available Components

- [x] Message (e.g. validation)
- [ ] Select
- [ ] Text Field (single and multi line)
- [ ] Checkbox
- [ ] Radio


## Requirements

- Root _content_ element must be the `<main>` element (necessary for detection of inline messages)
- Work best with embedded [normalize.css](https://github.com/necolas/normalize.css)
- Inherits your app-specific fonts
