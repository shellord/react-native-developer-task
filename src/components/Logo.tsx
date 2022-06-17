import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Logo: React.FC = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Entypo name='circle' size={20} color='white' />
        <Entypo name='cross' size={32} color='white' />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ transform: [{ rotate: '90deg' }] }}>
          <MaterialCommunityIcons
            name='triangle-outline'
            size={24}
            color='white'
          />
        </View>
        <MaterialCommunityIcons name='square-outline' size={24} color='white' />
      </View>
    </View>
  )
}

export default Logo
