import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "Dos",
    color: colors.white,
    paddingVertical: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  opening: {
    fontSize: 20,
    fontFamily: "Dos",
    color: colors.yellow,
    paddingTop: 30,
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "Dos",
    color: colors.white,
    paddingVertical: 2,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    margin: 20,
    borderRadius: 6,
    borderColor: colors.white,
    borderWidth: 2,
    padding: 20,
  },
  loading: {
    color: colors.white,
  },
  externalContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
