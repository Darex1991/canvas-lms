(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[115],{bljh:function(n,t,e){var r,i
!function(){var u={version:"3.5.17"},o=[].slice,a=function(n){return o.call(n)},l=this.document
function c(n){return n&&(n.ownerDocument||n.document||n).documentElement}function f(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}if(l)try{a(l.documentElement.childNodes)[0].nodeType}catch(n){a=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t]
return e}}if(Date.now||(Date.now=function(){return+new Date}),l)try{l.createElement("DIV").style.setProperty("opacity",0,"")}catch(n){var s=this.Element.prototype,h=s.setAttribute,p=s.setAttributeNS,g=this.CSSStyleDeclaration.prototype,v=g.setProperty
s.setAttribute=function(n,t){h.call(this,n,t+"")},s.setAttributeNS=function(n,t,e){p.call(this,n,t,e+"")},g.setProperty=function(n,t,e){v.call(this,n,t+"",e)}}function d(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function y(n){return null===n?NaN:+n}function m(n){return!isNaN(n)}function M(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);r<i;){var u=r+i>>>1
n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);r<i;){var u=r+i>>>1
n(t[u],e)>0?i=u:r=u+1}return r}}}u.ascending=d,u.descending=function(n,t){return t<n?-1:t>n?1:t>=n?0:NaN},u.min=function(n,t){var e,r,i=-1,u=n.length
if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r
break}for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r
break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},u.max=function(n,t){var e,r,i=-1,u=n.length
if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r
break}for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r
break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},u.extent=function(n,t){var e,r,i,u=-1,o=n.length
if(1===arguments.length){for(;++u<o;)if(null!=(r=n[u])&&r>=r){e=i=r
break}for(;++u<o;)null!=(r=n[u])&&(e>r&&(e=r),i<r&&(i=r))}else{for(;++u<o;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r
break}for(;++u<o;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),i<r&&(i=r))}return[e,i]},u.sum=function(n,t){var e,r=0,i=n.length,u=-1
if(1===arguments.length)for(;++u<i;)m(e=+n[u])&&(r+=e)
else for(;++u<i;)m(e=+t.call(n,n[u],u))&&(r+=e)
return r},u.mean=function(n,t){var e,r=0,i=n.length,u=-1,o=i
if(1===arguments.length)for(;++u<i;)m(e=y(n[u]))?r+=e:--o
else for(;++u<i;)m(e=y(t.call(n,n[u],u)))?r+=e:--o
if(o)return r/o},u.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r
return u?i+u*(n[r]-i):i},u.median=function(n,t){var e,r=[],i=n.length,o=-1
if(1===arguments.length)for(;++o<i;)m(e=y(n[o]))&&r.push(e)
else for(;++o<i;)m(e=y(t.call(n,n[o],o)))&&r.push(e)
if(r.length)return u.quantile(r.sort(d),.5)},u.variance=function(n,t){var e,r,i=n.length,u=0,o=0,a=-1,l=0
if(1===arguments.length)for(;++a<i;)m(e=y(n[a]))&&(o+=(r=e-u)*(e-(u+=r/++l)))
else for(;++a<i;)m(e=y(t.call(n,n[a],a)))&&(o+=(r=e-u)*(e-(u+=r/++l)))
if(l>1)return o/(l-1)},u.deviation=function(){var n=u.variance.apply(this,arguments)
return n?Math.sqrt(n):n}
var x=M(d)
function b(n){return n.length}u.bisectLeft=x.left,u.bisect=u.bisectRight=x.right,u.bisector=function(n){return M(1===n.length?function(t,e){return d(n(t),e)}:n)},u.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,u<2&&(t=0))
for(var r,i,u=e-t;u;)i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r
return n},u.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]]
return r},u.pairs=function(n){for(var t=0,e=n.length-1,r=n[0],i=new Array(e<0?0:e);t<e;)i[t]=[r,r=n[++t]]
return i},u.transpose=function(n){if(!(i=n.length))return[]
for(var t=-1,e=u.min(n,b),r=new Array(e);++t<e;)for(var i,o=-1,a=r[t]=new Array(i);++o<i;)a[o]=n[o][t]
return r},u.zip=function(){return u.transpose(arguments)},u.keys=function(n){var t=[]
for(var e in n)t.push(e)
return t},u.values=function(n){var t=[]
for(var e in n)t.push(n[e])
return t},u.entries=function(n){var t=[]
for(var e in n)t.push({key:e,value:n[e]})
return t},u.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length
for(e=new Array(o);--i>=0;)for(t=(r=n[i]).length;--t>=0;)e[--o]=r[t]
return e}
var _=Math.abs
function w(n){for(var t=1;n*t%1;)t*=10
return t}function k(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function S(){this._=Object.create(null)}u.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===Infinity)throw new Error("infinite range")
var r,i=[],u=w(_(e)),o=-1
if(n*=u,t*=u,(e*=u)<0)for(;(r=n+e*++o)>t;)i.push(r/u)
else for(;(r=n+e*++o)<t;)i.push(r/u)
return i},u.map=function(n,t){var e=new S
if(n instanceof S)n.forEach((function(n,t){e.set(n,t)}))
else if(Array.isArray(n)){var r,i=-1,u=n.length
if(1===arguments.length)for(;++i<u;)e.set(i,n[i])
else for(;++i<u;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o])
return e}
function N(n){return"__proto__"==(n+="")||"\0"===n[0]?"\0"+n:n}function E(n){return"\0"===(n+="")[0]?n.slice(1):n}function A(n){return N(n)in this._}function C(n){return(n=N(n))in this._&&delete this._[n]}function z(){var n=[]
for(var t in this._)n.push(E(t))
return n}function L(){var n=0
for(var t in this._)++n
return n}function q(){for(var n in this._)return!1
return!0}function T(){this._=Object.create(null)}function R(n){return n}function D(n,t,e){return function(){var r=e.apply(t,arguments)
return r===t?n:r}}function I(n,t){if(t in n)return t
t=t.charAt(0).toUpperCase()+t.slice(1)
for(var e=0,r=P.length;e<r;++e){var i=P[e]+t
if(i in n)return i}}k(S,{has:A,get:function(n){return this._[N(n)]},set:function(n,t){return this._[N(n)]=t},remove:C,keys:z,values:function(){var n=[]
for(var t in this._)n.push(this._[t])
return n},entries:function(){var n=[]
for(var t in this._)n.push({key:E(t),value:this._[t]})
return n},size:L,empty:q,forEach:function(n){for(var t in this._)n.call(this,E(t),this._[t])}}),u.nest=function(){var n,t,e={},r=[],i=[]
function o(i,u,a){if(a>=r.length)return t?t.call(e,u):n?u.sort(n):u
for(var l,c,f,s,h=-1,p=u.length,g=r[a++],v=new S;++h<p;)(s=v.get(l=g(c=u[h])))?s.push(c):v.set(l,[c])
return i?(c=i(),f=function(n,t){c.set(n,o(i,t,a))}):(c={},f=function(n,t){c[n]=o(i,t,a)}),v.forEach(f),c}return e.map=function(n,t){return o(t,n,0)},e.entries=function(n){return function n(t,e){if(e>=r.length)return t
var u=[],o=i[e++]
return t.forEach((function(t,r){u.push({key:t,values:n(r,e)})})),o?u.sort((function(n,t){return o(n.key,t.key)})):u}(o(u.map,n,0),0)},e.key=function(n){return r.push(n),e},e.sortKeys=function(n){return i[r.length-1]=n,e},e.sortValues=function(t){return n=t,e},e.rollup=function(n){return t=n,e},e},u.set=function(n){var t=new T
if(n)for(var e=0,r=n.length;e<r;++e)t.add(n[e])
return t},k(T,{has:A,add:function(n){return this._[N(n+="")]=!0,n},remove:C,values:z,size:L,empty:q,forEach:function(n){for(var t in this._)n.call(this,E(t))}}),u.behavior={},u.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=D(n,t,t[e])
return n}
var P=["webkit","ms","moz","Moz","o","O"]
function U(){}function j(){}function F(n){var t=[],e=new S
function r(){for(var e,r=t,i=-1,u=r.length;++i<u;)(e=r[i].on)&&e.apply(this,arguments)
return n}return r.on=function(r,i){var u,o=e.get(r)
return arguments.length<2?o&&o.on:(o&&(o.on=null,t=t.slice(0,u=t.indexOf(o)).concat(t.slice(u+1)),e.remove(r)),i&&t.push(e.set(r,{on:i})),n)},r}function H(){u.event.preventDefault()}function O(){for(var n,t=u.event;n=t.sourceEvent;)t=n
return t}function Y(n){for(var t=new j,e=0,r=arguments.length;++e<r;)t[arguments[e]]=F(t)
return t.of=function(e,r){return function(i){try{var o=i.sourceEvent=u.event
i.target=n,u.event=i,t[i.type].apply(e,r)}finally{u.event=o}}},t}u.dispatch=function(){for(var n=new j,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=F(n)
return n},j.prototype.on=function(n,t){var e=n.indexOf("."),r=""
if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t)
if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null)
return this}},u.event=null,u.requote=function(n){return n.replace(Z,"\\$&")}
var Z=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,V={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]}
function X(n){return V(n,J),n}var $=function(n,t){return t.querySelector(n)},B=function(n,t){return t.querySelectorAll(n)},W=function(n,t){var e=n.matches||n[I(n,"matchesSelector")]
return(W=function(n,t){return e.call(n,t)})(n,t)}
"function"==typeof Sizzle&&($=function(n,t){return Sizzle(n,t)[0]||null},B=Sizzle,W=Sizzle.matchesSelector),u.selection=function(){return u.select(l.documentElement)}
var J=u.selection.prototype=[]
function G(n){return"function"==typeof n?n:function(){return $(n,this)}}function K(n){return"function"==typeof n?n:function(){return B(n,this)}}J.select=function(n){var t,e,r,i,u=[]
n=G(n)
for(var o=-1,a=this.length;++o<a;){u.push(t=[]),t.parentNode=(r=this[o]).parentNode
for(var l=-1,c=r.length;++l<c;)(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return X(u)},J.selectAll=function(n){var t,e,r=[]
n=K(n)
for(var i=-1,u=this.length;++i<u;)for(var o=this[i],l=-1,c=o.length;++l<c;)(e=o[l])&&(r.push(t=a(n.call(e,e.__data__,l,i))),t.parentNode=e)
return X(r)}
var Q="http://www.w3.org/1999/xhtml",nn={svg:"http://www.w3.org/2000/svg",xhtml:Q,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
function tn(n,t){return n=u.ns.qualify(n),null==t?n.local?function(){this.removeAttributeNS(n.space,n.local)}:function(){this.removeAttribute(n)}:"function"==typeof t?n.local?function(){var e=t.apply(this,arguments)
null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}:function(){var e=t.apply(this,arguments)
null==e?this.removeAttribute(n):this.setAttribute(n,e)}:n.local?function(){this.setAttributeNS(n.space,n.local,t)}:function(){this.setAttribute(n,t)}}function en(n){return n.trim().replace(/\s+/g," ")}function rn(n){return new RegExp("(?:^|\\s+)"+u.requote(n)+"(?:\\s+|$)","g")}function un(n){return(n+"").trim().split(/^|\s+/)}function on(n,t){var e=(n=un(n).map(an)).length
return"function"==typeof t?function(){for(var r=-1,i=t.apply(this,arguments);++r<e;)n[r](this,i)}:function(){for(var r=-1;++r<e;)n[r](this,t)}}function an(n){var t=rn(n)
return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n)
var i=e.getAttribute("class")||""
r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",en(i+" "+n))):e.setAttribute("class",en(i.replace(t," ")))}}function ln(n,t,e){return null==t?function(){this.style.removeProperty(n)}:"function"==typeof t?function(){var r=t.apply(this,arguments)
null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}:function(){this.style.setProperty(n,t,e)}}function cn(n,t){return null==t?function(){delete this[n]}:"function"==typeof t?function(){var e=t.apply(this,arguments)
null==e?delete this[n]:this[n]=e}:function(){this[n]=t}}function fn(n){return"function"==typeof n?n:(n=u.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){var t=this.ownerDocument,e=this.namespaceURI
return e===Q&&t.documentElement.namespaceURI===Q?t.createElement(n):t.createElementNS(e,n)}}function sn(){var n=this.parentNode
n&&n.removeChild(this)}function hn(n){return{__data__:n}}function pn(n){return function(){return W(this,n)}}function gn(n){return arguments.length||(n=d),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function vn(n,t){for(var e=0,r=n.length;e<r;e++)for(var i,u=n[e],o=0,a=u.length;o<a;o++)(i=u[o])&&t(i,o,e)
return n}function dn(n){return V(n,yn),n}u.ns={prefix:nn,qualify:function(n){var t=n.indexOf(":"),e=n
return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),nn.hasOwnProperty(e)?{space:nn[e],local:n}:n}},J.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node()
return(n=u.ns.qualify(n)).local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(tn(t,n[t]))
return this}return this.each(tn(n,t))},J.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=un(n)).length,i=-1
if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!rn(n[i]).test(t))return!1
return!0}for(t in n)this.each(on(t,n[t]))
return this}return this.each(on(n,t))},J.style=function(n,t,e){var r=arguments.length
if(r<3){if("string"!=typeof n){for(e in r<2&&(t=""),n)this.each(ln(e,n[e],t))
return this}if(r<2){var i=this.node()
return f(i).getComputedStyle(i,null).getPropertyValue(n)}e=""}return this.each(ln(n,t,e))},J.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n]
for(t in n)this.each(cn(t,n[t]))
return this}return this.each(cn(n,t))},J.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments)
this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},J.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments)
this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},J.append=function(n){return n=fn(n),this.select((function(){return this.appendChild(n.apply(this,arguments))}))},J.insert=function(n,t){return n=fn(n),t=G(t),this.select((function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)}))},J.remove=function(){return this.each(sn)},J.data=function(n,t){var e,r,i=-1,u=this.length
if(!arguments.length){for(n=new Array(u=(e=this[0]).length);++i<u;)(r=e[i])&&(n[i]=r.__data__)
return n}function o(n,e){var r,i,u,o=n.length,f=e.length,s=Math.min(o,f),h=new Array(f),p=new Array(f),g=new Array(o)
if(t){var v,d=new S,y=new Array(o)
for(r=-1;++r<o;)(i=n[r])&&(d.has(v=t.call(i,i.__data__,r))?g[r]=i:d.set(v,i),y[r]=v)
for(r=-1;++r<f;)(i=d.get(v=t.call(e,u=e[r],r)))?!0!==i&&(h[r]=i,i.__data__=u):p[r]=hn(u),d.set(v,!0)
for(r=-1;++r<o;)r in y&&!0!==d.get(y[r])&&(g[r]=n[r])}else{for(r=-1;++r<s;)i=n[r],u=e[r],i?(i.__data__=u,h[r]=i):p[r]=hn(u)
for(;r<f;++r)p[r]=hn(e[r])
for(;r<o;++r)g[r]=n[r]}p.update=h,p.parentNode=h.parentNode=g.parentNode=n.parentNode,a.push(p),l.push(h),c.push(g)}var a=dn([]),l=X([]),c=X([])
if("function"==typeof n)for(;++i<u;)o(e=this[i],n.call(e,e.parentNode.__data__,i))
else for(;++i<u;)o(e=this[i],n)
return l.enter=function(){return a},l.exit=function(){return c},l},J.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},J.filter=function(n){var t,e,r,i=[]
"function"!=typeof n&&(n=pn(n))
for(var u=0,o=this.length;u<o;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode
for(var a=0,l=e.length;a<l;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return X(i)},J.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e)
return this},J.sort=function(n){n=gn.apply(this,arguments)
for(var t=-1,e=this.length;++t<e;)this[t].sort(n)
return this.order()},J.each=function(n){return vn(this,(function(t,e,r){n.call(t,t.__data__,e,r)}))},J.call=function(n){var t=a(arguments)
return n.apply(t[0]=this,t),this},J.empty=function(){return!this.node()},J.node=function(){for(var n=0,t=this.length;n<t;n++)for(var e=this[n],r=0,i=e.length;r<i;r++){var u=e[r]
if(u)return u}return null},J.size=function(){var n=0
return vn(this,(function(){++n})),n}
var yn=[]
function mn(n){var t,e
return function(r,i,u){var o,a=n[u].update,l=a.length
for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(o=a[t])&&++t<l;);return o}}function Mn(n,t,e){var r="__on"+n,i=n.indexOf("."),o=bn
i>0&&(n=n.slice(0,i))
var l=xn.get(n)
function c(){var t=this[r]
t&&(this.removeEventListener(n,t,t.$),delete this[r])}return l&&(n=l,o=_n),i?t?function(){var i=o(t,a(arguments))
c.call(this),this.addEventListener(n,this[r]=i,i.$=e),i._=t}:c:t?U:function(){var t,e=new RegExp("^__on([^.]+)"+u.requote(n)+"$")
for(var r in this)if(t=r.match(e)){var i=this[r]
this.removeEventListener(t[1],i,i.$),delete this[r]}}}u.selection.enter=dn,u.selection.enter.prototype=yn,yn.append=J.append,yn.empty=J.empty,yn.node=J.node,yn.call=J.call,yn.size=J.size,yn.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length;++a<l;){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode
for(var c=-1,f=i.length;++c<f;)(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return X(o)},yn.insert=function(n,t){return arguments.length<2&&(t=mn(this)),J.insert.call(this,n,t)},u.select=function(n){var t
return"string"==typeof n?(t=[$(n,l)]).parentNode=l.documentElement:(t=[n]).parentNode=c(n),X([t])},u.selectAll=function(n){var t
return"string"==typeof n?(t=a(B(n,l))).parentNode=l.documentElement:(t=a(n)).parentNode=null,X([t])},J.on=function(n,t,e){var r=arguments.length
if(r<3){if("string"!=typeof n){for(e in r<2&&(t=!1),n)this.each(Mn(e,n[e],t))
return this}if(r<2)return(r=this.node()["__on"+n])&&r._
e=!1}return this.each(Mn(n,t,e))}
var xn=u.map({mouseenter:"mouseover",mouseleave:"mouseout"})
function bn(n,t){return function(e){var r=u.event
u.event=e,t[0]=this.__data__
try{n.apply(this,t)}finally{u.event=r}}}function _n(n,t){var e=bn(n,t)
return function(n){var t=n.relatedTarget
t&&(t===this||8&t.compareDocumentPosition(this))||e.call(this,n)}}l&&xn.forEach((function(n){"on"+n in l&&xn.remove(n)}))
var wn,kn=0
function Sn(n){var t=".dragsuppress-"+ ++kn,e="click"+t,r=u.select(f(n)).on("touchmove"+t,H).on("dragstart"+t,H).on("selectstart"+t,H)
if(null==wn&&(wn=!("onselectstart"in n)&&I(n.style,"userSelect")),wn){var i=c(n).style,o=i[wn]
i[wn]="none"}return function(n){if(r.on(t,null),wn&&(i[wn]=o),n){var u=function(){r.on(e,null)}
r.on(e,(function(){H(),u()}),!0),setTimeout(u,0)}}}u.mouse=function(n){return En(n,O())}
var Nn=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0
function En(n,t){t.changedTouches&&(t=t.changedTouches[0])
var e=n.ownerSVGElement||n
if(e.createSVGPoint){var r=e.createSVGPoint()
if(Nn<0){var i=f(n)
if(i.scrollX||i.scrollY){var o=(e=u.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important"))[0][0].getScreenCTM()
Nn=!(o.f||o.e),e.remove()}}return Nn?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),[(r=r.matrixTransform(n.getScreenCTM().inverse())).x,r.y]}var a=n.getBoundingClientRect()
return[t.clientX-a.left-n.clientLeft,t.clientY-a.top-n.clientTop]}function An(){return u.event.changedTouches[0].identifier}u.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=O().changedTouches),t)for(var r,i=0,u=t.length;i<u;++i)if((r=t[i]).identifier===e)return En(n,r)},u.behavior.drag=function(){var n=Y(i,"drag","dragstart","dragend"),t=null,e=o(U,u.mouse,f,"mousemove","mouseup"),r=o(An,u.touch,R,"touchmove","touchend")
function i(){this.on("mousedown.drag",e).on("touchstart.drag",r)}function o(e,r,i,o,a){return function(){var l,c=this,f=u.event.target.correspondingElement||u.event.target,s=c.parentNode,h=n.of(c,arguments),p=0,g=e(),v=".drag"+(null==g?"":"-"+g),d=u.select(i(f)).on(o+v,M).on(a+v,x),y=Sn(f),m=r(s,g)
function M(){var n,t,e=r(s,g)
e&&(n=e[0]-m[0],t=e[1]-m[1],p|=n|t,m=e,h({type:"drag",x:e[0]+l[0],y:e[1]+l[1],dx:n,dy:t}))}function x(){r(s,g)&&(d.on(o+v,null).on(a+v,null),y(p),h({type:"dragend"}))}l=t?[(l=t.apply(c,arguments)).x-m[0],l.y-m[1]]:[0,0],h({type:"dragstart"})}}return i.origin=function(n){return arguments.length?(t=n,i):t},u.rebind(i,n,"on")},u.touches=function(n,t){return arguments.length<2&&(t=O().touches),t?a(t).map((function(t){var e=En(n,t)
return e.identifier=t.identifier,e})):[]}
var Cn=1e-6,zn=1e-12,Ln=Math.PI,qn=2*Ln,Tn=qn-Cn,Rn=Ln/2,Dn=Ln/180,In=180/Ln
function Pn(n){return n>0?1:n<0?-1:0}function Un(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function jn(n){return n>1?0:n<-1?Ln:Math.acos(n)}function Fn(n){return n>1?Rn:n<-1?-Rn:Math.asin(n)}function Hn(n){return((n=Math.exp(n))+1/n)/2}function On(n){return(n=Math.sin(n/2))*n}var Yn=Math.SQRT2
u.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s
if(h<zn)r=Math.log(c/o)/Yn,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Yn*n*r)]}
else{var p=Math.sqrt(h),g=(c*c-o*o+4*h)/(2*o*2*p),v=(c*c-o*o-4*h)/(2*c*2*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v)
r=(y-d)/Yn,e=function(n){var t,e=n*r,a=Hn(d),l=o/(2*p)*(a*(t=Yn*e+d,((t=Math.exp(2*t))-1)/(t+1))-function(n){return((n=Math.exp(n))-1/n)/2}(d))
return[i+l*f,u+l*s,o*a/Hn(Yn*e+d)]}}return e.duration=1e3*r,e},u.behavior.zoom=function(){var n,t,e,r,i,o,a,c,s,h={x:0,y:0,k:1},p=[960,500],g=Xn,v=250,d=0,y="mousedown.zoom",m="mousemove.zoom",M="mouseup.zoom",x="touchstart.zoom",b=Y(_,"zoomstart","zoom","zoomend")
function _(n){n.on(y,L).on(Vn+".zoom",T).on("dblclick.zoom",R).on(x,q)}function w(n){return[(n[0]-h.x)/h.k,(n[1]-h.y)/h.k]}function k(n){h.k=Math.max(g[0],Math.min(g[1],n))}function S(n,t){t=function(n){return[n[0]*h.k+h.x,n[1]*h.k+h.y]}(t),h.x+=n[0]-t[0],h.y+=n[1]-t[1]}function N(n,e,r,i){n.__chart__={x:h.x,y:h.y,k:h.k},k(Math.pow(2,i)),S(t=e,r),n=u.select(n),v>0&&(n=n.transition().duration(v)),n.call(_.event)}function E(){a&&a.domain(o.range().map((function(n){return(n-h.x)/h.k})).map(o.invert)),s&&s.domain(c.range().map((function(n){return(n-h.y)/h.k})).map(c.invert))}function A(n){d++||n({type:"zoomstart"})}function C(n){E(),n({type:"zoom",scale:h.k,translate:[h.x,h.y]})}function z(n){--d||(n({type:"zoomend"}),t=null)}function L(){var n=this,t=b.of(n,arguments),e=0,r=u.select(f(n)).on(m,a).on(M,l),i=w(u.mouse(n)),o=Sn(n)
function a(){e=1,S(u.mouse(n),i),C(t)}function l(){r.on(m,null).on(M,null),o(e),z(t)}ba.call(n),A(t)}function q(){var n,t=this,e=b.of(t,arguments),r={},o=0,a=".zoom-"+u.event.changedTouches[0].identifier,l="touchmove"+a,c="touchend"+a,f=[],s=u.select(t),p=Sn(t)
function g(){var e=u.touches(t)
return n=h.k,e.forEach((function(n){n.identifier in r&&(r[n.identifier]=w(n))})),e}function v(){var n=u.event.target
u.select(n).on(l,d).on(c,m),f.push(n)
for(var e=u.event.changedTouches,a=0,s=e.length;a<s;++a)r[e[a].identifier]=null
var p=g(),v=Date.now()
if(1===p.length){if(v-i<500){var y=p[0]
N(t,y,r[y.identifier],Math.floor(Math.log(h.k)/Math.LN2)+1),H()}i=v}else if(p.length>1){y=p[0]
var M=p[1],x=y[0]-M[0],b=y[1]-M[1]
o=x*x+b*b}}function d(){var a,l,c,f,s=u.touches(t)
ba.call(t)
for(var h=0,p=s.length;h<p;++h,f=null)if(c=s[h],f=r[c.identifier]){if(l)break
a=c,l=f}if(f){var g=(g=c[0]-a[0])*g+(g=c[1]-a[1])*g,v=o&&Math.sqrt(g/o)
a=[(a[0]+c[0])/2,(a[1]+c[1])/2],l=[(l[0]+f[0])/2,(l[1]+f[1])/2],k(v*n)}i=null,S(a,l),C(e)}function m(){if(u.event.touches.length){for(var n=u.event.changedTouches,t=0,i=n.length;t<i;++t)delete r[n[t].identifier]
for(var o in r)return void g()}u.selectAll(f).on(a,null),s.on(y,L).on(x,q),p(),z(e)}v(),A(e),s.on(y,null).on(x,v)}function T(){var i=b.of(this,arguments)
r?clearTimeout(r):(ba.call(this),n=w(t=e||u.mouse(this)),A(i)),r=setTimeout((function(){r=null,z(i)}),50),H(),k(Math.pow(2,.002*Zn())*h.k),S(t,n),C(i)}function R(){var n=u.mouse(this),t=Math.log(h.k)/Math.LN2
N(this,n,w(n),u.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}return Vn||(Vn="onwheel"in l?(Zn=function(){return-u.event.deltaY*(u.event.deltaMode?120:1)},"wheel"):"onmousewheel"in l?(Zn=function(){return u.event.wheelDelta},"mousewheel"):(Zn=function(){return-u.event.detail},"MozMousePixelScroll")),_.event=function(n){n.each((function(){var n=b.of(this,arguments),e=h
ka?u.select(this).transition().each("start.zoom",(function(){h=this.__chart__||{x:0,y:0,k:1},A(n)})).tween("zoom:zoom",(function(){var r=p[0],i=p[1],o=t?t[0]:r/2,a=t?t[1]:i/2,l=u.interpolateZoom([(o-h.x)/h.k,(a-h.y)/h.k,r/h.k],[(o-e.x)/e.k,(a-e.y)/e.k,r/e.k])
return function(t){var e=l(t),i=r/e[2]
this.__chart__=h={x:o-e[0]*i,y:a-e[1]*i,k:i},C(n)}})).each("interrupt.zoom",(function(){z(n)})).each("end.zoom",(function(){z(n)})):(this.__chart__=h,A(n),C(n),z(n))}))},_.translate=function(n){return arguments.length?(h={x:+n[0],y:+n[1],k:h.k},E(),_):[h.x,h.y]},_.scale=function(n){return arguments.length?(h={x:h.x,y:h.y,k:null},k(+n),E(),_):h.k},_.scaleExtent=function(n){return arguments.length?(g=null==n?Xn:[+n[0],+n[1]],_):g},_.center=function(n){return arguments.length?(e=n&&[+n[0],+n[1]],_):e},_.size=function(n){return arguments.length?(p=n&&[+n[0],+n[1]],_):p},_.duration=function(n){return arguments.length?(v=+n,_):v},_.x=function(n){return arguments.length?(a=n,o=n.copy(),h={x:0,y:0,k:1},_):a},_.y=function(n){return arguments.length?(s=n,c=n.copy(),h={x:0,y:0,k:1},_):s},u.rebind(_,b,"on")}
var Zn,Vn,Xn=[0,Infinity]
function $n(){}function Bn(n,t,e){return this instanceof Bn?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof Bn?new Bn(n.h,n.s,n.l):pt(""+n,gt,Bn):new Bn(n,t,e)}u.color=$n,$n.prototype.toString=function(){return this.rgb()+""},u.hsl=Bn
var Wn=Bn.prototype=new $n
function Jn(n,t,e){var r,i
function u(n){return Math.round(255*function(n){return n>360?n-=360:n<0&&(n+=360),n<60?r+(i-r)*n/60:n<180?i:n<240?r+(i-r)*(240-n)/60:r}(n))}return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)||t<0?0:t>1?1:t,r=2*(e=e<0?0:e>1?1:e)-(i=e<=.5?e*(1+t):e+t-e*t),new lt(u(n+120),u(n),u(n-120))}function Gn(n,t,e){return this instanceof Gn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof Gn?new Gn(n.h,n.c,n.l):it(n instanceof nt?n.l:(n=vt((n=u.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new Gn(n,t,e)}Wn.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new Bn(this.h,this.s,this.l/n)},Wn.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new Bn(this.h,this.s,n*this.l)},Wn.rgb=function(){return Jn(this.h,this.s,this.l)},u.hcl=Gn
var Kn=Gn.prototype=new $n
function Qn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new nt(e,Math.cos(n*=Dn)*t,Math.sin(n)*t)}function nt(n,t,e){return this instanceof nt?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof nt?new nt(n.l,n.a,n.b):n instanceof Gn?Qn(n.h,n.c,n.l):vt((n=lt(n)).r,n.g,n.b):new nt(n,t,e)}Kn.brighter=function(n){return new Gn(this.h,this.c,Math.min(100,this.l+tt*(arguments.length?n:1)))},Kn.darker=function(n){return new Gn(this.h,this.c,Math.max(0,this.l-tt*(arguments.length?n:1)))},Kn.rgb=function(){return Qn(this.h,this.c,this.l).rgb()},u.lab=nt
var tt=18,et=nt.prototype=new $n
function rt(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200
return new lt(at(3.2404542*(i=.95047*ut(i))-1.5371385*(r=1*ut(r))-.4985314*(u=1.08883*ut(u))),at(-.969266*i+1.8760108*r+.041556*u),at(.0556434*i-.2040259*r+1.0572252*u))}function it(n,t,e){return n>0?new Gn(Math.atan2(e,t)*In,Math.sqrt(t*t+e*e),n):new Gn(NaN,NaN,n)}function ut(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function ot(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function at(n){return Math.round(255*(n<=.00304?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function lt(n,t,e){return this instanceof lt?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof lt?new lt(n.r,n.g,n.b):pt(""+n,lt,Jn):new lt(n,t,e)}function ct(n){return new lt(n>>16,n>>8&255,255&n)}function ft(n){return ct(n)+""}et.brighter=function(n){return new nt(Math.min(100,this.l+tt*(arguments.length?n:1)),this.a,this.b)},et.darker=function(n){return new nt(Math.max(0,this.l-tt*(arguments.length?n:1)),this.a,this.b)},et.rgb=function(){return rt(this.l,this.a,this.b)},u.rgb=lt
var st=lt.prototype=new $n
function ht(n){return n<16?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function pt(n,t,e){var r,i,u,o=0,a=0,l=0
if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100)
case"rgb":return t(yt(i[0]),yt(i[1]),yt(i[2]))}return(u=mt.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o|=o>>4,a=240&u,a|=a>>4,l=15&u,l|=l<<4):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function gt(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2
return a?(i=l<.5?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(t<e?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&l<1?0:r),new Bn(r,i,l)}function vt(n,t,e){var r=ot((.4124564*(n=dt(n))+.3575761*(t=dt(t))+.1804375*(e=dt(e)))/.95047),i=ot((.2126729*n+.7151522*t+.072175*e)/1)
return nt(116*i-16,500*(r-i),200*(i-ot((.0193339*n+.119192*t+.9503041*e)/1.08883)))}function dt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function yt(n){var t=parseFloat(n)
return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}st.brighter=function(n){n=Math.pow(.7,arguments.length?n:1)
var t=this.r,e=this.g,r=this.b,i=30
return t||e||r?(t&&t<i&&(t=i),e&&e<i&&(e=i),r&&r<i&&(r=i),new lt(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new lt(i,i,i)},st.darker=function(n){return new lt((n=Math.pow(.7,arguments.length?n:1))*this.r,n*this.g,n*this.b)},st.hsl=function(){return gt(this.r,this.g,this.b)},st.toString=function(){return"#"+ht(this.r)+ht(this.g)+ht(this.b)}
var mt=u.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074})
function Mt(n){return"function"==typeof n?n:function(){return n}}function xt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),bt(t,e,n,r)}}function bt(n,t,e,r){var i={},o=u.dispatch("beforesend","progress","load","error"),l={},c=new XMLHttpRequest,f=null
function s(){var n,t=c.status
if(!t&&function(n){var t=n.responseType
return t&&"text"!==t?n.response:n.responseText}(c)||t>=200&&t<300||304===t){try{n=e.call(i,c)}catch(n){return void o.error.call(i,n)}o.load.call(i,n)}else o.error.call(i,c)}return this.XDomainRequest&&!("withCredentials"in c)&&/^(http(s)?:)?\/\//.test(n)&&(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=s:c.onreadystatechange=function(){c.readyState>3&&s()},c.onprogress=function(n){var t=u.event
u.event=n
try{o.progress.call(i,c)}finally{u.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?l[n]:(null==t?delete l[n]:l[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(f=n,i):f},i.response=function(n){return e=n,i},["get","post"].forEach((function(n){i[n]=function(){return i.send.apply(i,[n].concat(a(arguments)))}})),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in l||(l.accept=t+",*/*"),c.setRequestHeader)for(var a in l)c.setRequestHeader(a,l[a])
return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=f&&(c.responseType=f),null!=u&&i.on("error",u).on("load",(function(n){u(null,n)})),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},u.rebind(i,o,"on"),null==r?i:i.get(function(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}(r))}mt.forEach((function(n,t){mt.set(n,ct(t))})),u.functor=Mt,u.xhr=xt(R),u.dsv=function(n,t){var e=new RegExp('["'+n+"\n]"),r=n.charCodeAt(0)
function i(n,e,r){arguments.length<3&&(r=e,e=null)
var i=bt(n,t,null==e?u:o(e),r)
return i.row=function(n){return arguments.length?i.response(null==(e=n)?u:o(n)):e},i}function u(n){return i.parse(n.responseText)}function o(n){return function(t){return i.parse(t.responseText,n)}}function a(t){return t.map(l).join(n)}function l(n){return e.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}return i.parse=function(n,t){var e
return i.parseRows(n,(function(n,r){if(e)return e(n,r-1)
var i=new Function("d","return {"+n.map((function(n,t){return JSON.stringify(n)+": d["+t+"]"})).join(",")+"}")
e=t?function(n,e){return t(i(n),e)}:i}))},i.parseRows=function(n,t){var e,i,u={},o={},a=[],l=n.length,c=0,f=0
function s(){if(c>=l)return o
if(i)return i=!1,u
var t=c
if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}return c=e+2,13===(a=n.charCodeAt(e+1))?(i=!0,10===n.charCodeAt(e+2)&&++c):10===a&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c<l;){var a,f=1
if(10===(a=n.charCodeAt(c++)))i=!0
else if(13===a)i=!0,10===n.charCodeAt(c)&&(++c,++f)
else if(a!==r)continue
return n.slice(t,c-f)}return n.slice(t)}for(;(e=s())!==o;){for(var h=[];e!==u&&e!==o;)h.push(e),e=s()
t&&null==(h=t(h,f++))||a.push(h)}return a},i.format=function(t){if(Array.isArray(t[0]))return i.formatRows(t)
var e=new T,r=[]
return t.forEach((function(n){for(var t in n)e.has(t)||r.push(e.add(t))})),[r.map(l).join(n)].concat(t.map((function(t){return r.map((function(n){return l(t[n])})).join(n)}))).join("\n")},i.formatRows=function(n){return n.map(a).join("\n")},i},u.csv=u.dsv(",","text/csv"),u.tsv=u.dsv("\t","text/tab-separated-values")
var _t,wt,kt,St,Nt=this[I(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)}
function Et(n,t,e){var r=arguments.length
r<2&&(t=0),r<3&&(e=Date.now())
var i=e+t,u={c:n,t:i,n:null}
return wt?wt.n=u:_t=u,wt=u,kt||(St=clearTimeout(St),kt=1,Nt(At)),u}function At(){var n=Ct(),t=zt()-n
t>24?(isFinite(t)&&(clearTimeout(St),St=setTimeout(At,t)),kt=0):(kt=1,Nt(At))}function Ct(){for(var n=Date.now(),t=_t;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n
return n}function zt(){for(var n,t=_t,e=Infinity;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:_t=t.n
return wt=n,e}function Lt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}u.timer=function(){Et.apply(this,arguments)},u.timer.flush=function(){Ct(),zt()},u.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)}
var qt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map((function(n,t){var e=Math.pow(10,3*_(8-t))
return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}))
function Tt(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,o=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0;i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t));)a=r[o=(o+1)%r.length]
return u.reverse().join(e)}:R
return function(n){var e=Rt.exec(n),r=e[1]||" ",a=e[2]||">",l=e[3]||"-",c=e[4]||"",f=e[5],s=+e[6],h=e[7],p=e[8],g=e[9],v=1,d="",y="",m=!1,M=!0
switch(p&&(p=+p.substring(1)),(f||"0"===r&&"="===a)&&(f=r="0",a="="),g){case"n":h=!0,g="g"
break
case"%":v=100,y="%",g="f"
break
case"p":v=100,y="%",g="r"
break
case"b":case"o":case"x":case"X":"#"===c&&(d="0"+g.toLowerCase())
case"c":M=!1
case"d":m=!0,p=0
break
case"s":v=-1,g="r"}"$"===c&&(d=i[0],y=i[1]),"r"!=g||p||(g="g"),null!=p&&("g"==g?p=Math.max(1,Math.min(21,p)):"e"!=g&&"f"!=g||(p=Math.max(0,Math.min(20,p)))),g=Dt.get(g)||It
var x=f&&h
return function(n){var e=y
if(m&&n%1)return""
var i=n<0||0===n&&1/n<0?(n=-n,"-"):"-"===l?"":l
if(v<0){var c=u.formatPrefix(n,p)
n=c.scale(n),e=c.symbol+y}else n*=v
var b,_,w=(n=g(n,p)).lastIndexOf(".")
if(w<0){var k=M?n.lastIndexOf("e"):-1
k<0?(b=n,_=""):(b=n.substring(0,k),_=n.substring(k))}else b=n.substring(0,w),_=t+n.substring(w+1)
!f&&h&&(b=o(b,Infinity))
var S=d.length+b.length+_.length+(x?0:i.length),N=S<s?new Array(S=s-S+1).join(r):""
return x&&(b=o(N+b,N.length?s-_.length:Infinity)),i+=d,n=b+_,("<"===a?i+n+N:">"===a?N+i+n:"^"===a?N.substring(0,S>>=1)+i+n+N.substring(S):i+(x?n:N+n))+e}}}u.formatPrefix=function(n,t){var e=0
return(n=+n)&&(n<0&&(n*=-1),t&&(n=u.round(n,Lt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),qt[8+e/3]}
var Rt=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,Dt=u.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=u.round(n,Lt(n,t))).toFixed(Math.max(0,Math.min(20,Lt(n*(1+1e-15),t))))}})
function It(n){return n+""}var Pt=u.time={},Ut=Date
function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){Ft.setUTCDate.apply(this._,arguments)},setDay:function(){Ft.setUTCDay.apply(this._,arguments)},setFullYear:function(){Ft.setUTCFullYear.apply(this._,arguments)},setHours:function(){Ft.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){Ft.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){Ft.setUTCMinutes.apply(this._,arguments)},setMonth:function(){Ft.setUTCMonth.apply(this._,arguments)},setSeconds:function(){Ft.setUTCSeconds.apply(this._,arguments)},setTime:function(){Ft.setTime.apply(this._,arguments)}}
var Ft=Date.prototype
function Ht(n,t,e){function r(t){var e=n(t),r=u(e,1)
return t-e<r-t?e:r}function i(e){return t(e=n(new Ut(e-1)),1),e}function u(n,e){return t(n=new Ut(+n),e),n}function o(n,r,u){var o=i(n),a=[]
if(u>1)for(;o<r;)e(o)%u||a.push(new Date(+o)),t(o,1)
else for(;o<r;)a.push(new Date(+o)),t(o,1)
return a}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o
var a=n.utc=Ot(n)
return a.floor=a,a.round=Ot(r),a.ceil=Ot(i),a.offset=Ot(u),a.range=function(n,t,e){try{Ut=jt
var r=new jt
return r._=n,o(r,t,e)}finally{Ut=Date}},n}function Ot(n){return function(t,e){try{Ut=jt
var r=new jt
return r._=t,n(r,e)._}finally{Ut=Date}}}function Yt(n){var t=n.dateTime,e=n.date,r=n.time,i=n.periods,o=n.days,a=n.shortDays,l=n.months,c=n.shortMonths
function f(n){var t=n.length
function e(e){for(var r,i,u,o=[],a=-1,l=0;++a<t;)37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=Zt[r=n.charAt(++a)])&&(r=n.charAt(++a)),(u=b[r])&&(r=u(e,null==i?"e"===r?" ":"0":i)),o.push(r),l=a+1)
return o.push(n.slice(l,a)),o.join("")}return e.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null}
if(s(e,n,t,0)!=t.length)return null
"p"in e&&(e.H=e.H%12+12*e.p)
var r=null!=e.Z&&Ut!==jt,i=new(r?jt:Ut)
return"j"in e?i.setFullYear(e.y,0,e.j):"W"in e||"U"in e?("w"in e||(e.w="W"in e?1:0),i.setFullYear(e.y,0,1),i.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(i.getDay()+5)%7:e.w+7*e.U-(i.getDay()+6)%7)):i.setFullYear(e.y,e.m,e.d),i.setHours(e.H+(e.Z/100|0),e.M+e.Z%100,e.S,e.L),r?i._:i},e.toString=function(){return n},e}function s(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length;a<l;){if(r>=c)return-1
if(37===(i=t.charCodeAt(a++))){if(o=t.charAt(a++),!(u=_[o in Zt?t.charAt(a++):o])||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}f.utc=function(n){var t=f(n)
function e(n){try{var e=new(Ut=jt)
return e._=n,t(e)}finally{Ut=Date}}return e.parse=function(n){try{Ut=jt
var e=t.parse(n)
return e&&e._}finally{Ut=Date}},e.toString=t.toString,e},f.multi=f.utc.multi=se
var h=u.map(),p=Bt(o),g=Wt(o),v=Bt(a),d=Wt(a),y=Bt(l),m=Wt(l),M=Bt(c),x=Wt(c)
i.forEach((function(n,t){h.set(n.toLowerCase(),t)}))
var b={a:function(n){return a[n.getDay()]},A:function(n){return o[n.getDay()]},b:function(n){return c[n.getMonth()]},B:function(n){return l[n.getMonth()]},c:f(t),d:function(n,t){return $t(n.getDate(),t,2)},e:function(n,t){return $t(n.getDate(),t,2)},H:function(n,t){return $t(n.getHours(),t,2)},I:function(n,t){return $t(n.getHours()%12||12,t,2)},j:function(n,t){return $t(1+Pt.dayOfYear(n),t,3)},L:function(n,t){return $t(n.getMilliseconds(),t,3)},m:function(n,t){return $t(n.getMonth()+1,t,2)},M:function(n,t){return $t(n.getMinutes(),t,2)},p:function(n){return i[+(n.getHours()>=12)]},S:function(n,t){return $t(n.getSeconds(),t,2)},U:function(n,t){return $t(Pt.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return $t(Pt.mondayOfYear(n),t,2)},x:f(e),X:f(r),y:function(n,t){return $t(n.getFullYear()%100,t,2)},Y:function(n,t){return $t(n.getFullYear()%1e4,t,4)},Z:ce,"%":function(){return"%"}},_={a:function(n,t,e){v.lastIndex=0
var r=v.exec(t.slice(e))
return r?(n.w=d.get(r[0].toLowerCase()),e+r[0].length):-1},A:function(n,t,e){p.lastIndex=0
var r=p.exec(t.slice(e))
return r?(n.w=g.get(r[0].toLowerCase()),e+r[0].length):-1},b:function(n,t,e){M.lastIndex=0
var r=M.exec(t.slice(e))
return r?(n.m=x.get(r[0].toLowerCase()),e+r[0].length):-1},B:function(n,t,e){y.lastIndex=0
var r=y.exec(t.slice(e))
return r?(n.m=m.get(r[0].toLowerCase()),e+r[0].length):-1},c:function(n,t,e){return s(n,b.c.toString(),t,e)},d:re,e:re,H:ue,I:ue,j:ie,L:le,m:ee,M:oe,p:function(n,t,e){var r=h.get(t.slice(e,e+=2).toLowerCase())
return null==r?-1:(n.p=r,e)},S:ae,U:Gt,w:Jt,W:Kt,x:function(n,t,e){return s(n,b.x.toString(),t,e)},X:function(n,t,e){return s(n,b.X.toString(),t,e)},y:ne,Y:Qt,Z:te,"%":fe}
return f}Pt.year=Ht((function(n){return(n=Pt.day(n)).setMonth(0,1),n}),(function(n,t){n.setFullYear(n.getFullYear()+t)}),(function(n){return n.getFullYear()})),Pt.years=Pt.year.range,Pt.years.utc=Pt.year.utc.range,Pt.day=Ht((function(n){var t=new Ut(2e3,0)
return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t}),(function(n,t){n.setDate(n.getDate()+t)}),(function(n){return n.getDate()-1})),Pt.days=Pt.day.range,Pt.days.utc=Pt.day.utc.range,Pt.dayOfYear=function(n){var t=Pt.year(n)
return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach((function(n,t){t=7-t
var e=Pt[n]=Ht((function(n){return(n=Pt.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n}),(function(n,t){n.setDate(n.getDate()+7*Math.floor(t))}),(function(n){var e=Pt.year(n).getDay()
return Math.floor((Pt.dayOfYear(n)+(e+t)%7)/7)-(e!==t)}))
Pt[n+"s"]=e.range,Pt[n+"s"].utc=e.utc.range,Pt[n+"OfYear"]=function(n){var e=Pt.year(n).getDay()
return Math.floor((Pt.dayOfYear(n)+(e+t)%7)/7)}})),Pt.week=Pt.sunday,Pt.weeks=Pt.sunday.range,Pt.weeks.utc=Pt.sunday.utc.range,Pt.weekOfYear=Pt.sundayOfYear
var Zt={"-":"",_:" ",0:"0"},Vt=/^\s*\d+/,Xt=/^%/
function $t(n,t,e){var r=n<0?"-":"",i=(r?-n:n)+"",u=i.length
return r+(u<e?new Array(e-u+1).join(t)+i:i)}function Bt(n){return new RegExp("^(?:"+n.map(u.requote).join("|")+")","i")}function Wt(n){for(var t=new S,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e)
return t}function Jt(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+1))
return r?(n.w=+r[0],e+r[0].length):-1}function Gt(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e))
return r?(n.U=+r[0],e+r[0].length):-1}function Kt(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e))
return r?(n.W=+r[0],e+r[0].length):-1}function Qt(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+4))
return r?(n.y=+r[0],e+r[0].length):-1}function ne(n,t,e){Vt.lastIndex=0
var r,i=Vt.exec(t.slice(e,e+2))
return i?(n.y=(r=+i[0])+(r>68?1900:2e3),e+i[0].length):-1}function te(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function ee(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+2))
return r?(n.m=r[0]-1,e+r[0].length):-1}function re(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+2))
return r?(n.d=+r[0],e+r[0].length):-1}function ie(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+3))
return r?(n.j=+r[0],e+r[0].length):-1}function ue(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+2))
return r?(n.H=+r[0],e+r[0].length):-1}function oe(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+2))
return r?(n.M=+r[0],e+r[0].length):-1}function ae(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+2))
return r?(n.S=+r[0],e+r[0].length):-1}function le(n,t,e){Vt.lastIndex=0
var r=Vt.exec(t.slice(e,e+3))
return r?(n.L=+r[0],e+r[0].length):-1}function ce(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=_(t)/60|0,i=_(t)%60
return e+$t(r,"0",2)+$t(i,"0",2)}function fe(n,t,e){Xt.lastIndex=0
var r=Xt.exec(t.slice(e,e+1))
return r?e+r[0].length:-1}function se(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0])
return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e]
return r[0](t)}}u.locale=function(n){return{numberFormat:Tt(n),timeFormat:Yt(n)}}
var he=u.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})
function pe(){}u.format=he.numberFormat,u.geo={},pe.prototype={s:0,t:0,add:function(n){ve(n,this.t,ge),ve(ge.s,this.s,this),this.s?this.t+=ge.t:this.s=ge.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}}
var ge=new pe
function ve(n,t,e){var r=e.s=n+t,i=r-n,u=r-i
e.t=n-u+(t-i)}function de(n,t){n&&me.hasOwnProperty(n.type)&&me[n.type](n,t)}u.geo.stream=function(n,t){n&&ye.hasOwnProperty(n.type)?ye[n.type](n,t):de(n,t)}
var ye={Feature:function(n,t){de(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)de(e[r].geometry,t)}},me={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){Me(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)Me(e[r],t,0)},Polygon:function(n,t){xe(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)xe(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)de(e[r],t)}}
function Me(n,t,e){var r,i=-1,u=n.length-e
for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2])
t.lineEnd()}function xe(n,t){var e=-1,r=n.length
for(t.polygonStart();++e<r;)Me(n[e],t,1)
t.polygonEnd()}u.geo.area=function(n){return be=0,u.geo.stream(n,Re),be}
var be,_e,we,ke,Se,Ne,Ee,Ae,Ce,ze,Le,qe,Te=new pe,Re={sphere:function(){be+=4*Ln},point:U,lineStart:U,lineEnd:U,polygonStart:function(){Te.reset(),Re.lineStart=De},polygonEnd:function(){var n=2*Te
be+=n<0?4*Ln+n:n,Re.lineStart=Re.lineEnd=Re.point=U}}
function De(){var n,t,e,r,i
function u(n,t){t=t*Dn/2+Ln/4
var u=(n*=Dn)-e,o=u>=0?1:-1,a=o*u,l=Math.cos(t),c=Math.sin(t),f=i*c,s=r*l+f*Math.cos(a),h=f*o*Math.sin(a)
Te.add(Math.atan2(h,s)),e=n,r=l,i=c}Re.point=function(o,a){Re.point=u,e=(n=o)*Dn,r=Math.cos(a=(t=a)*Dn/2+Ln/4),i=Math.sin(a)},Re.lineEnd=function(){u(n,t)}}function Ie(n){var t=n[0],e=n[1],r=Math.cos(e)
return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function Pe(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function Ue(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function je(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Fe(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function He(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])
n[0]/=t,n[1]/=t,n[2]/=t}function Oe(n){return[Math.atan2(n[1],n[0]),Fn(n[2])]}function Ye(n,t){return _(n[0]-t[0])<Cn&&_(n[1]-t[1])<Cn}u.geo.bounds=function(){var n,t,e,r,i,o,a,l,c,f,s,h={point:p,lineStart:v,lineEnd:d,polygonStart:function(){h.point=y,h.lineStart=m,h.lineEnd=M,c=0,Re.polygonStart()},polygonEnd:function(){Re.polygonEnd(),h.point=p,h.lineStart=v,h.lineEnd=d,Te<0?(n=-(e=180),t=-(r=90)):c>Cn?r=90:c<-Cn&&(t=-90),s[0]=n,s[1]=e}}
function p(i,u){f.push(s=[n=i,e=i]),u<t&&(t=u),u>r&&(r=u)}function g(u,o){var a=Ie([u*Dn,o*Dn])
if(l){var c=Ue(l,a),f=Ue([c[1],-c[0],0],c)
He(f),f=Oe(f)
var s=u-i,h=s>0?1:-1,g=f[0]*In*h,v=_(s)>180
if(v^(h*i<g&&g<h*u))(d=f[1]*In)>r&&(r=d)
else if(v^(h*i<(g=(g+360)%360-180)&&g<h*u)){var d;(d=-f[1]*In)<t&&(t=d)}else o<t&&(t=o),o>r&&(r=o)
v?u<i?x(n,u)>x(n,e)&&(e=u):x(u,e)>x(n,e)&&(n=u):e>=n?(u<n&&(n=u),u>e&&(e=u)):u>i?x(n,u)>x(n,e)&&(e=u):x(u,e)>x(n,e)&&(n=u)}else p(u,o)
l=a,i=u}function v(){h.point=g}function d(){s[0]=n,s[1]=e,h.point=p,l=null}function y(n,t){if(l){var e=n-i
c+=_(e)>180?e+(e>0?360:-360):e}else o=n,a=t
Re.point(n,t),g(n,t)}function m(){Re.lineStart()}function M(){y(o,a),Re.lineEnd(),_(c)>Cn&&(n=-(e=180)),s[0]=n,s[1]=e,l=null}function x(n,t){return(t-=n)<0?t+360:t}function b(n,t){return n[0]-t[0]}function w(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}return function(i){if(r=e=-(n=t=Infinity),f=[],u.geo.stream(i,h),c=f.length){f.sort(b)
for(var o=1,a=[v=f[0]];o<c;++o)w((p=f[o])[0],v)||w(p[1],v)?(x(v[0],p[1])>x(v[0],v[1])&&(v[1]=p[1]),x(p[0],v[1])>x(v[0],v[1])&&(v[0]=p[0])):a.push(v=p)
for(var l,c,p,g=-Infinity,v=(o=0,a[c=a.length-1]);o<=c;v=p,++o)p=a[o],(l=x(v[1],p[0]))>g&&(g=l,n=p[0],e=v[1])}return f=s=null,Infinity===n||Infinity===t?[[NaN,NaN],[NaN,NaN]]:[[n,t],[e,r]]}}(),u.geo.centroid=function(n){_e=we=ke=Se=Ne=Ee=Ae=Ce=ze=Le=qe=0,u.geo.stream(n,Ze)
var t=ze,e=Le,r=qe,i=t*t+e*e+r*r
return i<zn&&(t=Ee,e=Ae,r=Ce,we<Cn&&(t=ke,e=Se,r=Ne),(i=t*t+e*e+r*r)<zn)?[NaN,NaN]:[Math.atan2(e,t)*In,Fn(r/Math.sqrt(i))*In]}
var Ze={sphere:U,point:Ve,lineStart:$e,lineEnd:Be,polygonStart:function(){Ze.lineStart=We},polygonEnd:function(){Ze.lineStart=$e}}
function Ve(n,t){n*=Dn
var e=Math.cos(t*=Dn)
Xe(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Xe(n,t,e){++_e,ke+=(n-ke)/_e,Se+=(t-Se)/_e,Ne+=(e-Ne)/_e}function $e(){var n,t,e
function r(r,i){r*=Dn
var u=Math.cos(i*=Dn),o=u*Math.cos(r),a=u*Math.sin(r),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=t*l-e*a)*c+(c=e*o-n*l)*c+(c=n*a-t*o)*c),n*o+t*a+e*l)
we+=c,Ee+=c*(n+(n=o)),Ae+=c*(t+(t=a)),Ce+=c*(e+(e=l)),Xe(n,t,e)}Ze.point=function(i,u){i*=Dn
var o=Math.cos(u*=Dn)
n=o*Math.cos(i),t=o*Math.sin(i),e=Math.sin(u),Ze.point=r,Xe(n,t,e)}}function Be(){Ze.point=Ve}function We(){var n,t,e,r,i
function u(n,t){n*=Dn
var u=Math.cos(t*=Dn),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(t),c=r*l-i*a,f=i*o-e*l,s=e*a-r*o,h=Math.sqrt(c*c+f*f+s*s),p=e*o+r*a+i*l,g=h&&-jn(p)/h,v=Math.atan2(h,p)
ze+=g*c,Le+=g*f,qe+=g*s,we+=v,Ee+=v*(e+(e=o)),Ae+=v*(r+(r=a)),Ce+=v*(i+(i=l)),Xe(e,r,i)}Ze.point=function(o,a){n=o,t=a,Ze.point=u,o*=Dn
var l=Math.cos(a*=Dn)
e=l*Math.cos(o),r=l*Math.sin(o),i=Math.sin(a),Xe(e,r,i)},Ze.lineEnd=function(){u(n,t),Ze.lineEnd=Be,Ze.point=Ve}}function Je(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return(e=t.invert(e,r))&&n.invert(e[0],e[1])}),e}function Ge(){return!0}function Ke(n,t,e,r,i){var u=[],o=[]
if(n.forEach((function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t]
if(Ye(e,r)){i.lineStart()
for(var a=0;a<t;++a)i.point((e=n[a])[0],e[1])
i.lineEnd()}else{var l=new nr(e,n,null,!0),c=new nr(e,null,l,!1)
l.o=c,u.push(l),o.push(c),l=new nr(r,n,null,!1),c=new nr(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}})),o.sort(t),Qe(u),Qe(o),u.length){for(var a=0,l=e,c=o.length;a<c;++a)o[a].e=l=!l
for(var f,s,h=u[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return
f=p.z,i.lineStart()
do{if(p.v=p.o.v=!0,p.e){if(g)for(a=0,c=f.length;a<c;++a)i.point((s=f[a])[0],s[1])
else r(p.x,p.n.x,1,i)
p=p.n}else{if(g)for(a=(f=p.p.z).length-1;a>=0;--a)i.point((s=f[a])[0],s[1])
else r(p.x,p.p.x,-1,i)
p=p.p}f=(p=p.o).z,g=!g}while(!p.v)
i.lineEnd()}}}function Qe(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e
i.n=e=n[0],e.p=i}}function nr(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function tr(n,t,e,r){return function(i,o){var a,l=t(o),c=i.invert(r[0],r[1]),f={point:s,lineStart:p,lineEnd:g,polygonStart:function(){f.point=x,f.lineStart=b,f.lineEnd=_,a=[],v=[]},polygonEnd:function(){f.point=s,f.lineStart=p,f.lineEnd=g,a=u.merge(a)
var n=function(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0
Te.reset()
for(var a=0,l=t.length;a<l;++a){var c=t[a],f=c.length
if(f)for(var s=c[0],h=s[0],p=s[1]/2+Ln/4,g=Math.sin(p),v=Math.cos(p),d=1;;){d===f&&(d=0)
var y=(n=c[d])[0],m=n[1]/2+Ln/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,k=w>Ln,S=g*M
if(Te.add(Math.atan2(S*_*Math.sin(w),v*x+S*Math.cos(w))),u+=k?b+_*qn:b,k^h>=e^y>=e){var N=Ue(Ie(s),Ie(n))
He(N)
var E=Ue(i,N)
He(E)
var A=(k^b>=0?-1:1)*Fn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=k^b>=0?1:-1)}if(!d++)break
h=y,g=M,v=x,s=n}}return(u<-Cn||u<Cn&&Te<-Cn)^1&o}(c,v)
a.length?(M||(o.polygonStart(),M=!0),Ke(a,ir,n,e,o)):n&&(M||(o.polygonStart(),M=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),M&&(o.polygonEnd(),M=!1),a=v=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}}
function s(t,e){var r=i(t,e)
n(t=r[0],e=r[1])&&o.point(t,e)}function h(n,t){var e=i(n,t)
l.point(e[0],e[1])}function p(){f.point=h,l.lineStart()}function g(){f.point=s,l.lineEnd()}var v,d,y=rr(),m=t(y),M=!1
function x(n,t){d.push([n,t])
var e=i(n,t)
m.point(e[0],e[1])}function b(){m.lineStart(),d=[]}function _(){x(d[0][0],d[0][1]),m.lineEnd()
var n,t=m.clean(),e=y.buffer(),r=e.length
if(d.pop(),v.push(d),d=null,r)if(1&t){var i,u=-1
if((r=(n=e[0]).length-1)>0){for(M||(o.polygonStart(),M=!0),o.lineStart();++u<r;)o.point((i=n[u])[0],i[1])
o.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),a.push(e.filter(er))}return f}}function er(n){return n.length>1}function rr(){var n,t=[]
return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:U,buffer:function(){var e=t
return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function ir(n,t){return((n=n.x)[0]<0?n[1]-Rn-Cn:Rn-n[1])-((t=t.x)[0]<0?t[1]-Rn-Cn:Rn-t[1])}var ur=tr(Ge,(function(n){var t,e=NaN,r=NaN,i=NaN
return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Ln:-Ln,l=_(u-e)
_(l-Ln)<Cn?(n.point(e,r=(r+o)/2>0?Rn:-Rn),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Ln&&(_(e-i)<Cn&&(e-=i*Cn),_(u-a)<Cn&&(u-=a*Cn),r=function(n,t,e,r){var i,u,o=Math.sin(n-e)
return _(o)>Cn?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}),(function(n,t,e,r){var i
if(null==n)i=e*Rn,r.point(-Ln,i),r.point(0,i),r.point(Ln,i),r.point(Ln,0),r.point(Ln,-i),r.point(0,-i),r.point(-Ln,-i),r.point(-Ln,0),r.point(-Ln,i)
else if(_(n[0]-t[0])>Cn){var u=n[0]<t[0]?Ln:-Ln
i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}),[-Ln,-Ln/2])
function or(n){var t=Math.cos(n),e=t>0,r=_(t)>Cn
return tr(i,(function(n){var t,a,l,c,f
return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=i(s,h),d=e?v?0:o(s,h):v?o(s+(s<0?Ln:-Ln),h):0
if(!t&&(c=l=v)&&n.lineStart(),v!==l&&(p=u(t,g),(Ye(t,p)||Ye(g,p))&&(g[0]+=Cn,g[1]+=Cn,v=i(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=u(g,t),n.point(p[0],p[1])):(p=u(t,g),n.point(p[0],p[1]),n.lineEnd()),t=p
else if(r&&t&&e^v){var y
d&a||!(y=u(g,t,!0))||(f=0,e?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||t&&Ye(t,g)||n.point(g[0],g[1]),t=g,l=v,a=d},lineEnd:function(){l&&n.lineEnd(),t=null},clean:function(){return f|(c&&l)<<1}}}),Or(n,6*Dn),e?[0,-n]:[-Ln,n-Ln])
function i(n,e){return Math.cos(n)*Math.cos(e)>t}function u(n,e,r){var i=[1,0,0],u=Ue(Ie(n),Ie(e)),o=Pe(u,u),a=u[0],l=o-a*a
if(!l)return!r&&n
var c=t*o/l,f=-t*a/l,s=Ue(i,u),h=Fe(i,c)
je(h,Fe(u,f))
var p=s,g=Pe(h,p),v=Pe(p,p),d=g*g-v*(Pe(h,h)-1)
if(!(d<0)){var y=Math.sqrt(d),m=Fe(p,(-g-y)/v)
if(je(m,h),m=Oe(m),!r)return m
var M,x=n[0],b=e[0],w=n[1],k=e[1]
b<x&&(M=x,x=b,b=M)
var S=b-x,N=_(S-Ln)<Cn
if(!N&&k<w&&(M=w,w=k,k=M),N||S<Cn?N?w+k>0^m[1]<(_(m[0]-x)<Cn?w:k):w<=m[1]&&m[1]<=k:S>Ln^(x<=m[0]&&m[0]<=b)){var E=Fe(p,(-g+y)/v)
return je(E,h),[m,Oe(E)]}}}function o(t,r){var i=e?n:Ln-n,u=0
return t<-i?u|=1:t>i&&(u|=2),r<-i?u|=4:r>i&&(u|=8),u}}function ar(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=0,s=1,h=a.x-l,p=a.y-c
if(u=n-l,h||!(u>0)){if(u/=h,h<0){if(u<f)return
u<s&&(s=u)}else if(h>0){if(u>s)return
u>f&&(f=u)}if(u=e-l,h||!(u<0)){if(u/=h,h<0){if(u>s)return
u>f&&(f=u)}else if(h>0){if(u<f)return
u<s&&(s=u)}if(u=t-c,p||!(u>0)){if(u/=p,p<0){if(u<f)return
u<s&&(s=u)}else if(p>0){if(u>s)return
u>f&&(f=u)}if(u=r-c,p||!(u<0)){if(u/=p,p<0){if(u>s)return
u>f&&(f=u)}else if(p>0){if(u<f)return
u<s&&(s=u)}return f>0&&(i.a={x:l+f*h,y:c+f*p}),s<1&&(i.b={x:l+s*h,y:c+s*p}),i}}}}}}function lr(n,t,e,r){return function(l){var c,f,s,h,p,g,v,d,y,m,M,x=l,b=rr(),_=ar(n,t,e,r),w={point:N,lineStart:function(){w.point=E,f&&f.push(s=[])
m=!0,y=!1,v=d=NaN},lineEnd:function(){c&&(E(h,p),g&&y&&b.rejoin(),c.push(b.buffer()))
w.point=N,y&&l.lineEnd()},polygonStart:function(){l=b,c=[],f=[],M=!0},polygonEnd:function(){l=x,c=u.merge(c)
var t=function(n){for(var t=0,e=f.length,r=n[1],i=0;i<e;++i)for(var u,o=1,a=f[i],l=a.length,c=a[0];o<l;++o)u=a[o],c[1]<=r?u[1]>r&&Un(c,u,n)>0&&++t:u[1]<=r&&Un(c,u,n)<0&&--t,c=u
return 0!==t}([n,r]),e=M&&t,i=c.length;(e||i)&&(l.polygonStart(),e&&(l.lineStart(),k(null,null,1,l),l.lineEnd()),i&&Ke(c,o,t,k,l),l.polygonEnd()),c=f=s=null}}
function k(u,o,l,c){var f=0,s=0
if(null==u||(f=i(u,l))!==(s=i(o,l))||a(u,o)<0^l>0)do{c.point(0===f||3===f?n:e,f>1?r:t)}while((f=(f+l+4)%4)!==s)
else c.point(o[0],o[1])}function S(i,u){return n<=i&&i<=e&&t<=u&&u<=r}function N(n,t){S(n,t)&&l.point(n,t)}function E(n,t){var e=S(n=Math.max(-1e9,Math.min(1e9,n)),t=Math.max(-1e9,Math.min(1e9,t)))
if(f&&s.push([n,t]),m)h=n,p=t,g=e,m=!1,e&&(l.lineStart(),l.point(n,t))
else if(e&&y)l.point(n,t)
else{var r={a:{x:v,y:d},b:{x:n,y:t}}
_(r)?(y||(l.lineStart(),l.point(r.a.x,r.a.y)),l.point(r.b.x,r.b.y),e||l.lineEnd(),M=!1):e&&(l.lineStart(),l.point(n,t),M=!1)}v=n,d=t,y=e}return w}
function i(r,i){return _(r[0]-n)<Cn?i>0?0:3:_(r[0]-e)<Cn?i>0?2:1:_(r[1]-t)<Cn?i>0?1:0:i>0?3:2}function o(n,t){return a(n.x,t.x)}function a(n,t){var e=i(n,1),r=i(t,1)
return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}}function cr(n){var t=0,e=Ln/3,r=Rr(n),i=r(t,e)
return i.parallels=function(n){return arguments.length?r(t=n[0]*Ln/180,e=n[1]*Ln/180):[t/Ln*180,e/Ln*180]},i}function fr(n,t){var e=Math.sin(n),r=(e+Math.sin(t))/2,i=1+e*(2*r-e),u=Math.sqrt(i)/r
function o(n,t){var e=Math.sqrt(i-2*r*Math.sin(t))/r
return[e*Math.sin(n*=r),u-e*Math.cos(n)]}return o.invert=function(n,t){var e=u-t
return[Math.atan2(n,e)/r,Fn((i-(n*n+e*e)*r*r)/(2*r))]},o}u.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),(i=u(n)).valid=!0,i},extent:function(a){return arguments.length?(u=lr(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}}
return o.extent([[0,0],[960,500]])},(u.geo.conicEqualArea=function(){return cr(fr)}).raw=fr,u.geo.albers=function(){return u.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},u.geo.albersUsa=function(){var n,t,e,r,i=u.geo.albers(),o=u.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=u.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,e){n=[t,e]}}
function c(i){var u=i[0],o=i[1]
return n=null,t(u,o),n||(e(u,o),n)||r(u,o),n}return c.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t
return(u>=.12&&u<.234&&r>=-.425&&r<-.214?o:u>=.166&&u<.234&&r>=-.214&&r<-.115?a:i).invert(n)},c.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n)
return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},c.precision=function(n){return arguments.length?(i.precision(n),o.precision(n),a.precision(n),c):i.precision()},c.scale=function(n){return arguments.length?(i.scale(n),o.scale(.35*n),a.scale(n),c.translate(i.translate())):i.scale()},c.translate=function(n){if(!arguments.length)return i.translate()
var u=i.scale(),f=+n[0],s=+n[1]
return t=i.translate(n).clipExtent([[f-.455*u,s-.238*u],[f+.455*u,s+.238*u]]).stream(l).point,e=o.translate([f-.307*u,s+.201*u]).clipExtent([[f-.425*u+Cn,s+.12*u+Cn],[f-.214*u-Cn,s+.234*u-Cn]]).stream(l).point,r=a.translate([f-.205*u,s+.212*u]).clipExtent([[f-.214*u+Cn,s+.166*u+Cn],[f-.115*u-Cn,s+.234*u-Cn]]).stream(l).point,c},c.scale(1070)}
var sr,hr,pr,gr,vr,dr,yr={point:U,lineStart:U,lineEnd:U,polygonStart:function(){hr=0,yr.lineStart=mr},polygonEnd:function(){yr.lineStart=yr.lineEnd=yr.point=U,sr+=_(hr/2)}}
function mr(){var n,t,e,r
function i(n,t){hr+=r*n-e*t,e=n,r=t}yr.point=function(u,o){yr.point=i,n=e=u,t=r=o},yr.lineEnd=function(){i(n,t)}}var Mr={point:function(n,t){n<pr&&(pr=n)
n>vr&&(vr=n)
t<gr&&(gr=t)
t>dr&&(dr=t)},lineStart:U,lineEnd:U,polygonStart:U,polygonEnd:U}
function xr(){var n=br(4.5),t=[],e={point:r,lineStart:function(){e.point=i},lineEnd:o,polygonStart:function(){e.lineEnd=a},polygonEnd:function(){e.lineEnd=o,e.point=r},pointRadius:function(t){return n=br(t),e},result:function(){if(t.length){var n=t.join("")
return t=[],n}}}
function r(e,r){t.push("M",e,",",r,n)}function i(n,r){t.push("M",n,",",r),e.point=u}function u(n,e){t.push("L",n,",",e)}function o(){e.point=r}function a(){t.push("Z")}return e}function br(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}var _r,wr={point:kr,lineStart:Sr,lineEnd:Nr,polygonStart:function(){wr.lineStart=Er},polygonEnd:function(){wr.point=kr,wr.lineStart=Sr,wr.lineEnd=Nr}}
function kr(n,t){ke+=n,Se+=t,++Ne}function Sr(){var n,t
function e(e,r){var i=e-n,u=r-t,o=Math.sqrt(i*i+u*u)
Ee+=o*(n+e)/2,Ae+=o*(t+r)/2,Ce+=o,kr(n=e,t=r)}wr.point=function(r,i){wr.point=e,kr(n=r,t=i)}}function Nr(){wr.point=kr}function Er(){var n,t,e,r
function i(n,t){var i=n-e,u=t-r,o=Math.sqrt(i*i+u*u)
Ee+=o*(e+n)/2,Ae+=o*(r+t)/2,Ce+=o,ze+=(o=r*n-e*t)*(e+n),Le+=o*(r+t),qe+=3*o,kr(e=n,r=t)}wr.point=function(u,o){wr.point=i,kr(n=e=u,t=r=o)},wr.lineEnd=function(){i(n,t)}}function Ar(n){var t=4.5,e={point:r,lineStart:function(){e.point=i},lineEnd:o,polygonStart:function(){e.lineEnd=a},polygonEnd:function(){e.lineEnd=o,e.point=r},pointRadius:function(n){return t=n,e},result:U}
function r(e,r){n.moveTo(e+t,r),n.arc(e,r,t,0,qn)}function i(t,r){n.moveTo(t,r),e.point=u}function u(t,e){n.lineTo(t,e)}function o(){e.point=r}function a(){n.closePath()}return e}function Cr(n){var t=.5,e=Math.cos(30*Dn),r=16
function i(n){return(r?o:u)(n)}function u(t){return qr(t,(function(e,r){e=n(e,r),t.point(e[0],e[1])}))}function o(t){var e,i,u,o,l,c,f,s,h,p,g,v,d={point:y,lineStart:m,lineEnd:x,polygonStart:function(){t.polygonStart(),d.lineStart=b},polygonEnd:function(){t.polygonEnd(),d.lineStart=m}}
function y(e,r){e=n(e,r),t.point(e[0],e[1])}function m(){s=NaN,d.point=M,t.lineStart()}function M(e,i){var u=Ie([e,i]),o=n(e,i)
a(s,h,f,p,g,v,s=o[0],h=o[1],f=e,p=u[0],g=u[1],v=u[2],r,t),t.point(s,h)}function x(){d.point=y,t.lineEnd()}function b(){m(),d.point=_,d.lineEnd=w}function _(n,t){M(e=n,t),i=s,u=h,o=p,l=g,c=v,d.point=M}function w(){a(s,h,f,p,g,v,i,u,e,o,l,c,r,t),d.lineEnd=x,x()}return d}function a(r,i,u,o,l,c,f,s,h,p,g,v,d,y){var m=f-r,M=s-i,x=m*m+M*M
if(x>4*t&&d--){var b=o+p,w=l+g,k=c+v,S=Math.sqrt(b*b+w*w+k*k),N=Math.asin(k/=S),E=_(_(k)-1)<Cn||_(u-h)<Cn?(u+h)/2:Math.atan2(w,b),A=n(E,N),C=A[0],z=A[1],L=C-r,q=z-i,T=M*L-m*q;(T*T/x>t||_((m*L+M*q)/x-.5)>.3||o*p+l*g+c*v<e)&&(a(r,i,u,o,l,c,C,z,E,b/=S,w/=S,k,d,y),y.point(C,z),a(C,z,E,b,w,k,f,s,h,p,g,v,d,y))}}return i.precision=function(n){return arguments.length?(r=(t=n*n)>0&&16,i):Math.sqrt(t)},i}function zr(n){var t=Cr((function(t,e){return n([t*In,e*In])}))
return function(n){return Dr(t(n))}}function Lr(n){this.stream=n}function qr(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function Tr(n){return Rr((function(){return n}))()}function Rr(n){var t,e,r,i,o,a,l=Cr((function(n,e){return[(n=t(n,e))[0]*c+i,o-n[1]*c]})),c=150,f=480,s=250,h=0,p=0,g=0,v=0,d=0,y=ur,m=R,M=null,x=null
function b(n){return[(n=r(n[0]*Dn,n[1]*Dn))[0]*c+i,o-n[1]*c]}function _(n){return(n=r.invert((n[0]-i)/c,(o-n[1])/c))&&[n[0]*In,n[1]*In]}function w(){r=Je(e=Ur(g,v,d),t)
var n=t(h,p)
return i=f-n[0]*c,o=s+n[1]*c,k()}function k(){return a&&(a.valid=!1,a=null),b}return b.stream=function(n){return a&&(a.valid=!1),(a=Dr(y(e,l(m(n))))).valid=!0,a},b.clipAngle=function(n){return arguments.length?(y=null==n?(M=n,ur):or((M=+n)*Dn),k()):M},b.clipExtent=function(n){return arguments.length?(x=n,m=n?lr(n[0][0],n[0][1],n[1][0],n[1][1]):R,k()):x},b.scale=function(n){return arguments.length?(c=+n,w()):c},b.translate=function(n){return arguments.length?(f=+n[0],s=+n[1],w()):[f,s]},b.center=function(n){return arguments.length?(h=n[0]%360*Dn,p=n[1]%360*Dn,w()):[h*In,p*In]},b.rotate=function(n){return arguments.length?(g=n[0]%360*Dn,v=n[1]%360*Dn,d=n.length>2?n[2]%360*Dn:0,w()):[g*In,v*In,d*In]},u.rebind(b,l,"precision"),function(){return t=n.apply(this,arguments),b.invert=t.invert&&_,w()}}function Dr(n){return qr(n,(function(t,e){n.point(t*Dn,e*Dn)}))}function Ir(n,t){return[n,t]}function Pr(n,t){return[n>Ln?n-qn:n<-Ln?n+qn:n,t]}function Ur(n,t,e){return n?t||e?Je(Fr(n),Hr(t,e)):Fr(n):t||e?Hr(t,e):Pr}function jr(n){return function(t,e){return[(t+=n)>Ln?t-qn:t<-Ln?t+qn:t,e]}}function Fr(n){var t=jr(n)
return t.invert=jr(-n),t}function Hr(n,t){var e=Math.cos(n),r=Math.sin(n),i=Math.cos(t),u=Math.sin(t)
function o(n,t){var o=Math.cos(t),a=Math.cos(n)*o,l=Math.sin(n)*o,c=Math.sin(t),f=c*e+a*r
return[Math.atan2(l*i-f*u,a*e-c*r),Fn(f*i+l*u)]}return o.invert=function(n,t){var o=Math.cos(t),a=Math.cos(n)*o,l=Math.sin(n)*o,c=Math.sin(t),f=c*i-l*u
return[Math.atan2(l*i+c*u,a*e+f*r),Fn(f*e-a*r)]},o}function Or(n,t){var e=Math.cos(n),r=Math.sin(n)
return function(i,u,o,a){var l=o*t
null!=i?(i=Yr(e,i),u=Yr(e,u),(o>0?i<u:i>u)&&(i+=o*qn)):(i=n+o*qn,u=n-.5*l)
for(var c,f=i;o>0?f>u:f<u;f-=l)a.point((c=Oe([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function Yr(n,t){var e=Ie(t)
e[0]-=n,He(e)
var r=jn(-e[1])
return((-e[2]<0?-r:r)+2*Math.PI-Cn)%(2*Math.PI)}function Zr(n,t,e){var r=u.range(n,t-Cn,e).concat(t)
return function(n){return r.map((function(t){return[n,t]}))}}function Vr(n,t,e){var r=u.range(n,t-Cn,e).concat(t)
return function(n){return r.map((function(t){return[t,n]}))}}function Xr(n){return n.source}function $r(n){return n.target}u.geo.path=function(){var n,t,e,r,i,o=4.5
function a(n){return n&&("function"==typeof o&&r.pointRadius(+o.apply(this,arguments)),i&&i.valid||(i=e(r)),u.geo.stream(n,i)),r.result()}function l(){return i=null,a}return a.area=function(n){return sr=0,u.geo.stream(n,e(yr)),sr},a.centroid=function(n){return ke=Se=Ne=Ee=Ae=Ce=ze=Le=qe=0,u.geo.stream(n,e(wr)),qe?[ze/qe,Le/qe]:Ce?[Ee/Ce,Ae/Ce]:Ne?[ke/Ne,Se/Ne]:[NaN,NaN]},a.bounds=function(n){return vr=dr=-(pr=gr=Infinity),u.geo.stream(n,e(Mr)),[[pr,gr],[vr,dr]]},a.projection=function(t){return arguments.length?(e=(n=t)?t.stream||zr(t):R,l()):n},a.context=function(n){return arguments.length?(r=null==(t=n)?new xr:new Ar(n),"function"!=typeof o&&r.pointRadius(o),l()):t},a.pointRadius=function(n){return arguments.length?(o="function"==typeof n?n:(r.pointRadius(+n),+n),a):o},a.projection(u.geo.albersUsa()).context(null)},u.geo.transform=function(n){return{stream:function(t){var e=new Lr(t)
for(var r in n)e[r]=n[r]
return e}}},Lr.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},u.geo.projection=Tr,u.geo.projectionMutator=Rr,(u.geo.equirectangular=function(){return Tr(Ir)}).raw=Ir.invert=Ir,u.geo.rotation=function(n){function t(t){return(t=n(t[0]*Dn,t[1]*Dn))[0]*=In,t[1]*=In,t}return n=Ur(n[0]%360*Dn,n[1]*Dn,n.length>2?n[2]*Dn:0),t.invert=function(t){return(t=n.invert(t[0]*Dn,t[1]*Dn))[0]*=In,t[1]*=In,t},t},Pr.invert=Ir,u.geo.circle=function(){var n,t,e=[0,0],r=6
function i(){var n="function"==typeof e?e.apply(this,arguments):e,r=Ur(-n[0]*Dn,-n[1]*Dn,0).invert,i=[]
return t(null,null,1,{point:function(n,t){i.push(n=r(n,t)),n[0]*=In,n[1]*=In}}),{type:"Polygon",coordinates:[i]}}return i.origin=function(n){return arguments.length?(e=n,i):e},i.angle=function(e){return arguments.length?(t=Or((n=+e)*Dn,r*Dn),i):n},i.precision=function(e){return arguments.length?(t=Or(n*Dn,(r=+e)*Dn),i):r},i.angle(90)},u.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Dn,i=n[1]*Dn,u=t[1]*Dn,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u)
return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},u.geo.graticule=function(){var n,t,e,r,i,o,a,l,c,f,s,h,p=10,g=p,v=90,d=360,y=2.5
function m(){return{type:"MultiLineString",coordinates:M()}}function M(){return u.range(Math.ceil(r/v)*v,e,v).map(s).concat(u.range(Math.ceil(l/d)*d,a,d).map(h)).concat(u.range(Math.ceil(t/p)*p,n,p).filter((function(n){return _(n%v)>Cn})).map(c)).concat(u.range(Math.ceil(o/g)*g,i,g).filter((function(n){return _(n%d)>Cn})).map(f))}return m.lines=function(){return M().map((function(n){return{type:"LineString",coordinates:n}}))},m.outline=function(){return{type:"Polygon",coordinates:[s(r).concat(h(a).slice(1),s(e).reverse().slice(1),h(l).reverse().slice(1))]}},m.extent=function(n){return arguments.length?m.majorExtent(n).minorExtent(n):m.minorExtent()},m.majorExtent=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],l=+n[0][1],a=+n[1][1],r>e&&(n=r,r=e,e=n),l>a&&(n=l,l=a,a=n),m.precision(y)):[[r,l],[e,a]]},m.minorExtent=function(e){return arguments.length?(t=+e[0][0],n=+e[1][0],o=+e[0][1],i=+e[1][1],t>n&&(e=t,t=n,n=e),o>i&&(e=o,o=i,i=e),m.precision(y)):[[t,o],[n,i]]},m.step=function(n){return arguments.length?m.majorStep(n).minorStep(n):m.minorStep()},m.majorStep=function(n){return arguments.length?(v=+n[0],d=+n[1],m):[v,d]},m.minorStep=function(n){return arguments.length?(p=+n[0],g=+n[1],m):[p,g]},m.precision=function(u){return arguments.length?(y=+u,c=Zr(o,i,90),f=Vr(t,n,y),s=Zr(l,a,90),h=Vr(r,e,y),m):y},m.majorExtent([[-180,-90+Cn],[180,90-Cn]]).minorExtent([[-180,-80-Cn],[180,80+Cn]])},u.geo.greatArc=function(){var n,t,e=Xr,r=$r
function i(){return{type:"LineString",coordinates:[n||e.apply(this,arguments),t||r.apply(this,arguments)]}}return i.distance=function(){return u.geo.distance(n||e.apply(this,arguments),t||r.apply(this,arguments))},i.source=function(t){return arguments.length?(e=t,n="function"==typeof t?null:t,i):e},i.target=function(n){return arguments.length?(r=n,t="function"==typeof n?null:n,i):r},i.precision=function(){return arguments.length?i:0},i},u.geo.interpolate=function(n,t){return e=n[0]*Dn,r=n[1]*Dn,i=t[0]*Dn,u=t[1]*Dn,o=Math.cos(r),a=Math.sin(r),l=Math.cos(u),c=Math.sin(u),f=o*Math.cos(e),s=o*Math.sin(e),h=l*Math.cos(i),p=l*Math.sin(i),g=2*Math.asin(Math.sqrt(On(u-r)+o*l*On(i-e))),v=1/Math.sin(g),(d=g?function(n){var t=Math.sin(n*=g)*v,e=Math.sin(g-n)*v,r=e*f+t*h,i=e*s+t*p,u=e*a+t*c
return[Math.atan2(i,r)*In,Math.atan2(u,Math.sqrt(r*r+i*i))*In]}:function(){return[e*In,r*In]}).distance=g,d
var e,r,i,u,o,a,l,c,f,s,h,p,g,v,d},u.geo.length=function(n){return _r=0,u.geo.stream(n,Br),_r}
var Br={sphere:U,point:U,lineStart:function(){var n,t,e
function r(r,i){var u=Math.sin(i*=Dn),o=Math.cos(i),a=_((r*=Dn)-n),l=Math.cos(a)
_r+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=e*u-t*o*l)*a),t*u+e*o*l),n=r,t=u,e=o}Br.point=function(i,u){n=i*Dn,t=Math.sin(u*=Dn),e=Math.cos(u),Br.point=r},Br.lineEnd=function(){Br.point=Br.lineEnd=U}},lineEnd:U,polygonStart:U,polygonEnd:U}
function Wr(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i)
return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i)
return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}var Jr=Wr((function(n){return Math.sqrt(2/(1+n))}),(function(n){return 2*Math.asin(n/2)}));(u.geo.azimuthalEqualArea=function(){return Tr(Jr)}).raw=Jr
var Gr=Wr((function(n){var t=Math.acos(n)
return t&&t/Math.sin(t)}),R)
function Kr(n,t){var e=Math.cos(n),r=function(n){return Math.tan(Ln/4+n/2)},i=n===t?Math.sin(n):Math.log(e/Math.cos(t))/Math.log(r(t)/r(n)),u=e*Math.pow(r(n),i)/i
if(!i)return ti
function o(n,t){u>0?t<-Rn+Cn&&(t=-Rn+Cn):t>Rn-Cn&&(t=Rn-Cn)
var e=u/Math.pow(r(t),i)
return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}return o.invert=function(n,t){var e=u-t,r=Pn(i)*Math.sqrt(n*n+e*e)
return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(u/r,1/i))-Rn]},o}function Qr(n,t){var e=Math.cos(n),r=n===t?Math.sin(n):(e-Math.cos(t))/(t-n),i=e/r+n
if(_(r)<Cn)return Ir
function u(n,t){var e=i-t
return[e*Math.sin(r*n),i-e*Math.cos(r*n)]}return u.invert=function(n,t){var e=i-t
return[Math.atan2(n,e)/r,i-Pn(r)*Math.sqrt(n*n+e*e)]},u}(u.geo.azimuthalEquidistant=function(){return Tr(Gr)}).raw=Gr,(u.geo.conicConformal=function(){return cr(Kr)}).raw=Kr,(u.geo.conicEquidistant=function(){return cr(Qr)}).raw=Qr
var ni=Wr((function(n){return 1/n}),Math.atan)
function ti(n,t){return[n,Math.log(Math.tan(Ln/4+t/2))]}function ei(n){var t,e=Tr(n),r=e.scale,i=e.translate,u=e.clipExtent
return e.scale=function(){var n=r.apply(e,arguments)
return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments)
return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments)
if(o===e){if(t=null==n){var a=Ln*r(),l=i()
u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null)
return o},e.clipExtent(null)}(u.geo.gnomonic=function(){return Tr(ni)}).raw=ni,ti.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Rn]},(u.geo.mercator=function(){return ei(ti)}).raw=ti
var ri=Wr((function(){return 1}),Math.asin);(u.geo.orthographic=function(){return Tr(ri)}).raw=ri
var ii=Wr((function(n){return 1/(1+n)}),(function(n){return 2*Math.atan(n)}))
function ui(n,t){return[Math.log(Math.tan(Ln/4+t/2)),-n]}function oi(n){return n[0]}function ai(n){return n[1]}function li(n){for(var t=n.length,e=[0,1],r=2,i=2;i<t;i++){for(;r>1&&Un(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r
e[r++]=i}return e.slice(0,r)}function ci(n,t){return n[0]-t[0]||n[1]-t[1]}(u.geo.stereographic=function(){return Tr(ii)}).raw=ii,ui.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Rn]},(u.geo.transverseMercator=function(){var n=ei(ui),t=n.center,e=n.rotate
return n.center=function(n){return n?t([-n[1],n[0]]):[(n=t())[1],-n[0]]},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):[(n=e())[0],n[1],n[2]-90]},e([0,0,90])}).raw=ui,u.geom={},u.geom.hull=function(n){var t=oi,e=ai
if(arguments.length)return r(n)
function r(n){if(n.length<3)return[]
var r,i=Mt(t),u=Mt(e),o=n.length,a=[],l=[]
for(r=0;r<o;r++)a.push([+i.call(this,n[r],r),+u.call(this,n[r],r),r])
for(a.sort(ci),r=0;r<o;r++)l.push([a[r][0],-a[r][1]])
var c=li(a),f=li(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[]
for(r=c.length-1;r>=0;--r)p.push(n[a[c[r]][2]])
for(r=+s;r<f.length-h;++r)p.push(n[a[f[r]][2]])
return p}return r.x=function(n){return arguments.length?(t=n,r):t},r.y=function(n){return arguments.length?(e=n,r):e},r},u.geom.polygon=function(n){return V(n,fi),n}
var fi=u.geom.polygon.prototype=[]
function si(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function hi(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f)
return[i+h*o,l+h*f]}function pi(n){var t=n[0],e=n[n.length-1]
return!(t[0]-e[0]||t[1]-e[1])}fi.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1]
return.5*i},fi.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1]
for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e
return[u*n,o*n]},fi.clip=function(n){for(var t,e,r,i,u,o,a=pi(n),l=-1,c=this.length-pi(this),f=this[c-1];++l<c;){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1;++e<r;)si(o=t[e],f,i)?(si(u,f,i)||n.push(hi(u,o,f,i)),n.push(o)):si(u,f,i)&&n.push(hi(u,o,f,i)),u=o
a&&n.push(n[0]),f=i}return n}
var gi,vi,di,yi,mi,Mi=[],xi=[]
function bi(){Fi(this),this.edge=this.site=this.circle=null}function _i(n){var t=Mi.pop()||new bi
return t.site=n,t}function wi(n){qi(n),di.remove(n),Mi.push(n),Fi(n)}function ki(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n]
wi(n)
for(var l=u;l.circle&&_(e-l.circle.x)<Cn&&_(r-l.circle.cy)<Cn;)u=l.P,a.unshift(l),wi(l),l=u
a.unshift(l),qi(l)
for(var c=o;c.circle&&_(e-c.circle.x)<Cn&&_(r-c.circle.cy)<Cn;)o=c.N,a.push(c),wi(c),c=o
a.push(c),qi(c)
var f,s=a.length
for(f=1;f<s;++f)c=a[f],l=a[f-1],Pi(c.edge,l.site,c.site,i)
l=a[0],(c=a[s-1]).edge=Di(l.site,c.site,null,i),Li(l),Li(c)}function Si(n){for(var t,e,r,i,u=n.x,o=n.y,a=di._;a;)if((r=Ni(a,o)-u)>Cn)a=a.L
else{if(!((i=u-Ei(a,o))>Cn)){r>-Cn?(t=a.P,e=a):i>-Cn?(t=a,e=a.N):t=e=a
break}if(!a.R){t=a
break}a=a.R}var l=_i(n)
if(di.insert(t,l),t||e){if(t===e)return qi(t),e=_i(t.site),di.insert(l,e),l.edge=e.edge=Di(t.site,l.site),Li(t),void Li(e)
if(e){qi(t),qi(e)
var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s}
Pi(e.edge,c,g,x),l.edge=Di(c,n,null,x),e.edge=Di(n,g,null,x),Li(t),Li(e)}else l.edge=Di(t.site,l.site)}}function Ni(n,t){var e=n.site,r=e.x,i=e.y,u=i-t
if(!u)return r
var o=n.P
if(!o)return-Infinity
var a=(e=o.site).x,l=e.y,c=l-t
if(!c)return a
var f=a-r,s=1/u-1/c,h=f/c
return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ei(n,t){var e=n.N
if(e)return Ni(e,t)
var r=n.site
return r.y===t?r.x:Infinity}function Ai(n){this.site=n,this.edges=[]}function Ci(n,t){return t.angle-n.angle}function zi(){Fi(this),this.x=this.y=this.arc=this.site=this.cy=null}function Li(n){var t=n.P,e=n.N
if(t&&e){var r=t.site,i=n.site,u=e.site
if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=2*(l*(d=u.y-a)-c*f)
if(!(s>=-zn)){var h=l*l+c*c,p=f*f+d*d,g=(d*h-c*p)/s,v=(l*p-f*h)/s,d=v+a,y=xi.pop()||new zi
y.arc=n,y.site=i,y.x=g+o,y.y=d+Math.sqrt(g*g+v*v),y.cy=d,n.circle=y
for(var m=null,M=mi._;M;)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P
break}M=M.L}else{if(!M.R){m=M
break}M=M.R}mi.insert(m,y),m||(yi=y)}}}}function qi(n){var t=n.circle
t&&(t.P||(yi=t.N),mi.remove(t),xi.push(t),Fi(t),n.circle=null)}function Ti(n,t){var e=n.b
if(e)return!0
var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2
if(v===p){if(d<o||d>=a)return
if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l}
e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c}
e={x:d,y:l}}}else if(i=y-(r=(h-g)/(v-p))*d,r<-1||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l}
e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c}
e={x:(l-i)/r,y:l}}else if(p<v){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i}
e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i}
e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ri(n,t){this.l=n,this.r=t,this.a=this.b=null}function Di(n,t,e,r){var i=new Ri(n,t)
return gi.push(i),e&&Pi(i,n,t,e),r&&Pi(i,t,n,r),vi[n.i].edges.push(new Ui(i,n,t)),vi[t.i].edges.push(new Ui(i,t,n)),i}function Ii(n,t,e){var r=new Ri(n,null)
return r.a=t,r.b=e,gi.push(r),r}function Pi(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Ui(n,t,e){var r=n.a,i=n.b
this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function ji(){this._=null}function Fi(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function Hi(n,t){var e=t,r=t.R,i=e.U
i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Oi(n,t){var e=t,r=t.L,i=e.U
i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Yi(n){for(;n.L;)n=n.L
return n}function Zi(n,t){var e,r,i,u=n.sort(Vi).pop()
for(gi=[],vi=new Array(n.length),di=new ji,mi=new ji;;)if(i=yi,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(vi[u.i]=new Ai(u),Si(u),e=u.x,r=u.y),u=n.pop()
else{if(!i)break
ki(i.arc)}t&&(function(n){for(var t,e=gi,r=ar(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)(!Ti(t=e[i],n)||!r(t)||_(t.a.x-t.b.x)<Cn&&_(t.a.y-t.b.y)<Cn)&&(t.a=t.b=null,e.splice(i,1))}(t),function(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=vi,d=v.length;d--;)if((u=v[d])&&u.prepare())for(l=(a=u.edges).length,o=0;o<l;)r=(f=a[o].end()).x,i=f.y,t=(c=a[++o%l].start()).x,e=c.y,(_(r-t)>Cn||_(i-e)>Cn)&&(a.splice(o,0,new Ui(Ii(u.site,f,_(r-s)<Cn&&g-i>Cn?{x:s,y:_(t-s)<Cn?e:g}:_(i-g)<Cn&&h-r>Cn?{x:_(e-g)<Cn?t:h,y:g}:_(r-h)<Cn&&i-p>Cn?{x:h,y:_(t-h)<Cn?e:p}:_(i-p)<Cn&&r-s>Cn?{x:_(e-p)<Cn?t:s,y:p}:null),u.site,null)),++l)}(t))
var o={cells:vi,edges:gi}
return di=mi=gi=vi=null,o}function Vi(n,t){return t.y-n.y||t.x-n.x}Ai.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)(n=t[e].edge).b&&n.a||t.splice(e,1)
return t.sort(Ci),t.length},Ui.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},ji.prototype={insert:function(n,t){var e,r,i
if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L
n.L=t}else n.R=t
e=n}else this._?(n=Yi(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null)
for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)e===(r=e.U).L?(i=r.R)&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(Hi(this,e),e=(n=e).U),e.C=!1,r.C=!0,Oi(this,r)):(i=r.L)&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(Oi(this,e),e=(n=e).U),e.C=!1,r.C=!0,Hi(this,r)),e=n.U
this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null
var t,e,r,i=n.U,u=n.L,o=n.R
if(e=u?o?Yi(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r)if(n&&n.C)n.C=!1
else{do{if(n===this._)break
if(n===i.L){if((t=i.R).C&&(t.C=!1,i.C=!0,Hi(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,Oi(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,Hi(this,i),n=this._
break}}else if((t=i.L).C&&(t.C=!1,i.C=!0,Oi(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,Hi(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,Oi(this,i),n=this._
break}t.C=!0,n=i,i=i.U}while(!n.C)
n&&(n.C=!1)}}},u.geom.voronoi=function(n){var t=oi,e=ai,r=t,i=e,u=Xi
if(n)return o(n)
function o(n){var t=new Array(n.length),e=u[0][0],r=u[0][1],i=u[1][0],o=u[1][1]
return Zi(a(n),u).cells.forEach((function(u,a){var l=u.edges,c=u.site;(t[a]=l.length?l.map((function(n){var t=n.start()
return[t.x,t.y]})):c.x>=e&&c.x<=i&&c.y>=r&&c.y<=o?[[e,o],[i,o],[i,r],[e,r]]:[]).point=n[a]})),t}function a(n){return n.map((function(n,t){return{x:Math.round(r(n,t)/Cn)*Cn,y:Math.round(i(n,t)/Cn)*Cn,i:t}}))}return o.links=function(n){return Zi(a(n)).edges.filter((function(n){return n.l&&n.r})).map((function(t){return{source:n[t.l.i],target:n[t.r.i]}}))},o.triangles=function(n){var t=[]
return Zi(a(n)).cells.forEach((function(e,r){for(var i,u,o,a,l=e.site,c=e.edges.sort(Ci),f=-1,s=c.length,h=c[s-1].edge,p=h.l===l?h.r:h.l;++f<s;)h,i=p,p=(h=c[f].edge).l===l?h.r:h.l,r<i.i&&r<p.i&&(o=i,a=p,((u=l).x-a.x)*(o.y-u.y)-(u.x-o.x)*(a.y-u.y)<0)&&t.push([n[r],n[i.i],n[p.i]])})),t},o.x=function(n){return arguments.length?(r=Mt(t=n),o):t},o.y=function(n){return arguments.length?(i=Mt(e=n),o):e},o.clipExtent=function(n){return arguments.length?(u=null==n?Xi:n,o):u===Xi?null:u},o.size=function(n){return arguments.length?o.clipExtent(n&&[[0,0],n]):u===Xi?null:u&&u[1]},o}
var Xi=[[-1e6,-1e6],[1e6,1e6]]
function $i(n){return n.x}function Bi(n){return n.y}function Wi(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes
l[0]&&Wi(n,l[0],e,r,o,a),l[1]&&Wi(n,l[1],o,r,i,a),l[2]&&Wi(n,l[2],e,a,o,u),l[3]&&Wi(n,l[3],o,a,i,u)}}function Ji(n,t,e,r,i,u,o){var a,l=Infinity
return function n(c,f,s,h,p){if(!(f>u||s>o||h<r||p<i)){if(g=c.point){var g,v=t-c.x,d=e-c.y,y=v*v+d*d
if(y<l){var m=Math.sqrt(l=y)
r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=c.nodes,x=.5*(f+h),b=.5*(s+p),_=(e>=b)<<1|t>=x,w=_+4;_<w;++_)if(c=M[3&_])switch(3&_){case 0:n(c,f,s,x,b)
break
case 1:n(c,x,s,h,b)
break
case 2:n(c,f,b,x,p)
break
case 3:n(c,x,b,h,p)}}}(n,r,i,u,o),a}function Gi(n,t){n=u.rgb(n),t=u.rgb(t)
var e=n.r,r=n.g,i=n.b,o=t.r-e,a=t.g-r,l=t.b-i
return function(n){return"#"+ht(Math.round(e+o*n))+ht(Math.round(r+a*n))+ht(Math.round(i+l*n))}}function Ki(n,t){var e,r={},i={}
for(e in n)e in t?r[e]=ru(n[e],t[e]):i[e]=n[e]
for(e in t)e in n||(i[e]=t[e])
return function(n){for(e in r)i[e]=r[e](n)
return i}}function Qi(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function nu(n,t){var e,r,i,u=tu.lastIndex=eu.lastIndex=0,o=-1,a=[],l=[]
for(n+="",t+="";(e=tu.exec(n))&&(r=eu.exec(t));)(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:Qi(e,r)})),u=eu.lastIndex
return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;r<t;++r)a[(e=l[r]).i]=e.x(n)
return a.join("")})}u.geom.delaunay=function(n){return u.geom.voronoi().triangles(n)},u.geom.quadtree=function(n,t,e,r,i){var u,o=oi,a=ai
if(u=arguments.length)return o=$i,a=Bi,3===u&&(i=e,r=t,e=t=0),l(n)
function l(n){var l,c,f,s,h,p,g,v,d,y=Mt(o),m=Mt(a)
if(null!=t)p=t,g=e,v=r,d=i
else if(v=d=-(p=g=Infinity),c=[],f=[],h=n.length,u)for(s=0;s<h;++s)(l=n[s]).x<p&&(p=l.x),l.y<g&&(g=l.y),l.x>v&&(v=l.x),l.y>d&&(d=l.y),c.push(l.x),f.push(l.y)
else for(s=0;s<h;++s){var M=+y(l=n[s],s),x=+m(l,s)
M<p&&(p=M),x<g&&(g=x),M>v&&(v=M),x>d&&(d=x),c.push(M),f.push(x)}var b=v-p,w=d-g
function k(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,c=n.y
if(null!=l)if(_(l-e)+_(c-r)<.01)S(n,t,e,r,i,u,o,a)
else{var f=n.point
n.x=n.y=n.point=null,S(n,f,l,c,i,u,o,a),S(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else S(n,t,e,r,i,u,o,a)}function S(n,t,e,r,i,u,o,a){var l=.5*(i+o),c=.5*(u+a),f=e>=l,s=r>=c,h=s<<1|f
n.leaf=!1,f?i=l:o=l,s?u=c:a=c,k(n=n.nodes[h]||(n.nodes[h]={leaf:!0,nodes:[],point:null,x:null,y:null}),t,e,r,i,u,o,a)}b>w?d=g+b:v=p+w
var N={leaf:!0,nodes:[],point:null,x:null,y:null,add:function(n){k(N,n,+y(n,++s),+m(n,s),p,g,v,d)},visit:function(n){Wi(n,N,p,g,v,d)},find:function(n){return Ji(N,n[0],n[1],p,g,v,d)}}
if(s=-1,null==t){for(;++s<h;)k(N,n[s],c[s],f[s],p,g,v,d);--s}else n.forEach(N.add)
return c=f=n=l=null,N}return l.x=function(n){return arguments.length?(o=n,l):o},l.y=function(n){return arguments.length?(a=n,l):a},l.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),l):null==t?null:[[t,e],[r,i]]},l.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),l):null==t?null:[r-t,i-e]},l},u.interpolateRgb=Gi,u.interpolateObject=Ki,u.interpolateNumber=Qi,u.interpolateString=nu
var tu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,eu=new RegExp(tu.source,"g")
function ru(n,t){for(var e,r=u.interpolators.length;--r>=0&&!(e=u.interpolators[r](n,t)););return e}function iu(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length)
for(e=0;e<a;++e)r.push(ru(n[e],t[e]))
for(;e<u;++e)i[e]=n[e]
for(;e<o;++e)i[e]=t[e]
return function(n){for(e=0;e<a;++e)i[e]=r[e](n)
return i}}u.interpolate=ru,u.interpolators=[function(n,t){var e=typeof t
return("string"===e?mt.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?Gi:nu:t instanceof $n?Gi:Array.isArray(t)?iu:"object"===e&&isNaN(t)?Ki:Qi)(n,t)}],u.interpolateArray=iu
var uu=function(){return R},ou=u.map({linear:uu,poly:function(n){return function(t){return Math.pow(t,n)}},quad:function(){return su},cubic:function(){return hu},sin:function(){return gu},exp:function(){return vu},circle:function(){return du},elastic:function(n,t){var e
arguments.length<2&&(t=.45)
arguments.length?e=t/qn*Math.asin(1/n):(n=1,e=t/4)
return function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*qn/t)}},back:function(n){n||(n=1.70158)
return function(t){return t*t*((n+1)*t-n)}},bounce:function(){return yu}}),au=u.map({in:R,out:cu,"in-out":fu,"out-in":function(n){return fu(cu(n))}})
function lu(n){return function(t){return t<=0?0:t>=1?1:n(t)}}function cu(n){return function(t){return 1-n(1-t)}}function fu(n){return function(t){return.5*(t<.5?n(2*t):2-n(2-2*t))}}function su(n){return n*n}function hu(n){return n*n*n}function pu(n){if(n<=0)return 0
if(n>=1)return 1
var t=n*n,e=t*n
return 4*(n<.5?e:3*(n-t)+e-.75)}function gu(n){return 1-Math.cos(n*Rn)}function vu(n){return Math.pow(2,10*(n-1))}function du(n){return 1-Math.sqrt(1-n*n)}function yu(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function mu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Mu(n){var t,e,r,i=[n.a,n.b],u=[n.c,n.d],o=bu(i),a=xu(i,u),l=bu(((t=u)[0]+=(r=-a)*(e=i)[0],t[1]+=r*e[1],t))||0
i[0]*u[1]<u[0]*i[1]&&(i[0]*=-1,i[1]*=-1,o*=-1,a*=-1),this.rotate=(o?Math.atan2(i[1],i[0]):Math.atan2(-u[0],u[1]))*In,this.translate=[n.e,n.f],this.scale=[o,l],this.skew=l?Math.atan2(a,l)*In:0}function xu(n,t){return n[0]*t[0]+n[1]*t[1]}function bu(n){var t=Math.sqrt(xu(n,n))
return t&&(n[0]/=t,n[1]/=t),t}u.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in"
return e=ou.get(e)||uu,lu((r=au.get(r)||R)(e.apply(null,o.call(arguments,1))))},u.interpolateHcl=function(n,t){n=u.hcl(n),t=u.hcl(t)
var e=n.h,r=n.c,i=n.l,o=t.h-e,a=t.c-r,l=t.l-i
isNaN(a)&&(a=0,r=isNaN(r)?t.c:r)
isNaN(o)?(o=0,e=isNaN(e)?t.h:e):o>180?o-=360:o<-180&&(o+=360)
return function(n){return Qn(e+o*n,r+a*n,i+l*n)+""}},u.interpolateHsl=function(n,t){n=u.hsl(n),t=u.hsl(t)
var e=n.h,r=n.s,i=n.l,o=t.h-e,a=t.s-r,l=t.l-i
isNaN(a)&&(a=0,r=isNaN(r)?t.s:r)
isNaN(o)?(o=0,e=isNaN(e)?t.h:e):o>180?o-=360:o<-180&&(o+=360)
return function(n){return Jn(e+o*n,r+a*n,i+l*n)+""}},u.interpolateLab=function(n,t){n=u.lab(n),t=u.lab(t)
var e=n.l,r=n.a,i=n.b,o=t.l-e,a=t.a-r,l=t.b-i
return function(n){return rt(e+o*n,r+a*n,i+l*n)+""}},u.interpolateRound=mu,u.transform=function(n){var t=l.createElementNS(u.ns.prefix.svg,"g")
return(u.transform=function(n){if(null!=n){t.setAttribute("transform",n)
var e=t.transform.baseVal.consolidate()}return new Mu(e?e.matrix:_u)})(n)},Mu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"}
var _u={a:1,b:0,c:0,d:1,e:0,f:0}
function wu(n){return n.length?n.pop()+",":""}function ku(n,t){var e=[],r=[]
return n=u.transform(n),t=u.transform(t),function(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")")
r.push({i:i-4,x:Qi(n[0],t[0])},{i:i-2,x:Qi(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}(n.translate,t.translate,e,r),function(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(wu(e)+"rotate(",null,")")-2,x:Qi(n,t)})):t&&e.push(wu(e)+"rotate("+t+")")}(n.rotate,t.rotate,e,r),function(n,t,e,r){n!==t?r.push({i:e.push(wu(e)+"skewX(",null,")")-2,x:Qi(n,t)}):t&&e.push(wu(e)+"skewX("+t+")")}(n.skew,t.skew,e,r),function(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(wu(e)+"scale(",null,",",null,")")
r.push({i:i-4,x:Qi(n[0],t[0])},{i:i-2,x:Qi(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(wu(e)+"scale("+t+")")}(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length;++i<u;)e[(t=r[i]).i]=t.x(n)
return e.join("")}}function Su(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Nu(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Eu(n){for(var t=n.source,e=n.target,r=function(n,t){if(n===t)return n
var e=Au(n),r=Au(t),i=e.pop(),u=r.pop(),o=null
for(;i===u;)o=i,i=e.pop(),u=r.pop()
return o}(t,e),i=[t];t!==r;)t=t.parent,i.push(t)
for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent
return i}function Au(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent
return t.push(n),t}function Cu(n){n.fixed|=2}function zu(n){n.fixed&=-7}function Lu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function qu(n){n.fixed&=-5}u.interpolateTransform=ku,u.layout={},u.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Eu(n[e]))
return t}},u.layout.chord=function(){var n,t,e,r,i,o,a,l={},c=0
function f(){var l,f,h,p,g,v={},d=[],y=u.range(r),m=[]
for(n=[],t=[],l=0,p=-1;++p<r;){for(f=0,g=-1;++g<r;)f+=e[p][g]
d.push(f),m.push(u.range(r)),l+=f}for(i&&y.sort((function(n,t){return i(d[n],d[t])})),o&&m.forEach((function(n,t){n.sort((function(n,r){return o(e[t][n],e[t][r])}))})),l=(qn-c*r)/l,f=0,p=-1;++p<r;){for(h=f,g=-1;++g<r;){var M=y[p],x=m[M][g],b=e[M][x],_=f,w=f+=b*l
v[M+"-"+x]={index:M,subindex:x,startAngle:_,endAngle:w,value:b}}t[M]={index:M,startAngle:h,endAngle:f,value:d[M]},f+=c}for(p=-1;++p<r;)for(g=p-1;++g<r;){var k=v[p+"-"+g],S=v[g+"-"+p];(k.value||S.value)&&n.push(k.value<S.value?{source:S,target:k}:{source:k,target:S})}a&&s()}function s(){n.sort((function(n,t){return a((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)}))}return l.matrix=function(i){return arguments.length?(r=(e=i)&&e.length,n=t=null,l):e},l.padding=function(e){return arguments.length?(c=e,n=t=null,l):c},l.sortGroups=function(e){return arguments.length?(i=e,n=t=null,l):i},l.sortSubgroups=function(t){return arguments.length?(o=t,n=null,l):o},l.sortChords=function(t){return arguments.length?(a=t,n&&s(),l):a},l.chords=function(){return n||f(),n},l.groups=function(){return t||f(),t},l},u.layout.force=function(){var n,t,e,r,i,o,a={},l=u.dispatch("start","tick","end"),c=[1,1],f=.9,s=Tu,h=Ru,p=-30,g=Du,v=.1,d=.64,y=[],m=[]
function M(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o
if(a*a/d<l){if(l<g){var c=t.charge/l
n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&l<g){c=t.pointCharge/l
n.px-=u*c,n.py-=o*c}}return!t.charge}}function x(n){n.px=u.event.x,n.py=u.event.y,a.resume()}return a.tick=function(){if((e*=.99)<.005)return n=null,l.end({type:"end",alpha:e=0}),!0
var t,a,s,h,g,d,x,b,_,w=y.length,k=m.length
for(a=0;a<k;++a)h=(s=m[a]).source,(d=(b=(g=s.target).x-h.x)*b+(_=g.y-h.y)*_)&&(b*=d=e*i[a]*((d=Math.sqrt(d))-r[a])/d,_*=d,g.x-=b*(x=h.weight+g.weight?h.weight/(h.weight+g.weight):.5),g.y-=_*x,h.x+=b*(x=1-x),h.y+=_*x)
if((x=e*v)&&(b=c[0]/2,_=c[1]/2,a=-1,x))for(;++a<w;)(s=y[a]).x+=(b-s.x)*x,s.y+=(_-s.y)*x
if(p)for(!function n(t,e,r){var i=0,u=0
if(t.charge=0,!t.leaf)for(var o,a=t.nodes,l=a.length,c=-1;++c<l;)null!=(o=a[c])&&(n(o,e,r),t.charge+=o.charge,i+=o.charge*o.cx,u+=o.charge*o.cy)
if(t.point){t.leaf||(t.point.x+=Math.random()-.5,t.point.y+=Math.random()-.5)
var f=e*r[t.point.index]
t.charge+=t.pointCharge=f,i+=f*t.point.x,u+=f*t.point.y}t.cx=i/t.charge,t.cy=u/t.charge}(t=u.geom.quadtree(y),e,o),a=-1;++a<w;)(s=y[a]).fixed||t.visit(M(s))
for(a=-1;++a<w;)(s=y[a]).fixed?(s.x=s.px,s.y=s.py):(s.x-=(s.px-(s.px=s.x))*f,s.y-=(s.py-(s.py=s.y))*f)
l.tick({type:"tick",alpha:e})},a.nodes=function(n){return arguments.length?(y=n,a):y},a.links=function(n){return arguments.length?(m=n,a):m},a.size=function(n){return arguments.length?(c=n,a):c},a.linkDistance=function(n){return arguments.length?(s="function"==typeof n?n:+n,a):s},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(f=+n,a):f},a.charge=function(n){return arguments.length?(p="function"==typeof n?n:+n,a):p},a.chargeDistance=function(n){return arguments.length?(g=n*n,a):Math.sqrt(g)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(t){return arguments.length?(t=+t,e?t>0?e=t:(n.c=null,n.t=NaN,n=null,l.end({type:"end",alpha:e=0})):t>0&&(l.start({type:"start",alpha:e=t}),n=Et(a.tick)),a):e},a.start=function(){var n,t,e,u=y.length,l=m.length,f=c[0],g=c[1]
for(n=0;n<u;++n)(e=y[n]).index=n,e.weight=0
for(n=0;n<l;++n)"number"==typeof(e=m[n]).source&&(e.source=y[e.source]),"number"==typeof e.target&&(e.target=y[e.target]),++e.source.weight,++e.target.weight
for(n=0;n<u;++n)e=y[n],isNaN(e.x)&&(e.x=v("x",f)),isNaN(e.y)&&(e.y=v("y",g)),isNaN(e.px)&&(e.px=e.x),isNaN(e.py)&&(e.py=e.y)
if(r=[],"function"==typeof s)for(n=0;n<l;++n)r[n]=+s.call(this,m[n],n)
else for(n=0;n<l;++n)r[n]=s
if(i=[],"function"==typeof h)for(n=0;n<l;++n)i[n]=+h.call(this,m[n],n)
else for(n=0;n<l;++n)i[n]=h
if(o=[],"function"==typeof p)for(n=0;n<u;++n)o[n]=+p.call(this,y[n],n)
else for(n=0;n<u;++n)o[n]=p
function v(e,r){if(!t){for(t=new Array(u),c=0;c<u;++c)t[c]=[]
for(c=0;c<l;++c){var i=m[c]
t[i.source.index].push(i.target),t[i.target.index].push(i.source)}}for(var o,a=t[n],c=-1,f=a.length;++c<f;)if(!isNaN(o=a[c][e]))return o
return Math.random()*r}return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){if(t||(t=u.behavior.drag().origin(R).on("dragstart.force",Cu).on("drag.force",x).on("dragend.force",zu)),!arguments.length)return t
this.on("mouseover.force",Lu).on("mouseout.force",qu).call(t)},u.rebind(a,l,"on")}
var Tu=20,Ru=1,Du=Infinity
function Iu(n,t){return u.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Ou,n}function Pu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function Uu(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1;++o<i;)e.push(u[o])
for(;null!=(n=r.pop());)t(n)}function ju(n){return n.children}function Fu(n){return n.value}function Hu(n,t){return t.value-n.value}function Ou(n){return u.merge(n.map((function(n){return(n.children||[]).map((function(t){return{source:n,target:t}}))})))}u.layout.hierarchy=function(){var n=Hu,t=ju,e=Fu
function r(i){var u,o=[i],a=[]
for(i.depth=0;null!=(u=o.pop());)if(a.push(u),(c=t.call(r,u,u.depth))&&(l=c.length)){for(var l,c,f;--l>=0;)o.push(f=c[l]),f.parent=u,f.depth=u.depth+1
e&&(u.value=0),u.children=c}else e&&(u.value=+e.call(r,u,u.depth)||0),delete u.children
return Uu(i,(function(t){var r,i
n&&(r=t.children)&&r.sort(n),e&&(i=t.parent)&&(i.value+=t.value)})),a}return r.sort=function(t){return arguments.length?(n=t,r):n},r.children=function(n){return arguments.length?(t=n,r):t},r.value=function(n){return arguments.length?(e=n,r):e},r.revalue=function(n){return e&&(Pu(n,(function(n){n.children&&(n.value=0)})),Uu(n,(function(n){var t
n.children||(n.value=+e.call(r,n,n.depth)||0),(t=n.parent)&&(t.value+=n.value)}))),n},r},u.layout.partition=function(){var n=u.layout.hierarchy(),t=[1,1]
function e(e,r){var i=n.call(this,e,r)
return function n(t,e,r,i){var u=t.children
if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1
for(r=t.value?r/t.value:0;++c<o;)n(a=u[c],e,l=a.value*r,i),e+=l}}(i[0],0,t[0],t[1]/function n(t){var e=t.children,r=0
if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,n(e[u]))
return 1+r}(i[0])),i}return e.size=function(n){return arguments.length?(t=n,e):t},Iu(e,n)},u.layout.pie=function(){var n=Number,t=Yu,e=0,r=qn,i=0
function o(a){var l,c=a.length,f=a.map((function(t,e){return+n.call(o,t,e)})),s=+("function"==typeof e?e.apply(this,arguments):e),h=("function"==typeof r?r.apply(this,arguments):r)-s,p=Math.min(Math.abs(h)/c,+("function"==typeof i?i.apply(this,arguments):i)),g=p*(h<0?-1:1),v=u.sum(f),d=v?(h-c*g)/v:0,y=u.range(c),m=[]
return null!=t&&y.sort(t===Yu?function(n,t){return f[t]-f[n]}:function(n,e){return t(a[n],a[e])}),y.forEach((function(n){m[n]={data:a[n],value:l=f[n],startAngle:s,endAngle:s+=l*d+g,padAngle:p}})),m}return o.value=function(t){return arguments.length?(n=t,o):n},o.sort=function(n){return arguments.length?(t=n,o):t},o.startAngle=function(n){return arguments.length?(e=n,o):e},o.endAngle=function(n){return arguments.length?(r=n,o):r},o.padAngle=function(n){return arguments.length?(i=n,o):i},o}
var Yu={}
function Zu(n){return n.x}function Vu(n){return n.y}function Xu(n,t,e){n.y0=t,n.y=e}u.layout.stack=function(){var n=R,t=Wu,e=Ju,r=Xu,i=Zu,o=Vu
function a(l,c){if(!(p=l.length))return l
var f=l.map((function(t,e){return n.call(a,t,e)})),s=f.map((function(n){return n.map((function(n,t){return[i.call(a,n,t),o.call(a,n,t)]}))})),h=t.call(a,s,c)
f=u.permute(f,h),s=u.permute(s,h)
var p,g,v,d,y=e.call(a,s,c),m=f[0].length
for(v=0;v<m;++v)for(r.call(a,f[0][v],d=y[v],s[0][v][1]),g=1;g<p;++g)r.call(a,f[g][v],d+=s[g-1][v][1],s[g][v][1])
return l}return a.values=function(t){return arguments.length?(n=t,a):n},a.order=function(n){return arguments.length?(t="function"==typeof n?n:$u.get(n)||Wu,a):t},a.offset=function(n){return arguments.length?(e="function"==typeof n?n:Bu.get(n)||Ju,a):e},a.x=function(n){return arguments.length?(i=n,a):i},a.y=function(n){return arguments.length?(o=n,a):o},a.out=function(n){return arguments.length?(r=n,a):r},a}
var $u=u.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(Gu),o=n.map(Ku),a=u.range(r).sort((function(n,t){return i[n]-i[t]})),l=0,c=0,f=[],s=[]
for(t=0;t<r;++t)e=a[t],l<c?(l+=o[e],f.push(e)):(c+=o[e],s.push(e))
return s.reverse().concat(f)},reverse:function(n){return u.range(n.length).reverse()},default:Wu}),Bu=u.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[]
for(e=0;e<u;++e){for(t=0,r=0;t<i;t++)r+=n[t][e][1]
r>a&&(a=r),o.push(r)}for(e=0;e<u;++e)l[e]=(a-o[e])/2
return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[]
for(p[0]=l=c=0,e=1;e<h;++e){for(t=0,i=0;t<f;++t)i+=n[t][e][1]
for(t=0,u=0,a=s[e][0]-s[e-1][0];t<f;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);r<t;++r)o+=(n[r][e][1]-n[r][e-1][1])/a
u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,l<c&&(c=l)}for(e=0;e<h;++e)p[e]-=c
return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[]
for(e=0;e<u;++e){for(t=0,r=0;t<i;t++)r+=n[t][e][1]
if(r)for(t=0;t<i;t++)n[t][e][1]/=r
else for(t=0;t<i;t++)n[t][e][1]=o}for(e=0;e<u;++e)a[e]=0
return a},zero:Ju})
function Wu(n){return u.range(n.length)}function Ju(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0
return r}function Gu(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;e<u;++e)(t=n[e][1])>i&&(r=e,i=t)
return r}function Ku(n){return n.reduce(Qu,0)}function Qu(n,t){return n+t[1]}function no(n,t){return to(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function to(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r
return u}function eo(n){return[u.min(n),u.max(n)]}function ro(n,t){return n.value-t.value}function io(n,t){var e=n._pack_next
n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function uo(n,t){n._pack_next=t,t._pack_prev=n}function oo(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r
return.999*i*i>e*e+r*r}function ao(n){if((t=n.children)&&(l=t.length)){var t,e,r,i,u,o,a,l,c=Infinity,f=-Infinity,s=Infinity,h=-Infinity
if(t.forEach(lo),(e=t[0]).x=-e.r,e.y=0,M(e),l>1&&((r=t[1]).x=r.r,r.y=0,M(r),l>2))for(fo(e,r,i=t[2]),M(i),io(e,i),e._pack_prev=i,io(i,r),r=e._pack_next,u=3;u<l;u++){fo(e,r,i=t[u])
var p=0,g=1,v=1
for(o=r._pack_next;o!==r;o=o._pack_next,g++)if(oo(o,i)){p=1
break}if(1==p)for(a=e._pack_prev;a!==o._pack_prev&&!oo(a,i);a=a._pack_prev,v++);p?(g<v||g==v&&r.r<e.r?uo(e,r=o):uo(e=a,r),u--):(io(e,i),r=i,M(i))}var d=(c+f)/2,y=(s+h)/2,m=0
for(u=0;u<l;u++)(i=t[u]).x-=d,i.y-=y,m=Math.max(m,i.r+Math.sqrt(i.x*i.x+i.y*i.y))
n.r=m,t.forEach(co)}function M(n){c=Math.min(n.x-n.r,c),f=Math.max(n.x+n.r,f),s=Math.min(n.y-n.r,s),h=Math.max(n.y+n.r,h)}}function lo(n){n._pack_next=n._pack_prev=n}function co(n){delete n._pack_next,delete n._pack_prev}function fo(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y
if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u,l=.5+((r*=r)-(o*=o))/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a)
e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function so(n,t){return n.parent==t.parent?1:2}function ho(n){var t=n.children
return t.length?t[0]:n.t}function po(n){var t,e=n.children
return(t=e.length)?e[t-1]:n.t}function go(n,t,e){var r=e/(t.i-n.i)
t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function vo(n,t,e){return n.a.parent===t.parent?n.a:e}function yo(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function mo(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2]
return i<0&&(e+=i/2,i=0),u<0&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Mo(n){var t=n[0],e=n[n.length-1]
return t<e?[t,e]:[e,t]}function xo(n){return n.rangeExtent?n.rangeExtent():Mo(n.range())}function bo(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1])
return function(n){return u(i(n))}}function _o(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i]
return o<u&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function wo(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ko}u.layout.histogram=function(){var n=!0,t=Number,e=eo,r=no
function i(i,o){for(var a,l,c=[],f=i.map(t,this),s=e.call(this,f,o),h=r.call(this,s,f,o),p=(o=-1,f.length),g=h.length-1,v=n?1:1/p;++o<g;)(a=c[o]=[]).dx=h[o+1]-(a.x=h[o]),a.y=0
if(g>0)for(o=-1;++o<p;)(l=f[o])>=s[0]&&l<=s[1]&&((a=c[u.bisect(h,l,1,g)-1]).y+=v,a.push(i[o]))
return c}return i.value=function(n){return arguments.length?(t=n,i):t},i.range=function(n){return arguments.length?(e=Mt(n),i):e},i.bins=function(n){return arguments.length?(r="number"==typeof n?function(t){return to(t,n)}:Mt(n),i):r},i.frequency=function(t){return arguments.length?(n=!!t,i):n},i},u.layout.pack=function(){var n,t=u.layout.hierarchy().sort(ro),e=0,r=[1,1]
function i(i,u){var o=t.call(this,i,u),a=o[0],l=r[0],c=r[1],f=null==n?Math.sqrt:"function"==typeof n?n:function(){return n}
if(a.x=a.y=0,Uu(a,(function(n){n.r=+f(n.value)})),Uu(a,ao),e){var s=e*(n?1:Math.max(2*a.r/l,2*a.r/c))/2
Uu(a,(function(n){n.r+=s})),Uu(a,ao),Uu(a,(function(n){n.r-=s}))}return function n(t,e,r,i){var u=t.children
if(t.x=e+=i*t.x,t.y=r+=i*t.y,t.r*=i,u)for(var o=-1,a=u.length;++o<a;)n(u[o],e,r,i)}(a,l/2,c/2,n?1:1/Math.max(2*a.r/l,2*a.r/c)),o}return i.size=function(n){return arguments.length?(r=n,i):r},i.radius=function(t){return arguments.length?(n=null==t||"function"==typeof t?t:+t,i):n},i.padding=function(n){return arguments.length?(e=+n,i):e},Iu(i,t)},u.layout.tree=function(){var n=u.layout.hierarchy().sort(null).value(null),t=so,e=[1,1],r=null
function i(i,u){var c=n.call(this,i,u),f=c[0],s=function(n){var t,e={A:null,children:[n]},r=[e]
for(;null!=(t=r.pop());)for(var i,u=t.children,o=0,a=u.length;o<a;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i)
return e.children[0]}(f)
if(Uu(s,o),s.parent.m=-s.z,Pu(s,a),r)Pu(f,l)
else{var h=f,p=f,g=f
Pu(f,(function(n){n.x<h.x&&(h=n),n.x>p.x&&(p=n),n.depth>g.depth&&(g=n)}))
var v=t(h,p)/2-h.x,d=e[0]/(p.x+t(p,h)/2+v),y=e[1]/(g.depth||1)
Pu(f,(function(n){n.x=(n.x+v)*d,n.y=n.depth*y}))}return c}function o(n){var e=n.children,r=n.parent.children,i=n.i?r[n.i-1]:null
if(e.length){!function(n){var t,e=0,r=0,i=n.children,u=i.length
for(;--u>=0;)(t=i[u]).z+=e,t.m+=e,e+=t.s+(r+=t.c)}(n)
var u=(e[0].z+e[e.length-1].z)/2
i?(n.z=i.z+t(n._,i._),n.m=n.z-u):n.z=u}else i&&(n.z=i.z+t(n._,i._))
n.parent.A=function(n,e,r){if(e){for(var i,u=n,o=n,a=e,l=u.parent.children[0],c=u.m,f=o.m,s=a.m,h=l.m;a=po(a),u=ho(u),a&&u;)l=ho(l),(o=po(o)).a=n,(i=a.z+s-u.z-c+t(a._,u._))>0&&(go(vo(a,n,r),n,i),c+=i,f+=i),s+=a.m,c+=u.m,h+=l.m,f+=o.m
a&&!po(o)&&(o.t=a,o.m+=s-f),u&&!ho(l)&&(l.t=u,l.m+=c-h,r=n)}return r}(n,i,n.parent.A||r[0])}function a(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function l(n){n.x*=e[0],n.y=n.depth*e[1]}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(n){return arguments.length?(r=null==(e=n)?l:null,i):r?null:e},i.nodeSize=function(n){return arguments.length?(r=null==(e=n)?null:l,i):r?e:null},Iu(i,n)},u.layout.cluster=function(){var n=u.layout.hierarchy().sort(null).value(null),t=so,e=[1,1],r=!1
function i(i,o){var a,l=n.call(this,i,o),c=l[0],f=0
Uu(c,(function(n){var e=n.children
e&&e.length?(n.x=function(n){return n.reduce((function(n,t){return n+t.x}),0)/n.length}(e),n.y=function(n){return 1+u.max(n,(function(n){return n.y}))}(e)):(n.x=a?f+=t(n,a):0,n.y=0,a=n)}))
var s=function n(t){var e=t.children
return e&&e.length?n(e[0]):t}(c),h=function n(t){var e,r=t.children
return r&&(e=r.length)?n(r[e-1]):t}(c),p=s.x-t(s,h)/2,g=h.x+t(h,s)/2
return Uu(c,r?function(n){n.x=(n.x-c.x)*e[0],n.y=(c.y-n.y)*e[1]}:function(n){n.x=(n.x-p)/(g-p)*e[0],n.y=(1-(c.y?n.y/c.y:1))*e[1]}),l}return i.separation=function(n){return arguments.length?(t=n,i):t},i.size=function(n){return arguments.length?(r=null==(e=n),i):r?null:e},i.nodeSize=function(n){return arguments.length?(r=null!=(e=n),i):r?e:null},Iu(i,n)},u.layout.treemap=function(){var n,t=u.layout.hierarchy(),e=Math.round,r=[1,1],i=null,o=yo,a=!1,l="squarify",c=.5*(1+Math.sqrt(5))
function f(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(t<0?0:t),e.area=isNaN(r)||r<=0?0:r}function s(n){var t=n.children
if(t&&t.length){var e,r,i,u=o(n),a=[],c=t.slice(),h=Infinity,v="slice"===l?u.dx:"dice"===l?u.dy:"slice-dice"===l?1&n.depth?u.dy:u.dx:Math.min(u.dx,u.dy)
for(f(c,u.dx*u.dy/n.value),a.area=0;(i=c.length)>0;)a.push(e=c[i-1]),a.area+=e.area,"squarify"!==l||(r=p(a,v))<=h?(c.pop(),h=r):(a.area-=a.pop().area,g(a,v,u,!1),v=Math.min(u.dx,u.dy),a.length=a.area=0,h=Infinity)
a.length&&(g(a,v,u,!0),a.length=a.area=0),t.forEach(s)}}function h(n){var t=n.children
if(t&&t.length){var e,r=o(n),i=t.slice(),u=[]
for(f(i,r.dx*r.dy/n.value),u.area=0;e=i.pop();)u.push(e),u.area+=e.area,null!=e.z&&(g(u,e.z?r.dx:r.dy,r,!i.length),u.length=u.area=0)
t.forEach(h)}}function p(n,t){for(var e,r=n.area,i=0,u=Infinity,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(e<u&&(u=e),e>i&&(i=e))
return t*=t,(r*=r)?Math.max(t*i*c/r,r/(t*u*c)):Infinity}function g(n,t,r,i){var u,o=-1,a=n.length,l=r.x,c=r.y,f=t?e(n.area/t):0
if(t==r.dx){for((i||f>r.dy)&&(f=r.dy);++o<a;)(u=n[o]).x=l,u.y=c,u.dy=f,l+=u.dx=Math.min(r.x+r.dx-l,f?e(u.area/f):0)
u.z=!0,u.dx+=r.x+r.dx-l,r.y+=f,r.dy-=f}else{for((i||f>r.dx)&&(f=r.dx);++o<a;)(u=n[o]).x=l,u.y=c,u.dx=f,c+=u.dy=Math.min(r.y+r.dy-c,f?e(u.area/f):0)
u.z=!1,u.dy+=r.y+r.dy-c,r.x+=f,r.dx-=f}}function v(e){var i=n||t(e),u=i[0]
return u.x=u.y=0,u.value?(u.dx=r[0],u.dy=r[1]):u.dx=u.dy=0,n&&t.revalue(u),f([u],u.dx*u.dy/u.value),(n?h:s)(u),a&&(n=i),i}return v.size=function(n){return arguments.length?(r=n,v):r},v.padding=function(n){if(!arguments.length)return i
function t(t){var e=n.call(v,t,t.depth)
return null==e?yo(t):mo(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return mo(t,n)}var r
return o=null==(i=n)?yo:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,v},v.round=function(n){return arguments.length?(e=n?Math.round:Number,v):e!=Number},v.sticky=function(t){return arguments.length?(a=t,n=null,v):a},v.ratio=function(n){return arguments.length?(c=n,v):c},v.mode=function(n){return arguments.length?(l=n+"",v):l},Iu(v,t)},u.random={normal:function(n,t){var e=arguments.length
return e<2&&(t=1),e<1&&(n=0),function(){var e,r,i
do{i=(e=2*Math.random()-1)*e+(r=2*Math.random()-1)*r}while(!i||i>1)
return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=u.random.normal.apply(u,arguments)
return function(){return Math.exp(n())}},bates:function(n){var t=u.random.irwinHall(n)
return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;e<n;e++)t+=Math.random()
return t}}},u.scale={}
var ko={floor:R,ceil:R}
function So(n,t,e,r){var i=[],o=[],a=0,l=Math.min(n.length,t.length)-1
for(n[l]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=l;)i.push(e(n[a-1],n[a])),o.push(r(t[a-1],t[a]))
return function(t){var e=u.bisect(n,t,1,l)-1
return o[e](i[e](t))}}function No(n,t){return u.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Eo(n,t){return _o(n,wo(Ao(n,t)[2])),_o(n,wo(Ao(n,t)[2])),n}function Ao(n,t){null==t&&(t=10)
var e=Mo(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i
return u<=.15?i*=10:u<=.35?i*=5:u<=.75&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Co(n,t){return u.range.apply(u,Ao(n,t))}function zo(n,t,e){var r=Ao(n,t)
if(e){var i=Rt.exec(e)
if(i.shift(),"s"===i[8]){var o=u.formatPrefix(Math.max(_(r[0]),_(r[1])))
return i[7]||(i[7]="."+qo(o.scale(r[2]))),i[8]="f",e=u.format(i.join("")),function(n){return e(o.scale(n))+o.symbol}}i[7]||(i[7]="."+function(n,t){var e=qo(t[2])
return n in Lo?Math.abs(e-qo(Math.max(_(t[0]),_(t[1]))))+ +("e"!==n):e-2*("%"===n)}(i[8],r)),e=i.join("")}else e=",."+qo(r[2])+"f"
return u.format(e)}u.scale.linear=function(){return function n(t,e,r,i){var u,o
function a(){var n=Math.min(t.length,e.length)>2?So:bo,a=i?Nu:Su
return u=n(t,e,a,r),o=n(e,t,a,ru),l}function l(n){return u(n)}return l.invert=function(n){return o(n)},l.domain=function(n){return arguments.length?(t=n.map(Number),a()):t},l.range=function(n){return arguments.length?(e=n,a()):e},l.rangeRound=function(n){return l.range(n).interpolate(mu)},l.clamp=function(n){return arguments.length?(i=n,a()):i},l.interpolate=function(n){return arguments.length?(r=n,a()):r},l.ticks=function(n){return Co(t,n)},l.tickFormat=function(n,e){return zo(t,n,e)},l.nice=function(n){return Eo(t,n),a()},l.copy=function(){return n(t,e,r,i)},a()}([0,1],[0,1],ru,!1)}
var Lo={s:1,g:1,p:1,r:1,e:1}
function qo(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}u.scale.log=function(){return function n(t,e,r,i){function o(n){return(r?Math.log(n<0?0:n):-Math.log(n>0?0:-n))/Math.log(e)}function a(n){return r?Math.pow(e,n):-Math.pow(e,-n)}function l(n){return t(o(n))}return l.invert=function(n){return a(t.invert(n))},l.domain=function(n){return arguments.length?(r=n[0]>=0,t.domain((i=n.map(Number)).map(o)),l):i},l.base=function(n){return arguments.length?(e=+n,t.domain(i.map(o)),l):e},l.nice=function(){var n=_o(i.map(o),r?Math:Ro)
return t.domain(n),i=n.map(a),l},l.ticks=function(){var n=Mo(i),t=[],u=n[0],l=n[1],c=Math.floor(o(u)),f=Math.ceil(o(l)),s=e%1?2:e
if(isFinite(f-c)){if(r){for(;c<f;c++)for(var h=1;h<s;h++)t.push(a(c)*h)
t.push(a(c))}else for(t.push(a(c));c++<f;)for(h=s-1;h>0;h--)t.push(a(c)*h)
for(c=0;t[c]<u;c++);for(f=t.length;t[f-1]>l;f--);t=t.slice(c,f)}return t},l.tickFormat=function(n,t){if(!arguments.length)return To
arguments.length<2?t=To:"function"!=typeof t&&(t=u.format(t))
var r=Math.max(1,e*n/l.ticks().length)
return function(n){var i=n/a(Math.round(o(n)))
return i*e<e-.5&&(i*=e),i<=r?t(n):""}},l.copy=function(){return n(t.copy(),e,r,i)},No(l,t)}(u.scale.linear().domain([0,1]),10,!0,[1,10])}
var To=u.format(".0e"),Ro={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}}
function Do(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}u.scale.pow=function(){return function n(t,e,r){var i=Do(e),u=Do(1/e)
function o(n){return t(i(n))}return o.invert=function(n){return u(t.invert(n))},o.domain=function(n){return arguments.length?(t.domain((r=n.map(Number)).map(i)),o):r},o.ticks=function(n){return Co(r,n)},o.tickFormat=function(n,t){return zo(r,n,t)},o.nice=function(n){return o.domain(Eo(r,n))},o.exponent=function(n){return arguments.length?(i=Do(e=n),u=Do(1/e),t.domain(r.map(i)),o):e},o.copy=function(){return n(t.copy(),e,r)},No(o,t)}(u.scale.linear(),1,[0,1])},u.scale.sqrt=function(){return u.scale.pow().exponent(.5)},u.scale.ordinal=function(){return function n(t,e){var r,i,o
function a(n){return i[((r.get(n)||("range"===e.t?r.set(n,t.push(n)):NaN))-1)%i.length]}function l(n,e){return u.range(t.length).map((function(t){return n+e*t}))}return a.domain=function(n){if(!arguments.length)return t
t=[],r=new S
for(var i,u=-1,o=n.length;++u<o;)r.has(i=n[u])||r.set(i,t.push(i))
return a[e.t].apply(a,e.a)},a.range=function(n){return arguments.length?(i=n,o=0,e={t:"range",a:arguments},a):i},a.rangePoints=function(n,r){arguments.length<2&&(r=0)
var u=n[0],c=n[1],f=t.length<2?(u=(u+c)/2,0):(c-u)/(t.length-1+r)
return i=l(u+f*r/2,f),o=0,e={t:"rangePoints",a:arguments},a},a.rangeRoundPoints=function(n,r){arguments.length<2&&(r=0)
var u=n[0],c=n[1],f=t.length<2?(u=c=Math.round((u+c)/2),0):(c-u)/(t.length-1+r)|0
return i=l(u+Math.round(f*r/2+(c-u-(t.length-1+r)*f)/2),f),o=0,e={t:"rangeRoundPoints",a:arguments},a},a.rangeBands=function(n,r,u){arguments.length<2&&(r=0),arguments.length<3&&(u=r)
var c=n[1]<n[0],f=n[c-0],s=n[1-c],h=(s-f)/(t.length-r+2*u)
return i=l(f+h*u,h),c&&i.reverse(),o=h*(1-r),e={t:"rangeBands",a:arguments},a},a.rangeRoundBands=function(n,r,u){arguments.length<2&&(r=0),arguments.length<3&&(u=r)
var c=n[1]<n[0],f=n[c-0],s=n[1-c],h=Math.floor((s-f)/(t.length-r+2*u))
return i=l(f+Math.round((s-f-(t.length-r)*h)/2),h),c&&i.reverse(),o=Math.round(h*(1-r)),e={t:"rangeRoundBands",a:arguments},a},a.rangeBand=function(){return o},a.rangeExtent=function(){return Mo(e.a[0])},a.copy=function(){return n(t,e)},a.domain(t)}([],{t:"range",a:[[]]})},u.scale.category10=function(){return u.scale.ordinal().range(Io)},u.scale.category20=function(){return u.scale.ordinal().range(Po)},u.scale.category20b=function(){return u.scale.ordinal().range(Uo)},u.scale.category20c=function(){return u.scale.ordinal().range(jo)}
var Io=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(ft),Po=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(ft),Uo=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(ft),jo=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(ft)
function Fo(){return 0}u.scale.quantile=function(){return function n(t,e){var r
function i(){var n=0,i=e.length
for(r=[];++n<i;)r[n-1]=u.quantile(t,n/i)
return o}function o(n){if(!isNaN(n=+n))return e[u.bisect(r,n)]}return o.domain=function(n){return arguments.length?(t=n.map(y).filter(m).sort(d),i()):t},o.range=function(n){return arguments.length?(e=n,i()):e},o.quantiles=function(){return r},o.invertExtent=function(n){return(n=e.indexOf(n))<0?[NaN,NaN]:[n>0?r[n-1]:t[0],n<r.length?r[n]:t[t.length-1]]},o.copy=function(){return n(t,e)},i()}([],[])},u.scale.quantize=function(){return function n(t,e,r){var i,u
function o(n){return r[Math.max(0,Math.min(u,Math.floor(i*(n-t))))]}function a(){return i=r.length/(e-t),u=r.length-1,o}return o.domain=function(n){return arguments.length?(t=+n[0],e=+n[n.length-1],a()):[t,e]},o.range=function(n){return arguments.length?(r=n,a()):r},o.invertExtent=function(n){return[n=(n=r.indexOf(n))<0?NaN:n/i+t,n+1/i]},o.copy=function(){return n(t,e,r)},a()}(0,1,[0,1])},u.scale.threshold=function(){return function n(t,e){function r(n){if(n<=n)return e[u.bisect(t,n)]}return r.domain=function(n){return arguments.length?(t=n,r):t},r.range=function(n){return arguments.length?(e=n,r):e},r.invertExtent=function(n){return n=e.indexOf(n),[t[n-1],t[n]]},r.copy=function(){return n(t,e)},r}([.5],[0,1])},u.scale.identity=function(){return function n(t){function e(n){return+n}return e.invert=e,e.domain=e.range=function(n){return arguments.length?(t=n.map(e),e):t},e.ticks=function(n){return Co(t,n)},e.tickFormat=function(n,e){return zo(t,n,e)},e.copy=function(){return n(t)},e}([0,1])},u.svg={},u.svg.arc=function(){var n=Oo,t=Yo,e=Fo,r=Ho,i=Zo,u=Vo,o=Xo
function a(){var a=Math.max(0,+n.apply(this,arguments)),c=Math.max(0,+t.apply(this,arguments)),f=i.apply(this,arguments)-Rn,s=u.apply(this,arguments)-Rn,h=Math.abs(s-f),p=f>s?0:1
if(c<a&&(g=c,c=a,a=g),h>=Tn)return l(c,p)+(a?l(a,1-p):"")+"Z"
var g,v,d,y,m,M,x,b,_,w,k,S,N=0,E=0,A=[]
if((y=(+o.apply(this,arguments)||0)/2)&&(d=r===Ho?Math.sqrt(a*a+c*c):+r.apply(this,arguments),p||(E*=-1),c&&(E=Fn(d/c*Math.sin(y))),a&&(N=Fn(d/a*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E)
var C=Math.abs(s-f-2*E)<=Ln?0:1
if(E&&$o(m,M,x,b)===p^C){var z=(f+s)/2
m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0
if(a){_=a*Math.cos(s-N),w=a*Math.sin(s-N),k=a*Math.cos(f+N),S=a*Math.sin(f+N)
var L=Math.abs(f-s+2*N)<=Ln?0:1
if(N&&$o(_,w,k,S)===1-p^L){var q=(f+s)/2
_=a*Math.cos(q),w=a*Math.sin(q),k=S=null}}else _=w=0
if(h>Cn&&(g=Math.min(Math.abs(c-a)/2,+e.apply(this,arguments)))>.001){v=a<c^p?0:1
var T=g,R=g
if(h<Ln){var D=null==k?[_,w]:null==x?[m,M]:hi([m,M],[k,S],[x,b],[_,w]),I=m-D[0],P=M-D[1],U=x-D[0],j=b-D[1],F=1/Math.sin(Math.acos((I*U+P*j)/(Math.sqrt(I*I+P*P)*Math.sqrt(U*U+j*j)))/2),H=Math.sqrt(D[0]*D[0]+D[1]*D[1])
R=Math.min(g,(a-H)/(F-1)),T=Math.min(g,(c-H)/(F+1))}if(null!=x){var O=Bo(null==k?[_,w]:[k,S],[m,M],c,T,p),Y=Bo([x,b],[_,w],c,T,p)
g===T?A.push("M",O[0],"A",T,",",T," 0 0,",v," ",O[1],"A",c,",",c," 0 ",1-p^$o(O[1][0],O[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",O[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M)
if(null!=k){var Z=Bo([m,M],[k,S],a,-R,p),V=Bo([_,w],null==x?[m,M]:[x,b],a,-R,p)
g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",a,",",a," 0 ",p^$o(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=k&&A.push("A",a,",",a," 0 ",L,",",1-p," ",k,",",S)
return A.push("Z"),A.join("")}function l(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}return a.innerRadius=function(t){return arguments.length?(n=Mt(t),a):n},a.outerRadius=function(n){return arguments.length?(t=Mt(n),a):t},a.cornerRadius=function(n){return arguments.length?(e=Mt(n),a):e},a.padRadius=function(n){return arguments.length?(r=n==Ho?Ho:Mt(n),a):r},a.startAngle=function(n){return arguments.length?(i=Mt(n),a):i},a.endAngle=function(n){return arguments.length?(u=Mt(n),a):u},a.padAngle=function(n){return arguments.length?(o=Mt(n),a):o},a.centroid=function(){var e=(+n.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +u.apply(this,arguments))/2-Rn
return[Math.cos(r)*e,Math.sin(r)*e]},a}
var Ho="auto"
function Oo(n){return n.innerRadius}function Yo(n){return n.outerRadius}function Zo(n){return n.startAngle}function Vo(n){return n.endAngle}function Xo(n){return n&&n.padAngle}function $o(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function Bo(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(y<0?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,k=(x*y+d*b)/m,S=(-x*d+y*b)/m,N=_-g,E=w-v,A=k-g,C=S-v
return N*N+E*E>A*A+C*C&&(_=k,w=S),[[_-l,w-c],[_*e/M,w*e/M]]}function Wo(n){var t=oi,e=ai,r=Ge,i=Go,u=i.key,o=.7
function a(u){var a,l=[],c=[],f=-1,s=u.length,h=Mt(t),p=Mt(e)
function g(){l.push("M",i(n(c),o))}for(;++f<s;)r.call(this,a=u[f],f)?c.push([+h.call(this,a,f),+p.call(this,a,f)]):c.length&&(g(),c=[])
return c.length&&g(),l.length?l.join(""):null}return a.x=function(n){return arguments.length?(t=n,a):t},a.y=function(n){return arguments.length?(e=n,a):e},a.defined=function(n){return arguments.length?(r=n,a):r},a.interpolate=function(n){return arguments.length?(u="function"==typeof n?i=n:(i=Jo.get(n)||Go).key,a):u},a.tension=function(n){return arguments.length?(o=n,a):o},a}u.svg.line=function(){return Wo(R)}
var Jo=u.map({linear:Go,"linear-closed":Ko,step:function(n){var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]]
for(;++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1])
e>1&&i.push("H",r[0])
return i.join("")},"step-before":Qo,"step-after":na,basis:ra,"basis-open":function(n){if(n.length<4)return Go(n)
var t,e=[],r=-1,i=n.length,u=[0],o=[0]
for(;++r<3;)t=n[r],u.push(t[0]),o.push(t[1])
e.push(ia(aa,u)+","+ia(aa,o)),--r
for(;++r<i;)t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),la(e,u,o)
return e.join("")},"basis-closed":function(n){var t,e,r=-1,i=n.length,u=i+4,o=[],a=[]
for(;++r<4;)e=n[r%i],o.push(e[0]),a.push(e[1])
t=[ia(aa,o),",",ia(aa,a)],--r
for(;++r<u;)e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),la(t,o,a)
return t.join("")},bundle:function(n,t){var e=n.length-1
if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1;++c<=e;)r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l)
return ra(n)},cardinal:function(n,t){return n.length<3?Go(n):n[0]+ta(n,ea(n,t))},"cardinal-open":function(n,t){return n.length<4?Go(n):n[1]+ta(n.slice(1,-1),ea(n,t))},"cardinal-closed":function(n,t){return n.length<3?Ko(n):n[0]+ta((n.push(n[0]),n),ea([n[n.length-2]].concat(n,[n[1]]),t))},monotone:function(n){return n.length<3?Go(n):n[0]+ta(n,function(n){var t,e,r,i,u=[],o=function(n){var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=ca(i,u)
for(;++t<e;)r[t]=(o+(o=ca(i=u,u=n[t+1])))/2
return r[t]=o,r}(n),a=-1,l=n.length-1
for(;++a<l;)t=ca(n[a],n[a+1]),_(t)<Cn?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,(i=e*e+r*r)>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r))
a=-1
for(;++a<=l;)i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0])
return u}(n))}})
function Go(n){return n.length>1?n.join("L"):n+"Z"}function Ko(n){return n.join("L")+"Z"}function Qo(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0])
return i.join("")}function na(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1])
return i.join("")}function ta(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Go(n)
var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1
if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]
for(var c=2;c<t.length;c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l]
r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function ea(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length;++a<l;)e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])])
return r}function ra(n){if(n.length<3)return Go(n)
var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",ia(aa,o),",",ia(aa,a)]
for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),la(l,o,a)
return n.pop(),l.push("L",r),l.join("")}function ia(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}Jo.forEach((function(n,t){t.key=n,t.closed=/-closed$/.test(n)}))
var ua=[0,2/3,1/3,0],oa=[0,1/3,2/3,0],aa=[0,1/6,2/3,1/6]
function la(n,t,e){n.push("C",ia(ua,t),",",ia(ua,e),",",ia(oa,t),",",ia(oa,e),",",ia(aa,t),",",ia(aa,e))}function ca(n,t){return(t[1]-n[1])/(t[0]-n[0])}function fa(n){for(var t,e,r,i=-1,u=n.length;++i<u;)e=(t=n[i])[0],r=t[1]-Rn,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r)
return n}function sa(n){var t=oi,e=oi,r=0,i=ai,u=Ge,o=Go,a=o.key,l=o,c="L",f=.7
function s(a){var s,h,p,g=[],v=[],d=[],y=-1,m=a.length,M=Mt(t),x=Mt(r),b=t===e?function(){return h}:Mt(e),_=r===i?function(){return p}:Mt(i)
function w(){g.push("M",o(n(d),f),c,l(n(v.reverse()),f),"Z")}for(;++y<m;)u.call(this,s=a[y],y)?(v.push([h=+M.call(this,s,y),p=+x.call(this,s,y)]),d.push([+b.call(this,s,y),+_.call(this,s,y)])):v.length&&(w(),v=[],d=[])
return v.length&&w(),g.length?g.join(""):null}return s.x=function(n){return arguments.length?(t=e=n,s):e},s.x0=function(n){return arguments.length?(t=n,s):t},s.x1=function(n){return arguments.length?(e=n,s):e},s.y=function(n){return arguments.length?(r=i=n,s):i},s.y0=function(n){return arguments.length?(r=n,s):r},s.y1=function(n){return arguments.length?(i=n,s):i},s.defined=function(n){return arguments.length?(u=n,s):u},s.interpolate=function(n){return arguments.length?(a="function"==typeof n?o=n:(o=Jo.get(n)||Go).key,l=o.reverse||o,c=o.closed?"M":"L",s):a},s.tension=function(n){return arguments.length?(f=n,s):f},s}function ha(n){return n.radius}function pa(n){return[n.x,n.y]}function ga(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Rn
return[e*Math.cos(r),e*Math.sin(r)]}}function va(){return 64}function da(){return"circle"}function ya(n){var t=Math.sqrt(n/Ln)
return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}u.svg.line.radial=function(){var n=Wo(fa)
return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},Qo.reverse=na,na.reverse=Qo,u.svg.area=function(){return sa(R)},u.svg.area.radial=function(){var n=sa(fa)
return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},u.svg.chord=function(){var n=Xr,t=$r,e=ha,r=Zo,i=Vo
function u(e,r){var i,u,c=o(this,n,e,r),f=o(this,t,e,r)
return"M"+c.p0+a(c.r,c.p1,c.a1-c.a0)+(u=f,((i=c).a0==u.a0&&i.a1==u.a1?l(c.r,c.p1,c.r,c.p0):l(c.r,c.p1,f.r,f.p0)+a(f.r,f.p1,f.a1-f.a0)+l(f.r,f.p1,c.r,c.p0))+"Z")}function o(n,t,u,o){var a=t.call(n,u,o),l=e.call(n,a,o),c=r.call(n,a,o)-Rn,f=i.call(n,a,o)-Rn
return{r:l,a0:c,a1:f,p0:[l*Math.cos(c),l*Math.sin(c)],p1:[l*Math.cos(f),l*Math.sin(f)]}}function a(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ln)+",1 "+t}function l(n,t,e,r){return"Q 0,0 "+r}return u.radius=function(n){return arguments.length?(e=Mt(n),u):e},u.source=function(t){return arguments.length?(n=Mt(t),u):n},u.target=function(n){return arguments.length?(t=Mt(n),u):t},u.startAngle=function(n){return arguments.length?(r=Mt(n),u):r},u.endAngle=function(n){return arguments.length?(i=Mt(n),u):i},u},u.svg.diagonal=function(){var n=Xr,t=$r,e=pa
function r(r,i){var u=n.call(this,r,i),o=t.call(this,r,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o]
return"M"+(l=l.map(e))[0]+"C"+l[1]+" "+l[2]+" "+l[3]}return r.source=function(t){return arguments.length?(n=Mt(t),r):n},r.target=function(n){return arguments.length?(t=Mt(n),r):t},r.projection=function(n){return arguments.length?(e=n,r):e},r},u.svg.diagonal.radial=function(){var n=u.svg.diagonal(),t=pa,e=n.projection
return n.projection=function(n){return arguments.length?e(ga(t=n)):t},n},u.svg.symbol=function(){var n=da,t=va
function e(e,r){return(ma.get(n.call(this,e,r))||ya)(t.call(this,e,r))}return e.type=function(t){return arguments.length?(n=Mt(t),e):n},e.size=function(n){return arguments.length?(t=Mt(n),e):t},e}
var ma=u.map({circle:ya,cross:function(n){var t=Math.sqrt(n/5)/2
return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*xa)),e=t*xa
return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2
return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Ma),e=t*Ma/2
return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Ma),e=t*Ma/2
return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}})
u.svg.symbolTypes=ma.keys()
var Ma=Math.sqrt(3),xa=Math.tan(30*Dn)
J.transition=function(n){for(var t,e,r=ka||++Ea,i=za(n),u=[],o=Sa||{time:Date.now(),ease:pu,delay:0,duration:250},a=-1,l=this.length;++a<l;){u.push(t=[])
for(var c=this[a],f=-1,s=c.length;++f<s;)(e=c[f])&&La(e,f,i,r,o),t.push(e)}return wa(u,i,r)},J.interrupt=function(n){return this.each(null==n?ba:_a(za(n)))}
var ba=_a(za())
function _a(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function wa(n,t,e){return V(n,Na),n.namespace=t,n.id=e,n}var ka,Sa,Na=[],Ea=0
function Aa(n,t,e,r){var i=n.id,u=n.namespace
return vn(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Ca(n){return null==n&&(n=""),function(){this.textContent=n}}function za(n){return null==n?"__transition__":"__transition_"+n+"__"}function La(n,t,e,r,i){var u,o,a,l,c,f=n[e]||(n[e]={active:0,count:0}),s=f[r]
function h(e){var i=f.active,h=f[i]
for(var g in h&&(h.timer.c=null,h.timer.t=NaN,--f.count,delete f[i],h.event&&h.event.interrupt.call(n,n.__data__,h.index)),f)if(+g<r){var v=f[g]
v.timer.c=null,v.timer.t=NaN,--f.count,delete f[g]}o.c=p,Et((function(){return o.c&&p(e||1)&&(o.c=null,o.t=NaN),1}),0,u),f.active=r,s.event&&s.event.start.call(n,n.__data__,t),c=[],s.tween.forEach((function(e,r){(r=r.call(n,n.__data__,t))&&c.push(r)})),l=s.ease,a=s.duration}function p(i){for(var u=i/a,o=l(u),h=c.length;h>0;)c[--h].call(n,o)
if(u>=1)return s.event&&s.event.end.call(n,n.__data__,t),--f.count?delete f[r]:delete n[e],1}s||(u=i.time,o=Et((function(n){var t=s.delay
if(o.t=t+u,t<=n)return h(n-t)
o.c=h}),0,u),s=f[r]={tween:new S,time:u,timer:o,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++f.count)}Na.call=J.call,Na.empty=J.empty,Na.node=J.node,Na.size=J.size,u.transition=function(n,t){return n&&n.transition?ka?n.transition(t):n:u.selection().transition(n)},u.transition.prototype=Na,Na.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[]
n=G(n)
for(var a=-1,l=this.length;++a<l;){o.push(t=[])
for(var c=this[a],f=-1,s=c.length;++f<s;)(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),La(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return wa(o,u,i)},Na.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[]
n=K(n)
for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[])
for(var g=-1,v=e.length;++g<v;)(i=e[g])&&La(i,g,a,o,u),t.push(i)}return wa(l,a,o)},Na.filter=function(n){var t,e,r=[]
"function"!=typeof n&&(n=pn(n))
for(var i=0,u=this.length;i<u;i++){r.push(t=[])
for(var o,a=0,l=(o=this[i]).length;a<l;a++)(e=o[a])&&n.call(e,e.__data__,a,i)&&t.push(e)}return wa(r,this.namespace,this.id)},Na.tween=function(n,t){var e=this.id,r=this.namespace
return arguments.length<2?this.node()[r][e].tween.get(n):vn(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Na.attr=function(n,t){if(arguments.length<2){for(t in n)this.attr(t,n[t])
return this}var e="transform"==n?ku:ru,r=u.ns.qualify(n)
function i(){this.removeAttribute(r)}function o(){this.removeAttributeNS(r.space,r.local)}function a(n){return null==n?i:(n+="",function(){var t,i=this.getAttribute(r)
return i!==n&&(t=e(i,n),function(n){this.setAttribute(r,t(n))})})}function l(n){return null==n?o:(n+="",function(){var t,i=this.getAttributeNS(r.space,r.local)
return i!==n&&(t=e(i,n),function(n){this.setAttributeNS(r.space,r.local,t(n))})})}return Aa(this,"attr."+n,t,r.local?l:a)},Na.attrTween=function(n,t){var e=u.ns.qualify(n)
return this.tween("attr."+n,e.local?function(n,r){var i=t.call(this,n,r,this.getAttributeNS(e.space,e.local))
return i&&function(n){this.setAttributeNS(e.space,e.local,i(n))}}:function(n,r){var i=t.call(this,n,r,this.getAttribute(e))
return i&&function(n){this.setAttribute(e,i(n))}})},Na.style=function(n,t,e){var r=arguments.length
if(r<3){if("string"!=typeof n){for(e in r<2&&(t=""),n)this.style(e,n[e],t)
return this}e=""}function i(){this.style.removeProperty(n)}function u(t){return null==t?i:(t+="",function(){var r,i=f(this).getComputedStyle(this,null).getPropertyValue(n)
return i!==t&&(r=ru(i,t),function(t){this.style.setProperty(n,r(t),e)})})}return Aa(this,"style."+n,t,u)},Na.styleTween=function(n,t,e){function r(r,i){var u=t.call(this,r,i,f(this).getComputedStyle(this,null).getPropertyValue(n))
return u&&function(t){this.style.setProperty(n,u(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Na.text=function(n){return Aa(this,"text",n,Ca)},Na.remove=function(){var n=this.namespace
return this.each("end.transition",(function(){var t
this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)}))},Na.ease=function(n){var t=this.id,e=this.namespace
return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=u.ease.apply(u,arguments)),vn(this,(function(r){r[e][t].ease=n})))},Na.delay=function(n){var t=this.id,e=this.namespace
return arguments.length<1?this.node()[e][t].delay:vn(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Na.duration=function(n){var t=this.id,e=this.namespace
return arguments.length<1?this.node()[e][t].duration:vn(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Na.each=function(n,t){var e=this.id,r=this.namespace
if(arguments.length<2){var i=Sa,o=ka
try{ka=e,vn(this,(function(t,i,u){Sa=t[r][e],n.call(t,t.__data__,i,u)}))}finally{Sa=i,ka=o}}else vn(this,(function(i){var o=i[r][e];(o.event||(o.event=u.dispatch("start","end","interrupt"))).on(n,t)}))
return this},Na.transition=function(){for(var n,t,e,r=this.id,i=++Ea,u=this.namespace,o=[],a=0,l=this.length;a<l;a++){o.push(n=[])
for(var c,f=0,s=(c=this[a]).length;f<s;f++)(t=c[f])&&La(t,f,u,i,{time:(e=t[u][r]).time,ease:e.ease,delay:e.delay+e.duration,duration:e.duration}),n.push(t)}return wa(o,u,i)},u.svg.axis=function(){var n,t=u.scale.linear(),e=qa,r=6,i=6,o=3,l=[10],c=null
function f(a){a.each((function(){var a,f=u.select(this),s=this.__chart__||t,h=this.__chart__=t.copy(),p=null==c?h.ticks?h.ticks.apply(h,l):h.domain():c,g=null==n?h.tickFormat?h.tickFormat.apply(h,l):R:n,v=f.selectAll(".tick").data(p,h),d=v.enter().insert("g",".domain").attr("class","tick").style("opacity",Cn),y=u.transition(v.exit()).style("opacity",Cn).remove(),m=u.transition(v.order()).style("opacity",1),M=Math.max(r,0)+o,x=xo(h),b=f.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),u.transition(b))
d.append("line"),d.append("text")
var w,k,S,N,E=d.select("line"),A=m.select("line"),C=v.select("text").text(g),z=d.select("text"),L=m.select("text"),q="top"===e||"left"===e?-1:1
if("bottom"===e||"top"===e?(a=Ra,w="x",S="y",k="x2",N="y2",C.attr("dy",q<0?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*i+"V0H"+x[1]+"V"+q*i)):(a=Da,w="y",S="x",k="y2",N="x2",C.attr("dy",".32em").style("text-anchor",q<0?"end":"start"),_.attr("d","M"+q*i+","+x[0]+"H0V"+x[1]+"H"+q*i)),E.attr(N,q*r),z.attr(S,q*M),A.attr(k,0).attr(N,q*r),L.attr(w,0).attr(S,q*M),h.rangeBand){var T=h,D=T.rangeBand()/2
s=h=function(n){return T(n)+D}}else s.rangeBand?s=h:y.call(a,h,s)
d.call(a,s,h),m.call(a,h,h)}))}return f.scale=function(n){return arguments.length?(t=n,f):t},f.orient=function(n){return arguments.length?(e=n in Ta?n+"":qa,f):e},f.ticks=function(){return arguments.length?(l=a(arguments),f):l},f.tickValues=function(n){return arguments.length?(c=n,f):c},f.tickFormat=function(t){return arguments.length?(n=t,f):n},f.tickSize=function(n){var t=arguments.length
return t?(r=+n,i=+arguments[t-1],f):r},f.innerTickSize=function(n){return arguments.length?(r=+n,f):r},f.outerTickSize=function(n){return arguments.length?(i=+n,f):i},f.tickPadding=function(n){return arguments.length?(o=+n,f):o},f.tickSubdivide=function(){return arguments.length&&f},f}
var qa="bottom",Ta={top:1,right:1,bottom:1,left:1}
function Ra(n,t,e){n.attr("transform",(function(n){var r=t(n)
return"translate("+(isFinite(r)?r:e(n))+",0)"}))}function Da(n,t,e){n.attr("transform",(function(n){var r=t(n)
return"translate(0,"+(isFinite(r)?r:e(n))+")"}))}u.svg.brush=function(){var n,t,e=Y(h,"brushstart","brush","brushend"),r=null,i=null,o=[0,0],a=[0,0],l=!0,c=!0,s=Pa[0]
function h(n){n.each((function(){var n=u.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",d).on("touchstart.brush",d),t=n.selectAll(".background").data([0])
t.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),n.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move")
var e=n.selectAll(".resize").data(s,R)
e.exit().remove(),e.enter().append("g").attr("class",(function(n){return"resize "+n})).style("cursor",(function(n){return Ia[n]})).append("rect").attr("x",(function(n){return/[ew]$/.test(n)?-3:null})).attr("y",(function(n){return/^[ns]/.test(n)?-3:null})).attr("width",6).attr("height",6).style("visibility","hidden"),e.style("display",h.empty()?"none":null)
var o,a=u.transition(n),l=u.transition(t)
r&&(o=xo(r),l.attr("x",o[0]).attr("width",o[1]-o[0]),g(a)),i&&(o=xo(i),l.attr("y",o[0]).attr("height",o[1]-o[0]),v(a)),p(a)}))}function p(n){n.selectAll(".resize").attr("transform",(function(n){return"translate("+o[+/e$/.test(n)]+","+a[+/^s/.test(n)]+")"}))}function g(n){n.select(".extent").attr("x",o[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",o[1]-o[0])}function v(n){n.select(".extent").attr("y",a[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",a[1]-a[0])}function d(){var s,d,y=this,m=u.select(u.event.target),M=e.of(y,arguments),x=u.select(y),b=m.datum(),_=!/^(n|s)$/.test(b)&&r,w=!/^(e|w)$/.test(b)&&i,k=m.classed("extent"),S=Sn(y),N=u.mouse(y),E=u.select(f(y)).on("keydown.brush",z).on("keyup.brush",L)
if(u.event.changedTouches?E.on("touchmove.brush",q).on("touchend.brush",R):E.on("mousemove.brush",q).on("mouseup.brush",R),x.interrupt().selectAll("*").interrupt(),k)N[0]=o[0]-N[0],N[1]=a[0]-N[1]
else if(b){var A=+/w$/.test(b),C=+/^n/.test(b)
d=[o[1-A]-N[0],a[1-C]-N[1]],N[0]=o[A],N[1]=a[C]}else u.event.altKey&&(s=N.slice())
function z(){32==u.event.keyCode&&(k||(s=null,N[0]-=o[1],N[1]-=a[1],k=2),H())}function L(){32==u.event.keyCode&&2==k&&(N[0]+=o[1],N[1]+=a[1],k=0,H())}function q(){var n=u.mouse(y),t=!1
d&&(n[0]+=d[0],n[1]+=d[1]),k||(u.event.altKey?(s||(s=[(o[0]+o[1])/2,(a[0]+a[1])/2]),N[0]=o[+(n[0]<s[0])],N[1]=a[+(n[1]<s[1])]):s=null),_&&T(n,r,0)&&(g(x),t=!0),w&&T(n,i,1)&&(v(x),t=!0),t&&(p(x),M({type:"brush",mode:k?"move":"resize"}))}function T(e,r,i){var u,f,h=xo(r),p=h[0],g=h[1],v=N[i],d=i?a:o,y=d[1]-d[0]
if(k&&(p-=v,g-=y+v),u=(i?c:l)?Math.max(p,Math.min(g,e[i])):e[i],k?f=(u+=v)+y:(s&&(v=Math.max(p,Math.min(g,2*s[i]-u))),v<u?(f=u,u=v):f=v),d[0]!=u||d[1]!=f)return i?t=null:n=null,d[0]=u,d[1]=f,!0}function R(){q(),x.style("pointer-events","all").selectAll(".resize").style("display",h.empty()?"none":null),u.select("body").style("cursor",null),E.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),S(),M({type:"brushend"})}x.style("pointer-events","none").selectAll(".resize").style("display",null),u.select("body").style("cursor",m.style("cursor")),M({type:"brushstart"}),q()}return h.event=function(r){r.each((function(){var r=e.of(this,arguments),i={x:o,y:a,i:n,j:t},l=this.__chart__||i
this.__chart__=i,ka?u.select(this).transition().each("start.brush",(function(){n=l.i,t=l.j,o=l.x,a=l.y,r({type:"brushstart"})})).tween("brush:brush",(function(){var e=iu(o,i.x),u=iu(a,i.y)
return n=t=null,function(n){o=i.x=e(n),a=i.y=u(n),r({type:"brush",mode:"resize"})}})).each("end.brush",(function(){n=i.i,t=i.j,r({type:"brush",mode:"resize"}),r({type:"brushend"})})):(r({type:"brushstart"}),r({type:"brush",mode:"resize"}),r({type:"brushend"}))}))},h.x=function(n){return arguments.length?(s=Pa[!(r=n)<<1|!i],h):r},h.y=function(n){return arguments.length?(s=Pa[!r<<1|!(i=n)],h):i},h.clamp=function(n){return arguments.length?(r&&i?(l=!!n[0],c=!!n[1]):r?l=!!n:i&&(c=!!n),h):r&&i?[l,c]:r?l:i?c:null},h.extent=function(e){var u,l,c,f,s
return arguments.length?(r&&(u=e[0],l=e[1],i&&(u=u[0],l=l[0]),n=[u,l],r.invert&&(u=r(u),l=r(l)),l<u&&(s=u,u=l,l=s),u==o[0]&&l==o[1]||(o=[u,l])),i&&(c=e[0],f=e[1],r&&(c=c[1],f=f[1]),t=[c,f],i.invert&&(c=i(c),f=i(f)),f<c&&(s=c,c=f,f=s),c==a[0]&&f==a[1]||(a=[c,f])),h):(r&&(n?(u=n[0],l=n[1]):(u=o[0],l=o[1],r.invert&&(u=r.invert(u),l=r.invert(l)),l<u&&(s=u,u=l,l=s))),i&&(t?(c=t[0],f=t[1]):(c=a[0],f=a[1],i.invert&&(c=i.invert(c),f=i.invert(f)),f<c&&(s=c,c=f,f=s))),r&&i?[[u,c],[l,f]]:r?[u,l]:i&&[c,f])},h.clear=function(){return h.empty()||(o=[0,0],a=[0,0],n=t=null),h},h.empty=function(){return!!r&&o[0]==o[1]||!!i&&a[0]==a[1]},u.rebind(h,e,"on")}
var Ia={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Pa=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Ua=Pt.format=he.timeFormat,ja=Ua.utc,Fa=ja("%Y-%m-%dT%H:%M:%S.%LZ")
function Ha(n){return n.toISOString()}function Oa(n,t,e){function r(t){return n(t)}function i(n,e){var r=(n[1]-n[0])/e,i=u.bisect(Za,r)
return i==Za.length?[t.year,Ao(n.map((function(n){return n/31536e6})),e)[2]]:i?t[r/Za[i-1]<Za[i]/r?i-1:i]:[$a,Ao(n,e)[2]]}return r.invert=function(t){return Ya(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Ya)},r.nice=function(n,t){var e=r.domain(),u=Mo(e),o=null==n?i(u,10):"number"==typeof n&&i(u,n)
function a(e){return!isNaN(e)&&!n.range(e,Ya(+e+1),t).length}return o&&(n=o[0],t=o[1]),r.domain(_o(e,t>1?{floor:function(t){for(;a(t=n.floor(t));)t=Ya(t-1)
return t},ceil:function(t){for(;a(t=n.ceil(t));)t=Ya(+t+1)
return t}}:n))},r.ticks=function(n,t){var e=Mo(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t]
return u&&(n=u[0],t=u[1]),n.range(e[0],Ya(+e[1]+1),t<1?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Oa(n.copy(),t,e)},No(r,n)}function Ya(n){return new Date(n)}Ua.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Ha:Fa,Ha.parse=function(n){var t=new Date(n)
return isNaN(t)?null:t},Ha.toString=Fa.toString,Pt.second=Ht((function(n){return new Ut(1e3*Math.floor(n/1e3))}),(function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))}),(function(n){return n.getSeconds()})),Pt.seconds=Pt.second.range,Pt.seconds.utc=Pt.second.utc.range,Pt.minute=Ht((function(n){return new Ut(6e4*Math.floor(n/6e4))}),(function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))}),(function(n){return n.getMinutes()})),Pt.minutes=Pt.minute.range,Pt.minutes.utc=Pt.minute.utc.range,Pt.hour=Ht((function(n){var t=n.getTimezoneOffset()/60
return new Ut(36e5*(Math.floor(n/36e5-t)+t))}),(function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))}),(function(n){return n.getHours()})),Pt.hours=Pt.hour.range,Pt.hours.utc=Pt.hour.utc.range,Pt.month=Ht((function(n){return(n=Pt.day(n)).setDate(1),n}),(function(n,t){n.setMonth(n.getMonth()+t)}),(function(n){return n.getMonth()})),Pt.months=Pt.month.range,Pt.months.utc=Pt.month.utc.range
var Za=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Va=[[Pt.second,1],[Pt.second,5],[Pt.second,15],[Pt.second,30],[Pt.minute,1],[Pt.minute,5],[Pt.minute,15],[Pt.minute,30],[Pt.hour,1],[Pt.hour,3],[Pt.hour,6],[Pt.hour,12],[Pt.day,1],[Pt.day,2],[Pt.week,1],[Pt.month,1],[Pt.month,3],[Pt.year,1]],Xa=Ua.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ge]]),$a={range:function(n,t,e){return u.range(Math.ceil(n/e)*e,+t,e).map(Ya)},floor:R,ceil:R}
Va.year=Pt.year,Pt.scale=function(){return Oa(u.scale.linear(),Va,Xa)}
var Ba=Va.map((function(n){return[n[0].utc,n[1]]})),Wa=ja.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ge]])
function Ja(n){return JSON.parse(n.responseText)}function Ga(n){var t=l.createRange()
return t.selectNode(l.body),t.createContextualFragment(n.responseText)}Ba.year=Pt.year.utc,Pt.scale.utc=function(){return Oa(u.scale.linear(),Ba,Wa)},u.text=xt((function(n){return n.responseText})),u.json=function(n,t){return bt(n,"application/json",Ja,t)},u.html=function(n,t){return bt(n,"text/html",Ga,t)},u.xml=xt((function(n){return n.responseXML})),this.d3=u,void 0===(i="function"==typeof(r=u)?r.call(t,e,t,n):r)||(n.exports=i)}()}}])

//# sourceMappingURL=115-c-2cebdcc53a.js.map