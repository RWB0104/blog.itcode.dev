if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,i,a)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}}))).then((e=>{const s=a(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"170a06380f5bfe5f59ad77916b95d064"},{url:"/_next/static/BLMbBIe9oJyvM8lluwQUL/_buildManifest.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/BLMbBIe9oJyvM8lluwQUL/_ssgManifest.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/271-0608d97184c25ebdb1ee.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/33-8c8c1b0f93e2745c6b0a.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/726-6e702034d3fd2a50d2bb.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/9-a02f112ad35e52a30b9f.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/910-af7b9d6fe01a2fcfde04.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/main-6a8ca7ae20700a66db28.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/404-6dcfff23e4fba90e64ed.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/500-34f73405a0d058892838.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/_app-c8a98e9d95dff1365ded.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/_error-99dd6c4a4ac8375acd47.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/about-b33ed78f66f928b2add1.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/index-16ff9bd3d26fa225bef7.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/posts-4d56549d6ae99cf776ef.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/posts/%5B...url%5D-8a52b74ea0ed328205c2.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/posts/%5Bpage%5D-4735ecadc0e61e974569.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/posts/category/%5B...page%5D-5d4e60ff54a43009f37b.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/posts/tag/%5B...page%5D-83497bc889c440b0a405.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/projects-fe27534135454c53bb30.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/projects/%5B...url%5D-f4c79df9bd7b7f87b042.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/projects/%5Bpage%5D-845991fad76cfd4f8120.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/projects/category/%5B...page%5D-f7069d14ac41500be07b.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/pages/projects/tag/%5B...page%5D-2efd24d4f91e7f40a7d9.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/chunks/webpack-61095c13c5984b221292.js",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/css/474d7c198a0381643f7d.css",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/css/5884c57d9449df9e3865.css",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/css/69c505c6695668572724.css",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/css/b90215cb55685b3e6aaa.css",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/css/dff74f8b8167fc3e5e68.css",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/css/e420a8326d3f81a4a244.css",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/_next/static/css/ebdc63df83d889de1c13.css",revision:"BLMbBIe9oJyvM8lluwQUL"},{url:"/build.txt",revision:"38083af4d4dba7f5f18f23c243684b65"},{url:"/favicon.ico",revision:"d45ad03dbbdd075d36dc55e424e292ef"},{url:"/fonts/apple/AppleSDGothicNeoB.ttf",revision:"098fc5bd4b89bb9e258487c6ebbeda62"},{url:"/fonts/apple/AppleSDGothicNeoB.woff",revision:"b85b9371d7fd84c17155f926755a64dd"},{url:"/fonts/apple/AppleSDGothicNeoB.woff2",revision:"16b4ab0de064ee6d7feaaa50d62d6f73"},{url:"/fonts/apple/AppleSDGothicNeoEB.ttf",revision:"0b077d7f250c3d69597e6d1c01f1c672"},{url:"/fonts/apple/AppleSDGothicNeoEB.woff",revision:"ff61771c1881065a7f07633a7ce81d0f"},{url:"/fonts/apple/AppleSDGothicNeoEB.woff2",revision:"806830bd91c2d3330a9ce11f8d6e61a5"},{url:"/fonts/apple/AppleSDGothicNeoH.ttf",revision:"2d2111dc1155667c8c3a71462d797e17"},{url:"/fonts/apple/AppleSDGothicNeoH.woff",revision:"5182b0654c23fadccc48e01ac090d66d"},{url:"/fonts/apple/AppleSDGothicNeoH.woff2",revision:"295543543bb5a727090cfe836ed92c07"},{url:"/fonts/apple/AppleSDGothicNeoL.ttf",revision:"9417a06a9ed881881a79ad4d6a844886"},{url:"/fonts/apple/AppleSDGothicNeoL.woff",revision:"0e4c471abe203cbd7fb1da5f6c7dfdb6"},{url:"/fonts/apple/AppleSDGothicNeoL.woff2",revision:"ebd0207c4526f799d9de1b9634570c18"},{url:"/fonts/apple/AppleSDGothicNeoM.ttf",revision:"f2116f74ed0dfb6071e596a14525afd9"},{url:"/fonts/apple/AppleSDGothicNeoM.woff",revision:"2e8d8d2a211c3ab2468ed90507ab9bbb"},{url:"/fonts/apple/AppleSDGothicNeoM.woff2",revision:"ffa00286a1ff9eaf7fe5b7ebebed2551"},{url:"/fonts/apple/AppleSDGothicNeoR.ttf",revision:"943a92b5692c01ca221864a567e23cbe"},{url:"/fonts/apple/AppleSDGothicNeoR.woff",revision:"3aebe343c6687cec31192432876cd94f"},{url:"/fonts/apple/AppleSDGothicNeoR.woff2",revision:"4661c8e2b113f6cb3d2a63c3f02d2ef0"},{url:"/fonts/apple/AppleSDGothicNeoSB.ttf",revision:"e2bef9cec5fca40fbcd5cc8156426683"},{url:"/fonts/apple/AppleSDGothicNeoSB.woff",revision:"98039e0e52cf90b4884cca3d62a6e1e1"},{url:"/fonts/apple/AppleSDGothicNeoSB.woff2",revision:"2f1653bd0967f675ad87a0738d6b8f78"},{url:"/fonts/apple/AppleSDGothicNeoT.ttf",revision:"a564e84efaaaf01d216dda14e8f5dcf7"},{url:"/fonts/apple/AppleSDGothicNeoT.woff",revision:"3c2be04a0d1912a5f51436a9d3afaced"},{url:"/fonts/apple/AppleSDGothicNeoT.woff2",revision:"4129306cb81433fb2ac93926cfa4c738"},{url:"/fonts/apple/AppleSDGothicNeoUL.ttf",revision:"2f0acda2616160fce10b13db8afbf9e2"},{url:"/fonts/apple/AppleSDGothicNeoUL.woff",revision:"1916c971cc0d3a013a0259d8441e9b4a"},{url:"/fonts/apple/AppleSDGothicNeoUL.woff2",revision:"f86a11e0db2a2e10cd536d43d55b3066"},{url:"/fonts/blacksword/Blacksword.eot",revision:"7f74c0f7a022c927d9c7d964e2b46a2e"},{url:"/fonts/blacksword/Blacksword.woff",revision:"cee4ee5417441feacaaf0d0eda810821"},{url:"/fonts/blacksword/Blacksword.woff2",revision:"3c3dedcecd7dfdf7807f96d9668f729a"},{url:"/fonts/hack/Hack-Regular.eot",revision:"9604b84a1da61c08111506bdfaf3a577"},{url:"/fonts/hack/Hack-Regular.woff",revision:"69865b56cadc18b55e567ddae7c7fd76"},{url:"/fonts/hack/Hack-Regular.woff2",revision:"2011154a6f3b36995e6c81f35a0260a6"},{url:"/img/profile.jpg",revision:"21517622c01bfffa6e2332637d98d1bd"},{url:"/img/screener/celeb1.webm",revision:"2facfab9600f4dc1e1327ce5ea6a4314"},{url:"/img/screener/celeb10.webm",revision:"2f377e7b004fb3ec8d2099c52ada7f05"},{url:"/img/screener/celeb11.webm",revision:"82cff0a7f8786be5e89f0c75c821d593"},{url:"/img/screener/celeb12.webm",revision:"6d489075e9b58fb3930fbb2922895324"},{url:"/img/screener/celeb13.webm",revision:"40fe90f56b34d2f735bfd365e2a23fd2"},{url:"/img/screener/celeb14.webm",revision:"946070ccb9af74b1ec7a9135e400f32c"},{url:"/img/screener/celeb15.webm",revision:"f129acfd0859632de2506adb95eb93d3"},{url:"/img/screener/celeb16.webm",revision:"35c37642b31828c38a65773e753cb61e"},{url:"/img/screener/celeb17.webm",revision:"609227ae69f547399891367e9205b88a"},{url:"/img/screener/celeb2.webm",revision:"e04ec9b2f50f21d99c1b580d12b3a0ed"},{url:"/img/screener/celeb3.webm",revision:"d3f1514956d14fc68542f84c960ff2a7"},{url:"/img/screener/celeb4.webm",revision:"491091bb1c6ba845fe8397e94702e631"},{url:"/img/screener/celeb5.webm",revision:"1e8114ba372d0e5d21d1e03f4057b8d6"},{url:"/img/screener/celeb6.webm",revision:"bdec40fc22d11ecbbdd9a4d002d29178"},{url:"/img/screener/celeb7.webm",revision:"ef1e0144a1a3902387ab525eb8e360ba"},{url:"/img/screener/celeb8.webm",revision:"411533e3666d40eca9374e7a1883923c"},{url:"/img/screener/celeb9.webm",revision:"63f0f533ef7f7e0a538b31ca0c06be18"},{url:"/img/screener/city1.webm",revision:"af57c0269789d4d3f3725377ee8139c3"},{url:"/img/screener/city10.webm",revision:"8d381cd0e0ef122936c981b76dec7654"},{url:"/img/screener/city11.webm",revision:"d15f4708c7675610cf9f7cdec01a4ead"},{url:"/img/screener/city12.webm",revision:"059c3b48739acac486647d8625ef7378"},{url:"/img/screener/city13.webm",revision:"f45de32955e9baf333970b05f79491fd"},{url:"/img/screener/city2.webm",revision:"0b51c0eee6113027857518fd35995b40"},{url:"/img/screener/city3.webm",revision:"e7828bc1cf2bad0cdc0ffa61d68e042b"},{url:"/img/screener/city4.webm",revision:"ceb8c050a408aa3f8ef15ac50710ad7c"},{url:"/img/screener/city5.webm",revision:"e0ad0a0b3b18b081868f4384a587d566"},{url:"/img/screener/city6.webm",revision:"c17d3cd72d1ae38b76c160d984487a04"},{url:"/img/screener/city7.webm",revision:"9d6aa26e07235cf3589deb9e1da47cde"},{url:"/img/screener/city8.webm",revision:"fb37c213d63f188ee53c1caddc0a7625"},{url:"/img/screener/city9.webm",revision:"b4fc4a8e4cdb9fb5ac8a732b8df2bccf"},{url:"/img/screener/code1.webm",revision:"7c0194d0344a5f487b8dd78b9680e9f6"},{url:"/img/screener/code2.webm",revision:"79190c3f1ad8f3f9351d6307166ab826"},{url:"/img/screener/code3.webm",revision:"f940fdc97e7c4376aaa4e3e5edf44783"},{url:"/img/screener/funk1.webm",revision:"2180ae3843096b94c4f6a9a1543cdc37"},{url:"/img/screener/funk2.webm",revision:"e4d4bf3237371d28a9d82fc21e6c4196"},{url:"/img/screener/funk3.webm",revision:"54bcaa1545ab6dff338590e4537f5a3b"},{url:"/img/screener/funk4.webm",revision:"185c46a0b2267bd577ee525a99450722"},{url:"/img/screener/funk5.webm",revision:"1ccfa8027e5d24c8b011e8a7c20422a4"},{url:"/img/screener/funk6.webm",revision:"4e236511e2f924085ef85571420dd48f"},{url:"/img/screener/game1.webm",revision:"7c87dbe0b674bd4a62318b353f75d6dd"},{url:"/js/content.js",revision:"b0200f992c29993518612c0bb91ff139"},{url:"/js/ga.js",revision:"76f3b1571736ee3ea4e103f4caaf53eb"},{url:"/manifest.json",revision:"d5851b6de1e604345b55c05a348c71e8"},{url:"/navere58ae30c341a262f951f2c7b1789463d.html",revision:"acc34bafdae15cabf97c92d196853424"},{url:"/robots.txt",revision:"f28d13053864ae95356ae2f8bdfb3739"},{url:"/rss-html.xml",revision:"708d8024f743abb03688d9ed86c1fcb8"},{url:"/rss.xml",revision:"aefcf205fa2dd6e35815fb3d8fa1b4c9"},{url:"/sitemap-html.xml",revision:"0f526f6778bf143ddfd3255c2b7e8290"},{url:"/sitemap.xml",revision:"6c301b085263173097318dacf939c171"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
