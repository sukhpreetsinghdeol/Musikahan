'use client';
import {useNavigation} from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Animated
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { iconSize, spacing } from '../designs/dimensions';
import SongCategories from '../designs/SongCategories';
import FloatingPlayer from '../designs/FloatingPlayer';
import NavBar from '../designs/NavBar';

// const recentlyPlayed = [
//   {id: 1, title: 'Song 1', artist: 'Artist 1'},
//   {id: 2, title: 'Song 2', artist: 'Artist 2'},
// ];

// const newReleases = [
//   {id: 1, title: 'New Release 1', artist: 'Artist 1'},
//   {id: 2, title: 'New Release 2', artist: 'Artist 2'},
// ];

// const HomePage = () => {
//   const navigation = useNavigation();

//   return (
//     <View className="flex-1 bg-[#14121F]">
//       {/* Profile Picture */}
//       <View className="absolute top-4 right-4">
//         <TouchableOpacity>
//           <Image
//             source={{uri: 'https://example.com/profile-pic.jpg'}}
//             className="w-12 h-12 rounded-full border-2 border-gray-700"
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Content */}
//       <ScrollView className="p-4">
//         {/* Recently Played Section */}
//         <View className="mb-6">
//           <Text className="text-2xl font-bold text-white mb-4">
//             Recently Played
//           </Text>
//           {recentlyPlayed.map(track => (
//             <View key={track.id} className="p-3 border-b border-gray-700">
//               <Text className="text-lg font-semibold text-white">
//                 {track.title}
//               </Text>
//               <Text className="text-sm text-gray-400">{track.artist}</Text>
//             </View>
//           ))}
//         </View>

//         {/* New Releases Section */}
//         <View className="mb-6">
//           <Text className="text-2xl font-bold text-white mb-4">
//             New Releases
//           </Text>
//           {newReleases.map(track => (
//             <View key={track.id} className="p-3 border-b border-gray-700">
//               <Text className="text-lg font-semibold text-white">
//                 {track.title}
//               </Text>
//               <Text className="text-sm text-gray-400">{track.artist}</Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation Bar */}
//       <View className="absolute bottom-0 left-0 right-0 bg-[#14121F] p-4 flex-row justify-around">
//         <TouchableOpacity onPress={() => navigation.navigate('Search')}>
//           <Image
//             source={require('../assets/images/searchoff.png')}
//             style={{width: 24, height: 24}}
//           />
//           <Text className="text-[#AB4DBA] mt-1">Search</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image
//             source={require('../assets/images/homeon.png')}
//             style={{width: 24, height: 24}}
//           />
//           <Text className="text-[#AB4DBA] mt-1">Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Image
//             source={require('../assets/images/music.png')}
//             style={{width: 24, height: 24}}
//           />
//           <Text className="text-[#AB4DBA] mt-1">Library</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default HomePage;

// main function
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

     {/* Sidebar Menu */}
     {isMenuVisible && (
        <Animated.View
          style={[
            styles.menu,
            { transform: [{ translateX: menuAnimation }] }
          ]}
        >
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
        </Animated.View>
      )}

      <FlatList
        data={[1, 2, 3]} 
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