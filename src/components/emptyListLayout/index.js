import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const EmptyListLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No products to show :(</Text>
    </View>
  );
};

export default EmptyListLayout;
