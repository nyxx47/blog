webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/containers/container.styles.jsx":
/*!**********************************************************!*\
  !*** ./components/atoms/containers/container.styles.jsx ***!
  \**********************************************************/
/*! exports provided: StyledContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var isDisplayProps = function isDisplayProps(props) {
  if (!props.display) return "flex";

  switch (props.display) {
    case "flex":
      return "flex";
      break;

    case "inline-flex":
      return "inline-flex";
      break;

    default:
      return "flex";
      break;
  }
};

var flexDirection = function flexDirection(props) {
  switch (props.flexDirection) {
    case "column":
      return "column";
      break;

    case "column-reverse":
      return "column-reverse";
      break;

    case "row":
      return "row";
      break;

    case "row-reverse":
      return "row-reverse";
      break;

    case "inherit":
      return "initial";
      break;

    default:
      return "row";
      break;
  }
};

var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "containerstyles__StyledContainer",
  componentId: "ygznhw-0"
})(["display:", ";width:", ";height:", ";background:", ";flex-direction:", ";justify-content:", ";align-items:", ";boxSizing:", ";padding:", ";box-shadow:", ""], function (props) {
  return isDisplayProps(props);
}, function (props) {
  return props.isEqualWidth;
}, function (props) {
  return props.isEqualHeight;
}, function (props) {
  return !props.backgroundColor ? 'none' : props.backgroundColor;
}, function (props) {
  return flexDirection(props);
}, function (props) {
  return props.justifyContent;
}, function (props) {
  return props.alignItems;
}, function (props) {
  return props.boxSizing;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.boxShadow;
});
/* harmony default export */ __webpack_exports__["default"] = (StyledContainer);

/***/ })

})
//# sourceMappingURL=index.js.0bdeeb019e3784b62aec.hot-update.js.map