"use strict";var e=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,n)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),t=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(i){if(i&&i.__esModule)return i;var o={};if(null!=i)for(var n in i)"default"!==n&&Object.prototype.hasOwnProperty.call(i,n)&&e(o,i,n);return t(o,i),o},o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(n,r){function s(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(s,l)}a((o=o.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkNonRootPermission=exports.readFileFromEnv=exports.readCongFileFromEnv=exports.checkAndRestoreFileDb=exports.installExecute=exports.installCmd=void 0;const r=require("../packages/log"),s=require("../packages/config/parse"),l=require("../packages/config/checker"),a=require("../common/init"),u=require("../packages/config/config"),d=require("../common/Constants"),c=n(require("path")),f=require("../utils/FsUtil"),p=i(require("js-yaml")),y=p,g=require("../packages/config/constants"),m=n(require("semver")),h=require("../common/CommandsUtil"),_=n(require("log4js")),v=require("../common/DbAndStoreType"),F=require("../entity/PackageManifest"),O=require("../entity/PackageMetaData"),b=require("../entity/Dependency"),N=require("../packages/definitions/types"),A=require("../common/FSFactory"),T=require("../common/DbFactory"),D=require("../entity/Repo"),E=require("../utils/RandomUtil"),w=require("../service/repo/RepoRepository"),C=require("../service/group/GroupRepository"),k=require("../service/group/GroupMemberRepository"),R=require("../entity/GroupMember"),S=require("../service/accessToken/AccessTokenService"),U=require("../service/accessToken/utils/desensitizeToken"),P=require("../utils/FsBlockingUtil"),x=require("../utils/CommonUtil");function I(e){return o(this,void 0,void 0,(function*(){const{config:t=""}=e,i=yield function(e){return o(this,void 0,void 0,(function*(){const t=c.default.join(d.Constants.WORK_DIR,g.PathConstants.CONFIG_PATH);if(!(e&&0!==e.length||(e=t,yield f.FsUtil.exists(e))))throw new Error(`default config file "${e}" not exist or empty`);const i=c.default.resolve(process.cwd(),e);if(!i.endsWith(g.PathConstants.DEFAULT_CONFIG_FILE_SUFFIX))throw new Error(`suffix of config file: "${i}" must be "${g.PathConstants.DEFAULT_CONFIG_FILE_SUFFIX}"`);if(!(yield f.FsUtil.exists(i)))throw new Error(`config file input "${i}" not exist`);return i}))}(t),n=yield L();J("install");const a=yield(0,s.parseConfigFileAndAssignDefault)(i);yield(0,l.checkAndUpdateConfig)(a),u.config.skip_db=!!e.skipDb&&e.skipDb;const p=yield function(e){return o(this,void 0,void 0,(function*(){let t;if(0!==e.length){const i=yield f.FsUtil.readFile(e,"utf8");t=y.load(i)}return t}))}(n);if(p){!function(e,t){if(0!==e.length&&!m.default.gt(t,e)&&!m.default.eq(t,e))throw new Error("you can't use a lower version of ohpm-repo, please install the latest version of ohpm-repo");t!==e&&r.OhpmLazyLogger.info(`version upgrade: ohpm-repo's version is upgraded from "${e}" to "${t}".`)}(p.ohpm_repo_version?p.ohpm_repo_version.toString():"",d.Constants.VERSION),yield function(e,t,i){return o(this,void 0,void 0,(function*(){const n=function(e,t){const i=new Set;JSON.stringify(e.listen)!==JSON.stringify(t.listen)&&i.add(g.ConfigItemNames.LISTEN);JSON.stringify(e.deploy_root)!==JSON.stringify(t.deploy_root)&&i.add(g.ConfigItemNames.DEPLOY_ROOT);JSON.stringify(e.db)!==JSON.stringify(t.db)&&i.add(g.ConfigItemNames.DB);JSON.stringify(e.store)!==JSON.stringify(t.store)&&i.add(g.ConfigItemNames.STORE);JSON.stringify(e.uplink_cache_path)!==JSON.stringify(t.uplink_cache_path)&&i.add(g.ConfigItemNames.UPLINK_CACHE_PATH);JSON.stringify(e.logs_path)!==JSON.stringify(t.logs_path)&&i.add(g.ConfigItemNames.LOGS_PATH);return i}(e,t),s=Array.from(n).join("; ");n.size>=4?yield(0,h.confirmSubmit)(`the configuration file has changed a lot, important changes include: "${s}", please confirm whether to continue the installation, continue? (Y/N)`,function(e,t){return()=>o(this,void 0,void 0,(function*(){try{yield q(e,t)}catch(e){(0,r.consoleError)(`server fail to install: ${e}.`),_.default.shutdown((()=>process.exit(1)))}}))}(i,e)):yield q(i,e)}))}(u.config,p,i)}else yield q(i,u.config)}))}function q(e,t){return o(this,void 0,void 0,(function*(){yield a.MainInit.init(e),yield function(e){return o(this,void 0,void 0,(function*(){yield f.FsUtil.createFileIfNotExists(c.default.join(d.Constants.DATA_DIR,g.PathConstants.CONFIG_PATH)),e.ohpm_repo_version=d.Constants.VERSION,yield f.FsUtil.writeFile(c.default.join(d.Constants.DATA_DIR,g.PathConstants.CONFIG_PATH),p.default.dump(e),"utf8")}))}(t),yield(0,A.initStorage)(),yield function(e){return o(this,void 0,void 0,(function*(){yield M(e),yield function(){return o(this,void 0,void 0,(function*(){if(!(yield C.groupRepository.hasTable()))return void r.OhpmLazyLogger.debug(`table "group" is not exist, "group" table has been merged into "group_member" table, the current time is "${new Date}".`);if(0===(yield k.groupMemberRepository.findByFilter({group_description:"",group_name:""})).total)return void r.OhpmLazyLogger.debug(`old "group_member" table data does not exist, "group" table has been merged into "group_member" table, the current time is "${new Date}".`);const e=yield C.groupRepository.findByFilter();for(const t of e.recordList){const e=t.id,i=t.owner_name,o=t.create_time,n=t.description,r=t.name,s=yield k.groupMemberRepository.findByFilter({group_id:e});for(const e of s.recordList){const t=new R.GroupMember(e);t.setGroupCreateTime(o),t.setGroupDescription(n),t.setGroupName(r),t.getMemberName()===i&&t.getRole()===N.RoleType.Member&&t.setRole(N.RoleType.Admin),t.getMemberName()!==i&&t.getRole()===N.RoleType.Admin&&t.setRole(N.RoleType.Member),yield k.groupMemberRepository.updateById(t)}}}))}(),yield function(){return o(this,void 0,void 0,(function*(){const e=yield T.commonDB.findByFilter(D.REPO_DB_NAME,{});if(!e||e.total<=0){const e=new D.Repo({id:E.RandomUtil.generateUUID(),name:"ohpm",description:"this is a default repository",uplink:""});yield w.repoRepository.insert(e),r.OhpmLazyLogger.info("insert repo success:",`repo's id is ${e.getId()}.`)}}))}(),yield function(){return o(this,void 0,void 0,(function*(){if(u.config.db.type===v.DbType.FileDb){const e=u.config.db.config.path,t=c.default.resolve(d.Constants.DATA_DIR,e),i=c.default.join(t,"access_token.json");if(!P.FsBlocking.existsSync(i))return;const o=yield f.FsUtil.readJSON(i);for(const e of o)e.sanitizedToken||(e.sanitizedToken=(0,U.desensitizeToken)(e.token),e.token=x.CommonUtil.sha256(e.token));yield f.FsUtil.writeFile(i,JSON.stringify(o,null,2))}else if(u.config.db.type===v.DbType.Mysql){const e=S.AccessTokenService.getInstance(),{recordList:t}=yield e.getAllAccessToken(),i=[];for(const o of t)o.sanitizedToken||(o.sanitizedToken=(0,U.desensitizeToken)(o.token),o.token=x.CommonUtil.sha256(o.token),i.push(e.updateAccessToken(o)));yield Promise.all(i)}}))}()}))}(t),(0,r.consoleInfo)("install successfully."),yield(0,u.setEnvironmentVariable)(d.Constants.DEPLOY_ROOT_ENV,t.deploy_root)}))}function M(e){return o(this,void 0,void 0,(function*(){if(e.db.type!==v.DbType.FileDb)return;const t=e.db.config.path,i=c.default.resolve(d.Constants.DATA_DIR,t);if(!(yield f.FsUtil.exists(i)))return;const n=c.default.join(i,`${F.OHPM_PACKAGE_MANIFEST_DB_NAME}.json`);if(yield f.FsUtil.exists(n)){const e=JSON.parse(yield f.FsUtil.readFile(n,"utf-8"));yield j(e,n)}const s=c.default.join(i,`${O.OHPM_PACKAGE_METADATA_DB_NAME}.json`);if(yield f.FsUtil.exists(s)){const e=JSON.parse(yield f.FsUtil.readFile(s,"utf-8"));yield j(e,s)}const l=c.default.join(i,`${b.OHPM_DEPENDENCY_DB_NAME}.json`);if(yield f.FsUtil.exists(l)){const e=JSON.parse(yield f.FsUtil.readFile(l,"utf-8"));yield function(e,t){return o(this,void 0,void 0,(function*(){if(!Array.isArray(e))throw new Error(`you are using "filedb" to store data. The "${t}" file is damaged`);const i=[];e.map((e=>{e.hasOwnProperty("isDev")&&(e.isDev?e.depType=N.DepType.DEV:e.depType=N.DepType.NORMAL,delete e.isDev),i.push(e)})),yield f.FsUtil.writeFile(t,JSON.stringify(i,null,2))}))}(e,l)}const a=c.default.join(i,"group_member.json");if(yield f.FsUtil.exists(a)){const e=JSON.parse(yield f.FsUtil.readFile(a,"utf-8"));yield function(e,t){return o(this,void 0,void 0,(function*(){if(!Array.isArray(e))throw new Error(`you are using "filedb" to store data. The "${t}" file is damaged`);const i=e.map((e=>(e.hasOwnProperty("group_create_time")||(e.group_create_time=0),e.hasOwnProperty("group_name")||(e.group_name=""),e.hasOwnProperty("group_description")||(e.group_description=""),e)));yield f.FsUtil.writeFile(t,JSON.stringify(i,null,2))}))}(e,a)}const u=c.default.join(i,"adminAuditLog.json");if(yield f.FsUtil.exists(u)){const e=JSON.parse(yield f.FsUtil.readFile(u,"utf-8"));yield function(e,t){return o(this,void 0,void 0,(function*(){if(!Array.isArray(e))throw new Error(`you are using "filedb" to store data. The "${t}" file is damaged`);let i=!1;const o=e.map((e=>(e.role||(e.role=1,i=!0),e)));i&&(yield f.FsUtil.writeFile(t,JSON.stringify(o,null,2)),r.OhpmLazyLogger.debug('add the "role" field to the old data of the "adminAuditLog" table.'))}))}(e,u)}}))}function j(e,t){return o(this,void 0,void 0,(function*(){if(!Array.isArray(e))throw new Error(`you are using "filedb" to store data. The "${t}" file is damaged`);const i=e.map((e=>(e.groupName=e.group||e.groupName||null,delete e.group,!e.groupName&&e.name.startsWith("@")&&(e.groupName=function(e){const t=/@(.+)\//,i=e.match(t);return i?i[1]:null}(e.name)),e)));yield f.FsUtil.writeFile(t,JSON.stringify(i,null,2))}))}function L(){return o(this,void 0,void 0,(function*(){let e="";const t=(0,u.getEnvironmentVariable)(d.Constants.DEPLOY_ROOT_ENV);return t?(e=c.default.join(t,g.PathConstants.CONFIG_PATH),(yield f.FsUtil.exists(e))?e:""):""}))}function J(e){if(process.getuid&&0===process.getuid())throw new Error(`you can not use a superuser or root to ${e} the server`)}exports.installCmd=function(e){return o(this,void 0,void 0,(function*(){try{yield I(e)}catch(e){(0,r.consoleError)(`server fail to install: ${e}.`),_.default.shutdown((()=>process.exit(1)))}}))},exports.installExecute=I,exports.checkAndRestoreFileDb=M,exports.readCongFileFromEnv=L,exports.readFileFromEnv=function(e){return o(this,void 0,void 0,(function*(){let t="";const i=(0,u.getEnvironmentVariable)(d.Constants.DEPLOY_ROOT_ENV);return i&&(t=c.default.join(i,`${e}`)),(yield f.FsUtil.exists(t))?t:""}))},exports.checkNonRootPermission=J;