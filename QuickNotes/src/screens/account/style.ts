import {StyleSheet} from 'react-native'; 
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get("screen"); 

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 10,
        borderWidth : 1,
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
    logoutButton : {
        backgroundColor : '#e4e5e7', 
        paddingVertical : 10,
        borderRadius : 15, 
        // marginBottom : 10
    }, 
    logoutButtonText : {
        textAlign :'center', 
        fontSize : 16
        
    }, 
    userData : {
        height : height * 0.69
    }
}); 

export default styles;