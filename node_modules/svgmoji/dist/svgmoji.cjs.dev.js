'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var blob = require('@svgmoji/blob');
var core = require('@svgmoji/core');
var noto = require('@svgmoji/noto');
var openmoji = require('@svgmoji/openmoji');
var twemoji = require('@svgmoji/twemoji');



Object.keys(blob).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return blob[k];
		}
	});
});
Object.keys(core).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return core[k];
		}
	});
});
Object.keys(noto).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return noto[k];
		}
	});
});
Object.keys(openmoji).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return openmoji[k];
		}
	});
});
Object.keys(twemoji).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () {
			return twemoji[k];
		}
	});
});
