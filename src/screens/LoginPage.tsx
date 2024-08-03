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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const LoginPage = ({isVisible, onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleForgotPassword = () => {
    // Linking.openURL('https://example.com/forgot-password');
  };

  const handleForgotUsername = () => {
    // Linking.openURL('https://example.com/forgot-username');
  };

  const handleLogin = () => {
    // Perform authentication logic here

    if (username && password) {
      onClose(); // Close the modal
      navigation.navigate('Home'); // Navigate to HomePage
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
                  value={username}
                  onChangeText={setUsername}
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
