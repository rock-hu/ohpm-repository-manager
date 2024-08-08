"use strict";var _=this&&this.__importDefault||function(_){return _&&_.__esModule?_:{default:_}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ADMIN_ROLE=exports.USER_ROLE=exports.NUMBER_OF_WEEK_IN_YEAR=exports.NUMBER_OF_MILLIS_IN_WEEK=exports.NUMBER_OF_MILLIS_IN_DAY=exports.NUMBER_OF_DAY_IN_YEAR=exports.VERSION_REGEX=exports.NAME_CONTAIN_GROUP_REGEX=exports.INPUT_STRING_REGEX=exports.ERROR_INPUT_DEFAULT_STRING=exports.USE_STREAM_THRESHOLD_SIZE=exports.USER_CHANGE_PASSWORD=exports.USER_NEED_CHANGE_PASSWORD_PRE=exports.API_ACCESS_CACHE_PRE=exports.LOCK_KEY=exports.OHPM_PING_RES=exports.UPLINK_METADATA_CACHE_PRE=exports.ONE_DAY_MILL_SEC=exports.ONE_DAY_SEC=exports.ONE_HOUR_MILL_SEC=exports.ONE_HOUR_SEC=exports.UPLOAD_TIMES_CACHE_PRE=exports.UPLOAD_LOCK_CACHE_PRE=exports.PackageStatus=exports.METADATA_CACHE_PRE=exports.TEMP_DIR=exports.UPLOAD_DIR=exports.OH_MODULES=exports.BUILD_PROFILE=exports.PACKAGE=exports.PACKAGE_JSON=exports.OH_PACKAGE_JSON=exports.DOWNLOAD_DOMAIN=exports.TAG_REGEX=exports.USER_NAME_REGEX=exports.URL_REGEX=exports.OHPM_PACKAGE_JSON5_HSP_NECESSARY_KEYS_ARR=exports.OHPM_PACKAGE_JSON5_NECESSARY_KEYS_ARR=exports.OHPM_PACKAGE_JSON5_KEYS_ARR=exports.NEED_VERIFY_ARTIFACT_TYPE_REGEX=exports.ARTIFACT_TYPE_REGEX=exports.KEYWORD_REGEX=exports.EMAIL_REGEX=exports.AUTHOR_NAME_REGEX=exports.OHPM_NOT_ALLOWED_PACKAGE_NAME_SUFFIX_ARR=exports.OHPM_PACKAGE_NAME_GROUP_MATCH_REGEX=exports.NPM_PACKAGE_NAME_REGEX=exports.OHPM_PACKAGE_NAME_REGEX=exports.REPO_NAME_PATH_VAR_REGEX_STR=exports.MAX_PAGE_SIZE=void 0,exports.FAIL_OPERATION=exports.SUCCESS_OPERATION=void 0;const E=require("../common/Constants"),A=_(require("path"));exports.MAX_PAGE_SIZE=100,exports.REPO_NAME_PATH_VAR_REGEX_STR="[a-z]+",exports.OHPM_PACKAGE_NAME_REGEX=/(?=^(@(?![0-9\-_])[a-z0-9\-_]+(?<![\-_])\/)?(?![0-9\-_.])[a-z0-9\-_.]+(?<![\-_.])$).{1,128}$/,exports.NPM_PACKAGE_NAME_REGEX=/(?=^(@[a-zA-Z0-9\-_]+\/)?[a-zA-Z0-9\-_.]+$).{1,214}$/,exports.OHPM_PACKAGE_NAME_GROUP_MATCH_REGEX=/^@(?![0-9\-_])[a-z0-9\-_]+(?<![\-_])\/.+$/,exports.OHPM_NOT_ALLOWED_PACKAGE_NAME_SUFFIX_ARR=[".har",".tar",".tgz",".tar.gz"],exports.AUTHOR_NAME_REGEX=/^[A-Za-z0-9\s\u4e00-\u9fa5_\-.]{1,128}$/,exports.EMAIL_REGEX=/(?=^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9_\-.]+$).{1,64}$/,exports.KEYWORD_REGEX=/^[\u4e00-\u9fa50-9A-Za-z\-\s]{1,20}$/,exports.ARTIFACT_TYPE_REGEX=/original|obfuscation|bytecode/,exports.NEED_VERIFY_ARTIFACT_TYPE_REGEX=/obfuscation|bytecode/,exports.OHPM_PACKAGE_JSON5_KEYS_ARR=["name","version","main","license","types","description","type","homepage","repository","artifactType","keywords","dependencies","devDependencies"],exports.OHPM_PACKAGE_JSON5_NECESSARY_KEYS_ARR=["name","version","main"],exports.OHPM_PACKAGE_JSON5_HSP_NECESSARY_KEYS_ARR=["name","version","types"],exports.URL_REGEX=/(?=^((https|http|ftp|rtsp|mms):\/\/)?([a-zA-Z0-9\u4e00-\u9fa5\-]+\.)+([a-zA-Z0-9\u4e00-\u9fa5\-]+)(:[0-9]{1,5})?([\/?].*)?$).{0,1024}$/,exports.USER_NAME_REGEX=/^[a-zA-Z][a-zA-Z0-9_]{0,29}$/,exports.TAG_REGEX=/^[A-Za-z0-9][A-Za-z0-9._-]{0,59}$/,exports.DOWNLOAD_DOMAIN="${domain_url}",exports.OH_PACKAGE_JSON="oh-package.json5",exports.PACKAGE_JSON="package.json",exports.PACKAGE="package",exports.BUILD_PROFILE="build-profile.json5",exports.OH_MODULES="oh_modules",exports.UPLOAD_DIR=A.default.join(E.Constants.DATA_DIR,"temp","uploads"),exports.TEMP_DIR=A.default.join(E.Constants.DATA_DIR,"temp"),exports.METADATA_CACHE_PRE="OHPM_PACKAGE:METADATA:",function(_){_[_.Published=0]="Published",_[_.Unpublished=1]="Unpublished"}(exports.PackageStatus||(exports.PackageStatus={})),exports.UPLOAD_LOCK_CACHE_PRE="OHPM:UPLOAD:LOCK:",exports.UPLOAD_TIMES_CACHE_PRE="OHPM:UPLOAD:TIMES:",exports.ONE_HOUR_SEC=3600,exports.ONE_HOUR_MILL_SEC=36e5,exports.ONE_DAY_SEC=86400,exports.ONE_DAY_MILL_SEC=864e5,exports.UPLINK_METADATA_CACHE_PRE="UPLINK_PACKAGE:METADATA:",exports.OHPM_PING_RES={success:!0},exports.LOCK_KEY="LOGIN:LOCK:",exports.API_ACCESS_CACHE_PRE="API:ACCESS:",exports.USER_NEED_CHANGE_PASSWORD_PRE="USER:NEED_CHANGE_PASSWORD:",exports.USER_CHANGE_PASSWORD="USER:CHANGE_PASSWORD:",exports.USE_STREAM_THRESHOLD_SIZE=5,exports.ERROR_INPUT_DEFAULT_STRING="##",exports.INPUT_STRING_REGEX=/^[A-Za-z0-9\s\u4e00-\u9fa5@\\/_\-.]{0,128}$/,exports.NAME_CONTAIN_GROUP_REGEX="@([^\\/]+)\\/([^\\/]+)",exports.VERSION_REGEX=new RegExp("^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$"),exports.NUMBER_OF_DAY_IN_YEAR=365,exports.NUMBER_OF_MILLIS_IN_DAY=864e5,exports.NUMBER_OF_MILLIS_IN_WEEK=6048e5,exports.NUMBER_OF_WEEK_IN_YEAR=52,exports.USER_ROLE="User",exports.ADMIN_ROLE="Admin",exports.SUCCESS_OPERATION="true",exports.FAIL_OPERATION="false";