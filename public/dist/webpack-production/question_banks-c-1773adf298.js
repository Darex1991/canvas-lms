(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[477],{"7LJr":function(e,t,n){"use strict"
var i=n("ouhR"),a=n.n(i)
a.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
const t=this.filter(":first")
let n
if("hide"===e||"remove"===e)return t.children(".loading_image").remove(),n=t.data("loading_images")||[],n.forEach(e=>{e&&e.remove()}),t.data("loading_images",null),this
if("remove_once"===e){t.children(".loading_image").remove(),n=t.data("loading_images")||[]
const e=n.pop()
return e&&e.remove(),t.data("loading_images",n),this}"register_image"==e&&3==arguments.length&&(a.a.fn.loadingImg.image_files[arguments[1]]=arguments[2]),e=a.a.extend({},a.a.fn.loadingImg.defaults,e)
let i=a.a.fn.loadingImg.image_files.normal
e.image_size&&a.a.fn.loadingImg.image_files[e.image_size]&&(i=a.a.fn.loadingImg.image_files[e.image_size]),e.paddingTop&&(e.vertical=e.paddingTop)
let s=0
e.vertical&&("top"==e.vertical||("bottom"==e.vertical?s=t.outerHeight():"middle"==e.vertical?s=t.outerHeight()/2-i.height/2:(s=parseInt(e.vertical,10),isNaN(s)&&(s=0))))
let o=0
e.horizontal&&("left"==e.horizontal||("right"==e.horizontal?o=t.outerWidth()-i.width:"middle"==e.horizontal?o=t.outerWidth()/2-i.width/2:(o=parseInt(e.horizontal,10),isNaN(o)&&(o=0))))
const l=t.zIndex()+1,r=a()(document.createElement("div")).addClass("loading_image_holder"),u=a()(document.createElement("img")).attr("src",i.url)
if(r.append(u),n=t.data("loading_images")||[],n.push(r),t.data("loading_images",n),t.css("position")&&"static"!=t.css("position"))r.css({zIndex:l,position:"absolute",top:s,left:o}),t.append(r)
else{const n=t.offset()
let i=n.top,u=n.left
e.vertical&&(i+=s),e.horizontal&&(u+=o),r.css({zIndex:l,position:"absolute",top:i,left:u}),a()("body").append(r)}return a()(this)},a.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0},a.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}},a.a.fn.loadingImage=a.a.fn.loadingImg},B1vq:function(e,t,n){"use strict"
var i=n("ouhR"),a=n.n(i)
n("s/PJ")
a.a.fn.scrollToVisible=function(e){const t={},n=a()(e)
if(0===n.length)return
let i=n.offset(),s=n.outerWidth(),o=n.outerHeight(),l=i.top,r=l+o,u=i.left,c=u+s,d="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),_=this.scrollLeft(),h=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=a()("body").offset()
this.each((function(){try{return e=a()(this).offset(),!1}catch(e){}})),l-=e.top,r-=e.top,u-=e.left,c-=e.left}return"HTML"!=this[0].tagName&&"BODY"!=this[0].tagName||(h=a()(window).height(),a()("#wizard_box:visible").length>0&&(h-=a()("#wizard_box:visible").height()),f=a()(window).width(),l-=d,u-=_,r-=d,c-=_),l<0||h<o&&r>h?t.scrollTop=l+d:r>h&&(t.scrollTop=r+d-h+20),u<0?t.scrollLeft=u+_:c>f&&(t.scrollLeft=c+_-f+20),1==t.scrollTop&&(t.scrollTop=0),1==t.scrollLeft&&(t.scrollLeft=0),this.scrollTop(t.scrollTop),this.scrollLeft(t.scrollLeft),this}},OShF:function(e,t,n){"use strict"
var i=n("ouhR"),a=n.n(i),s=n("5Ky4")
n("JI1W")
a.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=a()(this)
a.a.each(["name","id","class"],(n,i)=>{t.attr(i)&&t.attr(i,t.attr(i).replace(/-iterator-/,e.iterator))})})),e.id&&this.attr("id",e.id)
let i=!1
if(e.data)for(var t in e.data){if(e.except&&-1!=a.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=a.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const o=this.find("."+t)
var n=e.avoid||""
o.each((function(){const o=a()(this)
if(o.length>0&&0===o.closest(n).length)if(void 0!==e.data[t]&&null!==e.data[t]||(e.data[t]=""),e.htmlValues&&-1!=a.a.inArray(t,e.htmlValues))o.html(a.a.raw(e.data[t].toString())),o.hasClass("user_content")&&(i=!0,o.removeClass("enhanced"),o.data("unenhanced_content_html",e.data[t].toString()))
else if("INPUT"==o[0].tagName.toUpperCase())o.val(e.data[t])
else try{const n=e.data[t].toString()
o.html(Object(s.a)(n))}catch(e){}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,i,s=a()(this)
for(const o in e.hrefValues){if(!e.hrefValues.hasOwnProperty(o))continue
const l=e.hrefValues[o]
if(t=s.attr("href")){const n=a.a.replaceTags(t,l,encodeURIComponent(e.data[l])),i=s.text()===s.html()?s.text():null
t!==n&&(s.attr("href",n),i&&s.text(i))}(n=s.attr("rel"))&&s.attr("rel",a.a.replaceTags(n,l,e.data[l])),(i=s.attr("name"))&&s.attr("name",a.a.replaceTags(i,l,e.data[l]))}})),i&&a()(document).triggerHandler("user_content_change")}return this},a.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null},a.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const s=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=a.a.trim(s.text()),"&nbsp;"===s.html()&&(i=""),1===i.length&&160===i.charCodeAt(0)&&(i=""),n[e]=i})}if(e.dataValues)for(t in e.dataValues){var i;(i=this.data(e.dataValues[t]))&&(n[e.dataValues[t]]=i)}if(e.htmlValues)for(t in e.htmlValues){const s=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=null,i=s.hasClass("user_content")&&s.data("unenhanced_content_html")?s.data("unenhanced_content_html"):a.a.trim(s.html()),n[e.htmlValues[t]]=i}return n},a.a.fn.getTemplateValue=function(e,t){const n=a.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},Sp4U:function(e,t,n){"use strict"
n.r(t)
var i=n("pQTu"),a=n("m0r6")
Object(a.a)(JSON.parse('{"ar":{"question_banks":{"delete_question_bank_prompt":"هل ترغب بالتأكيد في حذف بنك الأسئلة هذا؟"}},"cy":{"question_banks":{"delete_question_bank_prompt":"Ydych chi’n siŵr eich bod am ddileu’r banc hwn o gwestiynau?"}},"da":{"question_banks":{"delete_question_bank_prompt":"Er du sikker på, at du vil slette denne spørgsmålsbank?"}},"da-x-k12":{"question_banks":{"delete_question_bank_prompt":"Er du sikker på, at du vil slette denne spørgsmålsbank?"}},"de":{"question_banks":{"delete_question_bank_prompt":"Möchten Sie diesen Fragenpool wirklich löschen?"}},"el":{"question_banks":{"delete_question_bank_prompt":"Είστε σίγουρος/η ότι θέλετε να διαγράψετε αυτή την τράπεζα ερωτήσεων;"}},"en-AU":{"question_banks":{"delete_question_bank_prompt":"Are you sure you want to delete this bank of questions?"}},"en-CA":{"question_banks":{"delete_question_bank_prompt":"Are you sure you want to delete this bank of questions?"}},"en-GB":{"question_banks":{"delete_question_bank_prompt":"Are you sure you want to delete this bank of questions?"}},"es":{"question_banks":{"delete_question_bank_prompt":"¿Está seguro de que desea eliminar este banco de preguntas?"}},"fa":{"question_banks":{"delete_question_bank_prompt":"مطمئنید که می خواهید این مخزن پرسش حذف شود؟"}},"fi":{"question_banks":{"delete_question_bank_prompt":"Haluatko varmasti poistaa tämän kyseessä olevan pankin?"}},"fr":{"question_banks":{"delete_question_bank_prompt":"Voulez-vous vraiment supprimer cette banque de questions ?"}},"fr-CA":{"question_banks":{"delete_question_bank_prompt":"Voulez-vous vraiment supprimer cette banque de questions?"}},"he":{"question_banks":{"delete_question_bank_prompt":"בטוח/ה שרוצה לבטל בנק שאלות זה? "}},"ht":{"question_banks":{"delete_question_bank_prompt":"Ou kwè vrèman ou vle efase bank kesyon sa a?"}},"hu":{"question_banks":{"delete_question_bank_prompt":"Biztos benne, hogy törli ezt a kérdésbankot?"}},"hy":{"question_banks":{"delete_question_bank_prompt":"Դուք իսկապե՞ս ցանկանում եք ջնջել հարցերի այս շտեմարանը:"}},"is":{"question_banks":{"delete_question_bank_prompt":"Viltu örugglega eyða þessum spurningabanka?"}},"it":{"question_banks":{"delete_question_bank_prompt":"Vuoi eliminare questa banca di domande?"}},"ja":{"question_banks":{"delete_question_bank_prompt":"この問題バンクを削除してもよろしいですか?"}},"ko":{"question_banks":{"delete_question_bank_prompt":"이 문제 은행을 삭제하시겠습니까?"}},"mi":{"question_banks":{"delete_question_bank_prompt":"E tino hiahia ana koe ki te muku i tēnei pareparenga o ngā pātai?"}},"nb":{"question_banks":{"delete_question_bank_prompt":"Er du sikker på at du vil slette denne spørsmålsbanken?"}},"nb-x-k12":{"question_banks":{"delete_question_bank_prompt":"Er du sikker på at du vil slette denne spørsmålsbanken?"}},"nl":{"question_banks":{"delete_question_bank_prompt":"Weet je zeker dat je deze toetsbank wilt verwijderen?"}},"nn":{"question_banks":{"delete_question_bank_prompt":"Er du sikker på at du vil slette spørsmålsbanken?"}},"pl":{"question_banks":{"delete_question_bank_prompt":"Czy na pewno chcesz usunąć ten bank pytań?"}},"pt":{"question_banks":{"delete_question_bank_prompt":"Tem certeza de que deseja excluir este banco de perguntas?"}},"pt-BR":{"question_banks":{"delete_question_bank_prompt":"Tem certeza que deseja excluir este banco de perguntas?"}},"ru":{"question_banks":{"delete_question_bank_prompt":"Действительно хотите удалить этот банк вопросов?"}},"sl":{"question_banks":{"delete_question_bank_prompt":"Ali ste prepričani, da želite izbrisati to zbirko vprašanj?"}},"sv":{"question_banks":{"delete_question_bank_prompt":"Vill du verkligen radera den här banken av frågor?"}},"sv-x-k12":{"question_banks":{"delete_question_bank_prompt":"Vill du verkligen radera den här banken av frågor?"}},"tr":{"question_banks":{"delete_question_bank_prompt":"Soru bankasını silmek istediğinize emin misiniz?"}},"uk":{"question_banks":{"delete_question_bank_prompt":"Ви впевнені, що хочете видалити цей банк запитань?"}},"zh-Hans":{"question_banks":{"delete_question_bank_prompt":"是否确定要删除此题库?"}},"zh-Hant":{"question_banks":{"delete_question_bank_prompt":"是否確定要刪除此題庫？"}}}'))
n("jQeR"),n("0sPK")
var s=i.default.scoped("question_banks"),o=n("ouhR"),l=n.n(o)
n("jYyc"),n("UlQx"),n("Z+Ib"),n("p6Wi"),n("q3b3"),n("7LJr"),n("OShF")
l()(document).ready((function(){l()(".add_bank_link").click(e=>{e.preventDefault()
const t=l()("#question_bank_blank").clone(!0).attr("id","question_bank_new")
l()("#questions").prepend(t.show()),t.find(".edit_bank_link").click()}),l()(".question_bank .delete_bank_link").click((function(e){e.preventDefault(),l()(this).parents(".question_bank").confirmDelete({url:l()(this).attr("href"),message:s.t("delete_question_bank_prompt","Are you sure you want to delete this bank of questions?"),success(){l()(this).slideUp((function(){l()(this).remove()}))}})})),l()(".question_bank .bookmark_bank_link").click((function(e){e.preventDefault()
const t=l()(this).parents(".question_bank")
l.a.ajaxJSON(l()(this).attr("href"),"POST",{},e=>{t.find(".bookmark_bank_link").toggle(),t.find(".bookmark_bank_link:visible:first").focus()})})),l()(".question_bank .edit_bank_link").click((function(e){e.preventDefault()
const t=l()(this).parents(".question_bank"),n=t.getTemplateData({textValues:["title"]})
t.find(".header_content").hide()
const i=l()("#edit_bank_form")
t.find(".header").prepend(i.show()),i.attr("action",l()(this).attr("href")),i.attr("method","PUT"),"question_bank_new"==t.attr("id")&&(i.attr("action",l()("#bank_urls .add_bank_url").attr("href")),i.attr("method","POST")),i.fillFormData(n,{object_name:"assessment_question_bank"}),i.find(":text:visible:first").focus().select()})),l()("#edit_bank_form .bank_name_box").keycodes("return esc tab",(function(e){"esc"==e.keyString?(l()(this).parents(".question_bank").addClass("dont_save"),l()(this).blur()):"return"==e.keyString?l()("#edit_bank_form").submit():"tab"==e.keyString&&(l()("nav#breadcrumbs a:visible:first").focus(),e.preventDefault())})),l()("#edit_bank_form .bank_name_box").blur((function(){const e=l()(this).parents(".question_bank")
e.hasClass("dont_save")||e.hasClass("save_in_progress")||"question_bank_new"==e.attr("id")?(e.removeClass("dont_save"),e.find(".header_content").show(),l()("body").append(l()("#edit_bank_form").hide()),"question_bank_new"==e.attr("id")&&e.remove()):l()("#edit_bank_form").submit()})),l()("#edit_bank_form").formSubmit({object_name:"assessment_question_bank",beforeSubmit(e){const t=l()(this).parents(".question_bank")
t.attr("id","question_bank_adding")
try{t.addClass("save_in_progress"),t.find(".bank_name_box").blur()}catch(e){}return t.fillTemplateData({data:e}),t.loadingImage(),t},success(e,t){t.loadingImage("remove"),t.removeClass("save_in_progress")
const n=e.assessment_question_bank
n.last_updated_at=l.a.datetimeString(n.updated_at),t.fillTemplateData({data:n,hrefValues:["id"]}),t.find(".links a").each((e,t)=>{t.setAttribute("title",t.getAttribute("title").replace("{{ title }}",n.title))}),t.find(".links a span").each((e,t)=>{t.textContent=t.textContent.replace("{{ title }}",n.title)}),t.find("a.title")[0].focus()},error(e,t){t.loadingImage("remove"),t.removeClass("save_in_progress"),t.find(".edit_bank_link").click(),l()("#edit_bank_form").formErrors(e)}})}))},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu"),a=n("m0r6")
Object(a.a)(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR"),n("0sPK")
var s=i.default.scoped("instructure_misc_plugins"),o=n("ouhR"),l=n.n(o),r=n("5Ky4"),u=n("JD5e")
n("jYyc"),n("YGE8"),n("B1vq"),n("s/PJ")
l.a.fn.setOptions=function(e,t){let n=e?"<option value=''>"+Object(r.a)(e)+"</option>":""
return null==t&&(t=[]),t.forEach(e=>{const t=Object(r.a)(e)
n+='<option value="'+t+'">'+t+"</option>"}),this.html(l.a.raw(n))},l.a.fn.ifExists=function(e){return this.length&&e.call(this,this),this},l.a.fn.scrollbarWidth=function(){const e=l()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div"),n=t.innerWidth()
e.css("overflow-y","scroll")
const i=t.innerWidth()
return e.remove(),n-i},l.a.fn.dim=function(e){return this.animate({opacity:.4},e)},l.a.fn.undim=function(e){return this.animate({opacity:1},e)},l.a.fn.confirmDelete=function(e){e=l.a.extend({},l.a.fn.confirmDelete.defaults,e)
const t=this
let n=null,i=!0
e.noMessage=e.noMessage||e.no_message
const a=function(){if(i)if(e.confirmed||(e.confirmed=function(){t.dim()}),e.confirmed.call(t),e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(u.a)(),l.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,a,s)=>{e.error&&l.a.isFunction(e.error)?e.error.call(t,n,i,a,s):l.a.ajaxJSON.unhandledXHRs.push(i)})}else e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})}),e.success.call(t)
else e.cancelled&&l.a.isFunction(e.cancelled)&&e.cancelled.call(t)}
if(e.message&&!e.noMessage&&!l.a.skipConfirmations){if(e.dialog){i=!1
const t="object"==typeof e.dialog?e.dialog:{},o=e.url.includes("assignments")?"btn-danger":"btn-primary"
return void(n=l()(e.message).dialog(l.a.extend({},{modal:!0,close:a,buttons:[{text:s.t("#buttons.cancel","Cancel"),click(){l()(this).dialog("close")}},{text:s.t("#buttons.delete","Delete"),class:o,click(){i=!0,l()(this).dialog("close")}}]},t)))}i=confirm(e.message)}a()},l.a.fn.confirmDelete.defaults={get message(){return s.t("confirms.default_delete_thing","Are you sure you want to delete this?")}},l.a.fn.fragmentChange=function(e){if(e&&!0!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const a=this
let s=!1
for(t=0;t<l.a._checkFragments.fragmentList.length;t++){l.a._checkFragments.fragmentList[t].doc[0]==a[0]&&(s=!0)}s||l.a._checkFragments.fragmentList.push({doc:a,fragment:""}),l()(window).bind("hashchange",l.a._checkFragments),setTimeout(()=>{i&&i.length>0?a.triggerHandler("document_fragment_change",i):a&&a[0]&&a[0].location&&a[0].location.hash.length>0&&a.triggerHandler("document_fragment_change",a[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this},l.a._checkFragments=function(){const e=l.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t],i=n.doc
i[0].location.hash!=n.fragment&&(i.triggerHandler("document_fragment_change",i[0].location.hash),n.fragment=i[0].location.hash,l.a._checkFragments.fragmentList[t]=n)}},l.a._checkFragments.fragmentList=[],l.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()},l.a.fn.showIf=function(e){return l.a.isFunction(e)?this.each((function(t){l()(this).showIf(e.call(this))})):(e?this.show():this.hide(),this)},l.a.fn.disableIf=function(e){return l.a.isFunction(e)&&(e=e.call(this)),this.prop("disabled",!!e),this},l.a.fn.indicate=function(e){let t
if("remove"==(e=e||{}))return t=this.data("indicator"),void(t&&t.remove())
l()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width(),a=this.height(),s=(e.container||this).zIndex()
t=l()(document.createElement("div")),t.css({width:i+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:s+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"}),t.addClass("indicator_box"),t.mouseover((function(){l()(this).stop().fadeOut("fast",(function(){l()(this).remove()}))})),this.data("indicator")&&this.indicate("remove"),this.data("indicator",t),l()("body").append(t),e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){l()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){l()(this).remove()})),e&&e.scroll&&l()("html,body").scrollToVisible(t)},l.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight},l.a.fn.log=function(e){return console.log("%s: %o",e,this),this},l.a.fn.fillWindowWithMe=function(e){const t=l.a.extend({minHeight:400},e),n=l()(this),i=l()("#wrapper"),a=l()("#main"),s=l()("#not_right_side"),o=l()(window),r=l()(this).add(t.alsoResize)
function u(){r.height(0)
const e=o.height()-(i.offset().top+i.outerHeight())+(a.height()-s.height()),u=Math.max(400,e)
r.height(u),l.a.isFunction(t.onResize)&&t.onResize.call(n,u)}return u(),o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u),this},l.a.fn.autoGrowInput=function(e){return e=l.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e),this.filter("input:text").each((function(){let t=e.minWidth||l()(this).width(),n="",i=l()(this),a=l()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"})
a.insertAfter(i),l()(this).bind("keyup keydown blur update change",(function(){setTimeout(()=>{if(n===(n=i.val()))return
a.text(n)
const s=a.width(),o=s+e.comfortZone>=t?s+e.comfortZone:t;(o<i.width()&&o>=t||o>t&&o<e.maxWidth)&&i.width(o)})}))})),this}
l.a}}])

//# sourceMappingURL=question_banks-c-1773adf298.js.map