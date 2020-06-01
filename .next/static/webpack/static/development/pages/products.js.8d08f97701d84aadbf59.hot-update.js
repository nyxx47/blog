webpackHotUpdate("static/development/pages/products.js",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _static_illustrations_backpress_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/illustrations/backpress.svg */ "./static/illustrations/backpress.svg");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lottie */ "./node_modules/react-lottie/dist/index.js");
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/particles/useOnScreen */ "./components/particles/useOnScreen.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/ReactPlayer.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_lottiefiles_lunafreya_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/lottiefiles/lunafreya.json */ "./assets/lottiefiles/lunafreya.json");
var _assets_lottiefiles_lunafreya_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/lottiefiles/lunafreya.json */ "./assets/lottiefiles/lunafreya.json", 1);
/* harmony import */ var _assets_lottiefiles_summary_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/lottiefiles/summary.json */ "./assets/lottiefiles/summary.json");
var _assets_lottiefiles_summary_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/lottiefiles/summary.json */ "./assets/lottiefiles/summary.json", 1);
/* harmony import */ var _product_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product.scss */ "./pages/products/product.scss");
/* harmony import */ var _product_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_product_scss__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/products/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Products = function Products() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      luna = _useState[0],
      setLuna = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      summary = _useState2[0],
      setSummary = _useState2[1];

  var lunaRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var summaryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var isLuna = Object(_components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"])(lunaRef);
  var isSummary = Object(_components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_5__["default"])(summaryRef);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isLuna ? setLuna(true) : setLuna(false);
    isSummary ? setSummary(true) : setSummary(false);
    document.body.style.overflow = 'unset';
  }, [isLuna, isSummary]);
  var defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: _assets_lottiefiles_lunafreya_json__WEBPACK_IMPORTED_MODULE_8__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  var defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: _assets_lottiefiles_summary_json__WEBPACK_IMPORTED_MODULE_9__,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_7__["NextSeo"], {
    title: "Krisna Ahroid | Products",
    description: "Krisna Ahroid. Here we go, This is my products.",
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      url: 'https://www.ahroidlife.com/products',
      site_name: 'ahroidlife',
      title: 'Krisna Ahroid | Products',
      description: 'Krisna Ahroid. Here we go, This is my products.',
      image: 'https://res.cloudinary.com/ahroidlife/image/upload/v1588948107/daily-stories_xssful.svg'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "product-container illustration-outline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    position: "absolute",
    top: "3%",
    left: "2%",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _static_illustrations_backpress_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, "Lunafreya"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 25
    }
  }, "Lunafreya is a UI Kit created to help you introduce your shoppping app, boost your creativity and save you time.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "hero-lottie",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    ref: lunaRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_4___default.a, {
    options: defaultOptions,
    height: "unset",
    width: "80%",
    isPaused: !luna,
    isStopped: !luna,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "highlights",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/box-dark.svg",
    className: "box-dark",
    draggable: "false",
    alt: "box-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/box-grey.svg",
    className: "box-grey",
    draggable: "false",
    alt: "box-grey",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "pricing",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 25
    }
  }, "$57"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }, "$82")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, "HIGHLIGHTS"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, "Full Customizable")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "features",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "feature",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/screens.svg",
    alt: "screens",
    draggable: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "27+ Screens"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 33
    }
  }, "On screen iPhone X")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "feature",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/typo.svg",
    alt: "typography",
    draggable: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 33
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 33
    }
  }, "Typography"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, "Montserrat & Nunito Fonts family ")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "feature",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/vector.svg",
    alt: "vector",
    draggable: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 33
    }
  }, "Vector Base"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, "Can modify your style"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "summary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }, __jsx("div", {
    ref: summaryRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 29
    }
  }), __jsx(react_lottie__WEBPACK_IMPORTED_MODULE_4___default.a, {
    options: defaultOptions2,
    height: "unset",
    width: "unset",
    isPaused: !summary,
    isStopped: !summary,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/lunafreya.svg",
    alt: "lunafreya",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 33
    }
  }), __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }, "Clean, minimal & modern design"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 33
    }
  }, "You can easily make this kit your own by simply modifying the global text and color styles and adding your own content. Available for the latest versions of Adobe XD."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  }, "Buy Now"), __jsx("p", {
    className: "coming-soon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, "Coming soon, Stay tuned for something Awesome.")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "preview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, "PREVIEW"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  }, "Full Interaction Design")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 29
    }
  }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_6___default.a, {
    url: "/static/videos/MainScreen.mp4",
    width: "100%",
    playing: true,
    loop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 33
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_6___default.a, {
    url: "/static/videos/SplashOverview.mp4",
    width: "100%",
    playing: true,
    loop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 33
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 29
    }
  }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_6___default.a, {
    url: "/static/videos/AddToCartOverview.mp4",
    width: "100%",
    playing: true,
    loop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 33
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 29
    }
  }, __jsx(react_player__WEBPACK_IMPORTED_MODULE_6___default.a, {
    url: "/static/videos/ForgotPasswordOverview.mp4",
    width: "100%",
    playing: true,
    loop: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 33
    }
  }))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "footer-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "footer-social-media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/ahroidlife/",
    rel: "noreferrer",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/linkedin.svg",
    alt: "linkedin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 33
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    rel: "noreferrer",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/instagram.svg",
    alt: "instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 33
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/krisnaahroid",
    rel: "noreferrer",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/facebook.svg",
    alt: "facebook",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 33
    }
  }))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "footer-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    family: "quicksand",
    variant: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 21
    }
  }, "Copyright 2020. Designed and build by Krisna Ahroid with XD, ReactJs, and Golang.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "footer-languages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "languages-select",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "select-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }, "ENGLISH"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/illustrations/ios-arrow-down.svg",
    alt: "arrow-down",
    className: "icon-arrow-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: "select-item hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 25
    }
  }, "INDONESIA")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=products.js.8d08f97701d84aadbf59.hot-update.js.map