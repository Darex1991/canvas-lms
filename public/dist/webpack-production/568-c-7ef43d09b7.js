(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[568,632],{"75OS":function(t,e,a){"use strict"
a.r(e)
var r=a("y+46")
e.default=()=>{r.ltiState.tray||(r.ltiState.tray={}),r.ltiState.tray.refreshOnClose=!0}},yySz:function(t,e,a){"use strict"
a.r(e)
var r=a("75OS"),s=a("y+46")
const o={messageType:"lti.resourceImported",data:"http://localhost/test"}
describe("lti.resourceImported",()=>{afterAll(()=>{delete s.ltiState.tray}),it("adds refreshOnClose state to window",()=>{Object(r.default)(o),expect(s.ltiState.tray).toEqual({refreshOnClose:!0})})})}}])

//# sourceMappingURL=568-c-7ef43d09b7.js.map