import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native'

const screenWidth = Dimensions.get("screen").width; 

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 15,
        paddingVertical : 10
    }, 
    meetAtDoor : {
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 30,
    }, 
    meetAtDoorLeftSide : {
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center',
        gap : 15,
    },

    cardItemContainer : {
        backgroundColor : '#e4e5e7',
        marginVertical : 8,
        paddingVertical : 8, 
        borderRadius : 8,
        paddingHorizontal : 10,
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center', 
        gap : 10,
        justifyContent : 'space-between',
    }, 

    checkoutBtnContainer : {
        position : 'absolute', 
        bottom : 0, 
        height : 70, 
        backgroundColor : '#ffffff',
        width : '100%',
        display : 'flex', 
        flexDirection : 'row',
        justifyContent : 'center', 
        alignItems : 'center'

    }, 

    checkoutBtn : {
        backgroundColor : '#000000', 
        width : screenWidth - 70,
        paddingVertical : 10,
        borderRadius : 20,
        marginHorizontal : 'auto',
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-between',
        paddingHorizontal : 20, 

    }
}); 

export default styles; 