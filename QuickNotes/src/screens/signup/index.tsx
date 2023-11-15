// Native
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native'

// Library imports
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller, Resolver } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'

// custom Imports 
import { styles } from './style'
import { google, facebook, apple, back } from '../../assets'


const Signup = ({ navigation }: any) => {

  const [isChecked, setIsChecked] = useState(false);

  const signupSchema = yup.object({
    email: yup.string()
      .required()
      .matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/, 'Invalid Email'),

    password: yup.string()
      .required(),

    username: yup.string().required(),

    confirmPassword: yup.string()
      .required()
      .oneOf([yup.ref('password')], 'password do not match')
  }).required();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    // watch, 
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  })

  const handleFormSubmit = async (data: any) => {
    if(!isValid){
        Alert.alert("Please complete the form");
    }
    if(!isChecked){
      Alert.alert("Please Accept the terms and conditions"); 
      return;
    }
    try {
      const stringifiedData = JSON.stringify(data); 
      await AsyncStorage.setItem("user", stringifiedData);  
      navigation.navigate('Login')
    }
    catch (err:unknown | any) {
      const errorMessage:string = err?.message; 
      Alert.alert(errorMessage); 
    }
  }

  return (
    <ScrollView style={styles.container}>
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
          <Controller
            control={control}
            name='username'
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Icon name='user' style={styles.inputIcons} />
                <TextInput
                  value={value}
                  style={[styles.input, { marginBottom: 25 }]}
                  placeholder='Username'
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                <View style={styles.errorMsg}>
                  <Text style={styles.errorText}>{errors.username?.message}</Text>
                </View>
              </View>
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Icon name='envelope' style={styles.inputIcons} />
                <TextInput
                  value={value}
                  style={[styles.input, { marginBottom: 25 }]}
                  placeholder='Email'
                  onChangeText={onChange}
                  onBlur={onBlur}
                />

                <View style={styles.errorMsg}>
                  <Text style={styles.errorText}>{errors.email?.message}</Text>
                </View>
              </View>
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Icon name='lock' style={styles.inputIcons} />
                <TextInput
                  value={value}
                  style={[styles.input, { marginBottom: 25 }]}
                  placeholder='Password'
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                <View style={styles.errorMsg}>
                  <Text style={styles.errorText}>{errors.password?.message}</Text>
                </View>
              </View>
            )}
          />

          <Controller
            control={control}
            name='confirmPassword'
            render={({ field: { value, onChange, onBlur } }) => (
              <View>
                <Icon name='lock' style={styles.inputIcons} />
                {/* {!togglePasswordDoNotMatch && confirmPassword.trim() !== '' && <Text style={styles.warningText}>Password does not match!</Text>} */}
                <TextInput
                  value={value}
                  style={[styles.input, { marginBottom: 5 }]}
                  placeholder='Confirm Password'
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
                <View style={styles.lastInputErr}>
                  <Text style={styles.errorText}>{errors.confirmPassword?.message}</Text>
                </View>
              </View>
            )}
          />

          <View style={styles.termsAndConditions}>
            <TouchableOpacity
              style={styles.termsAndConditionsContainer}
              onPress={() => {
                setIsChecked(!isChecked)
              }}
            >

              <Icon name={isChecked ? "check-square" : "square-o"} style={styles.checkBox} />
              <Text
                style={styles.termsAndConditionsText}
              >I agree to all the Terms & Conditions</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(handleFormSubmit)}
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
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Login form End */}
    </ScrollView>
  )
}

export default Signup