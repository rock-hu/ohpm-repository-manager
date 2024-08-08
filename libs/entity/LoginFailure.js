"use strict";var e=this&&this.__decorate||function(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoginFailure=void 0;const i=require("typeorm"),o=require("../utils/RandomUtil");let r=class{constructor(e){e&&(this.id=o.RandomUtil.generateUUID(),this.failedTime=(new Date).getTime(),this.failedReason=e.failedReason)}};e([(0,i.PrimaryColumn)({type:"varchar",length:64}),t("design:type",String)],r.prototype,"id",void 0),e([(0,i.Column)({type:"bigint"}),t("design:type",Number)],r.prototype,"failedTime",void 0),e([(0,i.Column)({type:"varchar",length:128}),t("design:type",String)],r.prototype,"failedReason",void 0),r=e([(0,i.Entity)("loginfailure"),t("design:paramtypes",[Object])],r),exports.LoginFailure=r;