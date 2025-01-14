'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var core = require('@svgmoji/core');

class Notomoji extends core.Moji {
  constructor() {
    super(...arguments);

    _defineProperty(this, "name", 'noto');

    _defineProperty(this, "version", VERSION);
  }

  get cdn() {
    // Overwrite the cdn url, since `cdn.jsdeliver.net` restricts github assets of greater than 20MB.
    if (this.type === core.SpriteCollection.All) {
      return "https://cdn.jsdelivr.net/npm/@svgmoji/".concat(this.name, "@").concat(this.version);
    }

    return super.cdn;
  }

}
const NOTO_META = {
  name: 'noto',
  owner: 'googlefonts',
  repo: 'noto-emoji',
  sha: 'v2020-09-16-unicode13_1',
  directory: 'svg'
};
const VERSION = (["3.2.0"][0]);

exports.NOTO_META = NOTO_META;
exports.Notomoji = Notomoji;
