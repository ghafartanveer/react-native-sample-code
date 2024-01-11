import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  searchIcon: {
    height: 20,
    width: 20,
    tintColor: Colors.BLACK.light_7,
  },
  inputCotainer: {
    flex: 1,
    height: 40,
    backgroundColor: Colors.WHITE.default,
    borderColor: Colors.GRAY.default,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingStart: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    height: 40,
    color: Colors.BLACK.default,
    paddingHorizontal: 10,
  },
});
