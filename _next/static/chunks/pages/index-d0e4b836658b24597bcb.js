(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,179],{1267:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var o=a(2122),n=a(2949),r=a(7294),i=(a(5697),a(6010)),c=(0,a(3786).Z)(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),l=a(4670),s=a(9693),u=a(3834),d=a(3871),g=a(4720);function m(e){return"Backspace"===e.key||"Delete"===e.key}var p=r.forwardRef((function(e,t){var a=e.avatar,l=e.classes,s=e.className,p=e.clickable,h=e.color,b=void 0===h?"default":h,f=e.component,y=e.deleteIcon,x=e.disabled,v=void 0!==x&&x,Z=e.icon,k=e.label,j=e.onClick,w=e.onDelete,C=e.onKeyDown,_=e.onKeyUp,S=e.size,N=void 0===S?"medium":S,T=e.variant,E=void 0===T?"default":T,I=(0,n.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),R=r.useRef(null),M=(0,u.Z)(R,t),P=function(e){e.stopPropagation(),w&&w(e)},D=!(!1===p||!j)||p,z="small"===N,L=f||(D?g.Z:"div"),W=L===g.Z?{component:"div"}:{},$=null;if(w){var F=(0,i.Z)("default"!==b&&("default"===E?l["deleteIconColor".concat((0,d.Z)(b))]:l["deleteIconOutlinedColor".concat((0,d.Z)(b))]),z&&l.deleteIconSmall);$=y&&r.isValidElement(y)?r.cloneElement(y,{className:(0,i.Z)(y.props.className,l.deleteIcon,F),onClick:P}):r.createElement(c,{className:(0,i.Z)(l.deleteIcon,F),onClick:P})}var B=null;a&&r.isValidElement(a)&&(B=r.cloneElement(a,{className:(0,i.Z)(l.avatar,a.props.className,z&&l.avatarSmall,"default"!==b&&l["avatarColor".concat((0,d.Z)(b))])}));var O=null;return Z&&r.isValidElement(Z)&&(O=r.cloneElement(Z,{className:(0,i.Z)(l.icon,Z.props.className,z&&l.iconSmall,"default"!==b&&l["iconColor".concat((0,d.Z)(b))])})),r.createElement(L,(0,o.Z)({role:D||w?"button":void 0,className:(0,i.Z)(l.root,s,"default"!==b&&[l["color".concat((0,d.Z)(b))],D&&l["clickableColor".concat((0,d.Z)(b))],w&&l["deletableColor".concat((0,d.Z)(b))]],"default"!==E&&[l.outlined,{primary:l.outlinedPrimary,secondary:l.outlinedSecondary}[b]],v&&l.disabled,z&&l.sizeSmall,D&&l.clickable,w&&l.deletable),"aria-disabled":!!v||void 0,tabIndex:D||w?0:void 0,onClick:j,onKeyDown:function(e){e.currentTarget===e.target&&m(e)&&e.preventDefault(),C&&C(e)},onKeyUp:function(e){e.currentTarget===e.target&&(w&&m(e)?w(e):"Escape"===e.key&&R.current&&R.current.blur()),_&&_(e)},ref:M},W,I),B||O,r.createElement("span",{className:(0,i.Z)(l.label,z&&l.labelSmall)},k),$)})),h=(0,l.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=(0,s.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,s._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,s._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.U1)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,s.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,s.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,s.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,s.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(p)},9441:function(e,t,a){"use strict";var o=a(7294),n=a(3786);t.Z=(0,n.Z)(o.createElement("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}),"LocalOffer")},8247:function(e,t,a){"use strict";function o(e){return e[Math.floor(Math.random()*e.length)]}function n(e){var t=e.getFullYear(),a=e.getMonth()+1<10?"0".concat(e.getMonth()+1):e.getMonth()+1,o=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=e.getHours()<10?"0".concat(e.getHours()):e.getHours(),r=e.getMinutes()<10?"0".concat(e.getMinutes()):e.getMinutes(),i=e.getSeconds()<10?"0".concat(e.getSeconds()):e.getSeconds(),c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];return"".concat(t,"-").concat(a,"-").concat(o," ").concat(c," ").concat(n,":").concat(r,":").concat(i)}a.d(t,{J:function(){return o},L:function(){return n}})},1133:function(e,t,a){"use strict";a.d(t,{R:function(){return l},dz:function(){return s},us:function(){return u},Tl:function(){return d},TJ:function(){return g},xE:function(){return m}});var o=a(5893),n=a(4577),r=a(5747),i=a(9242),c=a(89),l="Kapoo",s="314159265359\ubc88\uc9f8 \uc54c\ud30c\uce74\uc758 \uac1c\ubc1c \ub099\uc11c\uc7a5",u="/assets/images/logo.png",d=[{id:1,title:"Home",url:{pathname:"/"},icon:(0,o.jsx)(n.Z,{})},{id:2,title:"Posts",url:{pathname:"/posts"},icon:(0,o.jsx)(r.Z,{})},{id:3,title:"Projects",url:{pathname:"/projects"},icon:(0,o.jsx)(i.Z,{})},{id:4,title:"About",url:{pathname:"/about"},icon:(0,o.jsx)(c.Z,{})}],g=[{title:"Cake is a fxcking LIE",author:"Are you steel there?",images:"https://user-images.githubusercontent.com/50317129/118843488-126c6200-b905-11eb-9324-9ea96ea833dd.png"},{title:"Sierra Madre. \uc77c\ud655\ucc9c\uae08\uc758 \uafc8\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uacf3.",author:"Sierra Madre Casino",images:"https://user-images.githubusercontent.com/50317129/118843635-35971180-b905-11eb-874f-e7929f9f9664.png"},{title:"Trust Me.",author:"BT",images:"https://user-images.githubusercontent.com/50317129/118843791-595a5780-b905-11eb-88f8-781bbf897ef5.png"},{title:"A man chooses, A slave obeys.",author:"a Golfer",images:"https://user-images.githubusercontent.com/50317129/118843919-77c05300-b905-11eb-8213-6f9caaa58829.png"},{title:"404 Not Found",author:"undefined... x_X",images:"https://user-images.githubusercontent.com/50317129/118844150-b1915980-b905-11eb-916b-49921c5c46f7.gif"},{title:"\uac8c\uc784\uc744 \ud558\uba74 \uc774\uaca8\uc57c\uc9c0!",author:"D.Va",images:"https://user-images.githubusercontent.com/50317129/118844364-ddacda80-b905-11eb-9051-4f3f50f94f7e.png"},{title:"\ub0b4 \uc190\uc744 \uc7a1\uc544, \uc2dc\uc791\ub418\ub294 Party time.",author:"\ud658\uc0c1\uc18d\uc758 \uadf8\ub300",images:"https://user-images.githubusercontent.com/50317129/118844396-e3a2bb80-b905-11eb-9c71-d11851905631.png"},{title:"Enjoy your stay",author:"Fallout New Vegas",images:"https://user-images.githubusercontent.com/50317129/118844534-fddc9980-b905-11eb-8b8b-bbb3686066d8.png"},{title:"War... War never changes.",author:"Fallout Series",images:"https://user-images.githubusercontent.com/50317129/118844589-08972e80-b906-11eb-8b69-a32c9a29a329.png"},{title:"War... War never changes. Men do.",author:"Ulysses",images:"https://user-images.githubusercontent.com/50317129/118844943-514ee780-b906-11eb-92fc-306cb4ad2174.png"},{title:"On your left.",author:"Sam",images:"https://user-images.githubusercontent.com/50317129/118845228-8ce9b180-b906-11eb-860e-c1f41459a08d.png"},{title:"History is written by the victors.",author:"Cpt. Price",images:"https://user-images.githubusercontent.com/50317129/118845457-c28e9a80-b906-11eb-8740-3fb5fd734a75.png"},{title:"History is written by the victors.",author:"Gen. Shepherd",images:"https://user-images.githubusercontent.com/50317129/118846014-4052a600-b907-11eb-880c-0dd5708123ed.png"},{title:"Remember. We get dirty, World be stay clean. That's the mission.",author:"Cpt. Price",images:"https://user-images.githubusercontent.com/50317129/118846231-7b54d980-b907-11eb-87b0-6354b55c3b5c.png"},{title:"Succeeding you, Father.",author:"Arthas Menethil",images:"https://user-images.githubusercontent.com/50317129/118846373-9aec0200-b907-11eb-8b13-04ca3e63d747.png"},{title:"My life for Aiur",author:"Zeratul",images:"https://user-images.githubusercontent.com/50317129/118846580-d25aae80-b907-11eb-92ff-ad4709f1e3ef.png"},{title:"\ub4dc\ub514\uc5b4, \uc62c \uac83\uc774 \uc654\uad70.",author:"Tychus J. Findlay",images:"https://user-images.githubusercontent.com/50317129/118846645-e7374200-b907-11eb-9d64-8d11b955d219.png"},{title:"\uadf8 \uc5ec\uc790\uac00 \uadf8\ub9cc\ud55c \uac00\uce58\uac00 \uc788\uae38 \ubc14\ub77c\uaca0\uc5b4, \uc9c0\ubbf8...",author:"Tychus J. Findlay...?",images:"https://user-images.githubusercontent.com/50317129/118846876-1e0d5800-b908-11eb-836c-697e3eb1cdc2.png"},{title:"\uc9c4\uc9e4\ub8e8\uc5d0\uc5ec \uac00\uc9e4\ub8e8\uc5d0\uc5ec??? \ub124????",author:"\ud558\ube75",images:"https://user-images.githubusercontent.com/50317129/118972620-b4468a00-b9ab-11eb-8751-e22b63075321.png"},{title:"\uc7a5\ube44\ub97c \uc815\uc9c0\ud569\ub2c8\ub2e4.",author:"\uc548 \ub418\uc796\uc544?",images:"https://user-images.githubusercontent.com/50317129/118972896-08ea0500-b9ac-11eb-9923-a40717be81b8.png"},{title:"I think we'll be OK, Leon.",author:"Matilda",images:"https://user-images.githubusercontent.com/50317129/118973091-477fbf80-b9ac-11eb-8b7a-c1275d2bf97b.png"},{title:"I think we'll be OK, Leon.",author:"Matilda",images:"https://user-images.githubusercontent.com/50317129/118973091-477fbf80-b9ac-11eb-8b7a-c1275d2bf97b.png"},{title:"No kids, No women",author:"Leon",images:"https://user-images.githubusercontent.com/50317129/118973681-e4425d00-b9ac-11eb-8db5-301f55bd6472.png"},{title:"\uc774\ub7f0 \ub0a0\uc5d4, \ub108 \uac19\uc740 \uaf2c\ub9c8\ub4e4\uc740...",author:"WA! Sxxs!!",images:"https://user-images.githubusercontent.com/50317129/119267705-b9653c80-bc2a-11eb-845c-fac6fcd313f8.gif"}],m=10},9831:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var o=a(5893),n=a(9008),r=a(1133);function i(e){var t=e.title;return(0,o.jsx)(n.default,{children:(0,o.jsx)("title",{children:"".concat(t," - ").concat(r.R)})})}},4921:function(e,t,a){"use strict";a.d(t,{Z:function(){return b}});var o=a(6156),n=a(5893),r=a(7294),i=a(8367),c=a(1017),l=a(8920),s=a(3457),u=a(7748),d=a(2318),g=a(4720),m=a(5517),p=a(1120),h=a(1490);function b(e){var t=e.title,a=e.desc,b=e.category,f=e.onlyEng,y=function(e){return(0,p.Z)((function(t){return{top_wrapper:(0,o.Z)({height:"calc(100vh - 64px)",backgroundImage:"url(".concat(e,")"),backgroundColor:"rgba(0, 0, 0, 0.6)",backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},t.breakpoints.down("sm"),{height:"calc(100vh - 112px)"}),top_content:{width:"100%",height:"100%",padding:50},title:{color:"white",marginBottom:60,fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif",fontWeight:"bold"},title_eng:{color:"white",marginBottom:60,fontFamily:"Blacksword, sans-serif",fontWeight:"bold"},desc:{color:"white",fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif"},down:(0,o.Z)({width:"100%",padding:20,"& svg":{width:50,height:50}},t.breakpoints.down("sm"),{"& svg":{width:30,height:30}}),divider:{opacity:0}}}))()}(e.image),x=(0,l.Z)(),v=(0,s.Z)(x.breakpoints.down("sm")),Z=(0,r.useRef)(null);return(0,c.default)({ssrFadeOut:!0}),(0,r.useEffect)((function(){document.getElementById("top").addEventListener("wheel",(function(e){e.deltaY>0&&(e.preventDefault(),Z.current.scrollIntoView({behavior:"smooth"}))}))})),(0,n.jsxs)(u.Z,{id:"top",display:"flex",flexDirection:"column",className:y.top_wrapper,children:[(0,n.jsxs)(u.Z,{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",className:y.top_content,children:[(0,n.jsx)(d.Z,{variant:v?"h5":"h3",align:"center",className:y.desc,children:(0,n.jsx)(i.BW,{left:!0,cascade:!0,children:b&&"[".concat(b,"]")})}),(0,n.jsx)(d.Z,{variant:v?"h3":"h1",align:"center",className:f?y.title_eng:y.title,children:(0,n.jsx)(i.BW,{left:!0,cascade:!0,children:t})}),(0,n.jsx)(d.Z,{variant:v?"h6":"h4",align:"center",className:y.desc,children:(0,n.jsx)(i.BW,{left:!0,cascade:!0,children:a})})]}),(0,n.jsx)(g.Z,{className:y.down,onClick:function(){return Z.current.scrollIntoView({behavior:"smooth"})},children:(0,n.jsx)(h.Z,{})}),(0,n.jsx)(m.Z,{ref:Z,className:y.divider})]})}},8424:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var o=a(5893),n=a(8367),r=a(1163),i=a(1749),c=a(4720),l=a(7748),s=a(2318),u=a(1267),d=a(1120),g=a(907),m=a(9441);function p(e){var t,a=e.item,p=function(e,t){return(0,d.Z)((function(a){return{zoom:{transitionDelay:"".concat(150*e,"ms")},post_button:{textAlign:"initial",width:"100%","& .wrapper":{overflow:"hidden"},"&:hover .wrapper > div":{transform:"scale(1.2)",transition:"0.5s"}},post_image:{height:"303.98px",backgroundImage:"url(".concat(t,")"),backgroundSize:"cover",backgroundPosition:"center",transform:"scale(1)",transition:"0.5s"},post_content:{padding:"7px 20px 7px 20px",display:"flex",flexDirection:"column"},post_category:{color:g.Z[500],marginRight:10},post_category_typo:{"&:hover":{textDecoration:"underline"}},post_title:{paddingBottom:a.spacing(2),fontWeight:"bold"},post_desc:{flexGrow:1},post_tag:{marginLeft:3,marginRight:3}}}))()}(e.index,a.coverImage),h=(0,r.useRouter)();return(0,o.jsx)(i.Z,{component:"article",item:!0,xs:12,children:(0,o.jsx)(n.pT,{children:(0,o.jsx)(c.Z,{className:p.post_button,onClick:function(){return h.push("/posts/".concat(a.slug))},children:(0,o.jsxs)(i.Z,{container:!0,spacing:0,children:[(0,o.jsx)(i.Z,{className:(p.image_wrap,"wrapper"),item:!0,xs:4,children:(0,o.jsx)(l.Z,{className:p.post_image})}),(0,o.jsxs)(i.Z,{item:!0,xs:8,className:p.post_content,children:[(0,o.jsxs)(i.Z,{container:!0,direction:"row",alignItems:"center",children:[(0,o.jsx)(m.Z,{className:p.post_category}),(0,o.jsx)(s.Z,{variant:"h6",color:"primary",className:p.post_category_typo,onClick:function(e){e.stopPropagation(),h.push({pathname:"/posts",query:{page:1,category:e.target.innerText}})},children:a.category})]}),(0,o.jsx)(s.Z,{variant:"h4",className:p.post_title,children:a.title}),(0,o.jsx)(s.Z,{variant:"caption",className:p.post_desc,children:a.excerpt}),(0,o.jsx)(l.Z,{children:null===(t=a.tag)||void 0===t?void 0:t.map((function(e,t){return(0,o.jsx)(u.Z,{color:"primary",label:"# ".concat(e),className:p.post_tag,onClick:function(e){return e.stopPropagation()}},t)}))})]})]})})})})}},5509:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return w},default:function(){return C}});var o=a(5893),n=a(7294),r=a(7748),i=a(3832),c=a(8367),l=a(4921),s=a(9831),u=a(8920),d=a(3457),g=a(2318),m=a(1120),p=a(8247),h=a(1133);function b(){var e=(0,m.Z)((function(e){return{box_easter:{padding:e.spacing(3),backgroundAttachment:"fixed",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center",textAlign:"center",height:"30vw",maxHeight:800,minHeight:300,display:"flex",flexDirection:"column",justifyContent:"center"},typo_title:{color:"white",fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif",fontStyle:"italic",fontWeight:"bold"},typo_desc:{color:"white",fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif",fontStyle:"italic"}}}))(),t=(0,u.Z)(),a=(0,d.Z)(t.breakpoints.down("sm")),n=(0,p.J)(h.TJ);return(0,o.jsx)(c.pT,{children:(0,o.jsxs)(r.Z,{component:"article",className:e.box_easter,style:{backgroundImage:"url(".concat(n.images,")")},children:[(0,o.jsx)(g.Z,{variant:a?"h5":"h3",align:"center",className:e.typo_title,children:n.title}),(0,o.jsx)(g.Z,{variant:a?"body1":"h4",align:"center",className:e.typo_desc,children:n.author})]})})}var f=a(1163),y=a(1749),x=a(282),v=(0,a(3786).Z)(n.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),Z=a(8424);function k(e){var t=e.data,a=(0,m.Z)((function(){return{contents_grid:{width:"100%"}}}))(),n=[];t.sort((function(e,t){return new Date(e.date)>new Date(t.date)?-1:1}));for(var r=0;r<4;r++)void 0!==t[r]&&n.push((0,o.jsx)(y.Z,{item:!0,md:12,className:a.contents_grid,children:(0,o.jsx)(Z.Z,{item:t[r],index:r})},r));return n}function j(e){var t=e.menu,a=e.data,n=(0,m.Z)((function(e){return{box:{marginTop:e.spacing(7),marginBottom:e.spacing(7)},typo_title:{fontFamily:"Blacksword, sans-serif",fontWeight:"bold"},more_grid:{textAlign:"center"},more:{background:"linear-gradient(to right, #4776E6, #8E54E9)",color:"white",padding:"15px 30px",margin:"auto",letterSpacing:5}}}))(),i=(0,u.Z)(),c=(0,f.useRouter)(),l=(0,d.Z)(i.breakpoints.down("sm"));return(0,o.jsx)(r.Z,{component:"article",className:n.box,children:(0,o.jsxs)(y.Z,{container:!0,spacing:5,children:[(0,o.jsx)(y.Z,{item:!0,xs:12,children:(0,o.jsx)(g.Z,{variant:l?"h3":"h1",align:"center",className:n.typo_title,gutterBottom:!0,children:t.title})}),(0,o.jsx)(k,{data:a}),(0,o.jsx)(y.Z,{item:!0,xs:12,className:n.more_grid,children:(0,o.jsx)(x.Z,{className:n.more,startIcon:(0,o.jsx)(v,{}),onClick:function(){return c.push(t.url)},children:"M O R E"})})]})})}var w=!0;function C(e){var t=e.images,a=e.posts,u=e.projects,d=(0,p.J)(t);return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)(s.Z,{title:h.Tl[0].title}),(0,o.jsxs)(Head,{children:[(0,o.jsx)("meta",{property:"og:site_name",content:h.R}),(0,o.jsx)("meta",{property:"og:title",content:h.Tl[0].title}),(0,o.jsx)("meta",{property:"og:description",content:h.dz}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://rwb0104.github.io/".concat(h.Tl[0].url.pathname,"/")}),(0,o.jsx)("meta",{property:"og:image",content:"https://rwb0104.github.io/assets/images/logo.png"}),(0,o.jsx)("meta",{property:"og:locale",content:"ko_KR"})]}),(0,o.jsx)(r.Z,{component:"section",children:(0,o.jsxs)(c.pT,{children:[(0,o.jsx)(l.Z,{title:h.R,desc:h.dz,image:"/assets/images/main/".concat(d),onlyEng:!0}),(0,o.jsx)(i.Z,{maxWidth:"md",children:(0,o.jsx)(j,{menu:h.Tl[1],data:a})}),(0,o.jsx)(b,{}),(0,o.jsx)(i.Z,{maxWidth:"md",children:(0,o.jsx)(j,{menu:h.Tl[2],data:u})})]})})]})}},8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5509)}])},4453:function(){}},function(e){e.O(0,[774,598,433,817,470],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);