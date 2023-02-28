import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductSchema} from '../schema/product-schema';
import {fetchProductByIdWithReviews} from '../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';
import {ProductType} from '../../../../types/product-type';

const initialState: ProductSchema = {
  product: null,
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductByIdWithReviews.fulfilled, (state, action) => {
        state.product = action.payload.product;
      });
  }
});

export const {actions: productActions} = productSlice;
export const {reducer: productReducer} = productSlice;
