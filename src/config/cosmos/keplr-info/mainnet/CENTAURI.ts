import { generateBech32Config } from '../helpers';

const baseAddr = 'pica';
export const CENTAURI = {
  chainId: 'centauri-1',
  chainName: 'centauri',
  rpc: `https://picasso-rpc.polkachu.com`,
  rest: `https://picasso-api.polkachu.com`,

  bip44: {
    coinType: 118,
  },
  walletUrlForStaking: 'https://explorer.nodestake.top/composable',
  bech32Config: {
    bech32PrefixAccAddr: 'pica',
    bech32PrefixAccPub: 'picapub',
    bech32PrefixValAddr: 'picavaloper',
    bech32PrefixValPub: 'picavaloperpub',
    bech32PrefixConsAddr: 'picavalcons',
    bech32PrefixConsPub: 'picavalconspub',
  },
  currencies: [
    {
      coinDenom: 'PICA',
      coinMinimalDenom: 'ppica',
      coinDecimals: 12,
      coinGeckoId: 'unknown',
    },
    {
      coinDenom: 'KSM',
      coinMinimalDenom:
        'ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9',
      coinDecimals: 12,
      coinGeckoId: 'kusama',
    },
    {
      coinDenom: 'DOT',
      coinMinimalDenom:
        'ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366',
      coinDecimals: 10,
      coinGeckoId: 'polkadot',
    },
    {
      coinDenom: 'USDT Kusama',
      coinMinimalDenom:
        'ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265',
      coinDecimals: 6,
      coinGeckoId: 'tether',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'PICA',
      coinMinimalDenom: 'ppica',
      coinDecimals: 12,
      coinGeckoId: 'unknown',
      gasPriceStep: {
        low: 0,
        average: 0,
        high: 0,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: 'PICA',
    coinMinimalDenom: 'ppica',
    coinDecimals: 12,
    coinGeckoId: 'unknown',
  },
  features: ['ibc-transfer', 'ibc-go'],
};
