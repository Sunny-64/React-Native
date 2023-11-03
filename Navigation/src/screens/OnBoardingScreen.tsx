import { View, Text, StyleSheet, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { book } from '../assets'

const OnBoardingScreen = ({ navigation }: any) => {
  return (
    <ImageBackground source={book} style={[styles.image, styles.container]}>
      <Text style={[styles.title, { color: 'white' }]}>Welcome to Your App</Text>
      <Text style={[styles.description, { color: 'white' }]}>This is a brief description of your app.</Text>
        <Pressable 
        style={styles.buttonStyles} 
        onPress={() => {
            navigation.navigate('Login')
        }}>
            <Text style={{fontSize : 20}}>Next</Text>
        </Pressable>
     
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%'
  }, 
  buttonStyles : {
     backgroundColor : 'white',
     paddingHorizontal : 22,
     paddingVertical : 7, 
     borderRadius : 5
  }
});

export default OnBoardingScreen