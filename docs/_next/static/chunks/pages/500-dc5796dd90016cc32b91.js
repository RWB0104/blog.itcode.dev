(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[573],{4866:function(e,t,n){"use strict";n.d(t,{XJ:function(){return r},SG:function(){return o},Jt:function(){return a},Jq:function(){return i}});function r(e){return Math.floor(Math.random()*e)}function o(e){var t=void 0===e?new Date:new Date(e);return{year:t.getFullYear().toString(),month:t.getMonth()+1>9?(t.getMonth()+1).toString():"0".concat(t.getMonth()+1),day:t.getDate()+1>9?t.getDate().toString():"0".concat(t.getDate()),week:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()],hour:t.getHours()>9?t.getHours().toString():"0".concat(t.getHours()),minute:t.getMinutes()>9?t.getMinutes().toString():"0".concat(t.getMinutes()),second:t.getSeconds()>9?t.getSeconds().toString():"0".concat(t.getSeconds())}}function a(e){if(e){var t=0;return e.reduce((function(e,n){var r=n.text,o=n.tag,a=n.depth;return a>t?(t++,e+='<ul><li><a href="#'.concat(o,'">').concat(r,"</a></li>")):a<t?(t--,e+='</ul><li><a href="#'.concat(o,'">').concat(r,"</a></li>")):e+='<li><a href="#'.concat(o,'">').concat(r,"</a></li>"),e}),"")+"</ul>"}return""}function i(e){var t=(new Date).getTime()-e.getTime();if(t>31536e6){var n=Math.floor(t/31536e6);return"".concat(n,"\ub144 \uc804")}if(t>2592e6){var r=Math.floor(t/2592e6);return"".concat(r,"\ub2ec \uc804")}if(t>864e5){var o=Math.floor(t/864e5);return"".concat(o,"\uc77c \uc804")}if(t>36e5){var a=Math.floor(t/36e5);return"".concat(a,"\uc2dc\uac04 \uc804")}if(t>6e4){var i=Math.floor(t/6e4);return"".concat(i,"\ubd84 \uc804")}return"0\ubd84 \uc804"}},8794:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(9008),a=n(1733);function i(e){var t=e.title,n=e.description,i=void 0===n?a.dz:n,c=e.type,u=void 0===c?"website":c,s=e.url,f=void 0===s?"":s,l=e.image,p=void 0===l?"https://rwb0104.github.io/favicon.ico":l,d=e.locale,h=void 0===d?"ko_KR":d;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"".concat(t," - Kapoo")}),(0,r.jsx)("meta",{name:"description",content:i}),(0,r.jsx)("meta",{property:"og:site_name",content:a.R}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(t," - Kapoo")}),(0,r.jsx)("meta",{property:"og:description",content:i}),(0,r.jsx)("meta",{property:"og:type",content:u}),(0,r.jsx)("meta",{property:"og:url",content:"https://rwb0104.github.io".concat(f)}),(0,r.jsx)("meta",{property:"og:image",content:p}),(0,r.jsx)("meta",{property:"og:locale",content:h}),(0,r.jsx)("link",{rel:"canonical",href:"https://rwb0104.github.io".concat(f)})]})}},8494:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(7294),a=n(9956),i=n(2318),c=n(5146),u=n.n(c);function s(e){var t=e.title,n=e.lower,c=e.image,s=e.special?u()["title-special"]:u().title,f=(0,o.useRef)(null);return(0,o.useEffect)((function(){f&&f.current&&(f.current.style.backgroundImage="url(".concat(c,")"))}),[]),(0,r.jsxs)(a.Z,{className:u().root,position:"relative",display:"grid",gridAutoRows:"auto",gridRowGap:100,alignContent:"center",children:[(0,r.jsx)(a.Z,{className:u()["image-wrapper"],position:"absolute",children:(0,r.jsx)("div",{ref:f,className:u()["image-basic"]})}),(0,r.jsx)(i.Z,{component:"h1",className:s,align:"center",children:t}),(0,r.jsx)(i.Z,{component:"h3",className:u().lower,align:"center",children:n})]})}},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},808:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(a=n(3244))&&a.__esModule?a:{default:a},u=n(3398),s=n(1165),f=n(6393);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var f=h[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),r[f]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var g=function(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,f.isInAmpMode)(n)},t)};t.default=g},3244:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),c=n(7690),u=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var f=n(7294),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},8608:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return s}});var r=n(5893),o=n(9956),a=n(8794),i=n(8494),c=n(4866),u=!0;function s(e){var t=e.images,n=(0,c.XJ)(t.length);return(0,r.jsxs)(o.Z,{component:"section",children:[(0,r.jsx)(a.Z,{title:"500",description:"\ubb38\uc81c\uac00 \uc0dd\uacbc\uc5b4\uc694!",image:"/img/screener/".concat(t[n]),url:""}),(0,r.jsx)(i.Z,{title:"500",lower:"\ubb38\uc81c\uac00 \uc0dd\uacbc\uc5b4\uc694!",image:"/img/screener/".concat(t[n]),special:!0})]})}},662:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/500",function(){return n(8608)}])},5146:function(e){e.exports={root:"screener_root__1bpT8","image-wrapper":"screener_image-wrapper__1H4oX","image-basic":"screener_image-basic__2aIiL","image-ios":"screener_image-ios__Imz4X",title:"screener_title__3mYUP",lower:"screener_lower__1iaX7","title-special":"screener_title-special__3RpLt"}},9008:function(e,t,n){e.exports=n(808)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}}},function(e){e.O(0,[774,888,179],(function(){return t=662,e(e.s=t);var t}));var t=e.O();_N_E=t}]);