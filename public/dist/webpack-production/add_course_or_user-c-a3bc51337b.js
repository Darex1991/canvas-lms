(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[229],{FXcA:function(e,t,i){"use strict"
i.r(t)
var a=i("XEib"),s=i("ouhR"),n=i.n(s),r=i("3lLS"),l=i.n(r),o=i("xnna"),c=i("GLiE"),d=i.n(c)
i("J7oN"),i("Z+Ib"),i("YGE8"),i("TBRb"),i("MWZS")
l()(()=>{n()(".add_user_link").click(e=>{e.preventDefault(),n()("#add_user_form :text").val("")
const t=n()("#add_user_dialog")
t.dialog({title:a.a.t("add_user_dialog_title","Add a New User"),width:500}).fixDialogButtons(),Object(o.a)(t),n()("#add_user_form :text:visible:first").focus().select()}),n()("#add_user_form").formSubmit({formErrors:!1,required:["user[name]","pseudonym[unique_id]"],beforeSubmit(e){n()(this).find("button").attr("disabled",!0).filter(".submit_button").text(a.a.t("adding_user_message","Adding User..."))},success(e){n()(this).find("button").attr("disabled",!1).filter(".submit_button").text(a.a.t("add_user_button","Add User"))
const t=e.user.user||e.user,i="<a href='/users/"+t.id+"'>$1</a>"
let s=""
s=e.message_sent?a.a.t("user_added_message_sent_message","*%{user}* successfully added! They should receive an email confirmation shortly.",{user:t.name,wrapper:i}):a.a.t("user_added_message","*%{user}* successfully added!",{user:t.name,wrapper:i}),n.a.flashMessage(s),n()("#add_user_dialog").dialog("close")},error(e){const t={}
let i
if(e.pseudonym.unique_id){i=[]
const n={too_long:a.a.t("Login is too long"),invalid:a.a.t("Login is invalid: must be alphanumeric or an email address")}
var s=d.a.uniq(d.a.map(e.pseudonym.unique_id,e=>e.message))
d.a.each(s,e=>{i.push(n[e]?n[e]:e)}),t.unique_id=i.join(", ")}if(e.pseudonym.sis_user_id){i=[]
s=d.a.uniq(d.a.map(e.pseudonym.sis_user_id,e=>e.message))
d.a.each(s,e=>{i.push(e)}),t.sis_user_id=i.join(", ")}n()(this).formErrors(t),n()(this).find("button").attr("disabled",!1).filter(".submit_button").text(a.a.t("user_add_failed_message","Adding User Failed, please try again"))}}),n()("#add_user_dialog .cancel_button").click(()=>{n()("#add_user_dialog").dialog("close")})})
var u=i("5Ky4")
i("OShF")
l()(()=>{n()(".add_course_link").click(e=>{e.preventDefault(),n()("#add_course_form :text").val(""),n()("#add_course_dialog").dialog({title:a.a.t("add_course_dialog_title","Add a New Course"),width:500}).fixDialogButtons(),n()("#add_course_form :text:visible:first").focus().select()}),n()("#add_course_form").formSubmit({formErrors:!1,required:["course[name]","course[course_code]"],beforeSubmit(e){n()(this).find("button").attr("disabled",!0).filter(".submit_button").text(a.a.t("adding_course_message","Adding Course..."))},success(e){n()(this).find("button").attr("disabled",!1).filter(".submit_button").text(a.a.t("add_course_button","Add Course"))
const t=e
if(t.enrollment_term_id==n()("#current_enrollment_term_id").text()){const e=n()("#course_blank").clone(!0),i={id:t.id}
e.find("a.name").text(t.name),e.fillTemplateData({data:i,hrefValues:["id"],id:"course_"+t.id}),e.find(".unpublished_icon").show(),n()("ul.courses").prepend(e),e.slideDown()}n.a.flashMessage(Object(u.a)(a.a.t("course_added_message","%{course} successfully added!",{course:t.name}))),n()("#add_course_dialog").dialog("close")},error(e){n()(this).find("button").attr("disabled",!1).filter(".submit_button").text(a.a.t("course_add_failed_message","Adding Course Failed, please try again"))}}),n()("#add_course_dialog .cancel_button").click(()=>{n()("#add_course_dialog").dialog("close")})})},J7oN:function(e,t,i){"use strict"
var a=i("ouhR"),s=i.n(a),n=i("cto6")
s()((function(){const e=s()('input[name="user[short_name]"]'),t=e.parents("form").find('input[name="user[name]"]'),i=s()('input[name="user[sortable_name]"]')
let a=t.attr("value")
t.keyup((function(){const r=t.attr("value"),l=i.attr("value"),o=Object(n.c)(l)
if(""===jQuery.trim(l)||Object(n.a)(o)===s.a.trim(a)){const e=Object(n.c)(r,o[1])
i.attr("value",Object(n.b)(e))}const c=e.attr("value")
""!==jQuery.trim(c)&&c!==a||e.attr("value",r),a=s()(this).attr("value")}))}))},OShF:function(e,t,i){"use strict"
var a=i("ouhR"),s=i.n(a),n=i("5Ky4")
i("JI1W")
s.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=s()(this)
s.a.each(["name","id","class"],(i,a)=>{t.attr(a)&&t.attr(a,t.attr(a).replace(/-iterator-/,e.iterator))})})),e.id&&this.attr("id",e.id)
let a=!1
if(e.data)for(var t in e.data){if(e.except&&-1!=s.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=s.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const r=this.find("."+t)
var i=e.avoid||""
r.each((function(){const r=s()(this)
if(r.length>0&&0===r.closest(i).length)if(void 0!==e.data[t]&&null!==e.data[t]||(e.data[t]=""),e.htmlValues&&-1!=s.a.inArray(t,e.htmlValues))r.html(s.a.raw(e.data[t].toString())),r.hasClass("user_content")&&(a=!0,r.removeClass("enhanced"),r.data("unenhanced_content_html",e.data[t].toString()))
else if("INPUT"==r[0].tagName.toUpperCase())r.val(e.data[t])
else try{const i=e.data[t].toString()
r.html(Object(n.a)(i))}catch(e){}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,i,a,n=s()(this)
for(const r in e.hrefValues){if(!e.hrefValues.hasOwnProperty(r))continue
const l=e.hrefValues[r]
if(t=n.attr("href")){const i=s.a.replaceTags(t,l,encodeURIComponent(e.data[l])),a=n.text()===n.html()?n.text():null
t!==i&&(n.attr("href",i),a&&n.text(a))}(i=n.attr("rel"))&&n.attr("rel",s.a.replaceTags(i,l,e.data[l])),(a=n.attr("name"))&&n.attr("name",s.a.replaceTags(a,l,e.data[l]))}})),a&&s()(document).triggerHandler("user_content_change")}return this},s.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null},s.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,i={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const n=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=s.a.trim(n.text()),"&nbsp;"===n.html()&&(a=""),1===a.length&&160===a.charCodeAt(0)&&(a=""),i[e]=a})}if(e.dataValues)for(t in e.dataValues){var a;(a=this.data(e.dataValues[t]))&&(i[e.dataValues[t]]=a)}if(e.htmlValues)for(t in e.htmlValues){const n=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=null,a=n.hasClass("user_content")&&n.data("unenhanced_content_html")?n.data("unenhanced_content_html"):s.a.trim(n.html()),i[e.htmlValues[t]]=a}return i},s.a.fn.getTemplateValue=function(e,t){const i=s.a.extend({},t,{textValues:[e]})
return this.getTemplateData(i)[e]}},TBRb:function(e,t,i){"use strict"
var a=i("ouhR"),s=i.n(a),n=i("GLiE"),r=i.n(n),l=i("Nxtp")
i("YGE8")
s.a.fn.fixDialogButtons=function(){return this.each((function(){const e=s()(this),t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let i=s.a.map(t.toArray(),t=>{const i=s()(t)
let a=i.attr("class")||""
const n=i.attr("id")
return i.is(".dialog_closer")&&(i.off(".fixdialogbuttons"),i.on("click.fixdialogbuttons",Object(l.a)(()=>e.dialog("close")))),"submit"===i.prop("type")&&i[0].form&&(a+=" button_type_submit"),{text:i.text(),"data-text-while-loading":i.data("textWhileLoading"),click:()=>i.click(),class:a,id:n}})
i=r.a.sortBy(i,e=>e.class.match(/btn-primary/)?1:0),e.dialog("option","buttons",i)}}))}},cto6:function(e,t,i){"use strict"
i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return l}))
var a=i("ouhR"),s=i.n(a)
function n(e,t){const i=/^(Sn?r\.?|Senior|Jn?r\.?|Junior|II|III|IV|V|VI|Esq\.?|Esquire)$/i
let a,n,r,l,o,c
return e&&""!==s.a.trim(e)?(c=s.a.map(e.split(","),e=>s.a.trim(e)),a=c[0],n=c[1],r=c.slice(2).join(", "),""===r&&(r=null),r&&!i.test(r)&&(n="".concat(n," ").concat(r),r=null),"string"==typeof n?!r&&i.test(n)&&(r=n,n=a,a=null):(n=s.a.trim(e),a=null),l=n.split(/\s+/),1===l.length&&""===l[0]&&(l=[]),!r&&l.length>1&&i.test(l[l.length-1])&&(r=l.pop()),!a&&t&&!/^\s*$/.test(t)&&(o=t.split(/\s+/))&&l.length>=o.length&&l.slice(l.length-o.length).join(" ")===o.join(" ")&&(a=l.splice(l.length-o.length,o.length).join(" ")),!a&&l.length>1&&(a=l.pop()),[0===l.length?null:l.join(" "),a,r]):[null,null,null]}function r(e){const t=s.a.trim([e[0],e[2]].join(" "))
return s.a.trim(e[1]?"".concat(e[1],", ").concat(t):t)}function l(e){return s.a.trim(e.join(" ").replace(/\s+/," "))}},xnna:function(e,t,i){"use strict"
i.d(t,"a",(function(){return o}))
var a=i("ouhR"),s=i.n(a),n=i("pQTu"),r=i("m0r6")
Object(r.a)(JSON.parse('{"ar":{"site":{"view_privacy_policy":"عرض سياسة الخصوصية"}},"cy":{"site":{"view_privacy_policy":"Gweld Polisi Preifatrwydd"}},"da":{"site":{"view_privacy_policy":"Vis datapolitik"}},"da-x-k12":{"site":{"view_privacy_policy":"Vis datapolitik"}},"de":{"site":{"view_privacy_policy":"Datenschutzrichtlinien anzeigen"}},"el":{"site":{"view_privacy_policy":"Προβολή Πολιτικής Απορρήτου"}},"en-AU":{"site":{"view_privacy_policy":"View Privacy Policy"}},"en-CA":{"site":{"view_privacy_policy":"View Privacy Policy"}},"en-GB":{"site":{"view_privacy_policy":"View Privacy Policy"}},"es":{"site":{"view_privacy_policy":"Ver declaración de privacidad"}},"fa":{"site":{"view_privacy_policy":"مشاهده سیاست حریم خصوصی"}},"fi":{"site":{"view_privacy_policy":"Tarkastele tietosuojakäytäntöä"}},"fr":{"site":{"view_privacy_policy":"Afficher la déclaration de confidentialité"}},"fr-CA":{"site":{"view_privacy_policy":"Afficher la déclaration de confidentialité"}},"he":{"site":{"view_privacy_policy":"הצגת מדיניות פרטיות"}},"ht":{"site":{"view_privacy_policy":"Afiche Politik konfidansyalite"}},"hu":{"site":{"view_privacy_policy":"Adatvédelmi irányelvek megtekintése"}},"hy":{"site":{"view_privacy_policy":"Դիտել գաղտնիության քաղականությունը"}},"is":{"site":{"view_privacy_policy":"Skoða persónuverndarstefnu"}},"it":{"site":{"view_privacy_policy":"Visualizza norme sulla privacy"}},"ja":{"site":{"view_privacy_policy":"プライバシー ポリシーを表示"}},"ko":{"site":{"view_privacy_policy":"개인 정보 보호 정책 보기"}},"mi":{"site":{"view_privacy_policy":"Tirohia Kaupapahere Tūmataiti"}},"nb":{"site":{"view_privacy_policy":"Vis personvernspolitikk"}},"nb-x-k12":{"site":{"view_privacy_policy":"Vis retningslinjer for personvern"}},"nl":{"site":{"view_privacy_policy":"Privacy-beleid weergeven"}},"nn":{"site":{"view_privacy_policy":"Vis retningslinjer for personvern"}},"pl":{"site":{"view_privacy_policy":"Pokaż politykę prywatności"}},"pt":{"site":{"view_privacy_policy":"Ver política de privacidade"}},"pt-BR":{"site":{"view_privacy_policy":"Visualizar política de privacidade"}},"ru":{"site":{"view_privacy_policy":"Показать политику конфиденциальности"}},"sl":{"site":{"view_privacy_policy":"Ogled politike zasebnosti"}},"sv":{"site":{"view_privacy_policy":"Visa integritetspolicy"}},"sv-x-k12":{"site":{"view_privacy_policy":"Visa integritetspolicy"}},"tr":{"site":{"view_privacy_policy":"Gizlilik Sözleşmesini Gör"}},"uk":{"site":{"view_privacy_policy":"Переглянути політику конфіденційності"}},"zh-Hans":{"site":{"view_privacy_policy":"查看隐私政策"}},"zh-Hant":{"site":{"view_privacy_policy":"檢視《隱私政策》"}}}'))
i("jQeR"),i("0sPK")
var l=n.default.scoped("site")
function o(e){if(!ENV.ACCOUNT||!ENV.ACCOUNT.privacy_policy_url)return
const t=s()("<a>",{href:ENV.ACCOUNT.privacy_policy_url,style:"padding-left: 1em; line-height: 3em",class:"privacy_policy_link",target:"_blank"}),i=e.closest(".ui-dialog").find(".ui-dialog-buttonpane")
i.find(".privacy_policy_link").length||(t.text(l.t("view_privacy_policy","View Privacy Policy")),i.append(t))}}}])

//# sourceMappingURL=add_course_or_user-c-a3bc51337b.js.map