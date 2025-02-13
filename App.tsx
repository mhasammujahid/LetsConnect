/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LandingPage from './src/screens/LandingPage';
import Register from './src/screens/Register';
import Login from './src/screens/Login';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
