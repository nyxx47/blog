webpackHotUpdate("static/development/pages/stories.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/articles/sliderHero/sliderHero.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SliderHero = function SliderHero(_ref) {
  var props = _ref.props;
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Title Heading")), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Content")));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderHero);

/***/ }),

/***/ "./components/organisms/index.js":
/*!***************************************!*\
  !*** ./components/organisms/index.js ***!
  \***************************************/
/*! exports provided: Header, Footer, Hero, ArticleText, ArticleImage, SliderHero */
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








/***/ }),

/***/ "./pages/stories/stories.jsx":
/*!***********************************!*\
  !*** ./pages/stories/stories.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms */ "./components/organisms/index.js");
/* harmony import */ var _assets_illustrations_daily_stories_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/illustrations/daily-stories.svg */ "./assets/illustrations/daily-stories.svg");
var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/stories/stories.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Stories = function Stories() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    title: "Stories Resources",
    subtitle: "The more that you read the more things you will know.",
    img: _assets_illustrations_daily_stories_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }), __jsx(ArticleHero, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ })

})
//# sourceMappingURL=stories.js.bcfe867346a8b1caef84.hot-update.js.map