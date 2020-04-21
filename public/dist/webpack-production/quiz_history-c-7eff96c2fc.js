(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[478],{B1vq:function(e,t,n){"use strict"
var i=n("ouhR"),s=n.n(i)
n("s/PJ")
s.a.fn.scrollToVisible=function(e){const t={},n=s()(e)
if(0===n.length)return
let i=n.offset(),o=n.outerWidth(),a=n.outerHeight(),l=i.top,r=l+a,u=i.left,c=u+o,d="html,body"==this.selector?s.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),p=this.outerWidth()
if("html,body"!=this.selector){let e=s()("body").offset()
this.each((function(){try{return e=s()(this).offset(),!1}catch(e){}})),l-=e.top,r-=e.top,u-=e.left,c-=e.left}return"HTML"!=this[0].tagName&&"BODY"!=this[0].tagName||(f=s()(window).height(),s()("#wizard_box:visible").length>0&&(f-=s()("#wizard_box:visible").height()),p=s()(window).width(),l-=d,u-=h,r-=d,c-=h),l<0||f<a&&r>f?t.scrollTop=l+d:r>f&&(t.scrollTop=r+d-f+20),u<0?t.scrollLeft=u+h:c>p&&(t.scrollLeft=c+h-p+20),1==t.scrollTop&&(t.scrollTop=0),1==t.scrollLeft&&(t.scrollLeft=0),this.scrollTop(t.scrollTop),this.scrollLeft(t.scrollLeft),this}},HbFp:function(e,t,n){"use strict"
var i=n("qJBq"),s=n.n(i),o=n("pQTu")
const a={_parseNumber:s.a,parse(e){if(null==e)return NaN
if("number"==typeof e)return e
let t=a._parseNumber(e.toString(),{thousands:o.default.lookup("number.format.delimiter"),decimal:o.default.lookup("number.format.separator")})
return isNaN(t)&&(t=a._parseNumber(e)),e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e)),t},validate:e=>!isNaN(a.parse(e))}
t.a=a},OShF:function(e,t,n){"use strict"
var i=n("ouhR"),s=n.n(i),o=n("5Ky4")
n("JI1W")
s.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=s()(this)
s.a.each(["name","id","class"],(n,i)=>{t.attr(i)&&t.attr(i,t.attr(i).replace(/-iterator-/,e.iterator))})})),e.id&&this.attr("id",e.id)
let i=!1
if(e.data)for(var t in e.data){if(e.except&&-1!=s.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=s.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const a=this.find("."+t)
var n=e.avoid||""
a.each((function(){const a=s()(this)
if(a.length>0&&0===a.closest(n).length)if(void 0!==e.data[t]&&null!==e.data[t]||(e.data[t]=""),e.htmlValues&&-1!=s.a.inArray(t,e.htmlValues))a.html(s.a.raw(e.data[t].toString())),a.hasClass("user_content")&&(i=!0,a.removeClass("enhanced"),a.data("unenhanced_content_html",e.data[t].toString()))
else if("INPUT"==a[0].tagName.toUpperCase())a.val(e.data[t])
else try{const n=e.data[t].toString()
a.html(Object(o.a)(n))}catch(e){}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,i,o=s()(this)
for(const a in e.hrefValues){if(!e.hrefValues.hasOwnProperty(a))continue
const l=e.hrefValues[a]
if(t=o.attr("href")){const n=s.a.replaceTags(t,l,encodeURIComponent(e.data[l])),i=o.text()===o.html()?o.text():null
t!==n&&(o.attr("href",n),i&&o.text(i))}(n=o.attr("rel"))&&o.attr("rel",s.a.replaceTags(n,l,e.data[l])),(i=o.attr("name"))&&o.attr("name",s.a.replaceTags(i,l,e.data[l]))}})),i&&s()(document).triggerHandler("user_content_change")}return this},s.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null},s.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const o=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=s.a.trim(o.text()),"&nbsp;"===o.html()&&(i=""),1===i.length&&160===i.charCodeAt(0)&&(i=""),n[e]=i})}if(e.dataValues)for(t in e.dataValues){var i;(i=this.data(e.dataValues[t]))&&(n[e.dataValues[t]]=i)}if(e.htmlValues)for(t in e.htmlValues){const o=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
i=null,i=o.hasClass("user_content")&&o.data("unenhanced_content_html")?o.data("unenhanced_content_html"):s.a.trim(o.html()),n[e.htmlValues[t]]=i}return n},s.a.fn.getTemplateValue=function(e,t){const n=s.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},fO6K:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR"),s=n.n(i),o=n("LqrG"),a=n("lkPJ"),l=n("pQTu"),r=n("HbFp")
n("p6Wi"),n("OShF"),n("s/PJ"),n("vwFW")
const u={exists:()=>window.parent&&window.parent.INST,respondsTo:e=>u.exists()&&s.a.isFunction(window.parent.INST[e]),hasProperty:e=>u.exists()&&window.parent.INST[e],set(e,t){u.exists()&&(window.parent.INST[e]=t)},get(e){if(u.hasProperty(e))return window.parent.INST[e]}}
let c,d,h
function f(){if(c)return c
const e=s()("#submission_details").getTemplateData({textValues:["version_number","user_id"]}),t={snapshot:{user_id:e.user_id||null,version_number:e.version_number,last_question_touched:null,question_updates:{},fudge_points:0},$quizBody:null,jumpPosition(e){const t=s()("#question_"+e)
return t.length>0?t.offset().top-110:0},checkQuizBody(){null===t.$quizBody&&(t.$quizBody=s()("html,body"))},jumpToQuestion(e){const n=t.jumpPosition(e)
t.checkQuizBody(),t.$quizBody.stop(),t.$quizBody.clearQueue(),t.$quizBody.animate({scrollTop:n},500)},jumpDirectlyToQuestion(e){const n=t.jumpPosition(e)
t.checkQuizBody(),t.$quizBody.scrollTop(n)},externallySet:!1,setSnapshot(e,n){if(e){if(n&&t.externallySet)return
t.externallySet=!0,t.snapshot=e
for(const t in e.question_updates){const n=e.question_updates[t],i=s()("#question_"+t)
ENV.GRADE_BY_QUESTION||i.addClass("modified_but_not_saved"),i.find(".question_input_hidden").val(n.points).end().find(".user_points :text").val(l.default.n(n.points)).end().find(".question_neutral_comment .question_comment_text textarea").val(n.comments)}u.hasProperty("lastQuestionTouched")&&!ENV.GRADE_BY_QUESTION?t.jumpToQuestion(window.parent.INST.lastQuestionTouched):t.snapshot.last_question_touched&&!ENV.GRADE_BY_QUESTION&&t.jumpToQuestion(t.snapshot.last_question_touched)}else n&&u.hasProperty("lastQuestionTouched")&&!ENV.GRADE_BY_QUESTION&&t.jumpToQuestion(window.parent.INST.lastQuestionTouched);(t.externallySet||n)&&s()("#feel_free_to_toggle_message").show(),u.respondsTo("refreshQuizSubmissionSnapshot")&&window.parent.INST.refreshQuizSubmissionSnapshot(t.snapshot)},update(e,n){t.snapshot.question_updates[e]=n,t.snapshot.last_question_touched=e,t.setSnapshot()}}
return c=t}function p(){if(d)return d
const e=f()
return d={ensureSelectEventsFire(){s()("input[type=text]").focus((function(){s()(this).select()}))},scrollToUpdatedQuestion(t,n){if(0===n.indexOf("#question")){const t=n.substring(10)
e.jumpToQuestion(t)}},updateSnapshotFor(t){const n=t.attr("id").substring(9)||null
if(n){const i={}
ENV.GRADE_BY_QUESTION||t.addClass("modified_but_not_saved"),i.points=r.a.parse(t.find(".user_points :text").val()),i.comments=t.find(".question_neutral_comment .question_comment_text textarea").val()||"",e.update(n,i)}s()(document).triggerHandler("score_changed")},addFudgePoints(t){(t||0===t)&&(e.snapshot.fudge_points=t,e.setSnapshot()),s()(document).triggerHandler("score_changed")},setInitialSnapshot(t){s()("#feel_free_to_toggle_message").show(),t?e.setSnapshot(t):e.setSnapshot(null,!0)},onScoreChanged(){const e=s()("#after_fudge_points_total")
let t=0
s()(".display_question .user_points:visible").each((function(){let e=r.a.parse(s()(this).find("input.question_input").val())||0
e=Math.round(100*e)/100,t+=e}))
let n=r.a.parse(s()("#fudge_points_entry").val())||0
n=Math.round(100*n)/100,t+=n,e.text(l.default.n(t)||"0")},questions:()=>s()(".question_holder").map((e,t)=>s()(t).position().top-320).toArray(),onWindowResize(){const e=s()(window).innerHeight(),t=s()("div.question_holder:last-child").outerHeight(),n=s()("#speed_update_scores_container").outerHeight(),i=Math.max(e-t-150,n)
s()("#update_history_form .quiz-submission.headless").css("marginBottom",i+"px")}}}s()(document).ready((function(){const e=f(),t=p(),n=function(){if(h)return h
const e=f(),t=p(),n={index:0,windowSize:10,minWidth:66,startingLeftPos:32,navItemWidth:34,initialize(){if(s()(".user_points > .question_input").each((function(e){n.updateStatusFor(s()(this))})),ENV.GRADE_BY_QUESTION){const t=parseInt(u.get("active_question_index"),10),n=s()(".q"+t).data("id")
Number.isNaN(n)||e.jumpDirectlyToQuestion(n)}n.updateWindowSize(),n.setScrollWindowPosition(0)},size:()=>s()(".question-nav-link").length,tooBig:()=>n.size()>n.windowSize,updateWindowSize(){const e=s()(".quiz-nav, .quiz-nav-fullpage").width()-20,t=Math.floor((e-n.minWidth)/n.navItemWidth)
n.windowSize=t
const i=t*n.navItemWidth+n.minWidth
s()(".quiz-nav .nav, .quiz-nav-fullpage .nav").animate({width:i+"px"},10)},navArrowCache:null,$navArrows:()=>(null===n.navArrowCache&&(n.navArrowCache=s()(".quiz-nav .nav-arrow, .quiz-nav-fullpage .nav-arrow")),n.navArrowCache),navWrapperCache:null,$navWrapper:()=>(null===n.navWrapperCache&&(n.navWrapperCache=s()("#quiz-nav-inner-wrapper")),n.navWrapperCache),updateArrows(){n.tooBig()?(n.$navArrows().show(),n.$navWrapper().css({position:"absolute"})):(n.$navArrows().hide(),n.$navWrapper().css({position:"relative"}))},toggleDropShadow(){s()(".quiz-nav").toggleClass("drshadow",s()(document).scrollTop()>0)},updateStatusFor(e){try{const t=e.attr("data-question-id"),n=r.a.parse(e.val())
s()("#quiz_nav_"+t).toggleClass("complete",!Number.isNaN(n))}catch(e){}},activateLink(e){s()(".quiz-nav li").removeClass("active"),s()(".q"+e).addClass("active")},activateCorrectLink(){let e=1
const i=t.questions(),o=s()(document).scrollTop(),a=s()(".question")
for(let t=0;t<=i.length;t++){const l=s()(a[t]),r=t+1
o>i[t]&&o<i[t+1]||t===i.length-1&&o>i[t]?(e=r,u.set("active_question_index",r),n.activateLink(r),l.addClass("selected_single_question")):(s()(".q"+r).removeClass("active"),l.removeClass("selected_single_question"))}return n.setScrollWindowPosition(e),e},showQuestionsInWindow(e,t){const i=s()("#quiz-nav-inner-wrapper"),o=n.startingLeftPos-e*n.navItemWidth
o+"px"!==i.css("left")&&(i.stop(),i.clearQueue(),i.animate({left:o+"px"},300))},windowScrollLength:()=>Math.floor(n.windowSize/2),setScrollWindowPosition(e){if(Number.isNaN(e)&&(e=0),n.index=e,n.updateArrows(),n.tooBig()){let t=e-n.windowScrollLength()
const i=n.size()-n.windowSize
t<0?(t=0,n.index=0):t>i&&(t=i,n.index=i+n.windowScrollLength())
const s=t+n.windowSize-1
n.showQuestionsInWindow(t,s)}},previousQuestionBlock(){n.setScrollWindowPosition(n.index-n.windowSize)},nextQuestionBlock(){n.setScrollWindowPosition(n.index+n.windowSize)},onScroll(){n.activateCorrectLink(),n.toggleDropShadow()}}
return h=n}()
if(t.ensureSelectEventsFire(),ENV.GRADE_BY_QUESTION&&(s()(document).scroll(n.onScroll),t.onWindowResize(),s()(".question_holder").click((function(){s()(".quiz-nav li").removeClass("active"),s()(".question").removeClass("selected_single_question")
const e=s()(".question"),t=s()(this).find(".question"),n=e.index(t)+1
u.set("active_question_index",n),s()(".q"+n).addClass("active"),t.addClass("selected_single_question")}))),n.initialize(),s()(document).fragmentChange(t.scrollToUpdatedQuestion),u.respondsTo("getQuizSubmissionSnapshot")){const n=window.parent.INST.getQuizSubmissionSnapshot(e.snapshot.user_id,e.snapshot.version_number)
t.setInitialSnapshot(n)}ENV.SCORE_UPDATED&&u.respondsTo("clearQuizSubmissionSnapshot")&&window.parent.INST.clearQuizSubmissionSnapshot(e.snapshot),s()(".question_holder .user_points .question_input,.question_holder .question_neutral_comment .question_comment_text textarea").change((function(){const e=s()(this).parents(".display_question")
if(t.updateSnapshotFor(e),s()(this).hasClass("question_input")){const t=r.a.parse(s()(this).val()),i=Number.isNaN(t)?"":t
e.find(".question_input_hidden").val(i),n.updateStatusFor(s()(this))}})),s()("#fudge_points_entry").change((function(){const e=r.a.parse(s()(this).val()),n=r.a.parse(s()(this).val()),i=Number.isNaN(n)?"":n
s()("#fudge_points_input").val(i),t.addFudgePoints(e)})),s()(document).bind("score_changed",t.onScoreChanged),s()(".question-nav-link").click((function(t){t.preventDefault()
const n=s()(this).attr("data-id")
e.jumpToQuestion(n)})),s()("#nav-prev").click(e=>{e.preventDefault(),n.previousQuestionBlock()}),s()("#nav-next").click(e=>{e.preventDefault(),n.nextQuestionBlock()}),s()(window).resize(()=>{n.updateWindowSize(),n.setScrollWindowPosition(n.index),t.onWindowResize()}),ENV.SCORE_UPDATED&&u.respondsTo("refreshGrades")&&window.parent.INST.refreshGrades()})),s()(()=>{(new o.a).applyArrows(),a.a.disableInputs("[type=radio], [type=checkbox]"),a.a.setWidths()})},lkPJ:function(e,t,n){"use strict"
var i=n("ouhR"),s=n.n(i)
const o={disableInputs(e){const t=s()("body"),n=s()("<div />",{class:"input_cover"})
n.on("mouseleave",(function(e){s()(this).remove()})),s()(e).on("mouseenter",(function(e){const i=s()(this),o=n.clone(!0)
o.css({height:i.height()+12,width:i.width()+12,position:"absolute",left:i.offset().left-6,top:i.offset().top-6,zIndex:15,background:"url(/images/blank.png) 0 0 repeat"}),t.append(o)}))},setWidths(e){s()(e||".answer input[type=text]").each((function(){s()(this).width(9.5*s()(this).val().length)}))}}
t.a=o},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu"),s=n("m0r6")
Object(s.a)(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
n("jQeR"),n("0sPK")
var o=i.default.scoped("instructure_misc_plugins"),a=n("ouhR"),l=n.n(a),r=n("5Ky4"),u=n("JD5e")
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
const s=function(){if(i)if(e.confirmed||(e.confirmed=function(){t.dim()}),e.confirmed.call(t),e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const i=e.prepareData?e.prepareData.call(t,n):{}
i.authenticity_token=Object(u.a)(),l.a.ajaxJSON(e.url,"DELETE",i,n=>{e.success.call(t,n)},(n,i,s,o)=>{e.error&&l.a.isFunction(e.error)?e.error.call(t,n,i,s,o):l.a.ajaxJSON.unhandledXHRs.push(i)})}else e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})}),e.success.call(t)
else e.cancelled&&l.a.isFunction(e.cancelled)&&e.cancelled.call(t)}
if(e.message&&!e.noMessage&&!l.a.skipConfirmations){if(e.dialog){i=!1
const t="object"==typeof e.dialog?e.dialog:{},a=e.url.includes("assignments")?"btn-danger":"btn-primary"
return void(n=l()(e.message).dialog(l.a.extend({},{modal:!0,close:s,buttons:[{text:o.t("#buttons.cancel","Cancel"),click(){l()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:a,click(){i=!0,l()(this).dialog("close")}}]},t)))}i=confirm(e.message)}s()},l.a.fn.confirmDelete.defaults={get message(){return o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}},l.a.fn.fragmentChange=function(e){if(e&&!0!==e){const n=(window.location.search||"").replace(/^\?/,"").split("&")
let i=null
for(var t=0;t<n.length;t++){const e=n[t]
e&&0===e.indexOf("hash=")&&(i="#"+e.substring(5))}this.bind("document_fragment_change",e)
const s=this
let o=!1
for(t=0;t<l.a._checkFragments.fragmentList.length;t++){l.a._checkFragments.fragmentList[t].doc[0]==s[0]&&(o=!0)}o||l.a._checkFragments.fragmentList.push({doc:s,fragment:""}),l()(window).bind("hashchange",l.a._checkFragments),setTimeout(()=>{i&&i.length>0?s.triggerHandler("document_fragment_change",i):s&&s[0]&&s[0].location&&s[0].location.hash.length>0&&s.triggerHandler("document_fragment_change",s[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this},l.a._checkFragments=function(){const e=l.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const n=e[t],i=n.doc
i[0].location.hash!=n.fragment&&(i.triggerHandler("document_fragment_change",i[0].location.hash),n.fragment=i[0].location.hash,l.a._checkFragments.fragmentList[t]=n)}},l.a._checkFragments.fragmentList=[],l.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()},l.a.fn.showIf=function(e){return l.a.isFunction(e)?this.each((function(t){l()(this).showIf(e.call(this))})):(e?this.show():this.hide(),this)},l.a.fn.disableIf=function(e){return l.a.isFunction(e)&&(e=e.call(this)),this.prop("disabled",!!e),this},l.a.fn.indicate=function(e){let t
if("remove"==(e=e||{}))return t=this.data("indicator"),void(t&&t.remove())
l()(".indicator_box").remove()
let n=this.offset()
e&&e.offset&&(n=e.offset)
const i=this.width(),s=this.height(),o=(e.container||this).zIndex()
t=l()(document.createElement("div")),t.css({width:i+6,height:s+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"}),t.addClass("indicator_box"),t.mouseover((function(){l()(this).stop().fadeOut("fast",(function(){l()(this).remove()}))})),this.data("indicator")&&this.indicate("remove"),this.data("indicator",t),l()("body").append(t),e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){l()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){l()(this).remove()})),e&&e.scroll&&l()("html,body").scrollToVisible(t)},l.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight},l.a.fn.log=function(e){return console.log("%s: %o",e,this),this},l.a.fn.fillWindowWithMe=function(e){const t=l.a.extend({minHeight:400},e),n=l()(this),i=l()("#wrapper"),s=l()("#main"),o=l()("#not_right_side"),a=l()(window),r=l()(this).add(t.alsoResize)
function u(){r.height(0)
const e=a.height()-(i.offset().top+i.outerHeight())+(s.height()-o.height()),u=Math.max(400,e)
r.height(u),l.a.isFunction(t.onResize)&&t.onResize.call(n,u)}return u(),a.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",u),this},l.a.fn.autoGrowInput=function(e){return e=l.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e),this.filter("input:text").each((function(){let t=e.minWidth||l()(this).width(),n="",i=l()(this),s=l()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"})
s.insertAfter(i),l()(this).bind("keyup keydown blur update change",(function(){setTimeout(()=>{if(n===(n=i.val()))return
s.text(n)
const o=s.width(),a=o+e.comfortZone>=t?o+e.comfortZone:t;(a<i.width()&&a>=t||a>t&&a<e.maxWidth)&&i.width(a)})}))})),this}
l.a},qJBq:function(e,t){(function(){var t,n,i
i=[],t={},e.exports=n=function(e,n,s){var o,a,l,r,u,c,d,h
if(null==s&&(s=!0),"string"==typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
h=n[0],o=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
h=n[0],o=n[1]}else h=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands,o=(null!=n?n.decimal:void 0)||t.decimal
return null==(u=i[c=""+h+o+s])&&(l=s?3:1,u=i[c]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+h+"\\d{"+l+",3})+)|\\d*))(?:\\"+o+"(\\d*))?\\s*$")),null==(d=e.match(u))||3!==d.length?NaN:(r=d[1].replace(new RegExp("\\"+h,"g"),""),a=d[2],parseFloat(r+"."+a))},e.exports.setOptions=function(e){var n,i
for(n in e)i=e[n],t[n]=i},e.exports.factoryReset=function(){t={thousands:",",decimal:"."}},e.exports.withOptions=function(e,t){return null==t&&(t=!0),function(i){return n(i,e,t)}},e.exports.factoryReset()}).call(this)},vwFW:function(e,t,n){"use strict"
var i=n("ouhR")
n.n(i)()(".question select").bind("mousewheel",e=>e.preventDefault())}}])

//# sourceMappingURL=quiz_history-c-7eff96c2fc.js.map