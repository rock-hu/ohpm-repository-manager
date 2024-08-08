# ohpm-repository-manager    

## 系统平台要求    
ohpm支持在Windows、MacOS、Linux操作系统下使用。

ohpm通过软链接或符号链接的方式构建依赖关系。不同操作系统需满足如下要求：

- Windows：

工程代码文件所在文件系统类型需为NTFS（Windows系统下默认为NTFS）；
使用源码依赖时，依赖的源码模块与被依赖的源码模块需要在同一个盘符下，不允许配置跨盘符依赖。
- MacOS：

工程代码文件所在文件系统类型需为APFS（macOS系统下默认为APFS）。

如在macOS上挂载了其他不支持符号链接的文件系统（如FAT32或exFAT），则无法在其上创建符号链接。

- Linux：

EXT4、Btrfs、XFS、ZFS等常见Linux文件系统类型均满足要求。

部分较老或简单的文件系统（不支持符号链接），可能存在无法在其上创建或正确解析软链接的情况。

## 常用命令        
```dotnetcli
ohpm config
ohpm help
ohpm info
ohpm init
ohpm install
ohpm list
ohpm publish
ohpm uninstall
ohpm prepublish
ohpm unpublish
ohpm update
ohpm root
ohpm version
ohpm cache clean
ohpm run
ohpm --version
ohpm ping
ohpm clean
ohpm dist-tags
ohpm convert
```


## [私仓搭建](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-ohpm-repo-0000001749596668-V5)    


```bash
npm install
```

```bash
export PATH=$PATH:./bin
```


```bash
➜  ohpm-repository-manager git:(master) ✗ ohpm-repo -v
5.0.4
```

```bash
➜  ohpm-repository-manager git:(master) ✗ ohpm-repo install
[2024-08-08T16:08:31.500] [WARN] default - "listen" protocol is set to 'http' in "config.yaml" file, which is insecure, advise to use the more secure 'https' protocol instead.
[2024-08-08T16:08:31.517] [DEBUG] default - begin to create new key files.
[2024-08-08T16:08:31.535] [INFO] default - initialize encryption component successfully.
[2024-08-08T16:08:31.536] [INFO] default - initialize "file database" successfully.
[2024-08-08T16:08:31.537] [DEBUG] default - initialize uplinkStorage successfully.
[2024-08-08T16:08:31.542] [INFO] default - initialize "file storage" successfully.
[2024-08-08T16:08:31.544] [DEBUG] default - table "group" is not exist, "group" table has been merged into "group_member" table, the current time is "Thu Aug 08 2024 16:08:31 GMT+0800 (中国标准时间)".
[2024-08-08T16:08:31.550] [INFO] default - insert repo success: repo's id is a9c5e43bf5a140359d1ac99536e0d09a.
[2024-08-08T16:08:31.550] [INFO] console - install successfully.
[2024-08-08T16:08:31.557] [DEBUG] default - current system is "darwin" and configPath is ".zshrc".
[2024-08-08T16:08:31.570] [INFO] default - set "deploy_root" environment variables successfully: "OHPM_REPO_DEPLOY_ROOT = /Users/rockhu/ohpm-repo".
[2024-08-08T16:08:31.571] [INFO] console - to make the environment variables of "deploy_root" take effect, please run the refresh command: "source ~/.zshrc " or ". ~/.zshrc".
```

```bash
➜  ohpm-repository-manager git:(master) ✗ source ~/.zshrc
➜  ohpm-repository-manager git:(master) ✗ echo $OHPM_REPO_DEPLOY_ROOT
/Users/rockhu/ohpm-repo
```


```bash
ohpm-repo start
```

### [config.yaml  配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-ohpm-repo-configuration-0000001796516529-V5)