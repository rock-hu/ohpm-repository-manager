"use strict";var e=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(n,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(s,l)}c((i=i.apply(e,t||[])).next())}))},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});const o=require("../../packages/log"),i=t(require("log4js")),n=require("./exportPkgInfoCmd"),r=require("../../common/DbFactory"),s=t(require("path")),l=require("./importUserinfoCmd"),c=require("../../utils/FsUtil"),u=require("../../common/Constants"),a=t(require("compressing")),d=require("./common/checkInstallAndSetRoot");function f(t,i){return e(this,void 0,void 0,(function*(){const{recordList:e}=yield r.commonDB.findByFilter(t,{}),n=s.default.posix.join(i,`${t}.json`);yield c.FsUtil.writeFile(n,JSON.stringify(e,null,2)),o.OhpmLazyLogger.info(`export the "${t}" table done.`)}))}exports.default=function(){return e(this,void 0,void 0,(function*(){try{yield(0,d.checkInstallAndSetRoot)();const t=yield(0,n.loadConfig)("export userInfo");yield(0,r.initDB)(t.db),yield function(){return e(this,void 0,void 0,(function*(){const e=`export_userInfo_${Date.now()}`,t=s.default.posix.join(process.cwd(),e),i=s.default.posix.join(process.cwd(),`${e}.zip`);try{yield c.FsUtil.createDirIfNotExists(t);for(const e of Object.values(l.tableName))yield f(e,t);const e=s.default.posix.join(u.Constants.DATA_DIR,u.Constants.KEY_DIR_NAME);if(!(yield c.FsUtil.exists(e)))throw new Error("the encryption component does not exist.");const n=s.default.posix.join(t,l.jsonName.meta);yield c.FsUtil.createDirIfNotExists(n),yield c.FsUtil.copy(e,n),yield a.default.zip.compressDir(t,i),o.OhpmLazyLogger.info(`userinfo exported completed, save the .zip file to : "${s.default.normalize(i)}".`)}finally{yield c.FsUtil.rm(t,{recursive:!0,force:!0})}}))}()}catch(e){(0,o.consoleError)(`fail to export userinfo: ${e.message}`)}finally{i.default.shutdown((()=>process.exit(1)))}}))};