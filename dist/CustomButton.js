"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var CustomButton = function CustomButton(props) {
  var handleClick = function handleClick() {
    props.onClickCallback();
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPressOut: handleClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Button2"));
};
CustomButton.propTypes = {
  onClickCallback: _propTypes.default.func
};
var _default = CustomButton;
exports.default = _default;