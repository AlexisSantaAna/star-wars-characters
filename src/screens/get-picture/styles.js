import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.black,
    },
    scrollView: {
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        color: colors.yellow,
        fontFamily: "Star-Regular",
        fontSize: 26,
        marginTop: 20,
    },
    preview: {
        flexDirection: "row",      
        marginTop: 20,
        width: "100%",
        height: 450,
        width: 300,
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
    sable: {
        resizeMode: "center",
        height: "100%"
    }
})