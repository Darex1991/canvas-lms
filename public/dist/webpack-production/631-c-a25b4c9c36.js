(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[631],{Af1U:function(e,t,s){"use strict"
s.r(t)
var a=s("y+46")
const n={messageType:"requestFullWindowLaunch",data:"http://localhost/test"}
function c(e,t,s){return{data:e,origin:t,source:s}}describe("handleLtiPostMessage",()=>{describe("when a whitelisted event is processed",()=>{it("attempts to call the message handler",async()=>{ENV.context_asset_string="account_1"
const e=await Object(a.default)(c(n))
expect(e).toBeTruthy()})}),describe("when a non-whitelisted event is processed",()=>{it("does not attempt to call the message handler",async()=>{const e=await Object(a.default)(c({messageType:"notSupported"}))
expect(e).toBeFalsy()})})}),describe("ltiState",()=>{it("is empty initially",()=>{expect(a.ltiState).toEqual({})})})}}])

//# sourceMappingURL=631-c-a25b4c9c36.js.map