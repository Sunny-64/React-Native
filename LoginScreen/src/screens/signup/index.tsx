// Native
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'

// Library imports

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
            <TextInput
              value={username}
              style={[styles.input, { marginBottom: 25 }]}
              placeholder='Username'
              onChangeText={newUserName => setUsername(newUserName)}
            />
          </View>

          <View>
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
            <TextInput
              value={password}
              style={[styles.input, { marginBottom: 25 }]}
              placeholder='Password'
              onChangeText={newPasswordText => setPassword(newPasswordText)}
            />
          </View>

          <View>
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

          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text
              style={styles.forgotPasswordText}
            >Forgot Password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}

          >
            <Text style={styles.buttonText}>Sign In</Text>
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