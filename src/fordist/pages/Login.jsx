//React functionalities
import React, { useEffect } from "react";

//Native components
import {
  Image,
  View,
  ImageBackground,
  Platform,
  Dimensions,
  StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Components
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton/CustomButton";

//utils
import { getUsers } from "../utils/getUsers";

// media
import BackgroundPicture from "../assets/img/bg2.jpg";
import Logo from "../assets/img/logoNoPadding.png";

// colori
const brandColor = "#F752E0";
const secondaryColor = "#3DD8FC";
const tertiaryColor = "#FFE045";

let User = {
  userName: "",
  email: "",
  gameWon: 0,
};

let oldUsers;

const Login = (props) => {
  useEffect(() => {
    console.log(Platform);
    setOldUsers();
    console.log(oldUsers);
  }, []);

  const setOldUsers = async () => {
    oldUsers = await getUsers();
  };

  const getValueUsername = () => (params) => {
    console.log(params);
    User.userName = params;
  };
  const getValueEmail = () => (params) => {
    console.log(params);
    User.email = params;
  };
  const navigateToGame = async () => {
    let newUsers = oldUsers;
    let find = false;
    console.log(newUsers);
    if (oldUsers.length === 0 || null) {
      newUsers.push(User);
    } else {
      oldUsers.forEach((element) => {
        if (element.email === User.email) {
          find = !find;
        }
      });
      if (find !== true) {
        newUsers.push(User);
      }
    }
    if (Platform.OS === "web") {
      // salvo nella lista di tutti gli utentu
      localStorage.setItem("users", JSON.stringify(newUsers));
      // salvo l'utente attualmente loggato
      localStorage.setItem("currentUser",JSON.stringify(User));
    } else {
      try {
        const JSONnewUsers = JSON.stringify(newUsers);
        await AsyncStorage.setItem("@users", JSONnewUsers);
        // salvo l'utente corrente
        await AsyncStorage.setItem("@currentUser", JSON.stringify(User));
      } catch (e) {
        console.log(e);
      }
    }
    props.callback();
    //localStorage.clear();
  };
  return (
    <View
      style={styles.mainView}
    >
      <ImageBackground
        source={BackgroundPicture}
        resizeMode={"cover"}
        style={styles.ImageBAckground}
      />
      {/* <Text>Login</Text> */}
      <Image
        source={Logo}
        style={styles.LogoImage}
        resizeMode={"contain"}
      />
      <CustomInput
        callback={getValueUsername()}
        styleCss={styles.InputCustom}
        placeholder={"inserisci userName"}
        placeholderColor={brandColor}
      />
      <CustomInput
        callback={getValueEmail()}
        styleCss={styles.InputCustom}
        placeholder={"inserisci Email"}
        placeholderColor={brandColor}
      />
      <CustomButton
        onClickCallback={navigateToGame}
        buttonContainerStyle={styles.ButtonContainerStyle}
        label={"GIOCA"}
        buttonTextStyle={styles.ButtonTextStyle}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  mainView:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "relative",
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  ImageBAckground : {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
  },
  LogoImage:{
    height: 300,
    width: 300,
    marginVertical: 30,
    marginBottom: 60,
  },
  InputCustom:{
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
  ButtonContainerStyle:{
    borderRadius: 5,
    width: 300,
    height: 40,
    marginVertical: 30,
    backgroundColor: brandColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonTextStyle:{
    fontWeight: "bold",
    fontSize: 30,
    color: secondaryColor,
  }
})