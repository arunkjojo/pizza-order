(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[957],{5021:function(t,e,n){"use strict";n.d(e,{ch:function(){return P},Vv:function(){return L},Up:function(){return S}});var r,o,a,i=n(7294);!function(t){t.INITIAL="initial",t.PENDING="pending",t.REJECTED="rejected",t.RESOLVED="resolved"}(r||(r={})),function(t){t.LOADING_STATUS="setLoadingStatus",t.RESET_OPTIONS="resetOptions",t.SET_BRAINTREE_INSTANCE="braintreeInstance"}(o||(o={})),function(t){t.NUMBER="number",t.CVV="cvv",t.EXPIRATION_DATE="expirationDate",t.EXPIRATION_MONTH="expirationMonth",t.EXPIRATION_YEAR="expirationYear",t.POSTAL_CODE="postalCode"}(a||(a={}));var c="data-react-paypal-script-id",u="data-sdk-integration-source",s="react-paypal-js",l="data-namespace",d="Failed to load the PayPal JS SDK script.",f="3.84.0",p=("https://js.braintreegateway.com/web/".concat(f,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(f,"/js/paypal-checkout.min.js"),"paypal"),v=function(){return(v=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function h(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function y(t,e,n){if(n||2===arguments.length)for(var r,o=0,a=e.length;o<a;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function m(t){return void 0===t&&(t=p),window[t]}function E(t){var e=t.reactComponentName,n=t.sdkComponentKey,r=t.sdkRequestedComponents,o=void 0===r?"":r,a=t.sdkDataNamespace,i=void 0===a?p:a,c=n.charAt(0).toUpperCase().concat(n.substring(1)),u="Unable to render <".concat(e," /> because window.").concat(i,".").concat(c," is undefined.");if(!o.includes(n)){var s=[o,n].filter(Boolean).join();u+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(s,"'}}>`.")}return u}function b(t){return"react-paypal-js-".concat(function(t){for(var e="",n=0;n<t.length;n++){var r=t[n].charCodeAt(0)*n;t[n+1]&&(r+=t[n+1].charCodeAt(0)*(n-1)),e+=String.fromCharCode(97+Math.abs(r)%26)}return e}(JSON.stringify(t)))}function g(t,e){var n;switch(e.type){case o.LOADING_STATUS:return v(v({},t),{loadingStatus:e.value});case o.RESET_OPTIONS:return function(t){var e=self.document.querySelector("script[".concat(c,'="').concat(t,'"]'));(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)}(t.options[c]),delete e.value[c],v(v({},t),{loadingStatus:r.PENDING,options:v(v({},e.value),(n={},n[c]="".concat(b(e.value)),n[u]=s,n))});case o.SET_BRAINTREE_INSTANCE:return v(v({},t),{braintreePayPalCheckoutInstance:e.value});default:return t}}var w=(0,i.createContext)(null);function N(t){if("function"===typeof(null===t||void 0===t?void 0:t.dispatch)&&0!==t.dispatch.length)return t;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function S(){var t=N((0,i.useContext)(w));return[v(v({},t),{isInitial:t.loadingStatus===r.INITIAL,isPending:t.loadingStatus===r.PENDING,isResolved:t.loadingStatus===r.RESOLVED,isRejected:t.loadingStatus===r.REJECTED}),t.dispatch]}(0,i.createContext)({});var P=function(t){var e=t.className,n=void 0===e?"":e,r=t.disabled,o=void 0!==r&&r,a=t.children,c=t.forceReRender,u=void 0===c?[]:c,s=h(t,["className","disabled","children","forceReRender"]),d=o?{opacity:.38}:{},f="".concat(n," ").concat(o?"paypal-buttons-disabled":"").trim(),p=(0,i.useRef)(null),b=(0,i.useRef)(null),g=S()[0],w=g.isResolved,N=g.options,I=(0,i.useState)(null),A=I[0],R=I[1],O=(0,i.useState)(!0),T=O[0],C=O[1],k=(0,i.useState)(null)[1];function j(){null!==b.current&&b.current.close().catch((function(){}))}return(0,i.useEffect)((function(){if(!1===w)return j;var t=m(N[l]);if(void 0===t||void 0===t.Buttons)return k((function(){throw new Error(E({reactComponentName:P.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:N.components,sdkDataNamespace:N[l]}))})),j;try{b.current=t.Buttons(v(v({},s),{onInit:function(t,e){R(e),"function"===typeof s.onInit&&s.onInit(t,e)}}))}catch(e){return k((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))}))}return!1===b.current.isEligible()?(C(!1),j):p.current?(b.current.render(p.current).catch((function(t){null!==p.current&&0!==p.current.children.length&&k((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(t))}))})),j):j}),y(y([w],u,!0),[s.fundingSource],!1)),(0,i.useEffect)((function(){null!==A&&(!0===o?A.disable().catch((function(){})):A.enable().catch((function(){})))}),[o,A]),i.createElement(i.Fragment,null,T?i.createElement("div",{ref:p,style:d,className:f}):a)};function I(t){var e="https://www.paypal.com/sdk/js";t.sdkBaseURL&&(e=t.sdkBaseURL,delete t.sdkBaseURL),function(t){var e=t["merchant-id"],n=t["data-merchant-id"],r="",o="";Array.isArray(e)?e.length>1?(r="*",o=e.toString()):r=e.toString():"string"===typeof e&&e.length>0?r=e:"string"===typeof n&&n.length>0&&(r="*",o=n);t["merchant-id"]=r,t["data-merchant-id"]=o}(t);var n=Object.keys(t).filter((function(e){return"undefined"!==typeof t[e]&&null!==t[e]&&""!==t[e]})).reduce((function(e,n){var r=t[n].toString();return"data-"===n.substring(0,5)?e.dataAttributes[n]=r:e.queryParams[n]=r,e}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,o=n.dataAttributes;return{url:"".concat(e,"?").concat(A(r)),dataAttributes:o}}function A(t){var e="";return Object.keys(t).forEach((function(n){0!==e.length&&(e+="&"),e+=n+"="+t[n]})),e}function R(t,e){void 0===e&&(e={});var n=document.createElement("script");return n.src=t,Object.keys(e).forEach((function(t){n.setAttribute(t,e[t]),"data-csp-nonce"===t&&n.setAttribute("nonce",e["data-csp-nonce"])})),n}function O(t,e){if(void 0===e&&(e=C()),j(t,e),"undefined"===typeof window)return e.resolve(null);var n=I(t),r=n.url,o=n.dataAttributes,a=o["data-namespace"]||"paypal",i=k(a);return function(t,e){var n=document.querySelector('script[src="'.concat(t,'"]'));if(null===n)return null;var r=R(t,e),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach((function(t){o.dataset[t]!==r.dataset[t]&&(a=!1)})),a?n:null}(r,o)&&i?e.resolve(i):T({url:r,attributes:o},e).then((function(){var t=k(a);if(t)return t;throw new Error("The window.".concat(a," global variable is not available."))}))}function T(t,e){void 0===e&&(e=C()),j(t,e);var n=t.url,r=t.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new e((function(t,e){if("undefined"===typeof window)return t();!function(t){var e=t.url,n=t.attributes,r=t.onSuccess,o=t.onError,a=R(e,n);a.onerror=o,a.onload=r,document.head.insertBefore(a,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return t()},onError:function(){var t=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&e(t),n.text()})).then((function(t){var n=function(t){var e=t.split("/* Original Error:")[1];return e?e.replace(/\n/g,"").replace("*/","").trim():t}(t);e(new Error(n))})).catch((function(t){e(t)})):e(t)}})}))}function C(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function k(t){return window[t]}function j(t,e){if("object"!==typeof t||null===t)throw new Error("Expected an options object.");if("undefined"!==typeof e&&"function"!==typeof e)throw new Error("Expected PromisePonyfill to be a function.")}P.displayName="PayPalButtons";var D=function(t){var e=t.className,n=void 0===e?"":e,r=t.children,o=h(t,["className","children"]),a=S()[0],c=a.isResolved,u=a.options,s=(0,i.useRef)(null),d=(0,i.useState)(!0),f=d[0],p=d[1],y=(0,i.useState)(null)[1];return(0,i.useEffect)((function(){if(!1!==c){var t=m(u[l]);if(void 0===t||void 0===t.Marks)return y((function(){throw new Error(E({reactComponentName:D.displayName,sdkComponentKey:"marks",sdkRequestedComponents:u.components,sdkDataNamespace:u[l]}))}));!function(t){var e=s.current;if(!e||!t.isEligible())return p(!1);e.firstChild&&e.removeChild(e.firstChild),t.render(e).catch((function(t){null!==e&&0!==e.children.length&&y((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(t))}))}))}(t.Marks(v({},o)))}}),[c,o.fundingSource]),i.createElement(i.Fragment,null,f?i.createElement("div",{ref:s,className:n}):r)};D.displayName="PayPalMarks";var _=function(t){var e=t.className,n=void 0===e?"":e,r=t.forceReRender,o=void 0===r?[]:r,a=h(t,["className","forceReRender"]),c=S()[0],u=c.isResolved,s=c.options,d=(0,i.useRef)(null),f=(0,i.useRef)(null),p=(0,i.useState)(null)[1];return(0,i.useEffect)((function(){if(!1!==u){var t=m(s[l]);if(void 0===t||void 0===t.Messages)return p((function(){throw new Error(E({reactComponentName:_.displayName,sdkComponentKey:"messages",sdkRequestedComponents:s.components,sdkDataNamespace:s[l]}))}));f.current=t.Messages(v({},a)),f.current.render(d.current).catch((function(t){null!==d.current&&0!==d.current.children.length&&p((function(){throw new Error("Failed to render <PayPalMessages /> component. ".concat(t))}))}))}}),y([u],o,!0)),i.createElement("div",{ref:d,className:n})};_.displayName="PayPalMessages";var L=function(t){var e,n=t.options,a=void 0===n?{"client-id":"test"}:n,l=t.children,f=t.deferLoading,p=void 0!==f&&f,h=(0,i.useReducer)(g,{options:v(v({},a),(e={},e[c]="".concat(b(a)),e[u]=s,e)),loadingStatus:p?r.INITIAL:r.PENDING}),y=h[0],m=h[1];return(0,i.useEffect)((function(){if(!1===p&&y.loadingStatus===r.INITIAL)return m({type:o.LOADING_STATUS,value:r.PENDING});if(y.loadingStatus===r.PENDING){var t=!0;return O(y.options).then((function(){t&&m({type:o.LOADING_STATUS,value:r.RESOLVED})})).catch((function(e){console.error("".concat(d," ").concat(e)),t&&m({type:o.LOADING_STATUS,value:r.REJECTED})})),function(){t=!1}}}),[y.options,p,y.loadingStatus]),i.createElement(w.Provider,{value:v(v({},y),{dispatch:m})},l)}},1163:function(t,e,n){t.exports=n(9898)},6586:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},9711:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(6988);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},6988:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(6586);function o(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}}]);