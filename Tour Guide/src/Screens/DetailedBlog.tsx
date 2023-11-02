import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useLinkProps } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailedBlog = ({ navigation, ...props }: any) => {
    const { description, title, img } = props.route.params.params;
    // navigation.setOptions({ title: title })
    useEffect(() => {
        navigation.setOptions({ title: title })
    }, [])
    return (
        <SafeAreaView>
            <View>
                <Image
                    source={img}
                    style={styles.img}
                />
                <Text
                    style={styles.description}
                >{description}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 200
    },
    description: {
        paddingHorizontal: 5,
        marginVertical: 8,
        fontSize: 17,
        lineHeight: 22,
        fontWeight: '400'
    }
})

export default DetailedBlog