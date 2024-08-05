import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {fontSize, iconSize, spacing} from './dimensions';
import {NextButton, PlayPauseButton, PreviousButton} from './PlayerControls';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg';

const FloatingPlayer = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85}>
      <Image source={{uri: imageURL}} style={styles.coverImage} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>On & On (ft. Daniel Levi)</Text>
        <Text style={styles.artist}>Cartoon, Daniel Levi, Jéja </Text>
      </View>
      <View style={styles.playerControlPlayer}>
        <PreviousButton />
        <PlayPauseButton size={iconSize.lg} />
        <NextButton />
      </View>
    </TouchableOpacity>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverImage: {
    height: 68,
    width: 68,
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  title: {
    color: 'white',
    fontSize: fontSize.md,
  },
  artist: {
    color: 'white',
    fontSize: fontSize.sm,
  },
  playerControlPlayer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    paddingRight: spacing.sm,
  },
});
