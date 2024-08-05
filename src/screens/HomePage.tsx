'use client';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {fontSize, iconSize, spacing} from '../designs/dimensions';
import Songs from '../designs/songs';
import SongCategories from '../designs/SongCategories';

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
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="bell" color={'white'} size={iconSize.lg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="grip-lines" color="white" size={iconSize.lg} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={SongCategories}
        contentContainerStyle={{paddingBottom: 300}}
      />
    </View>
  );
};

export default HomePage;

// CSS Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14121F',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
  },
});
