// [FAST TRACK] Add asset info to a network here to enable the asset on that network (add to at least 2 networks)
import ethereumAssets from './ethereumAssets';
import solanaAssets from './solanaAssets';
import { CrosschainAsset } from './types';

const crossChainAssets = {
  cosmos: {
    ppica: {
      chainId: 'centauri-1',
      network: 'CENTAURI',
      decimals: 12,
      minimalDenom: 'ppica',
      denom: 'PICA',
    },
    uhuahua: {
      chainId: 'chihuahua-1',
      network: 'CHIHUAHUA',
      decimals: 6,
      minimalDenom: 'uhuahua',
      denom: 'HUAHUA',
    },
    uosmo: {
      chainId: 'osmosis-1',
      network: 'OSMOSIS',
      decimals: 6,
      minimalDenom: 'uosmo',
      denom: 'OSMO',
    },
    stutia: {
      chainId: 'stride-1',
      network: 'STRIDE',
      decimals: 6,
      minimalDenom: 'stutia',
      denom: 'stTIA',
    },
    'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA':
      {
        chainId: 'osmosis-1',
        network: 'OSMOSIS',
        decimals: 6,
        minimalDenom:
          'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
        denom: 'milkTIA',
      },
    'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro':
      {
        chainId: 'neutron-1',
        network: 'NEUTRON',
        decimals: 6,
        minimalDenom:
          'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
        denom: 'ASTRO',
      },
    'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz': {
      chainId: 'coreum-mainnet-1',
      network: 'COREUM',
      decimals: 6,
      minimalDenom:
        'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
    uatom: {
      chainId: 'cosmoshub-4',
      network: 'COSMOS',
      decimals: 6,
      minimalDenom: 'uatom',
      denom: 'ATOM',
    },
    ustrd: {
      chainId: 'stride-1',
      network: 'STRIDE',
      decimals: 6,
      minimalDenom: 'ustrd',
      denom: 'STRD',
    },
    stuatom: {
      chainId: 'stride-1',
      network: 'COSMOS',
      decimals: 6,
      minimalDenom: 'stuatom',
      denom: 'stATOM',
    },
    ustars: {
      chainId: 'stargaze-1',
      network: 'STARGAZE',
      decimals: 6,
      minimalDenom: 'ustars',
      denom: 'STARS',
    },
    ucre: {
      chainId: 'crescent-1',
      network: 'CRESCENT',
      decimals: 6,
      minimalDenom: 'ucre',
      denom: 'CRE',
    },
    uscrt: {
      chainId: 'secret-4',
      network: 'SECRET',
      decimals: 6,
      minimalDenom: 'uscrt',
      denom: 'SCRT',
    },
    untrn: {
      chainId: 'neutron-1',
      network: 'NEUTRON',
      decimals: 6,
      minimalDenom: 'untrn',
      denom: 'NTRN',
    },
    uumee: {
      chainId: 'umee-1',
      network: 'UMEE',
      decimals: 6,
      minimalDenom: 'uumee',
      denom: 'UMEE',
    },
    ubld: {
      chainId: 'agoric-3',
      network: 'AGORIC',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    ubcre: {
      chainId: 'crescent-1',
      network: 'CRESCENT',
      decimals: 6,
      minimalDenom: 'ubcre',
      denom: 'bCRE',
    },
    uist: {
      chainId: 'agoric-3',
      network: 'AGORIC',
      decimals: 6,
      minimalDenom: 'uist',
      denom: 'IST',
    },
    usei: {
      chainId: 'pacific-1',
      network: 'SEI',
      decimals: 6,
      minimalDenom: 'usei',
      denom: 'SEI',
    },
    'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd': {
      chainId: 'secret-4',
      network: 'SECRET',
      decimals: 6,
      minimalDenom: 'usilk',
      denom: 'SILK',
    },
    'cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm': {
      chainId: 'secret-4',
      network: 'SECRET',
      decimals: 8,
      minimalDenom: 'ushd',
      denom: 'SHD',
    },
    utia: {
      chainId: 'celestia',
      network: 'CELESTIA',
      decimals: 6,
      minimalDenom: 'utia',
      denom: 'TIA',
    },
    ukuji: {
      chainId: 'kaiyo-1',
      network: 'KUJIRA',
      decimals: 6,
      minimalDenom: 'ukuji',
      denom: 'KUJI',
    },
    uqck: {
      chainId: 'quicksilver-2',
      network: 'QUICKSILVER',
      decimals: 6,
      minimalDenom: 'uqck',
      denom: 'QCK',
    },
    inj: {
      chainId: 'injective-1',
      network: 'INJECTIVE',
      decimals: 18,
      minimalDenom: 'inj',
      denom: 'INJ',
    },
    ucore: {
      chainId: 'coreum-mainnet-1',
      network: 'COREUM',
      decimals: 6,
      minimalDenom: 'ucore',
      denom: 'COREUM',
    },
    aarch: {
      chainId: 'archway-1',
      network: 'ARCHWAY',
      decimals: 18,
      minimalDenom: 'aarch',
      denom: 'ARCH',
    },
    '0x6b175474e89094c44da98b954eedeac495271d0f': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denom: 'DAI',
    },
    wei: {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: 'wei',
      denom: 'ETH',
    },
    '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom: 'FXS',
    },
    '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      denom: 'sFRAX',
    },
    '0xac3e018457b222d93114458476f3e3416abbe38f': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denom: 'sfrxETH',
    },
    '0x57e114b691db790c35207b2e685d4a43181e6061': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom: 'ENA',
    },
    '0x853d955acef822db058eb8505911ed77f175b99e': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x853d955acef822db058eb8505911ed77f175b99e',
      denom: 'FRAX',
    },
    '0x5e8422345238f34275888049021821e8e08caa1f': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x5e8422345238f34275888049021821e8e08caa1f',
      denom: 'frxETH',
    },
    '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 8,
      minimalDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denom: 'wBTC',
    },
    '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      denom: 'stETH',
    },
    '0xae78736cd615f374d3085123a210448e74fc6393': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0xae78736cd615f374d3085123a210448e74fc6393',
      denom: 'rETH',
    },
    '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      denom: 'crvUSD',
    },
    '0x04c154b66cb340f3ae24111cc767e0184ed00cc6': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      denom: 'pxETH',
    },
    '0x35fa164735182de50811e8e2e824cfb9b6118ac2': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      denom: 'eETH',
    },
    '0xbf5495efe5db9ce00f80364c8b423567e58d2110': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      denom: 'ezETH',
    },
    '0x4c9edd5852cd905f086c759e8383e09bff1e68b3': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      denom: 'USDe',
    },
    '0x6982508145454ce325ddbe47a25d4ec3d2311933': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
      denom: 'PEPE',
    },
    '0xdac17f958d2ee523a2206206994597c13d831ec7': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 6,
      minimalDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denom: 'USDT Ethereum',
    },
    '0xd533a949740bb3306d119cc777fa900ba034cd52': {
      chainId: 'ethereum',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom: 'CRV',
    },
    So11111111111111111111111111111111111111112: {
      chainId: 'solana',
      network: 'CENTAURI',
      denom: 'wSOL',
      minimalDenom: 'So11111111111111111111111111111111111111112',
      decimals: 9,
    },
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
      chainId: 'solana',
      network: 'CENTAURI',
      denom: 'USDT Solana',
      minimalDenom: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
      decimals: 6,
    },
    EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: {
      chainId: 'solana',
      network: 'CENTAURI',
      denom: 'WIF',
      minimalDenom: 'EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm',
      decimals: 6,
    },
    DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
      chainId: 'solana',
      network: 'CENTAURI',
      denom: 'BONK',
      minimalDenom: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
      decimals: 5,
    },
    ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump: {
      chainId: 'solana',
      network: 'CENTAURI',
      denom: 'WHINE',
      minimalDenom: 'ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump',
      decimals: 6,
    },
  } as const satisfies Record<string, CrosschainAsset>,
  dotsama: {
    '1': {
      chainId: '2087',
      denom: 'PICA',
      minimalDenom: 'ppica',
      network: 'PICASSO',
      decimals: 12,
    },
    '4': {
      chainId: '2087',
      network: 'PICASSO',
      minimalDenom: 'uKSM', //  fake
      denom: 'KSM',
      decimals: 12,
    },
    '44': {
      chainId: '2124',
      network: 'AMPLITUDE',
      minimalDenom: 'AMPE', //  fake
      denom: 'AMPE',
      decimals: 12,
    },
    '45': {
      chainId: '2124',
      network: 'AMPLITUDE',
      minimalDenom: 'XLM', //  fake
      denom: 'XLM',
      decimals: 12,
    },
    //  BLD on picasso
    '18': {
      chainId: '2087',
      network: 'PICASSO',
      decimals: 6,
      minimalDenom: 'uBLD', //  fake
      denom: 'BLD',
    },
    '20': {
      chainId: '2087',
      network: 'KUSAMA',
      minimalDenom: 'ulsKSM', //  fake
      denom: 'Liquid Staked Kusama',
      decimals: 12,
    },
    '23': {
      chainId: '2023',
      network: 'PICASSO',
      decimals: 18,
      minimalDenom: 'uMOVR', //  fake
      denom: 'MOVR',
    },
    '25': {
      chainId: '2087',
      network: 'PICASSO',
      minimalDenom: 'uIST', //  fake
      denom: 'IST',
      decimals: 6,
    },
    //  from KSM so this is originDenom
    '31': {
      chainId: '2001',
      denom: 'BNC_KSM',
      minimalDenom: 'uBNC_KSM', //  fake
      network: 'BIFROST_KUSAMA',
      decimals: 12,
    },
    '32': {
      chainId: '2001',
      denom: 'vKSM',
      minimalDenom: 'uvksm', //  fake
      network: 'BIFROST_KUSAMA',
      decimals: 12,
    },
    '35': {
      chainId: 'pacific-1',
      denom: 'SEI',
      minimalDenom: 'uSEI', //  fake
      network: 'SEI',
      decimals: 6,
    },
    '40': {
      chainId: '2004',
      network: 'PICASSO',
      decimals: 18,
      minimalDenom: 'uGLMR', //  fake
      denom: 'GLMR',
    },
    '130': {
      chainId: '2087',
      network: 'PICASSO',
      decimals: 6,
      minimalDenom: 'uUSDT Kusama', //  fake
      denom: 'USDT Kusama',
    },
    '149': {
      chainId: '2087',
      network: 'PICASSO',
      decimals: 6,
      minimalDenom: 'uUSDT Polkadot', //  fake
      denom: 'USDT Polkadot',
    },
    //ASTAR ASTR
    '2006': {
      chainId: '2006',
      network: 'ASTAR',
      decimals: 18,
      minimalDenom: 'uASTR', //  fake
      denom: 'ASTR',
    },
    // shiden SDN
    '2007': {
      chainId: '2007',
      network: 'SHIDEN',
      decimals: 18,
      minimalDenom: 'uSDN', //  fake
      denom: 'SDN',
    },
    '2125': {
      chainId: '2125',
      network: 'TINKERNET',
      decimals: 12,
      minimalDenom: 'uTNKR', //  fake
      denom: 'TNKR',
    },
    '167283': {
      chainId: '2023',
      network: 'PICASSO',
      decimals: 18,
      minimalDenom: 'uMOVR', //  fake
      denom: 'MOVR',
    },
    '792281': {
      chainId: '2004',
      network: 'COMPOSABLE',
      decimals: 18,
      minimalDenom: 'uGLMR', //  fake
      denom: 'GLMR',
    },
    //  Dot's ID in the Asset Registry on Composable, required since DOT outside of Picasso will have this baseDenom in denomTrace
    '79228162514264337593543950342': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'uDOT', //  fake
      denom: 'DOT',
    },
    '79228162514264337593543950351': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'ulsDOT', //  fake
      denom: 'lsDOT',
    },
    //  BLD on composable
    '79228162514264337593543950354': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 6,
      minimalDenom: 'uBLD', //  fake
      denom: 'BLD',
    },
    //  IST on composable
    '79228162514264337593543950361': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 6,
      minimalDenom: 'uIST', //  fake
      denom: 'IST',
    },
    // bnc polkadot on composable
    '79228162514264337593543950369': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 12,
      minimalDenom: 'uBNC_DOT', //  fake
      denom: 'BNC_DOT',
    },
    // vDot on composable
    '79228162514264337593543950370': {
      chainId: '2019',
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'uvdot', //  fake
      denom: 'vDOT',
    },
    '79228162514264337593543950376': {
      chainId: '2004',
      network: 'COMPOSABLE',
      decimals: 18,
      minimalDenom: 'uGLMR', //  fake
      denom: 'GLMR',
    },
    //COMPOSABLE ASTR
    '79228162514264337593543952342': {
      chainId: '2006',
      network: 'COMPOSABLE',
      decimals: 18,
      minimalDenom: 'uASTR', //  fake
      denom: 'ASTR',
    },
  } as const satisfies Record<string, CrosschainAsset>,
  solana: {
    SOL: {
      chainId: 'solana',
      denom: 'SOL',
      minimalDenom: 'SOL', // fake
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
    },
    J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'JitoSOL', // fake
      denom: 'JitoSOL',
    },
    mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'mSOL', // fake
      denom: 'mSOL',
    },
    ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      realDecimals: 6,
      minimalDenom: 'WHINE', // fake
      denom: 'WHINE',
    },
    HausGKcq9G9zM3azwNmgZyzUvYeeqR8h8663PmZpxuDj: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'hausSOL', // fake
      denom: 'hausSOL',
    },
    bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'bSOL', // fake
      denom: 'bSOL',
    },
    LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'LST', // fake
      denom: 'LST',
    },
    BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'BLZE', // fake
      denom: 'BLZE',
    },
    edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'edgeSOL', // fake
      denom: 'edgeSOL',
    },
    '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cSOL', // fake
      denom: 'cSOL',
    },
    '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cmSOL', // fake
      denom: 'cmSOL',
    },
    '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cJitoSOL', // fake
      denom: 'cJitoSOL',
    },
    FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cbSOL', // fake
      denom: 'cbSOL',
    },
    Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'compassSOL', // fake
      denom: 'compassSOL',
    },
    jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'jupSOL', // fake
      denom: 'jupSOL',
    },
    he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'hSOL', // fake
      denom: 'hSOL',
    },
    So11111111111111111111111111111111111111112: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'wSOL', // fake
      denom: 'wSOL',
    },
    EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'WIF', // fake
      denom: 'WIF',
    },
    DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 5,
      minimalDenom: 'BONK', // fake
      denom: 'BONK',
    },
    Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'USDT Solana', // fake
      denom: 'USDT Solana',
    },
    '6SYCn6Hj4X3XV6dzRk8vXa1UyZc4SBvAT7p3e1AcATAx': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x6B175474E89094C44Da98b954EedeAC495271d0F',
      denom: 'DAI',
      realDecimals: 18,
    },
    EXZbXNMbdTbMYpr9J5MUDv29XnWfxLZYyCCtk2tCy7XV: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-52/wei',
      denom: 'ETH',
      realDecimals: 18,
    },
    EHzGKxauSbvLD5xfX4P9StBdQWmyroferGg9aR6oDU9v: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xdAC17F958D2ee523a2206206994597C13D831ec7',
      denom: 'USDT Ethereum',
    },
    '4tjtYi8dCVkE539ANy3qUHhKdqkjzqhn2iW4WSZMfMa6': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xD533a949740bb3306d119CC777fa900bA034cd52',
      denom: 'CRV',
      realDecimals: 18,
    },
    GrkjmJt3KECe6Yi11LZxY88BJ69KyQnRtC6EioFAF1rD: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 8,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      denom: 'wBTC',
    },
    urez9EJo4YNdpQQxw6xrLfF1J3EqJSaVwPGHFNG338B: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xae78736Cd615f374D3085123A210448E74Fc6393',
      denom: 'rETH',
      realDecimals: 18,
    },
    EuBHrXZJa6ZNg6dfhiotxRoHpVpMg6ZsgNc6ZKJ9iUe2: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x674C6Ad92Fd080e4004b2312b45f796a192D27a0',
      denom: 'crvUSD',
      realDecimals: 18,
    },
    A9zVTbwXTwMA3WsYbB7mGKmDZp3UPfd64sjZfZQ8Lk49: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x853d955aCEf822Db058eb8505911ED77F175b99e',
      denom: 'FRAX',
      realDecimals: 18,
    },
    '6jnTywpWt1u6Jh65FTSgUVDxv7Kyfp3f1mwH426LXmB7': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x3432a789b141E659d494c8E074aC4d3c2bDe6a9d',
      denom: 'FXS',
      realDecimals: 18,
    },
    Go2RiPCxrU3dWH7cs52pm2Q2R45HB2ACbYBZsx1vadZd: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x5E8422345238F34275888049021821E8E08CAa1f',
      denom: 'frxETH',
      realDecimals: 18,
    },
    E5Lz7Bi1KZD9VTYXsCZhkWDiztkNzPoX7Jk71xbTkEoA: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xac3E018457B222d93114458476f3E3416Abbe38F',
      denom: 'sfrxETH',
      realDecimals: 18,
    },
    '3AvDivzbMjfin9hSVUBjdYerKroX8jQuNyDVebdRiULE': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xc8E9b3D2AD2C8A2f97DC68cC94a4e7A1429bB10e',
      denom: 'sFRAX',
      realDecimals: 18,
    },
    B1cm3Wf5ZNUdgZ1eaXaNdiy9DCmQudfmspRMBb2TqDjb: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x28CEd45aF1aFF4F5f26E9d07A6dE1170a49a5E06',
      denom: 'pxETH',
      realDecimals: 18,
    },
    CqzASJJsEA1TDvjCahP9pa7wPjqFEdouup6g5eNV71uv: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0x3446F1cD03C04b1BBFcd8d579D68E3fB7793dB95',
      denom: 'eETH',
      realDecimals: 18,
    },
    Aa34MLrb7GfT5uMXnpT9oKnj11gGcXMq61b5kBzTvbnW: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xB749A7b4Ed5E5385418EC743aF6A88CF2641bC6D',
      denom: 'ENA',
      realDecimals: 18,
    },
    GM4RuF5gLcytcq36wNJkX3UBYRKP9hQwJyyRWm6d6o47: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xC2cB1040220768554cf699b0d863A3cd4324ce32',
      denom: 'USDe',
      realDecimals: 18,
    },
    uVYDrZeCeq5T5RBHZZWHfsG12SDCm4MPHX2h8iAcXRh: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-52/0xf14eEEdF22ca7c50a2A98E629E3a91C7f8456A35',
      denom: 'PEPE',
      realDecimals: 18,
    },
    '966vsqwoS3ZBrHesTyAvE7esFV2kaHaDFLLXs4asPdLJ': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'transfer/channel-1/ppica',
      denom: 'PICA',
      realDecimals: 12,
    },
    EpZeFE5ngedGVug3s1VQK9987FEsCY512VtKUKmfzidM: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-3/uosmo',
      denom: 'OSMO',
    },
    '9gjHXkUVtDEPfxXXT9Jj3ZbYbFzS4zN92ewsCH8zGUKc': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-4/uatom',
      denom: 'ATOM',
    },
    '8aHZdc7qrKAPMey7B6VHx3U3xWFBs7BZhdLAYqZBQwea': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-5/stuatom',
      denom: 'stATOM',
    },
    '3bHxPkuJwztJyrZW2T6sZe8GkRjN1BXgw3ViHPcrQdCj': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-13/uist',
      denom: 'IST',
    },
    BajH8K75CHJrmT1hf6QGHSyY5r5tbJYSHrCb7uDNCF5S: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-3/transfer/channel-782/usei',
      denom: 'SEI',
    },
    '6bQZs6ZSaRoaYPsfLibM9ZhZa4Haj4xF5uFJ33Kduc3V': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-14/uscrt',
      denom: 'SCRT',
    },
    HYaNBn8TQCpy1ohJAQ8V8GaLsRFrkudszgQU8uQpWNvB: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-6/ustars',
      denom: 'STARS',
    },
    BtHCXVdDCRqDvuTfmsLK5gcz3WbSBNY5DxpzSxqAcouU: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-13/ubld',
      denom: 'BLD',
    },
    FjK5ms55rMZY42NUKnAayUjA8Q1nA2jhYwkHZUY7KwvE: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-5/ustrd',
      denom: 'STRD',
    },
    '4Atqy7XYeHXLD2thRJtDtBaRassB2Ff4ksefhvzLKxDQ': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 8,
      minimalDenom:
        'transfer/channel-1/transfer/channel-26/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      denom: 'SHD',
    },
    Dcihw3DVQpxF7ri4fsdGaZWrwhtLgCvbkYHXWh1VdhQn: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      denom: 'SILK',
    },
    vbJ16tHqqVKvLq8rgWeGboJvSCoeFjSYYvH77czoT9J: {
      chainId: 'solana',
      network: 'SOLANA',
      realDecimals: 10,
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
      denom: 'DOT',
    },
    '9m8kq5qhocfckRkRnhbAroPmR8zYaXugpyinpkpLnv12': {
      chainId: 'solana',
      network: 'SOLANA',
      realDecimals: 12,
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-2/4',
      denom: 'KSM',
    },
    BxZEQoVDwPT1dGTSnLw4Qvm17up2vvvP88PCSYTncgnk: {
      chainId: 'solana',
      network: 'SOLANA',
      realDecimals: 18,
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-50/aarch',
      denom: 'ARCH',
    },
    '4wQAZCwoJbBmxHNzg8bK7JqDr8x2YdrFfkBpmAdtuHyE': {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-56/ucore',
      denom: 'COREUM',
    },
    DD4Ew6YcPCiJvb9ZQyAktRvgtckubPLTcHdbaK4nVKUW: {
      chainId: 'solana',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
  } as const satisfies Record<string, CrosschainAsset>,
  ethereum: {
    ETH: {
      chainId: 'ethereum',
      denom: 'ETH',
      minimalDenom: 'ETH', // fake
      network: 'ETHEREUM',
      decimals: 18,
    },
    '0xbb63a9b64a80e9338b8ea298c51765e57c4f159c': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 12,
      minimalDenom: 'transfer/channel-2/ppica', // real pica name on ethereum
      denom: 'PICA',
    },
    '0x6b175474e89094c44da98b954eedeac495271d0f': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x6b175474e89094c44da98b954eedeac495271d0f',
      denom: 'DAI',
    },
    '0x9243b3615ed297403c0cafa156c3fa16057526ca': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-3/uosmo',
      denom: 'OSMO',
    },
    '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0',
      denom: 'FXS',
    },
    '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32',
      denom: 'sFRAX',
    },
    '0xac3e018457b222d93114458476f3e3416abbe38f': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0xac3e018457b222d93114458476f3e3416abbe38f',
      denom: 'sfrxETH',
    },
    '0x57e114b691db790c35207b2e685d4a43181e6061': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x57e114b691db790c35207b2e685d4a43181e6061',
      denom: 'ENA',
    },
    '0x853d955acef822db058eb8505911ed77f175b99e': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x853d955acef822db058eb8505911ed77f175b99e',
      denom: 'FRAX',
    },
    '0x5e8422345238f34275888049021821e8e08caa1f': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x5e8422345238f34275888049021821e8e08caa1f',
      denom: 'frxETH',
    },
    '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 8,
      minimalDenom: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      denom: 'wBTC',
    },
    '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      denom: 'stETH',
    },
    '0xae78736cd615f374d3085123a210448e74fc6393': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0xae78736cd615f374d3085123a210448e74fc6393',
      denom: 'rETH',
    },
    '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0xf939e0a03fb07f59a73314e73794be0e57ac1b4e',
      denom: 'crvUSD',
    },
    '0x04c154b66cb340f3ae24111cc767e0184ed00cc6': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x04c154b66cb340f3ae24111cc767e0184ed00cc6',
      denom: 'pxETH',
    },
    '0x35fa164735182de50811e8e2e824cfb9b6118ac2': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x35fa164735182de50811e8e2e824cfb9b6118ac2',
      denom: 'eETH',
    },
    '0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: '0x854b8fc032a5b7828d8de72702f1fdd9bcfb3efa',
      denom: 'SILK',
    },
    // '0x': {
    //   chainId: 'ethereum',
    //   network: 'ETHEREUM',
    //   decimals: 8,
    //   minimalDenom: '0x',
    //   denom: 'SHD',
    // },
    '0xbf5495efe5db9ce00f80364c8b423567e58d2110': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
      denom: 'ezETH',
    },
    '0x4c9edd5852cd905f086c759e8383e09bff1e68b3': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      denom: 'USDe',
    },
    '0x6982508145454ce325ddbe47a25d4ec3d2311933': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0x6982508145454ce325ddbe47a25d4ec3d2311933',
      denom: 'PEPE',
    },
    '0xdac17f958d2ee523a2206206994597c13d831ec7': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      denom: 'USDT Ethereum',
    },
    '0xd533a949740bb3306d119cc777fa900ba034cd52': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: '0xd533a949740bb3306d119cc777fa900ba034cd52',
      denom: 'CRV',
    },
    '0x519ddEff5d142Fc177d95F24952eF3D2EDe530BC': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-4/uatom',
      denom: 'ATOM',
    },
    '0x59e0499554Cdcdfa90CCd96532e5aD5883a2a956': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-6/ustars',
      denom: 'STARS',
    },
    '0x7d1b634d825221E8d8f619c5FA06a3F57dAFd5C6': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-13/uist',
      denom: 'IST',
    },
    '0xA534115DA1C1e51Cb2C6E8bC1fBA23A5189a1de2': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-5/stuatom',
      denom: 'stATOM',
    },
    '0xfd11E3564691A99bF56A3545A86Af2aEb8416CA1': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-13/ubld',
      denom: 'BLD',
    },
    '0x013AdDc6512432304c055CEc20bbb0f6AA5ed7d5': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom:
        'transfer/channel-2/transfer/channel-3/transfer/channel-782/usei',
      denom: 'SEI',
    },
    '0xA88bB3EB033F359FeF934Dd3b4b753847318072C': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: 'transfer/channel-2/transfer/channel-50/aarch',
      denom: 'ARCH',
    },
    '0xF7F00d598b2a651404993E93Df7AE16C3C736F3C': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-14/uscrt',
      denom: 'SCRT',
    },
    '0x3f8Bb8634Ca4A61Aa23cd0DF00C3152E0eaF9587': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-5/ustrd',
      denom: 'STRD',
    },
    '0x21c2c96Dbfa137E23946143c71AC8330F9B44001': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 10,
      minimalDenom:
        'transfer/channel-2/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
      denom: 'DOT',
    },
    '0xB44D6C324A6c15127F1451465f1E1DbC39142A60': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 12,
      minimalDenom: 'transfer/channel-2/transfer/channel-2/4',
      denom: 'KSM',
    },
    '0x9e0f65f56120fcaebe2c0675377332ec60abb1ac': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-56/ucore',
      denom: 'COREUM',
    },
    '0x628f76eab0c1298f7a24d337bbbf1ef8a1ea6a24': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom:
        'transfer/channel-2/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
    '0xd1D82d3Ab815E0B47e38EC2d666c5b8AA05Ae501': {
      chainId: 'ethereum',
      denom: 'wSOL',
      minimalDenom: `transfer/channel-2/transfer/channel-71/So11111111111111111111111111111111111111112`,
      network: 'ETHEREUM',
      decimals: 9,
    },
    '0xDa7Fa7248F62e051ccA4Af2522439A61d3976462': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So`,
      denom: 'mSOL',
    },
    '0xBe90556468e5eE2A15Da99a5C0e045ED0B142143': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn`,
      denom: 'JitoSOL',
    },
    '0xc0732030f4DB63cfE0323dd87b497AE4Ecb43CEc': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1`,
      denom: 'bSOL',
    },
    '0x247dB9746755CF119d3AD68A6f8f60E7E650BFa1': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp`,
      denom: 'LST',
    },
    '0x3d078B97918eDe947aF59E679eceF9fd87C32082': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt`,
      denom: 'edgeSOL',
    },
    '0x5cD8cd3c5e8780cCBc74277f22b099FEFd04F5ef': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v`,
      denom: 'jupSOL',
    },
    '0x963b37d30eee26d0D94C1E5a42Aa5B1371494cA2': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A`,
      denom: 'hSOL',
    },
    '0xCF7e6742266aD5a76ee042e26d3F766c34195E5f': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-2/transfer/channel-71/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm`,
      denom: 'WIF',
    },
    '0x4aeF9BD3fBb09d8f374436D9ec25711A1Be9BaCb': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 5,
      minimalDenom: `transfer/channel-2/transfer/channel-71/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263`,
      denom: 'BONK',
    },
    '0x58efE15C0404aB22F87E4495D71f6f2077e862bE': {
      chainId: 'ethereum',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-2/transfer/channel-71/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB`,
      denom: 'USDT Solana',
    },
  } as const satisfies Record<string, CrosschainAsset>,
} as const;

export default crossChainAssets;
