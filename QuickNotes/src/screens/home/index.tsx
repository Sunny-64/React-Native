import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const Home = ({navigation, route}:any) => {
  const {data} = route.params; 
  const parseData = JSON.parse(data); 
  return (
    <View>
      <Text>{parseData.username}</Text>
      <Text>{parseData.email}</Text>
      <Text>{parseData.password}</Text>

      {/* <Icon name='search'/> */}
    </View>
  )
}

export default Home