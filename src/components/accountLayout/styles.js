import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  title: {
    fontSize: 24,
    color: Colors.BLACK.default,
    padding: 20,
  },
  container: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE.default_f0,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 18,
    color: Colors.BLACK.light,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
  gender: {
    fontSize: 18,
    marginBottom: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: Colors.BLUE.default,
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  logoutIcon: {
    marginRight: 10,
  },
  logoutButtonText: {
    color: Colors.WHITE.default,
    fontSize: 18,
  },
});
