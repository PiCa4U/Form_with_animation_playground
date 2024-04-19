import React, {FC, useState} from 'react';
import {
  Modal,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './style';
import {Colors} from '../../../constants/colors';
import {ModalElement} from './modalElement/modalElement';

const arr = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

type props = {
  style?: StyleProp<ViewStyle>;
};
export const Goods: FC<props> = ({style}) => {
  const [press, setPress] = useState(false);
  const [text, setText] = useState('Frequently');
  const onPress = () => {
    setPress(!press);
  };
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
      <Modal visible={press} animationType={'fade'} transparent>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: Colors.GRAY_200, opacity: 0.5},
          ]}
        />
        <View style={styles.modal}>
          {arr.map((item, index) =>
            index <= 2 ? (
              <ModalElement
                item={item}
                setText={setText}
                setPress={setPress}
                style={{borderBottomWidth: 1}}
              />
            ) : (
              <ModalElement item={item} setText={setText} setPress={setPress} />
            ),
          )}
        </View>
      </Modal>
    </View>
  );
};
