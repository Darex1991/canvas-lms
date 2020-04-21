(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[142,560],{"0crz":function(e,t,i){"use strict"
var s=i("ouhR"),n=i.n(s),a=i("pQTu"),o=i("m0r6")
Object(o.a)(JSON.parse('{"ar":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"إظهار النص المقتبس","word_separator":" "}}},"cy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"dangos testun wedi’i ddyfynnu","word_separator":" "}}},"da":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"da-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis tekst i gåseøjne","word_separator":" "}}},"de":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"zitierten Text zeigen","word_separator":" "}}},"el":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"προβολή κειμένου που παρατίθεται"}}},"en-AU":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"en-GB":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"show quoted text","word_separator":" "}}},"es":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostrar texto citado","word_separator":" "}}},"fa":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"نمایش متن نقل شده","word_separator":" "}}},"fi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"näytä lainattu teksti","word_separator":" "}}},"fr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"fr-CA":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afficher le texte entre guillemets","word_separator":" "}}},"he":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"מציג ציטוט","word_separator":" "}}},"ht":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"afiche tèks site","word_separator":" "}}},"hu":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"idézett szöveg megjelenítése","word_separator":" "}}},"hy":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"ցույց տալ մեջբերվող տեքստը","word_separator":"-"}}},"is":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Sýna ívitnaðan texta","word_separator":" "}}},"it":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"mostra testo citato","word_separator":" "}}},"ja":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"引用したテキストを表示","word_separator":" "}}},"ko":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"인용된 텍스트 표시","word_separator":" "}}},"mi":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"whakaatu kuputuhi faahiti","word_separator":"-"}}},"nb":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nb-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis den merkede teksten","word_separator":" "}}},"nl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"geciteerde tekst tonen","word_separator":" "}}},"nn":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"vis sitert tekst","word_separator":" "}}},"pl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"pokaż cytowany fragment tekstu","word_separator":" "}}},"pt":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"pt-BR":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"exibir texto citado","word_separator":" "}}},"ru":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"показать цитированный текст","word_separator":" "}}},"sl":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"prikaži citirano besedilo","word_separator":" "}}},"sv":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"sv-x-k12":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"visa citerad text","word_separator":" "}}},"tr":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"alıntılanan metni göster","word_separator":" "}}},"uk":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"Показати цитований текст","word_separator":" "}}},"zh-Hans":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"显示引用的文本","word_separator":" "}}},"zh-Hant":{"lib":{"text_helper":{"ellipsis":"...","quoted_text_toggle":"顯示引用的文字","word_separator":" "}}}}'))
i("jQeR"),i("0sPK")
var l,r,c=a.default.scoped("lib.text_helper"),d=i("5Ky4")
l=/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))|(LINK-PLACEHOLDER)/gi
t.a=r={quoteClump:function(e){return"<div class='quoted_text_holder'> <a href='#' class='show_quoted_text_link'>"+Object(d.a)(c.t("quoted_text_toggle","show quoted text"))+"</a> <div class='quoted_text' style='display: none;'> "+n.a.raw(e.join("\n"))+" </div> </div>"},formatMessage:function(e){var t,i,s,n,a,o,c,u
for(n=[],a=[],e=e.replace(l,(function(e,t){var i
return a.push("LINK-PLACEHOLDER"===e?"LINK-PLACEHOLDER":("http://"!==(i=e).slice(0,7)&&"https://"!==i.slice(0,8)&&(i="http://"+i),n.push(i),"<a href='"+Object(d.a)(i)+"'>"+Object(d.a)(e)+"</a>")),"LINK-PLACEHOLDER"})),o=[],c=[],t=0,i=(u=(e=(e=(e=Object(d.a)(e)).replace(new RegExp("LINK-PLACEHOLDER","g"),(function(e,t){return a.shift()}))).replace(/\n/g,"<br />\n")).split("\n")).length;t<i;t++)(s=u[t]).match(/^(&gt;|>)/)?c.push(s):(c.length&&o.push(r.quoteClump(c)),c=[],o.push(s))
return c.length&&o.push(r.quoteClump(c)),o.join("\n")},delimit:function(e){var t,i,s,n,a
if(isNaN(e))return String(e)
if(a=e<0?"-":"",Infinity===(t=Math.abs(e)))return String(e)
for(n=t===(i=Math.floor(t))?"":String(t).replace(/^\d+\./,".");i>=1e3;)s=String(i).replace(/\d+(\d\d\d)$/,",$1"),i=Math.floor(i/1e3),n=s+n
return a+String(i)+n},truncateText:function(e,t){var i,s,n,a,o,l
if(null==t&&(t={}),s=null!=(a=t.max)?a:30,i=c.t("ellipsis","..."),l=c.t("word_separator"," "),!(e=(null!=e?e:"").replace(/\s+/g,l).trim())||e.length<=s)return e
for(o=0;!((n=e.indexOf(l,o+1))<0||n>s-i.length);)o=n
return o||(o=s-i.length),e.substring(0,o)+i},plainText:function(e){return e.replace(/(<([^>]+)>)/gi,"")}}},"26Wh":function(e,t,i){"use strict"
var s=i("ouhR"),n=i.n(s),a=(i("GLiE"),i("5Ky4"))
i("VHne"),i("SJWK")
n.a.fn.instTree=function(e){return n()(this).each((function(){let t=!1,i=n()(this)
const s=this
let o=null
s.options={autoclose:!0,overrideEvents:!1,multi:!0,dragdrop:!0,onClick:!1,onDblClick:!1,onExpand:!1,onCollapse:!1,onAddNode:!1,onEditNode:!1,onDeleteNode:!1,onDrag:!1,onDrop:!1},s.opts=n.a.extend({},s.options,e),n.a.fn.instTree.InitInstTree=function(e){i=n()(e)
i.find("li:not(.separator)").filter((function(){return!(n()(this).prev("li.separator").get(0)||n()(this).parents("ul.non-instTree").get(0))})).each((function(){n()(this).before('<li class="separator"></li>')})),i.find("li > span").not(".sign").not(".clr").addClass("text").attr("unselectable","on"),i.find("li:not(.separator)").filter((function(){return!n()(this).parents("ul.non-instTree").get(0)})).filter(":has(ul)").addClass("node").end().filter(":not(.node)").addClass("leaf"),s.IeSetStyles(),s.Clean(),s.AddSigns(),t||s.BindEvents(e),s.opts.dragdrop&&(s.CancelDragDrop(e),s.InitDragDrop(e))},s.InitDragDrop=function(e){i=n()(e),i.find("span.text").draggable({cursor:n.a.browser.msie?"default":"move",distance:3,helper(){return n()('<div id="instTree-drag"><span>'+n()(this).html()+"</span></div>")},appendTo:i}),i.find("li.separator").droppable({accept:"span.text",hoverClass:"dd-hover"}),i.find("span.text").bind("dragstart",(function(e,t){i=n()(this).parents("ul.instTree:first")
const a=n()(this).parent("li"),o=n()("div#instTree-drag")
n.a.browser.msie&&i.find("li.separator").removeClass("dd-hover"),n.a.browser.opera&&o.css("margin-top","10px"),a.is(".leaf")?(o.addClass("leaf"),n.a.browser.msie&&o.css("background","#C3E1FF url("+s.opts.imgFolder+"leaf-drag.gif) left 3px no-repeat")):a.is(".node")&&o.addClass("node"),a.prev("li.separator").addClass("alt").end().addClass("alt"),"function"==typeof s.opts.onDrag&&s.opts.onDrag(e,a)})),i.find("li.separator").bind("dropover",(function(e,t){o=n()(this)})),i.find("li.separator").bind("dropout",(e,t)=>{o=null}),i.find("span.text").bind("dragstop",(t,a)=>{let l=!0
if(o){var r=i.find("li.alt:not(.separator):eq(0)")
const e=o.parents("li.node:eq(0)")
r.is(".node")&&e.is(".fixedLevel")&&(l=!1)}o&&l?(o.before(i.find("li.alt").remove().removeClass("alt")),o=null,"function"==typeof s.opts.onDrop&&s.opts.onDrop(t,r),n.a.fn.instTree.InitInstTree(e)):i.find("li.alt").removeClass("alt")})},s.CancelDragDrop=function(e){i=n()(e),i.find("span.text").draggable("destroy"),i.find("li.separator").droppable("destroy"),i.find("li.separator").unbind(),i.find("span.text").unbind()},n.a.fn.instTree.AddNode=function(e,t){i=n()(e)
const a=i.find("span.active").get(0)
if(a){const i=n()(a).parents("li:first")
if(!n()(a).parents("li.node:first").is(".fixedLevel")||"node"!=t){const o='<li class="separator"></li>'+("<li"+("leaf"==t?"":' class="node"')+'><span class="text">&nbsp;</span><input type="text" value="New item" /></li>')
let l,r,c,d=!1
i.is(".leaf")?(i.after(o),l=i.nextAll("li:not(.separator):first"),c=i.parent(),d=!0):i.is(".node")&&(r=i.children("ul").get(0),r?(n()(r).append(o),l=n()(r).children("li:not(.separator):last")):(i.append("<ul>"+o+"</ul>"),r=i.children("ul").get(0),l=n()(r).children("li:not(.separator):last")),s.ExpandNode(e,i),c=i,d=!0),d&&(n()(a).removeClass("active"),c.find("input:text").focus().select().blur((function(){s.SaveInput(e,n()(this))}))),n.a.fn.instTree.InitInstTree(e),"function"==typeof s.opts.onAddNode&&s.opts.onAddNode(l)}}},n.a.fn.instTree.EditNode=function(e){i=n()(e)
const t=i.find("span.active").get(0)
if(t){const i=n()(t).parents("li:first")
n()(t).replaceWith('<span class="text">&nbsp;</span><input type="text" value="'+Object(a.a)(n()(t).text())+'" />'),i.find("input:text").focus().select().blur((function(){s.SaveInput(e,n()(this))})),"function"==typeof s.opts.onEditNode&&s.opts.onEditNode(i)}},n.a.fn.instTree.DeleteNode=function(e){i=n()(e)
const t=i.find("span.active").get(0)
if(t){const i=n()(t).parents("li:first"),a=i.parents("li.node:first")
i.prev("li.separator").remove().end().remove(),n.a.fn.instTree.InitInstTree(e),"function"==typeof s.opts.onDeleteNode&&s.opts.onDeleteNode(i,a)}},s.SaveInput=function(e,t){t.prev("span.text").remove()
const i=""!==n.a.trim(t.get(0).value)?t.get(0).value:"_____"
t.replaceWith('<span class="active text">'+Object(a.a)(i)+"</span>"),n.a.fn.instTree.InitInstTree(e)},s.IeSetStyles=function(){n.a.browser.msie&&(i.find("li.node:not(.open) > ul").hide(),i.find("li.node.open > ul").css("margin-bottom","1px"))},s.Clean=function(){i.find("li:not(.separator)").each((function(){n()(this).removeClass("last"),n()(this).next("li").length&&!n()(this).find("ul").length||n()(this).addClass("last")}))},s.AddSigns=function(){i.find("li.node").each((function(){n()(this).hasClass("open")?n()(this).find("span.sign").remove().end().append('<span class="sign minus"></span>'):n()(this).find("span.sign").remove().end().append('<span class="sign plus"></span>')}))},s.BindEvents=function(e){i.on("keydown",(function(t){const a=i.find('[aria-selected="true"]'),o=n()("#file_list_container")
switch(t.which){case 38:t.preventDefault(),t.stopPropagation()
var l=s.FindNode(a,"up")
s.SelectNode(l),o.scrollTop(s.FileScrollOffset(l,o))
break
case 40:t.preventDefault(),t.stopPropagation()
var r=s.FindNode(a,"down")
s.SelectNode(r),o.scrollTop(s.FileScrollOffset(r,o))
break
case 37:t.preventDefault(),t.stopPropagation()
var c=a.attr("aria-expanded")
if(a.hasClass("node")&&"true"===c)s.CollapseNode(a)
else if(void 0===c||!1===c||"false"===c){const e=a.parents(".node").eq(0)
s.SelectNode(e),o.scrollTop(s.FileScrollOffset(e,o))}break
case 39:t.preventDefault(),t.stopPropagation()
c=a.attr("aria-expanded")
if(a.hasClass("node")&&"true"!==c)s.ExpandNode(e,a)
else if("true"===c){r=s.FindNode(a,"down")
s.SelectNode(r),o.scrollTop(s.FileScrollOffset(r,o))}break
case 13:t.preventDefault(),t.stopPropagation()
var d=a
"function"==typeof s.opts.onEnter&&s.opts.onEnter.call(this,t,d)
break
case 35:t.preventDefault(),t.stopPropagation()
var u=n()('[role="treeitem"]:visible').last()
s.SelectNode(u),o.scrollTop(s.FileScrollOffset(u,o))
break
case 36:t.preventDefault(),t.stopPropagation()
var p=n()('[role="treeitem"]:visible').first()
s.SelectNode(p),o.scrollTop(s.FileScrollOffset(p,o))}})),i.click((function(t){const i=n()(this).closest(".instTree"),a=n()(t.target)
let o
a.is("span.sign")?(o=a.parents("li:eq(0)"),s.ToggleNode(e,o)):a.is("span.text")&&(o=a.closest("li"),"function"==typeof s.opts.onClick?(s.opts.overrideEvents||(s.opts.multi&&t.ctrlKey||i.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node"),a.addClass("active"),o.hasClass("leaf")?o.addClass("active-leaf"):o.addClass("active-node")),s.opts.onClick.call(o,t,o)):(s.opts.multi&&t.ctrlKey||i.find(".active").removeClass("active").end().find(".active-leaf").removeClass("active-leaf").end().find(".active-node").removeClass("active-node"),a.addClass("active"),o.hasClass("leaf")?o.addClass("active-leaf"):o.addClass("active-node")))})),i.dblclick(t=>{const i=n()(t.target)
if(i.is("span.text")){const n=i.parents("li:eq(0)")
"function"==typeof s.opts.onDblClick?(!s.opts.overrideEvents&&n.is(".node")&&s.ToggleNode(e,n),s.opts.onDblClick.call(n,t,n)):n.is(".node")&&s.ToggleNode(e,n)}}),t=!0},s.ToggleNode=function(e,t){t.hasClass("open")?s.CollapseNode(t):s.ExpandNode(e,t),s.Clean()},s.ExpandNode=function(e,t){t.addClass("open"),t.attr("aria-expanded",!0),s.opts.autoclose&&t.siblings(".open").each((function(){s.CollapseNode(n()(this))})),n.a.browser.msie&&(t.children("ul").show().css({"margin-bottom":"1px",visibility:"visible"}),t.children("ul").find("li.node:not(.open) > ul").each((function(){n()(this).css("visibility","hidden")}))),t.find("span.sign:last").removeClass("plus").addClass("minus"),s.opts.multi&&n.a.fn.instTree.InitInstTree(e),"function"==typeof s.opts.onExpand&&s.opts.onExpand(t)},s.CollapseNode=function(e){e.removeClass("open"),e.attr("aria-expanded",!1),n.a.browser.msie&&e.children("ul").hide(),e.find("span.sign:last").removeClass("minus").addClass("plus"),"function"==typeof s.opts.onCollapse&&s.opts.onCollapse(e)},s.SelectNode=function(e){e.length&&(i.attr("aria-activedescendant",e.attr("id")),i.find('[aria-selected="true"]').attr("aria-selected","false"),e.attr("aria-selected","true"))},s.FindNode=function(e,t){const i=n()('[role="treeitem"]:visible'),s=i.index(e)
let a=s
"up"==t?a--:a++
const o=a>=0?i.get(a):i.get(s)
return n()(o).data("indexPosition",a)},s.FileScrollOffset=function(e,t){const i=e.data("indexPosition")
return(t.find(".leaf").first().height()||20)*i+(e.siblings(".separator").first().height()||2)*i-t.height()/2},n()(this).is("ul")&&(i=n()(this),i.addClass("instTree"),n.a.fn.instTree.InitInstTree(s))}))}},B1vq:function(e,t,i){"use strict"
var s=i("ouhR"),n=i.n(s)
i("s/PJ")
n.a.fn.scrollToVisible=function(e){const t={},i=n()(e)
if(0===i.length)return
let s=i.offset(),a=i.outerWidth(),o=i.outerHeight(),l=s.top,r=l+o,c=s.left,d=c+a,u="html,body"==this.selector?n.a.windowScrollTop():this.scrollTop(),p=this.scrollLeft(),h=this.outerHeight(),f=this.outerWidth()
if("html,body"!=this.selector){let e=n()("body").offset()
this.each((function(){try{return e=n()(this).offset(),!1}catch(e){}})),l-=e.top,r-=e.top,c-=e.left,d-=e.left}return"HTML"!=this[0].tagName&&"BODY"!=this[0].tagName||(h=n()(window).height(),n()("#wizard_box:visible").length>0&&(h-=n()("#wizard_box:visible").height()),f=n()(window).width(),l-=u,c-=p,r-=u,d-=p),l<0||h<o&&r>h?t.scrollTop=l+u:r>h&&(t.scrollTop=r+u-h+20),c<0?t.scrollLeft=c+p:d>f&&(t.scrollLeft=d+p-f+20),1==t.scrollTop&&(t.scrollTop=0),1==t.scrollLeft&&(t.scrollLeft=0),this.scrollTop(t.scrollTop),this.scrollLeft(t.scrollLeft),this}},OShF:function(e,t,i){"use strict"
var s=i("ouhR"),n=i.n(s),a=i("5Ky4")
i("JI1W")
n.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each((function(){const t=n()(this)
n.a.each(["name","id","class"],(i,s)=>{t.attr(s)&&t.attr(s,t.attr(s).replace(/-iterator-/,e.iterator))})})),e.id&&this.attr("id",e.id)
let s=!1
if(e.data)for(var t in e.data){if(e.except&&-1!=n.a.inArray(t,e.except))continue
e.data[t]&&e.dataValues&&-1!=n.a.inArray(t,e.dataValues)&&this.data(t,e.data[t].toString())
const o=this.find("."+t)
var i=e.avoid||""
o.each((function(){const o=n()(this)
if(o.length>0&&0===o.closest(i).length)if(void 0!==e.data[t]&&null!==e.data[t]||(e.data[t]=""),e.htmlValues&&-1!=n.a.inArray(t,e.htmlValues))o.html(n.a.raw(e.data[t].toString())),o.hasClass("user_content")&&(s=!0,o.removeClass("enhanced"),o.data("unenhanced_content_html",e.data[t].toString()))
else if("INPUT"==o[0].tagName.toUpperCase())o.val(e.data[t])
else try{const i=e.data[t].toString()
o.html(Object(a.a)(i))}catch(e){}}))}e.hrefValues&&e.data&&this.find("a,span[rel]").each((function(){let t,i,s,a=n()(this)
for(const o in e.hrefValues){if(!e.hrefValues.hasOwnProperty(o))continue
const l=e.hrefValues[o]
if(t=a.attr("href")){const i=n.a.replaceTags(t,l,encodeURIComponent(e.data[l])),s=a.text()===a.html()?a.text():null
t!==i&&(a.attr("href",i),s&&a.text(s))}(i=a.attr("rel"))&&a.attr("rel",n.a.replaceTags(i,l,e.data[l])),(s=a.attr("name"))&&a.attr("name",n.a.replaceTags(s,l,e.data[l]))}})),s&&n()(document).triggerHandler("user_content_change")}return this},n.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null},n.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,i={}
if(e.textValues){const t=this
e.textValues.forEach(e=>{const a=t.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
s=n.a.trim(a.text()),"&nbsp;"===a.html()&&(s=""),1===s.length&&160===s.charCodeAt(0)&&(s=""),i[e]=s})}if(e.dataValues)for(t in e.dataValues){var s;(s=this.data(e.dataValues[t]))&&(i[e.dataValues[t]]=s)}if(e.htmlValues)for(t in e.htmlValues){const a=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
s=null,s=a.hasClass("user_content")&&a.data("unenhanced_content_html")?a.data("unenhanced_content_html"):n.a.trim(a.html()),i[e.htmlValues[t]]=s}return i},n.a.fn.getTemplateValue=function(e,t){const i=n.a.extend({},t,{textValues:[e]})
return this.getTemplateData(i)[e]}},SJWK:function(e,t,i){"use strict"
var s=i("ouhR"),n=i.n(s)
i("9Duh"),i("vTtS"),i("ZV2x"),i("VHne")
n.a.widget("ui.droppable",{version:"@VERSION",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect"},_create:function(){var e=this.options,t=e.accept
this.isover=0,this.isout=1,this.accept=n.a.isFunction(t)?t:function(e){return e.is(t)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},n.a.ui.ddmanager.droppables[e.scope]=n.a.ui.ddmanager.droppables[e.scope]||[],n.a.ui.ddmanager.droppables[e.scope].push(this),e.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=n.a.ui.ddmanager.droppables[this.options.scope],t=0;t<e.length;t++)e[t]==this&&e.splice(t,1)
this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,t){"accept"==e&&(this.accept=n.a.isFunction(t)?t:function(e){return e.is(t)}),n.a.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var t=n.a.ui.ddmanager.current
this.options.activeClass&&this.element.addClass(this.options.activeClass),t&&this._trigger("activate",e,this.ui(t))},_deactivate:function(e){var t=n.a.ui.ddmanager.current
this.options.activeClass&&this.element.removeClass(this.options.activeClass),t&&this._trigger("deactivate",e,this.ui(t))},_over:function(e){var t=n.a.ui.ddmanager.current
t&&(t.currentItem||t.element)[0]!=this.element[0]&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(t)))},_out:function(e){var t=n.a.ui.ddmanager.current
t&&(t.currentItem||t.element)[0]!=this.element[0]&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(t)))},_drop:function(e,t){var i=t||n.a.ui.ddmanager.current
if(!i||(i.currentItem||i.element)[0]==this.element[0])return!1
var s=!1
return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each((function(){var e=n.a.data(this,"droppable")
if(e.options.greedy&&!e.options.disabled&&e.options.scope==i.options.scope&&e.accept.call(e.element[0],i.currentItem||i.element)&&n.a.ui.intersect(i,n.a.extend(e,{offset:e.element.offset()}),e.options.tolerance))return s=!0,!1})),!s&&(!!this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(i)),this.element))},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),n.a.ui.intersect=function(e,t,i){if(!t.offset)return!1
var s=(e.positionAbs||e.position.absolute).left,a=s+e.helperProportions.width,o=(e.positionAbs||e.position.absolute).top,l=o+e.helperProportions.height,r=t.offset.left,c=r+t.proportions.width,d=t.offset.top,u=d+t.proportions.height
switch(i){case"fit":return r<=s&&a<=c&&d<=o&&l<=u
case"intersect":return r<s+e.helperProportions.width/2&&a-e.helperProportions.width/2<c&&d<o+e.helperProportions.height/2&&l-e.helperProportions.height/2<u
case"pointer":var p=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,h=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top
return n.a.ui.isOver(h,p,d,r,t.proportions.height,t.proportions.width)
case"touch":return(o>=d&&o<=u||l>=d&&l<=u||o<d&&l>u)&&(s>=r&&s<=c||a>=r&&a<=c||s<r&&a>c)
default:return!1}},n.a.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(e,t){var i=n.a.ui.ddmanager.droppables[e.options.scope]||[],s=t?t.type:null,a=(e.currentItem||e.element).find(":data(droppable)").andSelf()
e:for(var o=0;o<i.length;o++)if(!(i[o].options.disabled||e&&!i[o].accept.call(i[o].element[0],e.currentItem||e.element))){for(var l=0;l<a.length;l++)if(a[l]==i[o].element[0]){i[o].proportions.height=0
continue e}i[o].visible="none"!=i[o].element.css("display"),i[o].visible&&("mousedown"==s&&i[o]._activate.call(i[o],t),i[o].offset=i[o].element.offset(),i[o].proportions={width:i[o].element[0].offsetWidth,height:i[o].element[0].offsetHeight})}},drop:function(e,t){var i=!1
return n.a.each(n.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){this.options&&(!this.options.disabled&&this.visible&&n.a.ui.intersect(e,this,this.options.tolerance)&&(i=this._drop.call(this,t)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=1,this.isover=0,this._deactivate.call(this,t)))})),i},dragStart:function(e,t){e.element.parentsUntil("body").bind("scroll.droppable",(function(){e.options.refreshPositions||n.a.ui.ddmanager.prepareOffsets(e,t)}))},drag:function(e,t){e.options.refreshPositions&&n.a.ui.ddmanager.prepareOffsets(e,t),n.a.each(n.a.ui.ddmanager.droppables[e.options.scope]||[],(function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var i=n.a.ui.intersect(e,this,this.options.tolerance),s=i||1!=this.isover?i&&0==this.isover?"isover":null:"isout"
if(s){var a
if(this.options.greedy){var o=this.element.parents(":data(droppable):eq(0)")
o.length&&((a=n.a.data(o[0],"droppable")).greedyChild="isover"==s?1:0)}a&&"isover"==s&&(a.isover=0,a.isout=1,a._out.call(a,t)),this[s]=1,this["isout"==s?"isover":"isout"]=0,this["isover"==s?"_over":"_out"].call(this,t),a&&"isout"==s&&(a.isout=0,a.isover=1,a._over.call(a,t))}}}))},dragStop:function(e,t){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||n.a.ui.ddmanager.prepareOffsets(e,t)}}},mykf:function(e,t,i){"use strict"
t.a=()=>(ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]).join("; ")},p6Wi:function(e,t,i){"use strict"
var s=i("pQTu"),n=i("m0r6")
Object(n.a)(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
i("jQeR"),i("0sPK")
var a=s.default.scoped("instructure_misc_plugins"),o=i("ouhR"),l=i.n(o),r=i("5Ky4"),c=i("JD5e")
i("jYyc"),i("YGE8"),i("B1vq"),i("s/PJ")
l.a.fn.setOptions=function(e,t){let i=e?"<option value=''>"+Object(r.a)(e)+"</option>":""
return null==t&&(t=[]),t.forEach(e=>{const t=Object(r.a)(e)
i+='<option value="'+t+'">'+t+"</option>"}),this.html(l.a.raw(i))},l.a.fn.ifExists=function(e){return this.length&&e.call(this,this),this},l.a.fn.scrollbarWidth=function(){const e=l()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div"),i=t.innerWidth()
e.css("overflow-y","scroll")
const s=t.innerWidth()
return e.remove(),i-s},l.a.fn.dim=function(e){return this.animate({opacity:.4},e)},l.a.fn.undim=function(e){return this.animate({opacity:1},e)},l.a.fn.confirmDelete=function(e){e=l.a.extend({},l.a.fn.confirmDelete.defaults,e)
const t=this
let i=null,s=!0
e.noMessage=e.noMessage||e.no_message
const n=function(){if(s)if(e.confirmed||(e.confirmed=function(){t.dim()}),e.confirmed.call(t),e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const s=e.prepareData?e.prepareData.call(t,i):{}
s.authenticity_token=Object(c.a)(),l.a.ajaxJSON(e.url,"DELETE",s,i=>{e.success.call(t,i)},(i,s,n,a)=>{e.error&&l.a.isFunction(e.error)?e.error.call(t,i,s,n,a):l.a.ajaxJSON.unhandledXHRs.push(s)})}else e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})}),e.success.call(t)
else e.cancelled&&l.a.isFunction(e.cancelled)&&e.cancelled.call(t)}
if(e.message&&!e.noMessage&&!l.a.skipConfirmations){if(e.dialog){s=!1
const t="object"==typeof e.dialog?e.dialog:{},o=e.url.includes("assignments")?"btn-danger":"btn-primary"
return void(i=l()(e.message).dialog(l.a.extend({},{modal:!0,close:n,buttons:[{text:a.t("#buttons.cancel","Cancel"),click(){l()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:o,click(){s=!0,l()(this).dialog("close")}}]},t)))}s=confirm(e.message)}n()},l.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}},l.a.fn.fragmentChange=function(e){if(e&&!0!==e){const i=(window.location.search||"").replace(/^\?/,"").split("&")
let s=null
for(var t=0;t<i.length;t++){const e=i[t]
e&&0===e.indexOf("hash=")&&(s="#"+e.substring(5))}this.bind("document_fragment_change",e)
const n=this
let a=!1
for(t=0;t<l.a._checkFragments.fragmentList.length;t++){l.a._checkFragments.fragmentList[t].doc[0]==n[0]&&(a=!0)}a||l.a._checkFragments.fragmentList.push({doc:n,fragment:""}),l()(window).bind("hashchange",l.a._checkFragments),setTimeout(()=>{s&&s.length>0?n.triggerHandler("document_fragment_change",s):n&&n[0]&&n[0].location&&n[0].location.hash.length>0&&n.triggerHandler("document_fragment_change",n[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this},l.a._checkFragments=function(){const e=l.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const i=e[t],s=i.doc
s[0].location.hash!=i.fragment&&(s.triggerHandler("document_fragment_change",s[0].location.hash),i.fragment=s[0].location.hash,l.a._checkFragments.fragmentList[t]=i)}},l.a._checkFragments.fragmentList=[],l.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()},l.a.fn.showIf=function(e){return l.a.isFunction(e)?this.each((function(t){l()(this).showIf(e.call(this))})):(e?this.show():this.hide(),this)},l.a.fn.disableIf=function(e){return l.a.isFunction(e)&&(e=e.call(this)),this.prop("disabled",!!e),this},l.a.fn.indicate=function(e){let t
if("remove"==(e=e||{}))return t=this.data("indicator"),void(t&&t.remove())
l()(".indicator_box").remove()
let i=this.offset()
e&&e.offset&&(i=e.offset)
const s=this.width(),n=this.height(),a=(e.container||this).zIndex()
t=l()(document.createElement("div")),t.css({width:s+6,height:n+6,top:i.top-3,left:i.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"}),t.addClass("indicator_box"),t.mouseover((function(){l()(this).stop().fadeOut("fast",(function(){l()(this).remove()}))})),this.data("indicator")&&this.indicate("remove"),this.data("indicator",t),l()("body").append(t),e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){l()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){l()(this).remove()})),e&&e.scroll&&l()("html,body").scrollToVisible(t)},l.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight},l.a.fn.log=function(e){return console.log("%s: %o",e,this),this},l.a.fn.fillWindowWithMe=function(e){const t=l.a.extend({minHeight:400},e),i=l()(this),s=l()("#wrapper"),n=l()("#main"),a=l()("#not_right_side"),o=l()(window),r=l()(this).add(t.alsoResize)
function c(){r.height(0)
const e=o.height()-(s.offset().top+s.outerHeight())+(n.height()-a.height()),c=Math.max(400,e)
r.height(c),l.a.isFunction(t.onResize)&&t.onResize.call(i,c)}return c(),o.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c),this},l.a.fn.autoGrowInput=function(e){return e=l.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e),this.filter("input:text").each((function(){let t=e.minWidth||l()(this).width(),i="",s=l()(this),n=l()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:s.css("fontSize"),fontFamily:s.css("fontFamily"),fontWeight:s.css("fontWeight"),letterSpacing:s.css("letterSpacing"),whiteSpace:"nowrap"})
n.insertAfter(s),l()(this).bind("keyup keydown blur update change",(function(){setTimeout(()=>{if(i===(i=s.val()))return
n.text(i)
const a=n.width(),o=a+e.comfortZone>=t?a+e.comfortZone:t;(o<s.width()&&o>=t||o>t&&o<e.maxWidth)&&s.width(o)})}))})),this}
l.a}}])

//# sourceMappingURL=142-c-da05ca703c.js.map