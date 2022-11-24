"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//React functionalities

//Native components

var CustomButton = function CustomButton(props) {
  var handleClick = function handleClick() {
    props.onClickCallback();
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPressOut: handleClick,
    style: props.buttonContainerStyle,
    hitSlop: 20
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: props.buttonTextStyle
  }, props.label), props.children);
};
CustomButton.propTypes = {
  onClickCallback: _propTypes.default.func.isRequired,
  children: _propTypes.default.any,
  label: _propTypes.default.any,
  buttonContainerStyle: _propTypes.default.any,
  buttonTextStyle: _propTypes.default.any
};
var _default = CustomButton;
exports.default = _default;