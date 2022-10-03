import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const MoviesStarWars = ({ episode, name, item, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Movie", { title: item.title, opening: item.opening_crawl, director: item.director, producer: item.producer, release: item.release_date, id: item.episode_id })}>
                <Image source={episode == 1 && require('../../assets/movies/1.jpg') || episode == 2 && require('../../assets/movies/2.jpg') || episode == 3 && require('../../assets/movies/3.jpg') || episode == 4 && require('../../assets/movies/4.jpg') || episode == 5 && require('../../assets/movies/5.jpg') || episode == 6 && require('../../assets/movies/6.jpg')} style={styles.image} />
            </TouchableOpacity>
        </View>
    )
}

export default MoviesStarWars