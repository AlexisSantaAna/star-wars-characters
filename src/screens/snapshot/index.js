import React from "react";
import { useState } from "react";
import { ImageBackground, View, Text, Input, TextInput, Button } from "react-native";
import ImageSelector from "../../components/image-selector";
import { styles } from "./styles";

const Snapshot = () => {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    console.log(image, name)

    const onHandleChange = (text) => {
        setName(text)
    }

    const onHandleImage = (imageUri) => {
        setImage(imageUri)
    }

    return (
        <ImageBackground style={styles.container} source={require("../../../assets/background.gif")} >
            <Text style={styles.title}>Become a character</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Write your name</Text>
                <TextInput
                    label="Name"
                    style={styles.input}
                    onChangeText={onHandleChange}
                />
            </View>
            <ImageSelector onImage={onHandleImage} />            
        </ImageBackground>
    )
}

export default Snapshot