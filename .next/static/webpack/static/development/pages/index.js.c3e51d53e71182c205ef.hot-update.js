webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/texts/text.styles.jsx":
/*!************************************************!*\
  !*** ./components/atoms/texts/text.styles.jsx ***!
  \************************************************/
/*! exports provided: StyledLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



var color = function color(props) {
  if (!props.variant) return "#403e3e";

  switch (props.variant) {
    case "primary":
      return "#1E2127";
      break;

    case "secondary":
      return "#F7FBFF";

    case "grey":
      return "#7b7a8c";

    case "blue":
      return "#2525F0";

    case "white":
      return "#ffffff";

    case "dark":
      return "#64637B";

    default:
      return props.variant;
      break;
  }
};

var size = function size(props) {
  if (!props.size) return "14";
  return props.size;
};

var weight = function weight(props) {
  if (!props.weight) return "400";

  switch (props.weight) {
    case "light":
      return "300";
      break;

    case "regular":
      return "400";
      break;

    case "medium":
      return "500";
      break;

    case "semi-bold":
      return "600";
      break;

    case "bold":
      return "700";

    default:
      break;
  }
};

var isFamily = function isFamily(props) {
  if (!props.family) return "'Montserrat', sans-serif";

  switch (props.family) {
    case "quicksand":
      return "'Quicksand', sans-serif";
      break;

    case "montserrat":
      return "'Montserrat', sans-serif";
      break;

    case "daily":
      return "Daily";
      break;

    default:
      return "'Montserrat', sans-serif";
      break;
  }
};

var StyledText = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "textstyles__StyledText",
  componentId: "sc-1c7yjdi-0"
})(["font-family:", ";font-weight:", ";font-size:", "px;text-align:", ";color:", ";margin:", ";width:", ";@media ", "{font-size:", "px !important;text-align:", "px !important;margin:", ";}"], function (props) {
  return isFamily(props);
}, function (props) {
  return weight(props);
}, function (props) {
  return size(props);
}, function (props) {
  return !props.align ? 'left' : props.align;
}, function (props) {
  return color(props);
}, function (props) {
  return props.margin;
}, function (props) {
  return props.width;
}, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, function (props) {
  return props.isEqualSize;
}, function (props) {
  return props.isEqualAlign;
}, function (props) {
  return props.isEqualMargin;
});
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "textstyles__StyledLink",
  componentId: "sc-1c7yjdi-1"
})(["font-family:", ";font-weight:", ";font-size:", "px;text-align:left;color:", ";text-decoration:none;cursor:pointer;"], function (props) {
  return isFamily(props);
}, function (props) {
  return !props.weight ? 500 : weight(props);
}, function (props) {
  return !props.size ? '14px' : size(props);
}, function (props) {
  return !props.variant ? "#1E2127" : color(props);
});
/* harmony default export */ __webpack_exports__["default"] = (StyledText);

/***/ })

})
//# sourceMappingURL=index.js.c3e51d53e71182c205ef.hot-update.js.map