"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.dealLicenseField=void 0;const e=require("../../../../common/repoDefaultVaildConfFunctions"),t=require("../../../../../../service/validator/rule"),r=require("./printChangeWarnLog"),i=require("./getAttrNameFirstKey");exports.dealLicenseField=function(n,o,a){const l=(0,i.getAttrNameFirstKey)(n),s=(0,e.getRuleContentFromValidConf)(n,t.ValidationRuleType.LengthLimit).maxLength;a[l]&&(a[l]=a[l].slice(0,s)),a[l]||((0,r.printChangeWarnLog)(o,n,a[l],"ISC"),a[l]="ISC")};