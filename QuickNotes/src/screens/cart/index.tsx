import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles'


import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { mcD } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Cart = ({ navigation }: any) => {
  const [cartData, setCartData] = useState([]);
  const [laoding, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getCartData = async () => {
      const localCartData: any = await AsyncStorage.getItem("cartItems");
      if (!localCartData) {
        return;
      }
      const parsedLocalData = JSON.parse(localCartData);
      setCartData(parsedLocalData);
      setLoading(false);
    }
    getCartData();
  }, [cartData]);

  const calculateTotal = () => {
    if (!cartData) {
      return;
    }
    let res: any = 0;
    cartData?.forEach((item: any) => {
      res += item?.price * item?.quantity;
    });
    return parseFloat(res).toFixed(2);;
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{}}>
          <TouchableOpacity
            style={{ position: 'absolute', top: 15, }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="arrow-left"
              style={{ fontSize: 17 }}
            />
          </TouchableOpacity>

          <View>
            <Text style={{ textAlign: 'center', fontWeight: '700' }}>Cart</Text>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', color: '#000000', fontSize: 18 }}>Quick Food</Text>
          </View>
        </View>


        <Text>{laoding && "Loading"}</Text>
        {cartData.length > 0 &&
          cartData.map((item: any, index) => {
            return (
              <View key={index} style={styles.cardItemContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <TouchableOpacity >
                    <Image
                      source={mcD}
                      style={{ width: 40, height: 40, }}
                    />
                  </TouchableOpacity>
                  <View>
                    <TouchableOpacity>
                      <Text style={{ fontSize: 16, fontWeight : 'bold' }}>{item?.title}</Text>
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
                    <Text style={{fontWeight : 'bold', fontSize : 17}}>${item?.price}</Text>
                  </View>
              <TouchableOpacity>
                  <Icon name="trash" style={{fontSize : 18}}/>
              </TouchableOpacity>



              </View>
            )
          })
        }

      </ScrollView>
      <View style={styles.checkoutBtnContainer}>
        <TouchableOpacity style={styles.checkoutBtn}
          onPress={() => {
            navigation.navigate("Checkout")
          }}
        >
          <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 18 }}>Next</Text>
          <Text style={{ color: '#ffffff', fontSize: 18 }}>${calculateTotal()}</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Cart

{/* {cartData.length > 0 && 
         <FlatList 
         data={cartData} 
        //  keyExtractor={(item) => item.id}
         renderItem={(item:any) => (
            <View style={styles.cardItemContainer}>
                <View>
                  <Image 
                    source={mcD}
                    style={{width : 40, height : 40,}}
                    />
                    <Text style={{fontSize : 16}}>Hello world</Text>
                </View>
            </View>
         )}
     />
      } */}