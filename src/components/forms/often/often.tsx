import React, { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {styles} from './style';
import {Circle} from '../../elements/Circle';
import {AppInput} from '../../elements/AppInput';
import {Formik} from 'formik';
import {OTHER_INIT_VALUES, OftenSchema} from './scheme';
import { Goods } from "../../elements/Goods";
import { OtherGoods } from "../../elements/OtherGoods";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

type props = {
  onNext: () => void;
};

const Options = ['month']
export const Often:FC<props> = ({onNext}) => {
  const [isChoosen, setIsChoosen] = useState(true);
  return (
    <Formik initialValues={OTHER_INIT_VALUES} validationSchema={OftenSchema}>
      {({submitForm, values, handleChange}) => {
        return (
          <Animated.View  existing={SlideOutLeft} entering={SlideInRight}>
            <Text style={styles.title}>How often do you ship?</Text>
            <View style={styles.containers}>
              <Circle
                isChoosen={isChoosen}
                setIsChoosen={setIsChoosen}
                text={'I only have one shipment'}
                id={1}
              />
              <Circle
                isChoosen={!isChoosen}
                setIsChoosen={setIsChoosen}
                text={'I ship frenquently'}
                id={2}
              />
            </View>
            <View style={styles.miniContainer}>
              <AppInput
                style={{flexGrow: 1, flex: 2}}
                holder={'Amount*'}
                onChange={handleChange('amount')}
                value={values.amount}
              />
              <Goods style={{flexGrow:2,flex:1}}/>
            </View>
            <Text>What goods are you planning to ship?</Text>
            <View style={styles.containers}>
              <OtherGoods/>
              <AppInput holder={'Other goods (optional)'} onChange={handleChange('otherGoods')} value={values.otherGoods}/>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.skipButton} onPress={onNext}>
                <Text>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={(submitForm, onNext)}>
                <Text style={styles.text}>Next</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        );
      }}
    </Formik>
  );
};
