import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { Moji } from '@svgmoji/core';

class Blobmoji extends Moji {
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

export { BLOB_META, Blobmoji };
