import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const LoginPage = ({isVisible, onClose}) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}>
        <View className="flex-1 justify-end bg-black bg-opacity-50">
          <View className="bg-gray-900 rounded-t-lg p-6">
            <TouchableOpacity className="self-end" onPress={onClose}>
              <Text className="text-white text-lg">×</Text>
            </TouchableOpacity>
            <Text className="text-2xl font-bold mb-4 text-center text-white">
              Welcome Back!
            </Text>
            <TextInput
              className="bg-gray-800 rounded-lg p-4 mb-5 text-white"
              placeholder="Username/Email"
              placeholderTextColor="#888"
            />
            <TextInput
              className="bg-gray-800 rounded-lg p-4 mb-5 text-white"
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#888"
            />
            <TouchableOpacity className="mb-5">
              <Text className="text-blue-500">
                Forgot Password / Forgot Username
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-purple-700 rounded-lg p-4 mb-5 items-center">
              <Text className="text-white text-lg font-bold">Login</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginPage;
