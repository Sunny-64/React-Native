import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'


import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../screens/globalStyles';
import { Cart, Home, Orders, Account, RestaurantProfile } from './../../screens';
import DrawerNav from '../drawer/DrawerNav';
import styles from './style';
import HomeStack from '../stack/HomeStack';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: SECONDARY_COLOR,
          height: 70,
          paddingVertical: 10
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === 'Home') {
            iconName = 'home';
          }
          if (route.name == 'Cart') {
            iconName = 'shopping-cart'
          }
          if (route.name == 'Orders') {
            iconName = 'clipboard-list'
          }
          if (route.name == 'Account') {
            iconName = 'user-alt'
          }
          return (
            <View style={[styles.tabNavContainer, focused && styles.active]}>
              <Icon name={iconName} color={'black'} size={20} />
              <Text>
                {
                  iconName === 'home' ? 'Home' :
                    iconName === 'shopping-cart' ? 'Carts' :
                      iconName === 'clipboard-list' ? 'Orders' :
                        iconName === 'user-alt' && 'Account'
                }
              </Text>
            </View>
          )
        }
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Account" component={Account} />

    </Tab.Navigator>
  )
}

export default TabNav