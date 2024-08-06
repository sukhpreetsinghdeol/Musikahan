import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';//implement Firebase function
import {auth} from '../config/firebaseConfig';
import { FirebaseError } from 'firebase/app';


interface LoginPageProps{
  isVisible: boolean;
  onClose: () => void;
}
const LoginPage: React.FC<LoginPageProps> = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation<any>();

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email to reset your password.');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent. Please check your inbox.');
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unknown error occurred');
      }
    }
  };

  const handleForgotUsername = () => {
    Alert.alert('Hint', 'Usernames are typically your email address. Please try using your registered email.');
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const username = user.email; // or another method to get username

      onClose(); // Close the modal
      navigation.navigate('Home', { username }); // Pass username as parameter
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            Alert.alert('Error', 'No user found with this email. Please sign up first.');
            break;
          case 'auth/wrong-password':
            Alert.alert('Error', 'Invalid credentials. Please check your email and password.');
            break;
          case 'auth/invalid-email':
            Alert.alert('Error', 'Invalid email format. Please enter a valid email.');
            break;
          default:
            Alert.alert('Error', 'An error occurred. Please try again.');
            break;
        }
      } else {
        Alert.alert('Error', 'An unexpected error occurred. Please check your password or sign-up first.');
      }
    }
  };
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}
          keyboardShouldPersistTaps="handled">
          <LinearGradient
            colors={['#171123', '#372248']} // Background gradient colors
            style={{flex: 1, justifyContent: 'flex-end'}}>
            <LinearGradient
              colors={['#AB4FE4', '#FF8B8B']} // Modal gradient colors
              style={{
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                padding: 16,
                backgroundColor: 'transparent', // Ensure background is transparent for gradient visibility
              }}>
              <View className="bg-opacity-80 rounded-t-lg p-6">
                <TouchableOpacity className="self-end" onPress={onClose}>
                  <Text className="text-white text-lg">×</Text>
                </TouchableOpacity>
                <Text className="text-2xl font-bold mb-4 text-center text-white">
                  Welcome Back!
                </Text>
                <TextInput
                  className="border-purple-900 border-2 rounded-lg p-4 mb-5 text-white"
                  placeholder="Username/Email"
                  placeholderTextColor="white"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  className="border-purple-900 border-2 rounded-lg p-4 mb-5 text-white"
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="white"
                  value={password}
                  onChangeText={setPassword}
                />
                <View className="flex-row justify-between mb-5">
                  <TouchableOpacity onPress={handleForgotPassword}>
                    <Text className="text-white">Forgot Password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleForgotUsername}>
                    <Text className="text-white">Forgot Username?</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  className="bg-[#A32979] rounded-lg p-4 mb-5 items-center"
                  onPress={handleLogin}>
                  <Text className="text-gray-200 text-lg font-bold">Login</Text>
                </TouchableOpacity>
                {errorMessage ? (
                <Text className="text-red-500 text-center">{errorMessage}</Text>
              ) : null}
                <View className="my-4 items-center">
                  <Text className="text-white text-lg">or</Text>
                </View>
                <TouchableOpacity className="flex-row bg-[#A32979] rounded-lg p-4 items-center justify-center mb-5">
                  <Image
                    source={require('../assets/images/facebook-icon.png')}
                    className="w-6 h-6 mr-2"
                  />
                  <Text className="text-gray-200 text-lg ml-2">
                    Login with Facebook
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row border-purple-900 border-2 rounded-lg p-4 items-center justify-center mb-2">
                  <Image
                    source={require('../assets/images/google-icon.png')}
                    className="w-6 h-6 mr-2"
                  />
                  <Text className="text-purple-900 text-lg ml-2">
                    Login with Google
                  </Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </LinearGradient>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default LoginPage;
