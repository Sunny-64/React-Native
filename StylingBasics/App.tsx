import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, 
  Image, 
  View
} from 'react-native';

// Custom exports
import FlatCards from './src/components/FlatCards';
import ScrollableCards from './src/components/ScrollableCards';
import TrendingPlaces from './src/components/TrendingPlaces';
import BlogCards from './src/components/BlogCards';
import Contact from './src/components/Contact';
import { logo } from './src/assets';
import { Separator } from './src/components/Contact';

function App(): JSX.Element {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        {/* Components */}
        <View style={styles.header}>
        <Image 
          source={logo}
          style = {styles.logo}
          />
          <Text style={{fontSize : 21, fontWeight : 'bold'}}>Find the Best Place To travel</Text>
        </View>
        <Separator />
        <FlatCards />
        <ScrollableCards />
        <TrendingPlaces />
        <BlogCards />
        <Contact />
        {/* End of components */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container : {
      padding : 10
    }, 
    logo : {
      width : 80, 
      height : 80
    }, 
    header : {
      flex : 1, 
      flexDirection : 'row',
      alignItems : 'center', 
      gap : 10
    }, 
    separator: {
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
