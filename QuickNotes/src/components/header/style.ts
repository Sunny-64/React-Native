import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    header : {
        paddingVertical : 10, 
        paddingHorizontal : 10,
        display : 'flex', 
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    iconContainer : {
        backgroundColor : '#e4e5e7', 
        display : 'flex', 
        justifyContent : 'center',
        padding : 10, 
        borderRadius : 30/2
    },
    logo : {
        height : 30, 
        width : 30, 
    }, 
    locationContainer :{
        display : 'flex', 
        alignItems : 'center', 

    },
    bellIcon : {
        fontSize : 25,
        paddingHorizontal : 2,
    }
})

export default styles