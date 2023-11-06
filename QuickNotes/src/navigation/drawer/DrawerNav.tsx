import { View, Text, } from 'react-native'
import React, { ReactNode } from 'react'

import { AddTask, Home } from '../../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Logout from '../../components/Logout';
import TabNav from '../tab/TabNav';
import CustomDrawer from '../../components/CustomDrawer';
const Drawer = createDrawerNavigator();

const DrawerNav = ({ navigation }: any) => {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,   
      })}
      
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name='TabNav' component={TabNav} options={{
        title: "Home"
      }} />
    </Drawer.Navigator>
  )
}

export default DrawerNav