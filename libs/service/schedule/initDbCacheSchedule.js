"use strict";var e=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,c){function i(e){try{u(n.next(e))}catch(e){c(e)}}function a(e){try{u(n.throw(e))}catch(e){c(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.initDbCacheSchedule=void 0;const t=require("../../plugins/cache/CacheFactory"),o=require("../../common/RepoError"),n=require("../../common");exports.initDbCacheSchedule=function(){return e(this,void 0,void 0,(function*(){const e=t.CacheFactory.createCache({mode:"db"});if(!e)throw new o.RepoServerError(n.ErrorCode.DbCacheNotLoaded,'invoke "initDbCacheSchedule" failed, dbCache is not loaded');setInterval((()=>e.clear().then()),6e5)}))};