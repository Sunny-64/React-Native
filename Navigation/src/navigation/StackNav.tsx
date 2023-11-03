import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import OnBoardingScreen from '../screens/OnBoardingScreen';
import Login from '../screens/Login';
import BottomTabNav from './BottomTabNav';

const StackNav = () => {
  return (
    <Stack.Navigator
        screenOptions={({route}) => ({
            headerShown : false
        })}
    >
        <Stack.Screen name='OnBoarding' component={OnBoardingScreen}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='PostLogin' component={BottomTabNav} 
       />
    </Stack.Navigator>
  )
}

export default StackNav