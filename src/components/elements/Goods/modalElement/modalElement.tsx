import React, {FC} from 'react';
import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {styles} from './style';

type props = {
  item: string;
  setText: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  setPress:(press:boolean)=>void;
};
export const ModalElement: FC<props> = ({item, setText, style,setPress}) => {
  const onPress = () => {
    setText(item);
    setPress(false);
  };
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <Text>{item}</Text>
    </Pressable>
  );
};
