import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '65%',
  },
  text: {
    fontSize: 18,
    color: Colors.GRAY.default,
  },
});
