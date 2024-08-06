import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import MovingText from './MovingText';
import { useNavigation } from '@react-navigation/native';
import TrackPlayer, { useActiveTrack, useProgress } from 'react-native-track-player';
import { NextButton, PlayPauseButton, PreviousButton } from './PlayerControls';
import { fontSize, iconSize, spacing } from './dimensions';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg';

const FloatingPlayer = () => {
  const navigation = useNavigation();
  const progress = useSharedValue(0.2);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const isSliding = useSharedValue(false);

  const activeTrack = useActiveTrack();
  const { duration, position } = useProgress();

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  const handleOpenPlayerScreen = () => {
    navigation.navigate('PlayerScreen');
  };

  if (!activeTrack) {
    return null;
  }

  return (
    <View>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          thumbWidth={10}
          containerStyle={styles.sliderTrack}
          renderBubble={() => null}
          onSlidingStart={() => (isSliding.value = true)}
          onValueChange={async value => {
            await TrackPlayer.seekTo(value * duration);
          }}
          onSlidingComplete={async value => {
            if (!isSliding.value) {
              return;
            }
            isSliding.value = false;
            await TrackPlayer.seekTo(value * duration);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={handleOpenPlayerScreen}
      >
        <Image source={{ uri: imageURL }} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          <MovingText
            animationThreshold={15}
            style={styles.title}
            text={'On & On (ft. Daniel Levi)'}
          />
          <Text style={styles.artist}>Cartoon, Daniel Levi, Jéja</Text>
        </View>
        <View style={styles.playerControlPlayer}>
          <PreviousButton />
          <PlayPauseButton size={iconSize.lg} />
          <NextButton />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  sliderContainer: {
    zIndex: 1,
  },
  slider: {
    flex: 1,
  },
  sliderTrack: {
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverImage: {
    height: 68,
    width: 68,
    resizeMode: 'center',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
    overflow: 'hidden',
    marginLeft: spacing.sm,
    marginRight: spacing.sm,
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
