webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/buttons/button.styles.jsx":
/*!****************************************************!*\
  !*** ./components/atoms/buttons/button.styles.jsx ***!
  \****************************************************/
/*! exports provided: StyledButton, StyledLinkButton, SyledButtonIcon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLinkButton", function() { return StyledLinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyledButtonIcon", function() { return SyledButtonIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



var isBackgroundColor = function isBackgroundColor(props) {
  if (!props.variant) return "#2525F0";
  var color;

  switch (props.variant) {
    case "primary":
      color = "#2525F0";
      break;

    case "secondary":
      color = "#EDEDED";
      break;

    default:
      color = "#001CF9";
      break;
  }

  return color;
};

var isHover = function isHover(props) {
  var color;

  switch (props.variant) {
    case "primary":
      color = "#F7FBFF";
      break;

    case "secondary":
      color = "#001CF9";
      break;

    default:
      color = "#001CF9";
      break;
  }

  return color;
};

var isCursor = function isCursor(props) {
  if (props.variant == "disabled") {
    return "not-allowed";
  } else {
    return "pointer";
  }
};

var isColor = function isColor(props) {
  if (props.variant == "secondary") {
    return "#1E2127";
  } else {
    return "#ffffff";
  }
};

var isPointer = function isPointer(props) {
  if (props.variant == "disabled") {
    return "none";
  } else {
    return "all";
  }
};

var border = function border(props) {
  if (!props.border) return "none";

  switch (props.border) {
    case 'primary':
      return "#3838F8";
      break;

    case 'secondary':
      return "#EDEDED";

    default:
      return "none";
      break;
  }
};

var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "buttonstyles__StyledButton",
  componentId: "sc-1sm1y0z-0"
})(["position:relative;display:inline-block;padding:8px 12px 8px 12px;width:", ";height:", ";min-width:120px;border:", ";border-radius:5px;background-color:", ";cursor:", ";pointer-events:", ";text-decoration:none;transition:all 0.8s ease;white-space:nowrap;font-family:'Montserrat',sans-serif;font-style:normal;font-size:14px;font-weight:500;line-height:17px;text-align:center;color:", ";&:hover{color:", ";box-shadow:2px 10px 15px rgba(30,33,39,0.10);}&:focus{outline:none;}&:active{outline:none;}@media ", "{width:", " !important;height:", " !important;}"], function (props) {
  return props.width;
}, function (props) {
  return props.height;
}, function (props) {
  return !props.border ? 'none' : '1px solid ' + border(props);
}, function (props) {
  return isBackgroundColor(props);
}, function (props) {
  return isCursor(props);
}, function (props) {
  return isPointer(props);
}, function (props) {
  return isColor(props);
}, function (props) {
  return !props.isFocus ? '#ffffff' : '#001CF9';
}, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, function (props) {
  return props.isEqualWidth;
}, function (props) {
  return props.isEqualHeight;
});
var StyledLinkButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(StyledButton).attrs({
  as: "a"
}).withConfig({
  displayName: "buttonstyles__StyledLinkButton",
  componentId: "sc-1sm1y0z-1"
})(["text-deocration:none;"]);
var SyledButtonIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "buttonstyles__SyledButtonIcon",
  componentId: "sc-1sm1y0z-2"
})(["position:", ";right:", ";top:", ";left:", ";bottom:", ";"], function (props) {
  return props.iconPosition;
}, function (props) {
  return props.iconRight;
}, function (props) {
  return props.iconTop;
}, function (props) {
  return props.iconLeft;
}, function (props) {
  return props.iconBottom;
});
/* harmony default export */ __webpack_exports__["default"] = (StyledButton);

/***/ })

})
//# sourceMappingURL=index.js.97f6fa0df26aecbe4b95.hot-update.js.map