import { View, StyleSheet } from 'react-native'

type Props = {
  children: React.ReactNode
  style?: any
}
const Container: React.FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27292D',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderColor: '#35373B',
  },
})
export default Container
