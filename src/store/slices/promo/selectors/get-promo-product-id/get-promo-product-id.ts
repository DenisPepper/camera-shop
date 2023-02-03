import {createSelector} from '@reduxjs/toolkit';
import {getPromoProduct} from '../get-promo-product/get-promo-product';
import {PromoProductType} from '../../../../../types/promo-product-type';

export const getPromoProductId = createSelector(
  getPromoProduct,
  (product: PromoProductType | null) => product?.id
);
