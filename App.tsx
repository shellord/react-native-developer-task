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
} from '@expo-google-fonts/inter'

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen
          name='Auth'
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
  )
}

export default App
