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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructionSchema = exports.msgTransferSchema = exports.getSolanaGuestChainAccounts = exports.getSolanaTracePath = exports.getLatestBlockhash = exports.getSolanaAsset = exports.getBaseDenomFromTracePath = exports.getTokenMint = exports.isNativeSolanaAsset = exports.getPublicKey = exports.getConnection = exports.PublicKey = exports.Keypair = void 0;
exports.hexToBytes = hexToBytes;
exports.numberTo32ByteBuffer = numberTo32ByteBuffer;
var anchor = __importStar(require("@coral-xyz/anchor"));
var spl = __importStar(require("@solana/spl-token"));
var web3_js_1 = require("@solana/web3.js");
var axios_1 = __importDefault(require("axios"));
var borsher_1 = require("borsher");
var js_sha256_1 = require("js-sha256");
var constants_1 = require("./constants");
var web3_js_2 = require("@solana/web3.js");
Object.defineProperty(exports, "Keypair", { enumerable: true, get: function () { return web3_js_2.Keypair; } });
Object.defineProperty(exports, "PublicKey", { enumerable: true, get: function () { return web3_js_2.PublicKey; } });
/**@description get connection of solana */
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
/**@description Tokenmint is derived from hashedDenom */
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
    // const tokenMint = getTokenMint(hashedDenom) || assetId;
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
                return [4 /*yield*/, axios_1.default.post(endpoint, data, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data.result.value.blockhash || ''];
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
    // Create a buffer of 32 bytes initialized with zeros
    var buffer = Buffer.alloc(32);
    // Convert the BigInt to a hexadecimal string
    var numberHex = num.toString(16);
    if (numberHex.length % 2 !== 0) {
        numberHex = '0' + numberHex; // Ensure the hex string has an even length
    }
    // Create a buffer from the hexadecimal string
    var numberBytes = Buffer.from(numberHex, 'hex');
    // Copy the number bytes to the end of the 32-byte buffer
    numberBytes.copy(buffer, 32 - numberBytes.length);
    var uintBuffer = new Uint8Array(buffer);
    // split above array into 4 chunks of 8 bytes each
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
// shema
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
