(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[467],{mHEZ:function(e,n,s){"use strict"
s.r(n)
var t=s("ouhR"),o=s.n(t),c=s("3lLS"),a=s.n(c)
s("phXn")
a()(()=>{o()(".field-with-fancyplaceholder input").fancyPlaceholder(),o()("#login_form").find(":text:first").select()
const e=o()("#select_phone_form"),n=o()("#new_phone_form"),s=e.find("select")
s.change(()=>{"{{id}}"===s.val()&&(e.hide(),n.show())}),o()("#back_to_choose_number_link").click(t=>{n.hide(),e.show(),s.find("option:first").attr("selected","selected"),t.preventDefault()})})},phXn:function(e,n,s){"use strict"
var t=s("ouhR"),o=s.n(t)
o.a.fn.fancyPlaceholder=function(){let e=[]
function n(){o.a.each(e,(e,n)=>{n[1][n[0].val()?"hide":"show"]()})}return this.each((function(){const s=o()(this),t=o()("label[for="+s.attr("id")+"]")
t.addClass("placeholder").wrapInner("<span/>").css({"font-family":s.css("font-family"),"font-size":s.css("font-size")}),s.focus(()=>{t.addClass("focus",300)}).blur(()=>{t.removeClass("focus",300)}).bind("keyup",n)
try{o()("input:focus").get(0)==this&&s.triggerHandler("focus")}catch(e){}e.push([s,t]),window.setInterval(n,100)}))}}}])

//# sourceMappingURL=otp_login-c-e5c4b2dd39.js.map