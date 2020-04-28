webpackHotUpdate("static/development/pages/stories.js",{

/***/ "./pages/stories/stories.jsx":
/*!***********************************!*\
  !*** ./pages/stories/stories.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_templates_layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/templates/layouts */ "./components/templates/layouts/index.js");
/* harmony import */ var _components_organisms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/organisms */ "./components/organisms/index.js");
/* harmony import */ var _assets_illustrations_daily_stories_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/illustrations/daily-stories.svg */ "./assets/illustrations/daily-stories.svg");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/atoms */ "./components/atoms/index.js");
/* harmony import */ var _components_molecules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/molecules */ "./components/molecules/index.js");
/* harmony import */ var _stories_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stories.scss */ "./pages/stories/stories.scss");
/* harmony import */ var _stories_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_stories_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stories_knobs_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stories.knobs.json */ "./pages/stories/stories.knobs.json");
var _stories_knobs_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./stories.knobs.json */ "./pages/stories/stories.knobs.json", 1);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_modules_stories_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/modules/stories/actions */ "./store/modules/stories/actions.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);



var _this = undefined,
    _jsxFileName = "/Users/ahroidlife/Documents/nextjs/blog/pages/stories/stories.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var item = _stories_knobs_json__WEBPACK_IMPORTED_MODULE_10__.item,
    populars = _stories_knobs_json__WEBPACK_IMPORTED_MODULE_10__.populars;



var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "fz8qdsqhkxef",
  accessToken: "feE_Euk-EnM3oB9wApHZlEe61_qKREqanmw-OsllD4I"
});

var Stories = function Stories() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      popular = _useState[0],
      setPopular = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      stories = _useState2[0],
      setStories = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      story = _useState3[0],
      setStory = _useState3[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  function fetchPopulars() {
    var entries;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchPopulars$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(client.getEntries({
              content_type: 'popularStories'
            }));

          case 2:
            entries = _context.sent;

            if (!entries.items) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", entries.items);

          case 5:
            console.log("Error getting Entries for ".concat(contentType.name, "."));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function fetchStoryCategories() {
    var entries;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchStoryCategories$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(client.getEntries({
              content_type: 'stories'
            }));

          case 2:
            entries = _context2.sent;

            if (!entries.items) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", entries.items);

          case 5:
            console.log("Error getting Entries for ".concat(contentType.name, "."));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function fetchStories() {
    var entries;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchStories$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(client.getEntries({
              content_type: 'story'
            }));

          case 2:
            entries = _context3.sent;

            if (!entries.items) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", entries.items);

          case 5:
            console.log("Error getting Entries for ".concat(contentType.name, "."));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.body.style.overflow = 'unset';

    function getPopulars() {
      var allPosts;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getPopulars$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetchPopulars());

            case 2:
              allPosts = _context4.sent;
              setPopular(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allPosts));

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    }

    function getStoriesCategories() {
      var allCategories;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getStoriesCategories$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetchStoryCategories());

            case 2:
              allCategories = _context5.sent;
              setStories(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allCategories));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }

    function getStories() {
      var allStories;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getStories$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetchStories());

            case 2:
              allStories = _context6.sent;
              setStory(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(allStories));

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, null, Promise);
    }

    getStories();
    getStoriesCategories();
    getPopulars();
  }, []);

  var handleToStory = function handleToStory(story) {
    dispatch(_store_modules_stories_actions__WEBPACK_IMPORTED_MODULE_12__["default"].setStory(story)); //  await Router.push(`/stories/${story.fields.slug}`)
  };

  return __jsx(_components_templates_layouts__WEBPACK_IMPORTED_MODULE_3__["BlogLayout"], {
    title: "Stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_4__["Hero"], {
    title: "Stories Resources",
    subtitle: "The more that you read the more things you will know. ",
    img: _assets_illustrations_daily_stories_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_4__["SliderHero"], {
    items: popular,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(_components_organisms__WEBPACK_IMPORTED_MODULE_4__["SliderCategories"], {
    items: stories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    padding: "100px",
    flexDirection: "column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
    margin: "0 0 50px 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    family: "daily",
    size: "32",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/stories/adasda");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, "Our Stories")), __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["Rows"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, story.map(function (item, index) {
    return __jsx(_components_atoms__WEBPACK_IMPORTED_MODULE_7__["View"], {
      key: index,
      className: "grid-item-3 story-item",
      onClick: function onClick() {
        return handleToStory(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
      href: "/stories/[slug]",
      as: "/stories/".concat(item.fields.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 41
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 45
      }
    }, __jsx(_components_molecules__WEBPACK_IMPORTED_MODULE_8__["CardStories"], {
      title: item.fields.title,
      label: item.fields.label,
      image: item.fields.image.fields.file.url,
      className: "card-our-stories",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 45
      }
    }))));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Stories);

/***/ })

})
//# sourceMappingURL=stories.js.13b8145edf2fd8d761c4.hot-update.js.map