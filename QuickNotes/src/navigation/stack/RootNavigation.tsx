import React, {useState, useEffect} from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    OnBoarding,
    Login,
    Signup
} from '../../screens/index';
import DrawerNav from '../drawer/DrawerNav';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {

    return (
        <Stack.Navigator

            initialRouteName='OnBoarding'
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name='OnBoarding' component={OnBoarding} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            {/* Home */}
            <Stack.Screen name='DrawerNav' component={DrawerNav} />

        </Stack.Navigator>
    )
}

export default RootNavigation