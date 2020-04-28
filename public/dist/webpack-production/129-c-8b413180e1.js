(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[129],{"18NU":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={}
return Object.keys(t).forEach((function(i){n[(0,r.camelize)("".concat(e,"-").concat(i))]=t[i]})),n}
var r=n("fgJ1")},"3gDV":function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.typography,n=e.colors,r=e.borders,o=e.spacing,d=e.shadows,l=e.stacking,c=e.breakpoints
return(0,i.default)({fontFamily:t.fontFamily,color:n.oxford,background:n.white,borderColor:n.tiara,colorInverse:n.white,backgroundInverse:n.oxford,borderColorInverse:"transparent",debugOutlineColor:n.borderDebug,backgroundLight:n.porcelain,borderStyle:r.style,arrowSize:"0.5rem",xSmallMaxWidth:c.xSmall,smallMaxWidth:c.small,mediumMaxWidth:c.medium,largeMaxWidth:c.large},(0,a.default)("margin",o),(0,a.default)("padding",o),(0,a.default)("shadow",d),(0,a.default)("stacking",l),(0,a.default)("border",r))}
var i=r(n("MVZn")),a=r(n("18NU"))},Bvk4:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i,a,o,d=r(n("Od2c")),l=r(n("NGgq")),c=d.default?(a=document.documentElement,o=a.getAttribute("dir")||(0,l.default)(a).direction,i||(i=new MutationObserver((function(){o=a.getAttribute("dir")}))).observe(a,{attributes:!0}),function(e){return void 0===e||e===a?o:(0,l.default)(e).direction}):function(){}
t.default=c},E8fo:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e&&(0,i.default)(e),n=(0,a.default)(t)
return n&&(n.defaultView||n.parentWindow)}
var i=r(n("kH7O")),a=r(n("dnp3"))},J26S:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){if("string"!=typeof n||(0,i.default)(t))return
return n.split(" ").map((function(n){if("auto"===n||"0"===n)return n
if("none"===n)return"0"
var i=(0,a.camelize)("".concat(r,"-").concat(n)),o=t[i]
return"[".concat(e,"] '").concat(i,"' is an invalid '").concat(r,"' value."),o||"0"})).join(" ").trim()}
n("k9XI")
var i=r(n("cZ6H")),a=n("fgJ1")},NGgq:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={}
if(o.default){var n=e&&(0,i.default)(e)
t=n?(0,a.default)(e).getComputedStyle(n):{}}return t}
var i=r(n("kH7O")),a=r(n("E8fo")),o=r(n("Od2c"))},SOtm:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.makeTextDirectionContext=function(e){return(0,i.default)({},"@@bidirectional",{dir:e})},t.getTextDirectionContext=function(e){if(e)return e["@@bidirectional"]},t.TextDirectionContextTypes=t.DIRECTION=void 0
var i=r(n("lSNA")),a=r(n("17x9")),o={ltr:"ltr",rtl:"rtl"}
t.DIRECTION=o
var d=(0,i.default)({},"@@bidirectional",a.default.shape({dir:a.default.oneOf(Object.values(o))}))
t.TextDirectionContextTypes=d},U8gY:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.shorthandPropType=b,t.default=t.SPACING=t.SIZES=t.BACKGROUNDS=t.BORDER_RADII=t.BORDER_WIDTHS=t.STACKING_TYPES=t.SHADOW_TYPES=void 0
var i=r(n("17x9")),a={resting:"resting",above:"above",topmost:"topmost",none:"none"}
t.SHADOW_TYPES=a
var o={deepest:"deepest",below:"below",resting:"resting",above:"above",topmost:"topmost"}
t.STACKING_TYPES=o
var d={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_WIDTHS=d
var l={0:"0",none:"none",small:"small",medium:"medium",large:"large"}
t.BORDER_RADII=l
var c={default:"default",inverse:"inverse",transparent:"transparent"}
t.BACKGROUNDS=c
var u={xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large"}
t.SIZES=u
var s={0:"0",none:"none",auto:"auto",xxxSmall:"xxx-small",xxSmall:"xx-small",xSmall:"x-small",small:"small",medium:"medium",large:"large",xLarge:"x-large",xxLarge:"xx-large"}
t.SPACING=s
var f={shadow:i.default.oneOf(Object.values(a)),stacking:i.default.oneOf(Object.values(o)),borderWidth:b(Object.values(d)),borderRadius:b(Object.values(l)),background:i.default.oneOf(Object.values(c)),size:i.default.oneOf(Object.values(u)),spacing:b(Object.values(s))}
function b(e){return function(t,n,r,i){var a=t[n]
if(void 0!==a){var o=typeof a
if("string"!==o)return new Error("Invalid ".concat(i," `").concat(n,"` of type `").concat(o,"` supplied to `").concat(r,"`, expected ")+"a string.")
var d=a.split(" "),l=d.length
if(!(l>0&&l<5))return new Error("Invalid ".concat(i," `").concat(n,"` `").concat(a,"` supplied to `").concat(r,"`, expected ")+"between one and four of the following valid values: `".concat(e.join(", "),"`."))
for(var c=0;c<l;c++){if(-1===e.indexOf(d[c]))return new Error("Invalid ".concat(i," `").concat(n,"` `").concat(d[c],"` supplied to `").concat(r,"`, expected ")+"a one of `".concat(e.join(", "),"`."))}}}}t.default=f},ZUxZ:function(e,t,n){"use strict"
var r=n("284h"),i=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=i(n("MVZn")),o=i(n("lSNA")),d=i(n("lwsE")),l=i(n("W8MJ")),c=i(n("a1gu")),u=i(n("Nsbk")),s=i(n("7W2i")),f=(n("k9XI"),r(n("q1tI"))),b=i(n("17x9")),h=i(n("TSYQ")),g=i(n("NWYN")),p=i(n("J26S")),v=(i(n("NGgq")),i(n("U8gY"))),m=n("zqXc"),x=r(n("uJP3")),_=n("YGEp"),z=i(n("dx2O")),A=i(n("iV4t")),y=n("4dGC"),X=i(n("3gDV")),w={componentId:"czbXA",template:function(e){return"\n\n.czbXA_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";max-width:100%}\n\n.czbXA_UeJS{display:block}\n\n.czbXA_cuDs{display:inline-block;vertical-align:middle}\n\n.czbXA_desw{display:flex}\n\n.czbXA_cKQL{display:inline-flex;vertical-align:middle}\n\n.czbXA_EMjX{text-align:start}\n\n[dir=ltr] .czbXA_EMjX{text-align:left}\n\n[dir=rtl] .czbXA_EMjX{text-align:right}\n\n.czbXA_ImeN,[dir=ltr] .czbXA_ImeN,[dir=rtl] .czbXA_ImeN{text-align:center}\n\n.czbXA_dBtH{text-align:end}\n\n[dir=ltr] .czbXA_dBtH{text-align:right}\n\n[dir=rtl] .czbXA_dBtH{text-align:left}\n\n.czbXA_bQna{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}\n\n.czbXA_dHtp{border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit","}\n\n.czbXA_dHtp.czbXA_fzxW{border-color:").concat(e.borderColorInverse||"inherit","}\n\n.czbXA_fZwI{background:").concat(e.background||"inherit",";color:").concat(e.color||"inherit","}\n\n.czbXA_fzxW{background:").concat(e.backgroundInverse||"inherit",";color:").concat(e.colorInverse||"inherit","}\n\n.czbXA_dUgE{background:").concat(e.backgroundLight||"inherit",";color:").concat(e.color||"inherit","}\n\n.czbXA_dIzR{max-width:").concat(e.xSmallMaxWidth||"inherit","}\n\n.czbXA_VCXp{max-width:").concat(e.smallMaxWidth||"inherit","}\n\n.czbXA_fKcQ{max-width:").concat(e.mediumMaxWidth||"inherit","}\n\n.czbXA_cnhd{max-width:").concat(e.largeMaxWidth||"inherit","}\n\n.czbXA_GJxv{max-width:100vw}\n\n.czbXA_fQrx{z-index:").concat(e.stackingTopmost||"inherit","}\n\n.czbXA_dtZX{z-index:").concat(e.stackingAbove||"inherit","}\n\n.czbXA_fCiV{z-index:").concat(e.stackingBelow||"inherit","}\n\n.czbXA_dJEE{z-index:").concat(e.stackingDeepest||"inherit","}\n\n.czbXA_fxuY{box-shadow:").concat(e.shadowTopmost||"inherit","}\n\n.czbXA_bxuL{box-shadow:").concat(e.shadowResting||"inherit","}\n\n.czbXA_bIta{box-shadow:").concat(e.shadowAbove||"inherit","}\n\n.czbXA_fhgP{overflow-x:hidden}\n\n.czbXA_dzYG{overflow-x:auto}\n\n.czbXA_divt{overflow-y:hidden}\n\n.czbXA_fKlg{overflow-y:auto}")},root:"czbXA_bGBk","display--block":"czbXA_UeJS","display--inline-block":"czbXA_cuDs","display--flex":"czbXA_desw","display--inline-flex":"czbXA_cKQL","textAlign--start":"czbXA_EMjX","textAlign--center":"czbXA_ImeN","textAlign--end":"czbXA_dBtH",debug:"czbXA_bQna",border:"czbXA_dHtp","background--inverse":"czbXA_fzxW","background--default":"czbXA_fZwI","background--light":"czbXA_dUgE","size--x-small":"czbXA_dIzR","size--small":"czbXA_VCXp","size--medium":"czbXA_fKcQ","size--large":"czbXA_cnhd","size--fullscreen":"czbXA_GJxv","stacking--topmost":"czbXA_fQrx","stacking--above":"czbXA_dtZX","stacking--below":"czbXA_fCiV","stacking--deepest":"czbXA_dJEE","shadow--topmost":"czbXA_fxuY","shadow--resting":"czbXA_bxuL","shadow--above":"czbXA_bIta","overflowX--hidden":"czbXA_fhgP","overflowX--auto":"czbXA_dzYG","overflowY--hidden":"czbXA_divt","overflowY--auto":"czbXA_fKlg"},O=function(e){function t(){var e,n;(0,d.default)(this,t)
for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a]
return(n=(0,c.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(i)))).handleElementRef=function(e){"function"==typeof n.props.elementRef&&n.props.elementRef(e),n._element=e},n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this._element,this.props.margin}},{key:"render",value:function(){var e,n=this.props,r=n.children,i=n.textAlign,d=n.background,l=n.display,c=n.debug,u=n.width,s=n.height,b=n.minWidth,g=n.minHeight,p=n.maxWidth,v=n.maxHeight,m=n.overflowX,x=n.overflowY,_=n.stacking,z=n.shadow,X=n.size,O=n.className,k=(0,A.default)(t,this.props)
return f.default.createElement(k,Object.assign({},(0,y.omitProps)(this.props,t.propTypes),{className:(0,h.default)((e={},(0,o.default)(e,w.root,!0),(0,o.default)(e,w.border,this.hasBorder),(0,o.default)(e,w.debug,c),(0,o.default)(e,w["textAlign--".concat(i)],i),(0,o.default)(e,w["background--".concat(d)],d),(0,o.default)(e,w["display--".concat(l)],l&&"auto"!==l),(0,o.default)(e,w["overflowX--".concat(m)],m&&"visible"!==m),(0,o.default)(e,w["overflowY--".concat(x)],x&&"visible"!==x),(0,o.default)(e,w["size--".concat(X)],X&&"auto"!==X),(0,o.default)(e,w["stacking--".concat(_)],_),(0,o.default)(e,w["shadow--".concat(z)],z&&"none"!==z),(0,o.default)(e,O,O),e)),style:(0,a.default)({},this.spacingStyle,this.borderStyle,{width:u,height:s,minWidth:b,minHeight:g,maxWidth:p,maxHeight:v},this.styleProps),ref:this.handleElementRef}),r)}},{key:"hasBorder",get:function(){var e=this.props.borderWidth
return e&&"0"!==e&&"none"!==e}},{key:"borderStyle",get:function(){var e=this.props,t=e.borderRadius,n=e.borderWidth
return this.dir===x.DIRECTION.rtl&&(t=(0,m.mirrorShorthandCorners)(t),n=(0,m.mirrorShorthandEdges)(n)),{borderRadius:(0,p.default)("View",this.theme,t,"borderRadius"),borderWidth:(0,p.default)("View",this.theme,n,"borderWidth")}}},{key:"spacingStyle",get:function(){var e=this.props,t=e.margin,n=e.padding
return"rtl"===this.dir&&(t=(0,m.mirrorShorthandEdges)(t),n=(0,m.mirrorShorthandEdges)(n)),{margin:(0,p.default)("View",this.theme,t,"margin"),padding:(0,p.default)("View",this.theme,n,"padding")}}},{key:"styleProps",get:function(){var e=this.props,t=e.cursor,n=e.style,r=(0,y.pickProps)(n||{},{},["top","left","position","display","transform","overflow","minWidth","minHeight","filter","flexBasis","backgroundImage"])
return t&&(r.cursor=t),r}}]),t.displayName="View",t}(f.Component)
O.propTypes={as:b.default.elementType,elementRef:b.default.func,display:b.default.oneOf(["auto","block","inline-block","flex","inline-flex"]),overflowX:b.default.oneOf(["auto","hidden","visible"]),overflowY:b.default.oneOf(["auto","hidden","visible"]),margin:v.default.spacing,padding:v.default.spacing,height:b.default.oneOfType([b.default.string,b.default.number]),width:b.default.oneOfType([b.default.string,b.default.number]),maxHeight:b.default.oneOfType([b.default.string,b.default.number]),maxWidth:b.default.oneOfType([b.default.string,b.default.number]),minHeight:b.default.oneOfType([b.default.string,b.default.number]),minWidth:b.default.oneOfType([b.default.string,b.default.number]),children:b.default.node,textAlign:b.default.oneOf(["start","center","end"]),borderWidth:v.default.borderWidth,borderRadius:v.default.borderWidth,background:b.default.oneOf(["default","inverse","light","transparent"]),shadow:v.default.shadow,stacking:v.default.stacking,cursor:_.cursor,debug:b.default.bool},O.defaultProps={display:"auto",textAlign:void 0,overflowX:"visible",overflowY:"visible",shadow:void 0,stacking:void 0,debug:!1,cursor:void 0,borderWidth:void 0,borderRadius:void 0,margin:void 0,padding:void 0,elementRef:void 0,background:void 0,children:null,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0}
var k=(0,z.default)("5.4.0",{size:"maxWidth"})((0,x.default)()((0,g.default)(X.default,w)(O)))
k.omitViewProps=function(e,t){return(0,y.omitProps)(e,k.propTypes)}
var T=k
t.default=T},dnp3:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e&&(0,i.default)(e)
return t&&t.ownerDocument||document}
var i=r(n("kH7O"))},fgJ1:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),t.camelize=a,t.pascalize=function(e){return(0,i.default)(a(e))}
var i=r(n("7/N2"))
function a(e){return e.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))}},uJP3:function(e,t,n){"use strict"
var r=n("TqRt")
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DIRECTION",{enumerable:!0,get:function(){return f.DIRECTION}}),t.default=void 0
var i=r(n("MVZn")),a=r(n("lwsE")),o=r(n("W8MJ")),d=r(n("a1gu")),l=r(n("Nsbk")),c=r(n("7W2i")),u=r(n("17x9")),s=r(n("b7MV")),f=n("SOtm"),b=r(n("Bvk4")),h=(0,s.default)((function(e){var t,n
return n=t=function(e){function t(){var e,n;(0,a.default)(this,t)
for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o]
return(n=(0,d.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(i))))._defaultDirection=(0,b.default)(),n}return(0,c.default)(t,e),(0,o.default)(t,[{key:"dir",get:function(){return((0,f.getTextDirectionContext)(this.context)||{}).dir||this.props.dir||this._defaultDirection}},{key:"rtl",get:function(){return this.dir===f.DIRECTION.rtl}},{key:"ltr",get:function(){return this.dir===f.DIRECTION.ltr}}]),t}(e),t.propTypes=(0,i.default)({},e.propTypes,{dir:u.default.oneOf(Object.values(f.DIRECTION))}),t.contextTypes=(0,i.default)({},e.contextTypes,f.TextDirectionContextTypes),n}))
t.default=h},zqXc:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mirrorShorthandEdges=function(e){if("string"!=typeof e)return
var t=e.split(" ")
if(4===t.length){var n=[t[3],t[1]]
t[1]=n[0],t[3]=n[1]}return t.join(" ")},t.mirrorShorthandCorners=function(e){if("string"!=typeof e)return
var t=e.split(" ")
if(2===t.length){var n=[t[1],t[0]]
t[0]=n[0],t[1]=n[1]}3===t.length&&t.push(t[1])
if(4===t.length){var r=[t[1],t[0],t[3],t[2]]
t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3]}return t.join(" ")}}}])

//# sourceMappingURL=129-c-8b413180e1.js.map