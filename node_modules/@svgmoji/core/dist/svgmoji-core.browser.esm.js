import _objectSpread from '@babel/runtime/helpers/esm/objectSpread2';
import _classPrivateFieldGet from '@babel/runtime/helpers/esm/classPrivateFieldGet';
import { generateEmoticonPermutations, NON_LATIN_LOCALES } from 'emojibase';
export { fromUnicodeToHexcode, generateEmoticonPermutations, stripHexcode } from 'emojibase';
import { matchSorter, rankings } from 'match-sorter';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { set, get } from 'idb-keyval';

const SpriteCollection = {
  /**
   * A larger bundle size with all the available emoji in one package.
   */
  All: 'all',

  /**
   * Break the emoji down into 10 separate groups.
   */
  Group: 'group',

  /**
   * Further break the emoji down into even smaller sub groups.
   */
  Subgroup: 'sub-group',

  /**
   * Get the direct url for the emoji
   */
  Individual: 'individual'
};

function isMinifiedEmoji(value) {
  if (typeof value !== 'object' || value == null) {
    return false;
  }

  const keys = Object.keys(value);
  return keys.includes('h') && keys.includes('e');
}
function isFlatEmoji(value) {
  if (typeof value !== 'object' || value == null) {
    return false;
  }

  const keys = Object.keys(value);
  return keys.includes('hexcode') && keys.includes('emoji');
}
function isMinifiedEmojiList(list) {
  return isMinifiedEmoji(list[0]);
}
function isFlatEmojiList(list) {
  return isFlatEmoji(list[0]);
}

/**
 * Minify emoji which can be useful for reducing the json bundlesize.
 */
function minifyEmoji(emojis) {
  return emojis.map(emoji => omitUndefined({
    a: emoji.annotation,
    e: emoji.emoji,
    u: emoji.emoticon,
    g: emoji.gender,
    b: emoji.group,
    h: emoji.hexcode,
    o: emoji.order,
    s: emoji.shortcodes,
    k: emoji.skins,
    c: emoji.subgroup,
    t: emoji.tags,
    d: emoji.text,
    f: emoji.tone,
    i: emoji.type,
    v: emoji.version
  }));
}
/**
 * Remove the undefined values from an object.
 */

function omitUndefined(object) {
  return JSON.parse(JSON.stringify(object));
}

/**
 * Populate the minified emoji into a readable format.
 */
function populateMinifiedEmoji(minified) {
  return minified.map(emoji => omitUndefined({
    annotation: emoji.a,
    emoji: emoji.e,
    emoticon: emoji.u,
    gender: emoji.g,
    group: emoji.b,
    hexcode: emoji.h,
    order: emoji.o,
    shortcodes: emoji.s,
    skins: emoji.k,
    subgroup: emoji.c,
    tags: emoji.t,
    text: emoji.d,
    tone: emoji.f,
    type: emoji.i,
    version: emoji.v
  }));
}

const groups = ([{
  "0": "smileys-emotion",
  "1": "people-body",
  "2": "component",
  "3": "animals-nature",
  "4": "food-drink",
  "5": "travel-places",
  "6": "activities",
  "7": "objects",
  "8": "symbols",
  "9": "flags"
}][0]);
const subgroups = ([{
  "0": "face-smiling",
  "1": "face-affection",
  "2": "face-tongue",
  "3": "face-hand",
  "4": "face-neutral-skeptical",
  "5": "face-sleepy",
  "6": "face-unwell",
  "7": "face-hat",
  "8": "face-glasses",
  "9": "face-concerned",
  "10": "face-negative",
  "11": "face-costume",
  "12": "cat-face",
  "13": "monkey-face",
  "14": "emotion",
  "15": "hand-fingers-open",
  "16": "hand-fingers-partial",
  "17": "hand-single-finger",
  "18": "hand-fingers-closed",
  "19": "hands",
  "20": "hand-prop",
  "21": "body-parts",
  "22": "person",
  "23": "person-gesture",
  "24": "person-role",
  "25": "person-fantasy",
  "26": "person-activity",
  "27": "person-sport",
  "28": "person-resting",
  "29": "family",
  "30": "person-symbol",
  "31": "skin-tone",
  "32": "hair-style",
  "33": "animal-mammal",
  "34": "animal-bird",
  "35": "animal-amphibian",
  "36": "animal-reptile",
  "37": "animal-marine",
  "38": "animal-bug",
  "39": "plant-flower",
  "40": "plant-other",
  "41": "food-fruit",
  "42": "food-vegetable",
  "43": "food-prepared",
  "44": "food-asian",
  "45": "food-marine",
  "46": "food-sweet",
  "47": "drink",
  "48": "dishware",
  "49": "place-map",
  "50": "place-geographic",
  "51": "place-building",
  "52": "place-religious",
  "53": "place-other",
  "54": "transport-ground",
  "55": "transport-water",
  "56": "transport-air",
  "57": "hotel",
  "58": "time",
  "59": "sky-weather",
  "60": "event",
  "61": "award-medal",
  "62": "sport",
  "63": "game",
  "64": "arts-crafts",
  "65": "clothing",
  "66": "sound",
  "67": "music",
  "68": "musical-instrument",
  "69": "phone",
  "70": "computer",
  "71": "light-video",
  "72": "book-paper",
  "73": "money",
  "74": "mail",
  "75": "writing",
  "76": "office",
  "77": "lock",
  "78": "tool",
  "79": "science",
  "80": "medical",
  "81": "household",
  "82": "other-object",
  "83": "transport-sign",
  "84": "warning",
  "85": "arrow",
  "86": "religion",
  "87": "zodiac",
  "88": "av-symbol",
  "89": "gender",
  "90": "math",
  "91": "punctuation",
  "92": "currency",
  "93": "other-symbol",
  "94": "keycap",
  "95": "alphanum",
  "96": "geometric",
  "97": "flag",
  "98": "country-flag",
  "99": "subdivision-flag"
}][0]);

var _findCache = /*#__PURE__*/new WeakMap();

class Moji {
  /**
   * The name of the svgmoji.
   */

  /**
   * The version to retrieve from the cdn.
   */

  /**
   * All the available emoji.
   */

  /**
   * Only data without tones included.
   */

  /**
   * The type of sprite to load.
   */

  /**
   * The fallback emoji to use when none can be found.
   */

  /**
   * A list of popular emoji that can be presented when an empty string is provided as the query.
   */

  /**
   * Cache the results for finding an emoji.
   */
  get cdn() {
    return "https://cdn.jsdelivr.net/gh/svgmoji/svgmoji@".concat(this.version, "/packages/svgmoji__").concat(this.name);
  }

  get fallbackUrl() {
    return "".concat(this.cdn, "/svg/").concat(this.fallback.hexcode, ".svg");
  }
  /**
   * @param data - data which is used to lookup the groups and subgroups for the emoji instance
   * @param fallback - the default hexcode to use when none can be found.
   */


  constructor(_ref) {
    let {
      data,
      type,
      fallback = '1F44D',
      popular = DEFAULT_POPULAR_EMOJI
    } = _ref;

    _findCache.set(this, {
      writable: true,
      value: new Map()
    });

    this.type = type;
    this.data = isMinifiedEmojiList(data) ? populateMinifiedEmoji(data) : data;
    this.tonelessData = this.data.filter(emoji => !emoji.tone);
    this.popularEmoji = this.populatePopularEmoji(popular);
    const fallbackEmoji = this.find(fallback);

    if (!fallbackEmoji) {
      throw new Error("\u274C No emoji exists for the provided fallback value: '".concat(fallback, "'"));
    }

    this.fallback = fallbackEmoji;
  }
  /**
   * Get the CDN url from the provided emoji hexcode, emoticon or unicode string.
   */


  url(code) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const {
      fallback = true
    } = options;
    const emoji = isFlatEmoji(code) ? code : this.find(code);
    const fallbackUrl = fallback ? this.fallbackUrl : undefined;

    if (!emoji) {
      return fallbackUrl;
    }

    if (this.type === SpriteCollection.All) {
      return "".concat(this.cdn, "/sprites/all.svg#").concat(emoji.hexcode);
    }

    if (this.type === SpriteCollection.Individual) {
      return "".concat(this.cdn, "/svg/").concat(emoji.hexcode, ".svg");
    }

    if (this.type === SpriteCollection.Group && emoji.group != null) {
      var _groups$emoji$group;

      const name = (_groups$emoji$group = groups[emoji.group]) !== null && _groups$emoji$group !== void 0 ? _groups$emoji$group : 'other';
      return "".concat(this.cdn, "/sprites/group/").concat(name, ".svg#").concat(emoji.hexcode);
    }

    if (this.type === SpriteCollection.Subgroup && emoji.subgroup != null) {
      var _subgroups$emoji$subg;

      const name = (_subgroups$emoji$subg = subgroups[emoji.subgroup]) !== null && _subgroups$emoji$subg !== void 0 ? _subgroups$emoji$subg : 'other';
      return "".concat(this.cdn, "/sprites/subgroup/").concat(name, ".svg#").concat(emoji.hexcode);
    }

    return fallbackUrl;
  }
  /**
   * Get an the emoji object of a value by it's hexcode, emoticon or unicode string.
   */


  find(code) {
    if (_classPrivateFieldGet(this, _findCache).has(code)) {
      return _classPrivateFieldGet(this, _findCache).get(code);
    }

    for (const emoji of this.data) {
      if (emojiMatchesCode(code, emoji)) {
        _classPrivateFieldGet(this, _findCache).set(code, emoji);

        return emoji;
      }
    } // No matches were found in the data.
    // eslint-disable-next-line unicorn/no-useless-undefined


    _classPrivateFieldGet(this, _findCache).set(code, undefined);

    return;
  }
  /**
   * Search for the nearest emoji using the `match-sorter` algorithm.
   */


  search(query) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    const {
      excludeTone,
      maxResults
    } = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);

    const data = excludeTone ? this.tonelessData : this.data;

    if (!query) {
      return take(this.popularEmoji, maxResults);
    }

    return take(matchSorter(data, query, {
      threshold: rankings.WORD_STARTS_WITH,
      keys: [{
        threshold: rankings.STARTS_WITH,
        key: 'shortcodes'
      }, item => {
        var _item$shortcodes$map, _item$shortcodes;

        return (_item$shortcodes$map = (_item$shortcodes = item.shortcodes) === null || _item$shortcodes === void 0 ? void 0 : _item$shortcodes.map(shortcode => shortcode.split('_').join(' '))) !== null && _item$shortcodes$map !== void 0 ? _item$shortcodes$map : [];
      }, 'annotation', 'tags', item => {
        var _subgroups$item$subgr, _subgroups$item$subgr2;

        return item.subgroup ? (_subgroups$item$subgr = (_subgroups$item$subgr2 = subgroups[item.subgroup]) === null || _subgroups$item$subgr2 === void 0 ? void 0 : _subgroups$item$subgr2.split('-').join(' ')) !== null && _subgroups$item$subgr !== void 0 ? _subgroups$item$subgr : '' : '';
      }, item => {
        var _groups$item$group$sp, _groups$item$group;

        return item.group ? (_groups$item$group$sp = (_groups$item$group = groups[item.group]) === null || _groups$item$group === void 0 ? void 0 : _groups$item$group.split('-').join(' ')) !== null && _groups$item$group$sp !== void 0 ? _groups$item$group$sp : '' : '';
      }]
    }), maxResults);
  }
  /**
   * Get skins from emoji
   */


  getTones(emoji) {
    const skins = [];

    for (const skin of (_emoji$skins = emoji.skins) !== null && _emoji$skins !== void 0 ? _emoji$skins : []) {
      var _emoji$skins;

      const skinEmoji = this.find(skin);

      if (skinEmoji) {
        skins.push();
      }
    }

    return skins;
  }
  /**
   * Populate the popular emoji codes.
   */


  populatePopularEmoji(codes) {
    const popularEmoji = [];

    for (const code of codes) {
      const emoji = this.find(code);

      if (emoji) {
        popularEmoji.push(emoji);
      }
    }

    return popularEmoji;
  }

}
const DEFAULT_OPTIONS = {
  excludeTone: false,
  maxResults: 20
};

/**
 * Takes a number of elements from the provided array starting from the
 * zero-index.
 *
 * Set count to `-1` to include all results.
 *
 * @param array - the array to take from
 * @param count - the number of items to take
 *
 */
function take(array, count) {
  count = Math.max(Math.min(0, count), count === -1 ? array.length : count);
  return array.slice(0, count);
}
/**
 * Check if the emoji matches the provided code.
 */


function emojiMatchesCode(code, emoji) {
  var _emoji$shortcodes, _emoji$shortcodes2;

  if ( // This is a native emoji match
  emoji.emoji === code || // This uses the underlying text representation of the emoji
  emoji.text === code || // This is a hexcode match.
  emoji.hexcode === code || // There is a match for the shortcode
  (_emoji$shortcodes = emoji.shortcodes) !== null && _emoji$shortcodes !== void 0 && _emoji$shortcodes.includes(code) || // There is a match for the shortcode, but with surrounding braces.
  (_emoji$shortcodes2 = emoji.shortcodes) !== null && _emoji$shortcodes2 !== void 0 && _emoji$shortcodes2.map(shortcode => ":".concat(shortcode, ":")).includes(code) || // The provided code matches the emoticon.
  emoji.emoticon && generateEmoticonPermutations(emoji.emoticon).includes(code)) {
    return true;
  }

  return false;
}
/**
 * A list of some of the most popular emoji.
 *
 * Derived from https://home.unicode.org/emoji/emoji-frequency/
 */


const DEFAULT_POPULAR_EMOJI = ['😂', '❤️', '😍', '🤣', '😊', '🙏', '💕', '😭', '😘', '👍', '😅', '👏', '😁', '🔥', '💔', '💖', '😢', '🤔', '😆', '🙄', '💪', '😉', '☺️', '👌', '🤗', '😔', '😎', '😇', '🌹', '🤦', '🎉', '💞', '✌️', '✨', '🤷', '😱', '😌', '🌸', '🙌', '😋', '😏', '🙂', '🤩', '😄', '😀', '😃', '💯', '🙈', '👇', '🎶', '😒', '🤭', '❣️', '❗', '😜', '💋', '👀', '😪', '😑', '💥', '🙋', '😞', '😩', '😡', '🤪', '👊', '☀️', '😥', '🤤', '👉', '💃', '😳', '✋', '😚', '😝', '😴', '🌟', '😬', '🙃', '🍀', '🌷', '😻', '😓', '⭐', '✅', '🌈', '😈', '🤘', '💦', '✔️', '😣', '🏃', '💐', '☹️', '🎊', '💘', '😠', '☝️', '😕', '🌺'];

const _excluded$2 = ["version"];

async function runInBrowser(callback) {

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return callback(...args);
}

async function fetchFromCDN(path) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  const {
    version = 'latest'
  } = options,
        opts = _objectWithoutProperties(options, _excluded$2);

  if (process.env.NODE_ENV === 'dev') {
    if (!path || path.slice(-5) !== '.json') {
      throw new Error('A valid JSON dataset is required to fetch.');
    }

    if (!version) {
      throw new Error('A valid release version is required.');
    }
  }

  const cacheKey = "svgmoji/".concat(version, "/").concat(path);
  const cachedData = await runInBrowser(get, cacheKey); // Check the cache first

  if (cachedData) {
    return Promise.resolve(cachedData);
  }

  const response = await fetch("https://cdn.jsdelivr.net/npm/emojibase-data@".concat(version, "/").concat(path), _objectSpread({
    credentials: 'omit',
    mode: 'cors',
    redirect: 'error'
  }, opts));

  if (!response.ok) {
    throw new Error('Failed to load Emojibase dataset.');
  }

  const data = await response.json();

  try {
    await runInBrowser(set, cacheKey, data);
  } catch (_unused) {// Do nothing.
  }

  return data;
}

const ALIASES = {
  discord: 'joypixels',
  slack: 'iamcal'
};
function fetchShortcodes(locale, preset, options) {
  var _ALIASES$preset;

  if (preset === 'cldr-native' && !NON_LATIN_LOCALES.includes(locale)) {
    return Promise.resolve({});
  }

  return fetchFromCDN("".concat(locale, "/shortcodes/").concat((_ALIASES$preset = ALIASES[preset]) !== null && _ALIASES$preset !== void 0 ? _ALIASES$preset : preset, ".json"), options);
}

function joinShortcodesToEmoji(emoji, shortcodeDatasets) {
  if (shortcodeDatasets.length === 0) {
    return emoji;
  }

  const list = new Set(emoji.shortcodes);

  for (const dataset of shortcodeDatasets) {
    const shortcodes = dataset[emoji.hexcode];

    if (Array.isArray(shortcodes)) {
      shortcodes.forEach(code => list.add(code));
    } else if (shortcodes) {
      list.add(shortcodes);
    }
  }

  emoji.shortcodes = [...list];

  if (!emoji.skins) {
    return emoji;
  }

  for (const skin of emoji.skins) {
    joinShortcodesToEmoji(skin, shortcodeDatasets);
  }

  return emoji;
}

const _excluded$1 = ["skins", "tone"],
      _excluded2 = ["tone"];

/**
 * Throws an error if the tone is undefined.
 */
function getTone(tone) {
  if (!tone) {
    throw new Error('A tone is required when using `getTone`');
  }

  return Array.isArray(tone) ? [tone[0], tone[1]] : [tone];
}

function createFlatEmoji(base, skins, tone) {
  const flatEmoji = _objectSpread({}, base);

  if (tone) {
    flatEmoji.tone = getTone(tone);
  }

  if (skins) {
    flatEmoji.skins = skins.map(skin => skin.hexcode);
  }

  return flatEmoji;
}

function flattenEmojiData(data) {
  let shortcodeDatasets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const emojis = [];

  for (const emoji of data) {
    const emojiWithShortcodes = joinShortcodesToEmoji(emoji, shortcodeDatasets);

    const {
      skins,
      tone
    } = emojiWithShortcodes,
          base = _objectWithoutProperties(emojiWithShortcodes, _excluded$1);

    emojis.push(createFlatEmoji(base, skins, tone));

    if (!skins) {
      continue;
    }

    for (const skin of skins) {
      const _skin = _objectSpread({}, skin),
            {
        tone
      } = _skin,
            baseSkin = _objectWithoutProperties(_skin, _excluded2);

      if (base.tags) {
        baseSkin.tags = [...base.tags];
      }

      emojis.push(createFlatEmoji(baseSkin, undefined, tone));
    }
  }

  return emojis;
}

const _excluded = ["shortcodes"];
async function fetchEmojis(locale) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  const {
    shortcodes: presets = []
  } = options,
        opts = _objectWithoutProperties(options, _excluded);

  const emojis = await fetchFromCDN("".concat(locale, "/data.json"), opts);
  let shortcodes = [];

  if (presets.length > 0) {
    shortcodes = await Promise.all(presets.map(preset => {
      let promise;

      if (preset.includes('/')) {
        const [customLocale, customPreset] = preset.split('/');
        promise = fetchShortcodes(customLocale, customPreset, opts);
      } else {
        promise = fetchShortcodes(locale, preset, opts);
      } // Ignore as the primary dataset should still load


      return promise.catch(() => ({}));
    }));
  }

  return flattenEmojiData(emojis, shortcodes);
}

export { DEFAULT_POPULAR_EMOJI, Moji, SpriteCollection, fetchEmojis, fetchFromCDN, flattenEmojiData, isFlatEmoji, isFlatEmojiList, isMinifiedEmoji, isMinifiedEmojiList, joinShortcodesToEmoji, minifyEmoji, omitUndefined, populateMinifiedEmoji };
