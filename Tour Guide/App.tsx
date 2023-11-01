import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Custom exports
import Home from './src/Screens/Home';
import DetailedBlog from './src/Screens/DetailedBlog';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      {/* Navigation */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Blog" component={DetailedBlog} />
        </Stack.Navigator>
      {/* Navigation */}
    </NavigationContainer>
  );
}

export default App;
