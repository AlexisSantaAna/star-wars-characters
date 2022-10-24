import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ImageBackground, View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ImageSelector from "../../components/image-selector";
import { getSnapshot, insertSnapshot, deleteSnapshot } from "../../db";
import { selectSnapshot } from "../../store/actions";
import { styles } from "./styles";

const Snapshot = ({ navigation }) => {
    const dispatch = useDispatch()
    const isEmpty = useSelector((state) => state.snapshot.snapshot);
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [previousImage, setPreviousImage] = useState("")

    const onHandleChange = (text) => {
        setName(text)
    }

    const onHandleImage = (imageUri) => {
        setImage(imageUri)
    }

    const insertion = async () => {
        const result = await insertSnapshot(name, image)
        return result
    }

    const loadSnapshot = async () => {
        const result = await getSnapshot()
        setName(result?.rows?._array[0].name)
        setPreviousImage(result?.rows?._array[0].image)
        setImage(result?.rows?._array[0].image)
    }

    const deleteAll = async () => {
        const result = await deleteSnapshot()
    }

    const alerta = () => {
        alert('Enter name and snapshot you must');
        return;
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
                        value={name}
                    />
                </View>
                <ImageSelector onImage={onHandleImage} previousImage={previousImage} />
                <TouchableOpacity onPress={() => {
                    if (name && image) {
                        deleteAll()
                        insertion()
                        dispatch(selectSnapshot(name + " Skywalker", image))
                        navigation.navigate("Get Picture", { name: name + " Skywalker" })
                    } else alerta()
                }}>
                    <Text style={styles.label}>Create picture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={image && true}
                    onPress={() => {
                        loadSnapshot()
                    }}>
                    <Text style={!image ? styles.label : styles.disabled}>Load previous</Text>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground >

    )
}

export default Snapshot