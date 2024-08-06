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
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <LinearGradient
          colors={['#171123', '#372248']}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}
            keyboardShouldPersistTaps="handled"
          >
            <LinearGradient
              colors={['#AB4FE4', '#FF8B8B']}
              style={{
                borderRadius: 15,
                padding: 16,
                width: '90%',
                maxWidth: 400,
                alignItems: 'center',
              }}
            >
              <View style={{ width: '100%' }}>
                <TouchableOpacity
                  style={{ alignSelf: 'flex-end' }}
                  onPress={onClose}
                >
                  <Text style={{ fontSize: 24, color: 'white' }}>×</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center', color: 'white' }}>
                  Welcome to Musikahan!
                </Text>
                <TextInput
                  style={{
                    borderColor: '#57347A',
                    borderWidth: 2,
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 16,
                    marginTop: 50,
                    color: 'white',
                    width: '100%',
                  }}
                  placeholder="Username/Email"
                  placeholderTextColor="white"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={{
                    borderColor: '#57347A',
                    borderWidth: 2,
                    borderRadius: 8,
                    padding: 12,
                    marginBottom: 16,
                    color: 'white',
                    width: '100%',
                  }}
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="white"
                  value={password}
                  onChangeText={setPassword}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 16 }}>
                  <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={{ color: 'white' }}>Forgot Password?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleForgotUsername}>
                    <Text style={{ color: 'white' }}>Forgot Username?</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#A32979',
                    borderRadius: 8,
                    padding: 12,
                    alignItems: 'center',
                    marginBottom: 16,
                    width: '100%',
                    marginTop: 30
                  }}
                  onPress={handleLogin}
                >
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>
                {errorMessage ? (
                  <Text style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</Text>
                ) : null}
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
                  New user?{' '}
                  <Text
                    style={{ color: 'blue', textDecorationLine: 'underline' }}
                    onPress={() => navigation.navigate('SignUp')} // Navigate to SignUpPage
                  >
                    Create an account.
                  </Text>
                </Text>
              </View>
            </LinearGradient>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    </Modal>
  );
};
export default LoginPage;
