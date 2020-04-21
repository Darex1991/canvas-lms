(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[632],{S3m7:function(n,t,a){"use strict"
a.r(t)
t.default=n=>{let t=ENV.context_asset_string.replace("_","s/")
t.startsWith("account")||t.startsWith("course")||(t="accounts/"+ENV.DOMAIN_ROOT_ACCOUNT_ID)
const a=new URL(n)
a.searchParams.append("full_win_launch_requested","1"),a.searchParams.append("platform_redirect_url",window.location)
const o="".concat(window.location.origin,"/").concat(t,"/external_tools/retrieve?display=borderless&url=").concat(encodeURIComponent(a.toString()))
window.location.assign(o)}}}])

//# sourceMappingURL=632-c-af805101f2.js.map