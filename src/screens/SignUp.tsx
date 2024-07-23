import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import LoginPage from './LoginPage';

const App = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);

  return (
    <View className="flex-1 bg-gray-900 p-5 justify-center">
      <Text className="text-white text-4xl font-bold mb-5">Sign Up</Text>
      <TextInput
        className="bg-gray-800 rounded-lg p-4 mb-5 text-white"
        placeholder="Username"
        placeholderTextColor="#888"
      />
      <TextInput
        className="bg-gray-800 rounded-lg p-4 mb-5 text-white"
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
      />
      <View className="flex-row items-center mb-5">
        <TextInput
          className="flex-1 bg-gray-800 rounded-lg p-4 text-white"
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
        />
        <TouchableOpacity className="ml-[-40px]">
          <Text className="text-gray-500">Show</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="bg-purple-700 rounded-lg p-4 items-center mb-5">
        <Text className="text-white text-lg font-bold">Sign Up</Text>
      </TouchableOpacity>
      <Text className="text-gray-500 text-center mb-2">
        Already a member?{' '}
        <Text className="text-purple-700" onPress={() => setLoginVisible(true)}>
          Login
        </Text>
      </Text>
      <Text className="text-gray-500 text-center mb-2">or</Text>
      <TouchableOpacity className="flex-row bg-blue-700 rounded-lg p-4 items-center justify-center mb-2">
        <Image
          source={require('../assets/images/facebook-icon.png')}
          className="w-6 h-6 mr-2"
        />
        <Text className="text-white text-lg ml-2">Signup with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row bg-red-700 rounded-lg p-4 items-center justify-center mb-2">
      <Image
          source={require('../assets/images/google-icon.png')}
          className="w-6 h-6 mr-2"
        />
        <Text className="text-white text-lg ml-2">Signup with Google</Text>
      </TouchableOpacity>

      <LoginPage
        isVisible={isLoginVisible}
        onClose={() => setLoginVisible(false)}
      />
    </View>
  );
};

export default App;
