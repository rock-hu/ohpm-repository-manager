"use strict";var e=this&&this.__awaiter||function(e,r,t,o){return new(t||(t=Promise))((function(i,n){function s(e){try{l(o.next(e))}catch(e){n(e)}}function a(e){try{l(o.throw(e))}catch(e){n(e)}}function l(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(s,a)}l((o=o.apply(e,r||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.packExecute=exports.packCmd=exports.DB_FOLDER_NAME=void 0;const t=r(require("path")),o=r(require("jszip")),i=require("../utils/PackUtil"),n=require("../utils/FsUtil"),s=require("../packages/log"),a=require("../packages/config/init"),l=require("../utils/CompressUtil"),c=require("./install"),d=require("../packages/config/config"),u=require("../packages/config/constants"),f=require("../common/DbAndStoreType"),p=r(require("log4js")),y=require("../packages/config/checker");function g(r){return e(this,void 0,void 0,(function*(){(yield n.FsUtil.exists(r))&&(yield l.CompressUtil.getFileStat(r)).isDirectory()&&0!==(yield n.FsUtil.readdir(r)).length||((0,s.consoleError)(`folder ${r} does not exist or is empty.`),p.default.shutdown((()=>process.exit(1))))}))}function h(r){return e(this,void 0,void 0,(function*(){const l=yield(0,c.readFileFromEnv)(u.PathConstants.RUNTIME_PATH),p=yield(0,c.readCongFileFromEnv)();if(!(yield n.FsUtil.exists(l))||0===p.length)throw new Error("please run `ohpm-repo start` before packing");yield(0,d.parseAndUpdateGlobalConfig)(p),yield(0,y.checkAndUpdateConfig)(d.config);const h=process.cwd(),v=t.default.resolve(h,r);if(!(yield n.FsUtil.exists(v)))throw new Error(`deploy root "${v}" does not exist`);if((0,n.isSubdirectory)(h,r))throw new Error(`current working directory "${h}" is a subdirectory of deploy root`);const m=t.default.join(v,u.PathConstants.CONFIG_PATH);yield(0,d.parseAndUpdateGlobalConfig)(m);const w=d.config.db.type===f.DbType.FileDb?d.config.db.config.path:null;s.OhpmLazyLogger.info("start packing.");const x=t.default.resolve(h,`./pack_${Date.now()}.zip`);yield function(r,l,c){return e(this,void 0,void 0,(function*(){const e=t.default.resolve(l,"./conf"),d=t.default.resolve(l,"./meta");yield g(e),yield g(d);const u=new o.default;if(yield(0,i.readFiles)(e,u,(e=>t.default.relative(l,e))),yield(0,i.readFiles)(d,u,(e=>t.default.relative(l,e))),c){yield(0,a.changeMode)(a.Mode.READONLY);const e=t.default.resolve(l,c);yield g(e),yield(0,i.readFiles)(e,u,(r=>t.default.join(`./${exports.DB_FOLDER_NAME}`,t.default.relative(e,r))))}const f=new Promise(((e,t)=>{const o=n.FsUtil.createWriteStream(r);o.on("finish",e),o.on("error",t),u.generateNodeStream({type:"nodebuffer",streamFiles:!0}).pipe(o).on("error",(e=>{s.OhpmLazyLogger.error("error generating ZIP stream:",e),t(e)}))}));try{yield f}catch(e){throw s.OhpmLazyLogger.error("error during ZIP creation process:",e),new Error(`error during ZIP creation process: ${e}`)}finally{c&&(yield(0,a.changeMode)(a.Mode.READWRITE))}}))}(x,v,w),(0,s.consoleInfo)(`packing success: "${x}".`)}))}exports.DB_FOLDER_NAME="db",exports.packCmd=function(r){return e(this,void 0,void 0,(function*(){try{yield h(r),p.default.shutdown((()=>process.exit(0)))}catch(e){(0,s.consoleError)(`server fail to pack: ${e}.`),p.default.shutdown((()=>process.exit(1)))}}))},exports.packExecute=h;