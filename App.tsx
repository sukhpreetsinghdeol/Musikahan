import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignUpScreen from './src/screens/SignUp';
import LoginPage from './src/screens/LoginPage';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomePage from './src/screens/HomePage';
import WelcomePage from './src/screens/WelcomePage';
import SearchScreen from './src/screens/SearchScreen';
import LikeScreen from './src/screens/LikeScreen';
import PlayerScreen from './src/screens/PlayerScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Search">
          <Stack.Screen name="Welcome" component={WelcomePage} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="LikeScreen" component={LikeScreen} />
          <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
