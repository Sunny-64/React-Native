// import { StyleSheet , Dimensions} from "react-native";
// import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR } from "../globalStyles";

// const width = Dimensions.get('screen').width
// const height = Dimensions.get('screen').height

// console.log(height)
// export const styles = StyleSheet.create({
//     container : {
//         backgroundColor : PRIMARY_COLOR,
//         height : height, 
//         width : '100%',
//     }, 
//     logoContainer : {
//         width : '100%',
//         alignItems : 'center', 
//         justifyContent : 'center',
//         // height : (80/height) * 100
//     }, 

//     formContainer : {
//         backgroundColor : SECONDARY_COLOR,
//         height : '100%', 
//         borderRadius : 30, 
//         paddingHorizontal : 10, 
//         paddingVertical : 30,
//     },
//     img : {
//         width : 210, 
//         height : 210
//     }, 
//     form : {
//         marginTop : 40
//     },
//     // inputContainer : {

//     // },
//     input : {
//         borderWidth : 1, 
//         borderRadius : 105,
//         paddingVertical : 17,
//         // paddingHorizontal : 30,
//         paddingLeft : 60,
//         fontSize : 18,
//     }, 
//     forgotPasswordContainer : {
//         paddingRight : 14, 
//     }, 
//     forgotPasswordText : {
//         textAlign : 'right',
//         fontSize : 15, 
//         fontWeight : '600',
//     }, 
//     button : {
//         backgroundColor: ACCENT_COLOR,
//         paddingVertical: 18,
//         width: '100%',
//         borderRadius: 125, 
//         marginTop : 40
//     },
//     buttonText : {
//         textAlign : 'center',
//         fontSize : 17, 
//         fontWeight : '600',
//         color : '#ffffff'
//     }, 
//     halfSeparator : {
//         backgroundColor : '#000000',
//         width : 150,
//         height : 2, 
//         marginHorizontal : 'auto'
//     }, 
//     separatorContainer : {
//         marginTop : 30, 
//         height : 50,
//         width : '100%',
//         display : 'flex', 
//         flexDirection : 'row', 
//         justifyContent : 'space-around', 
//         alignItems : 'center'
//     }, 

//     iconsContainer : {
//         display : 'flex',
//         flexDirection : 'row', 
//         justifyContent : 'space-evenly', 
//     }, 
//     icon : {
//         width : 50, 
//         height : 50, 
//     }, 
//     signUpText : {
//         textAlign : 'center',
//         fontSize : 15, 
//         fontWeight : 'bold', 
//         opacity : 0.7
//     },
//     signUpTextContainer : {
//         marginTop : 22,
//         display : 'flex', 
//         flexDirection : 'row', 
//         justifyContent : 'center'
//     }, 
//     inputIcons : {
//         position : 'absolute', 
//         left : 30, 
//         top : 22, 
//         fontSize : 20
//     }
// }); 



import { StyleSheet, Dimensions } from "react-native";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  ACCENT_COLOR,
} from "../globalStyles";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    height: height,
    width: width,
  },
  logoContainer: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.2
  },
  formContainer: {
    backgroundColor: SECONDARY_COLOR,
    height: height * 0.8, // Adjust as needed
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  img: {
    width: width * 0.4, // Adjust as needed
    height: width * 0.4, // Adjust as needed
  },
  form: {
    marginTop: height * 0.03, // Adjust as needed
  },
  input: {
    borderWidth: 1,
    borderRadius: height * 0.07, // Adjust as needed
    paddingVertical: height * 0.025, // Adjust as needed
    paddingLeft: width * 0.15, // Adjust as needed
    fontSize: height * 0.025, // Adjust as needed
  },
  forgotPasswordContainer: {
    paddingRight: width * 0.03, // Adjust as needed
  },
  forgotPasswordText: {
    textAlign: "right",
    fontSize: height * 0.022, // Adjust as needed
    fontWeight: "600",
  },
  button: {
    backgroundColor: ACCENT_COLOR,
    paddingVertical: height * 0.03, // Adjust as needed
    width: "100%",
    borderRadius: height * 0.08, // Adjust as needed
    marginTop: height * 0.025, // Adjust as needed
  },
  buttonText: {
    textAlign: "center",
    fontSize: height * 0.027, // Adjust as needed
    fontWeight: "600",
    color: "#ffffff",
  },
  halfSeparator: {
    backgroundColor: "#000000",
    width: width * 0.3, // Adjust as needed
    height: 2,
    marginHorizontal: "auto",
  },
  separatorContainer: {
    marginTop: height * 0.03, // Adjust as needed
    height: height * 0.05, // Adjust as needed
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // borderWidth : 1,
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: {
    width: width * 0.13, // Adjust as needed
    height: width * 0.13, // Adjust as needed
  },
  signUpText: {
    textAlign: "center",
    fontSize: height * 0.020, // Adjust as needed
    fontWeight: "bold",
    opacity: 0.7,
  },
  signUpTextContainer: {
    marginTop: height * 0.01, // Adjust as needed
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems : 'center'
  },
  inputIcons: {
    position: "absolute",
    left: width * 0.075, // Adjust as needed
    top: 20, // Adjust as needed
    fontSize: height * 0.035, // Adjust as needed
  },
  errorMsg: {
    position: 'absolute',
    bottom: height * 0.01,
    left: width * 0.04
  },
  errorText: {
    color: 'red',
  },
});
