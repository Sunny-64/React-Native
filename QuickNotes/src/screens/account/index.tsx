import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


import AsyncStorage from '@react-native-async-storage/async-storage'

const Account = ({navigation}:any) => {
  return (
    <View>
      <Text>Account</Text>
      <TouchableOpacity
        onPress={async () => {
            await AsyncStorage.clear();
            navigation.navigate("Login")
        }}
      >
          <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Account