# get-dom-document

Get a [DOM document](https://developer.mozilla.org/en-US/docs/Web/API/Document) in both Node.js and the browser environment.

`getDomDocument` will firstly try to get the DOM document from the global `document` object. If it is not available, it will try to create a new DOM document using [`jsdom`](https://github.com/jsdom/jsdom) in Node.js environment. If `jsdom` is not available or it's not running in Node.js environment, it will return `null`.

This package use the `browser` field in `package.json` and [conditional exports](https://nodejs.org/docs/latest-v16.x/api/packages.html#conditional-exports) to provide different implementations for Node.js and the browser environment.

## Install

```
npm install get-dom-document
```

## Usage

CommonJS:

```js
const { getDomDocument } = require("get-dom-document");

const document = getDomDocument();
```

ES module:

```js
import { getDomDocument } from "get-dom-document";

const document = getDomDocument();
```
