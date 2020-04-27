(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[310],{B1vq:function(e,t,n){"use strict"
var i=n("ouhR"),s=n.n(i)
n("s/PJ")
s.a.fn.scrollToVisible=function(e){const t={},n=s()(e)
if(0===n.length)return
let i=n.offset(),a=n.outerWidth(),l=n.outerHeight(),c=i.top,r=c+l,o=i.left,u=o+a,d="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),m=this.outerWidth()
if("html,body"!=this.selector){let e=s()("body").offset()
this.each((function(){try{return e=s()(this).offset(),!1}catch(e){}})),c-=e.top,r-=e.top,o-=e.left,u-=e.left}return"HTML"!=this[0].tagName&&"BODY"!=this[0].tagName||(f=s()(window).height(),s()("#wizard_box:visible").length>0&&(f-=s()("#wizard_box:visible").height()),m=s()(window).width(),c-=d,o-=h,r-=d,u-=h),c<0||f<l&&r>f?t.scrollTop=c+d:r>f&&(t.scrollTop=r+d-f+20),o<0?t.scrollLeft=o+h:u>m&&(t.scrollLeft=u+h-m+20),1==t.scrollTop&&(t.scrollTop=0),1==t.scrollLeft&&(t.scrollLeft=0),this.scrollTop(t.scrollTop),this.scrollLeft(t.scrollLeft),this}},OShF:function(e,t,n){"use strict"
var i=n("ouhR"),s=n.n(i),a=n("5Ky4")
n("JI1W")
s.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=s()(this)
s.a.each(["name","id","class"],(n,i)=>{t.attr(i)&&t.attr(i,t.attr(i).replace(/-iterator-/,e.iterator))})})),e.id&&this.attr("id",e.id)
let i=!1
if(e.data)for(var t in e.data){if(e.except&&-1!=s.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=s.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const l=this.find("."+t)
var n=e.avoid||""
l.each((function(){const l=s()(this)
if(l.length>0&&0===l.closest(n).length)if(void 0!==e.data[t]&&null!==e.data[t]||(e.data[t]=""),e.htmlValues&&-1!=s.a.inArray(t,e.htmlValues))l.html(s.a.raw(e.data[t].toString())),l.hasClass("user_content")&&(i=!0,l.removeClass("enhanced"),l.data("unenhanced_content_html",e.data[t].toString()))
else if("INPUT"==l[0].tagName.toUpperCase())l.val(e.data[t])
else try{const n=e.data[t].toString()
l.html(Object(a.a)(n))}catch(e){}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,i,a=s()(this)
for(const l in e.hrefValues){if(!e.hrefValues.hasOwnProperty(l))continue
const c=e.hrefValues[l]
if(t=a.attr("href")){const n=s.a.replaceTags(t,c,encodeURIComponent(e.data[c])),i=a.text()===a.html()?a.text():null
t!==n&&(a.attr("href",n),i&&a.text(i))}(n=a.attr("rel"))&&a.attr("rel",s.a.replaceTags(n,c,e.data[c])),(i=a.attr("name"))&&a.attr("name",s.a.replaceTags(i,c,e.data[c]))}})),i&&s()(document).triggerHandler("user_content_change")}return this},s.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null},s.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const a=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=s.a.trim(a.text()),"&nbsp;"===a.html()&&(i=""),1===i.length&&160===i.charCodeAt(0)&&(i=""),n[e]=i})}if(e.dataValues)for(t in e.dataValues){var i;(i=this.data(e.dataValues[t]))&&(n[e.dataValues[t]]=i)}if(e.htmlValues)for(t in e.htmlValues){const a=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=null,i=a.hasClass("user_content")&&a.data("unenhanced_content_html")?a.data("unenhanced_content_html"):s.a.trim(a.html()),n[e.htmlValues[t]]=i}return n},s.a.fn.getTemplateValue=function(e,t){const n=s.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},fFPY:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR"),s=n.n(i)
n("p6Wi"),n("OShF")
s()(document).ready(()=>{s()(window).resize(()=>{const e=s()("#file_content").offset().top,t=s()(window).height()
s()("#content_preview").height(t-e),s()("#modules").height(t-e)}).triggerHandler("resize")
let e=0
s()(".context_module_item").each((function(){e=Math.max(e,s()(this).width())})),s()(".context_module_item").width(e),s()("#modules .context_module_item.attachment a.title,#modules .context_module_item.external_url a.title").each((function(){s()(this).attr("href","".concat(s()(this).attr("href"),"?already_inline=1"))})),s()("#modules .context_module_item").filter(".attachment,.external_url").find("a.title").each((function(){s()(this).attr("target","content_preview")})).click((function(e){e.preventDefault(),s()("#file_display_name").text(s()(this).text())
const t=s()(this).parents(".context_module_item").getTemplateData({textValues:["id"]}).id
location.replace("#tag_".concat(t))})),s()(document).fragmentChange((e,t)=>{if(t.match(/^#tag_/)){const e=t.substring(5)
e&&e!==s()("#current_item_id").text()&&s()("#context_module_item_".concat(e," a.title")).length>0&&(s()("#current_item_id").text(e),s()("#content_preview").attr("src",s()("#context_module_item_".concat(e," a.title")).attr("href")),s()("#modules .context_module_item").removeClass("selected"),s()("#context_module_item_".concat(e)).addClass("selected"),s()("#context_module_item_".concat(e," a.title")).click())}}),s()("#context_module_item_".concat(s()("#current_item_id").text())).addClass("selected"),s()("#frameless_link").click(e=>{e.preventDefault(),location.href=s()("#content_preview").attr("src")}),s()(".hide_sidebar_link").click(e=>{e.preventDefault(),s()("#modules").parent().hide()}),s()("body").css("overflow","hidden")})},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu"),s=n("m0r6")
Object(s.a)(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR"),n("0sPK")
var a=i.default.scoped("instructure_misc_plugins"),l=n("ouhR"),c=n.n(l),r=n("5Ky4"),o=n("JD5e")
n("jYyc"),n("YGE8"),n("B1vq"),n("s/PJ")
c.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(r.a)(e)+"</option>":""
return null==t&&(t=[]),t.forEach(e=>{const t=Object(r.a)(e)
n+='<option value="'+t+'">'+t+"</option>"}),this.html(c.a.raw(n))},c.a.fn.ifExists=function(e){return this.length&&e.call(this,this),this},c.a.fn.scrollbarWidth=function(){const e=c()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div"),n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
return e.remove(),n-i},c.a.fn.dim=function(e){return this.animate({opacity:.4},e)},c.a.fn.undim=function(e){return this.animate({opacity:1},e)},c.a.fn.confirmDelete=function(e){e=c.a.extend({},c.a.fn.confirmDelete.defaults,e)
const t=this
let n=null,i=!0
e.noMessage=e.noMessage||e.no_message
const s=function(){if(i)if(e.confirmed||(e.confirmed=function(){t.dim()}),e.confirmed.call(t),e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(o.a)(),c.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,s,a)=>{e.error&&c.a.isFunction(e.error)?e.error.call(t,n,i,s,a):c.a.ajaxJSON.unhandledXHRs.push(i)})}else e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})}),e.success.call(t)
else e.cancelled&&c.a.isFunction(e.cancelled)&&e.cancelled.call(t)}
if(e.message&&!e.noMessage&&!c.a.skipConfirmations){if(e.dialog){i=!1
const t="object"==typeof e.dialog?e.dialog:{},l=e.url.includes("assignments")?"btn-danger":"btn-primary"
return void(n=c()(e.message).dialog(c.a.extend({},{modal:!0,close:s,buttons:[{text:a.t("#buttons.cancel","Cancel"),click(){c()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:l,click(){i=!0,c()(this).dialog("close")}}]},t)))}i=confirm(e.message)}s()},c.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}},c.a.fn.fragmentChange=function(e){if(e&&!0!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const s=this
let a=!1
for(t=0;t<c.a._checkFragments.fragmentList.length;t++){c.a._checkFragments.fragmentList[t].doc[0]==s[0]&&(a=!0)}a||c.a._checkFragments.fragmentList.push({doc:s,fragment:""}),c()(window).bind("hashchange",c.a._checkFragments),setTimeout(()=>{i&&i.length>0?s.triggerHandler("document_fragment_change",i):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this},c.a._checkFragments=function(){const e=c.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t],i=n.doc
i[0].location.hash!=n.fragment&&(i.triggerHandler("document_fragment_change",i[0].location.hash),n.fragment=i[0].location.hash,c.a._checkFragments.fragmentList[t]=n)}},c.a._checkFragments.fragmentList=[],c.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()},c.a.fn.showIf=function(e){return c.a.isFunction(e)?this.each((function(t){c()(this).showIf(e.call(this))})):(e?this.show():this.hide(),this)},c.a.fn.disableIf=function(e){return c.a.isFunction(e)&&(e=e.call(this)),this.prop("disabled",!!e),this},c.a.fn.indicate=function(e){let t
if("remove"==(e=e||{}))return t=this.data("indicator"),void(t&&t.remove())
c()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width(),s=this.height(),a=(e.container||this).zIndex()
t=c()(document.createElement("div")),t.css({width:i+6,height:s+6,top:n.top-3,left:n.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"}),t.addClass("indicator_box"),t.mouseover((function(){c()(this).stop().fadeOut("fast",(function(){c()(this).remove()}))})),this.data("indicator")&&this.indicate("remove"),this.data("indicator",t),c()("body").append(t),e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){c()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){c()(this).remove()})),e&&e.scroll&&c()("html,body").scrollToVisible(t)},c.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight},c.a.fn.log=function(e){return console.log("%s: %o",e,this),this},c.a.fn.fillWindowWithMe=function(e){const t=c.a.extend({minHeight:400},e),n=c()(this),i=c()("#wrapper"),s=c()("#main"),a=c()("#not_right_side"),l=c()(window),r=c()(this).add(t.alsoResize)
function o(){r.height(0)
const e=l.height()-(i.offset().top+i.outerHeight())+(s.height()-a.height()),o=Math.max(400,e)
r.height(o),c.a.isFunction(t.onResize)&&t.onResize.call(n,o)}return o(),l.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",o),this},c.a.fn.autoGrowInput=function(e){return e=c.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e),this.filter("input:text").each((function(){let t=e.minWidth||c()(this).width(),n="",i=c()(this),s=c()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"})
s.insertAfter(i),c()(this).bind("keyup keydown blur update change",(function(){setTimeout(()=>{if(n===(n=i.val()))return
s.text(n)
const a=s.width(),l=a+e.comfortZone>=t?a+e.comfortZone:t;(l<i.width()&&l>=t||l>t&&l<e.maxWidth)&&i.width(l)})}))})),this}
c.a}}])

//# sourceMappingURL=inlined_preview-c-f41a672b4f.js.map