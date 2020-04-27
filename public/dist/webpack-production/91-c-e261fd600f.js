(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[91],{"09fR":function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return y}))
var r=n("vpQ4"),o=n("rePB"),i=(n("k9XI"),n("igdM")),a=n.n(i),c=n("cZ6H"),u=n.n(c),s=(n("UWfp"),"@@themeableDefaultTheme"),f=function(){return{defaultThemeKey:null,components:Object(o.a)({},s,{}),themes:{},registered:[]}}
e.GLOBAL_THEME_REGISTRY=function(e){var t=f()
if(void 0===e)return t
return Object.keys(t).forEach((function(t){void 0===e[t]&&!1})),e}(e.GLOBAL_THEME_REGISTRY)
var l=function(){return e.GLOBAL_THEME_REGISTRY}
var p=function(){var e=l(),t=e.defaultThemeKey,n=e.registered
return t||n[n.length-1]||s},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!e)return t
var n=l().themes[e]
return n||(e!==s&&"[themeable] Could not find theme: '".concat(e,"' in the registry."),t)},m=function(e,t){var n=d(e),r=n.variables||{},o=u()(t)
if(!o&&n.immutable)return"[themeable] Theme, '".concat(n.key,"', is immutable. Cannot apply overrides: ").concat(JSON.stringify(t)),r
var i=u()(r)
return i||o?i?t||{}:r:a()(r,t)},v=function(e,t){var n
if(e)n=m(e,t)
else{var r=l().overrides,o=u()(r)
n=o||u()(t)?o?t:r:a()(r,t)}return m(p(),n)},h=function(e,t){var n=l().components
"function"==typeof t&&(n[s][e]=t,Object.keys(t).forEach((function(o){n.hasOwnProperty(o)||(n[o]={}),n[o][e]=function(e,t){return function(n){var o={}
"function"==typeof e&&(o=e(n))
var i={}
return"function"==typeof e[t]&&(i=e[t](n)),u()(i)||u()(o)?u()(o)&&(o=i):o=Object(r.a)({},o,i),o}}(t,o)})))},b=function(e,t){l().registered.length
var n=function(e){var t=l().components,n=e||p()
return Object(r.a)({},t[s],t[n])}(e),o={},i=v(e,t)
if(!u()(i))return Object.getOwnPropertySymbols(n).forEach((function(e){o[e]=n[e](i)})),o},y=function(e,t,n){var o=t||p(),i=d(o),a={},c=i[e]
if(c)a=c
else{var f=Object(r.a)({borders:{},breakpoints:{},colors:{},forms:{},media:{},shadows:{},spacing:{},stacking:{},transitions:{},typography:{}},v(t)),m=function(e,t){var n=l().components
return n[e]&&n[e][t]||n[s][t]}(o,e)
if("function"==typeof m)try{a=m(f)}catch(e){"[themeable] ".concat(e)}}return u()(n)?i[e]=a:i.immutable?("[themeable] Theme '".concat(o,"' is immutable. Cannot apply overrides for '").concat(e.toString(),"': ").concat(JSON.stringify(n)),a):u()(a)?n:Object(r.a)({},a,n)}}).call(this,n("yLpj"))},"284h":function(e,t,n){var r=n("cDf5")
function o(){if("function"!=typeof WeakMap)return null
var e=new WeakMap
return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e
if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e}
var t=o()
if(t&&t.has(e))return t.get(e)
var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor
for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=i?Object.getOwnPropertyDescriptor(e,a):null
c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}},"4dGC":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.omitProps=function(e,t,n){var o=Object.keys(t||{}),i=n?o.concat(n):o
return function(e,t){var n={}
for(var o in e)"theme"!==o&&"children"!==o&&"className"!==o&&"style"!==o&&!t.includes(o)&&r.call(e,o)&&(n[o]=e[o])
return n}(e,i)},t.pickProps=function(e,t,n){var r=Object.keys(t||{}),o=n?r.concat(n):r
return function(e,t){var n,r={},o=t.length,i=-1
for(;++i<o;)(n=t[i])in e&&(r[n]=e[n])
return r}(e,o)}
var r=Object.prototype.hasOwnProperty},"7/N2":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e?e.charAt(0).toUpperCase()+e.slice(1):e}},"70gm":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(n("aUsF")).default
t.default=o},"7W2i":function(e,t,n){var r=n("SksO")
e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},B9Yq:function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL")
e.exports=function(e){if(Array.isArray(e))return r(e)}},JIIx:function(e,t,n){"use strict"
var r=n("TqRt"),o=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.Children.count(e)
return 0===n?null:"string"==typeof e&&e.length>0||n>1?i.default.createElement("span",t,e):(0,a.default)(Array.isArray(e)?e[0]:e,t)}
var i=o(n("q1tI")),a=r(n("QSkQ"))},MVZn:function(e,t,n){var r=n("lSNA")
e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}},NWYN:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return r.a})),n.d(t,"ApplyTheme",(function(){return we}))
var r=n("NSe8"),o=n("1OyB"),i=n("vuIU"),a=n("md7G"),c=n("foSv"),u=n("Ji7U"),s=(n("k9XI"),n("q1tI")),f=n("17x9"),l=n.n(f),p=n("igdM"),d=n.n(p),m=n("JIIx"),v=n.n(m),h=n("rePB"),b=Object(h.a)({},"@@themeable",l.a.object)
function y(e){if(e)return e["@@themeable"]}var w=n("ReuC"),O=n("vpQ4"),g=n("b7MV"),j=n("TNh1"),k=n.n(j),x=n("cZ6H"),E=n.n(x),S=n("UWfp"),T=n("70gm"),P=n.n(T),A=n("kH7O"),_=n.n(A),M=n("vYBF"),C=n.n(M)
function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=U(e)
return q(z(t),t)}var B=1,N=7,W=4
function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return e.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,"").replace(/@import[^;]*;/gim,"")}function z(e){var t={start:0,end:e.length},n=t
return e.split("").forEach((function(e,r){switch(e){case"{":n.rules||(n.rules=[])
var o=n,i=o.rules[o.rules.length-1]
n={start:r+1,parent:o,previous:i},o.rules.push(n)
break
case"}":n.end=r+1,n=n.parent||t}})),t}function D(e,t){var n=e.previous?e.previous.end:e.parent.start,r=e.start-1,o=t.substring(n,r)
return(o=(o=o.replace(/\s+/g," ")).substring(o.lastIndexOf(";")+1)).trim()}function R(e){return 0!==e.indexOf("@")?B:0===e.indexOf("@media")?W:e.match(/^@[^\s]*keyframes/)?N:void 0}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
return e.parent&&(e.selector=D(e,t),e.type=R(e.selector)),e.cssText=t.substring(e.start,e.end-1).trim(),e.rules&&e.rules.length>0&&(e.rules=e.rules.map((function(e){return q(e,t)}))),e}function L(e,t){var n=I(e)
return"function"==typeof t&&(n=function e(t,n){if(!t)return
if(t.type===B)return n(t)
var r=t.rules||[],o=Object(O.a)({},t)
return o.rules=r.map((function(t){return e(t,n)})),o}(n,t)),H(n)}function Y(e){var t=I(e),n=[]
if(t.rules&&t.rules.length>0)n=t.rules.filter(X).map((function(e){return H(e)}))
else{var r=H(t)
r&&(n=[r])}return n}function H(e,t){var n="",r=t||""
if(e.rules&&e.rules.length>0?n=e.rules.map((function(e){return H(e,n)})).join("\n"):(n=e.cssText.trim())&&(n="  ".concat(n,"\n")),n){var o=e.selector?"".concat(e.selector," {\n"):"",i=e.selector?"}\n":""
r+="".concat(o).concat(n).concat(i)}return r}var V,J,X=(V="-ms-",J="-moz-",C.a.blink?function(e){var t=e.selector
return!(t.includes(V)||t.includes(J))}:C.a.webkit?function(e){var t=e.selector
return!(t.includes(V)||t.includes(J))}:C.a.gecko?function(e){var t=e.selector
return!(t.includes(V)||t.includes("-webkit-"))}:C.a.msedge?function(e){return!e.selector.includes(J)}:C.a.msie?function(e){var t=e.selector
return!(t.includes(J)||t.includes("-webkit-"))}:function(){return!0})
function Z(e,t,n){var r=e.querySelector("#".concat(n)),o=n.toLowerCase()
if(t){var i=!r,a=t
i&&((r=document.createElement("style")).setAttribute("scoped",!0),r.setAttribute("type","text/css"),r.id=n),r.scoped||(!function e(t,n){var r=t.children||t.childNodes
t.setAttribute&&t.setAttribute(n,"")
for(var o=0;o<r.length;o++)e(r[o],n)}(e,o),a=function(e,t){return L(e,(function(e){var n=Object(O.a)({},e)
return e.isScoped||(n.selector=function(e,t){var n=e.selector.split(",");(function(e){return e.parent&&e.parent.type===N})(e)||(n=n.map((function(e){return function(e,t){var n=e.trim()
return n=n.replace(/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g,(function(e,n,r){var o=arguments[arguments.length-2]
return G(r)||o>0?Q(r,n,t):r}))}(e,t)})))
return n.join(",")}(e,t),n.isScoped=!0),n}))}(a,"[".concat(o,"]"))),i&&e.insertBefore(r,e.firstChild),"textContent"in r?r.textContent=a:r.styleSheet.cssText=a}else r&&(r.scoped||function e(t,n){var r=t.children||t.childNodes
t.removeAttribute&&t.removeAttribute(n)
for(var o=0;o<r.length;o++)e(r[o],n)}(e,o),e.removeChild(r))}function G(e){return e.match(/^(\.\S+)/)}function Q(e,t,n){return function(e){return e.match(/^(_|html|body|\:root)/i)}(e)?e:t+(n?function(e,t){var n=e.split(":")
return n[0]+=t,n.join(":")}(e,n):e)}function F(e,t){var n=t?"".concat(t,"-").concat(e):e
return"--".concat(n)}function K(e,t){var n={}
return Object.keys(e||{}).forEach((function(r){n[F(r,t)]=e[r]})),n}function $(e,t){var n={}
return e!==t&&t?(Object.keys(t).forEach((function(r){e[r]!==t[r]&&(n[r]=t[r])})),n):n}var ee,te=n("Od2c"),ne=n.n(te)
function re(){return void 0!==ee?ee:ee=ne.a&&!C.a.msedge&&window.CSS&&window.CSS.supports&&window.CSS.supports("color","var(--primary)")}function oe(e,t){var n=function(e,t){var n,r=[],o=t
o.lastIndex=0,o=new RegExp(o.source,"g")
for(;null!==(n=o.exec(e));)r.push(n),o.lastIndex===n.index&&o.lastIndex++
return r}(e,/@media\s*[^(]*\((--[^)]+)\)?/g),r=e
if(n.length>0){var o="function"==typeof t?t():t
n.forEach((function(e){var t=new RegExp(e[1].replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"),"gm")
r=r.replace(t,o[e[1]])}))}return r}function ie(){return re()?ce.apply(this,arguments):ae.apply(this,arguments)}function ae(e,t){var n=e(t)
return n=oe(n,t?K(t):{})}function ce(e,t,n){var r=e(t?function(e,t){var n={}
return Object.keys(e||{}).forEach((function(e){n[e]="var(".concat(F(e,t),")")})),n}(t,n):{})
return r=[r=oe(r,t?function(){return K(t)}:{}),ue(t?K(t,n):"")].join("\n")}function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[]
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&void 0!==e[n]&&t.push("".concat(n,": ").concat(e[n]))
return t.length>0?"\n      :root {\n        ".concat(t.join(";\n"),";\n      }\n    "):""}function se(){re()?le.apply(this,arguments):fe.apply(this,arguments)}function fe(e,t,n,r,o,i){if(e&&!E()(t)){var a=$(n,t),c=""
a&&Object.keys(a).length>0&&(c=ae(o,Object(O.a)({},n,t))),Z(e,c,i)}}function le(e,t,n,r){if(e&&!E()(t)){!function(e,t){for(var n=e.style,r=n.length-1;r>=0;r--){var o=n[r]
o.indexOf("--".concat(t,"-"))>=0&&e.style.removeProperty(o)}}(e,r)
var o=$(n,t)
o&&!E()(o)&&function(e,t){Object.keys(t).forEach((function(n){var r=t[n]
r&&e.style.setProperty(n,r)}))}(e,K(o,r))}}var pe=!1
function de(){if(!pe&&(pe=!0,ne.a)){var e=document.documentElement.getAttribute("dir")
e||document.documentElement.setAttribute("dir","ltr")}}var me=n("09fR"),ve=n("QroX"),he={},be=Object(g.default)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.displayName||e.name,s="".concat(n&&n.componentId||Object(S.a)())
var f=Symbol(s),p=n&&"function"==typeof n.template?n.template:function(){return""}
Object(me.c)(f,t)
var d=function(e){return y(e)||he},m=function(e){var t=d(e).theme
return t&&t[f]?Object(O.a)({},t[f]):he},v=function(e,t){return Object(me.a)(f,e,t)},h=function(e){function t(){var e,n
Object(o.a)(this,t)
for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s]
return(n=Object(a.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u))))._themeCache=null,n._instanceId=Object(S.a)(r),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){if(!ve.a.mounted(s)){var e=v(),n=ie(p,e,s)
ve.a.mount(s,Y(n))}Object(w.a)(Object(c.a)(t.prototype),"componentWillMount",this)&&Object(w.a)(Object(c.a)(t.prototype),"componentWillMount",this).call(this)}},{key:"componentDidMount",value:function(){this.applyTheme(),de(),Object(w.a)(Object(c.a)(t.prototype),"componentDidMount",this)&&Object(w.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this)}},{key:"shouldComponentUpdate",value:function(e,n,r){return!P()(y(this.context),y(r))||(Object(w.a)(Object(c.a)(t.prototype),"shouldComponentUpdate",this)?Object(w.a)(Object(c.a)(t.prototype),"shouldComponentUpdate",this).call(this,e,n,r):!k()(this.props,e)||!k()(this.state,n)||!k()(this.context,r))}},{key:"componentWillUpdate",value:function(e,n,r){P()(e.theme,this.props.theme)&&P()(m(r),m(this.context))||(this._themeCache=null),Object(w.a)(Object(c.a)(t.prototype),"componentWillUpdate",this)&&Object(w.a)(Object(c.a)(t.prototype),"componentWillUpdate",this).call(this,e,n,r)}},{key:"componentDidUpdate",value:function(e,n,r){this.applyTheme(),Object(w.a)(Object(c.a)(t.prototype),"componentDidUpdate",this)&&Object(w.a)(Object(c.a)(t.prototype),"componentDidUpdate",this).call(this,e,n,r)}},{key:"applyTheme",value:function(e){if(!E()(this.theme)){var t=v()
se(e||_()(this),this.theme,t,s,p,this.scope)}}},{key:"scope",get:function(){return"".concat(s,"__").concat(this._instanceId)}},{key:"theme",get:function(){if(null!==this._themeCache)return this._themeCache
var e=d(this.context).immutable,t=m(this.context)
return this.props.theme&&!E()(this.props.theme)&&(t?e?this.props.theme:t=E()(t)?this.props.theme:Object(O.a)({},t,this.props.theme):t=this.props.theme),this._themeCache=v(null,t),this._themeCache}}]),t}(e)
return h.componentId=s,h.theme=f,h.contextTypes=Object(O.a)({},e.contextTypes,b),h.propTypes=Object(O.a)({},e.propTypes,{theme:l.a.object}),h.generateTheme=v,h}))
be.generateTheme=me.b
var ye=be,we=function(e){function t(){return Object(o.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getChildContext",value:function(){var e=this.props.theme||{},t=y(this.context)||{}
return t.immutable&&t.theme?(this.props.theme,this.props.theme,e=t.theme):t.theme&&(e=d()(t.theme,e)),function(e,t){return Object(h.a)({},"@@themeable",{theme:e,immutable:t})}(e,t.immutable||this.props.immutable)}},{key:"render",value:function(){return v()(this.props.children)}}]),t.displayName="ApplyTheme",t}(s.Component)
we.propTypes={theme:l.a.object,children:l.a.node,immutable:l.a.bool},we.defaultProps={theme:void 0,children:null,immutable:!1},we.childContextTypes=b,we.contextTypes=b,we.generateTheme=ye.generateTheme},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Od2c:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=!("undefined"==typeof window||!window.document||!window.document.createElement)
t.default=r},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}},QSkQ:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.ref,r=e.ref,c=(0,o.default)({},t)
e.props.style&&t.style&&(c.style=(0,o.default)({},e.props.style,t.style))
c.key=e.key||t.key,Object.keys(t).forEach((function(n){0!==n.indexOf("on")||"function"!=typeof t[n]&&"function"!=typeof e.props[n]||(c[n]=(0,a.default)(e.props[n],t[n]))}))
for(var u=arguments.length,s=new Array(u>2?u-2:0),f=2;f<u;f++)s[f-2]=arguments[f]
if(null==r||null==n)return i.default.cloneElement.apply(i.default,[e,c].concat(s))
return"Cloning an element with a ref that will be overwritten because the ref is not a function. Use a composable callback-style ref instead. Ignoring ref: ".concat(r),i.default.cloneElement.apply(i.default,[e,(0,o.default)({},c,{ref:function(e){n(e),r(e)}})].concat(s))}
var o=r(n("MVZn")),i=(n("k9XI"),r(n("q1tI"))),a=r(n("gS0x"))},QroX:function(e,t,n){"use strict";(function(e){var r,o=n("SDpH"),i=e.env.DEBUG||!1,a=Boolean(e.env.DISABLE_SPEEDY_STYLESHEET||i),c={}
t.a={mount:function(e,t){c[e]||(c[e]=function(e){var t=function(){var e=u?window.THEMEABLE_STYLESHEET:r
e||(e=r=function(){var e=new o.StyleSheet({speedy:!a})
return e.inject(),e}(),u&&(window.THEMEABLE_STYLESHEET=e))
return e}(),n=[]
e.forEach((function(e){e&&n.push(t.insert(e))}))}(t))},mounted:function(e){return e in c},flush:function(){var e=u?window.THEMEABLE_STYLESHEET:r
e&&e.flush(),c={},r=null,u&&(window.THEMEABLE_STYLESHEET=null)}}
var u=!("undefined"==typeof window||!window.document||!window.document.createElement)}).call(this,n("8oxB"))},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag")
e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},TNh1:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(o(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var n=Object.keys(e),i=Object.keys(t)
if(n.length!==i.length)return!1
for(var a=0;a<n.length;a++)if(!r.call(t,n[a])||!o(e[n[a]],t[n[a]]))return!1
return!0}
var r=Object.prototype.hasOwnProperty
function o(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UWJt:function(e,t,n){"use strict"
n.r(t)
var r=n("1OyB"),o=n("vuIU"),i=n("md7G"),a=n("foSv"),c=n("ReuC"),u=n("Ji7U"),s=n("i8i4"),f=n("b7MV")
t.default=Object(f.default)((function(e){var t={attribute:"data-cid",value:e.displayName||e.name},n="[".concat(t.attribute,'~="').concat(t.value,'"]'),f=function(e){function n(){return Object(r.a)(this,n),Object(i.a)(this,Object(a.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(o.a)(n,[{key:"componentDidMount",value:function(){if(Object(c.a)(Object(a.a)(n.prototype),"componentDidMount",this)){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=Object(c.a)(Object(a.a)(n.prototype),"componentDidMount",this)).call.apply(e,[this].concat(r))}this.appendLocatorAttribute()}},{key:"componentDidUpdate",value:function(){if(Object(c.a)(Object(a.a)(n.prototype),"componentDidUpdate",this)){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=Object(c.a)(Object(a.a)(n.prototype),"componentDidUpdate",this)).call.apply(e,[this].concat(r))}this.appendLocatorAttribute()}},{key:"componentWillUnmount",value:function(){if(this._testableUnmounted=!0,Object(c.a)(Object(a.a)(n.prototype),"componentWillUnmount",this)){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];(e=Object(c.a)(Object(a.a)(n.prototype),"componentWillUnmount",this)).call.apply(e,[this].concat(r))}clearTimeout(this.locatorTimeout)}},{key:"appendLocatorAttribute",value:function(){var e=this
this.locatorTimeout=setTimeout((function(){var n
if(!e._testableUnmounted){try{n=Object(s.findDOMNode)(e)||e.DOMNode}catch(e){}if(n&&n.getAttribute){var r=n.getAttribute(t.attribute),o="string"==typeof r?r.split(/\s+/):[]
o.includes(t.value)||o.push(t.value),n.setAttribute(t.attribute,o.join(" "))}}}))}}]),n}(e)
return f.selector=n,f}))},UWfp:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ",o=r.length-1
function i(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,t="u".concat(c("",e-1))
return t}function a(e){for(var t=[];0<e--;)t.push(Math.floor(256*Math.random()))
return t}function c(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n="",i=a(t);0<t--;)n+=r[i[t]&o]
return n}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}},YGEp:function(e,t,n){"use strict"
n.r(t),n.d(t,"Children",(function(){return r})),n.d(t,"childrenOrValue",(function(){return l})),n.d(t,"controllable",(function(){return p})),n.d(t,"cursor",(function(){return v})),n.d(t,"element",(function(){return h})),n.d(t,"makeRequirable",(function(){return a})),n.d(t,"xor",(function(){return b}))
var r={}
n.r(r),n.d(r,"oneOf",(function(){return c})),n.d(r,"oneOfEach",(function(){return u})),n.d(r,"enforceOrder",(function(){return s}))
var o=n("q1tI"),i=n.n(o)
function a(e){return function(t,n,r){var o=t[n]
if(null==o)return new Error("The prop `".concat(n,"` is marked as required in `").concat(r,"`, but its value is `").concat(o,"`"))
for(var i=arguments.length,a=new Array(i>3?i-3:0),c=3;c<i;c++)a[c-3]=arguments[c]
return e.apply(void 0,[t,n,r].concat(a))}}function c(e){function t(t,n,r){for(var o=i.a.Children.toArray(t[n]),a=e.map((function(e){return e?f(e):e})),c=0;c<o.length;c++){var u=o[c]
if(u&&u.type){var s=f(u.type)
if(a.indexOf(s)<0)return new Error("Expected one of ".concat(a.join(", ")," in ").concat(r," but found '").concat(s,"'"))}else if(u)return new Error("Expected one of ".concat(a.join(", ")," in ").concat(r," but found an element with unknown type: ").concat(u))}}return t.isRequired=a(t),t}function u(e){return function(t,n,r){for(var o=i.a.Children.toArray(t[n]),a={},c=e.map((function(e){var t=f(e)
return a[t]=0,t})),u=0;u<o.length;u++){var s=o[u]
if(s&&s.type){var l=f(s.type)
if(c.indexOf(l)<0)return new Error("Expected one of ".concat(c.join(", ")," in ").concat(r," but found '").concat(l,"'"))
a[l]=(a[l]||0)+1}else if(s)return new Error("Expected one of ".concat(c.join(", ")," in ").concat(r," but found an element of unknown type: ").concat(s))}var p=[]
if(Object.keys(a).forEach((function(e){a[e]>1&&p.push("".concat(a[e]," children of type ").concat(e)),0===a[e]&&p.push("0 children of type ".concat(e))})),p.length>0)return new Error("Expected exactly one of each ".concat(c.join(", ")," in ").concat(r," but found:\n").concat(p.join("\n")))}}function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
function r(e,t){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1
return!0}function o(e,t){return t.map((function(t){return c(e,t)})).join("\n\n")}function c(e,t){var n=t.map((function(e){return e?f(e):"??"})).map((function(e){return"  <".concat(e," />")})).join("\n")
return"<".concat(e,">\n").concat(n,"\n</").concat(e,">")}function u(e,n,a){for(var u=i.a.Children.toArray(e[n]).map((function(e){return e&&e.type?f(e.type):e?null:void 0})),s=0;s<t.length;s++){if(r(u,t[s].map((function(e){return e?f(e):"??"}))))return}return new Error("Expected children of ".concat(a," in one of the following formats:\n").concat(o(a,t),"\n\n\nInstead of:\n").concat(c(a,u)))}return u.isRequired=a(u),u}var f=function(e){return"string"==typeof e?e:e.displayName||e.name}
function l(e,t,n){if("input"===e.as){if("children"===t&&e.children||null==e.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else if("value"===t&&null!=e.value||!e.children)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onChange",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"defaultValue"
return function(r,o,i){var a=e.apply(null,arguments)
return a||(r[o]&&"function"!=typeof r[t]?new Error(["You provided a '".concat(o,"' prop without an '").concat(t,"' handler on '").concat(i,"'. This will render a controlled component. If the component should be uncontrolled and manage its own state, use '").concat(n,"'. Otherwise, set '").concat(t,"'.")].join("")):void 0)}}var d=n("17x9"),m=n.n(d),v=m.a.oneOf(["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out"]),h=!("undefined"==typeof window||!window.document||!window.document.createElement)?m.a.oneOfType([m.a.element,m.a.instanceOf(Element)]):m.a.element
function b(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
return function(t,r,o){if(null!=t[r]){var i=n.map((function(e){return t[e]})).filter((function(e){return null!=e}))
if(i.length>0)return new Error("Invalid prop `".concat(r,"` supplied to `").concat(o,"`: expected only one of ")+"".concat([r].concat(n).map((function(e){return"`".concat(e,"`")})).join(", ")," to be set."))}return e.apply(null,arguments)}}t.default={Children:r,childrenOrValue:l,controllable:p,cursor:v,element:h,makeRequirable:a,xor:b}},ZhPi:function(e,t,n){var r=n("WkPL")
e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ")
e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},b7MV:function(e,t,n){"use strict"
function r(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r]
return function(t){if("function"==typeof e){var r=t.displayName||t.name,o=e.apply(void 0,[t].concat(n))
return o.displayName=r,o}return t}}}n.r(t),n.d(t,"default",(function(){return r}))},cDf5:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},cZ6H:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("object"!=typeof e)return!0
for(var t in e)if(r.call(e,t))return!1
return!0}
var r=Object.prototype.hasOwnProperty},dx2O:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.warnDeprecatedComponent=function(e,t,n){"[".concat(t,"] was deprecated in version ").concat(e,". ").concat(n||"")},t.changedPackageWarning=function(e,t){return"It has been moved from @instructure/".concat(e," to @instructure/").concat(t,".")},t.deprecatePropValues=t.default=void 0
var o=r(n("lwsE")),i=r(n("a1gu")),a=r(n("Nsbk")),c=r(n("7W2i")),u=(n("k9XI"),(0,r(n("b7MV")).default)((function(e,t,n,r){return function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,a.default)(t).apply(this,arguments))}return(0,c.default)(t,e),t}(e)})))
t.default=u
t.deprecatePropValues=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0
return function(r,o,i){var a=t.includes(r[o])
"[".concat(i,"] The '").concat(r[o],"' value for the `").concat(o,"` prop is deprecated. ").concat(n||"")
for(var c=arguments.length,u=new Array(c>3?c-3:0),s=3;s<c;s++)u[s-3]=arguments[s]
return a?null:e.apply(void 0,[r,o,i].concat(u))}}},gS0x:function(e,t,n){"use strict"
function r(e,t){var n=[]
return e.forEach((function(e,r){e===t&&n.push(r)})),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.filter((function(e,n){if(null==e)return!1
var o=r(t,e)
return 1===o.length||n===o[0]})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.")
return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o]
e.apply(this,r),t.apply(this,r)}}),null)}},iV4t:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(t.as&&t.as!==e.defaultProps.as)return t.as
if("function"==typeof n)return n()
if(t.href)return"a"
if(t.to)return t.as,"[".concat(e.displayName,"] `as` prop should be provided when using `to`"),"a"
if("function"==typeof t.onClick)return"button"
return e.defaultProps.as||"span"}
n("k9XI")},igdM:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=Array.prototype.slice.call(arguments),t={}
return e.forEach((function(e){t=a(t,e)})),t}
var o=r(n("MVZn")),i=r(n("RIqP"))
function a(e,t){if(c(t)){var n=[].concat((0,i.default)(Object.keys(t)),(0,i.default)(Object.getOwnPropertySymbols(t))),r=(0,o.default)({},e)
return n.forEach((function(n){c(e[n])&&c(t[n])?r[n]=a(e[n],t[n]):u(t[n])&&u(e[n])?r[n]=(0,i.default)(new Set([].concat((0,i.default)(e[n]),(0,i.default)(t[n])))):u(e[n])?r[n]=(0,i.default)(new Set([].concat((0,i.default)(e[n]),[t[n]]))):r[n]=t[n]})),r}return(0,o.default)({},e)}function c(e){return e&&("object"==typeof e||"function"==typeof e)&&!Array.isArray(e)}function u(e){return e&&Array.isArray(e)}},k9XI:function(e,t,n){n("q1tI")
function r(e,t,n){}t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return r.apply(void 0,["error"].concat(t))},t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return r.apply(void 0,["warn"].concat(t))},t.info=function(){var e
return(e=console).info.apply(e,arguments)},t.assert=function(){var e
return(e=console).assert.apply(e,arguments)},t.debug=function(){var e
return(e=console).debug.apply(e,arguments)},t.log=function(){var e
return(e=console).log.apply(e,arguments)}},kH7O:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="function"==typeof e?e():e
if(t===document)return document.documentElement
if(t instanceof Element||t===window||t&&void 0!==t.nodeType)return t
if(t)return o.default.findDOMNode(t)}
var o=r(n("i8i4"))},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},puQj:function(e,t,n){var r
r=function(){var e=!0
function t(t){function n(e){var n=t.match(e)
return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e)
return n&&n.length>1&&n[2]||""}var o,a=n(/(ipod|iphone|ipad)/i).toLowerCase(),c=!/like android/i.test(t)&&/android/i.test(t),u=/nexus\s*[0-6]\s*/i.test(t),s=!u&&/nexus\s*[0-9]+/i.test(t),f=/CrOS/.test(t),l=/silk/i.test(t),p=/sailfish/i.test(t),d=/tizen/i.test(t),m=/(web|hpw)(o|0)s/i.test(t),v=/windows phone/i.test(t),h=(/SamsungBrowser/i.test(t),!v&&/windows/i.test(t)),b=!a&&!l&&/macintosh/i.test(t),y=!c&&!p&&!d&&!m&&/linux/i.test(t),w=r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),O=n(/version\/(\d+(\.\d+)?)/i),g=/tablet/i.test(t)&&!/tablet pc/i.test(t),j=!g&&/[^-]mobi/i.test(t),k=/xbox/i.test(t);/opera/i.test(t)?o={name:"Opera",opera:e,version:O||n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(t)?o={name:"Opera",opera:e,version:n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||O}:/SamsungBrowser/i.test(t)?o={name:"Samsung Internet for Android",samsungBrowser:e,version:O||n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/Whale/i.test(t)?o={name:"NAVER Whale browser",whale:e,version:n(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)}:/MZBrowser/i.test(t)?o={name:"MZ Browser",mzbrowser:e,version:n(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/coast/i.test(t)?o={name:"Opera Coast",coast:e,version:O||n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/focus/i.test(t)?o={name:"Focus",focus:e,version:n(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)}:/yabrowser/i.test(t)?o={name:"Yandex Browser",yandexbrowser:e,version:O||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?o={name:"UC Browser",ucbrowser:e,version:n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?o={name:"Maxthon",maxthon:e,version:n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?o={name:"Epiphany",epiphany:e,version:n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?o={name:"Puffin",puffin:e,version:n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?o={name:"Sleipnir",sleipnir:e,version:n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?o={name:"K-Meleon",kMeleon:e,version:n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:v?(o={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},w?(o.msedge=e,o.version=w):(o.msie=e,o.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?o={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:f?o={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(t)?o={name:"Microsoft Edge",msedge:e,version:w}:/vivaldi/i.test(t)?o={name:"Vivaldi",vivaldi:e,version:n(/vivaldi\/(\d+(\.\d+)?)/i)||O}:p?o={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?o={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(o={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(o.firefoxos=e,o.osname="Firefox OS")):l?o={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?o={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?o={name:"SlimerJS",slimer:e,version:n(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?o={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:O||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:m?(o={name:"WebOS",osname:"WebOS",webos:e,version:O||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(o.touchpad=e)):/bada/i.test(t)?o={name:"Bada",osname:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:d?o={name:"Tizen",osname:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||O}:/qupzilla/i.test(t)?o={name:"QupZilla",qupzilla:e,version:n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||O}:/chromium/i.test(t)?o={name:"Chromium",chromium:e,version:n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||O}:/chrome|crios|crmo/i.test(t)?o={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:c?o={name:"Android",version:O}:/safari|applewebkit/i.test(t)?(o={name:"Safari",safari:e},O&&(o.version=O)):a?(o={name:"iphone"==a?"iPhone":"ipad"==a?"iPad":"iPod"},O&&(o.version=O)):o=/googlebot/i.test(t)?{name:"Googlebot",googlebot:e,version:n(/googlebot\/(\d+(\.\d+))/i)||O}:{name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!o.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(o.name=o.name||"Blink",o.blink=e):(o.name=o.name||"Webkit",o.webkit=e),!o.version&&O&&(o.version=O)):!o.opera&&/gecko\//i.test(t)&&(o.name=o.name||"Gecko",o.gecko=e,o.version=o.version||n(/gecko\/(\d+(\.\d+)?)/i)),o.windowsphone||!c&&!o.silk?!o.windowsphone&&a?(o[a]=e,o.ios=e,o.osname="iOS"):b?(o.mac=e,o.osname="macOS"):k?(o.xbox=e,o.osname="Xbox"):h?(o.windows=e,o.osname="Windows"):y&&(o.linux=e,o.osname="Linux"):(o.android=e,o.osname="Android")
var x=""
o.windows?x=function(e){switch(e){case"NT":return"NT"
case"XP":return"XP"
case"NT 5.0":return"2000"
case"NT 5.1":return"XP"
case"NT 5.2":return"2003"
case"NT 6.0":return"Vista"
case"NT 6.1":return"7"
case"NT 6.2":return"8"
case"NT 6.3":return"8.1"
case"NT 10.0":return"10"
default:return}}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)):o.windowsphone?x=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):o.mac?x=(x=n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):a?x=(x=n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):c?x=n(/android[ \/-](\d+(\.\d+)*)/i):o.webos?x=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):o.blackberry?x=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):o.bada?x=n(/bada\/(\d+(\.\d+)*)/i):o.tizen&&(x=n(/tizen[\/\s](\d+(\.\d+)*)/i)),x&&(o.osversion=x)
var E=!o.windows&&x.split(".")[0]
return g||s||"ipad"==a||c&&(3==E||E>=4&&!j)||o.silk?o.tablet=e:(j||"iphone"==a||"ipod"==a||c||u||o.blackberry||o.webos||o.bada)&&(o.mobile=e),o.msedge||o.msie&&o.version>=10||o.yandexbrowser&&o.version>=15||o.vivaldi&&o.version>=1||o.chrome&&o.version>=20||o.samsungBrowser&&o.version>=4||o.whale&&1===i([o.version,"1.0"])||o.mzbrowser&&1===i([o.version,"6.0"])||o.focus&&1===i([o.version,"1.0"])||o.firefox&&o.version>=20||o.safari&&o.version>=6||o.opera&&o.version>=10||o.ios&&o.osversion&&o.osversion.split(".")[0]>=6||o.blackberry&&o.version>=10.1||o.chromium&&o.version>=20?o.a=e:o.msie&&o.version<10||o.chrome&&o.version<20||o.firefox&&o.version<20||o.safari&&o.version<6||o.opera&&o.version<10||o.ios&&o.osversion&&o.osversion.split(".")[0]<6||o.chromium&&o.version<20?o.c=e:o.x=e,o}var n=t("undefined"!=typeof navigator&&navigator.userAgent||"")
function r(e){return e.split(".").length}function o(e,t){var n,r=[]
if(Array.prototype.map)return Array.prototype.map.call(e,t)
for(n=0;n<e.length;n++)r.push(t(e[n]))
return r}function i(e){for(var t=Math.max(r(e[0]),r(e[1])),n=o(e,(function(e){var n=t-r(e)
return o((e+=new Array(n+1).join(".0")).split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));--t>=0;){if(n[0][t]>n[1][t])return 1
if(n[0][t]!==n[1][t])return-1
if(0===t)return 0}}function a(e,r,o){var a=n
"string"==typeof r&&(o=r,r=void 0),void 0===r&&(r=!1),o&&(a=t(o))
var c=""+a.version
for(var u in e)if(e.hasOwnProperty(u)&&a[u]){if("string"!=typeof e[u])throw new Error("Browser version in the minVersion map should be a string: "+u+": "+String(e))
return i([c,e[u]])<0}return r}return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t]
if("string"==typeof r&&r in n)return!0}return!1},n.isUnsupportedBrowser=a,n.compareVersions=i,n.check=function(e,t,n){return!a(e,t,n)},n._detect=t,n.detect=t,n},e.exports?e.exports=r():n("B9Yq")("bowser",r)},vYBF:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=r(n("puQj")).default
t.default=o},vpQ4:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("rePB")
function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){Object(r.a)(e,t,n[t])}))}return e}}}])

//# sourceMappingURL=91-c-e261fd600f.js.map