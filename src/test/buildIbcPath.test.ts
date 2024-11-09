import {
  buildIbcPath,
  convertCosmosAddress,
  createForwardPathRecursive,
  getChainIdsByChannels,
  getChannelIdsFromMemo,
  getExplorerUrl,
  getNetworkFromAddress,
  getSupportedType,
  TIMEOUT_IBC_MAX,
} from '../chains';
import { expect, it, describe, test } from '@jest/globals';

describe('buildIbcPath', () => {
  it('should return the correct path for osmosis-1 to ethereum', () => {
    const result = buildIbcPath('osmosis-1', 'ethereum');
    expect(result).toEqual([
      { chainId: 'osmosis-1', channelId: 1279 },

      { chainId: 'centauri-1', channelId: 52 },
    ]);
  });

  it('should return the correct path for agoric-3 to centauri-1', () => {
    const result = buildIbcPath('agoric-3', 'centauri-1');
    expect(result).toEqual([{ chainId: 'agoric-3', channelId: 55 }]);
  });

  it('should return the null for solana to 2019', () => {
    const result = buildIbcPath('solana', '2019');
    expect(result).toEqual(null);
  });

  it('should return the correct path for solana to osmosis-1', () => {
    const result = buildIbcPath('solana', 'osmosis-1');
    expect(result).toEqual([
      { chainId: 'solana', channelId: 1 },
      { chainId: 'centauri-1', channelId: 3 },
    ]);
  });
});

describe('getSupportedType', () => {
  it('should return pfm for solana and ethereum', () => {
    expect(getSupportedType('solana', 'ethereum')).toBe('pfm');
  });

  it('should return channel for solana and osmosis-1', () => {
    expect(getSupportedType('solana', 'centauri-1')).toBe('channel');
  });

  it('should return multihop for osmosis-1 and 2087', () => {
    expect(getSupportedType('osmosis-1', '2087')).toBe('multihop');
  });

  it('should return channel for 2087 and 2019', () => {
    expect(getSupportedType('2087', '2019')).toBe('channel');
  });

  it('should return channel for pacific-1 and osmosis-1', () => {
    expect(getSupportedType('pacific-1', 'osmosis-1')).toBe('channel');
  });

  it('should return multihop for pacific-1 and ethereum', () => {
    expect(getSupportedType('pacific-1', 'ethereum')).toBe('multihop');
  });

  it('should return multihop for kusama asset hub and ethereum', () => {
    expect(getSupportedType('1000', 'ethereum')).toBe(undefined);
  });
});

describe('createForwardPathRecursive', () => {
  test('should create the correct forward structure for a valid ibcPath and destination', () => {
    // Given test data
    const ibcPath = [
      { chainId: 'osmosis-1', channelId: 1279, receiver: 'centauri-address' },
      { chainId: 'centauri-1', channelId: 52, receiver: 'ethereum-address' },
    ];

    // When calling the function
    const result = createForwardPathRecursive(ibcPath);
    console.log(result);

    // 예상되는 출력을 다시 작성합니다
    const expectedOutput = {
      forward: {
        receiver: 'centauri-address',
        port: 'transfer',
        channel: 'channel-1279',
        timeout: TIMEOUT_IBC_MAX,
        retries: 0,
        next: {
          forward: {
            receiver: 'ethereum-address',
            port: 'transfer',
            channel: 'channel-52',
            timeout: TIMEOUT_IBC_MAX,
            retries: 0,
          },
        },
      },
    };

    // Then the expected output should be correct

    expect(JSON.stringify(result, null, 2)).toBe(
      JSON.stringify(expectedOutput, null, 2)
    );
  });

  describe('getExplorerUrl', () => {
    test('should return correct URL for Mintscan explorer', () => {
      const chainId = 'osmosis-1';
      const txHash = '1234567890ABCDEF';
      const address = 'osmo1abcdefghijklmnop';

      expect(getExplorerUrl(chainId, 'tx', txHash)).toBe(
        'https://www.mintscan.io/osmosis/tx/1234567890ABCDEF'
      );
      expect(getExplorerUrl(chainId, 'address', address)).toBe(
        'https://www.mintscan.io/osmosis/address/osmo1abcdefghijklmnop'
      );
    });

    test('should return correct URL for Subscan explorer', () => {
      const chainId = '2006';
      const txHash = '0x1234567890ABCDEF';
      const address = '5CGUvruJMqB1VMkqMvfcx9fHVgTLc73fgYMRhzghZQVWfPTw';

      expect(getExplorerUrl(chainId, 'tx', txHash)).toBe(
        'https://astar.subscan.io/extrinsic/0x1234567890ABCDEF'
      );
      expect(getExplorerUrl(chainId, 'address', address)).toBe(
        'https://astar.subscan.io/account/5CGUvruJMqB1VMkqMvfcx9fHVgTLc73fgYMRhzghZQVWfPTw'
      );
    });

    test('should return correct URL for Solscan explorer', () => {
      const chainId = 'solana';
      const txHash = '3m7sDC5k3wUPBdRUkJpYXZyDvuMsaQqHoFKrMndomJJx';
      const address = 'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq';

      expect(getExplorerUrl(chainId, 'tx', txHash)).toBe(
        'https://solscan.io/tx/3m7sDC5k3wUPBdRUkJpYXZyDvuMsaQqHoFKrMndomJJx'
      );
      expect(getExplorerUrl(chainId, 'address', address)).toBe(
        'https://solscan.io/address/CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq'
      );
    });

    test('should return correct URL for Etherscan explorer', () => {
      const chainId = 'ethereum';
      const txHash =
        '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef';
      const address = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

      expect(getExplorerUrl(chainId, 'tx', txHash)).toBe(
        'https://etherscan.io/tx/0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'
      );
      expect(getExplorerUrl(chainId, 'address', address)).toBe(
        'https://etherscan.io/address/0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
      );
    });

    test('should return empty string for unsupported explorer type', () => {
      const chainId = 'unsupported-chain';
      const txHash = '1234567890';
      const address = 'unsupported-address';

      expect(getExplorerUrl(chainId, 'tx', txHash)).toBe('');
      expect(getExplorerUrl(chainId, 'address', address)).toBe('');
    });
  });
  test('should handle a single hop correctly', () => {
    // Given test data with a single hop
    const ibcPath = [
      {
        chainId: 'centauri-1',
        channelId: 52,
        receiver: 'sei-destination-address',
      },
    ];

    // When calling the function
    const result = createForwardPathRecursive(ibcPath);

    // Then the expected output should be correct
    const expectedOutput = {
      forward: {
        receiver: 'sei-destination-address',
        port: 'transfer',
        channel: 'channel-52',
        timeout: TIMEOUT_IBC_MAX,
        retries: 0,
      },
    };

    // Convert both result and expected output to JSON strings for comparison
    expect(JSON.stringify(result, null, 2)).toBe(
      JSON.stringify(expectedOutput, null, 2)
    );
  });
});

describe('getChainIdsByChannels', () => {
  test('should return correct chain IDs for given channel IDs', () => {
    const channels = [1279, 71];
    const expectedChainIds = ['osmosis-1', 'centauri-1', 'solana'];

    const result = getChainIdsByChannels(channels);

    expect(result).toEqual(expectedChainIds);
  });
});

describe('getChannelIdsFromMemo', () => {
  test('should extract correct channel ID from memo', () => {
    const memo =
      '{"forward":{"receiver":"6ijw2nSoson3ft9kajLKc3zFiYccB2V1PbsSUJfjrKS6","port":"transfer","channel":"channel-71","timeout":6000000000000,"retries":0}}';
    const result = getChannelIdsFromMemo(memo);
    expect(result).toEqual({
      channels: [71],
      finalReceiver: '6ijw2nSoson3ft9kajLKc3zFiYccB2V1PbsSUJfjrKS6',
    });
  });
});

describe('getNetworkFromAddress', () => {
  test('should correctly detect Solana address', () => {
    const solanaAddress = '1ryziZbFQW4fcWck9wW4vU4KD4qxPHKhmAht6pXPFWo';
    expect(getNetworkFromAddress(solanaAddress)).toBe('solana');
  });

  test('should correctly detect Picasso bech32 address', () => {
    const picassoAddress = 'pica1src4utrx6llsteqd7wf5qcuxcgjg6s8tle8kvq';
    expect(getNetworkFromAddress(picassoAddress)).toBe('centauri-1');
  });

  test('should correctly detect Osmosis bech32 address', () => {
    const osmosisAddress = 'osmo1src4utrx6llsteqd7wf5qcuxcgjg6s8tv7hr74';
    expect(getNetworkFromAddress(osmosisAddress)).toBe('osmosis-1');
  });

  test('should correctly detect Ethereum address', () => {
    const ethereumAddress = '0x46762bdE09C1a1c566c3efD959368455Bf20c354';
    expect(getNetworkFromAddress(ethereumAddress)).toBe('ethereum');
  });

  test('should correctly detect Picasso SS58 address', () => {
    const picassoSS58Address =
      '5wFJF7twuHuSfUwK6tJFfHAbi55ubDx38QYSa5JfpDMNKuqU';
    expect(getNetworkFromAddress(picassoSS58Address)).toBe('2087');
  });
});
