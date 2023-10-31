import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'

// custom imports
import { commonStyles, themeStyles } from '../utils/styles/styleUtils'
import ContactCard from './reusable-components/ContactCard'
import { someGirl, loveChunnibeyo, fireForce } from '../assets'

export const Separator = () => <View style={styles.separator} />;

const CARD_DATA = [
    {
        img: loveChunnibeyo,
        name: 'Yutta',
        msg: "hi what's up !!!"
    },
    {
        img: someGirl,
        name: 'Hinata',
        msg: "What are you doing ?"
    },
    {
        img: fireForce,
        name: 'Shinra',
        msg: "hi what's up bro !!!"
    },
]

const Contact = () => {
    const colorScheme = useColorScheme();
    return (
        <View>
            <Text style={
                [
                    colorScheme === 'dark' ? themeStyles.textWhite : themeStyles.textBlack,
                    commonStyles.heading
                ]
            }>
                Contact
            </Text>
            {CARD_DATA.map((card, index) => {
                return (
                    <View  key = {index}>
                        <ContactCard 
                            img = {card.img}
                            name = {card.name}
                            msg = {card.msg}
                        />
                        <Separator />
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
})

export default Contact