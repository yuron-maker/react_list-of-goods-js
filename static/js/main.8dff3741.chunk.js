(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),r=n(6),i=n(8),o=(n(13),n(14),n(1)),a=n(4),l=n.n(a),u=n(0),b="alphabet",j="length",h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var d=function(){var t=Object(o.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(o.useState)(""),a=Object(r.a)(s,2),d=a[0],g=a[1],p=function(t,e,n){var c=Object(i.a)(t);return e&&c.sort((function(t,n){switch(e){case b:return t.localeCompare(n);case j:return t.length-n.length;default:return 0}})),n&&c.reverse(),c}(h,d,n);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",onClick:function(){return g(b)},className:l()("button is-info",d===b?"":"is-light"),children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",onClick:function(){return g(j)},className:l()("button is-success",d===j?"":"is-light"),children:"Sort by length"}),Object(u.jsx)("button",{type:"button",onClick:function(){return c(!n)},className:l()("button is-warning",n?"":"is-light"),children:"Reverse"}),(""!==d||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){g(""),c(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8dff3741.chunk.js.map