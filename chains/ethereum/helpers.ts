import Web3 from "web3"
import type BN from 'big.js';

import { AbiItem } from "web3-utils";
import { type Contract } from 'web3-eth-contract';
import { erc20ABI, ics20BankABI, ics20TransferBankABI } from './abi';
import { type Erc20ABI, type Ics20BankABI, type Ics20TransferBankABI } from './abi/types';
import { bankContractAddress, bankTransferContractAddress } from "./constants";



export const getWeb3= (endpoint:string):Web3 =>{
    return new Web3(new Web3.providers.HttpProvider(endpoint))
}

export const getContract =<T extends Contract>(
    web3: Web3, 
    abi: AbiItem[] | AbiItem,
    contractAddress: string
)=> {

    // typeof window !== 'undefined' && !!web3 && web3.eth.setProvider(provider!);
    typeof window !== 'undefined' && !!web3 && web3.eth.setProvider((window as any)?.ethereum);
    return web3 && contractAddress ? (new web3.eth.Contract(abi, contractAddress) as unknown as T) : undefined;
}

export const getBankTransferContract= (web3:Web3)=> {
    return getContract<Ics20TransferBankABI & Contract>(
        web3, 
          ics20TransferBankABI as AbiItem[],
          bankTransferContractAddress
      ) as Ics20TransferBankABI;
}

	// ideally contract address should be from outside, but right not it is just from constants file
export  const getBankContract=(web3:Web3)=> {
		return getContract<Ics20BankABI & Contract>(
			web3	,
            ics20BankABI as AbiItem[],
				bankContractAddress
			) as Ics20BankABI;
		}



        export const getBlock=async ( web3: Web3, addedAmount: number = 10000) => {
            if (!web3) return '0';

    
            // web3.eth.setProvider((window as any)?.xfi);
            return (await web3.eth.getBlockNumber()) + addedAmount;
        }



    export const getGasPrice = async (web3:Web3) =>{
    
            if (!web3) return '0';
            const gasPrice = await web3.eth.getGasPrice();
            return new BN(gasPrice || 0).mul(1.3).toFixed(0);
        }