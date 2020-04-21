(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[253],{OeCm:function(e,n,a){"use strict"
a.r(n)
a("Rj04")},Rj04:function(e,n,a){"use strict"
var t=a("ouhR"),s=a.n(t),i=a("7UDL"),r=a("Nxtp")
a("jYyc"),a("MWZS")
s()(()=>{let e=!1
s()(".re_send_confirmation_link").click(Object(r.a)((function(){const n=s()(this),a=n.text()
e||(e=!0,n.text(i.a.t("resending","resending...")),s.a.ajaxJSON(n.attr("href"),"POST",{},t=>{e=!1,n.text(a),s.a.flashMessage(i.a.t("done_resending","Done! Message delivery may take a few minutes."))},t=>{e=!1,n.text(a),s.a.flashError(i.a.t("failed_resending","Request failed. Try again."))}))})))})}}])

//# sourceMappingURL=confirm_email-c-fc3bfcdb10.js.map