import React, { useState, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    OnBoarding,
    Login,
    Signup
} from '../../screens/index';
import DrawerNav from '../drawer/DrawerNav';

import {RestaurantProfile, Checkout} from '../../screens/index';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    const [screenToBeRendered, setScreenToBeRendered] = useState('');

    useEffect(() => {
        const screenToRender = async () => {
            try {
                const validUser:any = await AsyncStorage.getItem("user");
                const parsedValidUser:object | any = JSON.parse(validUser);
                
                if(parsedValidUser?.email){
                    setScreenToBeRendered("DrawerNav")
                }
                else{
                    setScreenToBeRendered("OnBoarding")
                }
            }
            catch (err) {
                setScreenToBeRendered("OnBoarding");
            }
        }

        screenToRender();
    }, [screenToBeRendered])

    return (
        screenToBeRendered !== "" && (
             <Stack.Navigator

            initialRouteName={screenToBeRendered}
            screenOptions={({ route }) => ({
                headerShown: false
            })}
        >
            <Stack.Screen name='OnBoarding' component={OnBoarding} />
            <Stack.Screen name='Login' component={Login} />
            
            <Stack.Screen name='Signup' component={Signup} />
            {/* Home */}
            <Stack.Screen name='DrawerNav' component={DrawerNav} />
            <Stack.Screen name='Res' component={RestaurantProfile} />
            <Stack.Screen name='Checkout' component={Checkout} />
            
        </Stack.Navigator>
        )
    )
}

export default RootNavigation