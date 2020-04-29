webpackHotUpdate("static/development/pages/stories/[slug].js",{

/***/ "./pages/stories/[slug].jsx":
/*!**********************************!*\
  !*** ./pages/stories/[slug].jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _stories_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stories.scss */ "./pages/stories/stories.scss");
/* harmony import */ var _stories_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stories_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @contentful/rich-text-html-renderer */ "./node_modules/@contentful/rich-text-html-renderer/dist/rich-text-html-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @contentful/rich-text-types */ "./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_11__);


var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/stories/[slug].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Bold = function Bold(_ref) {
  var children = _ref.children;
  return __jsx("p", {
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 32
    }
  }, children);
};

var Story = function Story(props) {
  var router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      slug = _useState[0],
      setSlug = _useState[1];

  var story = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.stories.story.fields;
  });
  var options = {
    renderMark: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_11__["MARKS"].BOLD, function (text) {
      return __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 33
        }
      }, text);
    }),
    renderNode: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_11__["BLOCKS"].PARAGRAPH, function (node, children) {
      return __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
        variant: "grey",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 51
        }
      }, children);
    }),
    renderText: function renderText(text) {
      return text.replace('!', '?');
    }
  };
  var content = Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_10__["documentToReactComponents"])(story.body, options);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var param = router.query.slug;
    setSlug(param);
    console.log("STATE :: ", story);
  });
  return __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_2__["BlogLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "story-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "story-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "story-close-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "/static/illustrations/close-dark.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "story-content-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, story.title), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "subtitle",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, story.subtitle), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: "https:".concat(story.heroImage.fields.file.url),
    className: "hero-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_3__["View"], {
    className: "story-content-body",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, content))));
};

/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ })

})
//# sourceMappingURL=[slug].js.a30a43eaaf0527f10e40.hot-update.js.map