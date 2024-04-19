import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  firstCircle: {
    backgroundColor: Colors.GRAY_200,
    borderRadius: 18,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActive: {
    backgroundColor: 'black',
    borderRadius: 18,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.GRAY_600,
  },
  textActive: {
    color: 'white',
  },
  backLine:{
    height: 3,
    backgroundColor:'black',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: '100%',
    backgroundColor: Colors.GRAY_200,
  },
  lineActive: {
    position: 'absolute',
    height: 3,
    width: '100%',
    backgroundColor: 'black',
  },
});
