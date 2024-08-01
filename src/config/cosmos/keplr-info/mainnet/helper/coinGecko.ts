// [FAST TRACK] Add asset info here to display the USD price from CoinGecko in our UI
const coinGecko = [
  {
    name: 'BLD',
    id: 'agoric',
  },
  {
    name: 'IST',
    id: 'inter-stable-token',
  },
  {
    name: 'ARCH',
    id: 'archway',
  },
  {
    name: 'ASTR',
    id: 'astar',
  },
  {
    name: 'BNC_KSM',
    id: 'bifrost-native-coin',
  },
  {
    name: 'BNC_DOT',
    id: 'bifrost-native-coin',
  },
  {
    name: 'TIA',
    id: 'celestia',
  },
  {
    name: 'HUAHUA',
    id: 'chihuahua-token',
  },
  {
    name: 'DOT',
    id: 'polkadot',
  },
  {
    name: 'BNC_DOT',
    id: 'bifrost-native-coin',
  },
  {
    name: 'ASTR',
    id: 'astar',
  },
  {
    name: 'CORE',
    id: 'coreum',
  },
  {
    name: 'ATOM',
    id: 'cosmos',
  },
  {
    name: 'CRE',
    id: 'crescent-network',
  },
  {
    name: 'bCRE',
    id: 'liquid-staking-crescent',
  },
  {
    name: 'ETH',
    id: 'ethereum',
  },
  {
    name: 'PICA',
    id: 'picasso',
  },
  {
    name: 'DAI',
    id: 'dai',
  },
  {
    name: 'OSMO',
    id: 'osmosis',
  },
  {
    name: 'FXS',
    id: 'frax-share',
  },
  {
    name: 'sFRAX',
    id: 'staked-frax',
  },
  {
    name: 'sfrxETH',
    id: 'staked-frax-ether',
  },
  {
    name: 'ENA',
    id: 'ethena',
  },
  {
    name: 'FRAX',
    id: 'frax',
  },
  {
    name: 'frxETH',
    id: 'frax-ether',
  },
  {
    name: 'wBTC',
    id: 'wrapped-bitcoin',
  },
  {
    name: 'stETH',
    id: 'lido-staked-ether',
  },
  {
    name: 'rETH',
    id: 'rocket-pool-eth',
  },
  {
    name: 'crvUSD',
    id: 'crvusd',
  },
  {
    name: 'pxETH',
    id: 'dinero-staked-eth',
  },
  {
    name: 'eETH',
    id: 'ether-fi-staked-eth',
  },
  {
    name: 'SILK',
    id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
  },
  {
    name: 'ezETH',
    id: 'renzo-restaked-eth',
  },
  {
    name: 'USDe',
    id: 'ethena-usde',
  },
  {
    name: 'PEPE',
    id: 'pepe',
  },
  {
    name: 'USDT Ethereum',
    id: 'tether',
  },
  {
    name: 'CRV',
    id: 'curve-dao-token',
  },
  {
    name: 'ATOM',
    id: 'cosmos',
  },
  {
    name: 'STARS',
    id: 'stargaze',
  },
  {
    name: 'IST',
    id: 'inter-stable-token',
  },
  {
    name: 'stATOM',
    id: 'stride-staked-atom',
  },
  {
    name: 'BLD',
    id: 'agoric',
  },
  {
    name: 'SEI',
    id: 'sei-network',
  },
  {
    name: 'ARCH',
    id: 'archway',
  },
  {
    name: 'SCRT',
    id: 'secret',
  },
  {
    name: 'STRD',
    id: 'stride',
  },
  {
    name: 'DOT',
    id: 'polkadot',
  },
  {
    name: 'KSM',
    id: 'kusama',
  },
  {
    name: 'COREUM',
    id: 'coreum',
  },
  {
    name: 'XRP',
    id: 'ripple',
  },
  {
    name: 'wSOL',
    id: 'wrapped-solana',
  },
  {
    name: 'mSOL',
    id: 'msol',
  },
  {
    name: 'JitoSOL',
    id: 'jito-staked-sol',
  },
  {
    name: 'bSOL',
    id: 'blazestake-staked-sol',
  },
  {
    name: 'LST',
    id: 'liquid-staking-token',
  },
  {
    name: 'edgeSOL',
    id: 'edgevana-staked-sol',
  },
  {
    name: 'WIF',
    id: 'dogwifcoin',
  },
  {
    name: 'BONK',
    id: 'bonk',
  },
  {
    name: 'USDT Solana',
    id: 'tether',
  },
  {
    name: 'INJ',
    id: 'injective-protocol',
  },
  {
    name: 'NINJA',
    id: 'dog-wif-nuchucks',
  },
  {
    name: 'Talis',
    id: 'talis-protocol',
  },
  {
    name: 'KIRA',
    id: 'kira-the-injective-cat',
  },
  {
    name: 'KUJI',
    id: 'kujira',
  },
  {
    name: 'USK',
    id: 'usk',
  },
  {
    name: 'MNTA',
    id: 'mantadao',
  },
  {
    name: 'KSM',
    id: 'kusama',
  },
  {
    name: 'USDT Kusama',
    id: 'tether',
  },
  {
    name: 'GLMR',
    id: 'moonbeam',
  },
  {
    name: 'MOVR',
    id: 'moonriver',
  },
  {
    name: 'NTRN',
    id: 'neutron-3',
  },
  {
    name: 'wstETH',
    id: 'wrapped-steth',
  },
  {
    name: 'NEWT',
    id: 'newt',
  },
  {
    name: 'OSMO',
    id: 'osmosis',
  },
  {
    name: 'ION',
    id: 'ion',
  },
  {
    name: 'LVN',
    id: 'levana-protocol',
  },
  {
    name: 'CDT',
    id: 'collateralized-debt-token',
  },
  {
    name: 'milkTIA',
    id: 'milkyway-staked-tia',
  },
  {
    name: 'WBTC',
    id: 'wrapped-bitcoin',
  },
  {
    name: 'USDT Kusama',
    id: 'tether',
  },
  {
    name: 'TNKR',
    id: 'tinkernet',
  },
  {
    name: 'KSM',
    id: 'kusama',
  },
  {
    name: 'BNC_KSM',
    id: 'bifrost-native-coin',
  },
  {
    name: 'KSM',
    id: 'kusama',
  },
  {
    name: 'QCK',
    id: 'quicksilver',
  },
  {
    name: 'SCRT',
    id: 'secret',
  },
  {
    name: 'SILK',
    id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
  },
  {
    name: 'SHD',
    id: 'shade-protocol',
  },
  {
    name: 'SEI',
    id: 'sei-network',
  },
  {
    name: 'WETH',
    id: 'weth',
  },
  {
    name: 'USDCet',
    id: 'usd-coin',
  },
  {
    name: 'USDTet',
    id: 'tether',
  },
  {
    name: 'WBTC',
    id: 'wrapped-bitcoin',
  },
  {
    name: 'USDCar',
    id: 'usd-coin',
  },
  {
    name: 'WETHar',
    id: 'weth',
  },
  {
    name: 'USDCpo',
    id: 'usd-coin',
  },
  {
    name: 'USDCop',
    id: 'usd-coin',
  },
  {
    name: 'USDCso',
    id: 'usd-coin',
  },
  {
    name: 'USDCbs',
    id: 'usd-coin',
  },
  {
    name: 'WETHbs',
    id: 'weth',
  },
  {
    name: 'USDTbs',
    id: 'tether',
  },
  {
    name: 'SDN',
    id: 'shiden',
  },
  {
    name: 'SOL',
    id: 'solana',
  },
  {
    name: 'JitoSOL',
    id: 'jito-staked-sol',
  },
  {
    name: 'mSOL',
    id: 'msol',
  },
  {
    name: 'bSOL',
    id: 'blazestake-staked-sol',
  },
  {
    name: 'LST',
    id: 'liquid-staking-token',
  },
  {
    name: 'BLZE',
    id: 'solblaze',
  },
  {
    name: 'edgeSOL',
    id: 'edgevana-staked-sol',
  },
  {
    name: 'wSOL',
    id: 'wrapped-solana',
  },
  {
    name: 'WIF',
    id: 'dogwifcoin',
  },
  {
    name: 'BONK',
    id: 'bonk',
  },
  {
    name: 'USDT Solana',
    id: 'tether',
  },
  {
    name: 'DAI',
    id: 'dai',
  },
  {
    name: 'ETH',
    id: 'ethereum',
  },
  {
    name: 'USDT Ethereum',
    id: 'tether',
  },
  {
    name: 'CRV',
    id: 'curve-dao-token',
  },
  {
    name: 'wBTC',
    id: 'wrapped-bitcoin',
  },
  {
    name: 'rETH',
    id: 'rocket-pool-eth',
  },
  {
    name: 'crvUSD',
    id: 'crvusd',
  },
  {
    name: 'FRAX',
    id: 'frax',
  },
  {
    name: 'FXS',
    id: 'frax-share',
  },
  {
    name: 'frxETH',
    id: 'frax-ether',
  },
  {
    name: 'sfrxETH',
    id: 'staked-frax-ether',
  },
  {
    name: 'sFRAX',
    id: 'staked-frax',
  },
  {
    name: 'pxETH',
    id: 'dinero-staked-eth',
  },
  {
    name: 'eETH',
    id: 'ether-fi-staked-eth',
  },
  {
    name: 'ENA',
    id: 'ethena',
  },
  {
    name: 'USDe',
    id: 'ethena-usde',
  },
  {
    name: 'PEPE',
    id: 'pepe',
  },
  {
    name: 'PICA',
    id: 'picasso',
  },
  {
    name: 'OSMO',
    id: 'osmosis',
  },
  {
    name: 'ATOM',
    id: 'cosmos',
  },
  {
    name: 'stATOM',
    id: 'stride-staked-atom',
  },
  {
    name: 'IST',
    id: 'inter-stable-token',
  },
  {
    name: 'SEI',
    id: 'sei-network',
  },
  {
    name: 'SCRT',
    id: 'secret',
  },
  {
    name: 'STARS',
    id: 'stargaze',
  },
  {
    name: 'BLD',
    id: 'agoric',
  },
  {
    name: 'STRD',
    id: 'stride',
  },
  {
    name: 'SHD',
    id: 'shade-protocol',
  },
  {
    name: 'SILK',
    id: 'silk-bcec1136-561c-4706-a42c-8b67d0d7f7d2',
  },
  {
    name: 'DOT',
    id: 'polkadot',
  },
  {
    name: 'KSM',
    id: 'kusama',
  },
  {
    name: 'ARCH',
    id: 'archway',
  },
  {
    name: 'COREUM',
    id: 'coreum',
  },
  {
    name: 'XRP',
    id: 'ripple',
  },
  {
    name: 'STARS',
    id: 'stargaze',
  },
  {
    name: 'STRD',
    id: 'stride',
  },
  {
    name: 'stATOM',
    id: 'stride-staked-atom',
  },
  {
    name: 'stOSMO',
    id: 'stride-staked-osmo',
  },
  {
    name: 'stJUNO',
    id: 'stride-staked-juno',
  },
  {
    name: 'stSTARS',
    id: 'stride-staked-stars',
  },
  {
    name: 'stLUNA',
    id: 'stride-staked-luna',
  },
  {
    name: 'stINJ',
    id: 'stride-staked-injective',
  },
  {
    name: 'stDYDX',
    id: 'stride-staked-dydx',
  },
  {
    name: 'stTIA',
    id: 'stride-staked-tia',
  },
  {
    name: 'stUMEE',
    id: 'stride-staked-umee',
  },
  {
    name: 'stCMDX',
    id: 'stride-staked-comdex',
  },
  {
    name: 'TNKR',
    id: 'tinkernet',
  },
  {
    name: 'UX',
    id: 'umee',
  },
] as const;

export default coinGecko;
