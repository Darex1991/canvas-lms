(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[569,633],{S3m7:function(n,t,e){"use strict"
e.r(t)
t.default=n=>{let t=ENV.context_asset_string.replace("_","s/")
t.startsWith("account")||t.startsWith("course")||(t="accounts/"+ENV.DOMAIN_ROOT_ACCOUNT_ID)
const e=new URL(n)
e.searchParams.append("full_win_launch_requested","1"),e.searchParams.append("platform_redirect_url",window.location)
const o="".concat(window.location.origin,"/").concat(t,"/external_tools/retrieve?display=borderless&url=").concat(encodeURIComponent(e.toString()))
window.location.assign(o)}},w8Zi:function(n,t,e){"use strict"
e.r(t),function(n){var t=e("S3m7")
const o={messageType:"requestFullWindowLaunch",data:"http://localhost/test"}
describe("requestFullWindowLaunch",()=>{const e=window.location.assign
n.URL=jest.fn().mockImplementation(()=>({searchParams:{append:jest.fn()}})),beforeAll(()=>{delete window.location,window.location={assign:jest.fn()}}),afterAll(()=>{window.location.assign=e}),it("opens new window on requestFullWindowLaunch",()=>{ENV.context_asset_string="account_1",Object(t.default)(o),expect(window.location.assign).toHaveBeenCalled()})})}.call(this,e("yLpj"))}}])

//# sourceMappingURL=569-c-d1f71d745e.js.map