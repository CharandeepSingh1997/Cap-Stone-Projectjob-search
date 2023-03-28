import React from 'react';
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home';
import Profile from './src/screens/profile';
import SignUpScreen from './src/screens/signup';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <Stack.Screen name="Signup" component={SignUpScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};

LogBox.ignoreAllLogs();

export default App;
