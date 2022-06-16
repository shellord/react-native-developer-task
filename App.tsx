import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import AuthScreen from './src/screens/AuthScreen'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_400Regular,
} from '@expo-google-fonts/inter'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export type RootStackParamList = {
  Home: { showRegister: boolean }
  Auth: undefined
}

const RootStack = createNativeStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Auth'
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name='Auth' component={AuthScreen} />
          <RootStack.Screen name='Home' component={HomeScreen} />
        </RootStack.Navigator>
        <StatusBar style='light' />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App
