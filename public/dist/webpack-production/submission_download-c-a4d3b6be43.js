(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[504],{KZuI:function(e,i,s){"use strict"
s.r(i)
var o=s("u7Gu"),a=s("rWGD"),r=s("ouhR"),n=s.n(r),_=s("5Ky4")
s("jYyc"),s("YGE8"),s("KsSd")
o.a.downloadSubmissions=function(e,i){let s=!1
const o=ENV.SUBMISSION_DOWNLOAD_DIALOG_TITLE||a.a.t("Download Assignment Submissions")
n()("#download_submissions_dialog").dialog({title:o,close(){s=!0}}).on("dialogclose",i),n()("#download_submissions_dialog .progress").progressbar({value:0})
const r=function(){if(s||0===n()("#download_submissions_dialog:visible").length)return
n()("#download_submissions_dialog .status_loader").css("visibility","visible")
let i=null
n.a.ajaxJSON(e,"GET",{},s=>{if(s&&s.attachment){const o=s.attachment
if("zipped"===o.workflow_state){n()("#download_submissions_dialog .progress").progressbar("value",100)
const i=a.a.t("#submissions.finished_redirecting","Finished!  Redirecting to File..."),s=a.a.t("Click here to download %{size_of_file}",{size_of_file:o.readable_size}),r='<a href="'.concat(Object(_.a)(e),'"><b>').concat(Object(_.a)(s),"</b></a>")
return n()("#download_submissions_dialog .status").html("".concat(Object(_.a)(i),"<br>").concat(n.a.raw(r))),n()("#download_submissions_dialog .status_loader").css("visibility","hidden"),void(location.href=e)}{let s=parseInt(o.file_state,10)
isNaN(s)&&(s=0),s+=5,n()("#download_submissions_dialog .progress").progressbar("value",s)
let r=null
r=s>=95?a.a.t("#submissions.creating_zip","Creating zip file..."):a.a.t("#submissions.gathering_files_progress","Gathering Files (%{progress})...",{progress:a.a.toPercentage(s)}),n()("#download_submissions_dialog .status").text(r),(s<=5||s===i)&&n.a.ajaxJSON("".concat(e,"&compile=1"),"GET",{},()=>{},()=>{}),i=s}}n()("#download_submissions_dialog .status_loader").css("visibility","hidden"),setTimeout(r,3e3)},()=>{n()("#download_submissions_dialog .status_loader").css("visibility","hidden"),setTimeout(r,1e3)})}
r()}},KsSd:function(e,i,s){"use strict"
var o=s("ouhR"),a=s.n(o)
s("9Duh"),s("vTtS")
a.a.widget("ui.progressbar",{version:"@VERSION",options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()}),this.valueDiv=a()("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this.oldValue=this._value(),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this._value():(this._setOption("value",e),this)},_setOption:function(e,i){"value"===e&&(this.options.value=i,this._refreshValue(),this._value()===this.options.max&&this._trigger("complete")),this._super(e,i)},_value:function(){var e=this.options.value
return"number"!=typeof e&&(e=0),Math.min(this.options.max,Math.max(this.min,e))},_percentage:function(){return 100*this._value()/this.options.max},_refreshValue:function(){var e=this.value(),i=this._percentage()
this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),this.valueDiv.toggle(e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.attr("aria-valuenow",e)}})},rWGD:function(e,i,s){"use strict"
var o=s("pQTu"),a=s("m0r6")
Object(a.a)(JSON.parse('{"ar":{"click_here_to_download_size_of_file_74443988":"انقر هنا للتنزيل %{size_of_file}","download_assignment_submissions_41e50ee7":"تنزيل عمليات إرسال المهمة","excused_cf8792eb":"ليس إجباري","submissions":{"creating_zip":"جارٍ إنشاء الملف المضغوط...","download_submissions_title":"تنزيل عمليات إرسال المهمة","finished_redirecting":"انتهى!  جارٍ إعادة التوجيه إلى الملف...","gathering_files":"جارٍ تجميع الملفات (%{progress})...","gathering_files_progress":"يجري تجميع الملفات (%{progress})...","see_attached_files":"انظر الملفات المرفقة"}},"cy":{"click_here_to_download_size_of_file_74443988":"Cliciwch yma i lwytho i lawr %{size_of_file}","download_assignment_submissions_41e50ee7":"Llwytho’r aseiniadau sydd wedi’u cyflwyno i lawr","excused_cf8792eb":"Wedi esgusodi","submissions":{"creating_zip":"Wrthi’n creu ffeil .zip...","download_submissions_title":"Llwytho’r aseiniadau sydd wedi’u cyflwyno i lawr","finished_redirecting":"Wedi gorffen!  Wrthi’n ailgyfeirio i ffeil...","gathering_files":"Wrthi’n casglu ffeiliau (%{progress})...","gathering_files_progress":"Wrthi’n casglu ffeiliau (%{progress})...","see_attached_files":"Gweler y ffeiliau sydd wedi’u hatodi"}},"da":{"click_here_to_download_size_of_file_74443988":"Klik her for at downloade %{size_of_file}","download_assignment_submissions_41e50ee7":"Download opgaveafleveringer","excused_cf8792eb":"Undskyldt","submissions":{"creating_zip":"Opretter zip-fil ...","download_submissions_title":"Download opgaveafleveringer","finished_redirecting":"Færdig! Omdirigerer til fil ...","gathering_files":"Samler filer (%{progress})...","gathering_files_progress":"Samler filer (%{progress})...","see_attached_files":"Se vedhæftede filer"}},"da-x-k12":{"click_here_to_download_size_of_file_74443988":"Klik her for at downloade %{size_of_file}","download_assignment_submissions_41e50ee7":"Download opgaveafleveringer","excused_cf8792eb":"Undskyldt","submissions":{"creating_zip":"Opretter zip-fil ...","download_submissions_title":"Download opgaveafleveringer","finished_redirecting":"Færdig! Omdirigerer til fil ...","gathering_files":"Samler filer (%{progress})...","gathering_files_progress":"Samler filer (%{progress})...","see_attached_files":"Se vedhæftede filer"}},"de":{"click_here_to_download_size_of_file_74443988":"Zum Herunterladen hier klicken %{size_of_file}","download_assignment_submissions_41e50ee7":"Aufgabenabgaben herunterladen","excused_cf8792eb":"Entschuldigt","submissions":{"creating_zip":"Zip-Datei wird erstellt ...","download_submissions_title":"Aufgabenabgaben herunterladen","finished_redirecting":"Fertig! Weiterleitung in Datei ...","gathering_files":"Dateien sammeln (%{progress}) ...","gathering_files_progress":"Dateien sammeln (%{progress}) ...","see_attached_files":"Siehe angehängte Dateien"}},"el":{"excused_cf8792eb":"Δικαιολογημένος/η","submissions":{"creating_zip":"Δημιουργία αρχείου zip...","download_submissions_title":"Λήψη των Υποβολών Εργασιών","finished_redirecting":"\\u003cmrk mid=\\"3115\\" mtype=\\"seg\\"\\u003eΟλοκληρώθηκε!\\u003c/mrk\\u003e  \\u003cmrk mid=\\"3116\\" mtype=\\"seg\\"\\u003eΑνακατεύθυνση στο Αρχείο...\\u003c/mrk\\u003e","gathering_files":"Συγκέντρωση Αρχείων (%{progress})...","gathering_files_progress":"Συγκέντρωση Αρχείων (%{progress})...","see_attached_files":"Δείτε τα επισυναπτόμενα αρχεία"}},"en-AU":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download Assignment Submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download Assignment Submissions","finished_redirecting":"Finished!  Redirecting to File...","gathering_files":"Gathering Files (%{progress})...","gathering_files_progress":"Gathering Files (%{progress})...","see_attached_files":"See attached files"}},"en-CA":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download Assignment Submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download Assignment Submissions","finished_redirecting":"Finished!  Redirecting to File...","gathering_files":"Gathering Files (%{progress})...","gathering_files_progress":"Gathering Files (%{progress})...","see_attached_files":"See attached files"}},"en-GB":{"click_here_to_download_size_of_file_74443988":"Click here to download %{size_of_file}","download_assignment_submissions_41e50ee7":"Download assignment submissions","excused_cf8792eb":"Excused","submissions":{"creating_zip":"Creating zip file...","download_submissions_title":"Download assignment submissions","finished_redirecting":"Finished!  Redirecting to file...","gathering_files":"Gathering files (%{progress})...","gathering_files_progress":"Gathering files (%{progress})...","see_attached_files":"See attached files"}},"es":{"click_here_to_download_size_of_file_74443988":"Haga clic aquí para descargar %{size_of_file}","download_assignment_submissions_41e50ee7":"Descargar las entregas de tareas","excused_cf8792eb":"Justificado","submissions":{"creating_zip":"Creando un archivo comprimido zip...","download_submissions_title":"Descargar las entregas de tareas","finished_redirecting":"¡Terminado!  Redirigiendo al archivo...","gathering_files":"Recopilando archivos (%{progress})...","gathering_files_progress":"Recopilando archivos (%{progress})...","see_attached_files":"Ver archivos adjuntos"}},"fa":{"click_here_to_download_size_of_file_74443988":"برای بارگیری %{size_of_file} اینجا کلیک کنید","download_assignment_submissions_41e50ee7":"بارگیری تکالیف ارسالی ","excused_cf8792eb":"معاف شد","submissions":{"creating_zip":"درحال ایجاد فایل فشرده...","download_submissions_title":"بارگیری موردهای ارسالی تکلیف","finished_redirecting":"به پایان رسید! در حال تغییر مسیر به فایل ...","gathering_files":"در حال گردآوری فایل ها (%{progress})...","gathering_files_progress":"در حال گردآوری فایل ها (%{progress})...","see_attached_files":"مشاهده فایل های پیوست شده"}},"fi":{"click_here_to_download_size_of_file_74443988":"Napsauta tähän ladataksesi %{size_of_file}","download_assignment_submissions_41e50ee7":"Lataa tehtävän lähetykset","excused_cf8792eb":"Annettu anteeksi","submissions":{"creating_zip":"Luodaan zip-tiedostoa...","download_submissions_title":"Lataa tehtävän lähetykset","finished_redirecting":"Valmis!  Uudelleenohjataan tiedostoon...","gathering_files":"Kerätään tiedostoja (%{progress})...","gathering_files_progress":"Kerätään tiedostoja (%{progress})...","see_attached_files":"Katso liitetyt tiedosto"}},"fr":{"click_here_to_download_size_of_file_74443988":"Cliquez ici pour télécharger %{size_of_file}","download_assignment_submissions_41e50ee7":"Télécharger les envois de travaux","excused_cf8792eb":"Pas obligatoire","submissions":{"creating_zip":"Création d’un fichier zip...","download_submissions_title":"Télécharger les envois de tâches","finished_redirecting":"Terminé. Redirection vers le fichier...","gathering_files":"Collecte des fichiers (%{progress})...","gathering_files_progress":"Collecte des fichiers (%{progress})...","see_attached_files":"Voir les fichiers joints"}},"fr-CA":{"click_here_to_download_size_of_file_74443988":"Cliquez ici pour télécharger %{size_of_file}","download_assignment_submissions_41e50ee7":"Télécharger les envois de tâches","excused_cf8792eb":"Pas obligatoire","submissions":{"creating_zip":"Création d’un fichier zip...","download_submissions_title":"Télécharger les envois de tâches","finished_redirecting":"Terminé. Redirection vers le fichier...","gathering_files":"Collecte des fichiers (%{progress})...","gathering_files_progress":"Collecte des fichiers (%{progress})...","see_attached_files":"Voir les fichiers joints"}},"he":{"click_here_to_download_size_of_file_74443988":"יש להקליק כאן כדי להוריד %{size_of_file}","download_assignment_submissions_41e50ee7":"הורדת הגשות מטלה","excused_cf8792eb":"נסלח","submissions":{"creating_zip":"מכין קובץ זיפ...","download_submissions_title":"הורדת הגשות משימות","finished_redirecting":"נסתיים! מנתב לקובץ...","gathering_files":"אוסף קבצים (%{progress})...","gathering_files_progress":"אוסף קבצים (%{progress})... ","see_attached_files":"ראו קבצים מצורפים"}},"ht":{"click_here_to_download_size_of_file_74443988":"Klike la pou telechaje %{size_of_file}","download_assignment_submissions_41e50ee7":"Telechaje Soumisyon Sesyon","excused_cf8792eb":"Egzante","submissions":{"creating_zip":"Kreyasyon fichye zip...","download_submissions_title":"Telechaje Soumisyon Sesyon","finished_redirecting":"Fini! Redireksyon a Fichye...","gathering_files":"Rasanbleman Fichye (%{progress})...","gathering_files_progress":"Rasanbleman Fichye (%{progress})...","see_attached_files":"Gade fichye atache yo"}},"hu":{"excused_cf8792eb":"Felmentve","submissions":{"creating_zip":"Zip file létrehozása...","download_submissions_title":"Beadott feladatmegoldások letöltése","finished_redirecting":"Befejezve! Átirányítás a fájlhoz...","gathering_files":"Fájlok összegyűjtése (%{progress})...","gathering_files_progress":"Fájlok összegyűjtése (%{progress})...","see_attached_files":"Lásd csatolt fájlok"}},"hy":{"excused_cf8792eb":"Ներված է","submissions":{"creating_zip":"Zip ֆայլ է ստեղծվում...","download_submissions_title":"Ներբեռնել ուղարկված հանձնարարությունները ","finished_redirecting":"Ավարտված է: Անցնել __ֆայլին...","gathering_files":"Ֆայլերի հավաքագրում (%{progress})...","gathering_files_progress":"Ֆայլերի հավաքագրում (%{progress})...","see_attached_files":"Տես կից ֆայլերը"}},"is":{"click_here_to_download_size_of_file_74443988":"Smella hér til að  hlaða niður %{size_of_file}","download_assignment_submissions_41e50ee7":"Hlaða niður skiluðum verkefnum","excused_cf8792eb":"Undanþegið","submissions":{"creating_zip":"Stofna ZIP-skrá...","download_submissions_title":"Hlaða niður skiluðum verkefnum","finished_redirecting":"Búið! Endurbeini á skrá...","gathering_files":"Safna skrám (%{progress})...","gathering_files_progress":"Safna skrám (%{progress})...","see_attached_files":"Sjá viðhengdar skrár"}},"it":{"click_here_to_download_size_of_file_74443988":"Fai clic qui per scaricare %{size_of_file}","download_assignment_submissions_41e50ee7":"Scarica compiti inviati","excused_cf8792eb":"Giustificato","submissions":{"creating_zip":"Creazione file zip in corso...","download_submissions_title":"Scarica consegne compiti","finished_redirecting":"Terminato.  Reindirizzamento al file in corso...","gathering_files":"Raccolta file (%{progress}) in corso...","gathering_files_progress":"Raccolta file (%{progress}) in corso...","see_attached_files":"Vedi file allegati"}},"ja":{"click_here_to_download_size_of_file_74443988":"ここをクリックしてダウンロード%{size_of_file}","download_assignment_submissions_41e50ee7":"課題提出物のダウンロード","excused_cf8792eb":"免除","submissions":{"creating_zip":"zip ファイルを作成しています...","download_submissions_title":"課題提出物のダウンロード","finished_redirecting":"完了しました!ファイルにリダイレクトしています...","gathering_files":"ファイルを収集しています (%{progress})...","gathering_files_progress":"ファイルを収集しています (%{progress})...","see_attached_files":"添付ファイルを参照してください"}},"ko":{"submissions":{"creating_zip":"압축 파일을 만드는 중...","download_submissions_title":"과제 제출물 다운로드","finished_redirecting":"완료됨! 파일로 리디렉트 중...","gathering_files":"파일 수집 중 (%{progress})...","gathering_files_progress":"파일 수집 중 (%{progress})...","see_attached_files":"첨부 파일 보기"}},"mi":{"click_here_to_download_size_of_file_74443988":"Pāwhiri ki konei ki te tiki %{size_of_file}","download_assignment_submissions_41e50ee7":" Tikiake WHakataunga Tāpaetanga","excused_cf8792eb":"Whakawātea","submissions":{"creating_zip":"Te hanga kōnae kōtui ...","download_submissions_title":"tāpaetanga Tikiake whakataunga","finished_redirecting":"Kua oti te! Anō ki Kōnae ...","gathering_files":"Kohikohinga Kōnae (%{progress})...","gathering_files_progress":"Kohikohinga Kōnae (%{progress})...","see_attached_files":"Tirohia te kōnae piri"}},"nb":{"click_here_to_download_size_of_file_74443988":"Trykk her for å laste ned %{size_of_file}","download_assignment_submissions_41e50ee7":"Last ned leverte oppgaver","excused_cf8792eb":"Fritatt","submissions":{"creating_zip":"Lager zip-fil...","download_submissions_title":"Laster ned leverte oppgaver","finished_redirecting":"Ferdig! Omdirigerer til filen...","gathering_files":"Samler filer (%{progress})…","gathering_files_progress":"Samler filer (%{progress})…","see_attached_files":"Se vedlagte filer"}},"nb-x-k12":{"click_here_to_download_size_of_file_74443988":"Klikk her for å laste ned %{size_of_file}","download_assignment_submissions_41e50ee7":"Laster ned leverte oppgaver","excused_cf8792eb":"Fritatt","submissions":{"creating_zip":"Lager zip-fil...","download_submissions_title":"Laster ned leverte oppgaver","finished_redirecting":"Ferdig! Omdirigerer til filen...","gathering_files":"Samler filer (%{progress})…","gathering_files_progress":"Samler filer (%{progress})…","see_attached_files":"Se vedlagte filer"}},"nl":{"click_here_to_download_size_of_file_74443988":"Hier klikken om te downloaden %{size_of_file}","download_assignment_submissions_41e50ee7":"Ingezonden opdracht downloaden","excused_cf8792eb":"Geëxcuseerd!","submissions":{"creating_zip":"Bezig met maken van zip-bestand...","download_submissions_title":"Ingezonden opdracht downloaden","finished_redirecting":"Klaar! Bezig met doorsturen naar bestand...","gathering_files":"Bezig met verzamelen van bestanden (%{progress})...","gathering_files_progress":"Bezig met verzamelen van bestanden (%{progress})...","see_attached_files":"Bijgevoegde bestanden zien"}},"nn":{"click_here_to_download_size_of_file_74443988":"Klikk her for å laste ned %{size_of_file}","download_assignment_submissions_41e50ee7":"Last ned oppgåveinnleveringar","excused_cf8792eb":"Fritak er innvilga","submissions":{"creating_zip":"Opprettar ZIP-fil...","download_submissions_title":"Last ned oppgåveinnleveringar","finished_redirecting":"Fullført.  Omdirigerer til fil...","gathering_files":"Samlar filer (%{progress})...","gathering_files_progress":"Samlar filer (%{progress})...","see_attached_files":"Sjå vedlagde filer"}},"pl":{"click_here_to_download_size_of_file_74443988":"Kliknij tutaj, aby pobrać. %{size_of_file}","download_assignment_submissions_41e50ee7":"Pobierz przesłane zadania","excused_cf8792eb":"Usprawiedliwiony!","submissions":{"creating_zip":"Trwa tworzenie pliku .zip...","download_submissions_title":"Pobierz przesłane zadania","finished_redirecting":"Zakończono!  Trwa przekierowanie do pliku…","gathering_files":"Gromadzenie plików (%{progress})...","gathering_files_progress":"Gromadzenie plików (%{progress})...","see_attached_files":"Zobacz dołączone pliki"}},"pt":{"click_here_to_download_size_of_file_74443988":"Clique aqui para descarregar %{size_of_file}","download_assignment_submissions_41e50ee7":"Descarregar envios de tarefas","excused_cf8792eb":"Desculpado","submissions":{"creating_zip":"Criando arquivo zip...","download_submissions_title":"Descarregar envios de tarefas","finished_redirecting":"finalizado  Redirecionando para o arquivo...","gathering_files":"A reunir os ficheiros (%{progress})...","gathering_files_progress":"A reunir os ficheiros (%{progress})...","see_attached_files":"Consultar arquivos anexos"}},"pt-BR":{"click_here_to_download_size_of_file_74443988":"Clique aqui para baixar %{size_of_file}","download_assignment_submissions_41e50ee7":"Baixar envios de tarefas","excused_cf8792eb":"Dispensado","submissions":{"creating_zip":"Criando arquivo zip...","download_submissions_title":"Baixar envios de tarefas","finished_redirecting":"Concluído!  Redirecionando para o arquivo...","gathering_files":"Reunindo arquivos (%{progress})...","gathering_files_progress":"Reunindo arquivos (%{progress})...","see_attached_files":"Consultar arquivos anexos"}},"ru":{"click_here_to_download_size_of_file_74443988":"Щелкните здесь, чтобы скачать %{size_of_file}","download_assignment_submissions_41e50ee7":"Скачать отправки заданий","excused_cf8792eb":"По уважительной причине","submissions":{"creating_zip":"Создание ZIP-файла...","download_submissions_title":"Скачать отправки заданий","finished_redirecting":"Завершено!  Перенаправление к файлу...","gathering_files":"Сбор файлов (%{progress})...","gathering_files_progress":"Сбор файлов (%{progress})...","see_attached_files":"Смотрите приложенные файлы"}},"sl":{"click_here_to_download_size_of_file_74443988":"Za prenos kliknite tukaj %{size_of_file}","download_assignment_submissions_41e50ee7":"Prenesi oddaje nalog","excused_cf8792eb":"Opravičeno","submissions":{"creating_zip":"Ustvarjanje datoteke .zip ...","download_submissions_title":"Prenesi oddaje nalog","finished_redirecting":"Dokončano.  Preusmerjanje na datoteko ...","gathering_files":"Zbiranje datotek (%{progress}) ...","gathering_files_progress":"Zbiranje datotek (%{progress}) ...","see_attached_files":"Glejte dodane datoteke."}},"sv":{"click_here_to_download_size_of_file_74443988":"Klicka här för att ladda ner %{size_of_file}","download_assignment_submissions_41e50ee7":"Ladda ner uppgiftsinlämningar","excused_cf8792eb":"Ursäktad","submissions":{"creating_zip":"Skapar zipfil ...","download_submissions_title":"Ladda ner uppgiftsinlämningar","finished_redirecting":"Färdig!  Omdirigerar till fil ...","gathering_files":"Hämtar filer (%{progress}) ...","gathering_files_progress":"Hämtar filer (%{progress}) ...","see_attached_files":"Se bifogade filer"}},"sv-x-k12":{"click_here_to_download_size_of_file_74443988":"Klicka här för att ladda ner %{size_of_file}","download_assignment_submissions_41e50ee7":"Ladda ner uppgiftsinlämningar","excused_cf8792eb":"Ursäktad","submissions":{"creating_zip":"Skapar zipfil ...","download_submissions_title":"Ladda ner uppgiftsinlämningar","finished_redirecting":"Färdig!  Omdirigerar till fil ...","gathering_files":"Hämtar filer (%{progress}) ...","gathering_files_progress":"Hämtar filer (%{progress}) ...","see_attached_files":"Se bifogade filer"}},"tr":{"click_here_to_download_size_of_file_74443988":"İndirmek için tıklayın %{size_of_file}","download_assignment_submissions_41e50ee7":"Gönderilen Ödevleri İndir","excused_cf8792eb":"Mazeretli","submissions":{"creating_zip":"zip dosyası oluşturuluyor...","download_submissions_title":"Gönderilen Ödevleri İndir","finished_redirecting":"Tamamlandı! Dosyasına Yönlendiriliyor...","gathering_files":"Dosyalar Toplanıyor (%{progress}%)...","gathering_files_progress":"Dosyalar Toplanıyor (%{progress}%)...","see_attached_files":"Ekli dosyalara bakın"}},"uk":{"click_here_to_download_size_of_file_74443988":"Натисніть тут для завантаження%{size_of_file}","download_assignment_submissions_41e50ee7":"Завантажити подання завдання","excused_cf8792eb":"Виправдано","submissions":{"creating_zip":"Створюється zip-архів...","download_submissions_title":"Завантажити відправлені завдання","finished_redirecting":"Готово! Перенаправлення до файлу ...","gathering_files":"Збір файлів (%{progress})...","gathering_files_progress":"Збір файлів (%{progress})...","see_attached_files":"Передивитись прикріплені файли"}},"zh-Hans":{"click_here_to_download_size_of_file_74443988":"单击此处下载%{size_of_file}","download_assignment_submissions_41e50ee7":"下载作业提交项","excused_cf8792eb":"已免除","submissions":{"creating_zip":"正在创建 zip 文件...","download_submissions_title":"下载作业提交文件","finished_redirecting":"已完成！正在重定向至文件...","gathering_files":"正在收集文件 (%{progress})...","gathering_files_progress":"正在收集文件 (%{progress})...","see_attached_files":"查看附件文件"}},"zh-Hant":{"click_here_to_download_size_of_file_74443988":"按下此處下載%{size_of_file}","download_assignment_submissions_41e50ee7":"下載作業提交項目","excused_cf8792eb":"已免除","submissions":{"creating_zip":"正在創建 zip 文檔...","download_submissions_title":"下載作業提交件","finished_redirecting":"已完成！重定向到文檔...","gathering_files":"正在收集文檔 (%{progress})...","gathering_files_progress":"正在收集文檔 (%{progress})...","see_attached_files":"見所附文檔"}}}'))
s("jQeR"),s("0sPK"),i.a=o.default.scoped("submissions")}}])

//# sourceMappingURL=submission_download-c-a4d3b6be43.js.map