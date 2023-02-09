import {createSelector} from '@reduxjs/toolkit';
import {getProduct} from '../get-product/get-product';
import {ProductType} from '../../../../../types/product-type';

export const getProductId = createSelector(getProduct, (product: ProductType | null) => product?.id);
