(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[28],{CwGX:function(e,o,n){"use strict"
n.d(o,"a",(function(){return k}))
var r,t,i,s=n("VTBJ"),c=n("1OyB"),a=n("vuIU"),f=n("md7G"),d=n("foSv"),l=n("Ji7U"),u=n("17x9"),b=n.n(u),O=n("qZX/"),y=n("rePB"),h={ltr:"ltr",rtl:"rtl"},g={CONTEXT_KEY:"@@bidirectional",DIRECTION:h,types:Object(y.a)({},"@@bidirectional",b.a.shape({dir:b.a.oneOf(Object.values(h))})),makeTextDirectionContext:function(e){return Object(y.a)({},"@@bidirectional",{dir:e})},getTextDirectionContext:function(e){if(e)return e["@@bidirectional"]}},U=n("i/8D"),_=n("IPIv")
function p(e){if(U.a)return void 0===e||e===document.documentElement?function(){if(r)return r
if(U.a){var e=document.documentElement
return t=e.getAttribute("dir"),r=t||Object(_.a)(e).direction,i||(i=new MutationObserver((function(){var o=e.getAttribute("dir")
o&&o!==t&&(t=r=o)}))).observe(e,{attributes:!0}),r}}():e.getAttribute("dir")||Object(_.a)(e).direction}var m=g.DIRECTION,v=g.getTextDirectionContext,k=Object(O.a)((function(e){var o,n
return n=o=function(e){function o(){return Object(c.a)(this,o),Object(f.a)(this,Object(d.a)(o).apply(this,arguments))}return Object(l.a)(o,e),Object(a.a)(o,[{key:"dir",get:function(){return(v(this.context)||{}).dir||this.props.dir||p()}},{key:"rtl",get:function(){return this.dir===m.rtl}},{key:"ltr",get:function(){return this.dir===m.ltr}}]),o}(e),o.propTypes=Object(s.a)({},e.propTypes,{dir:b.a.oneOf(Object.values(g.DIRECTION))}),o.contextTypes=Object(s.a)({},e.contextTypes,{},g.types),n}))
k.DIRECTION=m},"MiD/":function(e,o,n){"use strict"
n.d(o,"a",(function(){return B}))
var r=n("VTBJ"),t=n("rePB"),i=n("Ff2n"),s=n("1OyB"),c=n("vuIU"),a=n("md7G"),f=n("foSv"),d=n("Ji7U"),l=(n("DEX3"),n("q1tI")),u=n.n(l),b=n("17x9"),O=n.n(b),y=n("TSYQ"),h=n.n(y),g=n("Ok0q"),U=n("CwGX"),_=n("L7TX"),p=n("GLQS"),m=n("v+dX"),v=n("ELJd")
function k(e){var o=e.typography,n=e.colors,t=e.borders,i=e.spacing,s=e.shadows,c=e.stacking,a=e.breakpoints
e.transitions
return Object(r.a)({fontFamily:o.fontFamily,color:n.textDarkest,colorPrimaryInverse:n.textLightest,borderStyle:t.style,borderColorPrimary:n.borderMedium,borderColorSecondary:n.borderDark,borderColorSuccess:n.borderSuccess,borderColorBrand:n.borderBrand,borderColorInfo:n.borderInfo,borderColorAlert:n.borderAlert,borderColorWarning:n.borderWarning,borderColorDanger:n.borderDanger,borderColorTransparent:"transparent",borderRadiusSmall:t.radiusSmall,borderRadiusMedium:t.radiusMedium,borderRadiusLarge:t.radiusLarge,debugOutlineColor:n.borderDebug,backgroundPrimary:n.backgroundLightest,backgroundSecondary:n.backgroundLight,backgroundPrimaryInverse:n.backgroundDarkest,backgroundBrand:n.backgroundBrand,backgroundInfo:n.backgroundInfo,backgroundAlert:n.backgroundAlert,backgroundSuccess:n.backgroundSuccess,backgroundDanger:n.backgroundDanger,backgroundWarning:n.backgroundWarning,arrowSize:"0.5rem",focusOutlineStyle:t.style,focusOutlineWidth:t.widthMedium,focusOutlineOffset:"0.3125rem",focusOutlineInset:"0rem",focusColorInfo:n.borderInfo,focusColorDanger:n.borderDanger,focusColorSuccess:n.borderSuccess,focusColorInverse:n.borderLightest,xSmallMaxWidth:a.xSmall,smallMaxWidth:a.small,mediumMaxWidth:a.medium,largeMaxWidth:a.large},Object(g.d)("margin",i),{},Object(g.d)("padding",i),{},Object(g.d)("shadow",s),{},Object(g.d)("stacking",c),{},Object(g.d)("border",t))}k.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusColorInfo:e["ic-brand-primary"],backgroundBrand:e["ic-brand-primary"],backgroundInfo:e["ic-brand-primary"],borderColorBrand:e["ic-brand-primary"],borderColorInfo:e["ic-brand-primary"]}},k["canvas-ams"]=function(e){return{focusColorInfo:e.colors.borderBrand}}
var w,C,I,j=Object(g.b)({map:{borderColorDefault:"borderColorPrimary",borderColorInverse:"borderColorTransparent",colorInverse:"colorPrimaryInverse",background:"backgroundPrimary",backgroundLight:"backgroundSecondary",backgroundInverse:"backgroundPrimaryInverse"},version:"8.0.0"}),x={componentId:"fOyUs",template:function(e){return"\n\n.fOyUs_bGBk{box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";max-width:100%;overflow:visible}\n\n.fOyUs_bMes{display:inline}\n\n.fOyUs_UeJS{display:block}\n\n.fOyUs_cuDs{display:inline-block;vertical-align:middle}\n\n.fOyUs_desw{display:flex}\n\n.fOyUs_cKQL{display:inline-flex;vertical-align:middle}\n\n.fOyUs_EMjX{text-align:start}\n\n[dir=ltr] .fOyUs_EMjX{text-align:left}\n\n[dir=rtl] .fOyUs_EMjX{text-align:right}\n\n.fOyUs_ImeN,[dir=ltr] .fOyUs_ImeN,[dir=rtl] .fOyUs_ImeN{text-align:center}\n\n.fOyUs_dBtH{text-align:end}\n\n[dir=ltr] .fOyUs_dBtH{text-align:right}\n\n[dir=rtl] .fOyUs_dBtH{text-align:left}\n\n.fOyUs_fFew{outline:0.0625rem dashed ").concat(e.debugOutlineColor||"inherit","}\n\n.fOyUs_dnJm{border-style:").concat(e.borderStyle||"inherit","}\n\n.fOyUs_eiMX,.fOyUs_dzKA{border-color:").concat(e.borderColorTransparent||"inherit","}\n\n.fOyUs_dsNY,.fOyUs_tIxX{border-color:").concat(e.borderColorPrimary||"inherit","}\n\n.fOyUs_fuLg{border-color:").concat(e.borderColorSecondary||"inherit","}\n\n.fOyUs_cLjf{border-color:").concat(e.borderColorBrand||"inherit","}\n\n.fOyUs_cXDj{border-color:").concat(e.borderColorInfo||"inherit","}\n\n.fOyUs_fjbA{border-color:").concat(e.borderColorSuccess||"inherit","}\n\n.fOyUs_fBpf{border-color:").concat(e.borderColorWarning||"inherit","}\n\n.fOyUs_bMrG{border-color:").concat(e.borderColorAlert||"inherit","}\n\n.fOyUs_fdvn{border-color:").concat(e.borderColorDanger||"inherit","}\n\n.fOyUs_fKyb{background:none;color:").concat(e.color||"inherit","}\n\n.fOyUs_fZwI,.fOyUs_kXoP{background:").concat(e.backgroundPrimary||"inherit",";color:").concat(e.color||"inherit","}\n\n.fOyUs_dUgE,.fOyUs_bvKN{background:").concat(e.backgroundSecondary||"inherit",";color:").concat(e.color||"inherit","}\n\n.fOyUs_fzxW,.fOyUs_elGp{background:").concat(e.backgroundPrimaryInverse||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_NGNZ{background:").concat(e.backgroundBrand||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fYBY{background:").concat(e.backgroundInfo||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_feZy{background:").concat(e.backgroundAlert||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_qidh{background:").concat(e.backgroundSuccess||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fKOP{background:").concat(e.backgroundDanger||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_eOYc{background:").concat(e.backgroundWarning||"inherit",";color:").concat(e.colorPrimaryInverse||"inherit","}\n\n.fOyUs_fQrx{z-index:").concat(e.stackingTopmost||"inherit","}\n\n.fOyUs_dtZX{z-index:").concat(e.stackingAbove||"inherit","}\n\n.fOyUs_fCiV{z-index:").concat(e.stackingBelow||"inherit","}\n\n.fOyUs_dJEE{z-index:").concat(e.stackingDeepest||"inherit","}\n\n.fOyUs_fxuY{box-shadow:").concat(e.shadowTopmost||"inherit","}\n\n.fOyUs_bxuL{box-shadow:").concat(e.shadowResting||"inherit","}\n\n.fOyUs_bIta{box-shadow:").concat(e.shadowAbove||"inherit","}\n\n.fOyUs_fhgP{overflow-x:hidden}\n\n.fOyUs_dzYG{overflow-x:auto}\n\n.fOyUs_divt{overflow-y:hidden}\n\n.fOyUs_fKlg{overflow-y:auto}\n\n.fOyUs_cBHs{position:relative}\n\n.fOyUs_cSap{position:fixed}\n\n.fOyUs_fuLp{position:absolute}\n\n.fOyUs_bZzT{position:-webkit-sticky;position:sticky}\n\n.fOyUs_eWbJ.fOyUs_cBHs:before{border-color:").concat(e.focusOutlineColorDefault||"inherit",";border-style:").concat(e.focusOutlineStyle||"inherit",";border-width:").concat(e.focusOutlineWidth||"inherit",';content:"";opacity:0;pointer-events:none;position:absolute}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cnfU:before{transform:scale(0.95);transition:all 0.2s}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr:before{bottom:calc(').concat(e.focusOutlineOffset||"inherit","*-1);left:calc(").concat(e.focusOutlineOffset||"inherit","*-1);right:calc(").concat(e.focusOutlineOffset||"inherit","*-1);top:calc(").concat(e.focusOutlineOffset||"inherit","*-1)}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB:before{bottom:").concat(e.focusOutlineInset||"inherit",";left:").concat(e.focusOutlineInset||"inherit",";right:").concat(e.focusOutlineInset||"inherit",";top:").concat(e.focusOutlineInset||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_beQo:before{border-radius:inherit}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bnCe:before{border-radius:0}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_cBtr.fOyUs_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," + ").concat(e.focusOutlineOffset||"inherit"," - ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_cmRt:before{border-radius:calc(").concat(e.borderRadiusSmall||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_eeJl:before{border-radius:calc(").concat(e.borderRadiusMedium||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_bFwB.fOyUs_TYCL:before{border-radius:calc(").concat(e.borderRadiusLarge||"inherit"," - ").concat(e.focusOutlineInset||"inherit"," + ").concat(e.focusOutlineWidth||"inherit",")}\n\n.fOyUs_eWbJ.fOyUs_cBHs:focus{outline:none}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fmDy:focus:before,.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_dvYc:before{opacity:1;transform:scale(1)}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fuTR:before{border-color:").concat(e.focusColorInfo||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_dwHj:before{border-color:").concat(e.focusColorInverse||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_NhxI:before{border-color:").concat(e.focusColorSuccess||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_cBHs.fOyUs_fsVi:before{border-color:").concat(e.focusColorDanger||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes{outline-style:none}\n\n.fOyUs_eWbJ.fOyUs_bMes:before{border-style:none}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_bFwB.fOyUs_fmDy:focus,.fOyUs_eWbJ.fOyUs_bMes.fOyUs_bFwB.fOyUs_dvYc{outline-style:").concat(e.focusOutlineStyle||"inherit",";outline-width:").concat(e.focusOutlineWidth||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_fuTR{outline-color:").concat(e.focusColorInfo||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_dwHj{outline-color:").concat(e.focusColorInverse||"inherit","}\n\n.fOyUs_eWbJ.fOyUs_bMes.fOyUs_fsVi{outline-color:").concat(e.focusColorDanger||"inherit","}")},root:"fOyUs_bGBk","display--inline":"fOyUs_bMes","display--block":"fOyUs_UeJS","display--inline-block":"fOyUs_cuDs","display--flex":"fOyUs_desw","display--inline-flex":"fOyUs_cKQL","textAlign--start":"fOyUs_EMjX","textAlign--center":"fOyUs_ImeN","textAlign--end":"fOyUs_dBtH",withVisualDebug:"fOyUs_fFew",withBorder:"fOyUs_dnJm","borderColor--inverse":"fOyUs_eiMX","borderColor--transparent":"fOyUs_dzKA","borderColor--default":"fOyUs_dsNY","borderColor--primary":"fOyUs_tIxX","borderColor--secondary":"fOyUs_fuLg","borderColor--brand":"fOyUs_cLjf","borderColor--info":"fOyUs_cXDj","borderColor--success":"fOyUs_fjbA","borderColor--warning":"fOyUs_fBpf","borderColor--alert":"fOyUs_bMrG","borderColor--danger":"fOyUs_fdvn","background--transparent":"fOyUs_fKyb","background--default":"fOyUs_fZwI","background--primary":"fOyUs_kXoP","background--light":"fOyUs_dUgE","background--secondary":"fOyUs_bvKN","background--inverse":"fOyUs_fzxW","background--primary-inverse":"fOyUs_elGp","background--brand":"fOyUs_NGNZ","background--info":"fOyUs_fYBY","background--alert":"fOyUs_feZy","background--success":"fOyUs_qidh","background--danger":"fOyUs_fKOP","background--warning":"fOyUs_eOYc","stacking--topmost":"fOyUs_fQrx","stacking--above":"fOyUs_dtZX","stacking--below":"fOyUs_fCiV","stacking--deepest":"fOyUs_dJEE","shadow--topmost":"fOyUs_fxuY","shadow--resting":"fOyUs_bxuL","shadow--above":"fOyUs_bIta","overflowX--hidden":"fOyUs_fhgP","overflowX--auto":"fOyUs_dzYG","overflowY--hidden":"fOyUs_divt","overflowY--auto":"fOyUs_fKlg","position--relative":"fOyUs_cBHs","position--fixed":"fOyUs_cSap","position--absolute":"fOyUs_fuLp","position--sticky":"fOyUs_bZzT",focus:"fOyUs_eWbJ",focusAnimation:"fOyUs_cnfU","focusPosition--offset":"fOyUs_cBtr","focusPosition--inset":"fOyUs_bFwB","focusRing--radiusInherit":"fOyUs_beQo","focusRing--radiusNone":"fOyUs_bnCe","focusRing--radiusSmall":"fOyUs_cmRt","focusRing--radiusMedium":"fOyUs_eeJl","focusRing--radiusLarge":"fOyUs_TYCL",shouldUseBrowserFocus:"fOyUs_fmDy",withFocusOutline:"fOyUs_dvYc","focusColor--info":"fOyUs_fuTR","focusColor--inverse":"fOyUs_dwHj","focusColor--success":"fOyUs_NhxI","focusColor--danger":"fOyUs_fsVi"},B=Object(p.a)("8.0.0",{focused:"withFocusOutline",visualDebug:"withVisualDebug"})(w=Object(U.a)()(w=Object(g.g)(k,x,j)((I=C=function(e){function o(){var e,n
Object(s.a)(this,o)
for(var r=arguments.length,t=new Array(r),i=0;i<r;i++)t[i]=arguments[i]
return(n=Object(a.a)(this,(e=Object(f.a)(o)).call.apply(e,[this].concat(t)))).handleElementRef=function(e){"function"==typeof n.props.elementRef&&n.props.elementRef(e),n._element=e},n.verifyUniformValues=function(e,o){return"string"==typeof o&&o.trim().split(" ").every((function(o){return e===o}))},n}return Object(d.a)(o,e),Object(c.a)(o,[{key:"componentDidMount",value:function(){0}},{key:"render",value:function(){var e,n,s=this.props,c=s.children,a=s.textAlign,f=s.background,d=s.display,l=s.withVisualDebug,b=s.width,O=s.height,y=s.minWidth,g=s.minHeight,U=s.maxWidth,_=s.maxHeight,p=s.overflowX,k=s.overflowY,w=s.stacking,C=s.shadow,I=s.position,j=s.focusPosition,B=s.focusColor,W=s.shouldAnimateFocus,S=s.borderColor,D=s.className,R=Object(i.a)(s,["children","textAlign","background","display","withVisualDebug","width","height","minWidth","minHeight","maxWidth","maxHeight","overflowX","overflowY","stacking","shadow","position","focusPosition","focusColor","shouldAnimateFocus","borderColor","className"]),J=Object(m.a)(o,this.props),P=this.withFocusOutline,T="relative"===I||"inline"===d&&"inset"===j?(e={},Object(t.a)(e,x.focus,!0),Object(t.a)(e,x.withFocusOutline,P),Object(t.a)(e,x.shouldUseBrowserFocus,void 0===P),Object(t.a)(e,x[this.focusRingRadius],!0),Object(t.a)(e,x["focusPosition--".concat(j)],!0),Object(t.a)(e,x["focusColor--".concat(B)],!0),Object(t.a)(e,x.focusAnimation,W),e):{},H=h()(Object(r.a)((n={},Object(t.a)(n,x.root,!0),Object(t.a)(n,x.withVisualDebug,l||this.props.visualDebug),Object(t.a)(n,x.withBorder,this.withBorder),Object(t.a)(n,x["borderColor--".concat(S)],this.withBorder),Object(t.a)(n,x["textAlign--".concat(a)],a),Object(t.a)(n,x["background--".concat(f)],f),Object(t.a)(n,x["display--".concat(d)],d&&"auto"!==d),Object(t.a)(n,x["overflowX--".concat(p)],p&&"visible"!==p),Object(t.a)(n,x["overflowY--".concat(k)],k&&"visible"!==k),Object(t.a)(n,x["stacking--".concat(w)],w),Object(t.a)(n,x["shadow--".concat(C)],C&&"none"!==C),Object(t.a)(n,x["position--".concat(I)],"static"!==I),n),T,Object(t.a)({},D,D)))
return u.a.createElement(J,Object.assign({},Object(v.b)(R),{className:H,style:Object(r.a)({},this.spacingStyle,{},this.borderStyle,{},this.offsetStyle,{width:b,height:O,minWidth:y,minHeight:g,maxWidth:U,maxHeight:_},this.styleProps),ref:this.handleElementRef}),c)}},{key:"withFocusOutline",get:function(){if(void 0!==this.props.withFocusOutline||void 0!==this.props.focused){var e=this.props,o=(e.position,e.display,e.focusPosition,this.props.focused||this.props.withFocusOutline)
return o}}},{key:"focusRingRadius",get:function(){var e,o=this.props.borderRadius,n=void 0===o?"":o,r=n.trim().split(" ")[0]
if(this.verifyUniformValues(r,n)){if(["small","medium","large"].includes(r))return"".concat("focusRing--radius").concat("".concat((e=r).charAt(0).toUpperCase()).concat(e.slice(1)))
if(["circle","pill"].includes(r))return"".concat("focusRing--radius","Inherit")}return"".concat("focusRing--radius","None")}},{key:"withBorder",get:function(){var e=this.props.borderWidth
return e&&"0"!==e&&"none"!==e}},{key:"borderStyle",get:function(){var e=this.props,o=e.borderRadius,n=e.borderWidth
return this.dir===U.a.DIRECTION.rtl&&(o=Object(g.e)(o),n=Object(g.f)(n)),{borderRadius:Object(g.c)("View",this.theme,o,"borderRadius"),borderWidth:Object(g.c)("View",this.theme,n,"borderWidth")}}},{key:"spacingStyle",get:function(){var e=this.props,o=e.margin,n=e.padding
return"rtl"===this.dir&&(o=Object(g.f)(o),n=Object(g.f)(n)),{margin:Object(g.c)("View",this.theme,o,"margin"),padding:Object(g.c)("View",this.theme,n,"padding")}}},{key:"offsetStyle",get:function(){var e=this.props,o=e.insetBlockStart,n=e.insetBlockEnd,t=e.insetInlineStart,i=e.insetInlineEnd,s="rtl"===this.dir,c={top:o,insetBlockStart:o},a={bottom:n,insetBlockEnd:n},f={left:s?i:t,right:s?t:i,insetInlineStart:t,insetInlineEnd:i}
return Object(r.a)({},c,{},a,{},f)}},{key:"styleProps",get:function(){var e=this.props,o=e.cursor,n=e.style,r=Object(v.c)(n||{},{},["top","left","position","display","transform","overflow","minWidth","minHeight","filter","flexBasis","backgroundImage"])
return o&&(r.cursor=o),r}}]),o.displayName="View",o}(l.Component),C.propTypes={as:O.a.elementType,elementRef:O.a.func,display:O.a.oneOf(["auto","inline","block","inline-block","flex","inline-flex"]),overflowX:O.a.oneOf(["auto","hidden","visible"]),overflowY:O.a.oneOf(["auto","hidden","visible"]),margin:g.a.spacing,padding:g.a.spacing,height:O.a.oneOfType([O.a.string,O.a.number]),width:O.a.oneOfType([O.a.string,O.a.number]),maxHeight:O.a.oneOfType([O.a.string,O.a.number]),maxWidth:O.a.oneOfType([O.a.string,O.a.number]),minHeight:O.a.oneOfType([O.a.string,O.a.number]),minWidth:O.a.oneOfType([O.a.string,O.a.number]),children:O.a.node,textAlign:O.a.oneOf(["start","center","end"]),borderWidth:g.a.borderWidth,borderRadius:g.a.borderRadius,borderColor:p.a.deprecatePropValues(O.a.oneOf(["transparent","primary","secondary","brand","info","success","warning","alert","danger","default","inverse"]),["default","inverse"],(function(e){var o=e.propName,n=e.propValue
return"In version 8.0.0, the value '".concat(n,"' for `").concat(o,"` will be changed to ").concat("default"===n?"'primary'":"inverse"===n?"'transparent'":void 0,". Use that value instead.")})),background:p.a.deprecatePropValues(O.a.oneOf(["transparent","primary","secondary","primary-inverse","brand","info","alert","success","danger","warning","default","light","inverse"]),["default","inverse","light"],(function(e){var o=e.propName,n=e.propValue
return"In version 8.0.0, the value '".concat(n,"' for `").concat(o,"` will be changed to ").concat("default"===n?"'primary'":"light"===n?"'secondary'":"inverse"===n?"'primary-inverse'":void 0,". Use that value instead.")})),shadow:g.a.shadow,stacking:g.a.stacking,cursor:_.a,position:O.a.oneOf(["static","absolute","relative","sticky","fixed"]),insetInlineStart:O.a.string,insetInlineEnd:O.a.string,insetBlockStart:O.a.string,insetBlockEnd:O.a.string,withFocusOutline:O.a.bool,focusPosition:O.a.oneOf(["offset","inset"]),focusColor:O.a.oneOf(["info","inverse","success","danger"]),shouldAnimateFocus:O.a.bool,withVisualDebug:O.a.bool,focused:O.a.bool,visualDebug:O.a.bool},C.defaultProps={display:"auto",as:void 0,textAlign:void 0,overflowX:"visible",overflowY:"visible",shadow:void 0,stacking:void 0,withVisualDebug:!1,cursor:void 0,borderWidth:void 0,borderRadius:void 0,borderColor:"primary",margin:void 0,padding:void 0,elementRef:void 0,background:void 0,children:null,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0,position:"static",withFocusOutline:void 0,focusPosition:"offset",focusColor:"info",insetInlineStart:void 0,insetInlineEnd:void 0,insetBlockStart:void 0,insetBlockEnd:void 0,shouldAnimateFocus:!0},w=I))||w)||w)||w
B.omitViewProps=function(e,o){return Object(v.a)(e,B.propTypes)}}}])

//# sourceMappingURL=28-c-e8c70752ad.js.map