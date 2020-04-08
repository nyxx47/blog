webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/atoms/views/view.styles.jsx":
/*!************************************************!*\
  !*** ./components/atoms/views/view.styles.jsx ***!
  \************************************************/
/*! exports provided: StyledView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledView", function() { return StyledView; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../particles/breakpoints */ "./components/particles/breakpoints.jsx");



var isDisplayProperty = function isDisplayProperty(props) {
  switch (props.isEqualFlex) {
    case "flex":
      return "flex";
      break;

    case "block":
      return "block";
      break;

    case "inline-block":
      return "inline-block";
      break;

    case "none":
      return "none";
      break;

    default:
      return "flex";
      break;
  }
};

var masked = function masked(props) {
  if (props.masked) {
    return "hidden";
  } else {
    return "visible";
  }
};

var StyledView = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "viewstyles__StyledView",
  componentId: "sc-1egp7p8-0"
})(["display:", ";flex-direction:", ";flex:", ";justify-content:", ";align-items:", ";width:", ";max-width:", ";height:", ";background-color:", ";border:", ";border-radius:", ";box-shadow:", ";overflow:", ";position:", ";left:", ";top:", ";bottom:", ";padding:", ";margin:", ";box-sizing:border-box;&.half{width:calc(50% - 40px);margin:0 5px 10px 0;&:nth-child(2n){margin:0 0 10px 5px;}@media ", "{width:100%;margin:0 5px 40px 0 !important;flex-direction:column;}}&.large{width:100%;margin:0 0 50px 0;display:flex;justify-content:space-between;@media ", "{flex-direction:column;}}&.semi-half{width:calc(70% - 50px);margin:0 5px 10px 0;&:nth-child(2n){width:30%;margin:0 0 10px 5px;@media ", "{width:100%;}}@media ", "{width:100%;}}&.grid-item-12{height:auto;flex-basis:100%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-11{height:auto;flex-basis:91.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-10{height:auto;flex-basis:83.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-9{height:auto;flex-basis:75%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-8{height:auto;flex-basis:66.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-7{height:auto;flex-basis:58.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-6{height:auto;flex-basis:50%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-5{height:auto;flex-basis:41.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-4{height:auto;flex-basis:33.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-3{height:auto;flex-basis:25%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-2{height:auto;flex-basis:16.66%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.grid-item-1{height:auto;flex-basis:8.33%;-ms-flex:auto;width:259px;position:relative;padding:10px;box-sizing:border-box;margin-bottom:50px;}&.section{padding:0px 100px 0px 100px;}@media ", "{&.grid-item{flex-basis:33.33%;}}@media ", "{.grid-item{flex-basis:33.33%;}}@media ", "{padding:", ";&.grid-item-4{flex-basis:50%;}&.grid-item-3{flex-basis:100%;}&.grid-item{flex-basis:50%;}&.section{padding:0px 20px 0px 20px !important;}}@media ", "{width:", " !important;height:", " !important;background-color:", ";flex-direction:", ";&.grid-item{flex-basis:100%;}}"], function (props) {
  return isDisplayProperty(props);
}, function (props) {
  return props.direction;
}, function (props) {
  return props.flexValue ? '1' : 'none';
}, function (props) {
  return props.justify;
}, function (props) {
  return !props.align ? 'none' : props.align;
}, function (props) {
  return props.width;
}, function (props) {
  return !props.maxWidth ? undefined : props.maxWidth;
}, function (props) {
  return props.height;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return !props.border ? undefined : props.border;
}, function (props) {
  return props.radius;
}, function (props) {
  return props.isBoxShadow;
}, function (props) {
  return props.overflow;
}, function (props) {
  return props.position;
}, function (props) {
  return props.left;
}, function (props) {
  return props.top;
}, function (props) {
  return props.bottom;
}, function (props) {
  return props.padding;
}, function (props) {
  return props.margin;
}, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptopL, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].laptop, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].tablet, function (props) {
  return props.isPadding;
}, _particles_breakpoints__WEBPACK_IMPORTED_MODULE_1__["default"].mobileL, function (props) {
  return !props.isEqualWidth ? undefined : props.isEqualWidth;
}, function (props) {
  return !props.isEqualHeight ? undefined : props.isEqualHeight;
}, function (props) {
  return props.isEqualBackground;
}, function (props) {
  return props.isEqualDirection;
});
/* harmony default export */ __webpack_exports__["default"] = (StyledView);

/***/ })

})
//# sourceMappingURL=index.js.2b224a10ec59d6b89790.hot-update.js.map