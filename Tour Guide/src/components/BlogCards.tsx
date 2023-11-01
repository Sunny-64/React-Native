import { View, Text, StyleSheet, useColorScheme, ScrollView } from 'react-native'
import React from 'react'

// Custom imports
import {
    themeStyles,
    commonStyles,
} from '../utils/styles/styleUtils'

import BlogCard from './reusable-components/BlogCard'
import { chadarTrekJpg, manaliBlogJpg, kheergangaWebp } from '../assets'
import { Separator } from './Contact'

const CARD_DATA = [
    {
        id : 1,
        marginRight : 3, 
        img : manaliBlogJpg,
        title : 'Manali Top hilstation',
        description : 'Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination.',
        redirectTo : 'location'
    },
    {
        id : 2, 
        marginRight : 3, 
        img : kheergangaWebp, 
        title : 'Best season to visit kasol', 
        description : 'Kasol is a hamlet in the Kullu district of the Indian state of Himachal Pradesh. It is situated in Parvati Valley, on the banks of the Parvati River, Between Bhuntar and Manikaran, it is located 30 km from Bhuntar and 36 km from Kullu town, the district headquarters, 3.5 km from Manikaran.', 
        redirectTo : 'location'
    },
    {
        id : 3,
        marginRight : 0, 
        img : chadarTrekJpg,
        title : 'Frozen lake in chadar trek',
        description : 'This magnificent trek lies in the Leh region of Ladakh. The Chadar Trek, one of the popular winter treks, is also one of the longest trekking trails in the Indian Himalayan region that covers an entire stretch of 62 kilometers in 8 chilly days.', 
        redirectTo : 'location'
    }
]

const BlogCards = ({navigation}:any) => {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.container}>
            <Text style={[colorScheme === 'dark' ? themeStyles.textWhite : themeStyles.textBlack, commonStyles.heading]}>Blogs</Text>
            <ScrollView
                horizontal={true}
                pagingEnabled
                showsHorizontalScrollIndicator
                contentContainerStyle = {{marginBottom : 30}}
            >
                {CARD_DATA.map((card,index) => {
                    return (
                        <BlogCard 
                            key={index} 
                            marginRight = {card.marginRight} 
                            img = {card.img}
                            title = {card.title}
                            description = {card.description}
                            navigation = {navigation}
                        />
                    )
                })}
            </ScrollView>
            <Separator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    separator: {
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default BlogCards