(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("eventemitter3"), require("big.js"), require("bech32"), require("@polkadot/util-crypto"), require("@cosmjs/stargate"), require("@cosmjs/tendermint-rpc"), require("secretjs"), require("@injectivelabs/sdk-ts"), require("@injectivelabs/utils"), require("@coral-xyz/anchor"), require("@solana/spl-token"), require("@solana/web3.js"), require("axios"), require("web3"));
	else if(typeof define === 'function' && define.amd)
		define(["eventemitter3", "big.js", "bech32", "@polkadot/util-crypto", "@cosmjs/stargate", "@cosmjs/tendermint-rpc", "secretjs", "@injectivelabs/sdk-ts", "@injectivelabs/utils", "@coral-xyz/anchor", "@solana/spl-token", "@solana/web3.js", "axios", "web3"], factory);
	else if(typeof exports === 'object')
		exports["picasso-sdk"] = factory(require("eventemitter3"), require("big.js"), require("bech32"), require("@polkadot/util-crypto"), require("@cosmjs/stargate"), require("@cosmjs/tendermint-rpc"), require("secretjs"), require("@injectivelabs/sdk-ts"), require("@injectivelabs/utils"), require("@coral-xyz/anchor"), require("@solana/spl-token"), require("@solana/web3.js"), require("axios"), require("web3"));
	else
		root["picasso-sdk"] = factory(root["eventemitter3"], root["big.js"], root["bech32"], root["@polkadot/util-crypto"], root["@cosmjs/stargate"], root["@cosmjs/tendermint-rpc"], root["secretjs"], root["@injectivelabs/sdk-ts"], root["@injectivelabs/utils"], root["@coral-xyz/anchor"], root["@solana/spl-token"], root["@solana/web3.js"], root["axios"], root["web3"]);
})(this, (__WEBPACK_EXTERNAL_MODULE__1891__, __WEBPACK_EXTERNAL_MODULE__875__, __WEBPACK_EXTERNAL_MODULE__7419__, __WEBPACK_EXTERNAL_MODULE__2659__, __WEBPACK_EXTERNAL_MODULE__1069__, __WEBPACK_EXTERNAL_MODULE__4706__, __WEBPACK_EXTERNAL_MODULE__7303__, __WEBPACK_EXTERNAL_MODULE__5204__, __WEBPACK_EXTERNAL_MODULE__4459__, __WEBPACK_EXTERNAL_MODULE__7609__, __WEBPACK_EXTERNAL_MODULE__4814__, __WEBPACK_EXTERNAL_MODULE__5783__, __WEBPACK_EXTERNAL_MODULE__2742__, __WEBPACK_EXTERNAL_MODULE__6019__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1718:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromAscii = exports.toAscii = void 0;
function toAscii(input) {
    const toNums = (str) => str.split("").map((x) => {
        const charCode = x.charCodeAt(0);
        // 0x00–0x1F control characters
        // 0x20–0x7E printable characters
        // 0x7F delete character
        // 0x80–0xFF out of 7 bit ascii range
        if (charCode < 0x20 || charCode > 0x7e) {
            throw new Error("Cannot encode character that is out of printable ASCII range: " + charCode);
        }
        return charCode;
    });
    return Uint8Array.from(toNums(input));
}
exports.toAscii = toAscii;
function fromAscii(data) {
    const fromNums = (listOfNumbers) => listOfNumbers.map((x) => {
        // 0x00–0x1F control characters
        // 0x20–0x7E printable characters
        // 0x7F delete character
        // 0x80–0xFF out of 7 bit ascii range
        if (x < 0x20 || x > 0x7e) {
            throw new Error("Cannot decode character that is out of printable ASCII range: " + x);
        }
        return String.fromCharCode(x);
    });
    return fromNums(Array.from(data)).join("");
}
exports.fromAscii = fromAscii;
//# sourceMappingURL=ascii.js.map

/***/ }),

/***/ 8594:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromBase64 = exports.toBase64 = void 0;
const base64js = __importStar(__webpack_require__(7526));
function toBase64(data) {
    return base64js.fromByteArray(data);
}
exports.toBase64 = toBase64;
function fromBase64(base64String) {
    if (!base64String.match(/^[a-zA-Z0-9+/]*={0,2}$/)) {
        throw new Error("Invalid base64 string format");
    }
    return base64js.toByteArray(base64String);
}
exports.fromBase64 = fromBase64;
//# sourceMappingURL=base64.js.map

/***/ }),

/***/ 714:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeBech32 = exports.fromBech32 = exports.toBech32 = void 0;
const bech32 = __importStar(__webpack_require__(7419));
function toBech32(prefix, data, limit) {
    const address = bech32.encode(prefix, bech32.toWords(data), limit);
    return address;
}
exports.toBech32 = toBech32;
function fromBech32(address, limit = Infinity) {
    const decodedAddress = bech32.decode(address, limit);
    return {
        prefix: decodedAddress.prefix,
        data: new Uint8Array(bech32.fromWords(decodedAddress.words)),
    };
}
exports.fromBech32 = fromBech32;
/**
 * Takes a bech32 address and returns a normalized (i.e. lower case) representation of it.
 *
 * The input is validated along the way, which makes this significantly safer than
 * using `address.toLowerCase()`.
 */
function normalizeBech32(address) {
    const { prefix, data } = fromBech32(address);
    return toBech32(prefix, data);
}
exports.normalizeBech32 = normalizeBech32;
//# sourceMappingURL=bech32.js.map

/***/ }),

/***/ 1028:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromHex = exports.toHex = void 0;
function toHex(data) {
    let out = "";
    for (const byte of data) {
        out += ("0" + byte.toString(16)).slice(-2);
    }
    return out;
}
exports.toHex = toHex;
function fromHex(hexstring) {
    if (hexstring.length % 2 !== 0) {
        throw new Error("hex string length must be a multiple of 2");
    }
    const out = new Uint8Array(hexstring.length / 2);
    for (let i = 0; i < out.length; i++) {
        const j = 2 * i;
        const hexByteAsString = hexstring.slice(j, j + 2);
        if (!hexByteAsString.match(/[0-9a-f]{2}/i)) {
            throw new Error("hex string contains invalid characters");
        }
        out[i] = parseInt(hexByteAsString, 16);
    }
    return out;
}
exports.fromHex = fromHex;
//# sourceMappingURL=hex.js.map

/***/ }),

/***/ 4917:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toUtf8 = exports.fromUtf8 = exports.toRfc3339 = exports.fromRfc3339 = exports.toHex = exports.fromHex = exports.toBech32 = exports.normalizeBech32 = exports.fromBech32 = exports.toBase64 = exports.fromBase64 = exports.toAscii = exports.fromAscii = void 0;
var ascii_1 = __webpack_require__(1718);
Object.defineProperty(exports, "fromAscii", ({ enumerable: true, get: function () { return ascii_1.fromAscii; } }));
Object.defineProperty(exports, "toAscii", ({ enumerable: true, get: function () { return ascii_1.toAscii; } }));
var base64_1 = __webpack_require__(8594);
Object.defineProperty(exports, "fromBase64", ({ enumerable: true, get: function () { return base64_1.fromBase64; } }));
Object.defineProperty(exports, "toBase64", ({ enumerable: true, get: function () { return base64_1.toBase64; } }));
var bech32_1 = __webpack_require__(714);
Object.defineProperty(exports, "fromBech32", ({ enumerable: true, get: function () { return bech32_1.fromBech32; } }));
Object.defineProperty(exports, "normalizeBech32", ({ enumerable: true, get: function () { return bech32_1.normalizeBech32; } }));
Object.defineProperty(exports, "toBech32", ({ enumerable: true, get: function () { return bech32_1.toBech32; } }));
var hex_1 = __webpack_require__(1028);
Object.defineProperty(exports, "fromHex", ({ enumerable: true, get: function () { return hex_1.fromHex; } }));
Object.defineProperty(exports, "toHex", ({ enumerable: true, get: function () { return hex_1.toHex; } }));
var rfc3339_1 = __webpack_require__(1466);
Object.defineProperty(exports, "fromRfc3339", ({ enumerable: true, get: function () { return rfc3339_1.fromRfc3339; } }));
Object.defineProperty(exports, "toRfc3339", ({ enumerable: true, get: function () { return rfc3339_1.toRfc3339; } }));
var utf8_1 = __webpack_require__(7290);
Object.defineProperty(exports, "fromUtf8", ({ enumerable: true, get: function () { return utf8_1.fromUtf8; } }));
Object.defineProperty(exports, "toUtf8", ({ enumerable: true, get: function () { return utf8_1.toUtf8; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1466:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toRfc3339 = exports.fromRfc3339 = void 0;
const rfc3339Matcher = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(\.\d{1,9})?((?:[+-]\d{2}:\d{2})|Z)$/;
function padded(integer, length = 2) {
    return integer.toString().padStart(length, "0");
}
function fromRfc3339(str) {
    const matches = rfc3339Matcher.exec(str);
    if (!matches) {
        throw new Error("Date string is not in RFC3339 format");
    }
    const year = +matches[1];
    const month = +matches[2];
    const day = +matches[3];
    const hour = +matches[4];
    const minute = +matches[5];
    const second = +matches[6];
    // fractional seconds match either undefined or a string like ".1", ".123456789"
    const milliSeconds = matches[7] ? Math.floor(+matches[7] * 1000) : 0;
    let tzOffsetSign;
    let tzOffsetHours;
    let tzOffsetMinutes;
    // if timezone is undefined, it must be Z or nothing (otherwise the group would have captured).
    if (matches[8] === "Z") {
        tzOffsetSign = 1;
        tzOffsetHours = 0;
        tzOffsetMinutes = 0;
    }
    else {
        tzOffsetSign = matches[8].substring(0, 1) === "-" ? -1 : 1;
        tzOffsetHours = +matches[8].substring(1, 3);
        tzOffsetMinutes = +matches[8].substring(4, 6);
    }
    const tzOffset = tzOffsetSign * (tzOffsetHours * 60 + tzOffsetMinutes) * 60; // seconds
    const date = new Date();
    date.setUTCFullYear(year, month - 1, day);
    date.setUTCHours(hour, minute, second, milliSeconds);
    return new Date(date.getTime() - tzOffset * 1000);
}
exports.fromRfc3339 = fromRfc3339;
function toRfc3339(date) {
    const year = date.getUTCFullYear();
    const month = padded(date.getUTCMonth() + 1);
    const day = padded(date.getUTCDate());
    const hour = padded(date.getUTCHours());
    const minute = padded(date.getUTCMinutes());
    const second = padded(date.getUTCSeconds());
    const ms = padded(date.getUTCMilliseconds(), 3);
    return `${year}-${month}-${day}T${hour}:${minute}:${second}.${ms}Z`;
}
exports.toRfc3339 = toRfc3339;
//# sourceMappingURL=rfc3339.js.map

/***/ }),

/***/ 7290:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromUtf8 = exports.toUtf8 = void 0;
function toUtf8(str) {
    return new TextEncoder().encode(str);
}
exports.toUtf8 = toUtf8;
/**
 * Takes UTF-8 data and decodes it to a string.
 *
 * In lossy mode, the [REPLACEMENT CHARACTER](https://en.wikipedia.org/wiki/Specials_(Unicode_block))
 * is used to substitude invalid encodings.
 * By default lossy mode is off and invalid data will lead to exceptions.
 */
function fromUtf8(data, lossy = false) {
    const fatal = !lossy;
    return new TextDecoder("utf-8", { fatal }).decode(data);
}
exports.fromUtf8 = fromUtf8;
//# sourceMappingURL=utf8.js.map

/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ 4647:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.DecodeBuffer = exports.EncodeBuffer = void 0;
var EncodeBuffer = /** @class */ (function () {
    function EncodeBuffer() {
        this.offset = 0;
        this.buffer_size = 256;
        this.buffer = new ArrayBuffer(this.buffer_size);
        this.view = new DataView(this.buffer);
    }
    EncodeBuffer.prototype.resize_if_necessary = function (needed_space) {
        if (this.buffer_size - this.offset < needed_space) {
            this.buffer_size = Math.max(this.buffer_size * 2, this.buffer_size + needed_space);
            var new_buffer = new ArrayBuffer(this.buffer_size);
            new Uint8Array(new_buffer).set(new Uint8Array(this.buffer));
            this.buffer = new_buffer;
            this.view = new DataView(new_buffer);
        }
    };
    EncodeBuffer.prototype.get_used_buffer = function () {
        return new Uint8Array(this.buffer).slice(0, this.offset);
    };
    EncodeBuffer.prototype.store_value = function (value, type) {
        var bSize = type.substring(1);
        var size = parseInt(bSize) / 8;
        this.resize_if_necessary(size);
        var toCall = type[0] === 'f' ? "setFloat".concat(bSize) : type[0] === 'i' ? "setInt".concat(bSize) : "setUint".concat(bSize);
        this.view[toCall](this.offset, value, true);
        this.offset += size;
    };
    EncodeBuffer.prototype.store_bytes = function (from) {
        this.resize_if_necessary(from.length);
        new Uint8Array(this.buffer).set(new Uint8Array(from), this.offset);
        this.offset += from.length;
    };
    return EncodeBuffer;
}());
exports.EncodeBuffer = EncodeBuffer;
var DecodeBuffer = /** @class */ (function () {
    function DecodeBuffer(buf) {
        this.offset = 0;
        this.buffer_size = buf.length;
        this.buffer = new ArrayBuffer(buf.length);
        new Uint8Array(this.buffer).set(buf);
        this.view = new DataView(this.buffer);
    }
    DecodeBuffer.prototype.assert_enough_buffer = function (size) {
        if (this.offset + size > this.buffer.byteLength) {
            throw new Error('Error in schema, the buffer is smaller than expected');
        }
    };
    DecodeBuffer.prototype.consume_value = function (type) {
        var bSize = type.substring(1);
        var size = parseInt(bSize) / 8;
        this.assert_enough_buffer(size);
        var toCall = type[0] === 'f' ? "getFloat".concat(bSize) : type[0] === 'i' ? "getInt".concat(bSize) : "getUint".concat(bSize);
        var ret = this.view[toCall](this.offset, true);
        this.offset += size;
        return ret;
    };
    DecodeBuffer.prototype.consume_bytes = function (size) {
        this.assert_enough_buffer(size);
        var ret = this.buffer.slice(this.offset, this.offset + size);
        this.offset += size;
        return ret;
    };
    return DecodeBuffer;
}());
exports.DecodeBuffer = DecodeBuffer;


/***/ }),

/***/ 4238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.BorshDeserializer = void 0;
var types_js_1 = __webpack_require__(8156);
var buffer_js_1 = __webpack_require__(4647);
var BorshDeserializer = /** @class */ (function () {
    function BorshDeserializer(bufferArray) {
        this.buffer = new buffer_js_1.DecodeBuffer(bufferArray);
    }
    BorshDeserializer.prototype.decode = function (schema) {
        return this.decode_value(schema);
    };
    BorshDeserializer.prototype.decode_value = function (schema) {
        if (typeof schema === 'string') {
            if (types_js_1.integers.includes(schema))
                return this.decode_integer(schema);
            if (schema === 'string')
                return this.decode_string();
            if (schema === 'bool')
                return this.decode_boolean();
        }
        if (typeof schema === 'object') {
            if ('option' in schema)
                return this.decode_option(schema);
            if ('enum' in schema)
                return this.decode_enum(schema);
            if ('array' in schema)
                return this.decode_array(schema);
            if ('set' in schema)
                return this.decode_set(schema);
            if ('map' in schema)
                return this.decode_map(schema);
            if ('struct' in schema)
                return this.decode_struct(schema);
        }
        throw new Error("Unsupported type: ".concat(schema));
    };
    BorshDeserializer.prototype.decode_integer = function (schema) {
        var size = parseInt(schema.substring(1));
        if (size <= 32 || schema == 'f64') {
            return this.buffer.consume_value(schema);
        }
        return this.decode_bigint(size, schema.startsWith('i'));
    };
    BorshDeserializer.prototype.decode_bigint = function (size, signed) {
        if (signed === void 0) { signed = false; }
        var buffer_len = size / 8;
        var buffer = new Uint8Array(this.buffer.consume_bytes(buffer_len));
        var bits = buffer.reduceRight(function (r, x) { return r + x.toString(16).padStart(2, '0'); }, '');
        if (signed && buffer[buffer_len - 1]) {
            return BigInt.asIntN(size, BigInt("0x".concat(bits)));
        }
        return BigInt("0x".concat(bits));
    };
    BorshDeserializer.prototype.decode_string = function () {
        var len = this.decode_integer('u32');
        var buffer = new Uint8Array(this.buffer.consume_bytes(len));
        // decode utf-8 string without using TextDecoder
        // first get all bytes to single byte code points
        var codePoints = [];
        for (var i = 0; i < len; ++i) {
            var byte = buffer[i];
            if (byte < 0x80) {
                codePoints.push(byte);
            }
            else if (byte < 0xE0) {
                codePoints.push(((byte & 0x1F) << 6) | (buffer[++i] & 0x3F));
            }
            else if (byte < 0xF0) {
                codePoints.push(((byte & 0x0F) << 12) | ((buffer[++i] & 0x3F) << 6) | (buffer[++i] & 0x3F));
            }
            else {
                var codePoint = ((byte & 0x07) << 18) | ((buffer[++i] & 0x3F) << 12) | ((buffer[++i] & 0x3F) << 6) | (buffer[++i] & 0x3F);
                codePoints.push(codePoint);
            }
        }
        // then decode code points to utf-8
        return String.fromCodePoint.apply(String, codePoints);
    };
    BorshDeserializer.prototype.decode_boolean = function () {
        return this.buffer.consume_value('u8') > 0;
    };
    BorshDeserializer.prototype.decode_option = function (schema) {
        var option = this.buffer.consume_value('u8');
        if (option === 1) {
            return this.decode_value(schema.option);
        }
        if (option !== 0) {
            throw new Error("Invalid option ".concat(option));
        }
        return null;
    };
    BorshDeserializer.prototype.decode_enum = function (schema) {
        var _a;
        var valueIndex = this.buffer.consume_value('u8');
        if (valueIndex > schema["enum"].length) {
            throw new Error("Enum option ".concat(valueIndex, " is not available"));
        }
        var struct = schema["enum"][valueIndex].struct;
        var key = Object.keys(struct)[0];
        return _a = {}, _a[key] = this.decode_value(struct[key]), _a;
    };
    BorshDeserializer.prototype.decode_array = function (schema) {
        var result = [];
        var len = schema.array.len ? schema.array.len : this.decode_integer('u32');
        for (var i = 0; i < len; ++i) {
            result.push(this.decode_value(schema.array.type));
        }
        return result;
    };
    BorshDeserializer.prototype.decode_set = function (schema) {
        var len = this.decode_integer('u32');
        var result = new Set();
        for (var i = 0; i < len; ++i) {
            result.add(this.decode_value(schema.set));
        }
        return result;
    };
    BorshDeserializer.prototype.decode_map = function (schema) {
        var len = this.decode_integer('u32');
        var result = new Map();
        for (var i = 0; i < len; ++i) {
            var key = this.decode_value(schema.map.key);
            var value = this.decode_value(schema.map.value);
            result.set(key, value);
        }
        return result;
    };
    BorshDeserializer.prototype.decode_struct = function (schema) {
        var result = {};
        for (var key in schema.struct) {
            result[key] = this.decode_value(schema.struct[key]);
        }
        return result;
    };
    return BorshDeserializer;
}());
exports.BorshDeserializer = BorshDeserializer;


/***/ }),

/***/ 1909:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.deserialize = exports.serialize = void 0;
var serialize_js_1 = __webpack_require__(6083);
var deserialize_js_1 = __webpack_require__(4238);
var utils = __importStar(__webpack_require__(8656));
function serialize(schema, value, validate) {
    if (validate === void 0) { validate = true; }
    if (validate)
        utils.validate_schema(schema);
    var serializer = new serialize_js_1.BorshSerializer(validate);
    return serializer.encode(value, schema);
}
exports.serialize = serialize;
function deserialize(schema, buffer, validate) {
    if (validate === void 0) { validate = true; }
    if (validate)
        utils.validate_schema(schema);
    var deserializer = new deserialize_js_1.BorshDeserializer(buffer);
    return deserializer.decode(schema);
}
exports.deserialize = deserialize;


/***/ }),

/***/ 6083:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.BorshSerializer = void 0;
var types_js_1 = __webpack_require__(8156);
var buffer_js_1 = __webpack_require__(4647);
var utils = __importStar(__webpack_require__(8656));
var BorshSerializer = /** @class */ (function () {
    function BorshSerializer(checkTypes) {
        this.encoded = new buffer_js_1.EncodeBuffer();
        this.fieldPath = ['value'];
        this.checkTypes = checkTypes;
    }
    BorshSerializer.prototype.encode = function (value, schema) {
        this.encode_value(value, schema);
        return this.encoded.get_used_buffer();
    };
    BorshSerializer.prototype.encode_value = function (value, schema) {
        if (typeof schema === 'string') {
            if (types_js_1.integers.includes(schema))
                return this.encode_integer(value, schema);
            if (schema === 'string')
                return this.encode_string(value);
            if (schema === 'bool')
                return this.encode_boolean(value);
        }
        if (typeof schema === 'object') {
            if ('option' in schema)
                return this.encode_option(value, schema);
            if ('enum' in schema)
                return this.encode_enum(value, schema);
            if ('array' in schema)
                return this.encode_array(value, schema);
            if ('set' in schema)
                return this.encode_set(value, schema);
            if ('map' in schema)
                return this.encode_map(value, schema);
            if ('struct' in schema)
                return this.encode_struct(value, schema);
        }
    };
    BorshSerializer.prototype.encode_integer = function (value, schema) {
        var size = parseInt(schema.substring(1));
        if (size <= 32 || schema == 'f64') {
            this.checkTypes && utils.expect_type(value, 'number', this.fieldPath);
            this.encoded.store_value(value, schema);
        }
        else {
            this.checkTypes && utils.expect_bigint(value, this.fieldPath);
            this.encode_bigint(BigInt(value), size);
        }
    };
    BorshSerializer.prototype.encode_bigint = function (value, size) {
        var buffer_len = size / 8;
        var buffer = new Uint8Array(buffer_len);
        for (var i = 0; i < buffer_len; i++) {
            buffer[i] = Number(value & BigInt(0xff));
            value = value >> BigInt(8);
        }
        this.encoded.store_bytes(new Uint8Array(buffer));
    };
    BorshSerializer.prototype.encode_string = function (value) {
        this.checkTypes && utils.expect_type(value, 'string', this.fieldPath);
        var _value = value;
        // encode to utf8 bytes without using TextEncoder
        var utf8Bytes = [];
        for (var i = 0; i < _value.length; i++) {
            var charCode = _value.charCodeAt(i);
            if (charCode < 0x80) {
                utf8Bytes.push(charCode);
            }
            else if (charCode < 0x800) {
                utf8Bytes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
            }
            else if (charCode < 0xd800 || charCode >= 0xe000) {
                utf8Bytes.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
            }
            else {
                i++;
                charCode = 0x10000 + (((charCode & 0x3ff) << 10) | (_value.charCodeAt(i) & 0x3ff));
                utf8Bytes.push(0xf0 | (charCode >> 18), 0x80 | ((charCode >> 12) & 0x3f), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
            }
        }
        // 4 bytes for length + string bytes
        this.encoded.store_value(utf8Bytes.length, 'u32');
        this.encoded.store_bytes(new Uint8Array(utf8Bytes));
    };
    BorshSerializer.prototype.encode_boolean = function (value) {
        this.checkTypes && utils.expect_type(value, 'boolean', this.fieldPath);
        this.encoded.store_value(value ? 1 : 0, 'u8');
    };
    BorshSerializer.prototype.encode_option = function (value, schema) {
        if (value === null || value === undefined) {
            this.encoded.store_value(0, 'u8');
        }
        else {
            this.encoded.store_value(1, 'u8');
            this.encode_value(value, schema.option);
        }
    };
    BorshSerializer.prototype.encode_enum = function (value, schema) {
        this.checkTypes && utils.expect_enum(value, this.fieldPath);
        var valueKey = Object.keys(value)[0];
        for (var i = 0; i < schema["enum"].length; i++) {
            var valueSchema = schema["enum"][i];
            if (valueKey === Object.keys(valueSchema.struct)[0]) {
                this.encoded.store_value(i, 'u8');
                return this.encode_struct(value, valueSchema);
            }
        }
        throw new Error("Enum key (".concat(valueKey, ") not found in enum schema: ").concat(JSON.stringify(schema), " at ").concat(this.fieldPath.join('.')));
    };
    BorshSerializer.prototype.encode_array = function (value, schema) {
        if (utils.isArrayLike(value))
            return this.encode_arraylike(value, schema);
        if (value instanceof ArrayBuffer)
            return this.encode_buffer(value, schema);
        throw new Error("Expected Array-like not ".concat(typeof (value), "(").concat(value, ") at ").concat(this.fieldPath.join('.')));
    };
    BorshSerializer.prototype.encode_arraylike = function (value, schema) {
        if (schema.array.len) {
            utils.expect_same_size(value.length, schema.array.len, this.fieldPath);
        }
        else {
            // 4 bytes for length
            this.encoded.store_value(value.length, 'u32');
        }
        // array values
        for (var i = 0; i < value.length; i++) {
            this.encode_value(value[i], schema.array.type);
        }
    };
    BorshSerializer.prototype.encode_buffer = function (value, schema) {
        if (schema.array.len) {
            utils.expect_same_size(value.byteLength, schema.array.len, this.fieldPath);
        }
        else {
            // 4 bytes for length
            this.encoded.store_value(value.byteLength, 'u32');
        }
        // array values
        this.encoded.store_bytes(new Uint8Array(value));
    };
    BorshSerializer.prototype.encode_set = function (value, schema) {
        this.checkTypes && utils.expect_type(value, 'object', this.fieldPath);
        var isSet = value instanceof Set;
        var values = isSet ? Array.from(value.values()) : Object.values(value);
        // 4 bytes for length
        this.encoded.store_value(values.length, 'u32');
        // set values
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value_1 = values_1[_i];
            this.encode_value(value_1, schema.set);
        }
    };
    BorshSerializer.prototype.encode_map = function (value, schema) {
        this.checkTypes && utils.expect_type(value, 'object', this.fieldPath);
        var isMap = value instanceof Map;
        var keys = isMap ? Array.from(value.keys()) : Object.keys(value);
        // 4 bytes for length
        this.encoded.store_value(keys.length, 'u32');
        // store key/values
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            this.encode_value(key, schema.map.key);
            this.encode_value(isMap ? value.get(key) : value[key], schema.map.value);
        }
    };
    BorshSerializer.prototype.encode_struct = function (value, schema) {
        this.checkTypes && utils.expect_type(value, 'object', this.fieldPath);
        for (var _i = 0, _a = Object.keys(schema.struct); _i < _a.length; _i++) {
            var key = _a[_i];
            this.fieldPath.push(key);
            this.encode_value(value[key], schema.struct[key]);
            this.fieldPath.pop();
        }
    };
    return BorshSerializer;
}());
exports.BorshSerializer = BorshSerializer;


/***/ }),

/***/ 8156:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.integers = void 0;
exports.integers = ['u8', 'u16', 'u32', 'u64', 'u128', 'i8', 'i16', 'i32', 'i64', 'i128', 'f32', 'f64'];


/***/ }),

/***/ 8656:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.validate_schema = exports.ErrorSchema = exports.expect_enum = exports.expect_same_size = exports.expect_bigint = exports.expect_type = exports.isArrayLike = void 0;
var types_js_1 = __webpack_require__(8156);
function isArrayLike(value) {
    // source: https://stackoverflow.com/questions/24048547/checking-if-an-object-is-array-like
    return (Array.isArray(value) ||
        (!!value &&
            typeof value === 'object' &&
            'length' in value &&
            typeof (value.length) === 'number' &&
            (value.length === 0 ||
                (value.length > 0 &&
                    (value.length - 1) in value))));
}
exports.isArrayLike = isArrayLike;
function expect_type(value, type, fieldPath) {
    if (typeof (value) !== type) {
        throw new Error("Expected ".concat(type, " not ").concat(typeof (value), "(").concat(value, ") at ").concat(fieldPath.join('.')));
    }
}
exports.expect_type = expect_type;
function expect_bigint(value, fieldPath) {
    var basicType = ['number', 'string', 'bigint', 'boolean'].includes(typeof (value));
    var strObject = typeof (value) === 'object' && value !== null && 'toString' in value;
    if (!basicType && !strObject) {
        throw new Error("Expected bigint, number, boolean or string not ".concat(typeof (value), "(").concat(value, ") at ").concat(fieldPath.join('.')));
    }
}
exports.expect_bigint = expect_bigint;
function expect_same_size(length, expected, fieldPath) {
    if (length !== expected) {
        throw new Error("Array length ".concat(length, " does not match schema length ").concat(expected, " at ").concat(fieldPath.join('.')));
    }
}
exports.expect_same_size = expect_same_size;
function expect_enum(value, fieldPath) {
    if (typeof (value) !== 'object' || value === null) {
        throw new Error("Expected object not ".concat(typeof (value), "(").concat(value, ") at ").concat(fieldPath.join('.')));
    }
}
exports.expect_enum = expect_enum;
// Validate Schema
var VALID_STRING_TYPES = types_js_1.integers.concat(['bool', 'string']);
var VALID_OBJECT_KEYS = ['option', 'enum', 'array', 'set', 'map', 'struct'];
var ErrorSchema = /** @class */ (function (_super) {
    __extends(ErrorSchema, _super);
    function ErrorSchema(schema, expected) {
        var message = "Invalid schema: ".concat(JSON.stringify(schema), " expected ").concat(expected);
        return _super.call(this, message) || this;
    }
    return ErrorSchema;
}(Error));
exports.ErrorSchema = ErrorSchema;
function validate_schema(schema) {
    if (typeof (schema) === 'string' && VALID_STRING_TYPES.includes(schema)) {
        return;
    }
    if (schema && typeof (schema) === 'object') {
        var keys = Object.keys(schema);
        if (keys.length === 1 && VALID_OBJECT_KEYS.includes(keys[0])) {
            var key = keys[0];
            if (key === 'option')
                return validate_schema(schema[key]);
            if (key === 'enum')
                return validate_enum_schema(schema[key]);
            if (key === 'array')
                return validate_array_schema(schema[key]);
            if (key === 'set')
                return validate_schema(schema[key]);
            if (key === 'map')
                return validate_map_schema(schema[key]);
            if (key === 'struct')
                return validate_struct_schema(schema[key]);
        }
    }
    throw new ErrorSchema(schema, VALID_OBJECT_KEYS.join(', ') + ' or ' + VALID_STRING_TYPES.join(', '));
}
exports.validate_schema = validate_schema;
function validate_enum_schema(schema) {
    if (!Array.isArray(schema))
        throw new ErrorSchema(schema, 'Array');
    for (var _i = 0, schema_1 = schema; _i < schema_1.length; _i++) {
        var sch = schema_1[_i];
        if (typeof sch !== 'object' || !('struct' in sch)) {
            throw new Error('Missing "struct" key in enum schema');
        }
        if (typeof sch.struct !== 'object' || Object.keys(sch.struct).length !== 1) {
            throw new Error('The "struct" in each enum must have a single key');
        }
        validate_schema({ struct: sch.struct });
    }
}
function validate_array_schema(schema) {
    if (typeof schema !== 'object')
        throw new ErrorSchema(schema, '{ type, len? }');
    if (schema.len && typeof schema.len !== 'number') {
        throw new Error("Invalid schema: ".concat(schema));
    }
    if ('type' in schema)
        return validate_schema(schema.type);
    throw new ErrorSchema(schema, '{ type, len? }');
}
function validate_map_schema(schema) {
    if (typeof schema === 'object' && 'key' in schema && 'value' in schema) {
        validate_schema(schema.key);
        validate_schema(schema.value);
    }
    else {
        throw new ErrorSchema(schema, '{ key, value }');
    }
}
function validate_struct_schema(schema) {
    if (typeof schema !== 'object')
        throw new ErrorSchema(schema, 'object');
    for (var key in schema) {
        validate_schema(schema[key]);
    }
}


/***/ }),

/***/ 8287:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(7526)
const ieee754 = __webpack_require__(251)
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ 251:
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 1312:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = __webpack_require__.g;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === 'object' && module.exports;
  var AMD =  true && __webpack_require__.amdO;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = __webpack_require__(4394)
    var Buffer = (__webpack_require__(1903).Buffer);
    var algorithm = is224 ? 'sha224' : 'sha256';
    var bufferFrom;
    if (Buffer.from && !root.JS_SHA256_NO_BUFFER_FROM) {
      bufferFrom = Buffer.from;
    } else {
      bufferFrom = function (message) {
        return new Buffer(message);
      };
    }
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(bufferFrom(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;
    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        this.block = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >>> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >>> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >>> 2] |= (0xc0 | (code >>> 6)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >>> 2] |= (0xe0 | (code >>> 12)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >>> 2] |= (0xf0 | (code >>> 18)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | ((code >>> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >>> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >>> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
      this.chromeBugWorkAround = true;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >>> 28) & 0x0F] + HEX_CHARS[(h0 >>> 24) & 0x0F] +
      HEX_CHARS[(h0 >>> 20) & 0x0F] + HEX_CHARS[(h0 >>> 16) & 0x0F] +
      HEX_CHARS[(h0 >>> 12) & 0x0F] + HEX_CHARS[(h0 >>> 8) & 0x0F] +
      HEX_CHARS[(h0 >>> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >>> 28) & 0x0F] + HEX_CHARS[(h1 >>> 24) & 0x0F] +
      HEX_CHARS[(h1 >>> 20) & 0x0F] + HEX_CHARS[(h1 >>> 16) & 0x0F] +
      HEX_CHARS[(h1 >>> 12) & 0x0F] + HEX_CHARS[(h1 >>> 8) & 0x0F] +
      HEX_CHARS[(h1 >>> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >>> 28) & 0x0F] + HEX_CHARS[(h2 >>> 24) & 0x0F] +
      HEX_CHARS[(h2 >>> 20) & 0x0F] + HEX_CHARS[(h2 >>> 16) & 0x0F] +
      HEX_CHARS[(h2 >>> 12) & 0x0F] + HEX_CHARS[(h2 >>> 8) & 0x0F] +
      HEX_CHARS[(h2 >>> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >>> 28) & 0x0F] + HEX_CHARS[(h3 >>> 24) & 0x0F] +
      HEX_CHARS[(h3 >>> 20) & 0x0F] + HEX_CHARS[(h3 >>> 16) & 0x0F] +
      HEX_CHARS[(h3 >>> 12) & 0x0F] + HEX_CHARS[(h3 >>> 8) & 0x0F] +
      HEX_CHARS[(h3 >>> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >>> 28) & 0x0F] + HEX_CHARS[(h4 >>> 24) & 0x0F] +
      HEX_CHARS[(h4 >>> 20) & 0x0F] + HEX_CHARS[(h4 >>> 16) & 0x0F] +
      HEX_CHARS[(h4 >>> 12) & 0x0F] + HEX_CHARS[(h4 >>> 8) & 0x0F] +
      HEX_CHARS[(h4 >>> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >>> 28) & 0x0F] + HEX_CHARS[(h5 >>> 24) & 0x0F] +
      HEX_CHARS[(h5 >>> 20) & 0x0F] + HEX_CHARS[(h5 >>> 16) & 0x0F] +
      HEX_CHARS[(h5 >>> 12) & 0x0F] + HEX_CHARS[(h5 >>> 8) & 0x0F] +
      HEX_CHARS[(h5 >>> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >>> 28) & 0x0F] + HEX_CHARS[(h6 >>> 24) & 0x0F] +
      HEX_CHARS[(h6 >>> 20) & 0x0F] + HEX_CHARS[(h6 >>> 16) & 0x0F] +
      HEX_CHARS[(h6 >>> 12) & 0x0F] + HEX_CHARS[(h6 >>> 8) & 0x0F] +
      HEX_CHARS[(h6 >>> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >>> 28) & 0x0F] + HEX_CHARS[(h7 >>> 24) & 0x0F] +
        HEX_CHARS[(h7 >>> 20) & 0x0F] + HEX_CHARS[(h7 >>> 16) & 0x0F] +
        HEX_CHARS[(h7 >>> 12) & 0x0F] + HEX_CHARS[(h7 >>> 8) & 0x0F] +
        HEX_CHARS[(h7 >>> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >>> 24) & 0xFF, (h0 >>> 16) & 0xFF, (h0 >>> 8) & 0xFF, h0 & 0xFF,
      (h1 >>> 24) & 0xFF, (h1 >>> 16) & 0xFF, (h1 >>> 8) & 0xFF, h1 & 0xFF,
      (h2 >>> 24) & 0xFF, (h2 >>> 16) & 0xFF, (h2 >>> 8) & 0xFF, h2 & 0xFF,
      (h3 >>> 24) & 0xFF, (h3 >>> 16) & 0xFF, (h3 >>> 8) & 0xFF, h3 & 0xFF,
      (h4 >>> 24) & 0xFF, (h4 >>> 16) & 0xFF, (h4 >>> 8) & 0xFF, h4 & 0xFF,
      (h5 >>> 24) & 0xFF, (h5 >>> 16) & 0xFF, (h5 >>> 8) & 0xFF, h5 & 0xFF,
      (h6 >>> 24) & 0xFF, (h6 >>> 16) & 0xFF, (h6 >>> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >>> 24) & 0xFF, (h7 >>> 16) & 0xFF, (h7 >>> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >>> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >>> 12));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >>> 18));
          bytes[index++] = (0x80 | ((code >>> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >>> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();


/***/ }),

/***/ 516:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(405), exports);
__exportStar(__webpack_require__(8417), exports);


/***/ }),

/***/ 405:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 8417:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNetworkFromAddress = exports.getEthereumAddressNetwork = exports.getSolanaAddressNetwork = exports.getCosmosAddressNetwork = exports.getPolkadotAddressNetwork = exports.getExplorerUrl = exports.getXcmInfo = exports.getSourceChannel = exports.getChannelIdsFromMemo = exports.createForwardPathRecursive = exports.convertAddressToStr = exports.convertCosmosAddress = exports.getPolkadotAddressStr = exports.getSupportedType = exports.getChainIdsByChannels = exports.channelList = exports.getAllowedTokensForPath = exports.buildIbcPath = exports.getForbiddenChains = exports.findSourceChannelId = exports.getTimeOut = exports.memoBuilder = exports.emitter = void 0;
var eventemitter3_1 = __importDefault(__webpack_require__(1891));
var big_js_1 = __importDefault(__webpack_require__(875));
var config_1 = __webpack_require__(6288);
var encoding_1 = __webpack_require__(4917);
var util_crypto_1 = __webpack_require__(2659);
var cosmos_1 = __webpack_require__(2693);
exports.emitter = new eventemitter3_1.default();
var bech32_1 = __webpack_require__(7419);
var solana_1 = __webpack_require__(2089);
var memoBuilder = function (_a) {
    var destChannel = _a.destChannel, destAddress = _a.destAddress;
    return JSON.stringify({
        forward: {
            receiver: destAddress,
            port: 'transfer',
            channel: "channel-".concat(destChannel),
            timeout: cosmos_1.TIMEOUT_IBC_MAX,
            retries: 0,
        },
    });
};
exports.memoBuilder = memoBuilder;
var getTimeOut = function (plusMin) {
    if (plusMin === void 0) { plusMin = 30; }
    var now = new Date();
    var minutesLater = new Date(now.getTime() + plusMin * 60 * 1000);
    return new big_js_1.default(minutesLater.getTime()).mul(1000000).toNumber();
};
exports.getTimeOut = getTimeOut;
var findSourceChannelId = function (sourceChainId, destChainId) {
    return Object.keys(config_1.networks[sourceChainId]).find(function (key) { return key === destChainId; });
};
exports.findSourceChannelId = findSourceChannelId;
var getForbiddenChains = function (fromChainId, toChainId) {
    if (fromChainId === toChainId ||
        (fromChainId === 'solana' &&
            config_1.networks[toChainId].chainType === 'polkadot') ||
        (fromChainId === 'ethereum' && config_1.networks[toChainId].chainType === 'polkadot'))
        return true;
    return false;
};
exports.getForbiddenChains = getForbiddenChains;
var buildIbcPath = function (fromChainId, toChainId) {
    if ((0, exports.getForbiddenChains)(fromChainId, toChainId))
        return null;
    var visited = new Set();
    var queue = [[fromChainId, []]];
    while (queue.length > 0) {
        var _a = __read(queue.shift(), 2), currentChainId = _a[0], path = _a[1];
        if (currentChainId === toChainId) {
            return path;
        }
        visited.add(currentChainId);
        var connections = config_1.tokensPerChannel[currentChainId];
        if (connections) {
            for (var destinationId in connections) {
                var nextChainId = connections[destinationId].chainId;
                if (!visited.has(nextChainId)) {
                    var newPath = __spreadArray(__spreadArray([], __read(path), false), [
                        { chainId: currentChainId, channelId: Number(destinationId) },
                    ], false);
                    queue.push([nextChainId, newPath]);
                }
            }
        }
    }
    return null;
};
exports.buildIbcPath = buildIbcPath;
var getAllowedTokensForPath = function (originChainId, destinationChainId) {
    var _a, _b, _c, _d;
    var result = (0, exports.buildIbcPath)(originChainId, destinationChainId);
    console.log(result);
    var supportedType = (0, exports.getSupportedType)(originChainId, destinationChainId);
    if (supportedType === 'xcm') {
        var xcmInfo = (0, exports.getXcmInfo)(originChainId, destinationChainId);
        return xcmInfo.tokens;
    }
    if (!!supportedType) {
        return result.reduce(function (acc, item) {
            if (acc.length > 0) {
                acc = acc.filter(function (token) {
                    return config_1.tokensPerChannel[item.chainId][item.channelId].tokens.includes(token);
                });
            }
            else {
                acc = __spreadArray([], __read(config_1.tokensPerChannel[item.chainId][item.channelId].tokens), false);
            }
            return acc;
        }, []);
    }
    if (((_b = (_a = config_1.networks === null || config_1.networks === void 0 ? void 0 : config_1.networks[originChainId]) === null || _a === void 0 ? void 0 : _a.polkadot) === null || _b === void 0 ? void 0 : _b.relayChain) === 'polkadot' ||
        ((_d = (_c = config_1.networks === null || config_1.networks === void 0 ? void 0 : config_1.networks[destinationChainId]) === null || _c === void 0 ? void 0 : _c.polkadot) === null || _d === void 0 ? void 0 : _d.relayChain) === 'polkadot')
        return ['DOT'];
    return [];
};
exports.getAllowedTokensForPath = getAllowedTokensForPath;
exports.channelList = Object.values(config_1.networks);
var getChainIdsByChannels = function (channels) {
    var _a, _b;
    var chainIdsByChannels = Object.keys(config_1.tokensPerChannel);
    var chainIds = channels.map(function (channel, i) {
        if (i === 0) {
            return chainIdsByChannels.find(function (chainId) {
                return Object.keys((config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[chainId]) || {}).some(function (v) { var _a; return v === ((_a = channels[i]) === null || _a === void 0 ? void 0 : _a.toString()); });
            });
        }
        return chainIdsByChannels.find(function (chainId) {
            return Object.keys((config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[chainId]) || {}).some(function (v) { return v === (channel === null || channel === void 0 ? void 0 : channel.toString()); });
        });
    });
    var lastChannel = channels[channels.length - 1];
    var lastChainId = (_b = (_a = Object.values(config_1.tokensPerChannel).find(function (v) { var _a; return !!((_a = v === null || v === void 0 ? void 0 : v[lastChannel.toString()]) === null || _a === void 0 ? void 0 : _a.chainId); })) === null || _a === void 0 ? void 0 : _a[lastChannel.toString()]) === null || _b === void 0 ? void 0 : _b.chainId;
    if (lastChainId)
        chainIds.push(lastChainId);
    return chainIds;
};
exports.getChainIdsByChannels = getChainIdsByChannels;
var getSupportedType = function (fromChainId, toChainId) {
    var _a, _b, _c, _d, _e, _f;
    if (fromChainId === toChainId || !fromChainId || !toChainId)
        return;
    if ((0, exports.getSourceChannel)(fromChainId, toChainId))
        return 'channel';
    if (((_a = config_1.networks[fromChainId]) === null || _a === void 0 ? void 0 : _a.polkadot) &&
        ((_b = config_1.networks[toChainId]) === null || _b === void 0 ? void 0 : _b.polkadot) &&
        ((_d = (_c = config_1.networks[fromChainId]) === null || _c === void 0 ? void 0 : _c.polkadot) === null || _d === void 0 ? void 0 : _d.relayChain) ===
            ((_f = (_e = config_1.networks[toChainId]) === null || _e === void 0 ? void 0 : _e.polkadot) === null || _f === void 0 ? void 0 : _f.relayChain))
        return 'xcm';
    if ((0, exports.buildIbcPath)(fromChainId, toChainId)) {
        if (fromChainId === 'solana')
            return 'pfm';
        return 'multihop';
    }
    return;
};
exports.getSupportedType = getSupportedType;
var getPolkadotAddressStr = function (accountId, prefix) {
    try {
        return (0, util_crypto_1.encodeAddress)(accountId, prefix || 0);
    }
    catch (e) {
        return accountId;
    }
};
exports.getPolkadotAddressStr = getPolkadotAddressStr;
var convertCosmosAddress = function (address, newPrefix) {
    try {
        var data_1 = (0, encoding_1.fromBech32)(address).data;
        return (0, encoding_1.toBech32)(newPrefix, data_1);
    }
    catch (e) {
        throw new Error('유효하지 않은 Bech32 주소입니다.');
    }
};
exports.convertCosmosAddress = convertCosmosAddress;
var convertAddressToStr = function (address, fromChainId) {
    var _a, _b, _c;
    if (!config_1.networks[fromChainId])
        return address;
    if (address.startsWith('0x')) {
        if (['ethereum', 'solana', '2004', '2023'].some(function (v) { return v === fromChainId; })) {
            return address;
        }
        else if (((_a = config_1.networks[origin]) === null || _a === void 0 ? void 0 : _a.chainType) === 'polkadot' &&
            ((_c = (_b = config_1.networks[origin]) === null || _b === void 0 ? void 0 : _b.polkadot) === null || _c === void 0 ? void 0 : _c.ss58Format)) {
            return (0, exports.getPolkadotAddressStr)(address, Number(config_1.networks[origin].polkadot.ss58Format));
        }
        else if (config_1.networks[origin].chainType === 'cosmos' &&
            config_1.networks[origin].cosmos.bech32Config.bech32PrefixAccAddr) {
            return (0, exports.convertCosmosAddress)(address, config_1.networks[origin].cosmos.bech32Config.bech32PrefixAccAddr);
        }
        else {
            return address;
        }
    }
    return address;
};
exports.convertAddressToStr = convertAddressToStr;
var createForwardPathRecursive = function (ibcPath, index, timeout) {
    if (index === void 0) { index = 0; }
    if (timeout === void 0) { timeout = cosmos_1.TIMEOUT_IBC_MAX; }
    if (index === ibcPath.length - 1) {
        return {
            forward: {
                receiver: ibcPath[index].receiver,
                port: 'transfer',
                channel: "channel-".concat(ibcPath[index].channelId),
                timeout: timeout,
                retries: 0,
            },
        };
    }
    return {
        forward: {
            receiver: ibcPath[index].receiver,
            port: 'transfer',
            channel: "channel-".concat(ibcPath[index].channelId),
            timeout: timeout,
            retries: 0,
            next: (0, exports.createForwardPathRecursive)(ibcPath, index + 1),
        },
    };
};
exports.createForwardPathRecursive = createForwardPathRecursive;
var getChannelIdsFromMemo = function (memo) {
    var memoObj;
    try {
        memoObj = JSON.parse(memo);
    }
    catch (e) {
        return { channels: [], finalReceiver: '' };
    }
    var findInfos = function (obj) {
        if (!obj || typeof obj !== 'object')
            return { channels: [], finalReceiver: '' };
        var channels = [];
        var finalReceiver = obj.receiver;
        if (obj.channel && typeof obj.channel === 'string') {
            var channelId = obj.channel.split('-')[1];
            if (channelId)
                channels.push(Number(channelId));
        }
        if (obj.next) {
            var next = findInfos(obj.next);
            channels = channels === null || channels === void 0 ? void 0 : channels.concat(next === null || next === void 0 ? void 0 : next.channels);
            finalReceiver = next === null || next === void 0 ? void 0 : next.finalReceiver;
        }
        return { channels: channels, finalReceiver: finalReceiver };
    };
    var _a = findInfos(memoObj.forward), channels = _a.channels, finalReceiver = _a.finalReceiver;
    if (channels.length > 0) {
        return { channels: channels, finalReceiver: finalReceiver };
    }
    return { channels: [], finalReceiver: '' };
};
exports.getChannelIdsFromMemo = getChannelIdsFromMemo;
var getSourceChannel = function (fromChainId, toChainId) {
    if (config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId])
        return Object.keys(config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId]).find(function (key) { var _a; return ((_a = config_1.tokensPerChannel === null || config_1.tokensPerChannel === void 0 ? void 0 : config_1.tokensPerChannel[fromChainId][key]) === null || _a === void 0 ? void 0 : _a.chainId) === toChainId; });
};
exports.getSourceChannel = getSourceChannel;
var getXcmInfo = function (fromChainId, toChainId) {
    var _a, _b, _c;
    return (_c = (_b = (_a = config_1.networks === null || config_1.networks === void 0 ? void 0 : config_1.networks[fromChainId]) === null || _a === void 0 ? void 0 : _a.polkadot) === null || _b === void 0 ? void 0 : _b.hops) === null || _c === void 0 ? void 0 : _c[toChainId];
};
exports.getXcmInfo = getXcmInfo;
var getExplorerUrl = function (chainId, infoType, info) {
    var _a, _b;
    var explorer = (_b = (_a = config_1.networks[chainId]) === null || _a === void 0 ? void 0 : _a.explorer) === null || _b === void 0 ? void 0 : _b[0];
    if (!explorer || !['tx', 'address'].includes(infoType)) {
        return '';
    }
    switch (explorer.type) {
        case 'mintscan':
        case 'solscan':
        case 'etherscan':
            return "".concat(explorer.url, "/").concat(infoType, "/").concat(info);
        case 'pingPub':
            return "".concat(explorer.url, "/").concat(infoType === 'tx' ? 'tx' : 'account', "/").concat(info);
        case 'subscan':
            return "".concat(explorer.url, "/").concat(infoType === 'tx' ? 'extrinsic' : 'account', "/").concat(info);
        default:
            return '';
    }
};
exports.getExplorerUrl = getExplorerUrl;
var getPolkadotAddressNetwork = function (accountId) {
    var _a;
    try {
        return (((_a = Object.values(config_1.networks).find(function (v) {
            var _a;
            var encoded = (0, util_crypto_1.encodeAddress)((0, util_crypto_1.decodeAddress)(accountId), (_a = v.polkadot) === null || _a === void 0 ? void 0 : _a.ss58Format);
            if (encoded === accountId)
                return v.chainId;
        })) === null || _a === void 0 ? void 0 : _a.chainId) || '');
    }
    catch (e) {
        return '';
    }
};
exports.getPolkadotAddressNetwork = getPolkadotAddressNetwork;
var getCosmosAddressNetwork = function (accountId) {
    var found = '';
    try {
        var decoded_1 = bech32_1.bech32.decode(accountId);
        Object.values(config_1.keplrChains).forEach(function (v) {
            if (v.bech32Config.bech32PrefixAccAddr === decoded_1.prefix)
                found = v.chainId;
        });
        return found;
    }
    catch (e) {
        return found;
    }
};
exports.getCosmosAddressNetwork = getCosmosAddressNetwork;
var getSolanaAddressNetwork = function (accountId) {
    try {
        (0, solana_1.getPublicKey)(accountId);
        return 'solana';
    }
    catch (e) {
        return '';
    }
};
exports.getSolanaAddressNetwork = getSolanaAddressNetwork;
var getEthereumAddressNetwork = function (accountId) {
    if (accountId.startsWith('0x')) {
        return 'ethereum';
    }
    return '';
};
exports.getEthereumAddressNetwork = getEthereumAddressNetwork;
var getNetworkFromAddress = function (address) {
    var ethereumNetwork = (0, exports.getEthereumAddressNetwork)(address);
    var cosmosNetwork = (0, exports.getCosmosAddressNetwork)(address);
    var solanaNetwork = (0, exports.getSolanaAddressNetwork)(address);
    var polkadotNetwork = (0, exports.getPolkadotAddressNetwork)(address);
    return (ethereumNetwork || cosmosNetwork || solanaNetwork || polkadotNetwork || '');
};
exports.getNetworkFromAddress = getNetworkFromAddress;


/***/ }),

/***/ 148:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TIMEOUT_IBC_MAX = exports.TX_MSG = void 0;
exports.TX_MSG = '/ibc.applications.transfer.v1.MsgTransfer';
exports.TIMEOUT_IBC_MAX = 6000000000000;


/***/ }),

/***/ 2137:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.broadcastTx = exports.getSecretClient = exports.getCosmosBlockHeight = exports.getCosmosClient = exports.getSigner = exports.getCosmosTimeoutTimestamp = exports.generateTransferMsg = exports.Tendermint34Client = exports.setupIbcExtension = exports.QueryClient = exports.SigningStargateClient = void 0;
var stargate_1 = __webpack_require__(1069);
Object.defineProperty(exports, "SigningStargateClient", ({ enumerable: true, get: function () { return stargate_1.SigningStargateClient; } }));
var tendermint_rpc_1 = __webpack_require__(4706);
Object.defineProperty(exports, "Tendermint34Client", ({ enumerable: true, get: function () { return tendermint_rpc_1.Tendermint34Client; } }));
var stargate_2 = __webpack_require__(1069);
Object.defineProperty(exports, "QueryClient", ({ enumerable: true, get: function () { return stargate_2.QueryClient; } }));
Object.defineProperty(exports, "setupIbcExtension", ({ enumerable: true, get: function () { return stargate_2.setupIbcExtension; } }));
var secretjs_1 = __webpack_require__(7303);
var config_1 = __webpack_require__(6288);
var sdk_ts_1 = __webpack_require__(5204);
var generateTransferMsg = function (txMsg, channel, sourceAddress, destAddress, amount, assetId, memo, timeout) {
    var msg = {
        typeUrl: txMsg,
        value: {
            sourcePort: 'transfer',
            sourceChannel: "channel-".concat(channel),
            token: {
                denom: assetId,
                amount: amount,
            },
            sender: sourceAddress,
            receiver: destAddress,
            memo: memo,
            timeoutTimestamp: timeout,
        },
    };
    return msg;
};
exports.generateTransferMsg = generateTransferMsg;
var getCosmosTimeoutTimestamp = function (seconds) {
    return new Date().getTime() * 1000000 + seconds * 1000 * 1000000;
};
exports.getCosmosTimeoutTimestamp = getCosmosTimeoutTimestamp;
var getSigner = function (chainId, keplr, supportLedger) {
    if (supportLedger === void 0) { supportLedger = true; }
    return supportLedger
        ? keplr.getOfflineSignerOnlyAmino(chainId)
        : keplr.getOfflineSigner(chainId);
};
exports.getSigner = getSigner;
var getCosmosClient = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var signer, finalClient;
    var chainId = _b.chainId, rpc = _b.rpc, keplr = _b.keplr, feeAssetId = _b.feeAssetId, gasPrice = _b.gasPrice, _c = _b.supportLedger, supportLedger = _c === void 0 ? true : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                signer = (0, exports.getSigner)(chainId, keplr, supportLedger);
                return [4, stargate_1.SigningStargateClient.connectWithSigner(rpc, signer, {
                        gasPrice: stargate_1.GasPrice.fromString("".concat(gasPrice).concat(feeAssetId)),
                    })];
            case 1:
                finalClient = _d.sent();
                return [2, finalClient];
        }
    });
}); };
exports.getCosmosClient = getCosmosClient;
var getCosmosBlockHeight = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var _c;
    var client = _b.client, _d = _b.extra, extra = _d === void 0 ? 100 : _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _c = Number;
                return [4, client.getHeight()];
            case 1: return [2, _c.apply(void 0, [_e.sent()]) + extra];
        }
    });
}); };
exports.getCosmosBlockHeight = getCosmosBlockHeight;
var getSecretClient = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var secretChainId;
    var keplr = _b.keplr, signer = _b.signer, address = _b.address;
    return __generator(this, function (_c) {
        secretChainId = 'secret-4';
        if (!keplr) {
            console.error('keplr provider is required');
            return [2];
        }
        return [2, new secretjs_1.SecretNetworkClient({
                chainId: secretChainId,
                url: config_1.networks[secretChainId].rest || '',
                wallet: signer,
                walletAddress: address,
                encryptionUtils: keplr.getEnigmaUtils(secretChainId),
            })];
    });
}); };
exports.getSecretClient = getSecretClient;
var broadcastTx = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var result;
    var chainId = _b.chainId, txRaw = _b.txRaw, keplr = _b.keplr;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, (keplr === null || keplr === void 0 ? void 0 : keplr.sendTx(chainId, sdk_ts_1.CosmosTxV1Beta1Tx.TxRaw.encode(txRaw).finish(), 'sync'))];
            case 1:
                result = _c.sent();
                if (result && (result === null || result === void 0 ? void 0 : result.length) !== 0)
                    return [2];
                return [2, Buffer.from(result).toString('hex')];
        }
    });
}); };
exports.broadcastTx = broadcastTx;


/***/ }),

/***/ 2693:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5847), exports);
__exportStar(__webpack_require__(148), exports);
__exportStar(__webpack_require__(2137), exports);
__exportStar(__webpack_require__(16), exports);


/***/ }),

/***/ 5847:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.injectiveTransfer = exports.secretTransfer = exports.cosmosTransfer = void 0;
var constants_1 = __webpack_require__(148);
var helper_1 = __webpack_require__(2137);
var secretjs_1 = __webpack_require__(7303);
var helper_2 = __webpack_require__(2137);
var config_1 = __webpack_require__(6288);
var sdk_ts_1 = __webpack_require__(5204);
var utils_1 = __webpack_require__(4459);
var cosmosTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var client, msg, refinedFee, injectiveResponse, generalResponse, ex_1;
    var sourceChannel = _b.sourceChannel, sourceAddress = _b.sourceAddress, destAddress = _b.destAddress, amount = _b.amount, assetId = _b.assetId, fee = _b.fee, chainId = _b.chainId, rpc = _b.rpc, memo = _b.memo, timeout = _b.timeout, _c = _b.txMsg, txMsg = _c === void 0 ? constants_1.TX_MSG : _c, keplr = _b.keplr, gasPrice = _b.gasPrice, gas = _b.gas, feeAssetId = _b.feeAssetId;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4, (0, helper_1.getCosmosClient)({
                    chainId: chainId,
                    rpc: rpc,
                    keplr: keplr,
                    supportLedger: !memo,
                    feeAssetId: feeAssetId,
                    gasPrice: gasPrice,
                })];
            case 1:
                client = _d.sent();
                msg = (0, helper_1.generateTransferMsg)(txMsg, sourceChannel, sourceAddress, destAddress, amount, assetId, memo, timeout);
                if (keplr) {
                    keplr.defaultOptions = {
                        sign: {
                            preferNoSetFee: fee !== 'auto',
                        },
                    };
                }
                refinedFee = fee === 'auto'
                    ? 'auto'
                    : {
                        amount: [
                            {
                                amount: fee,
                                denom: feeAssetId,
                            },
                        ],
                        gas: gas,
                    };
                _d.label = 2;
            case 2:
                _d.trys.push([2, 6, , 7]);
                if (!(chainId === 'injective-1')) return [3, 4];
                return [4, (0, exports.injectiveTransfer)({
                        generatedMsg: msg,
                        keplr: keplr,
                    })];
            case 3:
                injectiveResponse = _d.sent();
                return [2, injectiveResponse.txHash];
            case 4: return [4, client.signAndBroadcast(sourceAddress, [msg], refinedFee)];
            case 5:
                generalResponse = _d.sent();
                return [2, generalResponse.transactionHash];
            case 6:
                ex_1 = _d.sent();
                console.error(ex_1, 'cosmosError');
                return [3, 7];
            case 7: return [2];
        }
    });
}); };
exports.cosmosTransfer = cosmosTransfer;
var secretTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var refinedSecretAssetId, signer, client, rawLog, txHash, generalResponse, ex_2;
    var amount = _b.amount, secretAssetId = _b.secretAssetId, keplr = _b.keplr, sourceAddress = _b.sourceAddress, destAddress = _b.destAddress, sourceChannel = _b.sourceChannel, codeHash = _b.codeHash;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                refinedSecretAssetId = secretAssetId.split(':')[1];
                signer = (0, helper_1.getSigner)('secret-4', keplr);
                return [4, (0, helper_2.getSecretClient)({
                        keplr: keplr,
                        signer: signer,
                        address: sourceAddress,
                    })];
            case 1:
                client = _c.sent();
                _c.label = 2;
            case 2:
                _c.trys.push([2, 4, , 5]);
                return [4, client.tx.compute.executeContract({
                        contract_address: refinedSecretAssetId,
                        code_hash: codeHash,
                        sender: sourceAddress,
                        msg: {
                            send: {
                                recipient: 'secret1tqmms5awftpuhalcv5h5mg76fa0tkdz4jv9ex4',
                                recipient_code_hash: 'f85b413b547b9460162958bafd51113ac266dac96a84c33b9150f68f045f2641',
                                amount: amount,
                                msg: (0, secretjs_1.toBase64)((0, secretjs_1.toUtf8)(JSON.stringify({
                                    channel: "channel-".concat(sourceChannel),
                                    remote_address: destAddress,
                                    timeout: 30 * 60,
                                }))),
                            },
                        },
                    }, {
                        gasLimit: 300000,
                        gasPriceInFeeDenom: 0.1,
                        feeDenom: 'uscrt',
                        feeGranter: '',
                        ibcTxsOptions: {
                            resolveResponses: true,
                            resolveResponsesCheckIntervalMs: 10000,
                            resolveResponsesTimeoutMs: 12 * 60 * 1000,
                        },
                    })];
            case 3:
                generalResponse = _c.sent();
                rawLog = generalResponse.rawLog;
                txHash = generalResponse.transactionHash;
                return [2, txHash];
            case 4:
                ex_2 = _c.sent();
                console.error(ex_2, 'secretError');
                return [3, 5];
            case 5: return [2];
        }
    });
}); };
exports.secretTransfer = secretTransfer;
var injectiveTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var chainId, restEndpoint, chainRestAuthApi, accountDetailsResponse, baseAccount, chainRestTendermintApi, latestBlock, latestHeight, timeoutHeight, msg, pubKeyResult, pubKey, signDoc, signer, result, txRaw, txHash, response;
    var _c;
    var generatedMsg = _b.generatedMsg, keplr = _b.keplr;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                chainId = 'injective-1';
                restEndpoint = config_1.networks[chainId].rest;
                chainRestAuthApi = new sdk_ts_1.ChainRestAuthApi(restEndpoint);
                return [4, chainRestAuthApi.fetchAccount(generatedMsg.value.sender)];
            case 1:
                accountDetailsResponse = _d.sent();
                baseAccount = sdk_ts_1.BaseAccount.fromRestApi(accountDetailsResponse);
                chainRestTendermintApi = new sdk_ts_1.ChainRestTendermintApi(restEndpoint);
                return [4, chainRestTendermintApi.fetchLatestBlock()];
            case 2:
                latestBlock = _d.sent();
                latestHeight = latestBlock.header.height;
                timeoutHeight = Number(latestHeight) + utils_1.DEFAULT_BLOCK_TIMEOUT_HEIGHT;
                msg = sdk_ts_1.MsgTransfer.fromJSON({
                    port: generatedMsg.value.sourcePort,
                    channelId: generatedMsg.value.sourceChannel,
                    timeout: generatedMsg.value.timeoutTimestamp,
                    memo: generatedMsg.value.memo,
                    height: {
                        revisionNumber: 0,
                        revisionHeight: 0,
                    },
                    amount: {
                        amount: generatedMsg.value.token.amount,
                        denom: generatedMsg.value.token.denom,
                    },
                    sender: generatedMsg.value.sender,
                    receiver: generatedMsg.value.receiver,
                });
                return [4, (keplr === null || keplr === void 0 ? void 0 : keplr.getKey(chainId))];
            case 3:
                pubKeyResult = (_c = (_d.sent())) === null || _c === void 0 ? void 0 : _c.pubKey;
                pubKey = Buffer.from(pubKeyResult).toString('base64');
                signDoc = (0, sdk_ts_1.createTransaction)({
                    pubKey: pubKey,
                    chainId: chainId,
                    fee: utils_1.DEFAULT_STD_FEE,
                    message: msg,
                    sequence: baseAccount.sequence,
                    timeoutHeight: timeoutHeight,
                    accountNumber: baseAccount.accountNumber,
                }).signDoc;
                signer = keplr.getOfflineSigner(chainId);
                return [4, (signer === null || signer === void 0 ? void 0 : signer.signDirect(generatedMsg.value.sender, signDoc))];
            case 4:
                result = _d.sent();
                if (!result) return [3, 7];
                txRaw = (0, sdk_ts_1.getTxRawFromTxRawOrDirectSignResponse)(result);
                return [4, (0, helper_1.broadcastTx)({ chainId: chainId, txRaw: txRaw, keplr: keplr })];
            case 5:
                txHash = _d.sent();
                console.log('injectiveHash:', txHash);
                if (!txHash) return [3, 7];
                return [4, new sdk_ts_1.TxRestClient(restEndpoint).fetchTxPoll(txHash)];
            case 6:
                response = _d.sent();
                console.log('injectiveResponse:', response);
                return [2, response];
            case 7: return [2];
        }
    });
}); };
exports.injectiveTransfer = injectiveTransfer;


/***/ }),

/***/ 16:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4129:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.erc20ABI = exports.ics20BankABI = exports.ics20TransferBankABI = void 0;
var ics20TransferBankABI_json_1 = __webpack_require__(7758);
Object.defineProperty(exports, "ics20TransferBankABI", ({ enumerable: true, get: function () { return __importDefault(ics20TransferBankABI_json_1).default; } }));
var ics20BankABI_json_1 = __webpack_require__(2799);
Object.defineProperty(exports, "ics20BankABI", ({ enumerable: true, get: function () { return __importDefault(ics20BankABI_json_1).default; } }));
var erc20ABI_json_1 = __webpack_require__(9022);
Object.defineProperty(exports, "erc20ABI", ({ enumerable: true, get: function () { return __importDefault(erc20ABI_json_1).default; } }));
__exportStar(__webpack_require__(4435), exports);


/***/ }),

/***/ 4435:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 9721:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MAINNET_FEE = exports.TESTNET_FEE = exports.ERC_20_PICA = exports.EthIbcChannel = exports.ETH_MODE = exports.ibcCoreAddress = exports.bankTransferContractAddress = exports.bankContractAddress = exports.ethereum = void 0;
exports.ethereum = typeof window !== 'undefined' ? window.ethereum : undefined;
exports.bankContractAddress = '0x5933fde9fa60d4f1c0124aa7a7a988f46ba42d78';
exports.bankTransferContractAddress = '0x148acd3cd4d6a17cd2abbecd0745b09b62c64f84';
exports.ibcCoreAddress = '0xd856f0f9efa054896fe3596e05978bbe686de131';
exports.ETH_MODE = 'mainnet';
exports.EthIbcChannel = {
    eth: '2',
    centauri: '52',
    cosmos: '3370',
};
exports.ERC_20_PICA = "transfer/channel-".concat(exports.EthIbcChannel.eth, "/ppica");
exports.TESTNET_FEE = '1000000000000000';
exports.MAINNET_FEE = '6000000000000000';


/***/ }),

/***/ 6882:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getErc20Balance = exports.simulate = exports.getApprovedErc20 = exports.getErc20Contract = exports.isEthereumAddress = exports.getEthSimulate = exports.getTransactionReceipt = exports.getEthGasAmount = exports.getGasPrice = exports.getBlock = exports.getConsole = exports.getBankContract = exports.getBankTransferContract = exports.getContract = exports.getWeb3 = void 0;
var big_js_1 = __importDefault(__webpack_require__(875));
var web3_1 = __importDefault(__webpack_require__(6019));
var abi_1 = __webpack_require__(4129);
var constants_1 = __webpack_require__(9721);
var config_1 = __webpack_require__(6288);
var getWeb3 = function (provider) {
    var injectedProvider = provider !== null && provider !== void 0 ? provider : new web3_1.default.providers.HttpProvider(config_1.networks['ethereum'].rpc);
    return new web3_1.default(injectedProvider);
};
exports.getWeb3 = getWeb3;
var getContract = function (web3, abi, contractAddress) {
    return web3 && contractAddress
        ? new web3.eth.Contract(abi, contractAddress)
        : undefined;
};
exports.getContract = getContract;
var getBankTransferContract = function (web3) {
    return (0, exports.getContract)(web3, abi_1.ics20TransferBankABI, constants_1.bankTransferContractAddress);
};
exports.getBankTransferContract = getBankTransferContract;
var getBankContract = function (web3) {
    return (0, exports.getContract)(web3, abi_1.ics20BankABI, constants_1.bankContractAddress);
};
exports.getBankContract = getBankContract;
var getConsole = function (msg) {
    console.log(msg);
};
exports.getConsole = getConsole;
var getBlock = function (web3_2) {
    var args_1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args_1[_i - 1] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([web3_2], __read(args_1), false), void 0, function (web3, addedAmount) {
        if (addedAmount === void 0) { addedAmount = 10000; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!web3)
                        return [2, '0'];
                    return [4, web3.eth.getBlockNumber()];
                case 1: return [2, (_a.sent()) + addedAmount];
            }
        });
    });
};
exports.getBlock = getBlock;
var getGasPrice = function (web3) { return __awaiter(void 0, void 0, void 0, function () {
    var gasPrice;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!web3)
                    return [2, '0'];
                return [4, web3.eth.getGasPrice()];
            case 1:
                gasPrice = _a.sent();
                return [2, new big_js_1.default(gasPrice || 0).mul(1.3).toFixed(0)];
        }
    });
}); };
exports.getGasPrice = getGasPrice;
var getEthGasAmount = function (web3, txConfig) { return __awaiter(void 0, void 0, void 0, function () {
    var gasAmount, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!web3)
                    return [2, '0'];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4, web3.eth.estimateGas(txConfig)];
            case 2:
                gasAmount = _a.sent();
                return [2, gasAmount];
            case 3:
                err_1 = _a.sent();
                return [2, '0'];
            case 4: return [2];
        }
    });
}); };
exports.getEthGasAmount = getEthGasAmount;
var getTransactionReceipt = function (web3, txHash) { return __awaiter(void 0, void 0, void 0, function () {
    var receipt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!web3)
                    return [2, null];
                return [4, web3.eth.getTransactionReceipt(txHash)];
            case 1:
                receipt = _a.sent();
                return [2, receipt];
        }
    });
}); };
exports.getTransactionReceipt = getTransactionReceipt;
var getEthSimulate = function (web3, data, txObject) {
    web3.eth
        .call(__assign(__assign({}, txObject), { data: data }))
        .then(function (result) { return console.log(result, 'simulatedresult'); })
        .catch(function (err) { return console.error(err, 'simulated??'); });
};
exports.getEthSimulate = getEthSimulate;
var isEthereumAddress = function (web3, account) {
    if (!web3)
        return false;
    return web3.utils.isAddress(account);
};
exports.isEthereumAddress = isEthereumAddress;
var getErc20Contract = function (web3, erc20TokenAddress) {
    return (0, exports.getContract)(web3, abi_1.erc20ABI, erc20TokenAddress);
};
exports.getErc20Contract = getErc20Contract;
var getApprovedErc20 = function (web3_2, account_1, erc20TokenAddress_1) {
    var args_1 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args_1[_i - 3] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([web3_2, account_1, erc20TokenAddress_1], __read(args_1), false), void 0, function (web3, account, erc20TokenAddress, spenderContract) {
        var erc20Contract;
        if (spenderContract === void 0) { spenderContract = constants_1.bankContractAddress; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(0, exports.isEthereumAddress)(web3, account))
                        return [2, '0'];
                    erc20Contract = (0, exports.getErc20Contract)(web3, erc20TokenAddress);
                    if (!erc20Contract)
                        return [2, '0'];
                    return [4, erc20Contract.methods.allowance(account, spenderContract).call()];
                case 1: return [2, _a.sent()];
            }
        });
    });
};
exports.getApprovedErc20 = getApprovedErc20;
var simulate = function (web3, data, txObject) {
    web3 === null || web3 === void 0 ? void 0 : web3.eth.call(__assign(__assign({}, txObject), { data: data })).then(function (result) { return console.log(result, 'simulatedresult'); }).catch(function (err) { return console.error(err, 'simulated??'); });
};
exports.simulate = simulate;
var getErc20Balance = function (web3, account, erc20TokenAddress) { return __awaiter(void 0, void 0, void 0, function () {
    var isEthereum, erc20Contract;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                isEthereum = (0, exports.isEthereumAddress)(web3, account);
                if (!isEthereum)
                    return [2, '0'];
                erc20Contract = (0, exports.getErc20Contract)(web3, erc20TokenAddress);
                if (!erc20Contract)
                    return [2, '0'];
                return [4, erc20Contract.methods.balanceOf(account).call()];
            case 1: return [2, _a.sent()];
        }
    });
}); };
exports.getErc20Balance = getErc20Balance;


/***/ }),

/***/ 3500:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6470), exports);
__exportStar(__webpack_require__(9721), exports);
__exportStar(__webpack_require__(6882), exports);
__exportStar(__webpack_require__(4129), exports);


/***/ }),

/***/ 6470:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.approveErc20 = exports.ethereumTransfer = void 0;
var big_js_1 = __importDefault(__webpack_require__(875));
var constants_1 = __webpack_require__(9721);
var helper_1 = __webpack_require__(6882);
var ethereumTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var transferContract, timeoutBlock, gasPrice, rawDataErc20, rawDataEth, isETH, rawData, encodedData, txObject, gas;
    var web3 = _b.web3, amount = _b.amount, assetId = _b.assetId, originAddress = _b.originAddress, destinationAddress = _b.destinationAddress, channel = _b.channel, minimalDenom = _b.minimalDenom, _c = _b.memo, memo = _c === void 0 ? '' : _c, timeout = _b.timeout;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                transferContract = (0, helper_1.getBankTransferContract)(web3);
                return [4, (0, helper_1.getBlock)(web3)];
            case 1:
                timeoutBlock = _d.sent();
                return [4, (0, helper_1.getGasPrice)(web3)];
            case 2:
                gasPrice = _d.sent();
                rawDataErc20 = transferContract.methods.sendTransfer(minimalDenom, amount, destinationAddress, 'transfer', "channel-".concat(channel), timeoutBlock, timeout, memo);
                rawDataEth = transferContract.methods.sendTransferNativeToken(destinationAddress, 'transfer', "channel-".concat(channel), timeoutBlock, timeout.toString(), memo);
                isETH = assetId === 'ETH';
                rawData = isETH ? rawDataEth : rawDataErc20;
                encodedData = rawData.encodeABI();
                txObject = {
                    to: constants_1.bankTransferContractAddress,
                    data: encodedData,
                    from: originAddress,
                    value: isETH
                        ? new big_js_1.default(amount || 0).plus(constants_1.MAINNET_FEE).toFixed()
                        : constants_1.MAINNET_FEE,
                    gasPrice: gasPrice,
                };
                return [4, (0, helper_1.getEthGasAmount)(web3, txObject)];
            case 3:
                gas = _d.sent();
                (0, helper_1.getEthSimulate)(web3, encodedData, txObject);
                return [2, rawData === null || rawData === void 0 ? void 0 : rawData.send(__assign(__assign({}, txObject), { gas: gas }))];
        }
    });
}); };
exports.ethereumTransfer = ethereumTransfer;
var approveErc20 = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var erc20Contract, tokenApprove, gasPrice, txObject, gas;
    var web3 = _b.web3, account = _b.account, amount = _b.amount, erc20TokenAddress = _b.erc20TokenAddress, _c = _b.spenderContract, spenderContract = _c === void 0 ? constants_1.bankContractAddress : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                erc20Contract = (0, helper_1.getErc20Contract)(web3, erc20TokenAddress);
                if (!erc20Contract)
                    return [2];
                tokenApprove = erc20Contract.methods.approve(spenderContract, amount);
                return [4, web3.eth.getGasPrice()];
            case 1:
                gasPrice = _d.sent();
                txObject = {
                    from: account,
                    to: erc20TokenAddress,
                    data: tokenApprove.encodeABI(),
                    gasPrice: gasPrice,
                };
                return [4, (0, helper_1.getEthGasAmount)(web3, txObject)];
            case 2:
                gas = _d.sent();
                return [2, tokenApprove.send({ from: account })];
        }
    });
}); };
exports.approveErc20 = approveErc20;


/***/ }),

/***/ 6720:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(516), exports);
__exportStar(__webpack_require__(2693), exports);
__exportStar(__webpack_require__(3500), exports);
__exportStar(__webpack_require__(2089), exports);


/***/ }),

/***/ 4504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.solana = exports.solanaIbcProgramId = exports.solanaPortId = void 0;
var web3_js_1 = __webpack_require__(5783);
exports.solanaPortId = 'transfer';
exports.solanaIbcProgramId = new web3_js_1.PublicKey('2HLLVco5HvwWriNbUhmVwA2pCetRkpgrqwnjcsZdyTKT');
exports.solana = typeof window !== 'undefined' ? window.solana : undefined;


/***/ }),

/***/ 4789:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.instructionSchema = exports.msgTransferSchema = exports.getSolanaGuestChainAccounts = exports.getSolanaTracePath = exports.getLatestBlockhash = exports.getSolanaAsset = exports.getBaseDenomFromTracePath = exports.getTokenMint = exports.isNativeSolanaAsset = exports.getPublicKey = exports.getConnection = exports.PublicKey = exports.Keypair = void 0;
exports.hexToBytes = hexToBytes;
exports.numberTo32ByteBuffer = numberTo32ByteBuffer;
var anchor = __importStar(__webpack_require__(7609));
var spl = __importStar(__webpack_require__(4814));
var web3_js_1 = __webpack_require__(5783);
var axios_1 = __importDefault(__webpack_require__(2742));
var borsher_1 = __webpack_require__(7582);
var js_sha256_1 = __webpack_require__(1312);
var constants_1 = __webpack_require__(4504);
var web3_js_2 = __webpack_require__(5783);
Object.defineProperty(exports, "Keypair", ({ enumerable: true, get: function () { return web3_js_2.Keypair; } }));
Object.defineProperty(exports, "PublicKey", ({ enumerable: true, get: function () { return web3_js_2.PublicKey; } }));
var getConnection = function (endpoint) {
    return new web3_js_1.Connection(endpoint, 'finalized');
};
exports.getConnection = getConnection;
var getPublicKey = function (address) {
    return new web3_js_1.PublicKey(address);
};
exports.getPublicKey = getPublicKey;
var isNativeSolanaAsset = function (minimalDenom) {
    return !minimalDenom.includes('channel');
};
exports.isNativeSolanaAsset = isNativeSolanaAsset;
function hexToBytes(hex) {
    var bytes = [];
    for (var c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}
var getTokenMint = function (hashedDenom) {
    var _a = __read(anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('mint'), Buffer.from(hashedDenom)], constants_1.solanaIbcProgramId), 2), tokenMintPDA = _a[0], tokenMintBump = _a[1];
    return tokenMintPDA.toString();
};
exports.getTokenMint = getTokenMint;
var getBaseDenomFromTracePath = function (denom) {
    var parts = denom.split('/');
    return denom.split('/')[parts.length - 1];
};
exports.getBaseDenomFromTracePath = getBaseDenomFromTracePath;
var getSolanaAsset = function (assetId, minimalDenom, isNative) {
    if (assetId === 'SOL')
        return {
            denom: spl.NATIVE_MINT.toString(),
            baseDenom: spl.NATIVE_MINT.toString(),
            assetId: assetId,
            hashedDenom: hexToBytes((0, js_sha256_1.sha256)(spl.NATIVE_MINT.toString())),
        };
    var hashedDenom = hexToBytes((0, js_sha256_1.sha256)(minimalDenom));
    if (!isNative)
        return {
            denom: minimalDenom,
            baseDenom: (0, exports.getBaseDenomFromTracePath)(minimalDenom),
            assetId: assetId,
            hashedDenom: hashedDenom,
        };
    return {
        denom: assetId,
        baseDenom: assetId,
        assetId: assetId,
        hashedDenom: hexToBytes((0, js_sha256_1.sha256)(assetId)),
    };
};
exports.getSolanaAsset = getSolanaAsset;
var getLatestBlockhash = function (endpoint) { return __awaiter(void 0, void 0, void 0, function () {
    var data, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                data = {
                    id: 1,
                    jsonrpc: '2.0',
                    method: 'getLatestBlockhash',
                };
                return [4, axios_1.default.post(endpoint, data, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [2, response.data.result.value.blockhash || ''];
        }
    });
}); };
exports.getLatestBlockhash = getLatestBlockhash;
var getSolanaTracePath = function (denom, isNative) {
    if (isNative)
        return [];
    var parts = denom.split('/').slice(0, -1);
    return parts
        .reduce(function (acc, part, index, array) {
        if (index % 2 === 0 && index < array.length - 1) {
            acc.push({ port_id: part, channel_id: array[index + 1] });
        }
        return acc;
    }, [])
        .reverse();
};
exports.getSolanaTracePath = getSolanaTracePath;
var getSolanaGuestChainAccounts = function (portId, channelId, hashedDenom) {
    var _a = __read(anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('chain')], constants_1.solanaIbcProgramId), 2), guestChainPDA = _a[0], guestChainBump = _a[1];
    var _b = __read(anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('trie')], constants_1.solanaIbcProgramId), 2), triePDA = _b[0], trieBump = _b[1];
    var _c = __read(anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('mint_escrow')], constants_1.solanaIbcProgramId), 2), mintAuthorityPDA = _c[0], mintAuthorityBump = _c[1];
    var _d = __read(anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('private')], constants_1.solanaIbcProgramId), 2), ibcStoragePDA = _d[0], ibcStorageBump = _d[1];
    var _e = __read(anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('escrow'), Buffer.from(hashedDenom)], constants_1.solanaIbcProgramId), 2), escrowAccountPDA = _e[0], escrowAccountBump = _e[1];
    var _f = __read(anchor.web3.PublicKey.findProgramAddressSync([Buffer.from('fee')], constants_1.solanaIbcProgramId), 2), feePDA = _f[0], feeBump = _f[1];
    return {
        guestChainPDA: guestChainPDA,
        triePDA: triePDA,
        ibcStoragePDA: ibcStoragePDA,
        mintAuthorityPDA: mintAuthorityPDA,
        escrowAccountPDA: escrowAccountPDA,
        feePDA: feePDA,
    };
};
exports.getSolanaGuestChainAccounts = getSolanaGuestChainAccounts;
function numberTo32ByteBuffer(num) {
    var buffer = Buffer.alloc(32);
    var numberHex = num.toString(16);
    if (numberHex.length % 2 !== 0) {
        numberHex = '0' + numberHex;
    }
    var numberBytes = Buffer.from(numberHex, 'hex');
    numberBytes.copy(buffer, 32 - numberBytes.length);
    var uintBuffer = new Uint8Array(buffer);
    var uintBufferChunks = [];
    for (var i = 0; i < uintBuffer.length; i += 8) {
        uintBufferChunks.push(uintBuffer.slice(i, i + 8));
    }
    var final_uintBuffer = [];
    final_uintBuffer = final_uintBuffer.concat.apply(final_uintBuffer, __spreadArray([], __read(uintBufferChunks[3]), false));
    final_uintBuffer = final_uintBuffer.concat.apply(final_uintBuffer, __spreadArray([], __read(uintBufferChunks[2]), false));
    final_uintBuffer = final_uintBuffer.concat.apply(final_uintBuffer, __spreadArray([], __read(uintBufferChunks[1]), false));
    final_uintBuffer = final_uintBuffer.concat.apply(final_uintBuffer, __spreadArray([], __read(uintBufferChunks[0]), false));
    return new Uint8Array(final_uintBuffer);
}
var tracePathSchema = borsher_1.BorshSchema.Vec(borsher_1.BorshSchema.Struct({
    port_id: borsher_1.BorshSchema.String,
    channel_id: borsher_1.BorshSchema.String,
}));
var packetDataSchema = borsher_1.BorshSchema.Struct({
    token: borsher_1.BorshSchema.Struct({
        denom: borsher_1.BorshSchema.Struct({
            trace_path: tracePathSchema,
            base_denom: borsher_1.BorshSchema.String,
        }),
        amount: borsher_1.BorshSchema.Array(borsher_1.BorshSchema.u8, 32),
    }),
    sender: borsher_1.BorshSchema.String,
    receiver: borsher_1.BorshSchema.String,
    memo: borsher_1.BorshSchema.String,
});
var timeoutHeightSchema = borsher_1.BorshSchema.Enum({
    Never: borsher_1.BorshSchema.Unit,
    At: borsher_1.BorshSchema.Struct({
        revision_number: borsher_1.BorshSchema.u64,
        revision_height: borsher_1.BorshSchema.u64,
    }),
});
var timeoutTimestampSchema = borsher_1.BorshSchema.Struct({
    time: borsher_1.BorshSchema.u64,
});
exports.msgTransferSchema = borsher_1.BorshSchema.Struct({
    port_id_on_a: borsher_1.BorshSchema.String,
    chan_id_on_a: borsher_1.BorshSchema.String,
    packet_data: packetDataSchema,
    timeout_height_on_b: timeoutHeightSchema,
    timeout_timestamp_on_b: timeoutTimestampSchema,
});
exports.instructionSchema = borsher_1.BorshSchema.Struct({
    discriminator: borsher_1.BorshSchema.Array(borsher_1.BorshSchema.u8, 8),
    hashed_base_denom: borsher_1.BorshSchema.Array(borsher_1.BorshSchema.u8, 32),
    msg: exports.msgTransferSchema,
});


/***/ }),

/***/ 2089:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(7851), exports);
__exportStar(__webpack_require__(4504), exports);
__exportStar(__webpack_require__(4789), exports);


/***/ }),

/***/ 7851:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.solanaTransfer = void 0;
var anchor = __importStar(__webpack_require__(7609));
var spl = __importStar(__webpack_require__(4814));
var web3_js_1 = __webpack_require__(5783);
var borsher_1 = __webpack_require__(7582);
var utils_1 = __webpack_require__(8417);
var constants_1 = __webpack_require__(4504);
var helper_1 = __webpack_require__(4789);
var solanaTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var isNative, _c, denom, baseDenom, assetId, hashedDenom, senderPublicKey, associatedToken, tx, connection, tokenInfo, isWSOL, finalAmount, assetPubkeyAddress, refinedSourceChannel, senderTokenAccount, msgTransferPayload, instructionPayload, buffer, _d, guestChainPDA, triePDA, ibcStoragePDA, mintAuthorityPDA, escrowAccountPDA, feePDA, instruction;
    var quantity = _b.quantity, accountId = _b.accountId, destinationAddress = _b.destinationAddress, configAssetId = _b.configAssetId, sourceChannelId = _b.sourceChannelId, configDenom = _b.configDenom, endpoint = _b.endpoint, timeout = _b.timeout, _e = _b.memo, memo = _e === void 0 ? '' : _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                console.log({
                    quantity: quantity,
                    accountId: accountId,
                    destinationAddress: destinationAddress,
                    configAssetId: configAssetId,
                    sourceChannelId: sourceChannelId,
                    configDenom: configDenom,
                    endpoint: endpoint,
                    timeout: timeout,
                    memo: memo,
                }, 'checkArguments:solanaTransfer');
                isNative = (0, helper_1.isNativeSolanaAsset)(configDenom);
                _c = (0, helper_1.getSolanaAsset)(configAssetId, configDenom, isNative), denom = _c.denom, baseDenom = _c.baseDenom, assetId = _c.assetId, hashedDenom = _c.hashedDenom;
                console.log({ denom: denom, baseDenom: baseDenom, assetId: assetId, hashedDenom: hashedDenom }, 'checkSolanaAsset');
                senderPublicKey = new anchor.web3.PublicKey(accountId);
                associatedToken = spl.getAssociatedTokenAddressSync(spl.NATIVE_MINT, senderPublicKey);
                tx = new anchor.web3.Transaction();
                connection = (0, helper_1.getConnection)(endpoint);
                if (!(assetId === 'SOL' && connection)) return [3, 2];
                return [4, connection.getParsedTokenAccountsByOwner(senderPublicKey, {
                        programId: spl.TOKEN_PROGRAM_ID,
                    })];
            case 1:
                tokenInfo = _f.sent();
                isWSOL = !!tokenInfo.value.find(function (token) {
                    return token.account.data.parsed.info.mint === spl.NATIVE_MINT.toString();
                });
                if (isWSOL) {
                    tx.add(anchor.web3.SystemProgram.transfer({
                        fromPubkey: senderPublicKey,
                        toPubkey: associatedToken,
                        lamports: BigInt(quantity),
                    }), spl.createSyncNativeInstruction(associatedToken, spl.TOKEN_PROGRAM_ID));
                }
                else {
                    tx.add(spl.createAssociatedTokenAccountInstruction(senderPublicKey, associatedToken, senderPublicKey, spl.NATIVE_MINT, spl.TOKEN_PROGRAM_ID, spl.ASSOCIATED_TOKEN_PROGRAM_ID), anchor.web3.SystemProgram.transfer({
                        fromPubkey: senderPublicKey,
                        toPubkey: associatedToken,
                        lamports: BigInt(quantity),
                    }), spl.createSyncNativeInstruction(associatedToken, spl.TOKEN_PROGRAM_ID));
                }
                _f.label = 2;
            case 2:
                finalAmount = (0, helper_1.numberTo32ByteBuffer)(BigInt(quantity));
                assetPubkeyAddress = assetId === 'SOL' ? spl.NATIVE_MINT : (0, helper_1.getPublicKey)(assetId);
                refinedSourceChannel = "channel-".concat(sourceChannelId.toString());
                return [4, spl.getAssociatedTokenAddress(assetPubkeyAddress, senderPublicKey)];
            case 3:
                senderTokenAccount = _f.sent();
                msgTransferPayload = {
                    port_id_on_a: constants_1.solanaPortId,
                    chan_id_on_a: refinedSourceChannel,
                    packet_data: {
                        token: {
                            denom: {
                                trace_path: (0, helper_1.getSolanaTracePath)(denom, isNative),
                                base_denom: baseDenom,
                            },
                            amount: finalAmount,
                        },
                        sender: accountId,
                        receiver: destinationAddress,
                        memo: memo,
                    },
                    timeout_height_on_b: {
                        Never: {},
                    },
                    timeout_timestamp_on_b: {
                        time: timeout,
                    },
                };
                console.log(msgTransferPayload, '(msgTransferPayload');
                instructionPayload = {
                    discriminator: [153, 182, 142, 63, 227, 31, 140, 239],
                    hashed_base_denom: hashedDenom,
                    msg: msgTransferPayload,
                };
                console.log(instructionPayload, 'instructionPayload ');
                buffer = (0, borsher_1.borshSerialize)(helper_1.instructionSchema, instructionPayload);
                console.log(buffer, 'buffer');
                _d = (0, helper_1.getSolanaGuestChainAccounts)(constants_1.solanaPortId, refinedSourceChannel, hashedDenom), guestChainPDA = _d.guestChainPDA, triePDA = _d.triePDA, ibcStoragePDA = _d.ibcStoragePDA, mintAuthorityPDA = _d.mintAuthorityPDA, escrowAccountPDA = _d.escrowAccountPDA, feePDA = _d.feePDA;
                instruction = new web3_js_1.TransactionInstruction({
                    keys: [
                        { pubkey: senderPublicKey, isSigner: true, isWritable: true },
                        { pubkey: constants_1.solanaIbcProgramId, isSigner: false, isWritable: true },
                        { pubkey: ibcStoragePDA, isSigner: false, isWritable: true },
                        { pubkey: triePDA, isSigner: false, isWritable: true },
                        { pubkey: guestChainPDA, isSigner: false, isWritable: true },
                        { pubkey: mintAuthorityPDA, isSigner: false, isWritable: true },
                        { pubkey: assetPubkeyAddress, isSigner: false, isWritable: true },
                        {
                            pubkey: isNative ? escrowAccountPDA : constants_1.solanaIbcProgramId,
                            isSigner: false,
                            isWritable: true,
                        },
                        { pubkey: senderTokenAccount, isSigner: false, isWritable: true },
                        { pubkey: feePDA, isSigner: false, isWritable: true },
                        { pubkey: spl.TOKEN_PROGRAM_ID, isSigner: false, isWritable: true },
                        { pubkey: web3_js_1.SystemProgram.programId, isSigner: false, isWritable: true },
                    ],
                    programId: constants_1.solanaIbcProgramId,
                    data: buffer,
                });
                console.log(instruction, 'instruction');
                return [4, sendTX(tx, accountId, endpoint, true, undefined, function () {
                        tx.add(web3_js_1.ComputeBudgetProgram.requestHeapFrame({ bytes: 128 * 1024 }));
                        tx.add(web3_js_1.ComputeBudgetProgram.setComputeUnitLimit({ units: 700000 }));
                        tx.add(instruction);
                    }, true)];
            case 4: return [2, _f.sent()];
        }
    });
}); };
exports.solanaTransfer = solanaTransfer;
var sendTX = function (inputTx_1, address_1, endpoint_1) {
    var args_1 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args_1[_i - 3] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([inputTx_1, address_1, endpoint_1], __read(args_1), false), void 0, function (inputTx, address, endpoint, isBundle, tokenMintKeypair, beforeFeeFunc, skipPreflight) {
        var tx, depositor, _a, signedTx, rawTransaction;
        if (isBundle === void 0) { isBundle = true; }
        if (skipPreflight === void 0) { skipPreflight = true; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tx = inputTx;
                    depositor = (0, helper_1.getPublicKey)(address);
                    _a = tx;
                    return [4, (0, helper_1.getLatestBlockhash)(endpoint)];
                case 1:
                    _a.recentBlockhash = _b.sent();
                    tx.feePayer = depositor;
                    beforeFeeFunc === null || beforeFeeFunc === void 0 ? void 0 : beforeFeeFunc();
                    tx.add(getFee(address, isBundle));
                    return [4, constants_1.solana.signTransaction(tx).catch(function (err) {
                            utils_1.emitter.emit('CANCEL_SOLANA');
                            throw err;
                        })];
                case 2:
                    signedTx = _b.sent();
                    utils_1.emitter.emit('SOLANA_APPROVED');
                    if (tokenMintKeypair) {
                        signedTx.partialSign(tokenMintKeypair);
                    }
                    rawTransaction = signedTx.serialize({ requireAllSignatures: true });
                    return [4, pollingSignatureStatus(rawTransaction, endpoint, skipPreflight)];
                case 3: return [2, _b.sent()];
            }
        });
    });
};
var pollingSignatureStatus = function (rawTx_1, endpoint_1) {
    var args_1 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args_1[_i - 2] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([rawTx_1, endpoint_1], __read(args_1), false), void 0, function (rawTx, endpoint, skipPreflight) {
        var connection, signature, _a, _b, _c, i, status_1, e_1_1;
        var _d, e_1, _e, _f;
        var _g, _h, _j, _k;
        if (skipPreflight === void 0) { skipPreflight = false; }
        return __generator(this, function (_l) {
            switch (_l.label) {
                case 0:
                    connection = (0, helper_1.getConnection)(endpoint);
                    if (!connection)
                        return [2];
                    return [4, connection.sendRawTransaction(rawTx, {
                            skipPreflight: skipPreflight,
                            maxRetries: 5,
                        })];
                case 1:
                    signature = _l.sent();
                    return [4, connection.confirmTransaction(signature)];
                case 2:
                    _l.sent();
                    _l.label = 3;
                case 3:
                    _l.trys.push([3, 9, 10, 15]);
                    _a = true, _b = __asyncValues(__spreadArray([], __read(Array(9).keys()), false));
                    _l.label = 4;
                case 4: return [4, _b.next()];
                case 5:
                    if (!(_c = _l.sent(), _d = _c.done, !_d)) return [3, 8];
                    _f = _c.value;
                    _a = false;
                    i = _f;
                    return [4, connection.getSignatureStatus(signature)];
                case 6:
                    status_1 = _l.sent();
                    if (((_g = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _g === void 0 ? void 0 : _g.confirmationStatus) === 'finalized' ||
                        ((_h = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _h === void 0 ? void 0 : _h.confirmationStatus) === 'confirmed') {
                        return [2, { signature: signature, status: (_j = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _j === void 0 ? void 0 : _j.confirmationStatus }];
                    }
                    if (i > 9) {
                        return [2, { signature: signature, status: (_k = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _k === void 0 ? void 0 : _k.confirmationStatus }];
                    }
                    _l.label = 7;
                case 7:
                    _a = true;
                    return [3, 4];
                case 8: return [3, 15];
                case 9:
                    e_1_1 = _l.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 15];
                case 10:
                    _l.trys.push([10, , 13, 14]);
                    if (!(!_a && !_d && (_e = _b.return))) return [3, 12];
                    return [4, _e.call(_b)];
                case 11:
                    _l.sent();
                    _l.label = 12;
                case 12: return [3, 14];
                case 13:
                    if (e_1) throw e_1.error;
                    return [7];
                case 14: return [7];
                case 15: return [2];
            }
        });
    });
};
var getFee = function (address, isBundle) {
    if (isBundle) {
        return getTips(address, 15000000);
    }
    else {
        var SEND_AMT = 0.01 * web3_js_1.LAMPORTS_PER_SOL;
        var PRIORITY_FEE_IX = web3_js_1.ComputeBudgetProgram.setComputeUnitPrice({
            microLamports: SEND_AMT,
        });
        return PRIORITY_FEE_IX;
    }
};
var getTips = function (accountId, lamports) {
    if (lamports === void 0) { lamports = 4000000; }
    return web3_js_1.SystemProgram.transfer({
        toPubkey: (0, helper_1.getPublicKey)('96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5'),
        fromPubkey: (0, helper_1.getPublicKey)(accountId),
        lamports: lamports,
    });
};


/***/ }),

/***/ 5020:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.coinGecko = void 0;
exports.coinGecko = [
    {
        "name": "ASTR",
        "id": "astar"
    },
    {
        "name": "SDN",
        "id": "shiden"
    },
    {
        "name": "BNC_KSM",
        "id": "bifrost-native-coin"
    },
    {
        "name": "BNC_DOT",
        "id": "bifrost-native-coin"
    },
    {
        "name": "INJ",
        "id": "injective-protocol"
    },
    {
        "name": "TIA",
        "id": "celestia"
    },
    {
        "name": "PICA",
        "id": "picasso"
    },
    {
        "name": "USDT",
        "id": "tether"
    },
    {
        "name": "BNC_DOT",
        "id": "bifrost-native-coin"
    },
    {
        "name": "ASTR",
        "id": "bifrost-native-coin"
    },
    {
        "name": "DOT",
        "id": "polkadot"
    },
    {
        "name": "KSM",
        "id": "kusama"
    },
    {
        "name": "SEI",
        "id": "sei-network"
    },
    {
        "name": "SILK",
        "id": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2"
    },
    {
        "name": "QCK",
        "id": "quicksilver"
    },
    {
        "name": "MOVR",
        "id": "moonriver"
    },
    {
        "name": "USDT Kusama",
        "id": "tether"
    },
    {
        "name": "STRD",
        "id": "stride"
    },
    {
        "name": "PICA",
        "id": "picasso"
    },
    {
        "name": "BNC_KSM",
        "id": "bifrost-native-coin"
    },
    {
        "name": "SDN",
        "id": "shiden"
    },
    {
        "name": "BLD",
        "id": "agoric"
    },
    {
        "name": "OSMO",
        "id": "osmosis"
    },
    {
        "name": "BNC_DOT",
        "id": "bifrost-native-coin"
    },
    {
        "name": "wSOL",
        "id": "wrapped-solana"
    },
    {
        "name": "ASTR",
        "id": "astar"
    },
    {
        "name": "stATOM",
        "id": "stride-staked-atom"
    },
    {
        "name": "NTRN",
        "id": "neutron-3"
    },
    {
        "name": "ATOM",
        "id": "cosmos"
    },
    {
        "name": "UMEE",
        "id": "umee"
    },
    {
        "name": "ETH",
        "id": "ethereum"
    },
    {
        "name": "IST",
        "id": "inter-stable-token"
    },
    {
        "name": "CRE",
        "id": "crescent-network"
    },
    {
        "name": "GLMR",
        "id": "moonbeam"
    },
    {
        "name": "DOT",
        "id": "polkadot"
    },
    {
        "name": "KUJI",
        "id": "kujira"
    },
    {
        "name": "KSM",
        "id": "kusama"
    },
    {
        "name": "INJ",
        "id": "injective-protocol"
    },
    {
        "name": "TIA",
        "id": "celestia"
    },
    {
        "name": "SCRT",
        "id": "secret"
    },
    {
        "name": "TNKR",
        "id": "tinkernet"
    },
    {
        "name": "STARS",
        "id": "stargaze"
    },
    {
        "name": "bCRE",
        "id": "liquid-staking-crescent"
    },
    {
        "name": "HUAHUA",
        "id": "chihuahua-token"
    },
    {
        "name": "DOT",
        "id": "polkadot"
    },
    {
        "name": "ETH",
        "id": "ethereum"
    },
    {
        "name": "DAI",
        "id": "dai"
    },
    {
        "name": "FXS",
        "id": "frax-share"
    },
    {
        "name": "sFRAX",
        "id": "staked-frax"
    },
    {
        "name": "sfrxETH",
        "id": "staked-frax-ether"
    },
    {
        "name": "ENA",
        "id": "ethena"
    },
    {
        "name": "FRAX",
        "id": "frax"
    },
    {
        "name": "frxETH",
        "id": "frax-ether"
    },
    {
        "name": "wBTC",
        "id": "wrapped-bitcoin"
    },
    {
        "name": "stETH",
        "id": "lido-staked-ether"
    },
    {
        "name": "rETH",
        "id": "rocket-pool-eth"
    },
    {
        "name": "crvUSD",
        "id": "crvusd"
    },
    {
        "name": "pxETH",
        "id": "dinero-staked-eth"
    },
    {
        "name": "eETH",
        "id": "ether-fi-staked-eth"
    },
    {
        "name": "SILK",
        "id": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2"
    },
    {
        "name": "ezETH",
        "id": "renzo-restaked-eth"
    },
    {
        "name": "USDe",
        "id": "ethena-usde"
    },
    {
        "name": "PEPE",
        "id": "pepe"
    },
    {
        "name": "USDT Ethereum",
        "id": "tether"
    },
    {
        "name": "CRV",
        "id": "curve-dao-token"
    },
    {
        "name": "SOL",
        "id": "solana"
    },
    {
        "name": "JitoSOL",
        "id": "jito-staked-sol"
    },
    {
        "name": "mSOL",
        "id": "msol"
    },
    {
        "name": "WHINE",
        "id": "whine-coin"
    },
    {
        "name": "bSOL",
        "id": "blazestake-staked-sol"
    },
    {
        "name": "LST",
        "id": "liquid-staking-token"
    },
    {
        "name": "BLZE",
        "id": "solblaze"
    },
    {
        "name": "edgeSOL",
        "id": "edgevana-staked-sol"
    },
    {
        "name": "wSOL",
        "id": "wrapped-solana"
    },
    {
        "name": "WIF",
        "id": "dogwifcoin"
    },
    {
        "name": "BONK",
        "id": "bonk"
    },
    {
        "name": "USDT Solana",
        "id": "tether"
    },
    {
        "name": "UWU",
        "id": "unicorn-3"
    },
    {
        "name": "USDT Kusama",
        "id": "tether"
    },
    {
        "name": "KSM",
        "id": "kusama"
    },
    {
        "name": "ARCH",
        "id": "archway"
    },
    {
        "name": "PICA",
        "id": "picasso"
    },
    {
        "name": "HUAHUA",
        "id": "chihuahua-token"
    },
    {
        "name": "XRP",
        "id": "ripple"
    },
    {
        "name": "COREUM",
        "id": "coreum"
    },
    {
        "name": "KUJI",
        "id": "kujira"
    },
    {
        "name": "QCK",
        "id": "quicksilver"
    },
    {
        "name": "SCRT",
        "id": "secret"
    },
    {
        "name": "SILK",
        "id": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2"
    },
    {
        "name": "SHD",
        "id": "shade-protocol"
    },
    {
        "name": "SEI",
        "id": "sei-network"
    },
    {
        "name": "BLD",
        "id": "agoric"
    },
    {
        "name": "IST",
        "id": "inter-stable-token"
    },
    {
        "name": "ATOM",
        "id": "cosmos"
    },
    {
        "name": "CRE",
        "id": "crescent-network"
    },
    {
        "name": "bCRE",
        "id": "liquid-staking-crescent"
    },
    {
        "name": "ASTRO",
        "id": "astroport-fi"
    },
    {
        "name": "NTRN",
        "id": "neutron-3"
    },
    {
        "name": "OSMO",
        "id": "osmosis"
    },
    {
        "name": "milkTIA",
        "id": "milkyway-staked-tia"
    },
    {
        "name": "STARS",
        "id": "stargaze"
    },
    {
        "name": "stTIA",
        "id": "stride-staked-tia"
    },
    {
        "name": "STRD",
        "id": "stride"
    },
    {
        "name": "stATOM",
        "id": "stride-staked-atom"
    },
    {
        "name": "UMEE",
        "id": "umee"
    },
    {
        "name": "GLMR",
        "id": "moonbeam"
    },
    {
        "name": "MOVR",
        "id": "moonriver"
    }
];


/***/ }),

/***/ 2886:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.crossChainAssets = void 0;
exports.crossChainAssets = {
    "cosmos": {
        "inj": {
            "chainId": "injective-1",
            "decimals": 18,
            "minimalDenom": "inj",
            "denom": "INJ",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
            "codeHash": ""
        },
        "utia": {
            "chainId": "celestia",
            "decimals": 6,
            "minimalDenom": "utia",
            "denom": "TIA",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
            "codeHash": ""
        },
        "usei": {
            "chainId": "pacific-1",
            "decimals": 6,
            "minimalDenom": "usei",
            "denom": "SEI",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg",
            "codeHash": ""
        },
        "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd": {
            "chainId": "secret-4",
            "decimals": 6,
            "minimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
            "denom": "SILK",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/silk.svg",
            "codeHash": "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e"
        },
        "ustrd": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "ustrd",
            "denom": "STRD",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
            "codeHash": ""
        },
        "ubld": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "ubld",
            "denom": "BLD",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
            "codeHash": ""
        },
        "uosmo": {
            "chainId": "osmosis-1",
            "decimals": 6,
            "minimalDenom": "uosmo",
            "denom": "OSMO",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
            "codeHash": ""
        },
        "stuatom": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "stuatom",
            "denom": "stATOM",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png",
            "codeHash": ""
        },
        "uist": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "uist",
            "denom": "IST",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
            "codeHash": ""
        },
        "wei": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "wei",
            "denom": "ETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ETH.svg",
            "codeHash": ""
        },
        "0x6b175474e89094c44da98b954eedeac495271d0f": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "denom": "DAI",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/dai.svg",
            "codeHash": ""
        },
        "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
            "denom": "FXS",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/fxs.svg",
            "codeHash": ""
        },
        "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32",
            "denom": "sFRAX",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sFRAX.svg",
            "codeHash": ""
        },
        "0xac3e018457b222d93114458476f3e3416abbe38f": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xac3e018457b222d93114458476f3e3416abbe38f",
            "denom": "sfrxETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sfrxETH.svg",
            "codeHash": ""
        },
        "0x57e114b691db790c35207b2e685d4a43181e6061": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x57e114b691db790c35207b2e685d4a43181e6061",
            "denom": "ENA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ena.svg",
            "codeHash": ""
        },
        "0x853d955acef822db058eb8505911ed77f175b99e": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x853d955acef822db058eb8505911ed77f175b99e",
            "denom": "FRAX",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frax.svg",
            "codeHash": ""
        },
        "0x5e8422345238f34275888049021821e8e08caa1f": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x5e8422345238f34275888049021821e8e08caa1f",
            "denom": "frxETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frxeth.svg",
            "codeHash": ""
        },
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": {
            "chainId": "ethereum",
            "decimals": 8,
            "minimalDenom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            "denom": "wBTC",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wbtc.svg",
            "codeHash": ""
        },
        "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
            "denom": "stETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/steth.svg",
            "codeHash": ""
        },
        "0xae78736cd615f374d3085123a210448e74fc6393": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xae78736cd615f374d3085123a210448e74fc6393",
            "denom": "rETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/reth.svg",
            "codeHash": ""
        },
        "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
            "denom": "crvUSD",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crvusd.svg",
            "codeHash": ""
        },
        "0x04c154b66cb340f3ae24111cc767e0184ed00cc6": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
            "denom": "pxETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pxeth.svg",
            "codeHash": ""
        },
        "0x35fa164735182de50811e8e2e824cfb9b6118ac2": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x35fa164735182de50811e8e2e824cfb9b6118ac2",
            "denom": "eETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/eeth.svg",
            "codeHash": ""
        },
        "0xbf5495efe5db9ce00f80364c8b423567e58d2110": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
            "denom": "ezETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ezeth.svg",
            "codeHash": ""
        },
        "0x4c9edd5852cd905f086c759e8383e09bff1e68b3": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
            "denom": "USDe",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDe.svg",
            "codeHash": ""
        },
        "0x6982508145454ce325ddbe47a25d4ec3d2311933": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
            "denom": "PEPE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pepe.svg",
            "codeHash": ""
        },
        "0xdac17f958d2ee523a2206206994597c13d831ec7": {
            "chainId": "ethereum",
            "decimals": 6,
            "minimalDenom": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "denom": "USDT Ethereum",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTethereum.svg",
            "codeHash": ""
        },
        "0xd533a949740bb3306d119cc777fa900ba034cd52": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xd533a949740bb3306d119cc777fa900ba034cd52",
            "denom": "CRV",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crv.svg",
            "codeHash": ""
        },
        "SOL": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "SOL",
            "denom": "SOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sol.svg",
            "codeHash": ""
        },
        "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
            "denom": "JitoSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jitosol.svg",
            "codeHash": ""
        },
        "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
            "denom": "mSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/mSOL.svg",
            "codeHash": ""
        },
        "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump",
            "denom": "WHINE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WHINE.svg",
            "codeHash": ""
        },
        "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj",
            "denom": "hausSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hausSOL.svg",
            "codeHash": ""
        },
        "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
            "denom": "bSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/bSOL.svg",
            "codeHash": ""
        },
        "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
            "denom": "LST",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/LST.svg",
            "codeHash": ""
        },
        "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA",
            "denom": "BLZE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BLZE.svg",
            "codeHash": ""
        },
        "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
            "denom": "edgeSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/edgesol.svg",
            "codeHash": ""
        },
        "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV",
            "denom": "cSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/csol.svg",
            "codeHash": ""
        },
        "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h",
            "denom": "cmSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cmsol.svg",
            "codeHash": ""
        },
        "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM",
            "denom": "cJitoSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cJitoSOL.svg",
            "codeHash": ""
        },
        "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt",
            "denom": "cbSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cbSOL.svg",
            "codeHash": ""
        },
        "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h",
            "denom": "compassSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/compasssol.svg",
            "codeHash": ""
        },
        "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
            "denom": "jupSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jupsol.svg",
            "codeHash": ""
        },
        "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
            "denom": "hSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hSOL.svg",
            "codeHash": ""
        },
        "So11111111111111111111111111111111111111112": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "So11111111111111111111111111111111111111112",
            "denom": "wSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wSOL.svg",
            "codeHash": ""
        },
        "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
            "denom": "WIF",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WIF.svg",
            "codeHash": ""
        },
        "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263": {
            "chainId": "solana",
            "decimals": 5,
            "minimalDenom": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
            "denom": "BONK",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BONK.svg",
            "codeHash": ""
        },
        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "denom": "USDT Solana",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTsolana.svg",
            "codeHash": ""
        },
        "UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z",
            "denom": "UWU",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/uwu.svg",
            "codeHash": ""
        },
        "aarch": {
            "chainId": "archway-1",
            "decimals": 18,
            "minimalDenom": "aarch",
            "denom": "ARCH",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
            "codeHash": ""
        },
        "ppica": {
            "chainId": "centauri-1",
            "decimals": 12,
            "minimalDenom": "ppica",
            "denom": "PICA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
            "codeHash": ""
        },
        "uhuahua": {
            "chainId": "chihuahua-1",
            "decimals": 6,
            "minimalDenom": "uhuahua",
            "denom": "HUAHUA",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
            "codeHash": ""
        },
        "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz": {
            "chainId": "coreum-mainnet-1",
            "decimals": 6,
            "minimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
            "denom": "XRP",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/xrp.svg",
            "codeHash": ""
        },
        "ucore": {
            "chainId": "coreum-mainnet-1",
            "decimals": 6,
            "minimalDenom": "ucore",
            "denom": "COREUM",
            "imageUrl": "",
            "codeHash": ""
        },
        "ukuji": {
            "chainId": "kaiyo-1",
            "decimals": 6,
            "minimalDenom": "ukuji",
            "denom": "KUJI",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
            "codeHash": ""
        },
        "uqck": {
            "chainId": "quicksilver-2",
            "decimals": 6,
            "minimalDenom": "uqck",
            "denom": "QCK",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
            "codeHash": ""
        },
        "uscrt": {
            "chainId": "secret-4",
            "decimals": 6,
            "minimalDenom": "uscrt",
            "denom": "SCRT",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
            "codeHash": ""
        },
        "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm": {
            "chainId": "secret-4",
            "decimals": 8,
            "minimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
            "denom": "SHD",
            "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg",
            "codeHash": "638a3e1d50175fbcb8373cf801565283e3eb23d88a9b7b7f99fcc5eb1e6b561e"
        },
        "uatom": {
            "chainId": "cosmoshub-4",
            "decimals": 6,
            "minimalDenom": "uatom",
            "denom": "ATOM",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
            "codeHash": ""
        },
        "ucre": {
            "chainId": "crescent-1",
            "decimals": 6,
            "minimalDenom": "ucre",
            "denom": "CRE",
            "imageUrl": "",
            "codeHash": ""
        },
        "ubcre": {
            "chainId": "crescent-1",
            "decimals": 6,
            "minimalDenom": "ubcre",
            "denom": "bCRE",
            "imageUrl": "",
            "codeHash": ""
        },
        "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro": {
            "chainId": "neutron-1",
            "decimals": 6,
            "minimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
            "denom": "ASTRO",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg",
            "codeHash": ""
        },
        "untrn": {
            "chainId": "neutron-1",
            "decimals": 6,
            "minimalDenom": "untrn",
            "denom": "NTRN",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png",
            "codeHash": ""
        },
        "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA": {
            "chainId": "osmosis-1",
            "decimals": 6,
            "minimalDenom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
            "denom": "milkTIA",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/milktia.png",
            "codeHash": ""
        },
        "ustars": {
            "chainId": "stargaze-1",
            "decimals": 6,
            "minimalDenom": "ustars",
            "denom": "STARS",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
            "codeHash": ""
        },
        "stutia": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "stutia",
            "denom": "stTIA",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/sttia.png",
            "codeHash": ""
        },
        "uumee": {
            "chainId": "umee-1",
            "decimals": 6,
            "minimalDenom": "uumee",
            "denom": "UMEE",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
            "codeHash": ""
        }
    },
    "solana": {
        "vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J": {
            "chainId": "polkadot",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-2/transfer/channel-15/79228162514264337593543950342",
            "denom": "DOT",
            "realDecimals": 10,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/DOT.svg",
            "currentChainId": "solana"
        },
        "9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12": {
            "chainId": "1000",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-2/4",
            "denom": "KSM",
            "realDecimals": 12,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/KSM.svg",
            "currentChainId": "solana"
        },
        "BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S": {
            "chainId": "pacific-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-3/transfer/channel-782/usei",
            "denom": "SEI",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg",
            "currentChainId": "solana"
        },
        "Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn": {
            "chainId": "secret-4",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
            "denom": "SILK",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/silk.svg",
            "currentChainId": "solana"
        },
        "FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-5/ustrd",
            "denom": "STRD",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
            "currentChainId": "solana"
        },
        "BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-13/ubld",
            "denom": "BLD",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
            "currentChainId": "solana"
        },
        "EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM": {
            "chainId": "osmosis-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-3/uosmo",
            "denom": "OSMO",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
            "currentChainId": "solana"
        },
        "8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-5/stuatom",
            "denom": "stATOM",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png",
            "currentChainId": "solana"
        },
        "3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-13/uist",
            "denom": "IST",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
            "currentChainId": "solana"
        },
        "EXZbXNMbdTbMYpr9J5MUDv29XnWfxLZYyCCtk2tCy7XV": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/wei",
            "denom": "ETH",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ETH.svg",
            "currentChainId": "solana"
        },
        "6SYCn6Hj4X3XV6dzRk8vXa1UyZc4SBvAT7p3e1AcATAx": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x6b175474e89094c44da98b954eedeac495271d0f",
            "denom": "DAI",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/dai.svg",
            "currentChainId": "solana"
        },
        "6jnTywpWt1u6Jh65FTSgUVDxv7Kyfp3f1mwH426LXmB7": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
            "denom": "FXS",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/fxs.svg",
            "currentChainId": "solana"
        },
        "3AvDivzbMjfin9hSVUBjdYerKroX8jQuNyDVebdRiULE": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32",
            "denom": "sFRAX",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sFRAX.svg",
            "currentChainId": "solana"
        },
        "E5Lz7Bi1KZD9VTYXsCZhkWDiztkNzPoX7Jk71xbTkEoA": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0xac3e018457b222d93114458476f3e3416abbe38f",
            "denom": "sfrxETH",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sfrxETH.svg",
            "currentChainId": "solana"
        },
        "Aa34MLrb7GfT5uMXnpT9oKnj11gGcXMq61b5kBzTvbnW": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x57e114b691db790c35207b2e685d4a43181e6061",
            "denom": "ENA",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ena.svg",
            "currentChainId": "solana"
        },
        "A9zVTbwXTwMA3WsYbB7mGKmDZp3UPfd64sjZfZQ8Lk49": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x853d955aCEf822Db058eb8505911ED77F175b99e",
            "denom": "FRAX",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frax.svg",
            "currentChainId": "solana"
        },
        "Go2RiPCxrU3dWH7cs52pm2Q2R45HB2ACbYBZsx1vadZd": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x5E8422345238F34275888049021821E8E08CAa1f",
            "denom": "frxETH",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frxeth.svg",
            "currentChainId": "solana"
        },
        "GrkjmJt3KECe6Yi11LZxY88BJ69KyQnRtC6EioFAF1rD": {
            "chainId": "ethereum",
            "decimals": 8,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
            "denom": "wBTC",
            "realDecimals": 8,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wbtc.svg",
            "currentChainId": "solana"
        },
        "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "hausSOL",
            "denom": "hausSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hausSOL.svg",
            "currentChainId": "solana"
        },
        "urez9EJo4YNdpQQxw6xrLfF1J3EqJSaVwPGHFNG338B": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0xae78736Cd615f374D3085123A210448E74Fc6393",
            "denom": "rETH",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/reth.svg",
            "currentChainId": "solana"
        },
        "EuBHrXZJa6ZNg6dfhiotxRoHpVpMg6ZsgNc6ZKJ9iUe2": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
            "denom": "crvUSD",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crvusd.svg",
            "currentChainId": "solana"
        },
        "B1cm3Wf5ZNUdgZ1eaXaNdiy9DCmQudfmspRMBb2TqDjb": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
            "denom": "pxETH",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pxeth.svg",
            "currentChainId": "solana"
        },
        "CqzASJJsEA1TDvjCahP9pa7wPjqFEdouup6g5eNV71uv": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0xbf5495efe5db9ce00f80364c8b423567e58d2110",
            "denom": "ezETH",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ezeth.svg",
            "currentChainId": "solana"
        },
        "GM4RuF5gLcytcq36wNJkX3UBYRKP9hQwJyyRWm6d6o47": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
            "denom": "USDe",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDe.svg",
            "currentChainId": "solana"
        },
        "uVYDrZeCeq5T5RBHZZWHfsG12SDCm4MPHX2h8iAcXRh": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0x6982508145454ce325ddbe47a25d4ec3d2311933",
            "denom": "PEPE",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pepe.svg",
            "currentChainId": "solana"
        },
        "EHzGKxauSbvLD5xfX4P9StBdQWmyroferGg9aR6oDU9v": {
            "chainId": "ethereum",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0xdac17f958d2ee523a2206206994597c13d831ec7",
            "denom": "USDT Ethereum",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTethereum.svg",
            "currentChainId": "solana"
        },
        "4tjtYi8dCVkE539ANy3qUHhKdqkjzqhn2iW4WSZMfMa6": {
            "chainId": "ethereum",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-52/0xd533a949740bb3306d119cc777fa900ba034cd52",
            "denom": "CRV",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crv.svg",
            "currentChainId": "solana"
        },
        "SOL": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "SOL",
            "denom": "SOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sol.svg",
            "currentChainId": "solana"
        },
        "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "JitoSOL",
            "denom": "JitoSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jitosol.svg",
            "currentChainId": "solana"
        },
        "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "mSOL",
            "denom": "mSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/mSOL.svg",
            "currentChainId": "solana"
        },
        "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "WHINE",
            "denom": "WHINE",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WHINE.svg",
            "currentChainId": "solana"
        },
        "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "bSOL",
            "denom": "bSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/bSOL.svg",
            "currentChainId": "solana"
        },
        "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "LST",
            "denom": "LST",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/LST.svg",
            "currentChainId": "solana"
        },
        "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "BLZE",
            "denom": "BLZE",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BLZE.svg",
            "currentChainId": "solana"
        },
        "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "edgeSOL",
            "denom": "edgeSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/edgesol.svg",
            "currentChainId": "solana"
        },
        "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "cSOL",
            "denom": "cSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/csol.svg",
            "currentChainId": "solana"
        },
        "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "cmSOL",
            "denom": "cmSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cmsol.svg",
            "currentChainId": "solana"
        },
        "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "cJitoSOL",
            "denom": "cJitoSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cJitoSOL.svg",
            "currentChainId": "solana"
        },
        "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "cbSOL",
            "denom": "cbSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cbSOL.svg",
            "currentChainId": "solana"
        },
        "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "compassSOL",
            "denom": "compassSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/compasssol.svg",
            "currentChainId": "solana"
        },
        "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "jupSOL",
            "denom": "jupSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jupsol.svg",
            "currentChainId": "solana"
        },
        "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "hSOL",
            "denom": "hSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hSOL.svg",
            "currentChainId": "solana"
        },
        "So11111111111111111111111111111111111111112": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "wSOL",
            "denom": "wSOL",
            "realDecimals": 9,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wSOL.svg",
            "currentChainId": "solana"
        },
        "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "WIF",
            "denom": "WIF",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WIF.svg",
            "currentChainId": "solana"
        },
        "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263": {
            "chainId": "solana",
            "decimals": 5,
            "minimalDenom": "BONK",
            "denom": "BONK",
            "realDecimals": 5,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BONK.svg",
            "currentChainId": "solana"
        },
        "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "USDT Solana",
            "denom": "USDT Solana",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTsolana.svg",
            "currentChainId": "solana"
        },
        "UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "UWU",
            "denom": "UWU",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/uwu.svg",
            "currentChainId": "solana"
        },
        "BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk": {
            "chainId": "archway-1",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/transfer/channel-50/aarch",
            "denom": "ARCH",
            "realDecimals": 18,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
            "currentChainId": "solana"
        },
        "966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ": {
            "chainId": "centauri-1",
            "decimals": 9,
            "minimalDenom": "transfer/channel-1/ppica",
            "denom": "PICA",
            "realDecimals": 12,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
            "currentChainId": "solana"
        },
        "DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW": {
            "chainId": "coreum-mainnet-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz",
            "denom": "XRP",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/xrp.svg",
            "currentChainId": "solana"
        },
        "Cq5Z54y9FpWQHkvspw63TKd9P9w34X5XjFk14FkG1H8": {
            "chainId": "coreum-mainnet-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-56/ucore",
            "denom": "COREUM",
            "realDecimals": 6,
            "imageUrl": "",
            "currentChainId": "solana"
        },
        "6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V": {
            "chainId": "secret-4",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-14/uscrt",
            "denom": "SCRT",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
            "currentChainId": "solana"
        },
        "4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ": {
            "chainId": "secret-4",
            "decimals": 8,
            "minimalDenom": "transfer/channel-1/transfer/channel-26/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm",
            "denom": "SHD",
            "realDecimals": 8,
            "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg",
            "currentChainId": "solana"
        },
        "9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc": {
            "chainId": "cosmoshub-4",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-4/uatom",
            "denom": "ATOM",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
            "currentChainId": "solana"
        },
        "8knH1Z4kY6WaHRMZHMxe76d2Ar3kHhjz33t1eZRJSyET": {
            "chainId": "neutron-1",
            "decimals": 6,
            "minimalDenom": "",
            "denom": "ASTRO",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg",
            "currentChainId": "solana"
        },
        "HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB": {
            "chainId": "stargaze-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-1/transfer/channel-6/ustars",
            "denom": "STARS",
            "realDecimals": 6,
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
            "currentChainId": "solana"
        }
    },
    "ethereum": {
        "0x21c2c96Dbfa137E23946143c71AC8330F9B44001": {
            "chainId": "polkadot",
            "decimals": 10,
            "minimalDenom": "transfer/channel-2/transfer/channel-2/transfer/channel-15/79228162514264337593543950342",
            "denom": "DOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/DOT.svg",
            "currentChainId": "ethereum"
        },
        "0xB44D6C324A6c15127F1451465f1E1DbC39142A60": {
            "chainId": "1000",
            "decimals": 12,
            "minimalDenom": "transfer/channel-2/transfer/channel-2/4",
            "denom": "KSM",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/KSM.svg",
            "currentChainId": "ethereum"
        },
        "0x013AdDc6512432304c055CEc20bbb0f6AA5ed7d5": {
            "chainId": "pacific-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-3/transfer/channel-782/usei",
            "denom": "SEI",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg",
            "currentChainId": "ethereum"
        },
        "0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa": {
            "chainId": "secret-4",
            "decimals": 6,
            "minimalDenom": "0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa",
            "denom": "SILK",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/silk.svg",
            "currentChainId": "ethereum"
        },
        "0x3f8Bb8634Ca4A61Aa23cd0DF00C3152E0eaF9587": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-5/ustrd",
            "denom": "STRD",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
            "currentChainId": "ethereum"
        },
        "0xfd11E3564691A99bF56A3545A86Af2aEb8416CA1": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-13/ubld",
            "denom": "BLD",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
            "currentChainId": "ethereum"
        },
        "0x9243b3615ed297403c0cafa156c3fa16057526ca": {
            "chainId": "osmosis-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-3/uosmo",
            "denom": "OSMO",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
            "currentChainId": "ethereum"
        },
        "0xA534115DA1C1e51Cb2C6E8bC1fBA23A5189a1de2": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-5/stuatom",
            "denom": "stATOM",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png",
            "currentChainId": "ethereum"
        },
        "0x7d1b634d825221E8d8f619c5FA06a3F57dAFd5C6": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-13/uist",
            "denom": "IST",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
            "currentChainId": "ethereum"
        },
        "ETH": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "ETH",
            "denom": "ETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ETH.svg",
            "currentChainId": "ethereum"
        },
        "0x6b175474e89094c44da98b954eedeac495271d0f": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "denom": "DAI",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/dai.svg",
            "currentChainId": "ethereum"
        },
        "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
            "denom": "FXS",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/fxs.svg",
            "currentChainId": "ethereum"
        },
        "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32",
            "denom": "sFRAX",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sFRAX.svg",
            "currentChainId": "ethereum"
        },
        "0xac3e018457b222d93114458476f3e3416abbe38f": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xac3e018457b222d93114458476f3e3416abbe38f",
            "denom": "sfrxETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sfrxETH.svg",
            "currentChainId": "ethereum"
        },
        "0x57e114b691db790c35207b2e685d4a43181e6061": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x57e114b691db790c35207b2e685d4a43181e6061",
            "denom": "ENA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ena.svg",
            "currentChainId": "ethereum"
        },
        "0x853d955acef822db058eb8505911ed77f175b99e": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x853d955acef822db058eb8505911ed77f175b99e",
            "denom": "FRAX",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frax.svg",
            "currentChainId": "ethereum"
        },
        "0x5e8422345238f34275888049021821e8e08caa1f": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x5e8422345238f34275888049021821e8e08caa1f",
            "denom": "frxETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/frxeth.svg",
            "currentChainId": "ethereum"
        },
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": {
            "chainId": "ethereum",
            "decimals": 8,
            "minimalDenom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
            "denom": "wBTC",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wbtc.svg",
            "currentChainId": "ethereum"
        },
        "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
            "denom": "stETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/steth.svg",
            "currentChainId": "ethereum"
        },
        "0xae78736cd615f374d3085123a210448e74fc6393": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xae78736cd615f374d3085123a210448e74fc6393",
            "denom": "rETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/reth.svg",
            "currentChainId": "ethereum"
        },
        "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
            "denom": "crvUSD",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crvusd.svg",
            "currentChainId": "ethereum"
        },
        "0x04c154b66cb340f3ae24111cc767e0184ed00cc6": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
            "denom": "pxETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pxeth.svg",
            "currentChainId": "ethereum"
        },
        "0x35fa164735182de50811e8e2e824cfb9b6118ac2": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x35fa164735182de50811e8e2e824cfb9b6118ac2",
            "denom": "eETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/eeth.svg",
            "currentChainId": "ethereum"
        },
        "0xbf5495efe5db9ce00f80364c8b423567e58d2110": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
            "denom": "ezETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ezeth.svg",
            "currentChainId": "ethereum"
        },
        "0x4c9edd5852cd905f086c759e8383e09bff1e68b3": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
            "denom": "USDe",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDe.svg",
            "currentChainId": "ethereum"
        },
        "0x6982508145454ce325ddbe47a25d4ec3d2311933": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
            "denom": "PEPE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/pepe.svg",
            "currentChainId": "ethereum"
        },
        "0xdac17f958d2ee523a2206206994597c13d831ec7": {
            "chainId": "ethereum",
            "decimals": 6,
            "minimalDenom": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "denom": "USDT Ethereum",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTethereum.svg",
            "currentChainId": "ethereum"
        },
        "0xd533a949740bb3306d119cc777fa900ba034cd52": {
            "chainId": "ethereum",
            "decimals": 18,
            "minimalDenom": "0xd533a949740bb3306d119cc777fa900ba034cd52",
            "denom": "CRV",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/crv.svg",
            "currentChainId": "ethereum"
        },
        "0xBe90556468e5eE2A15Da99a5C0e045ED0B142143": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
            "denom": "JitoSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jitosol.svg",
            "currentChainId": "ethereum"
        },
        "0xDa7Fa7248F62e051ccA4Af2522439A61d3976462": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
            "denom": "mSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/mSOL.svg",
            "currentChainId": "ethereum"
        },
        "0xc0732030f4DB63cfE0323dd87b497AE4Ecb43CEc": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
            "denom": "bSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/bSOL.svg",
            "currentChainId": "ethereum"
        },
        "0x247dB9746755CF119d3AD68A6f8f60E7E650BFa1": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
            "denom": "LST",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/LST.svg",
            "currentChainId": "ethereum"
        },
        "0x3d078B97918eDe947aF59E679eceF9fd87C32082": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
            "denom": "edgeSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/edgesol.svg",
            "currentChainId": "ethereum"
        },
        "0x5cD8cd3c5e8780cCBc74277f22b099FEFd04F5ef": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
            "denom": "jupSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/jupsol.svg",
            "currentChainId": "ethereum"
        },
        "0x963b37d30eee26d0D94C1E5a42Aa5B1371494cA2": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
            "denom": "hSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/hSOL.svg",
            "currentChainId": "ethereum"
        },
        "0xd1D82d3Ab815E0B47e38EC2d666c5b8AA05Ae501": {
            "chainId": "solana",
            "decimals": 9,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/So11111111111111111111111111111111111111112",
            "denom": "wSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wSOL.svg",
            "currentChainId": "ethereum"
        },
        "0xCF7e6742266aD5a76ee042e26d3F766c34195E5f": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
            "denom": "WIF",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/WIF.svg",
            "currentChainId": "ethereum"
        },
        "0x4aeF9BD3fBb09d8f374436D9ec25711A1Be9BaCb": {
            "chainId": "solana",
            "decimals": 5,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
            "denom": "BONK",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BONK.svg",
            "currentChainId": "ethereum"
        },
        "0x58efE15C0404aB22F87E4495D71f6f2077e862bE": {
            "chainId": "solana",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "denom": "USDT Solana",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTsolana.svg",
            "currentChainId": "ethereum"
        },
        "0xA88bB3EB033F359FeF934Dd3b4b753847318072C": {
            "chainId": "archway-1",
            "decimals": 18,
            "minimalDenom": "transfer/channel-2/transfer/channel-50/aarch",
            "denom": "ARCH",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
            "currentChainId": "ethereum"
        },
        "0xbb63a9b64a80e9338b8ea298c51765e57c4f159c": {
            "chainId": "centauri-1",
            "decimals": 12,
            "minimalDenom": "transfer/channel-2/ppica",
            "denom": "PICA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
            "currentChainId": "ethereum"
        },
        "0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24": {
            "chainId": "coreum-mainnet-1",
            "decimals": 6,
            "minimalDenom": "0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24",
            "denom": "XRP",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/xrp.svg",
            "currentChainId": "ethereum"
        },
        "0x9e0F65F56120FCaebe2c0675377332Ec60ABB1aC": {
            "chainId": "coreum-mainnet-1",
            "decimals": 6,
            "minimalDenom": "0x9e0F65F56120FCaebe2c0675377332Ec60ABB1aC",
            "denom": "COREUM",
            "imageUrl": "",
            "currentChainId": "ethereum"
        },
        "0xF7F00d598b2a651404993E93Df7AE16C3C736F3C": {
            "chainId": "secret-4",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-14/uscrt",
            "denom": "SCRT",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
            "currentChainId": "ethereum"
        },
        "0x11539A7931c82191aF65406bA986BF5B90a3f5E4": {
            "chainId": "secret-4",
            "decimals": 8,
            "minimalDenom": "0x11539A7931c82191aF65406bA986BF5B90a3f5E4",
            "denom": "SHD",
            "imageUrl": "https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/shd.svg",
            "currentChainId": "ethereum"
        },
        "0x519ddEff5d142Fc177d95F24952eF3D2EDe530BC": {
            "chainId": "cosmoshub-4",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-4/uatom",
            "denom": "ATOM",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
            "currentChainId": "ethereum"
        },
        "0x59e0499554Cdcdfa90CCd96532e5aD5883a2a956": {
            "chainId": "stargaze-1",
            "decimals": 6,
            "minimalDenom": "transfer/channel-2/transfer/channel-6/ustars",
            "denom": "STARS",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
            "currentChainId": "ethereum"
        }
    },
    "polkadot": {
        "1": {
            "chainId": "centauri-1",
            "decimals": 12,
            "minimalDenom": "ppica",
            "denom": "PICA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
            "currentChainId": "2087"
        },
        "2": {
            "chainId": "2087",
            "decimals": 18,
            "minimalDenom": "2",
            "denom": "ETH",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ETH.svg",
            "ratio": {
                "n": "19",
                "d": "100"
            },
            "currentChainId": "2087"
        },
        "3": {
            "chainId": "2087",
            "decimals": 9,
            "minimalDenom": "3",
            "denom": "wSOL",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/wSOL.svg",
            "ratio": {
                "n": "8350000",
                "d": "1"
            },
            "currentChainId": "2087"
        },
        "4": {
            "chainId": "1000",
            "decimals": 12,
            "minimalDenom": "4",
            "denom": "KSM",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/KSM.svg",
            "ratio": {
                "n": "70",
                "d": "10000"
            },
            "currentChainId": "2087"
        },
        "6": {
            "chainId": "polkadot",
            "decimals": 10,
            "minimalDenom": "6",
            "denom": "DOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/DOT.svg",
            "ratio": {
                "n": "3",
                "d": "10000"
            },
            "currentChainId": "2087"
        },
        "7": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "7",
            "denom": "ATOM",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/atom.svg",
            "ratio": {
                "n": "2",
                "d": "100000000"
            },
            "currentChainId": "2087"
        },
        "8": {
            "chainId": "osmosis-1",
            "decimals": 6,
            "minimalDenom": "uosmo",
            "denom": "OSMO",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
            "ratio": {
                "n": "3",
                "d": "10000000"
            },
            "currentChainId": "2087"
        },
        "9": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "ustrd",
            "denom": "STRD",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
            "ratio": {
                "n": "18",
                "d": "100000000"
            },
            "currentChainId": "2087"
        },
        "10": {
            "chainId": "stride-1",
            "decimals": 6,
            "minimalDenom": "stuatom",
            "denom": "stATOM",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/stuatom.png",
            "ratio": {
                "n": "18",
                "d": "1000000000"
            },
            "currentChainId": "2087"
        },
        "11": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "11",
            "denom": "STARS",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/STARS.png",
            "ratio": {
                "n": "18",
                "d": "1000000"
            },
            "currentChainId": "2087"
        },
        "12": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "12",
            "denom": "NTRN",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/NTRN.svg",
            "ratio": {
                "n": "5",
                "d": "10000000"
            },
            "currentChainId": "2087"
        },
        "13": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "13",
            "denom": "CRE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/cre.svg",
            "ratio": {
                "n": "1",
                "d": "100000"
            },
            "currentChainId": "2087"
        },
        "14": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "14",
            "denom": "bCRE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/bCRE.svg",
            "ratio": {
                "n": "1",
                "d": "100000"
            },
            "currentChainId": "2087"
        },
        "15": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "15",
            "denom": "SCRT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/SCRT.svg",
            "ratio": {
                "n": "6",
                "d": "10000000"
            },
            "currentChainId": "2087"
        },
        "16": {
            "chainId": "secret-4",
            "decimals": 6,
            "minimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
            "denom": "SILK",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/silk.svg",
            "ratio": {
                "n": "2",
                "d": "1000000"
            },
            "currentChainId": "2087"
        },
        "17": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "17",
            "denom": "UMEE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/umee.svg",
            "ratio": {
                "n": "5",
                "d": "100000"
            },
            "currentChainId": "2087"
        },
        "18": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "ubld",
            "denom": "BLD",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
            "ratio": {
                "n": "12",
                "d": "10000000"
            },
            "currentChainId": "2087"
        },
        "19": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "19",
            "denom": "TIA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/TIA.svg",
            "ratio": {
                "n": "85",
                "d": "1000000000"
            },
            "currentChainId": "2087"
        },
        "23": {
            "chainId": "2023",
            "decimals": 18,
            "minimalDenom": "23",
            "denom": "MOVR",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/MOVR.svg",
            "currentChainId": "2087"
        },
        "24": {
            "chainId": "2087",
            "decimals": 18,
            "minimalDenom": "24",
            "denom": "INJ",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/INJ.svg",
            "ratio": {
                "n": "12500",
                "d": "1"
            },
            "currentChainId": "2087"
        },
        "25": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "uist",
            "denom": "IST",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
            "ratio": {
                "n": "2",
                "d": "1000000"
            },
            "currentChainId": "2087"
        },
        "27": {
            "chainId": "2087",
            "decimals": 10,
            "minimalDenom": "27",
            "denom": "lsDOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/lsdot.svg",
            "ratio": {
                "n": "29",
                "d": "100000"
            },
            "currentChainId": "2087"
        },
        "28": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "28",
            "denom": "KUJI",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/KUJI.svg",
            "ratio": {
                "n": "3",
                "d": "50000000"
            },
            "currentChainId": "2087"
        },
        "29": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "29",
            "denom": "QCK",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/QCK.svg",
            "ratio": {
                "n": "1",
                "d": "30"
            },
            "currentChainId": "2087"
        },
        "31": {
            "chainId": "2087",
            "decimals": 12,
            "minimalDenom": "31",
            "denom": "BNC_KSM",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BNC_KSM.svg",
            "ratio": {
                "n": "11",
                "d": "10"
            },
            "currentChainId": "2087"
        },
        "32": {
            "chainId": "2087",
            "decimals": 12,
            "minimalDenom": "32",
            "denom": "vKSM",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/vKSM.svg",
            "ratio": {
                "n": "8",
                "d": "1000"
            },
            "currentChainId": "2087"
        },
        "33": {
            "chainId": "2087",
            "decimals": 18,
            "minimalDenom": "33",
            "denom": "ASTR",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ASTR.svg",
            "ratio": {
                "n": "4713901",
                "d": "1"
            },
            "currentChainId": "2087"
        },
        "34": {
            "chainId": "2087",
            "decimals": 10,
            "minimalDenom": "34",
            "denom": "vDOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/vDOT.svg",
            "ratio": {
                "n": "4",
                "d": "10000"
            },
            "currentChainId": "2087"
        },
        "35": {
            "chainId": "pacific-1",
            "decimals": 6,
            "minimalDenom": "usei",
            "denom": "SEI",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg",
            "ratio": {
                "n": "143",
                "d": "100000000"
            },
            "currentChainId": "2087"
        },
        "40": {
            "chainId": "2087",
            "decimals": 18,
            "minimalDenom": "40",
            "denom": "GLMR",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/GLMR.svg",
            "ratio": {
                "n": "400000",
                "d": "1"
            },
            "currentChainId": "2087"
        },
        "44": {
            "chainId": "2087",
            "decimals": 12,
            "minimalDenom": "44",
            "denom": "AMPE",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/AMPE.svg",
            "ratio": {
                "n": "1",
                "d": "8"
            },
            "currentChainId": "2087"
        },
        "45": {
            "chainId": "2087",
            "decimals": 12,
            "minimalDenom": "45",
            "denom": "XLM",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/XLM.svg",
            "ratio": {
                "n": "5",
                "d": "1"
            },
            "currentChainId": "2087"
        },
        "129": {
            "chainId": "2087",
            "decimals": 12,
            "minimalDenom": "129",
            "denom": "Karura Dollar",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/karura.webp",
            "ratio": {
                "n": "1",
                "d": "1"
            },
            "currentChainId": "2087"
        },
        "130": {
            "chainId": "1000",
            "decimals": 6,
            "minimalDenom": "130",
            "denom": "USDT Kusama",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDTkusama.svg",
            "currentChainId": "2087"
        },
        "149": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "149",
            "denom": "USDT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDT.svg",
            "ratio": {
                "n": "1",
                "d": "5000000"
            },
            "currentChainId": "2087"
        },
        "150": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "150",
            "denom": "USDC",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDC.svg",
            "ratio": {
                "n": "1",
                "d": "5000000"
            },
            "currentChainId": "2087"
        },
        "420": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "420",
            "denom": "HUAHUA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/huahua.svg",
            "ratio": null,
            "currentChainId": "2087"
        },
        "2007": {
            "chainId": "2087",
            "decimals": 18,
            "minimalDenom": "2007",
            "denom": "SDN",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/SDN.svg",
            "ratio": {
                "n": "1000000",
                "d": "1"
            },
            "currentChainId": "2087"
        },
        "2011": {
            "chainId": "2087",
            "decimals": 9,
            "minimalDenom": "2011",
            "denom": "Equilibrium",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/EQUILIBRIUM.svg",
            "ratio": {
                "n": "7",
                "d": "10"
            },
            "currentChainId": "2087"
        },
        "2125": {
            "chainId": "2087",
            "decimals": 12,
            "minimalDenom": "2125",
            "denom": "TNKR",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/TNKR.svg",
            "ratio": {
                "n": "3",
                "d": "100"
            },
            "currentChainId": "2087"
        },
        "79228162514264337593543952342": {
            "chainId": "2087",
            "decimals": 18,
            "minimalDenom": "79228162514264337593543952342",
            "denom": "ASTR",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ASTR.svg",
            "ratio": {
                "n": "4713901",
                "d": "1"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950369": {
            "chainId": "2019",
            "decimals": 12,
            "minimalDenom": "79228162514264337593543950369",
            "denom": "BNC_DOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BNC_DOT.svg",
            "ratio": {
                "n": "11",
                "d": "1000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950370": {
            "chainId": "2087",
            "decimals": 10,
            "minimalDenom": "79228162514264337593543950370",
            "denom": "vDOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/vDOT.svg",
            "ratio": {
                "n": "4",
                "d": "10000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950337": {
            "chainId": "2087",
            "decimals": 12,
            "minimalDenom": "79228162514264337593543950337",
            "denom": "PICA",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
            "ratio": null,
            "currentChainId": "2019"
        },
        "79228162514264337593543950485": {
            "chainId": "2087",
            "decimals": 6,
            "minimalDenom": "79228162514264337593543950485",
            "denom": "USDT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDT.svg",
            "ratio": {
                "n": "1",
                "d": "5000000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950342": {
            "chainId": "polkadot",
            "decimals": 10,
            "minimalDenom": "79228162514264337593543950342",
            "denom": "DOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/DOT.svg",
            "ratio": {
                "n": "3",
                "d": "10000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950351": {
            "chainId": "2087",
            "decimals": 10,
            "minimalDenom": "79228162514264337593543950351",
            "denom": "lsDOT",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/lsdot.svg",
            "ratio": {
                "n": "29",
                "d": "100000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950486": {
            "chainId": "2019",
            "decimals": 6,
            "minimalDenom": "79228162514264337593543950486",
            "denom": "USDC",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/USDC.svg",
            "ratio": {
                "n": "1",
                "d": "5000000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950354": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "ubld",
            "denom": "BLD",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
            "ratio": {
                "n": "12",
                "d": "10000000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950361": {
            "chainId": "agoric-3",
            "decimals": 6,
            "minimalDenom": "uist",
            "denom": "IST",
            "imageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/uist.png",
            "ratio": {
                "n": "2",
                "d": "1000000"
            },
            "currentChainId": "2019"
        },
        "79228162514264337593543950376": {
            "chainId": "2004",
            "decimals": 18,
            "minimalDenom": "79228162514264337593543950376",
            "denom": "GLMR",
            "imageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/GLMR.svg",
            "currentChainId": "2019"
        }
    }
};


/***/ }),

/***/ 1902:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ethereumAssets = void 0;
exports.ethereumAssets = {
    "DOT": {
        "erc20Address": "0x21c2c96Dbfa137E23946143c71AC8330F9B44001",
        "cosmosToEthereumFee": 2.5,
        "minimumTransfer": 5
    },
    "KSM": {
        "erc20Address": "0xB44D6C324A6c15127F1451465f1E1DbC39142A60",
        "cosmosToEthereumFee": 0.6,
        "minimumTransfer": 1
    },
    "SEI": {
        "erc20Address": "0x013AdDc6512432304c055CEc20bbb0f6AA5ed7d5",
        "cosmosToEthereumFee": 27,
        "minimumTransfer": 50
    },
    "SILK": {
        "erc20Address": "0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 50
    },
    "STRD": {
        "erc20Address": "0x3f8Bb8634Ca4A61Aa23cd0DF00C3152E0eaF9587",
        "cosmosToEthereumFee": 15,
        "minimumTransfer": 30
    },
    "BLD": {
        "erc20Address": "0xfd11E3564691A99bF56A3545A86Af2aEb8416CA1",
        "cosmosToEthereumFee": 215,
        "minimumTransfer": 400
    },
    "OSMO": {
        "erc20Address": "0x9243b3615ed297403c0cafa156c3fa16057526ca",
        "cosmosToEthereumFee": 23,
        "minimumTransfer": 40
    },
    "stATOM": {
        "erc20Address": "0xA534115DA1C1e51Cb2C6E8bC1fBA23A5189a1de2",
        "cosmosToEthereumFee": 2.5,
        "minimumTransfer": 5
    },
    "IST": {
        "erc20Address": "0x7d1b634d825221E8d8f619c5FA06a3F57dAFd5C6",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "ETH": {
        "erc20Address": "ETH",
        "cosmosToEthereumFee": 0.004,
        "minimumTransfer": 0.01
    },
    "DAI": {
        "erc20Address": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "FXS": {
        "erc20Address": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0",
        "cosmosToEthereumFee": 5.3,
        "minimumTransfer": 10
    },
    "sFRAX": {
        "erc20Address": "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "sfrxETH": {
        "erc20Address": "0xac3e018457b222d93114458476f3e3416abbe38f",
        "cosmosToEthereumFee": 0.004,
        "minimumTransfer": 0.01
    },
    "ENA": {
        "erc20Address": "0x57e114b691db790c35207b2e685d4a43181e6061",
        "cosmosToEthereumFee": 27,
        "minimumTransfer": 50
    },
    "FRAX": {
        "erc20Address": "0x853d955acef822db058eb8505911ed77f175b99e",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "frxETH": {
        "erc20Address": "0x5e8422345238f34275888049021821e8e08caa1f",
        "cosmosToEthereumFee": 0.004,
        "minimumTransfer": 0.01
    },
    "wBTC": {
        "erc20Address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "cosmosToEthereumFee": 0.00015,
        "minimumTransfer": 0.0003
    },
    "stETH": {
        "erc20Address": "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
        "cosmosToEthereumFee": 0.0055,
        "minimumTransfer": 0.01
    },
    "rETH": {
        "erc20Address": "0xae78736cd615f374d3085123a210448e74fc6393",
        "cosmosToEthereumFee": 0.0035,
        "minimumTransfer": 0.007
    },
    "crvUSD": {
        "erc20Address": "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "pxETH": {
        "erc20Address": "0x04c154b66cb340f3ae24111cc767e0184ed00cc6",
        "cosmosToEthereumFee": 0.004,
        "minimumTransfer": 0.01
    },
    "eETH": {
        "erc20Address": "0x35fa164735182de50811e8e2e824cfb9b6118ac2",
        "cosmosToEthereumFee": 0.004,
        "minimumTransfer": 0.01
    },
    "ezETH": {
        "erc20Address": "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
        "cosmosToEthereumFee": 0.004,
        "minimumTransfer": 0.01
    },
    "USDe": {
        "erc20Address": "0x4c9edd5852cd905f086c759e8383e09bff1e68b3",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "PEPE": {
        "erc20Address": "0x6982508145454ce325ddbe47a25d4ec3d2311933",
        "cosmosToEthereumFee": 1000000,
        "minimumTransfer": 2000000
    },
    "USDT Ethereum": {
        "erc20Address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "CRV": {
        "erc20Address": "0xd533a949740bb3306d119cc777fa900ba034cd52",
        "cosmosToEthereumFee": 40,
        "minimumTransfer": 80
    },
    "JitoSOL": {
        "erc20Address": "0xBe90556468e5eE2A15Da99a5C0e045ED0B142143",
        "cosmosToEthereumFee": 0.025,
        "minimumTransfer": 0.2
    },
    "mSOL": {
        "erc20Address": "0xDa7Fa7248F62e051ccA4Af2522439A61d3976462",
        "cosmosToEthereumFee": 0.023,
        "minimumTransfer": 0.2
    },
    "bSOL": {
        "erc20Address": "0xc0732030f4DB63cfE0323dd87b497AE4Ecb43CEc",
        "cosmosToEthereumFee": 0.024,
        "minimumTransfer": 0.2
    },
    "LST": {
        "erc20Address": "0x247dB9746755CF119d3AD68A6f8f60E7E650BFa1",
        "cosmosToEthereumFee": 0.024,
        "minimumTransfer": 0.2
    },
    "edgeSOL": {
        "erc20Address": "0x3d078B97918eDe947aF59E679eceF9fd87C32082",
        "cosmosToEthereumFee": 0.024,
        "minimumTransfer": 0.2
    },
    "jupSOL": {
        "erc20Address": "0x5cD8cd3c5e8780cCBc74277f22b099FEFd04F5ef",
        "cosmosToEthereumFee": 0.024,
        "minimumTransfer": 0.2
    },
    "hSOL": {
        "erc20Address": "0x963b37d30eee26d0D94C1E5a42Aa5B1371494cA2",
        "cosmosToEthereumFee": 0.05,
        "minimumTransfer": 0.2
    },
    "wSOL": {
        "erc20Address": "0xd1D82d3Ab815E0B47e38EC2d666c5b8AA05Ae501",
        "cosmosToEthereumFee": 0.028,
        "minimumTransfer": 0.2
    },
    "WIF": {
        "erc20Address": "0xCF7e6742266aD5a76ee042e26d3F766c34195E5f",
        "cosmosToEthereumFee": 2,
        "minimumTransfer": 9
    },
    "BONK": {
        "erc20Address": "0x4aeF9BD3fBb09d8f374436D9ec25711A1Be9BaCb",
        "cosmosToEthereumFee": 240000,
        "minimumTransfer": 1200000
    },
    "USDT Solana": {
        "erc20Address": "0x58efE15C0404aB22F87E4495D71f6f2077e862bE",
        "cosmosToEthereumFee": 5,
        "minimumTransfer": 30
    },
    "ARCH": {
        "erc20Address": "0xA88bB3EB033F359FeF934Dd3b4b753847318072C",
        "cosmosToEthereumFee": 315,
        "minimumTransfer": 600
    },
    "PICA": {
        "erc20Address": "0xbb63a9b64a80e9338b8ea298c51765e57c4f159c",
        "cosmosToEthereumFee": 24000,
        "minimumTransfer": 50000
    },
    "XRP": {
        "erc20Address": "0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24",
        "cosmosToEthereumFee": 20,
        "minimumTransfer": 94
    },
    "COREUM": {
        "erc20Address": "0x9e0F65F56120FCaebe2c0675377332Ec60ABB1aC",
        "cosmosToEthereumFee": 165,
        "minimumTransfer": 490
    },
    "SCRT": {
        "erc20Address": "0xF7F00d598b2a651404993E93Df7AE16C3C736F3C",
        "cosmosToEthereumFee": 50,
        "minimumTransfer": 100
    },
    "SHD": {
        "erc20Address": "0x11539A7931c82191aF65406bA986BF5B90a3f5E4",
        "cosmosToEthereumFee": 10,
        "minimumTransfer": 20
    },
    "ATOM": {
        "erc20Address": "0x519ddEff5d142Fc177d95F24952eF3D2EDe530BC",
        "cosmosToEthereumFee": 2.25,
        "minimumTransfer": 5
    },
    "STARS": {
        "erc20Address": "0x59e0499554Cdcdfa90CCd96532e5aD5883a2a956",
        "cosmosToEthereumFee": 16000,
        "minimumTransfer": 30000
    }
};


/***/ }),

/***/ 1218:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ibcICS20ChannelMap = void 0;
exports.ibcICS20ChannelMap = {
    'centauri-1': {
        26: {
            chainId: 'secret-4',
            id: 83,
        },
    },
    'secret-4': {
        83: {
            chainId: 'centauri-1',
            id: 26,
        },
    },
};


/***/ }),

/***/ 6288:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(5020), exports);
__exportStar(__webpack_require__(2886), exports);
__exportStar(__webpack_require__(1902), exports);
__exportStar(__webpack_require__(5523), exports);
__exportStar(__webpack_require__(3322), exports);
__exportStar(__webpack_require__(6985), exports);
__exportStar(__webpack_require__(7273), exports);
__exportStar(__webpack_require__(4624), exports);
__exportStar(__webpack_require__(1218), exports);


/***/ }),

/***/ 4624:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keplrChains = void 0;
exports.keplrChains = {
    "injective-1": {
        "bech32Config": {
            "bech32PrefixAccPub": "injpub",
            "bech32PrefixValPub": "injvaloperpub",
            "bech32PrefixAccAddr": "inj",
            "bech32PrefixConsPub": "injvalconspub",
            "bech32PrefixValAddr": "injvaloper",
            "bech32PrefixConsAddr": "injvalcons"
        },
        "bip44": {
            "coinType": 60
        },
        "chainId": "injective-1",
        "chainName": "Injective",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png",
        "currencies": [
            {
                "coinDecimals": 18,
                "coinDenom": "INJ",
                "coinGeckoId": "injective-protocol",
                "coinMinimalDenom": "inj"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 18,
                "coinDenom": "INJ",
                "coinGeckoId": "injective-protocol",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png",
                "gasPriceStep": {
                    "low": 500000000,
                    "average": 1000000000,
                    "high": 1500000000
                },
                "coinMinimalDenom": "inj"
            }
        ],
        "rest": "https://injective-api.polkachu.com",
        "rpc": "https://injective-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 18,
            "coinDenom": "INJ",
            "coinGeckoId": "injective-protocol",
            "coinMinimalDenom": "inj",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/inj.png"
        }
    },
    "celestia": {
        "bech32Config": {
            "bech32PrefixAccAddr": "celestia",
            "bech32PrefixAccPub": "celestiapub",
            "bech32PrefixConsAddr": "celestiavalcons",
            "bech32PrefixConsPub": "celestiavalconspub",
            "bech32PrefixValAddr": "celestiavaloper",
            "bech32PrefixValPub": "celestiavaloperpub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "celestia",
        "chainName": "Celestia",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "TIA",
                "coinGeckoId": "celestia",
                "coinMinimalDenom": "utia"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "TIA",
                "coinGeckoId": "celestia",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
                "gasPriceStep": {
                    "low": 0.01,
                    "average": 0.02,
                    "high": 0.1
                },
                "coinMinimalDenom": "utia"
            }
        ],
        "rest": "https://api.celestia.nodestake.top",
        "rpc": "https://rpc.celestia.nodestake.top",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "TIA",
            "coinGeckoId": "celestia",
            "coinMinimalDenom": "utia",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/celestia"
    },
    "archway-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "archway",
            "bech32PrefixAccPub": "archwaypub",
            "bech32PrefixConsAddr": "archwayvalcons",
            "bech32PrefixConsPub": "archwayvalconspub",
            "bech32PrefixValAddr": "archwayvaloper",
            "bech32PrefixValPub": "archwayvaloperpub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "archway-1",
        "chainName": "Archway",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/chain.png",
        "currencies": [
            {
                "coinDecimals": 18,
                "coinDenom": "ARCH",
                "coinGeckoId": "archway",
                "coinMinimalDenom": "aarch"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 18,
                "coinDenom": "ARCH",
                "coinGeckoId": "archway",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png",
                "gasPriceStep": {
                    "low": 140000000000,
                    "average": 196000000000,
                    "high": 225400000000
                },
                "coinMinimalDenom": "aarch"
            }
        ],
        "rest": "https://api.mainnet.archway.io",
        "rpc": "https://rpc.mainnet.archway.io",
        "stakeCurrency": {
            "coinDecimals": 18,
            "coinDenom": "ARCH",
            "coinGeckoId": "archway",
            "coinMinimalDenom": "aarch",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/aarch.png"
        }
    },
    "centauri-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "pica",
            "bech32PrefixAccPub": "picapub",
            "bech32PrefixValAddr": "picavaloper",
            "bech32PrefixValPub": "picavaloperpub",
            "bech32PrefixConsAddr": "picavalcons",
            "bech32PrefixConsPub": "picavalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "centauri-1",
        "chainName": "Picasso",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
        "currencies": [
            {
                "coinDecimals": 12,
                "coinDenom": "PICA",
                "coinGeckoId": "picasso",
                "coinMinimalDenom": "ppica"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 12,
                "coinDenom": "PICA",
                "coinGeckoId": "picasso",
                "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
                "gasPriceStep": {
                    "low": 0,
                    "average": 0,
                    "high": 0
                },
                "coinMinimalDenom": "ppica"
            }
        ],
        "rest": "https://picasso-api.polkachu.com",
        "rpc": "https://picasso-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 12,
            "coinDenom": "PICA",
            "coinGeckoId": "picasso",
            "coinMinimalDenom": "ppica",
            "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg"
        },
        "walletUrlForStaking": "https://explorer.nodestake.top/composable"
    },
    "chihuahua-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "chihuahua",
            "bech32PrefixAccPub": "chihuahuapub",
            "bech32PrefixValAddr": "chihuahuavaloper",
            "bech32PrefixValPub": "chihuahuavaloperpub",
            "bech32PrefixConsAddr": "chihuahuavalcons",
            "bech32PrefixConsPub": "chihuahuavalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "chihuahua-1",
        "chainName": "Chihuahua",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "HUAHUA",
                "coinGeckoId": "chihuahua-token",
                "coinMinimalDenom": "uhuahua"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "HUAHUA",
                "coinGeckoId": "chihuahua-token",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
                "gasPriceStep": {
                    "low": 500,
                    "average": 1250,
                    "high": 2000
                },
                "coinMinimalDenom": "uhuahua"
            }
        ],
        "rest": "https://chihuahua-api.polkachu.com",
        "rpc": "https://chihuahua-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "HUAHUA",
            "coinGeckoId": "chihuahua-token",
            "coinMinimalDenom": "uhuahua",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/chihuahua"
    },
    "coreum-mainnet-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "core",
            "bech32PrefixAccPub": "corepub",
            "bech32PrefixValAddr": "corevaloper",
            "bech32PrefixValPub": "corevaloperpub",
            "bech32PrefixConsAddr": "corevalcons",
            "bech32PrefixConsPub": "corevalconspub"
        },
        "bip44": {
            "coinType": 990
        },
        "chainId": "coreum-mainnet-1",
        "chainName": "Coreum",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "XRP",
                "coinGeckoId": "ripple",
                "coinMinimalDenom": "drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "COREUM",
                "coinGeckoId": "coreum",
                "coinMinimalDenom": "ucore"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "COREUM",
                "coinGeckoId": "coreum",
                "gasPriceStep": {
                    "low": 0.0625,
                    "average": 0.0625,
                    "high": 0.0625
                },
                "coinMinimalDenom": "ucore"
            }
        ],
        "rest": "https://rest-coreum.ecostake.com",
        "rpc": "https://full-node.mainnet-1.coreum.dev:26657",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "COREUM",
            "coinGeckoId": "coreum",
            "coinMinimalDenom": "ucore"
        }
    },
    "kaiyo-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "kujira",
            "bech32PrefixAccPub": "kujirapub",
            "bech32PrefixValAddr": "kujiravaloper",
            "bech32PrefixValPub": "kujiravaloperpub",
            "bech32PrefixConsAddr": "kujiravalcons",
            "bech32PrefixConsPub": "kujiravalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "kaiyo-1",
        "chainName": "Kujira",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "KUJI",
                "coinGeckoId": "kujira",
                "coinMinimalDenom": "ukuji"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "KUJI",
                "coinGeckoId": "kujira",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png",
                "coinMinimalDenom": "ukuji"
            }
        ],
        "rest": "https://kujira-api.polkachu.com",
        "rpc": "https://kujira-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "KUJI",
            "coinGeckoId": "kujira",
            "coinMinimalDenom": "ukuji",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/ukuji.png"
        }
    },
    "quicksilver-2": {
        "bech32Config": {
            "bech32PrefixAccAddr": "quick",
            "bech32PrefixAccPub": "quickpub",
            "bech32PrefixValAddr": "quickvaloper",
            "bech32PrefixValPub": "quickvaloperpub",
            "bech32PrefixConsAddr": "quickvalcons",
            "bech32PrefixConsPub": "quickvalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "quicksilver-2",
        "chainName": "Quicksilver",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "QCK",
                "coinGeckoId": "quicksilver",
                "coinMinimalDenom": "uqck"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "QCK",
                "coinGeckoId": "quicksilver",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png",
                "gasPriceStep": {
                    "low": 0.0001,
                    "average": 0.0001,
                    "high": 0.00025
                },
                "coinMinimalDenom": "uqck"
            }
        ],
        "rest": "https://quicksilver-api.polkachu.com",
        "rpc": "https://quicksilver-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "QCK",
            "coinGeckoId": "quicksilver",
            "coinMinimalDenom": "uqck",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/uqck.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/quicksilver"
    },
    "secret-4": {
        "bech32Config": {
            "bech32PrefixAccAddr": "secret",
            "bech32PrefixAccPub": "secretpub",
            "bech32PrefixValAddr": "secretvaloper",
            "bech32PrefixValPub": "secretvaloperpub",
            "bech32PrefixConsAddr": "secretvalcons",
            "bech32PrefixConsPub": "secretvalconspub"
        },
        "bip44": {
            "coinType": 529
        },
        "chainId": "secret-4",
        "chainName": "Secret Network",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "SCRT",
                "coinGeckoId": "secret",
                "coinMinimalDenom": "uscrt"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "SILK",
                "coinGeckoId": "silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2",
                "coinMinimalDenom": "cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd"
            },
            {
                "coinDecimals": 8,
                "coinDenom": "SHD",
                "coinGeckoId": "shade-protocol",
                "coinMinimalDenom": "cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "SCRT",
                "coinGeckoId": "secret",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png",
                "coinMinimalDenom": "uscrt"
            }
        ],
        "rest": "https://lcd.mainnet.secretsaturn.net",
        "rpc": "https://scrt.public-rpc.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "SCRT",
            "coinGeckoId": "secret",
            "coinMinimalDenom": "uscrt",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/uscrt.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/secret-network"
    },
    "pacific-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "sei",
            "bech32PrefixAccPub": "seipub",
            "bech32PrefixValAddr": "seivaloper",
            "bech32PrefixValPub": "seivaloperpub",
            "bech32PrefixConsAddr": "seivalcons",
            "bech32PrefixConsPub": "seivalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "pacific-1",
        "chainName": "Sei",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/chains/sei.svg",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "SEI",
                "coinGeckoId": "sei-network",
                "coinMinimalDenom": "usei"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "SEI",
                "coinGeckoId": "sei-network",
                "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg",
                "gasPriceStep": {
                    "low": 0.1,
                    "average": 0.2,
                    "high": 0.3
                },
                "coinMinimalDenom": "usei"
            }
        ],
        "rest": "https://sei-api.polkachu.com",
        "rpc": "https://sei-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "SEI",
            "coinGeckoId": "sei-network",
            "coinMinimalDenom": "usei",
            "coinImageUrl": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/sei.svg"
        }
    },
    "agoric-3": {
        "bech32Config": {
            "bech32PrefixAccAddr": "agoric",
            "bech32PrefixAccPub": "agoricpub",
            "bech32PrefixValAddr": "agoricvaloper",
            "bech32PrefixValPub": "agoricvaloperpub",
            "bech32PrefixConsAddr": "agoricvalcons",
            "bech32PrefixConsPub": "agoricvalconspub"
        },
        "bip44": {
            "coinType": 564
        },
        "chainId": "agoric-3",
        "chainName": "Agoric",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "BLD",
                "coinGeckoId": "agoric",
                "coinMinimalDenom": "ubld"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "IST",
                "coinGeckoId": "inter-stable-token",
                "coinMinimalDenom": "uist"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "BLD",
                "coinGeckoId": "agoric",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png",
                "gasPriceStep": {
                    "low": 0.03,
                    "average": 0.05,
                    "high": 0.07
                },
                "coinMinimalDenom": "ubld"
            }
        ],
        "rest": "https://agoric-api.polkachu.com",
        "rpc": "https://agoric-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "BLD",
            "coinGeckoId": "agoric",
            "coinMinimalDenom": "ubld",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/ubld.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/agoric"
    },
    "cosmoshub-4": {
        "bech32Config": {
            "bech32PrefixAccAddr": "cosmos",
            "bech32PrefixAccPub": "cosmospub",
            "bech32PrefixConsAddr": "cosmosvalcons",
            "bech32PrefixConsPub": "cosmosvalconspub",
            "bech32PrefixValAddr": "cosmosvaloper",
            "bech32PrefixValPub": "cosmosvaloperpub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "cosmoshub-4",
        "chainName": "Cosmos Hub",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "ATOM",
                "coinGeckoId": "cosmos",
                "coinMinimalDenom": "uatom"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "ATOM",
                "coinGeckoId": "cosmos",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png",
                "gasPriceStep": {
                    "average": 0.025,
                    "high": 0.03,
                    "low": 0.005
                },
                "coinMinimalDenom": "uatom"
            }
        ],
        "rest": "https://cosmos-api.polkachu.com",
        "rpc": "https://cosmos-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "ATOM",
            "coinGeckoId": "cosmos",
            "coinMinimalDenom": "uatom",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/uatom.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/cosmos-hub"
    },
    "crescent-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "cre",
            "bech32PrefixAccPub": "crepub",
            "bech32PrefixValAddr": "crevaloper",
            "bech32PrefixValPub": "crevaloperpub",
            "bech32PrefixConsAddr": "crevalcons",
            "bech32PrefixConsPub": "crevalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "crescent-1",
        "chainName": "Crescent Network",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crescent/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "CRE",
                "coinGeckoId": "crescent-network",
                "coinMinimalDenom": "ucre"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "bCRE",
                "coinGeckoId": "liquid-staking-crescent",
                "coinMinimalDenom": "ubcre"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "CRE",
                "coinGeckoId": "crescent-network",
                "gasPriceStep": {
                    "low": 0.01,
                    "average": 0.025,
                    "high": 0.03
                },
                "coinMinimalDenom": "ucre"
            }
        ],
        "rest": "https://crescent-api.polkachu.com",
        "rpc": "https://crescent-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "CRE",
            "coinGeckoId": "crescent-network",
            "coinMinimalDenom": "ucre"
        },
        "walletUrlForStaking": "https://app.crescent.network/staking"
    },
    "neutron-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "neutron",
            "bech32PrefixAccPub": "neutronpub",
            "bech32PrefixValAddr": "neutronvaloper",
            "bech32PrefixValPub": "neutronvaloperpub",
            "bech32PrefixConsAddr": "neutronvalcons",
            "bech32PrefixConsPub": "neutronvalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "neutron-1",
        "chainName": "Neutron",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "ASTRO",
                "coinGeckoId": "astroport-fi",
                "coinMinimalDenom": "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "NTRN",
                "coinGeckoId": "neutron-3",
                "coinMinimalDenom": "untrn"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "NTRN",
                "coinGeckoId": "neutron-3",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png",
                "gasPriceStep": {
                    "low": 0.0008,
                    "average": 0.0008,
                    "high": 0.0008
                },
                "coinMinimalDenom": "untrn"
            }
        ],
        "rest": "https://neutron-api.polkachu.com",
        "rpc": "https://neutron-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "NTRN",
            "coinGeckoId": "neutron-3",
            "coinMinimalDenom": "untrn",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png"
        }
    },
    "osmosis-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "osmo",
            "bech32PrefixAccPub": "osmopub",
            "bech32PrefixValAddr": "osmovaloper",
            "bech32PrefixValPub": "osmovaloperpub",
            "bech32PrefixConsAddr": "osmovalcons",
            "bech32PrefixConsPub": "osmovalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "osmosis-1",
        "chainName": "Osmosis",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "OSMO",
                "coinGeckoId": "osmosis",
                "coinMinimalDenom": "uosmo"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "milkTIA",
                "coinGeckoId": "milkyway-staked-tia",
                "coinMinimalDenom": "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "OSMO",
                "coinGeckoId": "osmosis",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png",
                "gasPriceStep": {
                    "low": 0.0025,
                    "average": 0.025,
                    "high": 0.04
                },
                "coinMinimalDenom": "uosmo"
            }
        ],
        "rest": "https://osmosis-api.polkachu.com",
        "rpc": "https://osmosis-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "OSMO",
            "coinGeckoId": "osmosis",
            "coinMinimalDenom": "uosmo",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/uosmo.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/osmosis"
    },
    "stargaze-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "stars",
            "bech32PrefixAccPub": "starspub",
            "bech32PrefixValAddr": "starsvaloper",
            "bech32PrefixValPub": "starsvaloperpub",
            "bech32PrefixConsAddr": "starsvalcons",
            "bech32PrefixConsPub": "starsvalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "stargaze-1",
        "chainName": "Stargaze",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "STARS",
                "coinGeckoId": "stargaze",
                "coinMinimalDenom": "ustars"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "STARS",
                "coinGeckoId": "stargaze",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png",
                "gasPriceStep": {
                    "low": 1,
                    "average": 1.1,
                    "high": 1.2
                },
                "coinMinimalDenom": "ustars"
            }
        ],
        "rest": "https://stargaze-api.polkachu.com",
        "rpc": "https://stargaze-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "STARS",
            "coinGeckoId": "stargaze",
            "coinMinimalDenom": "ustars",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/ustars.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/stargaze"
    },
    "stride-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "stride",
            "bech32PrefixAccPub": "stridepub",
            "bech32PrefixValAddr": "stridevaloper",
            "bech32PrefixValPub": "stridevaloperpub",
            "bech32PrefixConsAddr": "stridevalcons",
            "bech32PrefixConsPub": "stridevalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "stride-1",
        "chainName": "Stride",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "stTIA",
                "coinGeckoId": "stride-staked-tia",
                "coinMinimalDenom": "stutia"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "STRD",
                "coinGeckoId": "stride",
                "coinMinimalDenom": "ustrd"
            },
            {
                "coinDecimals": 6,
                "coinDenom": "stATOM",
                "coinGeckoId": "stride-staked-atom",
                "coinMinimalDenom": "stuatom"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "STRD",
                "coinGeckoId": "stride",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png",
                "gasPriceStep": {
                    "low": 0.005,
                    "average": 0.005,
                    "high": 0.05
                },
                "coinMinimalDenom": "ustrd"
            }
        ],
        "rest": "https://stride-api.polkachu.com",
        "rpc": "https://stride-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "STRD",
            "coinGeckoId": "stride",
            "coinMinimalDenom": "ustrd",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/ustrd.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/stride"
    },
    "umee-1": {
        "bech32Config": {
            "bech32PrefixAccAddr": "umee",
            "bech32PrefixAccPub": "umeepub",
            "bech32PrefixValAddr": "umeevaloper",
            "bech32PrefixValPub": "umeevaloperpub",
            "bech32PrefixConsAddr": "umeevalcons",
            "bech32PrefixConsPub": "umeevalconspub"
        },
        "bip44": {
            "coinType": 118
        },
        "chainId": "umee-1",
        "chainName": "UMEE",
        "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/chain.png",
        "currencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "UMEE",
                "coinGeckoId": "umee",
                "coinMinimalDenom": "uumee"
            }
        ],
        "features": [],
        "feeCurrencies": [
            {
                "coinDecimals": 6,
                "coinDenom": "UMEE",
                "coinGeckoId": "umee",
                "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png",
                "gasPriceStep": {
                    "low": 0.06,
                    "average": 0.1,
                    "high": 0.14
                },
                "coinMinimalDenom": "uumee"
            }
        ],
        "rest": "https://umee-api.polkachu.com",
        "rpc": "https://umee-rpc.polkachu.com",
        "stakeCurrency": {
            "coinDecimals": 6,
            "coinDenom": "UMEE",
            "coinGeckoId": "umee",
            "coinMinimalDenom": "uumee",
            "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/uumee.png"
        },
        "walletUrlForStaking": "https://wallet.keplr.app/chains/umee"
    }
};


/***/ }),

/***/ 6985:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.networks = void 0;
exports.networks = {
    "1000": {
        "name": "Kusama Asset Hub",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/kusamaassethub.svg",
        "rpc": "wss://statemine-rpc.dwellir.com",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "1000",
        "feeAssetId": "4",
        "polkadot": {
            "ss58Format": 2,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "130"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://assethub-kusama.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2001": {
        "name": "BiFrost Kusama",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BiFrostKusama.svg",
        "rpc": "wss://bifrost-rpc.liebi.com/ws",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2001",
        "feeAssetId": "31",
        "polkadot": {
            "ss58Format": 6,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "31",
                        "32"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://bifrost-kusama.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2004": {
        "name": "Moonbeam",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/chains/moonbeam.svg",
        "rpc": "wss://wss.api.moonbeam.network",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2004",
        "feeAssetId": "79228162514264337593543950376",
        "polkadot": {
            "ss58Format": 1284,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543950376"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://moonbeam.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "2006": {
        "name": "astar",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astar.svg",
        "rpc": "wss://rpc.astar.network",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2006",
        "feeAssetId": "79228162514264337593543952342",
        "polkadot": {
            "ss58Format": 5,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543952342"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://astar.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "2007": {
        "name": "Shiden",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/shiden.svg",
        "rpc": "wss://shiden-rpc.dwellir.com",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2007",
        "feeAssetId": "2007",
        "polkadot": {
            "ss58Format": 5,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V3",
                    "tokens": [
                        "2007"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://shiden.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2019": {
        "name": "Composable",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/composable.svg",
        "rpc": "wss://rpc.composable.finance",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2019",
        "feeAssetId": "",
        "polkadot": {
            "ss58Format": 50,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2006": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543952342"
                    ]
                },
                "2030": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543950369",
                        "79228162514264337593543950370"
                    ]
                },
                "polkadot": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V3",
                    "tokens": [
                        "79228162514264337593543950342"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://composable.subscan.io"
            }
        ],
        "network_to": [
            "2006",
            "2030",
            "polkadot",
            "2087"
        ]
    },
    "2023": {
        "name": "Moonriver",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/moonriver.svg",
        "rpc": "wss://moonriver-rpc.dwellir.com",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2023",
        "feeAssetId": "23",
        "polkadot": {
            "ss58Format": 1285,
            "isParachain": true,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "polkadotXcm.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "23"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://moonriver.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "2030": {
        "name": "BiFrost Polkadot",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/BiFrostPolkadot.svg",
        "rpc": "wss://hk.p.bifrost-rpc.liebi.com/ws",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2030",
        "feeAssetId": "79228162514264337593543950369",
        "polkadot": {
            "ss58Format": 6,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "79228162514264337593543950369",
                        "79228162514264337593543950370"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://bifrost.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "2087": {
        "name": "Picasso kusama",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/Picasso.svg",
        "rpc": "wss://picasso-rpc.composable.finance",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "2087",
        "feeAssetId": "",
        "polkadot": {
            "ss58Format": 49,
            "isParachain": true,
            "relayChain": "polkadot",
            "hops": {
                "1000": {
                    "type": "XCM",
                    "xcmType": "xTokens.transferMultiasset",
                    "version": "V3",
                    "tokens": [
                        "130"
                    ]
                },
                "2001": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V2",
                    "tokens": [
                        "31",
                        "32"
                    ]
                },
                "2125": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V3",
                    "tokens": [
                        "2125"
                    ]
                },
                "kusama": {
                    "type": "XCM",
                    "xcmType": "xTokens.transfer",
                    "version": "V3",
                    "tokens": [
                        "4"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://picasso.subscan.io"
            }
        ],
        "network_to": [
            "1000",
            "2001",
            "2125",
            "kusama",
            "2019",
            "centauri-1"
        ]
    },
    "injective-1": {
        "name": "Injective",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/injective/chain.png",
        "rpc": "https://injective-rpc.polkachu.com",
        "rest": "https://injective-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "injective-1",
        "feeAssetId": "inj",
        "cosmos": {
            "bech32Config": {
                "bech32PrefixAccPub": "injpub",
                "bech32PrefixValPub": "injvaloperpub",
                "bech32PrefixAccAddr": "inj",
                "bech32PrefixConsPub": "injvalconspub",
                "bech32PrefixValAddr": "injvaloper",
                "bech32PrefixConsAddr": "injvalcons"
            },
            "bip44": {
                "coinType": 60
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/injective"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "celestia": {
        "name": "Celestia",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/celestia/chain.png",
        "rpc": "https://rpc.celestia.nodestake.top",
        "rest": "https://api.celestia.nodestake.top",
        "chainType": "cosmos",
        "chainId": "celestia",
        "feeAssetId": "utia",
        "cosmos": {
            "bech32Config": {
                "bech32PrefixAccAddr": "celestia",
                "bech32PrefixAccPub": "celestiapub",
                "bech32PrefixConsAddr": "celestiavalcons",
                "bech32PrefixConsPub": "celestiavalconspub",
                "bech32PrefixValAddr": "celestiavaloper",
                "bech32PrefixValPub": "celestiavaloperpub"
            },
            "bip44": {
                "coinType": 118
            },
            "walletUrlForStaking": "https://wallet.keplr.app/chains/celestia"
        },
        "enabled": false,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/celestia"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "kusama": {
        "name": "Kusama",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/kusama.svg",
        "rpc": "wss://kusama-rpc.polkadot.io",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "kusama",
        "feeAssetId": "4",
        "polkadot": {
            "ss58Format": 2,
            "isParachain": false,
            "relayChain": "kusama",
            "hops": {
                "2087": {
                    "type": "XCM",
                    "xcmType": "xcmPallet.reserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "4"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://kusama.subscan.io"
            }
        ],
        "network_to": [
            "2087"
        ]
    },
    "polkadot": {
        "name": "Polkadot",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/Polkadot.svg",
        "rpc": "wss://rpc.polkadot.io",
        "rest": "",
        "chainType": "polkadot",
        "chainId": "polkadot",
        "feeAssetId": "79228162514264337593543950342",
        "polkadot": {
            "ss58Format": 0,
            "isParachain": false,
            "relayChain": "polkadot",
            "hops": {
                "2019": {
                    "type": "XCM",
                    "xcmType": "xcmPallet.limitedReserveTransferAssets",
                    "version": "V2",
                    "tokens": [
                        "4"
                    ]
                }
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "subscan",
                "url": "https://polkadot.subscan.io"
            }
        ],
        "network_to": [
            "2019"
        ]
    },
    "ethereum": {
        "name": "Ethereum",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/ethereum.svg",
        "rpc": "https://mainnet.infura.io/v3/a5d75c55a92a4e01b089047f19cc6bdd",
        "rest": "",
        "chainType": "ethereum",
        "chainId": "ethereum",
        "feeAssetId": "ETH",
        "enabled": true,
        "explorer": [
            {
                "type": "etherscan",
                "url": "https://etherscan.io"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "solana": {
        "name": "Solana",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/solana.svg",
        "rpc": "https://mainnet.helius-rpc.com/?api-key=29886ba4-5153-4e0d-8405-d45f81f6b9e9",
        "rest": "",
        "chainType": "solana",
        "chainId": "solana",
        "feeAssetId": "SOL",
        "enabled": true,
        "explorer": [
            {
                "type": "solscan",
                "url": "https://solscan.io"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "archway-1": {
        "name": "Archway",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/archway/chain.png",
        "rpc": "https://rpc.mainnet.archway.io",
        "rest": "https://api.mainnet.archway.io",
        "chainType": "cosmos",
        "chainId": "archway-1",
        "feeAssetId": "aarch",
        "cosmos": {
            "bech32Config": {
                "bech32PrefixAccAddr": "archway",
                "bech32PrefixAccPub": "archwaypub",
                "bech32PrefixConsAddr": "archwayvalcons",
                "bech32PrefixConsPub": "archwayvalconspub",
                "bech32PrefixValAddr": "archwayvaloper",
                "bech32PrefixValPub": "archwayvaloperpub"
            },
            "bip44": {
                "coinType": 118
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/archway"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "centauri-1": {
        "name": "Picasso",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/PICA.svg",
        "rpc": "https://picasso-rpc.polkachu.com",
        "rest": "https://picasso-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "centauri-1",
        "feeAssetId": "ppica",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "walletUrlForStaking": "https://explorer.nodestake.top/composable",
            "bech32Config": {
                "bech32PrefixAccAddr": "pica",
                "bech32PrefixAccPub": "picapub",
                "bech32PrefixValAddr": "picavaloper",
                "bech32PrefixValPub": "picavaloperpub",
                "bech32PrefixConsAddr": "picavalcons",
                "bech32PrefixConsPub": "picavalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/picasso"
            }
        ],
        "network_to": [
            "chihuahua-1",
            "2087",
            "osmosis-1",
            "cosmoshub-4",
            "stride-1",
            "stargaze-1",
            "quicksilver-2",
            "crescent-1",
            "agoric-3",
            "secret-4",
            "neutron-1",
            "umee-1",
            "kaiyo-1",
            "injective-1",
            "celestia",
            "archway-1",
            "ethereum",
            "coreum-mainnet-1",
            "solana"
        ]
    },
    "chihuahua-1": {
        "name": "Chihuahua",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/chihuahua/chain.png",
        "rpc": "https://chihuahua-rpc.polkachu.com",
        "rest": "https://chihuahua-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "chihuahua-1",
        "feeAssetId": "uhuahua",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "chihuahua",
                "bech32PrefixAccPub": "chihuahuapub",
                "bech32PrefixValAddr": "chihuahuavaloper",
                "bech32PrefixValPub": "chihuahuavaloperpub",
                "bech32PrefixConsAddr": "chihuahuavalcons",
                "bech32PrefixConsPub": "chihuahuavalconspub"
            },
            "walletUrlForStaking": "https://wallet.keplr.app/chains/chihuahua"
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/chihuahua"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "coreum-mainnet-1": {
        "name": "Coreum",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png",
        "rpc": "https://full-node.mainnet-1.coreum.dev:26657",
        "rest": "https://rest-coreum.ecostake.com",
        "chainType": "cosmos",
        "chainId": "coreum-mainnet-1",
        "feeAssetId": "ucore",
        "cosmos": {
            "bip44": {
                "coinType": 990
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "core",
                "bech32PrefixAccPub": "corepub",
                "bech32PrefixValAddr": "corevaloper",
                "bech32PrefixValPub": "corevaloperpub",
                "bech32PrefixConsAddr": "corevalcons",
                "bech32PrefixConsPub": "corevalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/coreum"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "kaiyo-1": {
        "name": "Kujira",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/kaiyo/chain.png",
        "rpc": "https://kujira-rpc.polkachu.com",
        "rest": "https://kujira-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "kaiyo-1",
        "feeAssetId": "ukuji",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "kujira",
                "bech32PrefixAccPub": "kujirapub",
                "bech32PrefixValAddr": "kujiravaloper",
                "bech32PrefixValPub": "kujiravaloperpub",
                "bech32PrefixConsAddr": "kujiravalcons",
                "bech32PrefixConsPub": "kujiravalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/kujira"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "quicksilver-2": {
        "name": "Quicksilver",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/quicksilver/chain.png",
        "rpc": "https://quicksilver-rpc.polkachu.com",
        "rest": "https://quicksilver-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "quicksilver-2",
        "feeAssetId": "uqck",
        "cosmos": {
            "walletUrlForStaking": "https://wallet.keplr.app/chains/quicksilver",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "quick",
                "bech32PrefixAccPub": "quickpub",
                "bech32PrefixValAddr": "quickvaloper",
                "bech32PrefixValPub": "quickvaloperpub",
                "bech32PrefixConsAddr": "quickvalcons",
                "bech32PrefixConsPub": "quickvalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/quicksilver"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "secret-4": {
        "name": "Secret Network",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/secret/chain.png",
        "rpc": "https://scrt.public-rpc.com",
        "rest": "https://lcd.mainnet.secretsaturn.net",
        "chainType": "cosmos",
        "chainId": "secret-4",
        "feeAssetId": "uscrt",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/secret-network",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/secret-network",
            "bip44": {
                "coinType": 529
            },
            "alternativeBIP44s": [
                {
                    "coinType": 118
                }
            ],
            "bech32Config": {
                "bech32PrefixAccAddr": "secret",
                "bech32PrefixAccPub": "secretpub",
                "bech32PrefixValAddr": "secretvaloper",
                "bech32PrefixValPub": "secretvaloperpub",
                "bech32PrefixConsAddr": "secretvalcons",
                "bech32PrefixConsPub": "secretvalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/secret"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "pacific-1": {
        "name": "Sei",
        "image": "https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/chains/sei.svg",
        "rpc": "https://sei-rpc.polkachu.com",
        "rest": "https://sei-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "pacific-1",
        "feeAssetId": "usei",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "sei",
                "bech32PrefixAccPub": "seipub",
                "bech32PrefixValAddr": "seivaloper",
                "bech32PrefixValPub": "seivaloperpub",
                "bech32PrefixConsAddr": "seivalcons",
                "bech32PrefixConsPub": "seivalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/sei"
            }
        ],
        "network_to": [
            "osmosis-1"
        ]
    },
    "agoric-3": {
        "name": "Agoric",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/agoric/chain.png",
        "rpc": "https://agoric-rpc.polkachu.com",
        "rest": "https://agoric-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "agoric-3",
        "feeAssetId": "ubld",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/agoric",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/agoric",
            "bip44": {
                "coinType": 564
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "agoric",
                "bech32PrefixAccPub": "agoricpub",
                "bech32PrefixValAddr": "agoricvaloper",
                "bech32PrefixValPub": "agoricvaloperpub",
                "bech32PrefixConsAddr": "agoricvalcons",
                "bech32PrefixConsPub": "agoricvalconspub"
            },
            "alternativeBIP44s": [
                {
                    "coinType": 118
                }
            ]
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/agoric"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "cosmoshub-4": {
        "name": "Cosmos Hub",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/cosmoshub/chain.png",
        "rpc": "https://cosmos-rpc.polkachu.com",
        "rest": "https://cosmos-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "cosmoshub-4",
        "feeAssetId": "uatom",
        "cosmos": {
            "bech32Config": {
                "bech32PrefixAccAddr": "cosmos",
                "bech32PrefixAccPub": "cosmospub",
                "bech32PrefixConsAddr": "cosmosvalcons",
                "bech32PrefixConsPub": "cosmosvalconspub",
                "bech32PrefixValAddr": "cosmosvaloper",
                "bech32PrefixValPub": "cosmosvaloperpub"
            },
            "bip44": {
                "coinType": 118
            },
            "walletUrlForStaking": "https://wallet.keplr.app/chains/cosmos-hub"
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/cosmos"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "crescent-1": {
        "name": "Crescent Network",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/crescent/chain.png",
        "rpc": "https://crescent-rpc.polkachu.com",
        "rest": "https://crescent-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "crescent-1",
        "feeAssetId": "ucre",
        "cosmos": {
            "walletUrl": "https://app.crescent.network/",
            "walletUrlForStaking": "https://app.crescent.network/staking",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "cre",
                "bech32PrefixAccPub": "crepub",
                "bech32PrefixValAddr": "crevaloper",
                "bech32PrefixValPub": "crevaloperpub",
                "bech32PrefixConsAddr": "crevalcons",
                "bech32PrefixConsPub": "crevalconspub"
            }
        },
        "enabled": false,
        "explorer": [
            {
                "type": "pingPub",
                "url": "https://ping.pub/crescent"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "neutron-1": {
        "name": "Neutron",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/chain.png",
        "rpc": "https://neutron-rpc.polkachu.com",
        "rest": "https://neutron-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "neutron-1",
        "feeAssetId": "untrn",
        "cosmos": {
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "neutron",
                "bech32PrefixAccPub": "neutronpub",
                "bech32PrefixValAddr": "neutronvaloper",
                "bech32PrefixValPub": "neutronvaloperpub",
                "bech32PrefixConsAddr": "neutronvalcons",
                "bech32PrefixConsPub": "neutronvalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/neutron"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "osmosis-1": {
        "name": "Osmosis",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/osmosis/chain.png",
        "rpc": "https://osmosis-rpc.polkachu.com",
        "rest": "https://osmosis-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "osmosis-1",
        "feeAssetId": "uosmo",
        "cosmos": {
            "walletUrl": "https://app.osmosis.zone",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/osmosis",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "osmo",
                "bech32PrefixAccPub": "osmopub",
                "bech32PrefixValAddr": "osmovaloper",
                "bech32PrefixValPub": "osmovaloperpub",
                "bech32PrefixConsAddr": "osmovalcons",
                "bech32PrefixConsPub": "osmovalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/osmosis"
            }
        ],
        "network_to": [
            "pacific-1",
            "centauri-1"
        ]
    },
    "stargaze-1": {
        "name": "Stargaze",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stargaze/chain.png",
        "rpc": "https://stargaze-rpc.polkachu.com",
        "rest": "https://stargaze-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "stargaze-1",
        "feeAssetId": "ustars",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/stargaze",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/stargaze",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "stars",
                "bech32PrefixAccPub": "starspub",
                "bech32PrefixValAddr": "starsvaloper",
                "bech32PrefixValPub": "starsvaloperpub",
                "bech32PrefixConsAddr": "starsvalcons",
                "bech32PrefixConsPub": "starsvalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/stargaze"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "stride-1": {
        "name": "Stride",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/stride/chain.png",
        "rpc": "https://stride-rpc.polkachu.com",
        "rest": "https://stride-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "stride-1",
        "feeAssetId": "ustrd",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/stride",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/stride",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "stride",
                "bech32PrefixAccPub": "stridepub",
                "bech32PrefixValAddr": "stridevaloper",
                "bech32PrefixValPub": "stridevaloperpub",
                "bech32PrefixConsAddr": "stridevalcons",
                "bech32PrefixConsPub": "stridevalconspub"
            }
        },
        "enabled": true,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/stride"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    },
    "umee-1": {
        "name": "UMEE",
        "image": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/umee/chain.png",
        "rpc": "https://umee-rpc.polkachu.com",
        "rest": "https://umee-api.polkachu.com",
        "chainType": "cosmos",
        "chainId": "umee-1",
        "feeAssetId": "uumee",
        "cosmos": {
            "walletUrl": "https://wallet.keplr.app/chains/umee",
            "walletUrlForStaking": "https://wallet.keplr.app/chains/umee",
            "bip44": {
                "coinType": 118
            },
            "bech32Config": {
                "bech32PrefixAccAddr": "umee",
                "bech32PrefixAccPub": "umeepub",
                "bech32PrefixValAddr": "umeevaloper",
                "bech32PrefixValPub": "umeevaloperpub",
                "bech32PrefixConsAddr": "umeevalcons",
                "bech32PrefixConsPub": "umeevalconspub"
            }
        },
        "enabled": false,
        "explorer": [
            {
                "type": "mintscan",
                "url": "https://www.mintscan.io/umee"
            }
        ],
        "network_to": [
            "centauri-1"
        ]
    }
};


/***/ }),

/***/ 5523:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.solanaAssets = void 0;
exports.solanaAssets = {
    "DOT": {
        "mintAddress": "vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J",
        "minimumTransfer": 3,
        "fromCosmosFee": 1.3
    },
    "KSM": {
        "mintAddress": "9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12",
        "minimumTransfer": 1,
        "fromCosmosFee": 0.3
    },
    "SEI": {
        "mintAddress": "BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S",
        "minimumTransfer": 30,
        "fromCosmosFee": 13
    },
    "SILK": {
        "mintAddress": "Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "STRD": {
        "mintAddress": "FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE",
        "minimumTransfer": 11,
        "fromCosmosFee": 7.6
    },
    "BLD": {
        "mintAddress": "BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU",
        "minimumTransfer": 200,
        "fromCosmosFee": 105
    },
    "OSMO": {
        "mintAddress": "EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM",
        "minimumTransfer": 20,
        "fromCosmosFee": 11
    },
    "stATOM": {
        "mintAddress": "8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea",
        "minimumTransfer": 2,
        "fromCosmosFee": 1
    },
    "IST": {
        "mintAddress": "3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "ETH": {
        "mintAddress": "EXZbXNMbdTbMYpr9J5MUDv29XnWfxLZYyCCtk2tCy7XV",
        "minimumTransfer": 0.01,
        "fromCosmosFee": 0.002
    },
    "DAI": {
        "mintAddress": "6SYCn6Hj4X3XV6dzRk8vXa1UyZc4SBvAT7p3e1AcATAx",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "FXS": {
        "mintAddress": "6jnTywpWt1u6Jh65FTSgUVDxv7Kyfp3f1mwH426LXmB7",
        "minimumTransfer": 10,
        "fromCosmosFee": 2.5
    },
    "sFRAX": {
        "mintAddress": "3AvDivzbMjfin9hSVUBjdYerKroX8jQuNyDVebdRiULE",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "sfrxETH": {
        "mintAddress": "E5Lz7Bi1KZD9VTYXsCZhkWDiztkNzPoX7Jk71xbTkEoA",
        "minimumTransfer": 0.01,
        "fromCosmosFee": 0.002
    },
    "ENA": {
        "mintAddress": "Aa34MLrb7GfT5uMXnpT9oKnj11gGcXMq61b5kBzTvbnW",
        "minimumTransfer": 50,
        "fromCosmosFee": 15
    },
    "FRAX": {
        "mintAddress": "A9zVTbwXTwMA3WsYbB7mGKmDZp3UPfd64sjZfZQ8Lk49",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "frxETH": {
        "mintAddress": "Go2RiPCxrU3dWH7cs52pm2Q2R45HB2ACbYBZsx1vadZd",
        "minimumTransfer": 0.01,
        "fromCosmosFee": 0.002
    },
    "wBTC": {
        "mintAddress": "GrkjmJt3KECe6Yi11LZxY88BJ69KyQnRtC6EioFAF1rD",
        "minimumTransfer": 0.0003,
        "fromCosmosFee": 0.000075
    },
    "stETH": {
        "mintAddress": "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj",
        "minimumTransfer": 0.01,
        "fromCosmosFee": 0
    },
    "rETH": {
        "mintAddress": "urez9EJo4YNdpQQxw6xrLfF1J3EqJSaVwPGHFNG338B",
        "minimumTransfer": 0.007,
        "fromCosmosFee": 0.0018
    },
    "crvUSD": {
        "mintAddress": "EuBHrXZJa6ZNg6dfhiotxRoHpVpMg6ZsgNc6ZKJ9iUe2",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "pxETH": {
        "mintAddress": "B1cm3Wf5ZNUdgZ1eaXaNdiy9DCmQudfmspRMBb2TqDjb",
        "minimumTransfer": 0.01,
        "fromCosmosFee": 0.002
    },
    "eETH": {
        "mintAddress": "CqzASJJsEA1TDvjCahP9pa7wPjqFEdouup6g5eNV71uv",
        "minimumTransfer": 0.01,
        "fromCosmosFee": 0.002
    },
    "ezETH": {
        "mintAddress": "CqzASJJsEA1TDvjCahP9pa7wPjqFEdouup6g5eNV71uv",
        "minimumTransfer": 0,
        "fromCosmosFee": 0
    },
    "USDe": {
        "mintAddress": "GM4RuF5gLcytcq36wNJkX3UBYRKP9hQwJyyRWm6d6o47",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "PEPE": {
        "mintAddress": "uVYDrZeCeq5T5RBHZZWHfsG12SDCm4MPHX2h8iAcXRh",
        "minimumTransfer": 2000000,
        "fromCosmosFee": 555000
    },
    "USDT Ethereum": {
        "mintAddress": "EHzGKxauSbvLD5xfX4P9StBdQWmyroferGg9aR6oDU9v",
        "minimumTransfer": 20,
        "fromCosmosFee": 5
    },
    "CRV": {
        "mintAddress": "4tjtYi8dCVkE539ANy3qUHhKdqkjzqhn2iW4WSZMfMa6",
        "minimumTransfer": 80,
        "fromCosmosFee": 20
    },
    "SOL": {
        "mintAddress": "SOL",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.028
    },
    "JitoSOL": {
        "mintAddress": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.025
    },
    "mSOL": {
        "mintAddress": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.023
    },
    "WHINE": {
        "mintAddress": "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump",
        "minimumTransfer": 40000,
        "fromCosmosFee": 80000
    },
    "hausSOL": {
        "mintAddress": "HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0
    },
    "bSOL": {
        "mintAddress": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.024
    },
    "LST": {
        "mintAddress": "LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.024
    },
    "BLZE": {
        "mintAddress": "BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA",
        "minimumTransfer": 0,
        "fromCosmosFee": 0
    },
    "edgeSOL": {
        "mintAddress": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.024
    },
    "cSOL": {
        "mintAddress": "5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV",
        "minimumTransfer": 0,
        "fromCosmosFee": 0
    },
    "cmSOL": {
        "mintAddress": "3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h",
        "minimumTransfer": 0,
        "fromCosmosFee": 0
    },
    "cJitoSOL": {
        "mintAddress": "6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM",
        "minimumTransfer": 0,
        "fromCosmosFee": 0
    },
    "cbSOL": {
        "mintAddress": "FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt",
        "minimumTransfer": 0,
        "fromCosmosFee": 0
    },
    "compassSOL": {
        "mintAddress": "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h",
        "minimumTransfer": 0,
        "fromCosmosFee": 0
    },
    "jupSOL": {
        "mintAddress": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.024
    },
    "hSOL": {
        "mintAddress": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.024
    },
    "wSOL": {
        "mintAddress": "So11111111111111111111111111111111111111112",
        "minimumTransfer": 0.2,
        "fromCosmosFee": 0.028
    },
    "WIF": {
        "mintAddress": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
        "minimumTransfer": 9,
        "fromCosmosFee": 2
    },
    "BONK": {
        "mintAddress": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        "minimumTransfer": 1200000,
        "fromCosmosFee": 240000
    },
    "USDT Solana": {
        "mintAddress": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        "minimumTransfer": 30,
        "fromCosmosFee": 5
    },
    "UWU": {
        "mintAddress": "UwU8RVXB69Y6Dcju6cN2Qef6fykkq6UUNpB15rZku6Z",
        "minimumTransfer": 15000,
        "fromCosmosFee": 7500
    },
    "ARCH": {
        "mintAddress": "BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk",
        "minimumTransfer": 300,
        "fromCosmosFee": 160
    },
    "PICA": {
        "mintAddress": "966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ",
        "minimumTransfer": 25000,
        "fromCosmosFee": 12000
    },
    "XRP": {
        "mintAddress": "DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW",
        "minimumTransfer": 35,
        "fromCosmosFee": 10
    },
    "COREUM": {
        "mintAddress": "Cq5Z54y9FpWQHkvspw63TKd9P9w34X5XjFk14FkG1H8",
        "minimumTransfer": 200,
        "fromCosmosFee": 83
    },
    "SCRT": {
        "mintAddress": "6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V",
        "minimumTransfer": 50,
        "fromCosmosFee": 25
    },
    "SHD": {
        "mintAddress": "4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ",
        "minimumTransfer": 10,
        "fromCosmosFee": 5
    },
    "ATOM": {
        "mintAddress": "9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc",
        "minimumTransfer": 2,
        "fromCosmosFee": 1
    },
    "ASTRO": {
        "mintAddress": "8knH1Z4kY6WaHRMZHMxe76d2Ar3kHhjz33t1eZRJSyET",
        "minimumTransfer": 40000,
        "fromCosmosFee": 26000
    },
    "STARS": {
        "mintAddress": "HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB",
        "minimumTransfer": 990,
        "fromCosmosFee": 800
    }
};


/***/ }),

/***/ 3322:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tokensPerChannel = void 0;
exports.tokensPerChannel = {
    "2019": {
        "15": {
            "chainId": "2087",
            "destinationId": 15,
            "tokens": [
                "DOT",
                "PICA",
                "vDOT",
                "BNC_DOT",
                "ASTR",
                "lsDOT",
                "BLD",
                "IST"
            ]
        }
    },
    "2087": {
        "15": {
            "chainId": "2019",
            "destinationId": 15,
            "tokens": [
                "DOT",
                "PICA",
                "vDOT",
                "BNC_DOT",
                "ASTR",
                "lsDOT",
                "BLD",
                "IST"
            ]
        },
        "17": {
            "chainId": "centauri-1",
            "destinationId": 2,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "UMEE",
                "ASTR",
                "SDN",
                "USDT Kusama"
            ]
        }
    },
    "injective-1": {
        "145": {
            "chainId": "centauri-1",
            "destinationId": 29,
            "tokens": [
                "INJ"
            ]
        }
    },
    "celestia": {
        "12": {
            "chainId": "centauri-1",
            "destinationId": 38,
            "tokens": [
                "TIA"
            ]
        }
    },
    "ethereum": {
        "2": {
            "chainId": "centauri-1",
            "destinationId": 52,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        }
    },
    "solana": {
        "1": {
            "chainId": "centauri-1",
            "destinationId": 71,
            "tokens": [
                "PICA",
                "OSMO",
                "SOL",
                "ETH",
                "wSOL",
                "WHINE",
                "LST",
                "bSOL",
                "JitoSOL",
                "edgeSOL",
                "hSOL",
                "jupSOL",
                "mSOL",
                "BONK",
                "WIF",
                "USDT Solana",
                "DAI",
                "USDT Ethereum",
                "CRV",
                "wBTC",
                "rETH",
                "crvUSD",
                "FRAX",
                "FXS",
                "frxETH",
                "sfrxETH",
                "sFRAX",
                "pxETH",
                "eETH",
                "ENA",
                "USDe",
                "PEPE",
                "ATOM",
                "stATOM",
                "IST",
                "SEI",
                "SCRT",
                "STARS",
                "BLD",
                "STRD",
                "SHD",
                "SILK",
                "DOT",
                "KSM",
                "XRP",
                "COREUM",
                "ASTRO"
            ]
        }
    },
    "archway-1": {
        "108": {
            "chainId": "centauri-1",
            "destinationId": 50,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        }
    },
    "centauri-1": {
        "0": {
            "chainId": "chihuahua-1",
            "destinationId": 62,
            "tokens": [
                "UHUAHUA",
                "PICA"
            ]
        },
        "2": {
            "chainId": "2087",
            "destinationId": 17,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "UMEE",
                "ASTR",
                "SDN",
                "USDT Kusama"
            ]
        },
        "3": {
            "chainId": "osmosis-1",
            "destinationId": 1279,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "4": {
            "chainId": "cosmoshub-4",
            "destinationId": 617,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "5": {
            "chainId": "stride-1",
            "destinationId": 134,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "6": {
            "chainId": "stargaze-1",
            "destinationId": 184,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "9": {
            "chainId": "quicksilver-2",
            "destinationId": 94,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "11": {
            "chainId": "crescent-1",
            "destinationId": 64,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "13": {
            "chainId": "agoric-3",
            "destinationId": 55,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "14": {
            "chainId": "secret-4",
            "destinationId": 80,
            "tokens": [
                "SCRT",
                "SILK",
                "SHD"
            ]
        },
        "18": {
            "chainId": "neutron-1",
            "destinationId": 17,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "20": {
            "chainId": "umee-1",
            "destinationId": 99,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "27": {
            "chainId": "kaiyo-1",
            "destinationId": 101,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "29": {
            "chainId": "injective-1",
            "destinationId": 145,
            "tokens": [
                "INJ"
            ]
        },
        "38": {
            "chainId": "celestia",
            "destinationId": 12,
            "tokens": [
                "TIA"
            ]
        },
        "50": {
            "chainId": "archway-1",
            "destinationId": 108,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "52": {
            "chainId": "ethereum",
            "destinationId": 2,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        },
        "56": {
            "chainId": "coreum-mainnet-1",
            "destinationId": 31,
            "tokens": [
                "COREUM",
                "XRP"
            ]
        },
        "71": {
            "chainId": "solana",
            "destinationId": 1,
            "tokens": [
                "PICA",
                "OSMO",
                "SOL",
                "ETH",
                "wSOL",
                "WHINE",
                "LST",
                "bSOL",
                "JitoSOL",
                "edgeSOL",
                "hSOL",
                "jupSOL",
                "mSOL",
                "BONK",
                "WIF",
                "USDT Solana",
                "DAI",
                "USDT Ethereum",
                "CRV",
                "wBTC",
                "rETH",
                "crvUSD",
                "FRAX",
                "FXS",
                "frxETH",
                "sfrxETH",
                "sFRAX",
                "pxETH",
                "eETH",
                "ENA",
                "USDe",
                "PEPE",
                "ATOM",
                "stATOM",
                "IST",
                "SEI",
                "SCRT",
                "STARS",
                "BLD",
                "STRD",
                "SHD",
                "SILK",
                "DOT",
                "KSM",
                "XRP",
                "COREUM",
                "ASTRO"
            ]
        }
    },
    "chihuahua-1": {
        "62": {
            "chainId": "centauri-1",
            "destinationId": 0,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        }
    },
    "coreum-mainnet-1": {
        "31": {
            "chainId": "centauri-1",
            "destinationId": 56,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        }
    },
    "kaiyo-1": {
        "101": {
            "chainId": "centauri-1",
            "destinationId": 27,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "quicksilver-2": {
        "94": {
            "chainId": "centauri-1",
            "destinationId": 9,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "secret-4": {
        "80": {
            "chainId": "centauri-1",
            "destinationId": 14,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "pacific-1": {
        "0": {
            "chainId": "osmosis-1",
            "destinationId": 782,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "agoric-3": {
        "55": {
            "chainId": "centauri-1",
            "destinationId": 13,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        }
    },
    "cosmoshub-4": {
        "617": {
            "chainId": "centauri-1",
            "destinationId": 4,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        }
    },
    "crescent-1": {
        "64": {
            "chainId": "centauri-1",
            "destinationId": 11,
            "tokens": [
                "PICA",
                "ETH",
                "DAI",
                "FXS",
                "sFRAX",
                "sfrxETH",
                "OSMO",
                "ENA",
                "FRAX",
                "frxETH",
                "wBTC",
                "pxETH",
                "PEPE",
                "CRV",
                "rETH",
                "crvUSD",
                "eETH",
                "USDe",
                "USDT Ethereum",
                "stETH",
                "ATOM",
                "IST",
                "stATOM",
                "BLD",
                "SEI",
                "SCRT",
                "STRD"
            ]
        }
    },
    "neutron-1": {
        "17": {
            "chainId": "centauri-1",
            "destinationId": 18,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "osmosis-1": {
        "782": {
            "chainId": "pacific-1",
            "destinationId": 0,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        },
        "1279": {
            "chainId": "centauri-1",
            "destinationId": 3,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "stargaze-1": {
        "184": {
            "chainId": "centauri-1",
            "destinationId": 6,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "stride-1": {
        "134": {
            "chainId": "centauri-1",
            "destinationId": 5,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    },
    "umee-1": {
        "99": {
            "chainId": "centauri-1",
            "destinationId": 20,
            "tokens": [
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "stATOM",
                "SILK",
                "BNC_KSM",
                "vKSM",
                "BNC_DOT",
                "vDOT",
                "EQD",
                "USDT",
                "ASTR",
                "SDN",
                "EQ",
                "MOVR",
                "IST",
                "BLD",
                "TIA",
                "GLMR",
                "USDT",
                "PICA",
                "KSM",
                "DOT",
                "ATOM",
                "OSMO",
                "STRD",
                "stATOM",
                "STARS",
                "NTRN",
                "CRE",
                "bCRE",
                "SCRT",
                "SILK",
                "TIA",
                "IST",
                "UMEE",
                "KUJI",
                "USK",
                "INJ",
                "QCK",
                "BLD",
                "MOVR",
                "vKSM",
                "vDOT",
                "SEI"
            ]
        }
    }
};


/***/ }),

/***/ 7273:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 1229:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6720), exports);
__exportStar(__webpack_require__(6288), exports);
__exportStar(__webpack_require__(6825), exports);


/***/ }),

/***/ 6825:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(6652), exports);


/***/ }),

/***/ 6652:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransferPending = exports.TransferFail = exports.TransferSuccess = void 0;
exports.TransferSuccess = ['TransferSuccess', 'TransferSuccessButError'];
exports.TransferFail = [
    'TransferFailed',
    'TransferTimeout',
    'TransferMaintenance',
];
exports.TransferPending = ['TransferPending', 'send_packet'];


/***/ }),

/***/ 7609:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7609__;

/***/ }),

/***/ 1069:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__1069__;

/***/ }),

/***/ 4706:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4706__;

/***/ }),

/***/ 5204:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5204__;

/***/ }),

/***/ 4459:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4459__;

/***/ }),

/***/ 2659:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2659__;

/***/ }),

/***/ 4814:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__4814__;

/***/ }),

/***/ 5783:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5783__;

/***/ }),

/***/ 2742:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2742__;

/***/ }),

/***/ 7419:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7419__;

/***/ }),

/***/ 875:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__875__;

/***/ }),

/***/ 1891:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__1891__;

/***/ }),

/***/ 7303:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7303__;

/***/ }),

/***/ 6019:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__6019__;

/***/ }),

/***/ 1903:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4394:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 913:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BorshSchema = void 0;
class BorshSchema {
    schema;
    constructor(schema) {
        this.schema = schema;
    }
    static fromSchema(schema) {
        return new BorshSchema(schema);
    }
    toSchema() {
        return this.schema;
    }
    /**
     * Schema for u8
     * @example
     * const n: number = 100;
     * const buffer = borshSerialize(BorshSchema.u8, n);
     */
    static get u8() {
        return BorshSchema.fromSchema('u8');
    }
    /**
     * Schema for u16
     * @example
     * const n: number = 100;
     * const buffer = borshSerialize(BorshSchema.u16, n);
     */
    static get u16() {
        return BorshSchema.fromSchema('u16');
    }
    /**
     * Schema for u32
     * @example
     * const n: number = 100;
     * const buffer = borshSerialize(BorshSchema.u32, n);
     */
    static get u32() {
        return BorshSchema.fromSchema('u32');
    }
    /**
     * Schema for u64
     * @example
     * const n: bigint = 100n;
     * const buffer = borshSerialize(BorshSchema.u64, n);
     */
    static get u64() {
        return BorshSchema.fromSchema('u64');
    }
    /**
     * Schema for u128
     * @example
     * const n: bigint = 100n;
     * const buffer = borshSerialize(BorshSchema.u128, n);
     */
    static get u128() {
        return BorshSchema.fromSchema('u128');
    }
    /**
     * Schema for i8
     * @example
     * const n: number = 100;
     * const buffer = borshSerialize(BorshSchema.i8, n);
     */
    static get i8() {
        return BorshSchema.fromSchema('i8');
    }
    /**
     * Schema for i16
     * @example
     * const n: number = 100;
     * const buffer = borshSerialize(BorshSchema.i16, n);
     */
    static get i16() {
        return BorshSchema.fromSchema('i16');
    }
    /**
     * Schema for i32
     * @example
     * const n: number = 100;
     * const buffer = borshSerialize(BorshSchema.i32, n);
     */
    static get i32() {
        return BorshSchema.fromSchema('i32');
    }
    /**
     * Schema for i64
     * @example
     * const n: bigint = 100n;
     * const buffer = borshSerialize(BorshSchema.i64, n);
     */
    static get i64() {
        return BorshSchema.fromSchema('i64');
    }
    /**
     * Schema for i128
     * @example
     * const n: bigint = 100n;
     * const buffer = borshSerialize(BorshSchema.i128, n);
     */
    static get i128() {
        return BorshSchema.fromSchema('i128');
    }
    /**
     * Schema for f32
     * @example
     * const n: number = 1.0;
     * const buffer = borshSerialize(BorshSchema.f32, n);
     */
    static get f32() {
        return BorshSchema.fromSchema('f32');
    }
    /**
     * Schema for f64
     * @example
     * const n: number = 1.0;
     * const buffer = borshSerialize(BorshSchema.f64, n);
     */
    static get f64() {
        return BorshSchema.fromSchema('f64');
    }
    /**
     * Schema for bool
     * @example
     * const b: boolean = true;
     * const buffer = borshSerialize(BorshSchema.bool, b);
     */
    static get bool() {
        return BorshSchema.fromSchema('bool');
    }
    /**
     * Schema for String
     * @example
     * const message: string = 'hello world';
     * const buffer = borshSerialize(BorshSchema.String, message);
     */
    static get String() {
        return BorshSchema.fromSchema('string');
    }
    /**
     * Schema for Option
     * @example
     * const schema = BorshSchema.Option(BorshSchema.String);
     *
     * const some: string | null = 'hello world';
     * const someBuffer = borshSerialize(schema, some);
     *
     * const none: string | null = null;
     * const noneBuffer = borshSerialize(schema, none);
     */
    static Option(value) {
        return BorshSchema.fromSchema({ option: value.toSchema() });
    }
    /**
     * Schema for Array
     * @example
     * const schema = BorshSchema.Array(BorshSchema.String, 2);
     * const messages: string[] = ['hello', 'world'];
     * const buffer = borshSerialize(schema, messages);
     */
    static Array(value, length) {
        return BorshSchema.fromSchema({ array: { type: value.toSchema(), len: length } });
    }
    /**
     * Schema for Vec
     * @example
     * const schema = BorshSchema.Vec(BorshSchema.String);
     * const messages: string[] = ['hello', 'world'];
     * const buffer = borshSerialize(schema, messages);
     */
    static Vec(value) {
        return BorshSchema.fromSchema({ array: { type: value.toSchema() } });
    }
    /**
     * Schema for HashSet
     * @example
     * const schema = BorshSchema.HashSet(BorshSchema.String);
     * const messages: Set<string> = new Set(['hello', 'world']);
     * const buffer = borshSerialize(schema, messages);
     */
    static HashSet(value) {
        return BorshSchema.fromSchema({ set: value.toSchema() });
    }
    /**
     * Schema for HashMap
     * @example
     * const schema = BorshSchema.HashMap(BorshSchema.String, BorshSchema.u128);
     * const balances: Map<string, bigint> = new Map([
     *   ['alice', 1_000_000_000_000_000_000_000_000n],
     *   ['bob', 2_000_000_000_000_000_000_000_000n],
     * ]);
     * const buffer = borshSerialize(schema, balances);
     */
    static HashMap(key, value) {
        return BorshSchema.fromSchema({ map: { key: key.toSchema(), value: value.toSchema() } });
    }
    /**
     * Schema for Unit
     * @example
     * const unit: Unit = {};
     * const buffer = borshSerialize(BorshSchema.Unit, unit);
     */
    static get Unit() {
        return BorshSchema.Struct({});
    }
    /**
     * Schema for Struct
     * @example
     * type Person = {
     *   name: string;
     *   age: number;
     * };
     *
     * const schema = BorshSchema.Struct({
     *   name: BorshSchema.String,
     *   age: BorshSchema.u8,
     * });
     *
     * const person: Person = {
     *   name: 'alice',
     *   age: 18,
     * };
     *
     * const buffer = borshSerialize(schema, person);
     */
    static Struct(fields) {
        return BorshSchema.fromSchema({ struct: toStructTypeStruct(fields) });
    }
    /**
     * Schema for Enum
     * @example
     * type Status =
     *   | {
     *       Pending: Unit;
     *     }
     *   | {
     *       Fulfilled: Unit;
     *     }
     *   | {
     *       Rejected: Unit;
     *     };
     *
     * const schema = BorshSchema.Enum({
     *   Pending: BorshSchema.Unit,
     *   Fulfilled: BorshSchema.Unit,
     *   Rejected: BorshSchema.Unit,
     * });
     *
     * const status: Status = {
     *   Pending: {},
     * };
     *
     * const buffer = borshSerialize(schema, status);
     *
     * @example
     * type Shape =
     *   | {
     *       Square: number;
     *     }
     *   | {
     *       Rectangle: {
     *         length: number;
     *         width: number;
     *       };
     *     }
     *   | {
     *       Circle: {
     *         radius: number;
     *       };
     *     };
     *
     * const schema = BorshSchema.Enum({
     *   Square: BorshSchema.u32,
     *   Rectangle: BorshSchema.Struct({
     *     length: BorshSchema.u32,
     *     width: BorshSchema.u32,
     *   }),
     *   Circle: BorshSchema.Struct({
     *     radius: BorshSchema.u32,
     *   }),
     * });
     *
     * const shape: Shape = {
     *   Square: 5,
     * };
     *
     * const buffer = borshSerialize(schema, shape);
     */
    static Enum(variants) {
        return BorshSchema.fromSchema({ enum: toEnumTypeEnum(variants) });
    }
}
exports.BorshSchema = BorshSchema;
function toStructTypeStruct(fields) {
    const entries = Object.entries(fields).map(([key, value]) => [key, value.toSchema()]);
    return Object.fromEntries(entries);
}
function toEnumTypeEnum(variants) {
    return Object.entries(variants).map(([key, value]) => ({ struct: { [key]: value.toSchema() } }));
}
//# sourceMappingURL=BorshSchema.js.map

/***/ }),

/***/ 7582:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BorshSchema = exports.borshDeserialize = exports.borshSerialize = void 0;
const buffer_1 = __webpack_require__(8287);
const BorshSchema_1 = __webpack_require__(913);
Object.defineProperty(exports, "BorshSchema", ({ enumerable: true, get: function () { return BorshSchema_1.BorshSchema; } }));
const borsh_1 = __webpack_require__(1909);
function borshSerialize(schema, data) {
    return buffer_1.Buffer.from((0, borsh_1.serialize)(schema.toSchema(), data));
}
exports.borshSerialize = borshSerialize;
function borshDeserialize(schema, buffer) {
    return (0, borsh_1.deserialize)(schema.toSchema(), buffer);
}
exports.borshDeserialize = borshDeserialize;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9022:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"type":"constructor","inputs":[{"name":"initialName","type":"string","internalType":"string"},{"name":"initialSymbol","type":"string","internalType":"string"},{"name":"initSupply","type":"uint256","internalType":"uint256"},{"name":"initialDecimals","type":"uint8","internalType":"uint8"}],"stateMutability":"nonpayable"},{"type":"function","name":"allowance","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"spender","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"approve","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"burn","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"decimals","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"view"},{"type":"function","name":"mint","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setDecimals","inputs":[{"name":"newDecimals","type":"uint8","internalType":"uint8"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setName","inputs":[{"name":"newName","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setSymbol","inputs":[{"name":"newSymbol","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"value","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"nonpayable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"spender","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"SetDecimals","inputs":[{"name":"precision","type":"uint8","indexed":false,"internalType":"uint8"}],"anonymous":false},{"type":"event","name":"SetName","inputs":[{"name":"name","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"event","name":"SetSymbol","inputs":[{"name":"symbol","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"ERC20InsufficientAllowance","inputs":[{"name":"spender","type":"address","internalType":"address"},{"name":"allowance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InsufficientBalance","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"balance","type":"uint256","internalType":"uint256"},{"name":"needed","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC20InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC20InvalidSpender","inputs":[{"name":"spender","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"}]}]');

/***/ }),

/***/ 2799:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"type":"function","name":"OWNER_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"TRANSFER_MODULE_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"id","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"burn","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"id","type":"string","internalType":"string"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"denomEqualsNativeToken","inputs":[{"name":"id","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"getNativeTokenDenom","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"init","inputs":[{"name":"nativeTokenDenom","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"mint","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"id","type":"string","internalType":"string"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"queryTokenContractFromDenom","inputs":[{"name":"id","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"renounceRole","inputs":[{"name":"id","type":"bytes32","internalType":"bytes32"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"role","inputs":[{"name":"id","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"tokenSetDecimals","inputs":[{"name":"token","type":"address","internalType":"address"},{"name":"precision","type":"uint8","internalType":"uint8"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"tokenSetName","inputs":[{"name":"token","type":"address","internalType":"address"},{"name":"name","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"tokenSetSymbol","inputs":[{"name":"token","type":"address","internalType":"address"},{"name":"symbol","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"tokenTransferOwnership","inputs":[{"name":"token","type":"address","internalType":"address"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transfer","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"id","type":"string","internalType":"string"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"id","type":"string","internalType":"string"},{"name":"amount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transferRole","inputs":[{"name":"id","type":"bytes32","internalType":"bytes32"},{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"unwhitelistToken","inputs":[{"name":"token","type":"address","internalType":"contract IERC20"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"whitelistToken","inputs":[{"name":"token","type":"address","internalType":"contract IERC20"},{"name":"denom","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"RoleTransferred","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"error","name":"NotContractOwner","inputs":[{"name":"_user","type":"address","internalType":"address"},{"name":"_contractOwner","type":"address","internalType":"address"}]}]');

/***/ }),

/***/ 7758:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"type":"function","name":"ICS20_VERSION","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"id","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getMinTokenSendAmount","inputs":[{"name":"denom","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"ibcAddress","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"init","inputs":[{"name":"ibcHandler_","type":"address","internalType":"contract IDiamond"},{"name":"bank_","type":"address","internalType":"contract IICS20Bank"},{"name":"minTimeoutTimestamp_","type":"uint64","internalType":"uint64"},{"name":"feePercentage_","type":"uint32","internalType":"uint32"},{"name":"feeConnector_","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"onAcknowledgementPacket","inputs":[{"name":"packet","type":"tuple","internalType":"struct PacketData","components":[{"name":"sequence","type":"uint64","internalType":"uint64"},{"name":"source_port","type":"string","internalType":"string"},{"name":"source_channel","type":"string","internalType":"string"},{"name":"destination_port","type":"string","internalType":"string"},{"name":"destination_channel","type":"string","internalType":"string"},{"name":"data","type":"bytes","internalType":"bytes"},{"name":"timeout_height","type":"tuple","internalType":"struct HeightData","components":[{"name":"revision_number","type":"uint64","internalType":"uint64"},{"name":"revision_height","type":"uint64","internalType":"uint64"}]},{"name":"timeout_timestamp","type":"uint64","internalType":"uint64"}]},{"name":"acknowledgement","type":"bytes","internalType":"bytes"},{"name":"","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"onChanCloseConfirm","inputs":[{"name":"portId","type":"string","internalType":"string"},{"name":"channelId","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"onChanCloseInit","inputs":[{"name":"portId","type":"string","internalType":"string"},{"name":"channelId","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"onChanOpenAck","inputs":[{"name":"portId","type":"string","internalType":"string"},{"name":"channelId","type":"string","internalType":"string"},{"name":"counterpartyVersion","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"onChanOpenConfirm","inputs":[{"name":"portId","type":"string","internalType":"string"},{"name":"channelId","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"onChanOpenInit","inputs":[{"name":"order","type":"uint8","internalType":"enum ChannelOrder"},{"name":"connectionHops","type":"string[]","internalType":"string[]"},{"name":"portId","type":"string","internalType":"string"},{"name":"channelId","type":"string","internalType":"string"},{"name":"counterparty","type":"tuple","internalType":"struct ChannelCounterpartyData","components":[{"name":"port_id","type":"string","internalType":"string"},{"name":"channel_id","type":"string","internalType":"string"}]},{"name":"version","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"nonpayable"},{"type":"function","name":"onChanOpenTry","inputs":[{"name":"order","type":"uint8","internalType":"enum ChannelOrder"},{"name":"connectionHops","type":"string[]","internalType":"string[]"},{"name":"portId","type":"string","internalType":"string"},{"name":"channelId","type":"string","internalType":"string"},{"name":"counterparty","type":"tuple","internalType":"struct ChannelCounterpartyData","components":[{"name":"port_id","type":"string","internalType":"string"},{"name":"channel_id","type":"string","internalType":"string"}]},{"name":"version","type":"string","internalType":"string"},{"name":"counterpartyVersion","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"nonpayable"},{"type":"function","name":"onRecvPacket","inputs":[{"name":"packet","type":"tuple","internalType":"struct PacketData","components":[{"name":"sequence","type":"uint64","internalType":"uint64"},{"name":"source_port","type":"string","internalType":"string"},{"name":"source_channel","type":"string","internalType":"string"},{"name":"destination_port","type":"string","internalType":"string"},{"name":"destination_channel","type":"string","internalType":"string"},{"name":"data","type":"bytes","internalType":"bytes"},{"name":"timeout_height","type":"tuple","internalType":"struct HeightData","components":[{"name":"revision_number","type":"uint64","internalType":"uint64"},{"name":"revision_height","type":"uint64","internalType":"uint64"}]},{"name":"timeout_timestamp","type":"uint64","internalType":"uint64"}]},{"name":"","type":"address","internalType":"address"}],"outputs":[{"name":"acknowledgement","type":"bytes","internalType":"bytes"}],"stateMutability":"nonpayable"},{"type":"function","name":"onTimeoutPacket","inputs":[{"name":"packet","type":"tuple","internalType":"struct PacketData","components":[{"name":"sequence","type":"uint64","internalType":"uint64"},{"name":"source_port","type":"string","internalType":"string"},{"name":"source_channel","type":"string","internalType":"string"},{"name":"destination_port","type":"string","internalType":"string"},{"name":"destination_channel","type":"string","internalType":"string"},{"name":"data","type":"bytes","internalType":"bytes"},{"name":"timeout_height","type":"tuple","internalType":"struct HeightData","components":[{"name":"revision_number","type":"uint64","internalType":"uint64"},{"name":"revision_height","type":"uint64","internalType":"uint64"}]},{"name":"timeout_timestamp","type":"uint64","internalType":"uint64"}]},{"name":"","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"sendTransfer","inputs":[{"name":"denom","type":"string","internalType":"string"},{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"receiver","type":"string","internalType":"string"},{"name":"sourcePort","type":"string","internalType":"string"},{"name":"sourceChannel","type":"string","internalType":"string"},{"name":"timeoutHeight","type":"uint64","internalType":"uint64"},{"name":"timeoutTimestamp","type":"uint64","internalType":"uint64"},{"name":"memo","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"sendTransferNativeToken","inputs":[{"name":"receiver","type":"string","internalType":"string"},{"name":"sourcePort","type":"string","internalType":"string"},{"name":"sourceChannel","type":"string","internalType":"string"},{"name":"timeoutHeight","type":"uint64","internalType":"uint64"},{"name":"timeoutTimestamp","type":"uint64","internalType":"uint64"},{"name":"memo","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"payable"},{"type":"function","name":"setFeeCollector","inputs":[{"name":"feeCollector","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setFeePercentage","inputs":[{"name":"percentage","type":"uint32","internalType":"uint32"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setMinTimeoutTimestamp","inputs":[{"name":"minTimeoutTimestamp","type":"uint64","internalType":"uint64"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setMinTokenSendAmount","inputs":[{"name":"denom","type":"string","internalType":"string"},{"name":"minTokenAmount","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"error","name":"NotContractOwner","inputs":[{"name":"_user","type":"address","internalType":"address"},{"name":"_contractOwner","type":"address","internalType":"address"}]}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(1229);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});