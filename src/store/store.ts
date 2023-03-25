import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';
import {promoReducer} from './slices/promo/slice/promo-slice';
import {productReducer} from './slices/product/slice/product-slice';
import {similarReducer} from './slices/similar/slice/similar-slice';
import {reviewReducer} from './slices/review/slice/review-slice';
import {reviewPopupReducer} from './slices/review-popup/slice/review-popup-slice';
import {gratefulFeedbackPopupReducer} from './slices/grateful-feedback-popup/slice/grateful-feedback-popup-slice';
import {searchParamsReducer} from './slices/search-params/slice/search-params-slice';
import {errorSliceReducer} from './slices/error/slice/error-slice';
import {cartReducer} from './slices/cart/slice/cart-slice';

export const buildStore = (initialState?: StateSchema) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    promo: promoReducer,
    product: productReducer,
    similar: similarReducer,
    review: reviewReducer,
    reviewPopup: reviewPopupReducer,
    gratefulFeedbackPopup: gratefulFeedbackPopupReducer,
    searchParams: searchParamsReducer,
    error: errorSliceReducer,
    cart: cartReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};

export type AppDispatch = ReturnType<typeof buildStore>['dispatch'];
