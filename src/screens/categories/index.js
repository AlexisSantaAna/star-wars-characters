import React from "react";
import { Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { selectCharacters } from "../../store/actions";

const Categories = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require("../../../assets/background.gif")}
    >
      <Image
        source={require("../../../assets/logo.png")}
        style={{ height: 180, resizeMode: "contain" }}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(selectCharacters("human"));
          navigation.navigate("Characters", { species: "Human" });
        }}
      >
        <Text style={styles.main}>Humans</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(selectCharacters("droid"));
          navigation.navigate("Characters", { species: "Droid" });
        }}
      >
        <Text style={styles.main}>Droids</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Categories;
