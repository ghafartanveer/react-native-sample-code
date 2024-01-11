import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, () => 'Please enter a valid username')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const addProductSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, () => 'Please enter at least 3 characters')
    .required('Title is required'),
  description: yup
    .string()
    .min(10, () => 'Please enter at least 10 characters')
    .required('Description is required'),
  price: yup
    .number()
    .positive('Price must be a positive number')
    .required('Price is required'),
  brand: yup
    .string()
    .min(3, () => 'Please enter at least 3 characters')
    .required('Brand is required'),
  category: yup
    .string()
    .min(3, () => 'Please enter at least 3 characters')
    .required('Category is required'),
});
