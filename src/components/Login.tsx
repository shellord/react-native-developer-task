import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import CustomInputField from './shared/CustomInputField'
import CustomButton from './shared/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Container from './shared/Container'

const Login: React.FC = () => {
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container style={{ borderColor: '#969696' }}>
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
          <CustomButton
            title='Login now'
            onPress={() => {
              navigation.navigate('Home')
            }}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.lightText}>Not registered yet? </Text>
          <Text style={{ ...styles.lightText, color: '#C5C7CA' }}>
            Register
          </Text>
        </View>
      </Container>
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
