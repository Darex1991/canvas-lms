(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[51],{"gSD+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return x}))
var o,i,a,r=n("rePB"),s=n("1OyB"),c=n("vuIU"),u=n("md7G"),l=n("foSv"),h=n("Ji7U"),d=n("q1tI"),f=n.n(d),m=n("17x9"),b=n.n(m),p=n("TSYQ"),y=n.n(p),v=n("Ji63"),g=n("mobu"),_=n("RhCJ"),O=n("/0PT"),k=n("BDw+"),E=n("YAV+"),F=n("oXx0")
function C(e){var t=e.borders,n=e.colors,o=e.spacing,i=e.typography
return{fontFamily:i.fontFamily,fontWeight:i.fontWeightNormal,lineHeight:i.lineHeightFit,h1FontSize:i.fontSizeXXLarge,h1FontWeight:i.fontWeightLight,h2FontSize:i.fontSizeXLarge,h2FontWeight:i.fontWeightNormal,h3FontSize:i.fontSizeLarge,h3FontWeight:i.fontWeightBold,h4FontSize:i.fontSizeMedium,h4FontWeight:i.fontWeightBold,h5FontSize:i.fontSizeSmall,h5FontWeight:i.fontWeightNormal,primaryInverseColor:n.textLightest,primaryColor:n.textDarkest,secondaryColor:n.textDark,secondaryInverseColor:n.textLight,brandColor:n.textBrand,warningColor:n.textWarning,errorColor:n.textDanger,successColor:n.textSuccess,borderPadding:o.xxxSmall,borderColor:n.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}C.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}
var j={componentId:"emyav",template:function(e){return"\n\n.emyav_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.emyav_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.emyav_bGBk[type]{text-align:left}\n\n[dir=rtl] input.emyav_bGBk[type]{text-align:right}\n\ninput.emyav_bGBk[type]:focus{outline:none}\n\n.emyav_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.emyav_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.emyav_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.emyav_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.emyav_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.emyav_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.emyav_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.emyav_fAVi{color:inherit}\n\n.emyav_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.emyav_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.emyav_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.emyav_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.emyav_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.emyav_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"emyav_bGBk",h1:"emyav_fIqS",h2:"emyav_eABG",h3:"emyav_dlZd",h4:"emyav_bAmB",h5:"emyav_eRZv","border-top":"emyav_dTMd","border-bottom":"emyav_evMo","color-inherit":"emyav_fAVi","color-primary":"emyav_qFsi","color-secondary":"emyav_bLsb","color-primary-inverse":"emyav_ezBQ","color-secondary-inverse":"emyav_dlnd",reset:"emyav_ZpoW",ellipsis:"emyav_bOQC"},x=Object(O.a)("7.0.0",null,"Use Heading from ui-heading instead.")(o=Object(F.a)()(o=Object(g.g)(C,j)((a=i=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,n=this.props,o=n.border,i=n.children,a=n.color,s=n.level,c=n.ellipsis,u=n.margin,l=n.elementRef,h=Object(k.a)(t,this.props,(function(){return"reset"===s?"span":s})),d=v.a.omitViewProps(Object(E.a)(this.props,t.propTypes),t)
return f.a.createElement(v.a,Object.assign({},d,{className:y()((e={},Object(r.a)(e,j.root,!0),Object(r.a)(e,j[s],!0),Object(r.a)(e,j["color-".concat(a)],a),Object(r.a)(e,j["border-".concat(o)],"none"!==o),Object(r.a)(e,j.ellipsis,c),e)),as:h,margin:u,elementRef:l}),i)}}]),t.displayName="Heading",t}(d.Component),i.propTypes={border:b.a.oneOf(["none","top","bottom"]),children:_.a,color:b.a.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),level:b.a.oneOf(["h1","h2","h3","h4","h5","reset"]),as:b.a.elementType,ellipsis:b.a.bool,margin:g.a.spacing,elementRef:b.a.func},i.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:!1},o=a))||o)||o)||o},"o/UQ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return J}))
var o=n("VTBJ"),i=n("Ff2n"),a=n("1OyB"),r=n("vuIU"),s=n("md7G"),c=n("foSv"),u=n("Ji7U"),l=n("DEX3"),h=n("q1tI"),d=n.n(h),f=n("17x9"),m=n.n(f),b=n("gX3m"),p=n("HK7K"),y=n("YB3R"),v=n("ISHz"),g=n("QF4Q"),_=n("3zPy"),O=n.n(_),k=n("EgqM"),E=n("DUTp"),F=n("yfCu"),C=n("Fszh"),j=n("Ndui"),x=n("KQm4"),R=n("xm5c"),w=n("IPIv")
function D(e,t,n){Object(l.warn)(!1,"[findFocusable] is deprecated. It has been moved from `@instructure/ui-a11y` to `@instructure/ui-dom-utils`")
var o=Object(g.a)(e)
if(!o||"function"!=typeof o.querySelectorAll)return[]
var i="a[href],frame,iframe,object,input:not([type=hidden]),select,textarea,button,*[tabindex]",a=Array.from(o.querySelectorAll(i))
return n&&Object(R.a)(o,i)&&(a=[].concat(Object(x.a)(a),[o])),a.filter((function(e){return"function"==typeof t?t(e)&&B(e):B(e)}))}function N(e){var t=Object(w.a)(e)
return"inline"!==t.display&&e.offsetWidth<=0&&e.offsetHeight<=0||"none"===t.display}function T(e){var t=["fixed","absolute"]
return!!t.includes(e.style.position.toLowerCase())||!!t.includes(Object(w.a)(e).getPropertyValue("position").toLowerCase())}function B(e){return!e.disabled&&function(e){for(;e&&e!==document.body;){if(N(e))return!1
if(T(e))break
e=e.parentNode}return!0}(e)}function S(e,t){return Object(l.warn)(!1,"[findTabbable] is deprecated. It has been moved from `@instructure/ui-a11y` to `@instructure/ui-dom-utils`"),D(e,(function(e){return t=e.getAttribute("tabindex"),!(!isNaN(t)&&t<0)
var t}),t)}var A=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shouldContainFocus:!0,liveRegion:[]}
Object(a.a)(this,e),this._observer=null,this._attributes=[],this._nodes=[],this._parents=[],this.handleDOMMutation=function(e){e.forEach((function(e){var t=Array.from(e.addedNodes),o=Array.from(e.removedNodes)
n.hideNodes(t),o.forEach((function(e){"iframe"!==e.tagName.toLowerCase()&&n.restoreNode(e),n.parseIframeBodies(e).forEach((function(e){n.restoreNode(e)}))}))}))}
var i="function"==typeof o.liveRegion?o.liveRegion():o.liveRegion
this._liveRegion=Array.isArray(i)?i:[i],this._contextElement=t,this._options=o}return Object(r.a)(e,[{key:"updateElement",value:function(e){this._contextElement=e}},{key:"muteNode",value:function(e){var t=this
e&&"script"!==e.tagName.toLowerCase()&&(["role","aria-label","aria-hidden"].forEach((function(n){var o=e.getAttribute(n)
null!==o&&(t._attributes.push([e,n,o]),e.removeAttribute(n))})),this._observer.observe(e,{childList:!0}))}},{key:"hideNodes",value:function(e){var t=this
e.forEach((function(e){e&&1===e.nodeType&&"script"!==e.tagName.toLowerCase()&&-1===t._parents.indexOf(e)&&-1===t._nodes.indexOf(e)&&-1===t._liveRegion.indexOf(e)&&!t._contextElement.contains(e)&&("iframe"!==e.tagName.toLowerCase()&&t.hideNode(e),t.parseIframeBodies(e).forEach((function(e){t.hideNode(e)})))}))}},{key:"hideNode",value:function(e){"true"!==e.getAttribute("aria-hidden")&&(e.setAttribute("aria-hidden","true"),this._nodes.push(e))}},{key:"restoreNode",value:function(e){var t=this._nodes.indexOf(e)
t>=0&&(e.removeAttribute("aria-hidden"),this._nodes.splice(t,1))}},{key:"parseIframeBodies",value:function(e){if(!e)return[]
var t=[]
return"iframe"===e.tagName.toLowerCase()?t.push(e):e.getElementsByTagName&&(t=Array.from(e.getElementsByTagName("iframe"))),t.map((function(e){var t=null
try{t=e.contentDocument.body}catch(e){"[ui-a11y] could not find a document for iframe: ".concat(e)}return t})).filter((function(e){return null!==e}))}},{key:"activate",value:function(){if(this._options.shouldContainFocus){this._observer=new MutationObserver(this.handleDOMMutation)
for(var e=this._contextElement;e&&1===e.nodeType&&"body"!==e.tagName.toLowerCase();){var t=e.parentElement
t&&(this._parents.push(t),this.muteNode(t),this.hideNodes(Array.prototype.slice.call(t.childNodes))),e=e.parentNode}}}},{key:"deactivate",value:function(){this._observer&&(this._observer.disconnect(),this._observer=null),this._nodes.forEach((function(e){e.removeAttribute("aria-hidden")})),this._nodes=[],this._attributes.forEach((function(e){e[0].setAttribute(e[1],e[2]||"")})),this._attributes=[],this._parents=[]}}]),e}(),z=n("K7t/"),W=n("gpCx"),L=n("pgSO"),I=n("/UXv")
function K(e,t,n){var o=Object(g.a)(e),i=S(o)
if(i.length){if(Object(z.a)(e)){var a=Object(L.a)();-1===i.indexOf(a)&&i.push(a)}var r=i[t.shiftKey?0:i.length-1]
if(Object(I.a)(r)||Object(I.a)(o)||!Object(z.a)(e))if("function"!=typeof n)t.preventDefault(),i[t.shiftKey?i.length-1:0].focus()
else n()}else t.preventDefault()}var M=function(){function e(t,n){var o=this
Object(a.a)(this,e),this._contextElement=null,this._focusLaterElement=null,this._needToFocus=!1,this._listeners=[],this._raf=[],this._active=!1,this.handleDismiss=function(e){o._options.onDismiss(e)},this.handleKeyDown=function(e){e.keyCode===O.a.codes.tab&&K(o._contextElement,e)},this.handleClick=function(e){o._wasDocumentClick=!0},this.handleWindowBlur=function(e){o._wasDocumentClick?o._wasDocumentClick=!1:o._needToFocus=!0},this.handleFocus=function(e){if(o._needToFocus){if(o._needToFocus=!1,!o._contextElement)return
o._raf.push(Object(v.a)((function(){Object(z.a)(o._contextElement)||o.focusDefaultElement()})))}},this.handleFirstTabbableKeyDown=function(e){e.keyCode===O.a.codes.tab&&e.shiftKey&&o._options.onBlur(e)},this.handleLastTabbableKeyDown=function(e){e.keyCode!==O.a.codes.tab||e.shiftKey||o._options.onBlur(e)},this._contextElement=Object(g.a)(t),this._options=n||{shouldContainFocus:!0,shouldReturnFocus:!0,onBlur:function(e){},onDismiss:function(e){},defaultFocusElement:null},this._options.shouldReturnFocus&&(this._focusLaterElement=this.activeElement)}return Object(r.a)(e,[{key:"updateElement",value:function(e){this._contextElement=Object(g.a)(e)}},{key:"focusDefaultElement",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
e?e.focus():t&&this.activeElement.blur()}},{key:"focus",value:function(){var e=this
this.focused||this._raf.push(Object(v.a)((function(){e.focusDefaultElement()})))}},{key:"blur",value:function(){if(this._options.shouldReturnFocus&&this._focusLaterElement){try{this._focusLaterElement.focus()}catch(e){"\n          [KeyboardFocusRegion] You tried to return focus to ".concat(this._focusLaterElement,"\n          but it is not in the DOM anymore: ").concat(e,"\n          ")}this._focusLaterElement=null}}},{key:"activate",value:function(){var e=this.defaultFocusElement,t=this.shouldContainFocus
this._active||(e||t)&&(t?this._listeners.push(Object(F.a)(this.doc,"keydown",this.handleKeyDown)):(this._listeners.push(Object(F.a)(this.firstTabbable||e,"keydown",this.handleFirstTabbableKeyDown)),this._listeners.push(Object(F.a)(this.lastTabbable||e,"keydown",this.handleLastTabbableKeyDown))),this._listeners.push(Object(F.a)(this.doc,"click",this.handleClick,!0)),this._listeners.push(Object(F.a)(this.win,"blur",this.handleWindowBlur,!1)),this._listeners.push(Object(F.a)(this.doc,"focus",this.handleFocus,!0)),this._active=!0)}},{key:"deactivate",value:function(){this._active&&(this._listeners.forEach((function(e){e.remove()})),this._listeners=[],this._raf.forEach((function(e){return e.cancel()})),this._raf=[],this._preventCloseOnDocumentClick=!1,this._active=!1)}},{key:"focused",get:function(){return Object(z.a)(this._contextElement)}},{key:"shouldContainFocus",get:function(){var e=this._options.shouldContainFocus
return!0===e||Array.isArray(e)&&e.includes.keyboard}},{key:"focusable",get:function(){return D(this._contextElement,(function(){return!0}),!0)||[]}},{key:"tabbable",get:function(){return S(this._contextElement)||[]}},{key:"firstTabbable",get:function(){return this.tabbable[0]}},{key:"lastTabbable",get:function(){return this.tabbable.pop()}},{key:"firstFocusable",get:function(){return this.focusable[0]}},{key:"lastFocusable",get:function(){return this.focusable.pop()}},{key:"doc",get:function(){return Object(E.a)(this._contextElement)}},{key:"win",get:function(){return Object(W.a)(this._contextElement)}},{key:"activeElement",get:function(){return Object(L.a)(this.doc)}},{key:"defaultFocusElement",get:function(){var e=this._options.defaultFocusElement,t=Object(g.a)("function"==typeof e?e():e)
if(t&&this._contextElement&&this._contextElement.contains(t))return t
var n=this.firstTabbable
return n||(this.focusable.includes(this._contextElement)?this._contextElement:null)}}]),e}(),U=function(){function e(t,n){var o=this
Object(a.a)(this,e),this._contextElement=null,this._preventCloseOnDocumentClick=!1,this._listeners=[],this._active=!1,this.handleDismiss=function(e,t){o._options.onDismiss(e,t)},this.captureDocumentClick=function(e){var t=e.target
o._preventCloseOnDocumentClick=0!==e.button||Object(k.a)(o._contextElement,t)},this.handleDocumentClick=function(e){o._options.shouldCloseOnDocumentClick&&!o._preventCloseOnDocumentClick&&o.handleDismiss(e,!0)},this.handleFrameClick=function(e,t){Object(k.a)(o._contextElement,t)||o.handleDismiss(e,!0)},this.handleKeyUp=function(e){o._options.shouldCloseOnEscape&&e.keyCode===O.a.codes.escape&&!e.defaultPrevented&&o.handleDismiss(e)},this._options=n||{shouldCloseOnDocumentClick:!0,shouldCloseOnEscape:!0,onDismiss:function(e){}},this._contextElement=t,this._screenReaderFocusRegion=new A(t,n),this._keyboardFocusRegion=new M(t,n),this._id=Object(j.a)()}return Object(r.a)(e,[{key:"updateElement",value:function(e){this._contextElement=e,this._keyboardFocusRegion&&this._keyboardFocusRegion.updateElement(e),this._screenReaderFocusRegion&&this._screenReaderFocusRegion.updateElement(e)}},{key:"activate",value:function(){var e=this
if(!this._active){var t=Object(E.a)(this._contextElement)
this._keyboardFocusRegion.activate(),this._screenReaderFocusRegion.activate(),this._options.shouldCloseOnDocumentClick&&(this._listeners.push(Object(F.a)(t,"click",this.captureDocumentClick,!0)),this._listeners.push(Object(F.a)(t,"click",this.handleDocumentClick)),Array.from(t.getElementsByTagName("iframe")).forEach((function(t){var n=Object(C.a)(t)
n&&e._listeners.push(Object(F.a)(n,"mouseup",(function(n){e.handleFrameClick(n,t)})))}))),this._options.shouldCloseOnEscape&&this._listeners.push(Object(F.a)(t,"keyup",this.handleKeyUp)),this._active=!0}}},{key:"deactivate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keyboard,n=void 0===t||t
this._active&&(this._listeners.forEach((function(e){e.remove()})),this._listeners=[],n&&this._keyboardFocusRegion.deactivate(),this._screenReaderFocusRegion.deactivate(),this._active=!1)}},{key:"focus",value:function(){this._active,this._keyboardFocusRegion.focus()}},{key:"blur",value:function(){this._active,this._keyboardFocusRegion.blur()}},{key:"id",get:function(){return this._id}},{key:"focused",get:function(){return this._active}},{key:"keyboardFocusable",get:function(){return(S(this._contextElement)||[]).length>0}}]),e}(),P=[],G=function e(){Object(a.a)(this,e)}
G.focusRegion=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
if((t="string"==typeof n?G.getEntry(e,n):G.addEntry(e,n))&&t.region&&"function"==typeof t.region.focus)return t.region.focus(),t.region
"[FocusRegionManager] Could not focus region with element: ".concat(e)},G.activateRegion=function(e,t){return G.addEntry(e,t).region},G.getActiveEntry=function(){return P.find((function(e){return e.region.focused}))},G.findEntry=function(e,t){return t?P.findIndex((function(e){return e.id===t})):P.findIndex((function(t){return t.element===e}))},G.getEntry=function(e,t){return P[G.findEntry(e,t)]},G.addEntry=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new U(e,t),o=G.getActiveEntry(),i=n.keyboardFocusable
P.forEach((function(e){var t=e.region
t&&t.deactivate(t.focused&&!i&&{keyboard:!1})})),n.activate(),t.shouldFocusOnOpen&&n.focus()
var a={id:n.id,element:e,region:n,children:[],parent:o}
return P.push(a),o&&o.children.push(a),a},G.removeEntry=function(e,t){var n=G.findEntry(e,t),o=P[n]
return n>-1&&P.splice(n,1),o},G.isFocused=function(e,t){var n=G.getActiveEntry()
return t?n&&n.region&&n.id===t:n&&n.region&&n.element===e},G.clearEntries=function(){P=[]},G.blurRegion=function(e,t){var n=G.removeEntry(e,t)
if(n){var o=n.children,i=n.region,a=n.parent
i&&i.deactivate(),o&&o.forEach((function(e){var t=e.id,n=e.element,o=G.removeEntry(n,t)
o&&o.region&&o.region.deactivate()})),a&&a.region&&a.region.activate(),i&&i.blur()}}
var q,Q,H,J=Object(b.a)("7.0.0",null,"Use Dialog from ui-dialog instead")((H=Q=function(e){function t(){var e,n
Object(a.a)(this,t)
for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r]
return(n=Object(s.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i))))._raf=[],n._focusRegion=null,n.getRef=function(e){n._root=e},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.open&&this.open()}},{key:"componentDidUpdate",value:function(e){var t=this.props.open
t&&!e.open?this.open():!t&&e.open&&this.close(),this._focusRegion&&this._focusRegion.updateElement(this.contentElement)}},{key:"componentWillUnmount",value:function(){this.props.open&&this.close(),this._raf.forEach((function(e){return e.cancel()})),this._raf=[]}},{key:"open",value:function(){var e=this,t=this.props,n=(t.open,t.contentElement,Object(i.a)(t,["open","contentElement"]))
this._raf.push(Object(v.a)((function(){e._focusRegion=G.activateRegion(e.contentElement,Object(o.a)({},n))})))}},{key:"close",value:function(){this._focusRegion&&G.blurRegion(this.contentElement,this._focusRegion.id)}},{key:"focus",value:function(){this.props.open&&this.contentElement&&this._focusRegion&&G.focusRegion(this.contentElement,this._focusRegion.id)}},{key:"blur",value:function(){this.props.open&&this.contentElement&&this.close()}},{key:"render",value:function(){var e=Object(p.a)(t,this.props)
return this.props.open?d.a.createElement(e,Object.assign({},Object(y.a)(this.props,t.propTypes),{ref:this.getRef,role:this.props.label?"dialog":null,"aria-label":this.props.label,className:this.props.className}),this.props.children):null}},{key:"contentElement",get:function(){var e=Object(g.a)(this.props.contentElement)
return e||(e=Object(g.a)(this._root)),e}},{key:"focused",get:function(){return this.contentElement&&this._focusRegion&&G.isFocused(this.contentElement,this._focusRegion.id)}}]),t.displayName="Dialog",t}(h.Component),Q.propTypes={children:m.a.node,as:m.a.elementType,display:m.a.oneOf(["auto","block","inline-block"]),label:m.a.string,open:m.a.bool,onBlur:m.a.func,onDismiss:m.a.func,defaultFocusElement:m.a.oneOfType([m.a.element,m.a.func]),contentElement:m.a.oneOfType([m.a.element,m.a.func]),liveRegion:m.a.oneOfType([m.a.arrayOf(m.a.element),m.a.element,m.a.func]),shouldContainFocus:m.a.oneOfType([m.a.bool,m.a.oneOf(["keyboard","screenreader"])]),shouldReturnFocus:m.a.bool,shouldCloseOnDocumentClick:m.a.bool,shouldCloseOnEscape:m.a.bool,shouldFocusOnOpen:m.a.bool},Q.defaultProps={children:null,display:void 0,label:void 0,open:!1,shouldFocusOnOpen:!0,shouldContainFocus:!1,shouldReturnFocus:!1,shouldCloseOnDocumentClick:!0,shouldCloseOnEscape:!0,defaultFocusElement:null,contentElement:null,liveRegion:null,onBlur:function(e){},onDismiss:function(e){}},q=H))||q}}])

//# sourceMappingURL=51-c-c7c8f2ec89.js.map