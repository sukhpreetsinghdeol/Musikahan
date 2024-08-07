'use client';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');
const LikeScreen = () => {
  const navigation = useNavigation();

  const handleLibraryPage = () => {
    console.log('Navigating to Library Page');
    // Navigate to LibraryPage
    navigation.navigate('Library'); // Match the route name defined in App.tsx
  };

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomIconWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search-outline" size={35} color="#AB4DBA" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={35} color="#AB4DBA" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderWidth: 1,
  },

  bottomIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
