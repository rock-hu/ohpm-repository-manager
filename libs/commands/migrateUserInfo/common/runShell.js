"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.runShell=exports.shellStdio=void 0;const e=require("child_process"),s=require("../definitions"),i=s.isWindows?process.env.ComSpec||"cmd":process.env.SHELL||"sh";var r;!function(e){e.pipe="pipe",e.inherit="inherit"}(r=exports.shellStdio||(exports.shellStdio={})),exports.runShell=function(o,n=process.cwd(),t=r.inherit){const c=s.isWindows?["/d","/s","/c",o]:["-c",o];return(0,e.spawnSync)(i,c,{windowsVerbatimArguments:!0,stdio:t,cwd:n,env:process.env})};