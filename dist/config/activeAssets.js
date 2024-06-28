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
// [FAST TRACK] Add asset info here to display the asset in our UI
var crossChainAssets_1 = __importDefault(require("./crossChainAssets"));
var activeAssets = __spreadArray([
    {
        decimals: 6,
        existentialDeposit: '100000000000',
        id: '1005',
        name: 'SILK',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 8,
        existentialDeposit: '100000000000',
        id: '',
        name: 'SHD',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '120000',
        id: '1006',
        name: 'BLD',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '120000',
        id: '79228162514264337593543950354',
        name: 'BLD',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '20000',
        id: '79228162514264337593543950361',
        name: 'IST',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 12,
        existentialDeposit: '100000000000',
        id: '79228162514264337593543950337',
        name: 'PICA',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 18,
        existentialDeposit: '100000000000',
        id: '79228162514264337593543950376',
        name: 'GLMR',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 12,
        existentialDeposit: '100000000000',
        id: '228510780171552721666262089780561563481',
        name: 'PICA',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 12,
        existentialDeposit: '100000000000',
        id: '167283995827706324502761431814209211090',
        name: 'PICA',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '100000000000',
        id: '138280378441551394289980644963240827219',
        name: 'ATOM',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '100000000000',
        id: '133307414193833606001516599592873928539',
        name: 'TIA',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '20000',
        id: '141196559012917796508928734717797136690',
        name: 'IST',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 18,
        existentialDeposit: '100000000000',
        id: '78407957940239408223554844611219482002',
        name: 'MOVR',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '120000',
        id: '199907282886248358976504623107230837230',
        name: 'BLD',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '100000000000',
        id: '1007',
        name: 'SEI',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 18,
        existentialDeposit: '100000000000',
        id: '792281',
        name: 'GLMR',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 18,
        existentialDeposit: '100000000000',
        id: '167283',
        name: 'MOVR',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 6,
        existentialDeposit: '100000000000',
        id: '999',
        name: 'TIA',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9991',
        name: 'SOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9992',
        name: 'mSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9993',
        name: 'JitoSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9994',
        name: 'LST',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 18,
        existentialDeposit: '100000000000',
        id: '1000',
        name: 'ETH',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 18,
        existentialDeposit: '100000000000',
        id: '1000',
        name: 'ETH',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '1001',
        name: 'jupSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '1002',
        name: 'compassSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9996',
        name: 'cSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9997',
        name: 'cmSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9998',
        name: 'cJitoSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 9,
        existentialDeposit: '100000000000',
        id: '9999',
        name: 'cbSOL',
        ratio: {
            n: 0,
            d: 0,
        },
    },
    {
        decimals: 18,
        existentialDeposit: '100000000000',
        id: 'ETH',
        name: 'ETH',
        ratio: {
            n: 0,
            d: 0,
        },
    }
], __read(Object.entries(__assign(__assign({}, crossChainAssets_1.default.solana), crossChainAssets_1.default.ethereum)).reduce(function (acc, _a) {
    var _b = __read(_a, 2), key = _b[0], value = _b[1];
    acc.push({
        decimals: value.decimals,
        existentialDeposit: '100000000000', // Assuming a fixed value
        id: value.denom + 'makethisuniqe',
        name: value.denom,
        ratio: { n: 0, d: 0 }, // Assuming fixed values
    });
    return acc;
}, [])), false);
exports.default = activeAssets;
