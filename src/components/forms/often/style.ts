import {StyleSheet} from 'react-native';
import { Colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  title: {
    paddingVertical: 8,
  },
  quation: {
    paddingVertical: 12,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
  },
  container: {
    flexDirection: 'row',
    gap: 16,
  },
  containers: {
    gap: 8,
    paddingVertical:8,
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    gap:16,
    paddingVertical:8,
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
  buttons: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
  },
});
