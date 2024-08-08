"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,r,o){void 0===o&&(o=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,o,n)}:function(e,t,r,o){void 0===o&&(o=r),e[o]=t[r]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(r){if(r&&r.__esModule)return r;var o={};if(null!=r)for(var n in r)"default"!==n&&Object.prototype.hasOwnProperty.call(r,n)&&e(o,r,n);return t(o,r),o};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AesCryptUtil=exports.CryptoConstants=exports.WorkKeyCryptUtil=exports.RootKeyUtil=exports.CommCryptUtil=void 0;const o=require("./rootKeyUtil"),n=require("./workKeyCryptUtil"),i=require("./commCryptUtil"),s=r(require("./constants"));exports.CryptoConstants=s;const c=require("./aesCryptUtil"),y={byte2HexStr:i.byte2HexStr,genSecureRandomByte:i.genSecureRandomByte};exports.CommCryptUtil=y;const p={RootKey:o.RootKey,newInstance256:o.newInstance256};exports.RootKeyUtil=p;const u={encryptWorkKey:n.encryptWorkKey,decryptWorkKey:n.decryptWorkKey};exports.WorkKeyCryptUtil=u;const l={encryptAesGcm:c.encryptAesGcm,decryptAesGcm:c.decryptAesGcm};exports.AesCryptUtil=l;