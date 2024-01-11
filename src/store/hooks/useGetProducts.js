import {useCallback, useState} from 'react';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {END_POINTS} from '../api';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const data = useSelector(state => state.user);

  const fetchProducts = useCallback((skip = 0) => {
    axios
      .get(`${END_POINTS.getProducts}?limit=10&skip=${skip}`, {
        headers: {
          Authorization: `Bearer ${data?.user?.token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        setProducts(prev => [...prev, ...response.data.products]);
      })
      .catch(error => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [fetchProducts, products];
};

export default useGetProducts;
