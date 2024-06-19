import { emitter, getTimeOut } from '../common/utils';
import { MAINNET_FEE, bankTransferContractAddress } from './constants';
import {getBankTransferContract, getBlock, getEthGasAmount, getEthSimulate, getGasPrice,  getWeb3} from './helpers';
import Big from 'big.js'

export const ethereumTransfer = async ({
	amount,
	assetId,
	originAddress,
	destinationAddress,
	channel,
    minimalDenom ,
	memo = '' //
}: {
	amount: string;
	assetId: string; //'ETH' or erc20 token 
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
	 getEthSimulate(web3, encodedData, txObject);


	return rawData
		?.send({ ...txObject, gas })
		.on('transactionHash', async txHash => {
        	emitter.emit('ETHEREUM_APPROVED');
            return txHash; 

		})
		
};

