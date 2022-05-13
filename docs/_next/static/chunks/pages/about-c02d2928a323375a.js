(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5514:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2775),a=r(9008),o=r.n(a),c=r(5893);function i(e){var t=e.title,r=e.description,a=void 0===r?n.dz:r,i=e.type,s=void 0===i?"website":i,l=e.url,d=void 0===l?"":l,u=e.image,p=void 0===u?"https://user-images.githubusercontent.com/50317129/167476335-17cd861c-1d56-4384-b0ae-8c3680d9de29.png":u,f=e.locale,h=void 0===f?"ko_KR":f;return(0,c.jsxs)(o(),{children:[(0,c.jsx)("title",{children:"".concat(t," - ").concat(n.R)}),(0,c.jsx)("meta",{content:a,name:"description"}),(0,c.jsx)("meta",{content:n.R,property:"og:site_name"}),(0,c.jsx)("meta",{content:"".concat(t," - ").concat(n.R),property:"og:title"}),(0,c.jsx)("meta",{content:a,property:"og:description"}),(0,c.jsx)("meta",{content:s,property:"og:type"}),(0,c.jsx)("meta",{content:"".concat(n._n).concat(d),property:"og:url"}),(0,c.jsx)("meta",{content:p,property:"og:image"}),(0,c.jsx)("meta",{content:h,property:"og:locale"}),(0,c.jsx)("link",{href:"".concat(n._n).concat(d),rel:"canonical"})]})}},2766:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(1930),a=r.n(n),o=r(7294),c=r(5893);function i(e){var t=e.title,r=e.menu,n=e.lower,i=e.image,s=(0,o.useRef)(null),l=(0,o.useRef)(null);return(0,o.useEffect)((function(){/(.mp4|webm)$/.test(i)?s.current&&(s.current.src=i):l.current&&(l.current.src=i)}),[i]),(0,c.jsxs)("div",{className:a().root,children:[(0,c.jsxs)("div",{className:a()["image-wrapper"],children:[/(.mp4|webm)$/.test(i)?(0,c.jsx)("video",{className:a().media,ref:s,autoPlay:!0,loop:!0,muted:!0}):(0,c.jsx)("img",{className:a()["image-basic"],ref:l}),(0,c.jsx)("div",{className:a().plate})]}),(0,c.jsxs)("div",{className:a()["title-wrapper"],children:[(0,c.jsx)("h1",{className:a().title,children:t}),(0,c.jsx)("h3",{className:a().menu,children:r}),(0,c.jsx)("h3",{className:a().lower,children:n})]})]})}},7285:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(7285);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||a&&c}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6505:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=u,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),i=(o=r(148))&&o.__esModule?o:{default:o},s=r(7285),l=r(523),d=r(9546);r(7206);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,l=f.length;s<l;s++){var d=f[s];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?o=!1:r.add(d);else{var u=a.props[d],p=n[d]||new Set;"name"===d&&c||!p.has(u)?(p.add(u),n[d]=p):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,r=c.useContext(s.AmpStateContext),n=c.useContext(l.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:h,headManager:n,inAmpMode:d.isInAmpMode(r)},t)};t.default=m,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,r){"use strict";var n=r(7980),a=r(3227),o=r(8361),c=(r(2191),r(5971)),i=r(2715),s=r(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var u=function(e){c(r,e);var t=l(r);function r(e){var o;return a(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(d.Component);t.default=u},2916:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(2775),a=r(6610),o=r(1205),c=r(29),i=r(7794),s=r.n(i),l=r(8407),d=r(3836),u=r(6340),p=r.n(u),f=r(7294),h=r(2804),m=r(5893);function _(){var e=(0,f.useState)([]),t=e[0],r=e[1],n=(0,h.sJ)(d.Oj);return(0,f.useEffect)((function(){(0,c.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/RWB0104/blog.itcode.dev/commits");case 2:if(!(t=e.sent).ok){e.next=9;break}return e.next=6,t.json();case 6:(n=e.sent).length>20&&(n=n.slice(0,20)),r(n);case 9:case"end":return e.stop()}}),e)})))()}),[]),t.length>0?(0,m.jsxs)("article",{className:p().root,children:[(0,m.jsx)("h3",{children:"History of Repository"}),t.map((function(e,t){var r=(0,l.SG)(e.commit.author.date),a=r.year,o=r.month,c=r.day,i=r.week,s=r.hour,d=r.minute,u=r.second,f="".concat(a,"-").concat(o,"-").concat(c," ").concat(i," ").concat(s,":").concat(d,":").concat(u);return(0,m.jsxs)("div",{className:p()["item-".concat(n)],"data-index":t,"data-sha":e.sha,children:[(0,m.jsxs)("div",{className:p().header,children:[(0,m.jsx)("a",{href:e.author.html_url,rel:"noreferrer",target:"_blank",children:(0,m.jsx)("img",{src:e.author.avatar_url})}),(0,m.jsxs)("p",{children:[(0,m.jsx)("b",{children:(0,m.jsx)("a",{href:e.author.html_url,rel:"noreferrer",target:"_blank",children:e.author.login})})," has commits ",(0,m.jsxs)("small",{children:["at ",f]})]})]}),(0,m.jsxs)("div",{className:p()["content-".concat(n)],children:[(0,m.jsx)("div",{children:(0,m.jsx)("h4",{children:(0,m.jsx)("a",{href:e.html_url,rel:"noreferrer",target:"_blank",children:e.commit.message.split("\n")[0]})})}),(0,m.jsx)("div",{children:e.commit.message.split("\n").map((function(e,t){return t>0&&(0,m.jsx)("p",{children:(0,m.jsx)("small",{children:e})},t)}))}),(0,m.jsx)("div",{children:(0,m.jsxs)("p",{children:[(0,m.jsx)("small",{}),(0,m.jsx)("small",{children:e.sha})]})})]})]},t)}))]}):null}var j=r(1536),v=r.n(j),g=r(155),x=r(7735);function y(){var e=(0,h.sJ)(d.Oj);return(0,m.jsx)("article",{className:v().root,children:(0,m.jsxs)("div",{className:v()["wrapper-".concat(e)],children:[(0,m.jsx)("div",{className:v()["image-wrapper"],children:(0,m.jsx)("img",{src:"https://user-images.githubusercontent.com/50317129/167695995-bb7080e0-dd19-455e-abdc-b16a0cafd98d.png",title:"profile"})}),(0,m.jsxs)("div",{className:v()["content-wrapper"],children:[(0,m.jsxs)("div",{className:v().head,children:[(0,m.jsx)("h3",{children:n.R}),(0,m.jsx)("p",{children:n.dz})]}),(0,m.jsxs)("div",{className:v().body,children:[(0,m.jsx)("p",{children:"R W B"}),(0,m.jsx)("p",{children:"2019.03 ~ NOW"}),(0,m.jsx)("br",{}),(0,m.jsx)("p",{children:"To be FullStack Develpoer"})]}),(0,m.jsxs)("div",{className:v().footer,children:[(0,m.jsx)("a",{href:"https://github.com/RWB0104",target:"_blank",title:"GitHub",children:(0,m.jsx)(g.JOq,{})}),(0,m.jsx)("a",{href:"https://www.linkedin.com/in/itcode/",target:"_blank",title:"Linkedin",children:(0,m.jsx)(g.gXb,{})}),(0,m.jsx)("a",{href:"mailto:psj2716@gmail.com",target:"_blank",title:"Mail",children:(0,m.jsx)(x.IeF,{})}),(0,m.jsx)("a",{href:"https://itcode.dev",target:"_blank",title:"Project Page",children:(0,m.jsx)(g.K3J,{})})]})]})]})})}var b=r(5514),w=r(2766);function O(){(0,a.D5)();var e=(0,a.tH)();return(0,m.jsxs)("section",{children:[(0,m.jsx)(b.Z,{description:o.T[3].desc,title:o.T[3].title,url:o.T[3].url.pathname}),(0,m.jsx)(w.Z,{image:e,lower:o.T[3].desc,menu:o.T[3].title,title:n.R}),(0,m.jsx)(y,{}),(0,m.jsx)(_,{})]})}},8318:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(2916)}])},6340:function(e){e.exports={root:"CommitList_root__b9Wj5","item-light":"CommitList_item-light__il9g1","item-dark":"CommitList_item-dark__CdnFf",header:"CommitList_header__rdJMb","content-light":"CommitList_content-light__KkAoK","content-dark":"CommitList_content-dark__3pPaK"}},1536:function(e){e.exports={root:"NameCard_root__IOYhT","wrapper-dark":"NameCard_wrapper-dark__Tpw5t",dark:"NameCard_dark__YRs14",light:"NameCard_light__vyMsW","wrapper-light":"NameCard_wrapper-light__g1vcv","image-wrapper":"NameCard_image-wrapper__AN9_r","content-wrapper":"NameCard_content-wrapper__NG8Tu",head:"NameCard_head__cXYOk",body:"NameCard_body__TuwT9",footer:"NameCard_footer__0gU1x"}},1930:function(e){e.exports={root:"Screener_root__HhDur","image-wrapper":"Screener_image-wrapper__q4UBX","title-wrapper":"Screener_title-wrapper__3hf73","image-basic":"Screener_image-basic__1kQLI",media:"Screener_media__ZyEKE",plate:"Screener_plate__OMpYX",title:"Screener_title__SGbCw",menu:"Screener_menu__jGIR9",lower:"Screener_lower__G2GzX"}},9008:function(e,t,r){e.exports=r(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=8318,e(e.s=t);var t}));var t=e.O();_N_E=t}]);