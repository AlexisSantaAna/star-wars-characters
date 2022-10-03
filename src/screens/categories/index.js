import React from "react";
import { Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  return (
    <ImageBackground resizeMode="cover" style={styles.container} source={require("../../../assets/background.gif")}>
      <Image source={require("../../../assets/logo.png")} style={{height: 180, resizeMode: "contain"}}/>
      <TouchableOpacity onPress={() => navigation.navigate("Characters", {species: "Human"})} >
        <Text style={styles.main}>Humans</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Characters", {species: "Droid"})}>
        <Text style={styles.main}>Droids</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
};

export default Categories;
