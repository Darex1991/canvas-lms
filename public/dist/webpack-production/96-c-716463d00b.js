(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[96],{"8bmU":function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("z6x1")
function o(e,t){var n={}
return Object.keys(e||{}).forEach((function(e){n[e]="var(".concat(Object(r.a)(e,t),")")})),n}},"L+PU":function(e,t,n){"use strict";(function(e){n("VTBJ")
var t=n("rePB"),r=(n("DEX3"),n("7fzX"),n("PSQ9"),n("hKaE")),o=(n("zrR+"),n("vU9W"),n("W65C"),"@@themeableDefaultTheme")
function a(){return{styleSheet:r.a,defaultThemeKey:null,components:Object(t.a)({},o,{}),themes:{},registered:[]}}function c(t){e.GLOBAL_THEME_REGISTRY=t}function i(){c(a())}e.GLOBAL_THEME_REGISTRY?c(function(e){var t=a()
if(void 0===e)return t
return Object.keys(t).forEach((function(t){void 0===e[t]&&!1})),e}(e.GLOBAL_THEME_REGISTRY)):i()}).call(this,n("yLpj"))},QRVv:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("z6x1")
function o(e,t){var n={}
return Object.keys(e||{}).forEach((function(o){n[Object(r.a)(o,t)]=e[o]})),n}},W65C:function(e,t,n){"use strict"
n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}))
var r=n("VTBJ"),o=n("t0/g")
function a(e,t){var n=Object(o.b)(e)
return"function"==typeof t&&(n=function e(t,n){if(!t)return
if(t.type===o.c.style)return n(t)
var a=t.rules||[],c=Object(r.a)({},t)
return c.rules=a.map((function(t){return e(t,n)})),c}(n,t)),s(n)}function c(e){return e.parent&&e.parent.type===o.c.keyframes}function i(e){var t=Object(o.b)(e),n=[]
if(t.rules&&t.rules.length>0)n=t.rules.map((function(e){return s(e)}))
else{var r=s(t)
r&&(n=[r])}return n}function s(e,t){var n="",r=t||""
if(e.rules&&e.rules.length>0?n=e.rules.map((function(e){return s(e,n)})).join("\n"):(n=e.cssText.trim())&&(n="  ".concat(n,"\n")),n){var o=e.selector?"".concat(e.selector," {\n"):"",a=e.selector?"}\n":""
r+="".concat(o).concat(n).concat(a)}return r}},aMRG:function(e,t,n){"use strict"
function r(e,t){var n=function(e,t){var n,r=[],o=t
o.lastIndex=0,o=new RegExp(o.source,"g")
for(;null!==(n=o.exec(e));)r.push(n),o.lastIndex===n.index&&o.lastIndex++
return r}(e,/@media\s*[^(]*\((--[^)]+)\)?/g),r=e
if(n.length>0){var o="function"==typeof t?t():t
n.forEach((function(e){var t=new RegExp(e[1].replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"),"gm")
r=r.replace(t,o[e[1]])}))}return r}n.d(t,"a",(function(){return r}))},"t0/g":function(e,t,n){"use strict"
function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=a(e)
return l(c(t),t)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o}))
var o={style:1,keyframes:7,media:4}
function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return e.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,"").replace(/@import[^;]*;/gim,"")}function c(e){var t={start:0,end:e.length},n=t
return e.split("").forEach((function(e,r){switch(e){case"{":n.rules||(n.rules=[])
var o=n,a=o.rules[o.rules.length-1]
n={start:r+1,parent:o,previous:a},o.rules.push(n)
break
case"}":n.end=r+1,n=n.parent||t}})),t}function i(e,t){var n=e.previous?e.previous.end:e.parent.start,r=e.start-1,o=t.substring(n,r)
return(o=(o=o.replace(/\s+/g," ")).substring(o.lastIndexOf(";")+1)).trim()}function s(e){return 0!==e.indexOf("@")?o.style:0===e.indexOf("@media")?o.media:e.match(/^@[^\s]*keyframes/)?o.keyframes:void 0}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
return e.parent&&(e.selector=i(e,t),e.type=s(e.selector)),e.cssText=t.substring(e.start,e.end-1).trim(),e.rules&&e.rules.length>0&&(e.rules=e.rules.map((function(e){return l(e,t)}))),e}},uM59:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r,o=n("i/8D"),a=n("8S//")
function c(){if(void 0!==r)return r
var e=navigator&&navigator.userAgent&&navigator.userAgent.includes("jsdom"),t=window.CSS&&window.CSS.supports&&window.CSS.supports("color","var(--primary)")
return r=o.a&&!a.a&&(t||e)}},vU9W:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}))
var r=n("8bmU"),o=n("QRVv"),a=n("aMRG"),c=n("uM59")
function i(){return Object(c.a)()?l.apply(this,arguments):s.apply(this,arguments)}function s(e,t){var n=e(t),r=t?Object(o.a)(t):{}
return n=Object(a.a)(n,r)}function l(e,t,n){var c=e(t?Object(r.a)(t,n):{}),i=t?function(){return Object(o.a)(t)}:{}
return c=[c=Object(a.a)(c,i),u(t?Object(o.a)(t,n):"")].join("\n")}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[]
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&void 0!==e[n]&&t.push("".concat(n,": ").concat(e[n]))
return t.length>0?"\n      :root {\n        ".concat(t.join(";\n"),";\n      }\n    "):""}},wnpw:function(e,t,n){"use strict"
n.d(t,"a",(function(){return I}))
var r=n("rePB"),o=n("VTBJ"),a=n("Ff2n"),c=n("1OyB"),i=n("vuIU"),s=n("md7G"),l=n("foSv"),u=n("Ji7U"),p=n("q1tI"),f=n.n(p),d=n("17x9"),v=n.n(d),h=n("TSYQ"),m=n.n(h),b=n("zOG4"),g=n("zrR+"),y=(n("9uj6"),Object.prototype.hasOwnProperty)
function O(e,t,n){var r=Object.keys(t||{})
return function(e,t){var n={}
for(var r in e)"theme"!==r&&"children"!==r&&"className"!==r&&"style"!==r&&!t.includes(r)&&y.call(e,r)&&(n[r]=e[r])
return n}(e,n?r.concat(n):r)}var x,j,S,C=n("oXx0")
function E(e){var t=e.colors
return{primaryInverseColor:t.textLightest,primaryColor:t.textDarkest,secondaryColor:t.textDark,secondaryInverseColor:t.textLight,warningColor:t.textWarning,brandColor:t.textBrand,errorColor:t.textDanger,alertColor:t.textAlert,successColor:t.textSuccess}}E.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var T={componentId:"esvoZ",template:function(e){return"\n\n.esvoZ_bGBk{fill:currentColor}\n\n.esvoZ_eXrk{display:inline-block}\n\n.esvoZ_cRbP{display:block}\n\n.esvoZ_drOs{color:inherit}\n\n.esvoZ_eCSh{color:".concat(e.primaryColor||"inherit","}\n\n.esvoZ_buuG{color:").concat(e.secondaryColor||"inherit","}\n\n.esvoZ_bFtJ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.esvoZ_dsSB{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.esvoZ_eZal{color:").concat(e.successColor||"inherit","}\n\n.esvoZ_cVUo{color:").concat(e.brandColor||"inherit","}\n\n.esvoZ_eScd{color:").concat(e.warningColor||"inherit","}\n\n.esvoZ_cpQl{color:").concat(e.errorColor||"inherit","}\n\n.esvoZ_cUGG{color:").concat(e.alertColor||"inherit","}")},root:"esvoZ_bGBk",inline:"esvoZ_eXrk",block:"esvoZ_cRbP","color--inherit":"esvoZ_drOs","color--primary":"esvoZ_eCSh","color--secondary":"esvoZ_buuG","color--primary-inverse":"esvoZ_bFtJ","color--secondary-inverse":"esvoZ_dsSB","color--success":"esvoZ_eZal","color--brand":"esvoZ_cVUo","color--warning":"esvoZ_eScd","color--error":"esvoZ_cpQl","color--alert":"esvoZ_cUGG"},I=Object(C.a)()(x=Object(b.a)(E,T)((S=j=function(e){function t(){var e
return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this))).titleId=Object(g.a)("InlineSVG-title"),e.descId=Object(g.a)("InlineSVG-desc"),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"renderTitle",value:function(){var e=this.props.title
return e?f.a.createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(e){return e?f.a.createElement("desc",{id:this.descId},e):null}},{key:"renderContent",value:function(){if(this.props.src){var e=t.prepareSrc(this.props.src)
return f.a.createElement("g",{role:"presentation",dangerouslySetInnerHTML:{__html:e}})}return f.a.createElement("g",{role:"presentation"},this.props.children)}},{key:"render",value:function(){var e,n=this.props,c=n.style,i=n.title,s=n.description,l=n.focusable,u=(n.children,n.src,n.color),p=Object(a.a)(n,["style","title","description","focusable","children","src","color"]),d="auto"===this.props.width?null:this.props.width,v="auto"===this.props.height?null:this.props.height
return f.a.createElement("svg",Object.assign({},function(e){var t={},n=/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/g
if("string"==typeof e)for(var r=/<svg\s+([^>]*)\s*>/.exec(e),o=r?r[1]:"",a=["xmlns","xmlns:xlink","version"],c=n.exec(o);null!=c;)-1===a.indexOf(c[1])&&(t[c[1]]=c[2]||(c[3]?c[3]:c[4]?c[4]:c[5])||c[1]),c=n.exec(o)
return t}(this.props.src),O(this.props,t.propTypes,["inline"]),{style:Object(o.a)({},c,{width:d,height:v}),width:d,height:v,"aria-hidden":i?null:"true","aria-labelledby":this.labelledBy,role:this.role,focusable:l?"true":"false",className:m()((e={},Object(r.a)(e,T.root,!0),Object(r.a)(e,T["color--".concat(u)],"auto"!==u),Object(r.a)(e,T.inline,this.props.inline),Object(r.a)(e,T.block,!this.props.inline),Object(r.a)(e,p.className,p.className),e))}),this.renderTitle(),this.renderDesc(s),this.renderContent())}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[]
return this.props.title&&e.push(this.titleId),this.props.description&&e.push(this.descId),e.length>0?e.join(" "):null}}]),t.displayName="InlineSVG",t}(p.Component),j.propTypes={children:v.a.node,src:v.a.string,title:v.a.string,description:v.a.string,focusable:v.a.bool,width:v.a.oneOfType([v.a.string,v.a.number]),height:v.a.oneOfType([v.a.string,v.a.number]),inline:v.a.bool,color:v.a.oneOf(["inherit","primary","secondary","primary-inverse","secondary-inverse","success","error","alert","warning","brand","auto"])},j.defaultProps={focusable:!1,src:"",title:"",description:"",inline:!0,children:null,width:"1em",height:"1em",color:"inherit"},j.prepareSrc=function(e){var t=/<svg[^>]*>((.|[\n\r])*)<\/svg>/.exec(e)
return t?t[1]:e},x=S))||x)||x},z6x1:function(e,t,n){"use strict"
function r(e,t){var n=t?"".concat(t,"-").concat(e):e
return"--".concat(n)}n.d(t,"a",(function(){return r}))},zOG4:function(e,t,n){"use strict"
n.d(t,"a",(function(){return y.b}))
var r=n("1OyB"),o=n("vuIU"),a=n("md7G"),c=n("foSv"),i=n("Ji7U"),s=(n("DEX3"),n("q1tI")),l=n.n(s),u=n("17x9"),p=n.n(u),f=n("PSQ9"),d=n("VTBJ"),v=n("9yTY")
function h(e,t){var n=t.ref,r=e.ref,o=Object(d.a)({},t)
e.props.style&&t.style&&(o.style=Object(d.a)({},e.props.style,{},t.style)),o.key=e.key||t.key,Object.keys(t).forEach((function(n){0!==n.indexOf("on")||"function"!=typeof t[n]&&"function"!=typeof e.props[n]||(o[n]=Object(v.a)(e.props[n],t[n]))}))
for(var a=arguments.length,c=new Array(a>2?a-2:0),i=2;i<a;i++)c[i-2]=arguments[i]
return null==r||null==n?l.a.cloneElement.apply(l.a,[e,o].concat(c)):("Cloning an element with a ref that will be overwritten because the ref is not a function. Use a composable callback-style ref instead. Ignoring ref: ".concat(r),l.a.cloneElement.apply(l.a,[e,Object(d.a)({},o,{ref:function(e){n(e),r(e)}})].concat(c)))}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=s.Children.count(e)
return 0===n?null:"string"==typeof e&&e.length>0||n>1?l.a.createElement("span",t,e):h(Array.isArray(e)?e[0]:e,t)}var b=n("rePB"),g={CONTEXT_KEY:"@@themeable",types:Object(b.a)({},"@@themeable",p.a.object),makeThemeContext:function(e,t){return Object(b.a)({},"@@themeable",{theme:e,immutable:t})},getThemeContext:function(e){if(e)return e["@@themeable"]}},y=n("NSe8"),O=function(e){function t(){return Object(r.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"getChildContext",value:function(){var e=this.props.theme||{},t=g.getThemeContext(this.context)||{}
return t.immutable&&t.theme?(this.props.theme,this.props.theme,e=t.theme):t.theme&&(e=Object(f.a)(t.theme,e)),g.makeThemeContext(e,t.immutable||this.props.immutable)}},{key:"render",value:function(){return m(this.props.children)}}]),t.displayName="ApplyTheme",t}(s.Component)
O.propTypes={theme:p.a.object,children:p.a.node,immutable:p.a.bool},O.defaultProps={theme:void 0,children:null,immutable:!1},O.childContextTypes=g.types,O.contextTypes=g.types,O.generateTheme=y.b.generateTheme
var x={SHADOW_TYPES:{resting:"resting",above:"above",topmost:"topmost",none:"none"},STACKING_TYPES:{deepest:"deepest",below:"below",resting:"resting",above:"above",topmost:"topmost"},BORDER_WIDTHS:{0:"0",none:"none",small:"small",medium:"medium",large:"large"},BORDER_RADII:{0:"0",none:"none",small:"small",medium:"medium",large:"large",circle:"circle",pill:"pill"},BACKGROUNDS:{default:"default",inverse:"inverse",transparent:"transparent"},SIZES:{xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large"},SPACING:{0:"0",none:"none",auto:"auto",xxxSmall:"xxx-small",xxSmall:"xx-small",xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large",xxLarge:"xx-large"}}
n("aMRG"),n("7fzX"),n("W65C")
n("QRVv")
n("uM59"),n("vU9W")
n("z6x1"),n("KMpz")
n("8bmU"),n("i/8D")
var j=x.SHADOW_TYPES,S=x.STACKING_TYPES,C=x.BORDER_WIDTHS,E=x.BORDER_RADII,T=x.BACKGROUNDS,I=x.SIZES,_=x.SPACING
function k(e){return function(t,n,r,o){var a=t[n]
if(void 0!==a){var c=typeof a
if("string"!==c)return new Error("Invalid ".concat(o," `").concat(n,"` of type `").concat(c,"` supplied to `").concat(r,"`, expected ")+"a string.")
var i=a.split(" "),s=i.length
if(!(s>0&&s<5))return new Error("Invalid ".concat(o," `").concat(n,"` `").concat(a,"` supplied to `").concat(r,"`, expected ")+"between one and four of the following valid values: `".concat(e.join(", "),"`."))
for(var l=0;l<s;l++){if(-1===e.indexOf(i[l]))return new Error("Invalid ".concat(o," `").concat(n,"` `").concat(i[l],"` supplied to `").concat(r,"`, expected ")+"a one of `".concat(e.join(", "),"`."))}}}}p.a.oneOf(Object.values(j)),p.a.oneOf(Object.values(S)),k(Object.values(C)),k(Object.values(E)),p.a.oneOf(Object.values(T)),p.a.oneOf(Object.values(I)),k(Object.values(_))
var w=n("t0/g")
w.a,w.c,n("L+PU"),n("ODXe")},"zrR+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ",o=r.length-1
function a(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,t="u".concat(i("",e-1))
return t}function c(e){for(var t=[];0<e--;)t.push(Math.floor(256*Math.random()))
return t}function i(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n="",a=c(t);0<t--;)n+=r[a[t]&o]
return n}}}])

//# sourceMappingURL=96-c-716463d00b.js.map