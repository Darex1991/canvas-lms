(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[31],{"0jNN":function(e,t,a){"use strict"
var n=Object.prototype.hasOwnProperty,i=Array.isArray,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase())
return e}(),r=function(e,t){for(var a=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(a[n]=e[n])
return a}
e.exports={arrayToObject:r,assign:function(e,t){return Object.keys(t).reduce((function(e,a){return e[a]=t[a],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],a=[],n=0;n<t.length;++n)for(var o=t[n],r=o.obj[o.prop],s=Object.keys(r),l=0;l<s.length;++l){var _=s[l],c=r[_]
"object"==typeof c&&null!==c&&-1===a.indexOf(c)&&(t.push({obj:r,prop:_}),a.push(c))}return function(e){for(;e.length>1;){var t=e.pop(),a=t.obj[t.prop]
if(i(a)){for(var n=[],o=0;o<a.length;++o)void 0!==a[o]&&n.push(a[o])
t.obj[t.prop]=n}}}(t),e},decode:function(e,t,a){var n=e.replace(/\+/g," ")
if("iso-8859-1"===a)return n.replace(/%[0-9a-f]{2}/gi,unescape)
try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,a){if(0===e.length)return e
var n=e
if("symbol"==typeof e?n=Symbol.prototype.toString.call(e):"string"!=typeof e&&(n=String(e)),"iso-8859-1"===a)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}))
for(var i="",r=0;r<n.length;++r){var s=n.charCodeAt(r)
45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?i+=n.charAt(r):s<128?i+=o[s]:s<2048?i+=o[192|s>>6]+o[128|63&s]:s<55296||s>=57344?i+=o[224|s>>12]+o[128|s>>6&63]+o[128|63&s]:(r+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(r)),i+=o[240|s>>18]+o[128|s>>12&63]+o[128|s>>6&63]+o[128|63&s])}return i},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,a,o){if(!a)return t
if("object"!=typeof a){if(i(t))t.push(a)
else{if(!t||"object"!=typeof t)return[t,a];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,a))&&(t[a]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(a)
var s=t
return i(t)&&!i(a)&&(s=r(t,o)),i(t)&&i(a)?(a.forEach((function(a,i){if(n.call(t,i)){var r=t[i]
r&&"object"==typeof r&&a&&"object"==typeof a?t[i]=e(r,a,o):t.push(a)}else t[i]=a})),t):Object.keys(a).reduce((function(t,i){var r=a[i]
return n.call(t,i)?t[i]=e(t[i],r,o):t[i]=r,t}),s)}}},"60Hp":function(e,t,a){"use strict"
a.r(t),a.d(t,"uploadFile",(function(){return f})),a.d(t,"completeUpload",(function(){return p})),a.d(t,"submissionCommentAttachmentsUpload",(function(){return v})),a.d(t,"uploadFiles",(function(){return h}))
var n=a("x1Tw"),i=a("Qyje"),o=a.n(i),r=a("pQTu"),s=a("m0r6")
Object(s.a)(JSON.parse('{"ar":{"canvas_failed_to_complete_the_upload_864a4c0f":"فشل Canvas في إكمال التحميل.","canvas_failed_to_initiate_the_upload_8e3824d5":"فشل Canvas في بدء التحميل.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"يتعذر نقل الملف إلى خدمة التخزين. قد تكون الخدمة معطلة أو قد تحتاج إلى إعادة تسجيل الدخول إلى Canvas."},"cy":{"canvas_failed_to_complete_the_upload_864a4c0f":"Mae Canvas wedi methu cwblhau’r broses llwytho i fyny.","canvas_failed_to_initiate_the_upload_8e3824d5":"Mae Canvas wedi methu rhoi’r broses llwytho i fyny ar waith.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Doedd dim modd trosglwyddo ffeil i’r gwasanaeth storio. Efallai nad yw’r gwasanaeth ar gael ar hyn o bryd, neu efallai y bydd angen i chi fewngofnodi eto i Canvas."},"da":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke afslutte uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"da-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fuldføre uploaden.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke påbegynde uploaden.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre filen til lagertjenesten. Tjenesten kan være nede, eller du skal måske logge ind på Canvas igen."},"de":{"canvas_failed_to_complete_the_upload_864a4c0f":"Upload fehlgeschlagen","canvas_failed_to_initiate_the_upload_8e3824d5":"Initialisierung des Upload fehlgeschlagen","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Übertragung der Datei in den Speicher-Service ist fehlgeschlagen. Entweder ist der Service heruntergefahren oder Sie müssen sich erneut bei Canvas anmelden."},"en-AU":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"en-GB":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas failed to complete the upload.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas failed to initiate the upload.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."},"es":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas no pudo completar la carga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas no pudo iniciar la carga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"No se pudo transmitir el archivo al servicio de almacenamiento. Es posible que el servicio no esté funcionando o que tenga que volver a iniciar sesión en Canvas."},"fi":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas ei onnistunut suorittamaan latausta loppuun.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvasin latauksen aloitus epäonnistui.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Tiedoston siirto tallennuspalveluun epäonnistui. Palvelu saattaa olla alhaalla tai sinun täytyy ehkä kirjautua uudelleen Canvasiin."},"fr":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas n\'a pas réussi à terminer le téléchargement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pas réussi à lancer le téléchargement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible de transmettre le fichier au service de stockage. Le service peut être en panne ou vous devez peut-être vous reconnecter à Canvas."},"fr-CA":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas a échoué de conclure le téléversement.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas n\'a pu commencer le téléversement.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossible d’envoyer le fichier au service de stockage. Le service peut être inactif ou vous pourriez avoir besoin de vous connecter de nouveau à Canvas."},"ht":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas pa reyisi fini telechajman an.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas pa reyisi lanse telechajman an.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Enposib pou transmèt fichye nan sèvis estokaj la. Petèt ke sèvis la an pàn oswa ou ka bezwen rekonekte sou Canvas."},"hu":{"canvas_failed_to_complete_the_upload_864a4c0f":"A Canvas nem tudta a feladatot feltölteni.","canvas_failed_to_initiate_the_upload_8e3824d5":"A Canvas nem tudta elindítani a feltöltést.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nem sikerült elküldeni a fájlt a tár szolgáltatásnak. Lehet, hogy a szolgáltatás nem működik, vagy újra be kell lépnie a Canvas-ba."},"is":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas tókst ekki að klára upphalið","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas gat ekki byrjað upphalið.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Ekki tókst að senda skjal í geymslu. Annaðhvort liggur þjónustan niðri eða þú þarft að endurinnskrá þig á Canvas."},"it":{"canvas_failed_to_complete_the_upload_864a4c0f":"Impossibile completare il caricamento in Canvas.","canvas_failed_to_initiate_the_upload_8e3824d5":"Impossibile inizializzare il caricamento in Canvas.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Impossibile trasmettere il file al servizio di archiviazione. Il servizio potrebbe essere inattivo o potrebbe essere necessario effettuare nuovamente l\'accesso a Canvas."},"ja":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas はアップロードを完了できませんでした。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas はアップロードを開始できませんでした。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"ストレージサービスにファイルを送信できません。サービスが停止しているか、Canvas に再度ログインする必要があるかもしれません。"},"mi":{"canvas_failed_to_complete_the_upload_864a4c0f":"I rahua a Canvas ki te whakaoti i te tukuake.","canvas_failed_to_initiate_the_upload_8e3824d5":"I rahua a Canvas ki te tīmata i te tukuake.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kāore e taea te tuku kōnae ki te ratonga rokiroki. Ka mutu te ratonga, ka hiahia pea koe ki te whakauru atu anō ki Canvas."},"nb":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikke overføre fil til lagringsenhet. Denne tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nb-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikke fullføre opplastingen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikke starte opplastingen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kunne ikke overføre fil til lagringsenhet. Tjeneste kan være nede eller du må kanskje logge på Canvas på nytt."},"nl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kan de upload niet uitvoeren.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kan de upload niet initiëren.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan bestand niet overzetten naar de opslagservice. Misschien is de service niet geactiveerd of moet je je opnieuw aanmelden bij Canvas."},"nn":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunne ikkje fullføre opplastinga.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunne ikkje starte opplastinga.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Kan ikkje overføre fil til lagringsteneste. Tenesta kan vere nede eller du må logge inn i Canvas på nytt."},"pl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas nie może ukończyć przesyłania.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas nie może rozpocząć przesyłania.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Nie można przesłać pliku do usługi przechowywania. Usługa może być niedostępna lub wymagane jest ponowne zalogowanie w Canvas."},"pt":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou ao concluir o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou ao iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Não é possível transmitir o ficheiro para o serviço de armazenamento. O serviço pode estar inativo ou você pode precisar fazer o login novamente no Canvas."},"pt-BR":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas falhou em importar o carregamento.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas falhou em iniciar o carregamento.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Incapaz de transmitir o arquivo para o serviço de armazenamento. O serviço pode estar interrompido ou você precisa fazer login novamente no Canvas."},"ru":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas не удается завершить отправку.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas не удается запустить отправку.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Невозможно передать файл на устройство хранения. Сервис может быть отключен, или вам может быть необходимо выйти и снова войти в Canvas."},"sl":{"canvas_failed_to_complete_the_upload_864a4c0f":"Zaključevanje nalaganja v sistemu Canvas ni uspelo.","canvas_failed_to_initiate_the_upload_8e3824d5":"Zagon nalaganja v sistemu Canvas ni uspel.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Datoteke ni mogoče prenesti v storitev shranjevanja. Storitev morda ne deluje ali pa se morate znova prijaviti v sistem Canvas."},"sv":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"sv-x-k12":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas kunde inte slutföra uppladdningen.","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas kunde inte initiera uppladdningen.","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"Det går inte att överföra filen till lagringstjänsten. Tjänsten kan ligga nere, eller kan du behöva logga in till Canvas på nytt."},"zh-Hans":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 无法完成上传。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 无法启动上传。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"无法将文件传输到存储服务。服务可能中断，或者您可能需要重新登录到 Canvas。"},"zh-Hant":{"canvas_failed_to_complete_the_upload_864a4c0f":"Canvas 無法完成上傳。","canvas_failed_to_initiate_the_upload_8e3824d5":"Canvas 無法啟動上傳。","unable_to_transmit_file_to_the_storage_service_the_2d80b29e":"無法將檔案傳輸到儲存空間服務。該服務可能已關閉，或者您可能需要重新登入 Canvas。"}}'))
a("jQeR"),a("0sPK")
var l=r.default.scoped("upload_file"),_=a("jpBB")
function c(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to initiate the upload."))
return t.originalError=e,Promise.reject(t)}return Promise.reject(e)}function u(e){if("Network Error"===e.message){const t=new Error(l.t("Unable to transmit file to the storage service. The service may be down or you may need to re-login to Canvas."))
return t.originalError=e,Promise.reject(t)}return Promise.reject(e)}function d(e){if("Network Error"===e.message){const t=new Error(l.t("Canvas failed to complete the upload."))
return t.originalError=e,Promise.reject(t)}return Promise.reject(e)}function f(e,t,a,i=n.a){if(!a&&!t.url)throw new Error("expected either a file to upload or a url to clone",{file:a,preflightData:t})
if(a&&t.url)throw new Error("can't upload with both a file object and a url to clone",{file:a,preflightData:t})
return t.no_redirect=!0,t["attachment[context_code]"]&&(t=o.a.stringify(t)),i.post(e,t).catch(c).then(e=>p(e.data,a,{ajaxLib:i}))}function p(e,t,a={}){const i=a.ajaxLib||n.a
if(e&&e.attachments&&e.attachments[0]&&(e=e.attachments[0]),!e)throw new Error("expected a preflightResponse")
if(t&&!e.upload_url)throw new Error("expected a preflightResponse with an upload_url",{preflightResponse:e})
if(!t&&!e.progress)throw new Error("expected a preflightResponse with a progress",{preflightResponse:e})
const r=e,s=r.upload_url,l=r.progress
if(!s)return Object(_.a)(l,{ajaxLib:i}).catch(d)
let c=e,f=c.file_param,p=c.upload_params,v=c.success_url
f=f||"file",p=p||{},v=v||p.success_url
const h=!!v,m=new FormData
return Object.entries(p).forEach(([e,t])=>m.append(e,t)),t&&m.append(f,t,a.filename),i.post(s,m,{responseType:h?"document":"json",onUploadProgress:a.onProgress,withCredentials:!h}).catch(u).then(e=>{if(l)return Object(_.a)(l,{ajaxLib:i}).catch(d)
let t,n={}
if(v){const a=e.data,i=a.Bucket,o=a.Key,r=a.ETag
t=v,n={bucket:i,key:o,etag:r}}else 201!==e.status||a.ignoreResult||(t=e.data.location,n={})
return t?(a.includeAvatar&&(n.include="avatar"),n=o.a.stringify(n),n&&(t=-1!==t.indexOf("?")?"".concat(t,"&").concat(n):"".concat(t,"?").concat(n)),i.get(t).then(({data:e})=>e).catch(d)):e.data})}function v(e,t,a){const n="/api/v1/courses/".concat(t,"/assignments/").concat(a,"/submissions/self/comments/files"),i=e.map(e=>{const t={name:e.name,content_type:e.type}
return f(n,t,e)})
return Promise.all(i)}function h(e,t){const a=e.map(e=>e.url?f(t,{url:e.url,name:e.title,content_type:e.mediaType,submit_assignment:!1}):f(t,{name:e.name,content_type:e.type},e))
return Promise.all(a)}},QSc6:function(e,t,a){"use strict"
var n=a("0jNN"),i=a("sxOR"),o=Object.prototype.hasOwnProperty,r={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,l=Array.prototype.push,_=function(e,t){l.apply(e,s(t)?t:[t])},c=Date.prototype.toISOString,u=i.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:u,formatter:i.formatters[u],indices:!1,serializeDate:function(e){return c.call(e)},skipNulls:!1,strictNullHandling:!1},f=function e(t,a,i,o,r,l,c,u,f,p,v,h,m){var g,b=t
if("function"==typeof c?b=c(a,b):b instanceof Date?b=p(b):"comma"===i&&s(b)&&(b=b.join(",")),null===b){if(o)return l&&!h?l(a,d.encoder,m,"key"):a
b=""}if("string"==typeof(g=b)||"number"==typeof g||"boolean"==typeof g||"symbol"==typeof g||"bigint"==typeof g||n.isBuffer(b))return l?[v(h?a:l(a,d.encoder,m,"key"))+"="+v(l(b,d.encoder,m,"value"))]:[v(a)+"="+v(String(b))]
var y,k=[]
if(void 0===b)return k
if(s(c))y=c
else{var C=Object.keys(b)
y=u?C.sort(u):C}for(var j=0;j<y.length;++j){var w=y[j]
r&&null===b[w]||(s(b)?_(k,e(b[w],"function"==typeof i?i(a,w):a,i,o,r,l,c,u,f,p,v,h,m)):_(k,e(b[w],a+(f?"."+w:"["+w+"]"),i,o,r,l,c,u,f,p,v,h,m)))}return k}
e.exports=function(e,t){var a,n=e,l=function(e){if(!e)return d
if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.")
var t=e.charset||d.charset
if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var a=i.default
if(void 0!==e.format){if(!o.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.")
a=e.format}var n=i.formatters[a],r=d.filter
return("function"==typeof e.filter||s(e.filter))&&(r=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:void 0===e.delimiter?d.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:d.encode,encoder:"function"==typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}}(t)
"function"==typeof l.filter?n=(0,l.filter)("",n):s(l.filter)&&(a=l.filter)
var c,u=[]
if("object"!=typeof n||null===n)return""
c=t&&t.arrayFormat in r?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices"
var p=r[c]
a||(a=Object.keys(n)),l.sort&&a.sort(l.sort)
for(var v=0;v<a.length;++v){var h=a[v]
l.skipNulls&&null===n[h]||_(u,f(n[h],h,p,l.strictNullHandling,l.skipNulls,l.encode?l.encoder:null,l.filter,l.sort,l.allowDots,l.serializeDate,l.formatter,l.encodeValuesOnly,l.charset))}var m=u.join(l.delimiter),g=!0===l.addQueryPrefix?"?":""
return l.charsetSentinel&&("iso-8859-1"===l.charset?g+="utf8=%26%2310003%3B&":g+="utf8=%E2%9C%93&"),m.length>0?g+m:""}},Qyje:function(e,t,a){"use strict"
var n=a("QSc6"),i=a("nmq7"),o=a("sxOR")
e.exports={formats:o,parse:i,stringify:n}},jpBB:function(e,t,a){"use strict"
a.d(t,"a",(function(){return i}))
var n=a("x1Tw")
function i(e,t={}){const a=t.ajaxLib||n.a,o=e.url,r=e.workflow_state,s=e.results,l=e.message
if("queued"===r||"running"===r){let e=t.interval
return e||(e=1e3),e<100&&(e=100),function(e){return new Promise(t=>{setTimeout(t,e)})}(e).then(()=>a.get(o)).then(e=>i(e.data,t))}return"completed"===r?Promise.resolve(s):Promise.reject(l)}},nmq7:function(e,t,a){"use strict"
var n=a("0jNN"),i=Object.prototype.hasOwnProperty,o=Array.isArray,r={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},l=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},_=function(e,t){if(o(e)){for(var a=[],n=0;n<e.length;n+=1)a.push(t(e[n]))
return a}return t(e)},c=function(e,t,a,n){if(e){var o=a.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,r=/(\[[^[\]]*])/g,s=a.depth>0&&/(\[[^[\]]*])/.exec(o),_=s?o.slice(0,s.index):o,c=[]
if(_){if(!a.plainObjects&&i.call(Object.prototype,_)&&!a.allowPrototypes)return
c.push(_)}for(var u=0;a.depth>0&&null!==(s=r.exec(o))&&u<a.depth;){if(u+=1,!a.plainObjects&&i.call(Object.prototype,s[1].slice(1,-1))&&!a.allowPrototypes)return
c.push(s[1])}return s&&c.push("["+o.slice(s.index)+"]"),function(e,t,a,n){for(var i=n?t:l(t,a),o=e.length-1;o>=0;--o){var r,s=e[o]
if("[]"===s&&a.parseArrays)r=[].concat(i)
else{r=a.plainObjects?Object.create(null):{}
var _="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(_,10)
a.parseArrays||""!==_?!isNaN(c)&&s!==_&&String(c)===_&&c>=0&&a.parseArrays&&c<=a.arrayLimit?(r=[])[c]=i:r[_]=i:r={0:i}}i=r}return i}(c,t,a,n)}}
e.exports=function(e,t){var a=function(e){if(!e)return r
if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.")
if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined")
var t=void 0===e.charset?r.charset:e.charset
return{allowDots:void 0===e.allowDots?r.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:r.allowPrototypes,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:r.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:r.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:r.comma,decoder:"function"==typeof e.decoder?e.decoder:r.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:r.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:r.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:r.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:r.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:r.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:r.strictNullHandling}}(t)
if(""===e||null==e)return a.plainObjects?Object.create(null):{}
for(var u="string"==typeof e?function(e,t){var a,c={},u=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,d=Infinity===t.parameterLimit?void 0:t.parameterLimit,f=u.split(t.delimiter,d),p=-1,v=t.charset
if(t.charsetSentinel)for(a=0;a<f.length;++a)0===f[a].indexOf("utf8=")&&("utf8=%E2%9C%93"===f[a]?v="utf-8":"utf8=%26%2310003%3B"===f[a]&&(v="iso-8859-1"),p=a,a=f.length)
for(a=0;a<f.length;++a)if(a!==p){var h,m,g=f[a],b=g.indexOf("]="),y=-1===b?g.indexOf("="):b+1;-1===y?(h=t.decoder(g,r.decoder,v,"key"),m=t.strictNullHandling?null:""):(h=t.decoder(g.slice(0,y),r.decoder,v,"key"),m=_(l(g.slice(y+1),t),(function(e){return t.decoder(e,r.decoder,v,"value")}))),m&&t.interpretNumericEntities&&"iso-8859-1"===v&&(m=s(m)),g.indexOf("[]=")>-1&&(m=o(m)?[m]:m),i.call(c,h)?c[h]=n.combine(c[h],m):c[h]=m}return c}(e,a):e,d=a.plainObjects?Object.create(null):{},f=Object.keys(u),p=0;p<f.length;++p){var v=f[p],h=c(v,u[v],a,"string"==typeof e)
d=n.merge(d,h,a)}return n.compact(d)}},sxOR:function(e,t,a){"use strict"
var n=String.prototype.replace,i=/%20/g,o=a("0jNN"),r={RFC1738:"RFC1738",RFC3986:"RFC3986"}
e.exports=o.assign({default:r.RFC3986,formatters:{RFC1738:function(e){return n.call(e,i,"+")},RFC3986:function(e){return String(e)}}},r)}}])

//# sourceMappingURL=31-c-11d8259c06.js.map