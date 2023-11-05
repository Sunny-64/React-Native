// Native
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native'

// Library imports
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';

// custom Imports 
import { styles } from './style'
import { logo, google, facebook, apple, back } from '../../assets'
import { userSchema, validateEmail } from '../../utils/validation';

const Signup = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [toggleWrongEmailWarning, setWrongEmailWarning] = useState(false);
  const [togglePasswordDoNotMatch, setPasswordDoNotMatch] = useState(false);

  const [isChecked, setIsChecked] = useState(false); 

  const handleFormSubmit = async () => {
    if(!isChecked){
      Alert.alert("Please Accept the terms and conditions"); 
      return;
    }
    try {
      const validate = await userSchema.validate({ username, email, password });
      const value : any = {
        username,
        email, 
        password,
      }
      await AsyncStorage.setItem("user", value);  

      navigation.navigate('Login')
    }
    catch (err:unknown | any) {
      const errorMessage:string = err?.message; 
      Alert.alert(errorMessage); 
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.backHandlerContainer}>

        <TouchableOpacity
          style={styles.backHandlerIconContainer}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            source={back}
            style={styles.backHandlerIcon}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer} >
          <Text style={styles.signupTitle}>Sign Up</Text>
        </View>

      </View>
      {/* Login form */}
      <View style={styles.formContainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            textAlign: 'center',
            color: '#000000'
          }}>
          Hello !
        </Text>

        {/* form start */}
        <View style={styles.form}>

          <View>
            <Icon name='user' style={styles.inputIcons} />
            <TextInput
              value={username}
              style={[styles.input, { marginBottom: 25 }]}
              placeholder='Username'
              onChangeText={newUserName => setUsername(newUserName)}
            />
          </View>

          <View>
            <Icon name='envelope' style={styles.inputIcons} />
            {toggleWrongEmailWarning && email.trim() !== '' && <Text style={styles.warningText}>Invalid Email!</Text>}
            <TextInput
              value={email.trim()}
              style={[styles.input, { marginBottom: 25 }]}
              placeholder='Email'
              onChangeText={newEmail => {
                setEmail(newEmail.trim())
                setWrongEmailWarning(!validateEmail(newEmail.trim()))
              }}
            />
          </View>

          <View>
            <Icon name='lock' style={styles.inputIcons} />
            <TextInput
              value={password}
              style={[styles.input, { marginBottom: 25 }]}
              placeholder='Password'
              onChangeText={newPasswordText => setPassword(newPasswordText)}
            />
          </View>

          <View>
            <Icon name='lock' style={styles.inputIcons} />
            {!togglePasswordDoNotMatch && confirmPassword.trim() !== '' && <Text style={styles.warningText}>Password does not match!</Text>}
            <TextInput
              value={confirmPassword}
              style={[styles.input, { marginBottom: 5 }]}
              placeholder='Confirm Password'
              onChangeText={newConfirmPassword => {
                setConfirmPassword(newConfirmPassword)
                setPasswordDoNotMatch(password === newConfirmPassword)
              }}
            />
          </View>

          <View style={styles.termsAndConditions}>
            <TouchableOpacity 
              style={styles.termsAndConditionsContainer} 
              onPress={() => {
                setIsChecked(!isChecked)
              }}
            >
             
              {/* <Icon name="square-o" style={styles.checkBox}/> */}
              <Icon name={isChecked ? "check-square" : "square-o"} style={styles.checkBox}/>
              <Text
                style={styles.termsAndConditionsText}
              >I agree to all the Terms & Conditions</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleFormSubmit}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

        </View>
        {/* form end */}

        {/* Separater */}
        <View style={styles.separatorContainer}>
          <View style={styles.halfSeparator}></View>
          <Text style={{ fontSize: 15, fontWeight: '500' }}>Or</Text>
          <View style={styles.halfSeparator}></View>
        </View>
        {/* Separater */}
        <View style={styles.iconsContainer}>

          <TouchableOpacity>
            <Image style={styles.icon} source={google} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.icon} source={apple} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.icon} source={facebook} />
          </TouchableOpacity>

        </View>

        {/* Don't have an account text */}
        <View style={styles.signUpTextContainer}>
          <Text style={styles.signUpText}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login")
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', paddingLeft: 5 }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Login form End */}
    </View>
  )
}

export default Signup