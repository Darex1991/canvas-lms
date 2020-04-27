(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[43],{"1jQf":function(e,t,r){"use strict"
r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return u}))
var n=r("b0dj"),i=r("qVdT"),o=r("mrSG"),a=r("RRgQ")
!function(e){function t(t,r){var n=e.call(this,t)||this
return n.link=r,n}Object(o.__extends)(t,e)}(Error)
function s(e){return e.request.length<=1}function u(e){return new n.a((function(t){t.error(e)}))}function c(e,t){var r=Object(o.__assign)({},e)
return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){r="function"==typeof e?Object(o.__assign)({},r,e(r)):Object(o.__assign)({},r,e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return Object(o.__assign)({},r)}}),Object.defineProperty(t,"toKey",{enumerable:!1,value:function(){return function(e){var t=e.query,r=e.variables,n=e.operationName
return JSON.stringify([n,t,r])}(t)}}),t}function l(e,t){return t?t(e):n.a.of()}function f(e){return"function"==typeof e?new b(e):e}function p(){return new b((function(){return n.a.of()}))}function h(e){return 0===e.length?p():e.map(f).reduce((function(e,t){return e.concat(t)}))}function d(e,t,r){var i=f(t),o=f(r||new b(l))
return s(i)&&s(o)?new b((function(t){return e(t)?i.request(t)||n.a.of():o.request(t)||n.a.of()})):new b((function(t,r){return e(t)?i.request(t,r)||n.a.of():o.request(t,r)||n.a.of()}))}var v=function(e,t){var r=f(e)
if(s(r))return r
var i=f(t)
return s(i)?new b((function(e){return r.request(e,(function(e){return i.request(e)||n.a.of()}))||n.a.of()})):new b((function(e,t){return r.request(e,(function(e){return i.request(e,t)||n.a.of()}))||n.a.of()}))},b=function(){function e(e){e&&(this.request=e)}return e.prototype.split=function(t,r,n){return this.concat(d(t,r,n||new e(l)))},e.prototype.concat=function(e){return v(this,e)},e.prototype.request=function(e,t){throw new i.a(1)},e.empty=p,e.from=h,e.split=d,e.execute=y,e}()
function y(e,t){return e.request(c(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query}
return t.operationName||(t.operationName="string"!=typeof t.query?Object(a.getOperationName)(t.query):""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var o=n[r]
if(t.indexOf(o)<0)throw new i.a(2)}return e}(t))))||n.a.of()}},"3UD+":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e)
t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"9x6x":function(e,t,r){"use strict"
e.exports=function(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t})
var r,n="boolean"==typeof t.cycles&&t.cycles,i=t.cmp&&(r=t.cmp,function(e){return function(t,n){var i={key:t,value:e[t]},o={key:n,value:e[n]}
return r(i,o)}}),o=[]
return function e(t){if(t&&t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0!==t){if("number"==typeof t)return isFinite(t)?""+t:"null"
if("object"!=typeof t)return JSON.stringify(t)
var r,a
if(Array.isArray(t)){for(a="[",r=0;r<t.length;r++)r&&(a+=","),a+=e(t[r])||"null"
return a+"]"}if(null===t)return"null"
if(-1!==o.indexOf(t)){if(n)return JSON.stringify("__cycle__")
throw new TypeError("Converting circular structure to JSON")}var s=o.push(t)-1,u=Object.keys(t).sort(i&&i(t))
for(a="",r=0;r<u.length;r++){var c=u[r],l=e(t[c])
l&&(a&&(a+=","),a+=JSON.stringify(c)+":"+l)}return o.splice(s,1),"{"+a+"}"}}(e)}},"ABJ/":function(e,t,r){e.exports=r("p7JZ").Observable},IJ8u:function(e){e.exports=JSON.parse('{"__schema":{"types":[{"kind":"UNION","name":"AssignmentOverrideSet","possibleTypes":[{"name":"Section"},{"name":"Group"},{"name":"AdhocStudents"}]},{"kind":"INTERFACE","name":"AssignmentsConnectionInterface","possibleTypes":[{"name":"AssignmentGroup"},{"name":"Course"}]},{"kind":"INTERFACE","name":"LegacyIDInterface","possibleTypes":[{"name":"Account"},{"name":"Assignment"},{"name":"AssignmentGroup"},{"name":"AssignmentOverride"},{"name":"Course"},{"name":"Discussion"},{"name":"Enrollment"},{"name":"ExternalTool"},{"name":"ExternalUrl"},{"name":"File"},{"name":"GradingPeriod"},{"name":"Group"},{"name":"GroupMembership"},{"name":"GroupSet"},{"name":"MediaTrack"},{"name":"Module"},{"name":"ModuleExternalTool"},{"name":"ModuleItem"},{"name":"Outcome"},{"name":"Page"},{"name":"PostPolicy"},{"name":"ProficiencyRating"},{"name":"Progress"},{"name":"Quiz"},{"name":"Rubric"},{"name":"RubricAssessment"},{"name":"RubricAssociation"},{"name":"RubricCriterion"},{"name":"RubricRating"},{"name":"Section"},{"name":"Submission"},{"name":"SubmissionComment"},{"name":"SubmissionDraft"},{"name":"Term"},{"name":"User"}]},{"kind":"UNION","name":"Lockable","possibleTypes":[{"name":"Assignment"},{"name":"Discussion"},{"name":"Quiz"},{"name":"Page"},{"name":"Module"}]},{"kind":"INTERFACE","name":"ModuleItemInterface","possibleTypes":[{"name":"Assignment"},{"name":"Discussion"},{"name":"ExternalTool"},{"name":"ExternalUrl"},{"name":"File"},{"name":"ModuleExternalTool"},{"name":"Page"},{"name":"Quiz"},{"name":"SubHeader"}]},{"kind":"INTERFACE","name":"Node","possibleTypes":[{"name":"Account"},{"name":"Assignment"},{"name":"AssignmentGroup"},{"name":"AssignmentOverride"},{"name":"Course"},{"name":"Discussion"},{"name":"Enrollment"},{"name":"File"},{"name":"GradingPeriod"},{"name":"Group"},{"name":"GroupSet"},{"name":"MediaObject"},{"name":"Module"},{"name":"ModuleItem"},{"name":"Page"},{"name":"PostPolicy"},{"name":"Progress"},{"name":"Quiz"},{"name":"Rubric"},{"name":"Section"},{"name":"Submission"},{"name":"Term"},{"name":"User"}]},{"kind":"UNION","name":"ProgressContext","possibleTypes":[{"name":"Assignment"},{"name":"Course"},{"name":"File"},{"name":"GroupSet"},{"name":"User"}]},{"kind":"INTERFACE","name":"SubmissionInterface","possibleTypes":[{"name":"Submission"},{"name":"SubmissionHistory"}]},{"kind":"INTERFACE","name":"Timestamped","possibleTypes":[{"name":"Assignment"},{"name":"AssignmentGroup"},{"name":"AssignmentOverride"},{"name":"Course"},{"name":"Discussion"},{"name":"Enrollment"},{"name":"ExternalTool"},{"name":"ExternalUrl"},{"name":"File"},{"name":"GradingPeriod"},{"name":"Group"},{"name":"GroupMembership"},{"name":"Module"},{"name":"ModuleExternalTool"},{"name":"ModuleItem"},{"name":"Page"},{"name":"Progress"},{"name":"Quiz"},{"name":"Section"},{"name":"Submission"},{"name":"SubmissionComment"},{"name":"SubmissionHistory"},{"name":"User"}]},{"kind":"UNION","name":"TurnitinContext","possibleTypes":[{"name":"Submission"},{"name":"File"}]}]}}')},K9jn:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r("RRgQ")
function i(e,t,r){var o=r.fragmentMap,s=r.contextValue,u=r.variableValues,c={}
return e.selections.forEach((function(e){if(!u||n.shouldInclude(e,u))if(n.isField(e)){var l=function(e,t,r){var o=r.variableValues,a=r.contextValue,s=r.resolver,u=e.name.value,c=n.argumentsObjectFromField(e,o),l={isLeaf:!e.selectionSet,resultKey:n.resultKeyNameFromField(e),directives:n.getDirectiveInfoFromField(e,o),field:e},f=s(u,t,c,a,l)
if(!e.selectionSet)return f
if(null==f)return f
if(Array.isArray(f))return function e(t,r,n){return r.map((function(r){return null===r?null:Array.isArray(r)?e(t,r,n):i(t.selectionSet,r,n)}))}(e,f,r)
return i(e.selectionSet,f,r)}(e,t,r),f=n.resultKeyNameFromField(e)
void 0!==l&&(void 0===c[f]?c[f]=l:a(c[f],l))}else{var p=void 0
if(n.isInlineFragment(e))p=e
else if(!(p=o[e.name.value]))throw new Error("No fragment named "+e.name.value)
var h=p.typeCondition.name.value
if(r.fragmentMatcher(t,h,s)){var d=i(p.selectionSet,t,r)
a(c,d)}}})),r.resultMapper?r.resultMapper(c,t):c}t.graphql=function(e,t,r,o,a,s){void 0===a&&(a={}),void 0===s&&(s={})
var u=n.getMainDefinition(t),c=n.getFragmentDefinitions(t),l={fragmentMap:n.createFragmentMap(c),contextValue:o,variableValues:a,resultMapper:s.resultMapper,resolver:e,fragmentMatcher:s.fragmentMatcher||function(){return!0}}
return i(u.selectionSet,r,l)}
var o=Object.prototype.hasOwnProperty
function a(e,t){null!==t&&"object"==typeof t&&Object.keys(t).forEach((function(r){var n=t[r]
o.call(e,r)?a(e[r],n):e[r]=n}))}t.merge=a},RRgQ:function(e,t,r){"use strict"
r.r(t),function(e){r.d(t,"addTypenameToDocument",(function(){return Y})),r.d(t,"argumentsObjectFromField",(function(){return v})),r.d(t,"assign",(function(){return F})),r.d(t,"buildQueryFromSelectionSet",(function(){return ie})),r.d(t,"canUseWeakMap",(function(){return ae})),r.d(t,"checkDocument",(function(){return I})),r.d(t,"cloneDeep",(function(){return ue})),r.d(t,"createFragmentMap",(function(){return z})),r.d(t,"getDefaultValues",(function(){return G})),r.d(t,"getDirectiveInfoFromField",(function(){return S})),r.d(t,"getDirectiveNames",(function(){return Q})),r.d(t,"getDirectivesFromDocument",(function(){return te})),r.d(t,"getEnv",(function(){return ce})),r.d(t,"getFragmentDefinition",(function(){return A})),r.d(t,"getFragmentDefinitions",(function(){return V})),r.d(t,"getFragmentQueryDocument",(function(){return D})),r.d(t,"getInclusionDirectives",(function(){return E})),r.d(t,"getMainDefinition",(function(){return L})),r.d(t,"getMutationDefinition",(function(){return M})),r.d(t,"getOperationDefinition",(function(){return P})),r.d(t,"getOperationDefinitionOrDie",(function(){return C})),r.d(t,"getOperationName",(function(){return T})),r.d(t,"getQueryDefinition",(function(){return N})),r.d(t,"getStoreKeyName",(function(){return d})),r.d(t,"graphQLResultHasError",(function(){return ve})),r.d(t,"hasClientExports",(function(){return R})),r.d(t,"hasDirectives",(function(){return x})),r.d(t,"isDevelopment",(function(){return pe})),r.d(t,"isEnv",(function(){return le})),r.d(t,"isField",(function(){return y})),r.d(t,"isIdValue",(function(){return g})),r.d(t,"isInlineFragment",(function(){return m})),r.d(t,"isJsonValue",(function(){return j})),r.d(t,"isNumberValue",(function(){return l})),r.d(t,"isProduction",(function(){return fe})),r.d(t,"isScalarValue",(function(){return c})),r.d(t,"isTest",(function(){return he})),r.d(t,"maybeDeepFreeze",(function(){return be})),r.d(t,"mergeDeep",(function(){return me})),r.d(t,"mergeDeepArray",(function(){return ge})),r.d(t,"removeArgumentsFromDocument",(function(){return re})),r.d(t,"removeClientSetsFromDocument",(function(){return oe})),r.d(t,"removeConnectionDirectiveFromDocument",(function(){return Z})),r.d(t,"removeDirectivesFromDocument",(function(){return H})),r.d(t,"removeFragmentSpreadFromDocument",(function(){return ne})),r.d(t,"resultKeyNameFromField",(function(){return b})),r.d(t,"shouldInclude",(function(){return k})),r.d(t,"storeKeyNameFromField",(function(){return p})),r.d(t,"stripSymbols",(function(){return ke})),r.d(t,"toIdValue",(function(){return O})),r.d(t,"tryFunctionOrLogError",(function(){return de})),r.d(t,"valueFromNode",(function(){return w})),r.d(t,"valueToObjectRepresentation",(function(){return f})),r.d(t,"variablesInOperation",(function(){return U})),r.d(t,"warnOnceInDevelopment",(function(){return Se}))
var n=r("L2ys"),i=r("qVdT"),o=r("mrSG"),a=r("9x6x"),s=r.n(a),u=r("qx2n")
function c(e){return["StringValue","BooleanValue","EnumValue"].indexOf(e.kind)>-1}function l(e){return["IntValue","FloatValue"].indexOf(e.kind)>-1}function f(e,t,r,n){if(function(e){return"IntValue"===e.kind}(r)||function(e){return"FloatValue"===e.kind}(r))e[t.value]=Number(r.value)
else if(function(e){return"BooleanValue"===e.kind}(r)||function(e){return"StringValue"===e.kind}(r))e[t.value]=r.value
else if(function(e){return"ObjectValue"===e.kind}(r)){var o={}
r.fields.map((function(e){return f(o,e.name,e.value,n)})),e[t.value]=o}else if(function(e){return"Variable"===e.kind}(r)){var a=(n||{})[r.name.value]
e[t.value]=a}else if(function(e){return"ListValue"===e.kind}(r))e[t.value]=r.values.map((function(e){var r={}
return f(r,t,e,n),r[t.value]}))
else if(function(e){return"EnumValue"===e.kind}(r))e[t.value]=r.value
else{if(!function(e){return"NullValue"===e.kind}(r))throw new i.a(17)
e[t.value]=null}}function p(e,t){var r=null
e.directives&&(r={},e.directives.forEach((function(e){r[e.name.value]={},e.arguments&&e.arguments.forEach((function(n){var i=n.name,o=n.value
return f(r[e.name.value],i,o,t)}))})))
var n=null
return e.arguments&&e.arguments.length&&(n={},e.arguments.forEach((function(e){var r=e.name,i=e.value
return f(n,r,i,t)}))),d(e.name.value,n,r)}r.d(t,"isEqual",(function(){return u.a}))
var h=["connection","include","skip","client","rest","export"]
function d(e,t,r){if(r&&r.connection&&r.connection.key){if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[]
n.sort()
var i=t,o={}
return n.forEach((function(e){o[e]=i[e]})),r.connection.key+"("+JSON.stringify(o)+")"}return r.connection.key}var a=e
if(t){var u=s()(t)
a+="("+u+")"}return r&&Object.keys(r).forEach((function(e){-1===h.indexOf(e)&&(r[e]&&Object.keys(r[e]).length?a+="@"+e+"("+JSON.stringify(r[e])+")":a+="@"+e)})),a}function v(e,t){if(e.arguments&&e.arguments.length){var r={}
return e.arguments.forEach((function(e){var n=e.name,i=e.value
return f(r,n,i,t)})),r}return null}function b(e){return e.alias?e.alias.value:e.name.value}function y(e){return"Field"===e.kind}function m(e){return"InlineFragment"===e.kind}function g(e){return e&&"id"===e.type&&"boolean"==typeof e.generated}function O(e,t){return void 0===t&&(t=!1),Object(o.__assign)({type:"id",generated:t},"string"==typeof e?{id:e,typename:void 0}:e)}function j(e){return null!=e&&"object"==typeof e&&"json"===e.type}function _(e){throw new i.a(18)}function w(e,t){switch(void 0===t&&(t=_),e.kind){case"Variable":return t(e)
case"NullValue":return null
case"IntValue":return parseInt(e.value,10)
case"FloatValue":return parseFloat(e.value)
case"ListValue":return e.values.map((function(e){return w(e,t)}))
case"ObjectValue":for(var r={},n=0,i=e.fields;n<i.length;n++){var o=i[n]
r[o.name.value]=w(o.value,t)}return r
default:return e.value}}function S(e,t){if(e.directives&&e.directives.length){var r={}
return e.directives.forEach((function(e){r[e.name.value]=v(e,t)})),r}return null}function k(e,t){return void 0===t&&(t={}),E(e.directives).every((function(e){var r=e.directive,n=e.ifArgument,o=!1
return"Variable"===n.value.kind?(o=t[n.value.name.value],Object(i.b)(void 0!==o,1)):o=n.value.value,"skip"===r.name.value?!o:o}))}function Q(e){var t=[]
return Object(n.c)(e,{Directive:function(e){t.push(e.name.value)}}),t}function x(e,t){return Q(t).some((function(t){return e.indexOf(t)>-1}))}function R(e){return e&&x(["client"],e)&&x(["export"],e)}function q(e){var t=e.name.value
return"skip"===t||"include"===t}function E(e){return e?e.filter(q).map((function(e){var t=e.arguments
e.name.value
Object(i.b)(t&&1===t.length,2)
var r=t[0]
Object(i.b)(r.name&&"if"===r.name.value,3)
var n=r.value
return Object(i.b)(n&&("Variable"===n.kind||"BooleanValue"===n.kind),4),{directive:e,ifArgument:r}})):[]}function D(e,t){var r=t,n=[]
return e.definitions.forEach((function(e){if("OperationDefinition"===e.kind)throw new i.a(5)
"FragmentDefinition"===e.kind&&n.push(e)})),void 0===r&&(Object(i.b)(1===n.length,6),r=n[0].name.value),Object(o.__assign)(Object(o.__assign)({},e),{definitions:Object(o.__spreadArrays)([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],e.definitions)})}function F(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return t.forEach((function(t){null!=t&&Object.keys(t).forEach((function(r){e[r]=t[r]}))})),e}function M(e){I(e)
var t=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))[0]
return Object(i.b)(t,7),t}function I(e){Object(i.b)(e&&"Document"===e.kind,8)
var t=e.definitions.filter((function(e){return"FragmentDefinition"!==e.kind})).map((function(e){if("OperationDefinition"!==e.kind)throw new i.a(9)
return e}))
return Object(i.b)(t.length<=1,10),e}function P(e){return I(e),e.definitions.filter((function(e){return"OperationDefinition"===e.kind}))[0]}function C(e){var t=P(e)
return Object(i.b)(t,11),t}function T(e){return e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&e.name})).map((function(e){return e.name.value}))[0]||null}function V(e){return e.definitions.filter((function(e){return"FragmentDefinition"===e.kind}))}function N(e){var t=P(e)
return Object(i.b)(t&&"query"===t.operation,12),t}function A(e){Object(i.b)("Document"===e.kind,13),Object(i.b)(e.definitions.length<=1,14)
var t=e.definitions[0]
return Object(i.b)("FragmentDefinition"===t.kind,15),t}function L(e){var t
I(e)
for(var r=0,n=e.definitions;r<n.length;r++){var o=n[r]
if("OperationDefinition"===o.kind){var a=o.operation
if("query"===a||"mutation"===a||"subscription"===a)return o}"FragmentDefinition"!==o.kind||t||(t=o)}if(t)return t
throw new i.a(16)}function z(e){void 0===e&&(e=[])
var t={}
return e.forEach((function(e){t[e.name.value]=e})),t}function G(e){if(e&&e.variableDefinitions&&e.variableDefinitions.length){var t=e.variableDefinitions.filter((function(e){return e.defaultValue})).map((function(e){var t=e.variable,r=e.defaultValue,n={}
return f(n,t.name,r),n}))
return F.apply(void 0,Object(o.__spreadArrays)([{}],t))}return{}}function U(e){var t=new Set
if(e.variableDefinitions)for(var r=0,n=e.variableDefinitions;r<n.length;r++){var i=n[r]
t.add(i.variable.name.value)}return t}function B(e,t,r){var n=0
return e.forEach((function(r,i){t.call(this,r,i,e)&&(e[n++]=r)}),r),e.length=n,e}var K={kind:"Field",name:{kind:"Name",value:"__typename"}}
function J(e){return function e(t,r){return t.selectionSet.selections.every((function(t){return"FragmentSpread"===t.kind&&e(r[t.name.value],r)}))}(P(e)||A(e),z(V(e)))?null:e}function W(e){return function(t){return e.some((function(e){return e.name&&e.name===t.name.value||e.test&&e.test(t)}))}}function H(e,t){var r=Object.create(null),i=[],o=Object.create(null),a=[],s=J(Object(n.c)(t,{Variable:{enter:function(e,t,n){"VariableDefinition"!==n.kind&&(r[e.name.value]=!0)}},Field:{enter:function(t){if(e&&t.directives&&(e.some((function(e){return e.remove}))&&t.directives&&t.directives.some(W(e))))return t.arguments&&t.arguments.forEach((function(e){"Variable"===e.value.kind&&i.push({name:e.value.name.value})})),t.selectionSet&&function e(t){var r=[]
return t.selections.forEach((function(t){(y(t)||m(t))&&t.selectionSet?e(t.selectionSet).forEach((function(e){return r.push(e)})):"FragmentSpread"===t.kind&&r.push(t)})),r}(t.selectionSet).forEach((function(e){a.push({name:e.name.value})})),null}},FragmentSpread:{enter:function(e){o[e.name.value]=!0}},Directive:{enter:function(t){if(W(e)(t))return null}}}))
return s&&B(i,(function(e){return!r[e.name]})).length&&(s=re(i,s)),s&&B(a,(function(e){return!o[e.name]})).length&&(s=ne(a,s)),s}function Y(e){return Object(n.c)(I(e),{SelectionSet:{enter:function(e,t,r){if(!r||"OperationDefinition"!==r.kind){var n=e.selections
if(n)if(!n.some((function(e){return y(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))}))){var i=r
if(!(y(i)&&i.directives&&i.directives.some((function(e){return"export"===e.name.value}))))return Object(o.__assign)(Object(o.__assign)({},e),{selections:Object(o.__spreadArrays)(n,[K])})}}}}})}var X={test:function(e){var t="connection"===e.name.value
return t&&(!e.arguments||e.arguments.some((function(e){return"key"===e.name.value}))),t}}
function Z(e){return H([X],I(e))}function $(e,t,r){return void 0===r&&(r=!0),t&&t.selections&&t.selections.some((function(t){return ee(e,t,r)}))}function ee(e,t,r){return void 0===r&&(r=!0),!y(t)||!!t.directives&&(t.directives.some(W(e))||r&&$(e,t.selectionSet,r))}function te(e,t){var r
return I(t),J(Object(n.c)(t,{SelectionSet:{enter:function(t,n,i,a){var s=a.join("-")
if(!r||s===r||!s.startsWith(r)){if(t.selections){var u=t.selections.filter((function(t){return ee(e,t)}))
return $(e,t,!1)&&(r=s),Object(o.__assign)(Object(o.__assign)({},t),{selections:u})}return null}}}}))}function re(e,t){var r=function(e){return function(t){return e.some((function(e){return t.value&&"Variable"===t.value.kind&&t.value.name&&(e.name===t.value.name.value||e.test&&e.test(t))}))}}(e)
return J(Object(n.c)(t,{OperationDefinition:{enter:function(t){return Object(o.__assign)(Object(o.__assign)({},t),{variableDefinitions:t.variableDefinitions.filter((function(t){return!e.some((function(e){return e.name===t.variable.name.value}))}))})}},Field:{enter:function(t){if(e.some((function(e){return e.remove}))){var n=0
if(t.arguments.forEach((function(e){r(e)&&(n+=1)})),1===n)return null}}},Argument:{enter:function(e){if(r(e))return null}}}))}function ne(e,t){function r(t){if(e.some((function(e){return e.name===t.name.value})))return null}return J(Object(n.c)(t,{FragmentSpread:{enter:r},FragmentDefinition:{enter:r}}))}function ie(e){return"query"===L(e).operation?e:Object(n.c)(e,{OperationDefinition:{enter:function(e){return Object(o.__assign)(Object(o.__assign)({},e),{operation:"query"})}}})}function oe(e){I(e)
var t=H([{test:function(e){return"client"===e.name.value},remove:!0}],e)
return t&&(t=Object(n.c)(t,{FragmentDefinition:{enter:function(e){if(e.selectionSet&&e.selectionSet.selections.every((function(e){return y(e)&&"__typename"===e.name.value})))return null}}})),t}var ae="function"==typeof WeakMap&&!("object"==typeof navigator&&"ReactNative"===navigator.product),se=Object.prototype.toString
function ue(e){return function e(t,r){switch(se.call(t)){case"[object Array]":if(r.has(t))return r.get(t)
var n=t.slice(0)
return r.set(t,n),n.forEach((function(t,i){n[i]=e(t,r)})),n
case"[object Object]":if(r.has(t))return r.get(t)
var i=Object.create(Object.getPrototypeOf(t))
return r.set(t,i),Object.keys(t).forEach((function(n){i[n]=e(t[n],r)})),i
default:return t}}(e,new Map)}function ce(){return void 0!==e?"production":"development"}function le(e){return ce()===e}function fe(){return!0===le("production")}function pe(){return!0===le("development")}function he(){return!0===le("test")}function de(e){try{return e()}catch(e){console.error&&console.error(e)}}function ve(e){return e.errors&&e.errors.length}function be(e){if((pe()||he())&&!("function"==typeof Symbol&&"string"==typeof Symbol("")))return function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(r){null===t[r]||"object"!=typeof t[r]&&"function"!=typeof t[r]||Object.isFrozen(t[r])||e(t[r])})),t}(e)
return e}var ye=Object.prototype.hasOwnProperty
function me(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return ge(e)}function ge(e){var t=e[0]||{},r=e.length
if(r>1){var n=[]
t=_e(t,n)
for(var i=1;i<r;++i)t=je(t,e[i],n)}return t}function Oe(e){return null!==e&&"object"==typeof e}function je(e,t,r){return Oe(t)&&Oe(e)?(Object.isExtensible&&!Object.isExtensible(e)&&(e=_e(e,r)),Object.keys(t).forEach((function(n){var i=t[n]
if(ye.call(e,n)){var o=e[n]
i!==o&&(e[n]=je(_e(o,r),i,r))}else e[n]=i})),e):t}function _e(e,t){return null!==e&&"object"==typeof e&&t.indexOf(e)<0&&(e=Array.isArray(e)?e.slice(0):Object(o.__assign)({__proto__:Object.getPrototypeOf(e)},e),t.push(e)),e}var we=Object.create({})
function Se(e,t){void 0===t&&(t="warn"),fe()||we[e]||(he()||(we[e]=!0),"error"===t?console.error(e):console.warn(e))}function ke(e){return JSON.parse(JSON.stringify(e))}}.call(this,r("8oxB"))},SLVX:function(e,t,r){"use strict"
function n(e){var t,r=e.Symbol
return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",(function(){return n}))},b0dj:function(e,t,r){"use strict"
var n=r("ABJ/"),i=r.n(n).a
t.a=i},bCCX:function(e,t,r){"use strict"
r.r(t),function(e,n){var i,o=r("SLVX")
i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n
var a=Object(o.a)(i)
t.default=a}.call(this,r("yLpj"),r("3UD+")(e))},dMq0:function(e,t,r){"use strict"
r.d(t,"a",(function(){return R})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return n}))
var n,i=r("mrSG"),o=r("RRgQ"),a=r("qx2n"),s=r("b0dj"),u=r("1jQf"),c=r("bCCX"),l=r("qVdT"),f=r("L2ys")
function p(e){return e<7}!function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"}(n||(n={}))
var h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(i.__extends)(t,e),t.prototype[c.default]=function(){return this},t.prototype["@@observable"]=function(){return this},t}(s.a)
function d(e){return Array.isArray(e)&&e.length>0}var v,b=function(e){function t(r){var n,i,o=r.graphQLErrors,a=r.networkError,s=r.errorMessage,u=r.extraInfo,c=e.call(this,s)||this
return c.graphQLErrors=o||[],c.networkError=a||null,c.message=s||(i="",d((n=c).graphQLErrors)&&n.graphQLErrors.forEach((function(e){var t=e?e.message:"Error message not found."
i+="GraphQL error: "+t+"\n"})),n.networkError&&(i+="Network error: "+n.networkError.message+"\n"),i=i.replace(/\n$/,"")),c.extraInfo=u,c.__proto__=t.prototype,c}return Object(i.__extends)(t,e),t}(Error)
!function(e){e[e.normal=1]="normal",e[e.refetch=2]="refetch",e[e.poll=3]="poll"}(v||(v={}))
var y=function(e){function t(t){var r=t.queryManager,n=t.options,i=t.shouldSubscribe,a=void 0===i||i,s=e.call(this,(function(e){return s.onSubscribe(e)}))||this
s.observers=new Set,s.subscriptions=new Set,s.isTornDown=!1,s.options=n,s.variables=n.variables||{},s.queryId=r.generateQueryId(),s.shouldSubscribe=a
var u=Object(o.getOperationDefinition)(n.query)
return s.queryName=u&&u.name&&u.name.value,s.queryManager=r,s}return Object(i.__extends)(t,e),t.prototype.result=function(){var e=this
return new Promise((function(t,r){var n={next:function(r){t(r),e.observers.delete(n),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout((function(){i.unsubscribe()}),0)},error:r},i=e.subscribe(n)}))},t.prototype.currentResult=function(){var e=this.getCurrentResult()
return void 0===e.data&&(e.data={}),e},t.prototype.getCurrentResult=function(){if(this.isTornDown){var e=this.lastResult
return{data:!this.lastError&&e&&e.data||void 0,error:this.lastError,loading:!1,networkStatus:n.error}}var t,r,o,a=this.queryManager.getCurrentQueryResult(this),s=a.data,u=a.partial,c=this.queryManager.queryStore.get(this.queryId),l=this.options.fetchPolicy,f="network-only"===l||"no-cache"===l
if(c){var h=c.networkStatus
if(r=c,void 0===(o=this.options.errorPolicy)&&(o="none"),r&&(r.networkError||"none"===o&&d(r.graphQLErrors)))return{data:void 0,loading:!1,networkStatus:h,error:new b({graphQLErrors:c.graphQLErrors,networkError:c.networkError})}
c.variables&&(this.options.variables=Object(i.__assign)(Object(i.__assign)({},this.options.variables),c.variables),this.variables=this.options.variables),t={data:s,loading:p(h),networkStatus:h},c.graphQLErrors&&"all"===this.options.errorPolicy&&(t.errors=c.graphQLErrors)}else{var v=f||u&&"cache-only"!==l
t={data:s,loading:v,networkStatus:v?n.loading:n.ready}}return u||this.updateLastResult(Object(i.__assign)(Object(i.__assign)({},t),{stale:!1})),Object(i.__assign)(Object(i.__assign)({},t),{partial:u})},t.prototype.isDifferentFromLastResult=function(e){var t=this.lastResultSnapshot
return!(t&&e&&t.networkStatus===e.networkStatus&&t.stale===e.stale&&Object(a.a)(t.data,e.data))},t.prototype.getLastResult=function(){return this.lastResult},t.prototype.getLastError=function(){return this.lastError},t.prototype.resetLastResults=function(){delete this.lastResult,delete this.lastResultSnapshot,delete this.lastError,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){var e=this.queryManager.queryStore.get(this.queryId)
e&&(e.networkError=null,e.graphQLErrors=[])},t.prototype.refetch=function(e){var t=this.options.fetchPolicy
return"cache-only"===t?Promise.reject(new l.a(3)):("no-cache"!==t&&"cache-and-network"!==t&&(t="network-only"),Object(a.a)(this.variables,e)||(this.variables=Object(i.__assign)(Object(i.__assign)({},this.variables),e)),Object(a.a)(this.options.variables,this.variables)||(this.options.variables=Object(i.__assign)(Object(i.__assign)({},this.options.variables),this.variables)),this.queryManager.fetchQuery(this.queryId,Object(i.__assign)(Object(i.__assign)({},this.options),{fetchPolicy:t}),v.refetch))},t.prototype.fetchMore=function(e){var t=this
Object(l.b)(e.updateQuery,4)
var r=Object(i.__assign)(Object(i.__assign)({},e.query?e:Object(i.__assign)(Object(i.__assign)(Object(i.__assign)({},this.options),e),{variables:Object(i.__assign)(Object(i.__assign)({},this.variables),e.variables)})),{fetchPolicy:"network-only"}),n=this.queryManager.generateQueryId()
return this.queryManager.fetchQuery(n,r,v.normal,this.queryId).then((function(i){return t.updateQuery((function(t){return e.updateQuery(t,{fetchMoreResult:i.data,variables:r.variables})})),t.queryManager.stopQuery(n),i}),(function(e){throw t.queryManager.stopQuery(n),e}))},t.prototype.subscribeToMore=function(e){var t=this,r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables}).subscribe({next:function(r){var n=e.updateQuery
n&&t.updateQuery((function(e,t){var i=t.variables
return n(e,{subscriptionData:r,variables:i})}))},error:function(t){e.onError&&e.onError(t)}})
return this.subscriptions.add(r),function(){t.subscriptions.delete(r)&&r.unsubscribe()}},t.prototype.setOptions=function(e){var t=this.options.fetchPolicy
this.options=Object(i.__assign)(Object(i.__assign)({},this.options),e),e.pollInterval?this.startPolling(e.pollInterval):0===e.pollInterval&&this.stopPolling()
var r=e.fetchPolicy
return this.setVariables(this.options.variables,t!==r&&("cache-only"===t||"standby"===t||"network-only"===r),e.fetchResults)},t.prototype.setVariables=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!0),this.isTornDown=!1,e=e||this.variables,!t&&Object(a.a)(e,this.variables)?this.observers.size&&r?this.result():Promise.resolve():(this.variables=this.options.variables=e,this.observers.size?this.queryManager.fetchQuery(this.queryId,this.options):Promise.resolve())},t.prototype.updateQuery=function(e){var t=this.queryManager,r=t.getQueryWithPreviousResult(this.queryId),n=r.previousResult,i=r.variables,a=r.document,s=Object(o.tryFunctionOrLogError)((function(){return e(n,{variables:i})}))
s&&(t.dataStore.markUpdateQueryResult(a,i,s),t.broadcastQueries())},t.prototype.stopPolling=function(){this.queryManager.stopPollingQuery(this.queryId),this.options.pollInterval=void 0},t.prototype.startPolling=function(e){O(this),this.options.pollInterval=e,this.queryManager.startPollingQuery(this.options,this.queryId)},t.prototype.updateLastResult=function(e){var t=this.lastResult
return this.lastResult=e,this.lastResultSnapshot=this.queryManager.assumeImmutableResults?e:Object(o.cloneDeep)(e),t},t.prototype.onSubscribe=function(e){var t=this
try{var r=e._subscription._observer
r&&!r.error&&(r.error=m)}catch(e){}var n=!this.observers.size
return this.observers.add(e),e.next&&this.lastResult&&e.next(this.lastResult),e.error&&this.lastError&&e.error(this.lastError),n&&this.setUpQuery(),function(){t.observers.delete(e)&&!t.observers.size&&t.tearDownQuery()}},t.prototype.setUpQuery=function(){var e=this,t=this.queryManager,r=this.queryId
this.shouldSubscribe&&t.addObservableQuery(r,this),this.options.pollInterval&&(O(this),t.startPollingQuery(this.options,r))
var o=function(t){e.updateLastResult(Object(i.__assign)(Object(i.__assign)({},e.lastResult),{errors:t.graphQLErrors,networkStatus:n.error,loading:!1})),g(e.observers,"error",e.lastError=t)}
t.observeQuery(r,this.options,{next:function(r){if(e.lastError||e.isDifferentFromLastResult(r)){var n=e.updateLastResult(r),i=e.options,o=i.query,s=i.variables,u=i.fetchPolicy
t.transform(o).hasClientExports?t.getLocalState().addExportedVariables(o,s).then((function(i){var s=e.variables
e.variables=e.options.variables=i,!r.loading&&n&&"cache-only"!==u&&t.transform(o).serverQuery&&!Object(a.a)(s,i)?e.refetch():g(e.observers,"next",r)})):g(e.observers,"next",r)}},error:o}).catch(o)},t.prototype.tearDownQuery=function(){var e=this.queryManager
this.isTornDown=!0,e.stopPollingQuery(this.queryId),this.subscriptions.forEach((function(e){return e.unsubscribe()})),this.subscriptions.clear(),e.removeObservableQuery(this.queryId),e.stopQuery(this.queryId),this.observers.clear()},t}(h)
function m(e){}function g(e,t,r){var n=[]
e.forEach((function(e){return e[t]&&n.push(e)})),n.forEach((function(e){return e[t](r)}))}function O(e){var t=e.options.fetchPolicy
Object(l.b)("cache-first"!==t&&"cache-only"!==t,5)}var j=function(){function e(){this.store={}}return e.prototype.getStore=function(){return this.store},e.prototype.get=function(e){return this.store[e]},e.prototype.initMutation=function(e,t,r){this.store[e]={mutation:t,variables:r||{},loading:!0,error:null}},e.prototype.markMutationError=function(e,t){var r=this.store[e]
r&&(r.loading=!1,r.error=t)},e.prototype.markMutationResult=function(e){var t=this.store[e]
t&&(t.loading=!1,t.error=null)},e.prototype.reset=function(){this.store={}},e}(),_=function(){function e(){this.store={}}return e.prototype.getStore=function(){return this.store},e.prototype.get=function(e){return this.store[e]},e.prototype.initQuery=function(e){var t=this.store[e.queryId]
Object(l.b)(!t||t.document===e.document||Object(a.a)(t.document,e.document),19)
var r,i=!1,o=null
e.storePreviousVariables&&t&&t.networkStatus!==n.loading&&(Object(a.a)(t.variables,e.variables)||(i=!0,o=t.variables)),r=i?n.setVariables:e.isPoll?n.poll:e.isRefetch?n.refetch:n.loading
var s=[]
t&&t.graphQLErrors&&(s=t.graphQLErrors),this.store[e.queryId]={document:e.document,variables:e.variables,previousVariables:o,networkError:null,graphQLErrors:s,networkStatus:r,metadata:e.metadata},"string"==typeof e.fetchMoreForQueryId&&this.store[e.fetchMoreForQueryId]&&(this.store[e.fetchMoreForQueryId].networkStatus=n.fetchMore)},e.prototype.markQueryResult=function(e,t,r){this.store&&this.store[e]&&(this.store[e].networkError=null,this.store[e].graphQLErrors=d(t.errors)?t.errors:[],this.store[e].previousVariables=null,this.store[e].networkStatus=n.ready,"string"==typeof r&&this.store[r]&&(this.store[r].networkStatus=n.ready))},e.prototype.markQueryError=function(e,t,r){this.store&&this.store[e]&&(this.store[e].networkError=t,this.store[e].networkStatus=n.error,"string"==typeof r&&this.markQueryResultClient(r,!0))},e.prototype.markQueryResultClient=function(e,t){var r=this.store&&this.store[e]
r&&(r.networkError=null,r.previousVariables=null,t&&(r.networkStatus=n.ready))},e.prototype.stopQuery=function(e){delete this.store[e]},e.prototype.reset=function(e){var t=this
Object.keys(this.store).forEach((function(r){e.indexOf(r)<0?t.stopQuery(r):t.store[r].networkStatus=n.loading}))},e}()
var w=function(){function e(e){var t=e.cache,r=e.client,n=e.resolvers,i=e.fragmentMatcher
this.cache=t,r&&(this.client=r),n&&this.addResolvers(n),i&&this.setFragmentMatcher(i)}return e.prototype.addResolvers=function(e){var t=this
this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach((function(e){t.resolvers=Object(o.mergeDeep)(t.resolvers,e)})):this.resolvers=Object(o.mergeDeep)(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){var t=e.document,r=e.remoteResult,n=e.context,o=e.variables,a=e.onlyRunForcedResolvers,s=void 0!==a&&a
return Object(i.__awaiter)(this,void 0,void 0,(function(){return Object(i.__generator)(this,(function(e){return t?[2,this.resolveDocument(t,r.data,n,o,this.fragmentMatcher,s).then((function(e){return Object(i.__assign)(Object(i.__assign)({},r),{data:e.result})}))]:[2,r]}))}))},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return Object(o.hasDirectives)(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return this.resolvers?Object(o.removeClientSetsFromDocument)(e):e},e.prototype.prepareContext=function(e){void 0===e&&(e={})
var t=this.cache
return Object(i.__assign)(Object(i.__assign)({},e),{cache:t,getCacheKey:function(e){if(t.config)return t.config.dataIdFromObject(e)
Object(l.b)(!1,6)}})},e.prototype.addExportedVariables=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),Object(i.__awaiter)(this,void 0,void 0,(function(){return Object(i.__generator)(this,(function(n){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(r),t).then((function(e){return Object(i.__assign)(Object(i.__assign)({},t),e.exportedVariables)}))]:[2,Object(i.__assign)({},t)]}))}))},e.prototype.shouldForceResolvers=function(e){var t=!1
return Object(f.c)(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some((function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value}))))return f.a}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:Object(o.buildQueryFromSelectionSet)(e),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t,r,n,a,s){return void 0===r&&(r={}),void 0===n&&(n={}),void 0===a&&(a=function(){return!0}),void 0===s&&(s=!1),Object(i.__awaiter)(this,void 0,void 0,(function(){var u,c,l,f,p,h,d,v,b
return Object(i.__generator)(this,(function(y){var m
return u=Object(o.getMainDefinition)(e),c=Object(o.getFragmentDefinitions)(e),l=Object(o.createFragmentMap)(c),f=u.operation,p=f?(m=f).charAt(0).toUpperCase()+m.slice(1):"Query",d=(h=this).cache,v=h.client,b={fragmentMap:l,context:Object(i.__assign)(Object(i.__assign)({},r),{cache:d,client:v}),variables:n,fragmentMatcher:a,defaultOperationType:p,exportedVariables:{},onlyRunForcedResolvers:s},[2,this.resolveSelectionSet(u.selectionSet,t,b).then((function(e){return{result:e,exportedVariables:b.exportedVariables}}))]}))}))},e.prototype.resolveSelectionSet=function(e,t,r){return Object(i.__awaiter)(this,void 0,void 0,(function(){var n,a,s,u,c,f=this
return Object(i.__generator)(this,(function(p){return n=r.fragmentMap,a=r.context,s=r.variables,u=[t],c=function(e){return Object(i.__awaiter)(f,void 0,void 0,(function(){var c,f
return Object(i.__generator)(this,(function(i){return Object(o.shouldInclude)(e,s)?Object(o.isField)(e)?[2,this.resolveField(e,t,r).then((function(t){var r
void 0!==t&&u.push(((r={})[Object(o.resultKeyNameFromField)(e)]=t,r))}))]:(Object(o.isInlineFragment)(e)?c=e:(c=n[e.name.value],Object(l.b)(c,7)),c&&c.typeCondition&&(f=c.typeCondition.name.value,r.fragmentMatcher(t,f,a))?[2,this.resolveSelectionSet(c.selectionSet,t,r).then((function(e){u.push(e)}))]:[2]):[2]}))}))},[2,Promise.all(e.selections.map(c)).then((function(){return Object(o.mergeDeepArray)(u)}))]}))}))},e.prototype.resolveField=function(e,t,r){return Object(i.__awaiter)(this,void 0,void 0,(function(){var n,a,s,u,c,l,f,p,h,d=this
return Object(i.__generator)(this,(function(i){return n=r.variables,a=e.name.value,s=Object(o.resultKeyNameFromField)(e),u=a!==s,c=t[s]||t[a],l=Promise.resolve(c),r.onlyRunForcedResolvers&&!this.shouldForceResolvers(e)||(f=t.__typename||r.defaultOperationType,(p=this.resolvers&&this.resolvers[f])&&(h=p[u?a:s])&&(l=Promise.resolve(h(t,Object(o.argumentsObjectFromField)(e,n),r.context,{field:e,fragmentMap:r.fragmentMap})))),[2,l.then((function(t){return void 0===t&&(t=c),e.directives&&e.directives.forEach((function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach((function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(r.exportedVariables[e.value.value]=t)}))})),e.selectionSet?null==t?t:Array.isArray(t)?d.resolveSubSelectedArray(e,t,r):e.selectionSet?d.resolveSelectionSet(e.selectionSet,t,r):void 0:t}))]}))}))},e.prototype.resolveSubSelectedArray=function(e,t,r){var n=this
return Promise.all(t.map((function(t){return null===t?null:Array.isArray(t)?n.resolveSubSelectedArray(e,t,r):e.selectionSet?n.resolveSelectionSet(e.selectionSet,t,r):void 0})))},e}()
function S(e){var t=new Set,r=null
return new h((function(n){return t.add(n),r=r||e.subscribe({next:function(e){t.forEach((function(t){return t.next&&t.next(e)}))},error:function(e){t.forEach((function(t){return t.error&&t.error(e)}))},complete:function(){t.forEach((function(e){return e.complete&&e.complete()}))}}),function(){t.delete(n)&&!t.size&&r&&(r.unsubscribe(),r=null)}}))}var k=Object.prototype.hasOwnProperty,Q=function(){function e(e){var t=e.link,r=e.queryDeduplication,n=void 0!==r&&r,i=e.store,a=e.onBroadcast,s=void 0===a?function(){}:a,u=e.ssrMode,c=void 0!==u&&u,l=e.clientAwareness,f=void 0===l?{}:l,p=e.localState,h=e.assumeImmutableResults
this.mutationStore=new j,this.queryStore=new _,this.clientAwareness={},this.idCounter=1,this.queries=new Map,this.fetchQueryRejectFns=new Map,this.transformCache=new(o.canUseWeakMap?WeakMap:Map),this.inFlightLinkObservables=new Map,this.pollingInfoByQueryId=new Map,this.link=t,this.queryDeduplication=n,this.dataStore=i,this.onBroadcast=s,this.clientAwareness=f,this.localState=p||new w({cache:i.getCache()}),this.ssrMode=c,this.assumeImmutableResults=!!h}return e.prototype.stop=function(){var e=this
this.queries.forEach((function(t,r){e.stopQueryNoBroadcast(r)})),this.fetchQueryRejectFns.forEach((function(e){e(new l.a(8))}))},e.prototype.mutate=function(e){var t=e.mutation,r=e.variables,n=e.optimisticResponse,a=e.updateQueries,s=e.refetchQueries,u=void 0===s?[]:s,c=e.awaitRefetchQueries,f=void 0!==c&&c,p=e.update,h=e.errorPolicy,v=void 0===h?"none":h,y=e.fetchPolicy,m=e.context,g=void 0===m?{}:m
return Object(i.__awaiter)(this,void 0,void 0,(function(){var e,s,c,h=this
return Object(i.__generator)(this,(function(m){switch(m.label){case 0:return Object(l.b)(t,9),Object(l.b)(!y||"no-cache"===y,10),e=this.generateQueryId(),t=this.transform(t).document,this.setQuery(e,(function(){return{document:t}})),r=this.getVariables(t,r),this.transform(t).hasClientExports?[4,this.localState.addExportedVariables(t,r,g)]:[3,2]
case 1:r=m.sent(),m.label=2
case 2:return s=function(){var e={}
return a&&h.queries.forEach((function(t,r){var n=t.observableQuery
if(n){var i=n.queryName
i&&k.call(a,i)&&(e[r]={updater:a[i],query:h.queryStore.get(r)})}})),e},this.mutationStore.initMutation(e,t,r),this.dataStore.markMutationInit({mutationId:e,document:t,variables:r,updateQueries:s(),update:p,optimisticResponse:n}),this.broadcastQueries(),c=this,[2,new Promise((function(a,l){var h,m
c.getObservableFromLink(t,Object(i.__assign)(Object(i.__assign)({},g),{optimisticResponse:n}),r,!1).subscribe({next:function(n){Object(o.graphQLResultHasError)(n)&&"none"===v?m=new b({graphQLErrors:n.errors}):(c.mutationStore.markMutationResult(e),"no-cache"!==y&&c.dataStore.markMutationResult({mutationId:e,result:n,document:t,variables:r,updateQueries:s(),update:p}),h=n)},error:function(t){c.mutationStore.markMutationError(e,t),c.dataStore.markMutationComplete({mutationId:e,optimisticResponse:n}),c.broadcastQueries(),c.setQuery(e,(function(){return{document:null}})),l(new b({networkError:t}))},complete:function(){if(m&&c.mutationStore.markMutationError(e,m),c.dataStore.markMutationComplete({mutationId:e,optimisticResponse:n}),c.broadcastQueries(),m)l(m)
else{"function"==typeof u&&(u=u(h))
var t=[]
d(u)&&u.forEach((function(e){if("string"==typeof e)c.queries.forEach((function(r){var n=r.observableQuery
n&&n.queryName===e&&t.push(n.refetch())}))
else{var r={query:e.query,variables:e.variables,fetchPolicy:"network-only"}
e.context&&(r.context=e.context),t.push(c.query(r))}})),Promise.all(f?t:[]).then((function(){c.setQuery(e,(function(){return{document:null}})),"ignore"===v&&h&&Object(o.graphQLResultHasError)(h)&&delete h.errors,a(h)}))}}})}))]}}))}))},e.prototype.fetchQuery=function(e,t,r,n){return Object(i.__awaiter)(this,void 0,void 0,(function(){var a,s,u,c,l,f,p,h,d,y,m,g,O,j,_,w,S,k,Q=this
return Object(i.__generator)(this,(function(x){switch(x.label){case 0:return a=t.metadata,s=void 0===a?null:a,u=t.fetchPolicy,c=void 0===u?"cache-first":u,l=t.context,f=void 0===l?{}:l,p=this.transform(t.query).document,h=this.getVariables(p,t.variables),this.transform(p).hasClientExports?[4,this.localState.addExportedVariables(p,h,f)]:[3,2]
case 1:h=x.sent(),x.label=2
case 2:if(t=Object(i.__assign)(Object(i.__assign)({},t),{variables:h}),m=y="network-only"===c||"no-cache"===c,y||(g=this.dataStore.getCache().diff({query:p,variables:h,returnPartialData:!0,optimistic:!1}),O=g.complete,j=g.result,m=!O||"cache-and-network"===c,d=j),_=m&&"cache-only"!==c&&"standby"!==c,Object(o.hasDirectives)(["live"],p)&&(_=!0),w=this.idCounter++,S="no-cache"!==c?this.updateQueryWatch(e,p,t):void 0,this.setQuery(e,(function(){return{document:p,lastRequestId:w,invalidated:!0,cancel:S}})),this.invalidate(n),this.queryStore.initQuery({queryId:e,document:p,storePreviousVariables:_,variables:h,isPoll:r===v.poll,isRefetch:r===v.refetch,metadata:s,fetchMoreForQueryId:n}),this.broadcastQueries(),_){if(k=this.fetchRequest({requestId:w,queryId:e,document:p,options:t,fetchMoreForQueryId:n}).catch((function(t){throw t.hasOwnProperty("graphQLErrors")?t:(w>=Q.getQuery(e).lastRequestId&&(Q.queryStore.markQueryError(e,t,n),Q.invalidate(e),Q.invalidate(n),Q.broadcastQueries()),new b({networkError:t}))})),"cache-and-network"!==c)return[2,k]
k.catch((function(){}))}return this.queryStore.markQueryResultClient(e,!_),this.invalidate(e),this.invalidate(n),this.transform(p).hasForcedResolvers?[2,this.localState.runResolvers({document:p,remoteResult:{data:d},context:f,variables:h,onlyRunForcedResolvers:!0}).then((function(r){return Q.markQueryResult(e,r,t,n),Q.broadcastQueries(),r}))]:(this.broadcastQueries(),[2,{data:d}])}}))}))},e.prototype.markQueryResult=function(e,t,r,n){var i=r.fetchPolicy,o=r.variables,a=r.errorPolicy
"no-cache"===i?this.setQuery(e,(function(){return{newData:{result:t.data,complete:!0}}})):this.dataStore.markQueryResult(t,this.getQuery(e).document,o,n,"ignore"===a||"all"===a)},e.prototype.queryListenerForObserver=function(e,t,r){var n=this
function i(e,t){if(r[e])try{r[e](t)}catch(e){}}return function(r,o){if(n.invalidate(e,!1),r){var a=n.getQuery(e),s=a.observableQuery,u=a.document,c=s?s.options.fetchPolicy:t.fetchPolicy
if("standby"!==c){var l=p(r.networkStatus),f=s&&s.getLastResult(),h=!(!f||f.networkStatus===r.networkStatus),v=t.returnPartialData||!o&&r.previousVariables||h&&t.notifyOnNetworkStatusChange||"cache-only"===c||"cache-and-network"===c
if(!l||v){var y=d(r.graphQLErrors),m=s&&s.options.errorPolicy||t.errorPolicy||"none"
if("none"===m&&y||r.networkError)return i("error",new b({graphQLErrors:r.graphQLErrors,networkError:r.networkError}))
try{var g=void 0,O=void 0
if(o)"no-cache"!==c&&"network-only"!==c&&n.setQuery(e,(function(){return{newData:null}})),g=o.result,O=!o.complete
else{var j=s&&s.getLastError(),_="none"!==m&&(j&&j.graphQLErrors)!==r.graphQLErrors
if(f&&f.data&&!_)g=f.data,O=!1
else{var w=n.dataStore.getCache().diff({query:u,variables:r.previousVariables||r.variables,returnPartialData:!0,optimistic:!0})
g=w.result,O=!w.complete}}var S=O&&!(t.returnPartialData||"cache-only"===c),k={data:S?f&&f.data:g,loading:l,networkStatus:r.networkStatus,stale:S}
"all"===m&&y&&(k.errors=r.graphQLErrors),i("next",k)}catch(e){i("error",new b({networkError:e}))}}}}}},e.prototype.transform=function(e){var t=this.transformCache
if(!t.has(e)){var r=this.dataStore.getCache(),n=r.transformDocument(e),i=Object(o.removeConnectionDirectiveFromDocument)(r.transformForLink(n)),a=this.localState.clientQuery(n),s=this.localState.serverQuery(i),u={document:n,hasClientExports:Object(o.hasClientExports)(n),hasForcedResolvers:this.localState.shouldForceResolvers(n),clientQuery:a,serverQuery:s,defaultVars:Object(o.getDefaultValues)(Object(o.getOperationDefinition)(n))},c=function(e){e&&!t.has(e)&&t.set(e,u)}
c(e),c(n),c(a),c(s)}return t.get(e)},e.prototype.getVariables=function(e,t){return Object(i.__assign)(Object(i.__assign)({},this.transform(e).defaultVars),t)},e.prototype.watchQuery=function(e,t){void 0===t&&(t=!0),Object(l.b)("standby"!==e.fetchPolicy,11),e.variables=this.getVariables(e.query,e.variables),void 0===e.notifyOnNetworkStatusChange&&(e.notifyOnNetworkStatusChange=!1)
var r=Object(i.__assign)({},e)
return new y({queryManager:this,options:r,shouldSubscribe:t})},e.prototype.query=function(e){var t=this
return Object(l.b)(e.query,12),Object(l.b)("Document"===e.query.kind,13),Object(l.b)(!e.returnPartialData,14),Object(l.b)(!e.pollInterval,15),new Promise((function(r,n){var i=t.watchQuery(e,!1)
t.fetchQueryRejectFns.set("query:"+i.queryId,n),i.result().then(r,n).then((function(){return t.fetchQueryRejectFns.delete("query:"+i.queryId)}))}))},e.prototype.generateQueryId=function(){return String(this.idCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){this.stopPollingQuery(e),this.queryStore.stopQuery(e),this.invalidate(e)},e.prototype.addQueryListener=function(e,t){this.setQuery(e,(function(e){return e.listeners.add(t),{invalidated:!1}}))},e.prototype.updateQueryWatch=function(e,t,r){var n=this,i=this.getQuery(e).cancel
i&&i()
return this.dataStore.getCache().watch({query:t,variables:r.variables,optimistic:!0,previousResult:function(){var t=null,r=n.getQuery(e).observableQuery
if(r){var i=r.getLastResult()
i&&(t=i.data)}return t},callback:function(t){n.setQuery(e,(function(){return{invalidated:!0,newData:t}}))}})},e.prototype.addObservableQuery=function(e,t){this.setQuery(e,(function(){return{observableQuery:t}}))},e.prototype.removeObservableQuery=function(e){var t=this.getQuery(e).cancel
this.setQuery(e,(function(){return{observableQuery:null}})),t&&t()},e.prototype.clearStore=function(){this.fetchQueryRejectFns.forEach((function(e){e(new l.a(16))}))
var e=[]
return this.queries.forEach((function(t,r){t.observableQuery&&e.push(r)})),this.queryStore.reset(e),this.mutationStore.reset(),this.dataStore.reset()},e.prototype.resetStore=function(){var e=this
return this.clearStore().then((function(){return e.reFetchObservableQueries()}))},e.prototype.reFetchObservableQueries=function(e){var t=this
void 0===e&&(e=!1)
var r=[]
return this.queries.forEach((function(n,i){var o=n.observableQuery
if(o){var a=o.options.fetchPolicy
o.resetLastResults(),"cache-only"===a||!e&&"standby"===a||r.push(o.refetch()),t.setQuery(i,(function(){return{newData:null}})),t.invalidate(i)}})),this.broadcastQueries(),Promise.all(r)},e.prototype.observeQuery=function(e,t,r){return this.addQueryListener(e,this.queryListenerForObserver(e,t,r)),this.fetchQuery(e,t)},e.prototype.startQuery=function(e,t,r){return this.addQueryListener(e,r),this.fetchQuery(e,t).catch((function(){})),e},e.prototype.startGraphQLSubscription=function(e){var t=this,r=e.query,n=e.fetchPolicy,i=e.variables
r=this.transform(r).document,i=this.getVariables(r,i)
var a=function(e){return t.getObservableFromLink(r,{},e,!1).map((function(i){if(n&&"no-cache"===n||(t.dataStore.markSubscriptionResult(i,r,e),t.broadcastQueries()),Object(o.graphQLResultHasError)(i))throw new b({graphQLErrors:i.errors})
return i}))}
if(this.transform(r).hasClientExports){var s=this.localState.addExportedVariables(r,i).then(a)
return new h((function(e){var t=null
return s.then((function(r){return t=r.subscribe(e)}),e.error),function(){return t&&t.unsubscribe()}}))}return a(i)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){this.fetchQueryRejectFns.delete("query:"+e),this.fetchQueryRejectFns.delete("fetchRequest:"+e),this.getQuery(e).subscriptions.forEach((function(e){return e.unsubscribe()})),this.queries.delete(e)},e.prototype.getCurrentQueryResult=function(e,t){void 0===t&&(t=!0)
var r=e.options,n=r.variables,i=r.query,o=r.fetchPolicy,a=r.returnPartialData,s=e.getLastResult(),u=this.getQuery(e.queryId).newData
if(u&&u.complete)return{data:u.result,partial:!1}
if("no-cache"===o||"network-only"===o)return{data:void 0,partial:!1}
var c=this.dataStore.getCache().diff({query:i,variables:n,previousResult:s?s.data:void 0,returnPartialData:!0,optimistic:t}),l=c.result,f=c.complete
return{data:f||a?l:void 0,partial:!f}},e.prototype.getQueryWithPreviousResult=function(e){var t
if("string"==typeof e){var r=this.getQuery(e).observableQuery
Object(l.b)(r,17),t=r}else t=e
var n=t.options,i=n.variables,o=n.query
return{previousResult:this.getCurrentQueryResult(t,!1).data,variables:i,document:o}},e.prototype.broadcastQueries=function(){var e=this
this.onBroadcast(),this.queries.forEach((function(t,r){t.invalidated&&t.listeners.forEach((function(n){n&&n(e.queryStore.get(r),t.newData)}))}))},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,r,n){var a,s=this
void 0===n&&(n=this.queryDeduplication)
var c=this.transform(e).serverQuery
if(c){var l=this.inFlightLinkObservables,f=this.link,p={query:c,variables:r,operationName:Object(o.getOperationName)(c)||void 0,context:this.prepareContext(Object(i.__assign)(Object(i.__assign)({},t),{forceFetch:!n}))}
if(t=p.context,n){var d=l.get(c)||new Map
l.set(c,d)
var v=JSON.stringify(r)
if(!(a=d.get(v))){d.set(v,a=S(Object(u.b)(f,p)))
var b=function(){d.delete(v),d.size||l.delete(c),y.unsubscribe()},y=a.subscribe({next:b,error:b,complete:b})}}else a=S(Object(u.b)(f,p))}else a=h.of({data:{}}),t=this.prepareContext(t)
var m=this.transform(e).clientQuery
return m&&(a=function(e,t){return new h((function(r){var n=r.next,i=r.error,o=r.complete,a=0,s=!1,u={next:function(e){++a,new Promise((function(r){r(t(e))})).then((function(e){--a,n&&n.call(r,e),s&&u.complete()}),(function(e){--a,i&&i.call(r,e)}))},error:function(e){i&&i.call(r,e)},complete:function(){s=!0,a||o&&o.call(r)}},c=e.subscribe(u)
return function(){return c.unsubscribe()}}))}(a,(function(e){return s.localState.runResolvers({document:m,remoteResult:e,context:t,variables:r})}))),a},e.prototype.fetchRequest=function(e){var t,r,i=this,o=e.requestId,a=e.queryId,s=e.document,u=e.options,c=e.fetchMoreForQueryId,l=u.variables,f=u.errorPolicy,p=void 0===f?"none":f,h=u.fetchPolicy
return new Promise((function(e,f){var v=i.getObservableFromLink(s,u.context,l),y="fetchRequest:"+a
i.fetchQueryRejectFns.set(y,f)
var m=function(){i.fetchQueryRejectFns.delete(y),i.setQuery(a,(function(e){e.subscriptions.delete(g)}))},g=v.map((function(e){if(o>=i.getQuery(a).lastRequestId&&(i.markQueryResult(a,e,u,c),i.queryStore.markQueryResult(a,e,c),i.invalidate(a),i.invalidate(c),i.broadcastQueries()),"none"===p&&d(e.errors))return f(new b({graphQLErrors:e.errors}))
if("all"===p&&(r=e.errors),c||"no-cache"===h)t=e.data
else{var n=i.dataStore.getCache().diff({variables:l,query:s,optimistic:!1,returnPartialData:!0}),v=n.result;(n.complete||u.returnPartialData)&&(t=v)}})).subscribe({error:function(e){m(),f(e)},complete:function(){m(),e({data:t,errors:r,loading:!1,networkStatus:n.ready,stale:!1})}})
i.setQuery(a,(function(e){e.subscriptions.add(g)}))}))},e.prototype.getQuery=function(e){return this.queries.get(e)||{listeners:new Set,invalidated:!1,document:null,newData:null,lastRequestId:1,observableQuery:null,subscriptions:new Set}},e.prototype.setQuery=function(e,t){var r=this.getQuery(e),n=Object(i.__assign)(Object(i.__assign)({},r),t(r))
this.queries.set(e,n)},e.prototype.invalidate=function(e,t){void 0===t&&(t=!0),e&&this.setQuery(e,(function(){return{invalidated:t}}))},e.prototype.prepareContext=function(e){void 0===e&&(e={})
var t=this.localState.prepareContext(e)
return Object(i.__assign)(Object(i.__assign)({},t),{clientAwareness:this.clientAwareness})},e.prototype.checkInFlight=function(e){var t=this.queryStore.get(e)
return t&&t.networkStatus!==n.ready&&t.networkStatus!==n.error},e.prototype.startPollingQuery=function(e,t,r){var n=this,o=e.pollInterval
if(Object(l.b)(o,18),!this.ssrMode){var a=this.pollingInfoByQueryId.get(t)
a||this.pollingInfoByQueryId.set(t,a={}),a.interval=o,a.options=Object(i.__assign)(Object(i.__assign)({},e),{fetchPolicy:"network-only"})
var s=function(){var e=n.pollingInfoByQueryId.get(t)
e&&(n.checkInFlight(t)?u():n.fetchQuery(t,e.options,v.poll).then(u,u))},u=function(){var e=n.pollingInfoByQueryId.get(t)
e&&(clearTimeout(e.timeout),e.timeout=setTimeout(s,e.interval))}
r&&this.addQueryListener(t,r),u()}return t},e.prototype.stopPollingQuery=function(e){this.pollingInfoByQueryId.delete(e)},e}(),x=function(){function e(e){this.cache=e}return e.prototype.getCache=function(){return this.cache},e.prototype.markQueryResult=function(e,t,r,n,i){void 0===i&&(i=!1)
var a=!Object(o.graphQLResultHasError)(e)
i&&Object(o.graphQLResultHasError)(e)&&e.data&&(a=!0),!n&&a&&this.cache.write({result:e.data,dataId:"ROOT_QUERY",query:t,variables:r})},e.prototype.markSubscriptionResult=function(e,t,r){Object(o.graphQLResultHasError)(e)||this.cache.write({result:e.data,dataId:"ROOT_SUBSCRIPTION",query:t,variables:r})},e.prototype.markMutationInit=function(e){var t,r=this
e.optimisticResponse&&(t="function"==typeof e.optimisticResponse?e.optimisticResponse(e.variables):e.optimisticResponse,this.cache.recordOptimisticTransaction((function(n){var i=r.cache
r.cache=n
try{r.markMutationResult({mutationId:e.mutationId,result:{data:t},document:e.document,variables:e.variables,updateQueries:e.updateQueries,update:e.update})}finally{r.cache=i}}),e.mutationId))},e.prototype.markMutationResult=function(e){var t=this
if(!Object(o.graphQLResultHasError)(e.result)){var r=[{result:e.result.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables}],n=e.updateQueries
n&&Object.keys(n).forEach((function(i){var a=n[i],s=a.query,u=a.updater,c=t.cache.diff({query:s.document,variables:s.variables,returnPartialData:!0,optimistic:!1}),l=c.result
if(c.complete){var f=Object(o.tryFunctionOrLogError)((function(){return u(l,{mutationResult:e.result,queryName:Object(o.getOperationName)(s.document)||void 0,queryVariables:s.variables})}))
f&&r.push({result:f,dataId:"ROOT_QUERY",query:s.document,variables:s.variables})}})),this.cache.performTransaction((function(t){r.forEach((function(e){return t.write(e)}))
var n=e.update
n&&Object(o.tryFunctionOrLogError)((function(){return n(t,e.result)}))}))}},e.prototype.markMutationComplete=function(e){var t=e.mutationId
e.optimisticResponse&&this.cache.removeOptimistic(t)},e.prototype.markUpdateQueryResult=function(e,t,r){this.cache.write({result:r,dataId:"ROOT_QUERY",variables:t,query:e})},e.prototype.reset=function(){return this.cache.reset()},e}(),R=function(){function e(e){var t=this
this.defaultOptions={},this.resetStoreCallbacks=[],this.clearStoreCallbacks=[]
var r=e.cache,n=e.ssrMode,i=void 0!==n&&n,o=e.ssrForceFetchDelay,a=void 0===o?0:o,s=e.connectToDevTools,c=e.queryDeduplication,f=void 0===c||c,p=e.defaultOptions,h=e.assumeImmutableResults,d=void 0!==h&&h,v=e.resolvers,b=e.typeDefs,y=e.fragmentMatcher,m=e.name,g=e.version,O=e.link
if(!O&&v&&(O=u.a.empty()),!O||!r)throw new l.a(1)
this.link=O,this.cache=r,this.store=new x(r),this.disableNetworkFetches=i||a>0,this.queryDeduplication=f,this.defaultOptions=p||{},this.typeDefs=b,a&&setTimeout((function(){return t.disableNetworkFetches=!1}),a),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this)
void 0!==s&&(s&&"undefined"!=typeof window)&&(window.__APOLLO_CLIENT__=this),this.version="2.6.8",this.localState=new w({cache:r,client:this,resolvers:v,fragmentMatcher:y}),this.queryManager=new Q({link:this.link,store:this.store,queryDeduplication:f,ssrMode:i,clientAwareness:{name:m,version:g},localState:this.localState,assumeImmutableResults:d,onBroadcast:function(){t.devToolsHookCb&&t.devToolsHookCb({action:{},state:{queries:t.queryManager.queryStore.getStore(),mutations:t.queryManager.mutationStore.getStore()},dataWithOptimisticResults:t.cache.extract(!0)})}})}return e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=Object(i.__assign)(Object(i.__assign)({},this.defaultOptions.watchQuery),e)),!this.disableNetworkFetches||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e=Object(i.__assign)(Object(i.__assign)({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=Object(i.__assign)(Object(i.__assign)({},this.defaultOptions.query),e)),Object(l.b)("cache-and-network"!==e.fetchPolicy,2),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=Object(i.__assign)(Object(i.__assign)({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=Object(i.__assign)(Object(i.__assign)({},this.defaultOptions.mutate),e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){var t=this.cache.writeQuery(e)
return this.queryManager.broadcastQueries(),t},e.prototype.writeFragment=function(e){var t=this.cache.writeFragment(e)
return this.queryManager.broadcastQueries(),t},e.prototype.writeData=function(e){var t=this.cache.writeData(e)
return this.queryManager.broadcastQueries(),t},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return Object(u.b)(this.link,e)},e.prototype.initQueryManager=function(){return this.queryManager},e.prototype.resetStore=function(){var e=this
return Promise.resolve().then((function(){return e.queryManager.clearStore()})).then((function(){return Promise.all(e.resetStoreCallbacks.map((function(e){return e()})))})).then((function(){return e.reFetchObservableQueries()}))},e.prototype.clearStore=function(){var e=this
return Promise.resolve().then((function(){return e.queryManager.clearStore()})).then((function(){return Promise.all(e.clearStoreCallbacks.map((function(e){return e()})))}))},e.prototype.onResetStore=function(e){var t=this
return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.onClearStore=function(e){var t=this
return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e}()},ecBK:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r("mrSG"),i=r("RRgQ"),o=r("K9jn")
function a(e,t,r){return n.__awaiter(this,void 0,void 0,(function(){var u,c,l,f,p,h=this
return n.__generator(this,(function(d){switch(d.label){case 0:return u=r.fragmentMap,c=r.contextValue,l=r.variableValues,f={},p=function(e){return n.__awaiter(h,void 0,void 0,(function(){var p,h,d,v,b
return n.__generator(this,(function(n){switch(n.label){case 0:return i.shouldInclude(e,l)?i.isField(e)?[4,s(e,t,r)]:[3,2]:[2]
case 1:return p=n.sent(),h=i.resultKeyNameFromField(e),void 0!==p&&(void 0===f[h]?f[h]=p:o.merge(f[h],p)),[2]
case 2:if(i.isInlineFragment(e))d=e
else if(!(d=u[e.name.value]))throw new Error("No fragment named "+e.name.value)
return v=d.typeCondition.name.value,r.fragmentMatcher(t,v,c)?[4,a(d.selectionSet,t,r)]:[3,4]
case 3:b=n.sent(),o.merge(f,b),n.label=4
case 4:return[2]}}))}))},[4,Promise.all(e.selections.map(p))]
case 1:return d.sent(),r.resultMapper?[2,r.resultMapper(f,t)]:[2,f]}}))}))}function s(e,t,r){return n.__awaiter(this,void 0,void 0,(function(){var o,s,c,l,f,p,h
return n.__generator(this,(function(n){switch(n.label){case 0:return o=r.variableValues,s=r.contextValue,c=r.resolver,l=e.name.value,f=i.argumentsObjectFromField(e,o),p={isLeaf:!e.selectionSet,resultKey:i.resultKeyNameFromField(e),directives:i.getDirectiveInfoFromField(e,o),field:e},[4,c(l,t,f,s,p)]
case 1:return h=n.sent(),e.selectionSet?null==h?[2,h]:Array.isArray(h)?[2,u(e,h,r)]:[2,a(e.selectionSet,h,r)]:[2,h]}}))}))}function u(e,t,r){return Promise.all(t.map((function(t){return null===t?null:Array.isArray(t)?u(e,t,r):a(e.selectionSet,t,r)})))}t.graphql=function(e,t,r,n,o,s){void 0===s&&(s={})
var u=i.getMainDefinition(t),c=i.getFragmentDefinitions(t),l={fragmentMap:i.createFragmentMap(c),contextValue:n,variableValues:o,resultMapper:s.resultMapper,resolver:e,fragmentMatcher:s.fragmentMatcher||function(){return!0}}
return a(u.selectionSet,r,l)}},h4VS:function(e,t,r){"use strict"
function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}r.d(t,"a",(function(){return n}))},lTCR:function(e,t,r){var n=r("EMzn").parse
function i(e){return e.replace(/[\s,]+/g," ").trim()}var o={},a={}
var s=!0
var u=!1
function c(e){var t=i(e)
if(o[t])return o[t]
var r=n(e,{experimentalFragmentVariables:u})
if(!r||"Document"!==r.kind)throw new Error("Not a valid GraphQL document.")
return r=function e(t,r){var n=Object.prototype.toString.call(t)
if("[object Array]"===n)return t.map((function(t){return e(t,r)}))
if("[object Object]"!==n)throw new Error("Unexpected input.")
r&&t.loc&&delete t.loc,t.loc&&(delete t.loc.startToken,delete t.loc.endToken)
var i,o,a,s=Object.keys(t)
for(i in s)s.hasOwnProperty(i)&&(o=t[s[i]],"[object Object]"!==(a=Object.prototype.toString.call(o))&&"[object Array]"!==a||(t[s[i]]=e(o,!0)))
return t}(r=function(e){for(var t,r={},n=[],o=0;o<e.definitions.length;o++){var u=e.definitions[o]
if("FragmentDefinition"===u.kind){var c=u.name.value,l=i((t=u.loc).source.body.substring(t.start,t.end))
a.hasOwnProperty(c)&&!a[c][l]?(s&&console.warn("Warning: fragment with name "+c+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"),a[c][l]=!0):a.hasOwnProperty(c)||(a[c]={},a[c][l]=!0),r[l]||(r[l]=!0,n.push(u))}else n.push(u)}return e.definitions=n,e}(r),!1),o[t]=r,r}function l(){for(var e=Array.prototype.slice.call(arguments),t=e[0],r="string"==typeof t?t:t[0],n=1;n<e.length;n++)e[n]&&e[n].kind&&"Document"===e[n].kind?r+=e[n].loc.source.body:r+=e[n],r+=t[n]
return c(r)}l.default=l,l.resetCaches=function(){o={},a={}},l.disableFragmentWarnings=function(){s=!1},l.enableExperimentalFragmentVariables=function(){u=!0},l.disableExperimentalFragmentVariables=function(){u=!1},e.exports=l},lqOT:function(e,t,r){"use strict"
r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return h}))
var n,i=r("q1tI"),o=r.n(i),a=r("qVdT")
function s(){return n||(n=o.a.createContext({})),n}var u,c=function(e){var t=e.client,r=e.children,n=s()
return o.a.createElement(n.Consumer,null,(function(e){return void 0===e&&(e={}),t&&e.client!==t&&(e=Object.assign({},e,{client:t})),Object(a.b)(e.client,5),o.a.createElement(n.Provider,{value:e},r)}))},l=function(e){var t=s()
return o.a.createElement(t.Consumer,null,(function(t){return Object(a.b)(t&&t.client,6),e.children(t.client)}))}
!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(u||(u={}))
var f=new Map
function p(e){var t
switch(e){case u.Query:t="Query"
break
case u.Mutation:t="Mutation"
break
case u.Subscription:t="Subscription"}return t}function h(e){var t,r,n=f.get(e)
if(n)return n
Object(a.b)(!!e&&!!e.kind,1)
var i=e.definitions.filter((function(e){return"FragmentDefinition"===e.kind})),o=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"query"===e.operation})),s=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation})),c=e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&"subscription"===e.operation}))
Object(a.b)(!i.length||o.length||s.length||c.length,2),Object(a.b)(o.length+s.length+c.length<=1,3),r=o.length?u.Query:u.Mutation,o.length||s.length||(r=u.Subscription)
var l=o.length?o:s.length?s:c
Object(a.b)(1===l.length,4)
var p=l[0]
t=p.variableDefinitions||[]
var h={name:p.name&&"Name"===p.name.kind?p.name.value:"data",type:r,variables:t}
return f.set(e,h),h}},mrSG:function(e,t,r){"use strict"
r.r(t),r.d(t,"__extends",(function(){return i})),r.d(t,"__assign",(function(){return o})),r.d(t,"__rest",(function(){return a})),r.d(t,"__decorate",(function(){return s})),r.d(t,"__param",(function(){return u})),r.d(t,"__metadata",(function(){return c})),r.d(t,"__awaiter",(function(){return l})),r.d(t,"__generator",(function(){return f})),r.d(t,"__exportStar",(function(){return p})),r.d(t,"__values",(function(){return h})),r.d(t,"__read",(function(){return d})),r.d(t,"__spread",(function(){return v})),r.d(t,"__spreadArrays",(function(){return b})),r.d(t,"__await",(function(){return y})),r.d(t,"__asyncGenerator",(function(){return m})),r.d(t,"__asyncDelegator",(function(){return g})),r.d(t,"__asyncValues",(function(){return O})),r.d(t,"__makeTemplateObject",(function(){return j})),r.d(t,"__importStar",(function(){return _})),r.d(t,"__importDefault",(function(){return w})),r.d(t,"__classPrivateFieldGet",(function(){return S})),r.d(t,"__classPrivateFieldSet",(function(){return k}))
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)}
function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e}).apply(this,arguments)}
function a(e,t){var r={}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0
for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function s(e,t,r,n){var i,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n)
else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a)
return o>3&&a&&Object.defineProperty(t,r,a),a}function u(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function l(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t
e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function f(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1]
return i[1]},trys:[],ops:[]}
return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o
function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.")
for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i
switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o
break
case 4:return a.label++,{value:o[1],done:!1}
case 5:a.label++,n=o[1],o=[0]
continue
case 7:o=a.ops.pop(),a.trys.pop()
continue
default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0
continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1]
break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o
break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o)
break}i[2]&&a.ops.pop(),a.trys.pop()
continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1]
return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}}function p(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0
if(r)return r.call(e)
if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}
throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function d(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator]
if(!r)return e
var n,i,o=r.call(e),a=[]
try{for(;(void 0===t||t-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return a}function v(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]))
return e}function b(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length
var n=Array(e),i=0
for(t=0;t<r;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)n[i]=o[a]
return n}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function m(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var n,i=r.apply(e,t||[]),o=[]
return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n
function a(e){i[e]&&(n[e]=function(t){return new Promise((function(r,n){o.push([e,t,r,n])>1||s(e,t)}))})}function s(e,t){try{(r=i[e](t)).value instanceof y?Promise.resolve(r.value.v).then(u,c):l(o[0][2],r)}catch(e){l(o[0][3],e)}var r}function u(e){s("next",e)}function c(e){s("throw",e)}function l(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function g(e){var t,r
return t={},n("next"),n("throw",(function(e){throw e})),n("return"),t[Symbol.iterator]=function(){return this},t
function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:y(e[n](t)),done:"return"===n}:i?i(t):t}:i}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.")
var t,r=e[Symbol.asyncIterator]
return r?r.call(e):(e=h(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t)
function n(r){t[r]=e[r]&&function(t){return new Promise((function(n,i){(function(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,i,(t=e[r](t)).done,t.value)}))}}}function j(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function _(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r])
return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance")
return t.get(e)}function k(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance")
return t.set(e,r),r}},p7JZ:function(e,t,r){"use strict"
function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e}Object.defineProperty(t,"__esModule",{value:!0}),t.Observable=void 0
var a=function(){return"function"==typeof Symbol},s=function(e){return a()&&Boolean(Symbol[e])},u=function(e){return s(e)?Symbol[e]:"@@"+e}
a()&&!s("observable")&&(Symbol.observable=Symbol("observable"))
var c=u("iterator"),l=u("observable"),f=u("species")
function p(e,t){var r=e[t]
if(null!=r){if("function"!=typeof r)throw new TypeError(r+" is not a function")
return r}}function h(e){var t=e.constructor
return void 0!==t&&null===(t=t[f])&&(t=void 0),void 0!==t?t:w}function d(e){return e instanceof w}function v(e){v.log?v.log(e):setTimeout((function(){throw e}))}function b(e){Promise.resolve().then((function(){try{e()}catch(e){v(e)}}))}function y(e){var t=e._cleanup
if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t()
else{var r=p(t,"unsubscribe")
r&&r.call(t)}}catch(e){v(e)}}function m(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function g(e,t,r){e._state="running"
var n=e._observer
try{var i=p(n,t)
switch(t){case"next":i&&i.call(n,r)
break
case"error":if(m(e),!i)throw r
i.call(n,r)
break
case"complete":m(e),i&&i.call(n)}}catch(e){v(e)}"closed"===e._state?y(e):"running"===e._state&&(e._state="ready")}function O(e,t,r){if("closed"!==e._state){if("buffering"!==e._state)return"ready"!==e._state?(e._state="buffering",e._queue=[{type:t,value:r}],void b((function(){return function(e){var t=e._queue
if(t){e._queue=void 0,e._state="ready"
for(var r=0;r<t.length&&(g(e,t[r].type,t[r].value),"closed"!==e._state);++r);}}(e)}))):void g(e,t,r)
e._queue.push({type:t,value:r})}}var j=function(){function e(t,r){n(this,e),this._cleanup=void 0,this._observer=t,this._queue=void 0,this._state="initializing"
var i=new _(this)
try{this._cleanup=r.call(void 0,i)}catch(e){i.error(e)}"initializing"===this._state&&(this._state="ready")}return o(e,[{key:"unsubscribe",value:function(){"closed"!==this._state&&(m(this),y(this))}},{key:"closed",get:function(){return"closed"===this._state}}]),e}(),_=function(){function e(t){n(this,e),this._subscription=t}return o(e,[{key:"next",value:function(e){O(this._subscription,"next",e)}},{key:"error",value:function(e){O(this._subscription,"error",e)}},{key:"complete",value:function(){O(this._subscription,"complete")}},{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),w=function(){function e(t){if(n(this,e),!(this instanceof e))throw new TypeError("Observable cannot be called as a function")
if("function"!=typeof t)throw new TypeError("Observable initializer must be a function")
this._subscriber=t}return o(e,[{key:"subscribe",value:function(e){return"object"==typeof e&&null!==e||(e={next:e,error:arguments[1],complete:arguments[2]}),new j(e,this._subscriber)}},{key:"forEach",value:function(e){var t=this
return new Promise((function(r,n){if("function"==typeof e)var i=t.subscribe({next:function(t){try{e(t,o)}catch(e){n(e),i.unsubscribe()}},error:n,complete:r})
else n(new TypeError(e+" is not a function"))
function o(){i.unsubscribe(),r()}}))}},{key:"map",value:function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
return new(h(this))((function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))}},{key:"filter",value:function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
return new(h(this))((function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(e){return r.error(e)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))}},{key:"reduce",value:function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
var r=h(this),n=arguments.length>1,i=!1,o=arguments[1],a=o
return new r((function(r){return t.subscribe({next:function(t){var o=!i
if(i=!0,!o||n)try{a=e(a,t)}catch(e){return r.error(e)}else a=t},error:function(e){r.error(e)},complete:function(){if(!i&&!n)return r.error(new TypeError("Cannot reduce an empty sequence"))
r.next(a),r.complete()}})}))}},{key:"concat",value:function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
var i=h(this)
return new i((function(t){var n,o=0
return function e(a){n=a.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){o===r.length?(n=void 0,t.complete()):e(i.from(r[o++]))}})}(e),function(){n&&(n.unsubscribe(),n=void 0)}}))}},{key:"flatMap",value:function(e){var t=this
if("function"!=typeof e)throw new TypeError(e+" is not a function")
var r=h(this)
return new r((function(n){var i=[],o=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(e){return n.error(e)}var o=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=i.indexOf(o)
e>=0&&i.splice(e,1),a()}})
i.push(o)},error:function(e){n.error(e)},complete:function(){a()}})
function a(){o.closed&&0===i.length&&n.complete()}return function(){i.forEach((function(e){return e.unsubscribe()})),o.unsubscribe()}}))}},{key:l,value:function(){return this}}],[{key:"from",value:function(t){var r="function"==typeof this?this:e
if(null==t)throw new TypeError(t+" is not an object")
var n=p(t,l)
if(n){var i=n.call(t)
if(Object(i)!==i)throw new TypeError(i+" is not an object")
return d(i)&&i.constructor===r?i:new r((function(e){return i.subscribe(e)}))}if(s("iterator")&&(n=p(t,c)))return new r((function(e){b((function(){if(!e.closed){var r=!0,i=!1,o=void 0
try{for(var a,s=n.call(t)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var u=a.value
if(e.next(u),e.closed)return}}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}e.complete()}}))}))
if(Array.isArray(t))return new r((function(e){b((function(){if(!e.closed){for(var r=0;r<t.length;++r)if(e.next(t[r]),e.closed)return
e.complete()}}))}))
throw new TypeError(t+" is not observable")}},{key:"of",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n]
var i="function"==typeof this?this:e
return new i((function(e){b((function(){if(!e.closed){for(var t=0;t<r.length;++t)if(e.next(r[t]),e.closed)return
e.complete()}}))}))}},{key:f,get:function(){return this}}]),e}()
t.Observable=w,a()&&Object.defineProperty(w,Symbol("extensions"),{value:{symbol:l,hostReportError:v},configurable:!0})},qVdT:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}))
var n=r("mrSG"),i=Object.setPrototypeOf,o=void 0===i?function(e,t){return e.__proto__=t,e}:i,a=function(e){function t(r){void 0===r&&(r="Invariant Violation")
var n=e.call(this,"number"==typeof r?"Invariant Violation: "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this
return n.framesToPop=1,n.name="Invariant Violation",o(n,t.prototype),n}return Object(n.__extends)(t,e),t}(Error)
function s(e,t){if(!e)throw new a(t)}function u(e){return function(){return console[e].apply(console,arguments)}}!function(e){e.warn=u("warn"),e.error=u("error")}(s||(s={}))
var c={env:{}}
if("object"==typeof e)c=e
else try{Function("stub","process = stub")(c)}catch(e){}}).call(this,r("8oxB"))},qx2n:function(e,t,r){"use strict"
r.d(t,"a",(function(){return s}))
var n=Object.prototype,i=n.toString,o=n.hasOwnProperty,a=new Map
function s(e,t){try{return function e(t,r){if(t===r)return!0
var n=i.call(t),a=i.call(r)
if(n!==a)return!1
switch(n){case"[object Array]":if(t.length!==r.length)return!1
case"[object Object]":if(u(t,r))return!0
var s=Object.keys(t),c=Object.keys(r),l=s.length
if(l!==c.length)return!1
for(var f=0;f<l;++f)if(!o.call(r,s[f]))return!1
for(f=0;f<l;++f){var p=s[f]
if(!e(t[p],r[p]))return!1}return!0
case"[object Error]":return t.name===r.name&&t.message===r.message
case"[object Number]":if(t!=t)return r!=r
case"[object Boolean]":case"[object Date]":return+t==+r
case"[object RegExp]":case"[object String]":return t==""+r
case"[object Map]":case"[object Set]":if(t.size!==r.size)return!1
if(u(t,r))return!0
for(var h=t.entries(),d="[object Map]"===n;;){var v=h.next()
if(v.done)break
var b=v.value,y=b[0],m=b[1]
if(!r.has(y))return!1
if(d&&!e(m,r.get(y)))return!1}return!0}return!1}(e,t)}finally{a.clear()}}function u(e,t){var r=a.get(e)
if(r){if(r.has(t))return!0}else a.set(e,r=new Set)
return r.add(t),!1}},ttZb:function(e,t,r){"use strict"
r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b}))
var n=r("lqOT"),i=r("mrSG"),o=r("q1tI"),a=r("dMq0"),s=r("qx2n"),u=r("qVdT"),c=function(){function e(e,t){this.isMounted=!1,this.previousOptions={},this.context={},this.options={},this.options=e||{},this.context=t||{}}return e.prototype.getOptions=function(){return this.options},e.prototype.setOptions=function(e,t){void 0===t&&(t=!1),t&&!Object(s.a)(this.options,e)&&(this.previousOptions=this.options),this.options=e},e.prototype.unmount=function(){this.isMounted=!1},e.prototype.refreshClient=function(){var e=this.options&&this.options.client||this.context&&this.context.client
Object(u.b)(!!e,2)
var t=!1
return e!==this.client&&(t=!0,this.client=e,this.cleanup()),{client:this.client,isNew:t}},e.prototype.verifyDocumentType=function(e,t){var r=Object(n.f)(e)
Object(n.e)(t),Object(n.e)(r.type)
Object(u.b)(r.type===t,3)},e}(),l=function(e){function t(t){var r=t.options,n=t.context,i=t.onNewData,o=e.call(this,r,n)||this
return o.previousData={},o.currentObservable={},o.runLazy=!1,o.runLazyQuery=function(e){o.cleanup(),o.runLazy=!0,o.lazyOptions=e,o.onNewData()},o.getExecuteResult=function(){var e=o.getQueryResult()
return o.startQuerySubscription(),e},o.obsRefetch=function(e){return o.currentObservable.query.refetch(e)},o.obsFetchMore=function(e){return o.currentObservable.query.fetchMore(e)},o.obsUpdateQuery=function(e){return o.currentObservable.query.updateQuery(e)},o.obsStartPolling=function(e){o.currentObservable&&o.currentObservable.query&&o.currentObservable.query.startPolling(e)},o.obsStopPolling=function(){o.currentObservable&&o.currentObservable.query&&o.currentObservable.query.stopPolling()},o.obsSubscribeToMore=function(e){return o.currentObservable.query.subscribeToMore(e)},o.onNewData=i,o}return Object(i.__extends)(t,e),t.prototype.execute=function(){this.refreshClient()
var e=this.getOptions(),t=e.skip,r=e.query
return(t||r!==this.previousData.query)&&(this.removeQuerySubscription(),this.previousData.query=r),this.updateObservableQuery(),this.isMounted&&this.startQuerySubscription(),this.getExecuteSsrResult()||this.getExecuteResult()},t.prototype.executeLazy=function(){return this.runLazy?[this.runLazyQuery,this.execute()]:[this.runLazyQuery,{loading:!1,networkStatus:a.c.ready,called:!1,data:void 0}]},t.prototype.fetchData=function(){var e=this.getOptions()
if(e.skip||!1===e.ssr)return!1
var t=this.currentObservable.query
return!!t.getCurrentResult().loading&&t.result()},t.prototype.afterExecute=function(e){var t=(void 0===e?{}:e).lazy,r=void 0!==t&&t
return this.isMounted=!0,r&&!this.runLazy||this.handleErrorOrCompleted(),this.previousOptions=this.getOptions(),this.unmount.bind(this)},t.prototype.cleanup=function(){this.removeQuerySubscription(),delete this.currentObservable.query,delete this.previousData.result},t.prototype.getOptions=function(){var t=e.prototype.getOptions.call(this)
return this.lazyOptions&&(t.variables=Object(i.__assign)(Object(i.__assign)({},t.variables),this.lazyOptions.variables),t.context=Object(i.__assign)(Object(i.__assign)({},t.context),this.lazyOptions.context)),this.runLazy&&delete t.skip,t},t.prototype.ssrInitiated=function(){return this.context&&this.context.renderPromises},t.prototype.getExecuteSsrResult=function(){var e,t=!1===this.getOptions().ssr,r=this.refreshClient().client.disableNetworkFetches,n=Object(i.__assign)({loading:!0,networkStatus:a.c.loading,called:!0,data:void 0,stale:!1,client:this.client},this.observableQueryFields())
return t&&(this.ssrInitiated()||r)?(this.previousData.result=n,n):(this.ssrInitiated()&&(e=this.context.renderPromises.addQueryPromise(this,this.getExecuteResult)||n),e)},t.prototype.prepareObservableQueryOptions=function(){var e=this.getOptions()
this.verifyDocumentType(e.query,n.c.Query)
var t=e.displayName||"Query"
return!this.ssrInitiated()||"network-only"!==e.fetchPolicy&&"cache-and-network"!==e.fetchPolicy||(e.fetchPolicy="cache-first"),Object(i.__assign)(Object(i.__assign)({},e),{displayName:t,context:e.context,metadata:{reactComponent:{displayName:t}}})},t.prototype.initializeObservableQuery=function(){var e,t
if(this.ssrInitiated()&&(this.currentObservable.query=this.context.renderPromises.getSSRObservable(this.getOptions())),!this.currentObservable.query){var r=this.prepareObservableQueryOptions()
this.previousData.observableQueryOptions=Object(i.__assign)(Object(i.__assign)({},r),{children:null}),this.currentObservable.query=this.refreshClient().client.watchQuery(Object(i.__assign)({},r)),this.ssrInitiated()&&(null===(t=null===(e=this.context)||void 0===e?void 0:e.renderPromises)||void 0===t||t.registerSSRObservable(this.currentObservable.query,r))}},t.prototype.updateObservableQuery=function(){if(this.currentObservable.query){var e=Object(i.__assign)(Object(i.__assign)({},this.prepareObservableQueryOptions()),{children:null})
Object(s.a)(e,this.previousData.observableQueryOptions)||(this.previousData.observableQueryOptions=e,this.currentObservable.query.setOptions(e).catch((function(){})))}else this.initializeObservableQuery()},t.prototype.startQuerySubscription=function(){var e=this
if(!this.currentObservable.subscription&&!this.getOptions().skip){var t=this.currentObservable.query
this.currentObservable.subscription=t.subscribe({next:function(t){var r=t.loading,n=t.networkStatus,i=t.data,o=e.previousData.result
o&&o.loading===r&&o.networkStatus===n&&Object(s.a)(o.data,i)||e.onNewData()},error:function(t){if(e.resubscribeToQuery(),!t.hasOwnProperty("graphQLErrors"))throw t
var r=e.previousData.result;(r&&r.loading||!Object(s.a)(t,e.previousData.error))&&(e.previousData.error=t,e.onNewData())}})}},t.prototype.resubscribeToQuery=function(){this.removeQuerySubscription()
var e=this.currentObservable.query.getLastError(),t=this.currentObservable.query.getLastResult()
this.currentObservable.query.resetLastResults(),this.startQuerySubscription(),Object.assign(this.currentObservable.query,{lastError:e,lastResult:t})},t.prototype.getQueryResult=function(){var e=this.observableQueryFields(),t=this.getOptions()
if(t.skip)e=Object(i.__assign)(Object(i.__assign)({},e),{data:void 0,error:void 0,loading:!1,called:!0})
else{var r=this.currentObservable.query.getCurrentResult(),n=r.loading,o=r.partial,s=r.networkStatus,u=r.errors,c=r.error,l=r.data
if(u&&u.length>0&&(c=new a.b({graphQLErrors:u})),e=Object(i.__assign)(Object(i.__assign)({},e),{loading:n,networkStatus:s,error:c,called:!0}),n){var f=this.previousData.result&&this.previousData.result.data
e.data=f&&l?Object(i.__assign)(Object(i.__assign)({},f),l):f||l}else if(c)Object.assign(e,{data:(this.currentObservable.query.getLastResult()||{}).data})
else{var p=this.currentObservable.query.options.fetchPolicy
if(t.partialRefetch&&!l&&o&&"cache-only"!==p)return Object.assign(e,{loading:!0,networkStatus:a.c.loading}),e.refetch(),e
e.data=l}}return e.client=this.client,this.previousData.loading=this.previousData.result&&this.previousData.result.loading||!1,this.previousData.result=e,this.currentObservable.query&&this.currentObservable.query.resetQueryStoreErrors(),e},t.prototype.handleErrorOrCompleted=function(){if(this.currentObservable.query&&this.previousData.result){var e=this.previousData.result,t=e.data,r=e.loading,n=e.error
if(!r){var i=this.getOptions(),o=i.query,a=i.variables,u=i.onCompleted,c=i.onError
if(this.previousOptions&&!this.previousData.loading&&Object(s.a)(this.previousOptions.query,o)&&Object(s.a)(this.previousOptions.variables,a))return
u&&!n?u(t):c&&n&&c(n)}}},t.prototype.removeQuerySubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},t.prototype.observableQueryFields=function(){return{variables:this.currentObservable.query.variables,refetch:this.obsRefetch,fetchMore:this.obsFetchMore,updateQuery:this.obsUpdateQuery,startPolling:this.obsStartPolling,stopPolling:this.obsStopPolling,subscribeToMore:this.obsSubscribeToMore}},t}(c)
function f(e,t,r){void 0===r&&(r=!1)
var a=Object(o.useContext)(Object(n.d)()),u=Object(o.useReducer)((function(e){return e+1}),0),c=u[0],f=u[1],p=t?Object(i.__assign)(Object(i.__assign)({},t),{query:e}):{query:e},h=Object(o.useRef)(),d=h.current||new l({options:p,context:a,onNewData:function(){d.ssrInitiated()?f():Promise.resolve().then(f)}})
d.setOptions(p),d.context=a,d.ssrInitiated()&&!h.current&&(h.current=d)
var v,b,y,m={options:Object(i.__assign)(Object(i.__assign)({},p),{onError:void 0,onCompleted:void 0}),context:a,tick:c},g=(v=function(){return r?d.executeLazy():d.execute()},b=m,(y=Object(o.useRef)()).current&&Object(s.a)(b,y.current.key)||(y.current={key:b,value:v()}),y.current.value),O=r?g[1]:g
return Object(o.useEffect)((function(){return h.current||(h.current=d),function(){return d.cleanup()}}),[]),Object(o.useEffect)((function(){return d.afterExecute({lazy:r})}),[O.loading,O.networkStatus,O.error,O.data]),g}function p(e,t){return f(e,t,!1)}var h=function(e){function t(t){var r=t.options,i=t.context,o=t.result,a=t.setResult,s=e.call(this,r,i)||this
return s.runMutation=function(e){void 0===e&&(e={}),s.onMutationStart()
var t=s.generateNewMutationId()
return s.mutate(e).then((function(e){return s.onMutationCompleted(e,t),e})).catch((function(e){if(s.onMutationError(e,t),!s.getOptions().onError)throw e}))},s.verifyDocumentType(r.mutation,n.c.Mutation),s.result=o,s.setResult=a,s.mostRecentMutationId=0,s}return Object(i.__extends)(t,e),t.prototype.execute=function(e){return this.isMounted=!0,this.verifyDocumentType(this.getOptions().mutation,n.c.Mutation),e.client=this.refreshClient().client,[this.runMutation,e]},t.prototype.afterExecute=function(){return this.isMounted=!0,this.unmount.bind(this)},t.prototype.cleanup=function(){},t.prototype.mutate=function(e){var t=this.getOptions(),r=t.mutation,n=t.variables,o=t.optimisticResponse,a=t.update,s=t.context,u=void 0===s?{}:s,c=t.awaitRefetchQueries,l=void 0!==c&&c,f=t.fetchPolicy,p=Object(i.__assign)({},e),h=Object.assign({},n,p.variables)
return delete p.variables,this.refreshClient().client.mutate(Object(i.__assign)({mutation:r,optimisticResponse:o,refetchQueries:p.refetchQueries||this.getOptions().refetchQueries,awaitRefetchQueries:l,update:a,context:u,fetchPolicy:f,variables:h},p))},t.prototype.onMutationStart=function(){this.result.loading||this.getOptions().ignoreResults||this.updateResult({loading:!0,error:void 0,data:void 0,called:!0})},t.prototype.onMutationCompleted=function(e,t){var r=this.getOptions(),n=r.onCompleted,i=r.ignoreResults,o=e.data,s=e.errors,u=s&&s.length>0?new a.b({graphQLErrors:s}):void 0
this.isMostRecentMutation(t)&&!i&&this.updateResult({called:!0,loading:!1,data:o,error:u}),n&&n(o)},t.prototype.onMutationError=function(e,t){var r=this.getOptions().onError
this.isMostRecentMutation(t)&&this.updateResult({loading:!1,error:e,data:void 0,called:!0}),r&&r(e)},t.prototype.generateNewMutationId=function(){return++this.mostRecentMutationId},t.prototype.isMostRecentMutation=function(e){return this.mostRecentMutationId===e},t.prototype.updateResult=function(e){!this.isMounted||this.previousResult&&Object(s.a)(this.previousResult,e)||(this.setResult(e),this.previousResult=e)},t}(c)
function d(e,t){var r=Object(o.useContext)(Object(n.d)()),a=Object(o.useState)({called:!1,loading:!1}),s=a[0],u=a[1],c=t?Object(i.__assign)(Object(i.__assign)({},t),{mutation:e}):{mutation:e},l=Object(o.useRef)()
var f=(l.current||(l.current=new h({options:c,context:r,result:s,setResult:u})),l.current)
return f.setOptions(c),f.context=r,Object(o.useEffect)((function(){return f.afterExecute()})),f.execute(s)}var v=function(e){function t(t){var r=t.options,n=t.context,i=t.setResult,o=e.call(this,r,n)||this
return o.currentObservable={},o.setResult=i,o.initialize(r),o}return Object(i.__extends)(t,e),t.prototype.execute=function(e){if(!0===this.getOptions().skip)return this.cleanup(),{loading:!1,error:void 0,data:void 0,variables:this.getOptions().variables}
var t=e
this.refreshClient().isNew&&(t=this.getLoadingResult())
var r=this.getOptions().shouldResubscribe
return"function"==typeof r&&(r=!!r(this.getOptions())),!1!==r&&this.previousOptions&&Object.keys(this.previousOptions).length>0&&(this.previousOptions.subscription!==this.getOptions().subscription||!Object(s.a)(this.previousOptions.variables,this.getOptions().variables)||this.previousOptions.skip!==this.getOptions().skip)&&(this.cleanup(),t=this.getLoadingResult()),this.initialize(this.getOptions()),this.startSubscription(),this.previousOptions=this.getOptions(),Object(i.__assign)(Object(i.__assign)({},t),{variables:this.getOptions().variables})},t.prototype.afterExecute=function(){this.isMounted=!0},t.prototype.cleanup=function(){this.endSubscription(),delete this.currentObservable.query},t.prototype.initialize=function(e){this.currentObservable.query||!0===this.getOptions().skip||(this.currentObservable.query=this.refreshClient().client.subscribe({query:e.subscription,variables:e.variables,fetchPolicy:e.fetchPolicy}))},t.prototype.startSubscription=function(){this.currentObservable.subscription||(this.currentObservable.subscription=this.currentObservable.query.subscribe({next:this.updateCurrentData.bind(this),error:this.updateError.bind(this),complete:this.completeSubscription.bind(this)}))},t.prototype.getLoadingResult=function(){return{loading:!0,error:void 0,data:void 0}},t.prototype.updateResult=function(e){this.isMounted&&this.setResult(e)},t.prototype.updateCurrentData=function(e){var t=this.getOptions().onSubscriptionData
this.updateResult({data:e.data,loading:!1,error:void 0}),t&&t({client:this.refreshClient().client,subscriptionData:e})},t.prototype.updateError=function(e){this.updateResult({error:e,loading:!1})},t.prototype.completeSubscription=function(){var e=this.getOptions().onSubscriptionComplete
e&&e(),this.endSubscription()},t.prototype.endSubscription=function(){this.currentObservable.subscription&&(this.currentObservable.subscription.unsubscribe(),delete this.currentObservable.subscription)},t}(c)
function b(e,t){var r=Object(o.useContext)(Object(n.d)()),a=t?Object(i.__assign)(Object(i.__assign)({},t),{subscription:e}):{subscription:e},s=Object(o.useState)({loading:!a.skip,error:void 0,data:void 0}),u=s[0],c=s[1],l=Object(o.useRef)()
var f=(l.current||(l.current=new v({options:a,context:r,setResult:c})),l.current)
return f.setOptions(a,!0),f.context=r,Object(o.useEffect)((function(){return f.afterExecute()})),Object(o.useEffect)((function(){return f.cleanup.bind(f)}),[]),f.execute(u)}!function(){function e(){this.queryPromises=new Map,this.queryInfoTrie=new Map}e.prototype.registerSSRObservable=function(e,t){this.lookupQueryInfo(t).observable=e},e.prototype.getSSRObservable=function(e){return this.lookupQueryInfo(e).observable},e.prototype.addQueryPromise=function(e,t){return this.lookupQueryInfo(e.getOptions()).seen?t():(this.queryPromises.set(e.getOptions(),new Promise((function(t){t(e.fetchData())}))),null)},e.prototype.hasPromises=function(){return this.queryPromises.size>0},e.prototype.consumeAndAwaitPromises=function(){var e=this,t=[]
return this.queryPromises.forEach((function(r,n){e.lookupQueryInfo(n).seen=!0,t.push(r)})),this.queryPromises.clear(),Promise.all(t)},e.prototype.lookupQueryInfo=function(e){var t=this.queryInfoTrie,r=e.query,n=e.variables,i=t.get(r)||new Map
t.has(r)||t.set(r,i)
var o=JSON.stringify(n),a=i.get(o)||{seen:!1,observable:null}
return i.has(o)||i.set(o,a),a}}()},vbcS:function(e,t,r){"use strict"
r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}))
var n=r("mrSG"),i=r("ttZb"),o=r("17x9"),a=r.n(o)
function s(e){var t=e.children,r=e.query,o=Object(n.__rest)(e,["children","query"]),a=Object(i.b)(r,o)
return t&&a?t(a):null}function u(e){var t=Object(i.a)(e.mutation,e),r=t[0],n=t[1]
return e.children?e.children(r,n):null}function c(e){var t=Object(i.c)(e.subscription,e)
return e.children&&t?e.children(t):null}!function(e){e.propTypes={client:a.a.object,children:a.a.func.isRequired,fetchPolicy:a.a.string,notifyOnNetworkStatusChange:a.a.bool,onCompleted:a.a.func,onError:a.a.func,pollInterval:a.a.number,query:a.a.object.isRequired,variables:a.a.object,ssr:a.a.bool,partialRefetch:a.a.bool,returnPartialData:a.a.bool}}(s||(s={})),function(e){e.propTypes={mutation:a.a.object.isRequired,variables:a.a.object,optimisticResponse:a.a.oneOfType([a.a.object,a.a.func]),refetchQueries:a.a.oneOfType([a.a.arrayOf(a.a.oneOfType([a.a.string,a.a.object])),a.a.func]),awaitRefetchQueries:a.a.bool,update:a.a.func,children:a.a.func.isRequired,onCompleted:a.a.func,onError:a.a.func,fetchPolicy:a.a.string}}(u||(u={})),function(e){e.propTypes={subscription:a.a.object.isRequired,variables:a.a.object,children:a.a.func,onSubscriptionData:a.a.func,onSubscriptionComplete:a.a.func,shouldResubscribe:a.a.oneOfType([a.a.func,a.a.bool])}}(c||(c={}))},xdHl:function(e,t,r){"use strict"
r.d(t,"c",(function(){return Ee})),r.d(t,"d",(function(){return o.a})),r.d(t,"a",(function(){return ge.b})),r.d(t,"b",(function(){return Oe.b}))
var n=r("zidk"),i=r("lTCR"),o=r.n(i),a=r("dMq0"),s=r("mrSG"),u=r("RRgQ")
function c(e){return{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:l(e)}]}}function l(e){if("number"==typeof e||"boolean"==typeof e||"string"==typeof e||null==e)return null
if(Array.isArray(e))return l(e[0])
var t=[]
return Object.keys(e).forEach((function(r){var n={kind:"Field",name:{kind:"Name",value:r},selectionSet:l(e[r])||void 0}
t.push(n)})),{kind:"SelectionSet",selections:t}}var f,p={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:null,variableDefinitions:null,directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:null,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:null}]}}]},h=function(){function e(){}return e.prototype.transformDocument=function(e){return e},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.read({query:e.query,variables:e.variables,optimistic:t})},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.read({query:Object(u.getFragmentQueryDocument)(e.fragment,e.fragmentName),variables:e.variables,rootId:e.id,optimistic:t})},e.prototype.writeQuery=function(e){this.write({dataId:"ROOT_QUERY",result:e.data,query:e.query,variables:e.variables})},e.prototype.writeFragment=function(e){this.write({dataId:e.id,result:e.data,variables:e.variables,query:Object(u.getFragmentQueryDocument)(e.fragment,e.fragmentName)})},e.prototype.writeData=function(e){var t,r,n=e.id,i=e.data
if(void 0!==n){var o=null
try{o=this.read({rootId:n,optimistic:!1,query:p})}catch(e){}var a=o&&o.__typename||"__ClientData",s=Object.assign({__typename:a},i)
this.writeFragment({id:n,fragment:(t=s,r=a,{kind:"Document",definitions:[{kind:"FragmentDefinition",typeCondition:{kind:"NamedType",name:{kind:"Name",value:r||"__FakeType"}},name:{kind:"Name",value:"GeneratedClientQuery"},selectionSet:l(t)}]}),data:s})}else this.writeQuery({query:c(i),data:i})},e}()
f||(f={})
var d=r("qx2n"),v=null,b={},y=1,m=Array,g=m["@wry/context:Slot"]||function(){var e=function(){function e(){this.id=["slot",y++,Date.now(),Math.random().toString(36).slice(2)].join(":")}return e.prototype.hasValue=function(){for(var e=v;e;e=e.parent)if(this.id in e.slots){var t=e.slots[this.id]
if(t===b)break
return e!==v&&(v.slots[this.id]=t),!0}return v&&(v.slots[this.id]=b),!1},e.prototype.getValue=function(){if(this.hasValue())return v.slots[this.id]},e.prototype.withValue=function(e,t,r,n){var i,o=((i={__proto__:null})[this.id]=e,i),a=v
v={parent:a,slots:o}
try{return t.apply(n,r)}finally{v=a}},e.bind=function(e){var t=v
return function(){var r=v
try{return v=t,e.apply(this,arguments)}finally{v=r}}},e.noContext=function(e,t,r){if(!v)return e.apply(r,t)
var n=v
try{return v=null,e.apply(r,t)}finally{v=n}},e}()
try{Object.defineProperty(m,"@wry/context:Slot",{value:m["@wry/context:Slot"]=e,enumerable:!1,writable:!1,configurable:!1})}finally{return e}}()
g.bind,g.noContext
function O(){}var j=function(){function e(e,t){void 0===e&&(e=Infinity),void 0===t&&(t=O),this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}return e.prototype.has=function(e){return this.map.has(e)},e.prototype.get=function(e){var t=this.getEntry(e)
return t&&t.value},e.prototype.getEntry=function(e){var t=this.map.get(e)
if(t&&t!==this.newest){var r=t.older,n=t.newer
n&&(n.older=r),r&&(r.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t},e.prototype.set=function(e,t){var r=this.getEntry(e)
return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)},e.prototype.clean=function(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)},e.prototype.delete=function(e){var t=this.map.get(e)
return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)},e}(),_=new g,w=[],S=[]
function k(e,t){if(!e)throw new Error(t||"assertion failure")}function Q(e){switch(e.length){case 0:throw new Error("unknown value")
case 1:return e[0]
case 2:throw e[1]}}var x=function(){function e(t,r){this.fn=t,this.args=r,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],++e.count}return e.prototype.recompute=function(){if(k(!this.recomputing,"already recomputing"),function(e){var t=_.getValue()
if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),q(e)?F(t,e):M(t,e),t}(this)||!P(this))return q(this)?function(e){var t=C(e)
_.withValue(e,R,[e]),function(e){if("function"==typeof e.subscribe)try{V(e),e.unsubscribe=e.subscribe.apply(null,e.args)}catch(t){return e.setDirty(),!1}return!0}(e)&&function(e){if(e.dirty=!1,q(e))return
D(e)}(e)
return t.forEach(P),Q(e.value)}(this):Q(this.value)},e.prototype.setDirty=function(){this.dirty||(this.dirty=!0,this.value.length=0,E(this),V(this))},e.prototype.dispose=function(){var e=this
C(this).forEach(P),V(this),this.parents.forEach((function(t){t.setDirty(),T(t,e)}))},e.count=0,e}()
function R(e){e.recomputing=!0,e.value.length=0
try{e.value[0]=e.fn.apply(null,e.args)}catch(t){e.value[1]=t}e.recomputing=!1}function q(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function E(e){e.parents.forEach((function(t){return F(t,e)}))}function D(e){e.parents.forEach((function(t){return M(t,e)}))}function F(e,t){if(k(e.childValues.has(t)),k(q(t)),e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=S.pop()||new Set
e.dirtyChildren.add(t),E(e)}function M(e,t){k(e.childValues.has(t)),k(!q(t))
var r,n,i,o=e.childValues.get(t)
0===o.length?e.childValues.set(t,t.value.slice(0)):(r=o,n=t.value,(i=r.length)>0&&i===n.length&&r[i-1]===n[i-1]||e.setDirty()),I(e,t),q(e)||D(e)}function I(e,t){var r=e.dirtyChildren
r&&(r.delete(t),0===r.size&&(S.length<100&&S.push(r),e.dirtyChildren=null))}function P(e){return 0===e.parents.size&&"function"==typeof e.reportOrphan&&!0===e.reportOrphan()}function C(e){var t=w
return e.childValues.size>0&&(t=[],e.childValues.forEach((function(r,n){T(e,n),t.push(n)}))),k(null===e.dirtyChildren),t}function T(e,t){t.parents.delete(e),e.childValues.delete(t),I(e,t)}function V(e){var t=e.unsubscribe
"function"==typeof t&&(e.unsubscribe=void 0,t())}var N=function(){function e(e){this.weakness=e}return e.prototype.lookup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return this.lookupArray(e)},e.prototype.lookupArray=function(e){var t=this
return e.forEach((function(e){return t=t.getChildTrie(e)})),t.data||(t.data=Object.create(null))},e.prototype.getChildTrie=function(t){var r=this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break
case"function":return!0}return!1}(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),n=r.get(t)
return n||r.set(t,n=new e(this.weakness)),n},e}()
var A=new N("function"==typeof WeakMap)
function L(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
return A.lookupArray(e)}var z=new Set
function G(e,t){void 0===t&&(t=Object.create(null))
var r=new j(t.max||Math.pow(2,16),(function(e){return e.dispose()})),n=!!t.disposable,i=t.makeCacheKey||L
function o(){if(!n||_.hasValue()){var o=i.apply(null,arguments)
if(void 0===o)return e.apply(null,arguments)
var a=Array.prototype.slice.call(arguments),s=r.get(o)
s?s.args=a:(s=new x(e,a),r.set(o,s),s.subscribe=t.subscribe,n&&(s.reportOrphan=function(){return r.delete(o)}))
var u=s.recompute()
return r.set(o,s),z.add(r),_.hasValue()||(z.forEach((function(e){return e.clean()})),z.clear()),n?void 0:u}}return o.dirty=function(){var e=i.apply(null,arguments),t=void 0!==e&&r.get(e)
t&&t.setDirty()},o}var U=r("qVdT"),B=!1
function K(){var e=!B
return Object(u.isTest)()||(B=!0),e}var J=function(){function e(){}return e.prototype.ensureReady=function(){return Promise.resolve()},e.prototype.canBypassInit=function(){return!0},e.prototype.match=function(e,t,r){var n=r.store.get(e.id),i="ROOT_QUERY"===e.id
if(!n)return i
var o=n.__typename,a=void 0===o?i&&"Query":o
return a&&a===t||(K(),"heuristic")},e}(),W=function(){function e(e){e&&e.introspectionQueryResultData?(this.possibleTypesMap=this.parseIntrospectionResult(e.introspectionQueryResultData),this.isReady=!0):this.isReady=!1,this.match=this.match.bind(this)}return e.prototype.match=function(e,t,r){Object(U.b)(this.isReady,2)
var n=r.store.get(e.id),i="ROOT_QUERY"===e.id
if(!n)return i
var o=n.__typename,a=void 0===o?i&&"Query":o
if(Object(U.b)(a,3),a===t)return!0
var s=this.possibleTypesMap[t]
return!!(a&&s&&s.indexOf(a)>-1)},e.prototype.parseIntrospectionResult=function(e){var t={}
return e.__schema.types.forEach((function(e){"UNION"!==e.kind&&"INTERFACE"!==e.kind||(t[e.name]=e.possibleTypes.map((function(e){return e.name})))})),t},e}(),H=Object.prototype.hasOwnProperty,Y=function(){function e(e){var t=this
void 0===e&&(e=Object.create(null)),this.data=e,this.depend=G((function(e){return t.data[e]}),{disposable:!0,makeCacheKey:function(e){return e}})}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.depend(e),this.data[e]},e.prototype.set=function(e,t){t!==this.data[e]&&(this.data[e]=t,this.depend.dirty(e))},e.prototype.delete=function(e){H.call(this.data,e)&&(delete this.data[e],this.depend.dirty(e))},e.prototype.clear=function(){this.replace(null)},e.prototype.replace=function(e){var t=this
e?(Object.keys(e).forEach((function(r){t.set(r,e[r])})),Object.keys(this.data).forEach((function(r){H.call(e,r)||t.delete(r)}))):Object.keys(this.data).forEach((function(e){t.delete(e)}))},e}()
function X(e){return new Y(e)}var Z=function(){function e(e){var t=this,r=void 0===e?{}:e,n=r.cacheKeyRoot,i=void 0===n?new N(u.canUseWeakMap):n,o=r.freezeResults,a=void 0!==o&&o,s=this.executeStoreQuery,c=this.executeSelectionSet,l=this.executeSubSelectedArray
this.freezeResults=a,this.executeStoreQuery=G((function(e){return s.call(t,e)}),{makeCacheKey:function(e){var t=e.query,r=e.rootValue,n=e.contextValue,o=e.variableValues,a=e.fragmentMatcher
if(n.store instanceof Y)return i.lookup(n.store,t,a,JSON.stringify(o),r.id)}}),this.executeSelectionSet=G((function(e){return c.call(t,e)}),{makeCacheKey:function(e){var t=e.selectionSet,r=e.rootValue,n=e.execContext
if(n.contextValue.store instanceof Y)return i.lookup(n.contextValue.store,t,n.fragmentMatcher,JSON.stringify(n.variableValues),r.id)}}),this.executeSubSelectedArray=G((function(e){return l.call(t,e)}),{makeCacheKey:function(e){var t=e.field,r=e.array,n=e.execContext
if(n.contextValue.store instanceof Y)return i.lookup(n.contextValue.store,t,r,JSON.stringify(n.variableValues))}})}return e.prototype.readQueryFromStore=function(e){return this.diffQueryAgainstStore(Object(s.__assign)(Object(s.__assign)({},e),{returnPartialData:!1})).result},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,n=e.variables,i=e.previousResult,o=e.returnPartialData,a=void 0===o||o,s=e.rootId,c=void 0===s?"ROOT_QUERY":s,l=e.fragmentMatcherFunction,f=e.config,p=Object(u.getQueryDefinition)(r)
n=Object(u.assign)({},Object(u.getDefaultValues)(p),n)
var h={store:t,dataIdFromObject:f&&f.dataIdFromObject,cacheRedirects:f&&f.cacheRedirects||{}},v=this.executeStoreQuery({query:r,rootValue:{type:"id",id:c,generated:!0,typename:"Query"},contextValue:h,variableValues:n,fragmentMatcher:l}),b=v.missing&&v.missing.length>0
return b&&!a&&v.missing.forEach((function(e){if(!e.tolerable)throw new U.a(8)})),i&&Object(d.a)(i,v.result)&&(v.result=i),{result:v.result,complete:!b}},e.prototype.executeStoreQuery=function(e){var t=e.query,r=e.rootValue,n=e.contextValue,i=e.variableValues,o=e.fragmentMatcher,a=void 0===o?ee:o,s=Object(u.getMainDefinition)(t),c=Object(u.getFragmentDefinitions)(t),l={query:t,fragmentMap:Object(u.createFragmentMap)(c),contextValue:n,variableValues:i,fragmentMatcher:a}
return this.executeSelectionSet({selectionSet:s.selectionSet,rootValue:r,execContext:l})},e.prototype.executeSelectionSet=function(e){var t=this,r=e.selectionSet,n=e.rootValue,i=e.execContext,o=i.fragmentMap,a=i.contextValue,c=i.variableValues,l={result:null},f=[],p=a.store.get(n.id),h=p&&p.__typename||"ROOT_QUERY"===n.id&&"Query"||void 0
function d(e){var t
return e.missing&&(l.missing=l.missing||[],(t=l.missing).push.apply(t,e.missing)),e.result}return r.selections.forEach((function(e){var r
if(Object(u.shouldInclude)(e,c))if(Object(u.isField)(e)){var l=d(t.executeField(p,h,e,i))
void 0!==l&&f.push(((r={})[Object(u.resultKeyNameFromField)(e)]=l,r))}else{var v=void 0
if(Object(u.isInlineFragment)(e))v=e
else if(!(v=o[e.name.value]))throw new U.a(9)
var b=v.typeCondition&&v.typeCondition.name.value,y=!b||i.fragmentMatcher(n,b,a)
if(y){var m=t.executeSelectionSet({selectionSet:v.selectionSet,rootValue:n,execContext:i})
"heuristic"===y&&m.missing&&(m=Object(s.__assign)(Object(s.__assign)({},m),{missing:m.missing.map((function(e){return Object(s.__assign)(Object(s.__assign)({},e),{tolerable:!0})}))})),f.push(d(m))}}})),l.result=Object(u.mergeDeepArray)(f),this.freezeResults,l},e.prototype.executeField=function(e,t,r,n){var i=n.variableValues,o=n.contextValue,a=function(e,t,r,n,i,o){o.resultKey
var a=o.directives,s=r;(n||a)&&(s=Object(u.getStoreKeyName)(s,n,a))
var c=void 0
if(e&&void 0===(c=e[s])&&i.cacheRedirects&&"string"==typeof t){var l=i.cacheRedirects[t]
if(l){var f=l[r]
f&&(c=f(e,n,{getCacheKey:function(e){var t=i.dataIdFromObject(e)
return t&&Object(u.toIdValue)({id:t,typename:e.__typename})}}))}}if(void 0===c)return{result:c,missing:[{object:e,fieldName:s,tolerable:!1}]}
Object(u.isJsonValue)(c)&&(c=c.json)
return{result:c}}(e,t,r.name.value,Object(u.argumentsObjectFromField)(r,i),o,{resultKey:Object(u.resultKeyNameFromField)(r),directives:Object(u.getDirectiveInfoFromField)(r,i)})
return Array.isArray(a.result)?this.combineExecResults(a,this.executeSubSelectedArray({field:r,array:a.result,execContext:n})):r.selectionSet?null==a.result?a:this.combineExecResults(a,this.executeSelectionSet({selectionSet:r.selectionSet,rootValue:a.result,execContext:n})):($(r,a.result),this.freezeResults,a)},e.prototype.combineExecResults=function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return t.forEach((function(t){t.missing&&(e=e||[]).push.apply(e,t.missing)})),{result:t.pop().result,missing:e}},e.prototype.executeSubSelectedArray=function(e){var t,r=this,n=e.field,i=e.array,o=e.execContext
function a(e){return e.missing&&(t=t||[]).push.apply(t,e.missing),e.result}return i=i.map((function(e){return null===e?null:Array.isArray(e)?a(r.executeSubSelectedArray({field:n,array:e,execContext:o})):n.selectionSet?a(r.executeSelectionSet({selectionSet:n.selectionSet,rootValue:e,execContext:o})):($(n,e),e)})),this.freezeResults,{result:i,missing:t}},e}()
function $(e,t){if(!e.selectionSet&&Object(u.isIdValue)(t))throw new U.a(10)}function ee(){return!0}var te=function(){function e(e){void 0===e&&(e=Object.create(null)),this.data=e}return e.prototype.toObject=function(){return this.data},e.prototype.get=function(e){return this.data[e]},e.prototype.set=function(e,t){this.data[e]=t},e.prototype.delete=function(e){this.data[e]=void 0},e.prototype.clear=function(){this.data=Object.create(null)},e.prototype.replace=function(e){this.data=e||Object.create(null)},e}()
var re=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this
return t.type="WriteError",t}return Object(s.__extends)(t,e),t}(Error)
var ne=function(){function e(){}return e.prototype.writeQueryToStore=function(e){var t=e.query,r=e.result,n=e.store,i=void 0===n?X():n,o=e.variables,a=e.dataIdFromObject,s=e.fragmentMatcherFunction
return this.writeResultToStore({dataId:"ROOT_QUERY",result:r,document:t,store:i,variables:o,dataIdFromObject:a,fragmentMatcherFunction:s})},e.prototype.writeResultToStore=function(e){var t=e.dataId,r=e.result,n=e.document,i=e.store,o=void 0===i?X():i,a=e.variables,s=e.dataIdFromObject,c=e.fragmentMatcherFunction,l=Object(u.getOperationDefinition)(n)
try{return this.writeSelectionSetToStore({result:r,dataId:t,selectionSet:l.selectionSet,context:{store:o,processedData:{},variables:Object(u.assign)({},Object(u.getDefaultValues)(l),a),dataIdFromObject:s,fragmentMap:Object(u.createFragmentMap)(Object(u.getFragmentDefinitions)(n)),fragmentMatcherFunction:c}})}catch(e){throw function(e,t){var r=new re("Error writing result to store for query:\n "+JSON.stringify(t))
return r.message+="\n"+e.message,r.stack=e.stack,r}(e,n)}},e.prototype.writeSelectionSetToStore=function(e){var t=this,r=e.result,n=e.dataId,i=e.selectionSet,o=e.context,a=o.variables,s=o.store,c=o.fragmentMap
return i.selections.forEach((function(e){var i
if(Object(u.shouldInclude)(e,a))if(Object(u.isField)(e)){var s=Object(u.resultKeyNameFromField)(e),l=r[s]
if(void 0!==l)t.writeFieldToStore({dataId:n,value:l,field:e,context:o})
else{var f=!1,p=!1
e.directives&&e.directives.length&&(f=e.directives.some((function(e){return e.name&&"defer"===e.name.value})),p=e.directives.some((function(e){return e.name&&"client"===e.name.value}))),!f&&!p&&o.fragmentMatcherFunction}}else{var h=void 0
Object(u.isInlineFragment)(e)?h=e:(h=(c||{})[e.name.value],Object(U.b)(h,4))
var d=!0
if(o.fragmentMatcherFunction&&h.typeCondition){var v=n||"self",b=Object(u.toIdValue)({id:v,typename:void 0}),y={store:new te((i={},i[v]=r,i)),cacheRedirects:{}},m=o.fragmentMatcherFunction(b,h.typeCondition.name.value,y)
Object(u.isProduction)(),d=!!m}d&&t.writeSelectionSetToStore({result:r,selectionSet:h.selectionSet,dataId:n,context:o})}})),s},e.prototype.writeFieldToStore=function(e){var t,r,n,i=e.field,o=e.value,a=e.dataId,c=e.context,l=c.variables,f=c.dataIdFromObject,p=c.store,h=Object(u.storeKeyNameFromField)(i,l)
if(i.selectionSet&&null!==o)if(Array.isArray(o)){var v=a+"."+h
r=this.processArrayValue(o,v,i.selectionSet,c)}else{var b=a+"."+h,y=!0
if(ie(b)||(b="$"+b),f){var m=f(o)
Object(U.b)(!m||!ie(m),5),(m||"number"==typeof m&&0===m)&&(b=m,y=!1)}oe(b,i,c.processedData)||this.writeSelectionSetToStore({dataId:b,result:o,selectionSet:i.selectionSet,context:c})
var g=o.__typename
r=Object(u.toIdValue)({id:b,typename:g},y)
var O=(n=p.get(a))&&n[h]
if(O!==r&&Object(u.isIdValue)(O)){var j=void 0!==O.typename,_=void 0!==g,w=j&&_&&O.typename!==g
Object(U.b)(!y||O.generated||w,6),Object(U.b)(!j||_,7),O.generated&&(w?y||p.delete(O.id):function e(t,r,n){if(t===r)return!1
var i=n.get(t),o=n.get(r),a=!1
Object.keys(i).forEach((function(t){var r=i[t],s=o[t]
Object(u.isIdValue)(r)&&ie(r.id)&&Object(u.isIdValue)(s)&&!Object(d.a)(r,s)&&e(r.id,s.id,n)&&(a=!0)})),n.delete(t)
var c=Object(s.__assign)(Object(s.__assign)({},i),o)
if(Object(d.a)(c,o))return a
return n.set(r,c),!0}(O.id,r.id,p))}}else r=null!=o&&"object"==typeof o?{type:"json",json:o}:o;(n=p.get(a))&&Object(d.a)(r,n[h])||p.set(a,Object(s.__assign)(Object(s.__assign)({},n),((t={})[h]=r,t)))},e.prototype.processArrayValue=function(e,t,r,n){var i=this
return e.map((function(e,o){if(null===e)return null
var a=t+"."+o
if(Array.isArray(e))return i.processArrayValue(e,a,r,n)
var s=!0
if(n.dataIdFromObject){var c=n.dataIdFromObject(e)
c&&(a=c,s=!1)}return oe(a,r,n.processedData)||i.writeSelectionSetToStore({dataId:a,result:e,selectionSet:r,context:n}),Object(u.toIdValue)({id:a,typename:e.__typename},s)}))},e}()
function ie(e){return"$"===e[0]}function oe(e,t,r){if(!r)return!1
if(r[e]){if(r[e].indexOf(t)>=0)return!0
r[e].push(t)}else r[e]=[t]
return!1}var ae={fragmentMatcher:new J,dataIdFromObject:function(e){if(e.__typename){if(void 0!==e.id)return e.__typename+":"+e.id
if(void 0!==e._id)return e.__typename+":"+e._id}return null},addTypename:!0,resultCaching:!0,freezeResults:!1}
var se=Object.prototype.hasOwnProperty,ue=function(e){function t(t,r,n){var i=e.call(this,Object.create(null))||this
return i.optimisticId=t,i.parent=r,i.transaction=n,i}return Object(s.__extends)(t,e),t.prototype.toObject=function(){return Object(s.__assign)(Object(s.__assign)({},this.parent.toObject()),this.data)},t.prototype.get=function(e){return se.call(this.data,e)?this.data[e]:this.parent.get(e)},t}(te),ce=function(e){function t(t){void 0===t&&(t={})
var r=e.call(this)||this
r.watches=new Set,r.typenameDocumentCache=new Map,r.cacheKeyRoot=new N(u.canUseWeakMap),r.silenceBroadcast=!1,r.config=Object(s.__assign)(Object(s.__assign)({},ae),t),r.config.customResolvers&&(r.config.cacheRedirects=r.config.customResolvers),r.config.cacheResolvers&&(r.config.cacheRedirects=r.config.cacheResolvers),r.addTypename=!!r.config.addTypename,r.data=r.config.resultCaching?new Y:new te,r.optimisticData=r.data,r.storeWriter=new ne,r.storeReader=new Z({cacheKeyRoot:r.cacheKeyRoot,freezeResults:t.freezeResults})
var n=r,i=n.maybeBroadcastWatch
return r.maybeBroadcastWatch=G((function(e){return i.call(r,e)}),{makeCacheKey:function(e){if(!e.optimistic&&!e.previousResult)return n.data instanceof Y?n.cacheKeyRoot.lookup(e.query,JSON.stringify(e.variables)):void 0}}),r}return Object(s.__extends)(t,e),t.prototype.restore=function(e){return e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).toObject()},t.prototype.read=function(e){if("string"==typeof e.rootId&&void 0===this.data.get(e.rootId))return null
var t=this.config.fragmentMatcher,r=t&&t.match
return this.storeReader.readQueryFromStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,rootId:e.rootId,fragmentMatcherFunction:r,previousResult:e.previousResult,config:this.config})||null},t.prototype.write=function(e){var t=this.config.fragmentMatcher,r=t&&t.match
this.storeWriter.writeResultToStore({dataId:e.dataId,result:e.result,variables:e.variables,document:this.transformDocument(e.query),store:this.data,dataIdFromObject:this.config.dataIdFromObject,fragmentMatcherFunction:r}),this.broadcastWatches()},t.prototype.diff=function(e){var t=this.config.fragmentMatcher,r=t&&t.match
return this.storeReader.diffQueryAgainstStore({store:e.optimistic?this.optimisticData:this.data,query:this.transformDocument(e.query),variables:e.variables,returnPartialData:e.returnPartialData,previousResult:e.previousResult,fragmentMatcherFunction:r,config:this.config})},t.prototype.watch=function(e){var t=this
return this.watches.add(e),function(){t.watches.delete(e)}},t.prototype.evict=function(e){throw new U.a(1)},t.prototype.reset=function(){return this.data.clear(),this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){for(var t=[],r=0,n=this.optimisticData;n instanceof ue;)n.optimisticId===e?++r:t.push(n),n=n.parent
if(r>0){for(this.optimisticData=n;t.length>0;){var i=t.pop()
this.performTransaction(i.transaction,i.optimisticId)}this.broadcastWatches()}},t.prototype.performTransaction=function(e,t){var r=this.data,n=this.silenceBroadcast
this.silenceBroadcast=!0,"string"==typeof t&&(this.data=this.optimisticData=new ue(t,this.optimisticData,e))
try{e(this)}finally{this.silenceBroadcast=n,this.data=r}this.broadcastWatches()},t.prototype.recordOptimisticTransaction=function(e,t){return this.performTransaction(e,t)},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e)
return t||(t=Object(u.addTypenameToDocument)(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(){var e=this
this.silenceBroadcast||this.watches.forEach((function(t){return e.maybeBroadcastWatch(t)}))},t.prototype.maybeBroadcastWatch=function(e){e.callback(this.diff({query:e.query,variables:e.variables,previousResult:e.previousResult&&e.previousResult(),optimistic:e.optimistic}))},t}(h),le=r("1jQf"),fe=r("b0dj"),pe=r("dQau"),he={http:{includeQuery:!0,includeExtensions:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},de=function(e,t,r){var n=new Error(r)
throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n},ve=function(e,t){var r
try{r=JSON.stringify(e)}catch(e){var n=new U.a(2)
throw n.parseError=e,n}return r},be=function(e){void 0===e&&(e={})
var t=e.uri,r=void 0===t?"/graphql":t,n=e.fetch,i=e.includeExtensions,o=e.useGETForQueries,a=Object(s.__rest)(e,["uri","fetch","includeExtensions","useGETForQueries"])
!function(e){if(!e&&"undefined"==typeof fetch){throw"undefined"==typeof window&&"node-fetch",new U.a(1)}}(n),n||(n=fetch)
var u={http:{includeExtensions:i},options:a.fetchOptions,credentials:a.credentials,headers:a.headers}
return new le.a((function(e){var t=function(e,t){var r=e.getContext().uri
return r||("function"==typeof t?t(e):t||"/graphql")}(e,r),i=e.getContext(),a={}
if(i.clientAwareness){var c=i.clientAwareness,l=c.name,f=c.version
l&&(a["apollographql-client-name"]=l),f&&(a["apollographql-client-version"]=f)}var p,h=Object(s.__assign)({},a,i.headers),d={http:i.http,options:i.fetchOptions,credentials:i.credentials,headers:h},v=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var i=Object(s.__assign)({},t.options,{headers:t.headers,credentials:t.credentials}),o=t.http
r.forEach((function(e){i=Object(s.__assign)({},i,e.options,{headers:Object(s.__assign)({},i.headers,e.headers)}),e.credentials&&(i.credentials=e.credentials),o=Object(s.__assign)({},o,e.http)}))
var a=e.operationName,u=e.extensions,c=e.variables,l=e.query,f={operationName:a,variables:c}
return o.includeExtensions&&(f.extensions=u),o.includeQuery&&(f.query=Object(pe.a)(l)),{options:i,body:f}}(e,he,u,d),b=v.options,y=v.body
if(!b.signal){var m=function(){if("undefined"==typeof AbortController)return{controller:!1,signal:!1}
var e=new AbortController
return{controller:e,signal:e.signal}}(),g=m.controller,O=m.signal;(p=g)&&(b.signal=O)}if(o&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(b.method="GET"),"GET"===b.method){var j=function(e,t){var r=[],n=function(e,t){r.push(e+"="+encodeURIComponent(t))}
"query"in t&&n("query",t.query)
t.operationName&&n("operationName",t.operationName)
if(t.variables){var i=void 0
try{i=ve(t.variables)}catch(e){return{parseError:e}}n("variables",i)}if(t.extensions){var o=void 0
try{o=ve(t.extensions)}catch(e){return{parseError:e}}n("extensions",o)}var a="",s=e,u=e.indexOf("#");-1!==u&&(a=e.substr(u),s=e.substr(0,u))
var c=-1===s.indexOf("?")?"?":"&"
return{newURI:s+c+r.join("&")+a}}(t,y),_=j.newURI,w=j.parseError
if(w)return Object(le.c)(w)
t=_}else try{b.body=ve(y)}catch(w){return Object(le.c)(w)}return new fe.a((function(r){var i
return n(t,b).then((function(t){return e.setContext({response:t}),t})).then((i=e,function(e){return e.text().then((function(t){try{return JSON.parse(t)}catch(n){var r=n
return r.name="ServerParseError",r.response=e,r.statusCode=e.status,r.bodyText=t,Promise.reject(r)}})).then((function(t){return e.status>=300&&de(e,t,"Response not successful: Received status code "+e.status),Array.isArray(t)||t.hasOwnProperty("data")||t.hasOwnProperty("errors")||de(e,t,"Server response was missing for query '"+(Array.isArray(i)?i.map((function(e){return e.operationName})):i.operationName)+"'."),t}))})).then((function(e){return r.next(e),r.complete(),e})).catch((function(e){"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&r.next(e.result),r.error(e))})),function(){p&&p.abort()}}))}))}
var ye=function(e){function t(t){return e.call(this,be(t).request)||this}return Object(s.__extends)(t,e),t}(le.a)
function me(e){return new le.a((function(t,r){return new fe.a((function(n){var i,o,a
try{i=r(t).subscribe({next:function(i){i.errors&&(a=e({graphQLErrors:i.errors,response:i,operation:t,forward:r}))?o=a.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)}):n.next(i)},error:function(i){(a=e({operation:t,networkError:i,graphQLErrors:i&&i.result&&i.result.errors,forward:r}))?o=a.subscribe({next:n.next.bind(n),error:n.error.bind(n),complete:n.complete.bind(n)}):n.error(i)},complete:function(){a||n.complete.bind(n)()}})}catch(i){e({networkError:i,operation:t,forward:r}),n.error(i)}return function(){i&&i.unsubscribe(),o&&i.unsubscribe()}}))}))}!function(e){function t(t){var r=e.call(this)||this
return r.link=me(t),r}Object(s.__extends)(t,e),t.prototype.request=function(e,t){return this.link.request(e,t)}}(le.a)
var ge=r("lqOT"),Oe=r("vbcS"),je=r("IJ8u"),_e=r("ecBK"),we={test:function(e){return"client"===e.name.value},remove:!0},Se=new Map
var ke,Qe=(ke=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function r(){this.constructor=e}ke(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),xe=_e.graphql,Re=function(e){void 0===e&&(e={resolvers:{},defaults:{}})
var t=e.defaults,r=e.cache,n=e.typeDefs,i=e.fragmentMatcher
return r&&t&&r.writeData({data:t}),new(function(o){function a(){return null!==o&&o.apply(this,arguments)||this}return Qe(a,o),a.prototype.writeDefaults=function(){r&&t&&r.writeData({data:t})},a.prototype.request=function(r,o){if(void 0===o&&(o=function(){return fe.a.of({data:{}})}),n){var a=function(e){return(Array.isArray(e)?e:[e]).map((function(e){return"string"==typeof e?e:Object(pe.a)(e)})).map((function(e){return e.trim()})).join("\n")}(n)
r.setContext((function(e){var t=e.schemas
return{schemas:(void 0===t?[]:t).concat([{definition:a,directives:"directive @client on FIELD"}])}}))}if(!Object(u.hasDirectives)(["client"],r.query))return o(r)
var s,c="function"==typeof e.resolvers?e.resolvers():e.resolvers,l=function(e){var t=Se.get(e)
if(t)return t
Object(u.checkDocument)(e)
var r=Object(u.removeDirectivesFromDocument)([we],e)
return Se.set(e,r),r}(r.query),f=r.query,p=(s=(Object(u.getMainDefinition)(f)||{}).operation).charAt(0).toUpperCase()+s.slice(1)||"Query",h=function(e,r,n,i,o){void 0===r&&(r={})
var a=o.resultKey,s=r[a],u=r[e],l=a!==e
if(void 0!==s||void 0!==u)return s||u
var f=c[r.__typename||p]
if(f){var h=f[e]
if(h)return h(r,n,i,o)}return(l?s:u)||(t||{})[e]}
l&&(r.query=l)
var d=l&&o?o(r):fe.a.of({data:{}})
return new fe.a((function(e){var t=!1,n=!1
d.subscribe({next:function(o){var a=o.data,s=o.errors,u=e.error.bind(e),c=r.getContext()
n=!0,xe(h,f,a,c,r.variables,{fragmentMatcher:i}).then((function(r){e.next({data:r,errors:s}),t&&e.complete(),n=!1})).catch(u)},error:e.error.bind(e),complete:function(){n||e.complete(),t=!0}})}))},a}(le.a))}
function qe(){return me(({graphQLErrors:e,networkError:t})=>{e&&e.map(({message:e,locations:t,path:r})=>console.log("[GraphQL error]: Message: ".concat(e,", Location: ").concat(t,", Path: ").concat(r))),t&&console.log("[Network error]: ".concat(t))})}function Ee(e={}){const t=new ce({addTypename:!0,dataIdFromObject:e=>e.id?e.id:e._id&&e.__typename?e.__typename+e._id:null,fragmentMatcher:new W({introspectionQueryResultData:je})}),r=e.defaults||{},i=e.resolvers||{},o=Re({cache:t,resolvers:i,defaults:r}),s=null==Ee.mockLink?[qe(),new le.a((e,t)=>(e.setContext({headers:{"X-Requested-With":"XMLHttpRequest","GraphQL-Metrics":!0,"X-CSRF-Token":Object(n.a)("_csrf_token")}}),t(e))),o,new ye({uri:"/api/graphql",credentials:"same-origin"})]:[qe(),o,Ee.mockLink]
return new a.a({link:le.a.from(s),cache:t})}}}])

//# sourceMappingURL=43-c-87c8ce5435.js.map