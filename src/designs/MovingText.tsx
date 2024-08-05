import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const MovingText = ({text, animationThreshold, style}) => {
  const translateX = useSharedValue(0);
  const shouldAnimate = text.length >= animationThreshold;
  const textWidth = text.length * 3;

  useEffect(() => {
    if (!shouldAnimate) return;
    translateX.value = widthDelay(
      1000,
      widthRepeat(
        withTiming(-textWidth, {
          duration: 5000,
          easing: Easing.linear,
        }),
        -1, // infinite animation time
        true, // should be reversed or not
      ),
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });
  return (
    <Animated.Text numberOfLines={1} style={[animatedStyle]}>
      <Text>MovingText</Text>
    </Animated.Text>
  );
};

export default MovingText;

const styles = StyleSheet.create({});
function widthDelay(arg0: number, arg1: any): number {
  throw new Error('Function not implemented.');
}

function widthRepeat(arg0: any, p0: number, p1: boolean): any {
  throw new Error('Function not implemented.');
}
