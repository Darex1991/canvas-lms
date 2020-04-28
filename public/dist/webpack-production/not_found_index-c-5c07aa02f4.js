(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[464],{"+mIj":function(e,t,n){"use strict";(function(e){var o,i=n("SDpH"),r=e.env.DEBUG||!1,a=Boolean(e.env.DISABLE_SPEEDY_STYLESHEET||r),c={}
t.a={mount:function(e,t){c[e]||(c[e]=function(e){var t=function(){var e=l?window.THEMEABLE_STYLESHEET:o
e||(e=o=function(){var e=new i.StyleSheet({speedy:!a})
return e.inject(),e}(),l&&(window.THEMEABLE_STYLESHEET=e))
return e}(),n=[]
e.forEach((function(e){e&&n.push(t.insert(e))}))}(t))},mounted:function(e){return e in c},flush:function(){var e=l?window.THEMEABLE_STYLESHEET:o
e&&e.flush(),c={},o=null,l&&(window.THEMEABLE_STYLESHEET=null)}}
var l=!("undefined"==typeof window||!window.document||!window.document.createElement)}).call(this,n("8oxB"))},"32wY":function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=o(n("puQj")).default
t.default=i},"4s1B":function(e,t,n){"use strict"
var o=n("TqRt"),i=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.Children.count(e)
return 0===n?null:"string"==typeof e&&e.length>0||n>1?r.default.createElement("span",t,e):(0,a.default)(Array.isArray(e)?e[0]:e,t)}
var r=i(n("q1tI")),a=o(n("C4tn"))},"63Bt":function(e,t,n){"use strict"
function o(e,t){var n=[]
return e.forEach((function(e,o){e===t&&n.push(o)})),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return t.filter((function(e,n){if(null==e)return!1
var i=o(t,e)
return 1===i.length||n===i[0]})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.")
return null===e?t:function(){for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i]
e.apply(this,o),t.apply(this,o)}}),null)}},"7gQv":function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.warnDeprecatedComponent=function(e,t,n){"[".concat(t,"] was deprecated in version ").concat(e,". ").concat(n||"")},t.changedPackageWarning=function(e,t){return"It has been moved from @instructure/".concat(e," to @instructure/").concat(t,".")},t.deprecatePropValues=t.default=void 0
var i=o(n("lwsE")),r=o(n("a1gu")),a=o(n("Nsbk")),c=o(n("7W2i")),l=(n("Qdpf"),(0,o(n("BkXG")).default)((function(e,t,n,o){return function(e){function t(){return(0,i.default)(this,t),(0,r.default)(this,(0,a.default)(t).apply(this,arguments))}return(0,c.default)(t,e),t}(e)})))
t.default=l
t.deprecatePropValues=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0
return function(o,i,r){var a=t.includes(o[i])
"[".concat(r,"] The '").concat(o[i],"' value for the `").concat(i,"` prop is deprecated. ").concat(n||"")
for(var c=arguments.length,l=new Array(c>3?c-3:0),s=3;s<c;s++)l[s-3]=arguments[s]
return a?null:e.apply(void 0,[o,i,r].concat(l))}}},BkXG:function(e,t,n){"use strict"
function o(e){return function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o]
return function(t){if("function"==typeof e){var o=t.displayName||t.name,i=e.apply(void 0,[t].concat(n))
return i.displayName=o,i}return t}}}n.r(t),n.d(t,"default",(function(){return o}))},C4tn:function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.ref,o=e.ref,c=(0,i.default)({},t)
e.props.style&&t.style&&(c.style=(0,i.default)({},e.props.style,t.style))
c.key=e.key||t.key,Object.keys(t).forEach((function(n){0!==n.indexOf("on")||"function"!=typeof t[n]&&"function"!=typeof e.props[n]||(c[n]=(0,a.default)(e.props[n],t[n]))}))
for(var l=arguments.length,s=new Array(l>2?l-2:0),d=2;d<l;d++)s[d-2]=arguments[d]
if(null==o||null==n)return r.default.cloneElement.apply(r.default,[e,c].concat(s))
return"Cloning an element with a ref that will be overwritten because the ref is not a function. Use a composable callback-style ref instead. Ignoring ref: ".concat(o),r.default.cloneElement.apply(r.default,[e,(0,i.default)({},c,{ref:function(e){n(e),o(e)}})].concat(s))}
var i=o(n("MVZn")),r=(n("Qdpf"),o(n("q1tI"))),a=o(n("63Bt"))},CKH6:function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=r
var i=o(n("MVZn"))
function r(e){var t=e.typography,n=e.colors,o=e.spacing
return(0,i.default)({},t,{primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,warningColor:n.textWarning,brandColor:n.textBrand,errorColor:n.textDanger,successColor:n.textSuccess,paragraphMargin:"".concat(o.medium," 0")})}r.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}},J4Rs:function(e,t,n){"use strict"
var o=n("TqRt"),i=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=i(n("dx2O")),a=o(n("hlrB")),c=(0,r.default)("5.4.0",null,"".concat((0,r.changedPackageWarning)("ui-core","ui-layout")," It has also been renamed from [Container] to [View]."))(a.default)
t.default=c},"O+ZL":function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return b}))
var o=n("vpQ4"),i=n("rePB"),r=(n("Qdpf"),n("qHQn")),a=n.n(r),c=n("g8A1"),l=n.n(c),s=(n("QNyM"),"@@themeableDefaultTheme"),d=function(){return{defaultThemeKey:null,components:Object(i.a)({},s,{}),themes:{},registered:[]}}
e.GLOBAL_THEME_REGISTRY=function(e){var t=d()
if(void 0===e)return t
return Object.keys(t).forEach((function(t){void 0===e[t]&&!1})),e}(e.GLOBAL_THEME_REGISTRY)
var u=function(){return e.GLOBAL_THEME_REGISTRY}
var p=function(){var e=u(),t=e.defaultThemeKey,n=e.registered
return t||n[n.length-1]||s},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if(!e)return t
var n=u().themes[e]
return n||(e!==s&&"[themeable] Could not find theme: '".concat(e,"' in the registry."),t)},f=function(e,t){var n=h(e),o=n.variables||{},i=l()(t)
if(!i&&n.immutable)return"[themeable] Theme, '".concat(n.key,"', is immutable. Cannot apply overrides: ").concat(JSON.stringify(t)),o
var r=l()(o)
return r||i?r?t||{}:o:a()(o,t)},_=function(e,t){var n
if(e)n=f(e,t)
else{var o=u().overrides,i=l()(o)
n=i||l()(t)?i?t:o:a()(o,t)}return f(p(),n)},m=function(e,t){var n=u().components
"function"==typeof t&&(n[s][e]=t,Object.keys(t).forEach((function(i){n.hasOwnProperty(i)||(n[i]={}),n[i][e]=function(e,t){return function(n){var i={}
"function"==typeof e&&(i=e(n))
var r={}
return"function"==typeof e[t]&&(r=e[t](n)),l()(r)||l()(i)?l()(i)&&(i=r):i=Object(o.a)({},i,r),i}}(t,i)})))},g=function(e,t){u().registered.length
var n=function(e){var t=u().components,n=e||p()
return Object(o.a)({},t[s],t[n])}(e),i={},r=_(e,t)
if(!l()(r))return Object.getOwnPropertySymbols(n).forEach((function(e){i[e]=n[e](r)})),i},b=function(e,t,n){var i=t||p(),r=h(i),a={},c=r[e]
if(c)a=c
else{var d=Object(o.a)({borders:{},breakpoints:{},colors:{},forms:{},media:{},shadows:{},spacing:{},stacking:{},transitions:{},typography:{}},_(t)),f=function(e,t){var n=u().components
return n[e]&&n[e][t]||n[s][t]}(i,e)
if("function"==typeof f)try{a=f(d)}catch(e){"[themeable] ".concat(e)}}return l()(n)?r[e]=a:r.immutable?("[themeable] Theme '".concat(i,"' is immutable. Cannot apply overrides for '").concat(e.toString(),"': ").concat(JSON.stringify(n)),a):l()(a)?n:Object(o.a)({},a,n)}}).call(this,n("yLpj"))},QNyM:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
var o="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ",i=o.length-1
function r(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,t="u".concat(c("",e-1))
return t}function a(e){for(var t=[];0<e--;)t.push(Math.floor(256*Math.random()))
return t}function c(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n="",r=a(t);0<t--;)n+=o[r[t]&i]
return n}},Qdpf:function(e,t,n){n("q1tI")
function o(e,t,n){}t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["error"].concat(t))},t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["warn"].concat(t))},t.info=function(){var e
return(e=console).info.apply(e,arguments)},t.assert=function(){var e
return(e=console).assert.apply(e,arguments)},t.debug=function(){var e
return(e=console).debug.apply(e,arguments)},t.log=function(){var e
return(e=console).log.apply(e,arguments)}},RDkR:function(e,t,n){"use strict"
var o=n("TqRt"),i=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r,a,c,l=o(n("lSNA")),s=o(n("lwsE")),d=o(n("W8MJ")),u=o(n("a1gu")),p=o(n("Nsbk")),h=o(n("7W2i")),f=i(n("q1tI")),_=o(n("17x9")),m=o(n("TSYQ")),g=o(n("ZUxZ")),b=o(n("NWYN")),v=n("YGEp"),y=o(n("U8gY")),k=n("dx2O"),x=o(n("iV4t")),E=n("4dGC"),w=o(n("UWJt")),L=o(n("jsxL")),H={componentId:"fcKBR",template:function(e){return"\n\n.fcKBR_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.fcKBR_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.fcKBR_bGBk[type]{text-align:left}\n\n[dir=rtl] input.fcKBR_bGBk[type]{text-align:right}\n\ninput.fcKBR_bGBk[type]:focus{outline:none}\n\n.fcKBR_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.fcKBR_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.fcKBR_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.fcKBR_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.fcKBR_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.fcKBR_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.fcKBR_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.fcKBR_fAVi{color:inherit}\n\n.fcKBR_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.fcKBR_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.fcKBR_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.fcKBR_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.fcKBR_cJLh{color:").concat(e.successColor||"inherit","}\n\n.fcKBR_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.fcKBR_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.fcKBR_dwua{color:").concat(e.errorColor||"inherit","}\n\n.fcKBR_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.fcKBR_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"fcKBR_bGBk",h1:"fcKBR_fIqS",h2:"fcKBR_eABG",h3:"fcKBR_dlZd",h4:"fcKBR_bAmB",h5:"fcKBR_eRZv","border-top":"fcKBR_dTMd","border-bottom":"fcKBR_evMo","color-inherit":"fcKBR_fAVi","color-primary":"fcKBR_qFsi","color-secondary":"fcKBR_bLsb","color-primary-inverse":"fcKBR_ezBQ","color-secondary-inverse":"fcKBR_dlnd","color-success":"fcKBR_cJLh","color-warning":"fcKBR_eHcp","color-brand":"fcKBR_fpfC","color-error":"fcKBR_dwua",reset:"fcKBR_ZpoW",ellipsis:"fcKBR_bOQC"},B=(0,w.default)()(r=(0,b.default)(L.default,H)((c=a=function(e){function t(){return(0,s.default)(this,t),(0,u.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,n=this.props,o=n.border,i=n.children,r=n.color,a=n.level,c=n.ellipsis,s=n.margin,d=n.elementRef,u=(0,x.default)(t,this.props,(function(){return"reset"===a?"span":a})),p=g.default.omitViewProps((0,E.omitProps)(this.props,t.propTypes),t)
return f.default.createElement(g.default,Object.assign({},p,{className:(0,m.default)((e={},(0,l.default)(e,H.root,!0),(0,l.default)(e,H[a],!0),(0,l.default)(e,H["color-".concat(r)],r),(0,l.default)(e,H["border-".concat(o)],"none"!==o),(0,l.default)(e,H.ellipsis,c),e)),as:u,margin:s,elementRef:d}),i)}}]),t.displayName="Heading",t}(f.Component),a.propTypes={border:_.default.oneOf(["none","top","bottom"]),children:v.childrenOrValue,color:(0,k.deprecatePropValues)(_.default.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),["success","warning","error","brand"]),level:_.default.oneOf(["h1","h2","h3","h4","h5","reset"]),as:_.default.elementType,ellipsis:_.default.bool,margin:y.default.spacing,elementRef:_.default.func},a.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:!1},r=c))||r)||r
t.default=B},TX9O:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(i(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(var a=0;a<n.length;a++)if(!o.call(t,n[a])||!i(e[n[a]],t[n[a]]))return!1
return!0}
var o=Object.prototype.hasOwnProperty
function i(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}},YkY5:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(t.as&&t.as!==e.defaultProps.as)return t.as
if("function"==typeof n)return n()
if(t.href)return"a"
if(t.to)return t.as,"[".concat(e.displayName,"] `as` prop should be provided when using `to`"),"a"
if("function"==typeof t.onClick)return"button"
return e.defaultProps.as||"span"}
n("Qdpf")},"Za/G":function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t="function"==typeof e?e():e
if(t===document)return document.documentElement
if(t instanceof Element||t===window||t&&void 0!==t.nodeType)return t
if(t)return i.default.findDOMNode(t)}
var i=o(n("i8i4"))},"d/uB":function(e,t,n){"use strict"
var o=n("TqRt"),i=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r,a,c,l=o(n("lSNA")),s=o(n("lwsE")),d=o(n("W8MJ")),u=o(n("a1gu")),p=o(n("Nsbk")),h=o(n("7W2i")),f=i(n("q1tI")),_=o(n("17x9")),m=o(n("TSYQ")),g=o(n("NWYN")),b=o(n("iV4t")),v=n("4dGC"),y=o(n("CKH6")),k={componentId:"ELpHc",template:function(e){return"\n\n.ELpHc_bGBk{font-family:".concat(e.fontFamily||"inherit","}\n\n.ELpHc_bGBk sub,.ELpHc_bGBk sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\n\n.ELpHc_bGBk sup{top:-0.4em}\n\n.ELpHc_bGBk sub{bottom:-0.4em}\n\n.ELpHc_bGBk code,.ELpHc_bGBk pre{all:initial;animation:none 0s ease 0s 1 normal none running;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:medium none currentColor;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamilyMonospace||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto}\n\n.ELpHc_bGBk em,.ELpHc_bGBk i{font-style:italic}\n\n.ELpHc_bGBk b,.ELpHc_bGBk strong{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.ELpHc_bGBk p{display:block;margin:").concat(e.paragraphMargin||"inherit",";padding:0}\n\ninput.ELpHc_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.ELpHc_bGBk[type]{text-align:left}\n\n[dir=rtl] input.ELpHc_bGBk[type]{text-align:right}\n\n.ELpHc_bGBk:focus,input.ELpHc_bGBk[type]:focus{outline:none}\n\n.ELpHc_bGBk.ELpHc_qFsi,input.ELpHc_bGBk[type].ELpHc_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bLsb,input.ELpHc_bGBk[type].ELpHc_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_ezBQ,input.ELpHc_bGBk[type].ELpHc_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_dlnd,input.ELpHc_bGBk[type].ELpHc_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_cJLh,input.ELpHc_bGBk[type].ELpHc_cJLh{color:").concat(e.successColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fpfC,input.ELpHc_bGBk[type].ELpHc_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_eHcp,input.ELpHc_bGBk[type].ELpHc_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_dwua,input.ELpHc_bGBk[type].ELpHc_dwua{color:").concat(e.errorColor||"inherit","}\n\n.ELpHc_bGBk.ELpHc_drST,input.ELpHc_bGBk[type].ELpHc_drST{font-weight:").concat(e.fontWeightNormal||"inherit","}\n\n.ELpHc_bGBk.ELpHc_pEgL,input.ELpHc_bGBk[type].ELpHc_pEgL{font-weight:").concat(e.fontWeightLight||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bdMA,input.ELpHc_bGBk[type].ELpHc_bdMA{font-weight:").concat(e.fontWeightBold||"inherit","}\n\n.ELpHc_bGBk.ELpHc_ijuF,input.ELpHc_bGBk[type].ELpHc_ijuF{font-style:normal}\n\n.ELpHc_bGBk.ELpHc_fetN,input.ELpHc_bGBk[type].ELpHc_fetN{font-style:italic}\n\n.ELpHc_bGBk.ELpHc_dfBC,input.ELpHc_bGBk[type].ELpHc_dfBC{font-size:").concat(e.fontSizeXSmall||"inherit","}\n\n.ELpHc_bGBk.ELpHc_doqw,input.ELpHc_bGBk[type].ELpHc_doqw{font-size:").concat(e.fontSizeSmall||"inherit","}\n\n.ELpHc_bGBk.ELpHc_ycrn,input.ELpHc_bGBk[type].ELpHc_ycrn{font-size:").concat(e.fontSizeMedium||"inherit","}\n\n.ELpHc_bGBk.ELpHc_cMDj,input.ELpHc_bGBk[type].ELpHc_cMDj{font-size:").concat(e.fontSizeLarge||"inherit","}\n\n.ELpHc_bGBk.ELpHc_eoMd,input.ELpHc_bGBk[type].ELpHc_eoMd{font-size:").concat(e.fontSizeXLarge||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fdca,input.ELpHc_bGBk[type].ELpHc_fdca{font-size:").concat(e.fontSizeXXLarge||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fEWX,input.ELpHc_bGBk[type].ELpHc_fEWX{line-height:").concat(e.lineHeight||"inherit","}\n\n.ELpHc_bGBk.ELpHc_fNIu,input.ELpHc_bGBk[type].ELpHc_fNIu{line-height:").concat(e.lineHeightFit||"inherit","}\n\n.ELpHc_bGBk.ELpHc_dfDs,input.ELpHc_bGBk[type].ELpHc_dfDs{line-height:").concat(e.lineHeightCondensed||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bDjL,input.ELpHc_bGBk[type].ELpHc_bDjL{line-height:").concat(e.lineHeightDouble||"inherit","}\n\n.ELpHc_bGBk.ELpHc_eQnG,input.ELpHc_bGBk[type].ELpHc_eQnG{letter-spacing:").concat(e.letterSpacingNormal||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bbUA,input.ELpHc_bGBk[type].ELpHc_bbUA{letter-spacing:").concat(e.letterSpacingCondensed||"inherit","}\n\n.ELpHc_bGBk.ELpHc_bRWU,input.ELpHc_bGBk[type].ELpHc_bRWU{letter-spacing:").concat(e.letterSpacingExpanded||"inherit","}\n\n.ELpHc_bGBk.ELpHc_wZsr,input.ELpHc_bGBk[type].ELpHc_wZsr{text-transform:none}\n\n.ELpHc_bGBk.ELpHc_fCZK,input.ELpHc_bGBk[type].ELpHc_fCZK{text-transform:capitalize}\n\n.ELpHc_bGBk.ELpHc_dsRi,input.ELpHc_bGBk[type].ELpHc_dsRi{text-transform:uppercase}\n\n.ELpHc_bGBk.ELpHc_bLtD,input.ELpHc_bGBk[type].ELpHc_bLtD{text-transform:lowercase}")},root:"ELpHc_bGBk","color-primary":"ELpHc_qFsi","color-secondary":"ELpHc_bLsb","color-primary-inverse":"ELpHc_ezBQ","color-secondary-inverse":"ELpHc_dlnd","color-success":"ELpHc_cJLh","color-brand":"ELpHc_fpfC","color-warning":"ELpHc_eHcp","color-error":"ELpHc_dwua","weight-normal":"ELpHc_drST","weight-light":"ELpHc_pEgL","weight-bold":"ELpHc_bdMA","style-normal":"ELpHc_ijuF","style-italic":"ELpHc_fetN","x-small":"ELpHc_dfBC",small:"ELpHc_doqw",medium:"ELpHc_ycrn",large:"ELpHc_cMDj","x-large":"ELpHc_eoMd","xx-large":"ELpHc_fdca","lineHeight-default":"ELpHc_fEWX","lineHeight-fit":"ELpHc_fNIu","lineHeight-condensed":"ELpHc_dfDs","lineHeight-double":"ELpHc_bDjL","letterSpacing-normal":"ELpHc_eQnG","letterSpacing-condensed":"ELpHc_bbUA","letterSpacing-expanded":"ELpHc_bRWU","transform-none":"ELpHc_wZsr","transform-capitalize":"ELpHc_fCZK","transform-uppercase":"ELpHc_dsRi","transform-lowercase":"ELpHc_bLtD"},x=(0,g.default)(y.default,k)((c=a=function(e){function t(){return(0,s.default)(this,t),(0,u.default)(this,(0,p.default)(t).apply(this,arguments))}return(0,h.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e,n=this.props,o=n.weight,i=n.fontStyle,r=n.size,a=n.lineHeight,c=n.letterSpacing,s=n.transform,d=n.color,u=n.children,p=(0,b.default)(t,this.props)
return f.default.createElement(p,Object.assign({},(0,v.omitProps)(this.props,t.propTypes),{className:(0,m.default)((e={},(0,l.default)(e,k.root,!0),(0,l.default)(e,k[r],r),(0,l.default)(e,k["weight-".concat(o)],o),(0,l.default)(e,k["style-".concat(i)],i),(0,l.default)(e,k["transform-".concat(s)],s),(0,l.default)(e,k["lineHeight-".concat(a)],a),(0,l.default)(e,k["letterSpacing-".concat(c)],c),(0,l.default)(e,k["color-".concat(d)],d),e)),ref:this.props.elementRef}),u)}}]),t.displayName="Text",t}(f.Component),a.propTypes={as:_.default.elementType,weight:_.default.oneOf(["normal","light","bold"]),fontStyle:_.default.oneOf(["italic","normal"]),size:_.default.oneOf(["x-small","small","medium","large","x-large","xx-large"]),lineHeight:_.default.oneOf(["default","fit","condensed","double"]),letterSpacing:_.default.oneOf(["normal","condensed","expanded"]),transform:_.default.oneOf(["none","capitalize","uppercase","lowercase"]),color:_.default.oneOf(["primary","secondary","primary-inverse","secondary-inverse","success","error","warning","brand"]),children:_.default.node,elementRef:_.default.func},a.defaultProps={as:"span",size:"medium",letterSpacing:"normal",children:null,elementRef:void 0,color:void 0,transform:void 0,lineHeight:void 0,fontStyle:void 0,weight:void 0},r=c))||r
t.default=x},"dWh/":function(e,t,n){"use strict"
var o=n("TqRt"),i=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=i(n("dx2O")),a=o(n("RDkR")),c=(0,r.default)("5.0.0",null,(0,r.changedPackageWarning)("ui-core","ui-elements"))(a.default)
t.default=c},f6Li:function(e,t,n){"use strict"
var o=n("q1tI"),i=n.n(o),r=(n("17x9"),n("ouhR")),a=n.n(r)
class c extends i.a.Component{componentDidMount(){this.fetchSVG()}componentWillReceiveProps(e){e.url!==this.props.url&&this.fetchSVG()}fetchSVG(){a.a.ajax(this.props.url,{success:e=>{if(this.svg=e,9===e.nodeType&&(this.svg=e.firstChild),1!==this.svg.nodeType&&"SVG"!==this.svg.nodeName)throw new Error("SVGWrapper: SVG Element must be returned by request to ".concat(this.props.url))
this.props.fillColor&&this.svg.setAttribute("style","fill:".concat(this.props.fillColor)),this.svg.setAttribute("focusable",!1),this.rootSpan.appendChild(this.svg)}})}render(){return i.a.createElement("span",{ref:e=>{this.rootSpan=e}})}}t.a=c},g8A1:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if("object"!=typeof e)return!0
for(var t in e)if(o.call(e,t))return!1
return!0}
var o=Object.prototype.hasOwnProperty},hKga:function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.shorthandPropType=h,t.default=t.SPACING=t.SIZES=t.BACKGROUNDS=t.BORDER_RADII=t.BORDER_WIDTHS=t.STACKING_TYPES=t.SHADOW_TYPES=void 0
var i=o(n("17x9")),r={resting:"resting",above:"above",topmost:"topmost",none:"none"}
t.SHADOW_TYPES=r
var a={deepest:"deepest",below:"below",resting:"resting",above:"above",topmost:"topmost"}
t.STACKING_TYPES=a
var c={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_WIDTHS=c
var l={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_RADII=l
var s={default:"default",inverse:"inverse",transparent:"transparent"}
t.BACKGROUNDS=s
var d={xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large"}
t.SIZES=d
var u={0:"0",none:"none",auto:"auto",xxxSmall:"xxx-small",xxSmall:"xx-small",xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large",xxLarge:"xx-large"}
t.SPACING=u
var p={shadow:i.default.oneOf(Object.values(r)),stacking:i.default.oneOf(Object.values(a)),borderWidth:h(Object.values(c)),borderRadius:h(Object.values(l)),background:i.default.oneOf(Object.values(s)),size:i.default.oneOf(Object.values(d)),spacing:h(Object.values(u))}
function h(e){return function(t,n,o,i){var r=t[n]
if(void 0!==r){var a=typeof r
if("string"!==a)return new Error("Invalid ".concat(i," `").concat(n,"` of type `").concat(a,"` supplied to `").concat(o,"`, expected ")+"a string.")
var c=r.split(" "),l=c.length
if(!(l>0&&l<5))return new Error("Invalid ".concat(i," `").concat(n,"` `").concat(r,"` supplied to `").concat(o,"`, expected ")+"between one and four of the following valid values: `".concat(e.join(", "),"`."))
for(var s=0;s<l;s++){if(-1===e.indexOf(c[s]))return new Error("Invalid ".concat(i," `").concat(n,"` `").concat(c[s],"` supplied to `").concat(o,"`, expected ")+"a one of `".concat(e.join(", "),"`."))}}}}t.default=p},hlrB:function(e,t,n){"use strict"
var o=n("TqRt"),i=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r,a,c,l=o(n("MVZn")),s=o(n("lSNA")),d=o(n("lwsE")),u=o(n("W8MJ")),p=o(n("a1gu")),h=o(n("Nsbk")),f=o(n("7W2i")),_=i(n("q1tI")),m=o(n("17x9")),g=o(n("TSYQ")),b=o(n("xVza")),v=o(n("hKga")),y=o(n("YkY5")),k=n("xU2T"),x=i(n("7gQv")),E=o(n("opgH")),w={componentId:"dtYXf",template:function(e){return"\n\n.dtYXf_cRbP{display:block}\n\n.dtYXf_eXrk{display:inline-block;vertical-align:middle}\n\n.dtYXf_crJo{box-sizing:border-box}\n\n.dtYXf_EMjX{text-align:start}\n\n[dir=ltr] .dtYXf_EMjX{text-align:left}\n\n[dir=rtl] .dtYXf_EMjX{text-align:right}\n\n.dtYXf_ImeN,[dir=ltr] .dtYXf_ImeN,[dir=rtl] .dtYXf_ImeN{text-align:center}\n\n.dtYXf_dBtH{text-align:end}\n\n[dir=ltr] .dtYXf_dBtH{text-align:right}\n\n[dir=rtl] .dtYXf_dBtH{text-align:left}\n\n.dtYXf_dfBC{max-width:".concat(e.xSmallMaxWidth||"inherit","}\n\n.dtYXf_doqw{max-width:").concat(e.smallMaxWidth||"inherit","}\n\n.dtYXf_ycrn{max-width:").concat(e.mediumMaxWidth||"inherit","}\n\n.dtYXf_cMDj{max-width:").concat(e.largeMaxWidth||"inherit","}\n\n.dtYXf_cMOR{max-width:100vw}\n\n.dtYXf_fFVr{outline:0.0625rem dashed red}\n\n.dtYXf_dnJm{border-color:").concat(e.borderColor||"inherit",";border-radius:").concat(e.borderRadius||"inherit",";border-style:solid;border-width:").concat(e.borderWidth||"inherit","}\n\n.dtYXf_dGNy{box-shadow:").concat(e.boxShadow||"inherit","}")},block:"dtYXf_cRbP",inline:"dtYXf_eXrk",hasPadding:"dtYXf_crJo","textAlign--start":"dtYXf_EMjX","textAlign--center":"dtYXf_ImeN","textAlign--end":"dtYXf_dBtH","x-small":"dtYXf_dfBC",small:"dtYXf_doqw",medium:"dtYXf_ycrn",large:"dtYXf_cMDj",fullscreen:"dtYXf_cMOR",visualDebug:"dtYXf_fFVr",withBorder:"dtYXf_dnJm",withShadow:"dtYXf_dGNy"},L=(0,b.default)(E.default,w)((c=a=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(0,h.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"renderSpacingStyles",value:function(e,t){if("string"!=typeof e)return null
for(var n=e.split(" "),o=[],i=0;i<n.length;i++){var r=t[n[i]]
r&&o.push(r)}return o.join(" ")}},{key:"render",value:function(){var e,n=this.props,o=n.children,i=n.textAlign,r=n.display,a=n.visualDebug,c=n.size,d=n.padding,u=n.margin,p=n.withBorder,h=n.withShadow,f=(e={},(0,s.default)(e,w.root,!0),(0,s.default)(e,w[r],null!==r),(0,s.default)(e,w.visualDebug,a),(0,s.default)(e,w["textAlign--".concat(i)],i),(0,s.default)(e,w[c],c),(0,s.default)(e,w.hasPadding,d),(0,s.default)(e,w.withBorder,p),(0,s.default)(e,w.withShadow,h),(0,s.default)(e,this.props.className,this.props.className),e),m=(0,l.default)({},this.props.style,{margin:this.renderSpacingStyles(u,this.marginFromTheme),padding:this.renderSpacingStyles(d,this.paddingFromTheme)}),b=(0,y.default)(t,this.props)
return _.default.createElement(b,Object.assign({},(0,k.omitProps)(this.props,t.propTypes),{className:(0,g.default)(f),style:m,ref:this.props.elementRef}),o)}},{key:"paddingFromTheme",get:function(){return{0:"0",none:"0","xxx-small":this.theme.paddingxxxSmall,"xx-small":this.theme.paddingxxSmall,"x-small":this.theme.paddingxSmall,small:this.theme.paddingSmall,medium:this.theme.paddingMedium,large:this.theme.paddingLarge,"x-large":this.theme.paddingxLarge,"xx-large":this.theme.paddingxxLarge}}},{key:"marginFromTheme",get:function(){return{auto:"auto",0:"0",none:"0","xxx-small":this.theme.marginxxxSmall,"xx-small":this.theme.marginxxSmall,"x-small":this.theme.marginxSmall,small:this.theme.marginSmall,medium:this.theme.marginMedium,large:this.theme.marginLarge,"x-large":this.theme.marginxLarge,"xx-large":this.theme.marginxxLarge}}}]),t.displayName="Container",t}(_.Component),a.propTypes={as:m.default.elementType,children:m.default.node,textAlign:m.default.oneOf(["start","center","end"]),size:m.default.oneOf(["auto","x-small","small","medium","large","fullscreen"]),margin:v.default.spacing,padding:v.default.spacing,display:m.default.oneOf([null,"block","inline"]),visualDebug:m.default.bool,elementRef:m.default.func,withBorder:m.default.bool,withShadow:m.default.bool},a.defaultProps={display:void 0,withShadow:!1,withBorder:!1,visualDebug:!1,padding:void 0,elementRef:void 0,margin:void 0,size:void 0,textAlign:void 0,children:null},r=c))||r,H=(0,x.default)("5.4.0",null,"".concat((0,x.changedPackageWarning)("ui-container","ui-layout")," It has also been renamed from [Container] to [View]."))(L)
t.default=H},jsxL:function(e,t,n){"use strict"
function o(e){var t=e.borders,n=e.colors,o=e.spacing,i=e.typography
return{fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,lineHeight:i.lineHeightFit,h1FontSize:i.fontSizeXXLarge,h1FontWeight:i.fontWeightLight,h2FontSize:i.fontSizeXLarge,h2FontWeight:i.fontWeightNormal,h3FontSize:i.fontSizeLarge,h3FontWeight:i.fontWeightBold,h4FontSize:i.fontSizeMedium,h4FontWeight:i.fontWeightBold,h5FontSize:i.fontSizeSmall,h5FontWeight:i.fontWeightNormal,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,brandColor:n.textBrand,warningColor:n.textWarning,errorColor:n.textDanger,successColor:n.textSuccess,borderPadding:o.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,o.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}},ko9M:function(e,t,n){"use strict"
n.r(t),n.d(t,"renderNotFoundApp",(function(){return S})),n.d(t,"handleGameStartClick",(function(){return C}))
var o=n("An8g"),i=n("q1tI"),r=n.n(i),a=n("i8i4"),c=n.n(a)
class l{constructor({width:e,height:t,x:n,y:o,speed:i}){this.move=(e,t)=>{this.x=this.x+e,this.y=this.y+t},this.draw=e=>{const t=e
t.fillStyle="#008EE2",t.fillRect(this.x,this.y,this.width,this.height)},this.speed=i||256,this.width=e,this.height=t,this.x=n||0,this.y=o||0}getPosition(){return{x:this.x,y:this.y}}checkCollide(e,t,n,o){return e<this.x+this.width-6&&e+n-6>this.x&&t<this.y+this.height-6&&o-6+t>this.y}}class s extends l{constructor({x:e,y:t,width:n,height:o,speed:i,goingLeft:r}){super({width:n,height:o,x:e,y:t,speed:i}),this.draw=e=>{const t=e
t.fillStyle="#8B969E",t.fillRect(this.x,this.y,this.width,this.height)},this.move=()=>{this.goingLeft?this.x=this.x-this.speed:this.x=this.x+this.speed},this.goingLeft=r||!1}}class d extends l{constructor({x:e,y:t,width:n,height:o,speed:i,goingLeft:r}){super({width:n,height:o,x:e,y:t,speed:i}),this.draw=e=>{const t=e
t.fillStyle="#00AC18",t.fillRect(this.x,this.y,this.width,this.height)},this.move=()=>{this.goingLeft?this.x=this.x-this.speed:this.x=this.x+this.speed},this.goingLeft=r||!1}}const u=(e,t)=>Math.floor(Math.random()*(t-e+1)+e)
class p extends r.a.Component{constructor(e){super(e),this.setCanvasRef=e=>{this.gameCanvas=e},this.restartGame=()=>{this.startGame()},this.startGame=()=>{this.gameStarted=!0,this.setState({gameTimer:0}),this.resetCharacters(),this.gameLoop=setInterval(this.eventGameFrameLoop,30)},this.resetCharacters=()=>{this.mainCharacter=new l({width:32,height:32,x:74,y:688})
const e=this.gameCanvas.getContext("2d")
e.clearRect(0,0,this.gameCanvas.width,this.gameCanvas.height),this.mainCharacter.draw(e),this.goalObject=new d({width:32,height:32,x:u(0,148),y:0})},this.goalReached=()=>{this.setState({gameTimer:this.state.gameTimer+13146}),this.resetCharacters()},this.createObstacle=()=>{const e=u(0,5),t=u(0,720)
let n=u(0,180)
n=e>3?160:0,this.obstacles.push(new s({speed:u(1,9),width:20,height:20,x:n,y:t,goingLeft:e>3}))},this.moveCharacter=(e,t)=>{this.mainCharacter.move(e,t)},this.playerController=()=>{this.gameStarted&&(this.keysPressed[37]&&this.mainCharacter.x>=0&&this.moveCharacter(-8,0),this.keysPressed[38]&&this.mainCharacter.y>=0&&this.moveCharacter(0,-8),this.keysPressed[39]&&this.mainCharacter.x+32<=180&&this.moveCharacter(8,0),this.keysPressed[40]&&this.mainCharacter.y+32<=720&&this.moveCharacter(0,8))},this.endGame=e=>{clearInterval(this.gameLoop),this.gameStarted=!1,this.obstacles=[],this.mainCharacter=null,e.clearRect(0,0,this.gameCanvas.width,this.gameCanvas.height)},this.eventGameFrameLoop=()=>{if(!this.gameStarted)return!1
this.setState({gameTimer:this.state.gameTimer+1})
const e=this.gameCanvas.getContext("2d")
e.clearRect(0,0,this.gameCanvas.width,this.gameCanvas.height),this.playerController(),this.mainCharacter.draw(e),this.goalObject.draw(e),this.goalObject.checkCollide(this.mainCharacter.x,this.mainCharacter.y,32,32)&&this.goalReached(),u(0,26)>20&&this.createObstacle()
for(let t=0;t<this.obstacles.length;t++){const n=this.obstacles[t]
if(n.move(),n.checkCollide(this.mainCharacter.x,this.mainCharacter.y,32,32))return this.endGame(e),null
n.draw(e)}return null},this.state={gameTimer:0},this.gameStarted=!1,this.keysPressed={},this.obstacles=[],this.gameLoop=null,this.goalObject=null,document.body.addEventListener("keydown",e=>{32!==e.keyCode||this.gameStarted||this.startGame(),27===e.keyCode&&this.gameStarted&&this.endGame(this.gameCanvas.getContext("2d")),this.keysPressed[e.keyCode]=!0,[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()}),document.body.addEventListener("keyup",e=>{delete this.keysPressed[e.keyCode]})}componentDidMount(){this.gameStarted||this.startGame()}checkInArena(e,t){return e>-100&&e<this.CANVAS_WIDTH+100&&t>-100&&t<this.CANVAS_HEIGHT+100}render(){return Object(o.a)("div",{className:"not_found_page_game_root",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},void 0,Object(o.a)("div",{style:{fontSize:"20px",padding:"4px",display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"flex-end"}},void 0,Object(o.a)("div",{},void 0,"Score: ".concat(this.state.gameTimer))),r.a.createElement("canvas",{ref:this.setCanvasRef,width:180,height:720,style:{border:"2px",borderStyle:"solid",borderColor:"#394B58"}}))}}var h=p,f=Object(o.a)(h,{})
const _=e=>{(e=>{const t=document.getElementById(e)
c.a.render(f,t)})(e)}
var m=n("pQTu"),g=n("m0r6")
Object(g.a)(JSON.parse('{"ar":{"we_couldn_t_find_that_page_34068c1d":"لم نتمكن من العثور على هذه الصفحة!","woops_looks_like_nothing_is_here_ce69ad5":"عذرًا... يبدو أنه لا يوجد شيء هنا!"},"cy":{"we_couldn_t_find_that_page_34068c1d":"Doedd dim modd dod o hyd i’r dudalen honno!","woops_looks_like_nothing_is_here_ce69ad5":"Wps... Mae\'n ymddangos nad oes dim byd yma!"},"da":{"we_couldn_t_find_that_page_34068c1d":"Vi kunne ikke finde siden!","woops_looks_like_nothing_is_here_ce69ad5":"Hovsa ... Det ser ud til, at der ikke er noget her!"},"da-x-k12":{"we_couldn_t_find_that_page_34068c1d":"Vi kunne ikke finde siden!","woops_looks_like_nothing_is_here_ce69ad5":"Hovsa ... Det ser ud til, at der ikke er noget her!"},"de":{"we_couldn_t_find_that_page_34068c1d":"Wir konnten diese Seite nicht finden!","woops_looks_like_nothing_is_here_ce69ad5":"Ups ... Sieht so aus, als wäre nichts hier!"},"en-AU":{"we_couldn_t_find_that_page_34068c1d":"We couldn\'t find that page!","woops_looks_like_nothing_is_here_ce69ad5":"Woops... Looks like nothing is here!"},"en-CA":{"we_couldn_t_find_that_page_34068c1d":"We couldn\'t find that page!","woops_looks_like_nothing_is_here_ce69ad5":"Woops... Looks like nothing is here!"},"en-GB":{"we_couldn_t_find_that_page_34068c1d":"We couldn\'t find that page!","woops_looks_like_nothing_is_here_ce69ad5":"Woops... Looks like nothing is here!"},"es":{"we_couldn_t_find_that_page_34068c1d":"¡No pudimos encontrar esa página!","woops_looks_like_nothing_is_here_ce69ad5":"Ups... ¡Parece que no hay nada aquí!"},"fi":{"we_couldn_t_find_that_page_34068c1d":"Emme löytäneet kyseistä sivua.","woops_looks_like_nothing_is_here_ce69ad5":"Hups... Näyttää kuin täällä ei ole mitään!"},"fr":{"we_couldn_t_find_that_page_34068c1d":"Nous n\'avons pas trouvé cette page !","woops_looks_like_nothing_is_here_ce69ad5":"Oups... Il semblerait qu\'il n\'y ait rien ici !"},"fr-CA":{"we_couldn_t_find_that_page_34068c1d":"Impossible de trouver cette page!","woops_looks_like_nothing_is_here_ce69ad5":"Oups... On dirait qu\'il n\'y a rien ici!"},"ht":{"we_couldn_t_find_that_page_34068c1d":"Nou paka jwenn paj sa a!","woops_looks_like_nothing_is_here_ce69ad5":"Ouah.... Sanble pa gen anyen la a!"},"is":{"we_couldn_t_find_that_page_34068c1d":"Við fundum ekki síðuna!","woops_looks_like_nothing_is_here_ce69ad5":"Úbbs… Það virðist ekki vera neitt hérna!"},"it":{"we_couldn_t_find_that_page_34068c1d":"Impossibile trovare la pagina!","woops_looks_like_nothing_is_here_ce69ad5":"Ops... Sembra che non ci sia niente qui!"},"ja":{"we_couldn_t_find_that_page_34068c1d":"ページが見つかりません！","woops_looks_like_nothing_is_here_ce69ad5":"おっと...ここには何もないようです！"},"mi":{"we_couldn_t_find_that_page_34068c1d":"Kāore i kitea e mātou tērā whārangi!","woops_looks_like_nothing_is_here_ce69ad5":"Aue ... Anō nei kaore he mea i konei!"},"nb":{"we_couldn_t_find_that_page_34068c1d":"Kunne ikke finne den siden!","woops_looks_like_nothing_is_here_ce69ad5":"Ops ... Ser ut som om det ikke er noe her!"},"nb-x-k12":{"we_couldn_t_find_that_page_34068c1d":"Kunne ikke finne den siden!","woops_looks_like_nothing_is_here_ce69ad5":"Ops ... Ser ut som om det ikke er noe her!"},"nl":{"we_couldn_t_find_that_page_34068c1d":"We kunnen die pagina niet vinden.","woops_looks_like_nothing_is_here_ce69ad5":"Oeps... Er is hier blijkbaar niets!"},"pl":{"we_couldn_t_find_that_page_34068c1d":"Nie można było odnaleźć tej strony!","woops_looks_like_nothing_is_here_ce69ad5":"Ups... Wygląda na to, że nic tu nie ma!"},"pt":{"we_couldn_t_find_that_page_34068c1d":"Não conseguimos encontrar essa página!","woops_looks_like_nothing_is_here_ce69ad5":"Oops... Parece que nada está aqui!"},"pt-BR":{"we_couldn_t_find_that_page_34068c1d":"Não conseguimos encontrar esta página!","woops_looks_like_nothing_is_here_ce69ad5":"Opa... Parece que não há nada aqui!"},"ru":{"we_couldn_t_find_that_page_34068c1d":"Нам не удалось найти эту страницу!","woops_looks_like_nothing_is_here_ce69ad5":"Вот те раз! Похоже, что здесь ничего нет!"},"sv":{"we_couldn_t_find_that_page_34068c1d":"Vi hittade inte den sidan!","woops_looks_like_nothing_is_here_ce69ad5":"Hoppsan... Här verkar inte finnas något!"},"sv-x-k12":{"we_couldn_t_find_that_page_34068c1d":"Vi hittade inte den sidan!","woops_looks_like_nothing_is_here_ce69ad5":"Hoppsan... Här verkar inte finnas något!"},"zh-Hans":{"we_couldn_t_find_that_page_34068c1d":"我们找不到该页！","woops_looks_like_nothing_is_here_ce69ad5":"哎哟...这里似乎什么都没有！"},"zh-Hant":{"we_couldn_t_find_that_page_34068c1d":"我們找不到該頁面！","woops_looks_like_nothing_is_here_ce69ad5":"噢......看來這里甚麼也沒有！"}}'))
n("jQeR"),n("0sPK")
var b=m.default.scoped("not_found_index"),v=n("J4Rs"),y=n.n(v),k=n("dWh/"),x=n.n(k),E=n("wWKB"),w=n.n(E),L=n("f6Li"),H=Object(o.a)(y.a,{margin:"large auto",size:"small",display:"block"},void 0,Object(o.a)(L.a,{url:"/images/not_found_page/empty-planet.svg"}))
var B=()=>Object(o.a)("div",{className:"not_found_page_artwork"},void 0,Object(o.a)(y.a,{margin:"large auto",textAlign:"center",display:"block"},void 0,H,Object(o.a)(x.a,{level:"h2",as:"h1",margin:"x-small 0 0"},void 0,b.t("Woops... Looks like nothing is here!")),Object(o.a)(y.a,{margin:"small",display:"block"},void 0,Object(o.a)(w.a,{level:"h4",margin:"x-small"},void 0,b.t("We couldn't find that page!"))))),O=Object(o.a)(B,{})
const S=e=>{const t=document.getElementById(e)
c.a.render(O,t)},C=e=>{if(32===e.keyCode){document.body.removeEventListener("keydown",C),_("not_found_root")
const e=new KeyboardEvent("keydown",{keyCode:32,bubbles:!0,cancelable:!0})
document.dispatchEvent(e)}}
document.body.addEventListener("keydown",C),S("not_found_root")},mxPB:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var o=!("undefined"==typeof window||!window.document||!window.document.createElement)
t.default=o},opgH:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.colors,n=e.borders,o=e.shadows,i=e.spacing,r=e.breakpoints
return{borderColor:t.borderMedium,borderWidth:n.widthSmall,borderRadius:n.radiusMedium,boxShadow:o.depth1,marginxxxSmall:i.xxxSmall,marginxxSmall:i.xxSmall,marginxSmall:i.xSmall,marginSmall:i.small,marginMedium:i.medium,marginLarge:i.large,marginxLarge:i.xLarge,marginxxLarge:i.xxLarge,paddingxxxSmall:i.xxxSmall,paddingxxSmall:i.xxSmall,paddingxSmall:i.xSmall,paddingSmall:i.small,paddingMedium:i.medium,paddingLarge:i.large,paddingxLarge:i.xLarge,paddingxxLarge:i.xxLarge,xSmallMaxWidth:r.xSmall,smallMaxWidth:r.small,mediumMaxWidth:r.medium,largeMaxWidth:r.large}}},pPMF:function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=o(n("aUsF")).default
t.default=i},qHQn:function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=Array.prototype.slice.call(arguments),t={}
return e.forEach((function(e){t=a(t,e)})),t}
var i=o(n("MVZn")),r=o(n("RIqP"))
function a(e,t){if(c(t)){var n=[].concat((0,r.default)(Object.keys(t)),(0,r.default)(Object.getOwnPropertySymbols(t))),o=(0,i.default)({},e)
return n.forEach((function(n){c(e[n])&&c(t[n])?o[n]=a(e[n],t[n]):l(t[n])&&l(e[n])?o[n]=(0,r.default)(new Set([].concat((0,r.default)(e[n]),(0,r.default)(t[n])))):l(e[n])?o[n]=(0,r.default)(new Set([].concat((0,r.default)(e[n]),[t[n]]))):o[n]=t[n]})),o}return(0,i.default)({},e)}function c(e){return e&&("object"==typeof e||"function"==typeof e)&&!Array.isArray(e)}function l(e){return e&&Array.isArray(e)}},wWKB:function(e,t,n){"use strict"
var o=n("TqRt"),i=n("284h")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=i(n("dx2O")),a=o(n("d/uB")),c=(0,r.default)("5.0.0",null,(0,r.changedPackageWarning)("ui-core","ui-elements"))(a.default)
t.default=c},xU2T:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.omitProps=function(e,t,n){var i=Object.keys(t||{}),r=n?i.concat(n):i
return function(e,t){var n={}
for(var i in e)"theme"!==i&&"children"!==i&&"className"!==i&&"style"!==i&&!t.includes(i)&&o.call(e,i)&&(n[i]=e[i])
return n}(e,r)},t.pickProps=function(e,t,n){var o=Object.keys(t||{}),i=n?o.concat(n):o
return function(e,t){var n,o={},i=t.length,r=-1
for(;++r<i;)(n=t[r])in e&&(o[n]=e[n])
return o}(e,i)}
var o=Object.prototype.hasOwnProperty},xVza:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return o.a})),n.d(t,"ApplyTheme",(function(){return ve}))
var o=n("NSe8"),i=n("1OyB"),r=n("vuIU"),a=n("md7G"),c=n("foSv"),l=n("Ji7U"),s=(n("Qdpf"),n("q1tI")),d=n("17x9"),u=n.n(d),p=n("qHQn"),h=n.n(p),f=n("4s1B"),_=n.n(f),m=n("rePB"),g=Object(m.a)({},"@@themeable",u.a.object)
function b(e){if(e)return e["@@themeable"]}var v=n("ReuC"),y=n("vpQ4"),k=n("BkXG"),x=n("TX9O"),E=n.n(x),w=n("g8A1"),L=n.n(w),H=n("QNyM"),B=n("pPMF"),O=n.n(B),S=n("Za/G"),C=n.n(S),j=n("32wY"),G=n.n(j)
function R(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=P(e)
return z(A(t),t)}var T=1,M=7,W=4
function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return e.replace(/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,"").replace(/@import[^;]*;/gim,"")}function A(e){var t={start:0,end:e.length},n=t
return e.split("").forEach((function(e,o){switch(e){case"{":n.rules||(n.rules=[])
var i=n,r=i.rules[i.rules.length-1]
n={start:o+1,parent:i,previous:r},i.rules.push(n)
break
case"}":n.end=o+1,n=n.parent||t}})),t}function I(e,t){var n=e.previous?e.previous.end:e.parent.start,o=e.start-1,i=t.substring(n,o)
return(i=(i=i.replace(/\s+/g," ")).substring(i.lastIndexOf(";")+1)).trim()}function N(e){return 0!==e.indexOf("@")?T:0===e.indexOf("@media")?W:e.match(/^@[^\s]*keyframes/)?M:void 0}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:""
return e.parent&&(e.selector=I(e,t),e.type=N(e.selector)),e.cssText=t.substring(e.start,e.end-1).trim(),e.rules&&e.rules.length>0&&(e.rules=e.rules.map((function(e){return z(e,t)}))),e}function K(e,t){var n=R(e)
return"function"==typeof t&&(n=function e(t,n){if(!t)return
if(t.type===T)return n(t)
var o=t.rules||[],i=Object(y.a)({},t)
return i.rules=o.map((function(t){return e(t,n)})),i}(n,t)),Y(n)}function D(e){var t=R(e),n=[]
if(t.rules&&t.rules.length>0)n=t.rules.filter(F).map((function(e){return Y(e)}))
else{var o=Y(t)
o&&(n=[o])}return n}function Y(e,t){var n="",o=t||""
if(e.rules&&e.rules.length>0?n=e.rules.map((function(e){return Y(e,n)})).join("\n"):(n=e.cssText.trim())&&(n="  ".concat(n,"\n")),n){var i=e.selector?"".concat(e.selector," {\n"):"",r=e.selector?"}\n":""
o+="".concat(i).concat(n).concat(r)}return o}var X,q,F=(X="-ms-",q="-moz-",G.a.blink?function(e){var t=e.selector
return!(t.includes(X)||t.includes(q))}:G.a.webkit?function(e){var t=e.selector
return!(t.includes(X)||t.includes(q))}:G.a.gecko?function(e){var t=e.selector
return!(t.includes(X)||t.includes("-webkit-"))}:G.a.msedge?function(e){return!e.selector.includes(q)}:G.a.msie?function(e){var t=e.selector
return!(t.includes(q)||t.includes("-webkit-"))}:function(){return!0})
function Q(e,t,n){var o=e.querySelector("#".concat(n)),i=n.toLowerCase()
if(t){var r=!o,a=t
r&&((o=document.createElement("style")).setAttribute("scoped",!0),o.setAttribute("type","text/css"),o.id=n),o.scoped||(!function e(t,n){var o=t.children||t.childNodes
t.setAttribute&&t.setAttribute(n,"")
for(var i=0;i<o.length;i++)e(o[i],n)}(e,i),a=function(e,t){return K(e,(function(e){var n=Object(y.a)({},e)
return e.isScoped||(n.selector=function(e,t){var n=e.selector.split(",");(function(e){return e.parent&&e.parent.type===M})(e)||(n=n.map((function(e){return function(e,t){var n=e.trim()
return n=n.replace(/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g,(function(e,n,o){var i=arguments[arguments.length-2]
return V(o)||i>0?U(o,n,t):o}))}(e,t)})))
return n.join(",")}(e,t),n.isScoped=!0),n}))}(a,"[".concat(i,"]"))),r&&e.insertBefore(o,e.firstChild),"textContent"in o?o.textContent=a:o.styleSheet.cssText=a}else o&&(o.scoped||function e(t,n){var o=t.children||t.childNodes
t.removeAttribute&&t.removeAttribute(n)
for(var i=0;i<o.length;i++)e(o[i],n)}(e,i),e.removeChild(o))}function V(e){return e.match(/^(\.\S+)/)}function U(e,t,n){return function(e){return e.match(/^(_|html|body|\:root)/i)}(e)?e:t+(n?function(e,t){var n=e.split(":")
return n[0]+=t,n.join(":")}(e,n):e)}function Z(e,t){var n=t?"".concat(t,"-").concat(e):e
return"--".concat(n)}function J(e,t){var n={}
return Object.keys(e||{}).forEach((function(o){n[Z(o,t)]=e[o]})),n}function $(e,t){var n={}
return e!==t&&t?(Object.keys(t).forEach((function(o){e[o]!==t[o]&&(n[o]=t[o])})),n):n}var ee,te=n("mxPB"),ne=n.n(te)
function oe(){return void 0!==ee?ee:ee=ne.a&&!G.a.msedge&&window.CSS&&window.CSS.supports&&window.CSS.supports("color","var(--primary)")}function ie(e,t){var n=function(e,t){var n,o=[],i=t
i.lastIndex=0,i=new RegExp(i.source,"g")
for(;null!==(n=i.exec(e));)o.push(n),i.lastIndex===n.index&&i.lastIndex++
return o}(e,/@media\s*[^(]*\((--[^)]+)\)?/g),o=e
if(n.length>0){var i="function"==typeof t?t():t
n.forEach((function(e){var t=new RegExp(e[1].replace(/[\\^$*+?.()|[\]{}]/g,"\\$&"),"gm")
o=o.replace(t,i[e[1]])}))}return o}function re(){return oe()?ce.apply(this,arguments):ae.apply(this,arguments)}function ae(e,t){var n=e(t)
return n=ie(n,t?J(t):{})}function ce(e,t,n){var o=e(t?function(e,t){var n={}
return Object.keys(e||{}).forEach((function(e){n[e]="var(".concat(Z(e,t),")")})),n}(t,n):{})
return o=[o=ie(o,t?function(){return J(t)}:{}),le(t?J(t,n):"")].join("\n")}function le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[]
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&void 0!==e[n]&&t.push("".concat(n,": ").concat(e[n]))
return t.length>0?"\n      :root {\n        ".concat(t.join(";\n"),";\n      }\n    "):""}function se(){oe()?ue.apply(this,arguments):de.apply(this,arguments)}function de(e,t,n,o,i,r){if(e&&!L()(t)){var a=$(n,t),c=""
a&&Object.keys(a).length>0&&(c=ae(i,Object(y.a)({},n,t))),Q(e,c,r)}}function ue(e,t,n,o){if(e&&!L()(t)){!function(e,t){for(var n=e.style,o=n.length-1;o>=0;o--){var i=n[o]
i.indexOf("--".concat(t,"-"))>=0&&e.style.removeProperty(i)}}(e,o)
var i=$(n,t)
i&&!L()(i)&&function(e,t){Object.keys(t).forEach((function(n){var o=t[n]
o&&e.style.setProperty(n,o)}))}(e,J(i,o))}}var pe=!1
function he(){if(!pe&&(pe=!0,ne.a)){var e=document.documentElement.getAttribute("dir")
e||document.documentElement.setAttribute("dir","ltr")}}var fe=n("O+ZL"),_e=n("+mIj"),me={},ge=Object(k.default)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=e.displayName||e.name,s="".concat(n&&n.componentId||Object(H.a)())
var d=Symbol(s),p=n&&"function"==typeof n.template?n.template:function(){return""}
Object(fe.c)(d,t)
var h=function(e){return b(e)||me},f=function(e){var t=h(e).theme
return t&&t[d]?Object(y.a)({},t[d]):me},_=function(e,t){return Object(fe.a)(d,e,t)},m=function(e){function t(){var e,n
Object(i.a)(this,t)
for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s]
return(n=Object(a.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l))))._themeCache=null,n._instanceId=Object(H.a)(o),n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){if(!_e.a.mounted(s)){var e=_(),n=re(p,e,s)
_e.a.mount(s,D(n))}Object(v.a)(Object(c.a)(t.prototype),"componentWillMount",this)&&Object(v.a)(Object(c.a)(t.prototype),"componentWillMount",this).call(this)}},{key:"componentDidMount",value:function(){this.applyTheme(),he(),Object(v.a)(Object(c.a)(t.prototype),"componentDidMount",this)&&Object(v.a)(Object(c.a)(t.prototype),"componentDidMount",this).call(this)}},{key:"shouldComponentUpdate",value:function(e,n,o){return!O()(b(this.context),b(o))||(Object(v.a)(Object(c.a)(t.prototype),"shouldComponentUpdate",this)?Object(v.a)(Object(c.a)(t.prototype),"shouldComponentUpdate",this).call(this,e,n,o):!E()(this.props,e)||!E()(this.state,n)||!E()(this.context,o))}},{key:"componentWillUpdate",value:function(e,n,o){O()(e.theme,this.props.theme)&&O()(f(o),f(this.context))||(this._themeCache=null),Object(v.a)(Object(c.a)(t.prototype),"componentWillUpdate",this)&&Object(v.a)(Object(c.a)(t.prototype),"componentWillUpdate",this).call(this,e,n,o)}},{key:"componentDidUpdate",value:function(e,n,o){this.applyTheme(),Object(v.a)(Object(c.a)(t.prototype),"componentDidUpdate",this)&&Object(v.a)(Object(c.a)(t.prototype),"componentDidUpdate",this).call(this,e,n,o)}},{key:"applyTheme",value:function(e){if(!L()(this.theme)){var t=_()
se(e||C()(this),this.theme,t,s,p,this.scope)}}},{key:"scope",get:function(){return"".concat(s,"__").concat(this._instanceId)}},{key:"theme",get:function(){if(null!==this._themeCache)return this._themeCache
var e=h(this.context).immutable,t=f(this.context)
return this.props.theme&&!L()(this.props.theme)&&(t?e?this.props.theme:t=L()(t)?this.props.theme:Object(y.a)({},t,this.props.theme):t=this.props.theme),this._themeCache=_(null,t),this._themeCache}}]),t}(e)
return m.componentId=s,m.theme=d,m.contextTypes=Object(y.a)({},e.contextTypes,g),m.propTypes=Object(y.a)({},e.propTypes,{theme:u.a.object}),m.generateTheme=_,m}))
ge.generateTheme=fe.b
var be=ge,ve=function(e){function t(){return Object(i.a)(this,t),Object(a.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"getChildContext",value:function(){var e=this.props.theme||{},t=b(this.context)||{}
return t.immutable&&t.theme?(this.props.theme,this.props.theme,e=t.theme):t.theme&&(e=h()(t.theme,e)),function(e,t){return Object(m.a)({},"@@themeable",{theme:e,immutable:t})}(e,t.immutable||this.props.immutable)}},{key:"render",value:function(){return _()(this.props.children)}}]),t.displayName="ApplyTheme",t}(s.Component)
ve.propTypes={theme:u.a.object,children:u.a.node,immutable:u.a.bool},ve.defaultProps={theme:void 0,children:null,immutable:!1},ve.childContextTypes=g,ve.contextTypes=g,ve.generateTheme=be.generateTheme}}])

//# sourceMappingURL=not_found_index-c-5c07aa02f4.js.map