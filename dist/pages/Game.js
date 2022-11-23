"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _CustomButton = _interopRequireDefault(require("../components/customButton/CustomButton"));
var _reactNative = require("react-native");
var _common = _interopRequireDefault(require("../styles/common"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//React funcionalities

//Components

//Native components

//styles

var Game = function Game(props) {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _common.default.genericContainer
  }, /*#__PURE__*/_react.default.createElement(_CustomButton.default, {
    onClickCallback: props.callback,
    buttonContainerStyle: [_common.default.squareButton, _common.default.brandColorBg]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, null, "Game"));
};
var _default = Game;
exports.default = _default;