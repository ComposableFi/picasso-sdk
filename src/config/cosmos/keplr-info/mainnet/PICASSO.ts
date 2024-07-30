export const PICASSO = {
  enabled: true,
  handler: 'POLKADOT',
  config: {
    endpoint: [
      'wss://picasso-rpc.composable.finance',
      'wss://picasso-rpc.dwellir.com',
    ],
    chain_type: 'PARA_CHAIN',
    ss58_format: 49,
    name: 'Picasso',
    chainId: 'picasso',
    dotChainId: '2087',

    assetId: '1',
  },
  hops: {
    COMPOSABLE: {
      type: 'IBC',
      fromChannelId: '15',
      toChannelId: '15',
    },
    CENTAURI: {
      type: 'IBC',
      fromChannelId: '17',
      toChannelId: '2',
    },
    STATEMINE: {
      type: 'XCM',
      xcmType: 'xTokens.transferMultiasset',
      version: 'V3',
      tokens: ['130'], //  USDT Kusama
    },
    TINKERNET: {
      type: 'XCM',
      xcmType: 'xTokens.transfer',
      version: 'V3',
      tokens: ['2125'], //  TNKR
    },
    KUSAMA: {
      type: 'XCM',
      xcmType: 'xTokens.transfer',
      version: 'V3',
      tokens: ['4'],
    },
    BIFROST_KUSAMA: {
      type: 'XCM',
      xcmType: 'xTokens.transfer',
      version: 'V2',
      tokens: ['31', '32'], //['BNC_KSM', 'vKSM'],
    },
  },
};
