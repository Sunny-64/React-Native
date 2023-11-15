import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 15,
        marginVertical : 10
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

    paymentProceedContainer : {
        backgroundColor : '#ffffff', 
        width : '100%', 
        height : 80,
        display : 'flex',
        flexDirection : 'row', 
        justifyContent : 'center',
        alignItems : 'center'
    }, 

    nextButton : {
        backgroundColor : '#2e2e2e', 
        width : width * 0.9,
        height : height * 0.09,
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
    }, 
    priorityContainer : {
        width: 230, 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 8, 
        borderRadius: 8, 
        paddingVertical: height * 0.025
    }
});

export default styles; 