webpackHotUpdate("static/development/pages/404.js",{

/***/ "./components/molecules/forms/textIcon/texticon.jsx":
/*!**********************************************************!*\
  !*** ./components/molecules/forms/textIcon/texticon.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ "./components/molecules/forms/textIcon/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);




var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/forms/textIcon/texticon.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "fz8qdsqhkxef",
  accessToken: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
});

var TextIcon = function TextIcon(_ref) {
  var placeholder = _ref.placeholder,
      left = _ref.left,
      props = _ref.props;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      searchTerm = _React$useState2[0],
      setSearchTerm = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      searchResults = _React$useState4[0],
      setSearchResults = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setSearchTerm(event.target.value);
  };

  function searching(title) {
    var entries;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function searching$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(client.getEntries({
              content_type: 'story',
              'fields.title[match]': title
            }));

          case 2:
            entries = _context.sent;

            if (!entries.items) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", entries.items);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    function getResults() {
      var results;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getResults$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(searching(searchTerm));

            case 2:
              results = _context2.sent;
              console.log(results);
              setSearchResults(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(results));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    }

    getResults();
  }, [searchTerm]);
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    className: "header-input-search",
    position: "relative",
    style: {
      left: left
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "search",
    position: "absolute",
    left: "15px",
    top: "9px",
    width: "1.3em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    className: "inputTextIcon",
    placeholder: placeholder,
    width: "300px",
    padding: "5px 30px 5px 45px",
    value: searchTerm,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "search-results",
    direction: "column",
    isEqualFlex: "none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    height: "30px",
    justify: "space-between",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    weight: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "Results of ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 58
    }
  }, "Trigonometry"))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    className: "rounded-counter",
    justify: "center",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, "4")))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_4__["View"], {
    flexValue: "1",
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, searchResults.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      }
    }, item.fields.title);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextIcon);

/***/ })

})
//# sourceMappingURL=404.js.910ec4a4d8fb23956e0f.hot-update.js.map