'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./svgmoji-blob.cjs.prod.js");
} else {
  module.exports = require("./svgmoji-blob.cjs.dev.js");
}
