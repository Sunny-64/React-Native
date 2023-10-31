import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ScrollableCard = (props:any) => {
    const {img, marginRight} = props; 
    return (
        <View style={[styles.flatCard, {marginRight : marginRight}]}>
            <Image style={styles.flatCard} source={img}/>
        </View>
    )
}

const styles = StyleSheet.create({
    flatCard : {
        height : 100,
        width : 100,
        borderRadius : 8,
    }
})

export default ScrollableCard