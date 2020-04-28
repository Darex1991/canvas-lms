(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[636],{xR7n:function(e,t,a){"use strict"
a.r(t)
var n=a("ouhR"),c=a.n(n),i=a("5Ky4"),o=a("xe+K")
a("iBIV")
const m={insertCode(e,t,a,n){const i=c()("#"+e.id),m=this.makeLinkHtml(t,a,n)
Object(o.d)(i,"insert_code",m)},makeLinkHtml:(e,t,a)=>c()("<a />").attr({href:"/media_objects/".concat(Object(i.a)(e))}).addClass("instructure_inline_media_comment").addClass("".concat(Object(i.a)(t||"video"),"_comment")).attr({id:"media_comment_".concat(Object(i.a)(e))}).attr({"data-alt":Object(i.a)(a)}).text("this is a media comment")[0].outerHTML,getComment:(e,t)=>c()(e.getBody()).find("#media_comment_"+t+" + br")[0],collapseMediaComment(e,t){const a=this.getComment(e)
e.selection.select(a),e.selection.collapse(!0)},commentCreatedCallback(e,t,a,n){this.insertCode(e,t,a,n),this.collapseMediaComment(e,t)},insertEditor(e){c.a.mediaComment("create","any",this.commentCreatedCallback.bind(this,e))}}
t.default=m}}])

//# sourceMappingURL=636-c-6b56e1c838.js.map