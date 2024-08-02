import { type ChainInfo as KeplrChainInfo } from '@keplr-wallet/types';
import { ReadonlyDeep } from 'type-fest';

export const NEUTRON = {
  rpc: 'https://neutron-cmp-rpc.polkachu.com',
  rest: 'https://neutron-cmp-api.polkachu.com',
  chainId: 'neutron-1',
  chainName: 'Neutron',
  chainSymbolImageUrl:
    'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/chain.png',
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: 'neutron',
    bech32PrefixAccPub: 'neutronpub',
    bech32PrefixValAddr: 'neutronvaloper',
    bech32PrefixValPub: 'neutronvaloperpub',
    bech32PrefixConsAddr: 'neutronvalcons',
    bech32PrefixConsPub: 'neutronvalconspub',
  },
  currencies: [
    {
      coinDenom: 'NTRN',
      coinMinimalDenom: 'untrn',
      coinDecimals: 6,
      coinGeckoId: 'neutron-3',
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/untrn.png',
    },
    {
      coinDenom: 'wstETH',
      coinMinimalDenom:
        'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
      coinDecimals: 18,
      coinGeckoId: 'wrapped-steth',
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH.png',
    },
    {
      coinDenom: 'NEWT',
      coinMinimalDenom:
        'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
      coinDecimals: 6,
      coinGeckoId: 'newt',
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt.png',
    },
    {
      coinDenom: 'ECLIP',
      coinMinimalDenom:
        'factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron10sr06r3qkhn7xzpw3339wuj77hu06mzna6uht0/eclip.png',
    },
    {
      coinDenom: 'BAD',
      coinMinimalDenom:
        'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad.png',
    },
    {
      coinDenom: 'ASTRO',
      coinMinimalDenom:
        'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/ComposableFi/FE-assets/main/assets%20/tokens/astro.svg',
    },

    {
      coinDenom: 'DSR',
      coinMinimalDenom:
        'factory/neutron1guar6dc2scpxtmmq8reh0q5cv2l37vs0uyfdru/dinosaur',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1guar6dc2scpxtmmq8reh0q5cv2l37vs0uyfdru/dinosaur.png',
    },
    {
      coinDenom: 'NTRL',
      coinMinimalDenom:
        'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll.png',
    },
    {
      coinDenom: 'RETRO',
      coinMinimalDenom:
        'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/retro.png',
    },
    {
      coinDenom: 'CIRCUS',
      coinMinimalDenom:
        'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus.png',
    },
    {
      coinDenom: 'GODRD',
      coinMinimalDenom:
        'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard.png',
    },
    {
      coinDenom: 'GDD',
      coinMinimalDenom:
        'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/gdd.png',
    },
    {
      coinDenom: 'APOLLO',
      coinMinimalDenom:
        'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/apollo.png',
    },
    {
      coinDenom: 'ROOM',
      coinMinimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/ROOM',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/room.png',
    },
    {
      coinDenom: 'GOP',
      coinMinimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/GOP.png',
    },
    {
      coinDenom: 'BOY',
      coinMinimalDenom:
        'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv/boy.png',
    },
    {
      coinDenom: 'CARTEL',
      coinMinimalDenom:
        'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel.png',
    },
    {
      coinDenom: 'MOO',
      coinMinimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/MOO',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/MOO.png',
    },
    {
      coinDenom: 'SCRAP',
      coinMinimalDenom:
        'factory/neutron1qm224945hrkwc5qze40tau499n46ydmulpeagscmsuyxfrds02usf7mnpu/scrap',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron1qm224945hrkwc5qze40tau499n46ydmulpeagscmsuyxfrds02usf7mnpu/SCRAP.png',
    },
    {
      coinDenom: 'WEIRD',
      coinMinimalDenom:
        'factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD',
      coinDecimals: 6,
      coinImageUrl:
        'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/neutron/factory/neutron133xakkrfksq39wxy575unve2nyehg5npx75nph/WEIRD.png',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'NTRN',
      coinMinimalDenom: 'untrn',
      coinDecimals: 6,
      coinGeckoId: 'neutron-3',
      gasPriceStep: {
        low: 0.0053,
        average: 0.0053,
        high: 0.0053,
      },
    },
    {
      coinDenom: 'ATOM',
      coinMinimalDenom:
        'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.0008,
        average: 0.0008,
        high: 0.0008,
      },
    },
    {
      coinDenom: 'USDC',
      coinMinimalDenom:
        'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.008,
        average: 0.008,
        high: 0.008,
      },
    },
    {
      coinDenom: 'wstETH',
      coinMinimalDenom:
        'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
      coinDecimals: 18,
      gasPriceStep: {
        low: 2903231.6597,
        average: 2903231.6597,
        high: 2903231.6597,
      },
    },
    {
      coinDenom: 'DYDX',
      coinMinimalDenom:
        'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
      coinDecimals: 18,
      gasPriceStep: {
        low: 2564102564.1026,
        average: 2564102564.1026,
        high: 2564102564.1026,
      },
    },
    {
      coinDenom: 'TIA',
      coinMinimalDenom:
        'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.0004,
        average: 0.0004,
        high: 0.0004,
      },
    },
    {
      coinDenom: 'stATOM',
      coinMinimalDenom:
        'ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C',
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.0006,
        average: 0.0006,
        high: 0.0006,
      },
    },
  ],
  features: ['cosmwasm'],
};
