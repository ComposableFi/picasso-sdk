"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildPolkadotXcmTransferV3 = exports.buildPolkadotXcmTransferV2 = exports.buildXcmLimitedReserveTransferV2 = exports.buildXcmVersionedMultiAssetV3 = exports.buildXTokensTransferV3X2 = exports.buildXTokensTransferV3 = exports.buildXTokensMoonbeamTransferV2 = exports.buildXTokensTransferV2 = exports.buildXTokensTransferV1 = exports.buildXcmPalletTransferV2 = exports.buildBatchTransfer = exports.buildXcmPalletTransferV1 = void 0;
var bech32_1 = require("bech32");
var buildXcmPalletTransferV1 = function (fromApi, chainInfo, convertedToAddr, amount) {
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
        V1: {
            parents: 0,
            interior: {
                X1: {
                    Parachain: chainInfo.chainId,
                },
            },
        },
    });
    var beneficiary = fromApi.createType('XcmVersionedMultiLocation', {
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
    var assets = fromApi.createType('XcmVersionedMultiAssets', {
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
    var feeAssetItem = fromApi.createType('u32', 0);
    return function () {
        return fromApi.tx.xcmPallet.reserveTransferAssets(dest, beneficiary, assets, feeAssetItem);
    };
};
exports.buildXcmPalletTransferV1 = buildXcmPalletTransferV1;
var buildBatchTransfer = function (fromApi, path, assetId, amount, polkadotAddr, parachainId) {
    var dest = fromApi.createType('XcmVersionedLocation', {
        V2: {
            parents: 0,
            interior: {
                X1: {
                    Parachain: parachainId,
                },
            },
        },
    });
    var list = [
        { PalletInstance: 192 },
        { GeneralIndex: path.index },
        {
            AccountId32: {
                id: fromApi.createType('AccountId32', polkadotAddr),
                network: 'Any',
            },
        },
    ];
    path.paths.forEach(function (p) {
        list.push({
            AccountId32: {
                network: 'Any',
                id: fromApi.createType('AccountId32', p.chainHop === 'CosmosIbc'
                    ? bech32_1.bech32.decode(p.address || '').words
                    : polkadotAddr),
            },
        });
    });
    var interior = {};
    // for example if number of paths = 3, interior will be X6 including PalletInstance, GeneralIndex and AccountId32
    interior["X".concat(path.paths.length + 3)] = list;
    var beneficiary = fromApi.createType('XcmVersionedLocation', {
        V2: fromApi.createType('XcmV2MultiLocation', {
            parents: 0,
            interior: fromApi.createType('XcmV2MultilocationJunctions', interior),
        }),
    });
    var assets = fromApi.createType('XcmVersionedAssets', {
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
    return function () {
        return fromApi.tx.xcmPallet.reserveTransferAssets(dest, beneficiary, assets, fromApi.createType('u32', 0));
    };
};
exports.buildBatchTransfer = buildBatchTransfer;
var buildXcmPalletTransferV2 = function (fromApi, chainInfo, convertedToAddr, amount) {
    var dest = fromApi.createType('XcmVersionedLocation', {
        V2: {
            parents: 0,
            interior: {
                X1: {
                    Parachain: chainInfo.chainId,
                },
            },
        },
    });
    var beneficiary = fromApi.createType('XcmVersionedLocation', {
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
    var assets = fromApi.createType('XcmVersionedAssets', {
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
    var feeAssetItem = fromApi.createType('u32', 0);
    return function () {
        return fromApi.tx.xcmPallet.reserveTransferAssets(dest, beneficiary, assets, feeAssetItem);
    };
};
exports.buildXcmPalletTransferV2 = buildXcmPalletTransferV2;
var buildXTokensTransferV1 = function (fromApi, convertedToAddr, assetId, amount, toChainId, type) {
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
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
    var getCurrencyId = function () {
        if (type === 'VToken') {
            return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
                VToken: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'KSM'),
            });
        }
        else if (type === 'Native') {
            return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
                Native: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'BNC'),
            });
        }
        else if (type === 'VToken2') {
            return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
                VToken2: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 0),
            });
        }
        return assetId;
    };
    return function () {
        return fromApi.tx.xTokens.transfer(getCurrencyId(), amount, dest, 'unlimited');
    };
};
exports.buildXTokensTransferV1 = buildXTokensTransferV1;
var buildXTokensTransferV2 = function (fromApi, convertedToAddr, assetId, amount, toChainId, type, addrType) {
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
        V2: fromApi.createType('XcmV2MultiLocation', {
            parents: 1,
            interior: fromApi.createType('XcmV2MultilocationJunctions', {
                X2: [
                    fromApi.createType('XcmV2Junction', {
                        Parachain: fromApi.createType('u32', toChainId),
                    }),
                    fromApi.createType('XcmV2Junction', addrType === 'AccountId32'
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
                        }),
                ],
            }),
        }),
        destWeightLimit: fromApi.createType('XcmV2WeightLimit', 'Unlimited'),
    });
    var getCurrencyId = function () {
        if (type === 'VToken') {
            return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
                VToken: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'KSM'),
            });
        }
        else if (type === 'Native') {
            return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
                Native: fromApi.createType('NodePrimitivesCurrencyTokenSymbol', 'BNC'),
            });
        }
        else if (type === 'VToken2') {
            return fromApi.createType('NodePrimitivesCurrencyCurrencyId', {
                VToken2: fromApi.createType('u8', 0),
            });
        }
        return assetId;
    };
    return function () {
        return fromApi.tx.xTokens.transfer(getCurrencyId(), amount, dest, 'unlimited');
    };
};
exports.buildXTokensTransferV2 = buildXTokensTransferV2;
var buildXTokensMoonbeamTransferV2 = function (fromApi, convertedToAddr, assetId, amount, toChainId) {
    var list = [
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
    var interior = {};
    // for example if number of paths = 3, interior will be X6 including PalletInstance, GeneralIndex and AccountId32
    interior["X2"] = list;
    var getCurrencyId = function () {
        if (assetId === '792281' || assetId === '167283') {
            return null;
        }
        return fromApi.createType(toChainId === '2019'
            ? 'MoonbeamRuntimeXcmConfigCurrencyId'
            : 'MoonriverRuntimeXcmConfigCurrencyId', {
            ForeignAsset: fromApi.createType('u128', assetId),
        });
    };
    var dest = fromApi.createType('StagingXcmVersionedMultiLocation', {
        V2: fromApi.createType('StagingXcmV2MultiLocation', {
            parents: 1,
            interior: fromApi.createType('StagingXcmV2MultilocationJunctions', interior),
        }),
        destWeightLimit: fromApi.createType('StagingXcmV3WeightLimit', 'Unlimited'),
    });
    return function () {
        return fromApi.tx.xTokens.transfer(getCurrencyId(), amount, dest, 'unlimited');
    };
};
exports.buildXTokensMoonbeamTransferV2 = buildXTokensMoonbeamTransferV2;
var buildXTokensTransferV3 = function (fromApi, convertedToAddr, assetId, amount) {
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
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
    return function () { return fromApi.tx.xTokens.transfer(assetId, amount, dest, 'unlimited'); };
};
exports.buildXTokensTransferV3 = buildXTokensTransferV3;
var buildXTokensTransferV3X2 = function (fromApi, convertedToAddr, assetId, amount, toChainId) {
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
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
    });
    return function () { return fromApi.tx.xTokens.transfer(assetId, amount, dest, 'unlimited'); };
};
exports.buildXTokensTransferV3X2 = buildXTokensTransferV3X2;
var buildXcmVersionedMultiAssetV3 = function (fromApi, convertedToAddr, toChainId, amount, general_index, para_chain_id) {
    var asset = fromApi.createType('XcmVersionedMultiAsset', {
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
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
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
    return function () { return fromApi.tx.xTokens.transferMultiasset(asset, dest, 'unlimited'); };
};
exports.buildXcmVersionedMultiAssetV3 = buildXcmVersionedMultiAssetV3;
var buildXcmLimitedReserveTransferV2 = function (fromApi, convertedToAddr, toChainId, assetId, amount) {
    var dest = fromApi.createType('XcmVersionedLocation', {
        V2: fromApi.createType('XcmV2MultiLocation', {
            parents: 0,
            interior: {
                X1: {
                    Parachain: toChainId,
                },
            },
        }),
    });
    var beneficiary = fromApi.createType('XcmVersionedLocation', {
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
    var assets = fromApi.createType('XcmVersionedAssets', {
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
    var feeAssetItem = fromApi.createType('u32', 0); // First item in the list.
    return function () {
        return fromApi.tx.xcmPallet.limitedReserveTransferAssets(dest, beneficiary, assets, feeAssetItem, 'unlimited');
    };
};
exports.buildXcmLimitedReserveTransferV2 = buildXcmLimitedReserveTransferV2;
var buildPolkadotXcmTransferV2 = function (fromApi, convertedToAddr, toChainId, assetId, amount) {
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
        V2: fromApi.createType('XcmV2MultiLocation', {
            parents: 1,
            interior: {
                X1: {
                    Parachain: toChainId,
                },
            },
        }),
    });
    var beneficiary = fromApi.createType('XcmVersionedMultiLocation', {
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
    var assets = fromApi.createType('XcmVersionedMultiAssets', {
        V2: assetId === '130' //USDT Kusama
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
                                        GeneralIndex: fromApi.createType('u128', chainInfo.general_index),
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
    var feeAssetItem = fromApi.createType('u32', 0); // First item in the list.
    return function () {
        return fromApi.tx.polkadotXcm.limitedReserveTransferAssets(dest, beneficiary, assets, feeAssetItem, 'unlimited');
    };
};
exports.buildPolkadotXcmTransferV2 = buildPolkadotXcmTransferV2;
var buildPolkadotXcmTransferV3 = function (fromApi, convertedToAddr, toChainId, amount) {
    var dest = fromApi.createType('XcmVersionedMultiLocation', {
        V3: fromApi.createType('XcmV3MultiLocation', {
            parents: 1,
            interior: {
                X1: {
                    Parachain: toChainId,
                },
            },
        }),
    });
    var beneficiary = fromApi.createType('XcmVersionedMultiLocation', {
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
    var assets = fromApi.createType('XcmVersionedMultiAssets', {
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
    var feeAssetItem = fromApi.createType('u32', 0); // First item in the list.
    var destWeightLimit = fromApi.createType('XcmV3WeightLimit', 'Unlimited');
    return function () {
        return fromApi.tx.polkadotXcm.limitedReserveTransferAssets(dest, beneficiary, assets, feeAssetItem, destWeightLimit);
    };
};
exports.buildPolkadotXcmTransferV3 = buildPolkadotXcmTransferV3;
