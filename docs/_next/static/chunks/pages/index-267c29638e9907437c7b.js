_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"2zJX":function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var o=a("nKUr"),c=a("s/m+"),r=a("20a2"),n=a("tr08"),i=a("lopY"),l=a("tRbT"),s=a("VD++"),d=a("hlFM"),p=a("9jPY"),m=a("R/WZ"),b=a("dl/7"),u=a("CKo0"),g=a("6yTC"),h=a("xDpm");function j(e){var t,a=e.item,j=function(e,t){return Object(m.a)((function(a){return{zoom:{transitionDelay:"".concat(150*e,"ms")},post_button:{textAlign:"initial",width:"100%","& .wrapper":{overflow:"hidden"},"&:hover .wrapper > div":{transform:"scale(1.2)",transition:"0.5s"}},post_image:{height:"303.98px",backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",transform:"scale(1)",transition:"0.5s"},post_content:{padding:"7px 20px 7px 20px",display:"flex",flexDirection:"column"},post_category:{color:b.a[500],marginRight:10},post_category_typo:{"&:hover":{textDecoration:"underline"}},post_title:{paddingBottom:a.spacing(2),fontWeight:"bolder"},post_desc:{flexGrow:1},post_tag:{margin:3}}}))()}(e.index,a.coverImage),x=Object(r.useRouter)(),y=Object(n.a)(),f=Object(i.a)(y.breakpoints.down("sm")),O=h.c.exec(a.slug);return Object(o.jsx)(l.a,{component:"article",item:!0,xs:12,children:Object(o.jsx)(c.Fade,{children:Object(o.jsx)(s.a,{className:j.post_button,onClick:function(){return x.push("/posts/".concat(O[1],"/").concat(O[2],"/").concat(O[3],"/").concat(O[4],"/"))},children:Object(o.jsxs)(l.a,{container:!0,spacing:0,children:[Object(o.jsx)(l.a,{className:(j.image_wrap,"wrapper"),item:!0,xs:4,children:Object(o.jsx)(d.a,{className:j.post_image})}),Object(o.jsxs)(l.a,{item:!0,xs:8,className:j.post_content,children:[Object(o.jsxs)(l.a,{container:!0,direction:"row",alignItems:"center",children:[Object(o.jsx)(u.a,{className:j.post_category}),Object(o.jsx)(g.a,{up:"h6",down:"body1",color:"primary",className:j.post_category_typo,onClick:function(e){e.stopPropagation(),x.push({pathname:"/posts",query:{page:1,category:e.target.innerText}})},children:a.category})]}),Object(o.jsx)(g.a,{up:"h4",down:"h6",className:j.post_title,children:a.title}),!f&&Object(o.jsx)(g.a,{up:"caption",down:"caption",className:j.post_desc,children:a.excerpt}),Object(o.jsx)(d.a,{children:null===(t=a.tag)||void 0===t?void 0:t.map((function(e,t){return Object(o.jsx)(p.a,{variant:"outlined",label:"# ".concat(e),className:j.post_tag,onClick:function(e){return e.stopPropagation()}},t)}))})]})]})})})})}},"3W31":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var o=a("nKUr"),c=a("tRbT"),r=a("R/WZ"),n=a("LXXt"),i=a("q1tI"),l=a("5AJ6"),s=Object(l.a)(i.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"}),"CloudOff"),d=a("6yTC");function p(){var e=Object(r.a)((function(e){return{grid:{textAlign:"center"},grid_icon:{color:n.a[500],width:128,height:128,marginTop:e.spacing(10)},grid_typo:{color:n.a[500],marginTop:e.spacing(2)}}}))();return Object(o.jsxs)(c.a,{container:!0,className:e.grid,children:[Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsx)(s,{className:e.grid_icon})}),Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsx)(d.a,{up:"h4",down:"h6",className:e.grid_typo,children:"\ucee8\ud150\uce20\uac00 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."})})]})}},"9jPY":function(e,t,a){"use strict";var o=a("wx14"),c=a("Ff2n"),r=a("q1tI"),n=(a("17x9"),a("iuhU")),i=a("5AJ6"),l=Object(i.a)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),s=a("H2TA"),d=a("ye/S"),p=a("bfFb"),m=a("NqtD"),b=a("VD++");function u(e){return"Backspace"===e.key||"Delete"===e.key}var g=r.forwardRef((function(e,t){var a=e.avatar,i=e.classes,s=e.className,d=e.clickable,g=e.color,h=void 0===g?"default":g,j=e.component,x=e.deleteIcon,y=e.disabled,f=void 0!==y&&y,O=e.icon,v=e.label,k=e.onClick,C=e.onDelete,w=e.onKeyDown,_=e.onKeyUp,S=e.size,N=void 0===S?"medium":S,R=e.variant,T=void 0===R?"default":R,I=Object(c.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),z=r.useRef(null),E=Object(p.a)(z,t),D=function(e){e.stopPropagation(),C&&C(e)},$=!(!1===d||!k)||d,P="small"===N,L=j||($?b.a:"div"),M=L===b.a?{component:"div"}:{},W=null;if(C){var A=Object(n.a)("default"!==h&&("default"===T?i["deleteIconColor".concat(Object(m.a)(h))]:i["deleteIconOutlinedColor".concat(Object(m.a)(h))]),P&&i.deleteIconSmall);W=x&&r.isValidElement(x)?r.cloneElement(x,{className:Object(n.a)(x.props.className,i.deleteIcon,A),onClick:D}):r.createElement(l,{className:Object(n.a)(i.deleteIcon,A),onClick:D})}var F=null;a&&r.isValidElement(a)&&(F=r.cloneElement(a,{className:Object(n.a)(i.avatar,a.props.className,P&&i.avatarSmall,"default"!==h&&i["avatarColor".concat(Object(m.a)(h))])}));var K=null;return O&&r.isValidElement(O)&&(K=r.cloneElement(O,{className:Object(n.a)(i.icon,O.props.className,P&&i.iconSmall,"default"!==h&&i["iconColor".concat(Object(m.a)(h))])})),r.createElement(L,Object(o.a)({role:$||C?"button":void 0,className:Object(n.a)(i.root,s,"default"!==h&&[i["color".concat(Object(m.a)(h))],$&&i["clickableColor".concat(Object(m.a)(h))],C&&i["deletableColor".concat(Object(m.a)(h))]],"default"!==T&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[h]],f&&i.disabled,P&&i.sizeSmall,$&&i.clickable,C&&i.deletable),"aria-disabled":!!f||void 0,tabIndex:$||C?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&u(e)&&e.preventDefault(),w&&w(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&u(e)?C(e):"Escape"===e.key&&z.current&&z.current.blur()),_&&_(e)},ref:E},M,I),F||K,r.createElement("span",{className:Object(n.a)(i.label,P&&i.labelSmall)},v),W)}));t.a=Object(s.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(d.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(d.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(d.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(d.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(d.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(d.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(d.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(d.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(d.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g)},CKo0:function(e,t,a){"use strict";var o=a("q1tI"),c=a("5AJ6");t.a=Object(c.a)(o.createElement("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}),"LocalOffer")},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"__N_SSG",(function(){return _})),a.d(t,"default",(function(){return S}));var o=a("nKUr"),c=a("q1tI"),r=a.n(c),n=a("s/m+"),i=a("hlFM"),l=a("Ji2X"),s=a("fbxp"),d=a("LSZy"),p=a("R/WZ"),m=a("b6Qr"),b=a("xDpm"),u=a("JwDX"),g=a("6yTC");function h(){var e=Object(p.a)((function(e){return{box_easter:{padding:e.spacing(3),textAlign:"center",height:"40vmax",width:"100%",maxHeight:1e3,minHeight:500},box_image_wrapper:{clip:"rect(0, auto, auto, 0)",top:0,left:0,width:"100%",height:"100%"},box_image:{top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundAttachment:m.isIOS?"scroll":"fixed",backgroundPosition:"center",backgroundRepeat:"no-repeat",WebkitBackgroundSize:"cover",OBackgroundSize:"cover",MozBackgroundSize:"cover"},typo_title:{color:"white",fontStyle:"italic",fontWeight:"bold"},typo_desc:{color:"white",fontStyle:"italic"}}}))(),t=Object(b.b)(u.e);return Object(o.jsx)(n.Fade,{children:Object(o.jsxs)(i.a,{component:"article",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",className:e.box_easter,children:[Object(o.jsx)(i.a,{position:"absolute",className:e.box_image_wrapper,children:Object(o.jsx)(i.a,{position:"fixed",display:"block",className:e.box_image,style:{backgroundImage:"url(".concat(t.images,")")}})}),Object(o.jsxs)(i.a,{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",zIndex:10,children:[Object(o.jsx)(g.a,{up:"h3",down:"h5",align:"center",className:e.typo_title,children:t.title}),Object(o.jsx)(g.a,{up:"h4",down:"body1",align:"center",className:e.typo_desc,children:t.author})]})]})})}var j=a("20a2"),x=a("tRbT"),y=a("Z3vd"),f=a("5AJ6"),O=Object(f.a)(c.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),v=a("2zJX"),k=a("3W31");function C(e){var t=e.data,a=Object(p.a)((function(){return{contents_grid:{width:"100%"}}}))(),c=[];if(t.sort((function(e,t){return new Date(e.date)>new Date(t.date)?-1:1})),t.length>0)for(var r=0;r<4;r++)void 0!==t[r]&&c.push(Object(o.jsx)(x.a,{item:!0,md:12,className:a.contents_grid,children:Object(o.jsx)(v.a,{item:t[r],index:r})},r));else c.push(Object(o.jsx)(k.a,{}));return c}function w(e){var t=e.menu,a=e.data,c=Object(p.a)((function(e){return{box:{marginTop:e.spacing(7),marginBottom:e.spacing(7)},typo_title:{fontFamily:"Blacksword, sans-serif",fontWeight:"bold"},more_grid:{textAlign:"center"},more:{background:"linear-gradient(to right, #4776E6, #8E54E9)",color:"white",padding:"15px 30px",margin:"auto",marginTop:e.spacing(10),marginBottom:e.spacing(10),letterSpacing:5}}}))(),r=Object(j.useRouter)();return Object(o.jsx)(i.a,{component:"article",className:c.box,children:Object(o.jsxs)(x.a,{container:!0,spacing:4,children:[Object(o.jsx)(x.a,{item:!0,xs:12,children:Object(o.jsx)(g.a,{up:"h1",down:"h2",align:"center",className:c.typo_title,gutterBottom:!0,children:t.title})}),Object(o.jsx)(C,{data:a}),Object(o.jsx)(x.a,{item:!0,xs:12,className:c.more_grid,children:Object(o.jsx)(y.a,{className:c.more,startIcon:Object(o.jsx)(O,{}),onClick:function(){return r.push(t.url)},children:"M O R E"})})]})})}var _=!0;function S(e){var t=e.images,a=e.posts,c=e.projects,p=Object(b.b)(t);return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsx)(d.a,{title:u.d[0].title,description:u.a,url:u.d[0].url.pathname}),Object(o.jsx)(i.a,{component:"section",children:Object(o.jsxs)(n.Fade,{children:[Object(o.jsx)(s.a,{title:u.g,desc:u.a,image:"/assets/images/main/".concat(p),onlyEng:!0}),Object(o.jsx)(l.a,{maxWidth:"md",children:Object(o.jsx)(w,{menu:u.d[1],data:a})}),Object(o.jsx)(h,{}),Object(o.jsx)(l.a,{maxWidth:"md",children:Object(o.jsx)(w,{menu:u.d[2],data:c})})]})})]})}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",0,1,3,2,4,5]]]);