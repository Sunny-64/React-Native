import { StyleSheet , Dimensions} from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR } from "../globalStyles";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const styles = StyleSheet.create({
    container : {
        backgroundColor : PRIMARY_COLOR,
        height : height, 
        width : '100%',
    }, 
    logoContainer : {
        width : '100%',
        alignItems : 'center', 
        justifyContent : 'center',
        height : 225
    }, 

    formContainer : {
        backgroundColor : SECONDARY_COLOR,
        height : '100%', 
        borderRadius : 30, 
        paddingHorizontal : 10, 
        paddingVertical : 30,
    },
    img : {
        width : 210, 
        height : 210
    }, 
    form : {
        marginTop : 40
    },
    // inputContainer : {

    // },
    input : {
        borderWidth : 1, 
        borderRadius : 105,
        paddingVertical : 17,
        paddingHorizontal : 30,
        fontSize : 18,
    }, 
    forgotPasswordContainer : {
        paddingRight : 14, 
    }, 
    forgotPasswordText : {
        textAlign : 'right',
        fontSize : 15, 
        fontWeight : '600',
    }, 
    button : {
        backgroundColor: ACCENT_COLOR,
        paddingVertical: 18,
        width: '100%',
        borderRadius: 125, 
        marginTop : 40
    },
    buttonText : {
        textAlign : 'center',
        fontSize : 17, 
        fontWeight : '600',
        color : '#ffffff'
    }, 
    halfSeparator : {
        backgroundColor : '#000000',
        width : 150,
        height : 2, 
        marginHorizontal : 'auto'
    }, 
    separatorContainer : {
        marginTop : 30, 
        height : 50,
        width : '100%',
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-around', 
        alignItems : 'center'
    }, 

    iconsContainer : {
        display : 'flex',
        flexDirection : 'row', 
        justifyContent : 'space-evenly', 
    }, 

    icon : {
        width : 50, 
        height : 50, 
    }, 
    signUpText : {
        textAlign : 'center',
        fontSize : 15, 
        fontWeight : 'bold', 
        opacity : 0.7
    },
    signUpTextContainer : {
        marginTop : 22,
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'center'
    }
}); 