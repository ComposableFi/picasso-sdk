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
exports.simulate = exports.getApprovedErc20 = exports.getErc20Contract = exports.isValidAddress = exports.getEthSimulate = exports.getTransactionReceipt = exports.getEthGasAmount = exports.getGasPrice = exports.getBlock = exports.getConsole = exports.getBankContract = exports.getBankTransferContract = exports.getContract = exports.getWeb3 = void 0;
var big_js_1 = __importDefault(require("big.js"));
var web3_1 = __importDefault(require("web3"));
var abi_1 = require("./abi");
var constants_1 = require("./constants");
var getWeb3 = function (endpoint) {
    return new web3_1.default(new web3_1.default.providers.HttpProvider(endpoint));
};
exports.getWeb3 = getWeb3;
var getContract = function (web3, abi, contractAddress) {
    // typeof window !== 'undefined' && !!web3 && web3.eth.setProvider(provider!);
    typeof window !== 'undefined' && !!web3;
    return web3 && contractAddress
        ? new web3.eth.Contract(abi, contractAddress)
        : undefined;
};
exports.getContract = getContract;
var getBankTransferContract = function (web3) {
    return (0, exports.getContract)(web3, abi_1.ics20TransferBankABI, constants_1.bankTransferContractAddress);
};
exports.getBankTransferContract = getBankTransferContract;
// ideally contract address should be from outside, but right not it is just from constants file
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
                        return [2 /*return*/, '0'];
                    return [4 /*yield*/, web3.eth.getBlockNumber()];
                case 1: return [2 /*return*/, (_a.sent()) + addedAmount];
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
                    return [2 /*return*/, '0'];
                return [4 /*yield*/, web3.eth.getGasPrice()];
            case 1:
                gasPrice = _a.sent();
                return [2 /*return*/, new big_js_1.default(gasPrice || 0).mul(1.3).toFixed(0)];
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
                    return [2 /*return*/, '0'];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, web3.eth.estimateGas(txConfig)];
            case 2:
                gasAmount = _a.sent();
                return [2 /*return*/, gasAmount];
            case 3:
                err_1 = _a.sent();
                return [2 /*return*/, '0'];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getEthGasAmount = getEthGasAmount;
var getTransactionReceipt = function (web3, txHash) { return __awaiter(void 0, void 0, void 0, function () {
    var receipt;
    return __generator(this, function (_a) {
        if (!web3)
            return [2 /*return*/, ''];
        receipt = web3.eth.getTransactionReceipt(txHash);
        return [2 /*return*/, receipt];
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
var isValidAddress = function (web3, account) {
    if (!web3)
        return false;
    return web3.utils.isAddress(account);
};
exports.isValidAddress = isValidAddress;
var getErc20Contract = function (web3, erc20TokenAddress) {
    return (0, exports.getContract)(web3, abi_1.erc20ABI, erc20TokenAddress);
};
exports.getErc20Contract = getErc20Contract;
/**@description get approved erc20 amount, returns wei */
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
                    if (!(0, exports.isValidAddress)(web3, account))
                        return [2 /*return*/, '0'];
                    erc20Contract = (0, exports.getErc20Contract)(web3, erc20TokenAddress);
                    if (!erc20Contract)
                        return [2 /*return*/, '0'];
                    return [4 /*yield*/, erc20Contract.methods.allowance(account, spenderContract).call()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.getApprovedErc20 = getApprovedErc20;
var simulate = function (web3, data, txObject) {
    web3 === null || web3 === void 0 ? void 0 : web3.eth.call(__assign(__assign({}, txObject), { data: data })).then(function (result) { return console.log(result, 'simulatedresult'); }).catch(function (err) { return console.error(err, 'simulated??'); });
};
exports.simulate = simulate;
