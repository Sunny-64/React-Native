import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { StackActions } from '@react-navigation/native'

const Login = ({ navigation, route }:any) => {
  return (
    <View>
      <Pressable 
      style={styles.loginButton}
      onPress={() => {
          // StackActions.replace('PostLogin', {screen : 'Home'})
          navigation.navigate('PostLogin', {screen : 'Home'})
      }}>
          <Text>Login</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    loginButton : {
        backgroundColor : 'red',
        width : 100, 
        paddingVertical : 8,
        color : 'white', 
    }
})
export default Login