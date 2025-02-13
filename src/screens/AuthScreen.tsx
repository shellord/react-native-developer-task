import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native'
import Login from '../components/Login'
import Container from '../components/shared/Container'
import { useNavigation } from '@react-navigation/native'
import Logo from '../components/Logo'

const AuthScreen: React.FC = () => {
  const navigation = useNavigation()

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding'>
      <View style={styles.container}>
        <View style={{ marginBottom: 42 }}>
          <Logo />
        </View>
        <Container style={{ borderColor: '#969696', width: '100%' }}>
          <Login
            onLogin={() => {
              navigation.navigate('Home', {
                showRegister: false,
              })
            }}
            onRegister={() =>
              navigation.navigate('Home', {
                showRegister: true,
              })
            }
          />
        </Container>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
})

export default AuthScreen
