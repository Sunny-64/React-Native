import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Logout = ({navigation}:any) => {
  useEffect(() => {
      let res = Alert.alert("You want to logout?"); 
      console.log(res);
  }, [])
  return (
    <View>
        <TouchableOpacity>
                <Text>Logout</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Logout