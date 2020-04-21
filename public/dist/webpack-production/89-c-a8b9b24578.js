(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[89],{"58Nq":function(t,e){let i=0
function n(t){return r(s(o(t)))}function s(t){return h(p(a(t),8*t.length))}function r(t){const e=i?"0123456789ABCDEF":"0123456789abcdef"
let n,s=""
for(let i=0;i<t.length;i++)n=t.charCodeAt(i),s+=e.charAt(n>>>4&15)+e.charAt(15&n)
return s}function o(t){let e,i,n="",s=-1
for(;++s<t.length;)e=t.charCodeAt(s),i=s+1<t.length?t.charCodeAt(s+1):0,e>=55296&&e<=56319&&i>=56320&&i<=57343&&(e=65536+((1023&e)<<10)+(1023&i),s++),e<=127?n+=String.fromCharCode(e):e<=2047?n+=String.fromCharCode(192|e>>>6&31,128|63&e):e<=65535?n+=String.fromCharCode(224|e>>>12&15,128|e>>>6&63,128|63&e):e<=2097151&&(n+=String.fromCharCode(240|e>>>18&7,128|e>>>12&63,128|e>>>6&63,128|63&e))
return n}function a(t){const e=Array(t.length>>2)
for(var i=0;i<e.length;i++)e[i]=0
for(i=0;i<8*t.length;i+=8)e[i>>5]|=(255&t.charCodeAt(i/8))<<i%32
return e}function h(t){let e=""
for(let i=0;i<32*t.length;i+=8)e+=String.fromCharCode(t[i>>5]>>>i%32&255)
return e}function p(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e
let i=1732584193,n=-271733879,s=-1732584194,r=271733878
for(let e=0;e<t.length;e+=16){const o=i,a=n,h=s,p=r
i=u(i,n,s,r,t[e+0],7,-680876936),r=u(r,i,n,s,t[e+1],12,-389564586),s=u(s,r,i,n,t[e+2],17,606105819),n=u(n,s,r,i,t[e+3],22,-1044525330),i=u(i,n,s,r,t[e+4],7,-176418897),r=u(r,i,n,s,t[e+5],12,1200080426),s=u(s,r,i,n,t[e+6],17,-1473231341),n=u(n,s,r,i,t[e+7],22,-45705983),i=u(i,n,s,r,t[e+8],7,1770035416),r=u(r,i,n,s,t[e+9],12,-1958414417),s=u(s,r,i,n,t[e+10],17,-42063),n=u(n,s,r,i,t[e+11],22,-1990404162),i=u(i,n,s,r,t[e+12],7,1804603682),r=u(r,i,n,s,t[e+13],12,-40341101),s=u(s,r,i,n,t[e+14],17,-1502002290),n=u(n,s,r,i,t[e+15],22,1236535329),i=c(i,n,s,r,t[e+1],5,-165796510),r=c(r,i,n,s,t[e+6],9,-1069501632),s=c(s,r,i,n,t[e+11],14,643717713),n=c(n,s,r,i,t[e+0],20,-373897302),i=c(i,n,s,r,t[e+5],5,-701558691),r=c(r,i,n,s,t[e+10],9,38016083),s=c(s,r,i,n,t[e+15],14,-660478335),n=c(n,s,r,i,t[e+4],20,-405537848),i=c(i,n,s,r,t[e+9],5,568446438),r=c(r,i,n,s,t[e+14],9,-1019803690),s=c(s,r,i,n,t[e+3],14,-187363961),n=c(n,s,r,i,t[e+8],20,1163531501),i=c(i,n,s,r,t[e+13],5,-1444681467),r=c(r,i,n,s,t[e+2],9,-51403784),s=c(s,r,i,n,t[e+7],14,1735328473),n=c(n,s,r,i,t[e+12],20,-1926607734),i=l(i,n,s,r,t[e+5],4,-378558),r=l(r,i,n,s,t[e+8],11,-2022574463),s=l(s,r,i,n,t[e+11],16,1839030562),n=l(n,s,r,i,t[e+14],23,-35309556),i=l(i,n,s,r,t[e+1],4,-1530992060),r=l(r,i,n,s,t[e+4],11,1272893353),s=l(s,r,i,n,t[e+7],16,-155497632),n=l(n,s,r,i,t[e+10],23,-1094730640),i=l(i,n,s,r,t[e+13],4,681279174),r=l(r,i,n,s,t[e+0],11,-358537222),s=l(s,r,i,n,t[e+3],16,-722521979),n=l(n,s,r,i,t[e+6],23,76029189),i=l(i,n,s,r,t[e+9],4,-640364487),r=l(r,i,n,s,t[e+12],11,-421815835),s=l(s,r,i,n,t[e+15],16,530742520),n=l(n,s,r,i,t[e+2],23,-995338651),i=f(i,n,s,r,t[e+0],6,-198630844),r=f(r,i,n,s,t[e+7],10,1126891415),s=f(s,r,i,n,t[e+14],15,-1416354905),n=f(n,s,r,i,t[e+5],21,-57434055),i=f(i,n,s,r,t[e+12],6,1700485571),r=f(r,i,n,s,t[e+3],10,-1894986606),s=f(s,r,i,n,t[e+10],15,-1051523),n=f(n,s,r,i,t[e+1],21,-2054922799),i=f(i,n,s,r,t[e+8],6,1873313359),r=f(r,i,n,s,t[e+15],10,-30611744),s=f(s,r,i,n,t[e+6],15,-1560198380),n=f(n,s,r,i,t[e+13],21,1309151649),i=f(i,n,s,r,t[e+4],6,-145523070),r=f(r,i,n,s,t[e+11],10,-1120210379),s=f(s,r,i,n,t[e+2],15,718787259),n=f(n,s,r,i,t[e+9],21,-343485551),i=y(i,o),n=y(n,a),s=y(s,h),r=y(r,p)}return Array(i,n,s,r)}function d(t,e,i,n,s,r){return y((o=y(y(e,t),y(n,r)))<<(a=s)|o>>>32-a,i)
var o,a}function u(t,e,i,n,s,r,o){return d(e&i|~e&n,t,e,s,r,o)}function c(t,e,i,n,s,r,o){return d(e&n|i&~n,t,e,s,r,o)}function l(t,e,i,n,s,r,o){return d(e^i^n,t,e,s,r,o)}function f(t,e,i,n,s,r,o){return d(i^(e|~n),t,e,s,r,o)}function y(t,e){const i=(65535&t)+(65535&e)
return(t>>16)+(e>>16)+(i>>16)<<16|65535&i}t.exports={encrypt:n}},VAKy:function(t,e,i){"use strict"
function n(){this.events={}}i.r(e),n.decorate=function(t){t.messenger=new n,t.addEventListener=function(e,i){t.messenger.addEventListener(e,i)},t.dispatchEvent=function(e,i,n){t.messenger.dispatchEvent(e,i,n)},t.removeEventListener=function(e,i){t.messenger.removeEventListener(e,i)}},n.prototype.killAllListeners=function(t){if(!this.events[t])return!1
this.events[t]=[]},n.prototype.destroy=function(){this.events={}},n.prototype.dispatchEvent=function(t,e,i){this.events[t]&&this.events[t].forEach(t=>{t.call(i,e)})},n.prototype.addEventListener=function(t,e){return!!e&&(this.events[t]||(this.events[t]=[]),this.events[t].push(e),e)},n.prototype.removeEventListener=function(t,e){if(this.events[t]){const i=this.events[t],n=[]
this.events[t].forEach((t,i)=>{t===e&&n.push(i)}),n.length>0&&n.forEach(t=>{i.splice(t,1)})}}
var s=n,r=new s
function o(){}o.prototype.parseXML=function(t){return this.$xml=$(t),this.determineError(),this.$xml},o.prototype.determineError=function(){this.isError=!!this.find("error").children().length},o.prototype.find=function(t){return this.$xml.find(t)},o.prototype.findRecursive=function(t){t=t.split(":")
let e,i=this.$xml
for(let n=0,s=t.length;n<s;n++){if(e=i.find(t[n])[0],!e){i=void 0
break}i=$(e)}return i},o.prototype.nodeText=function(t,e,i){let n
return""!=e.find(t).text()&&(n=e.find(t).text(),!0===i&&(n=parseFloat(n))),n}
var a=o
function h(){this.xml=void 0,this.isError=!0,this.token=void 0,this.filename="",this.fileId=-1,this.xmlParser=new a}h.prototype.parseXML=function(t){this.xmlParser.parseXML(t)
this.isError=this.xmlParser.isError,this.xmlParser.isError||this.pullData()},h.prototype.pullData=function(){const t=this.xmlParser.find("result_ok")
this.token=this.xmlParser.nodeText("token",t,!0),this.fileId=this.xmlParser.nodeText("filename",t,!0),this.filename=this.xmlParser.nodeText("origFilename",t)},h.prototype.asEntryParams=function(){return{entry1_name:this.filename,entry1_filename:this.fileId,entry1_realFilename:this.filename}}
var p=h,d=i("58Nq"),u=i.n(d),c=function(t){let e=[]
for(const i in t)e.push(i)
e=e.sort()
let i=""
return e.forEach(e=>{i+=e,i+=t[e]}),u.a.encrypt(i)},l=function(t){let e="?"
for(const i in t)e+=i+"="+encodeURIComponent(t[i])+"&"
return e=e.substring(0,e.length-1),e}
var f=function(t,e,i){(function(t,e){return t&&void 0!==t[e]})(i,t)&&(e[t]=i[t])}
function y(){}y.prototype.setOptions=function(t){this.mergeDefaults(t)},y.prototype.mergeDefaults=function(t){this.allowedMediaTypes=["video","audio"],this.sessionUrl="/api/v1/services/kaltura_session",this.uploadUrl="",this.entryUrl="",this.uiconfUrl="",this.entryDefaults={partnerData:"{'context_code': 'some_course_num', 'root_account'_id':1}",conversionProfile:2,source:1,kshow_id:-1,quick_edit:!0},f("allowedMediaTypes",this,t),f("sessionUrl",this,t),f("uploadUrl",this,t),f("entryUrl",this,t),f("uiconfUrl",this,t),f("partnerData",this.entryDefaults,t.entryDefaults),f("conversionProfile",this.entryDefaults,t.entryDefaults),f("source",this.entryDefaults,t.entryDefaults),f("kshow_id",this.entryDefaults,t.entryDefaults),f("quick_edit",this.entryDefaults,t.entryDefaults)},y.prototype.asEntryParams=function(){return{entry1_partnerData:this.entryDefaults.partnerData,entry1_conversionProfile:this.entryDefaults.conversionProfile,entry1_source:this.entryDefaults.source,kshow_id:this.entryDefaults.kshow_id,quick_edit:this.entryDefaults.quick_edit}}
var m=new y
function v(){this.settings,this.file,this.xhr}v.id=1,v.prototype.createRequest=function(){const t=new XMLHttpRequest
return t.open("POST",this.createUrl()),t.responseType="xml",t},v.prototype.createFormData=function(){const t=new FormData
return t.append("Filename",this.file.name),t.append("Filedata",this.file),t.append("Upload","Submit Query"),t},v.prototype.createFileId=function(){return v.id+=1,Date.now().toString()+v.id.toString()},v.prototype.createUrl=function(){const t=this.settings.getSession()
return t.filename=this.createFileId(),t.kalsig=this.createSignature(),m.uploadUrl+l(t)},v.prototype.createSignature=function(){return c(this.settings.getSession())},v.prototype.buildRequest=function(t,e){return this.settings=t,this.file=e,this.createRequest()},v.prototype.getFile=function(){return this.file},v.prototype.getSettings=function(){return this.settings}
var x=v
function E(){this.xhr=new XMLHttpRequest,this.uploadResult=new p}E.prototype.isAvailable=function(){return!!this.xhr.upload},E.prototype.send=function(t,e){const i=new x
this.xhr=i.buildRequest(t,e),this.addEventListeners(),this.xhr.send(i.createFormData())},E.prototype.addEventListeners=function(){this.xhr.upload.addEventListener("progress",this.eventProxy.bind(this.xhr)),this.xhr.upload.addEventListener("load",this.eventProxy.bind(this.xhr)),this.xhr.upload.addEventListener("error",this.eventProxy.bind(this.xhr)),this.xhr.upload.addEventListener("abort",this.eventProxy.bind(this.xhr)),this.xhr.onload=this.onload.bind(this)},E.prototype.onload=function(t){this.uploadResult.parseXML(this.xhr.response)
const e=this.uploadResult.isError?"error":"success"
r.dispatchEvent("Uploader."+e,this.uploadResult)},E.prototype.eventProxy=function(t){const e="Uploader."+t.type
r.dispatchEvent(e,t,this)}
var g=E
function S(){this.ks="",this.subp_id="",this.partner_id="",this.uid="",this.serverTime=0}S.prototype.setSession=function(t){t&&(f("ks",this,t),f("subp_id",this,t),f("partner_id",this,t),f("uid",this,t),f("serverTime",this,t),f("ui_conf_id",this,t))},S.prototype.getSession=function(){return{ks:this.ks,subp_id:this.subp_id,partner_id:this.partner_id,uid:this.uid,serverTime:this.serverTime,ui_conf_id:this.ui_conf_id}},S.prototype.asEntryParams=function(){return this.getSession()}
var b=S
function L(){this.sessionData=new b}L.prototype.loadSession=function(){const t=new XMLHttpRequest
t.open("POST",m.sessionUrl,!0),t.responseType="json",t.onload=this.onSessionLoaded.bind(this),t.send()},L.prototype.onSessionLoaded=function(t){const e=t.target
200==e.status?(this.sessionData.setSession(e.response),r.dispatchEvent("SessionManager.complete",this.sessionData,this)):r.dispatchEvent("SessionManager.error")},L.prototype.getSession=function(){return this.sessionData}
function F(){this.xmlParser=new a}F.prototype.addEntry=function(t){this.formData=function(t){if(!t)return t
const e={}
return(t=t.reverse()).forEach(t=>{for(const i in t)e[i]=t[i]}),e}(t),this.createEntryRequest()},F.prototype.createEntryRequest=function(){const t=this.formData
t.kalsig=c(t),this.xhr=new XMLHttpRequest,this.xhr.open("GET",m.entryUrl+l(t)),this.xhr.requestType="xml",this.xhr.onload=this.onEntryRequestLoaded.bind(this),this.xhr.send(t)},F.prototype.onEntryRequestLoaded=function(t){if(this.xmlParser.parseXML(this.xhr.response),e=this.xmlParser.findRecursive("result:entries:entry1_")){var e={id:e.find("id").text(),type:e.find("type").text(),title:e.find("name").text(),context_code:e.find("partnerData").text(),mediaType:e.find("mediatype").text(),entryId:e.find("id").text(),userTitle:void 0}
r.dispatchEvent("Entry.success",e,this)}else r.dispatchEvent("Entry.fail",this.xhr.response,this)}
var U=F
function _(t){this.fileFilters=[],this.maxUploads=t.maxUploads,this.maxFileSize=t.maxFileSize,this.maxTotalSize=t.maxTotalSize}_.prototype.addFileFilter=function(t){this.fileFilters.push(t)},_.prototype.filterFor=function(t){let e,i
const n=t.split(".").pop()
for(let t=0,s=this.fileFilters.length;t<s;t++)if(i=this.fileFilters[t],i.includesExtension(n)){e=i
break}return e},_.prototype.asEntryParams=function(t){return this.filterFor(t).toParams()},_.prototype.acceptableFileSize=function(t){return 1024*this.maxFileSize*1024>t},_.prototype.acceptableFileType=function(t,e){const i=this.filterFor(t)
return!!i&&-1!==e.indexOf(i.id)},_.prototype.acceptableFile=function(t,e){const i=this.acceptableFileType(t.name,e),n=this.acceptableFileSize(t.size)
return i&&n}
var w=_
function P(t){this.extensions=this.parseExtensions(t.extensions),this.id=t.id,this.description=t.description,this.entryType=t.entryType,this.mediaType=t.mediaType,this.type=t.type}P.prototype.parseExtensions=function(t){return t.split(";").map(t=>t.substring(2))},P.prototype.includesExtension=function(t){return-1!==this.extensions.indexOf(t.toLowerCase())},P.prototype.toParams=function(){return{entry1_type:this.entryType,entry1_mediaType:this.mediaType}}
var T=P,D=function(t){const e=t.find("limits"),i=new w({maxUploads:e.attr("maxUploads"),maxFileSize:e.attr("maxFileSize"),maxTotalSize:e.attr("maxTotalSize")}),n=t.find("fileFilters").children()
for(let t=0,e=n.length;t<e;t++){const e=(s=n[t],new T({id:s.getAttribute("id"),description:s.getAttribute("description"),entryType:s.getAttribute("entryType"),mediaType:s.getAttribute("mediaType"),type:s.getAttribute("type"),extensions:s.getAttribute("extensions")}))
i.addFileFilter(e)}var s
return i}
function C(){this.xmlParser=new a}C.prototype.load=function(t){const e=t.getSession()
e.kalsig=c(e),this.xhr=new XMLHttpRequest,this.xhr.open("GET",m.uiconfUrl+l(e)),this.xhr.addEventListener("load",this.onXhrLoad.bind(this)),this.xhr.send(e)},C.prototype.createUiConfig=function(t){this.config=D(t)},C.prototype.onXhrLoad=function(t){this.xmlParser.parseXML(this.xhr.response)
const e=this.xmlParser.find("result").find("ui_conf").find("confFile").first().text()
e?(this.xmlParser=new a,this.xmlParser.parseXML(e),this.config=D(this.xmlParser),r.dispatchEvent("UiConf.complete",this.config,this)):r.dispatchEvent("UiConf.error",this.xhr.response,this)}
var k=C
function q(t){s.decorate(this),m.setOptions(t),this.buildDependencies(),this.addListeners(),this.session.setSession(t.kaltura_session),this.loadUiConf()}q.prototype.destroy=function(){r.destroy(),this.session=void 0,this.entryService=void 0,this.uiconfService=void 0},q.prototype.buildDependencies=function(){this.session=new b,this.entryService=new U,this.uiconfService=new k},q.prototype.addListeners=function(){r.addEventListener("UiConf.error",this.onUiConfError.bind(this)),r.addEventListener("UiConf.complete",this.onUiConfComplete.bind(this)),r.addEventListener("Uploader.error",this.onUploadError.bind(this)),r.addEventListener("Uploader.success",this.onUploadSuccess.bind(this)),r.addEventListener("Uploader.progress",this.onProgress.bind(this)),r.addEventListener("Entry.success",this.onEntrySuccess.bind(this)),r.addEventListener("Entry.fail",this.onEntryFail.bind(this))},q.prototype.onSessionLoaded=function(t){this.session=t,this.loadUiConf()},q.prototype.loadUiConf=function(){this.uiconfService.load(this.session)},q.prototype.onUiConfComplete=function(t){this.uiconfig=t,this.dispatchEvent("K5.ready",{},this)},q.prototype.uploadFile=function(t){if(this.file=t,t)if(this.uiconfig.acceptableFile(t,m.allowedMediaTypes)||["webm","video/webm","audio/webm"].includes(t.type))this.uploader=new g,this.uploader.send(this.session,t)
else{const e={maxFileSize:this.uiconfig.maxFileSize,file:t,allowedMediaTypes:m.allowedMediaTypes}
this.dispatchEvent("K5.fileError",e,this)}},q.prototype.onUploadSuccess=function(t){const e=[this.session.asEntryParams(),t.asEntryParams(),m.asEntryParams()]
this.entryService.addEntry(e)},q.prototype.onProgress=function(t){this.dispatchEvent("K5.progress",t,this)},q.prototype.onUploadError=function(t){this.dispatchEvent("K5.error",t,this)},q.prototype.onEntrySuccess=function(t){this.dispatchEvent("K5.complete",t,this)},q.prototype.onEntryFail=function(t){this.dispatchEvent("K5.error",t,this)},q.prototype.onUiConfError=function(t){this.dispatchEvent("K5.uiconfError",t,this)}
e.default=q}}])

//# sourceMappingURL=89-c-a8b9b24578.js.map