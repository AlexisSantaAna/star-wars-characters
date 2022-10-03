import React from "react";
import { Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

const CategoriesMovies = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container} source={require("../../../assets/background.gif")}>
      <Image source={require("../../../assets/logo.png")} style={{height: 180, resizeMode: "contain"}}/>
      <TouchableOpacity onPress={() => navigation.navigate("Movies", {saga: "Original saga"})} >
        <Text style={styles.main}>original trilogy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Movies", {saga: "Prequels"})}>
        <Text style={styles.main}>Prequels</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
};

export default CategoriesMovies;
