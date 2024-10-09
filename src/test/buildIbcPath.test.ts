import {
  buildIbcPath,
  convertCosmosAddress,
  createForwardPathRecursive,
  getSupportedType,
  TIMEOUT_IBC_MAX,
} from '../chains';

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
