import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.BLUE.default,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.WHITE.default,
    fontWeight: '600',
  },
});
