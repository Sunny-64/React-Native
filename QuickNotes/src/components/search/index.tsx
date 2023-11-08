import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './style'

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={{display : 'flex',flexDirection : 'row', alignItems : 'center', gap : 15}}>
          <View>
            <Icon name='search' style={{ fontSize: 18 }} />
            {/* <Text>Icon1</Text> */}
          </View>
          <TextInput placeholder='Search Food, groceries, drink, etc.' />
        </View>
        <View>
            <Icon name="list-ul" style={{fontSize : 18}}/>
        </View>
      </View>
    </View>
  )
}

export default Search