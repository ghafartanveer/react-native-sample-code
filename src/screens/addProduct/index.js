import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import useAddProduct from '../../store/hooks/useAddProduct';
import {useNavigation} from '@react-navigation/native';
import {addProductSchema} from '../../constants';
import {Formik} from 'formik';
import styles from './styles';
import GoBackButton from '../../components/goBackButton';
import Colors from '../../constants/Colors';
import {DUMMY_IMAGE} from '../../store/api';

const AddProduct = () => {
  const navigation = useNavigation();
  const addProduct = useAddProduct();
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={addProductSchema}
        initialValues={{
          title: '',
          description: '',
          price: 0,
          brand: '',
          category: '',
        }}
        onSubmit={values =>
          addProduct(values, () => {
            Alert.alert('Product added!');
            navigation.goBack();
          })
        }>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.header}>
              <GoBackButton title="Cancel" />
              <Text style={styles.headerTitle}>Add Product</Text>
              <Button
                color={Colors.BLUE.default}
                title="Add"
                onPress={() => handleSubmit()}
                disabled={!isValid}
              />
            </View>
            <TouchableOpacity
              onPress={() =>
                setTimeout(
                  () =>
                    Alert.alert(
                      'Image picker not ready yet. You can still add product.',
                    ),
                  250,
                )
              }>
              <Image source={{uri: DUMMY_IMAGE}} style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.title}>Product details</Text>
            <ScrollView style={styles.detailsContainer}>
              <TextInput
                name="title"
                placeholder="Title"
                placeholderTextColor={Colors.BLACK.light_7}
                style={styles.textInput}
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              {errors.title && touched.title && (
                <Text style={styles.errorText}>{errors.title}</Text>
              )}
              <TextInput
                name="description"
                placeholder="Description"
                style={styles.textInput}
                placeholderTextColor={Colors.BLACK.light_7}
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
              />
              {errors.description && touched.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
              )}

              <TextInput
                name="price"
                placeholder="Price"
                style={styles.textInput}
                placeholderTextColor={Colors.BLACK.light_7}
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price.toString()}
              />
              {errors.price && touched.price && (
                <Text style={styles.errorText}>{errors.price}</Text>
              )}

              <TextInput
                name="brand"
                placeholder="Brand"
                style={styles.textInput}
                placeholderTextColor={Colors.BLACK.light_7}
                onChangeText={handleChange('brand')}
                onBlur={handleBlur('brand')}
                value={values.brand}
              />
              {errors.brand && touched.brand && (
                <Text style={styles.errorText}>{errors.brand}</Text>
              )}

              <TextInput
                name="category"
                placeholder="Category"
                style={styles.textInput}
                placeholderTextColor={Colors.BLACK.light_7}
                onChangeText={handleChange('category')}
                onBlur={handleBlur('category')}
                value={values.category}
              />
              {errors.category && touched.category && (
                <Text style={styles.errorText}>{errors.category}</Text>
              )}
            </ScrollView>
          </>
        )}
      </Formik>
    </View>
  );
};

export default AddProduct;
