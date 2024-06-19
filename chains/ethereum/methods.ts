import { emitter, getTimeOut } from '../common/utils';
import { MAINNET_FEE, bankTransferContractAddress } from './constants';
import {getBankTransferContract, getBlock, getEthGasAmount, getEthSimulate, getGasPrice, getTransactionReceipt, getWeb3} from './helpers';
import Big from 'big.js'
const processEthTransfer = async ({
	destination,
	actualDestination,
	origin,
	amount,
	assetId,
	originAddress,
	destinationAddress,
	channel,
    minimalDenom ,
	memo = '' //
}: {
	destination: EthDevNetworkType;
	origin: EthDevNetworkType;
	actualDestination: EthDevNetworkType;
	amount: string;
	assetId: string;
	originAddress: string;
	destinationAddress: string;
	channel: string;
    minimalDenom:string; 
	memo?: string;
}) => {

    const web3 = getWeb3('endpoint');
	const transferContract = getBankTransferContract(web3)
	const timeoutBlock = getBlock(web3);
	const gasPrice = getGasPrice(web3);
	const rawDataErc20 = transferContract.methods.sendTransfer(
		minimalDenom, // pass minimal denom as first argument
		amount,
		destinationAddress, //centauri
		'transfer',
		`channel-${channel}`, //update this using config
		timeoutBlock, // replace it to get block
		getTimeOut(60).toString(),
		memo
	);
	const rawDataEth = transferContract.methods.sendTransferNativeToken(
		destinationAddress,
		'transfer',
		`channel-${channel}`,
		timeoutBlock, // replace it to get block
		getTimeOut(240).toString(),
		memo
	);

	const isETH = assetId === 'ETH';
	const rawData = isETH ? rawDataEth : rawDataErc20;

	const encodedData = rawData.encodeABI();

	const txObject = {
		to: bankTransferContractAddress,
		data: encodedData,
		from: originAddress,
		value: isETH ? new Big(amount || 0).plus(MAINNET_FEE).toString() : MAINNET_FEE,
		gasPrice: gasPrice // wei
	};
	const gas = await getEthGasAmount(web3, txObject);

	// simulate before sending transfer
	await getEthSimulate(web3, encodedData, txObject);


	rawData
		?.send({ ...txObject, gas })
		.on('transactionHash', async txHash => {
        	emitter.emit('ETHEREUM_APPROVED');

			const result: TransferStatusByAddress = {
				destAddress: destinationAddress,
				txHash,
				sequence: '0',
				destChannel: channel,
				timestamp: '10000',
				currentHopIndex: 0,
				status: 'pending'
			};

			// TODO : fix types
			await setHopState(
				txHash,
				originAddress,
				origin as NetworkType,
				{
					currentHopIndex: 0,
					status: 'pending',
					destinationChannelId: channel
				},
				{
					fromChainId: NetworkChainIdMap[origin],
					path: getNetworkPath(
						origin as NetworkType,
						destination as NetworkType,
						actualDestination as NetworkType,
						// TODO: hardcode until mainpanel supports metamask.
						'keplr', // TODO: catch the case before open PR
						'keplr'
					),
					amount: {
						denom: assetId,
						amount
					},
					timestamp: new Date().valueOf()
				},
				'devnet'
			);
			await traceIbcStatus(txHash, originAddress, result);
			// Check status in case the user leaves this page
			const status = transferSelect.hopState(useTransferStore.getState(), originAddress, result.txHash);
			invalidateQuery.balances();

			if (!status)
				return console.log('there is no matched txHash. Probably transfer state is reset', '', result?.txHash);
		})
		
		.catch(error => {
			console.error(error, 'txError');
			
		});
};
