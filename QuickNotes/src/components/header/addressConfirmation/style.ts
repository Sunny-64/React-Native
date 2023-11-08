
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        marginTop : 15,
        backgroundColor : '#f5f5f5', 
        paddingVertical : 10, 
        paddingHorizontal : 10,
        borderRadius : 10/2,
        display : 'flex',
        flexDirection : 'row', 
        alignItems : 'center',
        gap : 30, 
    }, 
    textContainer : {
        flex : 1,
        flexDirection : 'row', 
        flexWrap : 'wrap', 
    }, 
    crossContainer : {
        backgroundColor : '#000000', 
        borderRadius : 12,
        padding : 2
    }
});

export default styles; 