"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dealHomepageField=void 0;const e=require("./getAttrNameFirstKey"),t=require("./printChangeWarnLog");exports.dealHomepageField=function(r,i,o){const n=(0,e.getAttrNameFirstKey)(r);if(o[n]){if(o[n].length>256){const e=o[n].slice(0,256);(0,t.printChangeWarnLog)(i,r,o[n],e),o[n]=e}}else delete o[n]};