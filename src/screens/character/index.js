import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Character = () => {
  const [loading, setLoading] = useState(true);

  const character = useSelector((state) => state.characters.selected);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  return (
    <ImageBackground
      style={styles.externalContainer}
      source={require("../../../assets/background.gif")}
    >
      <View style={styles.container}>
        {loading ? (
          <Text style={styles.title}>Required info incoming...</Text>
        ) : (
          <>
            <Text style={styles.text}>Name: {character.name}</Text>
            <Text style={styles.text}>Height: {character.height}</Text>
            <Text style={styles.text}>Gender: {character.gender}</Text>
            {character.homeworld && <Text style={styles.text}>Homeworld: {character.homeworld}</Text>}
            {character.died && <Text style={styles.text}>Death location: {character.died}</Text>}
            {character.hair && <Text style={styles.text}>Hair: {character.hair}</Text>}
            {character.eyes && <Text style={styles.text}>Eyes: {character.eyes}</Text>}
            {character.skin && <Text style={styles.text}>Skin: {character.skin}</Text>}
            {character.cybernetics && <Text style={styles.text}>Cybernetics: {character.cybernetics}</Text>}
            {character.creator && <Text style={styles.text}>Creator: {character.creator}</Text>}
            {character.manufacturer && <Text style={styles.text}>Manufacturer: {character.manufacturer}</Text>}
            {character.model && <Text style={styles.text}>Model: {character.model}</Text>}
            {character.plating && <Text style={styles.text}>Plating: {character.plating}</Text>}
            {character.masters && <Text style={styles.text}>Masters: {character.masters}</Text>}
            {character.apprentices && <Text style={styles.text}>Apprentices: {character.apprentices}</Text>}
            {character.classs && <Text style={styles.text}>Class: {character.classs}</Text>}
            {character.sensor && <Text style={styles.text}>Sensor: {character.sensor}</Text>}
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default Character;
