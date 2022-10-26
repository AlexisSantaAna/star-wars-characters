import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  container: {
    margin: 20,
    borderRadius: 6,
    borderColor: colors.white,
    borderWidth: 2,
  },
  externalContainer: {
    flex: 1,
    backgroundColor: colors.black,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
