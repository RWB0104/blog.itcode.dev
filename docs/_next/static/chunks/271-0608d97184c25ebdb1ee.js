(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[271],{4866:function(t,e,n){"use strict";n.d(e,{XJ:function(){return r},SG:function(){return c},Jt:function(){return o},Jq:function(){return a}});function r(t){return Math.floor(Math.random()*t)}function c(t){var e=void 0===t?new Date:new Date(t);return{year:e.getFullYear().toString(),month:e.getMonth()+1>9?(e.getMonth()+1).toString():"0".concat(e.getMonth()+1),day:e.getDate()+1>9?e.getDate().toString():"0".concat(e.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],hour:e.getHours()>9?e.getHours().toString():"0".concat(e.getHours()),minute:e.getMinutes()>9?e.getMinutes().toString():"0".concat(e.getMinutes()),second:e.getSeconds()>9?e.getSeconds().toString():"0".concat(e.getSeconds())}}function o(t){if(t){var e=0;return t.reduce((function(t,n){var r=n.text,c=n.tag,o=n.depth;return o>e?(e++,t+='<ul><li><a href="#'.concat(c,'">').concat(r,"</a></li>")):o<e?(e--,t+='</ul><li><a href="#'.concat(c,'">').concat(r,"</a></li>")):t+='<li><a href="#'.concat(c,'">').concat(r,"</a></li>"),t}),"")+"</ul>"}return""}function a(t){var e=(new Date).getTime()-t.getTime();if(e>31536e6){var n=Math.floor(e/31536e6);return"".concat(n,"\ub144 \uc804")}if(e>2592e6){var r=Math.floor(e/2592e6);return"".concat(r,"\ub2ec \uc804")}if(e>864e5){var c=Math.floor(e/864e5);return"".concat(c,"\uc77c \uc804")}if(e>36e5){var o=Math.floor(e/36e5);return"".concat(o,"\uc2dc\uac04 \uc804")}if(e>6e4){var a=Math.floor(e/6e4);return"".concat(a,"\ubd84 \uc804")}return"0\ubd84 \uc804"}},1231:function(t,e,n){"use strict";n.d(e,{Z:function(){return I}});var r=n(5893),c=n(9956),o=n(3832),a=n(8920),s=n(9008);function i(t){var e=t.content,n=(0,a.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"})}),(0,r.jsx)("div",{className:"markdown ".concat(n.palette.type),dangerouslySetInnerHTML:{__html:e}})]})}var l=n(2318),u=n(4866),d=n(7869),m=n.n(d);function p(t){var e=t.toc,n=(0,a.Z)();return e&&e.length>0?(0,r.jsxs)(c.Z,{className:m()["toc-".concat(n.palette.type)],children:[(0,r.jsx)(l.Z,{component:"h2",variant:"h2",align:"center",children:"Table of Contents"}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,u.Jt)(e)}})]}):null}var h=n(3629),g=n(1163),_=n(5695),x=n.n(_);function f(t){var e=t.group,n=(0,g.useRouter)();if(e&&e.length>0){var o=(e=e.length>20?e.slice(0,20):e).map((function(t,e){return(0,r.jsx)(c.Z,{className:x().item,children:(0,r.jsxs)(h.Z,{className:x().button,onClick:function(){return n.push("/".concat(t.header.type,"/").concat(t.url[1],"/").concat(t.url[2],"/").concat(t.url[3],"/").concat(t.url[4]))},children:[(0,r.jsx)("img",{src:t.header.coverImage}),(0,r.jsx)(c.Z,{className:x()["label-wrapper"],children:(0,r.jsx)(l.Z,{className:x().label,children:t.header.title})})]})},e)}));return(0,r.jsxs)(c.Z,{component:"article",className:x().root,children:[(0,r.jsxs)(l.Z,{component:"h4",variant:"h4",className:x().title,children:["\ud83e\uddf2 \uc5f0\uad00 \uac8c\uc2dc\ubb3c - ",e[0].header.group]}),(0,r.jsx)(c.Z,{className:x().list,children:o})]})}return null}var j=n(1472),v=n(5517),y=n(282),Z=n(1587),b=n(731),N=n.n(b);function k(t){var e=t.page,n=(0,g.useRouter)(),o=e.prev,a=e.next;return(0,r.jsxs)(c.Z,{component:"article",className:N().root,children:[(0,r.jsxs)(c.Z,{display:"flex",justifyContent:"space-between",children:[(0,r.jsx)(w,{data:o}),(0,r.jsx)(w,{data:a})]}),(0,r.jsx)(v.Z,{className:N().divider}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(y.Z,{className:N().menu,variant:"outlined",startIcon:(0,r.jsx)(Z.Z,{}),onClick:function(){return n.push("/".concat(e.type))},children:"\ubaa9\ub85d"})})]})}function w(t){var e=t.data,n=(0,g.useRouter)(),o=(0,a.Z)().palette.type;if(null===e)return null;var s=null===e||void 0===e?void 0:e.url;return(0,r.jsx)(h.Z,{className:N()["button-".concat(o)],onClick:function(){return n.push("/".concat(null===e||void 0===e?void 0:e.header.type,"/").concat(s[1],"/").concat(s[2],"/").concat(s[3],"/").concat(s[4]))},children:(0,r.jsx)(c.Z,{children:e.header.title})})}var M=n(7294),S=n(329),R=n.n(S);function C(t){var e=t.flag,n=(0,a.Z)().palette.type;return(0,M.useEffect)((function(){if(e)if(0===document.querySelectorAll("#utterances > div").length){var t,r=document.createElement("div"),c=document.createElement("script");c.src="https://utteranc.es/client.js",c.async=!0,c.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),c.setAttribute("issue-term","pathname"),c.setAttribute("theme","github-".concat(n)),c.setAttribute("crossOrigin","anonymous"),r.appendChild(c),null===(t=document.getElementById("utterances"))||void 0===t||t.appendChild(r)}else{var o,a=document.querySelector("#utterances iframe");if(null!==a)null===(o=a.contentWindow)||void 0===o||o.postMessage({type:"set-theme",theme:"github-".concat(n)},"https://utteranc.es/")}})),e?(0,r.jsx)(c.Z,{className:R().root,component:"article",id:"utterances"}):null}var E=n(4620);function I(t){var e=t.page,n=t.data,a=t.group,s=[e.type].concat(n.url);return(0,r.jsx)(c.Z,{position:"relative",children:(0,r.jsxs)(o.Z,{maxWidth:"md",children:[(0,r.jsx)(p,{toc:n.toc}),(0,r.jsx)(E.Z,{urls:s}),(0,r.jsx)(i,{content:n.content}),(0,r.jsx)(f,{group:a}),(0,r.jsx)(j.Z,{header:n.header}),(0,r.jsx)(k,{page:e}),(0,r.jsx)(C,{flag:n.header.comment})]})})}},1472:function(t,e,n){"use strict";n.d(e,{Z:function(){return _}});var r=n(5893),c=n(9956),o=n(2318),a=n(3901),s=n(1163),i=n(1267),l=n(4827),u=n.n(l);function d(t){var e=t.type,n=t.tags,c=(0,s.useRouter)(),o=n.map((function(t,n){return(0,r.jsx)(i.Z,{className:u().root,label:t,clickable:!0,onClick:function(){return c.push("/".concat(e,"/tag/").concat(t,"/1"))}},n)}));return(0,r.jsx)(r.Fragment,{children:o})}var m=n(4866),p=n(1733),h=n(4948),g=n.n(h);function _(t){var e=t.header,n=(0,s.useRouter)(),i=(0,m.SG)(e.date);return(0,r.jsxs)(c.Z,{component:"article",className:g().root,children:[(0,r.jsxs)(c.Z,{display:"grid",className:g().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:g().text,children:"\ud83d\udcc6 \uc791\uc131\uc77c"}),(0,r.jsx)(o.Z,{className:g().text,children:"".concat(i.year,"-").concat(i.month,"-").concat(i.day," ").concat(i.week," ").concat(i.hour,":").concat(i.minute,":").concat(i.second)})]}),(0,r.jsxs)(c.Z,{display:"grid",className:g().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:g().text,children:"\ud83d\udcda \uce74\ud14c\uace0\ub9ac"}),(0,r.jsxs)(c.Z,{display:"grid",gridTemplateColumns:"40px 1fr",alignItems:"center",gridColumnGap:10,children:[(0,r.jsx)(a.Z,{alt:e.category,src:p.En[e.category]||"https://user-images.githubusercontent.com/50317129/132937376-276bf532-841b-4f80-9ba7-d05063ee6e92.png"}),(0,r.jsx)(o.Z,{className:g().link,onClick:function(){return n.push("/".concat(e.type,"/category/").concat(e.category,"/1"))},children:e.category})]})]}),(0,r.jsxs)(c.Z,{display:"grid",className:g().item,alignItems:"center",children:[(0,r.jsx)(o.Z,{className:g().text,children:"\ud83c\udff7\ufe0f \ud0dc\uadf8"}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(d,{type:e.type,tags:e.tag})})]})]})}},8794:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(5893),c=n(9008),o=n(1733);function a(t){var e=t.title,n=t.description,a=void 0===n?o.dz:n,s=t.type,i=void 0===s?"website":s,l=t.url,u=void 0===l?"":l,d=t.image,m=void 0===d?"/favicon.ico":d,p=t.locale,h=void 0===p?"ko_KR":p;return(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"".concat(e," - ").concat(o.R)}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:site_name",content:o.R}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(e," - ").concat(o.R)}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:type",content:i}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(o._n).concat(u)}),(0,r.jsx)("meta",{property:"og:image",content:m}),(0,r.jsx)("meta",{property:"og:locale",content:h}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(o._n).concat(u)})]})}},8494:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5893),c=n(7294),o=n(9956),a=n(2318),s=n(5146),i=n.n(s);function l(t){var e=t.title,n=t.lower,s=t.image,l=t.special?i()["title-special"]:i().title,u=(0,c.useRef)(null),d=(0,c.useRef)(null);(0,c.useEffect)((function(){/(.mp4|webm)$/.test(s)?u&&u.current&&(u.current.src=s):d&&d.current&&(d.current.style.backgroundImage="url(".concat(s,")"))}),[s]);var m=/(.mp4|webm)$/.test(s)?(0,r.jsxs)(o.Z,{className:i()["image-wrapper"],children:[(0,r.jsx)("video",{ref:u,className:i().media,autoPlay:!0,loop:!0,muted:!0,children:(0,r.jsx)("source",{src:s})}),(0,r.jsx)("div",{className:i().plate})]}):(0,r.jsx)(o.Z,{className:i()["image-wrapper"],children:(0,r.jsx)("div",{ref:d,className:i()["image-basic"]})});return(0,r.jsxs)(o.Z,{className:i().root,children:[m,(0,r.jsx)(a.Z,{component:"h1",className:l,align:"center",children:e}),(0,r.jsx)(a.Z,{component:"h3",className:i().lower,align:"center",children:n})]})}},5695:function(t){t.exports={root:"contentgroup_root__393Yi",title:"contentgroup_title__14YEL",list:"contentgroup_list__1HHxc",item:"contentgroup_item__1sEJk",button:"contentgroup_button__1Zz1J","label-wrapper":"contentgroup_label-wrapper__3L-So",label:"contentgroup_label__5f_Ku"}},4948:function(t){t.exports={root:"contentmeta_root__2CAt-",item:"contentmeta_item__1SXyL",text:"contentmeta_text__1TBw9",link:"contentmeta_link__3BUNg"}},731:function(t){t.exports={root:"contentmover_root__B7rpT",divider:"contentmover_divider__14jgu","button-dark":"contentmover_button-dark__3zOui","button-light":"contentmover_button-light__36Q1m",menu:"contentmover_menu__E6t4v"}},4827:function(t){t.exports={root:"contenttags_root__x5Yka"}},7869:function(t){t.exports={"toc-dark":"contenttoc_toc-dark__OVber","toc-light":"contenttoc_toc-light__KRzMn"}},329:function(t){t.exports={root:"utterances_root__33E-l"}},5146:function(t){t.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","image-basic":"screener_image-basic__2aIiL",media:"screener_media__MeuyJ",plate:"screener_plate__2YHjh",title:"screener_title__3mYUP",lower:"screener_lower__1iaX7","title-special":"screener_title-special__3RpLt"}}}]);