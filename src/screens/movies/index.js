import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View, Text } from "react-native";
import MoviesStarWars from "../../components/MoviesStarWars";
import { styles } from "./styles";

const Movies = ({ route, navigation }) => {
  const { saga } = route.params;

  const [loading, setLoading] = useState(true);
  const [db, setDb] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) =>
        setDb(
          response.data.results.filter((movie) => {
            if (saga === "Original saga") {
              return (
                movie.episode_id === 4 ||
                movie.episode_id === 5 ||
                movie.episode_id === 6
              );
            } else {
              return (
                movie.episode_id === 1 ||
                movie.episode_id === 2 ||
                movie.episode_id === 3
              );
            }
          })
        )
      )
      .catch((error) => setError(error))
      .then(() => setLoading(false));
  }, []);

  return (
    <View style={styles.externalContainer}>
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#fff" style={styles.loader} />
        ) : (
          <FlatList
            data={db}
            keyExtractor={(item) => item.episode_id.toString()}
            renderItem={({ item }) => (
              <MoviesStarWars
                name={item.title}
                item={item}
                navigation={navigation}
                episode={item.episode_id.toString()}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

export default Movies;
