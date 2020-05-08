module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/index.js":
/*!*******************************!*\
  !*** ./assets/icons/index.js ***!
  \*******************************/
/*! exports provided: ArrowForward, Backpress, SearchIcon, ArrowStraight, ReactIcon, VueIcon, NextJsIcon, IosArrowBack, IosArrowForward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowForward", function() { return ArrowForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Backpress", function() { return Backpress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return SearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowStraight", function() { return ArrowStraight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactIcon", function() { return ReactIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueIcon", function() { return VueIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextJsIcon", function() { return NextJsIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosArrowBack", function() { return IosArrowBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IosArrowForward", function() { return IosArrowForward; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/assets/icons/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const ArrowForward = props => __jsx("svg", _extends({
  width: props.width,
  height: props.height,
  viewBox: "0 0 9.986 17.465"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), __jsx("path", {
  "data-name": "Icon ionic-ios-arrow-forward",
  d: "M6.976 8.729l-6.609-6.6a1.243 1.243 0 010-1.763 1.259 1.259 0 011.768 0l7.488 7.482a1.246 1.246 0 01.036 1.721L2.14 17.104a1.248 1.248 0 01-1.768-1.763z",
  fill: "#001cf9",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}));
const Backpress = props => __jsx("svg", _extends({
  width: props.width,
  height: props.height,
  viewBox: "0 0 65.367 65.367"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}), __jsx("g", {
  "data-name": "Group 4",
  transform: "translate(-1003 -251)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, __jsx("rect", {
  "data-name": "Rectangle 7",
  width: 51,
  height: 51,
  rx: 18,
  transform: "rotate(20 -201.524 3019.11)",
  fill: "#403e3e",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("path", {
  "data-name": "Icon ionic-ios-arrow-forward",
  d: "M1032.7 283.739l8.122 8.118a1.528 1.528 0 010 2.167 1.547 1.547 0 01-2.173 0l-9.2-9.2a1.531 1.531 0 01-.045-2.116l9.243-9.262a1.536 1.536 0 112.175 2.169z",
  fill: "#fff",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
})));
const SearchIcon = props => __jsx("svg", _extends({
  width: props.width,
  height: props.height,
  viewBox: "0 0 20.964 20.964"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}), __jsx("g", {
  "data-name": "Icon feather-search",
  fill: "none",
  stroke: "#959595",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 7
  }
}, __jsx("path", {
  "data-name": "Path 315",
  d: "M17.775 9.262A8.512 8.512 0 119.262.75a8.512 8.512 0 018.512 8.512z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }
}), __jsx("path", {
  "data-name": "Path 316",
  d: "M19.899 19.899L15.27 15.27",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
})));
const ArrowStraight = props => __jsx("svg", _extends({
  width: props.width,
  height: props.height,
  viewBox: "0 0 130 12.44"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }
}), __jsx("g", {
  "data-name": "Group 159",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }
}, __jsx("path", {
  "data-name": "Line 4",
  fill: "none",
  stroke: "#1e2127",
  strokeWidth: 2,
  d: "M0 6.252h128",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 9
  }
}), __jsx("path", {
  "data-name": "Icon ionic-ios-arrow-forward",
  d: "M127.856 6.218l-4.707-4.7a.885.885 0 010-1.256.9.9 0 011.259 0l5.333 5.33a.887.887 0 01.026 1.226l-5.356 5.367a.89.89 0 11-1.259-1.256z",
  fill: "#1e2127",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }
})));
const ReactIcon = props => __jsx("svg", _extends({
  width: "1em",
  height: "1em",
  viewBox: "0 0 24.804 22.15"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }
}), __jsx("g", {
  fill: "#1e2127",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 7
  }
}, __jsx("path", {
  "data-name": "Path 345",
  d: "M14.669 11.063a2.266 2.266 0 11-2.263-2.261 2.266 2.266 0 012.263 2.261z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }
}), __jsx("path", {
  "data-name": "Path 346",
  d: "M12.402 19.397c1.779 1.73 3.533 2.753 4.947 2.753a2.449 2.449 0 001.267-.316c1.267-.731 1.73-2.559 1.291-5.166a16.202 16.202 0 00-.293-1.414c.487-.146.926-.293 1.364-.439 2.461-.95 3.826-2.266 3.826-3.7 0-1.462-1.364-2.778-3.826-3.7a11.27 11.27 0 00-1.364-.439c.122-.487.22-.95.293-1.414.414-2.656-.048-4.508-1.316-5.239a2.453 2.453 0 00-1.267-.316c-1.389 0-3.168 1.023-4.947 2.753C10.623 1.023 8.868 0 7.455 0a2.449 2.449 0 00-1.267.316c-1.267.731-1.73 2.559-1.291 5.166.073.463.171.926.293 1.414-.487.146-.926.293-1.364.439C1.365 8.285 0 9.601 0 11.035c0 1.462 1.364 2.778 3.826 3.7a11.27 11.27 0 001.364.439q-.178.7-.293 1.414c-.414 2.607.048 4.46 1.291 5.166a2.444 2.444 0 001.267.316c1.414.048 3.168-.975 4.947-2.68zm-1.365-3.289c.439.025.9.025 1.364.025s.926 0 1.364-.025q-.644.847-1.364 1.632-.72-.784-1.364-1.632zm-3.021-2.51c.243.414.463.8.731 1.194q-1.079-.138-2.144-.366c.22-.658.463-1.341.755-2.023.2.389.414.8.658 1.194zM6.602 7.725a26.457 26.457 0 012.144-.366c-.243.39-.487.78-.731 1.194s-.463.8-.658 1.218a16.209 16.209 0 01-.755-2.047zm1.341 3.339c.316-.658.658-1.316 1.048-1.973.366-.634.78-1.267 1.194-1.9a33.437 33.437 0 014.436 0 27.4 27.4 0 011.194 1.9c.39.658.731 1.316 1.048 1.973q-.48 1.009-1.048 1.973c-.366.634-.78 1.267-1.194 1.9a33.437 33.437 0 01-4.436 0q-.636-.925-1.194-1.9t-1.048-1.974zm9.525-1.317l-.658-1.218c-.243-.414-.463-.8-.731-1.194.755.1 1.462.22 2.144.366a23.296 23.296 0 01-.755 2.047zm0 2.632c.293.682.536 1.364.755 2.023-.682.146-1.389.268-2.144.366.243-.39.487-.78.731-1.194.22-.366.439-.78.658-1.194zm.56 8.456a1.32 1.32 0 01-.707.171c-1.194 0-2.68-.975-4.142-2.437a25.456 25.456 0 002.071-2.559 22.377 22.377 0 003.266-.512 12.465 12.465 0 01.268 1.316c.341 2.071.073 3.558-.755 4.021zm1.27-12.845c2.73.78 4.362 1.973 4.362 3.071 0 .95-1.121 1.9-3.094 2.657-.39.146-.828.293-1.267.414a25.591 25.591 0 00-1.194-3.071 22.023 22.023 0 001.194-3.071zm-1.95-6.869a1.378 1.378 0 01.707.171c.8.463 1.1 1.925.755 4.021-.073.414-.171.853-.268 1.316a31.334 31.334 0 00-3.266-.512 22.525 22.525 0 00-2.071-2.559c1.462-1.438 2.948-2.437 4.142-2.437zm-3.582 4.9c-.439-.025-.9-.025-1.364-.025s-.926 0-1.364.025c.439-.585.9-1.121 1.364-1.632.466.509.925 1.07 1.366 1.63zM6.768 1.29a1.32 1.32 0 01.707-.171c1.194 0 2.68.975 4.142 2.437a25.349 25.349 0 00-2.071 2.559 22.377 22.377 0 00-3.266.512 12.463 12.463 0 01-.268-1.316c-.337-2.07-.069-3.532.756-4.021zM5.506 14.134c-2.73-.78-4.362-1.973-4.362-3.071 0-.95 1.121-1.9 3.094-2.656.39-.146.828-.293 1.267-.414a25.59 25.59 0 001.194 3.071 23.276 23.276 0 00-1.194 3.071zm.512 2.68c.073-.414.171-.853.268-1.316a31.333 31.333 0 003.266.512 22.524 22.524 0 002.071 2.559c-1.462 1.437-2.948 2.437-4.142 2.437a1.378 1.378 0 01-.707-.171c-.829-.463-1.1-1.95-.755-4.021z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }
})));
const VueIcon = props => __jsx("svg", _extends({
  viewBox: "0 0 2500 2165.1",
  width: "1em",
  height: "1em"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M1538.7 0L1250 500 961.3 0H0l1250 2165.1L2500 0z",
  fill: "#4dba87",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 7
  }
}), __jsx("path", {
  d: "M1538.7 0L1250 500 961.3 0H500l750 1299L2000 0z",
  fill: "#435466",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 7
  }
}));
const NextJsIcon = props => __jsx("svg", _extends({
  height: "1em",
  viewBox: "0.5 -0.2 1023 1024.1",
  width: "1em"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }
}), __jsx("path", {
  d: "M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3zM687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 7
  }
}), __jsx("path", {
  d: "M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102,
    columnNumber: 7
  }
}));
const IosArrowBack = props => __jsx("svg", _extends({
  width: props.width,
  height: props.height,
  viewBox: "0 0 11.478 20.077"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 5
  }
}), __jsx("path", {
  "data-name": "Icon ionic-ios-arrow-back",
  d: "M3.46 10.036l7.6-7.591A1.435 1.435 0 009.028.419l-8.607 8.6a1.432 1.432 0 00-.042 1.978l8.643 8.661a1.435 1.435 0 102.027-2.026z",
  fill: !props.fill ? "#1e2127" : props.fill,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 7
  }
}));
const IosArrowForward = props => __jsx("svg", _extends({
  width: props.width,
  height: props.height,
  viewBox: "0 0 11.478 20.075"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }
}), __jsx("path", {
  "data-name": "Icon ionic-ios-arrow-forward",
  d: "M8.019 10.034l-7.6-7.591a1.429 1.429 0 010-2.026 1.447 1.447 0 012.032 0l8.607 8.6a1.432 1.432 0 01.042 1.978l-8.643 8.661A1.435 1.435 0 01.425 17.63z",
  fill: !props.fill ? "#1e2127" : props.fill,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 7
  }
}));

/***/ }),

/***/ "./assets/lottiefiles/404-lottiefile.json":
/*!************************************************!*\
  !*** ./assets/lottiefiles/404-lottiefile.json ***!
  \************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.6.2\",\"fr\":29.9700012207031,\"ip\":0,\"op\":90.0000036657751,\"w\":664,\"h\":465,\"nm\":\"404 Nothing to see here\",\"ddd\":0,\"assets\":[{\"id\":\"image_0\",\"w\":98,\"h\":104,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_1\",\"w\":46,\"h\":46,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_2\",\"w\":36,\"h\":36,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_3\",\"w\":98,\"h\":105,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_4\",\"w\":44,\"h\":44,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_5\",\"w\":22,\"h\":22,\"u\":\"\",\"p\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAABq0lEQVQ4ja3Vv2uTQRzH8ffn0lqDPygKStoUTUKnUKdgBx0jXcSl+BeUgkMcHZwq+D8oQnDQXWhFKC242EHENdODCfRnMGBjFUrztPk6yBNieZLW9D7bHfd93R3cD9EnQWAjLknRwR3ETRNDGHtmVNoJViZTqvSqVVxn5btdPB/yRFACrvScWXwRLGTGtHwiHOxYfshYNCPXbzfdMfFqd5vHhYLCWLi2YdPmWAUunRbtyup+k/v5vFoArrPSTUubY2lAFOBecpQXUaMDJ0QZuDYgGmWuumUPOvC3bbsLzJwRjfK8A2PMeUIBblU37LYDEBQ9wpCg6ILARoC0T1dGzp27zLhPFMDEdRceEp489H9lzDV3qCPv+LorFBRifPXKis/RBXnnkT0YPuLD3+PWooz46UOVeD0xoR8OIJNR09o89eA2DsUCdL0VubReIt6cAW0hZidTavwDA+zvMo/xdgD0lxmz2TF9ijpif5DqlpWAZ8DVU6BrR45Hx7+pWBigVrNRG6aEeAhMHRv7G/gIlLPjeh9X3xPuTr1uFw6MG6GRFDSyKTYltfvV/AFsioBgxJpZYQAAAABJRU5ErkJggg==\",\"e\":1},{\"id\":\"image_6\",\"w\":14,\"h\":14,\"u\":\"\",\"p\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAABBUlEQVQokZXPzUoCYRTG8f85k3QHgV+kThS2al+7gq4k2goReAlBUHfQoptoFREURK1aGAaVQYx5DenM00IzGWPSZ/fC83vPOcYfee+pGvepe0ASi9ZK0T7SHZt8vEbaMTgGNlK9WxnNsGA3U7DTVUPiJP3ZRAaC/bBoZ2PY6WpX4iID/YzpE7NVK9u9A2i4XjYaFnMKOAKwt0hrQPtf9JuEBQpuRn0OBODeZ92VkJsTIiEPAlrzOhZp+3LenoDHWZXBVXXJej4afQDEM7ivxGkCOEBYskuJQ0AZaIDYC/P2MIYjfOpiG7ibuklck7BZK9n5xMrTeYlUNrHqIraY50rFPtOdb+1gV0SfhxUlAAAAAElFTkSuQmCC\",\"e\":1},{\"id\":\"image_7\",\"w\":12,\"h\":12,\"u\":\"\",\"p\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAA5UlEQVQokY3Rvy6DYRTH8e/vIHmHJgYTWlXaiMVsMImkF9Click1NC7D3L1dDC6hOlRqMBislJCGQSd/osH7HEtFIyrPdz2fc5YjRrm7XT9QNdh1ZwN4A84C1IuL6n47AfR6PquEI2CHvxIHhXn2JbkBKKExEQM4tZt7agC66vu2ieOJ+KeXqU+WzEQlAgNkwjRlk1iOXADImzvPsdrh1YCT6PuBjqUJTeAxgrdWcrqw0pyeglMFhv/g29TZAzCAYlbtILYEp79g6nCoGTZLWfVh9OnxLu981Yx1Ge8fcL62oMH4/Avucj/0D7spzgAAAABJRU5ErkJggg==\",\"e\":1},{\"id\":\"image_8\",\"w\":18,\"h\":18,\"u\":\"\",\"p\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAABTklEQVQ4ja3UvUoDURCG4XdOopBo6U/Mj5tdQRDrYGGnhY2tl2BvJ5giqCBilWuw8hoMWpvOSglILDYuCVhqUJPsWG3UsMGYdcqZ4eHjwBlhSLmuJjoxCoAlkEBpaZwbZ15aYfsy2Kh5OjMJB6rsAtMDYx+oiE/Jzkl1KPTQ0A0jXACzw5IGoMBhPs2xiOgP6NHVNTVcA8lfkK9STpysFPtQs6lT7R73QG5kJKBgy8lIxQC0u+yNgQRBzvqJ6k9aA5bHgACIGVZN3VMrCgLQ89k0gBUFAVDIGvH5iAoBmC40oiICjf97bACU8wiBbq0FuTMAyThlwB0DUYR9AAOQSsmr+OwAb39RRDl10nLZhwDsnFRV2QaeRzB8gVI+QzFomO/TpaxcdYQVVcrASxgAVERZtzNyFPx8CLlHQXmeJt+FgiqLwWFjgqo9J82w/U+4Y2Z7x2El4QAAAABJRU5ErkJggg==\",\"e\":1},{\"id\":\"image_9\",\"w\":43,\"h\":43,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_10\",\"w\":58,\"h\":59,\"u\":\"\",\"p\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA7CAYAAAAq55mNAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAGxklEQVRogd2bbYgdVxnHf/9nZm5i8+Le7SZptq1Nk9WYJpoqBa0gVaj40iYNiB8U/CCKiFBjUClVFHwBsQRaEGm/KIj4wZcPiQGhpWXxQ5VKGhrbS5O0btW0dyUhRhNjmtyZ8/hh5tw7u8luNtlNsvf+YZi5Z2buOb/7f86ZOS9XXCONj3vaHGUNxlCAY+8Z44SkcK3y10J/4f79ntnK/J5Edh+uMeSjglFgjQupl2kOTLq8jVsb/CWwve/awAFJvtDlWhDQQ4d8xdmk+JihHTifkBhCIIGpyqS7d6Ratg4OuJcbxutesNcV9trZ9A+bN+v8QpRxXqB/+bs3/Vx4GHhQYikVmAlk1V69fYSVKOkAVwkoyn2oNg8QnOMOP+B/9sR8ga8IdPw1XzrUCQ8afFNiSAKrwMxqmyARYBWw13KM+whcORu8TCsq2CJACEwE929tWpf8+krr9WWDHjySf9qlHwlulSCpoJLaFiHrrs4ls3oId92tYIsAHnj+fMd2bhnTs1cNdP9+z7IV4THEl7HSqcTAEsiS3rHVwjfmUM9EM+To0dluQuVwCUheQecFeeF85Z1vSx5fcNDnXvYbl6T+G+EfliA1SBJIK8AkrcLUpjY8M0HNRVPAo7tFCVwUkBc8fuqY7bzrLnXm8n2XLMqBV/wOEX5nsCGGaJpAmtZArQc2H7iZFOtvrLshlLCdXOMd6VObbtGJS33HrMU6+KpvcQ/PGqxUBKxCNU1KV2MdvBqA0xWBPbpahvLhM7nd/e7bdHK2e22mE/sP+4gT9hmsNIM0cRopNFLI0tJRs2sHCb1Hlan3gzdSNi5P/Vfj7uls914UtNXyRmbFb+Wss8rJRqoyXKuQnfJ8vMaKP26sRlnmH1k3GXbPds8FoO6uThZ+DLrHqkYnqwGm1oO8noqwZmWZspSdE+38CzNePz3hhSP554R+FutkVoVrmvYgr4eLM8lrj6G8oHOusLvHRvX89OumONpq+XKkH1L9SvWGZzFCQlUmuvU2a5jvdvcLSjkFNG+ErwnWJPWQrVpXFiFkVDeMBUniH3r9n8XHL7gmHrw44WtCHv4qY1mWQCODLCsdja90i13x1bFT8NLNq+xOSUU813U0dMJ3JJYl0956ut2sPlDsISXGlqPHi89OOQfQes1vyjvhqBlpmjqNTCzJStjr9QiZj0KATmDi5hEbi514Azh/vtgmkVoCiYm05mS/QUJZ5tRY/8ZxtsY0A0hkD9CtzNWrnfUnJPRaYik8ENOs1fLlLr83dpYT1S+8foWdr6o3px3xs+VZ8VHBElFCxj5l37RAM6gy6852228DsCBtR2DmyCChv1raWSXwRtgGYOa+sew0qzu+A/0dtlECEmMjgEkaVew422CEbV1yjULp31q8NqA1KGFLjMpQgrpIo4sDZmYpVY6Wg1k+5XEyCPWzprXubqWZ0qDBdSXITp5khU0Zdx3I2KXTbHKq23sZPL5SgrYkN2BOA8D9KsfbAIYzWSZ0zwyWZCWo4+36SPjAyaOj6FAc/R5IUDgMYEG+L0LGsTMfIOAc2wdg+m/yJM6bcT5ygBgBDowO6x8AtnWrzoCejtPpPliwe+OBARSEPV5Nx4XAwJAGtz3x2ABCSPaFQCeGbrdx6m+9urrJi/GDAWwd07EgnojrBQYhfAP+vfp6pe4r4LmOfT84p0PRC98+dvXg6qHkl/WELuh7367jRcEjIU6f97GrIYSHpi/TmTLJ1LnBHi0Ck/3tqp5ZPZw+NT11CujWm3Qmz/2hIvStq+cdff1iawkvmPG+Y336izzwk6IPXRX+xdVNvXCxcxddw3D6mO3qFHqmKGqt8GKHdXaPNNOfz3R6xv5266gPL1V4LssYW/RzpNLvR96q7fX50OmacfnN5lv1ryK37XnOyWrhYbkgcfGplQR9ZjZImAUU4B3r9PI5t/d3co6EorcQcbHIXU9lsg8OD+s/l7p2VlCATbfoCOfsfXmhJ4u8B7sI6uxjq5q6b2ho9hVjUZcEBbj9dv17Yq3u7xQ8mufVisvrB9tx/POrmskuSflcb7rs5uVv7fyTSaJHkoT13bnUa9RIufxPlidfHRnRny/33isqYqvljeU3hi+lCd9OjJGrubITAOdwkD+8eijZc6V/LJhX0V454SvfUoRvmNiVGMsWYp3uNE3ifHekaT+9nDC9mBakSO223+BW3GupdkhsE4zMA3oiwB5he1cN8cf5AkYteLC5ezJ5nA/Iwv1IG4wwWs1ojQqy2qVngTfA26B2EC3c9qxp0lq0/3uZi9zdJk8znL5JM0051mxy6moAzaT/A4E5ovjFhorkAAAAAElFTkSuQmCC\",\"e\":1},{\"id\":\"image_11\",\"w\":372,\"h\":238,\"u\":\"\",\"p\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXQAAADuCAYAAAAp6fzCAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAgAElEQVR4nOy9eZAk130e+L33MrOOru6eqwcAB4PB9AwODgcAcRMUuCAhiZQpWVzbkqzD4fXuSpZsyw5rV4cZDhmLXcthWSErpJW8IW9ItixSq4217LVkyVpdpHmJgkQCIEAMQAyGADHAYKbn7K7uqsrjvf3jvV/lq9eZdWRlVfaA/UVkdFV1d1Ye7/fl937XA3axi13sYhe72MUudrGLXexiF7vYxS52UTJY1Qewi12UAaVU6WOZMabK3ucudjFL7BL6Lq5bzILE87BL7ru4HrBL6Lu4LpBH3k8+mT+GT5wYPb5feAG5RP3EE/m/A3ZJfhc7D7uEvosdi3FJPIu4V1YmG9tra4Pk7RJ9HrnvkvoudhJ2HKEXmUbvGtXbB1n3fxiB28S9uDj4d2fOjDe+V1dTst7YGCRuIvpxCP7tNA4nscO303lf79hRhF6GT3R3cF2/cO+/TeRE4nkETuTdag2O6UZj9BjvdFJybrf1ayJ5Inhbwdvk7hL79Tz+du3v+kdlhD5s8Azzi2Zh19d5/WKYIs9S4kTiZ86AEXkTaa+tDb4nBEH+eArDdOwQsa+sQNHrLILPUu3Xm2Lftb+3Jyoh9EkCXHmBrbxg1q6v8/pBniJ31XgeidsETqRNP9fX03Hj+/njPIr0eFla0j/DEIpIvtOBWllJX7fbUJMS+04cd7v29/bF3Ah9Gt/oMORNhYGdaVy701oN+zq4rhWbyG1XCpG4S+Dr62C+rzcAaLfT1wDgedljKY7T8RFFUK0WFBF8FEEtLWlyD0Ot2F3lvroKNQ6x76T7lXfdgWL2B4wfZ9gJ16HMVNedcD4u5kLo40yrXTVGyAtsZQWyssh9Jw2q3eIXjSxSscfBKCIPArBOB9z3wYi8ibQ9D+zQISwuL2M/Y+AXL+Lym29iI+s4kkSPDfrZaEDFsd5sgnfJvdWCHEex7zRSH3Xd6XdZsYksjBNn2LW/+WLmhD7NtBrID2oN83EC21XDvI2rTB+li+t1Wps1FrKInO5/uw1uk/j6OlizCd5ugz3yCG5eXMSjvo9HOMdtjGEfY9gLYC9j8Ae/FyGAS0rhkpQ4H8d4amMDn/7yl/FcFEFKmRJ7rQYVhpBJAkUE3+lAErk3GpC2am+1IIcRe9WkniemhtkfkAaXhwWV3dkKsGt/0+y3DMyU0IeR+ahpNTA6Q8ENYu0UxTSOj9L1TbpTXDcvmnA9TGvzQNdl2Diwx8DyMjip8dtvx/LNN+Mjnof3cY5HGMPh6Y8HV5IEn+v18MlTp/A7ly9jKwwhazWoKNI/k0QTvO9DxjFUrQZpE/u1a5Du+Bs29uZ5f8a1PyAVUqMCzDay7A/Q4som9uvR/giT1idUbX9zIfRh02o3yGUrMiANbvk+GPk3ge1BLNvHWaViGsdHOSx3Ogvj5Ebv1CyLUaQyisgffBC3792LH+Qc38MYFmZ3nLjc7eLfnDqFf/fWW7gWBJrUPU8reM+DDEPIIIDsdiFtYm+3tQtmZQVqbQ1yp5C6a3/A4HUHBol8EvsDtA269gcMBpCrtL+sc6fXeS7ePNg2uJPtb26Enkfm9kBqtcApwAXoQdRup6+BNCshK4BlG1bWoJq1UhjlUgC2T20Jbv60jXHdSsDOUgyTuFgaDbB2WxN5kkC8//34YL2OH2IMj2OuwXts9Hr42OnT+NU338SlONakTio9i9i3tiDrdUhbrR88CFk1qU9qf7Zri4LMefYHpDZoxxjGmbHsBPsDBm3w7WJ/MzOUUYNpZQV8bQ3szjtRv+02fJvn4S4hcBeAdwFYkBKvSImXkwSnkwQvffGL+ES7jTgvgEWKqV7XU2HXvzlrUs8LOE2SP02f2YUu5rr1lQ+w3Wc5zLVU1vlNinEDnzQOSJXfey/ubLXwi0Lg4Xkfsw2lcPXSJXz06afxx2GIRAhN5t0uEiL2Tke/7nQ0sdtqfZyxNw+3w7AZEcUoHn8cHwwC3McYTnKOkwBuUAqvKqXtL47x8iuv4BNnz+rgsh1fsAPIW1uQrrDKm7Hs2t9sMBNCHzWYyIi/8RuxuncvPsYY3j1qn1LiubU1/MgXvoAvAwD5N5MEKgi0f7Mqwxo2mPKmtkB2/rQLyommhxSwPWYwyl9ZxjlOgnGU+YULmkyIzJtNBA89hH8YBPgJALV5HesodLv4+J//Of5Ft4tOHEMyhoRzJGEIyTkSxpAEAeTGBhIae6RUqyJ1dzzm2d9DD2HPLbfglxnDXx69T5zb2MCP/+mf4o8peJxnfySs8mYsbzf7A1Jir9r+Sif0cQZTuw3+wQ/iw76P/5Mx7Bl/34jDEP/qz/8cP7+xgXCYf9OeBtuGdeYMJFCeSsg6X2DyqS3tg6a4rVbqTqKfeXnR48xCpjnHaa4HMFwdtlrg99+PexYW8K84x92zPr4iiGO89LWv4UdPn8ZpxpCEoSZyIndS64xpUnddMK5KnSWpj0vmH/oQ7l5cxG8whtUJr8V/PHUKT5w9iyvj2B+lec7qGpRhf0DqUirD/oDt/DLNOU6CUgl93MH0+OM4sn8/ngUQFPmeTge/8F//K37OHky+r9UTvRYCSRapr6xAljWg8s4X0FM8W4USed15Jw4sLOAdQmA/59irFMJeD+evXMGbZ87gor1/Knxx86Lt1Dk3J3pe8YJR18O9JllkLiXEhz6EH6rV8M8AeLM8tmmhFDrnzuGHn3sOf6YUYpvQlUJsq/a8sefen1m7HfLs7847UT95El9iDDcX+Z44xh/9yZ/gb2fFF8gNNek1mIX9ueMtCMBuvx2LS0u4tV7HXs6xP0mAOMb5jQ2cf+klvOGcZ6b9ua5d96ENpLPleZP6TIzIze5wfaV79uCjKEjmAFCv4wduvhn/9+uv4zwAyTmklEg8D6zRQNLp6L9rNoGtLWB5GQgCfWFpCnbixGAwQynFJrnYo4yn00kDfd/yLbin2cR/xzkeYwx3uvtqNIA9e4AjR/B8GOJ3zp7Fx197DRc9T/srOYfyPKgk0YoojsGSRJN5GIK121oJnjkDuWr0Fp3fk0+C0aCa9ByLYpSrbXkZvNsF//CH8YTn4X+e9fGUAcbQuOkm/O9Jgr/33HP4giF1rhQYY2BSgnGOREr991KCdbt67F27BrRakGfOAPb9efLJ9IFb5r3Jsr9WK3Vv3X47/oeiZA4AnodvuucePPLMM3gqivquJyklEs7BpEQCZF8DIDsdd1r7s3+3tgbe6eixt7YG9oEP4PCePfh+xvABIXAvAOHub3kZOHQIr8Ux/vPaGn7j1Cm84tofY1BSahtMEjApoZaX+0IRFy5oYbWyArmyAube4yLnOSn4rHZsG7M9mB58EMeEwPdOs2/G0LjtNvxDIeDHMXzG4DEGTykIKSEaDYgoAu/1wJtNHWyjp/SZM6lfDShWZDCKzGmKd/vtWPnwh/Eri4v4rBD4wSwyt8E5Ttbr+OixY/jMe96D7+109Hlxrjd6zRg8KSHiGKLbBV9e1kS5sgJO52cG1La0tXkh65pYwU//W78Vv3i9kDmBMTRvvhm/dPIk7vM8BELAF0KPP/f+NBrgUqb3p90Gb7XSmguCfW/KrGR07a/R0Nd+ZQXNIMCPTrv//fvxE3Gsz18I+EA6Li075M2mfng3GvoY3PFZhv3lne+ePaj/lb+C/+3AATzrefgxIfAAMsicwBiO+D7+3k034ROPPoofX1hAw7a/JIHgHN7ioj4/OrdWS99fMwsf4Jei51gUpRG6m9ViGzPdzG4XfGkJH0UJM4MgwF87cgS30oByB1WjoQdWrwfe6WhSX1tLI9w24RVFnhJqt8GPHcO+m27C73GO78aEri3GsGdhAf/ygx/Ev0gSTRyMwQtD+DSwlIJIEj2wkgRiZQWi3QZfWQG/cAHcJXXCrJZty8pqcuMmRCiPPYaPCYG/OYvjmDUYQ/PwYfzi7bfj7iSBz3k6/mxhwVhq+C6pr62B5z1wi96fUfZHKaF33YXvZww3TnsdPA93P/QQvonzVFT1epr4iNRJVPm+djeS/Y3bp34U8maChm+Ce+7BrxnRUJ9kv4whqNXwPz34IH6z1cKSEPA9Dz7ZH6DvMdlfpzNI6rb9ucc6a5RC6HmD0Ca4Vgv8G74B7xQC31XGdzIGvncvTiaJJvIw3K4QggC8XteDKksllHEcWcqg0QC7+Wb8CmM4Oc2+gwDf+/73459EkSYMUn9GAfZVED207EFVhhIaF1kFLCsr25X5nj2o3303fosxfOusjmUeYAytI0fwS7feiiNJogmN1KqUmszJ4LNUKqm4MkQFMNr+1ta0//jgQbSEwI9M+32ERkM/1BiDR6SuFES9ns6Uyf7W1/UYoFTBWdifLR7uvx8fZQzfPs2+hcDDDz6If+15aEZRan+dTvrgoof2KPuz9zvLtXBLdbm46oDInKr+jO+8tO8MAtzCOXwaVDapxzF4HIOHoVYIvq8HtavS6biB8S70OEro0UdxG2P4UBnnWK/jv3/oIXyICANIB5WtBLNmInnT+zIHlLuvrPtPPvP778fPC4H3lfXdVYJzLN52G34qCFAnhR6G8Ox7RMIiSfT0XEo9i3JFhfvALXp/suyPXC3dLvjx4/ghxrBS0iWA5+EwY/qcSWiQ/QVBan/0UMubJRe1P/tzO0Zz/DgaQuAHSjrH9z30EH6Y7rFN7DRbrtf1vbVJPcv9OSv3mo2Z+dBtV0sQgD34IG4TAh8p8zs8DzcD6UCyp7tkTEKA1eua1IMgPSYiu0kU0rhKaHERP4ASM4j27sU/Xl7GEilBe1CREiRSd6f3ZSpBF8NiCRcupGrFBED/vhD4vrKPoUr4Pt710EP4OyQoiNSJ1OzZIpG6a/CzmpbT+KYxefgw6r6Pv1/W/gFACBziPH2A2fZH5x8E4FGkG6qtr2+3v0kwSjzQTPDYMfxVxrC/rPNsNPD9q6tYJVHl8g2R+iSialaYmtDzFKtNcJ0O+NIS/hpKTpMMArxDynRAQQc8PKW0Idkqwb7Y9P9Fp33DlNCNN2KB83KJi3O845578DdtXy39JNKwlVCee2lSNTQMowLDlnuBf/M344Oeh/91uquwM9Fq4W+cPIn3ZJG6bfTkTyYVRwZf1rTcJgq63zQ76nTA77wT38gY9pVz1hpC4CY6b2BQTCkF4fva/oRI6y2I7OzjnBTuubrikfNy1DmBMdSOHMGPeB4C2/ZgPciqElUuZqLQ6alE6qzXA/e86fxZWWAMNxlS84F0UCkF4Xl6MPm+HlCelxYRDJv2TQpXCd1xB75zkmKpcdFo4K8KgQCAx/n2KS4pwbwg1CQLFozCMLKxp76tFvhdd+Gd9Tp+FUOyC65nMAZ28834yQMHsELk5pK5G6Qnf3K7vT2APY2Cs/OwSWQEQb9ffKmzYwDgHPsaDTTs8wYG7S+KwCmWRYROxwcUtz/3XMn+7r8f7xYCD5Z9rkGAD+zfj4N2zMR+kLkxkyxvwDxQCqFnqQN7MD36KI5zjneV8V0OEgCeEBBAugkBniTgNKhoYLXbqdul6Be6ahRIldD6OlgQ4NvKObVBCIFDd96Jh8yA6qsDGkxuEHhYEKoslf7kk9oQ86a+Bw+itW8f/i/GsDTVye9wcI79d9+NH7PjObDUGwUJgwB8cVG7XoYZfBGfsg1SrFYP+Zrn4VtKO2ELYQgGQ+KGyEWSaPtLEk3mvZ6uyxjH7TLpmHSz6Gq10W0MioAxeMeP49tsMRWG6QOb4nb2TMx2vWQ9tGfhR5+K0O0Dynti9nrgS0vlqwMAkBJtSxl4NJikBDdPzL5Cp2kftQMt48lp55wHgV58AcB9ZZxbFvbu1WliRBzIIA1XJZSdqunC9ZvbQbg77sBPMoZjZX7fTkW9jv/mjjtwrwmWDdyfXi998IYheJKkAbRRrpdhGMfd2WyC3303HpvFrFFKbCkFDjM7BiCkBBdC2587S240BlX6NMg6V+PWuX/qE8vBwgIeJ/sbNhMjUVWFSi/d5WI/MWmZsFlM9wAgSdAmQ1FKE7k9mDwPPAzBONeETm6XYQMq76npfu7ORNbXwe66C4cZw8FyzzJFEOCYlOmAiuPBweTORqYNQmVhWJaBne/8+OO4Twj8YBnfeb3g5pvxdxkbzEc3sRxhB0lJxdmzqLJiHbb9ra9rVVyr4b+dxflKqe0PWqFzzrUNwpolcw7W62n7A4Yv2D0MWXUOrjrv9cAB3FvS6W2DEFilGRjZIHJidr6v+a+MmMEkKI3Q3Sdmq6VP6r77cJRz3FXW99iIY2zCDCYh0mkf57ocO4rASCXQgHIxzkXOUkLA4EzEZDDMTJ0DgOfhVlPIQYrIsx5o/UBUEKQB0jwVOG2FHpCdZdBqgddqCJpN/AJ2gN9cKUilssvNy4bv48577sE32y4xO53Wdo3Zrhe7inSaWAeNZVuxHjyIwPPwl0o7SQtSog1AcK5FlO1yiWMtpJIknSHTuq+uK6LId9v/R+f68MNYLTvwa4NzNG+6CYeI1G27o4f2pDGDst0uU1dsuk/MlRWwJNHqQEqwvXtno84BIEmwyViqDBjTgyiO9WeeBx5FYNw8tjwPTCk9sCxXRCFjzzrXIJjddA8AOMfSgQM4uLaG84xBAZCMwfN9SCkhDXnJOIaUErzTgeQ8jRmYYx443yK9JXIaPzEhtOr8lm/BD1fZObHTwVcvX8bTV6/i1XPncFYpyKUlLC8tYe/iIm7Yvx8PNho4PovvPngQ/2OjgU+FIVQcQwoBZd+fIIA0rhclJXgUQQUBFBm+RVT9PjxZ92iYyEgSTSRXr4LffTfex/Raq6WD7E9KbW+A/m4jqLixQyaEVulSgsUx2J6Czh8iQVdQrazo/S4vz1ZQAcDevTj21ls4H8dQjEECqd0ppZuRxTFkFOlrsLUFac+SXfsrG6U151pcBFtb06/NqjOMc/AgKD+7hRBF2CRXC9MNkrg1oFgU6RtPA6pWUpftrHM1zZlmNt0j7N+PY2truKSUJnOlIAGIJEFi+yzjGMz3waWEFEIbOK28UibsrJaVFbB3vxtHfR//qOzvGQdKITl/Hr/37LP4E3N9yNDU1au4cOUKziuFFwB84sYbccORI3h0zx7tFy3rGITADffcg+946il8nO5PksBjTJN5kmiDbzTAAfCNDd38iTpnktGfOAHmrl+Znmd+PcTKClgYpq1ha7XZ2Z9xeZKgYiSuYBE7ABCpU+MyimMRDEHnjk03VgdsF1RCgPv+7Am91cIqgKeEgFQKHqBJ3ba/ONYqXSktqIQYnJHkrRdcBgq7XOyLnOWC8H2wkydxmPPRi1cURRxjy0z3uFKa1GlLknQw0d9TpL2M73bPtV4H5xz3lLHvEd97FBjM9wUgfF9PdWlQBQG4HTOYdoo7KgBH+c4rK/gZxtAo85zHQRxj/dln8S+feQZ/JKVubWu6/iUAYgCxUog4R8wYovPncfapp/CbX/oS/pcwxOtlHsuePfieVguLSIOFA1kR9bqOd1DtQN49GjU1d7PL6F4AQLMJvrQEz/Pw4TLPzUaSaEFFpE52lyTaBgFtfyYTBrbbc5pMsyx3i+fNR1DV67gVjv15Xj9tsZ/ZE8eD9mfvo0iF+rgoROijAhTr6zq7ZWVlduoAAMIQbaMM2DAyp6dk3n4m8Vvaf0uDst0GO3kSx+eRnmcGlKcUBKVrUmaP5+kBRTMSO1XMPYdJ/OhZAy6r8dp734uHGMMHSznRCaAU5Isv4tfeegtnGdN98YF0EQpA9ywH0k0pREohOncOr3360/jJK1fwe2UdD+dYuOMOfAjG8IF+fKOfYuoGSN1isKwxmXUfbHcLwczG2LvfjfcyhgNlnZeLOMamIe5tNghou7NtECgeFCW44pH22WxCzMPN5/s4AmN/MGnSlIxBgor4JgzzkxNmVWRUapaLrVg9D0wIfKDM/bvo9foDqg8ic4Kt0KdB1sML0NNHU8gzl/S8IMBhe1bCuR5Mxt3EKYZgp2oC+uEzbe5vXlCYAuBLS/jxcs92PJw/j/989ixOk4sFRpUr1VflkVKIGEMkJULGBrc4Ruepp/BrFy/iY2Ud0549+HYYw/e8QUWXFcB2i8Em7QHiCioza3y8rPPJgklK6B+Pa3ujMKlKd0mQMszabbCjR3EjY2hOsr8i8H3cDCerxzyk+2Ruxw7KTNUcB6UQOk33gHQKtLgIj/PyK7Zs9HrYMi8HlIH+YPYX0JnuFV4wYBIIgSapcxpIpBDsVLEoGqyQLaPlgf3/LoE88gjuYwzfPP0ZToZ2G19+9ln8iU3mpMqRQ+qkzonQpUSoFKK/+Av8xytX8P+WcVy+j8MnTuj+23GcKjpS6Z6nicAuRimaZupmtzSberrPOR4p41zyEEXYBLStEZmTHZYlpLKQJagWFuZjf4zB933U6KEshE7RtF0utqjKqlCfZfpiYUJ31Rqgn5iU+3rnnbiHMbTKOcxsbG2hPcv9A9mKyPWfex6YaRQ2D/gUCOY8VehZbpesATXpl2X5zt22yM0m+OIifqLsEx19bJBf/jL+A7RLRSJ1p8SA9pVzPqjMOU+VuZR6o/dKIfqzP8O/abfxh2Uc38GD+AisSmZXoVMA21bpWdWFwPa8/6zZEpC6W266CU0hZhe/ArTLcxrhRIsuj4Ms96Btf7Xa3OwPvo+AZslS6mQMo8j7FbKu2/O6Uuh2qTE14Wm18N4y9p0HpSDbbWyM+/dJkj948qLOeb5j97NOB4wxHBr3WKaEbw8mi9z7mT12qhj9k5sPOw6GnT/d704H/IEHcI8QsyktH4b1dXzx8mWsWW4WW5lHsHzlhtjDJNnucrE3pRB9/vP4pSjCV6c9vnodD950Ew7BInNgO6lTAC3Llw6krgYitayiLiAVVL4PdssteAgoL3snC5ubuDbu30pZTmZHVnXoPGfIAOB5qJHLhdwudoYdbXbcjmZf9L7M3ko2Jib0rIpJN0Bh/OffUNZBZiFJcDmK9NqF+rjc/Gr93h1ItJr3JMhSB/ZsBADYFGs0TgLji6Wc+366Zt6AsjN7imYWDCuoMu61Knzn6swZ/CHnOj3RdrPAcbXYipxIHUCPPk+SQaKXEluvvIKfMw+KwmAM7NZb8ZftALZ53a9mJl/6qIwXQl4g22nExRYWZmt/AGAeptvsTimoPAKPosnsb5z4TqcDJsT8CF0IBIyltkduJiG0sKLMHrJBOxA868DoVAo9L7puSmMfnu7QhiOKcNH9TCkoIfQGpGROPxuN6VRC1lPV9/VN43w+Cp0x+NAxg4kG1LSZLkC27/zee3G7ELNLjcvDxgaeu3ABb5pFe7eROeeazKXUCj1JEJrPBkgcQA+G3InwpUT01a/iy+02fmva41xcxDeaPPcBle72O3HTTF01l2f8QxTrTGfISYKtTqcfw4Jtdzak1IVT5n/6v7fdLePOkF37q0JQAdrlQq4WN7vHniVTy4NhLUfK7o9eiNDdg3Cj6/ffj5OzTuGLIqxx3h8I2waES+q12nhkPk7VJBkbPXlbLXiM4YYxD30qmHJyJmWa7ztsQGUd+ziZLqPaHZDvfHkZ34eS+9yPg9dfxydM8VACpDnnROYAYiJzKREJoUk9jgf96KTMbaLnXJP/F76AX41jvDHNcXKOxePHcdJV6RREI4We1bffvVc2qWelKwI6hfbAAdQ5n22RTRyn6txW6aTQXZVuk/nS0mTCKo9vgPkLKgAwfVwGbE4pXcxHLQ9GpUrP7NiK/qOdwkefkTpYXJytOgCAbhdrQDqY7IFEn/n+dmUAAGEItbIC1W5DbWyMN7jc86WnreeB3XILbkSJVbfDYLtc7M1E1vsDiv5+3KZkNsZNjWO62X8pa8ROgiTB+muv4RXjapGMIeF8MM9cSq3QaYtjTdhC6NeGtEMhNNnT700aYyglom4X7YsX8SvTHu+BA3iE0kyzisHsvuF5xWA2edvEnpWueOQIHmAMwbTHPQxhCFMrPWh/7gyZNkDPkIu4PIF8vgH0GJ9jDAu+j4BEFW1kg7TZVerUw2YYyioumojQ8zoO2tM9ABBiPoSeRebpsQ6SOmFSH14W3HjB0tL8pnsAEASpQqABNWkx1TjIqwoldf7ww3iMMdxUxjlNgnYbX2aDlaADr+0iIim1QgcQE3F7HqIk0e4XzlPVHscpwZNif/ZZ/FGS4Ow0x9ts4mFqYJWVlaSsTn2jOmUSsdn9+IHBjI9mc/b21+uNN0MmjDtDHhe2oDp4EE02g/bAeWAMvlvQaP1uQEzRa3e1plmhsELPSpcCgFoNnHO8p5zDy8fGBi4AAOe6FwZ9bk/13ClfHE83qFwDotem2GBu8DydvSDl4EByq/KAwUE1DbLasjYa+O4y9j0pLl7El0id20SOwUrQmFwttEmJyPMQRVFK6kmiP6Of9ABIkv6DoHf5Mj4+zfF6Hm44fBirps/JtmwXd3WfUSmMtlrPSUiYC6EDo2fIUkKVMUMehkOH5m9/RNxZFbLk8gSALLfnLHPRCxF6VsUWlfu/6104wWbU3c3G1au4YA8eIvas6d6wlMVp0G7rLBLPm69K9X2tEIB0QLl/Q1M+QKuYcUqulVIsL1XRDbwdP45FzmezOtMwSInw1VdxyvjP+y4X2oTQZO55/UyXGECcJIjofa2Wvo9jTd6+P0jwnqd/LyWi55/H70jZdzEUwg034GGYVrNUQ2DnLRsfOxvWA8QmdQpQA4MVk/U6apzjgWmOdRy029r+OB8kctevbrs94xhq1Ax5WAzL9giYfTPPAwsCvKOs8xoHJjEByIgd2dWyROqdzvx86VNlubj558Z/PvN0KSmx1W7rKjVgu8vF86A8b3Dg2AMqDKE6HajV1fGJ3p2R2BBiftM9AOBc++vdqZ4dFDXHlZmLDoyuFs0rHKNVqG67DR9hFTTh2trCi3GMnqvODXEnSaKJXSnEJmDaJ3Z3CwJEjUb6XkrEROzmoRAphTgM0Vlfx7V7slUAACAASURBVG9Mc9yLi3iYysSR0wOEVvYZ1gPE7GvgngBpxeSJE7iXMdSnOdZxsLGRPuBITNFM2fWdlymoXI8AMH/7E0JnmgGp3VFTMiB7hlxWU8BRmJjQR6XZeN7sp3tRhIuuOqDfSZl+RlO+Uf67F16AeuKJ8QedHYAyN2yuA4qCMkC+Qs8rvbaXpBsX9oPbWoXqrxc7+ulw+TK+pNISf0m+dJOPntiqnEidfkqZkjdjSDodTfhS6s0md3c7cwa/bfZbCEGAYwcO4IDK6AHiBkfdHiD2Yt9E5lSt66YrLizM3v6Ugrx8GZeyYldCaDHledtJ3RZUZRwHzZDn6T8HACFGJ0DMsvXB0O8t+o95+a9CzN5/TjnoROr02k2XohzYsqrU8jDrFE0XntcfUEOnfIRJp3zD1qj0fbB3vxu3zLpwLAtKQZ09i+eY1bdFSu12AVLiZlaHRZvMOe+7ZRIpEccx4o0N/RnnmuDptaXiY6UQr63hUhji81McPjt8GA+5LhcidWrZYLdeddelpB3ZrhZgMCA6D/95kuCSeYhuS1ckQWX/fZagKjpDBrYXyAkxX/szCj13hjzufmZRLTo2oWf1PwcGKybf9S6sshm26yR0u7gADKoCIQbVgkviSaLVwdKSdrfQ5+M0m8/qsmhj3grB8uENYNJud4Rhs66sYOjKCr4LFeSe93r46vo6rhGJUx46bVKmzbkMcVNKY+L76euNDf2zVoPkXL8WIiV7+jub2AHE7TZ+d5rjX17Gw7Twi7LWwKVOmdStjypHqSDMbttAZE6zLPu+hCE457NdNQsYSFncFgy1feg0Qx61v0lnyEDqYjI9i+Zqf3BSlMe1O7e4bxaYSKHntZCl/i1LS7NtBkTo9fopiwMDiQKipBSGBUWnWb3HUUSMMSxPcToTw1LoAz48+iwr26UIstJSjSugEnfLlSt4DtBLfxGp02vynZM6jyL9Oo5T0g8CyE4HslaDbDQghUBSr+ufnpeSPZE6ETu9fukl/LFSaXXkpKjXcVerhQXb7eJ2yoxj8KwKw7U1bW+tlt4ajcEUOLN+7zHGsFjGtR6GKMIajO1RIgIJKmCwQptmyLagmsEhzdX+hEizXLLInOwua2GPWWPq5lx2Pqjvz37FHgDodAYyDgYGCA0uVx1kFTWUkTJlMO8BNbMipmFd/Ho98EcewYOMzaf3u4tz5/CMpcz7ZA7jTwe0Lz1JBpV7FEGGIWS3m5J5uw157Vq6tdv681oNkkidcyTdbrqfa9ew2evhE0WPnzF4R4/iflM/kNsp013xhoKjROr2LNGu/1hcnJv99dtuuO4V1+2Z8//X9QyZkhJG/E0miU+zUtM4GIvQhxUUAWn6EJ/DEmwAcO2aLmrIy4G1B1mSDAZFKQe2rGOpQqELgQBjujyGRdldH15WFz+3CrHRwPdMceiFEUVYu3AB56SENPe+73KhgKiUkHGculviGNLz9Ob7g2Team3f2m2t1ms1Tf6dTup6CUO9z/X16dwue/bgbiLzYW4XO9slq78Lkbs9W5yXoOp2dcoixqwSTRIoV1CVPEOeqw+dXJ5uHYhdC1IVCit0t/9ypwPG57AElImwb8tyyQqI+n7qbhknBzYLLsm5QWBg/kFRPsaixmW4W3L6vs899xwAtrZwGtD33Ha3kEo3RC85h7TJnNR5pwO5tZWSeaejC1to63T0Is1hCEVK3ff1Pmy1f+YM/kwphEXPIwhwnMjcdrvYpePDVrxZW0tdLUGQ+s/nKag2NgYE1TYbdGfIeVlmZc2QK1DoM21LPA0mnrpnBUSN/+7WeRBbkuCyyT+2s1wUtG9VxbEmc84H/mdAoQcBsLoKteF0Ux9V1GBa0Q5gzx60MKc+LoSsPHTCJFF2QE9n7dXl89aovHoV/L3vxZ2MYX/R454GW1t4I8fdQlkuRLwyjjWphyFkEOj/qdd1Kt3amiacdntbloW6cAHcKHVQSwXP0w8Jz4MMQyTr69iKY3zJ94sV7/g+bvE8+HGM2JA4B/TPOO4TPTMdGBkAtrGhib5e335fkkQfpwmInix8gSfAlStplbYhbdsGoZT+CWjbE0ILKiHSGfLaVGVaKcwMdK4z5HFcLtbfMim1FyNJRv/9tBhboWcFRG3ltrw8n4Ao5aBnuVuAtKiIpnukDvIUepEIO6HTATtwYL6DCcj3oU9K5jbGcbcsLs52SbNhWF/Hm4YoJLlbSJGTQk8SvQmhCbhW0zO0OIYidU4l5+aBPrCRUu90dPCu1YIilR6Ger+MIQlDfK7oeTAG79Ah3Gorc9v1Yq94E8fgnU66aEwQDG50XzwP7N57cXROgmqz08EW2ZuduggMulrsGTJQrI/SmDPkudqgm2U2jd2VjamDovP235kIO1x3C5AWFZnjmkmlGoF80vX63FOmMtMWyxxUeU2ffH/2NQZ5uHIFbxoyV5ynmS62q8V2t0gJFUVaodvpqpT/vLGh1bq9ra5qUjekL7e2tKsmDFP3SxxDXr2Kz05zLnv34jgRue16sRcosd0udnDUJnQKhpoGcXOxvzhOa0BsUqdsF6rQzqsUpaKirBz0UTPkrIK4OAafR2aPDcYGs8wyfl9KllkRjCT0YSsU2eW38/CfA0C3i0uwUqbS4xwsbHAbdNnqYJy1DPPaWZJipfe12vwJ3Z3ylZUHO2xVIhOAmumiJXlIEnSuXMFlUuhSamJnTAdILaWu4hjS96HCUCv0ONZKm4jEDca98AIUuZw2NjSpuyq90YAif7wQkKdO4Tmlxl/+0EWjoQndTjllZoESYS303euBUUtdCo6ur6eb76fxKzHj9UMJUaQrRIHtyQhke56n1TmQ+s9nMUMGgBtuQAu6lcLcYBN6Ecwy02UshU7TnrwVQ+YVEAWAble7XIDBFYqyioqCQE/5SCGMW1RkL+4A5Fd0maKGubtcbEKfRR6su0Zluw12xx04xBgOT3fkxRBFeJNiJfQg51yTuutq8X1N6rWaJnW73HxlZVCd27GDF17Qn5HrZWVF/08UQXW7WqWTQle6qdefFT2feh3HlEpXnBqWvkgLDZPbhfZBr6m4xvPmY39hiEtA6mrJKyoCUpU+q+Z4nQ7Y/v3V2J+d4bKTUMjl4q4Ycv/9ODKvSPPmph5QyEiZovduc6BxGutPslIRkBrUvKd7BqUOphMnti9x5i76vW9fdf7zbhfnLMKglMW+MrcVYhxDusUsUZSqbnffWeqQVDplvERRf199Ug9D/EXR8/F9HDbLmPXTF8ndwqwVp8jlQm4XUum0UXaLWbGnkhlyVlERbfbSc5POkPPgruUbBPPNMDPYkWQOTEDoWSv20FS81ZqP/w4ANjZwyXK1DCgDNw8WmE3KlL1SiuehWXQ/RUGGX/Z+3UUTAH2u9Tp4lf7zrS28QS4W8qOT/9xNVyQy8TxIepC71YmuOn/iCT3tJ5UOaNcMkToFR0n1CwG5uYlTRc+HMYjDh3HUKHTKX+6nMHIO5nngtC6svZKRTeZkfydOzCfDDNBFRXkJCW4NCLB96blJi4qAkTPkudsfhvBm1QHSoYSe50d2C4rq9fkQulJILl/GZfM6czBRD4msCHueH3VKLJS4r7Gg1PTB7GGw/eeWj7YyQl9f1y4Xur+W71wJMTgjI/+5290va0GFPN8t/Y3tdonjAb+8fOMNvDDNOS0vZ/vRjSrnUaRJnVoBmL77rN0eJPMwBF9enp+g2tzsV4n2C4uAVEy59wMoNkMed0k2369GUAHbydsOgtrrEcwTExGDHWl2CormMqCSBFfIqO3+y1lFRdb/DKxUNGmVaNZahoDOLAAAxipRCFMPlqyFoulzN13x+HHs4xx3TPudRXH5slbolN1CCp3uuUlTVJThYqcr2v3vx/kuUu7kdgG0GLDdLkEA9dZbuCIlzhc9p2YTx6S1jBnn6TqxtC5sFKUuFzvbxSryYkLMT1ABwLVreoacFxgFBjPMsqq0R61U5MawskCzZM7nL6iy/OeTKnOyvxMnwEa1JJ8EYxN6VkFRfydz8t9FES7bSs1891xXKspYaHnuA2qcwTOsl4QdC1hZ0Zktw9aoPHwYD6Eiv2GSoL2xgWuwfOeWEiS3i0oS/dP1n9v7Wl1Ng6Gkzm1lSJ/ZrgA326VW06QuBGSSFHe71Os4RgTu5qOT/9zehEhVOm1hqPPV52V/UqLTbusc9KwqbWBwpaJpq7RdZLTNZYzN3/4woS3suOZcWQVFQL/D22E2hyXngLQPOsFNmZrFSkXDYIxpRyn0SXJfs1Ytylqj0vOqC4iGYRoQpaAoqXMidkpZzHqQk992UjdbVrZLHKdZU+Z7Xix6Xp6HQ40G6kTmtlqnvi6cg4WhTl+MY03eRObGDcZ6PTDOcVfR45gEUdRPSAAw3kpFZYkqe0bpFBVV5nKZFOMsAzktRhJ63nTAWnJuLvmvANDr6RzYLHXg+tDtKtE8TJoDaxMdfVbFgGJM3zd36ldWQMZeoxIAfL+a/HMA6HZTd8uw+24vSFyrpc2g7NVx8qb5ozKcXEKv1fR3dbtTBUb5ygre4ZK57UunZl222yUMda90en/33fPLMIvj1N3iKvOiKxVNmoPuzpB3gsuz6kCojbFdLnnNmubpv5s0ZWqWfZhJIaAClwsyFPq0g8pedBhIi5BuuAHNeU3ps7C5iXM2iRCxm8DogDLPm+aPEzchUrezXWw/+tJS6kenLJrLl6cLjLZaejGYLDKnn+RHp+pRm9x7PbDl5fndmyxBBaSpwq4PfdRKRXamUR7cdFob5jpUYX993txJZA4MIfRRUWYrIDqXhkAA0On0q9S2pUfZrpe8kv8iKVMubIXQ64FVpBBmBteldugQ7gKq6y7XbuOtPFVuu9ns3j12INwtNR+HRFzY6YtUNZokUC+/jFeVQq/oudVqOOAGRoXQLhgKjBKR06IX7hYE87M/U1Q0UKWd50OfI3ac/cVxdSQ/VKFnVUraAVGjHG6f7SGm2NgY8KEPtOu0c9CBNNOljD7MWb5mQkVBmbFnVuTvG+a/o/Oze2VYM7DVaQ50WnQ6uAqkytwuJMpyudg+dFLo9CCnh3hWQDQLth+d9mf70ZlegPpc0XPzfex31bnpnsgpddEOilI7ANrM53Ozv253MIblVmmPmiFPU1AE5Lo8q0hK4OMq815vvuQ+UdqiWyl54ADqjOFQ+Ye1HUpBXbo0mOUyLGUqa2ELel3iSkUA0ChxX2PBHUyj3g+D+7ByXWqc48h0Rzsdtraw7t7nYSQC5K8fOwrDCJ7Gj+tHlxJni55bEOAAkJK560t3s1xclW5I/XjR758U7bbup4OMpR/pngybIdsoOkN2sdOSEqpGJqHb7pZhFaJHj+J43j7KRpLgWpIgBrL7SNB78qXS/03qS82DrV6tYhuGCqZ8NmEPI+9JovFuXrrlUrul2FFOD6Ug2220qY8LrHYPWSRCD/JxCllGYVg+OpDGa+K4OKF7XqrQ85p1RVHaCoBUOm1LSwgYm98D99q1tNMisF1MDZshT1PUlzVD9jz9QEM1Lpdcu7LdLTuy26INd8rTbOK2WRxUFtwIe5kpU+P0ccn/350RFC0DdkER0HepVabQpcRGXgGLrQ7zZmWErEKWYfd8WD46kI6tIIBSajpCt851W2DU9qOHYarKabvlFhzJaqU8C0iJcH0d67aYsn+fl22Uta9pZsgZdSA7htCzFmqfN8YidLdCFNBPSCHmR+iUA+saODCYMgVocrfbdgLD+zBPiUoGVJnd3s6cGew1TdWIhtArU+hxnLpbsmZldqtkmpVllfxP8p2jHu52gZGUUL1ecUIXAvuUSitE3c1W4/Zao7Tt3Ts/d0scpy038u4FMHzpx7x7MY6gyuqFrv93ZxD6KHu0suJmikI+dMvlMDdCnzRlCkh9eGX1Yc5ZcbxyH3pRuG4Wu8e9qTHwGcMNZXxXESQJNvJmZW4TtllVBucVGJnjU2FYnNAZg7+8jCVS5+azvjq3Oy9GUarShQDzffAgwLGyznMUhs2QSVDZM2RgNgvLuKhyhrzTUhaBMQg9qwe6pd7mphB6PZ0yBQz3odPf08DKats5SUAmr9MbAOzdizrmFENwMHW3tzzFA6QZLkeO4Miw75o14hjr9vthKYuA7htSVmXwqIc9uV0uXixO6ACwtJTmotOUnQKi9NPOdnFcMHOzvzAcvrAFoJd/BGY/Q94BMazKbGIUhh6YW/Jv/870UZhbSpspKuqT9rh9mOn/p02ZItg9bBYXK1EHuSjS7c1W6XYOOgC0WtW5W4DU5TJuZfCo/RVdHcfuj+5WjJ49iwvT5KK3WjowCqQFRnluFyJyaqvrefNT6GGoXS7j+tCB7TNk2wanXamIUNEMeQCTuD8zYgClYqInjZ3hctdduHmeF7PXSxemzVLmLrG7/TzKPBaaoTQa1RB6lkKYZvrXag0+sC0FVGnKYhhiAyMqg+nnLCqD7f7oLqhi1KxgdKHod9TrWqG7qYuk1m1Sd5U6Yzha9HsnRRxjE0NmyG6nU3eGXEZRXw4qTUooM5ZVBnIJfVRLx4WF+RU0AJrQzct++hqQ3YcZ0NPvMtLXhqFer6xKbSIfHnV7o+wkylbKArnUAMDzqlXoUYRr9HpYZXDe/5dNIpTpYrvxzINks+g+gwD7gUEyBwZ96XbqIm2HDuHAvHq4AEAUoQMMrhBm1wPY98KdIZclqHLW4txRC1wA1WW4AGMo9LweLkEwP/8dAIQhOuP0YQa2B2PG7cOchyyXEwAIMf/pnkEpA8b1o9vTQRN8q1Shd7va5YKc5QaB7e2Sy6gMHgeNRtrXhfO+2JgYVC1K7+3UxSyXC5H7gQPzc7cA2v7y7kVe6+oyBNWwGFarBZ9NuWBzQewoVW5jYud+FRkuALC5ic08lwt9lpe+Nmy/0+SgC4FW0f+dEoUrQ/N8eG7LXBP0rmRRaEK3q4OibiELkM7MxvGfT/oQzxoT9oPBJSkpixO652mVTQROrwFdpEKkDmjlR9vCwnwFVRRhk1wtwPbrOe7Sjy4mtT87hrW8XFkM6+1B6M6iFnMbUEpB9noIzfcqa2D1iXze6VIV9kIfu1J0XNDsI6M1aaUKfWtrsJBl2AN9WKsHF5OSiP1AsFsAUFbNNITuFgbR/STitguNbLeL5823x47tcqGf85ohu7BiWJXZ305MWQQyCD2vyyIZfRUpi1Jqd4v9mZsDa/5urGyHceG27rRdTgDgeTtTIUzS7c11u1irFC0zhuWiB1gC1Pq69qG7D/BpC1mKwm7SZX/OeXEfOmMIpBwMhrpuF/KjO71d5upy6XbTh5Ybz7A/y2u7MQs0mzvT/lxUvmKR22XRJnMAOHgQDcZwcF4HKeVgQCZrQM1zpSJCFSlT5nvHnlnldXtzYwLu+337qg2IJgm2TAZJP7PCfai7D+9ZzMzcdrtuky4zzgordM4RuJ/lNeiyfehCzNcd1utpH/o4GS5AufciL4bledUmJWTBDYjOk8yBCVwudgXhO96Bldkd0nYQodtwy7+B4Y31bZSYA7uj8tCnxfp6uvB3rVapOoeUqc/WfoCPmpXZC4KXiRFioDChA5rQ7dzzrFQ41+XCmE53nAeUgtraQtc6lm3XIq9iN2+lojJQlcsTOYRuu2Hofs3vkMz35v0ib7V7QDfmn+VBuZBy+8K07t9kfTZLmCyQqgbUWP2YR6VPkerJSmOs0FgAAErpmElWrQHBnpW5D/FZ9O6xuy4Cqd9eqelcLln3cliRUb0OnzEsFj+TyaAUuoylfeiBfJen/X/2w7Wswj6CaX9QVR1I5v2q4lhcTBQUtRYNnjeh5yr0rFxku8DE/b+Sixp2lEIYBrs5kD19zUnHZFW5kwhKIc5q6TDP3j3D/t7+jmkJnV7bfnN6HcdpkZH5XrZ/f9qlcR5w7W+Uy5OCxcP2Oc69GBXDqlqh77SiImAEoVMfYlfB+f58CT1JUh+63ZjJhV32Tyi7StRGVS6XYWqg6PJXZCwUJ9kBhB4B26sSnb8ZyEd39zGNKrQzYdw2uvSa8tBLIvTc+2YvSQcAS0vYV/T7imBSl2fefqZZBjALFbo8r49eLsPWEaVV4Dud+frvACCO0YGT+2pXqQHZBj0N3EpZt7AKqKx1JzCHfsxVE7qUiOCUmgOjK0RnmVVBcEVCkkyVtsh9H4LeO2uMDuSg02f1+vwVuu3yzPqbebs8gUrtbwA7xd0CDHnSUIZLVlc+xqqd8rmY5WCye8G72EmEPs30L6vxWoXxAQDa5WJ+DhQSuX+X1YzNXXquZDcbgMHiIqWmCorC91ED8n2zROak0oNgvgqdZsiEKsg7B5XFsOjFTiJzYMypA61iQznoQsw9yyWZ5v/LDshYqGTKR6ptmsHkutF20OwDQOpyMa+3KXSg2KxsmsrgLBi3S2GXCwB4XupHd5eiy/p7zucrqJTabn/DUoiHxbDKhBA7z+U57PfDFmovC4V8QYzNVyF4nlYwo5DVaZFQdk+PXq+6wGFRNe77g+1xgewMF5M7uxNcLrlwSX0e1cEuGg39nWE4HaEHQXamC5AGSiknnTEw38feab5vUnA+3P7crpfzOKadMEaLYlhzvGmRSejDUhaB+btcRg2oqlBhUGbgvowi+LzihmEDq2ofOtDPchkIimYtRGxjlt01s2AyOqZ1ufRz0e3Ps0g+jsGE2FmEbv0dC8NyyGqcGBbnu0FRFyMPLMu/iozmPLPEJANq1scCAJ1O/3uq6iXRv29FydyGrdotl8tOUujbAuLO3yogVczzRhRN7XLZttCz3aiLmnRV5a+tUlDtxBhWXvEX/S7r8x21pqj7ZFQK7dke1iBGDSi3QiuLxIYtuTYJ2u2B/ezI5kBFHmxUJWp9R6U+dNfl4vpq81JXZwV3bVH7d71euT70PN85oO9tkkz3fZNilP25443ez8FnvGOSEoBBHqKqXiHA8tpvUFo4YViW4bgoNHWYN6F7Xn4Z+jiqJacx/sSwu02a4puqSS+zRJxe55Uej1oGywzAql0u23zoLqnbec9up0Xq7jezg7MCfpcuTUewQmxX6EB250Vguna9RcA5lrLcQcOExax7mJgYVqUuz2m6npYlMF0U9QXNVSH4Pm6E81SkYBG9t3N2bdgkPA120GopgHPfsozLvRaepxU4XQ86n7yH3U5wuWTlPQ/LrqgKV6+iC0AW/f9JsriMgp+3Qg/27MF+EhB56ZXDepc0GmAUk3MrQIuiwjE6NNYxbIa1o9YUBfSTV8r5KnQhsLC0pFWClNunpDZ50QK6ptfDtos3bAWUcf/W9GL27LLteWKUMrA/Gzbly+qDbsUHqib0mF6PIu9hGS7T9t8eVqLuNAIrbKhJgsSdbQ0jz3kTOgDs34+b7OOxi59cIdHrDbo9s0hs1BKXw2CN0Z2QlNB/nSTZ3CSELsgkl6YtolyOmdbtcl24XABg3z49oIDsxkWkEGhAuf+fpxDcCzjuBd2zp1J3y7agjJu/TNcC0KTe6aSl/UGQpi/ST7vsXwgwpap1JyXJ8LTFPMyjUtRFowEPUxC6/fAaB9MWMhXBwgJuypoJJokO2lLRkx3D8rxsUWVjUvvbYTEs5rwfeNDZQpMEpj1DtvlomgecjevC5QIAy8u4xV1Ely6cO6AAfQFpQI1SCDSI6OeTT4LlTQtpgDab1RI60FdL/WtiKwS7hzYweD1oUNF1cWMD5v/rcz0jB6Py0AnuggqzO6J8LC5Od63ieLKH17RZNUWwsJD2x6cFOUhUuP3age32t7ams1XcQCCw3f4IrnrdQTGsbTNk2wVsXw/yGADpA87mI/t6ECdNo9ILEXqSzF+hLy/jHlsh0IByFwEwzf/ZOAMqi9Rd2M31bQW7sFBpL3Q61syZihDg9oCKInC6Hu32oEq3FbqV38uA7EDdvCAlorwFFao8riy0WtO53uJ4MoUeRZUo9LsYA7d7zRhBxd0ZMrn5yM2wvj64QMXKihZMefbnCqpGY/D/LXdOlYTe5yG7S2aexyAIwLP4CEivBzBI6rRNcmDXjcul0cAdzSaa9nJdeRfQ98GzBhRNc+wLOAw2+dsLfADVlR0bDPRDJ2XuuF14koB7niZz1+2yvp5uvq+vEy0ObXZbyOUxD2StkFMlqDCoKLJmI1mLSBDieP72JwSWbrkFx+1ZIefgNPakTEVEHKdjznbzkf2RXY3janCLG0lU+T44Y5XNIrclJdBP8hhIqW0vScCDYDsfLS+D29cji9QJk5C6V+Rsul28ujBnOmMM3pEjuOfUKXwa6KsCHsfgptCGex445+BhqEldKf13pBpclX7iBPDkk9u/68QJfYEBnV60tqbfm97U1LyqMkK3jcp6uHFo3zq3jStJwH1fX6cggDILbvOm0TZRBOX7ej+djja6TgdMSvR4hfVwnE82Nqso/SeM25oiD1GEOI/AlYJijjmfO4ezR49CYc6rz99wA+577TWcMuOOI50hDtijmSnzRgPcVLYyz0vt78wZrUrX1qAMqQ+A7G9xEWxtTVeJLi/3HxwQAmz/fizM+/wtuLbHpARXSl8DIfS1iSIwz9PXhPjI98FpUZB2G3xlBThzBnJ1tX/ueOEFqCefBLMD8kopNk4fokIme/48Xiryf9PihhvwGNKLyY27hZObwValpBLqdfBeD7zb1U/ErKciPRnpNQ0mUgc03SMV2+uBVbyiT9aAYkrpB5p1ffrXIorSn+YceLutf/Z6+jOaKptFwHsVnt9EhF4lmQOAENMpdDsA7DYio9c0G1EKamMDW1LizWm+swiWlvDeIEDNEkqcc01USaKFhKtKo0iPL1uVkqgi0UR2Z9sfoNV5q6Vt1i5uFAKsyhgWY2mbY6UGhCMnXrKvBdkg2V+vB97pgNuul7KU+sSEniRQZ87gmpR4a9L/nRb1Ot519CjeScRFg0kpfSFtUvd9cCkhwlArhWYTvNUCN09FfuECzhW1gQAAIABJREFU+Noa+Ooq+MoK2GOP6Z82mbdaYO22vvCdDrjva/VqCK9SH7qUegDR+dP1MEpBeB6EUhBJot/X6xC+D95oQEgJUa/r62KtQtWPPZgsl0oJnbHhhL5T3C0AEATTKfQkGe5Dp3O1q2OjCKen+c4i8DzsPXECj9tERmNPiD6ZcVuVBgF4va7tr9vV9tdogLn2Z2+Li3qz7Y8qmUlQ1WrVuzyJyIGUzDkHJ9szdtjnI/t6kMhcXtbXpCxSLzyplhIvFv3faXDkCL7LHUxKQZCrwfP670Uc69f2U5FInZTCmTNga2vgNIjW1sBtMnfVQRDoKaXnVT+gjErgJljVH1D0gAPSQSWlfm1cLzwMtVqo1/XPMNQzGnLVVE3otkIf5k/eCZByOkIPw0EfOi3ekvNdSimoKMLL03xnUays4NtrNTQYG7Q9pSCE0MROY47GWxhq+7NFFdkfEbu9nTmjP6cZdRCANZtagNA49X20qjh/Azte1bc32/boOtBG9qfUoMi0SX1lRZ/7KFIfhqEqaHUV6sIF3Y5WSt3pjnO9MG4c4yXPw/unvDATo17HHSdP4n0vvIBPSAkBQAgBwRhEHPcvmqRNSqhGA6rTAaQEzE8WhmBmqq5WVvR5AmmqlPHb9dW5GbTk0uAVlh2DMXgHDuDGRgP1ZhM130ejVkPD8+BHES50u3j92jV87Y038AYAGYbaZ2eyRiAlEqXAGg19b4NA+yXNlJAIPazq/IDJfeizgsm4yAQFyKcJiiqFZFjmTtYi2VJC9Xp4uVUBpQmB5XvuwXd8/vP4NSIxQ1Yc0PZobE+YlaWksT/RMxLBtr9OR9uf+z1ra9pn3mppIUb212jo91UnJezfj4ONBmr1Ouq1GupBgIYQaEiJS90uzrbbeP38ebzW7SKx+MheBxkA0GwCW1vA8jKwtgZpSH2kTz0PmUbzwgtQjz02/KkQhnixXlGM+eab8QObmzj72ms4ZQaOPZiE70NKqS9iva4fRkEAFYaa1JtNyCgCa7Ugg2Cw50e7rTNalpeBbrfvDxP1up46kSJmrDqFUK/j1gcewD8d9XcnTuDVS5fwS888g9+XEtL4/mBInUkJFce6ZF0p7e8MAp2atpMU+k7HNBXD9mpceWumeh5UbJwy5jW7ehUv759rE+sUe/fi2+66C68+/zz+BIAw2S4C0MJKKUjG4EkJVa9DdjpAo6HFlLEnIutt9gcM2l+no+M8i4va/miGKUR19sc5/AcewE+N+rs77sDla9fwK08/jd+M43T9VSn7wgrAdlKnwLFL6rTfYQHSiVwuUZSq9c1NnJrkf8sEYwhuuw0/tm8fDnIODv1g8hjTWxzDUwqCMXi9Xvp5owHBuX4tJcTVq/CSBEII/Z62JNEbvTdkPjB9QnU5sGNDCNx68CB+5vHH8bFWCy26JgC8ej09Fym1W4rcSUkCDlSr0FEwA2vWsPty02fTFGElCTaA/FWZCEKkhOB5UK+/jq/aqzrNG4cO4QdvvRV3Gtde38botW1/9TpEpwOPc21ni4t6zI1rf4uL2k0Rx3o2ICVExTGsscA59u3dix97//vx27fcgiN0jeg6kP0lCYTrfiF3MDA6b3/gO/MOxl3p3F0Y96tfxekqB5QQ2HffffiZ22/H/bDUOQDP8/RgYgxeEEAQqXc6eqAROS8uaoK3BxMNLs7hLS6m+7TJzxD7jh9QBM/DPfffjx8lQ1NKXxPzsBL1OkQQpJF4znXaYtWHXfH3DyCvL7dpMzGNy2UjL7OF1lElgve81P0ShoiTBGeKfu+0YAz+HXfgyXvvxYdh3J5E4rbNEKmTkDIzL4/saxz7I3u1/dDXA6ETOMehY8fwzzwPwTikTrGDvMraod816g/s6VCrpf3RSQLVbiNMEny6yAmWBSGwfOQInnjPe/C3Wi0s0cVKEvicwzdq3WcMXhTB9zy9hSF834ff6+nfcQ6vVoNfq8HnPB18ADzfh9/ppAqEBlSVU74iaDTw1++6Cw/ZDzo7eCxlGpE3laKVKnQhUkKnEvMhf1tVPjIAwPOwWPR/7arrLF86TdHpvZSpUu928cmi31sGGIN/4434oUcfxU/s3YsbaHbMOXyyQSH0RuNOCG1PnMMbx/7oNf2dFWgsfM2rgO/jvgcfxPfZPGKTOiVu+L6OG1Dg2A2SjgqQDiV0u1MdNfWPYx0UNQGN3yvndIuDMbA9e/CdjzyCjz36KP7BoUO41R5Y9qASAj4ROw2yMNTvaSBxDs/z0t/ZqoJuhlmQ4LoaUADY8jIehXFPheGAcQhK99wpLhfGIIb93m58BFRD6tT1z/NwoOg+yOUCsyoT5wOBs74it/2vtF28iN+f+iRKwMIC3vfAA/i373sffvKOO3C3LaxcYu/1tH0Nsz8icVtIuQ+FYWsk7FTU69r+bFK304kpnTErR33c7xiY1jLGVJZvxqzSgijSzvwk0YT+la/gD+67D+E0QaGywDkai4v4yMmT+Mg734mLcYyXwhAvdrt4VepV2TeSBO0owkYUYTOO0VtYwGKthlYQoMU5loTAItfN/Jc5xyLnWAb0Z9AEvsQYllj1620WgufhuHnYMd/XASrKsrAX9zWBq6oJvdJeMpOAMawU/d847hN6JojUPU/bHDUjiyLgpZfw8uHDOCMEVot+f1lgDGJhAY8dO4bHjh7FehzjK70eXowinJZS21ySYCOOsSkl2mGIrWYTTd/HYr2OlhBYYgyL5ifZ4jK03fXtkDEsmgyzSmdlReB5OEbBYsb0vTT3V8UxFGMQjYZ2s3le2q6k3YYyKdUK0JlXTzwBlRUczfVTupkuYbg9dfH8eazHMT7l+/immV2FAhACB4TAgVoN37B4venoGcLzcDSO4XkeYLImEvO5tKstTdVf1UHRoQq9apgiF5oZFFbodl8W4y+HMothS5mmm5I6ZywtMpISrNfD7zeb+LslnFJp4BxLQYAHggAPVH0sOwlC4IZmE4ubm1iXUi9lSPc3jiE5h5ISPI6hokiLLKuJlzJul4GMFxeZLhc733F1VeeK0ns70yUIoDY38bulnvUuZgYpsUXuKM9LA8nkcrG7ViZJ5XnouQqd3C2u26UqCDEVoa9nBUXtTBcic1J0tAkB+dZb+C/Tn8Eu5gGlEPV6SEzQWPh+anvkenG7MtL/jut2GepDz8p0ocCo5+mindOn8UdKoVv4LHcxN4QhvqKstgCep6v7qFzb9qNXXVjEGARVw5r3Q9ewnCXy+nKT354xHCy67zDUCt0mdbsy1v6cSJ02KaFOncIrcYyvFP3+XcwPUYRXTFaU53m6wtZulUB9lKJI91myu8QC2xeVzsLILBd3tfMo0v6eJIEKQ8iLF9GOIvxBCee7ixljcxMvC5G2SaBNiLQrJU+XFNvRvVwI9jqW46yQMy7y8nyz1mBlrLhC7/VSH7qrysnt4m5xDBnHkELordPBfyr6/buYH3o9bX9KpS0T7MwyamgGpG2CJ8U2Qh/WotEl9FpND7CvfQ0/V7Wi28VoXLyIl2gwUTMlo9D73RkZ67cJrlqhlxIUnTSP18awFDEyuOVl1BjDUtHv6HS2B0Vdt4vnpao8jvXM2N6efRYflxV0X9zFZNjYSO3PkLmwZ8fU5ptmfvZiGON+x1iVorYffWlJk3qSQEURpOdBvvwyXu/18GvFTnMX88DmJj7xta/hrN1el8g7y41R9QPaTlvMOj77s3mlLGap84MHi6tzANjYwBV7VSbqqGj/tNMVidiFSFV6u43u1av42WmOYxezRRjizPPP49N2u29aNpP6J9kL3FOfoEmRS+hPPAH1wgtQrh8d0AVGvg9Zq2m3ixCQzz+P/0NKXCpyELuYLZIEl595Br/C2PaVjRw3Sx9VV4qa9K5tx2X70W13i70weNYastPCDkrZSxEuLhZPWZQSWxsben1Q129uFxBluVwoKEqk/qd/iv8Sx3h6mnPcxWygFOKvfAW/AEDRGg60dCbZIP2tPY5tt4u7XF3e7HEshZ7nRw9DTepxDHnpEjbabfxC4bPexczw+uv45Y0NbLnkaJOF+z9xXDmhb3O5ZCn1vEwXe83GMuEuRej7U+Wgr7mtge2OfFTqT8pcCE3kQaCTEjxPk3kcQzKG5Nw5/DSws1sNfz3i0iX8+7Nn8fo8vmskoVPOI7ldiNBdt0scQz71FP6f3Yj7zoFSiN56C7/+0kt4xrzPzJ5w33selJTVZi5xPliJW0V2C6BX08n7nenLPRWhA/kLYGelK3oeZBTpugF6T8HRL30JX+r1dtOIdxDUtWv4o6efxm8PfDikXXKtNpgiTq/djpR5yCR0CoxSPrrrdqnXIWs1SN/XZB6GWiEohfiNN/BRpfQ0chfVodfDq888g3/y7LP4fZsw7GZPpAKJOOg1ALTb1brPhEDD9/t+9AFSpYWJKzgsAINTYc8rnrIYRZrQCVT2b/vNzcO1v1GVNtldFGkxRSr9xRfx00kyHzW4i3zEMS6//DJ+5nOfw7+Vst8TvX9v7e6ZdG+pWjtJtAeE9mX3i19b067wvN7oY7fPHeZ24RyJGWDJqVP48rlz+AdVB9W+XqEU4gsX8Nuf+hR+6sIFvEHEzdhgg327kx8tWmv3DHnrLZxHtdN31mphERlkTq/dAiPqrVI2KFPGzjYgl4sQOFp0v70eLtBrN7PFfvCSvzwI+uX/MopSQcUYEtrOn8fF06fxt6XExeJnvIuiUArq6lV87jOfwROnT+PLpvqTqkD7NpgkkPSwdgvGaF9RpLmW3tu9tfIwVq7vCy9AnTiRrmBEq4zEMaQJstGg4oyBP/ssPh8E+Ef79+Of74Q+L29nJAk6nQ5ebbfxypUrePmNN/DVJEFHKcRKQQL63nCuF/0wg0smiV4ABNCbEOliF2ZQRVLiKufYW9W5LSxg+epVrWKNy2WkD73dBtuzZ3bHFARgtNiEWSz8WNF9dTq4YIi8T+b0O3pNBk+ra9VqWkyZqbnq9XRfHqXAYO716dN4LQjwd44cwS9zjn3Fz3YXoyAlom4XX9vcxJmrV3H6zTdxemsLG5wjNiJKMqbtjn5yrl8nSRoDEUK70YJA2+PGhu6bNSlyCZ0adT3xhF7+CNiu0rtdSLN2nuRcqwVAu16++EX84W234ewtt+Cf74TmQW9HnD+PP/ziF/EHAGJAKzRggMilUkjM4Ek4R2LeJ5zrv6EBF8eQpBRM6b+SEuerJPR6Xed3j0pbBLQ/W5oVYKiSk2AqPQ1p5q/2MgxmjVkA/T4ujHOAseKEfu1a6kM3U3AYJacY0ymLtNINZbeQnYUhlElvU1EE+L6+Jr2ezpz4yldw6upVfNe73oV/GgR4T9Fj3EU+rl3Dc089hY+bmo2E3M42kZvmd31RZexQmnuZxLG+nzTzShKt4FstPWteW9NjY3UVamNoGzeNiZ8BFBy9dg1yaQnK9qWbg+4Ty0sv4aXPfAZ/Y2sL/37yy7WLUaBBw7lumGZmSpIx/WC1p+LQjbgSxpDEcfqZeS/pp60YlEpdAlWg0Rgs2LFTLu3Pw3A74WfljI+LcatE3/lOHGSseBvXq1f7Cn0gMGr7V+khGwRalVPraqrUDkNte1EE2e0iqdUQ0z0/dw4XPvlJ/PDVq/h5VeFiNG9XGOETkc0Zl0rf/qRM7Q5AkiQDpJ8YpZ4wpl3WpmGXpOZctruFMKwxFzABoVNOuq3S223IrS3ITicN0ERRepBKIe52sfXJT+KnX3kFf6vbxWewm1ZVGjwPDaXSgUSvXRKngZQk6WdE6rRRpoSt1KXE+SrPz/exROSdFQS13S1UkFH2MWT1cfF9/V3Ly7it6H6TBO1OBx16GANpMVFWMNQNivq+FlK+nyYlcI6k201tTynEUiJ66in8+vPP4zvbbfwnpRBPd0V2QRACDaD/IJYWsQ8IKJsP7c+iSNtdHKcP5kYjzSIMwz7Pqo2NtCaIAqJZM82hhO5muxBIpbsZLzSozNQ+NicQA4hffhkvfOpT+ImXXsL3dzr4zLDUnV2MB89DwxDCgCqHGUxS9sl6wCVjFEEcRengIpXu+PQqJ3RgcMUiuyAKGN5xcRqVDqQpi3md7mq14u6WJBmc/dgK3c5Asn3otDUa2hXT6Wgx5fuQQaAJwff1VJ4xJEGgbVApxK+/jjc+8xn89DPP4LsNse8mLUwJIdCwZ8XuTDiLyAHErpgi3gxDyG5X86lZXFt1OtrdMu4xjVToNqnblaNuxosQSIIgVYdE6kmCSAhEUurttdfw4ic+gX/89NP4nsuX8a+jCC8Xu5y78Dw0rMh55lTP3APyrcc0wIjMw1CTOJG67XaJ42oJ3fOw5HZbtH9P721SL6s5l4tGI21n6nn98uzCCj0M9bXNInI724hmS9Q7KUl07KpWg2y1tK+109FEIMSAiy0Owz6ZxGSD58/jzc9+Fj/72c/iO956Cz/b6+FpE3PZxYQQAg2yvVGzY1j2Bwy4XRIqEuMcSa0G2WjoGAmp80mOqdBCvBsbUKurAGW8LC9Dbm0BUiIxC0qwTictbVUKTAggSfR0knOotTW8ubaG35QSv3XoEA4fOoQPNJs4Wath1S0q2UU2hNAKHRgIvlAgtD9opExVOb2GGVRC9ANt/YETx4BZBONcdWenCR0YDIBaxN4v/6dsADswOi2efFIvJuDCfmAIgeNF99/t4nXbf25y0CEEVJIMrCWqpEzJvNHQ029y05iMF+b7YN0uUK8DgL4OtRpYr6ftTgi9JQnAGNTmJq4++yx+lzH8f3v24MCtt+KxxUXcGwQ4JgT2Fz2vrydwjqYRUbQllMUiZd9bESdJ31PR91yQDXa7SBoNJJ1OP1Aq63XNq1YwVLn553mB/YkJnVIYAa3SWy3Ia9eA5WXt5+x29bJmjQbQ6QB26o3QZSKKMT04GdPbuXN47c038evMrLN38CBuOHAAx1strNbrWK3VcFSI6rItdiqMQhjIaCE3i6sEYKZ6QmiCtwMzRvEp6iMRBNrN0W7j/L4Kk96EwCKReVbaYhwP9sAITIKs74MliX595gzYygqU6X+xzX04CouLWpysremFeq1mZozz4oS+uYnXzEs3VVERqROhU/45qfZWC2prS69P0NCLIar1dbBmE+h2AbI/Q+ogUmcMSgj90yx5JgHIy5dx4dIl/AfG8NtKQezZg7033ojji4s4Vq9jtV7HUVNAtSMWFNkp4Bw1phvdKcr0A7IDoba7M8vVwlhfnau1NchWC7Ld1g9wu7BzFMYi9KwURkD70s+c0ZVMRO5xrFWBIXNmUrFgUrH6GylLS1F65iKICxfwxvnzeItzfE7pFXX43r3Ye/Agji4tYbXRwNEgwK1CYIlz1PB1OtBsheCoc2kPJCkRm6ndgEI3v5e+r91mnGuVmyRgvg957Vq1Cl0IPVOzFbpxwTCTdw1qLka/9zw95oo26MrLcLHR6YAdOIAG53hHke8AgLU1vGYKvmg5OUUpizCkboQPyOViB0eXlrS7MwyhggCsXofa2gKaTU3gnQ7gkjqg3xsbJBcd/RT089o1XNzYwGWl8AWldG1Jo4HWjTdidXkZq80mbq3VcNTzsI8x1F1X2NcTGg3U2210KcvF2NuAmwXQ9gcMErlS2t2iFBLKFGy3IVdWNInbqYrDqkNtjK3QHVIHqXRyvZgnClot/XmvpwdPowHV6QD1OpQ1qGhtRJqqCENGQgi9PBOgewbTggzXruHC1au4yBi+IKXuWGa68fFmE816Hc1GA03fR8P30fQ8NIRAUwjUPQ8NE0BseB4ajKFmMgB6SYKelHpLEvTiGD0pEcYxukmCMIoQxjF6UYRer4coDNG7915839ISHhr32s0KnKNJPjzOU1J3gzMwSj2OkXhe+jvy25kAHIC+24JJCXbuHC6fPFndIuBmcW4AKZE7vx9ooStEWvRTBrIyXKTUa4kePYpjKJD2C+gui2trupLT9pvDEHkc99NQ+yqdConI3SKEJnMKnDUaYPV66jrLInWyOzOr8+JYtxAwudCChJVS4EmibdDYGe90cPXMGTzDGL7k2t//3963xkhyXed991Z1dffuzM5S5qxIiZQsyhSlpQxJTJxIBv1IAjtBgsR5IQkQBDCcBM4PA4mT/AgCBAyTwHIQB7AT2I4D2HkACowgsPxAIllKrDgSJUpaizSX712OlrvUkruzy92Z6Znurqp7b36ce6pO1VT1dPd0z9Ry6wCFfsxMT3X3PV999zuvfh+9Xg8nul2ciCKciCLyszDEiU4HPa1xIgjQDwL0tEZfa/QAWPY773uxvx0ZQz6XpvR8HGOcpuSL4zHihx/G4/fdh79yiK92YXbyJE7s7uJtmeXi3P7gKO+I+WCpBYDZ2cmllpUVCoaWpRb5PyfVUcyloQNF6eXMGdjr16GrQF0sKp5YngUR/OLJbkEgHmgNDQL5AOQ02lpo7iWsFDS9L7odDhHv7mKL9VUZSAMK9zOTmRP5B1XUavn3xLY/W8Tzfm6LNK0R+fFVWQWarAZFRXqi8pks/iJg4jgfEM1pf6zfeue/rhQeOK731+uhNxzmOdT8ncqAqNTRAZJcDqOll1uT9vu0a7GWXltrqJMn8aF5Xz+OcRnIiogAZNp51r/F9/JwnQ4BtzEkl3DByWCQV2z7l3Wbm1Bra9BRRMO/PYFyfocMIJc6/e7AWotQUWFZACDwF3yeN6sVjQKc6H+jEeK9PezU+B9Q4YMH+R8/LvuyczQIYt7PftHW7aInd8lAsRKUCRYfcQzT6RAjj2Py1W6XEhG2tijQLaUWBvODtHO2uQBdSi+s7xwE6lFUiN4zoDvnKNUKyEczGUPzLi1NwNYe4DWQT9WxNhubpmXBiS320M7ulxdQ1eLh+9ZCOZcF4AC/kICsAf1Cpukswk6cQH97G3vcK0JspY21eSojV6R58OeiBhtFVMgAkFwxHNIMQ2uhkgTOObwFHA+gA8DqKk4NhwQWwL4LboGhj8dQ3S59d0Dee2V1FUrqkNNUi8qUxXXfT5EvFL7L4ifmfU/jMQE6kDfkUirX0DllkUG926WAKVeNhiE1yVtfLw5wX18HNjdh+32olRUKmO7swK2uFncC7INRlNUvZMPC05SmWcETqoP8r+J+wf+AIjnic53kf+J3M/9TKgfzIJifiC7aer0s0yWTsaTfKar/4AJABnUbRZQV6FwmtTgptWxs5N/rtGAOzAjoLLvwP/HSi5oE6klCLIS3iLyger18YaUpTcLudBBYm03FztgBb/tAC0QrBe1czhCqDsGqa1lC1eMqdu+ZilxUjVpQW1t5PIL7tMjHQitlzc4qRaxgNKKUtSSB63Sg+n1oLj/2wbhrQTDxFJZq/T7WlMJV5N9p9r0YQ1p6FWNb9JCLKKJAK6csdjrzS257e7jMQI68MMVJlq41sXOfEgx+3jN1BxCoy7Q2H8dSgwE0AMukameHpE+RCmmdy/v5eFAxDOp+LFrgfW7fwf4HTPTBQqqpLAyr2gmz1e2uWeZpmv+FIU4ARTD3953f+Vit6eCGas5lxWDctGuf1AIUdfNp21XM/MHMA+rDIaU6chWUL4yw1sJ2OjBKITAGJk0RhCGx9DSleZfAfnYgFpGWWQcVB4C81eo0C4l/JhcjMxAOEKkGNRzr9XBS9P9wPgXOAtmWjzVXXlDGDxa2StF2DyCNdTDIeqEz43DA8eai9/s4jeLFWPnslkJQlCtFh0P6OTfo8kMupnKGckBUZrisrRFDVwrqXe9CTyk8Ou97un07z3ARKYsywyULjnKGC7dU1Zpm+3p2DoCSE/i1NzaAlRVi6YMB7YxZc0/T7OKhnSMf7PWIUPldMYO6ZqZeR6jgwbzO/ySRqgLzg/yPb5WfsiU1+yYx9E6H4ljse/5im5EqX+OR1XfEMeWZ++6mGTs3plpqmdXm+mAkqAOZnl4L6uVFBcqt1VEEay0CY2A7HejSwtJpSgNU/bZPAdn2r5IZVCwslGZmykVUZnBVjD4b2cYaor9tjOTS7dKCYlBnKQvIFxezBAYHZmnDYZ7PDNDFdzymn/f7tKNKU7wVHePl6+RJ3A/U7qyOREvloqLbt6kp1wc+gMeUms93HLUmvsw56LJvC1AMjEKk+Pr8c5w6BTcY5OxcMjqAMs42NynGs7ICyxejvT2g04Ebj+H6fQRxDNfvU/zF745tmkIbAyNJlfQ/JlQQoI4Z/K/0HVb6H9+XYF7hf40B9CjaT6iA/JblFu6myGM7bd5Sl2WzfQ24ZmXnwCGCojLrBQCqmDrrj5ubUP0+6YJel7W8nUtT2CiiRZOmFNBJElpIfnvF8/c069gC4PctJi/FZGDMp1u6rergt09390NcC4tYawRNYuiCIWRBNgkOQL51F+lvVqk8n1m+XpLAra4WWOFbx/LGvPX7eIC33CixP14D2g/Y5R4rSkFtb1MsgF9Hdlycxup6uGgN1evh++Z9P2mK66MRxsi/n6ywSKk8w4W/M+QZLlhZyaWWlRVi5gzmMkawvg67ugq1sUFj+La2SHLp96G9/zn2PyZWwv+YSJkq/xN+VwD0Rfmf3BnzxcBfPHh3rFXFeMLjMs40A4p+58mUA/KLcxRlYJ59z8bQbmt1dbYCojo71JWuSn4BiimNGxuwKyvkXMzW9/agOx16A/0+sUhroft9aN/fWacpdKcDHcdQYQidJHTrmYLSmp7j7bZStNXm+3yK8rZuuycLVORi5PuCHXBqV5MA/SSQLybPuDNwgAB1ZggQ6W+nTuVAsL1NoMHBN19sdKy56N1unutdxQArgGGfyeIiHADqvkJUib9TcUxVmGxhOD+gx3EmtwAotM7dFwyVGS4ce/JSDAYDuDN+VlJ5i17yv0yC2dyEW1uDZmK1s0M7NeTArtjvvOSpmFxJ/+P7R+F/kp0bQ8HaJiUleA29lkyhRKgAurjyd83tcVcXVBt/6PQ7eQXhqwr3fNnYgF1fhz34bY4EAAAgAElEQVRzBnZzk3pNbG1RtDcIKLne2qwrXJqmSPg2ipDEMeJOJ78NAspF1Tq/5UMpjAE6lKK8VecwVgoxgLHWdMuPAfqdNM0f8+/Ix/61Y2Oy/5Uohe5hP7dFWadDC4pN5DQjDItd+5h1AwTcPLOQC1QAYuhpmuu4164d74zYTgf3c1AayBmcBA4GlvF4f8fFcoOuumnpU5yHCkOoKIIOAvyRed/PYIBXte+wyNp5+ZDfGbNzzkRi/RyguFSV3lrnfysrlF0xGJAvnj5NBS/sf9IPowhJmiKZxv/gfQ5L9r8gQKI1Eq2bQ6iCgAgVQKDO9/kCDBSHlMiZoWU7LDsHDsnQ2SqYuirr6hVsQfX7WZN+5aP5ygfrFIg1qDSlzAt21k4nd9wgyLfbWtPrALmDA/vHlCVJ0aFlhoT8HQ8Y2rOHIAigbd7vuDELKgwLGl5mPlOi0tKUMicAAgh+/tQpuPIYt6tXcevsWbyh9fGkLiqFaH0d775xA1eAovTCmRYyKApQJop8PI1NCojKkv+PfATfo9T8bShu3sSL+f/MtVafnZRluLDmqhQ95yt5s++0Tm8F6KJV5X8AXEkGVVEEF4ZQe3uw3S50lf8xc5/kf84tz/84OJumCJRC2CTJJQhwkr9DKXuylf2wvNviVEWvVGQ2D5gDCwJ0PgEJ6gDp6kC+BfRaUabtCWDPFhY7p09nzLZy3S45WBDQAuO8Y7+wIBma1nmRDC8SOQShnOZWXkh8Hry1NIaCtQCVyTcJ0IMgZ+ispZcf85av280zJZIkKx/PQD2K6MJqLWl64zHlPKcpXoii48tFv+cePHD9Ot5AKduFb/m7Et+7imdoDlsG87J+DuRTiu65B3983vdhLYaXL+MSkAfO+GIMkeHig9isuWZM79Sp6bboVf63uQm3vg4lZVCAvnMuSLIW9vRpij/EMYE474aOwv+A3Ae1zmNl1hKh4oB/k3bIWhd3yP65AqgDefuGZacAL7TisXxVKUswPCCjvA30rXfN5ibJMEFAJepa5493dmDSNN8aAnQ/SUimcQ5pFNFWkbeLaYrEGDo6nfwIAsT88zSlLaUxSLRGHAR0JAniMKS/DUM6ggBJr5cFgxphWudbvmn05LJJhs73OfgmpuM8v4hznddWV/FemUpaPhgEGGQAkkgYrKpes6pnS1WFaL9PAMcB18Po56MRXkGu4WeDoKX0onVhwEimufJ3UrZJZeHS/6pkmMEgbwQVRSSHDgaUysiSjDG5z0n/S1Mk3S4S9j+Waer8LwhItqnzP/ZB/h32O761FgnI5xsleUr/a4ItPP2nnNJYx9aBnLEDFIBi1g7kW0Lf+lMxczCGrujOQfV6xJx84ARhSL08whCq679ylhDK2+9y4Qn/XEo7HCDywVDnHNzqanO2e0BRw6uz8jaXWbq04ZCaPJ06BZem9DucMre3h+d9V79jsV4v2x1kIC5y0fdt76ty0cvVonVWrhD1BUWZZh8E8wP6YICXgGJFqMw/B7Kq3YLmmqb7t+hnzuSZLZM0V+F/isFfMnbvf479D8hZO0AXNZZFfUJC9jk7R59zmuYtEbiXTrebfxfA/tbGVYVfkvWz/3W7eWolpwY2DNBPyMyc47al5HPywioDe3lRAcWtIPzCArKCELAsw/cB+uJZr+NFJvt3eG0Vg0F9mhT/Lr8OXwi4dFn5QiKfKpmVZ/d6zQJ0rXGiqi8GUHzP5W2uNC4f5859LLt0OsTSNzdx/ruOsUN2t4v3oiI3GUVAV3Gcpy2m6eRh0ZPMgz/KBUWPPILv1nr+KUU3b+IlZuTA/upQpYpZLjKIXTaZew4UwbzO/4B6YGf/A3JyBeQ+xwQLyMkPgzxA7Xn5fqeTt1/gDJY6/+PX4VOv8j8uhFIqC4o3CdC7WiNw4tuo8sdJ/rdIW2qCfnlhlQI3mfHCAnL9UjJ3oAjw/HcS6I3Jr/q8WE6fpsfM7MtWbuLEjEMpymYwJtM4ua+76nabBehBgBVgv8MsYgEZQxr6xgZufOhDuKY13n3Y15zHOh3cHwQImJVLMJfSC7cBsDbvic6ySVVf9KqeLrz+fAk9ZEHRvffiL837HqzF+MoVbLC8AuzLbsmqessxD5mhVAfwVSbfW0V8ax+w8/sv75z58wDq/Q8gUI+i3KeiiHZJdf7HVmb8rNtbm+W+B9YWctR7034GR2Grq1jZ3sYQqAbzo7QjqbiaxBiA/eAO5MyBU7TKCwyoXmT+b7PH/X6xE5+0sgwjg7KcI+9bk3IfaRVFzQmIAvuDMgLsAOwfAhEEec/wKpPpi2FIAOMrTJ8/LkBXCp1778W7r13DZQhA51sG+jCkLXsU5d/jJCAB8jVZlX9uTK6faw0VRfixed9DHONVS32y/b/NyAL328kComG4v+T/9GmqEAWyOQRu2h7ZQL0U6t97ZvP4H1AN9Px8nf8BRelF+p9vhezimAauaF0IhjeGoQNAv4+T29vYPIiZz5J1Na8daQltFWMA6hcXkBWD1DH47O+qBvnKBVdlcjFJtsEVdVyCzcM6FA2DaBSgK4VOt4tOHCOu0/HKi8odAAGcnw4QS/dFSi90OvhTizrvWc1nulSmLrLkAhT7onMgc97/KfXzxx7Dh7XGR+Z9rd1dvAxk+nnlUAtNTZxckuQAz0UoQCaNZQVFs1rT/K+O7QcB1N4eNA/riGN6fjiEPXUKIRaczHFYiyKcLIO51NXL/pcusGd/2Y6tJ8KUi0uVo/iSQQD5AhN9oTM2gQP00jq2PxgAvR6Un5OqfCk8d0dr1HYPAPp9rCQJ9srPS3Y+jQQjW7GurGTNuXiQwrEGRk+exAPcnKmkn3NvH5UkeZ40t9HlAF85MPrkk5BtK7LPpi7//PRp/OXDnD/r5yimLFprDw6IBkExG6msn89j0/gfsA/gj8T/ZP+ZEyeoU2McQ3W7cPfc0zz/63b3ZZrt8zXZsz8MiYjU7ZIPY41oclPWMas0d7byAgMyHVBe7ff9XVVucdUilIUX6+vECkYjAg6t4cKwWds9ADhxAie3t+m+ZK+zvIbPnlBAVmCU9RcxBu7aNZw/zvmi/T6lLkJILb4UvMDUebsuM13KkhybBPWzZ+n7lj8XE4pUGOIvznvuziG5fBmvcTAUonkTF6v5tZUFRMOQCoukhu6/o302bxFK3d/PAvBYjv/pzU3YtTUCQm6L4BzsyZPN878oIkCv2iFPyn6RCsG0WVgHWSMAvWxVmjtbnWZYsdDKtu/v5CJk45F66+vAYABraRyb8+0unVLNYwi9Hi2oWTQ8Ob1emk9fdECW3ui6XbjXX8dbjzyCG1rj3sW/g4Ot18OHUMx0KTD1IKB+H1VNurQmUGdt/OzZPH+7nHsu9XOfaqc+9Sk8phS+e95zH49xMU2RKJVVh/LIwCzLpdyVjytEAZLAyhWis+jns9osAM82j/8BuQ+WC5/W16HlnGJFDbpcGDbP/7ifEptcl0CeNlwl//HuETM0jptkjQR0tknMowz2cy7ubPLS2bPEInZ28qEBPBWGc7LR0AUVBIhm0fCAah1dsnQ5WIF1XmPwotb4waW+mRoLQ3zXfffhgTffxLfrZBfZ06WcbTHptZmdl9IVOaiqVlfnz24BgN1dvATBylk/VyofF6hUkZ0zM+eAqKwQXQSTm8Wq/HBB/lcZkGVSxeSC16BScN1u8xh6ECCSvYaqfod90MuBS7NGBRdmMaWUqztmeZ0nniCmw5V0QHFgAGuX3BwJwDEqydUWhnmgtq7IoVxcNI3J4GgUwaUpzs9/loe3++/Hx3U+1zLLVfbFLQXJhWsVeCcidXSgencGkJbL/c8HAyo7P4zcAgBvv50XFJUPBndjiJ3LvtlcIcprcDAo9j4/Tlu0//Fj9kEeycbPs/8FQfP8D8hSmQtrypjicI+jsDsW0CfZpMVWtwAlqDNL5wXFwOa3wo1jCNysqE7Dq9vylQtvAGLpcUx9XlZWCFSMocyL0eh4WwCsreFjXgLLik44Z9lLLipJ8hYADOhlhs567tmzlKrI7HxjIwfz4RC604H61KfwKaVw37zn7BzSy5dxgdMUOQ/dA7llIK/qipmmeUdMCW5Nt8P4H1AM+spgsGfqjfM/Td0fM4bOxW/i54WdcrkBXpVVyc1Tncs8f3Q3WxMZQhAUUyklg+Xn5i00SlNii8bA3bp1vIDe7eKRfh89llz4sJaGMPhZmFoGRgeDfNgF6+h1r7+yQhkWUUQXgl4P+uTJw2W3xDG+7VvNFpi5tbDcy8WYArDbTicPiCZJlmVUCeiHDYjeaRaGzfM/PcUEs7L/ySr2hZ7LMl70TjPpFJNm+XmG2zgNXWt0DtLw2Lh5VdmGwxw0hkMCEdkbvduFe/VVvOEcbi3+HUxnSiF8//vxUQZxPnyPFc2SC7dT5p4gZZa+ukqsnA/JzrkZ12AAFQTohCH+/GHOeTDAeQj93AfWrdTPWXaRDD2KYLkjJn8vUgp8J9ks/qdUcwFd+l4VqQImFxdVZQLNfC6HfYG70Bq3oMQEl4kantzy1TEE2ddFSk0MNkmCp5byJqa0d70LHxdSi9aaholz5guzdB8Y1VJ2YR19Y4NAnA/uXcLs/MQJmp71fd+HH1UKh0rWvHwZX5XMnLNbWHbROmfnUj9P0/36ObB/CMLdZk0EdFXqzz6tbl4leR7WWkAvWV2wjK2JhUWeIRyo4QHVDKGsz8rHSZJrumEIu7uL313Km5jSTp7ExzgYyno6M3Vm6ElCYM46ell2ka8nu3z2+1CjEfRgQKPX+n38g8Oc63iMb1+/TiP8pH7uC4qslFr4gsn550Aeu5ETig5zPu8Ea2LasFJ5lksVmLP/cU/4ZbYAaAF9RmviggIObkcwq4Y+HBYDo6yjX7yILzmH8fynejgLQ6zfdx8eUDSwO5sEz0dZR49jCm5WsfTyoJWVFfrdfh/6B34Af1JrfOIw53rrFr4i+537IqICO+fpNayfs+Qi9XMgl1smSRJ3gwVB8/xPa0r/lqnDTKzKAdGyH9YVvc19Lot8sbvEmrigptbwgHqGMBhQdk9ZdmEd3Ri4mzexm6b46rLeyzT27ncTSxfMPJNegoBAPU2hk4TGpknZxbd20CsrRTBfW4Pe3oYaj+nvVlbwDw9zjs7BXLpEn5PMP5f6uTGZhm7TNAdzn1WU6ef8fUzT//wusMZluSiFDoN5lc9V1YPUFfYd1lpAn2BcZFP68Jc8RGp2k1H2qtzX8pZvGpMpmzIwai3c3h7+96LOfR5bWyMdnYGcUxiNIYD3YwN1FOXAPhhQKqIE9cEAmsF8NIJm7fzxx/F4EMw/ag4ARiO8sLWFbYhAKAdBrSVQ990sbZrSlKI4zrNcul3YJuafH7VxMJt7pivVvGJINcVISlkHUiZUi2TpLaBPaaIJfyMXlGestfpd3ZZvkslWuhwYDUPYN97AFwEc0Jh2edbr4SPdLvoM5JKhS9mFJ05FEQF1p0Ma+coK9NpafjCYj8c0nWp1Ff/0sOd44waeEoHQQrqi1NCdo2ZcaQrLspaUW+6k/PMjssb5X90O2XdoLfibzDKTRJHTaX2//rkBvgX02a3RDB2YLLewTdrySdlF6ugcsLt0CTfTFM8s7h3MZkqh86EP4VOso7P04hwNE2bZhUGdWfp4TMA9HBKI88Fg7hyCH/5h/PhhxswBgLUYXbiAbwIUDHWOgLucrsjs3PdAt0lCny/LLQDFMh56iAreZHbLXSq3AA30v3KWS9nvZNfTZVsL6DNaE7d8QVDU8Mo/r9Lw6kzmOlflo/vJ5XY0whcW+R5mtfV1/BnP0APfyyXgx1J2cQ4Bs3TnEIzHObCfOEGMfDyG7vWgz57F/b0e/tlhz213F98ajxEj76bIvc4zuaUuXbHTgeWB0MNh3lfobrFJWWZeqmic/wH1dSCztrA+rLWAPoP57VKjRtB5O/CcqjS8g1g6twGQgN7pUPDurbeOF9CjCN/9/vfjw1J2YTB3DgEfYZg/ZlDv96GNQWAMgtVV+pkxCN73PnxaKawe9tyuX8dXRIpipp+X5RYGc5muWCW33K36eY01zv+qJBdr61OHpR3UOG7mc1nki90l1tgt36waXp1VVSSW89EvXMAbaUpTeI7LHnwQf1qpHLC1hg7DHMz5sJYOD+aBtQiShNi5MfTc938//kYY4s8d9pyMwdbFi3ihrJ0fJLdYS0HRJKlOV5R2F8stQIP9DyAgn2auqIjJLdRaQD/AylfQJkouB2l409hgQFotP37ooTxlriofPQhg4xhfXMT5z2snT+KT6+u4H+TkAUh2CQAESiHsdIrArhRCaxFojZAP5xB84hN4/ORJ/Nwizml7G09bC4Pi8IqJckuSEKhzd8WqdMW7sTq0Ksusqf43yefK7LwtLDpiEyO0qqxxDOGgXi6s482q4ZVll9EIllPr0hT2xo3jlV2UQnD2LH5S6wzIQwZu5xCkKUKl8sNa+pl8/OijeOSee/Cr5YvivHb1Kp6ScovvJV8rtzBDj2PY0YgYOsstd3O6YtlE2mLj/I/TFicVFrEte1B0C+izWxMZwsIqRXd29oMIA7pMX4wiuBdewEvW4sq8570I6/Xw0Y9/HD8K5MycwZ0PCeLjcf7co4/iI+95D/6rUlhbxLmkKa6+8QYuCbnFKgUzjdzC2S113RXb7JbMmuh/YRnMy7/DLSmWfS4toKO69/CEieWNW1Dw51QVlKlLmTpIw2NQr5JdOMXOWrjR6HiLjABgfR1/6/778R4prcgDHsDTFB1+7pOfxF948EH8ptZ4cFHn8fbblHsOVOedS7lFKRjObuFiIim3sATGcsuizvFOtyZKLgDQ7dLOYR65c5HWAvrs1sQFVZgfPk1Qhm1SlP2hh/JBH+VslzAkyWBn53ibdQGA1uh/7/fiZz74QXyUARwexI1Bh48gQOeBB/Duxx/HE6dP4xeUwolFnYO1GL3yCr5UDoKq4pg5k6YwDObM0Nvslpmsif6HNC36oLQ6kF9G+X8jP5ym2WBQGGfWOA3POaR8fxYwn8XiOGuhy+XpLgxhv/UtnPuRH8GrYYgPLeP/TmtBgLWHH8a/uOce/OdXXsEX9vZwW/xMf+ADePiBB/DXej382Wkkqlnt9m18aW8PA60zhl5g4x7MM8klSYiV+52O5YHcnEnEw6Cl3e1yy3gMZW3zMMsXjtUCepWFYT7Xl4O/i7DGfTh3gDXuM3MOyaSfzxoMlUOI5cDe0sBsG8fE0nd38Z/W1vDpOU9/YaYUwvV1/J1778VPJAleNgY3whD3hyEeXGaXTOeQvPwyPu/lFivA3DCoO0efFUDA7rOEbBTRz3o9uDAkiWVlhV73bs1ukRZFUGmaP9a6mYRqGUTKOadmvYi3ksuM1sQou2ToizY5X7VKdklT2Oeew29bi81lncOsphR0FOFsv48f7HTw8LJbHm9t4StbW7itVF7iz5o5QOxcKRh4MFcKhnXzOCZ2vrcHOxjAttktB1oTCVWt/x21pt4C+ux2Ry2oWU2yc3lftgEYDgmIuMJxMMB4OMRnFnUOd5I5B3vxIj7HqYoe1GfKPe92YWXuedu7ZaI1jlAByyNUs1oL6LNbEwF9ouQyj3FmxeZmXnBUle3CssuFC/hvzmG06PNouu3s4Os3buC6D4ZmgVAAxpicnXMwlLV0Doa2uef7s8wm1YEsql5gkbbMHfKs1gL67NY4QLd2+QuqrsjIz7+0167h1niMzy77PJpkziF+5RX8hsxo4dxzawnUgVxukZktSUKf3zSl/q0VrHEM3TkkPhh+7NYCesmmmLzdxAU1EdCtnW6xlZkhs/SdHWLpUnbhIiOWDtIU9vJl/KpziOd/J3eW3byJ3715EzckOwcIzJWigGiZnXMwtCr3vK7U/26UW+6kOpBlMfR5vvcW0CdYzSSRJgJ6JrksginIQpYXXyQ9lx8Ph3C9Hk3U6XTysvUggH39dVze3cWvHfb/3wmWprj93HP4X1JmYe0cgpnLMXNxDKM1TBsMnd/utKQEn/m0z9I0f36RQ0xaQJ/djm1ST52VF9QsoM5b/YOsLtsljgnYtSZt+Lnn8CvW4uqs7+FOs6tX8T/iGCMu8YcH8TrdXLJzpQjUq4Khx/2+mmh+fKACmqVXsx10TnWgniSL/75bQJ/djm3ifZ0xQ5cLR2saShyG9JwvCsp+LhlClT3xRL7lZ5Ze7sBYZulKwdy+jb2bN/Gvl/NOm2GjETZefBFPM5BL7Rwl3ZzBnNm51jBcGVrFzlu55UBrrP/5+5Xfl7U0anDZ59IC+ozWxEwOY6bXrbvd2RaVLGo5iKWHIYHaM8/gC0mCp2b5P3eKOQdz4QI+AwHkwD4gT51DWsXOw5CKiVp2PrsFAVQT/Y/jRrwzrgN1ADBmud9zC+izW+MYQpJgmxdR1WJilr4IY5a+tQXb7xMwRREB1WiUp+VduYKfWUY65XHb5iZ+x3dUlEHQDLj99ju7L9k5a+ejEezeHmw5VbGtDJ3KGud/aZr7H5toznak32UL6DOatc1jCKNR3rcEmMwQpEkN7yCGyLJLFUvnFEbJ0i9exMb29mKGRjTFRiO89uyz+JxoupUxc9To5wLU92nnW1uwk9h5K7dUWuP8L0mK/le2MqhLlj5tDGtaawF9RtO6eQtqPMYWUARyZgf8XKeTs4Xytk/23q5q1VrFGDmFsY6lKwXz9NP4zHCI31rcOz0+sxaj55/HrxmDVMosoqw/dY4OIGfpnHeuNYH6cEjsXGrnQJuqOK01kVDFce5/PNSEY1j8O2VQPyiGNa+1gD6jOde8Ld9ggNuTMlsk0E+zBawC8CeeIMDh4OhgALeyQrLB3h7JCDLjJY4zUP+XaYoX5n93zbDvfAf//cYNXCv3ZynLLBwMLWvodXnnvqtiC95TWhP9bzTC7bpdsZQ7raURjlW/t6gYSgvoM1oTgzI7O8QQgFy746Pubw6TMiULjba2SD5gli7lBeeQjkYYvvwyftpavD3v/ztu297G1198EV8GsfJUgrZg5BlDl0CuFAxXhVax81Y7n978zrJx/sc7ZCD3P/nzcgyLd8hVPnjYddACeslkEU2NNYohWIvheEznVMXSmZHz2DigKLlIuaX83pVSrrz1r9LSBwMCKmbpWhMjZVC/ehVvfuc7+Md3YpB0OMSFb3wD/4UHPgMZI0/LUksY5gDvK0WN1jmwd7uwvR7p5q12Ppv1+9ln1Sj/A2iHDEwveS7TWkCf3RrFENK0qJ8HAWl3kinULaRTp6ZbYAwwZeYwKS+dAY1B7/x5nLt6FX/fOQwP8XaP1JIE186dwy8lCcb+/WQgjhIjR0Wq4mhEFzZOU6xqwtVq5wfbykq+7oxplv8BwO3bueRZxdCrJE/JzsvzYw9jLaBPsKoP2tpmMQRjcv2uSmopg/q8ebAS1GU7gDJLHw5hg4DAXAZIlYJ5/nl89dIl/KS1+Ra1qWYMBs88g3+/u4sd3mlYS7dBUC+18H1m58MhDHdUnIadt3agNcr/rMVemhbz0IH9aYvz7JDnsRbQZ7dGMYQ0xba/6/wBIGfqQVBcVABtXyXrmdekli57vIxGsMNhLjlIrfmll3D+wgX8XWNw7bD/f1lmLYYvv4xffPttvIU8LTFVColzSPi9aE33q6QWGQjtdilnv807n944+6dsTWPo7H/L3CHPYi2gz2hNi7InCW33qlh6lX5XF2WfNdOirKVzxgunMZalF6kzb2zg4vnz+NvG4LXDvv9FW5pi6/x5/NyVK7gA5PKK1jkjh2Dlnrkn8vFoRO85CGBkIHRlBXZzE5YHWJT/dyu3kMm1WM7Tbpr/HdUOeVprAX0K44EO/stolAY8HlP7Vgb1Ov2u08nOHwBpeOwsVWyoClwmaekM6pOkF2axziG9dg1vfvnL+PGtLfxaUxouxTHeeuYZ/Oybb+J1CPAWzDzRGom1SIIACYA0CAjMoyjXz6XUUhUIZcBqtXOyad97twvXtBhMkuCmv7vQHfK866EF9NmtUQxhextv8H0uaKjS7/h3uDEUP561dWeVll4lvXggz6QXa4saszFIxmPsPfUU/uOFC/iJJMFLh/805rfRCK89/TR+9sYNXEfOwBMGcyDXzoOAQN1ael5KSiy3SKlla4vYeVlqOc73e6cZr9mmMfS9Pbwx7w55GVOqWkCvsTtFw7t2DZfLi0h2WuQui9YWGfqirK4lwKlTcDJlT8ouUVRM9bt4Ea9+6Uv4e7du4Retxe6iz3GSOYfk+nX89lNP4d8Mh9iGZ+Ra52AumTlr6FI75yAov9coot1JOee8HAhttfPJVkU2mlYpurVF/ieJlCRUfCt3yGlKLTOWcT4toFfYJA3P2uYE89IUb+/tYXfSYgpDWkxcpcYMnSWXw2RcSEDiCtLNzYyNZs27GOzKoG5MLl+kKcZf/zp+/atfxV/d3MQvGINLC/ugamx3F+fPncMTzzyD30wSjCQjl4cE87LkwtktUjff2SEwr5JaqgKhd7PcUraqnYsEv7295vgfAFy/jivsc34Y+D5Cxb9rzHJIlbTGjXNqknm2CYCuqt0u3Ntv49mVleM9L7bxGFeAnJUrRTqeXzROMgfg4LL/aTMulFKOB/s+8QTck08CZ89CeekF169nQVI1GsGeOEF/Zy2giUIoY+CiCIhjQCm4gObQuJ0d7Jw7h88qhd955BE8dt99+LFeD59c5KSa8RjfvnoV//PVV/EtJ3qaw/dgAXJ5CKCgJ2vlEsyNyZ5L+32kwyG9TrdLE4qk1NLvV0stLZhPZ2lK6/v8ebz23vdiRymsNuCcbu3uYkfrDLizwwO8C8NM4nR+/m62W2YfkHbYXVsL6FNYksB5IMILL+D1Bx/EllJYO96zAra28DwvHA9MDoDzY9CsMbR4tAaiCM6YXEM/fZoAZt6LkwR1gC4GZ8/SfZarBgPYtTVgbw8og7pzdD5hSOefpvhiL34AABNxSURBVATs/qJklYJ99VWcu3ABz548idX3vhcfXVvDo/0+zna7eFgpdGc53zjG1a0tfP311/E092Txsz+tc7DO5X1YQCCeBXDDMM9kKYO5DILy/X6fQHx9Pe99s7GRO2obCJ3e4pjWsL/gw6/p54MAnzreMwP29vA8UGTn8H4HQag6HdoRK5XvkBlPxO6tcncyq7WAjv3gVGXMEPyV9XwY4vGjOr8ac5cv41uilSsPKs5YQhDQQksSet4YYorlTBhgvqIG/tw8S88+v/V12M1N6JUV2K0tgEHdWqjVVShjYLQmcGcLaSVmw5bTNOs3bre3cXt3F19zDt8AEGiN6H3vw/ecOIH7owhrYYjVMMSpIMCpMMSKtUjGY2yOx7i+t4fNW7fw5uYm3mIHA+AYzPl/AEVAl0ea0m0Y0q0Ec77tdIiVh+H+FMU2q2V2Y5CTZkzGcv+wCYB+/Tr+QBADXlMFQpWmNFOWCRXbqVNFQrWIoiKgBfR99uKLcD/0Qzk4SYbACypJ8IfHDeijEb59+zbe9uDsPDhl7NZv8ywzBOEMLgjy2MBgAHfmzPznUQJ1nD0LrK9DVYH6aATs7FDaluxzYW2+y1AKoWfqEmwDYxAACIIAgbUwly7hRWvxslJQzkErBS3uZ9+ftVBejgKQ7Viyz8nafLCzoqHORgY8WfeHZ+0i9zyVsYEggAlDmCowb7Na5jNZRZkkcN0urZXRCM91Z9qfLd6sxejSJbwoSMI+UqU1+V+S5DJLmVAd1v/K1gZFa4zT8PgxB2ashYtj/OHxnRnZ7ds458TEea0JnPzhPFssZLiUA6KcRbColKlyWwCZn761RUFCL09kgVIGx04nq7pMtEYcBEiUQqw1YqXywxjE1iIGpY+Oxc/G8nkgf1x+Xin6O2vpb/n5NM1fM00RW4uEb42ho9NBchCYVwVB+fMBWnZeZ/z5SLbKfYKAPKh4+zaePa5zZBsM8GyaImZSIHd8Hsgt+16nQ2MamVDJGhBgcf4HtIB+oFUtqGvXjhfQjcHuq6/i/wn9N2OaDOzG0BEEtLA6nUzbO3BS0WEApyo/vQrUueiIA4rOEagzcEpANaYI7ADGxhTBWN6HAHF+nsGbLwryd/kiwT/nC4rWiPkCE4ZIul06z34/Z+hVYH7mDCyDufxcDvvZvpPtoM+Fi/u6XbhXXsEbzh1rO2Z36RI+r/Lh4LW+x/4nM8yAPAe96sUPs0ZaQBdWxRDY5IK6dAlvWotXjv4MyW7exBf29jDwkgRPzuH5ltniCgLSosOQwNwYYgdywAK/5mF6ipQX4DSgvrdHudpKUUCRpYw0JRbMQMpA7hsgZewaArj9zyuBve7gC4LWOfDLi4a/kCSsl0No5xwArQJzWTx02M/1bjauawAI/HggOa9jY/B/j+vcBgN86+pVvG5tLtUxS2ff05p8j/3P7+xtkhRz0JlQLWqdtIDubdJVsbyg4hh2MMB/OMrzYzMGg5dewhf9Vs8wO+BF5bd9hhcUb/fkxJzyay4iIDMrqPue6UZrmDRFGgRFts5gakwO7H6LWwBgXzko5Zd9Eov4eSW4S0mHdwZhSEengyRN6WAQT1Ni51Vg7mMHlU7asvODrQxqksVKQH/zTfwKcPQXSufgLlzAb3lmbmS2FEB+V94dJwn5H5f8lwnVogKiQAvotSYrH/k5XlDdLtw3v4nfthZXjvq8rlzBZ4ZD7EHMtDQmA3N+nC2oNCXtrko/X2TJMTAbqHPxEUsvrKVLtt7pEKAyqIchSTDMqgGMJcNmwHaODgn+zmHMfyv/hp9LUzp4ZyDZeb+fZ7Ts7NCgCp+aWABz2XSrBfPFGRMqgGTPTgf2lVfwcpLg/xz1udy6hc9du4Yr8P7nSdW+4eAstwRBvjsu6+eL9j+gBfSpjBdUktAX44OMye3b+Oc4Qpbw9tv44ssv42kPfoUZlhAAz7e83UsSWlT8HrhCdBnnOAnUNzZg19dhz5yhLBApwUi2zuAuJRhjkAQBgW+S5CDMtyixbgn68rGQbmIJ8HzBkMFP/v/wGS588QkCmM1NGM5mOXOG3tfGBizQgvlhTc6u5XV66hStXW6SZy3c1av4tHMYHNV57e3hpXPn8BsQYwhR43vS/zodmuRVlZCwaGsBfYKVJ/Kwjs6a9Llz+NLe3tFIL8MhXjl3Dr+OvOd2ecp8ygxBsoOy3MLl6Pz+ljExpw7UAdpeMltnUI8iki4kYJaBnWUYCfAS3KUsIx9LRi5v5cEALoFcpibu7NB5hSFMr0cXIV80VEhNBFowX4YNhwSCKyvEcsOQ1vVLL2Hj9m38k6M4hzTFzWefxS87hxhiDCGK9Qqc+WTTlPxPyi3dLs3frRpysij/awG9ZFUTeYD9OnoY0pf2ta/h5+MYn1vmOe3s4BtPPYV/67v+Vc60RIkhxHE+YMEYOO7LvSy5pWx1oC4lmCq2LrV1CezdLqULRlEO6mmapTjGZb0dwDhJCPDLoJ8k9Df8d3zLry12BwVWPhjQxacqzxxowXzRVpY9pf9xv/2nn8bnd3fx81jiTnk0wsY3v4l/tbOD22UCxR04pe8lSZGhxzENfSnLnQARnEXWKLSAPsEY8LiDYJIQMPpotQ1D2NEI6e/9Hn56MMC/AxXBLMycg9vcxGefegq/lKYYymZREBNzGNiZIbCGJ2daloMxRzECrQrUgXxLXcXWPVgaKcNYS9o1A621JIVEER2stwcB4jTdH0yVmrhk+Pwa/Jr+MzUSyPkcuC+L1MtlnnkL5ssx3iXL4SlRlEuJQQD7+7+PX75xA//IOewt+v/v7ODpr3wFP7u9jZsM5s4hCYK8HYSsGJb+x3UKZblTvPbC10hbKVpjXDH60ENw16/TolpfzxiCVSqXM4IA9stfxq987GN4bn0dP9Xp4OOH/PduZwd/8Npr+Oy1a7jiM1gKZenWItE67zcCZD1HTBzDdDpUjs4No7iBEPcXkc2ilpkjXW6rwP/rySfpMfd/WV+HW12F2tiAWlmBiiK4zU2ofh8qCKBOn4bd3obSGipNqRpUaygAKknodwAgiuiWH0szhqpkmeXxJHnRndJyJWkYUqXf5iZ9ZkGQ67r9ft6bpVw0tKzP8W6zcsX2cEgzOY3JG9FJUP/61/H5D38Y337gAfxUt4s/gUOS1dEIF69cwW9cvIgXgOKAFgZziOlVShWHhPvCMxvHtEtmCXRri9ZSVWuDhcidh32Bd5ox+Dz5JNTZs1Dr61Cbm9Dr69BxjGA0gg4ChM4h6HTQUQphkqATBOhojY4x6Dz6KP7omTP461GEx7TGPdP+7zjGW3t7eP7KFfz+d76DS1y4ABTB3Jekc7Auy8rgoB4zVtaCZb60lw6y9Lqj7C9S7pfD/V/OnqXb9XXq9QIADOz9PhQDO4P1aATd6dD9TgdqMIDix2GYr2l5Xw71kP2oV1Zy9nTqFDEoDhqvr9Ot7GVelliAFswXaZP8bzCAthaBtQjCEKHWCJVCGATopCn5oDHofPCD+J4HH8Tf7Hbxx4IA75n2f6cpbg+HeP76dXzt4kWcF5lj7INy/GDCO2St82riMMyD6f0+/T7HYLTO5bpl+V/L0Ke04ZDYwalT1HBHKWiARq35tDsFQDkH9dJL+IPnn8dzSiF88EF84MwZfDyKcJ/W1EBKa5w0BmNjsBXH2I5j3HrrLbx84wZuAICv/pT9RjJAlxPnuZUrSxEy6yVJKD+WmwP1epQuyCyzzA6OwnjByta7QJGte0asJGMHiHFHUQbuzhhi49YCp09DbW/T73nWDvo/dL88TMCzvGxIL7dGYDYeRTRCjD+rM2cOBnL5/lqb36oa5U3aJXPdhXPke2EItbGB1y5dwqeVQri+jvvvuw+P9Xp4IAiwpjVWgwCrxiA1BltJgu04xtbNm7h49SpN//L9zbPXZ/+TLJ3B3FokZXaufLO2OCYfFO2Ua9n5wj6/5bzsnWuSIQDEHh96CNoDS7C2Bm0MsQTnEDBL4IOZglIIjaFbgH7mHAKlEGoN7RwC56ABKKWK34NsuMUsATlD4PauiWzryswAKGZo+GIdu7kJw5kZx8HOy1bV3bKKsQNAmbUDQL9Pt8ze+TWYxU8y1jE524eDbszGgbyCbxogB1owX6Q551SV/5VZ+uoqAgDhcEhsnf0uTelW6+xxyH4I3+DNOQTWQilVbOZG/7/a/ySgi91voZ0yt4eo2h0vm50DLaBXWtW2b3UV6vp1WlDr6wiGQ2itEVqbgzo8cMdxvrggwBx+QVkLDSDwOrA2pvg9+MGy+7oBGgPDXQBRmjzvC2KMXEjlrV65z8hxt3Ota1ksW/FOAncAYIAHcpCfxhjMqwCcf6cM5EArrxyFHeR/05Aq+RhFH+S/0c5B1/mfj6tkOwBrYWUAtOyHxlAlMVc7Q0gtnOq6skJZXcv0v1ZyOcB4cMPqKhSnUA0GsNZCWQvL/b0VtW6Fc4CcxKNEW1gAVi4mL9soCJYu2EG2oIC8EjRNi8OWowhpHOfVltp3M0xTqmiUW73y5Jzj7jFSXsQVUoxiMOXgqZRkgBzggRzkpzEGcJZTeAssy7DrgLzq3FtbjtX4n1tZgU1TKGOgrIXROvMhFYbke0A+LQiADUMCc3hSpXW9/8H7oFKw3r8L83FlfQQDvZ0wuWpSMsIirWXoFSaZ40EsYTyGXl2lft2SifN9ycz5cRBAW0tbPb7N/zexA2YJvkjBcL8WlEak8QITYF6YnCOlFj85Z181Y9PAaZIcw8bMnY0ZfNkY8KtSxMo9NMr5wC2IH49N63+jEckv7H8saVqb+6L0QwZzD+RBlf/R/899j3uzyPgU55rzsHOtaaasAHM5uaq2P/4y/K9l6BVWN15NsgSvhXHWhXIOqt+HsZZYujHEzPnodGgxKYUgTaGDgLZ6zCry/w0AWXqW9ZOSDG/9uGhBHs4Vx6B1u/nknHJFI7+fpoI5sD94ChTBVTJ3NmbwZZvU+KiqoKOONTXxc3qn2rT+t7YGGAO1swOsrgLGkO9xGqrf5Trvf9ZaGN4hWwttTAbmZTKQMXSu+ARJnhmwhyH5HUhyMf1+tf/V9cdflv+1gF5jVePVeAiy70mi/ReG4TAbp+b46s5HGOb9yo2B6XQyhqCUguasDC/ZZHnRQD5fk0uJ/UJi6cUC2aLKWuj6YpiJzOAYPs65TC72OnBn40yZWeygLW8L4sdnU/qfiyKYbpcmYQlQd9bC9XokWzpHu1znEIQhDBMqCLmlyv/8YYG8lJ99T8ovQZDVezCYH9gff1nWAvqUJocgy8n2gwHAoD4aAb0eZVE4R+XJziEwhhZVGEKnKUwYQicJVBgWt3uenYOLgPy4uMr+5p1Olppoogi2rgvgpMk5d5LVgTvbot5TC+LNtAn+p1dWSEbk8YZKIeAxh9L3jIExBgEXp2lNxWnsg3X+J1t9BAH5XhxnU7e4J7qtAnMZt+L3sUz/a0v/pzD5BXC5+pkz9IVxG9h+n75gjmzLboE8Yk02lApDJPA9url1Kx9VJeuyeVSa5uXq/H/qWrrWTc4B7lzwUkq5ZR3H/d5a22/T+J/suVPVhpl9h31K+ljZB8v+Jxu4cW/8KMrrP2TztoP648v3tZTK7EW/4DvNqgI0QF7VeP06dL8PNRhARxHUaAR94gT0eAzd60EPh1BRBJ2m0J0O9HhMj7WGiuOsfL1g1tIXH0XUHJ+bETFT4HLi4ZBYQZJQF0Xfka5ym9f2GmntTrRp/W9zE4oDpZ0O1HgM3e9DJwk0+18QQPFj9j+gWIwGFP2PJw354fDZ9K8oooZb3S41vTt1irLfyv1+ZBICsPxRhC1DP8DkB1/VBnZSb2+Zt8oNpfp9uuUuf9xQio8gQMyNpuIYMTegspY6DrpSF0DeGXCeK/fnriqIqXpPrbXWZJvW/9bX4bhbJ/tEXbdO2WVTsu6y/3EDN/ZZ2RyOs1u4pfJB/fH5/MvvaeGf17Je+J1mVRWkQM4UuIpxMCDGEEV0bG9DnTgBzf1GwpCO4ZAaStU1keLbfp+0PO4/woyc+45wjmtVF0CgZeatvTOszNQB8sGy/0m2vgz/494//T7tiOWuuM7/gKMbEt4C+gx20PavrqEUL6y6hlIANZKSDaQA6kHCCwgA5CKqah7FaYktmLf2TrSDQB3Y39SNgR0A2Afn9b9yA7cykAOTW0Uchf+1gD6jTVpUAOXKlnuOlLsFMsADBO7l/yGbSfECAih7pgzkAFU9tl0AW7sbrM7/gCKxAqgtxCL8DyDfK/sfQK0jymTqOP2vBfQ57KBFBexvKCWbSQHFviOyoZRsgA8UG0iVFxGQV0C2YN7a3WJV/gfsJ1bAfv8D9vvgtP7Hj5vsfy2gz2mTFhVQ30wKyBtKHdRMqtxACqjuAgi0LV1bu7vsoN76wP7++vz8rP4HVDdxa6L/tYB+CJumBSxQ7DMim0kB9Q2l5Ii4ch+Stgtga60d3POnTK6A+fwPOLgLJ3D8YA60gL4Qq2ML0uoA/iCrKhduuwC21lpuszZzeyf7XwvoC7S6/t7Awd0Cq6yu70rbQKq11vZb638toC/FJi0stioWX7Zpej40YRG11lqT7G72vxbQj8imWWQHWdMWT2ut3SnW+l9rrbXWWmuttdZaa6211lprrbXWWmtz2v8HL/sdbiWvmZ4AAAAASUVORK5CYII=\",\"e\":1},{\"id\":\"image_12\",\"w\":357,\"h\":259,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_13\",\"w\":445,\"h\":317,\"u\":\"\",\"p\":\"data:image/png;base64,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\",\"e\":1},{\"id\":\"image_14\",\"w\":581,\"h\":437,\"u\":\"\",\"p\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkUAAAG1CAYAAAD3BIBFAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAgAElEQVR4nOzdeZxkVXk//s9zqno2mN5qpgcG0UFBDItEWdWoQFCjuERcUDCiMbigiXGLwd0YdxKNGIPENYlLIME1UVFxjxEVN/Cn3zFOyGBPd23dMyLC9NR9fn/UvVXnnntuLd3VdWv5vF+vnqqu7q4+M9N176ef85xzBUQDZN+S7srVcLYKThbgeCjuI4JjABgAkMYfq6CA1m//RwU/EuCHCPCjlRx+eOQM9oqI9uZvQUREw2i1pxeiniiX9agacI4A5wA4VwS7AE/4kdhN4ifX94OcSDjqPK6x2/8F8GkoPlUo4BsistL534KIiEYBQxH1lapKsYqzVPFUA/yBCI4DAIl+Eu3w49yP/bC677f6no0/4u/b4Sj2OYplVfyHCj6VA75QKMiBDr8VERENMYYi6ot9FT0hp7gYiqeKwTFAPAhJq9vo0zw/rb7HXOqUjOwAFAtInlsAB6H4TCB45/YZfItTbEREo4uhiNZNODV2sQguEuAUIAwxKeEnEZKQDD3eYJTy/X3pJRGQWoQjVbgB6SYEeOfSEq457ji5K+XbEhHRkGIoop4rlfTUQPAiAS4UQT4WdpwAFAtJ7uPOY9DkFBqaH0LKh5JTZ4L49BmscOS5jQUkBSBY1ADvqa3gqiOOkKL3H4GIiIYOQxH1hKqaxTIebQQvFsFDGz1BVhBK3EcyBDW+Tpv3o/CS1mTd+SBjN/Wn0WRQSgtGUSiy3j+oAd5/aAWvPfJIKa1yVERENCAYimhN5ud1S24DniHAn4vguEQFyA4/aUFIgKhTR9MarV3d/uR65tLcRutGSEoJSL5gFFaQ9qviDdtmcaWIHOxyZERENCAYimhVVHWiWMGlArxGBDsSoccJRKlBSKxA0mLZfdsfVPcT2rRDJ5bloxl6ohtpFZCcYBSGo18gwEsLBXyaDdlERMOHoYi6Ek6TPdkI/loE93LDUCMApQQiXxByQ1Dih7JVxWi1f4/GH/7H7IZru4LUCEBwwpEdnALcUBO8aMes/LiHQyYionXGUEQdCfcXepgo3iKC+6WFoVgAshuoUQ8VviDkC0Hd/GCmLct3V5q1kraXkX3frh61DEf1twDAew7eiZfv3Cl3dPHXISKijDAUUVuLVb2vAO9EgHOMPTXmeQOs97XDINQmBHWyF9FqtApNvlAU3ai2D0dBc0rtZ4HgorkZ+cH6/C2IiKhXGIoo1S2qG7aV8UoRvCJaWr/qMOTpF0r74VuvENSOLyStJhwFyarRiipeuW0GfyMiwbr/RYiIaFUYisirVNLTVPBBEZwUa5wWoFEtghOOUsJQuyCUVQhqpdOAlBaO3LegXjX6iiguKRRkb7/+HkRE1LkBPB1Rlvbs0U1btuJ1ArzMCAyME3zgqRRZYci3K7UvDA1iEPLpOBzZPUeIr0qzp9M0wHKgePZcQa7t01+BiIg6NCSnJuqHxYo+UBQfEMHxrabKGuEIoxuGfNKuoRYLSXZ/EfwVo7CydPXsDJ4vIof69hcgIqKWhvgURb0yP69b8hN4oxi8UATiTpUl+oaA5PTYCIchVyfXT/NNqQX1SlEzJAW4bmkWFx0nvI4aEdEgGKFTFa3GvpKenRO8L9pzqJMKEYCOwtAoBSGftuHIacpOVIzqAekLB+/EBVy2T0SUvRE/bVGaUkm3BoK3CvA8Y5BopE6dKmMYSrDDkTulZleNAvjDURDgmzng0bOzsj+L8RMRUd2Ynb4IABYr+nAo/tEI7t5RZSitb2jMw5AttWpk9xxZ02lBALfP6KaDOTxi56SU+zx0IiIKjfFpbPwsLOhhJoe/g+BZRgB7ZVmiOhSuKovKRG4IcgPQOAciW8uqkWc6LZpGC4PRT/UQHrZ9u8z3feBERMRQNC727dNdZgM+aYBTon2HvEHIVx3iVFlXOplOs+/bwShQ7MkD58zMyK0ZDJ2IaKzxlDYGFsp6rgGuEUFBBBCziuoQw1DXYuHIs1TfDkbOlNovEeChhYLclsGwiYjGlsl6ALR+VFUWKvpCA1xvDApi6oHIpDRTA4g1XMc2a7Sel4GoM/a/k7ulQaNah+a/tTGNwHpPNbihVNKdGQybiGhs8fQ2osKdqa8ygksS02XGuo8WK8sYhnoibTotqhC5K9Ma02nAz2p34ewdO2Qxm5ETEY0XnuZGULmsR9WA64zgDPEFIU+FyO0d8lU5aPXaNmCnBSPFLSt5nHPkVillMW4ionHC092ICS/VcZ0R7ECr3iGgOVUW3bdvQwxEveXb/bpdMKopfrwxh3MnJ6WS1biJiMYBe4pGyEJJLxXFV41JBiJjwjenjyXWM+RUihiIeq/RWxT+YYfTRI9RWOHLCe57sIbrl5d1JqtxExGNA572RsAtqhu2VfBOI3herBrkmzILv4bTZdlaTcUoUNwYrOD35+bk9qzGTUQ0ynj6G3KLi7oDeVxrgAe3DUOcLhsoXQWjoBGOri/M4DEicjCrcRMRjSpOnw2x+ZKeKjl8rxGIrCkyOxAZIBaIfEvtOV3Wf11NpZnGdNrDK8v4gKrytUtE1GM8sA6pYkWfnBd80wjuZu8/5J5Eo0BkfwzgdNmgaBWM1O3/av4fX1xdwlszGzQR0YhiKBpCiyV9NhQfNwabYG/GaJoN1WJVHGL9Q8JANGjaBaOoqmesYASDl1Yq+uKsxkxENIp4ShwyiyV9qQjebgyaFSDPlBnQun+IYWjw+HqM1OoxalwrLWg2YAcBnrZ9Vj6S2aCJiEYIT41DQlWlVMEbRPDKbhqqOV02XFYRjA6hhvMLBbk+s0ETEY0Inh6HgKqaxQr+Lid4QatAFPUPgYFoqCWCkX0RWXhXpP0mEJy9fVq+l9GQiYhGAk+RA05V88UK3m8ET08LRMazconL7YdbJ8HImUYrBQYPnJuSX2Q0ZCKiocfT5ADbvVs3ThbwcaP4w9TqkHH6hNg/NBK810rT5LRaIxjVb395MI+zeJ00IqLV4eqzAbWwoIdNzuKzaYGoscos/HwGotESm/K0HhPrsUQ4Ftxz4hCuVdWJPg+XiGgkMBQNoFuXdcbk8UUDnOcGInvJPYDElFniUh40tLy9YPbqQnUqh/Wfi4dWlvGOvg+WiGgE8LQ5YBYXdYfk8QUBThHPRV1bLblnQ/Voik2ldXg5ENRwaaEg78tkwEREQ4qnzgEyX9W75wN8SQTHxQKRM3UGcMn9uOk0GFkXj11BDWcXCvJf2YyYiGj48PQ5IEolvbcKviSCo1MDEcA9iMaYLxil7WEUhqNFBDitUJDbMhoyEdFQYU/RAFhc1FNU8A3DQEQtxP5/7R6yqKfM3abBYIcafGLvXt2c0ZCJiIYKQ1HGFqp6EnK4wQjm7OuYGQYi8vBdJ839mbCDkRGctvlwvFdV+RNCRNQGQ1GGikU9zgT4Uk4wC+NvqPYGImEgGmeJYOSsPExc+kXwR9Uq/jy7ERMRDQeeTjMSNlV/0wiO7igQOSvNAIahcbaKxusANfxBoSBfzGbERESDj6fVDBSLegQMviGCY909iLzXMWMgIo+Og1Gz8XrpkOD0HdPyP9mMmIhosHH6rM9uO6AFGHwxCkTSIhCxQkStuFOo0c8JBFCnETtsvJ7JKT65Z49uymbERESDjaGojyoVndxwEJ8XwUn2KrO0QMTLdlA73hVpsH5+kqvSTjp8Gm/OZrRERIONp9g+mZ/XLfmN+LwAD2Ygol6LptK8F4+NeoviO14/olCQ6zMbMBHRAGKlqA9279aNuY24zg1EktJUzUBE3YqtSAvvSPNuYqk+DD504IAW+j5QIqIBxlC0zlQ1PzmLjxngEU5/R2IfIjAQUQ+4IdvtLwovHnvkwRqu5v5FRERNDEXrSFVNcQkfMMDjxQ5CaRszMhDRGqQ1XrfoL7qgsoxLMhouEdHA4Sl3naiqFCt4jxE8V5wg1OgjAhiIqOe67C+6/RBwyo5p+WV2IyYiGgysFK0DVZViFW/tOBCBgYh6x+0vEvvnComK0eF5xT+raj6DoRIRDRSGonVQrOJVBnhZaiCypzPgNFeDgYh6R6w05OsvCn82H1hZxl9mOU4iokHA02+PLVT0hTngnVZDa2LpPcBAROvPt+O1avPxIIhNo9X0EB64bZvcmMlgiYgGAE/BPVSs6JOguKYRgDxVIsAJRJ5bol7x9helXwZkd20F95+bk9uzGzHR8FJVs7iIbboRW/KHcHBlIw5uXMHBAwdwcNcurIhILesxUms8DffIYlUfJAG+bAw2MhDRIGkEI02GI0W8YqQBri7MynMyHC7RQNqzRzdt2YKdIjgqENxNgKMEOAqCowAcJfXbnQAmWjxNAOCg81YOFDcLcLMobgkC3Dw3h/8VkWDd/1KUwFNxDxSLehwMvm0MChDPTtUm3kjtC0IMRbReupxGA2p4ZKEgn89irESDQFXzpRJOUsFZIjgLwFkAjo8tYvAds1dzHFfvY3cocIsAt2iAmwODm3OKmwsFzIuI7yuoR3gqXqN9+3R7bgLfNoJ7wdM/FFWLgHj/EAMR9VNX02g1/Hx2BieLyEp2Iybqn2JRjwgMzhTgAQKcJYLTAWxJhJ+UUBQ7hHuO59FD3jSjzsdS3kf9F5oyFJ9XwWcnDL4wMyPLrf9m1C2ejtdg717dvHEzviyCB/g2ZjTO0nsGIspSV9NoihcVZuSdGQ6XaN3s3q0bp6dxXs3gAqM4VwS7AOd4LPHwk7hvf44rLTDBE3bcj2n6fY1/XU2Bb6CGz9YmcN0R07LHNxTqDk/Jq6SqpljFNQZ4QjcXeGUgoqx0OY22/2AOxx25VUqZDJaox0ol3aoGj0SACyB4lAi2xio+9i+x9i1SwpLvY2sUe402/kiGIl9IUsUNCPC+22/HJ445Ru7s3ajGC0/Lq7RY0SsM8JK0y3cwENEg6mYaLVBctW1anpfdaInWZv6Absuv4DFQXADgYSL1hTAA0kNQShhqdfxO7THyzZellI7cT3V/iWl8Tko4il7HAJYA/EttBe/fsUN+5BkBtcBT8yoUy/p8Eby71W7V4gQi7kVEg8I3jRaEB9RoGi2oh6NAAtxvdlZ+nN1oibqze7du3DqNC3KCZylwtghy3iDUQRiKBaHoD032ELmBppNDvPdr7PATPok3HHluY7/oNO9/GQHesH27fK2DIREYirq2UNLHGMEnjYGxgxCvZ0bDIm0azb42WrhvEYIAN8xO4zyueKFBt7io90QOzxbgj0Ww3d3N3T4Wp22Jklhdps37CutjsTved7uinndi30+toKTNj8VCkROQ7CqwKL6uijcUCvgyX8ut8RTdhVJJT1PB14zBlrZ7ETEQ0QDreBqtXjV6/LYZ+WR2oyXyU9X8YgXnG8VzxeARACRRofcEIXcqrPG50evCDUdIOVn2IBglEoqmvGuFIbFCkrdq5AlG4e1/14DX7SjIF1Yx1LHA03SH9i3prlwN/20MdiAMQW03Z2QgogGW+psl4k3XNcX/LE3hxONE7spssESWUkmPDAwuFcWlIribryqUuKySryoUVoLahqBWwcjzgdVMn6WuRnPecUOSG5BSq0f2Lz8BPlvL44U7puWXHQx1rPBU3YFbl3Vm8yF8ywh+x7sXUZvNGRmIaBB12XT98m3T8rbsRktU/+XUBPhLKJ5pBBsSC1naVIYaQSicDvOGoLQA1C4YrQNt/OE8Zt2xm61Fw4Dn/KJjv8Yb/YOKu1TxljvvwFuPPlp+u/5/m+HA03Ubt6hu2L6EL4ji7NS9iOwXXEowIhpEqU3XcEJRgNtrB3Hc3JwsZDVWGl/Foh4b5PAKo/gjEeR9ASjt+JsWhDoJQZ0evntxnFft4HOcO773Nap+OY+5r3GrcrQHwAu3z8pn1v63GH48ZbegqlKs4MNG8Ed2DxH3IqJRkWi69vxWaV0w9gOFGXlWVmOl8TNf1t/JAa8U4KlGYGCHIScQuS0MUY+QSodBqE0IyupY3ios2ZWkRO+RUz1yp9BiYan+xf8+YfDsqSmprtNfZSjwlN3CYkVfa4DXcS8iGmVp02juTte1ABoAp22flpsyHC6NgYWqniSK14jiiUYgiTDUom9IGuUgtA5CbabDBvX4nRaSEgGp03AUf7tNBU/bPjO+S/gH9L89e4sVfYIo/s1dcs+9iGgU+ZqufUv0NcBXZmfk3CzHSqOrWNQjNIe/EsWzROrbnrQKQ7FA1KIq1EkQGsZjti8gtQtH7lSbWq/z8L5C8abCDF4/jtc/HMIfg/W3WNX7SoBvu0vv7WkzIP4iZSCiYdau6Tp2CZBDOHPbNrkxu9HSqNm7VzdPbMaLDHC5CA7vOAzB6hVKC0K+96OHR+hY7QakVuEo+nw3GDlv36kZXDRuK9RM1gMYNPMHdJsE+JQRbIEzXeabt2YgolEQ27QuuiPhb952RVQAyeFl2YySRo2qmsWyPm3jZvw8J3ijMThcTHjcNc2tT6JfShtbocBa5CLJi2/H7juByD2Wj4rE/ktItnbYr2VIPQAYk3wL/w/OzAX4YbGqj8ri75OVEfuxWBtVnShVcL1Ic6VZ26X3DEQ0IrqoFukhwb3npuQX2Y2Wht2+sp6RE7xbgNMTlSE4VSJfFci6tW68VaFxPDZ3VDlyptbcalE4pRYA+PNtM3Jl/0afHVaKLMUK3iGCsxMvxug3kfAHqhGIwEBEo6OTalH4JkbxkoyGSUNufl63LFb0ihzwbRMGougYm6gKGU8VqM20mq8qNI7aVY7cf0+3aiTNf38jwLvKVb1SVfOZ/GX6aEx/XJIWSnppzuDq1aw0G9cXHY2eLqpFd63chXvs2CGL2Y2Whs2+kp6dE7xPBPeyq0Nui4LbMxS9E6sQufejh3g89kpUjrqoGjWuhaj4nFE8pVCQA30dfB+xUgSgWNXfM4K/F+cF2nihAqmBiGiUdNFbtDG/AS/IZpQ0bKpVnVqs6FV5g68Yg3u5fUNikqHIxH/ekgtbWBXqSqJylFI1inqN3P+L8P/qkSr4VrWqd8/kL9EHY/8jNF/Vu+cDfM+Y+lWVE71EQPxFGb0ffj1fhDRqOtm3KKjvW1QqTOGocVy2S50rlfR8FbxXBEd5p7/cN7VCOMDK0DpIrRrZt86+Ro0qcf39vTXB2aO4Mm2sK0Xz87olH+CTRrA9rYxr/0bCQETjIK1aFOvfAGAE28vLeGQmg6SBNz+v2xbL+i8w+KwxOEqaq5qSK57EOhmJ00cU3bIy1DOpVSP31vrcRp9R/f2jc4qvLi7rvbL5G6yfsQ1Fqir5jfiACO4Hq4fI28AHp9QIvhhpTNi/EEQPWa8PI3hGNgOjQVas6JPzG/BTI7jY10jtqxC5Uzhsnl5/biO2G0LtlX2NokFzm4SRDEZj+6NVLOvlIniTb8rMXe3AxmoaR2m7XAdWOT0IsJI32Dk5KeUsx0qDYX5et+Qn8C4InmUMYuHGG4ZaTJW5x1ked9eXex3E6Da2wz2802m3BSs4Z25uNLboGMtK0UJJHyOCN7orzXyNfAxENPas3xajnYOBxutl4mANT81qaDQ45st6n/wGfEdMPRC1rA5FX+R+LHzMndrhcXf9JabTkJwpsRuwrem0u5kJfLVY1GMzGHbPjV0o2lfRE4zgIyIQ30qHVoGIaJzYvUWN395R/+3eee1cktEQaUAslvTiPPA9IzipZe+QSa5sSusbYhjqv7Q+o+hN3WDULCwcZSbw1UpFj85q7L0yVj9yty7rzOZDuNEIjoW9MZg1dQZ4fmtB83GiceIro0ePRavQggBADfednZWfZDVOysbevbp54xa8S4A/aVQTfNNkzvG0XY8mj7XZik2lhX/Yq1Gjfcs8+xj9RAL83jDvYzQ2lSJVzW2q4eMSBSLPixawyoUAAxFRxHpdxKpFqN8GBpdlO0Dqt3JZ77NxM74TBaLYlEqX1aEIq0ODoZMG7ETFqP52sgquUdWJLMbdC2MTikoVvM4AD/dNmUWX8Ggc8K1pA4AvUhpf7mvBTkbRa0UAGOCSAwe0kMUYqf8WS3pxUJ8uOzk2VeapFAFITMPYPzsAGIYGUKxYEP7RMhg1+3MfUV3C36vqUP6PjkUoKhb1UQBe1WljNRCvHBERYtWiqLpuneg2HwzwnAxHR32wd69uXqzo1cbgX4zBYXCCUKzBOvyaTqpDNLi6CUbR+RUGl1aW8BcZDXlNRv7Hcd+S7srVcJMxmLH/0+wdq90XLV+wRHGx3qKovyBo9hUEARDUsG9mGrtE5GCGQ6V1Uirp8Sq4VgQnuydBb/8Qkr9c8tg6vBI73SN+bcTofXvna9RwYaEg12Q15tUY6UrR7t26MVfDtUYwEyVb347V9nQA+KIlai18rUT7ywCNE+SRlWU8JdOx0bpYKOlFKvi+McnpMl8Y8u6OzGPrUPNVjHwFBbtaqAb/VKnoAzMb9CqMdCianME7RHBa2o7VgFUtAprBCHzREtnc1wuAtOX5r9utujGrcVJvRdNlOYOPGIPDGlNjUZXIuUyHd+WuHZbAY+swaxuM3GlUg40w+MTSkt4ju1F3Z2RD0WJJLzaC57GxmmgdhK+lRLVIcMzsMp6f7eCoF0olPXXDZnzPAJdGU2VuEEqsKHOqRmymHj3eYITEcaB5rjWYqwGfKZV0azYj7s5I/ojuq+iJOcWNxmCLk1rrt0C8rAv/nDcRNbmXAVDPniXhpT+Wc4J7TU1JNaux0uqp6kSxileY+uKUfFrrgbtIhdWh8ZLoMdJ4v1HUW9Q4Lig+XZjG40UkyGzQHRi5SlGppFtzin83BltgTZnZjdWaEoiIKF3idRK+hjzVoulDwKv6PT5au30VPaFUwX8Z4HUiyDemyzxVok6my1gdGn2x/2vrsViIrp9/H1tZwpsyGmbHRioUqaoEBu8XwfHRzqppJV42VhOtgV02BxK9RQK8oLh/NK6FNA5U1SxW9MU5xU3G4DTfVNlqpstodHkb5+1fkBCfRgun0l5eXtKBvizQSIWixSr+zABPSpR4nXnP6D4bq4m64/bfpfYWARN5xdWqOlLHmFG0sKzHlKr4igH+xhhsjJ3EnLfGf6bnl0uuLhs/7v957GfBrSY2+9D+sVrV38tmxO2NzAFrsaIPMIorYv/47gaNiFeHGIiIVi/RROtUiyA4p7qMP81yjJROVWWhpJeaQ/ixETykkwu52v1DiWkzWP/3NDZaBSO1flaskD2hgk8sLemubEbc2kj8+O7bp9tzE7jJGNzNDkWdbNDIFzBR99wLxcJqvLabLIMAdwaHcL9t2+RnGQ6XHPNVvXte8Q8CPMpbWXeq7LHjZkqFncfS8dZyc0ckN3YMAtysh/DA7dvl1xkN2WvoK0WqmstP4KMiuNtqNmgkotWzT5qJHpP62ybJ459UNZ/xUAn1lWWLJX1JPsBPjeBRnVSHEn1EAKfLKCE2tW61qdgFiNhlYAQnSR4fVdVcNiP2G/pQVCzjtRCc53S5e5v/fKVeIupe7LVjv76QnEYTwenVZVyewTDJsljRB5TK+J4xuMLdiLHdztStmql5HKVIIhh5zsHOufrR1SW8JbMBewz1j3Oxqo8UxX+6fUSNTRqB2Isa4LQZUS/5ptECX7k8wKEacNb2afl+VmMdV3v36+yGQ3hLtAljbOdhX+hBs3E+9oukxE8YPIaST2I/M6AxvW7vaWbtXwQo/rgwIx/MZMCOof2xnl/Se+RquClnMOvrI+IGjUTrz7uhI5DYwC08+P1v7SAeMDcnCxkNd6yoqhQr+CMBrjCC7SnTm4kqEBA/bgLxYyaPn9ROp8HI6jG6UwKcOTsrP85mxE1D+eO9e7dunJrBN4zgdDhbzhvjlO6cFzvAFzVRL3l3tk05+GmA7x+8Cw894gj5TXYjHn3lst4nAP5BBGfb1SHvrtRSn/JkdYh6KS0YhZWhRiN2VC3SAP8vOITTsm68HsqeoskZ/K1EgcjzAo/NZQKxVzVf1ES9FesjCO8kluOGFVwYnDqxEf/Kxuv1sXe/zi6W9G9V8GNjcLbbRO3ruQSAaLNb34qzxqfw2Eld8PUdwj1Hx8P6vc0E3quqmf6kDd2P+UJJL8oZfMQ7ZeabLkspARNR7/h+K0xdjhsAAXBVYQqXiYh6n5C6snu3bpycxgtE8CojmG47VRZWh9xVuQxD1GudXiMtaF478TnbZ+XqrMY7VD/uvNAr0eDq5uCn9YPf5dtmZaBWngwbVZXFMi40gjeLYJddLU+7gKsgZarMvQ8eN6k37F+OotvEFHt4XKgp7qopztwxIz/KYqxD8yNfKulWFXzXmPC6Zp4NGqMDgRuIAL64ifqh1cFPER747ANggIu3z8pHsxrvMCsW9SEwuEIEp/tWldnHQe9Se99t9GEeL6mHumm8Do8Nu4NDODWL/qKh6ClSVakZvE94oVeiodB4zXkqt/ZUtzH4UHlJH5/hUIfOvoqeUCrrJyWHrxmD030Xb43+jWOX6AASvRyN/xPr+Xm8pF5zCxSNc7TEew+tY8NxZgJXZ9FfNBShqFTBC3LAk1OXkSJ+n31ERNlIO/g1pnRgvXbrJ/AJEfx7eVlfnnWD5SBTVSkW9cHFsn46D9wiBo9rhCFx3uwr20dP4P4iGT6W+P/i/wCtE1/jdWNGxz2v139wn1Lej2f3fZz9/obdWqjoWUbxdWMw0W6DRvYREQ2GltdBspfjRv1F9Y99qDCN54jIwcwGPmBUNVes4HECvEwEZyVW13p+UQRSpsY4VUYDoNUWHrEp9rC/KFCcNTcjP+zX+Ab65cALvRINr06DUWwfI8XXJ3J4wuSklDMb+ADYu1c3b9iEp4vgJSI4rl0Ygv1Y9CSeEOQeF3mcpCykXVDa11+EAL/QAKcWCnKgH2Mb2OkzVc3lJvAR4YVeiYaSr2oRK5fD6iNo7qHzkJUavlMu6+9kNe4s3XZAC4sVffXGzbjVGFxlDI5LTJPZ+w5Z/36t+oY4VUaDyP359PUXQXBsIP3rLxrYl8ViSV9vDD1vppYAACAASURBVF7TqBCl7VqN+EEW4IudaJCkLdVXBcT6zbBRNapPqe1HgCcVCvLF7EbePwvLeow5hBeJ4FkCbGn8spdSHYL9vrsbNcCpMhp4rY4LgHf/oudtn5Wr1ntcA/kSKVb0DwT4TxEIL/RKNNxiy3HDP+yps9RgpKhpgNcUZvB2EVnJZvTrq1TSUxV4mRg8SSQ8tLWYKgNWF4Yaz0s0QDrpL7L6Du84BJy8Y1p+uZ5jGriXyXxV754L8ANe6JVodKQFI3gOgm44ChQ/lhr+ZNs2+W4WY++1PXt00+ateIQAf2YE5yaOZZ5ABHQYhpA8DvK4SIOsm/6iIMBXCtM4T0SC9RrPQL1cdu/WjZMz+HpOcAbcMGQ8Bwck58mJaDB1FIwkUS2KLiQbBAHepTW8em5Obs/kL7AGu3frxq3TeFhO8GQIHifAJNICUFogQv3fi2GIRkm3lwiqAc/dPi3vXa/xDNTLZrGs7zaC53unzMIuwlgYYh8R0VBpG4wQPygmptSABVG85Y7bcfXRR8tv+/4X6MItqhu2l3AeDJ4sgj8EMBU7brWrCKH5PoDY8S71PngspOHT8hJBGl+mHyh+LQFOmp2V/1uPsQzMy2ehohfmgI97p8x802UMRERDy7dc3+41Ems6DUhOq6liHxRv+vV+vO+YY+TOLP4OPreobti+hN9H0AhC07FQ0yIE2fcbU2TR18F6DjQ/18bjIA2zVv1FicuA1HD97Az+YD0uKD0QL6NiUY+DwfeNwVZ7qox9RESjyy2bR7fRQdGdTvO+Ab8S4L0G+KeZGbk1g78GFhb0MDOBB0PxJBE8XoAZeIKQG4oATyDyhaE2lSAeA2kUpF0fLbB7Dq1pNFX8cWFGPtjrcWT+ctq7Vzdv3IJvG+AUtFh6zwu9Eo2edtNpimbVKG1aLXxcEeAGCD508E5ct3On3LE+41VTqeDeAXCWAGdCcBaAk0WQA5AMMp7qttsnFN1XtAhDkjxY89hHo6Zdf5EdigLFfj2EE7dtk1/1cgyZv6wWK/peAzw7sVu120fkOVDwoEA0/FoGo8aD/gZMJxhFYerXAL6MADcYg6/MzOCW1ZbZbzughQ2HcIbWcJYYnCXAGXCmxBo3vun9lMp2p1NkDEM0brqZRgsCfLYwjcf2chot05fXQkkvyhl8hH1ERONN1f++t9dIUsJR9LnJUFWC4KtQ3BQEuEMM7pQAdwWCO43irkCQh2KnAEcB2AmDo6DYCeAoAQ6Pz101Q0zjpkXwcW8lLAf5qkLWDcMQjTXfdHraNFotwNO2z8pHevW9M3uZlct6nwD4njE4jH1ERAS0rhpFH29MqfnCkfM13tvYN3TeF89dTwACrOOQ57GOglCr+/aQeLyjMdPlNFq1dhAnzs3JQi++dyYvt/l53ZLfgO8YwUl2HxEv9EpEiapR+EercGRXk+C7tb829sQebtUG8eOO737ittMg5HsfPM4RdbUaLcB1s9N4Yi+m0TJ56S1U9P054I8TU2YpGzRy2oxo/LSbUotuVMPjg1U9cr/eV4FqSdJDkf1+4/gUfc8WVSDrhlUhog50M42mwJML03LtWr9n31+Ci2V9uhF8mH1ERNSOG4zsxxLVn6h6FN23Kkitni9NIghFf2jzvjofa1kBYhAi6kraNJq3t0hRWsnhxCO3Smkt37OvL8d9FT0hp/iuMdjCPiIi6pQ3HDX+SA9IgBWSYD/gPJHv+KKIVXZizxfecUNP4ulTghDAYxpRJ7qaRlN8rDAtF63l+/XtZbmwoIdJHjfmDE6AsI+IiLrXUTiK3Uk+1kmxqG3YafM4gxBR76ROoyEeioIACAI8evus/Mdqv5dZ+3DbU1WRDXiPkTAQWVNldhCCFYiy3SyAiAZR7JgRPeY8nvgFy3nMdPAmnje4j8GaNnMe942XgYhobdwNTxuxIf7a/ltVnVjt9+hLKCpV8UyjeLrvQBP7SyE5N88DCRH5+IJGIiBJymPOL2KNX8jaHKO8n5MyLh67iHoj9lpyXnfRa9P6Zebe1WVcturvtaaRdmChqiebADcag02N/iH7Uh7hKDhtRkRr1WkjdQeLzzrG4xRRf7jTaC32LlqeMDh2clIq3X6Pda0UlUq61QS4NgpE4qwys0vPDEREtFadTlelFIqa1eoOnpvVIKKMuLNMmnhdTh+s4XWreep1C0WqKoHgKhEcHwUf9hERUT+lBZnVvBFRthpFk8YD9fvR/mDOa/Z5lYqe0O33WLdQVCzjUiO4iH1ERERE1EvubJNnQUUOOfxN18/b85ECKBb1d2Hw38ZgY6N/KKWPyJ0uYyAiIiKiNO32LrL7ixDgUbOz8rlOn7vnlaJKRSdhcK0x2GhXh9L6iAAGIiIiIuqMbxoNEk6jOW+aw9tVteOs09NQpKqyAvyjCI5lHxERERGtK4nFimTTteLE6n48odOn62koKlbwvBzwZPYRERER0XrxNl1b1aLoc8L7r+m0WtSzUFQq6akA3hEtvY/6iNwNzqJgZP9lGIiIiIhoNRIZI7lE/6Tqfjy+k+fqSSiqVnVKDa7JGWxgHxERERGtt0R+SKsW1e92VC1acyhSVVlRfECAe3baR8QgRERERGvlCT9pGzret7KMx7Z7vjWHolIFf2qAC1I3PbMG6zZWMxwRERFRT1jFl8RKtPrHX6OqLZPHmkLRvrKeAeCK1D4itcbJPiIiIiLqMTtfuNWixn0BDHC/8jIe0+q5Vh2Kbl3WmTxwjTGY8PURuRd6jQ2cgYiIiIh6zVMtAmIZ5fJWX76qUKSqsinAByG4R1ofkbKPiIiIiPrAWy2Cp7cIOGtxSU9Je55VhaJiFS8yisexj4iIiIgGTtpKNAFygue0+LLu7CvrGTngW8YgLwIYA17XjIiIiDLXuC6a55po0fXQggC311awc/t2+bX79V1VihYW9LAc8C9GkIfVVM39iIiIiGighFnErhaFjx2em8BTfV/SVSiSPK4QwXEIK0Pcj4iIiIgGjsQiSbO3CPXbAHiub3l+x7GlWNRHweA/7Oky41SKYmFImk/OcERERET9EJtCQ3MKTRUIoim0+pTaGdum5Lv213ZUKZqf120w+IAxSG2sBrgfEREREQ0Iq1qk0UP2grAAz3W/pG0oUlXJbcDVItjhXX4Pa76OfURERESUIbc4E923izVhZnnq/Lxusb+2bSgqVfB0AR6ftvzebqx2l98TERERZcrXcA1ABJsnNuEc+1NbhqJiUY8AcGXqtJnGG5nYR0RERERZs1ebxXKKvZkjADE43/66lqFIc3idCLamTZsllt+7gyEiIiLKiNh3nMJNuLfi+fYqtNT4sq+iJ+QUPzEGJrHazMSfNNZgzUBEREREGWusQoO1iWP4WLiJY/39Gu47Oys/AVpUinKKt4rA2LtTt5o2IyIiIhoUaddDc6fQgOYUmjcU7Svp2QAenVYJSqw2cwZARERENHAkXscRATTXIhSpqjE5XGGvLPNd7DV8bgYhIiIiGnxhXlE3yygeuH+/zgKeULRYxoUS4NSONmmML20jIiIiGjzWKrTo/catwKwEeDDgmz4zeHGsSgSnQsRpMyIiIhoCqRs52tdCA2AExwNOKJov6f2N4jTvJo32k7nfgYiIiGjQObNc0WMKTyjKCS5llYiIiIhGmrV4LFyRFg9FxaIeLsDFbkM1q0REREQ09KyijsLJN4L7AFYoCnK4sLF7NeKBiFUiIiIiGkZuccf/SSgcOKAFY33ipY3sYwcgCRNV22ckIiIiGkxuszU0/oGVFRxvgPqFX0Vxpr1NdaNapO7KtfA+wxERERENMXsFmhrcu14pyuH3xA5D1ifGr+dBRERENPzcWGMEGwwABFrftKjxWVZpSO2H7B4jIiIiomGTkmECxZ0GAAzw4NiqMySnzlo8DxEREdHw8AQaEfzWVCo6CeAU68H4F3HqjIiIiEaJJh+SAHeaQ8BZIvWl+XYTtfi/hoiIiGh4pYQbNbjTCHAUgGRFyNqTiP1ERERENErcbCQB7jQaYDb+aPOz2U9EREREI0kA1WY4CnK406igYLcONTZvJCIiIhpyGqYeuzIUqxLVg9FKcBf+PyPiVIpCzEVEREQ0MsKqkFrvN+4qvjE3J7cbUcwyAREREdG4kCggNYPR5wDrgrAMRkRERDRK1O2mDktF6nyOBPg8ABhV3Na30RERERH1mTpvdpO1Cm6bmcEtAGBg8KvGVxARERGNAHU7q8M3UetjYZVIRBQAjAK3+QIRMxIRERENO3vZfVgZqj8WvgXANdHnGiP4lVtW0vAqsAxGRERENGx8vUTqVInCUPSV2Sl8Kfo0cyiPn8HOPylVo0bKYlIiIiKiAWXnlEbfEFKqRIK/jKbOAMDsnJSyKr4TX7wfJir7IYYhIiIiGhKx/OKpEkHxgW1TcqP9NdGS/P+wvi7WgOSGJSIiIqJBFNu9WpHsJ1IgUEAD3PzbO/Cn7tfXQ1EO/+EGINWwzGR/M+ebEhEREQ0Cd7WZXeiJ3Vf85pDBE3fulDvc5zAAsH0aP1Rg3vqCxjeIptCi1EVEREQ0SHx9RFGlqFExivqIAjxj+6T83Pc8BgBERIMA/+gmq8Y3sitIngEQERERZaFVILIv5xEEAIA3F6bl39Keq3Fxj+VlnVmp4VYx2GoMYAxgpP4GASR6Q/0W1i0RERFRv7WtECHsIVKgFuALM5M4X0Rqac/XuPbZ9LQsieDKRLkJ9aTFahERERENilggsu40ZrqkGYgCxS9zwEWtAhFgXxAWwME83gHFbxB1Z8PTuR377gxGRERE1F+JQJSy0ix87A49hD+cmpJqu+eNhaKdk1JW4G/shiTV+JPDet83OCIiIqL10ioQ2bdBAKiiFiieMjsrP+nkuY37QHEWb0SAH/iCkVjByB0YERER0XpqF4iizwnfNFA8fXZSPtPp8ydC0YkiB0XwNCju9AWjaCCxDZLAgERERETrp5tAFARAEOCy2Sn5aDffIxGKAKBQkJ8GAV7unUaDMwiNByOGIyIiIuqltoFI44EIAf5ydlqu6vb7pC6qV1VTreIzavCoaHm+SH2pvr0kv7FEX+JPxuX6REREtFYdBSLE9yKanpRXrOZ7eStFACAiQa2GCwHcqEFzWVus4dqT0nx/CSIiIqJuJXJFm0Ckir+f2opXrvb7ta3nzB/QbRsO4RticB+3WiThM7Ta1JEVIyIiIuqWr9DSqocIin+YmsQLRCRY7fdMrRRFdk5KWRQP1wB7A42lsXgvkefWHjARERFRJ3w7VbcKRKr466lJPH8tgQjooFIUKZf1PjD4ohjcLVExsvqJYv1F7DMiIiKiDrlFlMSlO2AFpGYgevHMlLyjF9+/q5hSLutRYvBZGPxuFIxi4UjDZ2xzjTSGIyIiIrJ1E4jCMBQo8KyZSflQr8bQdTwplXQrcvhXY/BIOxhJePFYAaB29SilagQwHBEREVHKCrPoNmqollggOqjAhTOT8slejmNVsURV89UlvBuC54i1XD/2Fn2Dxh2GIyIiIorrKBAhtgr+dgT4w+lp+XKvx7LqOKKqUq3iWTD4OxFsEWNVi6LpM6RUjdz70UMMR0RERGOj3QozUSBAIwxBFZVDikdum5Lvrsd41hxDSiU9XvL4qAju760Y+YKQr5JkD4rhiIiIaGS17B9CvEJkBaJf1QQPL2yVn67XuHoSP1R1Q2UJbxCDl4lA7B4joHmbCEUMR0RERGOl7XQZEmEIgeLG2kFcsG2b/Go9x9bT2FFa0rMFuFIEJ6VWjcJmKXt1GqfViIiIRl83DdVhGIIG+PDyJJ57jMid6z2+nscNVc1Vq3gmcniDCI6wd7teazgCGJCIiIiGjW+6LLqNQpGnobqmipdMT+JdItKXbaDXLWIUi3q4TOClRvAyEWwxYed1NJXmC0feFWoMR0REREOrk/4hT0N1FQGeND0tN/RzrOseLcplPUpy+CsRPNPuN5IOw1FskAxIREREQ2M1/UOq+HG45H5Pv8fbtzixuKSn5IG3i+Bh7lQaEA9Hze7rlECUEo6i5yEiIqLspE6XhX+k9g8prr3rDjzziCPkN30eMoA+hiKgsbfRI2BwhQhOTA1HaN5vZKQuq0fR1xMREVH/dDpd5vQPaRDgVTNTeHO/+od8MokNqpovL+FCY/B8AR7QCEVOUzaA9Kk1a/QMSERERNlrN13mhqPw7dcBcNHspHw2gyHHZB4Vikt6vxxwmQguFsFmdzotdl/R3CUbaD2l1iIgRc9JREREa9fx6jKJhSEEiv9XAx63bVJ+1uchew1MNFhe1pma4hkiuAyCY70VI6d6BN/0GpCsILkf92BIIiIi6l7L6hBSp8sQKP5VAjx3ZkaWsxi3z8BFAVU11f04TwTPh+LRIjCpwQioh50eB6To+YmIiMivo2ZqeFeXHQgUl81M4qNZ9g/5DPSpf2lJ76GC5wTAnxjB9qh6ZPceAe0DknXDkERERLRGHVeHkqvLvo4anj4zI7dmMvA2huJUv1t148wyHgngCUbwGAimYkEI8YDUuHV7kKzPh/W+deP/nBQMSkRENE46qQ6lNFMfCgK8emYKbxeRWl8H3YWhO62r6oZqFecihycI8Ici2ObuhJ0ISNHH2lWR0h6znrsdBiUiIhpF7apDac3UqvgZAlw8PS03ZTDsrgz1KVxV8+VlPDgHPAHABTA4Mm2KDYC3irSWkOR9PAXDEhERDaNuqkNAvJlaFX//29/gL3bulDv6N+LVG5lTtaqaahVnIYcLBHgCBLtSp9Xs2+gPX0gK3+8qEHUZluyxEBERDYpEGAr/6LA6tBgo/nh2Sv6zz8Nek5E8HauqlJZxSg74fQjOFcFDBDgcaB+SGvedkBTebVs58n6s1dd1gKGJiIj6aTXVoehWA3wqb3Dp1q1S6s9oe2csTreqOlGt4lTN4VwBzhXBgwTYZFeBUsMR0qtJjY+Fd1oFJc+7iQfX8p/B4ERERGu1puoQcAcUL5zaivcP2lL7To3lqXTPHt00PY0zA+BcMTgXwFkC5DsNSUDnQSn2vq2TwOR8YLX/WQxMRETUzmpWlgGNHqIbjeJpU1Oyu28DXgc8XQJYWNDDJjbhQVA8WASnQ3C6ALOAFSg8gSlxv/EHWocl651OAlPq53XyXGlfwv95IiJCB2EI/n2HoqX2qnjT9CT+WkRW+jz0nuOp0UNVZf9+HFMDTgNwugCnQ3Cq25fU8f3GH2iGpfAx+2fRrTA5d1s+2K7S1O4/miGJiGi8dDxVhsSeQ/W3AF8LcrissFV+2sdhryueCjukqrlqFcerwekGOF0Ep6vgFAE2Ak6oSKkqwfNYamAKH/eGJuedrnuV2gQlBiQiotHW6VRZdM0yJxQVA8VLZibxkWHtHUrD098aqGq+/GvcU2o4EQYnGsWJAE6E4HgBNgDpYSnxsZTHYqEJSFSawofgflpX+yv5msRbjJGIiIZTJ9WhFlNlgSregwCvHqSLuPYST3nrQFXzlQqOlTxOhOBEqYel34HgmGgKzhdEEoGog9AUPlXL6bmWjd/uYwxIREQjp6upMn8j9XclwPOmp+X7fRpyJnia6yNVlV//GrN3BdhlgF1Q7BJgF4BdMDgmvH8YgNQl/t0GKXHDkh2UPIHIfd/3A8JwREQ0HNLCkH2/zVTZEgJcPjWF9w3yNct6hae3ARKGpkIjNAG7RLELgmMg4fvAlsYXuKGlxfRcu80pxf36NlN9DEZERIPLDUP2Yx1OlUEVH8obvHzrVin2ceiZ4qltiKiqlEo4bMMGzNUEc0GAOSOYE2AOgqMBnCTAfQFMpgWctGvB+S6W2+7rfe8TEVG21jpVBsXNAfC82Un5Zn9GPDh4Shsx4XYCuw4pTskZ3DdQnCL1VXL38oUb320sIPnCUQfTeERE1F/twlD0OS2mym5X4LXTW3HlKOw5tBo8lY2JYlEPz23CyaaGM2FwPoCHQjBhh5xYMAq/TlAvq4ovELWZYiMiovXXsm/IF4Z8U2XAtcEKXlwoyG19HPrA4WlsTFUqOokcHgbBYwQ4X4BtIogFJF9ISlSLGIyIiDLRURM1WvQN1T/2i0DxgsKUfKGfYx9UPIVRfWPKAzhdFI8RwTMg2GkHI/fCuI2qEoMREVHfrSUMRV+virtU8ablSbztGJE7+zb4AcfTF8Wo6sal/bgEgpeL4J5uOLJ7jnzTbhEGIyKi3uo0DLn9Q4370QaMAT4MxV/NzMj/rv+ohwtPXeSlqvmlA7gQwCtEcIJYAchIstcoVjkCQxERUa+sJgxF77p9QzXgNdsm5Wd9GPZQ4qmLWlJVs3QATxHgvSI43K4YGVjByDOVxmBERLR6ne411C4MQfE5KF41PS03rfeYhx1PW9SRcll/x0zgE0ZwvC8YGc90GsBgRES0Gm0v2GrdpiyvhwLfVOAVs5PyjT4OfajxlEUdq1Z1Cjn8kwgea5xgBIlPofn6jIiIqLWu9xryLa9X/ECBV85M4vOjdhX79cZTFnVFVU31AD6QE1zSCEUmuTKN1SIios6tea+h+uf/vBbg1bNT+HcRCfo2+BHC0xV1rVLRScnjZiM42g1Fvmk0hiIionSdTJWlLa8P6rf/p4rXTW/FP4vIoX6NexTxdEWrUl7W83KCL4oJV6NF02jGWZEGhiIiIp+Or1GWvtdQURV/PT2Jq0Xkrj4OfWTxdEWrVlnWjxqDpxqrWhTb8JEr0YiIvFKrQ2m3iE2XLQcB3nboIK6cm5Pb+zLgMZHPegA0vLS+zPOp0W8wYpobhQHWJo9ERNRgByJfdSg2VYZY39AdUPwdArx9dlqWshj7qGMoolWrCb5ltBl+VJsr0YiIKCkWiNzeIetjAQANGoFoRQVXrQjeNLdVFvo43LHD0xetmqpKdT/2GYMd0RSavTzfvagsEdE48waiFo3UqlBVfEhrvCRHv7BSRKsmIlpZ0gDWNBlnzIiI4nz9Q+50GTRRHfqRKC6dnpLv9n3AY8xkPQAaXqq6AcARWY+DiGhQuf1DsUAUbUNtf6z+9raprTh9ioGo71gpolVbXsZOsDBEROTVsqHas9Q+UCyr4pKZSfl0JgMmhiJavRrwu0xEREStpQYiAEHQqB7dhBqeODMte7Ic67jj9BmtnuISt07EkERE5N+VOhGImtNl71s6HA+aZiDKHM9htCqLi7ojN4HbxCCfM+HmjdzVmogoscqsVSCC4m8nt+KlvHDrYGCliFYlN4FnQpCPXfgV9flxIqJx1U0gUsXfMBANFp7CqGvFoh5h8viZCKaMXSUKI3Z0LTRe5oOIxkk3gaimuGJmK/6CgWiwsFJEXRODt0Mw5W7OKBpP2QxERDQufBsztqgQMRANKJ6uqCulkj5UcvhqVBkSU68MRVWixk7WYD8REY0P3yU77CbroLkp49untuLlDESDiZUi6tj8Ad0Ggw/HLuOBeJUoemPcJqJxEduxOtqlGvFLeISf804GosHGUEQdUdX8xAo+JoJ72Nc1i940log4dUZE46FtH1Hz7YbJw9lUPegYiqgj5QreKILzfIGIVSIiGndq3Wlc3BWNpup9eYOLRKSW4RCpAwxF1FaxrC8QwV9E02bGUyUSVomIaMykTZsBsct31FRx4eGHy2IGQ6QuMRRRS6WK/rkIrkTYUC0mHogA67bxBxHR+HCnzew3AK+fnZRvZDpA6hhPYZRqsaIvMcAVURCKVplFgcgAgFUl4oozIhoX3tVmYakoCD8eBNg9tRUni8hd2Y2UusFKEXktVvUvDHCF2FNmDERERHH2ajPEr3ovij9lIBouDEWUUCzr5UbxVpHmPkSxXiLEV5tx2oyIxkmsShTdiZqrtfE5101NyRcyGB6tAU9l1KCqplTB60XwqkQgsi7yCisc8XIeRDRurODj7kMUbdJ4MDiEe8/MyK2ZDZJWJZ/1AGgw7N2vs6Uq/tkIHgUTnzKzV5sBDERENL5iK86AWJUoaD72MQai4cRQRCgW9X5YwXXGYBfsabJ2gQgMREQ0nmLL7wFAAI0u5RHgyuxGRmvBnqIxV6zoM8Xg27FAZOrTZXYPEcBrmhERNVh9RXYvUaD4r+lp+X5m46I1YaVoTO3Zo5u2TOJdAlzaWFVmkhszenuIEA9EDEdENA7Sps7U+rgEeFefh0U9xNPZGNq3pLtyNVwrgtOiMOTbqdqguVs1AxERjTt71VljTyKrwToIUJnaiiNFZCWrMdLacPpszCyU9LG5Gn5gBKeJaVaH7EBknH2IfLtXu/eJiMZGytQZgBsYiIYbQ9GYUNWJxYpekTP4lDGYhh2Goh6i8C02ZeZMoUUYiIhorHmmzoIAX8lySLR27CkaA7+q6NGlCv7VCB7QCDq+/qFGR7Wz3J7L7olozCU2bISz6gxAYBiKhh1D0YgrVvWRCPDPRlBASu+Qb4UZAxERkZ+9HN9al79Q2IqfZzMi6hVOn40oVc0Xy/pGUfynMfVA5PYO2f1DdjhybwEGIiIiALFSkWgsHH1VRNz1aTRkWCkaQaWS7ixV8FERPNSeLvNWicKvabU7NQMREVE6VQCCPVmPg9aOoWjELJT19xX4qBHMwcQrQr4wlJgmsz8GBiIiogSnyTp8qJLVcKh3OH02IlQ1t1jR1xrgi8Y0A1Hb5fbRffsWTuM1ERF5aTMcMRSNAFaKRsDCgs4Vq/iIAc4TqzrknTILv8ZwuoyIqCuJhiGBvWdRuc/DoXXAUDTkikV9CAw+LsCRnfQOcbqMiGjt1HmH02ejgdNnQ0pVZbGkL4XBDUZwZNru1NHlOjhdRkS0jgT7sx4CrR0rRUNIVXPFCt4lgsuMAWAHIXdTRm1+HGgGH06XERH1jigKWY+B1o6haMjs2aObihV8xAguiE2PeXaoBtByd2qAgYiIqCcUR2U9BFo7hqIhsrSk0wcDfMoAD2l5uY7w81tNl0UfJyKitVPB3bIeA60dQ9GQuK2id1up4XNGcFJafhQrLQAAIABJREFUGDJW+IkCEKfLiIh6w1psFrsPARCwUjQKGIqGwL6KnpBTfN4IjnavX2bsJfhh/xB3pyYi6oMwFQkAIwxFo4CrzwbcYlUflFN8MxGIjBOIAH//EAMREdG6iFXjFUdnOhjqCYaiAbZQ1sdJgC8Zg5nGBV3DMGRPnQFo2VDN5fZERD0UHmttKjhl717dnMl4qGcYigbUYkmfbYDrjMEm2NWhFg3VvLo9EVEfWT2bAmw+bBLnZDsgWiuGogGjqrJY0dcag/caAyMp1SF3Q0Y2VBMR9YE0bxTOcVZxfgYjoh5iKBogqpovVnGVAV6XtuTevqBrbAqN/UNEROsmdnx1bqOPi+B8VeXRd4gxFA0IVc0XK/iYAZ7dKhClNlRbz8VARES0PtzDq2jsmHuPahUn9HdE1EsMRQNAVU2xgvcbwRPXEojYUE1E1CdivcHq9czh0VkOi9aGoShjqirFCt5lBE9PDUTGmSJLCURERNQHaX1F9ePzY7MZFPUCQ1HGFit4oxE83xeIogbrWPBhICIiykRqX5Fai16AB5b365n9Hx31AkNRhoplvTwnuDwtEKVtysgl90RE2RH7jqeFwQCvzGZktFY8pWakWNbni+DdHQUi65YrzIiIsqPhpT00uq9AED4WBPXHggBAgPvNzMgPMxomrRIrRRkolvUSgIGIiGjYNPaEQ3wKzV6FJgIEwmrRMOKptc8WK/oEUVwTbczIQERENFwa1SKNV4w0rBoF9WqR6iGcVCjIT7McK3WHlaI+WqzoI0TxMV8gSlzY1bplICIiGkASrxgBVsO1QNTg8oxGRqvEU2yfzBf1wXmDLxiDzdFu1PZV7hurzBiIiIgGXttqUQAEiuAQcPzclPwiy7FS51gp6oN9FT0xb/BZIymByF69EP7BQERENATSqkX1Y7vJKd7DS38MD4aidXbrss7kFJ8SwSSi6bK0QOQsu4f9OBERDQy74bpxx2qDiI7nRvCwpSU8N5NBUtcYitaRquY21fBxEdwrEYTcHiIGIiKi4eRUi6LjeON4bnBFcb8em9n4qGMMReuoWMWbDfDwWBiywxHAQERENKTSqkXqLqARbMkF+JCq5jIaKnWIoWidLJT0IgO8LLHsvkUgAgMREdFwsqpFgua+RdZ+dA8q78eLMx4ltcFT7zoolfT+KviWMdhkhyLfpTsSy/DBQERENEzclWj2LtfRDtfh7UGt4f6FgtyS1VipNVaKemxhQecCwSeMYBOcKpHYlSEGIiKikeJel7JRNWoe8zdIDv+kqhMZDpNaYCjqIVWdkAlcawR3j1aa+TZntF8sDERERMMtduwWJxwh8Uvx/Zf24/X9HyV1gqGohxYr+FsDPETcIBSFo7CcajdUMxAREY0Ou+laoqZrxM8FAC4vL+kzMhoitcBTcY8slvRiEfyLMdaUmWndWG1fPJCIiIZbo7co/MPuMVJYvUX1/qJDAM4vTMv1WY2Xkng67oH5qt49H+AnxmAyrbFaUgIRwFBERDQqvMEougQImheM1fplQG6vKR48NyM/zG7EZOP02RqpqskDHxLBJKzyqNtYDSsQcek9EdFoc6fR7F+IrS1aDs8B/7m0pPfIbqRkYyhao8Uq/kwU5/j6iNhYTUQ0XtxZgMYvwk5/UWMmweDIQPC55WWdyWbEZONpeQ32VfSEnOImY7Cx8UOe0kfk9g8xEBERja60/iL1718EVXy9Oo2HHydyV0ZDJrBStGq3qG7IKf7ZCDZG+xHFps6AWNkUYCAiIhoXsRXGvpkDe3Vy/fzxkOklfFhVeV7OEP/xV2l7Ba8Rwf1jGzHaocfpI2IQIiIaL75rozXaJ9TpPzVAzuDC6jLelsFQKcRT9SosVPQso/iWMTDu8vvohzwWhthHREQ0lqLpsui+PZ0GBQI0V6gFQbg6rYaXbS/IFdmMeLyxUtQlVZ0Q4B+NwNhVoti0GeKrzBiIiIjGU1rjdfQLs0G8WmQEMDm8vbykl2Qz4vHGUNSlxSouM8BJ7rRZ9Ka+ShEYiIiIxlXiMiDhbWJFWvyX7PeXqvroTAY8xniq7kKxqEfA4OfRJo32ajNOmxERUSuJFWlIbu5oT6Op4k4J8LDZWflmZoMeM6wUdUEN3mJv0pg2bcbrmhERkSuxIg3OL9HJc8smFXymWtWTMxv0mOHpukOLFX2g1JurE5fxMGG0dDdsBBiIiIgorts9jALFPglwZqEgezMa8thgpagDqpqD4t3Gk+ZF6ksr3V2riYiIWrFnE8S9jTdfH6k5/KuqTmQ43LHAUNSBxSqeaAT38wYiIN44B3DajIiIUnkvCG63YWii6RoCPKC6jDf3e6zjhqftNlTVlCv4sRic6GuuhhOQOG1GRESd6HQPo0ABjfYwUjxu+4x8OpsRjz5WitooVXEBBCf6wk+jSQ6cNiMiou50uoeRvfO1AT68tKS7MhnwGGAoakFVDQK82jvPG+4v0UxEnDYjIqLupAUjdw8jKxxN14BrVHVDNiMebQxFLRQreKwY3De1uRqsEhER0dr4NndMW6ofXnz89EoVb89mtKONp/IUqporV/AjMTgxbQl+o6cI7CUiIqK1SVuqH90PnGukSYBHzc7K57Ib8ehhpShFqYpLGr1E8FeJAGfVGQMRERGtkrvxb2xFGpIzFhC8a7fqxr4PdIQxFHnMz+sWKP4q8QOIZi9RVNYEWG4jIqLechuvff1FEBw7s4QXZTvS0cJQ5JHfgBeK4KjUKpEVhjhtRkREveK9eCw8fa3NHqNXlct6VBZjHUUMRY75ed0G4C9bVokAloeIiGhdJK6RZocjTQSjwyTPputeYShy5DfgzxsXfQWrRERE1H/e/iKrfcP5pf2pxSV9SCYDHTEMRZa9e3UzgOeySkRERIPC7S+yl+xH/UU54EpVzWc70uHHUGSZ2IKLRFBglYiIiLKWtn9R+K57Adn7Vpbw3L4PcsTwlB5SVSlV8GNjcFK0FxH3JSIioqw19i8K9y1SbT4WBLG9i5YnDI6bnJRyZoMdcqwUhRYrOAfASQAaJUrAvy8RAxEREfWdPXUGT9M1ML1Sw2UZj3KoMRSFjOBSe0t1e2t19xpnROMk+q10vd6IqLV2TdfR54Tnrufv2aObMhjmSGAoQthgrXi0lbab87Qp1zhjlYhG0WpCi3bw1u33ZFgi8ostz7f6Xa3z19zkNC7KdJBDjKEIwMRmPFwEh7sN1gCcRMRiEY2WdkEkFm7SwksHb6mVIqSHJoYkoqbEL+Lh+cpbLTJ4sarydLUKDEUAxOAJdnXIrgYpklUiomHWNgR5Ao8dYFoFpI7enOfxhqYux000DmLhJ3oMnmqR4sTKfpyT1TiH2djvabB7t26UAI+FQSP92FNndhCyS5ZEwyQtSGjjD+cx53H1foL33YRWLxdxvz466LvBSOLP4/59+JqksRS+LgKEryU7HNXwFAA3ZDvA4TP2laLpaZwlgikg3kuE2AMZDY5oDdIqK3alB4q2lZ/ArhoFiFd2OhmH9T0bzxE+T2A9f8vKUptKEitINC7aVYsaDxg8nps5dm/s/8FU8IDG1Jhn6iwqILHBmoZF2rRYlCTcSpD7MQnvKNA86mo9xyS+T5dBJPb60eZrS9X6vta0dVRKalSUfJUk6+Rg/935WqWxYM9mRJWi+u22yn6cDeBLWQ1tGDEUGTzAmjlrO3VGNKi8YcidAnOCkC8EBfbXOEnIV3XqdP4sKu83Hpb414sVeBpBKbwfIOU1KPGAZAch1eRjRCMlOlch/jJsBKMATwJDUVfG+nAR7mK9YAzmJNzB2kh4CwCmWaLkho00iDqqCvmCkBWCoueIBSjP1wOoKDAPoKSKsgClACgLUFbFXQLkIOFlmAKYIIccFJMiOAKKIwAcIajfQrDRfinZryvfa03silFUGXJXhErK/ZTvQzTM7NetPR0eoLG7NYIAi7NTOFJEPEcK8hnrSlGxiGMkhznAqRLBOvASDahWVRs7ANkVIbUqL0CzEuQEo9sB3KwBbobgZlH8JJfDzVu3SrE341bZvx/HBIIzBDhDgTON4v4KbBIrpMUuxqzNylKjoTScaqt/UjzosXpEYyX8eY5+4bH22NuxtISjAfxflsMbJmMdipDHvWL9RBHrN1D2E9Gg6ToMRUEo+hwrCIWft6LAf2mA6w1w/dQUfiAitfUaf/hb6y/Dt4/Xx6ITy8s4KZB6SBLBGaI4AQKJxh8d7NMCUuD7RabRjARv7xFf0zT03Cm06Gc+PIEFgtPAUNSxsQ5FCszGHmAPEQ2wbsKQ/fkBvEHoVlV8WgXX1+7C17Zvl1+v6+DbEJEVAD8I394LAKWSbkUepxrgbBhcZIDj3Km1xqV40OyNAsIepLTqEcMRjYDGLwiI5f76NHOzUgQjOBXAdVmNc9iMdSgSxWzssh5o9i4wINGg6DQMNQ6Q1sfspeqq+K0C/4YaPjg9ja+JiLugbKCEQe2rAL6qqq+vHMDpUsPFYvBUUWy3q0ax+9HrN/BUjxiOaFQ1fpjjj6nitCyGM6zGOhQpUPAlHh4XaVAkAlGLyhBgTZFFzZf1+98S4IO1FVxbKMiBdR/0Ogin3G4EcKOqvnRpCefVBBcbg8eLYkvjIs5RMEK8epToMm0RjhiMaKhFixKa02q/m+2AhstYhyLRcPrs/2/v3IMkq6s7/j2/HhaRne6+3bMDkmzkEQzJiiUqIAbQKCgUpUbUFZBgaYg8TNREjTEPseIjvoKSaKRQQxFfBLMQNEJUUHTBqihlNJS6YFGsrHGXnZme2V0Iuzt9fyd/dN87v3v7d/sx9PTtx/dT1XMffXf7zMyd8/vec87v/NI1RVnnCBkQWdGhdmkyNzKkiroCN9SBj2woyv0DMnsgNFNttwO4ffduXT91KF6uFhdDcLYICu6SB+qIpE7iKBJDjBqRkcOZnWlXDqO3qqoqnIHWHZMtiiRVUxS/MWBDCHHI7C3kRoHc80iIoYNQfFYtPhQE8ouBGZ0Ts7PyKIAvAPjCI4/qEVPL+GMxeLM0WgEkhE4ncRSFlphSI6NCYrYmnPs6qYoKO3fiMAD/N2j7RpFJX+YjFkVxPREhOZFeqiJdL6RopsccMdTsRQJrsd8C19SncGy5JFdOgiBKc8R6eaQayN+IxVMt8G5rsdj82TSWK2nux4VU6vzMNSEsE6KJy4eQUcI3jE1NoThwQ0aUyRZFmhEp8kDBRNYSX+1Q+uXOrIoHeEVogX84aHBMMC1vnXmy/O+gbR82gkCWqiV5r4Y4WkO8y1rMR8IoSxxZT2oy3cyS4ogMK5nDUzRL80kURd0y2aIoK31GyABJR4c0NUB7IxmNgfx7Wsezg2l5y+x62ZWL8UNMtSp7KxX54MH9ONpavM1a7HLFUSyQon/giRb5okYUR2TksJjO24RRYdJF0aF5m0Aml5Z0mUf8RCO2RSJVNm8VbyhP44wgkB/nYPpIceSR8lg1kKsf24djwxB/Yi1+6abVsl5IbZlSI6OKBZbytmFUmGxRpN13+aQTJP0kKzrkbhP1RI3IkKrFtaL4raAo1w97n6FhY+NGeXymIp94bB+eZi3eay0Oxqk066TQgERKLR25iy+hTyBDQqdbcW8JvxyIIWPAZIsiYHveBpDJI6uY2o1MAMnokFr8RCxOLZfkilJJaoO2eZzYuFEerwby7tDgRKv4ptVEFK5tSi0dNWI6jeSJ797T1oNdx4scGIhBY8BEiyKRpCiKbzA6ObJGdEyXtUaHoBbX7p3GyaWS/CAns8eSDUV5oFLCS1Sx2Sp+ZTuk0Rg1IsOMRwwBAKSHjAiZcFGkinjaMn0aWWtaZjOlttFA60QslhDiVeWSXLFR5PF8rB5vRESrZfmyPYgT1OJqaxGmU2rpqFHLNnqbToTkha5sEv2KGlAU9cBEiyLRZqTISVnE+M4Rsgp8BdVuuiwaYKN0WTyzLMQzy2XZko/Vk8WGDbKvGsjbYHGStbgnTql5okbpWiOm08hQEQmk5n0ZNhZZJl0y0aKoPoXtPuFDn0b6Rdvp9p73msXU7y9P4/mT2IAxbyoVua9Sxpmh4nJr8bj6okaedCfTaSR33PvRPVfHLfkYNJpMdEtCVZ2ar2G/GBSMAYwBjDS2QGPfXSqADRxJL3RTUK3NNv3N6eE1WGwul+XOXAwmCebn9QRM4YtGcJLrC+JXlKuQZEd810/QZ5C1IvIvbvo9WhDaEfL3V0pyQl42jiITHSkSkTrgTFXMiBrxoY/0StvlOjz1Q6p4cBk4jYJoeJiZkW2LJZymIT6aqDNyZ6h5irBZZ0QGiltPlE7fKm7Ow6RRZqJFEQCo4n/Sykc1Vazm5GgJ6YRXEHWoHyoITttQlAfysZhkcbzIgWpF3mGBs63FznSNUVY6jXVGZC1xo0Txjuees8LUWa9MvCgSxVeBlYhQy7R8OjPSA5mCCElBFDmt0OKmpWm8aHpa5nIxmHTFTFnuOKSAZ8Di1ri+SJPiB2CdERkwivQzvSvCH6gWcW8udo0wEy+KVPFVKLQlWgRQEJGe6EYQuSk0VXwwKOLCY0T252Iw6YliUeaDMl4RApdbi4OaSqdl9p1iOo30kcwoUSpKGVq8U0R4x/UIywAB7F7Q7xmD09xCa7fYGlFhZfN6Fk+SNL0IIqsIEeKKclk+nYux5AlTq+nvWoNbjGBDugjbAFDHZ7AAm/SLltYemvQ3cWd2xd1BEWdSFPXOxEeKAACKW7utKyIkTUdBhIQgOmgtXkZBNNpUKnJPQXGKWvykbZ0RWu8FpPYJ6QZvrzNn373XLPB2CqLVQVEEwAC3AsnUBuIToCAimXQliKLBsrEA6e9XSnJbDqaSPhMEsh0WzwsVtycWlXVridw0GjyDGX0L6YIWP9PcUV2Zcea8bpwpyX/lYec4wCBuk7kFvV8MnpbVr4gpNJKmp5SZxUGreAUF0fihqlMLS/h7Ebw5SqUZ46TUmteJ09MIknS+9Ccki3Z+BrYZGVp58HpMFCeWy/JQLsaOAYwUrXBrOjIUq/DoCj7VkSY9CqJlqzifgmg8EZH6TCBvUYsrrSKMmnH6CrA5M430Qic/o5JIzSssLqIgemJQFDUJFVuA1hSaxiedY9CJkQbuAJcpiIDzKyX5Wp52krVnpiKfQohzrcUet87IXR7EPc+ZaaQd3abmI+GtwDuDQL6Sg6ljBUVRkyOq+L4q7k6o8NRNGQskMtGkBXPifnEFkWLZAq+sFOU/cjOWDJRqVb6pIZ5rLR7spgAbAIURaaGrSLTzCi2uD6bx0XysHS8oipqIiFrgfb5ZIyy4JhGJQUuTDistiFTx6kpRvpqLoSQ3ZmZk27oCTlWL7yaKr52UWaeZaRRHk0uPqXmoYmulhCs426w/UBQ5zFbwDSjuRerGi/O2QOYTHhl/vFNimw5LXEfVcFaXBEW5NSdTSc4Ui7JQKeNsq7i+ZWZarIxaB7mE5qZ/mThaoobtBFHjvZ9PGbxSRA7kY/H4QVHkICIKxfvSOf9o0PNFi+i4JoN2ggiaXLrDhvjLSkluzMdSMiyIyMFqGX8IxVVWAU0VX/uijKwzmkxayjUyIokJQWRx7wGD07lEUH/hRNAUqmoWFvEjEZxoDCCp6fnSoVMtGT98g1S6hshZ3PUz5Wm8kaFs4jJf0yvF4BNGIInu101f4nbARsq/RNDPjCfedFm0TYmheGaj4uv1A3jV7Kw8OnCDxxxGilKIiFXgA91Ei9z6ADL+pOtBgMZg5jTs+0Z5GldSEJE0MxX5J2vxWmtRz5qZlogegem0cccXHWpXp+jUEH0+KOJlFERrA589PKhqYaGGn4nB8YwWTTYtM83S4ewVR3WfreOMSkX25GQqGQEWFvQcGNwsgsMiv+JGjtLNYbP8C/3NaNM2OoRknWJCRFt8JCjhL0TE5mH3JMBIkQcRCVXwnuhJzo0WpWeiMVo0vvhmmsWCKPm0vzNcxnkURKQT1ar8JyxeZBWLboPHdKNH66kpSUeN6HNGj26iQ26doiOI6qp4S6Usf05BtLbweSMDVZX5Gm4zBue4kaLoyc7N+3P16/Ejq7DaOk6s+eT2GCzOLJflh/lYSkaRxUV9agh8WgRnt0SLspYU4hIhI0tawPqiQ/GsZ1kRR82Hru2h4gKuZzYY+OfUhlpNf8MCPxGD9e56aJETMilxBNBBjQPdzjSzCmsVL2dzRrIaVFVqNbweBleLoCTGKb6O/ArgLcIGmFIbBXzRvKyUfLp+qHn+ywjxxiCQpYEZPeEwfdaGSkUeBvDOxE2qTr6XabSxRp0d7yyQEH9FQURWi4hotSr/rCE2qeJr1iIxbT8uwgYSqRVNDZ7xJUypDQ2+34Xvd2dTY4jzO95vLS4vT+M1FESDhc8WHVBVU1vEtyE4M1F07UmjtXuKI6OBb5BR57xTWH1baRovZX6f9ANVlYUlXCyCa0QQuFP2gZVty3T9jJQaQB+UB97IUPNLS6oMrSKp+aC9zYbYXKnIfYOxmrgwUtQBEbFhHZeqYn+6XX+iEBIAUgMqGS28zdMQO6oVQQQ8bIBLKIhIvxARnQnkc+FB/I61uMWNGsXN+qKLdaUA1xdBii9j5GhgeCNDQFrstO4nr6lb4EP7H8dzKIjyg88SXTJX03eI4MPp2iIDNJ7SPPVFAJ/WRoWu64gsluuKM1j0SNaKZq3Rq1HAJ0Uw47b/SLw0VW8EtI0cAfRH/aabyFC0icsuUoXUqoBafMcWcGV1Wn46MOOJF/6JdImqTi0s4R4BTnHTaGlh1Km/CBlOvMWP0RMdnI7VFm8NSnJNfpaSSWHnPt2wLsQ1AC5MFGA7vqWjOILfB9EvrZ6s6Fvah0QbnxgC4nqi3ap4e7mIz7Pp63DAP40eaM5Gu1cMNiSiRcbTnp/1RSODN23mOq+VFMaW8jReTedFBsn8vJ4qBbxPBGf5pu4D3YkjRo+eGO2iQr79LDHU3FcoPgXFX5fLsrjmxpOu4Z9Dj+yu6RlG8C0jmEqIovTTG0BhNAJ004+oKYoetHU8mw0aSV7ML+kLBfiAAKd2JY7gKchO76egn0qSGRWKv/gLqV0xFP0/zuvOEHjXTEl+sMbmk1XAP4FVMFfTy43gU5KqL4qFkCOMWF803LRLmzl1RAc0xHODQH6Un6WENOqN5pfwUiN4vwie7qs1AlrFkVtr5GwokFK0K0xvFxXyiaEWQQR8S+t4T6UiW9fIfNIHJvC27w8LNb0WgsvS0SIWXo8ObZuoqdNiP8Rl5bJcl5+lhCRRVTO/iAvE4G+N4Li0OIJ7rHBC1m0EURuBFP1/40hPQih1rNr4mWnzZ5whhu5CiPcEgXxnDcwnfWZMb/O1R1XXzS/iTmNwupHswmsKo+GkUx1RNP0eiluL03gF64jIMKKqh8zvwesN8G4R/FqmOGpeL/BEj9L7vmMPo+jHOrUo8AmfluNUVCjdiTr6HLX4LhRXBYHc1S/7ydozgrf18PDII3pE4RD8QAw2JgqvU6k0CqPhI92hOmP6fe2gwabZ9bIrP0sJ6cyOHXrYYYfj9WJwuQAnZkWN4v0osgG/QHI28UE3LmuY/Fo3PZrSosd3rkUIOW8nRFDjZF2Bf0eIT5TL+C4fpkaPIbqFR5Pdi3qSAe4ygmIiWkRhNLRkps0s4un3tiGKLqyU5MbcDCWkR5o9jk4Tg8sg2CyCJ2UKI6Dhl9oJJN8x4BdOXdBPn7eaxpRdi6DmTkIISVIERdvmaweA6+pT+OyGw2Vn75aRYYHDch9YWNDnqcE3jODwuOiawmgo4fR7MiksLWkQKi6B4DIR/Hbse1J+qJNAcjaJg34JpbXAJ37avedGg4DuhBAAheJ2G+LaIMBtIhL27zsgeTEM9+9YMLeoLxDB7QZ4UkIYmZUfMoVR/njC3cmlWxoRovmCYNP0tOzO0VRC+oKqytwiTjeCy4zgVSI41CeMWrZREbErdtqIpJbzaaTtYVd4n1A6FUqnrvFFhqJHH7dGCMj0F79QwZeMxXXlsjzU47dAhhwOx31kYUFfAoOviME6t/usMStPYBRG+dFN12qrAEJsLpfly7kZSsgasXevVpdDvA6C1whwsgiko0CKvujKfhxJAvxCyXuivwNONwLJK4Dc4zYiyN1Csc0CW4zi5lIJ/80I8vjCobjPzC3qywywRQymEsIoI5Xm5uspjNaObtNmocW/VkpyQS5GEjJAdu3T2ak6zhXBeQK8RARFoEP0CKlzcb7JST25H9JtFGmVaMZBwhZXADWP0yLI3Xe2P1TFzbaAm2em5Wd9NJsMMRyG14CFBd0Mgy+JgelVGAEUR2tBl2mz3QbYVCzKfI6mEjJwVPWQ+SWcbhoC6TwITkj4poyHN0mLHkd4pCNJ6dBKP9JnknpD3ZOavN4ngNx9VSwCuNtafNsAtwSBbF+FiWTE4fC7RszV9CIjuGE1ESOAwqifdJs2U8X5QVFuyc9SQoaDR5b02ILiPBGcK8ApEFRb/FSbKLfPfyVEk0s3iaiMf+f7p+lZaW3E0A4BtlrFVljcHQT4qYjYLqwhYwyH3jVkYUHPgcEWETzZLb6OGjy6ize2C1GT1dNt2kwtvlguyWtzMZKQIUZVZXERG63gJAFOEoNnQXASFL/ue6DzTeHvxZeJtAqb9valjuMvieNHAdyvgnuh2IoQWysVebj7TyGTAofdNWZ+Xk/RAr5WEMy4fYxa1kqL9kFh1C96WOx1T0Fw/PS0zOVjKSGjx859umFd2BBKCjxLBJsAHAUg8EWTWuiy3iirbqjldOO9hwHcr8A2ANuMYtvyMrbNzGAni6NJN3DIHQBzc/o0mcLXjeBod520zGZq7hYr75Pe6HKxV4SKP6uW5GP5WUrI+LBjhx42PY0jrcVRavAUFRwFxVOM4CjR5jFwGIACBAUoCgIU0HiZ5rYgQEGBZQUWACwIUGvu19RiwQC10DS2YvGrAwfwwJFHymP5fedkHOBQOyB279aCQc8iAAAFUklEQVQjC4fgdgiemV4rLbE2EeuM+kLbxV7hNGm0uKdcxAtEpJ6bsYQQQoYCk7cBk8LsrOyCxfNVcadt1LDAOi93/a1EIXBGkSDJJvFziuqI0FpTpIp9ovgDCiJCCCEARdFAqVZlb7WMc9Ti75wZT9GyErBAIqqR3gJIFAmTVrLqiHyiUxVvYkdaQgghEUzI5MRcTc8zgs+JQZBIozGdtmo6CaK4jkgBWNxYKuIiFl8SQgiJ4LCaI4uLenQI3GQEJ4uvzkjRnI6WPW3fdzyJdIwQYSUyZy0eEsWzy2VZzMdaQgghwwjTZzkSBLJ9sYwzrOKTvjqjbtJpANNpPQkixSMGeDEFESGEkDSMMQwJczW9wBh8RgSHd0ynebaA/3jcaSuIkJxppoo9GuL5QSA/zsFUQgghQ86EDaHDzfy8niAF/JsINrWk09B4uV2ws2qNgPEXR75W/h0E0X4LvLhSlK0DNpUQQsiIwPTZEDEzI9uWD+BUq/hcSzrNmZ2Wnk2V6MPTZJxTaonoENqkzFYEUWiBzRREhBBC2jHm8YTRRFVlvoZLxeAfjcGh3nSaZkSNML4ptaw1jtrVEDVfrwtK8i+DtpcQQshoMSbD5XhSq+kzrOCzRvCcFlGUqjXypdK8K1WP6G88a+Vrt/hc/ILoT4OSfHzQ9hJCCBk9RnSInBxUdaq2hDdD8F4RPLklagSn1giO6BkTcdQxOoRkhMgRQ8sK/FFQlBsGbDIhhJARZUSGRrK0pMfULa41Bi/OjBppe3GUtWL1MAqkLDEUvZc4RkIMwSoWEeL8IJC7BmUvIYSQ0WcIh0OSharKwhIuFsHHRVBJRIsyxFGv3bDzFEi+4vC0+HEjQlG6LDpuFlY/WBect6Eo9w/IbEIIIWMCRdEIsmufzk6F+JgAF6XTaUAHcdRu38Nai6SsWXJZYiiefSfJ6FAzQnRTAbiiVJLa2lpNCCFkHKEoGmFqNT1XBdeI4Ph0Kg3wLBcCtAgiZ9P6fhtWI5Y6tQlwhZB77E2dIRZCUMVeVbwpKOILXMuMEELIaqEoGnFUdV1tCVdAcJUAQaY4al7vFmW3CCCfIOpSJK3K9pYdf4QISDZkTEWItsLikiCQ7WtkJiGEkAmBomhM2LNHK8sWV4rgDQIcE4uiVM0RkIwexUGkdNTIF0VKvZdx2IJmHrQKIzc6JG5UCC1iaE4VVwUlXCciYQcTCCGEkI5QFI0ZqmoW9uD3BLhUgPNFsC5LGMVbXYkgARkiqeWg95snSxwlhFC0L6leRNELeFwVV2sdH65WZW+PJhBCCCGZUBSNMXv3anU5xMUQXCqCp8dT9VPT9iUlhqKqHE0Lo3bRoy7xRYayhFC0bYohtYobUMffVKvyyydgAiGEEOKFomgCUFVZ2IuTJcSlYnAhBOu9oihDJEWRpOikG/Hp5gZquT5Ki4mzj0xBtKCK6+uC62ZL8vMuPo4QQghZFRRFE8bu3bpepvBSY3C2AGdBsNEVSFmdsBP78RcH35wvzzXuZYmFXVNdqqG4W4Fr9xSx5RiR/V19c4QQQsgTgKJoglFVmduL35wKcZYanCXACyEop2emZYmj1X9ucxt/AVRhBfh+aHGHKG6qVOS+J/5JhBBCSPdQFJEYVS0s7MWzEOIsMXihKDbB4CltGz22qTPyTbmPDxspuW0WuMNa3GEUd1Uqsqcv3wghhBCyCiiKSFt27dLD163DsVZwnADHqeA4AxwH4DgINgKYQrJuO0YBC2AHFNtV8JABHgqBh0yI7fU6fj47K7sG/f0QQgghWVAUkb6hqgLANF8CwIpIPV+rCCGEkO74f1IClaSccby6AAAAAElFTkSuQmCC\",\"e\":1},{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":2,\"nm\":\"paper_right\",\"refId\":\"image_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[506,120,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[49,52,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.45,0.45,0.45],\"y\":[1,1,1]},\"o\":{\"x\":[0.55,0.55,0.55],\"y\":[0,0,0]},\"t\":0,\"s\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,8.5]},\"o\":{\"x\":[0.55,0.55,0.55],\"y\":[0,0,0]},\"t\":15,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":30,\"s\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":61,\"s\":[100,100,100]},{\"t\":90.0000036657751,\"s\":[80,80,100]}],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":2,\"nm\":\"storage\",\"refId\":\"image_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[30]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":15,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":61,\"s\":[0]},{\"t\":90.0000036657751,\"s\":[30]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[229,327,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[23,23,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":0,\"s\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":15,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":30,\"s\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":61,\"s\":[100,100,100]},{\"t\":82.0000033399285,\"s\":[80,80,100]}],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":2,\"nm\":\"safari\",\"refId\":\"image_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":15,\"s\":[104]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":61,\"s\":[-127]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":75,\"s\":[-184]},{\"t\":90.0000036657751,\"s\":[0]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[348,390,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[18,18,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":2,\"nm\":\"paper_left\",\"refId\":\"image_3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[206,173.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[49,52.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.43,0.43,0.43],\"y\":[1,1,1]},\"o\":{\"x\":[0.57,0.57,0.57],\"y\":[0,0,0]},\"t\":0,\"s\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0.57,0.57,0.57],\"y\":[0,0,0]},\"t\":30,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":74,\"s\":[100,100,100]},{\"t\":90.0000036657751,\"s\":[80,80,100]}],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":2,\"nm\":\"hole_right_big\",\"refId\":\"image_4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[549,281,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[22,22,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":0,\"s\":[80,80,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":30,\"s\":[100,100,100]},{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":60,\"s\":[100,100,100]},{\"t\":90.0000036657751,\"s\":[80,80,100]}],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":2,\"nm\":\"hole_right_medium\",\"refId\":\"image_5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[574,324,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[11,11,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":15,\"s\":[80,80,100]},{\"t\":30.0000012219251,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":2,\"nm\":\"hole_right_small\",\"refId\":\"image_6\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[658,298,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[7,7,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833,0.833,0.833],\"y\":[0.833,0.833,0.833]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0.167,0.167,0.167]},\"t\":45,\"s\":[80,80,100]},{\"t\":75.0000030548126,\"s\":[100,100,100]}],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":2,\"nm\":\"hole_bottom_small\",\"refId\":\"image_7\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":16,\"s\":[1]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":30,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":60,\"s\":[100]},{\"t\":90.0000036657751,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[426,460,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[6,6,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":2,\"nm\":\"hole_bottom_medium\",\"refId\":\"image_8\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":15,\"s\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":75,\"s\":[100]},{\"t\":90.0000036657751,\"s\":[0]}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[336,440,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[9,9,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":2,\"nm\":\"hole_left_medium\",\"refId\":\"image_9\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[30.5,279.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[21.5,21.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":2,\"nm\":\"hole_left_big\",\"refId\":\"image_10\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[29,281.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[29,29.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":2,\"nm\":\"404\",\"refId\":\"image_11\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[375,218,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[186,119,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":2,\"nm\":\"hole_1\",\"refId\":\"image_12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[319.5,221.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[178.5,129.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":14,\"ty\":2,\"nm\":\"hole_2\",\"refId\":\"image_13\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[309.5,222.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[222.5,158.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":15,\"ty\":2,\"nm\":\"hole_3\",\"refId\":\"image_14\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[305.5,218.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[290.5,218.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":0,\"nm\":\"lottie-ex\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[332,232.5,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[332,232.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":664,\"h\":465,\"ip\":0,\"op\":300.00001221925,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./assets/lottiefiles/loading-circle.json":
/*!************************************************!*\
  !*** ./assets/lottiefiles/loading-circle.json ***!
  \************************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.6.5\",\"fr\":60,\"ip\":0,\"op\":90,\"w\":1024,\"h\":1024,\"nm\":\"03_Loading Animation\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Oval Copy\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.332],\"y\":[1]},\"o\":{\"x\":[0.455],\"y\":[0]},\"t\":0,\"s\":[45]},{\"t\":89,\"s\":[765]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[512,512,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[500,500],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.180391997099,0.184313997626,0.188234999776,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":60,\"ix\":5},\"lc\":2,\"lj\":2,\"bm\":0,\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Oval Copy\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tm\",\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.648],\"y\":[1]},\"o\":{\"x\":[0.522],\"y\":[0]},\"t\":0,\"s\":[88]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.812],\"y\":[0]},\"t\":45,\"s\":[75]},{\"t\":89,\"s\":[88]}],\"ix\":1},\"e\":{\"a\":0,\"k\":100,\"ix\":2},\"o\":{\"a\":0,\"k\":0,\"ix\":3},\"m\":1,\"ix\":2,\"nm\":\"Trim Paths 1\",\"mn\":\"ADBE Vector Filter - Trim\",\"hd\":false}],\"ip\":0,\"op\":90,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"Oval\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"t\":0,\"s\":[0]},{\"t\":89,\"s\":[45]}],\"ix\":10},\"p\":{\"a\":0,\"k\":[512,512,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[500,500],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.180391997099,0.184313997626,0.188234999776,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":50,\"ix\":5},\"lc\":2,\"lj\":1,\"ml\":4,\"bm\":0,\"d\":[{\"n\":\"d\",\"nm\":\"dash\",\"v\":{\"a\":0,\"k\":0,\"ix\":1}},{\"n\":\"g\",\"nm\":\"gap\",\"v\":{\"a\":0,\"k\":197,\"ix\":2}}],\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Oval\",\"np\":2,\"cix\":2,\"bm\":0,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":90,\"st\":0,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./assets/lottiefiles/success.json":
/*!*****************************************!*\
  !*** ./assets/lottiefiles/success.json ***!
  \*****************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.2.1\",\"fr\":30,\"ip\":0,\"op\":165,\"w\":218,\"h\":218,\"nm\":\"Success Screen\",\"ddd\":0,\"assets\":[],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"Shape Layer 11\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[109,109,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"hasMask\":true,\"masksProperties\":[{\"inv\":false,\"mode\":\"a\",\"pt\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":1,\"y\":0},\"n\":\"0p667_1_1_0\",\"t\":17,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.5,-12.094],[-24.5,-3.219],[-22.625,-0.911],[-20.333,-2.846],[-12.621,-6.546],[-9.486,-8.744]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.5,-12.25],[-24.5,-3.375],[-3.792,20.903],[-4.154,14.93],[-4.711,1.572],[-4.764,-4.375]],\"c\":true}]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":1,\"y\":0},\"n\":\"0p667_1_1_0\",\"t\":20,\"s\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.5,-12.25],[-24.5,-3.375],[-3.792,20.903],[-4.154,14.93],[-4.711,1.572],[-4.764,-4.375]],\"c\":true}],\"e\":[{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-12.5,-12.25],[-24.5,-3.375],[-4.625,18.125],[26.012,-14.403],[15.455,-24.928],[-5.875,-4.375]],\"c\":true}]},{\"t\":25}],\"ix\":1},\"o\":{\"a\":0,\"k\":100,\"ix\":3},\"x\":{\"a\":0,\"k\":0,\"ix\":4},\"nm\":\"Mask 1\"}],\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[18.67,-17.068],[-4.318,5.818],[-13.261,-3.068],[-16.375,-0.057],[-4.466,11.909],[21.432,-14.023]],\"c\":true},\"ix\":2},\"nm\":\"Path 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":0,\"ix\":4},\"w\":{\"a\":0,\"k\":0,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.243137255311,0.917647063732,0.06274510175,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Shape 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":17,\"op\":3617,\"st\":17,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"Main circle\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[0],\"e\":[100]},{\"t\":4}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[111.457,106.301,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-6.543,-634.699,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.203,0.203,0.333],\"y\":[0,0,0]},\"n\":[\"0_1_0p203_0\",\"0_1_0p203_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[171.238,171.238,100],\"e\":[40,40,100]},{\"i\":{\"x\":[1,1,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.694,0.694,0.333],\"y\":[0,0,0]},\"n\":[\"1_1_0p694_0\",\"1_1_0p694_0\",\"0p667_1_0p333_0\"],\"t\":16,\"s\":[40,40,100],\"e\":[100,100,100]},{\"t\":30}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[113,113],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.243137270212,0.917647123337,0.06274510175,1],\"ix\":3},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":20,\"s\":[100],\"e\":[100]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":38,\"s\":[100],\"e\":[100]},{\"t\":146}],\"ix\":4},\"w\":{\"a\":0,\"k\":3,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":4},\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":4,\"s\":[0],\"e\":[100]},{\"t\":27}],\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-8,-633],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":3600,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"Shape Layer 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":30,\"s\":[100],\"e\":[0]},{\"t\":74}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[111.457,106.301,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-6.543,-634.699,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0,0,0.167],\"y\":[0,0,0]},\"n\":[\"0_1_0_0\",\"0_1_0_0\",\"0p833_1_0p167_0\"],\"t\":30,\"s\":[100,100,100],\"e\":[186,186,100]},{\"t\":74}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[113,113],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.243137270212,0.917647123337,0.06274510175,1],\"ix\":3},\"o\":{\"a\":0,\"k\":0,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":30,\"s\":[2.5],\"e\":[0]},{\"t\":74}],\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.243137255311,0.917647063732,0.06274510175,1],\"ix\":4},\"o\":{\"a\":0,\"k\":50,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-8,-633],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":30,\"op\":3605,\"st\":5,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"Shape Layer 10\",\"sr\":1,\"ks\":{\"o\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":43,\"s\":[100],\"e\":[0]},{\"t\":123}],\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[111.457,106.301,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[-6.543,-634.699,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0,0,0.833],\"y\":[1,1,1]},\"o\":{\"x\":[0,0,0.167],\"y\":[0,0,0]},\"n\":[\"0_1_0_0\",\"0_1_0_0\",\"0p833_1_0p167_0\"],\"t\":43,\"s\":[100,100,100],\"e\":[186,186,100]},{\"t\":123}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"d\":1,\"ty\":\"el\",\"s\":{\"a\":0,\"k\":[113,113],\"ix\":2},\"p\":{\"a\":0,\"k\":[0,0],\"ix\":3},\"nm\":\"Ellipse Path 1\",\"mn\":\"ADBE Vector Shape - Ellipse\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.243137270212,0.917647123337,0.06274510175,1],\"ix\":3},\"o\":{\"a\":0,\"k\":0,\"ix\":4},\"w\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":43,\"s\":[2.5],\"e\":[0]},{\"t\":123}],\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"Stroke 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.243137270212,0.917647123337,0.058823533356,1],\"ix\":4},\"o\":{\"a\":0,\"k\":50,\"ix\":5},\"r\":1,\"nm\":\"Fill 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-8,-633],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"Transform\"}],\"nm\":\"Ellipse 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":43,\"op\":3618,\"st\":18,\"bm\":0}],\"markers\":[]}");

/***/ }),

/***/ "./components/atoms/backgroundImages/backgroundImage.jsx":
/*!***************************************************************!*\
  !*** ./components/atoms/backgroundImages/backgroundImage.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backgroundImage_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgroundImage.styles.jsx */ "./components/atoms/backgroundImages/backgroundImage.styles.jsx");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/backgroundImages/backgroundImage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BackgroundImage = ({
  children,
  className,
  width,
  height,
  size,
  radius,
  src
}) => {
  return __jsx(_backgroundImage_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: width,
    height: height,
    src: src,
    size: size,
    radius: radius,
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundImage);

/***/ }),

/***/ "./components/atoms/backgroundImages/backgroundImage.styles.jsx":
/*!**********************************************************************!*\
  !*** ./components/atoms/backgroundImages/backgroundImage.styles.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBackgroundImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "backgroundImagestyles__StyledBackgroundImage",
  componentId: "sc-1b7k81x-0"
})(["width:", ";height:", ";background-image:url(", ");background-size:", ";background-repeat:no-repeat;border-radius:", ";display:flex;"], props => !props.width ? '400px' : props.width, props => !props.height ? '250px' : props.height, props => props.src, props => props.size, props => !props.radius ? undefined : props.radius);
/* harmony default export */ __webpack_exports__["default"] = (StyledBackgroundImage);

/***/ }),

/***/ "./components/atoms/backgroundImages/index.js":
/*!****************************************************!*\
  !*** ./components/atoms/backgroundImages/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backgroundImage_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundImage.jsx */ "./components/atoms/backgroundImages/backgroundImage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _backgroundImage_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/badges/badge.jsx":
/*!*******************************************!*\
  !*** ./components/atoms/badges/badge.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _badge_styles_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./badge.styles.jsx */ "./components/atoms/badges/badge.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/badges/badge.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






const Badge = ({
  title,
  backgroundColor,
  color,
  marginTop,
  props
}) => {
  return __jsx(_badge_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    marginTop: marginTop,
    backgroundColor: backgroundColor
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: color,
    size: "12",
    weight: "semi-bold",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, title));
};

Badge.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  color: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./components/atoms/badges/badge.styles.jsx":
/*!**************************************************!*\
  !*** ./components/atoms/badges/badge.styles.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBadge = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "badgestyles__StyledBadge",
  componentId: "sc-1g1wfq6-0"
})(["display:inline-block;width:fit-content;height:auto;padding:10px 20px 10px 20px;border-radius:7px;margin-top:", ";background-color:", ";p{margin:0;}"], props => !props.marginTop ? undefined : props.marginTop, props => !props.backgroundColor ? '#ffd7d7' : props.backgroundColor);
/* harmony default export */ __webpack_exports__["default"] = (StyledBadge);

/***/ }),

/***/ "./components/atoms/badges/index.js":
/*!******************************************!*\
  !*** ./components/atoms/badges/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _badge_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./badge.jsx */ "./components/atoms/badges/badge.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _badge_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/buttons/button.jsx":
/*!*********************************************!*\
  !*** ./components/atoms/buttons/button.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.styles.jsx */ "./components/atoms/buttons/button.styles.jsx");
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons */ "./assets/icons/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/buttons/button.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Icons = {
  arrowForward: _assets_icons__WEBPACK_IMPORTED_MODULE_3__["ArrowForward"],
  backpress: _assets_icons__WEBPACK_IMPORTED_MODULE_3__["Backpress"]
};

const Button = (_ref) => {
  let {
    children,
    href,
    onClick,
    isFocus,
    variant,
    rounded,
    border,
    target,
    icon,
    width,
    height,
    iconPosition,
    iconTop,
    iconRight,
    iconLeft,
    iconBottom,
    isEqualWidth,
    isEqualHeight
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "href", "onClick", "isFocus", "variant", "rounded", "border", "target", "icon", "width", "height", "iconPosition", "iconTop", "iconRight", "iconLeft", "iconBottom", "isEqualWidth", "isEqualHeight"]);

  if (!href) return __jsx(_button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    onClick: onClick,
    variant: variant,
    isFocus: isFocus,
    rounded: rounded,
    width: width,
    height: height,
    border: border,
    isEqualWidth: isEqualWidth,
    isEqualHeight: isEqualHeight
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), children, __jsx(ButtonIcon, {
    name: icon,
    iconPosition: iconPosition,
    iconRight: iconRight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }));
  return __jsx(_button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["StyledLinkButton"], {
    href: href,
    variant: variant,
    target: target,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, children);
};

const ButtonIcon = ({
  name,
  iconPosition,
  iconRight,
  iconTop,
  iconLeft,
  iconBottom
}) => {
  if (Icons[name] === undefined) return null;
  const Icon = Icons[name];
  return __jsx(_button_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["SyledButtonIcon"], {
    iconPosition: iconPosition,
    iconTop: iconTop,
    iconRight: iconRight,
    iconLeft: iconLeft,
    iconBottom: iconBottom,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 3
    }
  }, __jsx(Icon, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  }));
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  target: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  rounded: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
Button.defaultProps = {
  children: "Text Button"
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/atoms/buttons/button.styles.jsx":
/*!****************************************************!*\
  !*** ./components/atoms/buttons/button.styles.jsx ***!
  \****************************************************/
/*! exports provided: StyledButton, StyledLinkButton, SyledButtonIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLinkButton", function() { return StyledLinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyledButtonIcon", function() { return SyledButtonIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



const isBackgroundColor = props => {
  if (!props.variant) return "#2525F0";
  let color;

  switch (props.variant) {
    case "primary":
      color = "#2525F0";
      break;

    case "secondary":
      color = "#EDEDED";
      break;

    default:
      color = "#001CF9";
      break;
  }

  return color;
};

const isHover = props => {
  let color;

  switch (props.variant) {
    case "primary":
      color = "#F7FBFF";
      break;

    case "secondary":
      color = "#001CF9";
      break;

    default:
      color = "#001CF9";
      break;
  }

  return color;
};

const isCursor = props => {
  if (props.variant == "disabled") {
    return "not-allowed";
  } else {
    return "pointer";
  }
};

const isColor = props => {
  if (props.variant == "secondary") {
    return "#1E2127";
  } else {
    return "#ffffff";
  }
};

const isPointer = props => {
  if (props.variant == "disabled") {
    return "none";
  } else {
    return "all";
  }
};

const border = props => {
  if (!props.border) return "none";

  switch (props.border) {
    case 'primary':
      return "#3838F8";
      break;

    case 'secondary':
      return "#EDEDED";

    default:
      return "none";
      break;
  }
};

const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "buttonstyles__StyledButton",
  componentId: "sc-1sm1y0z-0"
})(["position:relative;display:inline-block;padding:8px 12px 8px 12px;width:", ";height:", ";min-width:120px;border:", ";border-radius:5px;background-color:", ";cursor:", ";pointer-events:", ";text-decoration:none;transition:all 0.8s ease;white-space:nowrap;font-family:'Montserrat',sans-serif;font-style:normal;font-size:14px;font-weight:500;line-height:17px;text-align:center;color:", ";&:hover{color:", ";box-shadow:2px 10px 15px rgba(30,33,39,0.10);}&:focus{outline:none;}&:active{outline:none;}@media ", "{width:", " !important;height:", " !important;}"], props => props.width, props => props.height, props => !props.border ? 'none' : '1px solid ' + border(props), props => isBackgroundColor(props), props => isCursor(props), props => isPointer(props), props => isColor(props), props => !props.isFocus ? '#ffffff' : '#001CF9', _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualWidth, props => props.isEqualHeight);
const StyledLinkButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledButton).attrs({
  as: "a"
}).withConfig({
  displayName: "buttonstyles__StyledLinkButton",
  componentId: "sc-1sm1y0z-1"
})(["text-deocration:none;"]);
const SyledButtonIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "buttonstyles__SyledButtonIcon",
  componentId: "sc-1sm1y0z-2"
})(["position:", ";right:", ";top:", ";left:", ";bottom:", ";"], props => props.iconPosition, props => props.iconRight, props => props.iconTop, props => props.iconLeft, props => props.iconBottom);
/* harmony default export */ __webpack_exports__["default"] = (StyledButton);

/***/ }),

/***/ "./components/atoms/buttons/buttonIcons/buttonIcon.jsx":
/*!*************************************************************!*\
  !*** ./components/atoms/buttons/buttonIcons/buttonIcon.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _buttonIcon_style_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttonIcon.style.jsx */ "./components/atoms/buttons/buttonIcons/buttonIcon.style.jsx");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/buttons/buttonIcons/buttonIcon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ButtonIcon = ({
  name,
  variant,
  fill,
  outline,
  margin
}) => {
  return __jsx(_buttonIcon_style_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: variant,
    outline: outline,
    margin: margin,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: name,
    width: "0.5em",
    fill: fill,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonIcon);

/***/ }),

/***/ "./components/atoms/buttons/buttonIcons/buttonIcon.style.jsx":
/*!*******************************************************************!*\
  !*** ./components/atoms/buttons/buttonIcons/buttonIcon.style.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const backgroundColor = props => {
  switch (props.variant) {
    case 'primary':
      return "#1E2127";
      break;

    case 'secondary':
      return "#EDEDED";

    default:
      return "none";
      break;
  }
};

const StyledButtonIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "buttonIconstyle__StyledButtonIcon",
  componentId: "sc-1jecqqv-0"
})(["display:inline-flex;background:", ";width:auto;padding:10px 30px 10px 30px;border-radius:8px;border:", ";margin:", ";cursor:pointer;"], props => backgroundColor(props), props => !props.outline ? undefined : "1px solid #1E2127", props => !props.margin ? undefined : props.margin);
/* harmony default export */ __webpack_exports__["default"] = (StyledButtonIcon);

/***/ }),

/***/ "./components/atoms/buttons/buttonIcons/index.js":
/*!*******************************************************!*\
  !*** ./components/atoms/buttons/buttonIcons/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttonIcon_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonIcon.jsx */ "./components/atoms/buttons/buttonIcons/buttonIcon.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _buttonIcon_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/buttons/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/buttons/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.jsx */ "./components/atoms/buttons/button.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _button_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/containers/container.jsx":
/*!***************************************************!*\
  !*** ./components/atoms/containers/container.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.styles.jsx */ "./components/atoms/containers/container.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/containers/container.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Container = (_ref) => {
  let {
    children,
    isEqualWidth,
    isEqualHeight,
    flexDirection,
    backgroundColor,
    display,
    justifyContent,
    alignItems,
    boxSizing,
    padding,
    boxShadow,
    position,
    zIndex
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "isEqualWidth", "isEqualHeight", "flexDirection", "backgroundColor", "display", "justifyContent", "alignItems", "boxSizing", "padding", "boxShadow", "position", "zIndex"]);

  return __jsx(_container_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    flexDirection: flexDirection,
    isEqualHeight: isEqualHeight,
    isEqualWidth: isEqualWidth,
    backgroundColor: backgroundColor,
    boxSizing: boxSizing,
    padding: padding,
    boxShadow: boxShadow,
    position: position,
    zIndex: zIndex
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }), children);
};

Container.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"].isRequired,
  display: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  boxSizing: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  padding: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/atoms/containers/container.styles.jsx":
/*!**********************************************************!*\
  !*** ./components/atoms/containers/container.styles.jsx ***!
  \**********************************************************/
/*! exports provided: StyledContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



const isDisplayProps = props => {
  if (!props.display) return "flex";

  switch (props.display) {
    case "flex":
      return "flex";
      break;

    case "inline-flex":
      return "inline-flex";
      break;

    default:
      return "flex";
      break;
  }
};

const flexDirection = props => {
  switch (props.flexDirection) {
    case "column":
      return "column";
      break;

    case "column-reverse":
      return "column-reverse";
      break;

    case "row":
      return "row";
      break;

    case "row-reverse":
      return "row-reverse";
      break;

    case "inherit":
      return "initial";
      break;

    default:
      return "row";
      break;
  }
};

const StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "containerstyles__StyledContainer",
  componentId: "ygznhw-0"
})(["display:", ";width:", ";height:", ";background:", ";flex-direction:", ";justify-content:", ";align-items:", ";box-sizing:", ";padding:", ";box-shadow:", ";position:", ";z-index:", ";&.hero{@media ", "{}@media ", "{padding:0 50px 0 50px;}@media ", "{flex-direction:column-reverse;padding:50px 25px 0 25px;}}&.section{@media ", "{}@media ", "{padding:25px;}@media ", "{padding:25px;}}"], props => isDisplayProps(props), props => props.isEqualWidth, props => props.isEqualHeight, props => !props.backgroundColor ? 'none' : props.backgroundColor, props => flexDirection(props), props => props.justifyContent, props => props.alignItems, props => props.boxSizing, props => props.padding, props => props.boxShadow, props => props.position, props => !props.zIndex ? undefined : props.zIndex, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptopL, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptop, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptopL, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptop, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet);
/* harmony default export */ __webpack_exports__["default"] = (StyledContainer);

/***/ }),

/***/ "./components/atoms/containers/index.js":
/*!**********************************************!*\
  !*** ./components/atoms/containers/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _container_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.jsx */ "./components/atoms/containers/container.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _container_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/icons/icon.jsx":
/*!*****************************************!*\
  !*** ./components/atoms/icons/icon.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons */ "./assets/icons/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/icons/icon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Icons = {
  backpress: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["Backpress"],
  search: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["SearchIcon"],
  arrowStraight: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["ArrowStraight"],
  react: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["ReactIcon"],
  vuejs: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["VueIcon"],
  nextjs: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["NextJsIcon"],
  arrowBack: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IosArrowBack"],
  arrowForward: _assets_icons__WEBPACK_IMPORTED_MODULE_2__["IosArrowForward"]
};

const BasedIcon = (_ref) => {
  let {
    name,
    width,
    height,
    position,
    left,
    top,
    right,
    bottom,
    fill
  } = _ref,
      props = _objectWithoutProperties(_ref, ["name", "width", "height", "position", "left", "top", "right", "bottom", "fill"]);

  if (Icons[name] === undefined) return null;
  const Icon = Icons[name];
  return __jsx(Icon, _extends({
    width: width,
    fill: fill,
    style: {
      position: position,
      left: left,
      top: top,
      right: right,
      bottom: bottom
    }
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }));
};

BasedIcon.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
BasedIcon.defaultProps = {
  name: 'backpress'
};
/* harmony default export */ __webpack_exports__["default"] = (BasedIcon);

/***/ }),

/***/ "./components/atoms/icons/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/icons/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon.jsx */ "./components/atoms/icons/icon.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _icon_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/images/image.jsx":
/*!*******************************************!*\
  !*** ./components/atoms/images/image.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.styles.jsx */ "./components/atoms/images/image.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/images/image.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Image = (_ref) => {
  let {
    src,
    position,
    top,
    left,
    right,
    bottom,
    margin,
    isEqualposition,
    isEqualtop,
    isEqualleft,
    isEqualright,
    isEqualbottom,
    width,
    height,
    radius
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "position", "top", "left", "right", "bottom", "margin", "isEqualposition", "isEqualtop", "isEqualleft", "isEqualright", "isEqualbottom", "width", "height", "radius"]);

  return __jsx(_image_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    src: src,
    position: position,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    margin: margin,
    isEqualposition: isEqualposition,
    isEqualtop: isEqualtop,
    isEqualleft: isEqualleft,
    isEqualright: isEqualright,
    isEqualbottom: isEqualbottom,
    width: width,
    height: height,
    radius: radius
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }));
};

Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"].isRequired,
  position: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  top: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  left: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  right: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualposition: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualtop: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualleft: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualright: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualbottom: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  radius: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/atoms/images/image.styles.jsx":
/*!**************************************************!*\
  !*** ./components/atoms/images/image.styles.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");


const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "imagestyles__StyledImage",
  componentId: "sc-1gc5f3x-0"
})(["width:", ";height:", ";position:", ";top:", ";left:", ";right:", ";bottom:", ";margin:", ";border-radius:", ";@media ", "{position:", ";top:", ";left:", ";right:", ";bottom:", ";}"], props => props.width, props => props.height, props => props.position, props => props.top, props => props.left, props => props.right, props => props.bottom, props => props.margin, props => props.radius, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualposition, props => props.isEqualtop, props => props.isEqualleft, props => props.isEqualright, props => props.isEqualbottom);
/* harmony default export */ __webpack_exports__["default"] = (StyledImage);

/***/ }),

/***/ "./components/atoms/images/index.js":
/*!******************************************!*\
  !*** ./components/atoms/images/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image.jsx */ "./components/atoms/images/image.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _image_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/index.js":
/*!***********************************!*\
  !*** ./components/atoms/index.js ***!
  \***********************************/
/*! exports provided: Container, Wrapper, View, Rows, ButtonIcon, Button, Badge, Image, BackgroundImage, Text, Lottie, Input, Icon, Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ "./components/atoms/containers/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _containers__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ "./components/atoms/wrapper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return _wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views */ "./components/atoms/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View", function() { return _views__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _rows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rows */ "./components/atoms/rows/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rows", function() { return _rows__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _buttons_buttonIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/buttonIcons */ "./components/atoms/buttons/buttonIcons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonIcon", function() { return _buttons_buttonIcons__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons */ "./components/atoms/buttons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _buttons__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _badges__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./badges */ "./components/atoms/badges/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _badges__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images */ "./components/atoms/images/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _images__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _backgroundImages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./backgroundImages */ "./components/atoms/backgroundImages/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundImage", function() { return _backgroundImages__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _texts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./texts */ "./components/atoms/texts/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _texts__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _lotties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lotties */ "./components/atoms/lotties/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lottie", function() { return _lotties__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input */ "./components/atoms/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons */ "./components/atoms/icons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icons__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./logo */ "./components/atoms/logo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _logo__WEBPACK_IMPORTED_MODULE_13__["default"]; });
















/***/ }),

/***/ "./components/atoms/input/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/input/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.jsx */ "./components/atoms/input/input.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _input_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/input/input.jsx":
/*!******************************************!*\
  !*** ./components/atoms/input/input.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.styles.jsx */ "./components/atoms/input/input.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/input/input.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Input = (_ref) => {
  let {
    type,
    innerRef,
    value,
    placeholder,
    onChange,
    width,
    height,
    padding,
    bottom,
    left
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "innerRef", "value", "placeholder", "onChange", "width", "height", "padding", "bottom", "left"]);

  return __jsx(_input_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    width: width,
    height: height,
    padding: padding,
    bottom: bottom,
    left: left,
    ref: innerRef
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
};

Input.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  value: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/atoms/input/input.styles.jsx":
/*!*************************************************!*\
  !*** ./components/atoms/input/input.styles.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "inputstyles__StyledInput",
  componentId: "sc-1u7xzo9-0"
})(["width:", ";height:", ";border-radius:", ";margin-bottom:", ";margin-left:", ";background:#f7f7f8;padding:", ";box-sizing:border-box;border:none;font-family:'Montserrat',sans-serif;font-weight:400;font-size:14px;text-align:left;color:#403e3e;&:focus{outline:none;}&:active{outline:none;}"], props => !props.width ? '300px' : props.width, props => !props.height ? '40px' : props.height, props => !props.radius ? '10px' : props.radius, props => !props.bottom ? '0' : props.bottom, props => !props.left ? '0' : props.left, props => !props.padding ? '5px 12px 5px 12px' : props.padding);
/* harmony default export */ __webpack_exports__["default"] = (StyledInput);

/***/ }),

/***/ "./components/atoms/logo/index.js":
/*!****************************************!*\
  !*** ./components/atoms/logo/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/logo/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Logo = ({
  width,
  heigh,
  props
}) => __jsx("svg", _extends({
  width: width,
  height: heigh,
  viewBox: "0 0 31.278 31.278"
}, props, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}), __jsx("g", {
  "data-name": "Group 167",
  transform: "translate(-37.861 -19.861)",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }
}, __jsx("rect", {
  "data-name": "Rectangle 128",
  width: 27,
  height: 27,
  rx: 8,
  transform: "translate(40 22)",
  fill: "#1e2127",
  opacity: 0.505,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}), __jsx("rect", {
  "data-name": "Rectangle 127",
  width: 27,
  height: 27,
  rx: 8,
  transform: "rotate(10.02 -92.004 252.598)",
  fill: "#1e2127",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx("text", {
  transform: "translate(49 41)",
  fill: "#fff",
  fontSize: 24,
  fontFamily: "GoodDogPlain, GoodDog Plain",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }
}, __jsx("tspan", {
  x: 0,
  y: 0,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 11
  }
}, "a"))));

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/atoms/lotties/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/lotties/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lottie_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lottie.jsx */ "./components/atoms/lotties/lottie.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _lottie_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/lotties/lottie.jsx":
/*!*********************************************!*\
  !*** ./components/atoms/lotties/lottie.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-lottie */ "react-lottie");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/lotties/lottie.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Lottie = ({
  width,
  height,
  loop,
  autoplay,
  path
}) => {
  let lottieState = {
    loop: loop,
    autoplay: autoplay,
    animationData: path
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_1___default.a, {
      width: width,
      height: height,
      options: lottieState,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    });
  });
};

Lottie.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired,
  loop: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  autoplay: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"].isRequired,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2__["object"].isRequired
};
Lottie.defaultProps = {
  width: 500,
  height: 500,
  loop: true,
  autoplay: true
};
/* harmony default export */ __webpack_exports__["default"] = (Lottie);

/***/ }),

/***/ "./components/atoms/rows/index.js":
/*!****************************************!*\
  !*** ./components/atoms/rows/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row.jsx */ "./components/atoms/rows/row.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _row_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/rows/row.jsx":
/*!***************************************!*\
  !*** ./components/atoms/rows/row.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _row_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row.styles.jsx */ "./components/atoms/rows/row.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/rows/row.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Rows = ({
  children,
  props
}) => {
  return __jsx(_row_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), children);
}; // Rows.propTypes = {
//     children: node.isRequired
// }


/* harmony default export */ __webpack_exports__["default"] = (Rows);

/***/ }),

/***/ "./components/atoms/rows/row.styles.jsx":
/*!**********************************************!*\
  !*** ./components/atoms/rows/row.styles.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledRows = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "rowstyles__StyledRows",
  componentId: "dek76w-0"
})(["display:flex;flex-flow:row wrap;justify-content:flex-start;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledRows);

/***/ }),

/***/ "./components/atoms/texts/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/texts/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.jsx */ "./components/atoms/texts/text.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _text_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/texts/text.jsx":
/*!*****************************************!*\
  !*** ./components/atoms/texts/text.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _text_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.styles.jsx */ "./components/atoms/texts/text.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/texts/text.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Text = (_ref) => {
  let {
    children,
    href,
    family,
    target,
    variant,
    size,
    weight,
    align,
    isEqualSize,
    isEqualAlign,
    margin,
    width,
    isEqualMargin
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "href", "family", "target", "variant", "size", "weight", "align", "isEqualSize", "isEqualAlign", "margin", "width", "isEqualMargin"]);

  if (!href) return __jsx(_text_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    variant: variant,
    size: size,
    weight: weight,
    align: align,
    isEqualSize: isEqualSize,
    isEqualAlign: isEqualAlign,
    margin: margin,
    width: width,
    family: family,
    isEqualMargin: isEqualMargin
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), children);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    prefetch: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_text_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    variant: variant,
    target: target,
    family: family,
    size: size,
    weight: weight,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, children));
};

Text.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  size: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  weight: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  align: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualSize: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualAlign: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./components/atoms/texts/text.styles.jsx":
/*!************************************************!*\
  !*** ./components/atoms/texts/text.styles.jsx ***!
  \************************************************/
/*! exports provided: StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



const color = props => {
  if (!props.variant) return "#403e3e";

  switch (props.variant) {
    case "primary":
      return "#1E2127";
      break;

    case "secondary":
      return "#F7FBFF";

    case "grey":
      return "#7b7a8c";

    case "blue":
      return "#2525F0";

    case "white":
      return "#ffffff";

    case "dark":
      return "#64637B";

    default:
      return props.variant;
      break;
  }
};

const size = props => {
  if (!props.size) return "14";
  return props.size;
};

const weight = props => {
  if (!props.weight) return "400";

  switch (props.weight) {
    case "light":
      return "300";
      break;

    case "regular":
      return "400";
      break;

    case "medium":
      return "500";
      break;

    case "semi-bold":
      return "600";
      break;

    case "bold":
      return "700";

    default:
      break;
  }
};

const isFamily = props => {
  if (!props.family) return "'Montserrat', sans-serif";

  switch (props.family) {
    case "quicksand":
      return "'Quicksand', sans-serif";
      break;

    case "montserrat":
      return "'Montserrat', sans-serif";
      break;

    case "daily":
      return "Daily";
      break;

    default:
      return "'Montserrat', sans-serif";
      break;
  }
};

const StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "textstyles__StyledText",
  componentId: "sc-1c7yjdi-0"
})(["font-family:", ";font-weight:", ";font-size:", "px;text-align:", ";color:", ";margin:", ";width:", ";@media ", "{font-size:", "px !important;text-align:", "px !important;margin:", ";}"], props => isFamily(props), props => weight(props), props => size(props), props => !props.align ? 'left' : props.align, props => color(props), props => props.margin, props => props.width, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualSize, props => props.isEqualAlign, props => props.isEqualMargin);
const StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "textstyles__StyledLink",
  componentId: "sc-1c7yjdi-1"
})(["font-family:", ";font-weight:", ";font-size:", "px;text-align:left;color:", ";text-decoration:none;cursor:pointer;"], props => isFamily(props), props => !props.weight ? 500 : weight(props), props => !props.size ? '14px' : size(props), props => !props.variant ? "#1E2127" : color(props));
/* harmony default export */ __webpack_exports__["default"] = (StyledText);

/***/ }),

/***/ "./components/atoms/views/index.js":
/*!*****************************************!*\
  !*** ./components/atoms/views/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.jsx */ "./components/atoms/views/view.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _view_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/views/view.jsx":
/*!*****************************************!*\
  !*** ./components/atoms/views/view.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.styles.jsx */ "./components/atoms/views/view.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/views/view.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const View = (_ref) => {
  let {
    children,
    innerRef,
    style,
    isEqualFlex,
    flexValue,
    direction,
    justify,
    overflow,
    isBoxShadow,
    width,
    isEqualWidth,
    isEqualHeight,
    height,
    radius,
    backgroundColor,
    isEqualBackground,
    isEqualDirection,
    position,
    bottom,
    margin,
    maxWidth,
    top,
    left,
    border,
    isPadding
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "innerRef", "style", "isEqualFlex", "flexValue", "direction", "justify", "overflow", "isBoxShadow", "width", "isEqualWidth", "isEqualHeight", "height", "radius", "backgroundColor", "isEqualBackground", "isEqualDirection", "position", "bottom", "margin", "maxWidth", "top", "left", "border", "isPadding"]);

  return __jsx(_view_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    ref: innerRef,
    style: style,
    isBoxShadow: isBoxShadow,
    isEqualFlex: isEqualFlex,
    width: width,
    height: height,
    isEqualWidth: isEqualWidth,
    isEqualHeight: isEqualHeight,
    radius: radius,
    backgroundColor: backgroundColor,
    isEqualBackground: isEqualBackground,
    flexValue: flexValue,
    justify: justify,
    overflow: overflow,
    position: position,
    bottom: bottom,
    direction: direction,
    isEqualDirection: isEqualDirection,
    margin: margin,
    maxWidth: maxWidth,
    top: top,
    left: left,
    border: border,
    isPadding: isPadding
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), children);
};

View.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"],
  width: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  height: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualHeight: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualFlex: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  direction: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualDirection: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  justify: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  flexValue: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  position: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  margin: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  overflow: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isEqualBackground: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  isBoxShadow: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  radius: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  top: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  left: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./components/atoms/views/view.styles.jsx":
/*!************************************************!*\
  !*** ./components/atoms/views/view.styles.jsx ***!
  \************************************************/
/*! exports provided: StyledView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledView", function() { return StyledView; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



const isDisplayProperty = props => {
  switch (props.isEqualFlex) {
    case "flex":
      return "flex";
      break;

    case "block":
      return "block";
      break;

    case "inline-block":
      return "inline-block";
      break;

    case "none":
      return "none";
      break;

    default:
      return "flex";
      break;
  }
};

const masked = props => {
  if (props.masked) {
    return "hidden";
  } else {
    return "visible";
  }
};

const StyledView = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "viewstyles__StyledView",
  componentId: "sc-1egp7p8-0"
})(["display:", ";flex-direction:", ";flex:", ";justify-content:", ";align-items:", ";width:", ";max-width:", ";height:", ";background-color:", ";border:", ";border-radius:", ";box-shadow:", ";overflow:", ";position:", ";left:", ";top:", ";bottom:", ";padding:", ";margin:", ";box-sizing:border-box;&.half{width:calc(50% - 40px);margin:0 5px 10px 0;&:nth-child(2n){margin:0 0 10px 5px;}@media ", "{width:100%;margin:0 5px 40px 0 !important;flex-direction:column;}}&.large{width:100%;margin:0 0 50px 0;display:flex;justify-content:space-between;@media ", "{flex-direction:column;}}&.semi-half{width:calc(70% - 50px);margin:0 5px 10px 0;&:nth-child(2n){width:30%;margin:0 0 10px 5px;@media ", "{width:100%;}}@media ", "{width:100%;}}&.grid-item-12{height:auto;flex-basis:100%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-11{height:auto;flex-basis:91.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-10{height:auto;flex-basis:83.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-9{height:auto;flex-basis:75%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-8{height:auto;flex-basis:66.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-7{height:auto;flex-basis:58.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-6{height:auto;flex-basis:50%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-5{height:auto;flex-basis:41.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-4{height:auto;flex-basis:33.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-3{height:auto;flex-basis:25%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-2{height:auto;flex-basis:16.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-1{height:auto;flex-basis:8.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.section{padding:0px 100px 0px 100px;}@media ", "{&.grid-item{flex-basis:33.33%;}}@media ", "{.grid-item{flex-basis:33.33%;}}@media ", "{padding:", ";&.grid-item-4{flex-basis:50%;}&.grid-item-3{flex-basis:100%;}&.grid-item{flex-basis:50%;}&.section{padding:0px 20px 0px 20px !important;}}@media ", "{width:", " !important;height:", " !important;background-color:", ";flex-direction:", ";&.grid-item{flex-basis:100%;}}"], props => isDisplayProperty(props), props => props.direction, props => props.flexValue ? '1' : 'none', props => props.justify, props => !props.align ? 'none' : props.align, props => props.width, props => !props.maxWidth ? undefined : props.maxWidth, props => props.height, props => props.backgroundColor, props => !props.border ? undefined : props.border, props => props.radius, props => props.isBoxShadow, props => props.overflow, props => props.position, props => props.left, props => props.top, props => props.bottom, props => props.padding, props => props.margin, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptopL, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptop, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, props => props.isPadding, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => !props.isEqualWidth ? undefined : props.isEqualWidth, props => !props.isEqualHeight ? undefined : props.isEqualHeight, props => props.isEqualBackground, props => props.isEqualDirection);
/* harmony default export */ __webpack_exports__["default"] = (StyledView);

/***/ }),

/***/ "./components/atoms/wrapper/index.js":
/*!*******************************************!*\
  !*** ./components/atoms/wrapper/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wrapper_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapper.jsx */ "./components/atoms/wrapper/wrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _wrapper_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/atoms/wrapper/wrapper.jsx":
/*!**********************************************!*\
  !*** ./components/atoms/wrapper/wrapper.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapper_styles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper.styles.jsx */ "./components/atoms/wrapper/wrapper.styles.jsx");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/atoms/wrapper/wrapper.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Wrapper = ({
  children
}) => {
  return __jsx(_wrapper_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./components/atoms/wrapper/wrapper.styles.jsx":
/*!*****************************************************!*\
  !*** ./components/atoms/wrapper/wrapper.styles.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "wrapperstyles__StyledWrapper",
  componentId: "z6tfu3-0"
})(["width:100%;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:stretch;"]);
/* harmony default export */ __webpack_exports__["default"] = (StyledWrapper);

/***/ }),

/***/ "./components/molecules/404/404.jsx":
/*!******************************************!*\
  !*** ./components/molecules/404/404.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _assets_lottiefiles_404_lottiefile_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/lottiefiles/404-lottiefile.json */ "./assets/lottiefiles/404-lottiefile.json");
var _assets_lottiefiles_404_lottiefile_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/lottiefiles/404-lottiefile.json */ "./assets/lottiefiles/404-lottiefile.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/404/404.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NotFound = ({
  title
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    direction: "column",
    width: "100%",
    height: "100vh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Lottie"], {
    path: _assets_lottiefiles_404_lottiefile_json__WEBPACK_IMPORTED_MODULE_2__,
    width: 700,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    align: "center",
    family: "daily",
    size: "24",
    margin: "0  0 80px 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, title)));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ "./components/molecules/404/index.js":
/*!*******************************************!*\
  !*** ./components/molecules/404/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _404_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404.jsx */ "./components/molecules/404/404.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _404_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/articles/cardHero/cardHero.jsx":
/*!*************************************************************!*\
  !*** ./components/molecules/articles/cardHero/cardHero.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/articles/cardHero/cardHero.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CardHero = ({
  item
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "large",
    direction: "row",
    isEqualDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    height: "400px",
    className: "semi-half",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["BackgroundImage"], {
    src: item.hero.image,
    width: "100%",
    height: "100%",
    size: "cover",
    radius: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "semi-half",
    direction: "column",
    justify: "space-around",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "32",
    weight: "bold",
    style: {
      letterSpacing: '0.1em'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, item.content.title), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "22",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, item.content.subtitle), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "arrowStraight",
    width: "10em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CardHero);

/***/ }),

/***/ "./components/molecules/articles/cardHero/index.js":
/*!*********************************************************!*\
  !*** ./components/molecules/articles/cardHero/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardHero_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardHero.jsx */ "./components/molecules/articles/cardHero/cardHero.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _cardHero_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/articles/cardImage/cardImage.jsx":
/*!***************************************************************!*\
  !*** ./components/molecules/articles/cardImage/cardImage.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/articles/cardImage/cardImage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CardImage = ({
  item
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "half",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    height: "300px",
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["BackgroundImage"], {
    src: item.hero.image,
    width: "100%",
    height: "100%",
    radius: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    direction: "column",
    margin: "30px 0 0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "24",
    weight: "bold",
    margin: " 0 0 10px 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, item.content.title), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, item.content.subtitle)));
};

/* harmony default export */ __webpack_exports__["default"] = (CardImage);

/***/ }),

/***/ "./components/molecules/articles/cardImage/index.js":
/*!**********************************************************!*\
  !*** ./components/molecules/articles/cardImage/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardImage_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardImage.jsx */ "./components/molecules/articles/cardImage/cardImage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _cardImage_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/articles/cardStories/cardStories.jsx":
/*!*******************************************************************!*\
  !*** ./components/molecules/articles/cardStories/cardStories.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/molecules/articles/cardStories/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/articles/cardStories/cardStories.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CardStories = ({
  title,
  subtitle,
  label,
  image,
  className
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: `card-stories ${className}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["BackgroundImage"], {
    src: `https:${image}`,
    size: "cover",
    className: "card-stories-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    direction: "column",
    className: "card-stories-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    justify: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    title: label,
    backgroundColor: "#FCEEDE",
    color: "#D9A971",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    direction: "column",
    justify: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    margin: "0  0 30px 0",
    width: "50%",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, subtitle)), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    family: "daily",
    size: "32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, title)))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardStories);

/***/ }),

/***/ "./components/molecules/articles/cardStories/index.js":
/*!************************************************************!*\
  !*** ./components/molecules/articles/cardStories/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardStories_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardStories.jsx */ "./components/molecules/articles/cardStories/cardStories.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _cardStories_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/articles/cardStories/styles.scss":
/*!***************************************************************!*\
  !*** ./components/molecules/articles/cardStories/styles.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/molecules/articles/cardText/cardText.jsx":
/*!*************************************************************!*\
  !*** ./components/molecules/articles/cardText/cardText.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/articles/cardText/cardText.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const CardText = ({
  title,
  subtitle,
  variant,
  color,
  badgeTitle,
  icon,
  tagname,
  props
}) => {
  if (!icon) {
    return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], _extends({}, props, {
      direction: "column",
      className: "grid-item-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
      direction: "column",
      flexValue: "1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      size: "16",
      weight: "semi-bold",
      margin: "0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }
    }, title)), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
      margin: "10px 0 0 0",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      size: "12",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, subtitle))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      title: badgeTitle,
      backgroundColor: variant,
      color: color,
      marginTop: "30px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }));
  }

  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], _extends({}, props, {
    direction: "column",
    height: "200px !important",
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    direction: "column",
    Width: "50%",
    flexValue: "1",
    justify: "space-between",
    padding: "22px",
    border: "1px solid #1E2127",
    radius: "12px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "15",
    weight: "semi-bold",
    margin: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, title)), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    margin: "25px 0 0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: icon,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    weight: "medium",
    margin: "0 0 0 10px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, tagname))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardText);

/***/ }),

/***/ "./components/molecules/articles/cardText/index.js":
/*!*********************************************************!*\
  !*** ./components/molecules/articles/cardText/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardText_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardText.jsx */ "./components/molecules/articles/cardText/cardText.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _cardText_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/forms/textIcon/index.js":
/*!******************************************************!*\
  !*** ./components/molecules/forms/textIcon/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texticon_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./texticon.jsx */ "./components/molecules/forms/textIcon/texticon.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _texticon_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/forms/textIcon/styles.scss":
/*!*********************************************************!*\
  !*** ./components/molecules/forms/textIcon/styles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/molecules/forms/textIcon/texticon.jsx":
/*!**********************************************************!*\
  !*** ./components/molecules/forms/textIcon/texticon.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/molecules/forms/textIcon/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/forms/textIcon/texticon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: "fz8qdsqhkxef",
  accessToken: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
});

const TextIcon = ({
  placeholder,
  left,
  props
}) => {
  const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [searchResults, setSearchResults] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const refInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const refResults = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  async function searching(title) {
    const entries = await client.getEntries({
      content_type: 'story',
      'fields.title[match]': title
    });
    if (entries.items) return entries.items;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getResults() {
      const results = await searching(searchTerm);
      setSearchResults([...results]);
    }

    const handleFocus = () => {
      setActive(true);
    };

    const {
      current
    } = refInput;
    current.addEventListener('focus', handleFocus);

    function handleClickOutside(event) {
      if (refResults.current && !refResults.current.contains(event.target)) {
        setActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    if (searchTerm.length > 1) {
      getResults();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "header-input-search",
    position: "relative",
    style: {
      left: left
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "search",
    position: "absolute",
    left: "15px",
    top: "9px",
    width: "1.3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "inputTextIcon",
    placeholder: placeholder,
    width: "300px",
    padding: "5px 30px 5px 45px",
    value: searchTerm,
    innerRef: refInput,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: `search-results ${active ? 'isActiveInput' : ''}`,
    direction: "column",
    isEqualFlex: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    height: "30px",
    justify: "space-between",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    weight: "medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Results of ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 58
    }
  }, searchTerm))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "rounded-counter",
    justify: "center",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, searchResults.length)))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    className: "content",
    innerRef: refResults,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, searchResults.map((item, index) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: index,
    href: "/stories/[slug]",
    as: `/stories/${item.fields.slug}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, __jsx("a", {
    style: {
      textDecoration: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 33
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 37
    }
  }, item.fields.title))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextIcon);

/***/ }),

/***/ "./components/molecules/index.js":
/*!***************************************!*\
  !*** ./components/molecules/index.js ***!
  \***************************************/
/*! exports provided: Navigation, Social, TextIcon, CardText, CardImage, CardHero, CardStories, NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./components/molecules/navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socials */ "./components/molecules/socials/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Social", function() { return _socials__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _forms_textIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/textIcon */ "./components/molecules/forms/textIcon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextIcon", function() { return _forms_textIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _articles_cardText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/cardText */ "./components/molecules/articles/cardText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardText", function() { return _articles_cardText__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _articles_cardImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/cardImage */ "./components/molecules/articles/cardImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return _articles_cardImage__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _articles_cardHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/cardHero */ "./components/molecules/articles/cardHero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardHero", function() { return _articles_cardHero__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _articles_cardStories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles/cardStories */ "./components/molecules/articles/cardStories/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStories", function() { return _articles_cardStories__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./404 */ "./components/molecules/404/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return _404__WEBPACK_IMPORTED_MODULE_7__["default"]; });










/***/ }),

/***/ "./components/molecules/navigation/index.js":
/*!**************************************************!*\
  !*** ./components/molecules/navigation/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.jsx */ "./components/molecules/navigation/navigation.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _navigation_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/navigation/navigation.jsx":
/*!********************************************************!*\
  !*** ./components/molecules/navigation/navigation.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms_texts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/texts */ "./components/atoms/texts/index.js");
/* harmony import */ var _navigation_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.styles */ "./components/molecules/navigation/navigation.styles.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/navigation/navigation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Navigation = ({
  direction,
  items,
  padding,
  isEqualPadding,
  family,
  variant,
  weight,
  size
}) => __jsx(_navigation_styles__WEBPACK_IMPORTED_MODULE_3__["StyledNavigation"], {
  direction: direction,
  padding: padding,
  isEqualPadding: isEqualPadding,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, items.map(item => __jsx(_atoms_texts__WEBPACK_IMPORTED_MODULE_2__["default"], {
  href: item.url,
  key: item.id,
  family: family,
  weight: weight,
  variant: variant,
  size: size,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 17
  }
}, item.title)));

Navigation.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"],
  items: Object(prop_types__WEBPACK_IMPORTED_MODULE_4__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_4__["shape"])({
    title: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"].isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_4__["string"].isRequired
  }))
};
Navigation.defaultProps = {
  direction: "horizontal",
  items: []
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./components/molecules/navigation/navigation.styles.jsx":
/*!***************************************************************!*\
  !*** ./components/molecules/navigation/navigation.styles.jsx ***!
  \***************************************************************/
/*! exports provided: StyledNavigation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledNavigation", function() { return StyledNavigation; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");


const StyledNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navigationstyles__StyledNavigation",
  componentId: "sc-5jqkcc-0"
})(["display:flex;flex-direction:", ";padding:", ";a + a{margin-left:", ";margin-top:", ";}@media ", "{padding:", ";a{font-size:12px;}a + a{margin-left:30px;}}"], props => props.direction !== "horizontal" ? "column" : undefined, props => !props.padding ? '16px' : props.padding, props => props.direction === "horizontal" ? "50px" : undefined, props => props.direction !== "horizontal" ? "24px" : undefined, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, props => props.isEqualPadding);
/* harmony default export */ __webpack_exports__["default"] = (StyledNavigation);

/***/ }),

/***/ "./components/molecules/socials/index.js":
/*!***********************************************!*\
  !*** ./components/molecules/socials/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _social_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social.jsx */ "./components/molecules/socials/social.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _social_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/molecules/socials/social.jsx":
/*!*************************************************!*\
  !*** ./components/molecules/socials/social.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _social_styles_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.styles.jsx */ "./components/molecules/socials/social.styles.jsx");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/socials/social.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const Social = ({
  direction,
  items,
  props
}) => {
  return __jsx(_social_styles_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    direction: direction
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), items.map(item => __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    href: item.url,
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, item.title)));
};

/* harmony default export */ __webpack_exports__["default"] = (Social);

/***/ }),

/***/ "./components/molecules/socials/social.styles.jsx":
/*!********************************************************!*\
  !*** ./components/molecules/socials/social.styles.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledSocial = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "socialstyles__StyledSocial",
  componentId: "sc-1ta6kbi-0"
})(["display:flex;flex-direction:", ";padding:", ";a{display:flex;justify-content:center;align-items:center;width:40px;height:40px;transition:.5s ease;border-radius:10px;}a:hover{background:#1e2127;color:#ffffff;}a + a{margin-left:", ";margin-top:", ";}"], props => props.direction !== "horizontal" ? "column" : undefined, props => !props.padding ? '16px' : props.padding, props => props.direction === "horizontal" ? "50px" : undefined, props => props.direction !== "horizontal" ? "24px" : undefined);
/* harmony default export */ __webpack_exports__["default"] = (StyledSocial);

/***/ }),

/***/ "./components/organisms/articles/articleImage/articleImage.jsx":
/*!*********************************************************************!*\
  !*** ./components/organisms/articles/articleImage/articleImage.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../molecules */ "./components/molecules/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/articles/articleImage/articleImage.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ArticleImage = ({
  items
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    isEqualWidth: "100%",
    boxSizing: "border-box",
    padding: "100px",
    className: "section",
    style: {
      borderBottom: '1px solid #959595'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["CardHero"], {
    item: items[0],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), items[1].childs.map(item => __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    key: item.id,
    item: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleImage);

/***/ }),

/***/ "./components/organisms/articles/articleImage/index.js":
/*!*************************************************************!*\
  !*** ./components/organisms/articles/articleImage/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articleImage_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleImage.jsx */ "./components/organisms/articles/articleImage/articleImage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _articleImage_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/articles/articleText/articleText.jsx":
/*!*******************************************************************!*\
  !*** ./components/organisms/articles/articleText/articleText.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../molecules */ "./components/molecules/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/articles/articleText/articleText.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const ArticleText = ({
  items,
  image,
  outline,
  props
}) => {
  if (image) {
    return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Rows"], _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
      align: "center",
      className: "grid-item-3",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: image,
      width: "80%",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    })), items.map(item => __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      key: item.id,
      title: item.title,
      subtitle: item.subtitle,
      variant: item.badge.background,
      color: item.badge.color,
      badgeTitle: item.badge.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    })));
  }

  if (outline) {
    return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Rows"], _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }), items.map(item => __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
      key: item.id,
      title: item.title,
      icon: item.badge.icon,
      tagname: item.badge.title,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    })));
  }

  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Rows"], _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), items.map(item => __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["CardText"], {
    key: item.id,
    title: item.title,
    subtitle: item.subtitle,
    variant: item.badge.background,
    color: item.badge.color,
    badgeTitle: item.badge.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleText);

/***/ }),

/***/ "./components/organisms/articles/articleText/index.js":
/*!************************************************************!*\
  !*** ./components/organisms/articles/articleText/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _articleText_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleText.jsx */ "./components/organisms/articles/articleText/articleText.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _articleText_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/articles/sliderCategories/index.js":
/*!*****************************************************************!*\
  !*** ./components/organisms/articles/sliderCategories/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sliderCategories_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderCategories.jsx */ "./components/organisms/articles/sliderCategories/sliderCategories.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _sliderCategories_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/articles/sliderCategories/sliderCategories.jsx":
/*!*****************************************************************************!*\
  !*** ./components/organisms/articles/sliderCategories/sliderCategories.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @egjs/react-flicking */ "@egjs/react-flicking");
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/organisms/articles/sliderCategories/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/articles/sliderCategories/sliderCategories.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SliderCategories = ({
  items
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    padding: "100px 0 0 100px",
    isEqualHeight: "50vh",
    flexDirection: "column",
    className: "slider-categories-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    margin: " 0 0 50px 0",
    className: "slider-categories-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    family: "daily",
    size: "32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Categories")), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "stories-categories",
    gap: 50,
    infinite: true,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      width: 100 + '%',
      height: 50 + 'vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, items.length > 0 ? items.map((item, index) => __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["BackgroundImage"], {
    src: `https:${item.fields.image.fields.file.url}`,
    size: "cover",
    className: "card-categories-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories-content",
    align: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "24",
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, item.fields.title))))) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderCategories);

/***/ }),

/***/ "./components/organisms/articles/sliderCategories/styles.scss":
/*!********************************************************************!*\
  !*** ./components/organisms/articles/sliderCategories/styles.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/organisms/articles/sliderHero/index.js":
/*!***********************************************************!*\
  !*** ./components/organisms/articles/sliderHero/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sliderHero_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderHero.jsx */ "./components/organisms/articles/sliderHero/sliderHero.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _sliderHero_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/articles/sliderHero/sliderHero.jsx":
/*!*****************************************************************!*\
  !*** ./components/organisms/articles/sliderHero/sliderHero.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @egjs/react-flicking */ "@egjs/react-flicking");
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../molecules */ "./components/molecules/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./components/organisms/articles/sliderHero/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/articles/sliderHero/sliderHero.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SliderHero = ({
  items
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "slider-hero-container",
    padding: "100px 0 0 100px",
    isEqualHeight: "70vh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    width: "25%",
    direction: "column",
    className: "slider-hero-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    direction: "column",
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    family: "daily",
    size: "32",
    width: "50px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Most Popular"), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    margin: "30px 30px 0  0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "We write various stories here for the present and the future. You can find various stories about us sharing knowledge, adventure and whatever it is here.")), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    margin: "0  0 50px 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "stories-hero",
    gap: 50,
    infinite: true,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      width: 100 + '%',
      height: 100 + '%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, items.length > 0 ? items.map((item, index) => {
    return __jsx(_molecules__WEBPACK_IMPORTED_MODULE_3__["CardStories"], {
      key: index,
      title: item.fields.title,
      subtitle: item.fields.subtitle,
      label: item.fields.label,
      image: item.fields.image.fields.file.url,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 24
      }
    });
  }) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderHero);

/***/ }),

/***/ "./components/organisms/articles/sliderHero/styles.scss":
/*!**************************************************************!*\
  !*** ./components/organisms/articles/sliderHero/styles.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/organisms/footer/footer.jsx":
/*!************************************************!*\
  !*** ./components/organisms/footer/footer.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules */ "./components/molecules/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/organisms/footer/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer_knobs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.knobs.json */ "./components/organisms/footer/footer.knobs.json");
var _footer_knobs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./footer.knobs.json */ "./components/organisms/footer/footer.knobs.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/footer/footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const {
  menu,
  submenu
} = _footer_knobs_json__WEBPACK_IMPORTED_MODULE_4__.data;

const Footer = ({
  props
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    isEqualHeight: "80vh",
    justifyContent: "center",
    className: "footer-container",
    backgroundColor: "#EDEDED",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    direction: "column",
    height: "100%",
    position: "relative",
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    items: menu.items.default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Social"], {
    direction: "horizontal",
    justify: "center",
    align: "center",
    items: submenu.items.default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/organisms/footer/footer.knobs.json":
/*!*******************************************************!*\
  !*** ./components/organisms/footer/footer.knobs.json ***!
  \*******************************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"menu\":{\"items\":{\"label\":\"Menu\",\"default\":[{\"id\":\"1\",\"title\":\"Home\",\"url\":\"/\"},{\"id\":\"2\",\"title\":\"Issues\",\"url\":\"/issues\"},{\"id\":\"3\",\"title\":\"Stories\",\"url\":\"/stories\"},{\"id\":\"4\",\"title\":\"About Us\",\"url\":\"/about\"}]}},\"submenu\":{\"items\":{\"label\":\"Sub\",\"default\":[{\"id\":\"1\",\"title\":\"IN\",\"url\":\"/\"},{\"id\":\"2\",\"title\":\"IG\",\"url\":\"/issues\"},{\"id\":\"3\",\"title\":\"FB\",\"url\":\"/stories\"}]}}}}");

/***/ }),

/***/ "./components/organisms/footer/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/footer/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.jsx */ "./components/organisms/footer/footer.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _footer_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/footer/styles.scss":
/*!*************************************************!*\
  !*** ./components/organisms/footer/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/organisms/header/header.jsx":
/*!************************************************!*\
  !*** ./components/organisms/header/header.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules */ "./components/molecules/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ "./components/organisms/header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/header/header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Header = ({
  direction,
  items
}) => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => {
    setOpen(!open);
    console.log("IS OPEN :: ", open);
  };

  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "5px 50px 5px 30px",
    backgroundColor: "#ffffff",
    position: "fixed",
    zIndex: "9999",
    isEqualWidth: "100%",
    boxShadow: "0px 3px 6px rgba(137, 137, 137, 0.16)",
    className: "header-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "header-brand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
    width: "2em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }))), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["TextIcon"], {
    placeholder: "What are you looking for?",
    left: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "search-on-mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "search",
    left: "15px",
    top: "9px",
    width: "1.3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "menu-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    className: "menu",
    direction: direction,
    items: items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "menu-mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: `menu-content-on-mobile  ${open ? 'isActive-menu-on-mobile' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    className: "menu",
    direction: direction,
    items: items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/organisms/header/index.js":
/*!**********************************************!*\
  !*** ./components/organisms/header/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.jsx */ "./components/organisms/header/header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _header_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/header/styles.scss":
/*!*************************************************!*\
  !*** ./components/organisms/header/styles.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/organisms/hero/hero.jsx":
/*!********************************************!*\
  !*** ./components/organisms/hero/hero.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../molecules */ "./components/molecules/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/organisms/hero/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/hero/hero.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Hero = ({
  title,
  subtitle,
  img
}) => {
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    "id": '1',
    "title": "IN",
    "url": "https://www.linkedin.com/in/ahroidlife/"
  }, {
    "id": "2",
    "title": "IG",
    "url": "https://www.instagram.com/user.ahroidlife/"
  }, {
    "id": "3",
    "title": "FB",
    "url": "/"
  }]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    isEqualHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 100px 0px 100px",
    className: "hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    height: "100%",
    flexValue: "1",
    direction: "column",
    className: "hero-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    direction: "column",
    align: "flex-start",
    padding: "150px 0px 0px 0px",
    isPadding: "0",
    className: "hero-header-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    family: "daily",
    size: "32",
    width: "100px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, title), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    margin: "50px 0px 0px 0px",
    isEqualMargin: "20px 0px 0px 0px",
    width: "45%",
    className: "hero-subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, subtitle), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    items: items,
    padding: "50px 0px 0px 0px",
    isEqualPadding: "20px 0 0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    align: "flex-end",
    style: {
      paddingBottom: '80px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "arrowStraight",
    width: "10em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    draggable: "false",
    src: img,
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/organisms/hero/index.js":
/*!********************************************!*\
  !*** ./components/organisms/hero/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero.jsx */ "./components/organisms/hero/hero.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _hero_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/organisms/hero/styles.scss":
/*!***********************************************!*\
  !*** ./components/organisms/hero/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/organisms/index.js":
/*!***************************************!*\
  !*** ./components/organisms/index.js ***!
  \***************************************/
/*! exports provided: Header, Footer, Hero, ArticleText, ArticleImage, SliderHero, SliderCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./components/organisms/header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/organisms/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero */ "./components/organisms/hero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return _hero__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _articles_articleText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles/articleText */ "./components/organisms/articles/articleText/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleText", function() { return _articles_articleText__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _articles_articleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./articles/articleImage */ "./components/organisms/articles/articleImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleImage", function() { return _articles_articleImage__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _articles_sliderHero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/sliderHero */ "./components/organisms/articles/sliderHero/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderHero", function() { return _articles_sliderHero__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _articles_sliderCategories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./articles/sliderCategories */ "./components/organisms/articles/sliderCategories/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderCategories", function() { return _articles_sliderCategories__WEBPACK_IMPORTED_MODULE_6__["default"]; });









/***/ }),

/***/ "./components/particles/breakpoints.jsx":
/*!**********************************************!*\
  !*** ./components/particles/breakpoints.jsx ***!
  \**********************************************/
/*! exports provided: breakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
const breakpoints = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};
/* harmony default export */ __webpack_exports__["default"] = (breakpoints);

/***/ }),

/***/ "./components/particles/useOnScreen.js":
/*!*********************************************!*\
  !*** ./components/particles/useOnScreen.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOnScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const {
    0: isIntersecting,
    1: setIntersecting
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIntersecting(entry.isIntersecting);
    }, {
      rootMargin
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

/***/ }),

/***/ "./components/templates/layouts/blog_layout.jsx":
/*!******************************************************!*\
  !*** ./components/templates/layouts/blog_layout.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms */ "./components/organisms/index.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _static_css_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/css/main.scss */ "./static/css/main.scss");
/* harmony import */ var _static_css_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static.json */ "./components/templates/static.json");
var _static_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static.json */ "./components/templates/static.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/templates/layouts/blog_layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  direction,
  items
} = _static_json__WEBPACK_IMPORTED_MODULE_5__.menus;

const BlogLayout = ({
  children,
  title,
  height,
  line
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_organisms__WEBPACK_IMPORTED_MODULE_2__["Header"], {
  direction: direction.horizontal,
  items: items.default,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  backgroundColor: "#EDEDED",
  className: line,
  flexDirection: "column",
  isEqualHeight: height,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, children), __jsx(_organisms__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (BlogLayout);

/***/ }),

/***/ "./components/templates/layouts/index.js":
/*!***********************************************!*\
  !*** ./components/templates/layouts/index.js ***!
  \***********************************************/
/*! exports provided: BlogLayout, MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blog_layout_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog_layout.jsx */ "./components/templates/layouts/blog_layout.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogLayout", function() { return _blog_layout_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _main_layout_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_layout.jsx */ "./components/templates/layouts/main_layout.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return _main_layout_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./components/templates/layouts/main_layout.jsx":
/*!******************************************************!*\
  !*** ./components/templates/layouts/main_layout.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../organisms */ "./components/organisms/index.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _static_css_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../static/css/main.scss */ "./static/css/main.scss");
/* harmony import */ var _static_css_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static.json */ "./components/templates/static.json");
var _static_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static.json */ "./components/templates/static.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/templates/layouts/main_layout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const {
  direction,
  items
} = _static_json__WEBPACK_IMPORTED_MODULE_5__.menus;

const MainLayout = ({
  children,
  height,
  line
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  backgroundColor: "#FFFFFF",
  flexDirection: "column",
  isEqualHeight: height,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}, children));

/* harmony default export */ __webpack_exports__["default"] = (MainLayout);

/***/ }),

/***/ "./components/templates/static.json":
/*!******************************************!*\
  !*** ./components/templates/static.json ***!
  \******************************************/
/*! exports provided: menus, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menus\":{\"direction\":{\"label\":\"Direction\",\"options\":{\"horizontal\":\"horizontal\",\"vertical\":\"vertical\"},\"default\":\"horizontal\",\"group\":\"variation\"},\"items\":{\"label\":\"Items\",\"default\":[{\"id\":\"1\",\"title\":\"Issues\",\"url\":\"/issues\"},{\"id\":\"2\",\"title\":\"Stories\",\"url\":\"/stories\"},{\"id\":\"3\",\"title\":\"About us\",\"url\":\"about\"}]}}}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @egjs/react-flicking */ "@egjs/react-flicking");
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/particles/useOnScreen */ "./components/particles/useOnScreen.js");
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/molecules */ "./components/molecules/index.js");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _assets_lottiefiles_loading_circle_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/lottiefiles/loading-circle.json */ "./assets/lottiefiles/loading-circle.json");
var _assets_lottiefiles_loading_circle_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/lottiefiles/loading-circle.json */ "./assets/lottiefiles/loading-circle.json", 1);
/* harmony import */ var _assets_lottiefiles_success_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/lottiefiles/success.json */ "./assets/lottiefiles/success.json");
var _assets_lottiefiles_success_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/lottiefiles/success.json */ "./assets/lottiefiles/success.json", 1);
/* harmony import */ var _index_knobs_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.knobs.json */ "./pages/index.knobs.json");
var _index_knobs_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./index.knobs.json */ "./pages/index.knobs.json", 1);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const {
  menus
} = _index_knobs_json__WEBPACK_IMPORTED_MODULE_11__.data;


const App = () => {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: overlay,
    1: setOverlay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: greeting,
    1: setGreeting
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Good Morning');
  const {
    0: date,
    1: setDate
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('01 Jan 2020');
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: firstname,
    1: setFirstname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: lastname,
    1: setLastname
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: budget,
    1: setBudget
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: timeline,
    1: setTimeline
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const isVisible = Object(_components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_4__["default"])(ref);

  const inquiry = () => {
    let payload = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      budget: budget,
      timeline: timeline,
      message: message
    };

    if (firstname.length > 3 && lastname.length > 3 && email.length > 8 && message.length > 20) {
      setVisible(true);
      setLoading(true);
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://localhost:8080" + '/api/inquiry/create', JSON.stringify(payload)).then(res => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setFirstname('');
        setLastname('');
        setEmail('');
        setPhone('');
        setMessage('');
      }).catch(err => {
        console.log(err);
      });
      return;
    } else {
      return;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // console.log(`The component is ${isVisible ? "visible" : "not visible"}.`)
    let date = new Date();
    let time = date.getHours();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    setDate(`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`);

    if (time < 12 && time > 5) {
      setGreeting('Good Morning');
    } else if (time > 12 && time < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, [isVisible]);

  const toInquiry = () => {
    document.getElementById('inquiry').scrollIntoView({
      behavior: 'smooth'
    });
  };

  const done = () => {
    setLoading(false);
    setVisible(false);
  };

  const openMenu = () => {
    setOpen(true);
    setOverlay(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setOpen(false);
    setOverlay(false);
    document.body.style.overflow = 'unset';
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_12__["NextSeo"], {
    title: "Krisna Ahroid | Design & Code",
    description: "Krisna Ahroid. A UI/UX Designer & Frontend Developer based in Jakarta, Indonesia",
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.ahroidlife.com/',
      site_name: 'ahroidlife',
      title: 'Krisna Ahroid | Design & Code',
      description: 'Krisna Ahroid. A UI/UX Designer & Frontend Developer based in Jakarta, Indonesia',
      image: 'https://ahroidlife.com/static/illustrations/hero-image.png'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }), __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_5__["MainLayout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }, __jsx("div", {
    ref: ref,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: `overlay ${visible ? 'isVisibility' : ''}`,
    justify: "center",
    align: "center",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Lottie"], {
    width: 200,
    height: 200,
    autoplay: true,
    loop: true,
    path: _assets_lottiefiles_loading_circle_json__WEBPACK_IMPORTED_MODULE_9__,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }) : __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Lottie"], {
    width: 250,
    height: 250,
    autoplay: true,
    loop: true,
    path: _assets_lottiefiles_success_json__WEBPACK_IMPORTED_MODULE_10__,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 109
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    margin: "15px 0 0 0",
    family: "quicksand",
    size: "32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, loading ? 'Just take a moment' : 'Thank You!'), loading ? undefined : __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "btn-done",
    onClick: done,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 33
    }
  }, "Done")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "main-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "main-header-content",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "main-header-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "navigation-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_7__["Navigation"], {
    items: menus,
    family: "quicksand",
    size: "16",
    weight: "400",
    variant: "grey",
    padding: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-mobile",
    onClick: openMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/menu.svg",
    alt: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: `nav-menu-wrapper-mobile ${isVisible ? 'isActiveEl' : ''} ${open ? 'nav-menu-isActive' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-header-mobile",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "white",
    family: "quicksand",
    size: "18",
    margin: "0 0 2px 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, greeting), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "white",
    family: "quicksand",
    weight: "light",
    size: "14",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, date), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-button-close",
    onClick: closeMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/close.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-dots",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/dot-header-mobile.svg",
    alt: "dot-header-mobile",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-content-mobile",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-items",
    direction: "column",
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/products.svg",
    alt: "products",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 25
    }
  }, "My Products")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/projects.svg",
    alt: "projects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, "My Related Projects")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "issues",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/issues.svg",
    alt: "issues",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 25
    }
  }, "Issues")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/stories.svg",
    alt: "stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 25
    }
  }, "Stories"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-item-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "nav-menu-item",
    onClick: () => navigator.clipboard.writeText(window.location.href),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/copy.svg",
    alt: "copy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, "\u201CCopy Link to Clipboard\u201D"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: `overlay-background  ${overlay ? 'is-overlay-background' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "social-media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/ahroidlife/",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 19
    }
  }, "IN")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/krisnaahroid",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 19
    }
  }, "FB")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 19
    }
  }, "IG"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    flexValue: "1",
    className: "main-header-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    direction: "column",
    className: "main-header-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "blue",
    family: "quicksand",
    margin: "0  0 50px 0 ",
    className: "sayHi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 15
    }
  }, "Hi, there"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    direction: "column",
    margin: "0  0 30px 0 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "blue",
    family: "quicksand",
    weight: "medium",
    className: "fullname",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 17
    }
  }, "I\u2019m Krisna Ahroid"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "medium",
    className: "subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, "UI/UX Designer & Frontend Developer")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    width: "80%",
    className: "main-header-text-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "regular",
    className: "text-overview",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 17
    }
  }, "I design & code that turn the idea to", __jsx("span", {
    style: {
      color: '#2525F0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 19
    }
  }, " product digital and website that people love it."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "btn-hire",
    onClick: toInquiry,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 17
    }
  }, "HIRE ME"), __jsx("a", {
    href: "https://calendly.com/ahroidlife/15min",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "blue",
    weight: "regular",
    className: "consult",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 19
    }
  }, "Free - 15min consult")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "main-header-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/hero-image.png",
    className: "main-header-hero",
    alt: "main-header-hero",
    draggable: "false",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 15
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/bubbble.svg",
    alt: "bubbble",
    className: "main-header-bubble",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 15
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "overlay-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 9
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tools-wrapper",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    className: "tools-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 9
    }
  }, "Work with"), __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gap: 50,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      height: 50 + 'vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tools-items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/l_xd.svg",
    alt: "adobe xd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/figma-1.svg",
    alt: "figma",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/protopie.svg",
    alt: "protopie",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/affinity.png",
    alt: "affinity",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/ae.svg",
    alt: "after effects",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/l_Zeplin.svg",
    alt: "zeplin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/react.svg",
    alt: "react",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/l_redux.svg",
    alt: "redux",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/next-js.svg",
    alt: "nextjs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/vue-js.svg",
    alt: "vuejs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/nuxt-square.svg",
    alt: "nuxtjs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/wix.svg",
    alt: "wix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/webflow.svg",
    alt: "webflow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/github-1.svg",
    alt: "github",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/nginx.svg",
    alt: "nginx",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "tool-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/tools/lottiefiles.svg",
    alt: "lottiefiles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 21
    }
  }))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "specializing-wrapper",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    direction: "column",
    align: "center",
    className: "specializing-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    size: "32",
    weight: "500",
    className: "specializing-header-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, "Specializing in"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    size: "18",
    weight: "400",
    className: "specializing-header-subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 19
    }
  }, "I a UI/UX Designer & Frontend  Developer, and I love what I do.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "specializing-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    className: "specializing-square-dots",
    src: "/static/illustrations/dots.svg",
    alt: "dots",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 11
    }
  }), __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gap: 50,
    infinite: true,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      width: 100 + '%',
      height: 80 + 'vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "specializing-cards",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "line line1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "title",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 95
    }
  }, "UI"), " ", __jsx("span", {
    className: "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 111
    }
  }, "Design &")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 27
    }
  }, "Protoyping")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 27
    }
  }, "The beauty can be subjective depending on the viewer. I enjoy the challenge to create visual and prototyping and also leverage micro-interactions."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "line line2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "title",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 95
    }
  }, "UX"), " ", __jsx("span", {
    className: "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 111
    }
  }, "Design &")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 94
    }
  }, "Interaction"), " ", __jsx("span", {
    className: "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 119
    }
  }, "Design"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 27
    }
  }, "I design experience for user to achieve their objective(s) in the best way possible and how it looks and works."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "line line3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "title",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 95
    }
  }, "Frontend")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 94
    }
  }, "Development"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 27
    }
  }, "I turn the Design into Code, Build something great website that people love it. In practice of producing websites with a popular library / framework."))))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "about-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "about-content-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    draggable: "false",
    src: "/static/illustrations/square-dots.svg",
    alt: "square-dots",
    className: "square-art",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "about-content",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "about-content-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    variant: "dark",
    family: "quicksand",
    size: "32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }, "Krisna Ahroid. ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 34
    }
  }), "A UI/UX Designer & ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 22
    }
  }), "Frontend  Developer  based in  ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 34
    }
  }), "Jakarta, Indonesia")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "about-content-body",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "hi",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 19
    }
  }, "Hi There,"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "about-me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 19
    }
  }, "I\u2019m an enthusiastic UI/UX Designer & Frontend Developer, You can find my recent projects on ", __jsx("a", {
    href: "https://dribbble.com/ahroidlife",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 172
    }
  }, "Dribbble"), " and ", __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 264
    }
  }, "Instagram"), " or if you\u2019re interested in my design and if you are want to development an application, let me know."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "available-me",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 19
    }
  }, "I\u2019m currently available for ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 47
    }
  }), "freelance work."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "letmeknow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 19
    }
  }, "If you have a project that you want to get started, ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 71
    }
  }), "let me know.")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "about-content-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "gallery-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    className: "gallery",
    draggable: "false",
    alt: "gallery",
    src: "/static/illustrations/gallery.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 15
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-wrapper",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-header",
    direction: "column",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 12
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 19
    }
  }, "TESTIMONIALS"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    size: "32",
    className: "testimonial-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 19
    }
  }, "Customers's quotes"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    className: "testimonial-subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 19
    }
  }, "Don\u2019t take our word for it. Take theirs\u2026")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 12
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-content-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    className: "square-dots-down",
    alt: "square-dots-down",
    src: "/static/illustrations/square-dots-down.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    className: "quote-icon",
    alt: "quote-icon",
    src: "/static/illustrations/quote.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-content-left-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    size: "32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 23
    }
  }, "What other people ", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 41
    }
  }), " are saying"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-content-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    className: "testimonial-square-dots",
    alt: "testimonial-square-dots",
    src: "/static/illustrations/dots.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 19
    }
  }), __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3___default.a, {
    gap: 50,
    infinite: true,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      width: 100 + '%',
      height: 50 + 'vh'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/clients/hannari.png",
    alt: "hannari",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card-header-title",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    className: "testimonial-card-header-title-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 29
    }
  }, "Eduardo Hannari"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 29
    }
  }, "S\xE3o Paulo, Brazil "))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 27
    }
  }, "\u201CYou made it so simple and minimalist design.\u201D")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    family: "quicksand",
    className: "testimonial-card-role",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 27
    }
  }, "Marketing Manager at Digital Mind"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card-header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/clients/boby.png",
    alt: "boby",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card-header-title",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    className: "testimonial-card-header-title-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 29
    }
  }, "Boby Indra"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 29
    }
  }, "Jakarta, Indonesia "))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "testimonial-card-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 27
    }
  }, "\u201CWorking together has been a pleasure. Exectional experience.\u201D")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    family: "quicksand",
    className: "testimonial-card-role",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 27
    }
  }, "Founder at Konseline"))))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    id: "inquiry",
    className: "contact-wrapper",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-header",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    className: "contact-header-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 13
    }
  }, "Get in Touch"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    className: "contact-header-subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 13
    }
  }, "Let\u2019s start build something great together.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 11
    }
  }, "Let me know about you."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contac-content-item-first-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    placeholder: "First name",
    value: firstname,
    onChange: e => setFirstname(e.target.value),
    className: "contact-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    placeholder: "Last name",
    value: lastname,
    onChange: e => setLastname(e.target.value),
    className: "contact-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 15
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    placeholder: "Email address",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    width: "100%",
    className: "contact-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    placeholder: "Phone number (optional)",
    value: phone,
    onChange: e => setPhone(e.target.value),
    width: "100%",
    className: "contact-input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 11
    }
  }, "What budget range are you in? "), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "inputGroup input-group-first-item",
    onClick: () => setBudget('$500 - $1,000'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio1",
    name: "radio",
    type: "radio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 15
    }
  }, "$500 - $1,000")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "inputGroup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio2",
    name: "radio",
    type: "radio",
    onClick: () => setBudget('$1,000 - $5,000'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 15
    }
  }, "$1,000 - $5,000"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "inputGroup input-group-first-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio3",
    name: "radio",
    type: "radio",
    onClick: () => setBudget('$5,000 - $10,000'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 15
    }
  }, "$5,000 - $10,000")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "inputGroup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio4",
    name: "radio",
    type: "radio",
    onClick: () => setBudget('$10,000 - $50,000+'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 15
    }
  }, "$10,000 - $50,000+"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 11
    }
  }, "Tell me more about the project. "), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-dropdown animated zoomIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/ios-arrow-down.svg",
    alt: "arrow-down",
    className: "icon-arrow-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "placeholder",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 21
    }
  }, "Choose your Timeline"), __jsx("label", {
    className: "option",
    onClick: () => setTimeline('ASAP'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-speedometer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 525,
      columnNumber: 65
    }
  }), "ASAP")), __jsx("label", {
    className: "option",
    onClick: () => setTimeline('1 Month'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 65
    }
  }), "1 Month")), __jsx("label", {
    className: "option",
    onClick: () => setTimeline('3 Months'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 532,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 65
    }
  }), "3 Months")), __jsx("label", {
    className: "option",
    onClick: () => setTimeline('6 Months'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 65
    }
  }), "6 Months")), __jsx("label", {
    className: "option",
    onClick: () => setTimeline('1 Year'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 65
    }
  }), "1 Year")), __jsx("label", {
    className: "option",
    onClick: () => setTimeline('Ongoing'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 65
    }
  }), "Ongoing"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 11
    }
  }, __jsx("textarea", {
    className: "input-textarea",
    value: message,
    onChange: e => setMessage(e.target.value),
    placeholder: "Write us a few word about your project and we\u2019ll prepare a proposal for you within 24 hours.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "dark",
    size: "16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 13
    }
  }, "I promise to keep your personal information and never give it to anyone, for any reason.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "contact-content-submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    width: "150px",
    height: "40px",
    onClick: inquiry,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 13
    }
  }, "SUBMIT")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "footer-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "footer-social-media",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/ahroidlife/",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/linkedin.svg",
    alt: "linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/instagram.svg",
    alt: "instagram",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/krisnaahroid",
    rel: "noreferrer",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/facebook.svg",
    alt: "facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 25
    }
  }))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "footer-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    family: "quicksand",
    variant: "dark",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 15
    }
  }, "Copyright 2020. Designed and build by Krisna Ahroid with XD, ReactJs, and Golang.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "footer-languages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "languages-select",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "select-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 18
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588,
      columnNumber: 19
    }
  }, "ENGLISH"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Image"], {
    src: "/static/illustrations/ios-arrow-down.svg",
    alt: "arrow-down",
    className: "icon-arrow-dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 19
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["View"], {
    className: "select-item hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 18
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 19
    }
  }, "INDONESIA")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/index.knobs.json":
/*!********************************!*\
  !*** ./pages/index.knobs.json ***!
  \********************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"menus\":[{\"id\":\"1\",\"title\":\"Products\",\"url\":\"/products\"},{\"id\":\"2\",\"title\":\"Projects\",\"url\":\"/projects\"},{\"id\":\"3\",\"title\":\"Issues\",\"url\":\"/issues\"},{\"id\":\"4\",\"title\":\"Stories\",\"url\":\"stories\"}],\"sections\":[{\"id\":\"1\",\"items\":[{\"type\":\"large\",\"direction\":\"rows\",\"hero\":{\"image\":\"https://increment.com/art/12/case-studies-in-reachitecting/cover-1000-570f4642.jpeg\",\"class\":\"semi-half\"},\"content\":{\"title\":\"Case studies in rearchitecting\",\"subtitle\":\"How Buffer, ThoughtWorks, N26, and Zapier have shifted their software to respond to new contexts and met new needs.\"}},{\"childs\":[{\"id\":1,\"type\":\"half\",\"direction\":\"column\",\"hero\":{\"image\":\"https://increment.com/art/12/architecture-for-generations/cover-1000-106a85d6.jpeg\",\"class\":\"semi-half\"},\"content\":{\"title\":\"Case studies in rearchitecting\",\"subtitle\":\"How Buffer, ThoughtWorks, N26, and Zapier have shifted their software to respond to new contexts and met new needs.\"}},{\"id\":2,\"type\":\"half\",\"direction\":\"column\",\"hero\":{\"image\":\"https://increment.com/art/12/primer-on-functional-architecture/cover-1000-773fae0c.jpeg\",\"class\":\"semi-half\"},\"content\":{\"title\":\"Case studies in rearchitecting\",\"subtitle\":\"How Buffer, ThoughtWorks, N26, and Zapier have shifted their software to respond to new contexts and met new needs.\"}}]}]},{\"id\":\"2\",\"items\":[{\"id\":1,\"type\":\"large\",\"direction\":\"rows\",\"hero\":{\"image\":\"https://increment.com/art/12/case-studies-in-reachitecting/cover-1000-570f4642.jpeg\",\"class\":\"semi-half\"},\"content\":{\"title\":\"Case studies in rearchitecting\",\"subtitle\":\"How Buffer, ThoughtWorks, N26, and Zapier have shifted their software to respond to new contexts and met new needs.\"}},{\"childs\":[{\"id\":1,\"type\":\"half\",\"direction\":\"column\",\"hero\":{\"image\":\"https://increment.com/art/12/architecture-for-generations/cover-1000-106a85d6.jpeg\",\"class\":\"semi-half\"},\"content\":{\"title\":\"Case studies in rearchitecting\",\"subtitle\":\"How Buffer, ThoughtWorks, N26, and Zapier have shifted their software to respond to new contexts and met new needs.\"}},{\"id\":2,\"type\":\"half\",\"direction\":\"column\",\"hero\":{\"image\":\"https://increment.com/art/12/primer-on-functional-architecture/cover-1000-773fae0c.jpeg\",\"class\":\"semi-half\"},\"content\":{\"title\":\"Case studies in rearchitecting\",\"subtitle\":\"How Buffer, ThoughtWorks, N26, and Zapier have shifted their software to respond to new contexts and met new needs.\"}}]}]}]}}");

/***/ }),

/***/ "./static/css/main.scss":
/*!******************************!*\
  !*** ./static/css/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ahroidlife/Documents/nextjs/blog/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@egjs/react-flicking":
/*!***************************************!*\
  !*** external "@egjs/react-flicking" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@egjs/react-flicking");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lottie":
/*!*******************************!*\
  !*** external "react-lottie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lottie");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map