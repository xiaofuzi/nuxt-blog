webpackJsonp([0],{150:function(t,e,n){n(166);var r=n(17)(n(157),n(177),null,null);t.exports=r.exports},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{navItems:{type:Array,required:!0},logo:{type:String}}}},157:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(174),a=n.n(r),s=n(173),o=n.n(s);e.default={data:function(){return{navItems:[{text:"Home",url:"/"},{text:"Posts",url:"/page/1"},{text:"About",url:"/about"}]}},components:{MyFooter:o.a,WebNav:a.a}}},166:function(t,e){},167:function(t,e){},170:function(t,e){},173:function(t,e,n){n(170);var r=n(17)(null,n(181),null,null);t.exports=r.exports},174:function(t,e,n){n(167);var r=n(17)(n(156),n(178),null,null);t.exports=r.exports},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("web-nav",{attrs:{"nav-items":t.navItems}}),n("nuxt"),n("my-footer")],1)},staticRenderFns:[]}},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-default main-menu"},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[n("h2",[t._v("ffe")])])],1),n("div",{staticClass:"nav-item"},[n("ul",{staticClass:"nav navbar-nav navbar-right"},t._l(t.navItems,function(e){return n("li",[n("nuxt-link",{attrs:{to:e.url}},[t._v(t._s(e.text))])],1)}))])])])},staticRenderFns:[]}},181:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v("\n  Visit our website for more documentation : "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("nuxtjs.org")])])}]}}});