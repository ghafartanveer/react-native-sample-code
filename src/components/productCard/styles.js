import Colors from '../../constants/Colors';

const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.WHITE.default_cc,
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  discount: {
    fontSize: 16,
    color: Colors.GREEN.default,
  },
});
