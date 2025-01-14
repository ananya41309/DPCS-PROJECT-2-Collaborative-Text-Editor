'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var core = require('@svgmoji/core');

class Twemoji extends core.Moji {
  constructor() {
    super(...arguments);

    _defineProperty(this, "name", 'twemoji');

    _defineProperty(this, "version", VERSION);
  }

}
const TWEMOJI_META = {
  name: 'twemoji',
  owner: 'twitter',
  repo: 'twemoji',
  sha: 'v13.1.0',
  directory: 'assets/svg'
};
const VERSION = (["3.2.0"][0]);

exports.TWEMOJI_META = TWEMOJI_META;
exports.Twemoji = Twemoji;
