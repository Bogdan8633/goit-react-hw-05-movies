"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[160],{160:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(689),i=e(791),o=e(724),p=e(295),f="castPage_list__OcaOG",h="castPage_item__HGCRJ",v=e(184),l=function(){var r=(0,i.useState)([]),t=(0,a.Z)(r,2),e=t[0],c=t[1],l=(0,i.useState)(!1),d=(0,a.Z)(l,2),m=d[0],x=d[1],w=(0,s.UO)().id;(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t,e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,x(!0),r.next=4,(0,o.Jh)(w);case 4:t=r.sent,c(t.cast),r.next=12;break;case 8:r.prev=8,r.t0=r.catch(0),e=r.t0.response,console.log(e.data.message);case 12:return r.prev=12,x(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,8,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[w,c]);var g=e.map((function(r){var t=r.id,e=r.name,n=r.character,a=r.profile_path;return(0,v.jsxs)("li",{className:h,children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(a),alt:"",width:"300px"}),(0,v.jsx)("p",{children:e}),(0,v.jsxs)("p",{children:["Character: ",n]})]},t)}));return(0,v.jsxs)(v.Fragment,{children:[m&&(0,v.jsx)(p.Z,{}),0!==e.length&&(0,v.jsx)("ul",{className:f,children:g})]})}},724:function(r,t,e){e.d(t,{Jh:function(){return p},Pg:function(){return o},_r:function(){return f},dY:function(){return i},z1:function(){return s}});var n=e(861),a=e(757),c=e.n(a),u=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6c7c9c59ab66a934cce9eb83e4c9fd9b"}}),s=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("search/movie",{params:{query:t}});case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(){var t,e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("movie/popular");case 2:return t=r.sent,e=t.data,r.abrupt("return",e);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("movie/".concat(t));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(t,"/credits"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.get("/movie/".concat(t,"/reviews"));case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=160.952e59a3.chunk.js.map