webpackHotUpdate("static/development/pages/stories.js",{

/***/ "./store/modules/stories/actions.js":
/*!******************************************!*\
  !*** ./store/modules/stories/actions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./store/modules/stories/type.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



var setStory = function setStory(story) {
  return function (dispatch) {
    dispatch({
      type: _type__WEBPACK_IMPORTED_MODULE_0__["SET_STORY"],
      payload: story
    }); // Router.push(`/stories/${story.fields.slug}`)

    console.log("PAYLOAD :: ", story.fields.slug);
  };
};

/* harmony default export */ __webpack_exports__["default"] = ({
  setStory: setStory
});

/***/ })

})
//# sourceMappingURL=stories.js.eff9fa738fc7ac3434f1.hot-update.js.map