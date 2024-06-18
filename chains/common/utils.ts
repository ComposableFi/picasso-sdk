import EventEmitter from "eventemitter3";
import { WalletApiEvents } from "./types";

export const emitter = new EventEmitter<WalletApiEvents> 
