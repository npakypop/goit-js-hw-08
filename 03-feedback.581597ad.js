!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return a.default(e)||u.default(e,t)||f.default(e,t)||l.default()};var a=c(o("8slrw")),u=c(o("7AJDX")),l=c(o("ifqQW")),f=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={save:function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.log("Remove item error",error.message)}}},d={},v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",y=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,b=/^0o[0-7]+$/i,O=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,_=h||x||Function("return this")(),j=Object.prototype.toString,w=Math.max,S=Math.min,M=function(){return _.Date.now()};function I(e,t,r){var n,o,i,a,u,l,f=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,f=t,a=e.apply(i,r)}function y(e){return f=e,u=setTimeout(g,t),c?v(e):a}function m(e){var r=e-l;return void 0===l||r>=t||r<0||s&&e-f>=i}function g(){var e=M();if(m(e))return b(e);u=setTimeout(g,function(e){var r=t-(e-l);return s?S(r,i-(e-f)):r}(e))}function b(e){return u=void 0,d&&n?v(e):(n=o=void 0,a)}function O(){var e=M(),r=m(e);if(n=arguments,o=this,l=e,r){if(void 0===u)return y(l);if(s)return u=setTimeout(g,t),v(l)}return void 0===u&&(u=setTimeout(g,t)),a}return t=P(t)||0,N(r)&&(c=!!r.leading,i=(s="maxWait"in r)?w(P(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,n=l=o=u=void 0},O.flush=function(){return void 0===u?a:b(M())},O}function N(t){var r=void 0===t?"undefined":e(v)(t);return!!t&&("object"==r||"function"==r)}function P(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(v)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==j.call(t)}(t))return NaN;if(N(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=N(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(y,"");var n=g.test(t);return n||b.test(t)?O(t.slice(2),n?2:8):m.test(t)?NaN:+t}d=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return N(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),I(e,t,{leading:n,maxWait:t,trailing:o})};var T=document.querySelector(".feedback-form");T.addEventListener("submit",(function(t){t.preventDefault();var r=new FormData(T),n=!0,o=!1,a=void 0;try{for(var u,l=r[Symbol.iterator]();!(n=(u=l.next()).done);n=!0){if(!e(i)(u.value,2)[1])return void alert("Please fill all the fields")}}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}console.log(JSON.parse(localStorage.getItem(A))),t.target.reset(),s.remove(A)})),T.addEventListener("input",d((function(e){var t=localStorage.getItem(A)?s.load(A):{},r=e.target,n=r.name,o=r.value;t[n]=o,s.save(A,t)}),250));var A="feedback-form-state";!function(){var e=s.load(A);for(var t in e)e.hasOwnProperty(t)&&(T.elements[t].value=e[t])}()}();
//# sourceMappingURL=03-feedback.581597ad.js.map
