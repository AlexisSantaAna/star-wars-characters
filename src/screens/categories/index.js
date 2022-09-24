import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Categories = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.jpg")} />
      <TouchableOpacity onPress={() => navigation.navigate("Characters", {species: "Human"})} >
        <Text style={styles.main}>Humans</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Characters", {species: "Droid"})}>
        <Text style={styles.main}>Droids</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Categories;
