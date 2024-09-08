var data = [
    {
        name: 'USDT',
        symbol: [85, 83, 68, 84],
        id: '79228162514264337593543950485',
        decimals: 6,
        ratio: {
            n: '1',
            d: '5000000',
        },
        existential_deposit: '200000',
        existentialDeposit: '200000',
    },
    // {
    //   name: 'Equilibrium USD', //does not support
    //   symbol: [69, 81, 68],
    //   id: '79228162514264337593543950463',
    //   decimals: 9,
    //   ratio: {
    //     n: '2',
    //     d: '100000',
    //   },
    //   existential_deposit: '200000',
    //   existentialDeposit: '200000',
    // },
    {
        name: 'BNC_DOT',
        symbol: [66, 78, 67, 32, 80, 111, 108, 107, 97, 100, 111, 116],
        id: '79228162514264337593543950369', //only at composable
        decimals: 12,
        ratio: {
            n: '11',
            d: '1000',
        },
        existential_deposit: '1100000000',
        existentialDeposit: '1100000000',
        exchangeRate: '0.188741',
    },
    {
        name: 'ASTR',
        symbol: [65, 83, 84, 82],
        id: '79228162514264337593543952342',
        decimals: 18,
        ratio: {
            n: '4713901',
            d: '1',
        },
        existential_deposit: '4700000000000000',
        existentialDeposit: '4700000000000000',
        exchangeRate: '0.052479',
    },
    {
        name: 'Equilibrium', //none
        symbol: [69, 81],
        id: '79228162514264337593543952347',
        decimals: 9,
        ratio: {
            n: '7',
            d: '10',
        },
        existential_deposit: '700000000',
        existentialDeposit: '700000000',
    },
    {
        name: 'DOT',
        symbol: [68, 79, 84],
        id: '79228162514264337593543950342',
        decimals: 10,
        ratio: {
            n: '3',
            d: '10000',
        },
        existential_deposit: '21430000',
        existentialDeposit: '21430000',
        exchangeRate: '4.13',
    },
    {
        name: 'vDOT',
        symbol: [118, 68, 79, 84],
        id: '79228162514264337593543950370',
        decimals: 10,
        ratio: {
            n: '4',
            d: '10000',
        },
        existential_deposit: '100000000',
        existentialDeposit: '100000000',
        exchangeRate: '5.713575754720102',
    },
    {
        name: 'lsDOT',
        symbol: [108, 115, 68, 79, 84],
        id: '79228162514264337593543950351',
        decimals: 10,
        ratio: {
            n: '29',
            d: '100000',
        },
        existential_deposit: '21430000',
        existentialDeposit: '21430000',
    },
    {
        name: 'USDC',
        symbol: [85, 83, 68, 67],
        id: '79228162514264337593543950486',
        decimals: 6,
        ratio: {
            n: '1',
            d: '5000000',
        },
        existential_deposit: '200000',
        existentialDeposit: '200000',
    },
    {
        name: 'USDT', //added at picasso
        symbol: [85, 83, 68, 84],
        id: '149',
        decimals: 6,
        ratio: {
            n: '1',
            d: '5000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543950485',
            },
        },
        existential_deposit: '200000',
        existentialDeposit: '200000',
    },
    {
        name: 'USK',
        symbol: [85, 83, 75],
        id: '26',
        decimals: 6,
        ratio: {
            n: '1',
            d: '5000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-27',
                base_denom: 'uusk',
            },
        },
        existential_deposit: '200000',
        existentialDeposit: '200000',
    },
    {
        name: 'SEI',
        symbol: [83, 69, 73],
        id: '35',
        decimals: 6,
        ratio: {
            n: '143',
            d: '100000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-3/transfer/channel-782',
                base_denom: 'usei',
            },
        },
        existential_deposit: '1000000',
        existentialDeposit: '1000000',
        exchangeRate: '0.276379',
    },
    {
        name: 'SILK',
        symbol: [83, 73, 76, 75],
        id: '16',
        decimals: 6,
        ratio: {
            n: '2',
            d: '1000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-26',
                base_denom: 'cw20:secret1fl449muk5yq8dlad7a22nje4p5d2pnsgymhjfd',
            },
        },
        existential_deposit: '20000',
        existentialDeposit: '20000',
        exchangeRate: '1.11',
    },
    {
        name: 'QCK',
        symbol: [81, 67, 75],
        id: '29',
        decimals: 6,
        ratio: {
            n: '1',
            d: '30',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-9',
                base_denom: 'uqck',
            },
        },
        existential_deposit: '333300',
        existentialDeposit: '333300',
        exchangeRate: '0.00823899',
    },
    {
        name: 'MOVR',
        symbol: [77, 79, 86, 82],
        id: '23',
        decimals: 18,
        ratio: {
            n: '40900',
            d: '1',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X2: [
                            {
                                Parachain: '2023',
                            },
                            {
                                PalletInstance: '10',
                            },
                        ],
                    },
                },
            },
        },
        existential_deposit: '4100000000000000',
        existentialDeposit: '4100000000000000',
        exchangeRate: '8.81',
    },
    {
        name: 'USDT Kusama',
        symbol: [85, 83, 68, 84, 32, 75, 117, 115, 97, 109, 97],
        id: '130',
        decimals: 6,
        ratio: {
            n: '2',
            d: '10000000',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X3: [
                            {
                                Parachain: '1000',
                            },
                            {
                                PalletInstance: '50',
                            },
                            {
                                GeneralIndex: '1984',
                            },
                        ],
                    },
                },
            },
        },
        existential_deposit: '1500',
        existentialDeposit: '1500',
        exchangeRate: '1',
    },
    {
        name: 'STRD',
        symbol: [83, 84, 82, 68],
        id: '9',
        decimals: 6,
        ratio: {
            n: '18',
            d: '100000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-5',
                base_denom: 'ustrd',
            },
        },
        existential_deposit: '20000',
        existentialDeposit: '20000',
        exchangeRate: '0.640319',
    },
    {
        name: 'PICA',
        symbol: [80, 73, 67, 65],
        id: '1',
        decimals: 12,
        ratio: null,
        foreign_id: null,
        existential_deposit: '100000000000',
        existentialDeposit: '100000000000',
        exchangeRate: '0.00051113',
    },
    {
        name: 'BNC_KSM',
        symbol: [66, 78, 67, 32, 75, 117, 115, 97, 109, 97],
        id: '31',
        decimals: 12,
        ratio: {
            n: '11',
            d: '10',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X2: [
                            {
                                Parachain: '2001',
                            },
                            {
                                GeneralKey: {
                                    length: '2',
                                    data: [
                                        0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
        },
        existential_deposit: '11000000000',
        existentialDeposit: '11000000000',
        exchangeRate: '0.188741',
    },
    {
        name: 'SDN',
        symbol: [83, 68, 110],
        id: '2007',
        decimals: 18,
        ratio: {
            n: '1000000',
            d: '1',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X1: {
                            Parachain: '2007',
                        },
                    },
                },
            },
        },
        existential_deposit: '1000000000000000',
        existentialDeposit: '1000000000000000',
        exchangeRate: '0.129428',
    },
    {
        name: 'BLD',
        symbol: [66, 76, 68],
        id: '18',
        decimals: 6,
        ratio: {
            n: '12',
            d: '10000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-13',
                base_denom: 'ubld',
            },
        },
        existential_deposit: '120000',
        existentialDeposit: '120000',
        exchangeRate: '0.054234',
    },
    // {
    //   name: 'Equilibrium USD', //does not support
    //   symbol: [69, 81, 68],
    //   id: '127',
    //   decimals: 9,
    //   ratio: {
    //     n: '2',
    //     d: '100000',
    //   },
    //   foreign_id: {
    //     IbcIcs20: {
    //       trace_path: 'transfer/channel-15',
    //       base_denom: '79228162514264337593543950463',
    //     },
    //   },
    //   existential_deposit: '200000',
    //   existentialDeposit: '200000',
    // },
    {
        name: 'Liquid Staked Kusama',
        symbol: [108, 115, 75, 83, 77],
        id: '20',
        decimals: 12,
        ratio: {
            n: '70',
            d: '10000',
        },
        foreign_id: null,
        existential_deposit: '375000000',
        existentialDeposit: '375000000',
    },
    {
        name: 'OSMO',
        symbol: [79, 83, 77, 79],
        id: '8',
        decimals: 6,
        ratio: {
            n: '3',
            d: '10000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-3',
                base_denom: 'uosmo',
            },
        },
        existential_deposit: '40000',
        existentialDeposit: '40000',
        exchangeRate: '0.370691',
    },
    {
        name: 'BNC_DOT',
        symbol: [66, 78, 67, 32, 80, 111, 108, 107, 97, 100, 111, 116],
        id: '33',
        decimals: 12,
        ratio: {
            n: '11',
            d: '1000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543950369',
            },
        },
        existential_deposit: '1100000000',
        existentialDeposit: '1100000000',
        exchangeRate: '0.188741',
    },
    {
        name: 'Karura Dollar',
        symbol: [107, 85, 83, 68],
        id: '129',
        decimals: 12,
        ratio: {
            n: '1',
            d: '1',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X2: [
                            {
                                Parachain: '2000',
                            },
                            {
                                GeneralKey: {
                                    length: '2',
                                    data: [
                                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129,
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
        },
        existential_deposit: '100000000000',
        existentialDeposit: '100000000000',
    },
    {
        name: 'wSOL',
        symbol: [119, 83, 79, 76],
        id: '3',
        decimals: 9,
        ratio: {
            n: '8350000',
            d: '1',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-71/transfer/channel-17',
                base_denom: 'So11111111111111111111111111111111111111112',
            },
        },
        existential_deposit: '5620',
        existentialDeposit: '5620',
        exchangeRate: '129.33',
    },
    {
        name: 'ASTR',
        symbol: [65, 83, 84, 82],
        id: '2006',
        decimals: 18,
        ratio: {
            n: '4713901',
            d: '1',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543952342',
            },
        },
        existential_deposit: '4700000000000000',
        existentialDeposit: '4700000000000000',
        exchangeRate: '0.052479',
    },
    {
        name: 'stATOM',
        symbol: [115, 116, 65, 84, 79, 77],
        id: '10',
        decimals: 6,
        ratio: {
            n: '18',
            d: '1000000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-5',
                base_denom: 'stuatom',
            },
        },
        existential_deposit: '2000',
        existentialDeposit: '2000',
    },
    {
        name: 'NTRN',
        symbol: [78, 84, 82, 78],
        id: '12',
        decimals: 6,
        ratio: {
            n: '5',
            d: '10000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-18',
                base_denom: 'untrn',
            },
        },
        existential_deposit: '60000',
        existentialDeposit: '60000',
        exchangeRate: '0.341433',
    },
    {
        name: 'ATOM',
        symbol: [65, 84, 79, 77],
        id: '7',
        decimals: 6,
        ratio: {
            n: '2',
            d: '100000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-4',
                base_denom: 'uatom',
            },
        },
        existential_deposit: '2000',
        existentialDeposit: '2000',
        exchangeRate: '3.69',
    },
    {
        name: 'UMEE',
        symbol: [85, 77, 69, 69],
        id: '17',
        decimals: 6,
        ratio: {
            n: '5',
            d: '100000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-20',
                base_denom: 'uumee',
            },
        },
        existential_deposit: '1000000',
        existentialDeposit: '1000000',
        exchangeRate: '0.00089998',
    },
    {
        name: 'ETH',
        symbol: [69, 84, 72],
        id: '2',
        decimals: 18,
        ratio: {
            n: '19',
            d: '100',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-52/transfer/channel-17',
                base_denom: 'wei',
            },
        },
        existential_deposit: '200000000000',
        existentialDeposit: '200000000000',
        exchangeRate: '2297.69',
    },
    {
        name: 'Equilibrium',
        symbol: [69, 81],
        id: '2011',
        decimals: 9,
        ratio: {
            n: '7',
            d: '10',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543952347',
            },
        },
        existential_deposit: '700000000',
        existentialDeposit: '700000000',
    },
    {
        name: 'XLM',
        symbol: [88, 76, 77],
        id: '45',
        decimals: 12,
        ratio: {
            n: '5',
            d: '1',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X3: [
                            {
                                Parachain: '2124',
                            },
                            {
                                PalletInstance: '53',
                            },
                            {
                                GeneralIndex: '2',
                            },
                        ],
                    },
                },
            },
        },
        existential_deposit: '2000000000000',
        existentialDeposit: '2000000000000',
    },
    {
        name: 'IST',
        symbol: [73, 83, 84],
        id: '25',
        decimals: 6,
        ratio: {
            n: '2',
            d: '1000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-13',
                base_denom: 'uist',
            },
        },
        existential_deposit: '20000',
        existentialDeposit: '20000',
        exchangeRate: '1.002',
    },
    {
        name: 'CRE',
        symbol: [67, 82, 69],
        id: '13',
        decimals: 6,
        ratio: {
            n: '1',
            d: '100000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-11',
                base_denom: 'ucre',
            },
        },
        existential_deposit: '1000000',
        existentialDeposit: '1000000',
        exchangeRate: '0.00009829',
    },
    {
        name: 'GLMR',
        symbol: [71, 76, 77, 82],
        id: '40',
        decimals: 18,
        ratio: {
            n: '400000',
            d: '1',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79,228,162,514,264,337,593,543,950,376',
            },
        },
        existential_deposit: '40000000000000000',
        existentialDeposit: '40000000000000000',
        exchangeRate: '0.150156',
    },
    {
        name: 'DOT',
        symbol: [68, 79, 84],
        id: '6',
        decimals: 10,
        ratio: {
            n: '3',
            d: '10000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543950342',
            },
        },
        existential_deposit: '21430000',
        existentialDeposit: '21430000',
        exchangeRate: '4.13',
    },
    {
        name: 'KUJI',
        symbol: [75, 85, 74, 73],
        id: '28',
        decimals: 6,
        ratio: {
            n: '3',
            d: '50000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-27',
                base_denom: 'ukuji',
            },
        },
        existential_deposit: '6006',
        existentialDeposit: '6006',
        exchangeRate: '0.412083',
    },
    {
        name: 'KSM',
        symbol: [75, 83, 77],
        id: '4',
        decimals: 12,
        ratio: {
            n: '70',
            d: '10000',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: 'Here',
                },
            },
        },
        existential_deposit: '375000000',
        existentialDeposit: '375000000',
        exchangeRate: '17.98',
    },
    {
        name: 'vDOT',
        symbol: [118, 68, 79, 84],
        id: '34',
        decimals: 10,
        ratio: {
            n: '4',
            d: '10000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543950370',
            },
        },
        existential_deposit: '100000000',
        existentialDeposit: '100000000',
        exchangeRate: '5.713575754720102',
    },
    {
        name: 'INJ',
        symbol: [73, 78, 74],
        id: '24',
        decimals: 18,
        ratio: {
            n: '12500',
            d: '1',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-29',
                base_denom: 'inj',
            },
        },
        existential_deposit: '1250000000000000',
        existentialDeposit: '1250000000000000',
        exchangeRate: '16.38',
    },
    {
        name: 'TIA',
        symbol: [84, 73, 65],
        id: '19',
        decimals: 6,
        ratio: {
            n: '85',
            d: '1000000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-38',
                base_denom: 'utia',
            },
        },
        existential_deposit: '9000',
        existentialDeposit: '9000',
        exchangeRate: '4.01',
    },
    {
        name: 'vKSM',
        symbol: [118, 75, 83, 77],
        id: '32',
        decimals: 12,
        ratio: {
            n: '8',
            d: '1000',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X2: [
                            {
                                Parachain: '2001',
                            },
                            {
                                GeneralKey: {
                                    length: '2',
                                    data: [
                                        1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                                    ],
                                },
                            },
                        ],
                    },
                },
            },
        },
        existential_deposit: '1000000000',
        existentialDeposit: '1000000000',
        exchangeRate: '25.876857207706724',
    },
    {
        name: 'lsDOT',
        symbol: [108, 115, 68, 79, 84],
        id: '27',
        decimals: 10,
        ratio: {
            n: '29',
            d: '100000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543950351',
            },
        },
        existential_deposit: '21430000',
        existentialDeposit: '21430000',
    },
    {
        name: 'SCRT',
        symbol: [83, 67, 82, 84],
        id: '15',
        decimals: 6,
        ratio: {
            n: '6',
            d: '10000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-14',
                base_denom: 'uscrt',
            },
        },
        existential_deposit: '70000',
        existentialDeposit: '70000',
        exchangeRate: '0.192984',
    },
    {
        name: 'USDC',
        symbol: [85, 83, 68, 67],
        id: '150',
        decimals: 6,
        ratio: {
            n: '1',
            d: '5000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-15',
                base_denom: '79228162514264337593543950486',
            },
        },
        existential_deposit: '200000',
        existentialDeposit: '200000',
    },
    {
        name: 'TNKR',
        symbol: [84, 78, 75, 82],
        id: '2125',
        decimals: 12,
        ratio: {
            n: '3',
            d: '100',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X2: [
                            {
                                Parachain: '2125',
                            },
                            {
                                GeneralIndex: '0',
                            },
                        ],
                    },
                },
            },
        },
        existential_deposit: '135000000000',
        existentialDeposit: '135000000000',
        exchangeRate: 0,
    },
    {
        name: 'STARS',
        symbol: [83, 84, 65, 82, 83],
        id: '11',
        decimals: 6,
        ratio: {
            n: '18',
            d: '1000000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-6',
                base_denom: 'ustars',
            },
        },
        existential_deposit: '2000000',
        existentialDeposit: '2000000',
        exchangeRate: '0.00670642',
    },
    {
        name: 'bCRE',
        symbol: [98, 67, 82, 69],
        id: '14',
        decimals: 6,
        ratio: {
            n: '1',
            d: '100000',
        },
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-11',
                base_denom: 'ubcre',
            },
        },
        existential_deposit: '1000000',
        existentialDeposit: '1000000',
        exchangeRate: '0.00012694',
    },
    {
        name: 'HUAHUA',
        symbol: [72, 85, 65, 72, 85, 65],
        id: '420',
        decimals: 6,
        ratio: null,
        foreign_id: {
            IbcIcs20: {
                trace_path: 'transfer/channel-17/transfer/channel-0',
                base_denom: 'uhuahua',
            },
        },
        existential_deposit: '1000000',
        existentialDeposit: '1000000',
        exchangeRate: '0.00004107',
    },
    {
        name: 'AMPE',
        symbol: [65, 77, 80, 69],
        id: '44',
        decimals: 12,
        ratio: {
            n: '1',
            d: '8',
        },
        foreign_id: {
            Xcm: {
                V3: {
                    parents: '1',
                    interior: {
                        X1: {
                            Parachain: '2124',
                        },
                    },
                },
            },
        },
        existential_deposit: '1000000000000000',
        existentialDeposit: '1000000000000000',
        exchangeRate: 0,
    },
];
