import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const CharactersStarWars = ({ image, name, item, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Character", { name: item.name, height: item.height, gender: item.gender, homeworld: item.homeworld, hair: item.hairColor, eyes: item.eyeColor, skin: item.skinColor, died: item.diedLocation, cybernetics: item.cybernetics, creator: item.creator, manufacturer: item.manufacturer, model: item.model, plating: item.platingColor, masters: item.masters, apprentices: item.apprentices, classs: item.class, sensor: item.sensorColor})}>
                <Image source={{ uri: image }} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default CharactersStarWars