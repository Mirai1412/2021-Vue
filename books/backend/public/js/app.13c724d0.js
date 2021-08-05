(function(t){function o(o){for(var n,s,i=o[0],c=o[1],u=o[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(o);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(a.splice(o--,1),t=s(s.s=e[0]))}return t}var n={},r={app:0},a=[];function s(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,o,e){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)s.d(e,n,function(o){return t[o]}.bind(null,n));return e},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=o,i=i.slice();for(var u=0;u<i.length;u++)o(i[u]);var l=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"4d33":function(t,o,e){},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-app",[e("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[e("h1",[t._v("Books")])]),e("v-main",[e("router-view")],1)],1)},a=[],s={name:"App",data:function(){return{}}},i=s,c=e("2877"),u=e("6544"),l=e.n(u),p=e("7496"),f=e("40dc"),d=e("f6c4"),b=Object(c["a"])(i,r,a,!1,null,null,null),v=b.exports;l()(b,{VApp:p["a"],VAppBar:f["a"],VMain:d["a"]});var h=e("8c4f"),k=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"app"},[e("ul",{staticClass:"book",staticStyle:{padding:"5px"}},t._l(t.books,(function(o){return e("li",{key:o.bookId,staticClass:"item"},[e("v-card",{staticClass:"mx-auto",staticStyle:{width:"450px"}},[e("img",{staticClass:"poster",attrs:{src:o.cover}}),e("router-link",{attrs:{to:t.bookLink(o.bookId)}},[e("v-card-title",{staticStyle:{height:"80px"}},[t._v(" "+t._s(o.title)+" ")])],1),e("v-card-subtitle",{staticStyle:{padding:"0px 0 10px 16px"}},[t._v(" "+t._s(o.author)+" ")])],1)],1)})),0)])},_=[],y=e("bc3a"),m=e.n(y),g={data:function(){return{books:[]}},mounted:function(){var t=this;m.a.get("/api/books").then((function(o){t.books=o.data})).catch((function(t){console.log(t)}))},methods:{bookLink:function(t){return"/book/".concat(t)}}},x=g,w=(e("c286"),e("b0af")),O=e("99d9"),j=Object(c["a"])(x,k,_,!1,null,null,null),S=j.exports;l()(j,{VCard:w["a"],VCardSubtitle:O["a"],VCardTitle:O["b"]});var C=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"app"},[e("h1",[t._v(" "+t._s(t.books.title))]),e("img",{staticClass:"poster",attrs:{src:t.books.cover}}),e("p",[t._v("작가: "+t._s(t.books.author)+",번역 : "+t._s(t.books.translator))]),e("p",[t._v("페이지: "+t._s(t.books.page)+",가격 : "+t._s(t.books.price)+", ISBN : "+t._s(t.books.ISBN))]),e("p",[t._v(t._s(t.books.info))]),e("router-link",{attrs:{to:"/book"}},[t._v("돌아가기")])],1)},P=[],V={data:function(){return{books:{}}},mounted:function(){var t=this,o=this.$route.params.book_id;m.a.get("/api/books/".concat(o)).then((function(o){t.books=o.data,console.log(o)}))}},$=V,M=Object(c["a"])($,C,P,!1,null,null,null),B=M.exports;n["a"].use(h["a"]);var I=new h["a"]({mode:"history",routes:[{path:"/book",component:S},{path:"/book/:book_id",component:B}]}),T=e("f309");n["a"].use(T["a"]);var A=new T["a"]({});n["a"].config.productionTip=!1,n["a"].prototype.$http=m.a,new n["a"]({render:function(t){return t(v)},vuetify:A,router:I}).$mount("#app")},c286:function(t,o,e){"use strict";e("4d33")}});
//# sourceMappingURL=app.13c724d0.js.map