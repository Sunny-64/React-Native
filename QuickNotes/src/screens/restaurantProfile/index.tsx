import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import React, { useState, useEffect } from 'react'
import styles from './style'
import { mcD, food, macDFood, star } from '../../assets'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { PopularItems } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { ScrollView } from 'react-native-virtualized-view'

import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
const URL = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"

const RestaurantProfile = ({ route, navigation }: any) => {
  const { coverImg, location, name, noOfRatings, profileIcon, rating } = route.params;
  const [totalItems, setTotalItems] = useState(0);
  const [beersData, setBeersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    const getTotalCartItems = async () => {
      try {
        setIsLoading(true)
        const totalCartItems: any = await AsyncStorage.getItem("cartItems");
        if(!totalCartItems){
          return;
        }
        const parsedTotalCartItems = JSON.parse(totalCartItems);
        let total: any = 0;
        parsedTotalCartItems?.forEach((item: any) => {
          total += item.quantity;
        });
        setTotalItems(total);
        setIsLoading(false);
      }
      catch (err) {
        setIsLoading(false); 
        console.log('err', err)
      }
    }
    getTotalCartItems();

    // api call 
    axios.get(URL)
      .then(res => {
        // console.log(">>>>>", res.data)
        setBeersData(res.data);
      })
      .catch(err => {
        console.log(err);
      });


  }, [totalItems]);

  const handleUpdateTotalItemsState = (total: any) => {
    setTotalItems(total)
  }

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <View style={{ position: 'relative' }}>
        <Image
          source={coverImg}
          style={styles.heroImg}
        />

        <Image
          source={profileIcon}
          style={styles.profileIcon}
        />

        <View style={styles.topIconsContainer}>
          <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 22 }}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Icon name="arrow-left" style={styles.icon} />
          </TouchableOpacity>

          <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 22 }}>
              <Icon name="heart" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 22 }}
              onPress={() => {
                navigation.navigate("Cart")
              }}
            >
              <Icon name="shopping-cart" style={styles.icon} />
              <View style={{ position: 'absolute', bottom: -8, left: 5, backgroundColor: 'red', paddingVertical: 1, paddingHorizontal: 3, borderRadius: 20 }}>
                <Text style={{ color: '#ffffff' }}>{totalItems}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.name}>

        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
            }}>{name}</Text>
        </View>

        <TouchableOpacity>
          <Icon name="info-circle" style={{ fontSize: 25, opacity: 0.8 }} />
        </TouchableOpacity>

      </View>
      {/*  */}
      <View style={styles.location}>

        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="map-marker-alt" style={{ marginRight: 8 }} />
          <Text
            style={{
              fontSize: 15,

            }}>
            {location}</Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <Image
            source={star}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <Text>{rating} ({noOfRatings} + ratings)</Text>
        </View>

      </View>
      {/*  */}

      <View style={styles.delieveryDetails}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}>30 - 40 Min</Text>
          <Text style={{ opacity: 0.7 }}>Delievery time</Text>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 17, }}>
          ₹0.00
          </Text>
          <Text style={{ opacity: 0.7 }}>Delivery fee on $12+</Text>
        </View>
      </View>
      {/*  */}

      <View style={styles.imgContainer}>
        <ImageBackground
          source={food}
          style={styles.bgImg}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.description}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: '#000000' }}>20% Off Levain</Text>
              <Text style={{ fontSize: 17 }}>When you order ₹20+ Automatically Applied</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: '#ffffff' }}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/*  */}

      <PopularItems />
    </ScrollView>
  )
}

export default RestaurantProfile