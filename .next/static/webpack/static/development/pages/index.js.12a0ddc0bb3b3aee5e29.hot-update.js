webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @egjs/react-flicking */ "./node_modules/@egjs/react-flicking/dist/flicking.esm.js");
/* harmony import */ var _components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/particles/useOnScreen */ "./components/particles/useOnScreen.js");
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_molecules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/molecules */ "./components/molecules/index.js");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _assets_lottiefiles_loading_circle_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/lottiefiles/loading-circle.json */ "./assets/lottiefiles/loading-circle.json");
var _assets_lottiefiles_loading_circle_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/lottiefiles/loading-circle.json */ "./assets/lottiefiles/loading-circle.json", 1);
/* harmony import */ var _assets_lottiefiles_success_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/lottiefiles/success.json */ "./assets/lottiefiles/success.json");
var _assets_lottiefiles_success_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/lottiefiles/success.json */ "./assets/lottiefiles/success.json", 1);
/* harmony import */ var _index_knobs_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.knobs.json */ "./pages/index.knobs.json");
var _index_knobs_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./index.knobs.json */ "./pages/index.knobs.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var menus = _index_knobs_json__WEBPACK_IMPORTED_MODULE_10__.data.menus;

var App = function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      overlay = _useState2[0],
      setOverlay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Good Morning'),
      greeting = _useState3[0],
      setGreeting = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('01 Jan 2020'),
      date = _useState4[0],
      setDate = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState5[0],
      setLoading = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      firstname = _useState7[0],
      setFirstname = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      lastname = _useState8[0],
      setLastname = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      email = _useState9[0],
      setEmail = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      phone = _useState10[0],
      setPhone = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      budget = _useState11[0],
      setBudget = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      timeline = _useState12[0],
      setTimeline = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState13[0],
      setMessage = _useState13[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var isVisible = Object(_components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_4__["default"])(ref);

  var inquiry = function inquiry() {
    var payload = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      budget: budget,
      timeline: timeline,
      message: message
    };
    setVisible(true);
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://localhost:8080" + '/api/inquiry/create', JSON.stringify(payload)).then(function (res) {
      setTimeout(function () {
        setLoading(false);
      }, 2000);
      setFirstname('');
      setLastname('');
      setEmail('');
      setPhone('');
      setMessage('');
      console.log("RES :: ", res);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log("The component is ".concat(isVisible ? "visible" : "not visible", "."));
    var date = new Date();
    var time = date.getHours();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    setDate("".concat(date.getDate(), " ").concat(months[date.getMonth()], " ").concat(date.getFullYear()));

    if (time < 12 && time > 5) {
      setGreeting('Good Morning');
    } else if (time > 12 && time < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, [isVisible]);

  var toInquiry = function toInquiry() {
    document.getElementById('inquiry').scrollIntoView({
      behavior: 'smooth'
    });
  };

  var done = function done() {
    setLoading(false);
    setVisible(false);
  };

  var openMenu = function openMenu() {
    setOpen(true);
    setOverlay(true);
    document.body.style.overflow = 'hidden';
  };

  var closeMenu = function closeMenu() {
    setOpen(false);
    setOverlay(false);
    document.body.style.overflow = 'unset';
  };

  return __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_5__["MainLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx("div", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "overlay ".concat(visible ? 'isVisibility' : ''),
    justify: "center",
    align: "center",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, loading ? __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Lottie"], {
    width: 200,
    height: 200,
    autoplay: true,
    loop: true,
    path: _assets_lottiefiles_loading_circle_json__WEBPACK_IMPORTED_MODULE_8__,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }) : __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Lottie"], {
    width: 250,
    height: 250,
    autoplay: true,
    loop: true,
    path: _assets_lottiefiles_success_json__WEBPACK_IMPORTED_MODULE_9__,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 109
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    margin: "15px 0 0 0",
    family: "quicksand",
    size: "32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, loading ? 'Just take a moment' : 'Thank You!'), loading ? undefined : __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    className: "btn-done",
    onClick: done,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, "Done")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "main-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "main-header-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "main-header-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "navigation-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_6__["Navigation"], {
    items: menus,
    family: "quicksand",
    size: "16",
    weight: "400",
    variant: "grey",
    padding: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-mobile",
    onClick: openMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/menu.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-wrapper-mobile ".concat(isVisible ? 'isActiveEl' : '', " ").concat(open ? 'nav-menu-isActive' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-header-mobile",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "white",
    family: "quicksand",
    size: "18",
    margin: "0 0 2px 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  }, greeting), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "white",
    family: "quicksand",
    weight: "light",
    size: "14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, date), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-button-close",
    onClick: closeMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/close.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-dots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/dot-header-mobile.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-content-mobile",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-items",
    direction: "column",
    flexValue: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/products.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 25
    }
  }, "My Products")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/projects.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, "My Related Projects")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "issues",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/issues.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, "Issues")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/stories.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, "Stories"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-item-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "nav-menu-item",
    onClick: function onClick() {
      return navigator.clipboard.writeText(window.location.href);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/copy.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 21
    }
  }, "\u201CCopy Link to Clipboard\u201D"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "overlay-background  ".concat(overlay ? 'is-overlay-background' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "social-media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/ahroidlife/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, "IN")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/krisnaahroid",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, "FB")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  }, "IG"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    flexValue: "1",
    className: "main-header-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    direction: "column",
    className: "main-header-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "blue",
    family: "quicksand",
    margin: "0  0 50px 0 ",
    className: "sayHi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, "Hi, there"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    direction: "column",
    margin: "0  0 30px 0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "blue",
    family: "quicksand",
    weight: "medium",
    className: "fullname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, "I\u2019m Krisna Ahroid"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "medium",
    className: "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 17
    }
  }, "UI/UX Designer & Frontend Developer")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    width: "80%",
    className: "main-header-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "regular",
    className: "text-overview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, "I design & code that turn the idea to", __jsx("span", {
    style: {
      color: '#2525F0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 19
    }
  }, " product digital and website that people love it."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    className: "btn-hire",
    onClick: toInquiry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, "HIRE ME"), __jsx("a", {
    href: "https://calendly.com/ahroidlife/15min",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "blue",
    weight: "regular",
    className: "consult",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 19
    }
  }, "Free - 15min consult")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "main-header-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "hero-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/hero-image.png",
    className: "main-header-hero",
    draggable: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/bubbble.svg",
    className: "main-header-bubble",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "overlay-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tools-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    className: "tools-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 9
    }
  }, "Work with"), __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gap: 50,
    infinite: true,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      width: 100 + '%',
      height: 50 + 'vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tools-items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/l_xd.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/figma-1.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/protopie.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/affinity.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/ae.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/l_Zeplin.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/react.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/l_redux.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/next-js.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/vue-js.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/nuxt-square.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/wix.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/webflow.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/github-1.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/nginx.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "tool-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/tools/lottiefiles.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 21
    }
  }))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "specializing-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    direction: "column",
    align: "center",
    className: "specializing-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    size: "32",
    weight: "500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 19
    }
  }, "Specializing in"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    size: "18",
    weight: "400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 19
    }
  }, "I a UI/UX Designer & Frontend  Developer, and I love what I do.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "specializing-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    className: "specializing-square-dots",
    src: "/static/illustrations/dots.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 11
    }
  }), __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gap: 50,
    infinite: true,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      width: 100 + '%',
      height: 80 + 'vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "specializing-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "line line1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 95
    }
  }, "UI"), " ", __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 111
    }
  }, "Design &")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 27
    }
  }, "Protoyping")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 27
    }
  }, "The beauty can be subjective depending on the viewer. I enjoy the challenge to create visual and prototyping and also leverage micro-interactions."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "line line2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 95
    }
  }, "UX"), " ", __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 111
    }
  }, "Design &")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 94
    }
  }, "Interaction"), " ", __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 119
    }
  }, "Design"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 27
    }
  }, "I design experience for user to achieve their objective(s) in the best way possible and how it looks and works."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "line line3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 95
    }
  }, "Frontend")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 94
    }
  }, "Development"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 27
    }
  }, "I turn the Design into Code, Build something great website that people love it. In practice of producing websites with a popular library / framework."))))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "about-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "about-content-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    draggable: "false",
    src: "/static/illustrations/square-dots.svg",
    className: "square-art",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "about-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "about-content-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    variant: "dark",
    family: "quicksand",
    size: "32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 19
    }
  }, "Krisna Ahroid. ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 34
    }
  }), "A UI/UX Designer & ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 22
    }
  }), "Frontend  Developer  based in  ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 34
    }
  }), "Jakarta, Indonesia")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "about-content-body",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "hi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 19
    }
  }, "Hi There,"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "about-me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 19
    }
  }, "I\u2019m an enthusiastic UI/UX Designer & Frontend Developer, You can find my recent projects on ", __jsx("a", {
    href: "https://dribbble.com/ahroidlife",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 172
    }
  }, "Dribbble"), " and ", __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 247
    }
  }, "Instagram"), " or if you\u2019re interested in my design and if you are want to development an application, let me know."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "available-me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 19
    }
  }, "I\u2019m currently available for ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 47
    }
  }), "freelance work."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "letmeknow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 19
    }
  }, "If you have a project that you want to get started, ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 71
    }
  }), "let me know.")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "about-content-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "gallery-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    className: "gallery",
    draggable: "false",
    src: "/static/illustrations/gallery.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 15
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-header",
    direction: "column",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 12
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 19
    }
  }, "TESTIMONIALS"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    size: "32",
    className: "testimonial-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 19
    }
  }, "Customers's quotes"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    className: "testimonial-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 19
    }
  }, "Don\u2019t take our word for it. Take theirs\u2026")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 12
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-content-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    className: "square-dots-down",
    src: "/static/illustrations/square-dots-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    className: "quote-icon",
    src: "/static/illustrations/quote.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-content-left-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    size: "32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 23
    }
  }, "What other people ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 41
    }
  }), " are saying"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-content-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    className: "testimonial-square-dots",
    src: "/static/illustrations/dots.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 19
    }
  }), __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gap: 50,
    infinite: true,
    infiniteThreshold: 100,
    bound: true,
    moveType: "freeScroll",
    style: {
      width: 100 + '%',
      height: 50 + 'vh'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/clients/hannari.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card-header-title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    className: "testimonial-card-header-title-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 29
    }
  }, "Eduardo Hannari"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418,
      columnNumber: 29
    }
  }, "S\xE3o Paulo, Brazil "))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 27
    }
  }, "\u201CYou made it so simple and minimalist design.\u201D")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    family: "quicksand",
    className: "testimonial-card-role",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427,
      columnNumber: 27
    }
  }, "Marketing Manager at Digital Mind"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/clients/boby.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card-header-title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    className: "testimonial-card-header-title-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 29
    }
  }, "Boby Indra"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 29
    }
  }, "Jakarta, Indonesia "))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "testimonial-card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 27
    }
  }, "\u201CWorking together has been a pleasure. Exectional experience.\u201D")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    family: "quicksand",
    className: "testimonial-card-role",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 27
    }
  }, "Founder at Konseline"))))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    id: "inquiry",
    className: "contact-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-header",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    className: "contact-header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 13
    }
  }, "Get in Touch"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    className: "contact-header-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 13
    }
  }, "Let\u2019s start build something great together.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 11
    }
  }, "Let me know about you."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contac-content-item-first-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    placeholder: "First name",
    value: firstname,
    onChange: function onChange(e) {
      return setFirstname(e.target.value);
    },
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    placeholder: "Last name",
    value: lastname,
    onChange: function onChange(e) {
      return setLastname(e.target.value);
    },
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 15
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    placeholder: "Email address",
    value: email,
    onChange: function onChange(e) {
      return setEmail(e.target.value);
    },
    width: "100%",
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    placeholder: "Phone number (optional)",
    value: phone,
    onChange: function onChange(e) {
      return setPhone(e.target.value);
    },
    width: "100%",
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 11
    }
  }, "What budget range are you in? "), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "inputGroup input-group-first-item",
    onClick: function onClick() {
      return setBudget('$500 - $1,000');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio1",
    name: "radio",
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 15
    }
  }, "$500 - $1,000")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "inputGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio2",
    name: "radio",
    type: "radio",
    onClick: function onClick() {
      return setBudget('$1,000 - $5,000');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 15
    }
  }, "$1,000 - $5,000"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "inputGroup input-group-first-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio3",
    name: "radio",
    type: "radio",
    onClick: function onClick() {
      return setBudget('$5,000 - $10,000');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 15
    }
  }, "$5,000 - $10,000")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "inputGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio4",
    name: "radio",
    type: "radio",
    onClick: function onClick() {
      return setBudget('$10,000 - $50,000+');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 492,
      columnNumber: 15
    }
  }, "$10,000 - $50,000+"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 11
    }
  }, "Tell me more about the project. "), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-dropdown animated zoomIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/ios-arrow-down.svg",
    className: "icon-arrow-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 501,
      columnNumber: 21
    }
  }, "Choose your Timeline"), __jsx("label", {
    className: "option",
    onClick: function onClick() {
      return setTimeline('ASAP');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-speedometer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 65
    }
  }), "ASAP")), __jsx("label", {
    className: "option",
    onClick: function onClick() {
      return setTimeline('1 Month');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 65
    }
  }), "1 Month")), __jsx("label", {
    className: "option",
    onClick: function onClick() {
      return setTimeline('3 Months');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 65
    }
  }), "3 Months")), __jsx("label", {
    className: "option",
    onClick: function onClick() {
      return setTimeline('6 Months');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516,
      columnNumber: 65
    }
  }), "6 Months")), __jsx("label", {
    className: "option",
    onClick: function onClick() {
      return setTimeline('1 Year');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 519,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520,
      columnNumber: 65
    }
  }), "1 Year")), __jsx("label", {
    className: "option",
    onClick: function onClick() {
      return setTimeline('Ongoing');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 65
    }
  }), "Ongoing"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 11
    }
  }, __jsx("textarea", {
    className: "input-textarea",
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    placeholder: "Write us a few word about your project and we\u2019ll prepare a proposal for you within 24 hours.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "dark",
    size: "16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 13
    }
  }, "I promise to keep your personal information and never give it to anyone, for any reason.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "contact-content-submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    width: "150px",
    height: "40px",
    onClick: inquiry,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }, "SUBMIT")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "footer-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "footer-social-media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 19
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/in/ahroidlife/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/linkedin.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/instagram.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 25
    }
  }))), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "https://www.facebook.com/krisnaahroid",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/facebook.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 25
    }
  }))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "footer-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "quicksand",
    variant: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562,
      columnNumber: 15
    }
  }, "Copyright 2020. Designed and build by Krisna Ahroid with XD, ReactJs, and Golang.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "footer-languages",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "languages-select",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "select-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 18
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567,
      columnNumber: 19
    }
  }, "ENGLISH"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    src: "/static/illustrations/ios-arrow-down.svg",
    className: "icon-arrow-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 19
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    className: "select-item hidden",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 18
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 571,
      columnNumber: 19
    }
  }, "INDONESIA"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.12a0ddc0bb3b3aee5e29.hot-update.js.map