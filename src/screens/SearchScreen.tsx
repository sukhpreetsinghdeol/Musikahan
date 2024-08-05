// SearchScreen.js

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import navigation hook
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const songsData = [
  {id: '1', title: 'Blinding Lights', artist: 'The Weeknd'},
  {id: '2', title: 'Watermelon Sugar', artist: 'Harry Styles'},
  {id: '3', title: 'Levitating', artist: 'Dua Lipa'},
  {id: '4', title: 'Save Your Tears', artist: 'The Weeknd'},
  {id: '5', title: 'Peaches', artist: 'Justin Bieber'},
  {id: '6', title: 'Midnight City', artist: 'M83'},
  {id: '7', title: 'Good 4 U', artist: 'Olivia Rodrigo'},
  {id: '8', title: 'Kiss Me More', artist: 'Doja Cat'},
  {id: '9', title: 'Industry Baby', artist: 'Lil Nas X'},
  {id: '10', title: 'Montero (Call Me By Your Name)', artist: 'Lil Nas X'},
];

const {width, height} = Dimensions.get('window');
const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const navigation = useNavigation(); // Use navigation hook

  const handleSearch = text => {
    setSearchTerm(text);
    const results = songsData.filter(
      song =>
        song.title.toLowerCase().includes(text.toLowerCase()) ||
        song.artist.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSongs(results);
  };

  const renderItem = ({item}) => (
    <View className="p-3 border-b border-gray-700 rounded-lg bg-gray-800 mb-2">
      <Text className="text-lg font-semibold text-white">{item.title}</Text>
      <Text className="text-sm text-gray-400">{item.artist}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <TextInput
        className="bg-gray-800 text-white rounded-lg p-3 mb-4"
        placeholder="Search for songs or artists..."
        placeholderTextColor="#B0B0B0"
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredSongs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomIconWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Ionicons name="search-outline" size={35} color="#AB4DBA" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home-outline" size={35} color="#AB4DBA" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Library')}>
            <MaterialIcons name="library-music" size={35} color="#AB4DBA" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

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
