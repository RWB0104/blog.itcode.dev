(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4866:function(t,e,n){"use strict";n.d(e,{XJ:function(){return r},SG:function(){return o},Jt:function(){return c},Jq:function(){return a}});function r(t){return Math.floor(Math.random()*t)}function o(t){var e=void 0===t?new Date:new Date(t);return{year:e.getFullYear().toString(),month:e.getMonth()+1>9?(e.getMonth()+1).toString():"0".concat(e.getMonth()+1),day:e.getDate()+1>9?e.getDate().toString():"0".concat(e.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],hour:e.getHours()>9?e.getHours().toString():"0".concat(e.getHours()),minute:e.getMinutes()>9?e.getMinutes().toString():"0".concat(e.getMinutes()),second:e.getSeconds()>9?e.getSeconds().toString():"0".concat(e.getSeconds())}}function c(t){if(t){var e=0;return t.reduce((function(t,n){var r=n.text,o=n.tag,c=n.depth;return c>e?(e++,t+='<ul><li><a href="#'.concat(o,'">').concat(r,"</a></li>")):c<e?(e--,t+='</ul><li><a href="#'.concat(o,'">').concat(r,"</a></li>")):t+='<li><a href="#'.concat(o,'">').concat(r,"</a></li>"),t}),"")+"</ul>"}return""}function a(t){var e=(new Date).getTime()-t.getTime();if(e>31536e6){var n=Math.floor(e/31536e6);return"".concat(n,"\ub144 \uc804")}if(e>2592e6){var r=Math.floor(e/2592e6);return"".concat(r,"\ub2ec \uc804")}if(e>864e5){var o=Math.floor(e/864e5);return"".concat(o,"\uc77c \uc804")}if(e>36e5){var c=Math.floor(e/36e5);return"".concat(c,"\uc2dc\uac04 \uc804")}if(e>6e4){var a=Math.floor(e/6e4);return"".concat(a,"\ubd84 \uc804")}return"0\ubd84 \uc804"}},8996:function(t,e,n){"use strict";n.d(e,{Z:function(){return R}});var r=n(5893),o=n(1749),c=n(7294),a=n(8463),i=n(9738),s=n(9956),l=n(951),u=n(9912),m=n(3901),g=n(2318),_=n(1907),p=n(7812),d=n(6037),x=n(4326),f=n(9945),h=n(1163),j=n(1472),Z=n(1733),y=n(4866),N=n(385),v=n.n(N),w=n(5035);function b(t){var e=t.item,n=e.header,o=n.title,N=n.excerpt,b=n.coverImage,T=n.type,k=n.category,R=n.date,S=e.url,M=(0,h.useRouter)(),C=(0,c.useState)(!1),D=C[0],I=C[1],E=(new Date).getTime()-new Date(e.header.date).getTime()<6048e5;return(0,r.jsxs)(a.Z,{className:v().root,children:[(0,r.jsxs)(i.Z,{onClick:function(){return M.push("/".concat(T,"/").concat(S[1],"/").concat(S[2],"/").concat(S[3],"/").concat(S[4]))},children:[(0,r.jsxs)(s.Z,{className:v()["image-wrapper"],children:[(0,r.jsx)(l.Z,{className:v().image,component:"img",image:b}),(0,r.jsx)(w.Z,{flag:E})]}),(0,r.jsxs)(u.Z,{className:v().wrapper,children:[(0,r.jsxs)(s.Z,{display:"grid",className:v()["category-wrapper"],gridTemplateColumns:"40px 1fr",alignItems:"center",children:[(0,r.jsx)(m.Z,{className:v()["category-image"],alt:k,src:Z.En[k]}),(0,r.jsx)(g.Z,{className:v().category,component:"h4",variant:"h4",gutterBottom:!0,children:k})]}),(0,r.jsx)(g.Z,{className:v().title,component:"h1",variant:"h3",gutterBottom:!0,children:o}),(0,r.jsx)(g.Z,{className:v().excerpt,children:N})]})]}),(0,r.jsxs)(_.Z,{className:v().footer,children:[(0,r.jsxs)(g.Z,{children:["\ud83d\udd54 ",(0,y.Jq)(new Date(R))]}),(0,r.jsx)(p.Z,{onClick:function(){return I(!D)},children:D?(0,r.jsx)(x.Z,{}):(0,r.jsx)(f.Z,{})})]}),(0,r.jsx)(d.Z,{in:D,unmountOnExit:!0,children:(0,r.jsx)(u.Z,{className:v()["footer-detail"],children:(0,r.jsx)(j.Z,{header:e.header})})})]})}var T=n(9723),k=n.n(T);function R(t){var e=t.list.map((function(t,e){return(0,r.jsx)(o.Z,{item:!0,className:k().item,children:(0,r.jsx)(b,{item:t})},e)}));return(0,r.jsx)(o.Z,{container:!0,className:k().root,children:e})}},1472:function(t,e,n){"use strict";n.d(e,{Z:function(){return x}});var r=n(5893),o=n(9956),c=n(2318),a=n(3901),i=n(1163),s=n(1267),l=n(4827),u=n.n(l);function m(t){var e=t.type,n=t.tags,o=(0,i.useRouter)(),c=n.map((function(t,n){return(0,r.jsx)(s.Z,{className:u().root,label:t,clickable:!0,onClick:function(){return o.push("/".concat(e,"/tag/").concat(t,"/1"))}},n)}));return(0,r.jsx)(r.Fragment,{children:c})}var g=n(4866),_=n(1733),p=n(4948),d=n.n(p);function x(t){var e=t.header,n=(0,i.useRouter)(),s=(0,g.SG)(e.date);return(0,r.jsxs)(o.Z,{component:"article",className:d().root,children:[(0,r.jsxs)(o.Z,{display:"grid",className:d().item,alignItems:"center",children:[(0,r.jsx)(c.Z,{className:d().text,children:"\ud83d\udcc6 \uc791\uc131\uc77c"}),(0,r.jsx)(c.Z,{className:d().text,children:"".concat(s.year,"-").concat(s.month,"-").concat(s.day," ").concat(s.week," ").concat(s.hour,":").concat(s.minute,":").concat(s.second)})]}),(0,r.jsxs)(o.Z,{display:"grid",className:d().item,alignItems:"center",children:[(0,r.jsx)(c.Z,{className:d().text,children:"\ud83d\udccc \uce74\ud14c\uace0\ub9ac"}),(0,r.jsxs)(o.Z,{display:"grid",gridTemplateColumns:"40px 1fr",alignItems:"center",gridColumnGap:10,children:[(0,r.jsx)(a.Z,{alt:e.category,src:_.En[e.category]}),(0,r.jsx)(c.Z,{className:d().link,onClick:function(){return n.push("/".concat(e.type,"/category/").concat(e.category,"/1"))},children:e.category})]})]}),(0,r.jsxs)(o.Z,{display:"grid",className:d().item,alignItems:"center",children:[(0,r.jsx)(c.Z,{className:d().text,children:"\ud83c\udff7\ufe0f \ud0dc\uadf8"}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(m,{type:e.type,tags:e.tag})})]})]})}},5035:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(5893),o=n(9956),c=n(6328),a=n.n(c),i=n(9757);function s(t){return t.flag?(0,r.jsx)(o.Z,{position:"absolute",className:a().root,top:10,right:10,children:(0,r.jsx)(i.Z,{})}):null}},8794:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(5893),o=n(9008),c=n(1733);function a(t){var e=t.title,n=t.description,a=void 0===n?c.dz:n,i=t.type,s=void 0===i?"website":i,l=t.url,u=void 0===l?"":l,m=t.image,g=void 0===m?"https://rwb0104.github.io/favicon.ico":m,_=t.locale,p=void 0===_?"ko_KR":_;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:e}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:site_name",content:c.R}),(0,r.jsx)("meta",{property:"og:title",content:e}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:type",content:s}),(0,r.jsx)("meta",{property:"og:url",content:"https://rwb0104.github.io".concat(u)}),(0,r.jsx)("meta",{property:"og:image",content:g}),(0,r.jsx)("meta",{property:"og:locale",content:p}),(0,r.jsx)("link",{rel:"canonical",href:"https://rwb0104.github.io".concat(u)})]})}},8494:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var r=n(5893),o=n(7294),c=n(9956),a=n(2318),i=n(5146),s=n.n(i);function l(t){var e=t.title,n=t.lower,i=t.image,l=t.special?s()["title-special"]:s().title,u=(0,o.useRef)(null);return(0,o.useEffect)((function(){u&&u.current&&(u.current.style.backgroundImage="url(".concat(i,")"))}),[]),(0,r.jsxs)(c.Z,{className:s().root,position:"relative",display:"grid",gridAutoRows:"auto",gridRowGap:100,alignContent:"center",children:[(0,r.jsx)(c.Z,{className:s()["image-wrapper"],position:"absolute",children:(0,r.jsx)("div",{ref:u,className:s()["image-basic"]})}),(0,r.jsx)(a.Z,{component:"h1",className:l,align:"center",children:e}),(0,r.jsx)(a.Z,{component:"h3",className:s().lower,align:"center",children:n})]})}},8676:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return y},default:function(){return N}});var r=n(5893),o=n(9956),c=n(7294),a=n(2318),i=n(4866),s=n(1733),l=n(1115),u=n.n(l);function m(){var t=(0,c.useRef)(null),e=(0,c.useRef)(null),n=(0,c.useRef)(null),l=(0,i.XJ)(s.TJ.length),m=s.TJ[l],g=m.title,_=m.author,p=m.images;return(0,c.useEffect)((function(){t&&t.current&&(t.current.style.backgroundImage="url(".concat(p,")")),e&&e.current&&(e.current.innerText=g),n&&n.current&&(n.current.innerText=_)})),(0,r.jsxs)(o.Z,{className:u().root,component:"article",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",children:[(0,r.jsx)(o.Z,{className:u().wrapper,position:"absolute",children:(0,r.jsx)("div",{ref:t,className:u().image})}),(0,r.jsxs)(o.Z,{display:"grid",children:[(0,r.jsx)(a.Z,{ref:e,component:"h1",className:u().title,gutterBottom:!0}),(0,r.jsx)(a.Z,{ref:n,component:"h3",className:u().sub})]})]})}var g=n(8494),_=n(3832),p=n(282),d=n(1163),x=n(8996),f=n(4115),h=n.n(f);function j(t){var e=t.num,n=t.title,o=t.url,c=t.list,i=(0,d.useRouter)();return(0,r.jsxs)(_.Z,{maxWidth:"md",className:h().root,children:[(0,r.jsx)(a.Z,{component:"h1",className:h().title,gutterBottom:!0,align:"center",children:n}),(0,r.jsx)(x.Z,{list:c.slice(0,e)}),(0,r.jsx)(p.Z,{className:h().more,onClick:function(){return i.push(o)},children:"M O R E"})]})}var Z=n(8794),y=!0;function N(t){var e=t.images,n=t.posts,c=t.projects,a=(0,i.XJ)(e.length);return(0,r.jsxs)(o.Z,{component:"section",children:[(0,r.jsx)(Z.Z,{title:s.R,description:s.dz,image:"/img/screener/".concat(e[a]),url:""}),(0,r.jsx)(g.Z,{title:s.R,lower:s.dz,image:"/img/screener/".concat(e[a]),special:!0}),(0,r.jsx)(j,{num:5,title:s.Tl[1].title,url:s.Tl[1].url,list:n}),(0,r.jsx)(m,{}),(0,r.jsx)(j,{num:5,title:s.Tl[2].title,url:s.Tl[2].url,list:c})]})}},5301:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8676)}])},385:function(t){t.exports={root:"contentitem_root__1P0Bl",image:"contentitem_image__2f-4s",wrapper:"contentitem_wrapper__vTyDZ",footer:"contentitem_footer__33S6R","footer-detail":"contentitem_footer-detail__3ZV0C","image-wrapper":"contentitem_image-wrapper__3K1fJ","category-wrapper":"contentitem_category-wrapper__2VWNG","category-image":"contentitem_category-image__1_86l",category:"contentitem_category__2-LFc",title:"contentitem_title__3t6yt",excerpt:"contentitem_excerpt__1-dpn"}},9723:function(t){t.exports={root:"contentlist_root__1_99K",item:"contentlist_item__2rNn8"}},4948:function(t){t.exports={root:"contentmeta_root__2CAt-",item:"contentmeta_item__1SXyL",text:"contentmeta_text__1TBw9",link:"contentmeta_link__3BUNg"}},4827:function(t){t.exports={root:"contenttags_root__x5Yka"}},6328:function(t){t.exports={root:"newcontent_root__3D8JR"}},1115:function(t){t.exports={root:"artbox_root__2SoaA",wrapper:"artbox_wrapper__23yI4",image:"artbox_image__LFR6m",title:"artbox_title__3zWWm",sub:"artbox_sub__3CUqK"}},5146:function(t){t.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","image-basic":"screener_image-basic__2aIiL","image-ios":"screener_image-ios__Imz4X",title:"screener_title__3mYUP",lower:"screener_lower__1iaX7","title-special":"screener_title-special__3RpLt"}},4115:function(t){t.exports={root:"contentscase_root__8L-m0",title:"contentscase_title__3MPr_",more:"contentscase_more__3F3uI",rotate:"contentscase_rotate__2eLfA"}}},function(t){t.O(0,[33,126,774,888,179],(function(){return e=5301,t(t.s=e);var e}));var e=t.O();_N_E=e}]);