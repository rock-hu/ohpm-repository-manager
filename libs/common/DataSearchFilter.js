"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DataSearchFilter=void 0;const e=require("./RepoError"),t=require("./ErrorCode"),r=require("../utils/CommonConstants"),i=require("../packages/log");exports.DataSearchFilter=class{getPageNum(){return this.pageNum}getPageSize(){return this.pageSize}constructor(e){this.pageNum=e.pageNum,this.pageSize=e.pageSize}addProperties(e,t){return Object.assign(Object.assign({},e),t)}initTimeFilter(r){const i=r.startNumber,a=r.endNumber,s=r.tableStampName;if(i&&a){if(i>a)throw new e.RepoClientError(t.ErrorCode.GetSearchFilterNumberIntervalError,`fail to validate "${s}": "startNumber" "${i}" is greater than "endNumber" "${a}"}`);this.filterList=this.addProperties(this.filterList,{[s]:{gte:i,lte:a}})}}initTypeFilter(r){const i=r.types,a=r.type,s=r.tableStampName;if(a||"number"==typeof a){if(typeof i[0]!=typeof a||!i.includes(a))throw new e.RepoClientError(t.ErrorCode.GetSearchFilterOptionValueError,`fail to validate "${s}: ${a}".`);this.filterList=this.addProperties(this.filterList,{[s]:a})}}initStringFilter(e){let t=e.stringName;const a=e.tableStampName,s=e.filterName;t&&(r.INPUT_STRING_REGEX.test(t)||(i.OhpmLazyLogger.warn(`fail to validate "${s}": "${t}".`),t=r.ERROR_INPUT_DEFAULT_STRING),this.filterList=this.addProperties(this.filterList,{[a]:{containsIgnoreCase:t}}))}};