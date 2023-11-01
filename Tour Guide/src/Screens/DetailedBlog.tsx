import { View, Text } from 'react-native'
import React from 'react'
import { useLinkProps } from '@react-navigation/native'

const DetailedBlog = ({navigation, ...props}:any) => {
    // console.log(props)
    const description = props.route.params; 
    // console.log(description.params.description)
    console.log(description)
    // console.log(title)
    return (
        <View>
            {/* <Text>{title}</Text> */}
            <Text>{description.params.description}</Text>
            <Text>he</Text>
        </View>
    )
}

export default DetailedBlog