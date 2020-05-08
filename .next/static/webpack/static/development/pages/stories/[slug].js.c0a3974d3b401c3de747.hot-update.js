webpackHotUpdate("static/development/pages/stories/[slug].js",{

/***/ "./pages/stories/[slug].jsx":
/*!**********************************!*\
  !*** ./pages/stories/[slug].jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _stories_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stories.scss */ "./pages/stories/stories.scss");
/* harmony import */ var _stories_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stories_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @contentful/rich-text-html-renderer */ "./node_modules/@contentful/rich-text-html-renderer/dist/rich-text-html-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_html_renderer__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @contentful/rich-text-types */ "./node_modules/@contentful/rich-text-types/dist/rich-text-types.es5.js");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_modules_stories_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/modules/stories/actions */ "./store/modules/stories/actions.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/index.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_15__);




var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/stories/[slug].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;














var Bold = function Bold(_ref) {
  var children = _ref.children;
  return __jsx("p", {
    className: "bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 32
    }
  }, children);
};

var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "fz8qdsqhkxef",
  accessToken: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
});

var Story = function Story(_ref2) {
  var _renderNode;

  var story = _ref2.story;
  var options = {
    renderMark: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_13__["MARKS"].BOLD, function (text) {
      return __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 33
        }
      }, text);
    }),
    renderNode: (_renderNode = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_13__["BLOCKS"].PARAGRAPH, function (node, children) {
      return __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
        variant: "grey",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 51
        }
      }, children);
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_renderNode, _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_13__["BLOCKS"].EMBEDDED_ASSET, function (node) {
      // console.log(node)
      var _node$data$target$fie = node.data.target.fields,
          description = _node$data$target$fie.description,
          title = _node$data$target$fie.title,
          file = _node$data$target$fie.file;
      return __jsx("img", {
        src: file.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 20
        }
      });
    }), _renderNode),
    renderText: function renderText(text) {
      return text.split('\n').reduce(function (children, textSegment, index) {
        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(children), [index > 0 && __jsx("br", {
          key: index,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 49
          }
        }), textSegment]);
      }, []);
    }
  };
  var content = Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_12__["documentToReactComponents"])(story.items[0].fields.body, options);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_15__["NextSeo"], {
    openGraph: {
      title: story.items[0].fields.title,
      description: story.items[0].fields.subtitle,
      url: "https://ahroidlife.com/stories/".concat(story.items[0].fields.slug),
      type: 'article',
      article: {
        authors: [story.items[0].fields.author.fields.name],
        tags: [story.items[0].fields.tags]
      },
      images: [{
        url: story.items[0].fields.heroImage.fields.file.url,
        width: story.items[0].fields.heroImage.fields.file.details.image.width,
        height: story.items[0].fields.heroImage.fields.file.details.image.height,
        alt: story.items[0].fields.heroImage.fields.file.title
      }]
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_4__["BlogLayout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    className: "story-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "story-content",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "story-close-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 33
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "/static/illustrations/close-dark.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  })))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "story-content-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("h1", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, story.items[0].fields.title), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "subtitle",
    family: "quicksand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, story.items[0].fields.subtitle), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "https:".concat(story.items[0].fields.heroImage.fields.file.url),
    className: "hero-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  })), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "story-content-body",
    direction: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  }, content), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "story-content-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "tags-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "Tags"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "tags",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    title: "Storybook",
    backgroundColor: "#FFEDED",
    color: "#FF5252",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    title: "React",
    backgroundColor: "#FFEDED",
    color: "#FF5252",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }))), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["View"], {
    className: "publish-date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 29
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, "Publish date"), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    className: "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, "2020-04-28 14:50:00")))))));
};

Story.getInitialProps = function _callee(_ref3) {
  var query, res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref3.query;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.getEntries({
            content_type: 'story',
            'fields.slug[match]': query.slug
          }));

        case 3:
          res = _context.sent;
          return _context.abrupt("return", {
            story: res
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ })

})
//# sourceMappingURL=[slug].js.c0a3974d3b401c3de747.hot-update.js.map