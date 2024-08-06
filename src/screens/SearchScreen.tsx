// SearchScreen.js

import React, { useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { recommendedSongs } from '../data/songs'; 
import FloatingPlayer from '../designs/FloatingPlayer';
import NavBar from '../designs/NavBar';

const { width } = Dimensions.get('window');

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSongs, setFilteredSongs] = useState(recommendedSongs);
  const navigation = useNavigation(); 

  useEffect(() => {
    
    const results = recommendedSongs.filter(
      song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        song.artist.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(results);
  }, [searchTerm]);

  const handleSearch = text => {
    setSearchTerm(text);
  };

  const handlePress = song => {
    navigation.navigate('PlayerScreen', { song }); 
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handlePress(item)}
    >
      <Image
        source={{ uri: item.artwork }}
        style={styles.artwork}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for songs or artists..."
        placeholderTextColor="#B0B0B0"
        value={searchTerm}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredSongs}
        renderItem={renderItem}
        keyExtractor={item => item.url} // Use unique URL for key extraction
      />
    
      <FloatingPlayer />
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  artwork: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
    color: '#bbb',
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderWidth: 1,
    backgroundColor: '#1e1e1e',
  },
  bottomIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default SearchScreen;


