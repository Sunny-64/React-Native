import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    topIconsContainer : {
        position : 'absolute',
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-between',
        width : '100%', 
        paddingHorizontal : 15,
        top : 10
    },
    icon : {
        fontSize : 20,
    }, 

    imgContainer :{
        paddingHorizontal : 10,
        marginTop : 10
    }, 

    heroImg : {
        width : '100%', 
        height : 200,
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
    }, 

    profileIcon : {
        height : 90, 
        width : 90,
        borderRadius : 90/2, 
        borderWidth : 5, 
        borderColor : '#ffffff', 
        position : 'absolute', 
        bottom : -40, 
        left : 30,
        objectFit : 'contain'
    }, 

    name : {
        marginTop : 40, 
        paddingHorizontal : 15,
        display : 'flex', 
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    }, 

   location : {
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        paddingHorizontal : 15,
   }, 
   delieveryDetails : {
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        paddingHorizontal : 15,
        marginTop : 20,
        marginBottom : 15,
        backgroundColor : '#fafafa',
        paddingVertical : 15, 

   }, 
   incDecContainer : {
        display : 'flex', 
        flexDirection : 'row', 
        alignItems : 'center',
        gap : 20,
        justifyContent : 'center'
   } 
})

export default styles; 