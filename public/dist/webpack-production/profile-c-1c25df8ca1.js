(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[473],{J7oN:function(e,t,n){"use strict"
var a=n("ouhR"),i=n.n(a),s=n("cto6")
i()((function(){const e=i()('input[name="user[short_name]"]'),t=e.parents("form").find('input[name="user[name]"]'),n=i()('input[name="user[sortable_name]"]')
let a=t.attr("value")
t.keyup((function(){const l=t.attr("value"),r=n.attr("value"),o=Object(s.c)(r)
if(""===jQuery.trim(r)||Object(s.a)(o)===i.a.trim(a)){const e=Object(s.c)(l,o[1])
n.attr("value",Object(s.b)(e))}const c=e.attr("value")
""!==jQuery.trim(c)&&c!==a||e.attr("value",l),a=i()(this).attr("value")}))}))},MggM:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var a=n("ouhR"),i=n.n(a)
n("jYyc")
class s{constructor(e,t,n={}){this.poll=()=>(this.running=!0,this.attempts++,i.a.ajaxJSON(this.url,"GET",{},this.handle,(e,t)=>this.handleErrors?this.handle(e,t):this.stop())),this.handle=(e,t)=>{switch(this.handler(e,t)){case"continue":return this.nextPoll()
case"reset":return this.nextPoll(!0)
case"stop":return this.stop(!0)
default:return this.stop()}},this.url=e,this.handler=t,this.baseInterval=null!=n.baseInterval?n.baseInterval:1e3,this.backoffFactor=null!=n.backoffFactor?n.backoffFactor:1.5,this.maxAttempts=null!=n.maxAttempts?n.maxAttempts:8,this.handleErrors=null!=n.handleErrors&&n.handleErrors,this.initialDelay=null==n.initialDelay||n.initialDelay}start(){return this.running?this.reset():this.nextPoll(!0),this}then(e){(this.callbacks||(this.callbacks=[])).push(e)}reset(){this.nextInterval=this.baseInterval,this.attempts=0}stop(e=!1){this.running&&clearTimeout(this.running),delete this.running,e&&this.callbacks&&this.callbacks.forEach(e=>e()),delete this.callbacks}nextPoll(e=!1){if(e){if(this.reset(),!this.initialDelay)return this.poll()}else this.nextInterval=parseInt(this.nextInterval*this.backoffFactor,10)
return this.attempts>=this.maxAttempts?this.stop():this.running=setTimeout(this.poll,this.nextInterval)}}},OShF:function(e,t,n){"use strict"
var a=n("ouhR"),i=n.n(a),s=n("5Ky4")
n("JI1W")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=i()(this)
i.a.each(["name","id","class"],(n,a)=>{t.attr(a)&&t.attr(a,t.attr(a).replace(/-iterator-/,e.iterator))})})),e.id&&this.attr("id",e.id)
let a=!1
if(e.data)for(var t in e.data){if(e.except&&-1!=i.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=i.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const l=this.find("."+t)
var n=e.avoid||""
l.each((function(){const l=i()(this)
if(l.length>0&&0===l.closest(n).length)if(void 0!==e.data[t]&&null!==e.data[t]||(e.data[t]=""),e.htmlValues&&-1!=i.a.inArray(t,e.htmlValues))l.html(i.a.raw(e.data[t].toString())),l.hasClass("user_content")&&(a=!0,l.removeClass("enhanced"),l.data("unenhanced_content_html",e.data[t].toString()))
else if("INPUT"==l[0].tagName.toUpperCase())l.val(e.data[t])
else try{const n=e.data[t].toString()
l.html(Object(s.a)(n))}catch(e){}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,n,a,s=i()(this)
for(const l in e.hrefValues){if(!e.hrefValues.hasOwnProperty(l))continue
const r=e.hrefValues[l]
if(t=s.attr("href")){const n=i.a.replaceTags(t,r,encodeURIComponent(e.data[r])),a=s.text()===s.html()?s.text():null
t!==n&&(s.attr("href",n),a&&s.text(a))}(n=s.attr("rel"))&&s.attr("rel",i.a.replaceTags(n,r,e.data[r])),(a=s.attr("name"))&&s.attr("name",i.a.replaceTags(a,r,e.data[r]))}})),a&&i()(document).triggerHandler("user_content_change")}return this},i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null},i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,n={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const s=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=i.a.trim(s.text()),"&nbsp;"===s.html()&&(a=""),1===a.length&&160===a.charCodeAt(0)&&(a=""),n[e]=a})}if(e.dataValues)for(t in e.dataValues){var a;(a=this.data(e.dataValues[t]))&&(n[e.dataValues[t]]=a)}if(e.htmlValues)for(t in e.htmlValues){const s=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
a=null,a=s.hasClass("user_content")&&s.data("unenhanced_content_html")?s.data("unenhanced_content_html"):i.a.trim(s.html()),n[e.htmlValues[t]]=a}return n},i.a.fn.getTemplateValue=function(e,t){const n=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(n)[e]}},TBRb:function(e,t,n){"use strict"
var a=n("ouhR"),i=n.n(a),s=n("GLiE"),l=n.n(s),r=n("Nxtp")
n("YGE8")
i.a.fn.fixDialogButtons=function(){return this.each((function(){const e=i()(this),t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let n=i.a.map(t.toArray(),t=>{const n=i()(t)
let a=n.attr("class")||""
const s=n.attr("id")
return n.is(".dialog_closer")&&(n.off(".fixdialogbuttons"),n.on("click.fixdialogbuttons",Object(r.a)(()=>e.dialog("close")))),"submit"===n.prop("type")&&n[0].form&&(a+=" button_type_submit"),{text:n.text(),"data-text-while-loading":n.data("textWhileLoading"),click:()=>n.click(),class:a,id:s}})
n=l.a.sortBy(n,e=>e.class.match(/btn-primary/)?1:0),e.dialog("option","buttons",n)}}))}},btHx:function(e,t,n){"use strict"
var a,i=n("ouhR"),s=n.n(i),l=n("FIFq"),r=n.n(l),o=n("GLiE"),c=n.n(o),d=function(e,t){return function(){return e.apply(t,arguments)}},u={}.hasOwnProperty,h=[].slice,_=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t
return-1}
a=function(e){return null==e&&(e=""),e.charAt(0).toUpperCase()+e.substring(1).toLowerCase()},t.a=function(e){function t(){return this._setStateAfterFetch=d(this._setStateAfterFetch,this),t.__super__.constructor.apply(this,arguments)}return function(e,t){for(var n in t)u.call(t,n)&&(e[n]=t[n])
function a(){this.constructor=e}a.prototype=t.prototype,e.prototype=new a,e.__super__=t.prototype}(t,e),t.prototype.nameRegex=/rel="([a-z]+)/,t.prototype.linkRegex=/^<([^>]+)/,t.prototype.pageRegex=/\Wpage=(\d+)/,t.prototype.perPageRegex=/\Wper_page=(\d+)/,t.prototype.initialize=function(){return t.__super__.initialize.apply(this,arguments),this.urls={}},t.prototype.fetch=function(e){var n,i,l,r,o
return null==e&&(e={}),e=c.a.clone(e),this.loadedAll=!1,this[i="fetching"+a(e.page)+"Page"]=!0,null!=e.page?(null==e.remove&&(e.remove=!1),(null!=(l=this.urls)?l[e.page]:void 0)&&(e.url=this.urls[e.page],e.data="")):null==e.reset&&(e.reset=!0),null!=e.fetchOptions&&(e.data=e.fetchOptions),this.trigger("beforeFetch",this,e),null!=e.page&&this.trigger("beforeFetch:"+e.page,this,e),r=null,e.dataFilter=(o=this,function(t){return o[i]=!1,o._setStateAfterFetch(r,e),t}),n=e.dfd||s.a.Deferred(),r=t.__super__.fetch.call(this,e).done(function(t){return function(a,i,s){var l
return t.trigger("fetch",t,a,e),null!=e.page&&t.trigger("fetch:"+e.page,t,a,e),(null!=(l=t.urls)?l.next:void 0)||t.trigger.apply(t,["fetched:last"].concat(h.call(arguments))),t.loadAll&&null!=t.urls.next?setTimeout((function(){return t.fetch({page:"next",dfd:n})})):n.resolve(a,i,s)}}(this)),n.abort=r.abort,n.success=n.done,n.error=n.fail,n},t.prototype.canFetch=function(e){return null!=this.urls&&null!=this.urls[e]},t.prototype._setStateAfterFetch=function(e,t){var n,a,i,s,l,r,o,c,d,u,h,m,f,p
return null==this._urlCache&&(this._urlCache=[]),r=t.url,(p=_.call(this._urlCache,r)<0)||this._urlCache.push(t.url),h=(a=!this.atLeastOnePageFetched)||("next"===(o=t.page)||"bottom"===o)&&p,m=a||("prev"===(c=t.page)||"top"===c)&&p,s=this.urls,this.urls=this._parsePageLinks(e),h&&null!=this.urls.next?this.urls.bottom=this.urls.next:this.urls.next?this.urls.bottom=s.bottom:delete this.urls.bottom,m&&null!=this.urls.prev?this.urls.top=this.urls.prev:this.urls.prev?this.urls.top=s.top:delete this.urls.top,null!=(f=null!=(d=this.urls.first)?d:this.urls.next)&&(l=parseInt(f.match(this.perPageRegex)[1],10),(null!=(n=null!=this.options?this.options:this.options={}).params?n.params:n.params={}).per_page=l),this.urls.last&&(i=this.urls.last.match(this.pageRegex))&&(this.totalPages=parseInt(i[1],10)),(null!=(u=this.urls)?u.next:void 0)||(this.loadedAll=!0),this.atLeastOnePageFetched=!0},t.prototype._parsePageLinks=function(e){var t,n,a
return null==(t=null!=(n=e.getResponseHeader("link"))?n.split(","):void 0)&&(t=[]),c.a.reduce(t,(a=this,function(e,t){var n,i
return n=t.match(a.nameRegex)[1],i=t.match(a.linkRegex)[1],e[n]=i,e}),{})},t}(r.a.Collection)},cto6:function(e,t,n){"use strict"
n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return r}))
var a=n("ouhR"),i=n.n(a)
function s(e,t){const n=/^(Sn?r\.?|Senior|Jn?r\.?|Junior|II|III|IV|V|VI|Esq\.?|Esquire)$/i
let a,s,l,r,o,c
return e&&""!==i.a.trim(e)?(c=i.a.map(e.split(","),e=>i.a.trim(e)),a=c[0],s=c[1],l=c.slice(2).join(", "),""===l&&(l=null),l&&!n.test(l)&&(s="".concat(s," ").concat(l),l=null),"string"==typeof s?!l&&n.test(s)&&(l=s,s=a,a=null):(s=i.a.trim(e),a=null),r=s.split(/\s+/),1===r.length&&""===r[0]&&(r=[]),!l&&r.length>1&&n.test(r[r.length-1])&&(l=r.pop()),!a&&t&&!/^\s*$/.test(t)&&(o=t.split(/\s+/))&&r.length>=o.length&&r.slice(r.length-o.length).join(" ")===o.join(" ")&&(a=r.splice(r.length-o.length,o.length).join(" ")),!a&&r.length>1&&(a=r.pop()),[0===r.length?null:r.join(" "),a,l]):[null,null,null]}function l(e){const t=i.a.trim([e[0],e[2]].join(" "))
return i.a.trim(e[1]?"".concat(e[1],", ").concat(t):t)}function r(e){return i.a.trim(e.join(" ").replace(/\s+/," "))}},zX6k:function(e,t,n){"use strict"
n.r(t)
var a=n("An8g"),i=n("LNWH"),s=(n("MggM"),n("u7Gu"),n("7UDL")),l=n("ouhR"),r=n.n(l),o=n("ApMD"),c=n("RzVX")
n("jYyc"),n("UlQx"),n("Z+Ib"),n("YGE8"),n("TBRb"),n("p6Wi"),n("7LJr"),n("OShF"),n("fuo4"),n("MWZS")
const d=r()(".edit_settings_link"),u=r()(".profile_table"),h=r()("#update_profile_form"),_=r()("#default_email_id")
d.click((function(e){return r()(this).hide(),u.addClass("editing").find(".edit_data_row").show().end().find(":focusable:first").focus().select(),!1})),u.find(".cancel_button").click(e=>(d.show(),u.removeClass("editing").find(".change_password_row,.edit_data_row,.more_options_row").hide().end().find("#change_password_checkbox").attr("checked",!1),!1)),u.find("#change_password_checkbox").change((function(e){r()(this).attr("checked")?(r()(this).addClass("showing"),u.find(".change_password_row").show().find("#old_password").focus().select()):u.find(".change_password_row").hide().find(":password").val("")})).attr("checked",!1).change(),h.attr("method","PUT").formSubmit({formErrors:!1,required:h.find("#user_name").length?["name"]:[],object_name:"user",property_validations:{"=default_email_id":function(e,t){if(r()("#default_email_id").length&&(!e||"new"==e))return s.a.t("please_select_an_option","Please select an option")}},beforeSubmit(e){},success(e){const t=e.user,n={short_name:t.short_name,full_name:t.name,sortable_name:t.sortable_name,time_zone:t.time_zone,locale:r()("#user_locale option[value='"+t.locale+"']").text()}
if(n.locale==h.find(".locale").text()){if(_.length>0){const e=_.find("option:selected").text()
r()(".default_email.display_data").text(e)}r()(".channel").removeClass("default"),r()("#channel_"+t.communication_channel.id).addClass("default"),h.fillTemplateData({data:n}).find(".cancel_button").click()}else location.reload()},error(e){if(e.password){const t=r()(this).find("#profile_pseudonym_id").val()
e=o.a.prototype.normalizeErrors(e,ENV.PASSWORD_POLICIES[t]||ENV.PASSWORD_POLICY)}h.loadingImage("remove").formErrors(e),d.click()}}).find(".more_options_link").click(()=>(h.find(".more_options_link_row").hide(),h.find(".more_options_row").show(),!1)),r()("#default_email_id").change((function(){"new"==r()(this).val()&&r()(".add_email_link:first").click()})),r()("#unregistered_services li.service").click((function(e){e.preventDefault(),r()("#"+r()(this).attr("id")+"_dialog").dialog({width:350,open(){r()(this).dialog("widget").find("a").focus()}})})),r()(".create_user_service_form").formSubmit({object_name:"user_service",beforeSubmit(e){r()(this).loadingImage()},success(e){r()(this).loadingImage("remove").parents(".content").dialog("close"),document.location.reload()},error(e){r()(this).loadingImage("remove").errorBox(s.a.t("errors.registration_failed","Registration failed. Check the user name and password, and try again."))}}),r()("#unregistered_services li.service .content form .cancel_button").click((function(e){r()(this).parents(".content").dialog("close")})),r()("#registered_services li.service .delete_service_link").click((function(e){e.preventDefault(),r()(this).parents("li.service").confirmDelete({message:s.a.t("confirms.unregister_service","Are you sure you want to unregister this service?"),url:r()(this).attr("href"),success(e){r()(this).slideUp((function(){r()("#unregistered_services").find("#unregistered_"+r()(this).attr("id")).slideDown()}))}})})),r()(".service").hover((function(){r()(this).addClass("service-hover")}),(function(){r()(this).removeClass("service-hover")})),r()("#show_user_services").change((function(){r.a.ajaxJSON(r()("#update_profile_form").attr("action"),"PUT",{"user[show_user_services]":r()(this).prop("checked")},e=>{},e=>{})})),r()("#disable_inbox").change((function(){r.a.ajaxJSON("/profile/toggle_disable_inbox","POST",{"user[disable_inbox]":r()(this).prop("checked")},e=>{},e=>{})})),r()(".delete_pseudonym_link").click((function(e){e.preventDefault(),r()(this).parents(".pseudonym").confirmDelete({url:r()(this).attr("href"),message:s.a.t("confirms.delete_login","Are you sure you want to delete this login?")})})),r()(".datetime_field").datetime_field(),r()(".expires_field").bind("change keyup",(function(){r()(this).closest("td").find(".hint").showIf(!r()(this).val())})),r()(".delete_key_link").click((function(e){e.preventDefault()
const t=r()(this).closest(".access_token")
let n=t.prevAll(":not(.blank)").first()
0==n.length&&(n=t.nextAll(":not(.blank)").first())
const a=n.length>0?r()(".delete_key_link",n):r()(".add_access_token_link")
t.confirmDelete({url:r()(this).attr("rel"),message:s.a.t("confirms.delete_access_key","Are you sure you want to delete this access key?"),success(){r()(this).remove(),r()(".access_token:visible").length||r()("#no_approved_integrations,#access_tokens_holder").toggle(),a.focus()}})})),r()("#add_access_token_dialog .cancel_button").click(()=>{r()("#add_access_token_dialog").dialog("close")}),r()("#access_token_form").formSubmit({object_name:"access_token",property_validations:{purpose(e){if(!e||""==e)return s.a.t("purpose_required","Purpose is required")}},beforeSubmit(){r()(this).find("button").attr("disabled",!0).filter(".submit_button").text(s.a.t("buttons.generating_token","Generating Token..."))},success(e){r()(this).find("button").attr("disabled",!1).filter(".submit_button").text(s.a.t("buttons.generate_token","Generate Token")),r()("#add_access_token_dialog").dialog("close"),r()("#no_approved_integrations").hide(),r()("#access_tokens_holder").show()
const t=r()(".access_token.blank:first").clone(!0).removeClass("blank")
e.created=r.a.datetimeString(e.created_at)||"--",e.expires=r.a.datetimeString(e.expires_at)||s.a.t("token_never_expires","never"),e.used="--",t.fillTemplateData({data:e,hrefValues:["id"]}),t.data("token",e),r()("#access_tokens > tbody").append(t.show()),t.find(".show_token_link").click()},error(){r()(this).find("button").attr("disabled",!1).filter(".submit_button").text(s.a.t("errors.generating_token_failed","Generating Token Failed"))}}),r()("#token_details_dialog .regenerate_token").click((function(){if(!confirm(s.a.t("confirms.regenerate_token","Are you sure you want to regenerate this token?  Anything using this token will have to be updated.")))return
const e=r()("#token_details_dialog"),t=e.data("token"),n=e.data("token_url"),a=r()(this)
a.text(s.a.t("buttons.regenerating_token","Regenerating token...")).attr("disabled",!0),r.a.ajaxJSON(n,"PUT",{"access_token[regenerate]":"1"},n=>{n.created=r.a.datetimeString(n.created_at)||"--",n.expires=r.a.datetimeString(n.expires_at)||s.a.t("token_never_expires","never"),n.used=r.a.datetimeString(n.last_used_at)||"--",n.visible_token=n.visible_token||"protected",e.fillTemplateData({data:n}).find(".full_token_warning").showIf(n.visible_token.length>10),t.data("token",n),a.text(s.a.t("buttons.regenerate_token","Regenerate Token")).attr("disabled",!1)},()=>{a.text(s.a.t("errors.regenerating_token_failed","Regenerating Token Failed")).attr("disabled",!1)})})),r()(".show_token_link").click((function(e){e.preventDefault()
const t=r()("#token_details_dialog"),n=r()(this).attr("rel")
t.dialog({width:700})
const a=r()(this).parents(".access_token")
function i(e){t.fillTemplateData({data:e}),t.data("token_url",n),t.find(".refresh_token").showIf(e.visible_token&&"protected"!==e.visible_token).find(".regenerate_token").text(s.a.t("buttons.regenerate_token","Regenerate Token")).attr("disabled",!1),t.find(".loading_message,.error_loading_message").hide().end().find(".results").show().end().find(".full_token_warning").showIf(e.visible_token.length>10),t.find(".regenerate_token").focus()}t.data("token",a),t.find(".loading_message").show().end().find(".results,.error_loading_message").hide()
const l=a.data("token")
l?i(l):r.a.ajaxJSON(n,"GET",{},e=>{e.created=r.a.datetimeString(e.created_at)||"--",e.expires=r.a.datetimeString(e.expires_at)||s.a.t("token_never_expires","never"),e.used=r.a.datetimeString(e.last_used_at)||"--",e.visible_token=e.visible_token||"protected",a.data("token",e),i(e)},()=>{t.find(".error_loading_message").show().end().find(".results,.loading_message").hide()})})),r()(".add_access_token_link").click((function(e){e.preventDefault(),r()("#access_token_form").find("button").attr("disabled",!1).filter(".submit_button").text(s.a.t("buttons.generate_token","Generate Token")),r()("#add_access_token_dialog").find(":input").val("").end().dialog({width:500,open(){r()(this).closest(".ui-dialog").focus()}}).fixDialogButtons()})),r()(document).fragmentChange((e,t)=>{let n=t.substring(1)
n.match(/^register/)&&(n=n.substring(9)),r()("#unregistered_service_"+n+":visible").length>0&&r()("#unregistered_service_"+n+":visible").click()}).fragmentChange(),new c.a(".profile_pic_link"),r()("#disable_mfa_link").click((function(e){const t=r()(this)
r.a.ajaxJSON(t.attr("href"),"DELETE",{},()=>{r.a.flashMessage(s.a.t("notices.mfa_disabled","Multi-factor authentication disabled")),t.remove(),r()("#otp_backup_codes_link").remove()}),e.preventDefault()}))
n("J7oN"),n("JI1W"),n("Sv6n")
r()(document).ready((function(){r()("#communication_channels").tabs(),r()("#communication_channels").bind("tabsshow",(function(t){let n
if("none"!=r()(this).css("display")){n=0==r()(this).data("selected.tabs")?r()("#register_email_address").find(":text:first"):r()("#register_sms_number").find("input[type=tel]:first")}e(n)})),r()(".channel_list tr").hover((function(){if(r()(this).hasClass("unconfirmed")){let e=s.a.t("titles.contact_not_confirmed","This contact has not been confirmed.  Click the address for more details")
r()(this).closest(".email_channels").length>0&&(e=s.a.t("titles.email_not_confirmed","This email has not been confirmed.  Click the address for more details")),r()(this).attr("title",e),r()(this).find("a.path").parent().attr("title",e)}}),(function(){r()(this).attr("title",""),r()(this).find("a.path").parent().attr("title",r()(this).find("a.path").text())})),r()(".add_email_link,.add_contact_link").click((function(e){e.preventDefault()
let t="email"
r()("#communication_channels").show().dialog({title:s.a.t("titles.register_communication","Register Communication"),width:600,resizable:!1,modal:!0}),r()(this).hasClass("add_contact_link")?(r()("#communication_channels").tabs("select","#register_sms_number"),t="sms"):r()("#communication_channels").tabs("select","#register_email_address")}))
var e=function(e){const t=r()(e).parents("#register_sms_number"),n=t.find(".sms_number").val().replace(/[^\d]/g,""),a=!ENV.INTERNATIONAL_SMS_ENABLED||t.find(".country option:selected").data("useEmail")
if(t.find(".should_be_10_digits").showIf(a&&n&&10!=n.length),t.find(".intl_rates_may_apply").showIf(ENV.INTERNATIONAL_SMS_ENABLED&&!a&&"undecided"!==t.find(".country option:selected").val()),a){t.find(".sms_email_group").show()
let e=t.find(".carrier").val()
if(t.find(".sms_email").attr("disabled","other"!=e),"other"==e)return
e=e.replace("#",n),t.find(".sms_email").val(e)}else t.find(".sms_email_group").hide()}
r()("#register_sms_number .user_selected").bind("change blur keyup focus",(function(){e(this)})),r()("#register_sms_number,#register_email_address,#register_slack_handle").formSubmit({object_name:"communication_channel",processData(e){let t,n
if("email"===e["communication_channel[type]"])n="email",t=e.communication_channel_email
else if("slack"===e["communication_channel[type]"])n="slack",t=e.communication_channel_slack
else{if(ENV.INTERNATIONAL_SMS_ENABLED&&"undecided"===r()("#communication_channel_sms_country").val())return r()(this).formErrors({communication_channel_sms_country:s.a.t("Country or Region is required")}),!1
!ENV.INTERNATIONAL_SMS_ENABLED||r()("#communication_channel_sms_country option:selected").data("useEmail")?(n="sms_email",t=e.communication_channel_sms_email):(n="sms_number",t="+"+e.communication_channel_sms_country+e.communication_channel_sms_number)}if(delete e.communication_channel_sms_country,"email"===n||"sms_email"===n||"slack"===n){if(!t.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){var a=""===t?s.a.t("Email is required"):s.a.t("Email is invalid!")
return"email"==n?r()(this).formErrors({communication_channel_email:a}):r()(this).formErrors({communication_channel_sms_email:a}),!1}}else if(!e.communication_channel_sms_number.match(/^[0-9]+$/)){a=""===t?s.a.t("Cell Number is required"):s.a.t("Cell Number is invalid!")
return r()(this).formErrors({communication_channel_sms_number:a}),!1}delete e.communication_channel_sms_number,delete e.communication_channel_sms_email,delete e.communication_channel_slack,e["communication_channel[address]"]=t},beforeSubmit(e){let t=r()(".email_channels")
"register_sms_number"!==r()(this).attr("id")&&"register_slack_handle"!==r()(this).attr("id")||(t=r()(".other_channels"))
let n=e["communication_channel[address]"]
r()(this).data("email",n),t.find(".channel .path").each((function(){r()(this).text()==n&&(n="")})),t.removeClass("single")
let a=null
return n&&(a=t.find(".channel.blank").clone(!0).removeClass("blank"),"slack"===e["communication_channel[type]"]&&a.find("#communication_text_type").text("slack"),a.find(".path").attr("title",s.a.t("titles.unconfirmed_click_to_confirm","Unconfirmed.  Click to confirm")),a.fillTemplateData({data:{path:n}}),t.find(".channel.blank").before(a.show())),!!n&&(r()("#communication_channels").dialog("close"),r()("#communication_channels").hide(),a.loadingImage({image_size:"small"}),a)},success(e,t){r()("#communication_channels").dialog("close"),r()("#communication_channels").hide(),t.loadingImage("remove"),e.channel_id=e.id
let n="email_select"
"register_sms_number"==r()(this).attr("id")&&(n="sms_select")
const a=r()("#select_templates ."+n),i=r()(document.createElement("option"))
i.val(e.id).text(e.address),a.find("option:last").before(i),a.find("option.blank_option").remove(),r()("."+n).each((function(){let t=r()(this).val()
"new"==t&&(t=e.id),r()(this).after(a.clone(!0).val(t)).remove()})),t.fillTemplateData({data:e,id:"channel_"+e.id,hrefValues:["user_id","pseudonym_id","channel_id"]}),t.find(".path").triggerHandler("click")},error(e,t){t.loadingImage("remove"),t.remove()}}),r()("a.email_address_taken_learn_more").live("click",e=>{e.preventDefault()})
r()(".channel_list .channel .delete_channel_link").click((function(e){e.preventDefault(),r()(this).parents(".channel").confirmDelete({url:r()(this).attr("href"),success(e){const t=r()(this).parents(".channel_list")
!function(e){let t=r()(e).next(".channel:not(.blank)").last()
t.length||(t=r()(e).prev(".channel:not(.blank)").last()),t.length?t.find(".email_channel").first().focus():r()(this).parents(".channel_list .email_channel").first().focus()}(this),r()(this).remove(),t.toggleClass("single",t.find(".channel:visible").length<=1)}})})),r()(".channel_list .channel .reset_bounce_count_link").click((function(e){e.preventDefault(),r.a.ajaxJSON(r()(this).attr("href"),"POST",{},e=>{r()(this).parents(".channel").find(".bouncing-channel").remove(),r()(this).remove(),r.a.flashMessage(s.a.t("Bounce count reset!"))})})),r()("#confirm_communication_channel .cancel_button").click(e=>{r()("#confirm_communication_channel").dialog("close")}),r()(".email_channels .channel .path,.other_channels .channel .path").click((function(e){e.preventDefault()
const t=r()(this).parents(".channel")
if(t.hasClass("unconfirmed")){let e="email address",n=s.a.t("titles.confirm_email_address","Confirm Email Address")
r()(this).parents(".channel_list").hasClass("other_channels")&&(e="sms number",n=s.a.t("Confirm Communication Channel"))
let a=r()("#confirm_communication_channel")
t.parents(".email_channels").length>0&&(a=r()("#confirm_email_channel"))
const i=t.getTemplateData({textValues:["user_id","pseudonym_id","channel_id"]})
let l=r()(this).text()
r.a.ajaxJSON("/confirmations/".concat(i.user_id,"/limit_reached/").concat(i.channel_id),"GET",{},e=>{e.confirmation_limit_reached?a.find(".re_send_confirmation_link").css("visibility","hidden"):a.find(".re_send_confirmation_link").css("visibility","visible")},e=>{}),"sms number"==e&&(l=l.split("@")[0]),i.code="",a.fillTemplateData({data:{path:l,path_type:e,user_id:i.user_id,channel_id:i.channel_id}}),a.find(".status_message").css("visibility","hidden")
let o=r()(".re_send_confirmation_url").attr("href")
o=r.a.replaceTags(o,"id",i.channel_id),o=r.a.replaceTags(o,"pseudonym_id",i.pseudonym_id),o=r.a.replaceTags(o,"user_id",i.user_id),a.find(".re_send_confirmation_link").attr("href",o).text(s.a.t("links.resend_confirmation","Re-Send Confirmation")),a.fillFormData(i),a.show().dialog({title:n,width:350,open(){r()(this).closest(".ui-dialog").focus()}})}})),r()("#confirm_communication_channel").formSubmit({formErrors:!1,processData(e){let t=r()(this).find(".register_channel_link").attr("href")
t=r.a.replaceTags(t,"id",e.channel_id),t=r.a.replaceTags(t,"code",e.code),r()(this).attr("action",t)},beforeSubmit(e){r()(this).find(".status_message").text(s.a.t("confirming_contact","Confirming...")).css("visibility","visible")},success(e){r()(this).find(".status_message").css("visibility","hidden")
const t=e.communication_channel.pseudonym_id
r()("#channel_"+e.communication_channel.id).removeClass("unconfirmed"),r()(".channel.pseudonym_"+t).removeClass("unconfirmed"),r()("#confirm_communication_channel").dialog("close"),r.a.flashMessage(s.a.t("notices.contact_confirmed","Contact successfully confirmed!"))},error(e){r()(this).find(".status_message").css("visibility","hidden"),r.a.flashError(s.a.t("Confirmation failed.  Please try again."))}}),r()(".channel_list .channel .default_link").click((function(e){e.preventDefault()
const t={default_email_id:r()(this).parents(".channel").getTemplateData({textValues:["channel_id"]}).channel_id}
r.a.ajaxJSON(r()(this).attr("href"),"PUT",t,e=>{const t=e.user.communication_channel.id
r()(".channel.default").removeClass("default").find("a.default_link span.screenreader-only.default_label").remove(),r()(".channel#channel_"+t).addClass("default").find("a.default_link").append(r()('<span class="screenreader-only" />').text(s.a.t("This is the default email address"))),r()(".default_email.display_data").text(e.user.communication_channel.path)})})),r()(".dialog .re_send_confirmation_link").click((function(e){e.preventDefault()
const t=r()(this)
t.text(s.a.t("links.resending_confirmation","Re-Sending...")),r.a.ajaxJSON(t.attr("href"),"POST",{},e=>{t.text(s.a.t("links.resent_confirmation","Done! Message may take a few minutes."))},e=>{t.text(s.a.t("links.resend_confirmation_failed","Request failed. Try again."))})})),r()("#communication_channels .cancel_button").click(e=>{r()("#communication_channels").dialog("close")}),r()("#confirm_email_channel .cancel_button").click(()=>{r()("#confirm_email_channel").dialog("close")})}))
n("q1tI")
var m=n("i8i4"),f=n.n(m),p=n("UFnn"),g=n("3lLS")
n.n(g)()(()=>{const e=[]
ENV.NEW_USER_TUTORIALS_ENABLED_AT_ACCOUNT||e.push("new_user_tutorial_on_off"),new i.a({el:".feature-flag-wrapper",hiddenFlags:e}).collection.fetchAll()
const t=document.querySelector("#pairing-code")
t&&f.a.render(Object(a.a)(p.a,{userId:ENV.current_user.id}),t)})}}])

//# sourceMappingURL=profile-c-1c25df8ca1.js.map