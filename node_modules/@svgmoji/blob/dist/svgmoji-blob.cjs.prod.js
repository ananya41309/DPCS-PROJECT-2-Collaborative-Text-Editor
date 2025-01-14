'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var core = require('@svgmoji/core');

class Blobmoji extends core.Moji {
  constructor() {
    super(...arguments);

    _defineProperty(this, "name", 'blob');

    _defineProperty(this, "version", VERSION);
  }

}
const BLOB_META = {
  name: 'blob',
  owner: 'c1710',
  repo: 'blobmoji',
  sha: 'v2019-06-14-Emoji-12',
  directory: 'svg'
};
const VERSION = (["3.2.0"][0]);

exports.BLOB_META = BLOB_META;
exports.Blobmoji = Blobmoji;
