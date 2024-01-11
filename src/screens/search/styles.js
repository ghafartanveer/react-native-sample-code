import Colors from '../../constants/Colors';

const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.WHITE.default,
  },
  title: {
    fontSize: 24,
    color: Colors.BLACK.default,
  },
  header: flag => ({
    height: 60,
    justifyContent: 'center',
    alignItems: flag ? 'flex-start' : 'center',
  }),
});
