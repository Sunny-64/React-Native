/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { sunny } from './assets/index'
import {
  Text,
  View,
  useColorScheme,
  Image,
  ScrollView
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <ScrollView>
      <View
        style={{
          flex: 6,
          justifyContent : 'center',
          alignItems: 'center', 
          flexWrap : 'wrap',
          paddingHorizontal : 10
        }}
      >
        <Text style={{fontWeight : 'bold', fontSize: 50, marginBottom: 30}}>
          Hello world
        </Text>
        <Image
          source={sunny}
          style={{ height: 200, width: 200, marginBottom : 30 }}
        />
        <Text style={{textAlign : 'center',fontWeight : 'bold', fontSize : 40}}>This is my First React Native Project</Text>
      </View>
     
    // </ScrollView>
  );
}

export default App;
