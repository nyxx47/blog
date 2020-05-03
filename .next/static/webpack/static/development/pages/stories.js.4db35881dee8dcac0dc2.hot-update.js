webpackHotUpdate("static/development/pages/stories.js",{

/***/ "./components/organisms/header/header.jsx":
/*!************************************************!*\
  !*** ./components/organisms/header/header.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var use_lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-lodash-debounce */ "./node_modules/use-lodash-debounce/dist/index.es.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../molecules */ "./components/molecules/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./components/organisms/header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/organisms/header/header.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "fz8qdsqhkxef",
  accessToken: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
});

var Header = function Header(_ref) {
  var direction = _ref.direction,
      items = _ref.items;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      value = _useState2[0],
      setValue = _useState2[1];

  var debouncedValue = Object(use_lodash_debounce__WEBPACK_IMPORTED_MODULE_2__["useDebounce"])(value, 1000);

  var toggle = function toggle() {
    setOpen(!open);
    console.log("IS OPEN :: ", open);
  };

  function searching() {
    var entries;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function searching$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.getEntries({
              content_type: 'story',
              'fields.title[match]': 'driven'
            }));

          case 2:
            entries = _context.sent;
            console.log(entries.items);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {// do search stuff
  }, [debouncedValue]);
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Container"], {
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "header-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Logo"], {
    width: "2em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }))), __jsx(_molecules__WEBPACK_IMPORTED_MODULE_4__["TextIcon"], {
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    placeholder: "What are you looking for?",
    left: "30px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "search-on-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "search",
    left: "15px",
    top: "9px",
    width: "1.3em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "menu-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_4__["Navigation"], {
    className: "menu",
    direction: direction,
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "menu-mobile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("input", {
    type: "checkbox",
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  })), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "menu-content-on-mobile  ".concat(open ? 'isActive-menu-on-mobile' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(_molecules__WEBPACK_IMPORTED_MODULE_4__["Navigation"], {
    className: "menu",
    direction: direction,
    items: items,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=stories.js.4db35881dee8dcac0dc2.hot-update.js.map