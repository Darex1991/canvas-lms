(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[62],{HbFp:function(e,t,n){"use strict"
var o=n("qJBq"),c=n.n(o),s=n("pQTu")
const r={_parseNumber:c.a,parse(e){if(null==e)return NaN
if("number"==typeof e)return e
let t=r._parseNumber(e.toString(),{thousands:s.default.lookup("number.format.delimiter"),decimal:s.default.lookup("number.format.separator")})
return isNaN(t)&&(t=r._parseNumber(e)),e.toString().match(/e/)&&isNaN(t)&&(t=parseFloat(e)),t},validate:e=>!isNaN(r.parse(e))}
t.a=r},OgVL:function(e,t,n){"use strict"
n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i}))
var o=n("ejBJ")
function c(e,t){const n="".concat(e).trim().toLowerCase()
return t.findIndex(e=>e[0].toLowerCase()===n)}function s(e,t){const n=c(e,t)
if(-1===n)return null
if(0===n)return 100
const s=t[n][1],r=t[n-1][1]
let i=1
return Object(o.a)(r-s,4)<=.01&&(i=.1),Object(o.a)(100*r-i,2)}function r(e,t){const n=c(e,t)
if(-1===n)return null
const s=t[n][1]
return Object(o.a)(100*s,2)}function i(e,t){if(null==t)return null
const n=Object(o.a)(e,4),c=Math.max(n,0)
return t.find((e,n)=>{const o=(100*e[1]).toPrecision(4)
return c>=o||n===t.length-1})[0]}},ejBJ:function(e,t,n){"use strict"
n.d(t,"a",(function(){return s}))
var o=n("nc0P"),c=n.n(o)
function s(e,t=0){try{return parseFloat(c()(e).round(t),10)}catch(e){return NaN}}s.DEFAULT=2},nc0P:function(e,t,n){var o
!function(c){"use strict"
var s,r="[big.js] ",i=r+"Invalid ",l=i+"decimal places",a={},d=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i
function f(e,t,n,o){var c=e.c,s=e.e+t+1
if(s<c.length){if(1===n)o=c[s]>=5
else if(2===n)o=c[s]>5||5==c[s]&&(o||s<0||void 0!==c[s+1]||1&c[s-1])
else if(3===n)o=o||!!c[0]
else if(o=!1,0!==n)throw Error("[big.js] Invalid rounding mode")
if(s<1)c.length=1,o?(e.e=-t,c[0]=1):c[0]=e.e=0
else{if(c.length=s--,o)for(;++c[s]>9;)c[s]=0,s--||(++e.e,c.unshift(1))
for(s=c.length;!c[--s];)c.pop()}}else if(n<0||n>3||n!==~~n)throw Error("[big.js] Invalid rounding mode")
return e}function p(e,t,n,o){var c,s,r=e.constructor,a=!e.c[0]
if(void 0!==n){if(n!==~~n||n<(3==t)||n>1e6)throw Error(3==t?i+"precision":l)
for(n=o-(e=new r(e)).e,e.c.length>++o&&f(e,n,r.RM),2==t&&(o=e.e+n+1);e.c.length<o;)e.c.push(0)}if(c=e.e,n=(s=e.c.join("")).length,2!=t&&(1==t||3==t&&o<=c||c<=r.NE||c>=r.PE))s=s.charAt(0)+(n>1?"."+s.slice(1):"")+(c<0?"e":"e+")+c
else if(c<0){for(;++c;)s="0"+s
s="0."+s}else if(c>0)if(++c>n)for(c-=n;c--;)s+="0"
else c<n&&(s=s.slice(0,c)+"."+s.slice(c))
else n>1&&(s=s.charAt(0)+"."+s.slice(1))
return e.s<0&&(!a||4==t)?"-"+s:s}a.abs=function(){var e=new this.constructor(this)
return e.s=1,e},a.cmp=function(e){var t,n=this,o=n.c,c=(e=new n.constructor(e)).c,s=n.s,r=e.s,i=n.e,l=e.e
if(!o[0]||!c[0])return o[0]?s:c[0]?-r:0
if(s!=r)return s
if(t=s<0,i!=l)return i>l^t?1:-1
for(r=(i=o.length)<(l=c.length)?i:l,s=-1;++s<r;)if(o[s]!=c[s])return o[s]>c[s]^t?1:-1
return i==l?0:i>l^t?1:-1},a.div=function(e){var t=this,n=t.constructor,o=t.c,c=(e=new n(e)).c,s=t.s==e.s?1:-1,r=n.DP
if(r!==~~r||r<0||r>1e6)throw Error(l)
if(!c[0])throw Error("[big.js] Division by zero")
if(!o[0])return new n(0*s)
var i,a,d,p,u,m=c.slice(),_=i=c.length,b=o.length,h=o.slice(0,i),g=h.length,v=e,x=v.c=[],w=0,P=r+(v.e=t.e-e.e)+1
for(v.s=s,s=P<0?0:P,m.unshift(0);g++<i;)h.push(0)
do{for(d=0;d<10;d++){if(i!=(g=h.length))p=i>g?1:-1
else for(u=-1,p=0;++u<i;)if(c[u]!=h[u]){p=c[u]>h[u]?1:-1
break}if(!(p<0))break
for(a=g==i?c:m;g;){if(h[--g]<a[g]){for(u=g;u&&!h[--u];)h[u]=9;--h[u],h[g]+=10}h[g]-=a[g]}for(;!h[0];)h.shift()}x[w++]=p?d:++d,h[0]&&p?h[g]=o[_]||0:h=[o[_]]}while((_++<b||void 0!==h[0])&&s--)
return x[0]||1==w||(x.shift(),v.e--),w>P&&f(v,r,n.RM,void 0!==h[0]),v},a.eq=function(e){return!this.cmp(e)},a.gt=function(e){return this.cmp(e)>0},a.gte=function(e){return this.cmp(e)>-1},a.lt=function(e){return this.cmp(e)<0},a.lte=function(e){return this.cmp(e)<1},a.minus=a.sub=function(e){var t,n,o,c,s=this,r=s.constructor,i=s.s,l=(e=new r(e)).s
if(i!=l)return e.s=-l,s.plus(e)
var a=s.c.slice(),d=s.e,f=e.c,p=e.e
if(!a[0]||!f[0])return f[0]?(e.s=-l,e):new r(a[0]?s:0)
if(i=d-p){for((c=i<0)?(i=-i,o=a):(p=d,o=f),o.reverse(),l=i;l--;)o.push(0)
o.reverse()}else for(n=((c=a.length<f.length)?a:f).length,i=l=0;l<n;l++)if(a[l]!=f[l]){c=a[l]<f[l]
break}if(c&&(o=a,a=f,f=o,e.s=-e.s),(l=(n=f.length)-(t=a.length))>0)for(;l--;)a[t++]=0
for(l=t;n>i;){if(a[--n]<f[n]){for(t=n;t&&!a[--t];)a[t]=9;--a[t],a[n]+=10}a[n]-=f[n]}for(;0===a[--l];)a.pop()
for(;0===a[0];)a.shift(),--p
return a[0]||(e.s=1,a=[p=0]),e.c=a,e.e=p,e},a.mod=function(e){var t,n=this,o=n.constructor,c=n.s,s=(e=new o(e)).s
if(!e.c[0])throw Error("[big.js] Division by zero")
return n.s=e.s=1,t=1==e.cmp(n),n.s=c,e.s=s,t?new o(n):(c=o.DP,s=o.RM,o.DP=o.RM=0,n=n.div(e),o.DP=c,o.RM=s,this.minus(n.times(e)))},a.plus=a.add=function(e){var t,n=this,o=n.constructor,c=n.s,s=(e=new o(e)).s
if(c!=s)return e.s=-s,n.minus(e)
var r=n.e,i=n.c,l=e.e,a=e.c
if(!i[0]||!a[0])return a[0]?e:new o(i[0]?n:0*c)
if(i=i.slice(),c=r-l){for(c>0?(l=r,t=a):(c=-c,t=i),t.reverse();c--;)t.push(0)
t.reverse()}for(i.length-a.length<0&&(t=a,a=i,i=t),c=a.length,s=0;c;i[c]%=10)s=(i[--c]=i[c]+a[c]+s)/10|0
for(s&&(i.unshift(s),++l),c=i.length;0===i[--c];)i.pop()
return e.c=i,e.e=l,e},a.pow=function(e){var t=this,n=new t.constructor(1),o=n,c=e<0
if(e!==~~e||e<-1e6||e>1e6)throw Error(i+"exponent")
for(c&&(e=-e);1&e&&(o=o.times(t)),e>>=1;)t=t.times(t)
return c?n.div(o):o},a.round=function(e,t){var n=this.constructor
if(void 0===e)e=0
else if(e!==~~e||e<-1e6||e>1e6)throw Error(l)
return f(new n(this),e,void 0===t?n.RM:t)},a.sqrt=function(){var e,t,n,o=this,c=o.constructor,s=o.s,i=o.e,l=new c(.5)
if(!o.c[0])return new c(o)
if(s<0)throw Error(r+"No square root")
0===(s=Math.sqrt(o+""))||s===1/0?((t=o.c.join("")).length+i&1||(t+="0"),i=((i+1)/2|0)-(i<0||1&i),e=new c(((s=Math.sqrt(t))==1/0?"1e":(s=s.toExponential()).slice(0,s.indexOf("e")+1))+i)):e=new c(s),i=e.e+(c.DP+=4)
do{n=e,e=l.times(n.plus(o.div(n)))}while(n.c.slice(0,i).join("")!==e.c.slice(0,i).join(""))
return f(e,c.DP-=4,c.RM)},a.times=a.mul=function(e){var t,n=this,o=n.constructor,c=n.c,s=(e=new o(e)).c,r=c.length,i=s.length,l=n.e,a=e.e
if(e.s=n.s==e.s?1:-1,!c[0]||!s[0])return new o(0*e.s)
for(e.e=l+a,r<i&&(t=c,c=s,s=t,a=r,r=i,i=a),t=new Array(a=r+i);a--;)t[a]=0
for(l=i;l--;){for(i=0,a=r+l;a>l;)i=t[a]+s[l]*c[a-l-1]+i,t[a--]=i%10,i=i/10|0
t[a]=(t[a]+i)%10}for(i?++e.e:t.shift(),l=t.length;!t[--l];)t.pop()
return e.c=t,e},a.toExponential=function(e){return p(this,1,e,e)},a.toFixed=function(e){return p(this,2,e,this.e+e)},a.toPrecision=function(e){return p(this,3,e,e-1)},a.toString=function(){return p(this)},a.valueOf=a.toJSON=function(){return p(this,4)},(s=function e(){function t(n){var o=this
if(!(o instanceof t))return void 0===n?e():new t(n)
n instanceof t?(o.s=n.s,o.e=n.e,o.c=n.c.slice()):function(e,t){var n,o,c
if(0===t&&1/t<0)t="-0"
else if(!d.test(t+=""))throw Error(i+"number")
e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".",""));(o=t.search(/e/i))>0?(n<0&&(n=o),n+=+t.slice(o+1),t=t.substring(0,o)):n<0&&(n=t.length)
for(c=t.length,o=0;o<c&&"0"==t.charAt(o);)++o
if(o==c)e.c=[e.e=0]
else{for(;c>0&&"0"==t.charAt(--c););for(e.e=n-o-1,e.c=[],n=0;o<=c;)e.c[n++]=+t.charAt(o++)}}(o,n),o.constructor=t}return t.prototype=a,t.DP=20,t.RM=1,t.NE=-7,t.PE=21,t.version="5.2.2",t}()).default=s.Big=s,void 0===(o=function(){return s}.call(t,n,t,e))||(e.exports=o)}()},nibu:function(e,t,n){"use strict"
n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return a})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return m}))
var o=n("GLiE"),c=n.n(o),s=n("nc0P"),r=n.n(s)
function i(e,t){return new r.a(e||0).plus(t||0)}function l(e,t){return new r.a(e||0).div(t||0)}function a(e){return Number.parseFloat(e,10)}function d(e){return e.reduce((e,t)=>e.plus(t||0),r()(0))}function f(e){return a(c.a.reduce(e,i,0))}function p(e,t){return f(c.a.map(e,t))}function u(e,t){const n=e/t*100
return Number.isFinite(n)?a((o=l(e,t),c=100,new r.a(o||0).times(c||0))):n
var o,c}function m({score:e,possible:t,weight:n}){return e&&n?r()(e).div(t).times(n):r()(0)}},qJBq:function(e,t){(function(){var t,n,o
o=[],t={},e.exports=n=function(e,n,c){var s,r,i,l,a,d,f,p
if(null==c&&(c=!0),"string"==typeof n){if(2!==n.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
p=n[0],s=n[1]}else if(Array.isArray(n)){if(2!==n.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
p=n[0],s=n[1]}else p=(null!=n?n.thousands:void 0)||(null!=n?n.group:void 0)||t.thousands,s=(null!=n?n.decimal:void 0)||t.decimal
return null==(a=o[d=""+p+s+c])&&(i=c?3:1,a=o[d]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+p+"\\d{"+i+",3})+)|\\d*))(?:\\"+s+"(\\d*))?\\s*$")),null==(f=e.match(a))||3!==f.length?NaN:(l=f[1].replace(new RegExp("\\"+p,"g"),""),r=f[2],parseFloat(l+"."+r))},e.exports.setOptions=function(e){var n,o
for(n in e)o=e[n],t[n]=o},e.exports.factoryReset=function(){t={thousands:",",decimal:"."}},e.exports.withOptions=function(e,t){return null==t&&(t=!0),function(o){return n(o,e,t)}},e.exports.factoryReset()}).call(this)},vI2V:function(e,t,n){"use strict"
var o=n("pQTu"),c=n("m0r6")
Object(c.a)(JSON.parse('{"ar":{"complete_4f4efbc":"اكتمل","complete_fd828dea":"مكتمل","excused_cf8792eb":"ليس إجباري","incomplete_95612d72":"غير مكتمل","incomplete_da3c2ea2":"غير مكتمل","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"cy":{"complete_4f4efbc":"cwblhau","complete_fd828dea":"Cwblhau","excused_cf8792eb":"Wedi esgusodi","incomplete_95612d72":"heb gwblhau","incomplete_da3c2ea2":"Heb Gwblhau","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"da":{"complete_4f4efbc":"fuldført","complete_fd828dea":"Fuldført","excused_cf8792eb":"Undskyldt","incomplete_95612d72":"ufuldstændig","incomplete_da3c2ea2":"Ufuldstændig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"da-x-k12":{"complete_4f4efbc":"fuldført","complete_fd828dea":"Fuldført","excused_cf8792eb":"Undskyldt","incomplete_95612d72":"ufuldstændig","incomplete_da3c2ea2":"Ufuldstændig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"de":{"complete_4f4efbc":"fertig","complete_fd828dea":"Abschließen","excused_cf8792eb":"Entschuldigt","incomplete_95612d72":"unvollständig","incomplete_da3c2ea2":"Unvollständig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"el":{"excused_cf8792eb":"Δικαιολογημένος/η","incomplete_da3c2ea2":"Μη ολοκληρωμένο"},"en-AU":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"en-CA":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"en-GB":{"complete_4f4efbc":"complete","complete_fd828dea":"Complete","excused_cf8792eb":"Excused","incomplete_95612d72":"incomplete","incomplete_da3c2ea2":"Incomplete","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"es":{"complete_4f4efbc":"completo","complete_fd828dea":"Completa","excused_cf8792eb":"Justificado","incomplete_95612d72":"incompleto","incomplete_da3c2ea2":"Incompleta","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"fa":{"complete_4f4efbc":"کامل","complete_fd828dea":"کامل","excused_cf8792eb":"معاف شد","incomplete_95612d72":"ناقص","incomplete_da3c2ea2":"ناقص"},"fi":{"complete_4f4efbc":"valmis","complete_fd828dea":"Valmis","excused_cf8792eb":"Annettu anteeksi","incomplete_95612d72":"keskeneräinen","incomplete_da3c2ea2":"Keskeneräinen","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"fr":{"complete_4f4efbc":"termine","complete_fd828dea":"Terminer","excused_cf8792eb":"Pas obligatoire","incomplete_95612d72":"incomplet","incomplete_da3c2ea2":"Incomplet","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"fr-CA":{"complete_4f4efbc":"terminer","complete_fd828dea":"Terminer","excused_cf8792eb":"Pas obligatoire","incomplete_95612d72":"incomplet","incomplete_da3c2ea2":"Incomplet","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"he":{"complete_4f4efbc":"השלמה","complete_fd828dea":"הושלם","excused_cf8792eb":"נסלח","incomplete_95612d72":"לא הושלם","incomplete_da3c2ea2":"לא הושלם"},"ht":{"complete_4f4efbc":"fini","complete_fd828dea":"Fini","excused_cf8792eb":"Egzante","incomplete_95612d72":"enkonplè","incomplete_da3c2ea2":"Enkonplè","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"hu":{"complete_4f4efbc":"kész","complete_fd828dea":"Kész","excused_cf8792eb":"Felmentve","incomplete_95612d72":"befejezetlen","incomplete_da3c2ea2":"Befejezetlen"},"hy":{"excused_cf8792eb":"Ներված է"},"is":{"complete_4f4efbc":"lokið","complete_fd828dea":"Ljúka","excused_cf8792eb":"Undanþegið","incomplete_95612d72":"ólokið","incomplete_da3c2ea2":"Ólokið","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"it":{"complete_4f4efbc":"completato","complete_fd828dea":"Completato","excused_cf8792eb":"Giustificato","incomplete_95612d72":"non completato","incomplete_da3c2ea2":"Non completato","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"ja":{"complete_4f4efbc":"完了","complete_fd828dea":"完了","excused_cf8792eb":"免除","incomplete_95612d72":"未完了","incomplete_da3c2ea2":"不完全","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"mi":{"complete_4f4efbc":"oti","complete_fd828dea":"Oti","excused_cf8792eb":"Whakawātea","incomplete_95612d72":"pahara","incomplete_da3c2ea2":"Kaore i te oti","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nb":{"complete_4f4efbc":"godkjent","complete_fd828dea":"Godkjent","excused_cf8792eb":"Fritatt","incomplete_95612d72":"ikke godkjent","incomplete_da3c2ea2":"Ikke godkjent","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nb-x-k12":{"complete_4f4efbc":"fullført","complete_fd828dea":"Fullført","excused_cf8792eb":"Fritatt","incomplete_95612d72":"ikke fullført","incomplete_da3c2ea2":"Ikke fullført","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nl":{"complete_4f4efbc":"voltooid","complete_fd828dea":"Voltooid","excused_cf8792eb":"Geëxcuseerd!","incomplete_95612d72":"niet voltooid","incomplete_da3c2ea2":"Incompleet","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"nn":{"complete_4f4efbc":"fullført","complete_fd828dea":"Fullført","excused_cf8792eb":"Fritak er innvilga","incomplete_95612d72":"ikkje fullført","incomplete_da3c2ea2":"Ikkje fullført","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"pl":{"complete_4f4efbc":"zakończ","complete_fd828dea":"Ukończony","excused_cf8792eb":"Usprawiedliwiony!","incomplete_95612d72":"nieukończony","incomplete_da3c2ea2":"Nie ukończono","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"pt":{"complete_4f4efbc":"completo","complete_fd828dea":"Completo","excused_cf8792eb":"Desculpado","incomplete_95612d72":"incompleto","incomplete_da3c2ea2":"Incompleto","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"pt-BR":{"complete_4f4efbc":"completo","complete_fd828dea":"Concluído","excused_cf8792eb":"Dispensado","incomplete_95612d72":"incompleto","incomplete_da3c2ea2":"Incompleto","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"ru":{"complete_4f4efbc":"завершенный","complete_fd828dea":"Завершить","excused_cf8792eb":"По уважительной причине","incomplete_95612d72":"незавершенный","incomplete_da3c2ea2":"Не завершено","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"sl":{"complete_4f4efbc":"zaključi","complete_fd828dea":"Zaključeno","excused_cf8792eb":"Opravičeno","incomplete_95612d72":"nezaključeno","incomplete_da3c2ea2":"Nezaključeno"},"sv":{"complete_4f4efbc":"färdig","complete_fd828dea":"Färdig","excused_cf8792eb":"Ursäktad","incomplete_95612d72":"ej fullständig","incomplete_da3c2ea2":"Ofullständig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"sv-x-k12":{"complete_4f4efbc":"fullgjord","complete_fd828dea":"Färdig","excused_cf8792eb":"Ursäktad","incomplete_95612d72":"ej fullständig","incomplete_da3c2ea2":"Ofullständig","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"tr":{"complete_4f4efbc":"tamam","complete_fd828dea":"Tamamlandı","excused_cf8792eb":"Mazeretli","incomplete_da3c2ea2":"Eksik"},"uk":{"complete_4f4efbc":"Завершити","complete_fd828dea":"Завершити","excused_cf8792eb":"Виправдано","incomplete_95612d72":"незавершений","incomplete_da3c2ea2":"Незавершений"},"zh-Hans":{"complete_4f4efbc":"完成","complete_fd828dea":"完成","excused_cf8792eb":"已免除","incomplete_95612d72":"未完成","incomplete_da3c2ea2":"未完成","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"},"zh-Hant":{"complete_4f4efbc":"完成","complete_fd828dea":"完成","excused_cf8792eb":"已免除","incomplete_95612d72":"未完成","incomplete_da3c2ea2":"未完成","score_pointspossibletranslated_c1ac019e":"%{score}/%{pointsPossibleTranslated}"}}'))
n("jQeR"),n("0sPK")
var s=o.default.scoped("sharedGradeFormatHelper"),r=n("ejBJ"),i=n("HbFp"),l=n("nibu"),a=n("OgVL")
const d=["complete","pass"],f=["incomplete","fail"]
function p(e,t){return t?"pass_fail"===t:d.includes(e)||f.includes(e)}function u(e,t){return t?"percent"===t:/%/g.test(e)}function m(e){return"EX"===e}function _(e,t){if(null==e||""===e)return e
if(null==t||""===t)return e
const n={precision:2,strip_insignificant_zeros:!0}
let o="–"
null!=e&&(o=s.n(e,n))
const c=s.n(t,n)
return s.t("%{score}/%{pointsPossibleTranslated}",{pointsPossibleTranslated:c,score:o})}function b(){return s.t("Excused")}const h={formatGrade(e,t={}){let n=e
if(null==e||""===e)return"defaultValue"in t?t.defaultValue:e
if(m(e))return b()
let o=h.parseGrade(e,t)
if(function(e,t){return t?function(e){return"points"===e||"percent"===e||"pass_fail"===e}(t):"number"==typeof e||p(e)}(o,t.gradingType))if(p(o,t.gradingType))o=function(e){return d.includes(e)?"complete":f.includes(e)?"incomplete":null}(o),n="complete"===o?s.t("complete"):s.t("incomplete")
else{const c=Object(r.a)(o,t.precision||2)
n=s.n(c,{percentage:u(e,t.gradingType)})}return"points"===t.gradingType&&"points_out_of_fraction"===t.formatType&&(n=_(e,t.pointsPossible)),n},delocalizeGrade(e){if(null==e||"string"!=typeof e)return e
const t=i.a.parse(e.replace("%",""))
return isNaN(t)?e:t+(/%/g.test(e)?"%":"")},parseGrade(e,t={}){let n
if(null==e||""===e||"number"==typeof e)return e
const o=e.replace("%","")
return n=!("delocalize"in t)||t.delocalize||isNaN(o)?i.a.parse(o):parseFloat(o),isNaN(n)?e:n},excused:b,isExcused:m,formatGradeInfo:function(e,t={}){return e.excused?b():null==e.grade?null!=t.defaultValue?t.defaultValue:"–":e.grade},formatPointsOutOf:_,formatSubmissionGrade(e,t={version:"final"}){if(e.excused)return b()
const n="entered"===t.version?e.enteredScore:e.score,o="entered"===t.version?e.enteredGrade:e.grade
if(null==n)return null!=t.defaultValue?t.defaultValue:"–"
switch(t.formatType){case"percent":return function(e,t){const n=t.pointsPossible?Object(l.c)(e,t.pointsPossible):e
return s.n(Object(r.a)(n,2),{percentage:!0,precision:2,strip_insignificant_zeros:!0})}(n,t)
case"gradingScheme":return function(e,t,n){if(n.pointsPossible){const t=Object(l.c)(e,n.pointsPossible)
return Object(a.d)(t,n.gradingScheme)}return null!=t?t:Object(a.d)(e,n.gradingScheme)}(n,o,t)
case"passFail":return function(e,t,n){let o=!1
return o=n.pointsPossible?e>0:d.includes(t),o?s.t("Complete"):s.t("Incomplete")}(n,o,t)
default:return function(e){return s.n(Object(r.a)(e,2),{precision:2,strip_insignificant_zeros:!0})}(n)}},UNGRADED:"–"}
t.a=h}}])

//# sourceMappingURL=62-c-229200ac02.js.map