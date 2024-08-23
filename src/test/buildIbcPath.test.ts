import { buildIbcPath } from '../chains';

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
