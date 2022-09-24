import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import AppNavigator from "./src/navigation";

export default function App() {
  const [loaded] = useFonts({
    "Star-Regular": require("./assets/fonts/Star-Regular.ttf"),
    "Star-Doble": require("./assets/fonts/Star-Doble.ttf"),
    "Star-White": require("./assets/fonts/Star-White.ttf"),
  });

  if (!loaded) {
    <ActivityIndicator size="large" color="#fff" />;
  }

  return <AppNavigator />;
}
