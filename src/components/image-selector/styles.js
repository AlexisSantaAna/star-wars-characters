import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        width: "100%",
        height: 350,
        width: 280,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.white,
        borderWidth: 2,
        borderRadius: 6
    },
    image: {
        width: "100%",
        height: "100%",
    },
    text: {
        color: colors.white
    }
})