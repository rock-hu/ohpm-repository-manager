import{ai as N,o as l,c as r,V as _,P as L,a as t,U as c,T as K,h as O,_ as E,i as J,j as x,f as P,aq as Z,a3 as ee,S as A,Q as M,u as I,J as z,bm as H,bk as q,n as ne,F as W,a8 as F,e as se,O as V,W as $,B as oe,$ as ie}from"./@vue.405cd0f3.js";import{_ as T,d as Q,l as le,f as de,g as ce,a as re,b as pe,c as X,m as G}from"./index.83aebd5f.js";import{b as B,_ as me,a as ue}from"./icon-publisherName.ccbdcb76.js";import{u as te,a as ae}from"./vue-router.779da2c0.js";import{s as he}from"./semver.f2c06f9a.js";import{C as ge}from"./clipboard.ce371577.js";import{d as fe,e as _e,f as ve}from"./@element-plus.1b716427.js";import{i as De}from"./echarts.6acf5ccc.js";import{a as j}from"./element-plus.d9770c7f.js";import"./axios.a3888612.js";import"./vue-i18n.b3f06251.js";import"./@intlify.54dd1442.js";import"./vue.44d375da.js";import"./marked.710fa320.js";import"./xss.e4f2f0a8.js";import"./cssfilter.393cb597.js";import"./dayjs.f9ab3a77.js";import"./node-forge.4054bff5.js";import"./vuex.10212040.js";import"./highlight.js.504c3f6b.js";/* empty css                            */import"./lodash-es.2c2c875c.js";import"./@vueuse.1b628eaa.js";import"./@popperjs.c75af06c.js";import"./@ctrl.86a38320.js";import"./async-validator.bf8f818c.js";import"./memoize-one.297ddbcb.js";import"./normalize-wheel-es.54f5de6c.js";import"./@floating-ui.57eef0fc.js";import"./tslib.54e39b60.js";import"./zrender.7b053e1c.js";const ye=""+new URL("../img/warning.c582e46d.svg",import.meta.url).href,Ae=""+new URL("../img/icon_close_white.f00cb448.svg",import.meta.url).href;const be={props:{visible:Boolean,url:String},methods:{cancel(){this.$emit("cancel")},confirm(){this.$emit("confirm")}}},we={class:"jumpDailog"},Ce={class:"dialog-title lh-29 h-29 f-20-500-000 font-M"},ke={class:"dialog-title dialog-con"},Le=["href"];function Ne(e,h,a,i,o,y){const v=N("el-button"),p=N("el-dialog");return l(),r("div",we,[_(p,{"close-on-click-modal":!1,"model-value":a.visible,width:"640px","before-close":y.cancel,"modal-append-to-body":!1},{header:L(()=>[t("div",Ce,c(e.$t("head.notes")),1)]),footer:L(()=>[_(v,{onClick:y.cancel},{default:L(()=>[K(c(e.$t("button.cancel")),1)]),_:1},8,["onClick"]),t("a",{href:a.url,target:"_blank",rel:"noopener noreferrer"},[_(v,{type:"primary",onClick:y.confirm},{default:L(()=>[K(c(e.$t("button.confirm")),1)]),_:1},8,["onClick"])],8,Le)]),default:L(()=>[t("div",ke,c(e.$t("foot.tip")),1)]),_:1},8,["model-value","before-close"])])}const Y=T(be,[["render",Ne],["__scopeId","data-v-5882fd89"]]);const Me=e=>(H("data-v-569d9eda"),e=e(),q(),e),Pe={class:"left"},xe={key:0,class:"content lh-20 text-justify markdown-body"},Te={key:0,class:"hpm-warning-prompt align-items space-between"},Ie={class:"align-items"},Ve=Me(()=>t("img",{alt:"",class:"m-r-16",src:ye,style:{"vertical-align":"middle"}},null,-1)),$e=["title"],Be=["innerHTML"],Se={key:1,class:"f-16-400-808 no-information"},Ee={__name:"index",props:{name:String,readme:String,bundle:{type:Object,default:new B({})}},setup(e){const{appContext:{config:{globalProperties:h}}}=O(),a=h.$xss,i=e,o=E({imgWarn:window.localStorage.getItem("imgWarn")||"1",imgOpen:!0,visible:!1,url:""}),y={whiteList:{...a.whiteList,a:["onclick","target","title","href","style","id","name"],div:["style"]},stripIgnoreTagBody:["script"],onTagAttr(s,g,n){a.friendlyAttrValue(n)}},v=te();J(()=>{window.openPage=C});const p=x(()=>a(i.readme,y)),f=()=>{setTimeout(()=>{let s=window.location.hash.split("#")[2];if(s){const g=`a[name='${s}']`,n=document.querySelector(g);n&&n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}},100)};P(v,()=>{f()}),P(p,()=>{f()},{immediate:!0});const C=s=>{let g=h.apiUrl;s&&!s.includes(g)?(o.visible=!0,o.url=s):window.open(s)},b=s=>{if(s.target.nodeName==="IMG"&&s.target.parentNode.nodeName!=="A"){let g=window.open(s.target.src,"_blank");g.opener=null}if(s.target.nodeName==="A"&&s.target.hash){let g=s.target.hash.split("#"),n=g[g.length-1],D=window.location.hash.split("#");s.target.hash=`#${D[1]}#${n}`}},w=()=>{o.imgWarn="0",window.localStorage.setItem("imgWarn",o.imgWarn)},d=()=>{o.visible=!1},m=()=>{o.visible=!1};return P(()=>o.imgWarn,()=>{o.imgWarn=window.localStorage.getItem("imgWarn")||"1"}),P(()=>v.hash,s=>{ne(()=>{let g=s.split("#"),n=document.querySelector(`a[name='${g[g.length-1]}']`);n&&n.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})},{deep:!0}),(s,g)=>{const n=Z("highlight");return l(),r("div",{class:z([{"no-information-wrapper":!e.readme},"explore-detail-description flex"])},[t("div",Pe,[e.readme?(l(),r("div",xe,[o.imgWarn==="1"?(l(),r("div",Te,[t("div",Ie,[Ve,t("span",null,c(s.$t("notification.noImageNote")),1)]),t("img",{title:s.$t("notification.closeWarning"),alt:"",class:"float-right pointer",height:"10",src:Ae,width:"10",onClick:ee(w,["stop"])},null,8,$e)])):A("",!0),M(t("div",{class:"desCss",onClick:g[0]||(g[0]=D=>b(D)),innerHTML:p.value},null,8,Be),[[n]])])):(l(),r("div",Se,[t("span",null,c(s.$t("detail.imformation.nodata")),1)]))]),_(I(Y),{url:o.url,visible:o.visible,onCancel:d,onConfirm:m},null,8,["url","visible"])],2)}}},Re=T(Ee,[["__scopeId","data-v-569d9eda"]]);const We={class:"explore-detail-version w-100 flex"},Fe={class:"left w-100",style:{"margin-top":"10px"}},Ue=["href","onClick"],je={class:"text-overflow-ellipsis",style:{color:"black","text-decoration":"underline","text-decoration-color":"black"}},Ke={key:0,class:"text-overflow-ellipsis"},Qe={class:"text-overflow-ellipsis"},Oe={__name:"index",props:{versionList:Array,titleName:String,bundle:B},emits:["passParmas"],setup(e,{emit:h}){const a=h,i=e,o=E({lang:localStorage.getItem("lang")||"cn"}),y=x(()=>v(i.versionList,!0)),v=(f,C=!1)=>{const b=C?-1:1;return f.sort((w,d)=>b*he.compare(w.version,d.version))},p=f=>{let C={name:i.titleName,version:f.version,id:f.id};a("passParmas",C)};return(f,C)=>{const b=N("el-table-column"),w=N("el-table");return l(),r("div",We,[t("div",Fe,[_(w,{data:y.value},{default:L(()=>[_(b,{fixed:"",label:"Version","show-overflow-tooltip":"",width:"160"},{default:L(d=>[t("a",{href:`/#/${o.lang}/detail/${e.titleName.replace(/\//g,"%2F")}/v/${d.row.version}?id=${d.row.id}`,onClick:ee(m=>p(d.row),["prevent"])},[t("span",je,c(d.row.version),1)],8,Ue)]),_:1}),_(b,{label:"Tag","show-overflow-tooltip":""},{default:L(d=>[Array.isArray(d.row.tags)?(l(),r("span",Ke,c(d.row.tags.join(",")),1)):A("",!0)]),_:1}),_(b,{align:"right",label:"Downloads (Last 7 Days)","show-overflow-tooltip":"",width:"190"},{default:L(d=>[t("span",Qe,c(d.row.weeklyDownloadNum),1)]),_:1}),_(b,{align:"right",label:"Published",width:"170"},{default:L(d=>[t("span",null,c(I(Q)(d.row.publishTime)),1)]),_:1})]),_:1},8,["data"])])])}}},Ze=T(Oe,[["__scopeId","data-v-1a01dd14"]]);const ze={class:"left"},He={key:0,class:"content lh-20 text-justify markdown-body"},qe=["innerHTML"],Ye={key:1,class:"f-16-400-808 no-information"},Xe={__name:"index",props:{readme:String},setup(e){const h=e,a=te(),{appContext:{config:{globalProperties:i}}}=O(),o=i.$xss,y=E({visible:!1,url:""}),v={whiteList:{...o.whiteList,a:["onclick","target","title","href","style","id","name"],div:["style"]},stripIgnoreTagBody:["script"],onTagAttr(m,s,g){o.friendlyAttrValue(g)}},p=x(()=>o(h.readme,v)),f=()=>{setTimeout(()=>{let m=window.location.hash.split("#")[2];if(m){const s=`a[name='${m}']`,g=document.querySelector(s);g&&g.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})}},100)};P(a,()=>{f()}),P(p,()=>{f()},{immediate:!0});const C=m=>{if(!m.includes("http"))return;let s=i.apiUrl;m&&!m.includes(s)?(y.visible=!0,y.url=m):window.open(m)},b=m=>{if(m.target.nodeName==="IMG"&&m.target.parentNode.nodeName!=="A"){let s=window.open(m.target.src,"_blank");s.opener=null}if(m.target.nodeName==="A"&&m.target.hash){let s=m.target.hash.split("#"),g=s[s.length-1],n=window.location.hash.split("#");m.target.hash=`#${n[1]}#${g}`}},w=()=>{y.visible=!1},d=()=>{y.visible=!1};return J(()=>{window.openChangePage=C}),(m,s)=>{const g=Z("highlight");return l(),r("div",{class:z([{"no-information-wrapper":!e.readme},"explore-detail-description flex"])},[t("div",ze,[e.readme?(l(),r("div",He,[M(t("div",{onClick:s[0]||(s[0]=n=>b(n)),innerHTML:p.value},null,8,qe),[[g]])])):(l(),r("div",Ye,[t("span",null,c(m.$t("detail.nodata")),1)]))]),_(I(Y),{url:y.url,visible:y.visible,onCancel:w,onConfirm:d},null,8,["url","visible"])],2)}}},Ge=T(Xe,[["__scopeId","data-v-fcc5c502"]]);const Je={props:{applicationList:Array,dependencedListCount:Number,appDevDependenciesData:Array,devDependenciesListCount:Number,appDynamicDependenciesData:Array,dynamicDependenciesListCount:Number,depend:{type:Boolean,default:!1},dependencyPageNum:Number,devDependencyPageNum:Number,dynamicDependencyPageNum:Number},setup(e,h){const a=ae(),i=x(()=>e.applicationList),o=x(()=>e.appDevDependenciesData),y=x(()=>e.appDynamicDependenciesData);return{dataList:i,showMore:()=>{const b={depType:e.depend?"dependents":"dependencies",pageNum:e.dependencyPageNum};h.emit("showMore",b)},handleClick:b=>{b.id?a.push({name:"latestDetail",params:{name:b.name},query:{id:b.id}}):a.push("/404")},showMoreDev:()=>{h.emit("showMoreDev",{depType:"devDependencies",pageNum:e.devDependencyPageNum})},dataListDev:o,showMoreDynamic:()=>{h.emit("showMoreDynamic",{depType:"dynamicDependencies",pageNum:e.dynamicDependencyPageNum})},dataListDynamic:y}}},en={class:"container"},nn={key:0},tn={key:0,class:"dependencies"},an={key:1,class:"dependencies content"},sn=["onClick"],on={key:3,class:"dependencies"},ln={key:4,class:"dependencies content"},dn=["onClick"],cn={key:6,class:"dependencies"},rn={key:7,class:"dependencies content"},pn=["onClick"],mn={key:1,class:"noData"};function un(e,h,a,i,o,y){const v=N("el-tooltip");return l(),r("div",en,[a.dependencedListCount||a.devDependenciesListCount||a.dynamicDependenciesListCount?(l(),r("div",nn,[a.dependencedListCount>0?(l(),r("div",tn,c(a.depend?"Dependents":"Dependencies")+" ("+c(a.dependencedListCount)+") ",1)):A("",!0),a.dependencedListCount>0?(l(),r("div",an,[(l(!0),r(W,null,F(i.dataList,(p,f)=>(l(),r("div",{key:f,class:"ellipsis content-name",onClick:C=>i.handleClick(p)},[_(v,{content:p.name,disabled:p.name.length<20,class:"item",effect:"dark",placement:"top-start"},{default:L(()=>[t("span",null,c(p.name),1)]),_:2},1032,["content","disabled"])],8,sn))),128))])):A("",!0),a.dependencedListCount&&a.dependencedListCount>i.dataList.length?(l(),r("div",{key:2,class:"showMore",onClick:h[0]||(h[0]=(...p)=>i.showMore&&i.showMore(...p))}," and more... ")):A("",!0),a.devDependenciesListCount&&a.devDependenciesListCount>0?(l(),r("div",on,c("DevDependencies")+" ("+c(a.devDependenciesListCount)+") ",1)):A("",!0),a.devDependenciesListCount>0?(l(),r("div",ln,[(l(!0),r(W,null,F(i.dataListDev,(p,f)=>(l(),r("div",{key:f,class:"ellipsis content-name",onClick:C=>i.handleClick(p)},[_(v,{content:p.name,class:"item",effect:"dark",placement:"top-start"},{default:L(()=>[t("span",null,c(p.name),1)]),_:2},1032,["content"])],8,dn))),128))])):A("",!0),a.devDependenciesListCount&&i.dataListDev&&a.devDependenciesListCount>i.dataListDev.length?(l(),r("div",{key:5,class:"showMore",onClick:h[1]||(h[1]=(...p)=>i.showMoreDev&&i.showMoreDev(...p))},"and more... ")):A("",!0),a.dynamicDependenciesListCount&&a.dynamicDependenciesListCount>0?(l(),r("div",cn,c("DynamicDependencies")+" ("+c(a.dynamicDependenciesListCount)+") ",1)):A("",!0),a.dynamicDependenciesListCount>0?(l(),r("div",rn,[(l(!0),r(W,null,F(i.dataListDynamic,(p,f)=>(l(),r("div",{key:f,class:"ellipsis content-name",onClick:C=>i.handleClick(p)},[_(v,{content:p.name,class:"item",effect:"dark",placement:"top-start"},{default:L(()=>[t("span",null,c(p.name),1)]),_:2},1032,["content"])],8,pn))),128))])):A("",!0),a.dynamicDependenciesListCount&&i.dataListDynamic&&a.dynamicDependenciesListCount>i.dataListDynamic.length?(l(),r("div",{key:8,class:"showMore",onClick:h[2]||(h[2]=(...p)=>i.showMoreDynamic&&i.showMoreDynamic(...p))},"and more... ")):A("",!0)])):(l(),r("div",mn,[t("span",null,c(e.$t("tree.noData")),1)]))])}const hn=T(Je,[["render",un],["__scopeId","data-v-ce347033"]]),gn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHAAAAACwgWRlAAAESklEQVRIDe2WXYiUZRTH52M/hLFZIykK16LQ1V3Em6WUIt1daGPdzxFBU2wMWqibogvpLuyiokAR9KYItwxLjNnPWVkoNheVEBIU/EDQ1QsxFXGobded2Z3p93983uF5Z8YpAuumB86cc/7n63nP+zznnWCANTAwsCqbzX6KuEh6MBgMw5ZCv0OPQVdzudws3F2V+C0FnwO85hokY1uA7Sn4FGoUuoKeRc/Av6yQE8KHsFcla6HfFwKBJ6zwqAe43PF70sUlezb449a22MHXhKxy0hr/LXbKFI7FYp9VVlaurKioWBsOh9+21X+VTmvOSIfvku4R+qC3S+SPPdzG7LMxP5FvHbLaHQiFQpvxbayrq2s2hQV2dHRc7Ozs/Hl+fn6NdBy+kE6r9ktnvSjdI+y37sOmrZMeLg7eLBs+u7u6uiYo+K10cq3u6en5paGhIZ0vLMPg4OAjOG+EcnSgTxjyEdg9gppHR0eXCCu3OKgv4FtP3M2ampqj8uXgfm1jtmEzNX2FedpNGCI4TbS3t1+RMztMkWQIMZROp7cK+4sVl508B5uamnTileMETKe6dnh4eL0wX2EK7BCIwwFxb9Eqs2Pw7R5Wio+Pj+sKbZaNmHwO8uagg8Ln5uZeN3b9aLGTZQS9hDgViUS+N6D9iUajY4i3sNfzOhpdmyunUqkefBZR5FR3d/d514ZsCsNjY2NjkfwTZzKZuHU80tra+oeVDVPLSHZICu/rgU9NUdMx3Prk6y7afZkcx8EWTk9Px0xhAsRNQrdFbiDyV1bfYv19Zg5VLUALdA8yp9jngEKceWVsYGtQxmQyuZyDcwFDGtAcqsIgqz8NX8CJX867ep+nf9PivcTpUO6GUtANi/uY3fBz+Ga8kXnbgjoc9T7v0srdQphOneNW6EE0XkXl1jXTaq7OXXYxKU8mzTaSNBSScNnlJ3/J7qLoaavPaHoVxlv9E+tz2jyxFBIe5mnVvnerq6tb2trafrNOAQZHdHZ21rxj+Xm4yxm7d/r7+38kRwuv4S0O0xv4zns+IyMjz3KAzavB53C+MFNmF9chBthIkTMk2csuL7KRFejvgD9Dokvy85IVct59L8nP4rudw7YskUgcIMd19OfB34NrMibYVMK0Wgm4MjqNrdCEikB7aN9RcenCZbd+iMVL047Er0CXiVmLx+dsPIn8AaSifWwkrsj8E0thJ1dxaGK3r8E3AOl7fJOAJAPhEDwrv3ILv5MMiNUzMzO95HgZihI3CX2H7Qcv1ldYoE3+DaLoHy07gPYQLCq58q0uaX2I4P+FH2Jz/an/s1ZrtpZdXIfw0NDQBu60b/5y+uPY1ttgffSPeYmwTTH9Rph+hf/FPRf/Pc6jjsCd/ogCOx3IiGAutANFZJZsdsTGLVTE/k6ri/6sF2UpDZSNKxoghTmqqqp28q2+A+5rtfx4slpGoP6B3nbj0KeY2/o2P3D9CVn6AitaiIdVAAAAAElFTkSuQmCC",fn=""+new URL("../img/download.8a2c77f4.svg",import.meta.url).href;const U=e=>(H("data-v-a017948c"),e=e(),q(),e),_n={class:"explore-detail-install"},vn={class:"publish-license-content"},Dn={class:"ellipsis mx-w-120 publish font-M"},yn={class:"publishName"},An=U(()=>t("img",{alt:"",src:me,style:{width:"16px",height:"16px"}},null,-1)),bn=["title"],wn={key:0,class:"ellipsis mx-w-120 publish font-M"},Cn={key:1,class:"publishName"},kn=U(()=>t("img",{alt:"",src:ue,style:{width:"16px",height:"16px"}},null,-1)),Ln=["title"],Nn={class:"licence font-M"},Mn={class:"licenceName"},Pn=U(()=>t("img",{alt:"",src:gn,style:{width:"16px",height:"16px"}},null,-1)),xn=["title"],Tn={key:2,class:"weeklyDownloads"},In=U(()=>t("img",{alt:"",src:fn,style:{width:"13px",height:"13px","margin-right":"8px"}},null,-1)),Vn={class:"font-M",style:{height:"19px","line-height":"19px",display:"inline-block"}},$n={key:3,class:"weeklyDownloadsChart",style:{display:"flex","flex-direction":"row"}},Bn={style:{width:"140px","font-size":"1.25rem","padding-bottom":".3rem","padding-right":".5rem","font-weight":"600"}},Sn={key:4,style:{"border-bottom":"1px solid rgba(0, 0, 0, .1)","padding-bottom":"24px"}},En={key:0,class:"install-download-file"},Rn={class:"install font-M"},Wn=["title"],Fn={class:"install-text font-L"},Un={class:"homepage font-M"},jn={class:"homepageUrl font-M"},Kn=["title","textContent"],Qn={class:"repository font-M"},On={class:"repositoryUrl font-M"},Zn=["title","textContent"],zn={__name:"index",props:{bundle:{type:B,default:()=>new B({})}},setup(e){const h=e,{appContext:{config:{globalProperties:a}}}=O(),i=se(null),o=E({isCopied:!1,isCopiedHomePage:!1,isCopiedRepository:!1,count:0,loading:!1,dialogVisible:!1,hoverHomePageFlag:!1,hoverRepositoryFlag:!1,homePagePaddingBottom:"0px",repositoryPaddingBottom:"0px",homePage:"",visible:!1,url:"",weeklyDownloads:0,weeklyDownloadsTimeStr:"",lastDownloadValue:0,chartOffsetValue:0});P(()=>h.bundle.latestAnnualWeekDownload,()=>{h.bundle.latestAnnualWeekDownload&&setTimeout(()=>{o.lastDownloadValue=h.bundle.latestAnnualWeekDownload[h.bundle.latestAnnualWeekDownload.length-1].downloadNum,o.weeklyDownloads=o.lastDownloadValue,De(i.value,null,{width:"150px",height:"70px"}).setOption(w(h.bundle.latestAnnualWeekDownload))},100)});const y=()=>{o.weeklyDownloads=o.lastDownloadValue,o.weeklyDownloadsTimeStr=""},v=d=>{let m=a.apiUrl;d&&!d.includes(m)?(o.visible=!0,o.url=d):window.open(d)},p=()=>{o.visible=!1},f=()=>{o.visible=!1},C=(d,m)=>{const s=new ge(d.currentTarget,{text:()=>m.title});s.on("success",()=>{b("isCopied"),s.destroy()}),s.onClick(d)},b=d=>{o[d]=!0,setTimeout(()=>{o[d]=!1},3e3)},w=d=>{let m=Math.max(...d.map(s=>s.downloadNum));return o.chartOffsetValue=Math.floor(m*.1),{grid:{left:3,right:3,top:0,bottom:0,containLabel:!0},tooltip:{trigger:"axis",formatter:s=>{o.weeklyDownloads=s[0].data.value-o.chartOffsetValue;const g=h.bundle.latestAnnualWeekDownload[s[0].dataIndex],n=Q(g.startTime,"YYYY-MM-DD"),D=Q(g.endTime,"YYYY-MM-DD");o.weeklyDownloadsTimeStr=`${n} - ${D}`}},xAxis:{type:"category",boundaryGap:!1,axisLine:{show:!1},axisLabel:{show:!1,margin:50},axisTick:{show:!1},splitLine:{show:!1},axisPointer:{label:{show:!1},type:"line",lineStyle:{color:"#8956FF",width:2,type:"solid"}}},yAxis:{type:"value",axisLabel:{show:!1},splitLine:{show:!1},axisPointer:{show:!1}},series:[{animation:!1,type:"line",symbol:"circle",symbolSize:6,data:d.map(s=>({value:s.downloadNum+o.chartOffsetValue})),areaStyle:{color:"#E7DDFF",origin:"start"},emphasis:{disabled:!0},itemStyle:{color:"#8956FF"}}]}};return(d,m)=>{const s=N("el-icon"),g=N("el-button");return l(),r("div",_n,[t("div",vn,[t("div",Dn,c(d.$t("search.contributor")),1),t("div",yn,[An,t("span",{title:e.bundle.authorName,class:"ellipsis font-L"},c(e.bundle.authorName),9,bn)]),e.bundle.publisherName?(l(),r("div",wn,c(d.$t("search.publisher")),1)):A("",!0),e.bundle.publisherName?(l(),r("div",Cn,[kn,t("span",{title:e.bundle.publisherName,class:"ellipsis font-L"},c(e.bundle.publisherName),9,Ln)])):A("",!0),t("div",Nn,c(d.$t("search.licenseAgreement")),1),t("div",Mn,[Pn,t("span",{title:e.bundle.license,class:"ellipsis font-L"},c(e.bundle.license),9,xn)]),h.bundle.latestAnnualWeekDownload?(l(),r("div",Tn,[In,t("span",Vn,c(o.weeklyDownloadsTimeStr===""?d.$t("search.weeklyDownloads"):o.weeklyDownloadsTimeStr),1)])):A("",!0),h.bundle.latestAnnualWeekDownload?(l(),r("div",$n,[t("p",Bn,c(o.weeklyDownloads),1),t("div",{ref_key:"downloadChart",ref:i,onMouseout:y},null,544)])):A("",!0),h.bundle.latestAnnualWeekDownload?A("",!0):(l(),r("div",Sn))]),e.bundle.isDetailInfo?(l(),r("div",En,[t("div",Rn,c(d.$t("detail.installing")),1),e.bundle.title?(l(),V(g,{key:0,class:"button-install",plain:"",size:"small",type:"primary",onClick:m[0]||(m[0]=n=>C(n,e.bundle))},{default:L(()=>[M(t("div",null,[_(s,{class:"el-icon-arrow-right"},{default:L(()=>[_(I(fe))]),_:1}),t("span",{title:e.bundle.title,class:"install-text font-L"},c(e.bundle.title),9,Wn),_(s,{class:"el-icon-document-copy"},{default:L(()=>[_(I(_e))]),_:1})],512),[[$,!o.isCopied]]),M(t("div",null,[t("span",Fn,c(d.$t("search.copied")),1),_(s,{class:"el-icon-check ml-1"},{default:L(()=>[_(I(ve))]),_:1})],512),[[$,o.isCopied]])]),_:1})):A("",!0)])):A("",!0),t("div",Un,c(d.$t("search.homePage")),1),t("div",jn,[t("a",{title:e.bundle.homepage,class:"f-14-500-333 w-100 homePageWidth ellipsis",rel:"noopener noreferrer",style:{color:"#0A59F7"},target:"_blank",onClick:m[1]||(m[1]=n=>v(e.bundle.homepage)),textContent:c(e.bundle.homepage)},null,8,Kn)]),t("div",Qn,c(d.$t("search.repository")),1),t("div",On,[t("a",{title:e.bundle.repository,class:"f-14-500-333 repositoryWidth ellipsis",rel:"noopener noreferrer",style:{color:"#0A59F7"},target:"_blank",onClick:m[2]||(m[2]=n=>v(e.bundle.repository)),textContent:c(e.bundle.repository)},null,8,Zn)]),_(I(Y),{url:o.url,visible:o.visible,onCancel:p,onConfirm:f},null,8,["url","visible"])])}}},Hn=T(zn,[["__scopeId","data-v-a017948c"]]),qn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAIAAAAAAAbKElAAACx0lEQVRIDb2Xu4sTURSHN8lkBInKFgqudWKR/AeChRhs8lZWthQLEVSwEGQXbdRFkK2i+AI7WdYmCaaIBCxEG1uTYjeF20TwwS5iUJi8/E6Su0zCMDNhk1yYnHPu4/fNvXPvmcnc3IyLR/HK5fKRRqNxjjji8Xj8qn4/ttvtNhlfCQQC76LR6G/R6gELhcKpdru9QXxCKqdQ6j6f72IymfzkKRaL84ZhVIEcnwJoT5JV++b3+yNas9mMmWA/aHjOUvzd67kPB62DaF1B4hh2QVgaQURp0iGbTqfvq3gSNpfLGcDuDbQiXhzdJNww+ZNyzZq6AGdaZEkdSz6fv9TpdLRMJvNytHO1WtVrtdoN6jdTqdTb0fbR2HGGHJnTwF4x8AXgm6MCW1tbWdofceVKpZLjTncEAvjOZuoKiId/R46RgnIzJ6m7PIj/sQt7h1u1W1lHIId1k4HrMhjxeURXlBDJQna0T2Juai0ejzseJ1fPEL0VBM8DPIB/ja3+mMxxtNVqXRAY5afX613ru/a/jjOU4ZzNbWBZ8QfQVWAPJZbCzTxgJf70I/tfV0CR0HV9FbMjPtAlzBnxgW2HQqGn4rsproGxWGyXZbPKQnfD4bDhBiZ9XAOlczAYfMKMvoovBf8LZ+91P3L3OxZQZsIsl5U0S7sMtKNiN3YsoAgmEokNIJ+5PpJ5im4g5j5jAwF1meUtrttmIbe+23M4pMcR+DBUMUbgCBwk57NoHrLTZeY7LPd7bNuunyOQ5LzO5sjYiag2cusz/KsqtrJunuFhq4FWdbwxbFdBxjjOUNO0JRK25ExbMTbRLtnojdWNmOscgbwBfjFAlmoiRZbUnJYCE1EdFjFrGjLDimpnc1zn1aNjHd9raoydZceqz0TVrdL7EOYZVYAsqNppWOC9D2Hv4C2wCKQ+DdBAs86mWhTWzP/MTHFS1tL/AcnkBR1ZmA0vAAAAAElFTkSuQmCC";const Yn={name:"BasiceMessage",props:{bundle:B},setup(e){const h=x(()=>e.bundle.name),a=x(()=>e.bundle.version);return{bundleName:h,longTime:le,version:a,formatNumber:de}}},Xn=e=>(H("data-v-b328a294"),e=e(),q(),e),Gn={class:"center-wrapper flex"},Jn={class:"content"},et={class:"title f-32-700-000 font-M"},nt=["title"],tt={class:"message lh-18 h-18 flex",style:{"margin-top":"18px"}},at={class:"f-14-500-808 publish-time"},st=Xn(()=>t("img",{alt:"",src:qn,style:{"vertical-align":"middle",width:"16px",height:"16px"}},null,-1)),ot={class:"f-14-500-808 m-l-8"},it={class:"f-14-500-808 m-l-8"},lt={class:"f-14-500-808"},dt={class:"keywords"},ct={key:0,class:"keywordsDesc font-M"},rt={key:1,class:"keywordsLine font-M"};function pt(e,h,a,i,o,y){const v=N("el-button"),p=N("el-row");return l(),r("div",null,[t("div",Gn,[t("div",Jn,[t("div",et,[t("span",{title:`${i.bundleName}(V${a.bundle.isDetailInfo?i.version:"--"})`,class:"packageName ellipsis"},c(i.bundleName)+"("+c(`V${a.bundle.isDetailInfo?i.version:"--"}`)+") ",9,nt)]),t("div",tt,[t("div",at,[st,t("span",ot,c(e.$t("detail.published")),1),t("span",it,c(a.bundle.isDetailInfo?i.longTime(a.bundle.publishTime):"--"),1),M(t("span",lt,"天前",512),[[$,!a.bundle.isDetailInfo]])])]),a.bundle.keywords&&a.bundle.keywords.length>0?(l(),V(p,{key:0,class:"m-t-8 m-b-24",style:{"margin-top":"17px"}},{default:L(()=>[t("div",dt,[a.bundle.keywords&&a.bundle.keywords.length>0?(l(),r("span",ct,"KEYWORDS")):A("",!0),a.bundle.keywords&&a.bundle.keywords.length>0?(l(),r("span",rt,"|")):A("",!0),(l(!0),r(W,null,F(a.bundle.keywords,(f,C)=>(l(),V(v,{key:C,title:f,class:"font-M",size:"default"},{default:L(()=>[K(c(f),1)]),_:2},1032,["title"]))),128))])]),_:1})):A("",!0)])])])}const mt=T(Yn,[["render",pt],["__scopeId","data-v-b328a294"]]);const ut={components:{ExploreDetailDescription:Re,ExploreDetailVersion:Ze,VersionChanges:Ge,Dependence:hn,BundleInstall:Hn,BasicMessage:mt},setup(){const e=E({keyWord:"",dependencedListCount:0,dependentsCount:0,dependentsPageNum:0,appDependentsData:[],devDependenciesListCount:0,dynamicDependenciesListCount:0,readmeData:"",applicationData:[],appDevDependenciesData:[],appDynamicDependenciesData:[],versionChangesData:"",bundle:new B,detailActiveName:"describe",params:{name:"",version:"",id:""},newDependencedList:[],newDependencedListLength:0,properties:{},changeLogs:"",dependencyPageNum:0,devDependencyPageNum:0,dynamicDependencyPageNum:0}),h=oe("loginUser").loginUser,a=ae();P(()=>a.currentRoute.value,n=>{e.params.name=n.params.name,e.params.version=n.params.version,e.params.id=n.query.id,ne(()=>{e.params.id&&d(e.params.id)})},{immediate:!0});const i=n=>{e.detailActiveName=n.paneName},o=n=>{e.params=n,e.detailActiveName="describe",a.push({name:"detail",params:{name:n.name,version:n.version},query:{id:n.id}})},y=(n,D)=>{if(D==="dependencies"){e.dependencedListCount=n.dependencies.total,e.devDependenciesListCount=n.devDependencies.total,e.dynamicDependenciesListCount=n.dynamicDependencies.total,e.dependencyPageNum=n.dependencies.pageNum,e.devDependencyPageNum=n.devDependencies.pageNum,e.dynamicDependencyPageNum=n.dynamicDependencies.pageNum;const u=w(n.dependencies.data),k=w(n.devDependencies.data),S=w(n.dynamicDependencies.data);e.applicationData=u,e.appDevDependenciesData=k,e.appDynamicDependenciesData=S}},v=async n=>{if(n.depType==="dependents"){const u={id:e.params.id,pageNum:n.pageNum+1,pageSize:50},k=await ce(u);k.code===200?p(k.data,n.depType):j.error(k.message);return}const D={id:e.params.id,depType:n.depType,pageNum:n.pageNum+1,pageSize:50};re(D).then(u=>{u.code===200?p(u.data,n.depType):j.error(u.message)})},p=(n,D)=>{if(D==="dependencies"){e.dependencyPageNum=n.pageNum;const u=w(n.data);e.applicationData=e.applicationData.concat(u)}else if(D==="devDependencies"){e.devDependencyPageNum=n.pageNum;const u=w(n.data);e.appDevDependenciesData=e.appDevDependenciesData.concat(u)}else if(D==="dynamicDependencies"){e.dynamicDependencyPageNum=n.pageNum;const u=w(n.data);e.appDynamicDependenciesData=e.appDynamicDependenciesData.concat(u)}else if(D==="dependents"){e.dependentsPageNum=n.pageNum;const u=w(n.data);e.appDependentsData=e.appDependentsData.concat(u)}},f=n=>{v(n)},C=n=>{v(n)},b=n=>{v(n)},w=n=>{const D=[];if(n&&n.length>0)n.forEach(u=>{D.push(u)});else return;return D.sort()},d=n=>{pe({id:n}).then(u=>{if(u.code===200){if(u.data.data&&u.data.data.length===0){a.replace({name:"404"});return}e.bundle.fromJson(u.data);for(let k=0;k<u.data.versions.length;k++){const S=u.data.versions[k].version;for(let R=0;R<u.data.latestWeekDownload.length;R++)if(S===u.data.latestWeekDownload[R].version){u.data.versions[k].weeklyDownloadNum=u.data.latestWeekDownload[R].downloadNum;break}}e.bundle.versions=u.data.versions.sort((k,S)=>S.publishTime-k.publishTime),e.params.version=e.bundle.latestVersion,m(),y(u.data,"dependencies"),e.dependentsCount=u.data.dependents.total,e.dependentsPageNum=u.data.dependents.pageNum,e.appDependentsData=w(u.data.dependents.data)}else j.error(u.message)})},m=()=>{s(),g()},s=()=>{const n=e.bundle.readmeUrl;n?X(n).then(D=>{if(D){const u=new Blob([D],{type:"text/plain"}),k=new FileReader;k.addEventListener("loadend",()=>{e.readmeData=G(k.result,!0)}),k.readAsText(u)}else e.readmeData=""}):e.readmeData=""},g=()=>{const n=e.bundle.changelogUrl;n?X(n).then(D=>{if(D){const u=new Blob([D],{type:"text/plain"}),k=new FileReader;k.addEventListener("loadend",()=>{e.versionChangesData=G(k.result,!0,"change")}),k.readAsText(u)}else e.versionChangesData=""}):e.versionChangesData=""};return{...ie(e),handleClick:i,versionParmas:o,loginUser:h,showMoreDev:f,showMore:b,showMoreDynamic:C}}},ht={class:"detail-wrapper flex justify-center"},gt={class:"w-100"},ft={ref:"tabLeft",class:"tabs float-left left"},_t={class:"tabs-head"},vt={ref:"tabRight",class:"right mobileShow"},Dt={class:"tabs-content"},yt={class:"left"},At={class:"p-relative second-wrapper"},bt={ref:"tabRight",class:"right float-right"};function wt(e,h,a,i,o,y){const v=N("BasicMessage"),p=N("BundleInstall"),f=N("el-tab-pane"),C=N("el-tabs"),b=N("ExploreDetailDescription"),w=N("Dependence"),d=N("ExploreDetailVersion"),m=N("VersionChanges"),s=Z("reset-tab-active-position");return l(),r("div",{class:z([i.loginUser.isExisted()?"hasLogin":"notLogin","explore-detail"])},[t("div",ht,[t("div",gt,[t("div",ft,[t("div",_t,[_(v,{bundle:e.bundle},null,8,["bundle"]),t("div",vt,[_(p,{bundle:e.bundle},null,8,["bundle"])],512),M((l(),V(C,{modelValue:e.detailActiveName,"onUpdate:modelValue":h[0]||(h[0]=g=>e.detailActiveName=g),class:"tabs-wrapper",onTabClick:i.handleClick},{default:L(()=>[_(f,{label:e.$t("detail.describe"),name:"describe"},null,8,["label"]),_(f,{label:`${e.$t("detail.dependenced")}(${e.dependencedListCount+e.devDependenciesListCount+e.dynamicDependenciesListCount})`,name:"dependenced"},null,8,["label"]),_(f,{label:`${e.$t("detail.dependents")}(${e.dependentsCount})`,name:"dependents"},null,8,["label"]),_(f,{label:`${e.$t("detail.versions")}(${e.bundle.versions.length})`,name:"version"},null,8,["label"]),_(f,{label:e.$t("detail.changes"),name:"change"},null,8,["label"])]),_:1},8,["modelValue","onTabClick"])),[[s]])]),t("div",Dt,[t("div",yt,[e.detailActiveName==="describe"?(l(),V(b,{key:0,bundle:e.bundle,name:e.bundle.name,readme:e.readmeData},null,8,["bundle","name","readme"])):A("",!0),M(t("div",At,[_(w,{appDevDependenciesData:e.appDevDependenciesData,appDynamicDependenciesData:e.appDynamicDependenciesData,applicationList:e.applicationData,dependencedListCount:e.dependencedListCount,dependencyPageNum:e.dependencyPageNum,devDependenciesListCount:e.devDependenciesListCount,devDependencyPageNum:e.devDependencyPageNum,dynamicDependenciesListCount:e.dynamicDependenciesListCount,dynamicDependencyPageNum:e.dynamicDependencyPageNum,onShowMore:i.showMore,onShowMoreDev:i.showMoreDev,onShowMoreDynamic:i.showMoreDynamic},null,8,["appDevDependenciesData","appDynamicDependenciesData","applicationList","dependencedListCount","dependencyPageNum","devDependenciesListCount","devDependencyPageNum","dynamicDependenciesListCount","dynamicDependencyPageNum","onShowMore","onShowMoreDev","onShowMoreDynamic"])],512),[[$,e.detailActiveName==="dependenced"]]),M(_(w,{applicationList:e.appDependentsData,depend:!0,dependencedListCount:e.dependentsCount,dependencyPageNum:e.dependentsPageNum,onShowMore:i.showMore},null,8,["applicationList","dependencedListCount","dependencyPageNum","onShowMore"]),[[$,e.detailActiveName==="dependents"]]),M(_(d,{bundle:e.bundle,readme:e.readmeData,"title-name":e.bundle.name,"version-list":e.bundle.versions,onPassParmas:i.versionParmas},null,8,["bundle","readme","title-name","version-list","onPassParmas"]),[[$,e.detailActiveName==="version"]]),e.detailActiveName==="change"?(l(),V(m,{key:1,readme:e.versionChangesData},null,8,["readme"])):A("",!0)])])],512),t("div",bt,[_(p,{bundle:e.bundle},null,8,["bundle"])],512)])])],2)}const na=T(ut,[["render",wt],["__scopeId","data-v-5081f622"]]);export{na as default};
