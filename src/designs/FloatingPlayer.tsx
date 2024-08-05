import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {fontSize} from './dimensions';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg';

const FloatingPlayer = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageURL}} style={styles.coverImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>On & On (feat. Daniel Levi)</Text>
        <Text style={styles.artist}> Cartoon, Daniel Levi, Jéja </Text>
      </View>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  coverImage: {
    height: 70,
    width: 70,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: fontSize.md,
  },
  artist: {
    color: 'white',
    fontSize: fontSize.sm,
  },
});
