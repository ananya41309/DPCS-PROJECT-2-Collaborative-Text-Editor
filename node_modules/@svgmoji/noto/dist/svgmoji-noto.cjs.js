'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./svgmoji-noto.cjs.prod.js");
} else {
  module.exports = require("./svgmoji-noto.cjs.dev.js");
}
