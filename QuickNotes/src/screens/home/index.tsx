import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { Header, PopularItems, PopularRestraunts, Search } from '../../components'
import FoodList from '../../components/foodlist'
import DiscountCard from '../../components/discount'
import { ScrollView } from 'react-native-virtualized-view'

const Home = ({ navigation }: any) => {
  

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <Search />
      <FoodList />
      <DiscountCard />
      <PopularRestraunts navigation={navigation} />
      <PopularItems />
    </ScrollView>
  )
}

export default Home