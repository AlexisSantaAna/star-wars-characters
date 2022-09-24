import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Characters, Character } from "../screens";

const Stack = createNativeStackNavigator();

const CharactersNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Character" component={Character} />
    </Stack.Navigator>
  );
};

export default CharactersNavigator;
