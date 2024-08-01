import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginPage from './LoginPage';

const App = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <LinearGradient
      colors={['#171123', '#372248']}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}
          keyboardShouldPersistTaps="handled"
        >
          <View className="flex-1 justify-center p-5">
            <View className="items-center mb-5">
              <Text className="text-white text-4xl font-bold">Sign Up</Text>
            </View>

            <TextInput
              className="border-purple-300 border-2 rounded-lg p-4 mb-5 text-white"
              placeholder="Username"
              placeholderTextColor="white"
            />
            <TextInput
              className="border-purple-300 border-2 rounded-lg p-4 mb-5 text-white"
              placeholder="Email"
              placeholderTextColor="white"
              keyboardType="email-address"
            />
            <View className="relative flex-row items-center mb-5">
              <TextInput
                className="flex-1 border-purple-300 border-2 rounded-lg p-4 text-white"
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                className="absolute right-3"
                accessibilityLabel={isPasswordVisible ? "Hide password" : "Show password"}
                accessibilityHint="Toggles visibility of password"
              >
                <Image
                  source={
                    isPasswordVisible
                      ? require('../assets/images/hideicon.png')
                      : require('../assets/images/showicon.png')
                  }
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="bg-[#C5A1FF] rounded-lg p-4 items-center mb-5">
              <Text className="text-purple-900 text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>
            <Text className="text-white text-center mb-2">
              Already a member?{' '}
              <Text className="text-blue-500" onPress={() => setLoginVisible(true)}>
                Login
              </Text>
            </Text>
            <Text className="text-white text-center mb-2">or</Text>
            <TouchableOpacity className="flex-row bg-[#C5A1FF] rounded-lg p-4 items-center justify-center mb-5">
              <Image
                source={require('../assets/images/facebook-icon.png')}
                className="w-6 h-6 mr-2"
              />
              <Text className="text-purple-900 text-lg ml-2">Signup with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row border-purple-300 border-2 rounded-lg p-4 items-center justify-center mb-2">
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
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default App;
