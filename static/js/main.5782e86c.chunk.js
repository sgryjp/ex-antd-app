(this["webpackJsonpex-antd-app"]=this["webpackJsonpex-antd-app"]||[]).push([[0],{129:function(e,a,t){e.exports=t(211)},134:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),m=(t(134),t(18)),o=t(31),s=t(213),i=t(125),p=t(215),E=t(214),u=s.a.Content,d=function(e){var a=Object(o.h)();return l.a.createElement("div",null,l.a.createElement(p.a,{style:{margin:"16px 0"}}),l.a.createElement(s.a,{style:{padding:"24px 0",background:"#fff"}},l.a.createElement(u,{style:{padding:"0 24px",minHeight:280}},l.a.createElement("h1",null,"Plans"),l.a.createElement(E.a,{dataSource:e.plans,renderItem:function(e){return l.a.createElement(E.a.Item,null,l.a.createElement(m.b,{to:"".concat(a.url,"/").concat(e.id)},e.name))}}))))},b=t(219),g=t(124),h=t(218),f=t(216),y=t(217),v=t(65),I=t.n(v),x=s.a.Content,N=function(e){var a=Object(o.h)(),t=a.url.replace(RegExp("/[^/]+$"),""),n=Object(o.g)().planId,r=e.plans.find((function(e){return e.id===n}));return l.a.createElement("div",null,l.a.createElement(p.a,{style:{margin:"16px 0"}},l.a.createElement(p.a.Item,null,l.a.createElement(m.b,{to:t},"Home")),l.a.createElement(p.a.Item,null,'Plan "',r.name,'"')),l.a.createElement(s.a,{style:{padding:"24px 0",background:"#fff"}},l.a.createElement(x,{className:"content"},l.a.createElement("h1",{className:"ant-typography"},r.name),l.a.createElement("h2",{className:"ant-typography"},"Configuration"),l.a.createElement(b.a,{size:"small",bordered:!0},l.a.createElement(b.a.Item,{label:"Last update"},l.a.createElement(g.a,{title:"The configuration is changed after processing started."},l.a.createElement("span",{className:"warning"},I()("2019-12-31T13:47").format("LLL")))),l.a.createElement(b.a.Item,{label:"Strategy"},"Aggressive"),l.a.createElement(b.a.Item,{label:"# or records"},"42712 records"),l.a.createElement(b.a.Item,{label:"# or features"},"28"),l.a.createElement(b.a.Item,{label:"Data Size"},"42.71 MB")),l.a.createElement("div",{className:"controls"},l.a.createElement(m.b,{to:"".concat(a.url,"/configure"),tabIndex:-1},l.a.createElement(h.a,null,"Configure Plan"))),l.a.createElement("h2",{className:"ant-typography"},"Processing"),l.a.createElement("div",{className:"controls"},l.a.createElement(f.a,{type:"circle",percent:30}),l.a.createElement(y.a,{direction:"vertical"},l.a.createElement(y.a.Step,{title:"1st"}),l.a.createElement(y.a.Step,{title:"2st"}))),l.a.createElement(b.a,{size:"small",bordered:!0},l.a.createElement(b.a.Item,{label:"Started"},I()("2019-12-30T17:34").format("LLL")),l.a.createElement(b.a.Item,{label:"Finished"},"Not Yet")),l.a.createElement("div",{className:"controls"},l.a.createElement(h.a,null,"Start"),l.a.createElement(h.a,null,"Stop")),l.a.createElement("h2",{className:"ant-typography"},"Analysis"),l.a.createElement(b.a,{size:"small",bordered:!0},l.a.createElement(b.a.Item,{label:"Report Generated"},I()("2019-12-30T17:34").format("LLL"))),l.a.createElement("div",{className:"controls"},l.a.createElement(m.b,{to:"".concat(a.url,"/report"),tabIndex:-1},l.a.createElement(h.a,null,"Show Report"))))))},S=function(){var e=Object(o.h)(),a=Object(n.useState)([{name:"foo",id:"32"},{name:"bar",id:"27"}]),t=Object(i.a)(a,2),r=t[0];t[1];return l.a.createElement(o.d,null,l.a.createElement(o.b,{path:e.url+"/plans/:planId"},l.a.createElement(N,{plans:r})),l.a.createElement(o.b,{path:e.url+"/plans"},l.a.createElement(d,{plans:r})),l.a.createElement(o.a,{to:e.url+"/plans"}))},w=function(){return l.a.createElement("div",null,"App2")},L=(t(209),t(210),s.a.Header),j=s.a.Footer,k=s.a.Content,O=function(){return l.a.createElement(m.a,{basename:"/ex-antd-app"},l.a.createElement(s.a,null,l.a.createElement(L,{className:"header"},l.a.createElement(m.b,{to:"/",className:"brand"},"ex-antd-app"),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",{role:"menu"},l.a.createElement(m.c,{to:"/app1"},"app1")),l.a.createElement("li",{role:"menu"},l.a.createElement(m.c,{to:"/app2"},"app2")))),l.a.createElement(k,{style:{padding:"0 50px"}},l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/app1",component:S}),l.a.createElement(o.b,{path:"/app2",component:w}))),l.a.createElement(j,{style:{textAlign:"center"}},"\xa9 2019 Suguru Yamamoto")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.5782e86c.chunk.js.map