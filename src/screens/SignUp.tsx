import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginPage from './LoginPage';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebaseConfig';

// Email validation function
const validateEmail = (email:string): boolean => {
  // Simple regex for basic email validation
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const App = () => {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = () => {
    // Basic email and password validation
    if (!email || !password) {
      console.error('Email and password cannot be empty.');
      return; // Stop if email or password is empty
    }

    if (!validateEmail(email)) {
      console.error('Invalid email address.');
      return; // Stop if email is invalid
    }


    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log('User signed up:', user);
        // You can add additional logic here, like saving user info to Firestore
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          console.error('The email address is already in use. Please use a different email.');
          // Optionally, update UI to inform the user
        } else {
          console.error('Error signing up:', errorCode, errorMessage);
        }
        
      });
  };

  return (
    <LinearGradient colors={['#171123', '#372248']} style={{flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            padding: 20,
          }}
          keyboardShouldPersistTaps="handled">
          <View className="flex-1 justify-center p-5">
            <View className="items-center mb-5">
              <Text className="text-white text-4xl font-bold">Sign Up</Text>
            </View>

            <TextInput
              className="border-purple-300 border-2 rounded-lg p-4 mb-5 text-white"
              placeholder="Username"
              placeholderTextColor="white"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              className="border-purple-300 border-2 rounded-lg p-4 mb-5 text-white"
              placeholder="Email"
              placeholderTextColor="white"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <View className="relative flex-row items-center mb-5">
              <TextInput
                className="flex-1 border-purple-300 border-2 rounded-lg p-4 text-white"
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                className="absolute right-3"
                accessibilityLabel={
                  isPasswordVisible ? 'Hide password' : 'Show password'
                }
                accessibilityHint="Toggles visibility of password">
                <Image
                  source={
                    isPasswordVisible
                      ? require('../assets/images/hideicon.png')
                      : require('../assets/images/showicon.png')
                  }
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="bg-[#C5A1FF] rounded-lg p-4 items-center mb-5"onPress={handleSignUp}>
              <Text className="text-purple-900 text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>
            <Text className="text-white text-center mb-2 mt-8">
              Already a member?{' '}
              <Text
                className="text-blue-500"
                onPress={() => setLoginVisible(true)}>
                Login
              </Text>
            </Text>
           
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

