'use client';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { iconSize, spacing } from '../designs/dimensions';
import SongCategories from '../designs/SongCategories';
import FloatingPlayer from '../designs/FloatingPlayer';
import NavBar from '../designs/NavBar';
import { SongsWithCategory } from '../data/SongsWithCategory';

const HomePage = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuAnimation = useRef(new Animated.Value(-200)).current;
  const navigation = useNavigation();

  const toggleMenu = () => {
    const toValue = isMenuVisible ? -200 : 0;
    Animated.timing(menuAnimation, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogOut = () => {
    console.log('Logged out');
    // Navigate to LoginPage
    navigation.navigate('SignUp');
  };

  const handleLikedSongs = () => {
    console.log('Liked Songs');
    // Navigate to LikeScreen
    navigation.navigate('LikeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="bell" color={'white'} size={iconSize.lg} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu}>
          <FontAwesome5 name="grip-lines" color="white" size={iconSize.lg} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.headingTextContainer}>
          Discover more with Musikahan
        </Text>
      </View>

      {/* Sidebar Menu */}
      {isMenuVisible && (
        <Animated.View
          style={[styles.menu, { transform: [{ translateX: menuAnimation }] }]}
        >
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <View style={styles.menuContent}>
            <Text style={styles.username}>Username</Text>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={handleLikedSongs}
            >
              <FontAwesome5 name="heart" color="#FFFFFF" size={20} />
              <Text style={styles.menuItemText}>Liked Songs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.logOutButton}
              onPress={handleLogOut}
            >
              <FontAwesome5 name="sign-out-alt" color="#FFFFFF" size={20} />
              <Text style={styles.logOutText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}

      <FlatList
        data={SongsWithCategory}
        renderItem={SongCategories}
        contentContainerStyle={{ paddingBottom: 300 }}
      />
      <FloatingPlayer />
      <NavBar />
    </View>
  );
};

export default HomePage;

// CSS Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14121F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headingTextContainer: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#2C2C2C',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    padding: 15,
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    zIndex: 1000,
  },
  menuContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  username: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  menuItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#3E3E3E',
    elevation: 2,
  },
  menuItemText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 16,
  },
  logOutButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#A32979',
    elevation: 2,
  },
  logOutText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#3E3E3E',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
