(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{92301:function(e,t,r){"use strict";r.r(t),r.d(t,{unstable_composeClasses:function(){return n.Z}});var n=r(12688)},90394:function(e,t,r){"use strict";var n=r(47255);t.Z=void 0;var a=n(r(19448)),i=r(92711),o=(0,a.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.Z=o},56857:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(91147),a=r(87152),i=r(19278),o=r(72337),s=r(12688),l=r(27245),c=r(15835),u=r(81467),d=r(92711),f=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=r(19219),p=r(85402);function g(e){return(0,p.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=e=>{let{classes:t,variant:r,colorDefault:n}=e;return(0,s.Z)({root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]},g,t)},v=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),y=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),j=i.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:u,component:f="div",imgProps:h,sizes:p,src:g,srcSet:j,variant:w="circular"}=r,Z=(0,n.Z)(r,m),_=null,M=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){let[a,o]=i.useState(!1);return i.useEffect(()=>{if(!r&&!n)return;o(!1);let a=!0,i=new Image;return i.onload=()=>{a&&o("loaded")},i.onerror=()=>{a&&o("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=r,n&&(i.srcset=n),()=>{a=!1}},[e,t,r,n]),a}((0,a.Z)({},h,{src:g,srcSet:j})),k=g||j,P=k&&"error"!==M,O=(0,a.Z)({},r,{colorDefault:!P,component:f,variant:w}),C=x(O);return _=P?(0,d.jsx)(y,(0,a.Z)({alt:s,src:g,srcSet:j,sizes:p,ownerState:O,className:C.img},h)):null!=l?l:k&&s?s[0]:(0,d.jsx)(b,{ownerState:O,className:C.fallback}),(0,d.jsx)(v,(0,a.Z)({as:f,ownerState:O,className:(0,o.Z)(C.root,u),ref:t},Z,{children:_}))});var w=j},26500:function(e,t,r){"use strict";var n=r(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(r(33857));var a=r(1123),i=n(r(66809)),o=n(r(60470)),s=n(r(44662));let l=(0,a.createContainer)({createStyledComponent:(0,o.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,i.default)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,s.default)({props:e,name:"MuiContainer"})});t.default=l},34448:function(e,t,r){"use strict";var n=r(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getContainerUtilityClass=function(e){return(0,i.default)("MuiContainer",e)};var a=r(93906),i=n(r(76611));let o=(0,a.unstable_generateUtilityClasses)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);t.default=o},87709:function(e,t,r){"use strict";var n=r(47255);Object.defineProperty(t,"__esModule",{value:!0});var a={containerClasses:!0};Object.defineProperty(t,"containerClasses",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=n(r(26500)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(r(34448));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}Object.keys(o).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(a,e))&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))})},84168:function(e,t,r){"use strict";var n=r(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TypographyRoot=void 0;var a=n(r(77026)),i=n(r(92589)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(r(19278));n(r(33857));var s=n(r(29706)),l=r(1123),c=r(92301),u=n(r(60470)),d=n(r(44662)),f=n(r(66809)),h=r(56040),p=r(92711);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}let x=e=>{let{align:t,gutterBottom:r,noWrap:n,paragraph:a,variant:i,classes:o}=e,s={root:["root",i,"inherit"!==e.align&&`align${(0,f.default)(t)}`,r&&"gutterBottom",n&&"noWrap",a&&"paragraph"]};return(0,c.unstable_composeClasses)(s,h.getTypographyUtilityClass,o)},v=(0,u.default)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,f.default)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,i.default)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}));t.TypographyRoot=v;let y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>b[e]||e,w=o.forwardRef(function(e,t){let r=(0,d.default)({props:e,name:"MuiTypography"}),n=j(r.color),o=(0,l.unstable_extendSxProp)((0,i.default)({},r,{color:n})),{align:c="inherit",className:u,component:f,gutterBottom:h=!1,noWrap:m=!1,paragraph:b=!1,variant:w="body1",variantMapping:Z=y}=o,_=(0,a.default)(o,g),M=(0,i.default)({},o,{align:c,color:n,className:u,component:f,gutterBottom:h,noWrap:m,paragraph:b,variant:w,variantMapping:Z}),k=f||(b?"p":Z[w]||y[w])||"span",P=x(M);return(0,p.jsx)(v,(0,i.default)({as:k,ref:t,ownerState:M,className:(0,s.default)(P.root,u)},_))});t.default=w},2902:function(e,t,r){"use strict";var n=r(47255);Object.defineProperty(t,"__esModule",{value:!0});var a={typographyClasses:!0};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"typographyClasses",{enumerable:!0,get:function(){return o.default}});var i=n(r(84168)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}(r(56040));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}Object.keys(o).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(a,e))&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))})},56040:function(e,t,r){"use strict";var n=r(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getTypographyUtilityClass=function(e){return(0,i.default)("MuiTypography",e)};var a=r(93906),i=n(r(76611));let o=(0,a.unstable_generateUtilityClasses)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);t.default=o},66809:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(93906).unstable_capitalize;t.default=n},76402:function(e,t,r){Promise.resolve().then(r.bind(r,67737)),Promise.resolve().then(r.bind(r,20349)),Promise.resolve().then(r.bind(r,62638)),Promise.resolve().then(r.bind(r,90405)),Promise.resolve().then(r.bind(r,25262)),Promise.resolve().then(r.bind(r,23099)),Promise.resolve().then(r.bind(r,35550)),Promise.resolve().then(r.bind(r,47633)),Promise.resolve().then(r.t.bind(r,87709,23)),Promise.resolve().then(r.bind(r,4829)),Promise.resolve().then(r.bind(r,35631)),Promise.resolve().then(r.t.bind(r,2902,23)),Promise.resolve().then(r.bind(r,25018)),Promise.resolve().then(r.bind(r,46727)),Promise.resolve().then(r.bind(r,65583)),Promise.resolve().then(r.t.bind(r,16259,23))},17706:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(92711),a=r(49306),i=r(99507),o=r(54783),s=r.n(o),l=r(19278),c=r(49222),u=r.n(c);let d=s().bind(u());var f=function(e){let{alt:t,width:r,height:o,className:s,onError:c,onLoad:u,...f}=e,[h,p]=(0,l.useState)("loading"),g=(0,l.useCallback)(e=>{p("error"),c&&c(e)},[c,p]),m=(0,l.useCallback)(e=>{p("success"),u&&u(e)},[u,p]);return(0,n.jsxs)(i.Z,{"data-component":"Image",height:o,position:"relative",width:r,children:[(0,n.jsx)("img",{alt:t,className:d("image",{loading:"success"!==h},s),"data-status":h,height:"100%",width:"100%",onError:g,onLoad:m,...f}),"success"===h?null:(0,n.jsx)(i.Z,{alignItems:"center",height:o,justifyContent:"center",left:0,position:"absolute",top:0,width:r,children:(0,n.jsx)(a.Z,{iconName:"error"===h?"empty":"image",maxWidth:300,width:"75%"})})]})}},49306:function(e,t,r){"use strict";var n=r(58628);t.Z=n.default},542:function(e,t,r){"use strict";r.d(t,{Z:function(){return M}});var n=r(92711),a=r(49306),i=r(17706),o=r(15941);function s(e,t){let r="".concat(Math.floor(e)).length,n=t-r;return n>0?"".concat("0".repeat(n)).concat(e):"".concat(e)}r(44328);var l=r(56857),c=r(55483),u=r(55800),d=r(91307),f=r(99507),h=r(30944),p=r(54783),g=r.n(p),m=r(68347),x=r.n(m),v=r(19278),y=r(50713),b=r.n(y);let j=g().bind(b());var w=function(e){let{title:t,excerpt:r,thumb:a,category:p,date:g,newist:m,...y}=e,{theme:b}=(0,o.N)(),w=(0,v.useMemo)(()=>{let{year:e,month:t,day:r,hour:n,minute:a,second:i}=function(e){let t=e?new Date(e):new Date,r=t.getMonth()+1;return{day:{text:s(t.getDate(),2),value:t.getDate()},hour:{text:s(t.getHours(),2),value:t.getHours()},minute:{text:s(t.getMinutes(),2),value:t.getMinutes()},month:{text:s(r,2),value:r},second:{text:s(t.getSeconds(),2),value:t.getSeconds()},timestame:t.getTime(),year:{text:"".concat(t.getFullYear()),value:t.getFullYear()}}}(g);return"".concat(e.text,"-").concat(t.text,"-").concat(r.text," ").concat(n.text,":").concat(a.text,":").concat(i.text)},[g]),Z=(0,v.useMemo)(()=>{let e=new Date(g).getTime(),t=new Date().getTime(),r=t-e;return r<864e5?"방금 전":r<1296e6?"".concat(Math.round(r/864e5),"일 전"):r<31536e6?"".concat(Math.round(r/2592e6),"달 전"):"".concat(Math.round(r/31536e6),"년 전")},[g]);return(0,n.jsx)(x(),{className:j("link",{dark:"dark"===b}),"data-component":"MarkdownListItem",...y,children:(0,n.jsx)(d.Z,{className:j("item"),variant:"outlined",children:(0,n.jsx)(u.Z,{className:"fullwidth fullheight",children:(0,n.jsxs)(f.Z,{height:"100%",width:"100%",children:[(0,n.jsx)(c.Z,{className:j("thumb"),position:"relative",width:"100%",children:(0,n.jsx)(i.Z,{alt:t,className:j("image"),height:"100%",src:a,width:"100%"})}),(0,n.jsxs)(f.Z,{alignItems:"start",flex:1,justifyContent:"start",padding:3,spacing:1,children:[(0,n.jsxs)(f.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:1,width:"100%",children:[(0,n.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(l.Z,{alt:p,className:j("category"),src:"https://datastore.itcode.dev/blog/category/".concat(p,".png")}),(0,n.jsx)(h.Z,{variant:"caption",children:p})]}),(0,n.jsx)(f.Z,{alignItems:"center",direction:"row",spacing:1,children:m?(0,n.jsx)(c.Z,{bgcolor:"hotpink",borderRadius:1,padding:"1px 10px",children:(0,n.jsx)(h.Z,{color:"white",fontSize:8,children:"NEW"})}):null})]}),(0,n.jsx)(c.Z,{children:(0,n.jsx)(h.Z,{fontWeight:"bold",textAlign:"start",children:t})}),(0,n.jsx)(f.Z,{flex:1,paddingBottom:2,children:(0,n.jsx)(h.Z,{className:j("excerpt"),color:"GrayText",textAlign:"start",variant:"caption",children:r})}),(0,n.jsxs)(f.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,n.jsx)(h.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:w}),(0,n.jsx)(h.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:Z})]})]})]})})})})},Z=r(94749),_=r(63201),M=function(e){let{markdown:t=[],onCardClick:r,...i}=e,o={initial:{opacity:0,translateY:50},view:{opacity:1,translateY:0}};return(0,n.jsx)(c.Z,{"data-component":"MarkdownList",children:(0,n.jsx)(Z.ZP,{spacing:4,container:!0,...i,children:t.length>0?t.map(e=>{let{frontmatter:t,url:a}=e;return(0,n.jsx)(Z.ZP,{lg:4,sm:6,xs:12,item:!0,children:(0,n.jsx)(_.E.div,{className:"fullheight",initial:"initial",transition:{duration:1},variants:o,viewport:{amount:.3,once:!0},whileInView:"view",children:(0,n.jsx)(w,{category:t.category,date:t.date,excerpt:t.excerpt,href:a,newist:t.isNew,thumb:t.coverImage,title:t.title,onClick:r})})},a)}):(0,n.jsxs)(f.Z,{alignItems:"center",spacing:2,width:"100%",children:[(0,n.jsx)(a.Z,{iconName:"empty",width:180}),(0,n.jsx)(h.Z,{variant:"h5",children:"표시할 항목이 없어요..."})]})})})}},63439:function(e,t,r){"use strict";r.r(t),r.d(t,{dancingScript:function(){return c.a},default:function(){return v},gamjaFlower:function(){return d.a},notoSans:function(){return i.a},ubuntuMono:function(){return s.a}});var n=r(92711),a=r(94611),i=r.n(a),o=r(45310),s=r.n(o),l=r(15690),c=r.n(l),u=r(73243),d=r.n(u),f=r(15941),h=r(17970),p=r(1054),g=r(20903),m=r(19278),x=r(46552);function v(e){let{children:t}=e;x.ZP.initialize("G-7QYWYNZ90R");let{theme:r,setTheme:a}=(0,f.N)(),o=[i().style.fontFamily,"sans-serif"],s=(0,m.useCallback)(e=>(0,h.Z)({palette:{mode:e},typography:{fontFamily:o.join(", ")}}),[o]);return(0,m.useEffect)(()=>{let e="light"===localStorage.getItem("theme")?"light":"dark";a(e)},[a]),(0,n.jsxs)(p.Z,{theme:s(r),children:[(0,n.jsx)(g.ZP,{}),t]})}},65343:function(e,t,r){"use strict";r.d(t,{CN:function(){return n.gamjaFlower},GM:function(){return n.ubuntuMono},Vj:function(){return n.dancingScript},wh:function(){return n.notoSans}});var n=r(63439)},65583:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var n=r(92711),a=r(14751),i=r(44328),o=r(90394),s=r(98974),l=r(21882),c=r(82056),u=r(55483),d=r(99507),f=r(30944),h=r(54783),p=r.n(h),g=r(63201),m=r(68347),x=r.n(m),v=r(75995),y=r.n(v);let b=p().bind(y());function j(){let{palette:{background:{default:e}}}=(0,c.Z)();return(0,n.jsx)(g.E.div,{initial:{opacity:0,translateY:50},transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1,translateY:0},children:(0,n.jsx)(u.Z,{borderRadius:2,boxShadow:"3px 3px 10px black",className:b("card"),"data-component":"BusinessCard",height:380,maxWidth:280,padding:.5,width:"100%",children:(0,n.jsx)(u.Z,{bgcolor:e,borderRadius:2,height:"100%",padding:2,children:(0,n.jsxs)(d.Z,{height:"100%",justifyContent:"space-between",width:"100%",children:[(0,n.jsxs)(d.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,n.jsx)(f.Z,{className:b("text"),fontWeight:"bold",variant:"h4",children:i.S7.nickname}),(0,n.jsx)(a.Z,{size:42})]}),(0,n.jsxs)(d.Z,{spacing:1,children:[(0,n.jsx)(f.Z,{className:b("text"),fontWeight:"bold",children:i.L1.title}),(0,n.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)("img",{alt:"홈페이지",height:24,src:"https://itcode.dev/logo.png",width:24}),(0,n.jsx)(x(),{href:"https://itcode.dev",children:(0,n.jsx)(f.Z,{children:"홈페이지"})})]}),(0,n.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(x(),{href:"mailto:".concat(i.S7.email),children:(0,n.jsx)(f.Z,{children:i.S7.email})})]}),(0,n.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)(x(),{href:i.S7.social.github.link,target:"_blank",children:(0,n.jsx)(f.Z,{children:i.S7.social.github.name})})]}),(0,n.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,n.jsx)(l.Z,{}),(0,n.jsx)(x(),{href:i.S7.social.linkedin.link,target:"_blank",children:(0,n.jsx)(f.Z,{children:i.S7.social.linkedin.name})})]})]})]})})})})}},4829:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(92711),a=r(542),i=r(10025),o=r(99507),s=r(30944),l=r(19278);function c(){let{markdown:e}=(0,i.AM)(),{markdown:t}=(0,i.zm)(),r=(0,l.useMemo)(()=>{let r=[...e,...t];return r.filter(e=>{let{frontmatter:t}=e;return t.isNew}).sort((e,t)=>new Date(t.frontmatter.date).getTime()-new Date(e.frontmatter.date).getTime())},[e,t]);return(0,n.jsxs)(o.Z,{"data-component":"HomeNewistBox",paddingBottom:4,paddingTop:4,spacing:8,children:[(0,n.jsxs)(o.Z,{spacing:2,children:[(0,n.jsx)(s.Z,{fontWeight:"bold",variant:"h4",children:"✨ 신규 컨텐츠"}),(0,n.jsx)(s.Z,{color:"GrayText",children:"2주 이내에 작성된 게시글/프로젝트의 목록입니다."})]}),(0,n.jsx)(a.Z,{markdown:r})]})}},35631:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(92711),a=r(62361),i=r(49306),o=r(542),s=r(10025),l=r(99507),c=r(30944),u=r(19278);function d(e){let{type:t}=e,{markdown:r}=(0,s.AM)(),{markdown:d}=(0,s.zm)(),{data:f,isLoading:h}=(0,a.MA)(t),p=(0,u.useMemo)(()=>"posts"===t?"게시글":"프로젝트",[t]),g=(0,u.useMemo)(()=>"posts"===t?r:d,[t,r,d]),m=(0,u.useMemo)(()=>{let e=(null==f?void 0:f.rows.map(e=>{let{dimensionValues:t}=e;return t[0].value}))||[];return e.map(e=>g.filter(t=>{let{url:r}=t;return e===r})[0])||[]},[f,g]);return(0,n.jsxs)(l.Z,{"data-component":"HomePopularBox",paddingBottom:4,paddingTop:4,spacing:8,children:[(0,n.jsxs)(l.Z,{spacing:2,children:[(0,n.jsxs)(c.Z,{fontWeight:"bold",variant:"h4",children:["\uD83D\uDC51 인기 ",p]}),(0,n.jsxs)(c.Z,{color:"GrayText",children:["한 달 이내의 Google Analytics 데이터 중, 가장 조회수가 높은 ",p,"의 목록입니다."]})]}),h?(0,n.jsx)(l.Z,{alignItems:"center",children:(0,n.jsx)(i.Z,{iconName:"loading",maxWidth:200,width:"100%"})}):(0,n.jsx)(o.Z,{markdown:m})]})}},46727:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(92711),a=r(17706),i=r(44328),o=r(65343),s=r(99507),l=r(30944);function c(){return(0,n.jsxs)(s.Z,{alignItems:"center","data-component":"HomeWelcomBox",padding:4,paddingBottom:20,paddingTop:20,spacing:5,children:[(0,n.jsx)(s.Z,{borderRadius:4,boxShadow:"0px 0px 20px #00000099",display:"flex",height:300,overflow:"hidden",width:300,children:(0,n.jsx)(a.Z,{alt:i.L1.title,height:"100%",src:"/thumb.png",width:"100%"})}),(0,n.jsx)(l.Z,{fontFamily:o.CN.style.fontFamily,fontWeight:"bold",textAlign:"center",variant:"h4",children:i.L1.title})]})}},49222:function(e){e.exports={image:"Image_image__b6mOf",loading:"Image_loading__3Lf43"}},50713:function(e){e.exports={link:"MarkdownListItem_link__RL6t8",image:"MarkdownListItem_image__mvHOE",dark:"MarkdownListItem_dark__UYuyY",item:"MarkdownListItem_item__hy1LR",thumb:"MarkdownListItem_thumb__dugBn",category:"MarkdownListItem_category__O1tSD",excerpt:"MarkdownListItem_excerpt__MkUSD",newist:"MarkdownListItem_newist__RSK52"}},75995:function(e){e.exports={card:"BusinessCard_card__QmAX0",text:"BusinessCard_text__QjLjC",image:"BusinessCard_image__uNH5_"}},29706:function(e){function t(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(a&&(a+=" "),a+=n);else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(n&&(n+=" "),n+=t);return n}e.exports=t,e.exports.clsx=t}},function(e){e.O(0,[119,130,922,982,14,60,288,743,683,628,22,114,663,744],function(){return e(e.s=76402)}),_N_E=e.O()}]);