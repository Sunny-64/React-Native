import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Custom imports
import Home from './src/screens/Home';
import Login from './src/screens/Login';


const App = () => {
  return (

    <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

//https://www.youtube.com/watch?v=KMJE_0ybg9E

export default App