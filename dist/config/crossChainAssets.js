"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossChainAssets = void 0;
// [FAST TRACK] Add asset info to a network here to enable the asset on that network (add to at least 2 networks)
var ethereumAssets_1 = require("./ethereumAssets");
var solanaAssets_1 = require("./solanaAssets");
exports.crossChainAssets = {
    cosmos: (_a = {
            //  weird exception for ppica due to double origin in Picasso and Centauri
            ppica: {
                chainId: 'centauri-1',
                decimals: 12,
                minimalDenom: 'ppica',
                denom: 'PICA',
            },
            uhuahua: {
                chainId: 'chihuahua-1',
                decimals: 6,
                minimalDenom: 'uhuahua',
                denom: 'HUAHUA',
            },
            uosmo: {
                chainId: 'osmosis-1',
                decimals: 6,
                minimalDenom: 'uosmo',
                denom: 'OSMO',
            },
            stutia: {
                chainId: 'stride-1',
                decimals: 6,
                minimalDenom: 'stutia',
                denom: 'stTIA',
            },
            'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA': {
                chainId: 'osmosis-1',
                decimals: 6,
                minimalDenom: 'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
                denom: 'milkTIA',
            },
            'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro': {
                chainId: 'neutron-1',
                decimals: 6,
                minimalDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
                denom: 'ASTRO',
            },
            'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz': {
                chainId: 'coreum-mainnet-1',
                decimals: 6,
                minimalDenom: 'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
                denom: 'XRP',
            },
            uatom: {
                chainId: 'cosmoshub-4',
                decimals: 6,
                minimalDenom: 'uatom',
                denom: 'ATOM',
            },
            ustrd: {
                chainId: 'stride-1',
                decimals: 6,
                minimalDenom: 'ustrd',
                denom: 'STRD',
            },
            stuatom: {
                chainId: 'stride-1',
                decimals: 6,
                minimalDenom: 'stuatom',
                denom: 'stATOM',
            },
            ustars: {
                chainId: 'stargaze-1',
                decimals: 6,
                minimalDenom: 'ustars',
                denom: 'STARS',
            },
            ucre: {
                chainId: 'crescent-1',
                decimals: 6,
                minimalDenom: 'ucre',
                denom: 'CRE',
            },
            uscrt: {
                chainId: 'secret-4',
                decimals: 6,
                minimalDenom: 'uscrt',
                denom: 'SCRT',
            },
            untrn: {
                chainId: 'neutron-1',
                decimals: 6,
                minimalDenom: 'untrn',
                denom: 'NTRN',
            },
            uumee: {
                chainId: 'umee-1',
                decimals: 6,
                minimalDenom: 'uumee',
                denom: 'UMEE',
            },
            ubld: {
                chainId: 'agoric-3',
                decimals: 6,
                minimalDenom: 'ubld',
                denom: 'BLD',
            },
            ubcre: {
                chainId: 'crescent-1',
                decimals: 6,
                minimalDenom: 'ubcre',
                denom: 'bCRE',
            },
            uist: {
                chainId: 'agoric-3',
                decimals: 6,
                minimalDenom: 'uist',
                denom: 'IST',
            },
            usei: {
                chainId: 'pacific-1',
                decimals: 6,
                minimalDenom: 'usei',
                denom: 'SEI',
            },
            utia: {
                chainId: 'celestia',
                decimals: 6,
                minimalDenom: 'utia',
                denom: 'TIA',
            },
            ukuji: {
                chainId: 'kaiyo-1',
                decimals: 6,
                minimalDenom: 'ukuji',
                denom: 'KUJI',
            },
            uqck: {
                chainId: 'quicksilver-2',
                decimals: 6,
                minimalDenom: 'uqck',
                denom: 'QCK',
            },
            inj: {
                chainId: 'injective-1',
                decimals: 18,
                minimalDenom: 'inj',
                denom: 'INJ',
            },
            ucore: {
                chainId: 'coreum-mainnet-1',
                decimals: 6,
                minimalDenom: 'ucore',
                denom: 'COREUM',
            },
            aarch: {
                chainId: 'archway-1',
                decimals: 18,
                minimalDenom: 'aarch',
                denom: 'ARCH',
            }
        },
        _a[ethereumAssets_1.ethereumAssets['DAI'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['DAI'].erc20Address,
            denom: 'DAI',
        },
        _a.wei = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: 'wei',
            denom: 'ETH',
        },
        _a[ethereumAssets_1.ethereumAssets['FXS'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['FXS'].erc20Address,
            denom: 'FXS',
        },
        _a[ethereumAssets_1.ethereumAssets['sFRAX'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['sFRAX'].erc20Address,
            denom: 'sFRAX',
        },
        _a[ethereumAssets_1.ethereumAssets['sfrxETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['sfrxETH'].erc20Address,
            denom: 'sfrxETH',
        },
        _a[ethereumAssets_1.ethereumAssets['ENA'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['ENA'].erc20Address,
            denom: 'ENA',
        },
        _a[ethereumAssets_1.ethereumAssets['FRAX'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['FRAX'].erc20Address,
            denom: 'FRAX',
        },
        _a[ethereumAssets_1.ethereumAssets['frxETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['frxETH'].erc20Address,
            denom: 'frxETH',
        },
        _a[ethereumAssets_1.ethereumAssets['wBTC'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 8,
            minimalDenom: ethereumAssets_1.ethereumAssets['wBTC'].erc20Address,
            denom: 'wBTC',
        },
        _a[ethereumAssets_1.ethereumAssets['stETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['stETH'].erc20Address,
            denom: 'stETH',
        },
        _a[ethereumAssets_1.ethereumAssets['rETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['rETH'].erc20Address,
            denom: 'rETH',
        },
        _a[ethereumAssets_1.ethereumAssets['crvUSD'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['crvUSD'].erc20Address,
            denom: 'crvUSD',
        },
        _a[ethereumAssets_1.ethereumAssets['pxETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['pxETH'].erc20Address,
            denom: 'pxETH',
        },
        _a[ethereumAssets_1.ethereumAssets['eETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['eETH'].erc20Address,
            denom: 'eETH',
        },
        _a[ethereumAssets_1.ethereumAssets['ezETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['ezETH'].erc20Address,
            denom: 'ezETH',
        },
        _a[ethereumAssets_1.ethereumAssets['USDe'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['USDe'].erc20Address,
            denom: 'USDe',
        },
        _a[ethereumAssets_1.ethereumAssets['PEPE'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['PEPE'].erc20Address,
            denom: 'PEPE',
        },
        _a[ethereumAssets_1.ethereumAssets['USDT Ethereum'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: ethereumAssets_1.ethereumAssets['USDT Ethereum'].erc20Address,
            denom: 'USDT Ethereum',
        },
        _a[ethereumAssets_1.ethereumAssets['CRV'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['CRV'].erc20Address,
            denom: 'CRV',
        },
        _a[solanaAssets_1.solanaAssets['wSOL'].mintAddress] = {
            chainId: 'solana',
            denom: 'wSOL', // It is named SOL at cosmos
            minimalDenom: solanaAssets_1.solanaAssets['wSOL'].mintAddress,
            decimals: 9, // need to check
        },
        _a[solanaAssets_1.solanaAssets['USDT Solana'].mintAddress] = {
            chainId: 'solana',
            denom: 'USDT Solana',
            minimalDenom: solanaAssets_1.solanaAssets['USDT Solana'].mintAddress,
            decimals: 6,
        },
        _a[solanaAssets_1.solanaAssets['WIF'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: solanaAssets_1.solanaAssets['WIF'].mintAddress, //fake
            denom: 'WIF',
        },
        _a[solanaAssets_1.solanaAssets['BONK'].mintAddress] = {
            chainId: 'solana',
            decimals: 5,
            minimalDenom: solanaAssets_1.solanaAssets['BONK'].mintAddress, //fake
            denom: 'BONK',
        },
        _a[solanaAssets_1.solanaAssets['WHINE'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: solanaAssets_1.solanaAssets['WHINE'].mintAddress, //  fake
            denom: 'WHINE',
        },
        _a),
    dotsama: {
        '1': {
            chainId: '2087',
            denom: 'PICA',
            minimalDenom: 'ppica',
            decimals: 12,
        },
        '4': {
            chainId: '2087',
            minimalDenom: 'uKSM', //  fake
            denom: 'KSM',
            decimals: 12,
        },
        '44': {
            chainId: '2124',
            minimalDenom: 'AMPE', //  fake
            denom: 'AMPE',
            decimals: 12,
        },
        '45': {
            chainId: '2124',
            minimalDenom: 'XLM', //  fake
            denom: 'XLM',
            decimals: 12,
        },
        //  BLD on picasso
        '18': {
            chainId: '2087',
            decimals: 6,
            minimalDenom: 'uBLD', //  fake
            denom: 'BLD',
        },
        '20': {
            chainId: '2087',
            minimalDenom: 'ulsKSM', //  fake
            denom: 'Liquid Staked Kusama',
            decimals: 12,
        },
        '23': {
            chainId: '2023',
            decimals: 18,
            minimalDenom: 'uMOVR', //  fake
            denom: 'MOVR',
        },
        '25': {
            chainId: '2087',
            minimalDenom: 'uIST', //  fake
            denom: 'IST',
            decimals: 6,
        },
        //  from KSM so this is originDenom
        '31': {
            chainId: '2001',
            denom: 'BNC_KSM',
            minimalDenom: 'uBNC_KSM', //  fake
            decimals: 12,
        },
        '32': {
            chainId: '2001',
            denom: 'vKSM',
            minimalDenom: 'uvksm', //  fake
            decimals: 12,
        },
        '35': {
            chainId: 'pacific-1',
            denom: 'SEI',
            minimalDenom: 'uSEI', //  fake
            decimals: 6,
        },
        '40': {
            chainId: '2023',
            decimals: 18,
            minimalDenom: 'uGLMR', //  fake
            denom: 'GLMR',
        },
        '130': {
            chainId: '2087',
            decimals: 6,
            minimalDenom: 'uUSDT Kusama', //  fake
            denom: 'USDT Kusama',
        },
        '149': {
            chainId: '2087',
            decimals: 6,
            minimalDenom: 'uUSDT Polkadot', //  fake
            denom: 'USDT Polkadot',
        },
        //ASTAR ASTR
        '2006': {
            chainId: '2006',
            decimals: 18,
            minimalDenom: 'uASTR', //  fake
            denom: 'ASTR',
        },
        // shiden SDN
        '2007': {
            chainId: '2007',
            decimals: 18,
            minimalDenom: 'uSDN', //  fake
            denom: 'SDN',
        },
        '2125': {
            chainId: '2125',
            decimals: 12,
            minimalDenom: 'uTNKR', //  fake
            denom: 'TNKR',
        },
        '167283': {
            chainId: '2023',
            decimals: 18,
            minimalDenom: 'uMOVR', //  fake
            denom: 'MOVR',
        },
        '792281': {
            chainId: '2023',
            decimals: 18,
            minimalDenom: 'uGLMR', //  fake
            denom: 'GLMR',
        },
        //  Dot's ID in the Asset Registry on Composable, required since DOT outside of Picasso will have this baseDenom in denomTrace
        '79228162514264337593543950342': {
            chainId: '2019',
            decimals: 10,
            minimalDenom: 'uDOT', //  fake
            denom: 'DOT',
        },
        '79228162514264337593543950351': {
            chainId: '2019',
            decimals: 10,
            minimalDenom: 'ulsDOT', //  fake
            denom: 'lsDOT',
        },
        //  BLD on composable
        '79228162514264337593543950354': {
            chainId: '2019',
            decimals: 6,
            minimalDenom: 'uBLD', //  fake
            denom: 'BLD',
        },
        //  IST on composable
        '79228162514264337593543950361': {
            chainId: '2019',
            decimals: 6,
            minimalDenom: 'uIST', //  fake
            denom: 'IST',
        },
        // bnc polkadot on composable
        '79228162514264337593543950369': {
            chainId: '2019',
            decimals: 12,
            minimalDenom: 'uBNC_DOT', //  fake
            denom: 'BNC_DOT',
        },
        // vDot on composable
        '79228162514264337593543950370': {
            chainId: '2019',
            decimals: 10,
            minimalDenom: 'uvdot', //  fake
            denom: 'vDOT',
        },
        '79228162514264337593543950376': {
            chainId: '2023',
            decimals: 18,
            minimalDenom: 'uGLMR', //  fake
            denom: 'GLMR',
        },
        //COMPOSABLE ASTR
        '79228162514264337593543952342': {
            chainId: '2006',
            decimals: 18,
            minimalDenom: 'uASTR', //  fake
            denom: 'ASTR',
        },
    },
    solana: (_b = {
            SOL: {
                chainId: 'solana',
                denom: 'SOL',
                minimalDenom: 'SOL', //  fake
                decimals: 9,
                realDecimals: 9,
            }
        },
        _b[solanaAssets_1.solanaAssets['JitoSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            realDecimals: 9,
            minimalDenom: 'JitoSOL', //  fake
            denom: 'JitoSOL',
        },
        _b[solanaAssets_1.solanaAssets['mSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            realDecimals: 9,
            minimalDenom: 'mSOL', //  fake
            denom: 'mSOL',
        },
        _b[solanaAssets_1.solanaAssets['WHINE'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            realDecimals: 6,
            minimalDenom: 'WHINE', //  fake
            denom: 'WHINE',
        },
        _b[solanaAssets_1.solanaAssets['hausSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            realDecimals: 9,
            minimalDenom: 'hausSOL', //  fake
            denom: 'hausSOL',
        },
        // BlazeStake Staked SOL (bSOL)
        _b[solanaAssets_1.solanaAssets['bSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            realDecimals: 9,
            minimalDenom: 'bSOL', //  fake
            denom: 'bSOL',
        },
        // mrgn's Liquid Staking Token (LST)
        _b[solanaAssets_1.solanaAssets['LST'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            realDecimals: 9,
            minimalDenom: 'LST', //  fake
            denom: 'LST',
        },
        // Blaze (BLZE)
        _b.BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'BLZE', //  fake
            denom: 'BLZE',
        },
        //  Edgevana Staked SOL
        _b[solanaAssets_1.solanaAssets['edgeSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'edgeSOL', //  fake
            denom: 'edgeSOL',
        },
        //  solend cSOL
        _b['5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV'] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'cSOL', //  fake
            denom: 'cSOL',
        },
        //  solend cmSOL
        _b['3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h'] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'cmSOL', //  fake
            denom: 'cmSOL',
        },
        //  solend cmSOL
        _b['6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM'] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'cJitoSOL', //  fake
            denom: 'cJitoSOL',
        },
        //  solend cbSOL
        _b.FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'cbSOL', //  fake
            denom: 'cbSOL',
        },
        // compassSOL
        _b.Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'compassSOL', //  fake
            denom: 'compassSOL',
        },
        // jupSOL
        _b[solanaAssets_1.solanaAssets['jupSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'jupSOL', //  fake
            denom: 'jupSOL',
        },
        // hSOL
        _b[solanaAssets_1.solanaAssets['hSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'hSOL', //  fake
            denom: 'hSOL',
        },
        _b[solanaAssets_1.solanaAssets['wSOL'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'wSOL', //fake
            denom: 'wSOL',
        },
        _b[solanaAssets_1.solanaAssets['WIF'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'WIF', //fake
            denom: 'WIF',
        },
        _b[solanaAssets_1.solanaAssets['BONK'].mintAddress] = {
            chainId: 'solana',
            decimals: 5,
            minimalDenom: 'BONK', //fake
            denom: 'BONK',
        },
        _b[solanaAssets_1.solanaAssets['USDT Solana'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'USDT Solana', //fake
            denom: 'USDT Solana',
        },
        //ethereum assets-> base denom is same as ethereum address
        _b[solanaAssets_1.solanaAssets['DAI'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['DAI'].erc20Address),
            denom: 'DAI',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['ETH'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'transfer/channel-1/transfer/channel-52/wei',
            denom: 'ETH',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['USDT Ethereum'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['USDT Ethereum'].erc20Address),
            denom: 'USDT Ethereum',
        },
        _b[solanaAssets_1.solanaAssets['CRV'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['CRV'].erc20Address),
            denom: 'CRV',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['wBTC'].mintAddress] = {
            chainId: 'solana',
            decimals: 8,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['wBTC'].erc20Address),
            denom: 'wBTC',
        },
        _b[solanaAssets_1.solanaAssets['rETH'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['rETH'].erc20Address),
            denom: 'rETH',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['crvUSD'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['crvUSD'].erc20Address),
            denom: 'crvUSD',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['FRAX'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['FRAX'].erc20Address),
            denom: 'FRAX',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['FXS'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['FXS'].erc20Address),
            denom: 'FXS',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['frxETH'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['frxETH'].erc20Address),
            denom: 'frxETH',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['sfrxETH'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['sfrxETH'].erc20Address),
            denom: 'sfrxETH',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['sFRAX'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['sFRAX'].erc20Address),
            denom: 'sFRAX',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['pxETH'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['pxETH'].erc20Address),
            denom: 'pxETH',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['eETH'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['eETH'].erc20Address),
            denom: 'eETH',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['ENA'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['ENA'].erc20Address),
            denom: 'ENA',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['USDe'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['USDe'].erc20Address),
            denom: 'USDe',
            realDecimals: 18,
        },
        _b[solanaAssets_1.solanaAssets['PEPE'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: "transfer/channel-1/transfer/channel-52/".concat(ethereumAssets_1.ethereumAssets['PEPE'].erc20Address),
            denom: 'PEPE',
            realDecimals: 18,
        },
        //cosmos assets
        _b[solanaAssets_1.solanaAssets['PICA'].mintAddress] = {
            chainId: 'solana',
            decimals: 9,
            minimalDenom: 'transfer/channel-1/ppica',
            denom: 'PICA',
            realDecimals: 12,
        },
        _b[solanaAssets_1.solanaAssets['OSMO'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-3/uosmo',
            denom: 'OSMO',
        },
        _b[solanaAssets_1.solanaAssets['ATOM'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-4/uatom',
            denom: 'ATOM',
        },
        _b[solanaAssets_1.solanaAssets['stATOM'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-5/stuatom',
            denom: 'stATOM',
        },
        _b[solanaAssets_1.solanaAssets['IST'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-13/uist',
            denom: 'IST',
        },
        _b[solanaAssets_1.solanaAssets['SEI'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-3/transfer/channel-782/usei',
            denom: 'SEI',
        },
        _b[solanaAssets_1.solanaAssets['SCRT'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-14/uscrt',
            denom: 'SCRT',
        },
        _b[solanaAssets_1.solanaAssets['STARS'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-6/ustars',
            denom: 'STARS',
        },
        _b[solanaAssets_1.solanaAssets['BLD'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-13/ubld',
            denom: 'BLD',
        },
        _b[solanaAssets_1.solanaAssets['STRD'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-5/ustrd',
            denom: 'STRD',
        },
        _b[solanaAssets_1.solanaAssets['SHD'].mintAddress] = {
            chainId: 'solana',
            decimals: 8,
            minimalDenom: 'transfer/channel-1/transfer/channel-26/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
            denom: 'SHD',
        },
        _b[solanaAssets_1.solanaAssets['SILK'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            denom: 'SILK',
        },
        _b[solanaAssets_1.solanaAssets['DOT'].mintAddress] = {
            chainId: 'solana',
            realDecimals: 10,
            decimals: 9,
            minimalDenom: 'transfer/channel-1/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
            denom: 'DOT',
        },
        _b[solanaAssets_1.solanaAssets['KSM'].mintAddress] = {
            chainId: 'solana',
            realDecimals: 12,
            decimals: 9,
            minimalDenom: 'transfer/channel-1/transfer/channel-2/4',
            denom: 'KSM',
        },
        _b[solanaAssets_1.solanaAssets['ARCH'].mintAddress] = {
            chainId: 'solana',
            realDecimals: 18,
            decimals: 9,
            minimalDenom: 'transfer/channel-1/transfer/channel-50/aarch',
            denom: 'ARCH',
        },
        _b[solanaAssets_1.solanaAssets['COREUM'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-56/ucore',
            denom: 'COREUM',
        },
        _b[solanaAssets_1.solanaAssets['XRP'].mintAddress] = {
            chainId: 'solana',
            decimals: 6,
            minimalDenom: 'transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
            denom: 'XRP',
        },
        _b),
    ethereum: (_c = {
            ETH: {
                chainId: 'ethereum',
                denom: 'ETH',
                minimalDenom: 'ETH', //  fake
                decimals: 18,
            }
        },
        _c[ethereumAssets_1.ethereumAssets['PICA'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 12,
            minimalDenom: 'transfer/channel-2/ppica', // real pica name on ethereum
            denom: 'PICA',
        },
        _c[ethereumAssets_1.ethereumAssets['DAI'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['DAI'].erc20Address,
            denom: 'DAI',
        },
        _c[ethereumAssets_1.ethereumAssets['OSMO'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-3/uosmo',
            denom: 'OSMO',
        },
        _c[ethereumAssets_1.ethereumAssets['FXS'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['FXS'].erc20Address,
            denom: 'FXS',
        },
        _c[ethereumAssets_1.ethereumAssets['sFRAX'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['sFRAX'].erc20Address,
            denom: 'sFRAX',
        },
        _c[ethereumAssets_1.ethereumAssets['sfrxETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['sfrxETH'].erc20Address,
            denom: 'sfrxETH',
        },
        _c[ethereumAssets_1.ethereumAssets['ENA'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['ENA'].erc20Address,
            denom: 'ENA',
        },
        _c[ethereumAssets_1.ethereumAssets['FRAX'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['FRAX'].erc20Address,
            denom: 'FRAX',
        },
        _c[ethereumAssets_1.ethereumAssets['frxETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['frxETH'].erc20Address,
            denom: 'frxETH',
        },
        _c[ethereumAssets_1.ethereumAssets['wBTC'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 8,
            minimalDenom: ethereumAssets_1.ethereumAssets['wBTC'].erc20Address,
            denom: 'wBTC',
        },
        _c[ethereumAssets_1.ethereumAssets['stETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['stETH'].erc20Address,
            denom: 'stETH',
        },
        _c[ethereumAssets_1.ethereumAssets['rETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['rETH'].erc20Address,
            denom: 'rETH',
        },
        _c[ethereumAssets_1.ethereumAssets['crvUSD'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['crvUSD'].erc20Address,
            denom: 'crvUSD',
        },
        _c[ethereumAssets_1.ethereumAssets['pxETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['pxETH'].erc20Address,
            denom: 'pxETH',
        },
        _c[ethereumAssets_1.ethereumAssets['eETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['eETH'].erc20Address,
            denom: 'eETH',
        },
        _c[ethereumAssets_1.ethereumAssets['SILK'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: ethereumAssets_1.ethereumAssets['SILK'].erc20Address,
            denom: 'SILK',
        },
        _c[ethereumAssets_1.ethereumAssets['SHD'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 8,
            minimalDenom: ethereumAssets_1.ethereumAssets['SHD'].erc20Address,
            denom: 'SHD',
        },
        // [ethereumAssets['ezETH'].erc20Address]: {
        // 	chainId: 'ethereum',
        // 	network: 'ETHEREUM',
        // 	decimals: 18,
        // 	minimalDenom: ethereumAssets['ezETH'].erc20Address,
        // 	denom: 'ezETH',
        // },
        _c[ethereumAssets_1.ethereumAssets['ezETH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['ezETH'].erc20Address,
            denom: 'ezETH',
        },
        _c[ethereumAssets_1.ethereumAssets['USDe'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['USDe'].erc20Address,
            denom: 'USDe',
        },
        _c[ethereumAssets_1.ethereumAssets['PEPE'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['PEPE'].erc20Address,
            denom: 'PEPE',
        },
        _c[ethereumAssets_1.ethereumAssets['USDT Ethereum'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: ethereumAssets_1.ethereumAssets['USDT Ethereum'].erc20Address,
            denom: 'USDT Ethereum',
        },
        _c[ethereumAssets_1.ethereumAssets['CRV'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: ethereumAssets_1.ethereumAssets['CRV'].erc20Address,
            denom: 'CRV',
        },
        _c[ethereumAssets_1.ethereumAssets['ATOM'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-4/uatom',
            denom: 'ATOM',
        },
        _c[ethereumAssets_1.ethereumAssets['STARS'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-6/ustars',
            denom: 'STARS',
        },
        _c[ethereumAssets_1.ethereumAssets['IST'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-13/uist',
            denom: 'IST',
        },
        _c[ethereumAssets_1.ethereumAssets['stATOM'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-5/stuatom',
            denom: 'stATOM',
        },
        _c[ethereumAssets_1.ethereumAssets['BLD'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-13/ubld',
            denom: 'BLD',
        },
        _c[ethereumAssets_1.ethereumAssets['SEI'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-3/transfer/channel-782/usei',
            denom: 'SEI',
        },
        _c[ethereumAssets_1.ethereumAssets['ARCH'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 18,
            minimalDenom: "transfer/channel-2/transfer/channel-50/aarch",
            denom: 'ARCH',
        },
        _c[ethereumAssets_1.ethereumAssets['SCRT'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-14/uscrt',
            denom: 'SCRT',
        },
        _c[ethereumAssets_1.ethereumAssets['STRD'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-5/ustrd',
            denom: 'STRD',
        },
        _c[ethereumAssets_1.ethereumAssets['DOT'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 10,
            minimalDenom: 'transfer/channel-2/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
            denom: 'DOT',
        },
        _c[ethereumAssets_1.ethereumAssets['KSM'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 12,
            minimalDenom: 'transfer/channel-2/transfer/channel-2/4',
            denom: 'KSM',
        },
        _c[ethereumAssets_1.ethereumAssets['SOL'].erc20Address] = {
            chainId: 'ethereum',
            denom: 'SOL',
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['wSOL'].mintAddress),
            decimals: 9,
        },
        _c[ethereumAssets_1.ethereumAssets['JitoSOL'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['JitoSOL'].mintAddress),
            denom: 'JitoSOL',
        },
        _c[ethereumAssets_1.ethereumAssets['mSOL'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['mSOL'].mintAddress),
            denom: 'mSOL',
        },
        // BlazeStake Staked SOL (bSOL)
        _c[ethereumAssets_1.ethereumAssets['bSOL'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['bSOL'].mintAddress),
            denom: 'bSOL',
        },
        // mrgn's Liquid Staking Token (LST)
        _c[ethereumAssets_1.ethereumAssets['LST'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['LST'].mintAddress),
            denom: 'LST',
        },
        // // Blaze (BLZE)
        // BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
        // 	chainId: 'solana' ,
        // 	network: 'SOLANA',
        // 	decimals: 9,
        // 	minimalDenom: 'BLZE', //  fake
        // 	denom: 'BLZE',
        // },
        //  Edgevana Staked SOL
        _c[ethereumAssets_1.ethereumAssets['edgeSOL'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['edgeSOL'].mintAddress),
            denom: 'edgeSOL',
        },
        // //  solend cSOL
        // '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
        // 	chainId: 'solana' ,
        // 	network: 'SOLANA',
        // 	decimals: 9,
        // 	minimalDenom: 'cSOL', //  fake
        // 	denom: 'cSOL',
        // },
        // //  solend cmSOL
        // '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
        // 	chainId: 'solana' ,
        // 	network: 'SOLANA',
        // 	decimals: 9,
        // 	minimalDenom: 'cmSOL', //  fake
        // 	denom: 'cmSOL',
        // },
        // //  solend cmSOL
        // '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
        // 	chainId: 'solana' ,
        // 	network: 'SOLANA',
        // 	decimals: 9,
        // 	minimalDenom: 'cJitoSOL', //  fake
        // 	denom: 'cJitoSOL',
        // },
        // //  solend cbSOL
        // FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
        // 	chainId: 'solana' ,
        // 	network: 'SOLANA',
        // 	decimals: 9,
        // 	minimalDenom: 'cbSOL', //  fake
        // 	denom: 'cbSOL',
        // },
        // // compassSOL
        // Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
        // 	chainId: 'solana' ,
        // 	network: 'SOLANA',
        // 	decimals: 9,
        // 	minimalDenom: 'compassSOL', //  fake
        // 	denom: 'compassSOL',
        // },
        // jupSOL
        _c[ethereumAssets_1.ethereumAssets['jupSOL'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['jupSOL'].mintAddress),
            denom: 'jupSOL',
        },
        // hSOL
        _c[ethereumAssets_1.ethereumAssets['hSOL'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['hSOL'].mintAddress),
            denom: 'hSOL',
        },
        _c[ethereumAssets_1.ethereumAssets['wSOL'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 9,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['wSOL'].mintAddress),
            denom: 'wSOL',
        },
        _c[ethereumAssets_1.ethereumAssets['WIF'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['WIF'].mintAddress),
            denom: 'WIF',
        },
        _c[ethereumAssets_1.ethereumAssets['BONK'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 5,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['BONK'].mintAddress),
            denom: 'BONK',
        },
        _c[ethereumAssets_1.ethereumAssets['USDT Solana'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: "transfer/channel-2/transfer/channel-71/".concat(solanaAssets_1.solanaAssets['USDT Solana'].mintAddress),
            denom: 'USDT Solana',
        },
        _c[ethereumAssets_1.ethereumAssets['COREUM'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-56/ucore',
            denom: 'COREUM',
        },
        _c[ethereumAssets_1.ethereumAssets['XRP'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: 'transfer/channel-2/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
            denom: 'XRP',
        },
        // [ethereumAssets['ASTRO'].erc20Address]: {
        // 	chainId: 'ethereum',
        // 	network: 'ETHEREUM',
        // 	decimals: 6,
        // 	minimalDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
        // 	denom: 'ASTRO',
        // },
        _c[ethereumAssets_1.ethereumAssets['SILK'].erc20Address] = {
            chainId: 'ethereum',
            decimals: 6,
            minimalDenom: "transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd",
            denom: 'SILK',
        },
        _c),
};
