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

export type RootStackParamList = {
  Home: undefined
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
  )
}

export default App
