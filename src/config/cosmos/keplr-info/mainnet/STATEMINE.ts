export const STATEMINE = {
  enabled: true,
  handler: 'POLKADOT',
  config: {
    endpoint: [
      'wss://statemine-rpc.dwellir.com',
      'wss://kusama-asset-hub-rpc.polkadot.io',
      'wss://statemine.api.onfinality.io',
    ],
    chain_type: 'PARA_CHAIN',
    chainId: 'statemine',
    dotChainId: '1000',
    assetId: '4',
    ss58_format: 2,
    name: 'Kusama Asset Hub',

    general_index: '1984', // usdt id in statemine
  },
  hops: {
    PICASSO: {
      type: 'XCM',
      xcmType: 'polkadotXcm.limitedReserveTransferAssets',
      version: 'V2',
      tokens: ['130'], // ['BNC_KSM', 'vKSM'],
    },
  },
};
