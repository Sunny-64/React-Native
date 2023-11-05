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
    backHandlerContainer : {
        height : 100, 
        display : "flex", 
        flexDirection : 'row', 
        alignItems : 'center',
    },
    backHandlerIconContainer : {
        position : 'absolute',
    },
    backHandlerIcon : {
        marginLeft : 10,
    },
    titleContainer : {
        width : '100%',
        display : "flex", 
        flexDirection : 'row',
        justifyContent : 'center'
    },
    signupTitle : {
        color : '#ffffff', 
        fontSize : 25, 
        fontWeight : 'bold',        
    }, 
    formContainer : {
        backgroundColor : SECONDARY_COLOR,
        height : '100%', 
        borderRadius : 30, 
        paddingHorizontal : 10, 
        paddingVertical : 20,
    },
   
    form : {
        marginTop : 25
    },
    
    input : {
        borderWidth : 1, 
        borderRadius : 105,
        paddingVertical : 15,
        // paddingHorizontal : 30,
        paddingLeft : 60,
        paddingRight : 20,
        fontSize : 18,
    }, 
    termsAndConditions : {
        marginBottom : 50
    },

    termsAndConditionsContainer : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10,
        paddingLeft : 20,
    }, 

    checkBox : {
        fontSize : 20,
    }, 

    termsAndConditionsText : {
        textAlign : 'left',
        fontSize : 15, 
        fontWeight : '600',
    },

    button : {
        backgroundColor: ACCENT_COLOR,
        paddingVertical: 18,
        width: '100%',
        borderRadius: 125, 
        // marginTop : 20
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
        marginTop : 18, 
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
    }, 

    warningText : {
        color : 'red',
        position : 'absolute', 
        top : -20, 
        marginLeft : 24
    }, 
    inputIcons : {
        position : 'absolute', 
        left : 30, 
        top : 20, 
        fontSize : 20
    }
}); 