(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[42],{635:function(e,t,c){"use strict";c.r(t);var n=c(1),i=(c(0),c(14)),r=c.n(i),a=c(29),s=c.n(a),l=(c(44),c(55)),u=c(769),d=c(766);t.default=function(e){var t=e.data;if(!t)return null;var c=r()(t,["item","IPRanges"]),i=r()(t,["item","EC2SecurityGroups"]);return Object(n.jsxs)(l.a,{data:t,children:[Object(n.jsx)(d.a,{children:Object(n.jsx)(l.c,{label:"Descripition",valuePath:"Description"})}),Object(n.jsx)(u.b,{children:Object(n.jsxs)(u.a,{title:"Rules",disabled:s()(c)&&s()(i),children:[!s()(c)&&Object(n.jsxs)("ul",{children:["IP Addresses:",c.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{label:e.CIDRIP,value:e.Status})},t)}))]}),!s()(i)&&Object(n.jsxs)("ul",{children:["EC2 Security Groups:",i.map((function(e,t){var c=e.CIDRIP,i=e.EC2SecurityGroupName,r=e.UserId,a=e.Status;return Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{label:c,value:"".concat(i," (AWS account ID: ").concat(r,"): ").concat(a)})},t)}))]})]})})]})}},766:function(e,t,c){"use strict";var n=c(1);c(0),c(767);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,c){},768:function(e,t,c){},769:function(e,t,c){"use strict";c.d(t,"a",(function(){return j})),c.d(t,"b",(function(){return l.b}));var n=c(1),i=c(13),r=c(0),a=c(8),s=c.n(a),l=c(79),u=c(80),d=c(63),j=(c(768),function(e){var t=e.title,c=e.isSelected,a=e.disabled,j=e.onClick,o=e.children,b=Object(r.useState)(""),h=Object(i.a)(b,2),f=h[0],O=h[1],p=f?Object(n.jsxs)(n.Fragment,{children:[t,d.a[f].icon]}):t;return Object(n.jsx)(u.c.Provider,{value:O,children:Object(n.jsx)(l.a,{title:p,className:s()("partial-tab-pane",f),isSelected:c,disabled:a,onClick:j,children:o})})})}}]);
//# sourceMappingURL=42.58eccd74.chunk.js.map