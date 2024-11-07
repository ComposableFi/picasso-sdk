"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferPending = exports.TransferFail = exports.TransferSuccess = void 0;
exports.TransferSuccess = ['TransferSuccess', 'TransferSuccessButError'];
exports.TransferFail = [
    'TransferFailed',
    'TransferTimeout',
    'TransferMaintenance',
];
exports.TransferPending = ['TransferPending', 'send_packet'];
