import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import ProductDetails from '../screens/productDetails';
import AddProduct from '../screens/addProduct';

const HomeStack = createNativeStackNavigator();

export const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{headerShown: false}}>
    <HomeStack.Screen name="HomeScreen" component={Home} />
    <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
    <HomeStack.Screen name="AddProduct" component={AddProduct} />
  </HomeStack.Navigator>
);
