import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}:any) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button 
        title='Login'
        onPress={() => navigation.navigate('Login')}

      />

      <Button 
            title='redirect to home again'
            onPress={() => navigation.push('Home')}
      />
    </View>
  )
}

export default Home