import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { logo } from '../../assets'
import { PRIMARY_COLOR, ACCENT_COLOR } from '../globalStyles'

const OnBoarding = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Image
                source={logo}
                style={styles.logo}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <Text
                    style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        fontSize: 17,
                        fontWeight: 'bold'
                    }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: PRIMARY_COLOR,
        width: '100%',
        height: '100%',
        flex: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 250,
        width: 250
    },
    button: {
        backgroundColor: ACCENT_COLOR,
        paddingVertical: 18,
        position: 'absolute',
        bottom: 80,
        width: '100%',
        borderRadius: 125
    }
});

export default OnBoarding