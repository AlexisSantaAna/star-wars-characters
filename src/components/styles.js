import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 14,
    backgroundColor: "#121212",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontFamily: "Lato-Regular",
    fontSize: 20,
    paddingVertical: 5,
  },
  image: {
    flex: 1,
    width: 240,
    height: 320,
    resizeMode: "contain"
  }
});
