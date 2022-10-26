import React from "react";
import { ImageBackground, Image, Text, ScrollView, View } from "react-native";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const GetPicture = () => {
    const snapshot = useSelector(state => state.snapshot.snapshot)

    return (
        <ImageBackground style={styles.container} source={require("../../../assets/background.gif")} >
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.name}>{snapshot.name}</Text>
                <View style={styles.preview}>
                    <ImageBackground style={styles.image} source={{ uri: snapshot.image }} >                        
                        <Image style={styles.sable} source={require("../../../assets/sable.png")} />
                    </ImageBackground>
                </View>
            </ScrollView>
            <Image style={styles.grogu} source={require("../../../assets/grogu.png")} />
        </ImageBackground>
    )
}

export default GetPicture