import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, Alert } from 'react-native'
import React from 'react'
import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'
import { location } from '../../assets'
import { warningIcon } from '../../assets'

const LIST_DATA = [
  {
    id: 1,
    priority: "Priority",
    time: "20 - 30 min",
    description: "Delievered Directly to you",
    price: 2.99
  },
  {
    id: 2,
    priority: "Priority",
    time: "20 - 30 min",
    description: "Delievered Directly to you",
    price: 2.99
  },
  {
    id: 3,
    priority: "Priority",
    time: "20 - 30 min",
    description: "Delievered Directly to you",
    price: 2.99
  },
]

const Checkout = ({ navigation }: any) => {
  return (

    <ScrollView style={styles.container}>
      <View style={{  flexDirection: 'row', width: '100%' }}>
        <View style={{ width: "20%",  alignItems:'center',marginTop:10}}>
          <Icon
            onPress={() =>navigation.goBack()}
            name="arrow-left"
            style={{ fontSize: 18 }}
          />
        </View>
        <View style={{width:"67%",flexDirection:'column'}}>
        <Text style={{ textAlign: 'center' }}>Checkout</Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000000', fontSize: 18 }}>McDonald's</Text>
        </View>
        {/* <TouchableOpacity
          style={{  top: 15, color: '#252525', borderWidth: 1 }}

          onPress={() => {
            console.log("clicked")
            navigation.goBack();
          }}
        >
        
        </TouchableOpacity>

        <View>
          <Text style={{ textAlign: 'center' }}>Checkout</Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000000', fontSize: 18 }}>McDonald's</Text>
        </View> */}
      </View>

      <View style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
        <Image
          source={location}
          style={{ width: '100%', height: 140, borderRadius: 10 }}
        />
      </View>

      {/* Location */}
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 20 }}>
        <View>
          <Icon name="home" style={{ fontSize: 26 }} />
        </View>
        <View>
          <Text>172 Grand St, New York</Text>
          <Text>NY 10013, Amerika Serikat</Text>
        </View>
      </View>

      {/* Edit Address Popup */}

      <View style={{ backgroundColor: '#a9adb0', paddingVertical: 14, marginTop: 20, borderRadius: 8 }}>

        <View style={{ display: 'flex', flexDirection: 'row', padding: 5, gap: 10 }}>


          <View>
            <Image source={warningIcon} />
          </View>
          <View>
            <View style={{ width: '90%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text style={{ fontWeight: '700', fontSize: 16 }}>We think you may have entered an invalid apartment or suite number. Please check and correct if needed.</Text>
            </View>
            <TouchableOpacity
              style={{ backgroundColor: '#000000', width: '50%', marginTop: 15, paddingVertical: 5, borderRadius: 15 }}
            >
              <Text style={{ color: 'white', textAlign: 'center', paddingVertical: 7 }}>Edit Address</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      {/*  Meet at the door*/}

      <View style={styles.meetAtDoor}>
        <View style={styles.meetAtDoorLeftSide}>
          <View>
            <Icon name="user" style={{ fontSize: 22 }} />
          </View>
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Meet at door</Text>
            <Text>Add delivery note</Text>
          </View>
        </View>
        <View>
          <Icon name="arrow-circle-right" style={{ fontSize: 18 }} />
        </View>
      </View>

      {/* Delivery time */}
      <View >
        <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Icon name="clock" style={{ fontSize: 22 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Delivery time</Text>
          </View>
          <Text>20 - 30 min</Text>
        </View>

        {/* Delivery instruction */}
        <View style={{ marginTop: 30 }}>

          <FlatList
            horizontal={true}
            data={LIST_DATA}
            contentContainerStyle={{ display: 'flex', flexDirection: 'row', gap: 10 }}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (

              <View style={{ width: 230, borderColor: 'black', borderWidth: 1, padding: 8, borderRadius: 8, paddingVertical: 15 }}>
                <View style={styles.delieveryCard}>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{item.priority}</Text>
                    <Text>{item.time}</Text>
                  </View>

                  <View>
                    <Text>{item.description} + ${item.price}</Text>
                  </View>
                </View>
              </View>

            )}
          />
        </View>
      </View>
      {/* <View style={styles.paymentProceedContainer}>
        <TouchableOpacity style={styles.nextButton}>
          <View style={styles.buttonTextContainer}>
            <Text style={{ fontSize: 18, color: 'white' }}>Next</Text>
            <Text style={{ fontSize: 18, color: 'white' }}>$12.72</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </ScrollView>



  )
}

export default Checkout