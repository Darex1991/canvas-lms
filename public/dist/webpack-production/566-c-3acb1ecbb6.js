(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[566,631],{"75OS":function(t,e,a){"use strict"
a.r(e)
var r=a("y+46")
e.default=()=>{r.ltiState.tray||(r.ltiState.tray={}),r.ltiState.tray.refreshOnClose=!0}},yySz:function(t,e,a){"use strict"
a.r(e)
var r=a("75OS"),s=a("y+46")
const o={messageType:"lti.resourceImported",data:"http://localhost/test"}
describe("lti.resourceImported",()=>{afterAll(()=>{delete s.ltiState.tray}),it("adds refreshOnClose state to window",()=>{Object(r.default)(o),expect(s.ltiState.tray).toEqual({refreshOnClose:!0})})})}}])

//# sourceMappingURL=566-c-3acb1ecbb6.js.map