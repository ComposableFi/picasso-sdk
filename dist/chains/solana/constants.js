"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solana = exports.solanaIbcProgramId = exports.solanaPortId = void 0;
var web3_js_1 = require("@solana/web3.js");
exports.solanaPortId = 'transfer';
exports.solanaIbcProgramId = new web3_js_1.PublicKey('2HLLVco5HvwWriNbUhmVwA2pCetRkpgrqwnjcsZdyTKT');
exports.solana = typeof window !== 'undefined' ? window.solana : undefined;
