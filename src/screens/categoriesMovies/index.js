import React from "react";
import { Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { styles } from "./styles";

const CategoriesMovies = ({ navigation }) => {
  return (
    <ImageBackground style={styles.container} source={require("../../../assets/background2.gif")}>
      <Image source={require("../../../assets/logo.png")} />
      <TouchableOpacity onPress={() => navigation.navigate("Movies", {saga: "original"})} >
        <Text style={styles.main}>original trilogy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Movies", {saga: "prequels"})}>
        <Text style={styles.main}>Prequels</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
};

export default CategoriesMovies;
