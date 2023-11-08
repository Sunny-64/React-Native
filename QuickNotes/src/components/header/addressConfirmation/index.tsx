import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { map, cross } from '../../../assets'

const AddressConfirmationModal = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={map}
                    style={{width : 30, height : 30}}
                />
            </View>
            <View style={styles.textContainer}>
            <Text>Is This Right Address? It looks like far from you.</Text>
            </View>
            <View style={styles.crossContainer}>
                <Image 
                    source={cross}
                    style={{width : 20, height : 20}}
                    />
            </View>
        </View>
    )
}

export default AddressConfirmationModal