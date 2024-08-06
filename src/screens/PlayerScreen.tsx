import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {iconSize, fontSize, spacing} from '../designs/dimensions';
import ProgressBar from '../designs/ProgressBar';
import {
  NextButton,
  PlayPauseButton,
  PreviousButton,
} from '../designs/PlayerControls';
import {useNavigation} from '@react-navigation/native';
import TrackPlayer, {useActiveTrack} from 'react-native-track-player';
import {ActivityIndicator} from 'react-native';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/725/325x325/1721817328_whh1S1CyIp_artwork.jpg';

const PlayerScreen = () => {
  const navigation = useNavigation();
  const activeTrack = useActiveTrack();
  const handleGoBack = () => {
    navigation.goBack();
  };

  if (!activeTrack) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <ActivityIndicator size={'large'} color={'white'} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={iconSize.lg} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>
      </View>
      {/* IMAGE */}
      <View style={styles.coverImageContainer}>
        <Image source={{uri: activeTrack.artwork}} style={styles.coverImage} />
      </View>
      {/* TITLE AND ARTIST */}
      <View style={styles.heartRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{activeTrack.title}</Text>
          <Text style={styles.artist}>{activeTrack.artist}</Text>
        </View>
      </View>
      {/* PLAYER PROGRESS BAR */}
      <ProgressBar />
      <View style={styles.playPauseControl}>
        <PreviousButton size={iconSize.xxl} />
        <PlayPauseButton size={iconSize.xxl} />
        <NextButton size={iconSize.xxl} />
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14121F',
    padding: spacing.md,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    color: 'white',
    fontSize: fontSize.lg,
    textAlign: 'center',
    flex: 1,
  },
  coverImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: spacing.xxl,
    marginTop: 50,
  },
  coverImage: {
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  title: {
    fontSize: fontSize.lg,
    color: 'white',
  },
  artist: {
    fontSize: fontSize.md,
    color: 'white',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playPauseControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xl,
    marginTop: spacing.xl,
  },
});
