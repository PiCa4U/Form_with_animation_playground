import React, {FC} from 'react';
import {StyleProp, TextInput, View, ViewStyle} from 'react-native';
import {styles} from './style';

type props = {
  errStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  holder: string;
  onChange: (value: string) => void;
  value: string;
};

export const AppInput: FC<props> = ({
  holder,
  style,
  value,
  onChange,
  errStyle,
}) => {
  return (
    <View style={[styles.container, style, errStyle]}>
      <TextInput placeholder={holder} onChangeText={onChange} value={value} />
    </View>
  );
};
