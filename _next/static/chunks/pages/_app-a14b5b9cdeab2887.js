(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6363:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return c(2957)}])},2957:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(2524);c.n(e);var f=c(3837);c.n(f);var g=c(4304);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}b.default=function(a){var b=a.Component,c=a.pageProps;return(0,g.qy)(),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(g.Wi,{}),(0,d.jsx)(b,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}({},c)),";"]})}},3837:function(){},2524:function(){},1163:function(a,b,c){a.exports=c(387)},4298:function(a,b,c){a.exports=c(699)},4601:function(a,b,c){"use strict";var d=c(4155);Object.defineProperty(b,"__esModule",{value:!0}),b.GoogleAnalytics=void 0;const e=c(655),f=(0,e.__importDefault)(c(7294)),g=(0,e.__importDefault)(c(4298));b.GoogleAnalytics=function({strategy:a}){const b=d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;return b?f.default.createElement(f.default.Fragment,null,f.default.createElement(g.default,{src:`https://www.googletagmanager.com/gtag/js?id=${b}`,strategy:a}),f.default.createElement(g.default,{id:"nextjs-google-analytics"},`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${b}', {
              page_path: window.location.pathname,
            });
          `)):null}},6909:function(a,b,c){"use strict";var d=c(4155);Object.defineProperty(b,"__esModule",{value:!0}),b.event=b.pageView=b.missingGtagMsg=void 0,b.missingGtagMsg="Gtag is missing. Add the `GoogleAnalytics` component to the `Head` component inside `_document.js`.",b.pageView=function({title:a,location:c,path:e,sendPageView:f}={}){const g=d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;if(g){if(!window.gtag){console.warn(b.missingGtagMsg);return}const h={};void 0!==a&&(h.page_title=a),void 0!==c&&(h.page_location=c),void 0!==e&&(h.page_path=e),void 0!==f&&(h.send_page_view=f),window.gtag("config",g,h)}},b.event=function(a,{category:c,label:e,value:f,nonInteraction:g}={}){const h=d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;if(h){if(!window.gtag){console.warn(b.missingGtagMsg);return}const i={};void 0!==c&&(i.event_category=c),void 0!==e&&(i.event_label=e),void 0!==f&&(i.value=f),void 0!==g&&(i.non_interaction=g),window.gtag("event",a,i)}}},4304:function(a,b,c){"use strict";b.qy=b.Wi=void 0;var d=c(4601);Object.defineProperty(b,"Wi",{enumerable:!0,get:function(){return d.GoogleAnalytics}});var e=c(3000);Object.defineProperty(b,"qy",{enumerable:!0,get:function(){return e.usePagesViews}}),c(6909)},3000:function(a,b,c){"use strict";var d=c(4155);Object.defineProperty(b,"__esModule",{value:!0}),b.usePagesViews=void 0;const e=c(7294),f=c(1163),g=c(6909);b.usePagesViews=function(){const a=(0,f.useRouter)();(0,e.useEffect)(()=>{const b=a=>{d.env.NEXT_PUBLIC_GA_MEASUREMENT_ID&&(0,g.pageView)({path:a.toString()})};return a.events.on("routeChangeComplete",b),()=>{a.events.off("routeChangeComplete",b)}},[a.events])}},655:function(a,b,c){"use strict";c.r(b),c.d(b,{"__extends":function(){return e},"__assign":function(){return f},"__rest":function(){return g},"__decorate":function(){return h},"__param":function(){return i},"__metadata":function(){return j},"__awaiter":function(){return k},"__generator":function(){return l},"__createBinding":function(){return m},"__exportStar":function(){return n},"__values":function(){return o},"__read":function(){return p},"__spread":function(){return q},"__spreadArrays":function(){return r},"__await":function(){return s},"__asyncGenerator":function(){return t},"__asyncDelegator":function(){return u},"__asyncValues":function(){return v},"__makeTemplateObject":function(){return w},"__importStar":function(){return x},"__importDefault":function(){return y},"__classPrivateFieldGet":function(){return z},"__classPrivateFieldSet":function(){return A}});var d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)};function e(a,b){function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c())}var f=function(){return(f=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)};function g(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c}function h(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}function i(a,b){return function(c,d){b(c,d,a)}}function j(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)}function k(a,b,c,d){return new(c||(c=Promise))(function(e,f){function g(a){try{i(d.next(a))}catch(b){f(b)}}function h(a){try{i(d.throw(a))}catch(b){f(b)}}function i(a){var b;a.done?e(a.value):((b=a.value)instanceof c?b:new c(function(a){a(b)})).then(g,h)}i((d=d.apply(a,b||[])).next())})}function l(a,b){var c,d,e,f,g={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return f={next:h(0),"throw":h(1),"return":h(2)},"function"==typeof Symbol&&(f[Symbol.iterator]=function(){return this}),f;function h(a){return function(b){return i([a,b])}}function i(f){if(c)throw new TypeError("Generator is already executing.");for(;g;)try{if(c=1,d&&(e=2&f[0]?d.return:f[0]?d.throw||((e=d.return)&&e.call(d),0):d.next)&&!(e=e.call(d,f[1])).done)return e;switch(d=0,e&&(f=[2&f[0],e.value]),f[0]){case 0:case 1:e=f;break;case 4:return g.label++,{value:f[1],done:!1};case 5:g.label++,d=f[1],f=[0];continue;case 7:f=g.ops.pop(),g.trys.pop();continue;default:if(!(e=(e=g.trys).length>0&&e[e.length-1])&&(6===f[0]||2===f[0])){g=0;continue}if(3===f[0]&&(!e||f[1]>e[0]&&f[1]<e[3])){g.label=f[1];break}if(6===f[0]&&g.label<e[1]){g.label=e[1],e=f;break}if(e&&g.label<e[2]){g.label=e[2],g.ops.push(f);break}e[2]&&g.ops.pop(),g.trys.pop();continue}f=b.call(a,g)}catch(h){f=[6,h],d=0}finally{c=e=0}if(5&f[0])throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}function m(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}function n(a,b){for(var c in a)"default"===c||b.hasOwnProperty(c)||(b[c]=a[c])}function o(a){var b="function"==typeof Symbol&&Symbol.iterator,c=b&&a[b],d=0;if(c)return c.call(a);if(a&&"number"==typeof a.length)return{next:function(){return a&&d>=a.length&&(a=void 0),{value:a&&a[d++],done:!a}}};throw new TypeError(b?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(a,b){var c="function"==typeof Symbol&&a[Symbol.iterator];if(!c)return a;var d,e,f=c.call(a),g=[];try{for(;(void 0===b||b-- >0)&&!(d=f.next()).done;)g.push(d.value)}catch(h){e={error:h}}finally{try{d&&!d.done&&(c=f.return)&&c.call(f)}finally{if(e)throw e.error}}return g}function q(){for(var a=[],b=0;b<arguments.length;b++)a=a.concat(p(arguments[b]));return a}function r(){for(var a=0,b=0,c=arguments.length;b<c;b++)a+=arguments[b].length;for(var d=Array(a),e=0,b=0;b<c;b++)for(var f=arguments[b],g=0,h=f.length;g<h;g++,e++)d[e]=f[g];return d}function s(a){return this instanceof s?(this.v=a,this):new s(a)}function t(a,b,c){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var d,e=c.apply(a,b||[]),f=[];return d={},g("next"),g("throw"),g("return"),d[Symbol.asyncIterator]=function(){return this},d;function g(a){e[a]&&(d[a]=function(b){return new Promise(function(c,d){f.push([a,b,c,d])>1||h(a,b)})})}function h(a,b){try{i(e[a](b))}catch(c){l(f[0][3],c)}}function i(a){a.value instanceof s?Promise.resolve(a.value.v).then(j,k):l(f[0][2],a)}function j(a){h("next",a)}function k(a){h("throw",a)}function l(a,b){a(b),f.shift(),f.length&&h(f[0][0],f[0][1])}}function u(a){var b,c;return b={},d("next"),d("throw",function(a){throw a}),d("return"),b[Symbol.iterator]=function(){return this},b;function d(d,e){b[d]=a[d]?function(b){return(c=!c)?{value:s(a[d](b)),done:"return"===d}:e?e(b):b}:e}}function v(a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var b,c=a[Symbol.asyncIterator];return c?c.call(a):(a=o(a),b={},d("next"),d("throw"),d("return"),b[Symbol.asyncIterator]=function(){return this},b);function d(c){b[c]=a[c]&&function(b){return new Promise(function(d,f){e(d,f,(b=a[c](b)).done,b.value)})}}function e(a,b,c,d){Promise.resolve(d).then(function(b){a({value:b,done:c})},b)}}function w(a,b){return Object.defineProperty?Object.defineProperty(a,"raw",{value:b}):a.raw=b,a}function x(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}function y(a){return a&&a.__esModule?a:{default:a}}function z(a,b){if(!b.has(a))throw new TypeError("attempted to get private field on non-instance");return b.get(a)}function A(a,b,c){if(!b.has(a))throw new TypeError("attempted to set private field on non-instance");return b.set(a,c),c}}},function(a){var b=function(b){return a(a.s=b)};a.O(0,[774,179],function(){return b(6363),b(387)}),_N_E=a.O()}])