import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  ImageBackground,
} from "react-native";
import MoviesStarWars from "../../components/MoviesStarWars";
import { styles } from "./styles";
import { useSelector } from "react-redux";


const Movies = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const movies = useSelector((state) => state.movies.filtered);
  
  useEffect(() => {
    setLoading(false);
  }, [movies]);

  return (
    <ImageBackground
      style={styles.externalContainer}
      source={require("../../../assets/background.gif")}
    >
      {loading && (
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      )}

      {!loading && (
        <View style={styles.container}>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.episode_id.toString()}
            renderItem={({ item }) => (
              <MoviesStarWars
                title={item.title}
                item={item}
                navigation={navigation}
                episode={item.episode_id.toString()}
              />
            )}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default Movies;
