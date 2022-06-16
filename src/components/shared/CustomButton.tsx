import { TouchableOpacity, StyleSheet, Text } from 'react-native'

type Props = {
  title: string
  onPress: () => void
}

const CustomButton: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A96FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter_500Medium',
    color: '#ffffff',
    paddingVertical: 12,
    fontSize: 16,
  },
})

export default CustomButton
