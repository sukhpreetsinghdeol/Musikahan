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
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import MovingText from './MovingText';

const imageURL =
  'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg';

const FloatingPlayer = () => {
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  return (
    <View>
      <View
        style={{
          zIndex: 1,
        }}>
        <Slider
          style={styles.container}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          containerStyle={{}}
        />
      </View>
      <TouchableOpacity style={styles.container} activeOpacity={0.85}>
        <Image source={{uri: imageURL}} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          <MovingText
            text="On & On (ft. Daniel Levi)"
            animationThreshold={15}
            style={styles.title}
          />
          {/* <Text style={styles.title}>On & On (ft. Daniel Levi)</Text> */}
          <Text style={styles.artist}>Cartoon, Daniel Levi, Jéja </Text>
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
