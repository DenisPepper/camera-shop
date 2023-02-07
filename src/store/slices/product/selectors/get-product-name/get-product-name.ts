import {createSelector} from '@reduxjs/toolkit';
import {getProduct} from '../get-product/get-product';
import {ProductType} from '../../../../../types/product-type';

export const getProductName = createSelector(getProduct, (product: ProductType | null) => product?.name);
