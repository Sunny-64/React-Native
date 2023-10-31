import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'


const FlatCard = (props:any) => {
  return (
      <View style={styles.flatCard}>
            <Image style={styles.flatCard} source={props.img}/>
      </View>
  )
}

const styles = StyleSheet.create({
    flatCard : {
        height : 100,
        width : 100,
        borderRadius : 8
    }
})

export default FlatCard