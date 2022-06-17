import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native'
import CreatePost from '../components/Post/CreatePost'
import Post from '../components/Post/Post'
import { BottomSheet } from 'react-native-btr'
import Login from '../components/Login'
import React from 'react'
import ModalContainer from '../components/shared/ModalContainer'
import Signup from '../components/Signup'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../App'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<Props> = ({ route }) => {
  const [showLogin, setShowLogin] = React.useState(false)
  const [showSignup, setShowSignup] = React.useState(
    route.params.showRegister ?? false
  )

  const showSignupModal = () => {
    setShowLogin(false)
    setTimeout(() => {
      setShowSignup(true)
    }, 500)
  }

  const showLoginModal = () => {
    setShowSignup(false)
    setTimeout(() => {
      setShowLogin(true)
    }, 500)
  }
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
          <CreatePost onPost={() => setShowLogin(true)} />
        </View>
        <View style={styles.postsContainer}>
          <Post
            name='Theresa Webb'
            time='5 mins ago'
            emoji='👋'
            message='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            comments={24}
            image='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
          <View style={{ marginTop: 16 }} />
          <Post
            name='Theresa Webb'
            time='5 mins ago'
            emoji='👋'
            message='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
            comments={24}
            isEdited={true}
            image='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
          />
        </View>
      </ScrollView>
      <BottomSheet
        visible={showLogin}
        onBackButtonPress={() => setShowLogin(false)}
        onBackdropPress={() => setShowLogin(false)}
      >
        <View
          style={{
            backgroundColor: '#27292D',
            height: '60%',
            borderRadius: 8,
          }}
        >
          <KeyboardAwareScrollView style={{ flex: 1 }}>
            <ModalContainer onClose={() => setShowLogin(false)}>
              <Login
                onLogin={() => setShowLogin(false)}
                onRegister={() => showSignupModal()}
              />
            </ModalContainer>
          </KeyboardAwareScrollView>
        </View>
      </BottomSheet>

      <BottomSheet
        visible={showSignup}
        onBackButtonPress={() => setShowSignup(false)}
        onBackdropPress={() => setShowSignup(false)}
      >
        <View
          style={{ backgroundColor: '#27292D', height: '70%', borderRadius: 8 }}
        >
          <KeyboardAwareScrollView style={{ flex: 1 }}>
            <ModalContainer onClose={() => setShowSignup(false)}>
              <Signup
                onLogin={() => showLoginModal()}
                onSignup={() => setShowSignup(false)}
              />
            </ModalContainer>
          </KeyboardAwareScrollView>
        </View>
      </BottomSheet>
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
    marginBottom: 50,
  },
})
export default HomeScreen
