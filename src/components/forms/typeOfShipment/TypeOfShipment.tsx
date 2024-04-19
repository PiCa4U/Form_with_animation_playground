import React, { useEffect, useRef, useState } from "react";
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {styles} from './style';
import truck from '../../../icons/9024900_truck_light_icon 2.png';
import {Truck} from '../../../icons/truck';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SizeTruck} from '../../elements/SizeTruck';

const arr = ['Min', 'Half', 'Max'];

export const TypeOfShipment = () => {
  const [size, setSize] = useState(0.5);
  const progress = useSharedValue(0);
  const ref = useRef<FlatList>(null);

  const style = useAnimatedStyle(() => {
    console.log(progress.value);
    return {
      width: progress.value * 46.5,
    };
  }, [progress.value]);

  useEffect(() => {
    progress.value = withTiming(size);
  }, [size]);
  const onPress = () => {

    console.log(size);
    if (size == 0.5) {
      ref.current.scrollToIndex({animated: true, index: 1});
      setSize(prevState => prevState + 0.5);
      return;
    }
    if (size == 1) {
      ref.current.scrollToIndex({animated: true, index: 2});
      setSize(prevState => prevState + 1);
      return;
    }
    setSize(0.5);
    ref.current.scrollToIndex({animated: true, index: 0});
  };
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What size of your shipments</Text>
        <Text>multiple choise possible</Text>
        <View style={styles.car}>
          <Pressable onPress={onPress}>
            <Animated.View style={[styles.truckContainer, style]} />
            <Truck />
          </Pressable>
        </View>
        <View style={styles.flatContainer}>
          <View style={styles.flat}>
            <FlatList
              ref={ref}
              data={arr}
              renderItem={({item}) => <SizeTruck text={item} />}
              horizontal
              pagingEnabled
              keyExtractor={(item)=>String(item)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
