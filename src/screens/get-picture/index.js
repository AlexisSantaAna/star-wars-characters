import React from "react";
import { ImageBackground, Image, Text, ScrollView, View } from "react-native";
import { styles } from "./styles";

const GetPicture = ({ route }) => {
    console.log(route.params.name, route.params.image)
    return (
        <ImageBackground style={styles.container} source={require("../../../assets/background.gif")} >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.name}>{route.params.name}</Text>
                <View style={styles.preview}>
                    <Image style={styles.image} source={{ uri: route.params.image }} />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default GetPicture