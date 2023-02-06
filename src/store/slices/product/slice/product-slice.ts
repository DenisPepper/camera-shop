import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductSchema} from '../schema/product-schema';
import {fetchProductById} from '../services/fetch-product-by-id/fetch-product-by-id';
import {ProductType} from '../../../../types/product-type';

const initialState: ProductSchema = {
  product: null,
  products: [],
  isLoaded: false,
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
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoaded = true;
      });
  }
});

export const {actions: productActions} = productSlice;
export const {reducer: productReducer} = productSlice;
