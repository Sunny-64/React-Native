import { View, Text,  ScrollView, ActivityIndicator, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'


import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'


import PopularItem from '../popularItem'
const URL = "https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6"

const PopularItems = ({navigation}:any) => {
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
        <View>
            <Text style={{ paddingHorizontal: 10, fontSize: 18, marginBottom: 10, fontWeight: 'bold', color: '#000000', marginTop: 20 }}>Popular Items</Text>
            {beersData?.length > 0 ?
                <SafeAreaView style={{ display: 'flex', alignItems: 'center' }}>
                    <FlatList
                        // horizontal={true}
                        numColumns={2}
                        data={beersData}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => (
                            <PopularItem item={item} navigation={navigation} updateTotalItemsCount={handleUpdateTotalItemsState} />
                        )}
                    />
                </SafeAreaView>
                :
                <ActivityIndicator size={'large'} color={'#000000'} />
            }
        </View>
    )
}

export default PopularItems