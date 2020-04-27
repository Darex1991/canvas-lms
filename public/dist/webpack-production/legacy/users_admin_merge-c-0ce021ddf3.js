(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[319],{MaxM:function(e,t,c){"use strict"
c.r(t)
var a=c("ouhR"),n=c.n(a)
c("UBKe")
const o=n()("#select_name"),s=n()("#selected_name")
n()("#account_select").change((function(){n()(".account_search").hide(),n()("#account_search_".concat(n()(this).val())).show()})).change(),t.default=n()(".account_search .user_name").each((function(){const e=n()(this)
return e.autocomplete({minLength:4,source:e.data("autocompleteSource")}),e.bind("autocompleteselect autocompletechange",(e,t)=>{t.item?(s.text(t.item.label),o.show().attr("href",n.a.replaceTags(n()("#select_name").attr("rel"),"id",t.item.id))):o.hide()})}))}}])

//# sourceMappingURL=users_admin_merge-c-0ce021ddf3.js.map