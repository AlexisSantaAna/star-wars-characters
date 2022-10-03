import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CharactersNavigator from "./starwars";
import MoviesNavigator from "./movies";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {backgroundColor: "#000", height: 55}, tabBarIconStyle: {marginTop: 8},tabBarLabelStyle: {color: "#fff", fontSize: 16, fontFamily: "Dos"} }}>
      <BottomTab.Screen
        name="Personajes"
        component={CharactersNavigator}
        options={{ title: "Characters", tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "body" : "body-outline"} size={24} color={"#fff"}/>
        ) }}
      />
      <BottomTab.Screen
        name="Peliculas"
        component={MoviesNavigator}
        options={{ title: "Movies", tabBarIcon: ({focused}) => (
          <Ionicons name={focused ? "film" : "film-outline"} size={24} color={"#fff"}/>
        ) }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
