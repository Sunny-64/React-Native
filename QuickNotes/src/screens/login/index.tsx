import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable, Alert, ActivityIndicator } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { logo } from '../../assets'
import { google, apple, facebook } from '../../assets'
import { styles } from './style'

const Login = ({ navigation }: any) => {

    const [isLoading, setIsLoading] = useState(false)

    const loginSchema = yup.object({
        email: yup.string()
            .required()
            .matches(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,4}$/, 'Invalid Email'),

        password: yup.string()
            .required(),
    })

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const handleFormSubmit = async (data:any) => {
        const storedUserData : any = await AsyncStorage.getItem("user"); 
        const parsedData = JSON.parse(storedUserData); 

        if(data.email !== parsedData.email && data.password !== parsedData.password){
            Alert.alert('email or password is wrong'); 
            return;
        }
      
        navigation.navigate("DrawerNav"); 
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={logo}
                    style={styles.img}
                />
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
                    Welcome Back !
                </Text>

                {/* form start */}
                <View style={styles.form}>

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



                    <TouchableOpacity
                        style={styles.forgotPasswordContainer}
                    // onPress={handleFormSubmit}
                    >
                        <Text
                            style={styles.forgotPasswordText}
                        >Forgot Password ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit(handleFormSubmit)}
                    >
                        {isLoading ? <ActivityIndicator size={'small'} color={'black'} /> : <Text style={styles.buttonText}>Sign In</Text>}

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

                    <TouchableOpacity
                    // onPress={() => {
                    //     navigation.navigate('Res')
                    // }}
                    >
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
                    <Text style={styles.signUpText}>Don't have an account? </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Signup")
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', paddingLeft: 5, width : 60 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Login form End */}
        </View>
    )
}



export default Login