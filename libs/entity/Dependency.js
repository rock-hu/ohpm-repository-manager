"use strict";var e=this&&this.__decorate||function(e,t,r,o){var n,p=arguments.length,i=p<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,o);else for(var y=e.length-1;y>=0;y--)(n=e[y])&&(i=(p<3?n(i):p>3?n(t,r,i):n(t,r))||i);return p>3&&i&&Object.defineProperty(t,r,i),i},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.OHPM_DEPENDENCY_DB_NAME=exports.Dependency=void 0;const r=require("typeorm"),o=require("../packages/definitions/types");let n=class{constructor(){this.depType=o.DepType.NORMAL}};e([(0,r.PrimaryColumn)({type:"varchar",length:128}),t("design:type",String)],n.prototype,"id",void 0),e([(0,r.Column)({type:"varchar",length:32}),t("design:type",String)],n.prototype,"repoName",void 0),e([(0,r.Column)({type:"varchar",length:214}),t("design:type",String)],n.prototype,"name",void 0),e([(0,r.Column)({type:"varchar",length:64}),t("design:type",String)],n.prototype,"version",void 0),e([(0,r.Column)({type:"varchar",length:128}),t("design:type",String)],n.prototype,"depPackageName",void 0),e([(0,r.Column)({type:"varchar",length:64}),t("design:type",String)],n.prototype,"depPackageVersion",void 0),e([(0,r.Column)({type:"tinyint"}),t("design:type",Number)],n.prototype,"depType",void 0),n=e([(0,r.Entity)("dependency")],n),exports.Dependency=n,exports.OHPM_DEPENDENCY_DB_NAME="dependency";