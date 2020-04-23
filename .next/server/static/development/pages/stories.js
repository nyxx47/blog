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

/***/ "./assets/illustrations/daily-stories.svg":
/*!************************************************!*\
  !*** ./assets/illustrations/daily-stories.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1OTAuMzUiIGhlaWdodD0iMzU3LjgzNiIgdmlld0JveD0iMCAwIDU5MC4zNSAzNTcuODM2Ij4KICA8ZyBpZD0iR3JvdXBfMTcxIiBkYXRhLW5hbWU9Ikdyb3VwIDE3MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTYyMC42NSAtMjEwLjE2NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzE3IiBkYXRhLW5hbWU9IlBhdGggMzE3IiBkPSJNMTE3ODMuMDY4LDI3NC40ODJoMjguMDMxdi0xNC43NGgzMC4xMTd2LTI5LjJoMTkuMjQ2VjE3Ny4yNzNsMTMuNzI5LTE0LjM1MywxNC4zNTMsMTQuMzUzdjY0LjI4Mmg5LjkxOHYxMi4wODdoNi45NjRWMjE4LjgyaDEzLjU2Mmw3LjAyOS0xMC4zNjFoMTYuODgybDcuNTI5LTQyLjg0My0yLjU3My0zNC43NDksMTIuNi0xMi42LDkuMTQ3LTk5LjEsOC41NjMsOTkuMSwxMi42LDEyLjYtMS45NDIsMzQuNzQ5LDEzLjgsOTQuMTI2aDQuNzk1TDEyMDE0LjYsMTQwLjRoMy42VjEyMi45NmgzVjE0MC40aDQuMTExdjU4LjM4NWg3LjgydjE4LjUzaDE5LjE1NHY0Mi40M2gxMS44NzhWMTc5Ljk4Mmg3VjE2OC4xMzdoMTguMjQ2di0zLjkzaDguNzUxdjMuOTNoMy44NnYyMC45NTVoNy40MTl2MjEuMzM5aDE2LjIyOVYyNDVoMTQuMjEzVjIzMC4zNjloMi45ODRWMjE5LjgyMmgyLjIzMnYxMC41NDdoNS43MDh2MTIuODYzaDE1Ljg3M3YzMS4wMTdoMjYuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMTA5LjIyMSAxOTIpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8zMTgiIGRhdGEtbmFtZT0iUGF0aCAzMTgiIGQ9Ik0xMTcxNS42NSwxNTEuOGgxMDAuMzI0cy0uNTk0LTE1LjcxNSwxNy43Ny0xNS42LDI0LjAyNS0xMy4yMTQsMjQuMDI1LTEzLjIxNCwxOC4zNDQtMTUuOTM0LDMxLjcxOSwwLDE2LjYxMSwxMy45OCwyNSwxMy4yMTQsMTUuMzg5LTIuMiwyMy41MTYsOC42NzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTA5NSAxNzIuMjE0KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzMxOSIgZGF0YS1uYW1lPSJQYXRoIDMxOSIgZD0iTTExODUyLjQ2LDE1OC4yMjVoOS43MzhzNS42NjQsMTEuMDYzLDEwLjY3OCw5LjMsMTQuNS0xMi44NDUsMTkuNTQ3LTExLjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTExNy4wNDkgMTY1Ljc5NCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8zMjAiIGRhdGEtbmFtZT0iUGF0aCAzMjAiIGQ9Ik0xMTc5MC42NzksMTY1LjAxM2gzNi40NDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTExMC40NDcgMTY4LjQ5NCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8zMjEiIGRhdGEtbmFtZT0iUGF0aCAzMjEiIGQ9Ik0xMjA3Mi45LDE3MC45NDdoMTcuMjI0cy0uOTA5LTE3LjcsMTcuMjcxLTE0LjAxNCwyNS44MzYtMTIuNjczLDI1LjgzNi0xMi42NzMsMTMuMzY2LTE0LjkxLDI3LjgxOSwwLDM3LjU4Ni0xMi4xNywzNy41ODYtMTIuMTcsMzMuNjg4LTIxLjQyNywzOS43NjgsMTIuMTcsMzIuNDgsMjYuNjg2LDMyLjQ4LDI2LjY4Niw5LjY3Ni00LjIxNiwzMC41NDYtNC4yMTZoNjUuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExMTU1LjkzMyAxNzQuODg1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICAgIDxwYXRoIGlkPSJTdWJ0cmFjdGlvbl8xIiBkYXRhLW5hbWU9IlN1YnRyYWN0aW9uIDEiIGQ9Ik0zNi4yNDcsNjMuMTA4aDBBMTMuODgzLDEzLjg4MywwLDAsMSwyNS45OSw1OC42MjZDMjEuNzI4LDU0LjIzLDE3LjE0MSw1MiwxMi4zNTUsNTJBMTcuOTE2LDE3LjkxNiwwLDAsMCwzLjQ0LDU0LjUzNSwzOC41NzQsMzguNTc0LDAsMCwxLDM4LjU4NiwwLDM4LjU1MywzOC41NTMsMCwwLDEsNzcuMTcyLDM4LjU4NmMwLC43MDYtLjAyLDEuNDI0LS4wNTksMi4xMzNhNTIuMjQ3LDUyLjI0NywwLDAsMC0xMy41MzcsNS43MzgsNzIuNzMyLDcyLjczMiwwLDAsMS04Ljc0OCw4LjMyNiw0OC41MjksNDguNTI5LDAsMCwxLTguNzgxLDUuNzI0QTIyLjUxNywyMi41MTcsMCwwLDEsMzYuMjQ3LDYzLjEwOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3OS4xMjUgMjYwLjUxOCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICA8ZyBpZD0iRWxsaXBzZV8xNzEiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNzEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5NiAyNzYpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgIDxlbGxpcHNlIGN4PSI0LjUiIGN5PSI1IiByeD0iNC41IiByeT0iNSIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxlbGxpcHNlIGN4PSI0LjUiIGN5PSI1IiByeD0iMy41IiByeT0iNCIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGcgaWQ9IkVsbGlwc2VfMTcyIiBkYXRhLW5hbWU9IkVsbGlwc2UgMTcyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDExIDI3NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgPGVsbGlwc2UgY3g9IjMuNSIgY3k9IjMiIHJ4PSIzLjUiIHJ5PSIzIiBzdHJva2U9Im5vbmUiLz4KICAgICAgPGVsbGlwc2UgY3g9IjMuNSIgY3k9IjMiIHJ4PSIyLjUiIHJ5PSIyIiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iRWxsaXBzZV8xNzMiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMTkgMjk3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2Utd2lkdGg9IjIiPgogICAgICA8ZWxsaXBzZSBjeD0iNi41IiBjeT0iNiIgcng9IjYuNSIgcnk9IjYiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8ZWxsaXBzZSBjeD0iNi41IiBjeT0iNiIgcng9IjUuNSIgcnk9IjUiIGZpbGw9Im5vbmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJQb2x5Z29uXzYiIGRhdGEtbmFtZT0iUG9seWdvbiA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDguMTM3IDIzOC4wMDIpIHJvdGF0ZSgxMykiIGZpbGw9Im5vbmUiPgogICAgICA8cGF0aCBkPSJNMTQuNzQ0LDBhNSw1LDAsMCwxLDQuMzE5LDIuNDgxbDIuOTU1LDUuMDY2YTUsNSwwLDAsMSwwLDUuMDM5bC0yLjk1NSw1LjA2NmE1LDUsMCwwLDEtNC4zMTksMi40ODFoLTZhNSw1LDAsMCwxLTQuMzE5LTIuNDgxTDEuNDcsMTIuNTg1YTUsNSwwLDAsMSwwLTUuMDM5TDQuNDI1LDIuNDgxQTUsNSwwLDAsMSw4Ljc0NCwwWiIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxwYXRoIGQ9Ik0gOC43NDM2ODM4MTUwMDI0NDEgMC45OTk5OTgwOTI2NTEzNjcyIEMgNy4zMjY1NDM4MDc5ODMzOTggMC45OTk5OTgwOTI2NTEzNjcyIDYuMDAyNjE0OTc0OTc1NTg2IDEuNzYwNDE3OTM4MjMyNDIyIDUuMjg4NTY0NjgyMDA2ODM2IDIuOTg0NTE4MDUxMTQ3NDYxIEwgMi4zMzM0MDQ1NDEwMTU2MjUgOC4wNTA0OTg5NjI0MDIzNDQgQyAxLjYwODIwMzg4NzkzOTQ1MyA5LjI5MzY5ODMxMDg1MjA1MSAxLjYwODIwMzg4NzkzOTQ1MyAxMC44MzgyNjgyODAwMjkzIDIuMzMzNDA0NTQxMDE1NjI1IDEyLjA4MTQ2ODU4MjE1MzMyIEwgNS4yODg1NjQ2ODIwMDY4MzYgMTcuMTQ3NDU5MDMwMTUxMzcgQyA2LjAwMjYxNDk3NDk3NTU4NiAxOC4zNzE1NTkxNDMwNjY0MSA3LjMyNjUzNDI3MTI0MDIzNCAxOS4xMzE5Nzg5ODg2NDc0NiA4Ljc0MzY3NDI3ODI1OTI3NyAxOS4xMzE5Nzg5ODg2NDc0NiBMIDE0Ljc0MzYyNDY4NzE5NDgyIDE5LjEzMTk3ODk4ODY0NzQ2IEMgMTYuMTYwNzU1MTU3NDcwNyAxOS4xMzE5Nzg5ODg2NDc0NiAxNy40ODQ2ODM5OTA0Nzg1MiAxOC4zNzE1NTkxNDMwNjY0MSAxOC4xOTg3MzQyODM0NDcyNyAxNy4xNDc0Njg1NjY4OTQ1MyBMIDIxLjE1MzkwMzk2MTE4MTY0IDEyLjA4MTQ3ODExODg5NjQ4IEMgMjEuODc5MTA0NjE0MjU3ODEgMTAuODM4Mjc4NzcwNDQ2NzggMjEuODc5MTA0NjE0MjU3ODEgOS4yOTM2OTgzMTA4NTIwNTEgMjEuMTUzOTAzOTYxMTgxNjQgOC4wNTA0OTg5NjI0MDIzNDQgTCAxOC4xOTg3MzQyODM0NDcyNyAyLjk4NDUxODA1MTE0NzQ2MSBDIDE3LjQ4NDY4Mzk5MDQ3ODUyIDEuNzYwNDE3OTM4MjMyNDIyIDE2LjE2MDc2NDY5NDIxMzg3IDAuOTk5OTk4MDkyNjUxMzY3MiAxNC43NDM2MjQ2ODcxOTQ4MiAwLjk5OTk5ODA5MjY1MTM2NzIgTCA4Ljc0MzY4MzgxNTAwMjQ0MSAwLjk5OTk5ODA5MjY1MTM2NzIgTSA4Ljc0MzY4MzgxNTAwMjQ0MSAtMS45MDczNDg2MzI4MTI1ZS0wNiBMIDE0Ljc0MzYyNDY4NzE5NDgyIC0xLjkwNzM0ODYzMjgxMjVlLTA2IEMgMTYuNTIxOTY1MDI2ODU1NDcgLTEuOTA3MzQ4NjMyODEyNWUtMDYgMTguMTY2NDYzODUxOTI4NzEgMC45NDQ1NTkwOTcyOTAwMzkxIDE5LjA2MjUxNTI1ODc4OTA2IDIuNDgwNjQ4MDQwNzcxNDg0IEwgMjIuMDE3Njg0OTM2NTIzNDQgNy41NDY2Mjg5NTIwMjYzNjcgQyAyMi45MjU4MjUxMTkwMTg1NSA5LjEwMzQ0ODg2Nzc5Nzg1MiAyMi45MjU4MjUxMTkwMTg1NSAxMS4wMjg1MjgyMTM1MDA5OCAyMi4wMTc2ODQ5MzY1MjM0NCAxMi41ODUzNDgxMjkyNzI0NiBMIDE5LjA2MjUxNTI1ODc4OTA2IDE3LjY1MTMzODU3NzI3MDUxIEMgMTguMTY2NDYzODUxOTI4NzEgMTkuMTg3NDE3OTg0MDA4NzkgMTYuNTIxOTY1MDI2ODU1NDcgMjAuMTMxOTc4OTg4NjQ3NDYgMTQuNzQzNjI0Njg3MTk0ODIgMjAuMTMxOTc4OTg4NjQ3NDYgTCA4Ljc0MzY3NDI3ODI1OTI3NyAyMC4xMzE5Nzg5ODg2NDc0NiBDIDYuOTY1MzQzNDc1MzQxNzk3IDIwLjEzMTk3ODk4ODY0NzQ2IDUuMzIwODM1MTEzNTI1MzkxIDE5LjE4NzQxNzk4NDAwODc5IDQuNDI0NzgzNzA2NjY1MDM5IDE3LjY1MTMyOTA0MDUyNzM0IEwgMS40Njk2MjM1NjU2NzM4MjggMTIuNTg1MzM4NTkyNTI5MyBDIDAuNTYxNDgzMzgzMTc4NzEwOSAxMS4wMjg1MjgyMTM1MDA5OCAwLjU2MTQ4MzM4MzE3ODcxMDkgOS4xMDM0MzgzNzczODAzNzEgMS40Njk2MjM1NjU2NzM4MjggNy41NDY2Mjg5NTIwMjYzNjcgTCA0LjQyNDc4MzcwNjY2NTAzOSAyLjQ4MDY0ODA0MDc3MTQ4NCBDIDUuMzIwODM1MTEzNTI1MzkxIDAuOTQ0NTU5MDk3MjkwMDM5MSA2Ljk2NTM0MzQ3NTM0MTc5NyAtMS45MDczNDg2MzI4MTI1ZS0wNiA4Ljc0MzY4MzgxNTAwMjQ0MSAtMS45MDczNDg2MzI4MTI1ZS0wNiBaIiBzdHJva2U9Im5vbmUiIGZpbGw9IiMxZTIxMjciLz4KICAgIDwvZz4KICAgIDxnIGlkPSJQb2x5Z29uXzciIGRhdGEtbmFtZT0iUG9seWdvbiA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDQuNzE5IDI3My40NzQpIHJvdGF0ZSgtMTEpIiBmaWxsPSJub25lIj4KICAgICAgPHBhdGggZD0iTTUuOTM2LDBhNSw1LDAsMCwxLDQuMzE5LDIuNDgxbC4wMTkuMDMzYTUsNSwwLDAsMSwwLDUuMDM5bC0uMDE5LjAzM2E1LDUsMCwwLDEtNC4zMTksMi40ODFINS44MDhBNSw1LDAsMCwxLDEuNDg5LDcuNTg1TDEuNDcsNy41NTJhNSw1LDAsMCwxLDAtNS4wMzlsLjAxOS0uMDMzQTUsNSwwLDAsMSw1LjgwOCwwWiIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxwYXRoIGQ9Ik0gNS44MDc3NjU5NjA2OTMzNTkgMS4wMDAwMDM4MTQ2OTcyNjYgQyA0LjM5MDYyNTk1MzY3NDMxNiAxLjAwMDAwMzgxNDY5NzI2NiAzLjA2NjcwNTcwMzczNTM1MiAxLjc2MDQyNDYxMzk1MjYzNyAyLjM1MjU4NTc5MjU0MTUwNCAyLjk4NDYyNDM4NTgzMzc0IEwgMi4zMzM0MDY0NDgzNjQyNTggMy4wMTc1MDQyMTUyNDA0NzkgQyAxLjYwODIwNTc5NTI4ODA4NiA0LjI2MDcwNDA0MDUyNzM0NCAxLjYwODIwNTc5NTI4ODA4NiA1LjgwNTI4NDUwMDEyMjA3IDIuMzMzNTE2MTIwOTEwNjQ1IDcuMDQ4NjY0MDkzMDE3NTc4IEwgMi4zNTI2NDU4NzQwMjM0MzggNy4wODE0NzQzMDQxOTkyMTkgQyAzLjA2NjY5NjE2Njk5MjE4OCA4LjMwNTU2MzkyNjY5Njc3NyA0LjM5MDYxNTk0MDA5Mzk5NCA5LjA2NTk4NDcyNTk1MjE0OCA1LjgwNzc2NTk2MDY5MzM1OSA5LjA2NTk4NDcyNTk1MjE0OCBMIDUuOTM1ODg2MzgzMDU2NjQxIDkuMDY1OTg0NzI1OTUyMTQ4IEMgNy4zNTMwMjYzOTAwNzU2ODQgOS4wNjU5ODQ3MjU5NTIxNDggOC42NzY5NDY2NDAwMTQ2NDggOC4zMDU1NjM5MjY2OTY3NzcgOS4zOTEwNjU1OTc1MzQxOCA3LjA4MTM2NDE1NDgxNTY3NCBMIDkuNDEwMjQ1ODk1Mzg1NzQyIDcuMDQ4NDg0MzI1NDA4OTM2IEMgMTAuMTM1NDQ2NTQ4NDYxOTEgNS44MDUyODQ1MDAxMjIwNyAxMC4xMzU0NDY1NDg0NjE5MSA0LjI2MDcwNDA0MDUyNzM0NCA5LjQxMDE5NjMwNDMyMTI4OSAzLjAxNzQyNDEwNjU5NzkgTCA5LjM5MTAwNjQ2OTcyNjU2MiAyLjk4NDUxNDIzNjQ1MDE5NSBDIDguNjc2OTQ2NjQwMDE0NjQ4IDEuNzYwNDI0NjEzOTUyNjM3IDcuMzUzMDI2MzkwMDc1Njg0IDEuMDAwMDAzODE0Njk3MjY2IDUuOTM1ODg2MzgzMDU2NjQxIDEuMDAwMDAzODE0Njk3MjY2IEwgNS44MDc3NjU5NjA2OTMzNTkgMS4wMDAwMDM4MTQ2OTcyNjYgTSA1LjgwNzc2NTk2MDY5MzM1OSAzLjgxNDY5NzI2NTYyNWUtMDYgTCA1LjkzNTg4NjM4MzA1NjY0MSAzLjgxNDY5NzI2NTYyNWUtMDYgQyA3LjcxNDIyNjI0NTg4MDEyNyAzLjgxNDY5NzI2NTYyNWUtMDYgOS4zNTg3MjY1MDE0NjQ4NDQgMC45NDQ1NTQzMjg5MTg0NTcgMTAuMjU0Nzg2NDkxMzk0MDQgMi40ODA2NDQyMjYwNzQyMTkgTCAxMC4yNzQwMjU5MTcwNTMyMiAyLjUxMzYzNDIwNDg2NDUwMiBDIDExLjE4MjE2NjA5OTU0ODM0IDQuMDcwNDU0MTIwNjM1OTg2IDExLjE4MjE2NjA5OTU0ODM0IDUuOTk1NTM0NDIwMDEzNDI4IDEwLjI3NDAyNTkxNzA1MzIyIDcuNTUyMzU0MzM1Nzg0OTEyIEwgMTAuMjU0Nzc2MDAwOTc2NTYgNy41ODUzNDQzMTQ1NzUxOTUgQyA5LjM1ODcyNjUwMTQ2NDg0NCA5LjEyMTQzNDIxMTczMDk1NyA3LjcxNDIyNjI0NTg4MDEyNyAxMC4wNjU5ODQ3MjU5NTIxNSA1LjkzNTg4NjM4MzA1NjY0MSAxMC4wNjU5ODQ3MjU5NTIxNSBMIDUuODA3NzY1OTYwNjkzMzU5IDEwLjA2NTk4NDcyNTk1MjE1IEMgNC4wMjk0MjYwOTc4Njk4NzMgMTAuMDY1OTg0NzI1OTUyMTUgMi4zODQ5MTYzMDU1NDE5OTIgOS4xMjE0MzQyMTE3MzA5NTcgMS40ODg4NjU4NTIzNTU5NTcgNy41ODUzNDQzMTQ1NzUxOTUgTCAxLjQ2OTYyNjQyNjY5Njc3NyA3LjU1MjM0NDMyMjIwNDU5IEMgMC41NjE0ODYyNDQyMDE2NjAyIDUuOTk1NTM0NDIwMDEzNDI4IDAuNTYxNDg2MjQ0MjAxNjYwMiA0LjA3MDQ1NDEyMDYzNTk4NiAxLjQ2OTYyNjQyNjY5Njc3NyAyLjUxMzYzNDIwNDg2NDUwMiBMIDEuNDg4ODc2MzQyNzczNDM4IDIuNDgwNjQ0MjI2MDc0MjE5IEMgMi4zODQ5MjU4NDIyODUxNTYgMC45NDQ1NTQzMjg5MTg0NTcgNC4wMjk0MjYwOTc4Njk4NzMgMy44MTQ2OTcyNjU2MjVlLTA2IDUuODA3NzY1OTYwNjkzMzU5IDMuODE0Njk3MjY1NjI1ZS0wNiBaIiBzdHJva2U9Im5vbmUiIGZpbGw9IiMxZTIxMjciLz4KICAgIDwvZz4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTM5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMzkiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwMjcgNDY2KSIgZmlsbD0iIzFlMjEyNyIvPgogICAgPGcgaWQ9IlJlY3RhbmdsZV8xNDAiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE0MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTA1NiA0NzUpIiBmaWxsPSIjZWRlZGVkIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgcng9IjUiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjI3IiBoZWlnaHQ9IjI3IiByeD0iNC41IiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzE0MSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTQxIiB3aWR0aD0iNDMiIGhlaWdodD0iNDMiIHJ4PSI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDE2IDUxMCkiIGZpbGw9IiMxZTIxMjciLz4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTQzIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDMiIHdpZHRoPSIxMjQiIGhlaWdodD0iMjkiIHJ4PSI3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2NzQgNTM5KSIgZmlsbD0iIzFlMjEyNyIvPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xNDQiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE0NCIgd2lkdGg9IjExIiBoZWlnaHQ9IjExIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjg1IDU0OCkiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzMyNCIgZGF0YS1uYW1lPSJQYXRoIDMyNCIgZD0iTTExOTc5LDMzM2gxMjMuMjg1VjI5Ny4wODZoLTIxLjU5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTExODEgMjIwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxnIGlkPSJSZWN0YW5nbGVfMTQyIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY3NCA1MDMpIiBmaWxsPSIjZWRlZGVkIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyMjkiIGhlaWdodD0iMjkiIHJ4PSI3IiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMjgiIGhlaWdodD0iMjgiIHJ4PSI2LjUiIGZpbGw9Im5vbmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJSZWN0YW5nbGVfMTQ1IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NyA1NDYpIiBmaWxsPSIjZWRlZGVkIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxyZWN0IHdpZHRoPSI1IiBoZWlnaHQ9IjE1IiByeD0iMi41IiBzdHJva2U9Im5vbmUiLz4KICAgICAgPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSI0IiBoZWlnaHQ9IjE0IiByeD0iMiIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGcgaWQ9IlJlY3RhbmdsZV8xNDciIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDE0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODMzIDU0NikiIGZpbGw9IiMxZTIxMjciIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgPHJlY3Qgd2lkdGg9IjUiIGhlaWdodD0iMTUiIHJ4PSIyLjUiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjQiIGhlaWdodD0iMTQiIHJ4PSIyIiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iUmVjdGFuZ2xlXzE0NiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4OTggNTQ2KSIgZmlsbD0iI2VkZWRlZCIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2Utd2lkdGg9IjEiPgogICAgICA8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSIxNSIgcng9IjIuNSIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iNCIgaGVpZ2h0PSIxNCIgcng9IjIiIGZpbGw9Im5vbmUiLz4KICAgIDwvZz4KICAgIDxnIGlkPSJFbGxpcHNlXzE3NCIgZGF0YS1uYW1lPSJFbGxpcHNlIDE3NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjg1IDUxNCkiIGZpbGw9IiNlZGVkZWQiIHN0cm9rZT0iIzFlMjEyNyIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjQiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iMy41IiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8ZyBpZD0iRWxsaXBzZV8xNzUiIGRhdGEtbmFtZT0iRWxsaXBzZSAxNzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY5OCA1MTQpIiBmaWxsPSIjZWRlZGVkIiBzdHJva2U9IiMxZTIxMjciIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSI0IiBzdHJva2U9Im5vbmUiLz4KICAgICAgPGNpcmNsZSBjeD0iNCIgY3k9IjQiIHI9IjMuNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGcgaWQ9IkVsbGlwc2VfMTc2IiBkYXRhLW5hbWU9IkVsbGlwc2UgMTc2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MTEgNTE0KSIgZmlsbD0iIzFlMjEyNyIgc3Ryb2tlPSIjMWUyMTI3IiBzdHJva2Utd2lkdGg9IjEiPgogICAgICA8Y2lyY2xlIGN4PSI0IiBjeT0iNCIgcj0iNCIgc3Ryb2tlPSJub25lIi8+CiAgICAgIDxjaXJjbGUgY3g9IjQiIGN5PSI0IiByPSIzLjUiIGZpbGw9Im5vbmUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");

/***/ }),

/***/ "./assets/lottiefiles/404.json":
/*!*************************************!*\
  !*** ./assets/lottiefiles/404.json ***!
  \*************************************/
/*! exports provided: v, fr, ip, op, w, h, nm, ddd, assets, layers, markers, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"v\":\"5.4.1\",\"fr\":30,\"ip\":0,\"op\":120,\"w\":1920,\"h\":1080,\"nm\":\"404\",\"ddd\":0,\"assets\":[{\"id\":\"comp_0\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"“404-5”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":30,\"s\":[10],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":90,\"s\":[10],\"e\":[0]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[283,146,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-6.5,16.5],[-1,-10],[-198,-30],[-10,30],[0,0],[269,43]],\"o\":[[0,0],[1,10],[198,30],[0,0],[0,0],[-213.312,-34.098]],\"v\":[[-261.233,-127.706],[-282.233,9.294],[-29.233,114.294],[261.267,89.794],[282.267,-40.206],[-8.733,-13.206]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411999990426,0.666999966491,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[282.398,164.081],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":4,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":0,\"nm\":\"404-text\",\"refId\":\"comp_1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":80,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[960,540,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":1920,\"h\":1080,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"“404-4”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":20,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":30,\"s\":[10],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[0],\"e\":[10]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":90,\"s\":[10],\"e\":[0]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":0,\"k\":[960,541,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[283,146,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[96.5,29.5],[0,0],[0.5,-47.5],[1,5]],\"o\":[[0,0],[0,0],[0,0],[-1,-5]],\"v\":[[-43.608,-102.5],[-63.608,25.5],[43.392,102.5],[63.892,-31]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411999990426,0.666999966491,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[501.773,151.874],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":4,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[31,-46],[-2,7],[-116,3],[0,0]],\"o\":[[0,0],[2,-7],[0,0],[0,0]],\"v\":[[-73,84],[-52,-45],[73,-84],[53,44]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411999990426,0.666999966491,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.165,84.374],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":4,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]},{\"id\":\"comp_1\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"形状图层 22\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-8.25,-11.5],[1.125,-10.75],[0,0],[0,0],[-6.161,29.683],[3.06,8.243]],\"o\":[[0,0],[0,0],[3.297,4.596],[-1.84,17.582],[0,0],[0,0],[2.75,-13.25],[-12.25,-33]],\"v\":[[11.5,-91.5],[13.75,-68.75],[33,-61.75],[36.125,31.25],[14.5,50.5],[14.5,72.5],[56.25,41],[53.75,-67.25]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"形状图层 21\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.5,-47],[-1.913,-25.823],[0,0],[0,0],[0.75,16],[-1.422,4.371],[0,0]],\"o\":[[0,0],[-0.297,3.989],[2.5,33.75],[0,0],[0,0],[-0.312,-6.663],[6.75,-20.75],[0,0]],\"v\":[[16,-92],[-28,-44],[-27,40.5],[15.25,72.625],[14.5,50.5],[-5.25,34],[-6.5,-49.25],[16,-69.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"形状图层 20\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[955.5,537.75,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[-8.25,-11.5],[1.125,-10.75],[0,0],[0,0],[-6.161,29.683],[3.06,8.243]],\"o\":[[0,0],[0,0],[3.297,4.596],[-1.84,17.582],[0,0],[0,0],[2.75,-13.25],[-12.25,-33]],\"v\":[[14.125,-92.375],[8.25,-70.125],[33,-61.75],[36.125,31.25],[14.5,50.5],[14.5,72.5],[54.5,40.5],[56.75,-65]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-5.25,-3],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"形状图层 19\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-10.5,-6],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[3.5,-47],[-1.913,-25.823],[0,0],[0,0],[0.75,16],[-3.5,8.5],[0,0]],\"o\":[[0,0],[-0.297,3.989],[2.5,33.75],[0,0],[0,0],[-0.312,-6.663],[4.345,-10.553],[0,0]],\"v\":[[16,-92],[-28,-44],[-27,40.5],[19.375,77.875],[16.125,51.25],[-5.25,34],[-4.5,-53],[16,-69.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[-10.5,-6],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":4,\"nm\":\"形状图层 18\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-137.5,-96.5],[-188,27],[-173.5,34.5],[-123.5,-88.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":0,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":1,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"形状图层 17\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-99,-91.625],[-123.5,-89],[-174.25,34],[-174.125,56],[-110.75,47.75],[-110.625,71.5],[-89.125,68.75],[-88.625,44.375],[-77.5,42.875],[-77.25,21.875],[-89.625,23.375],[-89.75,-23.25],[-111.125,-21.125],[-110.875,26.625],[-149.125,31]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"形状图层 16\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-95.5,11.25],[-97,24.875],[-77.125,22]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":4,\"nm\":\"形状图层 15\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-125.25,35.625],[-124.75,63.875],[-110.375,71.25],[-110.375,47.875]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.25,-28.75],[-124.25,18.25],[-110.625,26.375],[-110.25,-20.375]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"形状图层 14\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.188,18],[-187.5,25.25],[-174.688,34.062],[-109.75,26.75]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960784314,0.61568627451,0.956862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"形状图层 13\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-103.188,-32],[-124.125,-28.688],[-111.062,-20.625],[-89.125,-23.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":11,\"ty\":4,\"nm\":\"形状图层 12\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-112.125,-99.5],[-137.5,-96.375],[-123.688,-88.188],[-99.75,-91.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":12,\"ty\":4,\"nm\":\"形状图层 11\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1235.5,543,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.5,-0.5],[0,0],[0,0],[0,0]],\"o\":[[-0.5,0.5],[0,0],[0,0],[0,0]],\"v\":[[-187.5,27],[-187.875,48.875],[-174.375,55.5],[-174,34.25]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":13,\"ty\":4,\"nm\":\"形状图层 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-137.5,-96.5],[-188,27],[-173.5,34.5],[-123.5,-88.5]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.305882352941,0.58431372549,0.937254901961,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":0,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":1,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":14,\"ty\":4,\"nm\":\"形状图层 4\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-99,-91.625],[-123.5,-89],[-174.25,34],[-174.125,56],[-110.75,47.75],[-110.625,71.5],[-89.125,68.75],[-88.625,44.375],[-77.5,42.875],[-77.25,21.875],[-89.625,23.375],[-89.75,-23.25],[-111.125,-21.125],[-110.875,26.625],[-149.125,31]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.380392156863,0.650980392157,0.98431372549,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":15,\"ty\":4,\"nm\":\"形状图层 8\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-95.5,11.25],[-97,24.875],[-77.125,22]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":16,\"ty\":4,\"nm\":\"形状图层 7\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-125.25,35.625],[-124.75,63.875],[-110.375,71.25],[-110.375,47.875]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.25,-28.75],[-124.25,18.25],[-110.625,26.375],[-110.25,-20.375]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.286274509804,0.607843137255,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":17,\"ty\":4,\"nm\":\"形状图层 6\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-124.188,18],[-187.5,25.25],[-174.688,34.062],[-109.75,26.75]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.301960784314,0.61568627451,0.956862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":18,\"ty\":4,\"nm\":\"形状图层 5\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-103.188,-32],[-124.125,-28.688],[-111.062,-20.625],[-89.125,-23.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":19,\"ty\":4,\"nm\":\"形状图层 3\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-112.125,-99.5],[-137.5,-96.375],[-123.688,-88.188],[-99.75,-91.312]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.454901960784,0.682352941176,0.964705882353,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":20,\"ty\":4,\"nm\":\"形状图层 2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.5,-0.5],[0,0],[0,0],[0,0]],\"o\":[[-0.5,0.5],[0,0],[0,0],[0,0]],\"v\":[[-187.5,27],[-187.875,48.875],[-174.375,55.5],[-174,34.25]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.309803921569,0.592156862745,0.976470588235,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]},{\"id\":\"comp_2\",\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"“phone”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[-36],\"e\":[0]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[0],\"e\":[-35]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":0,\"s\":[50,60,0],\"e\":[50,100,0],\"to\":[0,6.66666650772095,0],\"ti\":[0,0,0]},{\"i\":{\"x\":0.649,\"y\":0.89},\"o\":{\"x\":0.302,\"y\":0},\"n\":\"0p649_0p89_0p302_0\",\"t\":30,\"s\":[50,100,0],\"e\":[50,60,0],\"to\":[0,0.77985352277756,0],\"ti\":[0,-1.61844849586487,0]},{\"i\":{\"x\":0.687,\"y\":0.834},\"o\":{\"x\":0.34,\"y\":0.107},\"n\":\"0p687_0p834_0p34_0p107\",\"t\":60,\"s\":[50,60,0],\"e\":[50,100,0],\"to\":[0,2.14594888687134,0],\"ti\":[0,-3.30003786087036,0]},{\"i\":{\"x\":0.794,\"y\":0.742},\"o\":{\"x\":0.413,\"y\":0.216},\"n\":\"0p794_0p742_0p413_0p216\",\"t\":90,\"s\":[50,100,0],\"e\":[50,60,0],\"to\":[0,3.99633884429932,0],\"ti\":[0,5.32553148269653,0]},{\"t\":120}],\"ix\":2},\"a\":{\"a\":0,\"k\":[19,36,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[10.647,1.117],[-10.609,1.433],[-10.647,-1.117],[10.609,-1.433]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[17.363,58.404],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[13.057,1.081],[-13.019,1.469],[-13.057,-1.081],[13.018,-1.469]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.696,53.266],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[6.969,1.596],[-6.918,1.803],[-6.969,-1.598],[6.919,-1.803]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.41,44.595],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.024,-1.644],[1.644,-0.026],[0.025,1.643],[-1.644,0.025]],\"o\":[[0.024,1.644],[-1.643,0.024],[-0.024,-1.644],[1.644,-0.024]],\"v\":[[2.976,-0.044],[0.044,2.977],[-2.976,0.044],[-0.044,-2.977]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[9.504,44.631],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":2,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[10.647,1.117],[-10.609,1.434],[-10.647,-1.117],[10.609,-1.434]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[16.846,30.914],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 5\",\"np\":2,\"cix\":2,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[13.056,1.081],[-13.018,1.469],[-13.056,-1.081],[13.018,-1.469]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.179,25.777],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 6\",\"np\":2,\"cix\":2,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[6.969,1.597],[-6.919,1.804],[-6.969,-1.597],[6.918,-1.804]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[20.893,17.105],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 7\",\"np\":2,\"cix\":2,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.024,-1.644],[1.644,-0.024],[0.025,1.644],[-1.644,0.025]],\"o\":[[0.024,1.644],[-1.643,0.024],[-0.024,-1.643],[1.644,-0.024]],\"v\":[[2.976,-0.044],[0.044,2.976],[-2.976,0.044],[-0.044,-2.976]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[8.987,17.14],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 8\",\"np\":2,\"cix\":2,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.534,0.015],[0,0],[-0.015,2.535],[0,0],[-1.621,-0.01],[0,0],[0.003,-0.363],[0,0],[-0.933,-0.005],[0,0],[-0.006,0.932],[0,0],[-0.363,-0.002],[0,0],[0.01,-1.622]],\"o\":[[-0.015,2.534],[0,0],[-2.535,-0.016],[0,0],[0.01,-1.621],[0,0],[0.362,0.002],[0,0],[-0.006,0.932],[0,0],[0.933,0.006],[0,0],[0.002,-0.363],[0,0],[1.622,0.009],[0,0]],\"v\":[[16.829,29.836],[12.212,34.398],[-12.626,34.249],[-17.188,29.633],[-16.824,-31.484],[-13.87,-34.402],[-9.583,-34.376],[-8.93,-33.716],[-8.932,-33.257],[-7.255,-31.559],[7.434,-31.473],[9.133,-33.15],[9.135,-33.609],[9.796,-34.262],[14.273,-34.234],[17.193,-31.281]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[18.974,35.876],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 9\",\"np\":2,\"cix\":2,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.534,0.015],[0,0],[-0.015,2.535],[0,0],[-1.621,-0.01],[0,0],[0.003,-0.363],[0,0],[-0.933,-0.005],[0,0],[-0.006,0.932],[0,0],[-0.363,-0.002],[0,0],[0.01,-1.622]],\"o\":[[-0.015,2.534],[0,0],[-2.535,-0.016],[0,0],[0.01,-1.621],[0,0],[0.362,0.002],[0,0],[-0.006,0.932],[0,0],[0.933,0.006],[0,0],[0.002,-0.363],[0,0],[1.622,0.009],[0,0]],\"v\":[[16.831,29.833],[12.215,34.395],[-12.623,34.247],[-17.185,29.63],[-16.821,-31.486],[-13.867,-34.405],[-9.58,-34.379],[-8.928,-33.719],[-8.93,-33.26],[-7.252,-31.562],[7.436,-31.475],[9.135,-33.152],[9.138,-33.611],[9.798,-34.264],[14.276,-34.237],[17.195,-31.283]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.534,0.015],[0,0],[0.014,-2.535],[0,0],[-2.535,-0.016],[0,0],[-0.015,2.535],[0,0]],\"o\":[[0,0],[-2.535,-0.015],[0,0],[-0.015,2.534],[0,0],[2.535,0.016],[0,0],[0.015,-2.535]],\"v\":[[14.41,-35.709],[-13.983,-35.878],[-18.599,-31.316],[-18.971,31.093],[-14.409,35.709],[13.983,35.878],[18.6,31.316],[18.972,-31.092]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[18.972,35.878],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 10\",\"np\":6,\"cix\":2,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}]}],\"layers\":[{\"ddd\":0,\"ind\":1,\"ty\":4,\"nm\":\"“macBook”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.388,\"y\":0.948},\"o\":{\"x\":0.283,\"y\":0},\"n\":\"0p388_0p948_0p283_0\",\"t\":0,\"s\":[1261.386,398.89,0],\"e\":[1373.386,330.89,0],\"to\":[10,-20.8333339691162,0],\"ti\":[-73.7790985107422,-3.55131125450134,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":60,\"s\":[1373.386,330.89,0],\"e\":[1261.386,398.89,0],\"to\":[3.18239498138428,0.15318261086941,0],\"ti\":[35.7236824035645,-80.5146408081055,0]},{\"t\":120}],\"ix\":2},\"a\":{\"a\":0,\"k\":[60.5,51,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[80,80,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":60,\"s\":[100,100,100],\"e\":[80,80,100]},{\"t\":120}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.638,-0.232],[0,0],[-0.525,0.441],[0,0],[0.641,0.233],[0,0],[0.525,-0.441]],\"o\":[[-0.524,0.441],[0,0],[0.641,0.232],[0,0],[0.524,-0.442],[0,0],[-0.638,-0.232],[0,0]],\"v\":[[-19.394,7.865],[-19.185,9.085],[-7.454,13.344],[-5.343,12.965],[19.394,-7.864],[19.182,-9.086],[7.451,-13.344],[5.343,-12.965]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.62400004069,0.795999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[84.292,74.796],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.673,-0.244],[0,0],[-0.55,0.463],[0,0],[0.676,0.245],[0,0],[0.552,-0.465]],\"o\":[[-0.55,0.463],[0,0],[0.675,0.245],[0,0],[0.552,-0.465],[0,0],[-0.671,-0.244],[0,0]],\"v\":[[-32.372,17.253],[-32.149,18.538],[-17.987,23.679],[-15.767,23.281],[32.37,-17.253],[32.149,-18.539],[17.987,-23.68],[15.765,-23.281]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.62400004069,0.795999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[64.188,68.317],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[37.711,-2.88],[13.659,-41.128],[-37.951,2.594],[-13.898,40.842]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.601,-0.956],[0,0],[0.806,-0.682],[0,0],[0.601,0.955],[0,0],[-0.805,0.683]],\"o\":[[0.805,-0.682],[0,0],[0.6,0.955],[0,0],[-0.805,0.682],[0,0],[-0.6,-0.955],[0,0]],\"v\":[[12.608,-43.171],[15.156,-42.673],[39.438,-4.061],[39.066,-1.096],[-12.848,42.885],[-15.394,42.391],[-39.676,3.777],[-39.307,0.81]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.62400004069,0.795999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[40.038,43.566],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":6,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.295,0.25],[-0.22,-0.35],[0.298,-0.252],[0.222,0.352]],\"o\":[[0.297,-0.252],[0.222,0.353],[-0.295,0.25],[-0.219,-0.35]],\"v\":[[-0.402,-0.635],[0.536,-0.454],[0.4,0.637],[-0.538,0.456]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[17.518,45.956],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":2,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.297,0.252],[-0.219,-0.35],[0.298,-0.252],[0.221,0.352]],\"o\":[[0.298,-0.252],[0.223,0.353],[-0.298,0.252],[-0.22,-0.35]],\"v\":[[-0.402,-0.637],[0.535,-0.454],[0.399,0.637],[-0.538,0.456]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.669,44.135],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 5\",\"np\":2,\"cix\":2,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.298,0.252],[-0.22,-0.35],[0.298,-0.252],[0.222,0.353]],\"o\":[[0.297,-0.252],[0.222,0.353],[-0.298,0.252],[-0.22,-0.35]],\"v\":[[-0.401,-0.637],[0.536,-0.455],[0.4,0.637],[-0.538,0.455]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.851000019148,0.910000011968,0.980000035903,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.819,42.313],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 6\",\"np\":2,\"cix\":2,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.503,2.968],[-2.674,-3.803],[0,0],[0,0],[2.612,4.155]],\"o\":[[3.382,-2.865],[0,0],[0,0],[-3.503,2.967],[-2.611,-4.15]],\"v\":[[-3.281,-7.569],[7.506,-5.824],[1.185,-0.469],[6.174,7.466],[-4.895,5.318]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[37.25,47.854],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 7\",\"np\":2,\"cix\":2,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.089,-0.14],[3.111,-2.636],[0,0]],\"o\":[[0.094,0.131],[2.322,3.692],[0,0],[0,0]],\"v\":[[1.508,-5.93],[1.787,-5.529],[0.356,5.93],[-4.109,-1.171]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.685999971278,0.823999980852,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[43.772,48.795],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 8\",\"np\":2,\"cix\":2,\"ix\":8,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[2.731,-2.954],[3.256,-2.119],[-2.731,2.954],[-3.256,2.118]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.364,40.91],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 9\",\"np\":2,\"cix\":2,\"ix\":9,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[1.499,-1.91],[2.023,-1.074],[-1.499,1.91],[-2.023,1.075]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.184,43.626],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 10\",\"np\":2,\"cix\":2,\"ix\":10,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[0.971,-1.463],[1.497,-0.628],[-0.971,1.463],[-1.497,0.628]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[51.706,45.742],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 11\",\"np\":2,\"cix\":2,\"ix\":11,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.776,-0.282],[0,0],[-0.636,0.536],[0,0],[0.776,0.282],[0,0],[0.637,-0.536]],\"o\":[[-0.637,0.536],[0,0],[0.775,0.282],[0,0],[0.638,-0.536],[0,0],[-0.775,-0.282],[0,0]],\"v\":[[-46.444,13.884],[-46.188,15.365],[-6.853,29.644],[-4.294,29.186],[46.67,-13.729],[46.414,-15.21],[7.079,-29.489],[4.52,-29.031]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[73.892,71.822],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 12\",\"np\":4,\"cix\":2,\"ix\":12,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[11.072,-0.999],[10.547,-1.834],[8.079,0.256],[8.604,1.091]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[11.077,-3.562],[10.551,-4.397],[7.03,-1.413],[7.553,-0.578]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[12.49,-7.323],[11.965,-8.158],[5.978,-3.085],[6.503,-2.251]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[2.322,3.692],[0.094,0.132],[0,0]],\"o\":[[3.112,-2.635],[-0.088,-0.141],[0,0],[0,0]],\"v\":[[1.997,8.61],[3.428,-2.847],[3.15,-3.249],[-2.469,1.51]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":4,\"ty\":\"sh\",\"ix\":5,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.503,2.968],[0,0],[0,0],[3.382,-2.864],[-2.611,-4.151]],\"o\":[[0,0],[0,0],[-2.674,-3.804],[-3.503,2.968],[2.612,4.154]],\"v\":[[1.294,9.206],[-3.697,1.272],[2.624,-4.083],[-8.161,-5.829],[-9.775,7.059]],\"c\":true},\"ix\":2},\"nm\":\"路径 5\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":5,\"ty\":\"sh\",\"ix\":6,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[-25.122,2.961],[10.088,-26.868],[14.499,-19.854],[15.499,-18.262],[20.111,-10.93],[21.715,-8.38],[25.122,-2.961],[-10.089,26.868]],\"c\":true},\"ix\":2},\"nm\":\"路径 6\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[42.131,46.114],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 13\",\"np\":8,\"cix\":2,\"ix\":13,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.295,0.25],[0.221,0.353],[0.298,-0.252],[-0.22,-0.35]],\"o\":[[0.298,-0.252],[-0.22,-0.349],[-0.295,0.25],[0.222,0.353]],\"v\":[[-15.593,14.186],[-15.456,13.094],[-16.395,12.913],[-16.531,14.005]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.297,0.252],[0.222,0.352],[0.298,-0.252],[-0.22,-0.349]],\"o\":[[0.298,-0.252],[-0.22,-0.35],[-0.297,0.251],[0.222,0.353]],\"v\":[[-11.292,10.542],[-11.156,9.452],[-12.093,9.27],[-12.229,10.361]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.298,0.252],[0.222,0.353],[0.297,-0.253],[-0.22,-0.351]],\"o\":[[0.297,-0.252],[-0.22,-0.35],[-0.298,0.252],[0.222,0.352]],\"v\":[[-13.443,12.365],[-13.307,11.273],[-14.243,11.092],[-14.38,12.184]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],\"v\":[[4.122,-6.178],[16.504,-16.667],[17.507,-15.072],[18.508,-13.48],[18.708,-13.161],[-16.503,16.667],[-18.708,13.163],[-2.312,-0.727],[-1.219,-1.652],[-0.178,-2.535],[0.931,-3.475],[1.972,-4.357],[3.081,-5.296]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[33.511,32.407],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 14\",\"np\":6,\"cix\":2,\"ix\":14,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[-37.831,2.736],[13.779,-40.986],[37.831,-2.738],[-13.778,40.986]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.910000011968,0.944999964097,0.976000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[39.917,43.424],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 15\",\"np\":2,\"cix\":2,\"ix\":15,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":2,\"ty\":4,\"nm\":\"“safari1”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":0,\"s\":[0],\"e\":[360]},{\"i\":{\"x\":[0.833],\"y\":[0.833]},\"o\":{\"x\":[0.167],\"y\":[0.167]},\"n\":[\"0p833_0p833_0p167_0p167\"],\"t\":60,\"s\":[360],\"e\":[0]},{\"t\":120}],\"ix\":10},\"p\":{\"a\":0,\"k\":[1008,701,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[30,30,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[9.297,-1.857],[-9.297,9.294],[1.86,-9.294]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.944999964097,0.944999964097,0.944999964097,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[24.465,35.538],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0]],\"v\":[[-1.857,9.297],[9.294,-9.297],[-9.294,1.86]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[35.538,24.465],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gf\",\"o\":{\"a\":0,\"k\":100,\"ix\":10},\"r\":1,\"g\":{\"p\":2,\"k\":{\"a\":0,\"k\":[0,1,1,1,1,0,0,0],\"ix\":9}},\"s\":{\"a\":0,\"k\":[0,0],\"ix\":5},\"e\":{\"a\":0,\"k\":[100,0],\"ix\":6},\"t\":1,\"nm\":\"渐变填充 1\",\"mn\":\"ADBE Vector Graphic - G-Fill\",\"hd\":true}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":3,\"ty\":4,\"nm\":\"“pc”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":-20,\"ix\":10},\"p\":{\"a\":1,\"k\":[{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":0,\"s\":[683,692,0],\"e\":[646,713,0],\"to\":[-19.25,-0.33333334326744,0],\"ti\":[3.62298774719238,-10.1576356887817,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_1_0p333_0\",\"t\":30,\"s\":[646,713,0],\"e\":[683.25,693.25,0],\"to\":[-0.05851480737329,0.16405579447746,0],\"ti\":[-25.3056774139404,-4.49727630615234,0]},{\"i\":{\"x\":0.667,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p667_1_0p333_0\",\"t\":60,\"s\":[683.25,693.25,0],\"e\":[646,712.25,0],\"to\":[0.8854306936264,0.15735703706741,0],\"ti\":[13.6526699066162,-24.7534523010254,0]},{\"i\":{\"x\":0.833,\"y\":1},\"o\":{\"x\":0.333,\"y\":0},\"n\":\"0p833_1_0p333_0\",\"t\":90,\"s\":[646,712.25,0],\"e\":[683.5,692.5,0],\"to\":[-3.27593660354614,5.93955183029175,0],\"ti\":[-32.3207092285156,-1.42831826210022,0]},{\"t\":120}],\"ix\":2},\"a\":{\"a\":0,\"k\":[68,50.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[80,80,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":30,\"s\":[100,100,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0\",\"0p667_1_0p167_0\"],\"t\":60,\"s\":[80,80,100],\"e\":[100,100,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":90,\"s\":[100,100,100],\"e\":[80,80,100]},{\"t\":120}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[1.166,0],[0,0],[0,1.166],[0,0],[-1.166,0],[0,0],[0,-1.165],[0,0]],\"o\":[[0,0],[-1.166,0],[0,0],[0,-1.165],[0,0],[1.166,0],[0,0],[0,1.166]],\"v\":[[32.047,2.279],[-32.046,2.279],[-34.157,0.169],[-34.157,-0.169],[-32.046,-2.28],[32.047,-2.28],[34.157,-0.169],[34.157,0.169]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[68.526,98.706],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[51.13,25.671],[-51.13,25.671],[-51.13,-25.671],[51.13,-25.671]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[78.285,45.614],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[9.547,25.671],[-9.547,25.671],[-9.547,-25.671],[9.547,-25.671]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[15.487,45.614],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[61.737,5.516],[-61.737,5.516],[-61.737,-5.516],[61.737,-5.516]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788000009574,0.870999983245,0.969000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.678,12.305],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":2,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[-0.292,0],[0,0],[0,-0.291]],\"o\":[[0,0],[0,0],[0,-0.291],[0,0],[0.291,0],[0,0]],\"v\":[[63.859,34.581],[-63.859,34.581],[-63.859,-34.053],[-63.331,-34.581],[63.332,-34.581],[63.859,-34.053]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.917999985639,0.952999997606,0.984000052658,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.678,38.824],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 5\",\"np\":2,\"cix\":2,\"ix\":5,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[4.812,0],[0,0],[0,4.813],[0,0],[-4.812,0],[0,0],[0,-4.812],[0,0]],\"o\":[[0,0],[-4.812,0],[0,0],[0,-4.812],[0,0],[4.812,0],[0,0],[0,4.813]],\"v\":[[58.964,42.855],[-58.964,42.855],[-67.677,34.142],[-67.677,-34.142],[-58.964,-42.855],[58.964,-42.855],[67.678,-34.142],[67.678,34.142]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.510000011968,0.709999952129,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[67.678,42.855],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 6\",\"np\":4,\"cix\":2,\"ix\":6,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[0,0],[0,0],[0,0]],\"o\":[[0,0],[0,0],[0,0],[0,0]],\"v\":[[16.336,11.457],[-16.336,11.457],[-7.85,-11.456],[7.85,-11.456]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.626999978458,0.804000016755,0.976000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[68.102,84.862],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 7\",\"np\":2,\"cix\":2,\"ix\":7,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":4,\"ty\":4,\"nm\":\"“line”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[995,494,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[285,210.5,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.407,0.535]],\"o\":[[0.4,-0.531],[0,0]],\"v\":[[-0.605,0.799],[0.605,-0.799]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[36.782,313.246],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-28.229,-40.264],[153.961,-107.938],[28.737,40.99],[-28.84,39.101]],\"o\":[[150.993,-104.144],[28.737,40.99],[-153.962,107.939],[-12.209,-17.414],[0,0]],\"v\":[[-52.117,-80.273],[270.508,-195.803],[43.77,73.856],[-287.036,195.077],[-259.106,106.757]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"d\":[{\"n\":\"d\",\"nm\":\"虚线\",\"v\":{\"a\":0,\"k\":3.982,\"ix\":1}},{\"n\":\"g\",\"nm\":\"间隙\",\"v\":{\"a\":0,\"k\":7.964,\"ix\":2}},{\"n\":\"o\",\"nm\":\"偏移\",\"v\":{\"a\":0,\"k\":0,\"ix\":7}}],\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[292.902,210.479],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0,0],[-0.546,0.382]],\"o\":[[0.546,-0.383],[0,0]],\"v\":[[-0.82,0.573],[0.819,-0.573]],\"c\":false},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":10,\"ml2\":{\"a\":0,\"k\":10,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[233.423,135.322],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":5,\"ty\":0,\"nm\":\"404动\",\"refId\":\"comp_0\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[960,540,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[960,540,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":1920,\"h\":1080,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":6,\"ty\":4,\"nm\":\"“google”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1051,393,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[21.5,21.5,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[110,110,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":36,\"s\":[80,80,100],\"e\":[110,110,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.167,0.167,0.167],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p167_0\",\"0p667_1_0p167_0\",\"0p667_1_0p167_0\"],\"t\":66,\"s\":[110,110,100],\"e\":[80,80,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":90,\"s\":[80,80,100],\"e\":[110,110,100]},{\"t\":136}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.478,-0.842],[0,0],[-7.561,-7.562],[-0.957,-3.415],[0,0],[3.084,-3.085]],\"o\":[[0,0],[8.346,-6.17],[2.688,2.687],[0,0],[-3.856,-1.391],[-0.721,0.714]],\"v\":[[-13.438,7.977],[-16.597,-3.817],[11.137,-1.732],[16.597,7.593],[-0.216,3.087],[-11.646,5.626]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.933000033509,0.294000004787,0.169000004787,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[25.254,7.977],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":4,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.021,-3.021],[3.021,-3.02],[3.021,3.022],[-3.018,3.018]],\"o\":[[3.021,3.021],[-3.021,3.022],[-3.021,-3.02],[3.017,-3.018]],\"v\":[[5.476,-5.477],[5.476,5.475],[-5.476,5.475],[-5.476,-5.477]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.325,0.579999976065,0.952999997606,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[21.317,21.319],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":2,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-2.833,0.03],[0,0],[1.943,1.943],[-8.154,8.335],[0,0],[-1.634,-1.633]],\"o\":[[0,0],[-2.378,-1.038],[-8.268,-8.268],[0,0],[0.378,2.114],[2.145,2.152]],\"v\":[[10.714,8.579],[2.072,17.221],[-4.472,12.753],[-4.64,-17.221],[-0.124,-0.378],[2.894,5.393]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.195999998205,0.647000002394,0.086000001197,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[10.714,23.641],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":4,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[2.465,4.183],[0,0],[4.769,-4.768],[7.05,1.795],[0,0],[-0.225,0.225]],\"o\":[[0,0],[0.697,6.221],[-5.516,5.517],[0,0],[0.239,-0.199],[3.584,-3.591]],\"v\":[[1.38,-13.43],[13.168,-10.271],[7.058,7.188],[-13.301,12.769],[-1.001,0.469],[-0.301,-0.17]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.948999980852,0.823999980852,0.286000001197,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[29.333,29.205],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 4\",\"np\":4,\"cix\":2,\"ix\":4,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":7,\"ty\":4,\"nm\":\"“internet”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":21,\"s\":[0],\"e\":[45]},{\"i\":{\"x\":[0.667],\"y\":[1]},\"o\":{\"x\":[0.333],\"y\":[0]},\"n\":[\"0p667_1_0p333_0\"],\"t\":60,\"s\":[45],\"e\":[0]},{\"t\":98}],\"ix\":10},\"p\":{\"a\":0,\"k\":[801,308,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[20,27,0],\"ix\":1},\"s\":{\"a\":1,\"k\":[{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":0,\"s\":[80,80,100],\"e\":[110,110,100]},{\"i\":{\"x\":[0.667,0.667,0.667],\"y\":[1,1,1]},\"o\":{\"x\":[0.333,0.333,0.333],\"y\":[0,0,0]},\"n\":[\"0p667_1_0p333_0\",\"0p667_1_0p333_0\",\"0p667_1_0p333_0\"],\"t\":60,\"s\":[110,110,100],\"e\":[80,80,100]},{\"t\":120}],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.874,-2.162],[0,0],[2.254,0.702],[2.144,-0.955],[0.977,-2.142]],\"o\":[[0,0],[-1.024,-2.095],[-2.254,-0.702],[-2.158,0.963],[-0.976,2.143]],\"v\":[[-9.141,0.667],[7.227,-6.632],[2.31,-10.827],[-4.286,-10.447],[-8.988,-5.79]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-0.848,-1.903],[-1.037,-0.373],[-1.289,0.576],[-1.708,2.253],[2.114,1.052],[1.585,1.701]],\"o\":[[0.575,1.289],[1.038,0.372],[1.723,-0.768],[-2.31,-0.263],[-2.113,-1.052],[-0.098,3.728]],\"v\":[[-13.325,21.75],[-10.906,24.243],[-7.415,23.939],[-2.267,19.407],[-8.902,17.433],[-14.45,13.303]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.542,1.214],[1.122,0.381],[1.259,-0.561],[1.72,-2.025],[-2.086,-0.589],[-1.776,-1.203]],\"o\":[[-0.554,-1.244],[-1.121,-0.38],[-1.619,0.722],[2.128,-0.104],[2.086,0.588],[-0.138,-2.365]],\"v\":[[10.112,-22.042],[7.597,-24.479],[4.026,-24.207],[-0.983,-20.086],[5.338,-19.36],[11.131,-16.674]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[-1.39,-3.119],[-0.215,-0.766],[0,0],[-2.3,-0.744],[-2.218,0.989],[-0.986,1.274],[-0.188,1.593],[0,0],[0.9,-2.594],[1.849,-2.019],[2.518,-1.122],[3.088,0.114],[2.489,-1.11],[1.758,3.941],[0.395,2.699],[-0.25,3.148],[-2.493,5.532],[1.805,-5.746],[-2.132,4.103],[-4.212,1.878],[-0.232,0.085],[-2.668,1.189],[-0.866,0.153],[-0.821,-0.128],[-0.687,-0.573],[-0.442,-0.99],[-0.011,-3.05]],\"o\":[[0.375,0.838],[0,0],[0.976,2.188],[2.299,0.745],[1.484,-0.661],[0.986,-1.276],[0,0],[0.223,2.758],[-0.901,2.594],[-1.849,2.02],[-2.803,1.25],[-2.642,3.263],[-3.552,1.585],[-0.769,-1.725],[-0.146,-1.013],[0.576,-6.726],[-2.23,2.414],[-0.886,-4.528],[2.132,-4.105],[0.45,-0.2],[3.04,-3.458],[0.959,-0.428],[0.867,-0.153],[0.821,0.129],[0.687,0.575],[0.775,1.738],[2.731,2.052]],\"v\":[[18.102,-8.354],[18.987,-5.946],[-6.891,5.593],[-1.977,9.992],[4.799,9.625],[8.504,6.721],[10.265,2.418],[19.775,-1.823],[18.759,6.204],[14.634,13.124],[8.084,17.837],[-0.752,19.54],[-8.448,26.098],[-16.413,22.562],[-18.158,15.927],[-18.003,9.686],[-13.399,-8.701],[-19.451,3.539],[-17.583,-9.409],[-8.067,-18.383],[-7.045,-18.812],[1.517,-25.783],[4.255,-26.654],[6.786,-26.691],[9.048,-25.638],[10.741,-23.292],[11.921,-16.11]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.325,0.757000014361,0.976000019148,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[19.841,26.779],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":8,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":8,\"ty\":0,\"nm\":\"phone.ai \",\"cl\":\"ai\",\"refId\":\"comp_2\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[627,340,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[50,80,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"w\":100,\"h\":160,\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":9,\"ty\":4,\"nm\":\"“safari”轮廓\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":100,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[1008,701,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[30,30,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.745,0],[0,0],[0,0.737],[-0.737,0],[0,0],[0,-0.737]],\"o\":[[0,0],[-0.737,0],[0,-0.737],[0,0],[0.738,0],[0,0.737]],\"v\":[[-23.305,1.341],[-28.132,1.341],[-29.473,0],[-28.132,-1.341],[-23.305,-1.341],[-21.964,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.737,0],[0,0],[0,0.737],[-0.737,0],[0,0],[0,-0.737]],\"o\":[[0,0],[-0.737,0],[0,-0.737],[0,0],[0.737,0],[0,0.737]],\"v\":[[28.133,1.341],[23.305,1.341],[21.965,0],[23.305,-1.341],[28.133,-1.341],[29.473,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":2,\"ty\":\"sh\",\"ix\":3,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.738,0],[0,0.737],[0,0],[-0.737,0],[0,-0.737],[0,0]],\"o\":[[-0.737,0],[0,0],[0,-0.737],[0.738,0],[0,0],[0,0.737]],\"v\":[[-0.003,29.47],[-1.344,28.129],[-1.344,23.301],[-0.003,21.96],[1.339,23.301],[1.339,28.129]],\"c\":true},\"ix\":2},\"nm\":\"路径 3\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":3,\"ty\":\"sh\",\"ix\":4,\"ks\":{\"a\":0,\"k\":{\"i\":[[0.738,0],[0,0.737],[0,0],[-0.738,0],[0,-0.738],[0,0]],\"o\":[[-0.738,0],[0,0],[0,-0.738],[0.738,0],[0,0],[0,0.737]],\"v\":[[0.004,-21.96],[-1.337,-23.301],[-1.337,-28.129],[0.004,-29.47],[1.344,-28.129],[1.344,-23.301]],\"c\":true},\"ix\":2},\"nm\":\"路径 4\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788235294118,0.870588235294,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[29.936,29.913],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 1\",\"np\":6,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.569,0],[0,-16.569],[-16.569,0],[0,16.569]],\"o\":[[-16.569,0],[0,16.569],[16.569,0],[0,-16.569]],\"v\":[[0,-30],[-30,0],[0,30],[30,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ind\":1,\"ty\":\"sh\",\"ix\":2,\"ks\":{\"a\":0,\"k\":{\"i\":[[-3.688,0],[-3.359,-1.422],[-2.508,-2.508],[-1.374,-3.252],[0,-3.687],[1.422,-3.359],[2.507,-2.508],[3.252,-1.375],[3.688,0],[3.359,1.421],[2.508,2.508],[1.375,3.253],[0,3.689],[-1.421,3.36],[-2.508,2.507],[-3.252,1.375]],\"o\":[[3.688,0],[3.252,1.375],[2.507,2.507],[1.422,3.366],[0,3.689],[-1.374,3.253],[-2.508,2.508],[-3.366,1.421],[-3.688,0],[-3.252,-1.375],[-2.508,-2.508],[-1.421,-3.365],[0,-3.687],[1.375,-3.252],[2.508,-2.508],[3.359,-1.422]],\"v\":[[0,-27.318],[10.628,-25.172],[19.312,-19.318],[25.165,-10.635],[27.311,-0.007],[25.165,10.621],[19.312,19.305],[10.628,25.159],[0,27.305],[-10.628,25.159],[-19.312,19.305],[-25.166,10.621],[-27.312,-0.007],[-25.166,-10.635],[-19.312,-19.318],[-10.628,-25.172]],\"c\":true},\"ix\":2},\"nm\":\"路径 2\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"mm\",\"mm\":1,\"nm\":\"合并路径 1\",\"mn\":\"ADBE Vector Filter - Merge\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.788235294118,0.870588235294,0.96862745098,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[30,30],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 2\",\"np\":6,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[16.568,0],[0,-16.569],[-16.569,0],[0,16.568]],\"o\":[[-16.569,0],[0,16.568],[16.568,0],[0,-16.569]],\"v\":[[0.001,-30],[-30,0],[0.001,30],[30,0]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.411764705882,0.721568627451,1,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[30,30],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"组 3\",\"np\":2,\"cix\":2,\"ix\":3,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0},{\"ddd\":0,\"ind\":10,\"ty\":4,\"nm\":\"形状图层 1\",\"sr\":1,\"ks\":{\"o\":{\"a\":0,\"k\":14,\"ix\":11},\"r\":{\"a\":0,\"k\":0,\"ix\":10},\"p\":{\"a\":0,\"k\":[976,554,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[109.241,116.953,100],\"ix\":6}},\"ao\":0,\"shapes\":[{\"ty\":\"gr\",\"it\":[{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.360784313725,0.611764705882,0.945098039216,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 2\",\"np\":2,\"cix\":2,\"ix\":1,\"mn\":\"ADBE Vector Group\",\"hd\":false},{\"ty\":\"gr\",\"it\":[{\"ind\":0,\"ty\":\"sh\",\"ix\":1,\"ks\":{\"a\":0,\"k\":{\"i\":[[220,-18],[-19.494,-72.19],[-28.826,-15.404],[7,-39],[-64,-82],[-84,6],[-46,-26],[-2,44],[-50,80],[56,100],[196,-8]],\"o\":[[-115.574,9.456],[17.613,65.226],[48.049,25.676],[-7,39],[64,82],[84,-6],[46,26],[2,-44],[50,-80],[-56,-100],[-196,8]],\"v\":[[-314,-346],[-465.542,-174.664],[-373.955,-73.521],[-320.323,44.971],[-360,244],[-74,192],[198,260],[300,204],[288,26],[458,-214],[60,-238]],\"c\":true},\"ix\":2},\"nm\":\"路径 1\",\"mn\":\"ADBE Vector Shape - Group\",\"hd\":false},{\"ty\":\"st\",\"c\":{\"a\":0,\"k\":[1,1,1,1],\"ix\":3},\"o\":{\"a\":0,\"k\":100,\"ix\":4},\"w\":{\"a\":0,\"k\":2,\"ix\":5},\"lc\":1,\"lj\":1,\"ml\":4,\"ml2\":{\"a\":0,\"k\":4,\"ix\":8},\"nm\":\"描边 1\",\"mn\":\"ADBE Vector Graphic - Stroke\",\"hd\":true},{\"ty\":\"fl\",\"c\":{\"a\":0,\"k\":[0.360784313725,0.611764705882,0.945098039216,1],\"ix\":4},\"o\":{\"a\":0,\"k\":100,\"ix\":5},\"r\":1,\"nm\":\"填充 1\",\"mn\":\"ADBE Vector Graphic - Fill\",\"hd\":false},{\"ty\":\"tr\",\"p\":{\"a\":0,\"k\":[0,0],\"ix\":2},\"a\":{\"a\":0,\"k\":[0,0],\"ix\":1},\"s\":{\"a\":0,\"k\":[100,100],\"ix\":3},\"r\":{\"a\":0,\"k\":0,\"ix\":6},\"o\":{\"a\":0,\"k\":100,\"ix\":7},\"sk\":{\"a\":0,\"k\":0,\"ix\":4},\"sa\":{\"a\":0,\"k\":0,\"ix\":5},\"nm\":\"变换\"}],\"nm\":\"形状 1\",\"np\":3,\"cix\":2,\"ix\":2,\"mn\":\"ADBE Vector Group\",\"hd\":false}],\"ip\":0,\"op\":120,\"st\":0,\"bm\":0}],\"markers\":[]}");

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
    value,
    placeholder,
    onChange,
    width,
    height,
    padding,
    bottom,
    left
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type", "value", "placeholder", "onChange", "width", "height", "padding", "bottom", "left"]);

  return __jsx(_input_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    width: width,
    height: height,
    padding: padding,
    bottom: bottom,
    left: left
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
      props = _objectWithoutProperties(_ref, ["children", "style", "isEqualFlex", "flexValue", "direction", "justify", "overflow", "isBoxShadow", "width", "isEqualWidth", "isEqualHeight", "height", "radius", "backgroundColor", "isEqualBackground", "isEqualDirection", "position", "bottom", "margin", "maxWidth", "top", "left", "border", "isPadding"]);

  return __jsx(_view_styles_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
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
      lineNumber: 34,
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
/* harmony import */ var _assets_lottiefiles_404_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/lottiefiles/404.json */ "./assets/lottiefiles/404.json");
var _assets_lottiefiles_404_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/lottiefiles/404.json */ "./assets/lottiefiles/404.json", 1);
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
    path: _assets_lottiefiles_404_json__WEBPACK_IMPORTED_MODULE_2__,
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
    size: "16",
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
    src: "/static/unsplash/aron-visuals-unsplash.jpg",
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
    title: "SOLO TRAVEL",
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
  }, "STORY"), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    size: "20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "OF MY LIFE")), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    family: "daily",
    size: "32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Bali")))));
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
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/forms/textIcon/texticon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const people = ["Siri", "Alexa", "Google", "Facebook", "Twitter", "Linkedin", "Sinkedin"];

const TextIcon = ({
  placeholder,
  left
}) => {
  const [searchTerm, setSearchTerm] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  const [searchResults, setSearchResults] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const results = people.filter(person => person.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    position: "relative",
    style: {
      left: left
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "inputTextIcon",
    placeholder: placeholder,
    width: "300px",
    padding: "5px 30px 5px 45px",
    value: searchTerm,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "search-results",
    direction: "column",
    isEqualFlex: "none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    height: "30px",
    justify: "space-between",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    weight: "medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "Results of ", __jsx("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 58
    }
  }, "Trigonometry"))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "rounded-counter",
    justify: "center",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, "4")))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, searchResults.map(item => __jsx("li", {
    key: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, item))))));
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





const SliderCategories = () => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    padding: "100px 0 0 100px",
    isEqualHeight: "50vh",
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    margin: " 0 0 50px 0",
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
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["BackgroundImage"], {
    src: "/static/unsplash/nourdine-diouane-HITtu6zs9Sg-unsplash.jpg",
    size: "cover",
    className: "card-categories-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories-content",
    align: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "24",
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, "Adventures")))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["BackgroundImage"], {
    src: "/static/unsplash/sincerely-media-nGrfKmtwv24-unsplash.jpg",
    size: "cover",
    className: "card-categories-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories-content",
    align: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "24",
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  }, "Level Up")))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["BackgroundImage"], {
    src: "/static/unsplash/freddy-castro-u3ajSXhZM_U-unsplash.jpg",
    size: "cover",
    className: "card-categories-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "card-categories-content",
    align: "flex-end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "24",
    variant: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, "Buckets")))))));
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
  props
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("FLICKING :: ", _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_1___default.a);
  });
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    padding: "100px 0 0 100px",
    isEqualHeight: "70vh",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    width: "25%",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    direction: "column",
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    family: "daily",
    size: "32",
    width: "50px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Most Popular"), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    margin: "30px 30px 0  0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "We write various stories here for the present and the future. You can find various stories about us sharing knowledge, adventure and whatever it is here.")), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    margin: "0  0 50px 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_3__["CardStories"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_3__["CardStories"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_3__["CardStories"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_3__["CardStories"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_3__["CardStories"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_3__["CardStories"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }))));
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
/* harmony import */ var _footer_knobs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.knobs.json */ "./components/organisms/footer/footer.knobs.json");
var _footer_knobs_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./footer.knobs.json */ "./components/organisms/footer/footer.knobs.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/footer/footer.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  menu,
  submenu
} = _footer_knobs_json__WEBPACK_IMPORTED_MODULE_3__.data;

const Footer = ({
  props
}) => {
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    isEqualHeight: "80vh",
    justifyContent: "center",
    backgroundColor: "#EDEDED",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
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
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    items: menu.items.default,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 22,
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
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/header/header.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = ({
  direction,
  items
}) => {
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
    width: "2em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }))), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["TextIcon"], {
    placeholder: "What are you looking for?",
    left: "30px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    direction: direction,
    items: items,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })));
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
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    height: "100%",
    flexValue: "1",
    direction: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    direction: "column",
    align: "flex-start",
    padding: "150px 0px 0px 0px",
    isPadding: "0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    family: "daily",
    size: "32",
    width: "100px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  }, title), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    margin: "50px 0px 0px 0px",
    isEqualMargin: "20px 0px 0px 0px",
    width: "45%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, subtitle), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_2__["Navigation"], {
    items: items,
    padding: "50px 0px 0px 0px",
    isEqualPadding: "20px 0 0 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "arrowStraight",
    width: "10em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    flexValue: "1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    draggable: "false",
    src: img,
    width: "100%",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 13
  }
}, title)), __jsx(_organisms__WEBPACK_IMPORTED_MODULE_2__["Header"], {
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
  title,
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

/***/ "./pages/stories/index.js":
/*!********************************!*\
  !*** ./pages/stories/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stories_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stories.jsx */ "./pages/stories/stories.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _stories_jsx__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./pages/stories/stories.jsx":
/*!***********************************!*\
  !*** ./pages/stories/stories.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms */ "./components/organisms/index.js");
/* harmony import */ var _assets_illustrations_daily_stories_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/illustrations/daily-stories.svg */ "./assets/illustrations/daily-stories.svg");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/molecules */ "./components/molecules/index.js");
/* harmony import */ var _stories_knobs_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stories.knobs.json */ "./pages/stories/stories.knobs.json");
var _stories_knobs_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./stories.knobs.json */ "./pages/stories/stories.knobs.json", 1);
var _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/stories/stories.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const {
  item
} = _stories_knobs_json__WEBPACK_IMPORTED_MODULE_6__;

const Stories = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.overflow = 'unset';
  });
  return __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_1__["BlogLayout"], {
    title: "Stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    title: "Stories Resources",
    subtitle: "The more that you read the more things you will know.",
    img: _assets_illustrations_daily_stories_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["SliderHero"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["SliderCategories"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    padding: "100px",
    flexDirection: "column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    margin: "0 0 50px 0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    family: "daily",
    size: "32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Our Stories")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["Rows"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "grid-item-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["CardStories"], {
    className: "card-our-stories",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ }),

/***/ "./pages/stories/stories.knobs.json":
/*!******************************************!*\
  !*** ./pages/stories/stories.knobs.json ***!
  \******************************************/
/*! exports provided: item, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"item\":{\"type\":\"half\",\"direction\":\"column\",\"hero\":{\"image\":\"https://increment.com/art/12/architecture-for-generations/cover-1000-106a85d6.jpeg\",\"class\":\"semi-half\"},\"content\":{\"title\":\"Case studies in rearchitecting\",\"subtitle\":\"How Buffer, ThoughtWorks, N26, and Zapier have shifted their software to respond to new contexts and met new needs.\"}}}");

/***/ }),

/***/ "./static/css/main.scss":
/*!******************************!*\
  !*** ./static/css/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./pages/stories/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ahroidlife/Documents/nextjs/blog/pages/stories/index.js */"./pages/stories/index.js");


/***/ }),

/***/ "@egjs/react-flicking":
/*!***************************************!*\
  !*** external "@egjs/react-flicking" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@egjs/react-flicking");

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
//# sourceMappingURL=stories.js.map