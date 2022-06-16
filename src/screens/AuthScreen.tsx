import { View, StyleSheet, Platform } from 'react-native'
import Login from '../components/Login'

const AuthScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
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
