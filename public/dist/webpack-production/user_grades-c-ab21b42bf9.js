(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[515],{YSa5:function(a,e,n){"use strict"
n.r(e)
var r=n("ouhR"),_=n.n(r),d=n("pQTu"),o=n("m0r6")
Object(o.a)(JSON.parse('{"ar":{"no_grade_3fa326c":"لا توجد درجة"},"cy":{"no_grade_3fa326c":"dim gradd"},"da":{"no_grade_3fa326c":"ingen karakter"},"da-x-k12":{"no_grade_3fa326c":"ingen vurdering"},"de":{"no_grade_3fa326c":"ohne Note"},"el":{"no_grade_3fa326c":"δεν υπάρχει βαθμός"},"en-AU":{"no_grade_3fa326c":"no grade"},"en-CA":{"no_grade_3fa326c":"no grade"},"en-GB":{"no_grade_3fa326c":"no grade"},"es":{"no_grade_3fa326c":"sin calificación"},"fa":{"no_grade_3fa326c":"نمره موجود نیست"},"fi":{"no_grade_3fa326c":"ei arvosanaa"},"fr":{"no_grade_3fa326c":"pas de note"},"fr-CA":{"no_grade_3fa326c":"pas de note"},"he":{"no_grade_3fa326c":"אין הערכה"},"ht":{"no_grade_3fa326c":"pa gen nòt"},"hu":{"no_grade_3fa326c":"nincs érdemjegy"},"hy":{"no_grade_3fa326c":"Գնահատական չկա"},"is":{"no_grade_3fa326c":"engin einkunn"},"it":{"no_grade_3fa326c":"nessun voto"},"ja":{"no_grade_3fa326c":"成績なし"},"mi":{"no_grade_3fa326c":"kaore he kōeke"},"nb":{"no_grade_3fa326c":"Ingen karakter"},"nb-x-k12":{"no_grade_3fa326c":"Ingen vurdering"},"nl":{"no_grade_3fa326c":"geen cijfer"},"nn":{"no_grade_3fa326c":"inga vurdering"},"pl":{"no_grade_3fa326c":"brak oceny"},"pt":{"no_grade_3fa326c":"sem nota"},"pt-BR":{"no_grade_3fa326c":"sem nota"},"ru":{"no_grade_3fa326c":"нет оценки"},"sl":{"no_grade_3fa326c":"ni ocene"},"sv":{"no_grade_3fa326c":"inget omdöme"},"sv-x-k12":{"no_grade_3fa326c":"inget omdöme"},"tr":{"no_grade_3fa326c":"not yok"},"uk":{"no_grade_3fa326c":"Не оцінено"},"zh-Hans":{"no_grade_3fa326c":"无成绩"},"zh-Hant":{"no_grade_3fa326c":"無成績"}}'))
n("jQeR"),n("0sPK")
var g=d.default.scoped("user_grades")
n("jYyc")
_()(document).ready((function(){_()(".grading_periods_selector").each((function(){const a=_()(this),e=a.find("option:selected").val()
a.val(e)})),_()(".grading_periods_selector").on("change",(function(a){const e=_()(this),n=e.val(),r=e.attr("data-enrollment-id")
_.a.ajaxJSON(ENV.grades_for_student_url,"GET",{grading_period_id:n,enrollment_id:r},a=>{let e,n=_()(this).closest("tr").children(".percent")
e=a.hide_final_grades?"--":a.grade||0===a.grade?a.grade+"%":g.t("no grade"),n.text(e)})}))}))}}])

//# sourceMappingURL=user_grades-c-ab21b42bf9.js.map