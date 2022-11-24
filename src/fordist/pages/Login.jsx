//React functionalities
import React, { useEffect } from "react";

//Native components
import {
  Image,
  View,
  ImageBackground,
  Platform,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Components
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton/CustomButton";

//styles
import common from "../styles/common";

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
      localStorage.setItem("users", JSON.stringify(newUsers));
    } else {
      try {
        const JSONnewUsers = JSON.stringify(newUsers);
        await AsyncStorage.setItem("@users", JSONnewUsers);
      } catch (e) {
        console.log(e);
      }
    }
    props.callback();
    //localStorage.clear();
  };
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        position: "relative",
      }}
    >
      <ImageBackground
        source={BackgroundPicture}
        resizeMode={"contain"}
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          position: "absolute",
        }}
      />
      {/* <Text>Login</Text> */}
      <Image
        source={Logo}
        style={{
          height: 300,
          width: 300,
          marginHorizontal: "auto",
          marginVertical: 30,
          marginBottom: 60,
        }}
        resizeMode={"contain"}
      />
      <CustomInput
        callback={getValueUsername()}
        styleCss={{
          height: 40,
          width: 300,
          marginVertical: 12,
          margin: "auto",
          borderWidth: 5,
          padding: 10,
          backgroundColor: "transparent",
          borderRadius: 3,
          borderColor: brandColor,
          borderWidth: 1,
          backgroundColor: "#0000008a",
          color: brandColor,
        }}
        placeholder={"inserisci userName"}
        placeholderColor={brandColor}
      />
      <CustomInput
        callback={getValueEmail()}
        styleCss={{
          height: 40,
          width: 300,
          marginVertical: 12,
          margin: "auto",
          borderWidth: 5,
          padding: 10,
          backgroundColor: "transparent",
          borderRadius: 3,
          borderColor: brandColor,
          borderWidth: 1,
          backgroundColor: "#0000008a",
          color: brandColor,
        }}
        placeholder={"inserisci Email"}
        placeholderColor={brandColor}
      />
      <CustomButton
        onClickCallback={navigateToGame}
        buttonContainerStyle={{
          borderRadius: 5,
          width: 300,
          height: 40,
          marginHorizontal: "auto",
          marginVertical: 30,
          backgroundColor: brandColor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        label={"GIOCA"}
        buttonTextStyle={{
          fontWeight: "bold",
          fontSize: 30,
          color: secondaryColor,
        }}
      />
    </View>
  );
};

export default Login;
