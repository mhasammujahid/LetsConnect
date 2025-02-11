import React from 'react'
import {StyleSheet, TextStyle, ViewStyle} from 'react-native'
import {TextInput, Text} from 'react-native-paper'

interface CustomTextInputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  showToggleIcon?: boolean
  passwordVisible?: boolean
  togglePasswordVisibility?: () => void
  errorMessage?: string
  required?: boolean
  style?: ViewStyle | TextStyle
  [key: string]: any
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  showToggleIcon = false,
  passwordVisible,
  togglePasswordVisibility,
  errorMessage = '',
  required,
  style,
  ...props
}) => {
  return (
    <>
      <TextInput
        style={[styles.input, style]}
        label={`${label}${required ? '*' : ''}`}
        mode='outlined'
        outlineColor='#191A1A'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !passwordVisible}
        right={
          showToggleIcon ? (
            <TextInput.Icon
              icon={passwordVisible ? 'eye-off' : 'eye'}
              onPress={togglePasswordVisibility}
            />
          ) : null
        }
        {...props}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: -7,
    marginBottom: 5,
  },
})

export default CustomTextInput
