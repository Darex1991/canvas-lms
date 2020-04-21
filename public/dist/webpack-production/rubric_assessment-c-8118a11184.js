(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[492],{HMVb:function(t,e,n){"use strict"
n.d(e,"a",(function(){return l}))
var r=n("ODXe"),i=n("i/8D"),o=n("DUTp"),a=n("IPIv"),s={}
function u(t,e){if(!i.a)return 16
var n=t||Object(o.a)(t).documentElement
if(!e&&s[n])return s[n]
var r=parseInt(Object(a.a)(n).getPropertyValue("font-size"))
return s[n]=r,r}var c=n("CyAq")
function l(t,e){var n=e||document.body
if(!t||"number"==typeof t)return t
var i=Object(c.a)(t),o=Object(r.a)(i,2),a=o[0],s=o[1]
return"rem"===s?a*u():"em"===s?a*u(n):a}},HbFp:function(t,e,n){"use strict"
var r=n("qJBq"),i=n.n(r),o=n("pQTu")
const a={_parseNumber:i.a,parse(t){if(null==t)return NaN
if("number"==typeof t)return t
let e=a._parseNumber(t.toString(),{thousands:o.default.lookup("number.format.delimiter"),decimal:o.default.lookup("number.format.separator")})
return isNaN(e)&&(e=a._parseNumber(t)),t.toString().match(/e/)&&isNaN(e)&&(e=parseFloat(t)),e},validate:t=>!isNaN(a.parse(t))}
e.a=a},OjvO:function(t,e,n){"use strict"
n.r(e)
var r=n("An8g"),i=(n("q1tI"),n("i8i4")),o=n.n(i),a=n("N0c5"),s=n("PxBm"),u=n("3lLS")
n.n(u)()(()=>{const t=document.querySelectorAll(".react_rubric_container")
Array.prototype.forEach.call(t,t=>{const e=(n=t.dataset.rubricId,ENV.rubrics?ENV.rubrics.find(t=>t.id===n):null)
var n
const i=(t=>ENV.rubric_assessments?ENV.rubric_assessments.find(e=>e.id===t):null)(t.dataset.rubricAssessmentId)
o.a.render(Object(r.a)(a.a,{rubric:e,rubricAssessment:Object(s.a)(e,i||{}),rubricAssociation:i.rubric_association,customRatings:ENV.outcome_proficiency?ENV.outcome_proficiency.ratings:[],flexWidth:ENV.gradebook_non_scoring_rubrics_enabled}),t)})})},RhCJ:function(t,e,n){"use strict"
function r(t,e,n){if("input"===t.as){if("children"===e&&t.children||null==t.value)return new Error("Prop `value` and not `children` must be supplied if `".concat(n,' as="input"`'))}else{if("value"===e&&null!=t.value)return new Error("Prop `children` and not `value` must be supplied unless `".concat(n,' as="input"`'))
if(!t.children)return new Error("Prop `children` should be supplied unless `".concat(n,' as="input"`.'))}}n.d(e,"a",(function(){return r}))},gCYW:function(t,e,n){"use strict"
n.d(e,"a",(function(){return s}))
var r=n("QF4Q"),i=n("i/8D"),o=n("EgqM"),a=n("DUTp")
function s(t){var e={top:0,left:0,height:0,width:0}
if(!i.a)return e
var n=Object(r.a)(t)
if(!n)return e
if(n===window)return{left:window.pageXOffset,top:window.pageYOffset,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth+window.pageXOffset,bottom:window.innerHeight+window.pageYOffset}
var u=t===document?document:Object(a.a)(n),c=u&&u.documentElement
if(!c||!Object(o.a)(c,n))return e
var l,f=n.getBoundingClientRect()
for(l in f)e[l]=f[l]
if(u!==document){var d=u.defaultView.frameElement
if(d){var p=s(d)
e.top+=p.top,e.bottom+=p.top,e.left+=p.left,e.right+=p.left}}return{top:e.top+(window.pageYOffset||c.scrollTop)-(c.clientTop||0),left:e.left+(window.pageXOffset||c.scrollLeft)-(c.clientLeft||0),width:(null==e.width?n.offsetWidth:e.width)||0,height:(null==e.height?n.offsetHeight:e.height)||0,right:u.body.clientWidth-e.width-e.left,bottom:u.body.clientHeight-e.height-e.top}}},qJBq:function(t,e){(function(){var e,n,r
r=[],e={},t.exports=n=function(t,n,i){var o,a,s,u,c,l,f,d
if(null==i&&(i=!0),"string"==typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
d=n[0],o=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
d=n[0],o=n[1]}else d=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||e.thousands,o=(null!=n?n.decimal:void 0)||e.decimal
return null==(c=r[l=""+d+o+i])&&(s=i?3:1,c=r[l]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+d+"\\d{"+s+",3})+)|\\d*))(?:\\"+o+"(\\d*))?\\s*$")),null==(f=t.match(c))||3!==f.length?NaN:(u=f[1].replace(new RegExp("\\"+d,"g"),""),a=f[2],parseFloat(u+"."+a))},t.exports.setOptions=function(t){var n,r
for(n in t)r=t[n],e[n]=r},t.exports.factoryReset=function(){e={thousands:",",decimal:"."}},t.exports.withOptions=function(t,e){return null==e&&(e=!0),function(r){return n(r,t,e)}},t.exports.factoryReset()}).call(this)}}])

//# sourceMappingURL=rubric_assessment-c-8118a11184.js.map