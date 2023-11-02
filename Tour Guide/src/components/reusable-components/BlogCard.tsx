import { View, Text, StyleSheet, Image, useColorScheme, TouchableOpacity } from 'react-native'
// import { Link } from '@react-navigation/native';
import {
    Link, 
    StackActions, 
    useNavigation
} from '@react-navigation/native';

// Custom imports
import React from 'react'

const BlogCard = ({navigation,...props}: any) => {
    const { marginRight, img, title, description, id } = props;
    const colorScheme = useColorScheme();
    // const navigation = useNavigation(); 
    const handleNavigate = () => {
        
        navigation.navigate('Blog',{
            params : {
                ...props
            }
        })
        
    }
    return (
        <View
            style={[styles.cardContainer, colorScheme === 'dark' ? styles.bgDark : styles.bgLight, { marginRight: marginRight }]}
        >
            <Text style={[styles.cardText, { fontWeight: 'bold', fontSize: 18, textAlign: 'left', marginLeft: 16 }]}>{title}</Text>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={img}
                />
            </View>

            <Text style={[styles.cardText, { fontSize: 15, marginTop: 0, fontWeight: '400', marginLeft: 16 }]} numberOfLines={4}>{description.substring(0, 150) + " "}
                <TouchableOpacity >
                    <Text style={{color : 'purple'}} onPress={handleNavigate}>Read more...</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    bgDark: {
        backgroundColor: '#27272a',
    },
    bgLight: {
        backgroundColor: '#f3f4f6'

    },
    cardContainer: {
        borderRadius: 8,
        width: 370,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        
        elevation: 3,
        marginBottom : 10,
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
    },
    // clickableText: {
    //     borderColor : '#000000', 
    //     borderWidth : 10, 
    //     fontSize: 15,
    //     // marginTop : 10
    //     paddingTop : 20
    // }, 

});
export default BlogCard