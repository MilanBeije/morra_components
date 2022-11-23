//React funcionalities
import React from "react";

//Components
import CustomButton from "../components/customButton/CustomButton";

//Native components
import { Text, View } from "react-native";

//styles
import common from "../styles/common";

const Game = (props) => {
  return (
    <View style={common.genericContainer}>
      <CustomButton
        onClickCallback={props.callback}
        buttonContainerStyle={[common.squareButton, common.brandColorBg]}
      />
      <Text>Game</Text>
    </View>
  );
};

export default Game;
