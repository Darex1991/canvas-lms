(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[624],{Wal3:function(s,i,n){"use strict"
n.r(i),n.d(i,"default",(function(){return L}))
var o=n("An8g"),a=n("q1tI"),t=n("17x9"),r=n.n(t),c=n("/MKj"),e=n("ANjH"),d=n("pQTu"),y=n("m0r6")
Object(y.a)(JSON.parse('{"ar":{"loading_sync_history_9f342cbf":"تحميل سجل المزامنة"},"cy":{"loading_sync_history_9f342cbf":"Wrthi’n llwytho Hanes Cysoni"},"da":{"loading_sync_history_9f342cbf":"Indlæser synkroniseringshistorik"},"da-x-k12":{"loading_sync_history_9f342cbf":"Indlæser synkroniseringshistorik"},"de":{"loading_sync_history_9f342cbf":"Synchronisierungsverlauf laden"},"en-AU":{"loading_sync_history_9f342cbf":"Loading Sync History"},"en-CA":{"loading_sync_history_9f342cbf":"Loading Sync History"},"en-GB":{"loading_sync_history_9f342cbf":"Loading Sync History"},"es":{"loading_sync_history_9f342cbf":"Cargando historial de sincronización"},"fa":{"loading_sync_history_9f342cbf":"در حال بارگذاری تاریخچه همگام‌سازی"},"fi":{"loading_sync_history_9f342cbf":"Ladataan synkronointihistoriaa"},"fr":{"loading_sync_history_9f342cbf":"Chargement de l’historique de synchro"},"fr-CA":{"loading_sync_history_9f342cbf":"Historique de synchronisation en cours de chargement..."},"he":{"loading_sync_history_9f342cbf":"טוען את הסטורית הסינכרון"},"ht":{"loading_sync_history_9f342cbf":"Chajman Istorik Senkwonizasyon"},"is":{"loading_sync_history_9f342cbf":"Sæki samhæfingarsögu"},"it":{"loading_sync_history_9f342cbf":"Caricamento cronologia sincronizzazione"},"ja":{"loading_sync_history_9f342cbf":"同期履歴の読み込み"},"mi":{"loading_sync_history_9f342cbf":"E uta ana i te tukutahi hītori"},"nb":{"loading_sync_history_9f342cbf":"Laster synkroniseringsloggen"},"nb-x-k12":{"loading_sync_history_9f342cbf":"Laster synkroniseringsloggen"},"nl":{"loading_sync_history_9f342cbf":"Synchronisatiegeschiedenis laden"},"nn":{"loading_sync_history_9f342cbf":"Lastar synkroniseringshistorikk"},"pl":{"loading_sync_history_9f342cbf":"Wczytywanie historii synchronizacji"},"pt":{"loading_sync_history_9f342cbf":"A carregar o histórico de sincronização"},"pt-BR":{"loading_sync_history_9f342cbf":"Carregando histórico de sincronização"},"ru":{"loading_sync_history_9f342cbf":"Загрузка истории синхр."},"sl":{"loading_sync_history_9f342cbf":"Nalaganje zgodovine sinhronizacije"},"sv":{"loading_sync_history_9f342cbf":"Läser in synkroniseringshistorik"},"sv-x-k12":{"loading_sync_history_9f342cbf":"Läser in synkroniseringshistorik"},"uk":{"loading_sync_history_9f342cbf":"Завантаження історії синхронізації"},"zh-Hans":{"loading_sync_history_9f342cbf":"正在加载同步历史记录"},"zh-Hant":{"loading_sync_history_9f342cbf":"載入同步歷史"}}'))
n("jQeR"),n("0sPK")
var _=d.default.scoped("blueprint_settingsSyncHistory"),g=n("RxFS"),h=n("VTJ5"),f=n("5JRF"),l=n("Nn+R"),b=n("mwti"),p=(n("13m+"),n("9zgJ"))
r.a.func,r.a.bool
class u extends a.Component{constructor(s){super(s),this.state={associations:this.mapAssociations(s.associations)}}componentDidMount(){this.props.hasLoadedHistory||this.props.loadHistory(),this.props.hasLoadedAssociations||this.props.loadAssociations()}componentWillReceiveProps(s){this.setState({associations:this.mapAssociations(s.associations)})}mapAssociations(s=[]){return s.reduce((s,i)=>Object.assign(s,{[i.id]:i}),{})}renderLoading(){if(this.props.isLoadingHistory||this.props.isLoadingAssociations){const s=_.t("Loading Sync History")
return Object(o.a)("div",{style:{textAlign:"center"}},void 0,Object(o.a)(h.a,{renderTitle:s}),Object(o.a)(f.a,{as:"p"},void 0,s))}return null}render(){const s=this.props.migrations.map(s=>(s.changes.map(s=>(s.exceptions.map(s=>Object.assign(s,this.state.associations[s.course_id]||{})),s)),s))
return Object(o.a)("div",{className:"bcs__history"},void 0,this.renderLoading()||s.map(s=>Object(o.a)(l.a,{migration:s},s.id)))}}u.defaultProps={migrations:[],associations:[]}
const L=Object(c.connect)(s=>{const i=s.selectedChangeLog&&s.changeLogs[s.selectedChangeLog],n=i?{hasLoadedHistory:p.a.hasLoaded(i.status),isLoadingHistory:p.a.isLoading(i.status),migrations:i.data?[i.data]:[]}:Object(g.a)(s,["hasLoadedHistory","isLoadingHistory","migrations"])
return Object.assign(Object(g.a)(s,["hasLoadedAssociations","isLoadingAssociations",["existingAssociations","associations"]]),n)},s=>Object(e.bindActionCreators)(b.b,s))(u)}}])

//# sourceMappingURL=624-c-ce06e9030a.js.map