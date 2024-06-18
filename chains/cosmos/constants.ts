import EventEmitter from "eventemitter3";
import { WalletApiEvents } from "./types";

export const TX_MSG = '/ibc.applications.transfer.v1.MsgTransfer' 
export const emitter = new EventEmitter<WalletApiEvents> 

export const TIMEOUT_IBC_MAX = 6000000000000;
