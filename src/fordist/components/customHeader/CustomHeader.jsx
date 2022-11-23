//react functionalitites
import React from "react";
import propTypes from "prop-types";

//Native components
import { View, Text } from "react-native";

//components
import CustomButton from "../customButton/CustomButton";

//styles
import common from "../../styles/common";

const CustomHeader = () => {
  return (
    <View
      style={[
        common.secondaryBg,
        common.paddingHeader,
        common.rowHeader,
        common.zIndexMax,
      ]}
    >
      {props.buttonVisible ? (
        <CustomButton
          label={"⬅"}
          callback={callbackHeader}
          buttonContainerStyle={[common.buttonBoxHeader]}
          buttonTextStyle={[
            common.boldFont,
            common.normalTextSize,
            common.darkColorText,
          ]}
        />
      ) : (
        <Text></Text>
      )}
      <Text
        style={[
          common.textCenter,
          common.blackText,
          common.boldFont,
          common.normalTextSize,
        ]}
      >
        {props.title}
      </Text>
      <Text></Text>
    </View>
  );
};

CustomHeader.propTypes = {
  title: propTypes.string,
  headerFunction: propTypes.any,
  buttonVisible: propTypes.boolean,
};

export default CustomHeader;
