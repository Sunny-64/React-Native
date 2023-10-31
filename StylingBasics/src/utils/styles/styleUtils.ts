import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textWhite : {
        color : '#ffffff'
    }, 
    textBlack : {
        color : '#000000'
    }
}); 

const commonStyles = StyleSheet.create({
    heading : {
        fontSize : 20, 
        marginBottom : 8, 
        fontWeight : '700', 
    }, 
})

export {
    styles as themeStyles,
    commonStyles
}; 