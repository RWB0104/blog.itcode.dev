(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{70389:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(92711),r=n(15941);function c(e,t){let n="".concat(Math.floor(e)).length,a=t-n;return a>0?"".concat("0".repeat(a)).concat(e):"".concat(e)}n(44328);var o=n(56857),s=n(55483),l=n(55800),i=n(91307),d=n(99507),u=n(30944),g=n(54783),h=n.n(g),m=n(68347),x=n.n(m),p=n(19278),w=n(50713),j=n.n(w);let y=h().bind(j());var f=function(e){let{title:t,excerpt:n,thumb:g,category:h,date:m,...w}=e,{theme:j}=(0,r.N)(),f=(0,p.useMemo)(()=>{let{year:e,month:t,day:n,hour:a,minute:r,second:o}=function(e){let t=e?new Date(e):new Date,n=t.getMonth()+1;return{day:{text:c(t.getDate(),2),value:t.getDate()},hour:{text:c(t.getHours(),2),value:t.getHours()},minute:{text:c(t.getMinutes(),2),value:t.getMinutes()},month:{text:c(n,2),value:n},second:{text:c(t.getSeconds(),2),value:t.getSeconds()},timestame:t.getTime(),year:{text:"".concat(t.getFullYear()),value:t.getFullYear()}}}(m);return"".concat(e.text,"-").concat(t.text,"-").concat(n.text," ").concat(a.text,":").concat(r.text,":").concat(o.text)},[m]),k=(0,p.useMemo)(()=>{let e=new Date(m).getTime(),t=new Date().getTime(),n=t-e;return n<864e5?"방금 전":n<1296e6?"".concat(Math.round(n/864e5),"일 전"):n<31536e6?"".concat(Math.round(n/2592e6),"달 전"):"".concat(Math.round(n/31536e6),"년 전")},[m]);return(0,a.jsx)(x(),{className:y("link",{dark:"dark"===j}),"data-component":"MarkdownListItem",...w,children:(0,a.jsx)(i.Z,{className:y("item"),variant:"outlined",children:(0,a.jsx)(l.Z,{className:"fullwidth fullheight",children:(0,a.jsxs)(d.Z,{height:"100%",width:"100%",children:[(0,a.jsx)(s.Z,{className:y("thumb"),position:"relative",width:"100%",children:(0,a.jsx)("img",{alt:t,className:y("image"),height:"100%",src:g,width:"100%"})}),(0,a.jsxs)(d.Z,{alignItems:"start",flex:1,justifyContent:"start",padding:3,spacing:1,children:[(0,a.jsxs)(d.Z,{alignItems:"center",direction:"row",spacing:1,children:[(0,a.jsx)(o.Z,{alt:h,className:y("category"),src:"https://datastore.itcode.dev/blog/category/".concat(h,".png")}),(0,a.jsx)(u.Z,{variant:"caption",children:h})]}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(u.Z,{fontWeight:"bold",textAlign:"start",children:t})}),(0,a.jsx)(d.Z,{flex:1,paddingBottom:2,children:(0,a.jsx)(u.Z,{className:y("excerpt"),color:"GrayText",textAlign:"start",variant:"caption",children:n})}),(0,a.jsxs)(d.Z,{alignItems:"center",direction:"row",justifyContent:"space-between",width:"100%",children:[(0,a.jsx)(u.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:f}),(0,a.jsx)(u.Z,{color:"GrayText",textAlign:"start",variant:"caption",children:k})]})]})]})})})})}},17749:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var a=n(92711),r=n(55483),c=n(55800),o=n(99507),s=n(30944),l=n(54783),i=n.n(l),d=n(6986),u=n.n(d);let g=i().bind(u());var h=function(e){let{category:t,count:n,selected:l,dimmed:i,...d}=e;return(0,a.jsx)(c.Z,{className:"fullwidth","data-component":"MarkdownCategoryItem","data-selected":l,...d,children:(0,a.jsxs)(r.Z,{className:g("card"),position:"relative",width:"100%",children:[(0,a.jsx)(r.Z,{className:g("wrap"),children:(0,a.jsx)("img",{alt:t,className:g("image",{dimmed:i}),height:"100%",src:"https://datastore.itcode.dev/blog/category/".concat(encodeURIComponent(t),".png"),width:"100%"})}),(0,a.jsxs)(o.Z,{alignItems:"center",bgcolor:"#000000AA",bottom:0,className:g("title"),direction:"row",justifyContent:"space-between",padding:1,position:"absolute",width:"100%",children:[(0,a.jsx)(s.Z,{color:"white",variant:"caption",children:t}),(0,a.jsx)(s.Z,{color:"white",variant:"caption",children:n})]})]})})},m=n(18510),x=n(63666),p=n(78896),w=n(98080),j=n(48888),y=n(94749),f=n(29731),k=n(19278),Z=function(e){let{markdown:t}=e,n=(0,f.useRouter)(),r=(0,f.useSearchParams)(),c=(0,f.usePathname)(),l=(0,k.useMemo)(()=>r.get("keyword"),[r]),i=(0,k.useMemo)(()=>r.getAll("category"),[r]),d=(0,k.useMemo)(()=>t.filter(e=>{let{frontmatter:t}=e;return!l||!(l.length>0)||t.title.includes(l)||t.excerpt.includes(l)}).reduce((e,t)=>{let{frontmatter:n}=t,a=e.findIndex(e=>{let{name:t}=e;return t===n.category}),r=i.includes(n.category);return a>-1?(e[a].count+=1,e[a].selected=r):e.push({count:1,name:n.category,selected:r}),e},[{count:t.length,name:"전체",selected:!1}]),[t,l,i]),u=(0,k.useCallback)(e=>i.length>0&&!i.includes(e),[i]),g=(0,k.useCallback)(e=>{let t=new URLSearchParams(r),a=t.get("keyword"),o=t.getAll("category"),s=o.includes(e);t.delete("page"),a&&t.set("keyword",a),"전체"===e?t.delete("category"):s?(t.delete("category"),o.filter(t=>t!==e).forEach(n=>{n!==e&&t.append("category",n)})):t.append("category",e),n.push("".concat(c,"?").concat(t.toString()),{scroll:!1})},[l,r]);return(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(j.Z,{expandIcon:(0,a.jsx)(m.Z,{}),children:(0,a.jsxs)(o.Z,{alignItems:"center",direction:"row",spacing:2,children:[(0,a.jsx)(x.Z,{color:"primary"}),(0,a.jsx)(s.Z,{fontWeight:"bold",variant:"h5",children:"카테고리"})]})}),(0,a.jsx)(w.Z,{children:(0,a.jsx)(y.ZP,{spacing:.5,container:!0,children:d.map(e=>{let{name:t,count:n,selected:r}=e;return(0,a.jsx)(y.ZP,{xl:2,item:!0,children:(0,a.jsx)(h,{category:t,count:n,dimmed:u(t),selected:r,onClick:()=>g(t)})},t)})})})]})},M=function(e){let{fetchMargin:t,isLast:n,onFetch:c,children:o,...s}=e,l=(0,k.useRef)(null);return(0,k.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.some(e=>(e.isIntersecting&&c&&!n&&c(),e.isIntersecting))},{rootMargin:t,threshold:0});return l.current&&e.observe(l.current),()=>{e.disconnect()}},[l.current,t,n,c]),(0,a.jsxs)(r.Z,{"data-component":"InfiniteScroller",...s,children:[o,(0,a.jsx)(r.Z,{ref:l,width:"100%"})]})},_=n(70389),v=n(10025),I=n(63201),b=function(e){let{markdown:t}=e,n={initial:{opacity:0,translateY:50},view:{opacity:1,translateY:0}},c=(0,f.useRouter)(),o=(0,f.useSearchParams)(),s=(0,f.usePathname)(),{referer:l,setReferer:i}=(0,v.Eh)(),d=(0,k.useMemo)(()=>parseInt(o.get("page")||"1",10),[o]),u=(0,k.useMemo)(()=>o.get("keyword"),[o]),g=(0,k.useMemo)(()=>o.getAll("category"),[o]),h=(0,k.useCallback)(()=>{let e=new URLSearchParams(o);e.set("page","".concat(d+1)),e.delete("category"),u&&e.set("keyword",u),g.forEach(t=>{e.append("category",t)}),c.push("".concat(s,"?").concat(e.toString()),{scroll:!1})},[s,c,o]),m=(0,k.useMemo)(()=>t.filter(e=>{let{frontmatter:t}=e;return u&&u.length>0&&g.length>0?(t.title.includes(u)||t.excerpt.includes(u))&&g.includes(t.category):u&&u.length>0?t.title.includes(u)||t.excerpt.includes(u):!(g.length>0)||g.includes(t.category)}),[g,u,t]),x=(0,k.useMemo)(()=>{let e=6*d;return m.slice(0,e)},[d,m]),p=(0,k.useMemo)(()=>{let e=Math.ceil(m.length/6);return d>=e},[d,m]),w=(0,k.useCallback)(()=>{let e=new URLSearchParams(o),t=e.get("page"),n=e.get("keyword"),a=e.getAll("category"),r={scroll:window.scrollY};t&&(r.page=t),n&&n.length>0&&(r.keyword=n),a&&a.length>0&&(r.category=a),i(r)},[o,i]);return(0,k.useEffect)(()=>{(null==l?void 0:l.scroll)&&window.scroll({top:l.scroll}),i(void 0)},[i]),(0,a.jsx)(r.Z,{"data-component":"MarkdownList",children:(0,a.jsx)(M,{fetchMargin:"500px",isLast:p,onFetch:h,children:(0,a.jsx)(y.ZP,{spacing:4,container:!0,children:x.map(e=>{let{frontmatter:t,url:r}=e;return(0,a.jsx)(y.ZP,{lg:4,sm:6,xs:12,item:!0,children:(0,a.jsx)(I.E.div,{className:"fullheight",initial:"initial",transition:{duration:1},variants:n,viewport:{amount:.3,once:!0},whileInView:"view",children:(0,a.jsx)(_.Z,{category:t.category,date:t.date,excerpt:t.excerpt,href:r,thumb:t.coverImage,title:t.title,onClick:w})})},r)})})})})},C=n(68563),S=n(2461),L=n(27745),N=function(){let e=(0,f.useRouter)(),t=(0,f.useSearchParams)(),n=(0,f.usePathname)(),[r,c]=(0,k.useState)(""),o=(0,k.useRef)(null),s=(0,k.useCallback)(a=>{let{currentTarget:r}=a,c=new URLSearchParams(t);c.delete("page"),r.value.length>0?c.set("keyword",r.value):c.delete("keyword"),e.push("".concat(n,"?").concat(c.toString()),{scroll:!1})},[e,t]);return(0,k.useEffect)(()=>{let e=new URLSearchParams(t),n=e.get("keyword");c(n||"")},[]),(0,a.jsx)(L.Z,{"data-component":"MarkdownSearch",defaultValue:r,label:"키워드",placeholder:"⌨️ 원하는 키워드를 입력해보세요",ref:o,size:"small",variant:"outlined",InputProps:{startAdornment:(0,a.jsx)(S.Z,{position:"start",children:(0,a.jsx)(C.Z,{})})},onChange:s})};function P(e){let{type:t}=e,n=(0,v.AM)(),r=(0,v.zm)(),c={posts:n.markdown,projects:r.markdown};return(0,a.jsxs)(o.Z,{"data-component":"MarkdownBox",spacing:10,children:[(0,a.jsxs)(o.Z,{spacing:4,children:[(0,a.jsx)(N,{}),(0,a.jsx)(Z,{markdown:c[t]})]}),(0,a.jsx)(b,{markdown:c[t]})]})}},6986:function(e){e.exports={card:"MarkdownCategoryItem_card__ImsuR",image:"MarkdownCategoryItem_image__BZrYE",wrap:"MarkdownCategoryItem_wrap__E1H3l",dimmed:"MarkdownCategoryItem_dimmed__3RTdj",title:"MarkdownCategoryItem_title__0rdoJ"}},50713:function(e){e.exports={link:"MarkdownListItem_link__RL6t8",image:"MarkdownListItem_image__mvHOE",dark:"MarkdownListItem_dark__UYuyY",item:"MarkdownListItem_item__hy1LR",thumb:"MarkdownListItem_thumb__dugBn",category:"MarkdownListItem_category__O1tSD",excerpt:"MarkdownListItem_excerpt__MkUSD"}}}]);