import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'


const FlatCard = (props:any) => {
  return (
      <View style={[styles.flatCard, styles.flatCardContainer]}>
            <Image style={styles.flatCard} source={props.img}/>
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
        shadowRadius: 4.65,
        
        elevation: 7,
    }
})

export default FlatCard