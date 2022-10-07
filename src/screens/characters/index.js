import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  View,
} from "react-native";
import CharactersStarWars from "../../components/CharactersStarWars";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Characters = ({ route, navigation }) => {
  const { species } = route.params;
  // const [db, setDb] = useState()
  // const [error, setError] = useState({});
  const [loading, setLoading] = useState(true);

  const characters = useSelector((state) => state.characters.filtered);

  useEffect(() => {
    setLoading(false);
  }, [characters]);

  // useEffect(() => {
  //   axios
  //     .get("https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json")
  //     .then((response) =>
  //       setDb(
  //         response.data.filter((element) => {
  //           return element.species == `${species}`.toLowerCase();
  //         })
  //       )
  //     )
  //     .catch((error) => setError(error))
  //     .then(() => setLoading(false));
  // }, []);

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
            data={characters}
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
