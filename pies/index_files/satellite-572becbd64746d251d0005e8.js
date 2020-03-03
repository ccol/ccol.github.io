/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*

/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

 Adobe Visitor API for JavaScript version: 2.1.0
 Copyright 1996-2015 Adobe, Inc. All Rights Reserved
 More info available at http://www.omniture.com
*/
function Visitor(q,w){function x(d){return function(b){b=b||s.location.href;try{var c=a.Xa(b,d);if(c)return m.Hb(c)}catch(e){}}}function B(a){function b(a,d,b){b=b?b+="|":b;return b+(a+"="+encodeURIComponent(d))}for(var c="",e=0,f=a.length;e<f;e++){var g=a[e],h=g[0],g=g[1];g!=j&&g!==u&&(c=b(h,g,c))}return function(a){var d=m.Da(),a=a?a+="|":a;return a+("TS="+d)}(c)}if(!q)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="2.1.0";var s=window,l=Visitor;l.version=a.version;
s.s_c_in||(s.s_c_il=[],s.s_c_in=0);a._c="Visitor";a._il=s.s_c_il;a._in=s.s_c_in;a._il[a._in]=a;s.s_c_in++;a.na={La:[]};var v=s.document,j=l.Pb;j||(j=null);var F=l.Qb;F||(F=void 0);var i=l.Va;i||(i=!0);var k=l.Sa;k||(k=!1);var n={r:!!s.postMessage,Ra:1,ea:864E5,ba:"adobe_mc",ca:"adobe_mc_sdid",w:/^[0-9a-fA-F\-]+$/,Qa:5,Ta:/^\d+$/,fa:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/};a.Rb=n;a.ka=function(a){var b=0,c,e;if(a)for(c=0;c<a.length;c++)e=a.charCodeAt(c),b=(b<<5)-b+e,b&=b;return b};a.u=function(a,
b){var c="0123456789",e="",f="",g,h,j=8,k=10,l=10;b===o&&(y.isClientSideMarketingCloudVisitorID=i);if(1==a){c+="ABCDEF";for(g=0;16>g;g++)h=Math.floor(Math.random()*j),e+=c.substring(h,h+1),h=Math.floor(Math.random()*j),f+=c.substring(h,h+1),j=16;return e+"-"+f}for(g=0;19>g;g++)h=Math.floor(Math.random()*k),e+=c.substring(h,h+1),0==g&&9==h?k=3:(1==g||2==g)&&10!=k&&2>h?k=10:2<g&&(k=10),h=Math.floor(Math.random()*l),f+=c.substring(h,h+1),0==g&&9==h?l=3:(1==g||2==g)&&10!=l&&2>h?l=10:2<g&&(l=10);return e+
f};a.Ya=function(){var a;!a&&s.location&&(a=s.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var b=a.split("."),c=b.length-1,e=c-1;1<c&&2>=b[c].length&&(2==b[c-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,".indexOf(","+
b[c]+","))&&e--;if(0<e)for(a="";c>=e;)a=b[c]+(a?".":"")+a,c--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),b=(";"+v.cookie).split(" ").join(";"),c=b.indexOf(";"+a+"="),e=0>c?c:b.indexOf(";",c+1);return 0>c?"":decodeURIComponent(b.substring(c+2+a.length,0>e?b.length:e))};a.cookieWrite=function(d,b,c){var e=a.cookieLifetime,f,b=""+b,e=e?(""+e).toUpperCase():"";c&&"SESSION"!=e&&"NONE"!=e?(f=""!=b?parseInt(e?e:0,10):-60)?(c=new Date,c.setTime(c.getTime()+1E3*f)):1==c&&(c=new Date,f=
c.getYear(),c.setYear(f+2+(1900>f?1900:0))):c=0;return d&&"NONE"!=e?(v.cookie=encodeURIComponent(d)+"="+encodeURIComponent(b)+"; path=/;"+(c?" expires="+c.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==b):0};a.h=j;a.z=function(a,b){try{"function"==typeof a?a.apply(s,b):a[1].apply(a[0],b)}catch(c){}};a.M=function(d,b){b&&(a.h==j&&(a.h={}),a.h[d]==F&&(a.h[d]=[]),a.h[d].push(b))};a.t=function(d,b){if(a.h!=j){var c=a.h[d];if(c)for(;0<c.length;)a.z(c.shift(),b)}};
a.s=function(a,b,c,e){c=encodeURIComponent(b)+"="+encodeURIComponent(c);b=m.Fb(a);a=m.wb(a);if(-1===a.indexOf("?"))return a+"?"+c+b;var f=a.split("?"),a=f[0]+"?",e=m.ib(f[1],c,e);return a+e+b};a.Xa=function(a,b){var c=RegExp("[\\?&#]"+b+"=([^&#]*)").exec(a);if(c&&c.length)return decodeURIComponent(c[1])};a.eb=x(n.ba);a.fb=x(n.ca);a.ha=function(){var d=a.fb(void 0);d&&d.SDID&&d[G]===q&&(a._supplementalDataIDCurrent=d.SDID,a._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=i)};a.ga=function(){var d=
a.eb();if(d&&d.TS&&!(Math.floor((m.Da()-d.TS)/60)>n.Qa||d[G]!==q)){var b=d[o],c=a.setMarketingCloudVisitorID;b&&b.match(n.w)&&c(b);a.j(t,-1);d=d[r];b=a.setAnalyticsVisitorID;d&&d.match(n.w)&&b(d)}};a.cb=function(d){function b(d){m.Ga(d)&&a.setCustomerIDs(d)}function c(d){d=d||{};a._supplementalDataIDCurrent=d.supplementalDataIDCurrent||"";a._supplementalDataIDCurrentConsumed=d.supplementalDataIDCurrentConsumed||{};a._supplementalDataIDLast=d.supplementalDataIDLast||"";a._supplementalDataIDLastConsumed=
d.supplementalDataIDLastConsumed||{}}if(d)try{if(d=m.Ga(d)?d:m.Gb(d),d[a.marketingCloudOrgID]){var e=d[a.marketingCloudOrgID];b(e.customerIDs);c(e.sdid)}}catch(f){throw Error("`serverState` has an invalid format.");}};a.l=j;a.$a=function(d,b,c,e){b=a.s(b,"d_fieldgroup",d,1);e.url=a.s(e.url,"d_fieldgroup",d,1);e.m=a.s(e.m,"d_fieldgroup",d,1);y.d[d]=i;e===Object(e)&&e.m&&"XMLHttpRequest"===a.pa.F.G?a.pa.rb(e,c,d):a.useCORSOnly||a.ab(d,b,c)};a.ab=function(d,b,c){var e=0,f=0,g;if(b&&v){for(g=0;!e&&2>
g;){try{e=(e=v.getElementsByTagName(0<g?"HEAD":"head"))&&0<e.length?e[0]:0}catch(h){e=0}g++}if(!e)try{v.body&&(e=v.body)}catch(k){e=0}if(e)for(g=0;!f&&2>g;){try{f=v.createElement(0<g?"SCRIPT":"script")}catch(l){f=0}g++}}!b||!e||!f?c&&c():(f.type="text/javascript",f.src=b,e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f),e=a.loadTimeout,p.d[d]={requestStart:p.p(),url:b,xa:e,va:p.Ca(),wa:0},c&&(a.l==j&&(a.l={}),a.l[d]=setTimeout(function(){c(i)},e)),a.na.La.push(b))};a.Wa=function(d){a.l!=
j&&a.l[d]&&(clearTimeout(a.l[d]),a.l[d]=0)};a.la=k;a.ma=k;a.isAllowed=function(){if(!a.la&&(a.la=i,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.ma=i;return a.ma};a.b=j;a.c=j;var H=l.gc;H||(H="MC");var o=l.nc;o||(o="MCMID");var G=l.kc;G||(G="MCORGID");var I=l.hc;I||(I="MCCIDH");var M=l.lc;M||(M="MCSYNCS");var K=l.mc;K||(K="MCSYNCSOP");var L=l.ic;L||(L="MCIDTS");var C=l.jc;C||(C="MCOPTOUT");var E=l.ec;E||(E="A");var r=l.bc;r||(r="MCAID");var D=l.fc;D||(D="AAM");var A=l.dc;A||(A=
"MCAAMLH");var t=l.cc;t||(t="MCAAMB");var u=l.oc;u||(u="NONE");a.N=0;a.ja=function(){if(!a.N){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);a.N=a.ka(d)}return a.N};a.oa=k;a.f=function(){if(!a.oa){a.oa=i;var d=a.ja(),b=k,c=a.cookieRead(a.cookieName),e,f,g,h,l=new Date;a.b==j&&(a.b={});if(c&&"T"!=c){c=c.split("|");c[0].match(/^[\-0-9]+$/)&&(parseInt(c[0],10)!=d&&(b=i),c.shift());1==c.length%2&&c.pop();
for(d=0;d<c.length;d+=2)if(e=c[d].split("-"),f=e[0],g=c[d+1],1<e.length?(h=parseInt(e[1],10),e=0<e[1].indexOf("s")):(h=0,e=k),b&&(f==I&&(g=""),0<h&&(h=l.getTime()/1E3-60)),f&&g&&(a.e(f,g,1),0<h&&(a.b["expire"+f]=h+(e?"s":""),l.getTime()>=1E3*h||e&&!a.cookieRead(a.sessionCookieName))))a.c||(a.c={}),a.c[f]=i}if(!a.a(r)&&m.o()&&(c=a.cookieRead("s_vi")))c=c.split("|"),1<c.length&&0<=c[0].indexOf("v1")&&(g=c[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(n.w)&&a.e(r,g))}};a._appendVersionTo=
function(d){var b="vVersion|"+a.version,c=Boolean(d)?a._getCookieVersion(d):null;c?m.jb(c,a.version)&&(d=d.replace(n.fa,b)):d+=(d?"|":"")+b;return d};a.hb=function(){var d=a.ja(),b,c;for(b in a.b)!Object.prototype[b]&&a.b[b]&&"expire"!=b.substring(0,6)&&(c=a.b[b],d+=(d?"|":"")+b+(a.b["expire"+b]?"-"+a.b["expire"+b]:"")+"|"+c);d=a._appendVersionTo(d);a.cookieWrite(a.cookieName,d,1)};a.a=function(d,b){return a.b!=j&&(b||!a.c||!a.c[d])?a.b[d]:j};a.e=function(d,b,c){a.b==j&&(a.b={});a.b[d]=b;c||a.hb()};
a.Za=function(d,b){var c=a.a(d,b);return c?c.split("*"):j};a.gb=function(d,b,c){a.e(d,b?b.join("*"):"",c)};a.Wb=function(d,b){var c=a.Za(d,b);if(c){var e={},f;for(f=0;f<c.length;f+=2)e[c[f]]=c[f+1];return e}return j};a.Yb=function(d,b,c){var e=j,f;if(b)for(f in e=[],b)Object.prototype[f]||(e.push(f),e.push(b[f]));a.gb(d,e,c)};a.j=function(d,b,c){var e=new Date;e.setTime(e.getTime()+1E3*b);a.b==j&&(a.b={});a.b["expire"+d]=Math.floor(e.getTime()/1E3)+(c?"s":"");0>b?(a.c||(a.c={}),a.c[d]=i):a.c&&(a.c[d]=
k);c&&(a.cookieRead(a.sessionCookieName)||a.cookieWrite(a.sessionCookieName,"1"))};a.ia=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=u)),!a||a!=u&&!a.match(n.w)))a="";return a};a.k=function(d,b){a.Wa(d);a.i!=j&&(a.i[d]=k);p.d[d]&&(p.d[d].Nb=p.p(),p.J(d));y.d[d]&&y.Na(d,k);if(d==H){y.isClientSideMarketingCloudVisitorID!==i&&(y.isClientSideMarketingCloudVisitorID=k);var c=a.a(o);if(!c||a.overwriteCrossDomainMCIDAndAID){c=
"object"==typeof b&&b.mid?b.mid:a.ia(b);if(!c){if(a.D){a.getAnalyticsVisitorID(j,k,i);return}c=a.u(0,o)}a.e(o,c)}if(!c||c==u)c="";"object"==typeof b&&((b.d_region||b.dcs_region||b.d_blob||b.blob)&&a.k(D,b),a.D&&b.mid&&a.k(E,{id:b.id}));a.t(o,[c])}if(d==D&&"object"==typeof b){c=604800;b.id_sync_ttl!=F&&b.id_sync_ttl&&(c=parseInt(b.id_sync_ttl,10));var e=a.a(A);e||((e=b.d_region)||(e=b.dcs_region),e&&(a.j(A,c),a.e(A,e)));e||(e="");a.t(A,[e]);e=a.a(t);if(b.d_blob||b.blob)(e=b.d_blob)||(e=b.blob),a.j(t,
c),a.e(t,e);e||(e="");a.t(t,[e]);!b.error_msg&&a.C&&a.e(I,a.C)}if(d==E){c=a.a(r);if(!c||a.overwriteCrossDomainMCIDAndAID)(c=a.ia(b))?c!==u&&a.j(t,-1):c=u,a.e(r,c);if(!c||c==u)c="";a.t(r,[c])}a.idSyncDisableSyncs?z.Ea=i:(z.Ea=k,c={},c.ibs=b.ibs,c.subdomain=b.subdomain,z.Ib(c));if(b===Object(b)){var f;a.isAllowed()&&(f=a.a(C));f||(f=u,b.d_optout&&b.d_optout instanceof Array&&(f=b.d_optout.join(",")),c=parseInt(b.d_ottl,10),isNaN(c)&&(c=7200),a.j(C,c,i),a.e(C,f));a.t(C,[f])}};a.i=j;a.v=function(d,b,
c,e,f){var g="",h,k=m.yb(d);if(a.isAllowed())if(a.f(),g=a.a(d,N[d]===i),(!g||a.c&&a.c[d])&&(!a.disableThirdPartyCalls||k)){if(d==o||d==C?h=H:d==A||d==t?h=D:d==r&&(h=E),h){if(b&&(a.i==j||!a.i[h]))a.i==j&&(a.i={}),a.i[h]=i,a.$a(h,b,function(b){a.a(d)||(p.d[h]&&(p.d[h].timeout=p.p(),p.d[h].xb=!!b,p.J(h)),b&&y.Na(h,i),b="",d==o?b=a.u(0,o):h==D&&(b={error_msg:"timeout"}),a.k(h,b))},f);a.M(d,c);if(g)return g;b||a.k(h,{id:u});return""}}else g||(d===o?(a.M(d,c),g=a.u(0,o),a.setMarketingCloudVisitorID(g)):
d===r?(a.M(d,c),g="",a.setAnalyticsVisitorID(g)):(g="",e=i));if((d==o||d==r)&&g==u)g="",e=i;c&&e&&a.z(c,[g]);return g};a._setMarketingCloudFields=function(d){a.f();a.k(H,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.D=k;a.getMarketingCloudVisitorID=function(d,b){if(a.isAllowed()){a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.D=i);var c=a.B("_setMarketingCloudFields");return a.v(o,c.url,d,b,c)}return""};a.bb=function(d){a.getAudienceManagerBlob(d,
i)};l.AuthState={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2};a.A={};a.K=k;a.C="";a.setCustomerIDs=function(d){if(a.isAllowed()&&d){a.f();var b,c;for(b in d)if(!Object.prototype[b]&&(c=d[b]))if("object"==typeof c){var e={};c.id&&(e.id=c.id);c.authState!=F&&(e.authState=c.authState);a.A[b]=e}else a.A[b]={id:c};var d=a.getCustomerIDs(),e=a.a(I),f="";e||(e=0);for(b in d)Object.prototype[b]||(c=d[b],f+=(f?"|":"")+b+"|"+(c.id?c.id:"")+(c.authState?c.authState:""));a.C=a.ka(f);a.C!=e&&(a.K=i,a.bb(function(){a.K=
k}))}};a.getCustomerIDs=function(){a.f();var d={},b,c;for(b in a.A)Object.prototype[b]||(c=a.A[b],d[b]||(d[b]={}),c.id&&(d[b].id=c.id),d[b].authState=c.authState!=F?c.authState:l.AuthState.UNKNOWN);return d};a._setAnalyticsFields=function(d){a.f();a.k(E,d)};a.setAnalyticsVisitorID=function(d){a._setAnalyticsFields(d)};a.getAnalyticsVisitorID=function(d,b,c){if(!m.o()&&!c)return a.z(d,[""]),"";if(a.isAllowed()){var e="";c||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,i)}));
if(e||c){var f=c?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(c?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&(f=a.trackingServerSecure));var h={};if(f){var f="http"+(a.loadSSL?"s":"")+"://"+f+"/id",e="d_visid_ver="+a.version+"&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":""),j=["s_c_il",a._in,"_set"+(c?"MarketingCloud":"Analytics")+"Fields"],g=f+"?"+e+"&callback=s_c_il%5B"+
a._in+"%5D._set"+(c?"MarketingCloud":"Analytics")+"Fields";h.m=f+"?"+e;h.sa=j}h.url=g;return a.v(c?o:r,g,d,b,h)}}return""};a._setAudienceManagerFields=function(d){a.f();a.k(D,d)};a.B=function(d){var b=a.audienceManagerServer,c="",e=a.a(o),f=a.a(t,i),g=a.a(r),g=g&&g!=u?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"";a.loadSSL&&a.audienceManagerServerSecure&&(b=a.audienceManagerServerSecure);if(b){var c=a.getCustomerIDs(),h,j;if(c)for(h in c)Object.prototype[h]||(j=c[h],g+="&d_cid_ic="+encodeURIComponent(h)+
"%01"+encodeURIComponent(j.id?j.id:"")+(j.authState?"%01"+j.authState:""));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+b+"/id";e="d_visid_ver="+a.version+"&d_rtbd=json&d_ver=2"+(!e&&a.D?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+"&d_nsid="+(a.idSyncContainerID||0)+(e?"&d_mid="+encodeURIComponent(e):"")+(a.idSyncDisable3rdPartySyncing?"&d_coppa=true":"")+(f?"&d_blob="+encodeURIComponent(f):"")+g;f=["s_c_il",a._in,d];c=b+"?"+e+"&d_cb=s_c_il%5B"+
a._in+"%5D."+d;return{url:c,m:b+"?"+e,sa:f}}return{url:c}};a.getAudienceManagerLocationHint=function(d,b){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,i)})){var c=a.a(r);!c&&m.o()&&(c=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,i)}));if(c||!m.o())return c=a.B(),a.v(A,c.url,d,b,c)}return""};a.getLocationHint=a.getAudienceManagerLocationHint;a.getAudienceManagerBlob=function(d,b){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,
i)})){var c=a.a(r);!c&&m.o()&&(c=a.getAnalyticsVisitorID(function(){a.getAudienceManagerBlob(d,i)}));if(c||!m.o()){var c=a.B(),e=c.url;a.K&&a.j(t,-1);return a.v(t,e,d,b,c)}}return""};a._supplementalDataIDCurrent="";a._supplementalDataIDCurrentConsumed={};a._supplementalDataIDLast="";a._supplementalDataIDLastConsumed={};a.getSupplementalDataID=function(d,b){!a._supplementalDataIDCurrent&&!b&&(a._supplementalDataIDCurrent=a.u(1));var c=a._supplementalDataIDCurrent;a._supplementalDataIDLast&&!a._supplementalDataIDLastConsumed[d]?
(c=a._supplementalDataIDLast,a._supplementalDataIDLastConsumed[d]=i):c&&(a._supplementalDataIDCurrentConsumed[d]&&(a._supplementalDataIDLast=a._supplementalDataIDCurrent,a._supplementalDataIDLastConsumed=a._supplementalDataIDCurrentConsumed,a._supplementalDataIDCurrent=c=!b?a.u(1):"",a._supplementalDataIDCurrentConsumed={}),c&&(a._supplementalDataIDCurrentConsumed[d]=i));return c};l.OptOut={GLOBAL:"global"};a.getOptOut=function(d,b){if(a.isAllowed()){var c=a.B("_setMarketingCloudFields");return a.v(C,
c.url,d,b,c)}return""};a.isOptedOut=function(d,b,c){return a.isAllowed()?(b||(b=l.OptOut.GLOBAL),(c=a.getOptOut(function(c){a.z(d,[c==l.OptOut.GLOBAL||0<=c.indexOf(b)])},c))?c==l.OptOut.GLOBAL||0<=c.indexOf(b):j):k};a.appendVisitorIDsTo=function(d){var b=n.ba,c=B([[o,a.a(o)],[r,a.a(r)],[G,a.marketingCloudOrgID]]);try{return a.s(d,b,c)}catch(e){return d}};a.appendSupplementalDataIDTo=function(d,b){b=b||a.getSupplementalDataID(m.sb(),!0);if(!b)return d;var c=n.ca,e;e="SDID="+encodeURIComponent(b)+"|"+
(G+"="+encodeURIComponent(a.marketingCloudOrgID));try{return a.s(d,c,e)}catch(f){return d}};a.ra={postMessage:function(a,b,c){var e=1;b&&(n.r?c.postMessage(a,b.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):b&&(c.location=b.replace(/#.*$/,"")+"#"+ +new Date+e++ +"&"+a))},X:function(a,b){var c;try{if(n.r)if(a&&(c=function(c){if("string"===typeof b&&c.origin!==b||"[object Function]"===Object.prototype.toString.call(b)&&!1===b(c.origin))return!1;a(c)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",
c,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",c)}catch(e){}}};var m={O:function(){if(v.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"===typeof c&&c(a)},k)};if(v.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"===typeof c&&c(a)})}}(),map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===a||a===j)throw new TypeError;var c=Object(a),e=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var f=Array(e),
g=0;g<e;g++)g in c&&(f[g]=b.call(b,c[g],g,c));return f},za:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},Fb:function(a){var b=a.indexOf("#");return 0<b?a.substr(b):""},wb:function(a){var b=a.indexOf("#");return 0<b?a.substr(0,b):a},ib:function(a,b,c){a=a.split("&");c=c!=j?c:a.length;a.splice(c,0,b);return a.join("&")},yb:function(d,b,c){if(d!==r)return k;b||(b=a.trackingServer);c||(c=a.trackingServerSecure);d=a.loadSSL?c:b;return"string"===typeof d&&d.length?
0>d.indexOf("2o7.net")&&0>d.indexOf("omtrdc.net"):k},Ga:function(a){return Boolean(a&&a===Object(a))},zb:function(d,b){return 0>a._compareVersions(d,b)},jb:function(d,b){return 0!==a._compareVersions(d,b)},Mb:function(a){document.cookie=encodeURIComponent(a)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"},o:function(){return!!a.trackingServer||!!a.trackingServerSecure},Gb:function(a,b){function c(a,d){var e,j,i=a[d];if(i&&"object"===typeof i)for(e in i)Object.prototype.hasOwnProperty.call(i,
e)&&(j=c(i,e),void 0!==j?i[e]=j:delete i[e]);return b.call(a,d,i)}if("object"===typeof JSON&&"function"===typeof JSON.parse)return JSON.parse(a,b);var e;e=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;a=""+a;e.lastIndex=0;e.test(a)&&(a=a.replace(e,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return e=eval("("+a+")"),"function"===typeof b?c({"":e},""):e;throw new SyntaxError("JSON.parse");},Da:function(){return Math.round((new Date).getTime()/1E3)},Hb:function(a){for(var b={},a=a.split("|"),c=0,e=a.length;c<e;c++){var f=a[c].split("=");b[f[0]]=decodeURIComponent(f[1])}return b},sb:function(a){for(var a=a||5,b="";a--;)b+="abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(36*Math.random())];return b}};a.Xb=m;a.pa={F:function(){var a="none",b=i;"undefined"!==
typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?a="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(b=k),0<Object.prototype.toString.call(window.Ob).indexOf("Constructor")&&(b=k));return{G:a,$b:b}}(),tb:function(){return"none"===this.F.G?j:new window[this.F.G]},rb:function(d,b,c){var e=this;b&&(d.U=b);try{var f=this.tb();f.open("get",d.m+"&ts="+(new Date).getTime(),i);"XMLHttpRequest"===this.F.G&&
(f.withCredentials=i,f.timeout=a.loadTimeout,f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var a;try{if(a=JSON.parse(this.responseText),a!==Object(a)){e.n(d,j,"Response is not JSON");break a}}catch(b){e.n(d,b,"Error parsing response as JSON");break a}try{for(var c=d.sa,f=window,g=0;g<c.length;g++)f=f[c[g]];f(a)}catch(i){e.n(d,i,"Error forming callback function")}}});f.onerror=function(a){e.n(d,a,
"onerror")};f.ontimeout=function(a){e.n(d,a,"ontimeout")};f.send();p.d[c]={requestStart:p.p(),url:d.m,xa:f.timeout,va:p.Ca(),wa:1};a.na.La.push(d.m)}catch(g){this.n(d,g,"try-catch")}},n:function(d,b,c){a.CORSErrors.push({ac:d,error:b,description:c});d.U&&("ontimeout"===c?d.U(i):d.U(k))}};var z={Ua:3E4,da:649,Pa:k,id:j,W:[],S:j,Ba:function(a){if("string"===typeof a)return a=a.split("/"),a[0]+"//"+a[2]},g:j,url:j,ub:function(){var d="http://fast.",b="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(v.location.href);
this.g||(this.g="nosubdomainreturned");a.loadSSL&&(d=a.idSyncSSLUseAkamai?"https://fast.":"https://");d=d+this.g+".demdex.net/dest5.html"+b;this.S=this.Ba(d);this.id="destination_publishing_iframe_"+this.g+"_"+a.idSyncContainerID;return d},mb:function(){var d="?d_nsid="+a.idSyncContainerID+"#"+encodeURIComponent(v.location.href);"string"===typeof a.L&&a.L.length&&(this.id="destination_publishing_iframe_"+(new Date).getTime()+"_"+a.idSyncContainerID,this.S=this.Ba(a.L),this.url=a.L+d)},Ea:j,ya:k,Z:k,
H:j,pc:j,Eb:j,qc:j,Y:k,I:[],Cb:[],Db:[],Ha:n.r?15:100,T:[],Ab:[],ta:i,Ka:k,Ja:function(){return!a.idSyncDisable3rdPartySyncing&&(this.ya||a.Tb)&&this.g&&"nosubdomainreturned"!==this.g&&this.url&&!this.Z},Q:function(){function a(){e=document.createElement("iframe");e.sandbox="allow-scripts allow-same-origin";e.title="Adobe ID Syncing iFrame";e.id=c.id;e.style.cssText="display: none; width: 0; height: 0;";e.src=c.url;c.Eb=i;b();document.body.appendChild(e)}function b(){m.O(e,"load",function(){e.className=
"aamIframeLoaded";c.H=i;c.q()})}this.Z=i;var c=this,e=document.getElementById(this.id);e?"IFRAME"!==e.nodeName?(this.id+="_2",a()):"aamIframeLoaded"!==e.className?b():(this.H=i,this.Fa=e,this.q()):a();this.Fa=e},q:function(d){var b=this;d===Object(d)&&(this.T.push(d),this.Jb(d));if((this.Ka||!n.r||this.H)&&this.T.length)this.J(this.T.shift()),this.q();!a.idSyncDisableSyncs&&this.H&&this.I.length&&!this.Y&&(this.Pa||(this.Pa=i,setTimeout(function(){b.Ha=n.r?15:150},this.Ua)),this.Y=i,this.Ma())},Jb:function(a){var b,
c,e;if((b=a.ibs)&&b instanceof Array&&(c=b.length))for(a=0;a<c;a++)e=b[a],e.syncOnPage&&this.ua(e,"","syncOnPage")},J:function(a){var b=encodeURIComponent,c,e,f,g,h;if((c=a.ibs)&&c instanceof Array&&(e=c.length))for(f=0;f<e;f++)g=c[f],h=[b("ibs"),b(g.id||""),b(g.tag||""),m.za(g.url||[],","),b(g.ttl||""),"","",g.fireURLSync?"true":"false"],g.syncOnPage||(this.ta?this.P(h.join("|")):g.fireURLSync&&this.ua(g,h.join("|")));this.Ab.push(a)},ua:function(d,b,c){var e=(c="syncOnPage"===c?i:k)?K:M;a.f();var f=
a.a(e),g=k,h=k,j=Math.ceil((new Date).getTime()/n.ea);f?(f=f.split("*"),h=this.Kb(f,d.id,j),g=h.pb,h=h.qb,(!g||!h)&&this.Aa(c,d,b,f,e,j)):(f=[],this.Aa(c,d,b,f,e,j))},Kb:function(a,b,c){var e=k,f=k,g,h,j;for(h=0;h<a.length;h++)g=a[h],j=parseInt(g.split("-")[1],10),g.match("^"+b+"-")?(e=i,c<j?f=i:(a.splice(h,1),h--)):c>=j&&(a.splice(h,1),h--);return{pb:e,qb:f}},Bb:function(a){if(a.join("*").length>this.da)for(a.sort(function(a,c){return parseInt(a.split("-")[1],10)-parseInt(c.split("-")[1],10)});a.join("*").length>
this.da;)a.shift()},Aa:function(d,b,c,e,f,g){var h=this;if(d){if("img"===b.tag){var d=b.url,c=a.loadSSL?"https:":"http:",i,k,l;for(e=0,i=d.length;e<i;e++){k=d[e];l=/^\/\//.test(k);var n=new Image;m.O(n,"load",function(b,c,d,e){return function(){h.W[b]=j;a.f();var g=a.a(f),i=[];if(g){var g=g.split("*"),k,l,m;for(k=0,l=g.length;k<l;k++)m=g[k],m.match("^"+c.id+"-")||i.push(m)}h.Oa(i,c,d,e)}}(this.W.length,b,f,g));n.src=(l?c:"")+k;this.W.push(n)}}}else this.P(c),this.Oa(e,b,f,g)},P:function(d){var b=
encodeURIComponent;this.I.push((a.Ub?b("---destpub-debug---"):b("---destpub---"))+d)},Oa:function(d,b,c,e){d.push(b.id+"-"+(e+Math.ceil(b.ttl/60/24)));this.Bb(d);a.e(c,d.join("*"))},Ma:function(){var d=this,b;this.I.length?(b=this.I.shift(),a.ra.postMessage(b,this.url,this.Fa.contentWindow),this.Cb.push(b),setTimeout(function(){d.Ma()},this.Ha)):this.Y=k},X:function(a){var b=/^---destpub-to-parent---/;"string"===typeof a&&b.test(a)&&(b=a.replace(b,"").split("|"),"canSetThirdPartyCookies"===b[0]&&
(this.ta="true"===b[1]?i:k,this.Ka=i,this.q()),this.Db.push(a))},Ib:function(d){if(this.url===j||d.subdomain&&"nosubdomainreturned"===this.g)this.g="string"===typeof a.qa&&a.qa.length?a.qa:d.subdomain||"",this.url=this.ub();d.ibs instanceof Array&&d.ibs.length&&(this.ya=i);this.Ja()&&(a.idSyncAttachIframeOnWindowLoad?(l.aa||"complete"===v.readyState||"loaded"===v.readyState)&&this.Q():this.kb());"function"===typeof a.idSyncIDCallResult?a.idSyncIDCallResult(d):this.q(d);"function"===typeof a.idSyncAfterIDCallResult&&
a.idSyncAfterIDCallResult(d)},lb:function(d,b){return a.Vb||!d||b-d>n.Ra},kb:function(){function a(){b.Z||(document.body?b.Q():setTimeout(a,30))}var b=this;a()}};a.Sb=z;a.timeoutMetricsLog=[];var p={ob:window.performance&&window.performance.timing?1:0,Ia:window.performance&&window.performance.timing?window.performance.timing:j,$:j,R:j,d:{},V:[],send:function(d){if(a.takeTimeoutMetrics&&d===Object(d)){var b=[],c=encodeURIComponent,e;for(e in d)d.hasOwnProperty(e)&&b.push(c(e)+"="+c(d[e]));d="http"+
(a.loadSSL?"s":"")+"://dpm.demdex.net/event?d_visid_ver="+a.version+"&d_visid_stg_timeout="+a.loadTimeout+"&"+b.join("&")+"&d_orgid="+c(a.marketingCloudOrgID)+"&d_timingapi="+this.ob+"&d_winload="+this.vb()+"&d_ld="+this.p();(new Image).src=d;a.timeoutMetricsLog.push(d)}},vb:function(){this.R===j&&(this.R=this.Ia?this.$-this.Ia.navigationStart:this.$-l.nb);return this.R},p:function(){return(new Date).getTime()},J:function(a){var b=this.d[a],c={};c.d_visid_stg_timeout_captured=b.xa;c.d_visid_cors=
b.wa;c.d_fieldgroup=a;c.d_settimeout_overriden=b.va;b.timeout?b.xb?(c.d_visid_timedout=1,c.d_visid_timeout=b.timeout-b.requestStart,c.d_visid_response=-1):(c.d_visid_timedout="n/a",c.d_visid_timeout="n/a",c.d_visid_response="n/a"):(c.d_visid_timedout=0,c.d_visid_timeout=-1,c.d_visid_response=b.Nb-b.requestStart);c.d_visid_url=b.url;l.aa?this.send(c):this.V.push(c);delete this.d[a]},Lb:function(){for(var a=0,b=this.V.length;a<b;a++)this.send(this.V[a])},Ca:function(){return"function"===typeof setTimeout.toString?
-1<setTimeout.toString().indexOf("[native code]")?0:1:-1}};a.Zb=p;var y={isClientSideMarketingCloudVisitorID:j,MCIDCallTimedOut:j,AnalyticsIDCallTimedOut:j,AAMIDCallTimedOut:j,d:{},Na:function(a,b){switch(a){case H:b===k?this.MCIDCallTimedOut!==i&&(this.MCIDCallTimedOut=k):this.MCIDCallTimedOut=b;break;case E:b===k?this.AnalyticsIDCallTimedOut!==i&&(this.AnalyticsIDCallTimedOut=k):this.AnalyticsIDCallTimedOut=b;break;case D:b===k?this.AAMIDCallTimedOut!==i&&(this.AAMIDCallTimedOut=k):this.AAMIDCallTimedOut=
b}}};a.isClientSideMarketingCloudVisitorID=function(){return y.isClientSideMarketingCloudVisitorID};a.MCIDCallTimedOut=function(){return y.MCIDCallTimedOut};a.AnalyticsIDCallTimedOut=function(){return y.AnalyticsIDCallTimedOut};a.AAMIDCallTimedOut=function(){return y.AAMIDCallTimedOut};a.idSyncGetOnPageSyncInfo=function(){a.f();return a.a(K)};a.idSyncByURL=function(d){var b,c=d||{};b=c.minutesToLive;var e="";a.idSyncDisableSyncs&&(e=e?e:"Error: id syncs have been disabled");if("string"!==typeof c.dpid||
!c.dpid.length)e=e?e:"Error: config.dpid is empty";if("string"!==typeof c.url||!c.url.length)e=e?e:"Error: config.url is empty";if("undefined"===typeof b)b=20160;else if(b=parseInt(b,10),isNaN(b)||0>=b)e=e?e:"Error: config.minutesToLive needs to be a positive number";b={error:e,rc:b};if(b.error)return b.error;var e=d.url,f=encodeURIComponent,c=z,g,e=e.replace(/^https:/,"").replace(/^http:/,"");g=m.za(["",d.dpid,d.dpuuid||""],",");d=["ibs",f(d.dpid),"img",f(e),b.ttl,"",g];c.P(d.join("|"));c.q();return"Successfully queued"};
a.idSyncByDataSource=function(d){if(d!==Object(d)||"string"!==typeof d.dpuuid||!d.dpuuid.length)return"Error: config or config.dpuuid is empty";d.url="//dpm.demdex.net/ibs:dpid="+d.dpid+"&dpuuid="+d.dpuuid;return a.idSyncByURL(d)};a._compareVersions=function(a,b){if(a===b)return 0;var c=a.toString().split("."),e=b.toString().split("."),f;a:{f=c.concat(e);for(var g=0,h=f.length;g<h;g++)if(!n.Ta.test(f[g])){f=k;break a}f=i}if(!f)return NaN;for(;c.length<e.length;)c.push("0");for(;e.length<c.length;)e.push("0");
a:{for(f=0;f<c.length;f++){g=parseInt(c[f],10);h=parseInt(e[f],10);if(g>h){c=1;break a}if(h>g){c=-1;break a}}c=0}return c};a._getCookieVersion=function(d){d=d||a.cookieRead(a.cookieName);return(d=n.fa.exec(d))&&1<d.length?d[1]:null};a._resetAmcvCookie=function(d){var b=a._getCookieVersion();(!b||m.zb(b,d))&&m.Mb(a.cookieName)};0>q.indexOf("@")&&(q+="@AdobeOrg");a.marketingCloudOrgID=q;a.cookieName="AMCV_"+q;a.sessionCookieName="AMCVS_"+q;a.cookieDomain=a.Ya();a.cookieDomain==s.location.hostname&&
(a.cookieDomain="");a.loadSSL=0<=s.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=3E4;a.CORSErrors=[];a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net";var N={};N[A]=i;N[t]=i;if(w&&"object"==typeof w){for(var J in w)!Object.prototype[J]&&(a[J]=w[J]);a.idSyncContainerID=a.idSyncContainerID||0;a.resetBeforeVersion&&a._resetAmcvCookie(a.resetBeforeVersion);a.ga();a.ha();a.f();J=a.a(L);var O=Math.ceil((new Date).getTime()/n.ea);!a.idSyncDisableSyncs&&z.lb(J,O)&&(a.j(t,-1),
a.e(L,O));a.getMarketingCloudVisitorID();a.getAudienceManagerLocationHint();a.getAudienceManagerBlob();a.cb(a.serverState)}else a.ga(),a.ha();if(!a.idSyncDisableSyncs){z.mb();m.O(window,"load",function(){l.aa=i;p.$=p.p();p.Lb();var a=z;a.Ja()&&a.Q()});try{a.ra.X(function(a){z.X(a.data)},z.S)}catch(P){}}}
Visitor.getInstance=function(q,w){var x,B=window.s_c_il,a;0>q.indexOf("@")&&(q+="@AdobeOrg");if(B)for(a=0;a<B.length;a++)if((x=B[a])&&"Visitor"==x._c&&x.marketingCloudOrgID==q)return x;return new Visitor(q,w)};(function(){function q(){w.aa=x}var w=window.Visitor,x=w.Va,B=w.Sa;x||(x=!0);B||(B=!1);window.addEventListener?window.addEventListener("load",q):window.attachEvent&&window.attachEvent("onload",q);w.nb=(new Date).getTime()})();

//var visitor = Visitor.getInstance("98DC73AE52E13F1E0A490D4C@AdobeOrg", {
visitor = Visitor.getInstance("98DC73AE52E13F1E0A490D4C@AdobeOrg", {
  trackingServer: "info.telstra.com.au",
  trackingServerSecure: "infos.telstra.com.au",
  marketingCloudServer: "info.telstra.com.au",
  marketingCloudServerSecure: "infos.telstra.com.au",
  cookieDomain: visitorIDServiceGetCookieDomain(),
  disableThirdPartyCalls:_satellite.getVar('tmh')("womens.afl") ? true : false // prevent third-party calls on womens.afl
});

var s_account = "telstrabpbigpondprd";
s = s_gi(s_account);

// Marketing Cloud Visitor ID Service
if (typeof(Visitor) != "undefined") {
    s.visitor = Visitor.getInstance("98DC73AE52E13F1E0A490D4C@AdobeOrg");
}

function visitorIDServiceGetCookieDomain() {
  var cookieValue = "";
  var domainSplit = window.location.hostname.split('.');
  if (domainSplit.length == 3) {
    domainArray = [domainSplit[0], domainSplit[1], domainSplit[2]];
    cookieValue = domainArray.join('.');
  } else if (domainSplit.length > 3) {
    sp = domainSplit.length - 3.
    domainArray = [domainSplit[sp], domainSplit[sp + 1], domainSplit[sp + 2]];
    cookieValue = domainArray.join('.');
  }
  else {
    cookieValue = window.location.hostname;
  }
  return cookieValue;
}

// Thur 11/02/2016

window.k_sc_param = window.k_sc_param || {
    version: 1.1
};

var BP_SC = BP_SC || {};
s.cookieDomainPeriods = '3';
if (window.location.host.indexOf(".com.au") != -1) {
    s.cookieDomainPeriods = "3";
} else {
    s.cookieDomainPeriods = "2";
}
s.dstStart = "10/06/2019";
s.dstEnd = "04/05/2020";

var tDate = new Date();
s.currentYear = tDate.getFullYear();
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
s.linkInternalFilters="javascript:,1seven.com.au,nmfchospitality.com.au,hfccorporatehospitality.com.au,weflyasone.afc.com.au,19thman.com.au,northernriverinafnl.com.au,membership.lions.com.au,membership.carltonfc.com.au,membership.collingwoodfc.com.au,membership.essendonfc.com.au,membership.fremantlefc.com.au,membership.geelongcats.com.au,membership.gwsgiants.com.au,membership.hawthornfc.com.au,membership.melbournefc.com.au,membership.nmfc.com.au,weareportadelaide.com.au,afl9s.spawtz.com,membership.richmondfc.com.au,saintsmembership.com.au,membership.sydneyswans.com.au,membership.westcoasteagles.com.au,rloc.com.au,bigpondmovies.com,19thman.com.au,womens.afl,membership.westernbulldogs.com.au,rabbitohs.com.au,events.wce.com.au,lookingafterme.org.au,tixstar.com.au/s/afl,adelaidefilmfestival.org,afl.com.au,afl.footytips.com.au,smarter.telstra.com.au,aflwtipping.afl,afl.footytips.com.au,afl.virtualsports.com.au,aflmembership.com.au,anz-championship.com,aus.wwte8.com/pub/agent.dll,australianmasters.com.au,insideportadelaide.com.au,basic.messaging.bigpond.com,bbfdr.ticketek.com.au,beeneverywhere.com.au,bigblog.com.au,bigpond.cruises.com.au,bigpond.domain.com.au,bigpond.homepriceguide.com.au,catchphrasecup.com.au,bigpond.open.edu.au,bigpond.raisingchildren.net.au,bigpondeverest.com,bigpondgames.com,bigpondkids.com,bigpondmovies.com.au,bigpondmusic.com,bigpondnews.com,bigpondoffice.com.au,bigpondphotos.com,bigpondphotos.com.au,bigpondpilot.com.au,bigpondsecurity.com,bigpondshopping.com,bigpondsitehelp.com,bigpondsitehelp.com,bigpondsmsoffers.com.au,bigpondsport.com,bigpondsport.com.au,bigpondtelstrasearch.com,bigpondtickets.ticketek.com.au,bigpondtravel.com,bigpondtravel.com.au,bigpondtv.com,bigpondvideo.com,bigpondvideo.com.au,bluesfc.com.au,bombersfc.com.au,afleventoffice.com.au,bpplanfinder.com,broncos.com.au,bulldogs.com.au,carltonfc.com.au,carltonfc.footytips.com.au,catsfc.com.au,centenaryofrugbyleague.com.au,christmas.bigpond.com,collingwoodfc.com.au,cowboys.com.au,ctones.telstra.com,downloads.bigpondmovies.com,dragons.com.au,dvd.bigpondmovies.com,files.bigpond.com,files.bigpond.com,fremantlefc.com.au,gamearena.com.au,gamenow.com.au,geelongcats.com.au,gfc.com.au,girlfriday.tv,go.bigpond.com,goldcoastfc.com.au,hawthornfc.com,hawthornfc.com.au,bluesfoundation.org.au,hm.bigpond.com,hm.bigpondnews.com,horseracing.bigpond.com,horseracing.bigpondsport.com,iad.bigpondvideo.com,kangaroos.com.au,lions.com.au,magpiesfc.com.au,manlyseaeagles.com.au,melbournefc.com.au,melbournestorm.com.au,memberoffers.bigpond.com,messaging.bigpond.com,mobilefun.telstra.com,myacct.bigpond.com,newcastleknights.com.au,newzealandwarriors.co.nz,newzealandwarriors.com.au,portadelaidefc.com.au,portadelaidefc.footytips.com.au,portpowerfc.com.au,promo.bigpond.com,qrl.com.au,raiders.com.au,richmondfc.com.au,saints.com.au,say.bigpond.com,search.api.bigpond.com,sharks.com.au,shop.bigpond.com,shop.bigpondgames.com,signon.bigpond.com,storage.bigpond.com,sydneyroosters.com.au,sydneyswans.com.au,sydneysymphony.bigpondmusic.com,telstra.com,thenews.bigpond.com,thewarriors.co.nz,thewarriors.com.au,thub.bigpond.com,tipping.afl.com.au,titans.com.au,westcoasteagles.com.au,150years.com.au,afl.virtualsports.com.au,bigpond.custhelp.com,bigpondguide.com,westcoasteagles.footytips.com.au,westernbulldogs.com.au,weststigers.com.au,deezone.com.au,itsyourcall.afl.com.au,lifestylefood.com.au,lifestyle.com.au,skynews.com.au,racingnetwork.com.au,giantsacademy.com.au,sportsfan.com.au,tradingpost.com.au,carshowroom.com.au,aflmedia.championdata.com,play.afl,airg.com,.airg.com,fantasy.afl.com.au,essendonfc.com.au,m.essendonfc.com.au,m.afc.com.au,afc.com.au,m.hawthornfc.com.au,m.richmondfc.com.au,m.collingwoodfc.com.au,m.geelongcats.com.au,matchups.afl.com.au,m.sydneyswans.com.au,m.westernbulldogs.com.au,m.portadelaidefc.com.au,m.westcoasteagles.com.au,m.carltonfc.com.au,m.melbournefc.com.au,nmfc.com.au,m.fremantlefc.com.au,m.saints.com.au,m.lions.com.au,id.afl.com.au,gwsgiants.com.au,m.nmfc.com.au,m.gwsgiants.com.au,membership.afl.com.au,allaustralian.afl.com.au,goaloftheyear.afl,markoftheyear.afl,m.goldcoastfc.com.au,subscription.afl.com.au,aflschoolstipping.com.au,fansmvp.afl.com.au,tipping.portadelaidefc.com.au,tipping.collingwoodfc.com.au,tipping.hawthornfc.com.au,tipping.fremantlefc.com.au,tipping.afc.com.au,tipping.westcoasteagles.com.au,tipping.richmondfc.com.au,tipping.nmfc.com.au,tipping.essendonfc.com.au,tipping.saints.com.au,tipping.gwsgiants.com.au,tipping.carltonfc.com.au,tipping.lions.com.au,lionshospitality.com.au,sydneyswanshospitality.com.au,.nmfc.com.au,testafl.com,aflmedia.net";
BP_SC.linkInternalFilters = s.linkInternalFilters;
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.usePlugins = true;

function s_doPlugins(s) {

    if (s.linkInternalFilters !== BP_SC.linkInternalFilters) {
        s.linkInternalFilters = BP_SC.linkInternalFilters;
    }
    s.tnt = s.trackTNT();
    s.events = s.apl(s.events, "event27", ",", 1);
    if (s.getQueryParam('cid')) {
        s.eVar7 = s.getQueryParam('cid');
    }
    if (s.getQueryParam('sssdmh')) {
        s.eVar8 = s.getValOnce(s.getQueryParam('sssdmh'), 'sssdmhmp_cookie', 1);
        s.eVar45 = s.getQueryParam('dmid');
    } else if (s.getQueryParam('pid')) {
        s.eVar8 = s.getValOnce(s.getQueryParam('pid'), 'pmp_cookie', 1);
        s.clickThruQuality('pid', 'event25', 'event26');
    }
    if (s.getQueryParam('ref')) {
        s.eVar13 = s.getQueryParam('ref');
        s.prop47 = s.getQueryParam('ref');
    }
    if (s.eVar13.length == 0 && document.referrer.length > 0) {
  		var t_url = new URL(document.referrer);
  		if (!/hub\.telstra\.com\.au/.test(t_url.host) && /telstra\.com\.au/.test(t_url.host) && t_url.pathname.length >0 ) s.eVar13 = "TD_"+t_url.pathname.replace(/\//g,"");
    }
    if (s.getQueryParam('camefrom')) {
        s.eVar67 = s.getQueryParam('camefrom');
    }
    s.eVar39 = s.getValOnce(s.getQueryParam('gcid'), 'gcmp_cookie', 1);
    s.eVar49 = s.getValOnce(s.getQueryParam('track_id'), 'rmp_cookie', 1);
    if (s.getQueryParam('sio')) {
        s.eVar26 = s.getValOnce(s.getQueryParam('sio'), 'smp_cookie', 1);
    }
    if (s.getQueryParam('s_kwcid')) {
        s.pageURL = s.manageQueryParam('s_kwcid', 0, 1);
        s.eVar8 = s.getValOnce(s.getQueryParam('s_kwcid'), 'pmp_cookie', 1);
        s.clickThruQuality('s_kwcid', 'event25', 'event26');
    }
    if (window.s_postPlugins) {
        s_postPlugins(s);
    }
    s.prop33 = s.getTimeParting('h', '+10');
    s.prop34 = s.getTimeParting('d', '+10');
    s.prop35 = s.getTimeParting('w', '+10');
    s.eVar40 = s.getTimeParting('h', '+10');
    s.eVar41 = s.getTimeParting('d', '+10');
    s.eVar42 = s.getTimeParting('w', '+10');
    s.prop46 = s.getNewRepeat();
    s.eVar46 = s.getNewRepeat();
    if (s.pageName != "") {
        s.prop48 = s.getPreviousValue(s.pageName, 'gpv_e48', '');
        s.eVar43 = s.getPreviousValue(s.pageName, 'gpv_p43', '');
    }
    if (s.prop3 != "") {
        s.prop49 = s.getPreviousValue(s.prop3, 'gpv_p49', '');
    }
    if (s.eVar3 != "") {
        s.eVar44 = s.getPreviousValue(s.eVar3, 'gpv_e44', '');
    }
    if (s.pageName != "") {
        var ppv = s.getPercentPageViewed(s.pageName);
        if (ppv && typeof ppv == 'object' && ppv[0] == s.prop48 && s.prop48 != "") {
            s.prop16 = ppv[1];
        }
    }
    s.eVar18 = s.crossVisitParticipation(s.eVar8, 's_evar18', '30', '10', '>', '');
    s.clickThruQuality('pid', 'event25', 'event26');
  if (s.prop3 !== 'BP_SC.com' && s.prop3 !== undefined && s.prop3 !== 'Internet') {
        s.eVar26 = s.prop3;
    }
    if (document.location.protocol === 'https:') {
        s.events = s.apl(s.events, "event40", ",", 1);
    } else {
        s.events = s.apl(s.events, "event41", ",", 1);
    }
    if (s.pageName === 'BP|News|Weather|Current:Home') {
        s.pageName = 'BP:News:Weather:Current:Home'
    }
    if (s.getQueryParam('tc')) {
        s.eVar8 = s.getValOnce(s.getQueryParam('tc'), 'pmp_cookie', 1);
        s.clickThruQuality('tc', 'event25', 'event26');
        BP_SC.datCreateOmnitureBeacon('', s.getQueryParam('tc'));
    }
    if (typeof (s.hier1) !== 'undefined') {
        BP_SC.hierarchy = s.hier1.split('|');
        switch (BP_SC.hierarchy[2]) {
      case "Health":
      BP_SC.addReportSuite('telstrabphealth');
      break;
        }
    }
    s.contextData['pageName'] = s.pageName;
    s.list1 = s_readCookie('aamtd_targettm');

    if (/oid=(.*)\&/i.test(decodeURIComponent(s.e))){
     s.contextData['exitLink'] = /oid=(.*)\&/i.exec(decodeURIComponent(s.e))[1];
     s.linkTrackVars = "contextData.exitLink";
    }
  if (typeof s.un != 'undefined' && s.un !== '') {
    s.sa(s.un);
  }
  s.prop17 = _satellite.getVar('dtm_ver');
  s.contextData['s_getLoadTime'] = s_getLoadTime(); _satellite.notify("DOM Load Time:"+s.contextData['s_getLoadTime']);
  _satellite.getVar("isAdblock"); //check if user has adblock
  s.prop45=s.prop45=s_readCookie('s_c45'); //get TID if set
}
s.doPlugins = s_doPlugins;
BP_SC.datCreateOmnitureBeacon = function(events, campaign) {
    var prefix = 'https://infos.telstra.com/b/ss/telstratdretailprd/1/H.27.5/';
    prefix += parseInt(Math.random() * 9999999999, 10);
    prefix += '?AQB=1&ndh=1&ns=telstracorporation&cdp=3';
    var suffix = '&g=' + escape(document.location.href) + '&c8=D%3Dg&AQE=1';
    if (events) {
        events = '&events=' + escape(events);
    } else {
        events = '';
    }
    if (campaign) {
        campaign = '&v0=' + escape(campaign);
    } else {
        campaign = '';
    }
    var beaconUrl = prefix + events + campaign + suffix;
    BP_SC.datAdServer('<img height="1" width="1" style="border-style:none;" alt="" src="' + beaconUrl + '" alt="" />');
};
BP_SC.addReportSuite = function(rsidStem) {
    if ((s.un.search(/rsidStem/) === -1) && (s_account.search(/rsidStem/) === -1)) {
        if ((s.un.search(/telstrabpbigpondprd/) !== -1) || (s_account.search(/telstrabpbigpondprd/) !== -1)) {
            var rsidType = 'prd';
        } else {
            var rsidType = 'dev';
        }
        s.un = s.un + ',' + rsidStem + rsidType;
    }
}
// Plugins
///////////////////////////////////////////////////
function s_getLoadTime() { if (window.performance) {s_loadT = Math.round(((performance.timing.domContentLoadedEventEnd>0?performance.timing.domContentLoadedEventEnd:new Date().getTime()) - performance.timing.navigationStart) / 100); } else {s_loadT = 0;}return s_loadT;}

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

function AppMeasurement_Module_Media(q){var b=this;b.s=q;q=window;q.s_c_in||(q.s_c_il=[],q.s_c_in=0);b._il=q.s_c_il;b._in=q.s_c_in;b._il[b._in]=b;q.s_c_in++;b._c="s_m";b.list=[];b.open=function(d,c,e,k){var f={},a=new Date,l="",g;c||(c=-1);if(d&&e){b.list||(b.list={});b.list[d]&&b.close(d);k&&k.id&&(l=k.id);if(l)for(g in b.list)!Object.prototype[g]&&b.list[g]&&b.list[g].R==l&&b.close(b.list[g].name);f.name=d;f.length=c;f.offset=0;f.e=0;f.playerName=b.playerName?b.playerName:e;f.R=l;f.C=0;f.a=0;f.timestamp=
Math.floor(a.getTime()/1E3);f.k=0;f.u=f.timestamp;f.c=-1;f.n="";f.g=-1;f.D=0;f.I={};f.G=0;f.m=0;f.f="";f.B=0;f.L=0;f.A=0;f.F=0;f.l=!1;f.v="";f.J="";f.K=0;f.r=!1;f.H="";f.complete=0;f.Q=0;f.p=0;f.q=0;b.list[d]=f}};b.openAd=function(d,c,e,k,f,a,l,g){var h={};b.open(d,c,e,g);if(h=b.list[d])h.l=!0,h.v=k,h.J=f,h.K=a,h.H=l};b.M=function(d){var c=b.list[d];b.list[d]=0;c&&c.monitor&&clearTimeout(c.monitor.interval)};b.close=function(d){b.i(d,0,-1)};b.play=function(d,c,e,k){var f=b.i(d,1,c,e,k);f&&!f.monitor&&
(f.monitor={},f.monitor.update=function(){1==f.k&&b.i(f.name,3,-1);f.monitor.interval=setTimeout(f.monitor.update,1E3)},f.monitor.update())};b.click=function(d,c){b.i(d,7,c)};b.complete=function(d,c){b.i(d,5,c)};b.stop=function(d,c){b.i(d,2,c)};b.track=function(d){b.i(d,4,-1)};b.P=function(d,c){var e="a.media.",k=d.linkTrackVars,f=d.linkTrackEvents,a="m_i",l,g=d.contextData,h;c.l&&(e+="ad.",c.v&&(g["a.media.name"]=c.v,g[e+"pod"]=c.J,g[e+"podPosition"]=c.K),c.G||(g[e+"CPM"]=c.H));c.r&&(g[e+"clicked"]=
!0,c.r=!1);g["a.contentType"]="video"+(c.l?"Ad":"");g["a.media.channel"]=b.channel;g[e+"name"]=c.name;g[e+"playerName"]=c.playerName;0<c.length&&(g[e+"length"]=c.length);g[e+"timePlayed"]=Math.floor(c.a);0<Math.floor(c.a)&&(g[e+"timePlayed"]=Math.floor(c.a));c.G||(g[e+"view"]=!0,a="m_s",b.Heartbeat&&b.Heartbeat.enabled&&(a=c.l?b.__primetime?"mspa_s":"msa_s":b.__primetime?"msp_s":"ms_s"),c.G=1);c.f&&(g[e+"segmentNum"]=c.m,g[e+"segment"]=c.f,0<c.B&&(g[e+"segmentLength"]=c.B),c.A&&0<c.a&&(g[e+"segmentView"]=
!0));!c.Q&&c.complete&&(g[e+"complete"]=!0,c.S=1);0<c.p&&(g[e+"milestone"]=c.p);0<c.q&&(g[e+"offsetMilestone"]=c.q);if(k)for(h in g)Object.prototype[h]||(k+=",contextData."+h);l=g["a.contentType"];d.pe=a;d.pev3=l;var q,s;if(b.contextDataMapping)for(h in d.events2||(d.events2=""),k&&(k+=",events"),b.contextDataMapping)if(!Object.prototype[h]){a=h.length>e.length&&h.substring(0,e.length)==e?h.substring(e.length):"";l=b.contextDataMapping[h];if("string"==typeof l)for(q=l.split(","),s=0;s<q.length;s++)l=
q[s],"a.contentType"==h?(k&&(k+=","+l),d[l]=g[h]):"view"==a||"segmentView"==a||"clicked"==a||"complete"==a||"timePlayed"==a||"CPM"==a?(f&&(f+=","+l),"timePlayed"==a||"CPM"==a?g[h]&&(d.events2+=(d.events2?",":"")+l+"="+g[h]):g[h]&&(d.events2+=(d.events2?",":"")+l)):"segment"==a&&g[h+"Num"]?(k&&(k+=","+l),d[l]=g[h+"Num"]+":"+g[h]):(k&&(k+=","+l),d[l]=g[h]);else if("milestones"==a||"offsetMilestones"==a)h=h.substring(0,h.length-1),g[h]&&b.contextDataMapping[h+"s"][g[h]]&&(f&&(f+=","+b.contextDataMapping[h+
"s"][g[h]]),d.events2+=(d.events2?",":"")+b.contextDataMapping[h+"s"][g[h]]);g[h]&&(g[h]=0);"segment"==a&&g[h+"Num"]&&(g[h+"Num"]=0)}d.linkTrackVars=k;d.linkTrackEvents=f};b.i=function(d,c,e,k,f){var a={},l=(new Date).getTime()/1E3,g,h,q=b.trackVars,s=b.trackEvents,t=b.trackSeconds,u=b.trackMilestones,v=b.trackOffsetMilestones,w=b.segmentByMilestones,x=b.segmentByOffsetMilestones,p,n,r=1,m={},y;b.channel||(b.channel=b.s.w.location.hostname);if(a=d&&b.list&&b.list[d]?b.list[d]:0)if(a.l&&(t=b.adTrackSeconds,
u=b.adTrackMilestones,v=b.adTrackOffsetMilestones,w=b.adSegmentByMilestones,x=b.adSegmentByOffsetMilestones),0>e&&(e=1==a.k&&0<a.u?l-a.u+a.c:a.c),0<a.length&&(e=e<a.length?e:a.length),0>e&&(e=0),a.offset=e,0<a.length&&(a.e=a.offset/a.length*100,a.e=100<a.e?100:a.e),0>a.c&&(a.c=e),y=a.D,m.name=d,m.ad=a.l,m.length=a.length,m.openTime=new Date,m.openTime.setTime(1E3*a.timestamp),m.offset=a.offset,m.percent=a.e,m.playerName=a.playerName,m.mediaEvent=0>a.g?"OPEN":1==c?"PLAY":2==c?"STOP":3==c?"MONITOR":
4==c?"TRACK":5==c?"COMPLETE":7==c?"CLICK":"CLOSE",2<c||c!=a.k&&(2!=c||1==a.k)){f||(k=a.m,f=a.f);if(c){1==c&&(a.c=e);if((3>=c||5<=c)&&0<=a.g&&(r=!1,q=s="None",a.g!=e)){h=a.g;h>e&&(h=a.c,h>e&&(h=e));p=u?u.split(","):0;if(0<a.length&&p&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h/a.length*100<g&&a.e>=g&&(r=!0,n=p.length,m.mediaEvent="MILESTONE",a.p=m.milestone=g);if((p=v?v.split(","):0)&&e>=h)for(n=0;n<p.length;n++)(g=p[n]?parseFloat(""+p[n]):0)&&h<g&&e>=g&&(r=!0,n=p.length,m.mediaEvent=
"OFFSET_MILESTONE",a.q=m.offsetMilestone=g)}if(a.L||!f){if(w&&u&&0<a.length){if(p=u.split(","))for(p.push("100"),n=h=0;n<p.length;n++)if(g=p[n]?parseFloat(""+p[n]):0)a.e<g&&(k=n+1,f="M:"+h+"-"+g,n=p.length),h=g}else if(x&&v&&(p=v.split(",")))for(p.push(""+(0<a.length?a.length:"E")),n=h=0;n<p.length;n++)if((g=p[n]?parseFloat(""+p[n]):0)||"E"==p[n]){if(e<g||"E"==p[n])k=n+1,f="O:"+h+"-"+g,n=p.length;h=g}f&&(a.L=!0)}(f||a.f)&&f!=a.f&&(a.F=!0,a.f||(a.m=k,a.f=f),0<=a.g&&(r=!0));(2<=c||100<=a.e)&&a.c<e&&
(a.C+=e-a.c,a.a+=e-a.c);if(2>=c||3==c&&!a.k)a.n+=(1==c||3==c?"S":"E")+Math.floor(e),a.k=3==c?1:c;!r&&0<=a.g&&3>=c&&(t=t?t:0)&&a.a>=t&&(r=!0,m.mediaEvent="SECONDS");a.u=l;a.c=e}if(!c||3>=c&&100<=a.e)2!=a.k&&(a.n+="E"+Math.floor(e)),c=0,q=s="None",m.mediaEvent="CLOSE";7==c&&(r=m.clicked=a.r=!0);if(5==c||b.completeByCloseOffset&&(!c||100<=a.e)&&0<a.length&&e>=a.length-b.completeCloseOffsetThreshold)r=m.complete=a.complete=!0;l=m.mediaEvent;"MILESTONE"==l?l+="_"+m.milestone:"OFFSET_MILESTONE"==l&&(l+=
"_"+m.offsetMilestone);a.I[l]?m.eventFirstTime=!1:(m.eventFirstTime=!0,a.I[l]=1);m.event=m.mediaEvent;m.timePlayed=a.C;m.segmentNum=a.m;m.segment=a.f;m.segmentLength=a.B;b.monitor&&4!=c&&b.monitor(b.s,m);b.Heartbeat&&b.Heartbeat.enabled&&0<=a.g&&(r=!1);0==c&&b.M(d);r&&a.D==y&&(d={contextData:{}},d.linkTrackVars=q,d.linkTrackEvents=s,d.linkTrackVars||(d.linkTrackVars=""),d.linkTrackEvents||(d.linkTrackEvents=""),b.P(d,a),d.linkTrackVars||(d["!linkTrackVars"]=1),d.linkTrackEvents||(d["!linkTrackEvents"]=
1),b.s.track(d),a.F?(a.m=k,a.f=f,a.A=!0,a.F=!1):0<a.a&&(a.A=!1),a.n="",a.p=a.q=0,a.a-=Math.floor(a.a),a.g=e,a.D++)}return a};b.O=function(d,c,e,k,f){var a=0;if(d&&(!b.autoTrackMediaLengthRequired||c&&0<c)){if(b.list&&b.list[d])a=1;else if(1==e||3==e)b.open(d,c,"HTML5 Video",f),a=1;a&&b.i(d,e,k,-1,0)}};b.attach=function(d){var c,e,k;d&&d.tagName&&"VIDEO"==d.tagName.toUpperCase()&&(b.o||(b.o=function(c,a,d){var e,h;b.autoTrack&&(e=c.currentSrc,(h=c.duration)||(h=-1),0>d&&(d=c.currentTime),b.O(e,h,a,
d,c))}),c=function(){b.o(d,1,-1)},e=function(){b.o(d,1,-1)},b.j(d,"play",c),b.j(d,"pause",e),b.j(d,"seeking",e),b.j(d,"seeked",c),b.j(d,"ended",function(){b.o(d,0,-1)}),b.j(d,"timeupdate",c),k=function(){d.paused||d.ended||d.seeking||b.o(d,3,-1);setTimeout(k,1E3)},k())};b.j=function(b,c,e){b.attachEvent?b.attachEvent("on"+c,e):b.addEventListener&&b.addEventListener(c,e,!1)};void 0==b.completeByCloseOffset&&(b.completeByCloseOffset=1);void 0==b.completeCloseOffsetThreshold&&(b.completeCloseOffsetThreshold=
1);b.Heartbeat={};b.N=function(){var d,c;if(b.autoTrack&&(d=b.s.d.getElementsByTagName("VIDEO")))for(c=0;c<d.length;c++)b.attach(d[c])};b.j(q,"load",b.N)}

// Do we even use these?
s.loadModule("Media");s.loadModule("Integrate");

s.Media.autoTrack=false;
s.Media.trackMilestones="25,50,75";
s.Media.segmentByMilestones=true;
s.Media.trackWhilePlaying=true;
s.Media.trackUsingContextData=true;
s.Media.trackVars="events,prop1,prop2,prop3,prop4,channel,eVar1,eVar2,eVar3,eVar4,eVar5,eVar63,eVar64,contextData.channelname,contextData.classification,contextData.collection,contextData.contentprovider,contextData.contenttitle,contextData.aspectratio,contextData.site,contextData.drmprotected,contextData.videoURL,contextData.pageName";
s.Media.trackEvents="event56,event57,event58";
s.Media.contextDataMapping = {
    "a.media.milestones":{
        25:"event56",
        50:"event57",
        75:"event58"
    },
    "D=pageName":"pageName",
    "D=pageName":"contextData.pageName",
    "" : "eVar64"
}
///////////////////////////////////////////////////////

// THIS MUST NEVER CHANGE!
s.visitorNamespace="bigpond";

// CNAMEs for our data collection
s.trackingServer="info.telstra.com.au";
s.trackingServerSecure="infos.telstra.com.au";

// Dallas data centre
s.dc="122";

// Capture User Data String in eVar73.
function s_readCookie(cookieName) {

  var adb_cookie = decodeURIComponent(_satellite.readCookie(cookieName));
    //delete the old legacy cookie
    if (/;exp=(.{13})/.test(adb_cookie)){
      _satellite.removeCookie(cookieName);
      adb_cookie ="";
    }
  return adb_cookie === "undefined" ? "" : adb_cookie;
}

function s_setCookie(cookieName, value) {

  _satellite.setCookie(cookieName,encodeURIComponent(value),0.5); //set cookie for 12h
}
var s_userDataCookie = "";
try {
  s_userDataCookie = s_readCookie('s_c20');
}
catch(err) {}

if (s_userDataCookie.length > 0) {
    s.eVar73 = s_userDataCookie;
  var cnValue = /;cn=(.{16});/.test(s_userDataCookie) ? s_userDataCookie.match(/;cn=(.{16});/,';').pop() : "";
    s.contextData['s_userDataCookie'] = cnValue;
    //addCustID(cnValue);
  // Add to eVar77?
  //console.log('kamal: cookie existed cookie val=' + extraAdCallInfo);
} else if (typeof extraAdCallInfo == 'string' && extraAdCallInfo.length > 0) {
  s_setCookie('s_c20', extraAdCallInfo);
  s.eVar73 = extraAdCallInfo;
  var cnValue = /;cn=(.{16});/.test(extraAdCallInfo) ? extraAdCallInfo.match(/;cn=(.{16});/,';').pop() : "";
  s.contextData['s_userDataCookie'] = cnValue;
  //addCustID(cnValue);
  // Add to eVar77?
}
function addCustID(custId){
  if (typeof custId != 'undefined' && custId != "" && typeof visitor != 'undefined' && typeof visitor.setCustomerIDs != 'undefined') {
    visitor.setCustomerIDs({
      "telstra_hash_id_v77":{
        "id":custId,
        "authState":0
      }
    });
  }
}
// AAM Integration (DIL)
// -- removed
/////////////////////////////////
function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableScriptAttachment=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?
a.instance.api.getEventCallConfigParams():{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}
"function"!==typeof window.DIL&&(window.DIL=function(a,c){var e=[],b,h;a!==Object(a)&&(a={});var g,k,q,m,r,n,x,E,t,A,L,B,C,F;g=a.partner;k=a.containerNSID;q=!!a.disableDestinationPublishingIframe;m=a.iframeAkamaiHTTPS;r=a.mappings;n=a.uuidCookie;x=!0===a.enableErrorReporting;E=a.visitorService;t=a.declaredId;A=!0===a.removeFinishedScriptsAndCallbacks;L=!0===a.delayAllUntilWindowLoad;B=!0===a.disableIDSyncs;C="undefined"===typeof a.secureDataCollection||!0===a.secureDataCollection;F=!0===a.useCORSOnly;
var M,N,I,G,O,P,Q,R;M=!0===a.disableScriptAttachment;N=!0===a.disableDefaultRequest;I=a.afterResultForDefaultRequest;G=a.dpIframeSrc;O=!0===a.testCORS;P=!0===a.useJSONPOnly;Q=a.visitorConstructor;R=!0===a.disableCORS;x&&DIL.errorModule.activate();var T=!0===window._dil_unit_tests;(b=c)&&e.push(b+"");if(!g||"string"!==typeof g)return b="DIL partner is invalid or not specified in initConfig",DIL.errorModule.handleError({name:"error",message:b,filename:"dil.js"}),Error(b);b="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0";
if(k||"number"===typeof k)k=parseInt(k,10),!isNaN(k)&&0<=k&&(b="");b&&(k=0,e.push(b),b="");h=DIL.getDil(g,k);if(h instanceof DIL&&h.api.getPartner()===g&&h.api.getContainerNSID()===k)return h;if(this instanceof DIL)DIL.registerDil(this,g,k);else return new DIL(a,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+g+" and containerNSID = "+k);var y={IS_HTTPS:C||"https:"===document.location.protocol,POST_MESSAGE_ENABLED:!!window.postMessage,COOKIE_MAX_EXPIRATION_DATE:"Tue, 19 Jan 2038 03:14:07 UTC",
MILLIS_PER_DAY:864E5,DIL_COOKIE_NAME:"AAMC_"+encodeURIComponent(g)+"_"+k,FIRST_PARTY_SYNCS:"AMSYNCS",FIRST_PARTY_SYNCS_ON_PAGE:"AMSYNCSOP"},J={stuffed:{}},v={},p={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},callbackPrefix:"demdexRequestCallback",firstRequestHasFired:!1,useJSONP:!0,abortRequests:!1,num_of_jsonp_responses:0,num_of_jsonp_errors:0,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],
num_of_img_responses:0,num_of_img_errors:0,toRemove:[],removed:[],readyToRemove:!1,platformParams:{d_nsid:k+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:2E3,calledBack:!1,mid:null,noVisitorAPI:!1,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(d){try{if(!this.admsProcessingStarted){this.admsProcessingStarted=
!0;var l=this,s,f,a,b;if("function"===typeof d&&"function"===typeof d.getInstance){if(E===Object(E)&&(s=E.namespace)&&"string"===typeof s)f=d.getInstance(s,{idSyncContainerID:k});else{this.releaseType="no namespace";this.releaseRequests();return}if(f===Object(f)&&f instanceof d&&"function"===typeof f.isAllowed&&"function"===typeof f.getMarketingCloudVisitorID&&"function"===typeof f.getCustomerIDs&&"function"===typeof f.isOptedOut){this.VisitorAPI=d;if(!f.isAllowed()){this.releaseType="VisitorAPI not allowed";
this.releaseRequests();return}this.instance=f;a=function(d){"VisitorAPI"!==l.releaseType&&(l.mid=d,l.releaseType="VisitorAPI",l.releaseRequests())};b=f.getMarketingCloudVisitorID(a);if("string"===typeof b&&b.length){a(b);return}setTimeout(function(){"VisitorAPI"!==l.releaseType&&(l.releaseType="timeout",l.releaseRequests())},this.getLoadTimeout());return}this.releaseType="invalid instance"}else this.noVisitorAPI=!0;this.releaseRequests()}}catch(e){this.releaseRequests()}},releaseRequests:function(){this.calledBack=
!0;p.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var d=w.isPopulatedString,l=this.getMarketingCloudVisitorID();d(this.mid)&&this.mid===l||(this.mid=l);return d(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(d){if(d===Object(d)){var l="",s=[],f=[],a,b;for(a in d)d.hasOwnProperty(a)&&
(f[0]=a,b=d[a],b===Object(b)&&(f[1]=b.id||"",f[2]=b.authState||0,s.push(f),f=[]));if(f=s.length)for(d=0;d<f;d++)l+="&d_cid_ic="+u.encodeAndBuildRequest(s[d],"%01");return l}return""},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(d){this.isOptedOut=d;this.isOptedOutCallbackCalled=!0;p.registerRequest()},getLoadTimeout:function(){var d=
this.instance;if(d){if("function"===typeof d.getLoadTimeout)return d.getLoadTimeout();if("undefined"!==typeof d.loadTimeout)return d.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(d,l){var s=w.isPopulatedString,f=encodeURIComponent;if(d===Object(d)&&s(l)){var a=d.dpid,b=d.dpuuid,e=null;if(s(a)&&s(b)){e=f(a)+"$"+f(b);if(!0===this.declaredIdCombos[e])return"setDeclaredId: combo exists for type '"+
l+"'";this.declaredIdCombos[e]=!0;this.declaredId[l]={dpid:a,dpuuid:b};return"setDeclaredId: succeeded for type '"+l+"'"}}return"setDeclaredId: failed for type '"+l+"'"},getDeclaredIdQueryString:function(){var d=this.declaredId.request,l=this.declaredId.init,a=encodeURIComponent,f="";null!==d?f="&d_dpid="+a(d.dpid)+"&d_dpuuid="+a(d.dpuuid):null!==l&&(f="&d_dpid="+a(l.dpid)+"&d_dpuuid="+a(l.dpuuid));return f}},registerRequest:function(d){var l=this.firingQueue;d===Object(d)&&l.push(d);this.firing||
!l.length||L&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(this.adms.isOptedOutCallbackCalled=!1,d=l.shift(),d.src=d.src.replace(/demdex.net\/event\?d_nsid=/,"demdex.net/event?"+this.adms.getMIDQueryString()+"d_nsid="),w.isPopulatedString(d.corsPostData)&&(d.corsPostData=d.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+"d_nsid=")),D.fireRequest(d),this.firstRequestHasFired||
"script"!==d.tag&&"cors"!==d.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(Q||window.Visitor)},requestRemoval:function(d){if(!A)return"removeFinishedScriptsAndCallbacks is not boolean true";var l=this.toRemove,a,f;d===Object(d)&&(a=d.script,f=d.callbackName,(a===Object(a)&&"SCRIPT"===a.nodeName||"no script created"===a)&&"string"===typeof f&&f.length&&l.push(d));if(this.readyToRemove&&l.length){f=l.shift();a=f.script;f=f.callbackName;"no script created"!==a?
(d=a.src,a.parentNode.removeChild(a)):d=a;window[f]=null;try{delete window[f]}catch(b){}this.removed.push({scriptSrc:d,callbackName:f});DIL.variables.scriptsRemoved.push(d);DIL.variables.callbacksRemoved.push(f);return this.requestRemoval()}return"requestRemoval() processed"}};h=function(){var d="http://fast.",l="?d_nsid="+k+"#"+encodeURIComponent(document.location.href);if("string"===typeof G&&G.length)return G+l;y.IS_HTTPS&&(d=!0===m?"https://fast.":"https://");return d+g+".demdex.net/dest5.html"+
l};var z={THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:"destination_publishing_iframe_"+g+"_"+k,url:h(),onPagePixels:[],iframeHost:null,getIframeHost:function(d){if("string"===typeof d){var l=d.split("/");if(3<=l.length)return l[0]+"//"+l[2];e.push("getIframeHost: url is malformed: "+d);return d}},iframe:null,iframeHasLoaded:!1,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:y.POST_MESSAGE_ENABLED?15:100,ibsDeleted:[],jsonWaiting:[],jsonProcessed:[],
canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,newIframeCreated:null,iframeIdChanged:!1,originalIframeHasLoadedAlready:null,attachIframe:function(){function d(){f=document.createElement("iframe");f.sandbox="allow-scripts allow-same-origin";f.title="Adobe ID Syncing iFrame";f.id=a.id;f.style.cssText="display: none; width: 0; height: 0;";f.src=a.url;a.newIframeCreated=!0;l();document.body.appendChild(f)}function l(){u.addListener(f,"load",function(){f.className="aamIframeLoaded";
a.iframeHasLoaded=!0;a.requestToProcess()})}var a=this,f=document.getElementById(this.id);f?"IFRAME"!==f.nodeName?(this.id+="_2",this.iframeIdChanged=!0,d()):(this.newIframeCreated=!1,"aamIframeLoaded"!==f.className?(this.originalIframeHasLoadedAlready=!1,l()):(this.iframeHasLoaded=this.originalIframeHasLoadedAlready=!0,this.iframe=f,this.requestToProcess())):d();this.iframe=f},requestToProcess:function(d,l){var a=this;d&&!w.isEmptyObject(d)&&this.jsonWaiting.push([d,l]);if((this.receivedThirdPartyCookiesNotification||
!y.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var f=this.jsonWaiting.shift();this.process(f[0],f[1]);this.requestToProcess()}this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){a.messageSendingInterval=y.POST_MESSAGE_ENABLED?15:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},processSyncOnPage:function(d){var l,a,f;if((l=d.ibs)&&l instanceof Array&&(a=l.length))for(d=
0;d<a;d++)f=l[d],f.syncOnPage&&this.checkFirstPartyCookie(f,"","syncOnPage")},process:function(d,l){var a=encodeURIComponent,f,b,e,c,g,h;l===Object(l)&&(h=u.encodeAndBuildRequest(["",l.dpid||"",l.dpuuid||""],","));if((f=d.dests)&&f instanceof Array&&(b=f.length))for(e=0;e<b;e++)c=f[e],g=[a("dests"),a(c.id||""),a(c.y||""),a(c.c||"")],this.addMessage(g.join("|"));if((f=d.ibs)&&f instanceof Array&&(b=f.length))for(e=0;e<b;e++)c=f[e],g=[a("ibs"),a(c.id||""),a(c.tag||""),u.encodeAndBuildRequest(c.url||
[],","),a(c.ttl||""),"",h,c.fireURLSync?"true":"false"],c.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(g.join("|")):c.fireURLSync&&this.checkFirstPartyCookie(c,g.join("|")));if((f=d.dpcalls)&&f instanceof Array&&(b=f.length))for(e=0;e<b;e++)c=f[e],g=c.callback||{},g=[g.obj||"",g.fn||"",g.key||"",g.tag||"",g.url||""],g=[a("dpm"),a(c.id||""),a(c.tag||""),u.encodeAndBuildRequest(c.url||[],","),a(c.ttl||""),u.encodeAndBuildRequest(g,","),h],this.addMessage(g.join("|"));this.jsonProcessed.push(d)},
checkFirstPartyCookie:function(d,a,s){var f=(s="syncOnPage"===s?!0:!1)?y.FIRST_PARTY_SYNCS_ON_PAGE:y.FIRST_PARTY_SYNCS,b=this.getOnPageSyncData(f),c=!1,e=!1,g=Math.ceil((new Date).getTime()/y.MILLIS_PER_DAY);b?(b=b.split("*"),e=this.pruneSyncData(b,d.id,g),c=e.dataPresent,e=e.dataValid,c&&e||this.fireSync(s,d,a,b,f,g)):(b=[],this.fireSync(s,d,a,b,f,g))},getOnPageSyncData:function(d){var a=p.adms.instance;return a&&"function"===typeof a.idSyncGetOnPageSyncInfo?a.idSyncGetOnPageSyncInfo():u.getDilCookieField(d)},
pruneSyncData:function(d,a,b){var f=!1,e=!1,c,g,h;if(d instanceof Array)for(g=0;g<d.length;g++)c=d[g],h=parseInt(c.split("-")[1],10),c.match("^"+a+"-")?(f=!0,b<h?e=!0:(d.splice(g,1),g--)):b>=h&&(d.splice(g,1),g--);return{dataPresent:f,dataValid:e}},manageSyncsSize:function(d){if(d.join("*").length>this.MAX_SYNCS_LENGTH)for(d.sort(function(d,a){return parseInt(d.split("-")[1],10)-parseInt(a.split("-")[1],10)});d.join("*").length>this.MAX_SYNCS_LENGTH;)d.shift()},fireSync:function(d,a,b,f,e,c){function g(d,
a,l,f){return function(){h.onPagePixels[d]=null;var b=h.getOnPageSyncData(l),e=[];if(b){var b=b.split("*"),c,s,g;c=0;for(s=b.length;c<s;c++)g=b[c],g.match("^"+a.id+"-")||e.push(g)}h.setSyncTrackingData(e,a,l,f)}}var h=this;if(d){if("img"===a.tag){d=a.url;b=y.IS_HTTPS?"https:":"http:";var k,n,t;f=0;for(k=d.length;f<k;f++){n=d[f];t=/^\/\//.test(n);var p=new Image;u.addListener(p,"load",g(this.onPagePixels.length,a,e,c));p.src=(t?b:"")+n;this.onPagePixels.push(p)}}}else this.addMessage(b),this.setSyncTrackingData(f,
a,e,c)},addMessage:function(d){var a=encodeURIComponent,a=x?a("---destpub-debug---"):a("---destpub---");this.messages.push(a+d)},setSyncTrackingData:function(d,a,b,f){d.push(a.id+"-"+(f+Math.ceil(a.ttl/60/24)));this.manageSyncsSize(d);u.setDilCookieField(b,d.join("*"))},sendMessages:function(){var d=this,a;this.messages.length?(a=this.messages.shift(),DIL.xd.postMessage(a,this.url,this.iframe.contentWindow),this.messagesPosted.push(a),setTimeout(function(){d.sendMessages()},this.messageSendingInterval)):
this.sendingMessages=!1},receiveMessage:function(d){var a=/^---destpub-to-parent---/;"string"===typeof d&&a.test(d)&&(a=d.replace(a,"").split("|"),"canSetThirdPartyCookies"===a[0]&&(this.canSetThirdPartyCookies="true"===a[1]?!0:!1,this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(d))}},K={traits:function(d){w.isValidPdata(d)&&(v.sids instanceof Array||(v.sids=[]),u.extendArray(v.sids,d));return this},pixels:function(d){w.isValidPdata(d)&&(v.pdata instanceof
Array||(v.pdata=[]),u.extendArray(v.pdata,d));return this},logs:function(d){w.isValidLogdata(d)&&(v.logdata!==Object(v.logdata)&&(v.logdata={}),u.extendObject(v.logdata,d));return this},customQueryParams:function(d){w.isEmptyObject(d)||u.extendObject(v,d,p.reservedKeys);return this},signals:function(d,a){var b,f=d;if(!w.isEmptyObject(f)){if(a&&"string"===typeof a)for(b in f={},d)d.hasOwnProperty(b)&&(f[a+b]=d[b]);u.extendObject(v,f,p.reservedKeys)}return this},declaredId:function(d){p.declaredId.setDeclaredId(d,
"request");return this},result:function(d){"function"===typeof d&&(v.callback=d);return this},afterResult:function(d){"function"===typeof d&&(v.postCallbackFn=d);return this},useImageRequest:function(){v.useImageRequest=!0;return this},clearData:function(){v={};return this},submit:function(){D.submitRequest(v);v={};return this},getPartner:function(){return g},getContainerNSID:function(){return k},getEventLog:function(){return e},getState:function(){var d={},l={};u.extendObject(d,p,{callbackPrefix:!0,
useJSONP:!0,registerRequest:!0});u.extendObject(l,z,{attachIframe:!0,requestToProcess:!0,process:!0,sendMessages:!0});return{initConfig:a,pendingRequest:v,otherRequestInfo:d,destinationPublishingInfo:l}},idSync:function(d){if(B)return"Error: id syncs have been disabled";if(d!==Object(d)||"string"!==typeof d.dpid||!d.dpid.length)return"Error: config or config.dpid is empty";if("string"!==typeof d.url||!d.url.length)return"Error: config.url is empty";var a=d.url,b=d.minutesToLive,f=encodeURIComponent,
c,a=a.replace(/^https:/,"").replace(/^http:/,"");if("undefined"===typeof b)b=20160;else if(b=parseInt(b,10),isNaN(b)||0>=b)return"Error: config.minutesToLive needs to be a positive number";c=u.encodeAndBuildRequest(["",d.dpid,d.dpuuid||""],",");d=["ibs",f(d.dpid),"img",f(a),b,"",c];z.addMessage(d.join("|"));p.firstRequestHasFired&&z.requestToProcess();return"Successfully queued"},aamIdSync:function(d){if(B)return"Error: id syncs have been disabled";if(d!==Object(d)||"string"!==typeof d.dpuuid||!d.dpuuid.length)return"Error: config or config.dpuuid is empty";
d.url="//dpm.demdex.net/ibs:dpid="+d.dpid+"&dpuuid="+d.dpuuid;return this.idSync(d)},passData:function(d){if(w.isEmptyObject(d))return"Error: json is empty or not an object";z.ibsDeleted.push(d.ibs);delete d.ibs;D.defaultCallback(d);return d},getPlatformParams:function(){return p.platformParams},getEventCallConfigParams:function(){var d=p,a=d.modStatsParams,b=d.platformParams,f;if(!a){a={};for(f in b)b.hasOwnProperty(f)&&!d.nonModStatsParams[f]&&(a[f.replace(/^d_/,"")]=b[f]);d.modStatsParams=a}return a}},
D={corsMetadata:function(){var d="none",a=!0;"undefined"!==typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?d="XMLHttpRequest":(new Function("/*@cc_on return /^10/.test(@_jscript_version) @*/"))()?d="XMLHttpRequest":"undefined"!==typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(a=!1),0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")&&(a=!1));return{corsType:d,corsCookiesEnabled:a}}(),getCORSInstance:function(){return"none"===
this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(d){p.registerRequest(D.createQueuedRequest(d));return!0},createQueuedRequest:function(d){var a=p,b,f=d.callback,c="img",e;if(!w.isEmptyObject(r)){var g,h,n;for(g in r)r.hasOwnProperty(g)&&(h=r[g],null!=h&&""!==h&&g in d&&!(h in d||h in p.reservedKeys)&&(n=d[g],null!=n&&""!==n&&(d[h]=n)))}w.isValidPdata(d.sids)||(d.sids=[]);w.isValidPdata(d.pdata)||(d.pdata=[]);w.isValidLogdata(d.logdata)||(d.logdata={});
d.logdataArray=u.convertObjectToKeyValuePairs(d.logdata,"=",!0);d.logdataArray.push("_ts="+(new Date).getTime());"function"!==typeof f&&(f=this.defaultCallback);a.useJSONP=!0!==d.useImageRequest;a.useJSONP&&(c="script",b=a.callbackPrefix+"_"+k+"_"+(new Date).getTime());a=this.makeRequestSrcData(d,b);P&&!F||!(e=this.getCORSInstance())||(c="cors");return{tag:c,src:a.src,corsSrc:a.corsSrc,internalCallbackName:b,callbackFn:f,postCallbackFn:d.postCallbackFn,useImageRequest:!!d.useImageRequest,requestData:d,
corsInstance:e,corsPostData:a.corsPostData}},defaultCallback:function(d,a){z.processSyncOnPage(d);var b,f,c,e,g,h,k,t,x;if((b=d.stuff)&&b instanceof Array&&(f=b.length))for(c=0;c<f;c++)if((e=b[c])&&e===Object(e)){g=e.cn;h=e.cv;k=e.ttl;if("undefined"===typeof k||""===k)k=Math.floor(u.getMaxCookieExpiresInMinutes()/60/24);t=e.dmn||"."+document.domain.replace(/^www\./,"");x=e.type;g&&(h||"number"===typeof h)&&("var"!==x&&(k=parseInt(k,10))&&!isNaN(k)&&u.setCookie(g,h,1440*k,"/",t,!1),J.stuffed[g]=h)}b=
d.uuid;w.isPopulatedString(b)&&!w.isEmptyObject(n)&&(f=n.path,"string"===typeof f&&f.length||(f="/"),c=parseInt(n.days,10),isNaN(c)&&(c=100),u.setCookie(n.name||"aam_did",b,1440*c,f,n.domain||"."+document.domain.replace(/^www\./,""),!0===n.secure));q||p.abortRequests||z.requestToProcess(d,a)},makeRequestSrcData:function(d,a){d.sids=w.removeEmptyArrayValues(d.sids||[]);d.pdata=w.removeEmptyArrayValues(d.pdata||[]);var b=p,f=b.platformParams,c=u.encodeAndBuildRequest(d.sids,","),e=u.encodeAndBuildRequest(d.pdata,
","),h=(d.logdataArray||[]).join("&");delete d.logdataArray;var n=y.IS_HTTPS?"https://":"http://",t=b.declaredId.getDeclaredIdQueryString(),x=b.adms.instance?b.adms.getCustomerIDsQueryString(b.adms.getCustomerIDs()):"",m;m=[];var r,q,v,A;for(r in d)if(!(r in b.reservedKeys)&&d.hasOwnProperty(r))if(q=d[r],r=encodeURIComponent(r),q instanceof Array)for(v=0,A=q.length;v<A;v++)m.push(r+"="+encodeURIComponent(q[v]));else m.push(r+"="+encodeURIComponent(q));m=m.length?"&"+m.join("&"):"";c="d_nsid="+f.d_nsid+
t+x+(c.length?"&d_sid="+c:"")+(e.length?"&d_px="+e:"")+(h.length?"&d_ld="+encodeURIComponent(h):"");f="&d_rtbd="+f.d_rtbd+"&d_jsonv="+f.d_jsonv+"&d_dst="+f.d_dst;n=n+g+".demdex.net/event";e=b=n+"?"+c+(b.useJSONP?f+"&d_cb="+(a||""):"")+m;2048<b.length&&(b=b.substring(0,2048).substring(0,b.lastIndexOf("&")));return{corsSrc:n+"?"+(O?"testcors=1&d_nsid="+k+"&":"")+"_ts="+(new Date).getTime(),src:b,originalSrc:e,corsPostData:c+f+m,isDeclaredIdCall:""!==t}},fireRequest:function(d){if("img"===d.tag)this.fireImage(d);
else{var a=p.declaredId,a=a.declaredId.request||a.declaredId.init||{},a={dpid:a.dpid||"",dpuuid:a.dpuuid||""};"script"===d.tag?this.fireScript(d,a):"cors"===d.tag&&this.fireCORS(d,a)}},fireImage:function(d){var a=p,c,f;a.abortRequests||(a.firing=!0,c=new Image(0,0),a.sent.push(d),c.onload=function(){a.firing=!1;a.fired.push(d);a.num_of_img_responses++;a.registerRequest()},f=function(f){b="imgAbortOrErrorHandler received the event of type "+f.type;e.push(b);a.abortRequests=!0;a.firing=!1;a.errored.push(d);
a.num_of_img_errors++;a.registerRequest()},c.addEventListener?(c.addEventListener("error",f,!1),c.addEventListener("abort",f,!1)):c.attachEvent&&(c.attachEvent("onerror",f),c.attachEvent("onabort",f)),c.src=d.src)},fireScript:function(d,a){var c=this,f=p,h,k,n=d.src,t=d.postCallbackFn,m="function"===typeof t,r=d.internalCallbackName;f.abortRequests||(f.firing=!0,window[r]=function(c){try{c!==Object(c)&&(c={});B&&(z.ibsDeleted.push(c.ibs),delete c.ibs);var h=d.callbackFn;f.firing=!1;f.fired.push(d);
f.num_of_jsonp_responses++;h(c,a);m&&t(c,a)}catch(s){s.message="DIL jsonp callback caught error with message "+s.message;b=s.message;e.push(b);s.filename=s.filename||"dil.js";s.partner=g;DIL.errorModule.handleError(s);try{h({error:s.name+"|"+s.message},a),m&&t({error:s.name+"|"+s.message},a)}catch(n){}}finally{f.requestRemoval({script:k,callbackName:r}),f.registerRequest()}},M||F?(f.firing=!1,f.requestRemoval({script:"no script created",callbackName:r})):(k=document.createElement("script"),k.addEventListener&&
k.addEventListener("error",function(a){f.requestRemoval({script:k,callbackName:r});b="jsonp script tag error listener received the event of type "+a.type+" with src "+n;c.handleScriptError(b,d)},!1),k.type="text/javascript",k.src=n,h=DIL.variables.scriptNodeList[0],h.parentNode.insertBefore(k,h)),f.sent.push(d),f.declaredId.declaredId.request=null)},fireCORS:function(d,a){var c=this,f=p,h=this.corsMetadata.corsType,k=d.corsSrc,n=d.corsInstance,t=d.corsPostData,r=d.postCallbackFn,m="function"===typeof r;
if(!f.abortRequests&&!R){f.firing=!0;try{n.open("post",k,!0),"XMLHttpRequest"===h&&(n.withCredentials=!0,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){if(4===this.readyState&&200===this.status)a:{var h;try{if(h=JSON.parse(this.responseText),h!==Object(h)){c.handleCORSError(d,a,"Response is not JSON");break a}}catch(k){c.handleCORSError(d,a,"Error parsing response as JSON");break a}B&&(z.ibsDeleted.push(h.ibs),delete h.ibs);try{var n=d.callbackFn;
f.firing=!1;f.fired.push(d);f.num_of_cors_responses++;n(h,a);m&&r(h,a)}catch(t){t.message="DIL handleCORSResponse caught error with message "+t.message;b=t.message;e.push(b);t.filename=t.filename||"dil.js";t.partner=g;DIL.errorModule.handleError(t);try{n({error:t.name+"|"+t.message},a),m&&r({error:t.name+"|"+t.message},a)}catch(x){}}finally{f.registerRequest()}}}),n.onerror=function(){c.handleCORSError(d,a,"onerror")},n.ontimeout=function(){c.handleCORSError(d,a,"ontimeout")},n.send(t)}catch(x){this.handleCORSError(d,
a,"try-catch")}f.sent.push(d);f.declaredId.declaredId.request=null}},handleCORSError:function(d,a,b){p.num_of_cors_errors++;p.corsErrorSources.push(b);"ontimeout"===b||F||(d.tag="script",this.fireScript(d,a))},handleScriptError:function(d,a){p.num_of_jsonp_errors++;this.handleRequestError(d,a)},handleRequestError:function(d,a){var b=p;e.push(d);b.abortRequests=!0;b.firing=!1;b.errored.push(a);b.registerRequest()}},w={isValidPdata:function(a){return a instanceof Array&&this.removeEmptyArrayValues(a).length?
!0:!1},isValidLogdata:function(a){return!this.isEmptyObject(a)},isEmptyObject:function(a){if(a!==Object(a))return!0;for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},removeEmptyArrayValues:function(a){for(var b=0,c=a.length,f,e=[],b=0;b<c;b++)f=a[b],"undefined"!==typeof f&&null!==f&&""!==f&&e.push(f);return e},isPopulatedString:function(a){return"string"===typeof a&&a.length}},u={addListener:function(){if(document.addEventListener)return function(a,b,c){a.addEventListener(b,function(a){"function"===
typeof c&&c(a)},!1)};if(document.attachEvent)return function(a,b,c){a.attachEvent("on"+b,function(a){"function"===typeof c&&c(a)})}}(),convertObjectToKeyValuePairs:function(a,b,c){var f=[],e,g;b||(b="=");for(e in a)a.hasOwnProperty(e)&&(g=a[e],"undefined"!==typeof g&&null!==g&&""!==g&&f.push(e+b+(c?encodeURIComponent(g):g)));return f},encodeAndBuildRequest:function(a,b){return this.map(a,function(a){return encodeURIComponent(a)}).join(b)},map:function(a,b){if(Array.prototype.map)return a.map(b);if(void 0===
a||null===a)throw new TypeError;var c=Object(a),f=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=Array(f),g=0;g<f;g++)g in c&&(e[g]=b.call(b,c[g],g,c));return e},filter:function(a,b){if(!Array.prototype.filter){if(void 0===a||null===a)throw new TypeError;var c=Object(a),f=c.length>>>0;if("function"!==typeof b)throw new TypeError;for(var e=[],g=0;g<f;g++)if(g in c){var h=c[g];b.call(b,h,g,c)&&e.push(h)}return e}return a.filter(b)},getCookie:function(a){a+="=";var b=document.cookie.split(";"),
c,f,e;c=0;for(f=b.length;c<f;c++){for(e=b[c];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(a))return decodeURIComponent(e.substring(a.length,e.length))}return null},setCookie:function(a,b,c,f,e,g){var h=new Date;c&&(c*=6E4);document.cookie=a+"="+encodeURIComponent(b)+(c?";expires="+(new Date(h.getTime()+c)).toUTCString():"")+(f?";path="+f:"")+(e?";domain="+e:"")+(g?";secure":"")},extendArray:function(a,b){return a instanceof Array&&b instanceof Array?(Array.prototype.push.apply(a,
b),!0):!1},extendObject:function(a,b,c){var f;if(a===Object(a)&&b===Object(b)){for(f in b)!b.hasOwnProperty(f)||!w.isEmptyObject(c)&&f in c||(a[f]=b[f]);return!0}return!1},getMaxCookieExpiresInMinutes:function(){return((new Date(y.COOKIE_MAX_EXPIRATION_DATE)).getTime()-(new Date).getTime())/1E3/60},getCookieField:function(a,b){var c=this.getCookie(a),f=decodeURIComponent;if("string"===typeof c){var c=c.split("|"),e,g;e=0;for(g=c.length-1;e<g;e++)if(f(c[e])===b)return f(c[e+1])}return null},getDilCookieField:function(a){return this.getCookieField(y.DIL_COOKIE_NAME,
a)},setCookieField:function(a,b,c){var e=this.getCookie(a),g=!1,h=encodeURIComponent;b=h(b);c=h(c);if("string"===typeof e){var e=e.split("|"),k,h=0;for(k=e.length-1;h<k;h++)if(e[h]===b){e[h+1]=c;g=!0;break}g||(h=e.length,e[h]=b,e[h+1]=c)}else e=[b,c];this.setCookie(a,e.join("|"),this.getMaxCookieExpiresInMinutes(),"/",this.getDomain(),!1)},setDilCookieField:function(a,b){return this.setCookieField(y.DIL_COOKIE_NAME,a,b)},getDomain:function(a){!a&&window.location&&(a=window.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a=
"";else{var b=a.split("."),c=b.length-1,e=c-1;1<c&&2>=b[c].length&&(2===b[c-1].length||0>",DOMAIN_2_CHAR_EXCEPTIONS,".indexOf(","+b[c]+","))&&e--;if(0<e)for(a="";c>=e;)a=b[c]+(a?".":"")+a,c--}return a}};"error"===g&&0===k&&u.addListener(window,"load",function(){DIL.windowLoaded=!0});var S=!1,H=function(){S||(S=!0,p.registerRequest(),U(),q||p.abortRequests||z.attachIframe(),p.readyToRemove=!0,p.requestRemoval())},U=function(){q||setTimeout(function(){N||p.firstRequestHasFired||("function"===typeof I?
K.afterResult(I).submit():K.submit())},DIL.constants.TIME_TO_DEFAULT_REQUEST)};C=document;"error"!==g&&(DIL.windowLoaded?H():"complete"!==C.readyState&&"loaded"!==C.readyState?u.addListener(window,"load",function(){DIL.windowLoaded=!0;H()}):(DIL.windowLoaded=!0,H()));if("error"!==g)try{DIL.xd.receiveMessage(function(a){z.receiveMessage(a.data)},z.getIframeHost(z.url))}catch(V){}p.declaredId.setDeclaredId(t,"init");p.processVisitorAPI();this.api=K;this.getStuffedVariable=function(a){var b=J.stuffed[a];
b||"number"===typeof b||(b=u.getCookie(a))||"number"===typeof b||(b="");return b};this.validators=w;this.helpers=u;this.constants=y;this.log=e;T&&(this.pendingRequest=v,this.requestController=p,this.setDestinationPublishingUrl=h,this.destinationPublishing=z,this.requestProcs=D,this.variables=J,this.callWindowLoadFunctions=H)},function(){var a=document,c;null==a.readyState&&a.addEventListener&&(a.readyState="loading",a.addEventListener("DOMContentLoaded",c=function(){a.removeEventListener("DOMContentLoaded",
c,!1);a.readyState="complete"},!1))}(),DIL.extendStaticPropertiesAndMethods=function(a){var c;if(a===Object(a))for(c in a)a.hasOwnProperty(c)&&(this[c]=a[c])},DIL.extendStaticPropertiesAndMethods({version:"6.9",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:50},variables:{scriptNodeList:document.getElementsByTagName("script"),scriptsRemoved:[],callbacksRemoved:[]},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(a){this.windowLoaded="function"===typeof a?!!a():"boolean"===typeof a?a:!0},create:function(a){try{return new DIL(a)}catch(c){throw Error("Error in attempt to create DIL instance with DIL.create(): "+
c.message);}},registerDil:function(a,c,e){c=c+"$"+e;c in this.dils||(this.dils[c]=a)},getDil:function(a,c){var e;"string"!==typeof a&&(a="");c||(c=0);e=a+"$"+c;return e in this.dils?this.dils[e]:Error("The DIL instance with partner = "+a+" and containerNSID = "+c+" was not found")},dexGetQSVars:function(a,c,e){c=this.getDil(c,e);return c instanceof this?c.getStuffedVariable(a):""},xd:{postMessage:function(a,c,e){var b=1;c&&(window.postMessage?e.postMessage(a,c.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):
c&&(e.location=c.replace(/#.*$/,"")+"#"+ +new Date+b++ +"&"+a))},receiveMessage:function(a,c){var e;try{if(window.postMessage)if(a&&(e=function(b){if("string"===typeof c&&b.origin!==c||"[object Function]"===Object.prototype.toString.call(c)&&!1===c(b.origin))return!1;a(b)}),window.addEventListener)window[a?"addEventListener":"removeEventListener"]("message",e,!1);else window[a?"attachEvent":"detachEvent"]("onmessage",e)}catch(b){}}}}),DIL.errorModule=function(){var a=DIL.create({partner:"error",containerNSID:0,
disableDestinationPublishingIframe:!0}),c={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020},e=!1;return{activate:function(){e=!0},handleError:function(b){if(!e)return"DIL error module has not been activated";b!==Object(b)&&(b={});var h=b.name?(b.name+"").toLowerCase():"",g=[];b={name:h,filename:b.filename?b.filename+"":"",partner:b.partner?b.partner+"":
"no_partner",site:b.site?b.site+"":document.location.href,message:b.message?b.message+"":""};g.push(h in c?c[h]:c.noerrortypedefined);a.api.pixels(g).logs(b).useImageRequest().submit();return"DIL error report sent"},pixelMap:c}}(),DIL.tools={},DIL.modules={helpers:{handleModuleError:function(a,c,e){var b="";c=c||"Error caught in DIL module/submodule: ";a===Object(a)?b=c+(a.message||"err has no message"):(b=c+"err is not a valid object",a={});a.message=b;e instanceof DIL&&(a.partner=e.api.getPartner());
DIL.errorModule.handleError(a);return this.errorMessage=b}}});
DIL.tools.getSearchReferrer=function(a,c){var e=DIL.getDil("error"),b=DIL.tools.decomposeURI(a||document.referrer),h="",g="",k={queryParam:"q"};return(h=e.helpers.filter([c===Object(c)?c:{},{hostPattern:/aol\./},{hostPattern:/ask\./},{hostPattern:/bing\./},{hostPattern:/google\./},{hostPattern:/yahoo\./,queryParam:"p"}],function(a){return!(!a.hasOwnProperty("hostPattern")||!b.hostname.match(a.hostPattern))}).shift())?{valid:!0,name:b.hostname,keywords:(e.helpers.extendObject(k,h),g=k.queryPattern?
(h=(""+b.search).match(k.queryPattern))?h[1]:"":b.uriParams[k.queryParam],decodeURIComponent(g||"").replace(/\+|%20/g," "))}:{valid:!1,name:"",keywords:""}};
DIL.tools.decomposeURI=function(a){var c=DIL.getDil("error"),e=document.createElement("a");e.href=a||document.referrer;return{hash:e.hash,host:e.host.split(":").shift(),hostname:e.hostname,href:e.href,pathname:e.pathname.replace(/^\//,""),protocol:e.protocol,search:e.search,uriParams:function(a,e){c.helpers.map(e.split("&"),function(c){c=c.split("=");a[c.shift()]=c.shift()});return a}({},e.search.replace(/^(\/|\?)?|\/$/g,""))}};
DIL.tools.getMetaTags=function(){var a={},c=document.getElementsByTagName("meta"),e,b,h,g,k;e=0;for(h=arguments.length;e<h;e++)if(g=arguments[e],null!==g)for(b=0;b<c.length;b++)if(k=c[b],k.name===g){a[g]=k.content;break}return a};
DIL.modules.siteCatalyst={dil:null,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e,b){try{var h=this,g={name:"DIL Site Catalyst Module Error"},k=function(a){g.message=a;DIL.errorModule.handleError(g);return a};this.options=b===Object(b)?b:{};this.dil=null;if(c instanceof DIL)this.dil=c;else return k("dilInstance is not a valid instance of DIL");g.partner=c.api.getPartner();if(a!==Object(a))return k("siteCatalystReportingSuite is not an object");window.AppMeasurement_Module_DIL=a.m_DIL=
function(a){var b="function"===typeof a.m_i?a.m_i("DIL"):this;if(b!==Object(b))return k("m is not an object");b.trackVars=h.constructTrackVars(e);b.d=0;b.s=a;b._t=function(){var a,b,c=","+this.trackVars+",",e=this.s,g,r=[];g=[];var m={},q=!1;if(e!==Object(e))return k("Error in m._t function: s is not an object");if(this.d){if("function"===typeof e.foreachVar)e.foreachVar(function(a,b){"undefined"!==typeof b&&(m[a]=b,q=!0)},this.trackVars);else{if(!(e.va_t instanceof Array))return k("Error in m._t function: s.va_t is not an array");
if(e.lightProfileID)(a=e.lightTrackVars)&&(a=","+a+","+e.vl_mr+",");else if(e.pe||e.linkType)a=e.linkTrackVars,e.pe&&(b=e.pe.substring(0,1).toUpperCase()+e.pe.substring(1),e[b]&&(a=e[b].trackVars)),a&&(a=","+a+","+e.vl_l+","+e.vl_l2+",");if(a){b=0;for(r=a.split(",");b<r.length;b++)0<=c.indexOf(","+r[b]+",")&&g.push(r[b]);g.length&&(c=","+g.join(",")+",")}g=0;for(b=e.va_t.length;g<b;g++)a=e.va_t[g],0<=c.indexOf(","+a+",")&&"undefined"!==typeof e[a]&&null!==e[a]&&""!==e[a]&&(m[a]=e[a],q=!0)}h.includeContextData(e,
m).store_populated&&(q=!0);q&&this.d.api.signals(m,"c_").submit()}}};a.loadModule("DIL");a.DIL.d=c;return g.message?g.message:"DIL.modules.siteCatalyst.init() completed with no errors"}catch(q){return this.handle(q,"DIL.modules.siteCatalyst.init() caught error with message ",this.dil)}},constructTrackVars:function(a){var c=[],e,b,h,g,k;if(a===Object(a)){e=a.names;if(e instanceof Array&&(h=e.length))for(b=0;b<h;b++)g=e[b],"string"===typeof g&&g.length&&c.push(g);a=a.iteratedNames;if(a instanceof Array&&
(h=a.length))for(b=0;b<h;b++)if(e=a[b],e===Object(e)&&(g=e.name,k=parseInt(e.maxIndex,10),"string"===typeof g&&g.length&&!isNaN(k)&&0<=k))for(e=0;e<=k;e++)c.push(g+e);if(c.length)return c.join(",")}return this.constructTrackVars({names:"pageName channel campaign products events pe pev1 pev2 pev3".split(" "),iteratedNames:[{name:"prop",maxIndex:75},{name:"eVar",maxIndex:250}]})},includeContextData:function(a,c){var e={},b=!1;if(a.contextData===Object(a.contextData)){var h=a.contextData,g=this.options.replaceContextDataPeriodsWith,
k=this.options.filterFromContextVariables,q={},m,r,n,x;"string"===typeof g&&g.length||(g="_");if(k instanceof Array)for(m=0,r=k.length;m<r;m++)n=k[m],this.dil.validators.isPopulatedString(n)&&(q[n]=!0);for(x in h)!h.hasOwnProperty(x)||q[x]||!(k=h[x])&&"number"!==typeof k||(x=("contextData."+x).replace(/\./g,g),c[x]=k,b=!0)}e.store_populated=b;return e}};
DIL.modules.GA={submitUniversalAnalytics:function(a,c,e){try{var b=a.getAll()[0],h=b[e||"b"].data.keys;a={};var g,k,q,m;g=0;for(k=h.length;g<k;g++)q=h[g],m=b.get(q),"undefined"===typeof m||"function"===typeof m||m===Object(m)||/^_/.test(q)||/^&/.test(q)||(a[q]=m);c.api.signals(a,"c_").submit();return a}catch(r){return"Caught error with message: "+r.message}},dil:null,arr:null,tv:null,errorMessage:"",defaultTrackVars:["_setAccount","_setCustomVar","_addItem","_addTrans","_trackSocial"],defaultTrackVarsObj:null,
signals:{},hasSignals:!1,handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e){try{this.tv=this.arr=this.dil=null;this.errorMessage="";this.signals={};this.hasSignals=!1;var b={name:"DIL GA Module Error"},h="";c instanceof DIL?(this.dil=c,b.partner=this.dil.api.getPartner()):(h="dilInstance is not a valid instance of DIL",b.message=h,DIL.errorModule.handleError(b));a instanceof Array&&a.length?this.arr=a:(h="gaArray is not an array or is empty",b.message=h,DIL.errorModule.handleError(b));
this.tv=this.constructTrackVars(e);this.errorMessage=h}catch(g){this.handle(g,"DIL.modules.GA.init() caught error with message ",this.dil)}finally{return this}},constructTrackVars:function(a){var c=[],e,b,h,g;if(this.defaultTrackVarsObj!==Object(this.defaultTrackVarsObj)){h=this.defaultTrackVars;g={};e=0;for(b=h.length;e<b;e++)g[h[e]]=!0;this.defaultTrackVarsObj=g}else g=this.defaultTrackVarsObj;if(a===Object(a)){a=a.names;if(a instanceof Array&&(b=a.length))for(e=0;e<b;e++)h=a[e],"string"===typeof h&&
h.length&&h in g&&c.push(h);if(c.length)return c}return this.defaultTrackVars},constructGAObj:function(a){var c={};a=a instanceof Array?a:this.arr;var e,b,h,g;e=0;for(b=a.length;e<b;e++)h=a[e],h instanceof Array&&h.length&&(h=[],g=a[e],h instanceof Array&&g instanceof Array&&Array.prototype.push.apply(h,g),g=h.shift(),"string"===typeof g&&g.length&&(c[g]instanceof Array||(c[g]=[]),c[g].push(h)));return c},addToSignals:function(a,c){if("string"!==typeof a||""===a||null==c||""===c)return!1;this.signals[a]instanceof
Array||(this.signals[a]=[]);this.signals[a].push(c);return this.hasSignals=!0},constructSignals:function(){var a=this.constructGAObj(),c={_setAccount:function(a){this.addToSignals("c_accountId",a)},_setCustomVar:function(a,b,c){"string"===typeof b&&b.length&&this.addToSignals("c_"+b,c)},_addItem:function(a,b,c,e,g,h){this.addToSignals("c_itemOrderId",a);this.addToSignals("c_itemSku",b);this.addToSignals("c_itemName",c);this.addToSignals("c_itemCategory",e);this.addToSignals("c_itemPrice",g);this.addToSignals("c_itemQuantity",
h)},_addTrans:function(a,b,c,e,g,h,k,m){this.addToSignals("c_transOrderId",a);this.addToSignals("c_transAffiliation",b);this.addToSignals("c_transTotal",c);this.addToSignals("c_transTax",e);this.addToSignals("c_transShipping",g);this.addToSignals("c_transCity",h);this.addToSignals("c_transState",k);this.addToSignals("c_transCountry",m)},_trackSocial:function(a,b,c,e){this.addToSignals("c_socialNetwork",a);this.addToSignals("c_socialAction",b);this.addToSignals("c_socialTarget",c);this.addToSignals("c_socialPagePath",
e)}},e=this.tv,b,h,g,k,q,m;b=0;for(h=e.length;b<h;b++)if(g=e[b],a.hasOwnProperty(g)&&c.hasOwnProperty(g)&&(m=a[g],m instanceof Array))for(k=0,q=m.length;k<q;k++)c[g].apply(this,m[k])},submit:function(){try{if(""!==this.errorMessage)return this.errorMessage;this.constructSignals();return this.hasSignals?(this.dil.api.signals(this.signals).submit(),"Signals sent: "+this.dil.helpers.convertObjectToKeyValuePairs(this.signals,"=",!0)+this.dil.log):"No signals present"}catch(a){return this.handle(a,"DIL.modules.GA.submit() caught error with message ",
this.dil)}},Stuffer:{LIMIT:5,dil:null,cookieName:null,delimiter:null,errorMessage:"",handle:DIL.modules.helpers.handleModuleError,callback:null,v:function(){return!1},init:function(a,c,e){try{this.callback=this.dil=null,this.errorMessage="",a instanceof DIL?(this.dil=a,this.v=this.dil.validators.isPopulatedString,this.cookieName=this.v(c)?c:"aam_ga",this.delimiter=this.v(e)?e:"|"):this.handle({message:"dilInstance is not a valid instance of DIL"},"DIL.modules.GA.Stuffer.init() error: ")}catch(b){this.handle(b,
"DIL.modules.GA.Stuffer.init() caught error with message ",this.dil)}finally{return this}},process:function(a){var c,e,b,h,g,k;k=!1;var q=1;if(a===Object(a)&&(c=a.stuff)&&c instanceof Array&&(e=c.length))for(a=0;a<e;a++)if((b=c[a])&&b===Object(b)&&(h=b.cn,g=b.cv,h===this.cookieName&&this.v(g))){k=!0;break}if(k){c=g.split(this.delimiter);"undefined"===typeof window._gaq&&(window._gaq=[]);b=window._gaq;a=0;for(e=c.length;a<e&&!(k=c[a].split("="),g=k[0],k=k[1],this.v(g)&&this.v(k)&&b.push(["_setCustomVar",
q++,g,k,1]),q>this.LIMIT);a++);this.errorMessage=1<q?"No errors - stuffing successful":"No valid values to stuff"}else this.errorMessage="Cookie name and value not found in json";if("function"===typeof this.callback)return this.callback()},submit:function(){try{var a=this;if(""!==this.errorMessage)return this.errorMessage;this.dil.api.afterResult(function(c){a.process(c)}).submit();return"DIL.modules.GA.Stuffer.submit() successful"}catch(c){return this.handle(c,"DIL.modules.GA.Stuffer.submit() caught error with message ",
this.dil)}}}};
DIL.modules.Peer39={aid:"",dil:null,optionals:null,errorMessage:"",calledBack:!1,script:null,scriptsSent:[],returnedData:[],handle:DIL.modules.helpers.handleModuleError,init:function(a,c,e){try{this.dil=null;this.errorMessage="";this.calledBack=!1;this.optionals=e===Object(e)?e:{};e={name:"DIL Peer39 Module Error"};var b=[],h="";this.isSecurePageButNotEnabled(document.location.protocol)&&(h="Module has not been enabled for a secure page",b.push(h),e.message=h,DIL.errorModule.handleError(e));c instanceof
DIL?(this.dil=c,e.partner=this.dil.api.getPartner()):(h="dilInstance is not a valid instance of DIL",b.push(h),e.message=h,DIL.errorModule.handleError(e));"string"===typeof a&&a.length?this.aid=a:(h="aid is not a string or is empty",b.push(h),e.message=h,DIL.errorModule.handleError(e));this.errorMessage=b.join("\n")}catch(g){this.handle(g,"DIL.modules.Peer39.init() caught error with message ",this.dil)}finally{return this}},isSecurePageButNotEnabled:function(a){return"https:"===a&&!0!==this.optionals.enableHTTPS?
!0:!1},constructSignals:function(){var a=this,c=this.constructScript(),e=DIL.variables.scriptNodeList[0];window["afterFinished_"+this.aid]=function(){try{var b=a.processData(p39_KVP_Short("c_p","|").split("|"));b.hasSignals&&a.dil.api.signals(b.signals).submit()}catch(c){}finally{a.calledBack=!0,"function"===typeof a.optionals.afterResult&&a.optionals.afterResult()}};e.parentNode.insertBefore(c,e);this.scriptsSent.push(c);return"Request sent to Peer39"},processData:function(a){var c,e,b,h,g={},k=
!1;this.returnedData.push(a);if(a instanceof Array)for(c=0,e=a.length;c<e;c++)b=a[c].split("="),h=b[0],b=b[1],h&&isFinite(b)&&!isNaN(parseInt(b,10))&&(g[h]instanceof Array||(g[h]=[]),g[h].push(b),k=!0);return{hasSignals:k,signals:g}},constructScript:function(){var a=document.createElement("script"),c=this.optionals,e=c.scriptId,b=c.scriptSrc,c=c.scriptParams;a.id="string"===typeof e&&e.length?e:"peer39ScriptLoader";a.type="text/javascript";"string"===typeof b&&b.length?a.src=b:(a.src=document.location.protocol+
"//stags.peer39.net/"+this.aid+"/trg_"+this.aid+".js","string"===typeof c&&c.length&&(a.src+="?"+c));return a},submit:function(){try{return""!==this.errorMessage?this.errorMessage:this.constructSignals()}catch(a){return this.handle(a,"DIL.modules.Peer39.submit() caught error with message ",this.dil)}}};

if (_satellite.getVar('tmh')("media.telstra.com.au") != true && _satellite.getVar('tmh')("afl.com.au") != true) {
s.loadModule("AudienceManagement");
s.AudienceManagement.setup({
  "partner":"telstra",
  "containerNSID":0,
  "disableDefaultRequest": true,
  "disableScriptAttachment": true,
  "uuidCookie":{
     name:'aam_uuid',
     days:30
   }
});
}//if

s.wd=window;
s.getQueryParam=function(p,d,u) {
  try {
    if (typeof p != 'undefined' && p !== '' && p.indexOf(',')) {
      p = p.split(',')[0];
    }
    return s.Util.getQueryParam(p.toLowerCase(),u,'');
  }
  catch (err) {
    return '';
  }
}

s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");
s.trackTNT=new Function("v","p","b",""
+"var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s."
+"getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v"
+"]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
s.getTimeParting=new Function("t","z","y","l",""
+"var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S"
+"tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U"
+".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801"
+"|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z"
+"=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin"
+"g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D"
+"=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat"
+"a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new"
+" Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g"
+"etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo"
+"nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get"
+"Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='"
+"00';if(C>30){X='30'}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6"
+"||D==0){A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Availab"
+"le'}else{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){r"
+"eturn A}}else{return Z+', '+W}}}");
s.clickThruQuality =new Function("scp","tcth_ev","cp_ev","cff_ev","cf_th",""
+"var s=this;if(s.p_fo('clickThruQuality')==1){var ev=s.events?s.even"
+"ts+',':'';if(s.getQueryParam&&s.getQueryParam(scp)){s.events=ev+tct"
+"h_ev;if(s.c_r('cf')){var tct=parseInt(s.c_r('cf'))+1;s.c_w('cf',tct"
+",0);if(tct==cf_th&&cff_ev){s.events=s.events+','+cff_ev;}}else {s.c"
+"_w('cf',1,0);}}else {if(s.c_r('cf')>=1){s.c_w('cf',0,0);s.events=ev"
+"+cp_ev;}}}");s.p_fo=new Function("n",""
+"var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]="
+"new Object;return 1;}else {return 0;}");s.join=new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");
s.getValOnce=new Function("v","c","e",""
+"var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c"
+");if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return"
+" v==k?'':v");
s.manageQueryParam=new Function("p","w","e","u",""
+"var s=this,x,y,i,qs,qp,qv,f,b;u=u?u:(s.pageURL?s.pageURL:''+s.wd.lo"
+"cation);u=u=='f'?''+s.gtfs().location:u+'';x=u.indexOf('?');qs=x>-1"
+"?u.substring(x,u.length):'';u=x>-1?u.substring(0,x):u;x=qs.indexOf("
+"'?'+p+'=');if(x>-1){y=qs.indexOf('&');f='';if(y>-1){qp=qs.substring"
+"(x+1,y);b=qs.substring(y+1,qs.length);}else{qp=qs.substring(1,qs.le"
+"ngth);b='';}}else{x=qs.indexOf('&'+p+'=');if(x>-1){f=qs.substring(1"
+",x);b=qs.substring(x+1,qs.length);y=b.indexOf('&');if(y>-1){qp=b.su"
+"bstring(0,y);b=b.substring(y,b.length);}else{qp=b;b='';}}}if(e&&qp)"
+"{y=qp.indexOf('=');qv=y>-1?qp.substring(y+1,qp.length):'';var eui=0"
+";while(qv.indexOf('%25')>-1){qv=unescape(qv);eui++;if(eui==10)break"
+";}qv=s.rep(qv,'+',' ');qv=escape(qv);qv=s.rep(qv,'%25','%');qv=s.re"
+"p(qv,'%7C','|');qv=s.rep(qv,'%7c','|');qp=qp.substring(0,y+1)+qv;}i"
+"f(w&&qp){if(f)qs='?'+qp+'&'+f+b;else if(b)qs='?'+qp+'&'+b;else qs='"
+"?'+qp}else if(f)qs='?'+f+'&'+qp+b;else if(b)qs='?'+qp+'&'+b;else if"
+"(qp)qs='?'+qp;return u+qs;");
/*
s.m_i("Integrate");
*/
s.pt=function(x,d,f,a){
  var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;
  z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''
};

s.manageVars=new Function("c","l","f",""
+"var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa"
+"geName,purchaseID,channel,server,pageType,campaign,state,zip,events"
+",products,transactionID';for(var n=1;n<51;n++){vl+=',prop'+n+',eVar"
+"'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl"
+"it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l"
+"a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}"
+"}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0"
+");return true;}else{return false;}");s.clearVars=new Function("t","var s=this;s[t]='';");
s.lowercaseVars=new Function("t",""
+"var s=this;if(s[t]){s[t]=s[t].toString();s[t]=s[t].toLowerCase();}");
s.getVisitStart=new Function("c",""
+"var s=this,n,t=new Date;if(typeof s.callType=='function'&&s.callTyp"
+"e()=='+')return 0;if(!c)c='s_visit';t.setTime(t.getTime()+18e5);n=s"
+".c_r(c)?0:1;if(!s.c_w(c,1,t))s.c_w(c,1,0);if(!s.c_r(c))n=0;return n");
s.getPercentPageViewed=new Function("n",""
+"var s=this,W=window,EL=W.addEventListener,AE=W.attachEvent,E=['load"
+"','unload','scroll','resize','zoom','keyup','mouseup','touchend','o"
+"rientationchange','pan'];W.s_Obj=s;s_PPVid=(n=='-'?s.pageName:n)||s"
+".pageName||location.href;if(!W.s_PPVevent){s.s_PPVg=function(n,r){v"
+"ar k='s_ppv',p=k+'l',c=s.c_r(n||r?k:p),a=c.indexOf(',')>-1?c.split("
+"',',10):[''],l=a.length,i;a[0]=unescape(a[0]);r=r||(n&&n!=a[0])||0;"
+"a.length=10;if(typeof a[0]!='string')a[0]='';for(i=1;i<10;i++)a[i]="
+"!r&&i<l?parseInt(a[i])||0:0;if(l<10||typeof a[9]!='string')a[9]='';"
+"if(r){s.c_w(p,c);s.c_w(k,'?')}return a};W.s_PPVevent=function(e){va"
+"r W=window,D=document,B=D.body,E=D.documentElement,S=window.screen|"
+"|0,Ho='offsetHeight',Hs='scrollHeight',Ts='scrollTop',Wc='clientWid"
+"th',Hc='clientHeight',C=100,M=Math,J='object',N='number',s=W.s_Obj|"
+"|W.s||0;e=e&&typeof e==J?e.type||'':'';if(!e.indexOf('on'))e=e.subs"
+"tring(2);s_PPVi=W.s_PPVi||0;if(W.s_PPVt&&!e){clearTimeout(s_PPVt);s"
+"_PPVt=0;if(s_PPVi<2)s_PPVi++}if(typeof s==J){var h=M.max(B[Hs]||E[H"
+"s],B[Ho]||E[Ho],B[Hc]||E[Hc]),X=W.innerWidth||E[Wc]||B[Wc]||0,Y=W.i"
+"nnerHeight||E[Hc]||B[Hc]||0,x=S?S.width:0,y=S?S.height:0,r=M.round("
+"C*(W.devicePixelRatio||1))/C,b=(D.pageYOffset||E[Ts]||B[Ts]||0)+Y,p"
+"=h>0&&b>0?M.round(C*b/h):0,O=W.orientation,o=!isNaN(O)?M.abs(o)%180"
+":Y>X?0:90,L=e=='load'||s_PPVi<1,a=s.s_PPVg(s_PPVid,L),V=function(i,"
+"v,f,n){i=parseInt(typeof a==J&&a.length>i?a[i]:'0')||0;v=typeof v!="
+"N?i:v;v=f||v>i?v:i;return n?v:v>C?C:v<0?0:v};if(new RegExp('(iPod|i"
+"Pad|iPhone)').exec(navigator.userAgent||'')&&o){o=x;x=y;y=o}o=o?'P'"
+":'L';a[9]=L?'':a[9].substring(0,1);s.c_w('s_ppv',escape(W.s_PPVid)+"
+"','+V(1,p,L)+','+(L||!V(2)?p:V(2))+','+V(3,b,L,1)+','+X+','+Y+','+x"
+"+','+y+','+r+','+a[9]+(a[9]==o?'':o))}if(!W.s_PPVt&&e!='unload')W.s"
+"_PPVt=setTimeout(W.s_PPVevent,333)};for(var f=W.s_PPVevent,i=0;i<E."
+"length;i++)if(EL)EL(E[i],f,false);else if(AE)AE('on'+E[i],f);f()};v"
+"ar a=s.s_PPVg();return!n||n=='-'?a[1]:a");

//////////////////////////////////////////////////////////////////////
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.1.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(){var a=this;a.version="2.1.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var n=h.AppMeasurement.Ob;n||(n=null);var p=h,l,r;try{for(l=p.parent,r=p.location;l&&l.location&&r&&""+l.location!=""+r&&p.location&&""+l.location!=""+p.location&&l.location.host==r.host;)p=l,l=p.parent}catch(s){}a.P=function(a){try{console.log(a)}catch(b){}};a.La=function(a){return""+parseInt(a)==""+a};a.replace=function(a,b,d){return!a||
0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.vb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);if(c&&!a.cookieDomain&&
!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.cookieDomain=0<d?c.substring(d):c}return a.cookieDomain};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.vb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=
e&&"NONE"!=e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1==d&&(d=new Date,g=d.getYear(),d.setYear(g+5+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toGMTString()+";":"")+(f?" domain="+f+";":""),a.cookieRead(c)==b):0};a.K=[];a.ia=function(c,b,d){if(a.Ea)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange",
"visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==g){if(!a.ja)for(a.ja=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ja=0,a.delayReady())});f=1;e=0}else d||a.p("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ja||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.p("_d")?b=1:a.xa();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);
setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.Ea=1;a[d.m].apply(a,d.a);a.Ea=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.ia("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.na.join(",")+",");else{d=a.g;if(a.pe||
a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].Mb,f=a[e].Lb));k&&(k=","+k+","+a.G.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.r=function(c,b,d,f,e){var g="",k,m,h,t,l=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+
".":"")+k+","))){h=!1;if(l)for(m=0;m<l.length;m++)k.substring(0,l[m].length)==l[m]&&(h=!0);if(!h&&(""==g&&(g+="&"+c+"."),m=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)m=k.substring(0,h),h=(e?e:"")+m+".",l||(l=[]),l.push(h),g+=a.r(m,b,d,f,h);else if("boolean"==typeof m&&(m=m?"true":"false"),m){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),t=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k=
"v0";break;default:a.La(t)&&("prop"==h?k="c"+t:"eVar"==h?k="v"+t:"list"==h?k="l"+t:"hier"==h&&(k="h"+t,m=m.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(m)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.yb=function(){var c="",b,d,f,e,g,k,m,h,l="",p="",q=e="";if(a.lightProfileID)b=a.O,(l=a.lightTrackVars)&&(l=","+l+","+a.na.join(",")+",");else{b=a.g;if(a.pe||a.linkType)l=a.linkTrackVars,p=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(l=a[e].Mb,p=a[e].Lb));
l&&(l=","+l+","+a.G.join(",")+",");p&&(p=","+p+",",l&&(l+=",events,"));a.events2&&(q+=(""!=q?",":"")+a.events2)}if(a.visitor&&a.visitor.getCustomerIDs){e=n;if(g=a.visitor.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.r("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.r("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,
4);k=e.substring(4);g||("events"==e&&q?(g=q,q=""):"marketingCloudOrgID"==e&&a.visitor&&(g=a.visitor.marketingCloudOrgID));if(g&&(!l||0<=l.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e=
"aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;
case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e="cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e=
"bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e="hp";break;case "events":q&&(g+=(""!=g?",":"")+q);if(p)for(k=g.split(","),g="",f=0;f<k.length;f++)m=k[f],h=m.indexOf("="),0<=h&&(m=m.substring(0,h)),h=m.indexOf(":"),0<=h&&(m=m.substring(0,h)),0<=p.indexOf(","+m+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.r("c",a[e],l,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||
(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e="mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.r("mts",a[e],l,e));g="";break;default:a.La(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}return c};a.D=function(a){var b=a.tagName;if("undefined"!=
""+a.Rb||"undefined"!=""+a.Hb&&"HTML"!=(""+a.Hb).toUpperCase())return"";b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Ha=function(a){var b=h.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?
a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.D(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Ha(c),e)?{id:e.substring(0,
100),type:g}:0};a.Pb=function(c){for(var b=a.D(c),d=a.L(c);c&&!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.D(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Gb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.oa=1;d||(a.oa=0,d=a.clickObject);if(d){c=a.D(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.D(d),b=a.L(d);b&&"BODY"!=c||(d=0);
if(d&&!a.linkObject){var m=d.onclick?""+d.onclick:"";if(0<=m.indexOf(".tl(")||0<=m.indexOf(".trackLink("))d=0}}else a.oa=1;!e&&d&&(e=a.Ha(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var l=0,p=0,n;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(m=e.toLowerCase(),g=m.indexOf("?"),k=m.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(m=m.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(n=g[k])&&m.substring(m.length-(n.length+
1))=="."+n&&(f="d");if(a.trackExternalLinks&&!f&&(m=e.toLowerCase(),a.Ka(m)&&(a.linkInternalFilters||(a.linkInternalFilters=h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),l=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)n=g[k],0<=m.indexOf(n)&&(p=1);p?l&&(f="e"):l||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,
f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.zb=function(){var c=a.oa,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.ActivityMap){var b={},
d=0,e=a.cookieRead("s_sq"),g=e?e.split("&"):0,k,m,h,e=0;if(g)for(k=0;k<g.length;k++)m=g[k].split("="),f=a.unescape(m[0]).split(","),m=a.unescape(m[1]),b[m]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.r("c",k)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(m in b)if(!Object.prototype[m])for(h=0;h<f.length;h++)for(e&&(g=b[m].join(","),g==a.account&&(a.e+=("&"!=m.charAt(0)?"&":"")+m,b[m]=
[],d=1)),k=0;k<b[m].length;k++)g=b[m][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=m.charAt(0)?"&":"")+m+"&u=0"),b[m].splice(k,1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(m in b)!Object.prototype[m]&&0<k&&0<b[m].length&&(e+=(e?"&":"")+a.escape(b[m].join(","))+"="+a.escape(m),k--);a.cookieWrite("s_sq",e)}}}return c};a.Ab=function(){if(!a.Kb){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",h="1.2",l=a.cookieWrite("s_cc","true",0)?"Y":"N",n="",q="";
if(c.setUTCDate&&(h="1.3",(0).toPrecision&&(h="1.5",c=[],c.forEach))){h="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(h="1.7",c.reduce&&(h="1.8",h.trim&&(h="1.8.1",Date.parse&&(h="1.8.2",Object.create&&(h="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),
n=a.b.Qb(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(u){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=h;a.javaEnabled=e;a.cookiesEnabled=l;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=n;a.Kb=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.cb=function(){return d.hb};d.ib=function(b){if(d.hb=b)a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],
1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.cb,set:d.ib}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.ia(c+"_onLoad",[a,d],1)||b(a,d))};a.p=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Cb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=
a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.R=function(c,b){var d,f,e,g,k,h;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||(k[h]=a[g][h]);a[g]=k}};a.Ua=function(c,b){var d,f,e,g;for(d=0;2>d;d++)for(f=0<d?a.Aa:a.g,e=0;e<f.length;e++)g=f[e],c[g]=a[g],b||c[g]||(c["!"+g]=1)};a.ub=function(a){var b,d,f,e,g,k=0,h,
l="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")&&(k=",p,ei,"),k&&h)))){if((a=h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?
l+=(l?"&":"")+e:n+=(n?"&":"")+e;l&&n?h=l+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+h}return a};a.$a=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange","visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ea=!1;a.I=!1;a.kb=function(){a.I=!0;a.j()};a.ca=!1;a.V=!1;
a.gb=function(c){a.marketingCloudVisitorID=c;a.V=!0;a.j()};a.fa=!1;a.W=!1;a.lb=function(c){a.visitorOptedOut=c;a.W=!0;a.j()};a.Z=!1;a.S=!1;a.Wa=function(c){a.analyticsVisitorID=c;a.S=!0;a.j()};a.ba=!1;a.U=!1;a.Ya=function(c){a.audienceManagerLocationHint=c;a.U=!0;a.j()};a.aa=!1;a.T=!1;a.Xa=function(c){a.audienceManagerBlob=c;a.T=!0;a.j()};a.Za=function(c){a.maxDelay||(a.maxDelay=250);return a.p("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.da=!1;a.H=!1;a.xa=function(){a.H=!0;a.j()};a.isReadyToTrack=
function(){var c=!0,b=a.visitor,d,f,e;a.ea||a.I||(a.$a(a.kb)?a.I=!0:a.ea=!0);if(a.ea&&!a.I)return!1;b&&b.isAllowed()&&(a.ca||a.marketingCloudVisitorID||!b.getMarketingCloudVisitorID||(a.ca=!0,a.marketingCloudVisitorID=b.getMarketingCloudVisitorID([a,a.gb]),a.marketingCloudVisitorID&&(a.V=!0)),a.fa||a.visitorOptedOut||!b.isOptedOut||(a.fa=!0,a.visitorOptedOut=b.isOptedOut([a,a.lb]),a.visitorOptedOut!=n&&(a.W=!0)),a.Z||a.analyticsVisitorID||!b.getAnalyticsVisitorID||(a.Z=!0,a.analyticsVisitorID=b.getAnalyticsVisitorID([a,
a.Wa]),a.analyticsVisitorID&&(a.S=!0)),a.ba||a.audienceManagerLocationHint||!b.getAudienceManagerLocationHint||(a.ba=!0,a.audienceManagerLocationHint=b.getAudienceManagerLocationHint([a,a.Ya]),a.audienceManagerLocationHint&&(a.U=!0)),a.aa||a.audienceManagerBlob||!b.getAudienceManagerBlob||(a.aa=!0,a.audienceManagerBlob=b.getAudienceManagerBlob([a,a.Xa]),a.audienceManagerBlob&&(a.T=!0)),c=a.ca&&!a.V&&!a.marketingCloudVisitorID,b=a.Z&&!a.S&&!a.analyticsVisitorID,d=a.ba&&!a.U&&!a.audienceManagerLocationHint,
f=a.aa&&!a.T&&!a.audienceManagerBlob,e=a.fa&&!a.W,c=c||b||d||f||e?!1:!0);a.da||a.H||(a.Za(a.xa)?a.H=!0:a.da=!0);a.da&&!a.H&&(c=!1);return c};a.o=n;a.u=0;a.callbackWhenReadyToTrack=function(c,b,d){var f;f={};f.pb=c;f.ob=b;f.mb=d;a.o==n&&(a.o=[]);a.o.push(f);0==a.u&&(a.u=setInterval(a.j,100))};a.j=function(){var c;if(a.isReadyToTrack()&&(a.jb(),a.o!=n))for(;0<a.o.length;)c=a.o.shift(),c.ob.apply(c.pb,c.mb)};a.jb=function(){a.u&&(clearInterval(a.u),a.u=0)};a.eb=function(c){var b,d,f=n,e=n;if(!a.isReadyToTrack()){b=
[];if(c!=n)for(d in f={},c)f[d]=c[d];e={};a.Ua(e,!0);b.push(f);b.push(e);a.callbackWhenReadyToTrack(a,a.track,b);return!0}return!1};a.wb=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.t=a.track=function(c,b){var d,f=new Date,e="s"+Math.floor(f.getTime()/
108E5)%10+Math.floor(1E13*Math.random()),g=f.getYear(),g="t="+a.escape(f.getDate()+"/"+f.getMonth()+"/"+(1900>g?g+1900:g)+" "+f.getHours()+":"+f.getMinutes()+":"+f.getSeconds()+" "+f.getDay()+" "+f.getTimezoneOffset());a.visitor&&a.visitor.getAuthState&&(a.authState=a.visitor.getAuthState());a.p("_s");a.eb(c)||(b&&a.R(b),c&&(d={},a.Ua(d,0),a.R(c)),a.Cb()&&!a.visitorOptedOut&&(a.analyticsVisitorID||a.marketingCloudVisitorID||(a.fid=a.wb()),a.Gb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&
(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(f.getTime()/1E3)),f=h.location,a.pageURL||(a.pageURL=f.href?f.href:f),a.referrer||a.Va||(f=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=f||void 0===f?void 0===f?"":f:p.document.referrer),a.Va=1,a.referrer=a.ub(a.referrer),a.p("_g")),a.zb()&&!a.abort&&(a.visitor&&!a.supplementalDataID&&a.visitor.getSupplementalDataID&&(a.supplementalDataID=a.visitor.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?
!1:!0)),a.Ab(),g+=a.yb(),a.Fb(e,g),a.p("_t"),a.referrer=""))),c&&a.R(d,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.za=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.za.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPreTrackCallback")};a.bb=function(c){a.wa(a.za,
c)};a.ya=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.ya.push([c,b]):a.debugTracking&&a.P("DEBUG: Non function type passed to registerPostTrackCallback")};a.ab=function(c){a.wa(a.ya,c)};a.wa=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1];e.unshift(b);if("function"==typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.P(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=
c;a.linkType=b;a.linkName=d;e&&(a.l=c,a.A=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=
void 0};a.tagContainerMarker="";a.Fb=function(c,b){var d,f=a.trackingServer;d="";var e=a.dc,g="sc.",h=a.visitorNamespace;f?a.trackingServerSecure&&a.ssl&&(f=a.trackingServerSecure):(h||(h=a.account,f=h.indexOf(","),0<=f&&(h=h.substring(0,f)),h=h.replace(/[^A-Za-z0-9]/g,"")),d||(d="2o7.net"),e=e?(""+e).toLowerCase():"d1","2o7.net"==d&&("d1"==e?e="112":"d2"==e&&(e="122"),g=""),f=h+"."+e+"."+g+d);d=a.ssl?"https://":"http://";e=a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks;d+=
f+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(e?"10":"1")+"/JS-"+a.version+(a.Jb?"T":"")+(a.tagContainerMarker?"-"+a.tagContainerMarker:"")+"/"+c+"?AQB=1&ndh=1&pf=1&"+(e?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.bb(d);a.sb(d);a.ka()};a.Ta=/{(%?)(.*?)(%?)}/;a.Nb=RegExp(a.Ta.source,"g");a.tb=function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.Nb),e=0;e<f.length;++e){var g=
f[e],h=g.match(a.Ta),l="";"%"==h[1]&&"timezone_offset"==h[2]?l=(new Date).getTimezoneOffset():"%"==h[1]&&"timestampz"==h[2]&&(l=a.xb());d.c=d.c.replace(g,a.escape(l))}}};a.xb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,
b){return(Array(a+1).join(0)+b).slice(-a)};a.ta={};a.doPostbacks=function(c){if("object"==typeof c)if(a.tb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,
3)&&(a.ta[d.id]=new Image,a.ta[d.id].alt="",a.ta[d.id].src=d.c)}};a.sb=function(c){a.i||a.Bb();a.i.push(c);a.ma=a.C();a.Ra()};a.Bb=function(){a.i=a.Db();a.i||(a.i=[])};a.Db=function(){var c,b;if(a.ra()){try{(b=h.localStorage.getItem(a.pa()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.ra=function(){var c=!0;a.trackOffline&&a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Ia=function(){var c=0;a.i&&(c=a.i.length);a.q&&c++;return c};a.ka=function(){if(a.q&&(a.B&&a.B.complete&&a.B.F&&a.B.va(),
a.q))return;a.Ja=n;if(a.qa)a.ma>a.N&&a.Pa(a.i),a.ua(500);else{var c=a.nb();if(0<c)a.ua(c);else if(c=a.Fa())a.q=1,a.Eb(c),a.Ib(c)}};a.ua=function(c){a.Ja||(c||(c=0),a.Ja=setTimeout(a.ka,c))};a.nb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.C()-a.Oa;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-c};a.Fa=function(){if(0<a.i.length)return a.i.shift()};a.Eb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+=
"\n\t"+a.unescape(c[d]);a.P(b)}};a.fb=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;var q;try{q=JSON.parse('{"x":"y"}')}catch(u){q=null}q&&"y"==q.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.X=function(a){return h.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Ib=function(c){var b,d,f;a.fb()&&2047<c.length&&("undefined"!=typeof XMLHttpRequest&&(b=new XMLHttpRequest,"withCredentials"in b?d=1:b=0),b||"undefined"==typeof XDomainRequest||(b=
new XDomainRequest,d=2),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.Y?b.Ba=!0:b=0));!b&&a.Sa&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type="text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof h.InstallTrigger||
(b.abort=function(){b.src=n}));b.Da=function(){try{b.F&&(clearTimeout(b.F),b.F=0)}catch(a){}};b.onload=b.va=function(){a.ab(c);b.Da();a.rb();a.ga();a.q=0;a.ka();if(b.Ba){b.Ba=!1;try{a.doPostbacks(a.X(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.Ga=function(){b.Da();(a.trackOffline||a.qa)&&a.q&&a.i.unshift(a.qb);a.q=0;a.ma>a.N&&a.Pa(a.i);a.ga();a.ua(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.va():b.Ga())};a.Oa=a.C();if(1==d||2==d){var e=c.indexOf("?");f=c.substring(0,
e);e=c.substring(e+1);e=e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,"");1==d?(b.open("POST",f,!0),b.send(e)):2==d&&(b.open("POST",f),b.send(e))}else if(b.src=c,3==d){if(a.Ma)try{f.removeChild(a.Ma)}catch(g){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Ma=a.B}b.F=setTimeout(function(){b.F&&(b.complete?b.va():(a.trackOffline&&b.abort&&b.abort(),b.Ga()))},5E3);a.qb=c;a.B=h["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.A)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=
250),a.ha=setTimeout(a.ga,a.forcedLinkTrackingTimeout)};a.rb=function(){if(a.ra()&&!(a.Na>a.N))try{h.localStorage.removeItem(a.pa()),a.Na=a.C()}catch(c){}};a.Pa=function(c){if(a.ra()){a.Ra();try{h.localStorage.setItem(a.pa(),h.JSON.stringify(c)),a.N=a.C()}catch(b){}}};a.Ra=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Fa()}};a.forceOffline=function(){a.qa=!0};a.forceOnline=function(){a.qa=!1};a.pa=function(){return a.offlineFilename+
"-"+a.visitorNamespace+a.account};a.C=function(){return(new Date).getTime()};a.Ka=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.Jb=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.R(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=
typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:h.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>
e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}}};a.G="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.G.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.na="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.na.slice(0);a.Aa="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
for(l=0;250>=l;l++)76>l&&(a.g.push("prop"+l),a.O.push("prop"+l)),a.g.push("eVar"+l),a.O.push("eVar"+l),6>l&&a.g.push("hier"+l),4>l&&a.g.push("list"+l);l="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");a.g=a.g.concat(l);a.G=a.G.concat(l);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.offlineThrottleDelay=
0;a.offlineFilename="AppMeasurement.offline";a.Oa=0;a.ma=0;a.N=0;a.Na=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;try{if(a.Sa=!1,navigator){var v=navigator.userAgent;if("Microsoft Internet Explorer"==navigator.appName||0<=v.indexOf("MSIE ")||0<=v.indexOf("Trident/")&&0<=v.indexOf("Windows NT 6"))a.Sa=!0}}catch(w){}a.ga=function(){a.ha&&(h.clearTimeout(a.ha),a.ha=n);a.l&&a.J&&a.l.dispatchEvent(a.J);a.A&&("function"==typeof a.A?a.A():
a.l&&a.l.href&&(a.d.location=a.l.href));a.l=a.J=a.A=0};a.Qa=function(){a.b=a.d.body;a.b?(a.v=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ca)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.v,!1);else{a.b.removeEventListener("click",a.v,!0);a.Ca=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||
a.clickObject.parentNode))a.clickObject=0;else{var k=a.M=a.clickObject;a.la&&(clearTimeout(a.la),a.la=0);a.la=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Ia();a.track();if(f<a.Ia()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Ka(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=
new h.MouseEvent}if(b){try{b.initMouseEvent("click",c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(n){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.l=c.target,a.J=b)}}}}}catch(p){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.v):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&
a.d.createEvent||0<=navigator.userAgent.indexOf("Firefox/2")&&h.MouseEvent)&&(a.Ca=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.v,!0)),a.b.addEventListener("click",a.v,!1))):setTimeout(a.Qa,30)};a.Qa();a.loadModule("ActivityMap")}
function s_gi(a){var h,n=window.s_c_il,p,l,r=a.split(","),s,q,u=0;if(n)for(p=0;!u&&p<n.length;){h=n[p];if("s_c"==h._c&&(h.account||h.oun))if(h.account&&h.account==a)u=1;else for(l=h.account?h.account:h.oun,l=h.allAccounts?h.allAccounts:l.split(","),s=0;s<r.length;s++)for(q=0;q<l.length;q++)r[s]==l[q]&&(u=1);p++}u||(h=new AppMeasurement);h.setAccount?h.setAccount(a):h.sa&&h.sa(a);return h}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var a=window,h=a.s_giq,n,p,l;if(h)for(n=0;n<h.length;n++)p=h[n],l=s_gi(p.oun),l.setAccount(p.un),l.setTagContainer(p.tagContainerName);a.s_giq=0}s_pgicq();

//if (s.linkInternalFilters.indexOf(window.location.hostname) == -1) { console.log("This site has not been provisioned for tracking. Please Contact Kamal.Singh@team.telstra.com")};
