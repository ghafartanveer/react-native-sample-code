import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';
import GoBackButton from '../../components/goBackButton';

const ProductDetails = props => {
  const {
    thumbnail,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = props?.route?.params?.data;
  return (
    <View style={styles.container}>
      <GoBackButton />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />
        <ScrollView horizontal contentContainerStyle={styles.imageContainer}>
          {images?.map((image, index) => (
            <Image
              key={index}
              source={{uri: image}}
              style={styles.productImage}
            />
          ))}
        </ScrollView>
        <View style={styles.productInfo}>
          <Text style={styles.title}>Product Details</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
          <Text style={styles.discount}>{`${discountPercentage}% off`}</Text>
          <Text style={styles.rating}>{`Rating: ${rating}`}</Text>
          <Text style={styles.stock}>{`In Stock: ${stock} units`}</Text>
          <Text style={styles.brand}>{`Brand: ${brand}`}</Text>
          <Text style={styles.category}>{`Category: ${category}`}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
