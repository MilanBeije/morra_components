//React functionalities
import React, { useEffect } from "react";
import { Platform } from "react-native";

//Native components
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Components
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton/CustomButton";

//styles
import common from "../styles/common";

//utils
import { getUsers } from "../utils/getUsers";

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
    <View style={common.genericContainer}>
      <Text>Login</Text>
      <CustomInput
        callback={getValueUsername()}
        styleCss={common.inputBox}
        placeholder={"inserisci userName"}
      />
      <CustomInput
        callback={getValueEmail()}
        styleCss={common.inputBox}
        placeholder={"inserisci Email"}
      />
      <CustomButton
        onClickCallback={navigateToGame}
        buttonContainerStyle={[common.squareButton, common.brandColorBg]}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
