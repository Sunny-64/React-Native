import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RestaurantProfile } from '../../screens';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
   
    return (
        <Stack.Navigator>
            <Stack.Screen name="RestaurantProfile" component={RestaurantProfile}/>
        </Stack.Navigator>
    )
}

export default HomeStack