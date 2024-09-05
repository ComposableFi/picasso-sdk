import { type ApiPromise } from '@polkadot/api';
import { type AccountId32 } from '@polkadot/types/interfaces/runtime';
import { bech32 } from 'bech32';

import { type MultihopRoutePath } from '../cosmos/types';

interface Interior {
  PalletInstance?: number;
  GeneralIndex?: number;
  AccountId32?: { network: string; id: AccountId32 };
}

export const buildXcmPalletTransferV1 = (
  fromApi: ApiPromise,
  chainInfo,
  convertedToAddr: string,
  amount: string
) => {
  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V1: {
      parents: 0,
      interior: {
        X1: {
          Parachain: chainInfo.chainId,
        },
      },
    },
  });
  const beneficiary = fromApi.createType('XcmVersionedMultiLocation', {
    V1: fromApi.createType('XcmV1MultiLocation', {
      parents: 0,
      interior: {
        X1: {
          AccountId32: {
            id: fromApi.createType('AccountId32', convertedToAddr),
            network: 'Any',
          },
        },
      },
    }),
  });

  const assets = fromApi.createType('XcmVersionedMultiAssets', {
    V1: [
      {
        id: {
          Concrete: {
            parents: 0,
            interior: 'Here',
          },
        },
        fun: {
          Fungible: amount.toString(),
        },
      },
    ],
  });
  const feeAssetItem = fromApi.createType('u32', 0);
  return () =>
    fromApi.tx.xcmPallet.reserveTransferAssets(
      dest,
      beneficiary,
      assets,
      feeAssetItem
    );
};
export const buildBatchTransfer = (
  fromApi: ApiPromise,
  path: MultihopRoutePath,
  assetId: string,
  amount: string,
  polkadotAddr: string,
  parachainId: string
) => {
  const dest = fromApi.createType('XcmVersionedLocation', {
    V2: {
      parents: 0,
      interior: {
        X1: {
          Parachain: parachainId,
        },
      },
    },
  });
  const list: Interior[] = [
    { PalletInstance: 192 },
    { GeneralIndex: path.index },
    {
      AccountId32: {
        id: fromApi.createType('AccountId32', polkadotAddr),
        network: 'Any',
      },
    },
  ];

  path.paths.forEach((p) => {
    list.push({
      AccountId32: {
        network: 'Any',
        id: fromApi.createType(
          'AccountId32',
          p.chainHop === 'CosmosIbc'
            ? bech32.decode(p.address || '').words
            : polkadotAddr
        ),
      },
    });
  });

  const interior = {};
  // for example if number of paths = 3, interior will be X6 including PalletInstance, GeneralIndex and AccountId32
  interior[`X${path.paths.length + 3}`] = list;

  const beneficiary = fromApi.createType('XcmVersionedLocation', {
    V2: fromApi.createType('XcmV2MultiLocation', {
      parents: 0,
      interior: fromApi.createType('XcmV2MultilocationJunctions', interior),
    }),
  });

  const assets = fromApi.createType('XcmVersionedAssets', {
    V2: [
      {
        id: {
          Concrete: {
            parents: 0,
            interior: 'Here',
          },
        },
        fun: {
          Fungible: amount,
        },
      },
    ],
  });

  return () =>
    fromApi.tx.xcmPallet.reserveTransferAssets(
      dest,
      beneficiary,
      assets,
      fromApi.createType('u32', 0)
    );
};

export const buildXcmPalletTransferV2 = (
  fromApi: ApiPromise,
  chainInfo,
  convertedToAddr: string,
  amount: string
) => {
  const dest = fromApi.createType('XcmVersionedLocation', {
    V2: {
      parents: 0,
      interior: {
        X1: {
          Parachain: chainInfo.chainId,
        },
      },
    },
  });
  const beneficiary = fromApi.createType('XcmVersionedLocation', {
    V2: fromApi.createType('XcmV2MultiLocation', {
      parents: 0,
      interior: {
        X1: {
          AccountId32: {
            id: fromApi.createType('AccountId32', convertedToAddr),
            network: 'Any',
          },
        },
      },
    }),
  });

  const assets = fromApi.createType('XcmVersionedAssets', {
    V2: [
      {
        id: {
          Concrete: {
            parents: 0,
            interior: 'Here',
          },
        },
        fun: {
          Fungible: amount.toString(),
        },
      },
    ],
  });

  const feeAssetItem = fromApi.createType('u32', 0);
  return () =>
    fromApi.tx.xcmPallet.reserveTransferAssets(
      dest,
      beneficiary,
      assets,
      feeAssetItem
    );
};

export const buildXTokensTransferV1 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  assetId: string,
  amount: string,
  toChainId: string,
  type: 'VToken' | 'Native' | 'AssetId' | 'VToken2'
) => {
  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V1: fromApi.createType('XcmV1MultiLocation', {
      parents: 1,
      interior: fromApi.createType('XcmV1MultilocationJunctions', {
        X2: [
          fromApi.createType('XcmV1Junction', {
            Parachain: fromApi.createType('u32', toChainId),
          }),
          fromApi.createType('XcmV1Junction', {
            //suspicious
            AccountId32: {
              id: fromApi.createType('AccountId32', convertedToAddr),
              network: 'Any',
            },
          }),
        ],
      }),
    }),
    destWeightLimit: fromApi.createType('XcmV2WeightLimit', 'Unlimited'),
  });
  const getCurrencyId = () => {
    if (type === 'VToken') {
      return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
        VToken: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'KSM'),
      });
    } else if (type === 'Native') {
      return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
        Native: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'BNC'),
      });
    } else if (type === 'VToken2') {
      return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
        VToken2: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 0),
      });
    }
    return assetId;
  };

  return () =>
    fromApi.tx.xTokens.transfer(
      getCurrencyId() as any,
      amount,
      dest as any,
      'unlimited'
    );
};
export const buildXTokensTransferV2 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  assetId: string,
  amount: string,
  toChainId: string,

  type: 'VToken' | 'Native' | 'AssetId' | 'VToken2',
  addrType: 'AccountId32' | 'AccountKey20'
) => {
  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V2: fromApi.createType('XcmV2MultiLocation', {
      parents: 1,
      interior: fromApi.createType('XcmV2MultilocationJunctions', {
        X2: [
          fromApi.createType('XcmV2Junction', {
            Parachain: fromApi.createType('u32', toChainId),
          }),
          fromApi.createType(
            'XcmV2Junction',
            addrType === 'AccountId32'
              ? {
                  AccountId32: {
                    id: fromApi.createType(addrType, convertedToAddr),
                    network: 'Any',
                  },
                }
              : {
                  AccountKey20: {
                    key: convertedToAddr,
                    network: 'Any',
                  },
                }
          ),
        ],
      }),
    }),
    destWeightLimit: fromApi.createType('XcmV2WeightLimit', 'Unlimited'),
  });
  const getCurrencyId = () => {
    if (type === 'VToken') {
      return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
        VToken: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'KSM'),
      });
    } else if (type === 'Native') {
      return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
        Native: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'BNC'),
      });
    } else if (type === 'VToken2') {
      return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
        VToken2: fromApi.createType('u8', 0),
      });
    }
    return assetId as any;
  };

  return () =>
    fromApi.tx.xTokens.transfer(getCurrencyId(), amount, dest, 'unlimited');
};

export const buildXTokensMoonbeamTransferV2 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  assetId: string,
  amount: string,
  toChainId: string
) => {
  const list = [
    fromApi.createType('StagingXcmV2Junction', {
      Parachain: fromApi.createType('u32', toChainId),
    }),
    fromApi.createType('StagingXcmV2Junction', {
      AccountId32: {
        id: fromApi.createType('AccountId32', convertedToAddr),
        network: 'Any',
      },
    }),
  ];

  const interior = {};
  // for example if number of paths = 3, interior will be X6 including PalletInstance, GeneralIndex and AccountId32
  interior[`X2`] = list;
  const getCurrencyId = () => {
    if (assetId === '792281' || assetId === '167283') {
      return null;
    }
    return fromApi.createType(
      toChainId === '2019'
        ? 'MoonbeamRuntimeXcmConfigCurrencyId'
        : 'MoonriverRuntimeXcmConfigCurrencyId',
      {
        ForeignAsset: fromApi.createType('u128', assetId),
      }
    ) as any;
  };

  const dest = fromApi.createType('StagingXcmVersionedMultiLocation', {
    V2: fromApi.createType('StagingXcmV2MultiLocation', {
      parents: 1,
      interior: fromApi.createType(
        'StagingXcmV2MultilocationJunctions',
        interior
      ),
    }),
    destWeightLimit: fromApi.createType('StagingXcmV3WeightLimit', 'Unlimited'),
  });

  return () =>
    fromApi.tx.xTokens.transfer(
      getCurrencyId() as any,
      amount,
      dest as any,
      'unlimited'
    );
};

export const buildXTokensTransferV3 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  assetId: string,
  amount: string
) => {
  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V3: fromApi.createType('XcmV3MultiLocation', {
      parents: 1,
      interior: fromApi.createType('XcmV3Junctions', {
        X1: fromApi.createType('XcmV3Junction', {
          AccountId32: {
            id: fromApi.createType('AccountId32', convertedToAddr),
          },
        }),
      }),
    }),
  });
  return () => fromApi.tx.xTokens.transfer(assetId, amount, dest, 'unlimited');
};
export const buildXTokensTransferV3X2 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  assetId: string,
  amount: string,
  toChainId: string
) => {
  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V3: fromApi.createType('StagingXcmV3MultiLocation', {
      parents: 1,
      interior: fromApi.createType('XcmV3Junctions', {
        X2: [
          fromApi.createType('XcmV3Junction', {
            Parachain: fromApi.createType('u32', toChainId),
          }),
          fromApi.createType('XcmV3Junction', {
            AccountId32: {
              id: fromApi.createType('AccountId32', convertedToAddr),
            },
          }),
        ],
      }),
    }),
  }) as any;

  return () => fromApi.tx.xTokens.transfer(assetId, amount, dest, 'unlimited');
};

export const buildXcmVersionedMultiAssetV3 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  toChainId: string,
  amount: string,
  general_index: string,
  para_chain_id: string
) => {
  const asset = fromApi.createType('XcmVersionedMultiAsset', {
    V3: fromApi.createType('XcmV3MultiAsset', {
      id: fromApi.createType('XcmV3MultiassetAssetId', {
        Concrete: fromApi.createType('XcmV3MultiLocation', {
          parents: fromApi.createType('u8', 1),
          interior: fromApi.createType('XcmV3Junctions', {
            X3: [
              fromApi.createType('XcmV3Junction', {
                Parachain: fromApi.createType('u32', toChainId),
              }),
              fromApi.createType('XcmV3Junction', {
                PalletInstance: fromApi.createType('u8', 50),
              }),
              fromApi.createType('XcmV3Junction', {
                GeneralIndex: fromApi.createType('u128', general_index),
              }),
            ],
          }),
        }),
      }),
      fun: fromApi.createType('XcmV3MultiassetFungibility', {
        Fungible: amount,
      }),
    }),
  });

  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V3: fromApi.createType('XcmV3MultiLocation', {
      parents: fromApi.createType('u8', 1),
      interior: fromApi.createType('XcmV3Junctions', {
        X2: [
          fromApi.createType('XcmV3Junction', {
            Parachain: fromApi.createType('Compact<u32>', toChainId),
          }),
          fromApi.createType('XcmV3Junction', {
            AccountId32: {
              id: fromApi.createType('AccountId32', convertedToAddr),
            },
          }),
          fromApi.createType('XcmV3Junction', {
            Parachain: fromApi.createType('Compact<u32>', para_chain_id),
          }),
        ],
      }),
    }),
  });
  // const fee = fromApi.createType('XcmVersionedMultiAsset', {
  // 	V3: fromApi.createType('XcmV3MultiAsset', {
  // 		id: fromApi.createType('XcmV3MultiassetAssetId', {
  // 			Concrete: fromApi.createType('XcmV3MultiLocation', {
  // 				parents: fromApi.createType('u8', 1),
  // 				interior: fromApi.createType('XcmV3Junctions', 'Here'),
  // 			}),
  // 		}),
  // 		fun: fromApi.createType('XcmV3MultiassetFungibility', {
  // 			Fungible: fromApi.createType(
  // 				'u128',
  // 				10_000_000_000 //TODO: fix it
  // 			),
  // 		}),
  // 	}),
  // });

  return () => fromApi.tx.xTokens.transferMultiasset(asset, dest, 'unlimited');
};

export const buildXcmLimitedReserveTransferV2 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  toChainId: string,
  assetId: string,
  amount: string
) => {
  const dest = fromApi.createType('XcmVersionedLocation', {
    V2: fromApi.createType('XcmV2MultiLocation', {
      parents: 0,
      interior: {
        X1: {
          Parachain: toChainId,
        },
      },
    }),
  });
  const beneficiary = fromApi.createType('XcmVersionedLocation', {
    V2: {
      parents: 0,
      interior: {
        X1: {
          AccountId32: {
            id: fromApi.createType('AccountId32', convertedToAddr),
            network: 'Any',
          },
        },
      },
    },
  });
  // Setting up the asset & amount
  const assets = fromApi.createType('XcmVersionedAssets', {
    V2: [
      {
        id: {
          Concrete: {
            parents: 0,
            interior: 'Here',
          },
        },
        fun: {
          Fungible: amount,
        },
      },
    ],
  });
  const feeAssetItem = fromApi.createType('u32', 0); // First item in the list.
  return () =>
    fromApi.tx.xcmPallet.limitedReserveTransferAssets(
      dest,
      beneficiary,
      assets,
      feeAssetItem,
      'unlimited'
    );
};

export const buildPolkadotXcmTransferV2 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  toChainId: string,
  assetId: string,
  amount: string
) => {
  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V2: fromApi.createType('XcmV2MultiLocation', {
      parents: 1,
      interior: {
        X1: {
          Parachain: toChainId,
        },
      },
    }),
  });
  const beneficiary = fromApi.createType('XcmVersionedMultiLocation', {
    V2: {
      parents: 0,
      interior: {
        X1: {
          AccountId32: {
            id: fromApi.createType('AccountId32', convertedToAddr),
            network: 'Any',
          },
        },
      },
    },
  });
  // Setting up the asset & amount
  const assets = fromApi.createType('XcmVersionedMultiAssets', {
    V2:
      assetId === '130' //USDT Kusama
        ? [
            {
              id: {
                Concrete: {
                  parents: 0,
                  interior: {
                    X2: [
                      {
                        PalletInstance: 50,
                      },
                      {
                        GeneralIndex: fromApi.createType(
                          'u128',
                          chainInfo.general_index
                        ),
                      },
                    ],
                  },
                },
              },
              fun: {
                Fungible: amount,
              },
            },
          ]
        : [
            {
              id: {
                Concrete: {
                  parents: assetId === '79228162514264337593543952342' ? 0 : 1,
                  interior: 'Here',
                },
              },
              fun: {
                Fungible: amount,
              },
            },
          ],
  });
  const feeAssetItem = fromApi.createType('u32', 0); // First item in the list.
  return () =>
    fromApi.tx.polkadotXcm.limitedReserveTransferAssets(
      dest,
      beneficiary,
      assets,
      feeAssetItem,
      'unlimited'
    );
};
export const buildPolkadotXcmTransferV3 = (
  fromApi: ApiPromise,
  convertedToAddr: string,
  toChainId: string,
  amount: string
) => {
  const dest = fromApi.createType('XcmVersionedMultiLocation', {
    V3: fromApi.createType('XcmV3MultiLocation', {
      parents: 1,
      interior: {
        X1: {
          Parachain: toChainId,
        },
      },
    }),
  });
  const beneficiary = fromApi.createType('XcmVersionedMultiLocation', {
    V3: fromApi.createType('XcmV3MultiLocation', {
      parents: 0,
      interior: fromApi.createType('XcmV3Junctions', {
        X1: fromApi.createType('XcmV3Junction', {
          AccountId32: {
            id: fromApi.createType('AccountId32', convertedToAddr),
          },
        }),
      }),
    }),
  });
  // Setting up the asset & amount
  const assets = fromApi.createType('XcmVersionedMultiAssets', {
    V3: [
      fromApi.createType('XcmV3MultiAsset', {
        id: fromApi.createType('XcmV3MultiassetAssetId', {
          Concrete: {
            parents: 0,
            interior: fromApi.createType('XcmV3Junctions', 'Here'),
          },
        }),
        fun: fromApi.createType('XcmV3MultiassetFungibility', {
          Fungible: fromApi.createType('u128', amount),
        }),
      }),
    ],
  });
  const feeAssetItem = fromApi.createType('u32', 0); // First item in the list.
  const destWeightLimit = fromApi.createType('XcmV3WeightLimit', 'Unlimited');

  return () =>
    fromApi.tx.polkadotXcm.limitedReserveTransferAssets(
      dest,
      beneficiary,
      assets,
      feeAssetItem,
      destWeightLimit
    );
};
