import {createSlice} from '@reduxjs/toolkit';
import {ProductSchema} from '../schema/product-schema';
import {fetchProductByIdWithReviews} from '../../../../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';
import {fetchProducts} from '../../../../services/fetch-products/fetch-products';

const initialState: ProductSchema = {
  product: null,
  products: [],
  totalPagesCount: 0,
  isLoading: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductByIdWithReviews.fulfilled, (state, action) => {
        state.product = action.payload.product;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.totalPagesCount = action.payload.totalPagesCount;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products = [];
        state.totalPagesCount = 0;
        state.isLoading = false;
      });
  }
});

export const {actions: productActions} = productSlice;
export const {reducer: productReducer} = productSlice;
