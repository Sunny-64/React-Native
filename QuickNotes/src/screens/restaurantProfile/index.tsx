import { View, Text, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { mcD, food, macDFood, star } from '../../assets'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { PopularItem } from '../../components'

const CARD_DATA = [
  {
    id : 1, 
    img: mcD,
    title: "2 Sausage Burrito meal",
    price: 8.49,
  },
  {
    id : 2, 
    img: mcD,
    title: "2 Sausage Burrito meal",
    price: 8.49,
  },
  {
    id : 3,
    img: mcD,
    title: "2 Sausage Burrito meal",
    price: 8.49,
  },
]

const RestaurantProfile = ({route,  navigation }: any) => {
  const {coverImg, location, name, noOfRatings, profileIcon, rating} = route.params; 

  return (
    <ScrollView style={{marginBottom : 20}}>

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
              <TouchableOpacity style={{backgroundColor : 'white', padding : 10, borderRadius : 22}}
                onPress={() => {
                  navigation.goBack()
                }}
              >
                <Icon name="arrow-left" style={styles.icon}/>
              </TouchableOpacity>

              <View style={{display : 'flex', flexDirection : 'row', gap : 10}}>
                  <TouchableOpacity style={{backgroundColor : 'white', padding : 10, borderRadius : 22}}>
                    <Icon name="heart" style={styles.icon}/>
                  </TouchableOpacity>

                  <TouchableOpacity style={{backgroundColor : 'white', padding : 10, borderRadius : 22}}>
                    <Icon name="cloud-upload-alt" style={styles.icon}/>
                  </TouchableOpacity>
              </View>
        </View>
      </View>

      <View style={styles.name}>
       
       <View>
          <Text 
            style={{ 
              fontWeight : 'bold', 
              fontSize : 24, 
            }}>{name}</Text>
       </View>

        <TouchableOpacity>
            {/* <Text>Icon here</Text> */}
            <Icon name="info-circle" style={{fontSize : 25, opacity : 0.8}}/>
        </TouchableOpacity>
        
      </View>
{/*  */}
      <View style={styles.location}>
       
       <View style={{marginTop : 5, display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
         <Icon name="map-marker-alt" style={{marginRight : 8}}/>
          <Text 
            style={{ 
              fontSize : 15, 

            }}>
              {location}</Text>
       </View>

        <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', gap : 5}}>
            <Image 
              source={star}
              style = {{
                width : 25, 
                height : 25,
              }}
            />
            <Text>{rating} ({noOfRatings} + ratings)</Text>
        </View>
        
      </View>
      {/*  */}

      <View style={styles.delieveryDetails}>
        <View>
          <Text style={{fontWeight : 'bold', fontSize : 17}}>30 - 40 Min</Text>
          <Text style={{opacity : 0.7}}>Delievery time</Text>
        </View>

        <View>
          <Text style={{fontWeight : 'bold', fontSize : 17, }}>
            $0.00
          </Text>
          <Text style={{opacity : 0.7}}>Delivery fee on $12+</Text>
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
              <Text style={{ fontSize: 17 }}>When you order $20+ Automatically Applied</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: '#ffffff' }}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      {/*  */}

      {/* popular items */}
      <Text style={{ paddingHorizontal: 10, fontSize: 18, marginBottom: 10, fontWeight: 'bold', color: '#000000', marginTop: 20 }}>Popular Items</Text>
      <View>
        <FlatList
          horizontal={true}
          data={CARD_DATA}
          contentContainerStyle={{}}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }) => (
            <PopularItem item={item} navigation={navigation}/>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default RestaurantProfile