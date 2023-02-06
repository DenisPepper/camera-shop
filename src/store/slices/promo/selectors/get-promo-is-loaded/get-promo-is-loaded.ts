import { createSelector } from '@reduxjs/toolkit';
import {PromoSchema} from '../../schema/promo-schema';
import {getPromo} from '../get-promo/get-promo';

export const getPromoIsLoaded = createSelector(getPromo, (promo: PromoSchema) => promo.isLoaded);
