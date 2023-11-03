import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    OnBoarding,
    Login,
    Signup
} from '../../screens/index';

const Stack = createNativeStackNavigator(); 

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='OnBoarding'
            screenOptions={({route}) => ({
                headerShown : false
            })}
        >
            <Stack.Screen name='OnBoarding' component={OnBoarding}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Signup' component={Signup}/>
            
        </Stack.Navigator>
    )
}

export default AuthStack