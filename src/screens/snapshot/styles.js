import { StyleSheet } from "react-native";
import colors from "../../utils/colors";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.black
    },
    scrollView: {
        justifyContent: "center",
        alignItems: "center"
    },
    imageContainer: {
        borderRadius: 6,
        borderColor: colors.white,
        borderWidth: 2
    },
    title: {
        color: colors.white,
        fontSize: 24,
        paddingVertical: 20,
        fontFamily: "Star-Regular",
        color: colors.yellow
    },
    input: {
        color: colors.white,
        backgroundColor: colors.background,
        width: 280,
        marginVertical: 10,
        borderRadius: 6,
        borderColor: colors.white,
        borderWidth: 2,
        fontSize: 16,
        textAlign: "center"
    },
    label: {
        color: colors.white,
        textAlign: "center",
        fontFamily: "Dos",
        fontSize: 24,
        marginVertical: 2
    },
    disabled: {
        color: colors.gray,
        textAlign: "center",
        fontFamily: "Dos",
        fontSize: 24,
        marginVertical: 2
    }
})