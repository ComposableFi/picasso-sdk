import { buildIbcPath, getSupportedType } from '../chains';

describe('buildIbcPath', () => {
  it('should return the correct path for 2019 to ethereum', () => {
    const result = buildIbcPath('2019', 'ethereum');
    expect(result).toEqual([
      { chainId: '2019', channelId: '15' },
      { chainId: '2087', channelId: '17' },
      { chainId: 'centauri-1', channelId: '52' },
    ]);
  });
});

describe('getSupportedType', () => {
  it('should return multihop for solana and ethereum', () => {
    expect(getSupportedType('solana', 'ethereum')).toBe('multihop');
  });

  it('should return multihop for solana and osmosis-1', () => {
    expect(getSupportedType('solana', 'osmosis-1')).toBe('multihop');
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
});
