//React funcionalities
import React, { useState } from "react";

//Components
import CustomButton from "../components/customButton/CustomButton";

//Native components
import { Text, View } from "react-native";
// risutati
import {GameResult} from '../utils/GameResult'

//styles
import common from "../styles/common";

// import image icon
import wine from "../assets/img/wine.png";
import beer from "../assets/img/beer.png";
import martini from "../assets/img/martini.png";
// arrray di icone
const IconArray = [wine, beer, martini];

const Game = (props) => {
  // stati
  const [state, setState] = useState({
    attempts: 1,
    result: {},
    points: {
      user: 0,
      cpu: 0,
    },
    moves: {
      user: 0,
      cpu: 0,
    },
  });

  const getResult = () => {
    // randome cpu choice
    let randomCpuChoice = Math.floor(Math.random() * 3);
    // eseguo il risultato
    const risutato = GameResult(state.moves.user,randomCpuChoice)
    // aumento il punteggio
    
    // set state result
    // setState({
    //   ...state,

    // })
  }

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
