import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { Moji } from '@svgmoji/core';

class Twemoji extends Moji {
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

export { TWEMOJI_META, Twemoji };
