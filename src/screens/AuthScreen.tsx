import { View, Text, StyleSheet } from 'react-native'

const AuthScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Auth</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AuthScreen
