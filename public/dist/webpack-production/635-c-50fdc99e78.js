(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[635],{"gg/z":function(e,t,a){"use strict"
a.r(t)
var i=a("ouhR"),o=a.n(i)
a("YGE8")
t.default=function(e){let t=o()("#equella_dialog")
const a=o()("#equella_endpoint_url").attr("href"),i=o.a.trim(o()("#equella_action").text()||"")||"selectOrAdd",r=o()("#equella_callback_url").attr("href"),n=o()("#equella_cancel_url").attr("href")
if(!a||!r||!n)return void alert("Equella is not properly configured for this account, please notify your system administrator.")
const l=Math.max(Math.min(o()(window).height()-100,550),100)
if(!t.length){const a='<div id="equella_dialog" style="padding: 0; overflow-y: hidden;"/>',i=o.a.raw("<div class='teaser' style='width: 800px; margin-bottom: 10px; display: none;'></div>")+o.a.raw("<iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: ")+o.a.raw(l)+o.a.raw("px; border: 0;' src='about:blank' borderstyle='0'/>")
t=o()(a).hide().html(i).appendTo("body").dialog({autoOpen:!1,width:"auto",resizable:!0,resizeStart(){o()(this).find("iframe").each((function(){o()('<div class="fix_for_resizing_over_iframe" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e7}).css(o()(this).offset()).appendTo("body")}))},resizeStop(){o()(".fix_for_resizing_over_iframe").remove()},resize(){o()(this).find("iframe").add(".fix_for_resizing_over_iframe").height(o()(this).height()).width(o()(this).width())},close(){t.find("iframe").attr("src","about:blank")},title:"Embed content from Equella"}).bind("equella_ready",(a,i)=>{t.data("editor")
if(e.selection.getContent())e.execCommand("mceInsertLink",!1,{title:i.name,href:i.url,class:"equella_content_link"})
else{const t=o()("<div><a/></div>")
t.find("a").attr("title",i.name).attr("href",i.url).attr("class","equella_content_link").text(i.name),e.execCommand("mceInsertContent",!1,t.html())}o()("#equella_dialog").dialog("close")})}const s=o()("#equella_teaser").html()
t.find(".teaser").hide(),s&&t.find(".teaser").html(s).show()
let d=a
d=d+"?method=lms&returnprefix=eq_&action="+i,d=d+"&returnurl="+encodeURIComponent(r),d=d+"&cancelurl="+encodeURIComponent(n),t.data("editor",e),t.dialog("close").dialog("open"),t.find("iframe").attr("src",d)}}}])

//# sourceMappingURL=635-c-50fdc99e78.js.map