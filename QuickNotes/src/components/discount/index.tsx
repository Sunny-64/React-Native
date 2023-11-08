import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { food } from '../../assets'
import styles from './style'

const DiscountCard = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={food}
                style={styles.bgImg}
                imageStyle={{ borderRadius: 10 }}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.description}>
                        <Text style={{fontSize : 20, fontWeight : 'bold', marginBottom : 5, color : '#000000'}}>20% Off Levain</Text>
                        <Text style={{fontSize : 17}}>When you order $20+ Automatically Applied</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color : '#ffffff'}}>Order Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default DiscountCard