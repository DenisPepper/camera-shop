import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import {promoReducer} from './slices/promo/slice/promo-slice';
import {productReducer} from './slices/product/slice/product-slice';
import {similarReducer} from './slices/similar/slice/similar-slice';
import {reviewReducer} from './slices/review/slice/review-slice';

export const buildStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    promo: promoReducer,
    product: productReducer,
    similar: similarReducer,
    review: reviewReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export type AppDispatch = ReturnType<typeof buildStore>['dispatch'];
