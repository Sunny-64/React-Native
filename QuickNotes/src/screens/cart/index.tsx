import { View, Text, ScrollView, FlatList, Image, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {useSelector, useDispatch} from 'react-redux'; 
import { removeItemFromCart } from '../../redux/cart/cartSlice'

import { TouchableOpacity } from 'react-native-gesture-handler'

const Cart = ({ navigation }: any) => {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [noOfItemsInCart, setNoOfItemsInCart] = useState(0); 

  const dispatch = useDispatch(); 

  const cartItems = useSelector((state:any) => state.cart.data); 

  const calculateTotal = () => {
      let t = 0; 
      cartItems.forEach((item:any) => {
        t += item.target_fg * item.quantity; 
      });
      setTotal(t);
  }

  const calculateTotalItemsInCart = () => {
    let t = 0; 
    cartItems.forEach((item:any) => {
        t += item.quantity; 
    }); 
    setNoOfItemsInCart(t)
  }
  useEffect(() => {
    if(cartItems){
      calculateTotalItemsInCart(); 
      calculateTotal(); 
      navigation.setOptions({
        tabBarBadge: noOfItemsInCart
      })
    }
  }, [cartItems, noOfItemsInCart]); 

  const handleRemoveFromCart = async (id: number) => {
      const payload:any = {
          id,
      }
      dispatch(removeItemFromCart(payload))
  }
  return (
    <>
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
            <Text style={{ textAlign: 'center', fontWeight: '700' }}>Cart</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000000', fontSize: 18 }}>Quick Food</Text>
          </View>

        </View>

        {/* <Text>{laoding && "Loading"}</Text> */}
        {cartData.length > 0 ?
          <View>
            <Text style={{fontWeight : 'bold', color : 'black', fontSize : 18}}>Total Items {noOfItemsInCart}</Text>
          </View>
          :
          <View >
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>No Items in the Cart!!!</Text>
          </View>
        }
        {
          cartItems.map((item: any, index:number) => {
            return (
              <View key={index} style={styles.cardItemContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <TouchableOpacity >
                    <Image
                      source={{
                        uri : item.image_url
                      }}
                      style={{ width: 40, height: 40, objectFit : 'contain'}}
                    />
                  </TouchableOpacity>

                  <View style={{width : 100}}>
                    <TouchableOpacity>
                      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item?.name.substring(0, 15) + (item.name.length > 15 ? "..." : "")}</Text>
                    </TouchableOpacity>

                    <View>
                      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Text>{item?.quantity}</Text>
                        <Text>Qty</Text>
                      </View>
                    </View>

                  </View>
                </View>

                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 17, width : 50}}>₹{item?.target_fg}</Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    handleRemoveFromCart(item?.id)
                  }}
                >
                  <Icon name="trash" style={{ fontSize: 18 }} />
                </TouchableOpacity>

              </View>
            )
          })
        }

      </ScrollView>
      {noOfItemsInCart > 0 &&
        <View style={styles.checkoutBtnContainer}>
          <TouchableOpacity style={styles.checkoutBtn}
            onPress={() => {
              navigation.navigate("Checkout", {
                  total
              })
            }}
          >
            <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 18 }}>Next</Text>
            <Text style={{ color: '#ffffff', fontSize: 18 }}>₹{total}</Text>
          </TouchableOpacity>
        </View>
      }
    </>
  )
}

export default Cart

