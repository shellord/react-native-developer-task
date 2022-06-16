import { Text, StyleSheet, Image, View } from 'react-native'
import Container from '../shared/Container'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
  name: string
  time: string
  isEdited?: boolean
  emoji: string
  message: string
  comments: number
  image: string
}

const Post: React.FC<Props> = ({
  name,
  time,
  isEdited,
  emoji,
  message,
  comments,
  image,
}) => {
  return (
    <Container>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name='dots-horizontal'
          size={20}
          color='#ffffff'
        />
      </View>
      <View style={styles.messageContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Text>{emoji}</Text>
          </View>
        </View>
        <Text style={styles.messageText}>{message}</Text>
      </View>

      <View style={styles.commentContainer}>
        <MaterialCommunityIcons
          name='message-reply-outline'
          size={20}
          color='#C5C7CA'
        />
        <Text style={styles.comments}>{comments} comments</Text>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  time: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#7F8084',
  },
  name: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#C5C7CA',
  },
  left: {
    flexDirection: 'row',
  },
  messageContainer: {
    backgroundColor: '#191920',
    flexDirection: 'row',
    paddingRight: 20,
    paddingVertical: 20,
    flex: 1,
    borderRadius: 8,
    marginTop: 20,
  },
  messageText: {
    color: '#7F8084',
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 12,
  },
  icon: {
    backgroundColor: '#27292D',
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  comments: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#7F8084',
    marginLeft: 8,
  },
})
export default Post
