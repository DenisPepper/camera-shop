import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ErrorSchema} from '../schema/error-schema';
import {
  fetchProductByIdWithReviews
} from '../../../../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';
import {fetchProducts} from '../../../../services/fetch-products/fetch-products';
import {fetchPromoProduct} from '../../../../services/fetch-promo-product/fetch-promo-product';
import {fetchSimilar} from '../../../../services/fetch-similar/fetch-similar';
import {postReview} from '../../../../services/post-review/post-review';

const initialState: ErrorSchema = {
  errors: [],
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    addError: (state, action: PayloadAction<string>) => {
      const errorsWithoutNew = state.errors.filter((err) => err !== action.payload);
      state.errors = [...errorsWithoutNew, action.payload];
    },
    removeErrors: (state) => {
      state.errors = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductByIdWithReviews.rejected, (state, action) => {
        if (action.payload) {
          const errorsWithoutNew = state.errors.filter((err) => err !== action.payload);
          state.errors = [...errorsWithoutNew, action.payload];
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        if (action.payload) {
          const errorsWithoutNew = state.errors.filter((err) => err !== action.payload);
          state.errors = [...errorsWithoutNew, action.payload];
        }
      })
      .addCase(fetchPromoProduct.rejected, (state, action) => {
        if (action.payload) {
          const errorsWithoutNew = state.errors.filter((err) => err !== action.payload);
          state.errors = [...errorsWithoutNew, action.payload];
        }
      })
      .addCase(fetchSimilar.rejected, (state, action) => {
        if (action.payload) {
          const errorsWithoutNew = state.errors.filter((err) => err !== action.payload);
          state.errors = [...errorsWithoutNew, action.payload];
        }
      })
      .addCase(postReview.rejected, (state, action) => {
        if (action.payload) {
          const errorsWithoutNew = state.errors.filter((err) => err !== action.payload);
          state.errors = [...errorsWithoutNew, action.payload];
        }
      });
  },
});

export const {actions: errorSliceActions} = errorSlice;
export const {reducer: errorSliceReducer} = errorSlice;
