"use strict";var e=this&&this.__awaiter||function(e,r,o,s){return new(o||(o=Promise))((function(i,t){function n(e){try{a(s.next(e))}catch(e){t(e)}}function d(e){try{a(s.throw(e))}catch(e){t(e)}}function a(e){var r;e.done?i(e.value):(r=e.value,r instanceof o?r:new o((function(e){e(r)}))).then(n,d)}a((s=s.apply(e,r||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.userService=void 0;const r=require("./UserRepository"),o=require("../../entity/User"),s=require("../../common"),i=require("../../common/CommonValidator"),t=require("../../common/RepoError"),n=require("../group/GroupService"),d=require("../../utils/RandomUtil"),a=require("../../packages/log"),c=require("../../utils/CommonConstants"),u=require("../../packages/crypto/pbkdf2Util"),h=require("../../packages/definitions/types"),l=require("../../plugins/cache/CacheFactory"),p=require("../accessToken/AccessTokenService"),m=require("../../packages/config/init"),E=require("../client/publish/PublishRepository"),w=require("../../common/CheckRepoExists"),y=require("../../common/ErrorCode"),g=require("./UserDataSearchFilter");class U{constructor(){this.cache=l.CacheFactory.createCache({mode:"db"}),this.accessTokenService=p.AccessTokenService.getInstance()}getUser(n,d){return e(this,void 0,void 0,(function*(){i.CommonValidator.checkStringWithRegex(o.namePattern,"user.name",n),i.CommonValidator.checkStringWithRegex(o.pwdPattern,"user.password",d);const e=yield r.userRepository.findUserByName(n);if(!e||!e.recordList[0])throw new t.RepoClientError(s.ErrorCode.UserNotExist,"Incorrect user name or password.");return e.recordList[0]}))}isValidPassword(r,o){return e(this,void 0,void 0,(function*(){const e=yield this.encodePassWord(r,o.salt);return o.password===e}))}insert(o){return e(this,void 0,void 0,(function*(){return r.userRepository.insert(o)}))}getUserByUserId(o){return e(this,void 0,void 0,(function*(){return r.userRepository.findUserById(o)}))}getPickUserByUserId(o){return e(this,void 0,void 0,(function*(){return r.userRepository.findPickUserById(o)}))}getUserByUserName(o){return e(this,void 0,void 0,(function*(){return r.userRepository.findUserByName(o)}))}delUserByUserId(o,d){return e(this,void 0,void 0,(function*(){if(i.CommonValidator.checkUUID(o),o===d)throw new t.RepoClientError(s.ErrorCode.UserPermissionError,"users cannot delete themselves.");const e=yield exports.userService.getUserByUserId(d);if(!e)throw new t.RepoClientError(s.ErrorCode.UserNotExist,"incorrect user name or password.");if(!(yield exports.userService.getUserByUserId(o)))throw new t.RepoClientError(s.ErrorCode.DeleteUserError,"User does not exist or has been deleted.");if(e.role!==h.RoleType.Admin)throw new t.RepoAccessError(s.ErrorCode.UserPermissionError,"user without operation permissions");yield this.checkIsUniqueGroupOwner(o),yield n.groupService.deleteGroupListByUserId(o),yield r.userRepository.deleteById(o),yield this.accessTokenService.deleteAccessTokenByUserId(o)}))}checkAdminPermission(r){return e(this,void 0,void 0,(function*(){if((yield exports.userService.getUserByUserId(r)).role!==h.RoleType.Admin)throw new t.RepoAccessError(s.ErrorCode.UserPermissionError,"User without operation permissions")}))}getUserListByFilter(o){return e(this,void 0,void 0,(function*(){const e=new g.UserDataSearchFilter(o),s=e.getFilterUser();return r.userRepository.getUserListByFilter(e.getPageNum(),e.getPageSize(),s)}))}getUserList(o,s){return e(this,void 0,void 0,(function*(){return i.CommonValidator.checkPage(o,s),r.userRepository.findByFilter(o,s)}))}changePassWord(n,d,a,u){return e(this,void 0,void 0,(function*(){i.CommonValidator.checkUUID(n),i.CommonValidator.checkStringWithRegex(o.pwdPattern,"newPassword",d),i.CommonValidator.checkStringWithRegex(o.pwdPattern,"oldPassword",a);const e=yield exports.userService.getUserByUserId(n);let h=0;const l=c.USER_CHANGE_PASSWORD+e.id,p=yield this.cache.get(l);if(p&&(h=p.changeErrorTimes),!e)throw new t.RepoClientError(s.ErrorCode.UserNotExist,"Incorrect user name or password.");const m=yield this.encodePassWord(a,e.salt);if(e.password!==m){if(yield this.cache.set(l,{changeErrorTimes:h+1}),h===U.CHANGE_PASSWORD_ERROR_COUNT)throw u.push(e.password),yield this.cache.delete(l),new t.RepoClientError(s.ErrorCode.ChangeOldPasswordError,"The number of incorrect passwords entered exceeds three");throw new t.RepoClientError(s.ErrorCode.SameOldPasswordError,"The old password is different from the current password.")}if(d===e.name)throw new t.RepoClientError(s.ErrorCode.SameNameAndPasswordError,"user name and password cannot be the same.");if(d){const r=yield this.encodePassWord(d,e.salt);if(e.password===r)throw new t.RepoClientError(s.ErrorCode.UnSameNewPasswordError,"The new password cannot be the same as the old password.");e.password=r,e.needChangePassword=!1}return yield this.cache.set(c.USER_NEED_CHANGE_PASSWORD_PRE+e.id,{needChangePassword:e.needChangePassword},{isCachedForever:!0}),r.userRepository.updateById(n,e)}))}resetPassWord(n,d,u){return e(this,void 0,void 0,(function*(){i.CommonValidator.checkUUID(n),i.CommonValidator.checkStringWithRegex(o.pwdPattern,"newPassword",u);const e=yield exports.userService.getUserByUserId(n);if(!e)throw new t.RepoClientError(s.ErrorCode.UserNotExist,"Incorrect user name or password.");if(yield this.checkUserIsAdmin(d),u){const r=yield this.encodePassWord(u,e.salt);if(e.password===r)throw new t.RepoClientError(s.ErrorCode.UserPassWordError,"The new password cannot be the same as the old password.");if(e.name===u)throw new t.RepoClientError(s.ErrorCode.SameNameAndPasswordError,"user name and password cannot be the same.");e.password=r,e.needChangePassword=!1}const h=c.LOCK_KEY+e.id;return(yield this.cache.exists(h))&&(yield this.cache.delete(h),a.OhpmLazyLogger.info(e.id,"reset password unlock user.")),r.userRepository.updateById(n,e)}))}changeRole(o,n,d){return e(this,void 0,void 0,(function*(){i.CommonValidator.checkUUID(o),i.CommonValidator.checkUUID(n);const e=yield exports.userService.getUserByUserId(o);if(!e)throw new t.RepoClientError(s.ErrorCode.UserNotExist,"Incorrect user name or password.");let a=!1;if(d===e.role){const r=d===h.RoleType.Admin?U.PRESET_ADMIN_NAME:U.PRESET_MEMBER_NAME;throw new t.RepoClientError(s.ErrorCode.ChangeUserRoleError,`current user "${e.name}" role is already "${r}".`)}a=!0;if((yield exports.userService.getUserByUserId(n)).role!==h.RoleType.Admin)throw new t.RepoAccessError(s.ErrorCode.UserPermissionError,"User without operation permissions");return e.role=d,yield r.userRepository.updateById(o,e),a}))}findByPublishId(o){return e(this,void 0,void 0,(function*(){const{total:e,recordList:i}=yield r.userRepository.findByPublishId(o);if(1!==e)throw new t.RepoClientError(s.ErrorCode.UserNotExist,"Incorrect user name or password.");return i[0]}))}addUser(r,o){return e(this,void 0,void 0,(function*(){if((yield exports.userService.getUserByUserId(o)).role!==h.RoleType.Admin)throw new t.RepoAccessError(s.ErrorCode.UserPermissionError,"User without operation permissions");yield this.register(r)}))}register(o){return e(this,void 0,void 0,(function*(){if(0!==(yield this.getUserByUserName(o.name)).recordList.length)throw new t.RepoClientError(s.ErrorCode.UserAlreadyExist,"User already exist");if(o.password===o.name)throw new t.RepoClientError(s.ErrorCode.SameNameAndPasswordError,"user name and password cannot be the same.");o.password=yield this.encodePassWord(o.password,o.salt),yield r.userRepository.insert(o)}))}checkUserIsAdmin(r){return e(this,void 0,void 0,(function*(){if(!(yield this.checkIsAdmin(r)))throw new t.RepoAccessError(s.ErrorCode.UserPermissionError,"User without operation permissions")}))}checkIsAdmin(o){return e(this,void 0,void 0,(function*(){const e=yield r.userRepository.findUserById(o);return e&&e.role===h.RoleType.Admin}))}getAdminUser(o){return e(this,void 0,void 0,(function*(){const e=yield r.userRepository.findUserById(o);if(e&&e.role===h.RoleType.Admin)return e;throw new t.RepoAccessError(s.ErrorCode.UserPermissionError,"User without operation permissions")}))}encodePassWord(r,o){return e(this,void 0,void 0,(function*(){return(yield(0,u.pbkdf2)(r,o,1e4,32,"sha256")).toString("hex")}))}addAdminUser(){return e(this,void 0,void 0,(function*(){const e=yield r.userRepository.findUserByName(U.PRESET_ADMIN_NAME);if(!e||!e.recordList[0]){const e=new o.User;e.id=d.RandomUtil.generateUUID(),e.name=U.PRESET_ADMIN_NAME,e.password=U.PRESET_ADMIN_HASH_PWD,e.salt=U.PRESET_ADMIN_SALT,e.role=h.RoleType.Admin,e.publishId=d.RandomUtil.generateSecureRandomString(5),e.needChangePassword=!0,e.createTime=(new Date).getTime(),yield r.userRepository.insert(e)}}))}checkIsUniqueGroupOwner(r){return e(this,void 0,void 0,(function*(){const e=yield n.groupService.findUniqueGroupAdminListByOwnerId(r);if(e&&0!==e.length){const o=[];for(const r of e)o.push(r.getGroupName());throw new t.RepoClientError(s.ErrorCode.DelUserIsGroupOwner,`The deleted user whose ownerId is "${r}", cannot be the unique group owner in group："${o}".`,null,{messageCN:(0,a.format)(y.MESSAGE_CN[s.ErrorCode.DelUserIsGroupOwner],{groupName:o.join(",")})})}}))}validPermission(r,o,i,n,d=!1){return e(this,void 0,void 0,(function*(){if(!(yield(0,m.judgeReadWriteMode)()))throw new t.RepoServerError(s.ErrorCode.NoModifyPermission,"mode input is readOnly, can not modify data");if(!(yield(0,w.checkRepoExists)(r)))throw new t.RepoClientError(s.ErrorCode.RepositoryNotExist,`The repository ${r} does not exist!`);if(!c.OHPM_PACKAGE_NAME_REGEX.test(o))throw new t.RepoClientError(s.ErrorCode.InvalidPackageName,`Invalid OHPM package name:${o}.`);yield this.validOprPermission(r,o,i,n,d)}))}validOprPermission(r,o,i,n,d){return e(this,void 0,void 0,(function*(){const e=(yield this.getPkgPublisherId(r,o,i))!==n.getId();if(o.startsWith("@")){const s=o.split("/")[0].replace("@","");if(d){const t=d&&!i,a=d&&!!i,c=yield E.publishRepository.isPackagesPublishedByOnePublisher(r,o,n.getId());(t&&!c||a&&e)&&(yield this.checkIsGroupAdmin(n,s))}else e&&(yield this.checkIsGroupMember(n,s))}else{const r=yield exports.userService.checkIsAdmin(n.getId());if(e&&!r)throw new t.RepoClientError(s.ErrorCode.UserPermissionError,"The current user does not have the operation permission.")}}))}checkIsGroupMember(r,o){return e(this,void 0,void 0,(function*(){if(r.getIsAuthPlugin()&&!(yield n.groupService.isMemberByAuthPlugin(o,r)))throw new t.RepoClientError(s.ErrorCode.UserPermissionError,`The current user authenticated by authPlugin is not the member of group "${o}" and does not have the operation permission.`);if(!r.getIsAuthPlugin()&&!(yield n.groupService.isMember(o,r.getId())))throw new t.RepoClientError(s.ErrorCode.UserPermissionError,`The current user is not the member of group "${o}" and does not have the operation permission.`)}))}checkIsGroupAdmin(r,o){return e(this,void 0,void 0,(function*(){if(r.getIsAuthPlugin()&&!(yield n.groupService.isAdminByAuthPlugin(o,r)))throw new t.RepoClientError(s.ErrorCode.UserPermissionError,`The current user authenticated by authPlugin is not the administrator of group "${o}" and does not have the operation permission.`,null,{messageCN:`${y.MESSAGE_CN[s.ErrorCode.UserPermissionError]}, 组织名: ${o}`});if(!r.getIsAuthPlugin()&&!(yield n.groupService.isAdmin(o,r.getId())))throw new t.RepoClientError(s.ErrorCode.UserPermissionError,`The current user is not the administrator of group "${o}" and does not have the operation permission.`,null,{messageCN:`${y.MESSAGE_CN[s.ErrorCode.UserPermissionError]}, 组织名: ${o}`})}))}getPkgPublisherId(r,o,i){return e(this,void 0,void 0,(function*(){let e;if(e=i?yield E.publishRepository.selectPackageManifestDataByName(r,o,i):yield E.publishRepository.selectPackageMetaDataByName(r,o),!e||e.status===c.PackageStatus.Unpublished){const e=`The package ${i?`${o}@${i}`:o} does not exist in repository ${r}`;throw new t.RepoClientError(s.ErrorCode.PackageNotExist,e)}return e.authorId}))}}U.PRESET_ADMIN_NAME="admin",U.PRESET_MEMBER_NAME="member",U.PRESET_ADMIN_HASH_PWD="b4bb2d7ccd83d5a6d82807117776d6b821373b3d125d1f2b2044a95fca441962",U.PRESET_ADMIN_SALT="00000000000000000000000000000000",U.CHANGE_PASSWORD_ERROR_COUNT=3,exports.userService=new U;