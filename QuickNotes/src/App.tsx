import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootNavigation from './navigation/stack/RootNavigation';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
 

  return (
    <NavigationContainer>
        <RootNavigation />
    </NavigationContainer>

  );
}

export default App;
