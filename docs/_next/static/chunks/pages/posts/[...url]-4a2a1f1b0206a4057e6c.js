(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{4866:function(t,e,n){"use strict";n.d(e,{XJ:function(){return r},SG:function(){return c},Jt:function(){return o},Jq:function(){return a}});function r(t){return Math.floor(Math.random()*t)}function c(t){var e=void 0===t?new Date:new Date(t);return{year:e.getFullYear().toString(),month:e.getMonth()+1>9?(e.getMonth()+1).toString():"0".concat(e.getMonth()+1),day:e.getDate()+1>9?e.getDate().toString():"0".concat(e.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],hour:e.getHours()>9?e.getHours().toString():"0".concat(e.getHours()),minute:e.getMinutes()>9?e.getMinutes().toString():"0".concat(e.getMinutes()),second:e.getSeconds()>9?e.getSeconds().toString():"0".concat(e.getSeconds())}}function o(t){if(t){var e=0;return t.reduce((function(t,n){var r=n.text,c=n.tag,o=n.depth;return o>e?(e++,t+='<ul><li><a href="#'.concat(c,'">').concat(r,"</a></li>")):o<e?(e--,t+='</ul><li><a href="#'.concat(c,'">').concat(r,"</a></li>")):t+='<li><a href="#'.concat(c,'">').concat(r,"</a></li>"),t}),"")+"</ul>"}return""}function a(t){var e=(new Date).getTime()-t.getTime();if(e>31536e6){var n=Math.floor(e/31536e6);return"".concat(n,"\ub144 \uc804")}if(e>2592e6){var r=Math.floor(e/2592e6);return"".concat(r,"\ub2ec \uc804")}if(e>864e5){var c=Math.floor(e/864e5);return"".concat(c,"\uc77c \uc804")}if(e>36e5){var o=Math.floor(e/36e5);return"".concat(o,"\uc2dc\uac04 \uc804")}if(e>6e4){var a=Math.floor(e/6e4);return"".concat(a,"\ubd84 \uc804")}return"0\ubd84 \uc804"}},1472:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var r=n(5893),c=n(9956),o=n(2318),a=n(3901),i=n(1163),s=n(1267),l=n(4827),u=n.n(l);function d(t){var e=t.type,n=t.tags,c=(0,i.useRouter)(),o=n.map((function(t,n){return(0,r.jsx)(s.Z,{className:u().root,label:t,clickable:!0,onClick:function(){return c.push("/".concat(e,"/tag/").concat(t,"/1"))}},n)}));return(0,r.jsx)(r.Fragment,{children:o})}var p=n(4866),m=n(1733),g=n(4948),h=n.n(g);function _(t){var e=t.header,n=(0,i.useRouter)(),s=(0,p.SG)(e.date);return(0,r.jsxs)(c.Z,{component:"article",className:h().root,children:[(0,r.jsxs)(c.Z,{display:"grid",className:h().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:h().text,children:"\ud83d\udcc6 \uc791\uc131\uc77c"}),(0,r.jsx)(o.Z,{className:h().text,children:"".concat(s.year,"-").concat(s.month,"-").concat(s.day," ").concat(s.week," ").concat(s.hour,":").concat(s.minute,":").concat(s.second)})]}),(0,r.jsxs)(c.Z,{display:"grid",className:h().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:h().text,children:"\ud83d\udccc \uce74\ud14c\uace0\ub9ac"}),(0,r.jsxs)(c.Z,{display:"grid",gridTemplateColumns:"40px 1fr",alignItems:"center",gridColumnGap:10,children:[(0,r.jsx)(a.Z,{alt:e.category,src:m.En[e.category]}),(0,r.jsx)(o.Z,{className:h().link,onClick:function(){return n.push("/".concat(e.type,"/category/").concat(e.category,"/1"))},children:e.category})]})]}),(0,r.jsxs)(c.Z,{display:"grid",className:h().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:h().text,children:"\ud83c\udff7\ufe0f \ud0dc\uadf8"}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(d,{type:e.type,tags:e.tag})})]})]})}},8794:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(5893),c=n(9008),o=n(1733);function a(t){var e=t.title,n=t.description,a=void 0===n?o.dz:n,i=t.type,s=void 0===i?"website":i,l=t.url,u=void 0===l?"":l,d=t.image,p=void 0===d?"https://rwb0104.github.io/favicon.ico":d,m=t.locale,g=void 0===m?"ko_KR":m;return(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"".concat(e," - Kapoo")}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:site_name",content:o.R}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(e," - Kapoo")}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:type",content:s}),(0,r.jsx)("meta",{property:"og:url",content:"https://rwb0104.github.io".concat(u)}),(0,r.jsx)("meta",{property:"og:image",content:p}),(0,r.jsx)("meta",{property:"og:locale",content:g}),(0,r.jsx)("link",{rel:"canonical",href:"https://rwb0104.github.io".concat(u)})]})}},8494:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5893),c=n(7294),o=n(9956),a=n(2318),i=n(5146),s=n.n(i);function l(t){var e=t.title,n=t.lower,i=t.image,l=t.special?s()["title-special"]:s().title,u=(0,c.useRef)(null);return(0,c.useEffect)((function(){u&&u.current&&(u.current.style.backgroundImage="url(".concat(i,")"))}),[]),(0,r.jsxs)(o.Z,{className:s().root,position:"relative",display:"grid",gridAutoRows:"auto",gridRowGap:100,alignContent:"center",children:[(0,r.jsx)(o.Z,{className:s()["image-wrapper"],position:"absolute",children:(0,r.jsx)("div",{ref:u,className:s()["image-basic"]})}),(0,r.jsx)(a.Z,{component:"h1",className:l,align:"center",children:e}),(0,r.jsx)(a.Z,{component:"h3",className:s().lower,align:"center",children:n})]})}},2162:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return H},default:function(){return A}});var r=n(5893),c=n(9956),o=n(3832),a=n(8920),i=n(9008);function s(t){var e=t.content,n=(0,a.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"})}),(0,r.jsx)("div",{className:"markdown ".concat(n.palette.type),dangerouslySetInnerHTML:{__html:e}})]})}var l=n(2318),u=n(4866),d=n(7869),p=n.n(d);function m(t){var e=t.toc,n=(0,a.Z)();return e&&e.length>0?(0,r.jsxs)(c.Z,{className:p()["toc-".concat(n.palette.type)],children:[(0,r.jsx)(l.Z,{component:"h2",variant:"h2",align:"center",children:"Table of Contents"}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,u.Jt)(e)}})]}):null}var g=n(6445),h=n(1163),_=n(5695),x=n.n(_);function f(t){var e=t.group,n=(0,h.useRouter)();if(e&&e.length>0){var o=(e=e.length>20?e.slice(0,20):e).map((function(t,e){return(0,r.jsx)(c.Z,{className:x().item,children:(0,r.jsxs)(g.Z,{className:x().button,onClick:function(){return n.push("/".concat(t.header.type,"/").concat(t.url[1],"/").concat(t.url[2],"/").concat(t.url[3],"/").concat(t.url[4]))},children:[(0,r.jsx)("img",{src:t.header.coverImage}),(0,r.jsx)(c.Z,{className:x()["label-wrapper"],children:(0,r.jsx)(l.Z,{className:x().label,children:t.header.title})})]})},e)}));return(0,r.jsxs)(c.Z,{component:"article",className:x().root,children:[(0,r.jsxs)(l.Z,{component:"h4",variant:"h4",className:x().title,children:["\ud83e\uddf2 \uc5f0\uad00 \uac8c\uc2dc\ubb3c - ",e[0].header.group]}),(0,r.jsx)(c.Z,{className:x().list,children:o})]})}return null}var j=n(1472),v=n(5517),y=n(282),Z=n(1587),b=n(731),N=n.n(b);function w(t){var e=t.page,n=(0,h.useRouter)(),o=e.prev,a=e.next;return(0,r.jsxs)(c.Z,{component:"article",className:N().root,children:[(0,r.jsxs)(c.Z,{display:"flex",justifyContent:"space-between",children:[(0,r.jsx)(k,{data:o}),(0,r.jsx)(k,{data:a})]}),(0,r.jsx)(v.Z,{className:N().divider}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(y.Z,{className:N().menu,variant:"outlined",startIcon:(0,r.jsx)(Z.Z,{}),onClick:function(){return n.push("/".concat(e.type))},children:"\ubaa9\ub85d"})})]})}function k(t){var e=t.data,n=(0,h.useRouter)(),o=(0,a.Z)().palette.type;if(null===e)return null;var i=null===e||void 0===e?void 0:e.url;return(0,r.jsx)(g.Z,{className:N()["button-".concat(o)],onClick:function(){return n.push("/".concat(null===e||void 0===e?void 0:e.header.type,"/").concat(i[1],"/").concat(i[2],"/").concat(i[3],"/").concat(i[4]))},children:(0,r.jsx)(c.Z,{children:e.header.title})})}var S=n(7294),M=n(329),C=n.n(M);function E(t){var e=t.flag,n=(0,a.Z)().palette.type;return(0,S.useEffect)((function(){if(e)if(0===document.querySelectorAll("#utterances > div").length){var t,r=document.createElement("div"),c=document.createElement("script");c.src="https://utteranc.es/client.js",c.async=!0,c.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),c.setAttribute("issue-term","pathname"),c.setAttribute("theme","github-".concat(n)),c.setAttribute("crossOrigin","anonymous"),r.appendChild(c),null===(t=document.getElementById("utterances"))||void 0===t||t.appendChild(r)}else{var o,a=document.querySelector("#utterances iframe");if(null!==a)null===(o=a.contentWindow)||void 0===o||o.postMessage({type:"set-theme",theme:"github-".concat(n)},"https://utteranc.es/")}})),e?(0,r.jsx)(c.Z,{className:C().root,component:"article",id:"utterances"}):null}function I(t){var e=t.page,n=t.data,a=t.group;return(0,r.jsx)(c.Z,{position:"relative",children:(0,r.jsxs)(o.Z,{maxWidth:"md",children:[(0,r.jsx)(m,{toc:n.toc}),(0,r.jsx)(s,{content:n.content}),(0,r.jsx)(f,{group:a}),(0,r.jsx)(j.Z,{header:n.header}),(0,r.jsx)(w,{page:e}),(0,r.jsx)(E,{flag:n.header.comment})]})})}var R=n(8794),T=n(8494),H=!0;function A(t){var e=t.page,n=t.group,o=t.data,a=o.url;return(0,r.jsxs)(c.Z,{component:"section",children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("script",{src:"/js/content.js"})}),(0,r.jsx)(R.Z,{title:o.header.title,description:o.header.excerpt,url:"/".concat(o.header.type,"/").concat(a[1],"/").concat(a[2],"/").concat(a[3],"/").concat(a[4]),image:o.header.coverImage}),(0,r.jsx)(T.Z,{title:o.header.title,lower:o.header.category,image:o.header.coverImage}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(I,{page:e,group:n,data:o})})]})}},5334:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[...url]",function(){return n(2162)}])},5695:function(t){t.exports={root:"contentgroup_root__393Yi",title:"contentgroup_title__14YEL",list:"contentgroup_list__1HHxc",item:"contentgroup_item__1sEJk",button:"contentgroup_button__1Zz1J","label-wrapper":"contentgroup_label-wrapper__3L-So",label:"contentgroup_label__5f_Ku"}},4948:function(t){t.exports={root:"contentmeta_root__2CAt-",item:"contentmeta_item__1SXyL",text:"contentmeta_text__1TBw9",link:"contentmeta_link__3BUNg"}},731:function(t){t.exports={root:"contentmover_root__B7rpT",divider:"contentmover_divider__14jgu","button-dark":"contentmover_button-dark__3zOui","button-light":"contentmover_button-light__36Q1m",menu:"contentmover_menu__E6t4v"}},4827:function(t){t.exports={root:"contenttags_root__x5Yka"}},7869:function(t){t.exports={"toc-dark":"contenttoc_toc-dark__OVber","toc-light":"contenttoc_toc-light__KRzMn"}},329:function(t){t.exports={root:"utterances_root__33E-l"}},5146:function(t){t.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","image-basic":"screener_image-basic__2aIiL","image-ios":"screener_image-ios__Imz4X",title:"screener_title__3mYUP",lower:"screener_lower__1iaX7","title-special":"screener_title-special__3RpLt"}}},function(t){t.O(0,[33,774,888,179],(function(){return e=5334,t(t.s=e);var e}));var e=t.O();_N_E=e}]);