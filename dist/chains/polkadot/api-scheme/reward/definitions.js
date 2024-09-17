"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rpc: {
        estimateFarmingReward: {
            description: 'Reward available for the specified account for the specified asset.',
            params: [
                {
                    name: 'address',
                    type: 'AccountId32'
                },
                {
                    name: 'poolCurrencyId',
                    type: 'Text'
                },
                {
                    name: 'rewardCurrencyId',
                    type: 'Text'
                },
                {
                    name: 'at',
                    type: 'Hash',
                    isOptional: true
                }
            ],
            type: 'u128'
        },
        computeFarmingReward: {
            description: 'Reward available for the specified account for the specified asset.',
            params: [
                {
                    name: 'accountId',
                    type: 'AccountId32'
                },
                {
                    name: 'poolCurrencyId',
                    type: 'Text'
                },
                {
                    name: 'rewardCurrencyId',
                    type: 'Text'
                },
                {
                    name: 'at',
                    type: 'Hash',
                    isOptional: true
                }
            ],
            type: 'Balance'
        }
    },
    types: {}
};
