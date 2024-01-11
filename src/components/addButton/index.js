import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const AddButton = props => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.textStyle}>{props.title || 'Add Product'}</Text>
    </TouchableOpacity>
  );
};
export default AddButton;
