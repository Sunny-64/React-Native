import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    display : route.name === 'onBoarding' ? 'none' : 'flex',
                    backgroundColor: 'black',
                    position: 'absolute',
                    bottom: 15,
                    left: 20,
                    right: 20,
                    width: '90%',
                    borderRadius: 15,
                    height: 70,
                    elevation: 2
                },
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon : ({focused, color, size}) => {
                    let iconName : string | any ; 
                    switch(route.name){
                        case 'Home' : 
                            iconName = 'home'; 
                        case 'Login' : 
                            iconName = 'login';    
                        default : 
                            iconName = 'home'                         
                    }

                   if(iconName){
                        return <Icon size={27} color={'white'} name={iconName} />
                   }
                }, 
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />

        </Tab.Navigator>

    )
}

export default BottomTabNav