"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAINNET_FEE = exports.TESTNET_FEE = exports.ERC_20_PICA = exports.EthIbcChannel = exports.ETH_MODE = exports.ibcCoreAddress = exports.bankTransferContractAddress = exports.bankContractAddress = exports.ethereum = void 0;
exports.ethereum = typeof window !== 'undefined' ? window.ethereum : undefined; // provider of cosmos wallet
exports.bankContractAddress = '0x5933fde9fa60d4f1c0124aa7a7a988f46ba42d78';
exports.bankTransferContractAddress = '0x148acd3cd4d6a17cd2abbecd0745b09b62c64f84';
exports.ibcCoreAddress = '0xd856f0f9efa054896fe3596e05978bbe686de131'; // not used
exports.ETH_MODE = 'mainnet';
exports.EthIbcChannel = {
    eth: '2',
    centauri: '52',
    cosmos: '3370',
};
exports.ERC_20_PICA = "transfer/channel-".concat(exports.EthIbcChannel.eth, "/ppica");
exports.TESTNET_FEE = '1000000000000000'; // can be updated by policy
exports.MAINNET_FEE = '6000000000000000';
