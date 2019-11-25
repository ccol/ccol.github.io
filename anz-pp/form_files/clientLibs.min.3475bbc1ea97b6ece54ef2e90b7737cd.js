/*! jQuery UI - v1.11.4 - 2016-06-12
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, autocomplete.js, menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{a(jQuery)
}}(function(f){
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
;
f.ui=f.ui||{};
f.extend(f.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
f.fn.extend({scrollParent:function(n){var m=this.css("position"),l=m==="absolute",o=n?/(auto|scroll|hidden)/:/(auto|scroll)/,p=this.parents().filter(function(){var q=f(this);
if(l&&q.css("position")==="static"){return false
}return o.test(q.css("overflow")+q.css("overflow-y")+q.css("overflow-x"))
}).eq(0);
return m==="fixed"||!p.length?f(this[0].ownerDocument||document):p
},uniqueId:(function(){var l=0;
return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++l)
}})
}
})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){f(this).removeAttr("id")
}})
}});
function j(n,l){var p,o,m,q=n.nodeName.toLowerCase();
if("area"===q){p=n.parentNode;
o=p.name;
if(!n.href||!o||p.nodeName.toLowerCase()!=="map"){return false
}m=f("img[usemap='#"+o+"']")[0];
return !!m&&d(m)
}return(/^(input|select|textarea|button|object)$/.test(q)?!n.disabled:"a"===q?n.href||l:l)&&d(n)
}function d(l){return f.expr.filters.visible(l)&&!f(l).parents().addBack().filter(function(){return f.css(this,"visibility")==="hidden"
}).length
}f.extend(f.expr[":"],{data:f.expr.createPseudo?f.expr.createPseudo(function(l){return function(m){return !!f.data(m,l)
}
}):function(n,m,l){return !!f.data(n,l[3])
},focusable:function(l){return j(l,!isNaN(f.attr(l,"tabindex")))
},tabbable:function(n){var l=f.attr(n,"tabindex"),m=isNaN(l);
return(m||l>=0)&&j(n,!m)
}});
if(!f("<a>").outerWidth(1).jquery){f.each(["Width","Height"],function(n,l){var m=l==="Width"?["Left","Right"]:["Top","Bottom"],o=l.toLowerCase(),q={innerWidth:f.fn.innerWidth,innerHeight:f.fn.innerHeight,outerWidth:f.fn.outerWidth,outerHeight:f.fn.outerHeight};
function p(t,s,r,u){f.each(m,function(){s-=parseFloat(f.css(t,"padding"+this))||0;
if(r){s-=parseFloat(f.css(t,"border"+this+"Width"))||0
}if(u){s-=parseFloat(f.css(t,"margin"+this))||0
}});
return s
}f.fn["inner"+l]=function(r){if(r===undefined){return q["inner"+l].call(this)
}return this.each(function(){f(this).css(o,p(this,r)+"px")
})
};
f.fn["outer"+l]=function(r,s){if(typeof r!=="number"){return q["outer"+l].call(this,r)
}return this.each(function(){f(this).css(o,p(this,r,true,s)+"px")
})
}
})
}if(!f.fn.addBack){f.fn.addBack=function(l){return this.add(l==null?this.prevObject:this.prevObject.filter(l))
}
}if(f("<a>").data("a-b","a").removeData("a-b").data("a-b")){f.fn.removeData=(function(l){return function(m){if(arguments.length){return l.call(this,f.camelCase(m))
}else{return l.call(this)
}}
})(f.fn.removeData)
}f.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
f.fn.extend({focus:(function(l){return function(m,n){return typeof m==="number"?this.each(function(){var o=this;
setTimeout(function(){f(o).focus();
if(n){n.call(o)
}},m)
}):l.apply(this,arguments)
}
})(f.fn.focus),disableSelection:(function(){var l="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.bind(l+".ui-disableSelection",function(m){m.preventDefault()
})
}
})(),enableSelection:function(){return this.unbind(".ui-disableSelection")
},zIndex:function(o){if(o!==undefined){return this.css("zIndex",o)
}if(this.length){var m=f(this[0]),l,n;
while(m.length&&m[0]!==document){l=m.css("position");
if(l==="absolute"||l==="relative"||l==="fixed"){n=parseInt(m.css("zIndex"),10);
if(!isNaN(n)&&n!==0){return n
}}m=m.parent()
}}return 0
}});
f.ui.plugin={add:function(m,n,p){var l,o=f.ui[m].prototype;
for(l in p){o.plugins[l]=o.plugins[l]||[];
o.plugins[l].push([n,p[l]])
}},call:function(l,o,n,m){var p,q=l.plugins[o];
if(!q){return
}if(!m&&(!l.element[0].parentNode||l.element[0].parentNode.nodeType===11)){return
}for(p=0;
p<q.length;
p++){if(l.options[q[p][0]]){q[p][1].apply(l.element,n)
}}}};
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
;
var k=0,c=Array.prototype.slice;
f.cleanData=(function(l){return function(m){var o,p,n;
for(n=0;
(p=m[n])!=null;
n++){try{o=f._data(p,"events");
if(o&&o.remove){f(p).triggerHandler("remove")
}}catch(q){}}l(m)
}
})(f.cleanData);
f.widget=function(l,m,t){var q,r,o,s,n={},p=l.split(".")[0];
l=l.split(".")[1];
q=p+"-"+l;
if(!t){t=m;
m=f.Widget
}f.expr[":"][q.toLowerCase()]=function(u){return !!f.data(u,q)
};
f[p]=f[p]||{};
r=f[p][l];
o=f[p][l]=function(u,v){if(!this._createWidget){return new o(u,v)
}if(arguments.length){this._createWidget(u,v)
}};
f.extend(o,r,{version:t.version,_proto:f.extend({},t),_childConstructors:[]});
s=new m();
s.options=f.widget.extend({},s.options);
f.each(t,function(v,u){if(!f.isFunction(u)){n[v]=u;
return
}n[v]=(function(){var w=function(){return m.prototype[v].apply(this,arguments)
},x=function(y){return m.prototype[v].apply(this,y)
};
return function(){var A=this._super,y=this._superApply,z;
this._super=w;
this._superApply=x;
z=u.apply(this,arguments);
this._super=A;
this._superApply=y;
return z
}
})()
});
o.prototype=f.widget.extend(s,{widgetEventPrefix:r?(s.widgetEventPrefix||l):l},n,{constructor:o,namespace:p,widgetName:l,widgetFullName:q});
if(r){f.each(r._childConstructors,function(v,w){var u=w.prototype;
f.widget(u.namespace+"."+u.widgetName,o,w._proto)
});
delete r._childConstructors
}else{m._childConstructors.push(o)
}f.widget.bridge(l,o);
return o
};
f.widget.extend=function(q){var m=c.call(arguments,1),p=0,l=m.length,n,o;
for(;
p<l;
p++){for(n in m[p]){o=m[p][n];
if(m[p].hasOwnProperty(n)&&o!==undefined){if(f.isPlainObject(o)){q[n]=f.isPlainObject(q[n])?f.widget.extend({},q[n],o):f.widget.extend({},o)
}else{q[n]=o
}}}}return q
};
f.widget.bridge=function(m,l){var n=l.prototype.widgetFullName||m;
f.fn[m]=function(q){var o=typeof q==="string",p=c.call(arguments,1),r=this;
if(o){this.each(function(){var t,s=f.data(this,n);
if(q==="instance"){r=s;
return false
}if(!s){return f.error("cannot call methods on "+m+" prior to initialization; attempted to call method '"+q+"'")
}if(!f.isFunction(s[q])||q.charAt(0)==="_"){return f.error("no such method '"+q+"' for "+m+" widget instance")
}t=s[q].apply(s,p);
if(t!==s&&t!==undefined){r=t&&t.jquery?r.pushStack(t.get()):t;
return false
}})
}else{if(p.length){q=f.widget.extend.apply(null,[q].concat(p))
}this.each(function(){var s=f.data(this,n);
if(s){s.option(q||{});
if(s._init){s._init()
}}else{f.data(this,n,new l(q,this))
}})
}return r
}
};
f.Widget=function(){};
f.Widget._childConstructors=[];
f.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(l,m){m=f(m||this.defaultElement||this)[0];
this.element=f(m);
this.uuid=k++;
this.eventNamespace="."+this.widgetName+this.uuid;
this.bindings=f();
this.hoverable=f();
this.focusable=f();
if(m!==this){f.data(m,this.widgetFullName,this);
this._on(true,this.element,{remove:function(n){if(n.target===m){this.destroy()
}}});
this.document=f(m.style?m.ownerDocument:m.document||m);
this.window=f(this.document[0].defaultView||this.document[0].parentWindow)
}this.options=f.widget.extend({},this.options,this._getCreateOptions(),l);
this._create();
this._trigger("create",null,this._getCreateEventData());
this._init()
},_getCreateOptions:f.noop,_getCreateEventData:f.noop,_create:f.noop,_init:f.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(f.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);
this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
},_destroy:f.noop,widget:function(){return this.element
},option:function(o,p){var l=o,q,n,m;
if(arguments.length===0){return f.widget.extend({},this.options)
}if(typeof o==="string"){l={};
q=o.split(".");
o=q.shift();
if(q.length){n=l[o]=f.widget.extend({},this.options[o]);
for(m=0;
m<q.length-1;
m++){n[q[m]]=n[q[m]]||{};
n=n[q[m]]
}o=q.pop();
if(arguments.length===1){return n[o]===undefined?null:n[o]
}n[o]=p
}else{if(arguments.length===1){return this.options[o]===undefined?null:this.options[o]
}l[o]=p
}}this._setOptions(l);
return this
},_setOptions:function(l){var m;
for(m in l){this._setOption(m,l[m])
}return this
},_setOption:function(l,m){this.options[l]=m;
if(l==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!m);
if(m){this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")
}}return this
},enable:function(){return this._setOptions({disabled:false})
},disable:function(){return this._setOptions({disabled:true})
},_on:function(o,n,m){var p,l=this;
if(typeof o!=="boolean"){m=n;
n=o;
o=false
}if(!m){m=n;
n=this.element;
p=this.widget()
}else{n=p=f(n);
this.bindings=this.bindings.add(n)
}f.each(m,function(v,u){function s(){if(!o&&(l.options.disabled===true||f(this).hasClass("ui-state-disabled"))){return
}return(typeof u==="string"?l[u]:u).apply(l,arguments)
}if(typeof u!=="string"){s.guid=u.guid=u.guid||s.guid||f.guid++
}var t=v.match(/^([\w:-]*)\s*(.*)$/),r=t[1]+l.eventNamespace,q=t[2];
if(q){p.delegate(q,r,s)
}else{n.bind(r,s)
}})
},_off:function(m,l){l=(l||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
m.unbind(l).undelegate(l);
this.bindings=f(this.bindings.not(m).get());
this.focusable=f(this.focusable.not(m).get());
this.hoverable=f(this.hoverable.not(m).get())
},_delay:function(o,n){function m(){return(typeof o==="string"?l[o]:o).apply(l,arguments)
}var l=this;
return setTimeout(m,n||0)
},_hoverable:function(l){this.hoverable=this.hoverable.add(l);
this._on(l,{mouseenter:function(m){f(m.currentTarget).addClass("ui-state-hover")
},mouseleave:function(m){f(m.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(l){this.focusable=this.focusable.add(l);
this._on(l,{focusin:function(m){f(m.currentTarget).addClass("ui-state-focus")
},focusout:function(m){f(m.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(l,m,n){var q,p,o=this.options[l];
n=n||{};
m=f.Event(m);
m.type=(l===this.widgetEventPrefix?l:this.widgetEventPrefix+l).toLowerCase();
m.target=this.element[0];
p=m.originalEvent;
if(p){for(q in p){if(!(q in m)){m[q]=p[q]
}}}this.element.trigger(m,n);
return !(f.isFunction(o)&&o.apply(this.element[0],[m].concat(n))===false||m.isDefaultPrevented())
}};
f.each({show:"fadeIn",hide:"fadeOut"},function(m,l){f.Widget.prototype["_"+m]=function(p,o,r){if(typeof o==="string"){o={effect:o}
}var q,n=!o?m:o===true||typeof o==="number"?l:o.effect||l;
o=o||{};
if(typeof o==="number"){o={duration:o}
}q=!f.isEmptyObject(o);
o.complete=r;
if(o.delay){p.delay(o.delay)
}if(q&&f.effects&&f.effects.effect[n]){p[m](o)
}else{if(n!==m&&p[n]){p[n](o.duration,o.easing,r)
}else{p.queue(function(s){f(this)[m]();
if(r){r.call(p[0])
}s()
})
}}}
});
var h=f.widget;
/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
;
var e=false;
f(document).mouseup(function(){e=false
});
var i=f.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var l=this;
this.element.bind("mousedown."+this.widgetName,function(m){return l._mouseDown(m)
}).bind("click."+this.widgetName,function(m){if(true===f.data(m.target,l.widgetName+".preventClickEvent")){f.removeData(m.target,l.widgetName+".preventClickEvent");
m.stopImmediatePropagation();
return false
}});
this.started=false
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(n){if(e){return
}this._mouseMoved=false;
(this._mouseStarted&&this._mouseUp(n));
this._mouseDownEvent=n;
var m=this,o=(n.which===1),l=(typeof this.options.cancel==="string"&&n.target.nodeName?f(n.target).closest(this.options.cancel).length:false);
if(!o||l||!this._mouseCapture(n)){return true
}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){m.mouseDelayMet=true
},this.options.delay)
}if(this._mouseDistanceMet(n)&&this._mouseDelayMet(n)){this._mouseStarted=(this._mouseStart(n)!==false);
if(!this._mouseStarted){n.preventDefault();
return true
}}if(true===f.data(n.target,this.widgetName+".preventClickEvent")){f.removeData(n.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(p){return m._mouseMove(p)
};
this._mouseUpDelegate=function(p){return m._mouseUp(p)
};
this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
n.preventDefault();
e=true;
return true
},_mouseMove:function(l){if(this._mouseMoved){if(f.ui.ie&&(!document.documentMode||document.documentMode<9)&&!l.button){return this._mouseUp(l)
}else{if(!l.which){return this._mouseUp(l)
}}}if(l.which||l.button){this._mouseMoved=true
}if(this._mouseStarted){this._mouseDrag(l);
return l.preventDefault()
}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,l)!==false);
(this._mouseStarted?this._mouseDrag(l):this._mouseUp(l))
}return !this._mouseStarted
},_mouseUp:function(l){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;
if(l.target===this._mouseDownEvent.target){f.data(l.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(l)
}e=false;
return false
},_mouseDistanceMet:function(l){return(Math.max(Math.abs(this._mouseDownEvent.pageX-l.pageX),Math.abs(this._mouseDownEvent.pageY-l.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}});
/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
(function(){f.ui=f.ui||{};
var s,v,t=Math.max,y=Math.abs,w=Math.round,n=/left|center|right/,q=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,u=/^\w+/,m=/%$/,p=f.fn.position;
function x(B,A,z){return[parseFloat(B[0])*(m.test(B[0])?A/100:1),parseFloat(B[1])*(m.test(B[1])?z/100:1)]
}function r(z,A){return parseInt(f.css(z,A),10)||0
}function o(A){var z=A[0];
if(z.nodeType===9){return{width:A.width(),height:A.height(),offset:{top:0,left:0}}
}if(f.isWindow(z)){return{width:A.width(),height:A.height(),offset:{top:A.scrollTop(),left:A.scrollLeft()}}
}if(z.preventDefault){return{width:0,height:0,offset:{top:z.pageY,left:z.pageX}}
}return{width:A.outerWidth(),height:A.outerHeight(),offset:A.offset()}
}f.position={scrollbarWidth:function(){if(s!==undefined){return s
}var A,z,C=f("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),B=C.children()[0];
f("body").append(C);
A=B.offsetWidth;
C.css("overflow","scroll");
z=B.offsetWidth;
if(A===z){z=C[0].clientWidth
}C.remove();
return(s=A-z)
},getScrollInfo:function(D){var C=D.isWindow||D.isDocument?"":D.element.css("overflow-x"),B=D.isWindow||D.isDocument?"":D.element.css("overflow-y"),A=C==="scroll"||(C==="auto"&&D.width<D.element[0].scrollWidth),z=B==="scroll"||(B==="auto"&&D.height<D.element[0].scrollHeight);
return{width:z?f.position.scrollbarWidth():0,height:A?f.position.scrollbarWidth():0}
},getWithinInfo:function(A){var B=f(A||window),z=f.isWindow(B[0]),C=!!B[0]&&B[0].nodeType===9;
return{element:B,isWindow:z,isDocument:C,offset:B.offset()||{left:0,top:0},scrollLeft:B.scrollLeft(),scrollTop:B.scrollTop(),width:z||C?B.width():B.outerWidth(),height:z||C?B.height():B.outerHeight()}
}};
f.fn.position=function(J){if(!J||!J.of){return p.apply(this,arguments)
}J=f.extend({},J);
var K,G,E,I,D,z,F=f(J.of),C=f.position.getWithinInfo(J.within),A=f.position.getScrollInfo(C),H=(J.collision||"flip").split(" "),B={};
z=o(F);
if(F[0].preventDefault){J.at="left top"
}G=z.width;
E=z.height;
I=z.offset;
D=f.extend({},I);
f.each(["my","at"],function(){var N=(J[this]||"").split(" "),M,L;
if(N.length===1){N=n.test(N[0])?N.concat(["center"]):q.test(N[0])?["center"].concat(N):["center","center"]
}N[0]=n.test(N[0])?N[0]:"center";
N[1]=q.test(N[1])?N[1]:"center";
M=l.exec(N[0]);
L=l.exec(N[1]);
B[this]=[M?M[0]:0,L?L[0]:0];
J[this]=[u.exec(N[0])[0],u.exec(N[1])[0]]
});
if(H.length===1){H[1]=H[0]
}if(J.at[0]==="right"){D.left+=G
}else{if(J.at[0]==="center"){D.left+=G/2
}}if(J.at[1]==="bottom"){D.top+=E
}else{if(J.at[1]==="center"){D.top+=E/2
}}K=x(B.at,G,E);
D.left+=K[0];
D.top+=K[1];
return this.each(function(){var M,V,O=f(this),Q=O.outerWidth(),N=O.outerHeight(),P=r(this,"marginLeft"),L=r(this,"marginTop"),U=Q+P+r(this,"marginRight")+A.width,T=N+L+r(this,"marginBottom")+A.height,R=f.extend({},D),S=x(B.my,O.outerWidth(),O.outerHeight());
if(J.my[0]==="right"){R.left-=Q
}else{if(J.my[0]==="center"){R.left-=Q/2
}}if(J.my[1]==="bottom"){R.top-=N
}else{if(J.my[1]==="center"){R.top-=N/2
}}R.left+=S[0];
R.top+=S[1];
if(!v){R.left=w(R.left);
R.top=w(R.top)
}M={marginLeft:P,marginTop:L};
f.each(["left","top"],function(X,W){if(f.ui.position[H[X]]){f.ui.position[H[X]][W](R,{targetWidth:G,targetHeight:E,elemWidth:Q,elemHeight:N,collisionPosition:M,collisionWidth:U,collisionHeight:T,offset:[K[0]+S[0],K[1]+S[1]],my:J.my,at:J.at,within:C,elem:O})
}});
if(J.using){V=function(Z){var ab=I.left-R.left,Y=ab+G-Q,aa=I.top-R.top,X=aa+E-N,W={target:{element:F,left:I.left,top:I.top,width:G,height:E},element:{element:O,left:R.left,top:R.top,width:Q,height:N},horizontal:Y<0?"left":ab>0?"right":"center",vertical:X<0?"top":aa>0?"bottom":"middle"};
if(G<Q&&y(ab+Y)<G){W.horizontal="center"
}if(E<N&&y(aa+X)<E){W.vertical="middle"
}if(t(y(ab),y(Y))>t(y(aa),y(X))){W.important="horizontal"
}else{W.important="vertical"
}J.using.call(this,Z,W)
}
}O.offset(f.extend(R,{using:V}))
})
};
f.ui.position={fit:{left:function(D,C){var B=C.within,F=B.isWindow?B.scrollLeft:B.offset.left,H=B.width,E=D.left-C.collisionPosition.marginLeft,G=F-E,A=E+C.collisionWidth-H-F,z;
if(C.collisionWidth>H){if(G>0&&A<=0){z=D.left+G+C.collisionWidth-H-F;
D.left+=G-z
}else{if(A>0&&G<=0){D.left=F
}else{if(G>A){D.left=F+H-C.collisionWidth
}else{D.left=F
}}}}else{if(G>0){D.left+=G
}else{if(A>0){D.left-=A
}else{D.left=t(D.left-E,D.left)
}}}},top:function(C,B){var A=B.within,G=A.isWindow?A.scrollTop:A.offset.top,H=B.within.height,E=C.top-B.collisionPosition.marginTop,F=G-E,D=E+B.collisionHeight-H-G,z;
if(B.collisionHeight>H){if(F>0&&D<=0){z=C.top+F+B.collisionHeight-H-G;
C.top+=F-z
}else{if(D>0&&F<=0){C.top=G
}else{if(F>D){C.top=G+H-B.collisionHeight
}else{C.top=G
}}}}else{if(F>0){C.top+=F
}else{if(D>0){C.top-=D
}else{C.top=t(C.top-E,C.top)
}}}}},flip:{left:function(F,E){var D=E.within,J=D.offset.left+D.scrollLeft,M=D.width,B=D.isWindow?D.scrollLeft:D.offset.left,G=F.left-E.collisionPosition.marginLeft,K=G-B,A=G+E.collisionWidth-M-B,I=E.my[0]==="left"?-E.elemWidth:E.my[0]==="right"?E.elemWidth:0,L=E.at[0]==="left"?E.targetWidth:E.at[0]==="right"?-E.targetWidth:0,C=-2*E.offset[0],z,H;
if(K<0){z=F.left+I+L+C+E.collisionWidth-M-J;
if(z<0||z<y(K)){F.left+=I+L+C
}}else{if(A>0){H=F.left-E.collisionPosition.marginLeft+I+L+C-B;
if(H>0||y(H)<A){F.left+=I+L+C
}}}},top:function(E,D){var C=D.within,L=C.offset.top+C.scrollTop,M=C.height,z=C.isWindow?C.scrollTop:C.offset.top,G=E.top-D.collisionPosition.marginTop,I=G-z,F=G+D.collisionHeight-M-z,J=D.my[1]==="top",H=J?-D.elemHeight:D.my[1]==="bottom"?D.elemHeight:0,N=D.at[1]==="top"?D.targetHeight:D.at[1]==="bottom"?-D.targetHeight:0,B=-2*D.offset[1],K,A;
if(I<0){A=E.top+H+N+B+D.collisionHeight-M-L;
if(A<0||A<y(I)){E.top+=H+N+B
}}else{if(F>0){K=E.top-D.collisionPosition.marginTop+H+N+B-z;
if(K>0||y(K)<F){E.top+=H+N+B
}}}}},flipfit:{left:function(){f.ui.position.flip.left.apply(this,arguments);
f.ui.position.fit.left.apply(this,arguments)
},top:function(){f.ui.position.flip.top.apply(this,arguments);
f.ui.position.fit.top.apply(this,arguments)
}}};
(function(){var D,F,A,C,B,z=document.getElementsByTagName("body")[0],E=document.createElement("div");
D=document.createElement(z?"div":"body");
A={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(z){f.extend(A,{position:"absolute",left:"-1000px",top:"-1000px"})
}for(B in A){D.style[B]=A[B]
}D.appendChild(E);
F=z||document.documentElement;
F.insertBefore(D,F.firstChild);
E.style.cssText="position: absolute; left: 10.7432222px;";
C=f(E).offset().left;
v=C>10&&C<11;
D.innerHTML="";
F.removeChild(D)
})()
})();
var g=f.ui.position;
/*!
 * jQuery UI Menu 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/menu/
 */
;
var b=f.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;
this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0});
if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item":function(l){l.preventDefault()
},"click .ui-menu-item":function(l){var m=f(l.target);
if(!this.mouseHandled&&m.not(".ui-state-disabled").length){this.select(l);
if(!l.isPropagationStopped()){this.mouseHandled=true
}if(m.has(".ui-menu").length){this.expand(l)
}else{if(!this.element.is(":focus")&&f(this.document[0].activeElement).closest(".ui-menu").length){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(l){if(this.previousFilter){return
}var m=f(l.currentTarget);
m.siblings(".ui-state-active").removeClass("ui-state-active");
this.focus(l,m)
},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(n,l){var m=this.active||this.element.find(this.options.items).eq(0);
if(!l){this.focus(n,m)
}},blur:function(l){this._delay(function(){if(!f.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(l)
}})
},keydown:"_keydown"});
this.refresh();
this._on(this.document,{click:function(l){if(this._closeOnDocumentClick(l)){this.collapseAll(l)
}this.mouseHandled=false
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var l=f(this);
if(l.data("ui-menu-submenu-carat")){l.remove()
}});
this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(p){var m,o,q,n,l=true;
switch(p.keyCode){case f.ui.keyCode.PAGE_UP:this.previousPage(p);
break;
case f.ui.keyCode.PAGE_DOWN:this.nextPage(p);
break;
case f.ui.keyCode.HOME:this._move("first","first",p);
break;
case f.ui.keyCode.END:this._move("last","last",p);
break;
case f.ui.keyCode.UP:this.previous(p);
break;
case f.ui.keyCode.DOWN:this.next(p);
break;
case f.ui.keyCode.LEFT:this.collapse(p);
break;
case f.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(p)
}break;
case f.ui.keyCode.ENTER:case f.ui.keyCode.SPACE:this._activate(p);
break;
case f.ui.keyCode.ESCAPE:this.collapse(p);
break;
default:l=false;
o=this.previousFilter||"";
q=String.fromCharCode(p.keyCode);
n=false;
clearTimeout(this.filterTimer);
if(q===o){n=true
}else{q=o+q
}m=this._filterMenuItems(q);
m=n&&m.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):m;
if(!m.length){q=String.fromCharCode(p.keyCode);
m=this._filterMenuItems(q)
}if(m.length){this.focus(p,m);
this.previousFilter=q;
this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)
}else{delete this.previousFilter
}}if(l){p.preventDefault()
}},_activate:function(l){if(!this.active.is(".ui-state-disabled")){if(this.active.is("[aria-haspopup='true']")){this.expand(l)
}else{this.select(l)
}}},refresh:function(){var p,m,o=this,n=this.options.icons.submenu,l=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);
l.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var s=f(this),r=s.parent(),q=f("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",true);
r.attr("aria-haspopup","true").prepend(q);
s.attr("aria-labelledby",r.attr("id"))
});
p=l.add(this.element);
m=p.find(this.options.items);
m.not(".ui-menu-item").each(function(){var q=f(this);
if(o._isDivider(q)){q.addClass("ui-widget-content ui-menu-divider")
}});
m.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()});
m.filter(".ui-state-disabled").attr("aria-disabled","true");
if(this.active&&!f.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(l,m){if(l==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(m.submenu)
}if(l==="disabled"){this.element.toggleClass("ui-state-disabled",!!m).attr("aria-disabled",m)
}this._super(l,m)
},focus:function(m,l){var o,n;
this.blur(m,m&&m.type==="focus");
this._scrollIntoView(l);
this.active=l.first();
n=this.active.addClass("ui-state-focus").removeClass("ui-state-active");
if(this.options.role){this.element.attr("aria-activedescendant",n.attr("id"))
}this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
if(m&&m.type==="keydown"){this._close()
}else{this.timer=this._delay(function(){this._close()
},this.delay)
}o=l.children(".ui-menu");
if(o.length&&m&&(/^mouse/.test(m.type))){this._startOpening(o)
}this.activeMenu=l.parent();
this._trigger("focus",m,{item:l})
},_scrollIntoView:function(o){var r,n,p,l,m,q;
if(this._hasScroll()){r=parseFloat(f.css(this.activeMenu[0],"borderTopWidth"))||0;
n=parseFloat(f.css(this.activeMenu[0],"paddingTop"))||0;
p=o.offset().top-this.activeMenu.offset().top-r-n;
l=this.activeMenu.scrollTop();
m=this.activeMenu.height();
q=o.outerHeight();
if(p<0){this.activeMenu.scrollTop(l+p)
}else{if(p+q>m){this.activeMenu.scrollTop(l+p-m+q)
}}}},blur:function(m,l){if(!l){clearTimeout(this.timer)
}if(!this.active){return
}this.active.removeClass("ui-state-focus");
this.active=null;
this._trigger("blur",m,{item:this.active})
},_startOpening:function(l){clearTimeout(this.timer);
if(l.attr("aria-hidden")!=="true"){return
}this.timer=this._delay(function(){this._close();
this._open(l)
},this.delay)
},_open:function(m){var l=f.extend({of:this.active},this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(m.parents(".ui-menu")).hide().attr("aria-hidden","true");
m.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(l)
},collapseAll:function(m,l){clearTimeout(this.timer);
this.timer=this._delay(function(){var n=l?this.element:f(m&&m.target).closest(this.element.find(".ui-menu"));
if(!n.length){n=this.element
}this._close(n);
this.blur(m);
this.activeMenu=n
},this.delay)
},_close:function(l){if(!l){l=this.active?this.active.parent():this.element
}l.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
},_closeOnDocumentClick:function(l){return !f(l.target).closest(".ui-menu").length
},_isDivider:function(l){return !/[^\-\u2014\u2013\s]/.test(l.text())
},collapse:function(m){var l=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(l&&l.length){this._close();
this.focus(m,l)
}},expand:function(m){var l=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
if(l&&l.length){this._open(l.parent());
this._delay(function(){this.focus(m,l)
})
}},next:function(l){this._move("next","first",l)
},previous:function(l){this._move("prev","last",l)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(o,m,n){var l;
if(this.active){if(o==="first"||o==="last"){l=this.active[o==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{l=this.active[o+"All"](".ui-menu-item").eq(0)
}}if(!l||!l.length||!this.active){l=this.activeMenu.find(this.options.items)[m]()
}this.focus(n,l)
},nextPage:function(n){var m,o,l;
if(!this.active){this.next(n);
return
}if(this.isLastItem()){return
}if(this._hasScroll()){o=this.active.offset().top;
l=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){m=f(this);
return m.offset().top-o-l<0
});
this.focus(n,m)
}else{this.focus(n,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())
}},previousPage:function(n){var m,o,l;
if(!this.active){this.next(n);
return
}if(this.isFirstItem()){return
}if(this._hasScroll()){o=this.active.offset().top;
l=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){m=f(this);
return m.offset().top-o+l>0
});
this.focus(n,m)
}else{this.focus(n,this.activeMenu.find(this.options.items).first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(l){this.active=this.active||f(l.target).closest(".ui-menu-item");
var m={item:this.active};
if(!this.active.has(".ui-menu").length){this.collapseAll(l,true)
}this._trigger("select",l,m)
},_filterMenuItems:function(n){var l=n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),m=new RegExp("^"+l,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return m.test(f.trim(f(this).text()))
})
}});
/*!
 * jQuery UI Autocomplete 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/autocomplete/
 */
;
f.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var n,l,o,q=this.element[0].nodeName.toLowerCase(),p=q==="textarea",m=q==="input";
this.isMultiLine=p?true:m?false:this.element.prop("isContentEditable");
this.valueMethod=this.element[p||m?"val":"text"];
this.isNewMenu=true;
this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(r){if(this.element.prop("readOnly")){n=true;
o=true;
l=true;
return
}n=false;
o=false;
l=false;
var s=f.ui.keyCode;
switch(r.keyCode){case s.PAGE_UP:n=true;
this._move("previousPage",r);
break;
case s.PAGE_DOWN:n=true;
this._move("nextPage",r);
break;
case s.UP:n=true;
this._keyEvent("previous",r);
break;
case s.DOWN:n=true;
this._keyEvent("next",r);
break;
case s.ENTER:if(this.menu.active){n=true;
r.preventDefault();
this.menu.select(r)
}break;
case s.TAB:if(this.menu.active){this.menu.select(r)
}break;
case s.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term)
}this.close(r);
r.preventDefault()
}break;
default:l=true;
this._searchTimeout(r);
break
}},keypress:function(r){if(n){n=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){r.preventDefault()
}return
}if(l){return
}var s=f.ui.keyCode;
switch(r.keyCode){case s.PAGE_UP:this._move("previousPage",r);
break;
case s.PAGE_DOWN:this._move("nextPage",r);
break;
case s.UP:this._keyEvent("previous",r);
break;
case s.DOWN:this._keyEvent("next",r);
break
}},input:function(r){if(o){o=false;
r.preventDefault();
return
}this._searchTimeout(r)
},focus:function(){this.selectedItem=null;
this.previous=this._value()
},blur:function(r){if(this.cancelBlur){delete this.cancelBlur;
return
}clearTimeout(this.searching);
this.close(r);
this._change(r)
}});
this._initSource();
this.menu=f("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");
this._on(this.menu.element,{mousedown:function(r){r.preventDefault();
this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur
});
var s=this.menu.element[0];
if(!f(r.target).closest(".ui-menu-item").length){this._delay(function(){var t=this;
this.document.one("mousedown",function(u){if(u.target!==t.element[0]&&u.target!==s&&!f.contains(s,u.target)){t.close()
}})
})
}},menufocus:function(t,u){var r,s;
if(this.isNewMenu){this.isNewMenu=false;
if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){f(t.target).trigger(t.originalEvent)
});
return
}}s=u.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus",t,{item:s})){if(t.originalEvent&&/^key/.test(t.originalEvent.type)){this._value(s.value)
}}r=u.item.attr("aria-label")||s.value;
if(r&&f.trim(r).length){this.liveRegion.children().hide();
f("<div>").text(r).appendTo(this.liveRegion)
}},menuselect:function(t,u){var s=u.item.data("ui-autocomplete-item"),r=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();
this.previous=r;
this._delay(function(){this.previous=r;
this.selectedItem=s
})
}if(false!==this._trigger("select",t,{item:s})){this._value(s.value)
}this.term=this._value();
this.close(t);
this.selectedItem=s
}});
this.liveRegion=f("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching);
this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove()
},_setOption:function(l,m){this._super(l,m);
if(l==="source"){this._initSource()
}if(l==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(l==="disabled"&&m&&this.xhr){this.xhr.abort()
}},_appendTo:function(){var l=this.options.appendTo;
if(l){l=l.jquery||l.nodeType?f(l):this.document.find(l).eq(0)
}if(!l||!l[0]){l=this.element.closest(".ui-front")
}if(!l.length){l=this.document[0].body
}return l
},_initSource:function(){var n,l,m=this;
if(f.isArray(this.options.source)){n=this.options.source;
this.source=function(p,o){o(f.ui.autocomplete.filter(n,p.term))
}
}else{if(typeof this.options.source==="string"){l=this.options.source;
this.source=function(p,o){if(m.xhr){m.xhr.abort()
}m.xhr=f.ajax({url:l,data:p,dataType:"json",success:function(q){o(q)
},error:function(){o([])
}})
}
}else{this.source=this.options.source
}}},_searchTimeout:function(l){clearTimeout(this.searching);
this.searching=this._delay(function(){var n=this.term===this._value(),m=this.menu.element.is(":visible"),o=l.altKey||l.ctrlKey||l.metaKey||l.shiftKey;
if(!n||(n&&!m&&!o)){this.selectedItem=null;
this.search(null,l)
}},this.options.delay)
},search:function(m,l){m=m!=null?m:this._value();
this.term=this._value();
if(m.length<this.options.minLength){return this.close(l)
}if(this._trigger("search",l)===false){return
}return this._search(m)
},_search:function(l){this.pending++;
this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({term:l},this._response())
},_response:function(){var l=++this.requestIndex;
return f.proxy(function(m){if(l===this.requestIndex){this.__response(m)
}this.pending--;
if(!this.pending){this.element.removeClass("ui-autocomplete-loading")
}},this)
},__response:function(l){if(l){l=this._normalize(l)
}this._trigger("response",null,{content:l});
if(!this.options.disabled&&l&&l.length&&!this.cancelSearch){this._suggest(l);
this._trigger("open")
}else{this._close()
}},close:function(l){this.cancelSearch=true;
this._close(l)
},_close:function(l){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close",l)
}},_change:function(l){if(this.previous!==this._value()){this._trigger("change",l,{item:this.selectedItem})
}},_normalize:function(l){if(l.length&&l[0].label&&l[0].value){return l
}return f.map(l,function(m){if(typeof m==="string"){return{label:m,value:m}
}return f.extend({},m,{label:m.label||m.value,value:m.value||m.label})
})
},_suggest:function(l){var m=this.menu.element.empty();
this._renderMenu(m,l);
this.isNewMenu=true;
this.menu.refresh();
m.show();
this._resizeMenu();
m.position(f.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()
}},_resizeMenu:function(){var l=this.menu.element;
l.outerWidth(Math.max(l.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(m,l){var n=this;
f.each(l,function(o,p){n._renderItemData(m,p)
})
},_renderItemData:function(l,m){return this._renderItem(l,m).data("ui-autocomplete-item",m)
},_renderItem:function(l,m){return f("<li>").text(m.label).appendTo(l)
},_move:function(m,l){if(!this.menu.element.is(":visible")){this.search(null,l);
return
}if(this.menu.isFirstItem()&&/^previous/.test(m)||this.menu.isLastItem()&&/^next/.test(m)){if(!this.isMultiLine){this._value(this.term)
}this.menu.blur();
return
}this.menu[m](l)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(m,l){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(m,l);
l.preventDefault()
}}});
f.extend(f.ui.autocomplete,{escapeRegex:function(l){return l.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(n,l){var m=new RegExp(f.ui.autocomplete.escapeRegex(l),"i");
return f.grep(n,function(o){return m.test(o.label||o.value||o)
})
}});
f.widget("ui.autocomplete",f.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(l){return l+(l>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(m){var l;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){return
}if(m&&m.length){l=this.options.messages.results(m.length)
}else{l=this.options.messages.noResults
}this.liveRegion.children().hide();
f("<div>").text(l).appendTo(this.liveRegion)
}});
var a=f.ui.autocomplete
}));
(function(a){a.extend(a.fn,{validate:function(b){if(!this.length){if(b&&b.debug&&window.console){console.warn("Nothing selected, can't validate, returning nothing.")
}return
}var c=a.data(this[0],"validator");
if(c){return c
}this.attr("novalidate","novalidate");
c=new a.validator(b,this[0]);
a.data(this[0],"validator",c);
if(c.settings.onsubmit){this.validateDelegate(":submit","click",function(d){if(c.settings.submitHandler){c.submitButton=d.target
}if(a(d.target).hasClass("cancel")){c.cancelSubmit=true
}if(a(d.target).attr("formnovalidate")!==undefined){c.cancelSubmit=true
}});
this.submit(function(d){if(c.settings.debug){d.preventDefault()
}function e(){var f;
if(c.settings.submitHandler){if(c.submitButton){f=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)
}c.settings.submitHandler.call(c,c.currentForm,d);
if(c.submitButton){f.remove()
}return false
}return true
}if(c.cancelSubmit){c.cancelSubmit=false;
return e()
}if(c.form()){if(c.pendingRequest){c.formSubmitted=true;
return false
}return e()
}else{c.focusInvalid();
return false
}})
}return c
},valid:function(){if(a(this[0]).is("form")){return this.validate().form()
}else{var c=true;
var b=a(this[0].form).validate();
this.each(function(){c=c&&b.element(this)
});
return c
}},removeAttrs:function(d){var b={},c=this;
a.each(d.split(/\s/),function(e,f){b[f]=c.attr(f);
c.removeAttr(f)
});
return b
},rules:function(e,b){var g=this[0];
if(e){var d=a.data(g.form,"validator").settings;
var i=d.rules;
var j=a.validator.staticRules(g);
switch(e){case"add":a.extend(j,a.validator.normalizeRule(b));
delete j.messages;
i[g.name]=j;
if(b.messages){d.messages[g.name]=a.extend(d.messages[g.name],b.messages)
}break;
case"remove":if(!b){delete i[g.name];
return j
}var h={};
a.each(b.split(/\s/),function(k,l){h[l]=j[l];
delete j[l]
});
return h
}}var f=a.validator.normalizeRules(a.extend({},a.validator.classRules(g),a.validator.attributeRules(g),a.validator.dataRules(g),a.validator.staticRules(g)),g);
if(f.required){var c=f.required;
delete f.required;
f=a.extend({required:c},f)
}return f
}});
a.extend(a.expr[":"],{blank:function(b){return !a.trim(""+a(b).val())
},filled:function(b){return !!a.trim(""+a(b).val())
},unchecked:function(b){return !a(b).prop("checked")
}});
a.validator=function(b,c){this.settings=a.extend(true,{},a.validator.defaults,b);
this.currentForm=c;
this.init()
};
a.validator.format=function(b,c){if(arguments.length===1){return function(){var d=a.makeArray(arguments);
d.unshift(b);
return a.validator.format.apply(this,d)
}
}if(arguments.length>2&&c.constructor!==Array){c=a.makeArray(arguments).slice(1)
}if(c.constructor!==Array){c=[c]
}a.each(c,function(d,e){b=b.replace(new RegExp("\\{"+d+"\\}","g"),function(){return e
})
});
return b
};
a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(b,c){this.lastActive=b;
if(this.settings.focusCleanup&&!this.blockFocusCleanup){if(this.settings.unhighlight){this.settings.unhighlight.call(this,b,this.settings.errorClass,this.settings.validClass)
}this.addWrapper(this.errorsFor(b)).hide()
}},onfocusout:function(b,c){if(!this.checkable(b)&&(b.name in this.submitted||!this.optional(b))){this.element(b)
}},onkeyup:function(b,c){if(c.which===9&&this.elementValue(b)===""){return
}else{if(b.name in this.submitted||b===this.lastElement){this.element(b)
}}},onclick:function(b,c){if(b.name in this.submitted){this.element(b)
}else{if(b.parentNode.name in this.submitted){this.element(b.parentNode)
}}},highlight:function(d,b,c){if(d.type==="radio"){this.findByName(d.name).addClass(b).removeClass(c)
}else{a(d).addClass(b).removeClass(c)
}},unhighlight:function(d,b,c){if(d.type==="radio"){this.findByName(d.name).removeClass(b).addClass(c)
}else{a(d).removeClass(b).addClass(c)
}}},setDefaults:function(b){a.extend(a.validator.defaults,b)
},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=a(this.settings.errorLabelContainer);
this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm);
this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer);
this.submitted={};
this.valueCache={};
this.pendingRequest=0;
this.pending={};
this.invalid={};
this.reset();
var b=(this.groups={});
a.each(this.settings.groups,function(e,f){if(typeof f==="string"){f=f.split(/\s/)
}a.each(f,function(h,g){b[g]=e
})
});
var d=this.settings.rules;
a.each(d,function(e,f){d[e]=a.validator.normalizeRule(f)
});
function c(g){var f=a.data(this[0].form,"validator"),e="on"+g.type.replace(/^validate/,"");
if(f.settings[e]){f.settings[e].call(f,this[0],g)
}}a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",c).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",c);
if(this.settings.invalidHandler){a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)
}},form:function(){this.checkForm();
a.extend(this.submitted,this.errorMap);
this.invalid=a.extend({},this.errorMap);
if(!this.valid()){a(this.currentForm).triggerHandler("invalid-form",[this])
}this.showErrors();
return this.valid()
},checkForm:function(){this.prepareForm();
for(var b=0,c=(this.currentElements=this.elements());
c[b];
b++){this.check(c[b])
}return this.valid()
},element:function(c){c=this.validationTargetFor(this.clean(c));
this.lastElement=c;
this.prepareElement(c);
this.currentElements=a(c);
var b=this.check(c)!==false;
if(b){delete this.invalid[c.name]
}else{this.invalid[c.name]=true
}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers)
}this.showErrors();
return b
},showErrors:function(c){if(c){a.extend(this.errorMap,c);
this.errorList=[];
for(var b in c){this.errorList.push({message:c[b],element:this.findByName(b)[0]})
}this.successList=a.grep(this.successList,function(d){return !(d.name in c)
})
}if(this.settings.showErrors){this.settings.showErrors.call(this,this.errorMap,this.errorList)
}else{this.defaultShowErrors()
}},resetForm:function(){if(a.fn.resetForm){a(this.currentForm).resetForm()
}this.submitted={};
this.lastElement=null;
this.prepareForm();
this.hideErrors();
this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
},numberOfInvalids:function(){return this.objectLength(this.invalid)
},objectLength:function(d){var c=0;
for(var b in d){c++
}return c
},hideErrors:function(){this.addWrapper(this.toHide).hide()
},valid:function(){return this.size()===0
},size:function(){return this.errorList.length
},focusInvalid:function(){if(this.settings.focusInvalid){try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")
}catch(b){}}},findLastActive:function(){var b=this.lastActive;
return b&&a.grep(this.errorList,function(c){return c.element.name===b.name
}).length===1&&b
},elements:function(){var c=this,b={};
return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){if(!this.name&&c.settings.debug&&window.console){console.error("%o has no name assigned",this)
}if(this.name in b||!c.objectLength(a(this).rules())){return false
}b[this.name]=true;
return true
})
},clean:function(b){return a(b)[0]
},errors:function(){var b=this.settings.errorClass.replace(" ",".");
return a(this.settings.errorElement+"."+b,this.errorContext)
},reset:function(){this.successList=[];
this.errorList=[];
this.errorMap={};
this.toShow=a([]);
this.toHide=a([]);
this.currentElements=a([])
},prepareForm:function(){this.reset();
this.toHide=this.errors().add(this.containers)
},prepareElement:function(b){this.reset();
this.toHide=this.errorsFor(b)
},elementValue:function(b){var c=a(b).attr("type"),d=a(b).val();
if(c==="radio"||c==="checkbox"){return a("input[name='"+a(b).attr("name")+"']:checked").val()
}if(typeof d==="string"){return d.replace(/\r/g,"")
}return d
},check:function(c){c=this.validationTargetFor(this.clean(c));
var i=a(c).rules();
var d=false;
var h=this.elementValue(c);
var b;
for(var j in i){var g={method:j,parameters:i[j]};
try{b=a.validator.methods[j].call(this,h,c,g.parameters);
if(b==="dependency-mismatch"){d=true;
continue
}d=false;
if(b==="pending"){this.toHide=this.toHide.not(this.errorsFor(c));
return
}if(!b){this.formatAndAdd(c,g);
return false
}}catch(f){if(this.settings.debug&&window.console){console.log("Exception occurred when checking element "+c.id+", check the '"+g.method+"' method.",f)
}throw f
}}if(d){return
}if(this.objectLength(i)){this.successList.push(c)
}return true
},customDataMessage:function(b,c){return a(b).data("msg-"+c.toLowerCase())||(b.attributes&&a(b).attr("data-msg-"+c.toLowerCase()))
},customMessage:function(c,d){var b=this.settings.messages[c];
return b&&(b.constructor===String?b:b[d])
},findDefined:function(){for(var b=0;
b<arguments.length;
b++){if(arguments[b]!==undefined){return arguments[b]
}}return undefined
},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||undefined,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")
},formatAndAdd:function(c,e){var d=this.defaultMessage(c,e.method),b=/\$?\{(\d+)\}/g;
if(typeof d==="function"){d=d.call(this,e.parameters,c)
}else{if(b.test(d)){d=a.validator.format(d.replace(b,"{$1}"),e.parameters)
}}this.errorList.push({message:d,element:c});
this.errorMap[c.name]=d;
this.submitted[c.name]=d
},addWrapper:function(b){if(this.settings.wrapper){b=b.add(b.parent(this.settings.wrapper))
}return b
},defaultShowErrors:function(){var c,d;
for(c=0;
this.errorList[c];
c++){var b=this.errorList[c];
if(this.settings.highlight){this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass)
}this.showLabel(b.element,b.message)
}if(this.errorList.length){this.toShow=this.toShow.add(this.containers)
}if(this.settings.success){for(c=0;
this.successList[c];
c++){this.showLabel(this.successList[c])
}}if(this.settings.unhighlight){for(c=0,d=this.validElements();
d[c];
c++){this.settings.unhighlight.call(this,d[c],this.settings.errorClass,this.settings.validClass)
}}this.toHide=this.toHide.not(this.toShow);
this.hideErrors();
this.addWrapper(this.toShow).show()
},validElements:function(){return this.currentElements.not(this.invalidElements())
},invalidElements:function(){return a(this.errorList).map(function(){return this.element
})
},showLabel:function(c,d){var b=this.errorsFor(c);
if(b.length){b.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
b.html(d)
}else{b=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(c)).addClass(this.settings.errorClass).html(d||"");
if(this.settings.wrapper){b=b.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(!this.labelContainer.append(b).length){if(this.settings.errorPlacement){this.settings.errorPlacement(b,a(c))
}else{b.insertAfter(c)
}}}if(!d&&this.settings.success){b.text("");
if(typeof this.settings.success==="string"){b.addClass(this.settings.success)
}else{this.settings.success(b,c)
}}this.toShow=this.toShow.add(b)
},errorsFor:function(c){var b=this.idOrName(c);
return this.errors().filter(function(){return a(this).attr("for")===b
})
},idOrName:function(b){return this.groups[b.name]||(this.checkable(b)?b.name:b.id||b.name)
},validationTargetFor:function(b){if(this.checkable(b)){b=this.findByName(b.name).not(this.settings.ignore)[0]
}return b
},checkable:function(b){return(/radio|checkbox/i).test(b.type)
},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")
},getLength:function(c,b){switch(b.nodeName.toLowerCase()){case"select":return a("option:selected",b).length;
case"input":if(this.checkable(b)){return this.findByName(b.name).filter(":checked").length
}}return c.length
},depend:function(c,b){return this.dependTypes[typeof c]?this.dependTypes[typeof c](c,b):true
},dependTypes:{"boolean":function(c,b){return c
},string:function(c,b){return !!a(c,b.form).length
},"function":function(c,b){return c(b)
}},optional:function(b){var c=this.elementValue(b);
return !a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"
},startRequest:function(b){if(!this.pending[b.name]){this.pendingRequest++;
this.pending[b.name]=true
}},stopRequest:function(b,c){this.pendingRequest--;
if(this.pendingRequest<0){this.pendingRequest=0
}delete this.pending[b.name];
if(c&&this.pendingRequest===0&&this.formSubmitted&&this.form()){a(this.currentForm).submit();
this.formSubmitted=false
}else{if(!c&&this.pendingRequest===0&&this.formSubmitted){a(this.currentForm).triggerHandler("invalid-form",[this]);
this.formSubmitted=false
}}},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:true,message:this.defaultMessage(b,"remote")})
}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},number:{number:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(b,c){if(b.constructor===String){this.classRuleSettings[b]=c
}else{a.extend(this.classRuleSettings,b)
}},classRules:function(c){var d={};
var b=a(c).attr("class");
if(b){a.each(b.split(" "),function(){if(this in a.validator.classRuleSettings){a.extend(d,a.validator.classRuleSettings[this])
}})
}return d
},attributeRules:function(c){var f={};
var b=a(c);
var d=b[0].getAttribute("type");
for(var g in a.validator.methods){var e;
if(g==="required"){e=b.get(0).getAttribute(g);
if(e===""){e=true
}e=!!e
}else{e=b.attr(g)
}if(/min|max/.test(g)&&(d===null||/number|range|text/.test(d))){e=Number(e)
}if(e){f[g]=e
}else{if(d===g&&d!=="range"){f[g]=true
}}}if(f.maxlength&&/-1|2147483647|524288/.test(f.maxlength)){delete f.maxlength
}return f
},dataRules:function(c){var f,d,e={},b=a(c);
for(f in a.validator.methods){d=b.data("rule-"+f.toLowerCase());
if(d!==undefined){e[f]=d
}}return e
},staticRules:function(c){var d={};
var b=a.data(c.form,"validator");
if(b.settings.rules){d=a.validator.normalizeRule(b.settings.rules[c.name])||{}
}return d
},normalizeRules:function(c,b){a.each(c,function(f,e){if(e===false){delete c[f];
return
}if(e.param||e.depends){var d=true;
switch(typeof e.depends){case"string":d=!!a(e.depends,b.form).length;
break;
case"function":d=e.depends.call(b,b);
break
}if(d){c[f]=e.param!==undefined?e.param:true
}else{delete c[f]
}}});
a.each(c,function(d,e){c[d]=a.isFunction(e)?e(b):e
});
a.each(["minlength","maxlength"],function(){if(c[this]){c[this]=Number(c[this])
}});
a.each(["rangelength","range"],function(){var d;
if(c[this]){if(a.isArray(c[this])){c[this]=[Number(c[this][0]),Number(c[this][1])]
}else{if(typeof c[this]==="string"){d=c[this].split(/[\s,]+/);
c[this]=[Number(d[0]),Number(d[1])]
}}}});
if(a.validator.autoCreateRanges){if(c.min&&c.max){c.range=[c.min,c.max];
delete c.min;
delete c.max
}if(c.minlength&&c.maxlength){c.rangelength=[c.minlength,c.maxlength];
delete c.minlength;
delete c.maxlength
}}return c
},normalizeRule:function(c){if(typeof c==="string"){var b={};
a.each(c.split(/\s/),function(){b[this]=true
});
c=b
}return c
},addMethod:function(b,d,c){a.validator.methods[b]=d;
a.validator.messages[b]=c!==undefined?c:a.validator.messages[b];
if(d.length<3){a.validator.addClassRules(b,a.validator.normalizeRule(b))
}},methods:{required:function(c,b,e){if(!this.depend(e,b)){return"dependency-mismatch"
}if(b.nodeName.toLowerCase()==="select"){var d=a(b).val();
return d&&d.length>0
}if(this.checkable(b)){return this.getLength(c,b)>0
}return a.trim(c).length>0
},email:function(c,b){return(this.optional(b)!=false)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(c)
},url:function(c,b){return(this.optional(b)!=false)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(c)
},date:function(c,b){return(this.optional(b)!=false)||!/Invalid|NaN/.test(new Date(c).toString())
},dateISO:function(c,b){return(this.optional(b)!=false)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(c)
},number:function(c,b){return(this.optional(b)!=false)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(c)
},digits:function(c,b){return(this.optional(b)!=false)||/^\d+$/.test(c)
},creditcard:function(f,c){if(this.optional(c)){return"dependency-mismatch"
}if(/[^0-9 \-]+/.test(f)){return false
}var g=0,e=0,b=false;
f=f.replace(/\D/g,"");
for(var h=f.length-1;
h>=0;
h--){var d=f.charAt(h);
e=parseInt(d,10);
if(b){if((e*=2)>9){e-=9
}}g+=e;
b=!b
}return(g%10)===0
},minlength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(d,b);
return(this.optional(b)!=false)||c>=e
},maxlength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);
return(this.optional(b)!=false)||c<=e
},rangelength:function(d,b,e){var c=a.isArray(d)?d.length:this.getLength(a.trim(d),b);
return(this.optional(b)!=false)||(c>=e[0]&&c<=e[1])
},min:function(c,b,d){return(this.optional(b)!=false)||c>=d
},max:function(c,b,d){return(this.optional(b)!=false)||c<=d
},range:function(c,b,d){return(this.optional(b)!=false)||(c>=d[0]&&c<=d[1])
},equalTo:function(c,b,e){var d=a(e);
if(this.settings.onfocusout){d.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(b).valid()
})
}return c===d.val()
},remote:function(f,c,g){if(this.optional(c)){return"dependency-mismatch"
}var d=this.previousValue(c);
if(!this.settings.messages[c.name]){this.settings.messages[c.name]={}
}d.originalMessage=this.settings.messages[c.name].remote;
this.settings.messages[c.name].remote=d.message;
g=typeof g==="string"&&{url:g}||g;
if(d.old===f){return d.valid
}d.old=f;
var b=this;
this.startRequest(c);
var e={};
e[c.name]=f;
a.ajax(a.extend(true,{url:g,mode:"abort",port:"validate"+c.name,dataType:"json",data:e,success:function(i){b.settings.messages[c.name].remote=d.originalMessage;
var k=i===true||i==="true";
if(k){var h=b.formSubmitted;
b.prepareElement(c);
b.formSubmitted=h;
b.successList.push(c);
delete b.invalid[c.name];
b.showErrors()
}else{var l={};
var j=i||b.defaultMessage(c,"remote");
l[c.name]=d.message=a.isFunction(j)?j(f):j;
b.invalid[c.name]=true;
b.showErrors(l)
}d.valid=k;
b.stopRequest(c,k)
}},g));
return"pending"
}}});
a.format=a.validator.format
}(jQuery));
(function(c){var a={};
if(c.ajaxPrefilter){c.ajaxPrefilter(function(f,e,g){var d=f.port;
if(f.mode==="abort"){if(a[d]){a[d].abort()
}a[d]=g
}})
}else{var b=c.ajax;
c.ajax=function(e){var f=("mode" in e?e:c.ajaxSettings).mode,d=("port" in e?e:c.ajaxSettings).port;
if(f==="abort"){if(a[d]){a[d].abort()
}a[d]=b.apply(this,arguments);
return a[d]
}return b.apply(this,arguments)
}
}}(jQuery));
(function(a){a.extend(a.fn,{validateDelegate:function(d,c,b){return this.bind(c,function(e){var f=a(e.target);
if(f.is(d)){return b.apply(f,arguments)
}})
}})
}(jQuery));
$.validator.prototype.showLabel=function(b,c){var a=this.errorsFor(b);
if(a.length){a.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
a.html(c)
}else{a=$("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||"");
if(this.settings.wrapper){a=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()
}if(!this.labelContainer.append(a).length){if(this.settings.errorPlacement){this.settings.errorPlacement(a,$(b))
}else{if(b.type==="radio"){a.insertAfter($(b).parent().parent())
}else{a.insertAfter(b)
}}}}if(!c&&this.settings.success){a.text("");
if(typeof this.settings.success==="string"){a.addClass(this.settings.success)
}else{this.settings.success(a,b)
}}this.toShow=this.toShow.add(a)
};
jQuery.validator.addMethod("checkNone",function(b,a){if($(a.form).find(":input:checked[name='"+(a.name)+"']").val()==""){return false
}else{return true
}});
jQuery.validator.addMethod("phoneNo",function(b,a){if(false===/^\+?[0-9]{1,}$/.test(a.value)){return false
}else{return true
}});
jQuery.validator.addMethod("selectNone",function(b,a){if(a.value==""){return false
}else{return true
}});
jQuery.validator.addMethod("selectNonePhoneAreaCode",function(b,a,c){if(c==""){return false
}else{return true
}});
jQuery.validator.addMethod("maxCheckRequired",function(b,a,c){if(b==""){b="0"
}if(c==""){c="0"
}if(/^[0-9]+$/.test(b)&&/^[0-9]+$/.test(c)){if((Number(b)+Number(c))==100){return true
}else{return false
}}else{return false
}});
jQuery.validator.addMethod("maxCheckRequiredForCards",function(b,a,c){if(b==""){b="0"
}if(c==""){c="0"
}if(/^[0-9]+$/.test(b)&&/^[0-9]+$/.test(c)){if((Number(b)+Number(c))>=1){return true
}else{return false
}}else{return false
}});
jQuery.validator.addMethod("alphaHyphenComma",function(b,a){return(this.optional(a)!=false)||/^[\sa-zA-Z'-][\sa-zA-Z'-]*$/.test(b)
});
jQuery.validator.addMethod("alphaNum",function(b,a){return(this.optional(a)!=false)||/^[0-9a-zA-Z]*$/.test(b)
});
jQuery.validator.addMethod("alphaNumSelectSpecial",function(b,a){return(this.optional(a)!=false)||/^[\'\.\\\/\,\(\)\\&\-\/\s\-0-9a-zA-Z]*$/.test(b)
});
jQuery.validator.addMethod("alphaNumSelectSpecialExtra",function(b,a){return(this.optional(a)!=false)||/^[\?\.\\'\/\,\(\)\&\-\/\s\-0-9a-zA-Z]*$/.test(b)
});
jQuery.validator.addMethod("formattedNumeric",function(b,a){return(this.optional(a)!=false)||/^[\,0-9]*$/.test(b)
});
jQuery.validator.addMethod("formattedRange",function(b,a,d){var c=Number(b.replace(/,/g,""));
return(this.optional(a)!=false)||(c>=d[0]&&c<=d[1])
});
jQuery.validator.addMethod("simpleEmail",function(b,a){return(this.optional(a)!=false)||/^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,6})$/.test(b)
});
jQuery.validator.addMethod("simpleURL",function(b,a){return(this.optional(a)!=false)||/^[a-zA-Z0-9:;@\+\$!\*\')(,\-_%\?\=&\./]+$/.test(b)
});
function parseDashOrSlashDate(f){var a=f.replace(/-/g,"/");
var e=a.split("/");
var d=parseInt(e[2],10);
var g=parseInt(e[1],10);
var b=parseInt(e[0],10);
var c=new Date(d,g-1,b);
if(!(c.getFullYear()==d&&(c.getMonth()+1)==g&&c.getDate()==b)){c=null
}return c
}jQuery.validator.addMethod("properDate",function(d,c){if((this.optional(c)!=false)){return true
}var a=d.replace(/-/g,"/");
if(!/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/.test(a)){return false
}var b=parseDashOrSlashDate(d);
return(b!=null)
},"Please enter a valid date (in DD/MM/YYYY format)");
jQuery.validator.addMethod("olderThan",function(c,b,d){var a=parseDashOrSlashDate(c);
a.setFullYear(a.getFullYear()+d);
return(this.optional(b)!=false)||a<=new Date()
});
jQuery.validator.addMethod("todayOrLater",function(e,c){var b=parseDashOrSlashDate(e);
var d=new Date();
var a=new Date(d.getFullYear(),d.getMonth(),d.getDate());
return(this.optional(c)!=false)||b>=a
});
jQuery.validator.addMethod("youngerThan",function(c,b,d){var a=parseDashOrSlashDate(c);
a.setFullYear(a.getFullYear()+d);
return(this.optional(b)!=false)||a>=new Date()
});
jQuery.validator.addMethod("valueEqualTo",function(b,a,c){if(a.value!=c){return false
}else{return true
}});
"use strict";
function Util(){}Util.prototype.isIpad=function(){return/ipad/i.test(navigator.userAgent)
};
Util.prototype.isAEMAuthorMode=function(a){a=a||window.location.href;
return a.indexOf("content")>-1
};
Util.prototype.isIE=function(){var b=window.navigator.userAgent;
var a=b.indexOf("MSIE");
if(a>0||!!b.match(/Trident.*rv\:11\./)){return true
}return false
};
Util.prototype.getCurrentEnvironmentByUrl=function(b){var a=[{env:"local",rule:/localhost|127.0.0.1|10.74/gi},{env:"uat",rule:/bne3-(0924d|0923d)|202.139.254.(249|241)/gi},{env:"pre",rule:/bne3-(0952d|0951d)|210.247.224.221|202.148.153.5/gi}];
var d="prod";
for(var c=0;
c<a.length;
c++){if(a[c].rule.test(b)){d=a[c].env;
break
}}return d
};
Util.prototype.toConsistantId=function(a){return a.replace(/(\_\d+)$/g,"")
};
Util.prototype.shuffleArray=function(a){a.sort(function(){return 0.5-Math.random()
});
return a
};
Util.prototype.getUrlParameter=function(b){var d=decodeURIComponent(window.location.search.substring(1)),c=d.split("&"),e,a;
for(a=0;
a<c.length;
a++){e=c[a].split("=");
if(e[0]===b){return e[1]===undefined?true:e[1]
}}};
Util.prototype.toCamelCase=function(d){d=d||"";
d=d.replace(/[-_]+/g,"-");
d=d.split("-");
var c="";
for(var b=0;
b<d.length;
b++){if(b){var a=d[b].split("");
a[0]=a[0].toUpperCase();
a=a.join("");
c+=a
}else{c+=d[b]
}}return c
};
Util.prototype.resetInput=function(b,a){a=a||"text";
switch(a){case"text":b.val("");
break;
case"radio":b.prop("checked",false);
break;
default:b.val("")
}};
Util.prototype.hasAttribute=function(c,b){var a=$(c).attr(b);
return !!a
};
Util.prototype.isFHBForm=function(){return $("body").hasClass("fhb")
};
Util.prototype.isLongForm=function(){return $("body").hasClass("long")
};
Util.prototype.isShortForm=function(){return $("body").hasClass("short")
};
Util.prototype.isShortQuestionForm=function(){return $("body").hasClass("short-form-with-question")
};
Util.prototype.isIpad=function(){return/ipad/i.test(navigator.userAgent)
};
"use strict";
function PPR(){this.util=new Util();
this.formWrapper=null;
this.isFromFhb=false;
this.$body=null
}PPR.prototype.init=function(){this.initPage();
var a=$("#pprForm");
if(a.length){this.initForm(a)
}};
PPR.prototype.initPage=function(){var a=this;
this.$body=$("body");
this.listenHeaderEvents();
this.resetInputs();
this.detectDevice();
this.widthAdjust();
this.ipadInit();
this.initTelLink();
this.listenTelLink();
this.initPhonenumberField();
this.scrollToTop();
this.listenAccessibilityChange();
$(window).resize(function(){a.detectDevice();
a.listenTelLink();
a.widthAdjust()
})
};
PPR.prototype.initForm=function(a){this.formWrapper=new FormWrapper(a);
this.formWrapper.init()
};
PPR.prototype.decideWhichFormToGo=function(){var a=document.querySelector("body");
this.isFromFhb=this.util.getUrlParameter("fhb");
if(this.isFromFhb){a.className=a.className?a.className+=" long fhb":a.className+="long fhb"
}else{switch(this.util.getUrlParameter("form")){case"b":a.className=a.className?a.className+=" short":a.className+="short";
break;
case"a":a.className=a.className?a.className+=" long":a.className+="long";
break;
case"c":a.className=a.className?a.className+=" short-form-with-contactus":a.className+="short-form-with-contactus";
break;
case"d":a.className=a.className?a.className+=" short-form-with-question":a.className+="short-form-with-question";
break;
default:a.className=a.className?a.className+=" short":a.className+="short"
}}};
PPR.prototype.listenHeaderEvents=function(){var a=this;
$(".header__main .mobile__menu").click(function(){a.$body.addClass("menu__open");
$(".mobile__menu .mobile__menu__trigger").addClass("open")
});
$(".mobile__menu__section .mobile__menu, .overlay").click(function(){if(a.$body.hasClass("menu__open")){a.$body.removeClass("menu__open");
$(".mobile__menu .mobile__menu__trigger").removeClass("open")
}});
$(window).resize(function(){if(a.$body.hasClass("desktop")&&a.$body.hasClass("menu__open")){$(".mobile__menu__section .mobile__menu").click()
}})
};
PPR.prototype.resetInputs=function(){this.util.resetInput($('.property__block input[type="text"]'));
this.util.resetInput($(".property__block select"));
this.util.resetInput($('.property__block input[type="radio"]'),"radio");
return this
};
PPR.prototype.widthAdjust=function(){var c=$(window).width()-30;
var d=$(window).width();
var b=768;
var g=405;
var h=348;
var f=1077;
var e=$("#phone_tips_text").height()+40;
if(d<b){$("#postcode-tips").css("width",c+"px");
$("#postcode-tips").css("bottom",35+"px");
if(g<=d){$("#phone-tips").css("top","auto");
$("#phone-tips").css("height","tipsHeightpx");
$("#phone-tips").css("width",c+"px")
}if(d<=h){$("#phone-tips").css("top",-115+"px");
$("#phone-tips").css("height",e+"px");
$("#phone-tips").css("width",c+"px");
$("#phone-tips").css("position","absolute")
}if(d<g||d>h){$("#phone-tips").css("top",-95+"px");
$("#phone-tips").css("height",e+"px");
$("#phone-tips").css("width",c+"px");
$("#phone-tips").css("position","absolute")
}}if(d>=b){$("#phone-tips").css("top",-103+"px");
$("#phone-tips").css("width",400+"px");
$("#phone-tips").css("height",90+"px");
$("#postcode-tips").css("width",400+"px");
$("#postcode-tips").css("bottom",16+"px");
$("#wouldBeContact").css("line-height",22+"px");
if(d>f){$("#wouldBeContact").css("line-height",40+"px")
}}};
PPR.prototype.detectDevice=function(){var a=this;
if($(".header__nav").is(":visible")){a.$body.addClass("desktop").removeClass("tablet").removeClass("mobile")
}else{if($(".background").is(":visible")){a.$body.addClass("tablet").removeClass("desktop").removeClass("mobile")
}else{a.$body.addClass("mobile").removeClass("desktop").removeClass("tablet")
}}};
PPR.prototype.ipadInit=function(){var b=$(".background");
var a=$(".property__bar__action .non__mobile");
if(this.util.isIpad()){this.$body.addClass("ipad");
b.hide();
a.css("opacity",1);
$(".addresslookup").on("click",".error a",function(){this.removeAttribute("href")
})
}else{this.$body.removeClass("ipad")
}};
PPR.prototype.initTelLink=function(){$("a").each(function(){var b=$(this);
var a=b.attr("href");
if(a&&(a.toLowerCase().indexOf("tel:")>=0)){b.attr("link",a)
}})
};
PPR.prototype.listenTelLink=function(){if(this.$body.hasClass("desktop")||(this.$body.hasClass("ipad")&&!this.$body.hasClass("mobile"))||this.$body.hasClass("tablet")){$("a").each(function(){var a=$(this);
if(a.attr("href")&&a.attr("href").indexOf("tel:")>-1){a.removeAttr("href");
a.addClass("no--cursor")
}})
}else{$("a").each(function(){var a=$(this);
if(a.attr("link")&&a.attr("link").indexOf("tel:")>-1){a.attr("href",a.attr("link"));
a.removeClass("no--cursor")
}})
}};
PPR.prototype.initPhonenumberField=function(){var f=$(".input__phone-number.primary"),a=$(".input__region-number.primary"),d=$(".input__mobile-number.primary");
if($("#primaryPhoneType").val()=="Mobile"){a.addClass("hide");
f.addClass("hide");
d.removeClass("hide")
}else{a.removeClass("hide");
f.removeClass("hide");
d.addClass("hide")
}var c=$(".input__phone-number.second"),e=$(".input__region-number.second"),b=$(".input__mobile-number.second");
if($("#secondaryPhoneType").val()=="Work"||$("#secondaryPhoneType").val()=="Home"){e.removeClass("hide");
c.removeClass("hide");
b.addClass("hide")
}else{e.addClass("hide");
c.addClass("hide");
b.removeClass("hide")
}};
PPR.prototype.scrollToTop=function(){$("body,html").animate({scrollTop:0},400,function(){$("#pprForm").find("input, select, button").removeAttr("disabled")
})
};
PPR.prototype.doNotSupportIEBelowVersion=function(d){var c=this;
var b=function(){document.body.style.backgroundColor="white";
document.body.innerHTML='<div class="message__wrapper"><div class="message__box warning">It looks like you are viewing this site with a very old browser. Please switch to a newer browser for the full ANZ Property Profile Report experience. If you continue to have issues, please contact ANZ on <a href=\'tel:1300308402\'>1300 308 402</a></div></div>'
};
if(this.util.isIE()){var a=$.browser.version;
if(a<d){b()
}}};
PPR.prototype.listenAccessibilityChange=function(){var a=$(".form__wrapper .property__block");
a.on("focus",".property_bar_action_access",function(){$(this).click()
});
a.on("focus",".property__bar__action button",function(){$(this).closest(".property__accordion").addClass(".wrapper--focused")
});
a.on("blur",".property__bar__action button",function(){$(this).closest(".property__accordion").removeClass(".wrapper--focused")
});
a.on("blur",".hiddenRadio",function(){$(this).addClass("hidden")
});
a.on("focus",".label",function(){$(this).next().children(".hiddenRadio").removeClass("hidden")
});
a.on("focus",".error",function(){$(this).prev().removeClass("hidden")
})
};
PPR.prototype.enableLivechat=function(a){$.getScript("/etc/designs/ppr/clientLibs/js/libs/livechat/livechat-config.js",function(){$.getScript("/etc/designs/ppr/clientLibs/js/libs/livechat/livechat-inner.js",function(){$.getScript("/etc/designs/ppr/clientLibs/js/libs/livechat/tag.js",function(){if(a){a()
}})
})
})
};
function FormWrapper(a){this.$form=a;
this.$submitBtn=a.find('input[type="submit"]');
this.util=new Util();
this.isLongForm=this.util.isLongForm();
this.isFHBForm=this.util.isFHBForm();
this.isShortQuestionForm=this.util.isShortQuestionForm();
this.validator=this.initValidator();
this.propertyDetails=new PropertyDetails(a,this.validator);
this.contactDetails=new ContactDetails(a,this.validator);
this.disclaimer=new Disclaimer();
this.help=new Help();
this.yourPlan=new YourPlan(a,this.validator);
this.loadBalancingConfig={applyPath:{local:["https://127.0.0.1:9000/apply1.anz.com/pprROF/","https://127.0.0.1:9001/apply2.anz.com/pprROF/"],uat:["https://olapplytst1.dev.anz:447/pprROF/"],pre:["https://olapplytst1.dev.anz:447/pprROF/"],prod:["https://apply1.anz.com/pprROF/","https://apply2.anz.com/pprROF/"]}};
this.cfg={successPageName:"successful.html",failurePageName:"failure.html"}
}FormWrapper.prototype.init=function(){this.getApplyPath();
this.propertyDetails.initListeners();
this.contactDetails.initListeners();
this.disclaimer.initListeners();
this.help.initListeners();
this.yourPlan.initListeners();
this.listenSubmit()
};
FormWrapper.prototype.getApplyPath=function(){var d=this;
var a=function(e){if(typeof e==="undefined"){e=0
}$.ajax({url:c[e]+"dynamicUrlLocator.js",type:"GET",timeout:15*1000,async:false}).then(function(){d.enableAllInputs();
d.$form.attr("apply-path",c[e])
},function(){e++;
if(e<c.length){a(e)
}})
};
var b=this.util.getCurrentEnvironmentByUrl(window.location.href);
var c=this.loadBalancingConfig.applyPath[b];
c=this.util.shuffleArray(c);
a();
return this
};
FormWrapper.prototype.enableAllInputs=function(){this.$form.find("input, select, textarea, button").removeAttr("disabled");
return this
};
FormWrapper.prototype.disableAllInputs=function(){this.$form.find("input, select, textarea, button").each(function(){$(this).attr("disabled","disabled")
});
return this
};
FormWrapper.prototype.resetPhoneAreaCode=function(){if($("#secondaryPhoneType").val()=="Mobile"){$("#secondaryPhoneAreaCode").val("")
}else{$("#secondaryPhoneAreaCode").val("02")
}};
FormWrapper.prototype.generateXMLcomponent=function(h,g,b){var a=Array.prototype.slice.call(arguments);
var h=a[0];
var g,b;
var e="<"+h;
var d="</"+h+">";
if(!h||$.type(h)!="string"){return
}if($.type(a[1])=="undefined"){return e+">"+d
}else{if($.type(a[1])=="string"){g=a[1];
if(a[2]&&$.type(a[2])=="object"){b=a[2]
}}if($.type(a[1])=="object"&&!a[2]){b=a[1];
g=""
}var f="";
if(b){for(var c in b){f+=" "+c+'="'+b[c]+'"'
}}if(g){return e+f+">"+g+d
}else{return e+"/>"
}}};
FormWrapper.prototype.toXML=function(g){var h=this;
var a=0;
var f=this.$form.find("input, textarea, button, select");
var d={xmlHeader:'<?xml version="1.0" encoding="UTF-8"?>',prefix:"<formData>",suffix:"</formData>",addressesStart:"<addresses>",addressStart:"<address>",addressEnd:"</address>",addressesEnd:"</addresses>"};
var e=d.xmlHeader+d.prefix;
e+=h.generateXMLcomponent("formName",$("#formName").val(),{type:$("#formName").attr("data-fieldtype")});
e+=h.generateXMLcomponent("formVersion",$("#formVersion").val(),{type:$("#formVersion").attr("data-fieldtype")});
e+=h.generateXMLcomponent("webVisID",$("#webVisID").val(),{type:$("#webVisID").attr("data-fieldtype")});
e+=h.generateXMLcomponent("httpReferrer",encodeURIComponent(document.referrer),{type:$("#prmHttpReferrer").attr("data-fieldtype")});
e+=h.generateXMLcomponent("sourcecode_1","",{type:$("#prmSourcecode_1").attr("data-fieldtype")});
e+=h.generateXMLcomponent("httpAgent",window.navigator.userAgent,{type:$("#httpAgent").attr("data-fieldtype")});
e+=d.addressesStart;
$(".cp-property-details").find(".property__accordion").each(function(){a++;
var r=[];
$(this).find('input[type="radio"]').each(function(){var i=$(this).attr("data-fieldname");
if($.inArray(i,r)<0){r.push(i)
}});
e+=d.addressStart;
var l=[];
var q=[];
$(this).find(".form__item").each(function(){var i=$(this);
if(h.isFHBForm||h.isLongForm||h.isShortQuestionForm){i.find("input, select").each(function(){var j=$(this);
if(j.attr("type")=="radio"){if(j.is(":checked")){l.push(j);
q.push(j.attr("data-fieldname"))
}}else{l.push(j)
}})
}else{if(i.hasClass("short-form-only")){i.find("input, select").each(function(){l.push($(this))
})
}}});
for(var o=0;
o<l.length;
o++){var s=h.util.toConsistantId(l[o].attr("id"));
s=h.util.toCamelCase(s);
if(h.util.toConsistantId(l[o].attr("id"))=="propertyAddress"){e+=h.generateXMLcomponent(s,l[o].data("addrName"),{type:l[o].attr("data-fieldtype")})
}else{if(l[o].attr("type")=="radio"){e+=h.generateXMLcomponent(l[o].data("fieldname"),l[o].val(),{type:l[o].attr("data-fieldtype")})
}else{e+=h.generateXMLcomponent(s,l[o].val(),{type:l[o].attr("data-fieldtype")})
}}}var p=r.length;
for(var o=0;
o<p;
o++){for(var n=0;
n<q.length;
n++){if(r[o]==q[n]){r.splice(o,1);
o--;
p--
}}}for(var m=0;
m<r.length;
m++){e+=h.generateXMLcomponent(r[m],"",{type:"confirm"})
}e+=d.addressEnd
});
e+=d.addressesEnd;
$("#noOfProperties").val(a);
var c=[];
if(this.isFHBForm||this.isLongForm){$(".cp-contact-details").find("input, select").each(function(){var i=$(this);
if(!$(this).closest(".long-form-hidden").length){c.push(i)
}})
}else{$(".cp-contact-details").find("input:visible, select:visible").each(function(){var i=$(this);
if(!$(this).closest(".short-form-hidden").length){c.push(i)
}})
}for(var b=0;
b<c.length;
b++){if(c[b].attr("type")=="radio"){if(c[b].is(":checked")&&(c[b].attr("name")!=="lenderContactOpt")){e+=h.generateXMLcomponent(h.util.toCamelCase(c[b].attr("data-fieldname")),c[b].val(),{type:c[b].attr("data-fieldtype")})
}}else{e+=h.generateXMLcomponent(h.util.toCamelCase(c[b].attr("data-fieldname")),c[b].val(),{type:c[b].attr("data-fieldtype")})
}}$(".cp-we-are-help").find("input:visible, select:visible").each(function(){var i=$(this);
if(i.attr("type")=="radio"){if(i.is(":checked")){e+=h.generateXMLcomponent(h.util.toCamelCase(i.attr("data-fieldname")),i.val(),{type:$(this).attr("data-fieldtype")})
}}else{e+=h.generateXMLcomponent(h.util.toCamelCase(i.attr("data-fieldname")),i.val(),{type:$(this).attr("data-fieldtype")})
}});
if($("body").find(".short-form-with-question")){$(".cp-your-plan").find("select:visible").each(function(){var i=$(this);
e+=h.generateXMLcomponent(h.util.toCamelCase(i.attr("data-fieldname")),i.val(),{type:$(this).attr("data-fieldtype")})
})
}e+=d.suffix;
if(g){return encodeURIComponent(e)
}return e
};
FormWrapper.prototype.collectFormData=function(){var a=this.toXML(true);
var b=this.isLongForm?"long":"short";
var c="formType="+b+"&xmlData="+a+"&referringFormURL="+encodeURIComponent(location.href);
return c
},FormWrapper.prototype.listenSubmit=function(){var a=this;
this.$submitBtn.click(function(g){g.preventDefault();
a.resetPhoneAreaCode();
var f=a.validator.form();
var d=a.$form.attr("apply-path");
if(f&&d){a.disableAllInputs();
a.$submitBtn.val("Submitting...");
var b=a.collectFormData();
$.ajax({type:"post",timeout:30*1000,url:d+"submit",data:b}).success(function(e){if(e){window.location.href=a.getDestinationUrl(a.cfg.successPageName,"enquiryid",e)
}else{window.location.href=a.getDestinationUrl(a.cfg.failurePageName)
}}).error(function(e){window.location.href=a.getDestinationUrl(a.cfg.failurePageName)
})
}else{var c=$(".error").offset().top-150;
c=c<0?0:c;
$("html, body").animate({scrollTop:c},500)
}})
};
FormWrapper.prototype.getDestinationUrl=function(a,c,d){var b=window.location.pathname.split("/");
b.pop();
b=b.join("/");
if(c&&d){return b+"/"+a+this.addUrlParam(window.location.search,c,d)
}return b+"/"+a+window.location.search
};
FormWrapper.prototype.addUrlParam=function(b,a,d){var e=a+"="+d,c="?"+e;
if(b){c=b.replace(new RegExp("([?&])"+a+"[^&]*"),"$1"+e);
if(c===b){c+="&"+e
}}return c
};
FormWrapper.prototype.addCustomizedRules=function(){function b(){var c=$(".property__block .expanded").find(".address__flag").data("addresses");
return c===undefined?[]:c.split("|")
}function a(c){var d=b();
return $.inArray(c,d)>-1
}$.validator.addMethod("addressValidate",function(d,c){return a(d)>0
});
$.validator.addMethod("requireChecked",function(d,c){if(!$("[name='"+c.name+"']:checked").val()){return false
}else{return true
}});
$.validator.addMethod("phoneNocheck",function(d,c){if(c.value==""){return true
}if(false===/^\+?[0-9]{1,}$/.test(c.value)){return false
}else{return true
}});
$.validator.addMethod("hyphenCheck",function(d,c){var e=!c.value||c.value.indexOf("--")>-1||c.value[0]=="-"||c.value[c.value.length-1]=="-";
if(e){return false
}else{return true
}});
$.validator.addMethod("alphaHyphenCommaTrim",function(d,c){return(d.length===d.trim().length)&&d.trim().indexOf("  ")<0&&(/^[\sa-zA-Z'-][\sa-zA-Z'-]*$/.test(d))
})
};
FormWrapper.prototype.initValidator=function(){this.addCustomizedRules();
return $("#pprForm").validate({rules:{propertyType:{required:true},propertyAddress:{required:true,minlength:5,addressValidate:true},propertyOwner:{requireChecked:true},anzCustomer:{requireChecked:true},optionHelp:{requireChecked:true},optionHelp_1:{requireChecked:true},sellPlan:{requireChecked:true},reasonOption:{requireChecked:true},buySellWithin:{requireChecked:true},title:{required:true},lenderContactOpt:{requireChecked:true},firstName:{required:true,minlength:2,maxlength:30,alphaHyphenCommaTrim:true,hyphenCheck:true},lastName:{required:true,minlength:2,maxlength:30,alphaHyphenCommaTrim:true,hyphenCheck:true},primaryPhoneAreaCode:{required:true},primaryPhoneNumber:{required:true,minlength:8,phoneNo:true},primaryPhoneNumber_1:{required:true,minlength:10,phoneNo:true},primaryMobileNumber:{required:true,minlength:10,phoneNo:true},secondaryPhoneNumber:{minlength:8,phoneNocheck:true},secondaryMobileNumber:{minlength:10,phoneNocheck:true},email:{required:true,maxlength:70,email:true,simpleEmail:true},confirmEmail:{required:true,maxlength:70,email:true,simpleEmail:true,equalTo:"#email"},postCode:{required:true,minlength:4,digits:true},postCode_1:{required:true,minlength:4,digits:true},myMainReasonForRequesting:{required:true},buyOrSellProperty:{required:true}},messages:{propertyType:{required:"Please select a property type"},propertyAddress:{required:"This field is required",minlength:"Please enter a minimum of 5 alphabetic characters for your property address",addressValidate:"Address not found, please contact ANZ on <span class='none__mobile__call'>1300 308 402</span><a class='mobile__call' href='tel:1300308402'>1300 308 402</a>"},propertyOwner:{requireChecked:"This field is required"},anzCustomer:{requireChecked:"This field is required"},optionHelp:{requireChecked:"This field is required"},optionHelp_1:{requireChecked:"This field is required"},sellPlan:{requireChecked:"This field is required"},reasonOption:{requireChecked:"This field is required"},buySellWithin:{requireChecked:"This field is required"},lenderContactOpt:{requireChecked:"This field is required"},title:{required:"Please select a title"},firstName:{required:"Please enter a first name (a minimum of 2 alphabetic characters)",minlength:"Please enter a minimum of 2 alphabetic characters for the first name",alphaHyphenCommaTrim:"Please enter only alphabetic characters for the first name",hyphenCheck:"Please enter only alphabetic characters for the first name"},lastName:{required:"Please enter a last name (a minimum of 2 alphabetic characters)",minlength:"Please enter a minimum of 2 alphabetic characters for the last name",alphaHyphenCommaTrim:"Please enter only alphabetic characters for the last name",hyphenCheck:"Please enter only alphabetic characters for the last name"},primaryPhoneAreaCode:{required:"Please choose a phone area code"},primaryPhoneNumber:{required:"Please enter the primary contact number",minlength:"Please enter 8 digits for the primary contact number",phoneNo:"Please enter only numeric characters for the primary contact number"},primaryPhoneNumber_1:{required:"Please enter the  contact number",minlength:"Please enter 10 digits for the  contact number",phoneNo:"Please enter only numeric characters for the  contact number"},primaryMobileNumber:{required:"Please provide your primary mobile number",minlength:"Please enter 10 digits for the primary mobile number",phoneNo:"Please enter only numeric characters for the primary mobile number"},secondaryPhoneNumber:{minlength:"Please enter 8 digits for the secondary contact number",phoneNocheck:"Please enter only numeric characters for the secondary contact number"},secondaryMobileNumber:{minlength:"Please enter 10 digits for the secondary contact number",phoneNocheck:"Please enter only numeric characters for the secondary contact number"},email:{required:"Please enter a valid email address <br>(e.g. enquiries@companyname.com)",email:"Please enter a valid email address <br>(e.g. enquiries@companyname.com)",simpleEmail:"Please enter a valid email address <br>(e.g. enquiries@companyname.com)"},confirmEmail:{required:"Please enter a valid email address <br>(e.g. enquiries@companyname.com)",email:"Please enter a valid email address <br>(e.g. enquiries@companyname.com)",simpleEmail:"Please enter a valid email address <br>(e.g. enquiries@companyname.com)",equalTo:"The email address doesn’t match"},postCode:{required:"Please enter a postcode",digits:"Please enter only numeric characters for the postcode",minlength:"Please enter 4 digits for the postcode"},postCode_1:{required:"Please enter a postcode",digits:"Please enter only numeric characters for the postcode",minlength:"Please enter 4 digits for the postcode"},myMainReasonForRequesting:{required:"Please select a main reason for requesting"},buyOrSellProperty:{required:"Please select a buy or sell property"}},errorPlacement:function(a,b){a.attr("tabindex","0");
a.appendTo(b.parents(".inputs"))
},highlight:function(b,a){$(b).addClass("error__style").parents(".inputs").addClass("inputs__error")
},unhighlight:function(c,b){$(c).removeClass("error__style");
var a=$(c).parents(".inputs");
if(!a.find(".error__style").length){a.removeClass("inputs__error")
}a.find("label[for='"+c.name+"']."+b).remove()
},onfocusout:function(a){this.element(a)
},onkeyup:false})
};
function PropertyDetails(a,b){this.$form=a;
this.util=new Util();
this.serv=new PropertyDetailService(b);
this.$addPropertyBtn=$(".action__add");
this.$propertyBlock=$(".property__block");
this.$plusBtn=$(".action__plus")
}PropertyDetails.prototype.initListeners=function(){this.listenAddressLookUp();
this.listenPropertyDetailsUIChange();
if(this.util.isFHBForm()){$("#propertyOwner_no").trigger("click")
}};
PropertyDetails.prototype.listenAddressLookUp=function(c){var g=this;
var e=this.$form.attr("apply-path");
var d=$(".property__block");
var f;
var a=[];
var b=[];
$(".property__block").on("keydown.autocomplete",".property__address",function(){$(this).autocomplete({appendTo:".expanded .address__ui",source:function(h,j){if(g.serv.isTooLongOrTooShort(h.term)){return
}var i=this._value().replace("/"," ");
$.ajax({type:"get",url:e+"address-lookup/"+encodeURIComponent(i),timeout:30*1000,dataType:"json"}).success(function(n){a=[];
b=[];
for(var k=0,l=n.length;
k<l;
k++){propertyAddress=g.serv.addressToString(n[k].address);
submitAddressValue=g.serv.addressToString(n[k].address,true);
var m={id:n[k].id,address:propertyAddress,submitAddressStr:submitAddressValue};
a.push(propertyAddress);
b.push(m)
}j(a)
})
},select:function(h,i){var j=$(".property__block .expanded").find(".propertyID");
$.each(b,function(k,l){if(l.address===i.item.value){j.val(l.id);
$(".property__block .expanded .addresslookup input").data("addrName",l.submitAddressStr);
g.serv.recordAddress(a);
b=[];
return
}})
}})
})
};
PropertyDetails.prototype.listenPropertyDetailsUIChange=function(){var a=this;
this.$addPropertyBtn.on("click",function(){a.serv.addProperty()
});
this.$plusBtn.on("click",function(){a.serv.addProperty()
});
this.$propertyBlock.on("click",".action__delete",function(){a.serv.deleteProperty($(this))
});
this.$propertyBlock.on("click",".action__confirm",function(){a.serv.confirmProperty()
});
this.$propertyBlock.on("click",".action__edit, .action__arrowdown",function(){a.serv.editProperty($(this))
});
this.serv.registerPropertyRadioEvent($(".property__accordion").first())
};
function PropertyDetailService(a){this.util=new Util();
this.validator=a;
this.$propertyBlock=$(".property__block");
this.propertyCount=1;
this.isFHB=this.util.isFHBForm();
this.isLongForm=this.util.isLongForm();
this.isShortQuestionForm=this.util.isShortQuestionForm();
this.settings={desktopBreakpoint:960,maxPropery:6,animationSpeed:300};
this.countID=1
}PropertyDetailService.prototype.addProperty=function(){var c=this;
var a=this.$propertyBlock.find(".expanded");
if(this.isPropertyValidated(a)){this.propertyCount++;
var b=this.cloneBaseProperty();
this.collapseProperty(a);
this.expandProperty(b);
this.hideAddPropertyAction();
this.refreshAttachedEvents();
this.registerValidation(b);
this.focusBack();
if(this.isLongForm||this.isShortQuestionForm){this.registerPropertyRadioEvent(b)
}}};
PropertyDetailService.prototype.confirmProperty=function(){var b=this;
var a=$(".property__accordion.expanded");
if(this.isPropertyValidated(a)){this.collapseProperty(a);
this.displayAddPropertyAction(this.settings.maxPropery);
this.focusBack()
}};
PropertyDetailService.prototype.editProperty=function(c){var d=this;
this.focusBack();
if(this.isAllPropertiesCollapsed()){var b=c.parents(".property__accordion");
this.expandProperty(b);
this.hideAddPropertyAction()
}else{var a=this.$propertyBlock.find(".expanded");
this.isPropertyValidated(a)
}return this
};
PropertyDetailService.prototype.deleteProperty=function(b){var c=this;
this.propertyCount--;
var a=b.parents(".property__accordion");
a.fadeOut(this.settings.animationSpeed,function(){a.remove();
$(".property__accordion").removeClass("base").first().addClass("base");
if(c.propertyCount===1){$firstProperty=$(".property__accordion.base");
c.expandProperty($firstProperty);
$firstProperty.find(".property__actions").slideUp(c.settingsanimationSpeed)
}c.displayAddPropertyAction(c.settings.maxPropery);
c.focusBack()
})
};
PropertyDetailService.prototype.registerPropertyRadioEvent=function(d){var g=this;
var b=this.getRadioNamesOfProperty(d);
var e=b[0],f=b[1],a=b[2],c=b[3];
$("input[name='"+e+"']").change(function(){g.getItemBlockSelectorByFieldName(e).nextAll().slideUp(g.settings.animationSpeed);
g.resetRadioGroupStatus(a);
g.resetRadioGroupStatus(f);
if($(this).val()==="Yes"){g.getItemBlockSelectorByFieldName(f).slideDown(g.settings.animationSpeed)
}else{g.getItemBlockSelectorByFieldName(a).slideDown(g.settings.animationSpeed)
}});
$("input[name='"+f+"']").change(function(){g.getItemBlockSelectorByFieldName(f).nextAll().slideUp(g.settings.animationSpeed);
g.resetRadioGroupStatus(c);
if($(this).val()==="Yes"){g.getItemBlockSelectorByFieldName(c).slideDown(g.settings.animationSpeed)
}});
$("input[name='"+a+"']").change(function(){var h=$(this).val();
g.resetRadioGroupStatus(c);
if(h==="NextInvestment"||h==="NextHome"||h==="FirstHome"||h==="FirstInvestment"){g.getItemBlockSelectorByFieldName(c).slideDown(g.settings.animationSpeed)
}else{g.getItemBlockSelectorByFieldName(c).slideUp(g.settings.animationSpeed)
}})
};
PropertyDetailService.prototype.registerPropertyBarEvent=function(){var b=this;
function a(){if($(window).width()<b.settings.desktopBreakpoint){b.$propertyBlock.on("click",".property__bar",function(){b.editProperty($(this))
})
}else{b.$propertyBlock.off("click",".property__bar",function(){b.editProperty($(this))
})
}}a();
$(window).resize(function(){a()
})
};
PropertyDetailService.prototype.refreshAttachedEvents=function(){this.$addPropertyBtn=$(".action__add");
this.$plusBtn=$(".action__plus");
this.$propertyBlock=$(".property__block");
this.registerPropertyBarEvent()
};
PropertyDetailService.prototype.isTooLongOrTooShort=function(a){return a.length<5||a.length>40
};
PropertyDetailService.prototype.recordAddress=function(b){var a=b.join("|");
$(".property__block .expanded").find(".address__flag").data("addresses",a);
return this
};
PropertyDetailService.prototype.addressToString=function(c,a){var b="";
if(a){b=c.unitNumber+",";
if(c.streetNumber){b+=c.streetNumber+","
}else{b+=","
}if(c.streetName){b+=c.streetName+","
}else{b+=","
}if(c.streetType){b+=c.streetType+","
}else{b+=","
}if(c.suburb){b+=c.suburb+","
}else{b+=","
}if(c.state){b+=c.state+","
}else{b+=","
}if(c.postcode){b+=c.postcode
}else{b+=","
}}else{if(c.unitNumber){b+=c.unitNumber+" "
}if(c.streetNumber){b+=c.streetNumber+" "
}if(c.streetName){b+=c.streetName+" "
}if(c.streetType){b+=c.streetType+", "
}else{b=$.trim(b);
b+=", "
}if(c.suburb){b+=c.suburb+", "
}if(c.state){b+=c.state+" "
}if(c.postcode){b+=c.postcode
}}return b
};
PropertyDetailService.prototype.isPropertyValidated=function(a){var b=this;
a.find("input:visible, select").each(function(c,d){b.validator.element("[name='"+d.name+"']")
});
return !a.find(".inputs__error").length
};
PropertyDetailService.prototype.resetInputSelection=function(a){a.find("input[type='radio'][value='']").prop("checked",true);
a.find("input[type='text']").val("");
a.find("select").val("");
return this
};
PropertyDetailService.prototype.removeStyleAttrForProperty=function(a,b){a.find(".property__bar").removeAttr("style");
a.find(".property__items").removeAttr("style");
a.find(".property__actions").removeAttr("style");
if(b){a.find(".form__item").removeAttr("style")
}return this
};
PropertyDetailService.prototype.markNewAttr=function(b,a){if(this.util.hasAttribute(a,b)){var c=$(a).attr(b);
c=c.replace(/(\_\d+)$/g,"");
$(a).attr(b,c+"_"+this.countID)
}return this
};
PropertyDetailService.prototype.getRadioNamesOfProperty=function(b){var a=[];
b.find("input[type='radio']").each(function(c,d){var e=$(d).attr("name");
if(a.indexOf(e)<0){a.push(e)
}});
return a
};
PropertyDetailService.prototype.getItemBlockSelectorByFieldName=function(a){return $("input[name='"+a+"']").parents(".form__item")
};
PropertyDetailService.prototype.resetRadioGroupStatus=function(b){var a=$("input[name='"+b+"']");
a.prop("checked",false);
a.parents(".inputs__error").removeClass(".inputs__error");
return this
};
PropertyDetailService.prototype.focusBack=function(){$(".block__plus").parent().focus()
};
PropertyDetailService.prototype.isAllPropertiesCollapsed=function(){return $(".property__block").find(".expanded").length===0
};
PropertyDetailService.prototype.cloneBaseProperty=function(){var b=this;
var a=$(".property__accordion.base").html();
$(".property__block").append(a);
a=$(".property__block .inner").eq(this.propertyCount-1);
a.wrap('<div class="'+$(".property__accordion.base").attr("class").replace("base","")+'"></div>');
a=$(".property__accordion").eq(this.propertyCount-1);
a.find(".form__item").removeAttr("style");
a.find("input, select, label").each(function(c,d){b.markNewAttr("id",d);
b.markNewAttr("name",d);
b.markNewAttr("for",d)
});
this.countID++;
return a
};
PropertyDetailService.prototype.displayAddPropertyAction=function(a){if(this.propertyCount<a){$("#btnAdd").closest(".property__actions").slideDown(this.settings.animationSpeed)
}return this
};
PropertyDetailService.prototype.hideAddPropertyAction=function(){if(this.propertyCount>1){$("#btnAdd").closest(".property__actions").slideUp(this.settings.animationSpeed)
}return this
};
PropertyDetailService.prototype.collapseProperty=function(b,a){var d=this;
var c=b.find(".property__address").val();
b.find(".property__bar__title").text(c);
b.find(".property__bar").slideDown(this.settings.animationSpeed);
b.find(".property__actions").slideUp(this.settings.animationSpeed);
b.find(".property__items").slideUp(this.settings.animationSpeed,function(){b.removeClass("expanded")
});
return this
};
PropertyDetailService.prototype.expandProperty=function(a){var b=this;
a.find(".property__bar").slideUp(this.settings.animationSpeed);
a.find(".property__items").slideDown(this.settings.animationSpeed);
a.find(".property__actions").slideDown(this.settings.animationSpeed,function(){a.addClass("expanded")
});
return this
};
PropertyDetailService.prototype.registerValidation=function(a){$(".property__type",a).rules("add",{required:true,messages:{required:"Please select a property type"}});
$(".property__address",a).rules("add",{required:true,minlength:5,addressValidate:true,messages:{required:"This field is required",minlength:"Please enter a minimum of 5 alphabetic characters for your property address",addressValidate:"Address not found, please contact ANZ on <span class='none__mobile__call'>1300 308 402</span><a class='mobile__call' href='tel:1300308402'>1300 308 402</a>"}});
$(".property__owner",a).rules("add",{requireChecked:true,messages:{requireChecked:"This field is required"}});
$(".property__sellPlan",a).rules("add",{requireChecked:true,messages:{requireChecked:"This field is required"}});
$(".reason__option",a).rules("add",{requireChecked:true,messages:{requireChecked:"This field is required"}});
$(".buy__sell__within",a).rules("add",{requireChecked:true,messages:{requireChecked:"This field is required"}})
};
function ContactDetails(a,b){this.$form=a;
this.validator=b;
this.util=new Util();
this.settings={defaultAreaCode:"02"};
this.$phoneType=$(".input__phone-type select");
this.$secondaryPhoneType=$("#secondaryPhoneType");
this.$secondaryPhoneAreaCode=$("#secondaryPhoneAreaCode")
}ContactDetails.prototype.initListeners=function(){this.registerEvent();
this.listenWouldYouLikeToBeContacted();
if(this.util.isFHBForm()){var a='<div class="form__block__wrapper no__padding__bottom" aria-label="Contact details form, please fill following content."><div class="first-home-buyers hidden" style="display: block;"><h4>Welcome first home buyers</h4><p>&nbsp;</p><div class="first-home-buyers-content" aria-label="First Home Buyer "><p>We all know buying your first home can be tough. An ANZ First Home Coach can help you navigate the challenges. From understanding the market, to understanding the jargon, your ANZ First Home Coach will help guide you through each step of the home buying journey. Leave us your details and an ANZ First Home Coach will be in touch.</p></div></div>';
$(".cp-contact-details").closest(".form__block").prepend(a)
}};
ContactDetails.prototype.registerEvent=function(){var a=this;
this.$phoneType.change(function(){var g=$(this);
var e=g.find("option:selected").val();
var b=g.parent().siblings(".input__region-number");
var i=g.parent().siblings(".input__phone-number");
var h=g.parent().siblings(".input__mobile-number");
if(e==="Mobile"){b.addClass("hide");
i.addClass("hide");
h.removeClass("hide")
}else{b.removeClass("hide");
i.removeClass("hide");
h.addClass("hide")
}var d=b.find("select");
var f=i.find("input");
var c=h.find("input");
a.resetContactValue(d,f,c).clearValidationStyle(d,f,c)
});
this.$secondaryPhoneType.change(function(){a.$secondaryPhoneAreaCode.val(a.settings.defaultAreaCode)
});
return this
};
ContactDetails.prototype.listenWouldYouLikeToBeContacted=function(){var b=$(".short-contact");
var a=$(".tab");
$(".tab").click(function(d){var c=$(this);
a.removeClass("active");
c.addClass("active");
if(c.text().toLowerCase()=="yes"){b.slideDown(300)
}else{b.slideUp(300)
}})
};
ContactDetails.prototype.resetContactValue=function(a,c,b){a.val("");
c.val("");
b.val("");
return this
};
ContactDetails.prototype.removeValidationStyle=function(a){a.removeClass("error__style").parents(".inputs").removeClass("inputs__error").find("label[for='"+a.attr("name")+"'].error").remove()
};
ContactDetails.prototype.clearValidationStyle=function(a,c,b){this.removeValidationStyle(a);
this.removeValidationStyle(c);
this.removeValidationStyle(b);
return this
};
function Help(){this.util=new Util()
}Help.prototype.initListeners=function(){this.listenHelpSection()
};
Help.prototype.listenHelpSection=function(){var c={optionHelpFieldName:"optionHelp",postcodeWordsId:"postcodeWords"};
var f={MOBILE_LENDER:"ANZ Mobile Lender",PHONE:"Over the phone",BRANCH:"ANZ Branch"};
var b={MOBILE_LENDER:"Mobile Lender from the area",PHONE:"Home Loan Specialist",BRANCH:"Home Loan Specialist from the area",HOMECOACH:"First Home Coach from the area"};
var d=this.util.isFHBForm();
var e=function(g){$("#postcodeWords").html(g)
};
var a=function(g){$(".postcode").html(g)
};
if(d){e(b.HOMECOACH)
}else{$("input[name='optionHelp']").change(function(){switch($(this).val()){case f.MOBILE_LENDER:e(b.MOBILE_LENDER);
break;
case f.PHONE:e(b.PHONE);
break;
case f.BRANCH:e(b.BRANCH);
break;
default:break
}});
$("input[name='optionHelp_1']").change(function(){switch($(this).val()){case f.MOBILE_LENDER:a(b.MOBILE_LENDER);
$(this).closest(".inputs").find(".item__sub__title").removeClass("active");
$(".ml").addClass("active");
break;
case f.PHONE:a(b.PHONE);
$(this).closest(".inputs").find(".item__sub__title").removeClass("active");
$(".ph").addClass("active");
break;
case f.BRANCH:a(b.BRANCH);
$(this).closest(".inputs").find(".item__sub__title").removeClass("active");
$(".br").addClass("active");
break;
default:break
}})
}};
function Disclaimer(){}Disclaimer.prototype.initListeners=function(){$(".disclaimer .show-more").on("click",function(){$(".disclaimer, .disclaimer .show-more").toggleClass("open");
$(this).text(($(this).text()=="Read more"?"Close":"Read more"))
})
};
function YourPlan(a,b){this.$form=a;
this.util=new Util();
this.validator=b;
this.settings={animationSpeed:300}
}YourPlan.prototype.initListeners=function(){this.listenYourPlanUIChange()
};
YourPlan.prototype.listenYourPlanUIChange=function(){var c=this;
var b="myMainReasonForRequesting",a="buyOrSellProperty";
$("select[name='"+b+"']").change(function(){var d=$(this).val();
if(d==="FirstHome"||d==="NextHome"||d==="Refinance"||d==="Invest"||d==="Sell"){c.getItemBlockSelectorByFieldName(a).slideDown(c.settings.animationSpeed)
}else{c.getItemBlockSelectorByFieldName(a).slideUp(c.settings.animationSpeed)
}})
};
YourPlan.prototype.getItemBlockSelectorByFieldName=function(a){return $("select[name='"+a+"']").parents(".form__item")
};