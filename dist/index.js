(function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }

    var e=[],t$1=[];function n$1(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t$1[u]={}),a=t$1[u]&&t$1[u][s]?t$1[u][s]:t$1[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

    var css = "* {\n  box-sizing: border-box !important;\n}\n*:focus {\n  outline: 0;\n}\n*:before,\n*:after {\n  box-sizing: border-box !important;\n}\nbody,\nhtml {\n  background-color: #151820;\n  color: #bdc3c7;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n#root {\n  font-family: \"Roboto\", sans-serif;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n#root > * {\n  width: 0;\n  flex-grow: 1;\n}\nbody {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  background-color: #151820;\n}\n::-webkit-scrollbar-button {\n  display: none;\n}\n::-webkit-scrollbar-track-piece {\n  background-color: #252830;\n  border: 2px solid #151820;\n  border-radius: 100px;\n}\n::-webkit-scrollbar-thumb {\n  height: 50px;\n  background-color: #454850;\n  border: 2px solid #151820;\n  border-radius: 100px;\n}\n#root > .error {\n  position: absolute;\n  width: 50px;\n  flex: 0 0 0;\n  height: 50px;\n  right: calc(50% + 15px);\n  bottom: 0;\n  color: #c0392b;\n}\n";
    n$1(css,{});

    var react = {exports: {}};

    var react_production_min = {};

    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;

    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}

    	return Object(val);
    }

    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}

    		// Detect buggy property enumeration order in older V8 versions.

    		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
    		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}

    		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}

    		return true;
    	} catch (err) {
    		// We don't expect any of the above to throw, but better to be safe.
    		return false;
    	}
    }

    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;

    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);

    		for (var key in from) {
    			if (hasOwnProperty$2.call(from, key)) {
    				to[key] = from[key];
    			}
    		}

    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}

    	return to;
    };

    /** @license React v17.0.2
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l=objectAssign,n=60103,p=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q=60109,r$1=60110,t=60112;react_production_min.Suspense=60113;var u=60115,v=60116;
    if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");react_production_min.Fragment=w("react.fragment");react_production_min.StrictMode=w("react.strict_mode");react_production_min.Profiler=w("react.profiler");q=w("react.provider");r$1=w("react.context");t=w("react.forward_ref");react_production_min.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
    function y$1(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
    var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B$1={};function C(a,b,c){this.props=a;this.context=b;this.refs=B$1;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
    function D$1(){}D$1.prototype=C.prototype;function E$1(a,b,c){this.props=a;this.context=b;this.refs=B$1;this.updater=c||A;}var F$1=E$1.prototype=new D$1;F$1.constructor=E$1;l(F$1,C.prototype);F$1.isPureReactComponent=!0;var G$1={current:null},H$1=Object.prototype.hasOwnProperty,I$1={key:!0,ref:!0,__self:!0,__source:!0};
    function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H$1.call(b,e)&&!I$1.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G$1.current}}
    function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M$1=/\/+/g;function N$1(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
    function O$1(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N$1(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M$1,"$&/")+"/"),O$1(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M$1,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
    0;g<a.length;g++){k=a[g];var f=e+N$1(k,g);h+=O$1(k,b,c,f,d);}else if(f=y$1(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N$1(k,g++),h+=O$1(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P$1(a,b,c){if(null==a)return a;var e=[],d=0;O$1(a,e,"","",function(a){return b.call(c,a,d++)});return e}
    function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R$1={current:null};function S$1(){var a=R$1.current;if(null===a)throw Error(z(321));return a}var T$1={ReactCurrentDispatcher:R$1,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G$1,IsSomeRendererActing:{current:!1},assign:l};
    react_production_min.Children={map:P$1,forEach:function(a,b,c){P$1(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P$1(a,function(){b++;});return b},toArray:function(a){return P$1(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};react_production_min.Component=C;react_production_min.PureComponent=E$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T$1;
    react_production_min.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G$1.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H$1.call(b,f)&&!I$1.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
    key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r$1,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};react_production_min.forwardRef=function(a){return {$$typeof:t,render:a}};react_production_min.isValidElement=L;
    react_production_min.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};react_production_min.useCallback=function(a,b){return S$1().useCallback(a,b)};react_production_min.useContext=function(a,b){return S$1().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S$1().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S$1().useImperativeHandle(a,b,c)};
    react_production_min.useLayoutEffect=function(a,b){return S$1().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S$1().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S$1().useReducer(a,b,c)};react_production_min.useRef=function(a){return S$1().useRef(a)};react_production_min.useState=function(a){return S$1().useState(a)};react_production_min.version="17.0.2";

    {
      react.exports = react_production_min;
    }

    var React = react.exports;

    var reactDom = {exports: {}};

    var reactDom_production_min = {};

    var scheduler = {exports: {}};

    var scheduler_production_min = {};

    /** @license React v0.20.2
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    (function (exports) {
    var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}
    if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null;}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0));};g=function(a,b){u=setTimeout(a,b);};h=function(){clearTimeout(u);};exports.unstable_shouldYield=function(){return !1};k=exports.unstable_forceFrameRate=function(){};}else {var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
    window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
    E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5;};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null);}catch(b){throw G.postMessage(null),b;}}else A=!1;};f=function(a){B=a;A||(A=!0,G.postMessage(null));};g=function(a,b){C=
    x(function(){a(exports.unstable_now());},b);};h=function(){y(C);C=-1;};}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
    function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
    function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M);}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else {var b=J(M);null!==b&&g(U,b.startTime-a);}}
    function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b);}else K(L);O=J(L);}if(null!==O)var m=!0;else {var n=J(M);null!==n&&g(U,n.startTime-b);m=!1;}return m}finally{O=null,P=c,Q=!1;}}var W=k;exports.unstable_IdlePriority=5;
    exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V));};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
    exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P;}var c=P;P=b;try{return a()}finally{P=c;}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=P;P=a;try{return b()}finally{P=c;}};
    exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
    exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c;}}};
    }(scheduler_production_min));

    {
      scheduler.exports = scheduler_production_min;
    }

    /** @license React v17.0.2
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var aa=react.exports,m=objectAssign,r=scheduler.exports;function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b);}
    function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a]);}
    var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
    ja={},ka={};function la(a){if(ia.call(ka,a))return !0;if(ia.call(ja,a))return !1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return !1}function ma(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
    function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var D={};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1);});
    ["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1);});
    ["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1);});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
    pa);D[b]=new B(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1);});
    D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0);});
    function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
    var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
    if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden");}
    var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return "function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||"";}return "\n"+Ma+a}var Oa=!1;
    function Pa(a,b){if(!a||Oa)return "";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(k){var d=k;}Reflect.construct(a,[],b);}else {try{b.call();}catch(k){d=k;}a.call(b.prototype);}else {try{throw Error();}catch(k){d=k;}a();}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
    f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return "\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Na(a):""}
    function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return ""}}
    function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return "Fragment";case ta:return "Portal";case xa:return "Profiler";case wa:return "StrictMode";case Ba:return "Suspense";case Ca:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return (a.displayName||"Context")+".Consumer";case ya:return (a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
    return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
    function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
    null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
    function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1);}
    function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
    function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
    function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
    function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
    function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
    function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
    function lb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
    var nb,ob=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else {nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
    function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
    var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
    floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a];});});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
    function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
    function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
    function wb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
    function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb();}
    function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb();}}
    function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
    typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0;}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb);}catch(a){Pb=!1;}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(n){this.onError(n);}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a;}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments);}
    function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null;}else throw Error(y(198));Ub||(Ub=!0,Vb=l);}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
    function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling;}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
    c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
    function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return !0;b=b.return;}return !1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function rc(a,b,c,d,e){return {blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId);}}
    function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
    function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return !1}
    function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c);});});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
    function xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift();}return !0}function zc(a,b,c){xc(a)&&c.delete(b);}
    function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift();}null===a.blockedOn&&jc.shift();}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc);}
    function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)));}
    function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift();}
    function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
    fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
    var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
    "lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d]);}}var Qc=r.unstable_now;Qc();var F=8;
    function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
    F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
    function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F));}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e;}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
    function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
    function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c;}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d);}finally{(Kb=f)||Mb();}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d));}
    function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else {var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else {if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d);}jd(a,b,d,null,c);}}}}
    function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else {var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null;}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null;}else f!==e&&(e=null);}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
    function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
    function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
    (a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
    var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
    a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
    Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
    119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
    var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
    a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
    deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
    function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
    function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
    var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
    function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else {Kb=!0;try{Gb(a,b);}finally{Kb=!1,Mb();}}}}
    function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
    function Je(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return !1;return !0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
    function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Ke(c);}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
    function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
    var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
    function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
    Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
    ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
    da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
    function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null;}
    function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k;}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
    function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d));}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null);}));}
    function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d;}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h));}
    function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd;}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
    function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Nb(function(){var d=f,e=xb(c),g=[];
    a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
    Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
    t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return;}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
    x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null;}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
    gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u);}w=null;}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else {J=De;var K=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
    K.controlled&&"number"===h.type&&bb(h,"number",h.value);}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
    case "compositionupdate":L="onCompositionUpdate";break b}L=void 0;}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
    "beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q);}se(g,b);});}function ef(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return;}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
    function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}
    function nf(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""));}
    function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var tf=0;function uf(a){return {$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
    function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[wf]||a[ff];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
    function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return {current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--);}function I(a,b){Af++;zf[Af]=a.current;a.current=b;}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
    function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M);}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c);}
    function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return !0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c);}
    var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
    function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a);}jg();}
    function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null;}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1;}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null;}
    function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b;}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return;}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null);}
    function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null};}else og=og.next=b;}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null};}
    function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function zg(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}
    function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
    b;c.lastBaseUpdate=b;}
    function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k);}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
    next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0;}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f));}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
    f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null;}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A;}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d);}}}var Fg=(new aa.Component).refs;
    function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
    var Kg={isMounted:function(a){return (a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d);},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
    b);Ag(a,e);Jg(a,d,c);}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
    function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
    function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null);}
    function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
    (b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4);}var Pg=Array.isArray;
    function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode;}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
    function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
    function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
    c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
    Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
    a.mode,c,null),b.return=a,b;Rg(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c);}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
    null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d);}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
    n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q;}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
    h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q;}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
    u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
    d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling;}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h);}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=
    Wg(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
    function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a);}H(ah);I(ah,b);}function fh(){H(ah);H(bh);H(ch);}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c));}function hh(a){bh.current===a&&(H(ah),H(bh));}var P=Bf(0);
    function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var jh=null,kh=null,lh=!1;
    function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
    function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c);}jh=a;kh=rf(b.firstChild);}else a.flags=a.flags&-1025|2,lh=!1,jh=a;}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a;}
    function rh(a){if(a!==jh)return !1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}kh=null;}}else kh=jh?rf(a.stateNode.nextSibling):null;return !0}
    function sh(){kh=jh=null;lh=!1;}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0;}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
    function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e);}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
    function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null;}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else {if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a;}return T}function Jh(a,b){return "function"===typeof b?b(a):b}
    function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else {var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
    eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l;}k=k.next;}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,c.dispatch]}
    function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}
    function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
    function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
    e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v;}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes;}catch(q){c(function(){throw q;});}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
    function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return [b.memoizedState,a]}
    function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d);}
    function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d);}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}
    function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
    function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0);});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b();}finally{wh.transition=c;}});}
    function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else {if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d);}}
    var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
    b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return [d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
    wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return [a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36));},
    void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return [Th().current,
    a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a);}finally{wh.transition=b;}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return [Th().current,
    a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d);}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
    function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
    function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
    function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
    function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128;}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
    function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b);}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
    "function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
    typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1);}else {g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
    "function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
    x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
    h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1);}return qi(a,b,c,d,f,e)}
    function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo);}
    var si={dehydrated:null,retryLane:0};
    function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
    b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
    {baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
    function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
    function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b);}
    function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f);}
    function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else {if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}I(P,d);if(0===(b.mode&2))b.memoizedState=
    null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}
    function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}return null}var Bi,Ci,Di,Ei;
    Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Ci=function(){};
    Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf);}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
    l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
    (c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",
    c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4);};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
    function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else {if(!d){if(null===
    b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
    {wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d);}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
    jf);}d=a;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
    e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
    gb(a,d);G("invalid",a);break;default:e=d;}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g));}switch(c){case "input":Va(a);cb(a,d,!1);
    break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf);}mf(c,d)&&(b.flags|=4);}null!==b.ref&&(b.flags|=128);}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
    c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d);}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else {if(0===V||3===V)V=
    4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W);}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else {if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
    null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
    f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling;}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432);}else {if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
    64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g);}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
    function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
    function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b);};return c}
    function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
    function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Wi(a,c);}else b.current=null;}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
    function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d();}a=a.next;}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d;}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
    b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Eg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
    return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
    function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else {d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
    a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
    function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b);}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else {d=b;try{e();}catch(f){Wi(d,f);}}c=c.next;}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount();}catch(f){Wi(b,
    f);}break;case 5:Vi(b);break;case 4:cj(a,b);}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null;}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
    function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return;}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
    c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b);}
    function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling;}
    function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling;}
    function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return;}d=!0;}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else {if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return;}k.sibling.return=k.return;k=k.sibling;}f?(g=e,h=c.stateNode,
    8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode);}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1);}c.sibling.return=c.return;c=c.sibling;}}
    function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
    2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b);}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
    b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
    function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500;}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
    function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
    function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a;}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
    function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1;}}else l<=b&&(a.expiredLanes|=k);g&=~k;}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else {if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c);}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
    c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c;}}
    function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h);}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
    a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f;}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
    c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d;}}
    function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b));}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
    function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O());});}ig();}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}}function ni(a,b){I(rj,qj);qj|=b;tj|=b;}function Ki(){qj=rj.current;H(rj);}
    function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki();}c=c.return;}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0;}
    function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}yh=!1;}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
    (h.updateQueue=null,h.memoizedState=null);}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else {var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0;}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u;}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else {var t=zg(-1,1);t.tag=2;Ag(h,t);}h.lanes|=1;break a}k=
    void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v);}p.flags|=4096;p.lanes=b;break a}p=p.return;}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.");}5!==V&&(V=2);k=Mi(k,h);p=
    g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return;}while(null!==p)}Zj(c);}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
    function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e);}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y);}function Rj(){for(;null!==Y&&!Qf();)bk(Y);}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null;}
    function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d;}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
    a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b));}else {c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048);}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===V&&(V=5);}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
    function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l;}null!==
    Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType;}catch(va){h=null;
    break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u;}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode;}w=u;}h=-1===A||-1===p?null:{start:A,end:p};}else h=null;h=h||{start:0,end:0};}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek();}catch(va){if(null===
    Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null);}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
    J&&dj(J);}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
    g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
    0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top;}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L;}"function"===typeof Q?Q(q):Q.current=q;}}Z=Z.nextEffect;}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect;}while(null!==Z);Z=null;$f();X=e;}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
    Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64));}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
    function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect;}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return !1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}));}
    function fk(){if(null===yj)return !1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h();}catch(k){if(null===f)throw Error(y(330));Wi(f,k);}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
    null,h.stateNode=null),h=a;X=b;ig();return !0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b));}
    function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a);}catch(f){}break}}c=c.return;}}
    function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b);}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c));}var ck;
    ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else {ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
    b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
    typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c);}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
    a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
    d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else {e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling;}else fi(a,b,d,c),sh();b=b.child;}return b;case 5:return gh(b),null===a&&
    ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
    c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
    k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}fi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
    f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
    };function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null;}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return !(!a||!a.isReactComponent)}
    function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
    function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
    c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
    function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
    typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
    function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
    function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null;}
    function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
    function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h;}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
    d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b);}function pk(){return null}
    function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e);}this._internalRoot=c;}
    qk.prototype.render=function(a){lk(a,this._internalRoot,null,null);};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null;});};function rk(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
    function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
    function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a);};}lk(b,g,a,e);}else {f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a);};}Xj(function(){lk(b,g,a,e);});}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4);}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864);}};
    gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c);}};hc=function(a,b){return b()};
    yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Wj;
    Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig());}};Ib=function(){0===(X&49)&&(Vj(),Oj());};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig());}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"};
    var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
    pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;reactDom_production_min.createPortal=uk;
    reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig();}};reactDom_production_min.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
    reactDom_production_min.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Wj;reactDom_production_min.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
    reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};reactDom_production_min.version="17.0.2";

    function checkDCE() {
      /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
      if (
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
      ) {
        return;
      }
      try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
      } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
      }
    }

    {
      // DCE check should happen before ReactDOM bundle executes so that
      // DevTools can report bad minification during injection.
      checkDCE();
      reactDom.exports = reactDom_production_min;
    }

    var ReactDOM = reactDom.exports;

    function _defineProperty$1(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function ownKeys$1(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys$1(Object(source), true).forEach(function (key) {
            _defineProperty$1(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$1(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArrayLimit(arr, i) {
      if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
      }

      return keys;
    }

    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};

        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }

      return target;
    }

    function compose$1() {
      for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }

      return function (x) {
        return fns.reduceRight(function (y, f) {
          return f(y);
        }, x);
      };
    }

    function curry$1(fn) {
      return function curried() {
        var _this = this;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return args.length >= fn.length ? fn.apply(this, args) : function () {
          for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            nextArgs[_key3] = arguments[_key3];
          }

          return curried.apply(_this, [].concat(args, nextArgs));
        };
      };
    }

    function isObject$2(value) {
      return {}.toString.call(value).includes('Object');
    }

    function isEmpty(obj) {
      return !Object.keys(obj).length;
    }

    function isFunction$1(value) {
      return typeof value === 'function';
    }

    function hasOwnProperty$1(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }

    function validateChanges(initial, changes) {
      if (!isObject$2(changes)) errorHandler$1('changeType');
      if (Object.keys(changes).some(function (field) {
        return !hasOwnProperty$1(initial, field);
      })) errorHandler$1('changeField');
      return changes;
    }

    function validateSelector(selector) {
      if (!isFunction$1(selector)) errorHandler$1('selectorType');
    }

    function validateHandler(handler) {
      if (!(isFunction$1(handler) || isObject$2(handler))) errorHandler$1('handlerType');
      if (isObject$2(handler) && Object.values(handler).some(function (_handler) {
        return !isFunction$1(_handler);
      })) errorHandler$1('handlersType');
    }

    function validateInitial(initial) {
      if (!initial) errorHandler$1('initialIsRequired');
      if (!isObject$2(initial)) errorHandler$1('initialType');
      if (isEmpty(initial)) errorHandler$1('initialContent');
    }

    function throwError$1(errorMessages, type) {
      throw new Error(errorMessages[type] || errorMessages["default"]);
    }

    var errorMessages$1 = {
      initialIsRequired: 'initial state is required',
      initialType: 'initial state should be an object',
      initialContent: 'initial state shouldn\'t be an empty object',
      handlerType: 'handler should be an object or a function',
      handlersType: 'all handlers should be a functions',
      selectorType: 'selector should be a function',
      changeType: 'provided value of changes should be an object',
      changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
      "default": 'an unknown error accured in `state-local` package'
    };
    var errorHandler$1 = curry$1(throwError$1)(errorMessages$1);
    var validators$1 = {
      changes: validateChanges,
      selector: validateSelector,
      handler: validateHandler,
      initial: validateInitial
    };

    function create(initial) {
      var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      validators$1.initial(initial);
      validators$1.handler(handler);
      var state = {
        current: initial
      };
      var didUpdate = curry$1(didStateUpdate)(state, handler);
      var update = curry$1(updateState)(state);
      var validate = curry$1(validators$1.changes)(initial);
      var getChanges = curry$1(extractChanges)(state);

      function getState() {
        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
          return state;
        };
        validators$1.selector(selector);
        return selector(state.current);
      }

      function setState(causedChanges) {
        compose$1(didUpdate, update, validate, getChanges)(causedChanges);
      }

      return [getState, setState];
    }

    function extractChanges(state, causedChanges) {
      return isFunction$1(causedChanges) ? causedChanges(state.current) : causedChanges;
    }

    function updateState(state, changes) {
      state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
      return changes;
    }

    function didStateUpdate(state, handler, changes) {
      isFunction$1(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
        var _handler$field;

        return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
      });
      return changes;
    }

    var index$1 = {
      create: create
    };

    var config$1 = {
      paths: {
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.25.2/min/vs'
      }
    };

    function curry(fn) {
      return function curried() {
        var _this = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return args.length >= fn.length ? fn.apply(this, args) : function () {
          for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            nextArgs[_key2] = arguments[_key2];
          }

          return curried.apply(_this, [].concat(args, nextArgs));
        };
      };
    }

    function isObject$1(value) {
      return {}.toString.call(value).includes('Object');
    }

    /**
     * validates the configuration object and informs about deprecation
     * @param {Object} config - the configuration object 
     * @return {Object} config - the validated configuration object
     */

    function validateConfig(config) {
      if (!config) errorHandler('configIsRequired');
      if (!isObject$1(config)) errorHandler('configType');

      if (config.urls) {
        informAboutDeprecation();
        return {
          paths: {
            vs: config.urls.monacoBase
          }
        };
      }

      return config;
    }
    /**
     * logs deprecation message
     */


    function informAboutDeprecation() {
      console.warn(errorMessages.deprecation);
    }

    function throwError(errorMessages, type) {
      throw new Error(errorMessages[type] || errorMessages["default"]);
    }

    var errorMessages = {
      configIsRequired: 'the configuration object is required',
      configType: 'the configuration object should be an object',
      "default": 'an unknown error accured in `@monaco-editor/loader` package',
      deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
    };
    var errorHandler = curry(throwError)(errorMessages);
    var validators = {
      config: validateConfig
    };

    var compose = function compose() {
      for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
      }

      return function (x) {
        return fns.reduceRight(function (y, f) {
          return f(y);
        }, x);
      };
    };

    function merge(target, source) {
      Object.keys(source).forEach(function (key) {
        if (source[key] instanceof Object) {
          if (target[key]) {
            Object.assign(source[key], merge(target[key], source[key]));
          }
        }
      });
      return _objectSpread2$1(_objectSpread2$1({}, target), source);
    }

    // The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
    var CANCELATION_MESSAGE = {
      type: 'cancelation',
      msg: 'operation is manually canceled'
    };

    function makeCancelable(promise) {
      var hasCanceled_ = false;
      var wrappedPromise = new Promise(function (resolve, reject) {
        promise.then(function (val) {
          return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
        });
        promise["catch"](reject);
      });
      return wrappedPromise.cancel = function () {
        return hasCanceled_ = true;
      }, wrappedPromise;
    }

    /** the local state of the module */

    var _state$create = index$1.create({
      config: config$1,
      isInitialized: false,
      resolve: null,
      reject: null,
      monaco: null
    }),
        _state$create2 = _slicedToArray(_state$create, 2),
        getState = _state$create2[0],
        setState = _state$create2[1];
    /**
     * set the loader configuration
     * @param {Object} config - the configuration object
     */


    function config(config) {
      setState(function (state) {
        return {
          config: merge(state.config, validators.config(config))
        };
      });
    }
    /**
     * handles the initialization of the monaco-editor
     * @return {Promise} - returns an instance of monaco (with a cancelable promise)
     */


    function init() {
      var state = getState(function (_ref) {
        var isInitialized = _ref.isInitialized;
        return {
          isInitialized: isInitialized
        };
      });

      if (!state.isInitialized) {
        if (window.monaco && window.monaco.editor) {
          storeMonacoInstance(window.monaco);
          return makeCancelable(Promise.resolve(window.monaco));
        }

        compose(injectScripts, getMonacoLoaderScript)(configureLoader);
        setState({
          isInitialized: true
        });
      }

      return makeCancelable(wrapperPromise);
    }
    /**
     * injects provided scripts into the document.body
     * @param {Object} script - an HTML script element
     * @return {Object} - the injected HTML script element
     */


    function injectScripts(script) {
      return document.body.appendChild(script);
    }
    /**
     * creates an HTML script element with/without provided src
     * @param {string} [src] - the source path of the script
     * @return {Object} - the created HTML script element
     */


    function createScript(src) {
      var script = document.createElement('script');
      return src && (script.src = src), script;
    }
    /**
     * creates an HTML script element with the monaco loader src
     * @return {Object} - the created HTML script element
     */


    function getMonacoLoaderScript(configureLoader) {
      var state = getState(function (_ref2) {
        var config = _ref2.config,
            reject = _ref2.reject;
        return {
          config: config,
          reject: reject
        };
      });
      var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

      loaderScript.onload = function () {
        return configureLoader();
      };

      loaderScript.onerror = state.reject;
      return loaderScript;
    }
    /**
     * configures the monaco loader
     */


    function configureLoader() {
      var state = getState(function (_ref3) {
        var config = _ref3.config,
            resolve = _ref3.resolve,
            reject = _ref3.reject;
        return {
          config: config,
          resolve: resolve,
          reject: reject
        };
      });
      var require = window.require;

      require.config(state.config);

      require(['vs/editor/editor.main'], function (monaco) {
        storeMonacoInstance(monaco);
        state.resolve(monaco);
      }, function (error) {
        state.reject(error);
      });
    }
    /**
     * store monaco instance in local state
     */


    function storeMonacoInstance(monaco) {
      if (!getState().monaco) {
        setState({
          monaco: monaco
        });
      }
    }
    /**
     * internal helper function
     * extracts stored monaco instance
     * @return {Object|null} - the monaco instance
     */


    function __getMonacoInstance() {
      return getState(function (_ref4) {
        var monaco = _ref4.monaco;
        return monaco;
      });
    }

    var wrapperPromise = new Promise(function (resolve, reject) {
      return setState({
        resolve: resolve,
        reject: reject
      });
    });
    var loader = {
      config: config,
      init: init,
      __getMonacoInstance: __getMonacoInstance
    };

    var propTypes = {exports: {}};

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var ReactPropTypesSecret = ReactPropTypesSecret_1;

    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;

    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,

        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,

        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };

      ReactPropTypes.PropTypes = ReactPropTypes;

      return ReactPropTypes;
    };

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      propTypes.exports = factoryWithThrowingShims();
    }

    var PropTypes = propTypes.exports;

    const loadingStyles = {
      display: 'flex',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    };

    function Loading({
      content
    }) {
      return /*#__PURE__*/React.createElement("div", {
        style: loadingStyles
      }, content);
    }

    const styles = {
      wrapper: {
        display: 'flex',
        position: 'relative',
        textAlign: 'initial'
      },
      fullWidth: {
        width: '100%'
      },
      hide: {
        display: 'none'
      }
    };

    // one of the reasons why we use a separate prop for passing ref instead of using forwardref

    function MonacoContainer$1({
      width,
      height,
      isEditorReady,
      loading,
      _ref,
      className,
      wrapperClassName
    }) {
      return /*#__PURE__*/React.createElement("section", {
        style: { ...styles.wrapper,
          width,
          height
        },
        className: wrapperClassName
      }, !isEditorReady && /*#__PURE__*/React.createElement(Loading, {
        content: loading
      }), /*#__PURE__*/React.createElement("div", {
        ref: _ref,
        style: { ...styles.fullWidth,
          ...(!isEditorReady && styles.hide)
        },
        className: className
      }));
    }

    MonacoContainer$1.propTypes = {
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
      isEditorReady: PropTypes.bool.isRequired,
      className: PropTypes.string,
      wrapperClassName: PropTypes.string
    };

    var MonacoContainer = /*#__PURE__*/react.exports.memo(MonacoContainer$1);

    function useMount(effect) {
      react.exports.useEffect(effect, []);
    }

    function useUpdate(effect, deps, applyChanges = true) {
      const isInitialMount = react.exports.useRef(true);
      react.exports.useEffect(isInitialMount.current || !applyChanges ? () => {
        isInitialMount.current = false;
      } : effect, deps);
    }

    function noop() {}

    function getOrCreateModel(monaco, value, language, path) {
      return getModel(monaco, path) || createModel(monaco, value, language, path);
    }

    function getModel(monaco, path) {
      return monaco.editor.getModel(crateModelUri(monaco, path));
    }

    function createModel(monaco, value, language, path) {
      return monaco.editor.createModel(value, language, path && crateModelUri(monaco, path));
    }

    function crateModelUri(monaco, path) {
      return monaco.Uri.parse(path);
    }

    function isUndefined$1(input) {
      return input === undefined;
    }

    ({
      original: PropTypes.string,
      modified: PropTypes.string,
      language: PropTypes.string,
      originalLanguage: PropTypes.string,
      modifiedLanguage: PropTypes.string,

      /* === */
      originalModelPath: PropTypes.string,
      modifiedModelPath: PropTypes.string,
      keepCurrentOriginalModel: PropTypes.bool,
      keepCurrentModifiedModel: PropTypes.bool,
      theme: PropTypes.string,
      loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      options: PropTypes.object,

      /* === */
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      className: PropTypes.string,
      wrapperClassName: PropTypes.string,

      /* === */
      beforeMount: PropTypes.func,
      onMount: PropTypes.func
    });

    function usePrevious(value) {
      const ref = react.exports.useRef();
      react.exports.useEffect(() => {
        ref.current = value;
      }, [value]);
      return ref.current;
    }

    const [getModelMarkersSetter, setModelMarkersSetter] = index$1.create({
      backup: null
    });
    const viewStates = new Map();

    function Editor$1({
      defaultValue,
      defaultLanguage,
      defaultPath,
      value,
      language,
      path,

      /* === */
      theme,
      line,
      loading,
      options,
      overrideServices,
      saveViewState,
      keepCurrentModel,

      /* === */
      width,
      height,
      className,
      wrapperClassName,

      /* === */
      beforeMount,
      onMount,
      onChange,
      onValidate
    }) {
      const [isEditorReady, setIsEditorReady] = react.exports.useState(false);
      const [isMonacoMounting, setIsMonacoMounting] = react.exports.useState(true);
      const monacoRef = react.exports.useRef(null);
      const editorRef = react.exports.useRef(null);
      const containerRef = react.exports.useRef(null);
      const onMountRef = react.exports.useRef(onMount);
      const beforeMountRef = react.exports.useRef(beforeMount);
      const subscriptionRef = react.exports.useRef(null);
      const valueRef = react.exports.useRef(value);
      const previousPath = usePrevious(path);
      useMount(() => {
        const cancelable = loader.init();
        cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
        return () => editorRef.current ? disposeEditor() : cancelable.cancel();
      });
      useUpdate(() => {
        const model = getOrCreateModel(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

        if (model !== editorRef.current.getModel()) {
          saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
          editorRef.current.setModel(model);
          saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
        }
      }, [path], isEditorReady);
      useUpdate(() => {
        editorRef.current.updateOptions(options);
      }, [options], isEditorReady);
      useUpdate(() => {
        if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
          editorRef.current.setValue(value);
        } else {
          if (value !== editorRef.current.getValue()) {
            editorRef.current.executeEdits('', [{
              range: editorRef.current.getModel().getFullModelRange(),
              text: value,
              forceMoveMarkers: true
            }]);
            editorRef.current.pushUndoStop();
          }
        }
      }, [value], isEditorReady);
      useUpdate(() => {
        monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
      }, [language], isEditorReady);
      useUpdate(() => {
        // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
        if (!isUndefined$1(line)) {
          editorRef.current.revealLine(line);
        }
      }, [line], isEditorReady);
      useUpdate(() => {
        monacoRef.current.editor.setTheme(theme);
      }, [theme], isEditorReady);
      const createEditor = react.exports.useCallback(() => {
        beforeMountRef.current(monacoRef.current);
        const autoCreatedModelPath = path || defaultPath;
        const defaultModel = getOrCreateModel(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
        editorRef.current = monacoRef.current.editor.create(containerRef.current, {
          model: defaultModel,
          automaticLayout: true,
          ...options
        }, overrideServices);
        saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
        monacoRef.current.editor.setTheme(theme);

        if (!getModelMarkersSetter().backup) {
          setModelMarkersSetter({
            backup: monacoRef.current.editor.setModelMarkers
          });
        }

        setIsEditorReady(true);
      }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
      react.exports.useEffect(() => {
        if (isEditorReady) {
          onMountRef.current(editorRef.current, monacoRef.current);
        }
      }, [isEditorReady]);
      react.exports.useEffect(() => {
        !isMonacoMounting && !isEditorReady && createEditor();
      }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
      // to avoid unnecessary updates (attach - dispose listener) in subscription

      valueRef.current = value;
      react.exports.useEffect(() => {
        if (isEditorReady && onChange) {
          var _subscriptionRef$curr, _editorRef$current;

          (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
          subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
            const editorValue = editorRef.current.getValue();

            if (valueRef.current !== editorValue) {
              onChange(editorValue, event);
            }
          });
        }
      }, [isEditorReady, onChange]); // onValidate

      react.exports.useEffect(() => {
        if (isEditorReady) {
          monacoRef.current.editor.setModelMarkers = function (model, owner, markers) {
            var _getModelMarkersSette;

            (_getModelMarkersSette = getModelMarkersSetter().backup) === null || _getModelMarkersSette === void 0 ? void 0 : _getModelMarkersSette.call(monacoRef.current.editor, model, owner, markers);
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          };
        }
      }, [isEditorReady, onValidate]);

      function disposeEditor() {
        var _subscriptionRef$curr2;

        (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

        if (keepCurrentModel) {
          saveViewState && viewStates.set(path, editorRef.current.saveViewState());
        } else {
          var _editorRef$current$ge;

          (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.dispose();
        }

        editorRef.current.dispose();
      }

      return /*#__PURE__*/React.createElement(MonacoContainer, {
        width: width,
        height: height,
        isEditorReady: isEditorReady,
        loading: loading,
        _ref: containerRef,
        className: className,
        wrapperClassName: wrapperClassName
      });
    }

    Editor$1.propTypes = {
      defaultValue: PropTypes.string,
      defaultPath: PropTypes.string,
      defaultLanguage: PropTypes.string,
      value: PropTypes.string,
      language: PropTypes.string,
      path: PropTypes.string,

      /* === */
      theme: PropTypes.string,
      line: PropTypes.number,
      loading: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
      options: PropTypes.object,
      overrideServices: PropTypes.object,
      saveViewState: PropTypes.bool,
      keepCurrentModel: PropTypes.bool,

      /* === */
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      className: PropTypes.string,
      wrapperClassName: PropTypes.string,

      /* === */
      beforeMount: PropTypes.func,
      onMount: PropTypes.func,
      onChange: PropTypes.func,
      onValidate: PropTypes.func
    };
    Editor$1.defaultProps = {
      theme: 'light',
      loading: 'Loading...',
      options: {},
      overrideServices: {},
      saveViewState: true,
      keepCurrentModel: false,

      /* === */
      width: '100%',
      height: '100%',

      /* === */
      beforeMount: noop,
      onMount: noop,
      onValidate: noop
    };

    var index = /*#__PURE__*/react.exports.memo(Editor$1);

    var groupDefinitions = function (ctx, definitions) {
        ctx.scalarTypes.push("Int", "Float", "ID", "String", "Boolean");
        var schemaDef = definitions.find(function (d) { return d.kind === "SchemaDefinition"; });
        var operations = schemaDef ?
            schemaDef.operationTypes.map(function (o) { return [o.operation, o.type.name.value]; }) :
            [];
        ctx.operations = operations;
        ctx.baseTypes = operations.map(function (o) { return o[1]; });
        definitions.map(function (def) {
            var _a, _b, _c, e_1, _d;
            var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            var createObjType = function () { return ({
                fields: [],
                unions: [],
                implements: []
            }); };
            if (def.kind === "InputObjectTypeDefinition" || def.kind === "InputObjectTypeExtension")
                return ctx.inputTypes[def.name.value] = (ctx.inputTypes[def.name.value] || []).concat((_e = def.fields) !== null && _e !== void 0 ? _e : []);
            else if (def.kind === "EnumTypeDefinition" || def.kind === "EnumTypeExtension")
                ctx.enumTypes[def.name.value] = (ctx.enumTypes[def.name.value] || []).concat((_f = def.values) !== null && _f !== void 0 ? _f : []);
            else if (def.kind === "UnionTypeDefinition" || def.kind === "UnionTypeExtension")
                (_a = (ctx.objectTypes[def.name.value] = ctx.objectTypes[def.name.value] || createObjType())
                    .unions).push.apply(_a, __spread((_h = (_g = def.types) === null || _g === void 0 ? void 0 : _g.map(function (x) { return x.name.value; })) !== null && _h !== void 0 ? _h : []));
            else if (def.kind === "ObjectTypeDefinition" ||
                def.kind === "ObjectTypeExtension" ||
                def.kind === "InterfaceTypeDefinition" ||
                def.kind === "InterfaceTypeExtension" ||
                false) {
                var objType = ctx.objectTypes[def.name.value] = (_j = ctx.objectTypes[def.name.value]) !== null && _j !== void 0 ? _j : createObjType();
                (_b = objType.fields).push.apply(_b, __spread((_k = def.fields) !== null && _k !== void 0 ? _k : []));
                (_c = objType.implements).push.apply(_c, __spread((_m = (_l = def.interfaces) === null || _l === void 0 ? void 0 : _l.map(function (i) { return i.name.value; })) !== null && _m !== void 0 ? _m : []));
                try {
                    for (var _s = __values((_o = def.interfaces) !== null && _o !== void 0 ? _o : []), _t = _s.next(); !_t.done; _t = _s.next()) {
                        var name_1 = _t.value.name;
                        ((ctx.objectTypes[name_1.value] = (_p = ctx.objectTypes[name_1.value]) !== null && _p !== void 0 ? _p : createObjType()))
                            .unions.push(def.name.value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_t && !_t.done && (_d = _s["return"])) _d.call(_s);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else if (def.kind === "ScalarTypeDefinition" || def.kind === "ScalarTypeExtension")
                ctx.scalarTypes.push(def.name.value);
            else
                return;
            ctx.typeDirectives[def.name.value] = ((_q = ctx.typeDirectives[def.name.value]) !== null && _q !== void 0 ? _q : []).concat((_r = def.directives) !== null && _r !== void 0 ? _r : []);
        });
    };

    var stringifyBoilerplate = function (boilerplateSource) {
        if (boilerplateSource === void 0) { boilerplateSource = undefined(require.resolve("./boilerplate.ts"), "utf8"); }
        return boilerplateSource.split("/* --- */")[1].trim();
    };

    function indent(strs) {
        var interps = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            interps[_i - 1] = arguments[_i];
        }
        var str = typeof strs === "string" ? strs : strs.map(function (s, i) { return s + (interps[i] || ""); }).join("");
        return str.replace(/^(?=.)/gm, "  ");
    }

    var stringifyObject = function (entries, multiline) {
        if (multiline === void 0) { multiline = true; }
        if (!entries.length)
            return "{}";
        var sep = multiline ? "\n" : "";
        return "{" + sep + entries.map(function (entry) {
            var _a = __read(entry.length === 2 ? [entry[0], false, entry[1]] : entry, 3), originalKey = _a[0], optional = _a[1], value = _a[2];
            var unquotedKey = originalKey[0] === '"' && originalKey[originalKey.length - 1] === '"' ?
                JSON.parse(originalKey) :
                originalKey;
            var requotedProp = unquotedKey.match(/^(?!\d)[\w$]+$/) ? unquotedKey : JSON.stringify(unquotedKey);
            var str = "" + requotedProp + (optional ? "?" : "") + ": " + value + ",";
            return multiline ? indent(str) : str;
        }).join(sep) + sep + "}";
    };

    var stringifyEnum = function (options, maxLineLength) {
        if (maxLineLength === void 0) { maxLineLength = 80; }
        if (!options.length)
            return "never";
        options = options.slice().sort();
        var prefixedOptions = options.map(function (o) { return "| " + o; });
        var maxLength = Math.max.apply(Math, __spread(prefixedOptions.map(function (o) { return o.length; })));
        var allSameLength = prefixedOptions.every(function (o) { return o.length === maxLength; });
        var listOptions = prefixedOptions.join("\n");
        var blockOptions = prefixedOptions.reduce(function (acc, op) {
            var _a = __read(acc, 1), line = _a[0];
            if (line === null)
                return __spread([op], acc.slice(1));
            line += " " + op;
            acc[0] = line;
            if (line.length + maxLength + 1 > maxLineLength)
                acc.unshift(null);
            return acc;
        }, [null]).reverse().filter(function (x) { return !!x; }).join("\n");
        return "(\n" + indent(allSameLength ? blockOptions : listOptions) + "\n)";
    };

    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */
    /* legacy: obj, showHidden, depth, colors*/
    function inspect$1(obj, opts) {
      // default options
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      // legacy...
      if (arguments.length >= 3) ctx.depth = arguments[2];
      if (arguments.length >= 4) ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
      } else if (opts) {
        // got an "options" object
        _extend(ctx, opts);
      }
      // set default options
      if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
      if (isUndefined(ctx.depth)) ctx.depth = 2;
      if (isUndefined(ctx.colors)) ctx.colors = false;
      if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
      if (ctx.colors) ctx.stylize = stylizeWithColor;
      return formatValue$1(ctx, obj, ctx.depth);
    }

    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    inspect$1.colors = {
      'bold' : [1, 22],
      'italic' : [3, 23],
      'underline' : [4, 24],
      'inverse' : [7, 27],
      'white' : [37, 39],
      'grey' : [90, 39],
      'black' : [30, 39],
      'blue' : [34, 39],
      'cyan' : [36, 39],
      'green' : [32, 39],
      'magenta' : [35, 39],
      'red' : [31, 39],
      'yellow' : [33, 39]
    };

    // Don't use 'blue' not visible on cmd.exe
    inspect$1.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      // "name": intentionally not styling
      'regexp': 'red'
    };


    function stylizeWithColor(str, styleType) {
      var style = inspect$1.styles[styleType];

      if (style) {
        return '\u001b[' + inspect$1.colors[style][0] + 'm' + str +
               '\u001b[' + inspect$1.colors[style][1] + 'm';
      } else {
        return str;
      }
    }


    function stylizeNoColor(str, styleType) {
      return str;
    }


    function arrayToHash(array) {
      var hash = {};

      array.forEach(function(val, idx) {
        hash[val] = true;
      });

      return hash;
    }


    function formatValue$1(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (ctx.customInspect &&
          value &&
          isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== inspect$1 &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue$1(ctx, ret, recurseTimes);
        }
        return ret;
      }

      // Primitive types cannot have properties
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }

      // Look up the keys of the object.
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }

      // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
      if (isError(value)
          && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }

      // Some type of object without properties can be shortcutted.
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '', array = false, braces = ['{', '}'];

      // Make Array say that they are Array
      if (isArray(value)) {
        array = true;
        braces = ['[', ']'];
      }

      // Make functions say that they are functions
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }

      // Make RegExps say that they are RegExps
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }

      // Make dates with properties first say the date
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }

      // Make error with message first say the error
      if (isError(value)) {
        base = ' ' + formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);

      var output;
      if (array) {
        output = formatArray$1(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();

      return reduceToSingleString(output, base, braces);
    }


    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        return ctx.stylize('undefined', 'undefined');
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        return ctx.stylize('' + value, 'number');
      if (isBoolean(value))
        return ctx.stylize('' + value, 'boolean');
      // For some reason typeof null is "object", so special case here.
      if (isNull(value))
        return ctx.stylize('null', 'null');
    }


    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }


    function formatArray$1(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              key, true));
        }
      });
      return output;
    }


    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue$1(ctx, desc.value, null);
          } else {
            str = formatValue$1(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }


    function reduceToSingleString(output, base, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf('\n') >= 0) ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }


    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    function isArray(ar) {
      return Array.isArray(ar);
    }

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }

    function isNull(arg) {
      return arg === null;
    }

    function isNumber(arg) {
      return typeof arg === 'number';
    }

    function isString(arg) {
      return typeof arg === 'string';
    }

    function isUndefined(arg) {
      return arg === void 0;
    }

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }

    function isError(e) {
      return isObject(e) &&
          (objectToString(e) === '[object Error]' || e instanceof Error);
    }

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }

    function _extend(origin, add) {
      // Don't do anything if add isn't an object
      if (!add || !isObject(add)) return origin;

      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var stringifyValue = function (val) {
        return val.kind === "BooleanValue" || val.kind === "StringValue" || val.kind === "EnumValue" ?
            JSON.stringify(val.value) :
            val.kind === "IntValue" || val.kind === "FloatValue" ?
                val.value :
                val.kind === "Variable" || val.kind === "NullValue" ?
                    "null" :
                    val.kind === "ListValue" ?
                        "[\n" + val.values.map(function (v) { return indent(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["", ",\n"], ["", ",\\n"])), stringifyValue(v)); }).join("") + "]" :
                        val.kind === "ObjectValue" ?
                            "{\n" + val.fields.map(function (f) {
                                return indent(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["", ": ", ",\n"], ["", ": ", ",\\n"])), f.name.value, stringifyValue(f.value));
                            }).join("") + "}" :
                            (function (val) {
                                throw new Error("Invalid ValueNode " + inspect$1(val));
                            })(val);
    };
    var templateObject_1$3, templateObject_2$2;

    var stringifyEnumTypes = function (ctx) {
        return Object.entries(ctx.enumTypes).map(function (_a) {
            var _b = __read(_a, 2), name = _b[0], values = _b[1];
            return "export type " + name + " = " + stringifyEnum(values.map(function (v) { return JSON.stringify(v.name.value); }));
        }).join("\n\n") + "\n\n" +
            ("export type $$EnumDirectives = " + stringifyObject(Object.entries(ctx.enumTypes).map(function (_a) {
                var _b = __read(_a, 2), name = _b[0], values = _b[1];
                return [name, stringifyObject(values.filter(function (v) { var _a; return (_a = v.directives) === null || _a === void 0 ? void 0 : _a.length; }).map(function (value) {
                        var _a, _b;
                        return [value.name.value, stringifyObject((_b = (_a = value.directives) === null || _a === void 0 ? void 0 : _a.map(function (dir) {
                                var _a, _b;
                                return [dir.name.value, stringifyObject((_b = (_a = dir.arguments) === null || _a === void 0 ? void 0 : _a.map(function (arg) {
                                        return [arg.name.value, stringifyValue(arg.value)];
                                    })) !== null && _b !== void 0 ? _b : [])];
                            })) !== null && _b !== void 0 ? _b : [])];
                    }))];
            })) + "\n\n") +
            ("export interface $$EnumTypes " + stringifyObject(Object.entries(ctx.enumTypes).map(function (_a) {
                var _b = __read(_a, 1), name = _b[0];
                return [name, name];
            })));
    };

    var unwrapType = function (type, allowUndefined, skipMaybe) {
        if (allowUndefined === void 0) { allowUndefined = false; }
        if (skipMaybe === void 0) { skipMaybe = false; }
        if (type.kind !== "NonNullType" && !skipMaybe) {
            var _type_1 = unwrapType(type, allowUndefined, true);
            return [
                _type_1[0],
                function (x) { return "(" + _type_1[1](x) + " | null" + (allowUndefined ? " | undefined" : "") + ")"; },
                true,
                "$$Optional<" + _type_1[3] + ">"
            ];
        }
        if (type.kind === "NonNullType")
            return unwrapType(type.type, allowUndefined, true);
        if (type.kind === "ListType") {
            var _type_2 = unwrapType(type.type, allowUndefined);
            return [_type_2[0], function (t) { return _type_2[1](t) + "[]"; }, false, "$$Array<" + _type_2[3] + ">"];
        }
        return [type, function (x) { return x; }, false, "$$Identity"];
    };

    var stringifyInputType = function (ctx, fields) {
        return stringifyObject(fields.map(function (field) {
            var _a = __read(unwrapType(field.type, true), 3), typeName = _a[0].name.value, wrap = _a[1], maybe = _a[2];
            var type = (typeName in ctx.objectTypes || typeName in ctx.inputTypes || typeName in ctx.enumTypes ?
                typeName :
                "$$Scalars[" + JSON.stringify(typeName) + "]");
            var typeStr = wrap(type);
            return [field.name.value, maybe, typeStr];
        }));
    };

    var stringifyInputTypes = function (ctx) {
        return Object.entries(ctx.inputTypes).map(function (_a) {
            var _b = __read(_a, 2), name = _b[0], fields = _b[1];
            return "export interface " + name + " " + stringifyInputType(ctx, fields);
        }).join("\n\n");
    };

    var stringifyFragEnums = function (objs) {
        return objs.map(function (obj) {
            return "export type " + obj.type + "$ = $$ObjectTypeInfoMap[\"" + obj.type + "\"][\"Frag\"];";
        }).join("\n");
    };

    var stringifyFragResult = function (obj) {
        return "export type $" + obj.type + "<F extends $$DeepArray<" + obj.type + "$>> = $$Result<\"" + obj.type + "\", $$UnwrapDeepArray<F>>";
    };

    var stringifyId$1 = function (id) {
        return "\"" + id.type + "$" + id.prop + "\"";
    };

    var str = function (str) { return JSON.stringify(str); };
    var stringifyObjectTypeInfo = function (ctx, objs) {
        return "export type $$ObjectType = " + stringifyEnum(objs.map(function (v) { return JSON.stringify(v.type); })) + "\n\n" +
            "export const $$objectTypeInfoMap = " + stringifyObject(objs.map(function (obj) {
            return [obj.type, __spread([
                    "new $$ObjectTypeInfo("
                ], __spread([
                    JSON.stringify(obj.type)
                ], [obj.shallowProps, obj.deepProps].flatMap(function (props) {
                    return !props.length ?
                        "{}, {}, {}, {}" :
                        [
                            stringifyObject(props.map(function (prop) { return [stringifyId$1(prop.id), str(prop.id.prop)]; })),
                            stringifyObject(props.map(function (prop) { return [str(prop.id.prop), stringifyId$1(prop.id)]; })),
                            "null as any as " + stringifyObject(props.map(function (prop) {
                                return [stringifyId$1(prop.id), str(prop.type)];
                            })),
                            "null as any as " + stringifyObject(props.map(function (prop) {
                                return [stringifyId$1(prop.id), prop.wrapHKT];
                            })),
                        ];
                }), [
                    "null as any as " + stringifyObject(obj.props.map(function (prop) {
                        return [stringifyId$1(prop.id), stringifyInputType(ctx, prop.args)];
                    })),
                    stringifyObject(obj.props.map(function (prop) {
                        return [stringifyId$1(prop.id), stringifyObject(prop.args.map(function (arg) {
                                var _a, _b;
                                return [
                                    arg.name.value,
                                    JSON.stringify((_b = (_a = arg.type.loc) === null || _a === void 0 ? void 0 : _a.source.body.slice(arg.type.loc.start, arg.type.loc.end)) !== null && _b !== void 0 ? _b : "")
                                ];
                            }))];
                    })),
                    stringifyObject(obj.props.map(function (prop) {
                        return [stringifyId$1(prop.id), stringifyObject(prop.directives.map(function (directive) {
                                var _a, _b;
                                return [
                                    directive.name.value,
                                    stringifyObject((_b = (_a = directive.arguments) === null || _a === void 0 ? void 0 : _a.map(function (arg) {
                                        return [arg.name.value, stringifyValue(arg.value)];
                                    })) !== null && _b !== void 0 ? _b : [])
                                ];
                            }))];
                    })),
                    stringifyObject(obj.props.map(function (prop) { var _a, _b; return [stringifyId$1(prop.id), JSON.stringify((_b = (_a = prop.loc) === null || _a === void 0 ? void 0 : _a.source.name) !== null && _b !== void 0 ? _b : null)]; })) + " as const",
                    "null as any as " + stringifyEnum(obj.unions.map(function (t) { return JSON.stringify(t); })),
                    "null as any as " + stringifyEnum(obj.implements.map(function (t) { return JSON.stringify(t); })),
                ]).map(function (str) { return indent(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["", ","], ["", ","])), str); }), [
                    ")",
                ]).join("\n")];
        }));
    };
    var templateObject_1$2;

    var stringifyFragObject = function (obj) {
        var typeofType = "\n\ntype typeof$" + obj.type + " = typeof " + obj.type;
        var fragCast = "const " + obj.type + "$$ = <F extends $$DeepArray<" + obj.type + "$>>(...frag: F): F[number][] => frag;\n\n";
        var shallowObj = genObj(obj.shallowProps, function (p) { return stringifyId$1(p.id); }, indent(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["$: ", "$$,\n"], ["$: ", "$$,\\n"])), obj.type)) + " as const";
        var deepType = genObj(obj.deepProps, function (p) {
            return "$$MapWrap<typeof$" + p.type + ", " + stringifyId$1(p.id) + ">";
        }, obj.shallowProps.length ? "" : indent(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["$: typeof ", "$$,\n"], ["$: typeof ", "$$,\\n"])), obj.type));
        var deepObj = genObj(obj.deepProps, function (p) {
            return "$$mapWrap(() => " + p.type + ", " + stringifyId$1(p.id) + ")";
        }, obj.shallowProps.length ? indent(templateObject_3 || (templateObject_3 = __makeTemplateObject(["..._", ",\n"], ["..._", ",\\n"])), obj.type) : indent(templateObject_4 || (templateObject_4 = __makeTemplateObject(["$: ", "$$,\n"], ["$: ", "$$,\\n"])), obj.type));
        if (!obj.deepProps.length)
            return fragCast + ("export const " + obj.type + " = " + shallowObj + ";") + typeofType;
        if (!obj.shallowProps.length)
            return fragCast + ("export const " + obj.type + ": " + deepType + " = " + deepObj + ";") + typeofType;
        return fragCast + ("\nconst _" + obj.type + " = " + shallowObj + ";\n\nexport const " + obj.type + ": typeof _" + obj.type + " & " + deepType + " = " + deepObj + ";\n").trim() + typeofType;
    };
    function genObj(props, f, str) {
        if (str === void 0) { str = ""; }
        if (!props.length)
            return "{}";
        return "{\n" + str + props.map(function (p) {
            return indent(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", ": ", ","], ["", ": ", ","])), p.id.prop, f(p));
        }).join("\n") + "\n}";
    }
    var templateObject_1$1, templateObject_2$1, templateObject_3, templateObject_4, templateObject_5;

    var generateObjs$1 = function (ctx) {
        var ids = [];
        var objs = Object.keys(ctx.objectTypes)
            .sort()
            .map(function (name) {
            var _a = ctx.objectTypes[name], fields = _a.fields, unions = _a.unions, impls = _a.implements;
            var props = fields.map(function (field) {
                var _a, _b, _c, _d;
                var id = {
                    type: name,
                    prop: field.name.value
                };
                ids.push(id);
                var _e = __read(unwrapType(field.type), 4), typeName = _e[0].name.value, wrap = _e[1], wrapHKT = _e[3];
                var shallow = !(typeName in ctx.objectTypes);
                var prop = {
                    id: id,
                    type: typeName,
                    shallow: shallow,
                    wrap: wrap,
                    wrapHKT: wrapHKT,
                    args: (_b = (_a = field.arguments) === null || _a === void 0 ? void 0 : _a.slice()) !== null && _b !== void 0 ? _b : [],
                    directives: (_d = (_c = field.directives) === null || _c === void 0 ? void 0 : _c.slice()) !== null && _d !== void 0 ? _d : [],
                    loc: field.loc
                };
                return prop;
            }).sort(function (p, q) { return p.id.prop > q.id.prop ? 1 : -1; });
            var shallowProps = props.filter(function (p) { return p.shallow; });
            var deepProps = props.filter(function (p) { return !p.shallow; });
            var obj = {
                type: name,
                shallowProps: shallowProps,
                deepProps: deepProps,
                props: props,
                unions: unions,
                implements: impls,
                isBase: ctx.baseTypes.includes(name)
            };
            return obj;
        });
        return [objs, ids, ctx];
    };

    var stringifyObjectTypes = (function (ctx) {
        var _a = __read(generateObjs$1(ctx), 1), objs = _a[0];
        return __spread([
            stringifyObjectTypeInfo(ctx, objs),
            stringifyFragEnums(objs)
        ], objs.map(function (o) { return stringifyFragObject(o); }), [
            objs.map(function (o) { return stringifyFragResult(o); }).join("\n")
        ]).join("\n\n");
    });

    var stringifyId = function (id) {
        return "\"" + id.type + "$" + id.prop + "\"";
    };

    var stringifyObjectGen = function (objs) {
        return "export const $$generateObject = <R extends $$GqxReturn>(f: $$GqxImpl<R>) => ({\n" + objs.map(function (o) {
            return indent(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ": {\n", "},\n"], ["", ": {\\n",
                "},\\n"])), o.prop, o.props.map(function (p) {
                return indent(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", ": f(", "),\n"], ["", ": f(", "),\\n"])), p.id.prop, stringifyId(p.id));
            }).join(""));
        }).join("") + "})";
    };
    var templateObject_1, templateObject_2;

    var generateObjs = function (ctx) {
        var objs = ctx.operations
            .map(function (_a) {
            var _b = __read(_a, 2), prop = _b[0], name = _b[1];
            var fields = ctx.objectTypes[name].fields;
            var props = fields.map(function (field) {
                var _a, _b;
                var id = {
                    type: name,
                    prop: field.name.value
                };
                var _c = __read(unwrapType(field.type), 2), typeName = _c[0].name.value, wrap = _c[1];
                var prop = {
                    id: id,
                    type: typeName,
                    wrap: wrap,
                    args: (_b = (_a = field.arguments) === null || _a === void 0 ? void 0 : _a.slice()) !== null && _b !== void 0 ? _b : []
                };
                return prop;
            }).sort(function (p, q) { return p.id.prop > q.id.prop ? 1 : -1; });
            var obj = {
                type: name,
                prop: prop,
                props: props
            };
            return obj;
        });
        return [objs, ctx];
    };

    var stringifyOperations = (function (ctx) {
        var _a = __read(generateObjs(ctx), 1), objs = _a[0];
        return [
            stringifyObjectGen(objs),
        ].join("\n\n");
    });

    var stringifyScalarTypes = function (ctx) {
        return ctx.scalarTypes.map(function (name) {
            return "export type " + name + " = $$Scalars[\"" + name + "\"]";
        }).join("\n") + "\n\n" +
            ("export type $$ScalarType = " + stringifyEnum(ctx.scalarTypes.map(function (x) { return JSON.stringify(x); })));
    };

    var stringifyTypeDirectives = function (ctx) {
        return "export type $$TypeDirectives = typeof $$typeDirectives;\n" +
            "export const $$typeDirectives = " +
            stringifyObject(Object.entries(ctx.typeDirectives).map(function (_a) {
                var _b = __read(_a, 2), type = _b[0], directives = _b[1];
                return [type, stringifyObject(directives.map(function (directive) {
                        var _a;
                        return [
                            directive.name.value,
                            stringifyObject(((_a = directive.arguments) === null || _a === void 0 ? void 0 : _a.map(function (arg) {
                                return [arg.name.value, stringifyValue(arg.value)];
                            })) || [])
                        ];
                    }))];
            }));
    };

    // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
    var nodejsCustomInspectSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
    var nodejsCustomInspectSymbol$1 = nodejsCustomInspectSymbol;

    function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
    var MAX_ARRAY_LENGTH = 10;
    var MAX_RECURSIVE_DEPTH = 2;
    /**
     * Used to print values in error messages.
     */

    function inspect(value) {
      return formatValue(value, []);
    }

    function formatValue(value, seenValues) {
      switch (_typeof$2(value)) {
        case 'string':
          return JSON.stringify(value);

        case 'function':
          return value.name ? "[function ".concat(value.name, "]") : '[function]';

        case 'object':
          if (value === null) {
            return 'null';
          }

          return formatObjectValue(value, seenValues);

        default:
          return String(value);
      }
    }

    function formatObjectValue(value, previouslySeenValues) {
      if (previouslySeenValues.indexOf(value) !== -1) {
        return '[Circular]';
      }

      var seenValues = [].concat(previouslySeenValues, [value]);
      var customInspectFn = getCustomFn(value);

      if (customInspectFn !== undefined) {
        // $FlowFixMe(>=0.90.0)
        var customValue = customInspectFn.call(value); // check for infinite recursion

        if (customValue !== value) {
          return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
        }
      } else if (Array.isArray(value)) {
        return formatArray(value, seenValues);
      }

      return formatObject(value, seenValues);
    }

    function formatObject(object, seenValues) {
      var keys = Object.keys(object);

      if (keys.length === 0) {
        return '{}';
      }

      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[' + getObjectTag(object) + ']';
      }

      var properties = keys.map(function (key) {
        var value = formatValue(object[key], seenValues);
        return key + ': ' + value;
      });
      return '{ ' + properties.join(', ') + ' }';
    }

    function formatArray(array, seenValues) {
      if (array.length === 0) {
        return '[]';
      }

      if (seenValues.length > MAX_RECURSIVE_DEPTH) {
        return '[Array]';
      }

      var len = Math.min(MAX_ARRAY_LENGTH, array.length);
      var remaining = array.length - len;
      var items = [];

      for (var i = 0; i < len; ++i) {
        items.push(formatValue(array[i], seenValues));
      }

      if (remaining === 1) {
        items.push('... 1 more item');
      } else if (remaining > 1) {
        items.push("... ".concat(remaining, " more items"));
      }

      return '[' + items.join(', ') + ']';
    }

    function getCustomFn(object) {
      var customInspectFn = object[String(nodejsCustomInspectSymbol$1)];

      if (typeof customInspectFn === 'function') {
        return customInspectFn;
      }

      if (typeof object.inspect === 'function') {
        return object.inspect;
      }
    }

    function getObjectTag(object) {
      var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

      if (tag === 'Object' && typeof object.constructor === 'function') {
        var name = object.constructor.name;

        if (typeof name === 'string' && name !== '') {
          return name;
        }
      }

      return tag;
    }

    function devAssert(condition, message) {
      var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

      if (!booleanCondition) {
        throw new Error(message);
      }
    }

    function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

    /**
     * Return true if `value` is object-like. A value is object-like if it's not
     * `null` and has a `typeof` result of "object".
     */
    function isObjectLike(value) {
      return _typeof$1(value) == 'object' && value !== null;
    }

    // In ES2015 (or a polyfilled) environment, this will be Symbol.iterator

    var SYMBOL_TO_STRING_TAG = // $FlowFixMe Flow doesn't define `Symbol.toStringTag` yet
    typeof Symbol === 'function' ? Symbol.toStringTag : '@@toStringTag';

    /**
     * Represents a location in a Source.
     */

    /**
     * Takes a Source and a UTF-8 character offset, and returns the corresponding
     * line and column as a SourceLocation.
     */
    function getLocation(source, position) {
      var lineRegexp = /\r\n|[\n\r]/g;
      var line = 1;
      var column = position + 1;
      var match;

      while ((match = lineRegexp.exec(source.body)) && match.index < position) {
        line += 1;
        column = position + 1 - (match.index + match[0].length);
      }

      return {
        line: line,
        column: column
      };
    }

    /**
     * Render a helpful description of the location in the GraphQL Source document.
     */

    function printLocation(location) {
      return printSourceLocation(location.source, getLocation(location.source, location.start));
    }
    /**
     * Render a helpful description of the location in the GraphQL Source document.
     */

    function printSourceLocation(source, sourceLocation) {
      var firstLineColumnOffset = source.locationOffset.column - 1;
      var body = whitespace(firstLineColumnOffset) + source.body;
      var lineIndex = sourceLocation.line - 1;
      var lineOffset = source.locationOffset.line - 1;
      var lineNum = sourceLocation.line + lineOffset;
      var columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
      var columnNum = sourceLocation.column + columnOffset;
      var locationStr = "".concat(source.name, ":").concat(lineNum, ":").concat(columnNum, "\n");
      var lines = body.split(/\r\n|[\n\r]/g);
      var locationLine = lines[lineIndex]; // Special case for minified documents

      if (locationLine.length > 120) {
        var subLineIndex = Math.floor(columnNum / 80);
        var subLineColumnNum = columnNum % 80;
        var subLines = [];

        for (var i = 0; i < locationLine.length; i += 80) {
          subLines.push(locationLine.slice(i, i + 80));
        }

        return locationStr + printPrefixedLines([["".concat(lineNum), subLines[0]]].concat(subLines.slice(1, subLineIndex + 1).map(function (subLine) {
          return ['', subLine];
        }), [[' ', whitespace(subLineColumnNum - 1) + '^'], ['', subLines[subLineIndex + 1]]]));
      }

      return locationStr + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
      ["".concat(lineNum - 1), lines[lineIndex - 1]], ["".concat(lineNum), locationLine], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1), lines[lineIndex + 1]]]);
    }

    function printPrefixedLines(lines) {
      var existingLines = lines.filter(function (_ref) {
        _ref[0];
            var line = _ref[1];
        return line !== undefined;
      });
      var padLen = Math.max.apply(Math, existingLines.map(function (_ref2) {
        var prefix = _ref2[0];
        return prefix.length;
      }));
      return existingLines.map(function (_ref3) {
        var prefix = _ref3[0],
            line = _ref3[1];
        return leftPad(padLen, prefix) + (line ? ' | ' + line : ' |');
      }).join('\n');
    }

    function whitespace(len) {
      return Array(len + 1).join(' ');
    }

    function leftPad(len, str) {
      return whitespace(len - str.length) + str;
    }

    function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

    function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

    function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

    function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    /**
     * A GraphQLError describes an Error found during the parse, validate, or
     * execute phases of performing a GraphQL operation. In addition to a message
     * and stack trace, it also includes information about the locations in a
     * GraphQL document and/or execution result that correspond to the Error.
     */

    var GraphQLError = /*#__PURE__*/function (_Error) {
      _inherits(GraphQLError, _Error);

      var _super = _createSuper(GraphQLError);

      /**
       * A message describing the Error for debugging purposes.
       *
       * Enumerable, and appears in the result of JSON.stringify().
       *
       * Note: should be treated as readonly, despite invariant usage.
       */

      /**
       * An array of { line, column } locations within the source GraphQL document
       * which correspond to this error.
       *
       * Errors during validation often contain multiple locations, for example to
       * point out two things with the same name. Errors during execution include a
       * single location, the field which produced the error.
       *
       * Enumerable, and appears in the result of JSON.stringify().
       */

      /**
       * An array describing the JSON-path into the execution response which
       * corresponds to this error. Only included for errors during execution.
       *
       * Enumerable, and appears in the result of JSON.stringify().
       */

      /**
       * An array of GraphQL AST Nodes corresponding to this error.
       */

      /**
       * The source GraphQL document for the first location of this error.
       *
       * Note that if this Error represents more than one node, the source may not
       * represent nodes after the first node.
       */

      /**
       * An array of character offsets within the source GraphQL document
       * which correspond to this error.
       */

      /**
       * The original error thrown from a field resolver during execution.
       */

      /**
       * Extension fields to add to the formatted error.
       */
      function GraphQLError(message, nodes, source, positions, path, originalError, extensions) {
        var _locations2, _source2, _positions2, _extensions2;

        var _this;

        _classCallCheck(this, GraphQLError);

        _this = _super.call(this, message); // Compute list of blame nodes.

        var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


        var _source = source;

        if (!_source && _nodes) {
          var _nodes$0$loc;

          _source = (_nodes$0$loc = _nodes[0].loc) === null || _nodes$0$loc === void 0 ? void 0 : _nodes$0$loc.source;
        }

        var _positions = positions;

        if (!_positions && _nodes) {
          _positions = _nodes.reduce(function (list, node) {
            if (node.loc) {
              list.push(node.loc.start);
            }

            return list;
          }, []);
        }

        if (_positions && _positions.length === 0) {
          _positions = undefined;
        }

        var _locations;

        if (positions && source) {
          _locations = positions.map(function (pos) {
            return getLocation(source, pos);
          });
        } else if (_nodes) {
          _locations = _nodes.reduce(function (list, node) {
            if (node.loc) {
              list.push(getLocation(node.loc.source, node.loc.start));
            }

            return list;
          }, []);
        }

        var _extensions = extensions;

        if (_extensions == null && originalError != null) {
          var originalExtensions = originalError.extensions;

          if (isObjectLike(originalExtensions)) {
            _extensions = originalExtensions;
          }
        }

        Object.defineProperties(_assertThisInitialized(_this), {
          name: {
            value: 'GraphQLError'
          },
          message: {
            value: message,
            // By being enumerable, JSON.stringify will include `message` in the
            // resulting output. This ensures that the simplest possible GraphQL
            // service adheres to the spec.
            enumerable: true,
            writable: true
          },
          locations: {
            // Coercing falsy values to undefined ensures they will not be included
            // in JSON.stringify() when not provided.
            value: (_locations2 = _locations) !== null && _locations2 !== void 0 ? _locations2 : undefined,
            // By being enumerable, JSON.stringify will include `locations` in the
            // resulting output. This ensures that the simplest possible GraphQL
            // service adheres to the spec.
            enumerable: _locations != null
          },
          path: {
            // Coercing falsy values to undefined ensures they will not be included
            // in JSON.stringify() when not provided.
            value: path !== null && path !== void 0 ? path : undefined,
            // By being enumerable, JSON.stringify will include `path` in the
            // resulting output. This ensures that the simplest possible GraphQL
            // service adheres to the spec.
            enumerable: path != null
          },
          nodes: {
            value: _nodes !== null && _nodes !== void 0 ? _nodes : undefined
          },
          source: {
            value: (_source2 = _source) !== null && _source2 !== void 0 ? _source2 : undefined
          },
          positions: {
            value: (_positions2 = _positions) !== null && _positions2 !== void 0 ? _positions2 : undefined
          },
          originalError: {
            value: originalError
          },
          extensions: {
            // Coercing falsy values to undefined ensures they will not be included
            // in JSON.stringify() when not provided.
            value: (_extensions2 = _extensions) !== null && _extensions2 !== void 0 ? _extensions2 : undefined,
            // By being enumerable, JSON.stringify will include `path` in the
            // resulting output. This ensures that the simplest possible GraphQL
            // service adheres to the spec.
            enumerable: _extensions != null
          }
        }); // Include (non-enumerable) stack trace.

        if (originalError === null || originalError === void 0 ? void 0 : originalError.stack) {
          Object.defineProperty(_assertThisInitialized(_this), 'stack', {
            value: originalError.stack,
            writable: true,
            configurable: true
          });
          return _possibleConstructorReturn(_this);
        } // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')


        if (Error.captureStackTrace) {
          Error.captureStackTrace(_assertThisInitialized(_this), GraphQLError);
        } else {
          Object.defineProperty(_assertThisInitialized(_this), 'stack', {
            value: Error().stack,
            writable: true,
            configurable: true
          });
        }

        return _this;
      }

      _createClass$1(GraphQLError, [{
        key: "toString",
        value: function toString() {
          return printError(this);
        } // FIXME: workaround to not break chai comparisons, should be remove in v16
        // $FlowFixMe Flow doesn't support computed properties yet

      }, {
        key: SYMBOL_TO_STRING_TAG,
        get: function get() {
          return 'Object';
        }
      }]);

      return GraphQLError;
    }( /*#__PURE__*/_wrapNativeSuper(Error));
    /**
     * Prints a GraphQLError to a string, representing useful location information
     * about the error's position in the source.
     */

    function printError(error) {
      var output = error.message;

      if (error.nodes) {
        for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
          var node = _error$nodes2[_i2];

          if (node.loc) {
            output += '\n\n' + printLocation(node.loc);
          }
        }
      } else if (error.source && error.locations) {
        for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
          var location = _error$locations2[_i4];
          output += '\n\n' + printSourceLocation(error.source, location);
        }
      }

      return output;
    }

    /**
     * Produces a GraphQLError representing a syntax error, containing useful
     * descriptive information about the syntax error's position in the source.
     */

    function syntaxError(source, position, description) {
      return new GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
    }

    /**
     * The set of allowed kind values for AST nodes.
     */
    var Kind = Object.freeze({
      // Name
      NAME: 'Name',
      // Document
      DOCUMENT: 'Document',
      OPERATION_DEFINITION: 'OperationDefinition',
      VARIABLE_DEFINITION: 'VariableDefinition',
      SELECTION_SET: 'SelectionSet',
      FIELD: 'Field',
      ARGUMENT: 'Argument',
      // Fragments
      FRAGMENT_SPREAD: 'FragmentSpread',
      INLINE_FRAGMENT: 'InlineFragment',
      FRAGMENT_DEFINITION: 'FragmentDefinition',
      // Values
      VARIABLE: 'Variable',
      INT: 'IntValue',
      FLOAT: 'FloatValue',
      STRING: 'StringValue',
      BOOLEAN: 'BooleanValue',
      NULL: 'NullValue',
      ENUM: 'EnumValue',
      LIST: 'ListValue',
      OBJECT: 'ObjectValue',
      OBJECT_FIELD: 'ObjectField',
      // Directives
      DIRECTIVE: 'Directive',
      // Types
      NAMED_TYPE: 'NamedType',
      LIST_TYPE: 'ListType',
      NON_NULL_TYPE: 'NonNullType',
      // Type System Definitions
      SCHEMA_DEFINITION: 'SchemaDefinition',
      OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
      // Type Definitions
      SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
      OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
      FIELD_DEFINITION: 'FieldDefinition',
      INPUT_VALUE_DEFINITION: 'InputValueDefinition',
      INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
      UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
      ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
      ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
      INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
      // Directive Definitions
      DIRECTIVE_DEFINITION: 'DirectiveDefinition',
      // Type System Extensions
      SCHEMA_EXTENSION: 'SchemaExtension',
      // Type Extensions
      SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
      OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
      INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
      UNION_TYPE_EXTENSION: 'UnionTypeExtension',
      ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
      INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
    });
    /**
     * The enum type representing the possible kind values of AST nodes.
     */

    function invariant(condition, message) {
      var booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

      if (!booleanCondition) {
        throw new Error(message != null ? message : 'Unexpected invariant triggered.');
      }
    }

    /**
     * The `defineInspect()` function defines `inspect()` prototype method as alias of `toJSON`
     */

    function defineInspect(classObject) {
      var fn = classObject.prototype.toJSON;
      typeof fn === 'function' || invariant(0);
      classObject.prototype.inspect = fn; // istanbul ignore else (See: 'https://github.com/graphql/graphql-js/issues/2317')

      if (nodejsCustomInspectSymbol$1) {
        classObject.prototype[nodejsCustomInspectSymbol$1] = fn;
      }
    }

    /**
     * Contains a range of UTF-8 character offsets and token references that
     * identify the region of the source from which the AST derived.
     */
    var Location = /*#__PURE__*/function () {
      /**
       * The character offset at which this Node begins.
       */

      /**
       * The character offset at which this Node ends.
       */

      /**
       * The Token at which this Node begins.
       */

      /**
       * The Token at which this Node ends.
       */

      /**
       * The Source document the AST represents.
       */
      function Location(startToken, endToken, source) {
        this.start = startToken.start;
        this.end = endToken.end;
        this.startToken = startToken;
        this.endToken = endToken;
        this.source = source;
      }

      var _proto = Location.prototype;

      _proto.toJSON = function toJSON() {
        return {
          start: this.start,
          end: this.end
        };
      };

      return Location;
    }(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

    defineInspect(Location);
    /**
     * Represents a range of characters represented by a lexical token
     * within a Source.
     */

    var Token = /*#__PURE__*/function () {
      /**
       * The kind of Token.
       */

      /**
       * The character offset at which this Node begins.
       */

      /**
       * The character offset at which this Node ends.
       */

      /**
       * The 1-indexed line number on which this Token appears.
       */

      /**
       * The 1-indexed column number at which this Token begins.
       */

      /**
       * For non-punctuation tokens, represents the interpreted value of the token.
       */

      /**
       * Tokens exist as nodes in a double-linked-list amongst all tokens
       * including ignored tokens. <SOF> is always the first node and <EOF>
       * the last.
       */
      function Token(kind, start, end, line, column, prev, value) {
        this.kind = kind;
        this.start = start;
        this.end = end;
        this.line = line;
        this.column = column;
        this.value = value;
        this.prev = prev;
        this.next = null;
      }

      var _proto2 = Token.prototype;

      _proto2.toJSON = function toJSON() {
        return {
          kind: this.kind,
          value: this.value,
          line: this.line,
          column: this.column
        };
      };

      return Token;
    }(); // Print a simplified form when appearing in `inspect` and `util.inspect`.

    defineInspect(Token);
    /**
     * The list of all possible AST node types.
     */

    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    /**
     * A representation of source input to GraphQL. The `name` and `locationOffset` parameters are
     * optional, but they are useful for clients who store GraphQL documents in source files.
     * For example, if the GraphQL input starts at line 40 in a file named `Foo.graphql`, it might
     * be useful for `name` to be `"Foo.graphql"` and location to be `{ line: 40, column: 1 }`.
     * The `line` and `column` properties in `locationOffset` are 1-indexed.
     */
    var Source = /*#__PURE__*/function () {
      function Source(body) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GraphQL request';
        var locationOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
          line: 1,
          column: 1
        };
        this.body = body;
        this.name = name;
        this.locationOffset = locationOffset;
        this.locationOffset.line > 0 || devAssert(0, 'line in locationOffset is 1-indexed and must be positive.');
        this.locationOffset.column > 0 || devAssert(0, 'column in locationOffset is 1-indexed and must be positive.');
      } // $FlowFixMe Flow doesn't support computed properties yet


      _createClass(Source, [{
        key: SYMBOL_TO_STRING_TAG,
        get: function get() {
          return 'Source';
        }
      }]);

      return Source;
    }();

    /**
     * An exported enum describing the different kinds of tokens that the
     * lexer emits.
     */
    var TokenKind = Object.freeze({
      SOF: '<SOF>',
      EOF: '<EOF>',
      BANG: '!',
      DOLLAR: '$',
      AMP: '&',
      PAREN_L: '(',
      PAREN_R: ')',
      SPREAD: '...',
      COLON: ':',
      EQUALS: '=',
      AT: '@',
      BRACKET_L: '[',
      BRACKET_R: ']',
      BRACE_L: '{',
      PIPE: '|',
      BRACE_R: '}',
      NAME: 'Name',
      INT: 'Int',
      FLOAT: 'Float',
      STRING: 'String',
      BLOCK_STRING: 'BlockString',
      COMMENT: 'Comment'
    });
    /**
     * The enum type representing the token kinds values.
     */

    /**
     * The set of allowed directive location values.
     */
    var DirectiveLocation = Object.freeze({
      // Request Definitions
      QUERY: 'QUERY',
      MUTATION: 'MUTATION',
      SUBSCRIPTION: 'SUBSCRIPTION',
      FIELD: 'FIELD',
      FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
      FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
      INLINE_FRAGMENT: 'INLINE_FRAGMENT',
      VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
      // Type System Definitions
      SCHEMA: 'SCHEMA',
      SCALAR: 'SCALAR',
      OBJECT: 'OBJECT',
      FIELD_DEFINITION: 'FIELD_DEFINITION',
      ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
      INTERFACE: 'INTERFACE',
      UNION: 'UNION',
      ENUM: 'ENUM',
      ENUM_VALUE: 'ENUM_VALUE',
      INPUT_OBJECT: 'INPUT_OBJECT',
      INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
    });
    /**
     * The enum type representing the directive location values.
     */

    /**
     * Produces the value of a block string from its parsed raw value, similar to
     * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
     *
     * This implements the GraphQL spec's BlockStringValue() static algorithm.
     *
     * @internal
     */
    function dedentBlockStringValue(rawString) {
      // Expand a block string's raw value into independent lines.
      var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

      var commonIndent = getBlockStringIndentation(lines);

      if (commonIndent !== 0) {
        for (var i = 1; i < lines.length; i++) {
          lines[i] = lines[i].slice(commonIndent);
        }
      } // Remove leading and trailing blank lines.


      while (lines.length > 0 && isBlank(lines[0])) {
        lines.shift();
      }

      while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
        lines.pop();
      } // Return a string of the lines joined with U+000A.


      return lines.join('\n');
    }
    /**
     * @internal
     */

    function getBlockStringIndentation(lines) {
      var commonIndent = null;

      for (var i = 1; i < lines.length; i++) {
        var line = lines[i];
        var indent = leadingWhitespace(line);

        if (indent === line.length) {
          continue; // skip empty lines
        }

        if (commonIndent === null || indent < commonIndent) {
          commonIndent = indent;

          if (commonIndent === 0) {
            break;
          }
        }
      }

      return commonIndent === null ? 0 : commonIndent;
    }

    function leadingWhitespace(str) {
      var i = 0;

      while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
        i++;
      }

      return i;
    }

    function isBlank(str) {
      return leadingWhitespace(str) === str.length;
    }

    /**
     * Given a Source object, creates a Lexer for that source.
     * A Lexer is a stateful stream generator in that every time
     * it is advanced, it returns the next token in the Source. Assuming the
     * source lexes, the final Token emitted by the lexer will be of kind
     * EOF, after which the lexer will repeatedly return the same EOF token
     * whenever called.
     */

    var Lexer = /*#__PURE__*/function () {
      /**
       * The previously focused non-ignored token.
       */

      /**
       * The currently focused non-ignored token.
       */

      /**
       * The (1-indexed) line containing the current token.
       */

      /**
       * The character offset at which the current line begins.
       */
      function Lexer(source) {
        var startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0, null);
        this.source = source;
        this.lastToken = startOfFileToken;
        this.token = startOfFileToken;
        this.line = 1;
        this.lineStart = 0;
      }
      /**
       * Advances the token stream to the next non-ignored token.
       */


      var _proto = Lexer.prototype;

      _proto.advance = function advance() {
        this.lastToken = this.token;
        var token = this.token = this.lookahead();
        return token;
      }
      /**
       * Looks ahead and returns the next non-ignored token, but does not change
       * the state of Lexer.
       */
      ;

      _proto.lookahead = function lookahead() {
        var token = this.token;

        if (token.kind !== TokenKind.EOF) {
          do {
            var _token$next;

            // Note: next is only mutable during parsing, so we cast to allow this.
            token = (_token$next = token.next) !== null && _token$next !== void 0 ? _token$next : token.next = readToken(this, token);
          } while (token.kind === TokenKind.COMMENT);
        }

        return token;
      };

      return Lexer;
    }();
    /**
     * @internal
     */

    function isPunctuatorTokenKind(kind) {
      return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
    }

    function printCharCode(code) {
      return (// NaN/undefined represents access beyond the end of the file.
        isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
        code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
        "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
      );
    }
    /**
     * Gets the next token from the source starting at the given position.
     *
     * This skips over whitespace until it finds the next lexable token, then lexes
     * punctuators immediately or calls the appropriate helper function for more
     * complicated tokens.
     */


    function readToken(lexer, prev) {
      var source = lexer.source;
      var body = source.body;
      var bodyLength = body.length;
      var pos = positionAfterWhitespace(body, prev.end, lexer);
      var line = lexer.line;
      var col = 1 + pos - lexer.lineStart;

      if (pos >= bodyLength) {
        return new Token(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
      }

      var code = body.charCodeAt(pos); // SourceCharacter

      switch (code) {
        // !
        case 33:
          return new Token(TokenKind.BANG, pos, pos + 1, line, col, prev);
        // #

        case 35:
          return readComment(source, pos, line, col, prev);
        // $

        case 36:
          return new Token(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
        // &

        case 38:
          return new Token(TokenKind.AMP, pos, pos + 1, line, col, prev);
        // (

        case 40:
          return new Token(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
        // )

        case 41:
          return new Token(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
        // .

        case 46:
          if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
            return new Token(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
          }

          break;
        // :

        case 58:
          return new Token(TokenKind.COLON, pos, pos + 1, line, col, prev);
        // =

        case 61:
          return new Token(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
        // @

        case 64:
          return new Token(TokenKind.AT, pos, pos + 1, line, col, prev);
        // [

        case 91:
          return new Token(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
        // ]

        case 93:
          return new Token(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
        // {

        case 123:
          return new Token(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
        // |

        case 124:
          return new Token(TokenKind.PIPE, pos, pos + 1, line, col, prev);
        // }

        case 125:
          return new Token(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
        // A-Z _ a-z

        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          return readName(source, pos, line, col, prev);
        // - 0-9

        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return readNumber(source, pos, code, line, col, prev);
        // "

        case 34:
          if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
            return readBlockString(source, pos, line, col, prev, lexer);
          }

          return readString(source, pos, line, col, prev);
      }

      throw syntaxError(source, pos, unexpectedCharacterMessage(code));
    }
    /**
     * Report a message that an unexpected character was encountered.
     */


    function unexpectedCharacterMessage(code) {
      if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
        return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
      }

      if (code === 39) {
        // '
        return 'Unexpected single quote character (\'), did you mean to use a double quote (")?';
      }

      return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
    }
    /**
     * Reads from body starting at startPosition until it finds a non-whitespace
     * character, then returns the position of that character for lexing.
     */


    function positionAfterWhitespace(body, startPosition, lexer) {
      var bodyLength = body.length;
      var position = startPosition;

      while (position < bodyLength) {
        var code = body.charCodeAt(position); // tab | space | comma | BOM

        if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
          ++position;
        } else if (code === 10) {
          // new line
          ++position;
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 13) {
          // carriage return
          if (body.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }

          ++lexer.line;
          lexer.lineStart = position;
        } else {
          break;
        }
      }

      return position;
    }
    /**
     * Reads a comment token from the source file.
     *
     * #[\u0009\u0020-\uFFFF]*
     */


    function readComment(source, start, line, col, prev) {
      var body = source.body;
      var code;
      var position = start;

      do {
        code = body.charCodeAt(++position);
      } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
      code > 0x001f || code === 0x0009));

      return new Token(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
    }
    /**
     * Reads a number token from the source file, either a float
     * or an int depending on whether a decimal point appears.
     *
     * Int:   -?(0|[1-9][0-9]*)
     * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
     */


    function readNumber(source, start, firstCode, line, col, prev) {
      var body = source.body;
      var code = firstCode;
      var position = start;
      var isFloat = false;

      if (code === 45) {
        // -
        code = body.charCodeAt(++position);
      }

      if (code === 48) {
        // 0
        code = body.charCodeAt(++position);

        if (code >= 48 && code <= 57) {
          throw syntaxError(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
        }
      } else {
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      }

      if (code === 46) {
        // .
        isFloat = true;
        code = body.charCodeAt(++position);
        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      }

      if (code === 69 || code === 101) {
        // E e
        isFloat = true;
        code = body.charCodeAt(++position);

        if (code === 43 || code === 45) {
          // + -
          code = body.charCodeAt(++position);
        }

        position = readDigits(source, position, code);
        code = body.charCodeAt(position);
      } // Numbers cannot be followed by . or NameStart


      if (code === 46 || isNameStart(code)) {
        throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
      }

      return new Token(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
    }
    /**
     * Returns the new position in the source after reading digits.
     */


    function readDigits(source, start, firstCode) {
      var body = source.body;
      var position = start;
      var code = firstCode;

      if (code >= 48 && code <= 57) {
        // 0 - 9
        do {
          code = body.charCodeAt(++position);
        } while (code >= 48 && code <= 57); // 0 - 9


        return position;
      }

      throw syntaxError(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
    }
    /**
     * Reads a string token from the source file.
     *
     * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
     */


    function readString(source, start, line, col, prev) {
      var body = source.body;
      var position = start + 1;
      var chunkStart = position;
      var code = 0;
      var value = '';

      while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
      code !== 0x000a && code !== 0x000d) {
        // Closing Quote (")
        if (code === 34) {
          value += body.slice(chunkStart, position);
          return new Token(TokenKind.STRING, start, position + 1, line, col, prev, value);
        } // SourceCharacter


        if (code < 0x0020 && code !== 0x0009) {
          throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        }

        ++position;

        if (code === 92) {
          // \
          value += body.slice(chunkStart, position - 1);
          code = body.charCodeAt(position);

          switch (code) {
            case 34:
              value += '"';
              break;

            case 47:
              value += '/';
              break;

            case 92:
              value += '\\';
              break;

            case 98:
              value += '\b';
              break;

            case 102:
              value += '\f';
              break;

            case 110:
              value += '\n';
              break;

            case 114:
              value += '\r';
              break;

            case 116:
              value += '\t';
              break;

            case 117:
              {
                // uXXXX
                var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

                if (charCode < 0) {
                  var invalidSequence = body.slice(position + 1, position + 5);
                  throw syntaxError(source, position, "Invalid character escape sequence: \\u".concat(invalidSequence, "."));
                }

                value += String.fromCharCode(charCode);
                position += 4;
                break;
              }

            default:
              throw syntaxError(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
          }

          ++position;
          chunkStart = position;
        }
      }

      throw syntaxError(source, position, 'Unterminated string.');
    }
    /**
     * Reads a block string token from the source file.
     *
     * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
     */


    function readBlockString(source, start, line, col, prev, lexer) {
      var body = source.body;
      var position = start + 3;
      var chunkStart = position;
      var code = 0;
      var rawValue = '';

      while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
        // Closing Triple-Quote (""")
        if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          rawValue += body.slice(chunkStart, position);
          return new Token(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, dedentBlockStringValue(rawValue));
        } // SourceCharacter


        if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
          throw syntaxError(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
        }

        if (code === 10) {
          // new line
          ++position;
          ++lexer.line;
          lexer.lineStart = position;
        } else if (code === 13) {
          // carriage return
          if (body.charCodeAt(position + 1) === 10) {
            position += 2;
          } else {
            ++position;
          }

          ++lexer.line;
          lexer.lineStart = position;
        } else if ( // Escape Triple-Quote (\""")
        code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
          rawValue += body.slice(chunkStart, position) + '"""';
          position += 4;
          chunkStart = position;
        } else {
          ++position;
        }
      }

      throw syntaxError(source, position, 'Unterminated string.');
    }
    /**
     * Converts four hexadecimal chars to the integer that the
     * string represents. For example, uniCharCode('0','0','0','f')
     * will return 15, and uniCharCode('0','0','f','f') returns 255.
     *
     * Returns a negative number on error, if a char was invalid.
     *
     * This is implemented by noting that char2hex() returns -1 on error,
     * which means the result of ORing the char2hex() will also be negative.
     */


    function uniCharCode(a, b, c, d) {
      return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
    }
    /**
     * Converts a hex character to its integer value.
     * '0' becomes 0, '9' becomes 9
     * 'A' becomes 10, 'F' becomes 15
     * 'a' becomes 10, 'f' becomes 15
     *
     * Returns -1 on error.
     */


    function char2hex(a) {
      return a >= 48 && a <= 57 ? a - 48 // 0-9
      : a >= 65 && a <= 70 ? a - 55 // A-F
      : a >= 97 && a <= 102 ? a - 87 // a-f
      : -1;
    }
    /**
     * Reads an alphanumeric + underscore name from the source.
     *
     * [_A-Za-z][_0-9A-Za-z]*
     */


    function readName(source, start, line, col, prev) {
      var body = source.body;
      var bodyLength = body.length;
      var position = start + 1;
      var code = 0;

      while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
      code >= 48 && code <= 57 || // 0-9
      code >= 65 && code <= 90 || // A-Z
      code >= 97 && code <= 122) // a-z
      ) {
        ++position;
      }

      return new Token(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
    } // _ A-Z a-z


    function isNameStart(code) {
      return code === 95 || code >= 65 && code <= 90 || code >= 97 && code <= 122;
    }

    /**
     * Configuration options to control parser behavior
     */

    /**
     * Given a GraphQL source, parses it into a Document.
     * Throws GraphQLError if a syntax error is encountered.
     */
    function parse(source, options) {
      var parser = new Parser(source, options);
      return parser.parseDocument();
    }

    var Parser = /*#__PURE__*/function () {
      function Parser(source, options) {
        var sourceObj = typeof source === 'string' ? new Source(source) : source;
        sourceObj instanceof Source || devAssert(0, "Must provide Source. Received: ".concat(inspect(sourceObj), "."));
        this._lexer = new Lexer(sourceObj);
        this._options = options;
      }
      /**
       * Converts a name lex token into a name parse node.
       */


      var _proto = Parser.prototype;

      _proto.parseName = function parseName() {
        var token = this.expectToken(TokenKind.NAME);
        return {
          kind: Kind.NAME,
          value: token.value,
          loc: this.loc(token)
        };
      } // Implements the parsing rules in the Document section.

      /**
       * Document : Definition+
       */
      ;

      _proto.parseDocument = function parseDocument() {
        var start = this._lexer.token;
        return {
          kind: Kind.DOCUMENT,
          definitions: this.many(TokenKind.SOF, this.parseDefinition, TokenKind.EOF),
          loc: this.loc(start)
        };
      }
      /**
       * Definition :
       *   - ExecutableDefinition
       *   - TypeSystemDefinition
       *   - TypeSystemExtension
       *
       * ExecutableDefinition :
       *   - OperationDefinition
       *   - FragmentDefinition
       */
      ;

      _proto.parseDefinition = function parseDefinition() {
        if (this.peek(TokenKind.NAME)) {
          switch (this._lexer.token.value) {
            case 'query':
            case 'mutation':
            case 'subscription':
              return this.parseOperationDefinition();

            case 'fragment':
              return this.parseFragmentDefinition();

            case 'schema':
            case 'scalar':
            case 'type':
            case 'interface':
            case 'union':
            case 'enum':
            case 'input':
            case 'directive':
              return this.parseTypeSystemDefinition();

            case 'extend':
              return this.parseTypeSystemExtension();
          }
        } else if (this.peek(TokenKind.BRACE_L)) {
          return this.parseOperationDefinition();
        } else if (this.peekDescription()) {
          return this.parseTypeSystemDefinition();
        }

        throw this.unexpected();
      } // Implements the parsing rules in the Operations section.

      /**
       * OperationDefinition :
       *  - SelectionSet
       *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
       */
      ;

      _proto.parseOperationDefinition = function parseOperationDefinition() {
        var start = this._lexer.token;

        if (this.peek(TokenKind.BRACE_L)) {
          return {
            kind: Kind.OPERATION_DEFINITION,
            operation: 'query',
            name: undefined,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        }

        var operation = this.parseOperationType();
        var name;

        if (this.peek(TokenKind.NAME)) {
          name = this.parseName();
        }

        return {
          kind: Kind.OPERATION_DEFINITION,
          operation: operation,
          name: name,
          variableDefinitions: this.parseVariableDefinitions(),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      }
      /**
       * OperationType : one of query mutation subscription
       */
      ;

      _proto.parseOperationType = function parseOperationType() {
        var operationToken = this.expectToken(TokenKind.NAME);

        switch (operationToken.value) {
          case 'query':
            return 'query';

          case 'mutation':
            return 'mutation';

          case 'subscription':
            return 'subscription';
        }

        throw this.unexpected(operationToken);
      }
      /**
       * VariableDefinitions : ( VariableDefinition+ )
       */
      ;

      _proto.parseVariableDefinitions = function parseVariableDefinitions() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseVariableDefinition, TokenKind.PAREN_R);
      }
      /**
       * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
       */
      ;

      _proto.parseVariableDefinition = function parseVariableDefinition() {
        var start = this._lexer.token;
        return {
          kind: Kind.VARIABLE_DEFINITION,
          variable: this.parseVariable(),
          type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
          defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseValueLiteral(true) : undefined,
          directives: this.parseDirectives(true),
          loc: this.loc(start)
        };
      }
      /**
       * Variable : $ Name
       */
      ;

      _proto.parseVariable = function parseVariable() {
        var start = this._lexer.token;
        this.expectToken(TokenKind.DOLLAR);
        return {
          kind: Kind.VARIABLE,
          name: this.parseName(),
          loc: this.loc(start)
        };
      }
      /**
       * SelectionSet : { Selection+ }
       */
      ;

      _proto.parseSelectionSet = function parseSelectionSet() {
        var start = this._lexer.token;
        return {
          kind: Kind.SELECTION_SET,
          selections: this.many(TokenKind.BRACE_L, this.parseSelection, TokenKind.BRACE_R),
          loc: this.loc(start)
        };
      }
      /**
       * Selection :
       *   - Field
       *   - FragmentSpread
       *   - InlineFragment
       */
      ;

      _proto.parseSelection = function parseSelection() {
        return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
      }
      /**
       * Field : Alias? Name Arguments? Directives? SelectionSet?
       *
       * Alias : Name :
       */
      ;

      _proto.parseField = function parseField() {
        var start = this._lexer.token;
        var nameOrAlias = this.parseName();
        var alias;
        var name;

        if (this.expectOptionalToken(TokenKind.COLON)) {
          alias = nameOrAlias;
          name = this.parseName();
        } else {
          name = nameOrAlias;
        }

        return {
          kind: Kind.FIELD,
          alias: alias,
          name: name,
          arguments: this.parseArguments(false),
          directives: this.parseDirectives(false),
          selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : undefined,
          loc: this.loc(start)
        };
      }
      /**
       * Arguments[Const] : ( Argument[?Const]+ )
       */
      ;

      _proto.parseArguments = function parseArguments(isConst) {
        var item = isConst ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
      }
      /**
       * Argument[Const] : Name : Value[?Const]
       */
      ;

      _proto.parseArgument = function parseArgument() {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return {
          kind: Kind.ARGUMENT,
          name: name,
          value: this.parseValueLiteral(false),
          loc: this.loc(start)
        };
      };

      _proto.parseConstArgument = function parseConstArgument() {
        var start = this._lexer.token;
        return {
          kind: Kind.ARGUMENT,
          name: this.parseName(),
          value: (this.expectToken(TokenKind.COLON), this.parseValueLiteral(true)),
          loc: this.loc(start)
        };
      } // Implements the parsing rules in the Fragments section.

      /**
       * Corresponds to both FragmentSpread and InlineFragment in the spec.
       *
       * FragmentSpread : ... FragmentName Directives?
       *
       * InlineFragment : ... TypeCondition? Directives? SelectionSet
       */
      ;

      _proto.parseFragment = function parseFragment() {
        var start = this._lexer.token;
        this.expectToken(TokenKind.SPREAD);
        var hasTypeCondition = this.expectOptionalKeyword('on');

        if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
          return {
            kind: Kind.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(false),
            loc: this.loc(start)
          };
        }

        return {
          kind: Kind.INLINE_FRAGMENT,
          typeCondition: hasTypeCondition ? this.parseNamedType() : undefined,
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      }
      /**
       * FragmentDefinition :
       *   - fragment FragmentName on TypeCondition Directives? SelectionSet
       *
       * TypeCondition : NamedType
       */
      ;

      _proto.parseFragmentDefinition = function parseFragmentDefinition() {
        var _this$_options;

        var start = this._lexer.token;
        this.expectKeyword('fragment'); // Experimental support for defining variables within fragments changes
        // the grammar of FragmentDefinition:
        //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

        if (((_this$_options = this._options) === null || _this$_options === void 0 ? void 0 : _this$_options.experimentalFragmentVariables) === true) {
          return {
            kind: Kind.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
            directives: this.parseDirectives(false),
            selectionSet: this.parseSelectionSet(),
            loc: this.loc(start)
          };
        }

        return {
          kind: Kind.FRAGMENT_DEFINITION,
          name: this.parseFragmentName(),
          typeCondition: (this.expectKeyword('on'), this.parseNamedType()),
          directives: this.parseDirectives(false),
          selectionSet: this.parseSelectionSet(),
          loc: this.loc(start)
        };
      }
      /**
       * FragmentName : Name but not `on`
       */
      ;

      _proto.parseFragmentName = function parseFragmentName() {
        if (this._lexer.token.value === 'on') {
          throw this.unexpected();
        }

        return this.parseName();
      } // Implements the parsing rules in the Values section.

      /**
       * Value[Const] :
       *   - [~Const] Variable
       *   - IntValue
       *   - FloatValue
       *   - StringValue
       *   - BooleanValue
       *   - NullValue
       *   - EnumValue
       *   - ListValue[?Const]
       *   - ObjectValue[?Const]
       *
       * BooleanValue : one of `true` `false`
       *
       * NullValue : `null`
       *
       * EnumValue : Name but not `true`, `false` or `null`
       */
      ;

      _proto.parseValueLiteral = function parseValueLiteral(isConst) {
        var token = this._lexer.token;

        switch (token.kind) {
          case TokenKind.BRACKET_L:
            return this.parseList(isConst);

          case TokenKind.BRACE_L:
            return this.parseObject(isConst);

          case TokenKind.INT:
            this._lexer.advance();

            return {
              kind: Kind.INT,
              value: token.value,
              loc: this.loc(token)
            };

          case TokenKind.FLOAT:
            this._lexer.advance();

            return {
              kind: Kind.FLOAT,
              value: token.value,
              loc: this.loc(token)
            };

          case TokenKind.STRING:
          case TokenKind.BLOCK_STRING:
            return this.parseStringLiteral();

          case TokenKind.NAME:
            this._lexer.advance();

            switch (token.value) {
              case 'true':
                return {
                  kind: Kind.BOOLEAN,
                  value: true,
                  loc: this.loc(token)
                };

              case 'false':
                return {
                  kind: Kind.BOOLEAN,
                  value: false,
                  loc: this.loc(token)
                };

              case 'null':
                return {
                  kind: Kind.NULL,
                  loc: this.loc(token)
                };

              default:
                return {
                  kind: Kind.ENUM,
                  value: token.value,
                  loc: this.loc(token)
                };
            }

          case TokenKind.DOLLAR:
            if (!isConst) {
              return this.parseVariable();
            }

            break;
        }

        throw this.unexpected();
      };

      _proto.parseStringLiteral = function parseStringLiteral() {
        var token = this._lexer.token;

        this._lexer.advance();

        return {
          kind: Kind.STRING,
          value: token.value,
          block: token.kind === TokenKind.BLOCK_STRING,
          loc: this.loc(token)
        };
      }
      /**
       * ListValue[Const] :
       *   - [ ]
       *   - [ Value[?Const]+ ]
       */
      ;

      _proto.parseList = function parseList(isConst) {
        var _this = this;

        var start = this._lexer.token;

        var item = function item() {
          return _this.parseValueLiteral(isConst);
        };

        return {
          kind: Kind.LIST,
          values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R),
          loc: this.loc(start)
        };
      }
      /**
       * ObjectValue[Const] :
       *   - { }
       *   - { ObjectField[?Const]+ }
       */
      ;

      _proto.parseObject = function parseObject(isConst) {
        var _this2 = this;

        var start = this._lexer.token;

        var item = function item() {
          return _this2.parseObjectField(isConst);
        };

        return {
          kind: Kind.OBJECT,
          fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R),
          loc: this.loc(start)
        };
      }
      /**
       * ObjectField[Const] : Name : Value[?Const]
       */
      ;

      _proto.parseObjectField = function parseObjectField(isConst) {
        var start = this._lexer.token;
        var name = this.parseName();
        this.expectToken(TokenKind.COLON);
        return {
          kind: Kind.OBJECT_FIELD,
          name: name,
          value: this.parseValueLiteral(isConst),
          loc: this.loc(start)
        };
      } // Implements the parsing rules in the Directives section.

      /**
       * Directives[Const] : Directive[?Const]+
       */
      ;

      _proto.parseDirectives = function parseDirectives(isConst) {
        var directives = [];

        while (this.peek(TokenKind.AT)) {
          directives.push(this.parseDirective(isConst));
        }

        return directives;
      }
      /**
       * Directive[Const] : @ Name Arguments[?Const]?
       */
      ;

      _proto.parseDirective = function parseDirective(isConst) {
        var start = this._lexer.token;
        this.expectToken(TokenKind.AT);
        return {
          kind: Kind.DIRECTIVE,
          name: this.parseName(),
          arguments: this.parseArguments(isConst),
          loc: this.loc(start)
        };
      } // Implements the parsing rules in the Types section.

      /**
       * Type :
       *   - NamedType
       *   - ListType
       *   - NonNullType
       */
      ;

      _proto.parseTypeReference = function parseTypeReference() {
        var start = this._lexer.token;
        var type;

        if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
          type = this.parseTypeReference();
          this.expectToken(TokenKind.BRACKET_R);
          type = {
            kind: Kind.LIST_TYPE,
            type: type,
            loc: this.loc(start)
          };
        } else {
          type = this.parseNamedType();
        }

        if (this.expectOptionalToken(TokenKind.BANG)) {
          return {
            kind: Kind.NON_NULL_TYPE,
            type: type,
            loc: this.loc(start)
          };
        }

        return type;
      }
      /**
       * NamedType : Name
       */
      ;

      _proto.parseNamedType = function parseNamedType() {
        var start = this._lexer.token;
        return {
          kind: Kind.NAMED_TYPE,
          name: this.parseName(),
          loc: this.loc(start)
        };
      } // Implements the parsing rules in the Type Definition section.

      /**
       * TypeSystemDefinition :
       *   - SchemaDefinition
       *   - TypeDefinition
       *   - DirectiveDefinition
       *
       * TypeDefinition :
       *   - ScalarTypeDefinition
       *   - ObjectTypeDefinition
       *   - InterfaceTypeDefinition
       *   - UnionTypeDefinition
       *   - EnumTypeDefinition
       *   - InputObjectTypeDefinition
       */
      ;

      _proto.parseTypeSystemDefinition = function parseTypeSystemDefinition() {
        // Many definitions begin with a description and require a lookahead.
        var keywordToken = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;

        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case 'schema':
              return this.parseSchemaDefinition();

            case 'scalar':
              return this.parseScalarTypeDefinition();

            case 'type':
              return this.parseObjectTypeDefinition();

            case 'interface':
              return this.parseInterfaceTypeDefinition();

            case 'union':
              return this.parseUnionTypeDefinition();

            case 'enum':
              return this.parseEnumTypeDefinition();

            case 'input':
              return this.parseInputObjectTypeDefinition();

            case 'directive':
              return this.parseDirectiveDefinition();
          }
        }

        throw this.unexpected(keywordToken);
      };

      _proto.peekDescription = function peekDescription() {
        return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
      }
      /**
       * Description : StringValue
       */
      ;

      _proto.parseDescription = function parseDescription() {
        if (this.peekDescription()) {
          return this.parseStringLiteral();
        }
      }
      /**
       * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
       */
      ;

      _proto.parseSchemaDefinition = function parseSchemaDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('schema');
        var directives = this.parseDirectives(true);
        var operationTypes = this.many(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);
        return {
          kind: Kind.SCHEMA_DEFINITION,
          description: description,
          directives: directives,
          operationTypes: operationTypes,
          loc: this.loc(start)
        };
      }
      /**
       * OperationTypeDefinition : OperationType : NamedType
       */
      ;

      _proto.parseOperationTypeDefinition = function parseOperationTypeDefinition() {
        var start = this._lexer.token;
        var operation = this.parseOperationType();
        this.expectToken(TokenKind.COLON);
        var type = this.parseNamedType();
        return {
          kind: Kind.OPERATION_TYPE_DEFINITION,
          operation: operation,
          type: type,
          loc: this.loc(start)
        };
      }
      /**
       * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
       */
      ;

      _proto.parseScalarTypeDefinition = function parseScalarTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('scalar');
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
          kind: Kind.SCALAR_TYPE_DEFINITION,
          description: description,
          name: name,
          directives: directives,
          loc: this.loc(start)
        };
      }
      /**
       * ObjectTypeDefinition :
       *   Description?
       *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
       */
      ;

      _proto.parseObjectTypeDefinition = function parseObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('type');
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
          kind: Kind.OBJECT_TYPE_DEFINITION,
          description: description,
          name: name,
          interfaces: interfaces,
          directives: directives,
          fields: fields,
          loc: this.loc(start)
        };
      }
      /**
       * ImplementsInterfaces :
       *   - implements `&`? NamedType
       *   - ImplementsInterfaces & NamedType
       */
      ;

      _proto.parseImplementsInterfaces = function parseImplementsInterfaces() {
        var types = [];

        if (this.expectOptionalKeyword('implements')) {
          // Optional leading ampersand
          this.expectOptionalToken(TokenKind.AMP);

          do {
            var _this$_options2;

            types.push(this.parseNamedType());
          } while (this.expectOptionalToken(TokenKind.AMP) || // Legacy support for the SDL?
          ((_this$_options2 = this._options) === null || _this$_options2 === void 0 ? void 0 : _this$_options2.allowLegacySDLImplementsInterfaces) === true && this.peek(TokenKind.NAME));
        }

        return types;
      }
      /**
       * FieldsDefinition : { FieldDefinition+ }
       */
      ;

      _proto.parseFieldsDefinition = function parseFieldsDefinition() {
        var _this$_options3;

        // Legacy support for the SDL?
        if (((_this$_options3 = this._options) === null || _this$_options3 === void 0 ? void 0 : _this$_options3.allowLegacySDLEmptyFields) === true && this.peek(TokenKind.BRACE_L) && this._lexer.lookahead().kind === TokenKind.BRACE_R) {
          this._lexer.advance();

          this._lexer.advance();

          return [];
        }

        return this.optionalMany(TokenKind.BRACE_L, this.parseFieldDefinition, TokenKind.BRACE_R);
      }
      /**
       * FieldDefinition :
       *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
       */
      ;

      _proto.parseFieldDefinition = function parseFieldDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        this.expectToken(TokenKind.COLON);
        var type = this.parseTypeReference();
        var directives = this.parseDirectives(true);
        return {
          kind: Kind.FIELD_DEFINITION,
          description: description,
          name: name,
          arguments: args,
          type: type,
          directives: directives,
          loc: this.loc(start)
        };
      }
      /**
       * ArgumentsDefinition : ( InputValueDefinition+ )
       */
      ;

      _proto.parseArgumentDefs = function parseArgumentDefs() {
        return this.optionalMany(TokenKind.PAREN_L, this.parseInputValueDef, TokenKind.PAREN_R);
      }
      /**
       * InputValueDefinition :
       *   - Description? Name : Type DefaultValue? Directives[Const]?
       */
      ;

      _proto.parseInputValueDef = function parseInputValueDef() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        this.expectToken(TokenKind.COLON);
        var type = this.parseTypeReference();
        var defaultValue;

        if (this.expectOptionalToken(TokenKind.EQUALS)) {
          defaultValue = this.parseValueLiteral(true);
        }

        var directives = this.parseDirectives(true);
        return {
          kind: Kind.INPUT_VALUE_DEFINITION,
          description: description,
          name: name,
          type: type,
          defaultValue: defaultValue,
          directives: directives,
          loc: this.loc(start)
        };
      }
      /**
       * InterfaceTypeDefinition :
       *   - Description? interface Name Directives[Const]? FieldsDefinition?
       */
      ;

      _proto.parseInterfaceTypeDefinition = function parseInterfaceTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('interface');
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();
        return {
          kind: Kind.INTERFACE_TYPE_DEFINITION,
          description: description,
          name: name,
          interfaces: interfaces,
          directives: directives,
          fields: fields,
          loc: this.loc(start)
        };
      }
      /**
       * UnionTypeDefinition :
       *   - Description? union Name Directives[Const]? UnionMemberTypes?
       */
      ;

      _proto.parseUnionTypeDefinition = function parseUnionTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('union');
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();
        return {
          kind: Kind.UNION_TYPE_DEFINITION,
          description: description,
          name: name,
          directives: directives,
          types: types,
          loc: this.loc(start)
        };
      }
      /**
       * UnionMemberTypes :
       *   - = `|`? NamedType
       *   - UnionMemberTypes | NamedType
       */
      ;

      _proto.parseUnionMemberTypes = function parseUnionMemberTypes() {
        var types = [];

        if (this.expectOptionalToken(TokenKind.EQUALS)) {
          // Optional leading pipe
          this.expectOptionalToken(TokenKind.PIPE);

          do {
            types.push(this.parseNamedType());
          } while (this.expectOptionalToken(TokenKind.PIPE));
        }

        return types;
      }
      /**
       * EnumTypeDefinition :
       *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
       */
      ;

      _proto.parseEnumTypeDefinition = function parseEnumTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('enum');
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();
        return {
          kind: Kind.ENUM_TYPE_DEFINITION,
          description: description,
          name: name,
          directives: directives,
          values: values,
          loc: this.loc(start)
        };
      }
      /**
       * EnumValuesDefinition : { EnumValueDefinition+ }
       */
      ;

      _proto.parseEnumValuesDefinition = function parseEnumValuesDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseEnumValueDefinition, TokenKind.BRACE_R);
      }
      /**
       * EnumValueDefinition : Description? EnumValue Directives[Const]?
       *
       * EnumValue : Name
       */
      ;

      _proto.parseEnumValueDefinition = function parseEnumValueDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        return {
          kind: Kind.ENUM_VALUE_DEFINITION,
          description: description,
          name: name,
          directives: directives,
          loc: this.loc(start)
        };
      }
      /**
       * InputObjectTypeDefinition :
       *   - Description? input Name Directives[Const]? InputFieldsDefinition?
       */
      ;

      _proto.parseInputObjectTypeDefinition = function parseInputObjectTypeDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('input');
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();
        return {
          kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
          description: description,
          name: name,
          directives: directives,
          fields: fields,
          loc: this.loc(start)
        };
      }
      /**
       * InputFieldsDefinition : { InputValueDefinition+ }
       */
      ;

      _proto.parseInputFieldsDefinition = function parseInputFieldsDefinition() {
        return this.optionalMany(TokenKind.BRACE_L, this.parseInputValueDef, TokenKind.BRACE_R);
      }
      /**
       * TypeSystemExtension :
       *   - SchemaExtension
       *   - TypeExtension
       *
       * TypeExtension :
       *   - ScalarTypeExtension
       *   - ObjectTypeExtension
       *   - InterfaceTypeExtension
       *   - UnionTypeExtension
       *   - EnumTypeExtension
       *   - InputObjectTypeDefinition
       */
      ;

      _proto.parseTypeSystemExtension = function parseTypeSystemExtension() {
        var keywordToken = this._lexer.lookahead();

        if (keywordToken.kind === TokenKind.NAME) {
          switch (keywordToken.value) {
            case 'schema':
              return this.parseSchemaExtension();

            case 'scalar':
              return this.parseScalarTypeExtension();

            case 'type':
              return this.parseObjectTypeExtension();

            case 'interface':
              return this.parseInterfaceTypeExtension();

            case 'union':
              return this.parseUnionTypeExtension();

            case 'enum':
              return this.parseEnumTypeExtension();

            case 'input':
              return this.parseInputObjectTypeExtension();
          }
        }

        throw this.unexpected(keywordToken);
      }
      /**
       * SchemaExtension :
       *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
       *  - extend schema Directives[Const]
       */
      ;

      _proto.parseSchemaExtension = function parseSchemaExtension() {
        var start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('schema');
        var directives = this.parseDirectives(true);
        var operationTypes = this.optionalMany(TokenKind.BRACE_L, this.parseOperationTypeDefinition, TokenKind.BRACE_R);

        if (directives.length === 0 && operationTypes.length === 0) {
          throw this.unexpected();
        }

        return {
          kind: Kind.SCHEMA_EXTENSION,
          directives: directives,
          operationTypes: operationTypes,
          loc: this.loc(start)
        };
      }
      /**
       * ScalarTypeExtension :
       *   - extend scalar Name Directives[Const]
       */
      ;

      _proto.parseScalarTypeExtension = function parseScalarTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('scalar');
        var name = this.parseName();
        var directives = this.parseDirectives(true);

        if (directives.length === 0) {
          throw this.unexpected();
        }

        return {
          kind: Kind.SCALAR_TYPE_EXTENSION,
          name: name,
          directives: directives,
          loc: this.loc(start)
        };
      }
      /**
       * ObjectTypeExtension :
       *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
       *  - extend type Name ImplementsInterfaces? Directives[Const]
       *  - extend type Name ImplementsInterfaces
       */
      ;

      _proto.parseObjectTypeExtension = function parseObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('type');
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();

        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }

        return {
          kind: Kind.OBJECT_TYPE_EXTENSION,
          name: name,
          interfaces: interfaces,
          directives: directives,
          fields: fields,
          loc: this.loc(start)
        };
      }
      /**
       * InterfaceTypeExtension :
       *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
       *  - extend interface Name ImplementsInterfaces? Directives[Const]
       *  - extend interface Name ImplementsInterfaces
       */
      ;

      _proto.parseInterfaceTypeExtension = function parseInterfaceTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('interface');
        var name = this.parseName();
        var interfaces = this.parseImplementsInterfaces();
        var directives = this.parseDirectives(true);
        var fields = this.parseFieldsDefinition();

        if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }

        return {
          kind: Kind.INTERFACE_TYPE_EXTENSION,
          name: name,
          interfaces: interfaces,
          directives: directives,
          fields: fields,
          loc: this.loc(start)
        };
      }
      /**
       * UnionTypeExtension :
       *   - extend union Name Directives[Const]? UnionMemberTypes
       *   - extend union Name Directives[Const]
       */
      ;

      _proto.parseUnionTypeExtension = function parseUnionTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('union');
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var types = this.parseUnionMemberTypes();

        if (directives.length === 0 && types.length === 0) {
          throw this.unexpected();
        }

        return {
          kind: Kind.UNION_TYPE_EXTENSION,
          name: name,
          directives: directives,
          types: types,
          loc: this.loc(start)
        };
      }
      /**
       * EnumTypeExtension :
       *   - extend enum Name Directives[Const]? EnumValuesDefinition
       *   - extend enum Name Directives[Const]
       */
      ;

      _proto.parseEnumTypeExtension = function parseEnumTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('enum');
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var values = this.parseEnumValuesDefinition();

        if (directives.length === 0 && values.length === 0) {
          throw this.unexpected();
        }

        return {
          kind: Kind.ENUM_TYPE_EXTENSION,
          name: name,
          directives: directives,
          values: values,
          loc: this.loc(start)
        };
      }
      /**
       * InputObjectTypeExtension :
       *   - extend input Name Directives[Const]? InputFieldsDefinition
       *   - extend input Name Directives[Const]
       */
      ;

      _proto.parseInputObjectTypeExtension = function parseInputObjectTypeExtension() {
        var start = this._lexer.token;
        this.expectKeyword('extend');
        this.expectKeyword('input');
        var name = this.parseName();
        var directives = this.parseDirectives(true);
        var fields = this.parseInputFieldsDefinition();

        if (directives.length === 0 && fields.length === 0) {
          throw this.unexpected();
        }

        return {
          kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
          name: name,
          directives: directives,
          fields: fields,
          loc: this.loc(start)
        };
      }
      /**
       * DirectiveDefinition :
       *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
       */
      ;

      _proto.parseDirectiveDefinition = function parseDirectiveDefinition() {
        var start = this._lexer.token;
        var description = this.parseDescription();
        this.expectKeyword('directive');
        this.expectToken(TokenKind.AT);
        var name = this.parseName();
        var args = this.parseArgumentDefs();
        var repeatable = this.expectOptionalKeyword('repeatable');
        this.expectKeyword('on');
        var locations = this.parseDirectiveLocations();
        return {
          kind: Kind.DIRECTIVE_DEFINITION,
          description: description,
          name: name,
          arguments: args,
          repeatable: repeatable,
          locations: locations,
          loc: this.loc(start)
        };
      }
      /**
       * DirectiveLocations :
       *   - `|`? DirectiveLocation
       *   - DirectiveLocations | DirectiveLocation
       */
      ;

      _proto.parseDirectiveLocations = function parseDirectiveLocations() {
        // Optional leading pipe
        this.expectOptionalToken(TokenKind.PIPE);
        var locations = [];

        do {
          locations.push(this.parseDirectiveLocation());
        } while (this.expectOptionalToken(TokenKind.PIPE));

        return locations;
      }
      /*
       * DirectiveLocation :
       *   - ExecutableDirectiveLocation
       *   - TypeSystemDirectiveLocation
       *
       * ExecutableDirectiveLocation : one of
       *   `QUERY`
       *   `MUTATION`
       *   `SUBSCRIPTION`
       *   `FIELD`
       *   `FRAGMENT_DEFINITION`
       *   `FRAGMENT_SPREAD`
       *   `INLINE_FRAGMENT`
       *
       * TypeSystemDirectiveLocation : one of
       *   `SCHEMA`
       *   `SCALAR`
       *   `OBJECT`
       *   `FIELD_DEFINITION`
       *   `ARGUMENT_DEFINITION`
       *   `INTERFACE`
       *   `UNION`
       *   `ENUM`
       *   `ENUM_VALUE`
       *   `INPUT_OBJECT`
       *   `INPUT_FIELD_DEFINITION`
       */
      ;

      _proto.parseDirectiveLocation = function parseDirectiveLocation() {
        var start = this._lexer.token;
        var name = this.parseName();

        if (DirectiveLocation[name.value] !== undefined) {
          return name;
        }

        throw this.unexpected(start);
      } // Core parsing utility functions

      /**
       * Returns a location object, used to identify the place in
       * the source that created a given parsed object.
       */
      ;

      _proto.loc = function loc(startToken) {
        var _this$_options4;

        if (((_this$_options4 = this._options) === null || _this$_options4 === void 0 ? void 0 : _this$_options4.noLocation) !== true) {
          return new Location(startToken, this._lexer.lastToken, this._lexer.source);
        }
      }
      /**
       * Determines if the next token is of a given kind
       */
      ;

      _proto.peek = function peek(kind) {
        return this._lexer.token.kind === kind;
      }
      /**
       * If the next token is of the given kind, return that token after advancing
       * the lexer. Otherwise, do not change the parser state and throw an error.
       */
      ;

      _proto.expectToken = function expectToken(kind) {
        var token = this._lexer.token;

        if (token.kind === kind) {
          this._lexer.advance();

          return token;
        }

        throw syntaxError(this._lexer.source, token.start, "Expected ".concat(getTokenKindDesc(kind), ", found ").concat(getTokenDesc(token), "."));
      }
      /**
       * If the next token is of the given kind, return that token after advancing
       * the lexer. Otherwise, do not change the parser state and return undefined.
       */
      ;

      _proto.expectOptionalToken = function expectOptionalToken(kind) {
        var token = this._lexer.token;

        if (token.kind === kind) {
          this._lexer.advance();

          return token;
        }

        return undefined;
      }
      /**
       * If the next token is a given keyword, advance the lexer.
       * Otherwise, do not change the parser state and throw an error.
       */
      ;

      _proto.expectKeyword = function expectKeyword(value) {
        var token = this._lexer.token;

        if (token.kind === TokenKind.NAME && token.value === value) {
          this._lexer.advance();
        } else {
          throw syntaxError(this._lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat(getTokenDesc(token), "."));
        }
      }
      /**
       * If the next token is a given keyword, return "true" after advancing
       * the lexer. Otherwise, do not change the parser state and return "false".
       */
      ;

      _proto.expectOptionalKeyword = function expectOptionalKeyword(value) {
        var token = this._lexer.token;

        if (token.kind === TokenKind.NAME && token.value === value) {
          this._lexer.advance();

          return true;
        }

        return false;
      }
      /**
       * Helper function for creating an error when an unexpected lexed token
       * is encountered.
       */
      ;

      _proto.unexpected = function unexpected(atToken) {
        var token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
        return syntaxError(this._lexer.source, token.start, "Unexpected ".concat(getTokenDesc(token), "."));
      }
      /**
       * Returns a possibly empty list of parse nodes, determined by
       * the parseFn. This list begins with a lex token of openKind
       * and ends with a lex token of closeKind. Advances the parser
       * to the next lex token after the closing token.
       */
      ;

      _proto.any = function any(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];

        while (!this.expectOptionalToken(closeKind)) {
          nodes.push(parseFn.call(this));
        }

        return nodes;
      }
      /**
       * Returns a list of parse nodes, determined by the parseFn.
       * It can be empty only if open token is missing otherwise it will always
       * return non-empty list that begins with a lex token of openKind and ends
       * with a lex token of closeKind. Advances the parser to the next lex token
       * after the closing token.
       */
      ;

      _proto.optionalMany = function optionalMany(openKind, parseFn, closeKind) {
        if (this.expectOptionalToken(openKind)) {
          var nodes = [];

          do {
            nodes.push(parseFn.call(this));
          } while (!this.expectOptionalToken(closeKind));

          return nodes;
        }

        return [];
      }
      /**
       * Returns a non-empty list of parse nodes, determined by
       * the parseFn. This list begins with a lex token of openKind
       * and ends with a lex token of closeKind. Advances the parser
       * to the next lex token after the closing token.
       */
      ;

      _proto.many = function many(openKind, parseFn, closeKind) {
        this.expectToken(openKind);
        var nodes = [];

        do {
          nodes.push(parseFn.call(this));
        } while (!this.expectOptionalToken(closeKind));

        return nodes;
      };

      return Parser;
    }();
    /**
     * A helper function to describe a token as a string for debugging
     */


    function getTokenDesc(token) {
      var value = token.value;
      return getTokenKindDesc(token.kind) + (value != null ? " \"".concat(value, "\"") : '');
    }
    /**
     * A helper function to describe a token kind as a string for debugging
     */


    function getTokenKindDesc(kind) {
      return isPunctuatorTokenKind(kind) ? "\"".concat(kind, "\"") : kind;
    }

    var Icon=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=propTypes.exports;},function(e,t){e.exports=react.exports;},function(e,t,r){r.r(t);var n=r(1),o=r(0),l=function(){return (l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);}return r},a=0,s=n.forwardRef((function(e,t){var r=e.title,o=void 0===r?null:r,s=e.description,c=void 0===s?null:s,u=e.size,p=void 0===u?null:u,f=e.color,d=void 0===f?"currentColor":f,y=e.horizontal,v=void 0===y?null:y,b=e.vertical,m=void 0===b?null:b,h=e.rotate,g=void 0===h?null:h,O=e.spin,w=void 0===O?null:O,j=e.style,z=void 0===j?{}:j,E=e.children,P=i(e,["title","description","size","color","horizontal","vertical","rotate","spin","style","children"]);a++;var S,x=null!==w&&w,_=n.Children.map(E,(function(e){var t=e;!0!==x&&(x=!0===(null===w?t.props.spin:w));var r=t.props.size;"number"==typeof p&&"number"==typeof t.props.size&&(r=t.props.size/p);var o={size:r,color:null===d?t.props.color:d,horizontal:null===v?t.props.horizontal:v,vertical:null===m?t.props.vertical:m,rotate:null===g?t.props.rotate:g,spin:null===w?t.props.spin:w,inStack:!0};return n.cloneElement(t,o)}));null!==p&&(z.width="string"==typeof p?p:1.5*p+"rem");var k,T="stack_labelledby_"+a,q="stack_describedby_"+a;if(o)S=c?T+" "+q:T;else if(k="presentation",c)throw new Error("title attribute required when description is set");return n.createElement("svg",l({ref:t,viewBox:"0 0 24 24",style:z,role:k,"aria-labelledby":S},P),o&&n.createElement("title",{id:T},o),c&&n.createElement("desc",{id:q},c),x&&n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }","@keyframes spin-inverse { to { transform: rotate(-360deg) } }"),_)}));s.displayName="Stack",s.propTypes={size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,className:o.string,style:o.object},s.defaultProps={size:null,color:null,horizontal:null,vertical:null,rotate:null,spin:null};var c=s;r.d(t,"Icon",(function(){return d})),r.d(t,"Stack",(function(){return c}));var u=function(){return (u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);}return r},f=0,d=n.forwardRef((function(e,t){var r=e.path,o=e.id,l=void 0===o?++f:o,i=e.title,a=void 0===i?null:i,s=e.description,c=void 0===s?null:s,d=e.size,y=void 0===d?null:d,v=e.color,b=void 0===v?"currentColor":v,m=e.horizontal,h=void 0!==m&&m,g=e.vertical,O=void 0!==g&&g,w=e.rotate,j=void 0===w?0:w,z=e.spin,E=void 0!==z&&z,P=e.style,S=void 0===P?{}:P,x=e.inStack,_=void 0!==x&&x,k=p(e,["path","id","title","description","size","color","horizontal","vertical","rotate","spin","style","inStack"]),T={},q=[];null!==y&&(_?q.push("scale("+y+")"):(S.width="string"==typeof y?y:1.5*y+"rem",S.height=S.width)),h&&q.push("scaleX(-1)"),O&&q.push("scaleY(-1)"),0!==j&&q.push("rotate("+j+"deg)"),null!==b&&(T.fill=b);var M=n.createElement("path",u({d:r,style:T},_?k:{})),C=M;q.length>0&&(S.transform=q.join(" "),S.transformOrigin="center",_&&(C=n.createElement("g",{style:S},M,n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))));var I,N=C,R=!0===E||"number"!=typeof E?2:E,B=!_&&(h||O);if(R<0&&(B=!B),E&&(N=n.createElement("g",{style:{animation:"spin"+(B?"-inverse":"")+" linear "+Math.abs(R)+"s infinite",transformOrigin:"center"}},C,!(h||O||0!==j)&&n.createElement("rect",{width:"24",height:"24",fill:"transparent"}))),_)return N;var X,Y="icon_labelledby_"+l,A="icon_describedby_"+l;if(a)I=c?Y+" "+A:Y;else if(X="presentation",c)throw new Error("title attribute required when description is set");return n.createElement("svg",u({ref:t,viewBox:"0 0 24 24",style:S,role:X,"aria-labelledby":I},k),a&&n.createElement("title",{id:Y},a),c&&n.createElement("desc",{id:A},c),!_&&E&&(B?n.createElement("style",null,"@keyframes spin-inverse { to { transform: rotate(-360deg) } }"):n.createElement("style",null,"@keyframes spin { to { transform: rotate(360deg) } }")),N)}));d.displayName="Icon",d.propTypes={path:o.string.isRequired,size:o.oneOfType([o.number,o.string]),color:o.string,horizontal:o.bool,vertical:o.bool,rotate:o.number,spin:o.oneOfType([o.bool,o.number]),style:o.object,inStack:o.bool,className:o.string},d.defaultProps={size:null,color:"currentColor",horizontal:!1,vertical:!1,rotate:0,spin:!1};t.default=d;}]);

    // Material Design Icons v5.9.55
    var mdiClose = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z";

    var boilerplate = "// @ts-nocheck\nif(!0) throw new Error(\"boilerplate.ts should not be imported\")\n/* eslint-disable @typescript-eslint/no-empty-function */\n/* eslint-disable @typescript-eslint/no-explicit-any */\n/* eslint-disable @typescript-eslint/no-unused-vars */\n/* eslint-disable no-unused-vars */\n\n/* --- */\n\nimport { $$Scalars } from \"./scalars\";\n\nexport interface $<F, L> { readonly f: F; readonly l: L }\nexport const $ = <F, L>(f: F, l: L) => ({ f, l });\n\nexport interface $$HKT<I = unknown> {\n  input: I;\n  return: unknown;\n}\n\nexport type $$CallHKT<HKT extends $$HKT, I extends HKT[\"input\"]> = (HKT & { input: I })[\"return\"];\n\ninterface DeepFragRecurseGuard<F, Lo> extends $<F, Values<Lo>> { readonly l: Values<Lo> }\n\nexport type $$Type = $$EnumType | $$ScalarType | $$ObjectType;\nexport type $$EnumType = keyof $$EnumTypes;\n\nexport type $$AnyFrag = $$ObjectTypeInfoMap[$$ObjectType][\"Frag\"];\nexport type $$AnyProp = $$ObjectTypeInfoMap[$$ObjectType][\"Prop\"];\n\nexport type $$Input<T extends $$AnyProp> = $$PropToInputType[T];\n\ntype _$$Frag<T extends $$Type> = T extends $$ObjectType ? $$ObjectTypeInfoMap[T][\"Frag\"] : never;\nexport type $$Frag<T extends $$AnyProp> = $$DeepArray<_$$Frag<$$PropToOutput[T]>>;\n\ntype _$$Output<T extends $$Type, F extends _$$Frag<T>> =\n  T extends $$ObjectType ?\n    $$Result<T, F> :\n    T extends $$ScalarType ?\n      $$Scalars[T] :\n      T extends $$EnumType ?\n        $$EnumTypes[T] :\n        never\nexport type $$Output<T extends $$AnyProp, F extends $$Frag<T>> =\n  $$CallHKT<$$PropToWrap[T], _$$Output<$$PropToOutput[T], $$UnwrapDeepArray<F, _$$Frag<$$PropToOutput[T]>>>>;\n\nexport type $$ObjectTypeInfoMap = typeof $$objectTypeInfoMap;\n\ntype __$$DeepFrag<O extends _$$ObjectTypeInfo, F extends O[\"DeepProp\"]> =\n  _$$DeepFrag<O> & { $$shallow: O[\"ShallowFrag\"] }\n\ntype _$$DeepFrag<O extends _$$ObjectTypeInfo> =\n  { [F in O[\"DeepProp\"]]: DeepFragRecurseGuard<F, __$$DeepFrag<$$ObjectTypeInfoMap[O[\"DeepType\"][F]], F>> }\n\ntype Values<T> = T[keyof T];\n\nexport type $$DirectInflateObjectType<O extends _$$ObjectTypeInfo, HKT extends $$HKT<O[\"Prop\"]>, Keys> =\n  Pick<\n    {\n      [K in O[\"Name\"]]: $$CallHKT<O[\"Wrap\"][O[\"NameProp\"][K]], $$CallHKT<HKT, O[\"NameProp\"][K]>>\n    },\n    Extract<Keys, O[\"Name\"]>\n  >\n\nexport type $$InflateObjectType<\n  O extends _$$ObjectTypeInfo,\n  HKT extends $$HKT<O[\"Prop\"]>,\n  PHKT extends $$HKT<$$ObjectType>,\n> = (\n  O[\"Union\"] extends \"$$never\" ?\n    { __typename: O[\"ObjectType\"] } & $$DirectInflateObjectType<O, HKT, $$CallHKT<PHKT, O[\"ObjectType\"]>> :\n    Values<{\n      [U in O[\"Union\"]]: $$InflateObjectType<$$ObjectTypeInfoMap[U], HKT, PHKT>\n    }>\n);\n\ntype ___$$Result<F extends $$AnyFrag, P extends $$AnyProp, T extends $$Type> =\n  T extends $$ScalarType ?\n  $$Scalars[T] :\n  T extends $$EnumType ?\n  $$EnumTypes[T] :\n  T extends $$ObjectType ?\n  $$Result<T, Extract<F, $<P, any>>[\"l\"]> :\n  never\n\n// eslint-disable-next-line @typescript-eslint/class-name-casing\ninterface __$$Result<F extends $$AnyFrag> extends $$HKT<$$AnyProp> {\n  return: ___$$Result<F, this[\"input\"], $$PropToOutput[Extract<this[\"input\"], keyof $$PropToOutput>]>;\n}\n\ntype $$FirstOfFrag<F> = Extract<F, string> | Extract<F, { f: string }>[\"f\"];\n\n// eslint-disable-next-line @typescript-eslint/class-name-casing\ninterface ____$$Result<O extends _$$ObjectTypeInfo, F extends O[\"Frag\"]> extends $$HKT<$$ObjectType> {\n  return: $$PropToName[$$FirstOfFrag<Extract<F,\n    $$ObjectTypeInfoMap[this[\"input\"] | $$ObjectTypeInfoMap[this[\"input\"]][\"Implements\"]][\"DirectFrag\"]\n  >>];\n}\n\ntype _$$Result<O extends _$$ObjectTypeInfo, F extends O[\"Frag\"]> =\n  $$InflateObjectType<O, __$$Result<F>, ____$$Result<O, F>>\n\nexport type $$Result<O extends $$ObjectType, F extends $$ObjectTypeInfoMap[O][\"Frag\"]> =\n  $$Expand<_$$Result<$$ObjectTypeInfoMap[O], F>>\n\nexport type $$Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;\n\nexport type _$$ObjectTypeInfo = $$ObjectTypeInfo<any, any, any, any, any, any, any, any, any, any, any, any, any, any>;\n\nexport type $$PropToName = {\n  [K in keyof $$PropToInfo]: $$PropToInfo[K][\"PropName\"][Extract<K, keyof $$PropToInfo[K][\"PropName\"]>];\n}\n\nexport type $$PropToInputType = {\n  [K in keyof $$PropToInfo]: $$PropToInfo[K][\"InputTypes\"][Extract<K, keyof $$PropToInfo[K][\"InputTypes\"]>];\n}\n\nexport type $$PropToWrap = {\n  [K in keyof $$PropToInfo]: $$PropToInfo[K][\"Wrap\"][Extract<K, keyof $$PropToInfo[K][\"Wrap\"]>];\n}\n\nexport type $$PropToOutput = {\n  [K in keyof $$PropToInfo]: $$PropToInfo[K][\"Type\"][Extract<K, keyof $$PropToInfo[K][\"Type\"]>];\n}\n\nexport type $$PropToInfo = {\n  [K in keyof $$PropToType]: $$ObjectTypeInfoMap[$$PropToType[K]]\n}\n\nexport type $$PropToType = {\n  [K in $$ObjectType]: (contravariant: Record<$$ObjectTypeInfoMap[K][\"Prop\"], K>) => void\n}[$$ObjectType] extends (contravariant: infer T) => void ? T : void;\n\nexport class $$ObjectTypeInfo<\n  ObjectType extends $$ObjectType,\n  ShallowPropName extends Record<string, keyof ShallowNameProp>,\n  ShallowNameProp extends Record<string, keyof ShallowPropName>,\n  ShallowType extends Record<keyof ShallowPropName, $$ScalarType | $$EnumType>,\n  ShallowWrap extends Record<keyof ShallowPropName, $$HKT>,\n  DeepPropName extends Record<string, keyof DeepNameProp>,\n  DeepNameProp extends Record<string, keyof DeepPropName>,\n  DeepType extends Record<keyof DeepPropName, $$ObjectType>,\n  DeepWrap extends Record<keyof DeepPropName, $$HKT>,\n  InputTypes extends Record<keyof ShallowPropName | keyof DeepPropName, {}>,\n  Directives extends Record<keyof ShallowPropName | keyof DeepPropName, Record<string, {}>>,\n  SourceFiles extends Record<keyof ShallowPropName | keyof DeepPropName, string>,\n  Union extends $$ObjectType,\n  Implements extends $$ObjectType,\n> {\n\n  declare ObjectType: ObjectType;\n  declare ShallowProp: keyof ShallowPropName;\n  declare ShallowName: keyof ShallowNameProp;\n  declare ShallowPropName: ShallowPropName;\n  declare ShallowNameProp: ShallowNameProp;\n  declare ShallowType: ShallowType;\n  declare ShallowWrap: ShallowWrap;\n  declare DeepProp: keyof DeepPropName;\n  declare DeepName: keyof DeepNameProp;\n  declare DeepPropName: DeepPropName;\n  declare DeepNameProp: DeepNameProp;\n  declare DeepType: DeepType;\n  declare DeepWrap: DeepWrap;\n  declare InputTypes: InputTypes;\n  declare Directives: Directives;\n  declare SourceFiles: SourceFiles;\n  declare Union: Union;\n  declare Implements: Implements;\n\n  declare DirectShallowFrag: this[\"ShallowProp\"];\n  declare DirectDeepFrag: Values<_$$DeepFrag<this>>;\n  declare ShallowFrag: this[\"DirectShallowFrag\"] | { [U in Union]: $$ObjectTypeInfoMap[U][\"ShallowFrag\"] }[Union];\n  declare DeepFrag: this[\"DirectDeepFrag\"] | { [U in Union]: $$ObjectTypeInfoMap[U][\"DeepFrag\"] }[Union];\n  declare PropName: ShallowPropName & DeepPropName;\n  declare NameProp: ShallowNameProp & DeepNameProp;\n  declare Wrap: ShallowWrap & DeepWrap;\n  declare Type: DeepType & ShallowType;\n  declare Prop: this[\"ShallowProp\"] | this[\"DeepProp\"];\n  declare Name: this[\"ShallowName\"] | this[\"DeepName\"];\n  declare DirectFrag: this[\"DirectShallowFrag\"] | this[\"DirectDeepFrag\"];\n  declare Frag: this[\"DirectFrag\"] | { [U in Union]: $$ObjectTypeInfoMap[U][\"Frag\"] }[Union];\n\n  constructor(\n    _0: ObjectType,\n    public shallowPropToName: ShallowPropName,\n    public shallowNameToProp: ShallowNameProp,\n    _1: ShallowType,\n    _2: ShallowWrap,\n    public deepPropToName: DeepPropName,\n    public deepNameToProp: DeepNameProp,\n    _3: DeepType,\n    _4: DeepWrap,\n    _5: InputTypes,\n    public inputTypeStrings: Record<keyof ShallowPropName | keyof DeepPropName, any>,\n    public directives: Directives,\n    public sourceFiles: SourceFiles,\n    _6: Union,\n    _7: Implements,\n  ){\n\n  }\n\n}\n\nexport interface $$Identity<I = unknown> extends $$HKT<I> {\n  return: this[\"input\"];\n}\n\nexport interface $$Optional<HKT extends $$HKT = $$Identity> extends $$HKT {\n  return: $$CallHKT<HKT, this[\"input\"]> | null;\n}\n\nexport interface $$Array<HKT extends $$HKT = $$Identity> extends $$HKT {\n  return: $$CallHKT<HKT, this[\"input\"]>[];\n}\n\nexport type $$DeepArray<T> = (T | $$DeepArray<T>)[];\nexport type $$UnwrapDeepArray<A extends $$DeepArray<T>, T = any> =\n  Extract<A extends $$DeepArray<infer U> ? U : never, T>;\n\nexport type $$GqxReturn = $$HKT<$$AnyProp>;\ntype $$CallGqxReturn<R extends $$GqxReturn, I extends $$AnyProp> = $$CallHKT<R, I>;\nexport type $$GqxImpl<R extends $$GqxReturn> = <I extends $$AnyProp>(id: I) => $$CallGqxReturn<R, I>;\n\ndeclare const __wrap__: unique symbol;\n\ntype $$Wrap<X, Y> = X extends $<infer F, infer L> ? $<F, $$Wrap<L, Y>> : never;\ntype $$MapWrap<O, F> = {\n  [K in keyof O | typeof __wrap__ | \"$\"]:\n  K extends \"$\" ?\n  <T extends $$DeepArray<$$AnyFrag>>(...x: T) =>\n    $<F, O extends { [__wrap__]: infer X } ? $$Wrap<X, $$UnwrapDeepArray<T>> : $$UnwrapDeepArray<T>>[] :\n  K extends keyof O ?\n  O[K] extends $$AnyFrag ?\n  $<F, O[K]> :\n  $$MapWrap<O[K], F> :\n  $<F, null>\n}\n\nconst $$mapWrap = <O, F>(o: () => O, f: F): $$MapWrap<O, F> =>\n  // @ts-ignore\n  new Proxy(Object.create(null), {\n    get: (t, k: string) => t[k] || (t[k] =\n      k !== \"$\" ?\n        (o as any)()[k].$ ?\n          $$mapWrap(() => (o as any)()[k], f) :\n          $(f, (o as any)()[k]) :\n        // @ts-ignore\n        (...a: any) => (\"$\" in o() ? o().$(...a) : a).flat(Infinity).map((a: any) => $(f, a))\n    ),\n  })\n\nexport const $$reconstruct = <I extends $$AnyProp>(id: I, input: $$Input<I>, props: $$Frag<I>) => {\n  interface Subs { [k: string]: true | Subs }\n  const subs: Subs = {};\n  populateSubs(props, subs);\n  const frag = genFrag(subs);\n  const inputKeys = Object.keys(input);\n  const inputDef = inputKeys.length ? `(${inputKeys.map(k =>\n    `$${k}: ${($$objectTypeInfoMap as any)[id.split(\"$\")[0]].inputTypeStrings[id][k]}`\n  ).join(\", \")})` : \"\";\n  const inputPass = inputKeys.length ? `(${inputKeys.map(k =>\n    `${k}: $${k}`\n  )})` : \"\";\n  const request = `${id.split(\"$\")[0].toLowerCase()}${inputDef} { ${id.split(\"$\")[1]}${inputPass}${frag} }`;\n  return request;\n\n  function genFrag(subs: Subs): string{\n    return (\n      Object.keys(subs).length ?\n        `{ ${Object.entries(subs).map(([k, v]) => v === true ? k : k + \" \" + genFrag(v)).join(\" \")} }` :\n        \"\"\n    );\n  }\n\n  function populateSubs(prop: $$AnyFrag | $$DeepArray<$$AnyFrag>, subs: Subs | true): void{\n    if(prop instanceof Array)\n      return void (prop.map(p => populateSubs(p, subs)));\n\n    if(subs === true)\n      return;\n\n    const [type, name] = (typeof prop === \"string\" ? prop : prop.f).split(\"$\");\n\n    const inlineFrag = \"... on \" + type;\n    subs = subs[inlineFrag] = subs[inlineFrag] ?? {};\n\n    if(subs === true)\n      return;\n\n    if(typeof prop === \"string\")\n      return void (subs[name] = true);\n\n    subs[name] = subs[name] ?? {}\n    populateSubs(prop.l, subs[name]);\n  }\n}\n\n/* --- End Boilerplate --- */\n";

    var userGqxTs = "export * from \"./output\";\n\nimport { $$GqxReturn, $$AnyProp, $$Frag, $$Input, $$Output, $$generateObject } from \"./output\";\n\n// Type of e.g. gqx.query.getBook\ntype GqxOut_<I extends $$AnyProp> =\n  <T extends $$Frag<I>>(input: $$Input<I>, frag: T)\n    => Promise<$$Output<I, T>>\n\n// HKT encoding to pass to $$generateObject\ninterface GqxOut extends $$GqxReturn {\n  return: GqxOut_<this[\"input\"]>;\n}\n\n// Imported by codegen output\nexport interface $$Scalars {\n  String: string;\n  Boolean: boolean;\n  Float: number;\n  Int: number;\n  ID: string;\n}\n\nexport const gqx = $$generateObject<GqxOut>(() => null!)\n";

    var defaultGqlText = "# #####\n# Example GraphQL Schema\n# #####\n\n# This file is an example of a user-created schema.\n\n# * You can edit this GraphQL schema file. *\n\nschema {\n  query: Query\n}\n\ntype Query {\n  getBook(id: ID!): Book!\n  getPeople(filter: String!): [Person!]!\n}\n\ntype Book {\n  id: ID!\n  author: Author!\n  title: String!\n  description: String!\n}\n\n# implemented by Author & User\ninterface Person {\n  id: ID!\n  name: String\n}\n\ntype Author implements Person {\n  id: ID!\n  name: String!\n  books: [Book!]!\n}\n\ntype User implements Person {\n  id: ID!\n  name: String\n  username: String!\n}\n";

    var _defaultTsText = "// @ts-nocheck\n// -----\n\n// #####\n// Example Typescript Usage\n// #####\n\n// This file is an example of user-created code that uses gqx.\n// It uses the types and objects that were generated from the GraphQL schema.\n\n// * You can edit this TypeScript file. *\n\nimport { gqx, Book, Person, Author, User } from \"./gqx\";\n\n// ###\n// Example of fully-typed fragment, query, input, and result\n// ###\n\nconst bookFrag = Book.$(\n  Book.id,\n  Book.title,\n  Book.author.name,\n  Book.author.books.title,\n);\n\n// * hover over the result to see the type\nconst bookResult = await gqx.query.getBook({ id: \"abc\" }, bookFrag)\n\nbookResult.title // string\nbookResult.author.name // string\nbookResult.author.books // Array<{ __typename: string, title: string }>\n\n\n// ###\n// Example of handling fragments with interfaces and unions\n// ###\n\nconst peopleQueryFrag  = Person.$(\n  Person.name,\n  Author.books.id, // Author implements Person\n  User.username, // User implements Person\n)\n\n// * hover over the result to see the union type\nconst peopleResult = await gqx.query.getPeople({ filter: \"A\" }, peopleQueryFrag)\n\nfor(const person of peopleResult) {\n  switch(person.__typename) {\n    case \"Author\": // has books\n      person.books.length\n      continue;\n    case \"User\": // has username\n      person.username.toLowerCase()\n      continue;\n  }\n}\n\n// ###\n// Example the flexible fully-typed formats for defining and composing fragments\n// ###\n\n// The following fragment definitions result in equaivalent fragments\n\nconst bookFragment1 = Book.$(\n  Book.id,\n  Book.title,\n  Book.author.name,\n  Book.author.books.title,\n);\n\nconst bookFragment2 = Book.$(\n  Book.id,\n  Book.title,\n  Book.author.$(\n    Author.name,\n    Author.books.title,\n  ),\n);\n\nconst authorFragment = Author.$(\n  Author.name,\n  Author.books.$(\n    Book.title,\n  ),\n)\nconst bookFragment3 = Book.$(\n  Book.id,\n  Book.title,\n  Book.author.$(\n    authorFragment\n  )\n);\n\n// The equivalent fragments result in equivalent result types\n\n// * hover each result to see that each has the same type\nconst result1 = await gqx.query.getBook({ id: \"abc\" }, bookFragment1)\nconst result2 = await gqx.query.getBook({ id: \"abc\" }, bookFragment2)\nconst result3 = await gqx.query.getBook({ id: \"abc\" }, bookFragment3)\n";

    var Editor = function (_a) {
        var language = _a.language, defaultText = _a.defaultText, onChange = _a.onChange, path = _a.path;
        return React.createElement("div", { className: "Editor" },
            React.createElement(index, { defaultLanguage: language, defaultValue: defaultText, onChange: function (x) { return onChange === null || onChange === void 0 ? void 0 : onChange(x !== null && x !== void 0 ? x : ""); }, path: path, theme: "eglint", options: {
                    automaticLayout: true,
                    minimap: {
                        enabled: false
                    }
                } }));
    };
    var App = function () {
        var _a = __read(react.exports.useState(defaultGqlText), 2), gqlText = _a[0], setGqlText = _a[1];
        var error = false;
        var output;
        try {
            output = genOutput(gqlText);
            writeTsFile("/output.ts", output);
        }
        catch (e) {
            error = true;
        }
        return React.createElement(React.Fragment, null,
            React.createElement(Editor, { language: "graphql", defaultText: defaultGqlText, onChange: setGqlText }),
            React.createElement(Editor, { language: "typescript", defaultText: defaultTsText, path: "/main.ts" }),
            error ? React.createElement("div", { className: "error" },
                React.createElement(Icon.Icon, { path: mdiClose })) : null);
    };
    writeTsFile("/gqx.ts", userGqxTs);
    writeTsFile("/scalars.ts", "export type { $$Scalars } from \"./gqx\"");
    function writeTsFile(path, content) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var monaco, uri;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, loader.init()];
                    case 1:
                        monaco = _b.sent();
                        uri = monaco.Uri.file(path);
                        ((_a = monaco.editor.getModel(uri)) !== null && _a !== void 0 ? _a : monaco.editor.createModel(content, "typescript", uri)).setValue(content);
                        monaco.languages.typescript.typescriptDefaults.addExtraLib(content);
                        return [2];
                }
            });
        });
    }
    function genOutput(gql) {
        var ctx = {
            operations: [],
            baseTypes: [],
            scalarTypes: [],
            enumTypes: {},
            inputTypes: {},
            objectTypes: {},
            typeDirectives: {}
        };
        groupDefinitions(ctx, parse(gql).definitions);
        var code = [
            "/* eslint-disable */",
            stringifyBoilerplate(boilerplate),
            stringifyEnumTypes(ctx),
            stringifyInputTypes(ctx),
            stringifyObjectTypes(ctx),
            stringifyOperations(ctx),
            stringifyTypeDirectives(ctx),
            stringifyScalarTypes(ctx),
        ].join("\n\n").replace(/\n\n\n+/g, "\n\n");
        return code;
    }
    loader.init().then(function (monaco) {
        monaco.editor.defineTheme("eglint", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#151820"
            }
        });
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            module: monaco.languages.typescript.ModuleKind.ESNext,
            target: monaco.languages.typescript.ScriptTarget.ESNext
        });
        monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
            diagnosticCodesToIgnore: [6133]
        });
    });
    var defaultTsText = _defaultTsText.split(/\/\/ -----\n\n/)[1];
    ReactDOM.render(React.createElement(App, null), document.getElementById("root"));

    exports.App = App;
    exports.Editor = Editor;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
