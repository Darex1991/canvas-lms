(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[293],{"+80P":function(e,t,n){"use strict"
function r(e){var t=Array.prototype.slice.call(arguments,1)
return t.forEach((function(t){t&&Object.keys(t).forEach((function(n){e[n]=t[n]}))})),e}function i(e){return Object.prototype.toString.call(e)}function o(e){return"[object Function]"===i(e)}function a(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var s={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1}
var c={"http:":{validate:function(e,t,n){var r=e.slice(t)
return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,t,n){var r=e.slice(t)
return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?t>=3&&":"===e[t-3]||t>=3&&"/"===e[t-3]?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(e,t,n){var r=e.slice(t)
return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},l="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|")
function u(e){var t=e.re=n("sRdV")(e.__opts__),r=e.__tlds__.slice()
function s(e){return e.replace("%TLDS%",t.src_tlds)}e.onCompile(),e.__tlds_replaced__||r.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),r.push(t.src_xn),t.src_tlds=r.join("|"),t.email_fuzzy=RegExp(s(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(s(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(s(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(s(t.tpl_host_fuzzy_test),"i")
var c=[]
function l(e,t){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+t)}e.__compiled__={},Object.keys(e.__schemas__).forEach((function(t){var n=e.__schemas__[t]
if(null!==n){var r={validate:null,link:null}
if(e.__compiled__[t]=r,"[object Object]"===i(n))return!function(e){return"[object RegExp]"===i(e)}(n.validate)?o(n.validate)?r.validate=n.validate:l(t,n):r.validate=function(e){return function(t,n){var r=t.slice(n)
return e.test(r)?r.match(e)[0].length:0}}(n.validate),void(o(n.normalize)?r.normalize=n.normalize:n.normalize?l(t,n):r.normalize=function(e,t){t.normalize(e)})
!function(e){return"[object String]"===i(e)}(n)?l(t,n):c.push(t)}})),c.forEach((function(t){e.__compiled__[e.__schemas__[t]]&&(e.__compiled__[t].validate=e.__compiled__[e.__schemas__[t]].validate,e.__compiled__[t].normalize=e.__compiled__[e.__schemas__[t]].normalize)})),e.__compiled__[""]={validate:null,normalize:function(e,t){t.normalize(e)}}
var u=Object.keys(e.__compiled__).filter((function(t){return t.length>0&&e.__compiled__[t]})).map(a).join("|")
e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+u+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+u+")","ig"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),function(e){e.__index__=-1,e.__text_cache__=""}(e)}function f(e,t){var n=e.__index__,r=e.__last_index__,i=e.__text_cache__.slice(n,r)
this.schema=e.__schema__.toLowerCase(),this.index=n+t,this.lastIndex=r+t,this.raw=i,this.text=i,this.url=i}function p(e,t){var n=new f(e,t)
return e.__compiled__[n.schema].normalize(n,e),n}function d(e,t){if(!(this instanceof d))return new d(e,t)
var n
t||(n=e,Object.keys(n||{}).reduce((function(e,t){return e||s.hasOwnProperty(t)}),!1)&&(t=e,e={})),this.__opts__=r({},s,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=r({},c,e),this.__compiled__={},this.__tlds__=l,this.__tlds_replaced__=!1,this.re={},u(this)}d.prototype.add=function(e,t){return this.__schemas__[e]=t,u(this),this},d.prototype.set=function(e){return this.__opts__=r(this.__opts__,e),this},d.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1
var t,n,r,i,o,a,s,c
if(this.re.schema_test.test(e))for((s=this.re.schema_search).lastIndex=0;null!==(t=s.exec(e));)if(i=this.testSchemaAt(e,t[2],s.lastIndex)){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i
break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||c<this.__index__)&&null!==(n=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(o=n.index+n[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=n.index+n[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&e.indexOf("@")>=0&&null!==(r=e.match(this.re.email_fuzzy))&&(o=r.index+r[1].length,a=r.index+r[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a)),this.__index__>=0},d.prototype.pretest=function(e){return this.re.pretest.test(e)},d.prototype.testSchemaAt=function(e,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,n,this):0},d.prototype.match=function(e){var t=0,n=[]
this.__index__>=0&&this.__text_cache__===e&&(n.push(p(this,t)),t=this.__last_index__)
for(var r=t?e.slice(t):e;this.test(r);)n.push(p(this,t)),r=r.slice(this.__last_index__),t+=this.__last_index__
return n.length?n:null},d.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter((function(e,t,n){return e!==n[t-1]})).reverse(),u(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,u(this),this)},d.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},d.prototype.onCompile=function(){},e.exports=d},"+QRC":function(e,t,n){"use strict"
var r=n("E9nw"),i={"text/plain":"Text","text/html":"Url",default:"Text"}
e.exports=function(e,t){var n,o,a,s,c,l,u=!1
t||(t={}),n=t.debug||!1
try{if(a=r(),s=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData()
var o=i[t.format]||i.default
window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e)
t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful")
u=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff")
try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C"
return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),l&&document.body.removeChild(l),a()}return u}},"+YfQ":function(e,t,n){"use strict"
var r,i=(r=n("VrN/"))&&r.__esModule?r:{default:r},o=n("JCIs")
function a(e,t){var n=e.levels
return(n&&0!==n.length?n[n.length-1]-(this.electricInput.test(t)?1:0):e.indentLevel)*this.config.indentUnit}i.default.defineMode("graphql-variables",(function(e){var t=(0,o.onlineParser)({eatWhitespace:function(e){return e.eatSpace()},lexRules:s,parseRules:c,editorConfig:{tabSize:e.tabSize}})
return{config:e,startState:t.startState,token:t.token,indent:a,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}}))
var s={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},c={Document:[(0,o.p)("{"),(0,o.list)("Variable",(0,o.opt)((0,o.p)(","))),(0,o.p)("}")],Variable:[l("variable"),(0,o.p)(":"),"Value"],Value:function(e){switch(e.kind){case"Number":return"NumberValue"
case"String":return"StringValue"
case"Punctuation":switch(e.value){case"[":return"ListValue"
case"{":return"ObjectValue"}return null
case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue"
case"null":return"NullValue"}return null}},NumberValue:[(0,o.t)("Number","number")],StringValue:[(0,o.t)("String","string")],BooleanValue:[(0,o.t)("Keyword","builtin")],NullValue:[(0,o.t)("Keyword","keyword")],ListValue:[(0,o.p)("["),(0,o.list)("Value",(0,o.opt)((0,o.p)(","))),(0,o.p)("]")],ObjectValue:[(0,o.p)("{"),(0,o.list)("ObjectField",(0,o.opt)((0,o.p)(","))),(0,o.p)("}")],ObjectField:[l("attribute"),(0,o.p)(":"),"Value"]}
function l(e){return{style:e,match:function(e){return"String"===e.kind},update:function(e,t){e.name=t.value.slice(1,-1)}}}},"+zUi":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n("dWS+")
function i(e){return"There can be only one ".concat(e," type in schema.")}function o(e){return"Type for ".concat(e," already defined in the schema. It cannot be redefined.")}function a(e){var t=e.getSchema(),n=Object.create(null),a=t?{query:t.getQueryType(),mutation:t.getMutationType(),subscription:t.getSubscriptionType()}:{}
return{SchemaDefinition:s,SchemaExtension:s}
function s(t){if(t.operationTypes)for(var s=0,c=t.operationTypes||[];s<c.length;s++){var l=c[s],u=l.operation,f=n[u]
a[u]?e.reportError(new r.a(o(u),l)):f?e.reportError(new r.a(i(u),[f,l])):n[u]=l}return!1}}},"/C/i":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=Object.create(null)
return{Field:function(){t=Object.create(null)},Directive:function(){t=Object.create(null)},Argument:function(n){var i=n.name.value
return t[i]?e.reportError(new r.a(function(e){return'There can be only one argument named "'.concat(e,'".')}(i),[t[i],n.name])):t[i]=n.name,!1}}}},"/f6Q":function(e,t,n){"use strict"
var r=n("AGgm").isSpace
e.exports=function(e,t,n,i){var o,a,s,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t]
if(e.sCount[t]-e.blkIndent>=4)return!1
if(42!==(o=e.src.charCodeAt(l++))&&45!==o&&95!==o)return!1
for(a=1;l<u;){if((s=e.src.charCodeAt(l++))!==o&&!r(s))return!1
s===o&&a++}return!(a<3)&&(i||(e.line=t+1,(c=e.push("hr","hr",0)).map=[t,e.line],c.markup=Array(a+1).join(String.fromCharCode(o))),!0)}},"/kEc":function(e,t,n){"use strict"
function r(e){return void 0===e||e!=e}n.d(t,"a",(function(){return r}))},"0PPW":function(e,t,n){"use strict"
var r,i=(r=n("VrN/"))&&r.__esModule?r:{default:r},o=n("IQOa")
i.default.registerHelper("hint","graphql",(function(e,t){var n=t.schema
if(n){var r=e.getCursor(),a=e.getTokenAt(r),s=(0,o.getAutocompleteSuggestions)(n,e.getValue(),r,a),c=null!==a.type&&/"|\w/.test(a.string[0])?a.start:a.end,l={list:s.map((function(e){return{text:e.label,type:n.getType(e.detail),description:e.documentation,isDeprecated:e.isDeprecated,deprecationReason:e.deprecationReason}})),from:{line:r.line,column:c},to:{line:r.line,column:a.end}}
return l&&l.list&&l.list.length>0&&(l.from=i.default.Pos(l.from.line,l.from.column),l.to=i.default.Pos(l.to.line,l.to.column),i.default.signal(e,"hasCompletion",e,l,a)),l}}))},"0SNI":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getLeft=function(e){var t=0,n=e
for(;n.offsetParent;)t+=n.offsetLeft,n=n.offsetParent
return t},t.getTop=function(e){var t=0,n=e
for(;n.offsetParent;)t+=n.offsetTop,n=n.offsetParent
return t}},"0xor":function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("dWS+"),i=n("dQau"),o=n("axIb"),a=n("umOc")
function s(e){return{VariableDefinition:function(t){var n=Object(a.a)(e.getSchema(),t.type)
if(n&&!Object(o.G)(n)){var s=t.variable.name.value
e.reportError(new r.a(function(e,t){return'Variable "$'.concat(e,'" cannot be non-input type "').concat(t,'".')}(s,Object(i.a)(t.type)),t.type))}}}}},"1/U3":function(e,t,n){"use strict"
var r=Array.prototype.find?function(e,t){return Array.prototype.find.call(e,t)}:function(e,t){for(var n=0;n<e.length;n++){var r=e[n]
if(t(r))return r}}
t.a=r},"10sW":function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("pv/G"),i=n("T95z"),o=n("dWS+"),a=n("Xizt")
function s(e){for(var t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),s=Object.create(null),l=0,u=e.getDocument().definitions;l<u.length;l++){var f=u[l]
Object(a.d)(f)&&(s[f.name.value]=!0)}var p=Object.keys(n).concat(Object.keys(s))
return{NamedType:function(t,l,u,f,d){var h,m=t.name.value
if(!n[m]&&!s[m]){var g=d[2]||u,v=(h=g,Boolean(h&&!Array.isArray(h)&&(Object(a.g)(h)||Object(a.h)(h))))
if(v&&function(e){return-1!==c.indexOf(e)}(m))return
var y=Object(i.a)(m,v?c.concat(p):p)
e.reportError(new o.a(function(e,t){return'Unknown type "'.concat(e,'".')+Object(r.a)(t.map((function(e){return'"'.concat(e,'"')})))}(m,y),t))}}}}var c=n("19Hc").g.map((function(e){return e.name}))},"19Hc":function(e,t,n){"use strict"
n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"g",(function(){return m})),n.d(t,"f",(function(){return g}))
var r=Number.isFinite||function(e){return"number"==typeof e&&isFinite(e)},i=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},o=n("rWdj"),a=n("zpYP"),s=n("/jXB"),c=n("axIb")
var l=new c.g({name:"Int",description:"The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.",serialize:function(e){if("boolean"==typeof e)return e?1:0
var t=e
if("string"==typeof e&&""!==e&&(t=Number(e)),!i(t))throw new TypeError("Int cannot represent non-integer value: ".concat(Object(o.a)(e)))
if(t>2147483647||t<-2147483648)throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(Object(o.a)(e)))
return t},parseValue:function(e){if(!i(e))throw new TypeError("Int cannot represent non-integer value: ".concat(Object(o.a)(e)))
if(e>2147483647||e<-2147483648)throw new TypeError("Int cannot represent non 32-bit signed integer value: ".concat(Object(o.a)(e)))
return e},parseLiteral:function(e){if(e.kind===s.Kind.INT){var t=parseInt(e.value,10)
if(t<=2147483647&&t>=-2147483648)return t}}})
var u=new c.g({name:"Float",description:"The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).",serialize:function(e){if("boolean"==typeof e)return e?1:0
var t=e
if("string"==typeof e&&""!==e&&(t=Number(e)),!r(t))throw new TypeError("Float cannot represent non numeric value: ".concat(Object(o.a)(e)))
return t},parseValue:function(e){if(!r(e))throw new TypeError("Float cannot represent non numeric value: ".concat(Object(o.a)(e)))
return e},parseLiteral:function(e){return e.kind===s.Kind.FLOAT||e.kind===s.Kind.INT?parseFloat(e.value):void 0}})
function f(e){if(Object(a.a)(e)){if("function"==typeof e.valueOf){var t=e.valueOf()
if(!Object(a.a)(t))return t}if("function"==typeof e.toJSON)return e.toJSON()}return e}var p=new c.g({name:"String",description:"The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",serialize:function(e){var t=f(e)
if("string"==typeof t)return t
if("boolean"==typeof t)return t?"true":"false"
if(r(t))return t.toString()
throw new TypeError("String cannot represent value: ".concat(Object(o.a)(e)))},parseValue:function(e){if("string"!=typeof e)throw new TypeError("String cannot represent a non string value: ".concat(Object(o.a)(e)))
return e},parseLiteral:function(e){return e.kind===s.Kind.STRING?e.value:void 0}})
var d=new c.g({name:"Boolean",description:"The `Boolean` scalar type represents `true` or `false`.",serialize:function(e){if("boolean"==typeof e)return e
if(r(e))return 0!==e
throw new TypeError("Boolean cannot represent a non boolean value: ".concat(Object(o.a)(e)))},parseValue:function(e){if("boolean"!=typeof e)throw new TypeError("Boolean cannot represent a non boolean value: ".concat(Object(o.a)(e)))
return e},parseLiteral:function(e){return e.kind===s.Kind.BOOLEAN?e.value:void 0}})
var h=new c.g({name:"ID",description:'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',serialize:function(e){var t=f(e)
if("string"==typeof t)return t
if(i(t))return String(t)
throw new TypeError("ID cannot represent value: ".concat(Object(o.a)(e)))},parseValue:function(e){if("string"==typeof e)return e
if(i(e))return e.toString()
throw new TypeError("ID cannot represent value: ".concat(Object(o.a)(e)))},parseLiteral:function(e){return e.kind===s.Kind.STRING||e.kind===s.Kind.INT?e.value:void 0}}),m=Object.freeze([p,l,u,d,h])
function g(e){return Object(c.R)(e)&&m.some((function(t){var n=t.name
return e.name===n}))}},"1M3H":function(e,t,n){"use strict"
e.exports=n("CK61")},"1QEH":function(e,t,n){"use strict"
var r=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))}
t.a=r},"1dGX":function(e,t,n){"use strict"
t.Any=n("y8fO"),t.Cc=n("p7ys"),t.Cf=n("b9EY"),t.P=n("fKCf"),t.Z=n("T8I8")},"1gqn":function(e,t){e.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},"1nBO":function(e,t,n){"use strict"
var r=n("AGgm").normalizeReference,i=n("AGgm").isSpace
e.exports=function(e,t,n,o){var a,s,c,l,u,f,p,d,h,m,g,v,y,b,O,w,x=0,k=e.bMarks[t]+e.tShift[t],E=e.eMarks[t],C=t+1
if(e.sCount[t]-e.blkIndent>=4)return!1
if(91!==e.src.charCodeAt(k))return!1
for(;++k<E;)if(93===e.src.charCodeAt(k)&&92!==e.src.charCodeAt(k-1)){if(k+1===E)return!1
if(58!==e.src.charCodeAt(k+1))return!1
break}for(l=e.lineMax,O=e.md.block.ruler.getRules("reference"),m=e.parentType,e.parentType="reference";C<l&&!e.isEmpty(C);C++)if(!(e.sCount[C]-e.blkIndent>3||e.sCount[C]<0)){for(b=!1,f=0,p=O.length;f<p;f++)if(O[f](e,C,l,!0)){b=!0
break}if(b)break}for(E=(y=e.getLines(t,C,e.blkIndent,!1).trim()).length,k=1;k<E;k++){if(91===(a=y.charCodeAt(k)))return!1
if(93===a){h=k
break}(10===a||92===a&&++k<E&&10===y.charCodeAt(k))&&x++}if(h<0||58!==y.charCodeAt(h+1))return!1
for(k=h+2;k<E;k++)if(10===(a=y.charCodeAt(k)))x++
else if(!i(a))break
if(!(g=e.md.helpers.parseLinkDestination(y,k,E)).ok)return!1
if(u=e.md.normalizeLink(g.str),!e.md.validateLink(u))return!1
for(s=k=g.pos,c=x+=g.lines,v=k;k<E;k++)if(10===(a=y.charCodeAt(k)))x++
else if(!i(a))break
for(g=e.md.helpers.parseLinkTitle(y,k,E),k<E&&v!==k&&g.ok?(w=g.str,k=g.pos,x+=g.lines):(w="",k=s,x=c);k<E&&(a=y.charCodeAt(k),i(a));)k++
if(k<E&&10!==y.charCodeAt(k)&&w)for(w="",k=s,x=c;k<E&&(a=y.charCodeAt(k),i(a));)k++
return!(k<E&&10!==y.charCodeAt(k))&&(!!(d=r(y.slice(1,h)))&&(o||(void 0===e.env.references&&(e.env.references={}),void 0===e.env.references[d]&&(e.env.references[d]={title:w,href:u}),e.parentType=m,e.line=t+x+1),!0))}},"2/d+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a}))
var r=n("rWdj"),i=n("dWS+"),o=n("axIb")
function a(e){return{Field:function(t){var n=e.getType(),a=t.selectionSet
n&&(Object(o.I)(Object(o.A)(n))?a&&e.reportError(new i.a(function(e,t){return'Field "'.concat(e,'" must not have a selection since type "').concat(t,'" has no subfields.')}(t.name.value,Object(r.a)(n)),a)):a||e.reportError(new i.a(function(e,t){return'Field "'.concat(e,'" of type "').concat(t,'" must have a selection of subfields. Did you mean "').concat(e,' { ... }"?')}(t.name.value,Object(r.a)(n)),t)))}}}},"2C6G":function(e,t,n){"use strict"
function r(e,t){if(!Boolean(e))throw new Error(t||"Unexpected invariant triggered")}n.d(t,"a",(function(){return r}))},"2KYT":function(e,t,n){"use strict"
e.exports.encode=n("xGQ6"),e.exports.decode=n("jzd5"),e.exports.format=n("Q+CF"),e.exports.parse=n("2l+C")},"2Rkc":function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("dWS+"),i=n("dQau"),o=n("axIb"),a=n("umOc")
function s(e){return{InlineFragment:function(t){var n=t.typeCondition
if(n){var s=Object(a.a)(e.getSchema(),n)
s&&!Object(o.D)(s)&&e.reportError(new r.a(function(e){return'Fragment cannot condition on non composite type "'.concat(e,'".')}(Object(i.a)(n)),n))}},FragmentDefinition:function(t){var n=Object(a.a)(e.getSchema(),t.typeCondition)
n&&!Object(o.D)(n)&&e.reportError(new r.a(function(e,t){return'Fragment "'.concat(e,'" cannot condition on non composite type "').concat(t,'".')}(t.name.value,Object(i.a)(t.typeCondition)),t.typeCondition))}}}},"2jxP":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.GraphiQL=void 0
var r=N(n("q1tI")),i=N(n("17x9")),o=N(n("i8i4")),a=n("Tzvz"),s=N(n("+QRC")),c=n("dO1m"),l=n("huIT"),u=n("veYS"),f=n("Yl7s"),p=n("lTHs"),d=n("HzB8"),h=n("vbN3"),m=n("uezr"),g=n("5y3V"),v=n("eQbp"),y=n("Q7vz"),b=N(n("wNVd")),O=N(n("CY+F")),w=N(n("gnEv")),x=N(n("lJQM")),k=N(n("dTH/")),E=N(n("IF40")),C=n("7oSj"),T=n("0SNI"),_=n("yOgx"),S=n("kFP1")
function N(e){return e&&e.__esModule?e:{default:e}}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){M(e,t,n[t])}))}return e}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(t){function n(e){var t,r,i
if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),r=this,i=L(n).call(this,e),t=!i||"object"!==A(i)&&"function"!=typeof i?I(r):i,M(I(t),"handleClickReference",(function(e){t.setState({docExplorerOpen:!0},(function(){t.docExplorerComponent.showDocForReference(e)}))})),M(I(t),"handleRunQuery",(function(e){t._editorQueryID++
var r=t._editorQueryID,i=t.autoCompleteLeafs()||t.state.query,o=t.state.variables,a=t.state.operationName
e&&e!==a&&(a=e,t.handleEditOperationName(a))
try{t.setState({isWaitingForResponse:!0,response:null,operationName:a})
var s=t._fetchQuery(i,o,a,(function(e){r===t._editorQueryID&&t.setState({isWaitingForResponse:!1,response:n.formatResult(e)})}))
t.setState({subscription:s})}catch(e){t.setState({isWaitingForResponse:!1,response:e.message})}})),M(I(t),"handleStopQuery",(function(){var e=t.state.subscription
t.setState({isWaitingForResponse:!1,subscription:null}),e&&e.unsubscribe()})),M(I(t),"handlePrettifyQuery",(function(){var e=t.getQueryEditor()
e.setValue((0,a.print)((0,a.parse)(e.getValue())))})),M(I(t),"handleMergeQuery",(function(){var e=t.getQueryEditor(),n=e.getValue()
if(n){var r=(0,a.parse)(n)
e.setValue((0,a.print)((0,_.mergeAst)(r)))}})),M(I(t),"handleEditQuery",(0,k.default)(100,(function(e){var n=t._updateQueryFacts(e,t.state.operationName,t.state.operations,t.state.schema)
if(t.setState(j({query:e},n)),t.props.onEditQuery)return t.props.onEditQuery(e)}))),M(I(t),"handleCopyQuery",(function(){var e=t.getQueryEditor().getValue()
if(e)return(0,s.default)(e),t.props.onCopyQuery?t.props.onCopyQuery(e):void 0})),M(I(t),"_updateQueryFacts",(function(e,n,r,i){var o=(0,w.default)(i,e)
if(o){var a=(0,x.default)(r,n,o.operations),s=t.props.onEditOperationName
return s&&n!==a&&s(a),j({operationName:a},o)}})),M(I(t),"handleEditVariables",(function(e){t.setState({variables:e}),t.props.onEditVariables&&t.props.onEditVariables(e)})),M(I(t),"handleEditOperationName",(function(e){var n=t.props.onEditOperationName
n&&n(e)})),M(I(t),"handleHintInformationRender",(function(e){var n
e.addEventListener("click",t._onClickHintInformation),e.addEventListener("DOMNodeRemoved",n=function(){e.removeEventListener("DOMNodeRemoved",n),e.removeEventListener("click",t._onClickHintInformation)})})),M(I(t),"handleEditorRunQuery",(function(){t._runQueryAtCursor()})),M(I(t),"_onClickHintInformation",(function(e){if("typeName"===e.target.className){var n=e.target.innerHTML,r=t.state.schema
if(r){var i=r.getType(n)
i&&t.setState({docExplorerOpen:!0},(function(){t.docExplorerComponent.showDoc(i)}))}}})),M(I(t),"handleToggleDocs",(function(){"function"==typeof t.props.onToggleDocs&&t.props.onToggleDocs(!t.state.docExplorerOpen),t.setState({docExplorerOpen:!t.state.docExplorerOpen})})),M(I(t),"handleToggleHistory",(function(){"function"==typeof t.props.onToggleHistory&&t.props.onToggleHistory(!t.state.historyPaneOpen),t.setState({historyPaneOpen:!t.state.historyPaneOpen})})),M(I(t),"handleSelectHistoryQuery",(function(e,n,r){t.handleEditQuery(e),t.handleEditVariables(n),t.handleEditOperationName(r)})),M(I(t),"handleResizeStart",(function(e){if(t._didClickDragBar(e)){e.preventDefault()
var n=e.clientX-(0,T.getLeft)(e.target),r=function(e){if(0===e.buttons)return i()
var r=o.default.findDOMNode(t.editorBarComponent),a=e.clientX-(0,T.getLeft)(r)-n,s=r.clientWidth-a
t.setState({editorFlex:a/s})},i=function(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",i),r=null,i=null}
document.addEventListener("mousemove",r),document.addEventListener("mouseup",i)}})),M(I(t),"handleResetResize",(function(){t.setState({editorFlex:1})})),M(I(t),"handleDocsResizeStart",(function(e){e.preventDefault()
var n=t.state.docExplorerWidth,r=e.clientX-(0,T.getLeft)(e.target),i=function(e){if(0===e.buttons)return a()
var n=o.default.findDOMNode(I(t)),i=e.clientX-(0,T.getLeft)(n)-r,s=n.clientWidth-i
s<100?t.setState({docExplorerOpen:!1}):t.setState({docExplorerOpen:!0,docExplorerWidth:Math.min(s,650)})},a=function(){t.state.docExplorerOpen||t.setState({docExplorerWidth:n}),document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",a),i=null,a=null}
document.addEventListener("mousemove",i),document.addEventListener("mouseup",a)})),M(I(t),"handleDocsResetResize",(function(){t.setState({docExplorerWidth:350})})),M(I(t),"handleVariableResizeStart",(function(e){e.preventDefault()
var n=!1,r=t.state.variableEditorOpen,i=t.state.variableEditorHeight,a=e.clientY-(0,T.getTop)(e.target),s=function(e){if(0===e.buttons)return c()
n=!0
var r=o.default.findDOMNode(t.editorBarComponent),s=e.clientY-(0,T.getTop)(r)-a,l=r.clientHeight-s
l<60?t.setState({variableEditorOpen:!1,variableEditorHeight:i}):t.setState({variableEditorOpen:!0,variableEditorHeight:l})},c=function(){n||t.setState({variableEditorOpen:!r}),document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",c),s=null,c=null}
document.addEventListener("mousemove",s),document.addEventListener("mouseup",c)})),"function"!=typeof e.fetcher)throw new TypeError("GraphiQL requires a fetcher function.")
t._storage=new O.default(e.storage)
var c=void 0!==e.query?e.query:null!==t._storage.get("query")?t._storage.get("query"):void 0!==e.defaultQuery?e.defaultQuery:V,l=(0,w.default)(e.schema,c),u=void 0!==e.variables?e.variables:t._storage.get("variables"),f=void 0!==e.operationName?e.operationName:(0,x.default)(null,t._storage.get("operationName"),l&&l.operations),p=e.docExplorerOpen||!1
t._storage.get("docExplorerOpen")&&(p="true"===t._storage.get("docExplorerOpen"))
var d=void 0!==e.defaultVariableEditorOpen?e.defaultVariableEditorOpen:Boolean(u)
return t.state=j({schema:e.schema,query:c,variables:u,operationName:f,docExplorerOpen:p,response:e.response,editorFlex:Number(t._storage.get("editorFlex"))||1,variableEditorOpen:d,variableEditorHeight:Number(t._storage.get("variableEditorHeight"))||200,historyPaneOpen:"true"===t._storage.get("historyPaneOpen")||!1,docExplorerWidth:Number(t._storage.get("docExplorerWidth"))||350,isWaitingForResponse:!1,subscription:null},l),t._editorQueryID=0,"object"===("undefined"==typeof window?"undefined":A(window))&&window.addEventListener("beforeunload",(function(){return t.componentWillUnmount()})),t}var i,f,p
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(n,t),i=n,(f=[{key:"componentDidMount",value:function(){void 0===this.state.schema&&this._fetchSchema(),this.codeMirrorSizer=new b.default,e.g=this}},{key:"componentWillReceiveProps",value:function(e){var t=this,n=this.state.schema,r=this.state.query,i=this.state.variables,o=this.state.operationName,a=this.state.response
if(void 0!==e.schema&&(n=e.schema),void 0!==e.query&&(r=e.query),void 0!==e.variables&&(i=e.variables),void 0!==e.operationName&&(o=e.operationName),void 0!==e.response&&(a=e.response),n!==this.state.schema||r!==this.state.query||o!==this.state.operationName){var s=this._updateQueryFacts(r,o,this.state.operations,n)
void 0!==s&&(o=s.operationName,this.setState(s))}void 0===e.schema&&e.fetcher!==this.props.fetcher&&(n=void 0),this.setState({schema:n,query:r,variables:i,operationName:o,response:a},(function(){void 0===t.state.schema&&(t.docExplorerComponent&&t.docExplorerComponent.reset(),t._fetchSchema())}))}},{key:"componentDidUpdate",value:function(){this.codeMirrorSizer.updateSizes([this.queryEditorComponent,this.variableEditorComponent,this.resultComponent])}},{key:"componentWillUnmount",value:function(){this._storage.set("query",this.state.query),this._storage.set("variables",this.state.variables),this._storage.set("operationName",this.state.operationName),this._storage.set("editorFlex",this.state.editorFlex),this._storage.set("variableEditorHeight",this.state.variableEditorHeight),this._storage.set("docExplorerWidth",this.state.docExplorerWidth),this._storage.set("docExplorerOpen",this.state.docExplorerOpen),this._storage.set("historyPaneOpen",this.state.historyPaneOpen)}},{key:"render",value:function(){var e=this,t=r.default.Children.toArray(this.props.children),i=(0,E.default)(t,(function(e){return e.type===n.Logo}))||r.default.createElement(n.Logo,null),o=(0,E.default)(t,(function(e){return e.type===n.Toolbar}))||r.default.createElement(n.Toolbar,null,r.default.createElement(u.ToolbarButton,{onClick:this.handlePrettifyQuery,title:"Prettify Query (Shift-Ctrl-P)",label:"Prettify"}),r.default.createElement(u.ToolbarButton,{onClick:this.handleMergeQuery,title:"Merge Query (Shift-Ctrl-M)",label:"Merge"}),r.default.createElement(u.ToolbarButton,{onClick:this.handleCopyQuery,title:"Copy Query (Shift-Ctrl-C)",label:"Copy"}),r.default.createElement(u.ToolbarButton,{onClick:this.handleToggleHistory,title:"Show History",label:"History"})),a=(0,E.default)(t,(function(e){return e.type===n.Footer})),s={WebkitFlex:this.state.editorFlex,flex:this.state.editorFlex},f={display:"block",width:this.state.docExplorerWidth},p="docExplorerWrap"+(this.state.docExplorerWidth<200?" doc-explorer-narrow":""),d={display:this.state.historyPaneOpen?"block":"none",width:"230px",zIndex:"7"},b=this.state.variableEditorOpen,O={height:b?this.state.variableEditorHeight:null}
return r.default.createElement("div",{className:"graphiql-container"},r.default.createElement("div",{className:"historyPaneWrap",style:d},r.default.createElement(y.QueryHistory,{operationName:this.state.operationName,query:this.state.query,variables:this.state.variables,onSelectQuery:this.handleSelectHistoryQuery,storage:this._storage,queryID:this._editorQueryID},r.default.createElement("div",{className:"docExplorerHide",onClick:this.handleToggleHistory},"✕"))),r.default.createElement("div",{className:"editorWrap"},r.default.createElement("div",{className:"topBarWrap"},r.default.createElement("div",{className:"topBar"},i,r.default.createElement(c.ExecuteButton,{isRunning:Boolean(this.state.subscription),onRun:this.handleRunQuery,onStop:this.handleStopQuery,operations:this.state.operations}),o),!this.state.docExplorerOpen&&r.default.createElement("button",{className:"docExplorerShow",onClick:this.handleToggleDocs},"Docs")),r.default.createElement("div",{ref:function(t){e.editorBarComponent=t},className:"editorBar",onDoubleClick:this.handleResetResize,onMouseDown:this.handleResizeStart},r.default.createElement("div",{className:"queryWrap",style:s},r.default.createElement(h.QueryEditor,{ref:function(t){e.queryEditorComponent=t},schema:this.state.schema,value:this.state.query,onEdit:this.handleEditQuery,onHintInformationRender:this.handleHintInformationRender,onClickReference:this.handleClickReference,onCopyQuery:this.handleCopyQuery,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly}),r.default.createElement("div",{className:"variable-editor",style:O},r.default.createElement("div",{className:"variable-editor-title",style:{cursor:b?"row-resize":"n-resize"},onMouseDown:this.handleVariableResizeStart},"Query Variables"),r.default.createElement(m.VariableEditor,{ref:function(t){e.variableEditorComponent=t},value:this.state.variables,variableToType:this.state.variableToType,onEdit:this.handleEditVariables,onHintInformationRender:this.handleHintInformationRender,onPrettifyQuery:this.handlePrettifyQuery,onMergeQuery:this.handleMergeQuery,onRunQuery:this.handleEditorRunQuery,editorTheme:this.props.editorTheme,readOnly:this.props.readOnly}))),r.default.createElement("div",{className:"resultWrap"},this.state.isWaitingForResponse&&r.default.createElement("div",{className:"spinner-container"},r.default.createElement("div",{className:"spinner"})),r.default.createElement(g.ResultViewer,{ref:function(t){e.resultComponent=t},value:this.state.response,editorTheme:this.props.editorTheme,ResultsTooltip:this.props.ResultsTooltip,ImagePreview:l.ImagePreview}),a))),this.state.docExplorerOpen&&r.default.createElement("div",{className:p,style:f},r.default.createElement("div",{className:"docExplorerResizer",onDoubleClick:this.handleDocsResetResize,onMouseDown:this.handleDocsResizeStart}),r.default.createElement(v.DocExplorer,{ref:function(t){e.docExplorerComponent=t},schema:this.state.schema},r.default.createElement("div",{className:"docExplorerHide",onClick:this.handleToggleDocs},"✕"))))}},{key:"getQueryEditor",value:function(){return this.queryEditorComponent.getCodeMirror()}},{key:"getVariableEditor",value:function(){return this.variableEditorComponent.getCodeMirror()}},{key:"refresh",value:function(){this.queryEditorComponent.getCodeMirror().refresh(),this.variableEditorComponent.getCodeMirror().refresh(),this.resultComponent.getCodeMirror().refresh()}},{key:"autoCompleteLeafs",value:function(){var e=(0,C.fillLeafs)(this.state.schema,this.state.query,this.props.getDefaultFieldNames),t=e.insertions,n=e.result
if(t&&t.length>0){var r=this.getQueryEditor()
r.operation((function(){var e=r.getCursor(),i=r.indexFromPos(e)
r.setValue(n)
var o=0,a=t.map((function(e){var t=e.index,n=e.string
return r.markText(r.posFromIndex(t+o),r.posFromIndex(t+(o+=n.length)),{className:"autoInsertedLeaf",clearOnEnter:!0,title:"Automatically added leaf fields"})}))
setTimeout((function(){return a.forEach((function(e){return e.clear()}))}),7e3)
var s=i
t.forEach((function(e){var t=e.index,n=e.string
t<i&&(s+=n.length)})),r.setCursor(r.posFromIndex(s))}))}return n}},{key:"_fetchSchema",value:function(){var e=this,t=this.props.fetcher,r=B(t({query:S.introspectionQuery,operationName:S.introspectionQueryName}))
q(r)?r.then((function(e){if(e.data)return e
var n=B(t({query:S.introspectionQuerySansSubscriptions,operationName:S.introspectionQueryName}))
if(!q(r))throw new Error("Fetcher did not return a Promise for introspection.")
return n})).then((function(t){if(void 0===e.state.schema)if(t&&t.data){var r=(0,a.buildClientSchema)(t.data),i=(0,w.default)(r,e.state.query)
e.setState(j({schema:r},i))}else{var o="string"==typeof t?t:n.formatResult(t)
e.setState({schema:null,response:o})}})).catch((function(t){e.setState({schema:null,response:t?n.formatError(t):null})})):this.setState({response:"Fetcher did not return a Promise for introspection."})}},{key:"_fetchQuery",value:function(e,t,r,i){var o=this,a=this.props.fetcher,s=null
try{s=t&&""!==t.trim()?JSON.parse(t):null}catch(e){throw new Error("Variables are invalid JSON: ".concat(e.message,"."))}if("object"!==A(s))throw new Error("Variables are not a JSON object.")
var c=a({query:e,variables:s,operationName:r})
if(!q(c)){if(z(c))return c.subscribe({next:i,error:function(e){o.setState({isWaitingForResponse:!1,response:e?n.formatError(e):null,subscription:null})},complete:function(){o.setState({isWaitingForResponse:!1,subscription:null})}})
throw new Error("Fetcher did not return Promise or Observable.")}c.then(i).catch((function(e){o.setState({isWaitingForResponse:!1,response:e?n.formatError(e):null})}))}},{key:"_runQueryAtCursor",value:function(){if(this.state.subscription)this.handleStopQuery()
else{var e,t=this.state.operations
if(t){var n=this.getQueryEditor()
if(n.hasFocus())for(var r=n.getCursor(),i=n.indexFromPos(r),o=0;o<t.length;o++){var a=t[o]
if(a.loc.start<=i&&a.loc.end>=i){e=a.name&&a.name.value
break}}}this.handleRunQuery(e)}}},{key:"_didClickDragBar",value:function(e){if(0!==e.button||e.ctrlKey)return!1
var t=e.target
if(0!==t.className.indexOf("CodeMirror-gutter"))return!1
for(var n=o.default.findDOMNode(this.resultComponent);t;){if(t===n)return!0
t=t.parentNode}return!1}}])&&D(i.prototype,f),p&&D(i,p),n}(r.default.Component)
t.GraphiQL=R,M(R,"propTypes",{fetcher:i.default.func.isRequired,schema:i.default.instanceOf(a.GraphQLSchema),query:i.default.string,variables:i.default.string,operationName:i.default.string,response:i.default.string,storage:i.default.shape({getItem:i.default.func,setItem:i.default.func,removeItem:i.default.func}),defaultQuery:i.default.string,defaultVariableEditorOpen:i.default.bool,onCopyQuery:i.default.func,onEditQuery:i.default.func,onEditVariables:i.default.func,onEditOperationName:i.default.func,onToggleDocs:i.default.func,getDefaultFieldNames:i.default.func,editorTheme:i.default.string,onToggleHistory:i.default.func,ResultsTooltip:i.default.any,readOnly:i.default.bool,docExplorerOpen:i.default.bool}),R.Logo=function(e){return r.default.createElement("div",{className:"title"},e.children||r.default.createElement("span",null,"Graph",r.default.createElement("em",null,"i"),"QL"))},R.Toolbar=function(e){return r.default.createElement("div",{className:"toolbar"},e.children)},R.QueryEditor=h.QueryEditor,R.VariableEditor=m.VariableEditor,R.ResultViewer=g.ResultViewer,R.Button=u.ToolbarButton,R.ToolbarButton=u.ToolbarButton,R.Group=f.ToolbarGroup,R.Menu=p.ToolbarMenu,R.MenuItem=p.ToolbarMenuItem,R.Select=d.ToolbarSelect,R.SelectOption=d.ToolbarSelectOption,R.Footer=function(e){return r.default.createElement("div",{className:"footer"},e.children)},R.formatResult=function(e){return JSON.stringify(e,null,2)}
var P=function(e){return j({},e,{message:e.message,stack:e.stack})}
R.formatError=function(e){var t=Array.isArray(e)?e.map(P):P(e)
return JSON.stringify(t,null,2)}
var V='# Welcome to GraphiQL\n#\n# GraphiQL is an in-browser tool for writing, validating, and\n# testing GraphQL queries.\n#\n# Type queries into this side of the screen, and you will see intelligent\n# typeaheads aware of the current GraphQL type schema and live syntax and\n# validation errors highlighted within the text.\n#\n# GraphQL queries typically start with a "{" character. Lines that starts\n# with a # are ignored.\n#\n# An example GraphQL query might look like:\n#\n#     {\n#       field(arg: "value") {\n#         subField\n#       }\n#     }\n#\n# Keyboard shortcuts:\n#\n#  Prettify Query:  Shift-Ctrl-P (or press the prettify button above)\n#\n#     Merge Query:  Shift-Ctrl-M (or press the merge button above)\n#\n#       Run Query:  Ctrl-Enter (or press the play button above)\n#\n#   Auto Complete:  Ctrl-Space (or just start typing)\n#\n\n'
function q(e){return"object"===A(e)&&"function"==typeof e.then}function B(e){return z(e)?new Promise((function(t,n){var r=e.subscribe((function(e){t(e),r.unsubscribe()}),n,(function(){n(new Error("no value resolved"))}))})):e}function z(e){return"object"===A(e)&&"function"==typeof e.subscribe}}).call(this,n("yLpj"))},"2l+C":function(e,t,n){"use strict"
function r(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var i=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,s=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(s),l=["%","/","?",";","#"].concat(c),u=["/","?","#"],f=/^[+a-z0-9A-Z_-]{0,63}$/,p=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},h={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0}
r.prototype.parse=function(e,t){var n,r,o,s,c,m=e
if(m=m.trim(),!t&&1===e.split("#").length){var g=a.exec(m)
if(g)return this.pathname=g[1],g[2]&&(this.search=g[2]),this}var v=i.exec(m)
if(v&&(o=(v=v[0]).toLowerCase(),this.protocol=v,m=m.substr(v.length)),(t||v||m.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(c="//"===m.substr(0,2))||v&&d[v]||(m=m.substr(2),this.slashes=!0)),!d[v]&&(c||v&&!h[v])){var y,b,O=-1
for(n=0;n<u.length;n++)-1!==(s=m.indexOf(u[n]))&&(-1===O||s<O)&&(O=s)
for(-1!==(b=-1===O?m.lastIndexOf("@"):m.lastIndexOf("@",O))&&(y=m.slice(0,b),m=m.slice(b+1),this.auth=y),O=-1,n=0;n<l.length;n++)-1!==(s=m.indexOf(l[n]))&&(-1===O||s<O)&&(O=s);-1===O&&(O=m.length),":"===m[O-1]&&O--
var w=m.slice(0,O)
m=m.slice(O),this.parseHost(w),this.hostname=this.hostname||""
var x="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1]
if(!x){var k=this.hostname.split(/\./)
for(n=0,r=k.length;n<r;n++){var E=k[n]
if(E&&!E.match(f)){for(var C="",T=0,_=E.length;T<_;T++)E.charCodeAt(T)>127?C+="x":C+=E[T]
if(!C.match(f)){var S=k.slice(0,n),N=k.slice(n+1),A=E.match(p)
A&&(S.push(A[1]),N.unshift(A[2])),N.length&&(m=N.join(".")+m),this.hostname=S.join(".")
break}}}}this.hostname.length>255&&(this.hostname=""),x&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var j=m.indexOf("#");-1!==j&&(this.hash=m.substr(j),m=m.slice(0,j))
var D=m.indexOf("?")
return-1!==D&&(this.search=m.substr(D),m=m.slice(0,D)),m&&(this.pathname=m),h[o]&&this.hostname&&!this.pathname&&(this.pathname=""),this},r.prototype.parseHost=function(e){var t=o.exec(e)
t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)},e.exports=function(e,t){if(e&&e instanceof r)return e
var n=new r
return n.parse(e,t),n}},"31bW":function(e,t,n){"use strict"
e.exports=function(e,t,n){var r,i,o,a,s=-1,c=e.posMax,l=e.pos
for(e.pos=t+1,r=1;e.pos<c;){if(93===(o=e.src.charCodeAt(e.pos))&&0===--r){i=!0
break}if(a=e.pos,e.md.inline.skipToken(e),91===o)if(a===e.pos-1)r++
else if(n)return e.pos=l,-1}return i&&(s=e.pos),e.pos=l,s}},"3HNt":function(e,t,n){"use strict"
n.d(t,"a",(function(){return d}))
var r=n("EkS5"),i=n("1QEH"),o=n("rWdj"),a=n("2C6G"),s=n("das/"),c=n("/kEc"),l=n("zpYP"),u=n("/jXB"),f=n("19Hc"),p=n("axIb")
function d(e,t){if(Object(p.L)(t)){var n=d(e,t.ofType)
return n&&n.kind===u.Kind.NULL?null:n}if(null===e)return{kind:u.Kind.NULL}
if(Object(c.a)(e))return null
if(Object(p.J)(t)){var m=t.ofType
if(Object(r.e)(e)){var g=[]
return Object(r.b)(e,(function(e){var t=d(e,m)
t&&g.push(t)})),{kind:u.Kind.LIST,values:g}}return d(e,m)}if(Object(p.F)(t)){if(!Object(l.a)(e))return null
for(var v=[],y=0,b=Object(i.a)(t.getFields());y<b.length;y++){var O=b[y],w=d(e[O.name],O.type)
w&&v.push({kind:u.Kind.OBJECT_FIELD,name:{kind:u.Kind.NAME,value:O.name},value:w})}return{kind:u.Kind.OBJECT,fields:v}}if(Object(p.I)(t)){var x=t.serialize(e)
if(Object(s.a)(x))return null
if("boolean"==typeof x)return{kind:u.Kind.BOOLEAN,value:x}
if("number"==typeof x){var k=String(x)
return h.test(k)?{kind:u.Kind.INT,value:k}:{kind:u.Kind.FLOAT,value:k}}if("string"==typeof x)return Object(p.E)(t)?{kind:u.Kind.ENUM,value:x}:t===f.c&&h.test(x)?{kind:u.Kind.INT,value:x}:{kind:u.Kind.STRING,value:x}
throw new TypeError("Cannot convert value to AST: ".concat(Object(o.a)(x)))}Object(a.a)(!1,"Unexpected input type: "+Object(o.a)(t))}var h=/^-?(?:0|[1-9][0-9]*)$/},"3PdN":function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="3PdN"},"4RMZ":function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n("1/U3"),i=n("/jXB"),o=n("axIb"),a=n("LViu"),s=n("umOc"),c=function(){function e(e,t,n){this._schema=e,this._typeStack=[],this._parentTypeStack=[],this._inputTypeStack=[],this._fieldDefStack=[],this._defaultValueStack=[],this._directive=null,this._argument=null,this._enumValue=null,this._getFieldDef=t||l,n&&(Object(o.G)(n)&&this._inputTypeStack.push(n),Object(o.D)(n)&&this._parentTypeStack.push(n),Object(o.O)(n)&&this._typeStack.push(n))}var t=e.prototype
return t.getType=function(){if(this._typeStack.length>0)return this._typeStack[this._typeStack.length-1]},t.getParentType=function(){if(this._parentTypeStack.length>0)return this._parentTypeStack[this._parentTypeStack.length-1]},t.getInputType=function(){if(this._inputTypeStack.length>0)return this._inputTypeStack[this._inputTypeStack.length-1]},t.getParentInputType=function(){if(this._inputTypeStack.length>1)return this._inputTypeStack[this._inputTypeStack.length-2]},t.getFieldDef=function(){if(this._fieldDefStack.length>0)return this._fieldDefStack[this._fieldDefStack.length-1]},t.getDefaultValue=function(){if(this._defaultValueStack.length>0)return this._defaultValueStack[this._defaultValueStack.length-1]},t.getDirective=function(){return this._directive},t.getArgument=function(){return this._argument},t.getEnumValue=function(){return this._enumValue},t.enter=function(e){var t=this._schema
switch(e.kind){case i.Kind.SELECTION_SET:var n=Object(o.A)(this.getType())
this._parentTypeStack.push(Object(o.D)(n)?n:void 0)
break
case i.Kind.FIELD:var a,c,l=this.getParentType()
l&&(a=this._getFieldDef(t,l,e))&&(c=a.type),this._fieldDefStack.push(a),this._typeStack.push(Object(o.O)(c)?c:void 0)
break
case i.Kind.DIRECTIVE:this._directive=t.getDirective(e.name.value)
break
case i.Kind.OPERATION_DEFINITION:var u
"query"===e.operation?u=t.getQueryType():"mutation"===e.operation?u=t.getMutationType():"subscription"===e.operation&&(u=t.getSubscriptionType()),this._typeStack.push(Object(o.N)(u)?u:void 0)
break
case i.Kind.INLINE_FRAGMENT:case i.Kind.FRAGMENT_DEFINITION:var f=e.typeCondition,p=f?Object(s.a)(t,f):Object(o.A)(this.getType())
this._typeStack.push(Object(o.O)(p)?p:void 0)
break
case i.Kind.VARIABLE_DEFINITION:var d=Object(s.a)(t,e.type)
this._inputTypeStack.push(Object(o.G)(d)?d:void 0)
break
case i.Kind.ARGUMENT:var h,m,g=this.getDirective()||this.getFieldDef()
g&&(h=Object(r.a)(g.args,(function(t){return t.name===e.name.value})))&&(m=h.type),this._argument=h,this._defaultValueStack.push(h?h.defaultValue:void 0),this._inputTypeStack.push(Object(o.G)(m)?m:void 0)
break
case i.Kind.LIST:var v=Object(o.B)(this.getInputType()),y=Object(o.J)(v)?v.ofType:v
this._defaultValueStack.push(void 0),this._inputTypeStack.push(Object(o.G)(y)?y:void 0)
break
case i.Kind.OBJECT_FIELD:var b,O,w=Object(o.A)(this.getInputType())
Object(o.F)(w)&&(O=w.getFields()[e.name.value])&&(b=O.type),this._defaultValueStack.push(O?O.defaultValue:void 0),this._inputTypeStack.push(Object(o.G)(b)?b:void 0)
break
case i.Kind.ENUM:var x,k=Object(o.A)(this.getInputType())
Object(o.E)(k)&&(x=k.getValue(e.value)),this._enumValue=x}},t.leave=function(e){switch(e.kind){case i.Kind.SELECTION_SET:this._parentTypeStack.pop()
break
case i.Kind.FIELD:this._fieldDefStack.pop(),this._typeStack.pop()
break
case i.Kind.DIRECTIVE:this._directive=null
break
case i.Kind.OPERATION_DEFINITION:case i.Kind.INLINE_FRAGMENT:case i.Kind.FRAGMENT_DEFINITION:this._typeStack.pop()
break
case i.Kind.VARIABLE_DEFINITION:this._inputTypeStack.pop()
break
case i.Kind.ARGUMENT:this._argument=null,this._defaultValueStack.pop(),this._inputTypeStack.pop()
break
case i.Kind.LIST:case i.Kind.OBJECT_FIELD:this._defaultValueStack.pop(),this._inputTypeStack.pop()
break
case i.Kind.ENUM:this._enumValue=null}},e}()
function l(e,t,n){var r=n.name.value
return r===a.SchemaMetaFieldDef.name&&e.getQueryType()===t?a.SchemaMetaFieldDef:r===a.TypeMetaFieldDef.name&&e.getQueryType()===t?a.TypeMetaFieldDef:r===a.TypeNameMetaFieldDef.name&&Object(o.D)(t)?a.TypeNameMetaFieldDef:Object(o.N)(t)||Object(o.H)(t)?t.getFields()[r]:void 0}},"4fNk":function(e,t,n){"use strict"
e.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},"4suF":function(e,t,n){"use strict"
n.d(t,"g",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return v})),n.d(t,"e",(function(){return y})),n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"i",(function(){return w})),n.d(t,"h",(function(){return x}))
var r=n("Y/la"),i=n("rWdj"),o=n("E9SJ"),a=n("t3R0"),s=n("Mw0p"),c=n("vJkw"),l=n("zpYP"),u=n("ZZnB"),f=n("F8X2"),p=n("19Hc"),d=n("axIb")
function h(e){return Object(s.a)(e,g)}function m(e){if(!h(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL directive."))
return e}var g=function(){function e(e){this.name=e.name,this.description=e.description,this.locations=e.locations,this.isRepeatable=null!=e.isRepeatable&&e.isRepeatable,this.extensions=e.extensions&&Object(o.a)(e.extensions),this.astNode=e.astNode,e.name||Object(a.a)(0,"Directive must be named."),Array.isArray(e.locations)||Object(a.a)(0,"@".concat(e.name," locations must be an Array."))
var t=e.args||{}
Object(l.a)(t)&&!Array.isArray(t)||Object(a.a)(0,"@".concat(e.name," args must be an object with argument names as keys.")),this.args=Object(r.a)(t).map((function(e){var t=e[0],n=e[1]
return{name:t,description:void 0===n.description?null:n.description,type:n.type,defaultValue:n.defaultValue,extensions:n.extensions&&Object(o.a)(n.extensions),astNode:n.astNode}}))}var t=e.prototype
return t.toString=function(){return"@"+this.name},t.toConfig=function(){return{name:this.name,description:this.description,locations:this.locations,args:Object(d.i)(this.args),isRepeatable:this.isRepeatable,extensions:this.extensions,astNode:this.astNode}},e}()
Object(u.a)(g),Object(c.a)(g)
var v=new g({name:"include",description:"Directs the executor to include this field or fragment only when the `if` argument is true.",locations:[f.a.FIELD,f.a.FRAGMENT_SPREAD,f.a.INLINE_FRAGMENT],args:{if:{type:Object(d.e)(p.a),description:"Included when true."}}}),y=new g({name:"skip",description:"Directs the executor to skip this field or fragment when the `if` argument is true.",locations:[f.a.FIELD,f.a.FRAGMENT_SPREAD,f.a.INLINE_FRAGMENT],args:{if:{type:Object(d.e)(p.a),description:"Skipped when true."}}}),b="No longer supported",O=new g({name:"deprecated",description:"Marks an element of a GraphQL schema as no longer supported.",locations:[f.a.FIELD_DEFINITION,f.a.ENUM_VALUE],args:{reason:{type:p.e,description:"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/).",defaultValue:b}}}),w=Object.freeze([v,y,O])
function x(e){return h(e)&&w.some((function(t){return t.name===e.name}))}},"51nL":function(e,t,n){"use strict"
n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g}))
var r=n("1/U3"),i=n("1QEH"),o=n("rWdj"),a=n("E9SJ"),s=n("t3R0"),c=n("Mw0p"),l=n("zpYP"),u=n("ZZnB"),f=n("LViu"),p=n("4suF"),d=n("axIb")
function h(e){return Object(c.a)(e,g)}function m(e){if(!h(e))throw new Error("Expected ".concat(Object(o.a)(e)," to be a GraphQL schema."))
return e}var g=function(){function e(e){e&&e.assumeValid?this.__validationErrors=[]:(this.__validationErrors=void 0,Object(l.a)(e)||Object(s.a)(0,"Must provide configuration object."),!e.types||Array.isArray(e.types)||Object(s.a)(0,'"types" must be Array if provided but got: '.concat(Object(o.a)(e.types),".")),!e.directives||Array.isArray(e.directives)||Object(s.a)(0,'"directives" must be Array if provided but got: '+"".concat(Object(o.a)(e.directives),".")),!e.allowedLegacyNames||Array.isArray(e.allowedLegacyNames)||Object(s.a)(0,'"allowedLegacyNames" must be Array if provided but got: '+"".concat(Object(o.a)(e.allowedLegacyNames),"."))),this.extensions=e.extensions&&Object(a.a)(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=e.extensionASTNodes,this.__allowedLegacyNames=e.allowedLegacyNames||[],this._queryType=e.query,this._mutationType=e.mutation,this._subscriptionType=e.subscription,this._directives=e.directives||p.i
var t=[this._queryType,this._mutationType,this._subscriptionType,f.__Schema].concat(e.types),n=Object.create(null)
n=t.reduce(v,n),n=this._directives.reduce(y,n),this._typeMap=n,this._possibleTypeMap=Object.create(null),this._implementations=Object.create(null)
for(var r=0,c=Object(i.a)(this._typeMap);r<c.length;r++){var u=c[r]
if(Object(d.N)(u))for(var h=0,m=u.getInterfaces();h<m.length;h++){var g=m[h]
if(Object(d.H)(g)){var b=this._implementations[g.name]
b?b.push(u):this._implementations[g.name]=[u]}}}}var t=e.prototype
return t.getQueryType=function(){return this._queryType},t.getMutationType=function(){return this._mutationType},t.getSubscriptionType=function(){return this._subscriptionType},t.getTypeMap=function(){return this._typeMap},t.getType=function(e){return this.getTypeMap()[e]},t.getPossibleTypes=function(e){return Object(d.T)(e)?e.getTypes():this._implementations[e.name]||[]},t.isPossibleType=function(e,t){if(null==this._possibleTypeMap[e.name]){for(var n=Object.create(null),r=0,i=this.getPossibleTypes(e);r<i.length;r++){n[i[r].name]=!0}this._possibleTypeMap[e.name]=n}return Boolean(this._possibleTypeMap[e.name][t.name])},t.getDirectives=function(){return this._directives},t.getDirective=function(e){return Object(r.a)(this.getDirectives(),(function(t){return t.name===e}))},t.toConfig=function(){return{query:this.getQueryType(),mutation:this.getMutationType(),subscription:this.getSubscriptionType(),types:Object(i.a)(this.getTypeMap()),directives:this.getDirectives().slice(),extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes||[],assumeValid:void 0!==this.__validationErrors,allowedLegacyNames:this.__allowedLegacyNames}},e}()
function v(e,t){if(!t)return e
var n=Object(d.A)(t),r=e[n.name]
if(r){if(r!==n)throw new Error('Schema must contain uniquely named types but contains multiple types named "'.concat(n.name,'".'))
return e}e[n.name]=n
var o=e
if(Object(d.T)(n)&&(o=n.getTypes().reduce(v,o)),Object(d.N)(n)&&(o=n.getInterfaces().reduce(v,o)),Object(d.N)(n)||Object(d.H)(n))for(var a=0,s=Object(i.a)(n.getFields());a<s.length;a++){var c=s[a]
o=v(o=c.args.map((function(e){return e.type})).reduce(v,o),c.type)}if(Object(d.F)(n))for(var l=0,u=Object(i.a)(n.getFields());l<u.length;l++){o=v(o,u[l].type)}return o}function y(e,t){return Object(p.g)(t)?t.args.reduce((function(e,t){return v(e,t.type)}),e):e}Object(u.a)(g)},"5Mrk":function(e,t,n){"use strict"
var r=n("AGgm").isSpace,i=n("AGgm").unescapeAll
e.exports=function(e,t,n){var o,a,s=t,c={ok:!1,pos:0,lines:0,str:""}
if(60===e.charCodeAt(t)){for(t++;t<n;){if(10===(o=e.charCodeAt(t))||r(o))return c
if(62===o)return c.pos=t+1,c.str=i(e.slice(s+1,t)),c.ok=!0,c
92===o&&t+1<n?t+=2:t++}return c}for(a=0;t<n&&32!==(o=e.charCodeAt(t))&&!(o<32||127===o);)if(92===o&&t+1<n)t+=2
else{if(40===o&&a++,41===o){if(0===a)break
a--}t++}return s===t||0!==a||(c.str=i(e.slice(s,t)),c.lines=0,c.pos=t,c.ok=!0),c}},"5PMP":function(e,t,n){"use strict"
n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}))
var r=n("t3R0"),i=n("dWS+"),o=/^[_a-zA-Z][_a-zA-Z0-9]*$/
function a(e){var t=s(e)
if(t)throw t
return e}function s(e,t){return"string"==typeof e||Object(r.a)(0,"Expected string"),e.length>1&&"_"===e[0]&&"_"===e[1]?new i.a('Name "'.concat(e,'" must not begin with "__", which is reserved by GraphQL introspection.'),t):o.test(e)?void 0:new i.a('Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but "'.concat(e,'" does not.'),t)}},"5itS":function(e,t,n){var r=n("6fl8")
"string"==typeof r&&(r=[[e.i,r,""]])
var i={hmr:!0,transform:void 0,insertInto:void 0}
n("aET+")(r,i)
r.locals&&(e.exports=r.locals)},"5y3V":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ResultViewer=void 0
var r=s(n("q1tI")),i=s(n("i8i4")),o=s(n("17x9")),a=s(n("qcZG"))
function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,h,m,g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,f(t).call(this))}var o,s,c
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),o=t,(s=[{key:"componentDidMount",value:function(){var e=n("VrN/")
n("y8iW"),n("rt3J"),n("Ku0u"),n("C2zF"),n("uTOq"),n("GP5n"),n("mki7"),n("iMDj")
var t=this.props.ResultsTooltip,o=this.props.ImagePreview
if(t||o){n("CRiN")
var s=document.createElement("div")
e.registerHelper("info","graphql-results",(function(e,n,a,c){var l=[]
return t&&l.push(r.default.createElement(t,{pos:c})),o&&"function"==typeof o.shouldRender&&o.shouldRender(e)&&l.push(r.default.createElement(o,{token:e})),l.length?(i.default.render(r.default.createElement("div",null,l),s),s):(i.default.unmountComponentAtNode(s),null)}))}this.viewer=e(this._node,{lineWrapping:!0,value:this.props.value||"",readOnly:!0,theme:this.props.editorTheme||"graphiql",mode:"graphql-results",keyMap:"sublime",foldGutter:{minFoldSize:4},gutters:["CodeMirror-foldgutter"],info:Boolean(this.props.ResultsTooltip||this.props.ImagePreview),extraKeys:a.default})}},{key:"shouldComponentUpdate",value:function(e){return this.props.value!==e.value}},{key:"componentDidUpdate",value:function(){this.viewer.setValue(this.props.value||"")}},{key:"componentWillUnmount",value:function(){this.viewer=null}},{key:"render",value:function(){var e=this
return r.default.createElement("div",{className:"result-window",ref:function(t){e._node=t}})}},{key:"getCodeMirror",value:function(){return this.viewer}},{key:"getClientHeight",value:function(){return this._node&&this._node.clientHeight}}])&&l(o.prototype,s),c&&l(o,c),t}(r.default.Component)
t.ResultViewer=g,d=g,h="propTypes",m={value:o.default.string,editorTheme:o.default.string,ResultsTooltip:o.default.any,ImagePreview:o.default.any},h in d?Object.defineProperty(d,h,{value:m,enumerable:!0,configurable:!0,writable:!0}):d[h]=m},"6A5J":function(e,t,n){"use strict"
var r=n("AGgm").isSpace
e.exports=function(e,t,n,i){var o,a,s,c,l,u,f,p,d,h,m,g,v,y,b,O,w,x,k,E,C=e.lineMax,T=e.bMarks[t]+e.tShift[t],_=e.eMarks[t]
if(e.sCount[t]-e.blkIndent>=4)return!1
if(62!==e.src.charCodeAt(T++))return!1
if(i)return!0
for(c=d=e.sCount[t]+T-(e.bMarks[t]+e.tShift[t]),32===e.src.charCodeAt(T)?(T++,c++,d++,o=!1,O=!0):9===e.src.charCodeAt(T)?(O=!0,(e.bsCount[t]+d)%4==3?(T++,c++,d++,o=!1):o=!0):O=!1,h=[e.bMarks[t]],e.bMarks[t]=T;T<_&&(a=e.src.charCodeAt(T),r(a));)9===a?d+=4-(d+e.bsCount[t]+(o?1:0))%4:d++,T++
for(m=[e.bsCount[t]],e.bsCount[t]=e.sCount[t]+1+(O?1:0),u=T>=_,y=[e.sCount[t]],e.sCount[t]=d-c,b=[e.tShift[t]],e.tShift[t]=T-e.bMarks[t],x=e.md.block.ruler.getRules("blockquote"),v=e.parentType,e.parentType="blockquote",E=!1,p=t+1;p<n&&(e.sCount[p]<e.blkIndent&&(E=!0),!((T=e.bMarks[p]+e.tShift[p])>=(_=e.eMarks[p])));p++)if(62!==e.src.charCodeAt(T++)||E){if(u)break
for(w=!1,s=0,l=x.length;s<l;s++)if(x[s](e,p,n,!0)){w=!0
break}if(w){e.lineMax=p,0!==e.blkIndent&&(h.push(e.bMarks[p]),m.push(e.bsCount[p]),b.push(e.tShift[p]),y.push(e.sCount[p]),e.sCount[p]-=e.blkIndent)
break}h.push(e.bMarks[p]),m.push(e.bsCount[p]),b.push(e.tShift[p]),y.push(e.sCount[p]),e.sCount[p]=-1}else{for(c=d=e.sCount[p]+T-(e.bMarks[p]+e.tShift[p]),32===e.src.charCodeAt(T)?(T++,c++,d++,o=!1,O=!0):9===e.src.charCodeAt(T)?(O=!0,(e.bsCount[p]+d)%4==3?(T++,c++,d++,o=!1):o=!0):O=!1,h.push(e.bMarks[p]),e.bMarks[p]=T;T<_&&(a=e.src.charCodeAt(T),r(a));)9===a?d+=4-(d+e.bsCount[p]+(o?1:0))%4:d++,T++
u=T>=_,m.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(O?1:0),y.push(e.sCount[p]),e.sCount[p]=d-c,b.push(e.tShift[p]),e.tShift[p]=T-e.bMarks[p]}for(g=e.blkIndent,e.blkIndent=0,(k=e.push("blockquote_open","blockquote",1)).markup=">",k.map=f=[t,0],e.md.block.tokenize(e,t,p),(k=e.push("blockquote_close","blockquote",-1)).markup=">",e.lineMax=C,e.parentType=v,f[1]=e.line,s=0;s<b.length;s++)e.bMarks[s+t]=h[s],e.tShift[s+t]=b[s],e.sCount[s+t]=y[s],e.bsCount[s+t]=m[s]
return e.blkIndent=g,!0}},"6VjI":function(e,t,n){var r={"./Range.js":"VWUu","./file.js":"8O83","./getASTNodeAtPosition.js":"gI7C","./index.js":"HmyC","./validateWithCustomRules.js":"qvY7"}
function i(e){return Promise.resolve().then((function(){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return n(r[e])}))}i.keys=function(){return Object.keys(r)},i.id="6VjI",e.exports=i},"6fl8":function(e,t,n){(t=n("JPst")(!1)).push([e.i,".graphiql-container,\n.graphiql-container button,\n.graphiql-container input {\n  color: #141823;\n  font-family:\n    system,\n    -apple-system,\n    'San Francisco',\n    '.SFNSDisplay-Regular',\n    'Segoe UI',\n    Segoe,\n    'Segoe WP',\n    'Helvetica Neue',\n    helvetica,\n    'Lucida Grande',\n    arial,\n    sans-serif;\n  font-size: 14px;\n}\n\n.graphiql-container {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n  width: 100%;\n}\n\n.graphiql-container .editorWrap {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-x: hidden;\n}\n\n.graphiql-container .title {\n  font-size: 18px;\n}\n\n.graphiql-container .title em {\n  font-family: georgia;\n  font-size: 19px;\n}\n\n.graphiql-container .topBarWrap {\n  display: flex;\n  flex-direction: row;\n}\n\n.graphiql-container .topBar {\n  align-items: center;\n  background: linear-gradient(#f7f7f7, #e2e2e2);\n  border-bottom: 1px solid #d0d0d0;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  height: 34px;\n  overflow-y: visible;\n  padding: 7px 14px 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .toolbar {\n  overflow-x: visible;\n  display: flex;\n}\n\n.graphiql-container .docExplorerShow,\n.graphiql-container .historyShow {\n  background: linear-gradient(#f7f7f7, #e2e2e2);\n  border-radius: 0;\n  border-bottom: 1px solid #d0d0d0;\n  border-right: none;\n  border-top: none;\n  color: #3B5998;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0;\n  outline: 0;\n  padding: 2px 20px 0 18px;\n}\n\n.graphiql-container .docExplorerShow {\n  border-left: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.graphiql-container .historyShow {\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n  border-left: 0;\n}\n\n.graphiql-container .docExplorerShow:before {\n  border-left: 2px solid #3B5998;\n  border-top: 2px solid #3B5998;\n  content: '';\n  display: inline-block;\n  height: 9px;\n  margin: 0 3px -1px 0;\n  position: relative;\n  -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n  width: 9px;\n}\n\n.graphiql-container .editorBar {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n\n.graphiql-container .queryWrap {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.graphiql-container .resultWrap {\n  border-left: solid 1px #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  position: relative;\n}\n\n.graphiql-container .docExplorerWrap,\n.graphiql-container .historyPaneWrap {\n  background: white;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 3;\n}\n\n.graphiql-container .historyPaneWrap {\n  min-width: 230px;\n  z-index: 5;\n}\n\n.graphiql-container .docExplorerResizer {\n  cursor: col-resize;\n  height: 100%;\n  left: -5px;\n  position: absolute;\n  top: 0;\n  width: 10px;\n  z-index: 10;\n}\n\n.graphiql-container .docExplorerHide {\n  cursor: pointer;\n  font-size: 18px;\n  margin: -7px -8px -6px 0;\n  padding: 18px 16px 15px 12px;\n}\n\n.graphiql-container div .query-editor {\n  flex: 1;\n  position: relative;\n}\n\n.graphiql-container .variable-editor {\n  display: flex;\n  flex-direction: column;\n  height: 30px;\n  position: relative;\n}\n\n.graphiql-container .variable-editor-title {\n  background: #eeeeee;\n  border-bottom: 1px solid #d6d6d6;\n  border-top: 1px solid #e0e0e0;\n  color: #777;\n  font-variant: small-caps;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 14px;\n  padding: 6px 0 8px 43px;\n  text-transform: lowercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .codemirrorWrap {\n  flex: 1;\n  height: 100%;\n  position: relative;\n}\n\n.graphiql-container .result-window {\n  flex: 1;\n  height: 100%;\n  position: relative;\n}\n\n.graphiql-container .footer {\n  background: #f6f7f8;\n  border-left: 1px solid #e0e0e0;\n  border-top: 1px solid #e0e0e0;\n  margin-left: 12px;\n  position: relative;\n}\n\n.graphiql-container .footer:before {\n  background: #eeeeee;\n  bottom: 0;\n  content: \" \";\n  left: -13px;\n  position: absolute;\n  top: -1px;\n  width: 12px;\n}\n\n/* No `.graphiql-container` here so themes can overwrite */\n.result-window .CodeMirror {\n  background: #f6f7f8;\n}\n\n.graphiql-container .result-window .CodeMirror-gutters {\n  background-color: #eeeeee;\n  border-color: #e0e0e0;\n  cursor: col-resize;\n}\n\n.graphiql-container .result-window .CodeMirror-foldgutter,\n.graphiql-container .result-window .CodeMirror-foldgutter-open:after,\n.graphiql-container .result-window .CodeMirror-foldgutter-folded:after {\n  padding-left: 3px;\n}\n\n.graphiql-container .toolbar-button {\n  background: #fdfdfd;\n  background: linear-gradient(#f9f9f9, #ececec);\n  border-radius: 3px;\n  box-shadow:\n    inset 0 0 0 1px rgba(0,0,0,0.20),\n    0 1px 0 rgba(255,255,255, 0.7),\n    inset 0 1px #fff;\n  color: #555;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 5px;\n  padding: 3px 11px 5px;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 150px;\n}\n\n.graphiql-container .toolbar-button:active {\n  background: linear-gradient(#ececec, #d5d5d5);\n  box-shadow:\n    0 1px 0 rgba(255, 255, 255, 0.7),\n    inset 0 0 0 1px rgba(0,0,0,0.10),\n    inset 0 1px 1px 1px rgba(0, 0, 0, 0.12),\n    inset 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.graphiql-container .toolbar-button.error {\n  background: linear-gradient(#fdf3f3, #e6d6d7);\n  color: #b00;\n}\n\n.graphiql-container .toolbar-button-group {\n  margin: 0 5px;\n  white-space: nowrap;\n}\n\n.graphiql-container .toolbar-button-group > * {\n  margin: 0;\n}\n\n.graphiql-container .toolbar-button-group > *:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.graphiql-container .toolbar-button-group > *:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.graphiql-container .execute-button-wrap {\n  height: 34px;\n  margin: 0 14px 0 28px;\n  position: relative;\n}\n\n.graphiql-container .execute-button {\n  background: linear-gradient(#fdfdfd, #d2d3d6);\n  border-radius: 17px;\n  border: 1px solid rgba(0,0,0,0.25);\n  box-shadow: 0 1px 0 #fff;\n  cursor: pointer;\n  fill: #444;\n  height: 34px;\n  margin: 0;\n  padding: 0;\n  width: 34px;\n}\n\n.graphiql-container .execute-button svg {\n  pointer-events: none;\n}\n\n.graphiql-container .execute-button:active {\n  background: linear-gradient(#e6e6e6, #c3c3c3);\n  box-shadow:\n    0 1px 0 #fff,\n    inset 0 0 2px rgba(0, 0, 0, 0.2),\n    inset 0 0 6px rgba(0, 0, 0, 0.1);\n}\n\n.graphiql-container .execute-button:focus {\n  outline: 0;\n}\n\n.graphiql-container .toolbar-menu,\n.graphiql-container .toolbar-select {\n  position: relative;\n}\n\n.graphiql-container .execute-options,\n.graphiql-container .toolbar-menu-items,\n.graphiql-container .toolbar-select-options {\n  background: #fff;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.1),\n    0 2px 4px rgba(0,0,0,0.25);\n  margin: 0;\n  padding: 6px 0;\n  position: absolute;\n  z-index: 100;\n}\n\n.graphiql-container .execute-options {\n  min-width: 100px;\n  top: 37px;\n  left: -1px;\n}\n\n.graphiql-container .toolbar-menu-items {\n  left: 1px;\n  margin-top: -1px;\n  min-width: 110%;\n  top: 100%;\n  visibility: hidden;\n}\n\n.graphiql-container .toolbar-menu-items.open {\n  visibility: visible;\n}\n\n.graphiql-container .toolbar-select-options {\n  left: 0;\n  min-width: 100%;\n  top: -5px;\n  visibility: hidden;\n}\n\n.graphiql-container .toolbar-select-options.open {\n  visibility: visible;\n}\n\n.graphiql-container .execute-options > li,\n.graphiql-container .toolbar-menu-items > li,\n.graphiql-container .toolbar-select-options > li {\n  cursor: pointer;\n  display: block;\n  margin: none;\n  max-width: 300px;\n  overflow: hidden;\n  padding: 2px 20px 4px 11px;\n  white-space: nowrap;\n}\n\n.graphiql-container .execute-options > li.selected,\n.graphiql-container .toolbar-menu-items > li.hover,\n.graphiql-container .toolbar-menu-items > li:active,\n.graphiql-container .toolbar-menu-items > li:hover,\n.graphiql-container .toolbar-select-options > li.hover,\n.graphiql-container .toolbar-select-options > li:active,\n.graphiql-container .toolbar-select-options > li:hover,\n.graphiql-container .history-contents > p:hover,\n.graphiql-container .history-contents > p:active {\n  background: #e10098;\n  color: #fff;\n}\n\n.graphiql-container .toolbar-select-options > li > svg {\n  display: inline;\n  fill: #666;\n  margin: 0 -6px 0 6px;\n  pointer-events: none;\n  vertical-align: middle;\n}\n\n.graphiql-container .toolbar-select-options > li.hover > svg,\n.graphiql-container .toolbar-select-options > li:active > svg,\n.graphiql-container .toolbar-select-options > li:hover > svg {\n  fill: #fff;\n}\n\n.graphiql-container .CodeMirror-scroll {\n  overflow-scrolling: touch;\n}\n\n.graphiql-container .CodeMirror {\n  color: #141823;\n  font-family:\n    'Consolas',\n    'Inconsolata',\n    'Droid Sans Mono',\n    'Monaco',\n    monospace;\n  font-size: 13px;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.graphiql-container .CodeMirror-lines {\n  padding: 20px 0;\n}\n\n.CodeMirror-hint-information .content {\n  box-orient: vertical;\n  color: #141823;\n  display: flex;\n  font-family: system, -apple-system, 'San Francisco', '.SFNSDisplay-Regular', 'Segoe UI', Segoe, 'Segoe WP', 'Helvetica Neue', helvetica, 'Lucida Grande', arial, sans-serif;\n  font-size: 13px;\n  line-clamp: 3;\n  line-height: 16px;\n  max-height: 48px;\n  overflow: hidden;\n  text-overflow: -o-ellipsis-lastline;\n}\n\n.CodeMirror-hint-information .content p:first-child {\n  margin-top: 0;\n}\n\n.CodeMirror-hint-information .content p:last-child {\n  margin-bottom: 0;\n}\n\n.CodeMirror-hint-information .infoType {\n  color: #CA9800;\n  cursor: pointer;\n  display: inline;\n  margin-right: 0.5em;\n}\n\n.autoInsertedLeaf.cm-property {\n  animation-duration: 6s;\n  animation-name: insertionFade;\n  border-bottom: 2px solid rgba(255, 255, 255, 0);\n  border-radius: 2px;\n  margin: -2px -4px -1px;\n  padding: 2px 4px 1px;\n}\n\n@keyframes insertionFade {\n  from, to {\n    background: rgba(255, 255, 255, 0);\n    border-color: rgba(255, 255, 255, 0);\n  }\n\n  15%, 85% {\n    background: #fbffc9;\n    border-color: #f0f3c0;\n  }\n}\n\ndiv.CodeMirror-lint-tooltip {\n  background-color: white;\n  border-radius: 2px;\n  border: 0;\n  color: #141823;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n  line-height: 16px;\n  max-width: 430px;\n  opacity: 0;\n  padding: 8px 10px;\n  transition: opacity 0.15s;\n  white-space: pre-wrap;\n}\n\ndiv.CodeMirror-lint-tooltip > * {\n  padding-left: 23px;\n}\n\ndiv.CodeMirror-lint-tooltip > * + * {\n  margin-top: 12px;\n}\n\n/* COLORS */\n\n.graphiql-container .CodeMirror-foldmarker {\n  border-radius: 4px;\n  background: #08f;\n  background: linear-gradient(#43A8FF, #0F83E8);\n  box-shadow:\n    0 1px 1px rgba(0, 0, 0, 0.2),\n    inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n  color: white;\n  font-family: arial;\n  font-size: 12px;\n  line-height: 0;\n  margin: 0 3px;\n  padding: 0px 4px 1px;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);\n}\n\n.graphiql-container div.CodeMirror span.CodeMirror-matchingbracket {\n  color: #555;\n  text-decoration: underline;\n}\n\n.graphiql-container div.CodeMirror span.CodeMirror-nonmatchingbracket {\n  color: #f00;\n}\n\n/* Comment */\n.cm-comment {\n  color: #999;\n}\n\n/* Punctuation */\n.cm-punctuation {\n  color: #555;\n}\n\n/* Keyword */\n.cm-keyword {\n  color: #B11A04;\n}\n\n/* OperationName, FragmentName */\n.cm-def {\n  color: #D2054E;\n}\n\n/* FieldName */\n.cm-property {\n  color: #1F61A0;\n}\n\n/* FieldAlias */\n.cm-qualifier {\n  color: #1C92A9;\n}\n\n/* ArgumentName and ObjectFieldName */\n.cm-attribute {\n  color: #8B2BB9;\n}\n\n/* Number */\n.cm-number {\n  color: #2882F9;\n}\n\n/* String */\n.cm-string {\n  color: #D64292;\n}\n\n/* Boolean */\n.cm-builtin {\n  color: #D47509;\n}\n\n/* EnumValue */\n.cm-string-2 {\n  color: #0B7FC7;\n}\n\n/* Variable */\n.cm-variable {\n  color: #397D13;\n}\n\n/* Directive */\n.cm-meta {\n  color: #B33086;\n}\n\n/* Type */\n.cm-atom {\n  color: #CA9800;\n}\n/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  color: black;\n  font-family: monospace;\n  height: 300px;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  color: #999;\n  min-width: 20px;\n  padding: 0 3px 0 5px;\n  text-align: right;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror .CodeMirror-cursor {\n  border-left: 1px solid black;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.CodeMirror.cm-fat-cursor div.CodeMirror-cursor {\n  background: #7e7;\n  border: 0;\n  width: auto;\n}\n.CodeMirror.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  animation: blink 1.06s steps(1) infinite;\n  border: 0;\n  width: auto;\n}\n@keyframes blink {\n  0% { background: #7e7; }\n  50% { background: none; }\n  100% { background: #7e7; }\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\ndiv.CodeMirror-overwrite div.CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  background: white;\n  overflow: hidden;\n  position: relative;\n}\n\n.CodeMirror-scroll {\n  height: 100%;\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  outline: none; /* Prevent dragging from highlighting the element */\n  overflow: scroll !important; /* Things will break if this is overridden */\n  padding-bottom: 30px;\n  position: relative;\n}\n.CodeMirror-sizer {\n  border-right: 30px solid transparent;\n  position: relative;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  display: none;\n  position: absolute;\n  z-index: 6;\n}\n.CodeMirror-vscrollbar {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  right: 0; top: 0;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  min-height: 100%;\n  position: absolute; left: 0; top: 0;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  display: inline-block;\n  height: 100%;\n  margin-bottom: -30px;\n  vertical-align: top;\n  white-space: normal;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  background: none !important;\n  border: none !important;\n  position: absolute;\n  z-index: 4;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  cursor: default;\n  position: absolute;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  -webkit-tap-highlight-color: transparent;\n  /* Reset some styles that the rest of the page might have set */\n  background: transparent;\n  border-radius: 0;\n  border-width: 0;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-variant-ligatures: none;\n  line-height: inherit;\n  margin: 0;\n  overflow: visible;\n  position: relative;\n  white-space: pre;\n  word-wrap: normal;\n  z-index: 2;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  overflow: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n  visibility: hidden;\n  width: 100%;\n}\n\n.CodeMirror-cursor { position: absolute; }\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  position: relative;\n  visibility: hidden;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n\n.CodeMirror-dialog {\n  background: inherit;\n  color: inherit;\n  left: 0; right: 0;\n  overflow: hidden;\n  padding: .1em .8em;\n  position: absolute;\n  z-index: 15;\n}\n\n.CodeMirror-dialog-top {\n  border-bottom: 1px solid #eee;\n  top: 0;\n}\n\n.CodeMirror-dialog-bottom {\n  border-top: 1px solid #eee;\n  bottom: 0;\n}\n\n.CodeMirror-dialog input {\n  background: transparent;\n  border: 1px solid #d3d6db;\n  color: inherit;\n  font-family: monospace;\n  outline: none;\n  width: 20em;\n}\n\n.CodeMirror-dialog button {\n  font-size: 70%;\n}\n.graphiql-container .doc-explorer {\n  background: white;\n}\n\n.graphiql-container .doc-explorer-title-bar,\n.graphiql-container .history-title-bar {\n  cursor: default;\n  display: flex;\n  height: 34px;\n  line-height: 14px;\n  padding: 8px 8px 5px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .doc-explorer-title,\n.graphiql-container .history-title {\n  flex: 1;\n  font-weight: bold;\n  overflow-x: hidden;\n  padding: 10px 0 10px 10px;\n  text-align: center;\n  text-overflow: ellipsis;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  white-space: nowrap;\n}\n\n.graphiql-container .doc-explorer-back {\n  color: #3B5998;\n  cursor: pointer;\n  margin: -7px 0 -6px -8px;\n  overflow-x: hidden;\n  padding: 17px 12px 16px 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.doc-explorer-narrow .doc-explorer-back {\n  width: 0;\n}\n\n.graphiql-container .doc-explorer-back:before {\n  border-left: 2px solid #3B5998;\n  border-top: 2px solid #3B5998;\n  content: '';\n  display: inline-block;\n  height: 9px;\n  margin: 0 3px -1px 0;\n  position: relative;\n  -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n  width: 9px;\n}\n\n.graphiql-container .doc-explorer-rhs {\n  position: relative;\n}\n\n.graphiql-container .doc-explorer-contents,\n.graphiql-container .history-contents {\n  background-color: #ffffff;\n  border-top: 1px solid #d6d6d6;\n  bottom: 0;\n  left: 0;\n  overflow-y: auto;\n  padding: 20px 15px;\n  position: absolute;\n  right: 0;\n  top: 47px;\n}\n\n.graphiql-container .doc-explorer-contents {\n  min-width: 300px;\n}\n\n.graphiql-container .doc-type-description p:first-child ,\n.graphiql-container .doc-type-description blockquote:first-child {\n  margin-top: 0;\n}\n\n.graphiql-container .doc-explorer-contents a {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.graphiql-container .doc-explorer-contents a:hover {\n  text-decoration: underline;\n}\n\n.graphiql-container .doc-value-description > :first-child {\n  margin-top: 4px;\n}\n\n.graphiql-container .doc-value-description > :last-child {\n  margin-bottom: 4px;\n}\n\n.graphiql-container .doc-category {\n  margin: 20px 0;\n}\n\n.graphiql-container .doc-category-title {\n  border-bottom: 1px solid #e0e0e0;\n  color: #777;\n  cursor: default;\n  font-size: 14px;\n  font-variant: small-caps;\n  font-weight: bold;\n  letter-spacing: 1px;\n  margin: 0 -15px 10px 0;\n  padding: 10px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .doc-category-item {\n  margin: 12px 0;\n  color: #555;\n}\n\n.graphiql-container .keyword {\n  color: #B11A04;\n}\n\n.graphiql-container .type-name {\n  color: #CA9800;\n}\n\n.graphiql-container .field-name {\n  color: #1F61A0;\n}\n\n.graphiql-container .field-short-description {\n  color: #999;\n  margin-left: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.graphiql-container .enum-value {\n  color: #0B7FC7;\n}\n\n.graphiql-container .arg-name {\n  color: #8B2BB9;\n}\n\n.graphiql-container .arg {\n  display: block;\n  margin-left: 1em;\n}\n\n.graphiql-container .arg:first-child:last-child,\n.graphiql-container .arg:first-child:nth-last-child(2),\n.graphiql-container .arg:first-child:nth-last-child(2) ~ .arg {\n  display: inherit;\n  margin: inherit;\n}\n\n.graphiql-container .arg:first-child:nth-last-child(2):after {\n  content: ', ';\n}\n\n.graphiql-container .arg-default-value {\n  color: #43A047;\n}\n\n.graphiql-container .doc-deprecation {\n  background: #fffae8;\n  box-shadow: inset 0 0 1px #bfb063;\n  color: #867F70;\n  line-height: 16px;\n  margin: 8px -8px;\n  max-height: 80px;\n  overflow: hidden;\n  padding: 8px;\n  border-radius: 3px;\n}\n\n.graphiql-container .doc-deprecation:before {\n  content: 'Deprecated:';\n  color: #c79b2e;\n  cursor: default;\n  display: block;\n  font-size: 9px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 1;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .doc-deprecation > :first-child {\n  margin-top: 0;\n}\n\n.graphiql-container .doc-deprecation > :last-child {\n  margin-bottom: 0;\n}\n\n.graphiql-container .show-btn {\n  -webkit-appearance: initial;\n  display: block;\n  border-radius: 3px;\n  border: solid 1px #ccc;\n  text-align: center;\n  padding: 8px 12px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fbfcfc;\n  color: #555;\n  cursor: pointer;\n}\n\n.graphiql-container .search-box {\n  border-bottom: 1px solid #d3d6db;\n  display: block;\n  font-size: 14px;\n  margin: -15px -15px 12px 0;\n  position: relative;\n}\n\n.graphiql-container .search-box:before {\n  content: '\\26b2';\n  cursor: pointer;\n  display: block;\n  font-size: 24px;\n  position: absolute;\n  top: -2px;\n  -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .search-box .search-box-clear {\n  background-color: #d0d0d0;\n  border-radius: 12px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 11px;\n  padding: 1px 5px 2px;\n  position: absolute;\n  right: 3px;\n  top: 8px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .search-box .search-box-clear:hover {\n  background-color: #b9b9b9;\n}\n\n.graphiql-container .search-box > input {\n  border: none;\n  box-sizing: border-box;\n  font-size: 14px;\n  outline: none;\n  padding: 6px 24px 8px 20px;\n  width: 100%;\n}\n\n.graphiql-container .error-container {\n  font-weight: bold;\n  left: 0;\n  letter-spacing: 1px;\n  opacity: 0.5;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-transform: uppercase;\n  top: 50%;\n  -ms-transform: translate(0, -50%);\n      transform: translate(0, -50%);\n}\n.CodeMirror-foldmarker {\n  color: blue;\n  cursor: pointer;\n  font-family: arial;\n  line-height: .3;\n  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;\n}\n.CodeMirror-foldgutter {\n  width: .7em;\n}\n.CodeMirror-foldgutter-open,\n.CodeMirror-foldgutter-folded {\n  cursor: pointer;\n}\n.CodeMirror-foldgutter-open:after {\n  content: \"\\25BE\";\n}\n.CodeMirror-foldgutter-folded:after {\n  content: \"\\25B8\";\n}\n.graphiql-container .history-contents,\n.graphiql-container .history-contents input {\n  font-family: 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace;\n  padding: 0;\n}\n\n.graphiql-container .history-contents p {\n  align-items: center;\n  display: flex;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n  padding: 8px;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.graphiql-container .history-contents p.editable {\n  padding-bottom: 6px;\n  padding-top: 7px;\n}\n\n.graphiql-container .history-contents input {\n  flex-grow: 1;\n  font-size: 12px;\n}\n\n.graphiql-container .history-contents p:hover {\n  cursor: pointer;\n}\n\n.graphiql-container .history-contents p span.history-label {\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}.CodeMirror-info {\n  background: white;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);\n  box-sizing: border-box;\n  color: #555;\n  font-family:\n    system,\n    -apple-system,\n    'San Francisco',\n    '.SFNSDisplay-Regular',\n    'Segoe UI',\n    Segoe,\n    'Segoe WP',\n    'Helvetica Neue',\n    helvetica,\n    'Lucida Grande',\n    arial,\n    sans-serif;\n  font-size: 13px;\n  line-height: 16px;\n  margin: 8px -8px;\n  max-width: 400px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 8px 8px;\n  position: fixed;\n  transition: opacity 0.15s;\n  z-index: 50;\n}\n\n.CodeMirror-info :first-child {\n  margin-top: 0;\n}\n\n.CodeMirror-info :last-child {\n  margin-bottom: 0;\n}\n\n.CodeMirror-info p {\n  margin: 1em 0;\n}\n\n.CodeMirror-info .info-description {\n  color: #777;\n  line-height: 16px;\n  margin-top: 1em;\n  max-height: 80px;\n  overflow: hidden;\n}\n\n.CodeMirror-info .info-deprecation {\n  background: #fffae8;\n  box-shadow: inset 0 1px 1px -1px #bfb063;\n  color: #867F70;\n  line-height: 16px;\n  margin: -8px;\n  margin-top: 8px;\n  max-height: 80px;\n  overflow: hidden;\n  padding: 8px;\n}\n\n.CodeMirror-info .info-deprecation-label {\n  color: #c79b2e;\n  cursor: default;\n  display: block;\n  font-size: 9px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 1;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.CodeMirror-info .info-deprecation-label + * {\n  margin-top: 0;\n}\n\n.CodeMirror-info a {\n  text-decoration: none;\n}\n\n.CodeMirror-info a:hover {\n  text-decoration: underline;\n}\n\n.CodeMirror-info .type-name {\n  color: #CA9800;\n}\n\n.CodeMirror-info .field-name {\n  color: #1F61A0;\n}\n\n.CodeMirror-info .enum-value {\n  color: #0B7FC7;\n}\n\n.CodeMirror-info .arg-name {\n  color: #8B2BB9;\n}\n\n.CodeMirror-info .directive-name {\n  color: #B33086;\n}\n.CodeMirror-jump-token {\n  text-decoration: underline;\n  cursor: pointer;\n}\n/* The lint marker gutter */\n.CodeMirror-lint-markers {\n  width: 16px;\n}\n\n.CodeMirror-lint-tooltip {\n  background-color: infobackground;\n  border-radius: 4px 4px 4px 4px;\n  border: 1px solid black;\n  color: infotext;\n  font-family: monospace;\n  font-size: 10pt;\n  max-width: 600px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 2px 5px;\n  position: fixed;\n  transition: opacity .4s;\n  white-space: pre-wrap;\n  z-index: 100;\n}\n\n.CodeMirror-lint-mark-error, .CodeMirror-lint-mark-warning {\n  background-position: left bottom;\n  background-repeat: repeat-x;\n}\n\n.CodeMirror-lint-mark-error {\n  background-image:\n  url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==\")\n  ;\n}\n\n.CodeMirror-lint-mark-warning {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJFhQXEbhTg7YAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVQI12NkgIIvJ3QXMjAwdDN+OaEbysDA4MPAwNDNwMCwiOHLCd1zX07o6kBVGQEAKBANtobskNMAAAAASUVORK5CYII=\");\n}\n\n.CodeMirror-lint-marker-error, .CodeMirror-lint-marker-warning {\n  background-position: center center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  position: relative;\n  vertical-align: middle;\n  width: 16px;\n}\n\n.CodeMirror-lint-message-error, .CodeMirror-lint-message-warning {\n  background-position: top left;\n  background-repeat: no-repeat;\n  padding-left: 18px;\n}\n\n.CodeMirror-lint-marker-error, .CodeMirror-lint-message-error {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII=\");\n}\n\n.CodeMirror-lint-marker-warning, .CodeMirror-lint-message-warning {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII=\");\n}\n\n.CodeMirror-lint-marker-multiple {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC\");\n  background-position: right bottom;\n  background-repeat: no-repeat;\n  width: 100%; height: 100%;\n}\n.graphiql-container .spinner-container {\n  height: 36px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  width: 36px;\n  z-index: 10;\n}\n\n.graphiql-container .spinner {\n  animation: rotation .6s infinite linear;\n  border-bottom: 6px solid rgba(150, 150, 150, .15);\n  border-left: 6px solid rgba(150, 150, 150, .15);\n  border-radius: 100%;\n  border-right: 6px solid rgba(150, 150, 150, .15);\n  border-top: 6px solid rgba(150, 150, 150, .8);\n  display: inline-block;\n  height: 24px;\n  position: absolute;\n  vertical-align: middle;\n  width: 24px;\n}\n\n@keyframes rotation {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(359deg); }\n}\n.CodeMirror-hints {\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);\n  font-family: 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace;\n  font-size: 13px;\n  list-style: none;\n  margin-left: -6px;\n  margin: 0;\n  max-height: 14.5em;\n  overflow-y: auto;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  z-index: 10;\n}\n\n.CodeMirror-hint {\n  border-top: solid 1px #f7f7f7;\n  color: #141823;\n  cursor: pointer;\n  margin: 0;\n  max-width: 300px;\n  overflow: hidden;\n  padding: 2px 6px;\n  white-space: pre;\n}\n\nli.CodeMirror-hint-active {\n  background-color: #08f;\n  border-top-color: white;\n  color: white;\n}\n\n.CodeMirror-hint-information {\n  border-top: solid 1px #c0c0c0;\n  max-width: 300px;\n  padding: 4px 6px;\n  position: relative;\n  z-index: 1;\n}\n\n.CodeMirror-hint-information:first-child {\n  border-bottom: solid 1px #c0c0c0;\n  border-top: none;\n  margin-bottom: -1px;\n}\n\n.CodeMirror-hint-deprecation {\n  background: #fffae8;\n  box-shadow: inset 0 1px 1px -1px #bfb063;\n  color: #867F70;\n  font-family:\n    system,\n    -apple-system,\n    'San Francisco',\n    '.SFNSDisplay-Regular',\n    'Segoe UI',\n    Segoe,\n    'Segoe WP',\n    'Helvetica Neue',\n    helvetica,\n    'Lucida Grande',\n    arial,\n    sans-serif;\n  font-size: 13px;\n  line-height: 16px;\n  margin-top: 4px;\n  max-height: 80px;\n  overflow: hidden;\n  padding: 6px;\n}\n\n.CodeMirror-hint-deprecation .deprecation-label {\n  color: #c79b2e;\n  cursor: default;\n  display: block;\n  font-size: 9px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 1;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.CodeMirror-hint-deprecation .deprecation-label + * {\n  margin-top: 0;\n}\n\n.CodeMirror-hint-deprecation :last-child {\n  margin-bottom: 0;\n}\n",""]),e.exports=t},"7oSj":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fillLeafs=function(e,t,n){var a,s=[]
if(!e)return{insertions:s,result:t}
try{a=(0,r.parse)(t)}catch(e){return{insertions:s,result:t}}var c=n||i,l=new r.TypeInfo(e)
return(0,r.visit)(a,{leave:function(e){l.leave(e)},enter:function(e){if(l.enter(e),"Field"===e.kind&&!e.selectionSet){var n=function e(t,n){var i=(0,r.getNamedType)(t)
if(!t||(0,r.isLeafType)(t))return
var o=n(i)
if(!Array.isArray(o)||0===o.length)return
return{kind:"SelectionSet",selections:o.map((function(t){var r=i.getFields()[t],o=r?r.type:null
return{kind:"Field",name:{kind:"Name",value:t},selectionSet:e(o,n)}}))}}(l.getType(),c)
if(n){var i=function(e,t){var n=t,r=t
for(;n;){var i=e.charCodeAt(n-1)
if(10===i||13===i||8232===i||8233===i)break
n--,9!==i&&11!==i&&12!==i&&32!==i&&160!==i&&(r=n)}return e.substring(n,r)}(t,e.loc.start)
s.push({index:e.loc.end,string:" "+(0,r.print)(n).replace(/\n/g,"\n"+i)})}}}}),{insertions:s,result:o(t,s)}}
var r=n("Tzvz")
function i(e){if(!e.getFields)return[]
var t=e.getFields()
if(t.id)return["id"]
if(t.edges)return["edges"]
if(t.node)return["node"]
var n=[]
return Object.keys(t).forEach((function(e){(0,r.isLeafType)(t[e].type)&&n.push(e)})),n}function o(e,t){if(0===t.length)return e
var n="",r=0
return t.forEach((function(t){var i=t.index,o=t.string
n+=e.slice(r,i)+o,r=i})),n+=e.slice(r)}},"8O83":function(e,t,n){"use strict"
function r(e){const t=/^.+\.([^.]+)$/.exec(e)
return t&&t.length>1?t[1]:null}function i(e,t){let n=e
return t&&(n=e.substr(0,e.length-(t.length+1))),n}function o(e){if(e)throw Error(`cannot import() module with extension '${e}'`)}n.r(t),n.d(t,"getFileExtension",(function(){return r})),n.d(t,"getPathWithoutExtension",(function(){return i})),n.d(t,"resolveFile",(function(){return u})),n.d(t,"requireFile",(function(){return f}))
const a=e=>n("Lxz9").resolve(e+".js"),s=e=>n("FBZJ").resolve(e+".json"),c=e=>n("6VjI")(e+".js"),l=e=>n("3PdN")(e+".json")
function u(e){const t=r(e),n=i(e,t)
switch(t){case"js":return a(n)
case"json":return s(n)
default:try{return a(e)}catch(t){return s(e)}}}function f(e){const t=r(e),n=i(e,t)
switch(t){case"js":return u(n+".js")?c(n):null
case"json":return u(n+".json")?l(n):null
default:try{if(u(e+".js"))return c(e)}catch(e){o(t)}if(u(e+".json"))return l(e)
o(t)}}},"8PLQ":function(e){e.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},"8Ur0":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.getFieldReference=function(e){return{kind:"Field",schema:e.schema,field:e.fieldDef,type:i(e.fieldDef)?null:e.parentType}},t.getDirectiveReference=function(e){return{kind:"Directive",schema:e.schema,directive:e.directiveDef}},t.getArgumentReference=function(e){return e.directiveDef?{kind:"Argument",schema:e.schema,argument:e.argDef,directive:e.directiveDef}:{kind:"Argument",schema:e.schema,argument:e.argDef,field:e.fieldDef,type:i(e.fieldDef)?null:e.parentType}},t.getEnumValueReference=function(e){return{kind:"EnumValue",value:e.enumValue,type:(0,r.getNamedType)(e.inputType)}},t.getTypeReference=function(e,t){return{kind:"Type",schema:e.schema,type:t||e.type}}
var r=n("Tzvz")
function i(e){return"__"===e.name.slice(0,2)}},"93gR":function(e,t,n){"use strict"
n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return g}))
var r=n("1/U3"),i=n("PXbX"),o=n("1QEH"),a=n("Y/la"),s=n("rWdj"),c=n("dWS+"),l=n("5PMP"),u=n("sJV+"),f=n("4suF"),p=n("LViu"),d=n("51nL"),h=n("axIb")
function m(e){if(Object(d.b)(e),e.__validationErrors)return e.__validationErrors
var t=new v(e)
!function(e){var t=e.schema,n=t.getQueryType()
n?Object(h.N)(n)||e.reportError("Query root type must be Object type, it cannot be ".concat(Object(s.a)(n),"."),y(t,n,"query")):e.reportError("Query root type must be provided.",t.astNode)
var r=t.getMutationType()
r&&!Object(h.N)(r)&&e.reportError("Mutation root type must be Object type if provided, it cannot be "+"".concat(Object(s.a)(r),"."),y(t,r,"mutation"))
var i=t.getSubscriptionType()
i&&!Object(h.N)(i)&&e.reportError("Subscription root type must be Object type if provided, it cannot be "+"".concat(Object(s.a)(i),"."),y(t,i,"subscription"))}(t),function(e){for(var t=0,n=e.schema.getDirectives();t<n.length;t++){var r=n[t]
if(Object(f.g)(r)){b(e,r)
for(var i=Object.create(null),o=function(t,n){var o=n[t],a=o.name
if(b(e,o),i[a])return e.reportError("Argument @".concat(r.name,"(").concat(a,":) can only be defined once."),r.astNode&&r.args.filter((function(e){return e.name===a})).map((function(e){return e.astNode}))),"continue"
i[a]=!0,Object(h.G)(o.type)||e.reportError("The type of @".concat(r.name,"(").concat(a,":) must be Input Type ")+"but got: ".concat(Object(s.a)(o.type),"."),o.astNode)},a=0,c=r.args;a<c.length;a++)o(a,c)}else e.reportError("Expected directive but got: ".concat(Object(s.a)(r),"."),r&&r.astNode)}}(t),function(e){for(var t=function(e){var t=Object.create(null),n=[],r=Object.create(null)
return function i(a){if(t[a.name])return
t[a.name]=!0,r[a.name]=n.length
for(var s=Object(o.a)(a.getFields()),c=0;c<s.length;c++){var l=s[c]
if(Object(h.L)(l.type)&&Object(h.F)(l.type.ofType)){var u=l.type.ofType,f=r[u.name]
if(n.push(l),void 0===f)i(u)
else{var p=n.slice(f),d=p.map((function(e){return e.name})).join(".")
e.reportError('Cannot reference Input Object "'.concat(u.name,'" within itself through a series of non-null fields: "').concat(d,'".'),p.map((function(e){return e.astNode})))}n.pop()}}r[a.name]=void 0}}(e),n=e.schema.getTypeMap(),r=0,i=Object(o.a)(n);r<i.length;r++){var a=i[r]
Object(h.K)(a)?(Object(p.isIntrospectionType)(a)||b(e,a),Object(h.N)(a)?(O(e,a),w(e,a)):Object(h.H)(a)?O(e,a):Object(h.T)(a)?k(e,a):Object(h.E)(a)?E(e,a):Object(h.F)(a)&&(C(e,a),t(a))):e.reportError("Expected GraphQL named type but got: ".concat(Object(s.a)(a),"."),a&&a.astNode)}}(t)
var n=t.getErrors()
return e.__validationErrors=n,n}function g(e){var t=m(e)
if(0!==t.length)throw new Error(t.map((function(e){return e.message})).join("\n\n"))}var v=function(){function e(e){this._errors=[],this.schema=e}var t=e.prototype
return t.reportError=function(e,t){var n=Array.isArray(t)?t.filter(Boolean):t
this.addError(new c.a(e,n))},t.addError=function(e){this._errors.push(e)},t.getErrors=function(){return this._errors},e}()
function y(e,t,n){for(var r=_(e,(function(e){return e.operationTypes})),i=0;i<r.length;i++){var o=r[i]
if(o.operation===n)return o.type}return t.astNode}function b(e,t){if(-1===e.schema.__allowedLegacyNames.indexOf(t.name)){var n=Object(l.b)(t.name,t.astNode||void 0)
n&&e.addError(n)}}function O(e,t){var n=Object(o.a)(t.getFields())
0===n.length&&e.reportError("Type ".concat(t.name," must define one or more fields."),T(t))
for(var r=0;r<n.length;r++){var i=n[r]
b(e,i),Object(h.O)(i.type)||e.reportError("The type of ".concat(t.name,".").concat(i.name," must be Output Type ")+"but got: ".concat(Object(s.a)(i.type),"."),i.astNode&&i.astNode.type)
for(var a=Object.create(null),c=function(n,r){var o=r[n],c=o.name
b(e,o),a[c]&&e.reportError("Field argument ".concat(t.name,".").concat(i.name,"(").concat(c,":) can only be defined once."),i.args.filter((function(e){return e.name===c})).map((function(e){return e.astNode}))),a[c]=!0,Object(h.G)(o.type)||e.reportError("The type of ".concat(t.name,".").concat(i.name,"(").concat(c,":) must be Input ")+"Type but got: ".concat(Object(s.a)(o.type),"."),o.astNode&&o.astNode.type)},l=0,u=i.args;l<u.length;l++)c(l,u)}}function w(e,t){for(var n=Object.create(null),r=0,i=t.getInterfaces();r<i.length;r++){var o=i[r]
Object(h.H)(o)?n[o.name]?e.reportError("Type ".concat(t.name," can only implement ").concat(o.name," once."),S(t,o)):(n[o.name]=!0,x(e,t,o)):e.reportError("Type ".concat(Object(s.a)(t)," must only implement Interface types, ")+"it cannot implement ".concat(Object(s.a)(o),"."),S(t,o))}}function x(e,t,n){for(var i=t.getFields(),o=n.getFields(),c=0,l=Object(a.a)(o);c<l.length;c++){var f=l[c],p=f[0],d=f[1],m=i[p]
if(m){Object(u.c)(e.schema,m.type,d.type)||e.reportError("Interface field ".concat(n.name,".").concat(p," expects type ")+"".concat(Object(s.a)(d.type)," but ").concat(t.name,".").concat(p," ")+"is type ".concat(Object(s.a)(m.type),"."),[d.astNode&&d.astNode.type,m.astNode&&m.astNode.type])
for(var g=function(i,o){var a=o[i],c=a.name,l=Object(r.a)(m.args,(function(e){return e.name===c}))
if(!l)return e.reportError("Interface field argument ".concat(n.name,".").concat(p,"(").concat(c,":) expected but ").concat(t.name,".").concat(p," does not provide it."),[a.astNode,m.astNode]),"continue"
Object(u.b)(a.type,l.type)||e.reportError("Interface field argument ".concat(n.name,".").concat(p,"(").concat(c,":) ")+"expects type ".concat(Object(s.a)(a.type)," but ")+"".concat(t.name,".").concat(p,"(").concat(c,":) is type ")+"".concat(Object(s.a)(l.type),"."),[a.astNode&&a.astNode.type,l.astNode&&l.astNode.type])},v=0,y=d.args;v<y.length;v++)g(v,y)
for(var b=function(i,o){var a=o[i],s=a.name
!Object(r.a)(d.args,(function(e){return e.name===s}))&&Object(h.P)(a)&&e.reportError("Object field ".concat(t.name,".").concat(p," includes required argument ").concat(s," that is missing from the Interface field ").concat(n.name,".").concat(p,"."),[a.astNode,d.astNode])},O=0,w=m.args;O<w.length;O++)b(O,w)}else e.reportError("Interface field ".concat(n.name,".").concat(p," expected but ").concat(t.name," does not provide it."),[d.astNode].concat(T(t)))}}function k(e,t){var n=t.getTypes()
0===n.length&&e.reportError("Union type ".concat(t.name," must define one or more member types."),T(t))
for(var r=Object.create(null),i=0;i<n.length;i++){var o=n[i]
r[o.name]?e.reportError("Union type ".concat(t.name," can only include type ").concat(o.name," once."),N(t,o.name)):(r[o.name]=!0,Object(h.N)(o)||e.reportError("Union type ".concat(t.name," can only include Object types, ")+"it cannot include ".concat(Object(s.a)(o),"."),N(t,String(o))))}}function E(e,t){var n=t.getValues()
0===n.length&&e.reportError("Enum type ".concat(t.name," must define one or more values."),T(t))
for(var r=0;r<n.length;r++){var i=n[r],o=i.name
b(e,i),"true"!==o&&"false"!==o&&"null"!==o||e.reportError("Enum type ".concat(t.name," cannot include value: ").concat(o,"."),i.astNode)}}function C(e,t){var n=Object(o.a)(t.getFields())
0===n.length&&e.reportError("Input Object type ".concat(t.name," must define one or more fields."),T(t))
for(var r=0;r<n.length;r++){var i=n[r]
b(e,i),Object(h.G)(i.type)||e.reportError("The type of ".concat(t.name,".").concat(i.name," must be Input Type ")+"but got: ".concat(Object(s.a)(i.type),"."),i.astNode&&i.astNode.type)}}function T(e){var t=e.astNode,n=e.extensionASTNodes
return t?n?[t].concat(n):[t]:n||[]}function _(e,t){return Object(i.a)(T(e),(function(e){return t(e)||[]}))}function S(e,t){return _(e,(function(e){return e.interfaces})).filter((function(e){return e.name.value===t.name}))}function N(e,t){return _(e,(function(e){return e.types})).filter((function(e){return e.name.value===t}))}},"9Gwe":function(e,t,n){"use strict"
var r=s(n("VrN/")),i=n("Tzvz"),o=s(n("DOSD")),a=s(n("ruyP"))
function s(e){return e&&e.__esModule?e:{default:e}}r.default.registerHelper("hint","graphql-variables",(function(e,t){var n=e.getCursor(),s=e.getTokenAt(n),c=function(e,t,n){var r="Invalid"===t.state.kind?t.state.prevState:t.state,s=r.kind,c=r.step
if("Document"===s&&0===c)return(0,a.default)(e,t,[{text:"{"}])
var l=n.variableToType
if(!l)return
var u=function(e,t){var n={type:null,fields:null}
return(0,o.default)(t,(function(t){if("Variable"===t.kind)n.type=e[t.name]
else if("ListValue"===t.kind){var r=(0,i.getNullableType)(n.type)
n.type=r instanceof i.GraphQLList?r.ofType:null}else if("ObjectValue"===t.kind){var o=(0,i.getNamedType)(n.type)
n.fields=o instanceof i.GraphQLInputObjectType?o.getFields():null}else if("ObjectField"===t.kind){var a=t.name&&n.fields?n.fields[t.name]:null
n.type=a&&a.type}})),n}(l,t.state)
if("Document"===s||"Variable"===s&&0===c){var f=Object.keys(l)
return(0,a.default)(e,t,f.map((function(e){return{text:'"'.concat(e,'": '),type:l[e]}})))}if(("ObjectValue"===s||"ObjectField"===s&&0===c)&&u.fields){var p=Object.keys(u.fields).map((function(e){return u.fields[e]}))
return(0,a.default)(e,t,p.map((function(e){return{text:'"'.concat(e.name,'": '),type:e.type,description:e.description}})))}if("StringValue"===s||"NumberValue"===s||"BooleanValue"===s||"NullValue"===s||"ListValue"===s&&1===c||"ObjectField"===s&&2===c||"Variable"===s&&2===c){var d=(0,i.getNamedType)(u.type)
if(d instanceof i.GraphQLInputObjectType)return(0,a.default)(e,t,[{text:"{"}])
if(d instanceof i.GraphQLEnumType){var h=d.getValues(),m=Object.keys(h).map((function(e){return h[e]}))
return(0,a.default)(e,t,m.map((function(e){return{text:'"'.concat(e.name,'"'),type:d,description:e.description}})))}if(d===i.GraphQLBoolean)return(0,a.default)(e,t,[{text:"true",type:i.GraphQLBoolean,description:"Not false."},{text:"false",type:i.GraphQLBoolean,description:"Not true."}])}}(n,s,t)
return c&&c.list&&c.list.length>0&&(c.from=r.default.Pos(c.from.line,c.from.column),c.to=r.default.Pos(c.to.line,c.to.column),r.default.signal(e,"hasCompletion",e,c,s)),c}))},"9Iv4":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=s
var r=a(n("q1tI")),i=a(n("17x9")),o=n("Tzvz")
function a(e){return e&&e.__esModule?e:{default:e}}function s(e){var t=e.field,n=t.type,i=t.defaultValue
return void 0!==i?r.default.createElement("span",null," = ",r.default.createElement("span",{className:"arg-default-value"},(0,o.print)((0,o.astFromValue)(i,n)))):null}s.propTypes={field:i.default.object.isRequired}},"9lTW":function(e,t,n){"use strict";(function(t){var r=n("MgzW")
function i(e,t){if(e===t)return 0
for(var n=e.length,r=t.length,i=0,o=Math.min(n,r);i<o;++i)if(e[i]!==t[i]){n=e[i],r=t[i]
break}return n<r?-1:r<n?1:0}function o(e){return t.Buffer&&"function"==typeof t.Buffer.isBuffer?t.Buffer.isBuffer(e):!(null==e||!e._isBuffer)}var a=n("MCLT"),s=Object.prototype.hasOwnProperty,c=Array.prototype.slice,l="foo"===function(){}.name
function u(e){return Object.prototype.toString.call(e)}function f(e){return!o(e)&&("function"==typeof t.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(e):!!e&&(e instanceof DataView||!!(e.buffer&&e.buffer instanceof ArrayBuffer))))}var p=e.exports=y,d=/\s*function\s+([^\(\s]*)\s*/
function h(e){if(a.isFunction(e)){if(l)return e.name
var t=e.toString().match(d)
return t&&t[1]}}function m(e,t){return"string"==typeof e?e.length<t?e:e.slice(0,t):e}function g(e){if(l||!a.isFunction(e))return a.inspect(e)
var t=h(e)
return"[Function"+(t?": "+t:"")+"]"}function v(e,t,n,r,i){throw new p.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}function y(e,t){e||v(e,!0,t,"==",p.ok)}function b(e,t,n,r){if(e===t)return!0
if(o(e)&&o(t))return 0===i(e,t)
if(a.isDate(e)&&a.isDate(t))return e.getTime()===t.getTime()
if(a.isRegExp(e)&&a.isRegExp(t))return e.source===t.source&&e.global===t.global&&e.multiline===t.multiline&&e.lastIndex===t.lastIndex&&e.ignoreCase===t.ignoreCase
if(null!==e&&"object"==typeof e||null!==t&&"object"==typeof t){if(f(e)&&f(t)&&u(e)===u(t)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===i(new Uint8Array(e.buffer),new Uint8Array(t.buffer))
if(o(e)!==o(t))return!1
var s=(r=r||{actual:[],expected:[]}).actual.indexOf(e)
return-1!==s&&s===r.expected.indexOf(t)||(r.actual.push(e),r.expected.push(t),function(e,t,n,r){if(null==e||null==t)return!1
if(a.isPrimitive(e)||a.isPrimitive(t))return e===t
if(n&&Object.getPrototypeOf(e)!==Object.getPrototypeOf(t))return!1
var i=O(e),o=O(t)
if(i&&!o||!i&&o)return!1
if(i)return e=c.call(e),t=c.call(t),b(e,t,n)
var s,l,u=k(e),f=k(t)
if(u.length!==f.length)return!1
for(u.sort(),f.sort(),l=u.length-1;l>=0;l--)if(u[l]!==f[l])return!1
for(l=u.length-1;l>=0;l--)if(s=u[l],!b(e[s],t[s],n,r))return!1
return!0}(e,t,n,r))}return n?e===t:e==t}function O(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function w(e,t){if(!e||!t)return!1
if("[object RegExp]"==Object.prototype.toString.call(t))return t.test(e)
try{if(e instanceof t)return!0}catch(e){}return!Error.isPrototypeOf(t)&&!0===t.call({},e)}function x(e,t,n,r){var i
if("function"!=typeof t)throw new TypeError('"block" argument must be a function')
"string"==typeof n&&(r=n,n=null),i=function(e){var t
try{e()}catch(e){t=e}return t}(t),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),e&&!i&&v(i,n,"Missing expected exception"+r)
var o="string"==typeof r,s=!e&&i&&!n
if((!e&&a.isError(i)&&o&&w(i,n)||s)&&v(i,n,"Got unwanted exception"+r),e&&i&&n&&!w(i,n)||!e&&i)throw i}p.AssertionError=function(e){var t
this.name="AssertionError",this.actual=e.actual,this.expected=e.expected,this.operator=e.operator,e.message?(this.message=e.message,this.generatedMessage=!1):(this.message=m(g((t=this).actual),128)+" "+t.operator+" "+m(g(t.expected),128),this.generatedMessage=!0)
var n=e.stackStartFunction||v
if(Error.captureStackTrace)Error.captureStackTrace(this,n)
else{var r=new Error
if(r.stack){var i=r.stack,o=h(n),a=i.indexOf("\n"+o)
if(a>=0){var s=i.indexOf("\n",a+1)
i=i.substring(s+1)}this.stack=i}}},a.inherits(p.AssertionError,Error),p.fail=v,p.ok=y,p.equal=function(e,t,n){e!=t&&v(e,t,n,"==",p.equal)},p.notEqual=function(e,t,n){e==t&&v(e,t,n,"!=",p.notEqual)},p.deepEqual=function(e,t,n){b(e,t,!1)||v(e,t,n,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(e,t,n){b(e,t,!0)||v(e,t,n,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(e,t,n){b(e,t,!1)&&v(e,t,n,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=function e(t,n,r){b(t,n,!0)&&v(t,n,r,"notDeepStrictEqual",e)},p.strictEqual=function(e,t,n){e!==t&&v(e,t,n,"===",p.strictEqual)},p.notStrictEqual=function(e,t,n){e===t&&v(e,t,n,"!==",p.notStrictEqual)},p.throws=function(e,t,n){x(!0,e,t,n)},p.doesNotThrow=function(e,t,n){x(!1,e,t,n)},p.ifError=function(e){if(e)throw e},p.strict=r((function e(t,n){t||v(t,!0,n,"==",e)}),p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict
var k=Object.keys||function(e){var t=[]
for(var n in e)s.call(e,n)&&t.push(n)
return t}}).call(this,n("yLpj"))},"9tPo":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location
if(!t)throw new Error("fixUrls requires window.location")
if(!e||"string"!=typeof e)return e
var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/")
return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}))
return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}},A67W:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("dWS+")
function i(e,t){return t?'Variable "$'.concat(e,'" is never used in operation "').concat(t,'".'):'Variable "$'.concat(e,'" is never used.')}function o(e){var t=[]
return{OperationDefinition:{enter:function(){t=[]},leave:function(n){for(var o=Object.create(null),a=e.getRecursiveVariableUsages(n),s=n.name?n.name.value:null,c=0;c<a.length;c++){o[a[c].node.name.value]=!0}for(var l=0,u=t;l<u.length;l++){var f=u[l],p=f.variable.name.value
!0!==o[p]&&e.reportError(new r.a(i(p,s),f))}}},VariableDefinition:function(e){t.push(e)}}}},ADFt:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n("rWdj"),i=n("2C6G"),o=n("WXJZ"),a=n("/kEc"),s=n("/jXB")
function c(e,t){switch(e.kind){case s.Kind.NULL:return null
case s.Kind.INT:return parseInt(e.value,10)
case s.Kind.FLOAT:return parseFloat(e.value)
case s.Kind.STRING:case s.Kind.ENUM:case s.Kind.BOOLEAN:return e.value
case s.Kind.LIST:return e.values.map((function(e){return c(e,t)}))
case s.Kind.OBJECT:return Object(o.a)(e.fields,(function(e){return e.name.value}),(function(e){return c(e.value,t)}))
case s.Kind.VARIABLE:var n=e.name.value
return t&&!Object(a.a)(t[n])?t[n]:void 0}Object(i.a)(!1,"Unexpected value node: "+Object(r.a)(e))}},AF4T:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=e.getSchema(),n=t&&(t.astNode||t.getQueryType()||t.getMutationType()||t.getSubscriptionType()),i=0
return{SchemaDefinition:function(t){n?e.reportError(new r.a("Cannot define a new schema within a schema extension.",t)):(i>0&&e.reportError(new r.a("Must provide only one schema definition.",t)),++i)}}}},AGgm:function(e,t,n){"use strict"
var r=Object.prototype.hasOwnProperty
function i(e,t){return r.call(e,t)}function o(e){return!(e>=55296&&e<=57343)&&(!(e>=64976&&e<=65007)&&(65535!=(65535&e)&&65534!=(65535&e)&&(!(e>=0&&e<=8)&&(11!==e&&(!(e>=14&&e<=31)&&(!(e>=127&&e<=159)&&!(e>1114111)))))))}function a(e){if(e>65535){var t=55296+((e-=65536)>>10),n=56320+(1023&e)
return String.fromCharCode(t,n)}return String.fromCharCode(e)}var s=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,c=new RegExp(s.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),l=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,u=n("vWgF")
var f=/[&<>"]/,p=/[&<>"]/g,d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}
function h(e){return d[e]}var m=/[.?*+^$[\]\\(){}|-]/g
var g=n("fKCf")
t.lib={},t.lib.mdurl=n("2KYT"),t.lib.ucmicro=n("1dGX"),t.assign=function(e){var t=Array.prototype.slice.call(arguments,1)
return t.forEach((function(t){if(t){if("object"!=typeof t)throw new TypeError(t+"must be object")
Object.keys(t).forEach((function(n){e[n]=t[n]}))}})),e},t.isString=function(e){return"[object String]"===function(e){return Object.prototype.toString.call(e)}(e)},t.has=i,t.unescapeMd=function(e){return e.indexOf("\\")<0?e:e.replace(s,"$1")},t.unescapeAll=function(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(c,(function(e,t,n){return t||function(e,t){var n=0
return i(u,t)?u[t]:35===t.charCodeAt(0)&&l.test(t)&&o(n="x"===t[1].toLowerCase()?parseInt(t.slice(2),16):parseInt(t.slice(1),10))?a(n):e}(e,n)}))},t.isValidEntityCode=o,t.fromCodePoint=a,t.escapeHtml=function(e){return f.test(e)?e.replace(p,h):e},t.arrayReplaceAt=function(e,t,n){return[].concat(e.slice(0,t),n,e.slice(t+1))},t.isSpace=function(e){switch(e){case 9:case 32:return!0}return!1},t.isWhiteSpace=function(e){if(e>=8192&&e<=8202)return!0
switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},t.isMdAsciiPunct=function(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0
default:return!1}},t.isPunctChar=function(e){return g.test(e)},t.escapeRE=function(e){return e.replace(m,"\\$&")},t.normalizeReference=function(e){return e.trim().replace(/\s+/g," ").toUpperCase()}},"AW/X":function(e,t,n){"use strict"
n.d(t,"a",(function(){return h}))
var r=n("1QEH"),i=n("kBjl"),o=n("rWdj"),a=n("/kEc"),s=n("pv/G"),c=n("T95z"),l=n("dWS+"),u=n("dQau"),f=n("axIb")
function p(e,t,n){return"Expected type ".concat(e,", found ").concat(t)+(n?"; ".concat(n):".")}function d(e,t,n){return"Expected type ".concat(e,", found ").concat(t,".")+Object(s.a)("the enum value",n)}function h(e){return{NullValue:function(t){var n=e.getInputType()
Object(f.L)(n)&&e.reportError(new l.a(p(Object(o.a)(n),Object(u.a)(t)),t))},ListValue:function(t){var n=Object(f.B)(e.getParentInputType())
if(!Object(f.J)(n))return m(e,t),!1},ObjectValue:function(t){var n=Object(f.A)(e.getInputType())
if(!Object(f.F)(n))return m(e,t),!1
for(var a,s,c,u=Object(i.a)(t.fields,(function(e){return e.name.value})),p=0,d=Object(r.a)(n.getFields());p<d.length;p++){var h=d[p]
if(!u[h.name]&&Object(f.Q)(h)){var g=Object(o.a)(h.type)
e.reportError(new l.a((a=n.name,s=h.name,c=g,"Field ".concat(a,".").concat(s," of required type ").concat(c," was not provided.")),t))}}},ObjectField:function(t){var n,r,i,o=Object(f.A)(e.getParentInputType())
if(!e.getInputType()&&Object(f.F)(o)){var a=Object(c.a)(t.name.value,Object.keys(o.getFields()))
e.reportError(new l.a((n=o.name,r=t.name.value,i=a,'Field "'.concat(r,'" is not defined by type ').concat(n,".")+Object(s.a)(i)),t))}},EnumValue:function(t){var n=Object(f.A)(e.getInputType())
Object(f.E)(n)?n.getValue(t.value)||e.reportError(new l.a(d(n.name,Object(u.a)(t),g(n,t)),t)):m(e,t)},IntValue:function(t){return m(e,t)},FloatValue:function(t){return m(e,t)},StringValue:function(t){return m(e,t)},BooleanValue:function(t){return m(e,t)}}}function m(e,t){var n=e.getInputType()
if(n){var r=Object(f.A)(n)
if(Object(f.R)(r))try{var i=r.parseLiteral(t,void 0)
Object(a.a)(i)&&e.reportError(new l.a(p(Object(o.a)(n),Object(u.a)(t)),t))}catch(r){e.reportError(new l.a(p(Object(o.a)(n),Object(u.a)(t),r.message),t,void 0,void 0,void 0,r))}else{var s=Object(f.E)(r)?d(Object(o.a)(n),Object(u.a)(t),g(r,t)):p(Object(o.a)(n),Object(u.a)(t))
e.reportError(new l.a(s,t))}}}function g(e,t){var n=e.getValues().map((function(e){return e.name}))
return Object(c.a)(Object(u.a)(t),n)}},AeAO:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=Object.create(null),n=[],i=Object.create(null)
return{OperationDefinition:function(){return!1},FragmentDefinition:function(o){return function o(a){if(t[a.name.value])return
var s=a.name.value
t[s]=!0
var c=e.getFragmentSpreads(a.selectionSet)
if(0===c.length)return
i[s]=n.length
for(var l=0;l<c.length;l++){var u=c[l],f=u.name.value,p=i[f]
if(n.push(u),void 0===p){var d=e.getFragment(f)
d&&o(d)}else{var h=n.slice(p),m=h.slice(0,-1).map((function(e){return e.name.value}))
e.reportError(new r.a((g=f,y=void 0,y=(v=m).length?" via "+v.join(", "):"",'Cannot spread fragment "'.concat(g,'" within itself').concat(y,".")),h))}n.pop()}var g,v,y
i[s]=void 0}(o),!1}}}},B1jb:function(e,t,n){"use strict"
var r=n("AGgm").isSpace
e.exports=function(e,t,n,i){var o,a,s,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t]
if(e.sCount[t]-e.blkIndent>=4)return!1
if(35!==(o=e.src.charCodeAt(l))||l>=u)return!1
for(a=1,o=e.src.charCodeAt(++l);35===o&&l<u&&a<=6;)a++,o=e.src.charCodeAt(++l)
return!(a>6||l<u&&!r(o))&&(i||(u=e.skipSpacesBack(u,l),(s=e.skipCharsBack(u,35,l))>l&&r(e.src.charCodeAt(s-1))&&(u=s),e.line=t+1,(c=e.push("heading_open","h"+String(a),1)).markup="########".slice(0,a),c.map=[t,e.line],(c=e.push("inline","",0)).content=e.src.slice(l,u).trim(),c.map=[t,e.line],c.children=[],(c=e.push("heading_close","h"+String(a),-1)).markup="########".slice(0,a)),!0)}},C2zF:function(e,t,n){!function(e){"use strict"
function t(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function n(e){return e.state.search||(e.state.search=new t)}function r(e){return"string"==typeof e&&e==e.toLowerCase()}function i(e,t,n){return e.getSearchCursor(t,n,{caseFold:r(t),multiline:!0})}function o(e,t,n,r,i){e.openDialog?e.openDialog(t,i,{value:r,selectValueOnOpen:!0}):i(prompt(n,r))}function a(e){return e.replace(/\\([nrt\\])/g,(function(e,t){return"n"==t?"\n":"r"==t?"\r":"t"==t?"\t":"\\"==t?"\\":e}))}function s(e){var t=e.match(/^\/(.*)\/([a-z]*)$/)
if(t)try{e=new RegExp(t[1],-1==t[2].indexOf("i")?"":"i")}catch(e){}else e=a(e)
return("string"==typeof e?""==e:e.test(""))&&(e=/x^/),e}function c(e,t,n){t.queryText=n,t.query=s(n),e.removeOverlay(t.overlay,r(t.query)),t.overlay=function(e,t){return"string"==typeof e?e=new RegExp(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),t?"gi":"g"):e.global||(e=new RegExp(e.source,e.ignoreCase?"gi":"g")),{token:function(t){e.lastIndex=t.pos
var n=e.exec(t.string)
if(n&&n.index==t.pos)return t.pos+=n[0].length||1,"searching"
n?t.pos=n.index:t.skipToEnd()}}}(t.query,r(t.query)),e.addOverlay(t.overlay),e.showMatchesOnScrollbar&&(t.annotate&&(t.annotate.clear(),t.annotate=null),t.annotate=e.showMatchesOnScrollbar(t.query,r(t.query)))}function l(t,r,i,a){var s=n(t)
if(s.query)return u(t,r)
var l=t.getSelection()||s.lastQuery
if(l instanceof RegExp&&"x^"==l.source&&(l=null),i&&t.openDialog){var d=null,h=function(n,r){e.e_stop(r),n&&(n!=s.queryText&&(c(t,s,n),s.posFrom=s.posTo=t.getCursor()),d&&(d.style.opacity=1),u(t,r.shiftKey,(function(e,n){var r
n.line<3&&document.querySelector&&(r=t.display.wrapper.querySelector(".CodeMirror-dialog"))&&r.getBoundingClientRect().bottom-4>t.cursorCoords(n,"window").top&&((d=r).style.opacity=.4)})))}
!function(e,t,n,r,i){e.openDialog(t,r,{value:n,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){f(e)},onKeyDown:i})}(t,p(t),l,h,(function(r,i){var o=e.keyName(r),a=t.getOption("extraKeys"),s=a&&a[o]||e.keyMap[t.getOption("keyMap")][o]
"findNext"==s||"findPrev"==s||"findPersistentNext"==s||"findPersistentPrev"==s?(e.e_stop(r),c(t,n(t),i),t.execCommand(s)):"find"!=s&&"findPersistent"!=s||(e.e_stop(r),h(i,r))})),a&&l&&(c(t,s,l),u(t,r))}else o(t,p(t),"Search for:",l,(function(e){e&&!s.query&&t.operation((function(){c(t,s,e),s.posFrom=s.posTo=t.getCursor(),u(t,r)}))}))}function u(t,r,o){t.operation((function(){var a=n(t),s=i(t,a.query,r?a.posFrom:a.posTo);(s.find(r)||(s=i(t,a.query,r?e.Pos(t.lastLine()):e.Pos(t.firstLine(),0))).find(r))&&(t.setSelection(s.from(),s.to()),t.scrollIntoView({from:s.from(),to:s.to()},20),a.posFrom=s.from(),a.posTo=s.to(),o&&o(s.from(),s.to()))}))}function f(e){e.operation((function(){var t=n(e)
t.lastQuery=t.query,t.query&&(t.query=t.queryText=null,e.removeOverlay(t.overlay),t.annotate&&(t.annotate.clear(),t.annotate=null))}))}function p(e){return'<span class="CodeMirror-search-label">'+e.phrase("Search:")+'</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use /re/ syntax for regexp search)")+"</span>"}function d(e,t,n){e.operation((function(){for(var r=i(e,t);r.findNext();)if("string"!=typeof t){var o=e.getRange(r.from(),r.to()).match(t)
r.replace(n.replace(/\$(\d)/g,(function(e,t){return o[t]})))}else r.replace(n)}))}function h(e,t){if(!e.getOption("readOnly")){var r=e.getSelection()||n(e).lastQuery,c='<span class="CodeMirror-search-label">'+(t?e.phrase("Replace all:"):e.phrase("Replace:"))+"</span>"
o(e,c+function(e){return' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use /re/ syntax for regexp search)")+"</span>"}(e),c,r,(function(n){n&&(n=s(n),o(e,function(e){return'<span class="CodeMirror-search-label">'+e.phrase("With:")+'</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'}(e),e.phrase("Replace with:"),"",(function(r){if(r=a(r),t)d(e,n,r)
else{f(e)
var o=i(e,n,e.getCursor("from")),s=function(){var t,a=o.from()
!(t=o.findNext())&&(o=i(e,n),!(t=o.findNext())||a&&o.from().line==a.line&&o.from().ch==a.ch)||(e.setSelection(o.from(),o.to()),e.scrollIntoView({from:o.from(),to:o.to()}),function(e,t,n,r){e.openConfirm?e.openConfirm(t,r):confirm(n)&&r[0]()}(e,function(e){return'<span class="CodeMirror-search-label">'+e.phrase("Replace?")+"</span> <button>"+e.phrase("Yes")+"</button> <button>"+e.phrase("No")+"</button> <button>"+e.phrase("All")+"</button> <button>"+e.phrase("Stop")+"</button> "}(e),e.phrase("Replace?"),[function(){c(t)},s,function(){d(e,n,r)}]))},c=function(e){o.replace("string"==typeof n?r:r.replace(/\$(\d)/g,(function(t,n){return e[n]}))),s()}
s()}})))}))}}e.commands.find=function(e){f(e),l(e)},e.commands.findPersistent=function(e){f(e),l(e,!1,!0)},e.commands.findPersistentNext=function(e){l(e,!1,!0,!0)},e.commands.findPersistentPrev=function(e){l(e,!0,!0,!0)},e.commands.findNext=l,e.commands.findPrev=function(e){l(e,!0)},e.commands.clearSearch=f,e.commands.replace=h,e.commands.replaceAll=function(e){h(e,!0)}}(n("VrN/"),n("uTOq"),n("Ku0u"))},CK61:function(e,t,n){"use strict"
var r=n("AGgm"),i=n("Vlv/"),o=n("fMI+"),a=n("qRUV"),s=n("dpam"),c=n("TLR5"),l=n("+80P"),u=n("2KYT"),f=n("GYWy"),p={default:n("ijE+"),zero:n("HKru"),commonmark:n("Qo0+")},d=/^(vbscript|javascript|file|data):/,h=/^data:image\/(gif|png|jpeg|webp);/
function m(e){var t=e.trim().toLowerCase()
return!d.test(t)||!!h.test(t)}var g=["http:","https:","mailto:"]
function v(e){var t=u.parse(e,!0)
if(t.hostname&&(!t.protocol||g.indexOf(t.protocol)>=0))try{t.hostname=f.toASCII(t.hostname)}catch(e){}return u.encode(u.format(t))}function y(e){var t=u.parse(e,!0)
if(t.hostname&&(!t.protocol||g.indexOf(t.protocol)>=0))try{t.hostname=f.toUnicode(t.hostname)}catch(e){}return u.decode(u.format(t))}function b(e,t){if(!(this instanceof b))return new b(e,t)
t||r.isString(e)||(t=e||{},e="default"),this.inline=new c,this.block=new s,this.core=new a,this.renderer=new o,this.linkify=new l,this.validateLink=m,this.normalizeLink=v,this.normalizeLinkText=y,this.utils=r,this.helpers=r.assign({},i),this.options={},this.configure(e),t&&this.set(t)}b.prototype.set=function(e){return r.assign(this.options,e),this},b.prototype.configure=function(e){var t,n=this
if(r.isString(e)&&!(e=p[t=e]))throw new Error('Wrong `markdown-it` preset "'+t+'", check name')
if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty")
return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach((function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)})),this},b.prototype.enable=function(e,t){var n=[]
Array.isArray(e)||(e=[e]),["core","block","inline"].forEach((function(t){n=n.concat(this[t].ruler.enable(e,!0))}),this),n=n.concat(this.inline.ruler2.enable(e,!0))
var r=e.filter((function(e){return n.indexOf(e)<0}))
if(r.length&&!t)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r)
return this},b.prototype.disable=function(e,t){var n=[]
Array.isArray(e)||(e=[e]),["core","block","inline"].forEach((function(t){n=n.concat(this[t].ruler.disable(e,!0))}),this),n=n.concat(this.inline.ruler2.disable(e,!0))
var r=e.filter((function(e){return n.indexOf(e)<0}))
if(r.length&&!t)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r)
return this},b.prototype.use=function(e){var t=[this].concat(Array.prototype.slice.call(arguments,1))
return e.apply(e,t),this},b.prototype.parse=function(e,t){if("string"!=typeof e)throw new Error("Input data should be a String")
var n=new this.core.State(e,this,t)
return this.core.process(n),n.tokens},b.prototype.render=function(e,t){return t=t||{},this.renderer.render(this.parse(e,t),this.options,t)},b.prototype.parseInline=function(e,t){var n=new this.core.State(e,this,t)
return n.inlineMode=!0,this.core.process(n),n.tokens},b.prototype.renderInline=function(e,t){return t=t||{},this.renderer.render(this.parseInline(e,t),this.options,t)},e.exports=b},CRiN:function(e,t,n){"use strict"
var r,i=(r=n("VrN/"))&&r.__esModule?r:{default:r}
function o(e,t){var n=e.state.info,r=t.target||t.srcElement
if("SPAN"===r.nodeName&&void 0===n.hoverTimeout){var o=r.getBoundingClientRect(),a=function(e){var t=e.state.info.options
return t&&t.hoverTime||500}(e)
n.hoverTimeout=setTimeout(l,a)
var s=function(){clearTimeout(n.hoverTimeout),n.hoverTimeout=setTimeout(l,a)},c=function t(){i.default.off(document,"mousemove",s),i.default.off(e.getWrapperElement(),"mouseout",t),clearTimeout(n.hoverTimeout),n.hoverTimeout=void 0},l=function(){i.default.off(document,"mousemove",s),i.default.off(e.getWrapperElement(),"mouseout",c),n.hoverTimeout=void 0,function(e,t){var n=e.coordsChar({left:(t.left+t.right)/2,top:(t.top+t.bottom)/2}),r=e.state.info.options,o=r.render||e.getHelper(n,"info")
if(o){var a=e.getTokenAt(n,!0)
if(a){var s=o(a,r,e,n)
s&&function(e,t,n){var r=document.createElement("div")
r.className="CodeMirror-info",r.appendChild(n),document.body.appendChild(r)
var o=r.getBoundingClientRect(),a=r.currentStyle||window.getComputedStyle(r),s=o.right-o.left+parseFloat(a.marginLeft)+parseFloat(a.marginRight),c=o.bottom-o.top+parseFloat(a.marginTop)+parseFloat(a.marginBottom),l=t.bottom
c>window.innerHeight-t.bottom-15&&t.top>window.innerHeight-t.bottom&&(l=t.top-c)
l<0&&(l=t.bottom)
var u,f=Math.max(0,window.innerWidth-s-15)
f>t.left&&(f=t.left)
r.style.opacity=1,r.style.top=l+"px",r.style.left=f+"px"
var p=function(){clearTimeout(u)},d=function(){clearTimeout(u),u=setTimeout(h,200)},h=function(){i.default.off(r,"mouseover",p),i.default.off(r,"mouseout",d),i.default.off(e.getWrapperElement(),"mouseout",d),r.style.opacity?(r.style.opacity=0,setTimeout((function(){r.parentNode&&r.parentNode.removeChild(r)}),600)):r.parentNode&&r.parentNode.removeChild(r)}
i.default.on(r,"mouseover",p),i.default.on(r,"mouseout",d),i.default.on(e.getWrapperElement(),"mouseout",d)}(e,t,s)}}}(e,o)}
i.default.on(document,"mousemove",s),i.default.on(e.getWrapperElement(),"mouseout",c)}}i.default.defineOption("info",!1,(function(e,t,n){if(n&&n!==i.default.Init){var r=e.state.info.onMouseOver
i.default.off(e.getWrapperElement(),"mouseover",r),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(t){var a=e.state.info=function(e){return{options:e instanceof Function?{render:e}:!0===e?{}:e}}(t)
a.onMouseOver=o.bind(null,e),i.default.on(e.getWrapperElement(),"mouseover",a.onMouseOver)}}))},CWsV:function(e,t,n){"use strict"
function r(e,t,n){this.type=e,this.tag=t,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}r.prototype.attrIndex=function(e){var t,n,r
if(!this.attrs)return-1
for(n=0,r=(t=this.attrs).length;n<r;n++)if(t[n][0]===e)return n
return-1},r.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},r.prototype.attrSet=function(e,t){var n=this.attrIndex(e),r=[e,t]
n<0?this.attrPush(r):this.attrs[n]=r},r.prototype.attrGet=function(e){var t=this.attrIndex(e),n=null
return t>=0&&(n=this.attrs[t][1]),n},r.prototype.attrJoin=function(e,t){var n=this.attrIndex(e)
n<0?this.attrPush([e,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t},e.exports=r},CXva:function(e,t,n){"use strict"
var r=n("CWsV"),i=n("AGgm").isWhiteSpace,o=n("AGgm").isPunctChar,a=n("AGgm").isMdAsciiPunct
function s(e,t,n,r){this.src=e,this.env=n,this.md=t,this.tokens=r,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[]}s.prototype.pushPending=function(){var e=new r("text","",0)
return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},s.prototype.push=function(e,t,n){this.pending&&this.pushPending()
var i=new r(e,t,n)
return n<0&&this.level--,i.level=this.level,n>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(i),i},s.prototype.scanDelims=function(e,t){var n,r,s,c,l,u,f,p,d,h=e,m=!0,g=!0,v=this.posMax,y=this.src.charCodeAt(e)
for(n=e>0?this.src.charCodeAt(e-1):32;h<v&&this.src.charCodeAt(h)===y;)h++
return s=h-e,r=h<v?this.src.charCodeAt(h):32,f=a(n)||o(String.fromCharCode(n)),d=a(r)||o(String.fromCharCode(r)),u=i(n),(p=i(r))?m=!1:d&&(u||f||(m=!1)),u?g=!1:f&&(p||d||(g=!1)),t?(c=m,l=g):(c=m&&(!g||f),l=g&&(!m||d)),{can_open:c,can_close:l,length:s}},s.prototype.Token=r,e.exports=s},"CY+F":function(e,t,n){"use strict"
function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.storage=t||window.localStorage}var t,n,i
return t=e,(n=[{key:"get",value:function(e){if(this.storage){var t=this.storage.getItem("graphiql:"+e)
if("null"!==t&&"undefined"!==t)return t
this.storage.removeItem("graphiql:"+e)}}},{key:"set",value:function(e,t){if(this.storage){var n="graphiql:".concat(e)
t?function(e,t,n){try{return e.setItem(t,n),!0}catch(t){return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==e.length}}(this.storage,n,t)&&this.storage.setItem(n,t):this.storage.removeItem(n)}}}])&&r(t.prototype,n),i&&r(t,i),e}()
t.default=i},DOSD:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=[],r=e
for(;r&&r.kind;)n.push(r),r=r.prevState
for(var i=n.length-1;i>=0;i--)t(n[i])}},"E++1":function(e,t,n){"use strict"
n.r(t),n.d(t,"unknownFragmentMessage",(function(){return i})),n.d(t,"KnownFragmentNames",(function(){return o}))
var r=n("dWS+")
function i(e){return'Unknown fragment "'.concat(e,'".')}function o(e){return{FragmentSpread:function(t){var n=t.name.value
e.getFragment(n)||e.reportError(new r.a(i(n),t.name))}}}},E9SJ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("Y/la")
function i(e){if(null===Object.getPrototypeOf(e))return e
for(var t=Object.create(null),n=0,i=Object(r.a)(e);n<i.length;n++){var o=i[n],a=o[0],s=o[1]
t[a]=s}return t}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection()
if(!e.rangeCount)return function(){}
for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r))
switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur()
break
default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},ELLl:function(e,t,n){!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos
function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,a){a&&a!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),n&&(o(r(n,"pairs")),t.state.closeBrackets=n,t.addKeyMap(i))}))
var i={Backspace:function(t){var i=s(t)
if(!i||t.getOption("disableInput"))return e.Pass
for(var o=r(i,"pairs"),a=t.listSelections(),l=0;l<a.length;l++){if(!a[l].empty())return e.Pass
var u=c(t,a[l].head)
if(!u||o.indexOf(u)%2!=0)return e.Pass}for(l=a.length-1;l>=0;l--){var f=a[l].head
t.replaceRange("",n(f.line,f.ch-1),n(f.line,f.ch+1),"+delete")}},Enter:function(t){var n=s(t),i=n&&r(n,"explode")
if(!i||t.getOption("disableInput"))return e.Pass
for(var o=t.listSelections(),a=0;a<o.length;a++){if(!o[a].empty())return e.Pass
var l=c(t,o[a].head)
if(!l||i.indexOf(l)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n"
t.replaceSelection(e+e,null),t.execCommand("goCharLeft"),o=t.listSelections()
for(var n=0;n<o.length;n++){var r=o[n].head.line
t.indentLine(r,null,!0),t.indentLine(r+1,null,!0)}}))}}
function o(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),r="'"+n+"'"
i[r]||(i[r]=a(n))}}function a(t){return function(i){return function(t,i){var o=s(t)
if(!o||t.getOption("disableInput"))return e.Pass
var a=r(o,"pairs"),c=a.indexOf(i)
if(-1==c)return e.Pass
for(var u,f=r(o,"closeBefore"),p=r(o,"triples"),d=a.charAt(c+1)==i,h=t.listSelections(),m=c%2==0,g=0;g<h.length;g++){var v,y=h[g],b=y.head,O=t.getRange(b,n(b.line,b.ch+1))
if(m&&!y.empty())v="surround"
else if(!d&&m||O!=i)if(d&&b.ch>1&&p.indexOf(i)>=0&&t.getRange(n(b.line,b.ch-2),b)==i+i){if(b.ch>2&&/\bstring/.test(t.getTokenTypeAt(n(b.line,b.ch-2))))return e.Pass
v="addFour"}else if(d){var w=0==b.ch?" ":t.getRange(n(b.line,b.ch-1),b)
if(e.isWordChar(O)||w==i||e.isWordChar(w))return e.Pass
v="both"}else{if(!m||!(0===O.length||/\s/.test(O)||f.indexOf(O)>-1))return e.Pass
v="both"}else v=d&&l(t,b)?"both":p.indexOf(i)>=0&&t.getRange(b,n(b.line,b.ch+3))==i+i+i?"skipThree":"skip"
if(u){if(u!=v)return e.Pass}else u=v}var x=c%2?a.charAt(c-1):i,k=c%2?i:a.charAt(c+1)
t.operation((function(){if("skip"==u)t.execCommand("goCharRight")
else if("skipThree"==u)for(var r=0;r<3;r++)t.execCommand("goCharRight")
else if("surround"==u){var i=t.getSelections()
for(r=0;r<i.length;r++)i[r]=x+i[r]+k
for(t.replaceSelections(i,"around"),i=t.listSelections().slice(),r=0;r<i.length;r++)i[r]=(o=i[r],a=void 0,a=e.cmpPos(o.anchor,o.head)>0,{anchor:new n(o.anchor.line,o.anchor.ch+(a?-1:1)),head:new n(o.head.line,o.head.ch+(a?1:-1))})
t.setSelections(i)}else"both"==u?(t.replaceSelection(x+k,null),t.triggerElectric(x+k),t.execCommand("goCharLeft")):"addFour"==u&&(t.replaceSelection(x+x+x+x,"before"),t.execCommand("goCharRight"))
var o,a}))}(i,t)}}function s(e){var t=e.state.closeBrackets
return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function c(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1))
return 2==r.length?r:null}function l(e,t){var r=e.getTokenAt(n(t.line,t.ch+1))
return/\bstring/.test(r.type)&&r.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}o(t.pairs+"`")}(n("VrN/"))},EkME:function(e,t,n){"use strict"
n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}))
var r=n("t3R0"),i=n("dWS+"),o=n("L2ys"),a=n("93gR"),s=n("4RMZ"),c=n("FQ53"),l=n("jOXf")
Object.freeze({})
function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.a,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s.a(e),f=arguments.length>4?arguments[4]:void 0
t||Object(r.a)(0,"Must provide document"),Object(a.a)(e)
var p=Object.freeze({}),d=[],h=f&&f.maxErrors,m=new l.b(e,t,u,(function(e){if(null!=h&&d.length>=h)throw d.push(new i.a("Too many validation errors, error limit reached. Validation aborted.")),p
d.push(e)})),g=Object(o.d)(n.map((function(e){return e(m)})))
try{Object(o.c)(t,Object(o.e)(u,g))}catch(e){if(e!==p)throw e}return d}function f(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.b,r=[],i=new l.a(e,t,(function(e){r.push(e)})),a=n.map((function(e){return e(i)}))
return Object(o.c)(e,Object(o.d)(a)),r}function p(e){var t=f(e)
if(0!==t.length)throw new Error(t.map((function(e){return e.message})).join("\n\n"))}function d(e,t){var n=f(e,t)
if(0!==n.length)throw new Error(n.map((function(e){return e.message})).join("\n\n"))}},EkS5:function(e,t,n){"use strict"
n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return m}))
var r="function"==typeof Symbol?Symbol:void 0,i=r&&r.iterator,o=i||"@@iterator"
function a(e){var t=null!=e&&e.length
return"number"==typeof t&&t>=0&&t%1==0}function s(e){return Object(e)===e&&(a(e)||function(e){return!!l(e)}(e))}function c(e){var t=l(e)
if(t)return t.call(e)}function l(e){if(null!=e){var t=i&&e[i]||e["@@iterator"]
if("function"==typeof t)return t}}function u(e){this._o=e,this._i=0}function f(e,t,n){if(null!=e){if("function"==typeof e.forEach)return e.forEach(t,n)
var r=0,i=c(e)
if(i){for(var o;!(o=i.next()).done;)if(t.call(n,o.value,r++,e),r>9999999)throw new TypeError("Near-infinite iteration.")}else if(a(e))for(;r<e.length;r++)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)}}u.prototype[o]=function(){return this},u.prototype.next=function(){return void 0===this._o||this._i>=this._o.length?(this._o=void 0,{value:void 0,done:!0}):{value:this._o[this._i++],done:!1}}
var p=r&&r.asyncIterator,d=p||"@@asyncIterator"
function h(e){return!!g(e)}function m(e){var t=g(e)
if(t)return t.call(e)}function g(e){if(null!=e){var t=p&&e[p]||e["@@asyncIterator"]
if("function"==typeof t)return t}}function v(e){this._i=e}function y(e,t,n){var r
return new Promise((function(i){i((r=e[t](n)).value)})).then((function(e){return{value:e,done:r.done}}))}v.prototype[d]=function(){return this},v.prototype.next=function(e){return y(this._i,"next",e)},v.prototype.return=function(e){return this._i.return?y(this._i,"return",e):Promise.resolve({value:e,done:!0})},v.prototype.throw=function(e){return this._i.throw?y(this._i,"throw",e):Promise.reject(e)}},FBZJ:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="FBZJ"},FQ53:function(e,t,n){"use strict"
n.d(t,"a",(function(){return M})),n.d(t,"b",(function(){return R}))
var r=n("ZfCc"),i=n("v96Q"),o=n("g4S7"),a=n("gggk"),s=n("10sW"),c=n("2Rkc"),l=n("0xor"),u=n("2/d+"),f=n("sdW/"),p=n("lORA"),d=n("E++1"),h=n("ZBm+"),m=n("FduV"),g=n("AeAO"),v=n("U4FY"),y=n("PmNC"),b=n("A67W"),O=n("VlWk"),w=n("sA7U"),x=n("y8IY"),k=n("/C/i"),E=n("AW/X"),C=n("Vuqn"),T=n("cfc+"),_=n("r60r"),S=n("dwPZ"),N=n("AF4T"),A=n("+zUi"),j=n("pLY/"),D=n("wpgB"),L=n("iyJ7"),I=n("herJ"),F=n("OO9G"),M=Object.freeze([r.ExecutableDefinitions,i.a,o.a,a.a,s.a,c.a,l.a,u.a,f.a,p.a,d.KnownFragmentNames,h.NoUnusedFragments,m.a,g.a,v.a,y.a,b.a,O.a,w.a,x.a,k.a,E.a,C.a,T.a,_.a,S.a]),R=Object.freeze([N.a,A.a,j.a,D.a,L.a,I.a,s.a,O.a,w.a,F.a,x.b,k.a,S.a,C.b])},FduV:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c}))
var r=n("rWdj"),i=n("dWS+"),o=n("axIb"),a=n("umOc"),s=n("sJV+")
function c(e){return{InlineFragment:function(t){var n=e.getType(),a=e.getParentType()
Object(o.D)(n)&&Object(o.D)(a)&&!Object(s.a)(e.getSchema(),n,a)&&e.reportError(new i.a(function(e,t){return'Fragment cannot be spread here as objects of type "'.concat(e,'" can never be of type "').concat(t,'".')}(Object(r.a)(a),Object(r.a)(n)),t))},FragmentSpread:function(t){var n=t.name.value,c=function(e,t){var n=e.getFragment(t)
if(n){var r=Object(a.a)(e.getSchema(),n.typeCondition)
if(Object(o.D)(r))return r}}(e,n),l=e.getParentType()
c&&l&&!Object(s.a)(e.getSchema(),c,l)&&e.reportError(new i.a(function(e,t,n){return'Fragment "'.concat(e,'" cannot be spread here as objects of type "').concat(t,'" can never be of type "').concat(n,'".')}(n,Object(r.a)(l),Object(r.a)(c)),t))}}}},GP5n:function(e,t,n){!function(e){"use strict"
function t(e,t){var n=Number(t)
return/^[-+]/.test(t)?e.getCursor().line+n:n-1}e.commands.jumpToLine=function(e){var n=e.getCursor()
!function(e,t,n,r,i){e.openDialog?e.openDialog(t,i,{value:r,selectValueOnOpen:!0}):i(prompt(n,r))}(e,function(e){return e.phrase("Jump to line:")+' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">'+e.phrase("(Use line:column or scroll% syntax)")+"</span>"}(e),e.phrase("Jump to line:"),n.line+1+":"+n.ch,(function(r){var i
if(r)if(i=/^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(r))e.setCursor(t(e,i[1]),Number(i[2]))
else if(i=/^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(r)){var o=Math.round(e.lineCount()*Number(i[1])/100);/^[-+]/.test(i[1])&&(o=n.line+o+1),e.setCursor(o-1,n.ch)}else(i=/^\s*\:?\s*([\+\-]?\d+)\s*/.exec(r))&&e.setCursor(t(e,i[1]),n.ch)}))},e.keyMap.default["Alt-G"]="jumpToLine"}(n("VrN/"),n("Ku0u"))},GYWy:function(e,t,n){(function(e,r){var i
!function(o){t&&t.nodeType,e&&e.nodeType
var a="object"==typeof r&&r
a.global!==a&&a.window!==a&&a.self
var s,c=2147483647,l=/^xn--/,u=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},d=Math.floor,h=String.fromCharCode
function m(e){throw new RangeError(p[e])}function g(e,t){for(var n=e.length,r=[];n--;)r[n]=t(e[n])
return r}function v(e,t){var n=e.split("@"),r=""
return n.length>1&&(r=n[0]+"@",e=n[1]),r+g((e=e.replace(f,".")).split("."),t).join(".")}function y(e){for(var t,n,r=[],i=0,o=e.length;i<o;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<o?56320==(64512&(n=e.charCodeAt(i++)))?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),i--):r.push(t)
return r}function b(e){return g(e,(function(e){var t=""
return e>65535&&(t+=h((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=h(e)})).join("")}function O(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function w(e,t,n){var r=0
for(e=n?d(e/700):e>>1,e+=d(e/t);e>455;r+=36)e=d(e/35)
return d(r+36*e/(e+38))}function x(e){var t,n,r,i,o,a,s,l,u,f,p,h=[],g=e.length,v=0,y=128,O=72
for((n=e.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)e.charCodeAt(r)>=128&&m("not-basic"),h.push(e.charCodeAt(r))
for(i=n>0?n+1:0;i<g;){for(o=v,a=1,s=36;i>=g&&m("invalid-input"),((l=(p=e.charCodeAt(i++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||l>d((c-v)/a))&&m("overflow"),v+=l*a,!(l<(u=s<=O?1:s>=O+26?26:s-O));s+=36)a>d(c/(f=36-u))&&m("overflow"),a*=f
O=w(v-o,t=h.length+1,0==o),d(v/t)>c-y&&m("overflow"),y+=d(v/t),v%=t,h.splice(v++,0,y)}return b(h)}function k(e){var t,n,r,i,o,a,s,l,u,f,p,g,v,b,x,k=[]
for(g=(e=y(e)).length,t=128,n=0,o=72,a=0;a<g;++a)(p=e[a])<128&&k.push(h(p))
for(r=i=k.length,i&&k.push("-");r<g;){for(s=c,a=0;a<g;++a)(p=e[a])>=t&&p<s&&(s=p)
for(s-t>d((c-n)/(v=r+1))&&m("overflow"),n+=(s-t)*v,t=s,a=0;a<g;++a)if((p=e[a])<t&&++n>c&&m("overflow"),p==t){for(l=n,u=36;!(l<(f=u<=o?1:u>=o+26?26:u-o));u+=36)x=l-f,b=36-f,k.push(h(O(f+x%b,0))),l=d(x/b)
k.push(h(O(l,0))),o=w(n,v,r==i),n=0,++r}++n,++t}return k.join("")}s={version:"1.4.1",ucs2:{decode:y,encode:b},decode:x,encode:k,toASCII:function(e){return v(e,(function(e){return u.test(e)?"xn--"+k(e):e}))},toUnicode:function(e){return v(e,(function(e){return l.test(e)?x(e.slice(4).toLowerCase()):e}))}},void 0===(i=function(){return s}.call(t,n,t,e))||(e.exports=i)}()}).call(this,n("YuTi")(e),n("yLpj"))},GZ5e:function(e,t,n){"use strict"
e.exports=function(e,t,n){var r,i,o,a,s,c,l,u,f,p,d=t+1,h=e.md.block.ruler.getRules("paragraph")
if(e.sCount[t]-e.blkIndent>=4)return!1
for(p=e.parentType,e.parentType="paragraph";d<n&&!e.isEmpty(d);d++)if(!(e.sCount[d]-e.blkIndent>3)){if(e.sCount[d]>=e.blkIndent&&(c=e.bMarks[d]+e.tShift[d])<(l=e.eMarks[d])&&(45===(f=e.src.charCodeAt(c))||61===f)&&(c=e.skipChars(c,f),(c=e.skipSpaces(c))>=l)){u=61===f?1:2
break}if(!(e.sCount[d]<0)){for(i=!1,o=0,a=h.length;o<a;o++)if(h[o](e,d,n,!0)){i=!0
break}if(i)break}}return!!u&&(r=e.getLines(t,d,e.blkIndent,!1).trim(),e.line=d+1,(s=e.push("heading_open","h"+String(u),1)).markup=String.fromCharCode(f),s.map=[t,e.line],(s=e.push("inline","",0)).content=r,s.map=[t,e.line-1],s.children=[],(s=e.push("heading_close","h"+String(u),-1)).markup=String.fromCharCode(f),e.parentType=p,!0)}},HBFN:function(e,t,n){"use strict"
var r=n("Tzvz"),i=s(n("VrN/")),o=s(n("i1zs")),a=n("8Ur0")
function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n){var r=t.fieldDef.name
"__"!==r.slice(0,2)&&(f(e,t,n,t.parentType),d(e,".")),d(e,r,"field-name",n,(0,a.getFieldReference)(t))}function l(e,t,n){d(e,"@"+t.directiveDef.name,"directive-name",n,(0,a.getDirectiveReference)(t))}function u(e,t,n,r){d(e,": "),f(e,t,n,r)}function f(e,t,n,i){i instanceof r.GraphQLNonNull?(f(e,t,n,i.ofType),d(e,"!")):i instanceof r.GraphQLList?(d(e,"["),f(e,t,n,i.ofType),d(e,"]")):d(e,i.name,"type-name",n,(0,a.getTypeReference)(t,i))}function p(e,t,n){var r=n.description
if(r){var i=document.createElement("div")
i.className="info-description",t.renderDescription?i.innerHTML=t.renderDescription(r):i.appendChild(document.createTextNode(r)),e.appendChild(i)}!function(e,t,n){var r=n.deprecationReason
if(r){var i=document.createElement("div")
i.className="info-deprecation",t.renderDescription?i.innerHTML=t.renderDescription(r):i.appendChild(document.createTextNode(r))
var o=document.createElement("span")
o.className="info-deprecation-label",o.appendChild(document.createTextNode("Deprecated: ")),i.insertBefore(o,i.firstChild),e.appendChild(i)}}(e,t,n)}function d(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{onClick:null},i=arguments.length>4?arguments[4]:void 0
if(n){var o,a=r.onClick
a?((o=document.createElement("a")).href="javascript:void 0",o.addEventListener("click",(function(e){a(i,e)}))):o=document.createElement("span"),o.className=n,o.appendChild(document.createTextNode(t)),e.appendChild(o)}else e.appendChild(document.createTextNode(t))}n("CRiN"),i.default.registerHelper("info","graphql",(function(e,t){if(t.schema&&e.state){var n=e.state,r=n.kind,i=n.step,s=(0,o.default)(t.schema,e.state)
if("Field"===r&&0===i&&s.fieldDef||"AliasedField"===r&&2===i&&s.fieldDef){var h=document.createElement("div")
return function(e,t,n){c(e,t,n),u(e,t,n,t.type)}(h,s,t),p(h,t,s.fieldDef),h}if("Directive"===r&&1===i&&s.directiveDef){var m=document.createElement("div")
return l(m,s,t),p(m,t,s.directiveDef),m}if("Argument"===r&&0===i&&s.argDef){var g=document.createElement("div")
return function(e,t,n){t.directiveDef?l(e,t,n):t.fieldDef&&c(e,t,n)
var r=t.argDef.name
d(e,"("),d(e,r,"arg-name",n,(0,a.getArgumentReference)(t)),u(e,t,n,t.inputType),d(e,")")}(g,s,t),p(g,t,s.argDef),g}if("EnumValue"===r&&s.enumValue&&s.enumValue.description){var v=document.createElement("div")
return function(e,t,n){var r=t.enumValue.name
f(e,t,n,t.inputType),d(e,"."),d(e,r,"enum-value",n,(0,a.getEnumValueReference)(t))}(v,s,t),p(v,t,s.enumValue),v}if("NamedType"===r&&s.type&&s.type.description){var y=document.createElement("div")
return f(y,s,t,s.type),p(y,t,s.type),y}}}))},HKru:function(e,t,n){"use strict"
e.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},HkoP:function(e,t,n){"use strict"
var r,i=(r=n("VrN/"))&&r.__esModule?r:{default:r},o=n("JCIs")
function a(e,t){var n=e.levels
return(n&&0!==n.length?n[n.length-1]-(this.electricInput.test(t)?1:0):e.indentLevel)*this.config.indentUnit}i.default.defineMode("graphql",(function(e){var t=(0,o.onlineParser)({eatWhitespace:function(e){return e.eatWhile(o.isIgnored)},lexRules:o.LexRules,parseRules:o.ParseRules,editorConfig:{tabSize:e.tabSize}})
return{config:e,startState:t.startState,token:t.token,indent:a,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}}))},HmyC:function(e,t,n){"use strict"
n.r(t)
var r=n("gI7C")
n.d(t,"getASTNodeAtPosition",(function(){return r.getASTNodeAtPosition})),n.d(t,"pointToOffset",(function(){return r.pointToOffset}))
var i=n("VWUu")
n.d(t,"Position",(function(){return i.Position})),n.d(t,"Range",(function(){return i.Range})),n.d(t,"locToRange",(function(){return i.locToRange})),n.d(t,"offsetToPosition",(function(){return i.offsetToPosition}))
var o=n("qvY7")
n.d(t,"validateWithCustomRules",(function(){return o.validateWithCustomRules}))
var a=n("8O83")
n.d(t,"requireFile",(function(){return a.requireFile})),n.d(t,"resolveFile",(function(){return a.resolveFile}))},HzB8:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ToolbarSelectOption=h,t.ToolbarSelect=void 0
var r=o(n("q1tI")),i=o(n("17x9"))
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=l(t).call(this,e),n=!i||"object"!==a(i)&&"function"!=typeof i?u(r):i,p(u(n),"handleOpen",(function(e){m(e),n.setState({visible:!0}),n._subscribe()})),n.state={visible:!1},n}var n,i,o
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(i=[{key:"componentWillUnmount",value:function(){this._release()}},{key:"render",value:function(){var e,t=this,n=this.state.visible,i=r.default.Children.map(this.props.children,(function(n,i){e&&!n.props.selected||(e=n)
var o=n.props.onSelect||t.props.onSelect&&t.props.onSelect.bind(null,n.props.value,i)
return r.default.createElement(h,s({},n.props,{onSelect:o}))}))
return r.default.createElement("a",{className:"toolbar-select toolbar-button",onClick:this.handleOpen.bind(this),onMouseDown:m,ref:function(e){t._node=e},title:this.props.title},e.props.label,r.default.createElement("svg",{width:"13",height:"10"},r.default.createElement("path",{fill:"#666",d:"M 5 5 L 13 5 L 9 1 z"}),r.default.createElement("path",{fill:"#666",d:"M 5 6 L 13 6 L 9 10 z"})),r.default.createElement("ul",{className:"toolbar-select-options"+(n?" open":"")},i))}},{key:"_subscribe",value:function(){this._listener||(this._listener=this.handleClick.bind(this),document.addEventListener("click",this._listener))}},{key:"_release",value:function(){this._listener&&(document.removeEventListener("click",this._listener),this._listener=null)}},{key:"handleClick",value:function(e){this._node!==e.target&&(m(e),this.setState({visible:!1}),this._release())}}])&&c(n.prototype,i),o&&c(n,o),t}(r.default.Component)
function h(e){var t=e.onSelect,n=e.label,i=e.selected
return r.default.createElement("li",{onMouseOver:function(e){e.target.className="hover"},onMouseOut:function(e){e.target.className=null},onMouseDown:m,onMouseUp:t},n,i&&r.default.createElement("svg",{width:"13",height:"13"},r.default.createElement("polygon",{points:"4.851,10.462 0,5.611 2.314,3.297 4.851,5.835 10.686,0 13,2.314 4.851,10.462"})))}function m(e){e.preventDefault()}t.ToolbarSelect=d,p(d,"propTypes",{title:i.default.string,label:i.default.string,onSelect:i.default.func}),h.propTypes={onSelect:i.default.func,selected:i.default.bool,label:i.default.string,value:i.default.any}},IF40:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}},IIUr:function(e,t,n){"use strict"
e.exports=function(e){var t,n,r=0,i=e.tokens,o=e.tokens.length
for(t=n=0;t<o;t++)r+=i[t].nesting,i[t].level=r,"text"===i[t].type&&t+1<o&&"text"===i[t+1].type?i[t+1].content=i[t].content+i[t+1].content:(t!==n&&(i[n]=i[t]),n++)
t!==n&&(i.length=n)}},IQOa:function(e,t,n){"use strict"
n.r(t),n.d(t,"getDefinitionState",(function(){return o})),n.d(t,"getFieldDef",(function(){return a})),n.d(t,"forEachState",(function(){return s})),n.d(t,"objectValues",(function(){return c})),n.d(t,"hintList",(function(){return l})),n.d(t,"getAutocompleteSuggestions",(function(){return g})),n.d(t,"LANGUAGE",(function(){return O.a})),n.d(t,"getDefinitionQueryResultForFragmentSpread",(function(){return O.c})),n.d(t,"getDefinitionQueryResultForDefinitionNode",(function(){return O.b})),n.d(t,"getDiagnostics",(function(){return S})),n.d(t,"validateQuery",(function(){return N})),n.d(t,"getOutline",(function(){return R})),n.d(t,"getHoverInformation",(function(){return V})),n.d(t,"GraphQLLanguageService",(function(){return ue}))
var r=n("axIb"),i=n("LViu")
function o(e){let t
return s(e,e=>{switch(e.kind){case"Query":case"ShortQuery":case"Mutation":case"Subscription":case"FragmentDefinition":t=e}}),t}function a(e,t,n){return n===i.SchemaMetaFieldDef.name&&e.getQueryType()===t?i.SchemaMetaFieldDef:n===i.TypeMetaFieldDef.name&&e.getQueryType()===t?i.TypeMetaFieldDef:n===i.TypeNameMetaFieldDef.name&&Object(r.D)(t)?i.TypeNameMetaFieldDef:"getFields"in t?t.getFields()[n]:null}function s(e,t){const n=[]
let r=e
for(;r&&r.kind;)n.push(r),r=r.prevState
for(let e=n.length-1;e>=0;e--)t(n[e])}function c(e){const t=Object.keys(e),n=t.length,r=new Array(n)
for(let i=0;i<n;++i)r[i]=e[t[i]]
return r}function l(e,t){return function(e,t){if(!t)return u(e,e=>!e.isDeprecated)
return u(u(e.map(e=>({proximity:p(f(e.label),t),entry:e})),e=>e.proximity<=2),e=>!e.entry.isDeprecated).sort((e,t)=>(e.entry.isDeprecated?1:0)-(t.entry.isDeprecated?1:0)||e.proximity-t.proximity||e.entry.label.length-t.entry.label.length).map(e=>e.entry)}(t,f(e.string))}function u(e,t){const n=e.filter(t)
return 0===n.length?e:n}function f(e){return e.toLowerCase().replace(/\W/g,"")}function p(e,t){let n=function(e,t){let n,r
const i=[],o=e.length,a=t.length
for(n=0;n<=o;n++)i[n]=[n]
for(r=1;r<=a;r++)i[0][r]=r
for(n=1;n<=o;n++)for(r=1;r<=a;r++){const o=e[n-1]===t[r-1]?0:1
i[n][r]=Math.min(i[n-1][r]+1,i[n][r-1]+1,i[n-1][r-1]+o),n>1&&r>1&&e[n-1]===t[r-2]&&e[n-2]===t[r-1]&&(i[n][r]=Math.min(i[n][r],i[n-2][r-2]+o))}return i[o][a]}(t,e)
return e.length>t.length&&(n-=e.length-t.length-1,n+=0===e.indexOf(t)?0:.5),n}var d=n("19Hc"),h=n("sJV+"),m=n("JCIs")
function g(e,t,n,a){const s=a||v(t,n),u="Invalid"===s.state.kind?s.state.prevState:s.state
if(!u)return[]
const f=u.kind,p=u.step,m=b(e,s.state)
if("Document"===f)return l(s,[{label:"query"},{label:"mutation"},{label:"subscription"},{label:"fragment"},{label:"{"}])
if("SelectionSet"===f||"Field"===f||"AliasedField"===f)return function(e,t,n){if(t.parentType){const o=t.parentType,a="getFields"in o?c(o.getFields()):[]
return Object(r.D)(o)&&a.push(i.TypeNameMetaFieldDef),o===n.getQueryType()&&a.push(i.SchemaMetaFieldDef,i.TypeMetaFieldDef),l(e,a.map((e,t)=>({sortText:String(t)+e.name,label:e.name,detail:String(e.type),documentation:e.description,isDeprecated:e.isDeprecated,deprecationReason:e.deprecationReason})))}return[]}(s,m,e)
if("Arguments"===f||"Argument"===f&&0===p){const e=m.argDefs
if(e)return l(s,e.map(e=>({label:e.name,detail:String(e.type),documentation:e.description})))}if(("ObjectValue"===f||"ObjectField"===f&&0===p)&&m.objectFieldDefs){return l(s,c(m.objectFieldDefs).map(e=>({label:e.name,detail:String(e.type),documentation:e.description})))}return"EnumValue"===f||"ListValue"===f&&1===p||"ObjectField"===f&&2===p||"Argument"===f&&2===p?function(e,t){const n=Object(r.A)(t.inputType)
if(n instanceof r.a){const t=n.getValues()
return l(e,t.map(e=>({label:e.name,detail:String(n),documentation:e.description,isDeprecated:e.isDeprecated,deprecationReason:e.deprecationReason})))}if(n===d.a)return l(e,[{label:"true",detail:String(d.a),documentation:"Not false."},{label:"false",detail:String(d.a),documentation:"Not true."}])
return[]}(s,m):"TypeCondition"===f&&1===p||"NamedType"===f&&null!=u.prevState&&"TypeCondition"===u.prevState.kind?function(e,t,n){let i
if(t.parentType)if(Object(r.C)(t.parentType)){const e=Object(r.j)(t.parentType),o=n.getPossibleTypes(e),a=Object.create(null)
o.forEach(e=>{e.getInterfaces().forEach(e=>{a[e.name]=e})}),i=o.concat(c(a))}else i=[t.parentType]
else{const e=n.getTypeMap()
i=c(e).filter(r.D)}return l(e,i.map(e=>{const t=Object(r.A)(e)
return{label:String(e),documentation:t&&t.description||""}}))}(s,m,e):"FragmentSpread"===f&&1===p?function(e,t,n,i){const a=n.getTypeMap(),s=o(e.state),c=function(e){const t=[]
return y(e,(e,n)=>{"FragmentDefinition"===n.kind&&n.name&&n.type&&t.push({kind:"FragmentDefinition",name:{kind:"Name",value:n.name},selectionSet:{kind:"SelectionSet",selections:[]},typeCondition:{kind:"NamedType",name:{kind:"Name",value:n.type}}})}),t}(i).filter(e=>a[e.typeCondition.name.value]&&!(s&&"FragmentDefinition"===s.kind&&s.name===e.name.value)&&Object(r.D)(t.parentType)&&Object(r.D)(a[e.typeCondition.name.value])&&Object(h.a)(n,t.parentType,a[e.typeCondition.name.value]))
return l(e,c.map(e=>({label:e.name.value,detail:String(a[e.typeCondition.name.value]),documentation:`fragment ${e.name.value} on ${e.typeCondition.name.value}`})))}(s,m,e,t):"VariableDefinition"===f&&2===p||"ListType"===f&&1===p||"NamedType"===f&&u.prevState&&("VariableDefinition"===u.prevState.kind||"ListType"===u.prevState.kind)?function(e,t){const n=c(t.getTypeMap()).filter(r.G)
return l(e,n.map(e=>({label:e.name,documentation:e.description})))}(s,e):"Directive"===f?function(e,t,n){if(t.prevState&&t.prevState.kind){const r=n.getDirectives().filter(e=>function(e,t){if(!e||!e.kind)return!1
const n=e.kind,r=t.locations
switch(n){case"Query":return-1!==r.indexOf("QUERY")
case"Mutation":return-1!==r.indexOf("MUTATION")
case"Subscription":return-1!==r.indexOf("SUBSCRIPTION")
case"Field":case"AliasedField":return-1!==r.indexOf("FIELD")
case"FragmentDefinition":return-1!==r.indexOf("FRAGMENT_DEFINITION")
case"FragmentSpread":return-1!==r.indexOf("FRAGMENT_SPREAD")
case"InlineFragment":return-1!==r.indexOf("INLINE_FRAGMENT")
case"SchemaDef":return-1!==r.indexOf("SCHEMA")
case"ScalarDef":return-1!==r.indexOf("SCALAR")
case"ObjectTypeDef":return-1!==r.indexOf("OBJECT")
case"FieldDef":return-1!==r.indexOf("FIELD_DEFINITION")
case"InterfaceDef":return-1!==r.indexOf("INTERFACE")
case"UnionDef":return-1!==r.indexOf("UNION")
case"EnumDef":return-1!==r.indexOf("ENUM")
case"EnumValue":return-1!==r.indexOf("ENUM_VALUE")
case"InputDef":return-1!==r.indexOf("INPUT_OBJECT")
case"InputValueDef":switch(e.prevState&&e.prevState.kind){case"ArgumentsDef":return-1!==r.indexOf("ARGUMENT_DEFINITION")
case"InputDef":return-1!==r.indexOf("INPUT_FIELD_DEFINITION")}}return!1}(t.prevState,e))
return l(e,r.map(e=>({label:e.name,documentation:e.description||""})))}return[]}(s,u,e):[]}function v(e,t){let n=null,r=null,i=null
const o=y(e,(e,o,a,s)=>{if(s===t.line&&e.getCurrentPosition()>=t.character)return n=a,r={...o},i=e.current(),"BREAK"})
return{start:o.start,end:o.end,string:i||o.string,state:r||o.state,style:n||o.style}}function y(e,t){const n=e.split("\n"),r=Object(m.onlineParser)()
let i=r.startState(),o="",a=new m.CharacterStream("")
for(let e=0;e<n.length;e++){for(a=new m.CharacterStream(n[e]);!a.eol();){if(o=r.token(a,i),"BREAK"===t(a,i,o,e))break}t(a,i,o,e),i.kind||(i=r.startState())}return{start:a.getStartOfToken(),end:a.getCurrentPosition(),string:a.current(),state:i,style:o}}function b(e,t){let n,i,o,c,l,u,f,p,d
return s(t,t=>{switch(t.kind){case"Query":case"ShortQuery":d=e.getQueryType()
break
case"Mutation":d=e.getMutationType()
break
case"Subscription":d=e.getSubscriptionType()
break
case"InlineFragment":case"FragmentDefinition":t.type&&(d=e.getType(t.type))
break
case"Field":case"AliasedField":d&&t.name?(l=p?a(e,p,t.name):null,d=l?l.type:null):l=null
break
case"SelectionSet":p=Object(r.A)(d)
break
case"Directive":o=t.name?e.getDirective(t.name):null
break
case"Arguments":if(t.prevState)switch(t.prevState.kind){case"Field":i=l&&l.args
break
case"Directive":i=o&&o.args
break
case"AliasedField":const n=t.prevState&&t.prevState.name
if(!n){i=null
break}const r=p?a(e,p,n):null
if(!r){i=null
break}i=r.args
break
default:i=null}else i=null
break
case"Argument":if(i)for(let e=0;e<i.length;e++)if(i[e].name===t.name){n=i[e]
break}u=n&&n.type
break
case"EnumValue":const s=Object(r.A)(u)
c=s instanceof r.a?function(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return e[n]
return null}(s.getValues(),e=>e.value===t.name):null
break
case"ListValue":const h=Object(r.B)(u)
u=h instanceof r.d?h.ofType:null
break
case"ObjectValue":const m=Object(r.A)(u)
f=m instanceof r.b?m.getFields():null
break
case"ObjectField":const g=t.name&&f?f[t.name]:null
u=g&&g.type
break
case"NamedType":t.name&&(d=e.getType(t.name))}}),{argDef:n,argDefs:i,directiveDef:o,enumValue:c,fieldDef:l,inputType:u,objectFieldDefs:f,parentType:p,type:d}}var O=n("qc7g"),w=n("9lTW"),x=n.n(w),k=n("EMzn"),E=n("hliF"),C=n("HmyC")
const T=1,_=2
function S(e,t=null,n,r){let i=null
try{i=Object(k.parse)(e)}catch(t){const n=D(t.locations[0],e)
return[{severity:T,message:t.message,source:"GraphQL: Syntax",range:n}]}return N(i,t,n,r)}function N(e,t=null,n,r){if(!t)return[]
const i=A(Object(C.validateWithCustomRules)(t,e,n,r),e=>j(e,T,"Validation")),o=E.a?A(Object(E.a)(t,e),e=>j(e,_,"Deprecation")):[]
return i.concat(o)}function A(e,t){return Array.prototype.concat.apply([],e.map(t))}function j(e,t,n){return e.nodes?e.nodes.map(r=>{const i="Variable"!==r.kind&&"name"in r?r.name:"variable"in r?r.variable:r
x()(e.locations,"GraphQL validation error requires locations.")
const o=e.locations[0],a=function(e){const t=e.loc
return x()(t,"Expected ASTNode to have a location."),t}(i),s=o.column+(a.end-a.start)
return{source:"GraphQL: "+n,message:e.message,severity:t,range:new C.Range(new C.Position(o.line-1,o.column-1),new C.Position(o.line-1,s))}}):[]}function D(e,t){const n=Object(m.onlineParser)(),r=n.startState(),i=t.split("\n")
x()(i.length>=e.line,"Query text must have more lines than where the error happened")
let o=null
for(let t=0;t<e.line;t++)for(o=new m.CharacterStream(i[t]);!o.eol();){if("invalidchar"===n.token(o,r))break}x()(o,"Expected Parser stream to be available.")
const a=e.line-1,s=o.getStartOfToken(),c=o.getCurrentPosition()
return new C.Range(new C.Position(a,s),new C.Position(a,c))}var L=n("/jXB"),I=n("L2ys")
const{INLINE_FRAGMENT:F}=L.Kind,M={Field:!0,OperationDefinition:!0,Document:!0,SelectionSet:!0,Name:!0,FragmentDefinition:!0,FragmentSpread:!0,InlineFragment:!0}
function R(e){let t
try{t=Object(k.parse)(e)}catch(e){return null}const n=function(e){const t=t=>({representativeName:t.name,startPosition:Object(C.offsetToPosition)(e,t.loc.start),endPosition:Object(C.offsetToPosition)(e,t.loc.end),children:t.selectionSet||[]})
return{Field:e=>{const n=e.alias?[P("plain",e.alias),P("plain",": ")]:[]
return n.push(P("plain",e.name)),{tokenizedText:n,...t(e)}},OperationDefinition:e=>({tokenizedText:[P("keyword",e.operation),P("whitespace"," "),P("class-name",e.name)],...t(e)}),Document:e=>e.definitions,SelectionSet:e=>function(e,t){const n=[]
for(let r=0;r<e.length;r++){const i=t(e[r],r)
Array.isArray(i)?n.push(...i):n.push(i)}return n}(e.selections,e=>e.kind===F?e.selectionSet:e),Name:e=>e.value,FragmentDefinition:e=>({tokenizedText:[P("keyword","fragment"),P("whitespace"," "),P("class-name",e.name)],...t(e)}),FragmentSpread:e=>({tokenizedText:[P("plain","..."),P("class-name",e.name)],...t(e)}),InlineFragment:e=>e.selectionSet}}(e)
return{outlineTrees:Object(I.c)(t,{leave:e=>M.hasOwnProperty(e.kind)&&n[e.kind]?n[e.kind](e):null})}}function P(e,t){return{kind:e,value:t}}function V(e,t,n,r){const i=r||v(t,n)
if(!e||!i||!i.state)return""
const o=i.state,a=o.kind,s=o.step,c=b(e,i.state),l={schema:e}
if("Field"===a&&0===s&&c.fieldDef||"AliasedField"===a&&2===s&&c.fieldDef){const e=[]
return function(e,t,n){q(e,t,n),z(e,t,n,t.type)}(e,c,l),H(e,l,c.fieldDef),e.join("").trim()}if("Directive"===a&&1===s&&c.directiveDef){const e=[]
return B(e,c,l),H(e,l,c.directiveDef),e.join("").trim()}if("Argument"===a&&0===s&&c.argDef){const e=[]
return function(e,t,n){t.directiveDef?B(e,t,n):t.fieldDef&&q(e,t,n)
if(!t.argDef)return
const r=t.argDef.name
W(e,"("),W(e,r),z(e,t,n,t.inputType),W(e,")")}(e,c,l),H(e,l,c.argDef),e.join("").trim()}if("EnumValue"===a&&c.enumValue&&"description"in c.enumValue){const e=[]
return function(e,t,n){if(!t.enumValue)return
const r=t.enumValue.name
U(e,t,n,t.inputType),W(e,"."),W(e,r)}(e,c,l),H(e,l,c.enumValue),e.join("").trim()}if("NamedType"===a&&c.type&&"description"in c.type){const e=[]
return U(e,c,l,c.type),H(e,l,c.type),e.join("").trim()}return""}function q(e,t,n){if(!t.fieldDef)return
const r=t.fieldDef.name
"__"!==r.slice(0,2)&&(U(e,t,n,t.parentType),W(e,".")),W(e,r)}function B(e,t,n){if(!t.directiveDef)return
W(e,"@"+t.directiveDef.name)}function z(e,t,n,r){W(e,": "),U(e,t,n,r)}function U(e,t,n,i){i&&(i instanceof r.e?(U(e,t,n,i.ofType),W(e,"!")):i instanceof r.d?(W(e,"["),U(e,t,n,i.ofType),W(e,"]")):W(e,i.name))}function H(e,t,n){if(!n)return
const r="string"==typeof n.description?n.description:null
r&&(W(e,"\n\n"),W(e,r)),function(e,t,n){if(!n)return
const r=n.deprecationReason?n.deprecationReason:null
if(!r)return
W(e,"\n\n"),W(e,"Deprecated: "),W(e,r)}(e,0,n)}function W(e,t){e.push(t)}var G=n("dQau")
const{FRAGMENT_DEFINITION:K,OBJECT_TYPE_DEFINITION:Q,INTERFACE_TYPE_DEFINITION:Y,ENUM_TYPE_DEFINITION:J,UNION_TYPE_DEFINITION:X,SCALAR_TYPE_DEFINITION:Z,INPUT_OBJECT_TYPE_DEFINITION:$,SCALAR_TYPE_EXTENSION:ee,OBJECT_TYPE_EXTENSION:te,INTERFACE_TYPE_EXTENSION:ne,UNION_TYPE_EXTENSION:re,ENUM_TYPE_EXTENSION:ie,INPUT_OBJECT_TYPE_EXTENSION:oe,DIRECTIVE_DEFINITION:ae,FRAGMENT_SPREAD:se,OPERATION_DEFINITION:ce,NAMED_TYPE:le}=L.Kind
class ue{constructor(e){this._graphQLCache=e,this._graphQLConfig=e.getGraphQLConfig()}getConfigForURI(e){const t=this._graphQLConfig.getConfigForFile(e)
if(t)return t
throw Error("No config found for uri: "+e)}async getDiagnostics(e,t,n){let r=!1
const i=this.getConfigForURI(t),{schemaPath:o,projectName:a,extensions:s}=i
try{const n=Object(k.parse)(e)
o&&t===o||(r=n.definitions.some(e=>{switch(e.kind){case Q:case Y:case J:case X:case Z:case $:case ee:case te:case ne:case re:case ie:case oe:case ae:return!0}return!1}))}catch(t){const n=D(t.locations[0],e)
return[{severity:T,message:t.message,source:"GraphQL: Syntax",range:n}]}let c=e
const l=await this._graphQLCache.getFragmentDefinitions(i)
c=`${c} ${(await this._graphQLCache.getFragmentDependencies(e,l)).reduce((e,t)=>`${e} ${Object(G.a)(t.definition)}`,"")}`
let u,f=null
try{f=Object(k.parse)(c)}catch(e){return[]}const p=s.customValidationRules
if(p){const e=Object(C.resolveFile)(p)
if(e){const t=await Object(C.requireFile)(e)
t&&(u=t(this._graphQLConfig))}}const d=await this._graphQLCache.getSchema(a,r).catch(()=>null)
return d?N(f,d,u,n):[]}async getAutocompleteSuggestions(e,t,n){const r=this.getConfigForURI(n),i=await this._graphQLCache.getSchema(r.projectName).catch(()=>null)
return i?g(i,e,t):[]}async getHoverInformation(e,t,n){const r=this.getConfigForURI(n),i=await this._graphQLCache.getSchema(r.projectName).catch(()=>null)
return i?V(i,e,t):""}async getDefinition(e,t,n){const r=this.getConfigForURI(n)
let i
try{i=Object(k.parse)(e)}catch(e){return null}const o=Object(C.getASTNodeAtPosition)(e,i,t)
if(o)switch(o.kind){case se:return this._getDefinitionForFragmentSpread(e,i,o,n,r)
case K:case ce:return Object(O.b)(n,e,o)
case le:return this._getDefinitionForNamedType(e,i,o,n,r)}return null}async _getDefinitionForNamedType(e,t,n,r,i){const o=await this._graphQLCache.getObjectTypeDefinitions(i),a=await this._graphQLCache.getObjectTypeDependenciesForAST(t,o),s=t.definitions.filter(e=>e.kind===Q||e.kind===$||e.kind===J).map(t=>({filePath:r,content:e,definition:t}))
return await Object(O.d)(e,n,a.concat(s))}async _getDefinitionForFragmentSpread(e,t,n,r,i){const o=await this._graphQLCache.getFragmentDefinitions(i),a=await this._graphQLCache.getFragmentDependenciesForAST(t,o),s=t.definitions.filter(e=>e.kind===K).map(t=>({filePath:r,content:e,definition:t}))
return await Object(O.c)(e,n,a.concat(s))}}},JCIs:function(e,t,n){"use strict"
n.r(t),n.d(t,"CharacterStream",(function(){return r})),n.d(t,"LexRules",(function(){return u})),n.d(t,"ParseRules",(function(){return f})),n.d(t,"isIgnored",(function(){return l})),n.d(t,"butNot",(function(){return a})),n.d(t,"list",(function(){return o})),n.d(t,"opt",(function(){return i})),n.d(t,"p",(function(){return c})),n.d(t,"t",(function(){return s})),n.d(t,"onlineParser",(function(){return m}))
class r{constructor(e){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>0===this._pos,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const e=this._sourceText.charAt(this._pos)
return this._pos++,e},this.eat=e=>{if(this._testNextCharacter(e))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=e=>{let t=this._testNextCharacter(e),n=!1
for(t&&(n=t,this._start=this._pos);t;)this._pos++,t=this._testNextCharacter(e),n=!0
return n},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=e=>{this._pos=e},this.match=(e,t=!0,n=!1)=>{let r=null,i=null
if("string"==typeof e){i=new RegExp(e,n?"i":"g").test(this._sourceText.substr(this._pos,e.length)),r=e}else e instanceof RegExp&&(i=this._sourceText.slice(this._pos).match(e),r=i&&i[0])
return!(null==i||!("string"==typeof e||i instanceof Array&&this._sourceText.startsWith(i[0],this._pos)))&&(t&&(this._start=this._pos,r&&r.length&&(this._pos+=r.length)),i)},this.backUp=e=>{this._pos-=e},this.column=()=>this._pos,this.indentation=()=>{const e=this._sourceText.match(/\s*/)
let t=0
if(e&&0===e.length){const n=e[0]
let r=0
for(;n.length>r;)9===n.charCodeAt(r)?t+=2:t++,r++}return t},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=e}_testNextCharacter(e){const t=this._sourceText.charAt(this._pos)
let n=!1
return n="string"==typeof e?t===e:e instanceof RegExp?e.test(t):e(t),n}}function i(e){return{ofRule:e}}function o(e,t){return{ofRule:e,isList:!0,separator:t}}function a(e,t){const n=e.match
return e.match=e=>{let r=!1
return n&&(r=n(e)),r&&t.every(t=>t.match&&!t.match(e))},e}function s(e,t){return{style:t,match:t=>t.kind===e}}function c(e,t){return{style:t||"punctuation",match:t=>"Punctuation"===t.kind&&t.value===e}}const l=e=>" "===e||"\t"===e||","===e||"\n"===e||"\r"===e||"\ufeff"===e,u={Name:/^[_A-Za-z][_0-9A-Za-z]*/,Punctuation:/^(?:!|\$|\(|\)|\.\.\.|:|=|@|\[|]|\{|\||\})/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^(?:"""(?:\\"""|[^"]|"[^"]|""[^"])*(?:""")?|"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?)/,Comment:/^#.*/},f={Document:[o("Definition")],Definition(e){switch(e.value){case"{":return"ShortQuery"
case"query":return"Query"
case"mutation":return"Mutation"
case"subscription":return"Subscription"
case"fragment":return"FragmentDefinition"
case"schema":return"SchemaDef"
case"scalar":return"ScalarDef"
case"type":return"ObjectTypeDef"
case"interface":return"InterfaceDef"
case"union":return"UnionDef"
case"enum":return"EnumDef"
case"input":return"InputDef"
case"extend":return"ExtendDef"
case"directive":return"DirectiveDef"}},ShortQuery:["SelectionSet"],Query:[d("query"),i(h("def")),i("VariableDefinitions"),o("Directive"),"SelectionSet"],Mutation:[d("mutation"),i(h("def")),i("VariableDefinitions"),o("Directive"),"SelectionSet"],Subscription:[d("subscription"),i(h("def")),i("VariableDefinitions"),o("Directive"),"SelectionSet"],VariableDefinitions:[c("("),o("VariableDefinition"),c(")")],VariableDefinition:["Variable",c(":"),"Type",i("DefaultValue")],Variable:[c("$","variable"),h("variable")],DefaultValue:[c("="),"Value"],SelectionSet:[c("{"),o("Selection"),c("}")],Selection:(e,t)=>"..."===e.value?t.match(/[\s\u00a0,]*(on\b|@|{)/,!1)?"InlineFragment":"FragmentSpread":t.match(/[\s\u00a0,]*:/,!1)?"AliasedField":"Field",AliasedField:[h("property"),c(":"),h("qualifier"),i("Arguments"),o("Directive"),i("SelectionSet")],Field:[h("property"),i("Arguments"),o("Directive"),i("SelectionSet")],Arguments:[c("("),o("Argument"),c(")")],Argument:[h("attribute"),c(":"),"Value"],FragmentSpread:[c("..."),h("def"),o("Directive")],InlineFragment:[c("..."),i("TypeCondition"),o("Directive"),"SelectionSet"],FragmentDefinition:[d("fragment"),i(a(h("def"),[d("on")])),"TypeCondition",o("Directive"),"SelectionSet"],TypeCondition:[d("on"),"NamedType"],Value(e){switch(e.kind){case"Number":return"NumberValue"
case"String":return"StringValue"
case"Punctuation":switch(e.value){case"[":return"ListValue"
case"{":return"ObjectValue"
case"$":return"Variable"}return null
case"Name":switch(e.value){case"true":case"false":return"BooleanValue"}return"null"===e.value?"NullValue":"EnumValue"}},NumberValue:[s("Number","number")],StringValue:[s("String","string")],BooleanValue:[s("Name","builtin")],NullValue:[s("Name","keyword")],EnumValue:[h("string-2")],ListValue:[c("["),o("Value"),c("]")],ObjectValue:[c("{"),o("ObjectField"),c("}")],ObjectField:[h("attribute"),c(":"),"Value"],Type:e=>"["===e.value?"ListType":"NonNullType",ListType:[c("["),"Type",c("]"),i(c("!"))],NonNullType:["NamedType",i(c("!"))],NamedType:[(p="atom",{style:p,match:e=>"Name"===e.kind,update(e,t){e.prevState&&e.prevState.prevState&&(e.name=t.value,e.prevState.prevState.type=t.value)}})],Directive:[c("@","meta"),h("meta"),i("Arguments")],SchemaDef:[d("schema"),o("Directive"),c("{"),o("OperationTypeDef"),c("}")],OperationTypeDef:[h("keyword"),c(":"),h("atom")],ScalarDef:[d("scalar"),h("atom"),o("Directive")],ObjectTypeDef:[d("type"),h("atom"),i("Implements"),o("Directive"),c("{"),o("FieldDef"),c("}")],Implements:[d("implements"),o("NamedType")],FieldDef:[h("property"),i("ArgumentsDef"),c(":"),"Type",o("Directive")],ArgumentsDef:[c("("),o("InputValueDef"),c(")")],InputValueDef:[h("attribute"),c(":"),"Type",i("DefaultValue"),o("Directive")],InterfaceDef:[d("interface"),h("atom"),o("Directive"),c("{"),o("FieldDef"),c("}")],UnionDef:[d("union"),h("atom"),o("Directive"),c("="),o("UnionMember",c("|"))],UnionMember:["NamedType"],EnumDef:[d("enum"),h("atom"),o("Directive"),c("{"),o("EnumValueDef"),c("}")],EnumValueDef:[h("string-2"),o("Directive")],InputDef:[d("input"),h("atom"),o("Directive"),c("{"),o("InputValueDef"),c("}")],ExtendDef:[d("extend"),"ObjectTypeDef"],DirectiveDef:[d("directive"),c("@","meta"),h("meta"),i("ArgumentsDef"),d("on"),o("DirectiveLocation",c("|"))],DirectiveLocation:[h("string-2")]}
var p
function d(e){return{style:"keyword",match:t=>"Name"===t.kind&&t.value===e}}function h(e){return{style:e,match:e=>"Name"===e.kind,update(e,t){e.name=t.value}}}function m(e={eatWhitespace:e=>e.eatWhile(l),lexRules:u,parseRules:f,editorConfig:{}}){return{startState(){const t={level:0,step:0,name:null,kind:null,type:null,rule:null,needsSeperator:!1,prevState:null}
return y(e.parseRules,t,"Document"),t},token:(t,n)=>function(e,t,n){const{lexRules:r,parseRules:i,eatWhitespace:o,editorConfig:a}=n
t.rule&&0===t.rule.length?b(t):t.needsAdvance&&(t.needsAdvance=!1,O(t,!0))
if(e.sol()){const n=a&&a.tabSize||2
t.indentLevel=Math.floor(e.indentation()/n)}if(o(e))return"ws"
const s=function(e,t){const n=Object.keys(e)
for(let r=0;r<n.length;r++){const i=t.match(e[n[r]])
if(i&&i instanceof Array)return{kind:n[r],value:i[0]}}}(r,e)
if(!s){return e.match(/\S+/)||e.match(/\s/),y(v,t,"Invalid"),"invalidchar"}if("Comment"===s.kind)return y(v,t,"Comment"),"comment"
const c=g({},t)
if("Punctuation"===s.kind)if(/^[{([]/.test(s.value))void 0!==t.indentLevel&&(t.levels=(t.levels||[]).concat(t.indentLevel+1))
else if(/^[})\]]/.test(s.value)){const e=t.levels=(t.levels||[]).slice(0,-1)
t.indentLevel&&e.length>0&&e[e.length-1]<t.indentLevel&&(t.indentLevel=e[e.length-1])}for(;t.rule;){let n="function"==typeof t.rule?0===t.step?t.rule(s,e):null:t.rule[t.step]
if(t.needsSeperator&&(n=n&&n.separator),n){if(n.ofRule&&(n=n.ofRule),"string"==typeof n){y(i,t,n)
continue}if(n.match&&n.match(s))return n.update&&n.update(t,s),"Punctuation"===s.kind?O(t,!0):t.needsAdvance=!0,n.style}x(t)}return g(t,c),y(v,t,"Invalid"),"invalidchar"}(t,n,e)}}function g(e,t){const n=Object.keys(t)
for(let r=0;r<n.length;r++)e[n[r]]=t[n[r]]
return e}const v={Invalid:[],Comment:[]}
function y(e,t,n){if(!e[n])throw new TypeError("Unknown rule: "+n)
t.prevState={...t},t.kind=n,t.name=null,t.type=null,t.rule=e[n],t.step=0,t.needsSeperator=!1}function b(e){e.prevState&&(e.kind=e.prevState.kind,e.name=e.prevState.name,e.type=e.prevState.type,e.rule=e.prevState.rule,e.step=e.prevState.step,e.needsSeperator=e.prevState.needsSeperator,e.prevState=e.prevState.prevState)}function O(e,t){if(w(e)&&e.rule){const n=e.rule[e.step]
if(n.separator){const t=n.separator
if(e.needsSeperator=!e.needsSeperator,!e.needsSeperator&&t.ofRule)return}if(t)return}for(e.needsSeperator=!1,e.step++;e.rule&&!(Array.isArray(e.rule)&&e.step<e.rule.length);)b(e),e.rule&&(w(e)?e.rule&&e.rule[e.step].separator&&(e.needsSeperator=!e.needsSeperator):(e.needsSeperator=!1,e.step++))}function w(e){const t=Array.isArray(e.rule)&&"string"!=typeof e.rule[e.step]&&e.rule[e.step]
return t&&t.isList}function x(e){for(;e.rule&&(!Array.isArray(e.rule)||!e.rule[e.step].ofRule);)b(e)
e.rule&&O(e,!1)}},JPst:function(e,t,n){"use strict"
e.exports=function(e){var t=[]
return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3]
if(!r)return n
if(t&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}))
return[n].concat(o).concat([i]).join("\n")}var a,s,c
return[n].join("\n")}(t,e)
return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]])
var i={}
if(r)for(var o=0;o<this.length;o++){var a=this[o][0]
null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s])
r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},KKCa:function(e,t){"function"==typeof Object.create?e.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(e,t){e.super_=t
var n=function(){}
n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},KOyK:function(e,t,n){"use strict"
var r=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,i=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/
e.exports=function(e,t){var n,o,a,s,c,l,u=e.pos
return 60===e.src.charCodeAt(u)&&(!((n=e.src.slice(u)).indexOf(">")<0)&&(i.test(n)?(s=(o=n.match(i))[0].slice(1,-1),c=e.md.normalizeLink(s),!!e.md.validateLink(c)&&(t||((l=e.push("link_open","a",1)).attrs=[["href",c]],l.markup="autolink",l.info="auto",(l=e.push("text","",0)).content=e.md.normalizeLinkText(s),(l=e.push("link_close","a",-1)).markup="autolink",l.info="auto"),e.pos+=o[0].length,!0)):!!r.test(n)&&(s=(a=n.match(r))[0].slice(1,-1),c=e.md.normalizeLink("mailto:"+s),!!e.md.validateLink(c)&&(t||((l=e.push("link_open","a",1)).attrs=[["href",c]],l.markup="autolink",l.info="auto",(l=e.push("text","",0)).content=e.md.normalizeLinkText(s),(l=e.push("link_close","a",-1)).markup="autolink",l.info="auto"),e.pos+=a[0].length,!0))))}},Ku0u:function(e,t,n){!function(e){function t(t,n,r){var i,o=t.getWrapperElement()
return(i=o.appendChild(document.createElement("div"))).className=r?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof n?i.innerHTML=n:i.appendChild(n),e.addClass(o,"dialog-opened"),i}function n(e,t){e.state.currentNotificationClose&&e.state.currentNotificationClose(),e.state.currentNotificationClose=t}e.defineExtension("openDialog",(function(r,i,o){o||(o={}),n(this,null)
var a=t(this,r,o.bottom),s=!1,c=this
function l(t){if("string"==typeof t)f.value=t
else{if(s)return
s=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),c.focus(),o.onClose&&o.onClose(a)}}var u,f=a.getElementsByTagName("input")[0]
return f?(f.focus(),o.value&&(f.value=o.value,!1!==o.selectValueOnOpen&&f.select()),o.onInput&&e.on(f,"input",(function(e){o.onInput(e,f.value,l)})),o.onKeyUp&&e.on(f,"keyup",(function(e){o.onKeyUp(e,f.value,l)})),e.on(f,"keydown",(function(t){o&&o.onKeyDown&&o.onKeyDown(t,f.value,l)||((27==t.keyCode||!1!==o.closeOnEnter&&13==t.keyCode)&&(f.blur(),e.e_stop(t),l()),13==t.keyCode&&i(f.value,t))})),!1!==o.closeOnBlur&&e.on(f,"blur",l)):(u=a.getElementsByTagName("button")[0])&&(e.on(u,"click",(function(){l(),c.focus()})),!1!==o.closeOnBlur&&e.on(u,"blur",l),u.focus()),l})),e.defineExtension("openConfirm",(function(r,i,o){n(this,null)
var a=t(this,r,o&&o.bottom),s=a.getElementsByTagName("button"),c=!1,l=this,u=1
function f(){c||(c=!0,e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a),l.focus())}s[0].focus()
for(var p=0;p<s.length;++p){var d=s[p]
!function(t){e.on(d,"click",(function(n){e.e_preventDefault(n),f(),t&&t(l)}))}(i[p]),e.on(d,"blur",(function(){--u,setTimeout((function(){u<=0&&f()}),200)})),e.on(d,"focus",(function(){++u}))}})),e.defineExtension("openNotification",(function(r,i){n(this,l)
var o,a=t(this,r,i&&i.bottom),s=!1,c=i&&void 0!==i.duration?i.duration:5e3
function l(){s||(s=!0,clearTimeout(o),e.rmClass(a.parentNode,"dialog-opened"),a.parentNode.removeChild(a))}return e.on(a,"click",(function(t){e.e_preventDefault(t),l()})),c&&(o=setTimeout(l,c)),l}))}(n("VrN/"))},KuaT:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a(n("q1tI")),i=a(n("17x9")),o=n("Tzvz")
function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,h,m,g=function(e){function t(){return c(this,t),u(this,f(t).apply(this,arguments))}var n,i,a
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.type!==e.type}},{key:"render",value:function(){return function e(t,n){return t instanceof o.GraphQLNonNull?r.default.createElement("span",null,e(t.ofType,n),"!"):t instanceof o.GraphQLList?r.default.createElement("span",null,"[",e(t.ofType,n),"]"):r.default.createElement("a",{className:"type-name",onClick:function(e){return n(t,e)}},t.name)}(this.props.type,this.props.onClick)}}])&&l(n.prototype,i),a&&l(n,a),t}(r.default.Component)
t.default=g,d=g,h="propTypes",m={type:i.default.object,onClick:i.default.func},h in d?Object.defineProperty(d,h,{value:m,enumerable:!0,configurable:!0,writable:!0}):d[h]=m},LViu:function(e,t,n){"use strict"
n.r(t),n.d(t,"__Schema",(function(){return f})),n.d(t,"__Directive",(function(){return p})),n.d(t,"__DirectiveLocation",(function(){return d})),n.d(t,"__Type",(function(){return h})),n.d(t,"__Field",(function(){return m})),n.d(t,"__InputValue",(function(){return g})),n.d(t,"__EnumValue",(function(){return v})),n.d(t,"TypeKind",(function(){return y})),n.d(t,"__TypeKind",(function(){return b})),n.d(t,"SchemaMetaFieldDef",(function(){return O})),n.d(t,"TypeMetaFieldDef",(function(){return w})),n.d(t,"TypeNameMetaFieldDef",(function(){return x})),n.d(t,"introspectionTypes",(function(){return k})),n.d(t,"isIntrospectionType",(function(){return E}))
var r=n("1QEH"),i=n("rWdj"),o=n("2C6G"),a=n("dQau"),s=n("F8X2"),c=n("3HNt"),l=n("19Hc"),u=n("axIb"),f=new u.f({name:"__Schema",description:"A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",fields:function(){return{types:{description:"A list of all types supported by this server.",type:Object(u.e)(Object(u.d)(Object(u.e)(h))),resolve:function(e){return Object(r.a)(e.getTypeMap())}},queryType:{description:"The type that query operations will be rooted at.",type:Object(u.e)(h),resolve:function(e){return e.getQueryType()}},mutationType:{description:"If this server supports mutation, the type that mutation operations will be rooted at.",type:h,resolve:function(e){return e.getMutationType()}},subscriptionType:{description:"If this server support subscription, the type that subscription operations will be rooted at.",type:h,resolve:function(e){return e.getSubscriptionType()}},directives:{description:"A list of all directives supported by this server.",type:Object(u.e)(Object(u.d)(Object(u.e)(p))),resolve:function(e){return e.getDirectives()}}}}}),p=new u.f({name:"__Directive",description:"A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",fields:function(){return{name:{type:Object(u.e)(l.e),resolve:function(e){return e.name}},description:{type:l.e,resolve:function(e){return e.description}},locations:{type:Object(u.e)(Object(u.d)(Object(u.e)(d))),resolve:function(e){return e.locations}},args:{type:Object(u.e)(Object(u.d)(Object(u.e)(g))),resolve:function(e){return e.args}}}}}),d=new u.a({name:"__DirectiveLocation",description:"A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.",values:{QUERY:{value:s.a.QUERY,description:"Location adjacent to a query operation."},MUTATION:{value:s.a.MUTATION,description:"Location adjacent to a mutation operation."},SUBSCRIPTION:{value:s.a.SUBSCRIPTION,description:"Location adjacent to a subscription operation."},FIELD:{value:s.a.FIELD,description:"Location adjacent to a field."},FRAGMENT_DEFINITION:{value:s.a.FRAGMENT_DEFINITION,description:"Location adjacent to a fragment definition."},FRAGMENT_SPREAD:{value:s.a.FRAGMENT_SPREAD,description:"Location adjacent to a fragment spread."},INLINE_FRAGMENT:{value:s.a.INLINE_FRAGMENT,description:"Location adjacent to an inline fragment."},VARIABLE_DEFINITION:{value:s.a.VARIABLE_DEFINITION,description:"Location adjacent to a variable definition."},SCHEMA:{value:s.a.SCHEMA,description:"Location adjacent to a schema definition."},SCALAR:{value:s.a.SCALAR,description:"Location adjacent to a scalar definition."},OBJECT:{value:s.a.OBJECT,description:"Location adjacent to an object type definition."},FIELD_DEFINITION:{value:s.a.FIELD_DEFINITION,description:"Location adjacent to a field definition."},ARGUMENT_DEFINITION:{value:s.a.ARGUMENT_DEFINITION,description:"Location adjacent to an argument definition."},INTERFACE:{value:s.a.INTERFACE,description:"Location adjacent to an interface definition."},UNION:{value:s.a.UNION,description:"Location adjacent to a union definition."},ENUM:{value:s.a.ENUM,description:"Location adjacent to an enum definition."},ENUM_VALUE:{value:s.a.ENUM_VALUE,description:"Location adjacent to an enum value definition."},INPUT_OBJECT:{value:s.a.INPUT_OBJECT,description:"Location adjacent to an input object type definition."},INPUT_FIELD_DEFINITION:{value:s.a.INPUT_FIELD_DEFINITION,description:"Location adjacent to an input object field definition."}}}),h=new u.f({name:"__Type",description:"The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",fields:function(){return{kind:{type:Object(u.e)(b),resolve:function(e){return Object(u.R)(e)?y.SCALAR:Object(u.N)(e)?y.OBJECT:Object(u.H)(e)?y.INTERFACE:Object(u.T)(e)?y.UNION:Object(u.E)(e)?y.ENUM:Object(u.F)(e)?y.INPUT_OBJECT:Object(u.J)(e)?y.LIST:Object(u.L)(e)?y.NON_NULL:void Object(o.a)(!1,'Unexpected type: "'.concat(Object(i.a)(e),'".'))}},name:{type:l.e,resolve:function(e){return void 0!==e.name?e.name:void 0}},description:{type:l.e,resolve:function(e){return void 0!==e.description?e.description:void 0}},fields:{type:Object(u.d)(Object(u.e)(m)),args:{includeDeprecated:{type:l.a,defaultValue:!1}},resolve:function(e,t){var n=t.includeDeprecated
if(Object(u.N)(e)||Object(u.H)(e)){var i=Object(r.a)(e.getFields())
return n||(i=i.filter((function(e){return!e.deprecationReason}))),i}return null}},interfaces:{type:Object(u.d)(Object(u.e)(h)),resolve:function(e){if(Object(u.N)(e))return e.getInterfaces()}},possibleTypes:{type:Object(u.d)(Object(u.e)(h)),resolve:function(e,t,n,r){var i=r.schema
if(Object(u.C)(e))return i.getPossibleTypes(e)}},enumValues:{type:Object(u.d)(Object(u.e)(v)),args:{includeDeprecated:{type:l.a,defaultValue:!1}},resolve:function(e,t){var n=t.includeDeprecated
if(Object(u.E)(e)){var r=e.getValues()
return n||(r=r.filter((function(e){return!e.deprecationReason}))),r}}},inputFields:{type:Object(u.d)(Object(u.e)(g)),resolve:function(e){if(Object(u.F)(e))return Object(r.a)(e.getFields())}},ofType:{type:h,resolve:function(e){return void 0!==e.ofType?e.ofType:void 0}}}}}),m=new u.f({name:"__Field",description:"Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",fields:function(){return{name:{type:Object(u.e)(l.e),resolve:function(e){return e.name}},description:{type:l.e,resolve:function(e){return e.description}},args:{type:Object(u.e)(Object(u.d)(Object(u.e)(g))),resolve:function(e){return e.args}},type:{type:Object(u.e)(h),resolve:function(e){return e.type}},isDeprecated:{type:Object(u.e)(l.a),resolve:function(e){return e.isDeprecated}},deprecationReason:{type:l.e,resolve:function(e){return e.deprecationReason}}}}}),g=new u.f({name:"__InputValue",description:"Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",fields:function(){return{name:{type:Object(u.e)(l.e),resolve:function(e){return e.name}},description:{type:l.e,resolve:function(e){return e.description}},type:{type:Object(u.e)(h),resolve:function(e){return e.type}},defaultValue:{type:l.e,description:"A GraphQL-formatted string representing the default value for this input value.",resolve:function(e){var t=Object(c.a)(e.defaultValue,e.type)
return t?Object(a.a)(t):null}}}}}),v=new u.f({name:"__EnumValue",description:"One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",fields:function(){return{name:{type:Object(u.e)(l.e),resolve:function(e){return e.name}},description:{type:l.e,resolve:function(e){return e.description}},isDeprecated:{type:Object(u.e)(l.a),resolve:function(e){return e.isDeprecated}},deprecationReason:{type:l.e,resolve:function(e){return e.deprecationReason}}}}}),y=Object.freeze({SCALAR:"SCALAR",OBJECT:"OBJECT",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",INPUT_OBJECT:"INPUT_OBJECT",LIST:"LIST",NON_NULL:"NON_NULL"}),b=new u.a({name:"__TypeKind",description:"An enum describing what kind of type a given `__Type` is.",values:{SCALAR:{value:y.SCALAR,description:"Indicates this type is a scalar."},OBJECT:{value:y.OBJECT,description:"Indicates this type is an object. `fields` and `interfaces` are valid fields."},INTERFACE:{value:y.INTERFACE,description:"Indicates this type is an interface. `fields` and `possibleTypes` are valid fields."},UNION:{value:y.UNION,description:"Indicates this type is a union. `possibleTypes` is a valid field."},ENUM:{value:y.ENUM,description:"Indicates this type is an enum. `enumValues` is a valid field."},INPUT_OBJECT:{value:y.INPUT_OBJECT,description:"Indicates this type is an input object. `inputFields` is a valid field."},LIST:{value:y.LIST,description:"Indicates this type is a list. `ofType` is a valid field."},NON_NULL:{value:y.NON_NULL,description:"Indicates this type is a non-null. `ofType` is a valid field."}}}),O={name:"__schema",type:Object(u.e)(f),description:"Access the current type schema of this server.",args:[],resolve:function(e,t,n,r){return r.schema},deprecationReason:void 0,extensions:void 0,astNode:void 0},w={name:"__type",type:h,description:"Request the type information of a single type.",args:[{name:"name",description:void 0,type:Object(u.e)(l.e),defaultValue:void 0,extensions:void 0,astNode:void 0}],resolve:function(e,t,n,r){var i=t.name
return r.schema.getType(i)},deprecationReason:void 0,extensions:void 0,astNode:void 0},x={name:"__typename",type:Object(u.e)(l.e),description:"The name of the current Object type at runtime.",args:[],resolve:function(e,t,n,r){return r.parentType.name},deprecationReason:void 0,extensions:void 0,astNode:void 0},k=Object.freeze([f,p,d,h,m,g,v,b])
function E(e){return Object(u.K)(e)&&k.some((function(t){var n=t.name
return e.name===n}))}},LvYD:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=u(n("q1tI")),i=u(n("17x9")),o=n("Tzvz"),a=u(n("ThnF")),s=u(n("QW45")),c=u(n("KuaT")),l=u(n("9Iv4"))
function u(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=d(t).call(this,e),n=!i||"object"!==f(i)&&"function"!=typeof i?h(r):i,g(h(n),"handleShowDeprecated",(function(){return n.setState({showDeprecated:!0})})),n.state={showDeprecated:!1},n}var n,i,a
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(i=[{key:"shouldComponentUpdate",value:function(e,t){return this.props.type!==e.type||this.props.schema!==e.schema||this.state.showDeprecated!==t.showDeprecated}},{key:"render",value:function(){var e,t,n,i,a,l,u,f=this.props.schema,p=this.props.type,d=this.props.onClickType,h=this.props.onClickField
if(p instanceof o.GraphQLUnionType?(e="possible types",t=f.getPossibleTypes(p)):p instanceof o.GraphQLInterfaceType?(e="implementations",t=f.getPossibleTypes(p)):p instanceof o.GraphQLObjectType&&(e="implements",t=p.getInterfaces()),t&&t.length>0&&(n=r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},e),t.map((function(e){return r.default.createElement("div",{key:e.name,className:"doc-category-item"},r.default.createElement(c.default,{type:e,onClick:d}))})))),p.getFields){var m=p.getFields(),g=Object.keys(m).map((function(e){return m[e]}))
i=r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"fields"),g.filter((function(e){return!e.isDeprecated})).map((function(e){return r.default.createElement(y,{key:e.name,type:p,field:e,onClickType:d,onClickField:h})})))
var v=g.filter((function(e){return e.isDeprecated}))
v.length>0&&(a=r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"deprecated fields"),this.state.showDeprecated?v.map((function(e){return r.default.createElement(y,{key:e.name,type:p,field:e,onClickType:d,onClickField:h})})):r.default.createElement("button",{className:"show-btn",onClick:this.handleShowDeprecated},"Show deprecated fields...")))}if(p instanceof o.GraphQLEnumType){var O=p.getValues()
l=r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"values"),O.filter((function(e){return!e.isDeprecated})).map((function(e){return r.default.createElement(b,{key:e.name,value:e})})))
var w=O.filter((function(e){return e.isDeprecated}))
w.length>0&&(u=r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"deprecated values"),this.state.showDeprecated?w.map((function(e){return r.default.createElement(b,{key:e.name,value:e})})):r.default.createElement("button",{className:"show-btn",onClick:this.handleShowDeprecated},"Show deprecated values...")))}return r.default.createElement("div",null,r.default.createElement(s.default,{className:"doc-type-description",markdown:p.description||"No Description"}),p instanceof o.GraphQLObjectType&&n,i,a,l,u,!(p instanceof o.GraphQLObjectType)&&n)}}])&&p(n.prototype,i),a&&p(n,a),t}(r.default.Component)
function y(e){var t=e.type,n=e.field,i=e.onClickType,o=e.onClickField
return r.default.createElement("div",{className:"doc-category-item"},r.default.createElement("a",{className:"field-name",onClick:function(e){return o(n,t,e)}},n.name),n.args&&n.args.length>0&&["(",r.default.createElement("span",{key:"args"},n.args.map((function(e){return r.default.createElement(a.default,{key:e.name,arg:e,onClickType:i})}))),")"],": ",r.default.createElement(c.default,{type:n.type,onClick:i}),r.default.createElement(l.default,{field:n}),n.description&&r.default.createElement(s.default,{className:"field-short-description",markdown:n.description}),n.deprecationReason&&r.default.createElement(s.default,{className:"doc-deprecation",markdown:n.deprecationReason}))}function b(e){var t=e.value
return r.default.createElement("div",{className:"doc-category-item"},r.default.createElement("div",{className:"enum-value"},t.name),r.default.createElement(s.default,{className:"doc-value-description",markdown:t.description}),t.deprecationReason&&r.default.createElement(s.default,{className:"doc-deprecation",markdown:t.deprecationReason}))}t.default=v,g(v,"propTypes",{schema:i.default.instanceOf(o.GraphQLSchema),type:i.default.object,onClickType:i.default.func,onClickField:i.default.func}),y.propTypes={type:i.default.object,field:i.default.object,onClickType:i.default.func,onClickField:i.default.func},b.propTypes={value:i.default.object}},Lxz9:function(e,t,n){var r={"./Range.js":"VWUu","./file.js":"8O83","./getASTNodeAtPosition.js":"gI7C","./index.js":"HmyC","./validateWithCustomRules.js":"qvY7"}
function i(e){var t=o(e)
return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'")
throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="Lxz9"},MCLT:function(e,t,n){(function(e){var r=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++)n[t[r]]=Object.getOwnPropertyDescriptor(e,t[r])
return n},i=/%[sdj%]/g
t.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(s(arguments[n]))
return t.join(" ")}n=1
for(var r=arguments,o=r.length,a=String(e).replace(i,(function(e){if("%%"===e)return"%"
if(n>=o)return e
switch(e){case"%s":return String(r[n++])
case"%d":return Number(r[n++])
case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}})),c=r[n];n<o;c=r[++n])m(c)||!O(c)?a+=" "+c:a+=" "+s(c)
return a},t.deprecate=function(n,r){if(void 0!==e&&!0===e.noDeprecation)return n
if(void 0===e)return function(){return t.deprecate(n,r).apply(this,arguments)}
var i=!1
return function(){if(!i){if(e.throwDeprecation)throw new Error(r)
e.traceDeprecation?console.trace(r):console.error(r),i=!0}return n.apply(this,arguments)}}
var o,a={}
function s(e,n){var r={seen:[],stylize:l}
return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),h(n)?r.showHidden=n:n&&t._extend(r,n),y(r.showHidden)&&(r.showHidden=!1),y(r.depth)&&(r.depth=2),y(r.colors)&&(r.colors=!1),y(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=c),u(r,e,r.depth)}function c(e,t){var n=s.styles[t]
return n?"["+s.colors[n][0]+"m"+e+"["+s.colors[n][1]+"m":e}function l(e,t){return e}function u(e,n,r){if(e.customInspect&&n&&k(n.inspect)&&n.inspect!==t.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,e)
return v(i)||(i=u(e,i,r)),i}var o=function(e,t){if(y(t))return e.stylize("undefined","undefined")
if(v(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return e.stylize(n,"string")}if(g(t))return e.stylize(""+t,"number")
if(h(t))return e.stylize(""+t,"boolean")
if(m(t))return e.stylize("null","null")}(e,n)
if(o)return o
var a=Object.keys(n),s=function(e){var t={}
return e.forEach((function(e,n){t[e]=!0})),t}(a)
if(e.showHidden&&(a=Object.getOwnPropertyNames(n)),x(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(n)
if(0===a.length){if(k(n)){var c=n.name?": "+n.name:""
return e.stylize("[Function"+c+"]","special")}if(b(n))return e.stylize(RegExp.prototype.toString.call(n),"regexp")
if(w(n))return e.stylize(Date.prototype.toString.call(n),"date")
if(x(n))return f(n)}var l,O="",E=!1,C=["{","}"];(d(n)&&(E=!0,C=["[","]"]),k(n))&&(O=" [Function"+(n.name?": "+n.name:"")+"]")
return b(n)&&(O=" "+RegExp.prototype.toString.call(n)),w(n)&&(O=" "+Date.prototype.toUTCString.call(n)),x(n)&&(O=" "+f(n)),0!==a.length||E&&0!=n.length?r<0?b(n)?e.stylize(RegExp.prototype.toString.call(n),"regexp"):e.stylize("[Object]","special"):(e.seen.push(n),l=E?function(e,t,n,r,i){for(var o=[],a=0,s=t.length;a<s;++a)S(t,String(a))?o.push(p(e,t,n,r,String(a),!0)):o.push("")
return i.forEach((function(i){i.match(/^\d+$/)||o.push(p(e,t,n,r,i,!0))})),o}(e,n,r,s,a):a.map((function(t){return p(e,n,r,s,t,E)})),e.seen.pop(),function(e,t,n){if(e.reduce((function(e,t){return t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1]
return n[0]+t+" "+e.join(", ")+" "+n[1]}(l,O,C)):C[0]+O+C[1]}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function p(e,t,n,r,i,o){var a,s,c
if((c=Object.getOwnPropertyDescriptor(t,i)||{value:t[i]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),S(r,i)||(a="["+i+"]"),s||(e.seen.indexOf(c.value)<0?(s=m(n)?u(e,c.value,null):u(e,c.value,n-1)).indexOf("\n")>-1&&(s=o?s.split("\n").map((function(e){return"  "+e})).join("\n").substr(2):"\n"+s.split("\n").map((function(e){return"   "+e})).join("\n")):s=e.stylize("[Circular]","special")),y(a)){if(o&&i.match(/^\d+$/))return s;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=e.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=e.stylize(a,"string"))}return a+": "+s}function d(e){return Array.isArray(e)}function h(e){return"boolean"==typeof e}function m(e){return null===e}function g(e){return"number"==typeof e}function v(e){return"string"==typeof e}function y(e){return void 0===e}function b(e){return O(e)&&"[object RegExp]"===E(e)}function O(e){return"object"==typeof e&&null!==e}function w(e){return O(e)&&"[object Date]"===E(e)}function x(e){return O(e)&&("[object Error]"===E(e)||e instanceof Error)}function k(e){return"function"==typeof e}function E(e){return Object.prototype.toString.call(e)}function C(e){return e<10?"0"+e.toString(10):e.toString(10)}t.debuglog=function(n){if(y(o)&&(o=e.env.NODE_DEBUG||""),n=n.toUpperCase(),!a[n])if(new RegExp("\\b"+n+"\\b","i").test(o)){var r=e.pid
a[n]=function(){var e=t.format.apply(t,arguments)
console.error("%s %d: %s",n,r,e)}}else a[n]=function(){}
return a[n]},t.inspect=s,s.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},s.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},t.isArray=d,t.isBoolean=h,t.isNull=m,t.isNullOrUndefined=function(e){return null==e},t.isNumber=g,t.isString=v,t.isSymbol=function(e){return"symbol"==typeof e},t.isUndefined=y,t.isRegExp=b,t.isObject=O,t.isDate=w,t.isError=x,t.isFunction=k,t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},t.isBuffer=n("1gqn")
var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function _(){var e=new Date,t=[C(e.getHours()),C(e.getMinutes()),C(e.getSeconds())].join(":")
return[e.getDate(),T[e.getMonth()],t].join(" ")}function S(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.log=function(){console.log("%s - %s",_(),t.format.apply(t,arguments))},t.inherits=n("KKCa"),t._extend=function(e,t){if(!t||!O(t))return e
for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]]
return e}
var N="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0
function A(e,t){if(!e){var n=new Error("Promise was rejected with a falsy value")
n.reason=e,e=n}return t(e)}t.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function')
if(N&&e[N]){var t
if("function"!=typeof(t=e[N]))throw new TypeError('The "util.promisify.custom" argument must be of type Function')
return Object.defineProperty(t,N,{value:t,enumerable:!1,writable:!1,configurable:!0}),t}function t(){for(var t,n,r=new Promise((function(e,r){t=e,n=r})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o])
i.push((function(e,r){e?n(e):t(r)}))
try{e.apply(this,i)}catch(e){n(e)}return r}return Object.setPrototypeOf(t,Object.getPrototypeOf(e)),N&&Object.defineProperty(t,N,{value:t,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(t,r(e))},t.promisify.custom=N,t.callbackify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function')
function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r])
var i=n.pop()
if("function"!=typeof i)throw new TypeError("The last argument must be of type Function")
var o=this,a=function(){return i.apply(o,arguments)}
t.apply(this,n).then((function(t){e.nextTick(a,null,t)}),(function(t){e.nextTick(A,t,a)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(t)),Object.defineProperties(n,r(t)),n}}).call(this,n("8oxB"))},Mbdf:function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n("1QEH"),i=n("kBjl"),o=n("rWdj"),a=n("2C6G"),s=n("/kEc"),c=n("/jXB"),l=n("axIb")
function u(e,t,n){if(e){if(Object(l.L)(t)){if(e.kind===c.Kind.NULL)return
return u(e,t.ofType,n)}if(e.kind===c.Kind.NULL)return null
if(e.kind===c.Kind.VARIABLE){var p=e.name.value
if(!n||Object(s.a)(n[p]))return
var d=n[p]
if(null===d&&Object(l.L)(t))return
return d}if(Object(l.J)(t)){var h=t.ofType
if(e.kind===c.Kind.LIST){for(var m=[],g=0,v=e.values;g<v.length;g++){var y=v[g]
if(f(y,n)){if(Object(l.L)(h))return
m.push(null)}else{var b=u(y,h,n)
if(Object(s.a)(b))return
m.push(b)}}return m}var O=u(e,h,n)
if(Object(s.a)(O))return
return[O]}if(Object(l.F)(t)){if(e.kind!==c.Kind.OBJECT)return
for(var w=Object.create(null),x=Object(i.a)(e.fields,(function(e){return e.name.value})),k=0,E=Object(r.a)(t.getFields());k<E.length;k++){var C=E[k],T=x[C.name]
if(T&&!f(T.value,n)){var _=u(T.value,C.type,n)
if(Object(s.a)(_))return
w[C.name]=_}else if(void 0!==C.defaultValue)w[C.name]=C.defaultValue
else if(Object(l.L)(C.type))return}return w}if(Object(l.E)(t)){if(e.kind!==c.Kind.ENUM)return
var S=t.getValue(e.value)
if(!S)return
return S.value}if(Object(l.R)(t)){var N
try{N=t.parseLiteral(e,n)}catch(e){return}if(Object(s.a)(N))return
return N}Object(a.a)(!1,"Unexpected input type: "+Object(o.a)(t))}}function f(e,t){return e.kind===c.Kind.VARIABLE&&(!t||Object(s.a)(t[e.name.value]))}},Mgxw:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=o(n("q1tI")),i=o(n("17x9"))
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(i=c(t).call(this,e))||"object"!==a(i)&&"function"!=typeof i?l(r):i,f(l(n),"editField",null),n.state={showButtons:!1,editable:!1},n}var n,i,o
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e=this,t={display:this.state.showButtons?"":"none",marginLeft:"10px"},n={display:this.props.favorite||this.state.showButtons?"":"none",marginLeft:"10px"},i=this.props.label||this.props.operationName||this.props.query.split("\n").filter((function(e){return 0!==e.indexOf("#")})).join(""),o=this.props.favorite?"★":"☆"
return r.default.createElement("p",{className:this.state.editable?"editable":void 0,onClick:this.handleClick.bind(this),onMouseEnter:this.handleMouseEnter.bind(this),onMouseLeave:this.handleMouseLeave.bind(this)},this.state.editable?r.default.createElement("input",{type:"text",defaultValue:this.props.label,ref:function(t){return e.editField=t},onBlur:this.handleFieldBlur.bind(this),onKeyDown:this.handleFieldKeyDown.bind(this),placeholder:"Type a label"}):r.default.createElement("span",{className:"history-label"},i),r.default.createElement("span",{onClick:this.handleEditClick.bind(this),style:t},"✎"),r.default.createElement("span",{onClick:this.handleStarClick.bind(this),style:n},o))}},{key:"handleMouseEnter",value:function(){this.setState({showButtons:!0})}},{key:"handleMouseLeave",value:function(){this.setState({showButtons:!1})}},{key:"handleClick",value:function(){this.props.onSelect(this.props.query,this.props.variables,this.props.operationName,this.props.label)}},{key:"handleStarClick",value:function(e){e.stopPropagation(),this.props.handleToggleFavorite(this.props.query,this.props.variables,this.props.operationName,this.props.label,this.props.favorite)}},{key:"handleFieldBlur",value:function(e){e.stopPropagation(),this.setState({editable:!1}),this.props.handleEditLabel(this.props.query,this.props.variables,this.props.operationName,e.target.value,this.props.favorite)}},{key:"handleFieldKeyDown",value:function(e){13===e.keyCode&&(e.stopPropagation(),this.setState({editable:!1}),this.props.handleEditLabel(this.props.query,this.props.variables,this.props.operationName,e.target.value,this.props.favorite))}},{key:"handleEditClick",value:function(e){var t=this
e.stopPropagation(),this.setState({editable:!0},(function(){t.editField&&t.editField.focus()}))}}])&&s(n.prototype,i),o&&s(n,o),t}(r.default.Component)
t.default=p,f(p,"propTypes",{favorite:i.default.bool,favoriteSize:i.default.number,handleEditLabel:i.default.func,handleToggleFavorite:i.default.func,operationName:i.default.string,onSelect:i.default.func,query:i.default.string,variables:i.default.string,label:i.default.string})},Mw0p:function(e,t,n){"use strict"
t.a=function(e,t){return e instanceof t}},NAgD:function(e,t,n){"use strict"
e.exports=function(e){var t
e.inlineMode?((t=new e.Token("inline","",0)).content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}},"O8+U":function(e,t,n){"use strict"
var r,i=(r=n("VrN/"))&&r.__esModule?r:{default:r},o=n("IQOa")
var a=["error","warning","information","hint"],s={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"}
i.default.registerHelper("lint","graphql",(function(e,t){var n=t.schema
return(0,o.getDiagnostics)(e,n).map((function(e){return{message:e.message,severity:a[e.severity-1],type:s[e.source],from:i.default.Pos(e.range.start.line,e.range.start.character),to:i.default.Pos(e.range.end.line,e.range.end.character)}}))}))},OO9G:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r,i=n("pv/G"),o=n("T95z"),a=n("dWS+"),s=n("/jXB"),c=n("Xizt"),l=n("axIb")
function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){return"Cannot extend non-".concat(t,' type "').concat(e,'".')}function p(e){for(var t=e.getSchema(),n=Object.create(null),r=0,u=e.getDocument().definitions;r<u.length;r++){var p=u[r]
Object(c.d)(p)&&(n[p.name.value]=p)}return{ScalarTypeExtension:m,ObjectTypeExtension:m,InterfaceTypeExtension:m,UnionTypeExtension:m,EnumTypeExtension:m,InputObjectTypeExtension:m}
function m(r){var c=r.name.value,u=n[c],p=t&&t.getType(c)
if(u){var m=d[u.kind]
m!==r.kind&&e.reportError(new a.a(f(c,h(m)),[u,r]))}else if(p){var g=function(e){if(Object(l.R)(e))return s.Kind.SCALAR_TYPE_EXTENSION
if(Object(l.N)(e))return s.Kind.OBJECT_TYPE_EXTENSION
if(Object(l.H)(e))return s.Kind.INTERFACE_TYPE_EXTENSION
if(Object(l.T)(e))return s.Kind.UNION_TYPE_EXTENSION
if(Object(l.E)(e))return s.Kind.ENUM_TYPE_EXTENSION
if(Object(l.F)(e))return s.Kind.INPUT_OBJECT_TYPE_EXTENSION}(p)
g!==r.kind&&e.reportError(new a.a(f(c,h(g)),r))}else{var v=Object.keys(n)
t&&(v=v.concat(Object.keys(t.getTypeMap())))
var y=Object(o.a)(c,v)
e.reportError(new a.a(function(e,t){return'Cannot extend type "'.concat(e,'" because it is not defined.')+Object(i.a)(t.map((function(e){return'"'.concat(e,'"')})))}(c,y),r.name))}}}var d=(u(r={},s.Kind.SCALAR_TYPE_DEFINITION,s.Kind.SCALAR_TYPE_EXTENSION),u(r,s.Kind.OBJECT_TYPE_DEFINITION,s.Kind.OBJECT_TYPE_EXTENSION),u(r,s.Kind.INTERFACE_TYPE_DEFINITION,s.Kind.INTERFACE_TYPE_EXTENSION),u(r,s.Kind.UNION_TYPE_DEFINITION,s.Kind.UNION_TYPE_EXTENSION),u(r,s.Kind.ENUM_TYPE_DEFINITION,s.Kind.ENUM_TYPE_EXTENSION),u(r,s.Kind.INPUT_OBJECT_TYPE_DEFINITION,s.Kind.INPUT_OBJECT_TYPE_EXTENSION),r)
function h(e){switch(e){case s.Kind.SCALAR_TYPE_EXTENSION:return"scalar"
case s.Kind.OBJECT_TYPE_EXTENSION:return"object"
case s.Kind.INTERFACE_TYPE_EXTENSION:return"interface"
case s.Kind.UNION_TYPE_EXTENSION:return"union"
case s.Kind.ENUM_TYPE_EXTENSION:return"enum"
case s.Kind.INPUT_OBJECT_TYPE_EXTENSION:return"input object"
default:return"unknown type"}}},OufF:function(e,t,n){"use strict"
var r,i,o,a,s,c,l
function u(){var e=o,t=[]
if(h("{"),!g("}")){do{t.push(f())}while(g(","))
h("}")}return{kind:"Object",start:e,end:s,members:t}}function f(){var e=o,t="String"===l?d():null
h("String"),h(":")
var n=p()
return{kind:"Member",start:e,end:s,key:t,value:n}}function p(){switch(l){case"[":return function(){var e=o,t=[]
if(h("["),!g("]")){do{t.push(p())}while(g(","))
h("]")}return{kind:"Array",start:e,end:s,values:t}}()
case"{":return u()
case"String":case"Number":case"Boolean":case"Null":var e=d()
return y(),e}return h("Value")}function d(){return{kind:l,start:o,end:a,value:JSON.parse(r.slice(o,a))}}function h(e){if(l!==e){var t
if("EOF"===l)t="[end of file]"
else if(a-o>1)t="`"+r.slice(o,a)+"`"
else{var n=r.slice(o).match(/^.+?\b/)
t="`"+(n?n[0]:r[o])+"`"}throw m("Expected ".concat(e," but found ").concat(t,"."))}y()}function m(e){return{message:e,start:o,end:a}}function g(e){if(l===e)return y(),!0}function v(){a<i&&(a++,c=a===i?0:r.charCodeAt(a))}function y(){for(s=a;9===c||10===c||13===c||32===c;)v()
if(0!==c){switch(o=a,c){case 34:return l="String",function(){v()
for(;34!==c&&c>31;)if(92===c)switch(v(),c){case 34:case 47:case 92:case 98:case 102:case 110:case 114:case 116:v()
break
case 117:v(),b(),b(),b(),b()
break
default:throw m("Bad character escape sequence.")}else{if(a===i)throw m("Unterminated string.")
v()}if(34===c)return void v()
throw m("Unterminated string.")}()
case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return l="Number",function(){45===c&&v()
48===c?v():O()
46===c&&(v(),O())
69!==c&&101!==c||(v(),43!==c&&45!==c||v(),O())}()
case 102:if("false"!==r.slice(o,o+5))break
return a+=4,v(),void(l="Boolean")
case 110:if("null"!==r.slice(o,o+4))break
return a+=3,v(),void(l="Null")
case 116:if("true"!==r.slice(o,o+4))break
return a+=3,v(),void(l="Boolean")}l=r[o],v()}else l="EOF"}function b(){if(c>=48&&c<=57||c>=65&&c<=70||c>=97&&c<=102)return v()
throw m("Expected hexadecimal digit.")}function O(){if(c<48||c>57)throw m("Expected decimal digit.")
do{v()}while(c>=48&&c<=57)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){r=e,i=e.length,o=a=s=-1,v(),y()
var t=u()
return h("EOF"),t}},P57A:function(e,t,n){"use strict"
var r,i=(r=n("VrN/"))&&r.__esModule?r:{default:r}
function o(e,t){var n=t.target||t.srcElement
if("SPAN"===n.nodeName){var r=n.getBoundingClientRect(),i={left:(r.left+r.right)/2,top:(r.top+r.bottom)/2}
e.state.jump.cursor=i,e.state.jump.isHoldingModifier&&l(e)}}function a(e){e.state.jump.isHoldingModifier||!e.state.jump.cursor?e.state.jump.isHoldingModifier&&e.state.jump.marker&&u(e):e.state.jump.cursor=null}function s(e,t){if(!e.state.jump.isHoldingModifier&&t.key===(c?"Meta":"Control")){e.state.jump.isHoldingModifier=!0,e.state.jump.cursor&&l(e)
var n=function(t){var n=e.state.jump.destination
n&&e.state.jump.options.onClick(n,t)},r=function(t,n){e.state.jump.destination&&(n.codemirrorIgnore=!0)}
i.default.on(document,"keyup",(function o(a){a.code===t.code&&(e.state.jump.isHoldingModifier=!1,e.state.jump.marker&&u(e),i.default.off(document,"keyup",o),i.default.off(document,"click",n),e.off("mousedown",r))})),i.default.on(document,"click",n),e.on("mousedown",r)}}i.default.defineOption("jump",!1,(function(e,t,n){if(n&&n!==i.default.Init){var r=e.state.jump.onMouseOver
i.default.off(e.getWrapperElement(),"mouseover",r)
var c=e.state.jump.onMouseOut
i.default.off(e.getWrapperElement(),"mouseout",c),i.default.off(document,"keydown",e.state.jump.onKeyDown),delete e.state.jump}if(t){var l=e.state.jump={options:t,onMouseOver:o.bind(null,e),onMouseOut:a.bind(null,e),onKeyDown:s.bind(null,e)}
i.default.on(e.getWrapperElement(),"mouseover",l.onMouseOver),i.default.on(e.getWrapperElement(),"mouseout",l.onMouseOut),i.default.on(document,"keydown",l.onKeyDown)}}))
var c=navigator&&-1!==navigator.appVersion.indexOf("Mac")
function l(e){if(!e.state.jump.marker){var t=e.state.jump.cursor,n=e.coordsChar(t),r=e.getTokenAt(n,!0),i=e.state.jump.options,o=i.getDestination||e.getHelper(n,"jump")
if(o){var a=o(r,i,e)
if(a){var s=e.markText({line:n.line,ch:r.start},{line:n.line,ch:r.end},{className:"CodeMirror-jump-token"})
e.state.jump.marker=s,e.state.jump.destination=a}}}}function u(e){var t=e.state.jump.marker
e.state.jump.marker=null,e.state.jump.destination=null,t.clear()}},PDj5:function(e,t,n){"use strict"
function r(e){var t=!(e&&!1===e.descriptions)
return"\n    query IntrospectionQuery {\n      __schema {\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ".concat(t?"description":"","\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(t?"description":"","\n      fields(includeDeprecated: true) {\n        name\n        ").concat(t?"description":"","\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(t?"description":"","\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(t?"description":"","\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ")}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}))
var i=r()},PVSe:function(e,t,n){"use strict"
function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t,this.storage=n,this.items=this.fetchAll()}var t,n,i
return t=e,(n=[{key:"contains",value:function(e){return this.items.some((function(t){return t.query===e.query&&t.variables===e.variables&&t.operationName===e.operationName}))}},{key:"edit",value:function(e){var t=this.items.findIndex((function(t){return t.query===e.query&&t.variables===e.variables&&t.operationName===e.operationName}));-1!==t&&(this.items.splice(t,1,e),this.save())}},{key:"delete",value:function(e){var t=this.items.findIndex((function(t){return t.query===e.query&&t.variables===e.variables&&t.operationName===e.operationName}));-1!==t&&(this.items.splice(t,1),this.save())}},{key:"fetchRecent",value:function(){return this.items[this.items.length-1]}},{key:"fetchAll",value:function(){var e=this.storage.get(this.key)
return e?JSON.parse(e)[this.key]:[]}},{key:"push",value:function(e){this.items.push(e),this.save()}},{key:"shift",value:function(){this.items.shift(),this.save()}},{key:"save",value:function(){var e,t,n
this.storage.set(this.key,JSON.stringify((e={},t=this.key,n=this.items,t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e)))}},{key:"length",get:function(){return this.items.length}}])&&r(t.prototype,n),i&&r(t,i),e}()
t.default=i},PXbX:function(e,t,n){"use strict"
var r=Array.prototype.flatMap,i=r?function(e,t){return r.call(e,t)}:function(e,t){for(var n=[],r=0;r<e.length;r++){var i=t(e[r])
Array.isArray(i)?n=n.concat(i):n.push(i)}return n}
t.a=i},PmNC:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("dWS+")
function i(e,t){return t?'Variable "$'.concat(e,'" is not defined by operation "').concat(t,'".'):'Variable "$'.concat(e,'" is not defined.')}function o(e){var t=Object.create(null)
return{OperationDefinition:{enter:function(){t=Object.create(null)},leave:function(n){for(var o=e.getRecursiveVariableUsages(n),a=0;a<o.length;a++){var s=o[a].node,c=s.name.value
!0!==t[c]&&e.reportError(new r.a(i(c,n.name&&n.name.value),[s,n]))}}},VariableDefinition:function(e){t[e.variable.name.value]=!0}}}},"Q+CF":function(e,t,n){"use strict"
e.exports=function(e){var t=""
return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&-1!==e.hostname.indexOf(":")?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||""}},Q7vz:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.QueryHistory=void 0
var r=n("Tzvz"),i=c(n("q1tI")),o=c(n("17x9")),a=c(n("PVSe")),s=c(n("Mgxw"))
function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t]
return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(e){var n,r,i
!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=d(t).call(this,e),n=!i||"object"!==l(i)&&"function"!=typeof i?h(r):i,g(h(n),"toggleFavorite",(function(e,t,r,i,o){var a={query:e,variables:t,operationName:r,label:i}
n.favoriteStore.contains(a)?o&&(a.favorite=!1,n.favoriteStore.delete(a)):(a.favorite=!0,n.favoriteStore.push(a)),n.setState({queries:[].concat(f(n.historyStore.items),f(n.favoriteStore.items))})})),g(h(n),"editLabel",(function(e,t,r,i,o){var a={query:e,variables:t,operationName:r,label:i}
o?n.favoriteStore.edit(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}({},a,{favorite:o})):n.historyStore.edit(a),n.setState({queries:[].concat(f(n.historyStore.items),f(n.favoriteStore.items))})})),n.historyStore=new a.default("queries",e.storage),n.favoriteStore=new a.default("favorites",e.storage)
var o=n.historyStore.fetchAll(),s=n.favoriteStore.fetchAll(),c=o.concat(s)
return n.state={queries:c},n}var n,o,c
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(o=[{key:"componentWillReceiveProps",value:function(e){if(function(e,t,n){if(e.queryID===t.queryID)return!1
try{(0,r.parse)(e.query)}catch(e){return!1}if(!n)return!0
if(JSON.stringify(e.query)===JSON.stringify(n.query)){if(JSON.stringify(e.variables)===JSON.stringify(n.variables))return!1
if(!e.variables&&!n.variables)return!1}return!0}(e,this.props,this.historyStore.fetchRecent())){var t={query:e.query,variables:e.variables,operationName:e.operationName}
this.historyStore.push(t),this.historyStore.length>20&&this.historyStore.shift()
var n=this.historyStore.items,i=this.favoriteStore.items,o=n.concat(i)
this.setState({queries:o})}}},{key:"render",value:function(){var e=this,t=this.state.queries.slice().reverse().map((function(t,n){return i.default.createElement(s.default,u({handleEditLabel:e.editLabel,handleToggleFavorite:e.toggleFavorite,key:n,onSelect:e.props.onSelectQuery},t))}))
return i.default.createElement("div",null,i.default.createElement("div",{className:"history-title-bar"},i.default.createElement("div",{className:"history-title"},"History"),i.default.createElement("div",{className:"doc-explorer-rhs"},this.props.children)),i.default.createElement("div",{className:"history-contents"},t))}}])&&p(n.prototype,o),c&&p(n,c),t}(i.default.Component)
t.QueryHistory=v,g(v,"propTypes",{query:o.default.string,variables:o.default.string,operationName:o.default.string,queryID:o.default.number,onSelectQuery:o.default.func,storage:o.default.object})},QW45:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=o(n("q1tI")),i=o(n("17x9"))
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,h,m=new(o(n("1M3H")).default),g=function(e){function t(){return s(this,t),l(this,u(t).apply(this,arguments))}var n,i,o
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.markdown!==e.markdown}},{key:"render",value:function(){var e=this.props.markdown
return e?r.default.createElement("div",{className:this.props.className,dangerouslySetInnerHTML:{__html:m.render(e)}}):r.default.createElement("div",null)}}])&&c(n.prototype,i),o&&c(n,o),t}(r.default.Component)
t.default=g,p=g,d="propTypes",h={markdown:i.default.string,className:i.default.string},d in p?Object.defineProperty(p,d,{value:h,enumerable:!0,configurable:!0,writable:!0}):p[d]=h},QjYF:function(e,t,n){"use strict"
var r=n("AGgm").isSpace
e.exports=function(e,t){var n,i,o=e.pos
if(10!==e.src.charCodeAt(o))return!1
for(n=e.pending.length-1,i=e.posMax,t||(n>=0&&32===e.pending.charCodeAt(n)?n>=1&&32===e.pending.charCodeAt(n-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),o++;o<i&&r(e.src.charCodeAt(o));)o++
return e.pos=o,!0}},"Qo0+":function(e,t,n){"use strict"
e.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},RKh7:function(e,t,n){"use strict"
e.exports=function(e,t){var n,r,i,o,a,s,c=t+1,l=e.md.block.ruler.getRules("paragraph"),u=e.lineMax
for(s=e.parentType,e.parentType="paragraph";c<u&&!e.isEmpty(c);c++)if(!(e.sCount[c]-e.blkIndent>3||e.sCount[c]<0)){for(r=!1,i=0,o=l.length;i<o;i++)if(l[i](e,c,u,!0)){r=!0
break}if(r)break}return n=e.getLines(t,c,e.blkIndent,!1).trim(),e.line=c,(a=e.push("paragraph_open","p",1)).map=[t,e.line],(a=e.push("inline","",0)).content=n,a.map=[t,e.line],a.children=[],a=e.push("paragraph_close","p",-1),e.parentType=s,!0}},SINd:function(e,t,n){"use strict"
function r(){this.__rules__=[],this.__cache__=null}r.prototype.__find__=function(e){for(var t=0;t<this.__rules__.length;t++)if(this.__rules__[t].name===e)return t
return-1},r.prototype.__compile__=function(){var e=this,t=[""]
e.__rules__.forEach((function(e){e.enabled&&e.alt.forEach((function(e){t.indexOf(e)<0&&t.push(e)}))})),e.__cache__={},t.forEach((function(t){e.__cache__[t]=[],e.__rules__.forEach((function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))}))}))},r.prototype.at=function(e,t,n){var r=this.__find__(e),i=n||{}
if(-1===r)throw new Error("Parser rule not found: "+e)
this.__rules__[r].fn=t,this.__rules__[r].alt=i.alt||[],this.__cache__=null},r.prototype.before=function(e,t,n,r){var i=this.__find__(e),o=r||{}
if(-1===i)throw new Error("Parser rule not found: "+e)
this.__rules__.splice(i,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null},r.prototype.after=function(e,t,n,r){var i=this.__find__(e),o=r||{}
if(-1===i)throw new Error("Parser rule not found: "+e)
this.__rules__.splice(i+1,0,{name:t,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null},r.prototype.push=function(e,t,n){var r=n||{}
this.__rules__.push({name:e,enabled:!0,fn:t,alt:r.alt||[]}),this.__cache__=null},r.prototype.enable=function(e,t){Array.isArray(e)||(e=[e])
var n=[]
return e.forEach((function(e){var r=this.__find__(e)
if(r<0){if(t)return
throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[r].enabled=!0,n.push(e)}),this),this.__cache__=null,n},r.prototype.enableOnly=function(e,t){Array.isArray(e)||(e=[e]),this.__rules__.forEach((function(e){e.enabled=!1})),this.enable(e,t)},r.prototype.disable=function(e,t){Array.isArray(e)||(e=[e])
var n=[]
return e.forEach((function(e){var r=this.__find__(e)
if(r<0){if(t)return
throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[r].enabled=!1,n.push(e)}),this),this.__cache__=null,n},r.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},e.exports=r},SJVZ:function(e,t,n){!function(e){"use strict"
function t(t,n,i,o){if(i&&i.call){var a=i
i=null}else a=r(t,i,"rangeFinder")
"number"==typeof n&&(n=e.Pos(n,0))
var s=r(t,i,"minFoldSize")
function c(e){var r=a(t,n)
if(!r||r.to.line-r.from.line<s)return null
for(var i=t.findMarksAt(r.from),c=0;c<i.length;++c)if(i[c].__isFold&&"fold"!==o){if(!e)return null
r.cleared=!0,i[c].clear()}return r}var l=c(!0)
if(r(t,i,"scanUp"))for(;!l&&n.line>t.firstLine();)n=e.Pos(n.line-1,0),l=c(!1)
if(l&&!l.cleared&&"unfold"!==o){var u=function(e,t,n){var i=r(e,t,"widget")
if("function"==typeof i&&(i=i(n.from,n.to)),"string"==typeof i){var o=document.createTextNode(i);(i=document.createElement("span")).appendChild(o),i.className="CodeMirror-foldmarker"}else i&&(i=i.cloneNode(!0))
return i}(t,i,l)
e.on(u,"mousedown",(function(t){f.clear(),e.e_preventDefault(t)}))
var f=t.markText(l.from,l.to,{replacedWith:u,clearOnEnter:r(t,i,"clearOnEnter"),__isFold:!0})
f.on("clear",(function(n,r){e.signal(t,"unfold",t,n,r)})),e.signal(t,"fold",t,l.from,l.to)}}e.newFoldFunction=function(e,n){return function(r,i){t(r,i,{rangeFinder:e,widget:n})}},e.defineExtension("foldCode",(function(e,n,r){t(this,e,n,r)})),e.defineExtension("isFolded",(function(e){for(var t=this.findMarksAt(e),n=0;n<t.length;++n)if(t[n].__isFold)return!0})),e.commands.toggleFold=function(e){e.foldCode(e.getCursor())},e.commands.fold=function(e){e.foldCode(e.getCursor(),null,"fold")},e.commands.unfold=function(e){e.foldCode(e.getCursor(),null,"unfold")},e.commands.foldAll=function(t){t.operation((function(){for(var n=t.firstLine(),r=t.lastLine();n<=r;n++)t.foldCode(e.Pos(n,0),null,"fold")}))},e.commands.unfoldAll=function(t){t.operation((function(){for(var n=t.firstLine(),r=t.lastLine();n<=r;n++)t.foldCode(e.Pos(n,0),null,"unfold")}))},e.registerHelper("fold","combine",(function(){var e=Array.prototype.slice.call(arguments,0)
return function(t,n){for(var r=0;r<e.length;++r){var i=e[r](t,n)
if(i)return i}}})),e.registerHelper("fold","auto",(function(e,t){for(var n=e.getHelpers(t,"fold"),r=0;r<n.length;r++){var i=n[r](e,t)
if(i)return i}}))
var n={rangeFinder:e.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0}
function r(e,t,r){if(t&&void 0!==t[r])return t[r]
var i=e.options.foldOptions
return i&&void 0!==i[r]?i[r]:n[r]}e.defineOption("foldOptions",null),e.defineExtension("foldOption",(function(e,t){return r(this,e,t)}))}(n("VrN/"))},SpRm:function(e,t,n){"use strict"
e.exports=function(e,t){var n,r,i,o,a,s,c=e.pos
if(96!==e.src.charCodeAt(c))return!1
for(n=c,c++,r=e.posMax;c<r&&96===e.src.charCodeAt(c);)c++
for(i=e.src.slice(n,c),o=a=c;-1!==(o=e.src.indexOf("`",a));){for(a=o+1;a<r&&96===e.src.charCodeAt(a);)a++
if(a-o===i.length)return t||((s=e.push("code_inline","code",0)).markup=i,s.content=e.src.slice(c,o).replace(/[ \n]+/g," ").trim()),e.pos=a,!0}return t||(e.pending+=i),e.pos+=i.length,!0}},SvQd:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()
t.defaultValue=k
var o=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(n("q1tI")),a=n("Tzvz")
function s(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t]
return n}return Array.from(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}var p={keyword:"#B11A04",def:"#D2054E",property:"#1F61A0",qualifier:"#1C92A9",attribute:"#8B2BB9",number:"#2882F9",string:"#D64292",builtin:"#D47509",string2:"#0B7FC7",variable:"#397D13",atom:"#CA9800"},d=o.createElement("svg",{width:"12",height:"9"},o.createElement("path",{fill:"#666",d:"M 0 2 L 9 2 L 4.5 7.5 z"})),h=o.createElement("svg",{width:"12",height:"9"},o.createElement("path",{fill:"#666",d:"M 0 0 L 0 9 L 5.5 4.5 z"})),m=o.createElement("svg",{style:{marginRight:"3px",marginLeft:"-3px"},width:"12",height:"12",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM16 16H2V2H16V16ZM14.99 6L13.58 4.58L6.99 11.17L4.41 8.6L2.99 10.01L6.99 14L14.99 6Z",fill:"#666"})),g=o.createElement("svg",{style:{marginRight:"3px",marginLeft:"-3px"},width:"12",height:"12",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.createElement("path",{d:"M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:"#CCC"}))
function v(e){return e.checked?e.styleConfig.checkboxChecked:e.styleConfig.checkboxUnchecked}function y(e){var t=e.getFields()
if(t.id){var n=["id"]
return t.email?n.push("email"):t.name&&n.push("name"),n}if(t.edges)return["edges"]
if(t.node)return["node"]
if(t.nodes)return["nodes"]
var r=[]
return Object.keys(t).forEach((function(e){(0,a.isLeafType)(t[e].type)&&r.push(e)})),r.length?r.slice(0,2):["__typename"]}function b(e){return(0,a.isNonNullType)(e.type)&&void 0===e.defaultValue}function O(e){for(var t=e;(0,a.isWrappingType)(t);)t=t.ofType
return t}function w(e,t){if((0,a.isScalarType)(e))try{switch(e.name){case"String":return{kind:"StringValue",value:String(e.parseValue(t))}
case"Float":return{kind:"FloatValue",value:String(e.parseValue(parseFloat(t)))}
case"Int":return{kind:"IntValue",value:String(e.parseValue(parseInt(t,10)))}
case"Boolean":try{var n=JSON.parse(t)
return"boolean"==typeof n?{kind:"BooleanValue",value:n}:{kind:"BooleanValue",value:!1}}catch(e){return{kind:"BooleanValue",value:!1}}default:return{kind:"StringValue",value:String(e.parseValue(t))}}}catch(e){return console.error("error coercing arg value",e,t),{kind:"StringValue",value:t}}else try{var r=e.parseValue(t)
return r?{kind:"EnumValue",value:String(r)}:{kind:"EnumValue",value:e.getValues()[0].name}}catch(t){return{kind:"EnumValue",value:e.getValues()[0].name}}}var x=function(e){function t(){var e,n,i
c(this,t)
for(var o=arguments.length,u=Array(o),f=0;f<o;f++)u[f]=arguments[f]
return n=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i._getArgSelection=function(){return i.props.selection.fields.find((function(e){return e.name.value===i.props.arg.name}))},i._removeArg=function(){var e=i.props.selection,t=i._getArgSelection()
i._previousArgSelection=t,i.props.modifyFields(e.fields.filter((function(e){return e!==t})))},i._addArg=function(){var e=i.props,t=e.selection,n=e.arg,r=e.getDefaultScalarArgValue,o=e.parentField,c=e.makeDefaultArg,l=O(n.type),u=null
if(i._previousArgSelection)u=i._previousArgSelection
else if((0,a.isInputObjectType)(l)){var f=l.getFields()
u={kind:"ObjectField",name:{kind:"Name",value:n.name},value:{kind:"ObjectValue",fields:A(r,c,o,Object.keys(f).map((function(e){return f[e]})))}}}else(0,a.isLeafType)(l)&&(u={kind:"ObjectField",name:{kind:"Name",value:n.name},value:r(o,n,l)})
u?i.props.modifyFields([].concat(s(t.fields||[]),[u])):console.error("Unable to add arg for argType",l)},i._setArgValue=function(e){var t=i.props.selection,n=i._getArgSelection()
if(n){var o=O(i.props.arg.type)
if((0,a.isLeafType)(o)){var s=e.target.value
i.props.modifyFields((t.fields||[]).map((function(e){return e===n?r({},e,{value:w(o,s)}):e})))}else console.warn("Unable to handle non leaf types in setArgValue")}else console.error("missing arg selection when setting arg value")},i._modifyChildFields=function(e){i.props.modifyFields(i.props.selection.fields.map((function(t){return t.name.value===i.props.arg.name?r({},t,{value:{kind:"ObjectValue",fields:e}}):t})))},l(i,n)}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.arg,n=e.parentField,r=this._getArgSelection()
return o.createElement(S,{argValue:r?r.value:null,arg:t,parentField:n,addArg:this._addArg,removeArg:this._removeArg,setArgFields:this._modifyChildFields,setArgValue:this._setArgValue,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig})}}]),t}(o.PureComponent)
function k(e){if((0,a.isEnumType)(e))return{kind:"EnumValue",value:e.getValues()[0].name}
switch(e.name){case"String":return{kind:"StringValue",value:""}
case"Float":return{kind:"FloatValue",value:"1.5"}
case"Int":return{kind:"IntValue",value:"10"}
case"Boolean":return{kind:"BooleanValue",value:!1}
default:return{kind:"StringValue",value:""}}}function E(e,t,n){return k(n)}var C=function(e){function t(){var e,n,i
c(this,t)
for(var o=arguments.length,u=Array(o),f=0;f<o;f++)u[f]=arguments[f]
return n=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),i._getArgSelection=function(){return(i.props.selection.arguments||[]).find((function(e){return e.name.value===i.props.arg.name}))},i._removeArg=function(){var e=i.props.selection,t=i._getArgSelection()
i._previousArgSelection=t,i.props.modifyArguments((e.arguments||[]).filter((function(e){return e!==t})))},i._addArg=function(){var e=i.props,t=e.selection,n=e.getDefaultScalarArgValue,r=e.makeDefaultArg,o=e.parentField,c=e.arg,l=O(c.type),u=null
if(i._previousArgSelection)u=i._previousArgSelection
else if((0,a.isInputObjectType)(l)){var f=l.getFields()
u={kind:"Argument",name:{kind:"Name",value:c.name},value:{kind:"ObjectValue",fields:A(n,r,o,Object.keys(f).map((function(e){return f[e]})))}}}else(0,a.isLeafType)(l)&&(u={kind:"Argument",name:{kind:"Name",value:c.name},value:n(o,c,l)})
u?i.props.modifyArguments([].concat(s(t.arguments||[]),[u])):console.error("Unable to add arg for argType",l)},i._setArgValue=function(e){var t=i.props.selection,n=i._getArgSelection()
if(n){var o=O(i.props.arg.type)
if((0,a.isLeafType)(o)){var s=e.target.value
i.props.modifyArguments((t.arguments||[]).map((function(e){return e===n?r({},e,{value:w(o,s)}):e})))}else console.warn("Unable to handle non leaf types in setArgValue")}else console.error("missing arg selection when setting arg value")},i._setArgFields=function(e){var t=i.props.selection,n=i._getArgSelection()
n?i.props.modifyArguments((t.arguments||[]).map((function(t){return t===n?r({},t,{value:{kind:"ObjectValue",fields:e}}):t}))):console.error("missing arg selection when setting arg value")},l(i,n)}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.arg,n=e.parentField,r=this._getArgSelection()
return o.createElement(S,{argValue:r?r.value:null,arg:t,parentField:n,addArg:this._addArg,removeArg:this._removeArg,setArgFields:this._setArgFields,setArgValue:this._setArgValue,getDefaultScalarArgValue:this.props.getDefaultScalarArgValue,makeDefaultArg:this.props.makeDefaultArg,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig})}}]),t}(o.PureComponent)
function T(e){return e.metaKey&&"Enter"===e.key}var _=function(e){function t(){var e,n,r
c(this,t)
for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a]
return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._handleChange=function(e){r.props.setArgValue(e)},l(r,n)}return u(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this._ref,t=document.activeElement
!e||!t||t instanceof HTMLTextAreaElement||(e.focus(),e.setSelectionRange(0,e.value.length))}},{key:"render",value:function(){var e=this,t=this.props,n=t.arg,r=t.argValue,i=t.styleConfig,a=O(n.type),s="string"==typeof r.value?r.value:"",c="StringValue"===this.props.argValue.kind?i.colors.string:i.colors.number
return o.createElement("span",{style:{color:c}},"String"===a.name?'"':"",o.createElement("input",{style:{border:"none",borderBottom:"1px solid #888",outline:"none",width:Math.max(1,s.length)+"ch",color:c},ref:function(t){e._ref=t},type:"text",onKeyDown:function(t){T(t)&&e.props.onRunOperation(t)},onChange:this._handleChange,value:s}),"String"===a.name?'"':"")}}]),t}(o.PureComponent),S=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.argValue,r=t.arg,i=t.styleConfig,s=O(r.type),c=null
if(n)if("Variable"===n.kind)c=o.createElement("span",{style:{color:i.colors.variable}},"$",n.name.value)
else if((0,a.isScalarType)(s))c="Boolean"===s.name?o.createElement("select",{style:{color:i.colors.builtin},onChange:this.props.setArgValue,value:"BooleanValue"===n.kind?n.value:void 0},o.createElement("option",{key:"true",value:"true"},"true"),o.createElement("option",{key:"false",value:"false"},"false")):o.createElement(_,{setArgValue:this.props.setArgValue,arg:r,argValue:n,onRunOperation:this.props.onRunOperation,styleConfig:this.props.styleConfig})
else if((0,a.isEnumType)(s))"EnumValue"===n.kind?c=o.createElement("select",{style:{backgroundColor:"white",color:i.colors.string2},onChange:this.props.setArgValue,value:n.value},s.getValues().map((function(e){return o.createElement("option",{key:e.name,value:e.name},e.name)}))):console.error("arg mismatch between arg and selection",s,n)
else if((0,a.isInputObjectType)(s))if("ObjectValue"===n.kind){var l=s.getFields()
c=o.createElement("div",{style:{marginLeft:16}},Object.keys(l).sort().map((function(t){return o.createElement(x,{key:t,arg:l[t],parentField:e.props.parentField,selection:n,modifyFields:e.props.setArgFields,getDefaultScalarArgValue:e.props.getDefaultScalarArgValue,makeDefaultArg:e.props.makeDefaultArg,onRunOperation:e.props.onRunOperation,styleConfig:e.props.styleConfig})})))}else console.error("arg mismatch between arg and selection",s,n)
return o.createElement("div",{style:{cursor:"pointer",minHeight:"16px",WebkitUserSelect:"none",userSelect:"none"},"data-arg-name":r.name,"data-arg-type":s.name},o.createElement("span",{style:{cursor:"pointer"},onClick:n?this.props.removeArg:this.props.addArg},(0,a.isInputObjectType)(s)?o.createElement("span",null,n?this.props.styleConfig.arrowOpen:this.props.styleConfig.arrowClosed):o.createElement(v,{checked:!!n,styleConfig:this.props.styleConfig}),o.createElement("span",{style:{color:i.colors.attribute},title:r.description},r.name,b(r)?"*":"",":"))," ",c||o.createElement("span",null))}}]),t}(o.PureComponent),N=function(e){function t(){var e,n,r
c(this,t)
for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a]
return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._addFragment=function(){r.props.modifySelections([].concat(s(r.props.selections),[r._previousSelection||{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:r.props.implementingType.name}},selectionSet:{kind:"SelectionSet",selections:r.props.getDefaultFieldNames(r.props.implementingType).map((function(e){return{kind:"Field",name:{kind:"Name",value:e}}}))}}]))},r._removeFragment=function(){var e=r._getSelection()
r._previousSelection=e,r.props.modifySelections(r.props.selections.filter((function(t){return t!==e})))},r._getSelection=function(){var e=r.props.selections.find((function(e){return"InlineFragment"===e.kind&&e.typeCondition&&r.props.implementingType.name===e.typeCondition.name.value}))
return e?"InlineFragment"===e.kind?e:void 0:null},r._modifyChildSelections=function(e){var t=r._getSelection()
r.props.modifySelections(r.props.selections.map((function(n){return n===t?{directives:n.directives,kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:r.props.implementingType.name}},selectionSet:{kind:"SelectionSet",selections:e}}:n})))},l(r,n)}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.implementingType,r=t.schema,i=t.getDefaultFieldNames,a=t.styleConfig,s=this._getSelection(),c=n.getFields(),l=s&&s.selectionSet?s.selectionSet.selections:[]
return o.createElement("div",null,o.createElement("span",{style:{cursor:"pointer"},onClick:s?this._removeFragment:this._addFragment},o.createElement(v,{checked:!!s,styleConfig:this.props.styleConfig}),o.createElement("span",{style:{color:a.colors.atom}},this.props.implementingType.name)),s?o.createElement("div",{style:{marginLeft:16}},Object.keys(c).sort().map((function(t){return o.createElement(D,{key:t,field:c[t],selections:l,modifySelections:e._modifyChildSelections,schema:r,getDefaultFieldNames:i,getDefaultScalarArgValue:e.props.getDefaultScalarArgValue,makeDefaultArg:e.props.makeDefaultArg,onRunOperation:e.props.onRunOperation,styleConfig:e.props.styleConfig})}))):null)}}]),t}(o.PureComponent)
function A(e,t,n,r){var i=[],o=!0,s=!1,c=void 0
try{for(var l,u=r[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var f=l.value
if((0,a.isRequiredInputField)(f)||t&&t(n,f)){var p=O(f.type);(0,a.isInputObjectType)(p)?function(){var r=p.getFields()
i.push({kind:"ObjectField",name:{kind:"Name",value:f.name},value:{kind:"ObjectValue",fields:A(e,t,n,Object.keys(r).map((function(e){return r[e]})))}})}():(0,a.isLeafType)(p)&&i.push({kind:"ObjectField",name:{kind:"Name",value:f.name},value:e(n,f,p)})}}}catch(e){s=!0,c=e}finally{try{!o&&u.return&&u.return()}finally{if(s)throw c}}return i}function j(e,t,n){var r=[],i=!0,o=!1,s=void 0
try{for(var c,l=n.args[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var u=c.value
if(b(u)||t&&t(n,u)){var f=O(u.type);(0,a.isInputObjectType)(f)?function(){var i=f.getFields()
r.push({kind:"Argument",name:{kind:"Name",value:u.name},value:{kind:"ObjectValue",fields:A(e,t,n,Object.keys(i).map((function(e){return i[e]})))}})}():(0,a.isLeafType)(f)&&r.push({kind:"Argument",name:{kind:"Name",value:u.name},value:e(n,u,f)})}}}catch(e){o=!0,s=e}finally{try{!i&&l.return&&l.return()}finally{if(o)throw s}}return r}var D=function(e){function t(){var e,n,r
c(this,t)
for(var i=arguments.length,o=Array(i),u=0;u<i;u++)o[u]=arguments[u]
return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._addAllFieldsToSelections=function(e){var t={kind:"SelectionSet",selections:e?Object.keys(e).map((function(e){return{kind:"Field",name:{kind:"Name",value:e},arguments:[]}})):[]},n=[].concat(s(r.props.selections.filter((function(e){return"InlineFragment"===e.kind||e.name.value!==r.props.field.name}))),[{kind:"Field",name:{kind:"Name",value:r.props.field.name},arguments:j(r.props.getDefaultScalarArgValue,r.props.makeDefaultArg,r.props.field),selectionSet:t}])
r.props.modifySelections(n)},r._addFieldToSelections=function(e){var t=[].concat(s(r.props.selections),[r._previousSelection||{kind:"Field",name:{kind:"Name",value:r.props.field.name},arguments:j(r.props.getDefaultScalarArgValue,r.props.makeDefaultArg,r.props.field)}])
r.props.modifySelections(t)},r._handleUpdateSelections=function(e){if(r._getSelection()&&!e.altKey)r._removeFieldFromSelections()
else{var t=(0,a.getNamedType)(r.props.field.type),n=(0,a.isObjectType)(t)&&t.getFields()
!!n&&e.altKey?r._addAllFieldsToSelections(n):r._addFieldToSelections(n)}},r._removeFieldFromSelections=function(){var e=r._getSelection()
r._previousSelection=e,r.props.modifySelections(r.props.selections.filter((function(t){return t!==e})))},r._getSelection=function(){var e=r.props.selections.find((function(e){return"Field"===e.kind&&r.props.field.name===e.name.value}))
return e?"Field"===e.kind?e:void 0:null},r._setArguments=function(e){var t=r._getSelection()
t?r.props.modifySelections(r.props.selections.map((function(n){return n===t?{alias:t.alias,arguments:e,directives:t.directives,kind:"Field",name:t.name,selectionSet:t.selectionSet}:n}))):console.error("Missing selection when setting arguments",e)},r._modifyChildSelections=function(e){r.props.modifySelections(r.props.selections.map((function(t){if("Field"===t.kind&&r.props.field.name===t.name.value){if("Field"!==t.kind)throw new Error("invalid selection")
return{alias:t.alias,arguments:t.arguments,directives:t.directives,kind:"Field",name:t.name,selectionSet:{kind:"SelectionSet",selections:e}}}return t})))},l(r,n)}return u(t,e),i(t,[{key:"render",value:function(){var e=this,n=this.props,r=n.field,i=n.schema,s=n.getDefaultFieldNames,c=n.styleConfig,l=this._getSelection(),u=function(e){for(var t=e;(0,a.isWrappingType)(t);)t=t.ofType
return t}(r.type),f=r.args.sort((function(e,t){return e.name.localeCompare(t.name)})),p=o.createElement("div",{className:"graphiql-explorer-node"},o.createElement("span",{title:r.description,style:{cursor:"pointer",display:"inline-flex",alignItems:"center",minHeight:"16px",WebkitUserSelect:"none",userSelect:"none"},"data-field-name":r.name,"data-field-type":u.name,onClick:this._handleUpdateSelections},(0,a.isObjectType)(u)?o.createElement("span",null,l?this.props.styleConfig.arrowOpen:this.props.styleConfig.arrowClosed):null,(0,a.isObjectType)(u)?null:o.createElement(v,{checked:!!l,styleConfig:this.props.styleConfig}),o.createElement("span",{style:{color:c.colors.property}},r.name)),l&&f.length?o.createElement("div",{style:{marginLeft:16}},f.map((function(t){return o.createElement(C,{key:t.name,parentField:r,arg:t,selection:l,modifyArguments:e._setArguments,getDefaultScalarArgValue:e.props.getDefaultScalarArgValue,makeDefaultArg:e.props.makeDefaultArg,onRunOperation:e.props.onRunOperation,styleConfig:e.props.styleConfig})}))):null)
if(l&&((0,a.isObjectType)(u)||(0,a.isInterfaceType)(u)||(0,a.isUnionType)(u))){var d=(0,a.isUnionType)(u)?{}:u.getFields(),h=l&&l.selectionSet?l.selectionSet.selections:[]
return o.createElement("div",null,p,o.createElement("div",{style:{marginLeft:16}},Object.keys(d).sort().map((function(n){return o.createElement(t,{key:n,field:d[n],selections:h,modifySelections:e._modifyChildSelections,schema:i,getDefaultFieldNames:s,getDefaultScalarArgValue:e.props.getDefaultScalarArgValue,makeDefaultArg:e.props.makeDefaultArg,onRunOperation:e.props.onRunOperation,styleConfig:e.props.styleConfig})})),(0,a.isInterfaceType)(u)||(0,a.isUnionType)(u)?i.getPossibleTypes(u).map((function(t){return o.createElement(N,{key:t.name,implementingType:t,selections:h,modifySelections:e._modifyChildSelections,schema:i,getDefaultFieldNames:s,getDefaultScalarArgValue:e.props.getDefaultScalarArgValue,makeDefaultArg:e.props.makeDefaultArg,onRunOperation:e.props.onRunOperation,styleConfig:e.props.styleConfig})})):null))}return p}}]),t}(o.PureComponent)
var L={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],name:{kind:"Name",value:"MyQuery"},directives:[],selectionSet:{kind:"SelectionSet",selections:[]}}]},I=null
function F(e){if(I&&I[0]===e)return I[1]
var t=function(e){try{return e.trim()?(0,a.parse)(e,{noLocation:!0}):null}catch(e){return new Error(e)}}(e)
return t?t instanceof Error?I?I[1]:L:(I=[e,t],t):L}var M={buttonStyle:{fontSize:"1.2em",padding:"0px",backgroundColor:"white",border:"none",margin:"5px 0px",height:"40px",width:"100%",display:"block",maxWidth:"none"},explorerActionsStyle:{margin:"4px -8px -8px",paddingLeft:"8px",bottom:"0px",width:"100%",textAlign:"center",background:"none",borderTop:"none",borderBottom:"none"}},R=function(e){function t(){var e,n,i
c(this,t)
for(var o=arguments.length,a=Array(o),s=0;s<o;s++)a[s]=arguments[s]
return n=i=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),i._modifySelections=function(e){var t=i.props.definition
0===t.selectionSet.selections.length&&i._previousOperationDef&&(t=i._previousOperationDef)
var n=void 0
0===e.length?(i._previousOperationDef=t,n=null):("FragmentDefinition"===t.kind||"OperationDefinition"===t.kind)&&(n=r({},t,{selectionSet:r({},t.selectionSet,{selections:e})})),i.props.onEdit(n)},i._onOperationRename=function(e){return i.props.onOperationRename(e.target.value)},i._handlePotentialRun=function(e){T(e)&&i.props.onRunOperation(i.props.name)},l(i,n)}return u(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.operation,r=t.name,i=t.definition,a=t.schema,s=t.getDefaultFieldNames,c=t.styleConfig,l=this.props.fields||{},u=i.selectionSet.selections,p=this.props.name||f(n)+" Name"
return o.createElement("div",{id:n+"-"+(r||"unknown"),style:{borderBottom:"1px solid #d6d6d6",marginBottom:"0em",paddingBottom:"1em"}},o.createElement("div",{style:{color:c.colors.keyword,paddingBottom:4}},n," ",o.createElement("span",{style:{color:c.colors.def}},o.createElement("input",{style:{color:c.colors.def,border:"none",borderBottom:"1px solid #888",outline:"none",width:Math.max(4,p.length)+"ch"},autoComplete:"false",placeholder:f(n)+" Name",value:this.props.name,onKeyDown:this._handlePotentialRun,onChange:this._onOperationRename})),this.props.onTypeName?o.createElement("span",null,o.createElement("br",null),"on "+this.props.onTypeName):""),Object.keys(l).sort().map((function(t){return o.createElement(D,{key:t,field:l[t],selections:u,modifySelections:e._modifySelections,schema:a,getDefaultFieldNames:s,getDefaultScalarArgValue:e.props.getDefaultScalarArgValue,makeDefaultArg:e.props.makeDefaultArg,onRunOperation:e.props.onRunOperation,styleConfig:e.props.styleConfig})})))}}]),t}(o.PureComponent)
function P(){return o.createElement("div",{style:{fontFamily:"sans-serif",display:"flex",flexDirection:"column",alignItems:"center",margin:"1em",marginTop:0,flexGrow:1,justifyContent:"flex-end"}},o.createElement("div",{style:{borderTop:"1px solid #d6d6d6",paddingTop:"1em",width:"100%",textAlign:"center"}},"GraphiQL Explorer by ",o.createElement("a",{href:"https://www.onegraph.com"},"OneGraph")),o.createElement("div",null,"Contribute on"," ",o.createElement("a",{href:"https://github.com/OneGraph/graphiql-explorer"},"GitHub")))}var V=function(e){function t(){var e,n,r
c(this,t)
for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a]
return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r._resetScroll=function(){var e=r._ref
e&&(e.scrollLeft=0)},r._onEdit=function(e){return r.props.onEdit(e)},l(r,n)}return u(t,e),i(t,[{key:"componentDidMount",value:function(){this._resetScroll()}},{key:"render",value:function(){var e=this,t=this.props,n=t.schema,i=t.query,c=t.makeDefaultArg
if(!n)return o.createElement("div",{style:{fontFamily:"sans-serif"},className:"error-container"},"No Schema Available")
var l={colors:this.props.colors||p,checkboxChecked:this.props.checkboxChecked||m,checkboxUnchecked:this.props.checkboxUnchecked||g,arrowClosed:this.props.arrowClosed||h,arrowOpen:this.props.arrowOpen||d,styles:this.props.styles?r({},M,this.props.styles):M},u=n.getQueryType(),v=n.getMutationType(),b=n.getSubscriptionType()
if(!u&&!v&&!b)return o.createElement("div",null,"Missing query type")
var O=u&&u.getFields(),w=v&&v.getFields(),x=b&&b.getFields(),k=F(i),C=this.props.getDefaultFieldNames||y,T=this.props.getDefaultScalarArgValue||E,_=k.definitions.map((function(e){return"FragmentDefinition"===e.kind||"OperationDefinition"===e.kind?e:null})).filter(Boolean),S=0===_.length?L.definitions:_,N=function(t){var n=k.definitions,i=1===k.definitions.length&&k.definitions[0]===L.definitions[0],o=i?[]:n.filter((function(e){return"OperationDefinition"===e.kind&&e.operation===t})),c="My"+f(t)+(0===o.length?"":o.length+1),l={kind:"OperationDefinition",operation:t,name:{kind:"Name",value:c},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename # Placeholder value",loc:null},arguments:[],directives:[],selectionSet:null,loc:null}],loc:null},loc:null},u=i?[l]:[].concat(s(k.definitions),[l]),p=r({},k,{definitions:u})
e.props.onEdit((0,a.print)(p))}
return o.createElement("div",{ref:function(t){e._ref=t},style:{fontSize:12,textOverflow:"ellipsis",whiteSpace:"nowrap",margin:0,padding:8,fontFamily:'Consolas, Inconsolata, "Droid Sans Mono", Monaco, monospace'},className:"graphiql-explorer-root"},S.map((function(t,i){var s=t&&t.name&&t.name.value,u="FragmentDefinition"===t.kind?"fragment":t&&t.operation||"query",f="FragmentDefinition"===t.kind&&"NamedType"===t.typeCondition.kind&&n.getType(t.typeCondition.name.value),p=f instanceof a.GraphQLObjectType?f.getFields():null,d="query"===u?O:"mutation"===u?w:"subscription"===u?x:"FragmentDefinition"===t.kind?p:null,h="FragmentDefinition"===t.kind?t.typeCondition.name.value:null
return o.createElement(R,{key:i,fields:d,operation:u,name:s,definition:t,onOperationRename:function(n){var i,o,s,c,l=(s=r({},i=t,{name:null==(o=n)||""===o?null:{kind:"Name",value:o,loc:void 0}}),c=k.definitions.map((function(e){return i===e?s:e})),r({},k,{definitions:c}))
e.props.onEdit((0,a.print)(l))},onTypeName:h,onEdit:function(n){var i=r({},k,{definitions:k.definitions.map((function(e){return e===t?n:e}))}),o=(0,a.print)(i)
e.props.onEdit(o)},schema:n,getDefaultFieldNames:C,getDefaultScalarArgValue:T,makeDefaultArg:c,onRunOperation:function(){e.props.onRunOperation&&e.props.onRunOperation(s)},styleConfig:l})})),o.createElement("div",{className:"variable-editor-title",style:l.styles.explorerActionsStyle},O?o.createElement("button",{className:"toolbar-button",style:l.styles.buttonStyle,type:"link",onClick:function(){return N("query")}},"+ ADD NEW QUERY"):null,w?o.createElement("button",{className:"toolbar-button",style:l.styles.buttonStyle,type:"link",onClick:function(){return N("mutation")}},"+ ADD NEW MUTATION"):null,x?o.createElement("button",{className:"toolbar-button",style:l.styles.buttonStyle,type:"link",onClick:function(){return N("subscription")}},"+ ADD NEW SUBSCRIPTION"):null))}}]),t}(o.PureComponent)
V.defaultProps={getDefaultFieldNames:y,getDefaultScalarArgValue:E}
var q=function(e){function t(){var e,n,r
c(this,t)
for(var i=arguments.length,o=Array(i),a=0;a<i;a++)o[a]=arguments[a]
return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={hasError:!1,error:null,errorInfo:null},l(r,n)}return u(t,e),i(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0,error:e,errorInfo:t}),console.error("Error in component",e,t)}},{key:"render",value:function(){return this.state.hasError?o.createElement("div",{style:{padding:18,fontFamily:"sans-serif"}},o.createElement("div",null,"Something went wrong"),o.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error?this.state.error.toString():null,o.createElement("br",null),this.state.errorInfo?this.state.errorInfo.componentStack:null)):this.props.children}}]),t}(o.Component),B=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){var e=this.props.showAttribution?o.createElement(P,null):null
return o.createElement("div",{className:"historyPaneWrap",style:{height:"100%",width:this.props.width,zIndex:7,display:this.props.explorerIsOpen?"block":"none"}},o.createElement("div",{className:"history-title-bar"},o.createElement("div",{className:"history-title"},this.props.title),o.createElement("div",{className:"doc-explorer-rhs"},o.createElement("div",{className:"docExplorerHide",onClick:this.props.onToggleExplorer},"✕"))),o.createElement("div",{className:"history-contents"},o.createElement("div",{style:{overflow:"scroll",width:"100%",display:"flex",flexDirection:"column",minHeight:"100%"}},o.createElement(q,null,o.createElement(V,this.props)),e)))}}]),t}(o.PureComponent)
B.defaultValue=k,B.defaultProps={width:380,title:"Explorer"},t.default=B},Sz5L:function(e,t,n){"use strict"
var r=n("AGgm").isSpace
function i(e,t){var n,i,o,a
return i=e.bMarks[t]+e.tShift[t],o=e.eMarks[t],42!==(n=e.src.charCodeAt(i++))&&45!==n&&43!==n||i<o&&(a=e.src.charCodeAt(i),!r(a))?-1:i}function o(e,t){var n,i=e.bMarks[t]+e.tShift[t],o=i,a=e.eMarks[t]
if(o+1>=a)return-1
if((n=e.src.charCodeAt(o++))<48||n>57)return-1
for(;;){if(o>=a)return-1
if(!((n=e.src.charCodeAt(o++))>=48&&n<=57)){if(41===n||46===n)break
return-1}if(o-i>=10)return-1}return o<a&&(n=e.src.charCodeAt(o),!r(n))?-1:o}e.exports=function(e,t,n,r){var a,s,c,l,u,f,p,d,h,m,g,v,y,b,O,w,x,k,E,C,T,_,S,N,A,j,D,L,I=!1,F=!0
if(e.sCount[t]-e.blkIndent>=4)return!1
if(r&&"paragraph"===e.parentType&&e.tShift[t]>=e.blkIndent&&(I=!0),(S=o(e,t))>=0){if(p=!0,A=e.bMarks[t]+e.tShift[t],y=Number(e.src.substr(A,S-A-1)),I&&1!==y)return!1}else{if(!((S=i(e,t))>=0))return!1
p=!1}if(I&&e.skipSpaces(S)>=e.eMarks[t])return!1
if(v=e.src.charCodeAt(S-1),r)return!0
for(g=e.tokens.length,p?(L=e.push("ordered_list_open","ol",1),1!==y&&(L.attrs=[["start",y]])):L=e.push("bullet_list_open","ul",1),L.map=m=[t,0],L.markup=String.fromCharCode(v),O=t,N=!1,D=e.md.block.ruler.getRules("list"),E=e.parentType,e.parentType="list";O<n;){for(_=S,b=e.eMarks[O],f=w=e.sCount[O]+S-(e.bMarks[t]+e.tShift[t]);_<b;){if(9===(a=e.src.charCodeAt(_)))w+=4-(w+e.bsCount[O])%4
else{if(32!==a)break
w++}_++}if((u=(s=_)>=b?1:w-f)>4&&(u=1),l=f+u,(L=e.push("list_item_open","li",1)).markup=String.fromCharCode(v),L.map=d=[t,0],x=e.blkIndent,T=e.tight,C=e.tShift[t],k=e.sCount[t],e.blkIndent=l,e.tight=!0,e.tShift[t]=s-e.bMarks[t],e.sCount[t]=w,s>=b&&e.isEmpty(t+1)?e.line=Math.min(e.line+2,n):e.md.block.tokenize(e,t,n,!0),e.tight&&!N||(F=!1),N=e.line-t>1&&e.isEmpty(e.line-1),e.blkIndent=x,e.tShift[t]=C,e.sCount[t]=k,e.tight=T,(L=e.push("list_item_close","li",-1)).markup=String.fromCharCode(v),O=t=e.line,d[1]=O,s=e.bMarks[t],O>=n)break
if(e.sCount[O]<e.blkIndent)break
for(j=!1,c=0,h=D.length;c<h;c++)if(D[c](e,O,n,!0)){j=!0
break}if(j)break
if(p){if((S=o(e,O))<0)break}else if((S=i(e,O))<0)break
if(v!==e.src.charCodeAt(S-1))break}return(L=p?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1)).markup=String.fromCharCode(v),m[1]=O,e.line=O,e.parentType=E,F&&function(e,t){var n,r,i=e.level+2
for(n=t+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===i&&"paragraph_open"===e.tokens[n].type&&(e.tokens[n+2].hidden=!0,e.tokens[n].hidden=!0,n+=2)}(e,g),!0}},T8I8:function(e,t){e.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},T95z:function(e,t,n){"use strict"
function r(e,t){for(var n=Object.create(null),r=e.length/2,o=0;o<t.length;o++){var a=t[o],s=i(e,a)
s<=Math.max(r,a.length/2,1)&&(n[a]=s)}return Object.keys(n).sort((function(e,t){return n[e]-n[t]}))}function i(e,t){if(e===t)return 0
var n=[],r=e.toLowerCase(),i=t.toLowerCase(),o=r.length,a=i.length
if(r===i)return 1
for(var s=0;s<=o;s++)n[s]=[s]
for(var c=1;c<=a;c++)n[0][c]=c
for(var l=1;l<=o;l++)for(var u=1;u<=a;u++){var f=r[l-1]===i[u-1]?0:1
n[l][u]=Math.min(n[l-1][u]+1,n[l][u-1]+1,n[l-1][u-1]+f),l>1&&u>1&&r[l-1]===i[u-2]&&r[l-2]===i[u-1]&&(n[l][u]=Math.min(n[l][u],n[l-2][u-2]+f))}return n[o][a]}n.d(t,"a",(function(){return r}))},TCYN:function(e,t,n){"use strict"
var r=/\r[\n\u0085]?|[\u2424\u2028\u0085]/g,i=/\u0000/g
e.exports=function(e){var t
t=(t=e.src.replace(r,"\n")).replace(i,"�"),e.src=t}},TLR5:function(e,t,n){"use strict"
var r=n("SINd"),i=[["text",n("usqY")],["newline",n("QjYF")],["escape",n("bgCn")],["backticks",n("SpRm")],["strikethrough",n("kiyR").tokenize],["emphasis",n("yKnv").tokenize],["link",n("zQ/W")],["image",n("ky0j")],["autolink",n("KOyK")],["html_inline",n("wtjL")],["entity",n("W1Rp")]],o=[["balance_pairs",n("g40J")],["strikethrough",n("kiyR").postProcess],["emphasis",n("yKnv").postProcess],["text_collapse",n("IIUr")]]
function a(){var e
for(this.ruler=new r,e=0;e<i.length;e++)this.ruler.push(i[e][0],i[e][1])
for(this.ruler2=new r,e=0;e<o.length;e++)this.ruler2.push(o[e][0],o[e][1])}a.prototype.skipToken=function(e){var t,n,r=e.pos,i=this.ruler.getRules(""),o=i.length,a=e.md.options.maxNesting,s=e.cache
if(void 0===s[r]){if(e.level<a)for(n=0;n<o&&(e.level++,t=i[n](e,!0),e.level--,!t);n++);else e.pos=e.posMax
t||e.pos++,s[r]=e.pos}else e.pos=s[r]},a.prototype.tokenize=function(e){for(var t,n,r=this.ruler.getRules(""),i=r.length,o=e.posMax,a=e.md.options.maxNesting;e.pos<o;){if(e.level<a)for(n=0;n<i&&!(t=r[n](e,!1));n++);if(t){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},a.prototype.parse=function(e,t,n,r){var i,o,a,s=new this.State(e,t,n,r)
for(this.tokenize(s),a=(o=this.ruler2.getRules("")).length,i=0;i<a;i++)o[i](s)},a.prototype.State=n("CXva"),e.exports=a},ThnF:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=c
var r=s(n("q1tI")),i=s(n("17x9")),o=s(n("KuaT")),a=s(n("9Iv4"))
function s(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.arg,n=e.onClickType,i=e.showDefaultValue
return r.default.createElement("span",{className:"arg"},r.default.createElement("span",{className:"arg-name"},t.name),": ",r.default.createElement(o.default,{type:t.type,onClick:n}),!1!==i&&r.default.createElement(a.default,{field:t}))}c.propTypes={arg:i.default.object.isRequired,onClickType:i.default.func.isRequired,showDefaultValue:i.default.bool}},TirB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return m}))
var r=n("1QEH"),i=n("rWdj"),o=n("t3R0"),a=n("WXJZ"),s=n("zpYP"),c=n("EMzn"),l=n("4suF"),u=n("19Hc"),f=n("LViu"),p=n("51nL"),d=n("axIb"),h=n("Mbdf")
function m(e,t){Object(s.a)(e)&&Object(s.a)(e.__schema)||Object(o.a)(0,'Invalid or incomplete introspection result. Ensure that you are passing "data" property of introspection response and no "errors" was returned alongside: '+Object(i.a)(e))
for(var n=e.__schema,m=Object(a.a)(n.types,(function(e){return e.name}),(function(e){return function(e){if(e&&e.name&&e.kind)switch(e.kind){case f.TypeKind.SCALAR:return n=e,new d.g({name:n.name,description:n.description})
case f.TypeKind.OBJECT:return function(e){if(!e.interfaces)throw new Error("Introspection result missing interfaces: "+Object(i.a)(e))
return new d.f({name:e.name,description:e.description,interfaces:function(){return e.interfaces.map(T)},fields:function(){return _(e)}})}(e)
case f.TypeKind.INTERFACE:return t=e,new d.c({name:t.name,description:t.description,fields:function(){return _(t)}})
case f.TypeKind.UNION:return function(e){if(!e.possibleTypes)throw new Error("Introspection result missing possibleTypes: "+Object(i.a)(e))
return new d.h({name:e.name,description:e.description,types:function(){return e.possibleTypes.map(C)}})}(e)
case f.TypeKind.ENUM:return function(e){if(!e.enumValues)throw new Error("Introspection result missing enumValues: "+Object(i.a)(e))
return new d.a({name:e.name,description:e.description,values:Object(a.a)(e.enumValues,(function(e){return e.name}),(function(e){return{description:e.description,deprecationReason:e.deprecationReason}}))})}(e)
case f.TypeKind.INPUT_OBJECT:return function(e){if(!e.inputFields)throw new Error("Introspection result missing inputFields: "+Object(i.a)(e))
return new d.b({name:e.name,description:e.description,fields:function(){return S(e.inputFields)}})}(e)}var t
var n
throw new Error("Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema:"+Object(i.a)(e))}(e)})),g=0,v=[].concat(u.g,f.introspectionTypes);g<v.length;g++){var y=v[g]
m[y.name]&&(m[y.name]=y)}var b=n.queryType?C(n.queryType):null,O=n.mutationType?C(n.mutationType):null,w=n.subscriptionType?C(n.subscriptionType):null,x=n.directives?n.directives.map((function(e){if(!e.args)throw new Error("Introspection result missing directive args: "+Object(i.a)(e))
if(!e.locations)throw new Error("Introspection result missing directive locations: "+Object(i.a)(e))
return new l.c({name:e.name,description:e.description,locations:e.locations.slice(),args:S(e.args)})})):[]
return new p.a({query:b,mutation:O,subscription:w,types:Object(r.a)(m),directives:x,assumeValid:t&&t.assumeValid,allowedLegacyNames:t&&t.allowedLegacyNames})
function k(e){if(e.kind===f.TypeKind.LIST){var t=e.ofType
if(!t)throw new Error("Decorated type deeper than introspection query.")
return Object(d.d)(k(t))}if(e.kind===f.TypeKind.NON_NULL){var n=e.ofType
if(!n)throw new Error("Decorated type deeper than introspection query.")
var r=k(n)
return Object(d.e)(Object(d.t)(r))}if(!e.name)throw new Error("Unknown type reference: "+Object(i.a)(e))
return function(e){var t=m[e]
if(!t)throw new Error("Invalid or incomplete schema, unknown type: ".concat(e,". Ensure that a full introspection query is used in order to build a client schema."))
return t}(e.name)}function E(e){var t=k(e)
if(Object(d.O)(t))return t
throw new Error("Introspection must provide output type for fields, but received: "+Object(i.a)(t)+".")}function C(e){var t=k(e)
return Object(d.u)(t)}function T(e){var t=k(e)
return Object(d.o)(t)}function _(e){if(!e.fields)throw new Error("Introspection result missing fields: "+Object(i.a)(e))
return Object(a.a)(e.fields,(function(e){return e.name}),(function(e){if(!e.args)throw new Error("Introspection result missing field args: "+Object(i.a)(e))
return{description:e.description,deprecationReason:e.deprecationReason,type:E(e.type),args:S(e.args)}}))}function S(e){return Object(a.a)(e,(function(e){return e.name}),N)}function N(e){var t=function(e){var t=k(e)
if(Object(d.G)(t))return t
throw new Error("Introspection must provide input type for arguments, but received: "+Object(i.a)(t)+".")}(e.type),n=e.defaultValue?Object(h.a)(Object(c.parseValue)(e.defaultValue),t):void 0
return{description:e.description,type:t,defaultValue:n}}}},TylT:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var a,s
n("VrN/").on(t,"select",(function(e,t){if(!a){var n,c=t.parentNode;(a=document.createElement("div")).className="CodeMirror-hint-information",c.appendChild(a),(s=document.createElement("div")).className="CodeMirror-hint-deprecation",c.appendChild(s),c.addEventListener("DOMNodeRemoved",n=function(e){e.target===c&&(c.removeEventListener("DOMNodeRemoved",n),a=null,s=null,n=null)})}var l=e.description?o.render(e.description):"Self descriptive.",u=e.type?'<span class="infoType">'+function e(t){if(t instanceof i.GraphQLNonNull)return"".concat(e(t.ofType),"!")
if(t instanceof i.GraphQLList)return"[".concat(e(t.ofType),"]")
return'<a class="typeName">'.concat(t.name,"</a>")}(e.type)+"</span>":""
if(a.innerHTML='<div class="content">'+("<p>"===l.slice(0,3)?"<p>"+u+l.slice(3):u+l)+"</div>",e.isDeprecated){var f=e.deprecationReason?o.render(e.deprecationReason):""
s.innerHTML='<span class="deprecation-label">Deprecated</span>'+f,s.style.display="block"}else s.style.display="none"
r&&r(a)}))}
var r,i=n("Tzvz")
var o=new(((r=n("1M3H"))&&r.__esModule?r:{default:r}).default)},Tzvz:function(e,t,n){"use strict"
n.r(t),n.d(t,"version",(function(){return r})),n.d(t,"versionInfo",(function(){return i})),n.d(t,"graphql",(function(){return pe})),n.d(t,"graphqlSync",(function(){return de})),n.d(t,"GraphQLSchema",(function(){return me.a})),n.d(t,"GraphQLDirective",(function(){return x.c})),n.d(t,"GraphQLScalarType",(function(){return k.g})),n.d(t,"GraphQLObjectType",(function(){return k.f})),n.d(t,"GraphQLInterfaceType",(function(){return k.c})),n.d(t,"GraphQLUnionType",(function(){return k.h})),n.d(t,"GraphQLEnumType",(function(){return k.a})),n.d(t,"GraphQLInputObjectType",(function(){return k.b})),n.d(t,"GraphQLList",(function(){return k.d})),n.d(t,"GraphQLNonNull",(function(){return k.e})),n.d(t,"specifiedScalarTypes",(function(){return ge.g})),n.d(t,"GraphQLInt",(function(){return ge.d})),n.d(t,"GraphQLFloat",(function(){return ge.b})),n.d(t,"GraphQLString",(function(){return ge.e})),n.d(t,"GraphQLBoolean",(function(){return ge.a})),n.d(t,"GraphQLID",(function(){return ge.c})),n.d(t,"specifiedDirectives",(function(){return x.i})),n.d(t,"GraphQLIncludeDirective",(function(){return x.d})),n.d(t,"GraphQLSkipDirective",(function(){return x.e})),n.d(t,"GraphQLDeprecatedDirective",(function(){return x.b})),n.d(t,"TypeKind",(function(){return w.TypeKind})),n.d(t,"DEFAULT_DEPRECATION_REASON",(function(){return x.a})),n.d(t,"introspectionTypes",(function(){return w.introspectionTypes})),n.d(t,"__Schema",(function(){return w.__Schema})),n.d(t,"__Directive",(function(){return w.__Directive})),n.d(t,"__DirectiveLocation",(function(){return w.__DirectiveLocation})),n.d(t,"__Type",(function(){return w.__Type})),n.d(t,"__Field",(function(){return w.__Field})),n.d(t,"__InputValue",(function(){return w.__InputValue})),n.d(t,"__EnumValue",(function(){return w.__EnumValue})),n.d(t,"__TypeKind",(function(){return w.__TypeKind})),n.d(t,"SchemaMetaFieldDef",(function(){return w.SchemaMetaFieldDef})),n.d(t,"TypeMetaFieldDef",(function(){return w.TypeMetaFieldDef})),n.d(t,"TypeNameMetaFieldDef",(function(){return w.TypeNameMetaFieldDef})),n.d(t,"isSchema",(function(){return me.c})),n.d(t,"isDirective",(function(){return x.g})),n.d(t,"isType",(function(){return k.S})),n.d(t,"isScalarType",(function(){return k.R})),n.d(t,"isObjectType",(function(){return k.N})),n.d(t,"isInterfaceType",(function(){return k.H})),n.d(t,"isUnionType",(function(){return k.T})),n.d(t,"isEnumType",(function(){return k.E})),n.d(t,"isInputObjectType",(function(){return k.F})),n.d(t,"isListType",(function(){return k.J})),n.d(t,"isNonNullType",(function(){return k.L})),n.d(t,"isInputType",(function(){return k.G})),n.d(t,"isOutputType",(function(){return k.O})),n.d(t,"isLeafType",(function(){return k.I})),n.d(t,"isCompositeType",(function(){return k.D})),n.d(t,"isAbstractType",(function(){return k.C})),n.d(t,"isWrappingType",(function(){return k.U})),n.d(t,"isNullableType",(function(){return k.M})),n.d(t,"isNamedType",(function(){return k.K})),n.d(t,"isRequiredArgument",(function(){return k.P})),n.d(t,"isRequiredInputField",(function(){return k.Q})),n.d(t,"isSpecifiedScalarType",(function(){return ge.f})),n.d(t,"isIntrospectionType",(function(){return w.isIntrospectionType})),n.d(t,"isSpecifiedDirective",(function(){return x.h})),n.d(t,"assertSchema",(function(){return me.b})),n.d(t,"assertDirective",(function(){return x.f})),n.d(t,"assertType",(function(){return k.x})),n.d(t,"assertScalarType",(function(){return k.w})),n.d(t,"assertObjectType",(function(){return k.u})),n.d(t,"assertInterfaceType",(function(){return k.o})),n.d(t,"assertUnionType",(function(){return k.y})),n.d(t,"assertEnumType",(function(){return k.l})),n.d(t,"assertInputObjectType",(function(){return k.m})),n.d(t,"assertListType",(function(){return k.q})),n.d(t,"assertNonNullType",(function(){return k.s})),n.d(t,"assertInputType",(function(){return k.n})),n.d(t,"assertOutputType",(function(){return k.v})),n.d(t,"assertLeafType",(function(){return k.p})),n.d(t,"assertCompositeType",(function(){return k.k})),n.d(t,"assertAbstractType",(function(){return k.j})),n.d(t,"assertWrappingType",(function(){return k.z})),n.d(t,"assertNullableType",(function(){return k.t})),n.d(t,"assertNamedType",(function(){return k.r})),n.d(t,"getNullableType",(function(){return k.B})),n.d(t,"getNamedType",(function(){return k.A})),n.d(t,"validateSchema",(function(){return c.b})),n.d(t,"assertValidSchema",(function(){return c.a})),n.d(t,"Source",(function(){return ve.a})),n.d(t,"getLocation",(function(){return ye.a})),n.d(t,"printLocation",(function(){return be.a})),n.d(t,"printSourceLocation",(function(){return be.b})),n.d(t,"createLexer",(function(){return Oe.a})),n.d(t,"TokenKind",(function(){return we.a})),n.d(t,"parse",(function(){return a.parse})),n.d(t,"parseValue",(function(){return a.parseValue})),n.d(t,"parseType",(function(){return a.parseType})),n.d(t,"print",(function(){return N.a})),n.d(t,"visit",(function(){return xe.c})),n.d(t,"visitInParallel",(function(){return xe.d})),n.d(t,"visitWithTypeInfo",(function(){return xe.e})),n.d(t,"getVisitFn",(function(){return xe.b})),n.d(t,"BREAK",(function(){return xe.a})),n.d(t,"Kind",(function(){return O.Kind})),n.d(t,"DirectiveLocation",(function(){return ke.a})),n.d(t,"isDefinitionNode",(function(){return Ee.a})),n.d(t,"isExecutableDefinitionNode",(function(){return Ee.b})),n.d(t,"isSelectionNode",(function(){return Ee.c})),n.d(t,"isValueNode",(function(){return Ee.i})),n.d(t,"isTypeNode",(function(){return Ee.f})),n.d(t,"isTypeSystemDefinitionNode",(function(){return Ee.g})),n.d(t,"isTypeDefinitionNode",(function(){return Ee.d})),n.d(t,"isTypeSystemExtensionNode",(function(){return Ee.h})),n.d(t,"isTypeExtensionNode",(function(){return Ee.e})),n.d(t,"execute",(function(){return B})),n.d(t,"defaultFieldResolver",(function(){return ue})),n.d(t,"defaultTypeResolver",(function(){return le})),n.d(t,"responsePathAsArray",(function(){return v})),n.d(t,"getDirectiveValues",(function(){return V})),n.d(t,"subscribe",(function(){return Se})),n.d(t,"createSourceEventStream",(function(){return je})),n.d(t,"validate",(function(){return s.c})),n.d(t,"ValidationContext",(function(){return De.b})),n.d(t,"specifiedRules",(function(){return Le.a})),n.d(t,"ExecutableDefinitionsRule",(function(){return Ie.ExecutableDefinitions})),n.d(t,"FieldsOnCorrectTypeRule",(function(){return Fe.a})),n.d(t,"FragmentsOnCompositeTypesRule",(function(){return Me.a})),n.d(t,"KnownArgumentNamesRule",(function(){return Re.a})),n.d(t,"KnownDirectivesRule",(function(){return Pe.a})),n.d(t,"KnownFragmentNamesRule",(function(){return Ve.KnownFragmentNames})),n.d(t,"KnownTypeNamesRule",(function(){return qe.a})),n.d(t,"LoneAnonymousOperationRule",(function(){return Be.a})),n.d(t,"NoFragmentCyclesRule",(function(){return ze.a})),n.d(t,"NoUndefinedVariablesRule",(function(){return Ue.a})),n.d(t,"NoUnusedFragmentsRule",(function(){return He.NoUnusedFragments})),n.d(t,"NoUnusedVariablesRule",(function(){return We.a})),n.d(t,"OverlappingFieldsCanBeMergedRule",(function(){return Ge.a})),n.d(t,"PossibleFragmentSpreadsRule",(function(){return Ke.a})),n.d(t,"ProvidedRequiredArgumentsRule",(function(){return Qe.a})),n.d(t,"ScalarLeafsRule",(function(){return Ye.a})),n.d(t,"SingleFieldSubscriptionsRule",(function(){return Je.a})),n.d(t,"UniqueArgumentNamesRule",(function(){return Xe.a})),n.d(t,"UniqueDirectivesPerLocationRule",(function(){return Ze.a})),n.d(t,"UniqueFragmentNamesRule",(function(){return $e.a})),n.d(t,"UniqueInputFieldNamesRule",(function(){return et.a})),n.d(t,"UniqueOperationNamesRule",(function(){return tt.a})),n.d(t,"UniqueVariableNamesRule",(function(){return nt.a})),n.d(t,"ValuesOfCorrectTypeRule",(function(){return rt.a})),n.d(t,"VariablesAreInputTypesRule",(function(){return it.a})),n.d(t,"VariablesInAllowedPositionRule",(function(){return ot.a})),n.d(t,"LoneSchemaDefinitionRule",(function(){return at.a})),n.d(t,"UniqueOperationTypesRule",(function(){return st.a})),n.d(t,"UniqueTypeNamesRule",(function(){return ct.a})),n.d(t,"UniqueEnumValueNamesRule",(function(){return lt.a})),n.d(t,"UniqueFieldDefinitionNamesRule",(function(){return ut.a})),n.d(t,"UniqueDirectiveNamesRule",(function(){return ft.a})),n.d(t,"PossibleTypeExtensionsRule",(function(){return pt.a})),n.d(t,"GraphQLError",(function(){return y.a})),n.d(t,"syntaxError",(function(){return dt.a})),n.d(t,"locatedError",(function(){return b})),n.d(t,"printError",(function(){return y.b})),n.d(t,"formatError",(function(){return ht})),n.d(t,"getIntrospectionQuery",(function(){return mt.a})),n.d(t,"introspectionQuery",(function(){return mt.b})),n.d(t,"getOperationAST",(function(){return gt})),n.d(t,"getOperationRootType",(function(){return C})),n.d(t,"introspectionFromSchema",(function(){return vt})),n.d(t,"buildClientSchema",(function(){return yt.a})),n.d(t,"buildASTSchema",(function(){return wt})),n.d(t,"buildSchema",(function(){return _t})),n.d(t,"getDescription",(function(){return Tt})),n.d(t,"extendSchema",(function(){return Lt})),n.d(t,"lexicographicSortSchema",(function(){return Rt})),n.d(t,"printSchema",(function(){return zt})),n.d(t,"printType",(function(){return Kt})),n.d(t,"printIntrospectionSchema",(function(){return Ut})),n.d(t,"typeFromAST",(function(){return E.a})),n.d(t,"valueFromAST",(function(){return A.a})),n.d(t,"valueFromASTUntyped",(function(){return nn.a})),n.d(t,"astFromValue",(function(){return Bt.a})),n.d(t,"TypeInfo",(function(){return rn.a})),n.d(t,"coerceInputValue",(function(){return I})),n.d(t,"coerceValue",(function(){return on})),n.d(t,"isValidJSValue",(function(){return an})),n.d(t,"isValidLiteralValue",(function(){return sn})),n.d(t,"concatAST",(function(){return cn})),n.d(t,"separateOperations",(function(){return ln})),n.d(t,"stripIgnoredCharacters",(function(){return pn})),n.d(t,"isEqualType",(function(){return hn.b})),n.d(t,"isTypeSubTypeOf",(function(){return hn.c})),n.d(t,"doTypesOverlap",(function(){return hn.a})),n.d(t,"assertValidName",(function(){return mn.a})),n.d(t,"isValidNameError",(function(){return mn.b})),n.d(t,"BreakingChangeType",(function(){return yn})),n.d(t,"DangerousChangeType",(function(){return bn})),n.d(t,"findBreakingChanges",(function(){return On})),n.d(t,"findDangerousChanges",(function(){return wn})),n.d(t,"findDeprecatedUsages",(function(){return In.a}))
var r="14.6.0",i=Object.freeze({major:14,minor:6,patch:0,preReleaseTag:null})
function o(e){return Boolean(e&&"function"==typeof e.then)}var a=n("EMzn"),s=n("EkME"),c=n("93gR"),l=n("EkS5"),u=n("rWdj")
var f=n("2C6G"),p=n("t3R0"),d=n("/kEc"),h=n("das/"),m=n("zpYP")
function g(e,t){return{prev:e,key:t}}function v(e){for(var t=[],n=e;n;)t.push(n.key),n=n.prev
return t.reverse()}var y=n("dWS+")
function b(e,t,n){return e&&Array.isArray(e.path)?e:new y.a(e&&e.message,e&&e.nodes||t,e&&e.source,e&&e.positions,n,e)}var O=n("/jXB"),w=n("LViu"),x=n("4suF"),k=n("axIb"),E=n("umOc")
function C(e,t){if("query"===t.operation){var n=e.getQueryType()
if(!n)throw new y.a("Schema does not define the required query root type.",t)
return n}if("mutation"===t.operation){var r=e.getMutationType()
if(!r)throw new y.a("Schema is not configured for mutations.",t)
return r}if("subscription"===t.operation){var i=e.getSubscriptionType()
if(!i)throw new y.a("Schema is not configured for subscriptions.",t)
return i}throw new y.a("Can only have query, mutation and subscription operations.",t)}var T=n("1/U3"),_=n("kBjl")
function S(e){return e.map((function(e){return"number"==typeof e?"["+e.toString()+"]":"."+e})).join("")}var N=n("dQau"),A=n("Mbdf"),j=n("1QEH"),D=n("pv/G"),L=n("T95z")
function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F
return M(e,t,n)}function F(e,t,n){var r="Invalid value "+Object(u.a)(t)
throw e.length>0&&(r+=' at "value'.concat(S(e),'": ')),n.message=r+": "+n.message,n}function M(e,t,n,r){if(Object(k.L)(t))return null!=e?M(e,t.ofType,n,r):void n(v(r),e,new y.a("Expected non-nullable type ".concat(Object(u.a)(t)," not to be null.")))
if(null==e)return null
if(Object(k.J)(t)){var i=t.ofType
if(Object(l.e)(e)){var o=[]
return Object(l.b)(e,(function(e,t){o.push(M(e,i,n,g(r,t)))})),o}return[M(e,i,n,r)]}if(Object(k.F)(t)){if(!Object(m.a)(e))return void n(v(r),e,new y.a("Expected type ".concat(t.name," to be an object.")))
for(var a={},s=t.getFields(),c=0,p=Object(j.a)(s);c<p.length;c++){var d=p[c],h=e[d.name]
if(void 0!==h)a[d.name]=M(h,d.type,n,g(r,d.name))
else if(void 0!==d.defaultValue)a[d.name]=d.defaultValue
else if(Object(k.L)(d.type)){var b=Object(u.a)(d.type)
n(v(r),e,new y.a("Field ".concat(d.name," of required type ").concat(b," was not provided.")))}}for(var O=0,w=Object.keys(e);O<w.length;O++){var x=w[O]
if(!s[x]){var E=Object(L.a)(x,Object.keys(t.getFields()))
n(v(r),e,new y.a('Field "'.concat(x,'" is not defined by type ').concat(t.name,".")+Object(D.a)(E)))}}return a}if(Object(k.R)(t)){var C
try{C=t.parseValue(e)}catch(i){return void n(v(r),e,new y.a("Expected type ".concat(t.name,". ")+i.message,void 0,void 0,void 0,void 0,i))}return void 0===C&&n(v(r),e,new y.a("Expected type ".concat(t.name,"."))),C}if(Object(k.E)(t)){if("string"==typeof e){var T=t.getValue(e)
if(T)return T.value}var _=Object(L.a)(String(e),t.getValues().map((function(e){return e.name})))
n(v(r),e,new y.a("Expected type ".concat(t.name,".")+Object(D.a)(_)))}else Object(f.a)(!1,"Unexpected input type: "+Object(u.a)(t))}function R(e,t,n,r){var i=r&&r.maxErrors,o=[]
try{var a=function(e,t,n,r){for(var i={},o=function(o){var a=t[o],s=a.variable.name.value,c=Object(E.a)(e,a.type)
if(!Object(k.G)(c)){var l=Object(N.a)(a.type)
return r(new y.a('Variable "$'.concat(s,'" expected value of type "').concat(l,'" which cannot be used as an input type.'),a.type)),"continue"}if(!q(n,s)){if(a.defaultValue)i[s]=Object(A.a)(a.defaultValue,c)
else if(Object(k.L)(c)){var f=Object(u.a)(c)
r(new y.a('Variable "$'.concat(s,'" of required type "').concat(f,'" was not provided.'),a))}return"continue"}var p=n[s]
if(null===p&&Object(k.L)(c)){var d=Object(u.a)(c)
return r(new y.a('Variable "$'.concat(s,'" of non-null type "').concat(d,'" must not be null.'),a)),"continue"}i[s]=I(p,c,(function(e,t,n){var i='Variable "$'.concat(s,'" got invalid value ')+Object(u.a)(t)
e.length>0&&(i+=' at "'.concat(s).concat(S(e),'"')),r(new y.a(i+"; "+n.message,a,void 0,void 0,void 0,n.originalError))}))},a=0;a<t.length;a++)o(a)
return i}(e,t,n,(function(e){if(null!=i&&o.length>=i)throw new y.a("Too many errors processing variables, error limit reached. Execution aborted.")
o.push(e)}))
if(0===o.length)return{coerced:a}}catch(e){o.push(e)}return{errors:o}}function P(e,t,n){for(var r={},i=Object(_.a)(t.arguments||[],(function(e){return e.name.value})),o=0,a=e.args;o<a.length;o++){var s=a[o],c=s.name,l=s.type,f=i[c]
if(f){var p=f.value,d=p.kind===O.Kind.NULL
if(p.kind===O.Kind.VARIABLE){var h=p.name.value
if(null==n||!q(n,h)){if(void 0!==s.defaultValue)r[c]=s.defaultValue
else if(Object(k.L)(l))throw new y.a('Argument "'.concat(c,'" of required type "').concat(Object(u.a)(l),'" ')+'was provided the variable "$'.concat(h,'" which was not provided a runtime value.'),p)
continue}d=null==n[h]}if(d&&Object(k.L)(l))throw new y.a('Argument "'.concat(c,'" of non-null type "').concat(Object(u.a)(l),'" ')+"must not be null.",p)
var m=Object(A.a)(p,l,n)
if(void 0===m)throw new y.a('Argument "'.concat(c,'" has invalid value ').concat(Object(N.a)(p),"."),p)
r[c]=m}else if(void 0!==s.defaultValue)r[c]=s.defaultValue
else if(Object(k.L)(l))throw new y.a('Argument "'.concat(c,'" of required type "').concat(Object(u.a)(l),'" ')+"was not provided.",t)}return r}function V(e,t,n){var r=t.directives&&Object(T.a)(t.directives,(function(t){return t.name.value===e.name}))
if(r)return P(e,r,n)}function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function B(e,t,n,r,i,o,a,s){return 1===arguments.length?z(e):z({schema:e,document:t,rootValue:n,contextValue:r,variableValues:i,operationName:o,fieldResolver:a,typeResolver:s})}function z(e){var t=e.schema,n=e.document,r=e.rootValue,i=e.contextValue,a=e.variableValues,s=e.operationName,c=e.fieldResolver,l=e.typeResolver
U(t,n,a)
var u=H(t,n,r,i,a,s,c,l)
if(Array.isArray(u))return{errors:u}
var f=function(e,t,n){var r=C(e.schema,t),i=G(e,r,t.selectionSet,Object.create(null),Object.create(null))
try{var a="mutation"===t.operation?function(e,t,n,r,i){return a=Object.keys(i),s=function(a,s){var c=i[s],l=g(r,s),u=Y(e,t,n,c,l)
return void 0===u?a:o(u)?u.then((function(e){return a[s]=e,a})):(a[s]=u,a)},c=Object.create(null),a.reduce((function(e,t){return o(e)?e.then((function(e){return s(e,t)})):s(e,t)}),c)
var a,s,c}(e,r,n,void 0,i):W(e,r,n,void 0,i)
return o(a)?a.then(void 0,(function(t){return e.errors.push(t),Promise.resolve(null)})):a}catch(t){return e.errors.push(t),null}}(u,u.operation,r)
return function e(t,n){if(o(n))return n.then((function(n){return e(t,n)}))
return 0===t.errors.length?{data:n}:{errors:t.errors,data:n}}(u,f)}function U(e,t,n){t||Object(p.a)(0,"Must provide document"),Object(c.a)(e),null==n||Object(m.a)(n)||Object(p.a)(0,"Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.")}function H(e,t,n,r,i,o,a,s){for(var c,l=!1,u=Object.create(null),f=0,p=t.definitions;f<p.length;f++){var d=p[f]
switch(d.kind){case O.Kind.OPERATION_DEFINITION:!o&&c?l=!0:(!o||d.name&&d.name.value===o)&&(c=d)
break
case O.Kind.FRAGMENT_DEFINITION:u[d.name.value]=d}}if(!c)return o?[new y.a('Unknown operation named "'.concat(o,'".'))]:[new y.a("Must provide an operation.")]
if(l)return[new y.a("Must provide operation name if query contains multiple operations.")]
var h=R(e,c.variableDefinitions||[],i||{},{maxErrors:50})
return h.errors?h.errors:{schema:e,fragments:u,rootValue:n,contextValue:r,operation:c,variableValues:h.coerced,fieldResolver:a||ue,typeResolver:s||le,errors:[]}}function W(e,t,n,r,i){for(var a,s,c,l=Object.create(null),u=!1,f=0,p=Object.keys(i);f<p.length;f++){var d=p[f],h=Y(e,t,n,i[d],g(r,d))
void 0!==h&&(l[d]=h,!u&&o(h)&&(u=!0))}return u?(a=l,s=Object.keys(a),c=s.map((function(e){return a[e]})),Promise.all(c).then((function(e){return e.reduce((function(e,t,n){return e[s[n]]=t,e}),Object.create(null))}))):l}function G(e,t,n,r,i){for(var o=0,a=n.selections;o<a.length;o++){var s=a[o]
switch(s.kind){case O.Kind.FIELD:if(!K(e,s))continue
var c=(f=s).alias?f.alias.value:f.name.value
r[c]||(r[c]=[]),r[c].push(s)
break
case O.Kind.INLINE_FRAGMENT:if(!K(e,s)||!Q(e,s,t))continue
G(e,t,s.selectionSet,r,i)
break
case O.Kind.FRAGMENT_SPREAD:var l=s.name.value
if(i[l]||!K(e,s))continue
i[l]=!0
var u=e.fragments[l]
if(!u||!Q(e,u,t))continue
G(e,t,u.selectionSet,r,i)}}var f
return r}function K(e,t){var n=V(x.e,t,e.variableValues)
if(n&&!0===n.if)return!1
var r=V(x.d,t,e.variableValues)
return!r||!1!==r.if}function Q(e,t,n){var r=t.typeCondition
if(!r)return!0
var i=Object(E.a)(e.schema,r)
return i===n||!!Object(k.C)(i)&&e.schema.isPossibleType(i,n)}function Y(e,t,n,r,i){var o=r[0].name.value,a=fe(e.schema,t,o)
if(a){var s=a.resolve||e.fieldResolver,c=J(e,a,r,t,i),l=X(e,a,r,s,n,c)
return $(e,a.type,r,c,i,l)}}function J(e,t,n,r,i){return{fieldName:t.name,fieldNodes:n,returnType:t.type,parentType:r,path:i,schema:e.schema,fragments:e.fragments,rootValue:e.rootValue,operation:e.operation,variableValues:e.variableValues}}function X(e,t,n,r,i,a){try{var s=r(i,P(t,n[0],e.variableValues),e.contextValue,a)
return o(s)?s.then(void 0,Z):s}catch(e){return Z(e)}}function Z(e){return e instanceof Error?e:new Error("Unexpected error value: "+Object(u.a)(e))}function $(e,t,n,r,i,a){try{var s
return s=o(a)?a.then((function(o){return te(e,t,n,r,i,o)})):te(e,t,n,r,i,a),o(s)?s.then(void 0,(function(r){return ee(r,n,i,t,e)})):s}catch(r){return ee(r,n,i,t,e)}}function ee(e,t,n,r,i){var o=b(Z(e),t,v(n))
if(Object(k.L)(r))throw o
return i.errors.push(o),null}function te(e,t,n,r,i,a){if(a instanceof Error)throw a
if(Object(k.L)(t)){var s=te(e,t.ofType,n,r,i,a)
if(null===s)throw new Error("Cannot return null for non-nullable field ".concat(r.parentType.name,".").concat(r.fieldName,"."))
return s}return Object(h.a)(a)?null:Object(k.J)(t)?function(e,t,n,r,i,a){if(!Object(l.e)(a))throw new y.a("Expected Iterable, but did not find one for field ".concat(r.parentType.name,".").concat(r.fieldName,"."))
var s=t.ofType,c=!1,u=[]
return Object(l.b)(a,(function(t,a){var l=g(i,a),f=$(e,s,n,r,l,t)
!c&&o(f)&&(c=!0),u.push(f)})),c?Promise.all(u):u}(e,t,n,r,i,a):Object(k.I)(t)?function(e,t){var n=e.serialize(t)
if(Object(d.a)(n))throw new Error('Expected a value of type "'.concat(Object(u.a)(e),'" but ')+"received: ".concat(Object(u.a)(t)))
return n}(t,a):Object(k.C)(t)?function(e,t,n,r,i,a){var s=t.resolveType||e.typeResolver,c=e.contextValue,l=s(a,c,r,t)
if(o(l))return l.then((function(o){return re(e,ne(o,e,t,n,r,a),n,r,i,a)}))
return re(e,ne(l,e,t,n,r,a),n,r,i,a)}(e,t,n,r,i,a):Object(k.N)(t)?re(e,t,n,r,i,a):void Object(f.a)(!1,"Cannot complete value of unexpected output type: "+Object(u.a)(t))}function ne(e,t,n,r,i,o){var a="string"==typeof e?t.schema.getType(e):e
if(!Object(k.N)(a))throw new y.a("Abstract type ".concat(n.name," must resolve to an Object type at runtime for field ").concat(i.parentType.name,".").concat(i.fieldName," with ")+"value ".concat(Object(u.a)(o),', received "').concat(Object(u.a)(a),'". ')+"Either the ".concat(n.name,' type should provide a "resolveType" function or each possible type should provide an "isTypeOf" function.'),r)
if(!t.schema.isPossibleType(n,a))throw new y.a('Runtime Object type "'.concat(a.name,'" is not a possible type for "').concat(n.name,'".'),r)
return a}function re(e,t,n,r,i,a){if(t.isTypeOf){var s=t.isTypeOf(a,e.contextValue,r)
if(o(s))return s.then((function(r){if(!r)throw ie(t,a,n)
return oe(e,t,n,i,a)}))
if(!s)throw ie(t,a,n)}return oe(e,t,n,i,a)}function ie(e,t,n){return new y.a('Expected value of type "'.concat(e.name,'" but got: ').concat(Object(u.a)(t),"."),n)}function oe(e,t,n,r,i){return W(e,t,i,r,ce(e,t,n))}var ae,se,ce=(ae=function(e,t,n){for(var r=Object.create(null),i=Object.create(null),o=0;o<n.length;o++){var a=n[o]
a.selectionSet&&(r=G(e,t,a.selectionSet,r,i))}return r},function(e,t,n){se||(se=new WeakMap)
var r,i=se.get(e)
if(i){if(r=i.get(t)){var o=r.get(n)
if(void 0!==o)return o}}else i=new WeakMap,se.set(e,i)
r||(r=new WeakMap,i.set(t,r))
var a=ae(e,t,n)
return r.set(n,a),a})
var le=function(e,t,n,r){if(Object(m.a)(e)&&"string"==typeof e.__typename)return e.__typename
for(var i=n.schema.getPossibleTypes(r),a=[],s=0;s<i.length;s++){var c=i[s]
if(c.isTypeOf){var l=c.isTypeOf(e,t,n)
if(o(l))a[s]=l
else if(l)return c}}return a.length?Promise.all(a).then((function(e){for(var t=0;t<e.length;t++)if(e[t])return i[t]})):void 0},ue=function(e,t,n,r){if(Object(m.a)(e)||"function"==typeof e){var i=e[r.fieldName]
return"function"==typeof i?e[r.fieldName](t,n,r):i}}
function fe(e,t,n){return n===w.SchemaMetaFieldDef.name&&e.getQueryType()===t?w.SchemaMetaFieldDef:n===w.TypeMetaFieldDef.name&&e.getQueryType()===t?w.TypeMetaFieldDef:n===w.TypeNameMetaFieldDef.name?w.TypeNameMetaFieldDef:t.getFields()[n]}function pe(e,t,n,r,i,o,a,s){var c=arguments
return new Promise((function(l){return l(1===c.length?he(e):he({schema:e,source:t,rootValue:n,contextValue:r,variableValues:i,operationName:o,fieldResolver:a,typeResolver:s}))}))}function de(e,t,n,r,i,a,s,c){var l=1===arguments.length?he(e):he({schema:e,source:t,rootValue:n,contextValue:r,variableValues:i,operationName:a,fieldResolver:s,typeResolver:c})
if(o(l))throw new Error("GraphQL execution failed to complete synchronously.")
return l}function he(e){var t,n=e.schema,r=e.source,i=e.rootValue,o=e.contextValue,l=e.variableValues,u=e.operationName,f=e.fieldResolver,p=e.typeResolver,d=Object(c.b)(n)
if(d.length>0)return{errors:d}
try{t=Object(a.parse)(r)}catch(e){return{errors:[e]}}var h=Object(s.c)(n,t)
return h.length>0?{errors:h}:B({schema:n,document:t,rootValue:i,contextValue:o,variableValues:l,operationName:u,fieldResolver:f,typeResolver:p})}var me=n("51nL"),ge=n("19Hc"),ve=n("neE4"),ye=n("y4cC"),be=n("zsKT"),Oe=n("CbW8"),we=n("JvOi"),xe=n("L2ys"),ke=n("F8X2"),Ee=n("Xizt")
function Ce(e,t,n){var r,i,o,a,s,c,u=Object(l.c)(e)
function f(e){return e.done?e:Te(e.value,t).then(_e,i)}if("function"==typeof u.return&&(r=u.return,i=function(e){var t=function(){return Promise.reject(e)}
return r.call(u).then(t,t)}),n){var p=n
o=function(e){return Te(e,p).then(_e,i)}}return a={next:function(){return u.next().then(f,o)},return:function(){return r?r.call(u).then(f,o):Promise.resolve({value:void 0,done:!0})},throw:function(e){return"function"==typeof u.throw?u.throw(e).then(f,o):Promise.reject(e).catch(i)}},s=l.a,c=function(){return this},s in a?Object.defineProperty(a,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[s]=c,a}function Te(e,t){return new Promise((function(n){return n(t(e))}))}function _e(e){return{value:e,done:!1}}function Se(e,t,n,r,i,o,a,s){return 1===arguments.length?Ae(e):Ae({schema:e,document:t,rootValue:n,contextValue:r,variableValues:i,operationName:o,fieldResolver:a,subscribeFieldResolver:s})}function Ne(e){if(e instanceof y.a)return{errors:[e]}
throw e}function Ae(e){var t=e.schema,n=e.document,r=e.rootValue,i=e.contextValue,o=e.variableValues,a=e.operationName,s=e.fieldResolver,c=e.subscribeFieldResolver,u=je(t,n,r,i,o,a,c),f=function(e){return B(t,n,e,i,o,a,s)}
return u.then((function(e){return Object(l.d)(e)?Ce(e,f,Ne):e}))}function je(e,t,n,r,i,o,a){U(e,t,i)
try{var s=H(e,t,n,r,i,o,a)
if(Array.isArray(s))return Promise.resolve({errors:s})
var c=C(e,s.operation),f=G(s,c,s.operation.selectionSet,Object.create(null),Object.create(null)),p=Object.keys(f)[0],d=f[p],h=d[0].name.value,m=fe(e,c,h)
if(!m)throw new y.a('The subscription field "'.concat(h,'" is not defined.'),d)
var O=m.subscribe||s.fieldResolver,w=g(void 0,p),x=J(s,m,d,c,w),k=X(s,m,d,O,n,x)
return Promise.resolve(k).then((function(e){if(e instanceof Error)return{errors:[b(e,d,v(w))]}
if(Object(l.d)(e))return e
throw new Error("Subscription field must return Async Iterable. Received: "+Object(u.a)(e))}))}catch(e){return e instanceof y.a?Promise.resolve({errors:[e]}):Promise.reject(e)}}var De=n("jOXf"),Le=n("FQ53"),Ie=n("ZfCc"),Fe=n("sdW/"),Me=n("2Rkc"),Re=n("y8IY"),Pe=n("VlWk"),Ve=n("E++1"),qe=n("10sW"),Be=n("g4S7"),ze=n("AeAO"),Ue=n("PmNC"),He=n("ZBm+"),We=n("A67W"),Ge=n("r60r"),Ke=n("FduV"),Qe=n("Vuqn"),Ye=n("2/d+"),Je=n("gggk"),Xe=n("/C/i"),Ze=n("sA7U"),$e=n("lORA"),et=n("dwPZ"),tt=n("v96Q"),nt=n("U4FY"),rt=n("AW/X"),it=n("0xor"),ot=n("cfc+"),at=n("AF4T"),st=n("+zUi"),ct=n("pLY/"),lt=n("wpgB"),ut=n("iyJ7"),ft=n("herJ"),pt=n("OO9G"),dt=n("oycr")
function ht(e){e||Object(p.a)(0,"Received null or undefined error.")
var t=e.message||"An unknown error occurred.",n=e.locations,r=e.path,i=e.extensions
return i?{message:t,locations:n,path:r,extensions:i}:{message:t,locations:n,path:r}}var mt=n("PDj5")
function gt(e,t){for(var n=null,r=0,i=e.definitions;r<i.length;r++){var o=i[r]
if(o.kind===O.Kind.OPERATION_DEFINITION)if(t){if(o.name&&o.name.value===t)return o}else{if(n)return null
n=o}}return n}function vt(e,t){var n=B(e,Object(a.parse)(Object(mt.a)(t)))
return!o(n)&&!n.errors&&n.data||Object(f.a)(0),n.data}var yt=n("TirB"),bt=n("WXJZ"),Ot=n("BLR7")
function wt(e,t){var n
e&&e.kind===O.Kind.DOCUMENT||Object(p.a)(0,"Must provide valid Document AST"),t&&(t.assumeValid||t.assumeValidSDL)||Object(s.a)(e)
for(var r=[],i=[],o=0,a=e.definitions;o<a.length;o++){var c=a[o]
c.kind===O.Kind.SCHEMA_DEFINITION?n=c:Object(Ee.d)(c)?r.push(c):c.kind===O.Kind.DIRECTIVE_DEFINITION&&i.push(c)}var l=new kt(t,(function(e){var t=u[e]
if(void 0===t)throw new Error('Type "'.concat(e,'" not found in document.'))
return t})),u=Et(r,(function(e){return l.buildType(e)})),f=n?function(e){for(var t={},n=0,r=e.operationTypes;n<r.length;n++){var i=r[n]
t[i.operation]=i.type.name.value}return t}(n):{query:"Query",mutation:"Mutation",subscription:"Subscription"},d=i.map((function(e){return l.buildDirective(e)}))
return d.some((function(e){return"skip"===e.name}))||d.push(x.e),d.some((function(e){return"include"===e.name}))||d.push(x.d),d.some((function(e){return"deprecated"===e.name}))||d.push(x.b),new me.a({query:f.query?u[f.query]:null,mutation:f.mutation?u[f.mutation]:null,subscription:f.subscription?u[f.subscription]:null,types:Object(j.a)(u),directives:d,astNode:n,assumeValid:t&&t.assumeValid,allowedLegacyNames:t&&t.allowedLegacyNames})}var xt=Object(_.a)(ge.g.concat(w.introspectionTypes),(function(e){return e.name})),kt=function(){function e(e,t){this._options=e,this._resolveType=t}var t=e.prototype
return t.getNamedType=function(e){var t=e.name.value
return xt[t]||this._resolveType(t)},t.getWrappedType=function(e){return e.kind===O.Kind.LIST_TYPE?new k.d(this.getWrappedType(e.type)):e.kind===O.Kind.NON_NULL_TYPE?new k.e(this.getWrappedType(e.type)):this.getNamedType(e)},t.buildDirective=function(e){var t=this,n=e.locations.map((function(e){return e.value}))
return new x.c({name:e.name.value,description:Tt(e,this._options),locations:n,isRepeatable:e.repeatable,args:Et(e.arguments||[],(function(e){return t.buildArg(e)})),astNode:e})},t.buildField=function(e){var t=this
return{type:this.getWrappedType(e.type),description:Tt(e,this._options),args:Et(e.arguments||[],(function(e){return t.buildArg(e)})),deprecationReason:Ct(e),astNode:e}},t.buildArg=function(e){var t=this.getWrappedType(e.type)
return{type:t,description:Tt(e,this._options),defaultValue:Object(A.a)(e.defaultValue,t),astNode:e}},t.buildInputField=function(e){var t=this.getWrappedType(e.type)
return{type:t,description:Tt(e,this._options),defaultValue:Object(A.a)(e.defaultValue,t),astNode:e}},t.buildEnumValue=function(e){return{description:Tt(e,this._options),deprecationReason:Ct(e),astNode:e}},t.buildType=function(e){var t=e.name.value
if(xt[t])return xt[t]
switch(e.kind){case O.Kind.OBJECT_TYPE_DEFINITION:return this._makeTypeDef(e)
case O.Kind.INTERFACE_TYPE_DEFINITION:return this._makeInterfaceDef(e)
case O.Kind.ENUM_TYPE_DEFINITION:return this._makeEnumDef(e)
case O.Kind.UNION_TYPE_DEFINITION:return this._makeUnionDef(e)
case O.Kind.SCALAR_TYPE_DEFINITION:return this._makeScalarDef(e)
case O.Kind.INPUT_OBJECT_TYPE_DEFINITION:return this._makeInputObjectDef(e)}Object(f.a)(!1,"Unexpected type definition node: "+Object(u.a)(e))},t._makeTypeDef=function(e){var t=this,n=e.interfaces,r=e.fields,i=n&&n.length>0?function(){return n.map((function(e){return t.getNamedType(e)}))}:[],o=r&&r.length>0?function(){return Et(r,(function(e){return t.buildField(e)}))}:Object.create(null)
return new k.f({name:e.name.value,description:Tt(e,this._options),interfaces:i,fields:o,astNode:e})},t._makeInterfaceDef=function(e){var t=this,n=e.fields,r=n&&n.length>0?function(){return Et(n,(function(e){return t.buildField(e)}))}:Object.create(null)
return new k.c({name:e.name.value,description:Tt(e,this._options),fields:r,astNode:e})},t._makeEnumDef=function(e){var t=this,n=e.values||[]
return new k.a({name:e.name.value,description:Tt(e,this._options),values:Et(n,(function(e){return t.buildEnumValue(e)})),astNode:e})},t._makeUnionDef=function(e){var t=this,n=e.types,r=n&&n.length>0?function(){return n.map((function(e){return t.getNamedType(e)}))}:[]
return new k.h({name:e.name.value,description:Tt(e,this._options),types:r,astNode:e})},t._makeScalarDef=function(e){return new k.g({name:e.name.value,description:Tt(e,this._options),astNode:e})},t._makeInputObjectDef=function(e){var t=this,n=e.fields
return new k.b({name:e.name.value,description:Tt(e,this._options),fields:n?function(){return Et(n,(function(e){return t.buildInputField(e)}))}:Object.create(null),astNode:e})},e}()
function Et(e,t){return Object(bt.a)(e,(function(e){return e.name.value}),t)}function Ct(e){var t=V(x.b,e)
return t&&t.reason}function Tt(e,t){if(e.description)return e.description.value
if(t&&t.commentDescriptions){var n=function(e){var t=e.loc
if(!t)return
var n=[],r=t.startToken.prev
for(;r&&r.kind===we.a.COMMENT&&r.next&&r.prev&&r.line+1===r.next.line&&r.line!==r.prev.line;){var i=String(r.value)
n.push(i),r=r.prev}return n.reverse().join("\n")}(e)
if(void 0!==n)return Object(Ot.a)("\n"+n)}}function _t(e,t){return wt(Object(a.parse)(e,t),t)}var St=n("PXbX"),Nt=n("Wzjs")
function At(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function jt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?At(n,!0).forEach((function(t){Dt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):At(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lt(e,t,n){Object(me.b)(e),t&&t.kind===O.Kind.DOCUMENT||Object(p.a)(0,"Must provide valid Document AST"),n&&(n.assumeValid||n.assumeValidSDL)||Object(s.b)(t,e)
for(var r,i=[],o=Object.create(null),a=[],c=[],l=0,d=t.definitions;l<d.length;l++){var h=d[l]
if(h.kind===O.Kind.SCHEMA_DEFINITION)r=h
else if(h.kind===O.Kind.SCHEMA_EXTENSION)c.push(h)
else if(Object(Ee.d)(h))i.push(h)
else if(Object(Ee.e)(h)){var m=h.name.value,g=o[m]
o[m]=g?g.concat([h]):[h]}else h.kind===O.Kind.DIRECTIVE_DEFINITION&&a.push(h)}if(0===Object.keys(o).length&&0===i.length&&0===a.length&&0===c.length&&!r)return e
for(var v=e.toConfig(),y=new kt(n,(function(e){var t=b[e]
if(void 0===t)throw new Error('Unknown type: "'.concat(e,'".'))
return t})),b=Object(bt.a)(i,(function(e){return e.name.value}),(function(e){return y.buildType(e)})),E=0,C=v.types;E<C.length;E++){var T=C[E]
b[T.name]=G(T)}var _={query:v.query&&v.query.name,mutation:v.mutation&&v.mutation.name,subscription:v.subscription&&v.subscription.name}
if(r)for(var S=0,N=r.operationTypes;S<N.length;S++){var A=N[S],D=A.operation,L=A.type
_[D]=L.name.value}for(var I=0;I<c.length;I++){var F=c[I]
if(F.operationTypes)for(var M=0,R=F.operationTypes;M<R.length;M++){var P=R[M],V=P.operation,q=P.type
_[V]=q.name.value}}var B,z=v.allowedLegacyNames.concat(n&&n.allowedLegacyNames||[])
return new me.a({query:W(_.query),mutation:W(_.mutation),subscription:W(_.subscription),types:Object(j.a)(b),directives:(B=e.getDirectives().map(K),B||Object(p.a)(0,"schema must have default directives"),B.concat(a.map((function(e){return y.buildDirective(e)})))),astNode:r||v.astNode,extensionASTNodes:v.extensionASTNodes.concat(c),allowedLegacyNames:z})
function U(e){return Object(k.J)(e)?new k.d(U(e.ofType)):Object(k.L)(e)?new k.e(U(e.ofType)):H(e)}function H(e){return b[e.name]}function W(e){return e?b[e]:null}function G(e){return Object(w.isIntrospectionType)(e)||Object(ge.f)(e)?e:Object(k.R)(e)?function(e){var t=e.toConfig(),n=o[t.name]||[]
return new k.g(jt({},t,{extensionASTNodes:t.extensionASTNodes.concat(n)}))}(e):Object(k.N)(e)?function(e){var t=e.toConfig(),n=o[t.name]||[],r=Object(St.a)(n,(function(e){return e.interfaces||[]})),i=Object(St.a)(n,(function(e){return e.fields||[]}))
return new k.f(jt({},t,{interfaces:function(){return[].concat(e.getInterfaces().map(H),r.map((function(e){return y.getNamedType(e)})))},fields:function(){return jt({},Object(Nt.a)(t.fields,Q),{},Object(bt.a)(i,(function(e){return e.name.value}),(function(e){return y.buildField(e)})))},extensionASTNodes:t.extensionASTNodes.concat(n)}))}(e):Object(k.H)(e)?function(e){var t=e.toConfig(),n=o[t.name]||[],r=Object(St.a)(n,(function(e){return e.fields||[]}))
return new k.c(jt({},t,{fields:function(){return jt({},Object(Nt.a)(t.fields,Q),{},Object(bt.a)(r,(function(e){return e.name.value}),(function(e){return y.buildField(e)})))},extensionASTNodes:t.extensionASTNodes.concat(n)}))}(e):Object(k.T)(e)?function(e){var t=e.toConfig(),n=o[t.name]||[],r=Object(St.a)(n,(function(e){return e.types||[]}))
return new k.h(jt({},t,{types:function(){return[].concat(e.getTypes().map(H),r.map((function(e){return y.getNamedType(e)})))},extensionASTNodes:t.extensionASTNodes.concat(n)}))}(e):Object(k.E)(e)?function(e){var t=e.toConfig(),n=o[e.name]||[],r=Object(St.a)(n,(function(e){return e.values||[]}))
return new k.a(jt({},t,{values:jt({},t.values,{},Object(bt.a)(r,(function(e){return e.name.value}),(function(e){return y.buildEnumValue(e)}))),extensionASTNodes:t.extensionASTNodes.concat(n)}))}(e):Object(k.F)(e)?function(e){var t=e.toConfig(),n=o[t.name]||[],r=Object(St.a)(n,(function(e){return e.fields||[]}))
return new k.b(jt({},t,{fields:function(){return jt({},Object(Nt.a)(t.fields,(function(e){return jt({},e,{type:U(e.type)})})),{},Object(bt.a)(r,(function(e){return e.name.value}),(function(e){return y.buildInputField(e)})))},extensionASTNodes:t.extensionASTNodes.concat(n)}))}(e):void Object(f.a)(!1,"Unexpected type: "+Object(u.a)(e))}function K(e){var t=e.toConfig()
return new x.c(jt({},t,{args:Object(Nt.a)(t.args,Y)}))}function Q(e){return jt({},e,{type:U(e.type),args:Object(Nt.a)(e.args,Y)})}function Y(e){return jt({},e,{type:U(e.type)})}}function It(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ft(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?It(n,!0).forEach((function(t){Mt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):It(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Mt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rt(e){var t=e.toConfig(),n=Object(bt.a)(Vt(t.types),(function(e){return e.name}),(function(e){if(Object(k.R)(e)||Object(w.isIntrospectionType)(e))return e
if(Object(k.N)(e)){var t=e.toConfig()
return new k.f(Ft({},t,{interfaces:function(){return c(t.interfaces)},fields:function(){return s(t.fields)}}))}if(Object(k.H)(e)){var n=e.toConfig()
return new k.c(Ft({},n,{fields:function(){return s(n.fields)}}))}if(Object(k.T)(e)){var i=e.toConfig()
return new k.h(Ft({},i,{types:function(){return c(i.types)}}))}if(Object(k.E)(e)){var o=e.toConfig()
return new k.a(Ft({},o,{values:Pt(o.values)}))}if(Object(k.F)(e)){var a=e.toConfig()
return new k.b(Ft({},a,{fields:function(){return Pt(a.fields,(function(e){return Ft({},e,{type:r(e.type)})}))}}))}Object(f.a)(!1,"Unexpected type: "+Object(u.a)(e))}))
return new me.a(Ft({},t,{types:Object(j.a)(n),directives:Vt(t.directives).map((function(e){var t=e.toConfig()
return new x.c(Ft({},t,{locations:qt(t.locations,(function(e){return e})),args:a(t.args)}))})),query:o(t.query),mutation:o(t.mutation),subscription:o(t.subscription)}))
function r(e){return Object(k.J)(e)?new k.d(r(e.ofType)):Object(k.L)(e)?new k.e(r(e.ofType)):i(e)}function i(e){return n[e.name]}function o(e){return e&&i(e)}function a(e){return Pt(e,(function(e){return Ft({},e,{type:r(e.type)})}))}function s(e){return Pt(e,(function(e){return Ft({},e,{type:r(e.type),args:a(e.args)})}))}function c(e){return Vt(e).map(i)}}function Pt(e,t){for(var n=Object.create(null),r=qt(Object.keys(e),(function(e){return e})),i=0;i<r.length;i++){var o=r[i],a=e[o]
n[o]=t?t(a):a}return n}function Vt(e){return qt(e,(function(e){return e.name}))}function qt(e,t){return e.slice().sort((function(e,n){var r=t(e),i=t(n)
return r.localeCompare(i)}))}var Bt=n("3HNt")
function zt(e,t){return Wt(e,(function(e){return!Object(x.h)(e)}),Ht,t)}function Ut(e,t){return Wt(e,x.h,w.isIntrospectionType,t)}function Ht(e){return!Object(ge.f)(e)&&!Object(w.isIntrospectionType)(e)}function Wt(e,t,n,r){var i=e.getDirectives().filter(t),o=e.getTypeMap(),a=Object(j.a)(o).sort((function(e,t){return e.name.localeCompare(t.name)})).filter(n)
return[Gt(e)].concat(i.map((function(e){return function(e,t){return $t(t,e)+"directive @"+e.name+Jt(t,e.args)+(e.isRepeatable?" repeatable":"")+" on "+e.locations.join(" | ")}(e,r)})),a.map((function(e){return Kt(e,r)}))).filter(Boolean).join("\n\n")+"\n"}function Gt(e){if(!function(e){var t=e.getQueryType()
if(t&&"Query"!==t.name)return!1
var n=e.getMutationType()
if(n&&"Mutation"!==n.name)return!1
var r=e.getSubscriptionType()
if(r&&"Subscription"!==r.name)return!1
return!0}(e)){var t=[],n=e.getQueryType()
n&&t.push("  query: ".concat(n.name))
var r=e.getMutationType()
r&&t.push("  mutation: ".concat(r.name))
var i=e.getSubscriptionType()
return i&&t.push("  subscription: ".concat(i.name)),"schema {\n".concat(t.join("\n"),"\n}")}}function Kt(e,t){return Object(k.R)(e)?function(e,t){return $t(t,e)+"scalar ".concat(e.name)}(e,t):Object(k.N)(e)?function(e,t){var n=e.getInterfaces(),r=n.length?" implements "+n.map((function(e){return e.name})).join(" & "):""
return $t(t,e)+"type ".concat(e.name).concat(r)+Qt(t,e)}(e,t):Object(k.H)(e)?function(e,t){return $t(t,e)+"interface ".concat(e.name)+Qt(t,e)}(e,t):Object(k.T)(e)?function(e,t){var n=e.getTypes(),r=n.length?" = "+n.join(" | "):""
return $t(t,e)+"union "+e.name+r}(e,t):Object(k.E)(e)?function(e,t){var n=e.getValues().map((function(e,n){return $t(t,e,"  ",!n)+"  "+e.name+Zt(e)}))
return $t(t,e)+"enum ".concat(e.name)+Yt(n)}(e,t):Object(k.F)(e)?function(e,t){var n=Object(j.a)(e.getFields()).map((function(e,n){return $t(t,e,"  ",!n)+"  "+Xt(e)}))
return $t(t,e)+"input ".concat(e.name)+Yt(n)}(e,t):void Object(f.a)(!1,"Unexpected type: "+Object(u.a)(e))}function Qt(e,t){return Yt(Object(j.a)(t.getFields()).map((function(t,n){return $t(e,t,"  ",!n)+"  "+t.name+Jt(e,t.args,"  ")+": "+String(t.type)+Zt(t)})))}function Yt(e){return 0!==e.length?" {\n"+e.join("\n")+"\n}":""}function Jt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
return 0===t.length?"":t.every((function(e){return!e.description}))?"("+t.map(Xt).join(", ")+")":"(\n"+t.map((function(t,r){return $t(e,t,"  "+n,!r)+"  "+n+Xt(t)})).join("\n")+"\n"+n+")"}function Xt(e){var t=Object(Bt.a)(e.defaultValue,e.type),n=e.name+": "+String(e.type)
return t&&(n+=" = ".concat(Object(N.a)(t))),n}function Zt(e){if(!e.isDeprecated)return""
var t=e.deprecationReason,n=Object(Bt.a)(t,ge.e)
return n&&""!==t&&t!==x.a?" @deprecated(reason: "+Object(N.a)(n)+")":" @deprecated"}function $t(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3]
if(!t.description)return""
var i=tn(t.description,120-n.length)
if(e&&e.commentDescriptions)return en(i,n,r)
var o=i.join("\n"),a=o.length>70,s=Object(Ot.c)(o,"",a),c=n&&!r?"\n"+n:n
return c+s.replace(/\n/g,"\n"+n)+"\n"}function en(e,t,n){for(var r=t&&!n?"\n":"",i=0;i<e.length;i++){var o=e[i]
r+=""===o?t+"#\n":t+"# "+o+"\n"}return r}function tn(e,t){var n=e.split("\n")
return Object(St.a)(n,(function(e){return e.length<t+5?e:function(e,t){var n=e.split(new RegExp("((?: |^).{15,".concat(t-40,"}(?= |$))")))
if(n.length<4)return[e]
for(var r=[n[0]+n[1]+n[2]],i=3;i<n.length;i+=2)r.push(n[i].slice(1)+n[i+1])
return r}(e,t)}))}var nn=n("ADFt"),rn=n("4RMZ")
function on(e,t,n,r){var i=[],o=I(e,t,(function(e,t,o){var a="Invalid value "+Object(u.a)(t),s=[].concat(v(r),e)
s.length>0&&(a+=' at "value'.concat(S(s),'"')),i.push(new y.a(a+": "+o.message,n,void 0,void 0,void 0,o.originalError))}))
return i.length>0?{errors:i,value:void 0}:{errors:void 0,value:o}}function an(e,t){var n=on(e,t).errors
return n?n.map((function(e){return e.message})):[]}function sn(e,t){var n=new me.a({}),r={kind:O.Kind.DOCUMENT,definitions:[]},i=new rn.a(n,void 0,e),o=new De.b(n,r,i),a=Object(rt.a)(o)
return Object(xe.c)(t,Object(xe.e)(i,a)),o.getErrors()}function cn(e){return{kind:"Document",definitions:Object(St.a)(e,(function(e){return e.definitions}))}}function ln(e){var t,n=[],r=Object.create(null),i=new Map,o=Object.create(null),a=0
Object(xe.c)(e,{OperationDefinition:function(e){t=un(e),n.push(e),i.set(e,a++)},FragmentDefinition:function(e){t=e.name.value,r[t]=e,i.set(e,a++)},FragmentSpread:function(e){var n=e.name.value;(o[t]||(o[t]=Object.create(null)))[n]=!0}})
for(var s=Object.create(null),c=0;c<n.length;c++){var l=n[c],u=un(l),f=Object.create(null)
fn(f,o,u)
for(var p=[l],d=0,h=Object.keys(f);d<h.length;d++){var m=h[d]
p.push(r[m])}p.sort((function(e,t){return(i.get(e)||0)-(i.get(t)||0)})),s[u]={kind:"Document",definitions:p}}return s}function un(e){return e.name?e.name.value:""}function fn(e,t,n){var r=t[n]
if(r)for(var i=0,o=Object.keys(r);i<o.length;i++){var a=o[i]
e[a]||(e[a]=!0,fn(e,t,a))}}function pn(e){var t="string"==typeof e?new ve.a(e):e
if(!(t instanceof ve.a))throw new TypeError("Must provide string or Source. Received: ".concat(Object(u.a)(t)))
for(var n=t.body,r=Object(Oe.a)(t),i="",o=!1;r.advance().kind!==we.a.EOF;){var a=r.token,s=a.kind,c=!Object(Oe.b)(a)
o&&(c||a.kind===we.a.SPREAD)&&(i+=" ")
var l=n.slice(a.start,a.end)
s===we.a.BLOCK_STRING?i+=dn(l):i+=l,o=c}return i}function dn(e){var t=e.slice(3,-3),n=Object(Ot.a)(t),r=n.split(/\r\n|[\n\r]/g)
Object(Ot.b)(r)>0&&(n="\n"+n)
var i=n[n.length-1]
return('"'===i&&'\\"""'!==n.slice(-4)||"\\"===i)&&(n+="\n"),'"""'+n+'"""'}var hn=n("sJV+"),mn=n("5PMP")
function gn(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function vn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var yn=Object.freeze({TYPE_REMOVED:"TYPE_REMOVED",TYPE_CHANGED_KIND:"TYPE_CHANGED_KIND",TYPE_REMOVED_FROM_UNION:"TYPE_REMOVED_FROM_UNION",VALUE_REMOVED_FROM_ENUM:"VALUE_REMOVED_FROM_ENUM",REQUIRED_INPUT_FIELD_ADDED:"REQUIRED_INPUT_FIELD_ADDED",INTERFACE_REMOVED_FROM_OBJECT:"INTERFACE_REMOVED_FROM_OBJECT",FIELD_REMOVED:"FIELD_REMOVED",FIELD_CHANGED_KIND:"FIELD_CHANGED_KIND",REQUIRED_ARG_ADDED:"REQUIRED_ARG_ADDED",ARG_REMOVED:"ARG_REMOVED",ARG_CHANGED_KIND:"ARG_CHANGED_KIND",DIRECTIVE_REMOVED:"DIRECTIVE_REMOVED",DIRECTIVE_ARG_REMOVED:"DIRECTIVE_ARG_REMOVED",REQUIRED_DIRECTIVE_ARG_ADDED:"REQUIRED_DIRECTIVE_ARG_ADDED",DIRECTIVE_LOCATION_REMOVED:"DIRECTIVE_LOCATION_REMOVED"}),bn=Object.freeze({VALUE_ADDED_TO_ENUM:"VALUE_ADDED_TO_ENUM",TYPE_ADDED_TO_UNION:"TYPE_ADDED_TO_UNION",OPTIONAL_INPUT_FIELD_ADDED:"OPTIONAL_INPUT_FIELD_ADDED",OPTIONAL_ARG_ADDED:"OPTIONAL_ARG_ADDED",INTERFACE_ADDED_TO_OBJECT:"INTERFACE_ADDED_TO_OBJECT",ARG_DEFAULT_VALUE_CHANGE:"ARG_DEFAULT_VALUE_CHANGE"})
function On(e,t){return xn(e,t).filter((function(e){return e.type in yn}))}function wn(e,t){return xn(e,t).filter((function(e){return e.type in bn}))}function xn(e,t){return[].concat(function(e,t){for(var n=[],r=Ln(Object(j.a)(e.getTypeMap()),Object(j.a)(t.getTypeMap())),i=0,o=r.removed;i<o.length;i++){var a=o[i]
n.push({type:yn.TYPE_REMOVED,description:"".concat(a.name," was removed.")})}for(var s=0,c=r.persisted;s<c.length;s++){var l=c[s],u=l[0],f=l[1]
Object(k.E)(u)&&Object(k.E)(f)?n.push.apply(n,Cn(u,f)):Object(k.T)(u)&&Object(k.T)(f)?n.push.apply(n,En(u,f)):Object(k.F)(u)&&Object(k.F)(f)?n.push.apply(n,kn(u,f)):Object(k.N)(u)&&Object(k.N)(f)?n.push.apply(n,Tn(u,f)):Object(k.H)(u)&&Object(k.H)(f)?n.push.apply(n,_n(u,f)):u.constructor!==f.constructor&&n.push({type:yn.TYPE_CHANGED_KIND,description:"".concat(u.name," changed from ")+"".concat(jn(u)," to ").concat(jn(f),".")})}return n}(e,t),function(e,t){for(var n=[],r=Ln(e.getDirectives(),t.getDirectives()),i=0,o=r.removed;i<o.length;i++){var a=o[i]
n.push({type:yn.DIRECTIVE_REMOVED,description:"".concat(a.name," was removed.")})}for(var s=0,c=r.persisted;s<c.length;s++){for(var l=c[s],u=l[0],f=l[1],p=Ln(u.args,f.args),d=0,h=p.added;d<h.length;d++){var m=h[d]
Object(k.P)(m)&&n.push({type:yn.REQUIRED_DIRECTIVE_ARG_ADDED,description:"A required arg ".concat(m.name," on directive ").concat(u.name," was added.")})}for(var g=0,v=p.removed;g<v.length;g++){var y=v[g]
n.push({type:yn.DIRECTIVE_ARG_REMOVED,description:"".concat(y.name," was removed from ").concat(u.name,".")})}for(var b=0,O=u.locations;b<O.length;b++){var w=O[b];-1===f.locations.indexOf(w)&&n.push({type:yn.DIRECTIVE_LOCATION_REMOVED,description:"".concat(w," was removed from ").concat(u.name,".")})}}return n}(e,t))}function kn(e,t){for(var n=[],r=Ln(Object(j.a)(e.getFields()),Object(j.a)(t.getFields())),i=0,o=r.added;i<o.length;i++){var a=o[i]
Object(k.Q)(a)?n.push({type:yn.REQUIRED_INPUT_FIELD_ADDED,description:"A required field ".concat(a.name," on input type ").concat(e.name," was added.")}):n.push({type:bn.OPTIONAL_INPUT_FIELD_ADDED,description:"An optional field ".concat(a.name," on input type ").concat(e.name," was added.")})}for(var s=0,c=r.removed;s<c.length;s++){var l=c[s]
n.push({type:yn.FIELD_REMOVED,description:"".concat(e.name,".").concat(l.name," was removed.")})}for(var u=0,f=r.persisted;u<f.length;u++){var p=f[u],d=p[0],h=p[1]
An(d.type,h.type)||n.push({type:yn.FIELD_CHANGED_KIND,description:"".concat(e.name,".").concat(d.name," changed type from ")+"".concat(String(d.type)," to ").concat(String(h.type),".")})}return n}function En(e,t){for(var n=[],r=Ln(e.getTypes(),t.getTypes()),i=0,o=r.added;i<o.length;i++){var a=o[i]
n.push({type:bn.TYPE_ADDED_TO_UNION,description:"".concat(a.name," was added to union type ").concat(e.name,".")})}for(var s=0,c=r.removed;s<c.length;s++){var l=c[s]
n.push({type:yn.TYPE_REMOVED_FROM_UNION,description:"".concat(l.name," was removed from union type ").concat(e.name,".")})}return n}function Cn(e,t){for(var n=[],r=Ln(e.getValues(),t.getValues()),i=0,o=r.added;i<o.length;i++){var a=o[i]
n.push({type:bn.VALUE_ADDED_TO_ENUM,description:"".concat(a.name," was added to enum type ").concat(e.name,".")})}for(var s=0,c=r.removed;s<c.length;s++){var l=c[s]
n.push({type:yn.VALUE_REMOVED_FROM_ENUM,description:"".concat(l.name," was removed from enum type ").concat(e.name,".")})}return n}function Tn(e,t){for(var n=_n(e,t),r=Ln(e.getInterfaces(),t.getInterfaces()),i=0,o=r.added;i<o.length;i++){var a=o[i]
n.push({type:bn.INTERFACE_ADDED_TO_OBJECT,description:"".concat(a.name," added to interfaces implemented by ").concat(e.name,".")})}for(var s=0,c=r.removed;s<c.length;s++){var l=c[s]
n.push({type:yn.INTERFACE_REMOVED_FROM_OBJECT,description:"".concat(e.name," no longer implements interface ").concat(l.name,".")})}return n}function _n(e,t){for(var n=[],r=Ln(Object(j.a)(e.getFields()),Object(j.a)(t.getFields())),i=0,o=r.removed;i<o.length;i++){var a=o[i]
n.push({type:yn.FIELD_REMOVED,description:"".concat(e.name,".").concat(a.name," was removed.")})}for(var s=0,c=r.persisted;s<c.length;s++){var l=c[s],u=l[0],f=l[1]
n.push.apply(n,Sn(e,u,f)),Nn(u.type,f.type)||n.push({type:yn.FIELD_CHANGED_KIND,description:"".concat(e.name,".").concat(u.name," changed type from ")+"".concat(String(u.type)," to ").concat(String(f.type),".")})}return n}function Sn(e,t,n){for(var r=[],i=Ln(t.args,n.args),o=0,a=i.removed;o<a.length;o++){var s=a[o]
r.push({type:yn.ARG_REMOVED,description:"".concat(e.name,".").concat(t.name," arg ").concat(s.name," was removed.")})}for(var c=0,l=i.persisted;c<l.length;c++){var u=l[c],f=u[0],p=u[1]
if(An(f.type,p.type)){if(void 0!==f.defaultValue)if(void 0===p.defaultValue)r.push({type:bn.ARG_DEFAULT_VALUE_CHANGE,description:"".concat(e.name,".").concat(t.name," arg ").concat(f.name," defaultValue was removed.")})
else{var d=Dn(f.defaultValue,f.type),h=Dn(p.defaultValue,p.type)
d!==h&&r.push({type:bn.ARG_DEFAULT_VALUE_CHANGE,description:"".concat(e.name,".").concat(t.name," arg ").concat(f.name," has changed defaultValue from ").concat(d," to ").concat(h,".")})}}else r.push({type:yn.ARG_CHANGED_KIND,description:"".concat(e.name,".").concat(t.name," arg ").concat(f.name," has changed type from ")+"".concat(String(f.type)," to ").concat(String(p.type),".")})}for(var m=0,g=i.added;m<g.length;m++){var v=g[m]
Object(k.P)(v)?r.push({type:yn.REQUIRED_ARG_ADDED,description:"A required arg ".concat(v.name," on ").concat(e.name,".").concat(t.name," was added.")}):r.push({type:bn.OPTIONAL_ARG_ADDED,description:"An optional arg ".concat(v.name," on ").concat(e.name,".").concat(t.name," was added.")})}return r}function Nn(e,t){return Object(k.J)(e)?Object(k.J)(t)&&Nn(e.ofType,t.ofType)||Object(k.L)(t)&&Nn(e,t.ofType):Object(k.L)(e)?Object(k.L)(t)&&Nn(e.ofType,t.ofType):Object(k.K)(t)&&e.name===t.name||Object(k.L)(t)&&Nn(e,t.ofType)}function An(e,t){return Object(k.J)(e)?Object(k.J)(t)&&An(e.ofType,t.ofType):Object(k.L)(e)?Object(k.L)(t)&&An(e.ofType,t.ofType)||!Object(k.L)(t)&&An(e.ofType,t):Object(k.K)(t)&&e.name===t.name}function jn(e){return Object(k.R)(e)?"a Scalar type":Object(k.N)(e)?"an Object type":Object(k.H)(e)?"an Interface type":Object(k.T)(e)?"a Union type":Object(k.E)(e)?"an Enum type":Object(k.F)(e)?"an Input type":void Object(f.a)(!1,"Unexpected type: "+Object(u.a)(e))}function Dn(e,t){var n=Object(Bt.a)(e,t)
null!=n||Object(f.a)(0)
var r=Object(xe.c)(n,{ObjectValue:function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?gn(n,!0).forEach((function(t){vn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gn(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{fields:[].concat(e.fields).sort((function(e,t){return e.name.value.localeCompare(t.name.value)}))})}})
return Object(N.a)(r)}function Ln(e,t){for(var n=[],r=[],i=[],o=Object(_.a)(e,(function(e){return e.name})),a=Object(_.a)(t,(function(e){return e.name})),s=0;s<e.length;s++){var c=e[s],l=a[c.name]
void 0===l?r.push(c):i.push([c,l])}for(var u=0;u<t.length;u++){var f=t[u]
void 0===o[f.name]&&n.push(f)}return{added:n,persisted:i,removed:r}}var In=n("hliF")},Tzw1:function(e,t,n){"use strict"
n.r(t)
var r=n("An8g"),i=n("q1tI"),o=n.n(i),a=n("i8i4"),s=n.n(a),c=n("vh1z"),l=n.n(c),u=n("ZJBC"),f=n.n(u),p=n("PDj5"),d=n("TirB"),h=n("x1Tw")
n("5itS")
function m(e,t){return!1}function g(e,t,n){return"ID"===n.name?{kind:"StringValue",value:"1"}:f.a.defaultValue(n)}var v=n("CY+F"),y=n.n(v)
function b(e){return h.a.post("/api/graphql",JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then(({data:e})=>e)}class O extends o.a.Component{constructor(e){super(e),this._handleEditQuery=e=>{this.setState({query:e})},this._handleToggleExplorer=()=>{this.setState((e,t)=>{const n=!e.explorerIsOpen
return this._storage.set("explorerPaneOpen",n.toString()),{explorerIsOpen:n}})},this._graphql=null,this._storage=new y.a
const t="false"!==this._storage.get("explorerPaneOpen")
this.state={schema:null,explorerIsOpen:t}}componentDidMount(){return b({query:Object(p.a)()}).then(e=>{this.setState({schema:Object(d.a)(e.data)})})}render(){const e=this.state,t=e.query,n=e.schema,i=e.explorerIsOpen
return Object(r.a)("div",{className:"graphiql-container"},void 0,Object(r.a)(f.a,{schema:n,query:t,onEdit:this._handleEditQuery,explorerIsOpen:i,onToggleExplorer:this._handleToggleExplorer,getDefaultScalarArgValue:g,makeDefaultArg:m}),o.a.createElement(l.a,{ref:e=>{this._graphiql=e},fetcher:b,schema:n,query:t,onEditQuery:this._handleEditQuery},Object(r.a)(l.a.Toolbar,{},void 0,Object(r.a)(l.a.Button,{onClick:()=>this._graphiql.handlePrettifyQuery(),label:"Prettify",title:"Prettify Query (Shift-Ctrl-P)"}),Object(r.a)(l.a.Button,{onClick:()=>this._graphiql.handleToggleHistory(),label:"History",title:"Show History"}),Object(r.a)(l.a.Button,{onClick:this._handleToggleExplorer,label:"Explorer",title:"Toggle Explorer"}))))}}var w=n("3lLS"),x=n.n(w),k=Object(r.a)(O,{})
x()(()=>{s.a.render(k,document.getElementById("graphiql"))})},U4FY:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=Object.create(null)
return{OperationDefinition:function(){t=Object.create(null)},VariableDefinition:function(n){var i=n.variable.name.value
t[i]?e.reportError(new r.a(function(e){return'There can be only one variable named "'.concat(e,'".')}(i),[t[i],n.variable.name])):t[i]=n.variable.name}}}},VWUu:function(e,t,n){"use strict"
n.r(t),n.d(t,"Range",(function(){return r})),n.d(t,"Position",(function(){return i})),n.d(t,"offsetToPosition",(function(){return o})),n.d(t,"locToRange",(function(){return a}))
class r{constructor(e,t){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=t}setStart(e,t){this.start=new i(e,t)}setEnd(e,t){this.end=new i(e,t)}}class i{constructor(e,t){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=t}setLine(e){this.line=e}setCharacter(e){this.character=e}}function o(e,t){const n=e.slice(0,t),r=n.split("\n").length-1,o=n.lastIndexOf("\n")
return new i(r,t-o-1)}function a(e,t){const n=o(e,t.start),i=o(e,t.end)
return new r(n,i)}},VlWk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("dWS+"),i=n("/jXB"),o=n("F8X2"),a=n("4suF")
function s(e){for(var t=Object.create(null),n=e.getSchema(),s=n?n.getDirectives():a.i,c=0;c<s.length;c++){var l=s[c]
t[l.name]=l.locations}for(var u=e.getDocument().definitions,f=0;f<u.length;f++){var p=u[f]
p.kind===i.Kind.DIRECTIVE_DEFINITION&&(t[p.name.value]=p.locations.map((function(e){return e.value})))}return{Directive:function(n,a,s,c,l){var u=n.name.value,f=t[u]
if(f){var p=function(e){var t=e[e.length-1]
if(!Array.isArray(t))switch(t.kind){case i.Kind.OPERATION_DEFINITION:switch(t.operation){case"query":return o.a.QUERY
case"mutation":return o.a.MUTATION
case"subscription":return o.a.SUBSCRIPTION}break
case i.Kind.FIELD:return o.a.FIELD
case i.Kind.FRAGMENT_SPREAD:return o.a.FRAGMENT_SPREAD
case i.Kind.INLINE_FRAGMENT:return o.a.INLINE_FRAGMENT
case i.Kind.FRAGMENT_DEFINITION:return o.a.FRAGMENT_DEFINITION
case i.Kind.VARIABLE_DEFINITION:return o.a.VARIABLE_DEFINITION
case i.Kind.SCHEMA_DEFINITION:case i.Kind.SCHEMA_EXTENSION:return o.a.SCHEMA
case i.Kind.SCALAR_TYPE_DEFINITION:case i.Kind.SCALAR_TYPE_EXTENSION:return o.a.SCALAR
case i.Kind.OBJECT_TYPE_DEFINITION:case i.Kind.OBJECT_TYPE_EXTENSION:return o.a.OBJECT
case i.Kind.FIELD_DEFINITION:return o.a.FIELD_DEFINITION
case i.Kind.INTERFACE_TYPE_DEFINITION:case i.Kind.INTERFACE_TYPE_EXTENSION:return o.a.INTERFACE
case i.Kind.UNION_TYPE_DEFINITION:case i.Kind.UNION_TYPE_EXTENSION:return o.a.UNION
case i.Kind.ENUM_TYPE_DEFINITION:case i.Kind.ENUM_TYPE_EXTENSION:return o.a.ENUM
case i.Kind.ENUM_VALUE_DEFINITION:return o.a.ENUM_VALUE
case i.Kind.INPUT_OBJECT_TYPE_DEFINITION:case i.Kind.INPUT_OBJECT_TYPE_EXTENSION:return o.a.INPUT_OBJECT
case i.Kind.INPUT_VALUE_DEFINITION:return e[e.length-3].kind===i.Kind.INPUT_OBJECT_TYPE_DEFINITION?o.a.INPUT_FIELD_DEFINITION:o.a.ARGUMENT_DEFINITION}}(l)
p&&-1===f.indexOf(p)&&e.reportError(new r.a(function(e,t){return'Directive "'.concat(e,'" may not be used on ').concat(t,".")}(u,p),n))}else e.reportError(new r.a('Unknown directive "'.concat(u,'".'),n))}}}},"Vlv/":function(e,t,n){"use strict"
t.parseLinkLabel=n("31bW"),t.parseLinkDestination=n("5Mrk"),t.parseLinkTitle=n("fZFN")},"VrN/":function(e,t,n){e.exports=function(){"use strict"
var e=navigator.userAgent,t=navigator.platform,n=/gecko\/\d/i.test(e),r=/MSIE \d/.test(e),i=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e),o=/Edge\/(\d+)/.exec(e),a=r||i||o,s=a&&(r?document.documentMode||6:+(o||i)[1]),c=!o&&/WebKit\//.test(e),l=c&&/Qt\/\d+\.\d+/.test(e),u=!o&&/Chrome\//.test(e),f=/Opera\//.test(e),p=/Apple Computer/.test(navigator.vendor),d=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e),h=/PhantomJS/.test(e),m=!o&&/AppleWebKit/.test(e)&&/Mobile\/\w+/.test(e),g=/Android/.test(e),v=m||g||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e),y=m||/Mac/.test(t),b=/\bCrOS\b/.test(e),O=/win/i.test(t),w=f&&e.match(/Version\/(\d*\.\d*)/)
w&&(w=Number(w[1])),w&&w>=15&&(f=!1,c=!0)
var x=y&&(l||f&&(null==w||w<12.11)),k=n||a&&s>=9
function E(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}var C,T=function(e,t){var n=e.className,r=E(t).exec(n)
if(r){var i=n.slice(r.index+r[0].length)
e.className=n.slice(0,r.index)+(i?r[1]+i:"")}}
function _(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function S(e,t){return _(e).appendChild(t)}function N(e,t,n,r){var i=document.createElement(e)
if(n&&(i.className=n),r&&(i.style.cssText=r),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function A(e,t,n,r){var i=N(e,t,n,r)
return i.setAttribute("role","presentation"),i}function j(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do{if(11==t.nodeType&&(t=t.host),t==e)return!0}while(t=t.parentNode)}function D(){var e
try{e=document.activeElement}catch(t){e=document.body||null}for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement
return e}function L(e,t){var n=e.className
E(t).test(n)||(e.className+=(n?" ":"")+t)}function I(e,t){for(var n=e.split(" "),r=0;r<n.length;r++)n[r]&&!E(n[r]).test(t)&&(t+=" "+n[r])
return t}C=document.createRange?function(e,t,n,r){var i=document.createRange()
return i.setEnd(r||e,n),i.setStart(e,t),i}:function(e,t,n){var r=document.body.createTextRange()
try{r.moveToElementText(e.parentNode)}catch(e){return r}return r.collapse(!0),r.moveEnd("character",n),r.moveStart("character",t),r}
var F=function(e){e.select()}
function M(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function R(e,t,n){for(var r in t||(t={}),e)!e.hasOwnProperty(r)||!1===n&&t.hasOwnProperty(r)||(t[r]=e[r])
return t}function P(e,t,n,r,i){null==t&&-1==(t=e.search(/[^\s\u00a0]/))&&(t=e.length)
for(var o=r||0,a=i||0;;){var s=e.indexOf("\t",o)
if(s<0||s>=t)return a+(t-o)
a+=s-o,a+=n-a%n,o=s+1}}m?F=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:a&&(F=function(e){try{e.select()}catch(e){}})
var V=function(){this.id=null,this.f=null,this.time=0,this.handler=M(this.onTimeout,this)}
function q(e,t){for(var n=0;n<e.length;++n)if(e[n]==t)return n
return-1}V.prototype.onTimeout=function(e){e.id=0,e.time<=+new Date?e.f():setTimeout(e.handler,e.time-+new Date)},V.prototype.set=function(e,t){this.f=t
var n=+new Date+e;(!this.id||n<this.time)&&(clearTimeout(this.id),this.id=setTimeout(this.handler,e),this.time=n)}
var B={toString:function(){return"CodeMirror.Pass"}},z={scroll:!1},U={origin:"*mouse"},H={origin:"+move"}
function W(e,t,n){for(var r=0,i=0;;){var o=e.indexOf("\t",r);-1==o&&(o=e.length)
var a=o-r
if(o==e.length||i+a>=t)return r+Math.min(a,t-i)
if(i+=o-r,r=o+1,(i+=n-i%n)>=t)return r}}var G=[""]
function K(e){for(;G.length<=e;)G.push(Q(G)+" ")
return G[e]}function Q(e){return e[e.length-1]}function Y(e,t){for(var n=[],r=0;r<e.length;r++)n[r]=t(e[r],r)
return n}function J(){}function X(e,t){var n
return Object.create?n=Object.create(e):(J.prototype=e,n=new J),t&&R(t,n),n}var Z=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
function $(e){return/\w/.test(e)||e>""&&(e.toUpperCase()!=e.toLowerCase()||Z.test(e))}function ee(e,t){return t?!!(t.source.indexOf("\\w")>-1&&$(e))||t.test(e):$(e)}function te(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}var ne=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
function re(e){return e.charCodeAt(0)>=768&&ne.test(e)}function ie(e,t,n){for(;(n<0?t>0:t<e.length)&&re(e.charAt(t));)t+=n
return t}function oe(e,t,n){for(var r=t>n?-1:1;;){if(t==n)return t
var i=(t+n)/2,o=r<0?Math.ceil(i):Math.floor(i)
if(o==t)return e(o)?t:n
e(o)?n=o:t=o+r}}var ae=null
function se(e,t,n){var r
ae=null
for(var i=0;i<e.length;++i){var o=e[i]
if(o.from<t&&o.to>t)return i
o.to==t&&(o.from!=o.to&&"before"==n?r=i:ae=i),o.from==t&&(o.from!=o.to&&"before"!=n?r=i:ae=i)}return null!=r?r:ae}var ce=function(){var e=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,t=/[stwN]/,n=/[LRr]/,r=/[Lb1n]/,i=/[1n]/
function o(e,t,n){this.level=e,this.from=t,this.to=n}return function(a,s){var c="ltr"==s?"L":"R"
if(0==a.length||"ltr"==s&&!e.test(a))return!1
for(var l,u=a.length,f=[],p=0;p<u;++p)f.push((l=a.charCodeAt(p))<=247?"bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(l):1424<=l&&l<=1524?"R":1536<=l&&l<=1785?"nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(l-1536):1774<=l&&l<=2220?"r":8192<=l&&l<=8203?"w":8204==l?"b":"L")
for(var d=0,h=c;d<u;++d){var m=f[d]
"m"==m?f[d]=h:h=m}for(var g=0,v=c;g<u;++g){var y=f[g]
"1"==y&&"r"==v?f[g]="n":n.test(y)&&(v=y,"r"==y&&(f[g]="R"))}for(var b=1,O=f[0];b<u-1;++b){var w=f[b]
"+"==w&&"1"==O&&"1"==f[b+1]?f[b]="1":","!=w||O!=f[b+1]||"1"!=O&&"n"!=O||(f[b]=O),O=w}for(var x=0;x<u;++x){var k=f[x]
if(","==k)f[x]="N"
else if("%"==k){var E=void 0
for(E=x+1;E<u&&"%"==f[E];++E);for(var C=x&&"!"==f[x-1]||E<u&&"1"==f[E]?"1":"N",T=x;T<E;++T)f[T]=C
x=E-1}}for(var _=0,S=c;_<u;++_){var N=f[_]
"L"==S&&"1"==N?f[_]="L":n.test(N)&&(S=N)}for(var A=0;A<u;++A)if(t.test(f[A])){var j=void 0
for(j=A+1;j<u&&t.test(f[j]);++j);for(var D="L"==(A?f[A-1]:c),L=D==("L"==(j<u?f[j]:c))?D?"L":"R":c,I=A;I<j;++I)f[I]=L
A=j-1}for(var F,M=[],R=0;R<u;)if(r.test(f[R])){var P=R
for(++R;R<u&&r.test(f[R]);++R);M.push(new o(0,P,R))}else{var V=R,q=M.length,B="rtl"==s?1:0
for(++R;R<u&&"L"!=f[R];++R);for(var z=V;z<R;)if(i.test(f[z])){V<z&&(M.splice(q,0,new o(1,V,z)),q+=B)
var U=z
for(++z;z<R&&i.test(f[z]);++z);M.splice(q,0,new o(2,U,z)),q+=B,V=z}else++z
V<R&&M.splice(q,0,new o(1,V,R))}return"ltr"==s&&(1==M[0].level&&(F=a.match(/^\s+/))&&(M[0].from=F[0].length,M.unshift(new o(0,0,F[0].length))),1==Q(M).level&&(F=a.match(/\s+$/))&&(Q(M).to-=F[0].length,M.push(new o(0,u-F[0].length,u)))),"rtl"==s?M.reverse():M}}()
function le(e,t){var n=e.order
return null==n&&(n=e.order=ce(e.text,t)),n}var ue=[],fe=function(e,t,n){if(e.addEventListener)e.addEventListener(t,n,!1)
else if(e.attachEvent)e.attachEvent("on"+t,n)
else{var r=e._handlers||(e._handlers={})
r[t]=(r[t]||ue).concat(n)}}
function pe(e,t){return e._handlers&&e._handlers[t]||ue}function de(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n,!1)
else if(e.detachEvent)e.detachEvent("on"+t,n)
else{var r=e._handlers,i=r&&r[t]
if(i){var o=q(i,n)
o>-1&&(r[t]=i.slice(0,o).concat(i.slice(o+1)))}}}function he(e,t){var n=pe(e,t)
if(n.length)for(var r=Array.prototype.slice.call(arguments,2),i=0;i<n.length;++i)n[i].apply(null,r)}function me(e,t,n){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),he(e,n||t.type,e,t),we(t)||t.codemirrorIgnore}function ge(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var n=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),r=0;r<t.length;++r)-1==q(n,t[r])&&n.push(t[r])}function ve(e,t){return pe(e,t).length>0}function ye(e){e.prototype.on=function(e,t){fe(this,e,t)},e.prototype.off=function(e,t){de(this,e,t)}}function be(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Oe(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}function we(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function xe(e){be(e),Oe(e)}function ke(e){return e.target||e.srcElement}function Ee(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),y&&e.ctrlKey&&1==t&&(t=3),t}var Ce,Te,_e=function(){if(a&&s<9)return!1
var e=N("div")
return"draggable"in e||"dragDrop"in e}()
function Se(e){if(null==Ce){var t=N("span","​")
S(e,N("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Ce=t.offsetWidth<=1&&t.offsetHeight>2&&!(a&&s<8))}var n=Ce?N("span","​"):N("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
return n.setAttribute("cm-text",""),n}function Ne(e){if(null!=Te)return Te
var t=S(e,document.createTextNode("AخA")),n=C(t,0,1).getBoundingClientRect(),r=C(t,1,2).getBoundingClientRect()
return _(e),!(!n||n.left==n.right)&&(Te=r.right-n.right<3)}var Ae,je=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,n=[],r=e.length;t<=r;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),a=o.indexOf("\r");-1!=a?(n.push(o.slice(0,a)),t+=a+1):(n.push(o),t=i+1)}return n}:function(e){return e.split(/\r\n?|\n/)},De=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(e){return!1}}:function(e){var t
try{t=e.ownerDocument.selection.createRange()}catch(e){}return!(!t||t.parentElement()!=e)&&0!=t.compareEndPoints("StartToEnd",t)},Le="oncopy"in(Ae=N("div"))||(Ae.setAttribute("oncopy","return;"),"function"==typeof Ae.oncopy),Ie=null,Fe={},Me={}
function Re(e,t){arguments.length>2&&(t.dependencies=Array.prototype.slice.call(arguments,2)),Fe[e]=t}function Pe(e){if("string"==typeof e&&Me.hasOwnProperty(e))e=Me[e]
else if(e&&"string"==typeof e.name&&Me.hasOwnProperty(e.name)){var t=Me[e.name]
"string"==typeof t&&(t={name:t}),(e=X(t,e)).name=t.name}else{if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+xml$/.test(e))return Pe("application/xml")
if("string"==typeof e&&/^[\w\-]+\/[\w\-]+\+json$/.test(e))return Pe("application/json")}return"string"==typeof e?{name:e}:e||{name:"null"}}function Ve(e,t){t=Pe(t)
var n=Fe[t.name]
if(!n)return Ve(e,"text/plain")
var r=n(e,t)
if(qe.hasOwnProperty(t.name)){var i=qe[t.name]
for(var o in i)i.hasOwnProperty(o)&&(r.hasOwnProperty(o)&&(r["_"+o]=r[o]),r[o]=i[o])}if(r.name=t.name,t.helperType&&(r.helperType=t.helperType),t.modeProps)for(var a in t.modeProps)r[a]=t.modeProps[a]
return r}var qe={}
function Be(e,t){R(t,qe.hasOwnProperty(e)?qe[e]:qe[e]={})}function ze(e,t){if(!0===t)return t
if(e.copyState)return e.copyState(t)
var n={}
for(var r in t){var i=t[r]
i instanceof Array&&(i=i.concat([])),n[r]=i}return n}function Ue(e,t){for(var n;e.innerMode&&(n=e.innerMode(t))&&n.mode!=e;)t=n.state,e=n.mode
return n||{mode:e,state:t}}function He(e,t,n){return!e.startState||e.startState(t,n)}var We=function(e,t,n){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.lineOracle=n}
function Ge(e,t){if((t-=e.first)<0||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var n=e;!n.lines;)for(var r=0;;++r){var i=n.children[r],o=i.chunkSize()
if(t<o){n=i
break}t-=o}return n.lines[t]}function Ke(e,t,n){var r=[],i=t.line
return e.iter(t.line,n.line+1,(function(e){var o=e.text
i==n.line&&(o=o.slice(0,n.ch)),i==t.line&&(o=o.slice(t.ch)),r.push(o),++i})),r}function Qe(e,t,n){var r=[]
return e.iter(t,n,(function(e){r.push(e.text)})),r}function Ye(e,t){var n=t-e.height
if(n)for(var r=e;r;r=r.parent)r.height+=n}function Je(e){if(null==e.parent)return null
for(var t=e.parent,n=q(t.lines,e),r=t.parent;r;t=r,r=r.parent)for(var i=0;r.children[i]!=t;++i)n+=r.children[i].chunkSize()
return n+t.first}function Xe(e,t){var n=e.first
e:do{for(var r=0;r<e.children.length;++r){var i=e.children[r],o=i.height
if(t<o){e=i
continue e}t-=o,n+=i.chunkSize()}return n}while(!e.lines)
for(var a=0;a<e.lines.length;++a){var s=e.lines[a].height
if(t<s)break
t-=s}return n+a}function Ze(e,t){return t>=e.first&&t<e.first+e.size}function $e(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function et(e,t,n){if(void 0===n&&(n=null),!(this instanceof et))return new et(e,t,n)
this.line=e,this.ch=t,this.sticky=n}function tt(e,t){return e.line-t.line||e.ch-t.ch}function nt(e,t){return e.sticky==t.sticky&&0==tt(e,t)}function rt(e){return et(e.line,e.ch)}function it(e,t){return tt(e,t)<0?t:e}function ot(e,t){return tt(e,t)<0?e:t}function at(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function st(e,t){if(t.line<e.first)return et(e.first,0)
var n=e.first+e.size-1
return t.line>n?et(n,Ge(e,n).text.length):function(e,t){var n=e.ch
return null==n||n>t?et(e.line,t):n<0?et(e.line,0):e}(t,Ge(e,t.line).text.length)}function ct(e,t){for(var n=[],r=0;r<t.length;r++)n[r]=st(e,t[r])
return n}We.prototype.eol=function(){return this.pos>=this.string.length},We.prototype.sol=function(){return this.pos==this.lineStart},We.prototype.peek=function(){return this.string.charAt(this.pos)||void 0},We.prototype.next=function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},We.prototype.eat=function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e?t==e:t&&(e.test?e.test(t):e(t)))return++this.pos,t},We.prototype.eatWhile=function(e){for(var t=this.pos;this.eat(e););return this.pos>t},We.prototype.eatSpace=function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},We.prototype.skipToEnd=function(){this.pos=this.string.length},We.prototype.skipTo=function(e){var t=this.string.indexOf(e,this.pos)
if(t>-1)return this.pos=t,!0},We.prototype.backUp=function(e){this.pos-=e},We.prototype.column=function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=P(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?P(this.string,this.lineStart,this.tabSize):0)},We.prototype.indentation=function(){return P(this.string,null,this.tabSize)-(this.lineStart?P(this.string,this.lineStart,this.tabSize):0)},We.prototype.match=function(e,t,n){if("string"!=typeof e){var r=this.string.slice(this.pos).match(e)
return r&&r.index>0?null:(r&&!1!==t&&(this.pos+=r[0].length),r)}var i=function(e){return n?e.toLowerCase():e}
if(i(this.string.substr(this.pos,e.length))==i(e))return!1!==t&&(this.pos+=e.length),!0},We.prototype.current=function(){return this.string.slice(this.start,this.pos)},We.prototype.hideFirstChars=function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}},We.prototype.lookAhead=function(e){var t=this.lineOracle
return t&&t.lookAhead(e)},We.prototype.baseToken=function(){var e=this.lineOracle
return e&&e.baseToken(this.pos)}
var lt=function(e,t){this.state=e,this.lookAhead=t},ut=function(e,t,n,r){this.state=t,this.doc=e,this.line=n,this.maxLookAhead=r||0,this.baseTokens=null,this.baseTokenPos=1}
function ft(e,t,n,r){var i=[e.state.modeGen],o={}
Ot(e,t.text,e.doc.mode,n,(function(e,t){return i.push(e,t)}),o,r)
for(var a=n.state,s=function(r){n.baseTokens=i
var s=e.state.overlays[r],c=1,l=0
n.state=!0,Ot(e,t.text,s.mode,n,(function(e,t){for(var n=c;l<e;){var r=i[c]
r>e&&i.splice(c,1,e,i[c+1],r),c+=2,l=Math.min(e,r)}if(t)if(s.opaque)i.splice(n,c-n,e,"overlay "+t),c=n+2
else for(;n<c;n+=2){var o=i[n+1]
i[n+1]=(o?o+" ":"")+"overlay "+t}}),o),n.state=a,n.baseTokens=null,n.baseTokenPos=1},c=0;c<e.state.overlays.length;++c)s(c)
return{styles:i,classes:o.bgClass||o.textClass?o:null}}function pt(e,t,n){if(!t.styles||t.styles[0]!=e.state.modeGen){var r=dt(e,Je(t)),i=t.text.length>e.options.maxHighlightLength&&ze(e.doc.mode,r.state),o=ft(e,t,r)
i&&(r.state=i),t.stateAfter=r.save(!i),t.styles=o.styles,o.classes?t.styleClasses=o.classes:t.styleClasses&&(t.styleClasses=null),n===e.doc.highlightFrontier&&(e.doc.modeFrontier=Math.max(e.doc.modeFrontier,++e.doc.highlightFrontier))}return t.styles}function dt(e,t,n){var r=e.doc,i=e.display
if(!r.mode.startState)return new ut(r,!0,t)
var o=function(e,t,n){for(var r,i,o=e.doc,a=n?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>a;--s){if(s<=o.first)return o.first
var c=Ge(o,s-1),l=c.stateAfter
if(l&&(!n||s+(l instanceof lt?l.lookAhead:0)<=o.modeFrontier))return s
var u=P(c.text,null,e.options.tabSize);(null==i||r>u)&&(i=s-1,r=u)}return i}(e,t,n),a=o>r.first&&Ge(r,o-1).stateAfter,s=a?ut.fromSaved(r,a,o):new ut(r,He(r.mode),o)
return r.iter(o,t,(function(n){ht(e,n.text,s)
var r=s.line
n.stateAfter=r==t-1||r%5==0||r>=i.viewFrom&&r<i.viewTo?s.save():null,s.nextLine()})),n&&(r.modeFrontier=s.line),s}function ht(e,t,n,r){var i=e.doc.mode,o=new We(t,e.options.tabSize,n)
for(o.start=o.pos=r||0,""==t&&mt(i,n.state);!o.eol();)gt(i,o,n.state),o.start=o.pos}function mt(e,t){if(e.blankLine)return e.blankLine(t)
if(e.innerMode){var n=Ue(e,t)
return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function gt(e,t,n,r){for(var i=0;i<10;i++){r&&(r[0]=Ue(e,n).mode)
var o=e.token(t,n)
if(t.pos>t.start)return o}throw new Error("Mode "+e.name+" failed to advance stream.")}ut.prototype.lookAhead=function(e){var t=this.doc.getLine(this.line+e)
return null!=t&&e>this.maxLookAhead&&(this.maxLookAhead=e),t},ut.prototype.baseToken=function(e){if(!this.baseTokens)return null
for(;this.baseTokens[this.baseTokenPos]<=e;)this.baseTokenPos+=2
var t=this.baseTokens[this.baseTokenPos+1]
return{type:t&&t.replace(/( |^)overlay .*/,""),size:this.baseTokens[this.baseTokenPos]-e}},ut.prototype.nextLine=function(){this.line++,this.maxLookAhead>0&&this.maxLookAhead--},ut.fromSaved=function(e,t,n){return t instanceof lt?new ut(e,ze(e.mode,t.state),n,t.lookAhead):new ut(e,ze(e.mode,t),n)},ut.prototype.save=function(e){var t=!1!==e?ze(this.doc.mode,this.state):this.state
return this.maxLookAhead>0?new lt(t,this.maxLookAhead):t}
var vt=function(e,t,n){this.start=e.start,this.end=e.pos,this.string=e.current(),this.type=t||null,this.state=n}
function yt(e,t,n,r){var i,o,a=e.doc,s=a.mode,c=Ge(a,(t=st(a,t)).line),l=dt(e,t.line,n),u=new We(c.text,e.options.tabSize,l)
for(r&&(o=[]);(r||u.pos<t.ch)&&!u.eol();)u.start=u.pos,i=gt(s,u,l.state),r&&o.push(new vt(u,i,ze(a.mode,l.state)))
return r?o:new vt(u,i,l.state)}function bt(e,t){if(e)for(;;){var n=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!n)break
e=e.slice(0,n.index)+e.slice(n.index+n[0].length)
var r=n[1]?"bgClass":"textClass"
null==t[r]?t[r]=n[2]:new RegExp("(?:^|s)"+n[2]+"(?:$|s)").test(t[r])||(t[r]+=" "+n[2])}return e}function Ot(e,t,n,r,i,o,a){var s=n.flattenSpans
null==s&&(s=e.options.flattenSpans)
var c,l=0,u=null,f=new We(t,e.options.tabSize,r),p=e.options.addModeClass&&[null]
for(""==t&&bt(mt(n,r.state),o);!f.eol();){if(f.pos>e.options.maxHighlightLength?(s=!1,a&&ht(e,t,r,f.pos),f.pos=t.length,c=null):c=bt(gt(n,f,r.state,p),o),p){var d=p[0].name
d&&(c="m-"+(c?d+" "+c:d))}if(!s||u!=c){for(;l<f.start;)i(l=Math.min(f.start,l+5e3),u)
u=c}f.start=f.pos}for(;l<f.pos;){var h=Math.min(f.pos,l+5e3)
i(h,u),l=h}}var wt=!1,xt=!1
function kt(e,t,n){this.marker=e,this.from=t,this.to=n}function Et(e,t){if(e)for(var n=0;n<e.length;++n){var r=e[n]
if(r.marker==t)return r}}function Ct(e,t){for(var n,r=0;r<e.length;++r)e[r]!=t&&(n||(n=[])).push(e[r])
return n}function Tt(e,t){if(t.full)return null
var n=Ze(e,t.from.line)&&Ge(e,t.from.line).markedSpans,r=Ze(e,t.to.line)&&Ge(e,t.to.line).markedSpans
if(!n&&!r)return null
var i=t.from.ch,o=t.to.ch,a=0==tt(t.from,t.to),s=function(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t)||o.from==t&&"bookmark"==a.type&&(!n||!o.marker.insertLeft)){var s=null==o.to||(a.inclusiveRight?o.to>=t:o.to>t);(r||(r=[])).push(new kt(a,o.from,s?null:o.to))}}return r}(n,i,a),c=function(e,t,n){var r
if(e)for(var i=0;i<e.length;++i){var o=e[i],a=o.marker
if(null==o.to||(a.inclusiveRight?o.to>=t:o.to>t)||o.from==t&&"bookmark"==a.type&&(!n||o.marker.insertLeft)){var s=null==o.from||(a.inclusiveLeft?o.from<=t:o.from<t);(r||(r=[])).push(new kt(a,s?null:o.from-t,null==o.to?null:o.to-t))}}return r}(r,o,a),l=1==t.text.length,u=Q(t.text).length+(l?i:0)
if(s)for(var f=0;f<s.length;++f){var p=s[f]
if(null==p.to){var d=Et(c,p.marker)
d?l&&(p.to=null==d.to?null:d.to+u):p.to=i}}if(c)for(var h=0;h<c.length;++h){var m=c[h]
null!=m.to&&(m.to+=u),null==m.from?Et(s,m.marker)||(m.from=u,l&&(s||(s=[])).push(m)):(m.from+=u,l&&(s||(s=[])).push(m))}s&&(s=_t(s)),c&&c!=s&&(c=_t(c))
var g=[s]
if(!l){var v,y=t.text.length-2
if(y>0&&s)for(var b=0;b<s.length;++b)null==s[b].to&&(v||(v=[])).push(new kt(s[b].marker,null,null))
for(var O=0;O<y;++O)g.push(v)
g.push(c)}return g}function _t(e){for(var t=0;t<e.length;++t){var n=e[t]
null!=n.from&&n.from==n.to&&!1!==n.marker.clearWhenEmpty&&e.splice(t--,1)}return e.length?e:null}function St(e){var t=e.markedSpans
if(t){for(var n=0;n<t.length;++n)t[n].marker.detachLine(e)
e.markedSpans=null}}function Nt(e,t){if(t){for(var n=0;n<t.length;++n)t[n].marker.attachLine(e)
e.markedSpans=t}}function At(e){return e.inclusiveLeft?-1:0}function jt(e){return e.inclusiveRight?1:0}function Dt(e,t){var n=e.lines.length-t.lines.length
if(0!=n)return n
var r=e.find(),i=t.find(),o=tt(r.from,i.from)||At(e)-At(t)
if(o)return-o
var a=tt(r.to,i.to)||jt(e)-jt(t)
return a||t.id-e.id}function Lt(e,t){var n,r=xt&&e.markedSpans
if(r)for(var i=void 0,o=0;o<r.length;++o)(i=r[o]).marker.collapsed&&null==(t?i.from:i.to)&&(!n||Dt(n,i.marker)<0)&&(n=i.marker)
return n}function It(e){return Lt(e,!0)}function Ft(e){return Lt(e,!1)}function Mt(e,t){var n,r=xt&&e.markedSpans
if(r)for(var i=0;i<r.length;++i){var o=r[i]
o.marker.collapsed&&(null==o.from||o.from<t)&&(null==o.to||o.to>t)&&(!n||Dt(n,o.marker)<0)&&(n=o.marker)}return n}function Rt(e,t,n,r,i){var o=Ge(e,t),a=xt&&o.markedSpans
if(a)for(var s=0;s<a.length;++s){var c=a[s]
if(c.marker.collapsed){var l=c.marker.find(0),u=tt(l.from,n)||At(c.marker)-At(i),f=tt(l.to,r)||jt(c.marker)-jt(i)
if(!(u>=0&&f<=0||u<=0&&f>=0)&&(u<=0&&(c.marker.inclusiveRight&&i.inclusiveLeft?tt(l.to,n)>=0:tt(l.to,n)>0)||u>=0&&(c.marker.inclusiveRight&&i.inclusiveLeft?tt(l.from,r)<=0:tt(l.from,r)<0)))return!0}}}function Pt(e){for(var t;t=It(e);)e=t.find(-1,!0).line
return e}function Vt(e,t){var n=Ge(e,t),r=Pt(n)
return n==r?t:Je(r)}function qt(e,t){if(t>e.lastLine())return t
var n,r=Ge(e,t)
if(!Bt(e,r))return t
for(;n=Ft(r);)r=n.find(1,!0).line
return Je(r)+1}function Bt(e,t){var n=xt&&t.markedSpans
if(n)for(var r=void 0,i=0;i<n.length;++i)if((r=n[i]).marker.collapsed){if(null==r.from)return!0
if(!r.marker.widgetNode&&0==r.from&&r.marker.inclusiveLeft&&zt(e,t,r))return!0}}function zt(e,t,n){if(null==n.to){var r=n.marker.find(1,!0)
return zt(e,r.line,Et(r.line.markedSpans,n.marker))}if(n.marker.inclusiveRight&&n.to==t.text.length)return!0
for(var i=void 0,o=0;o<t.markedSpans.length;++o)if((i=t.markedSpans[o]).marker.collapsed&&!i.marker.widgetNode&&i.from==n.to&&(null==i.to||i.to!=n.from)&&(i.marker.inclusiveLeft||n.marker.inclusiveRight)&&zt(e,t,i))return!0}function Ut(e){for(var t=0,n=(e=Pt(e)).parent,r=0;r<n.lines.length;++r){var i=n.lines[r]
if(i==e)break
t+=i.height}for(var o=n.parent;o;o=(n=o).parent)for(var a=0;a<o.children.length;++a){var s=o.children[a]
if(s==n)break
t+=s.height}return t}function Ht(e){if(0==e.height)return 0
for(var t,n=e.text.length,r=e;t=It(r);){var i=t.find(0,!0)
r=i.from.line,n+=i.from.ch-i.to.ch}for(r=e;t=Ft(r);){var o=t.find(0,!0)
n-=r.text.length-o.from.ch,n+=(r=o.to.line).text.length-o.to.ch}return n}function Wt(e){var t=e.display,n=e.doc
t.maxLine=Ge(n,n.first),t.maxLineLength=Ht(t.maxLine),t.maxLineChanged=!0,n.iter((function(e){var n=Ht(e)
n>t.maxLineLength&&(t.maxLineLength=n,t.maxLine=e)}))}var Gt=function(e,t,n){this.text=e,Nt(this,t),this.height=n?n(this):1}
function Kt(e){e.parent=null,St(e)}Gt.prototype.lineNo=function(){return Je(this)},ye(Gt)
var Qt={},Yt={}
function Jt(e,t){if(!e||/^\s*$/.test(e))return null
var n=t.addModeClass?Yt:Qt
return n[e]||(n[e]=e.replace(/\S+/g,"cm-$&"))}function Xt(e,t){var n=A("span",null,null,c?"padding-right: .1px":null),r={pre:A("pre",[n],"CodeMirror-line"),content:n,col:0,pos:0,cm:e,trailingSpace:!1,splitSpaces:e.getOption("lineWrapping")}
t.measure={}
for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o=i?t.rest[i-1]:t.line,a=void 0
r.pos=0,r.addToken=$t,Ne(e.display.measure)&&(a=le(o,e.doc.direction))&&(r.addToken=en(r.addToken,a)),r.map=[],nn(o,r,pt(e,o,t!=e.display.externalMeasured&&Je(o))),o.styleClasses&&(o.styleClasses.bgClass&&(r.bgClass=I(o.styleClasses.bgClass,r.bgClass||"")),o.styleClasses.textClass&&(r.textClass=I(o.styleClasses.textClass,r.textClass||""))),0==r.map.length&&r.map.push(0,0,r.content.appendChild(Se(e.display.measure))),0==i?(t.measure.map=r.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(r.map),(t.measure.caches||(t.measure.caches=[])).push({}))}if(c){var s=r.content.lastChild;(/\bcm-tab\b/.test(s.className)||s.querySelector&&s.querySelector(".cm-tab"))&&(r.content.className="cm-tab-wrap-hack")}return he(e,"renderLine",e,t.line,r.pre),r.pre.className&&(r.textClass=I(r.pre.className,r.textClass||"")),r}function Zt(e){var t=N("span","•","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function $t(e,t,n,r,i,o,c){if(t){var l,u=e.splitSpaces?function(e,t){if(e.length>1&&!/  /.test(e))return e
for(var n=t,r="",i=0;i<e.length;i++){var o=e.charAt(i)
" "!=o||!n||i!=e.length-1&&32!=e.charCodeAt(i+1)||(o=" "),r+=o,n=" "==o}return r}(t,e.trailingSpace):t,f=e.cm.state.specialChars,p=!1
if(f.test(t)){l=document.createDocumentFragment()
for(var d=0;;){f.lastIndex=d
var h=f.exec(t),m=h?h.index-d:t.length-d
if(m){var g=document.createTextNode(u.slice(d,d+m))
a&&s<9?l.appendChild(N("span",[g])):l.appendChild(g),e.map.push(e.pos,e.pos+m,g),e.col+=m,e.pos+=m}if(!h)break
d+=m+1
var v=void 0
if("\t"==h[0]){var y=e.cm.options.tabSize,b=y-e.col%y;(v=l.appendChild(N("span",K(b),"cm-tab"))).setAttribute("role","presentation"),v.setAttribute("cm-text","\t"),e.col+=b}else"\r"==h[0]||"\n"==h[0]?((v=l.appendChild(N("span","\r"==h[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",h[0]),e.col+=1):((v=e.cm.options.specialCharPlaceholder(h[0])).setAttribute("cm-text",h[0]),a&&s<9?l.appendChild(N("span",[v])):l.appendChild(v),e.col+=1)
e.map.push(e.pos,e.pos+1,v),e.pos++}}else e.col+=t.length,l=document.createTextNode(u),e.map.push(e.pos,e.pos+t.length,l),a&&s<9&&(p=!0),e.pos+=t.length
if(e.trailingSpace=32==u.charCodeAt(t.length-1),n||r||i||p||o){var O=n||""
r&&(O+=r),i&&(O+=i)
var w=N("span",[l],O,o)
if(c)for(var x in c)c.hasOwnProperty(x)&&"style"!=x&&"class"!=x&&w.setAttribute(x,c[x])
return e.content.appendChild(w)}e.content.appendChild(l)}}function en(e,t){return function(n,r,i,o,a,s,c){i=i?i+" cm-force-border":"cm-force-border"
for(var l=n.pos,u=l+r.length;;){for(var f=void 0,p=0;p<t.length&&!((f=t[p]).to>l&&f.from<=l);p++);if(f.to>=u)return e(n,r,i,o,a,s,c)
e(n,r.slice(0,f.to-l),i,o,null,s,c),o=null,r=r.slice(f.to-l),l=f.to}}}function tn(e,t,n,r){var i=!r&&n.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!r&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",n.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t,e.trailingSpace=!1}function nn(e,t,n){var r=e.markedSpans,i=e.text,o=0
if(r)for(var a,s,c,l,u,f,p,d=i.length,h=0,m=1,g="",v=0;;){if(v==h){c=l=u=s="",p=null,f=null,v=Infinity
for(var y=[],b=void 0,O=0;O<r.length;++O){var w=r[O],x=w.marker
if("bookmark"==x.type&&w.from==h&&x.widgetNode)y.push(x)
else if(w.from<=h&&(null==w.to||w.to>h||x.collapsed&&w.to==h&&w.from==h)){if(null!=w.to&&w.to!=h&&v>w.to&&(v=w.to,l=""),x.className&&(c+=" "+x.className),x.css&&(s=(s?s+";":"")+x.css),x.startStyle&&w.from==h&&(u+=" "+x.startStyle),x.endStyle&&w.to==v&&(b||(b=[])).push(x.endStyle,w.to),x.title&&((p||(p={})).title=x.title),x.attributes)for(var k in x.attributes)(p||(p={}))[k]=x.attributes[k]
x.collapsed&&(!f||Dt(f.marker,x)<0)&&(f=w)}else w.from>h&&v>w.from&&(v=w.from)}if(b)for(var E=0;E<b.length;E+=2)b[E+1]==v&&(l+=" "+b[E])
if(!f||f.from==h)for(var C=0;C<y.length;++C)tn(t,0,y[C])
if(f&&(f.from||0)==h){if(tn(t,(null==f.to?d+1:f.to)-h,f.marker,null==f.from),null==f.to)return
f.to==h&&(f=!1)}}if(h>=d)break
for(var T=Math.min(d,v);;){if(g){var _=h+g.length
if(!f){var S=_>T?g.slice(0,T-h):g
t.addToken(t,S,a?a+c:c,u,h+S.length==v?l:"",s,p)}if(_>=T){g=g.slice(T-h),h=T
break}h=_,u=""}g=i.slice(o,o=n[m++]),a=Jt(n[m++],t.cm.options)}}else for(var N=1;N<n.length;N+=2)t.addToken(t,i.slice(o,o=n[N]),Jt(n[N+1],t.cm.options))}function rn(e,t,n){this.line=t,this.rest=function(e){for(var t,n;t=Ft(e);)e=t.find(1,!0).line,(n||(n=[])).push(e)
return n}(t),this.size=this.rest?Je(Q(this.rest))-n+1:1,this.node=this.text=null,this.hidden=Bt(e,t)}function on(e,t,n){for(var r,i=[],o=t;o<n;o=r){var a=new rn(e.doc,Ge(e.doc,o),o)
r=o+a.size,i.push(a)}return i}var an=null,sn=null
function cn(e,t){var n=pe(e,t)
if(n.length){var r,i=Array.prototype.slice.call(arguments,2)
an?r=an.delayedCallbacks:sn?r=sn:(r=sn=[],setTimeout(ln,0))
for(var o=function(e){r.push((function(){return n[e].apply(null,i)}))},a=0;a<n.length;++a)o(a)}}function ln(){var e=sn
sn=null
for(var t=0;t<e.length;++t)e[t]()}function un(e,t,n,r){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?dn(e,t):"gutter"==o?mn(e,t,n,r):"class"==o?hn(e,t):"widget"==o&&gn(e,t,r)}t.changes=null}function fn(e){return e.node==e.text&&(e.node=N("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),a&&s<8&&(e.node.style.zIndex=2)),e.node}function pn(e,t){var n=e.display.externalMeasured
return n&&n.line==t.line?(e.display.externalMeasured=null,t.measure=n.measure,n.built):Xt(e,t)}function dn(e,t){var n=t.text.className,r=pn(e,t)
t.text==t.node&&(t.node=r.pre),t.text.parentNode.replaceChild(r.pre,t.text),t.text=r.pre,r.bgClass!=t.bgClass||r.textClass!=t.textClass?(t.bgClass=r.bgClass,t.textClass=r.textClass,hn(e,t)):n&&(t.text.className=n)}function hn(e,t){!function(e,t){var n=t.bgClass?t.bgClass+" "+(t.line.bgClass||""):t.line.bgClass
if(n&&(n+=" CodeMirror-linebackground"),t.background)n?t.background.className=n:(t.background.parentNode.removeChild(t.background),t.background=null)
else if(n){var r=fn(t)
t.background=r.insertBefore(N("div",null,n),r.firstChild),e.display.input.setUneditable(t.background)}}(e,t),t.line.wrapClass?fn(t).className=t.line.wrapClass:t.node!=t.text&&(t.node.className="")
var n=t.textClass?t.textClass+" "+(t.line.textClass||""):t.line.textClass
t.text.className=n||""}function mn(e,t,n,r){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=fn(t)
t.gutterBackground=N("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px; width: "+r.gutterTotalWidth+"px"),e.display.input.setUneditable(t.gutterBackground),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers
if(e.options.lineNumbers||o){var a=fn(t),s=t.gutter=N("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?r.fixedPos:-r.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(s),a.insertBefore(s,t.text),t.line.gutterClass&&(s.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=s.appendChild(N("div",$e(e.options,n),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+r.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var c=0;c<e.display.gutterSpecs.length;++c){var l=e.display.gutterSpecs[c].className,u=o.hasOwnProperty(l)&&o[l]
u&&s.appendChild(N("div",[u],"CodeMirror-gutter-elt","left: "+r.gutterLeft[l]+"px; width: "+r.gutterWidth[l]+"px"))}}}function gn(e,t,n){t.alignable&&(t.alignable=null)
for(var r=E("CodeMirror-linewidget"),i=t.node.firstChild,o=void 0;i;i=o)o=i.nextSibling,r.test(i.className)&&t.node.removeChild(i)
yn(e,t,n)}function vn(e,t,n,r){var i=pn(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),hn(e,t),mn(e,t,n,r),yn(e,t,r),t.node}function yn(e,t,n){if(bn(e,t.line,t,n,!0),t.rest)for(var r=0;r<t.rest.length;r++)bn(e,t.rest[r],t,n,!1)}function bn(e,t,n,r,i){if(t.widgets)for(var o=fn(n),a=0,s=t.widgets;a<s.length;++a){var c=s[a],l=N("div",[c.node],"CodeMirror-linewidget"+(c.className?" "+c.className:""))
c.handleMouseEvents||l.setAttribute("cm-ignore-events","true"),On(c,l,n,r),e.display.input.setUneditable(l),i&&c.above?o.insertBefore(l,n.gutter||n.text):o.appendChild(l),cn(c,"redraw")}}function On(e,t,n,r){if(e.noHScroll){(n.alignable||(n.alignable=[])).push(t)
var i=r.wrapperWidth
t.style.left=r.fixedPos+"px",e.coverGutter||(i-=r.gutterTotalWidth,t.style.paddingLeft=r.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-r.gutterTotalWidth+"px"))}function wn(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!j(document.body,e.node)){var n="position: relative;"
e.coverGutter&&(n+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(n+="width: "+t.display.wrapper.clientWidth+"px;"),S(t.display.measure,N("div",[e.node],null,n))}return e.height=e.node.parentNode.offsetHeight}function xn(e,t){for(var n=ke(t);n!=e.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==e.sizer&&n!=e.mover)return!0}function kn(e){return e.lineSpace.offsetTop}function En(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function Cn(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=S(e.measure,N("pre","x","CodeMirror-line-like")),n=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,r={left:parseInt(n.paddingLeft),right:parseInt(n.paddingRight)}
return isNaN(r.left)||isNaN(r.right)||(e.cachedPaddingH=r),r}function Tn(e){return 30-e.display.nativeBarWidth}function _n(e){return e.display.scroller.clientWidth-Tn(e)-e.display.barWidth}function Sn(e){return e.display.scroller.clientHeight-Tn(e)-e.display.barHeight}function Nn(e,t,n){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var r=0;r<e.rest.length;r++)if(e.rest[r]==t)return{map:e.measure.maps[r],cache:e.measure.caches[r]}
for(var i=0;i<e.rest.length;i++)if(Je(e.rest[i])>n)return{map:e.measure.maps[i],cache:e.measure.caches[i],before:!0}}function An(e,t,n,r){return Ln(e,Dn(e,t),n,r)}function jn(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[ur(e,t)]
var n=e.display.externalMeasured
return n&&t>=n.lineN&&t<n.lineN+n.size?n:void 0}function Dn(e,t){var n=Je(t),r=jn(e,n)
r&&!r.text?r=null:r&&r.changes&&(un(e,r,n,or(e)),e.curOp.forceUpdate=!0),r||(r=function(e,t){var n=Je(t=Pt(t)),r=e.display.externalMeasured=new rn(e.doc,t,n)
r.lineN=n
var i=r.built=Xt(e,r)
return r.text=i.pre,S(e.display.lineMeasure,i.pre),r}(e,t))
var i=Nn(r,t,n)
return{line:t,view:r,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function Ln(e,t,n,r,i){t.before&&(n=-1)
var o,c=n+(r||"")
return t.cache.hasOwnProperty(c)?o=t.cache[c]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(function(e,t,n){var r=e.options.lineWrapping,i=r&&_n(e)
if(!t.measure.heights||r&&t.measure.width!=i){var o=t.measure.heights=[]
if(r){t.measure.width=i
for(var a=t.text.firstChild.getClientRects(),s=0;s<a.length-1;s++){var c=a[s],l=a[s+1]
Math.abs(c.bottom-l.bottom)>2&&o.push((c.bottom+l.top)/2-n.top)}}o.push(n.bottom-n.top)}}(e,t.view,t.rect),t.hasHeights=!0),(o=function(e,t,n,r){var i,o=Mn(t.map,n,r),c=o.node,l=o.start,u=o.end,f=o.collapse
if(3==c.nodeType){for(var p=0;p<4;p++){for(;l&&re(t.line.text.charAt(o.coverStart+l));)--l
for(;o.coverStart+u<o.coverEnd&&re(t.line.text.charAt(o.coverStart+u));)++u
if((i=a&&s<9&&0==l&&u==o.coverEnd-o.coverStart?c.parentNode.getBoundingClientRect():Rn(C(c,l,u).getClientRects(),r)).left||i.right||0==l)break
u=l,l-=1,f="right"}a&&s<11&&(i=function(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(e){if(null!=Ie)return Ie
var t=S(e,N("span","x")),n=t.getBoundingClientRect(),r=C(t,0,1).getBoundingClientRect()
return Ie=Math.abs(n.left-r.left)>1}(e))return t
var n=screen.logicalXDPI/screen.deviceXDPI,r=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*n,right:t.right*n,top:t.top*r,bottom:t.bottom*r}}(e.display.measure,i))}else{var d
l>0&&(f=r="right"),i=e.options.lineWrapping&&(d=c.getClientRects()).length>1?d["right"==r?d.length-1:0]:c.getBoundingClientRect()}if(a&&s<9&&!l&&(!i||!i.left&&!i.right)){var h=c.parentNode.getClientRects()[0]
i=h?{left:h.left,right:h.left+ir(e.display),top:h.top,bottom:h.bottom}:Fn}for(var m=i.top-t.rect.top,g=i.bottom-t.rect.top,v=(m+g)/2,y=t.view.measure.heights,b=0;b<y.length-1&&!(v<y[b]);b++);var O=b?y[b-1]:0,w=y[b],x={left:("right"==f?i.right:i.left)-t.rect.left,right:("left"==f?i.left:i.right)-t.rect.left,top:O,bottom:w}
return i.left||i.right||(x.bogus=!0),e.options.singleCursorHeightPerLine||(x.rtop=m,x.rbottom=g),x}(e,t,n,r)).bogus||(t.cache[c]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}var In,Fn={left:0,right:0,top:0,bottom:0}
function Mn(e,t,n){for(var r,i,o,a,s,c,l=0;l<e.length;l+=3)if(s=e[l],c=e[l+1],t<s?(i=0,o=1,a="left"):t<c?o=1+(i=t-s):(l==e.length-3||t==c&&e[l+3]>t)&&(i=(o=c-s)-1,t>=c&&(a="right")),null!=i){if(r=e[l+2],s==c&&n==(r.insertLeft?"left":"right")&&(a=n),"left"==n&&0==i)for(;l&&e[l-2]==e[l-3]&&e[l-1].insertLeft;)r=e[2+(l-=3)],a="left"
if("right"==n&&i==c-s)for(;l<e.length-3&&e[l+3]==e[l+4]&&!e[l+5].insertLeft;)r=e[(l+=3)+2],a="right"
break}return{node:r,start:i,end:o,collapse:a,coverStart:s,coverEnd:c}}function Rn(e,t){var n=Fn
if("left"==t)for(var r=0;r<e.length&&(n=e[r]).left==n.right;r++);else for(var i=e.length-1;i>=0&&(n=e[i]).left==n.right;i--);return n}function Pn(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function Vn(e){e.display.externalMeasure=null,_(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)Pn(e.display.view[t])}function qn(e){Vn(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function Bn(){return u&&g?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft}function zn(){return u&&g?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop}function Un(e){var t=0
if(e.widgets)for(var n=0;n<e.widgets.length;++n)e.widgets[n].above&&(t+=wn(e.widgets[n]))
return t}function Hn(e,t,n,r,i){if(!i){var o=Un(t)
n.top+=o,n.bottom+=o}if("line"==r)return n
r||(r="local")
var a=Ut(t)
if("local"==r?a+=kn(e.display):a-=e.display.viewOffset,"page"==r||"window"==r){var s=e.display.lineSpace.getBoundingClientRect()
a+=s.top+("window"==r?0:zn())
var c=s.left+("window"==r?0:Bn())
n.left+=c,n.right+=c}return n.top+=a,n.bottom+=a,n}function Wn(e,t,n){if("div"==n)return t
var r=t.left,i=t.top
if("page"==n)r-=Bn(),i-=zn()
else if("local"==n||!n){var o=e.display.sizer.getBoundingClientRect()
r+=o.left,i+=o.top}var a=e.display.lineSpace.getBoundingClientRect()
return{left:r-a.left,top:i-a.top}}function Gn(e,t,n,r,i){return r||(r=Ge(e.doc,t.line)),Hn(e,r,An(e,r,t.ch,i),n)}function Kn(e,t,n,r,i,o){function a(t,a){var s=Ln(e,i,t,a?"right":"left",o)
return a?s.left=s.right:s.right=s.left,Hn(e,r,s,n)}r=r||Ge(e.doc,t.line),i||(i=Dn(e,r))
var s=le(r,e.doc.direction),c=t.ch,l=t.sticky
if(c>=r.text.length?(c=r.text.length,l="before"):c<=0&&(c=0,l="after"),!s)return a("before"==l?c-1:c,"before"==l)
function u(e,t,n){return a(n?e-1:e,1==s[t].level!=n)}var f=se(s,c,l),p=ae,d=u(c,f,"before"==l)
return null!=p&&(d.other=u(c,p,"before"!=l)),d}function Qn(e,t){var n=0
t=st(e.doc,t),e.options.lineWrapping||(n=ir(e.display)*t.ch)
var r=Ge(e.doc,t.line),i=Ut(r)+kn(e.display)
return{left:n,right:n,top:i,bottom:i+r.height}}function Yn(e,t,n,r,i){var o=et(e,t,n)
return o.xRel=i,r&&(o.outside=r),o}function Jn(e,t,n){var r=e.doc
if((n+=e.display.viewOffset)<0)return Yn(r.first,0,null,-1,-1)
var i=Xe(r,n),o=r.first+r.size-1
if(i>o)return Yn(r.first+r.size-1,Ge(r,o).text.length,null,1,1)
t<0&&(t=0)
for(var a=Ge(r,i);;){var s=er(e,a,i,t,n),c=Mt(a,s.ch+(s.xRel>0||s.outside>0?1:0))
if(!c)return s
var l=c.find(1)
if(l.line==i)return l
a=Ge(r,i=l.line)}}function Xn(e,t,n,r){r-=Un(t)
var i=t.text.length,o=oe((function(t){return Ln(e,n,t-1).bottom<=r}),i,0)
return{begin:o,end:i=oe((function(t){return Ln(e,n,t).top>r}),o,i)}}function Zn(e,t,n,r){return n||(n=Dn(e,t)),Xn(e,t,n,Hn(e,t,Ln(e,n,r),"line").top)}function $n(e,t,n,r){return!(e.bottom<=n)&&(e.top>n||(r?e.left:e.right)>t)}function er(e,t,n,r,i){i-=Ut(t)
var o=Dn(e,t),a=Un(t),s=0,c=t.text.length,l=!0,u=le(t,e.doc.direction)
if(u){var f=(e.options.lineWrapping?nr:tr)(e,t,n,o,u,r,i)
s=(l=1!=f.level)?f.from:f.to-1,c=l?f.to:f.from-1}var p,d,h=null,m=null,g=oe((function(t){var n=Ln(e,o,t)
return n.top+=a,n.bottom+=a,!!$n(n,r,i,!1)&&(n.top<=i&&n.left<=r&&(h=t,m=n),!0)}),s,c),v=!1
if(m){var y=r-m.left<m.right-r,b=y==l
g=h+(b?0:1),d=b?"after":"before",p=y?m.left:m.right}else{l||g!=c&&g!=s||g++,d=0==g?"after":g==t.text.length?"before":Ln(e,o,g-(l?1:0)).bottom+a<=i==l?"after":"before"
var O=Kn(e,et(n,g,d),"line",t,o)
p=O.left,v=i<O.top?-1:i>=O.bottom?1:0}return Yn(n,g=ie(t.text,g,1),d,v,r-p)}function tr(e,t,n,r,i,o,a){var s=oe((function(s){var c=i[s],l=1!=c.level
return $n(Kn(e,et(n,l?c.to:c.from,l?"before":"after"),"line",t,r),o,a,!0)}),0,i.length-1),c=i[s]
if(s>0){var l=1!=c.level,u=Kn(e,et(n,l?c.from:c.to,l?"after":"before"),"line",t,r)
$n(u,o,a,!0)&&u.top>a&&(c=i[s-1])}return c}function nr(e,t,n,r,i,o,a){var s=Xn(e,t,r,a),c=s.begin,l=s.end;/\s/.test(t.text.charAt(l-1))&&l--
for(var u=null,f=null,p=0;p<i.length;p++){var d=i[p]
if(!(d.from>=l||d.to<=c)){var h=Ln(e,r,1!=d.level?Math.min(l,d.to)-1:Math.max(c,d.from)).right,m=h<o?o-h+1e9:h-o;(!u||f>m)&&(u=d,f=m)}}return u||(u=i[i.length-1]),u.from<c&&(u={from:c,to:u.to,level:u.level}),u.to>l&&(u={from:u.from,to:l,level:u.level}),u}function rr(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==In){In=N("pre",null,"CodeMirror-line-like")
for(var t=0;t<49;++t)In.appendChild(document.createTextNode("x")),In.appendChild(N("br"))
In.appendChild(document.createTextNode("x"))}S(e.measure,In)
var n=In.offsetHeight/50
return n>3&&(e.cachedTextHeight=n),_(e.measure),n||1}function ir(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=N("span","xxxxxxxxxx"),n=N("pre",[t],"CodeMirror-line-like")
S(e.measure,n)
var r=t.getBoundingClientRect(),i=(r.right-r.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}function or(e){for(var t=e.display,n={},r={},i=t.gutters.clientLeft,o=t.gutters.firstChild,a=0;o;o=o.nextSibling,++a){var s=e.display.gutterSpecs[a].className
n[s]=o.offsetLeft+o.clientLeft+i,r[s]=o.clientWidth}return{fixedPos:ar(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:n,gutterWidth:r,wrapperWidth:t.wrapper.clientWidth}}function ar(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function sr(e){var t=rr(e.display),n=e.options.lineWrapping,r=n&&Math.max(5,e.display.scroller.clientWidth/ir(e.display)-3)
return function(i){if(Bt(e.doc,i))return 0
var o=0
if(i.widgets)for(var a=0;a<i.widgets.length;a++)i.widgets[a].height&&(o+=i.widgets[a].height)
return n?o+(Math.ceil(i.text.length/r)||1)*t:o+t}}function cr(e){var t=e.doc,n=sr(e)
t.iter((function(e){var t=n(e)
t!=e.height&&Ye(e,t)}))}function lr(e,t,n,r){var i=e.display
if(!n&&"true"==ke(t).getAttribute("cm-not-content"))return null
var o,a,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,a=t.clientY-s.top}catch(t){return null}var c,l=Jn(e,o,a)
if(r&&l.xRel>0&&(c=Ge(e.doc,l.line).text).length==l.ch){var u=P(c,c.length,e.options.tabSize)-c.length
l=et(l.line,Math.max(0,Math.round((o-Cn(e.display).left)/ir(e.display))-u))}return l}function ur(e,t){if(t>=e.display.viewTo)return null
if((t-=e.display.viewFrom)<0)return null
for(var n=e.display.view,r=0;r<n.length;r++)if((t-=n[r].size)<0)return r}function fr(e,t,n,r){null==t&&(t=e.doc.first),null==n&&(n=e.doc.first+e.doc.size),r||(r=0)
var i=e.display
if(r&&n<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)xt&&Vt(e.doc,t)<i.viewTo&&dr(e)
else if(n<=i.viewFrom)xt&&qt(e.doc,n+r)>i.viewFrom?dr(e):(i.viewFrom+=r,i.viewTo+=r)
else if(t<=i.viewFrom&&n>=i.viewTo)dr(e)
else if(t<=i.viewFrom){var o=hr(e,n,n+r,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=r):dr(e)}else if(n>=i.viewTo){var a=hr(e,t,t,-1)
a?(i.view=i.view.slice(0,a.index),i.viewTo=a.lineN):dr(e)}else{var s=hr(e,t,t,-1),c=hr(e,n,n+r,1)
s&&c?(i.view=i.view.slice(0,s.index).concat(on(e,s.lineN,c.lineN)).concat(i.view.slice(c.index)),i.viewTo+=r):dr(e)}var l=i.externalMeasured
l&&(n<l.lineN?l.lineN+=r:t<l.lineN+l.size&&(i.externalMeasured=null))}function pr(e,t,n){e.curOp.viewChanged=!0
var r=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(r.externalMeasured=null),!(t<r.viewFrom||t>=r.viewTo)){var o=r.view[ur(e,t)]
if(null!=o.node){var a=o.changes||(o.changes=[]);-1==q(a,n)&&a.push(n)}}}function dr(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function hr(e,t,n,r){var i,o=ur(e,t),a=e.display.view
if(!xt||n==e.doc.first+e.doc.size)return{index:o,lineN:n}
for(var s=e.display.viewFrom,c=0;c<o;c++)s+=a[c].size
if(s!=t){if(r>0){if(o==a.length-1)return null
i=s+a[o].size-t,o++}else i=s-t
t+=i,n+=i}for(;Vt(e.doc,n)!=n;){if(o==(r<0?0:a.length-1))return null
n+=r*a[o-(r<0?1:0)].size,o+=r}return{index:o,lineN:n}}function mr(e){for(var t=e.display.view,n=0,r=0;r<t.length;r++){var i=t[r]
i.hidden||i.node&&!i.changes||++n}return n}function gr(e){e.display.input.showSelection(e.display.input.prepareSelection())}function vr(e,t){void 0===t&&(t=!0)
for(var n=e.doc,r={},i=r.cursors=document.createDocumentFragment(),o=r.selection=document.createDocumentFragment(),a=0;a<n.sel.ranges.length;a++)if(t||a!=n.sel.primIndex){var s=n.sel.ranges[a]
if(!(s.from().line>=e.display.viewTo||s.to().line<e.display.viewFrom)){var c=s.empty();(c||e.options.showCursorWhenSelecting)&&yr(e,s.head,i),c||Or(e,s,o)}}return r}function yr(e,t,n){var r=Kn(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=n.appendChild(N("div"," ","CodeMirror-cursor"))
if(i.style.left=r.left+"px",i.style.top=r.top+"px",i.style.height=Math.max(0,r.bottom-r.top)*e.options.cursorHeight+"px",r.other){var o=n.appendChild(N("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
o.style.display="",o.style.left=r.other.left+"px",o.style.top=r.other.top+"px",o.style.height=.85*(r.other.bottom-r.other.top)+"px"}}function br(e,t){return e.top-t.top||e.left-t.left}function Or(e,t,n){var r=e.display,i=e.doc,o=document.createDocumentFragment(),a=Cn(e.display),s=a.left,c=Math.max(r.sizerWidth,_n(e)-r.sizer.offsetLeft)-a.right,l="ltr"==i.direction
function u(e,t,n,r){t<0&&(t=0),t=Math.round(t),r=Math.round(r),o.appendChild(N("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px;\n                             top: "+t+"px; width: "+(null==n?c-e:n)+"px;\n                             height: "+(r-t)+"px"))}function f(t,n,r){var o,a,f=Ge(i,t),p=f.text.length
function d(n,r){return Gn(e,et(t,n),"div",f,r)}function h(t,n,r){var i=Zn(e,f,null,t),o="ltr"==n==("after"==r)?"left":"right"
return d("after"==r?i.begin:i.end-(/\s/.test(f.text.charAt(i.end-1))?2:1),o)[o]}var m=le(f,i.direction)
return function(e,t,n,r){if(!e)return r(t,n,"ltr",0)
for(var i=!1,o=0;o<e.length;++o){var a=e[o];(a.from<n&&a.to>t||t==n&&a.to==t)&&(r(Math.max(a.from,t),Math.min(a.to,n),1==a.level?"rtl":"ltr",o),i=!0)}i||r(t,n,"ltr")}(m,n||0,null==r?p:r,(function(e,t,i,f){var g="ltr"==i,v=d(e,g?"left":"right"),y=d(t-1,g?"right":"left"),b=null==n&&0==e,O=null==r&&t==p,w=0==f,x=!m||f==m.length-1
if(y.top-v.top<=3){var k=(l?O:b)&&x,E=(l?b:O)&&w?s:(g?v:y).left,C=k?c:(g?y:v).right
u(E,v.top,C-E,v.bottom)}else{var T,_,S,N
g?(T=l&&b&&w?s:v.left,_=l?c:h(e,i,"before"),S=l?s:h(t,i,"after"),N=l&&O&&x?c:y.right):(T=l?h(e,i,"before"):s,_=!l&&b&&w?c:v.right,S=!l&&O&&x?s:y.left,N=l?h(t,i,"after"):c),u(T,v.top,_-T,v.bottom),v.bottom<y.top&&u(s,v.bottom,null,y.top),u(S,y.top,N-S,y.bottom)}(!o||br(v,o)<0)&&(o=v),br(y,o)<0&&(o=y),(!a||br(v,a)<0)&&(a=v),br(y,a)<0&&(a=y)})),{start:o,end:a}}var p=t.from(),d=t.to()
if(p.line==d.line)f(p.line,p.ch,d.ch)
else{var h=Ge(i,p.line),m=Ge(i,d.line),g=Pt(h)==Pt(m),v=f(p.line,p.ch,g?h.text.length+1:null).end,y=f(d.line,g?0:null,d.ch).start
g&&(v.top<y.top-2?(u(v.right,v.top,null,v.bottom),u(s,y.top,y.left,y.bottom)):u(v.right,v.top,y.left-v.right,v.bottom)),v.bottom<y.top&&u(s,v.bottom,null,y.top)}n.appendChild(o)}function wr(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var n=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval((function(){return t.cursorDiv.style.visibility=(n=!n)?"":"hidden"}),e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function xr(e){e.state.focused||(e.display.input.focus(),Er(e))}function kr(e){e.state.delayingBlurEvent=!0,setTimeout((function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,Cr(e))}),100)}function Er(e,t){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(he(e,"focus",e,t),e.state.focused=!0,L(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),c&&setTimeout((function(){return e.display.input.reset(!0)}),20)),e.display.input.receivedFocus()),wr(e))}function Cr(e,t){e.state.delayingBlurEvent||(e.state.focused&&(he(e,"blur",e,t),e.state.focused=!1,T(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout((function(){e.state.focused||(e.display.shift=!1)}),150))}function Tr(e){for(var t=e.display,n=t.lineDiv.offsetTop,r=0;r<t.view.length;r++){var i=t.view[r],o=e.options.lineWrapping,c=void 0,l=0
if(!i.hidden){if(a&&s<8){var u=i.node.offsetTop+i.node.offsetHeight
c=u-n,n=u}else{var f=i.node.getBoundingClientRect()
c=f.bottom-f.top,!o&&i.text.firstChild&&(l=i.text.firstChild.getBoundingClientRect().right-f.left-1)}var p=i.line.height-c
if((p>.005||p<-.005)&&(Ye(i.line,c),_r(i.line),i.rest))for(var d=0;d<i.rest.length;d++)_r(i.rest[d])
if(l>e.display.sizerWidth){var h=Math.ceil(l/ir(e.display))
h>e.display.maxLineLength&&(e.display.maxLineLength=h,e.display.maxLine=i.line,e.display.maxLineChanged=!0)}}}}function _r(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t){var n=e.widgets[t],r=n.node.parentNode
r&&(n.height=r.offsetHeight)}}function Sr(e,t,n){var r=n&&null!=n.top?Math.max(0,n.top):e.scroller.scrollTop
r=Math.floor(r-kn(e))
var i=n&&null!=n.bottom?n.bottom:r+e.wrapper.clientHeight,o=Xe(t,r),a=Xe(t,i)
if(n&&n.ensure){var s=n.ensure.from.line,c=n.ensure.to.line
s<o?(o=s,a=Xe(t,Ut(Ge(t,s))+e.wrapper.clientHeight)):Math.min(c,t.lastLine())>=a&&(o=Xe(t,Ut(Ge(t,c))-e.wrapper.clientHeight),a=c)}return{from:o,to:Math.max(a,o+1)}}function Nr(e,t){var n=e.display,r=rr(e.display)
t.top<0&&(t.top=0)
var i=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:n.scroller.scrollTop,o=Sn(e),a={}
t.bottom-t.top>o&&(t.bottom=t.top+o)
var s=e.doc.height+En(n),c=t.top<r,l=t.bottom>s-r
if(t.top<i)a.scrollTop=c?0:t.top
else if(t.bottom>i+o){var u=Math.min(t.top,(l?s:t.bottom)-o)
u!=i&&(a.scrollTop=u)}var f=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:n.scroller.scrollLeft,p=_n(e)-(e.options.fixedGutter?n.gutters.offsetWidth:0),d=t.right-t.left>p
return d&&(t.right=t.left+p),t.left<10?a.scrollLeft=0:t.left<f?a.scrollLeft=Math.max(0,t.left-(d?0:10)):t.right>p+f-3&&(a.scrollLeft=t.right+(d?0:10)-p),a}function Ar(e,t){null!=t&&(Lr(e),e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+t)}function jr(e){Lr(e)
var t=e.getCursor()
e.curOp.scrollToPos={from:t,to:t,margin:e.options.cursorScrollMargin}}function Dr(e,t,n){null==t&&null==n||Lr(e),null!=t&&(e.curOp.scrollLeft=t),null!=n&&(e.curOp.scrollTop=n)}function Lr(e){var t=e.curOp.scrollToPos
t&&(e.curOp.scrollToPos=null,Ir(e,Qn(e,t.from),Qn(e,t.to),t.margin))}function Ir(e,t,n,r){var i=Nr(e,{left:Math.min(t.left,n.left),top:Math.min(t.top,n.top)-r,right:Math.max(t.right,n.right),bottom:Math.max(t.bottom,n.bottom)+r})
Dr(e,i.scrollLeft,i.scrollTop)}function Fr(e,t){Math.abs(e.doc.scrollTop-t)<2||(n||ci(e,{top:t}),Mr(e,t,!0),n&&ci(e),ri(e,100))}function Mr(e,t,n){t=Math.max(0,Math.min(e.display.scroller.scrollHeight-e.display.scroller.clientHeight,t)),(e.display.scroller.scrollTop!=t||n)&&(e.doc.scrollTop=t,e.display.scrollbars.setScrollTop(t),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t))}function Rr(e,t,n,r){t=Math.max(0,Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth)),(n?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)&&!r||(e.doc.scrollLeft=t,fi(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function Pr(e){var t=e.display,n=t.gutters.offsetWidth,r=Math.round(e.doc.height+En(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?n:0,docHeight:r,scrollHeight:r+Tn(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:n}}var Vr=function(e,t,n){this.cm=n
var r=this.vert=N("div",[N("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=N("div",[N("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
r.tabIndex=i.tabIndex=-1,e(r),e(i),fe(r,"scroll",(function(){r.clientHeight&&t(r.scrollTop,"vertical")})),fe(i,"scroll",(function(){i.clientWidth&&t(i.scrollLeft,"horizontal")})),this.checkedZeroWidth=!1,a&&s<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}
Vr.prototype.update=function(e){var t=e.scrollWidth>e.clientWidth+1,n=e.scrollHeight>e.clientHeight+1,r=e.nativeBarWidth
if(n){this.vert.style.display="block",this.vert.style.bottom=t?r+"px":"0"
var i=e.viewHeight-(t?r:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=n?r+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(n?r:0)
this.horiz.firstChild.style.width=Math.max(0,e.scrollWidth-e.clientWidth+o)+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==r&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:n?r:0,bottom:t?r:0}},Vr.prototype.setScrollLeft=function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")},Vr.prototype.setScrollTop=function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")},Vr.prototype.zeroWidthHack=function(){var e=y&&!d?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new V,this.disableVert=new V},Vr.prototype.enableZeroWidthBar=function(e,t,n){e.style.pointerEvents="auto",t.set(1e3,(function r(){var i=e.getBoundingClientRect();("vert"==n?document.elementFromPoint(i.right-1,(i.top+i.bottom)/2):document.elementFromPoint((i.right+i.left)/2,i.bottom-1))!=e?e.style.pointerEvents="none":t.set(1e3,r)}))},Vr.prototype.clear=function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}
var qr=function(){}
function Br(e,t){t||(t=Pr(e))
var n=e.display.barWidth,r=e.display.barHeight
zr(e,t)
for(var i=0;i<4&&n!=e.display.barWidth||r!=e.display.barHeight;i++)n!=e.display.barWidth&&e.options.lineWrapping&&Tr(e),zr(e,Pr(e)),n=e.display.barWidth,r=e.display.barHeight}function zr(e,t){var n=e.display,r=n.scrollbars.update(t)
n.sizer.style.paddingRight=(n.barWidth=r.right)+"px",n.sizer.style.paddingBottom=(n.barHeight=r.bottom)+"px",n.heightForcer.style.borderBottom=r.bottom+"px solid transparent",r.right&&r.bottom?(n.scrollbarFiller.style.display="block",n.scrollbarFiller.style.height=r.bottom+"px",n.scrollbarFiller.style.width=r.right+"px"):n.scrollbarFiller.style.display="",r.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(n.gutterFiller.style.display="block",n.gutterFiller.style.height=r.bottom+"px",n.gutterFiller.style.width=t.gutterWidth+"px"):n.gutterFiller.style.display=""}qr.prototype.update=function(){return{bottom:0,right:0}},qr.prototype.setScrollLeft=function(){},qr.prototype.setScrollTop=function(){},qr.prototype.clear=function(){}
var Ur={native:Vr,null:qr}
function Hr(e){e.display.scrollbars&&(e.display.scrollbars.clear(),e.display.scrollbars.addClass&&T(e.display.wrapper,e.display.scrollbars.addClass)),e.display.scrollbars=new Ur[e.options.scrollbarStyle]((function(t){e.display.wrapper.insertBefore(t,e.display.scrollbarFiller),fe(t,"mousedown",(function(){e.state.focused&&setTimeout((function(){return e.display.input.focus()}),0)})),t.setAttribute("cm-not-content","true")}),(function(t,n){"horizontal"==n?Rr(e,t):Fr(e,t)}),e),e.display.scrollbars.addClass&&L(e.display.wrapper,e.display.scrollbars.addClass)}var Wr=0
function Gr(e){var t
e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:0,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++Wr},t=e.curOp,an?an.ops.push(t):t.ownsGroup=an={ops:[t],delayedCallbacks:[]}}function Kr(e){var t=e.curOp
t&&function(e,t){var n=e.ownsGroup
if(n)try{!function(e){var t=e.delayedCallbacks,n=0
do{for(;n<t.length;n++)t[n].call(null)
for(var r=0;r<e.ops.length;r++){var i=e.ops[r]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(n<t.length)}(n)}finally{an=null,t(n)}}(t,(function(e){for(var t=0;t<e.ops.length;t++)e.ops[t].cm.curOp=null
!function(e){for(var t=e.ops,n=0;n<t.length;n++)Qr(t[n])
for(var r=0;r<t.length;r++)Yr(t[r])
for(var i=0;i<t.length;i++)Jr(t[i])
for(var o=0;o<t.length;o++)Xr(t[o])
for(var a=0;a<t.length;a++)Zr(t[a])}(e)}))}function Qr(e){var t=e.cm,n=t.display
!function(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Tn(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Tn(e)+"px",t.scrollbarsClipped=!0)}(t),e.updateMaxLine&&Wt(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<n.viewFrom||e.scrollToPos.to.line>=n.viewTo)||n.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new oi(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Yr(e){e.updatedDisplay=e.mustUpdate&&ai(e.cm,e.update)}function Jr(e){var t=e.cm,n=t.display
e.updatedDisplay&&Tr(t),e.barMeasure=Pr(t),n.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=An(t,n.maxLine,n.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(n.scroller.clientWidth,n.sizer.offsetLeft+e.adjustWidthTo+Tn(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,n.sizer.offsetLeft+e.adjustWidthTo-_n(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=n.input.prepareSelection())}function Xr(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&Rr(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1)
var n=e.focus&&e.focus==D()
e.preparedSelection&&t.display.input.showSelection(e.preparedSelection,n),(e.updatedDisplay||e.startHeight!=t.doc.height)&&Br(t,e.barMeasure),e.updatedDisplay&&ui(t,e.barMeasure),e.selectionChanged&&wr(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),n&&xr(e.cm)}function Zr(e){var t=e.cm,n=t.display,r=t.doc
e.updatedDisplay&&si(t,e.update),null==n.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(n.wheelStartX=n.wheelStartY=null),null!=e.scrollTop&&Mr(t,e.scrollTop,e.forceScroll),null!=e.scrollLeft&&Rr(t,e.scrollLeft,!0,!0),e.scrollToPos&&function(e,t){if(!me(e,"scrollCursorIntoView")){var n=e.display,r=n.sizer.getBoundingClientRect(),i=null
if(t.top+r.top<0?i=!0:t.bottom+r.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!h){var o=N("div","​",null,"position: absolute;\n                         top: "+(t.top-n.viewOffset-kn(e.display))+"px;\n                         height: "+(t.bottom-t.top+Tn(e)+n.barHeight)+"px;\n                         left: "+t.left+"px; width: "+Math.max(2,t.right-t.left)+"px;")
e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}(t,function(e,t,n,r){var i
null==r&&(r=0),e.options.lineWrapping||t!=n||(n="before"==(t=t.ch?et(t.line,"before"==t.sticky?t.ch-1:t.ch,"after"):t).sticky?et(t.line,t.ch+1,"before"):t)
for(var o=0;o<5;o++){var a=!1,s=Kn(e,t),c=n&&n!=t?Kn(e,n):s,l=Nr(e,i={left:Math.min(s.left,c.left),top:Math.min(s.top,c.top)-r,right:Math.max(s.left,c.left),bottom:Math.max(s.bottom,c.bottom)+r}),u=e.doc.scrollTop,f=e.doc.scrollLeft
if(null!=l.scrollTop&&(Fr(e,l.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(a=!0)),null!=l.scrollLeft&&(Rr(e,l.scrollLeft),Math.abs(e.doc.scrollLeft-f)>1&&(a=!0)),!a)break}return i}(t,st(r,e.scrollToPos.from),st(r,e.scrollToPos.to),e.scrollToPos.margin))
var i=e.maybeHiddenMarkers,o=e.maybeUnhiddenMarkers
if(i)for(var a=0;a<i.length;++a)i[a].lines.length||he(i[a],"hide")
if(o)for(var s=0;s<o.length;++s)o[s].lines.length&&he(o[s],"unhide")
n.wrapper.offsetHeight&&(r.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&he(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function $r(e,t){if(e.curOp)return t()
Gr(e)
try{return t()}finally{Kr(e)}}function ei(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
Gr(e)
try{return t.apply(e,arguments)}finally{Kr(e)}}}function ti(e){return function(){if(this.curOp)return e.apply(this,arguments)
Gr(this)
try{return e.apply(this,arguments)}finally{Kr(this)}}}function ni(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
Gr(t)
try{return e.apply(this,arguments)}finally{Kr(t)}}}function ri(e,t){e.doc.highlightFrontier<e.display.viewTo&&e.state.highlight.set(t,M(ii,e))}function ii(e){var t=e.doc
if(!(t.highlightFrontier>=e.display.viewTo)){var n=+new Date+e.options.workTime,r=dt(e,t.highlightFrontier),i=[]
t.iter(r.line,Math.min(t.first+t.size,e.display.viewTo+500),(function(o){if(r.line>=e.display.viewFrom){var a=o.styles,s=o.text.length>e.options.maxHighlightLength?ze(t.mode,r.state):null,c=ft(e,o,r,!0)
s&&(r.state=s),o.styles=c.styles
var l=o.styleClasses,u=c.classes
u?o.styleClasses=u:l&&(o.styleClasses=null)
for(var f=!a||a.length!=o.styles.length||l!=u&&(!l||!u||l.bgClass!=u.bgClass||l.textClass!=u.textClass),p=0;!f&&p<a.length;++p)f=a[p]!=o.styles[p]
f&&i.push(r.line),o.stateAfter=r.save(),r.nextLine()}else o.text.length<=e.options.maxHighlightLength&&ht(e,o.text,r),o.stateAfter=r.line%5==0?r.save():null,r.nextLine()
if(+new Date>n)return ri(e,e.options.workDelay),!0})),t.highlightFrontier=r.line,t.modeFrontier=Math.max(t.modeFrontier,r.line),i.length&&$r(e,(function(){for(var t=0;t<i.length;t++)pr(e,i[t],"text")}))}}var oi=function(e,t,n){var r=e.display
this.viewport=t,this.visible=Sr(r,e.doc,t),this.editorIsHidden=!r.wrapper.offsetWidth,this.wrapperHeight=r.wrapper.clientHeight,this.wrapperWidth=r.wrapper.clientWidth,this.oldDisplayWidth=_n(e),this.force=n,this.dims=or(e),this.events=[]}
function ai(e,t){var n=e.display,r=e.doc
if(t.editorIsHidden)return dr(e),!1
if(!t.force&&t.visible.from>=n.viewFrom&&t.visible.to<=n.viewTo&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo)&&n.renderedView==n.view&&0==mr(e))return!1
pi(e)&&(dr(e),t.dims=or(e))
var i=r.first+r.size,o=Math.max(t.visible.from-e.options.viewportMargin,r.first),a=Math.min(i,t.visible.to+e.options.viewportMargin)
n.viewFrom<o&&o-n.viewFrom<20&&(o=Math.max(r.first,n.viewFrom)),n.viewTo>a&&n.viewTo-a<20&&(a=Math.min(i,n.viewTo)),xt&&(o=Vt(e.doc,o),a=qt(e.doc,a))
var s=o!=n.viewFrom||a!=n.viewTo||n.lastWrapHeight!=t.wrapperHeight||n.lastWrapWidth!=t.wrapperWidth
!function(e,t,n){var r=e.display
0==r.view.length||t>=r.viewTo||n<=r.viewFrom?(r.view=on(e,t,n),r.viewFrom=t):(r.viewFrom>t?r.view=on(e,t,r.viewFrom).concat(r.view):r.viewFrom<t&&(r.view=r.view.slice(ur(e,t))),r.viewFrom=t,r.viewTo<n?r.view=r.view.concat(on(e,r.viewTo,n)):r.viewTo>n&&(r.view=r.view.slice(0,ur(e,n)))),r.viewTo=n}(e,o,a),n.viewOffset=Ut(Ge(e.doc,n.viewFrom)),e.display.mover.style.top=n.viewOffset+"px"
var l=mr(e)
if(!s&&0==l&&!t.force&&n.renderedView==n.view&&(null==n.updateLineNumbers||n.updateLineNumbers>=n.viewTo))return!1
var u=function(e){if(e.hasFocus())return null
var t=D()
if(!t||!j(e.display.lineDiv,t))return null
var n={activeElt:t}
if(window.getSelection){var r=window.getSelection()
r.anchorNode&&r.extend&&j(e.display.lineDiv,r.anchorNode)&&(n.anchorNode=r.anchorNode,n.anchorOffset=r.anchorOffset,n.focusNode=r.focusNode,n.focusOffset=r.focusOffset)}return n}(e)
return l>4&&(n.lineDiv.style.display="none"),function(e,t,n){var r=e.display,i=e.options.lineNumbers,o=r.lineDiv,a=o.firstChild
function s(t){var n=t.nextSibling
return c&&y&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),n}for(var l=r.view,u=r.viewFrom,f=0;f<l.length;f++){var p=l[f]
if(p.hidden);else if(p.node&&p.node.parentNode==o){for(;a!=p.node;)a=s(a)
var d=i&&null!=t&&t<=u&&p.lineNumber
p.changes&&(q(p.changes,"gutter")>-1&&(d=!1),un(e,p,u,n)),d&&(_(p.lineNumber),p.lineNumber.appendChild(document.createTextNode($e(e.options,u)))),a=p.node.nextSibling}else{var h=vn(e,p,u,n)
o.insertBefore(h,a)}u+=p.size}for(;a;)a=s(a)}(e,n.updateLineNumbers,t.dims),l>4&&(n.lineDiv.style.display=""),n.renderedView=n.view,function(e){if(e&&e.activeElt&&e.activeElt!=D()&&(e.activeElt.focus(),e.anchorNode&&j(document.body,e.anchorNode)&&j(document.body,e.focusNode))){var t=window.getSelection(),n=document.createRange()
n.setEnd(e.anchorNode,e.anchorOffset),n.collapse(!1),t.removeAllRanges(),t.addRange(n),t.extend(e.focusNode,e.focusOffset)}}(u),_(n.cursorDiv),_(n.selectionDiv),n.gutters.style.height=n.sizer.style.minHeight=0,s&&(n.lastWrapHeight=t.wrapperHeight,n.lastWrapWidth=t.wrapperWidth,ri(e,400)),n.updateLineNumbers=null,!0}function si(e,t){for(var n=t.viewport,r=!0;;r=!1){if(r&&e.options.lineWrapping&&t.oldDisplayWidth!=_n(e))r&&(t.visible=Sr(e.display,e.doc,n))
else if(n&&null!=n.top&&(n={top:Math.min(e.doc.height+En(e.display)-Sn(e),n.top)}),t.visible=Sr(e.display,e.doc,n),t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)break
if(!ai(e,t))break
Tr(e)
var i=Pr(e)
gr(e),Br(e,i),ui(e,i),t.force=!1}t.signal(e,"update",e),e.display.viewFrom==e.display.reportedViewFrom&&e.display.viewTo==e.display.reportedViewTo||(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function ci(e,t){var n=new oi(e,t)
if(ai(e,n)){Tr(e),si(e,n)
var r=Pr(e)
gr(e),Br(e,r),ui(e,r),n.finish()}}function li(e){var t=e.gutters.offsetWidth
e.sizer.style.marginLeft=t+"px"}function ui(e,t){e.display.sizer.style.minHeight=t.docHeight+"px",e.display.heightForcer.style.top=t.docHeight+"px",e.display.gutters.style.height=t.docHeight+e.display.barHeight+Tn(e)+"px"}function fi(e){var t=e.display,n=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var r=ar(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=r+"px",a=0;a<n.length;a++)if(!n[a].hidden){e.options.fixedGutter&&(n[a].gutter&&(n[a].gutter.style.left=o),n[a].gutterBackground&&(n[a].gutterBackground.style.left=o))
var s=n[a].alignable
if(s)for(var c=0;c<s.length;c++)s[c].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=r+i+"px")}}function pi(e){if(!e.options.lineNumbers)return!1
var t=e.doc,n=$e(e.options,t.first+t.size-1),r=e.display
if(n.length!=r.lineNumChars){var i=r.measure.appendChild(N("div",[N("div",n)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,a=i.offsetWidth-o
return r.lineGutter.style.width="",r.lineNumInnerWidth=Math.max(o,r.lineGutter.offsetWidth-a)+1,r.lineNumWidth=r.lineNumInnerWidth+a,r.lineNumChars=r.lineNumInnerWidth?n.length:-1,r.lineGutter.style.width=r.lineNumWidth+"px",li(e.display),!0}return!1}function di(e,t){for(var n=[],r=!1,i=0;i<e.length;i++){var o=e[i],a=null
if("string"!=typeof o&&(a=o.style,o=o.className),"CodeMirror-linenumbers"==o){if(!t)continue
r=!0}n.push({className:o,style:a})}return t&&!r&&n.push({className:"CodeMirror-linenumbers",style:null}),n}function hi(e){var t=e.gutters,n=e.gutterSpecs
_(t),e.lineGutter=null
for(var r=0;r<n.length;++r){var i=n[r],o=i.className,a=i.style,s=t.appendChild(N("div",null,"CodeMirror-gutter "+o))
a&&(s.style.cssText=a),"CodeMirror-linenumbers"==o&&(e.lineGutter=s,s.style.width=(e.lineNumWidth||1)+"px")}t.style.display=n.length?"":"none",li(e)}function mi(e){hi(e.display),fr(e),fi(e)}function gi(e,t,r,i){var o=this
this.input=r,o.scrollbarFiller=N("div",null,"CodeMirror-scrollbar-filler"),o.scrollbarFiller.setAttribute("cm-not-content","true"),o.gutterFiller=N("div",null,"CodeMirror-gutter-filler"),o.gutterFiller.setAttribute("cm-not-content","true"),o.lineDiv=A("div",null,"CodeMirror-code"),o.selectionDiv=N("div",null,null,"position: relative; z-index: 1"),o.cursorDiv=N("div",null,"CodeMirror-cursors"),o.measure=N("div",null,"CodeMirror-measure"),o.lineMeasure=N("div",null,"CodeMirror-measure"),o.lineSpace=A("div",[o.measure,o.lineMeasure,o.selectionDiv,o.cursorDiv,o.lineDiv],null,"position: relative; outline: none")
var l=A("div",[o.lineSpace],"CodeMirror-lines")
o.mover=N("div",[l],null,"position: relative"),o.sizer=N("div",[o.mover],"CodeMirror-sizer"),o.sizerWidth=null,o.heightForcer=N("div",null,null,"position: absolute; height: 30px; width: 1px;"),o.gutters=N("div",null,"CodeMirror-gutters"),o.lineGutter=null,o.scroller=N("div",[o.sizer,o.heightForcer,o.gutters],"CodeMirror-scroll"),o.scroller.setAttribute("tabIndex","-1"),o.wrapper=N("div",[o.scrollbarFiller,o.gutterFiller,o.scroller],"CodeMirror"),a&&s<8&&(o.gutters.style.zIndex=-1,o.scroller.style.paddingRight=0),c||n&&v||(o.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(o.wrapper):e(o.wrapper)),o.viewFrom=o.viewTo=t.first,o.reportedViewFrom=o.reportedViewTo=t.first,o.view=[],o.renderedView=null,o.externalMeasured=null,o.viewOffset=0,o.lastWrapHeight=o.lastWrapWidth=0,o.updateLineNumbers=null,o.nativeBarWidth=o.barHeight=o.barWidth=0,o.scrollbarsClipped=!1,o.lineNumWidth=o.lineNumInnerWidth=o.lineNumChars=null,o.alignWidgets=!1,o.cachedCharWidth=o.cachedTextHeight=o.cachedPaddingH=null,o.maxLine=null,o.maxLineLength=0,o.maxLineChanged=!1,o.wheelDX=o.wheelDY=o.wheelStartX=o.wheelStartY=null,o.shift=!1,o.selForContextMenu=null,o.activeTouch=null,o.gutterSpecs=di(i.gutters,i.lineNumbers),hi(o),r.init(o)}oi.prototype.signal=function(e,t){ve(e,t)&&this.events.push(arguments)},oi.prototype.finish=function(){for(var e=0;e<this.events.length;e++)he.apply(null,this.events[e])}
var vi=0,yi=null
function bi(e){var t=e.wheelDeltaX,n=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==n&&e.detail&&e.axis==e.VERTICAL_AXIS?n=e.detail:null==n&&(n=e.wheelDelta),{x:t,y:n}}function Oi(e){var t=bi(e)
return t.x*=yi,t.y*=yi,t}function wi(e,t){var r=bi(t),i=r.x,o=r.y,a=e.display,s=a.scroller,l=s.scrollWidth>s.clientWidth,u=s.scrollHeight>s.clientHeight
if(i&&l||o&&u){if(o&&y&&c)e:for(var p=t.target,d=a.view;p!=s;p=p.parentNode)for(var h=0;h<d.length;h++)if(d[h].node==p){e.display.currentWheelTarget=p
break e}if(i&&!n&&!f&&null!=yi)return o&&u&&Fr(e,Math.max(0,s.scrollTop+o*yi)),Rr(e,Math.max(0,s.scrollLeft+i*yi)),(!o||o&&u)&&be(t),void(a.wheelStartX=null)
if(o&&null!=yi){var m=o*yi,g=e.doc.scrollTop,v=g+a.wrapper.clientHeight
m<0?g=Math.max(0,g+m-50):v=Math.min(e.doc.height,v+m+50),ci(e,{top:g,bottom:v})}vi<20&&(null==a.wheelStartX?(a.wheelStartX=s.scrollLeft,a.wheelStartY=s.scrollTop,a.wheelDX=i,a.wheelDY=o,setTimeout((function(){if(null!=a.wheelStartX){var e=s.scrollLeft-a.wheelStartX,t=s.scrollTop-a.wheelStartY,n=t&&a.wheelDY&&t/a.wheelDY||e&&a.wheelDX&&e/a.wheelDX
a.wheelStartX=a.wheelStartY=null,n&&(yi=(yi*vi+n)/(vi+1),++vi)}}),200)):(a.wheelDX+=i,a.wheelDY+=o))}}a?yi=-.53:n?yi=15:u?yi=-.7:p&&(yi=-1/3)
var xi=function(e,t){this.ranges=e,this.primIndex=t}
xi.prototype.primary=function(){return this.ranges[this.primIndex]},xi.prototype.equals=function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var n=this.ranges[t],r=e.ranges[t]
if(!nt(n.anchor,r.anchor)||!nt(n.head,r.head))return!1}return!0},xi.prototype.deepCopy=function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new ki(rt(this.ranges[t].anchor),rt(this.ranges[t].head))
return new xi(e,this.primIndex)},xi.prototype.somethingSelected=function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},xi.prototype.contains=function(e,t){t||(t=e)
for(var n=0;n<this.ranges.length;n++){var r=this.ranges[n]
if(tt(t,r.from())>=0&&tt(e,r.to())<=0)return n}return-1}
var ki=function(e,t){this.anchor=e,this.head=t}
function Ei(e,t,n){var r=e&&e.options.selectionsMayTouch,i=t[n]
t.sort((function(e,t){return tt(e.from(),t.from())})),n=q(t,i)
for(var o=1;o<t.length;o++){var a=t[o],s=t[o-1],c=tt(s.to(),a.from())
if(r&&!a.empty()?c>0:c>=0){var l=ot(s.from(),a.from()),u=it(s.to(),a.to()),f=s.empty()?a.from()==a.head:s.from()==s.head
o<=n&&--n,t.splice(--o,2,new ki(f?u:l,f?l:u))}}return new xi(t,n)}function Ci(e,t){return new xi([new ki(e,t||e)],0)}function Ti(e){return e.text?et(e.from.line+e.text.length-1,Q(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}function _i(e,t){if(tt(e,t.from)<0)return e
if(tt(e,t.to)<=0)return Ti(t)
var n=e.line+t.text.length-(t.to.line-t.from.line)-1,r=e.ch
return e.line==t.to.line&&(r+=Ti(t).ch-t.to.ch),et(n,r)}function Si(e,t){for(var n=[],r=0;r<e.sel.ranges.length;r++){var i=e.sel.ranges[r]
n.push(new ki(_i(i.anchor,t),_i(i.head,t)))}return Ei(e.cm,n,e.sel.primIndex)}function Ni(e,t,n){return e.line==t.line?et(n.line,e.ch-t.ch+n.ch):et(n.line+(e.line-t.line),e.ch)}function Ai(e){e.doc.mode=Ve(e.options,e.doc.modeOption),ji(e)}function ji(e){e.doc.iter((function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)})),e.doc.modeFrontier=e.doc.highlightFrontier=e.doc.first,ri(e,100),e.state.modeGen++,e.curOp&&fr(e)}function Di(e,t){return 0==t.from.ch&&0==t.to.ch&&""==Q(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Li(e,t,n,r){function i(e){return n?n[e]:null}function o(e,n,i){!function(e,t,n,r){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),St(e),Nt(e,n)
var i=r?r(e):1
i!=e.height&&Ye(e,i)}(e,n,i,r),cn(e,"change",e,t)}function a(e,t){for(var n=[],o=e;o<t;++o)n.push(new Gt(l[o],i(o),r))
return n}var s=t.from,c=t.to,l=t.text,u=Ge(e,s.line),f=Ge(e,c.line),p=Q(l),d=i(l.length-1),h=c.line-s.line
if(t.full)e.insert(0,a(0,l.length)),e.remove(l.length,e.size-l.length)
else if(Di(e,t)){var m=a(0,l.length-1)
o(f,f.text,d),h&&e.remove(s.line,h),m.length&&e.insert(s.line,m)}else if(u==f)if(1==l.length)o(u,u.text.slice(0,s.ch)+p+u.text.slice(c.ch),d)
else{var g=a(1,l.length-1)
g.push(new Gt(p+u.text.slice(c.ch),d,r)),o(u,u.text.slice(0,s.ch)+l[0],i(0)),e.insert(s.line+1,g)}else if(1==l.length)o(u,u.text.slice(0,s.ch)+l[0]+f.text.slice(c.ch),i(0)),e.remove(s.line+1,h)
else{o(u,u.text.slice(0,s.ch)+l[0],i(0)),o(f,p+f.text.slice(c.ch),d)
var v=a(1,l.length-1)
h>1&&e.remove(s.line+1,h-1),e.insert(s.line+1,v)}cn(e,"change",e,t)}function Ii(e,t,n){!function e(r,i,o){if(r.linked)for(var a=0;a<r.linked.length;++a){var s=r.linked[a]
if(s.doc!=i){var c=o&&s.sharedHist
n&&!c||(t(s.doc,c),e(s.doc,r,c))}}}(e,null,!0)}function Fi(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,cr(e),Ai(e),Mi(e),e.options.lineWrapping||Wt(e),e.options.mode=t.modeOption,fr(e)}function Mi(e){("rtl"==e.doc.direction?L:T)(e.display.lineDiv,"CodeMirror-rtl")}function Ri(e){this.done=[],this.undone=[],this.undoDepth=Infinity,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function Pi(e,t){var n={from:rt(t.from),to:Ti(t),text:Ke(e,t.from,t.to)}
return Ui(e,n,t.from.line,t.to.line+1),Ii(e,(function(e){return Ui(e,n,t.from.line,t.to.line+1)}),!0),n}function Vi(e){for(;e.length&&Q(e).ranges;)e.pop()}function qi(e,t,n,r){var i=e.history
i.undone.length=0
var o,a,s=+new Date
if((i.lastOp==r||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&i.lastModTime>s-(e.cm?e.cm.options.historyEventDelay:500)||"*"==t.origin.charAt(0)))&&(o=function(e,t){return t?(Vi(e.done),Q(e.done)):e.done.length&&!Q(e.done).ranges?Q(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),Q(e.done)):void 0}(i,i.lastOp==r)))a=Q(o.changes),0==tt(t.from,t.to)&&0==tt(t.from,a.to)?a.to=Ti(t):o.changes.push(Pi(e,t))
else{var c=Q(i.done)
for(c&&c.ranges||zi(e.sel,i.done),o={changes:[Pi(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(n),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=s,i.lastOp=i.lastSelOp=r,i.lastOrigin=i.lastSelOrigin=t.origin,a||he(e,"historyAdded")}function Bi(e,t,n,r){var i=e.history,o=r&&r.origin
n==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||function(e,t,n,r){var i=t.charAt(0)
return"*"==i||"+"==i&&n.ranges.length==r.ranges.length&&n.somethingSelected()==r.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}(e,o,Q(i.done),t))?i.done[i.done.length-1]=t:zi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=n,r&&!1!==r.clearRedo&&Vi(i.undone)}function zi(e,t){var n=Q(t)
n&&n.ranges&&n.equals(e)||t.push(e)}function Ui(e,t,n,r){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,n),Math.min(e.first+e.size,r),(function(n){n.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=n.markedSpans),++o}))}function Hi(e){if(!e)return null
for(var t,n=0;n<e.length;++n)e[n].marker.explicitlyCleared?t||(t=e.slice(0,n)):t&&t.push(e[n])
return t?t.length?t:null:e}function Wi(e,t){var n=function(e,t){var n=t["spans_"+e.id]
if(!n)return null
for(var r=[],i=0;i<t.text.length;++i)r.push(Hi(n[i]))
return r}(e,t),r=Tt(e,t)
if(!n)return r
if(!r)return n
for(var i=0;i<n.length;++i){var o=n[i],a=r[i]
if(o&&a)e:for(var s=0;s<a.length;++s){for(var c=a[s],l=0;l<o.length;++l)if(o[l].marker==c.marker)continue e
o.push(c)}else a&&(n[i]=a)}return n}function Gi(e,t,n){for(var r=[],i=0;i<e.length;++i){var o=e[i]
if(o.ranges)r.push(n?xi.prototype.deepCopy.call(o):o)
else{var a=o.changes,s=[]
r.push({changes:s})
for(var c=0;c<a.length;++c){var l=a[c],u=void 0
if(s.push({from:l.from,to:l.to,text:l.text}),t)for(var f in l)(u=f.match(/^spans_(\d+)$/))&&q(t,Number(u[1]))>-1&&(Q(s)[f]=l[f],delete l[f])}}}return r}function Ki(e,t,n,r){if(r){var i=e.anchor
if(n){var o=tt(t,i)<0
o!=tt(n,i)<0?(i=t,t=n):o!=tt(t,n)<0&&(t=n)}return new ki(i,t)}return new ki(n||t,t)}function Qi(e,t,n,r,i){null==i&&(i=e.cm&&(e.cm.display.shift||e.extend)),$i(e,new xi([Ki(e.sel.primary(),t,n,i)],0),r)}function Yi(e,t,n){for(var r=[],i=e.cm&&(e.cm.display.shift||e.extend),o=0;o<e.sel.ranges.length;o++)r[o]=Ki(e.sel.ranges[o],t[o],null,i)
$i(e,Ei(e.cm,r,e.sel.primIndex),n)}function Ji(e,t,n,r){var i=e.sel.ranges.slice(0)
i[t]=n,$i(e,Ei(e.cm,i,e.sel.primIndex),r)}function Xi(e,t,n,r){$i(e,Ci(t,n),r)}function Zi(e,t,n){var r=e.history.done,i=Q(r)
i&&i.ranges?(r[r.length-1]=t,eo(e,t,n)):$i(e,t,n)}function $i(e,t,n){eo(e,t,n),Bi(e,e.sel,e.cm?e.cm.curOp.id:NaN,n)}function eo(e,t,n){(ve(e,"beforeSelectionChange")||e.cm&&ve(e.cm,"beforeSelectionChange"))&&(t=function(e,t,n){var r={ranges:t.ranges,update:function(t){this.ranges=[]
for(var n=0;n<t.length;n++)this.ranges[n]=new ki(st(e,t[n].anchor),st(e,t[n].head))},origin:n&&n.origin}
return he(e,"beforeSelectionChange",e,r),e.cm&&he(e.cm,"beforeSelectionChange",e.cm,r),r.ranges!=t.ranges?Ei(e.cm,r.ranges,r.ranges.length-1):t}(e,t,n))
var r=n&&n.bias||(tt(t.primary().head,e.sel.primary().head)<0?-1:1)
to(e,ro(e,t,r,!0)),n&&!1===n.scroll||!e.cm||jr(e.cm)}function to(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=1,e.cm.curOp.selectionChanged=!0,ge(e.cm)),cn(e,"cursorActivity",e))}function no(e){to(e,ro(e,e.sel,null,!1))}function ro(e,t,n,r){for(var i,o=0;o<t.ranges.length;o++){var a=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],c=oo(e,a.anchor,s&&s.anchor,n,r),l=oo(e,a.head,s&&s.head,n,r);(i||c!=a.anchor||l!=a.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new ki(c,l))}return i?Ei(e.cm,i,t.primIndex):t}function io(e,t,n,r,i){var o=Ge(e,t.line)
if(o.markedSpans)for(var a=0;a<o.markedSpans.length;++a){var s=o.markedSpans[a],c=s.marker,l="selectLeft"in c?!c.selectLeft:c.inclusiveLeft,u="selectRight"in c?!c.selectRight:c.inclusiveRight
if((null==s.from||(l?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(u?s.to>=t.ch:s.to>t.ch))){if(i&&(he(c,"beforeCursorEnter"),c.explicitlyCleared)){if(o.markedSpans){--a
continue}break}if(!c.atomic)continue
if(n){var f=c.find(r<0?1:-1),p=void 0
if((r<0?u:l)&&(f=ao(e,f,-r,f&&f.line==t.line?o:null)),f&&f.line==t.line&&(p=tt(f,n))&&(r<0?p<0:p>0))return io(e,f,t,r,i)}var d=c.find(r<0?-1:1)
return(r<0?l:u)&&(d=ao(e,d,r,d.line==t.line?o:null)),d?io(e,d,t,r,i):null}}return t}function oo(e,t,n,r,i){var o=r||1,a=io(e,t,n,o,i)||!i&&io(e,t,n,o,!0)||io(e,t,n,-o,i)||!i&&io(e,t,n,-o,!0)
return a||(e.cantEdit=!0,et(e.first,0))}function ao(e,t,n,r){return n<0&&0==t.ch?t.line>e.first?st(e,et(t.line-1)):null:n>0&&t.ch==(r||Ge(e,t.line)).text.length?t.line<e.first+e.size-1?et(t.line+1,0):null:new et(t.line,t.ch+n)}function so(e){e.setSelection(et(e.firstLine(),0),et(e.lastLine()),z)}function co(e,t,n){var r={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){return r.canceled=!0}}
return n&&(r.update=function(t,n,i,o){t&&(r.from=st(e,t)),n&&(r.to=st(e,n)),i&&(r.text=i),void 0!==o&&(r.origin=o)}),he(e,"beforeChange",e,r),e.cm&&he(e.cm,"beforeChange",e.cm,r),r.canceled?(e.cm&&(e.cm.curOp.updateInput=2),null):{from:r.from,to:r.to,text:r.text,origin:r.origin}}function lo(e,t,n){if(e.cm){if(!e.cm.curOp)return ei(e.cm,lo)(e,t,n)
if(e.cm.state.suppressEdits)return}if(!(ve(e,"beforeChange")||e.cm&&ve(e.cm,"beforeChange"))||(t=co(e,t,!0))){var r=wt&&!n&&function(e,t,n){var r=null
if(e.iter(t.line,n.line+1,(function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var n=e.markedSpans[t].marker
!n.readOnly||r&&-1!=q(r,n)||(r||(r=[])).push(n)}})),!r)return null
for(var i=[{from:t,to:n}],o=0;o<r.length;++o)for(var a=r[o],s=a.find(0),c=0;c<i.length;++c){var l=i[c]
if(!(tt(l.to,s.from)<0||tt(l.from,s.to)>0)){var u=[c,1],f=tt(l.from,s.from),p=tt(l.to,s.to);(f<0||!a.inclusiveLeft&&!f)&&u.push({from:l.from,to:s.from}),(p>0||!a.inclusiveRight&&!p)&&u.push({from:s.to,to:l.to}),i.splice.apply(i,u),c+=u.length-3}}return i}(e,t.from,t.to)
if(r)for(var i=r.length-1;i>=0;--i)uo(e,{from:r[i].from,to:r[i].to,text:i?[""]:t.text,origin:t.origin})
else uo(e,t)}}function uo(e,t){if(1!=t.text.length||""!=t.text[0]||0!=tt(t.from,t.to)){var n=Si(e,t)
qi(e,t,n,e.cm?e.cm.curOp.id:NaN),ho(e,t,n,Tt(e,t))
var r=[]
Ii(e,(function(e,n){n||-1!=q(r,e.history)||(yo(e.history,t),r.push(e.history)),ho(e,t,null,Tt(e,t))}))}}function fo(e,t,n){var r=e.cm&&e.cm.state.suppressEdits
if(!r||n){for(var i,o=e.history,a=e.sel,s="undo"==t?o.done:o.undone,c="undo"==t?o.undone:o.done,l=0;l<s.length&&(i=s[l],n?!i.ranges||i.equals(e.sel):i.ranges);l++);if(l!=s.length){for(o.lastOrigin=o.lastSelOrigin=null;;){if(!(i=s.pop()).ranges){if(r)return void s.push(i)
break}if(zi(i,c),n&&!i.equals(e.sel))return void $i(e,i,{clearRedo:!1})
a=i}var u=[]
zi(a,c),c.push({changes:u,generation:o.generation}),o.generation=i.generation||++o.maxGeneration
for(var f=ve(e,"beforeChange")||e.cm&&ve(e.cm,"beforeChange"),p=function(n){var r=i.changes[n]
if(r.origin=t,f&&!co(e,r,!1))return s.length=0,{}
u.push(Pi(e,r))
var o=n?Si(e,r):Q(s)
ho(e,r,o,Wi(e,r)),!n&&e.cm&&e.cm.scrollIntoView({from:r.from,to:Ti(r)})
var a=[]
Ii(e,(function(e,t){t||-1!=q(a,e.history)||(yo(e.history,r),a.push(e.history)),ho(e,r,null,Wi(e,r))}))},d=i.changes.length-1;d>=0;--d){var h=p(d)
if(h)return h.v}}}}function po(e,t){if(0!=t&&(e.first+=t,e.sel=new xi(Y(e.sel.ranges,(function(e){return new ki(et(e.anchor.line+t,e.anchor.ch),et(e.head.line+t,e.head.ch))})),e.sel.primIndex),e.cm)){fr(e.cm,e.first,e.first-t,t)
for(var n=e.cm.display,r=n.viewFrom;r<n.viewTo;r++)pr(e.cm,r,"gutter")}}function ho(e,t,n,r){if(e.cm&&!e.cm.curOp)return ei(e.cm,ho)(e,t,n,r)
if(t.to.line<e.first)po(e,t.text.length-1-(t.to.line-t.from.line))
else if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
po(e,i),t={from:et(e.first,0),to:et(t.to.line+i,t.to.ch),text:[Q(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:et(o,Ge(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Ke(e,t.from,t.to),n||(n=Si(e,t)),e.cm?function(e,t,n){var r=e.doc,i=e.display,o=t.from,a=t.to,s=!1,c=o.line
e.options.lineWrapping||(c=Je(Pt(Ge(r,o.line))),r.iter(c,a.line+1,(function(e){if(e==i.maxLine)return s=!0,!0}))),r.sel.contains(t.from,t.to)>-1&&ge(e),Li(r,t,n,sr(e)),e.options.lineWrapping||(r.iter(c,o.line+t.text.length,(function(e){var t=Ht(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,s=!1)})),s&&(e.curOp.updateMaxLine=!0)),function(e,t){if(e.modeFrontier=Math.min(e.modeFrontier,t),!(e.highlightFrontier<t-10)){for(var n=e.first,r=t-1;r>n;r--){var i=Ge(e,r).stateAfter
if(i&&(!(i instanceof lt)||r+i.lookAhead<t)){n=r+1
break}}e.highlightFrontier=Math.min(e.highlightFrontier,n)}}(r,o.line),ri(e,400)
var l=t.text.length-(a.line-o.line)-1
t.full?fr(e):o.line!=a.line||1!=t.text.length||Di(e.doc,t)?fr(e,o.line,a.line+1,l):pr(e,o.line,"text")
var u=ve(e,"changes"),f=ve(e,"change")
if(f||u){var p={from:o,to:a,text:t.text,removed:t.removed,origin:t.origin}
f&&cn(e,"change",e,p),u&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(p)}e.display.selForContextMenu=null}(e.cm,t,r):Li(e,t,r),eo(e,n,z),e.cantEdit&&oo(e,et(e.firstLine(),0))&&(e.cantEdit=!1)}}function mo(e,t,n,r,i){var o
r||(r=n),tt(r,n)<0&&(n=(o=[r,n])[0],r=o[1]),"string"==typeof t&&(t=e.splitLines(t)),lo(e,{from:n,to:r,text:t,origin:i})}function go(e,t,n,r){n<e.line?e.line+=r:t<e.line&&(e.line=t,e.ch=0)}function vo(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i],a=!0
if(o.ranges){o.copied||((o=e[i]=o.deepCopy()).copied=!0)
for(var s=0;s<o.ranges.length;s++)go(o.ranges[s].anchor,t,n,r),go(o.ranges[s].head,t,n,r)}else{for(var c=0;c<o.changes.length;++c){var l=o.changes[c]
if(n<l.from.line)l.from=et(l.from.line+r,l.from.ch),l.to=et(l.to.line+r,l.to.ch)
else if(t<=l.to.line){a=!1
break}}a||(e.splice(0,i+1),i=0)}}}function yo(e,t){var n=t.from.line,r=t.to.line,i=t.text.length-(r-n)-1
vo(e.done,n,r,i),vo(e.undone,n,r,i)}function bo(e,t,n,r){var i=t,o=t
return"number"==typeof t?o=Ge(e,at(e,t)):i=Je(t),null==i?null:(r(o,i)&&e.cm&&pr(e.cm,i,n),o)}function Oo(e){this.lines=e,this.parent=null
for(var t=0,n=0;n<e.length;++n)e[n].parent=this,t+=e[n].height
this.height=t}function wo(e){this.children=e
for(var t=0,n=0,r=0;r<e.length;++r){var i=e[r]
t+=i.chunkSize(),n+=i.height,i.parent=this}this.size=t,this.height=n,this.parent=null}ki.prototype.from=function(){return ot(this.anchor,this.head)},ki.prototype.to=function(){return it(this.anchor,this.head)},ki.prototype.empty=function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch},Oo.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var n=e,r=e+t;n<r;++n){var i=this.lines[n]
this.height-=i.height,Kt(i),cn(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,n){this.height+=n,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var r=0;r<t.length;++r)t[r].parent=this},iterN:function(e,t,n){for(var r=e+t;e<r;++e)if(n(this.lines[e]))return!0}},wo.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var n=0;n<this.children.length;++n){var r=this.children[n],i=r.chunkSize()
if(e<i){var o=Math.min(t,i-e),a=r.height
if(r.removeInner(e,o),this.height-=a-r.height,i==o&&(this.children.splice(n--,1),r.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof Oo))){var s=[]
this.collapse(s),this.children=[new Oo(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,n){this.size+=t.length,this.height+=n
for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(e<=o){if(i.insertInner(e,t,n),i.lines&&i.lines.length>50){for(var a=i.lines.length%25+25,s=a;s<i.lines.length;){var c=new Oo(i.lines.slice(s,s+=25))
i.height-=c.height,this.children.splice(++r,0,c),c.parent=this}i.lines=i.lines.slice(0,a),this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=new wo(e.children.splice(e.children.length-5,5))
if(e.parent){e.size-=t.size,e.height-=t.height
var n=q(e.parent.children,e)
e.parent.children.splice(n+1,0,t)}else{var r=new wo(e.children)
r.parent=e,e.children=[r,t],e=r}t.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,n){for(var r=0;r<this.children.length;++r){var i=this.children[r],o=i.chunkSize()
if(e<o){var a=Math.min(t,o-e)
if(i.iterN(e,a,n))return!0
if(0==(t-=a))break
e=0}else e-=o}}}
var xo=function(e,t,n){if(n)for(var r in n)n.hasOwnProperty(r)&&(this[r]=n[r])
this.doc=e,this.node=t}
function ko(e,t,n){Ut(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&Ar(e,n)}xo.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,n=this.line,r=Je(n)
if(null!=r&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(n.widgets=null)
var o=wn(this)
Ye(n,Math.max(0,n.height-o)),e&&($r(e,(function(){ko(e,n,-o),pr(e,r,"widget")})),cn(e,"lineWidgetCleared",e,this,r))}},xo.prototype.changed=function(){var e=this,t=this.height,n=this.doc.cm,r=this.line
this.height=null
var i=wn(this)-t
i&&(Bt(this.doc,r)||Ye(r,r.height+i),n&&$r(n,(function(){n.curOp.forceUpdate=!0,ko(n,r,i),cn(n,"lineWidgetChanged",n,e,Je(r))})))},ye(xo)
var Eo=0,Co=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++Eo}
function To(e,t,n,r,i){if(r&&r.shared)return function(e,t,n,r,i){(r=R(r)).shared=!1
var o=[To(e,t,n,r,i)],a=o[0],s=r.widgetNode
return Ii(e,(function(e){s&&(r.widgetNode=s.cloneNode(!0)),o.push(To(e,st(e,t),st(e,n),r,i))
for(var c=0;c<e.linked.length;++c)if(e.linked[c].isParent)return
a=Q(o)})),new _o(o,a)}(e,t,n,r,i)
if(e.cm&&!e.cm.curOp)return ei(e.cm,To)(e,t,n,r,i)
var o=new Co(e,i),a=tt(t,n)
if(r&&R(r,o,!1),a>0||0==a&&!1!==o.clearWhenEmpty)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=A("span",[o.replacedWith],"CodeMirror-widget"),r.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),r.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(Rt(e,t.line,t,n,o)||t.line!=n.line&&Rt(e,n.line,t,n,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
xt=!0}o.addToHistory&&qi(e,{from:t,to:n,origin:"markText"},e.sel,NaN)
var s,c=t.line,l=e.cm
if(e.iter(c,n.line+1,(function(e){l&&o.collapsed&&!l.options.lineWrapping&&Pt(e)==l.display.maxLine&&(s=!0),o.collapsed&&c!=t.line&&Ye(e,0),function(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}(e,new kt(o,c==t.line?t.ch:null,c==n.line?n.ch:null)),++c})),o.collapsed&&e.iter(t.line,n.line+1,(function(t){Bt(e,t)&&Ye(t,0)})),o.clearOnEnter&&fe(o,"beforeCursorEnter",(function(){return o.clear()})),o.readOnly&&(wt=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++Eo,o.atomic=!0),l){if(s&&(l.curOp.updateMaxLine=!0),o.collapsed)fr(l,t.line,n.line+1)
else if(o.className||o.startStyle||o.endStyle||o.css||o.attributes||o.title)for(var u=t.line;u<=n.line;u++)pr(l,u,"text")
o.atomic&&no(l.doc),cn(l,"markerAdded",l,o)}return o}Co.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&Gr(e),ve(this,"clear")){var n=this.find()
n&&cn(this,"clear",n.from,n.to)}for(var r=null,i=null,o=0;o<this.lines.length;++o){var a=this.lines[o],s=Et(a.markedSpans,this)
e&&!this.collapsed?pr(e,Je(a),"text"):e&&(null!=s.to&&(i=Je(a)),null!=s.from&&(r=Je(a))),a.markedSpans=Ct(a.markedSpans,s),null==s.from&&this.collapsed&&!Bt(this.doc,a)&&e&&Ye(a,rr(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var c=0;c<this.lines.length;++c){var l=Pt(this.lines[c]),u=Ht(l)
u>e.display.maxLineLength&&(e.display.maxLine=l,e.display.maxLineLength=u,e.display.maxLineChanged=!0)}null!=r&&e&&this.collapsed&&fr(e,r,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&no(e.doc)),e&&cn(e,"markerCleared",e,this,r,i),t&&Kr(e),this.parent&&this.parent.clear()}},Co.prototype.find=function(e,t){var n,r
null==e&&"bookmark"==this.type&&(e=1)
for(var i=0;i<this.lines.length;++i){var o=this.lines[i],a=Et(o.markedSpans,this)
if(null!=a.from&&(n=et(t?o:Je(o),a.from),-1==e))return n
if(null!=a.to&&(r=et(t?o:Je(o),a.to),1==e))return r}return n&&{from:n,to:r}},Co.prototype.changed=function(){var e=this,t=this.find(-1,!0),n=this,r=this.doc.cm
t&&r&&$r(r,(function(){var i=t.line,o=Je(t.line),a=jn(r,o)
if(a&&(Pn(a),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!Bt(n.doc,i)&&null!=n.height){var s=n.height
n.height=null
var c=wn(n)-s
c&&Ye(i,i.height+c)}cn(r,"markerChanged",r,e)}))},Co.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=q(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},Co.prototype.detachLine=function(e){if(this.lines.splice(q(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}},ye(Co)
var _o=function(e,t){this.markers=e,this.primary=t
for(var n=0;n<e.length;++n)e[n].parent=this}
function So(e){return e.findMarks(et(e.first,0),e.clipPos(et(e.lastLine())),(function(e){return e.parent}))}function No(e){for(var t=function(t){var n=e[t],r=[n.primary.doc]
Ii(n.primary.doc,(function(e){return r.push(e)}))
for(var i=0;i<n.markers.length;i++){var o=n.markers[i];-1==q(r,o.doc)&&(o.parent=null,n.markers.splice(i--,1))}},n=0;n<e.length;n++)t(n)}_o.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
cn(this,"clear")}},_o.prototype.find=function(e,t){return this.primary.find(e,t)},ye(_o)
var Ao=0,jo=function(e,t,n,r,i){if(!(this instanceof jo))return new jo(e,t,n,r,i)
null==n&&(n=0),wo.call(this,[new Oo([new Gt("",null)])]),this.first=n,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.modeFrontier=this.highlightFrontier=n
var o=et(n,0)
this.sel=Ci(o),this.history=new Ri(null),this.id=++Ao,this.modeOption=t,this.lineSep=r,this.direction="rtl"==i?"rtl":"ltr",this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Li(this,{from:o,to:o,text:e}),$i(this,Ci(o),z)}
jo.prototype=X(wo.prototype,{constructor:jo,iter:function(e,t,n){n?this.iterN(e-this.first,t-e,n):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var n=0,r=0;r<t.length;++r)n+=t[r].height
this.insertInner(e-this.first,t,n)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Qe(this,this.first,this.first+this.size)
return!1===e?t:t.join(e||this.lineSeparator())},setValue:ni((function(e){var t=et(this.first,0),n=this.first+this.size-1
lo(this,{from:t,to:et(n,Ge(this,n).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),this.cm&&Dr(this.cm,0,0),$i(this,Ci(t),z)})),replaceRange:function(e,t,n,r){mo(this,e,t=st(this,t),n=n?st(this,n):t,r)},getRange:function(e,t,n){var r=Ke(this,st(this,e),st(this,t))
return!1===n?r:r.join(n||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){if(Ze(this,e))return Ge(this,e)},getLineNumber:function(e){return Je(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=Ge(this,e)),Pt(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return st(this,e)},getCursor:function(e){var t=this.sel.primary()
return null==e||"head"==e?t.head:"anchor"==e?t.anchor:"end"==e||"to"==e||!1===e?t.to():t.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:ni((function(e,t,n){Xi(this,st(this,"number"==typeof e?et(e,t||0):e),null,n)})),setSelection:ni((function(e,t,n){Xi(this,st(this,e),st(this,t||e),n)})),extendSelection:ni((function(e,t,n){Qi(this,st(this,e),t&&st(this,t),n)})),extendSelections:ni((function(e,t){Yi(this,ct(this,e),t)})),extendSelectionsBy:ni((function(e,t){Yi(this,ct(this,Y(this.sel.ranges,e)),t)})),setSelections:ni((function(e,t,n){if(e.length){for(var r=[],i=0;i<e.length;i++)r[i]=new ki(st(this,e[i].anchor),st(this,e[i].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),$i(this,Ei(this.cm,r,t),n)}})),addSelection:ni((function(e,t,n){var r=this.sel.ranges.slice(0)
r.push(new ki(st(this,e),st(this,t||e))),$i(this,Ei(this.cm,r,r.length-1),n)})),getSelection:function(e){for(var t,n=this.sel.ranges,r=0;r<n.length;r++){var i=Ke(this,n[r].from(),n[r].to())
t=t?t.concat(i):i}return!1===e?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],n=this.sel.ranges,r=0;r<n.length;r++){var i=Ke(this,n[r].from(),n[r].to())
!1!==e&&(i=i.join(e||this.lineSeparator())),t[r]=i}return t},replaceSelection:function(e,t,n){for(var r=[],i=0;i<this.sel.ranges.length;i++)r[i]=e
this.replaceSelections(r,t,n||"+input")},replaceSelections:ni((function(e,t,n){for(var r=[],i=this.sel,o=0;o<i.ranges.length;o++){var a=i.ranges[o]
r[o]={from:a.from(),to:a.to(),text:this.splitLines(e[o]),origin:n}}for(var s=t&&"end"!=t&&function(e,t,n){for(var r=[],i=et(e.first,0),o=i,a=0;a<t.length;a++){var s=t[a],c=Ni(s.from,i,o),l=Ni(Ti(s),i,o)
if(i=s.to,o=l,"around"==n){var u=e.sel.ranges[a],f=tt(u.head,u.anchor)<0
r[a]=new ki(f?l:c,f?c:l)}else r[a]=new ki(c,c)}return new xi(r,e.sel.primIndex)}(this,r,t),c=r.length-1;c>=0;c--)lo(this,r[c])
s?Zi(this,s):this.cm&&jr(this.cm)})),undo:ni((function(){fo(this,"undo")})),redo:ni((function(){fo(this,"redo")})),undoSelection:ni((function(){fo(this,"undo",!0)})),redoSelection:ni((function(){fo(this,"redo",!0)})),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,n=0,r=0;r<e.done.length;r++)e.done[r].ranges||++t
for(var i=0;i<e.undone.length;i++)e.undone[i].ranges||++n
return{undo:t,redo:n}},clearHistory:function(){var e=this
this.history=new Ri(this.history.maxGeneration),Ii(this,(function(t){return t.history=e.history}),!0)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:Gi(this.history.done),undone:Gi(this.history.undone)}},setHistory:function(e){var t=this.history=new Ri(this.history.maxGeneration)
t.done=Gi(e.done.slice(0),null,!0),t.undone=Gi(e.undone.slice(0),null,!0)},setGutterMarker:ni((function(e,t,n){return bo(this,e,"gutter",(function(e){var r=e.gutterMarkers||(e.gutterMarkers={})
return r[t]=n,!n&&te(r)&&(e.gutterMarkers=null),!0}))})),clearGutter:ni((function(e){var t=this
this.iter((function(n){n.gutterMarkers&&n.gutterMarkers[e]&&bo(t,n,"gutter",(function(){return n.gutterMarkers[e]=null,te(n.gutterMarkers)&&(n.gutterMarkers=null),!0}))}))})),lineInfo:function(e){var t
if("number"==typeof e){if(!Ze(this,e))return null
if(t=e,!(e=Ge(this,e)))return null}else if(null==(t=Je(e)))return null
return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},addLineClass:ni((function(e,t,n){return bo(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass"
if(e[r]){if(E(n).test(e[r]))return!1
e[r]+=" "+n}else e[r]=n
return!0}))})),removeLineClass:ni((function(e,t,n){return bo(this,e,"gutter"==t?"gutter":"class",(function(e){var r="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[r]
if(!i)return!1
if(null==n)e[r]=null
else{var o=i.match(E(n))
if(!o)return!1
var a=o.index+o[0].length
e[r]=i.slice(0,o.index)+(o.index&&a!=i.length?" ":"")+i.slice(a)||null}return!0}))})),addLineWidget:ni((function(e,t,n){return function(e,t,n,r){var i=new xo(e,n,r),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),bo(e,t,"widget",(function(t){var n=t.widgets||(t.widgets=[])
if(null==i.insertAt?n.push(i):n.splice(Math.min(n.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!Bt(e,t)){var r=Ut(t)<e.scrollTop
Ye(t,t.height+wn(i)),r&&Ar(o,i.height),o.curOp.forceUpdate=!0}return!0})),o&&cn(o,"lineWidgetAdded",o,i,"number"==typeof t?t:Je(t)),i}(this,e,t,n)})),removeLineWidget:function(e){e.clear()},markText:function(e,t,n){return To(this,st(this,e),st(this,t),n,n&&n.type||"range")},setBookmark:function(e,t){var n={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return To(this,e=st(this,e),e,n,"bookmark")},findMarksAt:function(e){var t=[],n=Ge(this,(e=st(this,e)).line).markedSpans
if(n)for(var r=0;r<n.length;++r){var i=n[r];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,n){e=st(this,e),t=st(this,t)
var r=[],i=e.line
return this.iter(e.line,t.line+1,(function(o){var a=o.markedSpans
if(a)for(var s=0;s<a.length;s++){var c=a[s]
null!=c.to&&i==e.line&&e.ch>=c.to||null==c.from&&i!=e.line||null!=c.from&&i==t.line&&c.from>=t.ch||n&&!n(c.marker)||r.push(c.marker.parent||c.marker)}++i})),r},getAllMarks:function(){var e=[]
return this.iter((function(t){var n=t.markedSpans
if(n)for(var r=0;r<n.length;++r)null!=n[r].from&&e.push(n[r].marker)})),e},posFromIndex:function(e){var t,n=this.first,r=this.lineSeparator().length
return this.iter((function(i){var o=i.text.length+r
if(o>e)return t=e,!0
e-=o,++n})),st(this,et(n,t))},indexFromPos:function(e){var t=(e=st(this,e)).ch
if(e.line<this.first||e.ch<0)return 0
var n=this.lineSeparator().length
return this.iter(this.first,e.line,(function(e){t+=e.text.length+n})),t},copy:function(e){var t=new jo(Qe(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,n=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<n&&(n=e.to)
var r=new jo(Qe(this,t,n),e.mode||this.modeOption,t,this.lineSep,this.direction)
return e.sharedHist&&(r.history=this.history),(this.linked||(this.linked=[])).push({doc:r,sharedHist:e.sharedHist}),r.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.find(),o=e.clipPos(i.from),a=e.clipPos(i.to)
if(tt(o,a)){var s=To(e,o,a,r.primary,r.primary.type)
r.markers.push(s),s.parent=r}}}(r,So(this)),r},unlinkDoc:function(e){if(e instanceof _a&&(e=e.doc),this.linked)for(var t=0;t<this.linked.length;++t)if(this.linked[t].doc==e){this.linked.splice(t,1),e.unlinkDoc(this),No(So(this))
break}if(e.history==this.history){var n=[e.id]
Ii(e,(function(e){return n.push(e.id)}),!0),e.history=new Ri(null),e.history.done=Gi(this.history.done,n),e.history.undone=Gi(this.history.undone,n)}},iterLinkedDocs:function(e){Ii(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):je(e)},lineSeparator:function(){return this.lineSep||"\n"},setDirection:ni((function(e){var t
"rtl"!=e&&(e="ltr"),e!=this.direction&&(this.direction=e,this.iter((function(e){return e.order=null})),this.cm&&$r(t=this.cm,(function(){Mi(t),fr(t)})))}))}),jo.prototype.eachLine=jo.prototype.iter
var Do=0
function Lo(e){var t=this
if(Io(t),!me(t,e)&&!xn(t.display,e)){be(e),a&&(Do=+new Date)
var n=lr(t,e,!0),r=e.dataTransfer.files
if(n&&!t.isReadOnly())if(r&&r.length&&window.FileReader&&window.File)for(var i=r.length,o=Array(i),s=0,c=function(){++s==i&&ei(t,(function(){var e={from:n=st(t.doc,n),to:n,text:t.doc.splitLines(o.filter((function(e){return null!=e})).join(t.doc.lineSeparator())),origin:"paste"}
lo(t.doc,e),Zi(t.doc,Ci(st(t.doc,n),st(t.doc,Ti(e))))}))()},l=function(e,n){if(t.options.allowDropFileTypes&&-1==q(t.options.allowDropFileTypes,e.type))c()
else{var r=new FileReader
r.onerror=function(){return c()},r.onload=function(){var e=r.result;/[\x00-\x08\x0e-\x1f]{2}/.test(e)||(o[n]=e),c()},r.readAsText(e)}},u=0;u<r.length;u++)l(r[u],u)
else{if(t.state.draggingText&&t.doc.sel.contains(n)>-1)return t.state.draggingText(e),void setTimeout((function(){return t.display.input.focus()}),20)
try{var f=e.dataTransfer.getData("Text")
if(f){var p
if(t.state.draggingText&&!t.state.draggingText.copy&&(p=t.listSelections()),eo(t.doc,Ci(n,n)),p)for(var d=0;d<p.length;++d)mo(t.doc,"",p[d].anchor,p[d].head,"drag")
t.replaceSelection(f,"around","paste"),t.display.input.focus()}}catch(e){}}}}function Io(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function Fo(e){if(document.getElementsByClassName){for(var t=document.getElementsByClassName("CodeMirror"),n=[],r=0;r<t.length;r++){var i=t[r].CodeMirror
i&&n.push(i)}n.length&&n[0].operation((function(){for(var t=0;t<n.length;t++)e(n[t])}))}}var Mo=!1
function Ro(){var e
Mo||(fe(window,"resize",(function(){null==e&&(e=setTimeout((function(){e=null,Fo(Po)}),100))})),fe(window,"blur",(function(){return Fo(Cr)})),Mo=!0)}function Po(e){var t=e.display
t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize()}for(var Vo={3:"Pause",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",145:"ScrollLock",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"},qo=0;qo<10;qo++)Vo[qo+48]=Vo[qo+96]=String(qo)
for(var Bo=65;Bo<=90;Bo++)Vo[Bo]=String.fromCharCode(Bo)
for(var zo=1;zo<=12;zo++)Vo[zo+111]=Vo[zo+63235]="F"+zo
var Uo={}
function Ho(e){var t,n,r,i,o=e.split(/-(?!$)/)
e=o[o.length-1]
for(var a=0;a<o.length-1;a++){var s=o[a]
if(/^(cmd|meta|m)$/i.test(s))i=!0
else if(/^a(lt)?$/i.test(s))t=!0
else if(/^(c|ctrl|control)$/i.test(s))n=!0
else{if(!/^s(hift)?$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
r=!0}}return t&&(e="Alt-"+e),n&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),r&&(e="Shift-"+e),e}function Wo(e){var t={}
for(var n in e)if(e.hasOwnProperty(n)){var r=e[n]
if(/^(name|fallthrough|(de|at)tach)$/.test(n))continue
if("..."==r){delete e[n]
continue}for(var i=Y(n.split(" "),Ho),o=0;o<i.length;o++){var a=void 0,s=void 0
o==i.length-1?(s=i.join(" "),a=r):(s=i.slice(0,o+1).join(" "),a="...")
var c=t[s]
if(c){if(c!=a)throw new Error("Inconsistent bindings for "+s)}else t[s]=a}delete e[n]}for(var l in t)e[l]=t[l]
return e}function Go(e,t,n,r){var i=(t=Jo(t)).call?t.call(e,r):t[e]
if(!1===i)return"nothing"
if("..."===i)return"multi"
if(null!=i&&n(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return Go(e,t.fallthrough,n,r)
for(var o=0;o<t.fallthrough.length;o++){var a=Go(e,t.fallthrough[o],n,r)
if(a)return a}}}function Ko(e){var t="string"==typeof e?e:Vo[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t}function Qo(e,t,n){var r=e
return t.altKey&&"Alt"!=r&&(e="Alt-"+e),(x?t.metaKey:t.ctrlKey)&&"Ctrl"!=r&&(e="Ctrl-"+e),(x?t.ctrlKey:t.metaKey)&&"Cmd"!=r&&(e="Cmd-"+e),!n&&t.shiftKey&&"Shift"!=r&&(e="Shift-"+e),e}function Yo(e,t){if(f&&34==e.keyCode&&e.char)return!1
var n=Vo[e.keyCode]
return null!=n&&!e.altGraphKey&&(3==e.keyCode&&e.code&&(n=e.code),Qo(n,e,t))}function Jo(e){return"string"==typeof e?Uo[e]:e}function Xo(e,t){for(var n=e.doc.sel.ranges,r=[],i=0;i<n.length;i++){for(var o=t(n[i]);r.length&&tt(o.from,Q(r).to)<=0;){var a=r.pop()
if(tt(a.from,o.from)<0){o.from=a.from
break}}r.push(o)}$r(e,(function(){for(var t=r.length-1;t>=0;t--)mo(e.doc,"",r[t].from,r[t].to,"+delete")
jr(e)}))}function Zo(e,t,n){var r=ie(e.text,t+n,n)
return r<0||r>e.text.length?null:r}function $o(e,t,n){var r=Zo(e,t.ch,n)
return null==r?null:new et(t.line,r,n<0?"after":"before")}function ea(e,t,n,r,i){if(e){"rtl"==t.doc.direction&&(i=-i)
var o=le(n,t.doc.direction)
if(o){var a,s=i<0?Q(o):o[0],c=i<0==(1==s.level)?"after":"before"
if(s.level>0||"rtl"==t.doc.direction){var l=Dn(t,n)
a=i<0?n.text.length-1:0
var u=Ln(t,l,a).top
a=oe((function(e){return Ln(t,l,e).top==u}),i<0==(1==s.level)?s.from:s.to-1,a),"before"==c&&(a=Zo(n,a,1))}else a=i<0?s.to:s.from
return new et(r,a,c)}}return new et(r,i<0?n.text.length:0,i<0?"before":"after")}Uo.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},Uo.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},Uo.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars","Ctrl-O":"openLine"},Uo.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},Uo.default=y?Uo.macDefault:Uo.pcDefault
var ta={selectAll:so,singleSelection:function(e){return e.setSelection(e.getCursor("anchor"),e.getCursor("head"),z)},killLine:function(e){return Xo(e,(function(t){if(t.empty()){var n=Ge(e.doc,t.head.line).text.length
return t.head.ch==n&&t.head.line<e.lastLine()?{from:t.head,to:et(t.head.line+1,0)}:{from:t.head,to:et(t.head.line,n)}}return{from:t.from(),to:t.to()}}))},deleteLine:function(e){return Xo(e,(function(t){return{from:et(t.from().line,0),to:st(e.doc,et(t.to().line+1,0))}}))},delLineLeft:function(e){return Xo(e,(function(e){return{from:et(e.from().line,0),to:e.from()}}))},delWrappedLineLeft:function(e){return Xo(e,(function(t){var n=e.charCoords(t.head,"div").top+5
return{from:e.coordsChar({left:0,top:n},"div"),to:t.from()}}))},delWrappedLineRight:function(e){return Xo(e,(function(t){var n=e.charCoords(t.head,"div").top+5,r=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")
return{from:t.from(),to:r}}))},undo:function(e){return e.undo()},redo:function(e){return e.redo()},undoSelection:function(e){return e.undoSelection()},redoSelection:function(e){return e.redoSelection()},goDocStart:function(e){return e.extendSelection(et(e.firstLine(),0))},goDocEnd:function(e){return e.extendSelection(et(e.lastLine()))},goLineStart:function(e){return e.extendSelectionsBy((function(t){return na(e,t.head.line)}),{origin:"+move",bias:1})},goLineStartSmart:function(e){return e.extendSelectionsBy((function(t){return ra(e,t.head)}),{origin:"+move",bias:1})},goLineEnd:function(e){return e.extendSelectionsBy((function(t){return function(e,t){var n=Ge(e.doc,t),r=function(e){for(var t;t=Ft(e);)e=t.find(1,!0).line
return e}(n)
return r!=n&&(t=Je(r)),ea(!0,e,n,t,-1)}(e,t.head.line)}),{origin:"+move",bias:-1})},goLineRight:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:n},"div")}),H)},goLineLeft:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:n},"div")}),H)},goLineLeftSmart:function(e){return e.extendSelectionsBy((function(t){var n=e.cursorCoords(t.head,"div").top+5,r=e.coordsChar({left:0,top:n},"div")
return r.ch<e.getLine(r.line).search(/\S/)?ra(e,t.head):r}),H)},goLineUp:function(e){return e.moveV(-1,"line")},goLineDown:function(e){return e.moveV(1,"line")},goPageUp:function(e){return e.moveV(-1,"page")},goPageDown:function(e){return e.moveV(1,"page")},goCharLeft:function(e){return e.moveH(-1,"char")},goCharRight:function(e){return e.moveH(1,"char")},goColumnLeft:function(e){return e.moveH(-1,"column")},goColumnRight:function(e){return e.moveH(1,"column")},goWordLeft:function(e){return e.moveH(-1,"word")},goGroupRight:function(e){return e.moveH(1,"group")},goGroupLeft:function(e){return e.moveH(-1,"group")},goWordRight:function(e){return e.moveH(1,"word")},delCharBefore:function(e){return e.deleteH(-1,"char")},delCharAfter:function(e){return e.deleteH(1,"char")},delWordBefore:function(e){return e.deleteH(-1,"word")},delWordAfter:function(e){return e.deleteH(1,"word")},delGroupBefore:function(e){return e.deleteH(-1,"group")},delGroupAfter:function(e){return e.deleteH(1,"group")},indentAuto:function(e){return e.indentSelection("smart")},indentMore:function(e){return e.indentSelection("add")},indentLess:function(e){return e.indentSelection("subtract")},insertTab:function(e){return e.replaceSelection("\t")},insertSoftTab:function(e){for(var t=[],n=e.listSelections(),r=e.options.tabSize,i=0;i<n.length;i++){var o=n[i].from(),a=P(e.getLine(o.line),o.ch,r)
t.push(K(r-a%r))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){return $r(e,(function(){for(var t=e.listSelections(),n=[],r=0;r<t.length;r++)if(t[r].empty()){var i=t[r].head,o=Ge(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new et(i.line,i.ch-1)),i.ch>0)i=new et(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),et(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var a=Ge(e.doc,i.line-1).text
a&&(i=new et(i.line,1),e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+a.charAt(a.length-1),et(i.line-1,a.length-1),i,"+transpose"))}n.push(new ki(i,i))}e.setSelections(n)}))},newlineAndIndent:function(e){return $r(e,(function(){for(var t=e.listSelections(),n=t.length-1;n>=0;n--)e.replaceRange(e.doc.lineSeparator(),t[n].anchor,t[n].head,"+input")
t=e.listSelections()
for(var r=0;r<t.length;r++)e.indentLine(t[r].from().line,null,!0)
jr(e)}))},openLine:function(e){return e.replaceSelection("\n","start")},toggleOverwrite:function(e){return e.toggleOverwrite()}}
function na(e,t){var n=Ge(e.doc,t),r=Pt(n)
return r!=n&&(t=Je(r)),ea(!0,e,r,t,1)}function ra(e,t){var n=na(e,t.line),r=Ge(e.doc,n.line),i=le(r,e.doc.direction)
if(!i||0==i[0].level){var o=Math.max(n.ch,r.text.search(/\S/)),a=t.line==n.line&&t.ch<=o&&t.ch
return et(n.line,a?0:o,n.sticky)}return n}function ia(e,t,n){if("string"==typeof t&&!(t=ta[t]))return!1
e.display.input.ensurePolled()
var r=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),n&&(e.display.shift=!1),i=t(e)!=B}finally{e.display.shift=r,e.state.suppressEdits=!1}return i}var oa=new V
function aa(e,t,n,r){var i=e.state.keySeq
if(i){if(Ko(t))return"handled"
if(/\'$/.test(t)?e.state.keySeq=null:oa.set(50,(function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())})),sa(e,i+" "+t,n,r))return!0}return sa(e,t,n,r)}function sa(e,t,n,r){var i=function(e,t,n){for(var r=0;r<e.state.keyMaps.length;r++){var i=Go(t,e.state.keyMaps[r],n,e)
if(i)return i}return e.options.extraKeys&&Go(t,e.options.extraKeys,n,e)||Go(t,e.options.keyMap,n,e)}(e,t,r)
return"multi"==i&&(e.state.keySeq=t),"handled"==i&&cn(e,"keyHandled",e,t,n),"handled"!=i&&"multi"!=i||(be(n),wr(e)),!!i}function ca(e,t){var n=Yo(t,!0)
return!!n&&(t.shiftKey&&!e.state.keySeq?aa(e,"Shift-"+n,t,(function(t){return ia(e,t,!0)}))||aa(e,n,t,(function(t){if("string"==typeof t?/^go[A-Z]/.test(t):t.motion)return ia(e,t)})):aa(e,n,t,(function(t){return ia(e,t)})))}var la=null
function ua(e){var t=this
if(t.curOp.focus=D(),!me(t,e)){a&&s<11&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var i=ca(t,e)
f&&(la=i?r:null,i||88!=r||Le||!(y?e.metaKey:e.ctrlKey)||t.replaceSelection("",null,"cut")),n&&!y&&!i&&46==r&&e.shiftKey&&!e.ctrlKey&&document.execCommand&&document.execCommand("cut"),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||function(e){var t=e.display.lineDiv
function n(e){18!=e.keyCode&&e.altKey||(T(t,"CodeMirror-crosshair"),de(document,"keyup",n),de(document,"mouseover",n))}L(t,"CodeMirror-crosshair"),fe(document,"keyup",n),fe(document,"mouseover",n)}(t)}}function fa(e){16==e.keyCode&&(this.doc.sel.shift=!1),me(this,e)}function pa(e){var t=this
if(!(xn(t.display,e)||me(t,e)||e.ctrlKey&&!e.altKey||y&&e.metaKey)){var n=e.keyCode,r=e.charCode
if(f&&n==la)return la=null,void be(e)
if(!f||e.which&&!(e.which<10)||!ca(t,e)){var i=String.fromCharCode(null==r?n:r)
"\b"!=i&&(function(e,t,n){return aa(e,"'"+n+"'",t,(function(t){return ia(e,t,!0)}))}(t,e,i)||t.display.input.onKeyPress(e))}}}var da,ha,ma=function(e,t,n){this.time=e,this.pos=t,this.button=n}
function ga(e){var t=this,n=t.display
if(!(me(t,e)||n.activeTouch&&n.input.supportsTouch()))if(n.input.ensurePolled(),n.shift=e.shiftKey,xn(n,e))c||(n.scroller.draggable=!1,setTimeout((function(){return n.scroller.draggable=!0}),100))
else if(!ba(t,e)){var r=lr(t,e),i=Ee(e),o=r?function(e,t){var n=+new Date
return ha&&ha.compare(n,e,t)?(da=ha=null,"triple"):da&&da.compare(n,e,t)?(ha=new ma(n,e,t),da=null,"double"):(da=new ma(n,e,t),ha=null,"single")}(r,i):"single"
window.focus(),1==i&&t.state.selectingText&&t.state.selectingText(e),r&&function(e,t,n,r,i){var o="Click"
return"double"==r?o="Double"+o:"triple"==r&&(o="Triple"+o),aa(e,Qo(o=(1==t?"Left":2==t?"Middle":"Right")+o,i),i,(function(t){if("string"==typeof t&&(t=ta[t]),!t)return!1
var r=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r=t(e,n)!=B}finally{e.state.suppressEdits=!1}return r}))}(t,i,r,o,e)||(1==i?r?function(e,t,n,r){a?setTimeout(M(xr,e),0):e.curOp.focus=D()
var i,o=function(e,t,n){var r=e.getOption("configureMouse"),i=r?r(e,t,n):{}
if(null==i.unit){var o=b?n.shiftKey&&n.metaKey:n.altKey
i.unit=o?"rectangle":"single"==t?"char":"double"==t?"word":"line"}return(null==i.extend||e.doc.extend)&&(i.extend=e.doc.extend||n.shiftKey),null==i.addNew&&(i.addNew=y?n.metaKey:n.ctrlKey),null==i.moveOnDrag&&(i.moveOnDrag=!(y?n.altKey:n.ctrlKey)),i}(e,n,r),l=e.doc.sel
e.options.dragDrop&&_e&&!e.isReadOnly()&&"single"==n&&(i=l.contains(t))>-1&&(tt((i=l.ranges[i]).from(),t)<0||t.xRel>0)&&(tt(i.to(),t)>0||t.xRel<0)?function(e,t,n,r){var i=e.display,o=!1,l=ei(e,(function(t){c&&(i.scroller.draggable=!1),e.state.draggingText=!1,de(i.wrapper.ownerDocument,"mouseup",l),de(i.wrapper.ownerDocument,"mousemove",u),de(i.scroller,"dragstart",f),de(i.scroller,"drop",l),o||(be(t),r.addNew||Qi(e.doc,n,null,null,r.extend),c||a&&9==s?setTimeout((function(){i.wrapper.ownerDocument.body.focus(),i.input.focus()}),20):i.input.focus())})),u=function(e){o=o||Math.abs(t.clientX-e.clientX)+Math.abs(t.clientY-e.clientY)>=10},f=function(){return o=!0}
c&&(i.scroller.draggable=!0),e.state.draggingText=l,l.copy=!r.moveOnDrag,i.scroller.dragDrop&&i.scroller.dragDrop(),fe(i.wrapper.ownerDocument,"mouseup",l),fe(i.wrapper.ownerDocument,"mousemove",u),fe(i.scroller,"dragstart",f),fe(i.scroller,"drop",l),kr(e),setTimeout((function(){return i.input.focus()}),20)}(e,r,t,o):function(e,t,n,r){var i=e.display,o=e.doc
be(t)
var a,s,c=o.sel,l=c.ranges
if(r.addNew&&!r.extend?(s=o.sel.contains(n),a=s>-1?l[s]:new ki(n,n)):(a=o.sel.primary(),s=o.sel.primIndex),"rectangle"==r.unit)r.addNew||(a=new ki(n,n)),n=lr(e,t,!0,!0),s=-1
else{var u=va(e,n,r.unit)
a=r.extend?Ki(a,u.anchor,u.head,r.extend):u}r.addNew?-1==s?(s=l.length,$i(o,Ei(e,l.concat([a]),s),{scroll:!1,origin:"*mouse"})):l.length>1&&l[s].empty()&&"char"==r.unit&&!r.extend?($i(o,Ei(e,l.slice(0,s).concat(l.slice(s+1)),0),{scroll:!1,origin:"*mouse"}),c=o.sel):Ji(o,s,a,U):(s=0,$i(o,new xi([a],0),U),c=o.sel)
var f=n
function p(t){if(0!=tt(f,t))if(f=t,"rectangle"==r.unit){for(var i=[],l=e.options.tabSize,u=P(Ge(o,n.line).text,n.ch,l),p=P(Ge(o,t.line).text,t.ch,l),d=Math.min(u,p),h=Math.max(u,p),m=Math.min(n.line,t.line),g=Math.min(e.lastLine(),Math.max(n.line,t.line));m<=g;m++){var v=Ge(o,m).text,y=W(v,d,l)
d==h?i.push(new ki(et(m,y),et(m,y))):v.length>y&&i.push(new ki(et(m,y),et(m,W(v,h,l))))}i.length||i.push(new ki(n,n)),$i(o,Ei(e,c.ranges.slice(0,s).concat(i),s),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b,O=a,w=va(e,t,r.unit),x=O.anchor
tt(w.anchor,x)>0?(b=w.head,x=ot(O.from(),w.anchor)):(b=w.anchor,x=it(O.to(),w.head))
var k=c.ranges.slice(0)
k[s]=function(e,t){var n=t.anchor,r=t.head,i=Ge(e.doc,n.line)
if(0==tt(n,r)&&n.sticky==r.sticky)return t
var o=le(i)
if(!o)return t
var a=se(o,n.ch,n.sticky),s=o[a]
if(s.from!=n.ch&&s.to!=n.ch)return t
var c,l=a+(s.from==n.ch==(1!=s.level)?0:1)
if(0==l||l==o.length)return t
if(r.line!=n.line)c=(r.line-n.line)*("ltr"==e.doc.direction?1:-1)>0
else{var u=se(o,r.ch,r.sticky),f=u-a||(r.ch-n.ch)*(1==s.level?-1:1)
c=u==l-1||u==l?f<0:f>0}var p=o[l+(c?-1:0)],d=c==(1==p.level),h=d?p.from:p.to,m=d?"after":"before"
return n.ch==h&&n.sticky==m?t:new ki(new et(n.line,h,m),r)}(e,new ki(st(o,x),b)),$i(o,Ei(e,k,s),U)}}var d=i.wrapper.getBoundingClientRect(),h=0
function m(t){e.state.selectingText=!1,h=Infinity,t&&(be(t),i.input.focus()),de(i.wrapper.ownerDocument,"mousemove",g),de(i.wrapper.ownerDocument,"mouseup",v),o.history.lastSelOrigin=null}var g=ei(e,(function(t){0!==t.buttons&&Ee(t)?function t(n){var a=++h,s=lr(e,n,!0,"rectangle"==r.unit)
if(s)if(0!=tt(s,f)){e.curOp.focus=D(),p(s)
var c=Sr(i,o);(s.line>=c.to||s.line<c.from)&&setTimeout(ei(e,(function(){h==a&&t(n)})),150)}else{var l=n.clientY<d.top?-20:n.clientY>d.bottom?20:0
l&&setTimeout(ei(e,(function(){h==a&&(i.scroller.scrollTop+=l,t(n))})),50)}}(t):m(t)})),v=ei(e,m)
e.state.selectingText=v,fe(i.wrapper.ownerDocument,"mousemove",g),fe(i.wrapper.ownerDocument,"mouseup",v)}(e,r,t,o)}(t,r,o,e):ke(e)==n.scroller&&be(e):2==i?(r&&Qi(t.doc,r),setTimeout((function(){return n.input.focus()}),20)):3==i&&(k?t.display.input.onContextMenu(e):kr(t)))}}function va(e,t,n){if("char"==n)return new ki(t,t)
if("word"==n)return e.findWordAt(t)
if("line"==n)return new ki(et(t.line,0),st(e.doc,et(t.line+1,0)))
var r=n(e,t)
return new ki(r.from,r.to)}function ya(e,t,n,r){var i,o
if(t.touches)i=t.touches[0].clientX,o=t.touches[0].clientY
else try{i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
r&&be(t)
var a=e.display,s=a.lineDiv.getBoundingClientRect()
if(o>s.bottom||!ve(e,n))return we(t)
o-=s.top-a.viewOffset
for(var c=0;c<e.display.gutterSpecs.length;++c){var l=a.gutters.childNodes[c]
if(l&&l.getBoundingClientRect().right>=i)return he(e,n,e,Xe(e.doc,o),e.display.gutterSpecs[c].className,t),we(t)}}function ba(e,t){return ya(e,t,"gutterClick",!0)}function Oa(e,t){xn(e.display,t)||function(e,t){return!!ve(e,"gutterContextMenu")&&ya(e,t,"gutterContextMenu",!1)}(e,t)||me(e,t,"contextmenu")||k||e.display.input.onContextMenu(t)}function wa(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),qn(e)}ma.prototype.compare=function(e,t,n){return this.time+400>e&&0==tt(t,this.pos)&&n==this.button}
var xa={toString:function(){return"CodeMirror.Init"}},ka={},Ea={}
function Ca(e,t,n){if(!t!=!(n&&n!=xa)){var r=e.display.dragFunctions,i=t?fe:de
i(e.display.scroller,"dragstart",r.start),i(e.display.scroller,"dragenter",r.enter),i(e.display.scroller,"dragover",r.over),i(e.display.scroller,"dragleave",r.leave),i(e.display.scroller,"drop",r.drop)}}function Ta(e){e.options.lineWrapping?(L(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):(T(e.display.wrapper,"CodeMirror-wrap"),Wt(e)),cr(e),fr(e),qn(e),setTimeout((function(){return Br(e)}),100)}function _a(e,t){var n=this
if(!(this instanceof _a))return new _a(e,t)
this.options=t=t?R(t):{},R(ka,t,!1)
var r=t.value
"string"==typeof r?r=new jo(r,t.mode,null,t.lineSeparator,t.direction):t.mode&&(r.modeOption=t.mode),this.doc=r
var i=new _a.inputStyles[t.inputStyle](this),o=this.display=new gi(e,r,i,t)
for(var l in o.wrapper.CodeMirror=this,wa(this),t.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),Hr(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:-1,cutIncoming:-1,selectingText:!1,draggingText:!1,highlight:new V,keySeq:null,specialChars:null},t.autofocus&&!v&&o.input.focus(),a&&s<11&&setTimeout((function(){return n.display.input.reset(!0)}),20),function(e){var t=e.display
fe(t.scroller,"mousedown",ei(e,ga)),fe(t.scroller,"dblclick",a&&s<11?ei(e,(function(t){if(!me(e,t)){var n=lr(e,t)
if(n&&!ba(e,t)&&!xn(e.display,t)){be(t)
var r=e.findWordAt(n)
Qi(e.doc,r.anchor,r.head)}}})):function(t){return me(e,t)||be(t)}),fe(t.scroller,"contextmenu",(function(t){return Oa(e,t)})),fe(t.input.getField(),"contextmenu",(function(n){t.scroller.contains(n.target)||Oa(e,n)}))
var n,r={end:0}
function i(){t.activeTouch&&(n=setTimeout((function(){return t.activeTouch=null}),1e3),(r=t.activeTouch).end=+new Date)}function o(e,t){if(null==t.left)return!0
var n=t.left-e.left,r=t.top-e.top
return n*n+r*r>400}fe(t.scroller,"touchstart",(function(i){if(!me(e,i)&&!function(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}(i)&&!ba(e,i)){t.input.ensurePolled(),clearTimeout(n)
var o=+new Date
t.activeTouch={start:o,moved:!1,prev:o-r.end<=300?r:null},1==i.touches.length&&(t.activeTouch.left=i.touches[0].pageX,t.activeTouch.top=i.touches[0].pageY)}})),fe(t.scroller,"touchmove",(function(){t.activeTouch&&(t.activeTouch.moved=!0)})),fe(t.scroller,"touchend",(function(n){var r=t.activeTouch
if(r&&!xn(t,n)&&null!=r.left&&!r.moved&&new Date-r.start<300){var a,s=e.coordsChar(t.activeTouch,"page")
a=!r.prev||o(r,r.prev)?new ki(s,s):!r.prev.prev||o(r,r.prev.prev)?e.findWordAt(s):new ki(et(s.line,0),st(e.doc,et(s.line+1,0))),e.setSelection(a.anchor,a.head),e.focus(),be(n)}i()})),fe(t.scroller,"touchcancel",i),fe(t.scroller,"scroll",(function(){t.scroller.clientHeight&&(Fr(e,t.scroller.scrollTop),Rr(e,t.scroller.scrollLeft,!0),he(e,"scroll",e))})),fe(t.scroller,"mousewheel",(function(t){return wi(e,t)})),fe(t.scroller,"DOMMouseScroll",(function(t){return wi(e,t)})),fe(t.wrapper,"scroll",(function(){return t.wrapper.scrollTop=t.wrapper.scrollLeft=0})),t.dragFunctions={enter:function(t){me(e,t)||xe(t)},over:function(t){me(e,t)||(function(e,t){var n=lr(e,t)
if(n){var r=document.createDocumentFragment()
yr(e,n,r),e.display.dragCursor||(e.display.dragCursor=N("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),S(e.display.dragCursor,r)}}(e,t),xe(t))},start:function(t){return function(e,t){if(a&&(!e.state.draggingText||+new Date-Do<100))xe(t)
else if(!me(e,t)&&!xn(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.effectAllowed="copyMove",t.dataTransfer.setDragImage&&!p)){var n=N("img",null,null,"position: fixed; left: 0; top: 0;")
n.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",f&&(n.width=n.height=1,e.display.wrapper.appendChild(n),n._top=n.offsetTop),t.dataTransfer.setDragImage(n,0,0),f&&n.parentNode.removeChild(n)}}(e,t)},drop:ei(e,Lo),leave:function(t){me(e,t)||Io(e)}}
var c=t.input.getField()
fe(c,"keyup",(function(t){return fa.call(e,t)})),fe(c,"keydown",ei(e,ua)),fe(c,"keypress",ei(e,pa)),fe(c,"focus",(function(t){return Er(e,t)})),fe(c,"blur",(function(t){return Cr(e,t)}))}(this),Ro(),Gr(this),this.curOp.forceUpdate=!0,Fi(this,r),t.autofocus&&!v||this.hasFocus()?setTimeout(M(Er,this),20):Cr(this),Ea)Ea.hasOwnProperty(l)&&Ea[l](this,t[l],xa)
pi(this),t.finishInit&&t.finishInit(this)
for(var u=0;u<Sa.length;++u)Sa[u](this)
Kr(this),c&&t.lineWrapping&&"optimizelegibility"==getComputedStyle(o.lineDiv).textRendering&&(o.lineDiv.style.textRendering="auto")}_a.defaults=ka,_a.optionHandlers=Ea
var Sa=[]
function Na(e,t,n,r){var i,o=e.doc
null==n&&(n="add"),"smart"==n&&(o.mode.indent?i=dt(e,t).state:n="prev")
var a=e.options.tabSize,s=Ge(o,t),c=P(s.text,null,a)
s.stateAfter&&(s.stateAfter=null)
var l,u=s.text.match(/^\s*/)[0]
if(r||/\S/.test(s.text)){if("smart"==n&&((l=o.mode.indent(i,s.text.slice(u.length),s.text))==B||l>150)){if(!r)return
n="prev"}}else l=0,n="not"
"prev"==n?l=t>o.first?P(Ge(o,t-1).text,null,a):0:"add"==n?l=c+e.options.indentUnit:"subtract"==n?l=c-e.options.indentUnit:"number"==typeof n&&(l=c+n),l=Math.max(0,l)
var f="",p=0
if(e.options.indentWithTabs)for(var d=Math.floor(l/a);d;--d)p+=a,f+="\t"
if(p<l&&(f+=K(l-p)),f!=u)return mo(o,f,et(t,0),et(t,u.length),"+input"),s.stateAfter=null,!0
for(var h=0;h<o.sel.ranges.length;h++){var m=o.sel.ranges[h]
if(m.head.line==t&&m.head.ch<u.length){var g=et(t,u.length)
Ji(o,h,new ki(g,g))
break}}}_a.defineInitHook=function(e){return Sa.push(e)}
var Aa=null
function ja(e){Aa=e}function Da(e,t,n,r,i){var o=e.doc
e.display.shift=!1,r||(r=o.sel)
var a=+new Date-200,s="paste"==i||e.state.pasteIncoming>a,c=je(t),l=null
if(s&&r.ranges.length>1)if(Aa&&Aa.text.join("\n")==t){if(r.ranges.length%Aa.text.length==0){l=[]
for(var u=0;u<Aa.text.length;u++)l.push(o.splitLines(Aa.text[u]))}}else c.length==r.ranges.length&&e.options.pasteLinesPerSelection&&(l=Y(c,(function(e){return[e]})))
for(var f=e.curOp.updateInput,p=r.ranges.length-1;p>=0;p--){var d=r.ranges[p],h=d.from(),m=d.to()
d.empty()&&(n&&n>0?h=et(h.line,h.ch-n):e.state.overwrite&&!s?m=et(m.line,Math.min(Ge(o,m.line).text.length,m.ch+Q(c).length)):s&&Aa&&Aa.lineWise&&Aa.text.join("\n")==t&&(h=m=et(h.line,0)))
var g={from:h,to:m,text:l?l[p%l.length]:c,origin:i||(s?"paste":e.state.cutIncoming>a?"cut":"+input")}
lo(e.doc,g),cn(e,"inputRead",e,g)}t&&!s&&Ia(e,t),jr(e),e.curOp.updateInput<2&&(e.curOp.updateInput=f),e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=-1}function La(e,t){var n=e.clipboardData&&e.clipboardData.getData("Text")
if(n)return e.preventDefault(),t.isReadOnly()||t.options.disableInput||$r(t,(function(){return Da(t,n,0,null,"paste")})),!0}function Ia(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var n=e.doc.sel,r=n.ranges.length-1;r>=0;r--){var i=n.ranges[r]
if(!(i.head.ch>100||r&&n.ranges[r-1].head.line==i.head.line)){var o=e.getModeAt(i.head),a=!1
if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){a=Na(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(Ge(e.doc,i.head.line).text.slice(0,i.head.ch))&&(a=Na(e,i.head.line,"smart"))
a&&cn(e,"electricInput",e,i.head.line)}}}function Fa(e){for(var t=[],n=[],r=0;r<e.doc.sel.ranges.length;r++){var i=e.doc.sel.ranges[r].head.line,o={anchor:et(i,0),head:et(i+1,0)}
n.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:n}}function Ma(e,t,n,r){e.setAttribute("autocorrect",n?"":"off"),e.setAttribute("autocapitalize",r?"":"off"),e.setAttribute("spellcheck",!!t)}function Ra(){var e=N("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),t=N("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return c?e.style.width="1000px":e.setAttribute("wrap","off"),m&&(e.style.border="1px solid black"),Ma(e),t}function Pa(e,t,n,r,i){var o=t,a=n,s=Ge(e,t.line),c=i&&"rtl"==e.direction?-n:n
function l(r){var o,a
if(null==(o=i?function(e,t,n,r){var i=le(t,e.doc.direction)
if(!i)return $o(t,n,r)
n.ch>=t.text.length?(n.ch=t.text.length,n.sticky="before"):n.ch<=0&&(n.ch=0,n.sticky="after")
var o=se(i,n.ch,n.sticky),a=i[o]
if("ltr"==e.doc.direction&&a.level%2==0&&(r>0?a.to>n.ch:a.from<n.ch))return $o(t,n,r)
var s,c=function(e,n){return Zo(t,e instanceof et?e.ch:e,n)},l=function(n){return e.options.lineWrapping?(s=s||Dn(e,t),Zn(e,t,s,n)):{begin:0,end:t.text.length}},u=l("before"==n.sticky?c(n,-1):n.ch)
if("rtl"==e.doc.direction||1==a.level){var f=1==a.level==r<0,p=c(n,f?1:-1)
if(null!=p&&(f?p<=a.to&&p<=u.end:p>=a.from&&p>=u.begin)){var d=f?"before":"after"
return new et(n.line,p,d)}}var h=function(e,t,r){for(var o=function(e,t){return t?new et(n.line,c(e,1),"before"):new et(n.line,e,"after")};e>=0&&e<i.length;e+=t){var a=i[e],s=t>0==(1!=a.level),l=s?r.begin:c(r.end,-1)
if(a.from<=l&&l<a.to)return o(l,s)
if(l=s?a.from:c(a.to,-1),r.begin<=l&&l<r.end)return o(l,s)}},m=h(o+r,r,u)
if(m)return m
var g=r>0?u.end:c(u.begin,-1)
return null==g||r>0&&g==t.text.length||!(m=h(r>0?0:i.length-1,r,l(g)))?null:m}(e.cm,s,t,n):$o(s,t,n))){if(r||(a=t.line+c)<e.first||a>=e.first+e.size||(t=new et(a,t.ch,t.sticky),!(s=Ge(e,a))))return!1
t=ea(i,e.cm,s,t.line,c)}else t=o
return!0}if("char"==r)l()
else if("column"==r)l(!0)
else if("word"==r||"group"==r)for(var u=null,f="group"==r,p=e.cm&&e.cm.getHelper(t,"wordChars"),d=!0;!(n<0)||l(!d);d=!1){var h=s.text.charAt(t.ch)||"\n",m=ee(h,p)?"w":f&&"\n"==h?"n":!f||/\s/.test(h)?null:"p"
if(!f||d||m||(m="s"),u&&u!=m){n<0&&(n=1,l(),t.sticky="after")
break}if(m&&(u=m),n>0&&!l(!d))break}var g=oo(e,t,o,a,!0)
return nt(o,g)&&(g.hitSide=!0),g}function Va(e,t,n,r){var i,o,a=e.doc,s=t.left
if("page"==r){var c=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),l=Math.max(c-.5*rr(e.display),3)
i=(n>0?t.bottom:t.top)+n*l}else"line"==r&&(i=n>0?t.bottom+3:t.top-3)
for(;(o=Jn(e,s,i)).outside;){if(n<0?i<=0:i>=a.height){o.hitSide=!0
break}i+=5*n}return o}var qa=function(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new V,this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null}
function Ba(e,t){var n=jn(e,t.line)
if(!n||n.hidden)return null
var r=Ge(e.doc,t.line),i=Nn(n,r,t.line),o=le(r,e.doc.direction),a="left"
o&&(a=se(o,t.ch)%2?"right":"left")
var s=Mn(i.map,t.ch,a)
return s.offset="right"==s.collapse?s.end:s.start,s}function za(e,t){return t&&(e.bad=!0),e}function Ua(e,t,n){var r
if(t==e.display.lineDiv){if(!(r=e.display.lineDiv.childNodes[n]))return za(e.clipPos(et(e.display.viewTo-1)),!0)
t=null,n=0}else for(r=t;;r=r.parentNode){if(!r||r==e.display.lineDiv)return null
if(r.parentNode&&r.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==r)return Ha(o,t,n)}}function Ha(e,t,n){var r=e.text.firstChild,i=!1
if(!t||!j(r,t))return za(et(Je(e.line),0),!0)
if(t==r&&(i=!0,t=r.childNodes[n],n=0,!t)){var o=e.rest?Q(e.rest):e.line
return za(et(Je(o),o.text.length),i)}var a=3==t.nodeType?t:null,s=t
for(a||1!=t.childNodes.length||3!=t.firstChild.nodeType||(a=t.firstChild,n&&(n=a.nodeValue.length));s.parentNode!=r;)s=s.parentNode
var c=e.measure,l=c.maps
function u(t,n,r){for(var i=-1;i<(l?l.length:0);i++)for(var o=i<0?c.map:l[i],a=0;a<o.length;a+=3){var s=o[a+2]
if(s==t||s==n){var u=Je(i<0?e.line:e.rest[i]),f=o[a]+r
return(r<0||s!=t)&&(f=o[a+(r?1:0)]),et(u,f)}}}var f=u(a,s,n)
if(f)return za(f,i)
for(var p=s.nextSibling,d=a?a.nodeValue.length-n:0;p;p=p.nextSibling){if(f=u(p,p.firstChild,0))return za(et(f.line,f.ch-d),i)
d+=p.textContent.length}for(var h=s.previousSibling,m=n;h;h=h.previousSibling){if(f=u(h,h.firstChild,-1))return za(et(f.line,f.ch+m),i)
m+=h.textContent.length}}qa.prototype.init=function(e){var t=this,n=this,r=n.cm,i=n.div=e.lineDiv
function o(e){if(!me(r,e)){if(r.somethingSelected())ja({lineWise:!1,text:r.getSelections()}),"cut"==e.type&&r.replaceSelection("",null,"cut")
else{if(!r.options.lineWiseCopyCut)return
var t=Fa(r)
ja({lineWise:!0,text:t.text}),"cut"==e.type&&r.operation((function(){r.setSelections(t.ranges,0,z),r.replaceSelection("",null,"cut")}))}if(e.clipboardData){e.clipboardData.clearData()
var o=Aa.text.join("\n")
if(e.clipboardData.setData("Text",o),e.clipboardData.getData("Text")==o)return void e.preventDefault()}var a=Ra(),s=a.firstChild
r.display.lineSpace.insertBefore(a,r.display.lineSpace.firstChild),s.value=Aa.text.join("\n")
var c=document.activeElement
F(s),setTimeout((function(){r.display.lineSpace.removeChild(a),c.focus(),c==i&&n.showPrimarySelection()}),50)}}Ma(i,r.options.spellcheck,r.options.autocorrect,r.options.autocapitalize),fe(i,"paste",(function(e){me(r,e)||La(e,r)||s<=11&&setTimeout(ei(r,(function(){return t.updateFromDOM()})),20)})),fe(i,"compositionstart",(function(e){t.composing={data:e.data,done:!1}})),fe(i,"compositionupdate",(function(e){t.composing||(t.composing={data:e.data,done:!1})})),fe(i,"compositionend",(function(e){t.composing&&(e.data!=t.composing.data&&t.readFromDOMSoon(),t.composing.done=!0)})),fe(i,"touchstart",(function(){return n.forceCompositionEnd()})),fe(i,"input",(function(){t.composing||t.readFromDOMSoon()})),fe(i,"copy",o),fe(i,"cut",o)},qa.prototype.prepareSelection=function(){var e=vr(this.cm,!1)
return e.focus=document.activeElement==this.div,e},qa.prototype.showSelection=function(e,t){e&&this.cm.display.view.length&&((e.focus||t)&&this.showPrimarySelection(),this.showMultipleSelections(e))},qa.prototype.getSelection=function(){return this.cm.display.wrapper.ownerDocument.getSelection()},qa.prototype.showPrimarySelection=function(){var e=this.getSelection(),t=this.cm,r=t.doc.sel.primary(),i=r.from(),o=r.to()
if(t.display.viewTo==t.display.viewFrom||i.line>=t.display.viewTo||o.line<t.display.viewFrom)e.removeAllRanges()
else{var a=Ua(t,e.anchorNode,e.anchorOffset),s=Ua(t,e.focusNode,e.focusOffset)
if(!a||a.bad||!s||s.bad||0!=tt(ot(a,s),i)||0!=tt(it(a,s),o)){var c=t.display.view,l=i.line>=t.display.viewFrom&&Ba(t,i)||{node:c[0].measure.map[2],offset:0},u=o.line<t.display.viewTo&&Ba(t,o)
if(!u){var f=c[c.length-1].measure,p=f.maps?f.maps[f.maps.length-1]:f.map
u={node:p[p.length-1],offset:p[p.length-2]-p[p.length-3]}}if(l&&u){var d,h=e.rangeCount&&e.getRangeAt(0)
try{d=C(l.node,l.offset,u.offset,u.node)}catch(e){}d&&(!n&&t.state.focused?(e.collapse(l.node,l.offset),d.collapsed||(e.removeAllRanges(),e.addRange(d))):(e.removeAllRanges(),e.addRange(d)),h&&null==e.anchorNode?e.addRange(h):n&&this.startGracePeriod()),this.rememberSelection()}else e.removeAllRanges()}}},qa.prototype.startGracePeriod=function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout((function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation((function(){return e.cm.curOp.selectionChanged=!0}))}),20)},qa.prototype.showMultipleSelections=function(e){S(this.cm.display.cursorDiv,e.cursors),S(this.cm.display.selectionDiv,e.selection)},qa.prototype.rememberSelection=function(){var e=this.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},qa.prototype.selectionInEditor=function(){var e=this.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return j(this.div,t)},qa.prototype.focus=function(){"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()&&document.activeElement==this.div||this.showSelection(this.prepareSelection(),!0),this.div.focus())},qa.prototype.blur=function(){this.div.blur()},qa.prototype.getField=function(){return this.div},qa.prototype.supportsTouch=function(){return!0},qa.prototype.receivedFocus=function(){var e=this
this.selectionInEditor()?this.pollSelection():$r(this.cm,(function(){return e.cm.curOp.selectionChanged=!0})),this.polling.set(this.cm.options.pollInterval,(function t(){e.cm.state.focused&&(e.pollSelection(),e.polling.set(e.cm.options.pollInterval,t))}))},qa.prototype.selectionChanged=function(){var e=this.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},qa.prototype.pollSelection=function(){if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){var e=this.getSelection(),t=this.cm
if(g&&u&&this.cm.display.gutterSpecs.length&&function(e){for(var t=e;t;t=t.parentNode)if(/CodeMirror-gutter-wrapper/.test(t.className))return!0
return!1}(e.anchorNode))return this.cm.triggerOnKeyDown({type:"keydown",keyCode:8,preventDefault:Math.abs}),this.blur(),void this.focus()
if(!this.composing){this.rememberSelection()
var n=Ua(t,e.anchorNode,e.anchorOffset),r=Ua(t,e.focusNode,e.focusOffset)
n&&r&&$r(t,(function(){$i(t.doc,Ci(n,r),z),(n.bad||r.bad)&&(t.curOp.selectionChanged=!0)}))}}},qa.prototype.pollContent=function(){null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),this.readDOMTimeout=null)
var e,t,n,r=this.cm,i=r.display,o=r.doc.sel.primary(),a=o.from(),s=o.to()
if(0==a.ch&&a.line>r.firstLine()&&(a=et(a.line-1,Ge(r.doc,a.line-1).length)),s.ch==Ge(r.doc,s.line).text.length&&s.line<r.lastLine()&&(s=et(s.line+1,0)),a.line<i.viewFrom||s.line>i.viewTo-1)return!1
a.line==i.viewFrom||0==(e=ur(r,a.line))?(t=Je(i.view[0].line),n=i.view[0].node):(t=Je(i.view[e].line),n=i.view[e-1].node.nextSibling)
var c,l,u=ur(r,s.line)
if(u==i.view.length-1?(c=i.viewTo-1,l=i.lineDiv.lastChild):(c=Je(i.view[u+1].line)-1,l=i.view[u+1].node.previousSibling),!n)return!1
for(var f=r.doc.splitLines(function(e,t,n,r,i){var o="",a=!1,s=e.doc.lineSeparator(),c=!1
function l(){a&&(o+=s,c&&(o+=s),a=c=!1)}function u(e){e&&(l(),o+=e)}function f(t){if(1==t.nodeType){var n=t.getAttribute("cm-text")
if(n)return void u(n)
var o,p=t.getAttribute("cm-marker")
if(p){var d=e.findMarks(et(r,0),et(i+1,0),(g=+p,function(e){return e.id==g}))
return void(d.length&&(o=d[0].find(0))&&u(Ke(e.doc,o.from,o.to).join(s)))}if("false"==t.getAttribute("contenteditable"))return
var h=/^(pre|div|p|li|table|br)$/i.test(t.nodeName)
if(!/^br$/i.test(t.nodeName)&&0==t.textContent.length)return
h&&l()
for(var m=0;m<t.childNodes.length;m++)f(t.childNodes[m]);/^(pre|p)$/i.test(t.nodeName)&&(c=!0),h&&(a=!0)}else 3==t.nodeType&&u(t.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))
var g}for(;f(t),t!=n;)t=t.nextSibling,c=!1
return o}(r,n,l,t,c)),p=Ke(r.doc,et(t,0),et(c,Ge(r.doc,c).text.length));f.length>1&&p.length>1;)if(Q(f)==Q(p))f.pop(),p.pop(),c--
else{if(f[0]!=p[0])break
f.shift(),p.shift(),t++}for(var d=0,h=0,m=f[0],g=p[0],v=Math.min(m.length,g.length);d<v&&m.charCodeAt(d)==g.charCodeAt(d);)++d
for(var y=Q(f),b=Q(p),O=Math.min(y.length-(1==f.length?d:0),b.length-(1==p.length?d:0));h<O&&y.charCodeAt(y.length-h-1)==b.charCodeAt(b.length-h-1);)++h
if(1==f.length&&1==p.length&&t==a.line)for(;d&&d>a.ch&&y.charCodeAt(y.length-h-1)==b.charCodeAt(b.length-h-1);)d--,h++
f[f.length-1]=y.slice(0,y.length-h).replace(/^\u200b+/,""),f[0]=f[0].slice(d).replace(/\u200b+$/,"")
var w=et(t,d),x=et(c,p.length?Q(p).length-h:0)
return f.length>1||f[0]||tt(w,x)?(mo(r.doc,f,w,x,"+input"),!0):void 0},qa.prototype.ensurePolled=function(){this.forceCompositionEnd()},qa.prototype.reset=function(){this.forceCompositionEnd()},qa.prototype.forceCompositionEnd=function(){this.composing&&(clearTimeout(this.readDOMTimeout),this.composing=null,this.updateFromDOM(),this.div.blur(),this.div.focus())},qa.prototype.readFromDOMSoon=function(){var e=this
null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout((function(){if(e.readDOMTimeout=null,e.composing){if(!e.composing.done)return
e.composing=null}e.updateFromDOM()}),80))},qa.prototype.updateFromDOM=function(){var e=this
!this.cm.isReadOnly()&&this.pollContent()||$r(this.cm,(function(){return fr(e.cm)}))},qa.prototype.setUneditable=function(e){e.contentEditable="false"},qa.prototype.onKeyPress=function(e){0==e.charCode||this.composing||(e.preventDefault(),this.cm.isReadOnly()||ei(this.cm,Da)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))},qa.prototype.readOnlyChanged=function(e){this.div.contentEditable=String("nocursor"!=e)},qa.prototype.onContextMenu=function(){},qa.prototype.resetPosition=function(){},qa.prototype.needsContentAttribute=!0
var Wa=function(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new V,this.hasSelection=!1,this.composing=null}
Wa.prototype.init=function(e){var t=this,n=this,r=this.cm
this.createField(e)
var i=this.textarea
function o(e){if(!me(r,e)){if(r.somethingSelected())ja({lineWise:!1,text:r.getSelections()})
else{if(!r.options.lineWiseCopyCut)return
var t=Fa(r)
ja({lineWise:!0,text:t.text}),"cut"==e.type?r.setSelections(t.ranges,null,z):(n.prevInput="",i.value=t.text.join("\n"),F(i))}"cut"==e.type&&(r.state.cutIncoming=+new Date)}}e.wrapper.insertBefore(this.wrapper,e.wrapper.firstChild),m&&(i.style.width="0px"),fe(i,"input",(function(){a&&s>=9&&t.hasSelection&&(t.hasSelection=null),n.poll()})),fe(i,"paste",(function(e){me(r,e)||La(e,r)||(r.state.pasteIncoming=+new Date,n.fastPoll())})),fe(i,"cut",o),fe(i,"copy",o),fe(e.scroller,"paste",(function(t){if(!xn(e,t)&&!me(r,t)){if(!i.dispatchEvent)return r.state.pasteIncoming=+new Date,void n.focus()
var o=new Event("paste")
o.clipboardData=t.clipboardData,i.dispatchEvent(o)}})),fe(e.lineSpace,"selectstart",(function(t){xn(e,t)||be(t)})),fe(i,"compositionstart",(function(){var e=r.getCursor("from")
n.composing&&n.composing.range.clear(),n.composing={start:e,range:r.markText(e,r.getCursor("to"),{className:"CodeMirror-composing"})}})),fe(i,"compositionend",(function(){n.composing&&(n.poll(),n.composing.range.clear(),n.composing=null)}))},Wa.prototype.createField=function(e){this.wrapper=Ra(),this.textarea=this.wrapper.firstChild},Wa.prototype.prepareSelection=function(){var e=this.cm,t=e.display,n=e.doc,r=vr(e)
if(e.options.moveInputWithCursor){var i=Kn(e,n.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),a=t.lineDiv.getBoundingClientRect()
r.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+a.top-o.top)),r.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+a.left-o.left))}return r},Wa.prototype.showSelection=function(e){var t=this.cm.display
S(t.cursorDiv,e.cursors),S(t.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},Wa.prototype.reset=function(e){if(!this.contextMenuPending&&!this.composing){var t=this.cm
if(t.somethingSelected()){this.prevInput=""
var n=t.getSelection()
this.textarea.value=n,t.state.focused&&F(this.textarea),a&&s>=9&&(this.hasSelection=n)}else e||(this.prevInput=this.textarea.value="",a&&s>=9&&(this.hasSelection=null))}},Wa.prototype.getField=function(){return this.textarea},Wa.prototype.supportsTouch=function(){return!1},Wa.prototype.focus=function(){if("nocursor"!=this.cm.options.readOnly&&(!v||D()!=this.textarea))try{this.textarea.focus()}catch(e){}},Wa.prototype.blur=function(){this.textarea.blur()},Wa.prototype.resetPosition=function(){this.wrapper.style.top=this.wrapper.style.left=0},Wa.prototype.receivedFocus=function(){this.slowPoll()},Wa.prototype.slowPoll=function(){var e=this
this.pollingFast||this.polling.set(this.cm.options.pollInterval,(function(){e.poll(),e.cm.state.focused&&e.slowPoll()}))},Wa.prototype.fastPoll=function(){var e=!1,t=this
t.pollingFast=!0,t.polling.set(20,(function n(){t.poll()||e?(t.pollingFast=!1,t.slowPoll()):(e=!0,t.polling.set(60,n))}))},Wa.prototype.poll=function(){var e=this,t=this.cm,n=this.textarea,r=this.prevInput
if(this.contextMenuPending||!t.state.focused||De(n)&&!r&&!this.composing||t.isReadOnly()||t.options.disableInput||t.state.keySeq)return!1
var i=n.value
if(i==r&&!t.somethingSelected())return!1
if(a&&s>=9&&this.hasSelection===i||y&&/[\uf700-\uf7ff]/.test(i))return t.display.input.reset(),!1
if(t.doc.sel==t.display.selForContextMenu){var o=i.charCodeAt(0)
if(8203!=o||r||(r="​"),8666==o)return this.reset(),this.cm.execCommand("undo")}for(var c=0,l=Math.min(r.length,i.length);c<l&&r.charCodeAt(c)==i.charCodeAt(c);)++c
return $r(t,(function(){Da(t,i.slice(c),r.length-c,null,e.composing?"*compose":null),i.length>1e3||i.indexOf("\n")>-1?n.value=e.prevInput="":e.prevInput=i,e.composing&&(e.composing.range.clear(),e.composing.range=t.markText(e.composing.start,t.getCursor("to"),{className:"CodeMirror-composing"}))})),!0},Wa.prototype.ensurePolled=function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},Wa.prototype.onKeyPress=function(){a&&s>=9&&(this.hasSelection=null),this.fastPoll()},Wa.prototype.onContextMenu=function(e){var t=this,n=t.cm,r=n.display,i=t.textarea
t.contextMenuPending&&t.contextMenuPending()
var o=lr(n,e),l=r.scroller.scrollTop
if(o&&!f){n.options.resetSelectionOnContextMenu&&-1==n.doc.sel.contains(o)&&ei(n,$i)(n.doc,Ci(o),z)
var u,p=i.style.cssText,d=t.wrapper.style.cssText,h=t.wrapper.offsetParent.getBoundingClientRect()
if(t.wrapper.style.cssText="position: static",i.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-h.top-5)+"px; left: "+(e.clientX-h.left-5)+"px;\n      z-index: 1000; background: "+(a?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",c&&(u=window.scrollY),r.input.focus(),c&&window.scrollTo(null,u),r.input.reset(),n.somethingSelected()||(i.value=t.prevInput=" "),t.contextMenuPending=v,r.selForContextMenu=n.doc.sel,clearTimeout(r.detectingSelectAll),a&&s>=9&&g(),k){xe(e)
var m=function(){de(window,"mouseup",m),setTimeout(v,20)}
fe(window,"mouseup",m)}else setTimeout(v,50)}function g(){if(null!=i.selectionStart){var e=n.somethingSelected(),o="​"+(e?i.value:"")
i.value="⇚",i.value=o,t.prevInput=e?"":"​",i.selectionStart=1,i.selectionEnd=o.length,r.selForContextMenu=n.doc.sel}}function v(){if(t.contextMenuPending==v&&(t.contextMenuPending=!1,t.wrapper.style.cssText=d,i.style.cssText=p,a&&s<9&&r.scrollbars.setScrollTop(r.scroller.scrollTop=l),null!=i.selectionStart)){(!a||a&&s<9)&&g()
var e=0,o=function(){r.selForContextMenu==n.doc.sel&&0==i.selectionStart&&i.selectionEnd>0&&"​"==t.prevInput?ei(n,so)(n):e++<10?r.detectingSelectAll=setTimeout(o,500):(r.selForContextMenu=null,r.input.reset())}
r.detectingSelectAll=setTimeout(o,200)}}},Wa.prototype.readOnlyChanged=function(e){e||this.reset(),this.textarea.disabled="nocursor"==e},Wa.prototype.setUneditable=function(){},Wa.prototype.needsContentAttribute=!1,function(e){var t=e.optionHandlers
function n(n,r,i,o){e.defaults[n]=r,i&&(t[n]=o?function(e,t,n){n!=xa&&i(e,t,n)}:i)}e.defineOption=n,e.Init=xa,n("value","",(function(e,t){return e.setValue(t)}),!0),n("mode",null,(function(e,t){e.doc.modeOption=t,Ai(e)}),!0),n("indentUnit",2,Ai,!0),n("indentWithTabs",!1),n("smartIndent",!0),n("tabSize",4,(function(e){ji(e),qn(e),fr(e)}),!0),n("lineSeparator",null,(function(e,t){if(e.doc.lineSep=t,t){var n=[],r=e.doc.first
e.doc.iter((function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,n.push(et(r,o))}r++}))
for(var i=n.length-1;i>=0;i--)mo(e.doc,t,n[i],et(n[i].line,n[i].ch+t.length))}})),n("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g,(function(e,t,n){e.state.specialChars=new RegExp(t.source+(t.test("\t")?"":"|\t"),"g"),n!=xa&&e.refresh()})),n("specialCharPlaceholder",Zt,(function(e){return e.refresh()}),!0),n("electricChars",!0),n("inputStyle",v?"contenteditable":"textarea",(function(){throw new Error("inputStyle can not (yet) be changed in a running editor")}),!0),n("spellcheck",!1,(function(e,t){return e.getInputField().spellcheck=t}),!0),n("autocorrect",!1,(function(e,t){return e.getInputField().autocorrect=t}),!0),n("autocapitalize",!1,(function(e,t){return e.getInputField().autocapitalize=t}),!0),n("rtlMoveVisually",!O),n("wholeLineUpdateBefore",!0),n("theme","default",(function(e){wa(e),mi(e)}),!0),n("keyMap","default",(function(e,t,n){var r=Jo(t),i=n!=xa&&Jo(n)
i&&i.detach&&i.detach(e,r),r.attach&&r.attach(e,i||null)})),n("extraKeys",null),n("configureMouse",null),n("lineWrapping",!1,Ta,!0),n("gutters",[],(function(e,t){e.display.gutterSpecs=di(t,e.options.lineNumbers),mi(e)}),!0),n("fixedGutter",!0,(function(e,t){e.display.gutters.style.left=t?ar(e.display)+"px":"0",e.refresh()}),!0),n("coverGutterNextToScrollbar",!1,(function(e){return Br(e)}),!0),n("scrollbarStyle","native",(function(e){Hr(e),Br(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)}),!0),n("lineNumbers",!1,(function(e,t){e.display.gutterSpecs=di(e.options.gutters,t),mi(e)}),!0),n("firstLineNumber",1,mi,!0),n("lineNumberFormatter",(function(e){return e}),mi,!0),n("showCursorWhenSelecting",!1,gr,!0),n("resetSelectionOnContextMenu",!0),n("lineWiseCopyCut",!0),n("pasteLinesPerSelection",!0),n("selectionsMayTouch",!1),n("readOnly",!1,(function(e,t){"nocursor"==t&&(Cr(e),e.display.input.blur()),e.display.input.readOnlyChanged(t)})),n("disableInput",!1,(function(e,t){t||e.display.input.reset()}),!0),n("dragDrop",!0,Ca),n("allowDropFileTypes",null),n("cursorBlinkRate",530),n("cursorScrollMargin",0),n("cursorHeight",1,gr,!0),n("singleCursorHeightPerLine",!0,gr,!0),n("workTime",100),n("workDelay",100),n("flattenSpans",!0,ji,!0),n("addModeClass",!1,ji,!0),n("pollInterval",100),n("undoDepth",200,(function(e,t){return e.doc.history.undoDepth=t})),n("historyEventDelay",1250),n("viewportMargin",10,(function(e){return e.refresh()}),!0),n("maxHighlightLength",1e4,ji,!0),n("moveInputWithCursor",!0,(function(e,t){t||e.display.input.resetPosition()})),n("tabindex",null,(function(e,t){return e.display.input.getField().tabIndex=t||""})),n("autofocus",null),n("direction","ltr",(function(e,t){return e.doc.setDirection(t)}),!0),n("phrases",null)}(_a),function(e){var t=e.optionHandlers,n=e.helpers={}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,n){var r=this.options,i=r[e]
r[e]==n&&"mode"!=e||(r[e]=n,t.hasOwnProperty(e)&&ei(this,t[e])(this,n,i),he(this,"optionChange",this,e))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Jo(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,n=0;n<t.length;++n)if(t[n]==e||t[n].name==e)return t.splice(n,1),!0},addOverlay:ti((function(t,n){var r=t.token?t:e.getMode(this.options,t)
if(r.startState)throw new Error("Overlays may not be stateful.")
!function(e,t,n){for(var r=0,i=n(t);r<e.length&&n(e[r])<=i;)r++
e.splice(r,0,t)}(this.state.overlays,{mode:r,modeSpec:t,opaque:n&&n.opaque,priority:n&&n.priority||0},(function(e){return e.priority})),this.state.modeGen++,fr(this)})),removeOverlay:ti((function(e){for(var t=this.state.overlays,n=0;n<t.length;++n){var r=t[n].modeSpec
if(r==e||"string"==typeof e&&r.name==e)return t.splice(n,1),this.state.modeGen++,void fr(this)}})),indentLine:ti((function(e,t,n){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),Ze(this.doc,e)&&Na(this,e,t,n)})),indentSelection:ti((function(e){for(var t=this.doc.sel.ranges,n=-1,r=0;r<t.length;r++){var i=t[r]
if(i.empty())i.head.line>n&&(Na(this,i.head.line,e,!0),n=i.head.line,r==this.doc.sel.primIndex&&jr(this))
else{var o=i.from(),a=i.to(),s=Math.max(n,o.line)
n=Math.min(this.lastLine(),a.line-(a.ch?0:1))+1
for(var c=s;c<n;++c)Na(this,c,e)
var l=this.doc.sel.ranges
0==o.ch&&t.length==l.length&&l[r].from().ch>0&&Ji(this.doc,r,new ki(o,l[r].to()),z)}}})),getTokenAt:function(e,t){return yt(this,e,t)},getLineTokens:function(e,t){return yt(this,et(e),t,!0)},getTokenTypeAt:function(e){e=st(this.doc,e)
var t,n=pt(this,Ge(this.doc,e.line)),r=0,i=(n.length-1)/2,o=e.ch
if(0==o)t=n[2]
else for(;;){var a=r+i>>1
if((a?n[2*a-1]:0)>=o)i=a
else{if(!(n[2*a+1]<o)){t=n[2*a+2]
break}r=a+1}}var s=t?t.indexOf("overlay "):-1
return s<0?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var n=this.doc.mode
return n.innerMode?e.innerMode(n,this.getTokenAt(t).state).mode:n},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[]
if(!n.hasOwnProperty(t))return r
var i=n[t],o=this.getModeAt(e)
if("string"==typeof o[t])i[o[t]]&&r.push(i[o[t]])
else if(o[t])for(var a=0;a<o[t].length;a++){var s=i[o[t][a]]
s&&r.push(s)}else o.helperType&&i[o.helperType]?r.push(i[o.helperType]):i[o.name]&&r.push(i[o.name])
for(var c=0;c<i._global.length;c++){var l=i._global[c]
l.pred(o,this)&&-1==q(r,l.val)&&r.push(l.val)}return r},getStateAfter:function(e,t){var n=this.doc
return dt(this,(e=at(n,null==e?n.first+n.size-1:e))+1,t).state},cursorCoords:function(e,t){var n=this.doc.sel.primary()
return Kn(this,null==e?n.head:"object"==typeof e?st(this.doc,e):e?n.from():n.to(),t||"page")},charCoords:function(e,t){return Gn(this,st(this.doc,e),t||"page")},coordsChar:function(e,t){return Jn(this,(e=Wn(this,e,t||"page")).left,e.top)},lineAtHeight:function(e,t){return e=Wn(this,{top:e,left:0},t||"page").top,Xe(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t,n){var r,i=!1
if("number"==typeof e){var o=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>o&&(e=o,i=!0),r=Ge(this.doc,e)}else r=e
return Hn(this,r,{top:0,left:0},t||"page",n||i).top+(i?this.doc.height-Ut(r):0)},defaultTextHeight:function(){return rr(this.display)},defaultCharWidth:function(){return ir(this.display)},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,n,r,i){var o,a,s,c=this.display,l=(e=Kn(this,st(this.doc,e))).bottom,u=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),c.sizer.appendChild(t),"over"==r)l=e.top
else if("above"==r||"near"==r){var f=Math.max(c.wrapper.clientHeight,this.doc.height),p=Math.max(c.sizer.clientWidth,c.lineSpace.clientWidth);("above"==r||e.bottom+t.offsetHeight>f)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=f&&(l=e.bottom),u+t.offsetWidth>p&&(u=p-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(u=c.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?u=0:"middle"==i&&(u=(c.sizer.clientWidth-t.offsetWidth)/2),t.style.left=u+"px"),n&&(o=this,a={left:u,top:l,right:u+t.offsetWidth,bottom:l+t.offsetHeight},null!=(s=Nr(o,a)).scrollTop&&Fr(o,s.scrollTop),null!=s.scrollLeft&&Rr(o,s.scrollLeft))},triggerOnKeyDown:ti(ua),triggerOnKeyPress:ti(pa),triggerOnKeyUp:fa,triggerOnMouseDown:ti(ga),execCommand:function(e){if(ta.hasOwnProperty(e))return ta[e].call(null,this)},triggerElectric:ti((function(e){Ia(this,e)})),findPosH:function(e,t,n,r){var i=1
t<0&&(i=-1,t=-t)
for(var o=st(this.doc,e),a=0;a<t&&!(o=Pa(this.doc,o,i,n,r)).hitSide;++a);return o},moveH:ti((function(e,t){var n=this
this.extendSelectionsBy((function(r){return n.display.shift||n.doc.extend||r.empty()?Pa(n.doc,r.head,e,t,n.options.rtlMoveVisually):e<0?r.from():r.to()}),H)})),deleteH:ti((function(e,t){var n=this.doc.sel,r=this.doc
n.somethingSelected()?r.replaceSelection("",null,"+delete"):Xo(this,(function(n){var i=Pa(r,n.head,e,t,!1)
return e<0?{from:i,to:n.head}:{from:n.head,to:i}}))})),findPosV:function(e,t,n,r){var i=1,o=r
t<0&&(i=-1,t=-t)
for(var a=st(this.doc,e),s=0;s<t;++s){var c=Kn(this,a,"div")
if(null==o?o=c.left:c.left=o,(a=Va(this,c,i,n)).hitSide)break}return a},moveV:ti((function(e,t){var n=this,r=this.doc,i=[],o=!this.display.shift&&!r.extend&&r.sel.somethingSelected()
if(r.extendSelectionsBy((function(a){if(o)return e<0?a.from():a.to()
var s=Kn(n,a.head,"div")
null!=a.goalColumn&&(s.left=a.goalColumn),i.push(s.left)
var c=Va(n,s,e,t)
return"page"==t&&a==r.sel.primary()&&Ar(n,Gn(n,c,"div").top-s.top),c}),H),i.length)for(var a=0;a<r.sel.ranges.length;a++)r.sel.ranges[a].goalColumn=i[a]})),findWordAt:function(e){var t=Ge(this.doc,e.line).text,n=e.ch,r=e.ch
if(t){var i=this.getHelper(e,"wordChars")
"before"!=e.sticky&&r!=t.length||!n?++r:--n
for(var o=t.charAt(n),a=ee(o,i)?function(e){return ee(e,i)}:/\s/.test(o)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!ee(e)};n>0&&a(t.charAt(n-1));)--n
for(;r<t.length&&a(t.charAt(r));)++r}return new ki(et(e.line,n),et(e.line,r))},toggleOverwrite:function(e){null!=e&&e==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?L(this.display.cursorDiv,"CodeMirror-overwrite"):T(this.display.cursorDiv,"CodeMirror-overwrite"),he(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==D()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:ti((function(e,t){Dr(this,e,t)})),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Tn(this)-this.display.barHeight,width:e.scrollWidth-Tn(this)-this.display.barWidth,clientHeight:Sn(this),clientWidth:_n(this)}},scrollIntoView:ti((function(e,t){null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:et(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line?function(e,t){Lr(e),e.curOp.scrollToPos=t}(this,e):Ir(this,e.from,e.to,e.margin)})),setSize:ti((function(e,t){var n=this,r=function(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}
null!=e&&(this.display.wrapper.style.width=r(e)),null!=t&&(this.display.wrapper.style.height=r(t)),this.options.lineWrapping&&Vn(this)
var i=this.display.viewFrom
this.doc.iter(i,this.display.viewTo,(function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){pr(n,i,"widget")
break}++i})),this.curOp.forceUpdate=!0,he(this,"refresh",this)})),operation:function(e){return $r(this,e)},startOperation:function(){return Gr(this)},endOperation:function(){return Kr(this)},refresh:ti((function(){var e=this.display.cachedTextHeight
fr(this),this.curOp.forceUpdate=!0,qn(this),Dr(this,this.doc.scrollLeft,this.doc.scrollTop),li(this.display),(null==e||Math.abs(e-rr(this.display))>.5)&&cr(this),he(this,"refresh",this)})),swapDoc:ti((function(e){var t=this.doc
return t.cm=null,this.state.selectingText&&this.state.selectingText(),Fi(this,e),qn(this),this.display.input.reset(),Dr(this,e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,cn(this,"swapDoc",this,t),t})),phrase:function(e){var t=this.options.phrases
return t&&Object.prototype.hasOwnProperty.call(t,e)?t[e]:e},getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},ye(e),e.registerHelper=function(t,r,i){n.hasOwnProperty(t)||(n[t]=e[t]={_global:[]}),n[t][r]=i},e.registerGlobalHelper=function(t,r,i,o){e.registerHelper(t,r,o),n[t]._global.push({pred:i,val:o})}}(_a)
var Ga="iter insert remove copy getEditor constructor".split(" ")
for(var Ka in jo.prototype)jo.prototype.hasOwnProperty(Ka)&&q(Ga,Ka)<0&&(_a.prototype[Ka]=function(e){return function(){return e.apply(this.doc,arguments)}}(jo.prototype[Ka]))
return ye(jo),_a.inputStyles={textarea:Wa,contenteditable:qa},_a.defineMode=function(e){_a.defaults.mode||"null"==e||(_a.defaults.mode=e),Re.apply(this,arguments)},_a.defineMIME=function(e,t){Me[e]=t},_a.defineMode("null",(function(){return{token:function(e){return e.skipToEnd()}}})),_a.defineMIME("text/plain","null"),_a.defineExtension=function(e,t){_a.prototype[e]=t},_a.defineDocExtension=function(e,t){jo.prototype[e]=t},_a.fromTextArea=function(e,t){if((t=t?R(t):{}).value=e.value,!t.tabindex&&e.tabIndex&&(t.tabindex=e.tabIndex),!t.placeholder&&e.placeholder&&(t.placeholder=e.placeholder),null==t.autofocus){var n=D()
t.autofocus=n==e||null!=e.getAttribute("autofocus")&&n==document.body}function r(){e.value=s.getValue()}var i
if(e.form&&(fe(e.form,"submit",r),!t.leaveSubmitMethodAlone)){var o=e.form
i=o.submit
try{var a=o.submit=function(){r(),o.submit=i,o.submit(),o.submit=a}}catch(e){}}t.finishInit=function(n){n.save=r,n.getTextArea=function(){return e},n.toTextArea=function(){n.toTextArea=isNaN,r(),e.parentNode.removeChild(n.getWrapperElement()),e.style.display="",e.form&&(de(e.form,"submit",r),t.leaveSubmitMethodAlone||"function"!=typeof e.form.submit||(e.form.submit=i))}},e.style.display="none"
var s=_a((function(t){return e.parentNode.insertBefore(t,e.nextSibling)}),t)
return s},function(e){e.off=de,e.on=fe,e.wheelEventPixels=Oi,e.Doc=jo,e.splitLines=je,e.countColumn=P,e.findColumn=W,e.isWordChar=$,e.Pass=B,e.signal=he,e.Line=Gt,e.changeEnd=Ti,e.scrollbarModel=Ur,e.Pos=et,e.cmpPos=tt,e.modes=Fe,e.mimeModes=Me,e.resolveMode=Pe,e.getMode=Ve,e.modeExtensions=qe,e.extendMode=Be,e.copyState=ze,e.startState=He,e.innerMode=Ue,e.commands=ta,e.keyMap=Uo,e.keyName=Yo,e.isModifierKey=Ko,e.lookupKey=Go,e.normalizeKeyMap=Wo,e.StringStream=We,e.SharedTextMarker=_o,e.TextMarker=Co,e.LineWidget=xo,e.e_preventDefault=be,e.e_stopPropagation=Oe,e.e_stop=xe,e.addClass=L,e.contains=j,e.rmClass=T,e.keyNames=Vo}(_a),_a.version="5.52.2",_a}()},Vuqn:function(e,t,n){"use strict"
n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}))
var r=n("rWdj"),i=n("kBjl"),o=n("dWS+"),a=n("/jXB"),s=n("dQau"),c=n("4suF"),l=n("axIb")
function u(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t,n){return'Directive "@'.concat(e,'" argument "').concat(t,'" of type "').concat(n,'" is required, but it was not provided.')}function d(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?u(n,!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h(e),{Field:{leave:function(t){var n=e.getFieldDef()
if(!n)return!1
for(var a,s,c,u=t.arguments||[],f=Object(i.a)(u,(function(e){return e.name.value})),p=0,d=n.args;p<d.length;p++){var h=d[p]
!f[h.name]&&Object(l.P)(h)&&e.reportError(new o.a((a=n.name,s=h.name,c=Object(r.a)(h.type),'Field "'.concat(a,'" argument "').concat(s,'" of type "').concat(c,'" is required, but it was not provided.')),t))}}}})}function h(e){for(var t=Object.create(null),n=e.getSchema(),u=n?n.getDirectives():c.i,f=0;f<u.length;f++){var d=u[f]
t[d.name]=Object(i.a)(d.args.filter(l.P),(function(e){return e.name}))}for(var h=e.getDocument().definitions,g=0;g<h.length;g++){var v=h[g]
v.kind===a.Kind.DIRECTIVE_DEFINITION&&(t[v.name.value]=Object(i.a)(v.arguments?v.arguments.filter(m):[],(function(e){return e.name.value})))}return{Directive:{leave:function(n){var a=n.name.value,c=t[a]
if(c)for(var u=n.arguments||[],f=Object(i.a)(u,(function(e){return e.name.value})),d=0,h=Object.keys(c);d<h.length;d++){var m=h[d]
if(!f[m]){var g=c[m].type
e.reportError(new o.a(p(a,m,Object(l.S)(g)?Object(r.a)(g):Object(s.a)(g)),n))}}}}}}function m(e){return e.type.kind===a.Kind.NON_NULL_TYPE&&null==e.defaultValue}},Vwaf:function(e,t,n){"use strict"
var r="<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",i="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",o=new RegExp("^(?:"+r+"|"+i+"|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),a=new RegExp("^(?:"+r+"|"+i+")")
e.exports.HTML_TAG_RE=o,e.exports.HTML_OPEN_CLOSE_TAG_RE=a},W1Rp:function(e,t,n){"use strict"
var r=n("vWgF"),i=n("AGgm").has,o=n("AGgm").isValidEntityCode,a=n("AGgm").fromCodePoint,s=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,c=/^&([a-z][a-z0-9]{1,31});/i
e.exports=function(e,t){var n,l,u=e.pos,f=e.posMax
if(38!==e.src.charCodeAt(u))return!1
if(u+1<f)if(35===e.src.charCodeAt(u+1)){if(l=e.src.slice(u).match(s))return t||(n="x"===l[1][0].toLowerCase()?parseInt(l[1].slice(1),16):parseInt(l[1],10),e.pending+=o(n)?a(n):a(65533)),e.pos+=l[0].length,!0}else if((l=e.src.slice(u).match(c))&&i(r,l[1]))return t||(e.pending+=r[l[1]]),e.pos+=l[0].length,!0
return t||(e.pending+="&"),e.pos++,!0}},WXJZ:function(e,t,n){"use strict"
function r(e,t,n){return e.reduce((function(e,r){return e[t(r)]=n(r),e}),Object.create(null))}n.d(t,"a",(function(){return r}))},Wzjs:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("Y/la")
function i(e,t){for(var n=Object.create(null),i=0,o=Object(r.a)(e);i<o.length;i++){var a=o[i],s=a[0],c=a[1]
n[s]=t(c,s)}return n}},X71X:function(e,t,n){"use strict"
var r=n("4fNk"),i=n("Vwaf").HTML_OPEN_CLOSE_TAG_RE,o=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+r.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(i.source+"\\s*$"),/^$/,!1]]
e.exports=function(e,t,n,r){var i,a,s,c,l=e.bMarks[t]+e.tShift[t],u=e.eMarks[t]
if(e.sCount[t]-e.blkIndent>=4)return!1
if(!e.md.options.html)return!1
if(60!==e.src.charCodeAt(l))return!1
for(c=e.src.slice(l,u),i=0;i<o.length&&!o[i][0].test(c);i++);if(i===o.length)return!1
if(r)return o[i][2]
if(a=t+1,!o[i][1].test(c))for(;a<n&&!(e.sCount[a]<e.blkIndent);a++)if(l=e.bMarks[a]+e.tShift[a],u=e.eMarks[a],c=e.src.slice(l,u),o[i][1].test(c)){0!==c.length&&a++
break}return e.line=a,(s=e.push("html_block","",0)).map=[t,a],s.content=e.getLines(t,a,e.blkIndent,!0),!0}},XFf3:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeWhitespace=function(e){return e.replace(i," ")},t.invalidCharacters=void 0
var r=Array.from({length:11},(function(e,t){return String.fromCharCode(8192+t)})).concat(["\u2028","\u2029"," "," "])
t.invalidCharacters=r
var i=new RegExp("["+r.join("")+"]","g")},Xizt:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"i",(function(){return s})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return f})),n.d(t,"e",(function(){return p}))
var r=n("/jXB")
function i(e){return o(e)||l(e)||f(e)}function o(e){return e.kind===r.Kind.OPERATION_DEFINITION||e.kind===r.Kind.FRAGMENT_DEFINITION}function a(e){return e.kind===r.Kind.FIELD||e.kind===r.Kind.FRAGMENT_SPREAD||e.kind===r.Kind.INLINE_FRAGMENT}function s(e){return e.kind===r.Kind.VARIABLE||e.kind===r.Kind.INT||e.kind===r.Kind.FLOAT||e.kind===r.Kind.STRING||e.kind===r.Kind.BOOLEAN||e.kind===r.Kind.NULL||e.kind===r.Kind.ENUM||e.kind===r.Kind.LIST||e.kind===r.Kind.OBJECT}function c(e){return e.kind===r.Kind.NAMED_TYPE||e.kind===r.Kind.LIST_TYPE||e.kind===r.Kind.NON_NULL_TYPE}function l(e){return e.kind===r.Kind.SCHEMA_DEFINITION||u(e)||e.kind===r.Kind.DIRECTIVE_DEFINITION}function u(e){return e.kind===r.Kind.SCALAR_TYPE_DEFINITION||e.kind===r.Kind.OBJECT_TYPE_DEFINITION||e.kind===r.Kind.INTERFACE_TYPE_DEFINITION||e.kind===r.Kind.UNION_TYPE_DEFINITION||e.kind===r.Kind.ENUM_TYPE_DEFINITION||e.kind===r.Kind.INPUT_OBJECT_TYPE_DEFINITION}function f(e){return e.kind===r.Kind.SCHEMA_EXTENSION||p(e)}function p(e){return e.kind===r.Kind.SCALAR_TYPE_EXTENSION||e.kind===r.Kind.OBJECT_TYPE_EXTENSION||e.kind===r.Kind.INTERFACE_TYPE_EXTENSION||e.kind===r.Kind.UNION_TYPE_EXTENSION||e.kind===r.Kind.ENUM_TYPE_EXTENSION||e.kind===r.Kind.INPUT_OBJECT_TYPE_EXTENSION}},Xkdu:function(e,t,n){"use strict"
var r=a(n("VrN/")),i=a(n("i1zs")),o=n("8Ur0")
function a(e){return e&&e.__esModule?e:{default:e}}n("P57A"),r.default.registerHelper("jump","graphql",(function(e,t){if(t.schema&&t.onClick&&e.state){var n=e.state,r=n.kind,a=n.step,s=(0,i.default)(t.schema,n)
return"Field"===r&&0===a&&s.fieldDef||"AliasedField"===r&&2===a&&s.fieldDef?(0,o.getFieldReference)(s):"Directive"===r&&1===a&&s.directiveDef?(0,o.getDirectiveReference)(s):"Argument"===r&&0===a&&s.argDef?(0,o.getArgumentReference)(s):"EnumValue"===r&&s.enumValue?(0,o.getEnumValueReference)(s):"NamedType"===r&&s.type?(0,o.getTypeReference)(s):void 0}}))},"Y/la":function(e,t,n){"use strict"
var r=Object.entries||function(e){return Object.keys(e).map((function(t){return[t,e[t]]}))}
t.a=r},Yl7s:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ToolbarGroup=function(e){var t=e.children
return i.default.createElement("div",{className:"toolbar-button-group"},t)}
var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r}},"ZBm+":function(e,t,n){"use strict"
n.r(t),n.d(t,"unusedFragMessage",(function(){return i})),n.d(t,"NoUnusedFragments",(function(){return o}))
var r=n("dWS+")
function i(e){return'Fragment "'.concat(e,'" is never used.')}function o(e){var t=[],n=[]
return{OperationDefinition:function(e){return t.push(e),!1},FragmentDefinition:function(e){return n.push(e),!1},Document:{leave:function(){for(var o=Object.create(null),a=0;a<t.length;a++)for(var s=t[a],c=0,l=e.getRecursivelyReferencedFragments(s);c<l.length;c++){o[l[c].name.value]=!0}for(var u=0;u<n.length;u++){var f=n[u],p=f.name.value
!0!==o[p]&&e.reportError(new r.a(i(p),f))}}}}}},ZJBC:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.Explorer=void 0
var r,i=n("SvQd"),o=(r=i)&&r.__esModule?r:{default:r}
t.Explorer=o.default,t.default=o.default},ZfCc:function(e,t,n){"use strict"
n.r(t),n.d(t,"nonExecutableDefinitionMessage",(function(){return a})),n.d(t,"ExecutableDefinitions",(function(){return s}))
var r=n("dWS+"),i=n("/jXB"),o=n("Xizt")
function a(e){return"The ".concat(e," definition is not executable.")}function s(e){return{Document:function(t){for(var n=0,s=t.definitions;n<s.length;n++){var c=s[n]
Object(o.b)(c)||e.reportError(new r.a(a(c.kind===i.Kind.SCHEMA_DEFINITION||c.kind===i.Kind.SCHEMA_EXTENSION?"schema":c.name.value),c))}return!1}}}},"aET+":function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={}
return function(e,n){if("function"==typeof e)return e()
if(void 0===t[e]){var r=s.call(this,e,n)
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,u=0,f=[],p=n("9tPo")
function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id]
if(i){i.refs++
for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a])
for(;a<r.parts.length;a++)i.parts.push(b(r.parts[a],t))}else{var s=[]
for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],t))
o[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]}
r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function m(e,t){var n=c(e.insertInto)
if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.")
var r=f[f.length-1]
if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t)
else if("bottom"===e.insertAt)n.appendChild(t)
else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n")
var i=c(e.insertAt.before,n)
n.insertBefore(t,i)}}function g(e){if(null===e.parentNode)return!1
e.parentNode.removeChild(e)
var t=f.indexOf(e)
t>=0&&f.splice(t,1)}function v(e){var t=document.createElement("style")
if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0
return n.nc}()
r&&(e.attrs.nonce=r)}return y(t,e.attrs),m(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,r,i,o
if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){}
e.css=o}if(t.singleton){var a=u++
n=l||(l=v(t)),r=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link")
return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),m(e,t),t}(t),r=E.bind(null,n,t),i=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=k.bind(null,n),i=function(){g(n)})
return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom")
var n=h(e,t)
return d(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}e&&d(h(e,t),t)
for(i=0;i<r.length;i++){var s
if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]()
delete o[s.id]}}}}
var O,w=(O=[],function(e,t){return O[e]=t,O.filter(Boolean).join("\n")})
function x(e,t,n,r){var i=n?"":r.css
if(e.styleSheet)e.styleSheet.cssText=w(t,i)
else{var o=document.createTextNode(i),a=e.childNodes
a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function k(e,t){var n=t.css,r=t.media
if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n
else{for(;e.firstChild;)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(n))}}function E(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=p(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */")
var a=new Blob([r],{type:"text/css"}),s=e.href
e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},axIb:function(e,t,n){"use strict"
n.d(t,"S",(function(){return O})),n.d(t,"x",(function(){return w})),n.d(t,"R",(function(){return x})),n.d(t,"w",(function(){return k})),n.d(t,"N",(function(){return E})),n.d(t,"u",(function(){return C})),n.d(t,"H",(function(){return T})),n.d(t,"o",(function(){return _})),n.d(t,"T",(function(){return S})),n.d(t,"y",(function(){return N})),n.d(t,"E",(function(){return A})),n.d(t,"l",(function(){return j})),n.d(t,"F",(function(){return D})),n.d(t,"m",(function(){return L})),n.d(t,"J",(function(){return I})),n.d(t,"q",(function(){return F})),n.d(t,"L",(function(){return M})),n.d(t,"s",(function(){return R})),n.d(t,"G",(function(){return P})),n.d(t,"n",(function(){return V})),n.d(t,"O",(function(){return q})),n.d(t,"v",(function(){return B})),n.d(t,"I",(function(){return z})),n.d(t,"p",(function(){return U})),n.d(t,"D",(function(){return H})),n.d(t,"k",(function(){return W})),n.d(t,"C",(function(){return G})),n.d(t,"j",(function(){return K})),n.d(t,"d",(function(){return Q})),n.d(t,"e",(function(){return Y})),n.d(t,"U",(function(){return J})),n.d(t,"z",(function(){return X})),n.d(t,"M",(function(){return Z})),n.d(t,"t",(function(){return $})),n.d(t,"B",(function(){return ee})),n.d(t,"K",(function(){return te})),n.d(t,"r",(function(){return ne})),n.d(t,"A",(function(){return re})),n.d(t,"g",(function(){return ae})),n.d(t,"f",(function(){return se})),n.d(t,"i",(function(){return pe})),n.d(t,"P",(function(){return de})),n.d(t,"c",(function(){return he})),n.d(t,"h",(function(){return me})),n.d(t,"a",(function(){return ve})),n.d(t,"b",(function(){return ye})),n.d(t,"Q",(function(){return Oe}))
var r=n("Y/la"),i=n("rWdj"),o=n("kBjl"),a=n("Wzjs"),s=n("E9SJ"),c=n("t3R0"),l=n("WXJZ"),u=n("Mw0p"),f=n("zpYP")
function p(e){return e}var d=n("vJkw"),h=n("ZZnB"),m=n("/jXB"),g=n("ADFt")
function v(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?v(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return x(e)||E(e)||T(e)||S(e)||A(e)||D(e)||I(e)||M(e)}function w(e){if(!O(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL type."))
return e}function x(e){return Object(u.a)(e,ae)}function k(e){if(!x(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL Scalar type."))
return e}function E(e){return Object(u.a)(e,se)}function C(e){if(!E(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL Object type."))
return e}function T(e){return Object(u.a)(e,he)}function _(e){if(!T(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL Interface type."))
return e}function S(e){return Object(u.a)(e,me)}function N(e){if(!S(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL Union type."))
return e}function A(e){return Object(u.a)(e,ve)}function j(e){if(!A(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL Enum type."))
return e}function D(e){return Object(u.a)(e,ye)}function L(e){if(!D(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL Input Object type."))
return e}function I(e){return Object(u.a)(e,Q)}function F(e){if(!I(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL List type."))
return e}function M(e){return Object(u.a)(e,Y)}function R(e){if(!M(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL Non-Null type."))
return e}function P(e){return x(e)||A(e)||D(e)||J(e)&&P(e.ofType)}function V(e){if(!P(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL input type."))
return e}function q(e){return x(e)||E(e)||T(e)||S(e)||A(e)||J(e)&&q(e.ofType)}function B(e){if(!q(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL output type."))
return e}function z(e){return x(e)||A(e)}function U(e){if(!z(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL leaf type."))
return e}function H(e){return E(e)||T(e)||S(e)}function W(e){if(!H(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL composite type."))
return e}function G(e){return T(e)||S(e)}function K(e){if(!G(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL abstract type."))
return e}function Q(e){if(!(this instanceof Q))return new Q(e)
this.ofType=w(e)}function Y(e){if(!(this instanceof Y))return new Y(e)
this.ofType=$(e)}function J(e){return I(e)||M(e)}function X(e){if(!J(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL wrapping type."))
return e}function Z(e){return O(e)&&!M(e)}function $(e){if(!Z(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL nullable type."))
return e}function ee(e){if(e)return M(e)?e.ofType:e}function te(e){return x(e)||E(e)||T(e)||S(e)||A(e)||D(e)}function ne(e){if(!te(e))throw new Error("Expected ".concat(Object(i.a)(e)," to be a GraphQL named type."))
return e}function re(e){if(e){for(var t=e;J(t);)t=t.ofType
return t}}function ie(e){return"function"==typeof e?e():e}function oe(e){return e&&e.length>0?e:void 0}Q.prototype.toString=function(){return"["+String(this.ofType)+"]"},Object(h.a)(Q),Object(d.a)(Q),Y.prototype.toString=function(){return String(this.ofType)+"!"},Object(h.a)(Y),Object(d.a)(Y)
var ae=function(){function e(e){var t=e.parseValue||p
this.name=e.name,this.description=e.description,this.serialize=e.serialize||p,this.parseValue=t,this.parseLiteral=e.parseLiteral||function(e){return t(Object(g.a)(e))},this.extensions=e.extensions&&Object(s.a)(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=oe(e.extensionASTNodes),"string"==typeof e.name||Object(c.a)(0,"Must provide name."),null==e.serialize||"function"==typeof e.serialize||Object(c.a)(0,"".concat(this.name,' must provide "serialize" function. If this custom Scalar is also used as an input type, ensure "parseValue" and "parseLiteral" functions are also provided.')),e.parseLiteral&&("function"==typeof e.parseValue&&"function"==typeof e.parseLiteral||Object(c.a)(0,"".concat(this.name,' must provide both "parseValue" and "parseLiteral" functions.')))}var t=e.prototype
return t.toConfig=function(){return{name:this.name,description:this.description,serialize:this.serialize,parseValue:this.parseValue,parseLiteral:this.parseLiteral,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes||[]}},t.toString=function(){return this.name},e}()
Object(h.a)(ae),Object(d.a)(ae)
var se=function(){function e(e){this.name=e.name,this.description=e.description,this.isTypeOf=e.isTypeOf,this.extensions=e.extensions&&Object(s.a)(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=oe(e.extensionASTNodes),this._fields=le.bind(void 0,e),this._interfaces=ce.bind(void 0,e),"string"==typeof e.name||Object(c.a)(0,"Must provide name."),null==e.isTypeOf||"function"==typeof e.isTypeOf||Object(c.a)(0,"".concat(this.name,' must provide "isTypeOf" as a function, ')+"but got: ".concat(Object(i.a)(e.isTypeOf),"."))}var t=e.prototype
return t.getFields=function(){return"function"==typeof this._fields&&(this._fields=this._fields()),this._fields},t.getInterfaces=function(){return"function"==typeof this._interfaces&&(this._interfaces=this._interfaces()),this._interfaces},t.toConfig=function(){return{name:this.name,description:this.description,interfaces:this.getInterfaces(),fields:fe(this.getFields()),isTypeOf:this.isTypeOf,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes||[]}},t.toString=function(){return this.name},e}()
function ce(e){var t=ie(e.interfaces)||[]
return Array.isArray(t)||Object(c.a)(0,"".concat(e.name," interfaces must be an Array or a function which returns an Array.")),t}function le(e){var t=ie(e.fields)||{}
return ue(t)||Object(c.a)(0,"".concat(e.name," fields must be an object with field names as keys or a function which returns such an object.")),Object(a.a)(t,(function(t,n){ue(t)||Object(c.a)(0,"".concat(e.name,".").concat(n," field config must be an object")),!("isDeprecated"in t)||Object(c.a)(0,"".concat(e.name,".").concat(n,' should provide "deprecationReason" instead of "isDeprecated".')),null==t.resolve||"function"==typeof t.resolve||Object(c.a)(0,"".concat(e.name,".").concat(n," field resolver must be a function if ")+"provided, but got: ".concat(Object(i.a)(t.resolve),"."))
var o=t.args||{}
ue(o)||Object(c.a)(0,"".concat(e.name,".").concat(n," args must be an object with argument names as keys."))
var a=Object(r.a)(o).map((function(e){var t=e[0],n=e[1]
return{name:t,description:void 0===n.description?null:n.description,type:n.type,defaultValue:n.defaultValue,extensions:n.extensions&&Object(s.a)(n.extensions),astNode:n.astNode}}))
return y({},t,{name:n,description:t.description,type:t.type,args:a,resolve:t.resolve,subscribe:t.subscribe,isDeprecated:Boolean(t.deprecationReason),deprecationReason:t.deprecationReason,extensions:t.extensions&&Object(s.a)(t.extensions),astNode:t.astNode})}))}function ue(e){return Object(f.a)(e)&&!Array.isArray(e)}function fe(e){return Object(a.a)(e,(function(e){return{description:e.description,type:e.type,args:pe(e.args),resolve:e.resolve,subscribe:e.subscribe,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}}))}function pe(e){return Object(l.a)(e,(function(e){return e.name}),(function(e){return{description:e.description,type:e.type,defaultValue:e.defaultValue,extensions:e.extensions,astNode:e.astNode}}))}function de(e){return M(e.type)&&void 0===e.defaultValue}Object(h.a)(se),Object(d.a)(se)
var he=function(){function e(e){this.name=e.name,this.description=e.description,this.resolveType=e.resolveType,this.extensions=e.extensions&&Object(s.a)(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=oe(e.extensionASTNodes),this._fields=le.bind(void 0,e),"string"==typeof e.name||Object(c.a)(0,"Must provide name."),null==e.resolveType||"function"==typeof e.resolveType||Object(c.a)(0,"".concat(this.name,' must provide "resolveType" as a function, ')+"but got: ".concat(Object(i.a)(e.resolveType),"."))}var t=e.prototype
return t.getFields=function(){return"function"==typeof this._fields&&(this._fields=this._fields()),this._fields},t.toConfig=function(){return{name:this.name,description:this.description,fields:fe(this.getFields()),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes||[]}},t.toString=function(){return this.name},e}()
Object(h.a)(he),Object(d.a)(he)
var me=function(){function e(e){this.name=e.name,this.description=e.description,this.resolveType=e.resolveType,this.extensions=e.extensions&&Object(s.a)(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=oe(e.extensionASTNodes),this._types=ge.bind(void 0,e),"string"==typeof e.name||Object(c.a)(0,"Must provide name."),null==e.resolveType||"function"==typeof e.resolveType||Object(c.a)(0,"".concat(this.name,' must provide "resolveType" as a function, ')+"but got: ".concat(Object(i.a)(e.resolveType),"."))}var t=e.prototype
return t.getTypes=function(){return"function"==typeof this._types&&(this._types=this._types()),this._types},t.toConfig=function(){return{name:this.name,description:this.description,types:this.getTypes(),resolveType:this.resolveType,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes||[]}},t.toString=function(){return this.name},e}()
function ge(e){var t=ie(e.types)||[]
return Array.isArray(t)||Object(c.a)(0,"Must provide Array of types or a function which returns such an array for Union ".concat(e.name,".")),t}Object(h.a)(me),Object(d.a)(me)
var ve=function(){function e(e){var t,n
this.name=e.name,this.description=e.description,this.extensions=e.extensions&&Object(s.a)(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=oe(e.extensionASTNodes),this._values=(t=this.name,ue(n=e.values)||Object(c.a)(0,"".concat(t," values must be an object with value names as keys.")),Object(r.a)(n).map((function(e){var n=e[0],r=e[1]
return ue(r)||Object(c.a)(0,"".concat(t,".").concat(n,' must refer to an object with a "value" key ')+"representing an internal value but got: ".concat(Object(i.a)(r),".")),!("isDeprecated"in r)||Object(c.a)(0,"".concat(t,".").concat(n,' should provide "deprecationReason" instead of "isDeprecated".')),{name:n,description:r.description,value:"value"in r?r.value:n,isDeprecated:Boolean(r.deprecationReason),deprecationReason:r.deprecationReason,extensions:r.extensions&&Object(s.a)(r.extensions),astNode:r.astNode}}))),this._valueLookup=new Map(this._values.map((function(e){return[e.value,e]}))),this._nameLookup=Object(o.a)(this._values,(function(e){return e.name})),"string"==typeof e.name||Object(c.a)(0,"Must provide name.")}var t=e.prototype
return t.getValues=function(){return this._values},t.getValue=function(e){return this._nameLookup[e]},t.serialize=function(e){var t=this._valueLookup.get(e)
if(t)return t.name},t.parseValue=function(e){if("string"==typeof e){var t=this.getValue(e)
if(t)return t.value}},t.parseLiteral=function(e,t){if(e.kind===m.Kind.ENUM){var n=this.getValue(e.value)
if(n)return n.value}},t.toConfig=function(){var e=Object(l.a)(this.getValues(),(function(e){return e.name}),(function(e){return{description:e.description,value:e.value,deprecationReason:e.deprecationReason,extensions:e.extensions,astNode:e.astNode}}))
return{name:this.name,description:this.description,values:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes||[]}},t.toString=function(){return this.name},e}()
Object(h.a)(ve),Object(d.a)(ve)
var ye=function(){function e(e){this.name=e.name,this.description=e.description,this.extensions=e.extensions&&Object(s.a)(e.extensions),this.astNode=e.astNode,this.extensionASTNodes=oe(e.extensionASTNodes),this._fields=be.bind(void 0,e),"string"==typeof e.name||Object(c.a)(0,"Must provide name.")}var t=e.prototype
return t.getFields=function(){return"function"==typeof this._fields&&(this._fields=this._fields()),this._fields},t.toConfig=function(){var e=Object(a.a)(this.getFields(),(function(e){return{description:e.description,type:e.type,defaultValue:e.defaultValue,extensions:e.extensions,astNode:e.astNode}}))
return{name:this.name,description:this.description,fields:e,extensions:this.extensions,astNode:this.astNode,extensionASTNodes:this.extensionASTNodes||[]}},t.toString=function(){return this.name},e}()
function be(e){var t=ie(e.fields)||{}
return ue(t)||Object(c.a)(0,"".concat(e.name," fields must be an object with field names as keys or a function which returns such an object.")),Object(a.a)(t,(function(t,n){return!("resolve"in t)||Object(c.a)(0,"".concat(e.name,".").concat(n," field has a resolve property, but Input Types cannot define resolvers.")),y({},t,{name:n,description:t.description,type:t.type,defaultValue:t.defaultValue,extensions:t.extensions&&Object(s.a)(t.extensions),astNode:t.astNode})}))}function Oe(e){return M(e.type)&&void 0===e.defaultValue}Object(h.a)(ye),Object(d.a)(ye)},b9EY:function(e,t){e.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},bgCn:function(e,t,n){"use strict"
for(var r=n("AGgm").isSpace,i=[],o=0;o<256;o++)i.push(0)
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach((function(e){i[e.charCodeAt(0)]=1})),e.exports=function(e,t){var n,o=e.pos,a=e.posMax
if(92!==e.src.charCodeAt(o))return!1
if(++o<a){if((n=e.src.charCodeAt(o))<256&&0!==i[n])return t||(e.pending+=e.src[o]),e.pos+=2,!0
if(10===n){for(t||e.push("hardbreak","br",0),o++;o<a&&(n=e.src.charCodeAt(o),r(n));)o++
return e.pos=o,!0}}return t||(e.pending+="\\"),e.pos++,!0}},cJ7f:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=a(n("q1tI")),i=a(n("17x9")),o=a(n("dTH/"))
function a(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=l(t).call(this,e),n=!i||"object"!==s(i)&&"function"!=typeof i?u(r):i,p(u(n),"handleChange",(function(e){var t=e.target.value
n.setState({value:t}),n.debouncedOnSearch(t)})),p(u(n),"handleClear",(function(){n.setState({value:""}),n.props.onSearch("")})),n.state={value:e.value||""},n.debouncedOnSearch=(0,o.default)(200,n.props.onSearch),n}var n,i,a
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){return r.default.createElement("label",{className:"search-box"},r.default.createElement("input",{value:this.state.value,onChange:this.handleChange,type:"text",placeholder:this.props.placeholder}),this.state.value&&r.default.createElement("div",{className:"search-box-clear",onClick:this.handleClear},"✕"))}}])&&c(n.prototype,i),a&&c(n,a),t}(r.default.Component)
t.default=d,p(d,"propTypes",{value:i.default.string,placeholder:i.default.string,onSearch:i.default.func})},cTMM:function(e,t,n){"use strict"
var r=n("CWsV")
function i(e,t,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=t}i.prototype.Token=r,e.exports=i},"cfc+":function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var r=n("rWdj"),i=n("dWS+"),o=n("/jXB"),a=n("axIb"),s=n("umOc"),c=n("sJV+")
function l(e,t,n){return'Variable "$'.concat(e,'" of type "').concat(t,'" used in position expecting type "').concat(n,'".')}function u(e){var t=Object.create(null)
return{OperationDefinition:{enter:function(){t=Object.create(null)},leave:function(n){for(var o=e.getRecursiveVariableUsages(n),a=0;a<o.length;a++){var c=o[a],u=c.node,p=c.type,d=c.defaultValue,h=u.name.value,m=t[h]
if(m&&p){var g=e.getSchema(),v=Object(s.a)(g,m.type)
v&&!f(g,v,m.defaultValue,p,d)&&e.reportError(new i.a(l(h,Object(r.a)(v),Object(r.a)(p)),[m,u]))}}}},VariableDefinition:function(e){t[e.variable.name.value]=e}}}function f(e,t,n,r,i){if(Object(a.L)(r)&&!Object(a.L)(t)){if(!(null!=n&&n.kind!==o.Kind.NULL)&&!(void 0!==i))return!1
var s=r.ofType
return Object(c.c)(e,t,s)}return Object(c.c)(e,t,r)}},cokd:function(e,t,n){!function(e){"use strict"
var t={},n=/[^\s\u00a0]/,r=e.Pos
function i(e){var t=e.search(n)
return-1==t?0:t}function o(e,t){var n=e.getMode()
return!1!==n.useInnerComments&&n.innerMode?e.getModeAt(t):n}e.commands.toggleComment=function(e){e.toggleComment()},e.defineExtension("toggleComment",(function(e){e||(e=t)
for(var n=Infinity,i=this.listSelections(),o=null,a=i.length-1;a>=0;a--){var s=i[a].from(),c=i[a].to()
s.line>=n||(c.line>=n&&(c=r(n,0)),n=s.line,null==o?this.uncomment(s,c,e)?o="un":(this.lineComment(s,c,e),o="line"):"un"==o?this.uncomment(s,c,e):this.lineComment(s,c,e))}})),e.defineExtension("lineComment",(function(e,a,s){s||(s=t)
var c=this,l=o(c,e),u=c.getLine(e.line)
if(null!=u&&(f=e,p=u,!/\bstring\b/.test(c.getTokenTypeAt(r(f.line,0)))||/^[\'\"\`]/.test(p))){var f,p,d=s.lineComment||l.lineComment
if(d){var h=Math.min(0!=a.ch||a.line==e.line?a.line+1:a.line,c.lastLine()+1),m=null==s.padding?" ":s.padding,g=s.commentBlankLines||e.line==a.line
c.operation((function(){if(s.indent){for(var t=null,o=e.line;o<h;++o){var a=(l=c.getLine(o)).slice(0,i(l));(null==t||t.length>a.length)&&(t=a)}for(o=e.line;o<h;++o){var l=c.getLine(o),u=t.length;(g||n.test(l))&&(l.slice(0,u)!=t&&(u=i(l)),c.replaceRange(t+d+m,r(o,0),r(o,u)))}}else for(o=e.line;o<h;++o)(g||n.test(c.getLine(o)))&&c.replaceRange(d+m,r(o,0))}))}else(s.blockCommentStart||l.blockCommentStart)&&(s.fullLines=!0,c.blockComment(e,a,s))}})),e.defineExtension("blockComment",(function(e,i,a){a||(a=t)
var s=this,c=o(s,e),l=a.blockCommentStart||c.blockCommentStart,u=a.blockCommentEnd||c.blockCommentEnd
if(l&&u){if(!/\bcomment\b/.test(s.getTokenTypeAt(r(e.line,0)))){var f=Math.min(i.line,s.lastLine())
f!=e.line&&0==i.ch&&n.test(s.getLine(f))&&--f
var p=null==a.padding?" ":a.padding
e.line>f||s.operation((function(){if(0!=a.fullLines){var t=n.test(s.getLine(f))
s.replaceRange(p+u,r(f)),s.replaceRange(l+p,r(e.line,0))
var o=a.blockCommentLead||c.blockCommentLead
if(null!=o)for(var d=e.line+1;d<=f;++d)(d!=f||t)&&s.replaceRange(o+p,r(d,0))}else s.replaceRange(u,i),s.replaceRange(l,e)}))}}else(a.lineComment||c.lineComment)&&0!=a.fullLines&&s.lineComment(e,i,a)})),e.defineExtension("uncomment",(function(e,i,a){a||(a=t)
var s,c=this,l=o(c,e),u=Math.min(0!=i.ch||i.line==e.line?i.line:i.line-1,c.lastLine()),f=Math.min(e.line,u),p=a.lineComment||l.lineComment,d=[],h=null==a.padding?" ":a.padding
e:if(p){for(var m=f;m<=u;++m){var g=c.getLine(m),v=g.indexOf(p)
if(v>-1&&!/comment/.test(c.getTokenTypeAt(r(m,v+1)))&&(v=-1),-1==v&&n.test(g))break e
if(v>-1&&n.test(g.slice(0,v)))break e
d.push(g)}if(c.operation((function(){for(var e=f;e<=u;++e){var t=d[e-f],n=t.indexOf(p),i=n+p.length
n<0||(t.slice(i,i+h.length)==h&&(i+=h.length),s=!0,c.replaceRange("",r(e,n),r(e,i)))}})),s)return!0}var y=a.blockCommentStart||l.blockCommentStart,b=a.blockCommentEnd||l.blockCommentEnd
if(!y||!b)return!1
var O=a.blockCommentLead||l.blockCommentLead,w=c.getLine(f),x=w.indexOf(y)
if(-1==x)return!1
var k=u==f?w:c.getLine(u),E=k.indexOf(b,u==f?x+y.length:0),C=r(f,x+1),T=r(u,E+1)
if(-1==E||!/comment/.test(c.getTokenTypeAt(C))||!/comment/.test(c.getTokenTypeAt(T))||c.getRange(C,T,"\n").indexOf(b)>-1)return!1
var _=w.lastIndexOf(y,e.ch),S=-1==_?-1:w.slice(0,e.ch).indexOf(b,_+y.length)
if(-1!=_&&-1!=S&&S+b.length!=e.ch)return!1
S=k.indexOf(b,i.ch)
var N=k.slice(i.ch).lastIndexOf(y,S-i.ch)
return _=-1==S||-1==N?-1:i.ch+N,(-1==S||-1==_||_==i.ch)&&(c.operation((function(){c.replaceRange("",r(u,E-(h&&k.slice(E-h.length,E)==h?h.length:0)),r(u,E+b.length))
var e=x+y.length
if(h&&w.slice(e,e+h.length)==h&&(e+=h.length),c.replaceRange("",r(f,x),r(f,e)),O)for(var t=f+1;t<=u;++t){var i=c.getLine(t),o=i.indexOf(O)
if(-1!=o&&!n.test(i.slice(0,o))){var a=o+O.length
h&&i.slice(a,a+h.length)==h&&(a+=h.length),c.replaceRange("",r(t,o),r(t,a))}}})),!0)}))}(n("VrN/"))},dO1m:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ExecuteButton=void 0
var r=o(n("q1tI")),i=o(n("17x9"))
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=c(t).call(this,e),n=!i||"object"!==a(i)&&"function"!=typeof i?l(r):i,f(l(n),"_onClick",(function(){n.props.isRunning?n.props.onStop():n.props.onRun()})),f(l(n),"_onOptionSelected",(function(e){n.setState({optionsOpen:!1}),n.props.onRun(e.name&&e.name.value)})),f(l(n),"_onOptionsOpen",(function(e){var t=!0,r=e.target
n.setState({highlight:null,optionsOpen:!0})
var i=function(e){t&&e.target===r?t=!1:(document.removeEventListener("mouseup",i),i=null,r.parentNode.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_CONTAINED_BY||n.setState({optionsOpen:!1}))}
document.addEventListener("mouseup",i)})),n.state={optionsOpen:!1,highlight:null},n}var n,i,o
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e,t,n=this,i=this.props.operations,o=this.state.optionsOpen,a=i&&i.length>1,s=null
if(a&&o){var c=this.state.highlight
s=r.default.createElement("ul",{className:"execute-options"},i.map((function(e){return r.default.createElement("li",{key:e.name?e.name.value:"*",className:e===c?"selected":void 0,onMouseOver:function(){return n.setState({highlight:e})},onMouseOut:function(){return n.setState({highlight:null})},onMouseUp:function(){return n._onOptionSelected(e)}},e.name?e.name.value:"<Unnamed>")})))}!this.props.isRunning&&a||(e=this._onClick),this.props.isRunning||!a||o||(t=this._onOptionsOpen)
var l=this.props.isRunning?r.default.createElement("path",{d:"M 10 10 L 23 10 L 23 23 L 10 23 z"}):r.default.createElement("path",{d:"M 11 9 L 24 16 L 11 23 z"})
return r.default.createElement("div",{className:"execute-button-wrap"},r.default.createElement("button",{type:"button",className:"execute-button",onMouseDown:t,onClick:e,title:"Execute Query (Ctrl-Enter)"},r.default.createElement("svg",{width:"34",height:"34"},l)),s)}}])&&s(n.prototype,i),o&&s(n,o),t}(r.default.Component)
t.ExecuteButton=p,f(p,"propTypes",{onRun:i.default.func,onStop:i.default.func,isRunning:i.default.bool,operations:i.default.array})},"dTH/":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n
return function(){var r=this,i=arguments
clearTimeout(n),n=setTimeout((function(){n=null,t.apply(r,i)}),e)}}},"das/":function(e,t,n){"use strict"
function r(e){return null==e||e!=e}n.d(t,"a",(function(){return r}))},dlVl:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=c(n("q1tI")),i=c(n("17x9")),o=c(n("ThnF")),a=c(n("QW45")),s=c(n("KuaT"))
function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,g,v,y=function(e){function t(){return u(this,t),p(this,d(t).apply(this,arguments))}var n,i,c
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.field!==e.field}},{key:"render",value:function(){var e,t=this,n=this.props.field
return n.args&&n.args.length>0&&(e=r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"arguments"),n.args.map((function(e){return r.default.createElement("div",{key:e.name,className:"doc-category-item"},r.default.createElement("div",null,r.default.createElement(o.default,{arg:e,onClickType:t.props.onClickType})),r.default.createElement(a.default,{className:"doc-value-description",markdown:e.description}))})))),r.default.createElement("div",null,r.default.createElement(a.default,{className:"doc-type-description",markdown:n.description||"No Description"}),n.deprecationReason&&r.default.createElement(a.default,{className:"doc-deprecation",markdown:n.deprecationReason}),r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"type"),r.default.createElement(s.default,{type:n.type,onClick:this.props.onClickType})),e)}}])&&f(n.prototype,i),c&&f(n,c),t}(r.default.Component)
t.default=y,m=y,g="propTypes",v={field:i.default.object,onClickType:i.default.func},g in m?Object.defineProperty(m,g,{value:v,enumerable:!0,configurable:!0,writable:!0}):m[g]=v},dpam:function(e,t,n){"use strict"
var r=n("SINd"),i=[["table",n("gNPE"),["paragraph","reference"]],["code",n("nBLk")],["fence",n("vys+"),["paragraph","reference","blockquote","list"]],["blockquote",n("6A5J"),["paragraph","reference","blockquote","list"]],["hr",n("/f6Q"),["paragraph","reference","blockquote","list"]],["list",n("Sz5L"),["paragraph","reference","blockquote"]],["reference",n("1nBO")],["heading",n("B1jb"),["paragraph","reference","blockquote"]],["lheading",n("GZ5e")],["html_block",n("X71X"),["paragraph","reference","blockquote"]],["paragraph",n("RKh7")]]
function o(){this.ruler=new r
for(var e=0;e<i.length;e++)this.ruler.push(i[e][0],i[e][1],{alt:(i[e][2]||[]).slice()})}o.prototype.tokenize=function(e,t,n){for(var r,i=this.ruler.getRules(""),o=i.length,a=t,s=!1,c=e.md.options.maxNesting;a<n&&(e.line=a=e.skipEmptyLines(a),!(a>=n))&&!(e.sCount[a]<e.blkIndent);){if(e.level>=c){e.line=n
break}for(r=0;r<o&&!i[r](e,a,n,!1);r++);e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),(a=e.line)<n&&e.isEmpty(a)&&(s=!0,a++,e.line=a)}},o.prototype.parse=function(e,t,n,r){var i
e&&(i=new this.State(e,t,n,r),this.tokenize(i,i.line,i.lineMax))},o.prototype.State=n("g0+v"),e.exports=o},dwPZ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=[],n=Object.create(null)
return{ObjectValue:{enter:function(){t.push(n),n=Object.create(null)},leave:function(){n=t.pop()}},ObjectField:function(t){var i=t.name.value
n[i]?e.reportError(new r.a(function(e){return'There can be only one input field named "'.concat(e,'".')}(i),[n[i],t.name])):n[i]=t.name}}}},eQbp:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.DocExplorer=void 0
var r=f(n("q1tI")),i=f(n("17x9")),o=n("Tzvz"),a=f(n("dlVl")),s=f(n("gHKs")),c=f(n("cJ7f")),l=f(n("vCZO")),u=f(n("LvYD"))
function f(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={name:"Schema",title:"Documentation Explorer"},b=function(e){function t(){var e,n,r
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=h(t).call(this),e=!r||"object"!==p(r)&&"function"!=typeof r?m(n):r,v(m(e),"handleNavBackClick",(function(){e.state.navStack.length>1&&e.setState({navStack:e.state.navStack.slice(0,-1)})})),v(m(e),"handleClickTypeOrField",(function(t){e.showDoc(t)})),v(m(e),"handleSearch",(function(t){e.showSearch(t)})),e.state={navStack:[y]},e}var n,i,f
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(i=[{key:"shouldComponentUpdate",value:function(e,t){return this.props.schema!==e.schema||this.state.navStack!==t.navStack}},{key:"render",value:function(){var e,t=this.props.schema,n=this.state.navStack,i=n[n.length-1]
e=void 0===t?r.default.createElement("div",{className:"spinner-container"},r.default.createElement("div",{className:"spinner"})):t?i.search?r.default.createElement(l.default,{searchValue:i.search,withinType:i.def,schema:t,onClickType:this.handleClickTypeOrField,onClickField:this.handleClickTypeOrField}):1===n.length?r.default.createElement(s.default,{schema:t,onClickType:this.handleClickTypeOrField}):(0,o.isType)(i.def)?r.default.createElement(u.default,{schema:t,type:i.def,onClickType:this.handleClickTypeOrField,onClickField:this.handleClickTypeOrField}):r.default.createElement(a.default,{field:i.def,onClickType:this.handleClickTypeOrField}):r.default.createElement("div",{className:"error-container"},"No Schema Available")
var f,p=1===n.length||(0,o.isType)(i.def)&&i.def.getFields
return n.length>1&&(f=n[n.length-2].name),r.default.createElement("div",{className:"doc-explorer",key:i.name},r.default.createElement("div",{className:"doc-explorer-title-bar"},f&&r.default.createElement("div",{className:"doc-explorer-back",onClick:this.handleNavBackClick},f),r.default.createElement("div",{className:"doc-explorer-title"},i.title||i.name),r.default.createElement("div",{className:"doc-explorer-rhs"},this.props.children)),r.default.createElement("div",{className:"doc-explorer-contents"},p&&r.default.createElement(c.default,{value:i.search,placeholder:"Search ".concat(i.name,"..."),onSearch:this.handleSearch}),e))}},{key:"showDoc",value:function(e){var t=this.state.navStack
t[t.length-1].def!==e&&this.setState({navStack:t.concat([{name:e.name,def:e}])})}},{key:"showDocForReference",value:function(e){"Type"===e.kind?this.showDoc(e.type):"Field"===e.kind||"Argument"===e.kind&&e.field?this.showDoc(e.field):"EnumValue"===e.kind&&e.type&&this.showDoc(e.type)}},{key:"showSearch",value:function(e){var t=this.state.navStack.slice(),n=t[t.length-1]
t[t.length-1]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}({},n,{search:e}),this.setState({navStack:t})}},{key:"reset",value:function(){this.setState({navStack:[y]})}}])&&d(n.prototype,i),f&&d(n,f),t}(r.default.Component)
t.DocExplorer=b,v(b,"propTypes",{schema:i.default.instanceOf(o.GraphQLSchema)})},fKCf:function(e,t){e.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},"fMI+":function(e,t,n){"use strict"
var r=n("AGgm").assign,i=n("AGgm").unescapeAll,o=n("AGgm").escapeHtml,a={}
function s(){this.rules=r({},a)}a.code_inline=function(e,t,n,r,i){var a=e[t]
return"<code"+i.renderAttrs(a)+">"+o(e[t].content)+"</code>"},a.code_block=function(e,t,n,r,i){var a=e[t]
return"<pre"+i.renderAttrs(a)+"><code>"+o(e[t].content)+"</code></pre>\n"},a.fence=function(e,t,n,r,a){var s,c,l,u,f=e[t],p=f.info?i(f.info).trim():"",d=""
return p&&(d=p.split(/\s+/g)[0]),0===(s=n.highlight&&n.highlight(f.content,d)||o(f.content)).indexOf("<pre")?s+"\n":p?(c=f.attrIndex("class"),l=f.attrs?f.attrs.slice():[],c<0?l.push(["class",n.langPrefix+d]):l[c][1]+=" "+n.langPrefix+d,u={attrs:l},"<pre><code"+a.renderAttrs(u)+">"+s+"</code></pre>\n"):"<pre><code"+a.renderAttrs(f)+">"+s+"</code></pre>\n"},a.image=function(e,t,n,r,i){var o=e[t]
return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,n,r),i.renderToken(e,t,n)},a.hardbreak=function(e,t,n){return n.xhtmlOut?"<br />\n":"<br>\n"},a.softbreak=function(e,t,n){return n.breaks?n.xhtmlOut?"<br />\n":"<br>\n":"\n"},a.text=function(e,t){return o(e[t].content)},a.html_block=function(e,t){return e[t].content},a.html_inline=function(e,t){return e[t].content},s.prototype.renderAttrs=function(e){var t,n,r
if(!e.attrs)return""
for(r="",t=0,n=e.attrs.length;t<n;t++)r+=" "+o(e.attrs[t][0])+'="'+o(e.attrs[t][1])+'"'
return r},s.prototype.renderToken=function(e,t,n){var r,i="",o=!1,a=e[t]
return a.hidden?"":(a.block&&-1!==a.nesting&&t&&e[t-1].hidden&&(i+="\n"),i+=(-1===a.nesting?"</":"<")+a.tag,i+=this.renderAttrs(a),0===a.nesting&&n.xhtmlOut&&(i+=" /"),a.block&&(o=!0,1===a.nesting&&t+1<e.length&&("inline"===(r=e[t+1]).type||r.hidden||-1===r.nesting&&r.tag===a.tag)&&(o=!1)),i+=o?">\n":">")},s.prototype.renderInline=function(e,t,n){for(var r,i="",o=this.rules,a=0,s=e.length;a<s;a++)void 0!==o[r=e[a].type]?i+=o[r](e,a,t,n,this):i+=this.renderToken(e,a,t)
return i},s.prototype.renderInlineAsText=function(e,t,n){for(var r="",i=0,o=e.length;i<o;i++)"text"===e[i].type?r+=e[i].content:"image"===e[i].type&&(r+=this.renderInlineAsText(e[i].children,t,n))
return r},s.prototype.render=function(e,t,n){var r,i,o,a="",s=this.rules
for(r=0,i=e.length;r<i;r++)"inline"===(o=e[r].type)?a+=this.renderInline(e[r].children,t,n):void 0!==s[o]?a+=s[e[r].type](e,r,t,n,this):a+=this.renderToken(e,r,t,n)
return a},e.exports=s},fZFN:function(e,t,n){"use strict"
var r=n("AGgm").unescapeAll
e.exports=function(e,t,n){var i,o,a=0,s=t,c={ok:!1,pos:0,lines:0,str:""}
if(t>=n)return c
if(34!==(o=e.charCodeAt(t))&&39!==o&&40!==o)return c
for(t++,40===o&&(o=41);t<n;){if((i=e.charCodeAt(t))===o)return c.pos=t+1,c.lines=a,c.str=r(e.slice(s+1,t)),c.ok=!0,c
10===i?a++:92===i&&t+1<n&&(t++,10===e.charCodeAt(t)&&a++),t++}return c}},"g0+v":function(e,t,n){"use strict"
var r=n("CWsV"),i=n("AGgm").isSpace
function o(e,t,n,r){var o,a,s,c,l,u,f,p
for(this.src=e,this.md=t,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.parentType="root",this.level=0,this.result="",p=!1,s=c=u=f=0,l=(a=this.src).length;c<l;c++){if(o=a.charCodeAt(c),!p){if(i(o)){u++,9===o?f+=4-f%4:f++
continue}p=!0}10!==o&&c!==l-1||(10!==o&&c++,this.bMarks.push(s),this.eMarks.push(c),this.tShift.push(u),this.sCount.push(f),this.bsCount.push(0),p=!1,u=0,f=0,s=c+1)}this.bMarks.push(a.length),this.eMarks.push(a.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}o.prototype.push=function(e,t,n){var i=new r(e,t,n)
return i.block=!0,n<0&&this.level--,i.level=this.level,n>0&&this.level++,this.tokens.push(i),i},o.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},o.prototype.skipEmptyLines=function(e){for(var t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},o.prototype.skipSpaces=function(e){for(var t,n=this.src.length;e<n&&(t=this.src.charCodeAt(e),i(t));e++);return e},o.prototype.skipSpacesBack=function(e,t){if(e<=t)return e
for(;e>t;)if(!i(this.src.charCodeAt(--e)))return e+1
return e},o.prototype.skipChars=function(e,t){for(var n=this.src.length;e<n&&this.src.charCodeAt(e)===t;e++);return e},o.prototype.skipCharsBack=function(e,t,n){if(e<=n)return e
for(;e>n;)if(t!==this.src.charCodeAt(--e))return e+1
return e},o.prototype.getLines=function(e,t,n,r){var o,a,s,c,l,u,f,p=e
if(e>=t)return""
for(u=new Array(t-e),o=0;p<t;p++,o++){for(a=0,f=c=this.bMarks[p],l=p+1<t||r?this.eMarks[p]+1:this.eMarks[p];c<l&&a<n;){if(s=this.src.charCodeAt(c),i(s))9===s?a+=4-(a+this.bsCount[p])%4:a++
else{if(!(c-f<this.tShift[p]))break
a++}c++}u[o]=a>n?new Array(a-n+1).join(" ")+this.src.slice(c,l):this.src.slice(c,l)}return u.join("")},o.prototype.Token=r,e.exports=o},g40J:function(e,t,n){"use strict"
e.exports=function(e){var t,n,r,i,o=e.delimiters,a=e.delimiters.length
for(t=0;t<a;t++)if((r=o[t]).close)for(n=t-r.jump-1;n>=0;){if((i=o[n]).open&&i.marker===r.marker&&i.end<0&&i.level===r.level)if(!((i.close||r.open)&&void 0!==i.length&&void 0!==r.length&&(i.length+r.length)%3==0)){r.jump=t-n,r.open=!1,i.end=t,i.jump=0
break}n-=i.jump+1}}},g4S7:function(e,t,n){"use strict"
n.d(t,"a",(function(){return o}))
var r=n("dWS+"),i=n("/jXB")
function o(e){var t=0
return{Document:function(e){t=e.definitions.filter((function(e){return e.kind===i.Kind.OPERATION_DEFINITION})).length},OperationDefinition:function(n){!n.name&&t>1&&e.reportError(new r.a("This anonymous operation must be the only defined operation.",n))}}}},gHKs:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=s(n("q1tI")),i=s(n("17x9")),o=s(n("KuaT")),a=s(n("QW45"))
function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,m,g,v=function(e){function t(){return l(this,t),f(this,p(t).apply(this,arguments))}var n,i,s
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.schema!==e.schema}},{key:"render",value:function(){var e=this.props.schema,t=e.getQueryType(),n=e.getMutationType&&e.getMutationType(),i=e.getSubscriptionType&&e.getSubscriptionType()
return r.default.createElement("div",null,r.default.createElement(a.default,{className:"doc-type-description",markdown:"A GraphQL schema provides a root type for each kind of operation."}),r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"root types"),r.default.createElement("div",{className:"doc-category-item"},r.default.createElement("span",{className:"keyword"},"query"),": ",r.default.createElement(o.default,{type:t,onClick:this.props.onClickType})),n&&r.default.createElement("div",{className:"doc-category-item"},r.default.createElement("span",{className:"keyword"},"mutation"),": ",r.default.createElement(o.default,{type:n,onClick:this.props.onClickType})),i&&r.default.createElement("div",{className:"doc-category-item"},r.default.createElement("span",{className:"keyword"},"subscription"),": ",r.default.createElement(o.default,{type:i,onClick:this.props.onClickType}))))}}])&&u(n.prototype,i),s&&u(n,s),t}(r.default.Component)
t.default=v,h=v,m="propTypes",g={schema:i.default.object,onClickType:i.default.func},m in h?Object.defineProperty(h,m,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[m]=g},gI7C:function(e,t,n){"use strict"
n.r(t),n.d(t,"getASTNodeAtPosition",(function(){return i})),n.d(t,"pointToOffset",(function(){return o}))
var r=n("L2ys")
function i(e,t,n){const i=o(e,n)
let a
return Object(r.c)(t,{enter(e){if(!("Name"!==e.kind&&e.loc&&e.loc.start<=i&&i<=e.loc.end))return!1
a=e},leave(e){if(e.loc&&e.loc.start<=i&&i<=e.loc.end)return!1}}),a}function o(e,t){const n=e.split("\n").slice(0,t.line)
return t.character+n.map(e=>e.length+1).reduce((e,t)=>e+t,0)}},gNPE:function(e,t,n){"use strict"
var r=n("AGgm").isSpace
function i(e,t){var n=e.bMarks[t]+e.blkIndent,r=e.eMarks[t]
return e.src.substr(n,r-n)}function o(e){var t,n=[],r=0,i=e.length,o=0,a=0,s=!1,c=0
for(t=e.charCodeAt(r);r<i;)96===t?s?(s=!1,c=r):o%2==0&&(s=!0,c=r):124!==t||o%2!=0||s||(n.push(e.substring(a,r)),a=r+1),92===t?o++:o=0,++r===i&&s&&(s=!1,r=c+1),t=e.charCodeAt(r)
return n.push(e.substring(a)),n}e.exports=function(e,t,n,a){var s,c,l,u,f,p,d,h,m,g,v,y
if(t+2>n)return!1
if(f=t+1,e.sCount[f]<e.blkIndent)return!1
if(e.sCount[f]-e.blkIndent>=4)return!1
if((l=e.bMarks[f]+e.tShift[f])>=e.eMarks[f])return!1
if(124!==(s=e.src.charCodeAt(l++))&&45!==s&&58!==s)return!1
for(;l<e.eMarks[f];){if(124!==(s=e.src.charCodeAt(l))&&45!==s&&58!==s&&!r(s))return!1
l++}for(p=(c=i(e,t+1)).split("|"),m=[],u=0;u<p.length;u++){if(!(g=p[u].trim())){if(0===u||u===p.length-1)continue
return!1}if(!/^:?-+:?$/.test(g))return!1
58===g.charCodeAt(g.length-1)?m.push(58===g.charCodeAt(0)?"center":"right"):58===g.charCodeAt(0)?m.push("left"):m.push("")}if(-1===(c=i(e,t).trim()).indexOf("|"))return!1
if(e.sCount[t]-e.blkIndent>=4)return!1
if((d=(p=o(c.replace(/^\||\|$/g,""))).length)>m.length)return!1
if(a)return!0
for((h=e.push("table_open","table",1)).map=v=[t,0],(h=e.push("thead_open","thead",1)).map=[t,t+1],(h=e.push("tr_open","tr",1)).map=[t,t+1],u=0;u<p.length;u++)(h=e.push("th_open","th",1)).map=[t,t+1],m[u]&&(h.attrs=[["style","text-align:"+m[u]]]),(h=e.push("inline","",0)).content=p[u].trim(),h.map=[t,t+1],h.children=[],h=e.push("th_close","th",-1)
for(h=e.push("tr_close","tr",-1),h=e.push("thead_close","thead",-1),(h=e.push("tbody_open","tbody",1)).map=y=[t+2,0],f=t+2;f<n&&!(e.sCount[f]<e.blkIndent)&&-1!==(c=i(e,f).trim()).indexOf("|")&&!(e.sCount[f]-e.blkIndent>=4);f++){for(p=o(c.replace(/^\||\|$/g,"")),h=e.push("tr_open","tr",1),u=0;u<d;u++)h=e.push("td_open","td",1),m[u]&&(h.attrs=[["style","text-align:"+m[u]]]),(h=e.push("inline","",0)).content=p[u]?p[u].trim():"",h.children=[],h=e.push("td_close","td",-1)
h=e.push("tr_close","tr",-1)}return h=e.push("tbody_close","tbody",-1),h=e.push("table_close","table",-1),v[1]=y[1]=f,e.line=f,!0}},gggk:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){return{OperationDefinition:function(t){var n
"subscription"===t.operation&&1!==t.selectionSet.selections.length&&e.reportError(new r.a((n=t.name&&t.name.value)?'Subscription "'.concat(n,'" must select only one top level field.'):"Anonymous Subscription must select only one top level field.",t.selectionSet.selections.slice(1)))}}}},gnEv:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!t)return
var n
try{n=(0,r.parse)(t)}catch(e){return}var o=e?i(e,n):null,a=[]
return n.definitions.forEach((function(e){"OperationDefinition"===e.kind&&a.push(e)})),{variableToType:o,operations:a}},t.collectVariables=i
var r=n("Tzvz")
function i(e,t){var n=Object.create(null)
return t.definitions.forEach((function(t){if("OperationDefinition"===t.kind){var i=t.variableDefinitions
i&&i.forEach((function(t){var i=t.variable,o=t.type,a=(0,r.typeFromAST)(e,o)
a&&(n[i.name.value]=a)}))}})),n}},herJ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=Object.create(null),n=e.getSchema()
return{DirectiveDefinition:function(i){var o=i.name.value
if(!n||!n.getDirective(o))return t[o]?e.reportError(new r.a(function(e){return'There can be only one directive named "'.concat(e,'".')}(o),[t[o],i.name])):t[o]=i.name,!1
e.reportError(new r.a(function(e){return'Directive "'.concat(e,'" already exists in the schema. It cannot be redefined.')}(o),i.name))}}}},hliF:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("dWS+"),i=n("L2ys"),o=n("axIb"),a=n("4RMZ")
function s(e,t){var n=[],s=new a.a(e)
return Object(i.c)(t,Object(i.e)(s,{Field:function(e){var t=s.getFieldDef()
if(t&&t.isDeprecated){var i=s.getParentType()
if(i){var o=t.deprecationReason
n.push(new r.a("The field ".concat(i.name,".").concat(t.name," is deprecated.")+(o?" "+o:""),e))}}},EnumValue:function(e){var t=s.getEnumValue()
if(t&&t.isDeprecated){var i=Object(o.A)(s.getInputType())
if(i){var a=t.deprecationReason
n.push(new r.a("The enum value ".concat(i.name,".").concat(t.name," is deprecated.")+(a?" "+a:""),e))}}}})),n}},huIT:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ImagePreview=void 0
var r=o(n("q1tI")),i=o(n("17x9"))
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){if("string"!==e.type)return null
var t=e.string.slice(1).slice(0,-1).trim()
try{var n=window.location
return new URL(t,n.protocol+"//"+n.host)}catch(e){return null}}var h=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(i=s(t).call(this,e))||"object"!==a(i)&&"function"!=typeof i?c(r):i,p(c(n),"state",{width:null,height:null,src:null,mime:null}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),u(t,null,[{key:"shouldRender",value:function(e){var t=d(e)
return!!t&&function(e){return/(bmp|gif|jpeg|jpg|png|svg)$/.test(e.pathname)}(t)}}]),u(t,[{key:"componentDidMount",value:function(){this._updateMetadata()}},{key:"componentDidUpdate",value:function(){this._updateMetadata()}},{key:"render",value:function(){var e=this,t=null
if(null!==this.state.width&&null!==this.state.height){var n=this.state.width+"x"+this.state.height
null!==this.state.mime&&(n+=" "+this.state.mime),t=r.default.createElement("div",null,n)}return r.default.createElement("div",null,r.default.createElement("img",{onLoad:function(){return e._updateMetadata()},ref:function(t){e._node=t},src:d(this.props.token)}),t)}},{key:"_updateMetadata",value:function(){var e=this
if(this._node){var t=this._node.naturalWidth,n=this._node.naturalHeight,r=this._node.src
r!==this.state.src&&(this.setState({src:r}),fetch(r,{method:"HEAD"}).then((function(t){e.setState({mime:t.headers.get("Content-Type")})}))),t===this.state.width&&n===this.state.height||this.setState({height:n,width:t})}}}]),t}(r.default.Component)
t.ImagePreview=h,p(h,"propTypes",{token:i.default.any})},i1zs:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n={schema:e,type:null,parentType:null,inputType:null,directiveDef:null,fieldDef:null,argDef:null,argDefs:null,objectFieldDefs:null}
return(0,a.default)(t,(function(t){switch(t.kind){case"Query":case"ShortQuery":n.type=e.getQueryType()
break
case"Mutation":n.type=e.getMutationType()
break
case"Subscription":n.type=e.getSubscriptionType()
break
case"InlineFragment":case"FragmentDefinition":t.type&&(n.type=e.getType(t.type))
break
case"Field":case"AliasedField":n.fieldDef=n.type&&t.name?s(e,n.parentType,t.name):null,n.type=n.fieldDef&&n.fieldDef.type
break
case"SelectionSet":n.parentType=(0,i.getNamedType)(n.type)
break
case"Directive":n.directiveDef=t.name&&e.getDirective(t.name)
break
case"Arguments":var r="Field"===t.prevState.kind?n.fieldDef:"Directive"===t.prevState.kind?n.directiveDef:"AliasedField"===t.prevState.kind?t.prevState.name&&s(e,n.parentType,t.prevState.name):null
n.argDefs=r&&r.args
break
case"Argument":if(n.argDef=null,n.argDefs)for(var o=0;o<n.argDefs.length;o++)if(n.argDefs[o].name===t.name){n.argDef=n.argDefs[o]
break}n.inputType=n.argDef&&n.argDef.type
break
case"EnumValue":var a=(0,i.getNamedType)(n.inputType)
n.enumValue=a instanceof i.GraphQLEnumType?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return e[n]}(a.getValues(),(function(e){return e.value===t.name})):null
break
case"ListValue":var c=(0,i.getNullableType)(n.inputType)
n.inputType=c instanceof i.GraphQLList?c.ofType:null
break
case"ObjectValue":var l=(0,i.getNamedType)(n.inputType)
n.objectFieldDefs=l instanceof i.GraphQLInputObjectType?l.getFields():null
break
case"ObjectField":var u=t.name&&n.objectFieldDefs?n.objectFieldDefs[t.name]:null
n.inputType=u&&u.type
break
case"NamedType":n.type=e.getType(t.name)}})),n}
var r,i=n("Tzvz"),o=n("LViu"),a=(r=n("DOSD"))&&r.__esModule?r:{default:r}
function s(e,t,n){return n===o.SchemaMetaFieldDef.name&&e.getQueryType()===t?o.SchemaMetaFieldDef:n===o.TypeMetaFieldDef.name&&e.getQueryType()===t?o.TypeMetaFieldDef:n===o.TypeNameMetaFieldDef.name&&(0,i.isCompositeType)(t)?o.TypeNameMetaFieldDef:t.getFields?t.getFields()[n]:void 0}},iCJ0:function(e,t,n){!function(e){"use strict"
var t="CodeMirror-lint-markers"
function n(e){e.parentNode&&e.parentNode.removeChild(e)}function r(t,r,i,o){var a=function(t,n,r){var i=document.createElement("div")
function o(t){if(!i.parentNode)return e.off(document,"mousemove",o)
i.style.top=Math.max(0,t.clientY-i.offsetHeight-5)+"px",i.style.left=t.clientX+5+"px"}return i.className="CodeMirror-lint-tooltip cm-s-"+t.options.theme,i.appendChild(r.cloneNode(!0)),t.state.lint.options.selfContain?t.getWrapperElement().appendChild(i):document.body.appendChild(i),e.on(document,"mousemove",o),o(n),null!=i.style.opacity&&(i.style.opacity=1),i}(t,r,i)
function s(){var t
e.off(o,"mouseout",s),a&&((t=a).parentNode&&(null==t.style.opacity&&n(t),t.style.opacity=0,setTimeout((function(){n(t)}),600)),a=null)}var c=setInterval((function(){if(a)for(var e=o;;e=e.parentNode){if(e&&11==e.nodeType&&(e=e.host),e==document.body)return
if(!e){s()
break}}if(!a)return clearInterval(c)}),400)
e.on(o,"mouseout",s)}function i(e,t,n){this.marked=[],this.options=t,this.timeout=null,this.hasGutter=n,this.onMouseOver=function(t){!function(e,t){var n=t.target||t.srcElement
if(/\bCodeMirror-lint-mark-/.test(n.className)){for(var i=n.getBoundingClientRect(),o=(i.left+i.right)/2,a=(i.top+i.bottom)/2,c=e.findMarksAt(e.coordsChar({left:o,top:a},"client")),l=[],u=0;u<c.length;++u){var f=c[u].__annotation
f&&l.push(f)}l.length&&function(e,t,n){for(var i=n.target||n.srcElement,o=document.createDocumentFragment(),a=0;a<t.length;a++){var c=t[a]
o.appendChild(s(c))}r(e,n,o,i)}(e,l,t)}}(e,t)},this.waitingFor=0}function o(e){var n=e.state.lint
n.hasGutter&&e.clearGutter(t)
for(var r=0;r<n.marked.length;++r)n.marked[r].clear()
n.marked.length=0}function a(t,n,i,o,a){var s=document.createElement("div"),c=s
return s.className="CodeMirror-lint-marker-"+i,o&&((c=s.appendChild(document.createElement("div"))).className="CodeMirror-lint-marker-multiple"),0!=a&&e.on(c,"mouseover",(function(e){r(t,e,n,c)})),s}function s(e){var t=e.severity
t||(t="error")
var n=document.createElement("div")
return n.className="CodeMirror-lint-message-"+t,void 0!==e.messageHTML?n.innerHTML=e.messageHTML:n.appendChild(document.createTextNode(e.message)),n}function c(t){var n=t.state.lint.options,r=n.options||n,i=n.getAnnotations||t.getHelper(e.Pos(0,0),"lint")
if(i)if(n.async||i.async)!function(t,n,r){var i=t.state.lint,o=++i.waitingFor
function a(){o=-1,t.off("change",a)}t.on("change",a),n(t.getValue(),(function(n,r){t.off("change",a),i.waitingFor==o&&(r&&n instanceof e&&(n=r),t.operation((function(){l(t,n)})))}),r,t)}(t,i,r)
else{var o=i(t.getValue(),r,t)
if(!o)return
o.then?o.then((function(e){t.operation((function(){l(t,e)}))})):t.operation((function(){l(t,o)}))}}function l(e,n){o(e)
for(var r,i,c=e.state.lint,l=c.options,u=function(e){for(var t=[],n=0;n<e.length;++n){var r=e[n],i=r.from.line;(t[i]||(t[i]=[])).push(r)}return t}(n),f=0;f<u.length;++f){var p=u[f]
if(p){for(var d=null,h=c.hasGutter&&document.createDocumentFragment(),m=0;m<p.length;++m){var g=p[m],v=g.severity
v||(v="error"),i=v,d="error"==(r=d)?r:i,l.formatAnnotation&&(g=l.formatAnnotation(g)),c.hasGutter&&h.appendChild(s(g)),g.to&&c.marked.push(e.markText(g.from,g.to,{className:"CodeMirror-lint-mark-"+v,__annotation:g}))}c.hasGutter&&e.setGutterMarker(f,t,a(e,h,d,p.length>1,c.options.tooltips))}}l.onUpdateLinting&&l.onUpdateLinting(n,u,e)}function u(e){var t=e.state.lint
t&&(clearTimeout(t.timeout),t.timeout=setTimeout((function(){c(e)}),t.options.delay||500))}e.defineOption("lint",!1,(function(n,r,a){if(a&&a!=e.Init&&(o(n),!1!==n.state.lint.options.lintOnChange&&n.off("change",u),e.off(n.getWrapperElement(),"mouseover",n.state.lint.onMouseOver),clearTimeout(n.state.lint.timeout),delete n.state.lint),r){for(var s=n.getOption("gutters"),l=!1,f=0;f<s.length;++f)s[f]==t&&(l=!0)
var p=n.state.lint=new i(n,(d=r)instanceof Function?{getAnnotations:d}:(d&&!0!==d||(d={}),d),l)
!1!==p.options.lintOnChange&&n.on("change",u),0!=p.options.tooltips&&"gutter"!=p.options.tooltips&&e.on(n.getWrapperElement(),"mouseover",p.onMouseOver),c(n)}var d})),e.defineExtension("performLint",(function(){this.state.lint&&c(this)}))}(n("VrN/"))},iMDj:function(e,t,n){"use strict"
var r,i=(r=n("VrN/"))&&r.__esModule?r:{default:r},o=n("JCIs")
function a(e,t){var n=e.levels
return(n&&0!==n.length?n[n.length-1]-(this.electricInput.test(t)?1:0):e.indentLevel)*this.config.indentUnit}i.default.defineMode("graphql-results",(function(e){var t=(0,o.onlineParser)({eatWhitespace:function(e){return e.eatSpace()},lexRules:s,parseRules:c,editorConfig:{tabSize:e.tabSize}})
return{config:e,startState:t.startState,token:t.token,indent:a,electricInput:/^\s*[}\]]/,fold:"brace",closeBrackets:{pairs:'[]{}""',explode:"[]{}"}}}))
var s={Punctuation:/^\[|]|\{|\}|:|,/,Number:/^-?(?:0|(?:[1-9][0-9]*))(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?/,String:/^"(?:[^"\\]|\\(?:"|\/|\\|b|f|n|r|t|u[0-9a-fA-F]{4}))*"?/,Keyword:/^true|false|null/},c={Document:[(0,o.p)("{"),(0,o.list)("Entry",(0,o.p)(",")),(0,o.p)("}")],Entry:[(0,o.t)("String","def"),(0,o.p)(":"),"Value"],Value:function(e){switch(e.kind){case"Number":return"NumberValue"
case"String":return"StringValue"
case"Punctuation":switch(e.value){case"[":return"ListValue"
case"{":return"ObjectValue"}return null
case"Keyword":switch(e.value){case"true":case"false":return"BooleanValue"
case"null":return"NullValue"}return null}},NumberValue:[(0,o.t)("Number","number")],StringValue:[(0,o.t)("String","string")],BooleanValue:[(0,o.t)("Keyword","builtin")],NullValue:[(0,o.t)("Keyword","keyword")],ListValue:[(0,o.p)("["),(0,o.list)("Value",(0,o.p)(",")),(0,o.p)("]")],ObjectValue:[(0,o.p)("{"),(0,o.list)("ObjectField",(0,o.p)(",")),(0,o.p)("}")],ObjectField:[(0,o.t)("String","property"),(0,o.p)(":"),"Value"]}},"ijE+":function(e,t,n){"use strict"
e.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},iyJ7:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("dWS+"),i=n("axIb")
function o(e,t){return'Field "'.concat(e,".").concat(t,'" can only be defined once.')}function a(e,t){return'Field "'.concat(e,".").concat(t,'" already exists in the schema. It cannot also be defined in this type extension.')}function s(e){var t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),i=Object.create(null)
return{InputObjectTypeDefinition:s,InputObjectTypeExtension:s,InterfaceTypeDefinition:s,InterfaceTypeExtension:s,ObjectTypeDefinition:s,ObjectTypeExtension:s}
function s(t){var s=t.name.value
if(i[s]||(i[s]=Object.create(null)),t.fields)for(var l=i[s],u=0,f=t.fields;u<f.length;u++){var p=f[u],d=p.name.value
c(n[s],d)?e.reportError(new r.a(a(s,d),p.name)):l[d]?e.reportError(new r.a(o(s,d),[l[d],p.name])):l[d]=p.name}return!1}}function c(e,t){return!!(Object(i.N)(e)||Object(i.H)(e)||Object(i.F)(e))&&e.getFields()[t]}},jDMi:function(e,t,n){!function(e){var t=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),n=e.Pos,r={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<","<":">>",">":"<<"}
function i(e){return e&&e.bracketRegex||/[(){}[\]]/}function o(e,t,o){var s=e.getLineHandle(t.line),c=t.ch-1,l=o&&o.afterCursor
null==l&&(l=/(^| )cm-fat-cursor($| )/.test(e.getWrapperElement().className))
var u=i(o),f=!l&&c>=0&&u.test(s.text.charAt(c))&&r[s.text.charAt(c)]||u.test(s.text.charAt(c+1))&&r[s.text.charAt(++c)]
if(!f)return null
var p=">"==f.charAt(1)?1:-1
if(o&&o.strict&&p>0!=(c==t.ch))return null
var d=e.getTokenTypeAt(n(t.line,c+1)),h=a(e,n(t.line,c+(p>0?1:0)),p,d||null,o)
return null==h?null:{from:n(t.line,c),to:h&&h.pos,match:h&&h.ch==f.charAt(0),forward:p>0}}function a(e,t,o,a,s){for(var c=s&&s.maxScanLineLength||1e4,l=s&&s.maxScanLines||1e3,u=[],f=i(s),p=o>0?Math.min(t.line+l,e.lastLine()+1):Math.max(e.firstLine()-1,t.line-l),d=t.line;d!=p;d+=o){var h=e.getLine(d)
if(h){var m=o>0?0:h.length-1,g=o>0?h.length:-1
if(!(h.length>c))for(d==t.line&&(m=t.ch-(o<0?1:0));m!=g;m+=o){var v=h.charAt(m)
if(f.test(v)&&(void 0===a||e.getTokenTypeAt(n(d,m+1))==a)){var y=r[v]
if(y&&">"==y.charAt(1)==o>0)u.push(v)
else{if(!u.length)return{pos:n(d,m),ch:v}
u.pop()}}}}}return d-o!=(o>0?e.lastLine():e.firstLine())&&null}function s(e,r,i){for(var a=e.state.matchBrackets.maxHighlightLineLength||1e3,s=[],c=e.listSelections(),l=0;l<c.length;l++){var u=c[l].empty()&&o(e,c[l].head,i)
if(u&&e.getLine(u.from.line).length<=a){var f=u.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket"
s.push(e.markText(u.from,n(u.from.line,u.from.ch+1),{className:f})),u.to&&e.getLine(u.to.line).length<=a&&s.push(e.markText(u.to,n(u.to.line,u.to.ch+1),{className:f}))}}if(s.length){t&&e.state.focused&&e.focus()
var p=function(){e.operation((function(){for(var e=0;e<s.length;e++)s[e].clear()}))}
if(!r)return p
setTimeout(p,800)}}function c(e){e.operation((function(){e.state.matchBrackets.currentlyHighlighted&&(e.state.matchBrackets.currentlyHighlighted(),e.state.matchBrackets.currentlyHighlighted=null),e.state.matchBrackets.currentlyHighlighted=s(e,!1,e.state.matchBrackets)}))}e.defineOption("matchBrackets",!1,(function(t,n,r){r&&r!=e.Init&&(t.off("cursorActivity",c),t.state.matchBrackets&&t.state.matchBrackets.currentlyHighlighted&&(t.state.matchBrackets.currentlyHighlighted(),t.state.matchBrackets.currentlyHighlighted=null)),n&&(t.state.matchBrackets="object"==typeof n?n:{},t.on("cursorActivity",c))})),e.defineExtension("matchBrackets",(function(){s(this,!0)})),e.defineExtension("findMatchingBracket",(function(e,t,n){return(n||"boolean"==typeof t)&&(n?(n.strict=t,t=n):t=t?{strict:!0}:null),o(this,e,t)})),e.defineExtension("scanForBracket",(function(e,t,n,r){return a(this,e,t,n,r)}))}(n("VrN/"))},jOXf:function(e,t,n){"use strict"
n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}))
var r=n("/jXB"),i=n("L2ys"),o=n("4RMZ")
function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var s=function(){function e(e,t){this._ast=e,this._errors=[],this._fragments=void 0,this._fragmentSpreads=new Map,this._recursivelyReferencedFragments=new Map,this._onError=t}var t=e.prototype
return t.reportError=function(e){this._errors.push(e),this._onError&&this._onError(e)},t.getErrors=function(){return this._errors},t.getDocument=function(){return this._ast},t.getFragment=function(e){var t=this._fragments
return t||(this._fragments=t=this.getDocument().definitions.reduce((function(e,t){return t.kind===r.Kind.FRAGMENT_DEFINITION&&(e[t.name.value]=t),e}),Object.create(null))),t[e]},t.getFragmentSpreads=function(e){var t=this._fragmentSpreads.get(e)
if(!t){t=[]
for(var n=[e];0!==n.length;)for(var i=0,o=n.pop().selections;i<o.length;i++){var a=o[i]
a.kind===r.Kind.FRAGMENT_SPREAD?t.push(a):a.selectionSet&&n.push(a.selectionSet)}this._fragmentSpreads.set(e,t)}return t},t.getRecursivelyReferencedFragments=function(e){var t=this._recursivelyReferencedFragments.get(e)
if(!t){t=[]
for(var n=Object.create(null),r=[e.selectionSet];0!==r.length;)for(var i=r.pop(),o=0,a=this.getFragmentSpreads(i);o<a.length;o++){var s=a[o].name.value
if(!0!==n[s]){n[s]=!0
var c=this.getFragment(s)
c&&(t.push(c),r.push(c.selectionSet))}}this._recursivelyReferencedFragments.set(e,t)}return t},e}(),c=function(e){function t(t,n,r){var i
return(i=e.call(this,t,r)||this)._schema=n,i}return a(t,e),t.prototype.getSchema=function(){return this._schema},t}(s),l=function(e){function t(t,n,r,i){var o
return(o=e.call(this,n,i)||this)._schema=t,o._typeInfo=r,o._variableUsages=new Map,o._recursiveVariableUsages=new Map,o}a(t,e)
var n=t.prototype
return n.getSchema=function(){return this._schema},n.getVariableUsages=function(e){var t=this._variableUsages.get(e)
if(!t){var n=[],r=new o.a(this._schema)
Object(i.c)(e,Object(i.e)(r,{VariableDefinition:function(){return!1},Variable:function(e){n.push({node:e,type:r.getInputType(),defaultValue:r.getDefaultValue()})}})),t=n,this._variableUsages.set(e,t)}return t},n.getRecursiveVariableUsages=function(e){var t=this._recursiveVariableUsages.get(e)
if(!t){t=this.getVariableUsages(e)
for(var n=0,r=this.getRecursivelyReferencedFragments(e);n<r.length;n++){var i=r[n]
t=t.concat(this.getVariableUsages(i))}this._recursiveVariableUsages.set(e,t)}return t},n.getType=function(){return this._typeInfo.getType()},n.getParentType=function(){return this._typeInfo.getParentType()},n.getInputType=function(){return this._typeInfo.getInputType()},n.getParentInputType=function(){return this._typeInfo.getParentInputType()},n.getFieldDef=function(){return this._typeInfo.getFieldDef()},n.getDirective=function(){return this._typeInfo.getDirective()},n.getArgument=function(){return this._typeInfo.getArgument()},t}(s)},jzd5:function(e,t,n){"use strict"
var r={}
function i(e,t){var n
return"string"!=typeof t&&(t=i.defaultChars),n=function(e){var t,n,i=r[e]
if(i)return i
for(i=r[e]=[],t=0;t<128;t++)n=String.fromCharCode(t),i.push(n)
for(t=0;t<e.length;t++)i[n=e.charCodeAt(t)]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)
return i}(t),e.replace(/(%[a-f0-9]{2})+/gi,(function(e){var t,r,i,o,a,s,c,l=""
for(t=0,r=e.length;t<r;t+=3)(i=parseInt(e.slice(t+1,t+3),16))<128?l+=n[i]:192==(224&i)&&t+3<r&&128==(192&(o=parseInt(e.slice(t+4,t+6),16)))?(l+=(c=i<<6&1984|63&o)<128?"��":String.fromCharCode(c),t+=3):224==(240&i)&&t+6<r&&(o=parseInt(e.slice(t+4,t+6),16),a=parseInt(e.slice(t+7,t+9),16),128==(192&o)&&128==(192&a))?(l+=(c=i<<12&61440|o<<6&4032|63&a)<2048||c>=55296&&c<=57343?"���":String.fromCharCode(c),t+=6):240==(248&i)&&t+9<r&&(o=parseInt(e.slice(t+4,t+6),16),a=parseInt(e.slice(t+7,t+9),16),s=parseInt(e.slice(t+10,t+12),16),128==(192&o)&&128==(192&a)&&128==(192&s))?((c=i<<18&1835008|o<<12&258048|a<<6&4032|63&s)<65536||c>1114111?l+="����":(c-=65536,l+=String.fromCharCode(55296+(c>>10),56320+(1023&c))),t+=9):l+="�"
return l}))}i.defaultChars=";/?:@&=+$,#",i.componentChars="",e.exports=i},kBjl:function(e,t,n){"use strict"
function r(e,t){return e.reduce((function(e,n){return e[t(n)]=n,e}),Object.create(null))}n.d(t,"a",(function(){return r}))},kFP1:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"introspectionQuery",{enumerable:!0,get:function(){return r.introspectionQuery}}),t.introspectionQuerySansSubscriptions=t.introspectionQueryName=void 0
var r=n("Tzvz"),i=(0,r.getOperationAST)((0,r.parse)(r.introspectionQuery)).name.value
t.introspectionQueryName=i
var o="\n  query ".concat(i," {\n    __schema {\n      queryType { name }\n      mutationType { name }\n      types {\n        ...FullType\n      }\n      directives {\n        name\n        description\n        locations\n        args {\n          ...InputValue\n        }\n      }\n    }\n  }\n\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n\n  fragment InputValue on __InputValue {\n    name\n    description\n    type { ...TypeRef }\n    defaultValue\n  }\n\n  fragment TypeRef on __Type {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n")
t.introspectionQuerySansSubscriptions=o},kiyR:function(e,t,n){"use strict"
e.exports.tokenize=function(e,t){var n,r,i,o,a=e.pos,s=e.src.charCodeAt(a)
if(t)return!1
if(126!==s)return!1
if(i=(r=e.scanDelims(e.pos,!0)).length,o=String.fromCharCode(s),i<2)return!1
for(i%2&&(e.push("text","",0).content=o,i--),n=0;n<i;n+=2)e.push("text","",0).content=o+o,e.delimiters.push({marker:s,jump:n,token:e.tokens.length-1,level:e.level,end:-1,open:r.can_open,close:r.can_close})
return e.pos+=r.length,!0},e.exports.postProcess=function(e){var t,n,r,i,o,a=[],s=e.delimiters,c=e.delimiters.length
for(t=0;t<c;t++)126===(r=s[t]).marker&&-1!==r.end&&(i=s[r.end],(o=e.tokens[r.token]).type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",(o=e.tokens[i.token]).type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===e.tokens[i.token-1].type&&"~"===e.tokens[i.token-1].content&&a.push(i.token-1))
for(;a.length;){for(n=(t=a.pop())+1;n<e.tokens.length&&"s_close"===e.tokens[n].type;)n++
t!==--n&&(o=e.tokens[n],e.tokens[n]=e.tokens[t],e.tokens[t]=o)}}},ky0j:function(e,t,n){"use strict"
var r=n("AGgm").normalizeReference,i=n("AGgm").isSpace
e.exports=function(e,t){var n,o,a,s,c,l,u,f,p,d,h,m,g,v="",y=e.pos,b=e.posMax
if(33!==e.src.charCodeAt(e.pos))return!1
if(91!==e.src.charCodeAt(e.pos+1))return!1
if(l=e.pos+2,(c=e.md.helpers.parseLinkLabel(e,e.pos+1,!1))<0)return!1
if((u=c+1)<b&&40===e.src.charCodeAt(u)){for(u++;u<b&&(o=e.src.charCodeAt(u),i(o)||10===o);u++);if(u>=b)return!1
for(g=u,(p=e.md.helpers.parseLinkDestination(e.src,u,e.posMax)).ok&&(v=e.md.normalizeLink(p.str),e.md.validateLink(v)?u=p.pos:v=""),g=u;u<b&&(o=e.src.charCodeAt(u),i(o)||10===o);u++);if(p=e.md.helpers.parseLinkTitle(e.src,u,e.posMax),u<b&&g!==u&&p.ok)for(d=p.str,u=p.pos;u<b&&(o=e.src.charCodeAt(u),i(o)||10===o);u++);else d=""
if(u>=b||41!==e.src.charCodeAt(u))return e.pos=y,!1
u++}else{if(void 0===e.env.references)return!1
if(u<b&&91===e.src.charCodeAt(u)?(g=u+1,(u=e.md.helpers.parseLinkLabel(e,u))>=0?s=e.src.slice(g,u++):u=c+1):u=c+1,s||(s=e.src.slice(l,c)),!(f=e.env.references[r(s)]))return e.pos=y,!1
v=f.href,d=f.title}return t||(a=e.src.slice(l,c),e.md.inline.parse(a,e.md,e.env,m=[]),(h=e.push("image","img",0)).attrs=n=[["src",v],["alt",""]],h.children=m,h.content=a,d&&n.push(["title",d])),e.pos=u,e.posMax=b,!0}},lJQM:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(!n||n.length<1)return
var r=n.map((function(e){return e.name&&e.name.value}))
if(t&&-1!==r.indexOf(t))return t
if(t&&e){var i=e.map((function(e){return e.name&&e.name.value})).indexOf(t)
if(-1!==i&&i<r.length)return r[i]}return r[0]}},lORA:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=Object.create(null)
return{OperationDefinition:function(){return!1},FragmentDefinition:function(n){var i=n.name.value
return t[i]?e.reportError(new r.a('There can be only one fragment named "'.concat(i,'".'),[t[i],n.name])):t[i]=n.name,!1}}}},lTHs:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ToolbarMenuItem=d,t.ToolbarMenu=void 0
var r=o(n("q1tI")),i=o(n("17x9"))
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=c(t).call(this,e),n=!i||"object"!==a(i)&&"function"!=typeof i?l(r):i,f(l(n),"handleOpen",(function(e){h(e),n.setState({visible:!0}),n._subscribe()})),n.state={visible:!1},n}var n,i,o
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(i=[{key:"componentWillUnmount",value:function(){this._release()}},{key:"render",value:function(){var e=this,t=this.state.visible
return r.default.createElement("a",{className:"toolbar-menu toolbar-button",onClick:this.handleOpen.bind(this),onMouseDown:h,ref:function(t){e._node=t},title:this.props.title},this.props.label,r.default.createElement("svg",{width:"14",height:"8"},r.default.createElement("path",{fill:"#666",d:"M 5 1.5 L 14 1.5 L 9.5 7 z"})),r.default.createElement("ul",{className:"toolbar-menu-items"+(t?" open":"")},this.props.children))}},{key:"_subscribe",value:function(){this._listener||(this._listener=this.handleClick.bind(this),document.addEventListener("click",this._listener))}},{key:"_release",value:function(){this._listener&&(document.removeEventListener("click",this._listener),this._listener=null)}},{key:"handleClick",value:function(e){this._node!==e.target&&(h(e),this.setState({visible:!1}),this._release())}}])&&s(n.prototype,i),o&&s(n,o),t}(r.default.Component)
function d(e){var t=e.onSelect,n=e.title,i=e.label
return r.default.createElement("li",{onMouseOver:function(e){e.target.className="hover"},onMouseOut:function(e){e.target.className=null},onMouseDown:h,onMouseUp:t,title:n},i)}function h(e){e.preventDefault()}t.ToolbarMenu=p,f(p,"propTypes",{title:i.default.string,label:i.default.string}),d.propTypes={onSelect:i.default.func,title:i.default.string,label:i.default.string}},ls82:function(e,t,n){var r=function(e){"use strict"
var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag"
function s(e,t,n,r){var i=t&&t.prototype instanceof u?t:u,o=Object.create(i.prototype),a=new x(r||[])
return o._invoke=function(e,t,n){var r="suspendedStart"
return function(i,o){if("executing"===r)throw new Error("Generator is already running")
if("completed"===r){if("throw"===i)throw o
return E()}for(n.method=i,n.arg=o;;){var a=n.delegate
if(a){var s=b(a,n)
if(s){if(s===l)continue
return s}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r="executing"
var u=c(e,t,n)
if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===l)continue
return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(e,n,a),o}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s
var l={}
function u(){}function f(){}function p(){}var d={}
d[i]=function(){return this}
var h=Object.getPrototypeOf,m=h&&h(h(k([])))
m&&m!==t&&n.call(m,i)&&(d=m)
var g=p.prototype=u.prototype=Object.create(d)
function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var r
this._invoke=function(i,o){function a(){return new t((function(r,a){!function r(i,o,a,s){var l=c(e[i],e,o)
if("throw"!==l.type){var u=l.arg,f=u.value
return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(l.arg)}(i,o,r,a)}))}return r=r?r.then(a,a):a()}}function b(e,t){var n=e.iterator[t.method]
if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l
t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,e.iterator,t.arg)
if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l
var i=r.arg
return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function O(e){var t={tryLoc:e[0]}
1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{}
t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function k(e){if(e){var t=e[i]
if(t)return t.call(e)
if("function"==typeof e.next)return e
if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t
return t.value=void 0,t.done=!0,t}
return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=g.constructor=p,p.constructor=f,p[a]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor
return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise)
var a=new y(s(t,n,r,i),o)
return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(g),g[a]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[]
for(var n in e)t.push(n)
return t.reverse(),function n(){for(;t.length;){var r=t.pop()
if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0
var e=this.tryEntries[0].completion
if("throw"===e.type)throw e.arg
return this.rval},dispatchException:function(e){if(this.done)throw e
var t=this
function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion
if("root"===o.tryLoc)return r("end")
if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc")
if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r]
if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i
break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null)
var a=o?o.completion:{}
return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg
return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t]
if(n.tryLoc===e){var r=n.completion
if("throw"===r.type){var i=r.arg
w(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:k(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports)
try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}},"m3Q/":function(e,t,n){!function(e){"use strict"
function t(e,t){this.cm=e,this.options=t,this.widget=null,this.debounce=0,this.tick=0,this.startPos=this.cm.getCursor("start"),this.startLen=this.cm.getLine(this.startPos.line).length-this.cm.getSelection().length
var n=this
e.on("cursorActivity",this.activityFunc=function(){n.cursorActivity()})}e.showHint=function(e,t,n){if(!t)return e.showHint(n)
n&&n.async&&(t.async=!0)
var r={hint:t}
if(n)for(var i in n)r[i]=n[i]
return e.showHint(r)},e.defineExtension("showHint",(function(n){n=function(e,t,n){var r=e.options.hintOptions,i={}
for(var o in c)i[o]=c[o]
if(r)for(var o in r)void 0!==r[o]&&(i[o]=r[o])
if(n)for(var o in n)void 0!==n[o]&&(i[o]=n[o])
return i.hint.resolve&&(i.hint=i.hint.resolve(e,t)),i}(this,this.getCursor("start"),n)
var r=this.listSelections()
if(!(r.length>1)){if(this.somethingSelected()){if(!n.hint.supportsSelection)return
for(var i=0;i<r.length;i++)if(r[i].head.line!=r[i].anchor.line)return}this.state.completionActive&&this.state.completionActive.close()
var o=this.state.completionActive=new t(this,n)
o.options.hint&&(e.signal(this,"startCompletion",this),o.update(!0))}})),e.defineExtension("closeHint",(function(){this.state.completionActive&&this.state.completionActive.close()}))
var n=window.requestAnimationFrame||function(e){return setTimeout(e,1e3/60)},r=window.cancelAnimationFrame||clearTimeout
function i(e){return"string"==typeof e?e:e.text}function o(e,t){for(;t&&t!=e;){if("LI"===t.nodeName.toUpperCase()&&t.parentNode==e)return t
t=t.parentNode}}function a(t,n){this.completion=t,this.data=n,this.picked=!1
var r=this,a=t.cm,s=a.getInputField().ownerDocument,c=s.defaultView||s.parentWindow,l=this.hints=s.createElement("ul"),u=t.cm.options.theme
l.className="CodeMirror-hints "+u,this.selectedHint=n.selectedHint||0
for(var f=n.list,p=0;p<f.length;++p){var d=l.appendChild(s.createElement("li")),h=f[p],m="CodeMirror-hint"+(p!=this.selectedHint?"":" CodeMirror-hint-active")
null!=h.className&&(m=h.className+" "+m),d.className=m,h.render?h.render(d,n,h):d.appendChild(s.createTextNode(h.displayText||i(h))),d.hintId=p}var g=t.options.container||s.body,v=a.cursorCoords(t.options.alignWithWord?n.from:null),y=v.left,b=v.bottom,O=!0,w=0,x=0
if(g!==s.body){var k=-1!==["absolute","relative","fixed"].indexOf(c.getComputedStyle(g).position)?g:g.offsetParent,E=k.getBoundingClientRect(),C=s.body.getBoundingClientRect()
w=E.left-C.left-k.scrollLeft,x=E.top-C.top-k.scrollTop}l.style.left=y-w+"px",l.style.top=b-x+"px"
var T=c.innerWidth||Math.max(s.body.offsetWidth,s.documentElement.offsetWidth),_=c.innerHeight||Math.max(s.body.offsetHeight,s.documentElement.offsetHeight)
g.appendChild(l)
var S=l.getBoundingClientRect(),N=S.bottom-_,A=l.scrollHeight>l.clientHeight+1,j=a.getScrollInfo()
if(N>0){var D=S.bottom-S.top
if(v.top-(v.bottom-S.top)-D>0)l.style.top=(b=v.top-D-x)+"px",O=!1
else if(D>_){l.style.height=_-5+"px",l.style.top=(b=v.bottom-S.top-x)+"px"
var L=a.getCursor()
n.from.ch!=L.ch&&(v=a.cursorCoords(L),l.style.left=(y=v.left-w)+"px",S=l.getBoundingClientRect())}}var I,F=S.right-T
if(F>0&&(S.right-S.left>T&&(l.style.width=T-5+"px",F-=S.right-S.left-T),l.style.left=(y=v.left-F-w)+"px"),A)for(var M=l.firstChild;M;M=M.nextSibling)M.style.paddingRight=a.display.nativeBarWidth+"px"
return a.addKeyMap(this.keyMap=function(e,t){var n={Up:function(){t.moveFocus(-1)},Down:function(){t.moveFocus(1)},PageUp:function(){t.moveFocus(1-t.menuSize(),!0)},PageDown:function(){t.moveFocus(t.menuSize()-1,!0)},Home:function(){t.setFocus(0)},End:function(){t.setFocus(t.length-1)},Enter:t.pick,Tab:t.pick,Esc:t.close};/Mac/.test(navigator.platform)&&(n["Ctrl-P"]=function(){t.moveFocus(-1)},n["Ctrl-N"]=function(){t.moveFocus(1)})
var r=e.options.customKeys,i=r?{}:n
function o(e,r){var o
o="string"!=typeof r?function(e){return r(e,t)}:n.hasOwnProperty(r)?n[r]:r,i[e]=o}if(r)for(var a in r)r.hasOwnProperty(a)&&o(a,r[a])
var s=e.options.extraKeys
if(s)for(var a in s)s.hasOwnProperty(a)&&o(a,s[a])
return i}(t,{moveFocus:function(e,t){r.changeActive(r.selectedHint+e,t)},setFocus:function(e){r.changeActive(e)},menuSize:function(){return r.screenAmount()},length:f.length,close:function(){t.close()},pick:function(){r.pick()},data:n})),t.options.closeOnUnfocus&&(a.on("blur",this.onBlur=function(){I=setTimeout((function(){t.close()}),100)}),a.on("focus",this.onFocus=function(){clearTimeout(I)})),a.on("scroll",this.onScroll=function(){var e=a.getScrollInfo(),n=a.getWrapperElement().getBoundingClientRect(),r=b+j.top-e.top,i=r-(c.pageYOffset||(s.documentElement||s.body).scrollTop)
if(O||(i+=l.offsetHeight),i<=n.top||i>=n.bottom)return t.close()
l.style.top=r+"px",l.style.left=y+j.left-e.left+"px"}),e.on(l,"dblclick",(function(e){var t=o(l,e.target||e.srcElement)
t&&null!=t.hintId&&(r.changeActive(t.hintId),r.pick())})),e.on(l,"click",(function(e){var n=o(l,e.target||e.srcElement)
n&&null!=n.hintId&&(r.changeActive(n.hintId),t.options.completeOnSingleClick&&r.pick())})),e.on(l,"mousedown",(function(){setTimeout((function(){a.focus()}),20)})),this.scrollToActive(),e.signal(n,"select",f[this.selectedHint],l.childNodes[this.selectedHint]),!0}function s(e,t,n,r){if(e.async)e(t,r,n)
else{var i=e(t,n)
i&&i.then?i.then(r):r(i)}}t.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.tick=null,this.cm.off("cursorActivity",this.activityFunc),this.widget&&this.data&&e.signal(this.data,"close"),this.widget&&this.widget.close(),e.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(t,n){var r=t.list[n]
r.hint?r.hint(this.cm,t,r):this.cm.replaceRange(i(r),r.from||t.from,r.to||t.to,"complete"),e.signal(t,"pick",r),this.close()},cursorActivity:function(){this.debounce&&(r(this.debounce),this.debounce=0)
var e=this.cm.getCursor(),t=this.cm.getLine(e.line)
if(e.line!=this.startPos.line||t.length-e.ch!=this.startLen-this.startPos.ch||e.ch<this.startPos.ch||this.cm.somethingSelected()||!e.ch||this.options.closeCharacters.test(t.charAt(e.ch-1)))this.close()
else{var i=this
this.debounce=n((function(){i.update()})),this.widget&&this.widget.disable()}},update:function(e){if(null!=this.tick){var t=this,n=++this.tick
s(this.options.hint,this.cm,this.options,(function(r){t.tick==n&&t.finishUpdate(r,e)}))}},finishUpdate:function(t,n){this.data&&e.signal(this.data,"update")
var r=this.widget&&this.widget.picked||n&&this.options.completeSingle
this.widget&&this.widget.close(),this.data=t,t&&t.list.length&&(r&&1==t.list.length?this.pick(t,0):(this.widget=new a(this,t),e.signal(t,"shown")))}},a.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap)
var e=this.completion.cm
this.completion.options.closeOnUnfocus&&(e.off("blur",this.onBlur),e.off("focus",this.onFocus)),e.off("scroll",this.onScroll)}},disable:function(){this.completion.cm.removeKeyMap(this.keyMap)
var e=this
this.keyMap={Enter:function(){e.picked=!0}},this.completion.cm.addKeyMap(this.keyMap)},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(t,n){if(t>=this.data.list.length?t=n?this.data.list.length-1:0:t<0&&(t=n?0:this.data.list.length-1),this.selectedHint!=t){var r=this.hints.childNodes[this.selectedHint]
r&&(r.className=r.className.replace(" CodeMirror-hint-active","")),(r=this.hints.childNodes[this.selectedHint=t]).className+=" CodeMirror-hint-active",this.scrollToActive(),e.signal(this.data,"select",this.data.list[this.selectedHint],r)}},scrollToActive:function(){var e=this.hints.childNodes[this.selectedHint]
e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-3:e.offsetTop+e.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=e.offsetTop+e.offsetHeight-this.hints.clientHeight+3)},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},e.registerHelper("hint","auto",{resolve:function(t,n){var r,i=t.getHelpers(n,"hint")
if(i.length){var o=function(e,t,n){var r=function(e,t){if(!e.somethingSelected())return t
for(var n=[],r=0;r<t.length;r++)t[r].supportsSelection&&n.push(t[r])
return n}(e,i)
!function i(o){if(o==r.length)return t(null)
s(r[o],e,n,(function(e){e&&e.list.length>0?t(e):i(o+1)}))}(0)}
return o.async=!0,o.supportsSelection=!0,o}return(r=t.getHelper(t.getCursor(),"hintWords"))?function(t){return e.hint.fromList(t,{words:r})}:e.hint.anyword?function(t,n){return e.hint.anyword(t,n)}:function(){}}}),e.registerHelper("hint","fromList",(function(t,n){var r,i=t.getCursor(),o=t.getTokenAt(i),a=e.Pos(i.line,o.start),s=i
o.start<i.ch&&/\w/.test(o.string.charAt(i.ch-o.start-1))?r=o.string.substr(0,i.ch-o.start):(r="",a=i)
for(var c=[],l=0;l<n.words.length;l++){var u=n.words[l]
u.slice(0,r.length)==r&&c.push(u)}if(c.length)return{list:c,from:a,to:s}})),e.commands.autocomplete=e.showHint
var c={hint:e.hint.auto,completeSingle:!0,alignWithWord:!0,closeCharacters:/[\s()\[\]{};:>,]/,closeOnUnfocus:!0,completeOnSingleClick:!0,container:null,customKeys:null,extraKeys:null}
e.defineOption("hintOptions",null)}(n("VrN/"))},mSF0:function(e,t,n){"use strict"
var r=n("AGgm").arrayReplaceAt
function i(e){return/^<\/a\s*>/i.test(e)}e.exports=function(e){var t,n,o,a,s,c,l,u,f,p,d,h,m,g,v,y,b,O,w=e.tokens
if(e.md.options.linkify)for(n=0,o=w.length;n<o;n++)if("inline"===w[n].type&&e.md.linkify.pretest(w[n].content))for(m=0,t=(a=w[n].children).length-1;t>=0;t--)if("link_close"!==(c=a[t]).type){if("html_inline"===c.type&&(O=c.content,/^<a[>\s]/i.test(O)&&m>0&&m--,i(c.content)&&m++),!(m>0)&&"text"===c.type&&e.md.linkify.test(c.content)){for(f=c.content,b=e.md.linkify.match(f),l=[],h=c.level,d=0,u=0;u<b.length;u++)g=b[u].url,v=e.md.normalizeLink(g),e.md.validateLink(v)&&(y=b[u].text,y=b[u].schema?"mailto:"!==b[u].schema||/^mailto:/i.test(y)?e.md.normalizeLinkText(y):e.md.normalizeLinkText("mailto:"+y).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+y).replace(/^http:\/\//,""),(p=b[u].index)>d&&((s=new e.Token("text","",0)).content=f.slice(d,p),s.level=h,l.push(s)),(s=new e.Token("link_open","a",1)).attrs=[["href",v]],s.level=h++,s.markup="linkify",s.info="auto",l.push(s),(s=new e.Token("text","",0)).content=y,s.level=h,l.push(s),(s=new e.Token("link_close","a",-1)).level=--h,s.markup="linkify",s.info="auto",l.push(s),d=b[u].lastIndex)
d<f.length&&((s=new e.Token("text","",0)).content=f.slice(d),s.level=h,l.push(s)),w[n].children=a=r(a,t,l)}}else for(t--;a[t].level!==c.level&&"link_open"!==a[t].type;)t--}},mki7:function(e,t,n){!function(e){"use strict"
var t=e.commands,n=e.Pos
function r(t,r){t.extendSelectionsBy((function(i){return t.display.shift||t.doc.extend||i.empty()?function(t,r,i){if(i<0&&0==r.ch)return t.clipPos(n(r.line-1))
var o=t.getLine(r.line)
if(i>0&&r.ch>=o.length)return t.clipPos(n(r.line+1,0))
for(var a,s="start",c=r.ch,l=c,u=i<0?0:o.length,f=0;l!=u;l+=i,f++){var p=o.charAt(i<0?l-1:l),d="_"!=p&&e.isWordChar(p)?"w":"o"
if("w"==d&&p.toUpperCase()==p&&(d="W"),"start"==s)"o"!=d?(s="in",a=d):c=l+i
else if("in"==s&&a!=d){if("w"==a&&"W"==d&&i<0&&l--,"W"==a&&"w"==d&&i>0){if(l==c+1){a="w"
continue}l--}break}}return n(r.line,l)}(t.doc,i.head,r):r<0?i.from():i.to()}))}function i(t,r){if(t.isReadOnly())return e.Pass
t.operation((function(){for(var e=t.listSelections().length,i=[],o=-1,a=0;a<e;a++){var s=t.listSelections()[a].head
if(!(s.line<=o)){var c=n(s.line+(r?0:1),0)
t.replaceRange("\n",c,null,"+insertLine"),t.indentLine(c.line,null,!0),i.push({head:c,anchor:c}),o=s.line+1}}t.setSelections(i)})),t.execCommand("indentAuto")}function o(t,r){for(var i=r.ch,o=i,a=t.getLine(r.line);i&&e.isWordChar(a.charAt(i-1));)--i
for(;o<a.length&&e.isWordChar(a.charAt(o));)++o
return{from:n(r.line,i),to:n(r.line,o),word:a.slice(i,o)}}function a(e,t){for(var n=e.listSelections(),r=[],i=0;i<n.length;i++){var o=n[i],a=e.findPosV(o.anchor,t,"line",o.anchor.goalColumn),s=e.findPosV(o.head,t,"line",o.head.goalColumn)
a.goalColumn=null!=o.anchor.goalColumn?o.anchor.goalColumn:e.cursorCoords(o.anchor,"div").left,s.goalColumn=null!=o.head.goalColumn?o.head.goalColumn:e.cursorCoords(o.head,"div").left
var c={anchor:a,head:s}
r.push(o),r.push(c)}e.setSelections(r)}function s(t){for(var r=t.listSelections(),i=[],o=0;o<r.length;o++){var a=r[o],s=a.head,c=t.scanForBracket(s,-1)
if(!c)return!1
for(;;){var l=t.scanForBracket(s,1)
if(!l)return!1
if(l.ch=="(){}[]".charAt("(){}[]".indexOf(c.ch)+1)){var u=n(c.pos.line,c.pos.ch+1)
if(0!=e.cmpPos(u,a.from())||0!=e.cmpPos(l.pos,a.to())){i.push({anchor:u,head:l.pos})
break}if(!(c=t.scanForBracket(c.pos,-1)))return!1}s=n(l.pos.line,l.pos.ch+1)}}return t.setSelections(i),!0}function c(e){return e?/\bpunctuation\b/.test(e)?e:void 0:null}function l(t,r){if(t.isReadOnly())return e.Pass
for(var i,o=t.listSelections(),a=[],s=0;s<o.length;s++){var c=o[s]
if(!c.empty()){for(var l=c.from().line,u=c.to().line;s<o.length-1&&o[s+1].from().line==u;)u=o[++s].to().line
o[s].to().ch||u--,a.push(l,u)}}a.length?i=!0:a.push(t.firstLine(),t.lastLine()),t.operation((function(){for(var e=[],o=0;o<a.length;o+=2){var s=a[o],c=a[o+1],l=n(s,0),u=n(c),f=t.getRange(l,u,!1)
r?f.sort():f.sort((function(e,t){var n=e.toUpperCase(),r=t.toUpperCase()
return n!=r&&(e=n,t=r),e<t?-1:e==t?0:1})),t.replaceRange(f,l,u),i&&e.push({anchor:l,head:n(c+1,0)})}i&&t.setSelections(e,0)}))}function u(t,n){t.operation((function(){for(var r=t.listSelections(),i=[],a=[],s=0;s<r.length;s++)(l=r[s]).empty()?(i.push(s),a.push("")):a.push(n(t.getRange(l.from(),l.to())))
var c
for(t.replaceSelections(a,"around","case"),s=i.length-1;s>=0;s--){var l=r[i[s]]
if(!(c&&e.cmpPos(l.head,c)>0)){var u=o(t,l.head)
c=u.from,t.replaceRange(n(u.word),u.from,u.to)}}}))}function f(t){var n=t.getCursor("from"),r=t.getCursor("to")
if(0==e.cmpPos(n,r)){var i=o(t,n)
if(!i.word)return
n=i.from,r=i.to}return{from:n,to:r,query:t.getRange(n,r),word:i}}function p(e,t){var r=f(e)
if(r){var i=r.query,o=e.getSearchCursor(i,t?r.to:r.from);(t?o.findNext():o.findPrevious())?e.setSelection(o.from(),o.to()):(o=e.getSearchCursor(i,t?n(e.firstLine(),0):e.clipPos(n(e.lastLine()))),(t?o.findNext():o.findPrevious())?e.setSelection(o.from(),o.to()):r.word&&e.setSelection(r.from,r.to))}}t.goSubwordLeft=function(e){r(e,-1)},t.goSubwordRight=function(e){r(e,1)},t.scrollLineUp=function(e){var t=e.getScrollInfo()
if(!e.somethingSelected()){var n=e.lineAtHeight(t.top+t.clientHeight,"local")
e.getCursor().line>=n&&e.execCommand("goLineUp")}e.scrollTo(null,t.top-e.defaultTextHeight())},t.scrollLineDown=function(e){var t=e.getScrollInfo()
if(!e.somethingSelected()){var n=e.lineAtHeight(t.top,"local")+1
e.getCursor().line<=n&&e.execCommand("goLineDown")}e.scrollTo(null,t.top+e.defaultTextHeight())},t.splitSelectionByLine=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++)for(var o=t[i].from(),a=t[i].to(),s=o.line;s<=a.line;++s)a.line>o.line&&s==a.line&&0==a.ch||r.push({anchor:s==o.line?o:n(s,0),head:s==a.line?a:n(s)})
e.setSelections(r,0)},t.singleSelectionTop=function(e){var t=e.listSelections()[0]
e.setSelection(t.anchor,t.head,{scroll:!1})},t.selectLine=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++){var o=t[i]
r.push({anchor:n(o.from().line,0),head:n(o.to().line+1,0)})}e.setSelections(r)},t.insertLineAfter=function(e){return i(e,!1)},t.insertLineBefore=function(e){return i(e,!0)},t.selectNextOccurrence=function(t){var r=t.getCursor("from"),i=t.getCursor("to"),a=t.state.sublimeFindFullWord==t.doc.sel
if(0==e.cmpPos(r,i)){var s=o(t,r)
if(!s.word)return
t.setSelection(s.from,s.to),a=!0}else{var c=t.getRange(r,i),l=a?new RegExp("\\b"+c+"\\b"):c,u=t.getSearchCursor(l,i),f=u.findNext()
if(f||(f=(u=t.getSearchCursor(l,n(t.firstLine(),0))).findNext()),!f||function(t,n,r){for(var i=0;i<t.length;i++)if(0==e.cmpPos(t[i].from(),n)&&0==e.cmpPos(t[i].to(),r))return!0
return!1}(t.listSelections(),u.from(),u.to()))return
t.addSelection(u.from(),u.to())}a&&(t.state.sublimeFindFullWord=t.doc.sel)},t.skipAndSelectNextOccurrence=function(n){var r=n.getCursor("anchor"),i=n.getCursor("head")
t.selectNextOccurrence(n),0!=e.cmpPos(r,i)&&n.doc.setSelections(n.doc.listSelections().filter((function(e){return e.anchor!=r||e.head!=i})))},t.addCursorToPrevLine=function(e){a(e,-1)},t.addCursorToNextLine=function(e){a(e,1)},t.selectScope=function(e){s(e)||e.execCommand("selectAll")},t.selectBetweenBrackets=function(t){if(!s(t))return e.Pass},t.goToBracket=function(t){t.extendSelectionsBy((function(r){var i=t.scanForBracket(r.head,1,c(t.getTokenTypeAt(r.head)))
if(i&&0!=e.cmpPos(i.pos,r.head))return i.pos
var o=t.scanForBracket(r.head,-1,c(t.getTokenTypeAt(n(r.head.line,r.head.ch+1))))
return o&&n(o.pos.line,o.pos.ch+1)||r.head}))},t.swapLineUp=function(t){if(t.isReadOnly())return e.Pass
for(var r=t.listSelections(),i=[],o=t.firstLine()-1,a=[],s=0;s<r.length;s++){var c=r[s],l=c.from().line-1,u=c.to().line
a.push({anchor:n(c.anchor.line-1,c.anchor.ch),head:n(c.head.line-1,c.head.ch)}),0!=c.to().ch||c.empty()||--u,l>o?i.push(l,u):i.length&&(i[i.length-1]=u),o=u}t.operation((function(){for(var e=0;e<i.length;e+=2){var r=i[e],o=i[e+1],s=t.getLine(r)
t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),o>t.lastLine()?t.replaceRange("\n"+s,n(t.lastLine()),null,"+swapLine"):t.replaceRange(s+"\n",n(o,0),null,"+swapLine")}t.setSelections(a),t.scrollIntoView()}))},t.swapLineDown=function(t){if(t.isReadOnly())return e.Pass
for(var r=t.listSelections(),i=[],o=t.lastLine()+1,a=r.length-1;a>=0;a--){var s=r[a],c=s.to().line+1,l=s.from().line
0!=s.to().ch||s.empty()||c--,c<o?i.push(c,l):i.length&&(i[i.length-1]=l),o=l}t.operation((function(){for(var e=i.length-2;e>=0;e-=2){var r=i[e],o=i[e+1],a=t.getLine(r)
r==t.lastLine()?t.replaceRange("",n(r-1),n(r),"+swapLine"):t.replaceRange("",n(r,0),n(r+1,0),"+swapLine"),t.replaceRange(a+"\n",n(o,0),null,"+swapLine")}t.scrollIntoView()}))},t.toggleCommentIndented=function(e){e.toggleComment({indent:!0})},t.joinLines=function(e){for(var t=e.listSelections(),r=[],i=0;i<t.length;i++){for(var o=t[i],a=o.from(),s=a.line,c=o.to().line;i<t.length-1&&t[i+1].from().line==c;)c=t[++i].to().line
r.push({start:s,end:c,anchor:!o.empty()&&a})}e.operation((function(){for(var t=0,i=[],o=0;o<r.length;o++){for(var a,s=r[o],c=s.anchor&&n(s.anchor.line-t,s.anchor.ch),l=s.start;l<=s.end;l++){var u=l-t
l==s.end&&(a=n(u,e.getLine(u).length+1)),u<e.lastLine()&&(e.replaceRange(" ",n(u),n(u+1,/^\s*/.exec(e.getLine(u+1))[0].length)),++t)}i.push({anchor:c||a,head:a})}e.setSelections(i,0)}))},t.duplicateLine=function(e){e.operation((function(){for(var t=e.listSelections().length,r=0;r<t;r++){var i=e.listSelections()[r]
i.empty()?e.replaceRange(e.getLine(i.head.line)+"\n",n(i.head.line,0)):e.replaceRange(e.getRange(i.from(),i.to()),i.from())}e.scrollIntoView()}))},t.sortLines=function(e){l(e,!0)},t.sortLinesInsensitive=function(e){l(e,!1)},t.nextBookmark=function(e){var t=e.state.sublimeBookmarks
if(t)for(;t.length;){var n=t.shift(),r=n.find()
if(r)return t.push(n),e.setSelection(r.from,r.to)}},t.prevBookmark=function(e){var t=e.state.sublimeBookmarks
if(t)for(;t.length;){t.unshift(t.pop())
var n=t[t.length-1].find()
if(n)return e.setSelection(n.from,n.to)
t.pop()}},t.toggleBookmark=function(e){for(var t=e.listSelections(),n=e.state.sublimeBookmarks||(e.state.sublimeBookmarks=[]),r=0;r<t.length;r++){for(var i=t[r].from(),o=t[r].to(),a=t[r].empty()?e.findMarksAt(i):e.findMarks(i,o),s=0;s<a.length;s++)if(a[s].sublimeBookmark){a[s].clear()
for(var c=0;c<n.length;c++)n[c]==a[s]&&n.splice(c--,1)
break}s==a.length&&n.push(e.markText(i,o,{sublimeBookmark:!0,clearWhenEmpty:!1}))}},t.clearBookmarks=function(e){var t=e.state.sublimeBookmarks
if(t)for(var n=0;n<t.length;n++)t[n].clear()
t.length=0},t.selectBookmarks=function(e){var t=e.state.sublimeBookmarks,n=[]
if(t)for(var r=0;r<t.length;r++){var i=t[r].find()
i?n.push({anchor:i.from,head:i.to}):t.splice(r--,0)}n.length&&e.setSelections(n,0)},t.smartBackspace=function(t){if(t.somethingSelected())return e.Pass
t.operation((function(){for(var r=t.listSelections(),i=t.getOption("indentUnit"),o=r.length-1;o>=0;o--){var a=r[o].head,s=t.getRange({line:a.line,ch:0},a),c=e.countColumn(s,null,t.getOption("tabSize")),l=t.findPosH(a,-1,"char",!1)
if(s&&!/\S/.test(s)&&c%i==0){var u=new n(a.line,e.findColumn(s,c-i,i))
u.ch!=a.ch&&(l=u)}t.replaceRange("",l,a,"+delete")}}))},t.delLineRight=function(e){e.operation((function(){for(var t=e.listSelections(),r=t.length-1;r>=0;r--)e.replaceRange("",t[r].anchor,n(t[r].to().line),"+delete")
e.scrollIntoView()}))},t.upcaseAtCursor=function(e){u(e,(function(e){return e.toUpperCase()}))},t.downcaseAtCursor=function(e){u(e,(function(e){return e.toLowerCase()}))},t.setSublimeMark=function(e){e.state.sublimeMark&&e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor())},t.selectToSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find()
t&&e.setSelection(e.getCursor(),t)},t.deleteToSublimeMark=function(t){var n=t.state.sublimeMark&&t.state.sublimeMark.find()
if(n){var r=t.getCursor(),i=n
if(e.cmpPos(r,i)>0){var o=i
i=r,r=o}t.state.sublimeKilled=t.getRange(r,i),t.replaceRange("",r,i)}},t.swapWithSublimeMark=function(e){var t=e.state.sublimeMark&&e.state.sublimeMark.find()
t&&(e.state.sublimeMark.clear(),e.state.sublimeMark=e.setBookmark(e.getCursor()),e.setCursor(t))},t.sublimeYank=function(e){null!=e.state.sublimeKilled&&e.replaceSelection(e.state.sublimeKilled,null,"paste")},t.showInCenter=function(e){var t=e.cursorCoords(null,"local")
e.scrollTo(null,(t.top+t.bottom)/2-e.getScrollInfo().clientHeight/2)},t.findUnder=function(e){p(e,!0)},t.findUnderPrevious=function(e){p(e,!1)},t.findAllUnder=function(e){var t=f(e)
if(t){for(var n=e.getSearchCursor(t.query),r=[],i=-1;n.findNext();)r.push({anchor:n.from(),head:n.to()}),n.from().line<=t.from.line&&n.from().ch<=t.from.ch&&i++
e.setSelections(r,i)}}
var d=e.keyMap
d.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented","Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F5:"sortLines","Cmd-F5":"sortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-D":"skipAndSelectNextOccurrence","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank","Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"},e.normalizeKeyMap(d.macSublime),d.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket","Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Ctrl-F9":"sortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-D":"skipAndSelectNextOccurrence","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark","Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse","Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"},e.normalizeKeyMap(d.pcSublime)
var h=d.default==d.macDefault
d.sublime=h?d.macSublime:d.pcSublime}(n("VrN/"),n("uTOq"),n("jDMi"))},nBLk:function(e,t,n){"use strict"
e.exports=function(e,t,n){var r,i,o
if(e.sCount[t]-e.blkIndent<4)return!1
for(i=r=t+1;r<n;)if(e.isEmpty(r))r++
else{if(!(e.sCount[r]-e.blkIndent>=4))break
i=++r}return e.line=i,(o=e.push("code_block","code",0)).content=e.getLines(t,i,4+e.blkIndent,!0),o.map=[t,e.line],!0}},oSSR:function(e,t,n){"use strict"
e.exports=function(e){var t,n,r,i=e.tokens
for(n=0,r=i.length;n<r;n++)"inline"===(t=i[n]).type&&e.md.inline.parse(t.content,e.md,e.env,t.children)}},p7ys:function(e,t){e.exports=/[\0-\x1F\x7F-\x9F]/},"pLY/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=Object.create(null),n=e.getSchema()
return{ScalarTypeDefinition:i,ObjectTypeDefinition:i,InterfaceTypeDefinition:i,UnionTypeDefinition:i,EnumTypeDefinition:i,InputObjectTypeDefinition:i}
function i(i){var o=i.name.value
if(!n||!n.getType(o))return t[o]?e.reportError(new r.a(function(e){return'There can be only one type named "'.concat(e,'".')}(o),[t[o],i.name])):t[o]=i.name,!1
e.reportError(new r.a(function(e){return'Type "'.concat(e,'" already exists in the schema. It cannot also be defined in this type definition.')}(o),i.name))}}},pR72:function(e,t,n){"use strict"
var r=a(n("VrN/")),i=n("Tzvz"),o=a(n("OufF"))
function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0
try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,t,n){return{message:n,severity:"error",type:"validation",from:e.posFromIndex(t.start),to:e.posFromIndex(t.end)}}function l(e,t){return Array.prototype.concat.apply([],e.map(t))}r.default.registerHelper("lint","graphql-variables",(function(e,t,n){if(!e)return[]
var r
try{r=(0,o.default)(e)}catch(e){if(e.stack)throw e
return[c(n,e,e.message)]}var a=t.variableToType
return a?function(e,t,n){var r=[]
return n.members.forEach((function(n){var o=n.key.value,a=t[o]
a?function e(t,n){if(t instanceof i.GraphQLNonNull)return"Null"===n.kind?[[n,'Type "'.concat(t,'" is non-nullable and cannot be null.')]]:e(t.ofType,n)
if("Null"===n.kind)return[]
if(t instanceof i.GraphQLList){var r=t.ofType
return"Array"===n.kind?l(n.values,(function(t){return e(r,t)})):e(r,n)}if(t instanceof i.GraphQLInputObjectType){if("Object"!==n.kind)return[[n,'Type "'.concat(t,'" must be an Object.')]]
var o=Object.create(null),a=l(n.members,(function(n){var r=n.key.value
o[r]=!0
var i=t.getFields()[r]
if(!i)return[[n.key,'Type "'.concat(t,'" does not have a field "').concat(r,'".')]]
var a=i?i.type:void 0
return e(a,n.value)}))
return Object.keys(t.getFields()).forEach((function(e){o[e]||t.getFields()[e].type instanceof i.GraphQLNonNull&&a.push([n,'Object of type "'.concat(t,'" is missing required field "').concat(e,'".')])})),a}if("Boolean"===t.name&&"Boolean"!==n.kind||"String"===t.name&&"String"!==n.kind||"ID"===t.name&&"Number"!==n.kind&&"String"!==n.kind||"Float"===t.name&&"Number"!==n.kind||"Int"===t.name&&("Number"!==n.kind||(0|n.value)!==n.value))return[[n,'Expected value of type "'.concat(t,'".')]]
if((t instanceof i.GraphQLEnumType||t instanceof i.GraphQLScalarType)&&("String"!==n.kind&&"Number"!==n.kind&&"Boolean"!==n.kind&&"Null"!==n.kind||(null==(s=t.parseValue(n.value))||s!=s)))return[[n,'Expected value of type "'.concat(t,'".')]]
var s
return[]}(a,n.value).forEach((function(t){var n=s(t,2),i=n[0],o=n[1]
r.push(c(e,i,o))})):r.push(c(e,n.key,'Variable "$'.concat(o,'" does not appear in any GraphQL query.')))})),r}(n,a,r):[]}))},"pv/G":function(e,t,n){"use strict"
n.d(t,"a",(function(){return r}))
function r(e,t){var n="string"==typeof e?[e,t]:[void 0,e],r=n[0],i=n[1],o=" Did you mean "
switch(r&&(o+=r+" "),i.length){case 0:return""
case 1:return o+i[0]+"?"
case 2:return o+i[0]+" or "+i[1]+"?"}var a=i.slice(0,5),s=a.pop()
return o+a.join(", ")+", or "+s+"?"}},qRUV:function(e,t,n){"use strict"
var r=n("SINd"),i=[["normalize",n("TCYN")],["block",n("NAgD")],["inline",n("oSSR")],["linkify",n("mSF0")],["replacements",n("u0qK")],["smartquotes",n("rzDG")]]
function o(){this.ruler=new r
for(var e=0;e<i.length;e++)this.ruler.push(i[e][0],i[e][1])}o.prototype.process=function(e){var t,n,r
for(t=0,n=(r=this.ruler.getRules("")).length;t<n;t++)r[t](e)},o.prototype.State=n("cTMM"),e.exports=o},qc7g:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return f}))
var r=n("HmyC"),i=n("9lTW"),o=n.n(i)
const a="GraphQL"
function s(e,t){const n=t.loc
return o()(n,"Expected ASTNode to have a location."),Object(r.locToRange)(e,n)}function c(e,t){const n=t.loc
return o()(n,"Expected ASTNode to have a location."),Object(r.offsetToPosition)(e,n.start)}async function l(t,n,r){const i=n.name.value,l=r.filter(({definition:e})=>e.name&&e.name.value===i)
if(0===l.length)return e.stderr.write("Definition not found for GraphQL type "+i),{queryRange:[],definitions:[]}
const u=l.map(({filePath:e,content:t,definition:n})=>function(e,t,n){const r=n.name
return o()(r,"Expected ASTNode to have a Name."),{path:e,position:c(t,n),range:s(t,n),name:r.value||"",language:a,projectRoot:e}}(e||"",t,n))
return{definitions:u,queryRange:u.map(e=>s(t,n))}}async function u(t,n,r){const i=n.name.value,o=r.filter(({definition:e})=>e.name.value===i)
if(0===o.length)return e.stderr.write("Definition not found for GraphQL fragment "+i),{queryRange:[],definitions:[]}
const a=o.map(({filePath:e,content:t,definition:n})=>p(e||"",t,n))
return{definitions:a,queryRange:a.map(e=>s(t,n))}}function f(e,t,n){return{definitions:[p(e,t,n)],queryRange:n.name?[s(t,n.name)]:[]}}function p(e,t,n){const r=n.name
return o()(r,"Expected ASTNode to have a Name."),{path:e,position:c(t,n),range:s(t,n),name:r.value||"",language:a,projectRoot:e}}}).call(this,n("8oxB"))},qcZG:function(e,t,n){"use strict"
var r
function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var a=!1
"object"===("undefined"==typeof window?"undefined":o(window))&&(a="MacIntel"===window.navigator.platform)
var s=(i(r={},a?"Cmd-F":"Ctrl-F","findPersistent"),i(r,"Cmd-G","findPersistent"),i(r,"Ctrl-G","findPersistent"),i(r,"Ctrl-Left","goSubwordLeft"),i(r,"Ctrl-Right","goSubwordRight"),i(r,"Alt-Left","goGroupLeft"),i(r,"Alt-Right","goGroupRight"),r)
t.default=s},qvY7:function(e,t,n){"use strict"
n.r(t),n.d(t,"validateWithCustomRules",(function(){return a}))
var r=n("FQ53"),i=n("4RMZ"),o=n("EkME")
function a(e,t,a,s){const{NoUnusedFragments:c}=n("ZBm+"),{ExecutableDefinitions:l}=n("ZfCc"),u=[c,l]
if(s){const{KnownFragmentNames:e}=n("E++1")
u.push(e)}const f=r.a.filter(e=>!u.some(t=>t===e)),p=new i.a(e)
a&&Array.prototype.push.apply(f,a)
const d=Object(o.c)(e,t,f,p)
return d.length>0?d.filter(e=>{if(-1===e.message.indexOf("Unknown directive"))return!0
if(e.nodes&&e.nodes[0]){const t=e.nodes[0]
return!(t.name&&"arguments"===t.name.value||"argumentDefinitions"===t.name.value)}}):[]}},r60r:function(e,t,n){"use strict"
n.d(t,"a",(function(){return p}))
var r=n("1/U3"),i=n("Y/la"),o=n("rWdj"),a=n("dWS+"),s=n("/jXB"),c=n("dQau"),l=n("axIb"),u=n("umOc")
function f(e,t){return'Fields "'.concat(e,'" conflict because ').concat(function e(t){if(Array.isArray(t))return t.map((function(t){var n=t[0],r=t[1]
return'subfields "'.concat(n,'" conflict because ').concat(e(r))})).join(" and ")
return t}(t),". ")+"Use different aliases on the fields to fetch both if this was intentional."}function p(e){var t=new b,n=new Map
return{SelectionSet:function(r){for(var o=function(e,t,n,r,o){var a=[],s=v(e,t,r,o),c=s[0],l=s[1]
if(function(e,t,n,r,o){for(var a=0,s=Object(i.a)(o);a<s.length;a++){var c=s[a],l=c[0],u=c[1]
if(u.length>1)for(var f=0;f<u.length;f++)for(var p=f+1;p<u.length;p++){var d=g(e,n,r,!1,l,u[f],u[p])
d&&t.push(d)}}}(e,a,t,n,c),0!==l.length)for(var u=Object.create(null),f=0;f<l.length;f++){d(e,a,t,u,n,!1,c,l[f])
for(var p=f+1;p<l.length;p++)h(e,a,t,n,!1,l[f],l[p])}return a}(e,n,t,e.getParentType(),r),s=0;s<o.length;s++){var c=o[s],l=c[0],u=l[0],p=l[1],m=c[1],y=c[2]
e.reportError(new a.a(f(u,p),m.concat(y)))}}}}function d(e,t,n,r,i,o,a,s){if(!r[s]){r[s]=!0
var c=e.getFragment(s)
if(c){var l=y(e,n,c),u=l[0],f=l[1]
if(a!==u){m(e,t,n,i,o,a,u)
for(var p=0;p<f.length;p++)d(e,t,n,r,i,o,a,f[p])}}}}function h(e,t,n,r,i,o,a){if(o!==a&&!r.has(o,a,i)){r.add(o,a,i)
var s=e.getFragment(o),c=e.getFragment(a)
if(s&&c){var l=y(e,n,s),u=l[0],f=l[1],p=y(e,n,c),d=p[0],g=p[1]
m(e,t,n,r,i,u,d)
for(var v=0;v<g.length;v++)h(e,t,n,r,i,o,g[v])
for(var b=0;b<f.length;b++)h(e,t,n,r,i,f[b],a)}}}function m(e,t,n,r,i,o,a){for(var s=0,c=Object.keys(o);s<c.length;s++){var l=c[s],u=a[l]
if(u)for(var f=o[l],p=0;p<f.length;p++)for(var d=0;d<u.length;d++){var h=g(e,n,r,i,l,f[p],u[d])
h&&t.push(h)}}}function g(e,t,n,i,a,s,u){var f=s[0],p=s[1],g=s[2],y=u[0],b=u[1],O=u[2],w=i||f!==y&&Object(l.N)(f)&&Object(l.N)(y),x=g&&g.type,k=O&&O.type
if(!w){var E=p.name.value,C=b.name.value
if(E!==C)return[[a,"".concat(E," and ").concat(C," are different fields")],[p],[b]]
if(!function(e,t){if(e.length!==t.length)return!1
return e.every((function(e){var n,i,o=Object(r.a)(t,(function(t){return t.name.value===e.name.value}))
return!!o&&(n=e.value,i=o.value,!n&&!i||Object(c.a)(n)===Object(c.a)(i))}))}(p.arguments||[],b.arguments||[]))return[[a,"they have differing arguments"],[p],[b]]}if(x&&k&&function e(t,n){if(Object(l.J)(t))return!Object(l.J)(n)||e(t.ofType,n.ofType)
if(Object(l.J)(n))return!0
if(Object(l.L)(t))return!Object(l.L)(n)||e(t.ofType,n.ofType)
if(Object(l.L)(n))return!0
if(Object(l.I)(t)||Object(l.I)(n))return t!==n
return!1}(x,k))return[[a,"they return conflicting types ".concat(Object(o.a)(x)," and ").concat(Object(o.a)(k))],[p],[b]]
var T=p.selectionSet,_=b.selectionSet
return T&&_?function(e,t,n,r){if(e.length>0)return[[t,e.map((function(e){return e[0]}))],e.reduce((function(e,t){var n=t[1]
return e.concat(n)}),[n]),e.reduce((function(e,t){var n=t[2]
return e.concat(n)}),[r])]}(function(e,t,n,r,i,o,a,s){var c=[],l=v(e,t,i,o),u=l[0],f=l[1],p=v(e,t,a,s),g=p[0],y=p[1]
if(m(e,c,t,n,r,u,g),0!==y.length)for(var b=Object.create(null),O=0;O<y.length;O++)d(e,c,t,b,n,r,u,y[O])
if(0!==f.length)for(var w=Object.create(null),x=0;x<f.length;x++)d(e,c,t,w,n,r,g,f[x])
for(var k=0;k<f.length;k++)for(var E=0;E<y.length;E++)h(e,c,t,n,r,f[k],y[E])
return c}(e,t,n,w,Object(l.A)(x),T,Object(l.A)(k),_),a,p,b):void 0}function v(e,t,n,r){var i=t.get(r)
if(!i){var o=Object.create(null),a=Object.create(null)
!function e(t,n,r,i,o){for(var a=0,c=r.selections;a<c.length;a++){var f=c[a]
switch(f.kind){case s.Kind.FIELD:var p=f.name.value,d=void 0;(Object(l.N)(n)||Object(l.H)(n))&&(d=n.getFields()[p])
var h=f.alias?f.alias.value:p
i[h]||(i[h]=[]),i[h].push([n,f,d])
break
case s.Kind.FRAGMENT_SPREAD:o[f.name.value]=!0
break
case s.Kind.INLINE_FRAGMENT:var m=f.typeCondition,g=m?Object(u.a)(t.getSchema(),m):n
e(t,g,f.selectionSet,i,o)}}}(e,n,r,o,a),i=[o,Object.keys(a)],t.set(r,i)}return i}function y(e,t,n){var r=t.get(n.selectionSet)
if(r)return r
var i=Object(u.a)(e.getSchema(),n.typeCondition)
return v(e,t,i,n.selectionSet)}var b=function(){function e(){this._data=Object.create(null)}var t=e.prototype
return t.has=function(e,t,n){var r=this._data[e],i=r&&r[t]
return void 0!==i&&(!1!==n||!1===i)},t.add=function(e,t,n){O(this._data,e,t,n),O(this._data,t,e,n)},e}()
function O(e,t,n,r){var i=e[t]
i||(i=Object.create(null),e[t]=i),i[n]=r}},rt3J:function(e,t,n){!function(e){"use strict"
e.registerHelper("fold","brace",(function(t,n){var r,i=n.line,o=t.getLine(i)
function a(a){for(var s=n.ch,c=0;;){var l=s<=0?-1:o.lastIndexOf(a,s-1)
if(-1!=l){if(1==c&&l<n.ch)break
if(r=t.getTokenTypeAt(e.Pos(i,l+1)),!/^(comment|string)/.test(r))return l+1
s=l-1}else{if(1==c)break
c=1,s=o.length}}}var s="{",c="}",l=a("{")
if(null==l&&(s="[",c="]",l=a("[")),null!=l){var u,f,p=1,d=t.lastLine()
e:for(var h=i;h<=d;++h)for(var m=t.getLine(h),g=h==i?l:0;;){var v=m.indexOf(s,g),y=m.indexOf(c,g)
if(v<0&&(v=m.length),y<0&&(y=m.length),(g=Math.min(v,y))==m.length)break
if(t.getTokenTypeAt(e.Pos(h,g+1))==r)if(g==v)++p
else if(!--p){u=h,f=g
break e}++g}if(null!=u&&i!=u)return{from:e.Pos(i,l),to:e.Pos(u,f)}}})),e.registerHelper("fold","import",(function(t,n){function r(n){if(n<t.firstLine()||n>t.lastLine())return null
var r=t.getTokenAt(e.Pos(n,1))
if(/\S/.test(r.string)||(r=t.getTokenAt(e.Pos(n,r.end+1))),"keyword"!=r.type||"import"!=r.string)return null
for(var i=n,o=Math.min(t.lastLine(),n+10);i<=o;++i){var a=t.getLine(i).indexOf(";")
if(-1!=a)return{startCh:r.end,end:e.Pos(i,a)}}}var i,o=n.line,a=r(o)
if(!a||r(o-1)||(i=r(o-2))&&i.end.line==o-1)return null
for(var s=a.end;;){var c=r(s.line+1)
if(null==c)break
s=c.end}return{from:t.clipPos(e.Pos(o,a.startCh+1)),to:s}})),e.registerHelper("fold","include",(function(t,n){function r(n){if(n<t.firstLine()||n>t.lastLine())return null
var r=t.getTokenAt(e.Pos(n,1))
return/\S/.test(r.string)||(r=t.getTokenAt(e.Pos(n,r.end+1))),"meta"==r.type&&"#include"==r.string.slice(0,8)?r.start+8:void 0}var i=n.line,o=r(i)
if(null==o||null!=r(i-1))return null
for(var a=i;null!=r(a+1);)++a
return{from:e.Pos(i,o+1),to:t.clipPos(e.Pos(a))}}))}(n("VrN/"))},ruyP:function(e,t,n){"use strict"
function r(e,t){var n=e.filter(t)
return 0===n.length?e:n}function i(e){return e.toLowerCase().replace(/\W/g,"")}function o(e,t){var n=function(e,t){var n,r,i=[],o=e.length,a=t.length
for(n=0;n<=o;n++)i[n]=[n]
for(r=1;r<=a;r++)i[0][r]=r
for(n=1;n<=o;n++)for(r=1;r<=a;r++){var s=e[n-1]===t[r-1]?0:1
i[n][r]=Math.min(i[n-1][r]+1,i[n][r-1]+1,i[n-1][r-1]+s),n>1&&r>1&&e[n-1]===t[r-2]&&e[n-2]===t[r-1]&&(i[n][r]=Math.min(i[n][r],i[n-2][r-2]+s))}return i[o][a]}(t,e)
return e.length>t.length&&(n-=e.length-t.length-1,n+=0===e.indexOf(t)?0:.5),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=function(e,t){if(!t)return r(e,(function(e){return!e.isDeprecated}))
return r(r(e.map((function(e){return{proximity:o(i(e.text),t),entry:e}})),(function(e){return e.proximity<=2})),(function(e){return!e.entry.isDeprecated})).sort((function(e,t){return(e.entry.isDeprecated?1:0)-(t.entry.isDeprecated?1:0)||e.proximity-t.proximity||e.entry.text.length-t.entry.text.length})).map((function(e){return e.entry}))}(n,i(t.string))
if(!a)return
var s=null!==t.type&&/"|\w/.test(t.string[0])?t.start:t.end
return{list:a,from:{line:e.line,column:s},to:{line:e.line,column:t.end}}}},rzDG:function(e,t,n){"use strict"
var r=n("AGgm").isWhiteSpace,i=n("AGgm").isPunctChar,o=n("AGgm").isMdAsciiPunct,a=/['"]/,s=/['"]/g
function c(e,t,n){return e.substr(0,t)+n+e.substr(t+1)}function l(e,t){var n,a,l,u,f,p,d,h,m,g,v,y,b,O,w,x,k,E,C,T,_
for(C=[],n=0;n<e.length;n++){for(a=e[n],d=e[n].level,k=C.length-1;k>=0&&!(C[k].level<=d);k--);if(C.length=k+1,"text"===a.type){f=0,p=(l=a.content).length
e:for(;f<p&&(s.lastIndex=f,u=s.exec(l));){if(w=x=!0,f=u.index+1,E="'"===u[0],m=32,u.index-1>=0)m=l.charCodeAt(u.index-1)
else for(k=n-1;k>=0&&("softbreak"!==e[k].type&&"hardbreak"!==e[k].type);k--)if("text"===e[k].type){m=e[k].content.charCodeAt(e[k].content.length-1)
break}if(g=32,f<p)g=l.charCodeAt(f)
else for(k=n+1;k<e.length&&("softbreak"!==e[k].type&&"hardbreak"!==e[k].type);k++)if("text"===e[k].type){g=e[k].content.charCodeAt(0)
break}if(v=o(m)||i(String.fromCharCode(m)),y=o(g)||i(String.fromCharCode(g)),b=r(m),(O=r(g))?w=!1:y&&(b||v||(w=!1)),b?x=!1:v&&(O||y||(x=!1)),34===g&&'"'===u[0]&&m>=48&&m<=57&&(x=w=!1),w&&x&&(w=!1,x=y),w||x){if(x)for(k=C.length-1;k>=0&&(h=C[k],!(C[k].level<d));k--)if(h.single===E&&C[k].level===d){h=C[k],E?(T=t.md.options.quotes[2],_=t.md.options.quotes[3]):(T=t.md.options.quotes[0],_=t.md.options.quotes[1]),a.content=c(a.content,u.index,_),e[h.token].content=c(e[h.token].content,h.pos,T),f+=_.length-1,h.token===n&&(f+=T.length-1),p=(l=a.content).length,C.length=k
continue e}w?C.push({token:n,pos:u.index,single:E,level:d}):x&&E&&(a.content=c(a.content,u.index,"’"))}else E&&(a.content=c(a.content,u.index,"’"))}}}}e.exports=function(e){var t
if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)"inline"===e.tokens[t].type&&a.test(e.tokens[t].content)&&l(e.tokens[t].children,e)}},sA7U:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("dWS+"),i=n("/jXB"),o=n("4suF")
function a(e){return'The directive "'.concat(e,'" can only be used once at this location.')}function s(e){for(var t=Object.create(null),n=e.getSchema(),s=n?n.getDirectives():o.i,c=0;c<s.length;c++){var l=s[c]
t[l.name]=!l.isRepeatable}for(var u=e.getDocument().definitions,f=0;f<u.length;f++){var p=u[f]
p.kind===i.Kind.DIRECTIVE_DEFINITION&&(t[p.name.value]=!p.repeatable)}return{enter:function(n){var i=n.directives
if(i)for(var o=Object.create(null),s=0;s<i.length;s++){var c=i[s],l=c.name.value
t[l]&&(o[l]?e.reportError(new r.a(a(l),[o[l],c])):o[l]=c)}}}}},"sJV+":function(e,t,n){"use strict"
n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}))
var r=n("axIb")
function i(e,t){return e===t||(Object(r.L)(e)&&Object(r.L)(t)||!(!Object(r.J)(e)||!Object(r.J)(t)))&&i(e.ofType,t.ofType)}function o(e,t,n){return t===n||(Object(r.L)(n)?!!Object(r.L)(t)&&o(e,t.ofType,n.ofType):Object(r.L)(t)?o(e,t.ofType,n):Object(r.J)(n)?!!Object(r.J)(t)&&o(e,t.ofType,n.ofType):!Object(r.J)(t)&&!!(Object(r.C)(n)&&Object(r.N)(t)&&e.isPossibleType(n,t)))}function a(e,t,n){return t===n||(Object(r.C)(t)?Object(r.C)(n)?e.getPossibleTypes(t).some((function(t){return e.isPossibleType(n,t)})):e.isPossibleType(t,n):!!Object(r.C)(n)&&e.isPossibleType(n,t))}},sRdV:function(e,t,n){"use strict"
e.exports=function(e){var t={}
t.src_Any=n("y8fO").source,t.src_Cc=n("p7ys").source,t.src_Z=n("T8I8").source,t.src_P=n("fKCf").source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|")
return t.src_pseudo_letter="(?:(?![><｜]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><｜]|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+'|["]).)+\\"|\\\'(?:(?!'+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}},"sdW/":function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("pv/G"),i=n("T95z"),o=n("dWS+"),a=n("axIb")
function s(e){return{Field:function(t){var n=e.getParentType()
if(n&&!e.getFieldDef()){var s=e.getSchema(),c=t.name.value,l=function(e,t,n){if(Object(a.C)(t)){for(var r=[],i=Object.create(null),o=0,s=e.getPossibleTypes(t);o<s.length;o++){var c=s[o]
if(c.getFields()[n]){r.push(c.name)
for(var l=0,u=c.getInterfaces();l<u.length;l++){var f=u[l]
f.getFields()[n]&&(i[f.name]=(i[f.name]||0)+1)}}}return Object.keys(i).sort((function(e,t){return i[t]-i[e]})).concat(r)}return[]}(s,n,c),u=0!==l.length?[]:function(e,t,n){if(Object(a.N)(t)||Object(a.H)(t)){var r=Object.keys(t.getFields())
return Object(i.a)(n,r)}return[]}(0,n,c)
e.reportError(new o.a(function(e,t,n,i){var o=n.map((function(e){return'"'.concat(e,'"')})),a=i.map((function(e){return'"'.concat(e,'"')}))
return'Cannot query field "'.concat(e,'" on type "').concat(t,'".')+(Object(r.a)("to use an inline fragment on",o)||Object(r.a)(a))}(c,n.name,l,u),t))}}}}},u0qK:function(e,t,n){"use strict"
var r=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,i=/\((c|tm|r|p)\)/i,o=/\((c|tm|r|p)\)/gi,a={c:"©",r:"®",p:"§",tm:"™"}
function s(e,t){return a[t.toLowerCase()]}function c(e){var t,n,r=0
for(t=e.length-1;t>=0;t--)"text"!==(n=e[t]).type||r||(n.content=n.content.replace(o,s)),"link_open"===n.type&&"auto"===n.info&&r--,"link_close"===n.type&&"auto"===n.info&&r++}function l(e){var t,n,i=0
for(t=e.length-1;t>=0;t--)"text"!==(n=e[t]).type||i||r.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),"link_open"===n.type&&"auto"===n.info&&i--,"link_close"===n.type&&"auto"===n.info&&i++}e.exports=function(e){var t
if(e.md.options.typographer)for(t=e.tokens.length-1;t>=0;t--)"inline"===e.tokens[t].type&&(i.test(e.tokens[t].content)&&c(e.tokens[t].children),r.test(e.tokens[t].content)&&l(e.tokens[t].children))}},uTOq:function(e,t,n){!function(e){"use strict"
var t,n,r=e.Pos
function i(e,t){for(var n=function(e){var t=e.flags
return null!=t?t:(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":"")}(e),r=n,i=0;i<t.length;i++)-1==r.indexOf(t.charAt(i))&&(r+=t.charAt(i))
return n==r?e:new RegExp(e.source,r)}function o(e){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(e.source)}function a(e,t,n){t=i(t,"g")
for(var o=n.line,a=n.ch,s=e.lastLine();o<=s;o++,a=0){t.lastIndex=a
var c=e.getLine(o),l=t.exec(c)
if(l)return{from:r(o,l.index),to:r(o,l.index+l[0].length),match:l}}}function s(e,t,n){if(!o(t))return a(e,t,n)
t=i(t,"gm")
for(var s,c=1,l=n.line,u=e.lastLine();l<=u;){for(var f=0;f<c&&!(l>u);f++){var p=e.getLine(l++)
s=null==s?p:s+"\n"+p}c*=2,t.lastIndex=n.ch
var d=t.exec(s)
if(d){var h=s.slice(0,d.index).split("\n"),m=d[0].split("\n"),g=n.line+h.length-1,v=h[h.length-1].length
return{from:r(g,v),to:r(g+m.length-1,1==m.length?v+m[0].length:m[m.length-1].length),match:d}}}}function c(e,t,n){for(var r,i=0;i<=e.length;){t.lastIndex=i
var o=t.exec(e)
if(!o)break
var a=o.index+o[0].length
if(a>e.length-n)break;(!r||a>r.index+r[0].length)&&(r=o),i=o.index+1}return r}function l(e,t,n){t=i(t,"g")
for(var o=n.line,a=n.ch,s=e.firstLine();o>=s;o--,a=-1){var l=e.getLine(o),u=c(l,t,a<0?0:l.length-a)
if(u)return{from:r(o,u.index),to:r(o,u.index+u[0].length),match:u}}}function u(e,t,n){if(!o(t))return l(e,t,n)
t=i(t,"gm")
for(var a,s=1,u=e.getLine(n.line).length-n.ch,f=n.line,p=e.firstLine();f>=p;){for(var d=0;d<s&&f>=p;d++){var h=e.getLine(f--)
a=null==a?h:h+"\n"+a}s*=2
var m=c(a,t,u)
if(m){var g=a.slice(0,m.index).split("\n"),v=m[0].split("\n"),y=f+g.length,b=g[g.length-1].length
return{from:r(y,b),to:r(y+v.length-1,1==v.length?b+v[0].length:v[v.length-1].length),match:m}}}}function f(e,t,n,r){if(e.length==t.length)return n
for(var i=0,o=n+Math.max(0,e.length-t.length);;){if(i==o)return i
var a=i+o>>1,s=r(e.slice(0,a)).length
if(s==n)return a
s>n?o=a:i=a+1}}function p(e,i,o,a){if(!i.length)return null
var s=a?t:n,c=s(i).split(/\r|\n\r?/)
e:for(var l=o.line,u=o.ch,p=e.lastLine()+1-c.length;l<=p;l++,u=0){var d=e.getLine(l).slice(u),h=s(d)
if(1==c.length){var m=h.indexOf(c[0])
if(-1==m)continue e
return o=f(d,h,m,s)+u,{from:r(l,f(d,h,m,s)+u),to:r(l,f(d,h,m+c[0].length,s)+u)}}var g=h.length-c[0].length
if(h.slice(g)==c[0]){for(var v=1;v<c.length-1;v++)if(s(e.getLine(l+v))!=c[v])continue e
var y=e.getLine(l+c.length-1),b=s(y),O=c[c.length-1]
if(b.slice(0,O.length)==O)return{from:r(l,f(d,h,g,s)+u),to:r(l+c.length-1,f(y,b,O.length,s))}}}}function d(e,i,o,a){if(!i.length)return null
var s=a?t:n,c=s(i).split(/\r|\n\r?/)
e:for(var l=o.line,u=o.ch,p=e.firstLine()-1+c.length;l>=p;l--,u=-1){var d=e.getLine(l)
u>-1&&(d=d.slice(0,u))
var h=s(d)
if(1==c.length){var m=h.lastIndexOf(c[0])
if(-1==m)continue e
return{from:r(l,f(d,h,m,s)),to:r(l,f(d,h,m+c[0].length,s))}}var g=c[c.length-1]
if(h.slice(0,g.length)==g){var v=1
for(o=l-c.length+1;v<c.length-1;v++)if(s(e.getLine(o+v))!=c[v])continue e
var y=e.getLine(l+1-c.length),b=s(y)
if(b.slice(b.length-c[0].length)==c[0])return{from:r(l+1-c.length,f(y,b,y.length-c[0].length,s)),to:r(l,f(d,h,g.length,s))}}}}function h(e,t,n,o){var c
this.atOccurrence=!1,this.doc=e,n=n?e.clipPos(n):r(0,0),this.pos={from:n,to:n},"object"==typeof o?c=o.caseFold:(c=o,o=null),"string"==typeof t?(null==c&&(c=!1),this.matches=function(n,r){return(n?d:p)(e,t,r,c)}):(t=i(t,"gm"),o&&!1===o.multiline?this.matches=function(n,r){return(n?l:a)(e,t,r)}:this.matches=function(n,r){return(n?u:s)(e,t,r)})}String.prototype.normalize?(t=function(e){return e.normalize("NFD").toLowerCase()},n=function(e){return e.normalize("NFD")}):(t=function(e){return e.toLowerCase()},n=function(e){return e}),h.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(t){for(var n=this.matches(t,this.doc.clipPos(t?this.pos.from:this.pos.to));n&&0==e.cmpPos(n.from,n.to);)t?n.from.ch?n.from=r(n.from.line,n.from.ch-1):n=n.from.line==this.doc.firstLine()?null:this.matches(t,this.doc.clipPos(r(n.from.line-1))):n.to.ch<this.doc.getLine(n.to.line).length?n.to=r(n.to.line,n.to.ch+1):n=n.to.line==this.doc.lastLine()?null:this.matches(t,r(n.to.line+1,0))
if(n)return this.pos=n,this.atOccurrence=!0,this.pos.match||!0
var i=r(t?this.doc.firstLine():this.doc.lastLine()+1,0)
return this.pos={from:i,to:i},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(t,n){if(this.atOccurrence){var i=e.splitLines(t)
this.doc.replaceRange(i,this.pos.from,this.pos.to,n),this.pos.to=r(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",(function(e,t,n){return new h(this.doc,e,t,n)})),e.defineDocExtension("getSearchCursor",(function(e,t,n){return new h(this,e,t,n)})),e.defineExtension("selectMatches",(function(t,n){for(var r=[],i=this.getSearchCursor(t,this.getCursor("from"),n);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)r.push({anchor:i.from(),head:i.to()})
r.length&&this.setSelections(r,0)}))}(n("VrN/"))},uezr:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.VariableEditor=void 0
var r=s(n("q1tI")),i=s(n("17x9")),o=s(n("TylT")),a=s(n("qcZG"))
function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=f(t).call(this),n=!i||"object"!==c(i)&&"function"!=typeof i?p(r):i,h(p(n),"_onKeyUp",(function(e,t){var r=t.keyCode;(r>=65&&r<=90||!t.shiftKey&&r>=48&&r<=57||t.shiftKey&&189===r||t.shiftKey&&222===r)&&n.editor.execCommand("autocomplete")})),h(p(n),"_onEdit",(function(){n.ignoreChangeEvent||(n.cachedValue=n.editor.getValue(),n.props.onEdit&&n.props.onEdit(n.cachedValue))})),h(p(n),"_onHasCompletion",(function(e,t){(0,o.default)(e,t,n.props.onHintInformationRender)})),n.cachedValue=e.value||"",n}var i,s,m
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),i=t,(s=[{key:"componentDidMount",value:function(){var e=this,t=n("VrN/")
n("m3Q/"),n("jDMi"),n("ELLl"),n("rt3J"),n("y8iW"),n("iCJ0"),n("uTOq"),n("GP5n"),n("Ku0u"),n("mki7"),n("9Gwe"),n("pR72"),n("+YfQ"),this.editor=t(this._node,{value:this.props.value||"",lineNumbers:!0,tabSize:2,mode:"graphql-variables",theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:!!this.props.readOnly&&"nocursor",foldGutter:{minFoldSize:4},lint:{variableToType:this.props.variableToType},hintOptions:{variableToType:this.props.variableToType,closeOnUnfocus:!1,completeSingle:!1,container:this._node},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:l({"Cmd-Space":function(){return e.editor.showHint({completeSingle:!1,container:e._node})},"Ctrl-Space":function(){return e.editor.showHint({completeSingle:!1,container:e._node})},"Alt-Space":function(){return e.editor.showHint({completeSingle:!1,container:e._node})},"Shift-Space":function(){return e.editor.showHint({completeSingle:!1,container:e._node})},"Cmd-Enter":function(){e.props.onRunQuery&&e.props.onRunQuery()},"Ctrl-Enter":function(){e.props.onRunQuery&&e.props.onRunQuery()},"Shift-Ctrl-P":function(){e.props.onPrettifyQuery&&e.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){e.props.onMergeQuery&&e.props.onMergeQuery()}},a.default)}),this.editor.on("change",this._onEdit),this.editor.on("keyup",this._onKeyUp),this.editor.on("hasCompletion",this._onHasCompletion)}},{key:"componentDidUpdate",value:function(e){var t=n("VrN/")
if(this.ignoreChangeEvent=!0,this.props.variableToType!==e.variableToType&&(this.editor.options.lint.variableToType=this.props.variableToType,this.editor.options.hintOptions.variableToType=this.props.variableToType,t.signal(this.editor,"change",this.editor)),this.props.value!==e.value&&this.props.value!==this.cachedValue){var r=this.props.value||""
this.cachedValue=r,this.editor.setValue(r)}this.ignoreChangeEvent=!1}},{key:"componentWillUnmount",value:function(){this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion),this.editor=null}},{key:"render",value:function(){var e=this
return r.default.createElement("div",{className:"codemirrorWrap",ref:function(t){e._node=t}})}},{key:"getCodeMirror",value:function(){return this.editor}},{key:"getClientHeight",value:function(){return this._node&&this._node.clientHeight}}])&&u(i.prototype,s),m&&u(i,m),t}(r.default.Component)
t.VariableEditor=m,h(m,"propTypes",{variableToType:i.default.object,value:i.default.string,onEdit:i.default.func,readOnly:i.default.bool,onHintInformationRender:i.default.func,onPrettifyQuery:i.default.func,onMergeQuery:i.default.func,onRunQuery:i.default.func,editorTheme:i.default.string})},umOc:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("rWdj"),i=n("2C6G"),o=n("/jXB"),a=n("axIb")
function s(e,t){var n
return t.kind===o.Kind.LIST_TYPE?(n=s(e,t.type))&&Object(a.d)(n):t.kind===o.Kind.NON_NULL_TYPE?(n=s(e,t.type))&&Object(a.e)(n):t.kind===o.Kind.NAMED_TYPE?e.getType(t.name.value):void Object(i.a)(!1,"Unexpected type node: "+Object(r.a)(t))}},usqY:function(e,t,n){"use strict"
function r(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0
default:return!1}}e.exports=function(e,t){for(var n=e.pos;n<e.posMax&&!r(e.src.charCodeAt(n));)n++
return n!==e.pos&&(t||(e.pending+=e.src.slice(e.pos,n)),e.pos=n,!0)}},v96Q:function(e,t,n){"use strict"
n.d(t,"a",(function(){return i}))
var r=n("dWS+")
function i(e){var t=Object.create(null)
return{OperationDefinition:function(n){var i=n.name
return i&&(t[i.value]?e.reportError(new r.a(function(e){return'There can be only one operation named "'.concat(e,'".')}(i.value),[t[i.value],i])):t[i.value]=i),!1},FragmentDefinition:function(){return!1}}}},vCZO:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var r=s(n("q1tI")),i=s(n("17x9")),o=s(n("ThnF")),a=s(n("KuaT"))
function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,m,g,v=function(e){function t(){return l(this,t),f(this,p(t).apply(this,arguments))}var n,i,s
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.schema!==e.schema||this.props.searchValue!==e.searchValue}},{key:"render",value:function(){var e=this.props.searchValue,t=this.props.withinType,n=this.props.schema,i=this.props.onClickType,s=this.props.onClickField,c=[],l=[],u=[],f=n.getTypeMap(),p=Object.keys(f)
t&&(p=p.filter((function(e){return e!==t.name}))).unshift(t.name)
var d=!0,h=!1,m=void 0
try{for(var g,v=function(){var n=g.value
if(c.length+l.length+u.length>=100)return"break"
var p=f[n]
if(t!==p&&y(n,e)&&l.push(r.default.createElement("div",{className:"doc-category-item",key:n},r.default.createElement(a.default,{type:p,onClick:i}))),p.getFields){var d=p.getFields()
Object.keys(d).forEach((function(l){var f,h=d[l]
if(!y(l,e)){if(!h.args||!h.args.length)return
if(0===(f=h.args.filter((function(t){return y(t.name,e)}))).length)return}var m=r.default.createElement("div",{className:"doc-category-item",key:n+"."+l},t!==p&&[r.default.createElement(a.default,{key:"type",type:p,onClick:i}),"."],r.default.createElement("a",{className:"field-name",onClick:function(e){return s(h,p,e)}},h.name),f&&["(",r.default.createElement("span",{key:"args"},f.map((function(e){return r.default.createElement(o.default,{key:e.name,arg:e,onClickType:i,showDefaultValue:!1})}))),")"])
t===p?c.push(m):u.push(m)}))}},b=p[Symbol.iterator]();!(d=(g=b.next()).done)&&"break"!==v();d=!0);}catch(e){h=!0,m=e}finally{try{d||null==b.return||b.return()}finally{if(h)throw m}}return c.length+l.length+u.length===0?r.default.createElement("span",{className:"doc-alert-text"},"No results found."):t&&l.length+u.length>0?r.default.createElement("div",null,c,r.default.createElement("div",{className:"doc-category"},r.default.createElement("div",{className:"doc-category-title"},"other results"),l,u)):r.default.createElement("div",null,c,l,u)}}])&&u(n.prototype,i),s&&u(n,s),t}(r.default.Component)
function y(e,t){try{var n=t.replace(/[^_0-9A-Za-z]/g,(function(e){return"\\"+e}))
return-1!==e.search(new RegExp(n,"i"))}catch(n){return-1!==e.toLowerCase().indexOf(t.toLowerCase())}}t.default=v,h=v,m="propTypes",g={schema:i.default.object,withinType:i.default.object,searchValue:i.default.string,onClickType:i.default.func,onClickField:i.default.func},m in h?Object.defineProperty(h,m,{value:g,enumerable:!0,configurable:!0,writable:!0}):h[m]=g},vWgF:function(e,t,n){"use strict"
e.exports=n("8PLQ")},vbN3:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.QueryEditor=void 0
var r=u(n("q1tI")),i=u(n("17x9")),o=n("Tzvz"),a=u(n("1M3H")),s=n("XFf3"),c=u(n("TylT")),l=u(n("qcZG"))
function u(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n)
"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=new a.default,b=/^[a-zA-Z0-9_@(]$/,O=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=h(t).call(this),n=!i||"object"!==f(i)&&"function"!=typeof i?m(r):i,v(m(n),"_onKeyUp",(function(e,t){b.test(t.key)&&n.editor.execCommand("autocomplete")})),v(m(n),"_onEdit",(function(){n.ignoreChangeEvent||(n.cachedValue=n.editor.getValue(),n.props.onEdit&&n.props.onEdit(n.cachedValue))})),v(m(n),"_onHasCompletion",(function(e,t){(0,c.default)(e,t,n.props.onHintInformationRender)})),n.cachedValue=e.value||"",n}var i,o,a
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),i=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=n("VrN/")
n("m3Q/"),n("cokd"),n("jDMi"),n("ELLl"),n("y8iW"),n("rt3J"),n("C2zF"),n("uTOq"),n("GP5n"),n("Ku0u"),n("iCJ0"),n("mki7"),n("0PPW"),n("O8+U"),n("HBFN"),n("Xkdu"),n("HkoP"),this.editor=t(this._node,{value:this.props.value||"",lineNumbers:!0,tabSize:2,mode:"graphql",theme:this.props.editorTheme||"graphiql",keyMap:"sublime",autoCloseBrackets:!0,matchBrackets:!0,showCursorWhenSelecting:!0,readOnly:!!this.props.readOnly&&"nocursor",foldGutter:{minFoldSize:4},lint:{schema:this.props.schema},hintOptions:{schema:this.props.schema,closeOnUnfocus:!1,completeSingle:!1,container:this._node},info:{schema:this.props.schema,renderDescription:function(e){return y.render(e)},onClick:function(t){return e.props.onClickReference(t)}},jump:{schema:this.props.schema,onClick:function(t){return e.props.onClickReference(t)}},gutters:["CodeMirror-linenumbers","CodeMirror-foldgutter"],extraKeys:p({"Cmd-Space":function(){return e.editor.showHint({completeSingle:!0,container:e._node})},"Ctrl-Space":function(){return e.editor.showHint({completeSingle:!0,container:e._node})},"Alt-Space":function(){return e.editor.showHint({completeSingle:!0,container:e._node})},"Shift-Space":function(){return e.editor.showHint({completeSingle:!0,container:e._node})},"Shift-Alt-Space":function(){return e.editor.showHint({completeSingle:!0,container:e._node})},"Cmd-Enter":function(){e.props.onRunQuery&&e.props.onRunQuery()},"Ctrl-Enter":function(){e.props.onRunQuery&&e.props.onRunQuery()},"Shift-Ctrl-C":function(){e.props.onCopyQuery&&e.props.onCopyQuery()},"Shift-Ctrl-P":function(){e.props.onPrettifyQuery&&e.props.onPrettifyQuery()},"Shift-Ctrl-M":function(){e.props.onMergeQuery&&e.props.onMergeQuery()}},l.default)}),this.editor.on("change",this._onEdit),this.editor.on("keyup",this._onKeyUp),this.editor.on("hasCompletion",this._onHasCompletion),this.editor.on("beforeChange",this._onBeforeChange)}},{key:"componentDidUpdate",value:function(e){var t=n("VrN/")
this.ignoreChangeEvent=!0,this.props.schema!==e.schema&&(this.editor.options.lint.schema=this.props.schema,this.editor.options.hintOptions.schema=this.props.schema,this.editor.options.info.schema=this.props.schema,this.editor.options.jump.schema=this.props.schema,t.signal(this.editor,"change",this.editor)),this.props.value!==e.value&&this.props.value!==this.cachedValue&&(this.cachedValue=this.props.value,this.editor.setValue(this.props.value)),this.ignoreChangeEvent=!1}},{key:"componentWillUnmount",value:function(){this.editor&&(this.editor.off("change",this._onEdit),this.editor.off("keyup",this._onKeyUp),this.editor.off("hasCompletion",this._onHasCompletion),this.editor=null)}},{key:"render",value:function(){var e=this
return r.default.createElement("div",{className:"query-editor",ref:function(t){e._node=t}})}},{key:"getCodeMirror",value:function(){return this.editor}},{key:"getClientHeight",value:function(){return this._node&&this._node.clientHeight}},{key:"_onBeforeChange",value:function(e,t){if("paste"===t.origin){var n=t.text.map(s.normalizeWhitespace)
t.update(t.from,t.to,n)}}}])&&d(i.prototype,o),a&&d(i,a),t}(r.default.Component)
t.QueryEditor=O,v(O,"propTypes",{schema:i.default.instanceOf(o.GraphQLSchema),value:i.default.string,onEdit:i.default.func,readOnly:i.default.bool,onHintInformationRender:i.default.func,onClickReference:i.default.func,onCopyQuery:i.default.func,onPrettifyQuery:i.default.func,onMergeQuery:i.default.func,onRunQuery:i.default.func,editorTheme:i.default.string})},veYS:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.ToolbarButton=void 0
var r=o(n("q1tI")),i=o(n("17x9"))
function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){function t(e){var n,r,i
return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,i=c(t).call(this,e),n=!i||"object"!==a(i)&&"function"!=typeof i?l(r):i,f(l(n),"handleClick",(function(e){e.preventDefault()
try{n.props.onClick(),n.setState({error:null})}catch(e){n.setState({error:e})}})),n.state={error:null},n}var n,i,o
return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){var e=this.state.error
return r.default.createElement("a",{className:"toolbar-button"+(e?" error":""),onMouseDown:d,onClick:this.handleClick,title:e?e.message:this.props.title},this.props.label)}}])&&s(n.prototype,i),o&&s(n,o),t}(r.default.Component)
function d(e){e.preventDefault()}t.ToolbarButton=p,f(p,"propTypes",{onClick:i.default.func,title:i.default.string,label:i.default.string})},vh1z:function(e,t,n){"use strict"
n("ls82"),e.exports=n("2jxP").GraphiQL},"vys+":function(e,t,n){"use strict"
e.exports=function(e,t,n,r){var i,o,a,s,c,l,u,f=!1,p=e.bMarks[t]+e.tShift[t],d=e.eMarks[t]
if(e.sCount[t]-e.blkIndent>=4)return!1
if(p+3>d)return!1
if(126!==(i=e.src.charCodeAt(p))&&96!==i)return!1
if(c=p,(o=(p=e.skipChars(p,i))-c)<3)return!1
if(u=e.src.slice(c,p),(a=e.src.slice(p,d)).indexOf(String.fromCharCode(i))>=0)return!1
if(r)return!0
for(s=t;!(++s>=n)&&!((p=c=e.bMarks[s]+e.tShift[s])<(d=e.eMarks[s])&&e.sCount[s]<e.blkIndent);)if(e.src.charCodeAt(p)===i&&!(e.sCount[s]-e.blkIndent>=4||(p=e.skipChars(p,i))-c<o||(p=e.skipSpaces(p))<d)){f=!0
break}return o=e.sCount[t],e.line=s+(f?1:0),(l=e.push("fence","code",0)).info=a,l.content=e.getLines(t+1,s,o,!0),l.markup=u,l.map=[t,e.line],!0}},wNVd:function(e,t,n){"use strict"
function r(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0
var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sizes=[]}var t,n,i
return t=e,(n=[{key:"updateSizes",value:function(e){var t=this
e.forEach((function(e,n){var r=e.getClientHeight()
n<=t.sizes.length&&r!==t.sizes[n]&&e.getCodeMirror().setSize(),t.sizes[n]=r}))}}])&&r(t.prototype,n),i&&r(t,i),e}()
t.default=i},wpgB:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var r=n("dWS+"),i=n("axIb")
function o(e,t){return'Enum value "'.concat(e,".").concat(t,'" can only be defined once.')}function a(e,t){return'Enum value "'.concat(e,".").concat(t,'" already exists in the schema. It cannot also be defined in this type extension.')}function s(e){var t=e.getSchema(),n=t?t.getTypeMap():Object.create(null),s=Object.create(null)
return{EnumTypeDefinition:c,EnumTypeExtension:c}
function c(t){var c=t.name.value
if(s[c]||(s[c]=Object.create(null)),t.values)for(var l=s[c],u=0,f=t.values;u<f.length;u++){var p=f[u],d=p.name.value,h=n[c]
Object(i.E)(h)&&h.getValue(d)?e.reportError(new r.a(a(c,d),p.name)):l[d]?e.reportError(new r.a(o(c,d),[l[d],p.name])):l[d]=p.name}return!1}}},wtjL:function(e,t,n){"use strict"
var r=n("Vwaf").HTML_TAG_RE
e.exports=function(e,t){var n,i,o,a=e.pos
return!!e.md.options.html&&(o=e.posMax,!(60!==e.src.charCodeAt(a)||a+2>=o)&&(!(33!==(n=e.src.charCodeAt(a+1))&&63!==n&&47!==n&&!function(e){var t=32|e
return t>=97&&t<=122}(n))&&(!!(i=e.src.slice(a).match(r))&&(t||(e.push("html_inline","",0).content=e.src.slice(a,a+i[0].length)),e.pos+=i[0].length,!0))))}},xGQ6:function(e,t,n){"use strict"
var r={}
function i(e,t,n){var o,a,s,c,l,u=""
for("string"!=typeof t&&(n=t,t=i.defaultChars),void 0===n&&(n=!0),l=function(e){var t,n,i=r[e]
if(i)return i
for(i=r[e]=[],t=0;t<128;t++)n=String.fromCharCode(t),/^[0-9a-z]$/i.test(n)?i.push(n):i.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))
for(t=0;t<e.length;t++)i[e.charCodeAt(t)]=e[t]
return i}(t),o=0,a=e.length;o<a;o++)if(s=e.charCodeAt(o),n&&37===s&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2
else if(s<128)u+=l[s]
else if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&o+1<a&&(c=e.charCodeAt(o+1))>=56320&&c<=57343){u+=encodeURIComponent(e[o]+e[o+1]),o++
continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(e[o])
return u}i.defaultChars=";/?:@&=+$,-_.!~*'()#",i.componentChars="-_.!~*'()",e.exports=i},y8IY:function(e,t,n){"use strict"
n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}))
var r=n("pv/G"),i=n("T95z"),o=n("dWS+"),a=n("/jXB"),s=n("4suF")
function c(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){return'Unknown argument "'.concat(e,'" on directive "@').concat(t,'".')+Object(r.a)(n.map((function(e){return'"'.concat(e,'"')})))}function f(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?c(n,!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p(e),{Argument:function(t){var n=e.getArgument(),a=e.getFieldDef(),s=e.getParentType()
if(!n&&a&&s){var c=t.name.value,l=a.args.map((function(e){return e.name}))
e.reportError(new o.a(function(e,t,n,i){return'Unknown argument "'.concat(e,'" on field "').concat(t,'" of type "').concat(n,'".')+Object(r.a)(i.map((function(e){return'"'.concat(e,'"')})))}(c,a.name,s.name,Object(i.a)(c,l)),t))}}})}function p(e){for(var t=Object.create(null),n=e.getSchema(),r=n?n.getDirectives():s.i,c=0;c<r.length;c++){var l=r[c]
t[l.name]=l.args.map((function(e){return e.name}))}for(var f=e.getDocument().definitions,p=0;p<f.length;p++){var d=f[p]
d.kind===a.Kind.DIRECTIVE_DEFINITION&&(t[d.name.value]=d.arguments?d.arguments.map((function(e){return e.name.value})):[])}return{Directive:function(n){var r=n.name.value,a=t[r]
if(n.arguments&&a)for(var s=0,c=n.arguments;s<c.length;s++){var l=c[s],f=l.name.value
if(-1===a.indexOf(f)){var p=Object(i.a)(f,a)
e.reportError(new o.a(u(f,r,p),l))}}return!1}}}},y8fO:function(e,t){e.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},y8iW:function(e,t,n){!function(e){"use strict"
e.defineOption("foldGutter",!1,(function(t,r,i){var o
i&&i!=e.Init&&(t.clearGutter(t.state.foldGutter.options.gutter),t.state.foldGutter=null,t.off("gutterClick",c),t.off("changes",l),t.off("viewportChange",u),t.off("fold",f),t.off("unfold",f),t.off("swapDoc",l)),r&&(t.state.foldGutter=new n((!0===(o=r)&&(o={}),null==o.gutter&&(o.gutter="CodeMirror-foldgutter"),null==o.indicatorOpen&&(o.indicatorOpen="CodeMirror-foldgutter-open"),null==o.indicatorFolded&&(o.indicatorFolded="CodeMirror-foldgutter-folded"),o)),s(t),t.on("gutterClick",c),t.on("changes",l),t.on("viewportChange",u),t.on("fold",f),t.on("unfold",f),t.on("swapDoc",l))}))
var t=e.Pos
function n(e){this.options=e,this.from=this.to=0}function r(e,n){for(var r=e.findMarks(t(n,0),t(n+1,0)),i=0;i<r.length;++i)if(r[i].__isFold){var o=r[i].find(-1)
if(o&&o.line===n)return r[i]}}function i(e){if("string"==typeof e){var t=document.createElement("div")
return t.className=e+" CodeMirror-guttermarker-subtle",t}return e.cloneNode(!0)}function o(e,n,o){var s=e.state.foldGutter.options,c=n-1,l=e.foldOption(s,"minFoldSize"),u=e.foldOption(s,"rangeFinder"),f="string"==typeof s.indicatorFolded&&a(s.indicatorFolded),p="string"==typeof s.indicatorOpen&&a(s.indicatorOpen)
e.eachLine(n,o,(function(n){++c
var o=null,a=n.gutterMarkers
if(a&&(a=a[s.gutter]),r(e,c)){if(f&&a&&f.test(a.className))return
o=i(s.indicatorFolded)}else{var d=t(c,0),h=u&&u(e,d)
if(h&&h.to.line-h.from.line>=l){if(p&&a&&p.test(a.className))return
o=i(s.indicatorOpen)}}(o||a)&&e.setGutterMarker(n,s.gutter,o)}))}function a(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function s(e){var t=e.getViewport(),n=e.state.foldGutter
n&&(e.operation((function(){o(e,t.from,t.to)})),n.from=t.from,n.to=t.to)}function c(e,n,i){var o=e.state.foldGutter
if(o){var a=o.options
if(i==a.gutter){var s=r(e,n)
s?s.clear():e.foldCode(t(n,0),a)}}}function l(e){var t=e.state.foldGutter
if(t){var n=t.options
t.from=t.to=0,clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout((function(){s(e)}),n.foldOnChangeTimeSpan||600)}}function u(e){var t=e.state.foldGutter
if(t){var n=t.options
clearTimeout(t.changeUpdate),t.changeUpdate=setTimeout((function(){var n=e.getViewport()
t.from==t.to||n.from-t.to>20||t.from-n.to>20?s(e):e.operation((function(){n.from<t.from&&(o(e,n.from,t.from),t.from=n.from),n.to>t.to&&(o(e,t.to,n.to),t.to=n.to)}))}),n.updateViewportTimeSpan||400)}}function f(e,t){var n=e.state.foldGutter
if(n){var r=t.line
r>=n.from&&r<n.to&&o(e,r,r+1)}}}(n("VrN/"),n("SJVZ"))},yKnv:function(e,t,n){"use strict"
e.exports.tokenize=function(e,t){var n,r,i=e.pos,o=e.src.charCodeAt(i)
if(t)return!1
if(95!==o&&42!==o)return!1
for(r=e.scanDelims(e.pos,42===o),n=0;n<r.length;n++)e.push("text","",0).content=String.fromCharCode(o),e.delimiters.push({marker:o,length:r.length,jump:n,token:e.tokens.length-1,level:e.level,end:-1,open:r.can_open,close:r.can_close})
return e.pos+=r.length,!0},e.exports.postProcess=function(e){var t,n,r,i,o,a,s=e.delimiters
for(t=e.delimiters.length-1;t>=0;t--)95!==(n=s[t]).marker&&42!==n.marker||-1!==n.end&&(r=s[n.end],a=t>0&&s[t-1].end===n.end+1&&s[t-1].token===n.token-1&&s[n.end+1].token===r.token+1&&s[t-1].marker===n.marker,o=String.fromCharCode(n.marker),(i=e.tokens[n.token]).type=a?"strong_open":"em_open",i.tag=a?"strong":"em",i.nesting=1,i.markup=a?o+o:o,i.content="",(i=e.tokens[r.token]).type=a?"strong_close":"em_close",i.tag=a?"strong":"em",i.nesting=-1,i.markup=a?o+o:o,i.content="",a&&(e.tokens[s[t-1].token].content="",e.tokens[s[n.end+1].token].content="",t--))}},yOgx:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.mergeAst=function(e){var t={}
e.definitions.filter((function(e){return e.kind===r.Kind.FRAGMENT_DEFINITION})).forEach((function(e){var n=Object.assign({},e)
n.kind=r.Kind.INLINE_FRAGMENT,t[e.name.value]=n}))
var n=Object.assign({},e)
return n.definitions=e.definitions.filter((function(e){return e.kind!==r.Kind.FRAGMENT_DEFINITION})).map((function(e){return function e(t,n){var i=n
i.kind===r.Kind.FRAGMENT_SPREAD&&(i=t[i.name.value])
i.selectionSet&&(i.selectionSet.selections=i.selectionSet.selections.filter((function(e,t,n){return e.kind!==r.Kind.FRAGMENT_SPREAD||t===n.findIndex((function(t){return t.kind===r.Kind.FRAGMENT_SPREAD&&e.name.value===t.name.value}))})).map((function(n){return e(t,n)})))
return i}(t,e)})),n}
var r=n("/jXB")},"zQ/W":function(e,t,n){"use strict"
var r=n("AGgm").normalizeReference,i=n("AGgm").isSpace
e.exports=function(e,t){var n,o,a,s,c,l,u,f,p,d="",h=e.pos,m=e.posMax,g=e.pos,v=!0
if(91!==e.src.charCodeAt(e.pos))return!1
if(c=e.pos+1,(s=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0)return!1
if((l=s+1)<m&&40===e.src.charCodeAt(l)){for(v=!1,l++;l<m&&(o=e.src.charCodeAt(l),i(o)||10===o);l++);if(l>=m)return!1
for(g=l,(u=e.md.helpers.parseLinkDestination(e.src,l,e.posMax)).ok&&(d=e.md.normalizeLink(u.str),e.md.validateLink(d)?l=u.pos:d=""),g=l;l<m&&(o=e.src.charCodeAt(l),i(o)||10===o);l++);if(u=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<m&&g!==l&&u.ok)for(p=u.str,l=u.pos;l<m&&(o=e.src.charCodeAt(l),i(o)||10===o);l++);else p="";(l>=m||41!==e.src.charCodeAt(l))&&(v=!0),l++}if(v){if(void 0===e.env.references)return!1
if(l<m&&91===e.src.charCodeAt(l)?(g=l+1,(l=e.md.helpers.parseLinkLabel(e,l))>=0?a=e.src.slice(g,l++):l=s+1):l=s+1,a||(a=e.src.slice(c,s)),!(f=e.env.references[r(a)]))return e.pos=h,!1
d=f.href,p=f.title}return t||(e.pos=c,e.posMax=s,e.push("link_open","a",1).attrs=n=[["href",d]],p&&n.push(["title",p]),e.md.inline.tokenize(e),e.push("link_close","a",-1)),e.pos=l,e.posMax=m,!0}}}])

//# sourceMappingURL=graphiql-c-e3386dfe6f.js.map