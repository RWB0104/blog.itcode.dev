(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{92301:function(e,t,n){"use strict";n.r(t),n.d(t,{unstable_composeClasses:function(){return r.Z}});var r=n(12688)},90394:function(e,t,n){"use strict";var r=n(47255);t.Z=void 0;var a=r(n(19448)),i=n(92711),o=(0,a.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.Z=o},56857:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(91147),a=n(87152),i=n(19278),o=n(72337),l=n(12688),s=n(27245),c=n(15835),u=n(81467),d=n(92711),f=(0,u.Z)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=n(19219),p=n(85402);function g(e){return(0,p.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);let m=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=e=>{let{classes:t,variant:n,colorDefault:r}=e;return(0,l.Z)({root:["root",n,r&&"colorDefault"],img:["img"],fallback:["fallback"]},g,t)},v=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})(({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,a.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),y=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,s.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"}),j=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:l,children:s,className:u,component:f="div",imgProps:h,sizes:p,src:g,srcSet:j,variant:w="circular"}=n,Z=(0,r.Z)(n,m),k=null,_=function({crossOrigin:e,referrerPolicy:t,src:n,srcSet:r}){let[a,o]=i.useState(!1);return i.useEffect(()=>{if(!n&&!r)return;o(!1);let a=!0,i=new Image;return i.onload=()=>{a&&o("loaded")},i.onerror=()=>{a&&o("error")},i.crossOrigin=e,i.referrerPolicy=t,i.src=n,r&&(i.srcset=r),()=>{a=!1}},[e,t,n,r]),a}((0,a.Z)({},h,{src:g,srcSet:j})),M=g||j,P=M&&"error"!==_,O=(0,a.Z)({},n,{colorDefault:!P,component:f,variant:w}),C=x(O);return k=P?(0,d.jsx)(y,(0,a.Z)({alt:l,src:g,srcSet:j,sizes:p,ownerState:O,className:C.img},h)):null!=s?s:M&&l?l[0]:(0,d.jsx)(b,{ownerState:O,className:C.fallback}),(0,d.jsx)(v,(0,a.Z)({as:f,ownerState:O,className:(0,o.Z)(C.root,u),ref:t},Z,{children:k}))});var w=j},26500:function(e,t,n){"use strict";var r=n(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r(n(33857));var a=n(1123),i=r(n(66809)),o=r(n(60470)),l=r(n(44662));let s=(0,a.createContainer)({createStyledComponent:(0,o.default)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`maxWidth${(0,i.default)(String(n.maxWidth))}`],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,l.default)({props:e,name:"MuiContainer"})});t.default=s},34448:function(e,t,n){"use strict";var r=n(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getContainerUtilityClass=function(e){return(0,i.default)("MuiContainer",e)};var a=n(93906),i=r(n(76611));let o=(0,a.unstable_generateUtilityClasses)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);t.default=o},87709:function(e,t,n){"use strict";var r=n(47255);Object.defineProperty(t,"__esModule",{value:!0});var a={containerClasses:!0};Object.defineProperty(t,"containerClasses",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=r(n(26500)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(34448));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}Object.keys(o).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(a,e))&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))})},84168:function(e,t,n){"use strict";var r=n(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TypographyRoot=void 0;var a=r(n(77026)),i=r(n(92589)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(19278));r(n(33857));var l=r(n(29706)),s=n(1123),c=n(92301),u=r(n(60470)),d=r(n(44662)),f=r(n(66809)),h=n(56040),p=n(92711);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}let x=e=>{let{align:t,gutterBottom:n,noWrap:r,paragraph:a,variant:i,classes:o}=e,l={root:["root",i,"inherit"!==e.align&&`align${(0,f.default)(t)}`,n&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,c.unstable_composeClasses)(l,h.getTypographyUtilityClass,o)},v=(0,u.default)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,f.default)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,i.default)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}));t.TypographyRoot=v;let y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>b[e]||e,w=o.forwardRef(function(e,t){let n=(0,d.default)({props:e,name:"MuiTypography"}),r=j(n.color),o=(0,s.unstable_extendSxProp)((0,i.default)({},n,{color:r})),{align:c="inherit",className:u,component:f,gutterBottom:h=!1,noWrap:m=!1,paragraph:b=!1,variant:w="body1",variantMapping:Z=y}=o,k=(0,a.default)(o,g),_=(0,i.default)({},o,{align:c,color:r,className:u,component:f,gutterBottom:h,noWrap:m,paragraph:b,variant:w,variantMapping:Z}),M=f||(b?"p":Z[w]||y[w])||"span",P=x(_);return(0,p.jsx)(v,(0,i.default)({as:M,ref:t,ownerState:_,className:(0,l.default)(P.root,u)},k))});t.default=w},2902:function(e,t,n){"use strict";var r=n(47255);Object.defineProperty(t,"__esModule",{value:!0});var a={typographyClasses:!0};Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"typographyClasses",{enumerable:!0,get:function(){return o.default}});var i=r(n(84168)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(56040));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}Object.keys(o).forEach(function(e){!("default"===e||"__esModule"===e||Object.prototype.hasOwnProperty.call(a,e))&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))})},56040:function(e,t,n){"use strict";var r=n(47255);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.getTypographyUtilityClass=function(e){return(0,i.default)("MuiTypography",e)};var a=n(93906),i=r(n(76611));let o=(0,a.unstable_generateUtilityClasses)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);t.default=o},66809:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(93906).unstable_capitalize;t.default=r},74278:function(e,t,n){Promise.resolve().then(n.bind(n,67737)),Promise.resolve().then(n.bind(n,47633)),Promise.resolve().then(n.bind(n,20349)),Promise.resolve().then(n.bind(n,62638)),Promise.resolve().then(n.bind(n,90405)),Promise.resolve().then(n.bind(n,25262)),Promise.resolve().then(n.bind(n,23099)),Promise.resolve().then(n.bind(n,35550)),Promise.resolve().then(n.t.bind(n,87709,23)),Promise.resolve().then(n.bind(n,4829)),Promise.resolve().then(n.bind(n,35631)),Promise.resolve().then(n.bind(n,25018)),Promise.resolve().then(n.t.bind(n,2902,23)),Promise.resolve().then(n.bind(n,46727)),Promise.resolve().then(n.bind(n,65583)),Promise.resolve().then(n.t.bind(n,16259,23))},17706:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(92711),a=n(49306),i=n(99507),o=n(54783),l=n.n(o),s=n(19278),c=n(49222),u=n.n(c);let d=l().bind(u());var f=function(e){let{alt:t,width:n,height:o,className:l,onError:c,onLoad:u,...f}=e,[h,p]=(0,s.useState)("loading"),g=(0,s.useRef)(null),m=(0,s.useCallback)(e=>{p("error"),c&&c(e)},[c,p]),x=(0,s.useCallback)(e=>{p(e.currentTarget.complete?"success":"loading"),u&&u(e)},[u,p]);return(0,s.useEffect)(()=>{g.current&&p(g.current.complete?"success":"loading")},[g,p]),(0,r.jsxs)(i.Z,{"data-component":"Image",height:o,position:"relative",width:n,children:[(0,r.jsx)("img",{alt:t,className:d("image",{loading:"success"!==h},l),"data-status":h,height:"100%",loading:"lazy",ref:g,width:"100%",onError:m,onLoadCapture:x,...f}),"success"===h?null:(0,r.jsx)(i.Z,{alignItems:"center",height:o,justifyContent:"center",left:0,position:"absolute",top:0,width:n,children:(0,r.jsx)(a.Z,{iconName:"error"===h?"empty":"image",maxWidth:300,width:"75%"})})]})}},49306:function(e,t,n){"use strict";var r=n(58628);t.Z=r.default},2476:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(92711),a=n(49306),i=n(17706),o=n(15941),l=n(91906),s=n(56857),c=n(55483),u=n(55800),d=n(91307),f=n(99507),h=n(30944),p=n(54783),g=n.n(p),m=n(68347),x=n.n(m),v=n(19278),y=n(50713),b=n.n(y);let j=g().bind(b());var w=function(e){let{title:t,excerpt:n,thumb:a,category:p,date:g,newist:m,...y}=e,{theme:b}=(0,o.N)(),w=(0,v.useMemo)(()=>{let{year:e,month:t,day:n,hour:r,minute:a,second:i}=(0,l.nq)(g);return"".concat(e.text,"-").concat(t.text,"-").concat(n.text," ").concat(r.text,":").concat(a.text,":").concat(i.text)},[g]),Z=(0,v.useMemo)(()=>{let e=new Date(g).getTime(),t=new Date().getTime(),n=t-e;return n<l.ku?"방금 전":n<15*l.ku?"".concat(Math.round(n/l.ku),"일 전"):n<365*l.ku?"".concat(Math.round(n/(30*l.ku)),"달 전"):"".concat(Math.round(n/(365*l.ku)),"년 전")},[g]);return(0,r.jsx)(x(),{className:j("link",{dark:"dark"===b}),"data-component":"MarkdownListItem",...y,children:(0,r.jsx)(d.Z,{className:j("item"),variant:"outlined",children:(0,r.jsx)(u.Z,{className:"fullwidth fullheight",children:(0,r.jsxs)(f.Z,{height:"100%",width:"100%",children:[(0,r.jsx)(c.Z,{className:j("thumb"),position:"relative",width:"100%",children:(0,r.jsx)(i.Z,{alt:t,className:j("image"),height:"100%",src:a,width:"100%"})}),(0,r.jsxs)(f.Z,{alignItems:"start",flex:1,justifyContent:"start",padding:3,spacing:1,children:[(0,r.jsxs)(f.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:1,width:"100%",children:[(0,r.jsxs)(f.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(s.Z,{alt:p,className:j("category"),src:"https://datastore.itcode.dev/blog/category/".concat(p,".png")}),(0,r.jsx)(h.Z,{variant:"caption",children:p})]}),(0,r.jsx)(f.Z,{alignItems:"center",direction:"row",spacing:1,children:m?(0,r.jsx)(c.Z,{bgcolor:"hotpink",borderRadius:1,padding:"1px 10px",children:(0,r.jsx)(h.Z,{color:"white",fontSize:8,children:"NEW"})}):null})]}),(0,r.jsx)(c.Z,{children:(0,r.jsx)(h.Z,{fontWeight:"bold",textAlign:"start",children:t})}),(0,r.jsx)(f.Z,{flex:1,paddingBottom:2,children:(0,r.jsx)(h.Z,{className:j("excerpt"),color:"GrayText",textAlign:"start",variant:"caption",children:n})}),(0,r.jsxs)(f.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,r.jsx)(h.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:w}),(0,r.jsx)(h.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:Z})]})]})]})})})})},Z=n(94749),k=n(63201),_=function(e){let{markdown:t=[],onCardClick:n,...i}=e,o={initial:{opacity:0,translateY:50},view:{opacity:1,translateY:0}};return(0,r.jsx)(c.Z,{"data-component":"MarkdownList",children:(0,r.jsx)(Z.ZP,{spacing:4,container:!0,...i,children:t.length>0?t.map(e=>{let{frontmatter:t,url:a}=e;return(0,r.jsx)(Z.ZP,{lg:4,sm:6,xs:12,item:!0,children:(0,r.jsx)(k.E.div,{className:"fullheight",initial:"initial",transition:{duration:1},variants:o,viewport:{amount:.3,once:!0},whileInView:"view",children:(0,r.jsx)(w,{category:t.category,date:t.date,excerpt:t.excerpt,href:a,newist:t.isNew,thumb:t.coverImage,title:t.title,onClick:n})})},a)}):(0,r.jsxs)(f.Z,{alignItems:"center",spacing:2,width:"100%",children:[(0,r.jsx)(a.Z,{iconName:"empty",width:180}),(0,r.jsx)(h.Z,{variant:"h5",children:"표시할 항목이 없어요..."})]})})})}},63439:function(e,t,n){"use strict";n.r(t),n.d(t,{dancingScript:function(){return c.a},default:function(){return v},gamjaFlower:function(){return d.a},notoSans:function(){return i.a},ubuntuMono:function(){return l.a}});var r=n(92711),a=n(94611),i=n.n(a),o=n(45310),l=n.n(o),s=n(15690),c=n.n(s),u=n(73243),d=n.n(u),f=n(15941),h=n(17970),p=n(1054),g=n(20903),m=n(19278),x=n(46552);function v(e){let{children:t}=e;x.ZP.initialize("G-7QYWYNZ90R");let{theme:n,setTheme:a}=(0,f.N)(),o=[i().style.fontFamily,"sans-serif"],l=(0,m.useCallback)(e=>(0,h.Z)({palette:{mode:e},typography:{fontFamily:o.join(", ")}}),[o]);return(0,m.useEffect)(()=>{let e="light"===localStorage.getItem("theme")?"light":"dark";a(e)},[a]),(0,r.jsxs)(p.Z,{theme:l(n),children:[(0,r.jsx)(g.ZP,{}),t]})}},65343:function(e,t,n){"use strict";n.d(t,{CN:function(){return r.gamjaFlower},GM:function(){return r.ubuntuMono},Vj:function(){return r.dancingScript},wh:function(){return r.notoSans}});var r=n(63439)},65583:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var r=n(92711),a=n(14751),i=n(44328),o=n(90394),l=n(98974),s=n(21882),c=n(82056),u=n(55483),d=n(99507),f=n(30944),h=n(54783),p=n.n(h),g=n(63201),m=n(68347),x=n.n(m),v=n(75995),y=n.n(v);let b=p().bind(y());function j(){let{palette:{background:{default:e}}}=(0,c.Z)();return(0,r.jsx)(g.E.div,{initial:{opacity:0,translateY:50},transition:{duration:1},viewport:{once:!0},whileInView:{opacity:1,translateY:0},children:(0,r.jsx)(u.Z,{borderRadius:2,boxShadow:"3px 3px 10px black",className:b("card"),"data-component":"BusinessCard",height:380,maxWidth:280,padding:.5,width:"100%",children:(0,r.jsx)(u.Z,{bgcolor:e,borderRadius:2,height:"100%",padding:2,children:(0,r.jsxs)(d.Z,{height:"100%",justifyContent:"space-between",width:"100%",children:[(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,r.jsx)(f.Z,{className:b("text"),fontWeight:"bold",variant:"h4",children:i.S7.nickname}),(0,r.jsx)(a.Z,{size:42})]}),(0,r.jsxs)(d.Z,{spacing:1,children:[(0,r.jsx)(f.Z,{className:b("text"),fontWeight:"bold",children:i.L1.title}),(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)("img",{alt:"홈페이지",height:24,src:"https://itcode.dev/logo.png",width:24}),(0,r.jsx)(x(),{href:"https://itcode.dev",children:(0,r.jsx)(f.Z,{children:"홈페이지"})})]}),(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)(x(),{href:"mailto:".concat(i.S7.email),children:(0,r.jsx)(f.Z,{children:i.S7.email})})]}),(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(l.Z,{}),(0,r.jsx)(x(),{href:i.S7.social.github.link,target:"_blank",children:(0,r.jsx)(f.Z,{children:i.S7.social.github.name})})]}),(0,r.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(s.Z,{}),(0,r.jsx)(x(),{href:i.S7.social.linkedin.link,target:"_blank",children:(0,r.jsx)(f.Z,{children:i.S7.social.linkedin.name})})]})]})]})})})})}},4829:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(92711),a=n(2476),i=n(10025),o=n(99507),l=n(30944),s=n(19278);function c(){let{markdown:e}=(0,i.AM)(),{markdown:t}=(0,i.zm)(),n=(0,s.useMemo)(()=>{let n=[...e,...t];return n.filter(e=>{let{frontmatter:t}=e;return t.isNew}).sort((e,t)=>new Date(t.frontmatter.date).getTime()-new Date(e.frontmatter.date).getTime())},[e,t]);return(0,r.jsxs)(o.Z,{"data-component":"HomeNewistBox",paddingBottom:4,paddingTop:4,spacing:8,children:[(0,r.jsxs)(o.Z,{spacing:2,children:[(0,r.jsx)(l.Z,{fontWeight:"bold",variant:"h4",children:"✨ 신규 컨텐츠"}),(0,r.jsx)(l.Z,{color:"GrayText",children:"2주 이내에 작성된 게시글/프로젝트의 목록입니다."})]}),(0,r.jsx)(a.Z,{markdown:n})]})}},35631:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(92711),a=n(62361),i=n(49306),o=n(2476),l=n(10025),s=n(99507),c=n(30944),u=n(19278);function d(e){let{type:t}=e,{markdown:n}=(0,l.AM)(),{markdown:d}=(0,l.zm)(),{data:f,isLoading:h}=(0,a.MA)(t),p=(0,u.useMemo)(()=>"posts"===t?"게시글":"프로젝트",[t]),g=(0,u.useMemo)(()=>"posts"===t?n:d,[t,n,d]),m=(0,u.useMemo)(()=>{let e=(null==f?void 0:f.rows.map(e=>{let{dimensionValues:t}=e;return t[0].value}))||[];return e.map(e=>g.filter(t=>{let{url:n}=t;return e===n})[0])||[]},[f,g]);return(0,r.jsxs)(s.Z,{"data-component":"HomePopularBox",paddingBottom:4,paddingTop:4,spacing:8,children:[(0,r.jsxs)(s.Z,{spacing:2,children:[(0,r.jsxs)(c.Z,{fontWeight:"bold",variant:"h4",children:["\uD83D\uDC51 인기 ",p]}),(0,r.jsxs)(c.Z,{color:"GrayText",children:["한 달 이내의 Google Analytics 데이터 중, 가장 조회수가 높은 ",p,"의 목록입니다."]})]}),h?(0,r.jsx)(s.Z,{alignItems:"center",children:(0,r.jsx)(i.Z,{iconName:"loading",maxWidth:200,width:"100%"})}):(0,r.jsx)(o.Z,{markdown:m})]})}},46727:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(92711),a=n(17706),i=n(44328),o=n(65343),l=n(99507),s=n(30944);function c(){return(0,r.jsxs)(l.Z,{alignItems:"center","data-component":"HomeWelcomBox",padding:4,paddingBottom:20,paddingTop:20,spacing:5,children:[(0,r.jsx)(l.Z,{borderRadius:4,boxShadow:"0px 0px 20px #00000099",display:"flex",height:300,overflow:"hidden",width:300,children:(0,r.jsx)(a.Z,{alt:i.L1.title,height:"100%",src:"/thumb.png",width:"100%"})}),(0,r.jsx)(s.Z,{fontFamily:o.CN.style.fontFamily,fontWeight:"bold",textAlign:"center",variant:"h4",children:i.L1.title})]})}},91906:function(e,t,n){"use strict";n.d(t,{Gd:function(){return l},ku:function(){return a},nq:function(){return o}}),n(44328);let r={markdownCodeblock:/```[^]*?```/gm,markdownHeading:/^(#{1,6})(.+)$/gm},a=864e5;function i(e,t){let n="".concat(Math.floor(e)).length,r=t-n;return r>0?"".concat("0".repeat(r)).concat(e):"".concat(e)}function o(e){let t=e?new Date(e):new Date,n=t.getMonth()+1;return{day:{text:i(t.getDate(),2),value:t.getDate()},hour:{text:i(t.getHours(),2),value:t.getHours()},minute:{text:i(t.getMinutes(),2),value:t.getMinutes()},month:{text:i(n,2),value:n},second:{text:i(t.getSeconds(),2),value:t.getSeconds()},timestame:t.getTime(),year:{text:"".concat(t.getFullYear()),value:t.getFullYear()}}}function l(e){let t=[],n=e.replaceAll(r.markdownCodeblock,"");for(;;){let e=r.markdownHeading.exec(n);if(null===e)break;t.push({level:e[1].trim().length,text:e[2].trim()})}return t}},49222:function(e){e.exports={image:"Image_image__b6mOf",loading:"Image_loading__3Lf43"}},50713:function(e){e.exports={link:"MarkdownListItem_link__RL6t8",image:"MarkdownListItem_image__mvHOE",dark:"MarkdownListItem_dark__UYuyY",item:"MarkdownListItem_item__hy1LR",thumb:"MarkdownListItem_thumb__dugBn",category:"MarkdownListItem_category__O1tSD",excerpt:"MarkdownListItem_excerpt__MkUSD",newist:"MarkdownListItem_newist__RSK52"}},75995:function(e){e.exports={card:"BusinessCard_card__QmAX0",text:"BusinessCard_text__QjLjC",image:"BusinessCard_image__uNH5_"}},29706:function(e){function t(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r);else for(n in t)t[n]&&(a&&(a+=" "),a+=n)}return a}(e))&&(r&&(r+=" "),r+=t);return r}e.exports=t,e.exports.clsx=t}},function(e){e.O(0,[119,130,922,982,14,60,288,743,683,628,22,114,663,744],function(){return e(e.s=74278)}),_N_E=e.O()}]);