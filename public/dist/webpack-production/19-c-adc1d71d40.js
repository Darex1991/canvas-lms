(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[19],{"/MKj":function(e,t,n){"use strict"
n.r(t),n.d(t,"Provider",(function(){return f})),n.d(t,"createProvider",(function(){return p})),n.d(t,"connectAdvanced",(function(){return j})),n.d(t,"connect",(function(){return te}))
var r=n("dI71"),o=n("q1tI"),i=n.n(o),s=n("17x9"),u=n.n(s),c=u.a.shape({trySubscribe:u.a.func.isRequired,tryUnsubscribe:u.a.func.isRequired,notifyNestedSubs:u.a.func.isRequired,isSubscribed:u.a.func.isRequired}),a=u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired})
i.a.forwardRef
function p(e){var t
void 0===e&&(e="store")
var n=e+"Subscription",i=function(t){Object(r.a)(s,t)
var i=s.prototype
function s(n,r){var o
return(o=t.call(this,n,r)||this)[e]=n.store,o}return i.getChildContext=function(){var t
return(t={})[e]=this[e],t[n]=null,t},i.render=function(){return o.Children.only(this.props.children)},s}(o.Component)
return i.propTypes={store:a.isRequired,children:u.a.element.isRequired},i.childContextTypes=((t={})[e]=a.isRequired,t[n]=c,t),i}var f=p(),d=n("JX7q"),l=n("wx14"),h=n("zLVn"),y=n("2mql"),b=n.n(y),v=n("QLaP"),m=n.n(v),w=n("TOwV"),O={notify:function(){}}
var g=function(){function e(e,t,n){this.store=e,this.parentSub=t,this.onStateChange=n,this.unsubscribe=null,this.listeners=O}var t=e.prototype
return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t
this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=(e=[],t=[],{clear:function(){t=null,e=null},notify:function(){for(var n=e=t,r=0;r<n.length;r++)n[r]()},get:function(){return t},subscribe:function(n){var r=!0
return t===e&&(t=e.slice()),t.push(n),function(){r&&null!==e&&(r=!1,t===e&&(t=e.slice()),t.splice(t.indexOf(n),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=O)},e}(),S=void 0!==i.a.forwardRef,P=0,E={}
function C(){}function j(e,t){var n,i
void 0===t&&(t={})
var s=t,u=s.getDisplayName,p=void 0===u?function(e){return"ConnectAdvanced("+e+")"}:u,f=s.methodName,y=void 0===f?"connectAdvanced":f,v=s.renderCountProp,O=void 0===v?void 0:v,j=s.shouldHandleStateChanges,N=void 0===j||j,T=s.storeKey,x=void 0===T?"store":T,R=s.withRef,I=void 0!==R&&R,M=Object(h.a)(s,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),q=x+"Subscription",$=P++,D=((n={})[x]=a,n[q]=c,n),A=((i={})[q]=c,i)
return function(t){m()(Object(w.isValidElementType)(t),"You must pass a component to the function returned by "+y+". Instead received "+JSON.stringify(t))
var n=t.displayName||t.name||"Component",i=p(n),s=Object(l.a)({},M,{getDisplayName:p,methodName:y,renderCountProp:O,shouldHandleStateChanges:N,storeKey:x,withRef:I,displayName:i,wrappedComponentName:n,WrappedComponent:t}),u=function(n){function u(e,t){var r
return(r=n.call(this,e,t)||this).version=$,r.state={},r.renderCount=0,r.store=e[x]||t[x],r.propsMode=Boolean(e[x]),r.setWrappedInstance=r.setWrappedInstance.bind(Object(d.a)(Object(d.a)(r))),m()(r.store,'Could not find "'+x+'" in either the context or props of "'+i+'". Either wrap the root component in a <Provider>, or explicitly pass "'+x+'" as a prop to "'+i+'".'),r.initSelector(),r.initSubscription(),r}Object(r.a)(u,n)
var c=u.prototype
return c.getChildContext=function(){var e,t=this.propsMode?null:this.subscription
return(e={})[q]=t||this.context[q],e},c.componentDidMount=function(){N&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},c.componentWillReceiveProps=function(e){this.selector.run(e)},c.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},c.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=C,this.store=null,this.selector.run=C,this.selector.shouldComponentUpdate=!1},c.getWrappedInstance=function(){return m()(I,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+y+"() call."),this.wrappedInstance},c.setWrappedInstance=function(e){this.wrappedInstance=e},c.initSelector=function(){var t=e(this.store.dispatch,s)
this.selector=function(e,t){var n={run:function(r){try{var o=e(t.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(e){n.shouldComponentUpdate=!0,n.error=e}}}
return n}(t,this.store),this.selector.run(this.props)},c.initSubscription=function(){if(N){var e=(this.propsMode?this.props:this.context)[q]
this.subscription=new g(this.store,e,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},c.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(E)):this.notifyNestedSubs()},c.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},c.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},c.addExtraProps=function(e){if(!(I||O||this.propsMode&&this.subscription))return e
var t=Object(l.a)({},e)
return I&&(t.ref=this.setWrappedInstance),O&&(t[O]=this.renderCount++),this.propsMode&&this.subscription&&(t[q]=this.subscription),t},c.render=function(){var e=this.selector
if(e.shouldComponentUpdate=!1,e.error)throw e.error
return Object(o.createElement)(t,this.addExtraProps(e.props))},u}(o.Component)
return S&&(u.prototype.UNSAFE_componentWillReceiveProps=u.prototype.componentWillReceiveProps,delete u.prototype.componentWillReceiveProps),u.WrappedComponent=t,u.displayName=i,u.childContextTypes=A,u.contextTypes=D,u.propTypes=D,b()(u,t)}}var N=Object.prototype.hasOwnProperty
function T(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function x(e,t){if(T(e,t))return!0
if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1
var n=Object.keys(e),r=Object.keys(t)
if(n.length!==r.length)return!1
for(var o=0;o<n.length;o++)if(!N.call(t,n[o])||!T(e[n[o]],t[n[o]]))return!1
return!0}var R=n("ANjH")
function I(e){return function(t,n){var r=e(t,n)
function o(){return r}return o.dependsOnOwnProps=!1,o}}function M(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function q(e,t){return function(t,n){n.displayName
var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)}
return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=M(e)
var o=r(t,n)
return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=M(o),o=r(t,n)),o},r}}var $=[function(e){return"function"==typeof e?q(e):void 0},function(e){return e?void 0:I((function(e){return{dispatch:e}}))},function(e){return e&&"object"==typeof e?I((function(t){return Object(R.bindActionCreators)(e,t)})):void 0}]
var D=[function(e){return"function"==typeof e?q(e):void 0},function(e){return e?void 0:I((function(){return{}}))}]
function A(e,t,n){return Object(l.a)({},n,e,t)}var U=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName
var r,o=n.pure,i=n.areMergedPropsEqual,s=!1
return function(t,n,u){var c=e(t,n,u)
return s?o&&i(c,r)||(r=c):(s=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return A}}]
function _(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function W(e,t,n,r,o){var i,s,u,c,a,p=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1
function h(o,l){var h,y,b=!f(l,s),v=!p(o,i)
return i=o,s=l,b&&v?(u=e(i,s),t.dependsOnOwnProps&&(c=t(r,s)),a=n(u,c,s)):b?(e.dependsOnOwnProps&&(u=e(i,s)),t.dependsOnOwnProps&&(c=t(r,s)),a=n(u,c,s)):v?(h=e(i,s),y=!d(h,u),u=h,y&&(a=n(u,c,s)),a):a}return function(o,p){return l?h(o,p):(u=e(i=o,s=p),c=t(r,s),a=n(u,c,s),l=!0,a)}}function k(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=Object(h.a)(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),s=n(e,i),u=r(e,i),c=o(e,i)
return(i.pure?W:_)(s,u,c,e,i)}function F(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e)
if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function B(e,t){return e===t}var H,L,K,V,z,J,Y,Q,X,G,Z,ee,te=(K=(L=void 0===H?{}:H).connectHOC,V=void 0===K?j:K,z=L.mapStateToPropsFactories,J=void 0===z?D:z,Y=L.mapDispatchToPropsFactories,Q=void 0===Y?$:Y,X=L.mergePropsFactories,G=void 0===X?U:X,Z=L.selectorFactory,ee=void 0===Z?k:Z,function(e,t,n,r){void 0===r&&(r={})
var o=r,i=o.pure,s=void 0===i||i,u=o.areStatesEqual,c=void 0===u?B:u,a=o.areOwnPropsEqual,p=void 0===a?x:a,f=o.areStatePropsEqual,d=void 0===f?x:f,y=o.areMergedPropsEqual,b=void 0===y?x:y,v=Object(h.a)(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),m=F(e,J,"mapStateToProps"),w=F(t,Q,"mapDispatchToProps"),O=F(n,G,"mergeProps")
return V(ee,Object(l.a)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:m,initMapDispatchToProps:w,initMergeProps:O,pure:s,areStatesEqual:c,areOwnPropsEqual:p,areStatePropsEqual:d,areMergedPropsEqual:b},v))})},"2mql":function(e,t,n){"use strict"
var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={}
function c(e){return r.isMemo(e)?s:u[e.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=s
var a=Object.defineProperty,p=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,h=Object.prototype
e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=l(n)
o&&o!==h&&e(t,o,r)}var s=p(n)
f&&(s=s.concat(f(n)))
for(var u=c(t),y=c(n),b=0;b<s.length;++b){var v=s[b]
if(!(i[v]||r&&r[v]||y&&y[v]||u&&u[v])){var m=d(n,v)
try{a(t,v,m)}catch(e){}}}}return t}},ANjH:function(e,t,n){"use strict"
n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return b})),n.d(t,"bindActionCreators",(function(){return f})),n.d(t,"combineReducers",(function(){return a})),n.d(t,"compose",(function(){return y})),n.d(t,"createStore",(function(){return u}))
var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}}
function s(e){if("object"!=typeof e||null===e)return!1
for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t)
return Object.getPrototypeOf(e)===t}function u(e,t,n){var o
if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.")
if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.")
return n(u)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.")
var c=e,a=t,p=[],f=p,d=!1
function l(){f===p&&(f=p.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.")
return a}function y(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.")
if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.")
var t=!0
return l(),f.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.")
t=!1,l()
var n=f.indexOf(e)
f.splice(n,1),p=null}}}function b(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.")
if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')
if(d)throw new Error("Reducers may not dispatch actions.")
try{d=!0,a=c(a,e)}finally{d=!1}for(var t=p=f,n=0;n<t.length;n++){(0,t[n])()}return e}function v(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.")
c=e,b({type:i.REPLACE})}function m(){var e,t=y
return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.")
function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.default]=function(){return this},e}return b({type:i.INIT}),(o={dispatch:b,subscribe:y,getState:h,replaceReducer:v})[r.default]=m,o}function c(e,t){var n=t&&t.type
return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function a(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r]
0,"function"==typeof e[o]&&(n[o]=e[o])}var s,u=Object.keys(n)
try{!function(e){Object.keys(e).forEach((function(t){var n=e[t]
if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.")
if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s
for(var r=!1,o={},i=0;i<u.length;i++){var a=u[i],p=n[a],f=e[a],d=p(f,t)
if(void 0===d){var l=c(a,t)
throw new Error(l)}o[a]=d,r=r||d!==f}return(r=r||u.length!==Object.keys(e).length)?o:e}}function p(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"==typeof e)return p(e,t)
if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?')
var n={}
for(var r in e){var o=e[r]
"function"==typeof o&&(n[r]=p(o,t))}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e)
return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?l(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}))
return h({},n,{dispatch:r=y.apply(void 0,i)(n.dispatch)})}}}},QLaP:function(e,t,n){"use strict"
e.exports=function(e,t,n,r,o,i,s,u){if(!e){var c
if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var a=[n,r,o,i,s,u],p=0;(c=new Error(t.replace(/%s/g,(function(){return a[p++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},TOwV:function(e,t,n){"use strict"
e.exports=n("qT12")},dI71:function(e,t,n){"use strict"
function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},qT12:function(e,t,n){"use strict"
var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,a=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,d=r?Symbol.for("react.concurrent_mode"):60111,l=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,w=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119
function S(e){if("object"==typeof e&&null!==e){var t=e.$$typeof
switch(t){case o:switch(e=e.type){case f:case d:case s:case c:case u:case h:return e
default:switch(e=e&&e.$$typeof){case p:case l:case v:case b:case a:return e
default:return t}}case i:return t}}}function P(e){return S(e)===d}t.AsyncMode=f,t.ConcurrentMode=d,t.ContextConsumer=p,t.ContextProvider=a,t.Element=o,t.ForwardRef=l,t.Fragment=s,t.Lazy=v,t.Memo=b,t.Portal=i,t.Profiler=c,t.StrictMode=u,t.Suspense=h,t.isAsyncMode=function(e){return P(e)||S(e)===f},t.isConcurrentMode=P,t.isContextConsumer=function(e){return S(e)===p},t.isContextProvider=function(e){return S(e)===a},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===l},t.isFragment=function(e){return S(e)===s},t.isLazy=function(e){return S(e)===v},t.isMemo=function(e){return S(e)===b},t.isPortal=function(e){return S(e)===i},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===u},t.isSuspense=function(e){return S(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===s||e===d||e===c||e===u||e===h||e===y||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===a||e.$$typeof===p||e.$$typeof===l||e.$$typeof===w||e.$$typeof===O||e.$$typeof===g||e.$$typeof===m)},t.typeOf=S},sINF:function(e,t,n){"use strict"
function r(e){return function(t){var n=t.dispatch,r=t.getState
return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}n.r(t)
var o=r()
o.withExtraArgument=r,t.default=o},wx14:function(e,t,n){"use strict"
function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}}])

//# sourceMappingURL=19-c-adc1d71d40.js.map