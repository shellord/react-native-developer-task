import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import CustomInputField from './shared/CustomInputField'
import CustomButton from './shared/CustomButton'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type Props = {
  onLogin: () => void
  onSignup: () => void
}

const Signup: React.FC<Props> = ({ onLogin, onSignup }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAwareScrollView style={styles.inputContainer} extraHeight={100}>
        <View style={styles.header}>
          <Text style={styles.lightText}>SIGN UP</Text>
          <Text style={styles.headerText}>Create an account to continue</Text>
        </View>

        <ScrollView>
          <CustomInputField
            label='Email '
            placeholder='Enter your email'
            type='text'
          />
          <View style={{ marginTop: 16 }} />
          <CustomInputField
            label='Username'
            placeholder='Choose a preferred username'
            type='text'
          />
          <View style={{ marginTop: 16 }} />
          <CustomInputField
            label='Password'
            placeholder='Enter your password'
            type='password'
          />
          <View style={{ marginTop: 20 }} />
          <CustomButton title='Continue' onPress={onSignup} />

          <TouchableOpacity style={styles.footer} onPress={onLogin}>
            <Text style={styles.lightText}>Already have an account?</Text>
            <Text style={{ ...styles.lightText, color: '#C5C7CA' }}>
              Login →
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAwareScrollView>
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
    height: '100%',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
})

export default Signup
