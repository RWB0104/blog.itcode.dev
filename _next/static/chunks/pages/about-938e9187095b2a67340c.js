(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{170:function(t,e,n){"use strict";var i=n(2122),o=n(4699),r=n(2949),a=n(7294),s=(n(5697),n(2666)),u=n(8920),c=n(5653),l=n(3834);function d(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var h={entering:{opacity:1,transform:d(1)},entered:{opacity:1,transform:"none"}},p=a.forwardRef((function(t,e){var n=t.children,p=t.disableStrictModeCompat,g=void 0!==p&&p,f=t.in,m=t.onEnter,b=t.onEntered,x=t.onEntering,E=t.onExit,y=t.onExited,v=t.onExiting,S=t.style,k=t.timeout,Z=void 0===k?"auto":k,j=t.TransitionComponent,C=void 0===j?s.ZP:j,w=(0,r.Z)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),T=a.useRef(),N=a.useRef(),M=(0,u.Z)(),_=M.unstable_strictMode&&!g,D=a.useRef(null),R=(0,l.Z)(n.ref,e),O=(0,l.Z)(_?D:void 0,R),F=function(t){return function(e,n){if(t){var i=_?[D.current,e]:[e,n],r=(0,o.Z)(i,2),a=r[0],s=r[1];void 0===s?t(a):t(a,s)}}},W=F(x),P=F((function(t,e){(0,c.n)(t);var n,i=(0,c.C)({style:S,timeout:Z},{mode:"enter"}),o=i.duration,r=i.delay;"auto"===Z?(n=M.transitions.getAutoHeightDuration(t.clientHeight),N.current=n):n=o,t.style.transition=[M.transitions.create("opacity",{duration:n,delay:r}),M.transitions.create("transform",{duration:.666*n,delay:r})].join(","),m&&m(t,e)})),L=F(b),A=F(v),I=F((function(t){var e,n=(0,c.C)({style:S,timeout:Z},{mode:"exit"}),i=n.duration,o=n.delay;"auto"===Z?(e=M.transitions.getAutoHeightDuration(t.clientHeight),N.current=e):e=i,t.style.transition=[M.transitions.create("opacity",{duration:e,delay:o}),M.transitions.create("transform",{duration:.666*e,delay:o||.333*e})].join(","),t.style.opacity="0",t.style.transform=d(.75),E&&E(t)})),H=F(y);return a.useEffect((function(){return function(){clearTimeout(T.current)}}),[]),a.createElement(C,(0,i.Z)({appear:!0,in:f,nodeRef:_?D:void 0,onEnter:P,onEntered:L,onEntering:W,onExit:I,onExited:H,onExiting:A,addEndListener:function(t,e){var n=_?t:e;"auto"===Z&&(T.current=setTimeout(n,N.current||0))},timeout:"auto"===Z?null:Z},w),(function(t,e){return a.cloneElement(n,(0,i.Z)({style:(0,i.Z)({opacity:0,transform:d(.75),visibility:"exited"!==t||f?void 0:"hidden"},h[t],S,n.props.style),ref:O},e))}))}));p.muiSupportAuto=!0,e.Z=p},5653:function(t,e,n){"use strict";n.d(e,{n:function(){return i},C:function(){return o}});var i=function(t){return t.scrollTop};function o(t,e){var n=t.timeout,i=t.style,o=void 0===i?{}:i;return{duration:o.transitionDuration||"number"===typeof n?n:n[e.mode]||0,delay:o.transitionDelay}}},8247:function(t,e,n){"use strict";function i(t){return t[Math.floor(Math.random()*t.length)]}function o(t){var e=t.getFullYear(),n=t.getMonth()+1<10?"0".concat(t.getMonth()+1):t.getMonth()+1,i=t.getDate()<10?"0".concat(t.getDate()):t.getDate(),o=t.getHours()<10?"0".concat(t.getHours()):t.getHours(),r=t.getMinutes()<10?"0".concat(t.getMinutes()):t.getMinutes(),a=t.getSeconds()<10?"0".concat(t.getSeconds()):t.getSeconds(),s=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()];return"".concat(e,"-").concat(n,"-").concat(i," ").concat(s," ").concat(o,":").concat(r,":").concat(a)}n.d(e,{J:function(){return i},L:function(){return o}})},1133:function(t,e,n){"use strict";n.d(e,{R:function(){return u},dz:function(){return c},us:function(){return l},Tl:function(){return d},TJ:function(){return h},xE:function(){return p}});var i=n(5893),o=n(4577),r=n(5747),a=n(9242),s=n(89),u="Kapoo",c="314159265359\ubc88\uc9f8 \uc54c\ud30c\uce74\uc758 \uac1c\ubc1c \ub099\uc11c\uc7a5",l="/assets/images/logo.png",d=[{id:1,title:"Home",url:{pathname:"/"},icon:(0,i.jsx)(o.Z,{})},{id:2,title:"Posts",url:{pathname:"/posts"},icon:(0,i.jsx)(r.Z,{})},{id:3,title:"Projects",url:{pathname:"/projects"},icon:(0,i.jsx)(a.Z,{})},{id:4,title:"About",url:{pathname:"/about"},icon:(0,i.jsx)(s.Z,{})}],h=[{title:"Cake is a fxcking LIE",author:"Are you steel there?",images:"https://user-images.githubusercontent.com/50317129/118843488-126c6200-b905-11eb-9324-9ea96ea833dd.png"},{title:"Sierra Madre. \uc77c\ud655\ucc9c\uae08\uc758 \uafc8\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uacf3.",author:"Sierra Madre Casino",images:"https://user-images.githubusercontent.com/50317129/118843635-35971180-b905-11eb-874f-e7929f9f9664.png"},{title:"Trust Me.",author:"BT",images:"https://user-images.githubusercontent.com/50317129/118843791-595a5780-b905-11eb-88f8-781bbf897ef5.png"},{title:"A man chooses, A slave obeys.",author:"a Golfer",images:"https://user-images.githubusercontent.com/50317129/118843919-77c05300-b905-11eb-8213-6f9caaa58829.png"},{title:"404 Not Found",author:"undefined... x_X",images:"https://user-images.githubusercontent.com/50317129/118844150-b1915980-b905-11eb-916b-49921c5c46f7.gif"},{title:"\uac8c\uc784\uc744 \ud558\uba74 \uc774\uaca8\uc57c\uc9c0!",author:"D.Va",images:"https://user-images.githubusercontent.com/50317129/118844364-ddacda80-b905-11eb-9051-4f3f50f94f7e.png"},{title:"\ub0b4 \uc190\uc744 \uc7a1\uc544, \uc2dc\uc791\ub418\ub294 Party time.",author:"\ud658\uc0c1\uc18d\uc758 \uadf8\ub300",images:"https://user-images.githubusercontent.com/50317129/118844396-e3a2bb80-b905-11eb-9c71-d11851905631.png"},{title:"Enjoy your stay",author:"Fallout New Vegas",images:"https://user-images.githubusercontent.com/50317129/118844534-fddc9980-b905-11eb-8b8b-bbb3686066d8.png"},{title:"War... War never changes.",author:"Fallout Series",images:"https://user-images.githubusercontent.com/50317129/118844589-08972e80-b906-11eb-8b69-a32c9a29a329.png"},{title:"War... War never changes. Men do.",author:"Ulysses",images:"https://user-images.githubusercontent.com/50317129/118844943-514ee780-b906-11eb-92fc-306cb4ad2174.png"},{title:"On your left.",author:"Sam",images:"https://user-images.githubusercontent.com/50317129/118845228-8ce9b180-b906-11eb-860e-c1f41459a08d.png"},{title:"History is written by the victors.",author:"Cpt. Price",images:"https://user-images.githubusercontent.com/50317129/118845457-c28e9a80-b906-11eb-8740-3fb5fd734a75.png"},{title:"History is written by the victors.",author:"Gen. Shepherd",images:"https://user-images.githubusercontent.com/50317129/118846014-4052a600-b907-11eb-880c-0dd5708123ed.png"},{title:"Remember. We get dirty, World be stay clean. That's the mission.",author:"Cpt. Price",images:"https://user-images.githubusercontent.com/50317129/118846231-7b54d980-b907-11eb-87b0-6354b55c3b5c.png"},{title:"Succeeding you, Father.",author:"Arthas Menethil",images:"https://user-images.githubusercontent.com/50317129/118846373-9aec0200-b907-11eb-8b13-04ca3e63d747.png"},{title:"My life for Aiur",author:"Zeratul",images:"https://user-images.githubusercontent.com/50317129/118846580-d25aae80-b907-11eb-92ff-ad4709f1e3ef.png"},{title:"\ub4dc\ub514\uc5b4, \uc62c \uac83\uc774 \uc654\uad70.",author:"Tychus J. Findlay",images:"https://user-images.githubusercontent.com/50317129/118846645-e7374200-b907-11eb-9d64-8d11b955d219.png"},{title:"\uadf8 \uc5ec\uc790\uac00 \uadf8\ub9cc\ud55c \uac00\uce58\uac00 \uc788\uae38 \ubc14\ub77c\uaca0\uc5b4, \uc9c0\ubbf8...",author:"Tychus J. Findlay...?",images:"https://user-images.githubusercontent.com/50317129/118846876-1e0d5800-b908-11eb-836c-697e3eb1cdc2.png"},{title:"\uc9c4\uc9e4\ub8e8\uc5d0\uc5ec \uac00\uc9e4\ub8e8\uc5d0\uc5ec??? \ub124????",author:"\ud558\ube75",images:"https://user-images.githubusercontent.com/50317129/118972620-b4468a00-b9ab-11eb-8751-e22b63075321.png"},{title:"\uc7a5\ube44\ub97c \uc815\uc9c0\ud569\ub2c8\ub2e4.",author:"\uc548 \ub418\uc796\uc544?",images:"https://user-images.githubusercontent.com/50317129/118972896-08ea0500-b9ac-11eb-9923-a40717be81b8.png"},{title:"I think we'll be OK, Leon.",author:"Matilda",images:"https://user-images.githubusercontent.com/50317129/118973091-477fbf80-b9ac-11eb-8b7a-c1275d2bf97b.png"},{title:"I think we'll be OK, Leon.",author:"Matilda",images:"https://user-images.githubusercontent.com/50317129/118973091-477fbf80-b9ac-11eb-8b7a-c1275d2bf97b.png"},{title:"No kids, No women",author:"Leon",images:"https://user-images.githubusercontent.com/50317129/118973681-e4425d00-b9ac-11eb-8db5-301f55bd6472.png"},{title:"\uc774\ub7f0 \ub0a0\uc5d4, \ub108 \uac19\uc740 \uaf2c\ub9c8\ub4e4\uc740...",author:"WA! Sxxs!!",images:"https://user-images.githubusercontent.com/50317129/119267705-b9653c80-bc2a-11eb-845c-fac6fcd313f8.gif"}],p=10},9831:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(5893),o=n(9008),r=n(1133);function a(t){var e=t.title;return(0,i.jsx)(o.default,{children:(0,i.jsx)("title",{children:"".concat(e," - ").concat(r.R)})})}},4921:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=n(6156),o=n(5893),r=n(7294),a=n(8367),s=n(1017),u=n(8920),c=n(3457),l=n(7748),d=n(2318),h=n(4720),p=n(5517),g=n(1120),f=n(1490);function m(t){var e=t.title,n=t.desc,m=t.category,b=t.onlyEng,x=function(t){return(0,g.Z)((function(e){return{top_wrapper:(0,i.Z)({height:"calc(100vh - 64px)",backgroundImage:"url(".concat(t,")"),backgroundColor:"rgba(0, 0, 0, 0.6)",backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"center"},e.breakpoints.down("sm"),{height:"calc(100vh - 112px)"}),top_content:{width:"100%",height:"100%",padding:50},title:{color:"white",marginBottom:60,fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif",fontWeight:"bold"},title_eng:{color:"white",marginBottom:60,fontFamily:"Blacksword, sans-serif",fontWeight:"bold"},desc:{color:"white",fontFamily:"\ub458\uae30\ub9c8\uc694, sans-serif"},down:(0,i.Z)({width:"100%",padding:20,"& svg":{width:50,height:50}},e.breakpoints.down("sm"),{"& svg":{width:30,height:30}}),divider:{opacity:0}}}))()}(t.image),E=(0,u.Z)(),y=(0,c.Z)(E.breakpoints.down("sm")),v=(0,r.useRef)(null);return(0,s.default)({ssrFadeOut:!0}),(0,r.useEffect)((function(){document.getElementById("top").addEventListener("wheel",(function(t){t.deltaY>0&&(t.preventDefault(),v.current.scrollIntoView({behavior:"smooth"}))}))})),(0,o.jsxs)(l.Z,{id:"top",display:"flex",flexDirection:"column",className:x.top_wrapper,children:[(0,o.jsxs)(l.Z,{display:"flex",flexDirection:"column",justifyContent:"center",alignSelf:"center",className:x.top_content,children:[(0,o.jsx)(d.Z,{variant:y?"h5":"h3",align:"center",className:x.desc,children:(0,o.jsx)(a.BW,{left:!0,cascade:!0,children:m&&"[".concat(m,"]")})}),(0,o.jsx)(d.Z,{variant:y?"h3":"h1",align:"center",className:b?x.title_eng:x.title,children:(0,o.jsx)(a.BW,{left:!0,cascade:!0,children:e})}),(0,o.jsx)(d.Z,{variant:y?"h6":"h4",align:"center",className:x.desc,children:(0,o.jsx)(a.BW,{left:!0,cascade:!0,children:n})})]}),(0,o.jsx)(h.Z,{className:x.down,onClick:function(){return v.current.scrollIntoView({behavior:"smooth"})},children:(0,o.jsx)(f.Z,{})}),(0,o.jsx)(p.Z,{ref:v,className:x.divider})]})}},2025:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return h},default:function(){return p}});var i=n(5893),o=n(7294),r=n(9008),a=n(170),s=n(7748),u=n(4921),c=n(9831),l=n(8247),d=n(1133),h=!0;function p(t){var e=t.images,n=(0,l.J)(e);return(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(c.Z,{title:d.Tl[3].title}),(0,i.jsxs)(r.default,{children:[(0,i.jsx)("meta",{property:"og:site_name",content:d.R}),(0,i.jsx)("meta",{property:"og:title",content:d.Tl[3].title}),(0,i.jsx)("meta",{property:"og:description",content:d.dz}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{property:"og:url",content:"https://rwb0104.github.io/".concat(d.Tl[3].url.pathname,"/")}),(0,i.jsx)("meta",{property:"og:image",content:"https://rwb0104.github.io/assets/images/logo.png"}),(0,i.jsx)("meta",{property:"og:locale",content:"ko_KR"})]}),(0,i.jsx)(a.Z,{in:!0,children:(0,i.jsx)(s.Z,{component:"section",children:(0,i.jsx)(u.Z,{title:d.Tl[3].title,image:"/assets/images/main/".concat(n),onlyEng:!0})})})]})}},8961:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2025)}])},2666:function(t,e,n){"use strict";n.d(e,{ZP:function(){return m}});var i=n(9756),o=n(1788),r=(n(5697),n(7294)),a=n(3935),s=!1,u=n(220),c="unmounted",l="exited",d="entering",h="entered",p="exiting",g=function(t){function e(e,n){var i;i=t.call(this,e,n)||this;var o,r=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?r?(o=l,i.appearStatus=d):o=h:o=e.unmountOnExit||e.mountOnEnter?c:l,i.state={status:o},i.nextCallback=null,i}(0,o.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:l}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==h&&(e=d):n!==d&&n!==h||(e=p)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,i=this.props.timeout;return t=e=n=i,null!=i&&"number"!==typeof i&&(t=i.exit,e=i.enter,n=void 0!==i.appear?i.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===l&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,i=this.context?this.context.isMounting:t,o=this.props.nodeRef?[i]:[a.findDOMNode(this),i],r=o[0],u=o[1],c=this.getTimeouts(),l=i?c.appear:c.enter;!t&&!n||s?this.safeSetState({status:h},(function(){e.props.onEntered(r)})):(this.props.onEnter(r,u),this.safeSetState({status:d},(function(){e.props.onEntering(r,u),e.onTransitionEnd(l,(function(){e.safeSetState({status:h},(function(){e.props.onEntered(r,u)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:a.findDOMNode(this);e&&!s?(this.props.onExit(i),this.safeSetState({status:p},(function(){t.props.onExiting(i),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:l},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:l},(function(){t.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],r=o[0],s=o[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,i.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(u.Z.Provider,{value:null},"function"===typeof n?n(t,o):r.cloneElement(r.Children.only(n),o))},e}(r.Component);function f(){}g.contextType=u.Z,g.propTypes={},g.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:f,onEntering:f,onEntered:f,onExit:f,onExiting:f,onExited:f},g.UNMOUNTED=c,g.EXITED=l,g.ENTERING=d,g.ENTERED=h,g.EXITING=p;var m=g}},function(t){t.O(0,[774,598,817],(function(){return e=8961,t(t.s=e);var e}));var e=t.O();_N_E=e}]);