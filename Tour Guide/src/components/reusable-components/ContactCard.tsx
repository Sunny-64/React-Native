import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const ContactCard = (props:any) => {
    const {img, name, msg} = props
    return (
        <View style={[styles.container]}>
            <Image style={styles.img} source={img}/>
            <View>
                <Text style={{fontSize : 15, fontWeight : 'bold'}}>{name}</Text>
                <Text>{msg}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center',
        borderRadius : 10,
        marginVertical : 8
        
    }, 
    img : {
        width : 50, 
        height : 50, 
        borderRadius : 100
    }
})

export default ContactCard