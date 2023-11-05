import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/stack/AuthStack';
import AppStack from './navigation/stack/AppStack';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer
    // screenOptions
    >
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name='Auth' component={AuthStack} />
        <Stack.Screen name='App' component={AppStack} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});

export default App;
