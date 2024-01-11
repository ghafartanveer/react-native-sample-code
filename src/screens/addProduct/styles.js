import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.WHITE.default,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  detailsContainer: {
    marginTop: 12,
  },
  title: {
    fontSize: 20,
    marginTop: 12,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 18,
  },
  brand: {
    fontSize: 16,
  },
  category: {
    fontSize: 16,
  },
  textInput: {
    height: 40,
    marginTop: 10,
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
});
