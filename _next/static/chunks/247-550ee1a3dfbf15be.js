(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{8566:function(a,b,c){"use strict";var d=c(3848),e=c(3115);b.default=function(a){var b,c=a.src,e=a.sizes,i=a.unoptimized,k=void 0!==i&&i,l=a.priority,p=void 0!==l&&l,r=a.loading,s=a.lazyBoundary,t=void 0===s?"200px":s,u=a.className,v=a.quality,w=a.width,A=a.height,B=a.objectFit,C=a.objectPosition,D=a.onLoadingComplete,E=a.loader,F=void 0===E?z:E,G=a.placeholder,H=void 0===G?"empty":G,I=a.blurDataURL,J=function(a,b){if(null==a)return{};var c,d,e=n(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),K=J,L=e?"responsive":"intrinsic";"layout"in K&&(K.layout&&(L=K.layout),delete K.layout);var M,N="";if("object"==typeof(M=c)&&(q(M)|| void 0!==M.src)){var O=q(c)?c.default:c;if(!O.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(O)));if(I=I||O.blurDataURL,N=O.src,(!L||"fill"!==L)&&(A=A||O.height,w=w||O.width,!O.height||!O.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(O)))}c="string"==typeof c?c:N;var P=y(w),Q=y(A),R=y(v),S=!p&&("lazy"===r|| void 0===r);(c.startsWith("data:")||c.startsWith("blob:"))&&(k=!0,S=!1),o.has(c)&&(S=!1);var T=d(j.useIntersection({rootMargin:t,disabled:!S}),2),U=T[0],V=T[1],W={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Y=!1,Z={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:B,objectPosition:C},$="blur"===H?{filter:"blur(20px)",backgroundSize:B||"cover",backgroundImage:"url(\"".concat(I,"\")"),backgroundPosition:C||"0% 0%"}:{};if("fill"===L)W.display="block",W.position="absolute",W.top=0,W.left=0,W.bottom=0,W.right=0;else if(void 0!==P&& void 0!==Q){var _=Q/P,aa=isNaN(_)?"100%":"".concat(100*_,"%");"responsive"===L?(W.display="block",W.position="relative",Y=!0,X.paddingTop=aa):"intrinsic"===L?(W.display="inline-block",W.position="relative",W.maxWidth="100%",Y=!0,X.maxWidth="100%",b="<svg width=\"".concat(P,"\" height=\"").concat(Q,"\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>")):"fixed"===L&&(W.display="inline-block",W.position="relative",W.width=P,W.height=Q)}var ba={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};(!S||V)&&(ba=x({src:c,unoptimized:k,layout:L,width:P,quality:R,sizes:e,loader:F}));var ca=c;return f.default.createElement("span",{style:W},Y?f.default.createElement("span",{style:X},b?f.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(h.toBase64(b))}):null):null,f.default.createElement("img",Object.assign({},K,ba,{decoding:"async","data-nimg":L,className:u,ref:function(a){U(a),(function(a,b,c,d,e){if(a){var f=function(){"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"!==a.src&&("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if("blur"===d&&(a.style.filter="none",a.style.backgroundSize="none",a.style.backgroundImage="none"),o.add(b),e){var c=a.naturalWidth,f=a.naturalHeight;e({naturalWidth:c,naturalHeight:f})}})};a.complete?f():a.onload=f}})(a,ca,L,H,D)},style:m({},Z,$)})),f.default.createElement("noscript",null,f.default.createElement("img",Object.assign({},K,x({src:c,unoptimized:k,layout:L,width:P,quality:R,sizes:e,loader:F}),{decoding:"async","data-nimg":L,style:Z,className:u,loading:r||"lazy"}))),p?f.default.createElement(g.default,null,f.default.createElement("link",{key:"__nimg-"+ba.src+ba.srcSet+ba.sizes,rel:"preload",as:"image",href:ba.srcSet?void 0:ba.src,imagesrcset:ba.srcSet,imagesizes:ba.sizes})):null)};var f=l(c(7294)),g=l(c(2717)),h=c(3389),i=c(5809),j=c(639);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){return a&&a.__esModule?a:{"default":a}}function m(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}function n(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var o=new Set();new Map();var p=new Map([["default",function(a){var b=a.root,c=a.src,d=a.width,e=a.quality;return"".concat(b,"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.root,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b).concat(A(c))),g=f.searchParams;return g.set("auto",g.get("auto")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.root,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b).concat(f).concat(A(c))}],["akamai",function(a){var b=a.root,c=a.src,d=a.width;return"".concat(b).concat(A(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw new Error("Image with src \"".concat(b,"\" is missing \"loader\" prop.")+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function q(a){return void 0!==a.default}var r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"},s=r.deviceSizes,t=r.imageSizes,u=r.loader,v=r.path;r.domains;var w=[].concat(e(s),e(t));function x(a){var b=a.src,c=a.unoptimized,d=a.layout,f=a.width,g=a.quality,h=a.sizes,i=a.loader;if(c)return{src:b,srcSet:void 0,sizes:void 0};var j=function(a,b,c){if(c&&("fill"===b||"responsive"===b)){for(var d,f=/(^|\s)(1?\d?\d)vw/g,g=[];d=f.exec(c);d)g.push(parseInt(d[2]));if(g.length){var h=0.01*Math.min.apply(Math,g);return{widths:w.filter(function(a){return a>=s[0]*h}),kind:"w"}}return{widths:w,kind:"w"}}return"number"!=typeof a||"fill"===b||"responsive"===b?{widths:s,kind:"w"}:{widths:e(new Set([a,2*a].map(function(a){return w.find(function(b){return b>=a})||w[w.length-1]}))),kind:"x"}}(f,d,h),k=j.widths,l=j.kind,m=k.length-1;return{sizes:h||"w"!==l?h:"100vw",srcSet:k.map(function(a,c){return"".concat(i({src:b,quality:g,width:a})," ").concat("w"===l?a:c+1).concat(l)}).join(", "),src:i({src:b,quality:g,width:k[m]})}}function y(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function z(a){var b=p.get(u);if(b)return b(m({root:v},a));throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(i.VALID_LOADERS.join(", "),". Received: ").concat(u))}function A(a){return"/"===a[0]?a.slice(1):a}s.sort(function(a,b){return a-b}),w.sort(function(a,b){return a-b})},7942:function(a,b,c){"use strict";var d=c(3848);b.default=void 0;var e,f=(e=c(7294))&&e.__esModule?e:{"default":e},g=c(4957),h=c(9898),i=c(639),j={};function k(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;j[b+"%"+c+(e?"%"+e:"")]=!0}}b.default=function(a){var b,c=!1!==a.prefetch,e=h.useRouter(),l=f.default.useMemo(function(){var b=d(g.resolveHref(e,a.href,!0),2),c=b[0],f=b[1];return{href:c,as:a.as?g.resolveHref(e,a.as):f||c}},[e,a.href,a.as]),m=l.href,n=l.as,o=a.children,p=a.replace,q=a.shallow,r=a.scroll,s=a.locale;"string"==typeof o&&(o=f.default.createElement("a",null,o));var t=(b=f.default.Children.only(o))&&"object"==typeof b&&b.ref,u=d(i.useIntersection({rootMargin:"200px"}),2),v=u[0],w=u[1],x=f.default.useCallback(function(a){v(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,v]);f.default.useEffect(function(){var a=w&&c&&g.isLocalURL(m),b=void 0!==s?s:e&&e.locale,d=j[m+"%"+n+(b?"%"+b:"")];a&&!d&&k(e,m,n,{locale:b})},[n,m,w,s,c,e]);var y={ref:x,onClick:function(a){var c,d,f,h,i,j,k,l,o,t;b.props&&"function"==typeof b.props.onClick&&b.props.onClick(a),a.defaultPrevented||(c=a,d=e,f=m,h=n,i=p,j=q,k=r,l=s,"A"===c.currentTarget.nodeName&&((t=(o=c).currentTarget.target)&&"_self"!==t||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which||!g.isLocalURL(f))||(c.preventDefault(),null==k&&h.indexOf("#")>=0&&(k=!1),d[i?"replace":"push"](f,h,{shallow:j,locale:l,scroll:k})))}};if(y.onMouseEnter=function(a){g.isLocalURL(m)&&(b.props&&"function"==typeof b.props.onMouseEnter&&b.props.onMouseEnter(a),k(e,m,n,{priority:!0}))},a.passHref||"a"===b.type&&!("href"in b.props)){var z=void 0!==s?s:e&&e.locale,A=e&&e.isLocaleDomain&&g.getDomainLocale(n,z,e&&e.locales,e&&e.domainLocales);y.href=A||g.addBasePath(g.addLocale(n,z,e&&e.defaultLocale))}return f.default.cloneElement(b,y)}},639:function(a,b,c){"use strict";var d=c(3848);Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootMargin,c=a.disabled||!g,i=e.useRef(),j=d(e.useState(!1),2),k=j[0],l=j[1],m=e.useCallback(function(a){i.current&&(i.current(),i.current=void 0),!c&&!k&&a&&a.tagName&&(i.current=h(a,function(a){return a&&l(a)},{rootMargin:b}))},[c,b,k]);return e.useEffect(function(){if(!g&&!k){var a=f.requestIdleCallback(function(){return l(!0)});return function(){return f.cancelIdleCallback(a)}}},[k]),[m,k]};var e=c(7294),f=c(6286),g="undefined"!=typeof IntersectionObserver;function h(a,b,c){var d=j(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){g.delete(a),f.unobserve(a),0===g.size&&(f.disconnect(),i.delete(e))}}var i=new Map();function j(a){var b=a.rootMargin||"",c=i.get(b);if(c)return c;var d=new Map(),e=new IntersectionObserver(function(a){a.forEach(function(a){var b=d.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return i.set(b,c={id:b,observer:e,elements:d}),c}},8000:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e=((d=c(7294))&&d.__esModule?d:{"default":d}).default.createContext({});b.AmpStateContext=e},5646:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=g,b.useAmp=function(){return g(e.default.useContext(f.AmpStateContext))};var d,e=(d=c(7294))&&d.__esModule?d:{"default":d},f=c(8000);function g(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},2717:function(a,b,c){"use strict";var d=c(1682);function e(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var f,g=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(7294)),h=(f=c(1585))&&f.__esModule?f:{"default":f},i=c(8000),j=c(5850),k=c(5646);function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[g.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(g.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,f,h,i;return a.reduce(function(a,b){var c=g.default.Children.toArray(b.props.children);return a.concat(c)},[]).reduce(m,[]).reverse().concat(l(b.inAmpMode)).filter((c=new Set(),f=new Set(),h=new Set(),i={},function(a){var b=!0,d=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){d=!0;var e=a.key.slice(a.key.indexOf("$")+1);c.has(e)?b=!1:c.add(e)}switch(a.type){case"title":case"base":f.has(a.type)?b=!1:f.add(a.type);break;case"meta":for(var g=0,j=n.length;g<j;g++){var k=n[g];if(a.props.hasOwnProperty(k))if("charSet"===k)h.has(k)?b=!1:h.add(k);else{var l=a.props[k],m=i[k]||new Set();("name"!==k||!d)&&m.has(l)?b=!1:(m.add(l),i[k]=m)}}break}return b})).reverse().map(function(a,c){var f=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var h=function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?e(Object(c),!0).forEach(function(b){d(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}({},a.props||{});return h["data-href"]=h.href,h.href=void 0,h["data-optimized-fonts"]=!0,g.default.cloneElement(a,h)}return g.default.cloneElement(a,{key:f})})}b.default=function(a){var b=a.children,c=g.useContext(i.AmpStateContext),d=g.useContext(j.HeadManagerContext);return g.default.createElement(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:k.isInAmpMode(c)},b)}},1585:function(a,b,c){"use strict";var d=c(3115),e=c(2553),f=c(2012),g=c(450),h=c(9807),i=c(7690),j=c(9828);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var k=function(a){h(c,a);var b=function(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d=j(a);if(b){var e=j(this).constructor;c=Reflect.construct(d,arguments,e)}else c=d.apply(this,arguments);return i(this,c)}}(c);function c(a){var f;return e(this,c),(f=b.call(this,a)).emitChange=function(){f._hasHeadManager&&f.props.headManager.updateHead(f.props.reduceComponentsToState(d(f.props.headManager.mountedInstances),f.props))},f._hasHeadManager=f.props.headManager&&f.props.headManager.mountedInstances,f}return f(c,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),c}(function(a){if(a&&a.__esModule)return a;var b={};if(null!=a){for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}}return b.default=a,b}(c(7294)).Component);b.default=k},3389:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.toBase64=function(a){return window.btoa(a)}},5809:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.imageConfigDefault=b.VALID_LOADERS=void 0,b.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom",],b.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(a,b,c){a.exports=c(2717)},5675:function(a,b,c){a.exports=c(8566)},1664:function(a,b,c){a.exports=c(7942)},8164:function(a,b,c){var d=c(4360);a.exports=function(a){if(Array.isArray(a))return d(a)},a.exports.default=a.exports,a.exports.__esModule=!0},7381:function(a){a.exports=function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)},a.exports.default=a.exports,a.exports.__esModule=!0},5725:function(a){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},a.exports.default=a.exports,a.exports.__esModule=!0},3115:function(a,b,c){var d=c(8164),e=c(7381),f=c(3585),g=c(5725);a.exports=function(a){return d(a)||e(a)||f(a)||g()},a.exports.default=a.exports,a.exports.__esModule=!0}}])