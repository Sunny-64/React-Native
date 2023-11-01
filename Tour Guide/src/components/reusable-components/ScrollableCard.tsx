import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ScrollableCard = (props:any) => {
    const {img, marginRight} = props; 
    return (
        <View style={[styles.flatCard, {marginRight : marginRight}, styles.flatCardContainer]}>
            <Image style={styles.flatCard} source={img}/>
        </View>
    )
}

const styles = StyleSheet.create({
    flatCard : {
        height : 100,
        width : 100,
        borderRadius : 8,
    }, 
    flatCardContainer : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 2.65,
        
        elevation: 2,
    }
})

export default ScrollableCard