import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignUpScreen from './src/screens/SignUp';
import LoginPage from './src/screens/LoginPage';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen 
      name="SignUp" 
      component={SignUpScreen} 
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
</NavigationContainer>

  );
}

export default App;
