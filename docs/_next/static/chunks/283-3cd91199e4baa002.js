(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{17706:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(92711),a=n(49306),c=n(99507),i=n(54783),s=n.n(i),o=n(19278),l=n(49222),d=n.n(l);let u=s().bind(d());var g=function(e){let{alt:t,width:n,height:i,className:s,onError:l,onLoad:d,...g}=e,[h,m]=(0,o.useState)("loading"),x=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{m("error"),l&&l(e)},[l,m]),w=(0,o.useCallback)(e=>{m(e.currentTarget.complete?"success":"loading"),d&&d(e)},[d,m]);return(0,o.useEffect)(()=>{x.current&&m(x.current.complete?"success":"loading")},[x,m]),(0,r.jsxs)(c.Z,{"data-component":"Image",height:i,position:"relative",width:n,children:[(0,r.jsx)("img",{alt:t,className:u("image",{loading:"success"!==h},s),"data-status":h,height:"100%",ref:x,width:"100%",onError:p,onLoadCapture:w,...g}),"success"===h?null:(0,r.jsx)(c.Z,{alignItems:"center",height:i,justifyContent:"center",left:0,position:"absolute",top:0,width:n,children:(0,r.jsx)(a.Z,{iconName:"error"===h?"empty":"image",maxWidth:300,width:"75%"})})]})}},49306:function(e,t,n){"use strict";var r=n(58628);t.Z=r.default},2476:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var r=n(92711),a=n(49306),c=n(17706),i=n(15941),s=n(91906),o=n(56857),l=n(55483),d=n(55800),u=n(91307),g=n(99507),h=n(30944),m=n(54783),x=n.n(m),p=n(68347),w=n.n(p),f=n(19278),j=n(50713),k=n.n(j);let Z=x().bind(k());var y=function(e){let{title:t,excerpt:n,thumb:a,category:m,date:x,newist:p,...j}=e,{theme:k}=(0,i.N)(),y=(0,f.useMemo)(()=>{let{year:e,month:t,day:n,hour:r,minute:a,second:c}=(0,s.nq)(x);return"".concat(e.text,"-").concat(t.text,"-").concat(n.text," ").concat(r.text,":").concat(a.text,":").concat(c.text)},[x]),_=(0,f.useMemo)(()=>{let e=new Date(x).getTime(),t=new Date().getTime(),n=t-e;return n<s.ku?"방금 전":n<15*s.ku?"".concat(Math.round(n/s.ku),"일 전"):n<365*s.ku?"".concat(Math.round(n/(30*s.ku)),"달 전"):"".concat(Math.round(n/(365*s.ku)),"년 전")},[x]);return(0,r.jsx)(w(),{className:Z("link",{dark:"dark"===k}),"data-component":"MarkdownListItem",...j,children:(0,r.jsx)(u.Z,{className:Z("item"),variant:"outlined",children:(0,r.jsx)(d.Z,{className:"fullwidth fullheight",children:(0,r.jsxs)(g.Z,{height:"100%",width:"100%",children:[(0,r.jsx)(l.Z,{className:Z("thumb"),position:"relative",width:"100%",children:(0,r.jsx)(c.Z,{alt:t,className:Z("image"),height:"100%",src:a,width:"100%"})}),(0,r.jsxs)(g.Z,{alignItems:"start",flex:1,justifyContent:"start",padding:3,spacing:1,children:[(0,r.jsxs)(g.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",spacing:1,width:"100%",children:[(0,r.jsxs)(g.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,r.jsx)(o.Z,{alt:m,className:Z("category"),src:"https://datastore.itcode.dev/blog/category/".concat(m,".png")}),(0,r.jsx)(h.Z,{variant:"caption",children:m})]}),(0,r.jsx)(g.Z,{alignItems:"center",direction:"row",spacing:1,children:p?(0,r.jsx)(l.Z,{bgcolor:"hotpink",borderRadius:1,padding:"1px 10px",children:(0,r.jsx)(h.Z,{color:"white",fontSize:8,children:"NEW"})}):null})]}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(h.Z,{fontWeight:"bold",textAlign:"start",children:t})}),(0,r.jsx)(g.Z,{flex:1,paddingBottom:2,children:(0,r.jsx)(h.Z,{className:Z("excerpt"),color:"GrayText",textAlign:"start",variant:"caption",children:n})}),(0,r.jsxs)(g.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,r.jsx)(h.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:y}),(0,r.jsx)(h.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:_})]})]})]})})})})},_=n(94749),v=n(63201),M=function(e){let{markdown:t=[],onCardClick:n,...c}=e,i={initial:{opacity:0,translateY:50},view:{opacity:1,translateY:0}};return(0,r.jsx)(l.Z,{"data-component":"MarkdownList",children:(0,r.jsx)(_.ZP,{spacing:4,container:!0,...c,children:t.length>0?t.map(e=>{let{frontmatter:t,url:a}=e;return(0,r.jsx)(_.ZP,{lg:4,sm:6,xs:12,item:!0,children:(0,r.jsx)(v.E.div,{className:"fullheight",initial:"initial",transition:{duration:1},variants:i,viewport:{amount:.3,once:!0},whileInView:"view",children:(0,r.jsx)(y,{category:t.category,date:t.date,excerpt:t.excerpt,href:a,newist:t.isNew,thumb:t.coverImage,title:t.title,onClick:n})})},a)}):(0,r.jsxs)(g.Z,{alignItems:"center",spacing:2,width:"100%",children:[(0,r.jsx)(a.Z,{iconName:"empty",width:180}),(0,r.jsx)(h.Z,{variant:"h5",children:"표시할 항목이 없어요..."})]})})})}},92283:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(92711),a=n(17706),c=n(55483),i=n(55800),s=n(99507),o=n(30944),l=n(54783),d=n.n(l),u=n(6986),g=n.n(u);let h=d().bind(g());var m=function(e){let{category:t,count:n,selected:l,dimmed:d,...u}=e;return(0,r.jsx)(i.Z,{className:"fullwidth","data-component":"MarkdownCategoryItem","data-selected":l,...u,children:(0,r.jsxs)(c.Z,{className:h("card"),position:"relative",width:"100%",children:[(0,r.jsx)(c.Z,{className:h("wrap"),height:"100%",width:"100%",children:(0,r.jsx)(a.Z,{alt:t,className:h("image",{dimmed:d}),height:"100%",src:"https://datastore.itcode.dev/blog/category/".concat(encodeURIComponent(t),".png"),width:"100%"})}),(0,r.jsxs)(s.Z,{alignItems:"center",bgcolor:"#000000AA",bottom:0,className:h("title"),direction:"row",justifyContent:"space-between",padding:1,position:"absolute",width:"100%",children:[(0,r.jsx)(o.Z,{color:"white",variant:"caption",children:t}),(0,r.jsx)(o.Z,{color:"white",variant:"caption",children:n})]})]})})},x=n(18510),p=n(63666),w=n(78896),f=n(98080),j=n(48888),k=n(94749),Z=n(29731),y=n(19278),_=function(e){let{markdown:t}=e,n=(0,Z.useRouter)(),a=(0,Z.useSearchParams)(),c=(0,Z.usePathname)(),i=(0,y.useMemo)(()=>a.get("keyword"),[a]),l=(0,y.useMemo)(()=>a.getAll("category"),[a]),d=(0,y.useMemo)(()=>t.filter(e=>{let{frontmatter:t}=e;return!i||!(i.length>0)||t.title.includes(i)||t.excerpt.includes(i)}).reduce((e,t)=>{let{frontmatter:n}=t,r=e.findIndex(e=>{let{name:t}=e;return t===n.category}),a=l.includes(n.category);return r>-1?(e[r].count+=1,e[r].selected=a):e.push({count:1,name:n.category,selected:a}),e},[{count:t.length,name:"전체",selected:!1}]),[t,i,l]),u=(0,y.useCallback)(e=>l.length>0&&!l.includes(e),[l]),g=(0,y.useCallback)(e=>{let t=new URLSearchParams(a),r=t.get("keyword"),i=t.getAll("category"),s=i.includes(e);t.delete("page"),r&&t.set("keyword",r),"전체"===e?t.delete("category"):s?(t.delete("category"),i.filter(t=>t!==e).forEach(n=>{n!==e&&t.append("category",n)})):t.append("category",e),n.push("".concat(c,"?").concat(t.toString()),{scroll:!1})},[i,a]);return(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(j.Z,{expandIcon:(0,r.jsx)(x.Z,{}),children:(0,r.jsxs)(s.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,r.jsx)(p.Z,{color:"primary"}),(0,r.jsx)(o.Z,{fontWeight:"bold",variant:"h5",children:"카테고리"})]})}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(k.ZP,{spacing:.5,container:!0,children:d.map(e=>{let{name:t,count:n,selected:a}=e;return(0,r.jsx)(k.ZP,{md:2,xs:4,item:!0,children:(0,r.jsx)(m,{category:t,count:n,dimmed:u(t),selected:a,onClick:()=>g(t)})},t)})})})]})},v=function(e){let{fetchMargin:t,isLast:n,onFetch:a,children:i,...s}=e,o=(0,y.useRef)(null);return(0,y.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.some(e=>(e.isIntersecting&&a&&!n&&a(),e.isIntersecting))},{rootMargin:t,threshold:0});return o.current&&e.observe(o.current),()=>{e.disconnect()}},[o.current,t,n,a]),(0,r.jsxs)(c.Z,{"data-component":"InfiniteScroller",...s,children:[i,(0,r.jsx)(c.Z,{ref:o,width:"100%"})]})},M=n(2476),I=n(10025),b=function(e){let{markdown:t}=e,n=(0,Z.useRouter)(),a=(0,Z.useSearchParams)(),i=(0,Z.usePathname)(),{referer:s,setReferer:o}=(0,I.Eh)(),l=(0,y.useMemo)(()=>parseInt(a.get("page")||"1",10),[a]),d=(0,y.useMemo)(()=>a.get("keyword"),[a]),u=(0,y.useMemo)(()=>a.getAll("category"),[a]),g=(0,y.useCallback)(()=>{let e=new URLSearchParams(a);e.set("page","".concat(l+1)),e.delete("category"),d&&e.set("keyword",d),u.forEach(t=>{e.append("category",t)}),n.push("".concat(i,"?").concat(e.toString()),{scroll:!1})},[i,n,a]),h=(0,y.useMemo)(()=>t.filter(e=>{let{frontmatter:t}=e;return d&&d.length>0&&u.length>0?(t.title.includes(d)||t.excerpt.includes(d))&&u.includes(t.category):d&&d.length>0?t.title.includes(d)||t.excerpt.includes(d):!(u.length>0)||u.includes(t.category)}),[u,d,t]),m=(0,y.useMemo)(()=>{let e=6*l;return h.slice(0,e)},[l,h]),x=(0,y.useMemo)(()=>{let e=Math.ceil(h.length/6);return l>=e},[l,h]),p=(0,y.useCallback)(()=>{let e=new URLSearchParams(a),t=e.get("page"),n=e.get("keyword"),r=e.getAll("category"),c={scroll:window.scrollY};t&&(c.page=t),n&&n.length>0&&(c.keyword=n),r&&r.length>0&&(c.category=r),o(c)},[a,o]);return(0,y.useEffect)(()=>{(null==s?void 0:s.scroll)&&window.scroll({top:s.scroll}),o(void 0)},[o]),(0,r.jsx)(c.Z,{"data-component":"MarkdownInfiniteList",children:(0,r.jsx)(v,{fetchMargin:"500px",isLast:x,onFetch:g,children:(0,r.jsx)(M.Z,{markdown:m,onCardClick:p})})})},C=n(68563),L=n(2461),N=n(27745),S=function(){let e=(0,Z.useRouter)(),t=(0,Z.useSearchParams)(),n=(0,Z.usePathname)(),[a,c]=(0,y.useState)(""),i=(0,y.useRef)(null),s=(0,y.useCallback)(r=>{let{currentTarget:a}=r,c=new URLSearchParams(t);c.delete("page"),a.value.length>0?c.set("keyword",a.value):c.delete("keyword"),e.push("".concat(n,"?").concat(c.toString()),{scroll:!1})},[e,t]);return(0,y.useEffect)(()=>{let e=new URLSearchParams(t),n=e.get("keyword");c(n||"")},[]),(0,r.jsx)(N.Z,{"data-component":"MarkdownSearch",defaultValue:a,label:"키워드",placeholder:"⌨️ 원하는 키워드를 입력해보세요",ref:i,size:"small",variant:"outlined",InputProps:{startAdornment:(0,r.jsx)(L.Z,{position:"start",children:(0,r.jsx)(C.Z,{})})},onChange:s})};function R(e){let{type:t}=e,n=(0,I.AM)(),a=(0,I.zm)(),c={posts:n.markdown,projects:a.markdown};return(0,r.jsxs)(s.Z,{"data-component":"MarkdownBox",spacing:10,children:[(0,r.jsxs)(s.Z,{spacing:4,children:[(0,r.jsx)(S,{}),(0,r.jsx)(_,{markdown:c[t]})]}),(0,r.jsx)(b,{markdown:c[t]})]})}},91906:function(e,t,n){"use strict";n.d(t,{Gd:function(){return s},ku:function(){return a},nq:function(){return i}}),n(44328);let r={markdownHeading:/^(#{1,6})(.+)$/gm},a=864e5;function c(e,t){let n="".concat(Math.floor(e)).length,r=t-n;return r>0?"".concat("0".repeat(r)).concat(e):"".concat(e)}function i(e){let t=e?new Date(e):new Date,n=t.getMonth()+1;return{day:{text:c(t.getDate(),2),value:t.getDate()},hour:{text:c(t.getHours(),2),value:t.getHours()},minute:{text:c(t.getMinutes(),2),value:t.getMinutes()},month:{text:c(n,2),value:n},second:{text:c(t.getSeconds(),2),value:t.getSeconds()},timestame:t.getTime(),year:{text:"".concat(t.getFullYear()),value:t.getFullYear()}}}function s(e){let t=[];for(;;){let n=r.markdownHeading.exec(e);if(null===n)break;t.push({level:n[1].trim().length,text:n[2].trim()})}return t}},49222:function(e){e.exports={image:"Image_image__b6mOf",loading:"Image_loading__3Lf43"}},6986:function(e){e.exports={card:"MarkdownCategoryItem_card__ImsuR",image:"MarkdownCategoryItem_image__BZrYE",wrap:"MarkdownCategoryItem_wrap__E1H3l",dimmed:"MarkdownCategoryItem_dimmed__3RTdj",title:"MarkdownCategoryItem_title__0rdoJ"}},50713:function(e){e.exports={link:"MarkdownListItem_link__RL6t8",image:"MarkdownListItem_image__mvHOE",dark:"MarkdownListItem_dark__UYuyY",item:"MarkdownListItem_item__hy1LR",thumb:"MarkdownListItem_thumb__dugBn",category:"MarkdownListItem_category__O1tSD",excerpt:"MarkdownListItem_excerpt__MkUSD",newist:"MarkdownListItem_newist__RSK52"}}}]);