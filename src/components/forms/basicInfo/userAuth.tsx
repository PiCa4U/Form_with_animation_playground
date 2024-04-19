import React, {FC} from 'react';
import {Formik} from 'formik';
import {BasicInfoSchema, INIT_VALUES} from './scheme';
import {Text, TouchableOpacity, View} from 'react-native';
import {AppInput} from '../../elements/AppInput';
import {styles} from './style';
import {Folders} from '../../../constants/folders';
import Animated, { SlideOutLeft } from "react-native-reanimated";

type props = {
  setPage: (page: number) => void;
  page: number;
  onNext: () => void;
};
export const UserAuth: FC<props> = ({ onNext}) => {
  return (
    <Formik initialValues={INIT_VALUES} validationSchema={BasicInfoSchema}>
      {({submitForm, errors, values, handleChange}) => {
        return (
          <Animated.View existing={SlideOutLeft} style={{gap: 8}}>
            <Text>Basic Information</Text>
            <AppInput
              holder={Folders.companyName}
              onChange={handleChange('companyName')}
              value={values.companyName}
              errStyle={
                (errors.companyName && {borderColor: 'red', borderWidth: 1}) ||
                (!errors.companyName && {borderColor: 'green', borderWidth: 1})
              }
            />
            <AppInput
              holder={Folders.nit}
              onChange={handleChange('nit')}
              value={values.nit}
              errStyle={
                (errors.nit && {borderColor: 'red', borderWidth: 1}) ||
                (!errors.nit && {borderColor: 'green', borderWidth: 1})
              }
            />
            <AppInput
              holder={Folders.streetLine}
              onChange={handleChange('streetLine')}
              value={values.streetLine}
              errStyle={
                (errors.streetLine && {borderColor: 'red', borderWidth: 1}) ||
                (!errors.streetLine && {borderColor: 'green', borderWidth: 1})
              }
            />
            <AppInput
              holder={Folders.houseLine}
              onChange={handleChange('houseLine')}
              value={values.houseLine}
            />
            <View style={styles.baseForm}>
              <AppInput
                holder={Folders.postalCode}
                keyboardType={'numeric'}
                style={{flexGrow: 1, flex: 1}}
                onChange={handleChange('postalCode')}
                value={values.postalCode}
                errStyle={
                  (errors.postalCode && {borderColor: 'red', borderWidth: 1}) ||
                  (!errors.postalCode && {borderColor: 'green', borderWidth: 1})
                }
              />
              <AppInput
                holder={Folders.City}
                style={{flexGrow: 2, flex: 1}}
                onChange={handleChange('city')}
                value={values.city}
                errStyle={
                  (errors.city && {borderColor: 'red', borderWidth: 1}) ||
                  (!errors.city && {borderColor: 'green', borderWidth: 1})
                }
              />
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
