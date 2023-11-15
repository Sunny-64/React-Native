import { StyleSheet, Dimensions } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, ACCENT_COLOR } from "../globalStyles";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    // width: '100%',
  },
  backHandlerContainer: {
    height: height * 0.12,
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
  },
  backHandlerIconContainer: {
    position: 'absolute',
  },
  backHandlerIcon: {
    marginLeft: width * 0.03,
  },
  titleContainer: {
    width: '100%',
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupTitle: {
    color: '#ffffff',
    fontSize: height * 0.04,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: SECONDARY_COLOR,
    // height: '100%',
    borderRadius: width * 0.08,
    paddingHorizontal: width * 0.02,
    paddingVertical: height * 0.03,
  },
  form: {
    marginTop: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderRadius: height * 0.03,
    paddingVertical: height * 0.02,
    paddingLeft: width * 0.15,
    paddingRight: width * 0.03,
    fontSize: height * 0.025,
  },
  termsAndConditions: {
    marginBottom: height * 0.009,
  },
  termsAndConditionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.02,
    paddingLeft: width * 0.02,
  },
  checkBox: {
    fontSize: height * 0.025,
  },
  termsAndConditionsText: {
    textAlign: 'left',
    fontSize: height * 0.020,
    fontWeight: '600',
  },
  button: {
    backgroundColor: ACCENT_COLOR,
    paddingVertical: height * 0.024,
    width: '100%',
    borderRadius: height * 0.05,
    marginTop : height * 0.03
  },
  buttonText: {
    textAlign: 'center',
    fontSize: height * 0.024,
    fontWeight: '600',
    color: '#ffffff',
  },
  halfSeparator: {
    backgroundColor: '#000000',
    width: width * 0.4,
    height: 2,
    marginHorizontal: 'auto',
  },
  separatorContainer: {
    marginTop: height * 0.009,
    height: height * 0.08,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    width: width * 0.13,
    height: width * 0.13,
  },

  signUpText: {
    textAlign: 'center',
    fontSize: height * 0.018,
    fontWeight: 'bold',
    opacity: 0.7,
    // borderWidth : 1
  },
  signUpTextContainer: {
    marginTop: height * 0.015,
    height : height * 0.075,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical : height * 0.01,
    // borderWidth : 1
  },
  
  warningText: {
    color: 'red',
    position: 'absolute',
    top: -height * 0.02,
    marginLeft: width * 0.03,
  },
  inputIcons: {
    position: 'absolute',
    left: width * 0.073,
    top: 15,
    fontSize: height * 0.035,
  },
  errorMsg : {
    position : 'absolute', 
    bottom : height * 0.01,
    left : width * 0.04
  }, 
  errorText : {
    color : 'red',
  }, 
  lastInputErr : {
    bottom : height * 0.01,
    left : width * 0.04
  }, 
  loginText : {
    fontWeight: 'bold', 
    fontSize: 15, 
    color: 'black', 
    width : width * 0.11
  }
});
