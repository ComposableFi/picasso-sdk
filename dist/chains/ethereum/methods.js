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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.approveErc20 = exports.ethereumTransfer = void 0;
var big_js_1 = __importDefault(require("big.js"));
var utils_1 = require("../common/utils");
var constants_1 = require("./constants");
var helper_1 = require("./helper");
/**@description etheruem transfer */
var ethereumTransfer = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var transferContract, timeoutBlock, gasPrice, rawDataErc20, rawDataEth, isETH, rawData, encodedData, txObject, gas;
    var web3 = _b.web3, amount = _b.amount, assetId = _b.assetId, originAddress = _b.originAddress, destinationAddress = _b.destinationAddress, channel = _b.channel, minimalDenom = _b.minimalDenom, _c = _b.memo, memo = _c === void 0 ? '' : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                transferContract = (0, helper_1.getBankTransferContract)(web3);
                timeoutBlock = (0, helper_1.getBlock)(web3);
                gasPrice = (0, helper_1.getGasPrice)(web3);
                rawDataErc20 = transferContract.methods.sendTransfer(minimalDenom, // pass minimal denom as first argument
                amount, destinationAddress, //centauri
                'transfer', "channel-".concat(channel), //update this using config
                timeoutBlock, // replace it to get block
                (0, utils_1.getTimeOut)(60).toString(), memo);
                rawDataEth = transferContract.methods.sendTransferNativeToken(destinationAddress, 'transfer', "channel-".concat(channel), timeoutBlock, // replace it to get block
                (0, utils_1.getTimeOut)(240).toString(), memo);
                isETH = assetId === 'ETH';
                rawData = isETH ? rawDataEth : rawDataErc20;
                encodedData = rawData.encodeABI();
                txObject = {
                    to: constants_1.bankTransferContractAddress,
                    data: encodedData,
                    from: originAddress,
                    value: isETH
                        ? new big_js_1.default(amount || 0).plus(constants_1.MAINNET_FEE).toString()
                        : constants_1.MAINNET_FEE,
                    gasPrice: gasPrice, // wei
                };
                return [4 /*yield*/, (0, helper_1.getEthGasAmount)(web3, txObject)];
            case 1:
                gas = _d.sent();
                // simulate before sending transfer
                (0, helper_1.getEthSimulate)(web3, encodedData, txObject);
                return [2 /*return*/, rawData === null || rawData === void 0 ? void 0 : rawData.send(__assign(__assign({}, txObject), { gas: gas })).on('transactionHash', function (txHash) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            utils_1.emitter.emit('ETHEREUM_APPROVED');
                            return [2 /*return*/, txHash];
                        });
                    }); })];
        }
    });
}); };
exports.ethereumTransfer = ethereumTransfer;
/**@description Ask approval */
var approveErc20 = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var erc20Contract, tokenApprove;
    var web3 = _b.web3, account = _b.account, amount = _b.amount, erc20TokenAddress = _b.erc20TokenAddress, _c = _b.spenderContract, spenderContract = _c === void 0 ? constants_1.bankContractAddress : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                erc20Contract = (0, helper_1.getErc20Contract)(web3, erc20TokenAddress);
                if (!erc20Contract)
                    return [2 /*return*/];
                tokenApprove = erc20Contract.methods.approve(spenderContract, amount);
                return [4 /*yield*/, tokenApprove.send({ from: account })];
            case 1: return [2 /*return*/, _d.sent()];
        }
    });
}); };
exports.approveErc20 = approveErc20;
