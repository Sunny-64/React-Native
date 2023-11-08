import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CustomDrawer = (props:any) => {
  return (
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.clear();
            props.navigation.navigate("Login"); 
          }}
        > 
          <Text>Logout</Text>
        </TouchableOpacity>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer