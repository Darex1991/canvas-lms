(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[330,560,563,619],{"0crz":function(e,t,s){"use strict"
var a=s("ouhR"),n=s.n(a),i=s("pQTu"),l=s("m0r6")
Object(l.a)(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
s("jQeR"),s("0sPK")
var o,r,d=i.default.scoped("lib.text_helper"),u=s("5Ky4")
o=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t.a=r={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(u.a)(d.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+n.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,s,a,n,i,l,d,c
for(n=[],i=[],e=e.replace(o,(function(e,t){var s
return i.push("LINK-PLACEHOLDER"===e?"LINK-PLACEHOLDER":("http://"!==(s=e).slice(0,7)&&"https://"!==s.slice(0,8)&&(s="http://"+s),n.push(s),"<a href='"+Object(u.a)(s)+"'>"+Object(u.a)(e)+"</a>")),"LINK-PLACEHOLDER"})),l=[],d=[],t=0,s=(c=(e=(e=(e=Object(u.a)(e)).replace(new RegExp("LINK-PLACEHOLDER","g"),(function(e,t){return i.shift()}))).replace(/\n/g,"<br />\n")).split("\n")).length;t<s;t++)(a=c[t]).match(/^(&gt;|>)/)?d.push(a):(d.length&&l.push(r.quoteClump(d)),d=[],l.push(a))
return d.length&&l.push(r.quoteClump(d)),l.join("\n")},delimit:function(e){var t,s,a,n,i
if(isNaN(e))return String(e)
if(i=e<0?"-":"",Infinity===(t=Math.abs(e)))return String(e)
for(n=t===(s=Math.floor(t))?"":String(t).replace(/^\d+\./,".");s>=1e3;)a=String(s).replace(/\d+(\d\d\d)$/,",$1"),s=Math.floor(s/1e3),n=a+n
return i+String(s)+n},truncateText:function(e,t){var s,a,n,i,l,o
if(null==t&&(t={}),a=null!=(i=t.max)?i:30,s=d.t("ellipsis","..."),o=d.t("word_separator"," "),!(e=(null!=e?e:"").replace(/\s+/g,o).trim())||e.length<=a)return e
for(l=0;!((n=e.indexOf(o,l+1))<0||n>a-s.length);)l=n
return l||(l=a-s.length),e.substring(0,l)+s},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},B1vq:function(e,t,s){"use strict"
var a=s("ouhR"),n=s.n(a)
s("s/PJ")
n.a.fn.scrollToVisible=function(e){const t={},s=n()(e)
if(0===s.length)return
let a=s.offset(),i=s.outerWidth(),l=s.outerHeight(),o=a.top,r=o+l,d=a.left,u=d+i,c="html,body"==this.selector?n.a.windowScrollTop():this.scrollTop(),g=this.scrollLeft(),m=this.outerHeight(),_=this.outerWidth()
if("html,body"!=this.selector){let e=n()("body").offset()
this.each((function(){try{return e=n()(this).offset(),!1}catch(e){}})),o-=e.top,r-=e.top,d-=e.left,u-=e.left}return"HTML"!=this[0].tagName&&"BODY"!=this[0].tagName||(m=n()(window).height(),n()("#wizard_box:visible").length>0&&(m-=n()("#wizard_box:visible").height()),_=n()(window).width(),o-=c,d-=g,r-=c,u-=g),o<0||m<l&&r>m?t.scrollTop=o+c:r>m&&(t.scrollTop=r+c-m+20),d<0?t.scrollLeft=d+g:u>_&&(t.scrollLeft=u+g-_+20),1==t.scrollTop&&(t.scrollTop=0),1==t.scrollLeft&&(t.scrollLeft=0),this.scrollTop(t.scrollTop),this.scrollLeft(t.scrollLeft),this}},TBRb:function(e,t,s){"use strict"
var a=s("ouhR"),n=s.n(a),i=s("GLiE"),l=s.n(i),o=s("Nxtp")
s("YGE8")
n.a.fn.fixDialogButtons=function(){return this.each((function(){const e=n()(this),t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
let s=n.a.map(t.toArray(),t=>{const s=n()(t)
let a=s.attr("class")||""
const i=s.attr("id")
return s.is(".dialog_closer")&&(s.off(".fixdialogbuttons"),s.on("click.fixdialogbuttons",Object(o.a)(()=>e.dialog("close")))),"submit"===s.prop("type")&&s[0].form&&(a+=" button_type_submit"),{text:s.text(),"data-text-while-loading":s.data("textWhileLoading"),click:()=>s.click(),class:a,id:i}})
s=l.a.sortBy(s,e=>e.class.match(/btn-primary/)?1:0),e.dialog("option","buttons",s)}}))}},nosv:function(e,t,s){"use strict"
s.r(t)
var a=s("pQTu"),n=s("m0r6")
Object(n.a)(JSON.parse('{"ar":{"messages":{"dialog":{"title":"إرسال رسالة رد"},"messages":{"failure":"حدث خطأ في إرسال بريدك الإلكتروني، يرجى إعادة تحميل الصفحة والمحاولة مرة أخرى.","success":"يجري تسليم بريدك الإلكتروني."}}},"cy":{"messages":{"dialog":{"title":"Anfon ateb drwy neges"},"messages":{"failure":"Gwall wrth anfon eich neges e-bost. Mae angen i chi ail-lwytho’r dudalen a rhoi cynnig arall arni.","success":"Mae eich neges e-bost yn cael ei danfon."}}},"da":{"messages":{"dialog":{"title":"Send en svarbesked"},"messages":{"failure":"Der opstod en fejl under afsendelse af din e-mail. Genindlæs siden og prøv igen.","success":"Din e-mail er på vej."}}},"da-x-k12":{"messages":{"dialog":{"title":"Send en svarbesked"},"messages":{"failure":"Der opstod en fejl under afsendelse af din e-mail. Genindlæs siden og prøv igen.","success":"Din e-mail er på vej."}}},"de":{"messages":{"dialog":{"title":"Antwortnachricht senden"},"messages":{"failure":"Beim Senden Ihrer E-Mail ist ein Fehler aufgetreten. Laden Sie die Seite neu, und versuchen Sie es erneut.","success":"Ihre E-Mail wird zugestellt."}}},"el":{"messages":{"dialog":{"title":"Αποστολή απαντητικού μηνύματος"},"messages":{"failure":"\\u003cmrk mid=\\"4790\\" mtype=\\"seg\\"\\u003eΠαρουσιάστηκε σφάλμα κατά την αποστολή του email σας.\\u003c/mrk\\u003e \\u003cmrk mid=\\"4791\\" mtype=\\"seg\\"\\u003eΠαρακαλώ επαναφορτώστε τη σελίδα και δοκιμάστε ξανά.\\u003c/mrk\\u003e","success":"Το μήνυμά σας παραδίδεται."}}},"en-AU":{"messages":{"dialog":{"title":"Send a reply message"},"messages":{"failure":"There was an error sending your email. Please reload the page and try again.","success":"Your email is being delivered."}}},"en-CA":{"messages":{"dialog":{"title":"Send a reply message"},"messages":{"failure":"There was an error sending your email. Please reload the page and try again.","success":"Your email is being delivered."}}},"en-GB":{"messages":{"dialog":{"title":"Send a reply message"},"messages":{"failure":"There was an error sending your email. Please reload the page and try again.","success":"Your email is being delivered."}}},"es":{"messages":{"dialog":{"title":"Envíe un mensaje de respuesta"},"messages":{"failure":"Se ha producido un error al enviar el mensaje de correo electrónico. Recargue la página e inténtelo de nuevo.","success":"Se va a entregar su mensaje de correo electrónico."}}},"fa":{"messages":{"dialog":{"title":"ارسال پیام پاسخ"},"messages":{"failure":"در هنگام ارسال نامه الکترونیکی شما، خطایی رخ داد. لطفا صفحه را دوباره بارگذاری کنید و دوباره سعی کنید.","success":"نامه الکترونیکی شما در حال ارسال است."}}},"fi":{"messages":{"dialog":{"title":"Lähetä vastausviesti"},"messages":{"failure":"Sähköpostin lähettämisessä ilmeni virhe. Lataa sivu uudelleen ja yritä uudelleen.","success":"Sähköpostisi toimitetaan."}}},"fr":{"messages":{"dialog":{"title":"Envoyer une réponse"},"messages":{"failure":"Une erreur s’est produite pendant l’envoi de votre e-mail. Rechargez la page et réessayez.","success":"Envoi de votre e-mail"}}},"fr-CA":{"messages":{"dialog":{"title":"Envoyer une réponse"},"messages":{"failure":"Une erreur s’est produite pendant l’envoi de votre courriel. Rechargez la page et réessayez.","success":"Envoi de votre courriel"}}},"he":{"messages":{"dialog":{"title":"שיגור הודעת תגובה"},"messages":{"failure":"אירעה תקלה בשיגור הודעת הדוא\\"ל שלך. יש לרענן את הדף ולנסות שוב","success":"הודעת הדוא\\"ל שלך נשלחה."}}},"ht":{"messages":{"dialog":{"title":"Voye yon mesaj repons"},"messages":{"failure":"Te gen yon erè ki fèt pandan w ap voye imèl ou a. Tanpri aktyalize paj la epi eseye ankò.","success":"Imèl ou a ale."}}},"hu":{"messages":{"dialog":{"title":"Válasz küldése"},"messages":{"failure":"Hiba történt az e-mail küldése során. Kérjük, frissítse az oldalt, és próbálja újra!","success":"Az e-mail kézbesítése folyamatban van"}}},"hy":{"messages":{"dialog":{"title":"Ուղարկել պատասխան հաղորդագրություն"},"messages":{"failure":"Ձեր էլեկտրոնային հաղորդագրությունը ուղարկելիս սխալ է տեղի ունեցել: Կրկին բեռնեք էջը և նորից փորձեք:","success":"Ձեր էլեկտրոնային հաղորդագրությունը ուղարկվում է:"}}},"is":{"messages":{"dialog":{"title":"Svara skilaboðum"},"messages":{"failure":"Villa varð við sendingu skeytis. Glæddu síðuna og reyndu aftur.","success":"Verið er að senda skeytið þitt."}}},"it":{"messages":{"dialog":{"title":"Invia un messaggio di risposta"},"messages":{"failure":"Si è verificato un errore durante l\'invio della tua email. Ricarica la pagina e riprova.","success":"La tua email è stata consegnata."}}},"ja":{"messages":{"dialog":{"title":"返信メッセージを送信する"},"messages":{"failure":"電子メールを送信する際にエラーが発生しました。ページを再読み込みしてから、もう一度試してください。","success":"電子メールは配信されています。"}}},"ko":{"messages":{"dialog":{"title":"회신 메시지 보내기"},"messages":{"failure":"이메일을 보내는 데 오류가 발생했습니다. 페이지를 다시 로드하고 다시 시도하시기 바랍니다.","success":"이메일을 배달 중입니다."}}},"mi":{"messages":{"dialog":{"title":"Tukua he karere whakautu"},"messages":{"failure":"I hapa te tuku i tō īmēra. Tēnā koa uta anō i te whārangi, me te ngana anō.","success":"Kei te tukua tō īmēra."}}},"nb":{"messages":{"dialog":{"title":"Send et svar"},"messages":{"failure":"En feil oppsto under sending av eposten din. Last siden på nytt og prøv igjen.","success":"E-posten din leveres."}}},"nb-x-k12":{"messages":{"dialog":{"title":"Send et svar"},"messages":{"failure":"En feil oppsto under sending av eposten din. Last siden på nytt og prøv igjen.","success":"E-posten din leveres."}}},"nl":{"messages":{"dialog":{"title":"Een antwoordbericht inleveren"},"messages":{"failure":"Er is een fout opgetreden bij het inleveren van je e-mail. Vernieuw de pagina en probeer het opnieuw.","success":"Jouw e-mail wordt afgeleverd."}}},"nn":{"messages":{"dialog":{"title":"Send eit svar"},"messages":{"failure":"Det oppstod ein feil under sending av e-posten. Last opp sida på nytt og prøv ein gong til.","success":"E-posten blir levert."}}},"pl":{"messages":{"dialog":{"title":"Wyślij odpowiedź na tę wiadomość"},"messages":{"failure":"Podczas wysyłania wiadomości e-mail wystąpił błąd. Ponownie załaduj stronę i spróbuj ponownie.","success":"Wiadomość e-mail jest wysyłana."}}},"pt":{"messages":{"dialog":{"title":"Enviar uma mensagem de resposta"},"messages":{"failure":"Ocorreu um erro durante o envio do seu e-mail. Atualize a página a tente novamente.","success":"O seu e-mail está a ser enviado."}}},"pt-BR":{"messages":{"dialog":{"title":"Enviar uma mensagem de resposta"},"messages":{"failure":"Ocorreu um erro ao enviar seu e-mail. Recarregue a página e tente novamente.","success":"Seu e-mail está sendo entregue."}}},"ru":{"messages":{"dialog":{"title":"Отправить сообщение с ответом"},"messages":{"failure":"Произошла ошибка при отправке вашего электронного сообщения. Перезагрузите страницу и попробуйте еще раз.","success":"Идет доставка вашего электронного сообщения."}}},"sl":{"messages":{"dialog":{"title":"Pošljite odgovor"},"messages":{"failure":"Pri pošiljanju e-poštnega sporočila je prišlo do napake. Ponovno naložite stran in poskusite znova.","success":"Poteka dostavljanje e-poštnega sporočila."}}},"sv":{"messages":{"dialog":{"title":"Skicka ett svarsmeddelande"},"messages":{"failure":"Ett fel uppstod när e-postmeddelandet skickades. Uppdatera sidan och försök igen.","success":"E-postmeddelandet har levererats."}}},"sv-x-k12":{"messages":{"dialog":{"title":"Skicka ett svarsmeddelande"},"messages":{"failure":"Ett fel uppstod när e-postmeddelandet skickades. Uppdatera sidan och försök igen.","success":"E-postmeddelandet har levererats."}}},"tr":{"messages":{"dialog":{"title":"Yanıt mesajını gönder"},"messages":{"failure":"E-posta\'nın gönderilmesinde hata meydana geldi. Lütfen sayfayı yenileyip tekrar deneyin.","success":"E-Postanız iletildi."}}},"uk":{"messages":{"dialog":{"title":"Відправити повідомлення у відповідь"},"messages":{"failure":"Була виявлена помилка відправки електронної пошти. Будь ласка, перезавантажте сторінку і спробуйте ще раз.","success":"Ваша електронна адреса доставляється."}}},"zh-Hans":{"messages":{"dialog":{"title":"发送回复邮件"},"messages":{"failure":"发送电子邮件时出错。请重新加载此页，然后重试。","success":"正在传送您的电子邮件。"}}},"zh-Hant":{"messages":{"dialog":{"title":"發送回覆訊息"},"messages":{"failure":"發送您的電子郵件時發生錯誤。請重新載入頁面，然後再試一次。","success":"正在傳遞您的郵件。"}}}}'))
s("jQeR"),s("0sPK")
var i=a.default.scoped("messages"),l=s("ouhR"),o=s.n(l),r=s("3O+N"),d=s.n(r)
Object(n.a)(JSON.parse('{"ar":{"messages":{"send_form":{"labels":{"message_body":"الرسالة","send_button":"إرسال"}}}},"cy":{"messages":{"send_form":{"labels":{"message_body":"Neges","send_button":"Anfon"}}}},"da":{"messages":{"send_form":{"labels":{"message_body":"Besked","send_button":"Send"}}}},"da-x-k12":{"messages":{"send_form":{"labels":{"message_body":"Besked","send_button":"Send"}}}},"de":{"messages":{"send_form":{"labels":{"message_body":"Nachricht","send_button":"Senden"}}}},"el":{"messages":{"send_form":{"labels":{"message_body":"Μήνυμα","send_button":"Αποστολή"}}}},"en-AU":{"messages":{"send_form":{"labels":{"message_body":"Message","send_button":"Send"}}}},"en-CA":{"messages":{"send_form":{"labels":{"message_body":"Message","send_button":"Send"}}}},"en-GB":{"messages":{"send_form":{"labels":{"message_body":"Message","send_button":"Send"}}}},"es":{"messages":{"send_form":{"labels":{"message_body":"Mensaje","send_button":"Enviar"}}}},"fa":{"messages":{"send_form":{"labels":{"message_body":"پیام","send_button":"ارسال"}}}},"fi":{"messages":{"send_form":{"labels":{"message_body":"Viesti","send_button":"Lähetä"}}}},"fr":{"messages":{"send_form":{"labels":{"message_body":"Message","send_button":"Envoyer"}}}},"fr-CA":{"messages":{"send_form":{"labels":{"message_body":"Message","send_button":"Envoyer"}}}},"he":{"messages":{"send_form":{"labels":{"message_body":"הודעה","send_button":"שליחה"}}}},"ht":{"messages":{"send_form":{"labels":{"message_body":"Mesaj","send_button":"Voye"}}}},"hu":{"messages":{"send_form":{"labels":{"message_body":"Üzenet","send_button":"Küldés"}}}},"hy":{"messages":{"send_form":{"labels":{"message_body":"Հաղորդագրություն","send_button":"Ուղարկել"}}}},"is":{"messages":{"send_form":{"labels":{"message_body":"Skilaboð","send_button":"Senda"}}}},"it":{"messages":{"send_form":{"labels":{"message_body":"Messaggio","send_button":"Invia"}}}},"ja":{"messages":{"send_form":{"labels":{"message_body":"メッセージ","send_button":"送信"}}}},"ko":{"messages":{"send_form":{"labels":{"message_body":"메시지","send_button":"보내기"}}}},"mi":{"messages":{"send_form":{"labels":{"message_body":"Karere","send_button":"Tukua"}}}},"nb":{"messages":{"send_form":{"labels":{"message_body":"Melding","send_button":"Send"}}}},"nb-x-k12":{"messages":{"send_form":{"labels":{"message_body":"Melding","send_button":"Send"}}}},"nl":{"messages":{"send_form":{"labels":{"message_body":"Bericht","send_button":"Versturen"}}}},"nn":{"messages":{"send_form":{"labels":{"message_body":"Melding","send_button":"Send"}}}},"pl":{"messages":{"send_form":{"labels":{"message_body":"Wiadomość","send_button":"Wyślij"}}}},"pt":{"messages":{"send_form":{"labels":{"message_body":"Mensagem","send_button":"Enviar"}}}},"pt-BR":{"messages":{"send_form":{"labels":{"message_body":"Mensagem","send_button":"Enviar"}}}},"ru":{"messages":{"send_form":{"labels":{"message_body":"Сообщение","send_button":"Отправить"}}}},"sl":{"messages":{"send_form":{"labels":{"message_body":"Sporočilo","send_button":"Pošlji"}}}},"sv":{"messages":{"send_form":{"labels":{"message_body":"Meddelande","send_button":"Skicka"}}}},"sv-x-k12":{"messages":{"send_form":{"labels":{"message_body":"Meddelande","send_button":"Skicka"}}}},"tr":{"messages":{"send_form":{"labels":{"message_body":"Mesaj","send_button":"Gönder"}}}},"uk":{"messages":{"send_form":{"labels":{"message_body":"Повідомлення","send_button":"Надіслати"}}}},"zh-Hans":{"messages":{"send_form":{"labels":{"message_body":"消息","send_button":"发送"}}}},"zh-Hant":{"messages":{"send_form":{"labels":{"message_body":"訊息","send_button":"發送"}}}}}'))
a.default.scoped("messages.send_form"),s("DfGn")
var u=d.a.default,c=u.template,g=u.templates=u.templates||{}
g["messages/sendForm"]=c((function(e,t,s,a,n){this.compilerInfo=[4,">= 1.0.0"],s=this.merge(s,e.helpers),n=n||{}
var i,l,o="",r=this.escapeExpression,d=s.helperMissing
return o+='<form action="',o+=r((i=s.location)||"function"==typeof(i=t&&t.location)?i.call(t,{hash:{},data:n}):i)+'" method="post" class="bootstrap-form message-send-form">\n  <div class="fields">\n    <label for="message-send-body">'+r((l={hash:{scope:"messages.send_form"},data:n},(i=s.t||t&&t.t)?i.call(t,"labels.message_body","Message",l):d.call(t,"t","labels.message_body","Message",l)))+'</label>\n    <textarea name="message" class="input-xlarge" id="message-send-body"></textarea>\n\n    <input type="hidden" name="from" value="',o+=r((i=s.from)||"function"==typeof(i=t&&t.from)?i.call(t,{hash:{},data:n}):i)+'" />\n    <input type="hidden" name="subject" value="',o+=r((i=s.subject)||"function"==typeof(i=t&&t.subject)?i.call(t,{hash:{},data:n}):i)+'" />\n    <input type="hidden" name="secure_id" value="',o+=r((i=s.secureId)||"function"==typeof(i=t&&t.secureId)?i.call(t,{hash:{},data:n}):i)+'" />\n    <input type="hidden" name="message_id" value="',o+=r((i=s.messageId)||"function"==typeof(i=t&&t.messageId)?i.call(t,{hash:{},data:n}):i)+'" />\n  </div>\n\n  <div class="actions">\n    <button type="submit" class="btn btn-primary">'+r((l={hash:{scope:"messages.send_form"},data:n},(i=s.t||t&&t.t)?i.call(t,"labels.send_button","Send",l):d.call(t,"t","labels.send_button","Send",l)))+"</button>\n  </div>\n</form>\n\n"}))
var m=g["messages/sendForm"]
s("TBRb"),s("YGE8"),s("Sv6n")
function _(e){e.preventDefault()
const t=o()(e.target).parents("li.message:first")
new f(t,t.data()).open()}o()(".tabs").tabs()
class f{constructor(e,{secureId:t,messageId:s}){this.sendMessage=e=>{e.preventDefault(),this.close(),o.a.post(this.$el.attr("action"),this.$el.serialize()).fail(()=>o.a.flashError(i.t("messages.failure","There was an error sending your email. Please reload the page and try again."))),o.a.flashMessage(i.t("messages.success","Your email is being delivered."))},this.tpl=m({location:window.location.href,secureId:t,messageId:s,subject:"re: ".concat(e.find(".h6:first").text()),from:e.find(".message-to").text()}),this.$el=o()(this.tpl).dialog(this.dialogOptions),this.attachEvents()}attachEvents(){this.$el.on("submit",this.sendMessage)}open(){this.$el.dialog("open").fixDialogButtons()}close(){this.$el.dialog("close")}}f.prototype.dialogOptions={autoOpen:!1,modal:!0,title:i.t("dialog.title","Send a reply message")},o()(()=>o()(".reply-button").on("click",_))},p6Wi:function(e,t,s){"use strict"
var a=s("pQTu"),n=s("m0r6")
Object(n.a)(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
s("jQeR"),s("0sPK")
var i=a.default.scoped("instructure_misc_plugins"),l=s("ouhR"),o=s.n(l),r=s("5Ky4"),d=s("JD5e")
s("jYyc"),s("YGE8"),s("B1vq"),s("s/PJ")
o.a.fn.setOptions=function(e,t){let s=e?"<option value=''>"+Object(r.a)(e)+"</option>":""
return null==t&&(t=[]),t.forEach(e=>{const t=Object(r.a)(e)
s+='<option value="'+t+'">'+t+"</option>"}),this.html(o.a.raw(s))},o.a.fn.ifExists=function(e){return this.length&&e.call(this,this),this},o.a.fn.scrollbarWidth=function(){const e=o()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div"),s=t.innerWidth()
e.css("overflow-y","scroll")
const a=t.innerWidth()
return e.remove(),s-a},o.a.fn.dim=function(e){return this.animate({opacity:.4},e)},o.a.fn.undim=function(e){return this.animate({opacity:1},e)},o.a.fn.confirmDelete=function(e){e=o.a.extend({},o.a.fn.confirmDelete.defaults,e)
const t=this
let s=null,a=!0
e.noMessage=e.noMessage||e.no_message
const n=function(){if(a)if(e.confirmed||(e.confirmed=function(){t.dim()}),e.confirmed.call(t),e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const a=e.prepareData?e.prepareData.call(t,s):{}
a.authenticity_token=Object(d.a)(),o.a.ajaxJSON(e.url,"DELETE",a,s=>{e.success.call(t,s)},(s,a,n,i)=>{e.error&&o.a.isFunction(e.error)?e.error.call(t,s,a,n,i):o.a.ajaxJSON.unhandledXHRs.push(a)})}else e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})}),e.success.call(t)
else e.cancelled&&o.a.isFunction(e.cancelled)&&e.cancelled.call(t)}
if(e.message&&!e.noMessage&&!o.a.skipConfirmations){if(e.dialog){a=!1
const t="object"==typeof e.dialog?e.dialog:{},l=e.url.includes("assignments")?"btn-danger":"btn-primary"
return void(s=o()(e.message).dialog(o.a.extend({},{modal:!0,close:n,buttons:[{text:i.t("#buttons.cancel","Cancel"),click(){o()(this).dialog("close")}},{text:i.t("#buttons.delete","Delete"),class:l,click(){a=!0,o()(this).dialog("close")}}]},t)))}a=confirm(e.message)}n()},o.a.fn.confirmDelete.defaults={get message(){return i.t("confirms.default_delete_thing","Are you sure you want to delete this?")}},o.a.fn.fragmentChange=function(e){if(e&&!0!==e){const s=(window.location.search||"").replace(/^\?/,"").split("&")
let a=null
for(var t=0;t<s.length;t++){const e=s[t]
e&&0===e.indexOf("hash=")&&(a="#"+e.substring(5))}this.bind("document_fragment_change",e)
const n=this
let i=!1
for(t=0;t<o.a._checkFragments.fragmentList.length;t++){o.a._checkFragments.fragmentList[t].doc[0]==n[0]&&(i=!0)}i||o.a._checkFragments.fragmentList.push({doc:n,fragment:""}),o()(window).bind("hashchange",o.a._checkFragments),setTimeout(()=>{a&&a.length>0?n.triggerHandler("document_fragment_change",a):n&&n[0]&&n[0].location&&n[0].location.hash.length>0&&n.triggerHandler("document_fragment_change",n[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this},o.a._checkFragments=function(){const e=o.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const s=e[t],a=s.doc
a[0].location.hash!=s.fragment&&(a.triggerHandler("document_fragment_change",a[0].location.hash),s.fragment=a[0].location.hash,o.a._checkFragments.fragmentList[t]=s)}},o.a._checkFragments.fragmentList=[],o.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()},o.a.fn.showIf=function(e){return o.a.isFunction(e)?this.each((function(t){o()(this).showIf(e.call(this))})):(e?this.show():this.hide(),this)},o.a.fn.disableIf=function(e){return o.a.isFunction(e)&&(e=e.call(this)),this.prop("disabled",!!e),this},o.a.fn.indicate=function(e){let t
if("remove"==(e=e||{}))return t=this.data("indicator"),void(t&&t.remove())
o()(".indicator_box").remove()
let s=this.offset()
e&&e.offset&&(s=e.offset)
const a=this.width(),n=this.height(),i=(e.container||this).zIndex()
t=o()(document.createElement("div")),t.css({width:a+6,height:n+6,top:s.top-3,left:s.left-3,zIndex:i+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"}),t.addClass("indicator_box"),t.mouseover((function(){o()(this).stop().fadeOut("fast",(function(){o()(this).remove()}))})),this.data("indicator")&&this.indicate("remove"),this.data("indicator",t),o()("body").append(t),e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){o()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){o()(this).remove()})),e&&e.scroll&&o()("html,body").scrollToVisible(t)},o.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight},o.a.fn.log=function(e){return console.log("%s: %o",e,this),this},o.a.fn.fillWindowWithMe=function(e){const t=o.a.extend({minHeight:400},e),s=o()(this),a=o()("#wrapper"),n=o()("#main"),i=o()("#not_right_side"),l=o()(window),r=o()(this).add(t.alsoResize)
function d(){r.height(0)
const e=l.height()-(a.offset().top+a.outerHeight())+(n.height()-i.height()),d=Math.max(400,e)
r.height(d),o.a.isFunction(t.onResize)&&t.onResize.call(s,d)}return d(),l.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",d),this},o.a.fn.autoGrowInput=function(e){return e=o.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e),this.filter("input:text").each((function(){let t=e.minWidth||o()(this).width(),s="",a=o()(this),n=o()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:a.css("fontSize"),fontFamily:a.css("fontFamily"),fontWeight:a.css("fontWeight"),letterSpacing:a.css("letterSpacing"),whiteSpace:"nowrap"})
n.insertAfter(a),o()(this).bind("keyup keydown blur update change",(function(){setTimeout(()=>{if(s===(s=a.val()))return
n.text(s)
const i=n.width(),l=i+e.comfortZone>=t?i+e.comfortZone:t;(l<a.width()&&l>=t||l>t&&l<e.maxWidth)&&a.width(l)})}))})),this}
o.a},ppAs:function(e,t,s){"use strict"
var a=s("ouhR"),n=s.n(a),i=s("GLiE"),l=s.n(i),o=s("5Ky4"),r=s("pQTu"),d=s("m0r6")
Object(d.a)(JSON.parse('{"ar":{"user_content_aaf0fb5a":"محتوى المستخدم"},"cy":{"user_content_aaf0fb5a":"Cynnwys Defnyddiwr"},"da":{"user_content_aaf0fb5a":"Brugerindhold"},"da-x-k12":{"user_content_aaf0fb5a":"Brugerindhold"},"de":{"user_content_aaf0fb5a":"Benutzer-Content"},"el":{"user_content_aaf0fb5a":"Περιεχόμενο Χρήστη"},"en-AU":{"user_content_aaf0fb5a":"User Content"},"en-CA":{"user_content_aaf0fb5a":"User Content"},"en-GB":{"user_content_aaf0fb5a":"User content"},"es":{"user_content_aaf0fb5a":"Contenido del usuario"},"fa":{"user_content_aaf0fb5a":"محتوای کاربر"},"fi":{"user_content_aaf0fb5a":"Käyttäjän sisältö"},"fr":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"fr-CA":{"user_content_aaf0fb5a":"Contenu de l\'utilisateur"},"he":{"user_content_aaf0fb5a":"תוכן משתמש"},"ht":{"user_content_aaf0fb5a":"Kontni Itilizatè"},"hu":{"user_content_aaf0fb5a":"Felhasználói tartalom"},"is":{"user_content_aaf0fb5a":"Notandaefni"},"it":{"user_content_aaf0fb5a":"Contenuto utente"},"ja":{"user_content_aaf0fb5a":"ユーザーコンテンツ"},"mi":{"user_content_aaf0fb5a":"Ihirangi kaiwhakamahi"},"nb":{"user_content_aaf0fb5a":"Brukerinnhold"},"nb-x-k12":{"user_content_aaf0fb5a":"Brukerinnhold"},"nl":{"user_content_aaf0fb5a":"Gebruikersinhoud"},"nn":{"user_content_aaf0fb5a":"Brukarinnhald"},"pl":{"user_content_aaf0fb5a":"Zawartość użytkownika"},"pt":{"user_content_aaf0fb5a":"Conteúdo do Utilizador"},"pt-BR":{"user_content_aaf0fb5a":"Conteúdo do Usuário"},"ru":{"user_content_aaf0fb5a":"Контент пользователя"},"sl":{"user_content_aaf0fb5a":"Vsebina uporabnika"},"sv":{"user_content_aaf0fb5a":"Användarinnehåll"},"sv-x-k12":{"user_content_aaf0fb5a":"Användarinnehåll"},"tr":{"user_content_aaf0fb5a":"Kullanıcı İçeriği"},"uk":{"user_content_aaf0fb5a":"Контент користувача"},"zh-Hans":{"user_content_aaf0fb5a":"用户内容"},"zh-Hant":{"user_content_aaf0fb5a":"使用者內容"}}'))
s("jQeR"),s("0sPK")
var u=r.default.scoped("user_content")
const c={translateMathmlForScreenreaders(e){const t=n()("<div/>").html(e.attr("x-canvaslms-safe-mathml")).html(),s=n()('<span class="hidden-readable"></span>')
return s.html(t),s},toMediaCommentLink(e){const t=n()("<a\n        id='media_comment_".concat(Object(o.a)(n()(e).data("media_comment_id")),"'\n        data-media_comment_type='").concat(Object(o.a)(n()(e).data("media_comment_type")),"'\n        class='instructure_inline_media_comment ").concat(Object(o.a)(e.nodeName.toLowerCase()),"_comment'\n        data-alt='").concat(Object(o.a)(n()(e).attr("data-alt")),"'\n      />"))
return t.html(n()(e).html()),t},convert(e,t={}){const s=n()("<div />").html(e)
return s.find("video.instructure_inline_media_comment,audio.instructure_inline_media_comment").replaceWith((function(){return c.toMediaCommentLink(this)})),s.find("object.instructure_user_content:not(#kaltura_player) embed").remove(),t.forEditing||(s.find("object.instructure_user_content,embed.instructure_user_content").replaceWith((function(){const e=n()(this)
if(!e.data("uc_snippet")||!e.data("uc_sig"))return this
const t=l.a.uniqueId("uc_")
let s="/object_snippet"
ENV.files_domain&&(s="//".concat(ENV.files_domain).concat(s))
const a=n()("<form\n            action='".concat(Object(o.a)(s),"'\n            method='post'\n            class='user_content_post_form'\n            target='").concat(Object(o.a)(t),"'\n            id='form-").concat(Object(o.a)(t),"'\n          />"))
return a.append(n()("<input type='hidden'/>").attr({name:"object_data",value:e.data("uc_snippet")})),a.append(n()("<input type='hidden'/>").attr({name:"s",value:e.data("uc_sig")})),n()("body").append(a),setTimeout(()=>a.submit(),0),n()("<iframe\n            class='user_content_iframe'\n            name='".concat(Object(o.a)(t),"'\n            style='width: ").concat(Object(o.a)(e.data("uc_width")),"; height: ").concat(Object(o.a)(e.data("uc_height")),";'\n            frameborder='0'\n            title='").concat(Object(o.a)(u.t("User Content")),"'\n          />"))})),s.find("img.equation_image").each((e,t)=>{const s=n()(t),a=c.translateMathmlForScreenreaders(s)
s.removeAttr("x-canvaslms-safe-mathml"),s.after(a)})),s.html()}}
t.a=c}}])

//# sourceMappingURL=messages-c-c3b06f7c77.js.map