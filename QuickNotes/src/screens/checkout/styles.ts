import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        paddingVertical : 15,
        paddingHorizontal: 15,
    },
    meetAtDoor: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    meetAtDoorLeftSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    delieveryCard: { 
        // display: 'flex', 
        // flexDirection: 'row', 
        // justifyContent: 'space-between', 
        // width: 210,
        // borderColor : '#000000', 
    }, 
    paymentProceedContainer : {
        backgroundColor : '#ffffff', 
        position : 'absolute', 
        bottom : 10,
        left : 0,
        zIndex : 1,
        width : '100%', 
        height : 80,
        display : 'flex',
        flexDirection : 'row', 
        justifyContent : 'center',
        alignItems : 'center'
    }, 

    nextButton : {
        backgroundColor : '#2e2e2e', 
        width : '90%',
        height : 60,
        borderRadius : 30, 
        // textAlign : 'center'
        display : 'flex', 
        justifyContent : 'center'
    }, 
    buttonTextContainer : {
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-between',
        paddingHorizontal : 20, 
    }
});

export default styles; 