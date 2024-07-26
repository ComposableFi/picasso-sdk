// [FAST TRACK] Add asset info to a network here to enable the asset on that network (add to at least 2 networks)
import { getChainIdFromNetwork } from '../../chains/helpers';
import { SecretAssets } from '../../assets/secret';
import { type CrosschainAsset } from '../../assets/assets';
import ethereumAssets from './ethereumAssets';
import solanaAssets from './solanaAssets';

const crossChainAssets = {
  cosmos: {
    //  weird exception for ppica due to double origin in Picasso and Centauri
    ppica: {
      chainId: getChainIdFromNetwork('CENTAURI'),
      network: 'CENTAURI',
      decimals: 12,
      minimalDenom: 'ppica',
      denom: 'PICA',
    },
    uhuahua: {
      chainId: getChainIdFromNetwork('CHIHUAHUA'),
      network: 'CHIHUAHUA',
      decimals: 6,
      minimalDenom: 'uhuahua',
      denom: 'HUAHUA',
    },
    uosmo: {
      chainId: getChainIdFromNetwork('OSMOSIS'),
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
        chainId: getChainIdFromNetwork('OSMOSIS'),
        network: 'OSMOSIS',
        decimals: 6,
        minimalDenom:
          'factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA',
        denom: 'milkTIA',
      },
    'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro':
      {
        chainId: getChainIdFromNetwork('NEUTRON'),
        network: 'NEUTRON',
        decimals: 6,
        minimalDenom:
          'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
        denom: 'ASTRO',
      },
    'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz': {
      chainId: getChainIdFromNetwork('COREUM'),
      network: 'COREUM',
      decimals: 6,
      minimalDenom:
        'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },

    uatom: {
      chainId: getChainIdFromNetwork('COSMOS'),
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
      chainId: getChainIdFromNetwork('STARGAZE'),
      network: 'STARGAZE',
      decimals: 6,
      minimalDenom: 'ustars',
      denom: 'STARS',
    },
    ucre: {
      chainId: getChainIdFromNetwork('CRESCENT'),
      network: 'CRESCENT',
      decimals: 6,
      minimalDenom: 'ucre',
      denom: 'CRE',
    },
    uscrt: {
      chainId: getChainIdFromNetwork('SECRET'),
      network: 'SECRET',
      decimals: 6,
      minimalDenom: 'uscrt',
      denom: 'SCRT',
    },
    untrn: {
      chainId: getChainIdFromNetwork('NEUTRON'),
      network: 'NEUTRON',
      decimals: 6,
      minimalDenom: 'untrn',
      denom: 'NTRN',
    },
    uumee: {
      chainId: getChainIdFromNetwork('UMEE'),
      network: 'UMEE',
      decimals: 6,
      minimalDenom: 'uumee',
      denom: 'UMEE',
    },
    ubld: {
      chainId: getChainIdFromNetwork('AGORIC'),
      network: 'AGORIC',
      decimals: 6,
      minimalDenom: 'ubld',
      denom: 'BLD',
    },
    ubcre: {
      chainId: getChainIdFromNetwork('CRESCENT'),
      network: 'CRESCENT',
      decimals: 6,
      minimalDenom: 'ubcre',
      denom: 'bCRE',
    },
    uist: {
      chainId: getChainIdFromNetwork('AGORIC'),
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
    ...SecretAssets,
    utia: {
      chainId: getChainIdFromNetwork('CELESTIA'),
      network: 'CELESTIA',
      decimals: 6,
      minimalDenom: 'utia',
      denom: 'TIA',
    },
    ukuji: {
      chainId: getChainIdFromNetwork('KUJIRA'),
      network: 'KUJIRA',
      decimals: 6,
      minimalDenom: 'ukuji',
      denom: 'KUJI',
    },
    uqck: {
      chainId: getChainIdFromNetwork('QUICKSILVER'),
      network: 'QUICKSILVER',
      decimals: 6,
      minimalDenom: 'uqck',
      denom: 'QCK',
    },
    inj: {
      chainId: getChainIdFromNetwork('INJECTIVE'),
      network: 'INJECTIVE',
      decimals: 18,
      minimalDenom: 'inj',
      denom: 'INJ',
    },
    ucore: {
      chainId: getChainIdFromNetwork('COREUM'),
      network: 'COREUM',
      decimals: 6,
      minimalDenom: 'ucore',
      denom: 'COREUM',
    },

    // ubedrock: {
    // 	chainId: getChainIdFromNetwork('INJECTIVE'),
    // 	network: 'INJECTIVE',
    // 	decimals: 18,
    // 	minimalDenom: 'inj',
    // 	denom: 'INJ',
    // },
    aarch: {
      chainId: getChainIdFromNetwork('ARCHWAY'),
      network: 'ARCHWAY',
      decimals: 18,
      minimalDenom: 'aarch',
      denom: 'ARCH',
    },
    [ethereumAssets['DAI'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['DAI'].erc20Address,
      denom: 'DAI',
    },
    wei: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: 'wei',
      denom: 'ETH',
    },
    [ethereumAssets['FXS'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['FXS'].erc20Address,
      denom: 'FXS',
    },
    [ethereumAssets['sFRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['sFRAX'].erc20Address,
      denom: 'sFRAX',
    },
    [ethereumAssets['sfrxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI', // This asset is from ethereum, but exist at centauri since is is hub
      decimals: 18,
      minimalDenom: ethereumAssets['sfrxETH'].erc20Address,
      denom: 'sfrxETH',
    },
    [ethereumAssets['ENA'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['ENA'].erc20Address,
      denom: 'ENA',
    },
    [ethereumAssets['FRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['FRAX'].erc20Address,
      denom: 'FRAX',
    },
    [ethereumAssets['frxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['frxETH'].erc20Address,
      denom: 'frxETH',
    },
    [ethereumAssets['wBTC'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 8,
      minimalDenom: ethereumAssets['wBTC'].erc20Address,
      denom: 'wBTC',
    },
    [ethereumAssets['stETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['stETH'].erc20Address,
      denom: 'stETH',
    },
    [ethereumAssets['rETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['rETH'].erc20Address,
      denom: 'rETH',
    },
    [ethereumAssets['crvUSD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['crvUSD'].erc20Address,
      denom: 'crvUSD',
    },
    [ethereumAssets['pxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['pxETH'].erc20Address,
      denom: 'pxETH',
    },
    [ethereumAssets['eETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['eETH'].erc20Address,
      denom: 'eETH',
    },
    [ethereumAssets['ezETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['ezETH'].erc20Address,
      denom: 'ezETH',
    },
    [ethereumAssets['USDe'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['USDe'].erc20Address,
      denom: 'USDe',
    },
    [ethereumAssets['PEPE'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['PEPE'].erc20Address,
      denom: 'PEPE',
    },
    [ethereumAssets['USDT Ethereum'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 6,
      minimalDenom: ethereumAssets['USDT Ethereum'].erc20Address,
      denom: 'USDT Ethereum',
    },
    [ethereumAssets['CRV'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'CENTAURI',
      decimals: 18,
      minimalDenom: ethereumAssets['CRV'].erc20Address,
      denom: 'CRV',
    },
    [solanaAssets['wSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      denom: 'wSOL', // It is named SOL at cosmos
      minimalDenom: solanaAssets['wSOL'].mintAddress,
      network: 'CENTAURI',
      decimals: 9, // need to check
    },
    [solanaAssets['USDT Solana'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      denom: 'USDT Solana',
      minimalDenom: solanaAssets['USDT Solana'].mintAddress,
      decimals: 6,
    },
    [solanaAssets['WIF'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      decimals: 6,
      minimalDenom: solanaAssets['WIF'].mintAddress, //fake
      denom: 'WIF',
    },
    [solanaAssets['BONK'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      decimals: 5,
      minimalDenom: solanaAssets['BONK'].mintAddress, //fake
      denom: 'BONK',
    },
    [solanaAssets['WHINE'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'CENTAURI',
      decimals: 6,
      minimalDenom: solanaAssets['WHINE'].mintAddress, //  fake
      denom: 'WHINE',
    },

    ...SecretAssets,
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
      chainId: getChainIdFromNetwork('SHIDEN'),
      network: 'SHIDEN',
      decimals: 18,
      minimalDenom: 'uSDN', //  fake
      denom: 'SDN',
    },
    '2125': {
      chainId: getChainIdFromNetwork('TINKERNET'),
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
      chainId: getChainIdFromNetwork('COMPOSABLE'),
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'uDOT', //  fake
      denom: 'DOT',
    },
    '79228162514264337593543950351': {
      chainId: getChainIdFromNetwork('COMPOSABLE'),
      network: 'COMPOSABLE',
      decimals: 10,
      minimalDenom: 'ulsDOT', //  fake
      denom: 'lsDOT',
    },
    //  BLD on composable
    '79228162514264337593543950354': {
      chainId: getChainIdFromNetwork('COMPOSABLE'),
      network: 'COMPOSABLE',
      decimals: 6,
      minimalDenom: 'uBLD', //  fake
      denom: 'BLD',
    },
    //  IST on composable
    '79228162514264337593543950361': {
      chainId: getChainIdFromNetwork('COMPOSABLE'),
      network: 'COMPOSABLE',
      decimals: 6,
      minimalDenom: 'uIST', //  fake
      denom: 'IST',
    },
    // bnc polkadot on composable
    '79228162514264337593543950369': {
      chainId: getChainIdFromNetwork('COMPOSABLE'),
      network: 'COMPOSABLE',
      decimals: 12,
      minimalDenom: 'uBNC_DOT', //  fake
      denom: 'BNC_DOT',
    },
    // vDot on composable
    '79228162514264337593543950370': {
      chainId: getChainIdFromNetwork('COMPOSABLE'),
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
      chainId: 'solana-mainnet',
      denom: 'SOL',
      minimalDenom: 'SOL', //  fake
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
    },
    [solanaAssets['JitoSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'JitoSOL', //  fake
      denom: 'JitoSOL',
    },
    [solanaAssets['mSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'mSOL', //  fake
      denom: 'mSOL',
    },
    [solanaAssets['WHINE'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      realDecimals: 6,
      minimalDenom: 'WHINE', //  fake
      denom: 'WHINE',
    },
    [solanaAssets['hausSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'hausSOL', //  fake
      denom: 'hausSOL',
    },
    // BlazeStake Staked SOL (bSOL)
    [solanaAssets['bSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'bSOL', //  fake
      denom: 'bSOL',
    },
    // mrgn's Liquid Staking Token (LST)
    [solanaAssets['LST'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      realDecimals: 9,
      minimalDenom: 'LST', //  fake
      denom: 'LST',
    },
    // Blaze (BLZE)
    BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'BLZE', //  fake
      denom: 'BLZE',
    },
    //  Edgevana Staked SOL
    [solanaAssets['edgeSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'edgeSOL', //  fake
      denom: 'edgeSOL',
    },
    //  solend cSOL
    '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cSOL', //  fake
      denom: 'cSOL',
    },
    //  solend cmSOL
    '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cmSOL', //  fake
      denom: 'cmSOL',
    },
    //  solend cmSOL
    '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cJitoSOL', //  fake
      denom: 'cJitoSOL',
    },
    //  solend cbSOL
    FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'cbSOL', //  fake
      denom: 'cbSOL',
    },
    // compassSOL
    Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'compassSOL', //  fake
      denom: 'compassSOL',
    },
    // jupSOL
    [solanaAssets['jupSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'jupSOL', //  fake
      denom: 'jupSOL',
    },
    // hSOL
    [solanaAssets['hSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'hSOL', //  fake
      denom: 'hSOL',
    },
    [solanaAssets['wSOL'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'wSOL', //fake
      denom: 'wSOL',
    },

    [solanaAssets['WIF'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'WIF', //fake
      denom: 'WIF',
    },
    [solanaAssets['BONK'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 5,
      minimalDenom: 'BONK', //fake
      denom: 'BONK',
    },
    [solanaAssets['USDT Solana'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'USDT Solana', //fake
      denom: 'USDT Solana',
    },
    //ethereum assets-> base denom is same as ethereum address
    [solanaAssets['DAI'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['DAI'].erc20Address}`,
      denom: 'DAI',
      realDecimals: 18,
    },
    [solanaAssets['ETH'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-52/wei',
      denom: 'ETH',
      realDecimals: 18,
    },
    [solanaAssets['USDT Ethereum'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['USDT Ethereum'].erc20Address}`,
      denom: 'USDT Ethereum',
    },
    [solanaAssets['CRV'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['CRV'].erc20Address}`,
      denom: 'CRV',
      realDecimals: 18,
    },
    [solanaAssets['wBTC'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 8,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['wBTC'].erc20Address}`,
      denom: 'wBTC',
    },
    [solanaAssets['rETH'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['rETH'].erc20Address}`,
      denom: 'rETH',
      realDecimals: 18,
    },
    [solanaAssets['crvUSD'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['crvUSD'].erc20Address}`,
      denom: 'crvUSD',
      realDecimals: 18,
    },
    [solanaAssets['FRAX'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['FRAX'].erc20Address}`,
      denom: 'FRAX',
      realDecimals: 18,
    },
    [solanaAssets['FXS'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['FXS'].erc20Address}`,
      denom: 'FXS',
      realDecimals: 18,
    },
    [solanaAssets['frxETH'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['frxETH'].erc20Address}`,
      denom: 'frxETH',
      realDecimals: 18,
    },
    [solanaAssets['sfrxETH'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['sfrxETH'].erc20Address}`,
      denom: 'sfrxETH',
      realDecimals: 18,
    },
    [solanaAssets['sFRAX'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['sFRAX'].erc20Address}`,
      denom: 'sFRAX',
      realDecimals: 18,
    },
    [solanaAssets['pxETH'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['pxETH'].erc20Address}`,
      denom: 'pxETH',
      realDecimals: 18,
    },
    [solanaAssets['eETH'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['eETH'].erc20Address}`,
      denom: 'eETH',
      realDecimals: 18,
    },
    [solanaAssets['ENA'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['ENA'].erc20Address}`,
      denom: 'ENA',
      realDecimals: 18,
    },
    [solanaAssets['USDe'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['USDe'].erc20Address}`,
      denom: 'USDe',
      realDecimals: 18,
    },
    [solanaAssets['PEPE'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: `transfer/channel-1/transfer/channel-52/${ethereumAssets['PEPE'].erc20Address}`,
      denom: 'PEPE',
      realDecimals: 18,
    },

    //cosmos assets
    [solanaAssets['PICA'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 9,
      minimalDenom: 'transfer/channel-1/ppica',
      denom: 'PICA',
      realDecimals: 12,
    },

    [solanaAssets['OSMO'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-3/uosmo',
      denom: 'OSMO',
    },
    [solanaAssets['ATOM'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-4/uatom',
      denom: 'ATOM',
    },
    [solanaAssets['stATOM'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-5/stuatom',
      denom: 'stATOM',
    },
    [solanaAssets['IST'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-13/uist',
      denom: 'IST',
    },
    [solanaAssets['SEI'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-3/transfer/channel-782/usei',
      denom: 'SEI',
    },
    [solanaAssets['SCRT'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-14/uscrt',
      denom: 'SCRT',
    },
    [solanaAssets['STARS'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-6/ustars',
      denom: 'STARS',
    },
    [solanaAssets['BLD'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-13/ubld',
      denom: 'BLD',
    },
    [solanaAssets['STRD'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-5/ustrd',
      denom: 'STRD',
    },
    [solanaAssets['SHD'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 8,
      minimalDenom:
        'transfer/channel-1/transfer/channel-26/cw20:secret153wu605vvp934xhd4k9dtd640zsep5jkesstdm',
      denom: 'SHD',
    },
    [solanaAssets['SILK'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
      denom: 'SILK',
    },
    [solanaAssets['DOT'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      realDecimals: 10,
      decimals: 9,
      minimalDenom:
        'transfer/channel-1/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
      denom: 'DOT',
    },
    [solanaAssets['KSM'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      realDecimals: 12,
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-2/4',
      denom: 'KSM',
    },
    [solanaAssets['ARCH'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      realDecimals: 18,
      decimals: 9,
      minimalDenom: 'transfer/channel-1/transfer/channel-50/aarch',
      denom: 'ARCH',
    },
    [solanaAssets['COREUM'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom: 'transfer/channel-1/transfer/channel-56/ucore',
      denom: 'COREUM',
    },

    [solanaAssets['XRP'].mintAddress]: {
      chainId: 'solana-mainnet',
      network: 'SOLANA',
      decimals: 6,
      minimalDenom:
        'transfer/channel-1/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
  } as const satisfies Record<string, CrosschainAsset>,
  ethereum: {
    ETH: {
      chainId: 'ethereum-mainnet',
      denom: 'ETH',
      minimalDenom: 'ETH', //  fake
      network: 'ETHEREUM',
      decimals: 18,
    },
    [ethereumAssets['PICA'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 12,
      minimalDenom: 'transfer/channel-2/ppica', // real pica name on ethereum
      denom: 'PICA',
    },
    [ethereumAssets['DAI'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['DAI'].erc20Address,
      denom: 'DAI',
    },
    [ethereumAssets['OSMO'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-3/uosmo',
      denom: 'OSMO',
    },
    [ethereumAssets['FXS'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['FXS'].erc20Address,
      denom: 'FXS',
    },
    [ethereumAssets['sFRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['sFRAX'].erc20Address,
      denom: 'sFRAX',
    },
    [ethereumAssets['sfrxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['sfrxETH'].erc20Address,
      denom: 'sfrxETH',
    },
    [ethereumAssets['ENA'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['ENA'].erc20Address,
      denom: 'ENA',
    },
    [ethereumAssets['FRAX'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['FRAX'].erc20Address,
      denom: 'FRAX',
    },
    [ethereumAssets['frxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['frxETH'].erc20Address,
      denom: 'frxETH',
    },
    [ethereumAssets['wBTC'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 8,
      minimalDenom: ethereumAssets['wBTC'].erc20Address,
      denom: 'wBTC',
    },
    [ethereumAssets['stETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['stETH'].erc20Address,
      denom: 'stETH',
    },
    [ethereumAssets['rETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['rETH'].erc20Address,
      denom: 'rETH',
    },
    [ethereumAssets['crvUSD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['crvUSD'].erc20Address,
      denom: 'crvUSD',
    },
    [ethereumAssets['pxETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['pxETH'].erc20Address,
      denom: 'pxETH',
    },
    [ethereumAssets['eETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['eETH'].erc20Address,
      denom: 'eETH',
    },
    // [ethereumAssets['SILK'].erc20Address]: {
    //   chainId: "ethereum-mainnet",
    //   network: 'ETHEREUM',
    //   decimals: 6,
    //   minimalDenom: ethereumAssets['SILK'].erc20Address,
    //   denom: 'SILK',
    // },
    [ethereumAssets['SHD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 8,
      minimalDenom: ethereumAssets['SHD'].erc20Address,
      denom: 'SHD',
    },
    // [ethereumAssets['ezETH'].erc20Address]: {
    // 	chainId: "ethereum-mainnet",
    // 	network: 'ETHEREUM',
    // 	decimals: 18,
    // 	minimalDenom: ethereumAssets['ezETH'].erc20Address,
    // 	denom: 'ezETH',
    // },
    [ethereumAssets['ezETH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['ezETH'].erc20Address,
      denom: 'ezETH',
    },
    [ethereumAssets['USDe'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['USDe'].erc20Address,
      denom: 'USDe',
    },
    [ethereumAssets['PEPE'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['PEPE'].erc20Address,
      denom: 'PEPE',
    },
    [ethereumAssets['USDT Ethereum'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: ethereumAssets['USDT Ethereum'].erc20Address,
      denom: 'USDT Ethereum',
    },
    [ethereumAssets['CRV'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: ethereumAssets['CRV'].erc20Address,
      denom: 'CRV',
    },
    [ethereumAssets['ATOM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-4/uatom',
      denom: 'ATOM',
    },
    [ethereumAssets['STARS'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-6/ustars',
      denom: 'STARS',
    },
    [ethereumAssets['IST'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-13/uist',
      denom: 'IST',
    },
    [ethereumAssets['stATOM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-5/stuatom',
      denom: 'stATOM',
    },
    [ethereumAssets['BLD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-13/ubld',
      denom: 'BLD',
    },
    [ethereumAssets['SEI'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom:
        'transfer/channel-2/transfer/channel-3/transfer/channel-782/usei',
      denom: 'SEI',
    },
    [ethereumAssets['ARCH'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 18,
      minimalDenom: `transfer/channel-2/transfer/channel-50/aarch`,
      denom: 'ARCH',
    },
    [ethereumAssets['SCRT'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-14/uscrt',
      denom: 'SCRT',
    },
    [ethereumAssets['STRD'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-5/ustrd',
      denom: 'STRD',
    },
    [ethereumAssets['DOT'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 10,
      minimalDenom:
        'transfer/channel-2/transfer/channel-2/transfer/channel-15/79228162514264337593543950342',
      denom: 'DOT',
    },
    [ethereumAssets['KSM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 12,
      minimalDenom: 'transfer/channel-2/transfer/channel-2/4',
      denom: 'KSM',
    },
    [ethereumAssets['wSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      denom: 'wSOL',
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['wSOL'].mintAddress}`,
      network: 'ETHEREUM',
      decimals: 9,
    },
    [ethereumAssets['JitoSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['JitoSOL'].mintAddress}`,
      denom: 'JitoSOL',
    },
    [ethereumAssets['mSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['mSOL'].mintAddress}`,
      denom: 'mSOL',
    },

    // BlazeStake Staked SOL (bSOL)
    [ethereumAssets['bSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['bSOL'].mintAddress}`,
      denom: 'bSOL',
    },
    // mrgn's Liquid Staking Token (LST)
    [ethereumAssets['LST'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['LST'].mintAddress}`,
      denom: 'LST',
    },
    // // Blaze (BLZE)
    // BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA: {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'BLZE', //  fake
    // 	denom: 'BLZE',
    // },
    //  Edgevana Staked SOL
    [ethereumAssets['edgeSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['edgeSOL'].mintAddress}`,
      denom: 'edgeSOL',
    },
    // //  solend cSOL
    // '5h6ssFpeDeRbzsEHDbTQNH7nVGgsKrZydxdSTnLm6QdV': {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cSOL', //  fake
    // 	denom: 'cSOL',
    // },
    // //  solend cmSOL
    // '3JFC4cB56Er45nWVe29Bhnn5GnwQzSmHVf6eUq9ac91h': {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cmSOL', //  fake
    // 	denom: 'cmSOL',
    // },
    // //  solend cmSOL
    // '6mFgUsvXQTEYrYgowc9pVzYi49XEJA5uHA9gVDURc2pM': {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cJitoSOL', //  fake
    // 	denom: 'cJitoSOL',
    // },
    // //  solend cbSOL
    // FZ8KVvJ1QiytR29ykNz6kkhV6tvsB7XdiKW2s14DftFt: {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'cbSOL', //  fake
    // 	denom: 'cbSOL',
    // },
    // // compassSOL
    // Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h: {
    // 	chainId: "solana-mainnet",
    // 	network: 'SOLANA',
    // 	decimals: 9,
    // 	minimalDenom: 'compassSOL', //  fake
    // 	denom: 'compassSOL',
    // },
    // jupSOL
    [ethereumAssets['jupSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['jupSOL'].mintAddress}`,
      denom: 'jupSOL',
    },
    // hSOL
    [ethereumAssets['hSOL'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 9,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['hSOL'].mintAddress}`,
      denom: 'hSOL',
    },
    // [ethereumAssets['wSOL'].erc20Address]: {
    //   chainId: "ethereum-mainnet",
    //   network: 'ETHEREUM',
    //   decimals: 9,
    //   minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['wSOL'].mintAddress}`,
    //   denom: 'wSOL',
    // },

    [ethereumAssets['WIF'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['WIF'].mintAddress}`,
      denom: 'WIF',
    },
    [ethereumAssets['BONK'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 5,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['BONK'].mintAddress}`,
      denom: 'BONK',
    },
    [ethereumAssets['USDT Solana'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-2/transfer/channel-71/${solanaAssets['USDT Solana'].mintAddress}`,
      denom: 'USDT Solana',
    },
    [ethereumAssets['COREUM'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: 'transfer/channel-2/transfer/channel-56/ucore',

      denom: 'COREUM',
    },
    [ethereumAssets['XRP'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom:
        'transfer/channel-2/transfer/channel-56/drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86studdrz',
      denom: 'XRP',
    },
    // [ethereumAssets['ASTRO'].erc20Address]: {
    // 	chainId: "ethereum-mainnet",
    // 	network: 'ETHEREUM',
    // 	decimals: 6,
    // 	minimalDenom: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
    // 	denom: 'ASTRO',
    // },
    [ethereumAssets['SILK'].erc20Address]: {
      chainId: 'ethereum-mainnet',
      network: 'ETHEREUM',
      decimals: 6,
      minimalDenom: `transfer/channel-1/transfer/channel-26/cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd`,
      denom: 'SILK',
    },
  } as const satisfies Record<string, CrosschainAsset>,
} as const;

export default crossChainAssets;
