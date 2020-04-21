(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[529],{"/4op":function(e,t,n){"use strict"
n.r(t)
var r=n("q1tI"),o={attributes:!0,characterData:!0,subtree:!0,childList:!0}
t.default=function(e,t,n=o){Object(r.useEffect)(()=>{if(e.current){const r=new MutationObserver(t)
return r.observe(e.current,n),()=>{r.disconnect()}}},[t,n])}},"5D9J":function(e,t,n){"use strict"
n.r(t)
var r=n("lSNA"),o=n.n(r),a=n("q1tI"),i=n("9uj6"),c=n("qKvR"),u=n("SIPS"),s=n("MiSq"),l=i.a,d=function(e){return"theme"!==e&&"innerRef"!==e},f=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?l:d}
function p(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?p(n,!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function e(t,n){var r,o,i
void 0!==n&&(r=n.label,i=n.target,o=t.__emotion_forwardProp&&n.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&n.shouldForwardProp(e)}:n.shouldForwardProp)
var l=t.__emotion_real===t,d=l&&t.__emotion_base||t
"function"!=typeof o&&l&&(o=t.__emotion_forwardProp)
var p=o||f(d),v=!p("as")
return function(){var b=arguments,m=l&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[]
if(void 0!==r&&m.push("label:"+r+";"),null==b[0]||void 0===b[0].raw)m.push.apply(m,b)
else{0,m.push(b[0][0])
for(var y=b.length,g=1;g<y;g++)m.push(b[g],b[0][g])}var w=Object(c.withEmotionCache)((function(e,t,n){return Object(a.createElement)(c.ThemeContext.Consumer,null,(function(r){var c=v&&e.as||d,l="",h=[],b=e
if(null==e.theme){for(var y in b={},e)b[y]=e[y]
b.theme=r}"string"==typeof e.className?l=Object(u.a)(t.registered,h,e.className):null!=e.className&&(l=e.className+" ")
var g=Object(s.a)(m.concat(h),t.registered,b)
Object(u.b)(t,g,"string"==typeof c)
l+=t.key+"-"+g.name,void 0!==i&&(l+=" "+i)
var w=v&&void 0===o?f(c):p,O={}
for(var _ in e)v&&"as"===_||w(_)&&(O[_]=e[_])
return O.className=l,O.ref=n||e.innerRef,Object(a.createElement)(c,O)}))}))
return w.displayName=void 0!==r?r:"Styled("+("string"==typeof d?d:d.displayName||d.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=d,w.__emotion_styles=m,w.__emotion_forwardProp=o,Object.defineProperty(w,"toString",{value:function(){return"."+i}}),w.withComponent=function(t,r){return e(t,void 0!==r?h({},n||{},{},r):n).apply(void 0,m)},w}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){v[e]=v(e)}))
t.default=v},"7YPn":function(e,t,n){var r,o,a
o=[],void 0===(a="function"==typeof(r=function(){var e=/(auto|scroll)/,t=function(e,n){return null===e.parentNode?n:t(e.parentNode,n.concat([e]))},n=function(e,t){return getComputedStyle(e,null).getPropertyValue(t)},r=function(t){return e.test(function(e){return n(e,"overflow")+n(e,"overflow-y")+n(e,"overflow-x")}(t))}
return function(e){if(e instanceof HTMLElement||e instanceof SVGElement){for(var n=t(e.parentNode,[]),o=0;o<n.length;o+=1)if(r(n[o]))return n[o]
return document.scrollingElement||document.documentElement}}})?r.apply(t,o):r)||(e.exports=a)},"9/5/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,s=c||u||Function("return this")(),l=Object.prototype.toString,d=Math.max,f=Math.min,p=function(){return s.Date.now()}
function h(e){var t=typeof e
return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e
if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN
if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=e.replace(n,"")
var c=o.test(e)
return c||a.test(e)?i(e.slice(2),c?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,a,i,c,u,s=0,l=!1,b=!1,m=!0
if("function"!=typeof e)throw new TypeError("Expected a function")
function y(t){var n=r,a=o
return r=o=void 0,s=t,i=e.apply(a,n)}function g(e){return s=e,c=setTimeout(O,t),l?y(e):i}function w(e){var n=e-u
return void 0===u||n>=t||n<0||b&&e-s>=a}function O(){var e=p()
if(w(e))return _(e)
c=setTimeout(O,function(e){var n=t-(e-u)
return b?f(n,a-(e-s)):n}(e))}function _(e){return c=void 0,m&&r?y(e):(r=o=void 0,i)}function k(){var e=p(),n=w(e)
if(r=arguments,o=this,u=e,n){if(void 0===c)return g(u)
if(b)return c=setTimeout(O,t),y(u)}return void 0===c&&(c=setTimeout(O,t)),i}return t=v(t)||0,h(n)&&(l=!!n.leading,a=(b="maxWait"in n)?d(v(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=o=c=void 0},k.flush=function(){return void 0===c?i:_(p())},k}}).call(this,n("yLpj"))},DUc8:function(e,t,n){"use strict"
n.r(t),n.d(t,"AutoFocusInside",(function(){return _e})),n.d(t,"MoveFocusInside",(function(){return xe})),n.d(t,"FreeFocusInside",(function(){return Ce})),n.d(t,"InFocusGuard",(function(){return d})),n.d(t,"FocusLockUI",(function(){return _}))
var r=n("zLVn"),o=n("wx14"),a=n("q1tI"),i=n.n(a),c=(n("17x9"),"data-autofocus-inside")
function u(e,t){return n=t,r=function(t){return e.forEach((function(e){return function(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}(e,t)}))},(o=Object(a.useState)((function(){return{value:n,callback:r,facade:{get current(){return o.value},set current(e){var t=o.value
t!==e&&(o.value=e,o.callback(e,t))}}}}))[0]).callback=r,o.facade
var n,r,o}var s={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"},l=function(e){var t=e.children
return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{key:"guard-first","data-focus-guard":!0,"data-focus-auto-guard":!0,style:s}),t,t&&i.a.createElement("div",{key:"guard-last","data-focus-guard":!0,"data-focus-auto-guard":!0,style:s}))}
l.propTypes={},l.defaultProps={children:null}
var d=l,f=n("mrSG")
function p(e){return e}function h(e,t){void 0===t&&(t=p)
var n=[],r=!1
return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.")
return n.length?n[n.length-1]:e},useMedium:function(e){var o=t(e,r)
return n.push(o),function(){n=n.filter((function(e){return e!==o}))}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n
n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0
var t=[]
if(n.length){var o=n
n=[],o.forEach(e),t=n}var a=function(){var n=t
t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)}
i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}}}function v(e,t){return void 0===t&&(t=p),h(e,t)}var b=v({},(function(e){return{target:e.target,currentTarget:e.currentTarget}})),m=v(),y=v(),g=function(e){void 0===e&&(e={})
var t=h(null)
return t.options=f.__assign({async:!0,ssr:!1},e),t}({async:!0}),w=[],O=i.a.forwardRef((function(e,t){var n,r=Object(a.useState)(),c=r[0],l=r[1],d=Object(a.useRef)(),f=Object(a.useRef)(!1),p=Object(a.useRef)(null),h=e.children,v=e.disabled,y=e.noFocusGuards,O=e.persistentFocus,_=e.autoFocus,k=(e.allowTextSelection,e.group),x=e.className,j=e.whiteList,C=e.shards,E=void 0===C?w:C,S=e.as,N=void 0===S?"div":S,A=e.lockProps,P=void 0===A?{}:A,I=e.sideCar,T=e.returnFocus,L=e.onActivation,D=e.onDeactivation,R=Object(a.useState)({})[0],M=Object(a.useCallback)((function(){p.current=p.current||document&&document.activeElement,d.current&&L&&L(d.current),f.current=!0}),[L]),F=Object(a.useCallback)((function(){f.current=!1,D&&D(d.current)}),[D]),B=Object(a.useCallback)((function(e){var t=p.current
if(Boolean(T)&&t&&t.focus){var n="object"==typeof T?T:void 0
p.current=null,e?Promise.resolve().then((function(){return t.focus(n)})):t.focus(n)}}),[T]),q=Object(a.useCallback)((function(e){f.current&&b.useMedium(e)}),[]),G=m.useMedium,H=Object(a.useCallback)((function(e){d.current!==e&&(d.current=e,l(e))}),[])
var W=Object(o.a)(((n={})["data-focus-lock-disabled"]=v&&"disabled",n["data-focus-lock"]=k,n),P),z=!0!==y,V=z&&"tail"!==y,U=u([t,H])
return i.a.createElement(i.a.Fragment,null,z&&[i.a.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:v?-1:0,style:s}),i.a.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:v?-1:1,style:s})],!v&&i.a.createElement(I,{id:R,sideCar:g,observed:c,disabled:v,persistentFocus:O,autoFocus:_,whiteList:j,shards:E,onActivation:M,onDeactivation:F,returnFocus:B}),i.a.createElement(N,Object(o.a)({ref:U},W,{className:x,onBlur:G,onFocus:q}),h),V&&i.a.createElement("div",{"data-focus-guard":!0,tabIndex:v?-1:0,style:s}))}))
O.propTypes={},O.defaultProps={children:void 0,disabled:!1,returnFocus:!1,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0}
var _=O,k=n("dI71"),x=n("rePB")
var j=function(e,t){return function(n){var r,o=[]
function c(){r=e(o.map((function(e){return e.props}))),t(r)}var u=function(e){function t(){return e.apply(this,arguments)||this}Object(k.a)(t,e),t.peek=function(){return r}
var a=t.prototype
return a.componentDidMount=function(){o.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=o.indexOf(this)
o.splice(e,1),c()},a.render=function(){return i.a.createElement(n,this.props)},t}(a.PureComponent)
return Object(x.a)(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),u}},C=function(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=e[n]
return t},E=function(e){return Array.isArray(e)?e:[e]},S=function(){return document&&C(document.querySelectorAll("[data-no-focus-lock]")).some((function(e){return e.contains(document.activeElement)}))},N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=function(e){return E(e).filter(Boolean).reduce((function(e,t){var n=t.getAttribute("data-focus-lock")
return e.push.apply(e,n?function e(t){for(var n=t.length,r=0;r<n;r+=1)for(var o=function(n){if(r!==n&&t[r].contains(t[n]))return{v:e(t.filter((function(e){return e!==t[n]})))}},a=0;a<n;a+=1){var i=o(a)
if("object"===(void 0===i?"undefined":N(i)))return i.v}return t}(C(function e(t){return t.parentNode?e(t.parentNode):t}(t).querySelectorAll('[data-focus-lock="'+n+'"]:not([data-focus-lock-disabled="disabled"])'))):[t]),e}),[])},P=function(e){return e===document.activeElement},I=function(e){var t=document&&document.activeElement
return!(!t||t.dataset&&t.dataset.focusGuard)&&A(e).reduce((function(e,n){return e||n.contains(t)||function(e){return t=C(e.querySelectorAll("iframe")),n=P,!!t.filter((function(e){return e===n}))[0]
var t,n}(n)}),!1)},T=function(e,t){var n=e.tabIndex-t.tabIndex,r=e.index-t.index
if(n){if(!e.tabIndex)return 1
if(!t.tabIndex)return-1}return n||r},L=function(e,t,n){return C(e).map((function(e,t){return{node:e,index:t,tabIndex:n&&-1===e.tabIndex?(e.dataset||{}).focusGuard?0:-1:e.tabIndex}})).filter((function(e){return!t||e.tabIndex>=0})).sort(T)},D=["button:enabled:not([readonly])","select:enabled:not([readonly])","textarea:enabled:not([readonly])","input:enabled:not([readonly])","a[href]","area[href]","iframe","object","embed","[tabindex]","[contenteditable]","[autofocus]"],R=D.join(","),M=R+", [data-focus-guard]",F=function(e,t){return e.reduce((function(e,n){return e.concat(C(n.querySelectorAll(t?M:R)),n.parentNode?C(n.parentNode.querySelectorAll(D.join(","))).filter((function(e){return e===n})):[])}),[])},B=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return n.push(t),t.parentNode&&e(t.parentNode,n),n},q=function(e,t){for(var n=B(e),r=B(t),o=0;o<n.length;o+=1){var a=n[o]
if(r.indexOf(a)>=0)return a}return!1},G=function(e){return C(e).filter((function(e){return function e(t){return!t||t===document||t.nodeType===Node.DOCUMENT_NODE||!((n=window.getComputedStyle(t,null))&&n.getPropertyValue&&("none"===n.getPropertyValue("display")||"hidden"===n.getPropertyValue("visibility")))&&e(t.parentNode)
var n}(e)})).filter((function(e){return function(e){return!(("INPUT"===e.tagName||"BUTTON"===e.tagName)&&("hidden"===e.type||e.disabled))}(e)}))},H=function(e,t){return L(G(F(e,t)),!0,t)},W=function(e){return G((t=e.querySelectorAll("["+c+"]"),C(t).map((function(e){return F([e])})).reduce((function(e,t){return e.concat(t)}),[])))
var t},z=function(e){return"INPUT"===e.tagName&&"radio"===e.type},V=function(e,t){return t.filter(z).filter((function(t){return t.name===e.name})).filter((function(e){return e.checked}))[0]||e},U=function(e,t){return e.length>1&&z(e[t])&&e[t].name?e.indexOf(V(e[t],e)):t},$=function(e){return e[0]&&e.length>1&&z(e[0])&&e[0].name?V(e[0],e):e[0]},K=function(e){return e.dataset&&e.dataset.focusGuard},Y=function(e){return!K(e)},Q=function(e,t,n){var r=E(e),o=E(t),a=r[0],i=null
return o.filter(Boolean).forEach((function(e){i=q(i||e,e)||i,n.filter(Boolean).forEach((function(e){var t=q(a,e)
t&&(i=!i||t.contains(i)?t:q(t,i))}))})),i},X=function(e,t){var n=document&&document.activeElement,r=A(e).filter(Y),o=Q(n||e,e,r),a=H(r).filter((function(e){var t=e.node
return Y(t)}))
if(a[0]||(a=(i=r,L(G(F(i)),!1)).filter((function(e){var t=e.node
return Y(t)})))[0]){var i,c,u,s,l,d=H([o]).map((function(e){return e.node})),f=(c=d,u=a,s=new Map,u.forEach((function(e){return s.set(e.node,e)})),c.map((function(e){return s.get(e)})).filter(Boolean)),p=f.map((function(e){return e.node})),h=function(e,t,n,r,o){var a=e.length,i=e[0],c=e[a-1],u=K(n)
if(!(e.indexOf(n)>=0)){var s=t.indexOf(n),l=t.indexOf(r||s),d=e.indexOf(r),f=s-l,p=t.indexOf(i),h=t.indexOf(c),v=U(e,0),b=U(e,a-1)
return-1===s||-1===d?e.indexOf(o.length?$(o):$(e)):!f&&d>=0?d:s<=p&&u&&Math.abs(f)>1?b:s>=p&&u&&Math.abs(f)>1?v:f&&Math.abs(f)>1?d:s<=p?b:s>h?v:f?Math.abs(f)>1?d:(a+d+f)%a:void 0}}(p,d,n,t,p.filter((l=function(e){return e.reduce((function(e,t){return e.concat(W(t))}),[])}(r),function(e){return!!e.autofocus||e.dataset&&!!e.dataset.autofocus||l.indexOf(e)>=0})))
return void 0===h?h:f[h]}},J=0,Z=!1,ee=function(e,t){var n,r=X(e,t)
if(!Z&&r){if(J>2)return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),Z=!0,void setTimeout((function(){Z=!1}),1)
J++,(n=r.node).focus(),n.contentWindow&&n.contentWindow.focus(),J--}}
function te(e){var t=window.setImmediate
void 0!==t?t(e):setTimeout(e,1)}var ne=function(e,t){var n={}
return n[e]=t,n},re=function(){return document&&document.activeElement===document.body||S()},oe=null,ae=null,ie=null,ce=!1,ue=function(){return!0}
function se(e,t,n,r){var o=null,a=e
do{var i=r[a]
if(i.guard)i.node.dataset.focusAutoGuard&&(o=i)
else{if(!i.lockItem)break
if(a!==e)return
o=null}}while((a+=n)!==t)
o&&(o.node.tabIndex=0)}var le=function(e){return e&&"current"in e?e.current:e},de=function(){var e,t,n,r,o,a,i=!1
if(oe){var c=oe,u=c.observed,s=c.persistentFocus,l=c.autoFocus,d=c.shards,f=u||ie&&ie.portaledElement,p=document&&document.activeElement
if(f){var h=[f].concat(d.map(le).filter(Boolean))
if(p&&!function(e){return(oe.whiteList||ue)(e)}(p)||(s||ce||!re()||!ae&&l)&&(!f||I(h)||(a=p,ie&&ie.portaledElement===a)||(document&&!ae&&p&&!l?(p.blur(),document.body.focus()):(i=ee(h,ae),ie={})),ce=!1,ae=document&&document.activeElement),document){var v=document&&document.activeElement,b=(t=A(e=h).filter(Y),n=Q(e,e,t),r=H([n],!0),o=H(t).filter((function(e){var t=e.node
return Y(t)})).map((function(e){return e.node})),r.map((function(e){var t=e.node
return{node:t,index:e.index,lockItem:o.indexOf(t)>=0,guard:K(t)}}))),m=b.find((function(e){return e.node===v}))
if(m){b.filter((function(e){var t=e.guard,n=e.node
return t&&n.dataset.focusAutoGuard})).forEach((function(e){return e.node.removeAttribute("tabIndex")}))
var y=b.indexOf(m)
se(y,b.length,1,b),se(y,-1,-1,b)}}}}return i},fe=function(e){de()&&e&&(e.stopPropagation(),e.preventDefault())},pe=function(){return te(de)},he=function(e){var t=e.target,n=e.currentTarget
n.contains(t)||(ie={observerNode:n,portaledElement:t})},ve=function(){ce=!0}
b.assignSyncMedium(he),m.assignMedium(pe),y.assignMedium((function(e){return e({moveFocusInside:ee,focusInside:I})}))
var be=j((function(e){return e.filter((function(e){return!e.disabled}))}),(function(e){var t=e.slice(-1)[0]
t&&!oe&&(document.addEventListener("focusin",fe,!0),document.addEventListener("focusout",pe),window.addEventListener("blur",ve))
var n=oe,r=n&&t&&t.id===n.id
oe=t,n&&!r&&(n.onDeactivation(),e.filter((function(e){return e.id===n.id})).length||n.returnFocus(!t)),t?(ae=null,r&&n.observed===t.observed||t.onActivation(),de(),te(de)):(document.removeEventListener("focusin",fe,!0),document.removeEventListener("focusout",pe),window.removeEventListener("blur",ve),ae=null)}))((function(){return null})),me=i.a.forwardRef((function(e,t){return i.a.createElement(_,Object(o.a)({sideCar:be,ref:t},e))})),ye=_.propTypes||{},ge=(ye.sideCar,Object(r.a)(ye,["sideCar"]))
me.propTypes=ge
var we=me,Oe=function(e){var t=e.disabled,n=e.children,r=e.className
return i.a.createElement("div",Object(o.a)({},ne(c,!t),{className:r}),n)}
Oe.propTypes={},Oe.defaultProps={disabled:!1,className:void 0}
var _e=Oe
function ke(e){var t=e.disabled,n=e.className,r=e.children,a=i.a.useRef(null),u=i.a.useRef(t)
return i.a.useEffect((function(){var e
u.current=t,e=a.current,y.useMedium((function(t){!u.current&&e&&(t.focusInside(e)||t.moveFocusInside(e,null))}))}),[t]),i.a.createElement("div",Object(o.a)({},ne(c,!t),{ref:a,className:n}),r)}ke.propTypes={},ke.defaultProps={disabled:!1,className:void 0}
var xe=ke,je=function(e){var t=e.children,n=e.className
return i.a.createElement("div",Object(o.a)({},ne("data-no-focus-lock",!0),{className:n}),t)}
je.propTypes={},je.defaultProps={className:void 0}
var Ce=je
t.default=we},MSoC:function(e,t,n){e.exports=n.p+"cafb6a6790be5cd5a6c8e14a0c8eb229.svg"},MiSq:function(e,t,n){"use strict"
n.d(t,"a",(function(){return v}))
var r=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16)
switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16
case 2:n^=(255&e.charCodeAt(r+1))<<8
case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=n("4qRI"),i=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!=typeof e},l=Object(a.a)((function(e){return u(e)?e:e.replace(i,"-$&").toLowerCase()})),d=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(c,(function(e,t,n){return p={name:t,styles:n,next:p},t}))}return 1===o[e]||u(e)||"number"!=typeof t||0===t?t:t+"px"}
function f(e,t,n,r){if(null==n)return""
if(void 0!==n.__emotion_styles)return n
switch(typeof n){case"boolean":return""
case"object":if(1===n.anim)return p={name:n.name,styles:n.styles,next:p},n.name
if(void 0!==n.styles){var o=n.next
if(void 0!==o)for(;void 0!==o;)p={name:o.name,styles:o.styles,next:p},o=o.next
return n.styles+";"}return function(e,t,n){var r=""
if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=f(e,t,n[o],!1)
else for(var a in n){var i=n[a]
if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":s(i)&&(r+=l(a)+":"+d(a,i)+";")
else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=f(e,t,i,!1)
switch(a){case"animation":case"animationName":r+=l(a)+":"+c+";"
break
default:r+=a+"{"+c+"}"}}else for(var u=0;u<i.length;u++)s(i[u])&&(r+=l(a)+":"+d(a,i[u])+";")}return r}(e,t,n)
case"function":if(void 0!==e){var a=p,i=n(e)
return p=a,f(e,t,i,r)}break
case"string":}if(null==t)return n
var c=t[n]
return void 0===c||r?n:c}var p,h=/label:\s*([^\s;\n{]+)\s*;/g
var v=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0]
var o=!0,a=""
p=void 0
var i=e[0]
null==i||void 0===i.raw?(o=!1,a+=f(n,t,i,!1)):a+=i[0]
for(var c=1;c<e.length;c++)a+=f(n,t,e[c],46===a.charCodeAt(a.length-1)),o&&(a+=i[c])
h.lastIndex=0
for(var u,s="";null!==(u=h.exec(a));)s+="-"+u[1]
return{name:r(a)+s,styles:a,next:p}}},P6H9:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=c(n("YqUS")),o=n("umwU"),a=c(n("gsf9")),i=c(n("Py8U"))
function c(e){return e&&e.__esModule?e:{default:e}}t.default={to:r.default,calcEndPoint:o.calcEndPoint,anchorScroll:a.default,observe:i.default},e.exports=t.default},Py8U:function(e,t,n){"use strict"
function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.activeClass,n=void 0===t?"active":t,o=e.query,a=void 0===o?'[href^="#"]:not([href="#"]':o,i=e.threshold,c=void 0===i?[.25,.5,.75]:i,u=e.detectType,s=void 0===u?"max":u,l={threshold:c},d=function(e){return e.classList.remove(n)},f=function(e){return e.classList.add(n)},p=function(){document.querySelectorAll("."+n).forEach(d)},h=function(e){p(),f(document.querySelector('a[href="#'+e.id+'"]'))},v=function(e){e.forEach((function(e){e.intersectionRatio>=Math[s].apply(Math,r(c))&&h(e.target)}))},b=document.querySelectorAll(a),m=new IntersectionObserver(v,l),y=function(e){var t=document.querySelector("#"+e.hash.slice(1))
m.observe(t)}
b.forEach(y)},e.exports=t.default},RDWv:function(e,t,n){"use strict"
function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0}),n("sopX")
var o=n("q1tI"),a=r(o),i=r(n("TSYQ")),c=r(n("P6H9")),u=r(n("7YPn")),s=r(n("9/5/")),l=r(n("/4op")),d=r(n("DUc8")),f=n("qKvR"),p=n("i8i4"),h=r(n("5D9J")),v=r(n("17x9"))
function b(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function m(e){return function(){var t=this,n=arguments
return new Promise((function(r,o){var a=e.apply(t,n)
function i(e){b(a,r,o,i,c,"next",e)}function c(e){b(a,r,o,i,c,"throw",e)}i(void 0)}))}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?g(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t){if(null==e)return{}
var n,r,o=function(e,t){if(null==e)return{}
var n,r,o={},a=Object.keys(e)
for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return
var n=[],r=!0,o=!1,a=void 0
try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(){var e=_(["\n      .focus-outline-hidden :focus {\n        outline: none;\n      }\n    "])
return x=function(){return e},e}var j=function(){return a.createElement(f.Global,{styles:f.css(x())})}
function C(e){var t=e.children,n=o.useRef(null)
return null===n.current&&(n.current=document.createElement("div"),n.current.setAttribute("id","___reactour")),o.useEffect((function(){return document.body.appendChild(n.current),function(){document.body.removeChild(n.current)}}),[n]),p.createPortal(t,n.current)}function E(){var e=_(["\n  display: block;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 0;\n  cursor: ",";\n"])
return E=function(){return e},e}var S=h.button(E(),(function(e){return e.disabled?"not-allowed":"pointer"}))
function N(){var e=_(["\n  color: ",";\n\n  ",";\n  ",";\n\n  &:hover {\n    color: ",";\n  }\n"])
return N=function(){return e},e}function A(){var e=_(["\n  font-size: 12px;\n  line-height: 1;\n"])
return A=function(){return e},e}var P=h.span(A())
function I(e){var t=e.className,n=e.onClick,r=e.inverted,o=e.label,i=e.disabled
return a.createElement(S,{className:t,onClick:n,"data-tour-elem":"".concat(r?"right":"left","-arrow"),disabled:i},o?a.createElement(P,null,o):a.createElement("svg",{viewBox:"0 0 18.4 14.4"},a.createElement("path",{d:r?"M10.8 1L17 7.2l-6.2 6.2":"M7.6 1L1.4 7.2l6.2 6.2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10"})))}I.propTypes={className:v.string.isRequired,onClick:v.func.isRequired,inverted:v.bool,label:v.node,disabled:v.bool}
var T=h(I)(N(),(function(e){return e.disabled?"#646464":"#caccce"}),(function(e){return e.inverted?"margin-left: 24px;":"margin-right: 24px;"}),(function(e){return!e.label&&"\n    width: 16px;\n    height: 12px;\n    flex: 0 0 16px;\n  "}),(function(e){return e.disabled?"#000":"#fff"}))
function L(){var e=_(["\n  position: absolute;\n  top: 22px;\n  right: 22px;\n  width: 9px;\n  height: 9px;\n  color: #5e5e5e;\n  &:hover {\n    color: #000;\n  }\n"])
return L=function(){return e},e}function D(e){var t=e.className,n=e.onClick,r=e.ariaLabel
return a.createElement(S,{className:t,onClick:n,"aria-label":r},a.createElement("svg",{viewBox:"0 0 9.1 9.1","aria-hidden":!0,role:"presentation"},a.createElement("path",{fill:"currentColor",d:"M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"})))}D.propTypes={className:v.string.isRequired,onClick:v.func.isRequired,ariaLabel:v.string}
var R=h(D)(L())
function M(e){var t=(null==e?void 0:e.getBoundingClientRect())||{},n=t.top,r=void 0===n?0:n,o=t.right,a=void 0===o?0:o,i=t.bottom,c=void 0===i?0:i,u=t.left,s=void 0===u?0:u,l=t.width,d=void 0===l?0:l,f=t.height
return{top:r,right:a,bottom:c,left:s,width:d,height:void 0===f?0:f}}function F(e){var t=e.top,n=e.right,r=e.bottom,o=e.left,a=e.w,i=e.h,c=e.threshold,u=void 0===c?0:c
return t>=0+u&&o>=0+u&&r<=i-u&&n<=a-u}function B(e){return e===document.querySelector("body")||e===document.querySelector("html")}var q=function(e,t){return e>t},G=function(e,t){return e>t},H=function(e){return e<0?0:e}
function W(){return{w:Math.max(document.documentElement.clientWidth,window.innerWidth||0),h:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}function z(){var e=_(["\n  --reactour-accent: ",";\n  ","\n  background-color: #2D3B45;\n  color: white;\n  position: fixed;\n  transition: transform 0.3s;\n  top: 0;\n  left: 0;\n  z-index: 1000000;\n\n  transform: ",";\n"])
return z=function(){return e},e}var V=h.div(z(),(function(e){return e.accentColor}),(function(e){return e.defaultStyles?"\n  max-width: 331px;\n  min-width: 150px;\n  padding-right: 40px;\n  border-radius: ".concat(e.rounded,"px;\n  background-color: #2D3B45;\n  padding: 24px 30px;\n  box-shadow: 0 0.5em 3em rgba(0, 0, 0, 0.3);\n  color: inherit;\n  "):""}),(function(e){var t=e.targetTop,n=e.targetRight,r=e.targetBottom,o=e.targetLeft,a=e.windowWidth,i=e.windowHeight,c=e.helperWidth,u=e.helperHeight,s=e.helperPosition,l=e.padding,d={left:o,right:a-n,top:t,bottom:i-r},f=function(e){return d[e]>(function(e){return/(left|right)/.test(e)}(e)?c+2*l:u+2*l)},p=function(e){for(var t,n=(t=d,Object.keys(t).map((function(e){return{position:e,value:t[e]}})).sort((function(e,t){return t.value-e.value})).map((function(e){return e.position}))),r=0;r<n.length;r++)if(f(n[r]))return e[n[r]]
return e.center},h=function(e){if(Array.isArray(e)){var s=q(e[0],a),d=G(e[1],i),h=function(e,t){console.warn("".concat(e,":").concat(t," is outside window, falling back to center"))}
return s&&h("x",e[0]),d&&h("y",e[1]),[s?a/2-c/2:e[0],d?i/2-u/2:e[1]]}var v=q(o+c,a)?q(n+l,a)?n-c:n-c+l:o-l,b=v>l?v:l,m=G(t+u,i)?G(r+l,i)?r-u:r-u+l:t-l,y=m>l?m:l,g={top:[b,t-u-2*l],right:[n+2*l,y],bottom:[b,r+2*l],left:[o-c-2*l,y],center:[a/2-c/2,i/2-u/2]}
return"center"===e||f(e)?g[e]:p(g)}(s)
return"translate(".concat(Math.round(h[0]),"px, ").concat(Math.round(h[1]),"px)")}))
function U(){var e=_(["\n  position: absolute;\n  font-family: monospace;\n  background: #008ee2;\n  background: ",";\n  height: 1.875em;\n  line-height: 2;\n  padding-left: 0.8125em;\n  padding-right: 0.8125em;\n  font-size: 1em;\n  border-radius: 1.625em;\n  color: white;\n  text-align: center;\n  box-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.3);\n  top: -0.8125em;\n  left: -0.8125em;\n"])
return U=function(){return e},e}var $=h.span(U(),(function(e){return e.accentColor}))
function K(){var e=_(["\n  display: flex;\n  margin-top: 24px;\n  align-items: center;\n  justify-content: center;\n"])
return K=function(){return e},e}var Y=h.div(K())
function Q(){var e=_(["\n  counter-reset: dot;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"])
return Q=function(){return e},e}var X=h.nav(Q())
function J(){var e=_(["\n  counter-increment: dot;\n  width: 18px;\n  height: 18px;\n  border: ",";\n\n  border-radius: 100%;\n  padding: 0;\n  display: block;\n  margin: 12px;\n  transition: opacity 0.3s, transform 0.3s;\n  cursor: ",";\n\n  color: ",";\n  background: ",";\n\n  color: ",";\n  background: ",";\n\n  &:before {\n    content: counter(dot);\n    position: absolute;\n    bottom: calc(100% + 0.25em);\n    left: 50%;\n    opacity: 0;\n    transform: translate(-50%, 1em);\n    transition: 0.3s;\n    display: ",";\n  }\n\n  &:hover {\n    background-color: currentColor;\n\n    &:before {\n      opacity: 0.5;\n      transform: translate(-50%, -2px);\n    }\n  }\n"])
return J=function(){return e},e}var Z=h.button(J(),(function(e){return e.current===e.index?"0":"1px solid #caccce"}),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.current===e.index?"var(--reactour-accent)":"#caccce"}),(function(e){return e.current===e.index?"var(--reactour-accent)":"none"}),(function(e){return e.current===e.index?e.accentColor:"#caccce"}),(function(e){return e.current===e.index?e.accentColor:"none"}),(function(e){return e.showNumber?"block":"none"}))
function ee(){var e=_(["\n  opacity: 0.7;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  position: fixed;\n  z-index: 99999;\n  pointer-events: none;\n  color: #000;\n"])
return ee=function(){return e},e}var te=h.div(ee())
function ne(e){var t=e.windowWidth,n=e.windowHeight,r=e.targetWidth,o=e.targetHeight,i=e.targetTop,c=e.targetLeft,u=e.padding,s=e.rounded,l=e.disableInteraction,d=e.disableInteractionClassName,f=e.className,p=e.onClick,h=H(r+2*u),v=H(o+2*u),b=H(i-u),m=H(c-u)
return a.createElement(te,{onClick:p},a.createElement("svg",{width:t,height:n,xmlns:"http://www.w3.org/2000/svg",className:f},a.createElement("defs",null,a.createElement("mask",{id:"mask-main"},a.createElement("rect",{x:0,y:0,width:t,height:n,fill:"white"}),a.createElement("rect",{x:m,y:b,width:h,height:v,fill:"black"}),a.createElement("rect",{x:m-1,y:b-1,width:s,height:s,fill:"white"}),a.createElement("circle",{cx:m+s,cy:b+s,r:s,fill:"black"}),a.createElement("rect",{x:m+h-s+1,y:b-1,width:s,height:s,fill:"white"}),a.createElement("circle",{cx:m+h-s,cy:b+s,r:s,fill:"black"}),a.createElement("rect",{x:m-1,y:b+v-s+1,width:s,height:s,fill:"white"}),a.createElement("circle",{cx:m+s,cy:b+v-s,r:s,fill:"black"}),a.createElement("rect",{x:m+h-s+1,y:b+v-s+1,width:s,height:s,fill:"white"}),a.createElement("circle",{cx:m+h-s,cy:b+v-s,r:s,fill:"black "})),a.createElement("clipPath",{id:"clip-path"},a.createElement("rect",{x:0,y:0,width:t,height:b}),a.createElement("rect",{x:0,y:b,width:m,height:v}),a.createElement("rect",{x:c+r+u,y:b,width:H(t-r-m),height:v}),a.createElement("rect",{x:0,y:i+o+u,width:t,height:H(n-o-b)}))),a.createElement("rect",{x:0,y:0,width:t,height:n,fill:"currentColor",mask:"url(#mask-main)"}),a.createElement("rect",{x:0,y:0,width:t,height:n,fill:"currentColor",clipPath:"url(#clip-path)",pointerEvents:"auto"}),a.createElement("rect",{x:m,y:b,width:h,height:v,pointerEvents:"auto",fill:"transparent",display:l?"block":"none",className:d})))}ne.propTypes={windowWidth:v.number.isRequired,windowHeight:v.number.isRequired,targetWidth:v.number.isRequired,targetHeight:v.number.isRequired,targetTop:v.number.isRequired,targetLeft:v.number.isRequired,padding:v.number.isRequired,rounded:v.number.isRequired,disableInteraction:v.bool.isRequired,disableInteractionClassName:v.string.isRequired}
var re={accessibilityOptions:v.shape({ariaLabelledBy:v.string,closeButtonAriaLabel:v.string,showNavigationScreenReaders:v.bool}),badgeContent:v.func,highlightedMaskClassName:v.string,children:v.oneOfType([v.node,v.element]),className:v.string,closeWithMask:v.bool,inViewThreshold:v.number,isOpen:v.bool.isRequired,lastStepNextButton:v.node,maskClassName:v.string,maskSpace:v.number,nextButton:v.node,onAfterOpen:v.func,onBeforeClose:v.func,onRequestClose:v.func,prevButton:v.node,scrollDuration:v.number,scrollOffset:v.number,showButtons:v.bool,showCloseButton:v.bool,showNavigation:v.bool,showNavigationNumber:v.bool,showNumber:v.bool,startAt:v.number,goToStep:v.number,getCurrentStep:v.func,nextStep:v.func,prevStep:v.func,steps:v.arrayOf(v.shape({selector:v.string,content:v.oneOfType([v.node,v.element,v.func]).isRequired,position:v.oneOfType([v.arrayOf(v.number),v.oneOf(["top","right","bottom","left","center"])]),action:v.func,actionBefore:v.func,style:v.object,stepInteraction:v.bool,navDotAriaLabel:v.string})),update:v.string,updateDelay:v.number,disableInteraction:v.bool,disableDotsNavigation:v.bool,disableKeyboardNavigation:v.oneOfType([v.arrayOf(v.oneOf(["esc","right","left"])),v.bool]),rounded:v.number,accentColor:v.string},oe={accessibilityOptions:{closeButtonAriaLabel:"Close",showNavigationScreenReaders:!0},showNavigation:!0,showNavigationNumber:!0,showButtons:!0,showCloseButton:!0,showNumber:!0,startAt:0,scrollDuration:1,maskSpace:10,updateDelay:1,disableInteraction:!1,rounded:0,accentColor:"#fff",closeWithMask:!0},ae={base:"reactour__mask",isOpen:"reactour__mask--is-open",disableInteraction:"reactour__mask--disable-interaction"},ie={base:"reactour__helper",isOpen:"reactour__helper--is-open"},ce={base:"reactour__dot",active:"reactour__dot--is-active"},ue=function(e){var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag"
function c(e,t,n,r){var o=t&&t.prototype instanceof l?t:l,a=Object.create(o.prototype),i=new _(r||[])
return a._invoke=function(e,t,n){var r="suspendedStart"
return function(o,a){if("executing"===r)throw new Error("Generator is already running")
if("completed"===r){if("throw"===o)throw a
return x()}for(n.method=o,n.arg=a;;){var i=n.delegate
if(i){var c=g(i,n)
if(c){if(c===s)continue
return c}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r="executing"
var l=u(e,t,n)
if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===s)continue
return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),a}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c
var s={}
function l(){}function d(){}function f(){}var p={}
p[o]=function(){return this}
var h=Object.getPrototypeOf,v=h&&h(h(k([])))
v&&v!==t&&n.call(v,o)&&(p=v)
var b=f.prototype=l.prototype=Object.create(p)
function m(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e){var t
this._invoke=function(r,o){function a(){return new Promise((function(t,a){!function t(r,o,a,i){var c=u(e[r],e,o)
if("throw"!==c.type){var s=c.arg,l=s.value
return l&&"object"==typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(e){t("next",e,a,i)}),(function(e){t("throw",e,a,i)})):Promise.resolve(l).then((function(e){s.value=e,a(s)}),(function(e){return t("throw",e,a,i)}))}i(c.arg)}(r,o,t,a)}))}return t=t?t.then(a,a):a()}}function g(e,t){var n=e.iterator[t.method]
if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg)
if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s
var o=r.arg
return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var t=e[o]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t
return t.value=void 0,t.done=!0,t}
return a.next=a}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=b.constructor=f,f.constructor=d,f[i]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},m(y.prototype),y.prototype[a]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,o){var a=new y(c(t,n,r,o))
return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},m(b),b[i]="Generator",b[o]=function(){return this},b.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function n(){for(;t.length;){var r=t.pop()
if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion
if("root"===a.tryLoc)return r("end")
if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc")
if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)
if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally")
if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r]
if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o
break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null)
var i=a?a.completion:{}
return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var o=r.arg
O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports)
try{regeneratorRuntime=ue}catch(e){Function("r","regeneratorRuntime = r")(ue)}var se=function(){},le=function(e){var t=e.children,n=e.isOpen,r=e.startAt,f=e.steps,p=e.scrollDuration,h=e.inViewThreshold,v=e.scrollOffset,b=e.disableInteraction,g=e.disableKeyboardNavigation,O=e.className,_=e.closeWithMask,x=e.onRequestClose,E=void 0===x?se:x,S=e.onAfterOpen,N=e.onBeforeClose,A=e.CustomHelper,P=e.showNumber,I=e.accentColor,L=e.highlightedMaskClassName,D=e.maskClassName,q=e.showButtons,G=e.showNavigation,H=e.prevButton,z=e.showNavigationNumber,U=e.disableDotsNavigation,K=e.lastStepNextButton,Q=e.nextButton,J=e.rounded,ee=e.maskSpace,te=e.showCloseButton,re=e.accessibilityOptions,ue=e.badgeContent,le=k(o.useState(0),2),pe=le[0],he=le[1],ve=k(o.useState(!1),2),be=ve[0],me=ve[1],ye=k(o.useReducer(fe,de),2),ge=ye[0],we=ye[1],Oe=o.useRef(null),_e=o.useRef(null),ke=w({},oe.accessibilityOptions,{},re)
function xe(e){var t,n,r;(e.stopPropagation(),!0!==g)&&(g&&(t=g.includes("esc"),n=g.includes("right"),r=g.includes("left")),27!==e.keyCode||t||(e.preventDefault(),je()),39!==e.keyCode||n||(e.preventDefault(),Ce()),37!==e.keyCode||r||(e.preventDefault(),Ee()))}function je(e){N&&"function"==typeof N&&N(Oe.current),E(e)}function Ce(){he((function(e){return e<f.length-1?e+1:e}))}function Ee(){he((function(e){return e>0?e-1:e}))}function Se(e){he(e)}function Ne(e){return Ae.apply(this,arguments)}function Ae(){return(Ae=m(regeneratorRuntime.mark((function e(t){var n,r,o,a,i,s,l,d
return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f[t]||f[pe],r=W(),o=r.w,a=r.h,!n.actionBefore||"function"!=typeof n.actionBefore){e.next=5
break}return e.next=5,n.actionBefore()
case 5:if(i=n.selector?document.querySelector(n.selector):null,n.observe&&(_e.current=document.querySelector(n.observe)),i?F(w({},s=M(i),{w:o,h:a,threshold:h}))?Pe(s,n.position):(l=u(i),d=v||(s.height>a?-25:-a/2+s.height/2),c.to(i,{context:B(l)?window:l,duration:p,offset:d,callback:function(e){Pe(M(e),n.position)}})):we({type:"NO_DOM_NODE",helperPosition:n.position,w:o,h:a,inDOM:!1}),!n.action||"function"!=typeof n.action){e.next=11
break}return e.next=11,n.action(i)
case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Pe(e,t){var n=W(),r=n.w,o=n.h,a=M(Oe.current),i=a.width,c=a.height
we(w({type:"HAS_DOM_NODE"},e,{helperWidth:i,helperHeight:c,helperPosition:t,w:r,h:o,inDOM:!0}))}l(_e,(function(e,t){n?(Ne(),e.forEach((function(e){"childList"===e.type&&e.addedNodes.length>0?setTimeout((function(){return Pe(M(e.addedNodes[0]))}),500):"childList"===e.type&&e.removedNodes.length}))):t.disconnect()})),o.useEffect((function(){var e=s(Ne,100)
return window.addEventListener("keydown",xe,!1),window.addEventListener("resize",e,!1),n&&(be?Ne():(me(!0),Pe({width:-1*ee,height:-1*ee,top:-1*J,left:-1*J},"center"),he(r),Ne(r)),Oe.current&&(Oe.current.focus(),S&&"function"==typeof S&&S(Oe.current))),function(){window.removeEventListener("keydown",xe),window.removeEventListener("resize",e)}}),[pe,n])
var Ie=f[pe]&&("function"==typeof f[pe].content?f[pe].content({close:je,goTo:Se,inDOM:ge.inDOM,step:pe+1}):f[pe].content)
return n?a.createElement(C,null,a.createElement(j,null),a.createElement(ne,{onClick:function(e){_&&-1===e.target.className.baseVal.split(" ").indexOf(ae.disableInteraction)&&je(e)},windowWidth:ge.w,windowHeight:ge.h,targetWidth:ge.width,targetHeight:ge.height,targetTop:ge.top,targetLeft:ge.left,padding:ee,rounded:J,className:D,disableInteraction:!1===f[pe].stepInteraction||b?!f[pe].stepInteraction:b,disableInteractionClassName:i(ae.disableInteraction,L)}),a.createElement(d,null,a.createElement(V,{ref:Oe,windowWidth:ge.w,windowHeight:ge.h,targetWidth:ge.width,targetHeight:ge.height,targetTop:ge.top,targetLeft:ge.left,targetRight:ge.right,targetBottom:ge.bottom,helperWidth:ge.helperWidth,helperHeight:ge.helperHeight,helperPosition:ge.helperPosition,padding:ee,tabIndex:-1,current:pe,style:f[pe].style?f[pe].style:{},rounded:J,accentColor:I,defaultStyles:!A,className:i(ie.base,O,y({},ie.isOpen,n)),role:"dialog","aria-labelledby":ke.ariaLabelledBy},A?a.createElement(A,{current:pe,totalSteps:f.length,gotoStep:Se,close:je,content:Ie},t):a.createElement(a.Fragment,null,t,Ie,P&&a.createElement($,{"data-tour-elem":"badge"},"function"==typeof ue?ue(pe+1,f.length):pe+1),(q||G)&&a.createElement(Y,{"data-tour-elem":"controls"},q&&a.createElement(T,{onClick:Ee,disabled:0===pe,label:H||null}),G&&a.createElement(X,{"data-tour-elem":"navigation","aria-hidden":!ke.showNavigationScreenReaders},f.map((function(e,t){return a.createElement(Z,{key:"".concat(e.selector?e.selector:"undef","_").concat(t),onClick:function(){return Se(t)},current:pe,index:t,disabled:pe===t||U,showNumber:z,"data-tour-elem":"dot",className:i(ce.base,y({},ce.active,pe===t)),"aria-label":e.navDotAriaLabel})}))),q&&a.createElement(T,{onClick:pe===f.length-1?K?je:function(){}:Ce,disabled:!K&&pe===f.length-1,inverted:!0,label:K&&pe===f.length-1?K:Q||null})),te&&a.createElement(R,{onClick:je,ariaLabel:ke.closeButtonAriaLabel}))))):null},de={top:0,right:0,bottom:0,left:0,width:0,height:0,w:0,h:0}
function fe(e,t){switch(t.type){case"HAS_DOM_NODE":t.type
return w({},e,{},O(t,["type"]))
case"NO_DOM_NODE":return w({},e,{top:e.h+10,right:e.w/2+9,bottom:e.h/2+9,left:t.w/2-e.helperWidth?e.helperWidth/2:0,width:0,height:0,w:t.w,h:t.h,helperPosition:"center"})
default:return e}}le.propTypes=re,le.defaultProps=oe
var pe=o.memo(le)
t.Arrow=T,t.Badge=$,t.Close=R,t.Controls=Y,t.Dot=Z,t.Navigation=X,t.default=pe},SIPS:function(e,t,n){"use strict"
n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))
function r(e,t,n){var r=""
return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]):r+=n+" "})),r}var o=function(e,t,n){var r=e.key+"-"+t.name
if(!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles),void 0===e.inserted[t.name]){var o=t
do{e.insert("."+r,o,e.sheet,!0)
o=o.next}while(void 0!==o)}}},VbXa:function(e,t){e.exports=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},YqUS:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n("umwU")
t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,a=void 0===n?500:n,i=t.context,c=void 0===i?window:i,u=t.offset,s=void 0===u?0:u,l=t.ease,d=void 0===l?"easeInOutCubic":l,f=t.callback
if("object"===("undefined"==typeof window?"undefined":r(window))){var p=c.scrollTop||window.pageYOffset,h=(0,o.calcEndPoint)(e,c,s),v=performance.now(),b=window.requestAnimationFrame,m=function t(){var n=performance.now()-v,r=(0,o.setPosition)(p,h,n,a,d)
c!==window?c.scrollTop=r:window.scroll(0,r),n>a?"function"==typeof f&&f(e):b(t)}
m()}},e.exports=t.default},dI71:function(e,t,n){"use strict"
function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},gsf9:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("YqUS"),i=(r=a)&&r.__esModule?r:{default:r}
t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,n=void 0===t?'[href^="#"]:not([href="#"]':t,r=e.match,a=void 0===r?function(e){return document.getElementById(e.hash.substring(1))}:r,c=e.hashChange,u=void 0===c||c,s=e.scrollSmoothConfig,l=document.querySelectorAll(n),d=function(e){e.preventDefault()
var t=a(e.target)
t&&(u&&history.replaceState(null,null,"#"+t.id),(0,i.default)(t,o({},s)))}
Array.from(l).map((function(e){e.addEventListener("click",d,!1)}))},e.exports=t.default},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},mTPw:function(e,t,n){"use strict"
n.r(t)
var r=n("ODXe"),o=n("An8g"),a=n("q1tI"),i=n.n(a),c=n("RDWv"),u=n.n(c),s=n("pQTu"),l=n("m0r6")
Object(l.a)(JSON.parse('{"ar":{"close_d634289d":"إغلاق","done_54e3d4b6":"تم","next_40e12421":"التالي","previous_bd2ac015":"السابق"},"cy":{"close_d634289d":"Cau","done_54e3d4b6":"Wedi gorffen","next_40e12421":"Nesaf","previous_bd2ac015":"Blaenorol"},"da":{"close_d634289d":"Luk","done_54e3d4b6":"Udført","next_40e12421":"Næste","previous_bd2ac015":"Forrige"},"da-x-k12":{"close_d634289d":"Luk","done_54e3d4b6":"Udført","next_40e12421":"Næste","previous_bd2ac015":"Forrige"},"de":{"close_d634289d":"Schließen","done_54e3d4b6":"Fertig","next_40e12421":"Weiter","previous_bd2ac015":"Vorherige/r/s"},"el":{"close_d634289d":"Κλείσιμο","done_54e3d4b6":"Ολοκληρώθηκε","next_40e12421":"Επόμενη","previous_bd2ac015":"Προηγούμενο"},"en-AU":{"close_d634289d":"Close","done_54e3d4b6":"Done","next_40e12421":"Next","previous_bd2ac015":"Previous"},"en-CA":{"close_d634289d":"Close","done_54e3d4b6":"Done","next_40e12421":"Next","previous_bd2ac015":"Previous"},"en-GB":{"close_d634289d":"Close","done_54e3d4b6":"Done","next_40e12421":"Next","previous_bd2ac015":"Previous"},"es":{"close_d634289d":"Cerrar","done_54e3d4b6":"Listo","next_40e12421":"Siguiente","previous_bd2ac015":"Anterior"},"fa":{"close_d634289d":"بستن","done_54e3d4b6":"انجام شد","next_40e12421":"بعدی","previous_bd2ac015":"قبلی"},"fi":{"close_d634289d":"Sulje","done_54e3d4b6":"Valmis","next_40e12421":"Seuraava","previous_bd2ac015":"Edellinen"},"fr":{"close_d634289d":"Fermer","done_54e3d4b6":"Terminé","next_40e12421":"Suivant","previous_bd2ac015":"Précédent"},"fr-CA":{"close_d634289d":"Fermer","done_54e3d4b6":"Terminé","next_40e12421":"Suivant","previous_bd2ac015":"Précédent"},"he":{"close_d634289d":"סגירה","done_54e3d4b6":"בוצע","next_40e12421":"הבא","previous_bd2ac015":"קודם"},"ht":{"close_d634289d":"Fèmen","done_54e3d4b6":"Fini","next_40e12421":"Pwochen","previous_bd2ac015":"Anvan"},"hu":{"close_d634289d":"Bezárás","done_54e3d4b6":"Kész","next_40e12421":"Következő","previous_bd2ac015":"Előző"},"hy":{"close_d634289d":"Փակել","done_54e3d4b6":"Պատրաստ է","next_40e12421":"Հաջորդը"},"is":{"close_d634289d":"Loka","done_54e3d4b6":"Lokið","next_40e12421":"Næsti","previous_bd2ac015":"Fyrri"},"it":{"close_d634289d":"Chiudi","done_54e3d4b6":"Fatto","next_40e12421":"Successivo","previous_bd2ac015":"Precedente"},"ja":{"close_d634289d":"閉じる","done_54e3d4b6":"完了","next_40e12421":"次","previous_bd2ac015":"前へ"},"ko":{"close_d634289d":"닫기","next_40e12421":"다음"},"mi":{"close_d634289d":"Katia","done_54e3d4b6":"Kua mahia","next_40e12421":"E haere ake nei","previous_bd2ac015":"ō muri"},"nb":{"close_d634289d":"Lukk","done_54e3d4b6":"Ferdig","next_40e12421":"Neste","previous_bd2ac015":"Forrige"},"nb-x-k12":{"close_d634289d":"Lukk","done_54e3d4b6":"Ferdig","next_40e12421":"Neste","previous_bd2ac015":"Forrige"},"nl":{"close_d634289d":"Sluiten","done_54e3d4b6":"Gereed","next_40e12421":"Volgende","previous_bd2ac015":"Vorige"},"nn":{"close_d634289d":"Lukk","done_54e3d4b6":"Fullført","next_40e12421":"Neste","previous_bd2ac015":"Førre"},"pl":{"close_d634289d":"Zamknij","done_54e3d4b6":"Gotowe","next_40e12421":"Następny","previous_bd2ac015":"Poprzedni"},"pt":{"close_d634289d":"Fechar","done_54e3d4b6":"Concluído","next_40e12421":"Próximo","previous_bd2ac015":"Anterior"},"pt-BR":{"close_d634289d":"Fechar","done_54e3d4b6":"Feito","next_40e12421":"Próximo","previous_bd2ac015":"Anterior"},"ru":{"close_d634289d":"Закрыть","done_54e3d4b6":"Готово","next_40e12421":"Далее","previous_bd2ac015":"Предыдущий"},"sl":{"close_d634289d":"Zapri","done_54e3d4b6":"Dokončano","next_40e12421":"Naprej","previous_bd2ac015":"Nazaj"},"sv":{"close_d634289d":"Stäng","done_54e3d4b6":"Klar","next_40e12421":"Nästa","previous_bd2ac015":"Föregående"},"sv-x-k12":{"close_d634289d":"Stäng","done_54e3d4b6":"Klar","next_40e12421":"Nästa","previous_bd2ac015":"Föregående"},"tr":{"close_d634289d":"Kapat","done_54e3d4b6":"Tamam","next_40e12421":"Sonraki","previous_bd2ac015":"Önceki"},"uk":{"close_d634289d":"Закрити","done_54e3d4b6":"Готово","next_40e12421":"Наступний","previous_bd2ac015":"Попередній"},"zh-Hans":{"close_d634289d":"关闭","done_54e3d4b6":"完成","next_40e12421":"下一步","previous_bd2ac015":"先前"},"zh-Hant":{"close_d634289d":"關閉","done_54e3d4b6":"已完成","next_40e12421":"下一個","previous_bd2ac015":"上一個"}}'))
n("jQeR"),n("0sPK")
var d=s.default.scoped("TourPoints"),f=n("dlVC"),p=n("n12J"),h=n("TstA"),v=n("Mmr1"),b=n("Xx/m")
var m=({current:e,totalSteps:t,gotoStep:n,close:r,firstLabel:a,softClose:c=r,content:u})=>{const s=i.a.useRef(),l=i.a.useRef()
return i.a.useEffect(()=>{const e=document.getElementById("___reactour")
e&&e.setAttribute("aria-hidden",!1),s.current&&s.current.focus()}),Object(o.a)("div",{role:"none",onClick:e=>{e.stopPropagation()}},void 0,Object(o.a)(p.a,{as:"div",padding:"medium",elementRef:e=>l.current=e,position:"relative",borderRadius:"small",shadow:"topmost"},void 0,Object(o.a)(p.a,{className:"tour-close-button"},void 0,Object(o.a)(v.a,{elementRef:e=>s.current=e,placement:"end",offset:"small",screenReaderLabel:d.t("Close"),onClick:r})),u,Object(o.a)(h.a,{margin:"medium 0 0 0"},void 0,Object(o.a)(h.a.Item,{shouldGrow:!0},void 0,0===e?a:Object(o.a)("p",{},void 0,d.t("%{current} of %{totalSteps}",{current:e,totalSteps:t-1}))),Object(o.a)(h.a.Item,{},void 0,e>0&&Object(o.a)(b.a,{margin:"0 small 0 0",onClick:()=>n(e-1)},void 0,d.t("Previous")),e>0&&e<t-1?Object(o.a)(b.a,{variant:"primary",onClick:()=>n(e+1)},void 0,d.t("Next")):null,e===t-1&&Object(o.a)(b.a,{variant:"primary",onClick:()=>r({forceClose:!0})},void 0,d.t("Done")),0===e&&t>1&&Object(o.a)(b.a,{margin:"0 small 0 0",onClick:c},void 0,d.t("Not Now")),0===e&&t>1&&Object(o.a)(b.a,{variant:"primary",onClick:()=>n(1)},void 0,d.t("Start Tour"))))))},y=n("msMH")
var g=function(e,t){const n=i.a.useState(()=>{const n=window.localStorage.getItem(e)
try{return n?JSON.parse(n):t}catch(e){return n}}),o=Object(r.a)(n,2),a=o[0],c=o[1]
return[a,t=>{try{const n=t instanceof Function?t(a):t
c(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(e){}}]},w=n("8t0o"),O=n("ZbPE"),_=n("WfMV")
async function k(e){await new Promise(t=>{let n,r=!1
const o=f.a.subscribe("navigation-tray-opened",a=>{if(!r&&a===e){const e=document.getElementById("nav-tray-portal")
e&&e.setAttribute("aria-hidden",!0)
const r=document.getElementById("___reactour")
r&&r.setAttribute("aria-hidden",!1),clearTimeout(n),o(),t()}})
f.a.publish("navigation-tray-open",{type:e,noFocus:!0}),n=setTimeout(()=>{r=!0,o(),t()},5e3)})}var x=Object(o.a)("style",{},void 0,"#___reactour svg rect {\n            opacity:0;\n          }"),j=[{selector:"#global_nav_help_link",content:()=>{var e,t,r,a
return Object(o.a)("section",{},void 0,x,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Hello%{name}!",{name:(null===(e=window.ENV)||void 0===e||null===(t=e.current_user)||void 0===t?void 0:t.display_name)?", ".concat(null===(r=window.ENV)||void 0===r||null===(a=r.current_user)||void 0===a?void 0:a.display_name):""})),Object(o.a)("p",{},void 0,d.t("We know it's a priority to transition your institution for online learning during this time. This quick tour will show you how to:")),Object(o.a)("ol",{},void 0,Object(o.a)("li",{},void 0,d.t("Add People and Courses to Canvas")),Object(o.a)("li",{},void 0,d.t("Quickly share Course Content and Templates with Teachers")),Object(o.a)("li",{},void 0,d.t("Set up Video Conferencing and Other Tools")),Object(o.a)("li",{},void 0,d.t("Find Training Resources and More Help"))),Object(o.a)("div",{className:"tour-star-image","aria-hidden":!0},void 0,Object(o.a)("img",{src:n("MSoC"),alt:d.t("star")})))}},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Add People and Courses to Canvas")),Object(o.a)(_.a,{},void 0,d.t("Click on the admin navigation button to access account settings.")),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-10766-421455347",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("To add individual courses, click Courses."))),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-12632-421473704",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("To add individual users, click People."))),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-10840-4214527607",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("To add bulk users, courses, and enrollments, click SIS Imports.")))),actionBefore:async()=>{await k("accounts")}},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Quickly Share Course Content and Templates with Teachers")),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-16697-blueprint-courses-and-canvas-commons-comparison-pdf",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Learn more about using Commons and Blueprints.")))),actionBefore:async()=>{await k("accounts")}},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Set up Video Conferencing")),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-18572-conferences-resources",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Video conferencing tools enable face-to-face connection between teachers and students.")))),actionBefore:async()=>{await k("accounts")}},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Find Training Resources and More Help")),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-17985-how-do-i-use-the-training-services-portal-as-an-admin",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Access Canvas training videos and courses")))),actionBefore:async()=>{await k("help")}}],C=Object(o.a)("style",{},void 0,"#___reactour svg rect {\n            opacity:0;\n          }"),E=Object(o.a)("ul",{},void 0,Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-23893",target:"_blank",rel:"noopener noreferrer"},void 0,"Zoom")),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-18570-google-hangouts-meet-lti",target:"_blank",rel:"noopener noreferrer"},void 0,"Google Meet")),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://www.youtube.com/watch?v=zUXXeiRCFfY",target:"_blank",rel:"noopener noreferrer"},void 0,"Microsoft Teams"))),S=[{selector:"#global_nav_help_link",content:()=>{var e,t,r,a
return Object(o.a)("section",{},void 0,C,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Hello%{name}!",{name:(null===(e=window.ENV)||void 0===e||null===(t=e.current_user)||void 0===t?void 0:t.display_name)?", ".concat(null===(r=window.ENV)||void 0===r||null===(a=r.current_user)||void 0===a?void 0:a.display_name):""})),Object(o.a)(O.a,{as:"p"},void 0,d.t("We know getting your courses online quickly during this time is priority. This quick tour will show you how to:")),Object(o.a)("ol",{},void 0,Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-13111-4152719738",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Set up your Notifications"))),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-18584-set-up-your-canvas-course-in-30-minutes-or-less",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Get your Content online"))),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-12687-41524130",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Learn more about Video Conferencing")),E)),Object(o.a)("div",{className:"tour-star-image","aria-hidden":!0},void 0,Object(o.a)("img",{src:n("MSoC"),alt:d.t("star")})))}},{observe:".profile-tab-notifications",selector:".profile-tab-notifications",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Set Up Your Notifications")),Object(o.a)(_.a,{},void 0,d.t("Click on the account navigation button to access notification preferences.")),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-13111-4152719738",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Don't miss notifications from your students."))),Object(o.a)("iframe",{title:d.t("Canvas Notifications Tutorial Video"),src:"https://player.vimeo.com/video/75514816?title=0&byline=0&portrait=0",width:"100%",height:"277px",style:{marginTop:"1rem"},frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),actionBefore:async()=>{await k("profile")}},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Get Your Content Online Quickly")),Object(o.a)(_.a,{},void 0,d.t("Click on the courses navigation button to access your courses.")),Object(o.a)(O.a,{as:"p"},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-18584-set-up-your-canvas-course-in-30-minutes-or-less",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("Set up your Canvas course in 30 minutes or less."))),Object(o.a)("iframe",{title:d.t("Canvas Course Tutorial Video"),src:"https://player.vimeo.com/video/69658934?title=0&byline=0&portrait=0",width:"100%",height:"277px",style:{marginTop:"1rem"},frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})),actionBefore:async()=>{await k("courses")}},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Learn more about Video Conferencing")),Object(o.a)(p.a,{as:"div",margin:"small 0 0 0"},void 0,Object(o.a)("ul",{},void 0,Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-23893",target:"_blank",rel:"noopener noreferrer"},void 0,"Zoom")),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-18570-google-hangouts-meet-lti",target:"_blank",rel:"noopener noreferrer"},void 0,"Google Meet")),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://www.youtube.com/watch?v=zUXXeiRCFfY",target:"_blank",rel:"noopener noreferrer"},void 0,"Microsoft Teams")),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://community.canvaslms.com/docs/DOC-12687-41524130",target:"_blank",rel:"noopener noreferrer"},void 0,d.t("More Video Conferencing Tools")))))),actionBefore:async()=>{await k("help")}}],N=Object(o.a)("style",{},void 0,"#___reactour svg rect {\n            opacity:0;\n          }")
const A={admin:j,teacher:S,student:[{selector:"#global_nav_help_link",content:()=>{var e,t,r,a
return Object(o.a)("section",{},void 0,N,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Hello%{name}!",{name:(null===(e=window.ENV)||void 0===e||null===(t=e.current_user)||void 0===t?void 0:t.display_name)?", ".concat(null===(r=window.ENV)||void 0===r||null===(a=r.current_user)||void 0===a?void 0:a.display_name):""})),Object(o.a)(O.a,{as:"p"},void 0,d.t("Here's some quick tips to get you started in Canvas!")),Object(o.a)("ol",{},void 0,Object(o.a)("li",{},void 0,d.t("How do I find my courses?")),Object(o.a)("li",{},void 0,d.t("How do I contact my instructor?")),Object(o.a)("li",{},void 0,d.t("How do I download the Student App?"))),Object(o.a)("div",{className:"tour-star-image","aria-hidden":!0},void 0,Object(o.a)("img",{src:n("MSoC"),alt:d.t("star")})))}},{selector:"#global_nav_dashboard_link",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("How do I find my courses?")),Object(o.a)(O.a,{as:"p"},void 0,d.t("Find your classes or subjects in the Dashboard...")))},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("How do I find my courses?")),Object(o.a)(O.a,{as:"p"},void 0,d.t("...or in the Courses list."))),actionBefore:async()=>{await k("courses")}},{selector:"#global_nav_conversations_link",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("How do I contact my instructor?")),Object(o.a)(O.a,{as:"p"},void 0,d.t("Start a conversation with your instructor in the Canvas Inbox.")))},{selector:".navigation-tray-container",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("How do I download the Student App and get additional help?")),Object(o.a)(O.a,{as:"p"},void 0,d.t("Access your courses and groups using any iOS or Android mobile device and find more information in the Help menu.")),Object(o.a)("ul",{},void 0,Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://apps.apple.com/us/app/canvas-student/id480883488",target:"_blank",rel:"noopener noreferrer","aria-label":d.t("Download Canvas iOS app")},void 0,"iOS")),Object(o.a)("li",{},void 0,Object(o.a)(w.a,{as:"a",href:"https://play.google.com/store/apps/details?id=com.instructure.candroid&hl=en_US",target:"_blank",rel:"noopener noreferrer","aria-label":d.t("Download Canvas Android app")},void 0,"Android")))),actionBefore:async()=>{await k("help")}}]},P=[{selector:".welcome-tour-link",content:Object(o.a)("section",{},void 0,Object(o.a)(y.a,{level:"h3"},void 0,d.t("Come back later!")),d.t("You can access the Welcome Tour here any time as well as other new resources."))}]
t.default=({roles:e})=>{const t=i.a.useState(()=>{var t,n,r,o
return(null===(t=window.ENV)||void 0===t||null===(n=t.COURSE)||void 0===n?void 0:n.is_student)&&e.includes("student")&&!localStorage.getItem("canvas-tourpoints-shown-student")?"student":(null===(r=window.ENV)||void 0===r||null===(o=r.COURSE)||void 0===o?void 0:o.is_instructor)&&e.includes("teacher")&&!localStorage.getItem("canvas-tourpoints-shown-teacher")?"teacher":e[0]}),n=Object(r.a)(t,2),a=n[0],c=n[1],s=A[a],l=g("canvas-tourpoints-shown-".concat(a),!1),p=Object(r.a)(l,2),h=p[0],v=p[1],b=i.a.useState(!h),y=Object(r.a)(b,2),w=y[0],O=y[1],_=i.a.useState(!1),x=Object(r.a)(_,2),j=x[0],C=x[1],E=i.a.useState(!1),S=Object(r.a)(E,2),N=S[0],I=S[1]
i.a.useEffect(()=>(w&&f.a.publish("navigation-tray-override-dismiss",!0),()=>f.a.publish("navigation-tray-override-dismiss",!1)),[w])
const T=i.a.useCallback(async(e={})=>{const t=e.forceClose
if(v(!0),N||t)L(),f.a.publish("navigation-tray-close"),O(!1)
else{await k("help"),I(!0)
const e=document.getElementById("___reactour")
e&&e.setAttribute("aria-hidden",!1)}},[v,N])
i.a.useEffect(()=>{const e=e=>{27===e.keyCode&&T()}
return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[T])
const L=()=>{const e=document.getElementById("nav-tray-portal")
e&&e.setAttribute("aria-hidden",!1)
const t=document.getElementById("application")
t&&t.setAttribute("aria-hidden",!1)},D=()=>{const e=document.getElementById("nav-tray-portal")
e&&e.setAttribute("aria-hidden",!0)
const t=document.getElementById("application")
t&&t.setAttribute("aria-hidden",!0)}
if(i.a.useEffect(()=>(w&&D(),()=>L()),[w]),i.a.useEffect(()=>{const t=f.a.subscribe("tour-open",()=>{var t,n,r,o
f.a.publish("navigation-tray-close"),D(),O(!0),C(!0),I(!0),1===e.length?c(e[0]):(null===(t=window.ENV)||void 0===t||null===(n=t.COURSE)||void 0===n?void 0:n.is_student)&&e.includes("student")?c("student"):e.includes("teacher")&&!e.includes("admin")||(null===(r=window.ENV)||void 0===r||null===(o=r.COURSE)||void 0===o?void 0:o.is_instructor)&&e.includes("teacher")&&e.includes("admin")?c("teacher"):e.includes("admin")&&c("admin")})
return()=>t()},[e]),!a||!s)return null
const R={student:d.t("Student Tour"),teacher:d.t("Teacher Tour"),admin:d.t("Admin Tour")}
return Object(o.a)(u.a,{CustomHelper:e=>i.a.createElement(m,Object.assign({softClose:T,close:()=>{f.a.publish("navigation-tray-close"),L(),e.close()},firstLabel:R[a]||""},e)),steps:!j&&N?P:s,isOpen:w,onRequestClose:T},"".concat(N,"-").concat(w,"-").concat(a))}},mrSG:function(e,t,n){"use strict"
n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return a})),n.d(t,"__rest",(function(){return i})),n.d(t,"__decorate",(function(){return c})),n.d(t,"__param",(function(){return u})),n.d(t,"__metadata",(function(){return s})),n.d(t,"__awaiter",(function(){return l})),n.d(t,"__generator",(function(){return d})),n.d(t,"__exportStar",(function(){return f})),n.d(t,"__values",(function(){return p})),n.d(t,"__read",(function(){return h})),n.d(t,"__spread",(function(){return v})),n.d(t,"__spreadArrays",(function(){return b})),n.d(t,"__await",(function(){return m})),n.d(t,"__asyncGenerator",(function(){return y})),n.d(t,"__asyncDelegator",(function(){return g})),n.d(t,"__asyncValues",(function(){return w})),n.d(t,"__makeTemplateObject",(function(){return O})),n.d(t,"__importStar",(function(){return _})),n.d(t,"__importDefault",(function(){return k})),n.d(t,"__classPrivateFieldGet",(function(){return x})),n.d(t,"__classPrivateFieldSet",(function(){return j}))
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)}
function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])
return e}).apply(this,arguments)}
function i(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r)
else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i)
return a>3&&i&&Object.defineProperty(t,n,i),i}function u(e,t){return function(n,r){t(n,r,e)}}function s(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{u(r.next(e))}catch(e){a(e)}}function c(e){try{u(r.throw(e))}catch(e){a(e)}}function u(e){var t
e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))}function d(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1]
return o[1]},trys:[],ops:[]}
return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a
function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.")
for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o
switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a
break
case 4:return i.label++,{value:a[1],done:!1}
case 5:i.label++,r=a[1],a=[0]
continue
case 7:a=i.ops.pop(),i.trys.pop()
continue
default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0
continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1]
break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a
break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a)
break}o[2]&&i.ops.pop(),i.trys.pop()
continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1]
return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function f(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function p(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0
if(n)return n.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator]
if(!n)return e
var r,o,a=n.call(e),i=[]
try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]))
return e}function b(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length
var r=Array(e),o=0
for(t=0;t<n;t++)for(var a=arguments[t],i=0,c=a.length;i<c;i++,o++)r[o]=a[i]
return r}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function y(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var r,o=n.apply(e,t||[]),a=[]
return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r
function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(u,s):l(a[0][2],n)}catch(e){l(a[0][3],e)}var n}function u(e){c("next",e)}function s(e){c("throw",e)}function l(e,t){e(t),a.shift(),a.length&&c(a[0][0],a[0][1])}}function g(e){var t,n
return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t
function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function w(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,n=e[Symbol.asyncIterator]
return n?n.call(e):(e=p(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t)
function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function _(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}function x(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return t.get(e)}function j(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance")
return t.set(e,n),n}},qKvR:function(e,t,n){"use strict"
n.r(t),n.d(t,"css",(function(){return h})),n.d(t,"CacheProvider",(function(){return m})),n.d(t,"ClassNames",(function(){return N})),n.d(t,"Global",(function(){return x})),n.d(t,"ThemeContext",(function(){return b})),n.d(t,"jsx",(function(){return k})),n.d(t,"keyframes",(function(){return C})),n.d(t,"withEmotionCache",(function(){return y}))
var r=n("VbXa"),o=n.n(r),a=n("q1tI")
var i=function(){function e(e){this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.before=null}var t=e.prototype
return t.insert=function(e){if(this.ctr%(this.isSpeedy?65e3:1)==0){var t,n=function(e){var t=document.createElement("style")
return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t}(this)
t=0===this.tags.length?this.before:this.tags[this.tags.length-1].nextSibling,this.container.insertBefore(n,t),this.tags.push(n)}var r=this.tags[this.tags.length-1]
if(this.isSpeedy){var o=function(e){if(e.sheet)return e.sheet
for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r)
try{var a=105===e.charCodeAt(1)&&64===e.charCodeAt(0)
o.insertRule(e,a?0:o.cssRules.length)}catch(e){0}}else r.appendChild(document.createTextNode(e))
this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}()
var c=function(e){function t(e,t,r){var o=t.trim().split(h)
t=o
var a=o.length,i=e.length
switch(i){case 0:case 1:var c=0
for(e=0===i?"":e[0]+" ";c<a;++c)t[c]=n(e,t[c],r).trim()
break
default:var u=c=0
for(t=[];c<a;++c)for(var s=0;s<i;++s)t[u++]=n(e[s]+" ",o[c],r).trim()}return t}function n(e,t,n){var r=t.charCodeAt(0)
switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(v,"$1"+e.trim())
case 58:return e.trim()+t.replace(v,"$1"+e.trim())
default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(v,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function r(e,t,n,a){var i=e+";",c=2*t+3*n+4*a
if(944===c){e=i.indexOf(":",9)+1
var u=i.substring(e,i.length-1).trim()
return u=i.substring(0,e).trim()+u+";",1===N||2===N&&o(u,1)?"-webkit-"+u+u:u}if(0===N||2===N&&!o(i,1))return i
switch(c){case 1015:return 97===i.charCodeAt(10)?"-webkit-"+i+i:i
case 951:return 116===i.charCodeAt(3)?"-webkit-"+i+i:i
case 963:return 110===i.charCodeAt(5)?"-webkit-"+i+i:i
case 1009:if(100!==i.charCodeAt(4))break
case 969:case 942:return"-webkit-"+i+i
case 978:return"-webkit-"+i+"-moz-"+i+i
case 1019:case 983:return"-webkit-"+i+"-moz-"+i+"-ms-"+i+i
case 883:if(45===i.charCodeAt(8))return"-webkit-"+i+i
if(0<i.indexOf("image-set(",11))return i.replace(j,"$1-webkit-$2")+i
break
case 932:if(45===i.charCodeAt(4))switch(i.charCodeAt(5)){case 103:return"-webkit-box-"+i.replace("-grow","")+"-webkit-"+i+"-ms-"+i.replace("grow","positive")+i
case 115:return"-webkit-"+i+"-ms-"+i.replace("shrink","negative")+i
case 98:return"-webkit-"+i+"-ms-"+i.replace("basis","preferred-size")+i}return"-webkit-"+i+"-ms-"+i+i
case 964:return"-webkit-"+i+"-ms-flex-"+i+i
case 1023:if(99!==i.charCodeAt(8))break
return"-webkit-box-pack"+(u=i.substring(i.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+i+"-ms-flex-pack"+u+i
case 1005:return f.test(i)?i.replace(d,":-webkit-")+i.replace(d,":-moz-")+i:i
case 1e3:switch(t=(u=i.substring(13).trim()).indexOf("-")+1,u.charCodeAt(0)+u.charCodeAt(t)){case 226:u=i.replace(g,"tb")
break
case 232:u=i.replace(g,"tb-rl")
break
case 220:u=i.replace(g,"lr")
break
default:return i}return"-webkit-"+i+"-ms-"+u+i
case 1017:if(-1===i.indexOf("sticky",9))break
case 975:switch(t=(i=e).length-10,c=(u=(33===i.charCodeAt(t)?i.substring(0,t):i).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|u.charCodeAt(7))){case 203:if(111>u.charCodeAt(8))break
case 115:i=i.replace(u,"-webkit-"+u)+";"+i
break
case 207:case 102:i=i.replace(u,"-webkit-"+(102<c?"inline-":"")+"box")+";"+i.replace(u,"-webkit-"+u)+";"+i.replace(u,"-ms-"+u+"box")+";"+i}return i+";"
case 938:if(45===i.charCodeAt(5))switch(i.charCodeAt(6)){case 105:return u=i.replace("-items",""),"-webkit-"+i+"-webkit-box-"+u+"-ms-flex-"+u+i
case 115:return"-webkit-"+i+"-ms-flex-item-"+i.replace(_,"")+i
default:return"-webkit-"+i+"-ms-flex-line-pack"+i.replace("align-content","").replace(_,"")+i}break
case 973:case 989:if(45!==i.charCodeAt(3)||122===i.charCodeAt(4))break
case 931:case 953:if(!0===x.test(e))return 115===(u=e.substring(e.indexOf(":")+1)).charCodeAt(0)?r(e.replace("stretch","fill-available"),t,n,a).replace(":fill-available",":stretch"):i.replace(u,"-webkit-"+u)+i.replace(u,"-moz-"+u.replace("fill-",""))+i
break
case 962:if(i="-webkit-"+i+(102===i.charCodeAt(5)?"-ms-"+i:"")+i,211===n+a&&105===i.charCodeAt(13)&&0<i.indexOf("transform",10))return i.substring(0,i.indexOf(";",27)+1).replace(p,"$1-webkit-$2")+i}return i}function o(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10)
return n=e.substring(n+1,e.length-1),T(2!==t?r:r.replace(k,"$1"),n,t)}function a(e,t){var n=r(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2))
return n!==t+";"?n.replace(O," or ($1)").substring(4):"("+t+")"}function i(e,t,n,r,o,a,i,c,s,l){for(var d,f=0,p=t;f<I;++f)switch(d=P[f].call(u,e,p,n,r,o,a,i,c,s,l)){case void 0:case!1:case!0:case null:break
default:p=d}if(p!==t)return p}function c(e){return void 0!==(e=e.prefix)&&(T=null,e?"function"!=typeof e?N=1:(N=2,T=e):N=0),c}function u(e,n){var c=e
if(33>c.charCodeAt(0)&&(c=c.trim()),c=[c],0<I){var u=i(-1,n,c,c,E,C,0,0,0,0)
void 0!==u&&"string"==typeof u&&(n=u)}var d=function e(n,c,u,d,f){for(var p,h,v,g,O,_=0,k=0,x=0,j=0,P=0,T=0,D=v=p=0,R=0,M=0,F=0,B=0,q=u.length,G=q-1,H="",W="",z="",V="";R<q;){if(h=u.charCodeAt(R),R===G&&0!==k+j+x+_&&(0!==k&&(h=47===k?10:47),j=x=_=0,q++,G++),0===k+j+x+_){if(R===G&&(0<M&&(H=H.replace(l,"")),0<H.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break
default:H+=u.charAt(R)}h=59}switch(h){case 123:for(p=(H=H.trim()).charCodeAt(0),v=1,B=++R;R<q;){switch(h=u.charCodeAt(R)){case 123:v++
break
case 125:v--
break
case 47:switch(h=u.charCodeAt(R+1)){case 42:case 47:e:{for(D=R+1;D<G;++D)switch(u.charCodeAt(D)){case 47:if(42===h&&42===u.charCodeAt(D-1)&&R+2!==D){R=D+1
break e}break
case 10:if(47===h){R=D+1
break e}}R=D}}break
case 91:h++
case 40:h++
case 34:case 39:for(;R++<G&&u.charCodeAt(R)!==h;);}if(0===v)break
R++}switch(v=u.substring(B,R),0===p&&(p=(H=H.replace(s,"").trim()).charCodeAt(0)),p){case 64:switch(0<M&&(H=H.replace(l,"")),h=H.charCodeAt(1)){case 100:case 109:case 115:case 45:M=c
break
default:M=A}if(B=(v=e(c,M,v,h,f+1)).length,0<I&&(O=i(3,v,M=t(A,H,F),c,E,C,B,h,f,d),H=M.join(""),void 0!==O&&0===(B=(v=O.trim()).length)&&(h=0,v="")),0<B)switch(h){case 115:H=H.replace(w,a)
case 100:case 109:case 45:v=H+"{"+v+"}"
break
case 107:v=(H=H.replace(b,"$1 $2"))+"{"+v+"}",v=1===N||2===N&&o("@"+v,3)?"@-webkit-"+v+"@"+v:"@"+v
break
default:v=H+v,112===d&&(W+=v,v="")}else v=""
break
default:v=e(c,t(c,H,F),v,d,f+1)}z+=v,v=F=M=D=p=0,H="",h=u.charCodeAt(++R)
break
case 125:case 59:if(1<(B=(H=(0<M?H.replace(l,""):H).trim()).length))switch(0===D&&(p=H.charCodeAt(0),45===p||96<p&&123>p)&&(B=(H=H.replace(" ",":")).length),0<I&&void 0!==(O=i(1,H,c,n,E,C,W.length,d,f,d))&&0===(B=(H=O.trim()).length)&&(H="\0\0"),p=H.charCodeAt(0),h=H.charCodeAt(1),p){case 0:break
case 64:if(105===h||99===h){V+=H+u.charAt(R)
break}default:58!==H.charCodeAt(B-1)&&(W+=r(H,p,h,H.charCodeAt(2)))}F=M=D=p=0,H="",h=u.charCodeAt(++R)}}switch(h){case 13:case 10:47===k?k=0:0===1+p&&107!==d&&0<H.length&&(M=1,H+="\0"),0<I*L&&i(0,H,c,n,E,C,W.length,d,f,d),C=1,E++
break
case 59:case 125:if(0===k+j+x+_){C++
break}default:switch(C++,g=u.charAt(R),h){case 9:case 32:if(0===j+_+k)switch(P){case 44:case 58:case 9:case 32:g=""
break
default:32!==h&&(g=" ")}break
case 0:g="\\0"
break
case 12:g="\\f"
break
case 11:g="\\v"
break
case 38:0===j+k+_&&(M=F=1,g="\f"+g)
break
case 108:if(0===j+k+_+S&&0<D)switch(R-D){case 2:112===P&&58===u.charCodeAt(R-3)&&(S=P)
case 8:111===T&&(S=T)}break
case 58:0===j+k+_&&(D=R)
break
case 44:0===k+x+j+_&&(M=1,g+="\r")
break
case 34:case 39:0===k&&(j=j===h?0:0===j?h:j)
break
case 91:0===j+k+x&&_++
break
case 93:0===j+k+x&&_--
break
case 41:0===j+k+_&&x--
break
case 40:if(0===j+k+_){if(0===p)switch(2*P+3*T){case 533:break
default:p=1}x++}break
case 64:0===k+x+j+_+D+v&&(v=1)
break
case 42:case 47:if(!(0<j+_+x))switch(k){case 0:switch(2*h+3*u.charCodeAt(R+1)){case 235:k=47
break
case 220:B=R,k=42}break
case 42:47===h&&42===P&&B+2!==R&&(33===u.charCodeAt(B+2)&&(W+=u.substring(B,R+1)),g="",k=0)}}0===k&&(H+=g)}T=P,P=h,R++}if(0<(B=W.length)){if(M=c,0<I&&(void 0!==(O=i(2,W,M,n,E,C,B,d,f,d))&&0===(W=O).length))return V+W+z
if(W=M.join(",")+"{"+W+"}",0!=N*S){switch(2!==N||o(W,2)||(S=0),S){case 111:W=W.replace(y,":-moz-$1")+W
break
case 112:W=W.replace(m,"::-webkit-input-$1")+W.replace(m,"::-moz-$1")+W.replace(m,":-ms-input-$1")+W}S=0}}return V+W+z}(A,c,n,0,0)
return 0<I&&(void 0!==(u=i(-2,d,c,c,E,C,d.length,0,0,0))&&(d=u)),"",S=0,C=E=1,d}var s=/^\0+/g,l=/[\0\r\f]/g,d=/: */g,f=/zoo|gra/,p=/([,: ])(transform)/g,h=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,b=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,y=/:(read-only)/g,g=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,O=/([\s\S]*?);/g,_=/-self|flex-/g,k=/[^]*?(:[rp][el]a[\w-]+)[^]*/,x=/stretch|:\s*\w+\-(?:conte|avail)/,j=/([^-])(image-set\()/,C=1,E=1,S=0,N=1,A=[],P=[],I=0,T=null,L=0
return u.use=function e(t){switch(t){case void 0:case null:I=P.length=0
break
default:if("function"==typeof t)P[I++]=t
else if("object"==typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n])
else L=0|!!t}return e},u.set=c,void 0!==e&&c(e),u}
function u(e){e&&s.current.insert(e+"}")}var s={current:null},l=function(e,t,n,r,o,a,i,c,l,d){switch(e){case 1:switch(t.charCodeAt(0)){case 64:return s.current.insert(t+";"),""
case 108:if(98===t.charCodeAt(2))return""}break
case 2:if(0===c)return t+"/*|*/"
break
case 3:switch(c){case 102:case 112:return s.current.insert(n[0]+t),""
default:return t+(0===d?"/*|*/":"")}case-2:t.split("/*|*/}").forEach(u)}},d=function(e){void 0===e&&(e={})
var t,n=e.key||"css"
void 0!==e.prefix&&(t={prefix:e.prefix})
var r=new c(t)
var o,a={}
o=e.container||document.head
var u,d=document.querySelectorAll("style[data-emotion-"+n+"]")
Array.prototype.forEach.call(d,(function(e){e.getAttribute("data-emotion-"+n).split(" ").forEach((function(e){a[e]=!0})),e.parentNode!==o&&o.appendChild(e)})),r.use(e.stylisPlugins)(l),u=function(e,t,n,o){var a=t.name
s.current=n,r(e,t.styles),o&&(f.inserted[a]=!0)}
var f={key:n,sheet:new i({key:n,container:o,nonce:e.nonce,speedy:e.speedy}),nonce:e.nonce,inserted:a,registered:{},insert:u}
return f},f=n("SIPS"),p=n("MiSq")
var h=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return Object(p.a)(t)},v=Object(a.createContext)("undefined"!=typeof HTMLElement?d():null),b=Object(a.createContext)({}),m=v.Provider,y=function(e){return Object(a.forwardRef)((function(t,n){return Object(a.createElement)(v.Consumer,null,(function(r){return e(t,r,n)}))}))},g="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",w=Object.prototype.hasOwnProperty,O=function(e,t,n,r){var o=null===n?t.css:t.css(n)
"string"==typeof o&&void 0!==e.registered[o]&&(o=e.registered[o])
var i=t[g],c=[o],u=""
"string"==typeof t.className?u=Object(f.a)(e.registered,c,t.className):null!=t.className&&(u=t.className+" ")
var s=Object(p.a)(c)
Object(f.b)(e,s,"string"==typeof i)
u+=e.key+"-"+s.name
var l={}
for(var d in t)w.call(t,d)&&"css"!==d&&d!==g&&(l[d]=t[d])
return l.ref=r,l.className=u,Object(a.createElement)(i,l)},_=y((function(e,t,n){return"function"==typeof e.css?Object(a.createElement)(b.Consumer,null,(function(r){return O(t,e,r,n)})):O(t,e,null,n)}))
var k=function(e,t){var n=arguments
if(null==t||!w.call(t,"css"))return a.createElement.apply(void 0,n)
var r=n.length,o=new Array(r)
o[0]=_
var i={}
for(var c in t)w.call(t,c)&&(i[c]=t[c])
i[g]=e,o[1]=i
for(var u=2;u<r;u++)o[u]=n[u]
return a.createElement.apply(null,o)},x=y((function(e,t){var n=e.styles
if("function"==typeof n)return Object(a.createElement)(b.Consumer,null,(function(e){var r=Object(p.a)([n(e)])
return Object(a.createElement)(j,{serialized:r,cache:t})}))
var r=Object(p.a)([n])
return Object(a.createElement)(j,{serialized:r,cache:t})})),j=function(e){function t(t,n,r){return e.call(this,t,n,r)||this}o()(t,e)
var n=t.prototype
return n.componentDidMount=function(){this.sheet=new i({key:this.props.cache.key+"-global",nonce:this.props.cache.sheet.nonce,container:this.props.cache.sheet.container})
var e=document.querySelector("style[data-emotion-"+this.props.cache.key+'="'+this.props.serialized.name+'"]')
null!==e&&this.sheet.tags.push(e),this.props.cache.sheet.tags.length&&(this.sheet.before=this.props.cache.sheet.tags[0]),this.insertStyles()},n.componentDidUpdate=function(e){e.serialized.name!==this.props.serialized.name&&this.insertStyles()},n.insertStyles=function(){if(void 0!==this.props.serialized.next&&Object(f.b)(this.props.cache,this.props.serialized.next,!0),this.sheet.tags.length){var e=this.sheet.tags[this.sheet.tags.length-1].nextElementSibling
this.sheet.before=e,this.sheet.flush()}this.props.cache.insert("",this.props.serialized,this.sheet,!1)},n.componentWillUnmount=function(){this.sheet.flush()},n.render=function(){return null},t}(a.Component),C=function(){var e=h.apply(void 0,arguments),t="animation-"+e.name
return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},E=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var a=t[r]
if(null!=a){var i=void 0
switch(typeof a){case"boolean":break
case"object":if(Array.isArray(a))i=e(a)
else for(var c in i="",a)a[c]&&c&&(i&&(i+=" "),i+=c)
break
default:i=a}i&&(o&&(o+=" "),o+=i)}}return o}
function S(e,t,n){var r=[],o=Object(f.a)(e,r,n)
return r.length<2?n:o+t(r)}var N=y((function(e,t){return Object(a.createElement)(b.Consumer,null,(function(n){var r=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r]
var o=Object(p.a)(n,t.registered)
return Object(f.b)(t,o,!1),t.key+"-"+o.name},o={css:r,cx:function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o]
return S(t.registered,r,E(n))},theme:n},a=e.children(o)
return!0,a}))}))},sopX:function(e,t){function n(){var e=this
document.addEventListener("keydown",(function(t){e.focusByKeyboard=!0}),!0),document.addEventListener("mousedown",(function(t){e.focusByKeyboard=!1}),!0),document.addEventListener("focus",(function(t){e.updateVisibility()}),!0),document.addEventListener("focusout",(function(t){window.setTimeout((function(){document.hasFocus()||(e.focusByKeyboard=!0,e.updateVisibility())}),0)})),this.updateVisibility()}n.prototype={focusByKeyboard:!0,updateVisibility:function(){this.hidden=!this.focusByKeyboard},set hidden(e){document.documentElement.classList.toggle("focus-outline-hidden",e)},get hidden(){return document.documentElement.classList.contains("focus-outline-hidden")}},new n},umwU:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=t.easeFunctions={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},o=t.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)}
t.setPosition=function(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInOutCubic"
return n>o?t:e+(t-e)*r[a](n/o)},t.calcEndPoint=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0
if(o(e))return parseInt(e)+n
var r=t===window?window.pageYOffset:t.scrollTop-t.getBoundingClientRect().top,a="html"===e.nodeName.toLowerCase()?-r:e.getBoundingClientRect().top+r
return a+n}},wx14:function(e,t,n){"use strict"
function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}}])

//# sourceMappingURL=529-c-9e1362998d.js.map