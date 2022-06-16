import { TouchableOpacity, StyleSheet, Text } from 'react-native'

type Props = {
  title: string
  onPress?: () => void
  variant?: 'primary' | 'secondary'
}

const CustomButton: React.FC<Props> = ({ title, onPress, variant }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text
        style={
          variant === 'primary'
            ? styles.primaryButtonText
            : styles.secondaryButtonText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A96FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  primaryButtonText: {
    fontFamily: 'Inter_500Medium',
    color: '#ffffff',
    fontSize: 16,
    paddingVertical: 12,
  },
  secondaryButtonText: {
    fontFamily: 'Inter_500Medium',
    color: '#ffffff',
    fontSize: 14,
    paddingVertical: 10,
  },
})

export default CustomButton
