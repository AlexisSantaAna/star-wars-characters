import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesMovies, Movies, Movie } from "../screens";

const Stack = createNativeStackNavigator();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="CategoriesMovies">
      <Stack.Screen name="CategoriesMovies" component={CategoriesMovies} />
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
};

export default MoviesNavigator;
