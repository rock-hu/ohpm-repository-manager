"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPublicRegistryAgent=void 0;const e=require("https-proxy-agent"),r=require("../definitions"),t=require("../../../service/uplinks/uplink-proxy/UplinkProxyService");exports.getPublicRegistryAgent=function(i){let o;if(o=new URL(i),process.removeAllListeners("warning"),process.env.NODE_TLS_REJECT_UNAUTHORIZED="0",!(0,t.isNoProxy)(o,r.migrateProxyConfig.noProxy))return r.migrateProxyConfig.httpProxyUrl?new e.HttpsProxyAgent(r.migrateProxyConfig.httpProxyUrl):void 0};