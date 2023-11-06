import {StyleSheet} from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../globalStyles';

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor : PRIMARY_COLOR, 
    },
    container : {
        backgroundColor : SECONDARY_COLOR, 
        height : '100%', 
        borderRadius : 20, 
        marginTop : 10
    }, 
    heading : {
        textAlign : 'center', 
        marginTop : 20, 
        fontWeight : 'bold', 
        fontSize : 18
    }, 

    logo : {
        width : 100, 
        height : 100
    }, 
    headerContainer : {
        display : 'flex', 
        flexDirection : 'row',
        alignItems : 'center', 
        justifyContent : 'space-between',
        paddingHorizontal : 20
    }
})

export default styles;