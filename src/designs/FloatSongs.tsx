import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg';

const FloatSongs = () => {
  return (
    <View>
      <Image source={{uri: imageURL}} style={styles.coverImage} />
    </View>
  );
};

export default FloatSongs;

const styles = StyleSheet.create({
  coverImage: {
    height: 40,
    width: 40,
  },
});
