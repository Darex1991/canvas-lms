(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[634],{MOpQ:function(e,t,n){"use strict"
n.r(t)
var a=n("u7Gu"),o=n("ouhR"),i=n.n(o),c=n("JD5e")
n("jYyc")
let d=window.ENV.page_view_update_url
d&&i()(()=>{let e=0
if(a.a.interaction_contexts={},d){let t=0
const n=300
let o
i()(document).bind("page_view_update_url_received",(e,t)=>{d=t}),i()(document).bind("page_view_update",(a,c)=>{const r={};(c||e>10&&t<n)&&(r.interaction_seconds=e,i.a.ajaxJSON(d,"PUT",r,null,(e,t)=>{422===t.status&&clearInterval(o)}),e=0)}),o=setInterval(()=>{i()(document).triggerHandler("page_view_update")},1e3*n),window.addEventListener("unload",()=>{if(e>30){const t=new FormData
t.append("interaction_seconds",e),t.append("_method","put"),t.append("authenticity_token",Object(c.a)()),t.append("utf8","&#x2713"),navigator.sendBeacon(d,t)}},!1)
let r=!1
i()(document).bind("mousemove keypress mousedown focus",()=>{r=!0}),setInterval(()=>{r?(e++,a.a&&a.a.interaction_context&&a.a.interaction_contexts&&(a.a.interaction_contexts[a.a.interaction_context]=(a.a.interaction_contexts[a.a.interaction_context]||0)+1),r=!1,t>=n&&(t=0,i()(document).triggerHandler("page_view_update")),t=0):t++},1e3)}})}}])

//# sourceMappingURL=634-c-8d37612d38.js.map