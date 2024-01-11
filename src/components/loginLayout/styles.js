import Colors from '../../constants/Colors';

const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE.default,
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    color: Colors.BLACK.default,
    backgroundColor: Colors.WHITE.default,
    borderColor: Colors.GRAY.default,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    fontSize: 10,
    color: Colors.RED.default,
  },
  appLogo: {
    height: 150,
    aspectRatio: 1,
    borderRadius: 10,
    marginBottom: 50,
  },
});
