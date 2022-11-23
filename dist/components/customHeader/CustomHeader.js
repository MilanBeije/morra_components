"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
var _CustomButton = _interopRequireDefault(require("../customButton/CustomButton"));
var _common = _interopRequireDefault(require("../../styles/common"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//react functionalitites

//Native components

//components

//styles

var CustomHeader = function CustomHeader() {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_common.default.secondaryBg, _common.default.paddingHeader, _common.default.rowHeader, _common.default.zIndexMax]
  }, props.buttonVisible ? /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    label: "⬅",
    callback: callbackHeader,
    buttonContainerStyle: [_common.default.buttonBoxHeader],
    buttonTextStyle: [_common.default.boldFont, _common.default.normalTextSize, _common.default.darkColorText]
  }) : /*#__PURE__*/_react.default.createElement(_reactNative.Text, null), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_common.default.textCenter, _common.default.blackText, _common.default.boldFont, _common.default.normalTextSize]
  }, props.title), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null));
};
CustomHeader.propTypes = {
  title: _propTypes.default.string,
  headerFunction: _propTypes.default.any,
  buttonVisible: _propTypes.default.boolean
};
var _default = CustomHeader;
exports.default = _default;