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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.solanaTransfer = void 0;
var anchor = __importStar(require("@coral-xyz/anchor"));
var spl = __importStar(require("@solana/spl-token"));
var web3_js_1 = require("@solana/web3.js");
var borsher_1 = require("borsher");
var utils_1 = require("../common/utils");
var constants_1 = require("./constants");
var helper_1 = require("./helper");
var solanaTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var isNative, _c, denom, baseDenom, assetId, hashedDenom, senderPublicKey, associatedToken, tx, connection, tokenInfo, isWSOL, finalAmount, assetPubkeyAddress, refinedSourceChannel, senderTokenAccount, msgTransferPayload, instructionPayload, buffer, _d, guestChainPDA, triePDA, ibcStoragePDA, mintAuthorityPDA, escrowAccountPDA, feePDA, instruction;
    var 
    //write
    quantity = _b.quantity, accountId = _b.accountId, destinationAddress = _b.destinationAddress, configAssetId = _b.configAssetId, sourceChannelId = _b.sourceChannelId, configDenom = _b.configDenom, endpoint = _b.endpoint, timeout = _b.timeout, _e = _b.memo, memo = _e === void 0 ? '' : _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                isNative = (0, helper_1.isNativeSolanaAsset)(configDenom);
                _c = (0, helper_1.getSolanaAsset)(configAssetId, configDenom, isNative), denom = _c.denom, baseDenom = _c.baseDenom, assetId = _c.assetId, hashedDenom = _c.hashedDenom;
                senderPublicKey = new anchor.web3.PublicKey(accountId);
                associatedToken = spl.getAssociatedTokenAddressSync(spl.NATIVE_MINT, senderPublicKey);
                tx = new anchor.web3.Transaction();
                connection = (0, helper_1.getConnection)(endpoint);
                if (!(assetId === 'SOL' && connection)) return [3 /*break*/, 2];
                return [4 /*yield*/, connection.getParsedTokenAccountsByOwner(senderPublicKey, {
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
                    tx.add(
                    // add  instruction for creating wSOL account
                    spl.createAssociatedTokenAccountInstruction(senderPublicKey, associatedToken, senderPublicKey, spl.NATIVE_MINT, spl.TOKEN_PROGRAM_ID, spl.ASSOCIATED_TOKEN_PROGRAM_ID), 
                    //add instruction for sol to wsol swap
                    anchor.web3.SystemProgram.transfer({
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
                return [4 /*yield*/, spl.getAssociatedTokenAddress(assetPubkeyAddress, senderPublicKey)];
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
                instructionPayload = {
                    discriminator: [153, 182, 142, 63, 227, 31, 140, 239],
                    hashed_base_denom: hashedDenom,
                    msg: msgTransferPayload,
                };
                buffer = (0, borsher_1.borshSerialize)(helper_1.instructionSchema, instructionPayload);
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
                    data: buffer, // All instructions are hellos
                });
                return [4 /*yield*/, sendTX(tx, accountId, endpoint, false, undefined, function () {
                        tx.add(web3_js_1.ComputeBudgetProgram.requestHeapFrame({ bytes: 128 * 1024 }));
                        tx.add(web3_js_1.ComputeBudgetProgram.setComputeUnitLimit({ units: 700000 }));
                        tx.add(instruction);
                    })];
            case 4: return [2 /*return*/, _f.sent()];
        }
    });
}); };
exports.solanaTransfer = solanaTransfer;
/**@description this function is used to send tx */
var sendTX = function (inputTx_1, address_1, endpoint_1) {
    var args_1 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        args_1[_i - 3] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([inputTx_1, address_1, endpoint_1], __read(args_1), false), void 0, function (inputTx, address, endpoint, isBundle, tokenMintKeypair, beforeFeeFunc, skipPreflight) {
        var tx, depositor, _a, signedTx, rawTransaction;
        if (isBundle === void 0) { isBundle = true; }
        if (skipPreflight === void 0) { skipPreflight = false; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tx = inputTx;
                    depositor = (0, helper_1.getPublicKey)(address);
                    _a = tx;
                    return [4 /*yield*/, (0, helper_1.getLatestBlockhash)(endpoint)];
                case 1:
                    _a.recentBlockhash = _b.sent();
                    //set owner as feePayer
                    tx.feePayer = depositor;
                    beforeFeeFunc === null || beforeFeeFunc === void 0 ? void 0 : beforeFeeFunc();
                    tx.add(getFee());
                    return [4 /*yield*/, constants_1.solana.signTransaction(tx).catch(function (err) {
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
                    return [4 /*yield*/, pollingSignatureStatus(rawTransaction, endpoint, skipPreflight)];
                case 3: return [2 /*return*/, _b.sent()];
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
                    //works like txHash
                    if (!connection)
                        return [2 /*return*/];
                    return [4 /*yield*/, connection.sendRawTransaction(rawTx, {
                            skipPreflight: skipPreflight,
                        })];
                case 1:
                    signature = _l.sent();
                    return [4 /*yield*/, connection.confirmTransaction(signature)];
                case 2:
                    _l.sent();
                    _l.label = 3;
                case 3:
                    _l.trys.push([3, 9, 10, 15]);
                    _a = true, _b = __asyncValues(__spreadArray([], __read(Array(9).keys()), false));
                    _l.label = 4;
                case 4: return [4 /*yield*/, _b.next()];
                case 5:
                    if (!(_c = _l.sent(), _d = _c.done, !_d)) return [3 /*break*/, 8];
                    _f = _c.value;
                    _a = false;
                    i = _f;
                    return [4 /*yield*/, connection.getSignatureStatus(signature)];
                case 6:
                    status_1 = _l.sent();
                    if (((_g = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _g === void 0 ? void 0 : _g.confirmationStatus) === 'finalized' ||
                        ((_h = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _h === void 0 ? void 0 : _h.confirmationStatus) === 'confirmed') {
                        return [2 /*return*/, { signature: signature, status: (_j = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _j === void 0 ? void 0 : _j.confirmationStatus }];
                    }
                    if (i > 9) {
                        return [2 /*return*/, { signature: signature, status: (_k = status_1 === null || status_1 === void 0 ? void 0 : status_1.value) === null || _k === void 0 ? void 0 : _k.confirmationStatus }];
                    }
                    _l.label = 7;
                case 7:
                    _a = true;
                    return [3 /*break*/, 4];
                case 8: return [3 /*break*/, 15];
                case 9:
                    e_1_1 = _l.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 15];
                case 10:
                    _l.trys.push([10, , 13, 14]);
                    if (!(!_a && !_d && (_e = _b.return))) return [3 /*break*/, 12];
                    return [4 /*yield*/, _e.call(_b)];
                case 11:
                    _l.sent();
                    _l.label = 12;
                case 12: return [3 /*break*/, 14];
                case 13:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 14: return [7 /*endfinally*/];
                case 15: return [2 /*return*/];
            }
        });
    });
};
var getFee = function () {
    var SEND_AMT = 0.01 * web3_js_1.LAMPORTS_PER_SOL; // for test, it used to be 0.006
    var PRIORITY_FEE_IX = web3_js_1.ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: SEND_AMT,
    });
    return PRIORITY_FEE_IX;
};
