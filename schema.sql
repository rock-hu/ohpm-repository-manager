/*
version: 5.0.3
*/

SET NAMES utf8mb4;;
SET FOREIGN_KEY_CHECKS = 0;;

-- ----------------------------
-- Table structure for download_package(5.0.3版本添加)
-- ----------------------------

CREATE TABLE IF NOT EXISTS `download_package`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `repoName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `version` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `downloadDay` bigint NOT NULL,
  `downloadNumber` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for adminauditlog
-- ----------------------------

CREATE TABLE IF NOT EXISTS `adminauditlog`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `adminId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `adminName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `operationType` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `operationDescription` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `operationDetail` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `operationTime` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for cachedata
-- ----------------------------

CREATE TABLE IF NOT EXISTS `cachedata`  (
  `id` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `value` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `options` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `isObject` tinyint NOT NULL,
  `createTime` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for dependency
-- ----------------------------

CREATE TABLE IF NOT EXISTS `dependency`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `repoName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `version` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `depPackageName` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `depPackageVersion` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `depType` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for deployedinstance
-- ----------------------------

CREATE TABLE IF NOT EXISTS `deployedinstance`  (
  `machine` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `port` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `version` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`machine`, `port`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for downloadfailure
-- ----------------------------

CREATE TABLE IF NOT EXISTS `downloadfailure`  (
  `packageId` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `downloadHost` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `downloadPort` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `downloadPath` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `failureReason` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `downloadTime` bigint NOT NULL,
  `handled` tinyint NOT NULL,
  `repoName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `version` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `checksum` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `groupName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`packageId`, `downloadHost`, `downloadPort`, `downloadTime`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for groupmember
-- ----------------------------

CREATE TABLE IF NOT EXISTS `groupmember`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` bigint NOT NULL,
  `created_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `update_time` bigint NOT NULL,
  `updated_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `is_deleted` tinyint NULL DEFAULT NULL,
  `group_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `member_id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `member_name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for loginfailure
-- ----------------------------

CREATE TABLE IF NOT EXISTS `loginfailure`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `failedTime` bigint NOT NULL,
  `failedReason` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for loginstatus
-- ----------------------------

CREATE TABLE IF NOT EXISTS `loginstatus`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `sessionId` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `loginTime` bigint NOT NULL,
  `needChangePassword` tinyint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for packagemanifest
-- ----------------------------

CREATE TABLE IF NOT EXISTS `packagemanifest`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `repoName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `verifyName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `version` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `groupName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `status` tinyint NOT NULL,
  `packageType` tinyint NOT NULL,
  `authorId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `authorName` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `authorUrl` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `authorEmail` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `keywords` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `homepage` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `repository` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `license` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `artifactType` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `checksum` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fileName` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fileSize` int NOT NULL,
  `fileNum` int NOT NULL,
  `readmeFileId` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `changelogFileId` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `harFileId` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hspFileId` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `publishJsonFileId` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `publishTime` bigint NOT NULL,
  `unPublishTime` bigint NOT NULL,
  `updateTime` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for packagemetadata
-- ----------------------------

CREATE TABLE IF NOT EXISTS `packagemetadata`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `repoName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `verifyName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `latestVersion` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `groupName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `packageType` tinyint NOT NULL,
  `authorId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `authorName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `authorPicUrl` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `keywords` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `license` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `downloads` int NOT NULL,
  `metaJsonFileId` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `latestPublishTime` bigint NOT NULL,
  `updateTime` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for publickey
-- ----------------------------

CREATE TABLE IF NOT EXISTS `publickey`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` bigint NOT NULL,
  `publicKey` varchar(8192) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `publishId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `publishPassword` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cryptoVersion` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `userId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for repo
-- ----------------------------

CREATE TABLE IF NOT EXISTS `repo`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `uplink` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for uplink
-- ----------------------------

CREATE TABLE IF NOT EXISTS `uplink`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `create_time` bigint NOT NULL,
  `created_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `update_time` bigint NOT NULL,
  `updated_by` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `is_deleted` tinyint NULL DEFAULT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `url` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for uplinkproxy
-- ----------------------------

CREATE TABLE IF NOT EXISTS `uplinkproxy`  (
  `id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `http_proxy` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `https_proxy` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `no_proxy` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `cryptoVersion` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for user
-- ----------------------------

CREATE TABLE IF NOT EXISTS `user`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `salt` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` tinyint NOT NULL,
  `publishId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `needChangePassword` tinyint NOT NULL,
  `createTime` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for validation_config
-- ----------------------------

CREATE TABLE IF NOT EXISTS `validation_config`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `attrName` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `configs` varchar(4096) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` bigint NULL DEFAULT NULL,
  `updateTime` bigint NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for validation_config
-- ----------------------------

CREATE TABLE IF NOT EXISTS `access_token`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `token` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `type` tinyint NOT NULL,
  `userId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;

-- ----------------------------
-- Table structure for dist_tags
-- ----------------------------

CREATE TABLE IF NOT EXISTS `dist_tags`  (
  `id` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `repoName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `packageName` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `version` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `tag` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastOprUserId` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createTime` bigint NOT NULL,
  `updateTime` bigint NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX idx_repoName_packageName_tag (`repoName`,`packageName`,`tag`),
  INDEX idx_repoName_packageName_version (`repoName`,`packageName`,`version`)
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;;


-- ----------------------------
-- 新增字段：表deployedinstance新增字段new_crypto_version，数据类型为varchar(32)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'deployedinstance';;  -- 替换为您的表名
SET @columnname = 'new_crypto_version';; -- 替换为您想要添加的列名
SET @columntype = 'VARCHAR(32)';; -- 替换为您想要添加的列的数据类型  --增加字段

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype)
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表deployedinstance新增字段crypto_version,数据类型为varchar(32)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'deployedinstance';;  -- 替换为您的表名
SET @columnname = 'crypto_version';; -- 替换为您想要添加的列名
SET @columntype = 'VARCHAR(32)';; -- 替换为您想要添加的列的数据类型  --增加字段

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype)
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表packagemanifest新增字段publisherName,数据类型为varchar(128)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';;  -- 替换为您的表名
SET @columnname = 'publisherName';; -- 替换为您想要添加的列名
SET @columntype = 'VARCHAR(128)';; -- 替换为您想要添加的列的数据类型  --增加字段

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype)
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表packagemetadata新增字段publisherName,数据类型为varchar(128)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemetadata';;  -- 替换为您的表名
SET @columnname = 'publisherName';; -- 替换为您想要添加的列名
SET @columntype = 'VARCHAR(128)';; -- 替换为您想要添加的列的数据类型  --增加字段

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype)
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型：表cachedata修改字段value的类型：从VARCHAR变更为mediumtext
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'cachedata';; -- 将其替换为您的表名
SET @columnname = 'value';; -- 将其替换为您的列名
SET @oldtype = 'VARCHAR';;
SET @newtype = 'mediumtext';;

SELECT DATA_TYPE INTO @dtype
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

SET @sql = CASE
  WHEN @dtype = @oldtype THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @newtype)
  ELSE
    'SELECT ''No need to change column type.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型：表packagemanifest修改字段readmeFileId的类型：从VARCHAR变更为text
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'readmeFileId';; -- 将其替换为您的列名
SET @oldtype = 'varchar';;
SET @newtype = 'text';;

SELECT DATA_TYPE INTO @dtype
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

SET @sql = CASE
  WHEN @dtype = @oldtype THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @newtype)
  ELSE
    'SELECT ''No need to change column type.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;


-- ----------------------------
-- 修改字段类型：表packagemanifest修改字段changelogFileId的类型：从varchar变更为text
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'changelogFileId';; -- 将其替换为您的列名
SET @oldtype = 'varchar';;
SET @newtype = 'text';;

SELECT DATA_TYPE INTO @dtype
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

SET @sql = CASE
  WHEN @dtype = @oldtype THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @newtype)
  ELSE
    'SELECT ''No need to change column type.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型：表packagemanifest修改字段harFileId的类型：从varchar变更为text
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'harFileId';; -- 将其替换为您的列名
SET @oldtype = 'varchar';;
SET @newtype = 'text';;

SELECT DATA_TYPE INTO @dtype
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

SET @sql = CASE
  WHEN @dtype = @oldtype THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @newtype)
  ELSE
    'SELECT ''No need to change column type.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型：表packagemanifest修改字段hspFileId的类型：从varchar变更为text
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'hspFileId';; -- 将其替换为您的列名
SET @oldtype = 'varchar';;
SET @newtype = 'text';;

SELECT DATA_TYPE INTO @dtype
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

SET @sql = CASE
  WHEN @dtype = @oldtype THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @newtype)
  ELSE
    'SELECT ''No need to change column type.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型：表packagemetadata修改字段metaJsonFileId的类型：从varchar变更为text
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemetadata';; -- 将其替换为您的表名
SET @columnname = 'metaJsonFileId';; -- 将其替换为您的列名
SET @oldtype = 'varchar';;
SET @newtype = 'text';;

SELECT DATA_TYPE INTO @dtype
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

SET @sql = CASE
  WHEN @dtype = @oldtype THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @newtype)
  ELSE
    'SELECT ''No need to change column type.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型的长度：表packagemanifest修改字段name的长度，变为varchar，长度为128
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'name';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 128;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型的长度：表packagemanifest修改字段verifyName的长度，变为varchar，长度为128
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'verifyName';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 128;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型的长度：表packagemanifest修改字段fileName的长度，变为varchar，长度为255
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'fileName';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 255;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型的长度：表packagemanifest修改字段license的长度，变为varchar，长度为256
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemanifest';; -- 将其替换为您的表名
SET @columnname = 'license';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 256;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型的长度：表packagemetadata修改字段name的长度，变为varchar，长度为128
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemetadata';; -- 将其替换为您的表名
SET @columnname = 'name';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 128;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;


-- ----------------------------
-- 修改字段类型的长度：表packagemetadata修改字段authorName的长度，变为varchar，长度为128
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemetadata';; -- 将其替换为您的表名
SET @columnname = 'authorName';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 128;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;


-- ----------------------------
-- 修改字段类型的长度：表packagemetadata修改字段verifyName的长度，变为varchar，长度为128
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemetadata';; -- 将其替换为您的表名
SET @columnname = 'verifyName';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 128;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;


-- ----------------------------
-- 修改字段类型的长度：表packagemetadata修改字段license的长度，变为varchar，长度为256
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'packagemetadata';; -- 将其替换为您的表名
SET @columnname = 'license';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 256;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型的长度：表publickey修改字段name的长度，变为varchar，长度为50
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'publickey';; -- 将其替换为您的表名
SET @columnname = 'name';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 50;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 修改字段类型的长度：表dependency修改字段depPackageName的长度，变为varchar，长度为214
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'dependency';; -- 将其替换为您的表名
SET @columnname = 'depPackageName';; -- 将其替换为您的列名
SET @target_dtype = 'varchar';; -- 目标数据类型
SET @new_length = 214;; -- 需要修改的长度


-- 初始化变量
SET @dtype = NULL;;
SET @dlength = NULL;;

-- 查询并设置数据类型和长度
SELECT DATA_TYPE, CHARACTER_MAXIMUM_LENGTH INTO @dtype, @dlength
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = @dbname
  AND TABLE_NAME = @tablename
  AND COLUMN_NAME = @columnname;;

-- 确认是否需要修改列的数据类型和长度
SET @sql = CASE
  WHEN @dtype = @target_dtype AND @dlength != @new_length THEN
    CONCAT('ALTER TABLE `', @tablename, '` MODIFY COLUMN `', @columnname, '` ', @target_dtype, '(', @new_length, ')')
  ELSE
    'SELECT ''No need to change column type or length.'''
END;;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表groupmember新增字段group_create_time，数据类型为bigint(5.0.2版本修改)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'groupmember';;  -- 替换为您的表名
SET @columnname = 'group_create_time';; -- 替换为您想要添加的列名
SET @columntype = 'bigint';; -- 替换为您想要添加的列的数据类型  --增加字段

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype)
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表groupmember新增字段group_name，数据类型为varchar(36)(5.0.2版本修改)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'groupmember';;  -- 替换为您的表名
SET @columnname = 'group_name';; -- 替换为您想要添加的列名
SET @columntype = 'VARCHAR(36)';; -- 替换为您想要添加的列的数据类型  --增加字段
SET @defaultvalue = '';; -- 设置默认值为空字符串

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype, ' DEFAULT \'', @defaultvalue, '\'')
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表groupmember新增字段group_description，数据类型为varchar(1024)(5.0.2版本修改)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'groupmember';;  -- 替换为您的表名
SET @columnname = 'group_description';; -- 替换为您想要添加的列名
SET @columntype = 'VARCHAR(1024)';; -- 替换为您想要添加的列的数据类型  --增加字段
SET @defaultvalue = '';; -- 设置默认值为空字符串

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype, ' DEFAULT \'', @defaultvalue, '\'')
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表adminauditlog新增字段role，数据类型为tinyint(5.1.0版本修改)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'adminauditlog';;  -- 替换为您的表名
SET @columnname = 'role';; -- 替换为您想要添加的列名
SET @columntype = 'tinyint';; -- 替换为您想要添加的列的数据类型  --增加字段
SET @defaultvalue = 1;; -- 设置默认值为1

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype, ' DEFAULT \'', @defaultvalue, '\'')
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

-- ----------------------------
-- 新增字段：表access_token新增字段sanitizedToken，数据类型为varchar(256)(5.0.2版本修改)
-- ----------------------------
SET @dbname = DATABASE();;
SET @tablename = 'access_token';;  -- 替换为您的表名
SET @columnname = 'sanitizedToken';; -- 替换为您想要添加的列名
SET @columntype = 'VARCHAR(256)';; -- 替换为您想要添加的列的数据类型  --增加字段
SET @defaultvalue = '';; -- 设置默认值为空字符串

SET @columnExists = (
  SELECT COUNT(*)
  FROM INFORMATION_SCHEMA.COLUMNS
  WHERE table_schema = @dbname
    AND table_name = @tablename
    AND column_name = @columnname
);;

SET @sql = IF(@columnExists > 0,
              'SELECT ''Column already exists'';',
              CONCAT('ALTER TABLE ', @tablename, ' ADD COLUMN ', @columnname, ' ', @columntype, ' DEFAULT \'', @defaultvalue, '\'')
             );;

PREPARE stmt FROM @sql;;
EXECUTE stmt;;
DEALLOCATE PREPARE stmt;;

SET FOREIGN_KEY_CHECKS = 1
