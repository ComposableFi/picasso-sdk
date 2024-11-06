export const ibcICS20ChannelMap = {
  'centauri-1': {
    26: {
      chainId: 'secret-4',
      id: 83,
    },
  },
  'secret-4': {
    83: {
      chainId: 'centauri-1',
      id: 26,
    },
  },
} satisfies Partial<
  Record<string, Record<number, { chainId: string; id: number }>>
>;
