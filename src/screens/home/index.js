import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import ProductCard from '../../components/productCard';
import styles from './styles';
import AddButton from '../../components/addButton';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import useGetProducts from '../../store/hooks/useGetProducts';
import EmptyListLayout from '../../components/emptyListLayout';

const Home = () => {
  const navigation = useNavigation();
  const data = useSelector(state => state.user);

  const [skip, setSkip] = useState(0);
  const [fetchProducts, products] = useGetProducts();

  useEffect(() => {
    fetchProducts(skip);
  }, [fetchProducts, skip]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        {data.user !== null && (
          <AddButton onPress={() => navigation.navigate('AddProduct')} />
        )}
      </View>
      <FlatList
        data={products}
        ListEmptyComponent={<EmptyListLayout />}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ProductCard data={item} />}
        onEndReached={() => setSkip(prev => prev + 10)}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
};

export default Home;
