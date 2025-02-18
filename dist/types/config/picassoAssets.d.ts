declare const picassoAssets: ({
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate?: undefined;
    foreign_id?: undefined;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: string;
    foreign_id?: undefined;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        IbcIcs20: {
            trace_path: string;
            base_denom: string;
        };
        Xcm?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate?: undefined;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        IbcIcs20: {
            trace_path: string;
            base_denom: string;
        };
        Xcm?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: string;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X2: ({
                        Parachain: string;
                        PalletInstance?: undefined;
                    } | {
                        PalletInstance: string;
                        Parachain?: undefined;
                    })[];
                    X3?: undefined;
                    X1?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: string;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X3: ({
                        Parachain: string;
                        PalletInstance?: undefined;
                        GeneralIndex?: undefined;
                    } | {
                        PalletInstance: string;
                        Parachain?: undefined;
                        GeneralIndex?: undefined;
                    } | {
                        GeneralIndex: string;
                        Parachain?: undefined;
                        PalletInstance?: undefined;
                    })[];
                    X2?: undefined;
                    X1?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: string;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X2: ({
                        Parachain: string;
                        GeneralKey?: undefined;
                    } | {
                        GeneralKey: {
                            length: string;
                            data: number[];
                        };
                        Parachain?: undefined;
                    })[];
                    X3?: undefined;
                    X1?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: string;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X1: {
                        Parachain: string;
                    };
                    X2?: undefined;
                    X3?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: string;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X2: ({
                        Parachain: string;
                        GeneralKey?: undefined;
                    } | {
                        GeneralKey: {
                            length: string;
                            data: number[];
                        };
                        Parachain?: undefined;
                    })[];
                    X3?: undefined;
                    X1?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate?: undefined;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X3: ({
                        Parachain: string;
                        PalletInstance?: undefined;
                        GeneralIndex?: undefined;
                    } | {
                        PalletInstance: string;
                        Parachain?: undefined;
                        GeneralIndex?: undefined;
                    } | {
                        GeneralIndex: string;
                        Parachain?: undefined;
                        PalletInstance?: undefined;
                    })[];
                    X2?: undefined;
                    X1?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate?: undefined;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: string;
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: string;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X2: ({
                        Parachain: string;
                        GeneralIndex?: undefined;
                    } | {
                        GeneralIndex: string;
                        Parachain?: undefined;
                    })[];
                    X3?: undefined;
                    X1?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: number;
} | {
    name: string;
    symbol: number[];
    id: string;
    decimals: number;
    ratio: {
        n: string;
        d: string;
    };
    foreign_id: {
        Xcm: {
            V3: {
                parents: string;
                interior: {
                    X1: {
                        Parachain: string;
                    };
                    X2?: undefined;
                    X3?: undefined;
                };
            };
        };
        IbcIcs20?: undefined;
    };
    existential_deposit: string;
    existentialDeposit: string;
    exchangeRate: number;
})[];
