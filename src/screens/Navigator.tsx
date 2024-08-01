import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './HomePage';
//import AnotherScreen from './src/screens/AnotherScreen'; // Create additional screens as needed

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#333'}, // Customize tab bar style
        }}>
        <Tab.Screen name="HomePage" component={HomePage} />
        {/* <Tab.Screen name="Another" component={AnotherScreen} /> */}
        {/* Add more tabs as needed */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
