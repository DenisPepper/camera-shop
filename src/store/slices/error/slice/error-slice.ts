import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ErrorSchema} from '../schema/error-schema';
import {
  fetchProductByIdWithReviews
} from '../../../../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';

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
      });
  },
});

export const {actions: errorSliceActions} = errorSlice;
export const {reducer: errorSliceReducer} = errorSlice;
