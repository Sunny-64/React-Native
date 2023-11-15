import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 10
    }, 

    header : {
        width : '100%',
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center', 
        marginBottom : 15,
        paddingHorizontal : 4
    }, 
    backIcon : {
        width : '16%', 

    },

    ordersContainer : {
        display : 'flex', 
        // backgroundColor : 'red'
        // paddingHorizontal : 10
    }, 

    orderContainer : {
        // backgroundColor : 'pink',
        borderRadius : 10,
        padding : 4,
        borderWidth : 1,
        marginVertical : 10

    }, 
    orderItemContainer : {
        backgroundColor : '#e4e5e7',
        // backgroundColor : 'red',
        borderRadius : 4,
        marginVertical : 5, 
        padding : 4,
        paddingHorizontal : 8, 
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center', 
        // gap : 10
        justifyContent : 'space-between'
    }, 

    itemImage : {
        width : 50, 
        height : 50, 
        objectFit : 'contain', 
    }

})

export default styles; 