"use strict";var e=this&&this.__decorate||function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.AccessToken=void 0;const r=require("../utils/RandomUtil"),i=require("typeorm"),o=(require("../common/AccessTokenType"),require("buffer")),n=require("../service/accessToken/utils/desensitizeToken");let s=class{constructor(e,t){this.id=r.RandomUtil.generateUUID(),this.token=this.toBase64(r.RandomUtil.generateUUID()),this.sanitizedToken=(0,n.desensitizeToken)(this.token),this.type=e,this.userId=t,this.createTime=(new Date).getTime()}toBase64(e){return o.Buffer.from(e).toString("base64")}};e([(0,i.PrimaryColumn)({type:"varchar",length:64}),t("design:type",String)],s.prototype,"id",void 0),e([(0,i.Column)({type:"varchar",length:256}),t("design:type",String)],s.prototype,"token",void 0),e([(0,i.Column)({type:"varchar",length:256}),t("design:type",String)],s.prototype,"sanitizedToken",void 0),e([(0,i.Column)({type:"tinyint"}),t("design:type",Number)],s.prototype,"type",void 0),e([(0,i.Column)({type:"varchar",length:64}),t("design:type",String)],s.prototype,"userId",void 0),e([(0,i.Column)({type:"bigint"}),t("design:type",Number)],s.prototype,"createTime",void 0),s=e([(0,i.Entity)("access_token"),t("design:paramtypes",[Number,String])],s),exports.AccessToken=s;