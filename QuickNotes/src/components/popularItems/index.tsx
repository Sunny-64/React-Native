import { View, Text, ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'


import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import axios from 'axios'

import PopularItem from '../popularItem'

import { fetchBeers } from '../../redux/products/productSlice'

// const URL = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"

const PopularItems = ({ navigation }: any) => {
  const [totalItems, setTotalItems] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const getTotalCartItems = async () => {
      try {
        const totalCartItems: any = await AsyncStorage.getItem("cartItems");
        if (!totalCartItems) {
          return;
        }
        const parsedTotalCartItems = JSON.parse(totalCartItems);
        let total: any = 0;
        parsedTotalCartItems?.forEach((item: any) => {
          total += item.quantity;
        });
        setTotalItems(total);
      }
      catch (err) {
        console.log('err', err)
      }
    }
    getTotalCartItems();

  }, [totalItems]);

  useEffect(() => {
    dispatch(fetchBeers())
  }, [dispatch])

  const isLoading = useSelector((state: any) => state.product.isLoading);
  const data = useSelector((state: any) => state.product.data);
  const error = useSelector((state: any) => state.product.error);

  const handleUpdateTotalItemsState = (total: any) => {
    setTotalItems(total)
  }

  console.log(isLoading)
  return (
    <View>
      <Text style={{ paddingHorizontal: 10, fontSize: 18, marginBottom: 10, fontWeight: 'bold', color: '#000000', marginTop: 20 }}>Popular Items</Text>

      {
        error ?
          <Text>There was an error</Text>
          :
          isLoading ?
            <ActivityIndicator size={'large'} color={'#000000'} />
            :
            <SafeAreaView style={{ display: 'flex', alignItems: 'center' }}>
              <FlatList
                numColumns={2}
                data={data}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }) => (
                  <PopularItem item={item} navigation={navigation} updateTotalItemsCount={handleUpdateTotalItemsState} />
                )}
              />
            </SafeAreaView>
      }

    </View>
  )
}

export default PopularItems