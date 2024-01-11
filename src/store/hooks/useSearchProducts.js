import {useCallback, useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {END_POINTS} from '../api';

const useSearchProducts = () => {
  const [products, setProducts] = useState([]);
  const data = useSelector(state => state.user);

  const fetchProducts = useCallback((skip = 0, query = '') => {
    axios
      .get(`${END_POINTS.searchProducts}?limit=10&skip=${skip}&q=${query}`, {
        headers: {
          Authorization: `Bearer ${data?.user?.token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (skip === 0) {
          setProducts(() => response.data.products);
        } else {
          setProducts(prev => [...prev, ...response.data.products]);
        }
      })
      .catch(error => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fetchProducts, products];
};

export default useSearchProducts;
