import {StyleSheet} from 'react-native'; 

const styles = StyleSheet.create({
    container : {
        paddingHorizontal : 10,
        marginTop : 30,
        marginBottom : 20
    }, 
    heading : {
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : "space-between"

    }, 
    foodDescription : {
        display : 'flex', 
        flexDirection : 'row', 
        justifyContent : 'space-between', 
        marginTop : 3
    },
    foodRating : {
        display : 'flex', 
        flexDirection : 'row', 
        gap : 8,
        alignItems : 'center'
    }
})

export default styles