export const POLKADOT = {
  enabled: true,
  handler: 'POLKADOT',
  config: {
    endpoint: [
      'wss://rpc.polkadot.io',
      'wss://polkadot-rpc.dwellir.com',
      'wss://1rpc.io/dot',
      'wss://polkadot.api.onfinality.io/public-ws',
    ],
    chain_type: 'RELAY_CHAIN',
    chainId: 'polkadot',
    dotChainId: 'polkadot',
    ss58_format: 0,
    name: 'Polkadot',

    assetId: '79228162514264337593543950342', //  DOT
  },
  hops: {
    COMPOSABLE: {
      type: 'XCM',
      xcmType: 'xcmPallet.limitedReserveTransferAssets',
      version: 'V2',
      tokens: ['4'],
    },
  },
};
