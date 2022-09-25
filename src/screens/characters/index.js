import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
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

  console.log(db);

  return (
    <View style={styles.externalContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" style={styles.loader}/>
      ) : (
        <FlatList
          style={styles.container}
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
      )}
    </View>
  );
};

export default Characters;
