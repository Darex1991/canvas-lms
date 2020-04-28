(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[521],{"0uoZ":function(e,t,i){"use strict"
i.r(t)
var n=i("ouhR"),s=i.n(n)
i("YGE8"),i("p6Wi"),i("7LJr")
s()(".visibility_help_link").live("click",e=>{e.preventDefault()
let t=s()("#visibility_help_dialog")
0===t.length&&(t=s()("<div/>").attr("id","visibility_help_dialog").hide().appendTo("body").dialog({autoOpen:!1,title:"",width:330}),s()("#course_course_visibility option").each((e,i)=>{t.append(s()("<div/>").append(s()("<b/>",{text:i.innerText}))),t.append(s()("<div/>",{text:ENV.COURSE_VISIBILITY_OPTION_DESCRIPTIONS[i.value]||""}))})),t.dialog("open")})},"7LJr":function(e,t,i){"use strict"
var n=i("ouhR"),s=i.n(n)
s.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let i
if("hide"===e||"remove"===e)return t.children(".loading_image").remove(),i=t.data("loading_images")||[],i.forEach(e=>{e&&e.remove()}),t.data("loading_images",null),this
if("remove_once"===e){t.children(".loading_image").remove(),i=t.data("loading_images")||[]
const e=i.pop()
return e&&e.remove(),t.data("loading_images",i),this}"register_image"==e&&3==arguments.length&&(s.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]),e=s.a.extend({},s.a.fn.loadingImg.defaults,e)
let n=s.a.fn.loadingImg.image_files.normal
e.image_size&&s.a.fn.loadingImg.image_files[e.image_size]&&(n=s.a.fn.loadingImg.image_files[e.image_size]),e.paddingTop&&(e.vertical=e.paddingTop)
let l=0
e.vertical&&("top"==e.vertical||("bottom"==e.vertical?l=t.outerHeight():"middle"==e.vertical?l=t.outerHeight()/2-n.height/2:(l=parseInt(e.vertical,10),isNaN(l)&&(l=0))))
let a=0
e.horizontal&&("left"==e.horizontal||("right"==e.horizontal?a=t.outerWidth()-n.width:"middle"==e.horizontal?a=t.outerWidth()/2-n.width/2:(a=parseInt(e.horizontal,10),isNaN(a)&&(a=0))))
const o=t.zIndex()+1,c=s()(document.createElement("div")).addClass("loading_image_holder"),r=s()(document.createElement("img")).attr("src",n.url)
if(c.append(r),i=t.data("loading_images")||[],i.push(c),t.data("loading_images",i),t.css("position")&&"static"!=t.css("position"))c.css({zIndex:o,position:"absolute",top:l,left:a}),t.append(c)
else{const i=t.offset()
let n=i.top,r=i.left
e.vertical&&(n+=l),e.horizontal&&(r+=a),c.css({zIndex:o,position:"absolute",top:n,left:r}),s()("body").append(c)}return s()(this)},s.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0},s.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}},s.a.fn.loadingImage=s.a.fn.loadingImg},B1vq:function(e,t,i){"use strict"
var n=i("ouhR"),s=i.n(n)
i("s/PJ")
s.a.fn.scrollToVisible=function(e){const t={},i=s()(e)
if(0===i.length)return
let n=i.offset(),l=i.outerWidth(),a=i.outerHeight(),o=n.top,c=o+a,r=n.left,u=r+l,d="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),g=this.outerWidth()
if("html,body"!=this.selector){let e=s()("body").offset()
this.each((function(){try{return e=s()(this).offset(),!1}catch(e){}})),o-=e.top,c-=e.top,r-=e.left,u-=e.left}return"HTML"!=this[0].tagName&&"BODY"!=this[0].tagName||(f=s()(window).height(),s()("#wizard_box:visible").length>0&&(f-=s()("#wizard_box:visible").height()),g=s()(window).width(),o-=d,r-=h,c-=d,u-=h),o<0||f<a&&c>f?t.scrollTop=o+d:c>f&&(t.scrollTop=c+d-f+20),r<0?t.scrollLeft=r+h:u>g&&(t.scrollLeft=u+h-g+20),1==t.scrollTop&&(t.scrollTop=0),1==t.scrollLeft&&(t.scrollLeft=0),this.scrollTop(t.scrollTop),this.scrollLeft(t.scrollLeft),this}},p6Wi:function(e,t,i){"use strict"
var n=i("pQTu"),s=i("m0r6")
Object(s.a)(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
i("jQeR"),i("0sPK")
var l=n.default.scoped("instructure_misc_plugins"),a=i("ouhR"),o=i.n(a),c=i("5Ky4"),r=i("JD5e")
i("jYyc"),i("YGE8"),i("B1vq"),i("s/PJ")
o.a.fn.setOptions=function(e,t){let i=e?"<option value=''>"+Object(c.a)(e)+"</option>":""
return null==t&&(t=[]),t.forEach(e=>{const t=Object(c.a)(e)
i+='<option value="'+t+'">'+t+"</option>"}),this.html(o.a.raw(i))},o.a.fn.ifExists=function(e){return this.length&&e.call(this,this),this},o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div"),i=t.innerWidth()
e.css("overflow-y","scroll")
const n=t.innerWidth()
return e.remove(),i-n},o.a.fn.dim=function(e){return this.animate({opacity:.4},e)},o.a.fn.undim=function(e){return this.animate({opacity:1},e)},o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let i=null,n=!0
e.noMessage=e.noMessage||e.no_message
const s=function(){if(n)if(e.confirmed||(e.confirmed=function(){t.dim()}),e.confirmed.call(t),e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const n=e.prepareData?e.prepareData.call(t,i):{}
n.authenticity_token=Object(r.a)(),o.a.ajaxJSON(e.url,"DELETE",n,i=>{e.success.call(t,i)},(i,n,s,l)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,i,n,s,l):o.a.ajaxJSON.unhandledXHRs.push(n)})}else e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})}),e.success.call(t)
else e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){n=!1
const t="object"==typeof e.dialog?e.dialog:{},a=e.url.includes("assignments")?"btn-danger":"btn-primary"
return void(i=o()(e.message).dialog(o.a.extend({},{modal:!0,close:s,buttons:[{text:l.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:l.t("#buttons.delete","Delete"),class:a,click(){n=!0,o()(this).dialog("close")}}]},t)))}n=confirm(e.message)}s()},o.a.fn.confirmDelete.defaults={get message(){return l.t("confirms.default_delete_thing","Are you sure you want to delete this?")}},o.a.fn.fragmentChange=function(e){if(e&&!0!==e){const i=(window.location.search||"").replace(/^\?/,"").split("&")
let n=null
for(var t=0;t<i.length;t++){const e=i[t]
e&&0===e.indexOf("hash=")&&(n="#"+e.substring(5))}this.bind("document_fragment_change",e)
const s=this
let l=!1
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){o.a._checkFragments.fragmentList[t].doc[0]==s[0]&&(l=!0)}l||o.a._checkFragments.fragmentList.push({doc:s,fragment:""}),o()(window).bind("hashchange",o.a._checkFragments),setTimeout(()=>{n&&n.length>0?s.triggerHandler("document_fragment_change",n):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this},o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const i=e[t],n=i.doc
n[0].location.hash!=i.fragment&&(n.triggerHandler("document_fragment_change",n[0].location.hash),i.fragment=n[0].location.hash,o.a._checkFragments.fragmentList[t]=i)}},o.a._checkFragments.fragmentList=[],o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()},o.a.fn.showIf=function(e){return o.a.isFunction(e)?this.each((function(t){o()(this).showIf(e.call(this))})):(e?this.show():this.hide(),this)},o.a.fn.disableIf=function(e){return o.a.isFunction(e)&&(e=e.call(this)),this.prop("disabled",!!e),this},o.a.fn.indicate=function(e){let t
if("remove"==(e=e||{}))return t=this.data("indicator"),void(t&&t.remove())
o()(".indicator_box").remove()
let i=this.offset()
e&&e.offset&&(i=e.offset)
const n=this.width(),s=this.height(),l=(e.container||this).zIndex()
t=o()(document.createElement("div")),t.css({width:n+6,height:s+6,top:i.top-3,left:i.left-3,zIndex:l+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"}),t.addClass("indicator_box"),t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))})),this.data("indicator")&&this.indicate("remove"),this.data("indicator",t),o()("body").append(t),e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()})),e&&e.scroll&&o()("html,body").scrollToVisible(t)},o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight},o.a.fn.log=function(e){return console.log("%s: %o",e,this),this},o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),i=o()(this),n=o()("#wrapper"),s=o()("#main"),l=o()("#not_right_side"),a=o()(window),c=o()(this).add(t.alsoResize)
function r(){c.height(0)
const e=a.height()-(n.offset().top+n.outerHeight())+(s.height()-l.height()),r=Math.max(400,e)
c.height(r),o.a.isFunction(t.onResize)&&t.onResize.call(i,r)}return r(),a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",r),this},o.a.fn.autoGrowInput=function(e){return e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e),this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),i="",n=o()(this),s=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"})
s.insertAfter(n),o()(this).bind("keyup keydown blur update change",(function(){setTimeout(()=>{if(i===(i=n.val()))return
s.text(i)
const l=s.width(),a=l+e.comfortZone>=t?l+e.comfortZone:t;(a<n.width()&&a>=t||a>t&&a<e.maxWidth)&&n.width(a)})}))})),this}
o.a}}])

//# sourceMappingURL=visibility_help-c-6deaacb700.js.map