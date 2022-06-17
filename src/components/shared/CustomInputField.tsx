import { View, Text, TextInput, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

type Props = {
  label: string
  placeholder: string
  type: 'text' | 'password'
  rightText?: string
}

const CustomInputField: React.FC<Props> = ({
  label,
  placeholder,
  type,
  rightText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.rightText}>{rightText}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor='#7F8084'
        />
        {type === 'password' && (
          <View>
            <AntDesign name='eyeo' size={20} color='#7F8084' />
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#35373B',
    borderWidth: 1.5,
    borderRadius: 4,
    padding: 12,
  },
  input: {
    fontSize: 16,
    color: '#ffffff',
  },
  label: {
    fontFamily: 'Inter_500Medium',
    color: '#C5C7CA',
    fontSize: 14,
  },
  rightText: {
    fontFamily: 'Inter_500Medium',
    color: '#C5C7CA',
    fontSize: 12,
  },
})

export default CustomInputField
