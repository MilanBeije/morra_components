//React funcionalities
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//Components
import CustomButton from "../components/customButton/CustomButton";

//Native components
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from "react-native";
// risutati
import { GameResult } from "../utils/GameResult";
// storage
import { getUsers, getCurrentUser } from "../utils/getUsers";

//styles
import common from "../styles/common";
// import bg image
import backgroundImage from "../assets/img/bg.png";
// import image icon
import wine from "../assets/img/wine.png";
import beer from "../assets/img/beer.png";
import martini from "../assets/img/martini.png";
import play from "../assets/img/play.png";
import loseBattle from "../assets/img/oops.png";
import winBattle from "../assets/img/cool.png";
import vs from "../assets/img/versus.png";
import winGame from "../assets/img/win.png";
import gameover from "../assets/img/gameover.png";
// arrray di icone
const IconArray = [wine, beer, martini];
// colori
const brandColor = "#F752E0";
const secondaryColor = "#3DD8FC";
const tertiaryColor = "#FFE045";

// variabili
let Pointsuser;
let Pointscpu;
let modalResult;
let currentUser;
let actualAttempts;

// websocket
var ws = new WebSocket('wss://socketsbay.com/wss/v2/1/8640c503f2738201c8205df96a493362/');

ws.onopen = () => {
  // connection opened
  ws.send('test'); // send a message
};

ws.onmessage = (e) => {
  // a message was received
  console.log(e.data);
};

ws.onerror = (e) => {
  // an error occurred
  console.log(e.message);
};

ws.onclose = (e) => {
  // connection closed
  console.log(e.code, e.reason);
};

const Game = (props) => {
  // stati
  const [state, setState] = useState({
    attempts: 1,
    userPoints: 0,
    cpuPoints: 0,
    movesCpu: 0,
    movesUser: 0,
    player: {},
    allUsers: [],
    result: {},
    showResult: 0,
    endGame: false,
    win: false,
  });

  useEffect(() => {
    getUserData();
    ws.onopen = () => {
      // connection opened
      ws.send('test'); // send a message
    };
  }, []);

  useEffect(() => {
    currentUser = state.player;
    // gestione risultato finale
    if (state.attempts > 3) {
      let gameWin = false;
      if (state.userPoints > state.cpuPoints) {
        currentUser.gameWon++;
        gameWin = true;
      }
      setState({
        ...state,
        win: gameWin,
        endGame: true,
      });
      // check
      if (state.allUsers.length > 0) {
        // cycle the players to find the same email
        state.allUsers.forEach((element) => {
          console.log(element.email, currentUser.email);
          if (element.email === currentUser.email) {
            element.gameWon += currentUser.gameWon;
          }
        });
      }
      updateUsers();
    }
  }, [state.attempts]);

  const getUserData = async () => {
    const user = await getCurrentUser();
    const allPlayers = await getUsers();
    console.log(user, allPlayers);
    setState({
      ...state,
      allUsers: allPlayers,
      player: user,
    });
  };

  const updateUsers = async () => {
    // store new record
    if (Platform.OS === "web") {
      // salvo nella lista di tutti gli utenti
      localStorage.setItem("users", JSON.stringify(state.allUsers));
    } else {
      try {
        const JSONnewUsers = JSON.stringify(state.allUsers);
        await AsyncStorage.setItem("@users", JSONnewUsers);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const getUserMove = (index) => () => {
    console.log(index);
    setState({
      ...state,
      movesUser: index,
    });
  };

  const manageModal = () => {
    setState({
      ...state,
      showResult: 0,
    });
  };

  const navigateToRanking = () => {
    // console.log("naivga alla classifica");
    props.navigateToRankingCallback();
  };
  const navigateToGame = () => {
    setState({
      ...state,
      endGame: false,
      win: false,
      attempts: 1,
      userPoints: 0,
      cpuPoints: 0,
      movesCpu: 0,
      movesUser: 0,
      showResult: 0,
    });
  };

  const getResult = async () => {
    // creo variabili d'appoggio per fare un solo set state
    Pointsuser = state.userPoints;
    Pointscpu = state.cpuPoints;
    actualAttempts = state.attempts;
    modalResult = state.showResult;
    // randome cpu choice
    let randomCpuChoice = Math.floor(Math.random() * 3);
    let sendThisUser = [{
      name:'user',
      choice: state.movesUser
    },
    {
      name:'cpu',
      choice: randomCpuChoice
    }
  ]
    let objectString = JSON.stringify(sendThisUser)
    ws.send(objectString);
    // ws.send(randomCpuChoice);
    // eseguo il risultato
    let battleResult = GameResult(state.movesUser, randomCpuChoice);
    console.log(battleResult);
    // aumento il punteggio
    if (battleResult.won === true) {
      Pointsuser++;
      actualAttempts++;
      modalResult = 1;
    } else if (battleResult.losses === true) {
      Pointscpu++;
      actualAttempts++;
      modalResult = 2;
    } else {
      modalResult = 3;
    }
    // set state result
    setState({
      ...state,
      userPoints: Pointsuser,
      cpuPoints: Pointscpu,
      movesCpu: randomCpuChoice,
      attempts: actualAttempts,
      result: battleResult,
      showResult: modalResult,
    });

    console.log(state);
  };

  return (
    <View style={styles.mainView}>
      {/* <ImageBackground
        source={backgroundImage}
        resizeMode={"cover"}
        style={styles.ImageBAckground}
      /> */}
      {/* status game */}
      {state.endGame === false ? (
        <View style={{ flex: 1 }}>
          <View className="statusGame" style={styles.statusGame}>
            <View className="attempts">
              <Text style={{ color: brandColor, fontWeight: "bold" }}>
                ROUND {state.attempts}
              </Text>
            </View>
            <View
              className="points"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <Text
                style={{
                  marginRight: 10,
                  color: brandColor,
                  fontWeight: "bold",
                }}
              >
                {state.player.userName} {state.userPoints} |
              </Text>
              <Text style={{ color: brandColor, fontWeight: "bold" }}>
                Cpu {state.cpuPoints}
              </Text>
            </View>
          </View>

          {/* cpu moves */}
          <View
            style={{
              display:'flex',
              flexDirection: "row",
              justifyContent: "space-around",
              height:'20%'
            }}
          >
            {IconArray.map((element, key) => {
              return (
                <View key={key} style={{height:'100%'}}>
                  <Image
                    source={element}
                    style={{
                      width: 100,
                      height: '100%',
                    }}
                    resizeMode={"contain"}
                  />
                </View>
              );
            })}
          </View>

          {/* get result */}
          <View
            style={{
              display:'flex',
              height:'55%',
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* { */}
            {/* // state.showResult &&  */}
            {state.showResult !== 0 && (
              <View
                style={{
                  display:'flex',
                  height:'90%',
                  flexDirection: "column",
                  alignItems: "center",
                  position: "absolute",
                  // height: 350,
                  width: 200,
                  backgroundColor: "#000000d1",
                  zIndex: 10,
                  top: 0,
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: `${
                    state.showResult === 1 ? secondaryColor : brandColor
                  }`,
                }}
              >
                {state.showResult === 1 && (
                  <Image
                    source={winBattle}
                    style={{
                      width: 150,
                      height: 150,
                    }}
                    resizeMode={"contain"}
                  />
                )}
                {state.showResult === 2 && (
                  <Image
                    source={loseBattle}
                    style={{
                      width: 150,
                      height: 150,
                    }}
                    resizeMode={"contain"}
                  />
                )}
                {state.showResult === 3 && (
                  <Image
                    source={vs}
                    style={{
                      width: 150,
                      height: 150,
                    }}
                    resizeMode={"contain"}
                  />
                )}
                <Text
                  style={{
                    color: `${
                      state.showResult === 1 ? secondaryColor : brandColor
                    }`,
                  }}
                >
                  {state.result.userLabel}
                </Text>
                <Text
                  style={{
                    color: `${
                      state.showResult === 1 ? secondaryColor : brandColor
                    }`,
                  }}
                >
                  {state.result.cpuLabel}
                </Text>
                <Text
                  style={{
                    color: `${
                      state.showResult === 1 ? secondaryColor : brandColor
                    }`,
                  }}
                >
                  {state.result.label}
                </Text>
                <Text
                  style={{
                    color: `${
                      state.showResult === 1 ? secondaryColor : brandColor
                    }`,
                  }}
                >
                  {state.userPoints} - {state.cpuPoints}
                </Text>
                <CustomButton
                  label={"CHIUDI"}
                  buttonTextStyle={{
                    color: `${
                      state.showResult === 1 ? brandColor : secondaryColor
                    }`,
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                  buttonContainerStyle={{
                    backgroundColor: `${
                      state.showResult === 1 ? secondaryColor : brandColor
                    }`,
                    borderRadius: 5,
                    width: 100,
                    height: 30,
                    marginVertical: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClickCallback={manageModal}
                />
              </View>
            )}
            {/* } */}
            <CustomButton
              onClickCallback={getResult}
              children={
                <Image
                  source={play}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                  resizeMode={"contain"}
                />
              }
            />
          </View>

          {/* user moves */}
          <View
            style={{
              display:'flex',
              height:'20%',
              flexDirection: "row",
              justifyContent: "space-around",
              zIndex: 5,
            }}
          >
            {IconArray.map((element, key, index) => {
              return (
                <View key={key} style={{height:'100%'}}>
                  <TouchableOpacity style={{height:'100%'}} onPress={getUserMove(key)}>
                    <Image
                      source={element}
                      style={{
                        width: 100,
                        height: '100%',
                      }}
                      resizeMode={"contain"}
                    />
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      ) : (
        <View
          style={{ display:'flex' ,flexDirection: "column", alignItems: "center",height:'100%' }}
        >
          {state.win ? (
            <View style={{display:'flex',height:'40%',justifyContent:'center',alignItems:'center'}}>
              <Image
                source={winGame}
                style={{
                  width: 300,
                  height: 300,
                }}
              />
            </View>
          ) : (
            <View style={{display:'flex',height:'40%',justifyContent:'center',alignItems:'center'}}>
              <Image
                source={gameover}
                style={{
                  width: 300,
                  height: 300,
                }}
              />
            </View>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems:'center',
              marginHorizontal: 10,
              width: 300,
              height:'20%'
            }}
          >
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text
                style={{ color: brandColor, fontSize: 20, fontWeight: "bold" }}
              >
                {state.player.userName}
              </Text>
              <Text
                style={{ color: brandColor, fontSize: 20, fontWeight: "bold" }}
              >
                {state.userPoints}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text
                style={{
                  color: tertiaryColor,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Cpu
              </Text>
              <Text
                style={{
                  color: tertiaryColor,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {state.cpuPoints}
              </Text>
            </View>
          </View>

          <View style={{display:'flex',flexDirection:'column',height:'40%',alignItems:'center',justifyContent:'center'}}>
            <CustomButton
              onClickCallback={navigateToRanking}
              buttonContainerStyle={{
                borderRadius: 5,
                width: 300,
                height: 40,
                marginVertical: 10,
                backgroundColor: tertiaryColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              label={"CLASSIFICA"}
              buttonTextStyle={{
                fontWeight: "bold",
                fontSize: 30,
                color: brandColor,
              }}
            />
            <CustomButton
              onClickCallback={navigateToGame}
              buttonContainerStyle={{
                borderRadius: 5,
                width: 300,
                height: 40,
                marginVertical: 10,
                backgroundColor: brandColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              label={"RIGIOCA"}
              buttonTextStyle={{
                fontWeight: "bold",
                fontSize: 30,
                color: tertiaryColor,
              }}
            />
          </View>

        </View>
      )}
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  statusGame: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomColor: brandColor,
    borderBottomWidth: 2,
    height:'5%'
  },
  LogoImage: {
    height: 300,
    width: 300,
    marginVertical: 30,
    marginBottom: 60,
  },
  InputCustom: {
    height: 40,
    width: 300,
    marginVertical: 12,
    borderWidth: 5,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 3,
    borderColor: brandColor,
    borderWidth: 1,
    backgroundColor: "#0000008a",
    color: brandColor,
  },
  ButtonContainerStyle: {
    borderRadius: 5,
    width: 300,
    height: 40,
    marginVertical: 30,
    backgroundColor: brandColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: secondaryColor,
  },
});
