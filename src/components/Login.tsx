import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import CustomInputField from './shared/CustomInputField'
import CustomButton from './shared/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

type Props = {
  onLogin: () => void
  onRegister: () => void
}

const Login: React.FC<Props> = ({ onLogin, onRegister }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <View style={styles.header}>
          <Text style={styles.lightText}>WELCOME BACK</Text>
          <Text style={styles.headerText}>Log into your account</Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomInputField
            label='Email or Username'
            placeholder='Enter your email'
            type='text'
          />
          <View style={{ marginTop: 16 }} />
          <CustomInputField
            label='Password'
            placeholder='Enter your password'
            type='password'
            rightText='Forgot password?'
          />
          <View style={{ marginTop: 20 }} />
          <CustomButton title='Login now' onPress={onLogin} />
        </View>
        <TouchableOpacity style={styles.footer} onPress={onRegister}>
          <Text style={styles.lightText}>Not registered yet? </Text>
          <Text style={{ ...styles.lightText, color: '#C5C7CA' }}>
            Register
          </Text>
        </TouchableOpacity>
      </>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  lightText: {
    color: '#6B6C70',
    fontFamily: 'Inter_500Medium',
    fontSize: 14,
  },
  headerText: {
    color: '#ffffff',
    fontFamily: 'Inter_600SemiBold',
    marginTop: 8,
    fontSize: 18,
  },
  inputContainer: {
    width: '100%',
    marginTop: 34,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
})

export default Login
