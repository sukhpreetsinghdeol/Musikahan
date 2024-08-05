import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withDelay,
  withRepeat,
} from 'react-native-reanimated';

const MovingText = ({text, animationThreshold, style}) => {
  const translateX = useSharedValue(0);
  const shouldAnimate = text.length >= animationThreshold;
  const textWidth = text.length * 3;

  useEffect(() => {
    if (!shouldAnimate) return;
    translateX.value = withDelay(
      1000, // after passing the 1000 millisecond, it has to go back
      withRepeat(
        withTiming(-textWidth, {
          duration: 5000,
          easing: Easing.linear,
        }),
        -1, // infinite animation time
        true, // should be reversed or not
      ),
    );
    return () => {
      translateX.value = 0; // Stop the animation when the component unmounts or shouldAnimate becomes false
    };
  }, [translateX, text, animationThreshold, textWidth]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });
  return (
    <Animated.Text
      numberOfLines={1}
      style={[
        animatedStyle,
        style,
        shouldAnimate && {width: 9999, paddingLeft: 16},
      ]}>
      {text}
    </Animated.Text>
  );
};

export default MovingText;

const styles = StyleSheet.create({});
