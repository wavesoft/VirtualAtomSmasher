/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);/*!jQuery Knob*/
(function(d){var b={},a=Math.max,c=Math.min;b.c={};b.c.d=d(document);b.c.t=function(f){return f.originalEvent.touches.length-1};b.o=function(){var e=this;this.o=null;this.$=null;this.i=null;this.g=null;this.v=null;this.cv=null;this.x=0;this.y=0;this.$c=null;this.c=null;this.t=0;this.isInit=false;this.fgColor=null;this.pColor=null;this.dH=null;this.cH=null;this.eH=null;this.rH=null;this.run=function(){var f=function(i,h){var g;for(g in h){e.o[g]=h[g]}e.init();e._configure()._draw()};if(this.$.data("kontroled")){return}this.$.data("kontroled",true);this.extend();this.o=d.extend({min:this.$.data("min")||0,max:this.$.data("max")||100,stopper:true,readOnly:this.$.data("readonly"),cursor:(this.$.data("cursor")===true&&30)||this.$.data("cursor")||0,thickness:this.$.data("thickness")||0.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:this.$.data("displayinput")==null||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor")||this.$.data("fgcolor")||"#87CEEB",inline:false,step:this.$.data("step")||1,draw:null,change:null,cancel:null,release:null},this.o);if(this.$.is("fieldset")){this.v={};this.i=this.$.find("input");this.i.each(function(g){var h=d(this);e.i[g]=h;e.v[g]=h.val();h.bind("change",function(){var i={};i[g]=h.val();e.val(i)})});this.$.find("legend").remove()}else{this.i=this.$;this.v=this.$.val();(this.v=="")&&(this.v=this.o.min);this.$.bind("change",function(){e.val(e._validate(e.$.val()))})}(!this.o.displayInput)&&this.$.hide();this.$c=d('<canvas width="'+this.o.width+'px" height="'+this.o.height+'px"></canvas>');this.c=this.$c[0].getContext("2d");this.$.wrap(d('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+'px;"></div>')).before(this.$c);if(this.v instanceof Object){this.cv={};this.copy(this.v,this.cv)}else{this.cv=this.v}this.$.bind("configure",f).parent().bind("configure",f);this._listen()._configure()._xy().init();this.isInit=true;this._draw();return this};this._draw=function(){var f=true,g=document.createElement("canvas");g.width=e.o.width;g.height=e.o.height;e.g=g.getContext("2d");e.clear();e.dH&&(f=e.dH());(f!==false)&&e.draw();e.c.drawImage(g,0,0);g=null};this._touch=function(f){var g=function(i){var h=e.xy2val(i.originalEvent.touches[e.t].pageX,i.originalEvent.touches[e.t].pageY);if(h==e.cv){return}if(e.cH&&(e.cH(h)===false)){return}e.change(e._validate(h));e._draw()};this.t=b.c.t(f);g(f);b.c.d.bind("touchmove.k",g).bind("touchend.k",function(){b.c.d.unbind("touchmove.k touchend.k");if(e.rH&&(e.rH(e.cv)===false)){return}e.val(e.cv)});return this};this._mouse=function(g){var f=function(i){var h=e.xy2val(i.pageX,i.pageY);if(h==e.cv){return}if(e.cH&&(e.cH(h)===false)){return}e.change(e._validate(h));e._draw()};f(g);b.c.d.bind("mousemove.k",f).bind("keyup.k",function(h){if(h.keyCode===27){b.c.d.unbind("mouseup.k mousemove.k keyup.k");if(e.eH&&(e.eH()===false)){return}e.cancel()}}).bind("mouseup.k",function(h){b.c.d.unbind("mousemove.k mouseup.k keyup.k");if(e.rH&&(e.rH(e.cv)===false)){return}e.val(e.cv)});return this};this._xy=function(){var f=this.$c.offset();this.x=f.left;this.y=f.top;return this};this._listen=function(){if(!this.o.readOnly){this.$c.bind("mousedown",function(f){f.preventDefault();e._xy()._mouse(f)}).bind("touchstart",function(f){f.preventDefault();e._xy()._touch(f)});this.listen()}else{this.$.attr("readonly","readonly")}return this};this._configure=function(){if(this.o.draw){this.dH=this.o.draw}if(this.o.change){this.cH=this.o.change}if(this.o.cancel){this.eH=this.o.cancel}if(this.o.release){this.rH=this.o.release}if(this.o.displayPrevious){this.pColor=this.h2rgba(this.o.fgColor,"0.4");this.fgColor=this.h2rgba(this.o.fgColor,"0.6")}else{this.fgColor=this.o.fgColor}return this};this._clear=function(){this.$c[0].width=this.$c[0].width};this._validate=function(f){return(~~(((f<0)?-0.5:0.5)+(f/this.o.step)))*this.o.step};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(f){};this.val=function(f){};this.xy2val=function(f,g){};this.draw=function(){};this.clear=function(){this._clear()};this.h2rgba=function(i,f){var g;i=i.substring(1,7);g=[parseInt(i.substring(0,2),16),parseInt(i.substring(2,4),16),parseInt(i.substring(4,6),16)];return"rgba("+g[0]+","+g[1]+","+g[2]+","+f+")"};this.copy=function(j,h){for(var g in j){h[g]=j[g]}}};b.Dial=function(){b.o.call(this);this.startAngle=null;this.xy=null;this.radius=null;this.lineWidth=null;this.cursorExt=null;this.w2=null;this.PI2=2*Math.PI;this.extend=function(){this.o=d.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:true},this.o)};this.val=function(e){if(null!=e){this.cv=this.o.stopper?a(c(e,this.o.max),this.o.min):e;this.v=this.cv;this.$.val(this.v);this._draw()}else{return this.v}};this.xy2val=function(e,h){var f,g;f=Math.atan2(e-(this.x+this.w2),-(h-this.y-this.w2))-this.angleOffset;if(this.angleArc!=this.PI2&&(f<0)&&(f>-0.5)){f=0}else{if(f<0){f+=this.PI2}}g=~~(0.5+(f*(this.o.max-this.o.min)/this.angleArc))+this.o.min;this.o.stopper&&(g=a(c(g,this.o.max),this.o.min));return g};this.listen=function(){var f=this,j=function(o){o.preventDefault();var n=o.originalEvent,l=n.detail||n.wheelDeltaX,k=n.detail||n.wheelDeltaY,m=parseInt(f.$.val())+(l>0||k>0?f.o.step:l<0||k<0?-f.o.step:0);if(f.cH&&(f.cH(m)===false)){return}f.val(m)},h,i,e=1,g={37:-f.o.step,38:f.o.step,39:f.o.step,40:-f.o.step};this.$.bind("keydown",function(m){var l=m.keyCode;if(l>=96&&l<=105){l=m.keyCode=l-48}h=parseInt(String.fromCharCode(l));if(isNaN(h)){(l!==13)&&(l!==8)&&(l!==9)&&(l!==189)&&m.preventDefault();if(d.inArray(l,[37,38,39,40])>-1){m.preventDefault();var k=parseInt(f.$.val())+g[l]*e;f.o.stopper&&(k=a(c(k,f.o.max),f.o.min));f.change(k);f._draw();i=window.setTimeout(function(){e*=2},30)}}}).bind("keyup",function(k){if(isNaN(h)){if(i){window.clearTimeout(i);i=null;e=1;f.val(f.$.val())}}else{(f.$.val()>f.o.max&&f.$.val(f.o.max))||(f.$.val()<f.o.min&&f.$.val(f.o.min))}});this.$c.bind("mousewheel DOMMouseScroll",j);this.$.bind("mousewheel DOMMouseScroll",j)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max){this.v=this.o.min}this.$.val(this.v);this.w2=this.o.width/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2;this.lineWidth=this.xy*this.o.thickness;this.lineCap=this.o.lineCap;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var e=a(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({width:((this.o.width/2+4)>>0)+"px",height:((this.o.width/3)>>0)+"px",position:"absolute","vertical-align":"middle","margin-top":((this.o.width/3)>>0)+"px","margin-left":"-"+((this.o.width*3/4+2)>>0)+"px",border:0,background:"none",font:"bold "+((this.o.width/e)>>0)+"px Arial","text-align":"center",color:this.o.inputColor||this.o.fgColor,padding:"0px","-webkit-appearance":"none"})||this.i.css({width:"0px",visibility:"hidden"})};this.change=function(e){this.cv=e;this.$.val(e)};this.angle=function(e){return(e-this.o.min)*this.angleArc/(this.o.max-this.o.min)};this.draw=function(){var k=this.g,f=this.angle(this.cv),g=this.startAngle,h=g+f,e,i,j=1;k.lineWidth=this.lineWidth;k.lineCap=this.lineCap;this.o.cursor&&(g=h-this.cursorExt)&&(h=h+this.cursorExt);k.beginPath();k.strokeStyle=this.o.bgColor;k.arc(this.xy,this.xy,this.radius,this.endAngle,this.startAngle,true);k.stroke();if(this.o.displayPrevious){i=this.startAngle+this.angle(this.v);e=this.startAngle;this.o.cursor&&(e=i-this.cursorExt)&&(i=i+this.cursorExt);k.beginPath();k.strokeStyle=this.pColor;k.arc(this.xy,this.xy,this.radius,e,i,false);k.stroke();j=(this.cv==this.v)}k.beginPath();k.strokeStyle=j?this.o.fgColor:this.fgColor;k.arc(this.xy,this.xy,this.radius,g,h,false);k.stroke()};this.cancel=function(){this.val(this.v)}};d.fn.dial=d.fn.knob=function(e){return this.each(function(){var f=new b.Dial();f.o=e;f.$=d(this);f.run()}).parent()}})(jQuery);// three.js - http://github.com/mrdoob/three.js
'use strict';var THREE=THREE||{REVISION:"59"};self.console=self.console||{info:function(){},log:function(){},debug:function(){},warn:function(){},error:function(){}};String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};THREE.extend=function(a,b){if(Object.keys)for(var c=Object.keys(b),d=0,e=c.length;d<e;d++){var f=c[d];Object.defineProperty(a,f,Object.getOwnPropertyDescriptor(b,f))}else for(f in c={}.hasOwnProperty,b)c.call(b,f)&&(a[f]=b[f]);return a};
(function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!self.requestAnimationFrame;++c)self.requestAnimationFrame=self[b[c]+"RequestAnimationFrame"],self.cancelAnimationFrame=self[b[c]+"CancelAnimationFrame"]||self[b[c]+"CancelRequestAnimationFrame"];void 0===self.requestAnimationFrame&&void 0!==self.setTimeout&&(self.requestAnimationFrame=function(b){var c=Date.now(),f=Math.max(0,16-(c-a)),h=self.setTimeout(function(){b(c+f)},f);a=c+f;return h});void 0===self.cancelAnimationFrame&&void 0!==
self.clearTimeout&&(self.cancelAnimationFrame=function(a){self.clearTimeout(a)})})();THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){void 0!==a&&this.set(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},b=0.5>=c?c*(1+b):c+b-c*b,c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+),(\d+),(\d+)\)$/i.test(a))return a=/^rgb\((\d+),(\d+),(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(a),this.r=Math.min(100,
parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=a.g;this.b=
a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*
this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(){var a={h:0,s:0,l:0};return function(){var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),h,g=(f+e)/2;if(f===e)f=h=0;else{var i=e-f,f=0.5>=g?i/(e+f):i/(2-e-f);switch(e){case b:h=(c-d)/i+(c<d?6:0);break;case c:h=(d-b)/i+2;break;case d:h=(b-c)/i+4}h/=6}a.h=h;a.s=f;a.l=g;return a}}(),getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,_euler:void 0,_updateEuler:function(){void 0!==this._euler&&this._euler.setFromQuaternion(this,void 0,!1)},get x(){return this._x},set x(a){this._x=a;this._updateEuler()},get y(){return this._y},set y(a){this._y=a;this._updateEuler()},get z(){return this._z},set z(a){this._z=a;this._updateEuler()},get w(){return this._w},set w(a){this._w=a;this._updateEuler()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;
this._updateEuler();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._w=a._w;this._updateEuler();return this},setFromEuler:function(a,b){void 0===typeof a.order&&console.error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),h=Math.sin(a._y/2),g=Math.sin(a._z/2);void 0===a.order||"XYZ"===a.order?(this._x=f*d*e+c*h*g,
this._y=c*h*e-f*d*g,this._z=c*d*g+f*h*e,this._w=c*d*e-f*h*g):"YXZ"===a.order?(this._x=f*d*e+c*h*g,this._y=c*h*e-f*d*g,this._z=c*d*g-f*h*e,this._w=c*d*e+f*h*g):"ZXY"===a.order?(this._x=f*d*e-c*h*g,this._y=c*h*e+f*d*g,this._z=c*d*g+f*h*e,this._w=c*d*e-f*h*g):"ZYX"===a.order?(this._x=f*d*e-c*h*g,this._y=c*h*e+f*d*g,this._z=c*d*g-f*h*e,this._w=c*d*e+f*h*g):"YZX"===a.order?(this._x=f*d*e+c*h*g,this._y=c*h*e+f*d*g,this._z=c*d*g-f*h*e,this._w=c*d*e-f*h*g):"XZY"===a.order&&(this._x=f*d*e-c*h*g,this._y=c*
h*e-f*d*g,this._z=c*d*g+f*h*e,this._w=c*d*e+f*h*g);!1!==b&&this._updateEuler();return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this._updateEuler();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0],a=b[4],d=b[8],e=b[1],f=b[5],h=b[9],g=b[2],i=b[6],b=b[10],j=c+f+b;0<j?(c=0.5/Math.sqrt(j+1),this._w=0.25/c,this._x=(i-h)*c,this._y=(d-g)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(i-h)/
c,this._x=0.25*c,this._y=(a+e)/c,this._z=(d+g)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-g)/c,this._x=(a+e)/c,this._y=0.25*c,this._z=(h+i)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+g)/c,this._y=(h+i)/c,this._z=0.25*c);this._updateEuler();return this},inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=-1;this._updateEuler();return this},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},
length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);return this},multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,
b){var c=a._x,d=a._y,e=a._z,f=a._w,h=b._x,g=b._y,i=b._z,j=b._w;this._x=c*j+f*h+d*i-e*g;this._y=d*j+f*g+e*h-c*i;this._z=e*j+f*i+c*g-d*h;this._w=f*j-c*h-d*g-e*i;this._updateEuler();return this},multiplyVector3:function(a){console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,h=f*a._w+c*a._x+d*a._y+e*a._z;0>h?(this._w=-a._w,this._x=
-a._x,this._y=-a._y,this._z=-a._z,h=-h):this.copy(a);if(1<=h)return this._w=f,this._x=c,this._y=d,this._z=e,this;var g=Math.acos(h),i=Math.sqrt(1-h*h);if(0.001>Math.abs(i))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;h=Math.sin((1-b)*g)/i;g=Math.sin(b*g)/i;this._w=f*h+this._w*g;this._x=c*h+this._x*g;this._y=d*h+this._y*g;this._z=e*h+this._z*g;this._updateEuler();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===
this._z&&a._w===this._w},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this._updateEuler();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},clone:function(){return new THREE.Quaternion(this._x,this._y,this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=
a.y;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);
return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/
b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*
b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements,e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);
this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,h=a.z,a=a.w,g=a*b+f*d-h*c,i=a*c+h*b-e*d,j=a*d+e*c-f*b,b=-e*b-f*c-h*d;this.x=g*a+b*-e+i*-h-j*-f;this.y=i*a+b*-f+j*-e-g*-h;this.z=j*a+b*-h+g*-f-i*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*
b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<
a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){this.x=
a.y*b.z-a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this},angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y,a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(){console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.")},
setEulerFromQuaternion:function(){console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.")},getPositionFromMatrix:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},getScaleFromMatrix:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length(),a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();
this.x=b;this.y=c;this.z=a;return this},getColumnFromMatrix:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};
THREE.extend(THREE.Vector3.prototype,{applyEuler:function(){var a=new THREE.Quaternion;return function(b){void 0===typeof b.order&&console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");b=a.setFromEuler(b);this.applyQuaternion(b);return this}}(),applyAxisAngle:function(){var a=new THREE.Quaternion;return function(b,c){var d=a.setFromAxisAngle(b,c);this.applyQuaternion(d);return this}}(),projectOnVector:function(){var a=
new THREE.Vector3;return function(b){a.copy(b).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=new THREE.Vector3;return function(b){a.copy(this).projectOnVector(b).multiplyScalar(2);return this.subVectors(a,this)}}()});THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},
applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,
this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d,a=a.elements,e=a[0];d=a[4];var f=a[8],h=a[1],g=a[5],i=a[9];c=a[2];b=a[6];var j=a[10];if(0.01>Math.abs(d-h)&&0.01>Math.abs(f-c)&&0.01>Math.abs(i-b)){if(0.1>Math.abs(d+h)&&0.1>Math.abs(f+c)&&0.1>Math.abs(i+b)&&0.1>Math.abs(e+g+j-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;g=(g+1)/2;j=(j+1)/2;d=(d+h)/4;f=(f+c)/4;i=(i+b)/4;e>g&&e>j?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):g>j?0.01>g?
(b=0.707106781,c=0,d=0.707106781):(c=Math.sqrt(g),b=d/c,d=i/c):0.01>j?(c=b=0.707106781,d=0):(d=Math.sqrt(j),b=f/d,c=i/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-i)*(b-i)+(f-c)*(f-c)+(h-d)*(h-d));0.001>Math.abs(a)&&(a=1);this.x=(b-i)/a;this.y=(f-c)/a;this.z=(h-d)/a;this.w=Math.acos((e+g+j-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=
a.y);this.z<a.z&&(this.z=a.z);this.w<a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*
this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&
a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,_quaternion:void 0,_updateQuaternion:function(){void 0!==this._quaternion&&this._quaternion.setFromEuler(this,!1)},get x(){return this._x},set x(a){this._x=a;this._updateQuaternion()},get y(){return this._y},set y(a){this._y=a;this._updateQuaternion()},get z(){return this._z},set z(a){this._z=a;this._updateQuaternion()},get order(){return this._order},set order(a){this._order=a;this._updateQuaternion()},
set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._updateQuaternion();return this},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._updateQuaternion();return this},setFromRotationMatrix:function(a,b){function c(a){return Math.min(Math.max(a,-1),1)}var d=a.elements,e=d[0],f=d[4],h=d[8],g=d[1],i=d[5],j=d[9],l=d[2],m=d[6],d=d[10],b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(h)),0.99999>Math.abs(h)?(this._x=Math.atan2(-j,d),this._z=
Math.atan2(-f,e)):(this._x=Math.atan2(m,i),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(j)),0.99999>Math.abs(j)?(this._y=Math.atan2(h,d),this._z=Math.atan2(g,i)):(this._y=Math.atan2(-l,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(m)),0.99999>Math.abs(m)?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-f,i)):(this._y=0,this._z=Math.atan2(g,e))):"ZYX"===b?(this._y=Math.asin(-c(l)),0.99999>Math.abs(l)?(this._x=Math.atan2(m,d),this._z=Math.atan2(g,e)):(this._x=0,this._z=Math.atan2(-f,i))):"YZX"===b?(this._z=
Math.asin(c(g)),0.99999>Math.abs(g)?(this._x=Math.atan2(-j,i),this._y=Math.atan2(-l,e)):(this._x=0,this._y=Math.atan2(h,d))):"XZY"===b?(this._z=Math.asin(-c(f)),0.99999>Math.abs(f)?(this._x=Math.atan2(m,i),this._y=Math.atan2(h,e)):(this._x=Math.atan2(-j,d),this._y=0)):console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: "+b);this._order=b;this._updateQuaternion();return this},setFromQuaternion:function(a,b,c){function d(a){return Math.min(Math.max(a,-1),1)}var e=a.x*a.x,f=
a.y*a.y,h=a.z*a.z,g=a.w*a.w,b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),g-e-f+h),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w))),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),g+e-f-h)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z))),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),g-e-f+h),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),g-e+f-h)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z))),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),g-e-f+h),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),g-e+f-h)):"ZYX"===
b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),g-e-f+h),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z))),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),g+e-f-h)):"YZX"===b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),g-e+f-h),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),g+e-f-h),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w)))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),g-e+f-h),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),g+e-f-h),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y)))):console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: "+
b);this._order=b;!1!==c&&this._updateQuaternion();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);this.setFromQuaternion(a,b)}}(),fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._updateQuaternion();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},clone:function(){return new THREE.Euler(this._x,
this._y,this._z,this._order)}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y)}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);
this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);
this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a){return new THREE.Vector2((a.x-this.min.x)/(this.max.x-this.min.x),
(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);
return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){if(0<a.length){var b=a[0];this.min.copy(b);this.max.copy(b);for(var c=1,d=a.length;c<d;c++)b=a[c],b.x<this.min.x?this.min.x=b.x:b.x>this.max.x&&(this.max.x=b.x),b.y<this.min.y?this.min.y=b.y:b.y>this.max.y&&(this.max.y=b.y),b.z<this.min.z?this.min.z=b.z:b.z>this.max.z&&(this.max.z=b.z)}else this.makeEmpty();return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;
return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,h=e.length;f<h;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);
return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a){return new THREE.Vector3((a.x-this.min.x)/(this.max.x-this.min.x),
(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=
new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,
this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};THREE.Matrix3=function(a,b,c,d,e,f,h,g,i){this.elements=new Float32Array(9);this.set(void 0!==a?a:1,b||0,c||0,d||0,void 0!==e?e:1,f||0,h||0,g||0,void 0!==i?i:1)};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,h,g,i){var j=this.elements;j[0]=a;j[3]=b;j[6]=c;j[1]=d;j[4]=e;j[7]=f;j[2]=h;j[5]=g;j[8]=i;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],h=a[5],g=a[6],i=a[7],a=a[8];return b*f*a-b*h*i-c*e*a+c*h*g+d*e*i-d*f*g},getInverse:function(a,
b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/
c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,h,g,i,j,l,m,n,p,t,q){var r=this.elements=new Float32Array(16);r[0]=void 0!==a?a:1;r[4]=b||0;r[8]=c||0;r[12]=d||0;r[1]=e||0;r[5]=void 0!==f?f:1;r[9]=h||0;r[13]=g||0;r[2]=i||0;r[6]=j||0;r[10]=void 0!==l?l:1;r[14]=m||0;r[3]=n||0;r[7]=p||0;r[11]=t||0;r[15]=void 0!==q?q:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,h,g,i,j,l,m,n,p,t,q){var r=this.elements;r[0]=a;r[4]=b;r[8]=c;r[12]=d;r[1]=e;r[5]=f;r[9]=h;r[13]=g;r[2]=i;r[6]=j;r[10]=l;r[14]=m;r[3]=n;r[7]=p;r[11]=t;r[15]=q;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
return this.copyPosition(a)},copyPosition:function(a){var b=this.elements,a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements,b=b.elements,d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){void 0===
typeof a.order&&console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),h=Math.cos(d),d=Math.sin(d),g=Math.cos(e),e=Math.sin(e);if(void 0===a.order||"XYZ"===a.order){var a=f*g,i=f*e,j=c*g,l=c*e;b[0]=h*g;b[4]=-h*e;b[8]=d;b[1]=i+j*d;b[5]=a-l*d;b[9]=-c*h;b[2]=l-a*d;b[6]=j+i*d;b[10]=f*h}else"YXZ"===a.order?(a=h*g,i=h*e,j=d*g,l=d*e,b[0]=a+l*c,b[4]=
j*c-i,b[8]=f*d,b[1]=f*e,b[5]=f*g,b[9]=-c,b[2]=i*c-j,b[6]=l+a*c,b[10]=f*h):"ZXY"===a.order?(a=h*g,i=h*e,j=d*g,l=d*e,b[0]=a-l*c,b[4]=-f*e,b[8]=j+i*c,b[1]=i+j*c,b[5]=f*g,b[9]=l-a*c,b[2]=-f*d,b[6]=c,b[10]=f*h):"ZYX"===a.order?(a=f*g,i=f*e,j=c*g,l=c*e,b[0]=h*g,b[4]=j*d-i,b[8]=a*d+l,b[1]=h*e,b[5]=l*d+a,b[9]=i*d-j,b[2]=-d,b[6]=c*h,b[10]=f*h):"YZX"===a.order?(a=f*h,i=f*d,j=c*h,l=c*d,b[0]=h*g,b[4]=l-a*e,b[8]=j*e+i,b[1]=e,b[5]=f*g,b[9]=-c*g,b[2]=-d*g,b[6]=i*e+j,b[10]=a-l*e):"XZY"===a.order&&(a=f*h,i=f*d,j=
c*h,l=c*d,b[0]=h*g,b[4]=-e,b[8]=d*g,b[1]=a*e+l,b[5]=f*g,b[9]=i*e-j,b[2]=j*e-i,b[6]=c*g,b[10]=l*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,h=c+c,g=d+d,i=e+e,
a=c*h,j=c*g,c=c*i,l=d*g,d=d*i,e=e*i,h=f*h,g=f*g,f=f*i;b[0]=1-(l+e);b[4]=j-f;b[8]=c+g;b[1]=j+f;b[5]=1-(a+e);b[9]=d-h;b[2]=c-g;b[6]=d+h;b[10]=1-(a+l);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var h=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,
a);h[0]=a.x;h[4]=b.x;h[8]=c.x;h[1]=a.y;h[5]=b.y;h[9]=c.y;h[2]=a.z;h[6]=b.z;h[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?(console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],h=c[4],g=c[8],i=c[12],j=c[1],l=c[5],m=c[9],n=c[13],p=c[2],t=c[6],q=c[10],r=c[14],s=c[3],u=c[7],
z=c[11],c=c[15],C=d[0],F=d[4],H=d[8],I=d[12],G=d[1],A=d[5],K=d[9],B=d[13],J=d[2],N=d[6],y=d[10],M=d[14],w=d[3],Z=d[7],L=d[11],d=d[15];e[0]=f*C+h*G+g*J+i*w;e[4]=f*F+h*A+g*N+i*Z;e[8]=f*H+h*K+g*y+i*L;e[12]=f*I+h*B+g*M+i*d;e[1]=j*C+l*G+m*J+n*w;e[5]=j*F+l*A+m*N+n*Z;e[9]=j*H+l*K+m*y+n*L;e[13]=j*I+l*B+m*M+n*d;e[2]=p*C+t*G+q*J+r*w;e[6]=p*F+t*A+q*N+r*Z;e[10]=p*H+t*K+q*y+r*L;e[14]=p*I+t*B+q*M+r*d;e[3]=s*C+u*G+z*J+c*w;e[7]=s*F+u*A+z*N+c*Z;e[11]=s*H+u*K+z*y+c*L;e[15]=s*I+u*B+z*M+c*d;return this},multiplyToArray:function(a,
b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(){var a=new THREE.Vector3;return function(b){for(var c=0,d=b.length;c<d;c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyProjection(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)},crossVector:function(a){console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],h=a[5],g=a[9],i=a[13],j=a[2],l=a[6],m=a[10],n=a[14];return a[3]*(+e*g*l-d*i*l-e*h*m+c*i*m+d*h*n-c*g*n)+a[7]*(+b*g*n-b*i*m+e*f*m-d*f*n+d*i*j-e*g*j)+a[11]*(+b*i*l-b*h*n-e*f*l+c*f*n+e*h*j-c*i*j)+a[15]*(-d*h*j-b*g*l+b*h*m+d*f*l-c*f*
m+c*g*j)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a},flattenToArrayOffset:function(a,b){var c=this.elements;
a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=this.elements;
b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],h=d[8],g=d[12],i=d[1],j=d[5],l=d[9],m=d[13],n=d[2],p=d[6],t=d[10],q=d[14],r=d[3],s=d[7],u=d[11],d=d[15];c[0]=l*q*s-m*t*s+m*p*u-j*q*u-l*p*d+j*t*d;c[4]=g*t*s-h*q*s-g*p*u+f*q*u+h*p*d-f*t*d;c[8]=h*m*s-g*l*s+g*j*u-f*m*u-h*j*d+f*l*d;c[12]=g*l*p-h*m*p-g*j*t+f*m*t+h*j*q-f*l*q;c[1]=m*t*r-l*q*r-m*n*u+i*q*u+l*n*d-i*t*d;c[5]=h*q*r-g*t*r+g*n*u-e*q*u-h*n*d+e*t*d;c[9]=g*l*r-h*m*r-g*i*u+e*m*u+h*i*d-
e*l*d;c[13]=h*m*n-g*l*n+g*i*t-e*m*t-h*i*q+e*l*q;c[2]=j*q*r-m*p*r+m*n*s-i*q*s-j*n*d+i*p*d;c[6]=g*p*r-f*q*r-g*n*s+e*q*s+f*n*d-e*p*d;c[10]=f*m*r-g*j*r+g*i*s-e*m*s-f*i*d+e*j*d;c[14]=g*j*n-f*m*n-g*i*p+e*m*p+f*i*q-e*j*q;c[3]=l*p*r-j*t*r-l*n*s+i*t*s+j*n*u-i*p*u;c[7]=f*t*r-h*p*r+h*n*s-e*t*s-f*n*u+e*p*u;c[11]=h*j*r-f*l*r-h*i*s+e*l*s+f*i*u-e*j*u;c[15]=f*l*n-h*j*n+h*i*p-e*l*p-f*i*t+e*j*t;c=e*c[0]+i*c[4]+n*c[8]+r*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(){console.warn("DEPRECATED: Matrix4's .translate() has been removed.")},rotateX:function(){console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.")},rotateY:function(){console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.")},rotateZ:function(){console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.")},rotateByAxis:function(){console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y,a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,h=a.y,g=a.z,i=e*f,j=e*h;this.set(i*f+c,i*h-d*g,i*g+d*h,0,i*h+d*g,j*h+c,j*g-d*f,0,i*g-d*h,j*g+d*f,e*g*g+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,h=a.set(f[0],f[1],f[2]).length(),g=a.set(f[4],f[5],f[6]).length(),i=a.set(f[8],f[9],f[10]).length();c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);var c=1/h,f=1/g,j=1/i;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=
f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=j;b.elements[9]*=j;b.elements[10]*=j;d.setFromRotationMatrix(b);e.x=h;e.y=g;e.z=i;return this}}(),makeFrustum:function(a,b,c,d,e,f){var h=this.elements;h[0]=2*e/(b-a);h[4]=0;h[8]=(b+a)/(b-a);h[12]=0;h[1]=0;h[5]=2*e/(d-c);h[9]=(d+c)/(d-c);h[13]=0;h[2]=0;h[6]=0;h[10]=-(f+e)/(f-e);h[14]=-2*f*e/(f-e);h[3]=0;h[7]=0;h[11]=-1;h[15]=0;return this},makePerspective:function(a,b,c,d){var a=c*Math.tan(THREE.Math.degToRad(0.5*a)),e=-a;return this.makeFrustum(e*
b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var h=this.elements,g=b-a,i=c-d,j=f-e;h[0]=2/g;h[4]=0;h[8]=0;h[12]=-((b+a)/g);h[1]=0;h[5]=2/i;h[9]=0;h[13]=-((c+d)/i);h[2]=0;h[6]=0;h[10]=-2/j;h[14]=-((f+e)/j);h[3]=0;h[7]=0;h[11]=0;h[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=this.elements;return new THREE.Matrix4(a[0],
a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),h=0.5*a.distanceTo(b),
g=this.origin.clone().sub(e),a=-this.direction.dot(f),b=g.dot(this.direction),i=-g.dot(f),j=g.lengthSq(),l=Math.abs(1-a*a),m,n;0<=l?(g=a*i-b,m=a*b-i,n=h*l,0<=g?m>=-n?m<=n?(h=1/l,g*=h,m*=h,a=g*(g+a*m+2*b)+m*(a*g+m+2*i)+j):(m=h,g=Math.max(0,-(a*m+b)),a=-g*g+m*(m+2*i)+j):(m=-h,g=Math.max(0,-(a*m+b)),a=-g*g+m*(m+2*i)+j):m<=-n?(g=Math.max(0,-(-a*h+b)),m=0<g?-h:Math.min(Math.max(-h,-i),h),a=-g*g+m*(m+2*i)+j):m<=n?(g=0,m=Math.min(Math.max(-h,-i),h),a=m*(m+2*i)+j):(g=Math.max(0,-(a*h+b)),m=0<g?h:Math.min(Math.max(-h,
-i),h),a=-g*g+m*(m+2*i)+j)):(m=0<a?-h:h,g=Math.max(0,-(a*m+b)),a=-g*g+m*(m+2*i)+j);c&&c.copy(this.direction.clone().multiplyScalar(g).add(this.origin));d&&d.copy(f.clone().multiplyScalar(m).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?
0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(a){for(var b,c=0,d=0,e=a.length;d<e;d++)b=a[d].lengthSq(),c=Math.max(c,b);this.center.set(0,0,0);this.radius=Math.sqrt(c);return this},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-
this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);
this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var h=this.planes;h[0].copy(a);h[1].copy(b);h[2].copy(c);h[3].copy(d);h[4].copy(e);h[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements,a=c[0],d=c[1],e=c[2],f=c[3],h=c[4],g=c[5],i=c[6],j=c[7],l=c[8],m=c[9],n=c[10],p=c[11],t=c[12],q=c[13],r=c[14],c=c[15];b[0].setComponents(f-a,j-h,p-l,c-t).normalize();b[1].setComponents(f+
a,j+h,p+l,c+t).normalize();b[2].setComponents(f+d,j+g,p+m,c+q).normalize();b[3].setComponents(f-d,j-g,p-m,c-q).normalize();b[4].setComponents(f-e,j-i,p-n,c-r).normalize();b[5].setComponents(f+e,j+i,p+n,c+r).normalize();return this},intersectsObject:function(){var a=new THREE.Vector3;return function(b){var c=b.geometry,b=b.matrixWorld;null===c.boundingSphere&&c.computeBoundingSphere();c=-c.boundingSphere.radius*b.getMaxScaleOnAxis();a.getPositionFromMatrix(b);for(var b=this.planes,d=0;6>d;d++)if(b[d].distanceToPoint(a)<
c)return!1;return!0}}(),intersectsSphere:function(a){for(var b=this.planes,c=a.center,a=-a.radius,d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var h=f.distanceToPoint(a),
f=f.distanceToPoint(b);if(0>h&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start),a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){var d=d||(new THREE.Matrix3).getNormalMatrix(c),e=a.copy(this.normal).applyMatrix3(d),f=this.coplanarPoint(b);f.applyMatrix4(c);this.setFromNormalAndCoplanarPoint(e,f);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};THREE.Math={PI2:2*Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/
180;return function(b){return b*a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}()};THREE.Spline=function(a){function b(a,b,c,d,e,f,h){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*h+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,h,g,i,j,l,m,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);h=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;j=this.points[c[0]];l=this.points[c[1]];m=this.points[c[2]];n=this.points[c[3]];g=h*h;i=h*g;d.x=b(j.x,l.x,m.x,n.x,h,g,i);d.y=b(j.y,l.y,m.y,n.y,h,g,i);d.z=b(j.z,l.z,m.z,n.z,h,g,i);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,h=new THREE.Vector3,g=[],i=0;g[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),h.copy(d),i+=h.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(g[b]=i,e=b);g[g.length]=i;return{chunks:g,total:i}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,h,g=[],i=new THREE.Vector3,j=this.getLength();g.push(i.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=j.chunks[b]-j.chunks[b-1];h=Math.ceil(a*c/j.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<h-1;c++)d=e+c*(1/h)*(f-e),d=this.getPoint(d),
g.push(i.copy(d).clone());g.push(i.copy(this.points[b]).clone())}this.points=g}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,h,g){a.subVectors(h,e);b.subVectors(f,e);c.subVectors(d,e);var d=a.dot(a),e=a.dot(b),f=a.dot(c),i=b.dot(b),h=b.dot(c),j=d*i-e*e,g=g||new THREE.Vector3;if(0==j)return g.set(-2,-1,-1);j=1/j;i=(i*f-e*h)*j;d=(d*h-e*f)*j;return g.set(1-i-d,d,i)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Vertex=function(a){console.warn("THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.");return a};THREE.UV=function(a,b){console.warn("THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.");return new THREE.Vector2(a,b)};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners,d=c[a].indexOf(b);-1!==d&&c[a].splice(d,1)}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}};(function(a){a.Raycaster=function(b,c,d,e){this.ray=new a.Ray(b,c);0<this.ray.direction.lengthSq()&&this.ray.direction.normalize();this.near=d||0;this.far=e||Infinity};var b=new a.Sphere,c=new a.Ray,d=new a.Plane,e=new a.Vector3,f=new a.Vector3,h=new a.Matrix4,g=function(a,b){return a.distance-b.distance},i=function(g,j,n){if(g instanceof a.Particle){f.getPositionFromMatrix(g.matrixWorld);var p=j.ray.distanceToPoint(f);if(p>g.scale.x)return n;n.push({distance:p,point:g.position,face:null,object:g})}else if(g instanceof
a.LOD)f.getPositionFromMatrix(g.matrixWorld),p=j.ray.origin.distanceTo(f),i(g.getObjectForDistance(p),j,n);else if(g instanceof a.Mesh){p=g.geometry;f.getPositionFromMatrix(g.matrixWorld);null===p.boundingSphere&&p.computeBoundingSphere();b.set(f,p.boundingSphere.radius*g.matrixWorld.getMaxScaleOnAxis());if(!1===j.ray.isIntersectionSphere(b))return n;var t=p.vertices;if(p instanceof a.BufferGeometry){var q=g.material;if(void 0===q||!1===p.dynamic)return n;var r=g.material instanceof a.MeshFaceMaterial,
s=!0===r?g.material.materials:null,u=g.material.side,z,C,F=j.precision;h.getInverse(g.matrixWorld);c.copy(j.ray).applyMatrix4(h);var H,t=!1;p.attributes.index&&(t=!0);s=new a.Vector3;H=new a.Vector3;var I=new a.Vector3;new a.Vector3;new a.Vector3;for(var G=0;G<p.offsets.length;++G)for(var A=p.offsets[G].start,K=p.offsets[G].index,r=A,B=A+p.offsets[G].count;r<B;r+=3)if(t?(u=K+p.attributes.index.array[r],z=K+p.attributes.index.array[r+1],C=K+p.attributes.index.array[r+2]):(u=K,z=K+1,C=K+2),s.set(p.attributes.position.array[3*
u],p.attributes.position.array[3*u+1],p.attributes.position.array[3*u+2]),H.set(p.attributes.position.array[3*z],p.attributes.position.array[3*z+1],p.attributes.position.array[3*z+2]),I.set(p.attributes.position.array[3*C],p.attributes.position.array[3*C+1],p.attributes.position.array[3*C+2]),d.setFromCoplanarPoints(s,H,I),A=c.distanceToPlane(d),!(A<F)&&null!==A){u=q.side;if(u!==a.DoubleSide&&(z=c.direction.dot(d.normal),!(u===a.FrontSide?0>z:0<z)))continue;A<j.near||A>j.far||(e=c.at(A,e),!1!==a.Triangle.containsPoint(e,
s,H,I)&&n.push({distance:A,point:j.ray.at(A),face:null,faceIndex:null,object:g}))}}else if(p instanceof a.Geometry){r=g.material instanceof a.MeshFaceMaterial;s=!0===r?g.material.materials:null;F=j.precision;h.getInverse(g.matrixWorld);c.copy(j.ray).applyMatrix4(h);I=0;for(H=p.faces.length;I<H;I++)if(G=p.faces[I],q=!0===r?s[G.materialIndex]:g.material,void 0!==q&&(d.setFromNormalAndCoplanarPoint(G.normal,t[G.a]),A=c.distanceToPlane(d),!(A<F)&&null!==A)){u=q.side;if(u!==a.DoubleSide&&(z=c.direction.dot(d.normal),
!(u===a.FrontSide?0>z:0<z)))continue;if(!(A<j.near||A>j.far)){e=c.at(A,e);if(G instanceof a.Face3){if(u=t[G.a],z=t[G.b],C=t[G.c],!1===a.Triangle.containsPoint(e,u,z,C))continue}else if(G instanceof a.Face4){if(u=t[G.a],z=t[G.b],C=t[G.c],q=t[G.d],!1===a.Triangle.containsPoint(e,u,z,q)&&!1===a.Triangle.containsPoint(e,z,C,q))continue}else throw Error("face type not supported");n.push({distance:A,point:j.ray.at(A),face:G,faceIndex:I,object:g})}}}}else if(g instanceof a.Line){F=j.linePrecision;F*=F;p=
g.geometry;null===p.boundingSphere&&p.computeBoundingSphere();f.getPositionFromMatrix(g.matrixWorld);b.set(f,p.boundingSphere.radius*g.matrixWorld.getMaxScaleOnAxis());if(!1===j.ray.isIntersectionSphere(b))return n;h.getInverse(g.matrixWorld);c.copy(j.ray).applyMatrix4(h);c.direction.normalize();t=p.vertices;q=t.length;A=new a.Vector3;u=new a.Vector3;z=g.type===a.LineStrip?1:2;for(r=0;r<q-1;r+=z)c.distanceSqToSegment(t[r],t[r+1],u,A)<=F&&(p=c.origin.distanceTo(u),j.near<=p&&p<=j.far&&n.push({distance:p,
point:A.clone().applyMatrix4(g.matrixWorld),face:null,faceIndex:null,object:g}))}},j=function(a,b,c){for(var a=a.getDescendants(),d=0,e=a.length;d<e;d++)i(a[d],b,c)};a.Raycaster.prototype.precision=1E-4;a.Raycaster.prototype.linePrecision=1;a.Raycaster.prototype.set=function(a,b){this.ray.set(a,b);0<this.ray.direction.length()&&this.ray.direction.normalize()};a.Raycaster.prototype.intersectObject=function(a,b){var c=[];!0===b&&j(a,this,c);i(a,this,c);c.sort(g);return c};a.Raycaster.prototype.intersectObjects=
function(a,b){for(var c=[],d=0,e=a.length;d<e;d++)i(a[d],this,c),!0===b&&j(a[d],this,c);c.sort(g);return c}})(THREE);THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Euler;this.quaternion=new THREE.Quaternion;this.scale=new THREE.Vector3(1,1,1);this.rotation._quaternion=this.quaternion;this.quaternion._euler=this.rotation;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;
this.visible=this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={};this.renderBitmask=0};
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");return this.rotation.order},set eulerOrder(a){console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.")},
applyMatrix:function(){var a=new THREE.Matrix4;return function(b){this.matrix.multiplyMatrices(b,this.matrix);this.position.getPositionFromMatrix(this.matrix);this.scale.getScaleFromMatrix(this.matrix);a.extractRotation(this.matrix);this.quaternion.setFromRotationMatrix(a)}}(),setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},
setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,
b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b);a.applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this}}(),translate:function(a,b){console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=
new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),
add:function(a){if(a===this)console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");else if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(var b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}},remove:function(a){var b=this.children.indexOf(a);if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==
b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==
e))return e}},getChildByName:function(a,b){console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},getDescendants:function(a){void 0===a&&(a=[]);Array.prototype.push.apply(a,this.children);for(var b=0,c=this.children.length;b<c;b++)this.children[b].getDescendants(a);return a},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===
this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);a.position.copy(this.position);a.quaternion.copy(this.quaternion);
a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());
return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;THREE.Projector=function(){function a(){if(i===l){var a=new THREE.RenderableVertex;j.push(a);l++;i++;return a}return j[i++]}function b(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function c(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,h=-a.z+a.w,g=-b.z+b.w;if(0<=e&&0<=f&&0<=h&&0<=g)return!0;if(0>e&&0>f||0>h&&0>g)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>h?c=Math.max(c,h/(h-g)):0>g&&(d=Math.min(d,h/(h-g)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var d,e,f=[],h=
0,g,i,j=[],l=0,m,n,p=[],t=0,q,r=[],s=0,u,z,C=[],F=0,H,I,G=[],A=0,K={objects:[],sprites:[],lights:[],elements:[]},B=new THREE.Vector3,J=new THREE.Vector4,N=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),y=new THREE.Box3,M=Array(3),w=Array(4),Z=new THREE.Matrix4,L=new THREE.Matrix4,pa,Pa=new THREE.Matrix4,Ua=new THREE.Matrix3,O=new THREE.Matrix3,ka=new THREE.Vector3,Fa=new THREE.Frustum,wa=new THREE.Vector4,D=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);
L.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(L)};this.unprojectVector=function(a,b){b.projectionMatrixInverse.getInverse(b.projectionMatrix);L.multiplyMatrices(b.matrixWorld,b.projectionMatrixInverse);return a.applyProjection(L)};this.pickingRay=function(a,b){a.z=-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var V=function(a){if(e===h){var b=new THREE.RenderableObject;
f.push(b);h++;e++;d=b}else d=f[e++];d.id=a.id;d.object=a;null!==a.renderDepth?d.z=a.renderDepth:(B.getPositionFromMatrix(a.matrixWorld),B.applyProjection(L),d.z=B.z);return d},ea=function(a){if(!1!==a.visible){a instanceof THREE.Light?K.lights.push(a):a instanceof THREE.Mesh||a instanceof THREE.Line?(!1===a.frustumCulled||!0===Fa.intersectsObject(a))&&K.objects.push(V(a)):(a instanceof THREE.Sprite||a instanceof THREE.Particle)&&K.sprites.push(V(a));for(var b=0,c=a.children.length;b<c;b++)ea(a.children[b])}};
this.projectScene=function(d,f,h,l){var V=!1,B,fa,da,T,aa,na,ha,X,xa,ab,la,ia,ra;I=z=q=n=0;K.elements.length=0;!0===d.autoUpdate&&d.updateMatrixWorld();void 0===f.parent&&f.updateMatrixWorld();Z.copy(f.matrixWorldInverse.getInverse(f.matrixWorld));L.multiplyMatrices(f.projectionMatrix,Z);O.getNormalMatrix(Z);Fa.setFromMatrix(L);e=0;K.objects.length=0;K.sprites.length=0;K.lights.length=0;ea(d);!0===h&&K.objects.sort(b);d=0;for(h=K.objects.length;d<h;d++)if(X=K.objects[d].object,pa=X.matrixWorld,i=
0,X instanceof THREE.Mesh){xa=X.geometry;da=xa.vertices;ab=xa.faces;xa=xa.faceVertexUvs;Ua.getNormalMatrix(pa);ia=X.material instanceof THREE.MeshFaceMaterial;ra=!0===ia?X.material:null;B=0;for(fa=da.length;B<fa;B++){g=a();g.positionWorld.copy(da[B]).applyMatrix4(pa);g.positionScreen.copy(g.positionWorld).applyMatrix4(L);var ja=1/g.positionScreen.w;g.positionScreen.x*=ja;g.positionScreen.y*=ja;g.positionScreen.z*=ja;g.visible=!(-1>g.positionScreen.x||1<g.positionScreen.x||-1>g.positionScreen.y||1<
g.positionScreen.y||-1>g.positionScreen.z||1<g.positionScreen.z)}da=0;for(B=ab.length;da<B;da++)if(fa=ab[da],ja=!0===ia?ra.materials[fa.materialIndex]:X.material,void 0!==ja){na=ja.side;if(fa instanceof THREE.Face3)if(T=j[fa.a],aa=j[fa.b],ha=j[fa.c],M[0]=T.positionScreen,M[1]=aa.positionScreen,M[2]=ha.positionScreen,!0===T.visible||!0===aa.visible||!0===ha.visible||N.isIntersectionBox(y.setFromPoints(M)))if(V=0>(ha.positionScreen.x-T.positionScreen.x)*(aa.positionScreen.y-T.positionScreen.y)-(ha.positionScreen.y-
T.positionScreen.y)*(aa.positionScreen.x-T.positionScreen.x),na===THREE.DoubleSide||V===(na===THREE.FrontSide))n===t?(la=new THREE.RenderableFace3,p.push(la),t++,n++,m=la):m=p[n++],m.id=X.id,m.v1.copy(T),m.v2.copy(aa),m.v3.copy(ha);else continue;else continue;else if(fa instanceof THREE.Face4)if(T=j[fa.a],aa=j[fa.b],ha=j[fa.c],la=j[fa.d],w[0]=T.positionScreen,w[1]=aa.positionScreen,w[2]=ha.positionScreen,w[3]=la.positionScreen,!0===T.visible||!0===aa.visible||!0===ha.visible||!0===la.visible||N.isIntersectionBox(y.setFromPoints(w)))if(V=
0>(la.positionScreen.x-T.positionScreen.x)*(aa.positionScreen.y-T.positionScreen.y)-(la.positionScreen.y-T.positionScreen.y)*(aa.positionScreen.x-T.positionScreen.x)||0>(aa.positionScreen.x-ha.positionScreen.x)*(la.positionScreen.y-ha.positionScreen.y)-(aa.positionScreen.y-ha.positionScreen.y)*(la.positionScreen.x-ha.positionScreen.x),na===THREE.DoubleSide||V===(na===THREE.FrontSide)){if(q===s){var ua=new THREE.RenderableFace4;r.push(ua);s++;q++;m=ua}else m=r[q++];m.id=X.id;m.v1.copy(T);m.v2.copy(aa);
m.v3.copy(ha);m.v4.copy(la)}else continue;else continue;m.normalModel.copy(fa.normal);!1===V&&(na===THREE.BackSide||na===THREE.DoubleSide)&&m.normalModel.negate();m.normalModel.applyMatrix3(Ua).normalize();m.normalModelView.copy(m.normalModel).applyMatrix3(O);m.centroidModel.copy(fa.centroid).applyMatrix4(pa);ha=fa.vertexNormals;T=0;for(aa=ha.length;T<aa;T++)la=m.vertexNormalsModel[T],la.copy(ha[T]),!1===V&&(na===THREE.BackSide||na===THREE.DoubleSide)&&la.negate(),la.applyMatrix3(Ua).normalize(),
m.vertexNormalsModelView[T].copy(la).applyMatrix3(O);m.vertexNormalsLength=ha.length;T=0;for(aa=xa.length;T<aa;T++)if(la=xa[T][da],void 0!==la){na=0;for(ha=la.length;na<ha;na++)m.uvs[T][na]=la[na]}m.color=fa.color;m.material=ja;ka.copy(m.centroidModel).applyProjection(L);m.z=ka.z;K.elements.push(m)}}else if(X instanceof THREE.Line){Pa.multiplyMatrices(L,pa);da=X.geometry.vertices;T=a();T.positionScreen.copy(da[0]).applyMatrix4(Pa);ab=X.type===THREE.LinePieces?2:1;B=1;for(fa=da.length;B<fa;B++)T=a(),
T.positionScreen.copy(da[B]).applyMatrix4(Pa),0<(B+1)%ab||(aa=j[i-2],wa.copy(T.positionScreen),D.copy(aa.positionScreen),!0===c(wa,D)&&(wa.multiplyScalar(1/wa.w),D.multiplyScalar(1/D.w),z===F?(xa=new THREE.RenderableLine,C.push(xa),F++,z++,u=xa):u=C[z++],u.id=X.id,u.v1.positionScreen.copy(wa),u.v2.positionScreen.copy(D),u.z=Math.max(wa.z,D.z),u.material=X.material,X.material.vertexColors===THREE.VertexColors&&(u.vertexColors[0].copy(X.geometry.colors[B]),u.vertexColors[1].copy(X.geometry.colors[B-
1])),K.elements.push(u)))}d=0;for(h=K.sprites.length;d<h;d++)X=K.sprites[d].object,pa=X.matrixWorld,X instanceof THREE.Particle&&(J.set(pa.elements[12],pa.elements[13],pa.elements[14],1),J.applyMatrix4(L),ja=1/J.w,J.z*=ja,0<J.z&&1>J.z&&(I===A?(V=new THREE.RenderableParticle,G.push(V),A++,I++,H=V):H=G[I++],H.id=X.id,H.x=J.x*ja,H.y=J.y*ja,H.z=J.z,H.object=X,H.rotation=X.rotation.z,H.scale.x=X.scale.x*Math.abs(H.x-(J.x+f.projectionMatrix.elements[0])/(J.w+f.projectionMatrix.elements[12])),H.scale.y=
X.scale.y*Math.abs(H.y-(J.y+f.projectionMatrix.elements[5])/(J.w+f.projectionMatrix.elements[13])),H.material=X.material,K.elements.push(H)));!0===l&&K.elements.sort(b);return K}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0;this.centroid=new THREE.Vector3};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Face4=function(a,b,c,d,e,f,h){this.a=a;this.b=b;this.c=c;this.d=d;this.normal=e instanceof THREE.Vector3?e:new THREE.Vector3;this.vertexNormals=e instanceof Array?e:[];this.color=f instanceof THREE.Color?f:new THREE.Color;this.vertexColors=f instanceof Array?f:[];this.vertexTangents=[];this.materialIndex=void 0!==h?h:0;this.centroid=new THREE.Vector3};
THREE.Face4.prototype={constructor:THREE.Face4,clone:function(){var a=new THREE.Face4(this.a,this.b,this.c,this.d);a.normal.copy(this.normal);a.color.copy(this.color);a.centroid.copy(this.centroid);a.materialIndex=this.materialIndex;var b,c;b=0;for(c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();
return a}};THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.normals=[];this.faces=[];this.faceUvs=[[]];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=
this.normalsNeedUpdate=this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){var e=this.faces[c];e.normal.applyMatrix3(b).normalize();for(var f=0,h=e.vertexNormals.length;f<h;f++)e.vertexNormals[f].applyMatrix3(b).normalize();e.centroid.applyMatrix4(a)}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof
THREE.Sphere&&this.computeBoundingSphere()},computeCentroids:function(){var a,b,c;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.centroid.set(0,0,0),c instanceof THREE.Face3?(c.centroid.add(this.vertices[c.a]),c.centroid.add(this.vertices[c.b]),c.centroid.add(this.vertices[c.c]),c.centroid.divideScalar(3)):c instanceof THREE.Face4&&(c.centroid.add(this.vertices[c.a]),c.centroid.add(this.vertices[c.b]),c.centroid.add(this.vertices[c.c]),c.centroid.add(this.vertices[c.d]),c.centroid.divideScalar(4))},
computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],h=this.vertices[e.b];a.subVectors(this.vertices[e.c],h);b.subVectors(f,h);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d,e;if(void 0===this.__tmpVertices){e=this.__tmpVertices=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)e[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],
d instanceof THREE.Face3?d.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]:d instanceof THREE.Face4&&(d.vertexNormals=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3])}else{e=this.__tmpVertices;b=0;for(c=this.vertices.length;b<c;b++)e[b].set(0,0,0)}if(a){var f,h,g,i=new THREE.Vector3,j=new THREE.Vector3,l=new THREE.Vector3,m=new THREE.Vector3,n=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(a=this.vertices[d.a],
f=this.vertices[d.b],h=this.vertices[d.c],i.subVectors(h,f),j.subVectors(a,f),i.cross(j),e[d.a].add(i),e[d.b].add(i),e[d.c].add(i)):d instanceof THREE.Face4&&(a=this.vertices[d.a],f=this.vertices[d.b],h=this.vertices[d.c],g=this.vertices[d.d],l.subVectors(g,f),j.subVectors(a,f),l.cross(j),e[d.a].add(l),e[d.b].add(l),e[d.d].add(l),m.subVectors(g,h),n.subVectors(f,h),m.cross(n),e[d.b].add(m),e[d.c].add(m),e[d.d].add(m))}else{b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?
(e[d.a].add(d.normal),e[d.b].add(d.normal),e[d.c].add(d.normal)):d instanceof THREE.Face4&&(e[d.a].add(d.normal),e[d.b].add(d.normal),e[d.c].add(d.normal),e[d.d].add(d.normal))}b=0;for(c=this.vertices.length;b<c;b++)e[b].normalize();b=0;for(c=this.faces.length;b<c;b++)d=this.faces[b],d instanceof THREE.Face3?(d.vertexNormals[0].copy(e[d.a]),d.vertexNormals[1].copy(e[d.b]),d.vertexNormals[2].copy(e[d.c])):d instanceof THREE.Face4&&(d.vertexNormals[0].copy(e[d.a]),d.vertexNormals[1].copy(e[d.b]),d.vertexNormals[2].copy(e[d.c]),
d.vertexNormals[3].copy(e[d.d]))},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c];e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone();e.__originalVertexNormals||(e.__originalVertexNormals=[]);a=0;for(b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone()}var f=new THREE.Geometry;f.faces=
this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];var h=this.morphNormals[a].faceNormals,g=this.morphNormals[a].vertexNormals,i,j;c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=new THREE.Vector3,j=e instanceof THREE.Face3?{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3}:{a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3,d:new THREE.Vector3},
h.push(i),g.push(j)}h=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],i=h.faceNormals[c],j=h.vertexNormals[c],i.copy(e.normal),e instanceof THREE.Face3?(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2])):(j.a.copy(e.vertexNormals[0]),j.b.copy(e.vertexNormals[1]),j.c.copy(e.vertexNormals[2]),j.d.copy(e.vertexNormals[3]))}c=0;for(d=this.faces.length;c<
d;c++)e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){function a(a,b,c,d,e,f,y){g=a.vertices[b];i=a.vertices[c];j=a.vertices[d];l=h[e];m=h[f];n=h[y];p=i.x-g.x;t=j.x-g.x;q=i.y-g.y;r=j.y-g.y;s=i.z-g.z;u=j.z-g.z;z=m.x-l.x;C=n.x-l.x;F=m.y-l.y;H=n.y-l.y;I=1/(z*H-C*F);B.set((H*p-F*t)*I,(H*q-F*r)*I,(H*s-F*u)*I);J.set((z*t-C*p)*I,(z*r-C*q)*I,(z*u-C*s)*I);A[b].add(B);A[c].add(B);A[d].add(B);K[b].add(J);K[c].add(J);K[d].add(J)}var b,c,d,
e,f,h,g,i,j,l,m,n,p,t,q,r,s,u,z,C,F,H,I,G,A=[],K=[],B=new THREE.Vector3,J=new THREE.Vector3,N=new THREE.Vector3,y=new THREE.Vector3,M=new THREE.Vector3;b=0;for(c=this.vertices.length;b<c;b++)A[b]=new THREE.Vector3,K[b]=new THREE.Vector3;b=0;for(c=this.faces.length;b<c;b++)f=this.faces[b],h=this.faceVertexUvs[0][b],f instanceof THREE.Face3?a(this,f.a,f.b,f.c,0,1,2):f instanceof THREE.Face4&&(a(this,f.a,f.b,f.d,0,1,3),a(this,f.b,f.c,f.d,1,2,3));var w=["a","b","c","d"];b=0;for(c=this.faces.length;b<
c;b++){f=this.faces[b];for(d=0;d<f.vertexNormals.length;d++)M.copy(f.vertexNormals[d]),e=f[w[d]],G=A[e],N.copy(G),N.sub(M.multiplyScalar(M.dot(G))).normalize(),y.crossVectors(f.vertexNormals[d],G),e=y.dot(K[e]),e=0>e?-1:1,f.vertexTangents[d]=new THREE.Vector4(N.x,N.y,N.z,e)}this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=
new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,h,g,i,j;this.__tmpVertices=void 0;f=0;for(h=this.vertices.length;f<h;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=
c[a[d]];e=[];f=0;for(h=this.faces.length;f<h;f++)if(a=this.faces[f],a instanceof THREE.Face3){a.a=c[a.a];a.b=c[a.b];a.c=c[a.c];g=[a.a,a.b,a.c];d=-1;for(i=0;3>i;i++)if(g[i]==g[(i+1)%3]){e.push(f);break}}else if(a instanceof THREE.Face4){a.a=c[a.a];a.b=c[a.b];a.c=c[a.c];a.d=c[a.d];g=[a.a,a.b,a.c,a.d];d=-1;for(i=0;4>i;i++)g[i]==g[(i+1)%4]&&(0<=d&&e.push(f),d=i);if(0<=d){g.splice(d,1);var l=new THREE.Face3(g[0],g[1],g[2],a.normal,a.color,a.materialIndex);g=0;for(i=this.faceVertexUvs.length;g<i;g++)(j=
this.faceVertexUvs[g][f])&&j.splice(d,1);a.vertexNormals&&0<a.vertexNormals.length&&(l.vertexNormals=a.vertexNormals,l.vertexNormals.splice(d,1));a.vertexColors&&0<a.vertexColors.length&&(l.vertexColors=a.vertexColors,l.vertexColors.splice(d,1));this.faces[f]=l}}for(f=e.length-1;0<=f;f--){this.faces.splice(f,1);g=0;for(i=this.faceVertexUvs.length;g<i;g++)this.faceVertexUvs[g].splice(f,1)}c=this.vertices.length-b.length;this.vertices=b;return c},clone:function(){for(var a=new THREE.Geometry,b=this.vertices,
c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],h=0,g=e.length;h<g;h++)f.push(new THREE.Vector2(e[h].x,e[h].y));a.faceVertexUvs[0].push(f)}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.attributes={};this.dynamic=!1;this.offsets=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.morphTargets=[]};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,applyMatrix:function(a){var b,c;this.attributes.position&&(b=this.attributes.position.array);this.attributes.normal&&(c=this.attributes.normal.array);void 0!==b&&(a.multiplyVector3Array(b),this.verticesNeedUpdate=!0);void 0!==c&&((new THREE.Matrix3).getNormalMatrix(a).multiplyVector3Array(c),this.normalizeNormals(),this.normalsNeedUpdate=!0)},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=
this.attributes.position.array;if(a){var b=this.boundingBox,c,d,e;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var f=3,h=a.length;f<h;f+=3)c=a[f],d=a[f+1],e=a[f+2],c<b.min.x?b.min.x=c:c>b.max.x&&(b.max.x=c),d<b.min.y?b.min.y=d:d>b.max.y&&(b.max.y=d),e<b.min.z?b.min.z=e:e>b.max.z&&(b.max.z=e)}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=
new THREE.Sphere);var a=this.attributes.position.array;if(a){for(var b,c=0,d,e,f=0,h=a.length;f<h;f+=3)b=a[f],d=a[f+1],e=a[f+2],b=b*b+d*d+e*e,b>c&&(c=b);this.boundingSphere.radius=Math.sqrt(c)}},computeVertexNormals:function(){if(this.attributes.position){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a)};else{a=0;for(b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0}var e=
this.attributes.position.array,f=this.attributes.normal.array,h,g,i,j,l,m,n=new THREE.Vector3,p=new THREE.Vector3,t=new THREE.Vector3,q=new THREE.Vector3,r=new THREE.Vector3;if(this.attributes.index){var s=this.attributes.index.array,u=this.offsets;c=0;for(d=u.length;c<d;++c){b=u[c].start;h=u[c].count;var z=u[c].index;a=b;for(b+=h;a<b;a+=3)h=z+s[a],g=z+s[a+1],i=z+s[a+2],j=e[3*h],l=e[3*h+1],m=e[3*h+2],n.set(j,l,m),j=e[3*g],l=e[3*g+1],m=e[3*g+2],p.set(j,l,m),j=e[3*i],l=e[3*i+1],m=e[3*i+2],t.set(j,l,
m),q.subVectors(t,p),r.subVectors(n,p),q.cross(r),f[3*h]+=q.x,f[3*h+1]+=q.y,f[3*h+2]+=q.z,f[3*g]+=q.x,f[3*g+1]+=q.y,f[3*g+2]+=q.z,f[3*i]+=q.x,f[3*i+1]+=q.y,f[3*i+2]+=q.z}}else{a=0;for(b=e.length;a<b;a+=9)j=e[a],l=e[a+1],m=e[a+2],n.set(j,l,m),j=e[a+3],l=e[a+4],m=e[a+5],p.set(j,l,m),j=e[a+6],l=e[a+7],m=e[a+8],t.set(j,l,m),q.subVectors(t,p),r.subVectors(n,p),q.cross(r),f[a]=q.x,f[a+1]=q.y,f[a+2]=q.z,f[a+3]=q.x,f[a+4]=q.y,f[a+5]=q.z,f[a+6]=q.x,f[a+7]=q.y,f[a+8]=q.z}this.normalizeNormals();this.normalsNeedUpdate=
!0}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},computeTangents:function(){function a(a){Pa.x=d[3*a];Pa.y=d[3*a+1];Pa.z=d[3*a+2];Ua.copy(Pa);ka=g[a];L.copy(ka);L.sub(Pa.multiplyScalar(Pa.dot(ka))).normalize();pa.crossVectors(Ua,ka);Fa=pa.dot(i[a]);O=0>Fa?-1:1;h[4*a]=L.x;h[4*a+1]=L.y;h[4*a+2]=L.z;h[4*a+3]=O}if(void 0===this.attributes.index||void 0===this.attributes.position||
void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var b=this.attributes.index.array,c=this.attributes.position.array,d=this.attributes.normal.array,e=this.attributes.uv.array,f=c.length/3;void 0===this.attributes.tangent&&(this.attributes.tangent={itemSize:4,array:new Float32Array(4*f)});for(var h=this.attributes.tangent.array,g=[],i=[],j=0;j<f;j++)g[j]=new THREE.Vector3,
i[j]=new THREE.Vector3;var l,m,n,p,t,q,r,s,u,z,C,F,H,I,G,f=new THREE.Vector3,j=new THREE.Vector3,A,K,B,J,N,y,M,w=this.offsets;B=0;for(J=w.length;B<J;++B){K=w[B].start;N=w[B].count;var Z=w[B].index;A=K;for(K+=N;A<K;A+=3)N=Z+b[A],y=Z+b[A+1],M=Z+b[A+2],l=c[3*N],m=c[3*N+1],n=c[3*N+2],p=c[3*y],t=c[3*y+1],q=c[3*y+2],r=c[3*M],s=c[3*M+1],u=c[3*M+2],z=e[2*N],C=e[2*N+1],F=e[2*y],H=e[2*y+1],I=e[2*M],G=e[2*M+1],p-=l,l=r-l,t-=m,m=s-m,q-=n,n=u-n,F-=z,z=I-z,H-=C,C=G-C,G=1/(F*C-z*H),f.set((C*p-H*l)*G,(C*t-H*m)*G,
(C*q-H*n)*G),j.set((F*l-z*p)*G,(F*m-z*t)*G,(F*n-z*q)*G),g[N].add(f),g[y].add(f),g[M].add(f),i[N].add(j),i[y].add(j),i[M].add(j)}var L=new THREE.Vector3,pa=new THREE.Vector3,Pa=new THREE.Vector3,Ua=new THREE.Vector3,O,ka,Fa;B=0;for(J=w.length;B<J;++B){K=w[B].start;N=w[B].count;Z=w[B].index;A=K;for(K+=N;A<K;A+=3)N=Z+b[A],y=Z+b[A+1],M=Z+b[A+2],a(N),a(y),a(M)}this.tangentsNeedUpdate=this.hasTangents=!0}},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4;this.projectionMatrixInverse=new THREE.Matrix4};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;return a};THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:"anonymous",addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/
a.total).toFixed(0)+"%"):b+((a.loaded/1E3).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");a.pop();return(1>a.length?".":a.join("/"))+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=THREE.Loader.prototype.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.floor(a)==
a}function d(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function e(a,e,f,g,i,j,r){var s=/\.dds$/i.test(f),u=b+"/"+f;if(s){var z=THREE.ImageUtils.loadCompressedTexture(u);a[e]=z}else z=document.createElement("canvas"),a[e]=new THREE.Texture(z);a[e].sourceFile=f;g&&(a[e].repeat.set(g[0],g[1]),1!==g[0]&&(a[e].wrapS=THREE.RepeatWrapping),1!==g[1]&&(a[e].wrapT=THREE.RepeatWrapping));i&&a[e].offset.set(i[0],i[1]);j&&(f={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==
f[j[0]]&&(a[e].wrapS=f[j[0]]),void 0!==f[j[1]]&&(a[e].wrapT=f[j[1]]));r&&(a[e].anisotropy=r);if(!s){var C=a[e],a=new Image;a.onload=function(){if(!c(this.width)||!c(this.height)){var a=d(this.width),b=d(this.height);C.image.width=a;C.image.height=b;C.image.getContext("2d").drawImage(this,0,0,a,b)}else C.image=this;C.needsUpdate=!0};a.crossOrigin=h.crossOrigin;a.src=u}}function f(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var h=this,g="MeshLambertMaterial",i={color:15658734,opacity:1,map:null,
lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var j=a.shading.toLowerCase();"phong"===j?g="MeshPhongMaterial":"basic"===j&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(i.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)i.transparent=a.transparent;void 0!==a.depthTest&&(i.depthTest=a.depthTest);void 0!==a.depthWrite&&(i.depthWrite=a.depthWrite);void 0!==a.visible&&(i.visible=a.visible);void 0!==a.flipSided&&(i.side=THREE.BackSide);
void 0!==a.doubleSided&&(i.side=THREE.DoubleSide);void 0!==a.wireframe&&(i.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===a.vertexColors?i.vertexColors=THREE.FaceColors:a.vertexColors&&(i.vertexColors=THREE.VertexColors));a.colorDiffuse?i.color=f(a.colorDiffuse):a.DbgColor&&(i.color=a.DbgColor);a.colorSpecular&&(i.specular=f(a.colorSpecular));a.colorAmbient&&(i.ambient=f(a.colorAmbient));a.transparency&&(i.opacity=a.transparency);a.specularCoef&&(i.shininess=a.specularCoef);a.mapDiffuse&&
b&&e(i,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,a.mapDiffuseAnisotropy);a.mapLight&&b&&e(i,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&e(i,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&e(i,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&e(i,"specularMap",a.mapSpecular,a.mapSpecularRepeat,
a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapBumpScale&&(i.bumpScale=a.mapBumpScale);a.mapNormal?(g=THREE.ShaderLib.normalmap,j=THREE.UniformsUtils.clone(g.uniforms),j.tNormal.value=i.normalMap,a.mapNormalFactor&&j.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),i.map&&(j.tDiffuse.value=i.map,j.enableDiffuse.value=!0),i.specularMap&&(j.tSpecular.value=i.specularMap,j.enableSpecular.value=!0),i.lightMap&&(j.tAO.value=i.lightMap,j.enableAO.value=!0),j.uDiffuseColor.value.setHex(i.color),
j.uSpecularColor.value.setHex(i.specular),j.uAmbientColor.value.setHex(i.ambient),j.uShininess.value=i.shininess,void 0!==i.opacity&&(j.uOpacity.value=i.opacity),g=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:j,lights:!0,fog:!0}),i.transparent&&(g.transparent=!0)):g=new THREE[g](i);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=new XMLHttpRequest;void 0!==b&&f.addEventListener("load",function(c){e.manager.itemEnd(a);b(c.target.responseText)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.open("GET",a,!0);f.send(null);e.manager.itemStart(a)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=document.createElement("img");void 0!==b&&f.addEventListener("load",function(){e.manager.itemEnd(a);b(this)},!1);void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1);void 0!==d&&f.addEventListener("error",function(a){d(a)},!1);void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin);f.src=a;e.manager.itemStart(a)},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,h=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var g=JSON.parse(f.responseText),g=a.parse(g,d);c(g.geometry,g.materials)}else console.warn("THREE.JSONLoader: ["+b+"] seems to be unreachable or file there is empty");a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load ["+b+"] ["+f.status+"]");else f.readyState===f.LOADING?e&&(0===h&&
(h=f.getResponseHeader("Content-Length")),e({total:h,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(h=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1,e,f,h,g,i,j,l,m,n,p,t,q,r,s,u,z=a.faces;p=a.vertices;var C=a.normals,F=a.colors,H=0;if(void 0!==a.uvs){for(e=0;e<a.uvs.length;e++)a.uvs[e].length&&H++;for(e=0;e<H;e++)c.faceUvs[e]=[],c.faceVertexUvs[e]=[]}g=0;for(i=p.length;g<i;)j=new THREE.Vector3,j.x=p[g++]*d,j.y=p[g++]*d,j.z=p[g++]*d,c.vertices.push(j);g=0;for(i=z.length;g<i;){p=z[g++];j=p&1;h=p&2;e=p&4;f=p&8;m=p&16;l=p&32;t=p&64;p&=128;j?(q=
new THREE.Face4,q.a=z[g++],q.b=z[g++],q.c=z[g++],q.d=z[g++],j=4):(q=new THREE.Face3,q.a=z[g++],q.b=z[g++],q.c=z[g++],j=3);h&&(h=z[g++],q.materialIndex=h);h=c.faces.length;if(e)for(e=0;e<H;e++)r=a.uvs[e],n=z[g++],u=r[2*n],n=r[2*n+1],c.faceUvs[e][h]=new THREE.Vector2(u,n);if(f)for(e=0;e<H;e++){r=a.uvs[e];s=[];for(f=0;f<j;f++)n=z[g++],u=r[2*n],n=r[2*n+1],s[f]=new THREE.Vector2(u,n);c.faceVertexUvs[e][h]=s}m&&(m=3*z[g++],f=new THREE.Vector3,f.x=C[m++],f.y=C[m++],f.z=C[m],q.normal=f);if(l)for(e=0;e<j;e++)m=
3*z[g++],f=new THREE.Vector3,f.x=C[m++],f.y=C[m++],f.z=C[m],q.vertexNormals.push(f);t&&(l=z[g++],l=new THREE.Color(F[l]),q.color=l);if(p)for(e=0;e<j;e++)l=z[g++],l=new THREE.Color(F[l]),q.vertexColors.push(l);c.faces.push(q)}if(a.skinWeights){g=0;for(i=a.skinWeights.length;g<i;g+=2)z=a.skinWeights[g],C=a.skinWeights[g+1],c.skinWeights.push(new THREE.Vector4(z,C,0,0))}if(a.skinIndices){g=0;for(i=a.skinIndices.length;g<i;g+=2)z=a.skinIndices[g],C=a.skinIndices[g+1],c.skinIndices.push(new THREE.Vector4(z,
C,0,0))}c.bones=a.bones;c.animation=a.animation;if(void 0!==a.morphTargets){g=0;for(i=a.morphTargets.length;g<i;g++){c.morphTargets[g]={};c.morphTargets[g].name=a.morphTargets[g].name;c.morphTargets[g].vertices=[];F=c.morphTargets[g].vertices;H=a.morphTargets[g].vertices;z=0;for(C=H.length;z<C;z+=3)p=new THREE.Vector3,p.x=H[z]*d,p.y=H[z+1]*d,p.z=H[z+2]*d,F.push(p)}}if(void 0!==a.morphColors){g=0;for(i=a.morphColors.length;g<i;g++){c.morphColors[g]={};c.morphColors[g].name=a.morphColors[g].name;c.morphColors[g].colors=
[];C=c.morphColors[g].colors;F=a.morphColors[g].colors;d=0;for(z=F.length;d<z;d+=3)H=new THREE.Color(16755200),H.setRGB(F[d],F[d+1],F[d+2]),C.push(H)}}c.computeCentroids();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.GeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.GeometryLoader.prototype={constructor:THREE.GeometryLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(){}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader;d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b;switch(a.type){case "MeshBasicMaterial":b=new THREE.MeshBasicMaterial({color:a.color,opacity:a.opacity,transparent:a.transparent,wireframe:a.wireframe});break;case "MeshLambertMaterial":b=new THREE.MeshLambertMaterial({color:a.color,
ambient:a.ambient,emissive:a.emissive,opacity:a.opacity,transparent:a.transparent,wireframe:a.wireframe});break;case "MeshPhongMaterial":b=new THREE.MeshPhongMaterial({color:a.color,ambient:a.ambient,emissive:a.emissive,specular:a.specular,shininess:a.shininess,opacity:a.opacity,transparent:a.transparent,wireframe:a.wireframe});break;case "MeshNormalMaterial":b=new THREE.MeshNormalMaterial({opacity:a.opacity,transparent:a.transparent,wireframe:a.wireframe});break;case "MeshDepthMaterial":b=new THREE.MeshDepthMaterial({opacity:a.opacity,
transparent:a.transparent,wireframe:a.wireframe})}void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(a){b(c.parse(JSON.parse(a)))})},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=0,e=a.length;d<e;d++){var f,
h=a[d];switch(h.type){case "PlaneGeometry":f=new THREE.PlaneGeometry(h.width,h.height,h.widthSegments,h.heightSegments);break;case "CubeGeometry":f=new THREE.CubeGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CylinderGeometry":f=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radiusSegments,h.heightSegments,h.openEnded);break;case "SphereGeometry":f=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,
h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":f=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "TorusGeometry":f=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":f=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "Geometry":f=c.parse(h.data).geometry}f.uuid=h.uuid;void 0!==h.name&&(f.name=h.name);b[h.uuid]=f}return b},parseMaterials:function(a){var b=
{};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],h=c.parse(f);h.uuid=f.uuid;void 0!==f.name&&(h.name=f.name);b[f.uuid]=h}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=
new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+
b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&
(e.userData=b.userData);if(void 0!==b.children)for(var h in b.children)e.add(this.parseObject(b.children[h],c,d));return e}}()};THREE.SceneLoader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};this.callbackSync=function(){};this.callbackProgress=function(){};this.geometryHandlers={};this.hierarchyHandlers={};this.addGeometryHandler("ascii",THREE.JSONLoader)};
THREE.SceneLoader.prototype={constructor:THREE.SceneLoader,load:function(a,b){var c=this,d=new THREE.XHRLoader(c.manager);d.setCrossOrigin(this.crossOrigin);d.load(a,function(d){c.parse(JSON.parse(d),b,a)})},setCrossOrigin:function(a){this.crossOrigin=a},addGeometryHandler:function(a,b){this.geometryHandlers[a]={loaderClass:b}},addHierarchyHandler:function(a,b){this.hierarchyHandlers[a]={loaderClass:b}},parse:function(a,b,c){function d(a,b){return"relativeToHTML"==b?a:n+"/"+a}function e(){f(A.scene,
B.objects)}function f(a,b){var c,e,h,i,j,l,n;for(n in b){var r=A.objects[n],s=b[n];if(void 0===r){if(s.type&&s.type in m.hierarchyHandlers){if(void 0===s.loading){e={type:1,url:1,material:1,position:1,rotation:1,scale:1,visible:1,children:1,userData:1,skin:1,morph:1,mirroredLoop:1,duration:1};h={};for(var y in s)y in e||(h[y]=s[y]);t=A.materials[s.material];s.loading=!0;e=m.hierarchyHandlers[s.type].loaderObject;e.options?e.load(d(s.url,B.urlBaseType),g(n,a,t,s)):e.load(d(s.url,B.urlBaseType),g(n,
a,t,s),h)}}else if(void 0!==s.geometry){if(p=A.geometries[s.geometry]){r=!1;t=A.materials[s.material];r=t instanceof THREE.ShaderMaterial;h=s.position;i=s.rotation;j=s.scale;c=s.matrix;l=s.quaternion;s.material||(t=new THREE.MeshFaceMaterial(A.face_materials[s.geometry]));t instanceof THREE.MeshFaceMaterial&&0===t.materials.length&&(t=new THREE.MeshFaceMaterial(A.face_materials[s.geometry]));if(t instanceof THREE.MeshFaceMaterial)for(e=0;e<t.materials.length;e++)r=r||t.materials[e]instanceof THREE.ShaderMaterial;
r&&p.computeTangents();s.skin?r=new THREE.SkinnedMesh(p,t):s.morph?(r=new THREE.MorphAnimMesh(p,t),void 0!==s.duration&&(r.duration=s.duration),void 0!==s.time&&(r.time=s.time),void 0!==s.mirroredLoop&&(r.mirroredLoop=s.mirroredLoop),t.morphNormals&&p.computeMorphNormals()):r=new THREE.Mesh(p,t);r.name=n;c?(r.matrixAutoUpdate=!1,r.matrix.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15])):(r.position.fromArray(h),l?r.quaternion.fromArray(l):r.rotation.fromArray(i),
r.scale.fromArray(j));r.visible=s.visible;r.castShadow=s.castShadow;r.receiveShadow=s.receiveShadow;a.add(r);A.objects[n]=r}}else"DirectionalLight"===s.type||"PointLight"===s.type||"AmbientLight"===s.type?(z=void 0!==s.color?s.color:16777215,C=void 0!==s.intensity?s.intensity:1,"DirectionalLight"===s.type?(h=s.direction,u=new THREE.DirectionalLight(z,C),u.position.fromArray(h),s.target&&(K.push({object:u,targetName:s.target}),u.target=null)):"PointLight"===s.type?(h=s.position,e=s.distance,u=new THREE.PointLight(z,
C,e),u.position.fromArray(h)):"AmbientLight"===s.type&&(u=new THREE.AmbientLight(z)),a.add(u),u.name=n,A.lights[n]=u,A.objects[n]=u):"PerspectiveCamera"===s.type||"OrthographicCamera"===s.type?(h=s.position,i=s.rotation,l=s.quaternion,"PerspectiveCamera"===s.type?q=new THREE.PerspectiveCamera(s.fov,s.aspect,s.near,s.far):"OrthographicCamera"===s.type&&(q=new THREE.OrthographicCamera(s.left,s.right,s.top,s.bottom,s.near,s.far)),q.name=n,q.position.fromArray(h),void 0!==l?q.quaternion.fromArray(l):
void 0!==i&&q.rotation.fromArray(i),a.add(q),A.cameras[n]=q,A.objects[n]=q):(h=s.position,i=s.rotation,j=s.scale,l=s.quaternion,r=new THREE.Object3D,r.name=n,r.position.fromArray(h),l?r.quaternion.fromArray(l):r.rotation.fromArray(i),r.scale.fromArray(j),r.visible=void 0!==s.visible?s.visible:!1,a.add(r),A.objects[n]=r,A.empties[n]=r);if(r){if(void 0!==s.userData)for(var F in s.userData)r.userData[F]=s.userData[F];if(void 0!==s.groups)for(e=0;e<s.groups.length;e++)h=s.groups[e],void 0===A.groups[h]&&
(A.groups[h]=[]),A.groups[h].push(n)}}void 0!==r&&void 0!==s.children&&f(r,s.children)}}function h(a){return function(b,c){b.name=a;A.geometries[a]=b;A.face_materials[a]=c;e();F-=1;m.onLoadComplete();j()}}function g(a,b,c,d){return function(f){var f=f.content?f.content:f.dae?f.scene:f,h=d.rotation,g=d.quaternion,i=d.scale;f.position.fromArray(d.position);g?f.quaternion.fromArray(g):f.rotation.fromArray(h);f.scale.fromArray(i);c&&f.traverse(function(a){a.material=c});var l=void 0!==d.visible?d.visible:
!0;f.traverse(function(a){a.visible=l});b.add(f);f.name=a;A.objects[a]=f;e();F-=1;m.onLoadComplete();j()}}function i(a){return function(b,c){b.name=a;A.geometries[a]=b;A.face_materials[a]=c}}function j(){m.callbackProgress({totalModels:I,totalTextures:G,loadedModels:I-F,loadedTextures:G-H},A);m.onLoadProgress();if(0===F&&0===H){for(var a=0;a<K.length;a++){var c=K[a],d=A.objects[c.targetName];d?c.object.target=d:(c.object.target=new THREE.Object3D,A.scene.add(c.object.target));c.object.target.userData.targetInverse=
c.object}b(A)}}function l(a,b){b(a);if(void 0!==a.children)for(var c in a.children)l(a.children[c],b)}var m=this,n=THREE.Loader.prototype.extractUrlBase(c),p,t,q,r,s,u,z,C,F,H,I,G,A,K=[],B=a,J;for(J in this.geometryHandlers)a=this.geometryHandlers[J].loaderClass,this.geometryHandlers[J].loaderObject=new a;for(J in this.hierarchyHandlers)a=this.hierarchyHandlers[J].loaderClass,this.hierarchyHandlers[J].loaderObject=new a;H=F=0;A={scene:new THREE.Scene,geometries:{},face_materials:{},materials:{},textures:{},
objects:{},cameras:{},lights:{},fogs:{},empties:{},groups:{}};if(B.transform&&(J=B.transform.position,a=B.transform.rotation,c=B.transform.scale,J&&A.scene.position.fromArray(J),a&&A.scene.rotation.fromArray(a),c&&A.scene.scale.fromArray(c),J||a||c))A.scene.updateMatrix(),A.scene.updateMatrixWorld();J=function(a){return function(){H-=a;j();m.onLoadComplete()}};for(var N in B.fogs)a=B.fogs[N],"linear"===a.type?r=new THREE.Fog(0,a.near,a.far):"exp2"===a.type&&(r=new THREE.FogExp2(0,a.density)),a=a.color,
r.color.setRGB(a[0],a[1],a[2]),A.fogs[N]=r;for(var y in B.geometries)r=B.geometries[y],r.type in this.geometryHandlers&&(F+=1,m.onLoadStart());for(var M in B.objects)l(B.objects[M],function(a){a.type&&a.type in m.hierarchyHandlers&&(F+=1,m.onLoadStart())});I=F;for(y in B.geometries)if(r=B.geometries[y],"cube"===r.type)p=new THREE.CubeGeometry(r.width,r.height,r.depth,r.widthSegments,r.heightSegments,r.depthSegments),p.name=y,A.geometries[y]=p;else if("plane"===r.type)p=new THREE.PlaneGeometry(r.width,
r.height,r.widthSegments,r.heightSegments),p.name=y,A.geometries[y]=p;else if("sphere"===r.type)p=new THREE.SphereGeometry(r.radius,r.widthSegments,r.heightSegments),p.name=y,A.geometries[y]=p;else if("cylinder"===r.type)p=new THREE.CylinderGeometry(r.topRad,r.botRad,r.height,r.radSegs,r.heightSegs),p.name=y,A.geometries[y]=p;else if("torus"===r.type)p=new THREE.TorusGeometry(r.radius,r.tube,r.segmentsR,r.segmentsT),p.name=y,A.geometries[y]=p;else if("icosahedron"===r.type)p=new THREE.IcosahedronGeometry(r.radius,
r.subdivisions),p.name=y,A.geometries[y]=p;else if(r.type in this.geometryHandlers){M={};for(s in r)"type"!==s&&"url"!==s&&(M[s]=r[s]);this.geometryHandlers[r.type].loaderObject.load(d(r.url,B.urlBaseType),h(y),M)}else"embedded"===r.type&&(M=B.embeds[r.id],M.metadata=B.metadata,M&&(M=this.geometryHandlers.ascii.loaderObject.parse(M,""),i(y)(M.geometry,M.materials)));for(var w in B.textures)if(y=B.textures[w],y.url instanceof Array){H+=y.url.length;for(s=0;s<y.url.length;s++)m.onLoadStart()}else H+=
1,m.onLoadStart();G=H;for(w in B.textures){y=B.textures[w];void 0!==y.mapping&&void 0!==THREE[y.mapping]&&(y.mapping=new THREE[y.mapping]);if(y.url instanceof Array){M=y.url.length;r=[];for(s=0;s<M;s++)r[s]=d(y.url[s],B.urlBaseType);s=(s=/\.dds$/i.test(r[0]))?THREE.ImageUtils.loadCompressedTextureCube(r,y.mapping,J(M)):THREE.ImageUtils.loadTextureCube(r,y.mapping,J(M))}else s=/\.dds$/i.test(y.url),M=d(y.url,B.urlBaseType),r=J(1),s=s?THREE.ImageUtils.loadCompressedTexture(M,y.mapping,r):THREE.ImageUtils.loadTexture(M,
y.mapping,r),void 0!==THREE[y.minFilter]&&(s.minFilter=THREE[y.minFilter]),void 0!==THREE[y.magFilter]&&(s.magFilter=THREE[y.magFilter]),y.anisotropy&&(s.anisotropy=y.anisotropy),y.repeat&&(s.repeat.set(y.repeat[0],y.repeat[1]),1!==y.repeat[0]&&(s.wrapS=THREE.RepeatWrapping),1!==y.repeat[1]&&(s.wrapT=THREE.RepeatWrapping)),y.offset&&s.offset.set(y.offset[0],y.offset[1]),y.wrap&&(M={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==M[y.wrap[0]]&&(s.wrapS=M[y.wrap[0]]),void 0!==
M[y.wrap[1]]&&(s.wrapT=M[y.wrap[1]]));A.textures[w]=s}var Z,L;for(Z in B.materials){w=B.materials[Z];for(L in w.parameters)"envMap"===L||"map"===L||"lightMap"===L||"bumpMap"===L?w.parameters[L]=A.textures[w.parameters[L]]:"shading"===L?w.parameters[L]="flat"===w.parameters[L]?THREE.FlatShading:THREE.SmoothShading:"side"===L?w.parameters[L]="double"==w.parameters[L]?THREE.DoubleSide:"back"==w.parameters[L]?THREE.BackSide:THREE.FrontSide:"blending"===L?w.parameters[L]=w.parameters[L]in THREE?THREE[w.parameters[L]]:
THREE.NormalBlending:"combine"===L?w.parameters[L]=w.parameters[L]in THREE?THREE[w.parameters[L]]:THREE.MultiplyOperation:"vertexColors"===L?"face"==w.parameters[L]?w.parameters[L]=THREE.FaceColors:w.parameters[L]&&(w.parameters[L]=THREE.VertexColors):"wrapRGB"===L&&(J=w.parameters[L],w.parameters[L]=new THREE.Vector3(J[0],J[1],J[2]));void 0!==w.parameters.opacity&&1>w.parameters.opacity&&(w.parameters.transparent=!0);w.parameters.normalMap?(J=THREE.ShaderLib.normalmap,y=THREE.UniformsUtils.clone(J.uniforms),
s=w.parameters.color,M=w.parameters.specular,r=w.parameters.ambient,N=w.parameters.shininess,y.tNormal.value=A.textures[w.parameters.normalMap],w.parameters.normalScale&&y.uNormalScale.value.set(w.parameters.normalScale[0],w.parameters.normalScale[1]),w.parameters.map&&(y.tDiffuse.value=w.parameters.map,y.enableDiffuse.value=!0),w.parameters.envMap&&(y.tCube.value=w.parameters.envMap,y.enableReflection.value=!0,y.uReflectivity.value=w.parameters.reflectivity),w.parameters.lightMap&&(y.tAO.value=w.parameters.lightMap,
y.enableAO.value=!0),w.parameters.specularMap&&(y.tSpecular.value=A.textures[w.parameters.specularMap],y.enableSpecular.value=!0),w.parameters.displacementMap&&(y.tDisplacement.value=A.textures[w.parameters.displacementMap],y.enableDisplacement.value=!0,y.uDisplacementBias.value=w.parameters.displacementBias,y.uDisplacementScale.value=w.parameters.displacementScale),y.uDiffuseColor.value.setHex(s),y.uSpecularColor.value.setHex(M),y.uAmbientColor.value.setHex(r),y.uShininess.value=N,w.parameters.opacity&&
(y.uOpacity.value=w.parameters.opacity),t=new THREE.ShaderMaterial({fragmentShader:J.fragmentShader,vertexShader:J.vertexShader,uniforms:y,lights:!0,fog:!0})):t=new THREE[w.type](w.parameters);t.name=Z;A.materials[Z]=t}for(Z in B.materials)if(w=B.materials[Z],w.parameters.materials){L=[];for(s=0;s<w.parameters.materials.length;s++)L.push(A.materials[w.parameters.materials[s]]);A.materials[Z].materials=L}e();A.cameras&&B.defaults.camera&&(A.currentCamera=A.cameras[B.defaults.camera]);A.fogs&&B.defaults.fog&&
(A.scene.fog=A.fogs[B.defaults.fog]);m.callbackSync(A);j()}};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b){var c=new THREE.ImageLoader(this.manager);c.setCrossOrigin(this.crossOrigin);c.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)})},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=
this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;
a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.metal=!1;this.perPixel=!0;this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;
this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.perPixel=this.perPixel;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){return new THREE.MeshFaceMaterial(this.materials.slice(0))};THREE.ParticleBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=!1;this.fog=!0;this.setValues(a)};THREE.ParticleBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ParticleBasicMaterial.prototype.clone=function(){var a=new THREE.ParticleBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(){};this.setValues(a)};THREE.ParticleCanvasMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ParticleCanvasMaterial.prototype.clone=function(){var a=new THREE.ParticleCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.vertexShader=this.fragmentShader="void main() {}";this.uniforms={};this.defines={};this.attributes=null;this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=new THREE.Texture;this.useScreenCoordinates=!0;this.depthTest=!this.useScreenCoordinates;this.sizeAttenuation=!this.useScreenCoordinates;this.scaleByViewport=!this.sizeAttenuation;this.alignment=THREE.SpriteAlignment.center.clone();this.fog=!1;this.uvOffset=new THREE.Vector2(0,0);this.uvScale=new THREE.Vector2(1,1);this.setValues(a);a=a||{};void 0===a.depthTest&&(this.depthTest=!this.useScreenCoordinates);
void 0===a.sizeAttenuation&&(this.sizeAttenuation=!this.useScreenCoordinates);void 0===a.scaleByViewport&&(this.scaleByViewport=!this.sizeAttenuation)};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.useScreenCoordinates=this.useScreenCoordinates;a.sizeAttenuation=this.sizeAttenuation;a.scaleByViewport=this.scaleByViewport;a.alignment.copy(this.alignment);a.uvOffset.copy(this.uvOffset);a.uvScale.copy(this.uvScale);a.fog=this.fog;return a};THREE.SpriteAlignment={};THREE.SpriteAlignment.topLeft=new THREE.Vector2(1,-1);
THREE.SpriteAlignment.topCenter=new THREE.Vector2(0,-1);THREE.SpriteAlignment.topRight=new THREE.Vector2(-1,-1);THREE.SpriteAlignment.centerLeft=new THREE.Vector2(1,0);THREE.SpriteAlignment.center=new THREE.Vector2(0,0);THREE.SpriteAlignment.centerRight=new THREE.Vector2(-1,0);THREE.SpriteAlignment.bottomLeft=new THREE.Vector2(1,1);THREE.SpriteAlignment.bottomCenter=new THREE.Vector2(0,1);THREE.SpriteAlignment.bottomRight=new THREE.Vector2(-1,1);THREE.Texture=function(a,b,c,d,e,f,h,g,i){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=a;this.mipmaps=[];this.mapping=void 0!==b?b:new THREE.UVMapping;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==i?i:1;this.format=void 0!==h?h:THREE.RGBAFormat;this.type=void 0!==g?g:THREE.UnsignedByteType;
this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.needsUpdate=!1;this.onUpdate=null};
THREE.Texture.prototype={constructor:THREE.Texture,clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=
this.unpackAlignment;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CompressedTexture=function(a,b,c,d,e,f,h,g,i,j,l){THREE.Texture.call(this,null,f,h,g,i,j,d,e,l);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,h,g,i,j,l){THREE.Texture.call(this,null,f,h,g,i,j,d,e,l);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.Particle=function(a){THREE.Object3D.call(this);this.material=a};THREE.Particle.prototype=Object.create(THREE.Object3D.prototype);THREE.Particle.prototype.clone=function(a){void 0===a&&(a=new THREE.Particle(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.ParticleBasicMaterial({color:16777215*Math.random()});this.frustumCulled=this.sortParticles=!1};THREE.ParticleSystem.prototype=Object.create(THREE.Object3D.prototype);
THREE.ParticleSystem.prototype.clone=function(a){void 0===a&&(a=new THREE.ParticleSystem(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};THREE.Mesh.prototype.clone=function(a){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);THREE.Bone.prototype.update=function(a,b){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiplyMatrices(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var c,d=this.children.length;for(c=0;c<d;c++)this.children[c].update(this.skinMatrix,b)};THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;this.bones=[];this.boneMatrices=[];var d,e,f;if(this.geometry&&void 0!==this.geometry.bones){for(a=0;a<this.geometry.bones.length;a++)c=this.geometry.bones[a],d=c.pos,e=c.rotq,f=c.scl,b=this.addBone(),b.name=c.name,b.position.set(d[0],d[1],d[2]),b.quaternion.set(e[0],e[1],e[2],e[3]),void 0!==f?b.scale.set(f[0],f[1],f[2]):b.scale.set(1,1,1);for(a=0;a<this.bones.length;a++)c=
this.geometry.bones[a],b=this.bones[a],-1===c.parent?this.add(b):this.bones[c.parent].add(b);a=this.bones.length;this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<a?64:64<a?32:16<a?16:8,this.boneMatrices=new Float32Array(4*this.boneTextureWidth*this.boneTextureHeight),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=
THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*a);this.pose()}};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.addBone=function(a){void 0===a&&(a=new THREE.Bone(this));this.bones.push(a);return a};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(){var a=new THREE.Matrix4;return function(b){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||b)this.parent?this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1;for(var b=0,c=this.children.length;b<c;b++){var d=this.children[b];d instanceof THREE.Bone?d.update(this.identityMatrix,!1):d.updateMatrixWorld(!0)}if(void 0==this.boneInverses){this.boneInverses=
[];b=0;for(c=this.bones.length;b<c;b++)d=new THREE.Matrix4,d.getInverse(this.bones[b].skinMatrix),this.boneInverses.push(d)}b=0;for(c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b].skinMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}();THREE.SkinnedMesh.prototype.pose=function(){this.updateMatrixWorld(!0);this.normalizeSkinWeights()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};
THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var h=a.morphTargets[e].name.match(d);if(h&&1<h.length){h=h[1];c[h]||(c[h]={start:Infinity,end:-Infinity});var g=c[h];e<g.start&&(g.start=e);e>g.end&&(g.end=e);b||(b=h)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=1E3*((c.end-c.start)/b),this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.Ribbon=function(a,b){THREE.Object3D.call(this);this.geometry=a;this.material=b};THREE.Ribbon.prototype=Object.create(THREE.Object3D.prototype);THREE.Ribbon.prototype.clone=function(a){void 0===a&&(a=new THREE.Ribbon(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);for(var b=Math.abs(b),c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.getPositionFromMatrix(c.matrixWorld);b.getPositionFromMatrix(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();THREE.LOD.prototype.clone=function(){};THREE.Sprite=function(a){THREE.Object3D.call(this);this.material=void 0!==a?a:new THREE.SpriteMaterial;this.rotation3d=this.rotation;this.rotation=0};THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);THREE.Sprite.prototype.updateMatrix=function(){this.rotation3d.set(0,0,this.rotation,this.rotation3d.order);this.quaternion.setFromEuler(this.rotation3d);this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};
THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__objects=[];this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)&&-1===this.__objects.indexOf(a)){this.__objects.push(a);this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1)}else a instanceof THREE.Camera||(b=this.__objects.indexOf(a),-1!==b&&(this.__objects.splice(b,1),this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1)));for(b=0;b<a.children.length;b++)this.__removeObject(a.children[b])};
THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};THREE.CanvasRenderer=function(a){function b(a,b,c){for(var d=0,e=I.length;d<e;d++){var f=I[d];Xb.copy(f.color);if(f instanceof THREE.DirectionalLight){var h=Wa.getPositionFromMatrix(f.matrixWorld).normalize(),g=b.dot(h);0>=g||(g*=f.intensity,c.add(Xb.multiplyScalar(g)))}else f instanceof THREE.PointLight&&(h=Wa.getPositionFromMatrix(f.matrixWorld),g=b.dot(Wa.subVectors(h,a).normalize()),0>=g||(g*=0==f.distance?1:1-Math.min(a.distanceTo(h)/f.distance,1),0!=g&&(g*=f.intensity,c.add(Xb.multiplyScalar(g)))))}}
function c(a,c,e,l,p,r,U,q){C.info.render.vertices+=3;C.info.render.faces++;m(q.opacity);n(q.blending);ya=a.positionScreen.x;Ha=a.positionScreen.y;fa=c.positionScreen.x;da=c.positionScreen.y;T=e.positionScreen.x;aa=e.positionScreen.y;d(ya,Ha,fa,da,T,aa);(q instanceof THREE.MeshLambertMaterial||q instanceof THREE.MeshPhongMaterial)&&null===q.map?(Qa.copy(q.color),Xa.copy(q.emissive),q.vertexColors===THREE.FaceColors&&Qa.multiply(U.color),!1===q.wireframe&&q.shading==THREE.SmoothShading&&3==U.vertexNormalsLength?
(ra.copy(ib),ja.copy(ib),ua.copy(ib),b(U.v1.positionWorld,U.vertexNormalsModel[0],ra),b(U.v2.positionWorld,U.vertexNormalsModel[1],ja),b(U.v3.positionWorld,U.vertexNormalsModel[2],ua),ra.multiply(Qa).add(Xa),ja.multiply(Qa).add(Xa),ua.multiply(Qa).add(Xa),Ra.addColors(ja,ua).multiplyScalar(0.5),lb=j(ra,ja,ua,Ra),i(ya,Ha,fa,da,T,aa,0,0,1,0,0,1,lb)):(ia.copy(ib),b(U.centroidModel,U.normalModel,ia),ia.multiply(Qa).add(Xa),!0===q.wireframe?f(ia,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):
h(ia))):q instanceof THREE.MeshBasicMaterial||q instanceof THREE.MeshLambertMaterial||q instanceof THREE.MeshPhongMaterial?null!==q.map?q.map.mapping instanceof THREE.UVMapping&&(Ga=U.uvs[0],g(ya,Ha,fa,da,T,aa,Ga[l].x,Ga[l].y,Ga[p].x,Ga[p].y,Ga[r].x,Ga[r].y,q.map)):null!==q.envMap?q.envMap.mapping instanceof THREE.SphericalReflectionMapping&&(Wa.copy(U.vertexNormalsModelView[l]),Ca=0.5*Wa.x+0.5,yb=0.5*Wa.y+0.5,Wa.copy(U.vertexNormalsModelView[p]),Ib=0.5*Wa.x+0.5,k=0.5*Wa.y+0.5,Wa.copy(U.vertexNormalsModelView[r]),
Rb=0.5*Wa.x+0.5,Yb=0.5*Wa.y+0.5,g(ya,Ha,fa,da,T,aa,Ca,yb,Ib,k,Rb,Yb,q.envMap)):(ia.copy(q.color),q.vertexColors===THREE.FaceColors&&ia.multiply(U.color),!0===q.wireframe?f(ia,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):h(ia)):q instanceof THREE.MeshDepthMaterial?(Sa=D.near,xb=D.far,ra.r=ra.g=ra.b=1-z(a.positionScreen.z*a.positionScreen.w,Sa,xb),ja.r=ja.g=ja.b=1-z(c.positionScreen.z*c.positionScreen.w,Sa,xb),ua.r=ua.g=ua.b=1-z(e.positionScreen.z*e.positionScreen.w,Sa,xb),Ra.addColors(ja,
ua).multiplyScalar(0.5),lb=j(ra,ja,ua,Ra),i(ya,Ha,fa,da,T,aa,0,0,1,0,0,1,lb)):q instanceof THREE.MeshNormalMaterial&&(q.shading==THREE.FlatShading?(a=U.normalModelView,ia.setRGB(a.x,a.y,a.z).multiplyScalar(0.5).addScalar(0.5),!0===q.wireframe?f(ia,q.wireframeLinewidth,q.wireframeLinecap,q.wireframeLinejoin):h(ia)):q.shading==THREE.SmoothShading&&(a=U.vertexNormalsModelView[l],ra.setRGB(a.x,a.y,a.z).multiplyScalar(0.5).addScalar(0.5),a=U.vertexNormalsModelView[p],ja.setRGB(a.x,a.y,a.z).multiplyScalar(0.5).addScalar(0.5),
a=U.vertexNormalsModelView[r],ua.setRGB(a.x,a.y,a.z).multiplyScalar(0.5).addScalar(0.5),Ra.addColors(ja,ua).multiplyScalar(0.5),lb=j(ra,ja,ua,Ra),i(ya,Ha,fa,da,T,aa,0,0,1,0,0,1,lb)))}function d(a,b,c,d,e,f){y.beginPath();y.moveTo(a,b);y.lineTo(c,d);y.lineTo(e,f);y.closePath()}function e(a,b,c,d,e,f,h,g){y.beginPath();y.moveTo(a,b);y.lineTo(c,d);y.lineTo(e,f);y.lineTo(h,g);y.closePath()}function f(a,b,c,d){p(b);t(c);q(d);r(a.getStyle());y.stroke();va.expandByScalar(2*b)}function h(a){s(a.getStyle());
y.fill()}function g(a,b,c,d,e,f,g,k,i,j,m,l,n){if(!(n instanceof THREE.DataTexture||void 0===n.image||0==n.image.width)){if(!0===n.needsUpdate){var p=n.wrapS==THREE.RepeatWrapping,q=n.wrapT==THREE.RepeatWrapping;Jb[n.id]=y.createPattern(n.image,!0===p&&!0===q?"repeat":!0===p&&!1===q?"repeat-x":!1===p&&!0===q?"repeat-y":"no-repeat");n.needsUpdate=!1}void 0===Jb[n.id]?s("rgba(0,0,0,1)"):s(Jb[n.id]);var p=n.offset.x/n.repeat.x,q=n.offset.y/n.repeat.y,r=n.image.width*n.repeat.x,t=n.image.height*n.repeat.y,
g=(g+p)*r,k=(1-k+q)*t,c=c-a,d=d-b,e=e-a,f=f-b,i=(i+p)*r-g,j=(1-j+q)*t-k,m=(m+p)*r-g,l=(1-l+q)*t-k,p=i*l-m*j;0===p?(void 0===Ab[n.id]&&(b=document.createElement("canvas"),b.width=n.image.width,b.height=n.image.height,b=b.getContext("2d"),b.drawImage(n.image,0,0),Ab[n.id]=b.getImageData(0,0,n.image.width,n.image.height).data),b=Ab[n.id],g=4*(Math.floor(g)+Math.floor(k)*n.image.width),ia.setRGB(b[g]/255,b[g+1]/255,b[g+2]/255),h(ia)):(p=1/p,n=(l*c-j*e)*p,j=(l*d-j*f)*p,c=(i*e-m*c)*p,d=(i*f-m*d)*p,a=a-
n*g-c*k,g=b-j*g-d*k,y.save(),y.transform(n,j,c,d,a,g),y.fill(),y.restore())}}function i(a,b,c,d,e,f,h,g,k,i,j,m,l){var n,p;n=l.width-1;p=l.height-1;h*=n;g*=p;c-=a;d-=b;e-=a;f-=b;k=k*n-h;i=i*p-g;j=j*n-h;m=m*p-g;p=1/(k*m-j*i);n=(m*c-i*e)*p;i=(m*d-i*f)*p;c=(k*e-j*c)*p;d=(k*f-j*d)*p;a=a-n*h-c*g;b=b-i*h-d*g;y.save();y.transform(n,i,c,d,a,b);y.clip();y.drawImage(l,0,0);y.restore()}function j(a,b,c,d){Ka[0]=255*a.r|0;Ka[1]=255*a.g|0;Ka[2]=255*a.b|0;Ka[4]=255*b.r|0;Ka[5]=255*b.g|0;Ka[6]=255*b.b|0;Ka[8]=255*
c.r|0;Ka[9]=255*c.g|0;Ka[10]=255*c.b|0;Ka[12]=255*d.r|0;Ka[13]=255*d.g|0;Ka[14]=255*d.b|0;Bb.putImageData(Kb,0,0);Lb.drawImage(Gb,0,0);return Sb}function l(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function m(a){Z!==a&&(Z=y.globalAlpha=a)}function n(a){L!==a&&(a===THREE.NormalBlending?y.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?y.globalCompositeOperation="lighter":a===THREE.SubtractiveBlending&&(y.globalCompositeOperation=
"darker"),L=a)}function p(a){Ua!==a&&(Ua=y.lineWidth=a)}function t(a){O!==a&&(O=y.lineCap=a)}function q(a){ka!==a&&(ka=y.lineJoin=a)}function r(a){pa!==a&&(pa=y.strokeStyle=a)}function s(a){Pa!==a&&(Pa=y.fillStyle=a)}function u(a,b){if(Fa!==a||wa!==b)y.setLineDash([a,b]),Fa=a,wa=b}console.log("THREE.CanvasRenderer",THREE.REVISION);var z=THREE.Math.smoothstep,a=a||{},C=this,F,H,I,G=new THREE.Projector,A=void 0!==a.canvas?a.canvas:document.createElement("canvas"),K,B,J,N,y=A.getContext("2d"),M=new THREE.Color(0),
w=0,Z=1,L=0,pa=null,Pa=null,Ua=null,O=null,ka=null,Fa=null,wa=0,D,V,ea,qa,eb,pb=new THREE.RenderableVertex,ub=new THREE.RenderableVertex,ya,Ha,fa,da,T,aa,na,ha,X,xa,ab,la,ia=new THREE.Color,ra=new THREE.Color,ja=new THREE.Color,ua=new THREE.Color,Ra=new THREE.Color,Qa=new THREE.Color,Xa=new THREE.Color,Xb=new THREE.Color,Jb={},Ab={},Sa,xb,lb,Ga,Ca,yb,Ib,k,Rb,Yb,fb=new THREE.Box2,oa=new THREE.Box2,va=new THREE.Box2,ib=new THREE.Color,Tb=new THREE.Color,Ub=new THREE.Color,Wa=new THREE.Vector3,Gb,Bb,
Kb,Ka,Sb,Lb,Hb=16;Gb=document.createElement("canvas");Gb.width=Gb.height=2;Bb=Gb.getContext("2d");Bb.fillStyle="rgba(0,0,0,1)";Bb.fillRect(0,0,2,2);Kb=Bb.getImageData(0,0,2,2);Ka=Kb.data;Sb=document.createElement("canvas");Sb.width=Sb.height=Hb;Lb=Sb.getContext("2d");Lb.translate(-Hb/2,-Hb/2);Lb.scale(Hb,Hb);Hb--;void 0===y.setLineDash&&(y.setLineDash=void 0!==y.mozDash?function(a){y.mozDash=null!==a[0]?a:null}:function(){});this.domElement=A;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:
void 0!==window.devicePixelRatio?window.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=function(a,b,c){K=a*this.devicePixelRatio;B=b*this.devicePixelRatio;J=Math.floor(K/2);N=Math.floor(B/2);A.width=K;A.height=B;1!==this.devicePixelRatio&&!1!==c&&(A.style.width=a+"px",A.style.height=b+"px");fb.set(new THREE.Vector2(-J,-N),new THREE.Vector2(J,N));oa.set(new THREE.Vector2(-J,
-N),new THREE.Vector2(J,N));Z=1;L=0;ka=O=Ua=Pa=pa=null};this.setClearColor=function(a,b){M.set(a);w=void 0!==b?b:1;oa.set(new THREE.Vector2(-J,-N),new THREE.Vector2(J,N))};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getMaxAnisotropy=function(){return 0};this.clear=function(){y.setTransform(1,0,0,-1,J,N);!1===oa.empty()&&(oa.intersect(fb),oa.expandByScalar(2),1>w&&y.clearRect(oa.min.x|
0,oa.min.y|0,oa.max.x-oa.min.x|0,oa.max.y-oa.min.y|0),0<w&&(n(THREE.NormalBlending),m(1),s("rgba("+Math.floor(255*M.r)+","+Math.floor(255*M.g)+","+Math.floor(255*M.b)+","+w+")"),y.fillRect(oa.min.x|0,oa.min.y|0,oa.max.x-oa.min.x|0,oa.max.y-oa.min.y|0)),oa.makeEmpty())};this.render=function(a,g){if(!1===g instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");else{!0===this.autoClear&&this.clear();y.setTransform(1,0,0,-1,J,N);C.info.render.vertices=
0;C.info.render.faces=0;F=G.projectScene(a,g,this.sortObjects,this.sortElements);H=F.elements;I=F.lights;D=g;ib.setRGB(0,0,0);Tb.setRGB(0,0,0);Ub.setRGB(0,0,0);for(var k=0,A=I.length;k<A;k++){var w=I[k],B=w.color;w instanceof THREE.AmbientLight?ib.add(B):w instanceof THREE.DirectionalLight?Tb.add(B):w instanceof THREE.PointLight&&Ub.add(B)}k=0;for(A=H.length;k<A;k++){var U=H[k],w=U.material;if(!(void 0===w||!1===w.visible)){va.makeEmpty();if(U instanceof THREE.RenderableParticle){V=U;V.x*=J;V.y*=
N;B=V;m(w.opacity);n(w.blending);var mb=void 0,nb=void 0,vb=void 0,zb=void 0,Zb=void 0,Jc=void 0,Kc=void 0;w instanceof THREE.ParticleBasicMaterial?null===w.map?(vb=U.object.scale.x,zb=U.object.scale.y,vb*=U.scale.x*J,zb*=U.scale.y*N,va.min.set(B.x-vb,B.y-zb),va.max.set(B.x+vb,B.y+zb),!1===fb.isIntersectionBox(va)?va.makeEmpty():(s(w.color.getStyle()),y.save(),y.translate(B.x,B.y),y.rotate(-U.rotation),y.scale(vb,zb),y.fillRect(-1,-1,2,2),y.restore())):(Zb=w.map.image,Jc=Zb.width>>1,Kc=Zb.height>>
1,vb=U.scale.x*J,zb=U.scale.y*N,mb=vb*Jc,nb=zb*Kc,va.min.set(B.x-mb,B.y-nb),va.max.set(B.x+mb,B.y+nb),!1===fb.isIntersectionBox(va)?va.makeEmpty():(y.save(),y.translate(B.x,B.y),y.rotate(-U.rotation),y.scale(vb,-zb),y.translate(-Jc,-Kc),y.drawImage(Zb,0,0),y.restore())):w instanceof THREE.ParticleCanvasMaterial&&(mb=U.scale.x*J,nb=U.scale.y*N,va.min.set(B.x-mb,B.y-nb),va.max.set(B.x+mb,B.y+nb),!1===fb.isIntersectionBox(va)?va.makeEmpty():(r(w.color.getStyle()),s(w.color.getStyle()),y.save(),y.translate(B.x,
B.y),y.rotate(-U.rotation),y.scale(mb,nb),w.program(y),y.restore()))}else if(U instanceof THREE.RenderableLine){if(V=U.v1,ea=U.v2,V.positionScreen.x*=J,V.positionScreen.y*=N,ea.positionScreen.x*=J,ea.positionScreen.y*=N,va.setFromPoints([V.positionScreen,ea.positionScreen]),!0===fb.isIntersectionBox(va))if(B=V,mb=ea,m(w.opacity),n(w.blending),y.beginPath(),y.moveTo(B.positionScreen.x,B.positionScreen.y),y.lineTo(mb.positionScreen.x,mb.positionScreen.y),w instanceof THREE.LineBasicMaterial){p(w.linewidth);
t(w.linecap);q(w.linejoin);if(w.vertexColors!==THREE.VertexColors)r(w.color.getStyle());else if(nb=U.vertexColors[0].getStyle(),U=U.vertexColors[1].getStyle(),nb===U)r(nb);else{try{var wc=y.createLinearGradient(B.positionScreen.x,B.positionScreen.y,mb.positionScreen.x,mb.positionScreen.y);wc.addColorStop(0,nb);wc.addColorStop(1,U)}catch(fd){wc=nb}r(wc)}y.stroke();va.expandByScalar(2*w.linewidth)}else w instanceof THREE.LineDashedMaterial&&(p(w.linewidth),t(w.linecap),q(w.linejoin),r(w.color.getStyle()),
u(w.dashSize,w.gapSize),y.stroke(),va.expandByScalar(2*w.linewidth),u(null,null))}else if(U instanceof THREE.RenderableFace3){V=U.v1;ea=U.v2;qa=U.v3;if(-1>V.positionScreen.z||1<V.positionScreen.z)continue;if(-1>ea.positionScreen.z||1<ea.positionScreen.z)continue;if(-1>qa.positionScreen.z||1<qa.positionScreen.z)continue;V.positionScreen.x*=J;V.positionScreen.y*=N;ea.positionScreen.x*=J;ea.positionScreen.y*=N;qa.positionScreen.x*=J;qa.positionScreen.y*=N;0<w.overdraw&&(l(V.positionScreen,ea.positionScreen,
w.overdraw),l(ea.positionScreen,qa.positionScreen,w.overdraw),l(qa.positionScreen,V.positionScreen,w.overdraw));va.setFromPoints([V.positionScreen,ea.positionScreen,qa.positionScreen]);!0===fb.isIntersectionBox(va)&&c(V,ea,qa,0,1,2,U,w)}else if(U instanceof THREE.RenderableFace4){V=U.v1;ea=U.v2;qa=U.v3;eb=U.v4;if(-1>V.positionScreen.z||1<V.positionScreen.z)continue;if(-1>ea.positionScreen.z||1<ea.positionScreen.z)continue;if(-1>qa.positionScreen.z||1<qa.positionScreen.z)continue;if(-1>eb.positionScreen.z||
1<eb.positionScreen.z)continue;V.positionScreen.x*=J;V.positionScreen.y*=N;ea.positionScreen.x*=J;ea.positionScreen.y*=N;qa.positionScreen.x*=J;qa.positionScreen.y*=N;eb.positionScreen.x*=J;eb.positionScreen.y*=N;pb.positionScreen.copy(ea.positionScreen);ub.positionScreen.copy(eb.positionScreen);0<w.overdraw&&(l(V.positionScreen,ea.positionScreen,w.overdraw),l(ea.positionScreen,eb.positionScreen,w.overdraw),l(eb.positionScreen,V.positionScreen,w.overdraw),l(qa.positionScreen,pb.positionScreen,w.overdraw),
l(qa.positionScreen,ub.positionScreen,w.overdraw));va.setFromPoints([V.positionScreen,ea.positionScreen,qa.positionScreen,eb.positionScreen]);!0===fb.isIntersectionBox(va)&&(B=V,mb=ea,nb=qa,vb=eb,zb=pb,Zb=ub,C.info.render.vertices+=4,C.info.render.faces++,m(w.opacity),n(w.blending),void 0!==w.map&&null!==w.map||void 0!==w.envMap&&null!==w.envMap?(c(B,mb,vb,0,1,3,U,w),c(zb,nb,Zb,1,2,3,U,w)):(ya=B.positionScreen.x,Ha=B.positionScreen.y,fa=mb.positionScreen.x,da=mb.positionScreen.y,T=nb.positionScreen.x,
aa=nb.positionScreen.y,na=vb.positionScreen.x,ha=vb.positionScreen.y,X=zb.positionScreen.x,xa=zb.positionScreen.y,ab=Zb.positionScreen.x,la=Zb.positionScreen.y,w instanceof THREE.MeshLambertMaterial||w instanceof THREE.MeshPhongMaterial?(Qa.copy(w.color),Xa.copy(w.emissive),w.vertexColors===THREE.FaceColors&&Qa.multiply(U.color),!1===w.wireframe&&w.shading==THREE.SmoothShading&&4==U.vertexNormalsLength?(ra.copy(ib),ja.copy(ib),ua.copy(ib),Ra.copy(ib),b(U.v1.positionWorld,U.vertexNormalsModel[0],ra),
b(U.v2.positionWorld,U.vertexNormalsModel[1],ja),b(U.v4.positionWorld,U.vertexNormalsModel[3],ua),b(U.v3.positionWorld,U.vertexNormalsModel[2],Ra),ra.multiply(Qa).add(Xa),ja.multiply(Qa).add(Xa),ua.multiply(Qa).add(Xa),Ra.multiply(Qa).add(Xa),lb=j(ra,ja,ua,Ra),d(ya,Ha,fa,da,na,ha),i(ya,Ha,fa,da,na,ha,0,0,1,0,0,1,lb),d(X,xa,T,aa,ab,la),i(X,xa,T,aa,ab,la,1,0,1,1,0,1,lb)):(ia.copy(ib),b(U.centroidModel,U.normalModel,ia),ia.multiply(Qa).add(Xa),e(ya,Ha,fa,da,T,aa,na,ha),!0===w.wireframe?f(ia,w.wireframeLinewidth,
w.wireframeLinecap,w.wireframeLinejoin):h(ia))):w instanceof THREE.MeshBasicMaterial?(ia.copy(w.color),w.vertexColors===THREE.FaceColors&&ia.multiply(U.color),e(ya,Ha,fa,da,T,aa,na,ha),!0===w.wireframe?f(ia,w.wireframeLinewidth,w.wireframeLinecap,w.wireframeLinejoin):h(ia)):w instanceof THREE.MeshNormalMaterial?(B=void 0,w.shading==THREE.FlatShading?(B=U.normalModelView,ia.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),e(ya,Ha,fa,da,T,aa,na,ha),!0===w.wireframe?f(ia,w.wireframeLinewidth,w.wireframeLinecap,
w.wireframeLinejoin):h(ia)):w.shading==THREE.SmoothShading&&(B=U.vertexNormalsModelView[0],ra.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=U.vertexNormalsModelView[1],ja.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=U.vertexNormalsModelView[3],ua.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),B=U.vertexNormalsModelView[2],Ra.setRGB(B.x,B.y,B.z).multiplyScalar(0.5).addScalar(0.5),lb=j(ra,ja,ua,Ra),d(ya,Ha,fa,da,na,ha),i(ya,Ha,fa,da,na,ha,0,0,1,0,0,1,lb),d(X,xa,T,aa,ab,
la),i(X,xa,T,aa,ab,la,1,0,1,1,0,1,lb))):w instanceof THREE.MeshDepthMaterial&&(Sa=D.near,xb=D.far,ra.r=ra.g=ra.b=1-z(B.positionScreen.z*B.positionScreen.w,Sa,xb),ja.r=ja.g=ja.b=1-z(mb.positionScreen.z*mb.positionScreen.w,Sa,xb),ua.r=ua.g=ua.b=1-z(vb.positionScreen.z*vb.positionScreen.w,Sa,xb),Ra.r=Ra.g=Ra.b=1-z(nb.positionScreen.z*nb.positionScreen.w,Sa,xb),lb=j(ra,ja,ua,Ra),d(ya,Ha,fa,da,na,ha),i(ya,Ha,fa,da,na,ha,0,0,1,0,0,1,lb),d(X,xa,T,aa,ab,la),i(X,xa,T,aa,ab,la,1,0,1,1,0,1,lb))))}oa.union(va)}}y.setTransform(1,
0,0,1,0,0)}}};THREE.ShaderChunk={fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",
envmap_pars_fragment:"#ifdef USE_ENVMAP\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform float flipEnvMap;\nuniform int combine;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nuniform bool useRefract;\nuniform float refractionRatio;\n#else\nvarying vec3 vReflect;\n#endif\n#endif",envmap_fragment:"#ifdef USE_ENVMAP\nvec3 reflectVec;\n#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nreflectVec = refract( cameraToVertex, normal, refractionRatio );\n} else { \nreflectVec = reflect( cameraToVertex, normal );\n}\n#else\nreflectVec = vReflect;\n#endif\n#ifdef DOUBLE_SIDED\nfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\nvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#else\nvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n#endif\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\nif ( combine == 1 ) {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n} else if ( combine == 2 ) {\ngl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n} else {\ngl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n}\n#endif",
envmap_pars_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n#ifdef USE_SKINNING\nvec4 worldPosition = modelMatrix * skinned;\n#endif\n#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n#endif\n#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n#endif\n#endif",
envmap_vertex:"#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\nvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\nworldNormal = normalize( worldNormal );\nvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, worldNormal );\n}\n#endif",map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n#endif",map_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif",map_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvarying vec2 vUv;\n#endif\n#ifdef USE_MAP\nuniform sampler2D map;\n#endif",
map_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",map_fragment:"#ifdef USE_MAP\nvec4 texelColor = texture2D( map, vUv );\n#ifdef GAMMA_INPUT\ntexelColor.xyz *= texelColor.xyz;\n#endif\ngl_FragColor = gl_FragColor * texelColor;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",
lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\nuniform sampler2D bumpMap;\nuniform float bumpScale;\nvec2 dHdxy_fwd() {\nvec2 dSTdx = dFdx( vUv );\nvec2 dSTdy = dFdy( vUv );\nfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\nfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\nfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\nreturn vec2( dBx, dBy );\n}\nvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\nvec3 vSigmaX = dFdx( surf_pos );\nvec3 vSigmaY = dFdy( surf_pos );\nvec3 vN = surf_norm;\nvec3 R1 = cross( vSigmaY, vN );\nvec3 R2 = cross( vN, vSigmaX );\nfloat fDet = dot( vSigmaX, R1 );\nvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\nreturn normalize( abs( fDet ) * surf_norm - vGrad );\n}\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\nuniform sampler2D normalMap;\nuniform vec2 normalScale;\nvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\nvec3 q0 = dFdx( eye_pos.xyz );\nvec3 q1 = dFdy( eye_pos.xyz );\nvec2 st0 = dFdx( vUv.st );\nvec2 st1 = dFdy( vUv.st );\nvec3 S = normalize(  q0 * st1.t - q1 * st0.t );\nvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\nvec3 N = normalize( surf_norm );\nvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\nmapN.xy = normalScale * mapN.xy;\nmat3 tsn = mat3( S, T, N );\nreturn normalize( tsn * mapN );\n}\n#endif",
specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\nuniform sampler2D specularMap;\n#endif",specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\nvec4 texelSpecular = texture2D( specularMap, vUv );\nspecularStrength = texelSpecular.r;\n#else\nspecularStrength = 1.0;\n#endif",lights_lambert_pars_vertex:"uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif",
lights_lambert_vertex:"vLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\nvLightBack = vec3( 0.0 );\n#endif\ntransformedNormal = normalize( transformedNormal );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, dirVector );\nvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\ndirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\ndirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n#ifdef DOUBLE_SIDED\nvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n#endif\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\npointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\npointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef DOUBLE_SIDED\nvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat dotProduct = dot( transformedNormal, lVector );\nvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n#ifdef DOUBLE_SIDED\nvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n#endif\n#endif\n#ifdef WRAP_AROUND\nvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\nspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n#ifdef DOUBLE_SIDED\nspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n#endif\n#endif\nvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n#ifdef DOUBLE_SIDED\nvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( transformedNormal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\nvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n#ifdef DOUBLE_SIDED\nvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n#endif\n}\n#endif\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n#ifdef DOUBLE_SIDED\nvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n#endif",
lights_phong_pars_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif",
lights_phong_vertex:"#ifndef PHONG_PER_PIXEL\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nvPointLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nvSpotLight[ i ] = vec4( lVector, lDistance );\n}\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvWorldPosition = worldPosition.xyz;\n#endif",
lights_phong_pars_fragment:"uniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#else\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n#ifdef PHONG_PER_PIXEL\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#else\nvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\n#endif\n#endif\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )\nvarying vec3 vWorldPosition;\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",
lights_phong_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#ifdef DOUBLE_SIDED\nnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n#endif\n#ifdef USE_NORMALMAP\nnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\nnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse  = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vPointLight[ i ].xyz );\nfloat lDistance = vPointLight[ i ].w;\n#endif\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n#endif\npointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\nvec3 pointHalfVector = normalize( lVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n#else\npointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse  = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n#ifdef PHONG_PER_PIXEL\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz + vViewPosition.xyz;\nfloat lDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\n#else\nvec3 lVector = normalize( vSpotLight[ i ].xyz );\nfloat lDistance = vSpotLight[ i ].w;\n#endif\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\nfloat dotProduct = dot( normal, lVector );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n#endif\nspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\nvec3 spotHalfVector = normalize( lVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse  = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, dirVector );\n#ifdef WRAP_AROUND\nfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\nfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n#endif\ndirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += diffuse * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\nvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n#endif",
color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n#ifdef GAMMA_INPUT\nvColor = color * color;\n#else\nvColor = color;\n#endif\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n#ifdef BONE_TEXTURE\nuniform sampler2D boneTexture;\nmat4 getBoneMatrix( const in float i ) {\nfloat j = i * 4.0;\nfloat x = mod( j, N_BONE_PIXEL_X );\nfloat y = floor( j / N_BONE_PIXEL_X );\nconst float dx = 1.0 / N_BONE_PIXEL_X;\nconst float dy = 1.0 / N_BONE_PIXEL_Y;\ny = dy * ( y + 0.5 );\nvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\nvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\nvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\nvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\nmat4 bone = mat4( v1, v2, v3, v4 );\nreturn bone;\n}\n#else\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\nmat4 getBoneMatrix( const in float i ) {\nmat4 bone = boneGlobalMatrices[ int(i) ];\nreturn bone;\n}\n#endif\n#endif",
skinbase_vertex:"#ifdef USE_SKINNING\nmat4 boneMatX = getBoneMatrix( skinIndex.x );\nmat4 boneMatY = getBoneMatrix( skinIndex.y );\n#endif",skinning_vertex:"#ifdef USE_SKINNING\n#ifdef USE_MORPHTARGETS\nvec4 skinVertex = vec4( morphed, 1.0 );\n#else\nvec4 skinVertex = vec4( position, 1.0 );\n#endif\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n#ifndef USE_MORPHNORMALS\nuniform float morphTargetInfluences[ 8 ];\n#else\nuniform float morphTargetInfluences[ 4 ];\n#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n#ifndef USE_MORPHNORMALS\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n#endif\nmorphed += position;\n#endif",
default_vertex:"vec4 mvPosition;\n#ifdef USE_SKINNING\nmvPosition = modelViewMatrix * skinned;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\nmvPosition = modelViewMatrix * vec4( position, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\nvec3 morphedNormal = vec3( 0.0 );\nmorphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\nmorphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\nmorphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\nmorphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\nmorphedNormal += normal;\n#endif",
skinnormal_vertex:"#ifdef USE_SKINNING\nmat4 skinMatrix = skinWeight.x * boneMatX;\nskinMatrix \t+= skinWeight.y * boneMatY;\n#ifdef USE_MORPHNORMALS\nvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n#else\nvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n#endif\n#endif",defaultnormal_vertex:"vec3 objectNormal;\n#ifdef USE_SKINNING\nobjectNormal = skinnedNormal.xyz;\n#endif\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\nobjectNormal = morphedNormal;\n#endif\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\nobjectNormal = normal;\n#endif\n#ifdef FLIP_SIDED\nobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;",
shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\nuniform sampler2D shadowMap[ MAX_SHADOWS ];\nuniform vec2 shadowMapSize[ MAX_SHADOWS ];\nuniform float shadowDarkness[ MAX_SHADOWS ];\nuniform float shadowBias[ MAX_SHADOWS ];\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nfloat unpackDepth( const in vec4 rgba_depth ) {\nconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\nfloat depth = dot( rgba_depth, bit_shift );\nreturn depth;\n}\n#endif",shadowmap_fragment:"#ifdef USE_SHADOWMAP\n#ifdef SHADOWMAP_DEBUG\nvec3 frustumColors[3];\nfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\nfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\nfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n#endif\n#ifdef SHADOWMAP_CASCADE\nint inFrustumCount = 0;\n#endif\nfloat fDepth;\nvec3 shadowColor = vec3( 1.0 );\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\nbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\nbool inFrustum = all( inFrustumVec );\n#ifdef SHADOWMAP_CASCADE\ninFrustumCount += int( inFrustum );\nbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n#else\nbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n#endif\nbool frustumTest = all( frustumTestVec );\nif ( frustumTest ) {\nshadowCoord.z += shadowBias[ i ];\n#if defined( SHADOWMAP_TYPE_PCF )\nfloat shadow = 0.0;\nconst float shadowDelta = 1.0 / 9.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.25 * xPixelOffset;\nfloat dy0 = -1.25 * yPixelOffset;\nfloat dx1 = 1.25 * xPixelOffset;\nfloat dy1 = 1.25 * yPixelOffset;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\nfloat shadow = 0.0;\nfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\nfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\nfloat dx0 = -1.0 * xPixelOffset;\nfloat dy0 = -1.0 * yPixelOffset;\nfloat dx1 = 1.0 * xPixelOffset;\nfloat dy1 = 1.0 * yPixelOffset;\nmat3 shadowKernel;\nmat3 depthKernel;\ndepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\ndepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\ndepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\ndepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\ndepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\ndepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\ndepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\ndepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\ndepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\nvec3 shadowZ = vec3( shadowCoord.z );\nshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\nshadowKernel[0] *= vec3(0.25);\nshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\nshadowKernel[1] *= vec3(0.25);\nshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\nshadowKernel[2] *= vec3(0.25);\nvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\nshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\nshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\nvec4 shadowValues;\nshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\nshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\nshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\nshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\nshadow = dot( shadowValues, vec4( 1.0 ) );\nshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n#else\nvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\nfloat fDepth = unpackDepth( rgbaDepth );\nif ( fDepth < shadowCoord.z )\nshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n#endif\n}\n#ifdef SHADOWMAP_DEBUG\n#ifdef SHADOWMAP_CASCADE\nif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n#else\nif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n#endif\n#endif\n}\n#ifdef GAMMA_OUTPUT\nshadowColor *= shadowColor;\n#endif\ngl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\nvarying vec4 vShadowCoord[ MAX_SHADOWS ];\nuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n#endif",shadowmap_vertex:"#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif",alphatest_fragment:"#ifdef ALPHATEST\nif ( gl_FragColor.a < ALPHATEST ) discard;\n#endif",linear_to_gamma_fragment:"#ifdef GAMMA_OUTPUT\ngl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n#endif"};
THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",value:0}},bump:{bumpMap:{type:"t",
value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},hemisphereLightSkyColor:{type:"fv",
value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",
value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,
THREE.ShaderChunk.skinbase_vertex,"#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,
THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",
THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,
THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\nvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,
THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"#ifdef DOUBLE_SIDED\nif ( gl_FrontFacing )\ngl_FragColor.xyz *= vLightFront;\nelse\ngl_FragColor.xyz *= vLightBack;\n#else\ngl_FragColor.xyz *= vLightFront;\n#endif",THREE.ShaderChunk.lightmap_fragment,
THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},specular:{type:"c",
value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"vNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"vViewPosition = -mvPosition.xyz;",THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,
THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3 ( 1.0 ), opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,
THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vLineDistance = scale * lineDistance;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\nif ( mod( vLineDistance, totalSize ) > dashSize ) {\ndiscard;\n}\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",
value:1}},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}"},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}"},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",
value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},uDiffuseColor:{type:"c",value:new THREE.Color(16777215)},uSpecularColor:{type:"c",value:new THREE.Color(1118481)},uAmbientColor:{type:"c",value:new THREE.Color(16777215)},uShininess:{type:"f",
value:30},uOpacity:{type:"f",value:1},useRefract:{type:"i",value:0},uRefractionRatio:{type:"f",value:0.98},uReflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform float uOpacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float uRefractionRatio;\nuniform float uReflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\nuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\nuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\nuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\nuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\nuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\nuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\nuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\nuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( vec3( 1.0 ), uOpacity );\nvec3 specularTex = vec3( 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse ) {\n#ifdef GAMMA_INPUT\nvec4 texelColor = texture2D( tDiffuse, vUv );\ntexelColor.xyz *= texelColor.xyz;\ngl_FragColor = gl_FragColor * texelColor;\n#else\ngl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n#endif\n}\nif( enableAO ) {\n#ifdef GAMMA_INPUT\nvec4 aoColor = texture2D( tAO, vUv );\naoColor.xyz *= aoColor.xyz;\ngl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n#endif\n}\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\nvec3 finalNormal = tsb * normalTex;\n#ifdef FLIP_SIDED\nfinalNormal = -finalNormal;\n#endif\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\n#if MAX_POINT_LIGHTS > 0\nvec3 pointDiffuse = vec3( 0.0 );\nvec3 pointSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\nfloat pointDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\npointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\npointVector = normalize( pointVector );\n#ifdef WRAP_AROUND\nfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\nfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\nvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n#else\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n#endif\npointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\nvec3 pointHalfVector = normalize( pointVector + viewPosition );\nfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\nfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\npointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n#else\npointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_SPOT_LIGHTS > 0\nvec3 spotDiffuse = vec3( 0.0 );\nvec3 spotSpecular = vec3( 0.0 );\nfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\nvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\nvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\nfloat spotDistance = 1.0;\nif ( spotLightDistance[ i ] > 0.0 )\nspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\nspotVector = normalize( spotVector );\nfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\nif ( spotEffect > spotLightAngleCos[ i ] ) {\nspotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );\n#ifdef WRAP_AROUND\nfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\nfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\nvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n#else\nfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n#endif\nspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\nvec3 spotHalfVector = normalize( spotVector + viewPosition );\nfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\nfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\nspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n#else\nspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\n#endif\n}\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec3 dirDiffuse = vec3( 0.0 );\nvec3 dirSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\n#ifdef WRAP_AROUND\nfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\nfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\nvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n#else\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n#endif\ndirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\nvec3 dirHalfVector = normalize( dirVector + viewPosition );\nfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\nfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\ndirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n#else\ndirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\n#endif\n}\n#endif\n#if MAX_HEMI_LIGHTS > 0\nvec3 hemiDiffuse  = vec3( 0.0 );\nvec3 hemiSpecular = vec3( 0.0 );\nfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\nvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\nvec3 lVector = normalize( lDirection.xyz );\nfloat dotProduct = dot( normal, lVector );\nfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\nvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\nhemiDiffuse += uDiffuseColor * hemiColor;\nvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\nfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\nfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\nvec3 lVectorGround = -lVector;\nvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\nfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\nfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\n#ifdef PHYSICALLY_BASED_SHADING\nfloat dotProductGround = dot( normal, lVectorGround );\nfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\nvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\nvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\nhemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n#else\nhemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\n#endif\n}\n#endif\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n#if MAX_DIR_LIGHTS > 0\ntotalDiffuse += dirDiffuse;\ntotalSpecular += dirSpecular;\n#endif\n#if MAX_HEMI_LIGHTS > 0\ntotalDiffuse += hemiDiffuse;\ntotalSpecular += hemiSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalDiffuse += pointDiffuse;\ntotalSpecular += pointSpecular;\n#endif\n#if MAX_SPOT_LIGHTS > 0\ntotalDiffuse += spotDiffuse;\ntotalSpecular += spotSpecular;\n#endif\n#ifdef METAL\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\n#else\ngl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\n#endif\nif ( enableReflection ) {\nvec3 vReflect;\nvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\nif ( useRefract ) {\nvReflect = refract( cameraToVertex, normal, uRefractionRatio );\n} else {\nvReflect = reflect( cameraToVertex, normal );\n}\nvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n#ifdef GAMMA_INPUT\ncubeColor.xyz *= cubeColor.xyz;\n#endif\ngl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\n}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"#ifdef USE_SKINNING\nvNormal = normalize( normalMatrix * skinnedNormal.xyz );\nvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\nvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n#else\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\n#endif\nvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\nvUv = uv * uRepeat + uOffset;\nvec3 displacedPosition;\n#ifdef VERTEX_TEXTURES\nif ( enableDisplacement ) {\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\ndisplacedPosition = position + normalize( normal ) * df;\n} else {\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n}\n#else\n#ifdef USE_SKINNING\nvec4 skinVertex = vec4( position, 1.0 );\nvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\nskinned \t  += boneMatY * skinVertex * skinWeight.y;\ndisplacedPosition  = skinned.xyz;\n#else\ndisplacedPosition = position;\n#endif\n#endif\nvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\nvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\nvWorldPosition = worldPosition.xyz;\nvViewPosition = -mvPosition.xyz;\n#ifdef USE_SHADOWMAP\nfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\nvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n}\n#endif\n}"].join("\n")},
cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:"varying vec3 vWorldPosition;\nvoid main() {\nvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\nvWorldPosition = worldPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\nvoid main() {\ngl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n}"},
depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n"),fragmentShader:"vec4 pack_depth( const in float depth ) {\nconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\nconst vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\nvec4 res = fract( depth * bit_shift );\nres -= res.xxyz * bit_mask;\nreturn res;\n}\nvoid main() {\ngl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n}"}};THREE.WebGLRenderer=function(a){function b(a){if(a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)k.deleteBuffer(a.__webglCustomAttributesList[b].buffer)}function c(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var h=1;"v2"===f.type?h=2:"v3"===f.type?h=3:"v4"===f.type?
h=4:"c"===f.type&&(h=3);f.size=h;f.array=new Float32Array(c*h);f.buffer=k.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}function d(a,b){var c=b.geometry,d=a.faces3,g=a.faces4,i=3*d.length+4*g.length,j=1*d.length+2*g.length,g=3*d.length+4*g.length,d=e(b,a),m=h(d),l=f(d),n=d.vertexColors?d.vertexColors:!1;a.__vertexArray=new Float32Array(3*i);l&&(a.__normalArray=new Float32Array(3*i));c.hasTangents&&(a.__tangentArray=new Float32Array(4*i));n&&
(a.__colorArray=new Float32Array(3*i));if(m){if(0<c.faceUvs.length||0<c.faceVertexUvs.length)a.__uvArray=new Float32Array(2*i);if(1<c.faceUvs.length||1<c.faceVertexUvs.length)a.__uv2Array=new Float32Array(2*i)}b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&(a.__skinIndexArray=new Float32Array(4*i),a.__skinWeightArray=new Float32Array(4*i));a.__faceArray=new Uint16Array(3*j);a.__lineArray=new Uint16Array(2*g);if(a.numMorphTargets){a.__morphTargetsArrays=[];c=0;for(m=a.numMorphTargets;c<
m;c++)a.__morphTargetsArrays.push(new Float32Array(3*i))}if(a.numMorphNormals){a.__morphNormalsArrays=[];c=0;for(m=a.numMorphNormals;c<m;c++)a.__morphNormalsArrays.push(new Float32Array(3*i))}a.__webglFaceCount=3*j;a.__webglLineCount=2*g;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var p in d.attributes){var j=d.attributes[p],c={},q;for(q in j)c[q]=j[q];if(!c.__webglInitialized||c.createUniqueBuffers)c.__webglInitialized=!0,g=1,"v2"===c.type?g=2:
"v3"===c.type?g=3:"v4"===c.type?g=4:"c"===c.type&&(g=3),c.size=g,c.array=new Float32Array(i*g),c.buffer=k.createBuffer(),c.buffer.belongsToAttribute=p,j.needsUpdate=!0,c.__original=j;a.__webglCustomAttributesList.push(c)}}a.__inittedArrays=!0}function e(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function f(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===
THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function h(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a instanceof THREE.ShaderMaterial?!0:!1}function g(a){Ab[a]||(k.enableVertexAttribArray(a),Ab[a]=!0)}function i(){for(var a in Ab)Ab[a]&&(k.disableVertexAttribArray(a),Ab[a]=!1)}function j(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function l(a,b){return b[0]-a[0]}function m(a,b,c){if(a.length)for(var d=0,e=a.length;d<e;d++)ya=qa=null,pb=ub=T=da=ab=xa=aa=-1,yb=!0,a[d].render(b,
c,Xb,Jb),ya=qa=null,pb=ub=T=da=ab=xa=aa=-1,yb=!0}function n(a,b,c,d,e,f,h,g){var k,i,j,m;b?(i=a.length-1,m=b=-1):(i=0,b=a.length,m=1);for(var l=i;l!==b;l+=m)if(k=a[l],k.render){i=k.object;j=k.buffer;if(g)k=g;else{k=k[c];if(!k)continue;h&&D.setBlending(k.blending,k.blendEquation,k.blendSrc,k.blendDst);D.setDepthTest(k.depthTest);D.setDepthWrite(k.depthWrite);K(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits)}D.setMaterialFaces(k);j instanceof THREE.BufferGeometry?D.renderBufferDirect(d,
e,f,k,j,i):D.renderBuffer(d,e,f,k,j,i)}}function p(a,b,c,d,e,f,h,g){for(var k,i,j=0,m=a.length;j<m;j++)if(k=a[j],i=k.object,i.visible&&(void 0==g||0!=(g&i.renderBitmask))){if(h)k=h;else{k=k[b];if(!k)continue;f&&D.setBlending(k.blending,k.blendEquation,k.blendSrc,k.blendDst);D.setDepthTest(k.depthTest);D.setDepthWrite(k.depthWrite);K(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits)}D.renderImmediateObject(c,d,e,k,i)}}function t(a,b){var e,f,h,g;if(void 0===a.__webglInit&&(a.__webglInit=
!0,a._modelViewMatrix=new THREE.Matrix4,a._normalMatrix=new THREE.Matrix3,void 0!==a.geometry&&void 0===a.geometry.__webglInit&&(a.geometry.__webglInit=!0,a.geometry.addEventListener("dispose",lc)),f=a.geometry,void 0!==f))if(f instanceof THREE.BufferGeometry){var i,j;for(i in f.attributes)j="index"===i?k.ELEMENT_ARRAY_BUFFER:k.ARRAY_BUFFER,g=f.attributes[i],void 0===g.numItems&&(g.numItems=g.array.length),g.buffer=k.createBuffer(),k.bindBuffer(j,g.buffer),k.bufferData(j,g.array,k.STATIC_DRAW)}else if(a instanceof
THREE.Mesh){h=a.material;if(void 0===f.geometryGroups){i=f;var m,l,n,p,r;j={};var s=i.morphTargets.length,t=i.morphNormals.length,u=h instanceof THREE.MeshFaceMaterial;i.geometryGroups={};h=0;for(m=i.faces.length;h<m;h++)l=i.faces[h],n=u?l.materialIndex:0,void 0===j[n]&&(j[n]={hash:n,counter:0}),r=j[n].hash+"_"+j[n].counter,void 0===i.geometryGroups[r]&&(i.geometryGroups[r]={faces3:[],faces4:[],materialIndex:n,vertices:0,numMorphTargets:s,numMorphNormals:t}),p=l instanceof THREE.Face3?3:4,65535<i.geometryGroups[r].vertices+
p&&(j[n].counter+=1,r=j[n].hash+"_"+j[n].counter,void 0===i.geometryGroups[r]&&(i.geometryGroups[r]={faces3:[],faces4:[],materialIndex:n,vertices:0,numMorphTargets:s,numMorphNormals:t})),l instanceof THREE.Face3?i.geometryGroups[r].faces3.push(h):i.geometryGroups[r].faces4.push(h),i.geometryGroups[r].vertices+=p;i.geometryGroupsList=[];for(g in i.geometryGroups)i.geometryGroups[g].id=Ha++,i.geometryGroupsList.push(i.geometryGroups[g])}for(e in f.geometryGroups)if(g=f.geometryGroups[e],!g.__webglVertexBuffer){i=
g;i.__webglVertexBuffer=k.createBuffer();i.__webglNormalBuffer=k.createBuffer();i.__webglTangentBuffer=k.createBuffer();i.__webglColorBuffer=k.createBuffer();i.__webglUVBuffer=k.createBuffer();i.__webglUV2Buffer=k.createBuffer();i.__webglSkinIndicesBuffer=k.createBuffer();i.__webglSkinWeightsBuffer=k.createBuffer();i.__webglFaceBuffer=k.createBuffer();i.__webglLineBuffer=k.createBuffer();s=j=void 0;if(i.numMorphTargets){i.__webglMorphTargetsBuffers=[];j=0;for(s=i.numMorphTargets;j<s;j++)i.__webglMorphTargetsBuffers.push(k.createBuffer())}if(i.numMorphNormals){i.__webglMorphNormalsBuffers=
[];j=0;for(s=i.numMorphNormals;j<s;j++)i.__webglMorphNormalsBuffers.push(k.createBuffer())}D.info.memory.geometries++;d(g,a);f.verticesNeedUpdate=!0;f.morphTargetsNeedUpdate=!0;f.elementsNeedUpdate=!0;f.uvsNeedUpdate=!0;f.normalsNeedUpdate=!0;f.tangentsNeedUpdate=!0;f.colorsNeedUpdate=!0}}else a instanceof THREE.Ribbon?f.__webglVertexBuffer||(g=f,g.__webglVertexBuffer=k.createBuffer(),g.__webglColorBuffer=k.createBuffer(),g.__webglNormalBuffer=k.createBuffer(),D.info.memory.geometries++,g=f,i=g.vertices.length,
g.__vertexArray=new Float32Array(3*i),g.__colorArray=new Float32Array(3*i),g.__normalArray=new Float32Array(3*i),g.__webglVertexCount=i,c(g,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0,f.normalsNeedUpdate=!0):a instanceof THREE.Line?f.__webglVertexBuffer||(g=f,g.__webglVertexBuffer=k.createBuffer(),g.__webglColorBuffer=k.createBuffer(),g.__webglLineDistanceBuffer=k.createBuffer(),D.info.memory.geometries++,g=f,i=g.vertices.length,g.__vertexArray=new Float32Array(3*i),g.__colorArray=new Float32Array(3*
i),g.__lineDistanceArray=new Float32Array(1*i),g.__webglLineCount=i,c(g,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=!0,f.lineDistancesNeedUpdate=!0):a instanceof THREE.ParticleSystem&&!f.__webglVertexBuffer&&(g=f,g.__webglVertexBuffer=k.createBuffer(),g.__webglColorBuffer=k.createBuffer(),D.info.memory.geometries++,g=f,i=g.vertices.length,g.__vertexArray=new Float32Array(3*i),g.__colorArray=new Float32Array(3*i),g.__sortArray=[],g.__webglParticleCount=i,c(g,a),f.verticesNeedUpdate=!0,f.colorsNeedUpdate=
!0);if(void 0===a.__webglActive){if(a instanceof THREE.Mesh)if(f=a.geometry,f instanceof THREE.BufferGeometry)q(b.__webglObjects,f,a);else{if(f instanceof THREE.Geometry)for(e in f.geometryGroups)g=f.geometryGroups[e],q(b.__webglObjects,g,a)}else a instanceof THREE.Ribbon||a instanceof THREE.Line||a instanceof THREE.ParticleSystem?(f=a.geometry,q(b.__webglObjects,f,a)):a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback?b.__webglObjectsImmediate.push({id:null,object:a,opaque:null,
transparent:null,z:0}):a instanceof THREE.Sprite?b.__webglSprites.push(a):a instanceof THREE.LensFlare&&b.__webglFlares.push(a);a.__webglActive=!0}}function q(a,b,c){a.push({id:null,buffer:b,object:c,opaque:null,transparent:null,z:0})}function r(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function s(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function u(a,b){a instanceof THREE.Mesh||a instanceof THREE.ParticleSystem||a instanceof THREE.Ribbon||a instanceof
THREE.Line?z(b.__webglObjects,a):a instanceof THREE.Sprite?C(b.__webglSprites,a):a instanceof THREE.LensFlare?C(b.__webglFlares,a):(a instanceof THREE.ImmediateRenderObject||a.immediateRenderCallback)&&z(b.__webglObjectsImmediate,a);delete a.__webglActive}function z(a,b){for(var c=a.length-1;0<=c;c--)a[c].object===b&&a.splice(c,1)}function C(a,b){for(var c=a.length-1;0<=c;c--)a[c]===b&&a.splice(c,1)}function F(a,b,c,d,e){fa=0;d.needsUpdate&&(d.program&&vc(d),D.initMaterial(d,b,c,e),d.needsUpdate=
!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(D.maxMorphTargets));var f=!1,g=d.program,h=g.uniforms,i=d.uniforms;g!==qa&&(k.useProgram(g),qa=g,f=!0);d.id!==pb&&(pb=d.id,f=!0);if(f||a!==ya)k.uniformMatrix4fv(h.projectionMatrix,!1,a.projectionMatrix.elements),a!==ya&&(ya=a);if(d.skinning)if(Bb&&e.useVertexTexture){if(null!==h.boneTexture){var j=H();k.uniform1i(h.boneTexture,j);D.setTexture(e.boneTexture,j)}}else null!==h.boneGlobalMatrices&&k.uniformMatrix4fv(h.boneGlobalMatrices,
!1,e.boneMatrices);if(f){c&&d.fog&&(i.fogColor.value=c.color,c instanceof THREE.Fog?(i.fogNear.value=c.near,i.fogFar.value=c.far):c instanceof THREE.FogExp2&&(i.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d.lights){if(yb){for(var m,l=j=0,n=0,p,q,r,s=Ib,t=s.directional.colors,u=s.directional.positions,z=s.point.colors,y=s.point.positions,A=s.point.distances,B=s.spot.colors,F=s.spot.positions,C=s.spot.distances,E=s.spot.directions,J=
s.spot.anglesCos,L=s.spot.exponents,V=s.hemi.skyColors,K=s.hemi.groundColors,M=s.hemi.positions,O=0,ea=0,T=0,aa=0,da=0,R=0,S=0,P=0,ba=m=0,c=r=ba=0,f=b.length;c<f;c++)m=b[c],m.onlyShadow||(p=m.color,q=m.intensity,r=m.distance,m instanceof THREE.AmbientLight?m.visible&&(D.gammaInput?(j+=p.r*p.r,l+=p.g*p.g,n+=p.b*p.b):(j+=p.r,l+=p.g,n+=p.b)):m instanceof THREE.DirectionalLight?(da+=1,m.visible&&(Ca.getPositionFromMatrix(m.matrixWorld),Ga.getPositionFromMatrix(m.target.matrixWorld),Ca.sub(Ga),Ca.normalize(),
0===Ca.x&&0===Ca.y&&0===Ca.z||(m=3*O,u[m]=Ca.x,u[m+1]=Ca.y,u[m+2]=Ca.z,D.gammaInput?I(t,m,p,q*q):G(t,m,p,q),O+=1))):m instanceof THREE.PointLight?(R+=1,m.visible&&(ba=3*ea,D.gammaInput?I(z,ba,p,q*q):G(z,ba,p,q),Ga.getPositionFromMatrix(m.matrixWorld),y[ba]=Ga.x,y[ba+1]=Ga.y,y[ba+2]=Ga.z,A[ea]=r,ea+=1)):m instanceof THREE.SpotLight?(S+=1,m.visible&&(ba=3*T,D.gammaInput?I(B,ba,p,q*q):G(B,ba,p,q),Ga.getPositionFromMatrix(m.matrixWorld),F[ba]=Ga.x,F[ba+1]=Ga.y,F[ba+2]=Ga.z,C[T]=r,Ca.copy(Ga),Ga.getPositionFromMatrix(m.target.matrixWorld),
Ca.sub(Ga),Ca.normalize(),E[ba]=Ca.x,E[ba+1]=Ca.y,E[ba+2]=Ca.z,J[T]=Math.cos(m.angle),L[T]=m.exponent,T+=1)):m instanceof THREE.HemisphereLight&&(P+=1,m.visible&&(Ca.getPositionFromMatrix(m.matrixWorld),Ca.normalize(),0===Ca.x&&0===Ca.y&&0===Ca.z||(r=3*aa,M[r]=Ca.x,M[r+1]=Ca.y,M[r+2]=Ca.z,p=m.color,m=m.groundColor,D.gammaInput?(q*=q,I(V,r,p,q),I(K,r,m,q)):(G(V,r,p,q),G(K,r,m,q)),aa+=1))));c=3*O;for(f=Math.max(t.length,3*da);c<f;c++)t[c]=0;c=3*ea;for(f=Math.max(z.length,3*R);c<f;c++)z[c]=0;c=3*T;for(f=
Math.max(B.length,3*S);c<f;c++)B[c]=0;c=3*aa;for(f=Math.max(V.length,3*P);c<f;c++)V[c]=0;c=3*aa;for(f=Math.max(K.length,3*P);c<f;c++)K[c]=0;s.directional.length=O;s.point.length=ea;s.spot.length=T;s.hemi.length=aa;s.ambient[0]=j;s.ambient[1]=l;s.ambient[2]=n;yb=!1}c=Ib;i.ambientLightColor.value=c.ambient;i.directionalLightColor.value=c.directional.colors;i.directionalLightDirection.value=c.directional.positions;i.pointLightColor.value=c.point.colors;i.pointLightPosition.value=c.point.positions;i.pointLightDistance.value=
c.point.distances;i.spotLightColor.value=c.spot.colors;i.spotLightPosition.value=c.spot.positions;i.spotLightDistance.value=c.spot.distances;i.spotLightDirection.value=c.spot.directions;i.spotLightAngleCos.value=c.spot.anglesCos;i.spotLightExponent.value=c.spot.exponents;i.hemisphereLightSkyColor.value=c.hemi.skyColors;i.hemisphereLightGroundColor.value=c.hemi.groundColors;i.hemisphereLightDirection.value=c.hemi.positions}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||
d instanceof THREE.MeshPhongMaterial){i.opacity.value=d.opacity;D.gammaInput?i.diffuse.value.copyGammaToLinear(d.color):i.diffuse.value=d.color;i.map.value=d.map;i.lightMap.value=d.lightMap;i.specularMap.value=d.specularMap;d.bumpMap&&(i.bumpMap.value=d.bumpMap,i.bumpScale.value=d.bumpScale);d.normalMap&&(i.normalMap.value=d.normalMap,i.normalScale.value.copy(d.normalScale));var X;d.map?X=d.map:d.specularMap?X=d.specularMap:d.normalMap?X=d.normalMap:d.bumpMap&&(X=d.bumpMap);void 0!==X&&(c=X.offset,
X=X.repeat,i.offsetRepeat.value.set(c.x,c.y,X.x,X.y));i.envMap.value=d.envMap;i.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;i.reflectivity.value=d.reflectivity;i.refractionRatio.value=d.refractionRatio;i.combine.value=d.combine;i.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(i.diffuse.value=d.color,i.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(i.diffuse.value=d.color,i.opacity.value=
d.opacity,i.dashSize.value=d.dashSize,i.totalSize.value=d.dashSize+d.gapSize,i.scale.value=d.scale):d instanceof THREE.ParticleBasicMaterial?(i.psColor.value=d.color,i.opacity.value=d.opacity,i.size.value=d.size,i.scale.value=Z.height/2,i.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(i.shininess.value=d.shininess,D.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive),i.specular.value.copyGammaToLinear(d.specular)):(i.ambient.value=d.ambient,
i.emissive.value=d.emissive,i.specular.value=d.specular),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(D.gammaInput?(i.ambient.value.copyGammaToLinear(d.ambient),i.emissive.value.copyGammaToLinear(d.emissive)):(i.ambient.value=d.ambient,i.emissive.value=d.emissive),d.wrapAround&&i.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(i.mNear.value=a.near,i.mFar.value=a.far,i.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(i.opacity.value=
d.opacity);if(e.receiveShadow&&!d._shadowPass&&i.shadowMatrix){c=X=0;for(f=b.length;c<f;c++)if(j=b[c],j.castShadow&&(j instanceof THREE.SpotLight||j instanceof THREE.DirectionalLight&&!j.shadowCascade))i.shadowMap.value[X]=j.shadowMap,i.shadowMapSize.value[X]=j.shadowMapSize,i.shadowMatrix.value[X]=j.shadowMatrix,i.shadowDarkness.value[X]=j.shadowDarkness,i.shadowBias.value[X]=j.shadowBias,X++}b=d.uniformsList;i=0;for(X=b.length;i<X;i++)if(f=g.uniforms[b[i][1]])if(c=b[i][0],l=c.type,j=c.value,"i"===
l)k.uniform1i(f,j);else if("f"===l)k.uniform1f(f,j);else if("v2"===l)k.uniform2f(f,j.x,j.y);else if("v3"===l)k.uniform3f(f,j.x,j.y,j.z);else if("v4"===l)k.uniform4f(f,j.x,j.y,j.z,j.w);else if("c"===l)k.uniform3f(f,j.r,j.g,j.b);else if("iv1"===l)k.uniform1iv(f,j);else if("iv"===l)k.uniform3iv(f,j);else if("fv1"===l)k.uniform1fv(f,j);else if("fv"===l)k.uniform3fv(f,j);else if("v2v"===l){void 0===c._array&&(c._array=new Float32Array(2*j.length));l=0;for(n=j.length;l<n;l++)s=2*l,c._array[s]=j[l].x,c._array[s+
1]=j[l].y;k.uniform2fv(f,c._array)}else if("v3v"===l){void 0===c._array&&(c._array=new Float32Array(3*j.length));l=0;for(n=j.length;l<n;l++)s=3*l,c._array[s]=j[l].x,c._array[s+1]=j[l].y,c._array[s+2]=j[l].z;k.uniform3fv(f,c._array)}else if("v4v"===l){void 0===c._array&&(c._array=new Float32Array(4*j.length));l=0;for(n=j.length;l<n;l++)s=4*l,c._array[s]=j[l].x,c._array[s+1]=j[l].y,c._array[s+2]=j[l].z,c._array[s+3]=j[l].w;k.uniform4fv(f,c._array)}else if("m4"===l)void 0===c._array&&(c._array=new Float32Array(16)),
j.flattenToArray(c._array),k.uniformMatrix4fv(f,!1,c._array);else if("m4v"===l){void 0===c._array&&(c._array=new Float32Array(16*j.length));l=0;for(n=j.length;l<n;l++)j[l].flattenToArrayOffset(c._array,16*l);k.uniformMatrix4fv(f,!1,c._array)}else if("t"===l){if(s=j,j=H(),k.uniform1i(f,j),s)if(s.image instanceof Array&&6===s.image.length){if(c=s,f=j,6===c.image.length)if(c.needsUpdate){c.image.__webglTextureCube||(c.addEventListener("dispose",gc),c.image.__webglTextureCube=k.createTexture(),D.info.memory.textures++);
k.activeTexture(k.TEXTURE0+f);k.bindTexture(k.TEXTURE_CUBE_MAP,c.image.__webglTextureCube);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,c.flipY);f=c instanceof THREE.CompressedTexture;j=[];for(l=0;6>l;l++)D.autoScaleCubemaps&&!f?(n=j,s=l,t=c.image[l],z=Ub,t.width<=z&&t.height<=z||(y=Math.max(t.width,t.height),u=Math.floor(t.width*z/y),z=Math.floor(t.height*z/y),y=document.createElement("canvas"),y.width=u,y.height=z,y.getContext("2d").drawImage(t,0,0,t.width,t.height,0,0,u,z),t=y),n[s]=t):j[l]=c.image[l];
l=j[0];n=0===(l.width&l.width-1)&&0===(l.height&l.height-1);s=w(c.format);t=w(c.type);N(k.TEXTURE_CUBE_MAP,c,n);for(l=0;6>l;l++)if(f){z=j[l].mipmaps;y=0;for(A=z.length;y<A;y++)u=z[y],k.compressedTexImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+l,y,s,u.width,u.height,0,u.data)}else k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+l,0,s,s,t,j[l]);c.generateMipmaps&&n&&k.generateMipmap(k.TEXTURE_CUBE_MAP);c.needsUpdate=!1;if(c.onUpdate)c.onUpdate()}else k.activeTexture(k.TEXTURE0+f),k.bindTexture(k.TEXTURE_CUBE_MAP,
c.image.__webglTextureCube)}else s instanceof THREE.WebGLRenderTargetCube?(c=s,k.activeTexture(k.TEXTURE0+j),k.bindTexture(k.TEXTURE_CUBE_MAP,c.__webglTexture)):D.setTexture(s,j)}else if("tv"===l){void 0===c._array&&(c._array=[]);l=0;for(n=c.value.length;l<n;l++)c._array[l]=H();k.uniform1iv(f,c._array);l=0;for(n=c.value.length;l<n;l++)s=c.value[l],j=c._array[l],s&&D.setTexture(s,j)}else console.warn("THREE.WebGLRenderer: Unknown uniform type: "+l);if((d instanceof THREE.ShaderMaterial||d instanceof
THREE.MeshPhongMaterial||d.envMap)&&null!==h.cameraPosition)Ga.getPositionFromMatrix(a.matrixWorld),k.uniform3f(h.cameraPosition,Ga.x,Ga.y,Ga.z);(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.ShaderMaterial||d.skinning)&&null!==h.viewMatrix&&k.uniformMatrix4fv(h.viewMatrix,!1,a.matrixWorldInverse.elements)}k.uniformMatrix4fv(h.modelViewMatrix,!1,e._modelViewMatrix.elements);h.normalMatrix&&k.uniformMatrix3fv(h.normalMatrix,!1,e._normalMatrix.elements);
null!==h.modelMatrix&&k.uniformMatrix4fv(h.modelMatrix,!1,e.matrixWorld.elements);return g}function H(){var a=fa;a>=ib&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+ib);fa+=1;return a}function I(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function G(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function A(a){a!==ja&&(k.lineWidth(a),ja=a)}function K(a,b,c){la!==a&&(a?k.enable(k.POLYGON_OFFSET_FILL):k.disable(k.POLYGON_OFFSET_FILL),la=a);
if(a&&(ia!==b||ra!==c))k.polygonOffset(b,c),ia=b,ra=c}function B(a){for(var a=a.split("\n"),b=0,c=a.length;b<c;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function J(a,b){var c;"fragment"===a?c=k.createShader(k.FRAGMENT_SHADER):"vertex"===a&&(c=k.createShader(k.VERTEX_SHADER));k.shaderSource(c,b);k.compileShader(c);return!k.getShaderParameter(c,k.COMPILE_STATUS)?(console.error(k.getShaderInfoLog(c)),console.error(B(b)),null):c}function N(a,b,c){c?(k.texParameteri(a,k.TEXTURE_WRAP_S,w(b.wrapS)),k.texParameteri(a,
k.TEXTURE_WRAP_T,w(b.wrapT)),k.texParameteri(a,k.TEXTURE_MAG_FILTER,w(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,w(b.minFilter))):(k.texParameteri(a,k.TEXTURE_WRAP_S,k.CLAMP_TO_EDGE),k.texParameteri(a,k.TEXTURE_WRAP_T,k.CLAMP_TO_EDGE),k.texParameteri(a,k.TEXTURE_MAG_FILTER,M(b.magFilter)),k.texParameteri(a,k.TEXTURE_MIN_FILTER,M(b.minFilter)));if(fb&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy))k.texParameterf(a,fb.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Wa)),b.__oldAnisotropy=
b.anisotropy}function y(a,b){k.bindRenderbuffer(k.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_COMPONENT16,b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_ATTACHMENT,k.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(k.renderbufferStorage(k.RENDERBUFFER,k.DEPTH_STENCIL,b.width,b.height),k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_STENCIL_ATTACHMENT,k.RENDERBUFFER,a)):k.renderbufferStorage(k.RENDERBUFFER,k.RGBA4,b.width,b.height)}
function M(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?k.NEAREST:k.LINEAR}function w(a){if(a===THREE.RepeatWrapping)return k.REPEAT;if(a===THREE.ClampToEdgeWrapping)return k.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return k.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return k.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return k.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return k.NEAREST_MIPMAP_LINEAR;if(a===
THREE.LinearFilter)return k.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return k.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return k.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return k.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return k.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return k.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return k.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return k.BYTE;if(a===THREE.ShortType)return k.SHORT;if(a===
THREE.UnsignedShortType)return k.UNSIGNED_SHORT;if(a===THREE.IntType)return k.INT;if(a===THREE.UnsignedIntType)return k.UNSIGNED_INT;if(a===THREE.FloatType)return k.FLOAT;if(a===THREE.AlphaFormat)return k.ALPHA;if(a===THREE.RGBFormat)return k.RGB;if(a===THREE.RGBAFormat)return k.RGBA;if(a===THREE.LuminanceFormat)return k.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return k.LUMINANCE_ALPHA;if(a===THREE.AddEquation)return k.FUNC_ADD;if(a===THREE.SubtractEquation)return k.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return k.FUNC_REVERSE_SUBTRACT;
if(a===THREE.ZeroFactor)return k.ZERO;if(a===THREE.OneFactor)return k.ONE;if(a===THREE.SrcColorFactor)return k.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return k.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return k.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return k.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return k.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return k.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return k.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return k.ONE_MINUS_DST_COLOR;
if(a===THREE.SrcAlphaSaturateFactor)return k.SRC_ALPHA_SATURATE;if(void 0!==oa){if(a===THREE.RGB_S3TC_DXT1_Format)return oa.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return oa.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return oa.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return oa.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}console.log("THREE.WebGLRenderer",THREE.REVISION);var a=a||{},Z=void 0!==a.canvas?a.canvas:document.createElement("canvas"),
L=void 0!==a.precision?a.precision:"highp",pa=void 0!==a.alpha?a.alpha:!0,Pa=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,Ua=void 0!==a.antialias?a.antialias:!1,O=void 0!==a.stencil?a.stencil:!0,ka=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Fa=new THREE.Color(0),wa=0;void 0!==a.clearColor&&(console.warn("DEPRECATED: clearColor in WebGLRenderer constructor parameters is being removed. Use .setClearColor() instead."),Fa.setHex(a.clearColor));void 0!==a.clearAlpha&&(console.warn("DEPRECATED: clearAlpha in WebGLRenderer constructor parameters is being removed. Use .setClearColor() instead."),
wa=a.clearAlpha);this.domElement=Z;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==window.devicePixelRatio?window.devicePixelRatio:1;this.autoUpdateObjects=this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.physicallyBasedShading=this.gammaOutput=this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=
this.shadowMapDebug=!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var D=this,V=[],ea=0,qa=null,eb=null,pb=-1,ub=null,ya=null,Ha=0,fa=0,da=-1,T=-1,aa=-1,na=-1,ha=-1,X=-1,xa=-1,ab=-1,la=null,ia=null,ra=null,ja=null,ua=0,Ra=0,Qa=0,Xa=0,Xb=0,Jb=0,Ab={},Sa=new THREE.Frustum,xb=new THREE.Matrix4,lb=new THREE.Matrix4,Ga=new THREE.Vector3,
Ca=new THREE.Vector3,yb=!0,Ib={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},k,Rb,Yb,fb,oa;try{if(!(k=Z.getContext("experimental-webgl",{alpha:pa,premultipliedAlpha:Pa,antialias:Ua,stencil:O,preserveDrawingBuffer:ka})))throw"Error creating WebGL context.";}catch(va){console.error(va)}Rb=
k.getExtension("OES_texture_float");k.getExtension("OES_texture_float_linear");Yb=k.getExtension("OES_standard_derivatives");fb=k.getExtension("EXT_texture_filter_anisotropic")||k.getExtension("MOZ_EXT_texture_filter_anisotropic")||k.getExtension("WEBKIT_EXT_texture_filter_anisotropic");oa=k.getExtension("WEBGL_compressed_texture_s3tc")||k.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||k.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");Rb||console.log("THREE.WebGLRenderer: Float textures not supported.");
Yb||console.log("THREE.WebGLRenderer: Standard derivatives not supported.");fb||console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");oa||console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");void 0===k.getShaderPrecisionFormat&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});k.clearColor(0,0,0,1);k.clearDepth(1);k.clearStencil(0);k.enable(k.DEPTH_TEST);k.depthFunc(k.LEQUAL);k.frontFace(k.CCW);k.cullFace(k.BACK);k.enable(k.CULL_FACE);
k.enable(k.BLEND);k.blendEquation(k.FUNC_ADD);k.blendFunc(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA);k.clearColor(Fa.r,Fa.g,Fa.b,wa);this.context=k;var ib=k.getParameter(k.MAX_TEXTURE_IMAGE_UNITS),Tb=k.getParameter(k.MAX_VERTEX_TEXTURE_IMAGE_UNITS);k.getParameter(k.MAX_TEXTURE_SIZE);var Ub=k.getParameter(k.MAX_CUBE_MAP_TEXTURE_SIZE),Wa=fb?k.getParameter(fb.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,Gb=0<Tb,Bb=Gb&&Rb;oa&&k.getParameter(k.COMPRESSED_TEXTURE_FORMATS);var Kb=k.getShaderPrecisionFormat(k.VERTEX_SHADER,
k.HIGH_FLOAT),Ka=k.getShaderPrecisionFormat(k.VERTEX_SHADER,k.MEDIUM_FLOAT);k.getShaderPrecisionFormat(k.VERTEX_SHADER,k.LOW_FLOAT);var Sb=k.getShaderPrecisionFormat(k.FRAGMENT_SHADER,k.HIGH_FLOAT),Lb=k.getShaderPrecisionFormat(k.FRAGMENT_SHADER,k.MEDIUM_FLOAT);k.getShaderPrecisionFormat(k.FRAGMENT_SHADER,k.LOW_FLOAT);k.getShaderPrecisionFormat(k.VERTEX_SHADER,k.HIGH_INT);k.getShaderPrecisionFormat(k.VERTEX_SHADER,k.MEDIUM_INT);k.getShaderPrecisionFormat(k.VERTEX_SHADER,k.LOW_INT);k.getShaderPrecisionFormat(k.FRAGMENT_SHADER,
k.HIGH_INT);k.getShaderPrecisionFormat(k.FRAGMENT_SHADER,k.MEDIUM_INT);k.getShaderPrecisionFormat(k.FRAGMENT_SHADER,k.LOW_INT);var Hb=0<Kb.precision&&0<Sb.precision,kc=0<Ka.precision&&0<Lb.precision;"highp"===L&&!Hb&&(kc?(L="mediump",console.warn("WebGLRenderer: highp not supported, using mediump")):(L="lowp",console.warn("WebGLRenderer: highp and mediump not supported, using lowp")));"mediump"===L&&!kc&&(L="lowp",console.warn("WebGLRenderer: mediump not supported, using lowp"));this.getContext=function(){return k};
this.supportsVertexTextures=function(){return Gb};this.supportsFloatTextures=function(){return Rb};this.supportsStandardDerivatives=function(){return Yb};this.supportsCompressedTextureS3TC=function(){return oa};this.getMaxAnisotropy=function(){return Wa};this.getPrecision=function(){return L};this.setSize=function(a,b,c){Z.width=a*this.devicePixelRatio;Z.height=b*this.devicePixelRatio;1!==this.devicePixelRatio&&!1!==c&&(Z.style.width=a+"px",Z.style.height=b+"px");this.setViewport(0,0,Z.width,Z.height)};
this.setViewport=function(a,b,c,d){ua=void 0!==a?a:0;Ra=void 0!==b?b:0;Qa=void 0!==c?c:Z.width;Xa=void 0!==d?d:Z.height;k.viewport(ua,Ra,Qa,Xa)};this.setScissor=function(a,b,c,d){k.scissor(a,b,c,d)};this.enableScissorTest=function(a){a?k.enable(k.SCISSOR_TEST):k.disable(k.SCISSOR_TEST)};this.setClearColor=function(a,b){Fa.set(a);wa=void 0!==b?b:1;k.clearColor(Fa.r,Fa.g,Fa.b,wa)};this.setClearColorHex=function(a,b){console.warn("DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.");
this.setClearColor(a,b)};this.getClearColor=function(){return Fa};this.getClearAlpha=function(){return wa};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=k.COLOR_BUFFER_BIT;if(void 0===b||b)d|=k.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=k.STENCIL_BUFFER_BIT;k.clear(d)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};
this.updateShadowMap=function(a,b){qa=null;pb=ub=ab=xa=aa=-1;yb=!0;T=da=-1;this.shadowMapPlugin.update(a,b)};var lc=function(a){a=a.target;a.removeEventListener("dispose",lc);a.__webglInit=void 0;void 0!==a.__webglVertexBuffer&&k.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&k.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&k.deleteBuffer(a.__webglTangentBuffer);void 0!==a.__webglColorBuffer&&k.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&
k.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&k.deleteBuffer(a.__webglUV2Buffer);void 0!==a.__webglSkinIndicesBuffer&&k.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&k.deleteBuffer(a.__webglSkinWeightsBuffer);void 0!==a.__webglFaceBuffer&&k.deleteBuffer(a.__webglFaceBuffer);void 0!==a.__webglLineBuffer&&k.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&k.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.geometryGroups)for(var c in a.geometryGroups){var d=
a.geometryGroups[c];if(void 0!==d.numMorphTargets)for(var e=0,f=d.numMorphTargets;e<f;e++)k.deleteBuffer(d.__webglMorphTargetsBuffers[e]);if(void 0!==d.numMorphNormals){e=0;for(f=d.numMorphNormals;e<f;e++)k.deleteBuffer(d.__webglMorphNormalsBuffers[e])}b(d)}b(a);D.info.memory.geometries--},gc=function(a){a=a.target;a.removeEventListener("dispose",gc);a.image&&a.image.__webglTextureCube?k.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,k.deleteTexture(a.__webglTexture));
D.info.memory.textures--},mc=function(a){a=a.target;a.removeEventListener("dispose",mc);if(a&&a.__webglTexture)if(k.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)k.deleteFramebuffer(a.__webglFramebuffer[b]),k.deleteRenderbuffer(a.__webglRenderbuffer[b]);else k.deleteFramebuffer(a.__webglFramebuffer),k.deleteRenderbuffer(a.__webglRenderbuffer);D.info.memory.textures--},uc=function(a){a=a.target;a.removeEventListener("dispose",uc);vc(a)},vc=function(a){var b=
a.program;if(void 0!==b){a.program=void 0;var c,d,e=!1,a=0;for(c=V.length;a<c;a++)if(d=V[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=V.length;a<c;a++)d=V[a],d.program!==b&&e.push(d);V=e;k.deleteProgram(b);D.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=k.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&(a.__webglNormalBuffer=k.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&
(a.__webglUvBuffer=k.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=k.createBuffer());a.hasPositions&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,a.positionArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.position),k.vertexAttribPointer(b.attributes.position,3,k.FLOAT,!1,0,0));if(a.hasNormals){k.bindBuffer(k.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,e,f,g,h,i,j,l,m,n,p,q=3*a.count;for(p=0;p<
q;p+=9)n=a.normalArray,d=n[p],e=n[p+1],f=n[p+2],g=n[p+3],i=n[p+4],l=n[p+5],h=n[p+6],j=n[p+7],m=n[p+8],d=(d+g+h)/3,e=(e+i+j)/3,f=(f+l+m)/3,n[p]=d,n[p+1]=e,n[p+2]=f,n[p+3]=d,n[p+4]=e,n[p+5]=f,n[p+6]=d,n[p+7]=e,n[p+8]=f}k.bufferData(k.ARRAY_BUFFER,a.normalArray,k.DYNAMIC_DRAW);k.enableVertexAttribArray(b.attributes.normal);k.vertexAttribPointer(b.attributes.normal,3,k.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglUvBuffer),k.bufferData(k.ARRAY_BUFFER,a.uvArray,k.DYNAMIC_DRAW),
k.enableVertexAttribArray(b.attributes.uv),k.vertexAttribPointer(b.attributes.uv,2,k.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(k.bindBuffer(k.ARRAY_BUFFER,a.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,a.colorArray,k.DYNAMIC_DRAW),k.enableVertexAttribArray(b.attributes.color),k.vertexAttribPointer(b.attributes.color,3,k.FLOAT,!1,0,0));k.drawArrays(k.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var h,j,l,m;h=F(a,b,c,d,f);b=
h.attributes;a=e.attributes;c=!1;h=16777215*e.id+2*h.id+(d.wireframe?1:0);h!==ub&&(ub=h,c=!0);c&&i();if(f instanceof THREE.Mesh)if(d=a.index){e=e.offsets;1<e.length&&(c=!0);for(var f=0,n=e.length;f<n;f++){var p=e[f].index;if(c){for(j in a)"index"!==j&&(l=b[j],h=a[j],m=h.itemSize,0<=l&&(k.bindBuffer(k.ARRAY_BUFFER,h.buffer),g(l),k.vertexAttribPointer(l,m,k.FLOAT,!1,0,4*p*m)));k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,d.buffer)}k.drawElements(k.TRIANGLES,e[f].count,k.UNSIGNED_SHORT,2*e[f].start);D.info.render.calls++;
D.info.render.vertices+=e[f].count;D.info.render.faces+=e[f].count/3}}else{if(c)for(j in a)"index"!==j&&(l=b[j],h=a[j],m=h.itemSize,0<=l&&(k.bindBuffer(k.ARRAY_BUFFER,h.buffer),g(l),k.vertexAttribPointer(l,m,k.FLOAT,!1,0,0)));a=e.attributes.position;k.drawArrays(k.TRIANGLES,0,a.numItems/3);D.info.render.calls++;D.info.render.vertices+=a.numItems/3;D.info.render.faces+=a.numItems/3/3}else if(f instanceof THREE.ParticleSystem){if(c){for(j in a)l=b[j],h=a[j],m=h.itemSize,0<=l&&(k.bindBuffer(k.ARRAY_BUFFER,
h.buffer),g(l),k.vertexAttribPointer(l,m,k.FLOAT,!1,0,0));a=a.position;k.drawArrays(k.POINTS,0,a.numItems/3);D.info.render.calls++;D.info.render.points+=a.numItems/3}}else if(f instanceof THREE.Line&&c){for(j in a)l=b[j],h=a[j],m=h.itemSize,0<=l&&(k.bindBuffer(k.ARRAY_BUFFER,h.buffer),g(l),k.vertexAttribPointer(l,m,k.FLOAT,!1,0,0));j=f.type===THREE.LineStrip?k.LINE_STRIP:k.LINES;A(d.linewidth);a=a.position;k.drawArrays(j,0,a.numItems/3);D.info.render.calls++;D.info.render.points+=a.numItems}}};this.renderBuffer=
function(a,b,c,d,e,f){if(!1!==d.visible){var h,j,c=F(a,b,c,d,f),a=c.attributes,b=!1,c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==ub&&(ub=c,b=!0);b&&i();if(!d.morphTargets&&0<=a.position)b&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),g(a.position),k.vertexAttribPointer(a.position,3,k.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),g(c.position),k.vertexAttribPointer(c.position,
3,k.FLOAT,!1,0,0)):0<=c.position&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglVertexBuffer),g(c.position),k.vertexAttribPointer(c.position,3,k.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var m=0;j=f.morphTargetForcedOrder;for(h=f.morphTargetInfluences;m<d.numSupportedMorphTargets&&m<j.length;)0<=c["morphTarget"+m]&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[j[m]]),g(c["morphTarget"+m]),k.vertexAttribPointer(c["morphTarget"+m],3,k.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&
(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[j[m]]),g(c["morphNormal"+m]),k.vertexAttribPointer(c["morphNormal"+m],3,k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=h[j[m]],m++}else{j=[];h=f.morphTargetInfluences;var n,p=h.length;for(n=0;n<p;n++)m=h[n],0<m&&j.push([m,n]);j.length>d.numSupportedMorphTargets?(j.sort(l),j.length=d.numSupportedMorphTargets):j.length>d.numSupportedMorphNormals?j.sort(l):0===j.length&&j.push([0,0]);for(m=0;m<d.numSupportedMorphTargets;)j[m]?(n=j[m][1],0<=
c["morphTarget"+m]&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[n]),g(c["morphTarget"+m]),k.vertexAttribPointer(c["morphTarget"+m],3,k.FLOAT,!1,0,0)),0<=c["morphNormal"+m]&&d.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[n]),g(c["morphNormal"+m]),k.vertexAttribPointer(c["morphNormal"+m],3,k.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[m]=h[n]):f.__webglMorphTargetInfluences[m]=0,m++}null!==d.program.uniforms.morphTargetInfluences&&k.uniform1fv(d.program.uniforms.morphTargetInfluences,
f.__webglMorphTargetInfluences)}if(b){if(e.__webglCustomAttributesList){h=0;for(j=e.__webglCustomAttributesList.length;h<j;h++)c=e.__webglCustomAttributesList[h],0<=a[c.buffer.belongsToAttribute]&&(k.bindBuffer(k.ARRAY_BUFFER,c.buffer),g(a[c.buffer.belongsToAttribute]),k.vertexAttribPointer(a[c.buffer.belongsToAttribute],c.size,k.FLOAT,!1,0,0))}0<=a.color&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglColorBuffer),g(a.color),k.vertexAttribPointer(a.color,3,k.FLOAT,!1,0,0));0<=a.normal&&(k.bindBuffer(k.ARRAY_BUFFER,
e.__webglNormalBuffer),g(a.normal),k.vertexAttribPointer(a.normal,3,k.FLOAT,!1,0,0));0<=a.tangent&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglTangentBuffer),g(a.tangent),k.vertexAttribPointer(a.tangent,4,k.FLOAT,!1,0,0));0<=a.uv&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUVBuffer),g(a.uv),k.vertexAttribPointer(a.uv,2,k.FLOAT,!1,0,0));0<=a.uv2&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglUV2Buffer),g(a.uv2),k.vertexAttribPointer(a.uv2,2,k.FLOAT,!1,0,0));d.skinning&&(0<=a.skinIndex&&0<=a.skinWeight)&&(k.bindBuffer(k.ARRAY_BUFFER,
e.__webglSkinIndicesBuffer),g(a.skinIndex),k.vertexAttribPointer(a.skinIndex,4,k.FLOAT,!1,0,0),k.bindBuffer(k.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),g(a.skinWeight),k.vertexAttribPointer(a.skinWeight,4,k.FLOAT,!1,0,0));0<=a.lineDistance&&(k.bindBuffer(k.ARRAY_BUFFER,e.__webglLineDistanceBuffer),g(a.lineDistance),k.vertexAttribPointer(a.lineDistance,1,k.FLOAT,!1,0,0))}f instanceof THREE.Mesh?(d.wireframe?(A(d.wireframeLinewidth),b&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),k.drawElements(k.LINES,
e.__webglLineCount,k.UNSIGNED_SHORT,0)):(b&&k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),k.drawElements(k.TRIANGLES,e.__webglFaceCount,k.UNSIGNED_SHORT,0)),D.info.render.calls++,D.info.render.vertices+=e.__webglFaceCount,D.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?k.LINE_STRIP:k.LINES,A(d.linewidth),k.drawArrays(f,0,e.__webglLineCount),D.info.render.calls++):f instanceof THREE.ParticleSystem?(k.drawArrays(k.POINTS,0,e.__webglParticleCount),
D.info.render.calls++,D.info.render.points+=e.__webglParticleCount):f instanceof THREE.Ribbon&&(k.drawArrays(k.TRIANGLE_STRIP,0,e.__webglVertexCount),D.info.render.calls++)}};this.render=function(a,b,c,d,e){if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var f,h,g,i,l=a.__lights,q=a.fog;pb=-1;yb=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);
xb.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);Sa.setFromMatrix(xb);this.autoUpdateObjects&&this.initWebGLObjects(a);m(this.renderPluginsPre,a,b);D.info.render.calls=0;D.info.render.vertices=0;D.info.render.faces=0;D.info.render.points=0;this.setRenderTarget(c);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);i=a.__webglObjects;d=0;for(f=i.length;d<f;d++)if(h=i[d],g=h.object,h.id=d,h.render=!1,g.visible&&(!(g instanceof THREE.Mesh||g instanceof
THREE.ParticleSystem)||!g.frustumCulled||Sa.intersectsObject(g))){var r=g;r._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,r.matrixWorld);r._normalMatrix.getNormalMatrix(r._modelViewMatrix);var r=h,s=r.buffer,t=void 0,u=t=void 0,u=r.object.material;if(u instanceof THREE.MeshFaceMaterial)t=s.materialIndex,t=u.materials[t],t.transparent?(r.transparent=t,r.opaque=null):(r.opaque=t,r.transparent=null);else if(t=u)t.transparent?(r.transparent=t,r.opaque=null):(r.opaque=t,r.transparent=null);h.render=
!0;!0===this.sortObjects&&(null!==g.renderDepth?h.z=g.renderDepth:(Ga.getPositionFromMatrix(g.matrixWorld),Ga.applyProjection(xb),h.z=Ga.z))}this.sortObjects&&i.sort(j);i=a.__webglObjectsImmediate;d=0;for(f=i.length;d<f;d++)h=i[d],g=h.object,g.visible&&(g._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,g.matrixWorld),g._normalMatrix.getNormalMatrix(g._modelViewMatrix),g=h.object.material,g.transparent?(h.transparent=g,h.opaque=null):(h.opaque=g,h.transparent=null));a.overrideMaterial?(d=a.overrideMaterial,
this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),K(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),n(a.__webglObjects,!1,"",b,l,q,!0,d),p(a.__webglObjectsImmediate,"",b,l,q,!1,d,e)):(d=null,this.setBlending(THREE.NoBlending),n(a.__webglObjects,!0,"opaque",b,l,q,!1,d),p(a.__webglObjectsImmediate,"opaque",b,l,q,!1,d,e),n(a.__webglObjects,!1,"transparent",b,l,q,!0,d),p(a.__webglObjectsImmediate,"transparent",
b,l,q,!0,d,e));m(this.renderPluginsPost,a,b);c&&(c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter)&&(c instanceof THREE.WebGLRenderTargetCube?(k.bindTexture(k.TEXTURE_CUBE_MAP,c.__webglTexture),k.generateMipmap(k.TEXTURE_CUBE_MAP),k.bindTexture(k.TEXTURE_CUBE_MAP,null)):(k.bindTexture(k.TEXTURE_2D,c.__webglTexture),k.generateMipmap(k.TEXTURE_2D),k.bindTexture(k.TEXTURE_2D,null)));this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,
b,c,d,e){var f=F(a,b,c,d,e);ub=-1;D.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,k,Sa):e.render(function(a){D.renderBufferImmediate(a,f,d)})};this.initWebGLObjects=function(a){a.__webglObjects||(a.__webglObjects=[],a.__webglObjectsImmediate=[],a.__webglSprites=[],a.__webglFlares=[]);for(;a.__objectsAdded.length;)t(a.__objectsAdded[0],a),a.__objectsAdded.splice(0,1);for(;a.__objectsRemoved.length;)u(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1);for(var b=0,c=
a.__webglObjects.length;b<c;b++){var g=a.__webglObjects[b].object;void 0===g.__webglInit&&(void 0!==g.__webglActive&&u(g,a),t(g,a));var i=g,j=i.geometry,m=void 0,n=void 0,p=void 0;if(j instanceof THREE.BufferGeometry){var q=k.DYNAMIC_DRAW,z=!j.dynamic,w=j.attributes,y=void 0,A=void 0;for(y in w)A=w[y],A.needsUpdate&&("index"===y?(k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,A.buffer),k.bufferData(k.ELEMENT_ARRAY_BUFFER,A.array,q)):(k.bindBuffer(k.ARRAY_BUFFER,A.buffer),k.bufferData(k.ARRAY_BUFFER,A.array,
q)),A.needsUpdate=!1),z&&!A.dynamic&&(A.array=null)}else if(i instanceof THREE.Mesh){for(var B=0,F=j.geometryGroupsList.length;B<F;B++)if(m=j.geometryGroupsList[B],p=e(i,m),j.buffersNeedUpdate&&d(m,i),n=p.attributes&&r(p),j.verticesNeedUpdate||j.morphTargetsNeedUpdate||j.elementsNeedUpdate||j.uvsNeedUpdate||j.normalsNeedUpdate||j.colorsNeedUpdate||j.tangentsNeedUpdate||n){var C=m,G=i,H=k.DYNAMIC_DRAW,I=!j.dynamic,J=p;if(C.__inittedArrays){var V=f(J),K=J.vertexColors?J.vertexColors:!1,L=h(J),M=V===
THREE.SmoothShading,E=void 0,D=void 0,N=void 0,Q=void 0,O=void 0,ea=void 0,T=void 0,X=void 0,qa=void 0,fa=void 0,aa=void 0,R=void 0,S=void 0,P=void 0,ba=void 0,Z=void 0,da=void 0,ya=void 0,ja=void 0,ha=void 0,Ha=void 0,ia=void 0,eb=void 0,ka=void 0,na=void 0,la=void 0,ua=void 0,oa=void 0,pa=void 0,ra=void 0,Ca=void 0,va=void 0,wa=void 0,xa=void 0,pb=void 0,za=void 0,ub=void 0,Fa=void 0,Pa=void 0,Ra=void 0,bb=void 0,ab=void 0,Za=void 0,$a=void 0,Ua=void 0,Qa=void 0,Ta=0,Ya=0,Wa=0,Xa=0,Ka=0,jb=0,Da=
0,ob=0,Va=0,Y=0,ga=0,x=0,Aa=void 0,cb=C.__vertexArray,fb=C.__uvArray,ib=C.__uv2Array,Sa=C.__normalArray,La=C.__tangentArray,db=C.__colorArray,Ma=C.__skinIndexArray,Na=C.__skinWeightArray,yb=C.__morphTargetsArrays,Ab=C.__morphNormalsArrays,Bb=C.__webglCustomAttributesList,v=void 0,Mb=C.__faceArray,wb=C.__lineArray,qb=G.geometry,Gb=qb.elementsNeedUpdate,Hb=qb.uvsNeedUpdate,Rb=qb.normalsNeedUpdate,Sb=qb.tangentsNeedUpdate,Xb=qb.colorsNeedUpdate,Yb=qb.morphTargetsNeedUpdate,cc=qb.vertices,sa=C.faces3,
ta=C.faces4,kb=qb.faces,Jb=qb.faceVertexUvs[0],Lb=qb.faceVertexUvs[1],dc=qb.skinIndices,$b=qb.skinWeights,ac=qb.morphTargets,Ib=qb.morphNormals;if(qb.verticesNeedUpdate){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],R=cc[Q.a],S=cc[Q.b],P=cc[Q.c],cb[Ya]=R.x,cb[Ya+1]=R.y,cb[Ya+2]=R.z,cb[Ya+3]=S.x,cb[Ya+4]=S.y,cb[Ya+5]=S.z,cb[Ya+6]=P.x,cb[Ya+7]=P.y,cb[Ya+8]=P.z,Ya+=9;E=0;for(D=ta.length;E<D;E++)Q=kb[ta[E]],R=cc[Q.a],S=cc[Q.b],P=cc[Q.c],ba=cc[Q.d],cb[Ya]=R.x,cb[Ya+1]=R.y,cb[Ya+2]=R.z,cb[Ya+3]=S.x,cb[Ya+4]=
S.y,cb[Ya+5]=S.z,cb[Ya+6]=P.x,cb[Ya+7]=P.y,cb[Ya+8]=P.z,cb[Ya+9]=ba.x,cb[Ya+10]=ba.y,cb[Ya+11]=ba.z,Ya+=12;k.bindBuffer(k.ARRAY_BUFFER,C.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,cb,H)}if(Yb){bb=0;for(ab=ac.length;bb<ab;bb++){E=ga=0;for(D=sa.length;E<D;E++)Ua=sa[E],Q=kb[Ua],R=ac[bb].vertices[Q.a],S=ac[bb].vertices[Q.b],P=ac[bb].vertices[Q.c],Za=yb[bb],Za[ga]=R.x,Za[ga+1]=R.y,Za[ga+2]=R.z,Za[ga+3]=S.x,Za[ga+4]=S.y,Za[ga+5]=S.z,Za[ga+6]=P.x,Za[ga+7]=P.y,Za[ga+8]=P.z,J.morphNormals&&(M?(Qa=Ib[bb].vertexNormals[Ua],
ha=Qa.a,Ha=Qa.b,ia=Qa.c):ia=Ha=ha=Ib[bb].faceNormals[Ua],$a=Ab[bb],$a[ga]=ha.x,$a[ga+1]=ha.y,$a[ga+2]=ha.z,$a[ga+3]=Ha.x,$a[ga+4]=Ha.y,$a[ga+5]=Ha.z,$a[ga+6]=ia.x,$a[ga+7]=ia.y,$a[ga+8]=ia.z),ga+=9;E=0;for(D=ta.length;E<D;E++)Ua=ta[E],Q=kb[Ua],R=ac[bb].vertices[Q.a],S=ac[bb].vertices[Q.b],P=ac[bb].vertices[Q.c],ba=ac[bb].vertices[Q.d],Za=yb[bb],Za[ga]=R.x,Za[ga+1]=R.y,Za[ga+2]=R.z,Za[ga+3]=S.x,Za[ga+4]=S.y,Za[ga+5]=S.z,Za[ga+6]=P.x,Za[ga+7]=P.y,Za[ga+8]=P.z,Za[ga+9]=ba.x,Za[ga+10]=ba.y,Za[ga+11]=
ba.z,J.morphNormals&&(M?(Qa=Ib[bb].vertexNormals[Ua],ha=Qa.a,Ha=Qa.b,ia=Qa.c,eb=Qa.d):eb=ia=Ha=ha=Ib[bb].faceNormals[Ua],$a=Ab[bb],$a[ga]=ha.x,$a[ga+1]=ha.y,$a[ga+2]=ha.z,$a[ga+3]=Ha.x,$a[ga+4]=Ha.y,$a[ga+5]=Ha.z,$a[ga+6]=ia.x,$a[ga+7]=ia.y,$a[ga+8]=ia.z,$a[ga+9]=eb.x,$a[ga+10]=eb.y,$a[ga+11]=eb.z),ga+=12;k.bindBuffer(k.ARRAY_BUFFER,C.__webglMorphTargetsBuffers[bb]);k.bufferData(k.ARRAY_BUFFER,yb[bb],H);J.morphNormals&&(k.bindBuffer(k.ARRAY_BUFFER,C.__webglMorphNormalsBuffers[bb]),k.bufferData(k.ARRAY_BUFFER,
Ab[bb],H))}}if($b.length){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],oa=$b[Q.a],pa=$b[Q.b],ra=$b[Q.c],Na[Y]=oa.x,Na[Y+1]=oa.y,Na[Y+2]=oa.z,Na[Y+3]=oa.w,Na[Y+4]=pa.x,Na[Y+5]=pa.y,Na[Y+6]=pa.z,Na[Y+7]=pa.w,Na[Y+8]=ra.x,Na[Y+9]=ra.y,Na[Y+10]=ra.z,Na[Y+11]=ra.w,va=dc[Q.a],wa=dc[Q.b],xa=dc[Q.c],Ma[Y]=va.x,Ma[Y+1]=va.y,Ma[Y+2]=va.z,Ma[Y+3]=va.w,Ma[Y+4]=wa.x,Ma[Y+5]=wa.y,Ma[Y+6]=wa.z,Ma[Y+7]=wa.w,Ma[Y+8]=xa.x,Ma[Y+9]=xa.y,Ma[Y+10]=xa.z,Ma[Y+11]=xa.w,Y+=12;E=0;for(D=ta.length;E<D;E++)Q=kb[ta[E]],oa=$b[Q.a],
pa=$b[Q.b],ra=$b[Q.c],Ca=$b[Q.d],Na[Y]=oa.x,Na[Y+1]=oa.y,Na[Y+2]=oa.z,Na[Y+3]=oa.w,Na[Y+4]=pa.x,Na[Y+5]=pa.y,Na[Y+6]=pa.z,Na[Y+7]=pa.w,Na[Y+8]=ra.x,Na[Y+9]=ra.y,Na[Y+10]=ra.z,Na[Y+11]=ra.w,Na[Y+12]=Ca.x,Na[Y+13]=Ca.y,Na[Y+14]=Ca.z,Na[Y+15]=Ca.w,va=dc[Q.a],wa=dc[Q.b],xa=dc[Q.c],pb=dc[Q.d],Ma[Y]=va.x,Ma[Y+1]=va.y,Ma[Y+2]=va.z,Ma[Y+3]=va.w,Ma[Y+4]=wa.x,Ma[Y+5]=wa.y,Ma[Y+6]=wa.z,Ma[Y+7]=wa.w,Ma[Y+8]=xa.x,Ma[Y+9]=xa.y,Ma[Y+10]=xa.z,Ma[Y+11]=xa.w,Ma[Y+12]=pb.x,Ma[Y+13]=pb.y,Ma[Y+14]=pb.z,Ma[Y+15]=pb.w,
Y+=16;0<Y&&(k.bindBuffer(k.ARRAY_BUFFER,C.__webglSkinIndicesBuffer),k.bufferData(k.ARRAY_BUFFER,Ma,H),k.bindBuffer(k.ARRAY_BUFFER,C.__webglSkinWeightsBuffer),k.bufferData(k.ARRAY_BUFFER,Na,H))}if(Xb&&K){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],T=Q.vertexColors,X=Q.color,3===T.length&&K===THREE.VertexColors?(ka=T[0],na=T[1],la=T[2]):la=na=ka=X,db[Va]=ka.r,db[Va+1]=ka.g,db[Va+2]=ka.b,db[Va+3]=na.r,db[Va+4]=na.g,db[Va+5]=na.b,db[Va+6]=la.r,db[Va+7]=la.g,db[Va+8]=la.b,Va+=9;E=0;for(D=ta.length;E<D;E++)Q=
kb[ta[E]],T=Q.vertexColors,X=Q.color,4===T.length&&K===THREE.VertexColors?(ka=T[0],na=T[1],la=T[2],ua=T[3]):ua=la=na=ka=X,db[Va]=ka.r,db[Va+1]=ka.g,db[Va+2]=ka.b,db[Va+3]=na.r,db[Va+4]=na.g,db[Va+5]=na.b,db[Va+6]=la.r,db[Va+7]=la.g,db[Va+8]=la.b,db[Va+9]=ua.r,db[Va+10]=ua.g,db[Va+11]=ua.b,Va+=12;0<Va&&(k.bindBuffer(k.ARRAY_BUFFER,C.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,db,H))}if(Sb&&qb.hasTangents){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],qa=Q.vertexTangents,Z=qa[0],da=qa[1],ya=qa[2],La[Da]=
Z.x,La[Da+1]=Z.y,La[Da+2]=Z.z,La[Da+3]=Z.w,La[Da+4]=da.x,La[Da+5]=da.y,La[Da+6]=da.z,La[Da+7]=da.w,La[Da+8]=ya.x,La[Da+9]=ya.y,La[Da+10]=ya.z,La[Da+11]=ya.w,Da+=12;E=0;for(D=ta.length;E<D;E++)Q=kb[ta[E]],qa=Q.vertexTangents,Z=qa[0],da=qa[1],ya=qa[2],ja=qa[3],La[Da]=Z.x,La[Da+1]=Z.y,La[Da+2]=Z.z,La[Da+3]=Z.w,La[Da+4]=da.x,La[Da+5]=da.y,La[Da+6]=da.z,La[Da+7]=da.w,La[Da+8]=ya.x,La[Da+9]=ya.y,La[Da+10]=ya.z,La[Da+11]=ya.w,La[Da+12]=ja.x,La[Da+13]=ja.y,La[Da+14]=ja.z,La[Da+15]=ja.w,Da+=16;k.bindBuffer(k.ARRAY_BUFFER,
C.__webglTangentBuffer);k.bufferData(k.ARRAY_BUFFER,La,H)}if(Rb&&V){E=0;for(D=sa.length;E<D;E++)if(Q=kb[sa[E]],O=Q.vertexNormals,ea=Q.normal,3===O.length&&M)for(za=0;3>za;za++)Fa=O[za],Sa[jb]=Fa.x,Sa[jb+1]=Fa.y,Sa[jb+2]=Fa.z,jb+=3;else for(za=0;3>za;za++)Sa[jb]=ea.x,Sa[jb+1]=ea.y,Sa[jb+2]=ea.z,jb+=3;E=0;for(D=ta.length;E<D;E++)if(Q=kb[ta[E]],O=Q.vertexNormals,ea=Q.normal,4===O.length&&M)for(za=0;4>za;za++)Fa=O[za],Sa[jb]=Fa.x,Sa[jb+1]=Fa.y,Sa[jb+2]=Fa.z,jb+=3;else for(za=0;4>za;za++)Sa[jb]=ea.x,Sa[jb+
1]=ea.y,Sa[jb+2]=ea.z,jb+=3;k.bindBuffer(k.ARRAY_BUFFER,C.__webglNormalBuffer);k.bufferData(k.ARRAY_BUFFER,Sa,H)}if(Hb&&Jb&&L){E=0;for(D=sa.length;E<D;E++)if(N=sa[E],fa=Jb[N],void 0!==fa)for(za=0;3>za;za++)Pa=fa[za],fb[Wa]=Pa.x,fb[Wa+1]=Pa.y,Wa+=2;E=0;for(D=ta.length;E<D;E++)if(N=ta[E],fa=Jb[N],void 0!==fa)for(za=0;4>za;za++)Pa=fa[za],fb[Wa]=Pa.x,fb[Wa+1]=Pa.y,Wa+=2;0<Wa&&(k.bindBuffer(k.ARRAY_BUFFER,C.__webglUVBuffer),k.bufferData(k.ARRAY_BUFFER,fb,H))}if(Hb&&Lb&&L){E=0;for(D=sa.length;E<D;E++)if(N=
sa[E],aa=Lb[N],void 0!==aa)for(za=0;3>za;za++)Ra=aa[za],ib[Xa]=Ra.x,ib[Xa+1]=Ra.y,Xa+=2;E=0;for(D=ta.length;E<D;E++)if(N=ta[E],aa=Lb[N],void 0!==aa)for(za=0;4>za;za++)Ra=aa[za],ib[Xa]=Ra.x,ib[Xa+1]=Ra.y,Xa+=2;0<Xa&&(k.bindBuffer(k.ARRAY_BUFFER,C.__webglUV2Buffer),k.bufferData(k.ARRAY_BUFFER,ib,H))}if(Gb){E=0;for(D=sa.length;E<D;E++)Mb[Ka]=Ta,Mb[Ka+1]=Ta+1,Mb[Ka+2]=Ta+2,Ka+=3,wb[ob]=Ta,wb[ob+1]=Ta+1,wb[ob+2]=Ta,wb[ob+3]=Ta+2,wb[ob+4]=Ta+1,wb[ob+5]=Ta+2,ob+=6,Ta+=3;E=0;for(D=ta.length;E<D;E++)Mb[Ka]=
Ta,Mb[Ka+1]=Ta+1,Mb[Ka+2]=Ta+3,Mb[Ka+3]=Ta+1,Mb[Ka+4]=Ta+2,Mb[Ka+5]=Ta+3,Ka+=6,wb[ob]=Ta,wb[ob+1]=Ta+1,wb[ob+2]=Ta,wb[ob+3]=Ta+3,wb[ob+4]=Ta+1,wb[ob+5]=Ta+2,wb[ob+6]=Ta+2,wb[ob+7]=Ta+3,ob+=8,Ta+=4;k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,C.__webglFaceBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,Mb,H);k.bindBuffer(k.ELEMENT_ARRAY_BUFFER,C.__webglLineBuffer);k.bufferData(k.ELEMENT_ARRAY_BUFFER,wb,H)}if(Bb){za=0;for(ub=Bb.length;za<ub;za++)if(v=Bb[za],v.__original.needsUpdate){x=0;if(1===v.size)if(void 0===
v.boundTo||"vertices"===v.boundTo){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],v.array[x]=v.value[Q.a],v.array[x+1]=v.value[Q.b],v.array[x+2]=v.value[Q.c],x+=3;E=0;for(D=ta.length;E<D;E++)Q=kb[ta[E]],v.array[x]=v.value[Q.a],v.array[x+1]=v.value[Q.b],v.array[x+2]=v.value[Q.c],v.array[x+3]=v.value[Q.d],x+=4}else{if("faces"===v.boundTo){E=0;for(D=sa.length;E<D;E++)Aa=v.value[sa[E]],v.array[x]=Aa,v.array[x+1]=Aa,v.array[x+2]=Aa,x+=3;E=0;for(D=ta.length;E<D;E++)Aa=v.value[ta[E]],v.array[x]=Aa,v.array[x+1]=
Aa,v.array[x+2]=Aa,v.array[x+3]=Aa,x+=4}}else if(2===v.size)if(void 0===v.boundTo||"vertices"===v.boundTo){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],R=v.value[Q.a],S=v.value[Q.b],P=v.value[Q.c],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=S.x,v.array[x+3]=S.y,v.array[x+4]=P.x,v.array[x+5]=P.y,x+=6;E=0;for(D=ta.length;E<D;E++)Q=kb[ta[E]],R=v.value[Q.a],S=v.value[Q.b],P=v.value[Q.c],ba=v.value[Q.d],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=S.x,v.array[x+3]=S.y,v.array[x+4]=P.x,v.array[x+5]=P.y,v.array[x+
6]=ba.x,v.array[x+7]=ba.y,x+=8}else{if("faces"===v.boundTo){E=0;for(D=sa.length;E<D;E++)P=S=R=Aa=v.value[sa[E]],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=S.x,v.array[x+3]=S.y,v.array[x+4]=P.x,v.array[x+5]=P.y,x+=6;E=0;for(D=ta.length;E<D;E++)ba=P=S=R=Aa=v.value[ta[E]],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=S.x,v.array[x+3]=S.y,v.array[x+4]=P.x,v.array[x+5]=P.y,v.array[x+6]=ba.x,v.array[x+7]=ba.y,x+=8}}else if(3===v.size){var W;W="c"===v.type?["r","g","b"]:["x","y","z"];if(void 0===v.boundTo||
"vertices"===v.boundTo){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],R=v.value[Q.a],S=v.value[Q.b],P=v.value[Q.c],v.array[x]=R[W[0]],v.array[x+1]=R[W[1]],v.array[x+2]=R[W[2]],v.array[x+3]=S[W[0]],v.array[x+4]=S[W[1]],v.array[x+5]=S[W[2]],v.array[x+6]=P[W[0]],v.array[x+7]=P[W[1]],v.array[x+8]=P[W[2]],x+=9;E=0;for(D=ta.length;E<D;E++)Q=kb[ta[E]],R=v.value[Q.a],S=v.value[Q.b],P=v.value[Q.c],ba=v.value[Q.d],v.array[x]=R[W[0]],v.array[x+1]=R[W[1]],v.array[x+2]=R[W[2]],v.array[x+3]=S[W[0]],v.array[x+4]=S[W[1]],
v.array[x+5]=S[W[2]],v.array[x+6]=P[W[0]],v.array[x+7]=P[W[1]],v.array[x+8]=P[W[2]],v.array[x+9]=ba[W[0]],v.array[x+10]=ba[W[1]],v.array[x+11]=ba[W[2]],x+=12}else if("faces"===v.boundTo){E=0;for(D=sa.length;E<D;E++)P=S=R=Aa=v.value[sa[E]],v.array[x]=R[W[0]],v.array[x+1]=R[W[1]],v.array[x+2]=R[W[2]],v.array[x+3]=S[W[0]],v.array[x+4]=S[W[1]],v.array[x+5]=S[W[2]],v.array[x+6]=P[W[0]],v.array[x+7]=P[W[1]],v.array[x+8]=P[W[2]],x+=9;E=0;for(D=ta.length;E<D;E++)ba=P=S=R=Aa=v.value[ta[E]],v.array[x]=R[W[0]],
v.array[x+1]=R[W[1]],v.array[x+2]=R[W[2]],v.array[x+3]=S[W[0]],v.array[x+4]=S[W[1]],v.array[x+5]=S[W[2]],v.array[x+6]=P[W[0]],v.array[x+7]=P[W[1]],v.array[x+8]=P[W[2]],v.array[x+9]=ba[W[0]],v.array[x+10]=ba[W[1]],v.array[x+11]=ba[W[2]],x+=12}else if("faceVertices"===v.boundTo){E=0;for(D=sa.length;E<D;E++)Aa=v.value[sa[E]],R=Aa[0],S=Aa[1],P=Aa[2],v.array[x]=R[W[0]],v.array[x+1]=R[W[1]],v.array[x+2]=R[W[2]],v.array[x+3]=S[W[0]],v.array[x+4]=S[W[1]],v.array[x+5]=S[W[2]],v.array[x+6]=P[W[0]],v.array[x+
7]=P[W[1]],v.array[x+8]=P[W[2]],x+=9;E=0;for(D=ta.length;E<D;E++)Aa=v.value[ta[E]],R=Aa[0],S=Aa[1],P=Aa[2],ba=Aa[3],v.array[x]=R[W[0]],v.array[x+1]=R[W[1]],v.array[x+2]=R[W[2]],v.array[x+3]=S[W[0]],v.array[x+4]=S[W[1]],v.array[x+5]=S[W[2]],v.array[x+6]=P[W[0]],v.array[x+7]=P[W[1]],v.array[x+8]=P[W[2]],v.array[x+9]=ba[W[0]],v.array[x+10]=ba[W[1]],v.array[x+11]=ba[W[2]],x+=12}}else if(4===v.size)if(void 0===v.boundTo||"vertices"===v.boundTo){E=0;for(D=sa.length;E<D;E++)Q=kb[sa[E]],R=v.value[Q.a],S=
v.value[Q.b],P=v.value[Q.c],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=R.z,v.array[x+3]=R.w,v.array[x+4]=S.x,v.array[x+5]=S.y,v.array[x+6]=S.z,v.array[x+7]=S.w,v.array[x+8]=P.x,v.array[x+9]=P.y,v.array[x+10]=P.z,v.array[x+11]=P.w,x+=12;E=0;for(D=ta.length;E<D;E++)Q=kb[ta[E]],R=v.value[Q.a],S=v.value[Q.b],P=v.value[Q.c],ba=v.value[Q.d],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=R.z,v.array[x+3]=R.w,v.array[x+4]=S.x,v.array[x+5]=S.y,v.array[x+6]=S.z,v.array[x+7]=S.w,v.array[x+8]=P.x,v.array[x+9]=
P.y,v.array[x+10]=P.z,v.array[x+11]=P.w,v.array[x+12]=ba.x,v.array[x+13]=ba.y,v.array[x+14]=ba.z,v.array[x+15]=ba.w,x+=16}else if("faces"===v.boundTo){E=0;for(D=sa.length;E<D;E++)P=S=R=Aa=v.value[sa[E]],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=R.z,v.array[x+3]=R.w,v.array[x+4]=S.x,v.array[x+5]=S.y,v.array[x+6]=S.z,v.array[x+7]=S.w,v.array[x+8]=P.x,v.array[x+9]=P.y,v.array[x+10]=P.z,v.array[x+11]=P.w,x+=12;E=0;for(D=ta.length;E<D;E++)ba=P=S=R=Aa=v.value[ta[E]],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+
2]=R.z,v.array[x+3]=R.w,v.array[x+4]=S.x,v.array[x+5]=S.y,v.array[x+6]=S.z,v.array[x+7]=S.w,v.array[x+8]=P.x,v.array[x+9]=P.y,v.array[x+10]=P.z,v.array[x+11]=P.w,v.array[x+12]=ba.x,v.array[x+13]=ba.y,v.array[x+14]=ba.z,v.array[x+15]=ba.w,x+=16}else if("faceVertices"===v.boundTo){E=0;for(D=sa.length;E<D;E++)Aa=v.value[sa[E]],R=Aa[0],S=Aa[1],P=Aa[2],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=R.z,v.array[x+3]=R.w,v.array[x+4]=S.x,v.array[x+5]=S.y,v.array[x+6]=S.z,v.array[x+7]=S.w,v.array[x+8]=P.x,
v.array[x+9]=P.y,v.array[x+10]=P.z,v.array[x+11]=P.w,x+=12;E=0;for(D=ta.length;E<D;E++)Aa=v.value[ta[E]],R=Aa[0],S=Aa[1],P=Aa[2],ba=Aa[3],v.array[x]=R.x,v.array[x+1]=R.y,v.array[x+2]=R.z,v.array[x+3]=R.w,v.array[x+4]=S.x,v.array[x+5]=S.y,v.array[x+6]=S.z,v.array[x+7]=S.w,v.array[x+8]=P.x,v.array[x+9]=P.y,v.array[x+10]=P.z,v.array[x+11]=P.w,v.array[x+12]=ba.x,v.array[x+13]=ba.y,v.array[x+14]=ba.z,v.array[x+15]=ba.w,x+=16}k.bindBuffer(k.ARRAY_BUFFER,v.buffer);k.bufferData(k.ARRAY_BUFFER,v.array,H)}}I&&
(delete C.__inittedArrays,delete C.__colorArray,delete C.__normalArray,delete C.__tangentArray,delete C.__uvArray,delete C.__uv2Array,delete C.__faceArray,delete C.__vertexArray,delete C.__lineArray,delete C.__skinIndexArray,delete C.__skinWeightArray)}}j.verticesNeedUpdate=!1;j.morphTargetsNeedUpdate=!1;j.elementsNeedUpdate=!1;j.uvsNeedUpdate=!1;j.normalsNeedUpdate=!1;j.colorsNeedUpdate=!1;j.tangentsNeedUpdate=!1;j.buffersNeedUpdate=!1;p.attributes&&s(p)}else if(i instanceof THREE.Ribbon){p=e(i,
j);n=p.attributes&&r(p);if(j.verticesNeedUpdate||j.colorsNeedUpdate||j.normalsNeedUpdate||n){var Cb=j,Kb=k.DYNAMIC_DRAW,nc=void 0,oc=void 0,pc=void 0,Tb=void 0,Ba=void 0,Ub=void 0,xc=void 0,yc=void 0,gc=void 0,gb=void 0,hc=void 0,Ia=void 0,rb=void 0,kc=Cb.vertices,lc=Cb.colors,mc=Cb.normals,uc=kc.length,vc=lc.length,Yc=mc.length,zc=Cb.__vertexArray,Ac=Cb.__colorArray,Bc=Cb.__normalArray,Zc=Cb.colorsNeedUpdate,$c=Cb.normalsNeedUpdate,Lc=Cb.__webglCustomAttributesList;if(Cb.verticesNeedUpdate){for(nc=
0;nc<uc;nc++)Tb=kc[nc],Ba=3*nc,zc[Ba]=Tb.x,zc[Ba+1]=Tb.y,zc[Ba+2]=Tb.z;k.bindBuffer(k.ARRAY_BUFFER,Cb.__webglVertexBuffer);k.bufferData(k.ARRAY_BUFFER,zc,Kb)}if(Zc){for(oc=0;oc<vc;oc++)Ub=lc[oc],Ba=3*oc,Ac[Ba]=Ub.r,Ac[Ba+1]=Ub.g,Ac[Ba+2]=Ub.b;k.bindBuffer(k.ARRAY_BUFFER,Cb.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,Ac,Kb)}if($c){for(pc=0;pc<Yc;pc++)xc=mc[pc],Ba=3*pc,Bc[Ba]=xc.x,Bc[Ba+1]=xc.y,Bc[Ba+2]=xc.z;k.bindBuffer(k.ARRAY_BUFFER,Cb.__webglNormalBuffer);k.bufferData(k.ARRAY_BUFFER,Bc,Kb)}if(Lc){yc=
0;for(gc=Lc.length;yc<gc;yc++)if(Ia=Lc[yc],Ia.needsUpdate&&(void 0===Ia.boundTo||"vertices"===Ia.boundTo)){Ba=0;hc=Ia.value.length;if(1===Ia.size)for(gb=0;gb<hc;gb++)Ia.array[gb]=Ia.value[gb];else if(2===Ia.size)for(gb=0;gb<hc;gb++)rb=Ia.value[gb],Ia.array[Ba]=rb.x,Ia.array[Ba+1]=rb.y,Ba+=2;else if(3===Ia.size)if("c"===Ia.type)for(gb=0;gb<hc;gb++)rb=Ia.value[gb],Ia.array[Ba]=rb.r,Ia.array[Ba+1]=rb.g,Ia.array[Ba+2]=rb.b,Ba+=3;else for(gb=0;gb<hc;gb++)rb=Ia.value[gb],Ia.array[Ba]=rb.x,Ia.array[Ba+1]=
rb.y,Ia.array[Ba+2]=rb.z,Ba+=3;else if(4===Ia.size)for(gb=0;gb<hc;gb++)rb=Ia.value[gb],Ia.array[Ba]=rb.x,Ia.array[Ba+1]=rb.y,Ia.array[Ba+2]=rb.z,Ia.array[Ba+3]=rb.w,Ba+=4;k.bindBuffer(k.ARRAY_BUFFER,Ia.buffer);k.bufferData(k.ARRAY_BUFFER,Ia.array,Kb)}}}j.verticesNeedUpdate=!1;j.colorsNeedUpdate=!1;j.normalsNeedUpdate=!1;p.attributes&&s(p)}else if(i instanceof THREE.Line){p=e(i,j);n=p.attributes&&r(p);if(j.verticesNeedUpdate||j.colorsNeedUpdate||j.lineDistancesNeedUpdate||n){var Db=j,Cc=k.DYNAMIC_DRAW,
qc=void 0,rc=void 0,sc=void 0,Dc=void 0,Oa=void 0,Ec=void 0,Qc=Db.vertices,Rc=Db.colors,Sc=Db.lineDistances,ad=Qc.length,bd=Rc.length,cd=Sc.length,Fc=Db.__vertexArray,Gc=Db.__colorArray,Tc=Db.__lineDistanceArray,dd=Db.colorsNeedUpdate,ed=Db.lineDistancesNeedUpdate,Mc=Db.__webglCustomAttributesList,Hc=void 0,Uc=void 0,hb=void 0,ic=void 0,sb=void 0,Ja=void 0;if(Db.verticesNeedUpdate){for(qc=0;qc<ad;qc++)Dc=Qc[qc],Oa=3*qc,Fc[Oa]=Dc.x,Fc[Oa+1]=Dc.y,Fc[Oa+2]=Dc.z;k.bindBuffer(k.ARRAY_BUFFER,Db.__webglVertexBuffer);
k.bufferData(k.ARRAY_BUFFER,Fc,Cc)}if(dd){for(rc=0;rc<bd;rc++)Ec=Rc[rc],Oa=3*rc,Gc[Oa]=Ec.r,Gc[Oa+1]=Ec.g,Gc[Oa+2]=Ec.b;k.bindBuffer(k.ARRAY_BUFFER,Db.__webglColorBuffer);k.bufferData(k.ARRAY_BUFFER,Gc,Cc)}if(ed){for(sc=0;sc<cd;sc++)Tc[sc]=Sc[sc];k.bindBuffer(k.ARRAY_BUFFER,Db.__webglLineDistanceBuffer);k.bufferData(k.ARRAY_BUFFER,Tc,Cc)}if(Mc){Hc=0;for(Uc=Mc.length;Hc<Uc;Hc++)if(Ja=Mc[Hc],Ja.needsUpdate&&(void 0===Ja.boundTo||"vertices"===Ja.boundTo)){Oa=0;ic=Ja.value.length;if(1===Ja.size)for(hb=
0;hb<ic;hb++)Ja.array[hb]=Ja.value[hb];else if(2===Ja.size)for(hb=0;hb<ic;hb++)sb=Ja.value[hb],Ja.array[Oa]=sb.x,Ja.array[Oa+1]=sb.y,Oa+=2;else if(3===Ja.size)if("c"===Ja.type)for(hb=0;hb<ic;hb++)sb=Ja.value[hb],Ja.array[Oa]=sb.r,Ja.array[Oa+1]=sb.g,Ja.array[Oa+2]=sb.b,Oa+=3;else for(hb=0;hb<ic;hb++)sb=Ja.value[hb],Ja.array[Oa]=sb.x,Ja.array[Oa+1]=sb.y,Ja.array[Oa+2]=sb.z,Oa+=3;else if(4===Ja.size)for(hb=0;hb<ic;hb++)sb=Ja.value[hb],Ja.array[Oa]=sb.x,Ja.array[Oa+1]=sb.y,Ja.array[Oa+2]=sb.z,Ja.array[Oa+
3]=sb.w,Oa+=4;k.bindBuffer(k.ARRAY_BUFFER,Ja.buffer);k.bufferData(k.ARRAY_BUFFER,Ja.array,Cc)}}}j.verticesNeedUpdate=!1;j.colorsNeedUpdate=!1;j.lineDistancesNeedUpdate=!1;p.attributes&&s(p)}else if(i instanceof THREE.ParticleSystem){p=e(i,j);n=p.attributes&&r(p);if(j.verticesNeedUpdate||j.colorsNeedUpdate||i.sortParticles||n){var Nb=j,Nc=k.DYNAMIC_DRAW,tc=i,tb=void 0,Ob=void 0,Pb=void 0,ca=void 0,Qb=void 0,bc=void 0,Ic=Nb.vertices,Oc=Ic.length,Pc=Nb.colors,Vc=Pc.length,ec=Nb.__vertexArray,fc=Nb.__colorArray,
Vb=Nb.__sortArray,Wc=Nb.verticesNeedUpdate,Xc=Nb.colorsNeedUpdate,Wb=Nb.__webglCustomAttributesList,Eb=void 0,jc=void 0,ma=void 0,Fb=void 0,Ea=void 0,$=void 0;if(tc.sortParticles){lb.copy(xb);lb.multiply(tc.matrixWorld);for(tb=0;tb<Oc;tb++)Pb=Ic[tb],Ga.copy(Pb),Ga.applyProjection(lb),Vb[tb]=[Ga.z,tb];Vb.sort(l);for(tb=0;tb<Oc;tb++)Pb=Ic[Vb[tb][1]],ca=3*tb,ec[ca]=Pb.x,ec[ca+1]=Pb.y,ec[ca+2]=Pb.z;for(Ob=0;Ob<Vc;Ob++)ca=3*Ob,bc=Pc[Vb[Ob][1]],fc[ca]=bc.r,fc[ca+1]=bc.g,fc[ca+2]=bc.b;if(Wb){Eb=0;for(jc=
Wb.length;Eb<jc;Eb++)if($=Wb[Eb],void 0===$.boundTo||"vertices"===$.boundTo)if(ca=0,Fb=$.value.length,1===$.size)for(ma=0;ma<Fb;ma++)Qb=Vb[ma][1],$.array[ma]=$.value[Qb];else if(2===$.size)for(ma=0;ma<Fb;ma++)Qb=Vb[ma][1],Ea=$.value[Qb],$.array[ca]=Ea.x,$.array[ca+1]=Ea.y,ca+=2;else if(3===$.size)if("c"===$.type)for(ma=0;ma<Fb;ma++)Qb=Vb[ma][1],Ea=$.value[Qb],$.array[ca]=Ea.r,$.array[ca+1]=Ea.g,$.array[ca+2]=Ea.b,ca+=3;else for(ma=0;ma<Fb;ma++)Qb=Vb[ma][1],Ea=$.value[Qb],$.array[ca]=Ea.x,$.array[ca+
1]=Ea.y,$.array[ca+2]=Ea.z,ca+=3;else if(4===$.size)for(ma=0;ma<Fb;ma++)Qb=Vb[ma][1],Ea=$.value[Qb],$.array[ca]=Ea.x,$.array[ca+1]=Ea.y,$.array[ca+2]=Ea.z,$.array[ca+3]=Ea.w,ca+=4}}else{if(Wc)for(tb=0;tb<Oc;tb++)Pb=Ic[tb],ca=3*tb,ec[ca]=Pb.x,ec[ca+1]=Pb.y,ec[ca+2]=Pb.z;if(Xc)for(Ob=0;Ob<Vc;Ob++)bc=Pc[Ob],ca=3*Ob,fc[ca]=bc.r,fc[ca+1]=bc.g,fc[ca+2]=bc.b;if(Wb){Eb=0;for(jc=Wb.length;Eb<jc;Eb++)if($=Wb[Eb],$.needsUpdate&&(void 0===$.boundTo||"vertices"===$.boundTo))if(Fb=$.value.length,ca=0,1===$.size)for(ma=
0;ma<Fb;ma++)$.array[ma]=$.value[ma];else if(2===$.size)for(ma=0;ma<Fb;ma++)Ea=$.value[ma],$.array[ca]=Ea.x,$.array[ca+1]=Ea.y,ca+=2;else if(3===$.size)if("c"===$.type)for(ma=0;ma<Fb;ma++)Ea=$.value[ma],$.array[ca]=Ea.r,$.array[ca+1]=Ea.g,$.array[ca+2]=Ea.b,ca+=3;else for(ma=0;ma<Fb;ma++)Ea=$.value[ma],$.array[ca]=Ea.x,$.array[ca+1]=Ea.y,$.array[ca+2]=Ea.z,ca+=3;else if(4===$.size)for(ma=0;ma<Fb;ma++)Ea=$.value[ma],$.array[ca]=Ea.x,$.array[ca+1]=Ea.y,$.array[ca+2]=Ea.z,$.array[ca+3]=Ea.w,ca+=4}}if(Wc||
tc.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,Nb.__webglVertexBuffer),k.bufferData(k.ARRAY_BUFFER,ec,Nc);if(Xc||tc.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,Nb.__webglColorBuffer),k.bufferData(k.ARRAY_BUFFER,fc,Nc);if(Wb){Eb=0;for(jc=Wb.length;Eb<jc;Eb++)if($=Wb[Eb],$.needsUpdate||tc.sortParticles)k.bindBuffer(k.ARRAY_BUFFER,$.buffer),k.bufferData(k.ARRAY_BUFFER,$.array,Nc)}}j.verticesNeedUpdate=!1;j.colorsNeedUpdate=!1;p.attributes&&s(p)}}};this.initMaterial=function(a,b,c,d){var e,f,h,g;a.addEventListener("dispose",
uc);var i,j,l,m,n;a instanceof THREE.MeshDepthMaterial?n="depth":a instanceof THREE.MeshNormalMaterial?n="normal":a instanceof THREE.MeshBasicMaterial?n="basic":a instanceof THREE.MeshLambertMaterial?n="lambert":a instanceof THREE.MeshPhongMaterial?n="phong":a instanceof THREE.LineBasicMaterial?n="basic":a instanceof THREE.LineDashedMaterial?n="dashed":a instanceof THREE.ParticleBasicMaterial&&(n="particle_basic");if(n){var p=THREE.ShaderLib[n];a.uniforms=THREE.UniformsUtils.clone(p.uniforms);a.vertexShader=
p.vertexShader;a.fragmentShader=p.fragmentShader}var q=e=0,r=0;f=p=0;for(var s=b.length;f<s;f++)h=b[f],h.onlyShadow||(h instanceof THREE.DirectionalLight&&e++,h instanceof THREE.PointLight&&q++,h instanceof THREE.SpotLight&&r++,h instanceof THREE.HemisphereLight&&p++);f=q;h=r;g=p;r=p=0;for(q=b.length;r<q;r++)s=b[r],s.castShadow&&(s instanceof THREE.SpotLight&&p++,s instanceof THREE.DirectionalLight&&!s.shadowCascade&&p++);m=p;Bb&&d&&d.useVertexTexture?l=1024:(b=k.getParameter(k.MAX_VERTEX_UNIFORM_VECTORS),
b=Math.floor((b-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(b=Math.min(d.bones.length,b),b<d.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.bones.length+", this GPU supports just "+b+" (try OpenGL instead of ANGLE)")),l=b);a:{var r=a.fragmentShader,q=a.vertexShader,p=a.uniforms,b=a.attributes,s=a.defines,c={map:!!a.map,envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,
fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,skinning:a.skinning,maxBones:l,useVertexTexture:Bb&&d&&d.useVertexTexture,boneTextureWidth:d&&d.boneTextureWidth,boneTextureHeight:d&&d.boneTextureHeight,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,maxDirLights:e,maxPointLights:f,maxSpotLights:h,maxHemiLights:g,maxShadows:m,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow,shadowMapType:this.shadowMapType,
shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,perPixel:a.perPixel,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide},t,u,w,d=[];n?d.push(n):(d.push(r),d.push(q));for(u in s)d.push(u),d.push(s[u]);for(t in c)d.push(t),d.push(c[t]);n=d.join();t=0;for(u=V.length;t<u;t++)if(d=V[t],d.code===n){d.usedTimes++;j=d.program;break a}t="SHADOWMAP_TYPE_BASIC";c.shadowMapType===THREE.PCFShadowMap?t="SHADOWMAP_TYPE_PCF":
c.shadowMapType===THREE.PCFSoftShadowMap&&(t="SHADOWMAP_TYPE_PCF_SOFT");u=[];for(w in s)d=s[w],!1!==d&&(d="#define "+w+" "+d,u.push(d));d=u.join("\n");w=k.createProgram();u=["precision "+L+" float;",d,Gb?"#define VERTEX_TEXTURES":"",D.gammaInput?"#define GAMMA_INPUT":"",D.gammaOutput?"#define GAMMA_OUTPUT":"",D.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"","#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,
"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,"#define MAX_BONES "+c.maxBones,c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.boneTextureWidth?"#define N_BONE_PIXEL_X "+c.boneTextureWidth.toFixed(1):
"",c.boneTextureHeight?"#define N_BONE_PIXEL_Y "+c.boneTextureHeight.toFixed(1):"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals?"#define USE_MORPHNORMALS":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+t:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":
"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\n#ifdef USE_MORPHNORMALS\nattribute vec3 morphNormal0;\nattribute vec3 morphNormal1;\nattribute vec3 morphNormal2;\nattribute vec3 morphNormal3;\n#else\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
t=["precision "+L+" float;",c.bumpMap||c.normalMap?"#extension GL_OES_standard_derivatives : enable":"",d,"#define MAX_DIR_LIGHTS "+c.maxDirLights,"#define MAX_POINT_LIGHTS "+c.maxPointLights,"#define MAX_SPOT_LIGHTS "+c.maxSpotLights,"#define MAX_HEMI_LIGHTS "+c.maxHemiLights,"#define MAX_SHADOWS "+c.maxShadows,c.alphaTest?"#define ALPHATEST "+c.alphaTest:"",D.gammaInput?"#define GAMMA_INPUT":"",D.gammaOutput?"#define GAMMA_OUTPUT":"",D.physicallyBasedShading?"#define PHYSICALLY_BASED_SHADING":"",
c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.lightMap?"#define USE_LIGHTMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.vertexColors?"#define USE_COLOR":"",c.metal?"#define METAL":"",c.perPixel?"#define PHONG_PER_PIXEL":"",c.wrapAround?"#define WRAP_AROUND":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":
"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+t:"",c.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",c.shadowMapCascade?"#define SHADOWMAP_CASCADE":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");u=J("vertex",u+q);t=J("fragment",t+r);k.attachShader(w,u);k.attachShader(w,t);k.linkProgram(w);k.getProgramParameter(w,k.LINK_STATUS)||console.error("Could not initialise shader\nVALIDATE_STATUS: "+k.getProgramParameter(w,k.VALIDATE_STATUS)+", gl error ["+
k.getError()+"]");k.deleteShader(t);k.deleteShader(u);w.uniforms={};w.attributes={};var z;t="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences".split(" ");c.useVertexTexture?t.push("boneTexture"):t.push("boneGlobalMatrices");for(z in p)t.push(z);z=t;t=0;for(u=z.length;t<u;t++)p=z[t],w.uniforms[p]=k.getUniformLocation(w,p);t="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(z=0;z<c.maxMorphTargets;z++)t.push("morphTarget"+
z);for(z=0;z<c.maxMorphNormals;z++)t.push("morphNormal"+z);for(j in b)t.push(j);j=t;z=0;for(b=j.length;z<b;z++)t=j[z],w.attributes[t]=k.getAttribLocation(w,t);w.id=ea++;V.push({program:w,code:n,usedTimes:1});D.info.memory.programs=V.length;j=w}a.program=j;z=a.program.attributes;if(a.morphTargets){a.numSupportedMorphTargets=0;b="morphTarget";for(j=0;j<this.maxMorphTargets;j++)w=b+j,0<=z[w]&&a.numSupportedMorphTargets++}if(a.morphNormals){a.numSupportedMorphNormals=0;b="morphNormal";for(j=0;j<this.maxMorphNormals;j++)w=
b+j,0<=z[w]&&a.numSupportedMorphNormals++}a.uniformsList=[];for(i in a.uniforms)a.uniformsList.push([a.uniforms[i],i])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?k.disable(k.CULL_FACE):(b===THREE.FrontFaceDirectionCW?k.frontFace(k.CW):k.frontFace(k.CCW),a===THREE.CullFaceBack?k.cullFace(k.BACK):a===THREE.CullFaceFront?k.cullFace(k.FRONT):k.cullFace(k.FRONT_AND_BACK),k.enable(k.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide,a=a.side===THREE.BackSide;da!==
b&&(b?k.disable(k.CULL_FACE):k.enable(k.CULL_FACE),da=b);T!==a&&(a?k.frontFace(k.CW):k.frontFace(k.CCW),T=a)};this.setDepthTest=function(a){xa!==a&&(a?k.enable(k.DEPTH_TEST):k.disable(k.DEPTH_TEST),xa=a)};this.setDepthWrite=function(a){ab!==a&&(k.depthMask(a),ab=a)};this.setBlending=function(a,b,c,d){a!==aa&&(a===THREE.NoBlending?k.disable(k.BLEND):a===THREE.AdditiveBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.SRC_ALPHA,k.ONE)):a===THREE.SubtractiveBlending?(k.enable(k.BLEND),
k.blendEquation(k.FUNC_ADD),k.blendFunc(k.ZERO,k.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(k.enable(k.BLEND),k.blendEquation(k.FUNC_ADD),k.blendFunc(k.ZERO,k.SRC_COLOR)):a===THREE.CustomBlending?k.enable(k.BLEND):(k.enable(k.BLEND),k.blendEquationSeparate(k.FUNC_ADD,k.FUNC_ADD),k.blendFuncSeparate(k.SRC_ALPHA,k.ONE_MINUS_SRC_ALPHA,k.ONE,k.ONE_MINUS_SRC_ALPHA)),aa=a);if(a===THREE.CustomBlending){if(b!==na&&(k.blendEquation(w(b)),na=b),c!==ha||d!==X)k.blendFunc(w(c),w(d)),ha=c,X=d}else X=ha=
na=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",gc),a.__webglTexture=k.createTexture(),D.info.memory.textures++);k.activeTexture(k.TEXTURE0+b);k.bindTexture(k.TEXTURE_2D,a.__webglTexture);k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,a.flipY);k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);k.pixelStorei(k.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=0===(c.width&c.width-1)&&0===(c.height&c.height-1),e=w(a.format),
f=w(a.type);N(k.TEXTURE_2D,a,d);var h=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<h.length&&d){for(var g=0,i=h.length;g<i;g++)c=h[g],k.texImage2D(k.TEXTURE_2D,g,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else k.texImage2D(k.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture){g=0;for(i=h.length;g<i;g++)c=h[g],k.compressedTexImage2D(k.TEXTURE_2D,g,e,c.width,c.height,0,c.data)}else if(0<h.length&&d){g=0;for(i=h.length;g<i;g++)c=h[g],k.texImage2D(k.TEXTURE_2D,
g,e,e,f,c);a.generateMipmaps=!1}else k.texImage2D(k.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&k.generateMipmap(k.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else k.activeTexture(k.TEXTURE0+b),k.bindTexture(k.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===a.depthBuffer&&(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",mc);a.__webglTexture=
k.createTexture();D.info.memory.textures++;var c=0===(a.width&a.width-1)&&0===(a.height&a.height-1),d=w(a.format),e=w(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];k.bindTexture(k.TEXTURE_CUBE_MAP,a.__webglTexture);N(k.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=k.createFramebuffer();a.__webglRenderbuffer[f]=k.createRenderbuffer();k.texImage2D(k.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var h=a,g=k.TEXTURE_CUBE_MAP_POSITIVE_X+f;k.bindFramebuffer(k.FRAMEBUFFER,
a.__webglFramebuffer[f]);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,g,h.__webglTexture,0);y(a.__webglRenderbuffer[f],a)}c&&k.generateMipmap(k.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=k.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:k.createRenderbuffer(),k.bindTexture(k.TEXTURE_2D,a.__webglTexture),N(k.TEXTURE_2D,a,c),k.texImage2D(k.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=k.TEXTURE_2D,k.bindFramebuffer(k.FRAMEBUFFER,a.__webglFramebuffer),
k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_ATTACHMENT,k.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&k.framebufferRenderbuffer(k.FRAMEBUFFER,k.DEPTH_STENCIL_ATTACHMENT,k.RENDERBUFFER,a.__webglRenderbuffer):y(a.__webglRenderbuffer,a),c&&k.generateMipmap(k.TEXTURE_2D);b?k.bindTexture(k.TEXTURE_CUBE_MAP,null):k.bindTexture(k.TEXTURE_2D,null);k.bindRenderbuffer(k.RENDERBUFFER,
null);k.bindFramebuffer(k.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=Qa,a=Xa,d=ua,e=Ra);b!==eb&&(k.bindFramebuffer(k.FRAMEBUFFER,b),k.viewport(d,e,c,a),eb=b);Xb=c;Jb=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;a.shareDepthFrom=this.shareDepthFrom;
return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.RenderableVertex=function(){this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};THREE.RenderableFace3=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.centroidModel=new THREE.Vector3;this.normalModel=new THREE.Vector3;this.normalModelView=new THREE.Vector3;this.vertexNormalsLength=0;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsModelView=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.material=this.color=null;this.uvs=[[]];this.z=
0};THREE.RenderableFace4=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.v4=new THREE.RenderableVertex;this.centroidModel=new THREE.Vector3;this.normalModel=new THREE.Vector3;this.normalModelView=new THREE.Vector3;this.vertexNormalsLength=0;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsModelView=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,
new THREE.Vector3];this.material=this.color=null;this.uvs=[[]];this.z=0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};THREE.RenderableParticle=function(){this.id=0;this.object=null;this.z=this.y=this.x=0;this.rotation=null;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};THREE.GeometryUtils={merge:function(a,b,c){var d,e,f=a.vertices.length,h=b instanceof THREE.Mesh?b.geometry:b,g=a.vertices,i=h.vertices,j=a.faces,l=h.faces,a=a.faceVertexUvs[0],h=h.faceVertexUvs[0];void 0===c&&(c=0);b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,e=(new THREE.Matrix3).getNormalMatrix(d));for(var b=0,m=i.length;b<m;b++){var n=i[b].clone();d&&n.applyMatrix4(d);g.push(n)}b=0;for(m=l.length;b<m;b++){var n=l[b],p,t,q=n.vertexNormals,r=n.vertexColors;n instanceof
THREE.Face3?p=new THREE.Face3(n.a+f,n.b+f,n.c+f):n instanceof THREE.Face4&&(p=new THREE.Face4(n.a+f,n.b+f,n.c+f,n.d+f));p.normal.copy(n.normal);e&&p.normal.applyMatrix3(e).normalize();g=0;for(i=q.length;g<i;g++)t=q[g].clone(),e&&t.applyMatrix3(e).normalize(),p.vertexNormals.push(t);p.color.copy(n.color);g=0;for(i=r.length;g<i;g++)t=r[g],p.vertexColors.push(t.clone());p.materialIndex=n.materialIndex+c;p.centroid.copy(n.centroid);d&&p.centroid.applyMatrix4(d);j.push(p)}b=0;for(m=h.length;b<m;b++){c=
h[b];d=[];g=0;for(i=c.length;g<i;g++)d.push(new THREE.Vector2(c[g].x,c[g].y));a.push(d)}},removeMaterials:function(a,b){for(var c={},d=0,e=b.length;d<e;d++)c[b[d]]=!0;for(var f,h=[],d=0,e=a.faces.length;d<e;d++)f=a.faces[d],f.materialIndex in c||h.push(f);a.faces=h},randomPointInTriangle:function(){var a=new THREE.Vector3;return function(b,c,d){var e=new THREE.Vector3,f=THREE.Math.random16(),h=THREE.Math.random16();1<f+h&&(f=1-f,h=1-h);var g=1-f-h;e.copy(b);e.multiplyScalar(f);a.copy(c);a.multiplyScalar(h);
e.add(a);a.copy(d);a.multiplyScalar(g);e.add(a);return e}}(),randomPointInFace:function(a,b,c){var d,e,f;if(a instanceof THREE.Face3)return d=b.vertices[a.a],e=b.vertices[a.b],f=b.vertices[a.c],THREE.GeometryUtils.randomPointInTriangle(d,e,f);if(a instanceof THREE.Face4){d=b.vertices[a.a];e=b.vertices[a.b];f=b.vertices[a.c];var b=b.vertices[a.d],h;c?a._area1&&a._area2?(c=a._area1,h=a._area2):(c=THREE.GeometryUtils.triangleArea(d,e,b),h=THREE.GeometryUtils.triangleArea(e,f,b),a._area1=c,a._area2=h):
(c=THREE.GeometryUtils.triangleArea(d,e,b),h=THREE.GeometryUtils.triangleArea(e,f,b));return THREE.Math.random16()*(c+h)<c?THREE.GeometryUtils.randomPointInTriangle(d,e,b):THREE.GeometryUtils.randomPointInTriangle(e,f,b)}},randomPointsInGeometry:function(a,b){function c(a){function b(c,d){if(d<c)return c;var e=c+Math.floor((d-c)/2);return j[e]>a?b(c,e-1):j[e]<a?b(e+1,d):e}return b(0,j.length-1)}var d,e,f=a.faces,h=a.vertices,g=f.length,i=0,j=[],l,m,n,p;for(e=0;e<g;e++)d=f[e],d instanceof THREE.Face3?
(l=h[d.a],m=h[d.b],n=h[d.c],d._area=THREE.GeometryUtils.triangleArea(l,m,n)):d instanceof THREE.Face4&&(l=h[d.a],m=h[d.b],n=h[d.c],p=h[d.d],d._area1=THREE.GeometryUtils.triangleArea(l,m,p),d._area2=THREE.GeometryUtils.triangleArea(m,n,p),d._area=d._area1+d._area2),i+=d._area,j[e]=i;d=[];for(e=0;e<b;e++)h=THREE.Math.random16()*i,h=c(h),d[e]=THREE.GeometryUtils.randomPointInFace(f[h],a,!0);return d},triangleArea:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){a.subVectors(d,
c);b.subVectors(e,c);a.cross(b);return 0.5*a.length()}}(),center:function(a){a.computeBoundingBox();var b=a.boundingBox,c=new THREE.Vector3;c.addVectors(b.min,b.max);c.multiplyScalar(-0.5);a.applyMatrix((new THREE.Matrix4).makeTranslation(c.x,c.y,c.z));a.computeBoundingBox();return c},triangulateQuads:function(a){var b,c,d,e,f=[],h=[],g=[];b=0;for(c=a.faceUvs.length;b<c;b++)h[b]=[];b=0;for(c=a.faceVertexUvs.length;b<c;b++)g[b]=[];b=0;for(c=a.faces.length;b<c;b++)if(d=a.faces[b],d instanceof THREE.Face4){e=
d.a;var i=d.b,j=d.c,l=d.d,m=new THREE.Face3,n=new THREE.Face3;m.color.copy(d.color);n.color.copy(d.color);m.materialIndex=d.materialIndex;n.materialIndex=d.materialIndex;m.a=e;m.b=i;m.c=l;n.a=i;n.b=j;n.c=l;4===d.vertexColors.length&&(m.vertexColors[0]=d.vertexColors[0].clone(),m.vertexColors[1]=d.vertexColors[1].clone(),m.vertexColors[2]=d.vertexColors[3].clone(),n.vertexColors[0]=d.vertexColors[1].clone(),n.vertexColors[1]=d.vertexColors[2].clone(),n.vertexColors[2]=d.vertexColors[3].clone());f.push(m,
n);d=0;for(e=a.faceVertexUvs.length;d<e;d++)a.faceVertexUvs[d].length&&(m=a.faceVertexUvs[d][b],i=m[1],j=m[2],l=m[3],m=[m[0].clone(),i.clone(),l.clone()],i=[i.clone(),j.clone(),l.clone()],g[d].push(m,i));d=0;for(e=a.faceUvs.length;d<e;d++)a.faceUvs[d].length&&(i=a.faceUvs[d][b],h[d].push(i,i))}else{f.push(d);d=0;for(e=a.faceUvs.length;d<e;d++)h[d].push(a.faceUvs[d][b]);d=0;for(e=a.faceVertexUvs.length;d<e;d++)g[d].push(a.faceVertexUvs[d][b])}a.faces=f;a.faceUvs=h;a.faceVertexUvs=g;a.computeCentroids();
a.computeFaceNormals();a.computeVertexNormals();a.hasTangents&&a.computeTangents()},setMaterialIndex:function(a,b,c,d){a=a.faces;d=d||a.length-1;for(c=c||0;c<=d;c++)a[c].materialIndex=b}};THREE.ImageUtils={crossOrigin:"anonymous",loadTexture:function(a,b,c){var d=new Image,e=new THREE.Texture(d,b),b=new THREE.ImageLoader;b.crossOrigin=this.crossOrigin;b.load(a,function(a){e.image=a;e.needsUpdate=!0;c&&c(e)});e.sourceFile=a;return e},loadCompressedTexture:function(a,b,c,d){var e=new THREE.CompressedTexture;e.mapping=b;var f=new XMLHttpRequest;f.onload=function(){var a=THREE.ImageUtils.parseDDS(f.response,!0);e.format=a.format;e.mipmaps=a.mipmaps;e.image.width=a.width;e.image.height=
a.height;e.generateMipmaps=!1;e.needsUpdate=!0;c&&c(e)};f.onerror=d;f.open("GET",a,!0);f.responseType="arraybuffer";f.send(null);return e},loadTextureCube:function(a,b,c,d){var e=[];e.loadCount=0;var f=new THREE.Texture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;for(var b=0,h=a.length;b<h;++b){var g=new Image;e[b]=g;g.onload=function(){e.loadCount+=1;6===e.loadCount&&(f.needsUpdate=!0,c&&c(f))};g.onerror=d;g.crossOrigin=this.crossOrigin;g.src=a[b]}return f},loadCompressedTextureCube:function(a,
b,c,d){var e=[];e.loadCount=0;var f=new THREE.CompressedTexture;f.image=e;void 0!==b&&(f.mapping=b);f.flipY=!1;f.generateMipmaps=!1;b=function(a,b){return function(){var d=THREE.ImageUtils.parseDDS(a.response,!0);b.format=d.format;b.mipmaps=d.mipmaps;b.width=d.width;b.height=d.height;e.loadCount+=1;6===e.loadCount&&(f.format=d.format,f.needsUpdate=!0,c&&c(f))}};if(a instanceof Array)for(var h=0,g=a.length;h<g;++h){var i={};e[h]=i;var j=new XMLHttpRequest;j.onload=b(j,i);j.onerror=d;i=a[h];j.open("GET",
i,!0);j.responseType="arraybuffer";j.send(null)}else j=new XMLHttpRequest,j.onload=function(){var a=THREE.ImageUtils.parseDDS(j.response,!0);if(a.isCubemap){for(var b=a.mipmaps.length/a.mipmapCount,d=0;d<b;d++){e[d]={mipmaps:[]};for(var h=0;h<a.mipmapCount;h++)e[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+h]),e[d].format=a.format,e[d].width=a.width,e[d].height=a.height}f.format=a.format;f.needsUpdate=!0;c&&c(f)}},j.onerror=d,j.open("GET",a,!0),j.responseType="arraybuffer",j.send(null);return f},parseDDS:function(a,
b){function c(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}var d={mipmaps:[],width:0,height:0,format:null,mipmapCount:1},e=c("DXT1"),f=c("DXT3"),h=c("DXT5"),g=new Int32Array(a,0,31);if(542327876!==g[0])return console.error("ImageUtils.parseDDS(): Invalid magic number in DDS header"),d;if(!g[20]&4)return console.error("ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code"),d;var i=g[21];switch(i){case e:e=8;d.format=THREE.RGB_S3TC_DXT1_Format;
break;case f:e=16;d.format=THREE.RGBA_S3TC_DXT3_Format;break;case h:e=16;d.format=THREE.RGBA_S3TC_DXT5_Format;break;default:return console.error("ImageUtils.parseDDS(): Unsupported FourCC code: ",String.fromCharCode(i&255,i>>8&255,i>>16&255,i>>24&255)),d}d.mipmapCount=1;g[2]&131072&&!1!==b&&(d.mipmapCount=Math.max(1,g[7]));d.isCubemap=g[28]&512?!0:!1;d.width=g[4];d.height=g[3];for(var g=g[1]+4,f=d.width,h=d.height,i=d.isCubemap?6:1,j=0;j<i;j++){for(var l=0;l<d.mipmapCount;l++){var m=Math.max(4,f)/
4*Math.max(4,h)/4*e,n={data:new Uint8Array(a,g,m),width:f,height:h};d.mipmaps.push(n);g+=m;f=Math.max(0.5*f,1);h=Math.max(0.5*h,1)}f=d.width;h=d.height}return d},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]},b=b|1,d=a.width,e=a.height,f=document.createElement("canvas");f.width=d;f.height=e;var h=f.getContext("2d");h.drawImage(a,0,0);for(var g=h.getImageData(0,0,d,e).data,i=h.createImageData(d,e),j=i.data,l=0;l<d;l++)for(var m=
0;m<e;m++){var n=0>m-1?0:m-1,p=m+1>e-1?e-1:m+1,t=0>l-1?0:l-1,q=l+1>d-1?d-1:l+1,r=[],s=[0,0,g[4*(m*d+l)]/255*b];r.push([-1,0,g[4*(m*d+t)]/255*b]);r.push([-1,-1,g[4*(n*d+t)]/255*b]);r.push([0,-1,g[4*(n*d+l)]/255*b]);r.push([1,-1,g[4*(n*d+q)]/255*b]);r.push([1,0,g[4*(m*d+q)]/255*b]);r.push([1,1,g[4*(p*d+q)]/255*b]);r.push([0,1,g[4*(p*d+l)]/255*b]);r.push([-1,1,g[4*(p*d+t)]/255*b]);n=[];t=r.length;for(p=0;p<t;p++){var q=r[p],u=r[(p+1)%t],q=[q[0]-s[0],q[1]-s[1],q[2]-s[2]],u=[u[0]-s[0],u[1]-s[1],u[2]-s[2]];
n.push(c([q[1]*u[2]-q[2]*u[1],q[2]*u[0]-q[0]*u[2],q[0]*u[1]-q[1]*u[0]]))}r=[0,0,0];for(p=0;p<n.length;p++)r[0]+=n[p][0],r[1]+=n[p][1],r[2]+=n[p][2];r[0]/=n.length;r[1]/=n.length;r[2]/=n.length;s=4*(m*d+l);j[s]=255*((r[0]+1)/2)|0;j[s+1]=255*((r[1]+1)/2)|0;j[s+2]=255*r[2]|0;j[s+3]=255}h.putImageData(i,0,0);return f},generateDataTexture:function(a,b,c){for(var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),h=Math.floor(255*c.g),c=Math.floor(255*c.b),g=0;g<d;g++)e[3*g]=f,e[3*g+1]=h,e[3*g+2]=c;a=new THREE.DataTexture(e,
a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){return this.faces[this.face][this.weight][this.style]},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=a},drawText:function(a){for(var b=this.getFace(),c=this.size/b.resolution,d=
0,e=String(a).split(""),f=e.length,h=[],a=0;a<f;a++){var g=new THREE.Path,g=this.extractGlyphPoints(e[a],b,c,d,g),d=d+g.offset;h.push(g.path)}return{paths:h,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],h,g,i,j,l,m,n,p,t,q,r,s=b.glyphs[a]||b.glyphs["?"];if(s){if(s.o){b=s._cachedOutline||(s._cachedOutline=s.o.split(" "));j=b.length;for(a=0;a<j;)switch(i=b[a++],i){case "m":i=b[a++]*c+d;l=b[a++]*c;e.moveTo(i,l);break;case "l":i=b[a++]*c+d;l=b[a++]*c;e.lineTo(i,l);break;case "q":i=b[a++]*
c+d;l=b[a++]*c;p=b[a++]*c+d;t=b[a++]*c;e.quadraticCurveTo(p,t,i,l);if(h=f[f.length-1]){m=h.x;n=h.y;h=1;for(g=this.divisions;h<=g;h++){var u=h/g;THREE.Shape.Utils.b2(u,m,p,i);THREE.Shape.Utils.b2(u,n,t,l)}}break;case "b":if(i=b[a++]*c+d,l=b[a++]*c,p=b[a++]*c+d,t=b[a++]*-c,q=b[a++]*c+d,r=b[a++]*-c,e.bezierCurveTo(i,l,p,t,q,r),h=f[f.length-1]){m=h.x;n=h.y;h=1;for(g=this.divisions;h<=g;h++)u=h/g,THREE.Shape.Utils.b3(u,m,p,q,i),THREE.Shape.Utils.b3(u,n,t,r,l)}}}return{offset:s.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){var b=b||{},c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,h=0;h<b;f=h++)e+=a[f].x*a[h].y-a[h].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],h=[],g=[],i,j,l;if(0<b(a))for(j=0;j<e;j++)h[j]=j;else for(j=0;j<e;j++)h[j]=e-1-j;var m=2*e;for(j=e-1;2<e;){if(0>=m--){console.log("Warning, unable to triangulate polygon!");break}i=j;e<=i&&(i=0);j=i+1;e<=j&&(j=0);l=j+1;e<=l&&(l=0);var n;a:{var p=n=void 0,t=void 0,q=void 0,r=void 0,s=void 0,u=void 0,z=void 0,C=
void 0,p=a[h[i]].x,t=a[h[i]].y,q=a[h[j]].x,r=a[h[j]].y,s=a[h[l]].x,u=a[h[l]].y;if(1E-10>(q-p)*(u-t)-(r-t)*(s-p))n=!1;else{var F=void 0,H=void 0,I=void 0,G=void 0,A=void 0,K=void 0,B=void 0,J=void 0,N=void 0,y=void 0,N=J=B=C=z=void 0,F=s-q,H=u-r,I=p-s,G=t-u,A=q-p,K=r-t;for(n=0;n<e;n++)if(!(n===i||n===j||n===l))if(z=a[h[n]].x,C=a[h[n]].y,B=z-p,J=C-t,N=z-q,y=C-r,z-=s,C-=u,N=F*y-H*N,B=A*J-K*B,J=I*C-G*z,0<=N&&0<=J&&0<=B){n=!1;break a}n=!0}}if(n){f.push([a[h[i]],a[h[j]],a[h[l]]]);g.push([h[i],h[j],h[l]]);
i=j;for(l=j+1;l<e;i++,l++)h[i]=h[l];e--;m=2*e}}return d?g:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};
THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};
THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var h=0,g=e-1,i;h<=g;)if(d=Math.floor(h+(g-h)/2),i=c[d]-f,0>i)h=d+1;else if(0<i)g=d-1;else{g=d;break}d=g;if(c[d]==f)return d/(e-1);h=c[d];return c=(d+(f-h)/(c[d+1]-h))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4,a=a+1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){var a=0.5*(c-a),d=0.5*(d-b),f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};
THREE.CurvePath.prototype.getPoint=function(a){for(var b=a*this.getLength(),c=this.getCurveLengths(),a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,h;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var g,i,j,l,m=a[0]instanceof THREE.Vector3;l=m?new THREE.Vector3:new THREE.Vector2;i=0;for(j=a.length;i<j;i++)g=a[i],g.x>b?b=g.x:g.x<e&&(e=g.x),g.y>c?c=g.y:g.y<f&&(f=g.y),m&&(g.z>d?d=g.z:g.z<h&&(h=g.z)),l.add(g);a={minX:e,minY:f,maxX:b,maxY:c,centroid:l.divideScalar(j)};m&&(a.maxZ=d,a.minZ=h);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,h,g,i;d=0;for(e=a.length;d<e;d++)f=a[d],h=f.x,g=f.y,i=h/c.maxX,i=b.getUtoTmapping(i,h),h=b.getPoint(i),g=b.getNormalVector(i).multiplyScalar(g),f.x=h.x+g.x,f.y=h.y+g.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var h=Array.prototype.slice.call(arguments),g=this.actions[this.actions.length-1].args,g=new THREE.CubicBezierCurve(new THREE.Vector2(g[g.length-2],g[g.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(g);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:h})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var h=this.actions[this.actions.length-1].args;this.absarc(a+h[h.length-2],b+h[h.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,h){var g=this.actions[this.actions.length-1].args;this.absellipse(a+g[g.length-2],b+g[g.length-1],c,d,e,f,h)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,h){var g=Array.prototype.slice.call(arguments),i=new THREE.EllipseCurve(a,b,c,d,e,f,h);this.curves.push(i);i=i.getPoint(h?1:0);g.push(i.x);g.push(i.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:g})};
THREE.Path.prototype.getSpacedPoints=function(a){a||(a=40);for(var b=[],c=0;c<a;c++)b.push(this.getPoint(c/a));return b};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);var a=a||12,c=[],d,e,f,h,g,i,j,l,m,n,p,t,q;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],h=f.action,f=f.args,h){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:g=f[2];i=f[3];m=f[0];n=f[1];0<c.length?(h=c[c.length-1],p=h.x,
t=h.y):(h=this.actions[d-1].args,p=h[h.length-2],t=h[h.length-1]);for(f=1;f<=a;f++)q=f/a,h=THREE.Shape.Utils.b2(q,p,m,g),q=THREE.Shape.Utils.b2(q,t,n,i),c.push(new THREE.Vector2(h,q));break;case THREE.PathActions.BEZIER_CURVE_TO:g=f[4];i=f[5];m=f[0];n=f[1];j=f[2];l=f[3];0<c.length?(h=c[c.length-1],p=h.x,t=h.y):(h=this.actions[d-1].args,p=h[h.length-2],t=h[h.length-1]);for(f=1;f<=a;f++)q=f/a,h=THREE.Shape.Utils.b3(q,p,m,j,g),q=THREE.Shape.Utils.b3(q,t,n,l,i),c.push(new THREE.Vector2(h,q));break;case THREE.PathActions.CSPLINE_THRU:h=
this.actions[d-1].args;q=[new THREE.Vector2(h[h.length-2],h[h.length-1])];h=a*f[0].length;q=q.concat(f[0]);q=new THREE.SplineCurve(q);for(f=1;f<=h;f++)c.push(q.getPointAt(f/h));break;case THREE.PathActions.ARC:g=f[0];i=f[1];n=f[2];j=f[3];h=f[4];m=!!f[5];p=h-j;t=2*a;for(f=1;f<=t;f++)q=f/t,m||(q=1-q),q=j+q*p,h=g+n*Math.cos(q),q=i+n*Math.sin(q),c.push(new THREE.Vector2(h,q));break;case THREE.PathActions.ELLIPSE:g=f[0];i=f[1];n=f[2];l=f[3];j=f[4];h=f[5];m=!!f[6];p=h-j;t=2*a;for(f=1;f<=t;f++)q=f/t,m||
(q=1-q),q=j+q*p,h=g+n*Math.cos(q),q=i+l*Math.sin(q),c.push(new THREE.Vector2(h,q))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a){var b,c,d,e,f=[],h=new THREE.Path;b=0;for(c=this.actions.length;b<c;b++)d=this.actions[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=h.actions.length&&(f.push(h),h=new THREE.Path),h[d].apply(h,e);0!=h.actions.length&&f.push(h);if(0==f.length)return[];var g;e=[];if(1==f.length)return d=f[0],g=new THREE.Shape,g.actions=d.actions,g.curves=d.curves,e.push(g),e;b=!THREE.Shape.Utils.isClockWise(f[0].getPoints());if(a?!b:b){g=new THREE.Shape;b=0;for(c=
f.length;b<c;b++)d=f[b],h=THREE.Shape.Utils.isClockWise(d.getPoints()),(h=a?!h:h)?(g.actions=d.actions,g.curves=d.curves,e.push(g),g=new THREE.Shape):g.holes.push(d)}else{g=void 0;b=0;for(c=f.length;b<c;b++)d=f[b],h=THREE.Shape.Utils.isClockWise(d.getPoints()),(h=a?!h:h)?(g&&e.push(g),g=new THREE.Shape,g.actions=d.actions,g.curves=d.curves):g.holes.push(d);e.push(g)}return e};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};
THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};
THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={removeHoles:function(a,b){var c=a.concat(),d=c.concat(),e,f,h,g,i,j,l,m,n,p,t=[];for(i=0;i<b.length;i++){j=b[i];Array.prototype.push.apply(d,j);f=Number.POSITIVE_INFINITY;for(e=0;e<j.length;e++){n=j[e];p=[];for(m=0;m<c.length;m++)l=c[m],l=n.distanceToSquared(l),p.push(l),l<f&&(f=l,h=e,g=m)}e=0<=g-1?g-1:c.length-1;f=0<=h-1?h-1:j.length-1;var q=[j[h],c[g],c[e]];m=THREE.FontUtils.Triangulate.area(q);var r=[j[h],j[f],c[g]];n=THREE.FontUtils.Triangulate.area(r);p=g;l=h;g+=1;h+=-1;0>
g&&(g+=c.length);g%=c.length;0>h&&(h+=j.length);h%=j.length;e=0<=g-1?g-1:c.length-1;f=0<=h-1?h-1:j.length-1;q=[j[h],c[g],c[e]];q=THREE.FontUtils.Triangulate.area(q);r=[j[h],j[f],c[g]];r=THREE.FontUtils.Triangulate.area(r);m+n>q+r&&(g=p,h=l,0>g&&(g+=c.length),g%=c.length,0>h&&(h+=j.length),h%=j.length,e=0<=g-1?g-1:c.length-1,f=0<=h-1?h-1:j.length-1);m=c.slice(0,g);n=c.slice(g);p=j.slice(h);l=j.slice(0,h);f=[j[h],j[f],c[g]];t.push([j[h],c[g],c[e]]);t.push(f);c=m.concat(p).concat(l).concat(n)}return{shape:c,
isolatedPts:t,allpoints:d}},triangulateShape:function(a,b){var c=THREE.Shape.Utils.removeHoles(a,b),d=c.allpoints,e=c.isolatedPts,c=THREE.FontUtils.Triangulate(c.shape,!1),f,h,g,i,j={};f=0;for(h=d.length;f<h;f++)i=d[f].x+":"+d[f].y,void 0!==j[i]&&console.log("Duplicate point",i),j[i]=f;f=0;for(h=c.length;f<h;f++){g=c[f];for(d=0;3>d;d++)i=g[d].x+":"+g[d].y,i=j[i],void 0!==i&&(g[d]=i)}f=0;for(h=e.length;f<h;f++){g=e[f];for(d=0;3>d;d++)i=g[d].x+":"+g[d].y,i=j[i],void 0!==i&&(g[d]=i)}return c.concat(e)},
isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,b)+this.b3p1(a,c)+this.b3p2(a,d)+
this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(){return this.v2.clone().sub(this.v1).normalize()};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};
THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};THREE.EllipseCurve=function(a,b,c,d,e,f,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=h};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.getPoint=function(a){var b=this.aEndAngle-this.aStartAngle;this.aClockwise||(a=1-a);b=this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e,a=(d.length-1)*a;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],h=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,h.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,h.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,h.z,c.z,a);return b});THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});THREE.AnimationHandler=function(){var a=[],b={},c={update:function(b){for(var c=0;c<a.length;c++)a[c].update(b)},addToUpdate:function(b){-1===a.indexOf(b)&&a.push(b)},removeFromUpdate:function(b){b=a.indexOf(b);-1!==b&&a.splice(b,1)},add:function(a){void 0!==b[a.name]&&console.log("THREE.AnimationHandler.add: Warning! "+a.name+" already exists in library. Overwriting.");b[a.name]=a;if(!0!==a.initialized){for(var c=0;c<a.hierarchy.length;c++){for(var d=0;d<a.hierarchy[c].keys.length;d++)if(0>a.hierarchy[c].keys[d].time&&
(a.hierarchy[c].keys[d].time=0),void 0!==a.hierarchy[c].keys[d].rot&&!(a.hierarchy[c].keys[d].rot instanceof THREE.Quaternion)){var g=a.hierarchy[c].keys[d].rot;a.hierarchy[c].keys[d].rot=new THREE.Quaternion(g[0],g[1],g[2],g[3])}if(a.hierarchy[c].keys.length&&void 0!==a.hierarchy[c].keys[0].morphTargets){g={};for(d=0;d<a.hierarchy[c].keys.length;d++)for(var i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++){var j=a.hierarchy[c].keys[d].morphTargets[i];g[j]=-1}a.hierarchy[c].usedMorphTargets=g;
for(d=0;d<a.hierarchy[c].keys.length;d++){var l={};for(j in g){for(i=0;i<a.hierarchy[c].keys[d].morphTargets.length;i++)if(a.hierarchy[c].keys[d].morphTargets[i]===j){l[j]=a.hierarchy[c].keys[d].morphTargetsInfluences[i];break}i===a.hierarchy[c].keys[d].morphTargets.length&&(l[j]=0)}a.hierarchy[c].keys[d].morphTargetsInfluences=l}}for(d=1;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].time===a.hierarchy[c].keys[d-1].time&&(a.hierarchy[c].keys.splice(d,1),d--);for(d=0;d<a.hierarchy[c].keys.length;d++)a.hierarchy[c].keys[d].index=
d}d=parseInt(a.length*a.fps,10);a.JIT={};a.JIT.hierarchy=[];for(c=0;c<a.hierarchy.length;c++)a.JIT.hierarchy.push(Array(d));a.initialized=!0}},get:function(a){if("string"===typeof a){if(b[a])return b[a];console.log("THREE.AnimationHandler.get: Couldn't find animation "+a);return null}},parse:function(a){var b=[];if(a instanceof THREE.SkinnedMesh)for(var c=0;c<a.bones.length;c++)b.push(a.bones[c]);else d(a,b);return b}},d=function(a,b){b.push(a);for(var c=0;c<a.children.length;c++)d(a.children[c],
b)};c.LINEAR=0;c.CATMULLROM=1;c.CATMULLROM_FORWARD=2;return c}();THREE.Animation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=this.isPaused=!0;this.interpolationType=void 0!==c?c:THREE.AnimationHandler.LINEAR;this.points=[];this.target=new THREE.Vector3};
THREE.Animation.prototype.play=function(a,b){if(!1===this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;var c,d=this.hierarchy.length,e;for(c=0;c<d;c++){e=this.hierarchy[c];e.matrixAutoUpdate=!0;void 0===e.animationCache&&(e.animationCache={},e.animationCache.prevKey={pos:0,rot:0,scl:0},e.animationCache.nextKey={pos:0,rot:0,scl:0},e.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix);var f=e.animationCache.prevKey;e=e.animationCache.nextKey;
f.pos=this.data.hierarchy[c].keys[0];f.rot=this.data.hierarchy[c].keys[0];f.scl=this.data.hierarchy[c].keys[0];e.pos=this.getNextKeyWith("pos",c,1);e.rot=this.getNextKeyWith("rot",c,1);e.scl=this.getNextKeyWith("scl",c,1)}this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.Animation.prototype.pause=function(){!0===this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.Animation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this)};
THREE.Animation.prototype.update=function(a){if(!1!==this.isPlaying){var b=["pos","rot","scl"],c,d,e,f,h,g,i,j,l;l=this.currentTime+=a*this.timeScale;j=this.currentTime%=this.data.length;parseInt(Math.min(j*this.data.fps,this.data.length*this.data.fps),10);for(var m=0,n=this.hierarchy.length;m<n;m++){a=this.hierarchy[m];i=a.animationCache;for(var p=0;3>p;p++){c=b[p];h=i.prevKey[c];g=i.nextKey[c];if(g.time<=l){if(j<l)if(this.loop){h=this.data.hierarchy[m].keys[0];for(g=this.getNextKeyWith(c,m,1);g.time<
j;)h=g,g=this.getNextKeyWith(c,m,g.index+1)}else{this.stop();return}else{do h=g,g=this.getNextKeyWith(c,m,g.index+1);while(g.time<j)}i.prevKey[c]=h;i.nextKey[c]=g}a.matrixAutoUpdate=!0;a.matrixWorldNeedsUpdate=!0;d=(j-h.time)/(g.time-h.time);e=h[c];f=g[c];if(0>d||1<d)console.log("THREE.Animation.update: Warning! Scale out of bounds:"+d+" on bone "+m),d=0>d?0:1;if("pos"===c)if(c=a.position,this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+
(f[2]-e[2])*d;else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)this.points[0]=this.getPrevKeyWith("pos",m,h.index-1).pos,this.points[1]=e,this.points[2]=f,this.points[3]=this.getNextKeyWith("pos",m,g.index+1).pos,d=0.33*d+0.33,e=this.interpolateCatmullRom(this.points,d),c.x=e[0],c.y=e[1],c.z=e[2],this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(d=this.interpolateCatmullRom(this.points,1.01*d),
this.target.set(d[0],d[1],d[2]),this.target.sub(c),this.target.y=0,this.target.normalize(),d=Math.atan2(this.target.x,this.target.z),a.rotation.set(0,d,0))}else"rot"===c?THREE.Quaternion.slerp(e,f,a.quaternion,d):"scl"===c&&(c=a.scale,c.x=e[0]+(f[0]-e[0])*d,c.y=e[1]+(f[1]-e[1])*d,c.z=e[2]+(f[2]-e[2])*d)}}}};
THREE.Animation.prototype.interpolateCatmullRom=function(a,b){var c=[],d=[],e,f,h,g,i,j;e=(a.length-1)*b;f=Math.floor(e);e-=f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>a.length-2?f:f+1;c[3]=f>a.length-3?f:f+2;f=a[c[0]];g=a[c[1]];i=a[c[2]];j=a[c[3]];c=e*e;h=e*c;d[0]=this.interpolate(f[0],g[0],i[0],j[0],e,c,h);d[1]=this.interpolate(f[1],g[1],i[1],j[1],e,c,h);d[2]=this.interpolate(f[2],g[2],i[2],j[2],e,c,h);return d};
THREE.Animation.prototype.interpolate=function(a,b,c,d,e,f,h){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*h+(-3*(b-c)-2*a-d)*f+a*e+b};THREE.Animation.prototype.getNextKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){for(var d=this.data.hierarchy[b].keys,c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};THREE.KeyFrameAnimation=function(a,b,c){this.root=a;this.data=THREE.AnimationHandler.get(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;this.JITCompile=void 0!==c?c:!0;a=0;for(b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],h=this.getNextKeyWith(f,a,0);h&&h.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a,b){if(!this.isPlaying){this.isPlaying=!0;this.loop=void 0!==a?a:!0;this.currentTime=void 0!==b?b:0;this.startTimeMs=b;this.startTime=1E7;this.endTime=-this.startTime;var c,d=this.hierarchy.length,e,f;for(c=0;c<d;c++)e=this.hierarchy[c],f=this.data.hierarchy[c],void 0===f.animationCache&&(f.animationCache={},f.animationCache.prevKey=null,f.animationCache.nextKey=null,f.animationCache.originalMatrix=e instanceof THREE.Bone?e.skinMatrix:e.matrix),e=this.data.hierarchy[c].keys,
e.length&&(f.animationCache.prevKey=e[0],f.animationCache.nextKey=e[1],this.startTime=Math.min(e[0].time,this.startTime),this.endTime=Math.max(e[e.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.addToUpdate(this)};THREE.KeyFrameAnimation.prototype.pause=function(){this.isPaused?THREE.AnimationHandler.addToUpdate(this):THREE.AnimationHandler.removeFromUpdate(this);this.isPaused=!this.isPaused};
THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.removeFromUpdate(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;b instanceof THREE.Bone?(d.copy(b.skinMatrix),b.skinMatrix=d):(d.copy(b.matrix),b.matrix=d);delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(this.isPlaying){var b,c,d,e,f=this.data.JIT.hierarchy,h,g,i;g=this.currentTime+=a*this.timeScale;h=this.currentTime%=this.data.length;h<this.startTimeMs&&(h=this.currentTime=this.startTimeMs+h);e=parseInt(Math.min(h*this.data.fps,this.data.length*this.data.fps),10);if((i=h<g)&&!this.loop){for(var a=0,j=this.hierarchy.length;a<j;a++){var l=this.data.hierarchy[a].keys,f=this.data.hierarchy[a].sids;d=l.length-1;e=this.hierarchy[a];if(l.length){for(l=
0;l<f.length;l++)h=f[l],(g=this.getPrevKeyWith(h,a,d))&&g.apply(h);this.data.hierarchy[a].node.updateMatrix();e.matrixWorldNeedsUpdate=!0}}this.stop()}else if(!(h<this.startTime)){a=0;for(j=this.hierarchy.length;a<j;a++){d=this.hierarchy[a];b=this.data.hierarchy[a];var l=b.keys,m=b.animationCache;if(this.JITCompile&&void 0!==f[a][e])d instanceof THREE.Bone?(d.skinMatrix=f[a][e],d.matrixWorldNeedsUpdate=!1):(d.matrix=f[a][e],d.matrixWorldNeedsUpdate=!0);else if(l.length){this.JITCompile&&m&&(d instanceof
THREE.Bone?d.skinMatrix=m.originalMatrix:d.matrix=m.originalMatrix);b=m.prevKey;c=m.nextKey;if(b&&c){if(c.time<=g){if(i&&this.loop){b=l[0];for(c=l[1];c.time<h;)b=c,c=l[b.index+1]}else if(!i)for(var n=l.length-1;c.time<h&&c.index!==n;)b=c,c=l[b.index+1];m.prevKey=b;m.nextKey=c}c.time>=h?b.interpolate(c,h):b.interpolate(c,c.time)}this.data.hierarchy[a].node.updateMatrix();d.matrixWorldNeedsUpdate=!0}}if(this.JITCompile&&void 0===f[0][e]){this.hierarchy[0].updateMatrixWorld(!0);for(a=0;a<this.hierarchy.length;a++)f[a][e]=
this.hierarchy[a]instanceof THREE.Bone?this.hierarchy[a].skinMatrix.clone():this.hierarchy[a].matrix.clone()}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,0,-1);h.lookAt(new THREE.Vector3(0,-1,0));this.add(h);var g=new THREE.PerspectiveCamera(90,
1,a,b);g.up.set(0,-1,0);g.lookAt(new THREE.Vector3(0,0,1));this.add(g);var i=new THREE.PerspectiveCamera(90,1,a,b);i.up.set(0,-1,0);i.lookAt(new THREE.Vector3(0,0,-1));this.add(i);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,n=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,h,c);c.activeCubeFace=4;a.render(b,g,c);c.generateMipmaps=n;c.activeCubeFace=5;a.render(b,i,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CombinedCamera=function(a,b,c,d,e,f,h){THREE.Camera.call(this);this.fov=c;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2;this.cameraO=new THREE.OrthographicCamera(a/-2,a/2,b/2,b/-2,f,h);this.cameraP=new THREE.PerspectiveCamera(c,a/b,d,e);this.zoom=1;this.toPerspective()};THREE.CombinedCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.CombinedCamera.prototype.toPerspective=function(){this.near=this.cameraP.near;this.far=this.cameraP.far;this.cameraP.fov=this.fov/this.zoom;this.cameraP.updateProjectionMatrix();this.projectionMatrix=this.cameraP.projectionMatrix;this.inPerspectiveMode=!0;this.inOrthographicMode=!1};
THREE.CombinedCamera.prototype.toOrthographic=function(){var a=this.cameraP.aspect,b=(this.cameraP.near+this.cameraP.far)/2,b=Math.tan(this.fov/2)*b,a=2*b*a/2,b=b/this.zoom,a=a/this.zoom;this.cameraO.left=-a;this.cameraO.right=a;this.cameraO.top=b;this.cameraO.bottom=-b;this.cameraO.updateProjectionMatrix();this.near=this.cameraO.near;this.far=this.cameraO.far;this.projectionMatrix=this.cameraO.projectionMatrix;this.inPerspectiveMode=!1;this.inOrthographicMode=!0};
THREE.CombinedCamera.prototype.setSize=function(a,b){this.cameraP.aspect=a/b;this.left=-a/2;this.right=a/2;this.top=b/2;this.bottom=-b/2};THREE.CombinedCamera.prototype.setFov=function(a){this.fov=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.updateProjectionMatrix=function(){this.inPerspectiveMode?this.toPerspective():(this.toPerspective(),this.toOrthographic())};
THREE.CombinedCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);var c=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.setFov(c);return c};THREE.CombinedCamera.prototype.setZoom=function(a){this.zoom=a;this.inPerspectiveMode?this.toPerspective():this.toOrthographic()};THREE.CombinedCamera.prototype.toFrontView=function(){this.rotation.x=0;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toBackView=function(){this.rotation.x=0;this.rotation.y=Math.PI;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toLeftView=function(){this.rotation.x=0;this.rotation.y=-Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toRightView=function(){this.rotation.x=0;this.rotation.y=Math.PI/2;this.rotation.z=0;this.rotationAutoUpdate=!1};
THREE.CombinedCamera.prototype.toTopView=function(){this.rotation.x=-Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CombinedCamera.prototype.toBottomView=function(){this.rotation.x=Math.PI/2;this.rotation.y=0;this.rotation.z=0;this.rotationAutoUpdate=!1};THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);var a=a||50,c=void 0!==c?c:0,d=void 0!==d?d:2*Math.PI,b=void 0!==b?Math.max(3,b):8,e,f=[];e=new THREE.Vector3;var h=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(h);for(e=0;e<=b;e++){var g=new THREE.Vector3,i=c+e/b*d;g.x=a*Math.cos(i);g.y=a*Math.sin(i);this.vertices.push(g);f.push(new THREE.Vector2((g.x/a+1)/2,(g.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c,c,c])),this.faceVertexUvs[0].push([f[e],
f[e+1],h]);this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){function h(a,b,c,d,e,f,h,q){var r,s=g.widthSegments,u=g.heightSegments,z=e/2,C=f/2,F=g.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)r="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)r="y",u=g.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)r="x",s=g.depthSegments;var H=s+1,I=u+1,G=e/s,A=f/u,K=new THREE.Vector3;K[r]=0<h?1:-1;for(e=0;e<I;e++)for(f=0;f<H;f++){var B=new THREE.Vector3;B[a]=(f*G-z)*c;B[b]=(e*A-C)*d;B[r]=h;g.vertices.push(B)}for(e=
0;e<u;e++)for(f=0;f<s;f++)a=new THREE.Face4(f+H*e+F,f+H*(e+1)+F,f+1+H*(e+1)+F,f+1+H*e+F),a.normal.copy(K),a.vertexNormals.push(K.clone(),K.clone(),K.clone(),K.clone()),a.materialIndex=q,g.faces.push(a),g.faceVertexUvs[0].push([new THREE.Vector2(f/s,1-e/u),new THREE.Vector2(f/s,1-(e+1)/u),new THREE.Vector2((f+1)/s,1-(e+1)/u),new THREE.Vector2((f+1)/s,1-e/u)])}THREE.Geometry.call(this);var g=this;this.width=a;this.height=b;this.depth=c;this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=
f||1;a=this.width/2;b=this.height/2;c=this.depth/2;h("z","y",-1,-1,this.depth,this.height,a,0);h("z","y",1,-1,this.depth,this.height,-a,1);h("x","z",1,1,this.width,this.depth,b,2);h("x","z",1,-1,this.width,this.depth,-b,3);h("x","y",1,-1,this.width,this.height,c,4);h("x","y",-1,-1,this.width,this.height,-c,5);this.computeCentroids();this.mergeVertices()};THREE.CubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.radiusTop=a=void 0!==a?a:20;this.radiusBottom=b=void 0!==b?b:20;this.height=c=void 0!==c?c:100;this.radialSegments=d=d||8;this.heightSegments=e=e||1;this.openEnded=f=void 0!==f?f:!1;var h=c/2,g,i,j=[],l=[];for(i=0;i<=e;i++){var m=[],n=[],p=i/e,t=p*(b-a)+a;for(g=0;g<=d;g++){var q=g/d,r=new THREE.Vector3;r.x=t*Math.sin(2*q*Math.PI);r.y=-p*c+h;r.z=t*Math.cos(2*q*Math.PI);this.vertices.push(r);m.push(this.vertices.length-1);n.push(new THREE.Vector2(q,
1-p))}j.push(m);l.push(n)}c=(b-a)/c;for(g=0;g<d;g++){0!==a?(m=this.vertices[j[0][g]].clone(),n=this.vertices[j[0][g+1]].clone()):(m=this.vertices[j[1][g]].clone(),n=this.vertices[j[1][g+1]].clone());m.setY(Math.sqrt(m.x*m.x+m.z*m.z)*c).normalize();n.setY(Math.sqrt(n.x*n.x+n.z*n.z)*c).normalize();for(i=0;i<e;i++){var p=j[i][g],t=j[i+1][g],q=j[i+1][g+1],r=j[i][g+1],s=m.clone(),u=m.clone(),z=n.clone(),C=n.clone(),F=l[i][g].clone(),H=l[i+1][g].clone(),I=l[i+1][g+1].clone(),G=l[i][g+1].clone();this.faces.push(new THREE.Face4(p,
t,q,r,[s,u,z,C]));this.faceVertexUvs[0].push([F,H,I,G])}}if(!1===f&&0<a){this.vertices.push(new THREE.Vector3(0,h,0));for(g=0;g<d;g++)p=j[0][g],t=j[0][g+1],q=this.vertices.length-1,s=new THREE.Vector3(0,1,0),u=new THREE.Vector3(0,1,0),z=new THREE.Vector3(0,1,0),F=l[0][g].clone(),H=l[0][g+1].clone(),I=new THREE.Vector2(H.u,0),this.faces.push(new THREE.Face3(p,t,q,[s,u,z])),this.faceVertexUvs[0].push([F,H,I])}if(!1===f&&0<b){this.vertices.push(new THREE.Vector3(0,-h,0));for(g=0;g<d;g++)p=j[i][g+1],
t=j[i][g],q=this.vertices.length-1,s=new THREE.Vector3(0,-1,0),u=new THREE.Vector3(0,-1,0),z=new THREE.Vector3(0,-1,0),F=l[i][g+1].clone(),H=l[i][g].clone(),I=new THREE.Vector2(H.u,1),this.faces.push(new THREE.Face3(p,t,q,[s,u,z])),this.faceVertexUvs[0].push([F,H,I])}this.computeCentroids();this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.shapebb=a[a.length-1].getBoundingBox(),this.addShapeList(a,b),this.computeCentroids(),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.ExtrudeGeometry.__v1,e=THREE.ExtrudeGeometry.__v2,f=THREE.ExtrudeGeometry.__v3,g=THREE.ExtrudeGeometry.__v4,h=THREE.ExtrudeGeometry.__v5,i=THREE.ExtrudeGeometry.__v6;d.set(a.x-b.x,a.y-b.y);e.set(a.x-c.x,a.y-c.y);d=d.normalize();e=e.normalize();f.set(-d.y,d.x);g.set(e.y,-e.x);h.copy(a).add(f);i.copy(a).add(g);if(h.equals(i))return g.clone();
h.copy(b).add(f);i.copy(c).add(g);f=d.dot(g);g=i.sub(h).dot(g);0===f&&(console.log("Either infinite or no solutions!"),0===g?console.log("Its finite solutions."):console.log("Too bad, no solutions."));g/=f;return 0>g?(b=Math.atan2(b.y-a.y,b.x-a.x),a=Math.atan2(c.y-a.y,c.x-a.x),b>a&&(a+=2*Math.PI),c=(b+a)/2,a=-Math.cos(c),c=-Math.sin(c),new THREE.Vector2(a,c)):d.multiplyScalar(g).add(h).sub(a).clone()}function e(c,d){var e,f;for(O=c.length;0<=--O;){e=O;f=O-1;0>f&&(f=c.length-1);for(var g=0,h=p+2*l,
g=0;g<h;g++){var i=pa*g,j=pa*(g+1),m=d+e+i,i=d+f+i,n=d+f+j,j=d+e+j,q=c,r=g,s=h,t=e,w=f,m=m+J,i=i+J,n=n+J,j=j+J;B.faces.push(new THREE.Face4(m,i,n,j,null,null,u));m=z.generateSideWallUV(B,a,q,b,m,i,n,j,r,s,t,w);B.faceVertexUvs[0].push(m)}}}function f(a,b,c){B.vertices.push(new THREE.Vector3(a,b,c))}function h(c,d,e,f){c+=J;d+=J;e+=J;B.faces.push(new THREE.Face3(c,d,e,null,null,s));c=f?z.generateBottomUV(B,a,b,c,d,e):z.generateTopUV(B,a,b,c,d,e);B.faceVertexUvs[0].push(c)}var g=void 0!==b.amount?b.amount:
100,i=void 0!==b.bevelThickness?b.bevelThickness:6,j=void 0!==b.bevelSize?b.bevelSize:i-2,l=void 0!==b.bevelSegments?b.bevelSegments:3,m=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:12,p=void 0!==b.steps?b.steps:1,t=b.extrudePath,q,r=!1,s=b.material,u=b.extrudeMaterial,z=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,C,F,H,I;t&&(q=t.getSpacedPoints(p),r=!0,m=!1,C=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(t,p,
!1),F=new THREE.Vector3,H=new THREE.Vector3,I=new THREE.Vector3);m||(j=i=l=0);var G,A,K,B=this,J=this.vertices.length,n=a.extractPoints(n),N=n.shape,n=n.holes;if(t=!THREE.Shape.Utils.isClockWise(N)){N=N.reverse();A=0;for(K=n.length;A<K;A++)G=n[A],THREE.Shape.Utils.isClockWise(G)&&(n[A]=G.reverse());t=!1}var y=THREE.Shape.Utils.triangulateShape(N,n),t=N;A=0;for(K=n.length;A<K;A++)G=n[A],N=N.concat(G);var M,w,Z,L,pa=N.length,Pa=y.length,Ua=[],O=0,ka=t.length;M=ka-1;for(w=O+1;O<ka;O++,M++,w++)M===ka&&
(M=0),w===ka&&(w=0),Ua[O]=d(t[O],t[M],t[w]);var Fa=[],wa,D=Ua.concat();A=0;for(K=n.length;A<K;A++){G=n[A];wa=[];O=0;ka=G.length;M=ka-1;for(w=O+1;O<ka;O++,M++,w++)M===ka&&(M=0),w===ka&&(w=0),wa[O]=d(G[O],G[M],G[w]);Fa.push(wa);D=D.concat(wa)}for(M=0;M<l;M++){G=M/l;Z=i*(1-G);w=j*Math.sin(G*Math.PI/2);O=0;for(ka=t.length;O<ka;O++)L=c(t[O],Ua[O],w),f(L.x,L.y,-Z);A=0;for(K=n.length;A<K;A++){G=n[A];wa=Fa[A];O=0;for(ka=G.length;O<ka;O++)L=c(G[O],wa[O],w),f(L.x,L.y,-Z)}}w=j;for(O=0;O<pa;O++)L=m?c(N[O],D[O],
w):N[O],r?(H.copy(C.normals[0]).multiplyScalar(L.x),F.copy(C.binormals[0]).multiplyScalar(L.y),I.copy(q[0]).add(H).add(F),f(I.x,I.y,I.z)):f(L.x,L.y,0);for(G=1;G<=p;G++)for(O=0;O<pa;O++)L=m?c(N[O],D[O],w):N[O],r?(H.copy(C.normals[G]).multiplyScalar(L.x),F.copy(C.binormals[G]).multiplyScalar(L.y),I.copy(q[G]).add(H).add(F),f(I.x,I.y,I.z)):f(L.x,L.y,g/p*G);for(M=l-1;0<=M;M--){G=M/l;Z=i*(1-G);w=j*Math.sin(G*Math.PI/2);O=0;for(ka=t.length;O<ka;O++)L=c(t[O],Ua[O],w),f(L.x,L.y,g+Z);A=0;for(K=n.length;A<
K;A++){G=n[A];wa=Fa[A];O=0;for(ka=G.length;O<ka;O++)L=c(G[O],wa[O],w),r?f(L.x,L.y+q[p-1].y,q[p-1].x+Z):f(L.x,L.y,g+Z)}}if(m){i=0*pa;for(O=0;O<Pa;O++)g=y[O],h(g[2]+i,g[1]+i,g[0]+i,!0);i=pa*(p+2*l);for(O=0;O<Pa;O++)g=y[O],h(g[0]+i,g[1]+i,g[2]+i,!1)}else{for(O=0;O<Pa;O++)g=y[O],h(g[2],g[1],g[0],!0);for(O=0;O<Pa;O++)g=y[O],h(g[0]+pa*p,g[1]+pa*p,g[2]+pa*p,!1)}g=0;e(t,g);g+=t.length;A=0;for(K=n.length;A<K;A++)G=n[A],e(G,g),g+=G.length};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,h,g){var b=a.vertices[e].x,c=a.vertices[e].y,e=a.vertices[e].z,d=a.vertices[f].x,i=a.vertices[f].y,f=a.vertices[f].z,j=a.vertices[h].x,
l=a.vertices[h].y,h=a.vertices[h].z,m=a.vertices[g].x,n=a.vertices[g].y,a=a.vertices[g].z;return 0.01>Math.abs(c-i)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(j,1-h),new THREE.Vector2(m,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(i,1-f),new THREE.Vector2(l,1-h),new THREE.Vector2(n,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.shapebb=a[a.length-1].getBoundingBox();this.addShapeList(a,b);this.computeCentroids();this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,h,g=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var i=e.shape,j=e.holes;if(!THREE.Shape.Utils.isClockWise(i)){i=i.reverse();e=0;for(f=j.length;e<f;e++)h=j[e],THREE.Shape.Utils.isClockWise(h)&&(j[e]=h.reverse())}var l=THREE.Shape.Utils.triangulateShape(i,j);e=0;for(f=j.length;e<f;e++)h=j[e],
i=i.concat(h);j=i.length;f=l.length;for(e=0;e<j;e++)h=i[e],this.vertices.push(new THREE.Vector3(h.x,h.y,0));for(e=0;e<f;e++)j=l[e],i=j[0]+g,h=j[1]+g,j=j[2]+g,this.faces.push(new THREE.Face3(i,h,j,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,i,h,j))};THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);for(var b=b||12,c=c||0,d=d||2*Math.PI,e=1/(a.length-1),f=1/b,h=0,g=b;h<=g;h++)for(var i=c+h*f*d,j=Math.cos(i),l=Math.sin(i),i=0,m=a.length;i<m;i++){var n=a[i],p=new THREE.Vector3;p.x=j*n.x-l*n.y;p.y=l*n.x+j*n.y;p.z=n.z;this.vertices.push(p)}c=a.length;h=0;for(g=b;h<g;h++){i=0;for(m=a.length-1;i<m;i++)d=b=i+c*h,l=b+c,j=b+1+c,this.faces.push(new THREE.Face4(d,l,j,b+1)),j=h*f,b=i*e,d=j+f,l=b+e,this.faceVertexUvs[0].push([new THREE.Vector2(j,
b),new THREE.Vector2(d,b),new THREE.Vector2(d,l),new THREE.Vector2(j,l)])}this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.width=a;this.height=b;this.widthSegments=c||1;this.heightSegments=d||1;for(var c=a/2,e=b/2,d=this.widthSegments,f=this.heightSegments,h=d+1,g=f+1,i=this.width/d,j=this.height/f,l=new THREE.Vector3(0,0,1),a=0;a<g;a++)for(b=0;b<h;b++)this.vertices.push(new THREE.Vector3(b*i-c,-(a*j-e),0));for(a=0;a<f;a++)for(b=0;b<d;b++)c=new THREE.Face4(b+h*a,b+h*(a+1),b+1+h*(a+1),b+1+h*a),c.normal.copy(l),c.vertexNormals.push(l.clone(),l.clone(),
l.clone(),l.clone()),this.faces.push(c),this.faceVertexUvs[0].push([new THREE.Vector2(b/d,1-a/f),new THREE.Vector2(b/d,1-(a+1)/f),new THREE.Vector2((b+1)/d,1-(a+1)/f),new THREE.Vector2((b+1)/d,1-a/f)]);this.computeCentroids()};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);for(var a=a||0,b=b||50,e=void 0!==e?e:0,f=void 0!==f?f:2*Math.PI,c=void 0!==c?Math.max(3,c):8,d=void 0!==d?Math.max(3,d):8,h=[],g=a,i=(b-a)/d,a=0;a<=d;a++){for(b=0;b<=c;b++){var j=new THREE.Vector3,l=e+b/c*f;j.x=g*Math.cos(l);j.y=g*Math.sin(l);this.vertices.push(j);h.push(new THREE.Vector2((j.x/g+1)/2,-(j.y/g+1)/2+1))}g+=i}e=new THREE.Vector3(0,0,1);for(a=0;a<d;a++){f=a*c;for(b=0;b<=c;b++){var l=b+f,i=l+a,j=l+c+a,m=l+c+1+a;this.faces.push(new THREE.Face3(i,
j,m,[e,e,e]));this.faceVertexUvs[0].push([h[i],h[j],h[m]]);i=l+a;j=l+c+1+a;m=l+1+a;this.faces.push(new THREE.Face3(i,j,m,[e,e,e]));this.faceVertexUvs[0].push([h[i],h[j],h[m]])}}this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,g)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry=function(a,b,c,d,e,f,h){THREE.Geometry.call(this);this.radius=a=a||50;this.widthSegments=b=Math.max(3,Math.floor(b)||8);this.heightSegments=c=Math.max(2,Math.floor(c)||6);this.phiStart=d=void 0!==d?d:0;this.phiLength=e=void 0!==e?e:2*Math.PI;this.thetaStart=f=void 0!==f?f:0;this.thetaLength=h=void 0!==h?h:Math.PI;var g,i,j=[],l=[];for(i=0;i<=c;i++){var m=[],n=[];for(g=0;g<=b;g++){var p=g/b,t=i/c,q=new THREE.Vector3;q.x=-a*Math.cos(d+p*e)*Math.sin(f+t*h);q.y=a*Math.cos(f+t*h);
q.z=a*Math.sin(d+p*e)*Math.sin(f+t*h);this.vertices.push(q);m.push(this.vertices.length-1);n.push(new THREE.Vector2(p,1-t))}j.push(m);l.push(n)}for(i=0;i<this.heightSegments;i++)for(g=0;g<this.widthSegments;g++){var b=j[i][g+1],c=j[i][g],d=j[i+1][g],e=j[i+1][g+1],f=this.vertices[b].clone().normalize(),h=this.vertices[c].clone().normalize(),m=this.vertices[d].clone().normalize(),n=this.vertices[e].clone().normalize(),p=l[i][g+1].clone(),t=l[i][g].clone(),q=l[i+1][g].clone(),r=l[i+1][g+1].clone();Math.abs(this.vertices[b].y)===
this.radius?(this.faces.push(new THREE.Face3(b,d,e,[f,m,n])),this.faceVertexUvs[0].push([p,q,r])):Math.abs(this.vertices[d].y)===this.radius?(this.faces.push(new THREE.Face3(b,c,d,[f,h,m])),this.faceVertexUvs[0].push([p,t,q])):(this.faces.push(new THREE.Face4(b,c,d,e,[f,h,m,n])),this.faceVertexUvs[0].push([p,t,q,r]))}this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){var b=b||{},c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||8;this.tubularSegments=d||6;this.arc=e||2*Math.PI;e=new THREE.Vector3;a=[];b=[];for(c=0;c<=this.radialSegments;c++)for(d=0;d<=this.tubularSegments;d++){var f=d/this.tubularSegments*this.arc,h=2*c/this.radialSegments*Math.PI;e.x=this.radius*Math.cos(f);e.y=this.radius*Math.sin(f);var g=new THREE.Vector3;g.x=(this.radius+this.tube*Math.cos(h))*Math.cos(f);g.y=(this.radius+this.tube*
Math.cos(h))*Math.sin(f);g.z=this.tube*Math.sin(h);this.vertices.push(g);a.push(new THREE.Vector2(d/this.tubularSegments,c/this.radialSegments));b.push(g.clone().sub(e).normalize())}for(c=1;c<=this.radialSegments;c++)for(d=1;d<=this.tubularSegments;d++){var e=(this.tubularSegments+1)*c+d-1,f=(this.tubularSegments+1)*(c-1)+d-1,h=(this.tubularSegments+1)*(c-1)+d,g=(this.tubularSegments+1)*c+d,i=new THREE.Face4(e,f,h,g,[b[e],b[f],b[h],b[g]]);i.normal.add(b[e]);i.normal.add(b[f]);i.normal.add(b[h]);i.normal.add(b[g]);
i.normal.normalize();this.faces.push(i);this.faceVertexUvs[0].push([a[e].clone(),a[f].clone(),a[h].clone(),a[g].clone()])}this.computeCentroids()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry=function(a,b,c,d,e,f,h){function g(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a),a=b/c*a,b=Math.cos(a),f=0.5*(d*(2+b))*f,g=0.5*d*(2+b)*g,d=0.5*e*d*Math.sin(a);return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.radius=a||100;this.tube=b||40;this.radialSegments=c||64;this.tubularSegments=d||8;this.p=e||2;this.q=f||3;this.heightScale=h||1;this.grid=Array(this.radialSegments);c=new THREE.Vector3;d=new THREE.Vector3;e=new THREE.Vector3;for(a=0;a<this.radialSegments;++a){this.grid[a]=
Array(this.tubularSegments);b=2*(a/this.radialSegments)*this.p*Math.PI;f=g(b,this.q,this.p,this.radius,this.heightScale);b=g(b+0.01,this.q,this.p,this.radius,this.heightScale);c.subVectors(b,f);d.addVectors(b,f);e.crossVectors(c,d);d.crossVectors(e,c);e.normalize();d.normalize();for(b=0;b<this.tubularSegments;++b){var i=2*(b/this.tubularSegments)*Math.PI,h=-this.tube*Math.cos(i),i=this.tube*Math.sin(i),j=new THREE.Vector3;j.x=f.x+h*d.x+i*e.x;j.y=f.y+h*d.y+i*e.y;j.z=f.z+h*d.z+i*e.z;this.grid[a][b]=
this.vertices.push(j)-1}}for(a=0;a<this.radialSegments;++a)for(b=0;b<this.tubularSegments;++b){var e=(a+1)%this.radialSegments,f=(b+1)%this.tubularSegments,c=this.grid[a][b],d=this.grid[e][b],e=this.grid[e][f],f=this.grid[a][f],h=new THREE.Vector2(a/this.radialSegments,b/this.tubularSegments),i=new THREE.Vector2((a+1)/this.radialSegments,b/this.tubularSegments),j=new THREE.Vector2((a+1)/this.radialSegments,(b+1)/this.tubularSegments),l=new THREE.Vector2(a/this.radialSegments,(b+1)/this.tubularSegments);
this.faces.push(new THREE.Face4(c,d,e,f));this.faceVertexUvs[0].push([h,i,j,l])}this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.path=a;this.segments=b||64;this.radius=c||1;this.radialSegments=d||8;this.closed=e||!1;this.grid=[];var f,h,d=this.segments+1,g,i,j,e=new THREE.Vector3,l,m,b=new THREE.TubeGeometry.FrenetFrames(this.path,this.segments,this.closed);l=b.normals;m=b.binormals;this.tangents=b.tangents;this.normals=l;this.binormals=m;for(b=0;b<d;b++){this.grid[b]=[];c=b/(d-1);j=a.getPointAt(c);f=l[b];h=m[b];for(c=0;c<this.radialSegments;c++)g=2*(c/this.radialSegments)*
Math.PI,i=-this.radius*Math.cos(g),g=this.radius*Math.sin(g),e.copy(j),e.x+=i*f.x+g*h.x,e.y+=i*f.y+g*h.y,e.z+=i*f.z+g*h.z,this.grid[b][c]=this.vertices.push(new THREE.Vector3(e.x,e.y,e.z))-1}for(b=0;b<this.segments;b++)for(c=0;c<this.radialSegments;c++)e=this.closed?(b+1)%this.segments:b+1,l=(c+1)%this.radialSegments,a=this.grid[b][c],d=this.grid[e][c],e=this.grid[e][l],l=this.grid[b][l],m=new THREE.Vector2(b/this.segments,c/this.radialSegments),f=new THREE.Vector2((b+1)/this.segments,c/this.radialSegments),
h=new THREE.Vector2((b+1)/this.segments,(c+1)/this.radialSegments),i=new THREE.Vector2(b/this.segments,(c+1)/this.radialSegments),this.faces.push(new THREE.Face4(a,d,e,l)),this.faceVertexUvs[0].push([m,f,h,i]);this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],h=[],g=new THREE.Vector3,i=new THREE.Matrix4,b=b+1,j,l,m;this.tangents=e;this.normals=f;this.binormals=h;for(j=0;j<b;j++)l=j/(b-1),e[j]=a.getTangentAt(l),e[j].normalize();f[0]=new THREE.Vector3;h[0]=new THREE.Vector3;a=Number.MAX_VALUE;j=Math.abs(e[0].x);l=Math.abs(e[0].y);m=Math.abs(e[0].z);j<=a&&(a=j,d.set(1,0,0));l<=a&&(a=l,d.set(0,1,0));m<=a&&d.set(0,0,1);g.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],g);h[0].crossVectors(e[0],f[0]);for(j=1;j<b;j++)f[j]=f[j-1].clone(),h[j]=h[j-1].clone(),g.crossVectors(e[j-1],e[j]),1E-4<g.length()&&(g.normalize(),d=Math.acos(THREE.Math.clamp(e[j-1].dot(e[j]),-1,1)),f[j].applyMatrix4(i.makeRotationAxis(g,d))),h[j].crossVectors(e[j],f[j]);if(c){d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1));d/=b-1;0<e[0].dot(g.crossVectors(f[0],f[b-1]))&&(d=-d);for(j=1;j<b;j++)f[j].applyMatrix4(i.makeRotationAxis(e[j],d*j)),h[j].crossVectors(e[j],
f[j])}};THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=g.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5,a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);d.centroid.add(a).add(b).add(c).divideScalar(3);g.faces.push(d);d=Math.atan2(d.centroid.z,-d.centroid.x);g.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),
h(c.uv,c,d)])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,a.y));return a.clone()}THREE.Geometry.call(this);for(var c=c||1,d=d||0,g=this,i=0,j=a.length;i<j;i++)e(new THREE.Vector3(a[i][0],a[i][1],a[i][2]));for(var l=this.vertices,a=[],i=0,j=b.length;i<j;i++){var m=l[b[i][0]],n=l[b[i][1]],p=l[b[i][2]];a[i]=new THREE.Face3(m.index,n.index,p.index,[m.clone(),n.clone(),p.clone()])}i=0;for(j=a.length;i<j;i++){n=a[i];l=d;b=Math.pow(2,
l);Math.pow(4,l);for(var l=e(g.vertices[n.a]),m=e(g.vertices[n.b]),t=e(g.vertices[n.c]),n=[],p=0;p<=b;p++){n[p]=[];for(var q=e(l.clone().lerp(t,p/b)),r=e(m.clone().lerp(t,p/b)),s=b-p,u=0;u<=s;u++)n[p][u]=0==u&&p==b?q:e(q.clone().lerp(r,u/s))}for(p=0;p<b;p++)for(u=0;u<2*(b-p)-1;u++)l=Math.floor(u/2),0==u%2?f(n[p][l+1],n[p+1][l],n[p][l]):f(n[p][l+1],n[p+1][l+1],n[p+1][l])}i=0;for(j=this.faceVertexUvs[0].length;i<j;i++)d=this.faceVertexUvs[0][i],a=d[0].x,b=d[1].x,l=d[2].x,m=Math.max(a,Math.max(b,l)),
n=Math.min(a,Math.min(b,l)),0.9<m&&0.1>n&&(0.2>a&&(d[0].x+=1),0.2>b&&(d[1].x+=1),0.2>l&&(d[2].x+=1));i=0;for(j=this.vertices.length;i<j;i++)this.vertices[i].multiplyScalar(c);this.mergeVertices();this.computeCentroids();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.IcosahedronGeometry=function(a,b){this.radius=a;this.detail=b;var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[[-1,c,0],[1,c,0],[-1,-c,0],[1,-c,0],[0,-1,c],[0,1,c],[0,-1,-c],[0,1,-c],[c,0,-1],[c,0,1],[-c,0,-1],[-c,0,1]],[[0,11,5],[0,5,1],[0,1,7],[0,7,10],[0,10,11],[1,5,9],[5,11,4],[11,10,2],[10,7,6],[7,1,8],[3,9,4],[3,4,2],[3,2,6],[3,6,8],[3,8,9],[4,9,5],[2,4,11],[6,2,10],[8,6,7],[9,8,1]],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],[[0,2,4],[0,4,3],[0,3,5],[0,5,2],[1,2,5],[1,5,3],[1,3,4],[1,4,2]],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[[1,1,1],[-1,-1,1],[-1,1,-1],[1,-1,-1]],[[2,1,0],[0,3,2],[1,3,0],[2,3,1]],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry=function(a,b,c,d){THREE.Geometry.call(this);var e=this.vertices,f=this.faces,h=this.faceVertexUvs[0],d=void 0===d?!1:d,g,i,j,l,m=b+1;for(g=0;g<=c;g++){l=g/c;for(i=0;i<=b;i++)j=i/b,j=a(j,l),e.push(j)}var n,p,t,q;for(g=0;g<c;g++)for(i=0;i<b;i++)a=g*m+i,e=g*m+i+1,l=(g+1)*m+i,j=(g+1)*m+i+1,n=new THREE.Vector2(i/b,g/c),p=new THREE.Vector2((i+1)/b,g/c),t=new THREE.Vector2(i/b,(g+1)/c),q=new THREE.Vector2((i+1)/b,(g+1)/c),d?(f.push(new THREE.Face3(a,e,l)),f.push(new THREE.Face3(e,
j,l)),h.push([n,p,t]),h.push([p,q,t])):(f.push(new THREE.Face4(a,e,j,l)),h.push([n,p,q,t]));this.computeCentroids();this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.AxisHelper=function(a){var a=a||1,b=new THREE.Geometry;b.vertices.push(new THREE.Vector3,new THREE.Vector3(a,0,0),new THREE.Vector3,new THREE.Vector3(0,a,0),new THREE.Vector3,new THREE.Vector3(0,0,a));b.colors.push(new THREE.Color(16711680),new THREE.Color(16755200),new THREE.Color(65280),new THREE.Color(11206400),new THREE.Color(255),new THREE.Color(43775));a=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,b,a,THREE.LinePieces)};
THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);THREE.ArrowHelper=function(a,b,c,d){THREE.Object3D.call(this);void 0===d&&(d=16776960);void 0===c&&(c=1);this.position=b;b=new THREE.Geometry;b.vertices.push(new THREE.Vector3(0,0,0));b.vertices.push(new THREE.Vector3(0,1,0));this.line=new THREE.Line(b,new THREE.LineBasicMaterial({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);b=new THREE.CylinderGeometry(0,0.05,0.25,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,0.875,0));this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:d}));
this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c)};THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();THREE.ArrowHelper.prototype.setLength=function(a){this.scale.set(a,a,a)};
THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.setHex(a);this.cone.material.color.setHex(a)};THREE.BoxHelper=function(a){var b=[new THREE.Vector3(1,1,1),new THREE.Vector3(-1,1,1),new THREE.Vector3(-1,-1,1),new THREE.Vector3(1,-1,1),new THREE.Vector3(1,1,-1),new THREE.Vector3(-1,1,-1),new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,-1,-1)];this.vertices=b;var c=new THREE.Geometry;c.vertices.push(b[0],b[1],b[1],b[2],b[2],b[3],b[3],b[0],b[4],b[5],b[5],b[6],b[6],b[7],b[7],b[4],b[0],b[4],b[1],b[5],b[2],b[6],b[3],b[7]);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);
void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.vertices;d[0].set(b.x,b.y,b.z);d[1].set(c.x,b.y,b.z);d[2].set(c.x,c.y,b.z);d[3].set(b.x,c.y,b.z);d[4].set(b.x,b.y,c.z);d[5].set(c.x,b.y,c.z);d[6].set(c.x,c.y,c.z);d[7].set(b.x,c.y,c.z);this.geometry.computeBoundingSphere();this.geometry.verticesNeedUpdate=!0;this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=b||8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.CubeGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,h,g,i){a.set(h,g,i);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d){h=0;for(g=d.length;h<g;h++)e.geometry.vertices[d[h]].copy(a)}}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",
0.7,1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;var c=new THREE.PlaneGeometry(b,b),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Mesh(c,d);this.add(this.lightPlane);c=new THREE.Geometry;c.vertices.push(new THREE.Vector3);c.vertices.push(new THREE.Vector3);c.computeLineDistances();
d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){a.getPositionFromMatrix(this.light.matrixWorld).negate();this.lightPlane.lookAt(a);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(a);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=b||1;for(var a=c||16776960,d=d||1,b=new THREE.Geometry,c=0,e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var b=this.geometry.vertices,c=this.object.geometry.faces,d=this.object.matrixWorld,e=0,f=c.length;e<f;e++){var h=c[e];a.copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);var g=2*e;b[g].copy(h.centroid).applyMatrix4(d);b[g+1].addVectors(b[g],a)}this.geometry.verticesNeedUpdate=
!0;return this}}();THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];var c=new THREE.SphereGeometry(b,4,2);c.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(var d=0;8>d;d++)c.faces[d].color=this.colors[4>d?0:1];d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.getPositionFromMatrix(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=this.light.distance?this.light.distance:1E4,c=b*Math.tan(this.light.angle);this.cone.scale.set(c,c,b);this.cone.lookAt(a.getPositionFromMatrix(this.light.matrixWorld).negate());this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=b||1;for(var b=c||16711680,d=d||1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var h=0,g=a[e].vertexNormals.length;h<g;h++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,h=0,g=0,i=e.length;g<i;g++)for(var j=e[g],l=0,m=j.vertexNormals.length;l<m;l++){var n=j.vertexNormals[l];c[h].copy(d[j[b[l]]]).applyMatrix4(f);a.copy(n).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
a.add(c[h]);h+=1;c[h].copy(a);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=b||1;for(var b=c||255,d=d||1,c=new THREE.Geometry,a=a.geometry.faces,e=0,f=a.length;e<f;e++)for(var h=0,g=a[e].vertexTangents.length;h<g;h++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){var b=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var c=this.geometry.vertices,d=this.object.geometry.vertices,e=this.object.geometry.faces,f=this.object.matrixWorld,h=0,g=0,i=e.length;g<i;g++)for(var j=e[g],l=0,m=j.vertexTangents.length;l<m;l++){var n=j.vertexTangents[l];c[h].copy(d[j[b[l]]]).applyMatrix4(f);a.copy(n).transformDirection(f).multiplyScalar(this.size);a.add(c[h]);h+=1;c[h].copy(a);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();THREE.WireframeHelper=function(a){for(var b=[0,0],c={},d=function(a,b){return a-b},e=["a","b","c","d"],f=new THREE.Geometry,h=a.geometry.vertices,g=a.geometry.faces,i=0,j=g.length;i<j;i++)for(var l=g[i],m=l instanceof THREE.Face4?4:3,n=0;n<m;n++){b[0]=l[e[n]];b[1]=l[e[(n+1)%m]];b.sort(d);var p=b.toString();void 0===c[p]&&(f.vertices.push(h[b[0]]),f.vertices.push(h[b[1]]),c[p]=!0)}THREE.Line.call(this,f,new THREE.LineBasicMaterial({color:16777215}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=
a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);
THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=0.25*c.x*Math.PI,c.rotation+=0.25*(c.wantedRotation-c.rotation)};THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)(\d+)/,c,d={},e=this.geometry,f=0,h=e.morphTargets.length;f<h;f++){var g=e.morphTargets[f].name.match(b);if(g&&1<g.length){var i=g[1];d[i]||(d[i]={start:Infinity,end:-Infinity});g=d[i];f<g.start&&(g.start=f);f>g.end&&(g.end=f);c||(c=i)}}for(i in d)g=d[i],this.createAnimation(i,g.start,g.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),h=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*h,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*h;this.morphTargetInfluences[d.lastFrame]=(1-e)*h}}};THREE.LensFlarePlugin=function(){function a(a,c){var d=b.createProgram(),e=b.createShader(b.FRAGMENT_SHADER),f=b.createShader(b.VERTEX_SHADER),g="precision "+c+" float;\n";b.shaderSource(e,g+a.fragmentShader);b.shaderSource(f,g+a.vertexShader);b.compileShader(e);b.compileShader(f);b.attachShader(d,e);b.attachShader(d,f);b.linkProgram(d);return d}var b,c,d,e,f,h,g,i,j,l,m,n,p;this.init=function(t){b=t.context;c=t;d=t.getPrecision();e=new Float32Array(16);f=new Uint16Array(6);t=0;e[t++]=-1;e[t++]=-1;
e[t++]=0;e[t++]=0;e[t++]=1;e[t++]=-1;e[t++]=1;e[t++]=0;e[t++]=1;e[t++]=1;e[t++]=1;e[t++]=1;e[t++]=-1;e[t++]=1;e[t++]=0;e[t++]=1;t=0;f[t++]=0;f[t++]=1;f[t++]=2;f[t++]=0;f[t++]=2;f[t++]=3;h=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,h);b.bufferData(b.ARRAY_BUFFER,e,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,f,b.STATIC_DRAW);i=b.createTexture();j=b.createTexture();b.bindTexture(b.TEXTURE_2D,i);b.texImage2D(b.TEXTURE_2D,0,b.RGB,16,16,
0,b.RGB,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.bindTexture(b.TEXTURE_2D,j);b.texImage2D(b.TEXTURE_2D,0,b.RGBA,16,16,0,b.RGBA,b.UNSIGNED_BYTE,null);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);0>=b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(l=!1,m=a(THREE.ShaderFlares.lensFlare,d)):(l=!0,m=a(THREE.ShaderFlares.lensFlareVertexTexture,d));n={};p={};n.vertex=b.getAttribLocation(m,"position");n.uv=b.getAttribLocation(m,"uv");p.renderType=b.getUniformLocation(m,"renderType");p.map=b.getUniformLocation(m,"map");p.occlusionMap=b.getUniformLocation(m,"occlusionMap");p.opacity=
b.getUniformLocation(m,"opacity");p.color=b.getUniformLocation(m,"color");p.scale=b.getUniformLocation(m,"scale");p.rotation=b.getUniformLocation(m,"rotation");p.screenPosition=b.getUniformLocation(m,"screenPosition")};this.render=function(a,d,e,f){var a=a.__webglFlares,u=a.length;if(u){var z=new THREE.Vector3,C=f/e,F=0.5*e,H=0.5*f,I=16/f,G=new THREE.Vector2(I*C,I),A=new THREE.Vector3(1,1,0),K=new THREE.Vector2(1,1),B=p,I=n;b.useProgram(m);b.enableVertexAttribArray(n.vertex);b.enableVertexAttribArray(n.uv);
b.uniform1i(B.occlusionMap,0);b.uniform1i(B.map,1);b.bindBuffer(b.ARRAY_BUFFER,h);b.vertexAttribPointer(I.vertex,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(I.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.disable(b.CULL_FACE);b.depthMask(!1);var J,N,y,M,w;for(J=0;J<u;J++)if(I=16/f,G.set(I*C,I),M=a[J],z.set(M.matrixWorld.elements[12],M.matrixWorld.elements[13],M.matrixWorld.elements[14]),z.applyMatrix4(d.matrixWorldInverse),z.applyProjection(d.projectionMatrix),A.copy(z),K.x=A.x*F+F,
K.y=A.y*H+H,l||0<K.x&&K.x<e&&0<K.y&&K.y<f){b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGB,K.x-8,K.y-8,16,16,0);b.uniform1i(B.renderType,0);b.uniform2f(B.scale,G.x,G.y);b.uniform3f(B.screenPosition,A.x,A.y,A.z);b.disable(b.BLEND);b.enable(b.DEPTH_TEST);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);b.activeTexture(b.TEXTURE0);b.bindTexture(b.TEXTURE_2D,j);b.copyTexImage2D(b.TEXTURE_2D,0,b.RGBA,K.x-8,K.y-8,16,16,0);b.uniform1i(B.renderType,1);b.disable(b.DEPTH_TEST);
b.activeTexture(b.TEXTURE1);b.bindTexture(b.TEXTURE_2D,i);b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0);M.positionScreen.copy(A);M.customUpdateCallback?M.customUpdateCallback(M):M.updateLensFlares();b.uniform1i(B.renderType,2);b.enable(b.BLEND);N=0;for(y=M.lensFlares.length;N<y;N++)w=M.lensFlares[N],0.001<w.opacity&&0.001<w.scale&&(A.x=w.x,A.y=w.y,A.z=w.z,I=w.size*w.scale/f,G.x=I*C,G.y=I,b.uniform3f(B.screenPosition,A.x,A.y,A.z),b.uniform2f(B.scale,G.x,G.y),b.uniform1f(B.rotation,w.rotation),b.uniform1f(B.opacity,
w.opacity),b.uniform3f(B.color,w.color.r,w.color.g,w.color.b),c.setBlending(w.blending,w.blendEquation,w.blendSrc,w.blendDst),c.setTexture(w.texture,1),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}b.enable(b.CULL_FACE);b.enable(b.DEPTH_TEST);b.depthMask(!0)}}};THREE.ShadowMapPlugin=function(){var a,b,c,d,e,f,h=new THREE.Frustum,g=new THREE.Matrix4,i=new THREE.Vector3,j=new THREE.Vector3,l=new THREE.Vector3;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,c){b.shadowMapEnabled&&b.shadowMapAutoUpdate&&this.update(a,c)};this.update=function(m,n){var p,t,q,r,s,u,z,C,F,H=[];r=0;a.clearColor(1,1,1,1);a.disable(a.BLEND);a.enable(a.CULL_FACE);a.frontFace(a.CCW);b.shadowMapCullFace===THREE.CullFaceFront?
a.cullFace(a.FRONT):a.cullFace(a.BACK);b.setDepthTest(!0);p=0;for(t=m.__lights.length;p<t;p++)if(q=m.__lights[p],q.castShadow)if(q instanceof THREE.DirectionalLight&&q.shadowCascade)for(s=0;s<q.shadowCascadeCount;s++){var I;if(q.shadowCascadeArray[s])I=q.shadowCascadeArray[s];else{F=q;z=s;I=new THREE.DirectionalLight;I.isVirtual=!0;I.onlyShadow=!0;I.castShadow=!0;I.shadowCameraNear=F.shadowCameraNear;I.shadowCameraFar=F.shadowCameraFar;I.shadowCameraLeft=F.shadowCameraLeft;I.shadowCameraRight=F.shadowCameraRight;
I.shadowCameraBottom=F.shadowCameraBottom;I.shadowCameraTop=F.shadowCameraTop;I.shadowCameraVisible=F.shadowCameraVisible;I.shadowDarkness=F.shadowDarkness;I.shadowBias=F.shadowCascadeBias[z];I.shadowMapWidth=F.shadowCascadeWidth[z];I.shadowMapHeight=F.shadowCascadeHeight[z];I.pointsWorld=[];I.pointsFrustum=[];C=I.pointsWorld;u=I.pointsFrustum;for(var G=0;8>G;G++)C[G]=new THREE.Vector3,u[G]=new THREE.Vector3;C=F.shadowCascadeNearZ[z];F=F.shadowCascadeFarZ[z];u[0].set(-1,-1,C);u[1].set(1,-1,C);u[2].set(-1,
1,C);u[3].set(1,1,C);u[4].set(-1,-1,F);u[5].set(1,-1,F);u[6].set(-1,1,F);u[7].set(1,1,F);I.originalCamera=n;u=new THREE.Gyroscope;u.position=q.shadowCascadeOffset;u.add(I);u.add(I.target);n.add(u);q.shadowCascadeArray[s]=I;console.log("Created virtualLight",I)}z=q;C=s;F=z.shadowCascadeArray[C];F.position.copy(z.position);F.target.position.copy(z.target.position);F.lookAt(F.target);F.shadowCameraVisible=z.shadowCameraVisible;F.shadowDarkness=z.shadowDarkness;F.shadowBias=z.shadowCascadeBias[C];u=z.shadowCascadeNearZ[C];
z=z.shadowCascadeFarZ[C];F=F.pointsFrustum;F[0].z=u;F[1].z=u;F[2].z=u;F[3].z=u;F[4].z=z;F[5].z=z;F[6].z=z;F[7].z=z;H[r]=I;r++}else H[r]=q,r++;p=0;for(t=H.length;p<t;p++){q=H[p];q.shadowMap||(s=THREE.LinearFilter,b.shadowMapType===THREE.PCFSoftShadowMap&&(s=THREE.NearestFilter),q.shadowMap=new THREE.WebGLRenderTarget(q.shadowMapWidth,q.shadowMapHeight,{minFilter:s,magFilter:s,format:THREE.RGBAFormat}),q.shadowMapSize=new THREE.Vector2(q.shadowMapWidth,q.shadowMapHeight),q.shadowMatrix=new THREE.Matrix4);
if(!q.shadowCamera){if(q instanceof THREE.SpotLight)q.shadowCamera=new THREE.PerspectiveCamera(q.shadowCameraFov,q.shadowMapWidth/q.shadowMapHeight,q.shadowCameraNear,q.shadowCameraFar);else if(q instanceof THREE.DirectionalLight)q.shadowCamera=new THREE.OrthographicCamera(q.shadowCameraLeft,q.shadowCameraRight,q.shadowCameraTop,q.shadowCameraBottom,q.shadowCameraNear,q.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}m.add(q.shadowCamera);!0===m.autoUpdate&&m.updateMatrixWorld()}q.shadowCameraVisible&&
!q.cameraHelper&&(q.cameraHelper=new THREE.CameraHelper(q.shadowCamera),q.shadowCamera.add(q.cameraHelper));if(q.isVirtual&&I.originalCamera==n){s=n;r=q.shadowCamera;u=q.pointsFrustum;F=q.pointsWorld;i.set(Infinity,Infinity,Infinity);j.set(-Infinity,-Infinity,-Infinity);for(z=0;8>z;z++)C=F[z],C.copy(u[z]),THREE.ShadowMapPlugin.__projector.unprojectVector(C,s),C.applyMatrix4(r.matrixWorldInverse),C.x<i.x&&(i.x=C.x),C.x>j.x&&(j.x=C.x),C.y<i.y&&(i.y=C.y),C.y>j.y&&(j.y=C.y),C.z<i.z&&(i.z=C.z),C.z>j.z&&
(j.z=C.z);r.left=i.x;r.right=j.x;r.top=j.y;r.bottom=i.y;r.updateProjectionMatrix()}r=q.shadowMap;u=q.shadowMatrix;s=q.shadowCamera;s.position.getPositionFromMatrix(q.matrixWorld);l.getPositionFromMatrix(q.target.matrixWorld);s.lookAt(l);s.updateMatrixWorld();s.matrixWorldInverse.getInverse(s.matrixWorld);q.cameraHelper&&(q.cameraHelper.visible=q.shadowCameraVisible);q.shadowCameraVisible&&q.cameraHelper.update();u.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);u.multiply(s.projectionMatrix);u.multiply(s.matrixWorldInverse);
g.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse);h.setFromMatrix(g);b.setRenderTarget(r);b.clear();F=m.__webglObjects;q=0;for(r=F.length;q<r;q++)if(z=F[q],u=z.object,z.render=!1,u.visible&&u.castShadow&&(!(u instanceof THREE.Mesh||u instanceof THREE.ParticleSystem)||!u.frustumCulled||h.intersectsObject(u)))u._modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,u.matrixWorld),z.render=!0;q=0;for(r=F.length;q<r;q++)z=F[q],z.render&&(u=z.object,z=z.buffer,G=u.material instanceof THREE.MeshFaceMaterial?
u.material.materials[0]:u.material,C=0<u.geometry.morphTargets.length&&G.morphTargets,G=u instanceof THREE.SkinnedMesh&&G.skinning,C=u.customDepthMaterial?u.customDepthMaterial:G?C?f:e:C?d:c,z instanceof THREE.BufferGeometry?b.renderBufferDirect(s,m.__lights,null,C,z,u):b.renderBuffer(s,m.__lights,null,C,z,u));F=m.__webglObjectsImmediate;q=0;for(r=F.length;q<r;q++)z=F[q],u=z.object,u.visible&&u.castShadow&&(u._modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,u.matrixWorld),b.renderImmediateObject(s,
m.__lights,null,c,u))}p=b.getClearColor();t=b.getClearAlpha();a.clearColor(p.r,p.g,p.b,t);a.enable(a.BLEND);b.shadowMapCullFace===THREE.CullFaceFront&&a.cullFace(a.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;THREE.SpritePlugin=function(){function a(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var b,c,d,e,f,h,g,i,j,l;this.init=function(a){b=a.context;c=a;d=a.getPrecision();e=new Float32Array(16);f=new Uint16Array(6);a=0;e[a++]=-1;e[a++]=-1;e[a++]=0;e[a++]=0;e[a++]=1;e[a++]=-1;e[a++]=1;e[a++]=0;e[a++]=1;e[a++]=1;e[a++]=1;e[a++]=1;e[a++]=-1;e[a++]=1;e[a++]=0;e[a++]=1;a=0;f[a++]=0;f[a++]=1;f[a++]=2;f[a++]=0;f[a++]=2;f[a++]=3;h=b.createBuffer();g=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,h);b.bufferData(b.ARRAY_BUFFER,
e,b.STATIC_DRAW);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.bufferData(b.ELEMENT_ARRAY_BUFFER,f,b.STATIC_DRAW);var a=THREE.ShaderSprite.sprite,n=b.createProgram(),p=b.createShader(b.FRAGMENT_SHADER),t=b.createShader(b.VERTEX_SHADER),q="precision "+d+" float;\n";b.shaderSource(p,q+a.fragmentShader);b.shaderSource(t,q+a.vertexShader);b.compileShader(p);b.compileShader(t);b.attachShader(n,p);b.attachShader(n,t);b.linkProgram(n);i=n;j={};l={};j.position=b.getAttribLocation(i,"position");j.uv=b.getAttribLocation(i,
"uv");l.uvOffset=b.getUniformLocation(i,"uvOffset");l.uvScale=b.getUniformLocation(i,"uvScale");l.rotation=b.getUniformLocation(i,"rotation");l.scale=b.getUniformLocation(i,"scale");l.alignment=b.getUniformLocation(i,"alignment");l.color=b.getUniformLocation(i,"color");l.map=b.getUniformLocation(i,"map");l.opacity=b.getUniformLocation(i,"opacity");l.useScreenCoordinates=b.getUniformLocation(i,"useScreenCoordinates");l.sizeAttenuation=b.getUniformLocation(i,"sizeAttenuation");l.screenPosition=b.getUniformLocation(i,
"screenPosition");l.modelViewMatrix=b.getUniformLocation(i,"modelViewMatrix");l.projectionMatrix=b.getUniformLocation(i,"projectionMatrix");l.fogType=b.getUniformLocation(i,"fogType");l.fogDensity=b.getUniformLocation(i,"fogDensity");l.fogNear=b.getUniformLocation(i,"fogNear");l.fogFar=b.getUniformLocation(i,"fogFar");l.fogColor=b.getUniformLocation(i,"fogColor");l.alphaTest=b.getUniformLocation(i,"alphaTest")};this.render=function(d,e,f,t){var q=d.__webglSprites,r=q.length;if(r){var s=j,u=l,z=t/
f,f=0.5*f,C=0.5*t;b.useProgram(i);b.enableVertexAttribArray(s.position);b.enableVertexAttribArray(s.uv);b.disable(b.CULL_FACE);b.enable(b.BLEND);b.bindBuffer(b.ARRAY_BUFFER,h);b.vertexAttribPointer(s.position,2,b.FLOAT,!1,16,0);b.vertexAttribPointer(s.uv,2,b.FLOAT,!1,16,8);b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,g);b.uniformMatrix4fv(u.projectionMatrix,!1,e.projectionMatrix.elements);b.activeTexture(b.TEXTURE0);b.uniform1i(u.map,0);var F=s=0,H=d.fog;H?(b.uniform3f(u.fogColor,H.color.r,H.color.g,H.color.b),
H instanceof THREE.Fog?(b.uniform1f(u.fogNear,H.near),b.uniform1f(u.fogFar,H.far),b.uniform1i(u.fogType,1),F=s=1):H instanceof THREE.FogExp2&&(b.uniform1f(u.fogDensity,H.density),b.uniform1i(u.fogType,2),F=s=2)):(b.uniform1i(u.fogType,0),F=s=0);for(var I,G,A=[],H=0;H<r;H++)I=q[H],G=I.material,I.visible&&0!==G.opacity&&(G.useScreenCoordinates?I.z=-I.position.z:(I._modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,I.matrixWorld),I.z=-I._modelViewMatrix.elements[14]));q.sort(a);for(H=0;H<r;H++)I=
q[H],G=I.material,I.visible&&0!==G.opacity&&(G.map&&G.map.image&&G.map.image.width)&&(b.uniform1f(u.alphaTest,G.alphaTest),!0===G.useScreenCoordinates?(b.uniform1i(u.useScreenCoordinates,1),b.uniform3f(u.screenPosition,(I.position.x*c.devicePixelRatio-f)/f,(C-I.position.y*c.devicePixelRatio)/C,Math.max(0,Math.min(1,I.position.z))),A[0]=c.devicePixelRatio,A[1]=c.devicePixelRatio):(b.uniform1i(u.useScreenCoordinates,0),b.uniform1i(u.sizeAttenuation,G.sizeAttenuation?1:0),b.uniformMatrix4fv(u.modelViewMatrix,
!1,I._modelViewMatrix.elements),A[0]=1,A[1]=1),e=d.fog&&G.fog?F:0,s!==e&&(b.uniform1i(u.fogType,e),s=e),e=1/(G.scaleByViewport?t:1),A[0]*=e*z*I.scale.x,A[1]*=e*I.scale.y,b.uniform2f(u.uvScale,G.uvScale.x,G.uvScale.y),b.uniform2f(u.uvOffset,G.uvOffset.x,G.uvOffset.y),b.uniform2f(u.alignment,G.alignment.x,G.alignment.y),b.uniform1f(u.opacity,G.opacity),b.uniform3f(u.color,G.color.r,G.color.g,G.color.b),b.uniform1f(u.rotation,I.rotation),b.uniform2fv(u.scale,A),c.setBlending(G.blending,G.blendEquation,
G.blendSrc,G.blendDst),c.setDepthTest(G.depthTest),c.setDepthWrite(G.depthWrite),c.setTexture(G.map,0),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0));b.enable(b.CULL_FACE)}}};THREE.DepthPassPlugin=function(){this.enabled=!1;this.renderTarget=null;var a,b,c,d,e,f,h=new THREE.Frustum,g=new THREE.Matrix4;this.init=function(g){a=g.context;b=g;var g=THREE.ShaderLib.depthRGBA,h=THREE.UniformsUtils.clone(g.uniforms);c=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h});d=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0});e=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,
vertexShader:g.vertexShader,uniforms:h,skinning:!0});f=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});c._shadowPass=!0;d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(i,j){var l,m,n,p,t,q;a.clearColor(1,1,1,1);a.disable(a.BLEND);b.setDepthTest(!0);!0===i.autoUpdate&&i.updateMatrixWorld();j.matrixWorldInverse.getInverse(j.matrixWorld);g.multiplyMatrices(j.projectionMatrix,
j.matrixWorldInverse);h.setFromMatrix(g);b.setRenderTarget(this.renderTarget);b.clear();q=i.__webglObjects;l=0;for(m=q.length;l<m;l++)if(n=q[l],t=n.object,n.render=!1,t.visible&&(!(t instanceof THREE.Mesh||t instanceof THREE.ParticleSystem)||!t.frustumCulled||h.intersectsObject(t)))t._modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,t.matrixWorld),n.render=!0;var r;l=0;for(m=q.length;l<m;l++)if(n=q[l],n.render&&(t=n.object,n=n.buffer,!(t instanceof THREE.ParticleSystem)||t.customDepthMaterial))(r=
t.material instanceof THREE.MeshFaceMaterial?t.material.materials[0]:t.material)&&b.setMaterialFaces(t.material),p=0<t.geometry.morphTargets.length&&r.morphTargets,r=t instanceof THREE.SkinnedMesh&&r.skinning,p=t.customDepthMaterial?t.customDepthMaterial:r?p?f:e:p?d:c,n instanceof THREE.BufferGeometry?b.renderBufferDirect(j,i.__lights,null,p,n,t):b.renderBuffer(j,i.__lights,null,p,n,t);q=i.__webglObjectsImmediate;l=0;for(m=q.length;l<m;l++)n=q[l],t=n.object,t.visible&&(t._modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,
t.matrixWorld),b.renderImmediateObject(j,i.__lights,null,c,t));l=b.getClearColor();m=b.getClearAlpha();a.clearColor(l.r,l.g,l.b,m);a.enable(a.BLEND)}};THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};THREE.ShaderSprite={sprite:{vertexShader:"uniform int useScreenCoordinates;\nuniform int sizeAttenuation;\nuniform vec3 screenPosition;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 alignment;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}",
fragmentShader:"uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"}};
// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:11,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Full-screen textured quad shader
 */

THREE.CopyShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"opacity":  { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform float opacity;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel = texture2D( tDiffuse, vUv );",
			"gl_FragColor = opacity * texel;",

		"}"

	].join("\n")

};
/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Dot screen shader
 * based on glfx.js sepia shader
 * https://github.com/evanw/glfx.js
 */

THREE.DotScreenShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"tSize":    { type: "v2", value: new THREE.Vector2( 256, 256 ) },
		"center":   { type: "v2", value: new THREE.Vector2( 0.5, 0.5 ) },
		"angle":    { type: "f", value: 1.57 },
		"scale":    { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform vec2 center;",
		"uniform float angle;",
		"uniform float scale;",
		"uniform vec2 tSize;",

		"uniform sampler2D tDiffuse;",

		"varying vec2 vUv;",

		"float pattern() {",

			"float s = sin( angle ), c = cos( angle );",

			"vec2 tex = vUv * tSize - center;",
			"vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;",

			"return ( sin( point.x ) * sin( point.y ) ) * 4.0;",

		"}",

		"void main() {",

			"vec4 color = texture2D( tDiffuse, vUv );",

			"float average = ( color.r + color.g + color.b ) / 3.0;",

			"gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );",

		"}"

	].join("\n")

};
/**
 * @author felixturner / http://airtight.cc/
 *
 * RGB Shift Shader
 * Shifts red and blue channels from center in opposite directions
 * Ported from http://kriss.cx/tom/2009/05/rgb-shift/
 * by Tom Butterworth / http://kriss.cx/tom/
 *
 * amount: shift distance (1 is width of input)
 * angle: shift angle in radians
 */

THREE.RGBShiftShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"amount":   { type: "f", value: 0.005 },
		"angle":    { type: "f", value: 0.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float amount;",
		"uniform float angle;",

		"varying vec2 vUv;",

		"void main() {",

			"vec2 offset = amount * vec2( cos(angle), sin(angle));",
			"vec4 cr = texture2D(tDiffuse, vUv + offset);",
			"vec4 cga = texture2D(tDiffuse, vUv);",
			"vec4 cb = texture2D(tDiffuse, vUv - offset);",
			"gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);",

		"}"

	].join("\n")

};
/**
 * @author alteredq / http://alteredqualia.com/
 * @author davidedc / http://www.sketchpatch.net/
 *
 * NVIDIA FXAA by Timothy Lottes
 * http://timothylottes.blogspot.com/2011/06/fxaa3-source-released.html
 * - WebGL port by @supereggbert
 * http://www.glge.org/demos/fxaa/
 */

THREE.FXAAShader = {

	uniforms: {

		"tDiffuse":   { type: "t", value: null },
		"resolution": { type: "v2", value: new THREE.Vector2( 1 / 1024, 1 / 512 )  }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform vec2 resolution;",

		"varying vec2 vUv;",

		"#define FXAA_REDUCE_MIN   (1.0/128.0)",
		"#define FXAA_REDUCE_MUL   (1.0/8.0)",
		"#define FXAA_SPAN_MAX     8.0",

		"void main() {",

			"vec3 rgbNW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ).xyz;",
			"vec3 rgbNE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ).xyz;",
			"vec3 rgbSW = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ).xyz;",
			"vec3 rgbSE = texture2D( tDiffuse, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ).xyz;",
			"vec4 rgbaM  = texture2D( tDiffuse,  gl_FragCoord.xy  * resolution );",
			"vec3 rgbM  = rgbaM.xyz;",
			"float opacity  = rgbaM.w;",

			"vec3 luma = vec3( 0.299, 0.587, 0.114 );",

			"float lumaNW = dot( rgbNW, luma );",
			"float lumaNE = dot( rgbNE, luma );",
			"float lumaSW = dot( rgbSW, luma );",
			"float lumaSE = dot( rgbSE, luma );",
			"float lumaM  = dot( rgbM,  luma );",
			"float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );",
			"float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );",

			"vec2 dir;",
			"dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));",
			"dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));",

			"float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );",

			"float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );",
			"dir = min( vec2( FXAA_SPAN_MAX,  FXAA_SPAN_MAX),",
				  "max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),",
						"dir * rcpDirMin)) * resolution;",

			"vec3 rgbA = texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ).xyz;",
			"rgbA += texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ).xyz;",
			"rgbA *= 0.5;",

			"vec3 rgbB = texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * -0.5 ).xyz;",
			"rgbB += texture2D( tDiffuse, gl_FragCoord.xy  * resolution + dir * 0.5 ).xyz;",
			"rgbB *= 0.25;",
			"rgbB += rgbA * 0.5;",

			"float lumaB = dot( rgbB, luma );",

			"if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) ) {",

				"gl_FragColor = vec4( rgbA, opacity );",

			"} else {",

				"gl_FragColor = vec4( rgbB, opacity );",

			"}",

		"}"

	].join("\n")

};/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Triangle blur shader
 * based on glfx.js triangle blur shader
 * https://github.com/evanw/glfx.js
 *
 * A basic blur filter, which convolves the image with a
 * pyramid filter. The pyramid filter is separable and is applied as two
 * perpendicular triangle filters.
 */

THREE.TriangleBlurShader = {

	uniforms : {

		"texture": { type: "t", value: null },
		"delta":   { type: "v2", value:new THREE.Vector2( 1, 1 )  }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"#define ITERATIONS 10.0",

		"uniform sampler2D texture;",
		"uniform vec2 delta;",

		"varying vec2 vUv;",

		"float random( vec3 scale, float seed ) {",

			// use the fragment position for a different seed per-pixel

			"return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed );",

		"}",

		"void main() {",

			"vec4 color = vec4( 0.0 );",

			"float total = 0.0;",

			// randomize the lookup values to hide the fixed number of samples

			"float offset = random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );",

			"for ( float t = -ITERATIONS; t <= ITERATIONS; t ++ ) {",

				"float percent = ( t + offset - 0.5 ) / ITERATIONS;",
				"float weight = 1.0 - abs( percent );",

				"color += texture2D( texture, vUv + delta * percent ) * weight;",
				"total += weight;",

			"}",

			"gl_FragColor = color / total;",

		"}"

	].join("\n")

};/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
 *
 * - 9 samples per pass
 * - standard deviation 2.7
 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
 */

THREE.HorizontalBlurShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"h":        { type: "f", value: 1.0 / 512.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float h;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 sum = vec4( 0.0 );",

			"sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;",
			"sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;",
			"sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;",
			"sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;",
			"sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;",

			"gl_FragColor = sum;",

		"}"

	].join("\n")

};/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Two pass Gaussian blur filter (horizontal and vertical blur shaders)
 * - described in http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/
 *   and used in http://www.cake23.de/traveling-wavefronts-lit-up.html
 *
 * - 9 samples per pass
 * - standard deviation 2.7
 * - "h" and "v" parameters should be set to "1 / width" and "1 / height"
 */

THREE.VerticalBlurShader = {

	uniforms: {

		"tDiffuse": { type: "t", value: null },
		"v":        { type: "f", value: 1.0 / 512.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse;",
		"uniform float v;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 sum = vec4( 0.0 );",

			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;",
			"sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;",

			"gl_FragColor = sum;",

		"}"

	].join("\n")

};/**
 * @author stemkoski / http://github.com/stemkoski
 *
 * Blend two textures additively
 */

THREE.AdditiveBlendShader = {

	uniforms: {
	
		"tDiffuse1": { type: "t", value: null },
		"tDiffuse2": { type: "t", value: null }
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"uniform sampler2D tDiffuse1;",
		"uniform sampler2D tDiffuse2;",

		"varying vec2 vUv;",

		"void main() {",

			"vec4 texel1 = texture2D( tDiffuse1, vUv );",
			"vec4 texel2 = texture2D( tDiffuse2, vUv );",
			"gl_FragColor = texel1 + texel2;",
		"}"

	].join("\n")

};/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.EffectComposer = function ( renderer, renderTarget ) {

	this.renderer = renderer;

	if ( renderTarget === undefined ) {

		var width = window.innerWidth || 1;
		var height = window.innerHeight || 1;
		var parameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: false };

		renderTarget = new THREE.WebGLRenderTarget( width, height, parameters );

	}

	this.renderTarget1 = renderTarget;
	this.renderTarget2 = renderTarget.clone();

	this.writeBuffer = this.renderTarget1;
	this.readBuffer = this.renderTarget2;

	this.autoRenderScreen = true;

	this.passes = [];

	if ( THREE.CopyShader === undefined )
		console.error( "THREE.EffectComposer relies on THREE.CopyShader" );

	this.copyPass = new THREE.ShaderPass( THREE.CopyShader );

};

THREE.EffectComposer.prototype = {

	swapBuffers: function() {

		var tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;

	},

	addPass: function ( pass ) {

		this.passes.push( pass );

	},

	insertPass: function ( pass, index ) {

		this.passes.splice( index, 0, pass );

	},

	render: function ( delta ) {

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		var lastRenderScreen = false;

		var maskActive = false;

		var pass, i, il = this.passes.length;

		for ( i = 0; i < il; i ++ ) {

			pass = this.passes[ i ];

			if ( !pass.enabled ) continue;

			// If that's the last pass and we have autoRenderScreen enabled,
			// switch renderToScreen to true
			if ((i == il-1) && (this.autoRenderScreen)) {
				lastRenderScreen = pass.renderToScreen;
				pass.renderToScreen = true;
			}

			pass.render( this.renderer, this.writeBuffer, this.readBuffer, delta, maskActive );

			if ( pass.needsSwap ) {

				if ( maskActive ) {

					var context = this.renderer.context;

					context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );

					this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, delta );

					context.stencilFunc( context.EQUAL, 1, 0xffffffff );

				}

				this.swapBuffers();

			}

			if ((i == il-1) && (this.autoRenderScreen))
				pass.renderToScreen = lastRenderScreen;

			if ( pass instanceof THREE.MaskPass ) {

				maskActive = true;

			} else if ( pass instanceof THREE.ClearMaskPass ) {

				maskActive = false;

			}

		}

	},

	reset: function ( renderTarget ) {

		if ( renderTarget === undefined ) {

			renderTarget = this.renderTarget1.clone();

			renderTarget.width = window.innerWidth;
			renderTarget.height = window.innerHeight;

		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

	},

	setSize: function ( width, height ) {

		var renderTarget = this.renderTarget1.clone();

		renderTarget.width = width;
		renderTarget.height = height;
		
		for (var i=0; i<this.passes.length; i++) {
		    if (this.passes[i] instanceof THREE.ComposerPass) {
		        this.passes[i].setSize(width, height);
		    }
		}

		this.reset( renderTarget );

	}

};

// shared ortho camera

THREE.EffectComposer.camera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 );

THREE.EffectComposer.quad = new THREE.Mesh( new THREE.PlaneGeometry( 2, 2 ), null );

THREE.EffectComposer.scene = new THREE.Scene();
THREE.EffectComposer.scene.add( THREE.EffectComposer.quad );
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.RenderPass = function ( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

	this.scene = scene;
	this.camera = camera;

	this.overrideMaterial = overrideMaterial;

	this.clearColor = clearColor;
	this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 1;

	this.oldClearColor = new THREE.Color();
	this.oldClearAlpha = 1;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

};

THREE.RenderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		this.scene.overrideMaterial = this.overrideMaterial;

		if ( this.clearColor ) {

			this.oldClearColor.copy( renderer.getClearColor() );
			this.oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		renderer.render( this.scene, this.camera, readBuffer, this.clear );

		if ( this.clearColor ) {

			renderer.setClearColor( this.oldClearColor, this.oldClearAlpha );

		}

		this.scene.overrideMaterial = null;

	}

};
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.MaskPass = function ( scene, camera ) {

	this.scene = scene;
	this.camera = camera;

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

	this.inverse = false;

};

THREE.MaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		// don't update color or depth

		context.colorMask( false, false, false, false );
		context.depthMask( false );

		// set up stencil

		var writeValue, clearValue;

		if ( this.inverse ) {

			writeValue = 0;
			clearValue = 1;

		} else {

			writeValue = 1;
			clearValue = 0;

		}

		context.enable( context.STENCIL_TEST );
		context.stencilOp( context.REPLACE, context.REPLACE, context.REPLACE );
		context.stencilFunc( context.ALWAYS, writeValue, 0xffffffff );
		context.clearStencil( clearValue );

		// draw into the stencil buffer

		renderer.render( this.scene, this.camera, readBuffer, this.clear );
		renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		// re-enable update of color and depth

		context.colorMask( true, true, true, true );
		context.depthMask( true );

		// only render where stencil is set to 1

		context.stencilFunc( context.EQUAL, 1, 0xffffffff );  // draw if == 1
		context.stencilOp( context.KEEP, context.KEEP, context.KEEP );

	}

};


THREE.ClearMaskPass = function () {

	this.enabled = true;

};

THREE.ClearMaskPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		var context = renderer.context;

		context.disable( context.STENCIL_TEST );

	}

};
/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.ShaderPass = function ( shader, textureID ) {

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	this.uniforms = THREE.UniformsUtils.clone( shader.uniforms );

	this.material = new THREE.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.renderToScreen = false;

	this.enabled = true;
	this.needsSwap = true;
	this.clear = false;

};

THREE.ShaderPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer;

		}

		THREE.EffectComposer.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera );

		} else {

			renderer.render( THREE.EffectComposer.scene, THREE.EffectComposer.camera, writeBuffer, this.clear );

		}

	}

};
/**
 * @author Ioannis Charalampidis <ioannis.charalampidis[at]cern.ch>
 */

THREE.ComposerPass = function ( renderer, width, height, mixShader ) {

    this.width = width;
    this.height = height;
    this.mixShader = mixShader || THREE.AdditiveBlendShader;

	var renderTargetParameters = { 
    	    minFilter: THREE.LinearFilter, 
    	    magFilter: THREE.LinearFilter, 
    	    format: THREE.RGBFormat, 
    	    stencilBuffer: false 
    	};

	this.renderTarget = new THREE.WebGLRenderTarget( this.width, this.height, renderTargetParameters );
    this.composer = new THREE.EffectComposer( renderer );
    this.composer.autoRenderScreen = false;
    
    this.blendPass = new THREE.ShaderPass( this.mixShader, "tDiffuse2" );

	this.enabled = true;
	this.clear = true;
	this.needsSwap = false;

};

THREE.ComposerPass.prototype = {

	render: function ( renderer, writeBuffer, readBuffer, delta ) {
	    
	    this.composer.render( delta );
	    this.composer.swapBuffers();
	    
	    this.blendPass.uniforms[ 'tDiffuse1' ].value = this.composer.renderTarget2;
	    this.blendPass.renderToScreen = this.renderToScreen;
    	return this.blendPass.render( renderer, writeBuffer, readBuffer, delta );
    	
	},
	
	setSize: function( width, height ) {
	    this.composer.setSize( width, height );
	    this.renderTarget.width = width;
	    this.renderTarget.height = height;
	},
	
	addPass: function(pass) {
	    this.composer.addPass(pass);
	}

};

/**
 * Virtual Atom Smasher namespace
 */
var M = {
    version: '1.0'
};

(function(_NS_){


/**
 * Shorthand functions
 */
function _undef(v) { return (v == undefined); }
_NS_.SmartObject = function(cfg) {

	// What parameters are being handled
	this.config = cfg || { };

	// Process parameters
	var params = cfg.parameters || {}; this.varValues = { }; this.varConfig = { };
	$.each(params, function(k,v) {
		if (v['default'] == undefined) v['default'] = 0;
		this.varValues[k] = v['default'];
		this.varConfig[k] = v;
	});

	// Fully-overridable functions for the binding variables
	this.geometryConstructor = function(cfg) 			{ return THREE.CubeGeometry(1,1,1); };
	this.materialConstructor = function(cfg) 			{ return THREE.MeshBasicMaterial({ 'color': 0xff0000 }); };
	this.meshConstructor     = function(cfg, geom, mat) { return THREE.Mesh(geom, mat); };
	this.geometryBinder      = function(cfg, geom) 		{ };
	this.materialBinder      = function(cfg, mat) 		{ };
	this.meshBinder          = function(cfg, mesh) 		{ };

}

_NS_.SmartObject.prototype.regenerate = function() {

	/* Build geometry(ies) */
	var geom = this.geometryConstructor( this.varValues );
	this.geometryBinder( geom );
	
	/* Build material(s) */
	var mat = this.materialConstructor( this.varValues );
	this.materialBinder( mat );

	/* Build mesh(es) */
	var mesh = this.meshConstructor( this.varValues, geom, mat );
	this.meshBinder( mesh );

	/* Update mesh array */

}

/**
 * 3D Viewport with renderer
 * 
 * A viewport is the basic setup of renderable 3D scene with camera and 
 * animation capabilitis. Most of the scene objects are stored here.
 *
 */
_NS_.Viewport = function(options) {
    var op = options || { };
    if (!op.container) {
        this.container = document.createElement('div');
		document.body.appendChild( this.container );
    } else {
        this.container = $(op.container);
    }
    
    this.fullscreen = op.fullscreen || false;
    this.bg = op.bg || 0x000000;
    this.stats = op.stats == undefined ? true : op.stats;
    this.autostop = op.autostop == undefined ? true : op.autostop;
    this.autohover = op.autohover == undefined ? true : op.autohover;
	this.animating = (op.animating == undefined) ? true : op.animating;
        
    // Stack of objects that should receive update events
    this.updateListeners = [ ];

    // Setup variables
    var self=this;
	this.lastFrameTime = Date.now();
	
	// Setup renderer
    var w=$(this.container).width(), h=$(this.container).height();
    if (this.fullscreen) { w=$(window).width(); h=$(window).height(); };
    console.log(w,h);

	this.renderer = new THREE.WebGLRenderer( { antialias: true, clearColor: this.bg, clearAlpha: 1 } );
	$(this.container).append(this.renderer.domElement);
	
	// Setup scene
	this.scene = new THREE.Scene();
	
	// Setup camera
	this.camera = new THREE.PerspectiveCamera( 40, w/h, 0.1, 10000 );
	this.camera.position.set( 10, 0, 0);
	this.camera.lookAt(new THREE.Vector3(0,0,0));
	
	// Check if we should add stats
	if (this.stats) {
	    this.stats = new Stats();
	    $(this.container).append( this.stats.domElement );
		$(this.stats.domElement).css({
		    'position': 'absolute',
		    'top': 0, 'left': 0
		});
	}
	
	// Setup postprocessing composer
    this.composer = new THREE.EffectComposer( this.renderer );
    var r = new THREE.RenderPass( this.scene, this.camera );
    this.composer.addPass( r );
    this.renderPasses = [ ];
	
	// Initialize and bind on event callbacks
	this.resize();
	$(window).resize(function(){ self.resize() });
	
	// Keep a vector with the normalized mouse position
	this.mouse = new THREE.Vector2(0, 0);
	$(this.renderer.domElement).mousemove(function(event) {

        // Get the offset of the DOM element
        var parentOffset = $(self.renderer.domElement).offset(); 

        // Update mouse position
	    self.mouse.x = ( (event.pageX - parentOffset.left) / self.width ) * 2 - 1;
    	self.mouse.y = - ( (event.pageY - parentOffset.top) / self.height ) * 2 + 1;
    	
	});

	// Prepare projectors & ray tracers that are used to find a hovered object
	this.projector = new THREE.Projector();
	this.raycaster = new THREE.Raycaster();
	this.currentHover = false;
    
	// Start animation, unless otherwise told
	if (this.animating) this.animate();

	// Register autostop handlers
	$(window).blur(function() {
	    if (self.autostop) self.animating=false;
	});
	$(window).focus(function() {
	    if (self.autostop) {
	        self.animating=true;
	        self.animate();
        }
	});
	
};

/**
 * Add a listener that will receive update events
 */
_NS_.Viewport.prototype.addUpdateHandler = function(handler) {
    this.updateListeners.push(handler);
}

/**
 * Remove an update event listener
 */
_NS_.Viewport.prototype.removeUpdateHandler = function(handler) {
    var i = this.updateListeners.indexOf(handler);
    if (i<0) return;
    this.updateListeners.splice(i,1);
}

/**
 * Add an extra render pass
 */
_NS_.Viewport.prototype.insertPass = function(pass, index) {
    this.renderPasses.splice( index, 0, pass );
    this.composer.insertPass(pass, index);
}

/**
 * Add an extra render pass
 */
_NS_.Viewport.prototype.addPass = function(pass) {
    this.renderPasses.push(pass);
    this.composer.addPass(pass);
}

/**
 * Get the fore-most object that is under the user's mouse
 */
_NS_.Viewport.prototype.getHoverObject = function() {
    
    // Calculate the source vector
	var vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 1 );
	this.projector.unprojectVector( vector, this.camera );

    // Cast ray
	this.raycaster.set( this.camera.position, vector.sub( this.camera.position ).normalize() );

    // Find intersections
	var intersects = this.raycaster.intersectObjects( this.scene.children, true );
    
    // Check for no intersections
    if (intersects.length == 0) return false;
    
    // Check if there is a hover redirection via the 'hoverTarget' property
    for (var i=0; i<intersects.length; i++) {
        if (intersects[i].object.hoverTarget !== undefined) return intersects[i].object.hoverTarget;
    }
    return intersects[0].object;
    
}

/**
 * Resize the viewport and camera
 */
_NS_.Viewport.prototype.resize = function() {
    var w=$(this.container).width(), h=$(this.container).height();
    if (this.fullscreen) { w=$(window).width(); h=$(window).height(); };
    console.log(w,h);
    this.width = w;
    this.height = h;
	this.renderer.setSize( w,h );
	this.composer.setSize( w,h );
	this.camera.aspect = w/h;
	this.camera.updateProjectionMatrix();
};

/**
 * Overridable function to render the content
 */
_NS_.Viewport.prototype.render = function( delta ) {
    
    // Send update events
    for (var i=0; i<this.updateListeners.length; i++) {
        try{
            this.updateListeners[i]( delta );
        } catch(ex) {
            console.warn("Update exception: " + ex.toString());
        }
    }

    // Render
    if (this.renderPasses.length == 0) {
        this.renderer.render( this.scene, this.camera );
    } else {
        this.composer.render( delta );
    }
};

/**
 * Self-repeating function to initiate the animation sequence
 */
_NS_.Viewport.prototype.animate = function() {
    var self=this,
        time = Date.now();
    
    // Stop when animation stops
    if (!this.animating) return;
    
    // Continue animation (Before any fail-prone code)
    requestAnimationFrame( function(){ self.animate(); });

    // Calculate updates on hovered objects
    if (this.autohover) {
        var currentHover = this.getHoverObject();
        if (this.currentHover !== currentHover) {
            if (this.currentHover) $(this).trigger('hoverexit', this.currentHover);
            $(this).trigger('hoverenter', currentHover);
            this.currentHover = currentHover;
        }
    }
    
    // Calculate time delta in milliseconds
    this.render( time - this.lastFrameTime );
    this.lastFrameTime = time;

    // Update statistics
    if (this.stats) this.stats.update();
};


_NS_.ObjectPicker = function( viewport ) {
    
    this.projector = new THREE.Projector();
	this.raycaster = new THREE.Raycaster();
	this.mouse = new THREE.Vector2();
	this.viewport = viewport;
	this.intersects = [];	
	
};

_NS_.ObjectPicker.prototype.updateIntersectionsFromEvent = function( event ) {

    var parentOffset = $(this.viewport.renderer.domElement).offset(); 
	return this.updateIntersectionsFromPoint( event.pageX - parentOffset.left, event.clientY - parentOffset.top );
	
};

_NS_.ObjectPicker.prototype.updateIntersectionsFromPoint = function( x, y ) {

	this.mouse.x = ( x / this.viewport.width ) * 2 - 1;
	this.mouse.y = - ( y / this.viewport.height ) * 2 + 1;
	if (this.mouse.x < -1.0) this.mouse.x=-1.0;
	if (this.mouse.x > 1.0) this.mouse.x=1.0;
	if (this.mouse.y < -1.0) this.mouse.y=-1.0;
	if (this.mouse.y > 1.0) this.mouse.y=1.0;

    // Calculate the source vector
	var vector = new THREE.Vector3( this.mouse.x, this.mouse.y, 1 );
	this.projector.unprojectVector( vector, this.viewport.camera );

    // Cast ray
	this.raycaster.set( this.viewport.camera.position, vector.sub( this.viewport.camera.position ).normalize() );

    // Find intersections
	this.intersects = this.raycaster.intersectObjects( this.viewport.scene.children, true );
	
}

_NS_.ObjectPicker.prototype.getIntersection = function() {
    
    // Return the first pick target or the first object
	if ( this.intersects.length > 0 ) {
	    
	    // Check for pick targets
	    for (var i=0; i<this.intersects.length; i++) {
	        if (this.intersects[i].object.pickTarget !== undefined) {
	            return this.intersects[i].object.pickTarget;
	        }
	    }
	    
	    // No pick target? Pick the first available
	    return false;//this.intersects[0].object;
	    
    } else {
        return false;
    }

}

_NS_.SmasherFrame = function ( options ) {
    var self=this;
    var op = options || { };
    _NS_.Viewport.call(this, op);
    
    // Setup lighting
    var l = new THREE.DirectionalLight( 0xffffff );
    l.position.set(400, -400, 400);
    l.lookAt(new THREE.Vector3(0,0,0));
    this.scene.add(l);

    var la = new THREE.AmbientLight( 0x111111 );
    this.scene.add(la);

    this.camera.position.set( 0, -200, 100);
    this.camera.lookAt(new THREE.Vector3(0,-60,0));


    // Add a spinning cube
    /*
    var i = 1, sz=4;
    var cb1 = new THREE.CylinderGeometry(0,i,sz, 20, 1, 1, false),
        cb2 = new THREE.CylinderGeometry(0,i,sz, 20, 1, 1, false);
    var mat = new THREE.MeshPhongMaterial({'color': 0x8A8AFF, 'wireframe': false, side: THREE.DoubleSide});

    var a1 = new THREE.Mesh( cb1, mat ); a1.doubleSided = true; a1.position.set(-sz/2,0,0); a1.rotation.z = -Math.PI/2;
    var a2 = new THREE.Mesh( cb2, mat ); a2.doubleSided = true; a2.position.set(sz/2,0,0);  a2.rotation.z = Math.PI/2;
    var o = new THREE.Object3D();         o.position.set(0,0,0);
    o.add(a1); o.add(a2);

    this.o = o;
    this.scene.add(o);

    var cg = new THREE.SphereGeometry(0.4, 10);
    var cm = new THREE.MeshPhongMaterial({color: 0xff0000});
    var cmsh = new THREE.Mesh(cg, cm);
    this.scene.add(cmsh);
    */
    
    // Add the LHC ring
    this.lhc = new _NS_.LHCRing();
    this.scene.add(this.lhc);
    
    // Set environment if defined
    if (op.env !== undefined) this.setEnvironment(op.env);
    
    $(this).on('hoverenter', function(e) {
        console.log(e);
        if (e instanceof _NS_.LHCDipole) {
            console.log("DA!");
            e.position.z = 5;
        }
    });
    $(this).on('hoverexit', function(e) {
        if (e instanceof _NS_.LHCDipole) {
            console.log("Done!");
            e.position.z = 0;
        }
    });
    
    // Prepare a scene for the blurred objects
    this.blurScene = new THREE.Scene();

    // Prepare a secondary composer
    this.blurComposer = new THREE.ComposerPass( this.renderer, this.width, this.height );

    // Prepare the blur render passes
	this.blurHShaderPass = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	this.blurVShaderPass = new THREE.ShaderPass( THREE.VerticalBlurShader );
	
	// Stack the required render passes
	this.blurComposer.addPass( new THREE.RenderPass( this.blurScene, this.camera, undefined, new THREE.Color(0x000000) ) );
	this.blurComposer.addPass( this.blurHShaderPass );
	this.blurComposer.addPass( this.blurVShaderPass );
	
	// Add the composer pass to the current stack
	this.addPass( this.blurComposer );
	
	// Run resize again so it updates the shader stack
	this.resize();
    
    // Start animation thread
    this.animate();
    
};

_NS_.SmasherFrame.prototype = Object.create( _NS_.Viewport.prototype );

/**
 * Update the environment map materials
 */
_NS_.SmasherFrame.prototype.updateEnvmap = function() {
    if ((this.model != null) && (this.envMap != null)) {
    	for (var i=0; i<this.model.materials.length; i++) {
    	    this.model.materials[i].envMap = this.envMap;
    	    this.model.materials[i].needsUpdate = true;
    	}
    }
}

_NS_.SmasherFrame.prototype.resize = function(w,h) {
    _NS_.Viewport.prototype.resize.call(this, w, h);
    
    // Update blur uniforms
    if (this.blurVShaderPass !== undefined) {
    	this.blurVShaderPass.uniforms[ "v" ].value = 2 / this.height;
        this.blurHShaderPass.uniforms[ "h" ].value = 2 / this.width;
    }
}

/**
 * Change the environment map
 */
_NS_.SmasherFrame.prototype.setEnvironment = function(path, fmt) {
 
	var format = fmt || '.png';
	var urls = [
		path + 'px' + format, path + 'nx' + format,
		path + 'py' + format, path + 'ny' + format,
		path + 'pz' + format, path + 'nz' + format
	];
	this.envMap = THREE.ImageUtils.loadTextureCube( urls );
	this.envMap.format = THREE.RGBFormat;
	this.updateEnvmap();
};

/**
 * Render & Update objects
 */
_NS_.SmasherFrame.prototype.render = function( delta ) {
    if (this.controller) this.controller.update();
    if (this.o) { this.o.rotation.z += 0.01; }
    if (this.cmsh) { this.cmsh.rotation.z += 0.01; }
    if (this.lhc) { this.lhc.rotation.z += delta / 5000; }
    _NS_.Viewport.prototype.render.call(this, delta);
};


_NS_.LHCWindow = function ( options ) {
    var self=this;
    var op = options || { };
    _NS_.Viewport.call(this, op);
    
    // Setup lighting
    var l = new THREE.DirectionalLight( 0xffffff );
    l.position.set(400, -400, 400);
    l.lookAt(new THREE.Vector3(0,0,0));
    this.scene.add(l);
    
    // Add ambient light for increasing the luminosity
    var la = new THREE.AmbientLight( 0x111111 );
    this.scene.add(la);

    // Setup camera
    this.camera.position.set( 0, -200, 100);
    this.camera.lookAt(new THREE.Vector3(0,-60,0));
    
    // Add the LHC ring
    this.lhc = new _NS_.LHCRing();
    this.scene.add(this.lhc);

    this.lhc_mirror = new _NS_.LHCRing();
    this.lhc_mirror.position.z = -15;
    this.scene.add(this.lhc_mirror);
    
    var plane = new THREE.Mesh( new THREE.PlaneGeometry( 10000, 10000 ), new THREE.MeshBasicMaterial( { color: 0x00, opacity: 0.5, transparent: true } ) );
    plane.position.z = -10;
	this.scene.add( plane );
	this.renderer.autoClear = false;
	
    // Set environment if defined
    if (op.env !== undefined) this.setEnvironment(op.env);

    // =================================== //
    //           GLOWING OBJECTS           //
    // =================================== //
    
    // Prepare glow scene
    this.glowScene = new THREE.Scene();
    this.glowScene.add( this.lhc.glowObject );	
    //this.glowScene.add( this.lhc_mirror.glowObject );	

    // Prepare a secondary composer
    this.glowComposer = new THREE.ComposerPass( this.renderer, this.width, this.height );

    // Prepare the blur render passes
	this.glowHShaderPass = new THREE.ShaderPass( THREE.HorizontalBlurShader );
	this.glowVShaderPass = new THREE.ShaderPass( THREE.VerticalBlurShader );
	
	// Stack the required render passes
	this.glowComposer.addPass( new THREE.RenderPass( this.glowScene, this.camera, undefined, new THREE.Color(0x000000) ) );
	this.glowComposer.addPass( this.glowHShaderPass );
	this.glowComposer.addPass( this.glowVShaderPass );
	    
	// Add the composer passes to the current stack
	this.addPass( this.glowComposer );
	
	// Run resize again so it updates the shader stack
	this.resize();
    
    // Start animation thread
    this.animate();
    
};

_NS_.LHCWindow.prototype = Object.create( _NS_.Viewport.prototype );

/**
 * Update the environment map materials
 */
_NS_.LHCWindow.prototype.updateEnvmap = function() {
    if ((this.model != null) && (this.envMap != null)) {
    	for (var i=0; i<this.model.materials.length; i++) {
    	    this.model.materials[i].envMap = this.envMap;
    	    this.model.materials[i].needsUpdate = true;
    	}
    }
}

_NS_.LHCWindow.prototype.resize = function(w,h) {
    _NS_.Viewport.prototype.resize.call(this, w, h);
    
    // Update blur uniforms
    if (this.glowVShaderPass !== undefined) {
    	this.glowVShaderPass.uniforms[ "v" ].value = 2 / this.height;
        this.glowHShaderPass.uniforms[ "h" ].value = 2 / this.width;
    }
}

/**
 * Change the environment map
 */
_NS_.LHCWindow.prototype.setEnvironment = function(path, fmt) {
 
	var format = fmt || '.png';
	var urls = [
		path + 'px' + format, path + 'nx' + format,
		path + 'py' + format, path + 'ny' + format,
		path + 'pz' + format, path + 'nz' + format
	];
	this.envMap = THREE.ImageUtils.loadTextureCube( urls );
	this.envMap.format = THREE.RGBFormat;
	this.updateEnvmap();
};

/**
 * Render & Update objects
 */
_NS_.LHCWindow.prototype.render = function( delta ) {
    if (this.controller) this.controller.update();
    if (this.o) { this.o.rotation.z += 0.01; }
    if (this.cmsh) { this.cmsh.rotation.z += 0.01; }
    if (this.lhc) { 
        this.lhc.rotation.z += delta / 5000; 
        this.lhc_mirror.rotation.z += delta / 5000; 
        this.lhc.update(delta); 
        this.lhc_mirror.update(delta); 
    }
    
    _NS_.Viewport.prototype.render.call(this, delta);
};

/**
 * @author Ioannis Charalampidis <ioannis.charalampidis[at]cern.ch>
 */

THREE.ParticleTextureShader = {

	uniforms: {
	
		"uScale": { type: "f", value: 1.0 },
		"uTime":  { type: "f", value: 0.0 }
		
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [
        "#define M_PI 3.1415926535897932384626433832795",
        
		"uniform float uTime;",
		"uniform float uScale;",
		
		"float uValue;",

		"varying vec2 vUv;",

		"void main() {",
		    
		    "uValue = abs(sin( vUv.x * M_PI * uScale + uTime * 5.0 ));",
			"gl_FragColor = vec4( uValue, uValue, uValue, 0.0 );",
			
		"}"

	].join("\n")

};
_NS_.AcceleratorRing = function( camera ) {
   THREE.Object3D.call( this );

   // Prepare variables
   this.cTime = 0;
   this.animations = [];
   this.fxTimer = 0;
   this.fxEasing = jQuery.easing.easeOutQuad;
   this.fxDelay = 1000;
   this.fxCompleteCb = null;

   // Animation variables
   this.ringRotationSpeed = 0;
   this.collisionOpacity = 0;

   // ============================
   //       Setup Camera
   // ============================

   // We also control the camera because we provide
   // the animation functions to zoom in and out from 
   // the accelerator ring
   this.camera = camera;
   this.camera.rotation.z = Math.PI/2;

   this.camera.position.x = 100;
   this.camera.position.z = 50;
   this.camera.rotation.y = Math.PI/2 - 0.5;

   this.camera.position.x = -5;
   this.camera.position.z = 0;
   this.camera.rotation.y = Math.PI/2;

   this.camera.position.x = 100;
   this.camera.position.z = 0;
   this.camera.rotation.y = Math.PI/2;


   // ============================
   //       Setup Lighting
   // ============================

   var l = new THREE.PointLight( 0xffffff );
   l.position.set(0, 0, 0);
   this.add(l);

   var l2 = this.lightM = new THREE.PointLight( 0x008080, 0, 20 );
   l2.position.set(0, -15, 0);
   this.add(l2);

   var l3 = this.lightR = new THREE.PointLight( 0x37FFFF, 0, 20 ); //20 );
   l3.position.set(-13, 7.5, 0);
   this.add(l3);

   var l4 = this.lightL = new THREE.PointLight( 0xffaa00, 0, 20 );
   l4.position.set(-13, -7.5, 0);
   this.add(l4);

   // ============================
   //    Setup the two beams
   // ============================

   var beamTex1 = THREE.ImageUtils.loadTexture( 'theme/img/beam-1b.png' );
   beamTex1.wrapS = THREE.RepeatWrapping;
   beamTex1.wrapT = THREE.RepeatWrapping;

   var beamTex2 = THREE.ImageUtils.loadTexture( 'theme/img/beam-2b.png' );
   beamTex2.wrapS = THREE.RepeatWrapping;
   beamTex2.wrapT = THREE.RepeatWrapping;

   var beamShader = BeamShader;
   var beamShaderUniforms2f = this.beamShaderUniformsLf = THREE.UniformsUtils.clone( beamShader.uniforms );
   var beamShaderUniforms1f = this.beamShaderUniformsRf = THREE.UniformsUtils.clone( beamShader.uniforms );
   var beamShaderUniforms2b = this.beamShaderUniformsLb = THREE.UniformsUtils.clone( beamShader.uniforms );
   var beamShaderUniforms1b = this.beamShaderUniformsRb = THREE.UniformsUtils.clone( beamShader.uniforms );
   
   beamShaderUniforms2f['tTexture1'].value = beamTex1;
   beamShaderUniforms2f['tTexture2'].value = beamTex2;
   beamShaderUniforms1f['tTexture1'].value = beamTex1;
   beamShaderUniforms1f['tTexture2'].value = beamTex2;
   beamShaderUniforms2b['tTexture1'].value = beamTex1;
   beamShaderUniforms2b['tTexture2'].value = beamTex2;
   beamShaderUniforms1b['tTexture1'].value = beamTex1;
   beamShaderUniforms1b['tTexture2'].value = beamTex2;
   
   beamShaderUniforms2f['uColor'].value = new THREE.Color( 0xffaa00 );
   beamShaderUniforms1f['uColor'].value = new THREE.Color( 0x37FFFF ); //0x6666FF
   beamShaderUniforms2b['uColor'].value = new THREE.Color( 0xffaa00 );
   beamShaderUniforms1b['uColor'].value = new THREE.Color( 0x37FFFF ); //0x6666FF
   
   var beamMaterial2f = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms2f,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.FrontSide
   } );

   var beamMaterial2b = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms2b,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.BackSide
   } );
   

   var beamMaterial1f = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms1f,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.FrontSide
   } );

   var beamMaterial1b = new THREE.ShaderMaterial( {
      uniforms: beamShaderUniforms1b,
      vertexShader: beamShader.vertexShader,
      fragmentShader: beamShader.fragmentShader,
      transparent: true,
      side: THREE.BackSide
   } );

   var beamGeom = new THREE.TorusGeometry( 20, 1.2, 20, 20, Math.PI );


   var beamMesh1b = this.beamMeshLb = new THREE.Mesh( beamGeom, beamMaterial1b );
   beamMesh1b.rotation.z = 0;
   beamMesh1b.rotation.y = Math.PI;
   this.add( beamMesh1b );

   var beamMesh1f = this.beamMeshLf = new THREE.Mesh( beamGeom, beamMaterial1f );
   beamMesh1f.rotation.z = 0;
   beamMesh1f.rotation.y = Math.PI;
   this.add( beamMesh1f );

   var beamMesh2b = this.beamMeshRb = new THREE.Mesh( beamGeom, beamMaterial2b );
   beamMesh2b.rotation.z = -Math.PI;
   this.add( beamMesh2b );

   var beamMesh2f = this.beamMeshRf = new THREE.Mesh( beamGeom, beamMaterial2f );
   beamMesh2f.rotation.z = -Math.PI;
   this.add( beamMesh2f );

   // ============================
   //  Setup the ring wireframes
   // ============================

   var backgroundMat = this.backgroundMat = new THREE.MeshPhongMaterial({ side: THREE.FrontSide, transparent: true, color: 0x606060, opacity: 0.4 });
   var wireframeMat  = this.wireframeMat = new THREE.MeshPhongMaterial({ wireframe: true, side: THREE.BackSide, color: 0x000000 });

   var ringBackgroundGeom = new THREE.TorusGeometry( 20, 3, 10, 20, Math.PI );
   var ringBackgroundMesh = this.ringBackgroundMesh = new THREE.Mesh( ringBackgroundGeom, backgroundMat );
   ringBackgroundMesh.rotation.z = Math.PI/2;
   this.add( ringBackgroundMesh );

   var ringOutlineGeom = new THREE.TorusGeometry( 20, 3.1, 18, 25, Math.PI *2 );
   var ringOutlineMesh = this.ringOutlineMesh = new THREE.Mesh( ringOutlineGeom, wireframeMat );
   this.add( ringOutlineMesh );

   // ===============================
   //  Setup the collision animation
   // ===============================

   var clsnFlareTex1 = THREE.ImageUtils.loadTexture( "theme/img/collision-1.png" );
   var clsnFlareTex2 = THREE.ImageUtils.loadTexture( "theme/img/collision-2.png" );

   var flareColor = 0xD1FCEE ; //0xFFBD9D;
   var collisionMaterial1 = this.collisionMaterial1 = new THREE.SpriteMaterial( { map: clsnFlareTex1, useScreenCoordinates: false, color: flareColor, fog: true } );
   var collisionMaterial2 = this.collisionMaterial2 = new THREE.SpriteMaterial( { map: clsnFlareTex1, useScreenCoordinates: false, color: flareColor, fog: true } );
   var collisionMaterial3 = this.collisionMaterial3 = new THREE.SpriteMaterial( { map: clsnFlareTex1, useScreenCoordinates: false, color: flareColor, fog: true } );

   var collisionSprite1 = this.collisionSprite1 = new THREE.Sprite( collisionMaterial1 );
   collisionSprite1.position.set( -15, 0, 0 );
   collisionSprite1.scale.set( 100, 100, 100 );
   this.add( collisionSprite1 );

   var collisionSprite2 = this.collisionSprite2 = new THREE.Sprite( collisionMaterial2 );
   collisionSprite2.position = collisionSprite1.position.clone();
   collisionSprite2.scale = collisionSprite1.scale.clone();
   this.add( collisionSprite2 );

   var collisionSprite3 = this.collisionSprite3 = new THREE.Sprite( collisionMaterial3 );
   collisionSprite3.position = collisionSprite1.position.clone();
   collisionSprite3.scale = collisionSprite1.scale.clone();
   this.add( collisionSprite3 );

   // ===============================
   //   Prepare useful functions
   // ===============================

   // Target values for various animation parameters
   this.animationTargets = [
      {
         'o': this.camera.position,             // Object
         't': this.camera.position.clone(),     // Target 
         's': this.camera.position.clone(),     // Source
         'v'  : ['x','y','z']                   // Value names
      },
      {
         'o': this.camera.rotation,
         't': this.camera.rotation.clone(),
         's': this.camera.rotation.clone(),
         'v'  : ['x','y','z']
      },
      {
         'o': this,
         't': { 'ringRotationSpeed': 0, 'collisionOpacity': 0 },
         's': { 'ringRotationSpeed': 0, 'collisionOpacity': 0 },
         'v'  : [ 'ringRotationSpeed', 'collisionOpacity' ]
      },
      {
         'o': this.lightL,
         't': { 'intensity': 0 },
         's': { 'intensity': 0 },
         'v'  : ['intensity']
      },
      {
         'o': this.lightR,
         't': { 'intensity': 0 },
         's': { 'intensity': 0 },
         'v'  : ['intensity']
      },
      {
         'o': this.lightM,
         't': { 'intensity': 0 },
         's': { 'intensity': 0 },
         'v'  : ['intensity']
      },
      {
         'o': beamShaderUniforms1f['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': beamShaderUniforms1b['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': beamShaderUniforms2f['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': beamShaderUniforms2b['uOpacity'],
         't': { 'value': 0 },
         's': { 'value': 0 },
         'v'  : ['value']
      },
      {
         'o': this.backgroundMat,
         't': { 'opacity': 0 },
         's': { 'opacity': 0 },
         'v': [ 'opacity' ]
      },
      {
         'o': this.wireframeMat.color,
         't': new THREE.Color(0,0,0),
         's': new THREE.Color(0,0,0),
         'v': [ 'r','g','b' ]
      },
      {
         'o': this.wireframeMat.emissive,
         't': new THREE.Color(0,0,0),
         's': new THREE.Color(0,0,0),
         'v': [ 'r','g','b' ]
      }
   ];

   this.setAnimationTarget = function(index, vars) {
      $.each(vars, (function(k,v) {
         this.animationTargets[index].s[k] = this.animationTargets[index].o[k];
         this.animationTargets[index].t[k] = v;
      }).bind(this));
   }

   /**
    * This function returns an animation cycle: for the collision flare
    * 0.0 - 0.2 => { scale: 0.0 - 0.2, opacity: 0.0 - 1.0 },
    * 0.2 - 0.8 => { scale: 0.2 - 1.0, opacity: 1.0 },
    * 0.8 - 1.0 => { scale: 1.1 - 1.8, opacity: 1.0 - 0.0 }
    */
   this.fxCycle = function(v, maxScale, maxOpacity) {
      if (maxScale == undefined) maxScale = 1.0;
      if (maxOpacity == undefined) maxOpacity = 1.0;
      if (v < 0.2) {
         v = v/0.2;
         return { 
            's':   (v * 0.2) * maxScale,
            'o': v * maxOpacity
         };
      } else if (v < 0.8) {
         v = (v-0.2)/0.6;
         return { 
            's':   (0.2 + v*0.8) * maxScale,
            'o': 1.0 * maxOpacity
         };
      } else {
         v = (v-0.8)/0.2;
         return { 
            's':   (1.0 + v*0.2) * maxScale,
            'o': (1.0 - v) * maxOpacity
         };
      }
   }
}

_NS_.AcceleratorRing.prototype = Object.create( THREE.Object3D.prototype );


/**
 * Update animation callback
 */
_NS_.AcceleratorRing.prototype.onAnimationCompleted = function(cb) {
   this.fxCompleteCb = cb;
};

/**
 * Update the beam colors
 */
_NS_.AcceleratorRing.prototype.setBeamColors = function( left, right, collision ) {
   this.lightL.color.setHex( left );
   this.beamShaderUniformsLf['uColor'].value.setHex( left );
   this.beamShaderUniformsLb['uColor'].value.setHex( left );

   this.lightR.color.setHex( right );
   this.beamShaderUniformsRf['uColor'].value.setHex( right );
   this.beamShaderUniformsRb['uColor'].value.setHex( right );

   if (collision == undefined) collision = left | right;

   this.collisionMaterial1.color.setHex( collision );
   this.collisionMaterial2.color.setHex( collision );
   this.collisionMaterial3.color.setHex( collision );

};

/**
 * Update state/animation of the LHC Ring
 */
_NS_.AcceleratorRing.prototype.update = function(delta) {

      // Update current time for the animations
      this.cTime += delta / 3000;

      // Update the beam animation 
      this.beamShaderUniformsLf['uTime'].value += delta/1000;
      this.beamShaderUniformsRf['uTime'].value += delta/1000;
      this.beamShaderUniformsLb['uTime'].value += delta/1000;
      this.beamShaderUniformsRb['uTime'].value += delta/1000;

      // Update the sprite animation
      this.collisionSprite1.rotation += delta / 7000;
      this.collisionSprite2.rotation -= delta / 8000;
      this.collisionSprite3.rotation -= delta / 5000;
      var fx = this.fxCycle( this.cTime % 1.0, 10.0, this.collisionOpacity );
      this.collisionSprite1.scale.set( fx.s, fx.s, fx.s );
      this.collisionMaterial1.opacity = fx.o;
      fx = this.fxCycle( (this.cTime + 0.33333) % 1.0, 10.0, this.collisionOpacity );
      this.collisionSprite2.scale.set( fx.s, fx.s, fx.s );
      this.collisionMaterial2.opacity = fx.o;
      fx = this.fxCycle( (this.cTime + 0.66666) % 1.0, 10.0, this.collisionOpacity );
      this.collisionSprite3.scale.set( fx.s, fx.s, fx.s );
      this.collisionMaterial3.opacity = fx.o;

      // Rotate the wireframe
      if (this.ringRotationSpeed != 0)
         this.ringOutlineMesh.rotation.z += delta * this.ringRotationSpeed / 1000;

      // Update animations
      if (this.fxTimer < this.fxDelay) {

         // Wrap to max
         this.fxTimer += delta;
         if (this.fxTimer > this.fxDelay) this.fxTimer = this.fxDelay;

         // Animation cycle over each object's variables
         for (var i=0; i<this.animationTargets.length; i++) {
            var o = this.animationTargets[i].o,
                s = this.animationTargets[i].s,
                t = this.animationTargets[i].t,
                v = this.animationTargets[i].v;
            for (var j=0; j<v.length; j++) {
               if (typeof(s) == 'number') {
                  o[v[j]] = this.fxEasing(null, this.fxTimer, s, t-s, this.fxDelay);
               } else {
                  o[v[j]] = this.fxEasing(null, this.fxTimer, s[v[j]], t[v[j]] - s[v[j]], this.fxDelay);
               }
            }
         }

         // Check for completion
         if ((this.fxTimer == this.fxDelay) && (this.fxCompleteCb != undefined))
            this.fxCompleteCb();

      }

};

/**
 * Update the current view of the ring
 */
_NS_.AcceleratorRing.prototype.setView = function(view) {

   this.fxTimer = 0;
   this.view = view;

   if (view == 0) {

      this.setAnimationTarget(0, { 'x': 100, 'z': 0 });
      this.setAnimationTarget(1, { 'y': Math.PI/2, 'x': 0   });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 0,
         'collisionOpacity': 0
      });

      this.setAnimationTarget(3, { 'intensity': 0 });
      this.setAnimationTarget(4, { 'intensity': 0 });
      this.setAnimationTarget(5, { 'intensity': 0 });

      this.setAnimationTarget(6, { 'value': 0 });
      this.setAnimationTarget(7, { 'value': 0 });
      this.setAnimationTarget(8, { 'value': 0 });
      this.setAnimationTarget(9, { 'value': 0 });

      this.setAnimationTarget(10, { 'opacity': 0 });

      this.setAnimationTarget(11, { 'r': 0.5, 'g': 0.5, 'b': 0.5 });
      this.setAnimationTarget(12, { 'r': 0.4, 'g': 0.4, 'b': 0.4 });

   } else if (view == 1) {

      this.setAnimationTarget(0, { 'x': 100, 'z': 40 });
      this.setAnimationTarget(1, { 'y': Math.PI/2 - 0.45, 'x': 0 });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 1,
         'collisionOpacity': 0
      });

      this.setAnimationTarget(3, { 'intensity': 0 });
      this.setAnimationTarget(4, { 'intensity': 0 });
      this.setAnimationTarget(5, { 'intensity': 0 });

      this.setAnimationTarget(6, { 'value': 0 });
      this.setAnimationTarget(7, { 'value': 0 });
      this.setAnimationTarget(8, { 'value': 0 });
      this.setAnimationTarget(9, { 'value': 0 });

      this.setAnimationTarget(10, { 'opacity': 0 });

      this.setAnimationTarget(11, { 'r': 0.8, 'g': 0.8, 'b': 0.8 });
      this.setAnimationTarget(12, { 'r': 0.1, 'g': 0.1, 'b': 0.1 });

   } else if (view == 2) {

      this.setAnimationTarget(0, { 'x': -5, 'z': 0 });
      this.setAnimationTarget(1, { 'y': Math.PI/2, 'x': 0 });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 0,
         'collisionOpacity': 1
      });

      this.setAnimationTarget(3, { 'intensity': 1 });
      this.setAnimationTarget(4, { 'intensity': 1 });
      this.setAnimationTarget(5, { 'intensity': 1 });

      this.setAnimationTarget(6, { 'value': 1 });
      this.setAnimationTarget(7, { 'value': 0.5 });
      this.setAnimationTarget(8, { 'value': 1 });
      this.setAnimationTarget(9, { 'value': 0.5 });

      this.setAnimationTarget(10, { 'opacity': 0.4 });

      this.setAnimationTarget(11, { 'r': 0.2, 'g': 0.2, 'b': 0.2 });
      this.setAnimationTarget(12, { 'r': 0.2, 'g': 0.2, 'b': 0.2 });

   } else if (view == 3) {

      this.setAnimationTarget(0, { 'x': 100, 'z': 20 });
      this.setAnimationTarget(1, { 'y': Math.PI/2 - 0.2, 'x': 0.2   });
      this.setAnimationTarget(2, { 
         'ringRotationSpeed': 0,
         'collisionOpacity': 0
      });

      this.setAnimationTarget(3, { 'intensity': 0 });
      this.setAnimationTarget(4, { 'intensity': 0 });
      this.setAnimationTarget(5, { 'intensity': 0 });

      this.setAnimationTarget(6, { 'value': 0 });
      this.setAnimationTarget(7, { 'value': 0 });
      this.setAnimationTarget(8, { 'value': 0 });
      this.setAnimationTarget(9, { 'value': 0 });

      this.setAnimationTarget(10, { 'opacity': 0 });

      this.setAnimationTarget(11, { 'r': 1, 'g': 0, 'b': 0 });
      this.setAnimationTarget(12, { 'r': 0.4, 'g': 0.4, 'b': 0.4 });

   }

};

/**
 * LHC Dipole segment that composes the virtual LHC Ring
 *
 * Each dipole is aligned in a way to use .lookAt to point towards the next element
 * of the ring.
 */
_NS_.LHCDipole = function( radius, length, segments, materialInner, materialOuter ) {
    THREE.Object3D.call( this );
    
    // Prepare variables
    this.radius = radius || 10;
    this.length = length || 1;
    this.segments = segments || 8;
    this.materialInner = materialInner || new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.materialOuter = materialOuter || this.materialInner;
    this.overdraw = 1;
    this.insetRadius = 1;
    this.openEnds = true;

    // The geometries for the dipole
    this.geomOuterRing = new THREE.CylinderGeometry( this.radius, this.radius, this.length+this.overdraw, this.segments, 1, this.openEnds );
    this.geomInnerRing = new THREE.CylinderGeometry( this.radius-this.insetRadius, this.radius-this.insetRadius, this.length+this.overdraw, this.segments, 1, this.openEnds );
	
	// The meshes of the dipole
	this.meshOuterRing = new THREE.Mesh( this.geomOuterRing, this.materialOuter );
	this.meshInnerRing = new THREE.Mesh( this.geomInnerRing, this.materialInner );
	
	// Align them in order to use .lookAt properly
	this.meshOuterRing.position.set( 0, 0, this.length/2-this.overdraw/2 );
	this.meshInnerRing.position.set( 0, 0, this.length/2-this.overdraw/2 );
	this.meshOuterRing.rotation.set( Math.PI/2, 0, 0);
	this.meshInnerRing.rotation.set( Math.PI/2, 0, 0);
	
	// Add some pointers for the object picker
	this.meshOuterRing.hoverTarget = this;
	this.meshInnerRing.hoverTarget = this;
	
	// Create the composite geometry of the dipole
	this.add( this.meshOuterRing );
	this.add( this.meshInnerRing );
	
}

_NS_.LHCDipole.prototype = Object.create( THREE.Object3D.prototype );

/**
 * Change the material in the LHC dipole
 */
_NS_.LHCDipole.prototype.setMaterial = function( materialInner, materialOuter ) {

    this.materialInner = materialInner || new THREE.MeshBasicMaterial({ color: 0xff0000 });
    this.materialOuter = this.materialInner;

    this.meshInnerRing.material = this.materialInner;
    this.meshOuterRing.material = this.materialOuter;
    
}
_NS_.LHCRing = function( config ) {
    THREE.Object3D.call( this );
	
	var cfg = config || { };
	this.radius = cfg.radius || 100;
	this.thickness = cfg.thickness || 5;
	this.segments = cfg.segments || 40;
	this.innerMaterial = cfg.material || new THREE.MeshPhongMaterial({ color: 0x333333, side: THREE.BackSide, transparent: true, opacity: 0.5 });
	this.outerMaterial = cfg.material || new THREE.MeshPhongMaterial({ color: 0x6666FF, side: THREE.FrontSide, transparent: true, opacity: 0.5 });
	
	var perimeter = 2 * Math.PI * this.radius,
	    segment_size = perimeter / this.segments;
	
	// Generate and store dipoles
	this.dipoles = [];
	var a = 0, a_step = Math.PI*2 / this.segments,
	    lX = Math.sin(a-a_step)*this.radius, lY = Math.cos(a-a_step)*this.radius, lZ=0;
	for (var i=0; i<this.segments; i++, a+=a_step) {
	    var x = Math.sin(a) * this.radius,
	        y = Math.cos(a) * this.radius,
	        z = 0;

	    // Create an LHCDipole object
    	var dipole_segment = new _NS_.LHCDipole( this.thickness, segment_size, 8, this.innerMaterial, this.outerMaterial );
	    dipole_segment.position.set( x, y, z );
	    dipole_segment.lookAt(new THREE.Vector3( lX, lY, lZ ));
	    this.add(dipole_segment);
	    lX=x; lY=y; lZ=z;

        // Store it on dipole stack
	    this.dipoles.push(dipole_segment);
	}
	
	// Create a position-bound mirror object for the glow scene (rendered after)
	this.glowObject = new THREE.Object3D();
	this.glowObject.position = this.position;
	this.glowObject.rotation = this.rotation;
	
	// Generate the progress marker
	this.shadowGeometry = new THREE.RingGeometry( this.radius-this.thickness/2, this.radius+this.thickness/2, this.segments);
    this.shadowMaterial = new THREE.MeshBasicMaterial({color: 0x990000, side:THREE.DoubleSide});
    this.shadow = new THREE.Mesh( this.shadowGeometry, this.shadowMaterial );
    this.shadow.position.set(0,0,-20);
	//this.add(this.shadow);	
	
	var shader = THREE.ParticleTextureShader;
    this.ringMatUniforms = THREE.UniformsUtils.clone( shader.uniforms );
	this.ringMaterial = new THREE.ShaderMaterial( {
		uniforms: this.ringMatUniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader
	} );
	
	this.ringMatUniforms['uScale'].value = 10.0;
	
    // Prepare the objects for the blur scene
	this.ringGeometry = new THREE.TorusGeometry( this.radius, 1, 10, this.segments );
	//this.ringMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
	this.ringMesh = new THREE.Mesh( this.ringGeometry, this.ringMaterial );
	this.glowObject.add( this.ringMesh );
	

}

_NS_.LHCRing.prototype = Object.create( THREE.Object3D.prototype );

_NS_.LHCRing.prototype.setProgress = function( percent ) {
    
}

_NS_.LHCRing.prototype.update = function(delta) {
    this.ringMatUniforms['uTime'].value += delta / 1000;
};$(function(){
    
    /*
    var viewport = new M.LHCWindow({
        container: "#ring",
        bg: 0x000000, //0xf5f5f5,
        autostop: true,
        fullscreen: false,
        stats: false
    });
	*/

});
})(M);
var BeamShader = {

	uniforms: {
	
		"tTexture1": { type: "t", value: null },
		"tTexture2": { type: "t", value: null },
		"uColor"   : { type: "c", value: new THREE.Color( 0xffaa00 ) }, // single Color
		"uTime"    : { type: "f", value: 0.0  },
		"uOpacity" : { type: "f", value: 1.0  },
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [
        "#define M_PI 3.1415926535897932384626433832795",

		"uniform sampler2D tTexture1;",
		"uniform sampler2D tTexture2;",
		"uniform vec3 uColor;",
		"uniform float uTime;",
		"uniform float uOpacity;",

		"varying vec2 vUv;",

		"float ease(float v) {",
			//"return v;",
			"return 1.0 - pow( 1.0 - v, 2.0 );",
		"}",

		"void main() {",
		
	        "float uValue = abs(sin( vUv.x * M_PI + uTime ));",

	        "float tx1fw = mod( vUv.x * 20.0 + uTime, 1.0 );",
			"vec3 texel1 = texture2D( tTexture1, vec2( tx1fw , vUv.y ) ).xyz;",
			"float  tx1a = ease((texel1.x + texel1.y + texel1.z) / 3.0) * 0.2;",

	        "float tx2fw = mod( vUv.x * 8.0 + uTime, 1.0 );",
			"vec3 texel2 = texture2D( tTexture1, vec2( tx2fw , 1.0 - vUv.y ) ).xyz;",
			"float  tx2a = ease((texel2.x + texel2.y + texel2.z) / 3.0) * 0.5;",

	        "float tx3fw = mod( vUv.x * 4.0 + uTime * 10.0, 1.0 );",
			"vec3 texel3 = texture2D( tTexture2, vec2( tx3fw , 1.0 - vUv.y ) ).xyz;",
			"float  tx3a = ease((texel3.x + texel3.y + texel3.z) / 3.0);",

			"gl_FragColor  = clamp( vec4(texel1, tx1a) + vec4(texel2, tx2a) + vec4(texel3.xyz, tx3a), 0.0, 1.0);",
			"gl_FragColor *= vec4( uColor, uOpacity );",

	        // Swirl #1
	        /*
			"vec4 texel1 = texture2D( tTexture1, vec2( vUv.x * 20.0 + mod( uTime, 1.0 ) , vUv.y ) );",
			"vec4 texel2 = texture2D( tTexture1, vec2( vUv.x * 8.0 + mod( uTime, 1.0 ) , 1.0 - vUv.y ) ) / vec4( 1.0, 1.0, 1.0, 2.0);",
			"vec4 texel3 = texture2D( tTexture2, vec2( vUv.x * 4.0 - mod( uTime * 10.0 , 1.0 ) , 1.0 - vUv.y ) );",
			"vec4 color = clamp( texel1 + texel2 + texel3, 0.0, 1.0 );", 
			"gl_FragColor = color * vec4( uColor, uOpacity);",
			*/
			
		"}"

	].join("\n")

};
var CollisionShader = {

	uniforms: {
	
		"tTexture1": { type: "t", value: null },
		"tTexture2": { type: "t", value: null },
		"uColor"   : { type: "c", value: new THREE.Color( 0xffaa00 ) }, // single Color
		"uTime"    : { type: "f", value: 0.0  }
	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [
        "#define M_PI 3.1415926535897932384626433832795",

		"uniform sampler2D tTexture1;",
		"uniform sampler2D tTexture2;",
		"uniform vec3 uColor;",
		"uniform float uTime;",

		"varying vec2 vUv;",

		"void main() {",
		
	        "float uValue = abs(sin( vUv.x * M_PI + uTime ));",
			"vec4 texel1 = texture2D( tTexture1, vec2( vUv.x * 20.0 + mod( uTime, 1.0 ) , vUv.y ) );",
			"vec4 texel2 = texture2D( tTexture1, vec2( vUv.x * 8.0 + mod( uTime, 1.0 ) , 1.0 - vUv.y ) ) / vec4( 1.0, 1.0, 1.0, 2.0);",
			"vec4 texel3 = texture2D( tTexture2, vec2( vUv.x * 4.0 - mod( uTime * 10.0 , 1.0 ) , 1.0 - vUv.y ) );",
			"vec4 color = clamp( texel1 + texel2 + texel3, 0.0, 1.0 );", 
			"gl_FragColor = uColor;",
			
		"}"

	].join("\n")

};/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */function md5cycle(x, k) {
var a = x[0], b = x[1], c = x[2], d = x[3];

a = ff(a, b, c, d, k[0], 7, -680876936);
d = ff(d, a, b, c, k[1], 12, -389564586);
c = ff(c, d, a, b, k[2], 17,  606105819);
b = ff(b, c, d, a, k[3], 22, -1044525330);
a = ff(a, b, c, d, k[4], 7, -176418897);
d = ff(d, a, b, c, k[5], 12,  1200080426);
c = ff(c, d, a, b, k[6], 17, -1473231341);
b = ff(b, c, d, a, k[7], 22, -45705983);
a = ff(a, b, c, d, k[8], 7,  1770035416);
d = ff(d, a, b, c, k[9], 12, -1958414417);
c = ff(c, d, a, b, k[10], 17, -42063);
b = ff(b, c, d, a, k[11], 22, -1990404162);
a = ff(a, b, c, d, k[12], 7,  1804603682);
d = ff(d, a, b, c, k[13], 12, -40341101);
c = ff(c, d, a, b, k[14], 17, -1502002290);
b = ff(b, c, d, a, k[15], 22,  1236535329);

a = gg(a, b, c, d, k[1], 5, -165796510);
d = gg(d, a, b, c, k[6], 9, -1069501632);
c = gg(c, d, a, b, k[11], 14,  643717713);
b = gg(b, c, d, a, k[0], 20, -373897302);
a = gg(a, b, c, d, k[5], 5, -701558691);
d = gg(d, a, b, c, k[10], 9,  38016083);
c = gg(c, d, a, b, k[15], 14, -660478335);
b = gg(b, c, d, a, k[4], 20, -405537848);
a = gg(a, b, c, d, k[9], 5,  568446438);
d = gg(d, a, b, c, k[14], 9, -1019803690);
c = gg(c, d, a, b, k[3], 14, -187363961);
b = gg(b, c, d, a, k[8], 20,  1163531501);
a = gg(a, b, c, d, k[13], 5, -1444681467);
d = gg(d, a, b, c, k[2], 9, -51403784);
c = gg(c, d, a, b, k[7], 14,  1735328473);
b = gg(b, c, d, a, k[12], 20, -1926607734);

a = hh(a, b, c, d, k[5], 4, -378558);
d = hh(d, a, b, c, k[8], 11, -2022574463);
c = hh(c, d, a, b, k[11], 16,  1839030562);
b = hh(b, c, d, a, k[14], 23, -35309556);
a = hh(a, b, c, d, k[1], 4, -1530992060);
d = hh(d, a, b, c, k[4], 11,  1272893353);
c = hh(c, d, a, b, k[7], 16, -155497632);
b = hh(b, c, d, a, k[10], 23, -1094730640);
a = hh(a, b, c, d, k[13], 4,  681279174);
d = hh(d, a, b, c, k[0], 11, -358537222);
c = hh(c, d, a, b, k[3], 16, -722521979);
b = hh(b, c, d, a, k[6], 23,  76029189);
a = hh(a, b, c, d, k[9], 4, -640364487);
d = hh(d, a, b, c, k[12], 11, -421815835);
c = hh(c, d, a, b, k[15], 16,  530742520);
b = hh(b, c, d, a, k[2], 23, -995338651);

a = ii(a, b, c, d, k[0], 6, -198630844);
d = ii(d, a, b, c, k[7], 10,  1126891415);
c = ii(c, d, a, b, k[14], 15, -1416354905);
b = ii(b, c, d, a, k[5], 21, -57434055);
a = ii(a, b, c, d, k[12], 6,  1700485571);
d = ii(d, a, b, c, k[3], 10, -1894986606);
c = ii(c, d, a, b, k[10], 15, -1051523);
b = ii(b, c, d, a, k[1], 21, -2054922799);
a = ii(a, b, c, d, k[8], 6,  1873313359);
d = ii(d, a, b, c, k[15], 10, -30611744);
c = ii(c, d, a, b, k[6], 15, -1560198380);
b = ii(b, c, d, a, k[13], 21,  1309151649);
a = ii(a, b, c, d, k[4], 6, -145523070);
d = ii(d, a, b, c, k[11], 10, -1120210379);
c = ii(c, d, a, b, k[2], 15,  718787259);
b = ii(b, c, d, a, k[9], 21, -343485551);

x[0] = add32(a, x[0]);
x[1] = add32(b, x[1]);
x[2] = add32(c, x[2]);
x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
a = add32(add32(a, q), add32(x, t));
return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
txt = '';
var n = s.length,
state = [1732584193, -271733879, -1732584194, 271733878], i;
for (i=64; i<=s.length; i+=64) {
md5cycle(state, md5blk(s.substring(i-64, i)));
}
s = s.substring(i-64);
var tail = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0];
for (i=0; i<s.length; i++)
tail[i>>2] |= s.charCodeAt(i) << ((i%4) << 3);
tail[i>>2] |= 0x80 << ((i%4) << 3);
if (i > 55) {
md5cycle(state, tail);
for (i=0; i<16; i++) tail[i] = 0;
}
tail[14] = n*8;
md5cycle(state, tail);
return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
var md5blks = [], i; /* Andy King said do it this way. */
for (i=0; i<64; i+=4) {
md5blks[i>>2] = s.charCodeAt(i)
+ (s.charCodeAt(i+1) << 8)
+ (s.charCodeAt(i+2) << 16)
+ (s.charCodeAt(i+3) << 24);
}
return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n)
{
var s='', j=0;
for(; j<4; j++)
s += hex_chr[(n >> (j * 8 + 4)) & 0x0F]
+ hex_chr[(n >> (j * 8)) & 0x0F];
return s;
}

function hex(x) {
for (var i=0; i<x.length; i++)
x[i] = rhex(x[i]);
return x.join('');
}

function md5(s) {
return hex(md51(s));
}

/* this function is much faster,
so if possible we use it. Some IEs
are the only ones I know of that
need the idiotic second function,
generated by an if clause.  */

function add32(a, b) {
return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
function add32(x, y) {
var lsw = (x & 0xFFFF) + (y & 0xFFFF),
msw = (x >> 16) + (y >> 16) + (lsw >> 16);
return (msw << 16) | (lsw & 0xFFFF);
}
}d3=function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function u(){}function i(){}function o(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function a(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=Co.length;r>e;++e){var u=Co[e]+t;if(u in n)return u}}function c(){}function l(){}function s(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new u;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function f(){vo.event.preventDefault()}function h(){for(var n,t=vo.event;n=t.sourceEvent;)t=n;return t}function g(n){for(var t=new l,e=0,r=arguments.length;++e<r;)t[arguments[e]]=s(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=vo.event;u.target=n,vo.event=u,t[u.type].apply(e,r)}finally{vo.event=i}}},t}function p(n){return jo(n,Oo),n}function d(n){return"function"==typeof n?n:function(){return Lo(n,this)}}function v(n){return"function"==typeof n?n:function(){return Ho(n,this)}}function m(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=vo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function y(n){return n.trim().replace(/\s+/g," ")}function M(n){return new RegExp("(?:^|\\s+)"+vo.requote(n)+"(?:\\s+|$)","g")}function x(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=n.trim().split(/\s+/).map(b);var u=n.length;return"function"==typeof t?r:e}function b(n){var t=M(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",y(u+" "+n))):e.setAttribute("class",y(u.replace(t," ")))}}function _(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function w(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function S(n){return"function"==typeof n?n:(n=vo.ns.qualify(n)).local?function(){return Mo.createElementNS(n.space,n.local)}:function(){return Mo.createElementNS(this.namespaceURI,n)}}function E(n){return{__data__:n}}function k(n){return function(){return Po(this,n)}}function A(n){return arguments.length||(n=vo.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function N(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function q(n){return jo(n,Yo),n}function T(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function z(){var n=this.__transition__;n&&++n.active}function C(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=l(t,yo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+vo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=D;a>0&&(n=n.substring(0,a));var s=Uo.get(n);return s&&(n=s,l=j),a?t?u:r:t?c:i}function D(n,t){return function(e){var r=vo.event;vo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{vo.event=r}}}function j(n,t){var e=D(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function L(){var n=".dragsuppress-"+ ++Zo,t="touchmove"+n,e="selectstart"+n,r="dragstart"+n,u="click"+n,i=vo.select(bo).on(t,f).on(e,f).on(r,f),o=xo.style,a=o[Vo];return o[Vo]="none",function(t){function e(){i.on(u,null)}i.on(n,null),o[Vo]=a,t&&(i.on(u,function(){f(),e()},!0),setTimeout(e,0))}}function H(n,t){var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>Xo&&(bo.scrollX||bo.scrollY)){e=vo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();Xo=!(u.f||u.e),e.remove()}return Xo?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function F(n){return n>0?1:0>n?-1:0}function P(n){return n>1?0:-1>n?Bo:Math.acos(n)}function O(n){return n>1?Bo/2:-1>n?-Bo/2:Math.asin(n)}function R(n){return(Math.exp(n)-Math.exp(-n))/2}function Y(n){return(Math.exp(n)+Math.exp(-n))/2}function I(n){return R(n)/Y(n)}function U(n){return(n=Math.sin(n/2))*n}function V(){}function Z(n,t,e){return new X(n,t,e)}function X(n,t,e){this.h=n,this.s=t,this.l=e}function B(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,ot(u(n+120),u(n),u(n-120))}function $(n,t,e){return new W(n,t,e)}function W(n,t,e){this.h=n,this.c=t,this.l=e}function J(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),G(e,Math.cos(n*=Jo)*t,Math.sin(n)*t)}function G(n,t,e){return new K(n,t,e)}function K(n,t,e){this.l=n,this.a=t,this.b=e}function Q(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=tt(u)*aa,r=tt(r)*ca,i=tt(i)*la,ot(rt(3.2404542*u-1.5371385*r-.4985314*i),rt(-.969266*u+1.8760108*r+.041556*i),rt(.0556434*u-.2040259*r+1.0572252*i))}function nt(n,t,e){return n>0?$(Math.atan2(e,t)*Go,Math.sqrt(t*t+e*e),n):$(0/0,0/0,n)}function tt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function et(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function rt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function ut(n){return ot(n>>16,255&n>>8,255&n)}function it(n){return ut(n)+""}function ot(n,t,e){return new at(n,t,e)}function at(n,t,e){this.r=n,this.g=t,this.b=e}function ct(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function lt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(gt(u[0]),gt(u[1]),gt(u[2]))}return(i=ha.get(n))?t(i.r,i.g,i.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(o=n.charAt(1),o+=o,a=n.charAt(2),a+=a,c=n.charAt(3),c+=c):7===n.length&&(o=n.substring(1,3),a=n.substring(3,5),c=n.substring(5,7)),o=parseInt(o,16),a=parseInt(a,16),c=parseInt(c,16)),t(o,a,c))}function st(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),Z(r,u,c)}function ft(n,t,e){n=ht(n),t=ht(t),e=ht(e);var r=et((.4124564*n+.3575761*t+.1804375*e)/aa),u=et((.2126729*n+.7151522*t+.072175*e)/ca),i=et((.0193339*n+.119192*t+.9503041*e)/la);return G(116*u-16,500*(r-u),200*(u-i))}function ht(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function gt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function pt(n){return"function"==typeof n?n:function(){return n}}function dt(n){return n}function vt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),mt(t,e,n,r)}}function mt(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=vo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,l=null;return!bo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=vo.event;vo.event=n;try{o.progress.call(i,c)}finally{vo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(l=n,i):l},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(yo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var s in a)c.setRequestHeader(s,a[s]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=l&&(c.responseType=l),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},vo.rebind(i,o,"on"),null==r?i:i.get(yt(r))}function yt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Mt(){var n=bt(),t=_t()-n;t>24?(isFinite(t)&&(clearTimeout(va),va=setTimeout(Mt,t)),da=0):(da=1,ya(Mt))}function xt(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now()),ma.callback=n,ma.time=e+t}function bt(){var n=Date.now();for(ma=ga;ma;)n>=ma.time&&(ma.flush=ma.callback(n-ma.time)),ma=ma.next;return n}function _t(){for(var n,t=ga,e=1/0;t;)t.flush?t=n?n.next=t.next:ga=t.next:(t.time<e&&(e=t.time),t=(n=t).next);return pa=n,e}function wt(n,t){var e=Math.pow(10,3*Math.abs(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function St(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Et(n){return n+""}function kt(){}function At(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function Nt(n,t){n&&Ta.hasOwnProperty(n.type)&&Ta[n.type](n,t)}function qt(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function Tt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)qt(n[e],t,1);t.polygonEnd()}function zt(){function n(n,t){n*=Jo,t=t*Jo/2+Bo/4;var e=n-r,o=Math.cos(t),a=Math.sin(t),c=i*a,l=u*o+c*Math.cos(e),s=c*Math.sin(e);Ca.add(Math.atan2(s,l)),r=n,u=o,i=a}var t,e,r,u,i;Da.point=function(o,a){Da.point=n,r=(t=o)*Jo,u=Math.cos(a=(e=a)*Jo/2+Bo/4),i=Math.sin(a)},Da.lineEnd=function(){n(t,e)}}function Ct(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function Dt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function jt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Lt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Ht(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function Ft(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Pt(n){return[Math.atan2(n[1],n[0]),O(n[2])]}function Ot(n,t){return Math.abs(n[0]-t[0])<$o&&Math.abs(n[1]-t[1])<$o}function Rt(n,t){n*=Jo;var e=Math.cos(t*=Jo);Yt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Yt(n,t,e){++ja,Ha+=(n-Ha)/ja,Fa+=(t-Fa)/ja,Pa+=(e-Pa)/ja}function It(){function n(n,u){n*=Jo;var i=Math.cos(u*=Jo),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),l=Math.atan2(Math.sqrt((l=e*c-r*a)*l+(l=r*o-t*c)*l+(l=t*a-e*o)*l),t*o+e*a+r*c);La+=l,Oa+=l*(t+(t=o)),Ra+=l*(e+(e=a)),Ya+=l*(r+(r=c)),Yt(t,e,r)}var t,e,r;Za.point=function(u,i){u*=Jo;var o=Math.cos(i*=Jo);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),Za.point=n,Yt(t,e,r)}}function Ut(){Za.point=Rt}function Vt(){function n(n,t){n*=Jo;var e=Math.cos(t*=Jo),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),l=u*c-i*a,s=i*o-r*c,f=r*a-u*o,h=Math.sqrt(l*l+s*s+f*f),g=r*o+u*a+i*c,p=h&&-P(g)/h,d=Math.atan2(h,g);Ia+=p*l,Ua+=p*s,Va+=p*f,La+=d,Oa+=d*(r+(r=o)),Ra+=d*(u+(u=a)),Ya+=d*(i+(i=c)),Yt(r,u,i)}var t,e,r,u,i;Za.point=function(o,a){t=o,e=a,Za.point=n,o*=Jo;var c=Math.cos(a*=Jo);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),Yt(r,u,i)},Za.lineEnd=function(){n(t,e),Za.lineEnd=Ut,Za.point=Rt}}function Zt(){return!0}function Xt(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(Ot(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c={point:e,points:n,other:null,visited:!1,entry:!0,subject:!0},l={point:e,points:[e],other:c,visited:!1,entry:!1,subject:!1};c.other=l,i.push(c),o.push(l),c={point:r,points:[r],other:null,visited:!1,entry:!1,subject:!0},l={point:r,points:[r],other:c,visited:!1,entry:!0,subject:!1},c.other=l,i.push(c),o.push(l)}}),o.sort(t),Bt(i),Bt(o),i.length){if(e)for(var a=1,c=!e(o[0].point),l=o.length;l>a;++a)o[a].entry=c=!c;for(var s,f,h,g=i[0];;){for(s=g;s.visited;)if((s=s.next)===g)return;f=s.points,u.lineStart();do{if(s.visited=s.other.visited=!0,s.entry){if(s.subject)for(var a=0;a<f.length;a++)u.point((h=f[a])[0],h[1]);else r(s.point,s.next.point,1,u);s=s.next}else{if(s.subject){f=s.prev.points;for(var a=f.length;--a>=0;)u.point((h=f[a])[0],h[1])}else r(s.point,s.prev.point,-1,u);s=s.prev}s=s.other,f=s.points}while(!s.visited);u.lineEnd()}}}function Bt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.next=e=n[r],e.prev=u,u=e;u.next=e=n[0],e.prev=u}}function $t(n,t,e,r){return function(u){function i(t,e){n(t,e)&&u.point(t,e)}function o(n,t){d.point(n,t)}function a(){v.point=o,d.lineStart()}function c(){v.point=i,d.lineEnd()}function l(n,t){y.point(n,t),p.push([n,t])}function s(){y.lineStart(),p=[]}function f(){l(p[0][0],p[0][1]),y.lineEnd();var n,t=y.clean(),e=m.buffer(),r=e.length;if(p.pop(),g.push(p),p=null,r){if(1&t){n=e[0];var i,r=n.length-1,o=-1;for(u.lineStart();++o<r;)u.point((i=n[o])[0],i[1]);return u.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),h.push(e.filter(Wt))}}var h,g,p,d=t(u),v={point:i,lineStart:a,lineEnd:c,polygonStart:function(){v.point=l,v.lineStart=s,v.lineEnd=f,h=[],g=[],u.polygonStart()},polygonEnd:function(){v.point=i,v.lineStart=a,v.lineEnd=c,h=vo.merge(h),h.length?Xt(h,Gt,null,e,u):r(g)&&(u.lineStart(),e(null,null,1,u),u.lineEnd()),u.polygonEnd(),h=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},m=Jt(),y=t(m);return v}}function Wt(n){return n.length>1}function Jt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:c,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Gt(n,t){return((n=n.point)[0]<0?n[1]-Bo/2-$o:Bo/2-n[1])-((t=t.point)[0]<0?t[1]-Bo/2-$o:Bo/2-t[1])}function Kt(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=!1,a=!1,c=0;Ca.reset();for(var l=0,s=t.length;s>l;++l){var f=t[l],h=f.length;if(h){for(var g=f[0],p=g[0],d=g[1]/2+Bo/4,v=Math.sin(d),m=Math.cos(d),y=1;;){y===h&&(y=0),n=f[y];var M=n[0],x=n[1]/2+Bo/4,b=Math.sin(x),_=Math.cos(x),w=M-p,S=Math.abs(w)>Bo,E=v*b;if(Ca.add(Math.atan2(E*Math.sin(w),m*_+E*Math.cos(w))),Math.abs(x)<$o&&(a=!0),i+=S?w+(w>=0?2:-2)*Bo:w,S^p>=e^M>=e){var k=jt(Ct(g),Ct(n));Ft(k);var A=jt(u,k);Ft(A);var N=(S^w>=0?-1:1)*O(A[2]);r>N&&(c+=S^w>=0?1:-1)}if(!y++)break;p=M,v=b,m=_,g=n}Math.abs(i)>$o&&(o=!0)}}return(!a&&!o&&0>Ca||-$o>i)^1&c}function Qt(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Bo:-Bo,c=Math.abs(i-e);Math.abs(c-Bo)<$o?(n.point(e,r=(r+o)/2>0?Bo/2:-Bo/2),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Bo&&(Math.abs(e-u)<$o&&(e-=u*$o),Math.abs(i-a)<$o&&(i-=a*$o),r=ne(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function ne(n,t,e,r){var u,i,o=Math.sin(n-e);return Math.abs(o)>$o?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function te(n,t,e,r){var u;if(null==n)u=e*Bo/2,r.point(-Bo,u),r.point(0,u),r.point(Bo,u),r.point(Bo,0),r.point(Bo,-u),r.point(0,-u),r.point(-Bo,-u),r.point(-Bo,0),r.point(-Bo,u);else if(Math.abs(n[0]-t[0])>$o){var i=(n[0]<t[0]?1:-1)*Bo;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function ee(n){return Kt(Ba,n)}function re(n){function t(n,t){return Math.cos(n)*Math.cos(t)>o}function e(n){var e,i,o,c,s;return{lineStart:function(){c=o=!1,s=1},point:function(f,h){var g,p=[f,h],d=t(f,h),v=a?d?0:u(f,h):d?u(f+(0>f?Bo:-Bo),h):0;if(!e&&(c=o=d)&&n.lineStart(),d!==o&&(g=r(e,p),(Ot(e,g)||Ot(p,g))&&(p[0]+=$o,p[1]+=$o,d=t(p[0],p[1]))),d!==o)s=0,d?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(l&&e&&a^d){var m;v&i||!(m=r(p,e,!0))||(s=0,a?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!d||e&&Ot(e,p)||n.point(p[0],p[1]),e=p,o=d,i=v},lineEnd:function(){o&&n.lineEnd(),e=null},clean:function(){return s|(c&&o)<<1}}}function r(n,t,e){var r=Ct(n),u=Ct(t),i=[1,0,0],a=jt(r,u),c=Dt(a,a),l=a[0],s=c-l*l;if(!s)return!e&&n;var f=o*c/s,h=-o*l/s,g=jt(i,a),p=Ht(i,f),d=Ht(a,h);Lt(p,d);var v=g,m=Dt(p,v),y=Dt(v,v),M=m*m-y*(Dt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=Ht(v,(-m-x)/y);if(Lt(b,p),b=Pt(b),!e)return b;var _,w=n[0],S=t[0],E=n[1],k=t[1];w>S&&(_=w,w=S,S=_);var A=S-w,N=Math.abs(A-Bo)<$o,q=N||$o>A;if(!N&&E>k&&(_=E,E=k,k=_),q?N?E+k>0^b[1]<(Math.abs(b[0]-w)<$o?E:k):E<=b[1]&&b[1]<=k:A>Bo^(w<=b[0]&&b[0]<=S)){var T=Ht(v,(-m+x)/y);return Lt(T,p),[b,Pt(T)]}}}function u(t,e){var r=a?n:Bo-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}function i(n){return Kt(c,n)}var o=Math.cos(n),a=o>0,c=[n,0],l=Math.abs(o)>$o,s=qe(n,6*Jo);return $t(t,e,s,i)}function ue(n,t,e,r){function u(r,u){return Math.abs(r[0]-n)<$o?u>0?0:3:Math.abs(r[0]-e)<$o?u>0?2:1:Math.abs(r[1]-t)<$o?u>0?1:0:u>0?3:2}function i(n,t){return o(n.point,t.point)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}function a(u,i){var o=i[0]-u[0],a=i[1]-u[1],c=[0,1];return Math.abs(o)<$o&&Math.abs(a)<$o?n<=u[0]&&u[0]<=e&&t<=u[1]&&u[1]<=r:ie(n-u[0],o,c)&&ie(u[0]-e,-o,c)&&ie(t-u[1],a,c)&&ie(u[1]-r,-a,c)?(c[1]<1&&(i[0]=u[0]+c[1]*o,i[1]=u[1]+c[1]*a),c[0]>0&&(u[0]+=c[0]*o,u[1]+=c[0]*a),!0):!1}return function(c){function l(i){var o=u(i,-1),a=s([0===o||3===o?n:e,o>1?r:t]);return a}function s(n){for(var t=0,e=M.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=M[u],c=a.length,l=a[0];c>o;++o)i=a[o],l[1]<=r?i[1]>r&&f(l,i,n)>0&&++t:i[1]<=r&&f(l,i,n)<0&&--t,l=i;return 0!==t}function f(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(e[0]-n[0])*(t[1]-n[1])}function h(i,a,c,l){var s=0,f=0;if(null==i||(s=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do l.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+c+4)%4)!==f)}else l.point(a[0],a[1])}function g(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function p(n,t){g(n,t)&&c.point(n,t)}function d(){T.point=m,M&&M.push(x=[]),A=!0,k=!1,S=E=0/0}function v(){y&&(m(b,_),w&&k&&q.rejoin(),y.push(q.buffer())),T.point=p,k&&c.lineEnd()}function m(n,t){n=Math.max(-$a,Math.min($a,n)),t=Math.max(-$a,Math.min($a,t));var e=g(n,t);if(M&&x.push([n,t]),A)b=n,_=t,w=e,A=!1,e&&(c.lineStart(),c.point(n,t));else if(e&&k)c.point(n,t);else{var r=[S,E],u=[n,t];a(r,u)?(k||(c.lineStart(),c.point(r[0],r[1])),c.point(u[0],u[1]),e||c.lineEnd()):e&&(c.lineStart(),c.point(n,t))}S=n,E=t,k=e}var y,M,x,b,_,w,S,E,k,A,N=c,q=Jt(),T={point:p,lineStart:d,lineEnd:v,polygonStart:function(){c=q,y=[],M=[]},polygonEnd:function(){c=N,(y=vo.merge(y)).length?(c.polygonStart(),Xt(y,i,l,h,c),c.polygonEnd()):s([n,t])&&(c.polygonStart(),c.lineStart(),h(null,null,1,c),c.lineEnd(),c.polygonEnd()),y=M=x=null}};return T}}function ie(n,t,e){if(Math.abs(t)<$o)return 0>=n;var r=n/t;if(t>0){if(r>e[1])return!1;r>e[0]&&(e[0]=r)}else{if(r<e[0])return!1;r<e[1]&&(e[1]=r)}return!0}function oe(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function ae(n){var t=0,e=Bo/3,r=_e(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Bo/180,e=n[1]*Bo/180):[180*(t/Bo),180*(e/Bo)]},u}function ce(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,O((i-(n*n+e*e)*u*u)/(2*u))]},e}function le(){function n(n,t){Ja+=u*n-r*t,r=n,u=t}var t,e,r,u;tc.point=function(i,o){tc.point=n,t=r=i,e=u=o},tc.lineEnd=function(){n(t,e)}}function se(n,t){Ga>n&&(Ga=n),n>Qa&&(Qa=n),Ka>t&&(Ka=t),t>nc&&(nc=t)}function fe(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=he(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=he(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function he(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function ge(n,t){Ha+=n,Fa+=t,++Pa}function pe(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);Oa+=o*(t+n)/2,Ra+=o*(e+r)/2,Ya+=o,ge(t=n,e=r)}var t,e;rc.point=function(r,u){rc.point=n,ge(t=r,e=u)}}function de(){rc.point=ge}function ve(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);Oa+=o*(r+n)/2,Ra+=o*(u+t)/2,Ya+=o,o=u*n-r*t,Ia+=o*(r+n),Ua+=o*(u+t),Va+=3*o,ge(r=n,u=t)}var t,e,r,u;rc.point=function(i,o){rc.point=n,ge(t=r=i,e=u=o)},rc.lineEnd=function(){n(t,e)}}function me(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,2*Bo)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:c};return a}function ye(n){function t(t){function r(e,r){e=n(e,r),t.point(e[0],e[1])}function u(){M=0/0,S.point=o,t.lineStart()}function o(r,u){var o=Ct([r,u]),a=n(r,u);e(M,x,y,b,_,w,M=a[0],x=a[1],y=r,b=o[0],_=o[1],w=o[2],i,t),t.point(M,x)}function a(){S.point=r,t.lineEnd()}function c(){u(),S.point=l,S.lineEnd=s}function l(n,t){o(f=n,h=t),g=M,p=x,d=b,v=_,m=w,S.point=o}function s(){e(M,x,y,b,_,w,g,p,f,d,v,m,i,t),S.lineEnd=a,a()}var f,h,g,p,d,v,m,y,M,x,b,_,w,S={point:r,lineStart:u,lineEnd:a,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=u}};return S}function e(t,i,o,a,c,l,s,f,h,g,p,d,v,m){var y=s-t,M=f-i,x=y*y+M*M;if(x>4*r&&v--){var b=a+g,_=c+p,w=l+d,S=Math.sqrt(b*b+_*_+w*w),E=Math.asin(w/=S),k=Math.abs(Math.abs(w)-1)<$o?(o+h)/2:Math.atan2(_,b),A=n(k,E),N=A[0],q=A[1],T=N-t,z=q-i,C=M*T-y*z;(C*C/x>r||Math.abs((y*T+M*z)/x-.5)>.3||u>a*g+c*p+l*d)&&(e(t,i,o,a,c,l,N,q,k,b/=S,_/=S,w,v,m),m.point(N,q),e(N,q,k,b,_,w,s,f,h,g,p,d,v,m))}}var r=.5,u=Math.cos(30*Jo),i=16;return t.precision=function(n){return arguments.length?(i=(r=n*n)>0&&16,t):Math.sqrt(r)},t}function Me(n){this.stream=n}function xe(n){var t=ye(function(t,e){return n([t*Go,e*Go])});return function(n){var e=new Me(n=t(n));return e.point=function(t,e){n.point(t*Jo,e*Jo)},e}}function be(n){return _e(function(){return n})()}function _e(n){function t(n){return n=a(n[0]*Jo,n[1]*Jo),[n[0]*h+c,l-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(l-n[1])/h),n&&[n[0]*Go,n[1]*Go]}function r(){a=oe(o=Ee(m,y,M),i);var n=i(d,v);return c=g-n[0]*h,l=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,o,a,c,l,s,f=ye(function(n,t){return n=i(n,t),[n[0]*h+c,l-n[1]*h]}),h=150,g=480,p=250,d=0,v=0,m=0,y=0,M=0,x=Xa,b=dt,_=null,w=null;return t.stream=function(n){return s&&(s.valid=!1),s=we(o,x(f(b(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(x=null==n?(_=n,Xa):re((_=+n)*Jo),u()):_},t.clipExtent=function(n){return arguments.length?(w=n,b=n?ue(n[0][0],n[0][1],n[1][0],n[1][1]):dt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(d=n[0]%360*Jo,v=n[1]%360*Jo,r()):[d*Go,v*Go]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Jo,y=n[1]%360*Jo,M=n.length>2?n[2]%360*Jo:0,r()):[m*Go,y*Go,M*Go]},vo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function we(n,t){var e=new Me(t);return e.point=function(e,r){r=n(e*Jo,r*Jo),e=r[0],t.point(e>Bo?e-2*Bo:-Bo>e?e+2*Bo:e,r[1])},e}function Se(n,t){return[n,t]}function Ee(n,t,e){return n?t||e?oe(Ae(n),Ne(t,e)):Ae(n):t||e?Ne(t,e):Se}function ke(n){return function(t,e){return t+=n,[t>Bo?t-2*Bo:-Bo>t?t+2*Bo:t,e]}}function Ae(n){var t=ke(n);return t.invert=ke(-n),t}function Ne(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*r+a*u;return[Math.atan2(c*i-s*o,a*r-l*u),O(s*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,l=Math.sin(t),s=l*i-c*o;return[Math.atan2(c*i+l*o,a*r+s*u),O(s*r-a*u)]},e}function qe(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=Te(e,u),i=Te(e,i),(o>0?i>u:u>i)&&(u+=2*o*Bo)):(u=n+2*o*Bo,i=n-.5*c);for(var l,s=u;o>0?s>i:i>s;s-=c)a.point((l=Pt([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],l[1])}}function Te(n,t){var e=Ct(t);e[0]-=n,Ft(e);var r=P(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-$o)%(2*Math.PI)}function ze(n,t,e){var r=vo.range(n,t-$o,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function Ce(n,t,e){var r=vo.range(n,t-$o,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function De(n){return n.source}function je(n){return n.target}function Le(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),l=u*Math.sin(n),s=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(U(r-t)+u*o*U(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*s,u=e*l+t*f,o=e*i+t*a;return[Math.atan2(u,r)*Go,Math.atan2(o,Math.sqrt(r*r+u*u))*Go]}:function(){return[n*Go,t*Go]};return p.distance=h,p}function He(){function n(n,u){var i=Math.sin(u*=Jo),o=Math.cos(u),a=Math.abs((n*=Jo)-t),c=Math.cos(a);uc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;ic.point=function(u,i){t=u*Jo,e=Math.sin(i*=Jo),r=Math.cos(i),ic.point=n},ic.lineEnd=function(){ic.point=ic.lineEnd=c}}function Fe(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function Pe(n,t){function e(n,t){var e=Math.abs(Math.abs(t)-Bo/2)<$o?0:o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Bo/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=F(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Bo/2]},e):Re}function Oe(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return Math.abs(u)<$o?Se:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-F(u)*Math.sqrt(n*n+e*e)]},e)}function Re(n,t){return[n,Math.log(Math.tan(Bo/4+t/2))]}function Ye(n){var t,e=be(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Bo*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ie(n,t){var e=Math.cos(t)*Math.sin(n);return[Math.log((1+e)/(1-e))/2,Math.atan2(Math.tan(t),Math.cos(n))]}function Ue(n){function t(t){function o(){l.push("M",i(n(s),a))}for(var c,l=[],s=[],f=-1,h=t.length,g=pt(e),p=pt(r);++f<h;)u.call(this,c=t[f],f)?s.push([+g.call(this,c,f),+p.call(this,c,f)]):s.length&&(o(),s=[]);return s.length&&o(),l.length?l.join(""):null}var e=Ve,r=Ze,u=Zt,i=Xe,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=fc.get(n)||Xe).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function Ve(n){return n[0]}function Ze(n){return n[1]}function Xe(n){return n.join("L")}function Be(n){return Xe(n)+"Z"}function $e(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function We(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Je(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function Ge(n,t){return n.length<4?Xe(n):n[1]+nr(n.slice(1,n.length-1),tr(n,t))}function Ke(n,t){return n.length<3?Xe(n):n[0]+nr((n.push(n[0]),n),tr([n[n.length-2]].concat(n,[n[1]]),t))}function Qe(n,t){return n.length<3?Xe(n):n[0]+nr(n,tr(n,t))}function nr(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Xe(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var l=2;l<t.length;l++,c++)i=n[c],a=t[l],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var s=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+s[0]+","+s[1]}return r}function tr(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function er(n){if(n.length<3)return Xe(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",or(pc,o),",",or(pc,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),ar(c,o,a);return n.pop(),c.push("L",r),c.join("")}function rr(n){if(n.length<4)return Xe(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(or(pc,i)+","+or(pc,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),ar(e,i,o);return e.join("")}function ur(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[or(pc,o),",",or(pc,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),ar(t,o,a);return t.join("")}function ir(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,l=-1;++l<=e;)r=n[l],u=l/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return er(n)}function or(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function ar(n,t,e){n.push("C",or(hc,t),",",or(hc,e),",",or(gc,t),",",or(gc,e),",",or(pc,t),",",or(pc,e))}function cr(n,t){return(t[1]-n[1])/(t[0]-n[0])}function lr(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=cr(u,i);++t<e;)r[t]=(o+(o=cr(u=i,i=n[t+1])))/2;
return r[t]=o,r}function sr(n){for(var t,e,r,u,i=[],o=lr(n),a=-1,c=n.length-1;++a<c;)t=cr(n[a],n[a+1]),Math.abs(t)<1e-6?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function fr(n){return n.length<3?Xe(n):n[0]+nr(n,sr(n))}function hr(n,t,e,r){var u,i,o,a,c,l,s;return u=r[n],i=u[0],o=u[1],u=r[t],a=u[0],c=u[1],u=r[e],l=u[0],s=u[1],(s-o)*(a-i)-(c-o)*(l-i)>0}function gr(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function pr(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],l=e[1],s=t[1]-c,f=r[1]-l,h=(a*(c-l)-f*(u-i))/(f*o-a*s);return[u+h*o,c+h*s]}function dr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function vr(n,t){var e={list:n.map(function(n,t){return{index:t,x:n[0],y:n[1]}}).sort(function(n,t){return n.y<t.y?-1:n.y>t.y?1:n.x<t.x?-1:n.x>t.x?1:0}),bottomSite:null},r={list:[],leftEnd:null,rightEnd:null,init:function(){r.leftEnd=r.createHalfEdge(null,"l"),r.rightEnd=r.createHalfEdge(null,"l"),r.leftEnd.r=r.rightEnd,r.rightEnd.l=r.leftEnd,r.list.unshift(r.leftEnd,r.rightEnd)},createHalfEdge:function(n,t){return{edge:n,side:t,vertex:null,l:null,r:null}},insert:function(n,t){t.l=n,t.r=n.r,n.r.l=t,n.r=t},leftBound:function(n){var t=r.leftEnd;do t=t.r;while(t!=r.rightEnd&&u.rightOf(t,n));return t=t.l},del:function(n){n.l.r=n.r,n.r.l=n.l,n.edge=null},right:function(n){return n.r},left:function(n){return n.l},leftRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[n.side]},rightRegion:function(n){return null==n.edge?e.bottomSite:n.edge.region[vc[n.side]]}},u={bisect:function(n,t){var e={region:{l:n,r:t},ep:{l:null,r:null}},r=t.x-n.x,u=t.y-n.y,i=r>0?r:-r,o=u>0?u:-u;return e.c=n.x*r+n.y*u+.5*(r*r+u*u),i>o?(e.a=1,e.b=u/r,e.c/=r):(e.b=1,e.a=r/u,e.c/=u),e},intersect:function(n,t){var e=n.edge,r=t.edge;if(!e||!r||e.region.r==r.region.r)return null;var u=e.a*r.b-e.b*r.a;if(Math.abs(u)<1e-10)return null;var i,o,a=(e.c*r.b-r.c*e.b)/u,c=(r.c*e.a-e.c*r.a)/u,l=e.region.r,s=r.region.r;l.y<s.y||l.y==s.y&&l.x<s.x?(i=n,o=e):(i=t,o=r);var f=a>=o.region.r.x;return f&&"l"===i.side||!f&&"r"===i.side?null:{x:a,y:c}},rightOf:function(n,t){var e=n.edge,r=e.region.r,u=t.x>r.x;if(u&&"l"===n.side)return 1;if(!u&&"r"===n.side)return 0;if(1===e.a){var i=t.y-r.y,o=t.x-r.x,a=0,c=0;if(!u&&e.b<0||u&&e.b>=0?c=a=i>=e.b*o:(c=t.x+t.y*e.b>e.c,e.b<0&&(c=!c),c||(a=1)),!a){var l=r.x-e.region.l.x;c=e.b*(o*o-i*i)<l*i*(1+2*o/l+e.b*e.b),e.b<0&&(c=!c)}}else{var s=e.c-e.a*t.x,f=t.y-s,h=t.x-r.x,g=s-r.y;c=f*f>h*h+g*g}return"l"===n.side?c:!c},endPoint:function(n,e,r){n.ep[e]=r,n.ep[vc[e]]&&t(n)},distance:function(n,t){var e=n.x-t.x,r=n.y-t.y;return Math.sqrt(e*e+r*r)}},i={list:[],insert:function(n,t,e){n.vertex=t,n.ystar=t.y+e;for(var r=0,u=i.list,o=u.length;o>r;r++){var a=u[r];if(!(n.ystar>a.ystar||n.ystar==a.ystar&&t.x>a.vertex.x))break}u.splice(r,0,n)},del:function(n){for(var t=0,e=i.list,r=e.length;r>t&&e[t]!=n;++t);e.splice(t,1)},empty:function(){return 0===i.list.length},nextEvent:function(n){for(var t=0,e=i.list,r=e.length;r>t;++t)if(e[t]==n)return e[t+1];return null},min:function(){var n=i.list[0];return{x:n.vertex.x,y:n.ystar}},extractMin:function(){return i.list.shift()}};r.init(),e.bottomSite=e.list.shift();for(var o,a,c,l,s,f,h,g,p,d,v,m,y,M=e.list.shift();;)if(i.empty()||(o=i.min()),M&&(i.empty()||M.y<o.y||M.y==o.y&&M.x<o.x))a=r.leftBound(M),c=r.right(a),h=r.rightRegion(a),m=u.bisect(h,M),f=r.createHalfEdge(m,"l"),r.insert(a,f),d=u.intersect(a,f),d&&(i.del(a),i.insert(a,d,u.distance(d,M))),a=f,f=r.createHalfEdge(m,"r"),r.insert(a,f),d=u.intersect(f,c),d&&i.insert(f,d,u.distance(d,M)),M=e.list.shift();else{if(i.empty())break;a=i.extractMin(),l=r.left(a),c=r.right(a),s=r.right(c),h=r.leftRegion(a),g=r.rightRegion(c),v=a.vertex,u.endPoint(a.edge,a.side,v),u.endPoint(c.edge,c.side,v),r.del(a),i.del(c),r.del(c),y="l",h.y>g.y&&(p=h,h=g,g=p,y="r"),m=u.bisect(h,g),f=r.createHalfEdge(m,y),r.insert(l,f),u.endPoint(m,vc[y],v),d=u.intersect(l,f),d&&(i.del(l),i.insert(l,d,u.distance(d,h))),d=u.intersect(f,s),d&&i.insert(f,d,u.distance(d,h))}for(a=r.right(r.leftEnd);a!=r.rightEnd;a=r.right(a))t(a.edge)}function mr(n){return n.x}function yr(n){return n.y}function Mr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function xr(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&xr(n,c[0],e,r,o,a),c[1]&&xr(n,c[1],o,r,u,a),c[2]&&xr(n,c[2],e,a,o,i),c[3]&&xr(n,c[3],o,a,u,i)}}function br(n,t){n=vo.rgb(n),t=vo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+ct(Math.round(e+i*n))+ct(Math.round(r+o*n))+ct(Math.round(u+a*n))}}function _r(n,t){var e,r={},u={};for(e in n)e in t?r[e]=Er(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function wr(n,t){return t-=n=+n,function(e){return n+t*e}}function Sr(n,t){var e,r,u,i,o,a=0,c=0,l=[],s=[];for(n+="",t+="",mc.lastIndex=0,r=0;e=mc.exec(t);++r)e.index&&l.push(t.substring(a,c=e.index)),s.push({i:l.length,x:e[0]}),l.push(null),a=mc.lastIndex;for(a<t.length&&l.push(t.substring(a)),r=0,i=s.length;(e=mc.exec(n))&&i>r;++r)if(o=s[r],o.x==e[0]){if(o.i)if(null==l[o.i+1])for(l[o.i-1]+=o.x,l.splice(o.i,1),u=r+1;i>u;++u)s[u].i--;else for(l[o.i-1]+=o.x+l[o.i+1],l.splice(o.i,2),u=r+1;i>u;++u)s[u].i-=2;else if(null==l[o.i+1])l[o.i]=o.x;else for(l[o.i]=o.x+l[o.i+1],l.splice(o.i+1,1),u=r+1;i>u;++u)s[u].i--;s.splice(r,1),i--,r--}else o.x=wr(parseFloat(e[0]),parseFloat(o.x));for(;i>r;)o=s.pop(),null==l[o.i+1]?l[o.i]=o.x:(l[o.i]=o.x+l[o.i+1],l.splice(o.i+1,1)),i--;return 1===l.length?null==l[0]?(o=s[0].x,function(n){return o(n)+""}):function(){return t}:function(n){for(r=0;i>r;++r)l[(o=s[r]).i]=o.x(n);return l.join("")}}function Er(n,t){for(var e,r=vo.interpolators.length;--r>=0&&!(e=vo.interpolators[r](n,t)););return e}function kr(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(Er(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function Ar(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Nr(n){return function(t){return 1-n(1-t)}}function qr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Tr(n){return n*n}function zr(n){return n*n*n}function Cr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Dr(n){return function(t){return Math.pow(t,n)}}function jr(n){return 1-Math.cos(n*Bo/2)}function Lr(n){return Math.pow(2,10*(n-1))}function Hr(n){return 1-Math.sqrt(1-n*n)}function Fr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/(2*Bo)*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,10*-r)*Math.sin(2*(r-e)*Bo/t)}}function Pr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Or(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=vo.hcl(n),t=vo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return J(e+i*n,r+o*n,u+a*n)+""}}function Yr(n,t){n=vo.hsl(n),t=vo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return B(e+i*n,r+o*n,u+a*n)+""}}function Ir(n,t){n=vo.lab(n),t=vo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return Q(e+i*n,r+o*n,u+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Vr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Xr(t),u=Zr(t,e),i=Xr(Br(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Go,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Go:0}function Zr(n,t){return n[0]*t[0]+n[1]*t[1]}function Xr(n){var t=Math.sqrt(Zr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Br(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function $r(n,t){var e,r=[],u=[],i=vo.transform(n),o=vo.transform(t),a=i.translate,c=o.translate,l=i.rotate,s=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:wr(a[0],c[0])},{i:3,x:wr(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),l!=s?(l-s>180?s+=360:s-l>180&&(l+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:wr(l,s)})):s&&r.push(r.pop()+"rotate("+s+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:wr(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:wr(g[0],p[0])},{i:e-2,x:wr(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Wr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Jr(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Gr(n){for(var t=n.source,e=n.target,r=Qr(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Kr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Qr(n,t){if(n===t)return n;for(var e=Kr(n),r=Kr(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function nu(n){n.fixed|=2}function tu(n){n.fixed&=-7}function eu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ru(n){n.fixed&=-5}function uu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(uu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,u+=l*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function iu(n,t){return vo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=lu,n}function ou(n){return n.children}function au(n){return n.value}function cu(n,t){return t.value-n.value}function lu(n){return vo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function su(n){return n.x}function fu(n){return n.y}function hu(n,t,e){n.y0=t,n.y=e}function gu(n){return vo.range(n.length)}function pu(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function du(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function vu(n){return n.reduce(mu,0)}function mu(n,t){return n+t[1]}function yu(n,t){return Mu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function Mu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function xu(n){return[vo.min(n),vo.max(n)]}function bu(n,t){return n.parent==t.parent?1:2}function _u(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function wu(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function Su(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=Su(e[i],t),n)>0&&(n=r);return n}function Eu(n,t){return n.x-t.x}function ku(n,t){return t.x-n.x}function Au(n,t){return n.depth-t.depth}function Nu(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function qu(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function Tu(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function zu(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function Cu(n,t){return n.value-t.value}function Du(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function ju(n,t){n._pack_next=t,t._pack_prev=n}function Lu(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Hu(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(l=e.length)){var e,r,u,i,o,a,c,l,s=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(Fu),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(u=e[1],u.x=u.r,u.y=0,t(u),l>2))for(i=e[2],Ru(r,u,i),t(i),Du(r,i),r._pack_prev=i,Du(i,u),u=r._pack_next,o=3;l>o;o++){Ru(r,u,i=e[o]);var p=0,d=1,v=1;for(a=u._pack_next;a!==u;a=a._pack_next,d++)if(Lu(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!Lu(c,i);c=c._pack_prev,v++);p?(v>d||d==v&&u.r<r.r?ju(r,u=a):ju(r=c,u),o--):(Du(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(o=0;l>o;o++)i=e[o],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(Pu)}}function Fu(n){n._pack_next=n._pack_prev=n}function Pu(n){delete n._pack_next,delete n._pack_prev}function Ou(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)Ou(u[i],t,e,r)}function Ru(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),l=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+l*i,e.y=n.y+c*i-l*u}else e.x=n.x+r,e.y=n.y}function Yu(n){return 1+vo.max(n,function(n){return n.y})}function Iu(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Uu(n){var t=n.children;return t&&t.length?Uu(t[0]):n}function Vu(n){var t,e=n.children;return e&&(t=e.length)?Vu(e[t-1]):n}function Zu(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Xu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Bu(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function $u(n){return n.rangeExtent?n.rangeExtent():Bu(n.range())}function Wu(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Ju(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Gu(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Ac}function Ku(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=vo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Qu(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Ku:Wu,c=r?Jr:Wr;return o=u(n,t,c,e),a=u(t,n,c,Er),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ur)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return ri(n,t)},i.tickFormat=function(t,e){return ui(n,t,e)},i.nice=function(t){return ti(n,t),u()},i.copy=function(){return Qu(n,t,e,r)},u()}function ni(n,t){return vo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function ti(n,t){return Ju(n,Gu(ei(n,t)[2]))}function ei(n,t){null==t&&(t=10);var e=Bu(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function ri(n,t){return vo.range.apply(vo,ei(n,t))}function ui(n,t,e){var r=-Math.floor(Math.log(ei(n,t)[2])/Math.LN10+.01);return vo.format(e?e.replace(Sa,function(n,t,e,u,i,o,a,c,l,s){return[t,e,u,i,o,a,c,l||"."+(r-2*("%"===s)),s].join("")}):",."+r+"f")}function ii(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Ju(r.map(u),e?Math:qc);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Bu(r),o=[],a=n[0],c=n[1],l=Math.floor(u(a)),s=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(s-l)){if(e){for(;s>l;l++)for(var h=1;f>h;h++)o.push(i(l)*h);o.push(i(l))}else for(o.push(i(l));l++<s;)for(var h=f-1;h>0;h--)o.push(i(l)*h);for(l=0;o[l]<a;l++);for(s=o.length;o[s-1]>c;s--);o=o.slice(l,s)}return o},o.tickFormat=function(n,t){if(!arguments.length)return Nc;arguments.length<2?t=Nc:"function"!=typeof t&&(t=vo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return ii(n.copy(),t,e,r)},ni(o,n)}function oi(n,t,e){function r(t){return n(u(t))}var u=ai(t),i=ai(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return ri(e,n)},r.tickFormat=function(n,t){return ui(e,n,t)},r.nice=function(n){return r.domain(ti(e,n))},r.exponent=function(o){return arguments.length?(u=ai(t=o),i=ai(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return oi(n.copy(),t,e)},ni(r,n)}function ai(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ci(n,t){function e(t){return o[((i.get(t)||i.set(t,n.push(t)))-1)%o.length]}function r(t,e){return vo.range(n.length).map(function(n){return t+e*n})}var i,o,a;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new u;for(var o,a=-1,c=r.length;++a<c;)i.has(o=r[a])||i.set(o,n.push(o));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(o=n,a=0,t={t:"range",a:arguments},e):o},e.rangePoints=function(u,i){arguments.length<2&&(i=0);var c=u[0],l=u[1],s=(l-c)/(Math.max(1,n.length-1)+i);return o=r(n.length<2?(c+l)/2:c+s*i/2,s),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=(f-s)/(n.length-i+2*c);return o=r(s+h*c,h),l&&o.reverse(),a=h*(1-i),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var l=u[1]<u[0],s=u[l-0],f=u[1-l],h=Math.floor((f-s)/(n.length-i+2*c)),g=f-s-(n.length-i)*h;return o=r(s+Math.round(g/2),h),l&&o.reverse(),a=Math.round(h*(1-i)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Bu(t.a[0])},e.copy=function(){return ci(n,t)},e.domain(n)}function li(n,t){function e(){var e=0,i=t.length;for(u=[];++e<i;)u[e-1]=vo.quantile(n,e/i);return r}function r(n){return isNaN(n=+n)?void 0:t[vo.bisect(u,n)]}var u;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(vo.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return u},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?u[e-1]:n[0],e<u.length?u[e]:n[n.length-1]]},r.copy=function(){return li(n,t)},e()}function si(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return si(n,t,e)},u()}function fi(n,t){function e(e){return e>=e?t[vo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return fi(n,t)},e}function hi(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return ri(n,t)},t.tickFormat=function(t,e){return ui(n,t,e)},t.copy=function(){return hi(n)},t}function gi(n){return n.innerRadius}function pi(n){return n.outerRadius}function di(n){return n.startAngle}function vi(n){return n.endAngle}function mi(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+jc,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function yi(n){function t(t){function c(){d.push("M",a(n(m),f),s,l(n(v.reverse()),f),"Z")}for(var h,g,p,d=[],v=[],m=[],y=-1,M=t.length,x=pt(e),b=pt(u),_=e===r?function(){return g}:pt(r),w=u===i?function(){return p}:pt(i);++y<M;)o.call(this,h=t[y],y)?(v.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):v.length&&(c(),v=[],m=[]);return v.length&&c(),d.length?d.join(""):null}var e=Ve,r=Ve,u=0,i=Ze,o=Zt,a=Xe,c=a.key,l=a,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=fc.get(n)||Xe).key,l=a.reverse||a,s=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Mi(n){return n.radius}function xi(n){return[n.x,n.y]}function bi(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+jc;return[e*Math.cos(r),e*Math.sin(r)]}}function _i(){return 64}function wi(){return"circle"}function Si(n){var t=Math.sqrt(n/Bo);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Ei(n,t){return jo(n,Yc),n.id=t,n}function ki(n,t,e,r){var u=n.id;return N(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Ai(n){return null==n&&(n=""),function(){this.textContent=n}}function Ni(n,t,e,r){var i=n.__transition__||(n.__transition__={active:0,count:0}),o=i[e];if(!o){var a=r.time;o=i[e]={tween:new u,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++i.count,vo.timer(function(r){function u(r){return i.active>e?l():(i.active=e,o.event&&o.event.start.call(n,s,t),o.tween.forEach(function(e,r){(r=r.call(n,s,t))&&p.push(r)}),c(r)?1:(xt(c,0,a),void 0))}function c(r){if(i.active!==e)return l();for(var u=(r-h)/g,a=f(u),c=p.length;c>0;)p[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,s,t),l()):void 0}function l(){return--i.count?delete i[e]:delete n.__transition__,1}var s=n.__data__,f=o.ease,h=o.delay,g=o.duration,p=[];return r>=h?u(r):(xt(u,h,a),void 0)},0,a)}}function qi(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Ti(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function zi(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ci(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new $c(e-1)),1),e}function i(n,e){return t(n=new $c(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{$c=zi;var r=new zi;return r._=n,o(r,t,e)}finally{$c=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Di(n);return c.floor=c,c.round=Di(r),c.ceil=Di(u),c.offset=Di(i),c.range=a,n}function Di(n){return function(t,e){try{$c=zi;var r=new zi;return r._=t,n(r,e)._}finally{$c=Date}}}function ji(n){function t(t){for(var r,u,i,o=[],a=-1,c=0;++a<e;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=gl[r=n.charAt(++a)])&&(r=n.charAt(++a)),(i=pl[r])&&(r=i(t,null==u?"e"===r?" ":"0":u)),o.push(r),c=a+1);return o.push(n.substring(c,a)),o.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},r=Li(e,n,t,0);if(r!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var u=new $c;return"j"in e?u.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(u.setFullYear(e.y,0,1),u.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(u.getDay()+5)%7:e.w+7*e.U-(u.getDay()+6)%7)):u.setFullYear(e.y,e.m,e.d),u.setHours(e.H,e.M,e.S,e.L),u},t.toString=function(){return n},t}function Li(n,t,e,r){for(var u,i,o,a=0,c=t.length,l=e.length;c>a;){if(r>=l)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=dl[o in gl?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function Hi(n){return new RegExp("^(?:"+n.map(vo.requote).join("|")+")","i")}function Fi(n){for(var t=new u,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Pi(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Oi(n,t,e){ol.lastIndex=0;var r=ol.exec(t.substring(e));return r?(n.w=al.get(r[0].toLowerCase()),e+r[0].length):-1}function Ri(n,t,e){ul.lastIndex=0;var r=ul.exec(t.substring(e));return r?(n.w=il.get(r[0].toLowerCase()),e+r[0].length):-1}function Yi(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Ii(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Ui(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function Vi(n,t,e){sl.lastIndex=0;var r=sl.exec(t.substring(e));return r?(n.m=fl.get(r[0].toLowerCase()),e+r[0].length):-1}function Zi(n,t,e){cl.lastIndex=0;var r=cl.exec(t.substring(e));return r?(n.m=ll.get(r[0].toLowerCase()),e+r[0].length):-1}function Xi(n,t,e){return Li(n,pl.c.toString(),t,e)}function Bi(n,t,e){return Li(n,pl.x.toString(),t,e)}function $i(n,t,e){return Li(n,pl.X.toString(),t,e)}function Wi(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Ji(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+2));return r?(n.y=Gi(+r[0]),e+r[0].length):-1}function Gi(n){return n+(n>68?1900:2e3)}function Ki(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Qi(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function no(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function to(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function eo(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ro(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function uo(n,t,e){vl.lastIndex=0;var r=vl.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function io(n,t,e){var r=ml.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}function oo(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(Math.abs(t)/60),u=Math.abs(t)%60;return e+Pi(r,"0",2)+Pi(u,"0",2)}function ao(n,t,e){hl.lastIndex=0;var r=hl.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function co(n){function t(n){try{$c=zi;var t=new $c;return t._=n,e(t)}finally{$c=Date}}var e=ji(n);return t.parse=function(n){try{$c=zi;var t=e.parse(n);return t&&t._}finally{$c=Date}},t.toString=e.toString,t}function lo(n){return n.toISOString()}function so(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=vo.bisect(Ml,u);return i==Ml.length?[t.year,ei(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Ml[i-1]<Ml[i]/u?i-1:i]:[wl,ei(n,e)[2]]}return r.invert=function(t){return fo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(fo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,fo(+e+1),t).length}var i=r.domain(),o=Bu(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Ju(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=fo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=fo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Bu(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],fo(+e[1]+1),t)},r.tickFormat=function(){return e},r.copy=function(){return so(n.copy(),t,e)},ni(r,n)}function fo(n){return new Date(n)}function ho(n){return function(t){for(var e=n.length-1,r=n[e];!r[1](t);)r=n[--e];return r[0](t)}}function go(n){return JSON.parse(n.responseText)}function po(n){var t=Mo.createRange();return t.selectNode(Mo.body),t.createContextualFragment(n.responseText)}var vo={version:"3.3.2"};Date.now||(Date.now=function(){return+new Date});var mo=[].slice,yo=function(n){return mo.call(n)},Mo=document,xo=Mo.documentElement,bo=window;try{yo(xo.childNodes)[0].nodeType}catch(_o){yo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Mo.createElement("div").style.setProperty("opacity",0,"")}catch(wo){var So=bo.Element.prototype,Eo=So.setAttribute,ko=So.setAttributeNS,Ao=bo.CSSStyleDeclaration.prototype,No=Ao.setProperty;So.setAttribute=function(n,t){Eo.call(this,n,t+"")},So.setAttributeNS=function(n,t,e){ko.call(this,n,t,e+"")},Ao.setProperty=function(n,t,e){No.call(this,n,t+"",e)}}vo.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},vo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},vo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},vo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},vo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},vo.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},vo.mean=function(t,e){var r,u=t.length,i=0,o=-1,a=0;if(1===arguments.length)for(;++o<u;)n(r=t[o])&&(i+=(r-i)/++a);else for(;++o<u;)n(r=e.call(t,t[o],o))&&(i+=(r-i)/++a);return a?i:void 0},vo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},vo.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?vo.quantile(t.sort(vo.ascending),.5):void 0},vo.bisector=function(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n.call(t,t[i],i)<e?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;e<n.call(t,t[i],i)?u=i:r=i+1}return r}}};var qo=vo.bisector(function(n){return n});vo.bisectLeft=qo.left,vo.bisect=vo.bisectRight=qo.right,vo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},vo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},vo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},vo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,e=vo.min(arguments,t),r=new Array(e);++n<e;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},vo.transpose=function(n){return vo.zip.apply(vo,n)},vo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},vo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},vo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},vo.merge=function(n){return Array.prototype.concat.apply([],n)},vo.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");
var u,i=[],o=e(Math.abs(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(u=n+r*++a)>t;)i.push(u/o);else for(;(u=n+r*++a)<t;)i.push(u/o);return i},vo.map=function(n){var t=new u;if(n instanceof u)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(u,{has:function(n){return To+n in this},get:function(n){return this[To+n]},set:function(n,t){return this[To+n]=t},remove:function(n){return n=To+n,n in this&&delete this[n]},keys:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===zo&&n.call(this,t.substring(1),this[t])}});var To="\0",zo=To.charCodeAt(0);vo.nest=function(){function n(t,a,c){if(c>=o.length)return r?r.call(i,a):e?a.sort(e):a;for(var l,s,f,h,g=-1,p=a.length,d=o[c++],v=new u;++g<p;)(h=v.get(l=d(s=a[g])))?h.push(s):v.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,c))}):(s={},f=function(e,r){s[e]=n(t,r,c)}),v.forEach(f),s}function t(n,e){if(e>=o.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,i={},o=[],a=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(vo.map,e,0),0)},i.key=function(n){return o.push(n),i},i.sortKeys=function(n){return a[o.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},vo.set=function(n){var t=new i;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(i,{has:function(n){return To+n in this},add:function(n){return this[To+n]=!0,n},remove:function(n){return n=To+n,n in this&&delete this[n]},values:function(){var n=[];return this.forEach(function(t){n.push(t)}),n},forEach:function(n){for(var t in this)t.charCodeAt(0)===zo&&n.call(this,t.substring(1))}}),vo.behavior={},vo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=o(n,t,t[e]);return n};var Co=["webkit","ms","moz","Moz","o","O"];vo.dispatch=function(){for(var n=new l,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=s(n);return n},l.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},vo.event=null,vo.requote=function(n){return n.replace(Do,"\\$&")};var Do=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,jo={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Lo=function(n,t){return t.querySelector(n)},Ho=function(n,t){return t.querySelectorAll(n)},Fo=xo[a(xo,"matchesSelector")],Po=function(n,t){return Fo.call(n,t)};"function"==typeof Sizzle&&(Lo=function(n,t){return Sizzle(n,t)[0]||null},Ho=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},Po=Sizzle.matchesSelector),vo.selection=function(){return Io};var Oo=vo.selection.prototype=[];Oo.select=function(n){var t,e,r,u,i=[];n=d(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,l=r.length;++c<l;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return p(i)},Oo.selectAll=function(n){var t,e,r=[];n=v(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=yo(n.call(e,e.__data__,a,u))),t.parentNode=e);return p(r)};var Ro={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};vo.ns={prefix:Ro,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),Ro.hasOwnProperty(e)?{space:Ro[e],local:n}:n}},Oo.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=vo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(m(t,n[t]));return this}return this.each(m(n,t))},Oo.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=n.trim().split(/^|\s+/g)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!M(n[u]).test(t))return!1;return!0}for(t in n)this.each(x(t,n[t]));return this}return this.each(x(n,t))},Oo.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(_(e,n[e],t));return this}if(2>r)return bo.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(_(n,t,e))},Oo.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(w(t,n[t]));return this}return this.each(w(n,t))},Oo.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Oo.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Oo.append=function(n){return n=S(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Oo.insert=function(n,t){return n=S(n),t=d(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments))})},Oo.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},Oo.data=function(n,t){function e(n,e){var r,i,o,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),d=new Array(a);if(t){var v,m=new u,y=new u,M=[];for(r=-1;++r<a;)v=t.call(i=n[r],i.__data__,r),m.has(v)?d[r]=i:m.set(v,i),M.push(v);for(r=-1;++r<f;)v=t.call(e,o=e[r],r),(i=m.get(v))?(g[r]=i,i.__data__=o):y.has(v)||(p[r]=E(o)),y.set(v,o),m.remove(v);for(r=-1;++r<a;)m.has(M[r])&&(d[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],o=e[r],i?(i.__data__=o,g[r]=i):p[r]=E(o);for(;f>r;++r)p[r]=E(e[r]);for(;a>r;++r)d[r]=n[r]}p.update=g,p.parentNode=g.parentNode=d.parentNode=n.parentNode,c.push(p),l.push(g),s.push(d)}var r,i,o=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++o<a;)(i=r[o])&&(n[o]=i.__data__);return n}var c=q([]),l=p([]),s=p([]);if("function"==typeof n)for(;++o<a;)e(r=this[o],n.call(r,r.parentNode.__data__,o));else for(;++o<a;)e(r=this[o],n);return l.enter=function(){return c},l.exit=function(){return s},l},Oo.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Oo.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=k(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a)&&t.push(r)}return p(u)},Oo.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},Oo.sort=function(n){n=A.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Oo.each=function(n){return N(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Oo.call=function(n){var t=yo(arguments);return n.apply(t[0]=this,t),this},Oo.empty=function(){return!this.node()},Oo.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},Oo.size=function(){var n=0;return this.each(function(){++n}),n};var Yo=[];vo.selection.enter=q,vo.selection.enter.prototype=Yo,Yo.append=Oo.append,Yo.empty=Oo.empty,Yo.node=Oo.node,Yo.call=Oo.call,Yo.size=Oo.size,Yo.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var l=-1,s=u.length;++l<s;)(i=u[l])?(t.push(r[l]=e=n.call(u.parentNode,i.__data__,l,a)),e.__data__=i.__data__):t.push(null)}return p(o)},Yo.insert=function(n,t){return arguments.length<2&&(t=T(this)),Oo.insert.call(this,n,t)},Oo.transition=function(){for(var n,t,e=Fc||++Ic,r=[],u=Pc||{time:Date.now(),ease:Cr,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,l=a.length;++c<l;)(t=a[c])&&Ni(t,c,e,u),n.push(t)}return Ei(r,e)},Oo.interrupt=function(){return this.each(z)},vo.select=function(n){var t=["string"==typeof n?Lo(n,Mo):n];return t.parentNode=xo,p([t])},vo.selectAll=function(n){var t=yo("string"==typeof n?Ho(n,Mo):n);return t.parentNode=xo,p([t])};var Io=vo.select(xo);Oo.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(C(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(C(n,t,e))};var Uo=vo.map({mouseenter:"mouseover",mouseleave:"mouseout"});Uo.forEach(function(n){"on"+n in Mo&&Uo.remove(n)});var Vo=a(xo.style,"userSelect"),Zo=0;vo.mouse=function(n){return H(n,h())};var Xo=/WebKit/.test(bo.navigator.userAgent)?-1:0;vo.touches=function(n,t){return arguments.length<2&&(t=h().touches),t?yo(t).map(function(t){var e=H(n,t);return e.identifier=t.identifier,e}):[]},vo.behavior.drag=function(){function n(){this.on("mousedown.drag",o).on("touchstart.drag",a)}function t(){return vo.event.changedTouches[0].identifier}function e(n,t){return vo.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function o(){if(!s)return a();var n=t(s,g),e=n[0]-d[0],r=n[1]-d[1];v|=e|r,d=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function a(){m.on(e+"."+p,null).on(r+"."+p,null),y(v&&vo.event.target===h),f({type:"dragend"})}var c,l=this,s=l.parentNode,f=u.of(l,arguments),h=vo.event.target,g=n(),p=null==g?"drag":"drag-"+g,d=t(s,g),v=0,m=vo.select(bo).on(e+"."+p,o).on(r+"."+p,a),y=L();i?(c=i.apply(l,arguments),c=[c.x-d[0],c.y-d[1]]):c=[0,0],f({type:"dragstart"})}}var u=g(n,"drag","dragstart","dragend"),i=null,o=r(c,vo.mouse,"mousemove","mouseup"),a=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},vo.rebind(n,u,"on")};var Bo=Math.PI,$o=1e-6,Wo=$o*$o,Jo=Bo/180,Go=180/Bo,Ko=Math.SQRT2,Qo=2,na=4;vo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=Y(d),o=i/(Qo*h)*(e*I(Ko*t+d)-R(d));return[r+o*l,u+o*s,i*e/Y(Ko*t+d)]}return[r+n*l,u+n*s,i*Math.exp(Ko*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],l=o-r,s=a-u,f=l*l+s*s,h=Math.sqrt(f),g=(c*c-i*i+na*f)/(2*i*Qo*h),p=(c*c-i*i-na*f)/(2*c*Qo*h),d=Math.log(Math.sqrt(g*g+1)-g),v=Math.log(Math.sqrt(p*p+1)-p),m=v-d,y=(m||Math.log(c/i))/Ko;return e.duration=1e3*y,e},vo.behavior.zoom=function(){function n(n){n.on(A,l).on(ra+".zoom",h).on(N,p).on("dblclick.zoom",d).on(T,s)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(k[0],Math.min(k[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){b&&b.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-S.y)/S.k}).map(_.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function l(){function n(){s=1,u(vo.mouse(r),h),a(i)}function e(){f.on(N,bo===r?p:null).on(q,null),g(s&&vo.event.target===l),c(i)}var r=this,i=j.of(r,arguments),l=vo.event.target,s=0,f=vo.select(bo).on(N,n).on(q,e),h=t(vo.mouse(r)),g=L();z.call(r),o(i)}function s(){function n(){var n=vo.touches(d);return p=S.k,g={},n.forEach(function(n){g[n.identifier]=t(n)}),n}function e(){var t=Date.now(),e=n();if(1===e.length){if(500>t-M){var i=e[0],o=g[i.identifier];r(2*S.k),u(i,o),f(),a(v)}M=t}else if(e.length>1){var i=e[0],c=e[1],l=i[0]-c[0],s=i[1]-c[1];m=l*l+s*s}}function i(){var n=vo.touches(d),t=n[0],e=g[t.identifier];if(i=n[1]){var i,o=g[i.identifier],c=vo.event.scale;if(null==c){var l=(l=i[0]-t[0])*l+(l=i[1]-t[1])*l;c=m&&Math.sqrt(l/m)}t=[(t[0]+i[0])/2,(t[1]+i[1])/2],e=[(e[0]+o[0])/2,(e[1]+o[1])/2],r(c*p)}M=null,u(t,e),a(v)}function h(){vo.event.touches.length?n():(y.on(C,null).on(D,null),x.on(A,l).on(T,s),b(),c(v))}var g,p,d=this,v=j.of(d,arguments),m=0,y=vo.select(bo).on(C,i).on(D,h),x=vo.select(d).on(A,null).on(T,e),b=L();z.call(d),e(),o(v)}function h(){var n=j.of(this,arguments);y?clearTimeout(y):(z.call(this),o(n)),y=setTimeout(function(){y=null,c(n)},50),f();var e=m||vo.mouse(this);v||(v=t(e)),r(Math.pow(2,.002*ta())*S.k),u(e,v),a(n)}function p(){v=null}function d(){var n=j.of(this,arguments),e=vo.mouse(this),i=t(e),l=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,vo.event.shiftKey?Math.ceil(l)-1:Math.floor(l)+1)),u(e,i),a(n),c(n)}var v,m,y,M,x,b,_,w,S={x:0,y:0,k:1},E=[960,500],k=ea,A="mousedown.zoom",N="mousemove.zoom",q="mouseup.zoom",T="touchstart.zoom",C="touchmove.zoom",D="touchend.zoom",j=g(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=j.of(this,arguments),t=S;Fc?vo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=e/2,i=r/2,o=vo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(k=null==t?ea:[+t[0],+t[1]],n):k},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.x=function(t){return arguments.length?(b=t,x=t.copy(),S={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),S={x:0,y:0,k:1},n):w},vo.rebind(n,j,"on")};var ta,ea=[0,1/0],ra="onwheel"in Mo?(ta=function(){return-vo.event.deltaY*(vo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Mo?(ta=function(){return vo.event.wheelDelta},"mousewheel"):(ta=function(){return-vo.event.detail},"MozMousePixelScroll");V.prototype.toString=function(){return this.rgb()+""},vo.hsl=function(n,t,e){return 1===arguments.length?n instanceof X?Z(n.h,n.s,n.l):lt(""+n,st,Z):Z(+n,+t,+e)};var ua=X.prototype=new V;ua.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),Z(this.h,this.s,this.l/n)},ua.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),Z(this.h,this.s,n*this.l)},ua.rgb=function(){return B(this.h,this.s,this.l)},vo.hcl=function(n,t,e){return 1===arguments.length?n instanceof W?$(n.h,n.c,n.l):n instanceof K?nt(n.l,n.a,n.b):nt((n=ft((n=vo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):$(+n,+t,+e)};var ia=W.prototype=new V;ia.brighter=function(n){return $(this.h,this.c,Math.min(100,this.l+oa*(arguments.length?n:1)))},ia.darker=function(n){return $(this.h,this.c,Math.max(0,this.l-oa*(arguments.length?n:1)))},ia.rgb=function(){return J(this.h,this.c,this.l).rgb()},vo.lab=function(n,t,e){return 1===arguments.length?n instanceof K?G(n.l,n.a,n.b):n instanceof W?J(n.l,n.c,n.h):ft((n=vo.rgb(n)).r,n.g,n.b):G(+n,+t,+e)};var oa=18,aa=.95047,ca=1,la=1.08883,sa=K.prototype=new V;sa.brighter=function(n){return G(Math.min(100,this.l+oa*(arguments.length?n:1)),this.a,this.b)},sa.darker=function(n){return G(Math.max(0,this.l-oa*(arguments.length?n:1)),this.a,this.b)},sa.rgb=function(){return Q(this.l,this.a,this.b)},vo.rgb=function(n,t,e){return 1===arguments.length?n instanceof at?ot(n.r,n.g,n.b):lt(""+n,ot,B):ot(~~n,~~t,~~e)};var fa=at.prototype=new V;fa.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),ot(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):ot(u,u,u)},fa.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),ot(~~(n*this.r),~~(n*this.g),~~(n*this.b))},fa.hsl=function(){return st(this.r,this.g,this.b)},fa.toString=function(){return"#"+ct(this.r)+ct(this.g)+ct(this.b)};var ha=vo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ha.forEach(function(n,t){ha.set(n,ut(t))}),vo.functor=pt,vo.xhr=vt(dt),vo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=vo.xhr(n,t,i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o.row(e)}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function o(t){return t.map(a).join(n)}function a(n){return c.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var c=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=c)return o;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++a);else if(r!==l)continue;return n.substring(t,s-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],c=n.length,s=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new i,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(o).join("\n")},e},vo.csv=vo.dsv(",","text/csv"),vo.tsv=vo.dsv("	","text/tab-separated-values");var ga,pa,da,va,ma,ya=bo[a(bo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};vo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={callback:n,time:u,next:null};pa?pa.next=i:ga=i,pa=i,da||(va=clearTimeout(va),da=1,ya(Mt))},vo.timer.flush=function(){bt(),_t()};var Ma=".",xa=",",ba=[3,3],_a="$",wa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(wt);vo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=vo.round(n,St(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),wa[8+e/3]},vo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)},vo.format=function(n){var t=Sa.exec(n),e=t[1]||" ",r=t[2]||">",u=t[3]||"",i=t[4]||"",o=t[5],a=+t[6],c=t[7],l=t[8],s=t[9],f=1,h="",g=!1;switch(l&&(l=+l.substring(1)),(o||"0"===e&&"="===r)&&(o=e="0",r="=",c&&(a-=Math.floor((a-1)/4))),s){case"n":c=!0,s="g";break;case"%":f=100,h="%",s="f";break;case"p":f=100,h="%",s="r";break;case"b":case"o":case"x":case"X":"#"===i&&(i="0"+s.toLowerCase());case"c":case"d":g=!0,l=0;break;case"s":f=-1,s="r"}"#"===i?i="":"$"===i&&(i=_a),"r"!=s||l||(s="g"),null!=l&&("g"==s?l=Math.max(1,Math.min(21,l)):("e"==s||"f"==s)&&(l=Math.max(0,Math.min(20,l)))),s=Ea.get(s)||Et;var p=o&&c;return function(n){if(g&&n%1)return"";var t=0>n||0===n&&0>1/n?(n=-n,"-"):u;if(0>f){var d=vo.formatPrefix(n,l);n=d.scale(n),h=d.symbol}else n*=f;n=s(n,l);var v=n.lastIndexOf("."),m=0>v?n:n.substring(0,v),y=0>v?"":Ma+n.substring(v+1);!o&&c&&(m=ka(m));var M=i.length+m.length+y.length+(p?0:t.length),x=a>M?new Array(M=a-M+1).join(e):"";return p&&(m=ka(x+m)),t+=i,n=m+y,("<"===r?t+n+x:">"===r?x+t+n:"^"===r?x.substring(0,M>>=1)+t+n+x.substring(M):t+(p?n:x+n))+h}};var Sa=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,Ea=vo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=vo.round(n,St(n,t))).toFixed(Math.max(0,Math.min(20,St(n*(1+1e-15),t))))}}),ka=dt;if(ba){var Aa=ba.length;ka=function(n){for(var t=n.length,e=[],r=0,u=ba[0];t>0&&u>0;)e.push(n.substring(t-=u,t+u)),u=ba[r=(r+1)%Aa];return e.reverse().join(xa)}}vo.geo={},kt.prototype={s:0,t:0,add:function(n){At(n,this.t,Na),At(Na.s,this.s,this),this.s?this.t+=Na.t:this.s=Na.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var Na=new kt;vo.geo.stream=function(n,t){n&&qa.hasOwnProperty(n.type)?qa[n.type](n,t):Nt(n,t)};var qa={Feature:function(n,t){Nt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)Nt(e[r].geometry,t)}},Ta={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){qt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)qt(e[r],t,0)},Polygon:function(n,t){Tt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)Tt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)Nt(e[r],t)}};vo.geo.area=function(n){return za=0,vo.geo.stream(n,Da),za};var za,Ca=new kt,Da={sphere:function(){za+=4*Bo},point:c,lineStart:c,lineEnd:c,polygonStart:function(){Ca.reset(),Da.lineStart=zt},polygonEnd:function(){var n=2*Ca;za+=0>n?4*Bo+n:n,Da.lineStart=Da.lineEnd=Da.point=c}};vo.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=Ct([t*Jo,e*Jo]);if(m){var u=jt(m,r),i=[u[1],-u[0],0],o=jt(i,u);Ft(o),o=Pt(o);var c=t-p,l=c>0?1:-1,d=o[0]*Go*l,v=Math.abs(c)>180;if(v^(d>l*p&&l*t>d)){var y=o[1]*Go;y>g&&(g=y)}else if(d=(d+360)%360-180,v^(d>l*p&&l*t>d)){var y=-o[1]*Go;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);v?p>t?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?a(s,t)>a(s,h)&&(h=t):a(t,h)>a(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=Math.abs(r)>180?r+(r>0?360:-360):r}else d=n,v=e;Da.point(n,e),t(n,e)}function i(){Da.lineStart()}function o(){u(d,v),Da.lineEnd(),Math.abs(y)>$o&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,d,v,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=o,y=0,Da.polygonStart()},polygonEnd:function(){Da.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>Ca?(s=-(h=180),f=-(g=90)):y>$o?g=90:-$o>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],vo.geo.stream(n,b);var t=M.length;if(t){M.sort(c);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],l(e[0],u)||l(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,s=e[0],h=u[1])}return M=x=null,1/0===s||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[s,f],[h,g]]}}(),vo.geo.centroid=function(n){ja=La=Ha=Fa=Pa=Oa=Ra=Ya=Ia=Ua=Va=0,vo.geo.stream(n,Za);var t=Ia,e=Ua,r=Va,u=t*t+e*e+r*r;return Wo>u&&(t=Oa,e=Ra,r=Ya,$o>La&&(t=Ha,e=Fa,r=Pa),u=t*t+e*e+r*r,Wo>u)?[0/0,0/0]:[Math.atan2(e,t)*Go,O(r/Math.sqrt(u))*Go]};var ja,La,Ha,Fa,Pa,Oa,Ra,Ya,Ia,Ua,Va,Za={sphere:c,point:Rt,lineStart:It,lineEnd:Ut,polygonStart:function(){Za.lineStart=Vt},polygonEnd:function(){Za.lineStart=It}},Xa=$t(Zt,Qt,te,ee),Ba=[-Bo,0],$a=1e9;vo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=ue(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(vo.geo.conicEqualArea=function(){return ae(ce)}).raw=ce,vo.geo.albers=function(){return vo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},vo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=vo.geo.albers(),o=vo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=vo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var l=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*l,f-.238*l],[s+.455*l,f+.238*l]]).stream(c).point,r=o.translate([s-.307*l,f+.201*l]).clipExtent([[s-.425*l+$o,f+.12*l+$o],[s-.214*l-$o,f+.234*l-$o]]).stream(c).point,u=a.translate([s-.205*l,f+.212*l]).clipExtent([[s-.214*l+$o,f+.166*l+$o],[s-.115*l-$o,f+.234*l-$o]]).stream(c).point,n},n.scale(1070)};var Wa,Ja,Ga,Ka,Qa,nc,tc={point:c,lineStart:c,lineEnd:c,polygonStart:function(){Ja=0,tc.lineStart=le},polygonEnd:function(){tc.lineStart=tc.lineEnd=tc.point=c,Wa+=Math.abs(Ja/2)}},ec={point:se,lineStart:c,lineEnd:c,polygonStart:c,polygonEnd:c},rc={point:ge,lineStart:pe,lineEnd:de,polygonStart:function(){rc.lineStart=ve},polygonEnd:function(){rc.point=ge,rc.lineStart=pe,rc.lineEnd=de}};vo.geo.transform=function(n){return{stream:function(t){var e=new Me(t);for(var r in n)e[r]=n[r];return e}}},Me.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},vo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),vo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Wa=0,vo.geo.stream(n,u(tc)),Wa},n.centroid=function(n){return Ha=Fa=Pa=Oa=Ra=Ya=Ia=Ua=Va=0,vo.geo.stream(n,u(rc)),Va?[Ia/Va,Ua/Va]:Ya?[Oa/Ya,Ra/Ya]:Pa?[Ha/Pa,Fa/Pa]:[0/0,0/0]},n.bounds=function(n){return Qa=nc=-(Ga=Ka=1/0),vo.geo.stream(n,u(ec)),[[Ga,Ka],[Qa,nc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||xe(n):dt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new fe:new me(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(vo.geo.albersUsa()).context(null)},vo.geo.projection=be,vo.geo.projectionMutator=_e,(vo.geo.equirectangular=function(){return be(Se)}).raw=Se.invert=Se,vo.geo.rotation=function(n){function t(t){return t=n(t[0]*Jo,t[1]*Jo),t[0]*=Go,t[1]*=Go,t}return n=Ee(n[0]%360*Jo,n[1]*Jo,n.length>2?n[2]*Jo:0),t.invert=function(t){return t=n.invert(t[0]*Jo,t[1]*Jo),t[0]*=Go,t[1]*=Go,t},t},vo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=Ee(-n[0]*Jo,-n[1]*Jo,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Go,n[1]*=Go}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=qe((t=+r)*Jo,u*Jo),n):t},n.precision=function(r){return arguments.length?(e=qe(t*Jo,(u=+r)*Jo),n):u},n.angle(90)},vo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Jo,u=n[1]*Jo,i=t[1]*Jo,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),l=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*s-c*f*a)*e),c*s+l*f*a)},vo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return vo.range(Math.ceil(i/v)*v,u,v).map(h).concat(vo.range(Math.ceil(l/m)*m,c,m).map(g)).concat(vo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Math.abs(n%v)>$o}).map(s)).concat(vo.range(Math.ceil(a/d)*d,o,d).filter(function(n){return Math.abs(n%m)>$o}).map(f))}var e,r,u,i,o,a,c,l,s,f,h,g,p=10,d=p,v=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()
},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],l=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),l>c&&(t=l,l=c,c=t),n.precision(y)):[[i,l],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(v=+t[0],m=+t[1],n):[v,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],d=+t[1],n):[p,d]},n.precision=function(t){return arguments.length?(y=+t,s=ze(a,o,90),f=Ce(r,e,y),h=ze(l,c,90),g=Ce(i,u,y),n):y},n.majorExtent([[-180,-90+$o],[180,90-$o]]).minorExtent([[-180,-80-$o],[180,80+$o]])},vo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=De,u=je;return n.distance=function(){return vo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},vo.geo.interpolate=function(n,t){return Le(n[0]*Jo,n[1]*Jo,t[0]*Jo,t[1]*Jo)},vo.geo.length=function(n){return uc=0,vo.geo.stream(n,ic),uc};var uc,ic={sphere:c,point:c,lineStart:He,lineEnd:c,polygonStart:c,polygonEnd:c},oc=Fe(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(vo.geo.azimuthalEqualArea=function(){return be(oc)}).raw=oc;var ac=Fe(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},dt);(vo.geo.azimuthalEquidistant=function(){return be(ac)}).raw=ac,(vo.geo.conicConformal=function(){return ae(Pe)}).raw=Pe,(vo.geo.conicEquidistant=function(){return ae(Oe)}).raw=Oe;var cc=Fe(function(n){return 1/n},Math.atan);(vo.geo.gnomonic=function(){return be(cc)}).raw=cc,Re.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Bo/2]},(vo.geo.mercator=function(){return Ye(Re)}).raw=Re;var lc=Fe(function(){return 1},Math.asin);(vo.geo.orthographic=function(){return be(lc)}).raw=lc;var sc=Fe(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(vo.geo.stereographic=function(){return be(sc)}).raw=sc,Ie.invert=function(n,t){return[Math.atan2(R(n),Math.cos(t)),O(Math.sin(t)/Y(n))]},(vo.geo.transverseMercator=function(){return Ye(Ie)}).raw=Ie,vo.geom={},vo.svg={},vo.svg.line=function(){return Ue(dt)};var fc=vo.map({linear:Xe,"linear-closed":Be,step:$e,"step-before":We,"step-after":Je,basis:er,"basis-open":rr,"basis-closed":ur,bundle:ir,cardinal:Qe,"cardinal-open":Ge,"cardinal-closed":Ke,monotone:fr});fc.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var hc=[0,2/3,1/3,0],gc=[0,1/3,2/3,0],pc=[0,1/6,2/3,1/6];vo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u,i,o,a,c,l,s,f,h,g,p,d=pt(e),v=pt(r),m=n.length,y=m-1,M=[],x=[],b=0;if(d===Ve&&r===Ze)t=n;else for(i=0,t=[];m>i;++i)t.push([+d.call(this,u=n[i],i),+v.call(this,u,i)]);for(i=1;m>i;++i)(t[i][1]<t[b][1]||t[i][1]==t[b][1]&&t[i][0]<t[b][0])&&(b=i);for(i=0;m>i;++i)i!==b&&(c=t[i][1]-t[b][1],a=t[i][0]-t[b][0],M.push({angle:Math.atan2(c,a),index:i}));for(M.sort(function(n,t){return n.angle-t.angle}),g=M[0].angle,h=M[0].index,f=0,i=1;y>i;++i){if(o=M[i].index,g==M[i].angle){if(a=t[h][0]-t[b][0],c=t[h][1]-t[b][1],l=t[o][0]-t[b][0],s=t[o][1]-t[b][1],a*a+c*c>=l*l+s*s){M[i].index=-1;continue}M[f].index=-1}g=M[i].angle,f=i,h=o}for(x.push(b),i=0,o=0;2>i;++o)M[o].index>-1&&(x.push(M[o].index),i++);for(p=x.length;y>o;++o)if(!(M[o].index<0)){for(;!hr(x[p-2],x[p-1],M[o].index,t);)--p;x[p++]=M[o].index}var _=[];for(i=p-1;i>=0;--i)_.push(n[x[i]]);return _}var e=Ve,r=Ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},vo.geom.polygon=function(n){return jo(n,dc),n};var dc=vo.geom.polygon.prototype=[];dc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},dc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},dc.clip=function(n){for(var t,e,r,u,i,o,a=dr(n),c=-1,l=this.length-dr(this),s=this[l-1];++c<l;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],gr(o,s,u)?(gr(i,s,u)||n.push(pr(i,o,s,u)),n.push(o)):gr(i,s,u)&&n.push(pr(i,o,s,u)),i=o;a&&n.push(n[0]),s=u}return n},vo.geom.delaunay=function(n){var t=n.map(function(){return[]}),e=[];return vr(n,function(e){t[e.region.l.index].push(n[e.region.r.index])}),t.forEach(function(t,r){var u=n[r],i=u[0],o=u[1];t.forEach(function(n){n.angle=Math.atan2(n[0]-i,n[1]-o)}),t.sort(function(n,t){return n.angle-t.angle});for(var a=0,c=t.length-1;c>a;a++)e.push([u,t[a],t[a+1]])}),e},vo.geom.voronoi=function(n){function t(n){var t,i,o,a=n.map(function(){return[]}),c=pt(e),l=pt(r),s=n.length,f=1e6;if(c===Ve&&l===Ze)t=n;else for(t=new Array(s),o=0;s>o;++o)t[o]=[+c.call(this,i=n[o],o),+l.call(this,i,o)];if(vr(t,function(n){var t,e,r,u,i,o;1===n.a&&n.b>=0?(t=n.ep.r,e=n.ep.l):(t=n.ep.l,e=n.ep.r),1===n.a?(i=t?t.y:-f,r=n.c-n.b*i,o=e?e.y:f,u=n.c-n.b*o):(r=t?t.x:-f,i=n.c-n.a*r,u=e?e.x:f,o=n.c-n.a*u);var c=[r,i],l=[u,o];a[n.region.l.index].push(c,l),a[n.region.r.index].push(c,l)}),a=a.map(function(n,e){var r=t[e][0],u=t[e][1],i=n.map(function(n){return Math.atan2(n[0]-r,n[1]-u)}),o=vo.range(n.length).sort(function(n,t){return i[n]-i[t]});return o.filter(function(n,t){return!t||i[n]-i[o[t-1]]>$o}).map(function(t){return n[t]})}),a.forEach(function(n,e){var r=n.length;if(!r)return n.push([-f,-f],[-f,f],[f,f],[f,-f]);if(!(r>2)){var u=t[e],i=n[0],o=n[1],a=u[0],c=u[1],l=i[0],s=i[1],h=o[0],g=o[1],p=Math.abs(h-l),d=g-s;if(Math.abs(d)<$o){var v=s>c?-f:f;n.push([-f,v],[f,v])}else if($o>p){var m=l>a?-f:f;n.push([m,-f],[m,f])}else{var v=(l-a)*(g-s)>(h-l)*(s-c)?f:-f,y=Math.abs(d)-p;Math.abs(y)<$o?n.push([0>d?v:-v,v]):(y>0&&(v*=-1),n.push([-f,v],[f,v]))}}}),u)for(o=0;s>o;++o)u.clip(a[o]);for(o=0;s>o;++o)a[o].point=n[o];return a}var e=Ve,r=Ze,u=null;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.clipExtent=function(n){if(!arguments.length)return u&&[u[0],u[2]];if(null==n)u=null;else{var e=+n[0][0],r=+n[0][1],i=+n[1][0],o=+n[1][1];u=vo.geom.polygon([[e,r],[e,o],[i,o],[i,r]])}return t},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):u&&u[2]},t.links=function(n){var t,u,i,o=n.map(function(){return[]}),a=[],c=pt(e),l=pt(r),s=n.length;if(c===Ve&&l===Ze)t=n;else for(t=new Array(s),i=0;s>i;++i)t[i]=[+c.call(this,u=n[i],i),+l.call(this,u,i)];return vr(t,function(t){var e=t.region.l.index,r=t.region.r.index;o[e][r]||(o[e][r]=o[r][e]=!0,a.push({source:n[e],target:n[r]}))}),a},t.triangles=function(n){if(e===Ve&&r===Ze)return vo.geom.delaunay(n);for(var t,u=new Array(c),i=pt(e),o=pt(r),a=-1,c=n.length;++a<c;)(u[a]=[+i.call(this,t=n[a],a),+o.call(this,t,a)]).data=t;return vo.geom.delaunay(u).map(function(n){return n.map(function(n){return n.data})})},t)};var vc={l:"r",r:"l"};vo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,s=n.y;if(null!=c)if(Math.abs(c-e)+Math.abs(s-r)<.01)l(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,c,s,u,i,o,a),l(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,u,i,o,a)}function l(n,t,e,r,u,o,a,c){var l=.5*(u+a),s=.5*(o+c),f=e>=l,h=r>=s,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=Mr()),f?u=l:a=l,h?o=s:c=s,i(n,t,e,r,u,o,a,c)}var s,f,h,g,p,d,v,m,y,M=pt(a),x=pt(c);if(null!=t)d=t,v=e,m=r,y=u;else if(m=y=-(d=v=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)s=n[g],s.x<d&&(d=s.x),s.y<v&&(v=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);d>b&&(d=b),v>_&&(v=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-d,S=y-v;w>S?y=v+w:m=d+S;var E=Mr();if(E.add=function(n){i(E,n,+M(n,++g),+x(n,g),d,v,m,y)},E.visit=function(n){xr(n,E,d,v,m,y)},g=-1,null==t){for(;++g<p;)i(E,n[g],f[g],h[g],d,v,m,y);--g}else n.forEach(E.add);return f=h=n=s=null,E}var o,a=Ve,c=Ze;return(o=arguments.length)?(a=mr,c=yr,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},vo.interpolateRgb=br,vo.interpolateObject=_r,vo.interpolateNumber=wr,vo.interpolateString=Sr;var mc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;vo.interpolate=Er,vo.interpolators=[function(n,t){var e=typeof t;return("string"===e?ha.has(t)||/^(#|rgb\(|hsl\()/.test(t)?br:Sr:t instanceof V?br:"object"===e?Array.isArray(t)?kr:_r:wr)(n,t)}],vo.interpolateArray=kr;var yc=function(){return dt},Mc=vo.map({linear:yc,poly:Dr,quad:function(){return Tr},cubic:function(){return zr},sin:function(){return jr},exp:function(){return Lr},circle:function(){return Hr},elastic:Fr,back:Pr,bounce:function(){return Or}}),xc=vo.map({"in":dt,out:Nr,"in-out":qr,"out-in":function(n){return qr(Nr(n))}});vo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=Mc.get(e)||yc,r=xc.get(r)||dt,Ar(r(e.apply(null,Array.prototype.slice.call(arguments,1))))},vo.interpolateHcl=Rr,vo.interpolateHsl=Yr,vo.interpolateLab=Ir,vo.interpolateRound=Ur,vo.transform=function(n){var t=Mo.createElementNS(vo.ns.prefix.svg,"g");return(vo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Vr(e?e.matrix:bc)})(n)},Vr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var bc={a:1,b:0,c:0,d:1,e:0,f:0};vo.interpolateTransform=$r,vo.layout={},vo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Gr(n[e]));return t}},vo.layout.chord=function(){function n(){var n,l,f,h,g,p={},d=[],v=vo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(l=0,g=-1;++g<i;)l+=u[h][g];d.push(l),m.push(vo.range(i)),n+=l}for(o&&v.sort(function(n,t){return o(d[n],d[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(2*Bo-s*i)/n,l=0,h=-1;++h<i;){for(f=l,g=-1;++g<i;){var y=v[h],M=m[y][g],x=u[y][M],b=l,_=l+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:l,value:(l-f)/n},l+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,l={},s=0;return l.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,l):u},l.padding=function(n){return arguments.length?(s=n,e=r=null,l):s},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(a=n,e=null,l):a},l.sortChords=function(n){return arguments.length?(c=n,e&&t(),l):c},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},vo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=1/Math.sqrt(i*i+o*o);if(d>(u-e)*a){var c=t.charge*a*a;return n.px-=i*c,n.py-=o*c,!0}if(t.point&&isFinite(a)){var c=t.pointCharge*a*a;n.px-=i*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=vo.event.x,n.py=vo.event.y,a.resume()}var e,r,u,i,o,a={},c=vo.dispatch("start","tick","end"),l=[1,1],s=.9,f=_c,h=wc,g=-30,p=.1,d=.8,v=[],m=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,d,y,M,x,b=v.length,_=m.length;for(e=0;_>e;++e)a=m[e],f=a.source,h=a.target,M=h.x-f.x,x=h.y-f.y,(d=M*M+x*x)&&(d=r*i[e]*((d=Math.sqrt(d))-u[e])/d,M*=d,x*=d,h.x-=M*(y=f.weight/(h.weight+f.weight)),h.y-=x*y,f.x+=M*(y=1-y),f.y+=x*y);if((y=r*p)&&(M=l[0]/2,x=l[1]/2,e=-1,y))for(;++e<b;)a=v[e],a.x+=(M-a.x)*y,a.y+=(x-a.y)*y;if(g)for(uu(t=vo.geom.quadtree(v),r,o),e=-1;++e<b;)(a=v[e]).fixed||t.visit(n(a));for(e=-1;++e<b;)a=v[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*s,a.y-=(a.py-(a.py=a.y))*s);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(v=n,a):v},a.links=function(n){return arguments.length?(m=n,a):m},a.size=function(n){return arguments.length?(l=n,a):l},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(s=+n,a):s},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.gravity=function(n){return arguments.length?(p=+n,a):p},a.theta=function(n){return arguments.length?(d=+n,a):d},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),vo.timer(a.tick)),a):r},a.start=function(){function n(n,r){for(var u,i=t(e),o=-1,a=i.length;++o<a;)if(!isNaN(u=i[o][n]))return u;return Math.random()*r}function t(){if(!c){for(c=[],r=0;p>r;++r)c[r]=[];for(r=0;d>r;++r){var n=m[r];c[n.source.index].push(n.target),c[n.target.index].push(n.source)}}return c[e]}var e,r,c,s,p=v.length,d=m.length,y=l[0],M=l[1];for(e=0;p>e;++e)(s=v[e]).index=e,s.weight=0;for(e=0;d>e;++e)s=m[e],"number"==typeof s.source&&(s.source=v[s.source]),"number"==typeof s.target&&(s.target=v[s.target]),++s.source.weight,++s.target.weight;for(e=0;p>e;++e)s=v[e],isNaN(s.x)&&(s.x=n("x",y)),isNaN(s.y)&&(s.y=n("y",M)),isNaN(s.px)&&(s.px=s.x),isNaN(s.py)&&(s.py=s.y);if(u=[],"function"==typeof f)for(e=0;d>e;++e)u[e]=+f.call(this,m[e],e);else for(e=0;d>e;++e)u[e]=f;if(i=[],"function"==typeof h)for(e=0;d>e;++e)i[e]=+h.call(this,m[e],e);else for(e=0;d>e;++e)i[e]=h;if(o=[],"function"==typeof g)for(e=0;p>e;++e)o[e]=+g.call(this,v[e],e);else for(e=0;p>e;++e)o[e]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=vo.behavior.drag().origin(dt).on("dragstart.force",nu).on("drag.force",t).on("dragend.force",tu)),arguments.length?(this.on("mouseover.force",eu).on("mouseout.force",ru).call(e),void 0):e},vo.rebind(a,c,"on")};var _c=20,wc=1;vo.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(l=c.length)){for(var l,s,f=-1,h=t.children=[],g=0,p=o+1;++f<l;)s=n(c[f],p,a),s.parent=t,h.push(s),g+=s.value;r&&h.sort(r),i&&(t.value=g)}else i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,l=r+1;++c<a;)o+=t(u[c],l);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=cu,u=ou,i=au;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},vo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(a=i[l],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=vo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},iu(e,r)},vo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/vo.sum(o),l=vo.range(i.length);null!=e&&l.sort(e===Sc?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var s=[];return l.forEach(function(n){var t;s[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),s}var t=Number,e=Sc,r=0,u=2*Bo;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var Sc={};vo.layout.stack=function(){function n(a,c){var l=a.map(function(e,r){return t.call(n,e,r)}),s=l.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,s,c);l=vo.permute(l,f),s=vo.permute(s,f);var h,g,p,d=r.call(n,s,c),v=l.length,m=l[0].length;for(g=0;m>g;++g)for(u.call(n,l[0][g],p=d[g],s[0][g][1]),h=1;v>h;++h)u.call(n,l[h][g],p+=s[h-1][g][1],s[h][g][1]);return a}var t=dt,e=gu,r=pu,u=hu,i=su,o=fu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Ec.get(t)||gu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:kc.get(t)||pu,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var Ec=vo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(du),i=n.map(vu),o=vo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,l=[],s=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],l.push(e)):(c+=i[e],s.push(e));return s.reverse().concat(l)},reverse:function(n){return vo.range(n.length).reverse()},"default":gu}),kc=vo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,l,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=l=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];s>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,l>c&&(l=c)}for(e=0;h>e;++e)g[e]-=l;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:pu});vo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],l=n.map(e,this),s=r.call(this,l,i),f=u.call(this,s,l,i),i=-1,h=l.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=l[i],a>=s[0]&&a<=s[1]&&(o=c[vo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=xu,u=yu;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=pt(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return Mu(n,t)}:pt(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},vo.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,l,s=r[0],f=s,h=-1;++h<i;)l=r[h],o(l,a),f=c(l,a,f),a=l;qu(n);var g=.5*(s._tree.prelim+l._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],l=i._tree.mod,s=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=wu(a),i=_u(i),a&&i;)c=_u(c),o=wu(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-l+e(a,i),u>0&&(Tu(zu(a,n,r),n,u),l+=u,s+=u),f+=a._tree.mod,l+=i._tree.mod,h+=c._tree.mod,s+=o._tree.mod;a&&!wu(o)&&(o._tree.thread=a,o._tree.mod+=f-s),i&&!_u(c)&&(c._tree.thread=i,c._tree.mod+=l-h,r=n)}return r}var l=t.call(this,n,i),s=l[0];Nu(s,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(s),a(s,-s._tree.prelim);var f=Su(s,ku),h=Su(s,Eu),g=Su(s,Au),p=f.x-e(f,h)/2,d=h.x+e(h,f)/2,v=g.depth||1;return Nu(s,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(d-p)*r[0],n.y=n.depth/v*r[1],delete n._tree}),l}var t=vo.layout.hierarchy().sort(null).value(null),e=bu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},iu(n,t)},vo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],l=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Nu(a,function(n){n.r=+s(n.value)}),Nu(a,Hu),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/l))/2;Nu(a,function(n){n.r+=f}),Nu(a,Hu),Nu(a,function(n){n.r-=f})}return Ou(a,c/2,l/2,t?1:1/Math.max(2*a.r/c,2*a.r/l)),o}var t,e=vo.layout.hierarchy().sort(Cu),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},iu(n,e)},vo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],l=0;Nu(c,function(n){var t=n.children;t&&t.length?(n.x=Iu(t),n.y=Yu(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var s=Uu(c),f=Vu(c),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return Nu(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=vo.layout.hierarchy().sort(null).value(null),e=bu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},iu(n,t)},vo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,l=f(e),s=[],h=i.slice(),p=1/0,d="slice"===g?l.dx:"dice"===g?l.dy:"slice-dice"===g?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),s.area=0;(c=h.length)>0;)s.push(o=h[c-1]),s.area+=o.area,"squarify"!==g||(a=r(s,d))<=p?(h.pop(),p=a):(s.area-=s.pop().area,u(s,d,l,!1),d=Math.min(l.dx,l.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,d,l,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,l=e.y,s=t?c(n.area/t):0;if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<o;)u=n[i],u.x=a,u.y=l,u.dy=s,a+=u.dx=Math.min(e.x+e.dx-a,s?c(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<o;)u=n[i],u.x=a,u.y=l,u.dx=s,l+=u.dy=Math.min(e.y+e.dy-l,s?c(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-l,e.x+=s,e.dx-=s}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=l[0],i.dy=l[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=vo.layout.hierarchy(),c=Math.round,l=[1,1],s=null,f=Zu,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(l=n,i):l},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Zu(t):Xu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Xu(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Zu:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},iu(i,a)},vo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=vo.random.normal.apply(vo,arguments);return function(){return Math.exp(n())}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t/n}}},vo.scale={};var Ac={floor:dt,ceil:dt};vo.scale.linear=function(){return Qu([0,1],[0,1],Er,!1)},vo.scale.log=function(){return ii(vo.scale.linear().domain([0,1]),10,!0,[1,10])};var Nc=vo.format(".0e"),qc={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};vo.scale.pow=function(){return oi(vo.scale.linear(),1,[0,1])},vo.scale.sqrt=function(){return vo.scale.pow().exponent(.5)},vo.scale.ordinal=function(){return ci([],{t:"range",a:[[]]})},vo.scale.category10=function(){return vo.scale.ordinal().range(Tc)},vo.scale.category20=function(){return vo.scale.ordinal().range(zc)},vo.scale.category20b=function(){return vo.scale.ordinal().range(Cc)},vo.scale.category20c=function(){return vo.scale.ordinal().range(Dc)};var Tc=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(it),zc=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(it),Cc=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(it),Dc=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(it);vo.scale.quantile=function(){return li([],[])},vo.scale.quantize=function(){return si(0,1,[0,1])},vo.scale.threshold=function(){return fi([.5],[0,1])},vo.scale.identity=function(){return hi([0,1])},vo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+jc,a=u.apply(this,arguments)+jc,c=(o>a&&(c=o,o=a,a=c),a-o),l=Bo>c?"0":"1",s=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=Lc?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+l+",0 "+n*s+","+n*f+"Z":"M"+i*s+","+i*f+"A"+i+","+i+" 0 "+l+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=gi,e=pi,r=di,u=vi;return n.innerRadius=function(e){return arguments.length?(t=pt(e),n):t},n.outerRadius=function(t){return arguments.length?(e=pt(t),n):e},n.startAngle=function(t){return arguments.length?(r=pt(t),n):r},n.endAngle=function(t){return arguments.length?(u=pt(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+jc;return[Math.cos(i)*n,Math.sin(i)*n]},n};var jc=-Bo/2,Lc=2*Bo-1e-6;vo.svg.line.radial=function(){var n=Ue(mi);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},We.reverse=Je,Je.reverse=We,vo.svg.area=function(){return yi(dt)},vo.svg.area.radial=function(){var n=yi(mi);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},vo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),l=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,l)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+u(l.r,l.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+jc,s=l.call(n,u,r)+jc;return{r:i,a0:o,a1:s,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Bo)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=De,o=je,a=Mi,c=di,l=vi;return n.radius=function(t){return arguments.length?(a=pt(t),n):a},n.source=function(t){return arguments.length?(i=pt(t),n):i},n.target=function(t){return arguments.length?(o=pt(t),n):o},n.startAngle=function(t){return arguments.length?(c=pt(t),n):c},n.endAngle=function(t){return arguments.length?(l=pt(t),n):l},n},vo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=De,e=je,r=xi;return n.source=function(e){return arguments.length?(t=pt(e),n):t},n.target=function(t){return arguments.length?(e=pt(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},vo.svg.diagonal.radial=function(){var n=vo.svg.diagonal(),t=xi,e=n.projection;return n.projection=function(n){return arguments.length?e(bi(t=n)):t},n},vo.svg.symbol=function(){function n(n,r){return(Hc.get(t.call(this,n,r))||Si)(e.call(this,n,r))}var t=wi,e=_i;return n.type=function(e){return arguments.length?(t=pt(e),n):t},n.size=function(t){return arguments.length?(e=pt(t),n):e},n};var Hc=vo.map({circle:Si,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Rc)),e=t*Rc;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Oc),e=t*Oc/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Oc),e=t*Oc/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});vo.svg.symbolTypes=Hc.keys();var Fc,Pc,Oc=Math.sqrt(3),Rc=Math.tan(30*Jo),Yc=[],Ic=0;Yc.call=Oo.call,Yc.empty=Oo.empty,Yc.node=Oo.node,Yc.size=Oo.size,vo.transition=function(n){return arguments.length?Fc?n.transition():n:Io.transition()},vo.transition.prototype=Yc,Yc.select=function(n){var t,e,r,u=this.id,i=[];n=d(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],l=-1,s=c.length;++l<s;)(r=c[l])&&(e=n.call(r,r.__data__,l,o))?("__data__"in r&&(e.__data__=r.__data__),Ni(e,l,u,r.__transition__[u]),t.push(e)):t.push(null)}return Ei(i,u)},Yc.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=v(n);for(var c=-1,l=this.length;++c<l;)for(var s=this[c],f=-1,h=s.length;++f<h;)if(r=s[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&Ni(u,g,o,i),t.push(u)}return Ei(a,o)},Yc.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=k(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a)&&t.push(r)}return Ei(u,this.id)},Yc.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):N(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Yc.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?$r:Er,a=vo.ns.qualify(n);return ki(this,"attr."+n,t,a.local?i:u)},Yc.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))
}}var u=vo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Yc.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=bo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=Er(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return ki(this,"style."+n,t,u)},Yc.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,bo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Yc.text=function(n){return ki(this,"text",n,Ai)},Yc.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Yc.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=vo.ease.apply(vo,arguments)),N(this,function(e){e.__transition__[t].ease=n}))},Yc.delay=function(n){var t=this.id;return N(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Yc.duration=function(n){var t=this.id;return N(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Yc.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Pc,u=Fc;Fc=e,N(this,function(t,r,u){Pc=t.__transition__[e],n.call(t,t.__data__,r,u)}),Pc=r,Fc=u}else N(this,function(r){var u=r.__transition__[e];(u.event||(u.event=vo.dispatch("start","end"))).on(n,t)});return this},Yc.transition=function(){for(var n,t,e,r,u=this.id,i=++Ic,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],l=0,s=t.length;s>l;l++)(e=t[l])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,Ni(e,l,i,r)),n.push(e)}return Ei(o,i)},vo.svg.axis=function(){function n(n){n.each(function(){var n,l=vo.select(this),s=null==c?e.ticks?e.ticks.apply(e,a):e.domain():c,f=null==t?e.tickFormat?e.tickFormat.apply(e,a):dt:t,h=l.selectAll(".tick").data(s,dt),g=h.enter().insert("g",".domain").attr("class","tick").style("opacity",1e-6),p=vo.transition(h.exit()).style("opacity",1e-6).remove(),d=vo.transition(h).style("opacity",1),v=$u(e),m=l.selectAll(".domain").data([0]),y=(m.enter().append("path").attr("class","domain"),vo.transition(m)),M=e.copy(),x=this.__chart__||M;this.__chart__=M,g.append("line"),g.append("text");var b=g.select("line"),_=d.select("line"),w=h.select("text").text(f),S=g.select("text"),E=d.select("text");switch(r){case"bottom":n=qi,b.attr("y2",u),S.attr("y",Math.max(u,0)+o),_.attr("x2",0).attr("y2",u),E.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),y.attr("d","M"+v[0]+","+i+"V0H"+v[1]+"V"+i);break;case"top":n=qi,b.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),_.attr("x2",0).attr("y2",-u),E.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),y.attr("d","M"+v[0]+","+-i+"V0H"+v[1]+"V"+-i);break;case"left":n=Ti,b.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),_.attr("x2",-u).attr("y2",0),E.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),y.attr("d","M"+-i+","+v[0]+"H0V"+v[1]+"H"+-i);break;case"right":n=Ti,b.attr("x2",u),S.attr("x",Math.max(u,0)+o),_.attr("x2",u).attr("y2",0),E.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),y.attr("d","M"+i+","+v[0]+"H0V"+v[1]+"H"+i)}if(e.rangeBand){var k=M.rangeBand()/2,A=function(n){return M(n)+k};g.call(n,A),d.call(n,A)}else g.call(n,x),d.call(n,M),p.call(n,M)})}var t,e=vo.scale.linear(),r=Uc,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Vc?t+"":Uc,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Uc="bottom",Vc={top:1,right:1,bottom:1,left:1};vo.svg.brush=function(){function n(i){i.each(function(){var i=vo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(v,dt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Zc[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var s,f=vo.transition(i),h=vo.transition(o);c&&(s=$u(c),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),l&&(s=$u(l),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function r(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){var n=vo.event.changedTouches;return n?vo.touches(_,n)[0]:vo.mouse(_)}function g(){32==vo.event.keyCode&&(q||(x=null,z[0]-=s[1],z[1]-=h[1],q=2),f())}function v(){32==vo.event.keyCode&&2==q&&(z[0]+=s[1],z[1]+=h[1],q=0,f())}function m(){var n=u(),i=!1;b&&(n[0]+=b[0],n[1]+=b[1]),q||(vo.event.altKey?(x||(x=[(s[0]+s[1])/2,(h[0]+h[1])/2]),z[0]=s[+(n[0]<x[0])],z[1]=h[+(n[1]<x[1])]):x=null),A&&y(n,c,0)&&(e(E),i=!0),N&&y(n,l,1)&&(r(E),i=!0),i&&(t(E),S({type:"brush",mode:q?"move":"resize"}))}function y(n,t,e){var r,u,a=$u(t),c=a[0],l=a[1],f=z[e],g=e?h:s,v=g[1]-g[0];return q&&(c-=f,l-=v+f),r=(e?d:p)?Math.max(c,Math.min(l,n[e])):n[e],q?u=(r+=f)+v:(x&&(f=Math.max(c,Math.min(l,2*x[e]-r))),r>f?(u=r,r=f):u=f),g[0]!=r||g[1]!=u?(e?o=null:i=null,g[0]=r,g[1]=u,!0):void 0}function M(){m(),E.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),vo.select("body").style("cursor",null),C.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),T(),S({type:"brushend"})}var x,b,_=this,w=vo.select(vo.event.target),S=a.of(_,arguments),E=vo.select(_),k=w.datum(),A=!/^(n|s)$/.test(k)&&c,N=!/^(e|w)$/.test(k)&&l,q=w.classed("extent"),T=L(),z=u(),C=vo.select(bo).on("keydown.brush",g).on("keyup.brush",v);if(vo.event.changedTouches?C.on("touchmove.brush",m).on("touchend.brush",M):C.on("mousemove.brush",m).on("mouseup.brush",M),E.interrupt().selectAll("*").interrupt(),q)z[0]=s[0]-z[0],z[1]=h[0]-z[1];else if(k){var D=+/w$/.test(k),j=+/^n/.test(k);b=[s[1-D]-z[0],h[1-j]-z[1]],z[0]=s[D],z[1]=h[j]}else vo.event.altKey&&(x=z.slice());E.style("pointer-events","none").selectAll(".resize").style("display",null),vo.select("body").style("cursor",w.style("cursor")),S({type:"brushstart"}),m()}var i,o,a=g(n,"brushstart","brush","brushend"),c=null,l=null,s=[0,0],h=[0,0],p=!0,d=!0,v=Xc[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:s,y:h,i:i,j:o},e=this.__chart__||t;this.__chart__=t,Fc?vo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=kr(s,t.x),r=kr(h,t.y);return i=o=null,function(u){s=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Xc[!c<<1|!l],n):c},n.y=function(t){return arguments.length?(l=t,v=Xc[!c<<1|!l],n):l},n.clamp=function(t){return arguments.length?(c&&l?(p=!!t[0],d=!!t[1]):c?p=!!t:l&&(d=!!t),n):c&&l?[p,d]:c?p:l?d:null},n.extent=function(t){var e,r,u,a,f;return arguments.length?(c&&(e=t[0],r=t[1],l&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(f=e,e=r,r=f),(e!=s[0]||r!=s[1])&&(s=[e,r])),l&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],l.invert&&(u=l(u),a=l(a)),u>a&&(f=u,u=a,a=f),(u!=h[0]||a!=h[1])&&(h=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(f=e,e=r,r=f))),l&&(o?(u=o[0],a=o[1]):(u=h[0],a=h[1],l.invert&&(u=l.invert(u),a=l.invert(a)),u>a&&(f=u,u=a,a=f))),c&&l?[[e,u],[r,a]]:c?[e,r]:l&&[u,a])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],i=o=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!l&&h[0]==h[1]},vo.rebind(n,a,"on")};var Zc={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Xc=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Bc=vo.time={},$c=Date,Wc=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];zi.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){Jc.setUTCDate.apply(this._,arguments)},setDay:function(){Jc.setUTCDay.apply(this._,arguments)},setFullYear:function(){Jc.setUTCFullYear.apply(this._,arguments)},setHours:function(){Jc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){Jc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){Jc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){Jc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){Jc.setUTCSeconds.apply(this._,arguments)},setTime:function(){Jc.setTime.apply(this._,arguments)}};var Jc=Date.prototype,Gc="%a %b %e %X %Y",Kc="%m/%d/%Y",Qc="%H:%M:%S",nl=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],tl=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],el=["January","February","March","April","May","June","July","August","September","October","November","December"],rl=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];Bc.year=Ci(function(n){return n=Bc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),Bc.years=Bc.year.range,Bc.years.utc=Bc.year.utc.range,Bc.day=Ci(function(n){var t=new $c(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),Bc.days=Bc.day.range,Bc.days.utc=Bc.day.utc.range,Bc.dayOfYear=function(n){var t=Bc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},Wc.forEach(function(n,t){n=n.toLowerCase(),t=7-t;var e=Bc[n]=Ci(function(n){return(n=Bc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=Bc.year(n).getDay();return Math.floor((Bc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});Bc[n+"s"]=e.range,Bc[n+"s"].utc=e.utc.range,Bc[n+"OfYear"]=function(n){var e=Bc.year(n).getDay();return Math.floor((Bc.dayOfYear(n)+(e+t)%7)/7)}}),Bc.week=Bc.sunday,Bc.weeks=Bc.sunday.range,Bc.weeks.utc=Bc.sunday.utc.range,Bc.weekOfYear=Bc.sundayOfYear,Bc.format=ji;var ul=Hi(nl),il=Fi(nl),ol=Hi(tl),al=Fi(tl),cl=Hi(el),ll=Fi(el),sl=Hi(rl),fl=Fi(rl),hl=/^%/,gl={"-":"",_:" ",0:"0"},pl={a:function(n){return tl[n.getDay()]},A:function(n){return nl[n.getDay()]},b:function(n){return rl[n.getMonth()]},B:function(n){return el[n.getMonth()]},c:ji(Gc),d:function(n,t){return Pi(n.getDate(),t,2)},e:function(n,t){return Pi(n.getDate(),t,2)},H:function(n,t){return Pi(n.getHours(),t,2)},I:function(n,t){return Pi(n.getHours()%12||12,t,2)},j:function(n,t){return Pi(1+Bc.dayOfYear(n),t,3)},L:function(n,t){return Pi(n.getMilliseconds(),t,3)},m:function(n,t){return Pi(n.getMonth()+1,t,2)},M:function(n,t){return Pi(n.getMinutes(),t,2)},p:function(n){return n.getHours()>=12?"PM":"AM"},S:function(n,t){return Pi(n.getSeconds(),t,2)},U:function(n,t){return Pi(Bc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Pi(Bc.mondayOfYear(n),t,2)},x:ji(Kc),X:ji(Qc),y:function(n,t){return Pi(n.getFullYear()%100,t,2)},Y:function(n,t){return Pi(n.getFullYear()%1e4,t,4)},Z:oo,"%":function(){return"%"}},dl={a:Oi,A:Ri,b:Vi,B:Zi,c:Xi,d:Qi,e:Qi,H:to,I:to,j:no,L:uo,m:Ki,M:eo,p:io,S:ro,U:Ii,w:Yi,W:Ui,x:Bi,X:$i,y:Ji,Y:Wi,"%":ao},vl=/^\s*\d+/,ml=vo.map({am:0,pm:1});ji.utc=co;var yl=co("%Y-%m-%dT%H:%M:%S.%LZ");ji.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?lo:yl,lo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},lo.toString=yl.toString,Bc.second=Ci(function(n){return new $c(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),Bc.seconds=Bc.second.range,Bc.seconds.utc=Bc.second.utc.range,Bc.minute=Ci(function(n){return new $c(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),Bc.minutes=Bc.minute.range,Bc.minutes.utc=Bc.minute.utc.range,Bc.hour=Ci(function(n){var t=n.getTimezoneOffset()/60;return new $c(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),Bc.hours=Bc.hour.range,Bc.hours.utc=Bc.hour.utc.range,Bc.month=Ci(function(n){return n=Bc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),Bc.months=Bc.month.range,Bc.months.utc=Bc.month.utc.range;var Ml=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],xl=[[Bc.second,1],[Bc.second,5],[Bc.second,15],[Bc.second,30],[Bc.minute,1],[Bc.minute,5],[Bc.minute,15],[Bc.minute,30],[Bc.hour,1],[Bc.hour,3],[Bc.hour,6],[Bc.hour,12],[Bc.day,1],[Bc.day,2],[Bc.week,1],[Bc.month,1],[Bc.month,3],[Bc.year,1]],bl=[[ji("%Y"),Zt],[ji("%B"),function(n){return n.getMonth()}],[ji("%b %d"),function(n){return 1!=n.getDate()}],[ji("%a %d"),function(n){return n.getDay()&&1!=n.getDate()}],[ji("%I %p"),function(n){return n.getHours()}],[ji("%I:%M"),function(n){return n.getMinutes()}],[ji(":%S"),function(n){return n.getSeconds()}],[ji(".%L"),function(n){return n.getMilliseconds()}]],_l=ho(bl);xl.year=Bc.year,Bc.scale=function(){return so(vo.scale.linear(),xl,_l)};var wl={range:function(n,t,e){return vo.range(+n,+t,e).map(fo)}},Sl=xl.map(function(n){return[n[0].utc,n[1]]}),El=[[co("%Y"),Zt],[co("%B"),function(n){return n.getUTCMonth()}],[co("%b %d"),function(n){return 1!=n.getUTCDate()}],[co("%a %d"),function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],[co("%I %p"),function(n){return n.getUTCHours()}],[co("%I:%M"),function(n){return n.getUTCMinutes()}],[co(":%S"),function(n){return n.getUTCSeconds()}],[co(".%L"),function(n){return n.getUTCMilliseconds()}]],kl=ho(El);return Sl.year=Bc.year.utc,Bc.scale.utc=function(){return so(vo.scale.linear(),Sl,kl)},vo.text=vt(function(n){return n.responseText}),vo.json=function(n,t){return mt(n,"application/json",go,t)},vo.html=function(n,t){return mt(n,"text/html",po,t)},vo.xml=vt(function(n){return n.responseXML}),vo}();var UsersBar = function( id, options ) {
   var o = options || { };
   var config = {
      'width'           : o.width  || 200,
      'height'          : o.height || 400,
      'flip'               : o.flip == undefined ? false : o.flip,
      'caps'               : o.caps == undefined ? false : o.caps,

      'gradient'           : o.gradient == undefined ? true : o.gradient,
      'gradientMinOpacity' : o.gradientMinOpacity || 0.3,
      'gradientMaxOpacity' : o.gradientMaxOpacity || 0.8,

      'topUsers'           : o.topUsers || 5,
      'bottomUsers'        : o.bottomUsers || 5,

      'animationDelay'     : o.animationDelay || 2000,

      'userColor'          : o.userColor || '#FFF',
      'userHoverColor'     : o.userHoverColor || '#FFF',
      'userSelfColor'         : o.userSelfColor || '#F90',
      'userSelfHoverColor' : o.userSelfHoverColor || '#F90',
      'userBackColor'         : o.userBackColor || '#000',
      'userHoverBackColor' : o.userHoverBackColor || '#555',
      'userBackOpacity'    : o.userBackOpacity || 0,
      'userBackHoverOpacity'  : o.userBackHoverOpacity || 0.6,
      'lineColor'          : o.lineColor || '#FFF',
      'separatorColor'     : o.separatorColor || '#F90',
      'separatorOpacity'      : o.separatorOpacity || 0.4,
      'bulletColor'        : o.bulletColor || '#666',
      'bulletHoverColor'      : o.bulletHoverColor || '#FFF',
      'bulletSelfColor'    : o.bulletSelfColor || '#F90',
      'bulletSelfHoverColor'  : o.bulletSelfColor || '#F90',
      'backgroundColor'    : o.backgroundColor || '#000'
   };

   // Setup users
   var svg = d3.select(id).append("svg")
      .attr("width", config.width)
      .attr("height", config.height);

   // Configuration
   var vbarStyle        = "stroke:"+config.lineColor+";fill:none;stroke-width:1px",
      vbarCapStyle      = "stroke:"+config.lineColor+";fill:none;stroke-width:2px",
      vbarCapSize       = 10,
      vbarPadding       = 4,
      uframeStyle       = "fill:"+config.userBackColor+";stroke-width:0.5px;opacity:"+config.userBackOpacity,
      uframeDotStyle    = "stroke:"+config.backgroundColor+";fill:"+config.bulletColor+";stroke-width:2px",
      uframeStyleHover  = "fill:"+config.userHoverBackColor+";stroke-width:0.2px;opacity:"+config.userBackHoverOpacity,
      uframeDotStyleHover  = "stroke:"+config.backgroundColor+";fill:"+config.bulletHoverColor+";stroke-width:2px",
      uframePadding     = 4,
      uframeHeight      = 24,
      uframeArrHeight      = 10,
      uframeArrOffset      = 10;

   // Local vars        
   var minCredit = 0,
      maxCredit = 0,
      activeElement = null;

   /**
    Different icon:
    m 6.0523733,0.01538827 c -1.854275,0 -3.3392857,1.49897503 -3.3392857,3.33928573 0,1.8404322 1.4850107,3.3392856 3.3392857,3.3392856 1.854281,0 3.3582589,-1.4988534 3.3582589,-3.3392856 0,-1.8403107 -1.5039779,-3.33928573 -3.3582589,-3.33928573 z m -3.1875,5.95758943 c -1.727455,1.3512566 -2.88392861,3.7538729 -2.88392861,6.5078123 0,0 2.50814971,0.891741 6.03348221,0.891741 3.5253351,0 6.1093751,-0.891741 6.1093751,-0.891741 0,-2.7539394 -1.137502,-5.1565557 -2.8649553,-6.5078123 -0.7595614,0.9119891 -1.9212917,1.4799104 -3.2064734,1.4799104 -1.2851817,0 -2.4279825,-0.5679213 -3.1875,-1.4799104 z
    **/

   // Define the user icon
   var defs = svg.append("defs");
   defs.append("path")
      .attr("id", "ico-user")
      .attr("style", "stroke:none;fill:#999")
      .attr("d", "m 12.363198,11.707021 c 0,0.536933 -0.434011,0.970945 -0.970944,0.970945 l -9.7094455,0 c -0.535961,0 -0.97094412,-0.434012 -0.97094412,-0.970945 0,-1.9418892 1.87683502,-3.7536693 3.79542092,-4.4702269 C 3.3994378,6.5522788 2.6537526,5.3366558 2.6537526,3.9394666 l 0,-0.9709435 c 0,-2.14481613 1.7389612,-3.88377727 3.8837772,-3.88377727 2.144816,0 3.8837772,1.73896114 3.8837772,3.88377727 l 0,0.9709435 c 0,1.3971892 -0.7456862,2.6128122 -1.8525622,3.2973275 1.9176162,0.7165576 3.7944532,2.5283377 3.7944532,4.4702269 z")
   defs.append("path")
      .attr("id", "ico-user-me")
      .attr("style", "stroke:none;fill:#F90")
      .attr("d", "m 12.363198,11.707021 c 0,0.536933 -0.434011,0.970945 -0.970944,0.970945 l -9.7094455,0 c -0.535961,0 -0.97094412,-0.434012 -0.97094412,-0.970945 0,-1.9418892 1.87683502,-3.7536693 3.79542092,-4.4702269 C 3.3994378,6.5522788 2.6537526,5.3366558 2.6537526,3.9394666 l 0,-0.9709435 c 0,-2.14481613 1.7389612,-3.88377727 3.8837772,-3.88377727 2.144816,0 3.8837772,1.73896114 3.8837772,3.88377727 l 0,0.9709435 c 0,1.3971892 -0.7456862,2.6128122 -1.8525622,3.2973275 1.9176162,0.7165576 3.7944532,2.5283377 3.7944532,4.4702269 z");
   defs.append("path")
      .attr("id", "ico-crown")
      .attr("style", "stroke:none;fill:"+config.separatorColor+";opacity:"+config.separatorOpacity)
      .attr("d", "m 15.002682,4.7738008 -2.084199,1.8754026 0.175432,-1.9114577 c 0,0 -0.286826,-0.4310466 -0.661368,-0.081797 L 11.17008,6.2698178 9.525,3.6786949 c 0,0 -0.4531102,-0.4622585 -1.2178009,0 L 6.7035551,6.2041652 5.615983,4.655411 c 0,0 -0.2782161,-0.4396568 -0.6280042,0.027445 L 5.1026017,6.7670551 3.048,4.7738008 c 0,0 -0.635,-0.2566907 -0.9379703,0.3605509 L 3.437072,12.441695 h 10.957517 l 1.82697,-7.119534 c 0,0 -0.205029,-0.9411992 -1.218877,-0.5483602 z M 3.044233,3.1997542 C 3.044233,2.4420593 2.3629534,1.8307373 1.5207712,1.8307373 0.68289406,1.8301991 0,2.4420593 0,3.1997542 c 0,0.7560805 0.68289406,1.369017 1.5207712,1.369017 0.8427203,0 1.5234618,-0.6129365 1.5234618,-1.369017 z m 15.192644,-0.050047 c 0,0.7563844 -0.681113,1.3695551 -1.521309,1.3695551 -0.840196,0 -1.52131,-0.6131707 -1.52131,-1.3695551 0,-0.7563844 0.681114,-1.3695551 1.52131,-1.3695551 0.840196,0 1.521309,0.6131707 1.521309,1.3695551 z m -14.815411,9.8398094 10.991958,0 0,2.739111 -10.991958,0 z M 14.197631,3.4462202 c 0,0.4410509 -0.397296,0.7985932 -0.887386,0.7985932 -0.490089,0 -0.887385,-0.3575423 -0.887385,-0.7985932 0,-0.4410508 0.397296,-0.7985932 0.887385,-0.7985932 0.49009,0 0.887386,0.3575424 0.887386,0.7985932 z M 10.439292,1.3690169 c 0,0.7560872 -0.6813547,1.3690169 -1.5218477,1.3690169 -0.840493,0 -1.5218474,-0.6129297 -1.5218474,-1.3690169 C 7.3955969,0.61292976 8.0769513,0 8.9174443,0 9.7579373,0 10.439292,0.61292976 10.439292,1.3690169 z m -5.5766988,2.829517 c 0.4918559,0 0.8884619,-0.3573221 0.8884619,-0.7980551 0,-0.4418093 -0.396606,-0.7985932 -0.8884619,-0.7985932 -0.4891653,0 -0.8868475,0.3567839 -0.8868475,0.7985932 0,0.440733 0.3976822,0.7980551 0.8868475,0.7980551 z");
   defs.append("path")
      .attr("id", "ico-newbie")
      .attr("style", "stroke:none;fill:"+config.separatorColor+";opacity:"+config.separatorOpacity)
      .attr("d", "M 10.384,14.709 C 10.16,14.484 9.795,14.484 9.57,14.71 l -0.624,0.623 c -0.991,-0.306 -2.154,-0.039 -2.983,0.791 -1.162,1.161 -1.228,2.979 -0.147,4.06 1.081,1.08 2.898,1.015 4.06,-0.146 0.83,-0.829 1.097,-1.992 0.791,-2.983 l 0.624,-0.623 c 0.225,-0.226 0.225,-0.59 0,-0.815 l -0.907,-0.908 z m 8.97,-0.326 C 21.486,12.25 21.486,8.78 19.353,6.648 17.22,4.516 13.75,4.515 11.618,6.648 10.053,8.213 9.641,10.498 10.374,12.446 8.746,10.929 7.5,9.951 7.343,10.108 c -0.206,0.205 1.542,2.286 3.902,4.646 2.361,2.361 4.442,4.108 4.647,3.902 0.157,-0.157 -0.82,-1.403 -2.337,-3.03 1.948,0.733 4.233,0.322 5.799,-1.243 z m -4.689,0.367 c 0.354,-0.673 0.036,-1.763 -0.809,-2.606 -0.844,-0.845 -1.934,-1.162 -2.606,-0.809 -0.087,-1.06 0.271,-2.149 1.08,-2.958 1.459,-1.459 3.834,-1.459 5.293,0 1.458,1.458 1.459,3.833 0,5.292 -0.809,0.81 -1.898,1.168 -2.958,1.081 z");

   var g = defs.append("linearGradient")
            .attr("id", "line-gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%");
      g.append("stop")
         .attr("offset", "0%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:1");
      g.append("stop")
         .attr("offset", "33%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:0.1");
      g.append("stop")
         .attr("offset", "50%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:1");
      g.append("stop")
         .attr("offset", "66%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:0.1");
      g.append("stop")
         .attr("offset", "100%")
         .attr("style", "stop-color:" + config.lineColor + ";stop-opacity:1");
   var g = defs.append("linearGradient")
            .attr("id", "separator-gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");
      g.append("stop")
         .attr("offset", "10%")
         .attr("style", "stop-color:" + config.separatorColor + ";stop-opacity:0");
      g.append("stop")
         .attr("offset", "50%")
         .attr("style", "stop-color:" + config.separatorColor + ";stop-opacity:"+config.separatorOpacity);
      g.append("stop")
         .attr("offset", "90%")
         .attr("style", "stop-color:" + config.separatorColor + ";stop-opacity:0");

   // Design environment
   var vbarOffset  = ( config.flip ? (config.width - vbarCapSize) : 0 );
   svg.append("line")
      .attr("style", vbarStyle)
      .attr("x1", vbarOffset+vbarCapSize/2)
      .attr("y1", vbarPadding)
      .attr("x2", vbarOffset+vbarCapSize/2)
      .attr("y2", config.height-vbarPadding);
   if (config.caps ) {
      svg.append("line")
         .attr("style", vbarCapStyle)
         .attr("x1", vbarOffset)
         .attr("y1", config.height-vbarPadding)
         .attr("x2", vbarOffset+vbarCapSize)
         .attr("y2", config.height-vbarPadding);
      svg.append("line")
         .attr("style", vbarStyle)
         .attr("x1", vbarOffset+vbarCapSize/2)
         .attr("y1", vbarPadding)
         .attr("x2", vbarOffset+vbarCapSize/2)
         .attr("y2", config.height-vbarPadding);
   }

   // Format credits number
   function formatNumber(number) {
       number = number.toFixed(2) + '';
       x = number.split('.');
       x1 = x[0];
       x2 = x.length > 1 ? '.' + x[1] : '';
       var rgx = /(\d+)(\d{3})/;
       while (rgx.test(x1)) {
           x1 = x1.replace(rgx, '$1' + ',' + '$2');
       }
       return x1;
   }

   // Create the two sepearation groups
   var sepDataGroup = svg.append("g");
   sepDataGroup.append("rect")
      .attr("width", config.width - uframeArrOffset - vbarCapSize)
      .attr("height", 1)
      .attr("y", config.height/3*2 )
      .attr("fill", "url(#separator-gradient)");
   sepDataGroup.append("rect")
      .attr("width", config.width - uframeArrOffset - vbarCapSize)
      .attr("height", 1)
      .attr("y", config.height/3 )
      .attr("fill", "url(#separator-gradient)");
   var centerOffset = config.flip 
      ? config.width/2 - uframeArrOffset - vbarCapSize - 8 
      : config.width/2 + uframeArrOffset + vbarCapSize - 15;
   sepDataGroup.append("use")
      .attr("y", config.height/3*2 )
      .attr("x", centerOffset )
      .attr("xlink:href", "#ico-newbie");
   sepDataGroup.append("use")
      .attr("y", config.height/3 - 20 )
      .attr("x", centerOffset )
      .attr("xlink:href", "#ico-crown");


   // Function to map credit value to pixels
   function credit2pixel( credit ) {
      var a = (credit - minCredit) / (maxCredit - minCredit),
          b = (config.height - (3 * vbarPadding) - uframeHeight/2 );
      return (1-a) * b;
   }

   // Gradient opacity
   function gradientOpacity( credit ) {
      var a = (credit - minCredit) / (maxCredit - minCredit),
          b = (config.gradientMaxOpacity - config.gradientMinOpacity),
          c = Math.sin( a * Math.PI ) * b + config.gradientMinOpacity; 
      return c;
   }

   // Function to prepare path
   function updateUser( object, cy ) {

      // Perform transision/transform
      object
         .transition()
         .duration(config.animationDelay)
         .attr("transform", function(d, i) {
            return "translate(0," + credit2pixel(d.credit) + ")"
         });

      object
         .select("use")
         .attr("xlink:href", function(d, i) {
            return "#ico-user" + (d.me ? "-me" : "");
         });

      object
         .select("use")
         .transition()
         .duration(config.animationDelay)
         .style("opacity", function(d, i) {
            if (d.me) return 1;
            if (!config.gradient) return 1;
            return gradientOpacity( d.credit );
         });

      object
         .select("text.txt-name")
         .text(function(d, i) {
            return d.text;
         });

      object
         .select("text.txt-name")
         .transition()
         .duration(config.animationDelay)
         .style("opacity", function(d, i) {
            if (d.me) return 1;
            if (!config.gradient) return 1;
            return gradientOpacity( d.credit );
         })
         .style("fill", function(d, i) {
            return d.me ? config.userSelfColor : config.userColor;
         });


      object
         .select("text.txt-credit")
         .transition()
         .duration(config.animationDelay)
         .style("opacity", function(d, i) {
            if (d.me) return 1;
            if (!config.gradient) return 1;
            return gradientOpacity( d.credit );
         })
         .style("fill", function(d, i) {
            return d.me ? config.userSelfColor : config.userColor;
         })
         .text(function(d, i) {
            return "#" + formatNumber(d.credit);
         });

      object
         .select("circle")
         .style("fill", function(d, i) {
            return d.me ? config.bulletSelfColor : config.bulletColor;
         })

      // Return object
      return object;

   }
   function makeUser( where ) {
      var group = where.append("g"),
         eWidth = config.width - vbarCapSize - uframeArrOffset - uframePadding,
         eArrOfs = (uframeHeight - uframeArrHeight) / 2.0,
         w = config.width;

      // Bind events to bring to front on hover
      group.attr("class", "uframegroup")
          .style("cursor", "pointer");

      // Prepare the background
      group.append("path")
         .attr("class", "uframe")
         .attr("style", uframeStyle)
         .attr("d", 
            config.flip 

            // Flipped
            ? "M" + uframePadding + ",0L" + eWidth + ",0" +
               "L" + eWidth + "," + eArrOfs +
               "L" + (eWidth + uframeArrOffset) + "," + (eArrOfs + uframeArrHeight/2) +
               "L" + eWidth + "," + (uframeHeight - eArrOfs ) +
               "L" + eWidth + "," + uframeHeight +
            "L" + uframePadding + "," + uframeHeight + "Z"

            // Regular
            : "M" + (w-uframePadding) + ",0" +
               "L" + (w-eWidth) + ",0" +
               "L" + (w-eWidth) + "," + eArrOfs +
               "L" + (w-eWidth - uframeArrOffset) + "," + (eArrOfs + uframeArrHeight/2) +
               "L" + (w-eWidth) + "," + (uframeHeight - eArrOfs ) +
               "L" + (w-eWidth) + "," + uframeHeight +
            "L" + (w-uframePadding) + "," + uframeHeight + "Z"

         );

      // Prepare the bullet on the line
      group.append("circle")
         .attr("class", "upoint")
         .attr("style", uframeDotStyle)
         .attr("r", 4)
         .attr("cx", 
            config.flip 
              ? (w - vbarCapSize/2)
              : (vbarCapSize/2)
          )
         .attr("cy", uframeHeight/2);

      // Use the icon
      var offset = config.flip ? -20 : 0;
      group.append("use")
         .attr("x", offset + vbarCapSize + uframeArrOffset + uframePadding + 5)
         .attr("y", 5)
         .attr("xlink:href", "#ico-user");

      // Create text element
      group.append("text")
         .attr("class", "txt-name")
         .attr("x", offset + vbarCapSize + uframeArrOffset + uframePadding + 5 + 18)
         .attr("y", uframeHeight/2 + 3)
         .attr("fill", "#666")
         .style("font-size", "12px")
         .text("---");

      var postOffset = config.flip ? 0 : 15;
      group.append("text")
         .attr("class", "txt-credit")
         .attr("x", offset + eWidth + postOffset )
         .attr("y", uframeHeight/2 + 2)
         .attr("fill", "#666")
         .style("text-anchor", "end")
         .style("font-size", "10px")
         .text("---");
         

      // Change colors on hover/hout
      group.on("mouseover", function(d,i) { 
         var g = d3.select(this);
         //g.moveToFront(); 
         g.select("path").attr("style", uframeStyleHover);
         g.select("circle").attr("style", uframeDotStyleHover);
         g.select("circle").style("fill", d.me ? config.bulletSelfHoverColor : config.bulletHoverColor);

         if (config.gradient) {
            g.select("text").attr("old:opacity", g.select("text").style("opacity"));
            g.selectAll("text").style("opacity", 1);
            g.selectAll("use").style("opacity", 1);
         }
         activeElement = g;
      });
      group.on("mouseout", function(d,i) {
         var g = d3.select(this);
         g.select("path").attr("style", uframeStyle);
         g.select("circle").attr("style", uframeDotStyle);
         g.select("circle").style("fill", d.me ? config.bulletSelfColor : config.bulletColor);

         if (config.gradient) {
            g.selectAll("text").style("opacity", g.select("text").attr("old:opacity"));
            g.selectAll("use").style("opacity", g.select("text").attr("old:opacity"));
         }
         activeElement = null;
      });

      return group;
   }

   /**
    * Update data
    */
   this.update = function(data) {

      // Reset previous selection on updaate
      if (config.gradient && (activeElement != null)) {
         activeElement.selectAll("text").style("opacity", activeElement.select("text").attr("old:opacity"));
         activeElement.selectAll("use").style("opacity", activeElement.select("text").attr("old:opacity"));
         activeElement = null;
      }

      // Sort the users
      var sData = data.slice(0);
      sData.sort(function(a,b) { return b.credit - a.credit });

      // First, normalize the credits
      maxCredit = sData[0].credit;
      minCredit = sData[sData.length-1].credit;
      console.log(sData);

      // Then calculate the position of the separator lines
      var a=sData.length-config.bottomUsers, b=config.topUsers-1;
      var separatorPos = [
         credit2pixel( sData[a].credit ),
         credit2pixel( sData[b].credit ) + uframeHeight
      ];

      /* Do the D3 update-enter-exit sequence */

      // (1a) Update
      var p = updateUser(
         svg.selectAll("g.uframegroup")
         .data( sData )
       );
      // (1b) Enter
      updateUser( makeUser( p.enter() ) )
      // (1c) Exit
      p.exit().remove();

      // (2) Update the data to the separators
      sepDataGroup.selectAll("rect")
         .data(separatorPos)
         .transition()
         .duration(config.animationDelay)
         .attr("y", function(d) { return d; });
      sepDataGroup.selectAll("use")
         .data(separatorPos)
         .transition()
         .duration(config.animationDelay)
         .attr("y", function(d,i) { return d + ((i==1) ? -25 : 5); });

   }
};/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function($){"use strict";$(function(){$.support.transition=function(){var transitionEnd=function(){var name,el=document.createElement("bootstrap"),transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(name in transEndEventNames)if(void 0!==el.style[name])return transEndEventNames[name]}();return transitionEnd&&{end:transitionEnd}}()})}(window.jQuery),!function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on("click",dismiss,this.close)};Alert.prototype.close=function(e){function removeElement(){$parent.trigger("closed").remove()}var $parent,$this=$(this),selector=$this.attr("data-target");selector||(selector=$this.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")),$parent=$(selector),e&&e.preventDefault(),$parent.length||($parent=$this.hasClass("alert")?$this:$this.parent()),$parent.trigger(e=$.Event("close")),e.isDefaultPrevented()||($parent.removeClass("in"),$.support.transition&&$parent.hasClass("fade")?$parent.on($.support.transition.end,removeElement):removeElement())};var old=$.fn.alert;$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data("alert");data||$this.data("alert",data=new Alert(this)),"string"==typeof option&&data[option].call($this)})},$.fn.alert.Constructor=Alert,$.fn.alert.noConflict=function(){return $.fn.alert=old,this},$(document).on("click.alert.data-api",dismiss,Alert.prototype.close)}(window.jQuery),!function($){"use strict";var Button=function(element,options){this.$element=$(element),this.options=$.extend({},$.fn.button.defaults,options)};Button.prototype.setState=function(state){var d="disabled",$el=this.$element,data=$el.data(),val=$el.is("input")?"val":"html";state+="Text",data.resetText||$el.data("resetText",$el[val]()),$el[val](data[state]||this.options[state]),setTimeout(function(){"loadingText"==state?$el.addClass(d).attr(d,d):$el.removeClass(d).removeAttr(d)},0)},Button.prototype.toggle=function(){var $parent=this.$element.closest('[data-toggle="buttons-radio"]');$parent&&$parent.find(".active").removeClass("active"),this.$element.toggleClass("active")};var old=$.fn.button;$.fn.button=function(option){return this.each(function(){var $this=$(this),data=$this.data("button"),options="object"==typeof option&&option;data||$this.data("button",data=new Button(this,options)),"toggle"==option?data.toggle():option&&data.setState(option)})},$.fn.button.defaults={loadingText:"loading..."},$.fn.button.Constructor=Button,$.fn.button.noConflict=function(){return $.fn.button=old,this},$(document).on("click.button.data-api","[data-toggle^=button]",function(e){var $btn=$(e.target);$btn.hasClass("btn")||($btn=$btn.closest(".btn")),$btn.button("toggle")})}(window.jQuery),!function($){"use strict";var Carousel=function(element,options){this.$element=$(element),this.options=options,"hover"==this.options.pause&&this.$element.on("mouseenter",$.proxy(this.pause,this)).on("mouseleave",$.proxy(this.cycle,this))};Carousel.prototype={cycle:function(e){return e||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},to:function(pos){var $active=this.$element.find(".item.active"),children=$active.parent().children(),activePos=children.index($active),that=this;if(!(pos>children.length-1||0>pos))return this.sliding?this.$element.one("slid",function(){that.to(pos)}):activePos==pos?this.pause().cycle():this.slide(pos>activePos?"next":"prev",$(children[pos]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition.end&&(this.$element.trigger($.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(type,next){var e,$active=this.$element.find(".item.active"),$next=next||$active[type](),isCycling=this.interval,direction="next"==type?"left":"right",fallback="next"==type?"first":"last",that=this;if(this.sliding=!0,isCycling&&this.pause(),$next=$next.length?$next:this.$element.find(".item")[fallback](),e=$.Event("slide",{relatedTarget:$next[0]}),!$next.hasClass("active")){if($.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(e),e.isDefaultPrevented())return;$next.addClass(type),$next[0].offsetWidth,$active.addClass(direction),$next.addClass(direction),this.$element.one($.support.transition.end,function(){$next.removeClass([type,direction].join(" ")).addClass("active"),$active.removeClass(["active",direction].join(" ")),that.sliding=!1,setTimeout(function(){that.$element.trigger("slid")},0)})}else{if(this.$element.trigger(e),e.isDefaultPrevented())return;$active.removeClass("active"),$next.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return isCycling&&this.cycle(),this}}};var old=$.fn.carousel;$.fn.carousel=function(option){return this.each(function(){var $this=$(this),data=$this.data("carousel"),options=$.extend({},$.fn.carousel.defaults,"object"==typeof option&&option),action="string"==typeof option?option:options.slide;data||$this.data("carousel",data=new Carousel(this,options)),"number"==typeof option?data.to(option):action?data[action]():options.interval&&data.cycle()})},$.fn.carousel.defaults={interval:5e3,pause:"hover"},$.fn.carousel.Constructor=Carousel,$.fn.carousel.noConflict=function(){return $.fn.carousel=old,this},$(document).on("click.carousel.data-api","[data-slide]",function(e){var href,$this=$(this),$target=$($this.attr("data-target")||(href=$this.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,"")),options=$.extend({},$target.data(),$this.data());$target.carousel(options),e.preventDefault()})}(window.jQuery),!function($){"use strict";var Collapse=function(element,options){this.$element=$(element),this.options=$.extend({},$.fn.collapse.defaults,options),this.options.parent&&(this.$parent=$(this.options.parent)),this.options.toggle&&this.toggle()};Collapse.prototype={constructor:Collapse,dimension:function(){var hasWidth=this.$element.hasClass("width");return hasWidth?"width":"height"},show:function(){var dimension,scroll,actives,hasData;if(!this.transitioning){if(dimension=this.dimension(),scroll=$.camelCase(["scroll",dimension].join("-")),actives=this.$parent&&this.$parent.find("> .accordion-group > .in"),actives&&actives.length){if(hasData=actives.data("collapse"),hasData&&hasData.transitioning)return;actives.collapse("hide"),hasData||actives.data("collapse",null)}this.$element[dimension](0),this.transition("addClass",$.Event("show"),"shown"),$.support.transition&&this.$element[dimension](this.$element[0][scroll])}},hide:function(){var dimension;this.transitioning||(dimension=this.dimension(),this.reset(this.$element[dimension]()),this.transition("removeClass",$.Event("hide"),"hidden"),this.$element[dimension](0))},reset:function(size){var dimension=this.dimension();return this.$element.removeClass("collapse")[dimension](size||"auto")[0].offsetWidth,this.$element[null!==size?"addClass":"removeClass"]("collapse"),this},transition:function(method,startEvent,completeEvent){var that=this,complete=function(){"show"==startEvent.type&&that.reset(),that.transitioning=0,that.$element.trigger(completeEvent)};this.$element.trigger(startEvent),startEvent.isDefaultPrevented()||(this.transitioning=1,this.$element[method]("in"),$.support.transition&&this.$element.hasClass("collapse")?this.$element.one($.support.transition.end,complete):complete())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var old=$.fn.collapse;$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data("collapse"),options="object"==typeof option&&option;data||$this.data("collapse",data=new Collapse(this,options)),"string"==typeof option&&data[option]()})},$.fn.collapse.defaults={toggle:!0},$.fn.collapse.Constructor=Collapse,$.fn.collapse.noConflict=function(){return $.fn.collapse=old,this},$(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var href,$this=$(this),target=$this.attr("data-target")||e.preventDefault()||(href=$this.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""),option=$(target).data("collapse")?"toggle":$this.data();$this[$(target).hasClass("in")?"addClass":"removeClass"]("collapsed"),$(target).collapse(option)})}(window.jQuery),!function($){"use strict";function clearMenus(){$(toggle).each(function(){getParent($(this)).removeClass("open")})}function getParent($this){var $parent,selector=$this.attr("data-target");return selector||(selector=$this.attr("href"),selector=selector&&/#/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,"")),$parent=$(selector),$parent.length||($parent=$this.parent()),$parent}var toggle="[data-toggle=dropdown]",Dropdown=function(element){var $el=$(element).on("click.dropdown.data-api",this.toggle);$("html").on("click.dropdown.data-api",function(){$el.parent().removeClass("open")})};Dropdown.prototype={constructor:Dropdown,toggle:function(){var $parent,isActive,$this=$(this);if(!$this.is(".disabled, :disabled"))return $parent=getParent($this),isActive=$parent.hasClass("open"),clearMenus(),isActive||$parent.toggleClass("open"),$this.focus(),!1},keydown:function(e){var $this,$items,$parent,isActive,index;if(/(38|40|27)/.test(e.keyCode)&&($this=$(this),e.preventDefault(),e.stopPropagation(),!$this.is(".disabled, :disabled"))){if($parent=getParent($this),isActive=$parent.hasClass("open"),!isActive||isActive&&27==e.keyCode)return $this.click();$items=$("[role=menu] li:not(.divider):visible a",$parent),$items.length&&(index=$items.index($items.filter(":focus")),38==e.keyCode&&index>0&&index--,40==e.keyCode&&$items.length-1>index&&index++,~index||(index=0),$items.eq(index).focus())}}};var old=$.fn.dropdown;$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data("dropdown");data||$this.data("dropdown",data=new Dropdown(this)),"string"==typeof option&&data[option].call($this)})},$.fn.dropdown.Constructor=Dropdown,$.fn.dropdown.noConflict=function(){return $.fn.dropdown=old,this},$(document).on("click.dropdown.data-api touchstart.dropdown.data-api",clearMenus).on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("touchstart.dropdown.data-api",".dropdown-menu",function(e){e.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",toggle,Dropdown.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",toggle+", [role=menu]",Dropdown.prototype.keydown)}(window.jQuery),!function($){"use strict";var Modal=function(element,options){this.options=options,this.$element=$(element).delegate('[data-dismiss="modal"]',"click.dismiss.modal",$.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};Modal.prototype={constructor:Modal,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var that=this,e=$.Event("show");this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass("fade");that.$element.parent().length||that.$element.appendTo(document.body),that.$element.show(),transition&&that.$element[0].offsetWidth,that.$element.addClass("in").attr("aria-hidden",!1),that.enforceFocus(),transition?that.$element.one($.support.transition.end,function(){that.$element.focus().trigger("shown")}):that.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=$.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),$(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),$.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var that=this;$(document).on("focusin.modal",function(e){that.$element[0]===e.target||that.$element.has(e.target).length||that.$element.focus()})},escape:function(){var that=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){27==e.which&&that.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var that=this,timeout=setTimeout(function(){that.$element.off($.support.transition.end),that.hideModal()},500);this.$element.one($.support.transition.end,function(){clearTimeout(timeout),that.hideModal()})},hideModal:function(){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(callback){var animate=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body),this.$backdrop.click("static"==this.options.backdrop?$.proxy(this.$element[0].focus,this.$element[0]):$.proxy(this.hide,this)),doAnimate&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),doAnimate?this.$backdrop.one($.support.transition.end,callback):callback()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one($.support.transition.end,$.proxy(this.removeBackdrop,this)):this.removeBackdrop()):callback&&callback()}};var old=$.fn.modal;$.fn.modal=function(option){return this.each(function(){var $this=$(this),data=$this.data("modal"),options=$.extend({},$.fn.modal.defaults,$this.data(),"object"==typeof option&&option);data||$this.data("modal",data=new Modal(this,options)),"string"==typeof option?data[option]():options.show&&data.show()})},$.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},$.fn.modal.Constructor=Modal,$.fn.modal.noConflict=function(){return $.fn.modal=old,this},$(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr("href"),$target=$($this.attr("data-target")||href&&href.replace(/.*(?=#[^\s]+$)/,"")),option=$target.data("modal")?"toggle":$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());e.preventDefault(),$target.modal(option).one("hide",function(){$this.focus()})})}(window.jQuery),!function($){"use strict";var Tooltip=function(element,options){this.init("tooltip",element,options)};Tooltip.prototype={constructor:Tooltip,init:function(type,element,options){var eventIn,eventOut;this.type=type,this.$element=$(element),this.options=this.getOptions(options),this.enabled=!0,"click"==this.options.trigger?this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this)):"manual"!=this.options.trigger&&(eventIn="hover"==this.options.trigger?"mouseenter":"focus",eventOut="hover"==this.options.trigger?"mouseleave":"blur",this.$element.on(eventIn+"."+this.type,this.options.selector,$.proxy(this.enter,this)),this.$element.on(eventOut+"."+this.type,this.options.selector,$.proxy(this.leave,this))),this.options.selector?this._options=$.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(options){return options=$.extend({},$.fn[this.type].defaults,options,this.$element.data()),options.delay&&"number"==typeof options.delay&&(options.delay={show:options.delay,hide:options.delay}),options},enter:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type);return self.options.delay&&self.options.delay.show?(clearTimeout(this.timeout),self.hoverState="in",this.timeout=setTimeout(function(){"in"==self.hoverState&&self.show()},self.options.delay.show),void 0):self.show()},leave:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),self.options.delay&&self.options.delay.hide?(self.hoverState="out",this.timeout=setTimeout(function(){"out"==self.hoverState&&self.hide()},self.options.delay.hide),void 0):self.hide()},show:function(){var $tip,inside,pos,actualWidth,actualHeight,placement,tp;if(this.hasContent()&&this.enabled){switch($tip=this.tip(),this.setContent(),this.options.animation&&$tip.addClass("fade"),placement="function"==typeof this.options.placement?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement,inside=/in/.test(placement),$tip.detach().css({top:0,left:0,display:"block"}).insertAfter(this.$element),pos=this.getPosition(inside),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight,inside?placement.split(" ")[1]:placement){case"bottom":tp={top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2};break;case"top":tp={top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2};break;case"left":tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth};break;case"right":tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}}$tip.offset(tp).addClass(placement).addClass("in")}},setContent:function(){var $tip=this.tip(),title=this.getTitle();$tip.find(".tooltip-inner")[this.options.html?"html":"text"](title),$tip.removeClass("fade in top bottom left right")},hide:function(){function removeWithAnimation(){var timeout=setTimeout(function(){$tip.off($.support.transition.end).detach()},500);$tip.one($.support.transition.end,function(){clearTimeout(timeout),$tip.detach()})}var $tip=this.tip();return $tip.removeClass("in"),$.support.transition&&this.$tip.hasClass("fade")?removeWithAnimation():$tip.detach(),this},fixTitle:function(){var $e=this.$element;($e.attr("title")||"string"!=typeof $e.attr("data-original-title"))&&$e.attr("data-original-title",$e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(inside){return $.extend({},inside?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var title,$e=this.$element,o=this.options;return title=$e.attr("data-original-title")||("function"==typeof o.title?o.title.call($e[0]):o.title)},tip:function(){return this.$tip=this.$tip||$(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type);self[self.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var old=$.fn.tooltip;$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data("tooltip"),options="object"==typeof option&&option;data||$this.data("tooltip",data=new Tooltip(this,options)),"string"==typeof option&&data[option]()})},$.fn.tooltip.Constructor=Tooltip,$.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!1},$.fn.tooltip.noConflict=function(){return $.fn.tooltip=old,this}}(window.jQuery),!function($){"use strict";var Popover=function(element,options){this.init("popover",element,options)};Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype,{constructor:Popover,setContent:function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent();$tip.find(".popover-title")[this.options.html?"html":"text"](title),$tip.find(".popover-content")[this.options.html?"html":"text"](content),$tip.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var content,$e=this.$element,o=this.options;return content=$e.attr("data-content")||("function"==typeof o.content?o.content.call($e[0]):o.content)},tip:function(){return this.$tip||(this.$tip=$(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var old=$.fn.popover;$.fn.popover=function(option){return this.each(function(){var $this=$(this),data=$this.data("popover"),options="object"==typeof option&&option;data||$this.data("popover",data=new Popover(this,options)),"string"==typeof option&&data[option]()})},$.fn.popover.Constructor=Popover,$.fn.popover.defaults=$.extend({},$.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'}),$.fn.popover.noConflict=function(){return $.fn.popover=old,this}}(window.jQuery),!function($){"use strict";function ScrollSpy(element,options){var href,process=$.proxy(this.process,this),$element=$(element).is("body")?$(window):$(element);this.options=$.extend({},$.fn.scrollspy.defaults,options),this.$scrollElement=$element.on("scroll.scroll-spy.data-api",process),this.selector=(this.options.target||(href=$(element).attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=$("body"),this.refresh(),this.process()}ScrollSpy.prototype={constructor:ScrollSpy,refresh:function(){var $targets,self=this;this.offsets=$([]),this.targets=$([]),$targets=this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data("target")||$el.attr("href"),$href=/^#\w/.test(href)&&$(href);return $href&&$href.length&&[[$href.position().top+self.$scrollElement.scrollTop(),href]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0]),self.targets.push(this[1])})},process:function(){var i,scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget;if(scrollTop>=maxScroll)return activeTarget!=(i=targets.last()[0])&&this.activate(i);for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||offsets[i+1]>=scrollTop)&&this.activate(targets[i])},activate:function(target){var active,selector;this.activeTarget=target,$(this.selector).parent(".active").removeClass("active"),selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]',active=$(selector).parent("li").addClass("active"),active.parent(".dropdown-menu").length&&(active=active.closest("li.dropdown").addClass("active")),active.trigger("activate")}};var old=$.fn.scrollspy;$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data("scrollspy"),options="object"==typeof option&&option;data||$this.data("scrollspy",data=new ScrollSpy(this,options)),"string"==typeof option&&data[option]()})},$.fn.scrollspy.Constructor=ScrollSpy,$.fn.scrollspy.defaults={offset:10},$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=old,this},$(window).on("load",function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);$spy.scrollspy($spy.data())})})}(window.jQuery),!function($){"use strict";var Tab=function(element){this.element=$(element)};Tab.prototype={constructor:Tab,show:function(){var previous,$target,e,$this=this.element,$ul=$this.closest("ul:not(.dropdown-menu)"),selector=$this.attr("data-target");selector||(selector=$this.attr("href"),selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")),$this.parent("li").hasClass("active")||(previous=$ul.find(".active:last a")[0],e=$.Event("show",{relatedTarget:previous}),$this.trigger(e),e.isDefaultPrevented()||($target=$(selector),this.activate($this.parent("li"),$ul),this.activate($target,$target.parent(),function(){$this.trigger({type:"shown",relatedTarget:previous})})))},activate:function(element,container,callback){function next(){$active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),element.addClass("active"),transition?(element[0].offsetWidth,element.addClass("in")):element.removeClass("fade"),element.parent(".dropdown-menu")&&element.closest("li.dropdown").addClass("active"),callback&&callback()}var $active=container.find("> .active"),transition=callback&&$.support.transition&&$active.hasClass("fade");transition?$active.one($.support.transition.end,next):next(),$active.removeClass("in")}};var old=$.fn.tab;$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data("tab");data||$this.data("tab",data=new Tab(this)),"string"==typeof option&&data[option]()})},$.fn.tab.Constructor=Tab,$.fn.tab.noConflict=function(){return $.fn.tab=old,this},$(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),$(this).tab("show")})}(window.jQuery),!function($){"use strict";var Typeahead=function(element,options){this.$element=$(element),this.options=$.extend({},$.fn.typeahead.defaults,options),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=$(this.options.menu),this.shown=!1,this.listen()};Typeahead.prototype={constructor:Typeahead,select:function(){var val=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(val)).change(),this.hide()},updater:function(item){return item},show:function(){var pos=$.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:pos.top+pos.height,left:pos.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var items;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(items=$.isFunction(this.source)?this.source(this.query,$.proxy(this.process,this)):this.source,items?this.process(items):this)},process:function(items){var that=this;return items=$.grep(items,function(item){return that.matcher(item)}),items=this.sorter(items),items.length?this.render(items.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(item){return~item.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(items){for(var item,beginswith=[],caseSensitive=[],caseInsensitive=[];item=items.shift();)item.toLowerCase().indexOf(this.query.toLowerCase())?~item.indexOf(this.query)?caseSensitive.push(item):caseInsensitive.push(item):beginswith.push(item);return beginswith.concat(caseSensitive,caseInsensitive)},highlighter:function(item){var query=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return item.replace(RegExp("("+query+")","ig"),function($1,match){return"<strong>"+match+"</strong>"})},render:function(items){var that=this;return items=$(items).map(function(i,item){return i=$(that.options.item).attr("data-value",item),i.find("a").html(that.highlighter(item)),i[0]}),items.first().addClass("active"),this.$menu.html(items),this},next:function(){var active=this.$menu.find(".active").removeClass("active"),next=active.next();next.length||(next=$(this.$menu.find("li")[0])),next.addClass("active")},prev:function(){var active=this.$menu.find(".active").removeClass("active"),prev=active.prev();prev.length||(prev=this.$menu.find("li").last()),prev.addClass("active")},listen:function(){this.$element.on("blur",$.proxy(this.blur,this)).on("keypress",$.proxy(this.keypress,this)).on("keyup",$.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",$.proxy(this.keydown,this)),this.$menu.on("click",$.proxy(this.click,this)).on("mouseenter","li",$.proxy(this.mouseenter,this))},eventSupported:function(eventName){var isSupported=eventName in this.$element;return isSupported||(this.$element.setAttribute(eventName,"return;"),isSupported="function"==typeof this.$element[eventName]),isSupported},move:function(e){if(this.shown){switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~$.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(e){this.suppressKeyPressRepeat||this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},blur:function(){var that=this;setTimeout(function(){that.hide()},150)},click:function(e){e.stopPropagation(),e.preventDefault(),this.select()},mouseenter:function(e){this.$menu.find(".active").removeClass("active"),$(e.currentTarget).addClass("active")}};var old=$.fn.typeahead;$.fn.typeahead=function(option){return this.each(function(){var $this=$(this),data=$this.data("typeahead"),options="object"==typeof option&&option;data||$this.data("typeahead",data=new Typeahead(this,options)),"string"==typeof option&&data[option]()})},$.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},$.fn.typeahead.Constructor=Typeahead,$.fn.typeahead.noConflict=function(){return $.fn.typeahead=old,this},$(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(e){var $this=$(this);$this.data("typeahead")||(e.preventDefault(),$this.typeahead($this.data()))})}(window.jQuery),!function($){"use strict";var Affix=function(element,options){this.options=$.extend({},$.fn.affix.defaults,options),this.$window=$(window).on("scroll.affix.data-api",$.proxy(this.checkPosition,this)).on("click.affix.data-api",$.proxy(function(){setTimeout($.proxy(this.checkPosition,this),1)},this)),this.$element=$(element),this.checkPosition()};Affix.prototype.checkPosition=function(){if(this.$element.is(":visible")){var affix,scrollHeight=$(document).height(),scrollTop=this.$window.scrollTop(),position=this.$element.offset(),offset=this.options.offset,offsetBottom=offset.bottom,offsetTop=offset.top,reset="affix affix-top affix-bottom";"object"!=typeof offset&&(offsetBottom=offsetTop=offset),"function"==typeof offsetTop&&(offsetTop=offset.top()),"function"==typeof offsetBottom&&(offsetBottom=offset.bottom()),affix=null!=this.unpin&&scrollTop+this.unpin<=position.top?!1:null!=offsetBottom&&position.top+this.$element.height()>=scrollHeight-offsetBottom?"bottom":null!=offsetTop&&offsetTop>=scrollTop?"top":!1,this.affixed!==affix&&(this.affixed=affix,this.unpin="bottom"==affix?position.top-scrollTop:null,this.$element.removeClass(reset).addClass("affix"+(affix?"-"+affix:"")))}};var old=$.fn.affix;$.fn.affix=function(option){return this.each(function(){var $this=$(this),data=$this.data("affix"),options="object"==typeof option&&option;data||$this.data("affix",data=new Affix(this,options)),"string"==typeof option&&data[option]()})},$.fn.affix.Constructor=Affix,$.fn.affix.defaults={offset:0},$.fn.affix.noConflict=function(){return $.fn.affix=old,this},$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data();data.offset=data.offset||{},data.offsetBottom&&(data.offset.bottom=data.offsetBottom),data.offsetTop&&(data.offset.top=data.offsetTop),$spy.affix(data)})})}(window.jQuery);
/**
 * =================================================================
 *  Local Functions for the UI animation
 * =================================================================
 */

/**
 * Display a rotating progress messages
 */
var rotatingProgressTimer = 0,
    rotatingActive = false,
    rotatingMessages = [];
function __resetNestProgress() {
   clearTimeout(rotatingProgressTimer);
   rotatingActive = false;
   rotatingMessages = [];
   rotatingProgressTimer = 0;
}
function __showNestProgress() {

   // Make sure we don't have any left-over
   // timer running...
   if (!rotatingActive) return;
   if (rotatingMessages.length == 0) return;

   // Display message
   var msg = rotatingMessages.shift();
   progressMessage(msg, true, true);

   // Reset queue when we are done
   if (rotatingMessages.length == 0) {
      __resetNestProgress();
   } else {
      // Otherwise schedule next tick
      rotatingProgressTimer = setTimeout(__showNestProgress, Math.random() * 5000 + 2000 );
   }
}

/**
 * Setup rotating messages
 */
function progressRotatingMessages( messages ) {

   // Set messages
   rotatingMessages = messages;

   // Start rotation if not active
   if (!rotatingActive) {
      rotatingActive = true;
      __showNestProgress();
   }

}

/**
 * Cancel message rotation
 */
function progressCancelRotating() {
   if (!rotatingActive) return;
   __resetNestProgress();
}

/**
 * Roll-in an animating text entry on the progress bar
 */
var progressCurrentText = "#loading-text-1",
    lastProgressText = "";
function progressAnimateText( message ) {

   // Do nothing if the last text is excactly the same
   // with the new one
   if (lastProgressText == message) return;
   lastProgressText = message;

   // Fade out the past
   $(progressCurrentText).stop(true, true);
   $(progressCurrentText).animate({
      'opacity': 0
   }, 200);

   // Switch between past and current text messages
   if (progressCurrentText == "#loading-text-1") {
      progressCurrentText = "#loading-text-2";
   } else {
      progressCurrentText = "#loading-text-1";
   }

   // Scroll-in the current
   $(progressCurrentText).stop(true, true);
   $(progressCurrentText).html( message );
   $(progressCurrentText).css({
      'opacity': 0,
      'top': 25
   });
   $(progressCurrentText).animate({
      'opacity': 1,
      'top': 0
   }, 200, 'easeOutExpo');
   
};

/**
 * Update progress bar
 */
function progressUpdate( percent, text ) {
   percent = Math.round(percent);
   progressCancelRotating();
   $("#loading").fadeIn(500);
   $("#loading").removeClass('error');
   $("#progressbar-value").css({ 'width': percent + '%' });
   progressAnimateText(text);
   $("#loading-percent").html( percent + "%" );
}

/**
 * Display an error on the progress bar without progress indicator
 */
function progressError( text ) {
   progressCancelRotating();
   $("#loading").fadeIn(500);
   $("#loading").addClass('error');
   $("#progressbar-value").css({ 'width': '100%' });
   progressAnimateText(text);
   $("#loading-percent").html("");
}

/**
 * Display a message on the progress bar without progress indicator
 */
function progressMessage( text, pending, preserveRotatingMessages ) {
   if (!preserveRotatingMessages) progressCancelRotating();
   $("#loading").fadeIn(500);
   $("#loading").removeClass('error');
   $("#progressbar-value").css({ 'width': '100%' });
   progressAnimateText(text);
   if (!pending) {
      $("#loading-percent").html("");
   } else {
      $("#loading-percent").html("<img src=\"theme/img/ajax-dots.gif\" />");
   }
}

function showLaunchControls() {
   $("#launch-controls").fadeIn(500);
}

function hideLaunchControls() {
   $("#launch-controls").fadeOut(500, function() {
      $("#launch-controls").hide();
   });
}

function showProgress() {
   $("#loading").fadeIn(500);
}

function hideProgress() {
   progressCancelRotating();
   $("#loading").fadeOut(500);
}

function showDashboard() {
   $("#upper-controls").fadeIn(500);
   $("#lower-controls").fadeIn(500);
}

function hideDashboard() {
   $("#upper-controls").fadeOut(500, function() {
      $("#upper-controls").hide();
   });
   $("#lower-controls").fadeOut(500, function() {
      $("#lower-controls").hide();
   });
}

function aceleratorStop() {
   v_session.hibernate();
   hideDashboard();
   setTimeout(function() {
      progressMessage("Ramping-down the accelerator", true);
   }, 500);
}

function aceleratorCleanup() {
   v_session.close();
   hideDashboard();
   setTimeout(function() {
      progressMessage("Dismantling the accelerator", true);
   }, 500);
}

function acceleratorStart() {

   var boincInfo = boincGetInfo();
   if (!boincInfo) {
      v_session.start( localBoincInfo );
   } else {

      // Prepare BOINC string
      var boincStr = "BOINC_USERNAME=" + boincInfo.name + "\n" + 
                     "BOINC_AUTHENTICATOR=" + boincInfo.authenticator + "\n" + 
                     "BOINC_USERID=" + boincInfo.id + "\n";
      console.log("Starting with BOINC_Config", boincStr);
      v_session.start({
         'boinc_config': boincStr
      });
      v_session.setProperty("/boinc/name", boincInfo.name);
      v_session.setProperty("/boinc/id", boincInfo.id);
      v_session.setProperty("/boinc/auth", boincInfo.authenticator);

      // You cannot disconnect now
      $("#boinc-logout").hide();

   }

   hideLaunchControls();
   progressMessage("Ramping-up the accelerator", true);
}

function acceleratorRDP( href ) {
   v_session.openRDPWindow();
}

function acceleratorOpenRDP() {
   var resolution = v_session.__session.resolution,
       resParts = resolution.split("x");
   var rdpObjectReference = window.open(
      "http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#" + v_session.rdpURL + "," + resParts[0] + "," + resParts[1] , "cernvmRDP");
   window.w = rdpObjectReference;
}

function acceleratorSetRDPURL( a ) {
   var resolution = v_session.__session.resolution,
       resParts = resolution.split("x");
   a.href = "http://cernvm.cern.ch/releases/webapi/webrdp/webclient.html#" + v_session.rdpURL + "," + resParts[0] + "," + resParts[1];
}

function acceleratorLogs() {
   var windowObjectReference = window.open(v_session.apiURL + "/logs" , "cernvmLogs");
}

/**
 * =================================================================
 *  BOINC-Specific functions
 * =================================================================
 */


var localBoincInfo = null;
function boincGetInfo() {
   if (localBoincInfo != null) return localBoincInfo;
   if (!localStorage.getItem("boinc-id")) {
      return false;
   } else {
      return localBoincInfo = {
         id: localStorage.getItem("boinc-id"),
         name: localStorage.getItem("boinc-name"),
         authenticator: localStorage.getItem("boinc-auth")
      };
   }
}

function boincLogin() {
   $("#boinc-error-msg").hide();
   $("#boinc-login-form").fadeIn();
}

function boincLogout() {
   localBoincInfo = null;
   localStorage.removeItem("boinc-id");
   localStorage.removeItem("boinc-name");
   localStorage.removeItem("boinc-auth");
   boincUpdateStatus( true );
}

function boincUpdateStatus( fade ) {
   var bInfo = boincGetInfo();
   if (!bInfo) {
      if (!fade) {
         $("#boinc-login").show();
         $("#boinc-status").hide();
      } else {
         $("#boinc-status").fadeOut(250, function() {
            $("#boinc-login").fadeIn(250);
         });
      }
   } else {
      $("#boinc-name").html(bInfo.name);
      if (!fade) {
         $("#boinc-login").hide();
         $("#boinc-status").show();
      } else {
         $("#boinc-login").fadeOut(250, function() {
            $("#boinc-status").fadeIn(250);
         });
      }
   }
}

function boincDoLogin() {
   var uEmail = $("#boinc-login-email").val(),
       uPassword = $("#boinc-login-password").val(),
       uRemember = $("#boinc-login-remember").prop("checked");

   $("#boinc-error-msg").hide();
   $("#boinc-login-form input").prop("disabled", true);
   $("#boinc-login-form button").prop("disabled", true);
   $("#boinc-login-submit").html("Loading...");

   var arg_email = escape(uEmail),
       arg_password = md5( uPassword + arg_email.toLowerCase() );

   var boincBaseURL = "http://lhcathome2.cern.ch/test4theory";

   // =============================================================
   // Validate account and get BOINC authenticator
   var jqxhr = $.ajax( {
      url: boincBaseURL+"/lookup_account.php?email_addr="+arg_email+"&passwd_hash="+arg_password+"&get_opaque_auth=1",
      dataType: 'xml'
   })
   // =============================================================
       .done(function( msg ) {
         // Successful response
         if (msg.firstChild.tagName == "error") {
            $("#boinc-error-msg").html( "Login error: " + msg.getElementsByTagName("error_msg")[0].textContent );
            $("#boinc-error-msg").fadeIn();
         } else {

            // We got the authenticator
            var authenticator = msg.getElementsByTagName("authenticator")[0].textContent;
            if (!authenticator) {
               $("#boinc-error-msg").html( "Unable to identify the authenticator" );
               $("#boinc-error-msg").fadeIn();
            }

            // =============================================================
            // Now try to get more information about the user
            $.ajax({
               url: boincBaseURL+"/am_get_info.php?account_key="+authenticator,
               dataType: 'xml'
            })
            // =============================================================
               .done(function( msg ) {

                  // Handle response
                  if (msg.firstChild.tagName == "error") {
                     $("#boinc-error-msg").html( "User info error: " + msg.getElementsByTagName("error_msg")[0].textContent );
                     $("#boinc-error-msg").fadeIn();
                  } else {

                     // Populate local info
                     localBoincInfo = {

                        'id'           : msg.getElementsByTagName('id')[0].textContent,
                        'name'         : msg.getElementsByTagName('name')[0].textContent,
                        'authenticator': authenticator

                     };

                     // If user clicked remember me, store authenticator in local store
                     // otherwise, clean previous traces.
                     if (uRemember) {
                        localStorage.setItem("boinc-id", localBoincInfo.id);
                        localStorage.setItem("boinc-name", localBoincInfo.name);
                        localStorage.setItem("boinc-auth", localBoincInfo.authenticator);
                     } else {
                        localStorage.removeItem("boinc-id");
                        localStorage.removeItem("boinc-name");
                        localStorage.removeItem("boinc-auth");
                     }

                     // Hide window and upate status
                     $("#boinc-login-form").fadeOut();
                     boincUpdateStatus(true);

                  }

               }).fail(function( msg ) {
                  // I/O Error
                  $("#boinc-error-msg").html("Connunication error: " + msg);
                  $("#boinc-error-msg").fadeIn();
               });

         }
       })

       .fail(function( msg ) {
         // I/O Error
         $("#boinc-error-msg").html("Connunication error: " + msg);
         $("#boinc-error-msg").fadeIn();
       })

       .always(function() {
         // In any case, restore the layout
         $("#boinc-login-form input").prop("disabled", false);
         $("#boinc-login-form button").prop("disabled", false);
         $("#boinc-login-submit").html("Login");
       });

}

/**
 * =================================================================
 *  Higher-level functions
 * =================================================================
 */

var lhc, v_session;

function setPreparingView() {
   lhc.setView(1);
   progressRotatingMessages([

         "Connecting to your instance",

         "Configuring network",
         "Starting critical services",
         "Preparing environment",
         "Preparing accelerator software",

         "Contacting time services",
         "Calibrating timers",

         "Discovering environment",
         "Connecting to controller interface",
         "Connecting to CERN",
         "Authorizing client",
         "Mounting network filesystems",

         "Configuring job manager",

         "Downloading simulator components",
         "Downloading physics configuration",
         "Downloading reference data",

         "Starting work queue",
         "Starting simulator",

         "Probe injection beam",
         "Beam dumped",
         "Physics injection beam",
         "Preparing ramp",
         "Ramping accelerator",
         "Reached flat top",
         "Squeezing beams",
         "Adjusting beams",
         "Stable physics beams",

         "Waiting for physics job"

      ]);
}


/**
 * Entry point function
 *
 * --- Progress events ---
 *
 * [00 - 40%] : Setting up environment
 *        10  : Plugin Ready
 *     10-40  : Downloading/Installing hypervisor
 *
 * [40 - 80%] : Open session
 */

var inited = false,
    isTimeTraveller = false;
$(document).ready(function() {
   if (inited) return; inited = true;

   // Reset UI
   $("#not-supported-msg").hide();
   $("#upper-controls").hide();
   $("#lower-controls").hide();
   $("#launch-controls").hide();
   $("#boinc-login-form").hide();

   boincUpdateStatus();
   progressUpdate(0, "Setting up environment");
   $("body").removeClass('not-ready');

   // Knobify dials
   $(".dial").knob();

   // Prepare two functions that start the system after a delay
   // not to completely freeze the browser

   //////////////////////////////////////////////////////////
   function setupWebGL() {
   //////////////////////////////////////////////////////////

      // Check for WebGL Errors
      try {

         // Setup Three.js Viewport
         var v = new M.Viewport({
            container: "#collider",
            bg: 0x000000, //0x202020, 0xf5f5f5,
            autostop: false,
            fullscreen: false,
            stats: false
         });

         v.renderer.sortObjects = false;

         // Setup accelerator ring
         lhc = new M.AcceleratorRing( v.camera );
         v.scene.add(lhc);

         // Receive render updates to the accelerator ring
         v.addUpdateHandler( lhc.update.bind(lhc) );

         // Default view
         lhc.setView(0);

      } catch (e) {

         // WebGL Error
         $("#not-supported-msg").fadeIn();
         $("#loading").hide();

         // The user is from the past
         isTimeTraveller = true;
         return;

      }

   }

   //////////////////////////////////////////////////////////
   function setupCVM() {
   //////////////////////////////////////////////////////////

      CVM.debugLogging = true;

      // Installation events are only between 10-20%
      CVM.addInstallProgressHandler(function(percent, msg) {
         var value = percent * 30 / 100;
         progressUpdate(10 + value, msg);
         console.log("InstallProgress = ", 10+value);
      });

      // Initialize CernVM
      CVM.startCVMWebAPI(
         function(plugin) {
            progressUpdate(20, "Establishing session");

            // Plugin progress events (session itialization are between 20 and 60)
            plugin.addEventListener('progress', function(percent, msg) {
               var value = percent * 40 / 100;
               progressUpdate(40 + value, msg);
               console.log("pluginProgress = ", 40 + value);
            });

            // Start session
            //plugin.requestSession( 'http://labs.wavesoft.gr/t4t/sign.php', function(session) {
            plugin.requestSession( 'http://test.local/VirtualAtomSmasher/sign.php', function(session) {

               window.s = session;
               v_session = session;

               // Handle various session states
               if (session.state == 2) {

                  // OPEN -> START
                  showLaunchControls();
                  //session.start();

               }

               // Check if this VM is already bound to a BOINC account
               // (Since we are pausing/resuming the floppy cannot be changed!)
               var boincUser = session.getProperty("/boinc/name");
               if (boincUser != "") {

                  // Disable logout
                  $("#boinc-logout").hide();

                  // Update local info too
                  if (localBoincInfo == null) {
                     localBoincInfo = {
                        name: boincUser,
                        id: session.getProperty("/boinc/id"),
                        authenticator: session.getProperty("/boinc/auth")
                     };
                     boincUpdateStatus(false);
                  }
               }


               // Session progress events (session open/resume are between 80 and 100)
               session.addEventListener('progress', function(percent, msg) {
                  var value = percent * 20 / 100;
                  progressUpdate(80 + value, msg);
                  console.log("sessionProgress = ", 80 + value);
               });

               session.addEventListener('error', function(msg) {
                  lhc.setView(3);
                  progressError( msg );
               });

               session.addEventListener('sessionStateChange', function(newState) {

                  if (newState == 2) { // Open Session
                     progressMessage("Your accelerator is closed");
                     lhc.setView(0);
                     showLaunchControls();
                     hideDashboard();

                  } else if ((newState == 3) || (newState == 4)) { // Started 

                     setPreparingView();
                     hideLaunchControls();
                     hideDashboard();

                  } else if (newState == 6) { // Paused
                     progressMessage("Your accelerator is frozen");
                     lhc.setView(0);
                     showLaunchControls();
                     hideDashboard();

                  } else if (newState == 0) { // Closed (?! Destroyed??)
                     progressMessage("Your accelerator is destroyed");
                     lhc.setView(0);
                     showLaunchControls();
                     hideDashboard();

                     // We have the VM Destroyed. This means
                     // we can change a user
                     $("#boinc-logout").show();
                     boincUpdateStatus(false);

                  }
               });

               session.addEventListener('apiAvailable', function() {
                  lhc.setView(2);
                  hideProgress();
                  showDashboard();
               });

               session.addEventListener('apiUnavailable', function() {

                  // This is valid only when fired when the VM is running
                  if (lhc.view != 0) {
                     progressMessage("Disconnected from the accelerator");
                     lhc.setView(1);
                     hideDashboard();

                     // Check if the session is also lost
                     session.__session.update();
                     setTimeout(function() {
                        if ((session.state == 2) && (lhc.view != 0)) {

                           progressMessage("Your accelerator is closed");
                           lhc.setView(0);
                           showLaunchControls();
                           hideDashboard();

                        }
                     }, 1000);
                  }

               });


            }, function (err_msg) {

               // Could not request session
               lhc.setView(3);
               progressError( err_msg );

            });

         },
         function(e) {
            lhc.setView(3);
            progressError(e);
         },
         
         // Let the plugin initialize the environment
         true
      );

   }

   var users = [];
   var uid = 8;
   var u = new UsersBar("#user-list", { width: 250, height: 250, flip: true });

   window.updateUsers = function() {
      users = [];
      var k=Math.round(Math.random() * 10000000);
      for (var i=0; i<15; i++) {
         //Math.round(Math.random() * 10000000)
         users.push({
            'credit': k,
            'text': 'User '+i,
            'me': (i == uid)
         });
         k += Math.round(Math.random()*80)+30;
      }
      u.update(users);
   }
   window.updateUsers();

   // Delaied-initialization
   progressUpdate(0, "Starting WebGL");
   setTimeout(function() {

      // Setup WebGL
      setupWebGL();

      // Schedule CVM initialization
      progressUpdate(0, "Starting CernVM WebAPI");
      setTimeout(function() {

         // Skip initialization if webgl failed
         if (isTimeTraveller) return;

         // Setup CernVM
         setupCVM();

      }, 500);

   }, 500);
   /*
   showDashboard();
   */

   
});