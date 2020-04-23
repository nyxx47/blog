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
/* harmony import */ var _egjs_react_flicking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @egjs/react-flicking */ "./node_modules/@egjs/react-flicking/dist/flicking.esm.js");
/* harmony import */ var _components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/particles/useOnScreen */ "./components/particles/useOnScreen.js");
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_molecules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/molecules */ "./components/molecules/index.js");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _index_knobs_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.knobs.json */ "./pages/index.knobs.json");
var _index_knobs_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./index.knobs.json */ "./pages/index.knobs.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var menus = _index_knobs_json__WEBPACK_IMPORTED_MODULE_7__.data.menus;

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

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var isVisible = Object(_components_particles_useOnScreen__WEBPACK_IMPORTED_MODULE_3__["default"])(ref);
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

  return __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_4__["MainLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx("div", {
    ref: ref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "main-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "main-header-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "main-header-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "navigation-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_5__["Navigation"], {
    items: menus,
    family: "quicksand",
    size: "16",
    weight: "400",
    variant: "grey",
    padding: "0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-mobile",
    onClick: openMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/menu.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-wrapper-mobile ".concat(isVisible ? 'isActiveEl' : '', " ").concat(open ? 'nav-menu-isActive' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-header-mobile",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "white",
    family: "quicksand",
    size: "18",
    margin: "0 0 2px 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, greeting), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "white",
    family: "quicksand",
    weight: "light",
    size: "14",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, date), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-button-close",
    onClick: closeMenu,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/close.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-dots",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/dot-header-mobile.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-content-mobile",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-items",
    direction: "column",
    flexValue: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/products",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/products.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, "My Products")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/projects.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 25
    }
  }, "My Related Projects")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "issues",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/issues.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 25
    }
  }, "Issues")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/stories.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 25
    }
  }, "Stories"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-item-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "nav-menu-item",
    onClick: function onClick() {
      return navigator.clipboard.writeText(window.location.href);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/copy.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    size: "18",
    margin: "0 0 0 20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 21
    }
  }, "\u201CCopy Link to Clipboard\u201D"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "overlay-background  ".concat(overlay ? 'is-overlay-background' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "social-media",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 19
    }
  }, "IN")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, "FB")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, "IG"))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    flexValue: "1",
    className: "main-header-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    direction: "column",
    className: "main-header-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "blue",
    family: "quicksand",
    margin: "0  0 50px 0 ",
    className: "sayHi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, "Hi, there"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    direction: "column",
    margin: "0  0 30px 0 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "blue",
    family: "quicksand",
    weight: "medium",
    className: "fullname",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }, "I\u2019m Krisna Ahroid"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "medium",
    className: "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, "UI/UX Designer & Frontend Developer")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    width: "80%",
    className: "main-header-text-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    variant: "grey",
    weight: "regular",
    className: "text-overview",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, "I design & code that turn the idea to", __jsx("span", {
    style: {
      color: '#2525F0'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 19
    }
  }, " product digital and website that people love it."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "btn-hire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, "HIRE ME"), __jsx("a", {
    href: "https://calendly.com/ahroidlife/15min",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    variant: "blue",
    weight: "regular",
    className: "consult",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 19
    }
  }, "Free - 15min consult")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "main-header-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/hero-image.png",
    className: "main-header-hero",
    draggable: "false",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/bubbble.svg",
    className: "main-header-bubble",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 15
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "tools-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    className: "tools-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  }, "Work with"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "tools-items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 195,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/l_xd.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/figma-1.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/protopie.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/affinity.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/ae.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/l_Zeplin.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/react.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/l_redux.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/next-js.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/vue-js.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/nuxt-square.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/wix.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/webflow.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/github-1.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/nginx.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/tools/lottiefiles.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "specializing-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    direction: "column",
    align: "center",
    className: "specializing-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    size: "32",
    weight: "500",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 19
    }
  }, "Specializing in"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    size: "18",
    weight: "400",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 19
    }
  }, "I a UI/UX Designer & Frontend  Developer, and I love what I do.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "specializing-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 253,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "specializing-cards",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "line line1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 95
    }
  }, "UI"), " ", __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 111
    }
  }, "Design &")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 27
    }
  }, "Protoyping")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 27
    }
  }, "The beauty can be subjective depending on the viewer. I enjoy the challenge to create visual and prototyping and also leverage micro-interactions."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "line line2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 95
    }
  }, "UX"), " ", __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 111
    }
  }, "Design &")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 94
    }
  }, "Interaction"), " ", __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 119
    }
  }, "Design"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 27
    }
  }, "I design experience for user to achieve their objective(s) in the best way possible and how it looks and works."))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 23
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "line line3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 25
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "main-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 27
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 95
    }
  }, "Frontend")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    className: "sub-title-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 27
    }
  }, __jsx("span", {
    className: "light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 94
    }
  }, "Development"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 27
    }
  }, "I turn the Design into Code, Build something great website that people love it. In practice of producing websites with a popular library / framework."))))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "about-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "about-content-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    draggable: "false",
    src: "/static/illustrations/square-dots.svg",
    className: "square-art",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "about-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 15
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "about-content-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    variant: "dark",
    family: "quicksand",
    size: "32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 19
    }
  }, "Krisna Ahroid. ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 34
    }
  }), "A UI/UX Designer & ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 22
    }
  }), "Frontend  Developer  based in  ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 34
    }
  }), "Jakarta, Indonesia")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "about-content-body",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "hi",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 19
    }
  }, "Hi There,"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "about-me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 19
    }
  }, "I\u2019m an enthusiastic UI/UX Designer & Frontend Developer, You can find my recent projects on ", __jsx("a", {
    href: "https://dribbble.com/ahroidlife",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 172
    }
  }, "Dribbble"), " and ", __jsx("a", {
    href: "https://www.instagram.com/user.ahroidlife/",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310,
      columnNumber: 247
    }
  }, "Instagram"), " or if you\u2019re interested in my design and if you are want to development an application, let me know."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "available-me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 19
    }
  }, "I\u2019m currently available for ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 47
    }
  }), "freelance work."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    variant: "dark",
    className: "letmeknow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 19
    }
  }, "If you have a project that you want to get started, ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 71
    }
  }), "let me know.")))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "about-content-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    className: "gallery",
    draggable: "false",
    src: "/static/illustrations/gallery.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 15
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-header",
    direction: "column",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 12
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 19
    }
  }, "TESTIMONIALS"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    size: "32",
    className: "testimonial-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 19
    }
  }, "Customers's quotes"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    className: "testimonial-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 19
    }
  }, "Don\u2019t take our word for it. Take theirs\u2026")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 12
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-content-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    className: "square-dots-down",
    src: "/static/illustrations/square-dots-down.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    className: "quote-icon",
    src: "/static/illustrations/quote.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-content-left-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    size: "32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 23
    }
  }, "What other people ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 41
    }
  }), " are saying"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-content-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    className: "testimonial-square-dots",
    src: "/static/illustrations/dots.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 19
    }
  }), __jsx(_egjs_react_flicking__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      lineNumber: 344,
      columnNumber: 19
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/clients/hannari.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card-header-title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    className: "testimonial-card-header-title-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 29
    }
  }, "Eduardo Hannari"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 29
    }
  }, "S\xE3o Paulo, Brazil "))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 27
    }
  }, "\u201CYou made it so simple and minimalist design.\u201D")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    family: "quicksand",
    className: "testimonial-card-role",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 27
    }
  }, "Marketing Manager at Digital Mind"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 21
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/clients/boby.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card-header-title",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 27
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    className: "testimonial-card-header-title-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 29
    }
  }, "Boby Indra"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 29
    }
  }, "Jakarta, Indonesia "))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "testimonial-card-content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 27
    }
  }, "\u201CWorking together has been a pleasure. Exectional experience.\u201D")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    family: "quicksand",
    className: "testimonial-card-role",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 27
    }
  }, "Founder at Konseline"))))))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-wrapper",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 7
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-header",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    className: "contact-header-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 13
    }
  }, "Get in Touch"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    family: "quicksand",
    className: "contact-header-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 13
    }
  }, "Let\u2019s start build something great together.")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 9
    }
  }, "Let me know about you."), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    placeholder: "First name",
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396,
      columnNumber: 15
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    placeholder: "Last name",
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 15
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    placeholder: "Email address",
    width: "100%",
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    placeholder: "Phone number (optional)",
    width: "100%",
    className: "contact-input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 13
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 11
    }
  }, "What budget range are you in? "), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "inputGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio1",
    name: "radio",
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 15
    }
  }, "$500 - $1,000")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "inputGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio2",
    name: "radio",
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 15
    }
  }, "$1,000 - $5,000"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "inputGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio3",
    name: "radio",
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 15
    }
  }, "$5,000 - $10,000")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "inputGroup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 13
    }
  }, __jsx("input", {
    id: "radio4",
    name: "radio",
    type: "radio",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "radio4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
      columnNumber: 15
    }
  }, "$10,000 - $50,000+"))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    className: "contact-item-title",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 11
    }
  }, "Tell me more about the project. "), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-content-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 11
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["View"], {
    className: "contact-dropdown animated zoomIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 13
    }
  }, __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 21
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: "/static/illustrations/ios-arrow-down.svg",
    className: "icon-arrow-dropdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 21
    }
  }), __jsx("span", {
    className: "placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 21
    }
  }, "Choose your Timeline"), __jsx("label", {
    className: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-speedometer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 65
    }
  }), "ASAP")), __jsx("label", {
    className: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 65
    }
  }), "1 Month")), __jsx("label", {
    className: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 65
    }
  }), "3 Months")), __jsx("label", {
    className: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 65
    }
  }), "6 Months")), __jsx("label", {
    className: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 65
    }
  }), "1 Year")), __jsx("label", {
    className: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "radio",
    name: "option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 25
    }
  }), __jsx("span", {
    className: "title animated fadeIn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icon icon-fire",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 65
    }
  }), "Ongoing"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.5ce31a7e1459365f24aa.hot-update.js.map