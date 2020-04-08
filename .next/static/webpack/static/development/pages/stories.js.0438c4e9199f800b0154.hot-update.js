webpackHotUpdate("static/development/pages/stories.js",{

/***/ "./components/molecules/forms/textIcon/texticon.jsx":
/*!**********************************************************!*\
  !*** ./components/molecules/forms/textIcon/texticon.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../atoms */ "./components/atoms/index.js");


var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/components/molecules/forms/textIcon/texticon.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var people = ["Siri", "Alexa", "Google", "Facebook", "Twitter", "Linkedin", "Sinkedin"];

var TextIcon = function TextIcon(_ref) {
  var placeholder = _ref.placeholder,
      left = _ref.left;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(""),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      searchTerm = _React$useState2[0],
      setSearchTerm = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      searchResults = _React$useState4[0],
      setSearchResults = _React$useState4[1];

  var handleChange = function handleChange(event) {
    setSearchTerm(event.target.value);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    var results = people.filter(function (person) {
      return person.toLowerCase().includes(searchTerm);
    });
    setSearchResults(results);
  }, [searchTerm]);
  return __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    position: "relative",
    style: {
      left: left
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "search",
    position: "absolute",
    left: "15px",
    top: "9px",
    width: "1.3em",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    className: "inputTextIcon",
    placeholder: placeholder,
    width: "300px",
    padding: "5px 30px 5px 45px",
    value: searchTerm,
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "search-results",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    height: "30px",
    justify: "space-between",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    weight: "medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, "Results of ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 58
    }
  }, "Trigonometry"))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: "rounded-counter",
    justify: "center",
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    variant: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, "4")))), __jsx(_atoms__WEBPACK_IMPORTED_MODULE_2__["View"], {
    flexValue: "1",
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, searchResults.map(function (item) {
    return __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      }
    }, item);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextIcon);

/***/ })

})
//# sourceMappingURL=stories.js.0438c4e9199f800b0154.hot-update.js.map