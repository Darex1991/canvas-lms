(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[266],{HMVb:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r=n("ODXe"),i=n("i/8D"),o=n("DUTp"),a=n("IPIv"),c={}
function s(e,t){if(!i.a)return 16
var n=e||Object(o.a)(e).documentElement
if(!t&&c[n])return c[n]
var r=parseInt(Object(a.a)(n).getPropertyValue("font-size"))
return c[n]=r,r}var u=n("CyAq")
function d(e,t){var n=t||document.body
if(!e||"number"==typeof e)return e
var i=Object(u.a)(e),o=Object(r.a)(i,2),a=o[0],c=o[1]
return"rem"===c?a*s():"em"===c?a*s(n):a}},QQEz:function(e,t,n){e.exports=n.p+"d16d07114f2527a307ee9e0fcda7b591.svg"},YUqi:function(e,t,n){"use strict"
n.r(t)
var r=n("An8g"),i=n("ouhR"),o=n.n(i),a=n("lOrd"),c=n("xdHl"),s=n("h4VS"),u=n("lTCR"),d=n.n(u)
function l(){const e=Object(s.a)(["\n  query GetNotificationPreferences($courseId: ID!) {\n    course(id: $courseId) {\n      notificationPreferencesEnabled\n    }\n  }\n"])
return l=function(){return e},e}const f=d()(l())
n("17x9")
var h=n("SlHZ"),p=n("vbcS"),b=n("QQEz"),g=n.n(b),v=n("q1tI")
function m(){const e=Object(s.a)(["\n  mutation UpdateCourseNotificationPreferences($courseId: ID!, $enabled: Boolean!) {\n    updateNotificationPreferences(\n      input: {contextType: Course, courseId: $courseId, enabled: $enabled}\n    ) {\n      course {\n        notificationPreferencesEnabled\n      }\n      errors {\n        message\n      }\n    }\n  }\n"])
return m=function(){return e},e}const O=d()(m())
var j=n("9lnB"),w=n("TstA"),y=n("msMH"),E=n("ZbPE")
class x extends v.Component{constructor(...e){super(...e),this.state={enabled:this.props.enabled},this.updateNotificationPreferences=e=>{this.setState(t=>(e({variables:{courseId:this.props.courseId,enabled:!t.enabled}}),{enabled:!t.enabled}))},this.renderCourseNotificationSettings=e=>Object(r.a)(w.a,{direction:"column"},void 0,Object(r.a)(w.a.Item,{},void 0,Object(r.a)(y.a,{},void 0,h.a.t("Course Notification Settings"))),Object(r.a)(w.a.Item,{margin:"large 0 small 0",padding:"xx-small"},void 0,Object(r.a)(j.a,{"data-testid":"enable-notifications-toggle",label:h.a.t("Enable Notifications"),size:"small",variant:"toggle",checked:this.state.enabled,onChange:()=>this.updateNotificationPreferences(e)})),Object(r.a)(w.a.Item,{},void 0,Object(r.a)(E.a,{},void 0,this.state.enabled?h.a.t("You are currently receiving notifications for this course. To disable course notifications, use the toggle above."):h.a.t("You will not receive any course notifications at this time. To enable course notifications, use the toggle above."))),Object(r.a)(w.a.Item,{margin:"large 0 medium 0"},void 0,Object(r.a)("div",{style:{textAlign:"center"}},void 0,Object(r.a)(E.a,{size:"large"},void 0,h.a.t("Granular course notification settings will be configurable here in the future.")))),Object(r.a)(w.a.Item,{},void 0,Object(r.a)("div",{style:{textAlign:"center"}},void 0,Object(r.a)("img",{alt:"",src:g.a,style:{width:"200px"}}))))}handleUpdateComplete(e){e.updateNotificationPreferences.errors?(this.context.setOnFailure(h.a.t("Failed to update course notification settings")),this.setState(e=>({enabled:!e.enabled}))):this.context.setOnSuccess(h.a.t("Course notification settings updated"))}render(){return Object(r.a)(p.a,{mutation:O,onCompleted:e=>this.handleUpdateComplete(e),onError:()=>this.context.setOnFailure(h.a.t("Failed to update course notification settings"))},void 0,e=>this.renderCourseNotificationSettings(e))}}x.contextType=a.a
var I=n("RtEy"),S=n.n(I),C=n("z3Sh"),A=n("duz8"),N=n("ttZb"),P=Object(r.a)(A.a,{})
function T(e){var t
const n=Object(N.b)(f,{variables:{courseId:e.courseId}}),i=n.loading,o=n.error,a=n.data
return i?P:o?Object(r.a)(C.a,{imageUrl:S.a,errorSubject:h.a.t("Course Notification Settings initial query error"),errorCategory:h.a.t("Course Notification Settings Error Page")}):Object(r.a)(x,{courseId:e.courseId,enabled:null==a||null===(t=a.course)||void 0===t?void 0:t.notificationPreferencesEnabled})}const k=Object(c.c)()
function q(){return Object(r.a)(c.a,{client:k},void 0,Object(r.a)(a.b,{},void 0,Object(r.a)(T,{courseId:ENV.COURSE.id})))}var z=n("i8i4"),R=n.n(z),D=Object(r.a)(q,{})
o()(()=>{R.a.render(D,o()("<div/>").appendTo("#content")[0])})},ZELe:function(e,t,n){"use strict"
function r(e){return function(t,n,r){var i=t[n]
if(null==i)return new Error("The prop `".concat(n,"` is marked as required in `").concat(r,"`, but its value is `").concat(i,"`"))
for(var o=arguments.length,a=new Array(o>3?o-3:0),c=3;c<o;c++)a[c-3]=arguments[c]
return e.apply(void 0,[t,n,r].concat(a))}}n.d(t,"a",(function(){return r}))},dpqJ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n("q1tI"),i=n.n(r),o=n("ZELe"),a={oneOf:function(e){function t(t,n,r){for(var o=i.a.Children.toArray(t[n]),a=e.map((function(e){return e?c(e):e})),s=0;s<o.length;s++){var u=o[s]
if(u&&u.type){var d=c(u.type)
if(a.indexOf(d)<0)return new Error("Expected one of ".concat(a.join(", ")," in ").concat(r," but found '").concat(d,"'"))}else if(u)return new Error("Expected one of ".concat(a.join(", ")," in ").concat(r," but found an element with unknown type: ").concat(u))}}return t.isRequired=Object(o.a)(t),t},oneOfEach:function(e){return function(t,n,r){for(var o=i.a.Children.toArray(t[n]),a={},s=e.map((function(e){var t=c(e)
return a[t]=0,t})),u=0;u<o.length;u++){var d=o[u]
if(d&&d.type){var l=c(d.type)
if(s.indexOf(l)<0)return new Error("Expected one of ".concat(s.join(", ")," in ").concat(r," but found '").concat(l,"'"))
a[l]=(a[l]||0)+1}else if(d)return new Error("Expected one of ".concat(s.join(", ")," in ").concat(r," but found an element of unknown type: ").concat(d))}var f=[]
if(Object.keys(a).forEach((function(e){a[e]>1&&f.push("".concat(a[e]," children of type ").concat(e)),0===a[e]&&f.push("0 children of type ".concat(e))})),f.length>0)return new Error("Expected exactly one of each ".concat(s.join(", ")," in ").concat(r," but found:\n  ").concat(f.join("\n")))}},enforceOrder:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
function r(e,t){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1
return!0}function a(e,t){return t.map((function(t){return s(e,t)})).join("\n\n")}function s(e,t){var n=t.map((function(e){return e?c(e):"??"})).map((function(e){return"  <".concat(e," />")})).join("\n")
return"<".concat(e,">\n").concat(n,"\n</").concat(e,">")}function u(e,n,o){for(var u=i.a.Children.toArray(e[n]).map((function(e){return e&&e.type?c(e.type):e?null:void 0})),d=0;d<t.length;d++){if(r(u,t[d].map((function(e){return e?c(e):"??"}))))return}return new Error("Expected children of ".concat(o," in one of the following formats:\n  ").concat(a(o,t),"\n\n\n  Instead of:\n  ").concat(s(o,u)))}return u.isRequired=Object(o.a)(u),u}},c=function(e){return"string"==typeof e?e:e.displayName||e.name}},duz8:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n("An8g"),i=n("SlHZ"),o=(n("q1tI"),n("VTJ5")),a=n("S4Kx")
function c(){return Object(r.a)(a.a,{as:"div",height:"100%",width:"100%",textAlign:"center"},void 0,Object(r.a)(o.a,{renderTitle:i.a.t("Loading"),size:"large",margin:"0 0 0 medium"}))}},gCYW:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n("QF4Q"),i=n("i/8D"),o=n("EgqM"),a=n("DUTp")
function c(e){var t={top:0,left:0,height:0,width:0}
if(!i.a)return t
var n=Object(r.a)(e)
if(!n)return t
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var s=e===document?document:Object(a.a)(n),u=s&&s.documentElement
if(!u||!Object(o.a)(u,n))return t
var d,l=n.getBoundingClientRect()
for(d in l)t[d]=l[d]
if(s!==document){var f=s.defaultView.frameElement
if(f){var h=c(f)
t.top+=h.top,t.bottom+=h.top,t.left+=h.left,t.right+=h.left}}return{top:t.top+(window.pageYOffset||u.scrollTop)-(u.clientTop||0),left:t.left+(window.pageXOffset||u.scrollLeft)-(u.clientLeft||0),width:(null==t.width?n.offsetWidth:t.width)||0,height:(null==t.height?n.offsetHeight:t.height)||0,right:s.body.clientWidth-t.width-t.left,bottom:s.body.clientHeight-t.height-t.top}}},lOrd:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}))
var r=n("An8g"),i=n("L+/K"),o=n("q1tI"),a=n.n(o)
const c=a.a.createContext({setOnFailure:{},setOnSuccess:{}})
class s extends a.a.Component{constructor(...e){super(...e),this.state={alertStatus:null,alertMessage:null,key:0},this.closeAlert=()=>{this.setState({alertMessage:null,alertStatus:null})},this.setOnFailure=e=>{this.setState(t=>({alertMessage:e,alertStatus:"error",key:t.key+1}))},this.setOnSuccess=e=>{this.setState(t=>({alertMessage:e,alertStatus:"success",key:t.key+1}))}}renderAlert(){return"success"===this.state.alertStatus?Object(r.a)(i.a,{liveRegion:()=>document.getElementById("flash_screenreader_holder"),onDismiss:this.closeAlert,screenReaderOnly:!0,timeout:5e3},void 0,this.state.alertMessage):"error"===this.state.alertStatus?Object(r.a)(i.a,{liveRegion:()=>document.getElementById("flash_screenreader_holder"),margin:"small",onDismiss:this.closeAlert,timeout:5e3,variant:"error"},void 0,this.state.alertMessage):void 0}render(){return Object(r.a)(c.Provider,{value:{setOnFailure:this.setOnFailure,setOnSuccess:this.setOnSuccess}},void 0,this.state.alertStatus&&Object(r.a)("div",{style:{left:"300px",maxWidth:"1125px",position:"fixed",right:"120px",top:"80px",zIndex:"101"}},this.state.key,this.renderAlert()),this.props.children)}}}}])

//# sourceMappingURL=course_notification_settings_show-c-e29ce28b8d.js.map