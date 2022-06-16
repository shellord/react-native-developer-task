import { Text, StyleSheet, View, TextInput } from 'react-native'
import Container from '../shared/Container'
import CustomButton from '../shared/CustomButton'

const CreatePost: React.FC = () => {
  return (
    <Container>
      <Text style={styles.heading}>Create Post</Text>
      <View style={styles.postInputContainer}>
        <View style={styles.icon}>
          <Text>💬</Text>
        </View>
        <TextInput
          placeholder='How are you feeling today?'
          placeholderTextColor='#7F8084'
          style={styles.postInput}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title='Post' variant='secondary' />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Inter_500Medium',
    fontSize: 18,
    color: '#C5C7CA',
  },
  buttonContainer: {
    width: 87,
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  postInputContainer: {
    backgroundColor: '#191920',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 8,
  },
  icon: {
    marginRight: 16,
    marginLeft: 20,
  },
  postInput: {
    color: 'white',
    paddingVertical: 20,
  },
})
export default CreatePost
