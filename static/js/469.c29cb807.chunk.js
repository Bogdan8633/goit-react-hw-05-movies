"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[469],{469:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(433),a=r(861),u=r(439),c=r(757),s=r.n(c),i=r(791),o=r(624),f=r(295),p=r(724),v=r(184),m=function(){var t=(0,i.useState)([]),e=(0,u.Z)(t,2),r=e[0],c=e[1],m=(0,i.useState)(!1),d=(0,u.Z)(m,2),h=d[0],l=d[1],x=(0,i.useState)(null),w=(0,u.Z)(x,2),k=w[0],Z=w[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(!0),t.next=4,(0,p.dY)();case 4:e=t.sent,c((function(t){return[].concat((0,n.Z)(t),(0,n.Z)(e.results))})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),Z(t.t0.message);case 11:return t.prev=11,l(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[l,Z,c]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h2",{children:"Trending today"}),h&&(0,v.jsx)(f.Z,{}),(0,v.jsx)(o.Z,{items:r}),k&&(0,v.jsx)("h2",{children:k})]})},d=function(){return(0,v.jsx)(m,{})}},624:function(t,e,r){r.d(e,{Z:function(){return p}});var n=r(791),a=r(87),u=r(689),c="moviesList_moviesList__CGC-e",s="moviesList_item__4fx80",i="moviesList_link__3hWfy",o=r(184),f=function(t){var e=t.items,r=(0,u.TH)(),n=e.map((function(t){var e=t.id,n=t.title;return(0,o.jsx)(a.rU,{className:s,to:"/movie/".concat(e),state:{from:r},children:(0,o.jsx)("li",{children:(0,o.jsx)("p",{className:i,children:n})})},e)}));return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:c,children:n})})},p=(0,n.memo)(f);f.defaultProps={items:[]}},724:function(t,e,r){r.d(e,{Jh:function(){return f},Pg:function(){return o},_r:function(){return p},dY:function(){return i},z1:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6c7c9c59ab66a934cce9eb83e4c9fd9b"}}),s=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(e));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=469.c29cb807.chunk.js.map