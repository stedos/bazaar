(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],d=0,h=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9d69ec97"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(e);var c=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}n[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bazaar/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"06e3":function(e,t,a){"use strict";var r=a("6ae7"),n=a.n(r);n.a},"16f7":function(e,t,a){"use strict";var r=a("a26b"),n=a.n(r);n.a},1896:function(e,t,a){"use strict";var r=a("c4c8"),n=a.n(r);n.a},"268a":function(e,t,a){"use strict";var r=a("b49b"),n=a.n(r);n.a},"35c0":function(e,t,a){},"49c9":function(e,t,a){"use strict";var r=a("35c0"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Header"),a("v-content",[a("router-view")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app-bar",{staticClass:"header",attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase",on:{click:function(t){e.$router.push("/").catch((function(e){}))}}},[a("span",{attrs:{color:"teal"}},[e._v("Bazaar")])]),a("v-spacer"),e.$store.state.selected?[a("Export",{attrs:{id:e.$store.state.selected,showText:!0}}),a("CreateBill")]:[a("Import",{attrs:{showText:!0}}),a("CreateBazaar")]],2)},i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"import"},[a("input",{ref:"upload",staticClass:"upload",attrs:{type:"file",accept:"application/json"},on:{change:e.loadTextFromFile}}),a("v-btn",{attrs:{text:e.showText,icon:!e.showText},on:{click:function(t){return e.$refs.upload.click()}}},[e.showText?a("span",{staticClass:"mr-2 d-none d-sm-flex"},[e._v("Importieren")]):e._e(),e.showText?a("v-icon",[e._v("mdi-upload")]):a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-icon",e._g({},r),[e._v("mdi-upload")])]}}])},[a("span",[e._v("Importieren")])])],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:e.dialog.show,callback:function(t){e.$set(e.dialog,"show",t)},expression:"dialog.show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("\n        Importieren\n        "),e.dialog.error?[e._v(" fehlgeschlagen")]:[e._v(" erfolgreich")]],2),e.dialog.error?a("v-card-text",[e._v("Leider ist ein Fehler aufgetreten. Bitte laden Sie die Datei erneut herunter und versuchen Sie diese einzufügen.")]):a("v-card-text",[e._v("Rechnungen '"+e._s(e.dialog.name)+"' wurden erfolgreich mit der ID "+e._s(e.dialog.id)+" importiert.")]),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{text:""},on:{click:function(t){return e.closeDialog()}}},[e._v("Okay!")])],1)],1)],1)],1)},c=[];const d=()=>({show:!1,error:!1,id:0,name:""});var u={name:"Import",props:{showText:Boolean},data:()=>({dialog:d()}),methods:{loadTextFromFile(e){this.dialog.show=!0;const t=e.target.files[0],a=new FileReader;a.onload=e=>{try{const t=JSON.parse(e.target.result),a=t.id;let r=1;while(this.$store.getters.hasBazaar(t.id))t.id=`${a} (${r++})`;this.dialog.id=t.id,this.dialog.name=t.name,this.$store.commit("createBazaar",t)}catch(t){console.log("error",t),this.dialog.error=!0}this.$refs.upload.value=""},a.readAsText(t)},closeDialog(){this.dialog=d()}}},h=u,m=(a("06e3"),a("2877")),p=a("6544"),v=a.n(p),f=a("8336"),b=a("b0af"),g=a("99d9"),_=a("169a"),x=a("132d"),z=a("3a2f"),k=Object(m["a"])(h,l,c,!1,null,"c2e42e9c",null),w=k.exports;v()(k,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:_["a"],VIcon:x["a"],VTooltip:z["a"]});var B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{attrs:{text:e.showText,icon:!e.showText,href:e.href,download:"Rechnung-"+e.id+".json"},on:{click:function(e){e.stopPropagation()}}},[e.showText?a("span",{staticClass:"mr-2 d-none d-sm-flex"},[e._v("Download")]):e._e(),e.showText?a("v-icon",[e._v("mdi-download")]):a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-icon",e._g({},r),[e._v("mdi-download")])]}}])},[e.showText?e._e():a("span",[e._v("Download")])])],1)},y=[],$={name:"Export",props:{showText:Boolean,id:String},data:()=>({}),computed:{href(){const e=new Blob([JSON.stringify(this.$store.state.bazaars[this.id])],{type:"application/json"});return URL.createObjectURL(e)}},methods:{}},C=$,V=Object(m["a"])(C,B,y,!1,null,"6f7c00e9",null),T=V.exports;v()(V,{VBtn:f["a"],VIcon:x["a"],VTooltip:z["a"]});var E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BazaarEditor",{attrs:{headline:"Basar erstellen"},on:{finish:e.create}},[a("v-btn",{attrs:{color:"teal"}},[a("span",{staticClass:"d-none d-sm-flex"},[e._v("Neuen Basar erstellen")]),a("v-icon",{attrs:{right:e.$vuetify.breakpoint.smAndUp}},[e._v("mdi-shopping")])],1)],1)},I=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("span",e._g({on:{click:function(e){e.stopPropagation()}}},r),[e._t("default")],2)]}}],null,!0),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.headline))])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{ref:"name",attrs:{label:"Name",required:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.finish(t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)],1)],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Abbrechen")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.finish}},[e._v("Fertig")])],1)],1)],1)},j=[],S={name:"BazaarEditor",props:{headline:String,name:String},data(){return{dialog:!1,value:""}},watch:{dialog(){this.dialog&&(this.value=this.name,setTimeout(()=>this.$refs.name.focus(),350))}},methods:{finish(){this.dialog=!1,this.$emit("finish",this.value)}}},P=S,A=a("62ad"),D=a("a523"),R=a("0fd9"),F=a("8654"),M=Object(m["a"])(P,O,j,!1,null,null,null),N=M.exports;v()(M,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:A["a"],VContainer:D["a"],VDialog:_["a"],VRow:R["a"],VTextField:F["a"]});var L={name:"CreateBazaar",components:{BazaarEditor:N},methods:{create(e){this.$store.dispatch("create",e).then(({id:e})=>{this.$router.push(`/bazaar/${e}`)})}}},U=L,q=Object(m["a"])(U,E,I,!1,null,null,null),J=q.exports;v()(q,{VBtn:f["a"],VIcon:x["a"]});var H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{staticClass:"teal",on:{click:function(t){return e.$store.commit("addBill")}}},[a("span",{staticClass:"mr-2 d-none d-sm-flex"},[e._v("Neue Rechnung")]),a("v-icon",{attrs:{right:e.$vuetify.breakpoint.smAndUp}},[e._v("mdi-receipt")])],1)},K=[],Z={name:"CreateBill"},G=Z,Q=Object(m["a"])(G,H,K,!1,null,null,null),W=Q.exports;v()(Q,{VBtn:f["a"],VIcon:x["a"]});var X={name:"Header",components:{Import:w,Export:T,CreateBazaar:J,CreateBill:W},data:()=>({}),computed:{},methods:{}},Y=X,ee=(a("49c9"),a("16f7"),a("40dc")),te=a("2fa4"),ae=a("2a7f"),re=Object(m["a"])(Y,o,i,!1,null,"49ba7a66",null),ne=re.exports;v()(re,{VAppBar:ee["a"],VSpacer:te["a"],VToolbarTitle:ae["a"]});var se={name:"App",components:{Header:ne},data:()=>({}),methods:{}},oe=se,ie=(a("7c55"),a("7496")),le=a("a75b"),ce=Object(m["a"])(oe,n,s,!1,null,null,null),de=ce.exports;v()(ce,{VApp:ie["a"],VContent:le["a"]});var ue=a("8c4f"),he=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"home"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("Bazaars")],1)],1)],1)},me=[],pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("h1",[e._v("Basars")]),a("v-simple-table",[a("thead",[a("tr",[a("th",[e._v("Name")]),a("th",[e._v("Date")]),a("th",[e._v("ID")]),a("th",[e._v("Aktionen")])])]),a("tbody",e._l(e.$store.getters.bazaarsAsList,(function(t){return a("tr",{key:t.id,on:{click:function(a){return a.stopPropagation(),e.$router.push("/bazaar/"+t.id)}}},[a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.date))]),a("td",[e._v(e._s(t.id))]),a("td",[a("EditBazaar",{attrs:{bazaar:t}}),a("Merge",{attrs:{preselection:t.id}}),a("Export",{attrs:{id:t.id}}),a("Delete",{attrs:{headline:"Basar '"+t.name+"' [ID: "+t.id+"] wirklich löschen?"},on:{delete:function(a){return e.deleteEntry(t.id)}}})],1)])})),0)])],1)},ve=[],fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{text:e.showText,icon:!e.showText},on:{click:function(e){e.stopPropagation()}}},r),[e.showText?a("span",{staticClass:"mr-2"},[e._v("Löschen")]):e._e(),e.showText?a("v-icon",[e._v("mdi-delete")]):a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-icon",e._g({},r),[e._v("mdi-delete")])]}}],null,!0)},[e.showText?e._e():a("span",[e._v("Löschen")])])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v(e._s(e.headline))]),a("v-card-text",[e._v("Dies kann nicht Rückgängig gemacht werden.")]),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1,e.$emit("keep")}}},[e._v("Behalten!")]),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog=!1,e.$emit("delete"),e.$emit}}},[e._v("Löschen!")])],1)],1)],1)},be=[],ge={name:"ImportExport",components:{},props:{showText:Boolean,headline:String},data(){return{dialog:!1}},computed:{},methods:{}},_e=ge,xe=Object(m["a"])(_e,fe,be,!1,null,"4f9f2517",null),ze=xe.exports;v()(xe,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VDialog:_["a"],VIcon:x["a"],VTooltip:z["a"]});var ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{icon:""},on:{click:function(e){e.stopPropagation()}}},r),[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-icon",e._g({},r),[e._v("mdi-merge")])]}}],null,!0)},[a("span",[e._v("Zusammenführen")])])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Basar erstellen")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{ref:"name",attrs:{label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:e.bazaars,"menu-props":"auto",label:"Basar 1"},model:{value:e.selected1,callback:function(t){e.selected1=t},expression:"selected1"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:e.bazaars,"menu-props":"auto",label:"Basar 2"},model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}})],1)],1)],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Schließen")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.create}},[e._v("Erstellen")])],1)],1)],1)},we=[],Be={name:"Merge",props:{preselection:String},data(){return{dialog:!1,bazaars:[],name:"",selected1:null,selected2:null}},watch:{dialog(){this.dialog&&(this.selected1=this.preselection,this.bazaars=this.$store.getters.bazaarsAsList.map(e=>({text:`${e.name} - ${e.date} (${e.id})`,value:e.id})),setTimeout(()=>this.$refs.name.focus(),250))}},methods:{create(){this.$store.dispatch("merge",{name:this.name,bazaars:[this.selected1,this.selected2]}),this.dialog=!1}}},ye=Be,$e=a("b974"),Ce=Object(m["a"])(ye,ke,we,!1,null,null,null),Ve=Ce.exports;v()(Ce,{VBtn:f["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:A["a"],VContainer:D["a"],VDialog:_["a"],VIcon:x["a"],VRow:R["a"],VSelect:$e["a"],VTextField:F["a"],VTooltip:z["a"]});var Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("BazaarEditor",{attrs:{headline:"Basar verändern",name:e.bazaar.name},on:{finish:e.rename}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",[e._v("mdi-square-edit-outline")])],1)],1)},Ee=[],Ie={name:"EditBazaar",components:{BazaarEditor:N},props:{bazaar:Object},methods:{rename(e){this.$store.commit("editBazaar",{bazaarId:this.bazaar.id,name:e})}}},Oe=Ie,je=Object(m["a"])(Oe,Te,Ee,!1,null,null,null),Se=je.exports;v()(je,{VBtn:f["a"],VIcon:x["a"]});var Pe={name:"Bazaars",components:{Delete:ze,Export:T,Merge:Ve,EditBazaar:Se},props:{},data(){return{}},mounted(){},computed:{},methods:{deleteEntry(e){this.$store.commit("deleteBazaar",e)}}},Ae=Pe,De=(a("1896"),a("1f4f")),Re=Object(m["a"])(Ae,pe,ve,!1,null,"4876a15a",null),Fe=Re.exports;v()(Re,{VCard:b["a"],VSimpleTable:De["a"]});var Me={name:"home",components:{Bazaars:Fe},mounted(){this.$store.commit("selectBazaar",null)},methods:{}},Ne=Me,Le=Object(m["a"])(Ne,he,me,!1,null,null,null),Ue=Le.exports;v()(Le,{VCol:A["a"],VContainer:D["a"],VRow:R["a"]});var qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.$store.state.selected?a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("h1",[e._v(e._s(e.bazaar.name))])]),a("v-col",{staticClass:"name-info",attrs:{cols:"4"}},[a("h4",[e._v(e._s(e.bazaar.date))]),a("h5",[e._v("ID: "+e._s(e.bazaar.id))])])],1),a("v-row",[a("v-col",{staticClass:"bills",attrs:{cols:"12",sm:"6"}},e._l(e.bills,(function(t,r){return a("Bill",{key:r,attrs:{id:t,highlighted:r===e.bills.length-1||e.selected===t},on:{finish:e.addBill,select:function(t){return e.selected=t}}})})),1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("Customers")],1)],1)],1):e._e()},Je=[],He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"bill",style:e.highlighted?"":"opacity: 0.5;",attrs:{outlined:e.highlighted,raised:e.highlighted,id:e.refId},on:{click:function(t){return e.$refs.customer.focus()}}},[a("div",{staticClass:"chart-naming"},[a("h3",[e._v("Rechnung "+e._s(e.id))]),a("span",[a("Delete",{attrs:{headline:"Rechnung '"+e.id+"' wirklich löschen?"},on:{delete:e.deleteBill}}),a("Print",{attrs:{"ref-id":e.refId}})],1)]),a("v-simple-table",[a("thead",[a("tr",[a("th",[e._v("Kundenr.")]),a("th",[e._v("Preis")]),a("th",[e._v("Entfernen")])])]),a("tbody",[e._l(e.entries,(function(t,r){return a("tr",{key:r},[a("td",[e._v(e._s(t.customer))]),a("td",[e._v(e._s(t.price.toFixed(2))+" €")]),a("td",{on:{click:function(t){return e.deleteEntry(r)}}},[a("v-icon",[e._v("mdi-close-circle")])],1)])})),a("tr",[a("td",[e._v("SUMME")]),a("td",{attrs:{colspan:"2"}},[e._v(e._s(e.sum.toFixed(2))+" €")])]),a("tr",[a("td",[a("v-text-field",{ref:"customer",attrs:{name:"customer",label:"Kundenr."},on:{focus:function(t){return e.$emit("select",e.id)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$refs.price.focus()},click:function(e){e.stopPropagation()}},model:{value:e.current.customer,callback:function(t){e.$set(e.current,"customer",t)},expression:"current.customer"}})],1),a("td",[a("v-text-field",{ref:"price",attrs:{name:"price",label:"Preis",type:"number"},on:{focus:function(t){return e.$emit("select",e.id)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addEntry(t)},click:function(e){e.stopPropagation()}},model:{value:e.current.price,callback:function(t){e.$set(e.current,"price",e._n(t))},expression:"current.price"}})],1),a("td",[a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.highlighted,expression:"highlighted"}],on:{click:function(t){e.showInfo=!e.showInfo}}},[e._v("mdi-information")])],1)])],2)]),e.highlighted&&e.showInfo?a("span",{staticClass:"bill__info"},[e._v("Doppelt Enter ohne Eingabe einer Kundennr. und eines Preises schließt die aktuelle Rechnung ab und erstellt automatisch eine neue Rechnung.")]):e._e()],1)},Ke=[],Ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{attrs:{icon:""},on:{click:function(t){return t.stopPropagation(),e.$htmlToPaper(e.refId)}}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-icon",e._g({},r),[e._v("mdi-printer")])]}}])},[a("span",[e._v("Drucken")])])],1)},Ge=[],Qe={name:"Print",props:{refId:String}},We=Qe,Xe=Object(m["a"])(We,Ze,Ge,!1,null,"7b7e3d41",null),Ye=Xe.exports;v()(Xe,{VBtn:f["a"],VIcon:x["a"],VTooltip:z["a"]});const et=()=>({customer:"",price:null});var tt={name:"Bill",components:{Delete:ze,Print:Ye},props:{id:String,highlighted:Boolean},data(){return{current:et(),showInfo:!1}},computed:{entries(){return this.$store.getters.getBillById(this.id)},sum(){return this.entries.reduce((e,t)=>e+t.price,0)},refId(){return`bill-${this.id}`},hasCustomer(){return!!this.current.customer.length},hasPrice(){return this.current.price&&this.current.price>=0}},mounted(){this.$refs.customer.focus()},methods:{addEntry(){this.hasCustomer&&this.hasPrice?(this.$store.commit("addEntryToBill",{billId:this.id,...this.current}),this.current=et(),this.$refs.customer.focus()):this.hasCustomer||this.hasPrice?this.hasCustomer||this.$refs.customer.focus():this.$emit("finish")},deleteEntry(e){this.$store.commit("deleteEntryFromBill",{billId:this.id,entryId:e})},deleteBill(){this.$store.commit("deleteBill",{billId:this.id})}}},at=tt,rt=(a("5a42"),Object(m["a"])(at,He,Ke,!1,null,"4e11ebb2",null)),nt=rt.exports;v()(rt,{VCard:b["a"],VIcon:x["a"],VSimpleTable:De["a"],VTextField:F["a"]});var st=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"customers",attrs:{outlined:"",raised:"",id:"invoice"}},[a("div",{staticClass:"chart-naming"},[a("h2",[e._v("Abrechnung")]),a("span",[a("Print",{attrs:{"ref-id":"invoice"}})],1)]),a("v-simple-table",[a("thead",[a("tr",[a("th",[e._v("Nr.")]),a("th",[e._v("Artikel")]),a("th",[e._v("Brutto")]),a("th",[e._v("Abzug "+e._s(100*e.reverseTax)+"%")]),a("th",[e._v("Netto")])])]),a("tbody",[e._l(e.customers,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.amount))]),a("td",[e._v(e._s(e.clean(t.price))+" €")]),a("td",[e._v(e._s(e.clean(t.price,e.reverseTax))+" €")]),a("td",[e._v(e._s(e.clean(t.price,e.tax))+" €")])])})),a("tr",[a("td",{attrs:{colspan:"2"}},[e._v("SUMME")]),a("td",[e._v(e._s(e.clean(e.sum))+" €")]),a("td",[e._v(e._s(e.clean(e.sum,e.reverseTax))+" €")]),a("td",[e._v(e._s(e.clean(e.sum,e.tax))+" €")])])],2)])],1)},ot=[],it={name:"Customers",components:{Print:Ye},props:{tax:{type:Number,default:.9}},computed:{reverseTax(){return-(100-100*this.tax)/100},customers(){return this.$store.getters.customers},sum(){return this.$store.getters.sum}},methods:{clean(e,t=1){return(e*t).toFixed(2)}}},lt=it,ct=(a("cc54"),Object(m["a"])(lt,st,ot,!1,null,"71d5e604",null)),dt=ct.exports;v()(ct,{VCard:b["a"],VSimpleTable:De["a"]});var ut={name:"Bazaar",components:{Bill:nt,Customers:dt},data(){return{selected:null}},computed:{bazaar(){return this.$store.getters.bazaar},bills(){return this.$store.getters.billIds}},mounted(){this.$store.commit("selectBazaar",this.$route.params.id),this.bills.length||this.addBill(this.$route.params.id)},methods:{addBill(){this.$store.commit("addBill")}}},ht=ut,mt=(a("268a"),Object(m["a"])(ht,qe,Je,!1,null,"1f7fbca9",null)),pt=mt.exports;v()(mt,{VCol:A["a"],VContainer:D["a"],VRow:R["a"]});var vt=a("2f62"),ft=a("bfa9"),bt=a("a002"),gt=a.n(bt);const _t={id:""+Math.floor(Math.random()*Math.pow(10,6)),date:(new Date).toUTCString("de"),lastBillId:0,bills:{},name:""};r["a"].use(vt["a"]);const xt=new ft["a"]({storage:gt.a,reducer:e=>({bazaars:e.bazaars}),asyncStorage:!0}),zt=new vt["a"].Store({state:{bazaars:{},selected:null},getters:{bazaar:e=>e.bazaars[e.selected]||{bills:{}},hasBazaar:e=>t=>!!e.bazaars[t],bazaarsAsList:e=>Object.values(e.bazaars).sort((e,t)=>Date.parse(t.date)-Date.parse(e.date)),billIds:(e,t)=>Object.keys(t.bazaar.bills),getBillById:(e,t)=>e=>t.bazaar.bills[e],sum:(e,t)=>Object.values(t.bazaar.bills).flat().reduce((e,t)=>e+t.price,0),customers:(e,t)=>{const a=Object.values(t.bazaar.bills).flat().reduce((e,t)=>({...e,[t.customer]:e[t.customer]?{price:e[t.customer].price+t.price,amount:++e[t.customer].amount}:{price:t.price,amount:1}}),{});return Object.keys(a).map(e=>({id:e,price:a[e].price,amount:a[e].amount})).sort((e,t)=>e.id>t.id)}},mutations:{RESTORE_MUTATION:xt.RESTORE_MUTATION,createBazaar(e,t){e.bazaars={...e.bazaars,[t.id]:t}},editBazaar(e,{bazaarId:t,name:a}){const r=e.bazaars[t];r.name=a,e.bazaars={...e.bazaars,[t]:r}},deleteBazaar(e,t){r["a"].delete(e.bazaars,t)},selectBazaar(e,t){e.selected=t},addBill(e,t){const a=e.bazaars[t||e.selected];a.bills={...a.bills,[++a.lastBillId]:[]},e.bazaars={...e.bazaars,[t||e.selected]:a}},addEntryToBill(e,{billId:t,customer:a,price:r}){const n=e.bazaars[e.selected];n.bills={...n.bills,[t]:[...n.bills[t],{customer:a,price:r}]},e.bazaars={...e.bazaars,[e.selected]:n}},deleteEntryFromBill(e,{billId:t,entryId:a}){const r=e.bazaars[e.selected];r.bills={...r.bills,[t]:r.bills[t].filter((e,t)=>t!==a)},e.bazaars={...e.bazaars,[e.selected]:r}},deleteBill(e,{billId:t}){const a=e.bazaars[e.selected];delete a.bills[t],e.bazaars={...e.bazaars,[e.selected]:a}},addBillsToBazaar(e,{id:t,bills:a,idAddon:r}){const n=e.bazaars[t],s=Object.keys(a).reduce((e,t)=>({...e,[`${t} (${r})`]:a[t]}),{});n.bills={...s,...n.bills},e.bazaars={...e.bazaars,[t]:n}}},actions:{create({commit:e},t){const a={..._t,name:t};return e("createBazaar",a),a},merge({state:e,dispatch:t,commit:a},{name:r,bazaars:n}){t("create",r).then(t=>{n.forEach(r=>{a("addBillsToBazaar",{id:t.id,idAddon:r,bills:e.bazaars[r].bills})})})}},plugins:[xt.plugin]});var kt=zt;r["a"].use(ue["a"]);const wt=new ue["a"]({routes:[{path:"/",name:"home",component:Ue},{path:"/bazaar/:id",name:"Bazaar",component:pt},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))}]});wt.beforeEach(async(e,t,a)=>{await kt.restored,a()});var Bt=wt,yt=a("f309"),$t=a("0fe0"),Ct=a.n($t);r["a"].use(yt["a"]);var Vt=new yt["a"]({lang:{locales:{de:Ct.a},current:"de"},icons:{iconfont:"mdi"},theme:{dark:!0}}),Tt=a("9483");Object(Tt["a"])("/bazaar/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});a("d5e8"),a("5363");var Et=a("b676"),It=a.n(Et);r["a"].use(It.a),r["a"].config.productionTip=!1,new r["a"]({router:Bt,store:kt,vuetify:Vt,render:e=>e(de)}).$mount("#app")},"5a42":function(e,t,a){"use strict";var r=a("f2ef"),n=a.n(r);n.a},"6ae7":function(e,t,a){},"7c55":function(e,t,a){"use strict";var r=a("c68b"),n=a.n(r);n.a},a26b:function(e,t,a){},b49b:function(e,t,a){},c4c8:function(e,t,a){},c68b:function(e,t,a){},cc54:function(e,t,a){"use strict";var r=a("d337"),n=a.n(r);n.a},d337:function(e,t,a){},f2ef:function(e,t,a){}});
//# sourceMappingURL=app.c0591376.js.map