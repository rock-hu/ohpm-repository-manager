"use strict";var e=this&&this.__awaiter||function(e,o,r,t){return new(r||(r=Promise))((function(c,i){function n(e){try{l(t.next(e))}catch(e){i(e)}}function s(e){try{l(t.throw(e))}catch(e){i(e)}}function l(e){var o;e.done?c(e.value):(o=e.value,o instanceof r?o:new r((function(e){e(o)}))).then(n,s)}l((t=t.apply(e,o||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.DbLock=void 0;const o=require("../../plugins/cache/CacheFactory"),r=require("../../common/RepoError"),t=require("../../common"),c=require("../../packages/log"),i=require("../../utils/RandomUtil");class n{constructor(e){this.lockKey=`${n.LOCK_PREFIX}${e}`,this.lockId=i.RandomUtil.generateUUID()}lock(o){return e(this,void 0,void 0,(function*(){if(yield n.CACHE.get(this.lockKey))throw new r.RepoRetryError(t.ErrorCode.AcquireLockError,`lock "${this.lockKey}" already exists`);try{yield n.CACHE.set(this.lockKey,this.lockId,{ttl:o&&o>0?o:n.DEFAULT_EXPIRE})}catch(e){throw new r.RepoRetryError(t.ErrorCode.AcquireLockError,`insert lock "${this.lockKey}" failed`,e)}}))}unLock(){return e(this,void 0,void 0,(function*(){try{const e=yield n.CACHE.get(this.lockKey);if(!e)return void c.OhpmLazyLogger.debug(`lock "${this.lockKey}" already release or not exists`);if(e!==this.lockId)return void c.OhpmLazyLogger.debug(`cannot release other request lock "${this.lockKey}". current traceId "${this.lockId}" --\x3e lock traceId "${e}"`);yield n.CACHE.delete(this.lockKey)}catch(e){c.OhpmLazyLogger.warn(`unlock "${this.lockKey}" failed`,e.message)}}))}}exports.DbLock=n,n.CACHE=o.CacheFactory.createCache({mode:"db"}),n.LOCK_PREFIX="DB:LOCK:",n.DEFAULT_EXPIRE=60;