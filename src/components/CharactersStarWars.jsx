import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

const CharactersStarWars = ({ image, name, item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image source={{ uri: image }} style={styles.image} />
        </View>
    )
}

export default CharactersStarWars