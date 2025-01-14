'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var core = require('@svgmoji/core');

class Openmoji extends core.Moji {
  constructor() {
    super(...arguments);

    _defineProperty(this, "name", 'openmoji');

    _defineProperty(this, "version", VERSION);
  }

}
const OPENMOJI_META = {
  name: 'openmoji',
  owner: 'hfg-gmuend',
  repo: 'openmoji',
  sha: '93513a3832db7c36bf0be119746456907972b262',
  directory: 'color/svg'
};
const VERSION = (["3.2.0"][0]);

exports.OPENMOJI_META = OPENMOJI_META;
exports.Openmoji = Openmoji;
