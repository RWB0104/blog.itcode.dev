(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[664],{2446:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comments",function(){return n(1121)}])},100:function(e,t,n){"use strict";n.d(t,{$5:function(){return s},FM:function(){return a},IW:function(){return i},MA:function(){return o},Py:function(){return c},q7:function(){return u}});var r=n(8767);function o(e,t){let n=(0,r.useMutation)(["useGoogleAuthorize"],async()=>{let e=await fetch("https://accounts.google.com/o/oauth2/token",{body:JSON.stringify({client_id:"22130300203-s47tft38ah28e6o2jsv5144vqn1cl32p.apps.googleusercontent.com",client_secret:"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",grant_type:"refresh_token",refresh_token:"1//04SoK9dOIeQQDCgYIARAAGAQSNwF-L9IrNkGEGZ5xuJSsDuT5NbSMUWBd9sFrbtdv3hegoJZmQqSITRMCVMy1y71_DJZl4TsMEac"}),method:"POST"});if(e.ok){let t=await e.json();return t}},void 0);return(0,r.useQuery)(["useGetGooglePopularData",e],async()=>{let t=await n.mutateAsync(),r=await fetch("https://content-analyticsdata.googleapis.com/v1beta/properties/284521573:runReport?alt=json",{body:JSON.stringify({dateRanges:[{endDate:"today",startDate:"30daysAgo"}],dimensionFilter:{filter:{fieldName:"pagePath",stringFilter:{matchType:"BEGINS_WITH",value:"/".concat(e,"/2")}}},dimensions:[{name:"pagePath"}],limit:"10",metricAggregations:["TOTAL"],metrics:[{name:"active28DayUsers"}]}),headers:{Authorization:"".concat(null==t?void 0:t.token_type," ").concat(null==t?void 0:t.access_token)},method:"POST"});if(r.ok){let e=await r.json();return e}},t)}function i(e,t,n){return(0,r.useQuery)(["useGetContents",e],async()=>{let n=await fetch("/".concat(e,".json")),r=(await n.json()).list;if(t){let{keyword:e,categories:n}=t;n&&n.length>0&&(r=r.filter(e=>{let{header:t}=e;return n.includes(t.category)})),e&&e.length>1&&(r=r.filter(t=>{let{header:n}=t;return n.title.includes(e)||n.tag.includes(e)}))}return r},n)}function s(e,t,n){return(0,r.useInfiniteQuery)(["useGetInfiniteContents",e],async n=>{let{pageParam:r=1}=n,o=await fetch("/".concat(e,".json")),i=(await o.json()).list;if(t){let{keyword:e,categories:n}=t;n&&n.length>0&&(i=i.filter(e=>{let{header:t}=e;return n.includes(t.category)})),e&&e.length>1&&(i=i.filter(t=>{let{header:n}=t;return n.title.includes(e)||n.tag.includes(e)}))}return{count:r,list:i.slice((r-1)*10,10*r),total:Math.ceil(i.length/10)}},{getNextPageParam:e=>{let{count:t,total:n}=e;return t===n?void 0:t+1},getPreviousPageParam:e=>{let{count:t}=e;return 1===t?void 0:t-1},...n})}function c(e,t){return(0,r.useQuery)(["useGetCategories",e],async()=>{let t=await fetch("/".concat(e,"-category.json")),n=(await t.json()).list;return n},t)}function a(e,t,n,o){return(0,r.useQuery)(["useGetPopularContents",e],async()=>{if(t&&n){let e=n.rows.map(e=>e.dimensionValues[0].value.replace(/.html$/,""))||[];return e.reduce((e,n)=>{let r=null==t?void 0:t.find(e=>"/".concat(e.header.type,"/").concat(e.url[1],"/").concat(e.url[2],"/").concat(e.url[3],"/").concat(e.url[4])===n);return r&&e.push(r),e},[])}return[]},{enabled:void 0!==t&&void 0!==n,...o})}function u(e){return(0,r.useQuery)(["useGetImage"],async()=>{let e=await fetch("/image.json"),t=await e.json();return t},e)}},6765:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),o=n(7183),i=n(9527),s=n.n(i);function c(e){let{title:t,description:n=o.dz,type:i="website",url:c="",image:a="https://user-images.githubusercontent.com/50317129/167476335-17cd861c-1d56-4384-b0ae-8c3680d9de29.png",locale:u="ko_KR"}=e;return(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"".concat(t," - ").concat(o.R)}),(0,r.jsx)("meta",{content:n,name:"description"}),(0,r.jsx)("meta",{content:o.R,property:"og:site_name"}),(0,r.jsx)("meta",{content:"".concat(t," - ").concat(o.R),property:"og:title"}),(0,r.jsx)("meta",{content:n,property:"og:description"}),(0,r.jsx)("meta",{content:i,property:"og:type"}),(0,r.jsx)("meta",{content:"".concat(o._n).concat(c),property:"og:url"}),(0,r.jsx)("meta",{content:a,property:"og:image"}),(0,r.jsx)("meta",{content:u,property:"og:locale"}),(0,r.jsx)("link",{href:"".concat(o._n).concat(c),rel:"canonical"})]})}},8318:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),o=n(6058),i=n(100),s=n(4819),c=n.n(s),a=n(7166),u=n.n(a),l=n(7294);function m(e){let{title:t,menu:n,lower:s,image:a}=e,m=u().bind(c()),{data:d}=(0,i.q7)(),[p,h]=(0,l.useState)(a);(0,l.useEffect)(()=>{void 0===a&&h(null==d?void 0:d.list[(0,o.XJ)(null==d?void 0:d.list.length)])},[a,d]);let f=(0,l.useMemo)(()=>/(.mp4|webm)$/.test(p||"")?(0,r.jsx)("video",{className:m("media"),src:p,autoPlay:!0,loop:!0,muted:!0}):(0,r.jsx)("img",{alt:"screen",className:m("image"),src:p}),[p]);return(0,r.jsxs)("div",{className:m("root"),children:[(0,r.jsxs)("div",{className:m("image-wrapper"),children:[p?f:null,(0,r.jsx)("div",{className:m("plate")})]}),(0,r.jsxs)("div",{className:m("title-wrapper"),children:[(0,r.jsx)("h1",{className:m("title"),children:t}),(0,r.jsx)("h3",{className:m("menu"),children:n}),(0,r.jsx)("h3",{className:m("lower"),children:s})]})]})}},5821:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893),o=n(495),i=n(5748),s=n.n(i),c=n(2804);function a(e){let{flag:t}=e,n=(0,c.sJ)(o.Oj);return t?(0,r.jsx)("article",{className:s().root,id:"utterances",ref:e=>{if(e){if(0===document.querySelectorAll("#utterances > div").length){let t=document.createElement("div"),r=document.createElement("script");r.src="https://utteranc.es/client.js",r.async=!0,r.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),r.setAttribute("issue-term","pathname"),r.setAttribute("theme","github-".concat(n)),r.setAttribute("crossOrigin","anonymous"),t.appendChild(r),e.appendChild(t)}else{let t=document.createElement("div"),r=document.createElement("script");r.src="https://utteranc.es/client.js",r.async=!0,r.setAttribute("repo","RWB0104/RWB0104.github.io-comments"),r.setAttribute("issue-term","pathname"),r.setAttribute("theme","github-".concat(n)),r.setAttribute("crossOrigin","anonymous"),t.appendChild(r),e.innerHTML="",e.appendChild(t)}}}}):null}},1121:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893),o=n(7183),i=n(9859),s=n(5821),c=n(1918),a=n.n(c),u=n(7166),l=n.n(u);function m(){let e=l().bind(a());return(0,r.jsxs)("article",{className:e("root"),children:[(0,r.jsxs)("div",{className:e("prompt"),children:[(0,r.jsx)("h3",{children:"Comments"}),(0,r.jsx)("p",{children:"\uD83D\uDCAC 여러분들의 생각을 자유롭게 남겨보세요!"}),(0,r.jsx)("p",{children:"작성 시 GitHub 아이디가 필요합니다."})]}),(0,r.jsx)(s.Z,{flag:!0})]})}var d=n(6765),p=n(8318);function h(){return(0,r.jsxs)("section",{children:[(0,r.jsx)(d.Z,{description:i.T[4].desc,title:i.T[4].title,url:i.T[4].url.pathname}),(0,r.jsx)(p.Z,{lower:i.T[4].desc,menu:i.T[4].title,title:o.R}),(0,r.jsx)(m,{})]})}},1918:function(e){e.exports={root:"CommentLayout_root__SAKnG",prompt:"CommentLayout_prompt__2195b"}},5748:function(e){e.exports={root:"Utterances_root__4mTVu"}},4819:function(e){e.exports={root:"Screener_root__TDRyI","image-wrapper":"Screener_image-wrapper__gwI4x","title-wrapper":"Screener_title-wrapper__MBQoW",image:"Screener_image__9miJb",media:"Screener_media__oeW6o",plate:"Screener_plate__LqO_8",title:"Screener_title__Qaw47",menu:"Screener_menu__I6GMV",lower:"Screener_lower__oLlSG"}},9527:function(e,t,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2446)}),_N_E=e.O()}]);