import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {iconSize} from './dimensions';

export const PreviousButton = ({size = iconSize.lg}) => {
  return (
    <TouchableOpacity>
      <Ionicons name="play-skip-back-outline" size={size} color="white" />
    </TouchableOpacity>
  );
};

export const PlayPauseButton = ({size = iconSize.lg}) => {
  return (
    <TouchableOpacity>
      <AntDesign name={'pausecircleo'} size={size} color="white" />
    </TouchableOpacity>
  );
};

export const NextButton = ({size = iconSize.lg}) => {
  return (
    <TouchableOpacity>
      <Ionicons name="play-skip-forward-outline" size={size} color="white" />
    </TouchableOpacity>
  );
};
