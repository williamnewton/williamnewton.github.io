webpackJsonp([0xef47e37750d80000],{"./node_modules/css-loader/lib/css-base.js":function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,d;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(s(e))return!!s(t)&&(e=a.call(e),t=a.call(t),u(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var c=l(e),f=l(t)}catch(e){return!1}if(c.length!=f.length)return!1;for(c.sort(),f.sort(),i=c.length-1;i>=0;i--)if(c[i]!=f[i])return!1;for(i=c.length-1;i>=0;i--)if(d=c[i],!u(e[d],t[d],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,l=n("./node_modules/deep-equal/lib/keys.js"),s=n("./node_modules/deep-equal/lib/is_arguments.js"),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n("./node_modules/react/react.js"),c=r(d),f=n("./node_modules/prop-types/index.js"),p=r(f),m=n("./node_modules/react-side-effect/lib/index.js"),T=r(m),b=n("./node_modules/deep-equal/index.js"),g=r(b),h=n("./node_modules/react-helmet/lib/HelmetUtils.js"),y=n("./node_modules/react-helmet/lib/HelmetConstants.js"),E=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return l(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,g.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case y.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return s({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[s({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case y.TAG_NAMES.TITLE:return s({},o,(t={},t[r.type]=a,t.titleAttributes=s({},i),t));case y.TAG_NAMES.BODY:return s({},o,{bodyAttributes:s({},i)});case y.TAG_NAMES.HTML:return s({},o,{htmlAttributes:s({},i)})}return s({},o,(n={},n[r.type]=s({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=s({},t);return Object.keys(e).forEach(function(t){var r;n=s({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,l=o(i,["children"]),s=(0,h.convertReactPropstoHtmlAttributes)(l);switch(n.warnOnInvalidChildren(e,a),e.type){case y.TAG_NAMES.LINK:case y.TAG_NAMES.META:case y.TAG_NAMES.NOSCRIPT:case y.TAG_NAMES.SCRIPT:case y.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:s,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:s,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=s({},r);return n&&(i=this.mapChildrenToProps(n,i)),c.default.createElement(e,i)},u(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(c.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},S=(0,T.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(A),_=E(S);_.renderStatic=_.rewind,t.Helmet=_,t.default=_},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),l=r(a),s=n("./node_modules/object-assign/index.js"),u=r(s),d=n("./node_modules/react-helmet/lib/HelmetConstants.js"),c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=g(e,d.TAG_NAMES.TITLE),n=g(e,d.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=g(e,d.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return g(e,d.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},m=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},T=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[d.TAG_NAMES.BASE]}).map(function(e){return e[d.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},b=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var l=i[a],s=l.toLowerCase();t.indexOf(s)===-1||n===d.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===d.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),t.indexOf(l)===-1||l!==d.TAG_PROPERTIES.INNER_HTML&&l!==d.TAG_PROPERTIES.CSS_TEXT&&l!==d.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var l=i[a],s=(0,u.default)({},r[l],o[l]);r[l]=s}return e},[]).reverse()},g=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:T([d.TAG_PROPERTIES.HREF],e),bodyAttributes:m(d.ATTRIBUTE_NAMES.BODY,e),encode:g(e,d.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:m(d.ATTRIBUTE_NAMES.HTML,e),linkTags:b(d.TAG_NAMES.LINK,[d.TAG_PROPERTIES.REL,d.TAG_PROPERTIES.HREF],e),metaTags:b(d.TAG_NAMES.META,[d.TAG_PROPERTIES.NAME,d.TAG_PROPERTIES.CHARSET,d.TAG_PROPERTIES.HTTPEQUIV,d.TAG_PROPERTIES.PROPERTY,d.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:b(d.TAG_NAMES.NOSCRIPT,[d.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:b(d.TAG_NAMES.SCRIPT,[d.TAG_PROPERTIES.SRC,d.TAG_PROPERTIES.INNER_HTML],e),styleTags:b(d.TAG_NAMES.STYLE,[d.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:m(d.ATTRIBUTE_NAMES.TITLE,e)}},y=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),E=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,_=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,c=e.title,f=e.titleAttributes;S&&E(S),S=y(function(){v(d.TAG_NAMES.BODY,n),v(d.TAG_NAMES.HTML,r),w(c,f);var p={baseTag:x(d.TAG_NAMES.BASE,t),linkTags:x(d.TAG_NAMES.LINK,o),metaTags:x(d.TAG_NAMES.META,i),noscriptTags:x(d.TAG_NAMES.NOSCRIPT,a),scriptTags:x(d.TAG_NAMES.SCRIPT,s),styleTags:x(d.TAG_NAMES.STYLE,u)},m={},T={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(T[e]=p[e].oldTags)}),S=null,l(e,m,T)})},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=Array.isArray(e)?e.join(""):e),v(d.TAG_NAMES.TITLE,t)},v=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(d.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),l=0;l<a.length;l++){var s=a[l],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),o.indexOf(s)===-1&&o.push(s);var c=i.indexOf(s);c!==-1&&i.splice(c,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(d.HELMET_ATTRIBUTE):n.getAttribute(d.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(d.HELMET_ATTRIBUTE,a.join(","))}},x=function(e,t){var n=document.head||document.querySelector(d.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+d.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===d.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===d.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(d.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},O=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},P=function(e,t,n,r){var o=O(n);return o?"<"+e+" "+d.HELMET_ATTRIBUTE+'="true" '+o+">"+c(t,r)+"</"+e+">":"<"+e+" "+d.HELMET_ATTRIBUTE+'="true">'+c(t,r)+"</"+e+">"},R=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===d.TAG_PROPERTIES.INNER_HTML||e===d.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+c(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=d.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+d.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[d.REACT_TAG_MAP[n]||n]=e[n],t},t)},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[d.HTML_TAG_MAP[n]||n]=e[n],t},t)},I=function(e,t,n){var r,o=(r={key:t},r[d.HELMET_ATTRIBUTE]=!0,r),i=M(n,o);return[l.default.createElement(d.TAG_NAMES.TITLE,i,t)]},j=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[d.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=d.REACT_TAG_MAP[e]||e;if(n===d.TAG_PROPERTIES.INNER_HTML||n===d.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),l.default.createElement(e,o)})},k=function(e,t,n){switch(e){case d.TAG_NAMES.TITLE:return{toComponent:function(){return I(e,t.title,t.titleAttributes,n)},toString:function(){return P(e,t.title,t.titleAttributes,n)}};case d.ATTRIBUTE_NAMES.BODY:case d.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return j(e,t)},toString:function(){return R(e,t,n)}}}},N=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,c=e.title,f=void 0===c?"":c,p=e.titleAttributes;return{base:k(d.TAG_NAMES.BASE,t,r),bodyAttributes:k(d.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:k(d.ATTRIBUTE_NAMES.HTML,o,r),link:k(d.TAG_NAMES.LINK,i,r),meta:k(d.TAG_NAMES.META,a,r),noscript:k(d.TAG_NAMES.NOSCRIPT,l,r),script:k(d.TAG_NAMES.SCRIPT,s,r),style:k(d.TAG_NAMES.STYLE,u,r),title:k(d.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=C,t.handleClientStateChange=_,t.mapStateOnServer=N,t.reducePropsToState=h,t.requestIdleCallback=y,t.warn=A},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("./node_modules/react/react.js"),s=r(l),u=n("./node_modules/exenv/index.js"),d=r(u),c=n("./node_modules/shallowequal/index.js"),f=r(c);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function c(){m=e(p.map(function(e){return e.props})),T.canUseDOM?t(m):n&&(m=n(m))}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],m=void 0,T=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return m},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=m;return m=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,f.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),c()},t.prototype.componentDidUpdate=function(){c()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),c()},t.prototype.render=function(){return s.default.createElement(u,this.props)},t}(l.Component);return T.displayName="SideEffect("+r(u)+")",T.canUseDOM=d.default.canUseDOM,T}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var d=e[u],c=t[u];if(o=n?n.call(r,d,c,u):void 0,o===!1||void 0===o&&d!==c)return!1}return!0}},"./src/layouts/index.css":function(e,t,n){t=e.exports=n("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,'html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a,a:visited{color:#19a5e6}a:visited{text-decoration:none}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html{font:112.5%/1.45em georgia,serif;box-sizing:border-box;overflow-y:auto}*,:after,:before{box-sizing:inherit}body{color:rgba(0,0,0,.8);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:400;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:"kern","liga","clig","calt";-ms-font-feature-settings:"kern","liga","clig","calt";-webkit-font-feature-settings:"kern","liga","clig","calt";font-feature-settings:"kern","liga","clig","calt"}img{max-width:100%;margin:0 0 1.45rem;padding:0}h1{font-size:2.25rem}h1,h2{margin:0 0 1.45rem;padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:1.1}h2{font-size:1.62671rem}h3{font-size:1.38316rem}h3,h4{margin:0 0 1.45rem;padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:1.1}h4{font-size:1rem}h5{font-size:.85028rem}h5,h6{margin:0 0 1.45rem;padding:0;color:inherit;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:700;text-rendering:optimizeLegibility;line-height:1.1}h6{font-size:.78405rem}hgroup{margin:0 0 1.45rem;padding:0}ol,ul{margin:0 0 1.45rem 1.45rem;padding:0;list-style-position:outside;list-style-image:none}dd,dl{margin:0 0 1.45rem}dd,dl,p{padding:0}p{margin:0 0 1.25rem;font-size:1.2rem;line-height:1.62rem}figure{padding:0}figure,pre{margin:0 0 1.45rem}pre{padding:0;font-size:.85rem;line-height:1.42;background:rgba(0,0,0,.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem}table{font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%}fieldset,table{margin:0 0 1.45rem;padding:0}blockquote{margin:0 1.45rem 1.45rem;padding:0}form,iframe,noscript{margin:0 0 1.45rem;padding:0}hr,iframe{border:none}hr{margin:0 0 calc(1.45rem - 1px);padding:0;background:rgba(0,0,0,.2);height:1px}address{margin:0 0 1.45rem;padding:0}b,dt,strong,th{font-weight:700}li{margin-bottom:0.725rem}ol li,ul li{padding-left:0}li>ol,li>ul{margin-left:1.45rem;margin-bottom:0.725rem;margin-top:0.725rem}blockquote :last-child,li :last-child,p :last-child{margin-bottom:0}li>p{margin-bottom:0.725rem}code,kbd,samp{font-size:.85rem;line-height:1.45rem}abbr,abbr[title],acronym{border-bottom:1px dotted rgba(0,0,0,.5);cursor:help}abbr[title]{text-decoration:none}td,th,thead{text-align:left}td,th{border-bottom:1px solid rgba(0,0,0,.12);font-feature-settings:"tnum";-moz-font-feature-settings:"tnum";-ms-font-feature-settings:"tnum";-webkit-font-feature-settings:"tnum";padding:.725rem .96667rem calc(.725rem - 1px)}td:first-child,th:first-child{padding-left:0}td:last-child,th:last-child{padding-right:0}code,tt{background-color:rgba(0,0,0,.04);border-radius:3px;font-family:SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace;padding:0;padding-top:.2em;padding-bottom:.2em}pre code{background:none;line-height:1.42}code:after,code:before,tt:after,tt:before{letter-spacing:-.2em;content:" "}pre code:after,pre code:before,pre tt:after,pre tt:before{content:""}@media only screen and (max-width:480px){html{font-size:100%}}@media only screen and (min-width:620px){.header-diagonal{transform:rotate(33deg);position:fixed;margin:0 auto;top:0;padding:1.45rem 1.0875rem}}ul.home-list{list-style:none;float:left;width:158px;margin-left:0}ul.home-list li{list-style:none;font-size:16px;margin-bottom:6px}.header-diagonal a{color:#fff;text-decoration:none}@media only screen and (max-width:620px){.header-title{display:none}.main{position:absolute;top:230px;background:#fff}}@media only screen and (min-width:700px){.half-page{max-width:60%}}.half-page a{display:inline}.indent{margin-left:50px}.main{margin:0 auto;max-width:960px;padding:0 1rem 1.45rem;padding-top:35vh}@media only screen and (min-width:540px){.main{padding-top:15vh}}@media only screen and (max-width:540px){.main{padding-top:5vh;padding-left:1rem;padding-right:2rem}}@keyframes gradientAnim{0%{background-position:-5% 0}to{background-position:105% 0}}*{box-sizing:border-box}@keyframes triangleBounce{0%{transform:scale(1)}10%{transform:scale(1.18)}50%{transform:scale(.001) rotate(180deg)}75%{transform:scale(.65) rotate(270deg)}90%{transform:scale(.001) rotate(1turn)}95%{transform:scale(1.2)}to{transform:scale(1)}}.triangle{display:block;margin:0 auto 20px;position:relative;left:10px;width:0;height:0;border-right:60px solid transparent;border-bottom:103.92px solid #fff;border-left:60px solid transparent;margin-bottom:20px;transition:2s ease}@media only screen and (min-width:620px){.triangle:hover{animation-name:triangleBounce;animation-iteration-count:infinite;animation-delay:0;animation-duration:4s;animation-timing-function:ease}}@media only screen and (max-width:620px){.triangle{left:0;animation-name:triangleBounce;animation-iteration-count:infinite;animation-delay:0;animation-duration:8s;animation-timing-function:ease}.triangle:hover{animation:none}}.rainbow{height:250px;width:160%;margin:0;padding:0;display:flex;justify-content:center;align-items:center;background-color:#f23064;background-image:-moz-linear-gradient(left,#f23064 0,#ad2ee8 12.5%,#6728d3 25%,#2acbe0 37.5%,#67f230 50%,#67f230 62.5%,#e2e22b 75%,#ce8027 87.5%,#f23064 100%);background-image:-webkit-linear-gradient(left,#f23064,#ad2ee8 12.5%,#6728d3 25%,#2acbe0 37.5%,#67f230 50%,#67f230 62.5%,#e2e22b 85.5%,#ce8027 87.5%,#f23064);background-image:linear-gradient(90deg,#f23064 0,#ad2ee8 12.5%,#6728d3 25%,#2acbe0 37.5%,#67f230 50%,#67f230 62.5%,#e2e22b 75%,#ce8027 87.5%,#f23064);background-repeat:no-repeat;background-size:2000% 400%;background-position:0 0;animation-name:gradientAnim;animation-iteration-count:infinite;animation-delay:0;animation-duration:60s;animation-timing-function:linear}@media only screen and (max-width:620px){.rainbow{width:100%;height:300px}}.links-section{margin-top:45px;padding-top:30px;border-top:2px solid #ddd}.links-section p{font-size:16px}.img-full{width:100%;height:auto;margin:30px auto}.bio-quote{color:#333;font-size:16px;font-style:italic;font-family:Georgia,serif}',""])},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/will.newton/Projects/gatsbysite/willaa2020/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/will.newton/Projects/gatsbysite/willaa2020/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/will.newton/Projects/gatsbysite/willaa2020/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/will.newton/Projects/gatsbysite/willaa2020/node_modules/babel-preset-env/lib/index.js","/Users/will.newton/Projects/gatsbysite/willaa2020/node_modules/babel-preset-stage-0/lib/index.js","/Users/will.newton/Projects/gatsbysite/willaa2020/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react/react.js"),i=r(o),a=n("./node_modules/prop-types/index.js"),l=r(a),s=n("./node_modules/gatsby-link/index.js"),u=(r(s),n("./node_modules/react-helmet/lib/Helmet.js")),d=r(u);n("./src/layouts/index.css");var c=function(){return i.default.createElement("div",{className:"header-diagonal rainbow"},i.default.createElement("div",{style:{margin:"0 auto",padding:"1.45rem 1.0875rem"}}))},f=function(e){var t=e.children;return i.default.createElement("div",null,i.default.createElement(d.default,{title:"William Newton",meta:[{name:"description",content:"The work, writing, and art of William Newton"},{name:"keywords",content:"design, art, tech"}]}),i.default.createElement(c,null),i.default.createElement("div",{className:"main"},t()))};f.propTypes={children:l.default.func},t.default=f,e.exports=t.default}});
//# sourceMappingURL=layout-component---index-3178dcbacfc3265b54db.js.map