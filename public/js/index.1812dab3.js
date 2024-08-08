import{B as W}from"./Button.59bb2c30.js";import{_ as B,v as z,w as R,x as S,y as K}from"./index.83aebd5f.js";import{g as X,a as Y,d as Z,e as ee,b as oe,c as Q,f as le,h as te}from"./warehouse.0f89570f.js";import{a as v,c as ie}from"./element-plus.d9770c7f.js";import{t as ae,e as N,_ as E,i as T,$ as H,ai as u,aq as j,o as _,c as q,a,V as l,Q as x,O as w,P as i,U as c,T as V,J as L,bm as J,bk as O,F as ne,a8 as de,S as A}from"./@vue.405cd0f3.js";import{a as G}from"./vue-router.779da2c0.js";import"./axios.a3888612.js";import"./vue-i18n.b3f06251.js";import"./@intlify.54dd1442.js";import"./vue.44d375da.js";import"./marked.710fa320.js";import"./xss.e4f2f0a8.js";import"./clipboard.ce371577.js";import"./cssfilter.393cb597.js";import"./dayjs.f9ab3a77.js";import"./node-forge.4054bff5.js";import"./@element-plus.1b716427.js";import"./vuex.10212040.js";import"./highlight.js.504c3f6b.js";/* empty css                            */import"./lodash-es.2c2c875c.js";import"./@vueuse.1b628eaa.js";import"./@popperjs.c75af06c.js";import"./@ctrl.86a38320.js";import"./async-validator.bf8f818c.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.54f5de6c.js";import"./@floating-ui.57eef0fc.js";const se=ae({components:{Button:W},setup(){const e=N(null),o=N(null),d=N(null),t=E({addDialogVisible:!1,editDialogVisible:!1,configProxyVisible:!1,loading:!1,addUplinkModel:{name:"",description:"",url:""},editUplinkModel:{id:"",name:"",description:"",url:""},configProxyModel:{http_proxy:"",https_proxy:"",no_proxy:"",id:""},uplinkData:[],addLoading:!1,proxyLoading:!1,editLoading:!1,headStyle:{background:"#F5F5F5",color:"#000000"},headRowStyle:{height:"40px"}}),U=()=>{t.addDialogVisible=!0},P=()=>{t.configProxyVisible=!0,X().then(p=>{p.code===200?t.configProxyModel=p.data:v.error(p.message)})},h=()=>{t.addDialogVisible=!1,t.addUplinkModel={name:"",description:"",url:""}},b=p=>{p.validate($=>{$&&(t.addLoading=!0,Y({name:t.addUplinkModel.name,url:t.addUplinkModel.url,description:t.addUplinkModel.description}).then(M=>{M.code===200&&v.success("添加成功")}).finally(()=>{D(),h(),t.addLoading=!1}))})},y=p=>{t.editDialogVisible=!0,t.editUplinkModel.name=p.name,t.editUplinkModel.id=p.id,t.editUplinkModel.url=p.url,t.editUplinkModel.description=p.description},m=p=>{ie.confirm(i18n("default.deleteQue"),i18n("head.notes"),{confirmButtonText:i18n("button.confirm"),cancelButtonText:i18n("button.cancel")}).then(()=>{Z({id:p.id}).then($=>{$.code===200&&v.success(i18n("notification.deleteSuccess"))}).finally(()=>{D()})}).catch(()=>{})},s=()=>{t.editDialogVisible=!1},g=()=>{t.configProxyVisible=!1},f=p=>{p.validate($=>{$&&(t.editLoading=!0,ee({id:t.editUplinkModel.id,name:t.editUplinkModel.name,url:t.editUplinkModel.url,description:t.editUplinkModel.description}).then(M=>{M.code===200?(v.success(i18n("login.editSuccess")),D()):v.error(M.message)}).finally(()=>{s(),t.editLoading=!1}))})},k=p=>{p.validate($=>{$&&(t.proxyLoading=!0,oe({id:t.configProxyModel.id,http_proxy:t.configProxyModel.http_proxy,https_proxy:t.configProxyModel.https_proxy,no_proxy:t.configProxyModel.no_proxy&&t.configProxyModel.no_proxy.trim()}).then(M=>{M.code===200?v.success(i18n("default.proxyConfigSuccess")):v.error(M.message)}).finally(()=>{g(),t.proxyLoading=!1}))})},r={name:[{required:!0,message:i18n("validator.nameIsNotNull")},{required:!0,validator:z,trigger:"blur"}],url:[{required:!0,message:i18n("validator.urlIsNotNull")},{required:!0,validator:R,trigger:"blur"}],description:[{required:!0,message:i18n("validator.desIsNotNull")},{required:!0,validator:S,trigger:"blur"}]},n={name:[{required:!0,message:i18n("validator.nameIsNotNull")},{required:!0,validator:z,trigger:"blur"}],url:[{required:!0,message:i18n("validator.urlIsNotNull")},{required:!0,validator:R,trigger:"blur"}],description:[{required:!0,message:i18n("validator.desIsNotNull")},{required:!0,validator:S,trigger:"blur"}]},F={https_proxy:[{required:!0,validator:R,trigger:"blur"}],http_proxy:[{required:!0,validator:R,trigger:"blur"}]},D=()=>{Q().then(p=>{p.code===200?t.uplinkData=p.data:v.error(p.message)})};return T(()=>{D()}),{...H(t),addFormRef:e,editFormRef:o,openAddDialog:U,addHandleClose:h,getAddUplinks:b,uplinksEditDialog:y,uplinksDeleteDialog:m,editHandleClose:s,addRules:r,editRules:n,saveEditUplinks:f,getUplinksData:D,configProxy:P,configProxyClose:g,saveConfigProxy:k,configProxyRules:F,configProxyFormRef:d}}}),C=e=>(J("data-v-c923cb0e"),e=e(),O(),e),re={class:"uplinks"},pe={class:"ohpm-title"},ue={class:"title"},me={class:"uplinkTable"},fe=["onClick"],ce=["onClick"],ge={class:"uplinksDialog"},be={class:"dialog-title font-M dialog-title"},he=C(()=>a("span",null,"Name",-1)),ye=C(()=>a("span",null,"Url",-1)),ke={class:"uplinksDialog"},ve={class:"dialog-title font-M dialog-title"},_e=C(()=>a("span",null,"Url",-1)),Ve={class:"uplinksDialog removeSvg"},$e={class:"dialog-title font-M dialog-title"},Me=C(()=>a("span",null,"HttpProxy",-1)),Ue=C(()=>a("span",null,"HttpsProxy",-1)),Pe=C(()=>a("span",null,"NoProxy",-1));function Ce(e,o,d,t,U,P){const h=u("Button"),b=u("el-table-column"),y=u("el-table"),m=u("el-input"),s=u("el-form-item"),g=u("el-button"),f=u("el-form"),k=u("el-dialog"),r=j("loading");return _(),q("div",re,[a("div",pe,[a("div",ue,[l(h,{isPrimary:!0,text:e.$t("security.add"),class:"add-btn f-12-Light",onClick:e.openAddDialog},null,8,["text","onClick"]),l(h,{isPrimary:!0,text:e.$t("default.configProxy"),class:"proxy-btn add-btn f-12-Light",onClick:e.configProxy},null,8,["text","onClick"])])]),a("div",me,[x((_(),w(y,{data:e.uplinkData,"empty-text":e.$t("tree.noData"),"header-cell-style":e.headStyle,"header-row-style":e.headRowStyle},{default:i(()=>[l(b,{label:"Name",prop:"name","show-overflow-tooltip":""}),l(b,{label:"Description",prop:"description","show-overflow-tooltip":""}),l(b,{label:"Url",prop:"url","show-overflow-tooltip":""}),l(b,{label:e.$t("security.operate"),fixed:"right","show-overflow-tooltip":"",width:"100"},{default:i(n=>[a("span",{class:"pointer",onClick:F=>e.uplinksEditDialog(n.row)},c(e.$t("default.edit")),9,fe),a("span",{class:"pointer",onClick:F=>e.uplinksDeleteDialog(n.row)},c(e.$t("notification.delete")),9,ce)]),_:1},8,["label"])]),_:1},8,["data","empty-text","header-cell-style","header-row-style"])),[[r,e.loading]])]),a("div",ge,[l(k,{modelValue:e.addDialogVisible,"onUpdate:modelValue":o[5]||(o[5]=n=>e.addDialogVisible=n),"before-close":e.addHandleClose,"close-on-click-modal":!1,"destroy-on-close":"",width:"640px"},{header:i(()=>[a("div",be,c(e.$t("button.add")),1)]),default:i(()=>[l(f,{ref:"addFormRef",model:e.addUplinkModel,rules:e.addRules,"label-position":"top"},{default:i(()=>[l(s,{prop:"name"},{label:i(()=>[he]),default:i(()=>[l(m,{modelValue:e.addUplinkModel.name,"onUpdate:modelValue":o[0]||(o[0]=n=>e.addUplinkModel.name=n),placeholder:e.$t("default.inputName"),maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1}),l(s,{prop:"url"},{label:i(()=>[ye]),default:i(()=>[l(m,{modelValue:e.addUplinkModel.url,"onUpdate:modelValue":o[1]||(o[1]=n=>e.addUplinkModel.url=n),placeholder:e.$t("default.inputURL"),maxlength:"512"},null,8,["modelValue","placeholder"])]),_:1}),l(s,{label:e.$t("organization.description"),class:"formItem",prop:"description"},{default:i(()=>[l(m,{modelValue:e.addUplinkModel.description,"onUpdate:modelValue":o[2]||(o[2]=n=>e.addUplinkModel.description=n),modelModifiers:{trim:!0},placeholder:e.$t("organization.descriptionPlaceholder"),class:"form-input-textarea",maxlength:"512",rows:"5","show-word-limit":"",type:"textarea"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(s,null,{default:i(()=>[l(g,{class:"btnCancal",onClick:o[3]||(o[3]=n=>e.addHandleClose(e.addFormRef))},{default:i(()=>[V(c(e.$t("button.cancel")),1)]),_:1}),l(g,{class:L([e.addLoading?"btnDisable":"","btnColor"]),disabled:e.addLoading,onClick:o[4]||(o[4]=n=>e.getAddUplinks(e.addFormRef))},{default:i(()=>[V(c(e.$t("button.save")),1)]),_:1},8,["class","disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","before-close"])]),a("div",ke,[l(k,{modelValue:e.editDialogVisible,"onUpdate:modelValue":o[11]||(o[11]=n=>e.editDialogVisible=n),"before-close":e.editHandleClose,"close-on-click-modal":!1,"destroy-on-close":"",width:"640px"},{header:i(()=>[a("div",ve,c(e.$t("default.edit")),1)]),default:i(()=>[l(f,{ref:"editFormRef",model:e.editUplinkModel,rules:e.editRules,"label-position":"top"},{default:i(()=>[l(s,{prop:"name"},{label:i(()=>[a("span",null,c(e.$t("default.name")),1)]),default:i(()=>[l(m,{modelValue:e.editUplinkModel.name,"onUpdate:modelValue":o[6]||(o[6]=n=>e.editUplinkModel.name=n),placeholder:e.$t("default.inputName"),maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1}),l(s,{prop:"url"},{label:i(()=>[_e]),default:i(()=>[l(m,{modelValue:e.editUplinkModel.url,"onUpdate:modelValue":o[7]||(o[7]=n=>e.editUplinkModel.url=n),placeholder:e.$t("default.inputURL"),maxlength:"512"},null,8,["modelValue","placeholder"])]),_:1}),l(s,{label:e.$t("organization.description"),class:"formItem",prop:"description"},{default:i(()=>[l(m,{modelValue:e.editUplinkModel.description,"onUpdate:modelValue":o[8]||(o[8]=n=>e.editUplinkModel.description=n),modelModifiers:{trim:!0},placeholder:e.$t("organization.descriptionPlaceholder"),class:"form-input-textarea",maxlength:"512",rows:"5","show-word-limit":"",type:"textarea"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(s,null,{default:i(()=>[l(g,{class:"btnCancal",onClick:o[9]||(o[9]=n=>e.editHandleClose(e.editFormRef))},{default:i(()=>[V(c(e.$t("button.cancel")),1)]),_:1}),l(g,{class:L([[e.editLoading?"btnDisable":"","btnColor"],"btnColor"]),disabled:e.editLoading,onClick:o[10]||(o[10]=n=>e.saveEditUplinks(e.editFormRef))},{default:i(()=>[V(c(e.$t("button.save")),1)]),_:1},8,["class","disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","before-close"])]),a("div",Ve,[l(k,{modelValue:e.configProxyVisible,"onUpdate:modelValue":o[17]||(o[17]=n=>e.configProxyVisible=n),"before-close":e.configProxyClose,"close-on-click-modal":!1,"destroy-on-close":"",width:"640px"},{header:i(()=>[a("div",$e,c(e.$t("default.configProxy")),1)]),default:i(()=>[l(f,{ref:"configProxyFormRef",model:e.configProxyModel,rules:e.configProxyRules,"label-position":"top"},{default:i(()=>[l(s,{prop:"http_proxy"},{label:i(()=>[Me]),default:i(()=>[l(m,{modelValue:e.configProxyModel.http_proxy,"onUpdate:modelValue":o[12]||(o[12]=n=>e.configProxyModel.http_proxy=n),placeholder:e.$t("ohpm.titlePlaceholder")+"httpProxy",maxlength:"512"},null,8,["modelValue","placeholder"])]),_:1}),l(s,{prop:"https_proxy"},{label:i(()=>[Ue]),default:i(()=>[l(m,{modelValue:e.configProxyModel.https_proxy,"onUpdate:modelValue":o[13]||(o[13]=n=>e.configProxyModel.https_proxy=n),placeholder:e.$t("ohpm.titlePlaceholder")+"httpsProxy",maxlength:"512"},null,8,["modelValue","placeholder"])]),_:1}),l(s,{prop:"no_proxy"},{label:i(()=>[Pe]),default:i(()=>[l(m,{modelValue:e.configProxyModel.no_proxy,"onUpdate:modelValue":o[14]||(o[14]=n=>e.configProxyModel.no_proxy=n),modelModifiers:{trim:!0},placeholder:e.$t("ohpm.titlePlaceholder"),maxlength:"512"},null,8,["modelValue","placeholder"])]),_:1}),l(s,null,{default:i(()=>[l(g,{class:"btnCancal",onClick:o[15]||(o[15]=n=>e.configProxyClose(e.configProxyFormRef))},{default:i(()=>[V(c(e.$t("button.cancel")),1)]),_:1}),l(g,{class:L([e.proxyLoading?"btnDisable":"","btnColor"]),disabled:e.proxyLoading,onClick:o[16]||(o[16]=n=>e.saveConfigProxy(e.configProxyFormRef))},{default:i(()=>[V(c(e.$t("button.save")),1)]),_:1},8,["class","disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","before-close"])])])}const De=B(se,[["render",Ce],["__scopeId","data-v-c923cb0e"]]);const we={name:"person-info",components:{Button:W},setup(){const e=N(null),o=G(),d=E({dialogVisible:!1,editLoading:!1,editModel:{name:"",uplink:"",description:""},repoInfo:{id:"",name:"",description:"",registry:"",uplink:""},uplinksName:[]}),t=()=>{o.push({name:"warehouseDetail",query:{id:d.repoInfo.id}})},U=()=>{d.dialogVisible=!0,d.editModel.uplink=d.repoInfo.uplink,d.editModel.description=d.repoInfo.description,d.editModel.name=d.repoInfo.name},P={name:[{required:!0,message:i18n("validator.nameIsNotNull")},{required:!0,validator:K,trigger:"blur"}],description:[{required:!0,message:i18n("validator.desIsNotNull")},{required:!0,validator:S,trigger:"blur"}]},h=()=>{d.editModel.uplink="",d.editModel.description=""},b=()=>{h(),d.dialogVisible=!1},y=f=>{f.validate(k=>{k&&(d.editLoading=!0,le({id:d.repoInfo.id,uplink:d.editModel.uplink||"",description:d.editModel.description,name:d.editModel.name}).then(r=>{r.code===200?(m(),v.success(i18n("login.editSuccess"))):v.error(r.message)}).finally(()=>{b(),d.editLoading=!1}))})},m=()=>{te().then(f=>{f.code===200?d.repoInfo=f.data:v.error(f.message)})},s=()=>{Q().then(f=>{f.code===200?f.data.forEach(k=>{d.uplinksName.push({value:k.name,label:k.name})}):v.error(f.message)})},g=f=>{d.editModel.uplink=f};return T(()=>{m(),s()}),{openManageDialog:t,openEditDialog:U,...H(d),rules:P,handleClose:b,saveEdit:y,formRef:e,getReposInfo:m,getUplinksData:s,handleSelect:g}}},I=e=>(J("data-v-0677faae"),e=e(),O(),e),Ie={class:"person-info"},Re={class:"content"},Ne={class:"form_item"},Le=I(()=>a("span",{class:"title"},"Name:",-1)),qe=["title"],Fe={class:"form_item"},Se=I(()=>a("span",{class:"title"},"Description:",-1)),Be=["title"],Ee={class:"form_item"},Te=I(()=>a("span",{class:"title"},"Registry:",-1)),He=["title"],ze={class:"form_item"},Ae=["title"],We={class:"wareBtn"},Qe={class:"editRepoDialog"},je={class:"dialog-title font-M dialog-title"},xe=I(()=>a("span",null,"name",-1)),Je=I(()=>a("span",null,"uplink",-1));function Oe(e,o,d,t,U,P){const h=u("Button"),b=u("el-input"),y=u("el-form-item"),m=u("el-option"),s=u("el-select"),g=u("el-button"),f=u("el-form"),k=u("el-dialog");return _(),q("div",null,[a("div",Ie,[a("div",Re,[a("div",Ne,[Le,a("span",{title:e.repoInfo.name,class:"name"},c(e.repoInfo.name),9,qe)]),a("div",Fe,[Se,a("span",{title:e.repoInfo.description,class:"f-14-400-000 userType"},c(e.repoInfo.description),9,Be)]),a("div",Ee,[Te,a("span",{title:e.repoInfo.registry,class:"joinDate"},c(e.repoInfo.registry),9,He)]),a("div",ze,[a("span",{title:e.repoInfo.uplink,class:"title"},"Uplink:",8,Ae),a("span",null,c(e.repoInfo.uplink),1)])])]),a("div",We,[l(h,{isPrimary:!0,text:e.$t("default.edit"),class:"edit-btn f-12-Light",onClick:t.openEditDialog},null,8,["text","onClick"]),l(h,{isPrimary:!0,text:e.$t("default.thirdPartyPackage"),class:"manage-btn f-12-Light",onClick:t.openManageDialog},null,8,["text","onClick"])]),a("div",Qe,[l(k,{modelValue:e.dialogVisible,"onUpdate:modelValue":o[5]||(o[5]=r=>e.dialogVisible=r),"before-close":t.handleClose,"close-on-click-modal":!1,"destroy-on-close":"",width:"640px"},{header:i(()=>[a("div",je,c(e.$t("default.edit")),1)]),default:i(()=>[l(f,{ref:"formRef",model:e.editModel,rules:t.rules,"label-position":"top"},{default:i(()=>[l(y,{prop:"name"},{label:i(()=>[xe]),default:i(()=>[l(b,{modelValue:e.editModel.name,"onUpdate:modelValue":o[0]||(o[0]=r=>e.editModel.name=r),placeholder:e.$t("default.inputName"),maxlength:"30"},null,8,["modelValue","placeholder"])]),_:1}),l(y,{prop:"uplink"},{label:i(()=>[Je]),default:i(()=>[l(s,{modelValue:e.editModel.uplink,"onUpdate:modelValue":o[1]||(o[1]=r=>e.editModel.uplink=r),clearable:"","popper-class":"uplink-popper",onChange:t.handleSelect},{default:i(()=>[(_(!0),q(ne,null,de(e.uplinksName,r=>(_(),w(m,{key:r.value,label:r.value,value:r.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),l(y,{label:e.$t("organization.description"),class:"formItem",prop:"description"},{default:i(()=>[l(b,{modelValue:e.editModel.description,"onUpdate:modelValue":o[2]||(o[2]=r=>e.editModel.description=r),modelModifiers:{trim:!0},placeholder:e.$t("organization.descriptionPlaceholder"),class:"form-input-textarea",maxlength:"512",rows:"5","show-word-limit":"",type:"textarea"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(y,null,{default:i(()=>[l(g,{class:"btnCancal",onClick:o[3]||(o[3]=r=>t.handleClose(t.formRef))},{default:i(()=>[V(c(e.$t("button.cancel")),1)]),_:1}),l(g,{class:L([e.editLoading?"btnDisable":"","btnColor"]),disabled:e.editLoading,onClick:o[4]||(o[4]=r=>t.saveEdit(t.formRef))},{default:i(()=>[V(c(e.$t("button.save")),1)]),_:1},8,["class","disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","before-close"])])])}const Ge=B(we,[["render",Oe],["__scopeId","data-v-0677faae"]]);const Ke={components:{Uplinks:De,WarehouseInfo:Ge},setup(){const e=E({activeTab:"warehouse"}),o=G(),d=t=>{e.activeTab=t.name,o.push({name:t.name})};return T(()=>{}),{...H(e),handleClick:d}}},Xe={class:"person-tabs"},Ye={class:"tabs-head"},Ze={class:"tabs-content"};function eo(e,o,d,t,U,P){const h=u("el-tab-pane"),b=u("el-tabs"),y=u("WarehouseInfo"),m=u("Uplinks"),s=j("reset-tab-active-position");return _(),q("div",Xe,[a("div",Ye,[x((_(),w(b,{modelValue:e.activeTab,"onUpdate:modelValue":o[0]||(o[0]=g=>e.activeTab=g),class:"tabs-wrapper"},{default:i(()=>[l(h,{label:e.$t("default.warehouse"),name:"warehouse"},null,8,["label"]),l(h,{label:"uplinks",name:"uplinks"})]),_:1},8,["modelValue"])),[[s]])]),a("div",Ze,[e.activeTab==="warehouse"?(_(),w(y,{key:0})):A("",!0),e.activeTab==="uplinks"?(_(),w(m,{key:1})):A("",!0)])])}const Io=B(Ke,[["render",eo],["__scopeId","data-v-1d99d1a0"]]);export{Io as default};
