import React, {useState} from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import {styles} from './style';
import { Colors } from "../../../constants/colors";
import { ModalElement } from "../Goods/modalElement/modalElement";

const arr =['Machinery or machine spare parts','Wooden products','Food and beverages','Car spare parts ','Medical devices and supply','Sanitary products','Textiles, apparel or leather products','Construction material']
export const OtherGoods = () => {
  const [press, setPress] = useState(false);
  const [text, setText] = useState('Frequently');
  const onPress = () => {
    setPress(!press);
  };
  return (
    <View>
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
            index <= 6 ? (
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
