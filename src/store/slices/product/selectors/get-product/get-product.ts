import {getProductSlice} from '../get-product-slice/get-product-slice';
import {createSelector} from '@reduxjs/toolkit';

export const getProduct = createSelector(getProductSlice, (productSlice) => productSlice.product);
