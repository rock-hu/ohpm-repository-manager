"use strict";var t=this&&this.__awaiter||function(t,i,e,n){return new(e||(e=Promise))((function(s,o){function r(t){try{d(n.next(t))}catch(t){o(t)}}function u(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var i;t.done?s(t.value):(i=t.value,i instanceof e?i:new e((function(t){t(i)}))).then(r,u)}d((n=n.apply(t,i||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoginStatusService=void 0;const i=require("./LoginStatusRepository"),e=require("../../entity/LoginStatus"),n=require("../../packages/config/config"),s=require("../../common/DbAndStoreType");class o{static getInstance(){if(!this.Instance){const t=i.LoginStatusRepository.getInstance();this.Instance=new o(t)}return this.Instance}constructor(t){this.loginStatusRepository=t}addLoginStatus(i,n,s,o){return t(this,void 0,void 0,(function*(){if(!(yield this.isSingleDeployInstance())&&i&&n){if(yield this.loginStatusRepository.findLoginStatusByID(i))yield this.loginStatusRepository.updateState(i,n,o);else{const t=new e.LoginStatus({id:i,sessionId:n,loginTime:s,needChangePassword:o});yield this.loginStatusRepository.insert(t)}}}))}getSessionByUserId(i){return t(this,void 0,void 0,(function*(){if(yield this.isSingleDeployInstance())return"";const t=yield this.loginStatusRepository.findLoginStatusByID(i);return t?t.sessionId:""}))}getInfoBySessionId(i){return t(this,void 0,void 0,(function*(){if(yield this.isSingleDeployInstance())return;const t=yield this.loginStatusRepository.findLoginStatusBySessionId(i);if(t&&t.recordList[0]){const i=t.recordList[0];return{userId:i.id,lastModifiedTime:i.loginTime,needChangePassword:i.needChangePassword}}}))}delStatusBySessionId(i){return t(this,void 0,void 0,(function*(){if(!(yield this.isSingleDeployInstance()))return this.loginStatusRepository.deleteLoginStatusBySessionId(i)}))}delStatusByUserId(i){return t(this,void 0,void 0,(function*(){if(!(yield this.isSingleDeployInstance()))return this.loginStatusRepository.deleteLoginStatusById(i)}))}isSingleDeployInstance(){return t(this,void 0,void 0,(function*(){return!!n.config&&(n.config.db.type===s.DbType.FileDb||n.config.store.type===s.StorageType.Fs)}))}}exports.LoginStatusService=o;