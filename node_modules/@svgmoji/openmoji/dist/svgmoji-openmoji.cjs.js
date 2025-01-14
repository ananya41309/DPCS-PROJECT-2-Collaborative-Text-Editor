'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./svgmoji-openmoji.cjs.prod.js");
} else {
  module.exports = require("./svgmoji-openmoji.cjs.dev.js");
}
