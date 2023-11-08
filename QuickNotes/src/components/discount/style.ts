import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    container :{
        paddingHorizontal : 10,
        marginTop : 30,
    }, 
    bgImg : {
        height : 150, 
        width : '100%',
    }, 
    contentContainer : {
        paddingHorizontal : 18,
        paddingVertical : 10
    },
    description : {
        width : '60%', 
    }, 
    btn : {
        marginTop : 15,
        backgroundColor : '#000000', 
        width : '35%',
        display : 'flex', 
        alignItems : 'center',
        paddingVertical : 8, 
        borderRadius : 20
    }
})

export default styles; 