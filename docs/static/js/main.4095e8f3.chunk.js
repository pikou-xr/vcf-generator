(this["webpackJsonpxr-vcf-generator"]=this["webpackJsonpxr-vcf-generator"]||[]).push([[0],{71:function(e,n,t){"use strict";t.r(n);var r=t(39),c=t(0),o=t.n(c),a=t(15),i=t.n(a),l=t(5),s=t(8),u={colors:{main:"white",tableContent:"black",title2:"#222",highlight:"green",background:"#222",background2:"#555",backgroundButton:"#777",error:"#ffa0a0",scroll:"green",scrollBg:"black"},fontSizes:{desktop:16,mobile:12},dimensions:{thresholdMobile:720},fonts:{titles:"fucxed",default:"Crimson"}},d=t(2),b=function(e){var n=e.title,t=e.children,r=e.className,c=void 0===r?"":r;return Object(d.jsxs)("div",{className:c,children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)(j,{children:t})]})},j=l.b.div.withConfig({displayName:"AppPanel__Container",componentId:"sc-11rvjy-0"})([""]),f=Object(l.b)(o.a.memo(b)).withConfig({displayName:"AppPanel",componentId:"sc-11rvjy-1"})(["padding:0.5em;margin:0.5em;background-color:",";h2{margin-bottom:0.5em;}"],u.colors.background2),p=t(25),m=t(26),h=t(28),O=t(29),v=t(75),g=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return t}(Object(O.a)(Error)),x=t(12),w=t(42),y=t(43),N=t.n(y),k=["t\xe9l\xe9phone","telephone","phone","phone number","num\xe9ro de t\xe9l\xe9phone"],C=["pseudo"],D=["firstName","workPhone","email","note"],_=["firstName","workPhone"],I={workPhone:"t\xe9l\xe9phone",firstName:"nom"},P=function(e){var n=k.filter((function(n){return e.includes(n)}))[0];return{firstName:C.filter((function(n){return e.includes(n)}))[0]||e[0]||null,workPhone:n||e[1]||null,email:null,note:null}},F=function(e){return e.rawData.data},T=function(e){if(!e.rawData.data)throw new Error("expected data not null");return e.rawData.data},A=function(e){return e.rawData.errors},S=function(e){var n=T(e);return n.length?Object.keys(n[0]):[]},E=function(e){return e.vcfFieldMapping},z=function(e){var n=T(e),t=E(e),r=M(e),c=[],o=[];return n.forEach((function(e){var n={},a=null;D.forEach((function(c){var o=t[c];if(o){var i=e[o];if("firstName"===c&&(i="".concat(r).concat(i)),"workPhone"===c)try{i=function(e){var n=Object(v.a)(e,"FR");if(n&&n.isValid())return n.number;throw new g('Invalid phone number "'.concat(e,'"'))}(i)}catch(l){if(!(l instanceof g))throw l;a=l}n[c]=i}})),a?o.push(a):c.push(n)})),{vcfContacts:c,errors:o}},M=function(e){return e.outputOptions.prefix},B="contacts.vcf",L=function(e){var n=e.className,t=void 0===n?"":n,r=Object(s.c)(z).vcfContacts;return Object(d.jsx)("div",{className:t,children:Object(d.jsxs)("button",{onClick:function(){var e=function(e){var n,t=[],r=Object(w.a)(e);try{var c=function(){var e=n.value,r=N()();Object.entries(e).forEach((function(e){var n=Object(x.a)(e,2),t=n[0],c=n[1];return r[t]=c})),t.push(r.getFormattedString())};for(r.s();!(n=r.n()).done;)c()}catch(o){r.e(o)}finally{r.f()}return t.join("\n")}(r);!function(e,n,t){var r=new Blob([n],{type:t});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(r,e);else{var c=window.document.createElement("a");c.href=window.URL.createObjectURL(r),c.download=e,document.body.appendChild(c),c.click(),document.body.removeChild(c)}}(B,e,"text/vcard")},children:['T\xe9l\xe9charger "',B,'"']})})},V=Object(l.b)(o.a.memo(L)).withConfig({displayName:"DownloadVcfFile",componentId:"sc-1j4z49f-0"})([""]),R=t(9),q=t(48),U="RAW_DATA_LOAD_LOCAL",G="RAW_DATA_LOAD_COMPLETE",J=function(e){return{type:G,payload:e}},W={data:null,errors:[]};var X=function(e){var n=e.className,t=void 0===n?"":n,r=Object(s.b)(),o=Object(c.useCallback)((function(e){var n=Object(x.a)(e,1)[0];r(function(e){return{type:U,payload:e}}(n))}),[r]),a=Object(q.a)({onDrop:o}),i=a.getRootProps,l=a.getInputProps,u=a.isDragActive;return Object(d.jsxs)("div",Object(R.a)(Object(R.a)({},i()),{},{className:t,children:[Object(d.jsx)("input",Object(R.a)(Object(R.a)({},l()),{},{multiple:!1})),u?Object(d.jsx)("p",{children:"Drop le fichier ici ..."}):Object(d.jsx)("p",{children:"Drag n drop un fichier CSV ici, ou clique pour s\xe9lectionner"})]}))},H=Object(l.b)(o.a.memo(X)).withConfig({displayName:"DragDropFile",componentId:"sc-1hmw77n-0"})([""]),K="OUTPUT_OPTIONS_SET_PREFIX",Q={prefix:"XR ACTION "};var Y=function(e){var n=e.className,t=void 0===n?"":n,r=Object(s.b)(),c=Object(s.c)(M);return Object(d.jsxs)("div",{className:t,children:[Object(d.jsx)("label",{htmlFor:"outputOptionsPrefix",children:"Prefix"}),Object(d.jsx)("input",{type:"text",name:"outputOptionsPrefix",id:"outputOptionsPrefix",value:c,onChange:function(e){return r(function(e){return{type:K,payload:e}}(e.currentTarget.value))}})]})},Z=Object(l.b)(o.a.memo(Y)).withConfig({displayName:"OutputOptions",componentId:"sc-5mro5f-0"})(["input{margin-left:1em;}"]),$=function(e){var n=e.errors,t=e.className,r=void 0===t?"":t,c=null;return n.length&&(c=Object(d.jsxs)("div",{children:["Il y a ",n.length," erreur(s) dans le fichier :"]})),Object(d.jsxs)("div",{className:r,children:[c,n.map((function(e,n){return Object(d.jsx)("div",{children:e.message},n)}))]})},ee=Object(l.b)(o.a.memo($)).withConfig({displayName:"DataTableErrors",componentId:"sc-1plj3q4-0"})(["& > div{color:",";}"],u.colors.error),ne=function(e){var n=e.headers,t=e.className,r=void 0===t?"":t;return Object(d.jsx)("tr",{className:r,children:n.map((function(e){return Object(d.jsx)("th",{children:e},e)}))})},te=Object(l.b)(o.a.memo(ne)).withConfig({displayName:"DataTableHeaders",componentId:"sc-1r4wjmp-0"})(["th{text-align:left;}"]),re=function(e){var n=e.datum,t=e.headers,r=e.className,c=void 0===r?"":r;return Object(d.jsx)("tr",{className:c,children:t.map((function(e){return Object(d.jsx)("td",{children:n[e]},e)}))})},ce=Object(l.b)(o.a.memo(re)).withConfig({displayName:"DataTableRow",componentId:"i5eahh-0"})([""]),oe=function(e){var n=e.data,t=e.headers,r=e.headersDisplayMapping,c=e.errors,o=e.className,a=void 0===o?"":o,i=r?t.map((function(e){return r[e]||e})):t;return Object(d.jsxs)("div",{className:a,children:[Object(d.jsx)(ae,{children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsx)(te,{headers:i})}),Object(d.jsx)("tbody",{children:n.map((function(e,n){return Object(d.jsx)(ce,{datum:e,headers:t},n)}))})]})}),Object(d.jsx)(ee,{errors:c})]})},ae=l.b.div.withConfig({displayName:"DataTable__DataTableContainer",componentId:"tlajz3-0"})([""]),ie=Object(l.b)(o.a.memo(oe)).withConfig({displayName:"DataTable",componentId:"tlajz3-1"})(["color:",";","{position:relative;max-height:10em;overflow:auto;table{width:100%;}}"],u.colors.tableContent,ae),le=function(e){e.className;var n=Object(s.c)(T),t=Object(s.c)(S),r=Object(s.c)(A);return n?Object(d.jsx)(ie,{data:n,headers:t,errors:r}):null},se=Object(l.b)(o.a.memo(le)).withConfig({displayName:"RawDataView",componentId:"sc-1by3vhf-0"})([""]),ue=function(e){var n=e.className,t=void 0===n?"":n,r=Object(s.c)(z),c=r.vcfContacts,o=r.errors,a=Object(s.c)(E),i=Object.entries(a).filter((function(e){var n=Object(x.a)(e,2);n[0];return null!==n[1]})).map((function(e){return Object(x.a)(e,1)[0]}));return Object(d.jsx)(ie,{className:t,data:c,headers:i,headersDisplayMapping:I,errors:o})},de=Object(l.b)(o.a.memo(ue)).withConfig({displayName:"VcfContactsView",componentId:"z2q8fg-0"})([""]),be=t(16),je="VCF_FIELD_MAPPING_SET",fe=function(e){return{type:je,payload:e}},pe={firstName:null,workPhone:null,email:null,note:null};var me=t(47),he=Object(l.b)(me.a).withConfig({displayName:"StyledSelect",componentId:"sc-1l8ioyy-0"})([".react-select__control{background-color:",";border-color:",";.react-select__single-value{color:",";}}"],u.colors.backgroundButton,u.colors.main,u.colors.main),Oe=function(e){return{value:e,label:e}},ve=function(e){var n=e.vcfFieldMapping,t=e.className,r=void 0===t?"":t,o=Object(s.b)(),a=Object(c.useState)(!1),i=Object(x.a)(a,2),l=i[0],u=i[1],b=Object(c.useState)(null),j=Object(x.a)(b,2),f=j[0],p=j[1],m=D.filter((function(e){return!_.includes(e)})).filter((function(e){return null===n[e]})).map(Oe);return Object(d.jsxs)("div",{className:r,children:[Object(d.jsx)("button",{onClick:function(){p(null),u(!l)},children:l?"\u2715":"Ajouter champ"}),l?Object(d.jsx)(he,{options:m,onChange:function(e){return p(e.value)},value:f?Oe(f):null,classNamePrefix:"react-select"}):null,l?Object(d.jsx)("button",{disabled:null===f,onClick:function(){f&&(o(fe(Object(be.a)({},f,""))),p(null),u(!1))},children:"Ok"}):null]})},ge=Object(l.b)(o.a.memo(ve)).withConfig({displayName:"AddOptionalVcfField",componentId:"sc-1byo1qc-0"})(["display:flex;","{width:60%;}"],he),xe=function(e){return{value:e,label:e}},we=function(e){var n=e.choices,t=e.vcfFieldName,r=e.selected,c=e.className,o=void 0===c?"":c,a=_.includes(t),i=Object(s.b)(),l=n.map(xe),u=I[t]||t;return Object(d.jsxs)("div",{className:o,children:[Object(d.jsx)(ye,{children:u}),Object(d.jsx)(Ne,{children:"\u2192"}),Object(d.jsx)(he,{classNamePrefix:"react-select",options:l,value:r?xe(r):null,onChange:function(e){return i(fe(Object(be.a)({},t,e.value)))}}),a?null:Object(d.jsx)("button",{onClick:function(){return i(fe(Object(be.a)({},t,null)))},children:"\u2715"})]})},ye=l.b.span.withConfig({displayName:"FieldPicker__VcfFieldNameContainer",componentId:"sc-137ohkn-0"})([""]),Ne=l.b.span.withConfig({displayName:"FieldPicker__ArrowContainer",componentId:"sc-137ohkn-1"})([""]),ke=Object(l.b)(o.a.memo(we)).withConfig({displayName:"FieldPicker",componentId:"sc-137ohkn-2"})(["display:flex;justify-content:space-between;align-items:center;","{width:30%;}","{font-size:200%;}","{width:60%;}"],ye,Ne,he),Ce=function(e){var n=e.className,t=void 0===n?"":n,r=Object(s.c)(S),c=Object(s.c)(E);return Object(d.jsxs)("div",{className:t,children:[D.map((function(e){return null!==c[e]?Object(d.jsx)(ke,{vcfFieldName:e,choices:r,selected:c[e]},e):null})),Object(d.jsx)(ge,{vcfFieldMapping:c})]})},De=Object(l.b)(o.a.memo(Ce)).withConfig({displayName:"VcfFieldMapper",componentId:"sc-1vhsuq0-0"})(["","{margin-bottom:0.5em;}"],ke),_e=function(e){var n=e.className,t=void 0===n?"":n,r=Object(s.c)(F);return Object(d.jsxs)("div",{className:t,children:[Object(d.jsx)("h1",{children:"G\xe9n\xe9rateur de fichier de contacts"}),Object(d.jsx)(f,{title:"1. Upload un fichier CSV",children:Object(d.jsx)(H,{})}),r?Object(d.jsx)(f,{title:"2. Donn\xe9es brutes",children:Object(d.jsx)(se,{})}):null,r?Object(d.jsx)(f,{title:"3. Selection des champs \xe0 exporter",children:Object(d.jsx)(De,{})}):null,r?Object(d.jsx)(f,{title:"4. Donn\xe9es export\xe9es",children:Object(d.jsx)(de,{})}):null,r?Object(d.jsx)(f,{title:"5. Options",children:Object(d.jsx)(Z,{})}):null,r?Object(d.jsx)(f,{title:"6. Export",children:Object(d.jsx)(V,{})}):null]})},Ie=Object(l.b)(o.a.memo(_e)).withConfig({displayName:"App",componentId:"sc-1275v06-0"})(["height:100%;overflow:auto;max-width:1000px;margin:auto;"]),Pe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))},Fe=t(17),Te=t(13),Ae=t.n(Te),Se=t(18),Ee=t(45),ze=t(46),Me=t.n(ze),Be=function(e){Object(m.a)(t,e);var n=Object(h.a)(t);function t(){return Object(p.a)(this,t),n.apply(this,arguments)}return t}(Object(O.a)(Error)),Le=function(e,n){var t="";return t=n[e.row]?"line ".concat(e.row," (").concat(e.message,") : ").concat(Object.values(n[e.row]).join(", ")):"line ".concat(e.row," ").concat(e.message),new Be(t)},Ve=function(){var e=Object(Ee.a)(Ae.a.mark((function e(n){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){Me.a.parse(n,{header:!0,skipEmptyLines:!0,complete:function(n){var t=n.data,r=[];if(n.errors.length){var c=n.errors.map((function(e){return e.row}));t=t.filter((function(e,n){return!c.includes(n)})),r=n.errors.map((function(e){return Le(e,n.data)}))}e({data:t,errors:r})}})})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Re=Ae.a.mark(Ge),qe=Ae.a.mark(Je),Ue=Ae.a.mark(We);function Ge(e){var n,t;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Se.b)(Ve,e.payload);case 2:return n=r.sent,r.next=5,Object(Se.c)(J(n));case 5:return r.next=7,Object(Se.d)(S);case 7:return t=r.sent,r.next=10,Object(Se.c)(fe(P(t)));case 10:case"end":return r.stop()}}),Re)}function Je(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Se.e)(U,Ge);case 2:case"end":return e.stop()}}),qe)}function We(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Se.a)([Je()]);case 2:case"end":return e.stop()}}),Ue)}var Xe=t(49),He=Object(Fe.b)({rawData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case U:return Object(R.a)(Object(R.a)({},e),{},{data:null,errors:[]});case G:return Object(R.a)(Object(R.a)({},e),{},{data:n.payload.data,errors:n.payload.errors});default:return e}},vcfFieldMapping:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case je:return Object(R.a)(Object(R.a)({},e),n.payload);default:return e}},outputOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case K:return Object(R.a)(Object(R.a)({},e),{},{prefix:n.payload});default:return e}}}),Ke=Object(Xe.a)(),Qe=[Object(Fe.a)(Ke)];var Ye,Ze=Object(Fe.d)(He,{},Fe.c.apply(void 0,Qe));Ke.run(We);var $e=Object(l.a)(Ye||(Ye=Object(r.a)(["\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n    }\n\n    button {\n        cursor: pointer;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    body {\n        overflow: hidden;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        font-size: 16px;\n    }\n\n    html,\n    body,\n    #root {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n    }\n\n    body {\n        color: ",";\n        background-color: ",";\n        font-size: ","px;\n        @media (max-width: ","px) {\n            font-size: ","px;\n        }\n        font-family: ",";\n    }\n\n    *::-webkit-scrollbar {\n        width: 0.5em;\n        height: 0.5em;\n    }\n       \n    *::-webkit-scrollbar-thumb {\n        background-color: ",";\n        outline: 1px solid ",";\n    }\n\n    * {\n        scrollbar-color: "," ",";\n        scrollbar-width: thin;\n    }\n\n    button, input {\n        border:  1px "," solid;\n        border-radius: 0.3em;\n        font-family: ",";\n        color: ",";\n        padding: 0.5em;\n    }\n\n    button {\n        background-color: ",";\n    }\n\n    input {\n        background-color: transparent;\n    }\n\n    h1, h2 {\n        font-family: ",";\n    }\n\n    h2 {\n        color: ",";\n    }\n\n    /* TODO : Move from here */\n    .react-select__menu-list {\n        background-color: ",";\n        .react-select__option {\n            background-color: ",";\n            cursor: pointer;\n            &.react-select__option--is-focused {\n                background-color: ",";\n            }\n        }\n    }\n"])),u.colors.main,u.colors.background,u.fontSizes.desktop,u.dimensions.thresholdMobile,u.fontSizes.mobile,u.fonts.default,u.colors.scrollBg,u.colors.scrollBg,u.colors.scroll,u.colors.scrollBg,u.colors.main,u.fonts.default,u.colors.main,u.colors.backgroundButton,u.fonts.titles,u.colors.title2,u.colors.background2,u.colors.background2,u.colors.highlight);i.a.render(Object(d.jsxs)(o.a.StrictMode,{children:[Object(d.jsx)($e,{}),Object(d.jsx)(s.a,{store:Ze,children:Object(d.jsx)(Ie,{})})]}),document.getElementById("root")),Pe()}},[[71,1,2]]]);
//# sourceMappingURL=main.4095e8f3.chunk.js.map