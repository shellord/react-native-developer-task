import { View, Text, StyleSheet } from 'react-native'

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
})
export default HomeScreen
