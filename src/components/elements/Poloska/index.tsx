import React from 'react';
import {styles} from './style';
import {Pressable} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Colors} from '../../../constants/colors';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Circle = ({onPress, item, progress, length, index}) => {

  const circleStyle = useAnimatedStyle(() => {
    const black = index / (length - 1);
    console.log(black);
    return {
      backgroundColor:
        black === 0
          ? 'black'
          : interpolateColor(
              progress.value,
              [black * 0.9, black],
              [Colors.GRAY_200, '#000'],
            ),
    };
  }, [progress.value]);

  const textStyle = useAnimatedStyle(() => {
    const white = index / (length - 1);
    return {
      color:
        white === 0
          ? 'white'
          : interpolateColor(
              progress.value,
              [white * 0.9, white],
              ['black', 'white'],
            ),
    };
  }, [progress.value]);

  return (
    <AnimatedPressable
      onPress={onPress}
      style={[styles.firstCircle, circleStyle]}>
      <Animated.Text style={[styles.text, {color: 'white'}, textStyle]}>{item}</Animated.Text>
    </AnimatedPressable>
  );
};
