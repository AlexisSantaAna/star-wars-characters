import React from "react";
import { useState } from "react";
import { ImageBackground, View, Text, Input, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import ImageSelector from "../../components/image-selector";
import { styles } from "./styles";

const Snapshot = ({navigation}) => {
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
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Become a character</Text>
                <View>
                    <Text style={styles.label}>Write your name</Text>
                    <TextInput
                        label="Name"
                        style={styles.input}
                        onChangeText={onHandleChange}
                    />
                </View>
                <ImageSelector onImage={onHandleImage} />
                <TouchableOpacity onPress={() => {navigation.navigate("Get Picture", {name: name + " Skywalker", image: image})}}>
                    <Text style={styles.label}>Create picture</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>

    )
}

export default Snapshot