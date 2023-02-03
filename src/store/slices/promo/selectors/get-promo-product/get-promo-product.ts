import { createSelector } from '@reduxjs/toolkit';
import {PromoSchema} from '../../types/promo-schema';
import {getPromo} from '../get-promo/get-promo';

export const getPromoProduct = createSelector(getPromo, (promo: PromoSchema) => promo.product);
