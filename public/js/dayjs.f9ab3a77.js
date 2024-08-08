import{c as I,g as P}from"./clipboard.ce371577.js";var tt={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){var w=1e3,h=6e4,d=36e5,l="millisecond",v="second",f="minute",M="hour",u="day",O="week",n="month",$="quarter",b="year",C="date",o="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var r=["th","st","nd","rd"],t=a%100;return"["+a+(r[(t-20)%10]||r[t]||r[0])+"]"}},_=function(a,r,t){var s=String(a);return!s||s.length>=r?a:""+Array(r+1-s.length).join(t)+a},H={s:_,z:function(a){var r=-a.utcOffset(),t=Math.abs(r),s=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+_(s,2,"0")+":"+_(e,2,"0")},m:function a(r,t){if(r.date()<t.date())return-a(t,r);var s=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(s,n),i=t-e<0,c=r.clone().add(s+(i?-1:1),n);return+(-(s+(t-e)/(i?e-c:c-e))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:n,y:b,w:O,d:u,D:C,h:M,m:f,s:v,ms:l,Q:$}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},k="en",S={};S[k]=g;var F="$isDayjsObject",z=function(a){return a instanceof E||!(!a||!a[F])},B=function a(r,t,s){var e;if(!r)return k;if(typeof r=="string"){var i=r.toLowerCase();S[i]&&(e=i),t&&(S[i]=t,e=i);var c=r.split("-");if(!e&&c.length>1)return a(c[0])}else{var y=r.name;S[y]=r,e=y}return!s&&e&&(k=e),e||!s&&k},x=function(a,r){if(z(a))return a.clone();var t=typeof r=="object"?r:{};return t.date=a,t.args=arguments,new E(t)},p=H;p.l=B,p.i=z,p.w=function(a,r){return x(a,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var E=function(){function a(t){this.$L=B(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[F]=!0}var r=a.prototype;return r.parse=function(t){this.$d=function(s){var e=s.date,i=s.utc;if(e===null)return new Date(NaN);if(p.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var c=e.match(m);if(c){var y=c[2]-1||0,Y=(c[7]||"0").substring(0,3);return i?new Date(Date.UTC(c[1],y,c[3]||1,c[4]||0,c[5]||0,c[6]||0,Y)):new Date(c[1],y,c[3]||1,c[4]||0,c[5]||0,c[6]||0,Y)}}return new Date(e)}(t),this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return p},r.isValid=function(){return this.$d.toString()!==o},r.isSame=function(t,s){var e=x(t);return this.startOf(s)<=e&&e<=this.endOf(s)},r.isAfter=function(t,s){return x(t)<this.startOf(s)},r.isBefore=function(t,s){return this.endOf(s)<x(t)},r.$g=function(t,s,e){return p.u(t)?this[s]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,s){var e=this,i=!!p.u(s)||s,c=p.p(t),y=function(N,A){var j=p.w(e.$u?Date.UTC(e.$y,A,N):new Date(e.$y,A,N),e);return i?j:j.endOf(u)},Y=function(N,A){return p.w(e.toDate()[N].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(A)),e)},L=this.$W,W=this.$M,Z=this.$D,Q="set"+(this.$u?"UTC":"");switch(c){case b:return i?y(1,0):y(31,11);case n:return i?y(1,W):y(0,W+1);case O:var U=this.$locale().weekStart||0,J=(L<U?L+7:L)-U;return y(i?Z-J:Z+(6-J),W);case u:case C:return Y(Q+"Hours",0);case M:return Y(Q+"Minutes",1);case f:return Y(Q+"Seconds",2);case v:return Y(Q+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,s){var e,i=p.p(t),c="set"+(this.$u?"UTC":""),y=(e={},e[u]=c+"Date",e[C]=c+"Date",e[n]=c+"Month",e[b]=c+"FullYear",e[M]=c+"Hours",e[f]=c+"Minutes",e[v]=c+"Seconds",e[l]=c+"Milliseconds",e)[i],Y=i===u?this.$D+(s-this.$W):s;if(i===n||i===b){var L=this.clone().set(C,1);L.$d[y](Y),L.init(),this.$d=L.set(C,Math.min(this.$D,L.daysInMonth())).$d}else y&&this.$d[y](Y);return this.init(),this},r.set=function(t,s){return this.clone().$set(t,s)},r.get=function(t){return this[p.p(t)]()},r.add=function(t,s){var e,i=this;t=Number(t);var c=p.p(s),y=function(W){var Z=x(i);return p.w(Z.date(Z.date()+Math.round(W*t)),i)};if(c===n)return this.set(n,this.$M+t);if(c===b)return this.set(b,this.$y+t);if(c===u)return y(1);if(c===O)return y(7);var Y=(e={},e[f]=h,e[M]=d,e[v]=w,e)[c]||1,L=this.$d.getTime()+t*Y;return p.w(L,this)},r.subtract=function(t,s){return this.add(-1*t,s)},r.format=function(t){var s=this,e=this.$locale();if(!this.isValid())return e.invalidDate||o;var i=t||"YYYY-MM-DDTHH:mm:ssZ",c=p.z(this),y=this.$H,Y=this.$m,L=this.$M,W=e.weekdays,Z=e.months,Q=e.meridiem,U=function(A,j,X,q){return A&&(A[j]||A(s,i))||X[j].slice(0,q)},J=function(A){return p.s(y%12||12,A,"0")},N=Q||function(A,j,X){var q=A<12?"AM":"PM";return X?q.toLowerCase():q};return i.replace(D,function(A,j){return j||function(X){switch(X){case"YY":return String(s.$y).slice(-2);case"YYYY":return p.s(s.$y,4,"0");case"M":return L+1;case"MM":return p.s(L+1,2,"0");case"MMM":return U(e.monthsShort,L,Z,3);case"MMMM":return U(Z,L);case"D":return s.$D;case"DD":return p.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return U(e.weekdaysMin,s.$W,W,2);case"ddd":return U(e.weekdaysShort,s.$W,W,3);case"dddd":return W[s.$W];case"H":return String(y);case"HH":return p.s(y,2,"0");case"h":return J(1);case"hh":return J(2);case"a":return N(y,Y,!0);case"A":return N(y,Y,!1);case"m":return String(Y);case"mm":return p.s(Y,2,"0");case"s":return String(s.$s);case"ss":return p.s(s.$s,2,"0");case"SSS":return p.s(s.$ms,3,"0");case"Z":return c}return null}(A)||c.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,s,e){var i,c=this,y=p.p(s),Y=x(t),L=(Y.utcOffset()-this.utcOffset())*h,W=this-Y,Z=function(){return p.m(c,Y)};switch(y){case b:i=Z()/12;break;case n:i=Z();break;case $:i=Z()/3;break;case O:i=(W-L)/6048e5;break;case u:i=(W-L)/864e5;break;case M:i=W/d;break;case f:i=W/h;break;case v:i=W/w;break;default:i=W}return e?i:p.a(i)},r.daysInMonth=function(){return this.endOf(n).$D},r.$locale=function(){return S[this.$L]},r.locale=function(t,s){if(!t)return this.$L;var e=this.clone(),i=B(t,s,!0);return i&&(e.$L=i),e},r.clone=function(){return p.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},a}(),G=E.prototype;return x.prototype=G,[["$ms",l],["$s",v],["$m",f],["$H",M],["$W",u],["$M",n],["$y",b],["$D",C]].forEach(function(a){G[a[1]]=function(r){return this.$g(r,a[0],a[1])}}),x.extend=function(a,r){return a.$i||(a(r,E,x),a.$i=!0),x},x.locale=B,x.isDayjs=z,x.unix=function(a){return x(1e3*a)},x.en=S[k],x.Ls=S,x.p={},x})})(tt);var ft=tt.exports;const gt=P(ft);var et={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){var w={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},h=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,d=/\d\d/,l=/\d\d?/,v=/\d*[^-_:/,()\s\d]+/,f={},M=function(o){return(o=+o)+(o>68?1900:2e3)},u=function(o){return function(m){this[o]=+m}},O=[/[+-]\d\d:?(\d\d)?|Z/,function(o){(this.zone||(this.zone={})).offset=function(m){if(!m||m==="Z")return 0;var D=m.match(/([+-]|\d\d)/g),g=60*D[1]+(+D[2]||0);return g===0?0:D[0]==="+"?-g:g}(o)}],n=function(o){var m=f[o];return m&&(m.indexOf?m:m.s.concat(m.f))},$=function(o,m){var D,g=f.meridiem;if(g){for(var _=1;_<=24;_+=1)if(o.indexOf(g(_,0,m))>-1){D=_>12;break}}else D=o===(m?"pm":"PM");return D},b={A:[v,function(o){this.afternoon=$(o,!1)}],a:[v,function(o){this.afternoon=$(o,!0)}],S:[/\d/,function(o){this.milliseconds=100*+o}],SS:[d,function(o){this.milliseconds=10*+o}],SSS:[/\d{3}/,function(o){this.milliseconds=+o}],s:[l,u("seconds")],ss:[l,u("seconds")],m:[l,u("minutes")],mm:[l,u("minutes")],H:[l,u("hours")],h:[l,u("hours")],HH:[l,u("hours")],hh:[l,u("hours")],D:[l,u("day")],DD:[d,u("day")],Do:[v,function(o){var m=f.ordinal,D=o.match(/\d+/);if(this.day=D[0],m)for(var g=1;g<=31;g+=1)m(g).replace(/\[|\]/g,"")===o&&(this.day=g)}],M:[l,u("month")],MM:[d,u("month")],MMM:[v,function(o){var m=n("months"),D=(n("monthsShort")||m.map(function(g){return g.slice(0,3)})).indexOf(o)+1;if(D<1)throw new Error;this.month=D%12||D}],MMMM:[v,function(o){var m=n("months").indexOf(o)+1;if(m<1)throw new Error;this.month=m%12||m}],Y:[/[+-]?\d+/,u("year")],YY:[d,function(o){this.year=M(o)}],YYYY:[/\d{4}/,u("year")],Z:O,ZZ:O};function C(o){var m,D;m=o,D=f&&f.formats;for(var g=(o=m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(B,x,p){var E=p&&p.toUpperCase();return x||D[p]||w[p]||D[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(G,a,r){return a||r.slice(1)})})).match(h),_=g.length,H=0;H<_;H+=1){var k=g[H],S=b[k],F=S&&S[0],z=S&&S[1];g[H]=z?{regex:F,parser:z}:k.replace(/^\[|\]$/g,"")}return function(B){for(var x={},p=0,E=0;p<_;p+=1){var G=g[p];if(typeof G=="string")E+=G.length;else{var a=G.regex,r=G.parser,t=B.slice(E),s=a.exec(t)[0];r.call(x,s),B=B.replace(s,"")}}return function(e){var i=e.afternoon;if(i!==void 0){var c=e.hours;i?c<12&&(e.hours+=12):c===12&&(e.hours=0),delete e.afternoon}}(x),x}}return function(o,m,D){D.p.customParseFormat=!0,o&&o.parseTwoDigitYear&&(M=o.parseTwoDigitYear);var g=m.prototype,_=g.parse;g.parse=function(H){var k=H.date,S=H.utc,F=H.args;this.$u=S;var z=F[1];if(typeof z=="string"){var B=F[2]===!0,x=F[3]===!0,p=B||x,E=F[2];x&&(E=F[2]),f=this.$locale(),!B&&E&&(f=D.Ls[E]),this.$d=function(t,s,e){try{if(["x","X"].indexOf(s)>-1)return new Date((s==="X"?1e3:1)*t);var i=C(s)(t),c=i.year,y=i.month,Y=i.day,L=i.hours,W=i.minutes,Z=i.seconds,Q=i.milliseconds,U=i.zone,J=new Date,N=Y||(c||y?1:J.getDate()),A=c||J.getFullYear(),j=0;c&&!y||(j=y>0?y-1:J.getMonth());var X=L||0,q=W||0,K=Z||0,R=Q||0;return U?new Date(Date.UTC(A,j,N,X,q,K,R+60*U.offset*1e3)):e?new Date(Date.UTC(A,j,N,X,q,K,R)):new Date(A,j,N,X,q,K,R)}catch(wt){return new Date("")}}(k,z,S),this.init(),E&&E!==!0&&(this.$L=this.locale(E).$L),p&&k!=this.format(z)&&(this.$d=new Date("")),f={}}else if(z instanceof Array)for(var G=z.length,a=1;a<=G;a+=1){F[1]=z[a-1];var r=D.apply(this,F);if(r.isValid()){this.$d=r.$d,this.$L=r.$L,this.init();break}a===G&&(this.$d=new Date(""))}else _.call(this,H)}}})})(et);var ht=et.exports;const xt=P(ht);var rt={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){return function(w,h,d){var l=h.prototype,v=function(n){return n&&(n.indexOf?n:n.s)},f=function(n,$,b,C,o){var m=n.name?n:n.$locale(),D=v(m[$]),g=v(m[b]),_=D||g.map(function(k){return k.slice(0,C)});if(!o)return _;var H=m.weekStart;return _.map(function(k,S){return _[(S+(H||0))%7]})},M=function(){return d.Ls[d.locale()]},u=function(n,$){return n.formats[$]||function(b){return b.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(C,o,m){return o||m.slice(1)})}(n.formats[$.toUpperCase()])},O=function(){var n=this;return{months:function($){return $?$.format("MMMM"):f(n,"months")},monthsShort:function($){return $?$.format("MMM"):f(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdays:function($){return $?$.format("dddd"):f(n,"weekdays")},weekdaysMin:function($){return $?$.format("dd"):f(n,"weekdaysMin","weekdays",2)},weekdaysShort:function($){return $?$.format("ddd"):f(n,"weekdaysShort","weekdays",3)},longDateFormat:function($){return u(n.$locale(),$)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};l.localeData=function(){return O.bind(this)()},d.localeData=function(){var n=M();return{firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return d.weekdays()},weekdaysShort:function(){return d.weekdaysShort()},weekdaysMin:function(){return d.weekdaysMin()},months:function(){return d.months()},monthsShort:function(){return d.monthsShort()},longDateFormat:function($){return u(n,$)},meridiem:n.meridiem,ordinal:n.ordinal}},d.months=function(){return f(M(),"months")},d.monthsShort=function(){return f(M(),"monthsShort","months",3)},d.weekdays=function(n){return f(M(),"weekdays",null,null,n)},d.weekdaysShort=function(n){return f(M(),"weekdaysShort","weekdays",3,n)},d.weekdaysMin=function(n){return f(M(),"weekdaysMin","weekdays",2,n)}}})})(rt);var dt=rt.exports;const St=P(dt);var nt={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){return function(w,h){var d=h.prototype,l=d.format;d.format=function(v){var f=this,M=this.$locale();if(!this.isValid())return l.bind(this)(v);var u=this.$utils(),O=(v||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(n){switch(n){case"Q":return Math.ceil((f.$M+1)/3);case"Do":return M.ordinal(f.$D);case"gggg":return f.weekYear();case"GGGG":return f.isoWeekYear();case"wo":return M.ordinal(f.week(),"W");case"w":case"ww":return u.s(f.week(),n==="w"?1:2,"0");case"W":case"WW":return u.s(f.isoWeek(),n==="W"?1:2,"0");case"k":case"kk":return u.s(String(f.$H===0?24:f.$H),n==="k"?1:2,"0");case"X":return Math.floor(f.$d.getTime()/1e3);case"x":return f.$d.getTime();case"z":return"["+f.offsetName()+"]";case"zzz":return"["+f.offsetName("long")+"]";default:return n}});return l.bind(this)(O)}}})})(nt);var lt=nt.exports;const kt=P(lt);var st={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){var w="week",h="year";return function(d,l,v){var f=l.prototype;f.week=function(M){if(M===void 0&&(M=null),M!==null)return this.add(7*(M-this.week()),"day");var u=this.$locale().yearStart||1;if(this.month()===11&&this.date()>25){var O=v(this).startOf(h).add(1,h).date(u),n=v(this).endOf(w);if(O.isBefore(n))return 1}var $=v(this).startOf(h).date(u).startOf(w).subtract(1,"millisecond"),b=this.diff($,w,!0);return b<0?v(this).startOf("week").week():Math.ceil(b)},f.weeks=function(M){return M===void 0&&(M=null),this.week(M)}}})})(st);var mt=st.exports;const Yt=P(mt);var at={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){return function(w,h){h.prototype.weekYear=function(){var d=this.month(),l=this.week(),v=this.year();return l===1&&d===11?v+1:d===0&&l>=52?v-1:v}}})})(at);var pt=at.exports;const Ot=P(pt);var it={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){return function(w,h,d){h.prototype.dayOfYear=function(l){var v=Math.round((d(this).startOf("day")-d(this).startOf("year"))/864e5)+1;return l==null?v:this.add(l-v,"day")}}})})(it);var $t=it.exports;const bt=P($t);var ot={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){return function(w,h){h.prototype.isSameOrAfter=function(d,l){return this.isSame(d,l)||this.isAfter(d,l)}}})})(ot);var vt=ot.exports;const Lt=P(vt);var ut={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){return function(w,h){h.prototype.isSameOrBefore=function(d,l){return this.isSame(d,l)||this.isBefore(d,l)}}})})(ut);var Mt=ut.exports;const Tt=P(Mt);var ct={exports:{}};(function(T,V){(function(w,h){T.exports=h()})(I,function(){return function(w,h,d){w=w||{};var l=h.prototype,v={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function f(u,O,n,$){return l.fromToBase(u,O,n,$)}d.en.relativeTime=v,l.fromToBase=function(u,O,n,$,b){for(var C,o,m,D=n.$locale().relativeTime||v,g=w.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],_=g.length,H=0;H<_;H+=1){var k=g[H];k.d&&(C=$?d(u).diff(n,k.d,!0):n.diff(u,k.d,!0));var S=(w.rounding||Math.round)(Math.abs(C));if(m=C>0,S<=k.r||!k.r){S<=1&&H>0&&(k=g[H-1]);var F=D[k.l];b&&(S=b(""+S)),o=typeof F=="string"?F.replace("%d",S):F(S,O,k.l,m);break}}if(O)return o;var z=m?D.future:D.past;return typeof z=="function"?z(o):z.replace("%s",o)},l.to=function(u,O){return f(u,O,this,!0)},l.from=function(u,O){return f(u,O,this)};var M=function(u){return u.$u?d.utc():d()};l.toNow=function(u){return this.to(M(this),u)},l.fromNow=function(u){return this.from(M(this),u)}}})})(ct);var yt=ct.exports;const _t=P(yt);export{kt as a,Ot as b,xt as c,gt as d,bt as e,Tt as f,Lt as i,St as l,_t as r,Yt as w};
