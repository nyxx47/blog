webpackHotUpdate("static/development/pages/issues.js",{

/***/ "./pages/issues/issues.jsx":
/*!*********************************!*\
  !*** ./pages/issues/issues.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_organisms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/organisms */ "./components/organisms/index.js");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _assets_illustrations_daily_problem_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/illustrations/daily-problem.svg */ "./assets/illustrations/daily-problem.svg");
/* harmony import */ var _static_illustrations_issue_flow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/illustrations/issue-flow.svg */ "./static/illustrations/issue-flow.svg");
/* harmony import */ var _issues_knobs_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issues.knobs.json */ "./pages/issues/issues.knobs.json");
var _issues_knobs_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./issues.knobs.json */ "./pages/issues/issues.knobs.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/issues/issues.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var _Knobs$data = _issues_knobs_json__WEBPACK_IMPORTED_MODULE_6__.data,
    items = _Knobs$data.items,
    populars = _Knobs$data.populars,
    others = _Knobs$data.others;
var styles = {
  margin: "0 0 50px 0"
};

var Issues = function Issues() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.overflow = 'unset';
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_1__["BlogLayout"], {
    title: "Issues",
    line: "illustration-outline",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["Hero"], {
    title: "Daily Problems",
    subtitle: "The more that you read the more things you will know.",
    img: _assets_illustrations_daily_problem_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    direction: "column",
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "32",
    family: "daily",
    margin: styles.margin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "Latest Issues"), __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["ArticleText"], {
    items: items,
    image: _static_illustrations_issue_flow_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    direction: "column",
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "32",
    family: "daily",
    margin: styles.margin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, "Top Issues"), __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["ArticleText"], {
    items: populars,
    outline: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    direction: "column",
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: "32",
    family: "daily",
    margin: styles.margin,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, "Other Issues"), __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_2__["ArticleText"], {
    items: others,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Issues);

/***/ })

})
//# sourceMappingURL=issues.js.f8999acc386cbe674c04.hot-update.js.map