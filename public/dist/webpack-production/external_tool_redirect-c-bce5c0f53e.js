(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[283],{"27kk":function(e,t,r){"use strict"
r.r(t)
var n=r("ouhR"),c=r.n(n)
class s{constructor(){this._contentReady=(e,t)=>t&&"file"===t.return_type?this.createMigration(t.url):this.redirectToSuccessUrl(),this._contentCancel=(e,t)=>{location.href=this.cancelUrl},this.redirectToSuccessUrl=()=>{location.href=this.successUrl},this.createMigration=e=>{const t={migration_type:"canvas_cartridge_importer",settings:{file_url:e}},r="/api/v1/courses/".concat(ENV.course_id,"/content_migrations")
return c.a.ajaxJSON(r,"POST",t,this.redirectToSuccessUrl,this.handleError)}}attachLtiEvents(){c()(window).on("externalContentReady",this._contentReady),c()(window).on("externalContentCancel",this._contentCancel)}handleError(e){return c.a.flashError(e.message)}}s.prototype.successUrl=ENV.redirect_return_success_url,s.prototype.cancelUrl=ENV.redirect_return_cancel_url,c()(document).ready(()=>{window.external_tool_redirect={ready(){}},(new s).attachLtiEvents()})}}])

//# sourceMappingURL=external_tool_redirect-c-bce5c0f53e.js.map