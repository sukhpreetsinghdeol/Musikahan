"use client"
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const recentlyPlayed = [
  { id: 1, title: 'Blinding Lights', artist: 'The Weeknd' },
  { id: 2, title: 'Watermelon Sugar', artist: 'Harry Styles' },
  { id: 3, title: 'Levitating', artist: 'Dua Lipa' },
  { id: 4, title: 'Save Your Tears', artist: 'The Weeknd' },
  { id: 5, title: 'Peaches', artist: 'Justin Bieber' },
];

const newReleases = [
  { id: 1, title: 'Midnight City', artist: 'M83' },
  { id: 2, title: 'Good 4 U', artist: 'Olivia Rodrigo' },
  { id: 3, title: 'Kiss Me More', artist: 'Doja Cat' },
  { id: 4, title: 'Industry Baby', artist: 'Lil Nas X' },
  { id: 5, title: 'Montero (Call Me By Your Name)', artist: 'Lil Nas X' },
];

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#14121F]">
      {/* Profile Picture */}
      <View className="absolute top-4 right-4">
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://example.com/profile-pic.jpg' }}
            className="w-12 h-12 rounded-full border-2 border-gray-700"
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView className="p-4">
        {/* Recently Played Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-white mb-4">Recently Played</Text>
          {recentlyPlayed.map(track => (
            <View key={track.id} className="p-3 border-b border-gray-700">
              <Text className="text-lg font-semibold text-white">{track.title}</Text>
              <Text className="text-sm text-gray-400">{track.artist}</Text>
            </View>
          ))}
        </View>

        {/* New Releases Section */}
        <View className="mb-6">
          <Text className="text-2xl font-bold text-white mb-4">New Releases</Text>
          {newReleases.map(track => (
            <View key={track.id} className="p-3 border-b border-gray-700">
              <Text className="text-lg font-semibold text-white">{track.title}</Text>
              <Text className="text-sm text-gray-400">{track.artist}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-[#14121F] p-4 flex-row justify-around">
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../assets/images/searchoff.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text className="text-[#AB4DBA] mt-1">Search</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/images/homeon.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text className="text-[#AB4DBA] mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
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

export default HomePage;
