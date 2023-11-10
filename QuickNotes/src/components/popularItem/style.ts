import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    incDecContainer : {
        display : 'flex', 
        flexDirection : 'row', 
        alignItems : 'center',
        gap : 20,
        justifyContent : 'center'
   }, 
   addToCartBtn : {
        backgroundColor : '#000000',
        marginTop : 3, 
        paddingVertical : 5,
        borderRadius : 10, 
   }
}); 

export default styles;