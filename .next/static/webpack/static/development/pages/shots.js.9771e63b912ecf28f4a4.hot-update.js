webpackHotUpdate("static/development/pages/shots.js",{

/***/ "./pages/shots/index.js":
/*!******************************!*\
  !*** ./pages/shots/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/particles/useOnScreen */ "./components/particles/useOnScreen.js");
/* harmony import */ var _static_illustrations_backpress_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/illustrations/backpress.svg */ "./static/illustrations/backpress.svg");
/* harmony import */ var _shots_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shots.scss */ "./pages/shots/shots.scss");
/* harmony import */ var _shots_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shots_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_lottiefiles_creativity_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/lottiefiles/creativity.json */ "./assets/lottiefiles/creativity.json");
var _assets_lottiefiles_creativity_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/lottiefiles/creativity.json */ "./assets/lottiefiles/creativity.json", 1);


var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/shots/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];









var Shots = function Shots() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      animated = _React$useState2[0],
      setAnimated = _React$useState2[1];

  var refLottie = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
  var isAnimated = Object(_components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_4__["default"])(refLottie);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    isAnimated ? setAnimated(true) : setAnimated(false);
  }, [isAnimated]);
  var defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: _assets_lottiefiles_creativity_json__WEBPACK_IMPORTED_MODULE_7__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "shot-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column-h",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    position: "absolute",
    top: "3%",
    left: "2%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _static_illustrations_backpress_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shots-hero.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column-h column-h-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Creativity"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "Inspiration"), " more ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 55
    }
  }), "than ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 65
    }
  }, "abstracts.")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Working on a stylish collage or preparing the inspiring moodboard? You might need some abstract figures to fill the space and arrange your ideas in one harmonious composition."), __jsx("button", {
    className: "btn-shot header-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Explore"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "get-in-touch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column column-l",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, "Creativity"), " is intelligence ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 65
    }
  }), "having ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 28
    }
  }, "fun"), "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, "I love communication with design & code, creativity is nothing but a mindset my life to free to build something great!"), __jsx("button", {
    className: "btn-shot btn-outline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "Get in Touch")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column column-r",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "shots-lottiefile",
    ref: refLottie,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_3___default.a, {
    width: "100%",
    height: "100%",
    options: defaultOptions,
    isPaused: !animated,
    isStopped: !animated,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shots-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tabs-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "tab-active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "All"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, "Dashboard"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Website"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, "Illustration"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "Interactions"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Rows"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shot-1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, "Lunafreya Ui Kit")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shot-2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, "Notaimo")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shot-3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 29
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 29
    }
  }, "My own Landing page"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Shots);

/***/ })

})
//# sourceMappingURL=shots.js.9771e63b912ecf28f4a4.hot-update.js.map