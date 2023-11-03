import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/stack/AuthStack';

function App(): JSX.Element {

  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({

});

export default App;
