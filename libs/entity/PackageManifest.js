"use strict";var e=this&&this.__decorate||function(e,t,o,n){var p,r=arguments.length,i=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var y=e.length-1;y>=0;y--)(p=e[y])&&(i=(r<3?p(i):r>3?p(t,o,i):p(t,o))||i);return r>3&&i&&Object.defineProperty(t,o,i),i},t=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.OHPM_PACKAGE_MANIFEST_DB_NAME=exports.PackageManifest=void 0;const o=require("typeorm");let n=class{};e([(0,o.PrimaryColumn)({type:"varchar",length:128}),t("design:type",String)],n.prototype,"id",void 0),e([(0,o.Column)({type:"varchar",length:32}),t("design:type",String)],n.prototype,"repoName",void 0),e([(0,o.Column)({type:"varchar",length:128}),t("design:type",String)],n.prototype,"name",void 0),e([(0,o.Column)({type:"varchar",length:128}),t("design:type",String)],n.prototype,"verifyName",void 0),e([(0,o.Column)({type:"varchar",length:64}),t("design:type",String)],n.prototype,"version",void 0),e([(0,o.Column)({type:"varchar",length:64,nullable:!0}),t("design:type",String)],n.prototype,"groupName",void 0),e([(0,o.Column)({type:"tinyint"}),t("design:type",Number)],n.prototype,"status",void 0),e([(0,o.Column)({type:"tinyint"}),t("design:type",Number)],n.prototype,"packageType",void 0),e([(0,o.Column)({type:"varchar",length:64}),t("design:type",String)],n.prototype,"authorId",void 0),e([(0,o.Column)({type:"varchar",length:128}),t("design:type",String)],n.prototype,"publisherName",void 0),e([(0,o.Column)({type:"varchar",length:128}),t("design:type",String)],n.prototype,"authorName",void 0),e([(0,o.Column)({type:"varchar",length:256,nullable:!0}),t("design:type",String)],n.prototype,"authorUrl",void 0),e([(0,o.Column)({type:"varchar",length:64,nullable:!0}),t("design:type",String)],n.prototype,"authorEmail",void 0),e([(0,o.Column)({type:"varchar",length:1024,nullable:!0}),t("design:type",String)],n.prototype,"description",void 0),e([(0,o.Column)({type:"varchar",length:256,nullable:!0}),t("design:type",String)],n.prototype,"keywords",void 0),e([(0,o.Column)({type:"varchar",length:1024,nullable:!0}),t("design:type",String)],n.prototype,"homepage",void 0),e([(0,o.Column)({type:"varchar",length:1024,nullable:!0}),t("design:type",String)],n.prototype,"repository",void 0),e([(0,o.Column)({type:"varchar",length:256}),t("design:type",String)],n.prototype,"license",void 0),e([(0,o.Column)({type:"varchar",length:32}),t("design:type",String)],n.prototype,"artifactType",void 0),e([(0,o.Column)({type:"varchar",length:256}),t("design:type",String)],n.prototype,"checksum",void 0),e([(0,o.Column)({type:"varchar",length:255}),t("design:type",String)],n.prototype,"fileName",void 0),e([(0,o.Column)({type:"int"}),t("design:type",Number)],n.prototype,"fileSize",void 0),e([(0,o.Column)({type:"int"}),t("design:type",Number)],n.prototype,"fileNum",void 0),e([(0,o.Column)({type:"text"}),t("design:type",String)],n.prototype,"readmeFileId",void 0),e([(0,o.Column)({type:"text",nullable:!0}),t("design:type",String)],n.prototype,"changelogFileId",void 0),e([(0,o.Column)({type:"text"}),t("design:type",String)],n.prototype,"harFileId",void 0),e([(0,o.Column)({type:"text"}),t("design:type",String)],n.prototype,"hspFileId",void 0),e([(0,o.Column)({type:"varchar",length:1024}),t("design:type",String)],n.prototype,"publishJsonFileId",void 0),e([(0,o.Column)({type:"bigint"}),t("design:type",Number)],n.prototype,"publishTime",void 0),e([(0,o.Column)({type:"bigint"}),t("design:type",Number)],n.prototype,"unPublishTime",void 0),e([(0,o.Column)({type:"bigint",nullable:!0}),t("design:type",Number)],n.prototype,"updateTime",void 0),n=e([(0,o.Entity)("packagemanifest")],n),exports.PackageManifest=n,exports.OHPM_PACKAGE_MANIFEST_DB_NAME="package_manifest";