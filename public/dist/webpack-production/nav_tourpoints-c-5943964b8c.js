(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[463],{wNRn:function(n,e,s){"use strict"
s.r(e)
var t=s("An8g"),i=s("q1tI"),o=s.n(i),u=s("i8i4"),c=s.n(u),d=s("3lLS"),l=s.n(d)
const a=o.a.lazy(()=>Promise.all([s.e(2),s.e(9),s.e(13),s.e(44),s.e(529)]).then(s.bind(null,"mTPw")))
l()(()=>{var n,e
const s=window.ENV.current_user_roles||[],i=[];(window.ENV.current_user_types||[]).includes("Account Admin")&&i.push("admin"),(s.includes("teacher")||(null===(n=window.ENV.COURSE)||void 0===n?void 0:n.is_instructor))&&i.push("teacher"),(s.includes("student")||(null===(e=window.ENV.COURSE)||void 0===e?void 0:e.is_student))&&i.push("student")
const u=document.getElementById("global_nav_tour")
u&&i.length>0&&c.a.render(Object(t.a)(o.a.Suspense,{fallback:null},void 0,Object(t.a)(a,{roles:i})),u)})}}])

//# sourceMappingURL=nav_tourpoints-c-5943964b8c.js.map