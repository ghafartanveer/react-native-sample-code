import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.WHITE.default,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: Colors.BLACK.default,
  },
});
