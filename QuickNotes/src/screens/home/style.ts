import {StyleSheet} from 'react-native'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../globalStyles';

const styles = StyleSheet.create({
    header : {
        paddingVertical : 10, 
        paddingHorizontal : 10,
        display : 'flex', 
    }, 
    logo : {
        height : 30,
        width : 30
    }, 

    logoContainer : {
        backgroundColor : '#fafafa',
    }
}); 

export default styles;