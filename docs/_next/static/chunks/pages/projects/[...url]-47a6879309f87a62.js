(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{5598:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(8407),o=n(5029),s=n(271),c=n(4950),a=n.n(c),i=n(3836),l=n(7453),u=n.n(l),d=n(1664),h=n.n(d),p=n(2804),_=n(5893);function m(e){var t=e.urls,n=e.group,r=(0,p.sJ)(i.Oj);if(n&&n.length>0){var o="/".concat(n[0].header.type,"/").concat(t.slice(2,6).join("/")),s=n.map((function(e,t){var n=e.header.title,r="/".concat(e.header.type,"/").concat(e.url.slice(1,5).join("/"));return(0,_.jsx)("li",{children:o===r?(0,_.jsxs)("p",{title:n,children:["\ud83d\udc40 ",(0,_.jsx)("b",{children:n})]}):(0,_.jsx)(h(),{href:r,children:(0,_.jsx)("a",{title:n,children:n})})},t)})),c=n[0].header.group;return(0,_.jsxs)("article",{className:u()["root-".concat(r)],children:[(0,_.jsxs)("div",{className:u().meta,children:[(0,_.jsx)("div",{className:u().dimmer,children:(0,_.jsxs)("div",{className:u().prompt,children:[(0,_.jsx)("h3",{className:u().title,children:"\uc2dc\ub9ac\uc988 \ud1ba\uc544\ubcf4\uae30"}),(0,_.jsx)("p",{children:c})]})}),(0,_.jsx)("img",{className:u().image,src:n[0].header.coverImage,title:c})]}),(0,_.jsx)("div",{className:u().body,children:(0,_.jsx)("ul",{className:u().list,children:s})})]})}return null}var x=n(6987),j=n(7232),v=n.n(j),f=n(155);function g(e){var t=e.page,n=t.prev,r=t.next,o=(0,p.sJ)(i.Oj);return(0,_.jsxs)("article",{className:v().root,children:[(0,_.jsxs)("div",{className:v()["mover-wrapper"],children:[(0,_.jsx)("div",{children:(0,_.jsx)(N,{className:v()["button-".concat(o)],data:r,isNext:!0})}),(0,_.jsx)("div",{children:(0,_.jsx)(N,{className:v()["button-".concat(o)],data:n})})]}),(0,_.jsx)("hr",{className:v().divider}),(0,_.jsx)("div",{children:(0,_.jsx)(h(),{href:"/".concat(t.type),children:(0,_.jsxs)("a",{className:v()["button-".concat(o)],title:"/".concat(t.type),children:[(0,_.jsx)(f.pLT,{}),(0,_.jsx)("p",{children:"\ubaa9\ub85d"})]})})})]})}function N(e){var t=e.className,n=e.data,r=e.isNext;return n?(0,_.jsx)(h(),{href:"/".concat(null===n||void 0===n?void 0:n.header.type,"/").concat(null===n||void 0===n?void 0:n.url.slice(1,5).join("/")),children:(0,_.jsxs)("a",{className:t,"data-prev":r,title:n.header.title,children:[r&&(0,_.jsx)(f.O8Q,{}),(0,_.jsx)("p",{children:n.header.title}),!r&&(0,_.jsx)(f.qvS,{})]})}):null}var b=n(6740),y=n.n(b);function C(e){var t=e.toc,n=(0,p.sJ)(i.Oj);return t?(0,_.jsxs)("div",{className:y()["toc-".concat(n)],children:[(0,_.jsx)("h2",{children:"Table of Contents"}),(0,_.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]}):null}var k=n(9008),w=n.n(k);function O(e){var t=e.content,n=(0,p.sJ)(i.Oj);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(w(),{children:(0,_.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",rel:"stylesheet"})}),(0,_.jsx)("div",{className:"markdown ".concat(n),dangerouslySetInnerHTML:{__html:t}})]})}function E(e){var t,n,c,i=e.data,l=[i.header.type===r.ze.POSTS?"posts":"projects"].concat(i.url),u={next:null===(t=i.meta)||void 0===t?void 0:t.next,prev:null===(n=i.meta)||void 0===n?void 0:n.prev,type:i.header.type};return(0,_.jsxs)("article",{className:a().root,children:[(0,_.jsx)(m,{group:null===(c=i.meta)||void 0===c?void 0:c.group,urls:l}),(0,_.jsx)(C,{toc:i.toc}),(0,_.jsx)(o.Z,{urls:l}),(0,_.jsx)(O,{content:i.content}),(0,_.jsx)(x.Z,{header:i.header}),(0,_.jsx)(g,{page:u}),(0,_.jsx)(s.Z,{flag:i.header.comment})]})}},271:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(3836),o=n(9147),s=n.n(o),c=n(7294),a=n(2804),i=n(5893);function l(e){var t=e.flag,n=(0,a.sJ)(r.Oj);return(0,c.useEffect)((function(){if(t&&0!==document.querySelectorAll("#utterances > div").length){var e,r=document.querySelector("#utterances iframe");if(null!==r)null===(e=r.contentWindow)||void 0===e||e.postMessage({theme:"github-".concat(n),type:"set-theme"},"https://utteranc.es/")}}),[n]),t?(0,i.jsx)("article",{className:s().root,id:"utterances",ref:function(e){if(e&&t&&0===document.querySelectorAll("#utterances > div").length){var r=document.createElement("div"),o=document.createElement("script");o.src="https://utteranc.es/client.js",o.async=!0,o.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),o.setAttribute("issue-term","pathname"),o.setAttribute("theme","github-".concat(n)),o.setAttribute("crossOrigin","anonymous"),r.appendChild(o),e.appendChild(r)}}}):null}},1790:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return h}});var r=n(8407),o=n(5598),s=n(5514),c=n(2766),a=n(4298),i=n.n(a),l=n(5893),u=r.ze.PROJECTS,d=!0;function h(e){return(0,l.jsxs)("section",{children:[(0,l.jsx)(i(),{src:"/js/content.js"}),(0,l.jsx)(s.Z,{description:e.header.excerpt,image:e.header.coverImage,title:e.header.title,url:"/".concat(u,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4])}),(0,l.jsx)(c.Z,{image:e.header.coverImage,lower:e.header.category,menu:u,title:e.header.title}),(0,l.jsx)(o.Z,{data:e})]})}},1533:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[...url]",function(){return n(1790)}])},7453:function(e){e.exports={"root-dark":"ContentGroup_root-dark__JhCOb","root-light":"ContentGroup_root-light__5Ejs7",meta:"ContentGroup_meta__4hvnJ",dimmer:"ContentGroup_dimmer__32u6y",prompt:"ContentGroup_prompt__1W0gK",image:"ContentGroup_image__2_b62",body:"ContentGroup_body__Zs1fx",list:"ContentGroup_list__UiwX5"}},4950:function(e){e.exports={root:"ContentLayout_root__H_K4s"}},7232:function(e){e.exports={root:"ContentMover_root__eZENJ","mover-wrapper":"ContentMover_mover-wrapper__KG7Lp",divider:"ContentMover_divider__Wpr6_","button-dark":"ContentMover_button-dark___kxwI","button-light":"ContentMover_button-light__tbX5F"}},6740:function(e){e.exports={"toc-dark":"ContentToc_toc-dark__IvpUr","toc-light":"ContentToc_toc-light__92X33"}},9147:function(e){e.exports={root:"Utterances_root__qKWZD"}},4298:function(e,t,n){e.exports=n(7829)}},function(e){e.O(0,[245,774,888,179],(function(){return t=1533,e(e.s=t);var t}));var t=e.O();_N_E=t}]);