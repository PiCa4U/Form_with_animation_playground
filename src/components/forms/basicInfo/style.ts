import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  baseForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  buttons: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipButton: {
    backgroundColor: Colors.GRAY_200,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  nextButton: {
    backgroundColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  text: {
    color: 'white',
  },
});
