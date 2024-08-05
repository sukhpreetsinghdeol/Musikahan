import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {iconSize, fontSize, spacing} from '../designs/dimensions';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/725/325x325/1721817328_whh1S1CyIp_artwork.jpg';

const PlayerScreen = () => {
  const isLiked = true;
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={iconSize.lg} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Songs</Text>
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
        <TouchableOpacity>
          <AntDesign
            name={isLiked ? 'hearto' : 'heart'}
            color={'white'}
            size={iconSize.sm}
          />
        </TouchableOpacity>
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
    margin: spacing.xl,
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
  titleContainer: {},
  heartRow: {},
});