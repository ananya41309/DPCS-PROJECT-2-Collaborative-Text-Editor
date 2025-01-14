'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./svgmoji-twemoji.cjs.prod.js");
} else {
  module.exports = require("./svgmoji-twemoji.cjs.dev.js");
}
