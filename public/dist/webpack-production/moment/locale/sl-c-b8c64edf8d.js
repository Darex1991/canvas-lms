(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[434],{PKY2:function(e,n,a){a("gVVK")
const s=a("wd/R").localeData("sl")
s._monthsShort=["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],s._weekdaysShort=["ned","pon","tor","sre","čet","pet","sob"]},gVVK:function(e,n,a){!function(e){"use strict"
function n(e,n,a,s){var t=e+" "
switch(a){case"s":return n||s?"nekaj sekund":"nekaj sekundami"
case"ss":return t+=1===e?n?"sekundo":"sekundi":2===e?n||s?"sekundi":"sekundah":e<5?n||s?"sekunde":"sekundah":"sekund"
case"m":return n?"ena minuta":"eno minuto"
case"mm":return t+=1===e?n?"minuta":"minuto":2===e?n||s?"minuti":"minutama":e<5?n||s?"minute":"minutami":n||s?"minut":"minutami"
case"h":return n?"ena ura":"eno uro"
case"hh":return t+=1===e?n?"ura":"uro":2===e?n||s?"uri":"urama":e<5?n||s?"ure":"urami":n||s?"ur":"urami"
case"d":return n||s?"en dan":"enim dnem"
case"dd":return t+=1===e?n||s?"dan":"dnem":2===e?n||s?"dni":"dnevoma":n||s?"dni":"dnevi"
case"M":return n||s?"en mesec":"enim mesecem"
case"MM":return t+=1===e?n||s?"mesec":"mesecem":2===e?n||s?"meseca":"mesecema":e<5?n||s?"mesece":"meseci":n||s?"mesecev":"meseci"
case"y":return n||s?"eno leto":"enim letom"
case"yy":return t+=1===e?n||s?"leto":"letom":2===e?n||s?"leti":"letoma":e<5?n||s?"leta":"leti":n||s?"let":"leti"}}e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT"
case 3:return"[v] [sredo] [ob] LT"
case 6:return"[v] [soboto] [ob] LT"
case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT"
case 3:return"[prejšnjo] [sredo] [ob] LT"
case 6:return"[prejšnjo] [soboto] [ob] LT"
case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(a("wd/R"))}}])

//# sourceMappingURL=sl-c-b8c64edf8d.js.map