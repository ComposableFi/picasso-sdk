export const generateBech32Config = (baseAddr: string) => {
	return {
		bech32PrefixAccAddr: baseAddr,
		bech32PrefixAccPub: baseAddr + 'pub',
		bech32PrefixValAddr: baseAddr + 'valoper',
		bech32PrefixValPub: baseAddr + 'valoperpub',
		bech32PrefixConsAddr: baseAddr + 'valcons',
		bech32PrefixConsPub: baseAddr + 'valconspub',
	};
};
