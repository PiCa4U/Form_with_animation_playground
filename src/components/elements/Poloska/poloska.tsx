import React, {FC, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './style';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Circle} from './index';

type props = {
  page: number;
  setPage: (page: number) => void;
};

const arr = [1, 2, 3];

export const Poloska: FC<props> = ({page, setPage}) => {
  const progress = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  }, [progress.value]);

  useEffect(() => {
    progress.value = withTiming(page / (arr.length - 1));
  }, [page, progress]);

  return (
    <View style={styles.container}>
      <View style={styles.indicator}>
        <View style={styles.line}>
          <Animated.View style={[styles.backLine, style]} />
        </View>
        {arr.map((item, index) => (
          <Circle
            onPress={() => setPage(index)}
            item={item}
            progress={progress}
            length={3}
            index={index}
          />
        ))}
      </View>
    </View>
  );
};
