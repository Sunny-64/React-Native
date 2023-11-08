import { View, Text, Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './style'
import { sunsetLogo } from '../../assets'
import AddressConfirmationModal from './addressConfirmation'

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        {/* logo */}
        <View style={styles.iconContainer}>
          <Image
            source={sunsetLogo}
            style={styles.logo}
          />
        </View>
        {/* location */}
        <View style={styles.locationContainer}>
          <Text>Location</Text>
          <Text>172 Grand St, Ny</Text>
        </View>
        {/* Bell  */}
        <View style={styles.iconContainer}>
          <Icon name='bell' style={styles.bellIcon} />
        </View>
      </View>
        <View style={{paddingHorizontal : 10}}>
            <AddressConfirmationModal />
        </View>
    </View>
  )
}

export default Header