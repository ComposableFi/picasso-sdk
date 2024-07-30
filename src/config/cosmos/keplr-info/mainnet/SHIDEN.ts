export const SHIDEN = {
  enabled: true,
  handler: 'POLKADOT',
  config: {
    endpoint: ['wss://shiden-rpc.dwellir.com'],
    chain_type: 'PARA_CHAIN',
    assetId: '2007',
    ss58_format: 5,
    name: 'Shiden',
    chainId: 'shiden',
    dotChainId: '2007',
  },
  hops: {
    PICASSO: {
      type: 'XCM',
      xcmType: 'polkadotXcm.limitedReserveTransferAssets',
      version: 'V3',
      tokens: ['2007'], // ['SDN'],
    },
  },
};
