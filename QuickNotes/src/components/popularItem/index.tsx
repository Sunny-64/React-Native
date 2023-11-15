import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'

import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage'

const PopularItem = ({ item, navigation, updateTotalItemsCount }: any) => {
    const [toggleAddToCartView, setToggleAddToCartView] = useState(false);
    const [quantity, setQuantity] = useState(1); 
    const [isLoading, setIsLoading] = useState(false); 

    const increment = () => {
        if (quantity < 1) {
            setQuantity(1);
        } else {
            setQuantity((prev) => prev + 1);
        }
        setToggleAddToCartView(true); // Toggle the view on increment
    }; 

    const decrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        } else {
            setToggleAddToCartView(false); // Toggle the view on decrement when quantity reaches 1
            setQuantity(1);
        }
    };

    const handleAddToCart = async () => {
        setIsLoading(true); 
        const cartData = await AsyncStorage.getItem("cartItems");
        let cart:any = [];
        if(cartData){
            const parsedCartData = JSON.parse(cartData); 
            cart = [...parsedCartData]; 
            let found = false; 
            cart.forEach((cartItem:any) => {
                if(cartItem.id === item.id){
                    cartItem.quantity += quantity;
                    found = true; 
                }
            }); 
            if(!found){
                cart.push({
                    ...item, 
                    quantity
                })
            }
        }
        else{
            const cartItem = {
                ...item, 
                quantity,
            }
    
            cart.push(cartItem); 
        }

        // Get total Number of Items
        let noOfItems = 0; 
        cart?.forEach((item:any) => {
            noOfItems += item.quantity; 
        }); 

        const serializedTotalCartItems = JSON.stringify(noOfItems); 
        await AsyncStorage.setItem("totalCartItems", serializedTotalCartItems); 
        
        updateTotalItemsCount(noOfItems);

        const stringifiedCartData = JSON.stringify(cart); 
        await AsyncStorage.setItem("cartItems", stringifiedCartData); 

        Alert.alert("","Item Added to Cart");
        setIsLoading(false); 
    }

    return (
        <View style={{ width: 130, backgroundColor: 'white', marginRight: 10, marginLeft: 10, padding: 5, borderRadius:10, marginVertical : 10}}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Image
                    source={{
                        uri : item?.image_url
                    }}
                    style={{ width: 80, height: 80, borderRadius: 10, objectFit : 'contain' }}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    setToggleAddToCartView(!toggleAddToCartView);
                }}
            >
                <Text style={{ fontSize: 16, fontWeight: '700' }}>{item.name}</Text>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>₹{item.target_fg}</Text>
                    <View style={{ paddingRight: 8 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{!toggleAddToCartView ? "+" : "-"}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {
                toggleAddToCartView && 
                <View>
                    <Text style={{ fontWeight: '600' }}>Quantity:</Text>
                    <View style={styles.incDecContainer}>

                        <TouchableOpacity
                            onPress={decrement}
                            disabled={quantity === 0}
                            style={quantity === 1 && {opacity: 0.6}}
                        >
                            <Icon name="minus" style={{ fontSize: 18 }} />
                        </TouchableOpacity>

                        <Text style={{ fontSize: 18 }}>{quantity}</Text>

                        <TouchableOpacity
                            onPress={increment}
                        >
                            <Icon name="plus" style={{ fontSize: 18 }} />
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={styles.addToCartBtn}
                        onPress={handleAddToCart}
                    >
                        {isLoading ? 
                            <ActivityIndicator size={'small'} color={'#ffffff'}/>
                        : 
                            <Text style={{color: '#ffffff', textAlign: 'center'}}>Add To Cart</Text>
                        }
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}

export default PopularItem;
