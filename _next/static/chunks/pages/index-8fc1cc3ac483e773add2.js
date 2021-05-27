(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1267:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var o=a(2122),r=a(2949),n=a(7294),l=(a(5697),a(6010)),i=(0,a(3786).Z)(n.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),c=a(4670),s=a(9693),d=a(3834),p=a(3871),m=a(4720);function u(e){return"Backspace"===e.key||"Delete"===e.key}var g=n.forwardRef((function(e,t){var a=e.avatar,c=e.classes,s=e.className,g=e.clickable,h=e.color,y=void 0===h?"default":h,f=e.component,b=e.deleteIcon,x=e.disabled,v=void 0!==x&&x,C=e.icon,k=e.label,Z=e.onClick,S=e.onDelete,w=e.onKeyDown,_=e.onKeyUp,j=e.size,N=void 0===j?"medium":j,T=e.variant,E=void 0===T?"default":T,z=(0,r.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),I=n.useRef(null),$=(0,d.Z)(I,t),R=function(e){e.stopPropagation(),S&&S(e)},L=!(!1===g||!Z)||g,P="small"===N,D=f||(L?m.Z:"div"),O=D===m.Z?{component:"div"}:{},U=null;if(S){var M=(0,l.Z)("default"!==y&&("default"===E?c["deleteIconColor".concat((0,p.Z)(y))]:c["deleteIconOutlinedColor".concat((0,p.Z)(y))]),P&&c.deleteIconSmall);U=b&&n.isValidElement(b)?n.cloneElement(b,{className:(0,l.Z)(b.props.className,c.deleteIcon,M),onClick:R}):n.createElement(i,{className:(0,l.Z)(c.deleteIcon,M),onClick:R})}var H=null;a&&n.isValidElement(a)&&(H=n.cloneElement(a,{className:(0,l.Z)(c.avatar,a.props.className,P&&c.avatarSmall,"default"!==y&&c["avatarColor".concat((0,p.Z)(y))])}));var B=null;return C&&n.isValidElement(C)&&(B=n.cloneElement(C,{className:(0,l.Z)(c.icon,C.props.className,P&&c.iconSmall,"default"!==y&&c["iconColor".concat((0,p.Z)(y))])})),n.createElement(D,(0,o.Z)({role:L||S?"button":void 0,className:(0,l.Z)(c.root,s,"default"!==y&&[c["color".concat((0,p.Z)(y))],L&&c["clickableColor".concat((0,p.Z)(y))],S&&c["deletableColor".concat((0,p.Z)(y))]],"default"!==E&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[y]],v&&c.disabled,P&&c.sizeSmall,L&&c.clickable,S&&c.deletable),"aria-disabled":!!v||void 0,tabIndex:L||S?0:void 0,onClick:Z,onKeyDown:function(e){e.currentTarget===e.target&&u(e)&&e.preventDefault(),w&&w(e)},onKeyUp:function(e){e.currentTarget===e.target&&(S&&u(e)?S(e):"Escape"===e.key&&I.current&&I.current.blur()),_&&_(e)},ref:$},O,z),H||B,n.createElement("span",{className:(0,l.Z)(c.label,P&&c.labelSmall)},k),U)})),h=(0,c.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=(0,s.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,s._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,s._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.U1)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,s.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,s.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,s.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,s.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(g)},2653:function(e,t,a){"use strict";var o=a(7294),r=a(3786);t.Z=(0,r.Z)(o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"}),"CloudOff")},9441:function(e,t,a){"use strict";var o=a(7294),r=a(3786);t.Z=(0,r.Z)(o.createElement("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}),"LocalOffer")},5509:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return Z},default:function(){return S}});var o=a(5893),r=a(7294),n=a(8367),l=a(7748),i=a(3832),c=a(4921),s=a(7845),d=a(1120),p=a(8247),m=a(1133),u=a(8021);function g(){var e=(0,d.Z)((function(e){return{box_easter:{padding:e.spacing(3),textAlign:"center",height:"40vmax",width:"100%",maxHeight:1e3,minHeight:500},box_image_wrapper:{clip:"rect(0, auto, auto, 0)",top:0,left:0,width:"100%",height:"100%"},box_image:{top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center center",WebkitBackgroundSize:"cover"},typo_title:{color:"white",fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif",fontStyle:"italic",fontWeight:"bold"},typo_desc:{color:"white",fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif",fontStyle:"italic"}}}))(),t=(0,p.J)(m.TJ);return(0,o.jsx)(n.pT,{children:(0,o.jsxs)(l.Z,{component:"article",position:"relative",display:"flex",flexDirection:"column",justifyContent:"center",className:e.box_easter,children:[(0,o.jsx)(l.Z,{position:"absolute",className:e.box_image_wrapper,children:(0,o.jsx)(l.Z,{position:"fixed",display:"block",className:e.box_image,style:{backgroundImage:"url(".concat(t.images,")")}})}),(0,o.jsxs)(l.Z,{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",zIndex:10,children:[(0,o.jsx)(u.Z,{up:"h3",down:"h5",align:"center",className:e.typo_title,children:t.title}),(0,o.jsx)(u.Z,{up:"h4",down:"body1",align:"center",className:e.typo_desc,children:t.author})]})]})})}var h=a(1163),y=a(1749),f=a(282),b=(0,a(3786).Z)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),x=a(8424),v=a(9820);function C(e){var t=e.data,a=(0,d.Z)((function(){return{contents_grid:{width:"100%"}}}))(),r=[];if(t.sort((function(e,t){return new Date(e.date)>new Date(t.date)?-1:1})),t.length>0)for(var n=0;n<4;n++)void 0!==t[n]&&r.push((0,o.jsx)(y.Z,{item:!0,md:12,className:a.contents_grid,children:(0,o.jsx)(x.Z,{item:t[n],index:n})},n));else r.push((0,o.jsx)(v.Z,{}));return r}function k(e){var t=e.menu,a=e.data,r=(0,d.Z)((function(e){return{box:{marginTop:e.spacing(7),marginBottom:e.spacing(7)},typo_title:{fontFamily:"Blacksword, sans-serif",fontWeight:"bold"},more_grid:{textAlign:"center"},more:{background:"linear-gradient(to right, #4776E6, #8E54E9)",color:"white",padding:"15px 30px",margin:"auto",marginTop:e.spacing(10),marginBottom:e.spacing(10),letterSpacing:5}}}))(),n=(0,h.useRouter)();return(0,o.jsx)(l.Z,{component:"article",className:r.box,children:(0,o.jsxs)(y.Z,{container:!0,spacing:5,children:[(0,o.jsx)(y.Z,{item:!0,xs:12,children:(0,o.jsx)(u.Z,{up:"h1",down:"h2",align:"center",className:r.typo_title,gutterBottom:!0,children:t.title})}),(0,o.jsx)(C,{data:a}),(0,o.jsx)(y.Z,{item:!0,xs:12,className:r.more_grid,children:(0,o.jsx)(f.Z,{className:r.more,startIcon:(0,o.jsx)(b,{}),onClick:function(){return n.push(t.url)},children:"M O R E"})})]})})}var Z=!0;function S(e){var t=e.images,a=e.posts,d=e.projects,u=(0,p.J)(t);return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)(s.Z,{title:m.Tl[0].title,description:m.dz,url:m.Tl[0].url.pathname}),(0,o.jsx)(l.Z,{component:"section",children:(0,o.jsxs)(n.pT,{children:[(0,o.jsx)(c.Z,{title:m.R,desc:m.dz,image:"/assets/images/main/".concat(u),onlyEng:!0}),(0,o.jsx)(i.Z,{maxWidth:"xs",children:(0,o.jsx)(k,{menu:m.Tl[1],data:a})}),(0,o.jsx)(g,{}),(0,o.jsx)(i.Z,{maxWidth:"xs",children:(0,o.jsx)(k,{menu:m.Tl[2],data:d})})]})})]})}},8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5509)}])}},function(e){e.O(0,[774,598,433,817,470,553],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);