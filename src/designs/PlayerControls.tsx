import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { iconSize } from './dimensions';
import TrackPlayer, { useIsPlaying } from "react-native-track-player";

export const PreviousButton = ({ size = iconSize.lg }) => {
  const handleGoToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={handleGoToPrevious}>
      <Ionicons name="play-skip-back-outline" size={size} color="white" />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = ({ size = iconSize.lg }) => {
  const isPlaying = useIsPlaying(); // Get the actual playing state from the hook

  const handleTogglePlay = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={handleTogglePlay}>
      <AntDesign
        name={isPlaying ? 'pausecircleo' : 'playcircleo'}
        size={size}
        color="white"
      />
    </TouchableOpacity>
  );
};

export const NextButton = ({ size = iconSize.lg }) => {
  const handleGoToNextSong = async () => {
    await TrackPlayer.skipToNext();
  };

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={handleGoToNextSong}>
      <Ionicons name="play-skip-forward-outline" size={size} color="white" />
    </TouchableOpacity>
  );
};
