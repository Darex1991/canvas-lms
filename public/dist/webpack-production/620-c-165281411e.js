(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[620],{ozaW:function(e,t,i){"use strict"
i.r(t)
var n=i("ouhR"),s=i.n(n),a=i("GLiE"),r=i.n(a)
i("32f0")
class d{constructor(e,t,i){this.queueAnalyticEvent=e=>{const t=r.a.clone(this.defaultData)
return t["event:eventType"]=e,t["event:duration"]=this.mediaElement.duration,t["event:currentPoint"]=parseInt(1e3*this.mediaElement.currentTime),t["event:eventTimestamp"]=(new Date).getTime(),this.queueApiCall(this.apiUrl+s.a.param(t))},this.ensureAnalyticSession=()=>{if(this.kaSession=s.a.cookie("kaltura_analytic_tracker",void 0,{path:"/"}),!this.kaSession)return this.kaSession=(Math.random().toString(16)+Math.random().toString(16)+Math.random().toString(16)).replace(/\./g,""),s.a.cookie("kaltura_analytic_tracker",this.kaSession,{path:"/"})},this.generateApiUrl=()=>{let e
return e="http:"===window.location.protocol?"http://".concat(this.pluginSettings.domain):"https://".concat(this.pluginSettings.domain),this.apiUrl="".concat(e,"/api_v3/index.php?")},this.setupApiIframes=e=>{this.qIndex=0,this.iframes=[]
for(let t=0,i=e-1,n=i>=0;n?t<=i:t>=i;n?t++:t--){const e=document.createElement("iframe")
s()(e).addClass("hidden kaltura-analytics"),s()(document.body).append(s()(e))
const i=[],n=((e,t)=>function(){let i
if(i=t.shift())return e.src=i})(e,i)
this.iframes[t]={iframe:e,queue:i,pinger:r.a.throttle(n,4e3)}}return this.iframes},this.queueApiCall=e=>(this.iframes||this.setupApiIframes(this.pluginSettings.parallel_api_calls||3),this.iframes[this.qIndex].queue.push(e),this.iframes[this.qIndex].pinger(),this.qIndex=(this.qIndex+1)%this.iframes.length,this.qIndex),this.addListeners=()=>{this.queueAnalyticEvent(1),this.mediaElement.addEventListener("play",()=>(this.mediaElement.pauseObserved=!1,this.mediaElement.endedObserved=!1,this.mediaElement.endedOnce&&(this.queueAnalyticEvent(mediaId,16),this.mediaElement.endedOnce=!1),this.queueAnalyticEvent(3))),this.mediaElement.addEventListener("canplay",()=>this.queueAnalyticEvent(2)),this.mediaElement.addEventListener("seeked",()=>{if(!this.mediaElement.endedObserved)return this.queueAnalyticEvent(17)}),this.mediaElement.addEventListener("pause",()=>{if(!this.mediaElement.pauseObserved)return this.mediaElement.pauseObserved=!0}),this.mediaElement.addEventListener("progress",()=>{if(!this.mediaElement.endedOnce)return this.queueAnalyticEvent(12)})
let e=0,t=!1
return this.mediaElement.addEventListener("playing",i=>{if(this.mediaElement.listeningToPlaying)return
setInterval(()=>{if(this.mediaElement.paused||isNaN(this.mediaElement.duration)||!this.mediaElement.duration)return
this.mediaElement.isFullScreen!==t&&(t?this.queueAnalyticEvent(15):this.queueAnalyticEvent(14),t=this.mediaElement.isFullScreen)
const i=[.25*this.mediaElement.duration,.5*this.mediaElement.duration,.75*this.mediaElement.duration,.98*this.mediaElement.duration],n=this.mediaElement.currentTime
if(!isNaN(n)&&n>0){let t=i.length-1
for(;t>=0;){const s=i[t]
s>e&&s<=n&&(0===t?this.queueAnalyticEvent(4):1===t?this.queueAnalyticEvent(5):2===t?this.queueAnalyticEvent(6):3===t&&this.queueAnalyticEvent(7)),--t}return e=n}},50)
return this.mediaElement.listeningToPlaying=!0},!1)},this.mediaId=e,this.mediaElement=t,this.pluginSettings=i,this.ensureAnalyticSession(),this.generateApiUrl(),this.defaultData={service:"stats",action:"collect","event:entryId":this.mediaId,"event:sessionId":this.kaSession,"event:isFirstInSession":"false","event:objectType":"KalturaStatsEvent","event:partnerId":this.pluginSettings.partner_id,"event:uiconfId":this.pluginSettings.kcw_ui_conf,"event:queryStringReferrer":window.location.href}}}t.default=function(e,t,i){if(i&&i.do_analytics){const n=new d(e,t,i)
return n.addListeners(),n}}}}])

//# sourceMappingURL=620-c-165281411e.js.map