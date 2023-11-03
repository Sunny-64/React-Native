import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'

import { logo } from '../../assets'
import { styles } from './style'
import { google, apple, facebook } from '../../assets'

const Login = ({ navigation }: any) => {

    const [nameOrEmail, setNameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showWrongEmailWarning, setShowWrongEmailWarning] = useState(false); 

    const ValidateEmail = (email:string) => {
        // if(nameOrEmail === '') return;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setShowWrongEmailWarning(false)
        }
        else{
            setShowWrongEmailWarning(true); 
        }
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
                    <View style={{ marginBottom: 27 }}>
                    {showWrongEmailWarning && nameOrEmail !== '' && <Text
                            style={{position : 'absolute', top : -20, marginLeft : 26, color : 'red'}}
                        >Invalid Email !!</Text>}

                        <TextInput
                            value={nameOrEmail}
                            style={[styles.input]}
                            placeholder='Name or Email'
                            onChangeText={newText => {
                                setNameOrEmail(newText)
                                ValidateEmail(newText)
                            }}
                        />

                    </View>
                    
                    <TextInput
                        value={password}
                        style={[styles.input, { marginBottom: 5 }]}
                        placeholder='Password'
                        onChangeText={newText => {
                            setPassword(newText)
                          
                        }}
                    />

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
                    <Text style={styles.signUpText}>Don't have an account </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Signup")
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'black', paddingLeft: 5 }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Login form End */}
        </View>
    )
}



export default Login