// SearchScreen.js

import React, { useState } from 'react';
import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const songsData = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd' },
  { id: '2', title: 'Watermelon Sugar', artist: 'Harry Styles' },
  { id: '3', title: 'Levitating', artist: 'Dua Lipa' },
  { id: '4', title: 'Save Your Tears', artist: 'The Weeknd' },
  { id: '5', title: 'Peaches', artist: 'Justin Bieber' },
  { id: '6', title: 'Midnight City', artist: 'M83' },
  { id: '7', title: 'Good 4 U', artist: 'Olivia Rodrigo' },
  { id: '8', title: 'Kiss Me More', artist: 'Doja Cat' },
  { id: '9', title: 'Industry Baby', artist: 'Lil Nas X' },
  { id: '10', title: 'Montero (Call Me By Your Name)', artist: 'Lil Nas X' },
];

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);
  const navigation = useNavigation(); // Use navigation hook

  const handleSearch = (text) => {
    setSearchTerm(text);
    const results = songsData.filter(song =>
      song.title.toLowerCase().includes(text.toLowerCase()) ||
      song.artist.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredSongs(results);
  };

  const renderItem = ({ item }) => (
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
      <View className="absolute bottom-0 left-0 right-0 bg-[#14121F] p-4 flex-row justify-around">
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../assets/images/searchoff.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text className="text-[#AB4DBA] mt-1">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/images/homeon.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text className="text-[#AB4DBA] mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Library')}>
          <Image
            source={require('../assets/images/music.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text className="text-[#AB4DBA] mt-1">Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;
