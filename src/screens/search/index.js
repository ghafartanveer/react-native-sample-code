import React, {useEffect, useState, useCallback, useRef} from 'react';
import {View, Text, FlatList} from 'react-native';
import useSearchProducts from '../../store/hooks/useSearchProducts';
import EmptyListLayout from '../../components/emptyListLayout';
import ProductCard from '../../components/productCard';
import SearchInput from '../../components/searchInput';
import styles from './styles';

const Search = () => {
  const refSkip = useRef(0);
  const [skip, setSkip] = useState(0);
  const [query, onChangeText] = useState('');
  const [fetchProducts, products] = useSearchProducts();

  const delayedSearch = useCallback(() => {
    fetchProducts(refSkip.current, query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, skip, fetchProducts]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      delayedSearch();
    }, 1500);

    return () => clearTimeout(debounce);
  }, [query, delayedSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.header(query.length > 0 && products.length > 0)}>
        <Text numberOfLines={1} style={styles.title}>
          {query.length > 0 && products.length > 0
            ? `Showing results for "${query}"`
            : 'Search'}
        </Text>
      </View>
      <SearchInput
        value={query}
        onChangeText={v => {
          refSkip.current = 0;
          onChangeText(v);
        }}
      />
      <FlatList
        data={products}
        ListEmptyComponent={<EmptyListLayout />}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <ProductCard data={item} />}
        onEndReached={() => {
          setSkip(prev => {
            const newValue = prev + 10;
            refSkip.current = newValue;
            return newValue;
          });
        }}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default Search;
