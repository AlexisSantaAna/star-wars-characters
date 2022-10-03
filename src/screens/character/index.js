import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";

const Character = ({ route }) => {
  const [loading, setLoading] = useState(true);

  const { name, height, gender, homeworld, hair, eyes, skin, died, cybernetics, creator, manufacturer, model, plating, masters, apprentices, classs, sensor } = route.params;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  return (
    <ImageBackground style={styles.externalContainer} source={require("../../../assets/background.gif")}>
      <View style={styles.container}>
        {loading ? (
          <Text style={styles.title}>Required info incoming...</Text>
        ) : (
          <>
            <Text style={styles.text}>Name: {name}</Text>
            <Text style={styles.text}>Height: {height}</Text>
            <Text style={styles.text}>Gender: {gender}</Text>
            {homeworld && <Text style={styles.text}>Homeworld: {homeworld}</Text>}
            {died && <Text style={styles.text}>Death location: {died}</Text>}
            {hair && <Text style={styles.text}>Hair: {hair}</Text>}
            <Text style={styles.text}>Eyes: {eyes}</Text>
            {skin && <Text style={styles.text}>Skin: {skin}</Text>}
            {cybernetics && <Text style={styles.text}>Cybernetics: {cybernetics}</Text>}
            {creator && <Text style={styles.text}>Creator: {creator}</Text>}
            {manufacturer && <Text style={styles.text}>Manufacturer: {manufacturer}</Text>}
            {model && <Text style={styles.text}>Model: {model}</Text>}
            {plating && <Text style={styles.text}>Plating: {plating}</Text>}
            {masters && <Text style={styles.text}>Masters: {masters}</Text>}
            {apprentices && <Text style={styles.text}>Apprentices: {apprentices}</Text>}
            {classs && <Text style={styles.text}>Class: {classs}</Text>}
            {sensor && <Text style={styles.text}>Sensor: {sensor}</Text>}
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default Character;
