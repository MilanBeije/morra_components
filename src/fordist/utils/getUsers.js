import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUsers = async () => {
  let oldUsers = [];
  if (Platform.OS === "web") {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    return (oldUsers = allUsers !== null ? allUsers : []);
  } else {
    const allUsers = JSON.parse(await AsyncStorage.getItem("@users"));
    return (oldUsers = allUsers !== null ? allUsers : []);
  }
};

export const getCurrentUser = async () => {
  let oldUsers = [];
  if (Platform.OS === "web") {
    return JSON.parse(localStorage.getItem("currentUser"));
  } else {
    return JSON.parse(await AsyncStorage.getItem("@currentUser"));
  }
};
