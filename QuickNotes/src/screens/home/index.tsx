import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { logo } from '../../assets'

const Home = ({ navigation }: any) => {

  return (
    <View style={styles.mainContainer}>
      {/* Header  */}
      <View style={styles.headerContainer}>
        <Image
          source={logo}
          style={styles.logo}
        />
        <TouchableOpacity
          // style={styles.iconContainer}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Icon name='bars' style={{ color: 'white', fontSize: 30 }} />
        </TouchableOpacity>
      </View>
      {/* Home page content */}
      <View style={styles.container}>
        <Text style={styles.heading}>Home page</Text>
      </View>
    </View>
  )
}

export default Home