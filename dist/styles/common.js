"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _default = _reactNative.StyleSheet.create({
  genericContainer: {
    flex: 1
  },
  container2: {
    flex: 2
  },
  container3: {
    flex: 3
  },
  positionRelative: {
    position: "relative"
  },
  positionAbsolute: {
    position: "absolute"
  },
  column: {
    flexDirection: "column"
  },
  row: {
    display: "flex",
    flexDirection: "row"
  },
  spaceAround: {
    justifyContent: "space-around"
  },
  rowHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fullScreenSize: {
    width: _reactNative.Dimensions.get("window").width,
    height: _reactNative.Dimensions.get("window").height
  },
  centerItems: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  centerVertical: {
    alignItems: "center"
  },
  centerHorizontal: {
    justifyContent: "center"
  },
  paddingContainer: {
    paddingVertical: 30,
    paddingHorizontal: 6
  },
  paddingContainer2: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  paddingBottom: {
    paddingBottom: 15
  },
  paddingX: {
    paddingHorizontal: 10
  },
  paddingY: {
    paddingVertical: 20
  },
  marginY: {
    marginVertical: 10
  },
  brandColorBg: {
    backgroundColor: "#F752E0"
  },
  brandColorText: {
    color: "#F752E0"
  },
  secondaryBg: {
    backgroundColor: "#3DD8FC"
  },
  secondaryColorText: {
    color: "#3DD8FC"
  },
  trdBg: {
    backgroundColor: "#FFE045"
  },
  trdText: {
    color: "#FFE045"
  },
  darkColorBg: {
    backgroundColor: "#004B23"
  },
  darkColorText: {
    color: "#004B23"
  },
  lightColorBg: {
    backgroundColor: "#CCFF33"
  },
  lightColorText: {
    color: "#CCFF33"
  },
  blackBg: {
    backgroundColor: "#101010"
  },
  blackText: {
    color: "#101010"
  },
  titleFont: {
    fontSize: 40
  },
  whiteColor: {
    color: "#f6f6f6"
  },
  boldFont: {
    fontWeight: "bold"
  },
  smallText: {
    fontSize: 13
  },
  halfWidth: {
    width: "50%"
  },
  normalTextSize: {
    fontSize: 20
  },
  textCenter: {
    textAlign: "center"
  },
  lineThrough: {
    textDecorationLine: "line-through"
  },
  underline: {
    textDecorationLine: "underline"
  },
  textMaiusc: {
    textTransform: "uppercase"
  },
  marginRigth: {
    marginRight: 10
  },
  paddingHeader: {
    paddingHorizontal: 3,
    paddingVertical: 5
  },
  buttonBoxHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  inputBox: {
    height: 40,
    width: 300,
    marginVertical: 12,
    borderWidth: 2,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  buttonSos: {
    height: 200,
    width: 200,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200
  },
  sosText: {
    fontSize: 70
  },
  contacts: {
    height: 40,
    width: 40,
    borderRadius: 40
  },
  squareButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  image: {
    width: "100%",
    height: 40
  },
  imageBg: {
    width: "100%",
    height: "100%"
  },
  wpButton: {
    backgroundColor: "#25D366"
  },
  zIndexMax: {
    zIndex: 100
  }
});
exports.default = _default;