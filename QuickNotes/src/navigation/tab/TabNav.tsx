import { View, Text } from 'react-native'
import React from 'react'

import {AddTask, Home} from './../../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'

import DrawerNav from '../drawer/DrawerNav';
import { PRIMARY_COLOR } from '../../screens/globalStyles';
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
          headerShown : false,
          tabBarStyle : {
              backgroundColor : PRIMARY_COLOR,
              bottom : 10,
              left : 20, 
              right : 20, 
              width : '90%', 
              height : 70, 
              borderRadius : 90/2, 
              display : 'flex',
              alignItems : 'center',
          }, 
          tabBarShowLabel : false,
          tabBarIcon : ({focused, color, size}) => {
              let iconName = ""; 
              if(route.name === 'Home'){
                  iconName = 'home'
              }
              if(route.name == 'Add Task'){
                iconName = 'plus'
              }
              return <Icon name={iconName} color={'white'} size={20}/>
          }
      })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Add Task" component={AddTask} />
    </Tab.Navigator>
  )
}

export default TabNav