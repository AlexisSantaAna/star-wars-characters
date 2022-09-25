import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import CharactersStarWars from "../../components/CharactersStarWars";
import { styles } from "./styles";

const Characters = ({ route }) => {
  const { species } = route.params;
  console.log(species);

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
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={db}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CharactersStarWars
              image={`${item?.image}`}
              name={item.name}
              item={item}
            />
          )}
        />
      )}
    </View>
  );
};

export default Characters;
