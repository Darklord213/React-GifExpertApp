(this["webpackJsonpgift-expert-app"]=this["webpackJsonpgift-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setcategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],u=c[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:r,onChange:function(e){u(e.target.value)},placeholder:"Ingrese un Texto"})})};d.propType={setcategories:o.a.func.isRequired};var l=d,p=n(11),b=n(6),f=n.n(b),h=n(9),O=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=glDw44pyHQB7gz2Ub0CMs97L4JR6tWld"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),console.log(i),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},m=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){O(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:t}),r&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(j.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(j.jsx)(g,Object(p.a)({},e),e.id)}))})]})},x=function(){var e=Object(a.useState)(["One Punch"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GiftExpertApp"}),Object(j.jsx)(l,{setcategories:c}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(m,{category:e},e)}))})]})};n(20);r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b628d270.chunk.js.map