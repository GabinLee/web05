(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],d=0,v=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,i=1;i<s.length;i++){var r=s[i];0!==n[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=s[0]))}return t}var a={},i={app:0},n={app:0},o=[];function r(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-07a0a547":"80500e7c","chunk-40ae7c68":"a9a470d1","chunk-9e0ec44a":"e685e94b"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.e=function(t){var e=[],s={"chunk-07a0a547":1,"chunk-40ae7c68":1,"chunk-9e0ec44a":1};i[t]?e.push(i[t]):0!==i[t]&&s[t]&&e.push(i[t]=new Promise((function(e,s){for(var a="css/"+({}[t]||t)+"."+{"chunk-07a0a547":"62698005","chunk-40ae7c68":"c4dfef5e","chunk-9e0ec44a":"856a5f73"}[t]+".css",n=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var l=o[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===n))return e()}var v=document.getElementsByTagName("style");for(r=0;r<v.length;r++){l=v[r],d=l.getAttribute("data-href");if(d===a||d===n)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var a=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[t],u.parentNode.removeChild(u),s(o)},u.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(u)})).then((function(){i[t]=0})));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(t);var v=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(u);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",v.name="ChunkLoadError",v.type=a,v.request=i,s[1](v)}n[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(s,a,function(e){return t[e]}.bind(null,a));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/web05/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var u=d;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0586":function(t,e,s){t.exports=s.p+"img/home-events02.05817bc7.jpg"},"1dbb":function(t,e,s){},"2b93":function(t,e,s){t.exports=s.p+"img/home-events03.80d41676.jpg"},"38fa":function(t,e,s){t.exports=s.p+"img/home-menu03.672fd770.jpg"},"391b":function(t,e,s){t.exports=s.p+"img/home-about01.9ffc4fb9.jpg"},"536f":function(t,e,s){t.exports=s.p+"img/home-events01.f432e9f1.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],o=s("2877"),r={},c=Object(o["a"])(r,i,n,!1,null,null,null),l=c.exports,d=s("f309");a["a"].use(d["a"]);var v=new d["a"]({}),u=(s("d3b7"),s("8c4f")),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{overflow:"hidden"}},[s("header",[s("div",{staticClass:"h-container mw1440"},[t._m(0),s("nav",{staticClass:"nav-box uppercase fs14"},[s("router-link",{staticClass:"nav-item",class:{checked:0==t.selectedIndex},attrs:{to:"/"},nativeOn:{click:function(e){return t.clickedNavItem(0)}}},[s("span",[t._v("home")])]),s("router-link",{staticClass:"nav-item",class:{checked:1==t.selectedIndex},attrs:{to:"/about"},nativeOn:{click:function(e){return t.clickedNavItem(1)}}},[s("span",[t._v("about")])]),s("router-link",{staticClass:"nav-item menu-item",class:{checked:2==t.selectedIndex},attrs:{to:"/menu"},nativeOn:{click:function(e){return t.clickedNavItem(2)}}},[s("span",[t._v("menu")])]),s("router-link",{staticClass:"nav-item",class:{checked:3==t.selectedIndex},attrs:{to:"/events"},nativeOn:{click:function(e){return t.clickedNavItem(3)}}},[s("span",[t._v("events")])]),s("router-link",{staticClass:"nav-item",class:{checked:4==t.selectedIndex},attrs:{to:"/contact"},nativeOn:{click:function(e){return t.clickedNavItem(4)}}},[s("span",[t._v("contact")])])],1),s("div",{staticClass:"mobile-menu-btn"},[s("button",{directives:[{name:"ripple",rawName:"v-ripple"}],on:{click:t.openMobileNav}},[s("v-icon",[t._v("mdi-menu")])],1)])])]),s("div",{attrs:{id:"mobile-nav-container"},on:{click:t.closeMobileNav}},[s("div",{staticClass:"fs16 uppercase",attrs:{id:"mobile-nav-group"}},[s("button",{directives:[{name:"ripple",rawName:"v-ripple"}],on:{click:t.closeMobileNav}},[s("v-icon",[t._v("mdi-close")])],1),s("div",{staticClass:"mobile-nav-box mobile-nav-box-home"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[s("p",[t._v("home")])])],1),s("div",{staticClass:"mobile-nav-box"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/about"}},[s("p",[t._v("about")])])],1),s("div",{staticClass:"mobile-nav-box"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/menu"}},[s("p",[t._v("menu")])])],1),s("div",{staticClass:"mobile-nav-box"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/events"}},[s("p",[t._v("events")])])],1),s("div",{staticClass:"mobile-nav-box"},[s("router-link",{staticClass:"nav-item",attrs:{to:"/contact"}},[s("p",[t._v("contact")])])],1)])]),s("main",[s("router-view")],1),s("footer",[s("div",{staticClass:"f-container mw1440 padding-tb-50"},[s("div",{staticClass:"logo-font"},[t._v("Sample")]),t._m(1),s("div",{staticClass:"social-box"},[s("a",{staticClass:"insta",attrs:{href:""}},[s("v-icon",[t._v("mdi-instagram")])],1),s("a",{attrs:{href:""}},[s("v-icon",[t._v("mdi-facebook")])],1)])])])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo-box"},[s("a",{staticClass:"logo-font",attrs:{href:"/"}},[t._v("Sample")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-box"},[s("div",{staticClass:"j-text"},[t._v("사업자등록번호 : 000-00-00000")]),t._v(" | "),s("div",{staticClass:"j-text"},[t._v("주소 : 경기도 시흥시 서울대학로")]),t._v(" | "),s("div",{staticClass:"j-text"},[t._v("대표 : OOO")]),t._v(" | "),s("div",{staticClass:"j-text"},[t._v("TEL : 000-0000-0000")])])}],h={data:function(){return{selectedIndex:0,selectedMenu:0}},created:function(){},mounted:function(){var t=document.getElementsByClassName("nav-item");console.log(t),console.log(t[0]),this.sum(1,2)},methods:{sum:function(t,e){console.log(t+e)},clickedNavItem:function(t){this.selectedIndex=t},openMobileNav:function(){document.getElementById("mobile-nav-container").style.width="100%",document.getElementById("mobile-nav-group").style.width="300px"},closeMobileNav:function(){document.getElementById("mobile-nav-container").style.width="0",document.getElementById("mobile-nav-group").style.width="0"}}},f=h,b=(s("a006"),s("6544")),g=s.n(b),C=s("132d"),_=s("269a"),x=s.n(_),y=s("5607"),k=Object(o["a"])(f,m,p,!1,null,null,null),w=k.exports;g()(k,{VIcon:C["a"]}),x()(k,{Ripple:y["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),t._m(1),a("div",{staticClass:"home-menu"},[a("div",{staticClass:"padding-tb-50 mw1440"},[a("div",{staticClass:"group"},[a("div",{staticClass:"box"},[a("a",{staticClass:"photo-card",attrs:{href:""}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s("ede9"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(2)])]),a("div",{staticClass:"box"},[a("a",{staticClass:"photo-card",attrs:{href:""}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s("a23b"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(3)])]),a("div",{staticClass:"box"},[a("a",{staticClass:"photo-card",attrs:{href:""}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s("38fa"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(4)])]),a("div",{staticClass:"box"},[a("a",{staticClass:"photo-card",attrs:{href:""}},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s("f773"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(5)])])])])]),t._m(6),a("div",{staticClass:"home-events padding-tb-50 mw1440"},[a("div",{staticClass:"group"},[a("div",{staticClass:"box"},[a("a",{staticClass:"img-box",attrs:{href:""}},[a("img",{attrs:{src:s("536f"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(7)]),a("div",{staticClass:"box"},[a("a",{staticClass:"img-box",attrs:{href:""}},[a("img",{attrs:{src:s("0586"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(8)]),a("div",{staticClass:"box"},[a("a",{staticClass:"img-box",attrs:{href:""}},[a("img",{attrs:{src:s("2b93"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(9)]),a("div",{staticClass:"box"},[a("a",{staticClass:"img-box",attrs:{href:""}},[a("img",{attrs:{src:s("6da8"),alt:""}}),a("div",{staticClass:"overlay uppercase"},[a("div",{staticClass:"j-title"},[t._v("view more")]),a("v-icon",[t._v("mdi-chevron-right")])],1)]),t._m(10)])])]),t._m(11),a("div",{staticClass:"home-contact"},[a("div",{staticClass:"padding-tb-50 mw1440"},[a("div",{staticClass:"group padding-tb-50 fs14"},[a("div",{staticClass:"j-head"},[t._v("contact us")]),a("div",{staticClass:"j-text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")]),a("router-link",{staticClass:"green-btn fs16",attrs:{to:"./Contact"}},[t._v("contact")])],1)])])])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-main"},[s("div",{staticClass:"main-img-font uppercase"},[t._v("sample")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-about padding-tb-50 mw1440"},[a("div",{staticClass:"group"},[a("div",{staticClass:"box padding-50"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s("391b"),alt:""}})]),a("div",{staticClass:"text-box"},[a("div",{staticClass:"j-title"},[t._v("sample")]),a("div",{staticClass:"j-text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")])])]),a("div",{staticClass:"box padding-50"},[a("div",{staticClass:"img-box"},[a("img",{attrs:{src:s("ae0d"),alt:""}})]),a("div",{staticClass:"text-box"},[a("div",{staticClass:"j-title"},[t._v("sample")]),a("div",{staticClass:"j-text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("coffee")]),s("div",{staticClass:"j-text"},[t._v("You can change this text")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("beverage")]),s("div",{staticClass:"j-text"},[t._v("You can change this text")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("cake")]),s("div",{staticClass:"j-text"},[t._v("You can change this text")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("macaron")]),s("div",{staticClass:"j-text"},[t._v("You can change this text")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-text padding-tb-50 mw1440"},[s("div",{staticClass:"box"},[s("div",{staticClass:"j-head"},[t._v('"sample"')]),s("div",{staticClass:"j-text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("sample")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("sample")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("sample")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-box"},[s("div",{staticClass:"j-title"},[t._v("sample")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-img padding-tb-50"},[s("div",{staticClass:"overlay"})])}],E={methods:{}},L=E,O=(s("fff1"),Object(o["a"])(L,j,I,!1,null,"3c65ca7a",null)),$=O.exports;g()(O,{VIcon:C["a"]});var N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("div",{staticClass:"about-main page-main-img"},[a("div",{staticClass:"main-img-font uppercase"},[t._v("about us")])]),a("div",{staticClass:"about-contents mw1440 padding-tb-50"},[a("div",{staticClass:"group"},[a("div",{staticClass:"row-box"},[a("div",{staticClass:"img-box padding-tb-50"},[a("img",{attrs:{src:s("bd87"),alt:""}})]),a("div",{staticClass:"text-box padding-50"},[a("div",{staticClass:"j-head-myeongjo"},[t._v("sample")]),a("div",{staticClass:"j-text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])]),a("div",{staticClass:"img-box padding-tb-50"},[a("img",{attrs:{src:s("b609"),alt:""}})])]),a("div",{staticClass:"mobile-row-box"},[a("div",{staticClass:"img-box padding-50"},[a("img",{attrs:{src:s("bd87"),alt:""}})]),a("div",{staticClass:"img-box padding-50"},[a("img",{attrs:{src:s("b609"),alt:""}})]),a("div",{staticClass:"text-box"},[a("div",{staticClass:"j-head-myeongjo"},[t._v("sample")]),a("div",{staticClass:"j-text"},[t._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")])])])])])])}],P={},S=P,A=(s("b9ad"),Object(o["a"])(S,N,M,!1,null,"c4637856",null)),T=A.exports;a["a"].use(u["a"]);var B=[{path:"/",name:"Main",component:w,children:[{path:"/",name:"Home",component:$},{path:"/about",name:"About",component:T},{path:"/menu",name:"Menu",component:function(){return s.e("chunk-40ae7c68").then(s.bind(null,"9a0b"))}},{path:"/events",name:"Events",component:function(){return s.e("chunk-07a0a547").then(s.bind(null,"aa9c"))}},{path:"/contact",name:"Contact",component:function(){return s.e("chunk-9e0ec44a").then(s.bind(null,"b8fa"))}}]}],Y=new u["a"]({mode:"history",base:"/web05/",routes:B}),q=Y;a["a"].config.productionTip=!1,new a["a"]({vuetify:v,router:q,render:function(t){return t(l)}}).$mount("#app")},"6da8":function(t,e,s){t.exports=s.p+"img/home-events04.8c6410c3.jpg"},"72b5":function(t,e,s){},"78e4":function(t,e,s){},a006:function(t,e,s){"use strict";var a=s("72b5"),i=s.n(a);i.a},a23b:function(t,e,s){t.exports=s.p+"img/home-menu02.9c26cdb4.jpg"},ae0d:function(t,e,s){t.exports=s.p+"img/home-about02.077d8074.jpg"},b609:function(t,e,s){t.exports=s.p+"img/about02.41756f4d.jpg"},b9ad:function(t,e,s){"use strict";var a=s("1dbb"),i=s.n(a);i.a},bd87:function(t,e,s){t.exports=s.p+"img/about01.efa76831.jpg"},ede9:function(t,e,s){t.exports=s.p+"img/home-menu01.e2f54bb3.jpg"},f773:function(t,e,s){t.exports=s.p+"img/home-menu04.b9161d5b.jpg"},fff1:function(t,e,s){"use strict";var a=s("78e4"),i=s.n(a);i.a}});
//# sourceMappingURL=app.6c0df19e.js.map