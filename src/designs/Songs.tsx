import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from './dimensions';
import {SongsWithCategory} from '../data/SongsWithCategory';
import {useNavigation} from '@react-navigation/native';

const Songs = ({item, containerStyle, imageStyle, handlePlay}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.containerHeader, containerStyle]}
      onPress={() => navigation.navigate('PlayerScreen', {item: item})}>
      <Image source={item.artwork} style={[styles.coverImage, imageStyle]} />
      <Text style={styles.songTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.songArtist} numberOfLines={1}>
        {item.artist}
      </Text>
    </TouchableOpacity>
  );
};

export default Songs;

const styles = StyleSheet.create({
  containerHeader: {
    height: 300,
    width: 270,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  coverImage: {
    width: 200,
    height: 200,
    borderRadius: 7,
  },
  songTitle: {
    color: 'white',
    fontSize: fontSize.md,
    textAlign: 'justify',
    paddingVertical: spacing.sm,
  },
  songArtist: {
    color: 'white',
    fontSize: fontSize.sm,
    textAlign: 'justify',
  },
});
