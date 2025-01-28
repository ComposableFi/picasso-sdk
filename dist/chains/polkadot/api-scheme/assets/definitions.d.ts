declare const _default: {
    rpc: {
        balanceOf: {
            description: string;
            params: ({
                name: string;
                type: string;
                isOptional?: undefined;
            } | {
                name: string;
                type: string;
                isOptional: boolean;
            })[];
            type: string;
        };
        listAssets: {
            description: string;
            params: {
                name: string;
                type: string;
                isOptional: boolean;
            }[];
            type: string;
        };
    };
    types: {
        Asset: {
            name: string;
            id: string;
            decimals: string;
            ratio: string;
            foreignId: string;
            existentialDeposit: string;
        };
    };
};
export default _default;
