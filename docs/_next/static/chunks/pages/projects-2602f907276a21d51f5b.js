_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{AwZY:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n("gjpc")}])},gjpc:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return J})),n.d(t,"default",(function(){return Z}));var r=n("rePB"),o=n("nKUr"),i=n("q1tI"),a=n.n(i),c=n("s/m+"),s=n("tr08"),l=n("lopY"),u=n("hlFM"),p=n("Ji2X"),b=n("tRbT"),j=n("ADg1"),d=n("1AYd"),g=n("cVXz"),O=n("R/WZ"),f=n("r9w1"),m=n("wx14"),x=n("ODXe"),h=n("Ff2n"),y=(n("17x9"),n("dRu9")),v=n("wpWl"),w=n("4Hym"),E=n("bfFb"),_={entering:{transform:"none"},entered:{transform:"none"}},P={enter:v.b.enteringScreen,exit:v.b.leavingScreen},C=i.forwardRef((function(e,t){var n=e.children,r=e.disableStrictModeCompat,o=void 0!==r&&r,a=e.in,c=e.onEnter,l=e.onEntered,u=e.onEntering,p=e.onExit,b=e.onExited,j=e.onExiting,d=e.style,g=e.timeout,O=void 0===g?P:g,f=e.TransitionComponent,v=void 0===f?y.a:f,C=Object(h.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),N=Object(s.a)(),D=N.unstable_strictMode&&!o,k=i.useRef(null),S=Object(E.a)(n.ref,t),T=Object(E.a)(D?k:void 0,S),A=function(e){return function(t,n){if(e){var r=D?[k.current,t]:[t,n],o=Object(x.a)(r,2),i=o[0],a=o[1];void 0===a?e(i):e(i,a)}}},F=A(u),R=A((function(e,t){Object(w.b)(e);var n=Object(w.a)({style:d,timeout:O},{mode:"enter"});e.style.webkitTransition=N.transitions.create("transform",n),e.style.transition=N.transitions.create("transform",n),c&&c(e,t)})),B=A(l),q=A(j),I=A((function(e){var t=Object(w.a)({style:d,timeout:O},{mode:"exit"});e.style.webkitTransition=N.transitions.create("transform",t),e.style.transition=N.transitions.create("transform",t),p&&p(e)})),M=A(b);return i.createElement(v,Object(m.a)({appear:!0,in:a,nodeRef:D?k:void 0,onEnter:R,onEntered:B,onEntering:F,onExit:I,onExited:M,onExiting:q,timeout:O},C),(function(e,t){return i.cloneElement(n,Object(m.a)({style:Object(m.a)({transform:"scale(0)",visibility:"exited"!==e||a?void 0:"hidden"},_[e],d,n.props.style),ref:T},t))}))})),N=n("VD++"),D=n("ofer"),k=n("hlie"),S=n("9jPY"),T=n("dl/7"),A=n("CKo0"),F=n("+bXu"),R=n("l1im"),B=n("20a2"),q=n("JwDX");function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e){var t=e.data,n=Object(O.a)((function(e){return{post_button:{textAlign:"initial","& .wrapper":{overflow:"hidden"},"&:hover .wrapper > div":{transform:"scale(1.2)",transition:"0.5s"}},post_image:{height:"303.98px",backgroundSize:"cover",backgroundPosition:"center",transform:"scale(1)",transition:"0.5s"},post_content:{padding:"7px 20px 7px 20px",display:"flex",flexDirection:"column"},post_category:{color:T.a[500],marginRight:10},post_title:{paddingBottom:e.spacing(2),fontWeight:"bold"},post_desc:{flexGrow:1},post_tag:{marginLeft:3,marginRight:3},pagination:{marginTop:e.spacing(10),marginBottom:e.spacing(10),"& > ul":{justifyContent:"center"}}}}))(),r=Object(B.useRouter)(),i=t.filter((function(e){return"All"===r.query.category||e.category===r.query.category})),a=Math.max(Math.ceil(i.length/q.c),1),c=parseInt(r.query.page)||1,s=i.slice((c-1)*q.c,c*q.c);return Object(o.jsxs)(u.a,{children:[Object(o.jsxs)(b.a,{container:!0,spacing:8,children:[Object(o.jsx)(b.a,{item:!0,xs:12,children:Object(o.jsx)(F.a,{options:t,groupBy:function(e){return e.category},getOptionLabel:function(e){return e.title},onChange:function(e,t){return r.push("/posts/".concat(t.slug))},renderInput:function(e){return Object(o.jsx)(f.a,M(M({},e),{},{label:"search",variant:"outlined"}))}})}),s.map((function(e,t){var i;return Object(o.jsx)(C,{in:!0,style:{transitionDelay:"".concat(150*t,"ms")},children:Object(o.jsx)(b.a,{component:"article",item:!0,xs:12,children:Object(o.jsx)(N.a,{className:n.post_button,onClick:function(){return r.push("/posts/".concat(e.slug))},children:Object(o.jsxs)(b.a,{container:!0,spacing:0,children:[Object(o.jsx)(b.a,{className:(n.image_wrap,"wrapper"),item:!0,xs:4,children:Object(o.jsx)(u.a,{className:n.post_image,style:{backgroundImage:"url(".concat(e.coverImage,")")}})}),Object(o.jsxs)(b.a,{item:!0,xs:8,className:n.post_content,children:[Object(o.jsxs)(b.a,{container:!0,direction:"row",alignItems:"center",children:[Object(o.jsx)(A.a,{className:n.post_category}),Object(o.jsx)(D.a,{variant:"h6",onClick:function(e){e.stopPropagation(),r.push({query:{page:1,category:e.target.innerText}})},children:Object(o.jsx)(k.a,{href:"#",children:e.category})})]}),Object(o.jsx)(D.a,{variant:"h4",className:n.post_title,children:e.title}),Object(o.jsx)(D.a,{variant:"caption",className:n.post_desc,children:e.excerpt}),Object(o.jsx)(u.a,{children:null===(i=e.tag)||void 0===i?void 0:i.map((function(e,t){return Object(o.jsx)(S.a,{color:"primary",label:"# ".concat(e),className:n.post_tag,onClick:function(e){return e.stopPropagation()}},t)}))})]})]})})})},t)}))]}),Object(o.jsx)(R.a,{className:n.pagination,count:a,page:c,defaultPage:1,color:"primary",siblingCount:1,boundaryCount:2,showFirstButton:!0,showLastButton:!0,onChange:function(e,t){return r.push({query:M(M({},r.query),{},{page:t})})}})]})}var W=n("fbxp"),X=n("xDpm"),L=n("LSZy"),Y=n("3W31");function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=!0;function Z(e){var t=e.projects,n=e.images,r=Object(X.b)(n),i=Object(s.a)(),f=Object(l.a)(i.breakpoints.down("sm")),m=Object(O.a)((function(e){return{section:{marginTop:e.spacing(10)}}}))(),x=Object(B.useRouter)(),h=x.query.category||"All";return Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)(L.a,{title:q.d[2].title,description:q.a,url:q.d[2].url.pathname}),Object(o.jsx)(u.a,{component:"section",children:Object(o.jsxs)(c.Fade,{children:[Object(o.jsx)(W.a,{title:q.d[2].title,image:"/assets/images/main/".concat(r),onlyEng:!0}),Object(o.jsx)(p.a,{maxWidth:"md",className:m.section,children:t.length>0?Object(o.jsxs)(b.a,{container:!0,spacing:4,children:[Object(o.jsx)(b.a,{item:!0,xs:f?12:4,children:Object(o.jsxs)(j.a,{variant:"outlined",fullWidth:!0,children:[Object(o.jsx)(d.a,{id:"name",children:"Category"}),Object(o.jsxs)(g.a,{native:!0,label:"Category",value:h,onChange:function(e){return onSelectCategory(e,x)},children:[Object(o.jsx)("option",{value:"All",children:"All"}),categories.map((function(e,t){return Object(o.jsx)("option",{value:e,children:e},t+1)}))]})]})}),Object(o.jsx)(b.a,{item:!0,xs:12,children:Object(o.jsx)(Autocomplete,{options:posts.sort((function(e,t){return-t.category.localeCompare(e.category)})),groupBy:function(e){return e.category},getOptionLabel:function(e){return e.title},onChange:function(e,t){return x.push("/projects/".concat(t.slug))},renderInput:function(e){return Object(o.jsx)(TextField,H(H({},e),{},{label:"\ud504\ub85c\uc81d\ud2b8 \uac80\uc0c9",variant:"outlined"}))}})}),Object(o.jsx)(b.a,{item:!0,xs:12,children:Object(o.jsx)(V,{data:t})})]}):Object(o.jsx)(b.a,{container:!0,spacing:5,children:Object(o.jsx)(b.a,{item:!0,xs:12,children:Object(o.jsx)(Y.a,{})})})})]})})]})}},hlie:function(e,t,n){"use strict";var r=n("wx14"),o=n("Ff2n"),i=n("q1tI"),a=(n("17x9"),n("iuhU")),c=n("NqtD"),s=n("H2TA"),l=n("G7As"),u=n("bfFb"),p=n("ofer"),b=i.forwardRef((function(e,t){var n=e.classes,s=e.className,b=e.color,j=void 0===b?"primary":b,d=e.component,g=void 0===d?"a":d,O=e.onBlur,f=e.onFocus,m=e.TypographyClasses,x=e.underline,h=void 0===x?"hover":x,y=e.variant,v=void 0===y?"inherit":y,w=Object(o.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),E=Object(l.a)(),_=E.isFocusVisible,P=E.onBlurVisible,C=E.ref,N=i.useState(!1),D=N[0],k=N[1],S=Object(u.a)(t,C);return i.createElement(p.a,Object(r.a)({className:Object(a.a)(n.root,n["underline".concat(Object(c.a)(h))],s,D&&n.focusVisible,"button"===g&&n.button),classes:m,color:j,component:g,onBlur:function(e){D&&(P(),k(!1)),O&&O(e)},onFocus:function(e){_(e)&&k(!0),f&&f(e)},ref:S,variant:v},w))}));t.a=Object(s.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(b)}},[["AwZY",0,1,3,2,4,6,7]]]);