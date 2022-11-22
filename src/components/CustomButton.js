import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import propTypes from "prop-types";

const CustomButton = (props) => {
  const handleClick = () => {
    props.onClickCallback();
  };
  return (
    <TouchableOpacity onPressOut={handleClick}>
      <Text>Button2</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  onClickCallback: propTypes.func,
};

export default CustomButton;
