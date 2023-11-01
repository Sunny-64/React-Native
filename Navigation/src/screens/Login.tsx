import { View, Text, Button } from 'react-native'
import React from 'react'

const Login = ({navigation}:any) => {
  return (
    <View>
      <Text>Login</Text>
      <Button 
        title = 'Home'
        onPress={()=> navigation.navigate('Home')}
      />
    </View>
  )
}

export default Login