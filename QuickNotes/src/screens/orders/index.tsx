import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './style'

const Orders = ({ navigation, route }: any) => {
  const [orders, setOrders] = useState([]);
  const {amount} = route.params ?? 0; 

  useEffect(() => {
    const fetchOrders = async () => {
      const getOrders:any = await AsyncStorage.getItem("orders");
      if (!getOrders) {
        return;
      }
      
      setOrders(JSON.parse(getOrders));
    }
    fetchOrders();

  }, [orders])

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <View style={styles.backIcon}>
          <Icon
            name="arrow-left"
            style={{ fontSize: 17 }}
            onPress={() => {
              navigation.goBack()
            }}
          />
        </View>

        <View style={{ width: '70%' }}>
          <Text style={{ textAlign: 'center', fontWeight: '700' }}>Quick Food</Text>
          <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000000', fontSize: 18 }}>Orders</Text>
        </View>

      </View>
      {orders.length <= 0 && <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '700' }}>No Orders placed yet !!</Text>}
      {orders ?
        <View style={styles.ordersContainer}>
          {orders.map((order: any, index) => {
            return (

              <View key={index} style={styles.orderContainer}>
                <View style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}>
                    <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: '700' }}>{order.paymentId}</Text>
                    <Text style={{ marginBottom: 10, fontSize: 16, fontWeight: '700', width : 50 }}>₹{order.total}</Text>
                </View>

                {order.cartItems.map((item: any, index: number) => {
                  
                  return (
                    <View key={index} style={styles.orderItemContainer}>
                      <Image
                        source={{
                          uri: item.image_url
                        }}
                        style={styles.itemImage}
                      />
                      <View style={{ display: 'flex', justifyContent: 'flex-start', width: 100 }}>
                        <Text>{item.name}</Text>
                        <Text>QTY : {item.quantity}</Text>
                      </View>

                      {/* <Text style={{width : 50}}>₹{item.target_fg}</Text> */}
                      <Text style={{ width: 50 }}>₹{item.target_fg * item.quantity}</Text>
                    </View>
                  )

                })}
              </View>
            )
          })}
        </View>
        :
        <ActivityIndicator size={"large"} color={"#000000"} />
      }
    </ScrollView>
  )
}

export default Orders