import {createSlice} from '@reduxjs/toolkit';
import {PromoSchema} from '../schema/promo-schema';
import {fetchPromoProduct} from '../services/fetch-promo-product/fetch-promo-product';

const initialState: PromoSchema = {
  product: null,
  isLoaded: false,
};

export const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoaded = true;
      });
  }
});

export const { actions: promoActions } = promoSlice;
export const { reducer: promoReducer } = promoSlice;
