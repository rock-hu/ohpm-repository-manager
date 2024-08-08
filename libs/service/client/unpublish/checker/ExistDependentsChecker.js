"use strict";var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ExistDependentsChecker=void 0;const t=require("../../../../entity/PackageMetaData"),n=require("../../publish/PublishRepository"),r=require("../../../../packages/config/config"),a=require("../UnPublishRepository"),o=require("../../../../common/DbFactory"),i=require("../../../../common/RepoError"),s=require("../../../../common"),c=require("../UnPublishService"),d=require("../../../../common/ErrorCode");exports.ExistDependentsChecker=class{check(t,n){return e(this,void 0,void 0,(function*(){if(r.config.allow_remove_depended_packages)return;const e=new Set(t.packages.map((e=>e.version?`${e.packageName}@${e.version}`:e.packageName))),n=[];for(const r of t.pkgMap.values()){const t=r.repoName,a=r.packageName,o=r.versions;o?n.push(this.checkExistDependentsByVersionsAndUpdateMetadata(e,t,a,o)):n.push(this.checkExistDependentsAndUpdateMetadata(e,t,a))}yield Promise.all(n)}))}checkExistDependentsAndUpdateMetadata(r,d,p){return e(this,void 0,void 0,(function*(){const e=yield n.publishRepository.selectPackageMetaDataByName(d,p),{total:u,recordList:h}=yield a.unPublishRepository.getDependents(d,p);if(0===u)return;if(!!h.find((e=>!(r.has(e.name)||r.has(`${e.name}@${e.version}`)))))throw yield c.unPublishService.markDeprecate(e,d,p),e.updateTime=(new Date).getTime(),yield o.commonDB.updateById(t.OHPM_PACKAGE_METADATA_DB_NAME,e.id,e),new i.RepoClientError(s.ErrorCode.OHPMPackageDepended,`The OHPM package "${p}" has been depended on by other components.`)}))}checkExistDependentsByVersionsAndUpdateMetadata(r,p,u,h){return e(this,void 0,void 0,(function*(){const e=yield n.publishRepository.selectPackageMetaDataByName(p,u),{total:l,recordList:m}=yield a.unPublishRepository.getDependents(p,u,h);if(0===l)return;let y=[];if(m.forEach((e=>{r.has(e.name)||r.has(`${e.name}@${e.version}`)||y.push(e.depPackageVersion)})),0!==y.length)throw y=Array.from(new Set(y)),yield c.unPublishService.markDeprecate(e,p,u,y),e.updateTime=(new Date).getTime(),yield o.commonDB.updateById(t.OHPM_PACKAGE_METADATA_DB_NAME,e.id,e),new i.RepoClientError(s.ErrorCode.OHPMPackageDepended,`The OHPM package "${u}@${y}" has been depended on by other components.`,null,{messageCN:`${d.MESSAGE_CN[s.ErrorCode.OHPMPackageDepended]}, 包名: ${u}, 版本号: ${y}`})}))}};