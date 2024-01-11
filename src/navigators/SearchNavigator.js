import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetails from '../screens/productDetails';
import Search from '../screens/search';

const SearchStack = createNativeStackNavigator();

export const SearchStackNavigator = () => (
  <SearchStack.Navigator screenOptions={{headerShown: false}}>
    <SearchStack.Screen name="SearchScreen" component={Search} />
    <SearchStack.Screen name="ProductDetails" component={ProductDetails} />
  </SearchStack.Navigator>
);
