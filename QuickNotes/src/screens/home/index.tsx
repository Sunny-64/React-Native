import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { Header, PopularRestraunts, Search } from '../../components'
import FoodList from '../../components/foodlist'
import DiscountCard from '../../components/discount'


const Home = ({ navigation }: any) => {
  

  return (
    <ScrollView style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <Search />
      <FoodList />
      <DiscountCard />
      <PopularRestraunts navigation={navigation} />
    </ScrollView>
  )
}

export default Home