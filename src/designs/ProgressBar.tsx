import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSize, spacing} from '../designs/dimensions';
import {useSharedValue} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';

const ProgressBar = () => {
  const progress = useSharedValue(0.25);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>00:01</Text>
        <Text style={styles.timeText}>{'-'}04:00</Text>
      </View>
      <Slider
        style={styles.sliderContainer}
        containerStyle={{
          height: 7,
          borderRadius: spacing.sm,
        }}
        progress={progress}
        minimumValue={min}
        maximumValue={max}
        thumbWidth={13}
        renderBubble={() => null}
      />
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  timeText: {
    color: 'white',
    fontSize: fontSize.sm,
    opacity: 0.45,
  },
  sliderContainer: {
    marginVertical: spacing.md,
  },
});
