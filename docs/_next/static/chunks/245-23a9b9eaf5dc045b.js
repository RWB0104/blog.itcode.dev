(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[245],{6987:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(8407),a=r(2775),o=r(1134),c=r.n(o),s=r(6466),i=r.n(s),u=r(5893);function l(e){var t=e.type,r=e.tags;return(0,u.jsx)(u.Fragment,{children:r.map((function(e,r){return(0,u.jsx)("p",{className:i().root,"data-type":t,children:e},r)}))})}function p(e){var t=e.header,r=(0,n.SG)(t.date);return(0,u.jsxs)("article",{className:c().root,children:[(0,u.jsxs)("div",{className:c().item,children:[(0,u.jsx)("p",{className:c().text,children:"\ud83d\udcc6 \uc791\uc131\uc77c"}),(0,u.jsx)("p",{className:c().text,children:"".concat(r.year,"-").concat(r.month,"-").concat(r.day," ").concat(r.week," ").concat(r.hour,":").concat(r.minute,":").concat(r.second)})]}),(0,u.jsxs)("div",{className:c().item,children:[(0,u.jsx)("p",{className:c().text,children:"\ud83d\udcda \uce74\ud14c\uace0\ub9ac"}),(0,u.jsxs)("div",{className:c()["category-wrapper"],children:[(0,u.jsx)("img",{alt:t.category,className:c()["category-image"],src:a.En[t.category]||"https://user-images.githubusercontent.com/50317129/132937376-276bf532-841b-4f80-9ba7-d05063ee6e92.png"}),(0,u.jsx)("p",{className:c().link,children:t.category})]})]}),(0,u.jsxs)("div",{className:c().item,children:[(0,u.jsx)("p",{className:c().text,children:"\ud83c\udff7\ufe0f \ud0dc\uadf8"}),(0,u.jsx)("div",{className:c().tags,children:(0,u.jsx)(l,{tags:t.tag,type:t.type})})]})]})}},5514:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2775),a=r(9008),o=r.n(a),c=r(5893);function s(e){var t=e.title,r=e.description,a=void 0===r?n.dz:r,s=e.type,i=void 0===s?"website":s,u=e.url,l=void 0===u?"":u,p=e.image,d=void 0===p?"https://user-images.githubusercontent.com/50317129/167476335-17cd861c-1d56-4384-b0ae-8c3680d9de29.png":p,f=e.locale,m=void 0===f?"ko_KR":f;return(0,c.jsxs)(o(),{children:[(0,c.jsx)("title",{children:"".concat(t," - ").concat(n.R)}),(0,c.jsx)("meta",{content:a,name:"description"}),(0,c.jsx)("meta",{content:n.R,property:"og:site_name"}),(0,c.jsx)("meta",{content:"".concat(t," - ").concat(n.R),property:"og:title"}),(0,c.jsx)("meta",{content:a,property:"og:description"}),(0,c.jsx)("meta",{content:i,property:"og:type"}),(0,c.jsx)("meta",{content:"".concat(n._n).concat(l),property:"og:url"}),(0,c.jsx)("meta",{content:d,property:"og:image"}),(0,c.jsx)("meta",{content:m,property:"og:locale"}),(0,c.jsx)("link",{href:"".concat(n._n).concat(l),rel:"canonical"})]})}},2766:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(1930),a=r.n(n),o=r(7294),c=r(5893);function s(e){var t=e.title,r=e.menu,n=e.lower,s=e.image,i=(0,o.useRef)(null),u=(0,o.useRef)(null);return(0,o.useEffect)((function(){/(.mp4|webm)$/.test(s)?i.current&&(i.current.src=s):u.current&&(u.current.src=s)}),[s]),(0,c.jsxs)("div",{className:a().root,children:[(0,c.jsxs)("div",{className:a()["image-wrapper"],children:[/(.mp4|webm)$/.test(s)?(0,c.jsx)("video",{className:a().media,ref:i,autoPlay:!0,loop:!0,muted:!0}):(0,c.jsx)("img",{className:a()["image-basic"],ref:u}),(0,c.jsx)("div",{className:a().plate})]}),(0,c.jsxs)("div",{className:a()["title-wrapper"],children:[(0,c.jsx)("h1",{className:a().title,children:t}),(0,c.jsx)("h3",{className:a().menu,children:r}),(0,c.jsx)("h3",{className:a().lower,children:n})]})]})}},7285:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(7285);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||a&&c}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6505:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=p,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(o=r(148))&&o.__esModule?o:{default:o},i=r(7285),u=r(523),l=r(9546);r(7206);function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var i=0,u=f.length;i<u;i++){var l=f[i];if(a.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var p=a.props[l],d=n[l]||new Set;"name"===l&&c||!d.has(p)?(d.add(p),n[l]=d):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,c.default.cloneElement(e,s)}return c.default.cloneElement(e,{key:o})}))}var h=function(e){var t=e.children,r=c.useContext(i.AmpStateContext),n=c.useContext(u.HeadManagerContext);return c.default.createElement(s.default,{reduceComponentsToState:m,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,r){"use strict";var n=r(7980),a=r(3227),o=r(8361),c=(r(2191),r(5971)),s=r(2715),i=r(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=i(e);if(t){var a=i(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return s(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var p=function(e){c(r,e);var t=u(r);function r(e){var o;return a(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=p},1134:function(e){e.exports={root:"ContentMeta_root__Oa9TZ",item:"ContentMeta_item__mj0zY","category-wrapper":"ContentMeta_category-wrapper__Tn6Qr","category-image":"ContentMeta_category-image__Gy61Z",tags:"ContentMeta_tags__xx_74",text:"ContentMeta_text__E6VUv",link:"ContentMeta_link__WmpYM"}},6466:function(e){e.exports={root:"ContentTags_root__q_z5r"}},1930:function(e){e.exports={root:"Screener_root__HhDur","image-wrapper":"Screener_image-wrapper__q4UBX","title-wrapper":"Screener_title-wrapper__3hf73","image-basic":"Screener_image-basic__1kQLI",media:"Screener_media__ZyEKE",plate:"Screener_plate__OMpYX",title:"Screener_title__SGbCw",menu:"Screener_menu__jGIR9",lower:"Screener_lower__G2GzX"}},9008:function(e,t,r){e.exports=r(6505)}}]);