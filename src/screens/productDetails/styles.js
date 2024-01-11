import Colors from '../../constants/Colors';

const {StyleSheet} = require('react-native');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE.default,
  },
  scrollContainer: {
    padding: 20,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  productInfo: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: Colors.BLACK.light_5,
  },
  price: {
    fontSize: 20,
    marginTop: 10,
  },
  discount: {
    fontSize: 16,
    color: 'green',
  },
  rating: {
    fontSize: 16,
    marginTop: 10,
  },
  stock: {
    fontSize: 16,
    marginTop: 10,
  },
  brand: {
    fontSize: 16,
    marginTop: 10,
  },
  category: {
    fontSize: 16,
    marginTop: 10,
  },
  imageContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
    marginEnd: 20,
  },
});
