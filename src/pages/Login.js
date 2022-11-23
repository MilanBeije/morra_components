//React functionalities
import React, { useEffect } from "react";
import { Platform } from "react-native-web";

//Native components
import { StyleSheet, Text, View } from "react-native";

//styles
import common from "../styles/common";

const Login = () => {
  useEffect(() => {
    log();
  }, []);

  const log = () => {
    console.log(Platform);
  };
  return (
    <View style={common.genericContainer}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
