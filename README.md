# Form Components

> Custom Form Components. Without Any Framework.

[![Build Status](https://img.shields.io/travis/julmot/form-components/master.svg?style=flat-square)](https://travis-ci.org/julmot/form-components)
[![npm Version](https://img.shields.io/npm/v/@julmot/form-components.svg?style=flat-square)](https://www.npmjs.com/package/@julmot/form-components)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/julmot/form-components/master/LICENSE)

## Installation

Using npm:

```bash
$ npm install @julmot/form-components
```

Using a CDN:

- [jsDelivr](https://www.jsdelivr.com/package/npm/@julmot/form-components?path=dist)

You can embed individual form components from the `dist` folder. They are available as CommonJS (e.g. Webpack), AMD (e.g. RequireJS) and global (attached to the `window` object) packages with their corresponding CSS files.

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
