"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AES_TYPE_GCM=exports.AES_TYPE_CBC=exports.SHA_256=exports.ROOT_KEY_ITERATION_COUNT=exports.KEY_256BIT_SIZE=exports.KEY_128BIT_SIZE=exports.KEY_96BIT_SIZE=exports.KEY_MIN_VALID_LENGTH=exports.KEY_HEAD=exports.DEFAULT_DECODER=exports.DEFAULT_CHARSET=exports.DIGITS_LOWER=exports.DIGITS_UPPER=void 0;const E=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];exports.DIGITS_UPPER=E;const _=E.map((E=>E.toLowerCase()));exports.DIGITS_LOWER=_;exports.DEFAULT_CHARSET="UTF-8";const e=new TextDecoder("UTF-8");exports.DEFAULT_DECODER=e;exports.KEY_HEAD="security:";exports.KEY_MIN_VALID_LENGTH=16;exports.KEY_96BIT_SIZE=12;exports.KEY_128BIT_SIZE=16;exports.KEY_256BIT_SIZE=32;exports.SHA_256="sha256";exports.ROOT_KEY_ITERATION_COUNT=1e4;exports.AES_TYPE_CBC="cbc";exports.AES_TYPE_GCM="gcm";