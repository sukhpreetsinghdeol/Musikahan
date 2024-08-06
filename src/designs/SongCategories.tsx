import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {spacing} from './dimensions';
import Songs from './Songs';
import TrackPlayer from 'react-native-track-player';

const SongCategories = ({item}) => {
  // function for song queue
  const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
    // make a queue and play the song
    const trackIndex = songs.findIndex(
      track => track.url === selectedTrack.url,
    );
    // if track doesn't exists
    if (trackIndex === -1) {
      return;
    }
    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);

    await TrackPlayer.reset();

    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);

    await TrackPlayer.play();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{item.title}</Text>
      <FlatList
        data={item.songs}
        renderItem={({item}) => (
          <Songs
            item={item}
            handlePlay={selectedTrack => {
              handlePlayTrack(selectedTrack);
            }}
          />
        )}
        horizontal={true}
        ItemSeparatorComponent={<View style={{marginHorizontal: -25}} />}
        contentContainerStyle={{
          paddingHorizontal: spacing.sm,
          paddingVertical: spacing.sm,
        }}
      />
    </View>
  );
};

export default SongCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    paddingHorizontal: spacing.lg,
    // marginTop: spacing.xl,
  },
});
