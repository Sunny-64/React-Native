import { View, Text } from 'react-native'
import React from 'react'
import { 
    StyleSheet, 
    useColorScheme
 } from 'react-native'

//  custom imports
 import { 
    themeStyles, 
    commonStyles,
 } from '../utils/styles/styleUtils'

 import FlatCard from './reusable-components/FlatCard'
 import { kheergangaWebp, manaliWebp, shimlaJpg } from '../assets'

const FlatCards = () => {
    const colorScheme = useColorScheme(); 
    return (
        <View style={styles.container}>
            <Text style={
                [
                    colorScheme === 'dark' ? themeStyles.textWhite : themeStyles.textBlack,
                    commonStyles.heading
                ]
                }>
                    Top 3 Favoured Places
                </Text>
            <View style={styles.flatCardContainer}>
                <FlatCard img = {kheergangaWebp}/>
                <FlatCard img = {manaliWebp}/>
                <FlatCard img = {shimlaJpg}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginVertical : 10
    },

    flatCardContainer : {
        flex : 1, 
        flexDirection : 'row',
        justifyContent : 'space-between'
    }, 
    flatCard : {
        height : 100,
        width : 100,
        backgroundColor : 'red',
        borderRadius : 8
    }
})
export default FlatCards