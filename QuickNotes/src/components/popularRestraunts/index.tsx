import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './style'
import { food2, star } from '../../assets'

const CARD_DATA = [
  {
    id: 1,
    name: "H&H Bagels",
    rating: 4.8,
    noOfRatings: 1299,
    img: food2,
  },
  {
    id: 2,
    name: "H&H Bagels",
    rating: 4.8,
    noOfRatings: 1299,
    img: food2,
  },
  {
    id: 3,
    name: "H&H Bagels",
    rating: 4.8,
    noOfRatings: 1299,
    img: food2,
  },
  {
    id: 4,
    name: "H&H Bagels",
    rating: 4.8,
    noOfRatings: 1299,
    img: food2,
  },

]

const PopularRestraunts = ({ navigation }:any) => {

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#000000' }}>Popular Local Restaurants</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: '600', opacity: 0.7 }}>See all</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          horizontal={true}
          data={CARD_DATA}
          contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}
          keyExtractor={(item : any) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Res")
              }}
            >
              <Image
                source={item.img}
                style={{ width: 300, height: 150, borderRadius: 10 }}
              />
              <View style={styles.foodDescription}>
                <Text style={{ fontSize: 16, fontWeight: '700', }}>{item.name}</Text>
                <View style={styles.foodRating}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    {/* <Icon name='star' style={{fontSize : 15, backgroundColor : 'yellow'}}/> */}
                    <Image
                      source={star}
                      style={{ width: 20, height: 20 }}
                    />
                    <Text>{item.rating}</Text>
                  </View>
                  <Text style={{ opacity: 0.6 }}>({item.noOfRatings}+ Ratings)</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default PopularRestraunts