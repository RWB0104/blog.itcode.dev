(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{5598:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(8407),s=n(5029),o=n(271),c=n(4950),i=n.n(c),a=n(7166),l=n.n(a),d=n(3836),u=n(7453),h=n.n(u),p=n(1664),_=n.n(p),m=n(2804),j=n(5893);function x(e){var t=e.urls,n=e.group,r=(0,m.sJ)(d.Oj),s=l().bind(h());if(n&&n.length>0){console.dir(n);var o="/".concat(n[0].header.type,"/").concat(t.slice(2,6).join("/")),c=n.map((function(e,t){var n=e.header.title,r="/".concat(e.header.type,"/").concat(e.url.slice(1,5).join("/"));return(0,j.jsx)("li",{children:o===r?(0,j.jsxs)("p",{title:n,children:["\ud83d\udc40 ",(0,j.jsx)("b",{children:n})]}):(0,j.jsx)(_(),{href:r,passHref:!0,children:(0,j.jsx)("a",{href:"#replace",title:n,children:n})})},t)})),i=n[0].header.group;return(0,j.jsxs)("article",{className:s("root",r),children:[(0,j.jsxs)("div",{className:s("meta"),children:[(0,j.jsx)("div",{className:s("dimmer"),children:(0,j.jsxs)("div",{className:s("prompt"),children:[(0,j.jsx)("h3",{className:s("title"),children:"\uc2dc\ub9ac\uc988 \ud1ba\uc544\ubcf4\uae30"}),(0,j.jsx)("p",{children:i})]})}),(0,j.jsx)("img",{alt:i,className:s("image"),src:n[0].header.coverImage,title:i})]}),(0,j.jsx)("div",{className:s("body"),children:(0,j.jsx)("ul",{className:s("list"),children:c})})]})}return null}var v=n(6987),f=n(7232),g=n.n(f),N=n(155);function b(e){var t=e.className,n=e.data,r=e.isNext;return n?(0,j.jsx)(_(),{href:"/".concat(null===n||void 0===n?void 0:n.header.type,"/").concat(null===n||void 0===n?void 0:n.url.slice(1,5).join("/")),passHref:!0,children:(0,j.jsxs)("a",{className:t,"data-prev":r,href:"#replace",title:n.header.title,children:[r&&(0,j.jsx)(N.O8Q,{}),(0,j.jsx)("p",{children:n.header.title}),!r&&(0,j.jsx)(N.qvS,{})]})}):null}function C(e){var t=e.page,n=t.prev,r=t.next,s=(0,m.sJ)(d.Oj),o=l().bind(g());return(0,j.jsxs)("article",{className:o("root"),children:[(0,j.jsxs)("div",{className:o("mover-wrapper"),children:[(0,j.jsx)("div",{children:(0,j.jsx)(b,{className:o("button",s),data:r,isNext:!0})}),(0,j.jsx)("div",{children:(0,j.jsx)(b,{className:o("button",s),data:n})})]}),(0,j.jsx)("hr",{className:o("divider")}),(0,j.jsx)("div",{children:(0,j.jsx)(_(),{href:"/".concat(t.type),passHref:!0,children:(0,j.jsxs)("a",{className:o("button",s),href:"#replace",title:"/".concat(t.type),children:[(0,j.jsx)(N.pLT,{}),(0,j.jsx)("p",{children:"\ubaa9\ub85d"})]})})})]})}var y=n(6740),k=n.n(y);function w(e){var t=e.toc,n=(0,m.sJ)(d.Oj),r=l().bind(k());return t?(0,j.jsxs)("div",{className:r("toc",n),children:[(0,j.jsx)("h2",{children:"Table of Contents"}),(0,j.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]}):null}var M=n(9008),O=n.n(M);function T(e){var t=e.content,n=(0,m.sJ)(d.Oj);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(O(),{children:(0,j.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",rel:"stylesheet"})}),(0,j.jsx)("div",{className:"markdown ".concat(n),dangerouslySetInnerHTML:{__html:t}})]})}function Z(e){var t,n,c,a=e.data,d=[a.header.type===r.ze.POSTS?"posts":"projects"].concat(a.url),u=l().bind(i()),h={next:null===(t=a.meta)||void 0===t?void 0:t.next,prev:null===(n=a.meta)||void 0===n?void 0:n.prev,type:a.header.type};return(0,j.jsxs)("article",{className:u("root"),children:[(0,j.jsx)(x,{group:null===(c=a.meta)||void 0===c?void 0:c.group,urls:d}),(0,j.jsx)(w,{toc:a.toc}),(0,j.jsx)(s.Z,{urls:d}),(0,j.jsx)(T,{content:a.content}),(0,j.jsx)(v.Z,{header:a.header}),(0,j.jsx)(C,{page:h}),(0,j.jsx)(o.Z,{flag:a.header.comment})]})}},271:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3836),s=n(9147),o=n.n(s),c=n(2804),i=n(5893);function a(e){var t=e.flag,n=(0,c.sJ)(r.Oj);return t?(0,i.jsx)("article",{className:o().root,id:"utterances",ref:function(e){if(e)if(0===document.querySelectorAll("#utterances > div").length){var t=document.createElement("div"),r=document.createElement("script");r.src="https://utteranc.es/client.js",r.async=!0,r.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),r.setAttribute("issue-term","pathname"),r.setAttribute("theme","github-".concat(n)),r.setAttribute("crossOrigin","anonymous"),t.appendChild(r),e.appendChild(t)}else{var s=document.createElement("div"),o=document.createElement("script");o.src="https://utteranc.es/client.js",o.async=!0,o.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),o.setAttribute("issue-term","pathname"),o.setAttribute("theme","github-".concat(n)),o.setAttribute("crossOrigin","anonymous"),s.appendChild(o),e.innerHTML="",e.appendChild(s)}}}):null}},1790:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return h}});var r=n(8407),s=n(5598),o=n(5514),c=n(2766),i=n(4298),a=n.n(i),l=n(5893),d=r.ze.PROJECTS,u=!0;function h(e){return(0,l.jsxs)("section",{children:[(0,l.jsx)(a(),{src:"/js/content.js"}),(0,l.jsx)(o.Z,{description:e.header.excerpt,image:e.header.coverImage,title:e.header.title,url:"/".concat(d,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4])}),(0,l.jsx)(c.Z,{image:e.header.coverImage,lower:e.header.category,menu:d,title:e.header.title}),(0,l.jsx)(s.Z,{data:e})]})}},1533:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/[...url]",function(){return n(1790)}])},7453:function(e){e.exports={root:"ContentGroup_root__HcWZq",dark:"ContentGroup_dark__N4l0u",light:"ContentGroup_light__flnmu",meta:"ContentGroup_meta__4hvnJ",dimmer:"ContentGroup_dimmer__32u6y",prompt:"ContentGroup_prompt__1W0gK",image:"ContentGroup_image__2_b62",body:"ContentGroup_body__Zs1fx",list:"ContentGroup_list__UiwX5"}},4950:function(e){e.exports={root:"ContentLayout_root__H_K4s"}},7232:function(e){e.exports={button:"ContentMover_button__Wy9_N",dark:"ContentMover_dark__RVMNR",light:"ContentMover_light__MXdUR",root:"ContentMover_root__eZENJ","mover-wrapper":"ContentMover_mover-wrapper__KG7Lp",divider:"ContentMover_divider__Wpr6_"}},6740:function(e){e.exports={toc:"ContentToc_toc__WK9R9",dark:"ContentToc_dark__Xgv17",light:"ContentToc_light__fcMil"}},9147:function(e){e.exports={root:"Utterances_root__qKWZD"}},4298:function(e,t,n){e.exports=n(7829)}},function(e){e.O(0,[245,774,888,179],(function(){return t=1533,e(e.s=t);var t}));var t=e.O();_N_E=t}]);