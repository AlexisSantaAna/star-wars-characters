import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker"
import { View, Text, Image, Button, TouchableOpacity } from "react-native"
import { styles } from "./styles";
import colors from "../../utils/colors";
import { useEffect } from "react";

const ImageSelector = ({ onImage, previousImage }) => {
    const [pickedUrl, setPickedUrl] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        console.log(`Status: ${status}`)

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
            aspect: [4, 5],
            quality: 0.5
        })

        if (!image.cancelled) {
            setPickedUrl(image.uri);
        }

        setPickedUrl(image.uri)
        onImage(image.uri)
    }

    useEffect(() => {
        setPickedUrl(previousImage)
    }, [previousImage])

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
                onPress={onHandleTakePhoto}
            />
        </View>
    )
}

export default ImageSelector