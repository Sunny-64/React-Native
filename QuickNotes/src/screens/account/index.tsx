import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Account = ({navigation}:any) => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
          <View style={styles.backIcon}>
            <Icon
              name="arrow-left"
              style={{ fontSize: 17 }}
              onPress={() => {
                navigation.goBack()
              }}
            />
          </View>
          
          <View style={{ width: '70%' }}>
            <Text style={{ textAlign: 'center', fontWeight: '700' }}>Quick Food</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000000', fontSize: 18 }}>Account</Text>
          </View>

        </View>
      {/* <Text>Account</Text> */}
      <View style={styles.userData}></View>
      
      <TouchableOpacity
      style={styles.logoutButton}
        onPress={async () => {
            await AsyncStorage.clear();
            navigation.navigate("Login")
        }}
      >
          <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Account