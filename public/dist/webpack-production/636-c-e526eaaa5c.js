(window.canvasWebpackJsonp=window.canvasWebpackJsonp||[]).push([[636],{"4LsN":function(e,t,n){"use strict"
n.r(t),n.d(t,"default",(function(){return v}))
var i=n("q1tI"),a=n.n(i),s=n("17x9"),l=n("/HcR"),o=n.n(l),r=n("j9Ei"),d=n("FDfA"),p=n("LAfn"),c=n("3kkD"),u=n("kSW8"),h=n("TstA"),g=n("vCsL"),O=n("nHKG"),S=n("fjNZ"),m=n("Ff2n"),b=n("LvDl"),E=n("nmML"),w=n("aakK")
function C(){return a.a.createElement("div",null)}function L(){return a.a.createElement("div",null)}C.propTypes={id:s.string.isRequired,value:s.string.isRequired},L.propTypes={label:s.string.isRequired}
class R extends a.a.Component{constructor(e){super(e),this.backupKey=0,this.handleBlur=e=>{this.setState({highlightedOptionId:null,announcement:null}),this.props.onBlur&&this.props.onBlur(e)},this.handleShowOptions=()=>{this.setState({isShowingOptions:!0})},this.handleHideOptions=e=>{this.setState(e=>({isShowingOptions:!1,highlightedOptionId:null,inputValue:this.getOptionLabelById(e.selectedOptionId)}))},this.handleHighlightOption=(e,{id:t})=>{if("_noOptionsOption"===t)return
const n=this.getOptionLabelById(t),i=this.state.isShowingOptions?"":this.props.translatedStrings.LIST_EXPANDED,a="keydown"===e.type?n:this.state.inputValue
this.setState({highlightedOptionId:t,inputValue:a,announcement:"".concat(n," ").concat(i)})},this.handleSelectOption=(e,{id:t})=>{if("_noOptionsOption"===t)this.setState({isShowingOptions:!1,announcement:this.props.translatedStrings.LIST_COLLAPSED})
else{const n=this.getOptionLabelById(t),i=this.state.selectedOptionId
this.setState({selectedOptionId:t,inputValue:n,isShowingOptions:!1,announcement:o()(this.props.translatedStrings.OPTION_SELECTED,{option:n})})
const a=this.getOptionByFieldValue("id",t)
i!==t&&this.props.onChange(e,a.props.value)}}
const t=this.getOptionByFieldValue("value",e.value)
this.state={inputValue:t?t.props.children:"",isShowingOptions:!1,highlightedOptionId:null,selectedOptionId:t?t.props.id:null,announcement:null}}componentDidUpdate(e){if(this.props.value!==e.value||!Object(b.isEqual)(this.props.children,e.children)){const e=this.getOptionByFieldValue("value",this.props.value)
this.setState({inputValue:e?e.props.children:"",selectedOptionId:e?e.props.id:""})}}render(){const e=this.props,t=e.id,n=e.label,i=(e.value,e.onChange,e.children),s=(e.noOptionsLabel,Object(m.a)(e,["id","label","value","onChange","children","noOptionsLabel"]))
return a.a.createElement(a.a.Fragment,null,a.a.createElement(E.a,Object.assign({id:t,renderLabel:()=>n,assistiveText:this.props.translatedStrings.USE_ARROWS,inputValue:this.state.inputValue,isShowingOptions:this.state.isShowingOptions,onBlur:this.handleBlur,onRequestShowOptions:this.handleShowOptions,onRequestHideOptions:this.handleHideOptions,onRequestHighlightOption:this.handleHighlightOption,onRequestSelectOption:this.handleSelectOption},s),this.renderChildren(i)),a.a.createElement(r.a,{liveRegion:this.props.liveRegion,liveRegionPoliteness:"assertive",screenReaderOnly:!0},this.state.announcement))}renderChildren(e){if(!Array.isArray(e))return Object(w.a)(e,[C])?this.renderOption(e):Object(w.a)(e,[L])?this.renderGroup(e):this.renderNoOptionsOption()
const t=e.map(e=>Array.isArray(e)?this.renderChildren(e):Object(w.a)(e,[C])?this.renderOption(e):Object(w.a)(e,[L])?this.renderGroup(e):null).filter(e=>!!e)
return 0===t.length?this.renderNoOptionsOption():t}renderOption(e){const t=e.props,n=t.id,i=t.children,s=Object(m.a)(t,["id","children"])
return a.a.createElement(E.a.Option,Object.assign({id:n,key:e.key||n||++this.backupKey,isHighlighted:n===this.state.highlightedOptionId,isSelected:n===this.state.selectedOptionId},s),i)}renderGroup(e){const t=e.props,n=t.id,i=t.label,s=Object(m.a)(t,["id","label"]),l=Object(b.compact)(Object(b.castArray)(e.props.children))
return a.a.createElement(E.a.Group,Object.assign({"data-testid":"Group:".concat(i),renderLabel:()=>i,key:e.key||n||++this.backupKey},s),l.map(e=>this.renderOption(e)))}renderNoOptionsOption(){return a.a.createElement(E.a.Option,{id:"_noOptionsOption",isHighlighted:!1,isSelected:!1},this.props.noOptionsLabel)}getOptionLabelById(e){const t=this.getOptionByFieldValue("id",e)
return t?t.props.children:""}getOptionByFieldValue(e,t,n=Object(b.castArray)(this.props.children)){if(!this.props.children)return null
let i=null
for(let a=0;a<n.length;++a){const s=n[a]
if(Array.isArray(s))i=this.getOptionByFieldValue(e,t,s)
else if(Object(w.a)(s,[C]))s.props[e]===t&&(i=s)
else if(Object(w.a)(s,[L])){const n=Object(b.castArray)(s.props.children)
for(let a=0;a<n.length;++a){const s=n[a]
if(s.props[e]===t){i=s
break}}}if(i)break}return i}}R.Option=C,R.Group=L,R.propTypes={id:s.string,label:Object(s.oneOfType)([s.node,s.func]).isRequired,liveRegion:s.func,value:s.string,onChange:s.func.isRequired,children:s.node,noOptionsLabel:s.string,translatedStrings:Object(s.shape)({USE_ARROWS:s.string.isRequired,LIST_COLLAPSED:s.string.isRequired,LIST_EXPANDED:s.string.isRequired,OPTION_SELECTED:s.string.isRequired}),onBlur:s.func},R.defaultProps={noOptionsLabel:"---"}
class f extends i.Component{constructor(...e){super(...e),this.handleLanguageChange=(e,t)=>{this.props.onLanguageSelected(this.props.languages.find(e=>e.id===t))},this.handleDeleteRow=e=>{this.props.onDeleteRow({id:this.props.rowId})}}get isReadonly(){return this.props.selectedFile&&this.props.selectedLanguage}renderChoosing(){return a.a.createElement(h.a,{as:"div",wrap:"wrap",justifyItems:"start",alignItems:"end","data-testid":"CC-CreatorRow-choosing"},this.renderSelectLanguage(),this.renderChooseFile())}renderSelectLanguage(){var e
const t=this.props.uploadMediaTranslations.UploadMediaStrings.CLOSED_CAPTIONS_SELECT_LANGUAGE
return a.a.createElement(h.a.Item,{margin:"0 small small 0"},a.a.createElement(R,{value:null===(e=this.props.selectedLanguage)||void 0===e?void 0:e.id,label:a.a.createElement(O.a,null,t),liveRegion:this.props.liveRegion,onChange:this.handleLanguageChange,placeholder:t,translatedStrings:this.props.uploadMediaTranslations.SelectStrings},this.props.languages.map(e=>a.a.createElement(R.Option,{key:e.id,id:e.id,value:e.id},e.label))))}renderChooseFile(){const e=this.props.uploadMediaTranslations.UploadMediaStrings,t=e.NO_FILE_CHOSEN,n=e.SUPPORTED_FILE_TYPES,i=e.CLOSED_CAPTIONS_CHOOSE_FILE
return a.a.createElement(h.a.Item,{margin:"0 small small 0"},a.a.createElement("input",{id:"attachmentFile",accept:".vtt, .srt",ref:e=>{this.fileInput=e},onChange:e=>{this.props.onFileSelected(e.target.files[0])},style:{display:"none"},type:"file"}),a.a.createElement(c.a,{as:"div"},a.a.createElement(S.a,{as:"div"},n),a.a.createElement(u.a,{margin:"xx-small 0 0 0",id:"attachmentFileButton",onClick:()=>{this.fileInput.click()},ref:e=>{this.attachmentFileButton=e}},this.props.selectedFile?this.props.selectedFile.name:i),!this.props.selectedFile&&a.a.createElement(c.a,{display:"inline-block",margin:"0 0 0 small"},a.a.createElement(S.a,{color:"secondary"},t))))}renderChosen(){const e=this.props.uploadMediaTranslations.UploadMediaStrings.REMOVE_FILE
return a.a.createElement(h.a,{as:"div",wrap:"wrap",justifyItems:"start",alignItems:"end","data-testid":"CC-CreatorRow-chosen"},a.a.createElement(h.a.Item,{margin:"0 0 small 0"},a.a.createElement(c.a,{as:"div",borderWidth:"small",padding:"0 0 0 small",borderRadius:"medium",width:"100%"},a.a.createElement(h.a,{justifyItems:"space-between"},a.a.createElement(h.a.Item,null,a.a.createElement(S.a,{weight:"bold"},this.props.selectedLanguage.label)),a.a.createElement(h.a.Item,{margin:"0 0 0 x-small"},a.a.createElement(d.a,{withBackground:!1,withBorder:!1,onClick:this.handleDeleteRow,screenReaderLabel:o()(e,{lang:this.props.selectedLanguage.label})},a.a.createElement(g.a,null)))))))}render(){return this.isReadonly?this.renderChosen():this.renderChoosing()}}function y(){return String.fromCharCode(97+Math.floor(26*Math.random()))+Math.random().toString(36).substring(2,10)}f.propTypes={rowId:s.string,languages:Object(s.arrayOf)(Object(s.shape)({id:s.string,label:s.string})),liveRegion:s.func,uploadMediaTranslations:Object(s.shape)({UploadMediaStrings:Object(s.objectOf)(s.string),SelectStrings:Object(s.objectOf)(s.string)}),onDeleteRow:s.func,onFileSelected:s.func,onLanguageSelected:s.func,selectedFile:Object(s.shape)({name:s.string.isRequired}),selectedLanguage:Object(s.shape)({id:s.string.isRequired,label:s.string.isRequired})}
class v extends i.Component{constructor(...e){super(...e),this.state={addingNewClosedCaption:!0,newSelectedFile:null,newSelectedLanguage:null,subtitles:[],announcement:null},this.newButtonClick=()=>{this.setState({addingNewClosedCaption:!0,newSelectedFile:null,newSelectedLanguage:null,announcement:null})},this.onFileSelected=e=>{this.state.newSelectedLanguage&&e?this.setState(t=>{const n=t.subtitles.concat([{id:y(),language:t.newSelectedLanguage.id,file:e,isNew:!0}])
return this.props.updateSubtitles(n),{subtitles:n,addingNewClosedCaption:!1,newSelectedFile:null,newSelectedLanguage:null,announcement:o()(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION,{lang:t.newSelectedLanguage.label})}}):this.setState({newSelectedFile:e,announcement:null})},this.onLanguageSelected=e=>{this.state.newSelectedFile?this.setState(t=>{const n=t.subtitles.concat([{id:y(),language:e.id,file:t.newSelectedFile,isNew:!0}])
return this.props.updateSubtitles(n),{subtitles:n,addingNewClosedCaption:!1,newSelectedFile:null,newSelectedLanguage:null,announcement:o()(this.props.uploadMediaTranslations.UploadMediaStrings.ADDED_CAPTION,{lang:e.label})}}):this.setState({newSelectedLanguage:e,announcement:null})},this.onRowDelete=e=>{e.id?this.setState(t=>{const n=this.props.languages.find(t=>t.id===e.id),i=t.subtitles.filter(t=>t.id!==e.id)
return this.props.updateSubtitles(i),{subtitles:i,addingNewClosedCaption:!(i.length>0)||t.addingNewClosedCaption,announcement:o()(this.props.uploadMediaTranslations.UploadMediaStrings.DELETED_CAPTION,{lang:null==n?void 0:n.label})}}):this.setState({addingNewClosedCaption:!0,newSelectedFile:null,newSelectedLanguage:null,announcement:null})}}componentDidUpdate(){this._addButtonRef&&window.setTimeout(()=>{this._addButtonRef&&this._addButtonRef.focus()},100)}render(){const e=this.props.uploadMediaTranslations.UploadMediaStrings.ADD_NEW_CAPTION_OR_SUBTITLE
return a.a.createElement(c.a,{display:"inline-block","data-testid":"ClosedCaptionPanel"},this.state.announcement&&a.a.createElement(r.a,{liveRegion:this.props.liveRegion,screenReaderOnly:!0,isLiveRegionAtomic:!0,liveRegionPoliteness:"assertive"},this.state.announcement),a.a.createElement(c.a,{display:"inline-block"},this.state.subtitles.map(e=>a.a.createElement(f,{key:e.id,liveRegion:this.props.liveRegion,uploadMediaTranslations:this.props.uploadMediaTranslations,onDeleteRow:this.onRowDelete,onLanguageSelected:this.onLanguageSelected,onFileSelected:this.onFileSelected,languages:this.props.languages,selectedLanguage:this.props.languages.find(t=>t.id===e.language),selectedFile:e.file,rowId:e.id}))),this.state.addingNewClosedCaption?a.a.createElement(c.a,{as:"div"},a.a.createElement(f,{liveRegion:this.props.liveRegion,uploadMediaTranslations:this.props.uploadMediaTranslations,onDeleteRow:this.onRowDelete,onLanguageSelected:this.onLanguageSelected,onFileSelected:this.onFileSelected,languages:this.props.languages,selectedLanguage:this.state.newSelectedLanguage,selectedFile:this.state.newSelectedFile})):a.a.createElement("div",{style:{position:"relative",textAlign:"center"}},a.a.createElement(d.a,{elementRef:e=>{this._addButtonRef=e},shape:"circle",color:"primary",screenReaderLabel:e,onClick:this.newButtonClick,margin:"x-small auto"},a.a.createElement(p.a,null))))}}v.propTypes={liveRegion:s.func.isRequired,updateSubtitles:s.func.isRequired,uploadMediaTranslations:Object(s.shape)({UploadMediaStrings:Object(s.objectOf)(s.string),SelectStrings:Object(s.objectOf)(s.string)}).isRequired,languages:Object(s.arrayOf)(Object(s.shape)({id:s.string,label:s.string})).isRequired}}}])

//# sourceMappingURL=636-c-e526eaaa5c.js.map