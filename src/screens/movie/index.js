import React, { useEffect, useState } from "react";
import { Text, View, FlatList, ImageBackground } from "react-native";
import { styles } from "./styles";

const Movie = ({ route }) => {
  const [loading, setLoading] = useState(true);

  const { title, opening, director, producer, release, id } = route.params;

  const movie = [
    {
      title,
      opening,
      director,
      producer,
      release,
      id,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1600);
  }, []);

  const renderItem = ({ item }) => (
    <>
      <Text style={styles.text}>Title: {item.title}</Text>
      <Text style={styles.text}>Director: {item.director}</Text>
      <Text style={styles.text}>Producer: {item.producer}</Text>
      <Text style={styles.text}>Release date: {item.release}</Text>
      <Text style={styles.opening}>{item.opening}</Text>
    </>
  );

  return (
    <ImageBackground
      style={styles.externalContainer}
      source={require("../../../assets/background.gif")}
    >
      <View style={styles.container}>
        {loading ? (
          <Text style={styles.title}>Required info incoming...</Text>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={movie}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default Movie;
