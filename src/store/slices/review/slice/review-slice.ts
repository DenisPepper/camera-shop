import {createSlice} from '@reduxjs/toolkit';
import {ReviewSchema} from '../schema/review-schema';
import {postReview} from '../../../../services/post-review/post-review';
import {
  fetchProductByIdWithReviews
} from '../../../../services/fetch-product-by-id-with-reviews/fetch-product-by-id-with-reviews';

const initialState: ReviewSchema = {
  list: [],
  totalCount: 0,
};

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductByIdWithReviews.pending, (state) => {
        state.totalCount = 0;
        state.list = [];
      })
      .addCase(fetchProductByIdWithReviews.fulfilled, (state, action) => {
        state.totalCount = action.payload.reviewCount;
        state.list = action.payload.reviews;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.list = [...state.list, action.payload];
        state.totalCount = state.totalCount + 1;
      });
  }
});

export const {actions: reviewActions} = reviewSlice;
export const {reducer: reviewReducer} = reviewSlice;
