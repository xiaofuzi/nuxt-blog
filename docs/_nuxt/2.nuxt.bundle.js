webpackJsonp([2],{154:function(t,n,e){e(165);var r=e(17)(e(161),e(176),null,null);t.exports=r.exports},155:function(t,n,e){"use strict";var r=e(41),s=e.n(r),a={};n.a=s.a.create(a)},161:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(155);n.default={data:function(t){var n=t.params,e=t.error,s=parseInt(n.id)-1;return r.a.get("/api/posts/"+s).then(function(t){return{post:t.data}}).catch(function(t){e({statusCode:404,message:"Posts not found"})})},head:function(){return{title:"post list"}}}},165:function(t,n){},176:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"post-wrapper container"},[e("div",{domProps:{innerHTML:t._s(t.post.content)}})])},staticRenderFns:[]}}});