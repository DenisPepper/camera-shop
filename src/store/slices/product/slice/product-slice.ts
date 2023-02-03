import {createSlice} from '@reduxjs/toolkit';
import {ProductSchema} from '../types/product-schema';
import {fetchProductById} from '../services/fetch-product-by-id/fetch-product-by-id';

const initialState: ProductSchema = {
  product: null,
  isLoaded: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoaded = true;
      });
  }
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
