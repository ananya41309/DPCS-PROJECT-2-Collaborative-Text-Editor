# @ocavue/svgmoji-cjs

A simple CJS wrapper for the [svgmoji](https://github.com/svgmoji/svgmoji) library.

svgmoji doesn't provide a valid ESM package. We need to make sure that Node.js and bundlers only import the CJS version of the package.

## Install

```
npm install @ocavue/svgmoji-cjs
```

## Usage 

```diff
- import { Blobmoji, Notomoji, Openmoji, Twemoji } from 'svgmoji'
+ import svgmoji from 'svgmoji'
+ const { Blobmoji, Notomoji, Openmoji, Twemoji } = svgmoji
```
