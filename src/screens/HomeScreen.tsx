import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import CreatePost from '../components/Post/CreatePost'
import Post from '../components/Post/Post'

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.heading}>Hello Jane</Text>
          <Text style={styles.subText}>
            How are you doing today? Would you like to share something with the
            community 🤗
          </Text>
        </View>
        <View style={styles.createPostContainer}>
          <CreatePost />
        </View>
        <View style={styles.postsContainer}>
          <Post
            name='Theresa Webb'
            time='5 mins ago'
            emoji='👋'
            message='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            comments={24}
            isEdited={false}
            image='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
          <View style={{ marginTop: 16 }} />
          <Post
            name='Theresa Webb'
            time='5 mins ago'
            emoji='👋'
            message='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            comments={24}
            isEdited={false}
            image='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
          <View style={{ marginTop: 34 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 16,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingTop: 35,
  },
  heading: {
    color: '#C5C7CA',
    fontFamily: 'Inter_500Medium',
    fontSize: 28,
  },
  subText: {
    fontFamily: 'Inter_400Regular',
    color: '#7F8084',
    fontSize: 16,
    marginTop: 12,
  },
  createPostContainer: {
    marginTop: 32,
  },
  postsContainer: {
    marginTop: 16,
    flex: 1,
  },
})
export default HomeScreen
