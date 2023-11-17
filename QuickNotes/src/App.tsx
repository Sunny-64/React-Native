import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './navigation/stack/RootNavigation';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(): JSX.Element {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>

  );
}

export default App;
