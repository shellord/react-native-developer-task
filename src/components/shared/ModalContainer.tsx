import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

type Props = {
  children: React.ReactNode
  style?: any
  onClose: () => void
}
const ModalContainer: React.FC<Props> = ({ children, style, onClose }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon} onPress={onClose}>
          <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>
            X
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27292D',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 24,
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
  icon: {
    height: 28,
    width: 28,
    backgroundColor: '#131319',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
})
export default ModalContainer
