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
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/particles/useOnScreen */ "./components/particles/useOnScreen.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_illustrations_backpress_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/illustrations/backpress.svg */ "./static/illustrations/backpress.svg");
/* harmony import */ var _shots_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shots.scss */ "./pages/shots/shots.scss");
/* harmony import */ var _shots_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shots_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_lottiefiles_creativity_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/lottiefiles/creativity.json */ "./assets/lottiefiles/creativity.json");
var _assets_lottiefiles_creativity_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/lottiefiles/creativity.json */ "./assets/lottiefiles/creativity.json", 1);


var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/shots/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];











var Shots = function Shots() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      animated = _React$useState2[0],
      setAnimated = _React$useState2[1];

  var refLottie = react__WEBPACK_IMPORTED_MODULE_1__["useRef"]();
  var isAnimated = Object(_components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"])(refLottie);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    isAnimated ? setAnimated(true) : setAnimated(false);
    document.body.style.overflow = 'unset';
  }, [isAnimated]);
  var defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: _assets_lottiefiles_creativity_json__WEBPACK_IMPORTED_MODULE_9__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_3__["NextSeo"], {
    title: "Krisna Ahroid | Collections",
    description: "Krisna Ahroid. An UX Engineer & Frontend Developer based in Jakarta, Indonesia",
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.ahroidlife.co/',
      site_name: 'ahroidlife',
      title: 'Krisna Ahroid | Collections',
      description: 'Krisna Ahroid. An UX Engineer & Frontend Developer based in Jakarta, Indonesia',
      image: 'https://ahroidlife.com/static/illustrations/hero-image.png'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 1
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "shot-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column-h",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    position: "absolute",
    top: "3%",
    left: "2%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _static_illustrations_backpress_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shots-hero.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column-h column-h-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }, "Creativity"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "Inspiration"), " more ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 55
    }
  }), "than ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 65
    }
  }, "abstracts.")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }, "Working on a stylish collage or preparing the inspiring moodboard? You might need some abstract figures to fill the space and arrange your ideas in one harmonious composition."), __jsx("button", {
    className: "btn-shot header-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, "Explore"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "get-in-touch",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column column-l",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, "Creativity"), " is intelligence ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 65
    }
  }), "having ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 28
    }
  }, "fun"), "."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, "I love communication with design & code, creativity is nothing but a mindset my life to free to build something great!"), __jsx("button", {
    className: "btn-shot btn-outline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, "Get in Touch")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "column column-r",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "shots-lottiefile",
    ref: refLottie,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_4___default.a, {
    width: "100%",
    height: "100%",
    options: defaultOptions,
    isPaused: !animated,
    isStopped: !animated,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shots-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "tabs-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "tab-active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, "All"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 25
    }
  }, "Dashboard"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "Website"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "Illustration"), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, "Interactions"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Rows"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/p/B2Y83flA6mX/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shot-1.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "Lunafreya Ui Kit"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/p/CEculbGgl-m/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shot-2.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 29
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, "Notaimo"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/p/B_b_K_-Arnk/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/shot-3.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, "Landing page"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/p/CFPdbekAsXS/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/ps5.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 33
    }
  }, "Play Station 5"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "shot grid-item-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/p/CFlfCuCAv1J/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: "/static/unsplash/namaaz.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 33
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }, "Namaazdining"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Shots);

/***/ })

})
//# sourceMappingURL=shots.js.106aa25645351d5d06f6.hot-update.js.map