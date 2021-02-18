# Status

Work in progress...

# Usage

## Installation
```
npm install vue-cookie-box --save
```

## Component

### `<template>`
```html
<CookieBox />
```

### `<script>`
```javascript
import "vue-cookie-box/dist/vue-cookie-box.css"
import CookieBox from "vue-cookie-box"

export default {
  components: {
    CookieBox
  }
}
```

### `<style>`
```css
/* Or use CookieBox's bannerStyle property. */
.cookie-box-banner {
  background-color: blue;
}
```

# Styles
Don't scope styles of components which should accept overrides by consumer.

# Todo
- [] allow custom content via `<slot>`
- [] i18n

# Contribution

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```
