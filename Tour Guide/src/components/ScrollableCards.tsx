import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useColorScheme, StyleSheet } from 'react-native'

// Custom imports
import { commonStyles, themeStyles } from '../utils/styles/styleUtils'
import { manaliWebp, shimlaJpg, kheergangaWebp, chadarTrekJpg, chambaJpg } from '../assets'
import ScrollableCard from './reusable-components/ScrollableCard'

const CARD_DATA = [
  {
    marginRight : 20, 
    img : chambaJpg, 
  }, 
  {
    marginRight : 20, 
    img : chadarTrekJpg, 
  }, 
  {
    marginRight : 20, 
    img : kheergangaWebp, 
  }, 
  {
    marginRight : 20, 
    img : shimlaJpg, 
  }, 
  {
    marginRight : 20, 
    img : manaliWebp, 
  }, 
]

const ScrollableCards = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={styles.container}>
      <Text style={
          [
              colorScheme === 'dark' ? themeStyles.textWhite : themeStyles.textBlack,
              commonStyles.heading
          ]
          }>
              Top Places
          </Text>
      <ScrollView 
        horizontal = {true}
        showsHorizontalScrollIndicator={false}
      >
         
         {CARD_DATA.map((card, index) => {
            return (
                <ScrollableCard 
                    key = {index}
                    img = {card.img}
                    marginRight = {index === CARD_DATA.length - 1 ? 0 : 20}
                />
            ) 
         })}
      </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container : {
      marginVertical : 10
  },


  flatCard : {
      height : 100,
      width : 100,
      backgroundColor : 'purple',
      borderRadius : 8,
      marginRight : 20
  }
})

export default ScrollableCards