//react functionalities
import React from "react";
import propTypes from "prop-types";

//Native components
import { TextInput, View } from "react-native";

const CustomInput = (props) => {
  const typing = (e) => {
    props.callback(e);
  };
  return (
    <View>
      <TextInput
        secureTextEntry={props.password}
        style={props.styleCss}
        onChangeText={typing}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
      />
    </View>
  );
};

CustomInput.propTypes = {
  callback: propTypes.any,
  styleCss: propTypes.object,
  placeholder: propTypes.string,
  password: propTypes.bool,
  placeholderColor: propTypes.any
};
export default CustomInput;
