"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PackageVO=void 0;const e=require("../../utils/CommonUtil");exports.PackageVO=class{constructor(t){this.id=t.id,this.name=t.name,this.authorName=t.authorName,this.authorPicUrl=t.authorPicUrl,this.latestVersion=t.latestVersion,this.latestPublishTime=t.latestPublishTime,this.license=t.license,this.keywords=e.CommonUtil.compatibleKeyword(t.keywords)}};