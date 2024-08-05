import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {iconSize, fontSize, spacing} from '../designs/dimensions';
import ProgressBar from '../designs/ProgressBar';
import {
  NextButton,
  PlayPauseButton,
  PreviousButton,
} from '../designs/PlayerControls';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/725/325x325/1721817328_whh1S1CyIp_artwork.jpg';

const PlayerScreen = () => {
  const navigation = useNavigation();
  const isLiked = true;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" color={'white'} size={iconSize.lg} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>
      </View>
      {/* IMAGE */}
      <View style={styles.coverImageContainer}>
        <Image source={{uri: imageURL}} style={styles.coverImage} />
      </View>
      {/* TITLE AND ARTIST */}
      <View style={styles.heartRow}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Mortals x Royalty Mashup</Text>
          <Text style={styles.artist}>
            Egzod, Neoni, Maestro Chives, Warriyo
          </Text>
        </View>
        {/* ICON CONTAINER */}
        <TouchableOpacity>
          <AntDesign
            name={isLiked ? 'hearto' : 'heart'}
            color={'white'}
            size={iconSize.sm}
          />
        </TouchableOpacity>
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
