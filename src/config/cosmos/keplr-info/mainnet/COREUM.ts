import { type ChainInfo as KeplrChainInfo } from '@keplr-wallet/types';
import { ReadonlyDeep } from 'type-fest';

export const COREUM = {
  chainId: 'coreum-mainnet-1',
  chainName: 'Coreum',
  chainSymbolImageUrl:
    'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/coreum-mainnet/chain.png',
  rpc: 'https://full-node.mainnet-1.coreum.dev:26657',
  rest: 'https://rest-coreum.ecostake.com',
  nodeProvider: {
    name: 'Coreum Full Node',
    website: 'https://www.coreum.com/',
    email: 'hello@coreum.com',
  },
  bip44: {
    coinType: 990,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'core',
    bech32PrefixAccPub: 'corepub',
    bech32PrefixValAddr: 'corevaloper',
    bech32PrefixValPub: 'corevaloperpub',
    bech32PrefixConsAddr: 'corevalcons',
    bech32PrefixConsPub: 'corevalconspub',
  },
  currencies: [
    {
      coinDenom: 'CORE',
      coinMinimalDenom: 'ucore',
      coinDecimals: 6,
      coinGeckoId: 'coreum',
    },
    {
      coinDenom: 'XRP',
      coinMinimalDenom:
        'drop-core1zhs909jp9yktml6qqx9f0ptcq2xnhhj99cja03j3lfcsp2pgm86stud',
      coinDecimals: 6,
      coinGeckoId: 'ripple',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'CORE',
      coinMinimalDenom: 'ucore',
      coinDecimals: 6,
      coinGeckoId: 'coreum',
      gasPriceStep: {
        low: 0.0625,
        average: 0.0625,
        high: 0.0625,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: 'CORE',
    coinMinimalDenom: 'ucore',
    coinDecimals: 6,
    coinGeckoId: 'coreum',
  },
  features: ['cosmwasm'],
} as const satisfies ReadonlyDeep<KeplrChainInfo>;
