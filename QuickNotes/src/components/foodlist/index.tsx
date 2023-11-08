import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

import styles from './style'
import { seaFood, breakfast, steak, dessert, fastFood } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FOOD_LIST = [
    {   id : 1,
        icon : seaFood, 
        name : 'Steak'
    },
    {
        id : 2,
        icon : breakfast, 
        name : 'Desserts'
    },
    {
        id : 3, 
        icon : steak, 
        name : 'Breakfast'
    },
    {
        id : 4, 
        icon : dessert, 
        name : 'Fast Food'
    },
    {
        id : 5,
        icon : fastFood, 
        name : 'Sea Food'
    },
]

const FoodList = () => {
  return (
    <View style={styles.container}>
        <FlatList 
            horizontal = {true}
            data={FOOD_LIST}
            contentContainerStyle = {{flex : 1, flexDirection : 'row', alignItems : 'center', justifyContent : 'space-around'}}
            renderItem={({item}) => (
                <TouchableOpacity style={styles.listItem}> 
                    <Image 
                        source={item.icon}
                        style={styles.icon}
                    />
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}

export default FoodList