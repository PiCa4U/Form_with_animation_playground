import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_200,
    borderRadius: 8,
    padding: 8,
  },
  activeContainer:{
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    borderWidth:2,
  },
  text: {
    color: Colors.GRAY_400,
  },
  modal: {
    position:'absolute',
    width: 209,
    height: 165,
    backgroundColor: 'white',
    top:436,
    left:160,
    borderRadius:8,
  },
});
