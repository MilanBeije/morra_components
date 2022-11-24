"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//react functionalities

//Native components

var CustomInput = function CustomInput(props) {
  var typing = function typing(e) {
    props.callback(e);
  };
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, {
    secureTextEntry: props.password,
    style: props.styleCss,
    onChangeText: typing,
    placeholder: props.placeholder,
    placeholderTextColor: props.placeholderColor
  }));
};
CustomInput.propTypes = {
  callback: _propTypes.default.any,
  styleCss: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  password: _propTypes.default.bool,
  placeholderColor: _propTypes.default.any
};
var _default = CustomInput;
exports.default = _default;