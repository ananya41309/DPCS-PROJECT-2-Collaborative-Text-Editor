'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./svgmoji.cjs.prod.js");
} else {
  module.exports = require("./svgmoji.cjs.dev.js");
}
