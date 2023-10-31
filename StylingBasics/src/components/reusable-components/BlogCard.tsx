import { View, Text, StyleSheet, Image, Button } from 'react-native'

// Custom imports
import { zeroTwoJpg } from '../../assets'
import React from 'react'

const BlogCard = (props: any) => {
    const { marginRight, img, title, description } = props
    return (
        <View
            style={[styles.cardContainer, { marginRight: marginRight }]}
        >
            <Text style={[styles.cardText, { fontWeight: 'bold', fontSize: 18, textAlign: 'left', marginLeft: 16 }]}>{title}</Text>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={img}
                />
            </View>

            <Text style={[styles.cardText, { fontSize: 15, marginTop: 0, fontWeight: '600', marginLeft: 16 }]}>{description}<Text style={{color : 'purple', marginLeft : 8}}>Read more...</Text></Text>
           
        </View>
    )
}


const styles = StyleSheet.create({

    cardContainer: {
        // backgroundColor: '#171717',
        backgroundColor: '#27272a',
        borderRadius: 8,
        width: 370,
    },
    img: {
        width: '90%',
        height: 200,
        borderRadius: 8,
    },
    cardText: {
        padding: 5,
        marginVertical: 4
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        gap: 10,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginHorizontal: 16

    },
    imgContainer: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});
export default BlogCard