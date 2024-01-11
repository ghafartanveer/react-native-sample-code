import {useCallback} from 'react';
import {END_POINTS} from '../api';
import axios from 'axios';

const useAddProduct = () => {
  return useCallback(
    ({title, description, price, category, brand}, callback) => {
      axios
        .post(
          END_POINTS.addProduct,
          {
            title: title,
            description: description,
            price: price,
            brand: brand,
            category: category,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          callback();
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    [],
  );
};

export default useAddProduct;
