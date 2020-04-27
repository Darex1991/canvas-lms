(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[65],{"/HcR":function(n,r,a){"use strict"
var t=a("O92E"),e=a("2bDf"),i=a("IYu7"),o=a("V3mB"),l=a("Hp5Y")
function c(n,r){return Object.keys(r).forEach((function(a){n[a]=r[a]})),n}n.exports=function n(){var r=c({},l),a="en",s={},u=function(n){return n},d=null,f="warning",h={}
function m(n,r,i){var o="string"==typeof n?n:n.default,l=v(o,"object"==typeof n&&n.id||u(o),i||a)
return(l.format||(l.format=e(t(l.message),i||a,h)))(r)}m.rich=function(n,r,i){var o="string"==typeof n?n:n.default,l=v(o,"object"==typeof n&&n.id||u(o),i||a)
return(l.toParts||(l.toParts=e.toParts(t(l.message,{tagsType:p}),i||a,h)))(r)}
var p="<>"
function g(n,r){var a=n[2]
return function(n,r){var t="object"==typeof a?function(n,r){return Object.keys(n).reduce((function(a,t){return a[t]=n[t](r),a}),{})}(a,r):a
return"function"==typeof n?n(t):n}}function v(n,r,a){var t=o(a,s)||"en",e=s[t]||(s[t]={}),i=e[r]
if("string"==typeof i&&(i=e[r]={message:i}),!i){var l='Translation for "'+r+'" in "'+t+'" is missing'
if("warning"===f)"undefined"!=typeof console&&console.warn(l)
else if("ignore"!==f)throw new Error(l)
var c="function"==typeof d?d(n,r,t)||n:d||n
i=e[r]={message:c}}return i}function x(n,r,t,e,l){"object"==typeof t&&"object"!=typeof e&&(l=e,e=t,t=0)
var c=o(l||a,i),s=c&&i[c][n]||b
return e["="+ +r]||e[s(r-t)]||e.other}function b(){return"other"}return h[p]=g,m.setup=function(n){return(n=n||{}).locale&&(a=n.locale),"translations"in n&&(s=n.translations||{}),n.generateId&&(u=n.generateId),"missingReplacement"in n&&(d=n.missingReplacement),n.missingTranslation&&(f=n.missingTranslation),n.formats&&(n.formats.number&&c(r.number,n.formats.number),n.formats.date&&c(r.date,n.formats.date),n.formats.time&&c(r.time,n.formats.time)),n.types&&((h=n.types)[p]=g),{locale:a,translations:s,generateId:u,missingReplacement:d,missingTranslation:f,formats:r,types:h}},m.number=function(n,t,e){var i=t&&r.number[t]||r.parseNumberPattern(t)||r.number.default
return new Intl.NumberFormat(e||a,i).format(n)},m.date=function(n,t,e){var i=t&&r.date[t]||r.parseDatePattern(t)||r.date.default
return new Intl.DateTimeFormat(e||a,i).format(n)},m.time=function(n,t,e){var i=t&&r.time[t]||r.parseDatePattern(t)||r.time.default
return new Intl.DateTimeFormat(e||a,i).format(n)},m.select=function(n,r){return r[n]||r.other},m.custom=function(n,r,a,t){return n[1]in h?h[n[1]](n,r)(a,t):a},m.plural=x.bind(null,"cardinal"),m.selectordinal=x.bind(null,"ordinal"),m.namespace=n,m}()},"2bDf":function(n,r,a){"use strict"
var t=a("Hp5Y"),e=a("V3mB"),i=a("IYu7")
function o(n,r,a,t,e){var i=n.map((function(n){return function(n,r,a,t,e){if("string"==typeof n){var i=n
return function(){return i}}var c,s=n[0],u=n[1]
if(r&&"#"===n[0]){s=r[0]
var d=r[2],h=(t.number||f.number)([s,"number"],a)
return function(n){return h(l(s,n)-d,n)}}"plural"===u||"selectordinal"===u?(c={},Object.keys(n[3]).forEach((function(r){c[r]=o(n[3][r],n,a,t,e)})),n=[n[0],n[1],n[2],c]):n[2]&&"object"==typeof n[2]&&(c={},Object.keys(n[2]).forEach((function(r){c[r]=o(n[2][r],n,a,t,e)})),n=[n[0],n[1],c])
var m=u&&(t[u]||f[u])
if(m){var p=m(n,a)
return function(n){return p(l(s,n),n)}}return e?function(n){return String(l(s,n))}:function(n){return l(s,n)}}(n,r,a,t,e)}))
return e?1===i.length?i[0]:function(n){for(var r="",a=0;a<i.length;++a)r+=i[a](n)
return r}:function(n){return i.reduce((function(r,a){return r.concat(a(n))}),[])}}function l(n,r){if(r&&n in r)return r[n]
for(var a=n.split("."),t=r,e=0,i=a.length;t&&e<i;++e)t=t[a[e]]
return t}function c(n,r){var a=n[2],e=t.number[a]||t.parseNumberPattern(a)||t.number.default
return new Intl.NumberFormat(r,e).format}function s(n,r){var a=n[1],e=n[2],i=t[a][e]||t.parseDatePattern(e)||t[a].default
return new Intl.DateTimeFormat(r,i).format}function u(n,r){var a,t="selectordinal"===n[1]?"ordinal":"cardinal",o=n[2],l=n[3]
if(Intl.PluralRules&&Intl.PluralRules.supportedLocalesOf(r).length>0)a=new Intl.PluralRules(r,{type:t})
else{var c=e(r,i),s=c&&i[c][t]||d
a={select:s}}return function(n,r){return(l["="+ +n]||l[a.select(n-o)]||l.other)(r)}}function d(){return"other"}(r=n.exports=function(n,r,a){return o(n,null,r||"en",a||{},!0)}).toParts=function(n,r,a){return o(n,null,r||"en",a||{},!1)}
var f={number:c,ordinal:c,spellout:c,duration:function(n,r){var a=n[2],e=t.duration[a]||t.duration.default,i=new Intl.NumberFormat(r,e.seconds).format,o=new Intl.NumberFormat(r,e.minutes).format,l=new Intl.NumberFormat(r,e.hours).format,c=/^fi$|^fi-|^da/.test(String(r))?".":":"
return function(n,r){if(n=+n,!isFinite(n))return i(n)
var a=~~(n/60/60),t=~~(n/60%60),e=(a?l(Math.abs(a))+c:"")+o(Math.abs(t))+c+i(Math.abs(n%60))
return n<0?l(-1).replace(l(1),e):e}},date:s,time:s,plural:u,selectordinal:u,select:function(n,r){var a=n[2]
return function(n,r){return(a[n]||a.other)(r)}}}
r.types=f},Hp5Y:function(n,r){var a="long",t="short",e="numeric"
n.exports={number:{decimal:{style:"decimal"},integer:{style:"decimal",maximumFractionDigits:0},currency:{style:"currency",currency:"USD"},percent:{style:"percent"},default:{style:"decimal"}},date:{short:{month:e,day:e,year:"2-digit"},medium:{month:t,day:e,year:e},long:{month:a,day:e,year:e},full:{month:a,day:e,year:e,weekday:a},default:{month:t,day:e,year:e}},time:{short:{hour:e,minute:e},medium:{hour:e,minute:e,second:e},long:{hour:e,minute:e,second:e,timeZoneName:t},full:{hour:e,minute:e,second:e,timeZoneName:t},default:{hour:e,minute:e,second:e}},duration:{default:{hours:{minimumIntegerDigits:1,maximumFractionDigits:0},minutes:{minimumIntegerDigits:2,maximumFractionDigits:0},seconds:{minimumIntegerDigits:2,maximumFractionDigits:3}}},parseNumberPattern:function(n){if(n){var r={},a=n.match(/\b[A-Z]{3}\b/i),t=n.replace(/[^¤]/g,"").length
if(!t&&a&&(t=1),t?(r.style="currency",r.currencyDisplay=1===t?"symbol":2===t?"code":"name",r.currency=a?a[0].toUpperCase():"USD"):n.indexOf("%")>=0&&(r.style="percent"),!/[@#0]/.test(n))return r.style?r:void 0
if(r.useGrouping=n.indexOf(",")>=0,/E\+?[@#0]+/i.test(n)||n.indexOf("@")>=0){var e=n.replace(/E\+?[@#0]+|[^@#0]/gi,"")
r.minimumSignificantDigits=Math.min(Math.max(e.replace(/[^@0]/g,"").length,1),21),r.maximumSignificantDigits=Math.min(Math.max(e.length,1),21)}else{for(var i=n.replace(/[^#0.]/g,"").split("."),o=i[0],l=o.length-1;"0"===o[l];)--l
r.minimumIntegerDigits=Math.min(Math.max(o.length-1-l,1),21)
var c=i[1]||""
for(l=0;"0"===c[l];)++l
for(r.minimumFractionDigits=Math.min(Math.max(l,0),20);"#"===c[l];)++l
r.maximumFractionDigits=Math.min(Math.max(l,0),20)}return r}},parseDatePattern:function(n){if(n){for(var r={},i=0;i<n.length;){for(var o=n[i],l=1;n[++i]===o;)++l
switch(o){case"G":r.era=5===l?"narrow":4===l?a:t
break
case"y":case"Y":r.year=2===l?"2-digit":e
break
case"M":case"L":l=Math.min(Math.max(l-1,0),4),r.month=[e,"2-digit",t,a,"narrow"][l]
break
case"E":case"e":case"c":r.weekday=5===l?"narrow":4===l?a:t
break
case"d":case"D":r.day=2===l?"2-digit":e
break
case"h":case"K":r.hour12=!0,r.hour=2===l?"2-digit":e
break
case"H":case"k":r.hour12=!1,r.hour=2===l?"2-digit":e
break
case"m":r.minute=2===l?"2-digit":e
break
case"s":case"S":r.second=2===l?"2-digit":e
break
case"z":case"Z":case"v":case"V":r.timeZoneName=1===l?t:a}}return Object.keys(r).length?r:void 0}}}},IYu7:function(n,r,a){"use strict"
var t="one",e="two",i="few",o="many",l="other",c=[function(n){return 1===+n?t:l},function(n){var r=+n
return 0<=r&&r<=1?t:l},function(n){return 0===Math.floor(Math.abs(+n))||1===+n?t:l},function(n){var r=+n
return 0===r?"zero":1===r?t:2===r?e:3<=r%100&&r%100<=10?i:11<=r%100&&r%100<=99?o:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length
return 1===r&&0===a?t:l},function(n){var r=+n
return r%10==1&&r%100!=11?t:2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?i:r%10==0||5<=r%10&&r%10<=9||11<=r%100&&r%100<=14?o:l},function(n){var r=+n
return r%10==1&&r%100!=11&&r%100!=71&&r%100!=91?t:r%10==2&&r%100!=12&&r%100!=72&&r%100!=92?e:(3<=r%10&&r%10<=4||r%10==9)&&(r%100<10||19<r%100)&&(r%100<70||79<r%100)&&(r%100<90||99<r%100)?i:0!==r&&r%1e6==0?o:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,e=+(n+".").split(".")[1]
return 0===a&&r%10==1&&r%100!=11||e%10==1&&e%100!=11?t:0===a&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)||2<=e%10&&e%10<=4&&(e%100<12||14<e%100)?i:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length
return 1===r&&0===a?t:2<=r&&r<=4&&0===a?i:0!==a?o:l},function(n){var r=+n
return 0===r?"zero":1===r?t:2===r?e:3===r?i:6===r?o:l},function(n){var r=Math.floor(Math.abs(+n)),a=+(""+n).replace(/^[^.]*.?|0+$/g,"")
return 1===+n||0!==a&&(0===r||1===r)?t:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,o=+(n+".").split(".")[1]
return 0===a&&r%100==1||o%100==1?t:0===a&&r%100==2||o%100==2?e:0===a&&3<=r%100&&r%100<=4||3<=o%100&&o%100<=4?i:l},function(n){var r=Math.floor(Math.abs(+n))
return 0===r||1===r?t:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,e=+(n+".").split(".")[1]
return 0===a&&(1===r||2===r||3===r)||0===a&&r%10!=4&&r%10!=6&&r%10!=9||0!==a&&e%10!=4&&e%10!=6&&e%10!=9?t:l},function(n){var r=+n
return 1===r?t:2===r?e:3<=r&&r<=6?i:7<=r&&r<=10?o:l},function(n){var r=+n
return 1===r||11===r?t:2===r||12===r?e:3<=r&&r<=10||13<=r&&r<=19?i:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length
return 0===a&&r%10==1?t:0===a&&r%10==2?e:0!==a||r%100!=0&&r%100!=20&&r%100!=40&&r%100!=60&&r%100!=80?0!==a?o:l:i},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,i=+n
return 1===r&&0===a?t:2===r&&0===a?e:0===a&&(i<0||10<i)&&i%10==0?o:l},function(n){var r=Math.floor(Math.abs(+n)),a=+(""+n).replace(/^[^.]*.?|0+$/g,"")
return 0===a&&r%10==1&&r%100!=11||0!==a?t:l},function(n){var r=+n
return 1===r?t:2===r?e:l},function(n){var r=+n
return 0===r?"zero":1===r?t:l},function(n){var r=Math.floor(Math.abs(+n)),a=+n
return 0===a?"zero":0!==r&&1!==r||0===a?l:t},function(n){var r=+(n+".").split(".")[1],a=+n
return a%10==1&&(a%100<11||19<a%100)?t:2<=a%10&&a%10<=9&&(a%100<11||19<a%100)?i:0!==r?o:l},function(n){var r=(n+".").split(".")[1].length,a=+(n+".").split(".")[1],e=+n
return e%10==0||11<=e%100&&e%100<=19||2===r&&11<=a%100&&a%100<=19?"zero":e%10==1&&e%100!=11||2===r&&a%10==1&&a%100!=11||2!==r&&a%10==1?t:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,e=+(n+".").split(".")[1]
return 0===a&&r%10==1&&r%100!=11||e%10==1&&e%100!=11?t:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length,e=+n
return 1===r&&0===a?t:0!==a||0===e||1!==e&&1<=e%100&&e%100<=19?i:l},function(n){var r=+n
return 1===r?t:0===r||2<=r%100&&r%100<=10?i:11<=r%100&&r%100<=19?o:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length
return 1===r&&0===a?t:0===a&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?i:0===a&&1!==r&&0<=r%10&&r%10<=1||0===a&&5<=r%10&&r%10<=9||0===a&&12<=r%100&&r%100<=14?o:l},function(n){var r=Math.floor(Math.abs(+n))
return 0<=r&&r<=1?t:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length
return 0===a&&r%10==1&&r%100!=11?t:0===a&&2<=r%10&&r%10<=4&&(r%100<12||14<r%100)?i:0===a&&r%10==0||0===a&&5<=r%10&&r%10<=9||0===a&&11<=r%100&&r%100<=14?o:l},function(n){var r=+n
return 0===Math.floor(Math.abs(+n))||1===r?t:2<=r&&r<=10?i:l},function(n){var r=Math.floor(Math.abs(+n)),a=+(n+".").split(".")[1],e=+n
return 0===e||1===e||0===r&&1===a?t:l},function(n){var r=Math.floor(Math.abs(+n)),a=(n+".").split(".")[1].length
return 0===a&&r%100==1?t:0===a&&r%100==2?e:0===a&&3<=r%100&&r%100<=4||0!==a?i:l},function(n){var r=+n
return 0<=r&&r<=1||11<=r&&r<=99?t:l},function(n){var r=+n
return 1===r||5===r||7===r||8===r||9===r||10===r?t:2===r||3===r?e:4===r?i:6===r?o:l},function(n){var r=Math.floor(Math.abs(+n))
return r%10==1||r%10==2||r%10==5||r%10==7||r%10==8||r%100==20||r%100==50||r%100==70||r%100==80?t:r%10==3||r%10==4||r%1e3==100||r%1e3==200||r%1e3==300||r%1e3==400||r%1e3==500||r%1e3==600||r%1e3==700||r%1e3==800||r%1e3==900?i:0===r||r%10==6||r%100==40||r%100==60||r%100==90?o:l},function(n){var r=+n
return r%10!=2&&r%10!=3||r%100==12||r%100==13?l:i},function(n){var r=+n
return 1===r||3===r?t:2===r?e:4===r?i:l},function(n){var r=+n
return 0===r||7===r||8===r||9===r?"zero":1===r?t:2===r?e:3===r||4===r?i:5===r||6===r?o:l},function(n){var r=+n
return r%10==1&&r%100!=11?t:r%10==2&&r%100!=12?e:r%10==3&&r%100!=13?i:l},function(n){var r=+n
return 1===r||11===r?t:2===r||12===r?e:3===r||13===r?i:l},function(n){var r=+n
return 1===r?t:2===r||3===r?e:4===r?i:6===r?o:l},function(n){var r=+n
return 1===r||5===r?t:l},function(n){var r=+n
return 11===r||8===r||80===r||800===r?o:l},function(n){var r=Math.floor(Math.abs(+n))
return 1===r?t:0===r||2<=r%100&&r%100<=20||r%100==40||r%100==60||r%100==80?o:l},function(n){var r=+n
return r%10==6||r%10==9||r%10==0&&0!==r?o:l},function(n){var r=Math.floor(Math.abs(+n))
return r%10==1&&r%100!=11?t:r%10==2&&r%100!=12?e:r%10!=7&&r%10!=8||r%100==17||r%100==18?l:o},function(n){var r=+n
return 1===r?t:2===r||3===r?e:4===r?i:l},function(n){var r=+n
return 1<=r&&r<=4?t:l},function(n){var r=+n
return 1===r||5===r||7<=r&&r<=9?t:2===r||3===r?e:4===r?i:6===r?o:l},function(n){var r=+n
return 1===r?t:r%10==4&&r%100!=14?o:l},function(n){var r=+n
return r%10!=1&&r%10!=2||r%100==11||r%100==12?l:t},function(n){var r=+n
return r%10==6||r%10==9||10===r?i:l},function(n){var r=+n
return r%10==3&&r%100!=13?i:l}]
n.exports={af:{cardinal:c[0]},ak:{cardinal:c[1]},am:{cardinal:c[2]},ar:{cardinal:c[3]},ars:{cardinal:c[3]},as:{cardinal:c[2],ordinal:c[34]},asa:{cardinal:c[0]},ast:{cardinal:c[4]},az:{cardinal:c[0],ordinal:c[35]},be:{cardinal:c[5],ordinal:c[36]},bem:{cardinal:c[0]},bez:{cardinal:c[0]},bg:{cardinal:c[0]},bh:{cardinal:c[1]},bn:{cardinal:c[2],ordinal:c[34]},br:{cardinal:c[6]},brx:{cardinal:c[0]},bs:{cardinal:c[7]},ca:{cardinal:c[4],ordinal:c[37]},ce:{cardinal:c[0]},cgg:{cardinal:c[0]},chr:{cardinal:c[0]},ckb:{cardinal:c[0]},cs:{cardinal:c[8]},cy:{cardinal:c[9],ordinal:c[38]},da:{cardinal:c[10]},de:{cardinal:c[4]},dsb:{cardinal:c[11]},dv:{cardinal:c[0]},ee:{cardinal:c[0]},el:{cardinal:c[0]},en:{cardinal:c[4],ordinal:c[39]},eo:{cardinal:c[0]},es:{cardinal:c[0]},et:{cardinal:c[4]},eu:{cardinal:c[0]},fa:{cardinal:c[2]},ff:{cardinal:c[12]},fi:{cardinal:c[4]},fil:{cardinal:c[13],ordinal:c[0]},fo:{cardinal:c[0]},fr:{cardinal:c[12],ordinal:c[0]},fur:{cardinal:c[0]},fy:{cardinal:c[4]},ga:{cardinal:c[14],ordinal:c[0]},gd:{cardinal:c[15],ordinal:c[40]},gl:{cardinal:c[4]},gsw:{cardinal:c[0]},gu:{cardinal:c[2],ordinal:c[41]},guw:{cardinal:c[1]},gv:{cardinal:c[16]},ha:{cardinal:c[0]},haw:{cardinal:c[0]},he:{cardinal:c[17]},hi:{cardinal:c[2],ordinal:c[41]},hr:{cardinal:c[7]},hsb:{cardinal:c[11]},hu:{cardinal:c[0],ordinal:c[42]},hy:{cardinal:c[12],ordinal:c[0]},ia:{cardinal:c[4]},io:{cardinal:c[4]},is:{cardinal:c[18]},it:{cardinal:c[4],ordinal:c[43]},iu:{cardinal:c[19]},iw:{cardinal:c[17]},jgo:{cardinal:c[0]},ji:{cardinal:c[4]},jmc:{cardinal:c[0]},ka:{cardinal:c[0],ordinal:c[44]},kab:{cardinal:c[12]},kaj:{cardinal:c[0]},kcg:{cardinal:c[0]},kk:{cardinal:c[0],ordinal:c[45]},kkj:{cardinal:c[0]},kl:{cardinal:c[0]},kn:{cardinal:c[2]},ks:{cardinal:c[0]},ksb:{cardinal:c[0]},ksh:{cardinal:c[20]},ku:{cardinal:c[0]},kw:{cardinal:c[19]},ky:{cardinal:c[0]},lag:{cardinal:c[21]},lb:{cardinal:c[0]},lg:{cardinal:c[0]},ln:{cardinal:c[1]},lt:{cardinal:c[22]},lv:{cardinal:c[23]},mas:{cardinal:c[0]},mg:{cardinal:c[1]},mgo:{cardinal:c[0]},mk:{cardinal:c[24],ordinal:c[46]},ml:{cardinal:c[0]},mn:{cardinal:c[0]},mo:{cardinal:c[25],ordinal:c[0]},mr:{cardinal:c[2],ordinal:c[47]},mt:{cardinal:c[26]},nah:{cardinal:c[0]},naq:{cardinal:c[19]},nb:{cardinal:c[0]},nd:{cardinal:c[0]},ne:{cardinal:c[0],ordinal:c[48]},nl:{cardinal:c[4]},nn:{cardinal:c[0]},nnh:{cardinal:c[0]},no:{cardinal:c[0]},nr:{cardinal:c[0]},nso:{cardinal:c[1]},ny:{cardinal:c[0]},nyn:{cardinal:c[0]},om:{cardinal:c[0]},or:{cardinal:c[0],ordinal:c[49]},os:{cardinal:c[0]},pa:{cardinal:c[1]},pap:{cardinal:c[0]},pl:{cardinal:c[27]},prg:{cardinal:c[23]},ps:{cardinal:c[0]},pt:{cardinal:c[28]},"pt-PT":{cardinal:c[4]},rm:{cardinal:c[0]},ro:{cardinal:c[25],ordinal:c[0]},rof:{cardinal:c[0]},ru:{cardinal:c[29]},rwk:{cardinal:c[0]},saq:{cardinal:c[0]},sc:{cardinal:c[4],ordinal:c[43]},scn:{cardinal:c[4],ordinal:c[43]},sd:{cardinal:c[0]},sdh:{cardinal:c[0]},se:{cardinal:c[19]},seh:{cardinal:c[0]},sh:{cardinal:c[7]},shi:{cardinal:c[30]},si:{cardinal:c[31]},sk:{cardinal:c[8]},sl:{cardinal:c[32]},sma:{cardinal:c[19]},smi:{cardinal:c[19]},smj:{cardinal:c[19]},smn:{cardinal:c[19]},sms:{cardinal:c[19]},sn:{cardinal:c[0]},so:{cardinal:c[0]},sq:{cardinal:c[0],ordinal:c[50]},sr:{cardinal:c[7]},ss:{cardinal:c[0]},ssy:{cardinal:c[0]},st:{cardinal:c[0]},sv:{cardinal:c[4],ordinal:c[51]},sw:{cardinal:c[4]},syr:{cardinal:c[0]},ta:{cardinal:c[0]},te:{cardinal:c[0]},teo:{cardinal:c[0]},ti:{cardinal:c[1]},tig:{cardinal:c[0]},tk:{cardinal:c[0],ordinal:c[52]},tl:{cardinal:c[13],ordinal:c[0]},tn:{cardinal:c[0]},tr:{cardinal:c[0]},ts:{cardinal:c[0]},tzm:{cardinal:c[33]},ug:{cardinal:c[0]},uk:{cardinal:c[29],ordinal:c[53]},ur:{cardinal:c[4]},uz:{cardinal:c[0]},ve:{cardinal:c[0]},vo:{cardinal:c[0]},vun:{cardinal:c[0]},wa:{cardinal:c[1]},wae:{cardinal:c[0]},xh:{cardinal:c[0]},xog:{cardinal:c[0]},yi:{cardinal:c[4]},zu:{cardinal:c[2]},lo:{ordinal:c[0]},ms:{ordinal:c[0]},vi:{ordinal:c[0]}}},O92E:function(n,r,a){"use strict"
var t=["number","date","time","ordinal","duration","spellout"],e=["plural","select","selectordinal"]
function i(n,r){var a=n.pattern,t=a.length,e=[],i=n.index,l=o(n,r)
for(l&&e.push(l),l&&n.tokens&&n.tokens.push(["text",a.slice(i,n.index)]);n.index<t;){if("}"===a[n.index]){if(!r)throw m(n)
break}if(r&&n.tagsType&&"</"===a.slice(n.index,n.index+"</".length))break
e.push(s(n)),i=n.index,(l=o(n,r))&&e.push(l),l&&n.tokens&&n.tokens.push(["text",a.slice(i,n.index)])}return e}function o(n,r){for(var a=n.pattern,t=a.length,e="plural"===r||"selectordinal"===r,i=!!n.tagsType,o="{style}"===r,c="";n.index<t;){var s=a[n.index]
if("{"===s||"}"===s||e&&"#"===s||i&&"<"===s||o&&l(s.charCodeAt(0)))break
if("'"===s)if("'"===(s=a[++n.index]))c+=s,++n.index
else if("{"===s||"}"===s||e&&"#"===s||i&&"<"===s||o)for(c+=s;++n.index<t;)if("'"===(s=a[n.index])&&"'"===a[n.index+1])c+="'",++n.index
else{if("'"===s){++n.index
break}c+=s}else c+="'"
else c+=s,++n.index}return c}function l(n){return n>=9&&n<=13||32===n||133===n||160===n||6158===n||n>=8192&&n<=8205||8232===n||8233===n||8239===n||8287===n||8288===n||12288===n||65279===n}function c(n){for(var r=n.pattern,a=r.length,t=n.index;n.index<a&&l(r.charCodeAt(n.index));)++n.index
t<n.index&&n.tokens&&n.tokens.push(["space",n.pattern.slice(t,n.index)])}function s(n){var r=n.pattern
if("#"===r[n.index])return n.tokens&&n.tokens.push(["syntax","#"]),++n.index,["#"]
var a=function(n){var r=n.tagsType
if(!r||"<"!==n.pattern[n.index])return
if("</"===n.pattern.slice(n.index,n.index+"</".length))throw m(n,null,"closing tag without matching opening tag")
n.tokens&&n.tokens.push(["syntax","<"]);++n.index
var a=u(n,!0)
if(!a)throw m(n,"placeholder id")
n.tokens&&n.tokens.push(["id",a])
if(c(n),"/>"===n.pattern.slice(n.index,n.index+"/>".length))return n.tokens&&n.tokens.push(["syntax","/>"]),n.index+="/>".length,[a,r]
if(">"!==n.pattern[n.index])throw m(n,">")
n.tokens&&n.tokens.push(["syntax",">"]);++n.index
var t=i(n,r),e=n.index
if("</"!==n.pattern.slice(n.index,n.index+"</".length))throw m(n,"</"+a+">")
n.tokens&&n.tokens.push(["syntax","</"])
n.index+="</".length
var o=u(n,!0)
o&&n.tokens&&n.tokens.push(["id",o])
if(a!==o)throw n.index=e,m(n,"</"+a+">","</"+o+">")
if(c(n),">"!==n.pattern[n.index])throw m(n,">")
n.tokens&&n.tokens.push(["syntax",">"])
return++n.index,[a,r,{children:t}]}(n)
if(a)return a
if("{"!==r[n.index])throw m(n,"{")
n.tokens&&n.tokens.push(["syntax","{"]),++n.index,c(n)
var e=u(n)
if(!e)throw m(n,"placeholder id")
n.tokens&&n.tokens.push(["id",e]),c(n)
var o=r[n.index]
if("}"===o)return n.tokens&&n.tokens.push(["syntax","}"]),++n.index,[e]
if(","!==o)throw m(n,", or }")
n.tokens&&n.tokens.push(["syntax",","]),++n.index,c(n)
var l,s=u(n)
if(!s)throw m(n,"placeholder type")
if(n.tokens&&n.tokens.push(["type",s]),c(n),"}"===(o=r[n.index])){if(n.tokens&&n.tokens.push(["syntax","}"]),"plural"===s||"selectordinal"===s||"select"===s)throw m(n,s+" sub-messages")
return++n.index,[e,s]}if(","!==o)throw m(n,", or }")
if(n.tokens&&n.tokens.push(["syntax",","]),++n.index,c(n),"plural"===s||"selectordinal"===s){var h=function(n){var r=n.pattern,a=r.length,t=0
if("offset:"===r.slice(n.index,n.index+"offset:".length)){n.tokens&&n.tokens.push(["offset","offset"],["syntax",":"]),n.index+="offset:".length,c(n)
for(var e=n.index;n.index<a&&((i=r.charCodeAt(n.index))>=48&&i<=57);)++n.index
if(e===n.index)throw m(n,"offset number")
n.tokens&&n.tokens.push(["number",r.slice(e,n.index)]),t=+r.slice(e,n.index)}var i
return t}(n)
c(n),l=[e,s,h,f(n,s)]}else if("select"===s)l=[e,s,f(n,s)]
else if(t.indexOf(s)>=0)l=[e,s,d(n)]
else{var p=n.index,g=d(n)
c(n),"{"===r[n.index]&&(n.index=p,g=f(n,s)),l=[e,s,g]}if(c(n),"}"!==r[n.index])throw m(n,"}")
return n.tokens&&n.tokens.push(["syntax","}"]),++n.index,l}function u(n,r){for(var a=n.pattern,t=a.length,e="";n.index<t;){var i=a[n.index]
if("{"===i||"}"===i||","===i||"#"===i||"'"===i||l(i.charCodeAt(0))||r&&("<"===i||">"===i||"/"===i))break
e+=i,++n.index}return e}function d(n){var r=n.index,a=o(n,"{style}")
if(!a)throw m(n,"placeholder style name")
return n.tokens&&n.tokens.push(["style",n.pattern.slice(r,n.index)]),a}function f(n,r){for(var a=n.pattern,t=a.length,i={};n.index<t&&"}"!==a[n.index];){var o=u(n)
if(!o)throw m(n,"sub-message selector")
n.tokens&&n.tokens.push(["selector",o]),c(n),i[o]=h(n,r),c(n)}if(!i.other&&e.indexOf(r)>=0)throw m(n,null,null,'"other" sub-message must be specified in '+r)
return i}function h(n,r){if("{"!==n.pattern[n.index])throw m(n,"{ to start sub-message")
n.tokens&&n.tokens.push(["syntax","{"]),++n.index
var a=i(n,r)
if("}"!==n.pattern[n.index])throw m(n,"} to end sub-message")
return n.tokens&&n.tokens.push(["syntax","}"]),++n.index,a}function m(n,r,a,t){var e=n.pattern,i=e.slice(0,n.index).split(/\r?\n/),o=n.index,l=i.length,c=i.slice(-1)[0].length
return a=a||(n.index>=e.length?"end of message pattern":u(n)||e[n.index]),t||(t=function(n,r){return n?"Expected "+n+" but found "+r:"Unexpected "+r+" found"}(r,a)),new p(t+=" in "+e.replace(/\r?\n/g,"\n"),r,a,o,l,c)}function p(n,r,a,t,e,i){Error.call(this,n),this.name="SyntaxError",this.message=n,this.expected=r,this.found=a,this.offset=t,this.line=e,this.column=i}r=n.exports=function(n,r){return i({pattern:String(n),index:0,tagsType:r&&r.tagsType||null,tokens:r&&r.tokens||null},"")},p.prototype=Object.create(Error.prototype),r.SyntaxError=p},V3mB:function(n,r){n.exports=function(n,r){if("string"==typeof n&&r[n])return n
for(var a=[].concat(n||[]),t=0,e=a.length;t<e;++t)for(var i=a[t].split("-");i.length;){var o=i.join("-")
if(r[o])return o
i.pop()}}}}])

//# sourceMappingURL=65-c-dc759a00ea.js.map