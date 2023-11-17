import { View, Text, Button, Alert, TouchableOpacity } from 'react-native'
import React from 'react'

import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { logo } from '../../assets';
import { emptyCart } from '../../redux/cart/cartSlice';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Payment = ({ amount, style, buttonTextStyle, navigation }: any) => {
    
    const cd = useSelector((state:any) => state.cart.data); 
    const dispatch = useDispatch(); 

    const saveOrdersInAsynStorage = async (data: any) => {
        try {
            // fetch orders and cart
            const getOrders: any = await AsyncStorage.getItem("orders");
            const getCartData = await AsyncStorage.getItem("cartItems");

            dispatch(emptyCart()); 
            // console.log('====================================');
            // console.log("cart should be empty by this");
            // console.log('====================================');

            // if cart is empty than order can't be placed...
            // if (!getCartData) {
            //     return;
            // }

            // parse cart item to json 
            // const cartItems = JSON.parse(getCartData);
            let total = 0;

            // calculate total 
            cd.forEach((item:any) => {
                total += item.target_fg * item.quantity
            }); 

            // create the order object
            const dataWithPaymentId = {
                cartItems : [...cd],
                paymentId: data.razorpay_payment_id, 
                total : total,
            }

            // orders initialization
            let orders = [];
            // console.log(orders)

            // if orders doesn't exist in async storage
            if (!getOrders) {
                orders.push(dataWithPaymentId);
            }
            // if orders exist in async storage destructure the previous orders..
            else {
                const parsedOrders = JSON.parse(getOrders)
                orders = [...parsedOrders, dataWithPaymentId]
            }

            // stringify the orders data again..
           
            const stringifiedOrdersData = JSON.stringify(orders);
            await AsyncStorage.setItem("orders", stringifiedOrdersData);

            // console.log("Data Saved");

            // empty the cart
            await AsyncStorage.setItem("cartItems", JSON.stringify([])); 

            navigation.navigate("Orders", {
                amount
            }); 
        }
        catch (err) {
            console.log(err)
        }
    }

    const processPayment = () => {
        let options: any = {
            description: 'Credits towards consultation',
            image: logo,
            currency: ['INR', 'USD'],
            key: 'rzp_test_iRH5zfebl5sWfo', // Your api key
            amount: amount * 100,
            name: 'QuickFood',
            prefill: {
                email: 'sunny6464n@gmail.com',
                contact: '7976642145',
                name: 'QuickBeers',
            },
            theme: { color: '#f6f6f6' },
        };
        // console.log(RazorpayCheckout.open)
        RazorpayCheckout.open(options)
            .then(data => {
                // handle success
                Alert.alert(`Success: ${data.razorpay_payment_id}`);
                saveOrdersInAsynStorage(data); 
                navigation.navigate('Home'); 
            })
            .catch(error => {
                Alert.alert(`Error: ${error.code} | ${error.description}`);
                console.log(error); 
            });
    }

    return (
        <View>
            <TouchableOpacity
                onPress={processPayment}
                style={style}
            >
                {/* <Text>Next {amount}</Text> */}
                <View style={buttonTextStyle}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Next</Text>
                    <Text style={{ fontSize: 18, color: 'white' }}>₹{amount ?? 0}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Payment