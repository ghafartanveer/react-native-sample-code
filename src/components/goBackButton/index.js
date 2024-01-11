import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {IC_BACK} from '../../assets';

const GoBackButton = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}>
      <Image source={IC_BACK} style={styles.backIcon} />
    </TouchableOpacity>
  );
};

export default GoBackButton;
