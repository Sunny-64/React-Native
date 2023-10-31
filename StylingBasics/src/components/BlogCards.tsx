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
        marginRight : 3, 
        img : manaliBlogJpg,
        title : 'Manali Top hilstation',
        description : 'wait..',
        redirectTo : 'location'
    },
    {
        marginRight : 3, 
        img : kheergangaWebp, 
        title : 'Best season to visit kasol', 
        description : 'wait..', 
        redirectTo : 'location'
    },
    {
        marginRight : 0, 
        img : chadarTrekJpg,
        title : 'Frozen lake in chadar trek',
        description : 'wait..', 
        redirectTo : 'location'
    }
]

const BlogCards = () => {
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