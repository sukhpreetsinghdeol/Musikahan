'use client';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { iconSize, spacing } from '../designs/dimensions';
import Songs from '../designs/Songs';
import FloatingPlayer from '../designs/FloatingPlayer';
import NavBar from '../designs/NavBar';

const LikeScreen = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuAnimation = useRef(new Animated.Value(-250)).current; // Start off-screen
  const navigation = useNavigation();

  const toggleMenu = () => {
    const toValue = isMenuVisible ? -250 : 0;

    Animated.timing(menuAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsMenuVisible(!isMenuVisible);
  };

  const handleLogOut = () => {
    console.log('Logged out');
    navigation.navigate('LoginPage');
  };

  const handleLikedSongs = () => {
    console.log('Liked Songs');
    navigation.navigate('LikeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" color={'white'} size={iconSize.lg} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu}>
          <FontAwesome5 name="grip-lines" color="white" size={iconSize.lg} />
        </TouchableOpacity>
      </View>

      {/* Sidebar Menu */}
      {isMenuVisible && (
        <Animated.View
          style={[
            styles.menu,
            { transform: [{ translateX: menuAnimation }] }
          ]}
        >
          <View style={styles.menu}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            <View style={styles.menuContent}>
              <Text style={styles.username}>Username</Text>
              <TouchableOpacity style={styles.menuItem} onPress={handleLikedSongs}>
                <FontAwesome5 name="heart" color="#FFFFFF" size={20} />
                <Text style={styles.menuItemText}>Liked Songs</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.logOutButton} onPress={handleLogOut}>
                <FontAwesome5 name="sign-out-alt" color="#FFFFFF" size={20} />
                <Text style={styles.logOutText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}

      <FlatList
        ListHeaderComponent={<Text style={styles.headingText}>Liked Songs</Text>}
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => (
          <Songs
            containerStyle={{ width: '47%' }}
            imageStyle={{
              height: 160,
              width: 160,
              borderRadius: 7,
            }}
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 300,
          paddingHorizontal: spacing.lg,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginVertical: spacing.lg,
        }}
      />
      <FloatingPlayer />
      <NavBar />
    </View>
  );
};


export default LikeScreen;

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
  headingText: {
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
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
