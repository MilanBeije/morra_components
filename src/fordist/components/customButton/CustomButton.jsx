//React functionalities
import React from "react";
import propTypes from "prop-types";

//Native components
import { Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
  const handleClick = () => {
    props.onClickCallback();
  };
  return (
    <TouchableOpacity
      onPressOut={handleClick}
      style={props.buttonContainerStyle}
      hitSlop={20}
    >
      <Text style={props.buttonTextStyle}>{props.label}</Text>
      {props.children}
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onClickCallback: propTypes.func.isRequired,
  children: propTypes.any,
  label: propTypes.any,
  buttonContainerStyle: propTypes.any,
  buttonTextStyle: propTypes.any,
};

export default CustomButton;
