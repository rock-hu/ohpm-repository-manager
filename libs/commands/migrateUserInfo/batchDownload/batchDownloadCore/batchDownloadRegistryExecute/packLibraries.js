"use strict";var e=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(r,o){function a(e){try{s(n.next(e))}catch(e){o(e)}}function u(e){try{s(n.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,u)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.packLibraries=void 0;const i=t(require("path")),n=require("../../../../../utils/FsUtil"),r=require("../../../definitions"),o=require("../../../common/runShell");exports.packLibraries=function(t,a,u){return e(this,void 0,void 0,(function*(){const e=i.default.join(u,r.PACK_DIR),s=i.default.basename(t)+".har",c=(0,o.runShell)(`tar -czf ${s} package`,t,o.shellStdio.pipe);if(!c||0!==c.status)throw new Error(`Failed to compress the HAR package ${a}.`);yield n.FsUtil.copy(i.default.join(t,s),i.default.join(e,s))}))};