import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import { View, Text, Image, Button } from "react-native"
import { styles } from "./styles";
import colors from "../../utils/colors";

const ImageSelector = ({ onImage }) => {
    const [pickedUrl, setPickedUrl] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== "granted") {
            Alert.alert("You need to grant permiso a la cámara, guachin", [{ text: "Ok" }])
            return false
        }
        return true
    }

    const onHandleTakePhoto = async () => {
        const hasPermission = await verifyPermissions()

        if (!hasPermission) return

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        })

        setPickedUrl(image.uri)
        onImage(image.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text style={styles.text}>No image picked yet.</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedUrl }} />
                )}
            </View>
            <Button
                title="Take Photo"
                color={colors.background}
                style={styles.btn}
                onPress={onHandleTakePhoto}
            />
            <Button
                title="Submit!"
                onPress={() => { }}
            />
        </View>
    )
}

export default ImageSelector