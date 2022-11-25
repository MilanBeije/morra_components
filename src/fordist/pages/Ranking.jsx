//React functionalities
import React, { useEffect, useState } from "react";

//Native components
import {
  Image,
  View,
  Text,
  FlatList,
  Dimensions,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from "react-native";

//Components
import CustomButton from "../components/customButton/CustomButton";

//utils
import { getUsers } from "../utils/getUsers";

// media
import boss from "../assets/img/boss.png";
import BackgroundPicture from "../assets/img/bg2.jpg";

// colori
const brandColor = "#F752E0";
const secondaryColor = "#3DD8FC";
const tertiaryColor = "#FFE045";

let oldUsers;

const Ranking = (props) => {
  const [allUsers, setUsers] = useState([]);

  useEffect(() => {
    setOldUsers();
  }, []);

  const setOldUsers = async () => {
    oldUsers = await getUsers();
    oldUsers.sort((a, b) => (a.score > b.score ? -1 : 1));
    setUsers(oldUsers);
  };

  const navigateToGame = async () => {
    props.callback();
  };

  const keyExtractor = (item, idx) => {
    return item?.id?.toString() || idx?.toString();
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: 300,
          padding: 10,
        }}
      >
        <Text style={{ color: secondaryColor, fontSize: 18 }}>
          {item.userName}
        </Text>
        <Text style={{ color: secondaryColor, fontSize: 18 }}>
          {item.gameWon}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={BackgroundPicture}
        resizeMode={"cover"}
        style={styles.ImageBAckground}
      />

      <View style={{ display: "flex" ,height:'5%'}}>
        <Text
          style={{
            borderBottomColor: brandColor,
            paddingHorizontal: 10,
            borderBottomWidth: 3,
            color: brandColor,
            fontWeight: "bold",
            fontSize: 40,
            textAlign: "center",
          }}
        >
          CLASSIFICA
        </Text>
      </View>

      <View style={{ display: "flex", alignItems: "center",height:'25%' }}>
        <Image
          source={boss}
          style={{
            width: 200,
            height: '100%',
            transform: [{ rotate: "-10deg" }],
          }}
        />
      </View>

      <View
        style={{
          display:'flex',
          height:'40%',
          alignItems: "center",
          backgroundColor: "#0000008a",
          width: 300,
          margin: "auto",
          borderRadius: 5,
          borderWidth: 3,
          borderColor: tertiaryColor,
          paddingVertical: 10,
          alignSelf: "center",
        }}
      >
        <FlatList
        style={{height:'100%'}}
          data={allUsers}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
      <View style={{ display: "flex", alignItems: "center",height:'20%' }}>
        <CustomButton
          onClickCallback={navigateToGame}
          buttonContainerStyle={{
            borderRadius: 5,
            width: 300,
            height: 40,
            marginVertical: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          label={"ESCI"}
          buttonTextStyle={{
            fontWeight: "bold",
            fontSize: 30,
            color: brandColor,
            textDecorationLine: "underline",
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
  );
};

export default Ranking;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // alignItems:'center'
  },
  ImageBAckground: {
    width: '100%',
    height: '100%',
    position: "absolute",
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
