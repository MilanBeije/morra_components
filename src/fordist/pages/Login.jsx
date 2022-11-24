//React functionalities
import React, { useEffect } from "react";
import { Platform } from "react-native";

//Native components
import { StyleSheet, Image, View, ImageBackground } from "react-native";
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
    <View style={[common.fullScreenSize, common.positionRelative]}>
      <ImageBackground
        source={BackgroundPicture}
        resizeMode={"cover"}
        style={[common.imageBg, common.positionAbsolute]}
      />
      {/* <Text>Login</Text> */}
      <Image
        source={Logo}
        style={{
          height: "300px",
          width: "300px",
          marginHorizontal: "auto",
          marginVertical: 30,
          marginBottom: 60,
        }}
        resizeMode={"contain"}
      />
      <CustomInput
        callback={getValueUsername()}
        styleCss={common.inputBox}
        placeholder={"inserisci userName"}
        placeholderColor={common.brandColorText.color}
      />
      <CustomInput
        callback={getValueEmail()}
        styleCss={common.inputBox}
        placeholder={"inserisci Email"}
        placeholderColor={common.brandColorText.color}
      />
      <CustomButton
        onClickCallback={navigateToGame}
        buttonContainerStyle={[
          common.squareButton,
          common.brandColorBg,
          common.centerItems,
        ]}
        label={"GIOCA"}
        buttonTextStyle={[
          common.boldFont,
          common.normalTextSize,
          common.secondaryColorText,
        ]}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
