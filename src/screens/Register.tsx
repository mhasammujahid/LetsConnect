import React, {useState} from 'react'
import {View, Text, Image, Button, StyleSheet} from 'react-native'
import {useDispatch} from 'react-redux'

import {TextInput} from 'react-native-paper'
import CustomTextInput from '../components/CustomTextInput'

import {signUp} from '../setup/redux/Actions/Users/users'

const Register = () => {
  const dispatch = useDispatch()

  const [user, setUser] = useState({fullName: '', email: '', password: ''})
  const [error, setError] = useState({fullName: '', email: '', password: ''})
  const [passwordVisible, setPasswordVisible] = useState(false)

  const validateFullName = (fullName: string) => {
    if (fullName === '') {
      setError({...error, fullName: 'Full name is required.'})
    } else {
      setError({...error, fullName: ''})
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email === '') {
      setError({...error, email: 'Email is required.'})
    } else if (!emailRegex.test(email)) {
      setError({...error, email: 'Invalid email format.'})
    } else {
      setError({...error, email: ''})
    }
  }

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
    if (password === '') {
      setError({...error, password: 'Password is required.'})
    } else if (!passwordRegex.test(password)) {
      setError({
        ...error,
        password:
          'Password must be at least 8 characters long, contain at least one uppercase letter, one digit, and one special character.',
      })
    } else {
      setError({...error, password: ''})
    }
  }

  const handleSubmit = () => {
    if (error.fullName || error.email || error.password) return

    const onSuccess = (res: any) => {
      console.warn({res})
    }
    const onFailure = (err: any) => {
      console.warn({err})
    }

    dispatch(
      signUp(
        {name: user.fullName, email: user.email, password: user.password},
        onSuccess,
        onFailure
      )
    )
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
        <Image
          style={styles.registration_process}
          source={require('../assets/images/registration_process.png')}
        />
      </View>
      <Text style={styles.personal_information}>Personal Information</Text>
      <CustomTextInput
        style={styles.full_name}
        label='Full Name'
        mode='flat'
        outlineColor='#191A1A'
        value={user.fullName}
        onBlur={() => validateFullName(user.fullName)}
        onChangeText={(fullName) => {
          setUser({...user, fullName})
        }}
        errorMessage={error.fullName}
        required={true}
      />
      <CustomTextInput
        style={styles.email_password}
        label='Email'
        mode='flat'
        outlineColor='#191A1A'
        value={user.email}
        onBlur={() => validateEmail(user.email)}
        onChangeText={(email) => {
          setUser({...user, email})
        }}
        errorMessage={error.email ?? ''}
        required={true}
      />
      <CustomTextInput
        style={styles.email_password}
        label='Password'
        mode='flat'
        outlineColor='#191A1A'
        secureTextEntry={!passwordVisible}
        right={
          <TextInput.Icon
            icon={passwordVisible ? 'eye-off' : 'eye'}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
        value={user.password}
        onBlur={() => validatePassword(user.password)}
        onChangeText={(password) => {
          setUser({...user, password})
        }}
        errorMessage={error.password}
        required={true}
      />
      {/* <TextInput
        style={styles.button}
        label="Phone number"
        mode="outlined"
        keyboardType="phone-pad"
        outlineColor="#191A1A"
      />
      <TextInput
        style={styles.button}
        label="Address"
        mode="outlined"
        keyboardType="phone-pad"
        outlineColor="#191A1A"
      /> */}
      <View style={styles.submit_button}>
        <Button
          title='Register'
          color='#191A1A'
          onPress={handleSubmit}
          disabled={!!error.fullName || !!error.email || !!error.password}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingLeft: 7,
    paddingRight: 7,
  },
  registration_process: {
    resizeMode: 'contain',
  },
  personal_information: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#191A1A',
    marginTop: 30,
    textAlign: 'center',
  },
  full_name: {
    marginTop: 25,
    color: '#191A1A',
  },
  email_password: {
    marginTop: 7,
    color: '#191A1A',
  },
  submit_button: {
    marginTop: 340,
    borderRadius: 5,
  },
})

export default Register
