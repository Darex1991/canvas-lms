(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[86],{"0DDm":function(e,t,n){"use strict"
n.d(t,"a",(function(){return u}))
var i=n("VTBJ"),s=n("ouhR"),l=n.n(s),c=(n("jYyc"),n("ODXe")),r=n("GLiE"),a=n.n(r)
var o=function(e,t,n,s=(()=>{}),r=null){const o=l.a.Deferred(),u=[],d=()=>{s([]),o.reject()},h=function(e,t){const n=[]
let i=1
const s=(l,r)=>{r===i?(e&&e(l),a.a.isArray(l)?t.push(...l):t.push(l),i+=1):n.push([l,r])
const o=a.a.find(n,([e,t])=>t===i)
if(o){const e=Object(c.a)(o,2),t=e[0],n=e[1]
s(t,n)}}
return s}(n,u)
return l.a.ajaxJSON(e,"GET",t,(n,c)=>{h(n,1)
const a=c.getResponseHeader("Link").match(/<[^>]+>; *rel="last"/)
if(null===a)return s([]),void o.resolve(u)
const f=parseInt(a[0].match(/page=(\d+)/)[1],10)
if(1===f)return s([]),void o.resolve(u)
function m(e){return Object(i.a)({page:e},t)}function g(e){return t=>h(t,e)}const _=[]
if(null==r){const t=t=>l.a.ajaxJSON(e,"GET",m(t),g(t))
for(let e=2;e<=f;e++)_.push(t(e))}else for(let t=2;t<=f;t++){const n=r.getJSON(e,m(t),g(t))
_.push(n)}s(_),l.a.when(..._).then(()=>o.resolve(u),d)},d),o}
class u{constructor(e={}){this.options=Object(i.a)({activeRequestLimit:12},e),this.requests=[]}get activeRequestCount(){return this.requests.filter(e=>e.active).length}get nextPendingRequest(){return this.requests.find(e=>!e.active)}addRequest(e){this.requests.push(e),this.fillQueue()}clearRequest(e){this.requests=this.requests.filter(t=>t!==e),this.fillQueue()}fillQueue(){let e=this.nextPendingRequest
for(;null!=e&&this.activeRequestCount<this.options.activeRequestLimit;)e.start(),e=this.nextPendingRequest}getDepaginated(e,t,n=(()=>{}),i=(()=>{})){const s={deferred:new l.a.Deferred,active:!1},c=e=>(this.clearRequest(s),i(e))
return s.start=()=>{s.active=!0,o(e,t,n,c,this).then(s.deferred.resolve).fail(s.deferred.reject).always(()=>{this.clearRequest(s)})},this.addRequest(s),s.deferred}getJSON(e,t,n,i){const s={deferred:new l.a.Deferred,active:!1}
return s.start=()=>{s.active=!0,l.a.ajaxJSON(e,"GET",t,n,i).then(s.deferred.resolve).fail(s.deferred.reject).always(()=>{this.clearRequest(s)})},this.addRequest(s),s.deferred}}},B1vq:function(e,t,n){"use strict"
var i=n("ouhR"),s=n.n(i)
n("s/PJ")
s.a.fn.scrollToVisible=function(e){const t={},n=s()(e)
if(0===n.length)return
let i=n.offset(),l=n.outerWidth(),c=n.outerHeight(),r=i.top,a=r+c,o=i.left,u=o+l,d="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),m=this.outerWidth()
if("html,body"!=this.selector){let e=s()("body").offset()
this.each((function(){try{return e=s()(this).offset(),!1}catch(e){}})),r-=e.top,a-=e.top,o-=e.left,u-=e.left}return"HTML"!=this[0].tagName&&"BODY"!=this[0].tagName||(f=s()(window).height(),s()("#wizard_box:visible").length>0&&(f-=s()("#wizard_box:visible").height()),m=s()(window).width(),r-=d,o-=h,a-=d,u-=h),r<0||f<c&&a>f?t.scrollTop=r+d:a>f&&(t.scrollTop=a+d-f+20),o<0?t.scrollLeft=o+h:u>m&&(t.scrollLeft=u+h-m+20),1==t.scrollTop&&(t.scrollTop=0),1==t.scrollLeft&&(t.scrollLeft=0),this.scrollTop(t.scrollTop),this.scrollLeft(t.scrollLeft),this}},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu"),s=n("m0r6")
Object(s.a)(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR"),n("0sPK")
var l=i.default.scoped("instructure_misc_plugins"),c=n("ouhR"),r=n.n(c),a=n("5Ky4"),o=n("JD5e")
n("jYyc"),n("YGE8"),n("B1vq"),n("s/PJ")
r.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(a.a)(e)+"</option>":""
return null==t&&(t=[]),t.forEach(e=>{const t=Object(a.a)(e)
n+='<option value="'+t+'">'+t+"</option>"}),this.html(r.a.raw(n))},r.a.fn.ifExists=function(e){return this.length&&e.call(this,this),this},r.a.fn.scrollbarWidth=function(){const e=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div"),n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
return e.remove(),n-i},r.a.fn.dim=function(e){return this.animate({opacity:.4},e)},r.a.fn.undim=function(e){return this.animate({opacity:1},e)},r.a.fn.confirmDelete=function(e){e=r.a.extend({},r.a.fn.confirmDelete.defaults,e)
const t=this
let n=null,i=!0
e.noMessage=e.noMessage||e.no_message
const s=function(){if(i)if(e.confirmed||(e.confirmed=function(){t.dim()}),e.confirmed.call(t),e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(o.a)(),r.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,s,l)=>{e.error&&r.a.isFunction(e.error)?e.error.call(t,n,i,s,l):r.a.ajaxJSON.unhandledXHRs.push(i)})}else e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})}),e.success.call(t)
else e.cancelled&&r.a.isFunction(e.cancelled)&&e.cancelled.call(t)}
if(e.message&&!e.noMessage&&!r.a.skipConfirmations){if(e.dialog){i=!1
const t="object"==typeof e.dialog?e.dialog:{},c=e.url.includes("assignments")?"btn-danger":"btn-primary"
return void(n=r()(e.message).dialog(r.a.extend({},{modal:!0,close:s,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){r()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:c,click(){i=!0,r()(this).dialog("close")}}]},t)))}i=confirm(e.message)}s()},r.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}},r.a.fn.fragmentChange=function(e){if(e&&!0!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const s=this
let l=!1
for(t=0;t<r.a._checkFragments.fragmentList.length;t++){r.a._checkFragments.fragmentList[t].doc[0]==s[0]&&(l=!0)}l||r.a._checkFragments.fragmentList.push({doc:s,fragment:""}),r()(window).bind("hashchange",r.a._checkFragments),setTimeout(()=>{i&&i.length>0?s.triggerHandler("document_fragment_change",i):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this},r.a._checkFragments=function(){const e=r.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t],i=n.doc
i[0].location.hash!=n.fragment&&(i.triggerHandler("document_fragment_change",i[0].location.hash),n.fragment=i[0].location.hash,r.a._checkFragments.fragmentList[t]=n)}},r.a._checkFragments.fragmentList=[],r.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()},r.a.fn.showIf=function(e){return r.a.isFunction(e)?this.each((function(t){r()(this).showIf(e.call(this))})):(e?this.show():this.hide(),this)},r.a.fn.disableIf=function(e){return r.a.isFunction(e)&&(e=e.call(this)),this.prop("disabled",!!e),this},r.a.fn.indicate=function(e){let t
if("remove"==(e=e||{}))return t=this.data("indicator"),void(t&&t.remove())
r()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width(),s=this.height(),l=(e.container||this).zIndex()
t=r()(document.createElement("div")),t.css({width:i+6,height:s+6,top:n.top-3,left:n.left-3,zIndex:l+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"}),t.addClass("indicator_box"),t.mouseover((function(){r()(this).stop().fadeOut("fast",(function(){r()(this).remove()}))})),this.data("indicator")&&this.indicate("remove"),this.data("indicator",t),r()("body").append(t),e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){r()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){r()(this).remove()})),e&&e.scroll&&r()("html,body").scrollToVisible(t)},r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight},r.a.fn.log=function(e){return console.log("%s: %o",e,this),this},r.a.fn.fillWindowWithMe=function(e){const t=r.a.extend({minHeight:400},e),n=r()(this),i=r()("#wrapper"),s=r()("#main"),l=r()("#not_right_side"),c=r()(window),a=r()(this).add(t.alsoResize)
function o(){a.height(0)
const e=c.height()-(i.offset().top+i.outerHeight())+(s.height()-l.height()),o=Math.max(400,e)
a.height(o),r.a.isFunction(t.onResize)&&t.onResize.call(n,o)}return o(),c.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",o),this},r.a.fn.autoGrowInput=function(e){return e=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e),this.filter("input:text").each((function(){let t=e.minWidth||r()(this).width(),n="",i=r()(this),s=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"})
s.insertAfter(i),r()(this).bind("keyup keydown blur update change",(function(){setTimeout(()=>{if(n===(n=i.val()))return
s.text(n)
const l=s.width(),c=l+e.comfortZone>=t?l+e.comfortZone:t;(c<i.width()&&c>=t||c>t&&c<e.maxWidth)&&i.width(c)})}))})),this}
r.a}}])

//# sourceMappingURL=86-c-27b46b9944.js.map