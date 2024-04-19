import React, {FC, useEffect, useState} from 'react';
import { Pressable, Text, View } from "react-native";
import {styles} from '../../forms/often/style';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type props = {
  isChoosen: boolean;
  setIsChoosen: (isChoosen: boolean) => void;
  isSecond: boolean;
  setIsSecond: (isSecond: boolean) => void;
  id: number;
  text:string;
};
export const Circle: FC<props> = ({
  isChoosen,
  setIsChoosen,
  text
}) => {
  const progress = useSharedValue(3);

  const style = useAnimatedStyle(() => {
    return {
      borderWidth: progress.value,
    };
  }, [progress.value]);

  const onPress = () => {
    setIsChoosen(prev => !prev);
  };

  useEffect(() => {
    if (isChoosen) {
      progress.value = withTiming(10);
    } else {
      progress.value = withTiming(3);
    }
  }, [ isChoosen]);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <AnimatedPressable style={[styles.circle, style]} />
      <Text>{text}</Text>
    </Pressable>
  );
};
