import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ImageBackground, View } from "react-native";
import CharactersStarWars from "../../components/CharactersStarWars";
import { styles } from "./styles";

const Characters = ({ route, navigation }) => {
  const { species } = route.params;

  const [loading, setLoading] = useState(true);
  const [db, setDb] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
      .then((response) =>
        setDb(
          response.data.filter((element) => {
            return element.species == `${species}`.toLowerCase();
          })
        )
      )
      .catch((error) => setError(error))
      .then(() => setLoading(false));
  }, []);

  return (
    <ImageBackground style={styles.externalContainer} source={require("../../../assets/background.gif")}>
      {loading && (
        <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      )}
      {!loading && (
        <View style={styles.container}>
          <FlatList
            data={db}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CharactersStarWars
                image={`${item?.image}`}
                name={item.name}
                item={item}
                navigation={navigation}
              />
            )}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default Characters;
