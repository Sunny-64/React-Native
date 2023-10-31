import { View, Text, useColorScheme, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

// custom imports
import { commonStyles } from '../utils/styles/styleUtils'
import { themeStyles } from '../utils/styles/styleUtils'
import { manaliWebp } from '../assets'


const TrendingPlaces = () => {
    const colorScheme = useColorScheme();
    return (
        <View>
            <Text style={[colorScheme === 'dark' ? themeStyles.textWhite : themeStyles.textBlack, commonStyles.heading]}>Trending Place</Text>
            <View
                style={[styles.cardContainer]}
            >
                <ImageBackground 
                    style={styles.img} 
                    source={manaliWebp}
                    
                >
                </ImageBackground>
                <View style={styles.textContainer}>
                    <Text style={[styles.cardText, {fontWeight : 'bold', fontSize : 45, textAlign : 'center'}]}>Manali</Text>
                    <Text style={[styles.cardText, {fontSize : 15, marginTop : 0, fontWeight : '600'}]}>Place Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quasi.</Text>
                </View>
                <Text style={[styles.cardText, {fontSize : 15, fontWeight : '700', position : 'absolute', bottom : 0, textAlign : 'center'}]}>Himachal Pradesh, India</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    cardContainer: {
        borderRadius : 8, 
        position : 'relative',
        flex : 1, 
        justifyContent : 'center', 
        alignItems : 'center'
    },
    img: {
        width: '100%',
        height: 230, 
        Radius : 8, 
        opacity : 0.4, 
        borderRadius : 8, 
    }, 
    cardText : {
        paddingHorizontal : 8, 
        paddingVertical : 2,
        marginVertical : 4, 
        color : '#ffffff',
    }, 
    textContainer : {
        flex : 1, 
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute'
    }
});



export default TrendingPlaces