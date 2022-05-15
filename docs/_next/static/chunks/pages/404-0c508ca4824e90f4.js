(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{5514:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2775),a=r(9008),o=r.n(a),c=r(5893);function i(e){var t=e.title,r=e.description,a=void 0===r?n.dz:r,i=e.type,u=void 0===i?"website":i,s=e.url,p=void 0===s?"":s,l=e.image,d=void 0===l?"https://user-images.githubusercontent.com/50317129/167476335-17cd861c-1d56-4384-b0ae-8c3680d9de29.png":l,f=e.locale,m=void 0===f?"ko_KR":f;return(0,c.jsxs)(o(),{children:[(0,c.jsx)("title",{children:"".concat(t," - ").concat(n.R)}),(0,c.jsx)("meta",{content:a,name:"description"}),(0,c.jsx)("meta",{content:n.R,property:"og:site_name"}),(0,c.jsx)("meta",{content:"".concat(t," - ").concat(n.R),property:"og:title"}),(0,c.jsx)("meta",{content:a,property:"og:description"}),(0,c.jsx)("meta",{content:u,property:"og:type"}),(0,c.jsx)("meta",{content:"".concat(n._n).concat(p),property:"og:url"}),(0,c.jsx)("meta",{content:d,property:"og:image"}),(0,c.jsx)("meta",{content:m,property:"og:locale"}),(0,c.jsx)("link",{href:"".concat(n._n).concat(p),rel:"canonical"})]})}},2766:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(1930),a=r.n(n),o=r(7294),c=r(5893);function i(e){var t=e.title,r=e.menu,n=e.lower,i=e.image,u=(0,o.useRef)(null),s=(0,o.useRef)(null);return(0,o.useEffect)((function(){/(.mp4|webm)$/.test(i)?u.current&&(u.current.src=i):s.current&&(s.current.src=i)}),[i]),(0,c.jsxs)("div",{className:a().root,children:[(0,c.jsxs)("div",{className:a()["image-wrapper"],children:[/(.mp4|webm)$/.test(i)?(0,c.jsx)("video",{className:a().media,ref:u,autoPlay:!0,loop:!0,muted:!0}):(0,c.jsx)("img",{className:a()["image-basic"],ref:s}),(0,c.jsx)("div",{className:a().plate})]}),(0,c.jsxs)("div",{className:a()["title-wrapper"],children:[(0,c.jsx)("h1",{className:a().title,children:t}),(0,c.jsx)("h3",{className:a().menu,children:r}),(0,c.jsx)("h3",{className:a().lower,children:n})]})]})}},7285:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=c,t.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var n,a=(n=r(7294))&&n.__esModule?n:{default:n},o=r(7285);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,o=e.hasQuery,c=void 0!==o&&o;return r||a&&c}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6505:function(e,t,r){"use strict";var n=r(930);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=l,t.default=void 0;var o,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),i=(o=r(148))&&o.__esModule?o:{default:o},u=r(7285),s=r(523),p=r(9546);r(7206);function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var r=c.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var o=!0,c=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){c=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,s=f.length;u<s;u++){var p=f[u];if(a.props.hasOwnProperty(p))if("charSet"===p)r.has(p)?o=!1:r.add(p);else{var l=a.props[p],d=n[p]||new Set;"name"===p&&c||!d.has(l)?(d.add(l),n[p]=d):o=!1}}}return o}}()).reverse().map((function(e,r){var o=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:o})}))}var h=function(e){var t=e.children,r=c.useContext(u.AmpStateContext),n=c.useContext(s.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:m,headManager:n,inAmpMode:p.isInAmpMode(r)},t)};t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},148:function(e,t,r){"use strict";var n=r(7980),a=r(3227),o=r(8361),c=(r(2191),r(5971)),i=r(2715),u=r(1193);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var a=u(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var l=function(e){c(r,e);var t=s(r);function r(e){var o;return a(this,r),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(n(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(p.Component);t.default=l},5987:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(2775),a=r(6610),o=r(5514),c=r(2766),i=r(5893);function u(){var e=(0,a.tH)();return(0,i.jsxs)("section",{children:[(0,i.jsx)(o.Z,{description:"\uc5ec\uae34 \uc544\ubb34\uac83\ub3c4 \uc5c6\ub124\uc694... URL \ub9c8\uc9c0\ub9c9\uc758 /\ub77c\ub3c4 \ube7c\ubcf4\uc2dc\uaca0\uc5b4\uc694?",title:"404",url:""}),(0,i.jsx)(c.Z,{image:e,lower:"\uc5ec\uae34 \uc544\ubb34\uac83\ub3c4 \uc5c6\ub124\uc694... URL \ub9c8\uc9c0\ub9c9\uc758 /\ub77c\ub3c4 \ube7c\ubcf4\uc2dc\uaca0\uc5b4\uc694?",menu:"404",title:n.R})]})}},6141:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(5987)}])},1930:function(e){e.exports={root:"Screener_root__HhDur","image-wrapper":"Screener_image-wrapper__q4UBX","title-wrapper":"Screener_title-wrapper__3hf73","image-basic":"Screener_image-basic__1kQLI",media:"Screener_media__ZyEKE",plate:"Screener_plate__OMpYX",title:"Screener_title__SGbCw",menu:"Screener_menu__jGIR9",lower:"Screener_lower__G2GzX"}},9008:function(e,t,r){e.exports=r(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=6141,e(e.s=t);var t}));var t=e.O();_N_E=t}]);