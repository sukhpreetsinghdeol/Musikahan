import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';
import Slider from '@react-native-community/slider';
import songs from '../model/Data';
import {play} from 'react-native-track-player/lib/src/trackPlayer';

const {width, height} = Dimensions.get('window');

const isPlayerInitialized = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(songs);
  } catch (e) {
    console.error(e);
  }
};

const togglePlayback = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack != null) {
    if (playBackState == State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

const MusicPlayer = () => {
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const [songIndex, setsongIndex] = useState(0);

  // custom references
  const scrollX = useRef(new Animated.Value(0)).current;
  const songSlider = useRef(null); //FlatList reference

  // changing the track
  // useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
  //   if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
  //     const track = await TrackPlayer.getTrack(event.nextTrack);
  //   }
  // });

  const skipTo = async (trackId: number) => {
    await TrackPlayer.skip(trackId);
  };

  useEffect(() => {
    isPlayerInitialized();
    scrollX.addListener(({value}) => {
      // console.log(`ScrollX : ${value} | Device Width : ${width}`);
      const index = Math.round(value / width);
      skipTo(index);
      setsongIndex(index);
      // console.log(index);
    });
  }, []);

  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };

  const skipToPrevious = () => {
    songSlider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderSongs = ({item, index}) => {
    return (
      <Animated.View style={style.mainImageWrapper}>
        <View style={[style.imageWrapper, style.elevation]}>
          <Image source={item.artwork} style={style.musicImage} />
        </View>
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        {/*image */}
        <Animated.FlatList
          ref={songSlider}
          renderItem={renderSongs}
          data={songs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />

        {/*song content */}
        <View>
          <Text style={[style.songContent, style.songTitle]}>
            {songs[songIndex].title}
          </Text>
          <Text style={[style.songContent, style.songArtist]}>
            {songs[songIndex].artist}
          </Text>
        </View>

        {/*slider */}
        <View>
          <Slider
            style={style.progressBar}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#6156E2"
            minimumTrackTintColor="#6156E2"
            maximumTrackTintColor="#fff"
            onSlidingComplete={async value => {
              await TrackPlayer.seekTo(value);
            }}
          />

          {/*music duration */}
          <View style={style.progressDuration}>
            <Text style={style.progressLabelText}>
              {new Date(progress.position * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
            <Text style={style.progressLabelText}>
              {new Date((progress.duration - progress.position) * 1000)
                .toLocaleTimeString()
                .substring(3)}
            </Text>
          </View>
        </View>

        {/*music controls */}
        <View style={style.musicControlContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="shuffle" size={33} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={skipToPrevious}>
            <Ionicons name="play-skip-back-outline" size={37} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => togglePlayback(playBackState)}>
            <Ionicons
              name={
                playBackState === State.Playing
                  ? 'pause-circle-sharp'
                  : 'play-circle-sharp'
              }
              size={78}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={skipToNext}>
            <Ionicons name="play-skip-forward-outline" size={37} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat-outline" size={33} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.bottomContainer}>
        <View style={style.bottomIconWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="search-outline" size={35} color="#AB4DBA" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="home-outline" size={35} color="#AB4DBA" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <MaterialIcons name="library-music" size={35} color="#AB4DBA" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MusicPlayer;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14121F',
  },

  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderWidth: 1,
  },

  bottomIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },

  mainImageWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageWrapper: {
    width: 300,
    height: 300,
    marginTop: 66,
  },

  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },

  elevation: {
    elevation: 5,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.48,
  },

  songContent: {
    textAlign: 'center',
    color: '#EEEEEE',
  },

  songTitle: {
    fontSize: 19,
    fontWeight: '600',
  },

  songArtist: {
    fontSize: 17,
    fontWeight: '300',
  },

  progressBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },

  progressDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  progressLabelText: {
    color: '#fff',
    fontWeight: '500',
  },

  musicControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '87%',
    marginTop: 15,
    marginBottom: 40,
  },
});
