import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from './dimensions';

// cover images
const imageUrl =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/568/100x100/godslayer-1700528454-rTWxGyR4Bq.jpg';

const Songs = () => {
  return (
    <TouchableOpacity style={styles.containerHeader}>
      <Image source={{uri: imageUrl}} style={styles.coverImage} />
      <Text style={styles.songTitle}>Sold Dreams</Text>
      <Text style={styles.songArtist}>1$K1</Text>
    </TouchableOpacity>
  );
};

export default Songs;

const styles = StyleSheet.create({
  containerHeader: {
    height: 270,
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
