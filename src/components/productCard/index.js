import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ProductCard = props => {
  const navigation = useNavigation();
  const {thumbnail, price, title, discountPercentage} = props?.data;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetails', {data: props?.data})}
      style={styles.cardContainer}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <View style={styles.productInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Text style={styles.discount}>{`${discountPercentage}% off`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
