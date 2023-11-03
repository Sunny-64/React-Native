

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native'

import store from './src/redux/store'
import StackNav from './src/navigation/StackNav';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Provider store={store}>
        <NavigationContainer>
              <StackNav />
        </NavigationContainer>
      </Provider>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 30,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8
  },


})

export default App;
