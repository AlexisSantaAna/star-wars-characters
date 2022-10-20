import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Snapshot } from "../screens";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();

const SnapshotNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Snapshot"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black
        },
        headerTitleAlign: "center",
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Dos",
          fontSize: 22
        }
      }}
    >
      <Stack.Screen
        name="Snapshot"
        component={Snapshot}
      />
    </Stack.Navigator>
  );
};

export default SnapshotNavigator;
